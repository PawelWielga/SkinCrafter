function J_(s,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in s)){const u=Object.getOwnPropertyDescriptor(r,a);u&&Object.defineProperty(s,a,u.get?u:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Dm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var hc={exports:{}},Ro={},pc={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function ev(){if(Sp)return mt;Sp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function x(N,ne,De){this.props=N,this.context=ne,this.refs=A,this.updater=De||y}x.prototype.isReactComponent={},x.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function g(){}g.prototype=x.prototype;function U(N,ne,De){this.props=N,this.context=ne,this.refs=A,this.updater=De||y}var D=U.prototype=new g;D.constructor=U,T(D,x.prototype),D.isPureReactComponent=!0;var P=Array.isArray,G=Object.prototype.hasOwnProperty,F={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function X(N,ne,De){var Z,fe={},Ee=null,xe=null;if(ne!=null)for(Z in ne.ref!==void 0&&(xe=ne.ref),ne.key!==void 0&&(Ee=""+ne.key),ne)G.call(ne,Z)&&!I.hasOwnProperty(Z)&&(fe[Z]=ne[Z]);var we=arguments.length-2;if(we===1)fe.children=De;else if(1<we){for(var Ye=Array(we),ze=0;ze<we;ze++)Ye[ze]=arguments[ze+2];fe.children=Ye}if(N&&N.defaultProps)for(Z in we=N.defaultProps,we)fe[Z]===void 0&&(fe[Z]=we[Z]);return{$$typeof:s,type:N,key:Ee,ref:xe,props:fe,_owner:F.current}}function C(N,ne){return{$$typeof:s,type:N.type,key:ne,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function z(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(De){return ne[De]})}var oe=/\/+/g;function Q(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?z(""+N.key):ne.toString(36)}function ce(N,ne,De,Z,fe){var Ee=typeof N;(Ee==="undefined"||Ee==="boolean")&&(N=null);var xe=!1;if(N===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(N.$$typeof){case s:case e:xe=!0}}if(xe)return xe=N,fe=fe(xe),N=Z===""?"."+Q(xe,0):Z,P(fe)?(De="",N!=null&&(De=N.replace(oe,"$&/")+"/"),ce(fe,ne,De,"",function(ze){return ze})):fe!=null&&(R(fe)&&(fe=C(fe,De+(!fe.key||xe&&xe.key===fe.key?"":(""+fe.key).replace(oe,"$&/")+"/")+N)),ne.push(fe)),1;if(xe=0,Z=Z===""?".":Z+":",P(N))for(var we=0;we<N.length;we++){Ee=N[we];var Ye=Z+Q(Ee,we);xe+=ce(Ee,ne,De,Ye,fe)}else if(Ye=S(N),typeof Ye=="function")for(N=Ye.call(N),we=0;!(Ee=N.next()).done;)Ee=Ee.value,Ye=Z+Q(Ee,we++),xe+=ce(Ee,ne,De,Ye,fe);else if(Ee==="object")throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return xe}function de(N,ne,De){if(N==null)return N;var Z=[],fe=0;return ce(N,Z,"","",function(Ee){return ne.call(De,Ee,fe++)}),Z}function re(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(De){(N._status===0||N._status===-1)&&(N._status=1,N._result=De)},function(De){(N._status===0||N._status===-1)&&(N._status=2,N._result=De)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var le={current:null},B={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:F};function J(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:de,forEach:function(N,ne,De){de(N,function(){ne.apply(this,arguments)},De)},count:function(N){var ne=0;return de(N,function(){ne++}),ne},toArray:function(N){return de(N,function(ne){return ne})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},mt.Component=x,mt.Fragment=n,mt.Profiler=a,mt.PureComponent=U,mt.StrictMode=r,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,mt.act=J,mt.cloneElement=function(N,ne,De){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Z=T({},N.props),fe=N.key,Ee=N.ref,xe=N._owner;if(ne!=null){if(ne.ref!==void 0&&(Ee=ne.ref,xe=F.current),ne.key!==void 0&&(fe=""+ne.key),N.type&&N.type.defaultProps)var we=N.type.defaultProps;for(Ye in ne)G.call(ne,Ye)&&!I.hasOwnProperty(Ye)&&(Z[Ye]=ne[Ye]===void 0&&we!==void 0?we[Ye]:ne[Ye])}var Ye=arguments.length-2;if(Ye===1)Z.children=De;else if(1<Ye){we=Array(Ye);for(var ze=0;ze<Ye;ze++)we[ze]=arguments[ze+2];Z.children=we}return{$$typeof:s,type:N.type,key:fe,ref:Ee,props:Z,_owner:xe}},mt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},mt.createElement=X,mt.createFactory=function(N){var ne=X.bind(null,N);return ne.type=N,ne},mt.createRef=function(){return{current:null}},mt.forwardRef=function(N){return{$$typeof:d,render:N}},mt.isValidElement=R,mt.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:re}},mt.memo=function(N,ne){return{$$typeof:m,type:N,compare:ne===void 0?null:ne}},mt.startTransition=function(N){var ne=B.transition;B.transition={};try{N()}finally{B.transition=ne}},mt.unstable_act=J,mt.useCallback=function(N,ne){return le.current.useCallback(N,ne)},mt.useContext=function(N){return le.current.useContext(N)},mt.useDebugValue=function(){},mt.useDeferredValue=function(N){return le.current.useDeferredValue(N)},mt.useEffect=function(N,ne){return le.current.useEffect(N,ne)},mt.useId=function(){return le.current.useId()},mt.useImperativeHandle=function(N,ne,De){return le.current.useImperativeHandle(N,ne,De)},mt.useInsertionEffect=function(N,ne){return le.current.useInsertionEffect(N,ne)},mt.useLayoutEffect=function(N,ne){return le.current.useLayoutEffect(N,ne)},mt.useMemo=function(N,ne){return le.current.useMemo(N,ne)},mt.useReducer=function(N,ne,De){return le.current.useReducer(N,ne,De)},mt.useRef=function(N){return le.current.useRef(N)},mt.useState=function(N){return le.current.useState(N)},mt.useSyncExternalStore=function(N,ne,De){return le.current.useSyncExternalStore(N,ne,De)},mt.useTransition=function(){return le.current.useTransition()},mt.version="18.3.1",mt}var yp;function zf(){return yp||(yp=1,pc.exports=ev()),pc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function tv(){if(Mp)return Ro;Mp=1;var s=zf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var _,v={},S=null,y=null;m!==void 0&&(S=""+m),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(y=h.ref);for(_ in h)r.call(h,_)&&!u.hasOwnProperty(_)&&(v[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:d,key:S,ref:y,props:v,_owner:a.current}}return Ro.Fragment=n,Ro.jsx=c,Ro.jsxs=c,Ro}var Ep;function nv(){return Ep||(Ep=1,hc.exports=tv()),hc.exports}var Ce=nv(),Ke=zf();const Vo=Dm(Ke),iv=J_({__proto__:null,default:Vo},[Ke]);var el={},mc={exports:{}},Dn={},gc={exports:{}},_c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function rv(){return Tp||(Tp=1,function(s){function e(B,ae){var J=B.length;B.push(ae);e:for(;0<J;){var N=J-1>>>1,ne=B[N];if(0<a(ne,ae))B[N]=ae,B[J]=ne,J=N;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ae=B[0],J=B.pop();if(J!==ae){B[0]=J;e:for(var N=0,ne=B.length,De=ne>>>1;N<De;){var Z=2*(N+1)-1,fe=B[Z],Ee=Z+1,xe=B[Ee];if(0>a(fe,J))Ee<ne&&0>a(xe,fe)?(B[N]=xe,B[Ee]=J,N=Ee):(B[N]=fe,B[Z]=J,N=Z);else if(Ee<ne&&0>a(xe,J))B[N]=xe,B[Ee]=J,N=Ee;else break e}}return ae}function a(B,ae){var J=B.sortIndex-ae.sortIndex;return J!==0?J:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var h=[],m=[],_=1,v=null,S=3,y=!1,T=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(B){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=B)r(m),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=n(m)}}function P(B){if(A=!1,D(B),!T)if(n(h)!==null)T=!0,re(G);else{var ae=n(m);ae!==null&&le(P,ae.startTime-B)}}function G(B,ae){T=!1,A&&(A=!1,g(X),X=-1),y=!0;var J=S;try{for(D(ae),v=n(h);v!==null&&(!(v.expirationTime>ae)||B&&!z());){var N=v.callback;if(typeof N=="function"){v.callback=null,S=v.priorityLevel;var ne=N(v.expirationTime<=ae);ae=s.unstable_now(),typeof ne=="function"?v.callback=ne:v===n(h)&&r(h),D(ae)}else r(h);v=n(h)}if(v!==null)var De=!0;else{var Z=n(m);Z!==null&&le(P,Z.startTime-ae),De=!1}return De}finally{v=null,S=J,y=!1}}var F=!1,I=null,X=-1,C=5,R=-1;function z(){return!(s.unstable_now()-R<C)}function oe(){if(I!==null){var B=s.unstable_now();R=B;var ae=!0;try{ae=I(!0,B)}finally{ae?Q():(F=!1,I=null)}}else F=!1}var Q;if(typeof U=="function")Q=function(){U(oe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=oe,Q=function(){de.postMessage(null)}}else Q=function(){x(oe,0)};function re(B){I=B,F||(F=!0,Q())}function le(B,ae){X=x(function(){B(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){T||y||(T=!0,re(G))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(B){switch(S){case 1:case 2:case 3:var ae=3;break;default:ae=S}var J=S;S=ae;try{return B()}finally{S=J}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=S;S=B;try{return ae()}finally{S=J}},s.unstable_scheduleCallback=function(B,ae,J){var N=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?N+J:N):J=N,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=J+ne,B={id:_++,callback:ae,priorityLevel:B,startTime:J,expirationTime:ne,sortIndex:-1},J>N?(B.sortIndex=J,e(m,B),n(h)===null&&B===n(m)&&(A?(g(X),X=-1):A=!0,le(P,J-N))):(B.sortIndex=ne,e(h,B),T||y||(T=!0,re(G))),B},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(B){var ae=S;return function(){var J=S;S=ae;try{return B.apply(this,arguments)}finally{S=J}}}}(_c)),_c}var wp;function sv(){return wp||(wp=1,gc.exports=rv()),gc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function ov(){if(Ap)return Dn;Ap=1;var s=zf(),e=sv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function S(t){return h.call(v,t)?!0:h.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function y(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||y(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,f,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,U);x[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,U);x[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,U);x[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,l){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,f,l)&&(o=null),l||f===null?S(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),F=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,N;function ne(t){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var De=!1;function Z(t,i){if(!t||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var f=ee.stack.split(`
`),p=l.stack.split(`
`),M=f.length-1,L=p.length-1;1<=M&&0<=L&&f[M]!==p[L];)L--;for(;1<=M&&0<=L;M--,L--)if(f[M]!==p[L]){if(M!==1||L!==1)do if(M--,L--,0>L||f[M]!==p[L]){var k=`
`+f[M].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=M&&0<=L);break}}}finally{De=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function fe(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case F:return"Portal";case C:return"Profiler";case X:return"StrictMode";case Q:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case re:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ye(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ze(t){var i=Ye(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Tt(t){t._valueTracker||(t._valueTracker=ze(t))}function Rt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ye(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function O(t,i){var o=i.checked;return J({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Jt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function vt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function wt(t,i){vt(t,i);var o=we(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?gt(t,i.type,o):i.hasOwnProperty("defaultValue")&&gt(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Xe(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function gt(t,i,o){(i!=="number"||dt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ze=Array.isArray;function ot(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function zt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return J({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function b(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ze(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:we(o)}}function E(t,i){var o=we(i.value),l=we(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function K(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ue(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ue(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var se,qe=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(se=se||document.createElement("div"),se.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=se.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ae(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(t){$e.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Be[i]=Be[t]})});function _e(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Be.hasOwnProperty(t)&&Be[t]?(""+i).trim():i+"px"}function Ie(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=_e(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var nt=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(t,i){if(i){if(nt[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Re(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pe=null,ge=null,Ue=null;function ye(t){if(t=fo(t)){if(typeof Pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ma(i),Pe(t.stateNode,t.type,i))}}function he(t){ge?Ue?Ue.push(t):Ue=[t]:ge=t}function He(){if(ge){var t=ge,i=Ue;if(Ue=ge=null,ye(t),i)for(t=0;t<i.length;t++)ye(i[t])}}function lt(t,i){return t(i)}function bt(){}var xt=!1;function An(t,i,o){if(xt)return t(i,o);xt=!0;try{return lt(t,i,o)}finally{xt=!1,(ge!==null||Ue!==null)&&(bt(),He())}}function xn(t,i){var o=t.stateNode;if(o===null)return null;var l=ma(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Qr=!1;if(d)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Qr=!1}function xi(t,i,o,l,f,p,M,L,k){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(ve){this.onError(ve)}}var Si=!1,yr=null,Mr=!1,Vi=null,Yo={onError:function(t){Si=!0,yr=t}};function Jr(t,i,o,l,f,p,M,L,k){Si=!1,yr=null,xi.apply(Yo,arguments)}function qo(t,i,o,l,f,p,M,L,k){if(Jr.apply(this,arguments),Si){if(Si){var ee=yr;Si=!1,yr=null}else throw Error(n(198));Mr||(Mr=!0,Vi=ee)}}function li(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function $o(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ko(t){if(li(t)!==t)throw Error(n(188))}function Fl(t){var i=t.alternate;if(!i){if(i=li(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return Ko(f),t;if(p===l)return Ko(f),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=p;else{for(var M=!1,L=f.child;L;){if(L===o){M=!0,o=f,l=p;break}if(L===l){M=!0,l=f,o=p;break}L=L.sibling}if(!M){for(L=p.child;L;){if(L===o){M=!0,o=p,l=f;break}if(L===l){M=!0,l=p,o=f;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Zo(t){return t=Fl(t),t!==null?Qo(t):null}function Qo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Qo(t);if(i!==null)return i;t=t.sibling}return null}var Jo=e.unstable_scheduleCallback,w=e.unstable_cancelCallback,W=e.unstable_shouldYield,te=e.unstable_requestPaint,q=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,Fe=e.unstable_LowPriority,rt=e.unstable_IdlePriority,it=null,Ve=null;function ht(t){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(it,t,void 0,(t.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Ct,kt=Math.log,Ut=Math.LN2;function Ct(t){return t>>>=0,t===0?32:31-(kt(t)/Ut|0)|0}var Qe=64,Lt=4194304;function pt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function en(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~f;L!==0?l=pt(L):(p&=M,p!==0&&(l=pt(p)))}else M=o&~f,M!==0?l=pt(M):p!==0&&(l=pt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ct(i),f=1<<o,l|=t[o],i&=~f;return l}function Gi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-ct(p),L=1<<M,k=f[M];k===-1?((L&o)===0||(L&l)!==0)&&(f[M]=Gi(L,i)):k<=i&&(t.expiredLanes|=L),p&=~L}}function yi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nt(){var t=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),t}function fn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function tn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ct(i),t[i]=o}function ln(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-ct(o),p=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~p}}function nn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ct(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var St=0;function ui(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Jf,Ol,ed,td,nd,kl=!1,ea=[],Wi=null,Xi=null,ji=null,$s=new Map,Ks=new Map,Yi=[],yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function id(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":$s.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(i.pointerId)}}function Zs(t,i,o,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},i!==null&&(i=fo(i),i!==null&&Ol(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Mg(t,i,o,l,f){switch(i){case"focusin":return Wi=Zs(Wi,t,i,o,l,f),!0;case"dragenter":return Xi=Zs(Xi,t,i,o,l,f),!0;case"mouseover":return ji=Zs(ji,t,i,o,l,f),!0;case"pointerover":var p=f.pointerId;return $s.set(p,Zs($s.get(p)||null,t,i,o,l,f)),!0;case"gotpointercapture":return p=f.pointerId,Ks.set(p,Zs(Ks.get(p)||null,t,i,o,l,f)),!0}return!1}function rd(t){var i=Er(t.target);if(i!==null){var o=li(i);if(o!==null){if(i=o.tag,i===13){if(i=$o(o),i!==null){t.blockedOn=i,nd(t.priority,function(){ed(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ta(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=zl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);st=l,o.target.dispatchEvent(l),st=null}else return i=fo(o),i!==null&&Ol(i),t.blockedOn=o,!1;i.shift()}return!0}function sd(t,i,o){ta(t)&&o.delete(i)}function Eg(){kl=!1,Wi!==null&&ta(Wi)&&(Wi=null),Xi!==null&&ta(Xi)&&(Xi=null),ji!==null&&ta(ji)&&(ji=null),$s.forEach(sd),Ks.forEach(sd)}function Qs(t,i){t.blockedOn===i&&(t.blockedOn=null,kl||(kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Eg)))}function Js(t){function i(f){return Qs(f,t)}if(0<ea.length){Qs(ea[0],t);for(var o=1;o<ea.length;o++){var l=ea[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&Qs(Wi,t),Xi!==null&&Qs(Xi,t),ji!==null&&Qs(ji,t),$s.forEach(i),Ks.forEach(i),o=0;o<Yi.length;o++)l=Yi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(o=Yi[0],o.blockedOn===null);)rd(o),o.blockedOn===null&&Yi.shift()}var es=P.ReactCurrentBatchConfig,na=!0;function Tg(t,i,o,l){var f=St,p=es.transition;es.transition=null;try{St=1,Bl(t,i,o,l)}finally{St=f,es.transition=p}}function wg(t,i,o,l){var f=St,p=es.transition;es.transition=null;try{St=4,Bl(t,i,o,l)}finally{St=f,es.transition=p}}function Bl(t,i,o,l){if(na){var f=zl(t,i,o,l);if(f===null)iu(t,i,l,ia,o),id(t,l);else if(Mg(f,t,i,o,l))l.stopPropagation();else if(id(t,l),i&4&&-1<yg.indexOf(t)){for(;f!==null;){var p=fo(f);if(p!==null&&Jf(p),p=zl(t,i,o,l),p===null&&iu(t,i,l,ia,o),p===f)break;f=p}f!==null&&l.stopPropagation()}else iu(t,i,l,null,o)}}var ia=null;function zl(t,i,o,l){if(ia=null,t=H(l),t=Er(t),t!==null)if(i=li(t),i===null)t=null;else if(o=i.tag,o===13){if(t=$o(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ia=t,null}function od(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case Me:return 1;case be:return 4;case Oe:case Fe:return 16;case rt:return 536870912;default:return 16}default:return 16}}var qi=null,Hl=null,ra=null;function ad(){if(ra)return ra;var t,i=Hl,o=i.length,l,f="value"in qi?qi.value:qi.textContent,p=f.length;for(t=0;t<o&&i[t]===f[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===f[p-l];l++);return ra=f.slice(t,1<l?1-l:void 0)}function sa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function ld(){return!1}function In(t){function i(o,l,f,p,M){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(p):p[L]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?oa:ld,this.isPropagationStopped=ld,this}return J(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=In(ts),eo=J({},ts,{view:0,detail:0}),Ag=In(eo),Gl,Wl,to,aa=J({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Gl=t.screenX-to.screenX,Wl=t.screenY-to.screenY):Wl=Gl=0,to=t),Gl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),ud=In(aa),Rg=J({},aa,{dataTransfer:0}),Cg=In(Rg),Pg=J({},eo,{relatedTarget:0}),Xl=In(Pg),bg=J({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Lg=In(bg),Dg=J({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ug=In(Dg),Ng=J({},ts,{data:0}),cd=In(Ng),Ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Og[t])?!!i[t]:!1}function jl(){return kg}var Bg=J({},eo,{key:function(t){if(t.key){var i=Ig[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(t){return t.type==="keypress"?sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zg=In(Bg),Hg=J({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=In(Hg),Vg=J({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),Gg=In(Vg),Wg=J({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xg=In(Wg),jg=J({},aa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yg=In(jg),qg=[9,13,27,32],Yl=d&&"CompositionEvent"in window,no=null;d&&"documentMode"in document&&(no=document.documentMode);var $g=d&&"TextEvent"in window&&!no,dd=d&&(!Yl||no&&8<no&&11>=no),hd=" ",pd=!1;function md(t,i){switch(t){case"keyup":return qg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function Kg(t,i){switch(t){case"compositionend":return gd(i);case"keypress":return i.which!==32?null:(pd=!0,hd);case"textInput":return t=i.data,t===hd&&pd?null:t;default:return null}}function Zg(t,i){if(ns)return t==="compositionend"||!Yl&&md(t,i)?(t=ad(),ra=Hl=qi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return dd&&i.locale!=="ko"?null:i.data;default:return null}}var Qg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _d(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Qg[t.type]:i==="textarea"}function vd(t,i,o,l){he(l),i=da(i,"onChange"),0<i.length&&(o=new Vl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var io=null,ro=null;function Jg(t){Fd(t,0)}function la(t){var i=as(t);if(Rt(i))return t}function e_(t,i){if(t==="change")return i}var xd=!1;if(d){var ql;if(d){var $l="oninput"in document;if(!$l){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),$l=typeof Sd.oninput=="function"}ql=$l}else ql=!1;xd=ql&&(!document.documentMode||9<document.documentMode)}function yd(){io&&(io.detachEvent("onpropertychange",Md),ro=io=null)}function Md(t){if(t.propertyName==="value"&&la(ro)){var i=[];vd(i,ro,t,H(t)),An(Jg,i)}}function t_(t,i,o){t==="focusin"?(yd(),io=i,ro=o,io.attachEvent("onpropertychange",Md)):t==="focusout"&&yd()}function n_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return la(ro)}function i_(t,i){if(t==="click")return la(i)}function r_(t,i){if(t==="input"||t==="change")return la(i)}function s_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:s_;function so(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!h.call(i,f)||!Zn(t[f],i[f]))return!1}return!0}function Ed(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Td(t,i){var o=Ed(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ed(o)}}function wd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?wd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ad(){for(var t=window,i=dt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=dt(t.document)}return i}function Kl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function o_(t){var i=Ad(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&wd(o.ownerDocument.documentElement,o)){if(l!==null&&Kl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,p=Math.min(l.start,f);l=l.end===void 0?p:Math.min(l.end,f),!t.extend&&p>l&&(f=l,l=p,p=f),f=Td(o,p);var M=Td(o,l);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var a_=d&&"documentMode"in document&&11>=document.documentMode,is=null,Zl=null,oo=null,Ql=!1;function Rd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ql||is==null||is!==dt(l)||(l=is,"selectionStart"in l&&Kl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oo&&so(oo,l)||(oo=l,l=da(Zl,"onSelect"),0<l.length&&(i=new Vl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=is)))}function ua(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var rs={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},Jl={},Cd={};d&&(Cd=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function ca(t){if(Jl[t])return Jl[t];if(!rs[t])return t;var i=rs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Cd)return Jl[t]=i[o];return t}var Pd=ca("animationend"),bd=ca("animationiteration"),Ld=ca("animationstart"),Dd=ca("transitionend"),Ud=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Ud.set(t,i),u(i,[t])}for(var eu=0;eu<Nd.length;eu++){var tu=Nd[eu],l_=tu.toLowerCase(),u_=tu[0].toUpperCase()+tu.slice(1);$i(l_,"on"+u_)}$i(Pd,"onAnimationEnd"),$i(bd,"onAnimationIteration"),$i(Ld,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Dd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Id(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,qo(l,i,void 0,t),t.currentTarget=null}function Fd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],k=L.instance,ee=L.currentTarget;if(L=L.listener,k!==p&&f.isPropagationStopped())break e;Id(f,L,ee),p=k}else for(M=0;M<l.length;M++){if(L=l[M],k=L.instance,ee=L.currentTarget,L=L.listener,k!==p&&f.isPropagationStopped())break e;Id(f,L,ee),p=k}}}if(Mr)throw t=Vi,Mr=!1,Vi=null,t}function Ft(t,i){var o=i[uu];o===void 0&&(o=i[uu]=new Set);var l=t+"__bubble";o.has(l)||(Od(i,t,2,!1),o.add(l))}function nu(t,i,o){var l=0;i&&(l|=4),Od(o,t,l,i)}var fa="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[fa]){t[fa]=!0,r.forEach(function(o){o!=="selectionchange"&&(c_.has(o)||nu(o,!1,t),nu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fa]||(i[fa]=!0,nu("selectionchange",!1,i))}}function Od(t,i,o,l){switch(od(i)){case 1:var f=Tg;break;case 4:f=wg;break;default:f=Bl}o=f.bind(null,i,o,t),f=void 0,!Qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function iu(t,i,o,l,f){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===f||L.nodeType===8&&L.parentNode===f)break;if(M===4)for(M=l.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;M=M.return}for(;L!==null;){if(M=Er(L),M===null)return;if(k=M.tag,k===5||k===6){l=p=M;continue e}L=L.parentNode}}l=l.return}An(function(){var ee=p,ve=H(o),Se=[];e:{var me=Ud.get(t);if(me!==void 0){var Ne=Vl,Ge=t;switch(t){case"keypress":if(sa(o)===0)break e;case"keydown":case"keyup":Ne=zg;break;case"focusin":Ge="focus",Ne=Xl;break;case"focusout":Ge="blur",Ne=Xl;break;case"beforeblur":case"afterblur":Ne=Xl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=Cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=Gg;break;case Pd:case bd:case Ld:Ne=Lg;break;case Dd:Ne=Xg;break;case"scroll":Ne=Ag;break;case"wheel":Ne=Yg;break;case"copy":case"cut":case"paste":Ne=Ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=fd}var We=(i&4)!==0,jt=!We&&t==="scroll",Y=We?me!==null?me+"Capture":null:me;We=[];for(var V=ee,$;V!==null;){$=V;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,Y!==null&&(Te=xn(V,Y),Te!=null&&We.push(uo(V,Te,$)))),jt)break;V=V.return}0<We.length&&(me=new Ne(me,Ge,null,o,ve),Se.push({event:me,listeners:We}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Ne=t==="mouseout"||t==="pointerout",me&&o!==st&&(Ge=o.relatedTarget||o.fromElement)&&(Er(Ge)||Ge[Mi]))break e;if((Ne||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,Ne?(Ge=o.relatedTarget||o.toElement,Ne=ee,Ge=Ge?Er(Ge):null,Ge!==null&&(jt=li(Ge),Ge!==jt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Ne=null,Ge=ee),Ne!==Ge)){if(We=ud,Te="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(We=fd,Te="onPointerLeave",Y="onPointerEnter",V="pointer"),jt=Ne==null?me:as(Ne),$=Ge==null?me:as(Ge),me=new We(Te,V+"leave",Ne,o,ve),me.target=jt,me.relatedTarget=$,Te=null,Er(ve)===ee&&(We=new We(Y,V+"enter",Ge,o,ve),We.target=$,We.relatedTarget=jt,Te=We),jt=Te,Ne&&Ge)t:{for(We=Ne,Y=Ge,V=0,$=We;$;$=ss($))V++;for($=0,Te=Y;Te;Te=ss(Te))$++;for(;0<V-$;)We=ss(We),V--;for(;0<$-V;)Y=ss(Y),$--;for(;V--;){if(We===Y||Y!==null&&We===Y.alternate)break t;We=ss(We),Y=ss(Y)}We=null}else We=null;Ne!==null&&kd(Se,me,Ne,We,!1),Ge!==null&&jt!==null&&kd(Se,jt,Ge,We,!0)}}e:{if(me=ee?as(ee):window,Ne=me.nodeName&&me.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&me.type==="file")var je=e_;else if(_d(me))if(xd)je=r_;else{je=n_;var et=t_}else(Ne=me.nodeName)&&Ne.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(je=i_);if(je&&(je=je(t,ee))){vd(Se,je,o,ve);break e}et&&et(t,me,ee),t==="focusout"&&(et=me._wrapperState)&&et.controlled&&me.type==="number"&&gt(me,"number",me.value)}switch(et=ee?as(ee):window,t){case"focusin":(_d(et)||et.contentEditable==="true")&&(is=et,Zl=ee,oo=null);break;case"focusout":oo=Zl=is=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,Rd(Se,o,ve);break;case"selectionchange":if(a_)break;case"keydown":case"keyup":Rd(Se,o,ve)}var tt;if(Yl)e:{switch(t){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else ns?md(t,o)&&(at="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(at="onCompositionStart");at&&(dd&&o.locale!=="ko"&&(ns||at!=="onCompositionStart"?at==="onCompositionEnd"&&ns&&(tt=ad()):(qi=ve,Hl="value"in qi?qi.value:qi.textContent,ns=!0)),et=da(ee,at),0<et.length&&(at=new cd(at,t,null,o,ve),Se.push({event:at,listeners:et}),tt?at.data=tt:(tt=gd(o),tt!==null&&(at.data=tt)))),(tt=$g?Kg(t,o):Zg(t,o))&&(ee=da(ee,"onBeforeInput"),0<ee.length&&(ve=new cd("onBeforeInput","beforeinput",null,o,ve),Se.push({event:ve,listeners:ee}),ve.data=tt))}Fd(Se,i)})}function uo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function da(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=xn(t,o),p!=null&&l.unshift(uo(t,p,f)),p=xn(t,i),p!=null&&l.push(uo(t,p,f))),t=t.return}return l}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kd(t,i,o,l,f){for(var p=i._reactName,M=[];o!==null&&o!==l;){var L=o,k=L.alternate,ee=L.stateNode;if(k!==null&&k===l)break;L.tag===5&&ee!==null&&(L=ee,f?(k=xn(o,p),k!=null&&M.unshift(uo(o,k,L))):f||(k=xn(o,p),k!=null&&M.push(uo(o,k,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var f_=/\r\n?/g,d_=/\u0000|\uFFFD/g;function Bd(t){return(typeof t=="string"?t:""+t).replace(f_,`
`).replace(d_,"")}function ha(t,i,o){if(i=Bd(i),Bd(t)!==i&&o)throw Error(n(425))}function pa(){}var ru=null,su=null;function ou(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,h_=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,p_=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(t){return zd.resolve(null).then(t).catch(m_)}:au;function m_(t){setTimeout(function(){throw t})}function lu(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),Js(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);Js(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Hd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),ci="__reactFiber$"+os,co="__reactProps$"+os,Mi="__reactContainer$"+os,uu="__reactEvents$"+os,g_="__reactListeners$"+os,__="__reactHandles$"+os;function Er(t){var i=t[ci];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Mi]||o[ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Hd(t);t!==null;){if(o=t[ci])return o;t=Hd(t)}return i}t=o,o=t.parentNode}return null}function fo(t){return t=t[ci]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ma(t){return t[co]||null}var cu=[],ls=-1;function Zi(t){return{current:t}}function Ot(t){0>ls||(t.current=cu[ls],cu[ls]=null,ls--)}function It(t,i){ls++,cu[ls]=t.current,t.current=i}var Qi={},dn=Zi(Qi),Rn=Zi(!1),Tr=Qi;function us(t,i){var o=t.type.contextTypes;if(!o)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Cn(t){return t=t.childContextTypes,t!=null}function ga(){Ot(Rn),Ot(dn)}function Vd(t,i,o){if(dn.current!==Qi)throw Error(n(168));It(dn,i),It(Rn,o)}function Gd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,xe(t)||"Unknown",f));return J({},o,l)}function _a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Tr=dn.current,It(dn,t),It(Rn,Rn.current),!0}function Wd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Gd(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,Ot(Rn),Ot(dn),It(dn,t)):Ot(Rn),It(Rn,o)}var Ei=null,va=!1,fu=!1;function Xd(t){Ei===null?Ei=[t]:Ei.push(t)}function v_(t){va=!0,Xd(t)}function Ji(){if(!fu&&Ei!==null){fu=!0;var t=0,i=St;try{var o=Ei;for(St=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ei=null,va=!1}catch(f){throw Ei!==null&&(Ei=Ei.slice(t+1)),Jo(Me,Ji),f}finally{St=i,fu=!1}}return null}var cs=[],fs=0,xa=null,Sa=0,Hn=[],Vn=0,wr=null,Ti=1,wi="";function Ar(t,i){cs[fs++]=Sa,cs[fs++]=xa,xa=t,Sa=i}function jd(t,i,o){Hn[Vn++]=Ti,Hn[Vn++]=wi,Hn[Vn++]=wr,wr=t;var l=Ti;t=wi;var f=32-ct(l)-1;l&=~(1<<f),o+=1;var p=32-ct(i)+f;if(30<p){var M=f-f%5;p=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Ti=1<<32-ct(i)+f|o<<f|l,wi=p+t}else Ti=1<<p|o<<f|l,wi=t}function du(t){t.return!==null&&(Ar(t,1),jd(t,1,0))}function hu(t){for(;t===xa;)xa=cs[--fs],cs[fs]=null,Sa=cs[--fs],cs[fs]=null;for(;t===wr;)wr=Hn[--Vn],Hn[Vn]=null,wi=Hn[--Vn],Hn[Vn]=null,Ti=Hn[--Vn],Hn[Vn]=null}var Fn=null,On=null,Bt=!1,Qn=null;function Yd(t,i){var o=jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function qd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Fn=t,On=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Fn=t,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=wr!==null?{id:Ti,overflow:wi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=jn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Fn=t,On=null,!0):!1;default:return!1}}function pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mu(t){if(Bt){var i=On;if(i){var o=i;if(!qd(t,i)){if(pu(t))throw Error(n(418));i=Ki(o.nextSibling);var l=Fn;i&&qd(t,i)?Yd(l,o):(t.flags=t.flags&-4097|2,Bt=!1,Fn=t)}}else{if(pu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Bt=!1,Fn=t}}}function $d(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function ya(t){if(t!==Fn)return!1;if(!Bt)return $d(t),Bt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ou(t.type,t.memoizedProps)),i&&(i=On)){if(pu(t))throw Kd(),Error(n(418));for(;i;)Yd(t,i),i=Ki(i.nextSibling)}if($d(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){On=Ki(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}On=null}}else On=Fn?Ki(t.stateNode.nextSibling):null;return!0}function Kd(){for(var t=On;t;)t=Ki(t.nextSibling)}function ds(){On=Fn=null,Bt=!1}function gu(t){Qn===null?Qn=[t]:Qn.push(t)}var x_=P.ReactCurrentBatchConfig;function ho(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var L=f.refs;M===null?delete L[p]:L[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Zd(t){var i=t._init;return i(t._payload)}function Qd(t){function i(Y,V){if(t){var $=Y.deletions;$===null?(Y.deletions=[V],Y.flags|=16):$.push(V)}}function o(Y,V){if(!t)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function l(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function f(Y,V){return Y=ar(Y,V),Y.index=0,Y.sibling=null,Y}function p(Y,V,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<V?(Y.flags|=2,V):$):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,V,$,Te){return V===null||V.tag!==6?(V=ac($,Y.mode,Te),V.return=Y,V):(V=f(V,$),V.return=Y,V)}function k(Y,V,$,Te){var je=$.type;return je===I?ve(Y,V,$.props.children,Te,$.key):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===re&&Zd(je)===V.type)?(Te=f(V,$.props),Te.ref=ho(Y,V,$),Te.return=Y,Te):(Te=ja($.type,$.key,$.props,null,Y.mode,Te),Te.ref=ho(Y,V,$),Te.return=Y,Te)}function ee(Y,V,$,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=lc($,Y.mode,Te),V.return=Y,V):(V=f(V,$.children||[]),V.return=Y,V)}function ve(Y,V,$,Te,je){return V===null||V.tag!==7?(V=Nr($,Y.mode,Te,je),V.return=Y,V):(V=f(V,$),V.return=Y,V)}function Se(Y,V,$){if(typeof V=="string"&&V!==""||typeof V=="number")return V=ac(""+V,Y.mode,$),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return $=ja(V.type,V.key,V.props,null,Y.mode,$),$.ref=ho(Y,null,V),$.return=Y,$;case F:return V=lc(V,Y.mode,$),V.return=Y,V;case re:var Te=V._init;return Se(Y,Te(V._payload),$)}if(Ze(V)||ae(V))return V=Nr(V,Y.mode,$,null),V.return=Y,V;Ma(Y,V)}return null}function me(Y,V,$,Te){var je=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return je!==null?null:L(Y,V,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case G:return $.key===je?k(Y,V,$,Te):null;case F:return $.key===je?ee(Y,V,$,Te):null;case re:return je=$._init,me(Y,V,je($._payload),Te)}if(Ze($)||ae($))return je!==null?null:ve(Y,V,$,Te,null);Ma(Y,$)}return null}function Ne(Y,V,$,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get($)||null,L(V,Y,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case G:return Y=Y.get(Te.key===null?$:Te.key)||null,k(V,Y,Te,je);case F:return Y=Y.get(Te.key===null?$:Te.key)||null,ee(V,Y,Te,je);case re:var et=Te._init;return Ne(Y,V,$,et(Te._payload),je)}if(Ze(Te)||ae(Te))return Y=Y.get($)||null,ve(V,Y,Te,je,null);Ma(V,Te)}return null}function Ge(Y,V,$,Te){for(var je=null,et=null,tt=V,at=V=0,on=null;tt!==null&&at<$.length;at++){tt.index>at?(on=tt,tt=null):on=tt.sibling;var Mt=me(Y,tt,$[at],Te);if(Mt===null){tt===null&&(tt=on);break}t&&tt&&Mt.alternate===null&&i(Y,tt),V=p(Mt,V,at),et===null?je=Mt:et.sibling=Mt,et=Mt,tt=on}if(at===$.length)return o(Y,tt),Bt&&Ar(Y,at),je;if(tt===null){for(;at<$.length;at++)tt=Se(Y,$[at],Te),tt!==null&&(V=p(tt,V,at),et===null?je=tt:et.sibling=tt,et=tt);return Bt&&Ar(Y,at),je}for(tt=l(Y,tt);at<$.length;at++)on=Ne(tt,Y,at,$[at],Te),on!==null&&(t&&on.alternate!==null&&tt.delete(on.key===null?at:on.key),V=p(on,V,at),et===null?je=on:et.sibling=on,et=on);return t&&tt.forEach(function(lr){return i(Y,lr)}),Bt&&Ar(Y,at),je}function We(Y,V,$,Te){var je=ae($);if(typeof je!="function")throw Error(n(150));if($=je.call($),$==null)throw Error(n(151));for(var et=je=null,tt=V,at=V=0,on=null,Mt=$.next();tt!==null&&!Mt.done;at++,Mt=$.next()){tt.index>at?(on=tt,tt=null):on=tt.sibling;var lr=me(Y,tt,Mt.value,Te);if(lr===null){tt===null&&(tt=on);break}t&&tt&&lr.alternate===null&&i(Y,tt),V=p(lr,V,at),et===null?je=lr:et.sibling=lr,et=lr,tt=on}if(Mt.done)return o(Y,tt),Bt&&Ar(Y,at),je;if(tt===null){for(;!Mt.done;at++,Mt=$.next())Mt=Se(Y,Mt.value,Te),Mt!==null&&(V=p(Mt,V,at),et===null?je=Mt:et.sibling=Mt,et=Mt);return Bt&&Ar(Y,at),je}for(tt=l(Y,tt);!Mt.done;at++,Mt=$.next())Mt=Ne(tt,Y,at,Mt.value,Te),Mt!==null&&(t&&Mt.alternate!==null&&tt.delete(Mt.key===null?at:Mt.key),V=p(Mt,V,at),et===null?je=Mt:et.sibling=Mt,et=Mt);return t&&tt.forEach(function(Q_){return i(Y,Q_)}),Bt&&Ar(Y,at),je}function jt(Y,V,$,Te){if(typeof $=="object"&&$!==null&&$.type===I&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case G:e:{for(var je=$.key,et=V;et!==null;){if(et.key===je){if(je=$.type,je===I){if(et.tag===7){o(Y,et.sibling),V=f(et,$.props.children),V.return=Y,Y=V;break e}}else if(et.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===re&&Zd(je)===et.type){o(Y,et.sibling),V=f(et,$.props),V.ref=ho(Y,et,$),V.return=Y,Y=V;break e}o(Y,et);break}else i(Y,et);et=et.sibling}$.type===I?(V=Nr($.props.children,Y.mode,Te,$.key),V.return=Y,Y=V):(Te=ja($.type,$.key,$.props,null,Y.mode,Te),Te.ref=ho(Y,V,$),Te.return=Y,Y=Te)}return M(Y);case F:e:{for(et=$.key;V!==null;){if(V.key===et)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){o(Y,V.sibling),V=f(V,$.children||[]),V.return=Y,Y=V;break e}else{o(Y,V);break}else i(Y,V);V=V.sibling}V=lc($,Y.mode,Te),V.return=Y,Y=V}return M(Y);case re:return et=$._init,jt(Y,V,et($._payload),Te)}if(Ze($))return Ge(Y,V,$,Te);if(ae($))return We(Y,V,$,Te);Ma(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,V!==null&&V.tag===6?(o(Y,V.sibling),V=f(V,$),V.return=Y,Y=V):(o(Y,V),V=ac($,Y.mode,Te),V.return=Y,Y=V),M(Y)):o(Y,V)}return jt}var hs=Qd(!0),Jd=Qd(!1),Ea=Zi(null),Ta=null,ps=null,_u=null;function vu(){_u=ps=Ta=null}function xu(t){var i=Ea.current;Ot(Ea),t._currentValue=i}function Su(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ms(t,i){Ta=t,_u=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Pn=!0),t.firstContext=null)}function Gn(t){var i=t._currentValue;if(_u!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(Ta===null)throw Error(n(308));ps=t,Ta.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Rr=null;function yu(t){Rr===null?Rr=[t]:Rr.push(t)}function eh(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,yu(i)):(o.next=f.next,f.next=o),i.interleaved=o,Ai(t,l)}function Ai(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var er=!1;function Mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function th(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Ai(t,o)}return f=l.interleaved,f===null?(i.next=i,yu(l)):(i.next=f.next,f.next=i),l.interleaved=i,Ai(t,o)}function wa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,nn(t,o)}}function nh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Aa(t,i,o,l){var f=t.updateQueue;er=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,L=f.shared.pending;if(L!==null){f.shared.pending=null;var k=L,ee=k.next;k.next=null,M===null?p=ee:M.next=ee,M=k;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,L=ve.lastBaseUpdate,L!==M&&(L===null?ve.firstBaseUpdate=ee:L.next=ee,ve.lastBaseUpdate=k))}if(p!==null){var Se=f.baseState;M=0,ve=ee=k=null,L=p;do{var me=L.lane,Ne=L.eventTime;if((l&me)===me){ve!==null&&(ve=ve.next={eventTime:Ne,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Ge=t,We=L;switch(me=i,Ne=o,We.tag){case 1:if(Ge=We.payload,typeof Ge=="function"){Se=Ge.call(Ne,Se,me);break e}Se=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=We.payload,me=typeof Ge=="function"?Ge.call(Ne,Se,me):Ge,me==null)break e;Se=J({},Se,me);break e;case 2:er=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,me=f.effects,me===null?f.effects=[L]:me.push(L))}else Ne={eventTime:Ne,lane:me,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ve===null?(ee=ve=Ne,k=Se):ve=ve.next=Ne,M|=me;if(L=L.next,L===null){if(L=f.shared.pending,L===null)break;me=L,L=me.next,me.next=null,f.lastBaseUpdate=me,f.shared.pending=null}}while(!0);if(ve===null&&(k=Se),f.baseState=k,f.firstBaseUpdate=ee,f.lastBaseUpdate=ve,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);br|=M,t.lanes=M,t.memoizedState=Se}}function ih(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var po={},fi=Zi(po),mo=Zi(po),go=Zi(po);function Cr(t){if(t===po)throw Error(n(174));return t}function Eu(t,i){switch(It(go,i),It(mo,t),It(fi,po),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=pe(i,t)}Ot(fi),It(fi,i)}function gs(){Ot(fi),Ot(mo),Ot(go)}function rh(t){Cr(go.current);var i=Cr(fi.current),o=pe(i,t.type);i!==o&&(It(mo,t),It(fi,o))}function Tu(t){mo.current===t&&(Ot(fi),Ot(mo))}var Ht=Zi(0);function Ra(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var wu=[];function Au(){for(var t=0;t<wu.length;t++)wu[t]._workInProgressVersionPrimary=null;wu.length=0}var Ca=P.ReactCurrentDispatcher,Ru=P.ReactCurrentBatchConfig,Pr=0,Vt=null,$t=null,rn=null,Pa=!1,_o=!1,vo=0,S_=0;function hn(){throw Error(n(321))}function Cu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Zn(t[o],i[o]))return!1;return!0}function Pu(t,i,o,l,f,p){if(Pr=p,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ca.current=t===null||t.memoizedState===null?T_:w_,t=o(l,f),_o){p=0;do{if(_o=!1,vo=0,25<=p)throw Error(n(301));p+=1,rn=$t=null,i.updateQueue=null,Ca.current=A_,t=o(l,f)}while(_o)}if(Ca.current=Da,i=$t!==null&&$t.next!==null,Pr=0,rn=$t=Vt=null,Pa=!1,i)throw Error(n(300));return t}function bu(){var t=vo!==0;return vo=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Vt.memoizedState=rn=t:rn=rn.next=t,rn}function Wn(){if($t===null){var t=Vt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=rn===null?Vt.memoizedState:rn.next;if(i!==null)rn=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},rn===null?Vt.memoizedState=rn=t:rn=rn.next=t}return rn}function xo(t,i){return typeof i=="function"?i(t):i}function Lu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=$t,f=l.baseQueue,p=o.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}l.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,l=l.baseState;var L=M=null,k=null,ee=p;do{var ve=ee.lane;if((Pr&ve)===ve)k!==null&&(k=k.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var Se={lane:ve,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};k===null?(L=k=Se,M=l):k=k.next=Se,Vt.lanes|=ve,br|=ve}ee=ee.next}while(ee!==null&&ee!==p);k===null?M=l:k.next=L,Zn(l,i.memoizedState)||(Pn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=k,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do p=f.lane,Vt.lanes|=p,br|=p,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Du(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var M=f=f.next;do p=t(p,M.action),M=M.next;while(M!==f);Zn(p,i.memoizedState)||(Pn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function sh(){}function oh(t,i){var o=Vt,l=Wn(),f=i(),p=!Zn(l.memoizedState,f);if(p&&(l.memoizedState=f,Pn=!0),l=l.queue,Uu(uh.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,So(9,lh.bind(null,o,l,f,i),void 0,null),sn===null)throw Error(n(349));(Pr&30)!==0||ah(o,i,f)}return f}function ah(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function lh(t,i,o,l){i.value=o,i.getSnapshot=l,ch(i)&&fh(t)}function uh(t,i,o){return o(function(){ch(i)&&fh(t)})}function ch(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Zn(t,o)}catch{return!0}}function fh(t){var i=Ai(t,1);i!==null&&ni(i,t,1,-1)}function dh(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},i.queue=t,t=t.dispatch=E_.bind(null,Vt,t),[i.memoizedState,t]}function So(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function hh(){return Wn().memoizedState}function ba(t,i,o,l){var f=di();Vt.flags|=t,f.memoizedState=So(1|i,o,void 0,l===void 0?null:l)}function La(t,i,o,l){var f=Wn();l=l===void 0?null:l;var p=void 0;if($t!==null){var M=$t.memoizedState;if(p=M.destroy,l!==null&&Cu(l,M.deps)){f.memoizedState=So(i,o,p,l);return}}Vt.flags|=t,f.memoizedState=So(1|i,o,p,l)}function ph(t,i){return ba(8390656,8,t,i)}function Uu(t,i){return La(2048,8,t,i)}function mh(t,i){return La(4,2,t,i)}function gh(t,i){return La(4,4,t,i)}function _h(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function vh(t,i,o){return o=o!=null?o.concat([t]):null,La(4,4,_h.bind(null,i,t),o)}function Nu(){}function xh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Cu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Sh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Cu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function yh(t,i,o){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=o):(Zn(o,i)||(o=Nt(),Vt.lanes|=o,br|=o,t.baseState=!0),i)}function y_(t,i){var o=St;St=o!==0&&4>o?o:4,t(!0);var l=Ru.transition;Ru.transition={};try{t(!1),i()}finally{St=o,Ru.transition=l}}function Mh(){return Wn().memoizedState}function M_(t,i,o){var l=sr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Eh(t))Th(i,o);else if(o=eh(t,i,o,l),o!==null){var f=Mn();ni(o,t,l,f),wh(o,i,l)}}function E_(t,i,o){var l=sr(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Eh(t))Th(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,L=p(M,o);if(f.hasEagerState=!0,f.eagerState=L,Zn(L,M)){var k=i.interleaved;k===null?(f.next=f,yu(i)):(f.next=k.next,k.next=f),i.interleaved=f;return}}catch{}finally{}o=eh(t,i,f,l),o!==null&&(f=Mn(),ni(o,t,l,f),wh(o,i,l))}}function Eh(t){var i=t.alternate;return t===Vt||i!==null&&i===Vt}function Th(t,i){_o=Pa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function wh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,nn(t,o)}}var Da={readContext:Gn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},T_={readContext:Gn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:ph,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,ba(4194308,4,_h.bind(null,i,t),o)},useLayoutEffect:function(t,i){return ba(4194308,4,t,i)},useInsertionEffect:function(t,i){return ba(4,2,t,i)},useMemo:function(t,i){var o=di();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=di();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=M_.bind(null,Vt,t),[l.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:dh,useDebugValue:Nu,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=dh(!1),i=t[0];return t=y_.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Vt,f=di();if(Bt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),sn===null)throw Error(n(349));(Pr&30)!==0||ah(l,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,ph(uh.bind(null,l,p,t),[t]),l.flags|=2048,So(9,lh.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=di(),i=sn.identifierPrefix;if(Bt){var o=wi,l=Ti;o=(l&~(1<<32-ct(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=vo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=S_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},w_={readContext:Gn,useCallback:xh,useContext:Gn,useEffect:Uu,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:Sh,useReducer:Lu,useRef:hh,useState:function(){return Lu(xo)},useDebugValue:Nu,useDeferredValue:function(t){var i=Wn();return yh(i,$t.memoizedState,t)},useTransition:function(){var t=Lu(xo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:sh,useSyncExternalStore:oh,useId:Mh,unstable_isNewReconciler:!1},A_={readContext:Gn,useCallback:xh,useContext:Gn,useEffect:Uu,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:Sh,useReducer:Du,useRef:hh,useState:function(){return Du(xo)},useDebugValue:Nu,useDeferredValue:function(t){var i=Wn();return $t===null?i.memoizedState=t:yh(i,$t.memoizedState,t)},useTransition:function(){var t=Du(xo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:sh,useSyncExternalStore:oh,useId:Mh,unstable_isNewReconciler:!1};function Jn(t,i){if(t&&t.defaultProps){i=J({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Iu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:J({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ua={isMounted:function(t){return(t=t._reactInternals)?li(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Mn(),f=sr(t),p=Ri(l,f);p.payload=i,o!=null&&(p.callback=o),i=tr(t,p,f),i!==null&&(ni(i,t,f,l),wa(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Mn(),f=sr(t),p=Ri(l,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=tr(t,p,f),i!==null&&(ni(i,t,f,l),wa(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Mn(),l=sr(t),f=Ri(o,l);f.tag=2,i!=null&&(f.callback=i),i=tr(t,f,l),i!==null&&(ni(i,t,l,o),wa(i,t,l))}};function Ah(t,i,o,l,f,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!so(o,l)||!so(f,p):!0}function Rh(t,i,o){var l=!1,f=Qi,p=i.contextType;return typeof p=="object"&&p!==null?p=Gn(p):(f=Cn(i)?Tr:dn.current,l=i.contextTypes,p=(l=l!=null)?us(t,f):Qi),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ua,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function Ch(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ua.enqueueReplaceState(i,i.state,null)}function Fu(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Mu(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Gn(p):(p=Cn(i)?Tr:dn.current,f.context=us(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Iu(t,i,p,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ua.enqueueReplaceState(f,f.state,null),Aa(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var o="",l=i;do o+=fe(l),l=l.return;while(l);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function Ou(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function ku(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var R_=typeof WeakMap=="function"?WeakMap:Map;function Ph(t,i,o){o=Ri(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){za||(za=!0,Ju=l),ku(t,i)},o}function bh(t,i,o){o=Ri(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){ku(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){ku(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Lh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new R_;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=H_.bind(null,t,i,o),i.then(t,t))}function Dh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Uh(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ri(-1,1),i.tag=2,tr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var C_=P.ReactCurrentOwner,Pn=!1;function yn(t,i,o,l){i.child=t===null?Jd(i,null,o,l):hs(i,t.child,o,l)}function Nh(t,i,o,l,f){o=o.render;var p=i.ref;return ms(i,f),l=Pu(t,i,o,l,p,f),o=bu(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ci(t,i,f)):(Bt&&o&&du(i),i.flags|=1,yn(t,i,l,f),i.child)}function Ih(t,i,o,l,f){if(t===null){var p=o.type;return typeof p=="function"&&!oc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Fh(t,i,p,l,f)):(t=ja(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:so,o(M,l)&&t.ref===i.ref)return Ci(t,i,f)}return i.flags|=1,t=ar(p,l),t.ref=i.ref,t.return=i,i.child=t}function Fh(t,i,o,l,f){if(t!==null){var p=t.memoizedProps;if(so(p,l)&&t.ref===i.ref)if(Pn=!1,i.pendingProps=l=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Pn=!0);else return i.lanes=t.lanes,Ci(t,i,f)}return Bu(t,i,o,l,f)}function Oh(t,i,o){var l=i.pendingProps,f=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(xs,kn),kn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,It(xs,kn),kn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,It(xs,kn),kn|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,It(xs,kn),kn|=l;return yn(t,i,f,o),i.child}function kh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Bu(t,i,o,l,f){var p=Cn(o)?Tr:dn.current;return p=us(i,p),ms(i,f),o=Pu(t,i,o,l,p,f),l=bu(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ci(t,i,f)):(Bt&&l&&du(i),i.flags|=1,yn(t,i,o,f),i.child)}function Bh(t,i,o,l,f){if(Cn(o)){var p=!0;_a(i)}else p=!1;if(ms(i,f),i.stateNode===null)Ia(t,i),Rh(i,o,l),Fu(i,o,l,f),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var k=M.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=Gn(ee):(ee=Cn(o)?Tr:dn.current,ee=us(i,ee));var ve=o.getDerivedStateFromProps,Se=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||k!==ee)&&Ch(i,M,l,ee),er=!1;var me=i.memoizedState;M.state=me,Aa(i,l,M,f),k=i.memoizedState,L!==l||me!==k||Rn.current||er?(typeof ve=="function"&&(Iu(i,o,ve,l),k=i.memoizedState),(L=er||Ah(i,o,L,l,me,k,ee))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),M.props=l,M.state=k,M.context=ee,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,th(t,i),L=i.memoizedProps,ee=i.type===i.elementType?L:Jn(i.type,L),M.props=ee,Se=i.pendingProps,me=M.context,k=o.contextType,typeof k=="object"&&k!==null?k=Gn(k):(k=Cn(o)?Tr:dn.current,k=us(i,k));var Ne=o.getDerivedStateFromProps;(ve=typeof Ne=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==Se||me!==k)&&Ch(i,M,l,k),er=!1,me=i.memoizedState,M.state=me,Aa(i,l,M,f);var Ge=i.memoizedState;L!==Se||me!==Ge||Rn.current||er?(typeof Ne=="function"&&(Iu(i,o,Ne,l),Ge=i.memoizedState),(ee=er||Ah(i,o,ee,l,me,Ge,k)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Ge,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Ge,k)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ge),M.props=l,M.state=Ge,M.context=k,l=ee):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return zu(t,i,o,l,p,f)}function zu(t,i,o,l,f,p){kh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return f&&Wd(i,o,!1),Ci(t,i,p);l=i.stateNode,C_.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=hs(i,t.child,null,p),i.child=hs(i,null,L,p)):yn(t,i,L,p),i.memoizedState=l.state,f&&Wd(i,o,!0),i.child}function zh(t){var i=t.stateNode;i.pendingContext?Vd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Vd(t,i.context,!1),Eu(t,i.containerInfo)}function Hh(t,i,o,l,f){return ds(),gu(f),i.flags|=256,yn(t,i,o,l),i.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Vu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vh(t,i,o){var l=i.pendingProps,f=Ht.current,p=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(f&2)!==0),L?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),It(Ht,f&1),t===null)return mu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Ya(M,l,0,null),t=Nr(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Vu(o),i.memoizedState=Hu,t):Gu(i,M));if(f=t.memoizedState,f!==null&&(L=f.dehydrated,L!==null))return P_(t,i,M,l,L,f,o);if(p){p=l.fallback,M=i.mode,f=t.child,L=f.sibling;var k={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=ar(f,k),l.subtreeFlags=f.subtreeFlags&14680064),L!==null?p=ar(L,p):(p=Nr(p,M,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?Vu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=Hu,l}return p=t.child,t=p.sibling,l=ar(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Gu(t,i){return i=Ya({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Na(t,i,o,l){return l!==null&&gu(l),hs(i,t.child,null,o),t=Gu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function P_(t,i,o,l,f,p,M){if(o)return i.flags&256?(i.flags&=-257,l=Ou(Error(n(422))),Na(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,f=i.mode,l=Ya({mode:"visible",children:l.children},f,0,null),p=Nr(p,f,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&hs(i,t.child,null,M),i.child.memoizedState=Vu(M),i.memoizedState=Hu,p);if((i.mode&1)===0)return Na(t,i,M,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var L=l.dgst;return l=L,p=Error(n(419)),l=Ou(p,l,void 0),Na(t,i,M,l)}if(L=(M&t.childLanes)!==0,Pn||L){if(l=sn,l!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|M))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Ai(t,f),ni(l,t,f,-1))}return sc(),l=Ou(Error(n(421))),Na(t,i,M,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=V_.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,On=Ki(f.nextSibling),Fn=i,Bt=!0,Qn=null,t!==null&&(Hn[Vn++]=Ti,Hn[Vn++]=wi,Hn[Vn++]=wr,Ti=t.id,wi=t.overflow,wr=i),i=Gu(i,l.children),i.flags|=4096,i)}function Gh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Su(t.return,i,o)}function Wu(t,i,o,l,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=f)}function Wh(t,i,o){var l=i.pendingProps,f=l.revealOrder,p=l.tail;if(yn(t,i,l.children,o),l=Ht.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gh(t,o,i);else if(t.tag===19)Gh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(It(Ht,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Ra(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Wu(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ra(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Wu(i,!0,o,null,p);break;case"together":Wu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ia(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),br|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ar(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ar(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function b_(t,i,o){switch(i.tag){case 3:zh(i),ds();break;case 5:rh(i);break;case 1:Cn(i.type)&&_a(i);break;case 4:Eu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;It(Ea,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(It(Ht,Ht.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Vh(t,i,o):(It(Ht,Ht.current&1),t=Ci(t,i,o),t!==null?t.sibling:null);It(Ht,Ht.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Wh(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),It(Ht,Ht.current),l)break;return null;case 22:case 23:return i.lanes=0,Oh(t,i,o)}return Ci(t,i,o)}var Xh,Xu,jh,Yh;Xh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Xu=function(){},jh=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Cr(fi.current);var p=null;switch(o){case"input":f=O(t,f),l=O(t,l),p=[];break;case"select":f=J({},f,{value:void 0}),l=J({},l,{value:void 0}),p=[];break;case"textarea":f=zt(t,f),l=zt(t,l),p=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=pa)}Je(o,l);var M;o=null;for(ee in f)if(!l.hasOwnProperty(ee)&&f.hasOwnProperty(ee)&&f[ee]!=null)if(ee==="style"){var L=f[ee];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?p||(p=[]):(p=p||[]).push(ee,null));for(ee in l){var k=l[ee];if(L=f?.[ee],l.hasOwnProperty(ee)&&k!==L&&(k!=null||L!=null))if(ee==="style")if(L){for(M in L)!L.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in k)k.hasOwnProperty(M)&&L[M]!==k[M]&&(o||(o={}),o[M]=k[M])}else o||(p||(p=[]),p.push(ee,o)),o=k;else ee==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,L=L?L.__html:void 0,k!=null&&L!==k&&(p=p||[]).push(ee,k)):ee==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(ee,""+k):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(k!=null&&ee==="onScroll"&&Ft("scroll",t),p||L===k||(p=[])):(p=p||[]).push(ee,k))}o&&(p=p||[]).push("style",o);var ee=p;(i.updateQueue=ee)&&(i.flags|=4)}},Yh=function(t,i,o,l){o!==l&&(i.flags|=4)};function yo(t,i){if(!Bt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function pn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function L_(t,i,o){var l=i.pendingProps;switch(hu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return Cn(i.type)&&ga(),pn(i),null;case 3:return l=i.stateNode,gs(),Ot(Rn),Ot(dn),Au(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ya(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(nc(Qn),Qn=null))),Xu(t,i),pn(i),null;case 5:Tu(i);var f=Cr(go.current);if(o=i.type,t!==null&&i.stateNode!=null)jh(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return pn(i),null}if(t=Cr(fi.current),ya(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[ci]=i,l[co]=p,t=(i.mode&1)!==0,o){case"dialog":Ft("cancel",l),Ft("close",l);break;case"iframe":case"object":case"embed":Ft("load",l);break;case"video":case"audio":for(f=0;f<ao.length;f++)Ft(ao[f],l);break;case"source":Ft("error",l);break;case"img":case"image":case"link":Ft("error",l),Ft("load",l);break;case"details":Ft("toggle",l);break;case"input":Jt(l,p),Ft("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Ft("invalid",l);break;case"textarea":b(l,p),Ft("invalid",l)}Je(o,p),f=null;for(var M in p)if(p.hasOwnProperty(M)){var L=p[M];M==="children"?typeof L=="string"?l.textContent!==L&&(p.suppressHydrationWarning!==!0&&ha(l.textContent,L,t),f=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(p.suppressHydrationWarning!==!0&&ha(l.textContent,L,t),f=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Ft("scroll",l)}switch(o){case"input":Tt(l),Xe(l,p,!0);break;case"textarea":Tt(l),K(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=pa)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ue(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[ci]=i,t[co]=l,Xh(t,i,!1,!1),i.stateNode=t;e:{switch(M=Re(o,l),o){case"dialog":Ft("cancel",t),Ft("close",t),f=l;break;case"iframe":case"object":case"embed":Ft("load",t),f=l;break;case"video":case"audio":for(f=0;f<ao.length;f++)Ft(ao[f],t);f=l;break;case"source":Ft("error",t),f=l;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),f=l;break;case"details":Ft("toggle",t),f=l;break;case"input":Jt(t,l),f=O(t,l),Ft("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=J({},l,{value:void 0}),Ft("invalid",t);break;case"textarea":b(t,l),f=zt(t,l),Ft("invalid",t);break;default:f=l}Je(o,f),L=f;for(p in L)if(L.hasOwnProperty(p)){var k=L[p];p==="style"?Ie(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&qe(t,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&Ae(t,k):typeof k=="number"&&Ae(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Ft("scroll",t):k!=null&&D(t,p,k,M))}switch(o){case"input":Tt(t),Xe(t,l,!1);break;case"textarea":Tt(t),K(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?ot(t,!!l.multiple,p,!1):l.defaultValue!=null&&ot(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=pa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(t&&i.stateNode!=null)Yh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Cr(go.current),Cr(fi.current),ya(i)){if(l=i.stateNode,o=i.memoizedProps,l[ci]=i,(p=l.nodeValue!==o)&&(t=Fn,t!==null))switch(t.tag){case 3:ha(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ha(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ci]=i,i.stateNode=l}return pn(i),null;case 13:if(Ot(Ht),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Bt&&On!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Kd(),ds(),i.flags|=98560,p=!1;else if(p=ya(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[ci]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),p=!1}else Qn!==null&&(nc(Qn),Qn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ht.current&1)!==0?Kt===0&&(Kt=3):sc())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return gs(),Xu(t,i),t===null&&lo(i.stateNode.containerInfo),pn(i),null;case 10:return xu(i.type._context),pn(i),null;case 17:return Cn(i.type)&&ga(),pn(i),null;case 19:if(Ot(Ht),p=i.memoizedState,p===null)return pn(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)yo(p,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ra(t),M!==null){for(i.flags|=128,yo(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return It(Ht,Ht.current&1|2),i.child}t=t.sibling}p.tail!==null&&q()>Ss&&(i.flags|=128,l=!0,yo(p,!1),i.lanes=4194304)}else{if(!l)if(t=Ra(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),yo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Bt)return pn(i),null}else 2*q()-p.renderingStartTime>Ss&&o!==1073741824&&(i.flags|=128,l=!0,yo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=q(),i.sibling=null,o=Ht.current,It(Ht,l?o&1|2:o&1),i):(pn(i),null);case 22:case 23:return rc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(kn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function D_(t,i){switch(hu(i),i.tag){case 1:return Cn(i.type)&&ga(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),Ot(Rn),Ot(dn),Au(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Tu(i),null;case 13:if(Ot(Ht),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ot(Ht),null;case 4:return gs(),null;case 10:return xu(i.type._context),null;case 22:case 23:return rc(),null;case 24:return null;default:return null}}var Fa=!1,mn=!1,U_=typeof WeakSet=="function"?WeakSet:Set,ke=null;function vs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Gt(t,i,l)}else o.current=null}function ju(t,i,o){try{o()}catch(l){Gt(t,i,l)}}var qh=!1;function N_(t,i){if(ru=na,t=Ad(),Kl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,L=-1,k=-1,ee=0,ve=0,Se=t,me=null;t:for(;;){for(var Ne;Se!==o||f!==0&&Se.nodeType!==3||(L=M+f),Se!==p||l!==0&&Se.nodeType!==3||(k=M+l),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ne=Se.firstChild)!==null;)me=Se,Se=Ne;for(;;){if(Se===t)break t;if(me===o&&++ee===f&&(L=M),me===p&&++ve===l&&(k=M),(Ne=Se.nextSibling)!==null)break;Se=me,me=Se.parentNode}Se=Ne}o=L===-1||k===-1?null:{start:L,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(su={focusedElem:t,selectionRange:o},na=!1,ke=i;ke!==null;)if(i=ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ke=t;else for(;ke!==null;){i=ke;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var We=Ge.memoizedProps,jt=Ge.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?We:Jn(i.type,We),jt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Gt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,ke=t;break}ke=i.return}return Ge=qh,qh=!1,Ge}function Mo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&ju(i,o,p)}f=f.next}while(f!==l)}}function Oa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Yu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function $h(t){var i=t.alternate;i!==null&&(t.alternate=null,$h(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[co],delete i[uu],delete i[g_],delete i[__])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kh(t){return t.tag===5||t.tag===3||t.tag===4}function Zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=pa));else if(l!==4&&(t=t.child,t!==null))for(qu(t,i,o),t=t.sibling;t!==null;)qu(t,i,o),t=t.sibling}function $u(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for($u(t,i,o),t=t.sibling;t!==null;)$u(t,i,o),t=t.sibling}var un=null,ei=!1;function nr(t,i,o){for(o=o.child;o!==null;)Qh(t,i,o),o=o.sibling}function Qh(t,i,o){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(it,o)}catch{}switch(o.tag){case 5:mn||vs(o,i);case 6:var l=un,f=ei;un=null,nr(t,i,o),un=l,ei=f,un!==null&&(ei?(t=un,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):un.removeChild(o.stateNode));break;case 18:un!==null&&(ei?(t=un,o=o.stateNode,t.nodeType===8?lu(t.parentNode,o):t.nodeType===1&&lu(t,o),Js(t)):lu(un,o.stateNode));break;case 4:l=un,f=ei,un=o.stateNode.containerInfo,ei=!0,nr(t,i,o),un=l,ei=f;break;case 0:case 11:case 14:case 15:if(!mn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var p=f,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&ju(o,i,M),f=f.next}while(f!==l)}nr(t,i,o);break;case 1:if(!mn&&(vs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){Gt(o,i,L)}nr(t,i,o);break;case 21:nr(t,i,o);break;case 22:o.mode&1?(mn=(l=mn)||o.memoizedState!==null,nr(t,i,o),mn=l):nr(t,i,o);break;default:nr(t,i,o)}}function Jh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new U_),i.forEach(function(l){var f=G_.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function ti(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var p=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:un=L.stateNode,ei=!1;break e;case 3:un=L.stateNode.containerInfo,ei=!0;break e;case 4:un=L.stateNode.containerInfo,ei=!0;break e}L=L.return}if(un===null)throw Error(n(160));Qh(p,M,f),un=null,ei=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(ee){Gt(f,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ep(i,t),i=i.sibling}function ep(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(i,t),hi(t),l&4){try{Mo(3,t,t.return),Oa(3,t)}catch(We){Gt(t,t.return,We)}try{Mo(5,t,t.return)}catch(We){Gt(t,t.return,We)}}break;case 1:ti(i,t),hi(t),l&512&&o!==null&&vs(o,o.return);break;case 5:if(ti(i,t),hi(t),l&512&&o!==null&&vs(o,o.return),t.flags&32){var f=t.stateNode;try{Ae(f,"")}catch(We){Gt(t,t.return,We)}}if(l&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,L=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{L==="input"&&p.type==="radio"&&p.name!=null&&vt(f,p),Re(L,M);var ee=Re(L,p);for(M=0;M<k.length;M+=2){var ve=k[M],Se=k[M+1];ve==="style"?Ie(f,Se):ve==="dangerouslySetInnerHTML"?qe(f,Se):ve==="children"?Ae(f,Se):D(f,ve,Se,ee)}switch(L){case"input":wt(f,p);break;case"textarea":E(f,p);break;case"select":var me=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ne=p.value;Ne!=null?ot(f,!!p.multiple,Ne,!1):me!==!!p.multiple&&(p.defaultValue!=null?ot(f,!!p.multiple,p.defaultValue,!0):ot(f,!!p.multiple,p.multiple?[]:"",!1))}f[co]=p}catch(We){Gt(t,t.return,We)}}break;case 6:if(ti(i,t),hi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(We){Gt(t,t.return,We)}}break;case 3:if(ti(i,t),hi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Js(i.containerInfo)}catch(We){Gt(t,t.return,We)}break;case 4:ti(i,t),hi(t);break;case 13:ti(i,t),hi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Qu=q())),l&4&&Jh(t);break;case 22:if(ve=o!==null&&o.memoizedState!==null,t.mode&1?(mn=(ee=mn)||ve,ti(i,t),mn=ee):ti(i,t),hi(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!ve&&(t.mode&1)!==0)for(ke=t,ve=t.child;ve!==null;){for(Se=ke=ve;ke!==null;){switch(me=ke,Ne=me.child,me.tag){case 0:case 11:case 14:case 15:Mo(4,me,me.return);break;case 1:vs(me,me.return);var Ge=me.stateNode;if(typeof Ge.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(We){Gt(l,o,We)}}break;case 5:vs(me,me.return);break;case 22:if(me.memoizedState!==null){ip(Se);continue}}Ne!==null?(Ne.return=me,ke=Ne):ip(Se)}ve=ve.sibling}e:for(ve=null,Se=t;;){if(Se.tag===5){if(ve===null){ve=Se;try{f=Se.stateNode,ee?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(L=Se.stateNode,k=Se.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,L.style.display=_e("display",M))}catch(We){Gt(t,t.return,We)}}}else if(Se.tag===6){if(ve===null)try{Se.stateNode.nodeValue=ee?"":Se.memoizedProps}catch(We){Gt(t,t.return,We)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;ve===Se&&(ve=null),Se=Se.return}ve===Se&&(ve=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ti(i,t),hi(t),l&4&&Jh(t);break;case 21:break;default:ti(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Kh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(Ae(f,""),l.flags&=-33);var p=Zh(t);$u(t,p,f);break;case 3:case 4:var M=l.stateNode.containerInfo,L=Zh(t);qu(t,L,M);break;default:throw Error(n(161))}}catch(k){Gt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function I_(t,i,o){ke=t,tp(t)}function tp(t,i,o){for(var l=(t.mode&1)!==0;ke!==null;){var f=ke,p=f.child;if(f.tag===22&&l){var M=f.memoizedState!==null||Fa;if(!M){var L=f.alternate,k=L!==null&&L.memoizedState!==null||mn;L=Fa;var ee=mn;if(Fa=M,(mn=k)&&!ee)for(ke=f;ke!==null;)M=ke,k=M.child,M.tag===22&&M.memoizedState!==null?rp(f):k!==null?(k.return=M,ke=k):rp(f);for(;p!==null;)ke=p,tp(p),p=p.sibling;ke=f,Fa=L,mn=ee}np(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,ke=p):np(t)}}function np(t){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||Oa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!mn)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Jn(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&ih(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ih(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var ve=ee.memoizedState;if(ve!==null){var Se=ve.dehydrated;Se!==null&&Js(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}mn||i.flags&512&&Yu(i)}catch(me){Gt(i,i.return,me)}}if(i===t){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function ip(t){for(;ke!==null;){var i=ke;if(i===t){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function rp(t){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Oa(4,i)}catch(k){Gt(i,o,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(k){Gt(i,f,k)}}var p=i.return;try{Yu(i)}catch(k){Gt(i,p,k)}break;case 5:var M=i.return;try{Yu(i)}catch(k){Gt(i,M,k)}}}catch(k){Gt(i,i.return,k)}if(i===t){ke=null;break}var L=i.sibling;if(L!==null){L.return=i.return,ke=L;break}ke=i.return}}var F_=Math.ceil,ka=P.ReactCurrentDispatcher,Ku=P.ReactCurrentOwner,Xn=P.ReactCurrentBatchConfig,yt=0,sn=null,Yt=null,cn=0,kn=0,xs=Zi(0),Kt=0,Eo=null,br=0,Ba=0,Zu=0,To=null,bn=null,Qu=0,Ss=1/0,Pi=null,za=!1,Ju=null,ir=null,Ha=!1,rr=null,Va=0,wo=0,ec=null,Ga=-1,Wa=0;function Mn(){return(yt&6)!==0?q():Ga!==-1?Ga:Ga=q()}function sr(t){return(t.mode&1)===0?1:(yt&2)!==0&&cn!==0?cn&-cn:x_.transition!==null?(Wa===0&&(Wa=Nt()),Wa):(t=St,t!==0||(t=window.event,t=t===void 0?16:od(t.type)),t)}function ni(t,i,o,l){if(50<wo)throw wo=0,ec=null,Error(n(185));tn(t,o,l),((yt&2)===0||t!==sn)&&(t===sn&&((yt&2)===0&&(Ba|=o),Kt===4&&or(t,cn)),Ln(t,l),o===1&&yt===0&&(i.mode&1)===0&&(Ss=q()+500,va&&Ji()))}function Ln(t,i){var o=t.callbackNode;Sn(t,i);var l=en(t,t===sn?cn:0);if(l===0)o!==null&&w(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&w(o),i===1)t.tag===0?v_(op.bind(null,t)):Xd(op.bind(null,t)),p_(function(){(yt&6)===0&&Ji()}),o=null;else{switch(ui(l)){case 1:o=Me;break;case 4:o=be;break;case 16:o=Oe;break;case 536870912:o=rt;break;default:o=Oe}o=pp(o,sp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function sp(t,i){if(Ga=-1,Wa=0,(yt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ys()&&t.callbackNode!==o)return null;var l=en(t,t===sn?cn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Xa(t,l);else{i=l;var f=yt;yt|=2;var p=lp();(sn!==t||cn!==i)&&(Pi=null,Ss=q()+500,Dr(t,i));do try{B_();break}catch(L){ap(t,L)}while(!0);vu(),ka.current=p,yt=f,Yt!==null?i=0:(sn=null,cn=0,i=Kt)}if(i!==0){if(i===2&&(f=yi(t),f!==0&&(l=f,i=tc(t,f))),i===1)throw o=Eo,Dr(t,0),or(t,l),Ln(t,q()),o;if(i===6)or(t,l);else{if(f=t.current.alternate,(l&30)===0&&!O_(f)&&(i=Xa(t,l),i===2&&(p=yi(t),p!==0&&(l=p,i=tc(t,p))),i===1))throw o=Eo,Dr(t,0),or(t,l),Ln(t,q()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,bn,Pi);break;case 3:if(or(t,l),(l&130023424)===l&&(i=Qu+500-q(),10<i)){if(en(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Mn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=au(Ur.bind(null,t,bn,Pi),i);break}Ur(t,bn,Pi);break;case 4:if(or(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var M=31-ct(l);p=1<<M,M=i[M],M>f&&(f=M),l&=~p}if(l=f,l=q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*F_(l/1960))-l,10<l){t.timeoutHandle=au(Ur.bind(null,t,bn,Pi),l);break}Ur(t,bn,Pi);break;case 5:Ur(t,bn,Pi);break;default:throw Error(n(329))}}}return Ln(t,q()),t.callbackNode===o?sp.bind(null,t):null}function tc(t,i){var o=To;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Xa(t,i),t!==2&&(i=bn,bn=o,i!==null&&nc(i)),t}function nc(t){bn===null?bn=t:bn.push.apply(bn,t)}function O_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],p=f.getSnapshot;f=f.value;try{if(!Zn(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~Zu,i&=~Ba,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ct(i),l=1<<o;t[o]=-1,i&=~l}}function op(t){if((yt&6)!==0)throw Error(n(327));ys();var i=en(t,0);if((i&1)===0)return Ln(t,q()),null;var o=Xa(t,i);if(t.tag!==0&&o===2){var l=yi(t);l!==0&&(i=l,o=tc(t,l))}if(o===1)throw o=Eo,Dr(t,0),or(t,i),Ln(t,q()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,bn,Pi),Ln(t,q()),null}function ic(t,i){var o=yt;yt|=1;try{return t(i)}finally{yt=o,yt===0&&(Ss=q()+500,va&&Ji())}}function Lr(t){rr!==null&&rr.tag===0&&(yt&6)===0&&ys();var i=yt;yt|=1;var o=Xn.transition,l=St;try{if(Xn.transition=null,St=1,t)return t()}finally{St=l,Xn.transition=o,yt=i,(yt&6)===0&&Ji()}}function rc(){kn=xs.current,Ot(xs)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,h_(o)),Yt!==null)for(o=Yt.return;o!==null;){var l=o;switch(hu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ga();break;case 3:gs(),Ot(Rn),Ot(dn),Au();break;case 5:Tu(l);break;case 4:gs();break;case 13:Ot(Ht);break;case 19:Ot(Ht);break;case 10:xu(l.type._context);break;case 22:case 23:rc()}o=o.return}if(sn=t,Yt=t=ar(t.current,null),cn=kn=i,Kt=0,Eo=null,Zu=Ba=br=0,bn=To=null,Rr!==null){for(i=0;i<Rr.length;i++)if(o=Rr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,p=o.pending;if(p!==null){var M=p.next;p.next=f,l.next=M}o.pending=l}Rr=null}return t}function ap(t,i){do{var o=Yt;try{if(vu(),Ca.current=Da,Pa){for(var l=Vt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Pa=!1}if(Pr=0,rn=$t=Vt=null,_o=!1,vo=0,Ku.current=null,o===null||o.return===null){Kt=1,Eo=i,Yt=null;break}e:{var p=t,M=o.return,L=o,k=i;if(i=cn,L.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ee=k,ve=L,Se=ve.tag;if((ve.mode&1)===0&&(Se===0||Se===11||Se===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ne=Dh(M);if(Ne!==null){Ne.flags&=-257,Uh(Ne,M,L,p,i),Ne.mode&1&&Lh(p,ee,i),i=Ne,k=ee;var Ge=i.updateQueue;if(Ge===null){var We=new Set;We.add(k),i.updateQueue=We}else Ge.add(k);break e}else{if((i&1)===0){Lh(p,ee,i),sc();break e}k=Error(n(426))}}else if(Bt&&L.mode&1){var jt=Dh(M);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),Uh(jt,M,L,p,i),gu(_s(k,L));break e}}p=k=_s(k,L),Kt!==4&&(Kt=2),To===null?To=[p]:To.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=Ph(p,k,i);nh(p,Y);break e;case 1:L=k;var V=p.type,$=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(ir===null||!ir.has($)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=bh(p,L,i);nh(p,Te);break e}}p=p.return}while(p!==null)}cp(o)}catch(je){i=je,Yt===o&&o!==null&&(Yt=o=o.return);continue}break}while(!0)}function lp(){var t=ka.current;return ka.current=Da,t===null?Da:t}function sc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),sn===null||(br&268435455)===0&&(Ba&268435455)===0||or(sn,cn)}function Xa(t,i){var o=yt;yt|=2;var l=lp();(sn!==t||cn!==i)&&(Pi=null,Dr(t,i));do try{k_();break}catch(f){ap(t,f)}while(!0);if(vu(),yt=o,ka.current=l,Yt!==null)throw Error(n(261));return sn=null,cn=0,Kt}function k_(){for(;Yt!==null;)up(Yt)}function B_(){for(;Yt!==null&&!W();)up(Yt)}function up(t){var i=hp(t.alternate,t,kn);t.memoizedProps=t.pendingProps,i===null?cp(t):Yt=i,Ku.current=null}function cp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=L_(o,i,kn),o!==null){Yt=o;return}}else{if(o=D_(o,i),o!==null){o.flags&=32767,Yt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Ur(t,i,o){var l=St,f=Xn.transition;try{Xn.transition=null,St=1,z_(t,i,o,l)}finally{Xn.transition=f,St=l}return null}function z_(t,i,o,l){do ys();while(rr!==null);if((yt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(ln(t,p),t===sn&&(Yt=sn=null,cn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ha||(Ha=!0,pp(Oe,function(){return ys(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Xn.transition,Xn.transition=null;var M=St;St=1;var L=yt;yt|=4,Ku.current=null,N_(t,o),ep(o,t),o_(su),na=!!ru,su=ru=null,t.current=o,I_(o),te(),yt=L,St=M,Xn.transition=p}else t.current=o;if(Ha&&(Ha=!1,rr=t,Va=f),p=t.pendingLanes,p===0&&(ir=null),ht(o.stateNode),Ln(t,q()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(za)throw za=!1,t=Ju,Ju=null,t;return(Va&1)!==0&&t.tag!==0&&ys(),p=t.pendingLanes,(p&1)!==0?t===ec?wo++:(wo=0,ec=t):wo=0,Ji(),null}function ys(){if(rr!==null){var t=ui(Va),i=Xn.transition,o=St;try{if(Xn.transition=null,St=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,Va=0,(yt&6)!==0)throw Error(n(331));var f=yt;for(yt|=4,ke=t.current;ke!==null;){var p=ke,M=p.child;if((ke.flags&16)!==0){var L=p.deletions;if(L!==null){for(var k=0;k<L.length;k++){var ee=L[k];for(ke=ee;ke!==null;){var ve=ke;switch(ve.tag){case 0:case 11:case 15:Mo(8,ve,p)}var Se=ve.child;if(Se!==null)Se.return=ve,ke=Se;else for(;ke!==null;){ve=ke;var me=ve.sibling,Ne=ve.return;if($h(ve),ve===ee){ke=null;break}if(me!==null){me.return=Ne,ke=me;break}ke=Ne}}}var Ge=p.alternate;if(Ge!==null){var We=Ge.child;if(We!==null){Ge.child=null;do{var jt=We.sibling;We.sibling=null,We=jt}while(We!==null)}}ke=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,ke=M;else e:for(;ke!==null;){if(p=ke,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Mo(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,ke=Y;break e}ke=p.return}}var V=t.current;for(ke=V;ke!==null;){M=ke;var $=M.child;if((M.subtreeFlags&2064)!==0&&$!==null)$.return=M,ke=$;else e:for(M=V;ke!==null;){if(L=ke,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Oa(9,L)}}catch(je){Gt(L,L.return,je)}if(L===M){ke=null;break e}var Te=L.sibling;if(Te!==null){Te.return=L.return,ke=Te;break e}ke=L.return}}if(yt=f,Ji(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(it,t)}catch{}l=!0}return l}finally{St=o,Xn.transition=i}}return!1}function fp(t,i,o){i=_s(o,i),i=Ph(t,i,1),t=tr(t,i,1),i=Mn(),t!==null&&(tn(t,1,i),Ln(t,i))}function Gt(t,i,o){if(t.tag===3)fp(t,t,o);else for(;i!==null;){if(i.tag===3){fp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=_s(o,t),t=bh(i,t,1),i=tr(i,t,1),t=Mn(),i!==null&&(tn(i,1,t),Ln(i,t));break}}i=i.return}}function H_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Mn(),t.pingedLanes|=t.suspendedLanes&o,sn===t&&(cn&o)===o&&(Kt===4||Kt===3&&(cn&130023424)===cn&&500>q()-Qu?Dr(t,0):Zu|=o),Ln(t,i)}function dp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Lt,Lt<<=1,(Lt&130023424)===0&&(Lt=4194304)));var o=Mn();t=Ai(t,i),t!==null&&(tn(t,i,o),Ln(t,o))}function V_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),dp(t,o)}function G_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),dp(t,o)}var hp;hp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Rn.current)Pn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Pn=!1,b_(t,i,o);Pn=(t.flags&131072)!==0}else Pn=!1,Bt&&(i.flags&1048576)!==0&&jd(i,Sa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ia(t,i),t=i.pendingProps;var f=us(i,dn.current);ms(i,o),f=Pu(null,i,l,t,f,o);var p=bu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(l)?(p=!0,_a(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Mu(i),f.updater=Ua,i.stateNode=f,f._reactInternals=i,Fu(i,l,t,o),i=zu(null,i,l,!0,p,o)):(i.tag=0,Bt&&p&&du(i),yn(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ia(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=X_(l),t=Jn(l,t),f){case 0:i=Bu(null,i,l,t,o);break e;case 1:i=Bh(null,i,l,t,o);break e;case 11:i=Nh(null,i,l,t,o);break e;case 14:i=Ih(null,i,l,Jn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Jn(l,f),Bu(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Jn(l,f),Bh(t,i,l,f,o);case 3:e:{if(zh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,f=p.element,th(t,i),Aa(i,l,null,o);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=_s(Error(n(423)),i),i=Hh(t,i,l,o,f);break e}else if(l!==f){f=_s(Error(n(424)),i),i=Hh(t,i,l,o,f);break e}else for(On=Ki(i.stateNode.containerInfo.firstChild),Fn=i,Bt=!0,Qn=null,o=Jd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ds(),l===f){i=Ci(t,i,o);break e}yn(t,i,l,o)}i=i.child}return i;case 5:return rh(i),t===null&&mu(i),l=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,M=f.children,ou(l,f)?M=null:p!==null&&ou(l,p)&&(i.flags|=32),kh(t,i),yn(t,i,M,o),i.child;case 6:return t===null&&mu(i),null;case 13:return Vh(t,i,o);case 4:return Eu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,o):yn(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Jn(l,f),Nh(t,i,l,f,o);case 7:return yn(t,i,i.pendingProps,o),i.child;case 8:return yn(t,i,i.pendingProps.children,o),i.child;case 12:return yn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,p=i.memoizedProps,M=f.value,It(Ea,l._currentValue),l._currentValue=M,p!==null)if(Zn(p.value,M)){if(p.children===f.children&&!Rn.current){i=Ci(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var L=p.dependencies;if(L!==null){M=p.child;for(var k=L.firstContext;k!==null;){if(k.context===l){if(p.tag===1){k=Ri(-1,o&-o),k.tag=2;var ee=p.updateQueue;if(ee!==null){ee=ee.shared;var ve=ee.pending;ve===null?k.next=k:(k.next=ve.next,ve.next=k),ee.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),Su(p.return,o,i),L.lanes|=o;break}k=k.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),Su(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}yn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,ms(i,o),f=Gn(f),l=l(f),i.flags|=1,yn(t,i,l,o),i.child;case 14:return l=i.type,f=Jn(l,i.pendingProps),f=Jn(l.type,f),Ih(t,i,l,f,o);case 15:return Fh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Jn(l,f),Ia(t,i),i.tag=1,Cn(l)?(t=!0,_a(i)):t=!1,ms(i,o),Rh(i,l,f),Fu(i,l,f,o),zu(null,i,l,!0,t,o);case 19:return Wh(t,i,o);case 22:return Oh(t,i,o)}throw Error(n(156,i.tag))};function pp(t,i){return Jo(t,i)}function W_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,o,l){return new W_(t,i,o,l)}function oc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function X_(t){if(typeof t=="function")return oc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===de)return 14}return 2}function ar(t,i){var o=t.alternate;return o===null?(o=jn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function ja(t,i,o,l,f,p){var M=2;if(l=t,typeof t=="function")oc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case I:return Nr(o.children,f,p,i);case X:M=8,f|=8;break;case C:return t=jn(12,o,i,f|2),t.elementType=C,t.lanes=p,t;case Q:return t=jn(13,o,i,f),t.elementType=Q,t.lanes=p,t;case ce:return t=jn(19,o,i,f),t.elementType=ce,t.lanes=p,t;case le:return Ya(o,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:M=10;break e;case z:M=9;break e;case oe:M=11;break e;case de:M=14;break e;case re:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=jn(M,o,i,f),i.elementType=t,i.type=l,i.lanes=p,i}function Nr(t,i,o,l){return t=jn(7,t,l,i),t.lanes=o,t}function Ya(t,i,o,l){return t=jn(22,t,l,i),t.elementType=le,t.lanes=o,t.stateNode={isHidden:!1},t}function ac(t,i,o){return t=jn(6,t,null,i),t.lanes=o,t}function lc(t,i,o){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function j_(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fn(0),this.expirationTimes=fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function uc(t,i,o,l,f,p,M,L,k){return t=new j_(t,i,o,L,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=jn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(p),t}function Y_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function mp(t){if(!t)return Qi;t=t._reactInternals;e:{if(li(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Cn(o))return Gd(t,o,i)}return i}function gp(t,i,o,l,f,p,M,L,k){return t=uc(o,l,!0,t,f,p,M,L,k),t.context=mp(null),o=t.current,l=Mn(),f=sr(o),p=Ri(l,f),p.callback=i??null,tr(o,p,f),t.current.lanes=f,tn(t,f,l),Ln(t,l),t}function qa(t,i,o,l){var f=i.current,p=Mn(),M=sr(f);return o=mp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ri(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(f,i,M),t!==null&&(ni(t,f,M,p),wa(t,f,M)),M}function $a(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _p(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function cc(t,i){_p(t,i),(t=t.alternate)&&_p(t,i)}function q_(){return null}var vp=typeof reportError=="function"?reportError:function(t){console.error(t)};function fc(t){this._internalRoot=t}Ka.prototype.render=fc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));qa(t,i,null,null)},Ka.prototype.unmount=fc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Lr(function(){qa(null,t,null,null)}),i[Mi]=null}};function Ka(t){this._internalRoot=t}Ka.prototype.unstable_scheduleHydration=function(t){if(t){var i=td();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Yi.length&&i!==0&&i<Yi[o].priority;o++);Yi.splice(o,0,t),o===0&&rd(t)}};function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Za(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xp(){}function $_(t,i,o,l,f){if(f){if(typeof l=="function"){var p=l;l=function(){var ee=$a(M);p.call(ee)}}var M=gp(i,l,t,0,null,!1,!1,"",xp);return t._reactRootContainer=M,t[Mi]=M.current,lo(t.nodeType===8?t.parentNode:t),Lr(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var L=l;l=function(){var ee=$a(k);L.call(ee)}}var k=uc(t,0,!1,null,null,!1,!1,"",xp);return t._reactRootContainer=k,t[Mi]=k.current,lo(t.nodeType===8?t.parentNode:t),Lr(function(){qa(i,k,o,l)}),k}function Qa(t,i,o,l,f){var p=o._reactRootContainer;if(p){var M=p;if(typeof f=="function"){var L=f;f=function(){var k=$a(M);L.call(k)}}qa(i,M,t,f)}else M=$_(o,i,t,f,l);return $a(M)}Jf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=pt(i.pendingLanes);o!==0&&(nn(i,o|1),Ln(i,q()),(yt&6)===0&&(Ss=q()+500,Ji()))}break;case 13:Lr(function(){var l=Ai(t,1);if(l!==null){var f=Mn();ni(l,t,1,f)}}),cc(t,1)}},Ol=function(t){if(t.tag===13){var i=Ai(t,134217728);if(i!==null){var o=Mn();ni(i,t,134217728,o)}cc(t,134217728)}},ed=function(t){if(t.tag===13){var i=sr(t),o=Ai(t,i);if(o!==null){var l=Mn();ni(o,t,i,l)}cc(t,i)}},td=function(){return St},nd=function(t,i){var o=St;try{return St=t,i()}finally{St=o}},Pe=function(t,i,o){switch(i){case"input":if(wt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=ma(l);if(!f)throw Error(n(90));Rt(l),wt(l,f)}}}break;case"textarea":E(t,o);break;case"select":i=o.value,i!=null&&ot(t,!!o.multiple,i,!1)}},lt=ic,bt=Lr;var K_={usingClientEntryPoint:!1,Events:[fo,as,ma,he,He,ic]},Ao={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z_={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zo(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||q_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{it=Ja.inject(Z_),Ve=Ja}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K_,Dn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(i))throw Error(n(200));return Y_(t,i,null,o)},Dn.createRoot=function(t,i){if(!dc(t))throw Error(n(299));var o=!1,l="",f=vp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=uc(t,1,!1,null,null,o,!1,l,f),t[Mi]=i.current,lo(t.nodeType===8?t.parentNode:t),new fc(i)},Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Zo(i),t=t===null?null:t.stateNode,t},Dn.flushSync=function(t){return Lr(t)},Dn.hydrate=function(t,i,o){if(!Za(i))throw Error(n(200));return Qa(null,t,i,!0,o)},Dn.hydrateRoot=function(t,i,o){if(!dc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,p="",M=vp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=gp(i,null,t,1,o??null,f,!1,p,M),t[Mi]=i.current,lo(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Ka(i)},Dn.render=function(t,i,o){if(!Za(i))throw Error(n(200));return Qa(null,t,i,!1,o)},Dn.unmountComponentAtNode=function(t){if(!Za(t))throw Error(n(40));return t._reactRootContainer?(Lr(function(){Qa(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1},Dn.unstable_batchedUpdates=ic,Dn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Za(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qa(t,i,o,!1,l)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Rp;function Um(){if(Rp)return mc.exports;Rp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),mc.exports=ov(),mc.exports}var Cp;function av(){if(Cp)return el;Cp=1;var s=Um();return el.createRoot=s.createRoot,el.hydrateRoot=s.hydrateRoot,el}var lv=av();const uv=Dm(lv);Um();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pl(){return Pl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},Pl.apply(this,arguments)}var Xr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Xr||(Xr={}));const Pp="popstate";function cv(s){s===void 0&&(s={});function e(r,a){let{pathname:u,search:c,hash:d}=r.location;return Zc("",{pathname:u,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Im(a)}return dv(e,n,null,s)}function Nm(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function fv(){return Math.random().toString(36).substr(2,8)}function bp(s,e){return{usr:s.state,key:s.key,idx:e}}function Zc(s,e,n,r){return n===void 0&&(n=null),Pl({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?Fm(e):e,{state:n,key:e&&e.key||r||fv()})}function Im(s){let{pathname:e="/",search:n="",hash:r=""}=s;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Fm(s){let e={};if(s){let n=s.indexOf("#");n>=0&&(e.hash=s.substr(n),s=s.substr(0,n));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function dv(s,e,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:u=!1}=r,c=a.history,d=Xr.Pop,h=null,m=_();m==null&&(m=0,c.replaceState(Pl({},c.state,{idx:m}),""));function _(){return(c.state||{idx:null}).idx}function v(){d=Xr.Pop;let x=_(),g=x==null?null:x-m;m=x,h&&h({action:d,location:A.location,delta:g})}function S(x,g){d=Xr.Push;let U=Zc(A.location,x,g);m=_()+1;let D=bp(U,m),P=A.createHref(U);try{c.pushState(D,"",P)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;a.location.assign(P)}u&&h&&h({action:d,location:A.location,delta:1})}function y(x,g){d=Xr.Replace;let U=Zc(A.location,x,g);m=_();let D=bp(U,m),P=A.createHref(U);c.replaceState(D,"",P),u&&h&&h({action:d,location:A.location,delta:0})}function T(x){let g=a.location.origin!=="null"?a.location.origin:a.location.href,U=typeof x=="string"?x:Im(x);return U=U.replace(/ $/,"%20"),Nm(g,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,g)}let A={get action(){return d},get location(){return s(a,c)},listen(x){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(Pp,v),h=x,()=>{a.removeEventListener(Pp,v),h=null}},createHref(x){return e(a,x)},createURL:T,encodeLocation(x){let g=T(x);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:S,replace:y,go(x){return c.go(x)}};return A}var Lp;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Lp||(Lp={}));function hv(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=s.charAt(n);return r&&r!=="/"?null:s.slice(n)||"/"}const Om=["post","put","patch","delete"];new Set(Om);const pv=["get",...Om];new Set(pv);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qc(){return Qc=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},Qc.apply(this,arguments)}const mv=Ke.createContext(null),km=Ke.createContext(null);function gv(){return Ke.useContext(km)!=null}function _v(s,e){s?.v7_startTransition,s?.v7_relativeSplatPath}function vv(s){let{basename:e="/",children:n=null,location:r,navigationType:a=Xr.Pop,navigator:u,static:c=!1,future:d}=s;gv()&&Nm(!1);let h=e.replace(/^\/*/,"/"),m=Ke.useMemo(()=>({basename:h,navigator:u,static:c,future:Qc({v7_relativeSplatPath:!1},d)}),[h,d,u,c]);typeof r=="string"&&(r=Fm(r));let{pathname:_="/",search:v="",hash:S="",state:y=null,key:T="default"}=r,A=Ke.useMemo(()=>{let x=hv(_,h);return x==null?null:{location:{pathname:x,search:v,hash:S,state:y,key:T},navigationType:a}},[h,_,v,S,y,T,a]);return A==null?null:Ke.createElement(mv.Provider,{value:m},Ke.createElement(km.Provider,{children:n,value:A}))}new Promise(()=>{});/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const xv="6";try{window.__reactRouterVersion=xv}catch{}const Sv="startTransition",Dp=iv[Sv];function yv(s){let{basename:e,children:n,future:r,window:a}=s,u=Ke.useRef();u.current==null&&(u.current=cv({window:a,v5Compat:!0}));let c=u.current,[d,h]=Ke.useState({action:c.action,location:c.location}),{v7_startTransition:m}=r||{},_=Ke.useCallback(v=>{m&&Dp?Dp(()=>h(v)):h(v)},[h,m]);return Ke.useLayoutEffect(()=>c.listen(_),[c,_]),Ke.useEffect(()=>_v(r),[r]),Ke.createElement(vv,{basename:e,children:n,location:d.location,navigationType:d.action,navigator:c,future:r})}var Up;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Up||(Up={}));var Np;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Np||(Np={}));const Bm=["Human","Zombie"],Mv=({logoSrc:s="/logo.png",logoAlt:e="Logo aplikacji"})=>Ce.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:Ce.jsxs("div",{className:"container mx-auto flex items-center justify-between",children:[Ce.jsxs("div",{className:"flex items-center space-x-2",children:[Ce.jsx("div",{className:"w-8 h-8 bg-amber-500 flex items-center justify-center pixel-border",children:Ce.jsx("i",{className:"fas fa-cube text-sm"})}),Ce.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"SkinCrafter"})]}),Ce.jsxs("button",{className:"pixel-button bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded pixel-border transition-colors hidden",children:[Ce.jsx("i",{className:"fas fa-user mr-1"})," My Skins"]}),Ce.jsx("button",{className:"pixel-button bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded pixel-border transition-colors",children:"Under Construction"})]})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="178",Ev=0,Ip=1,Tv=2,zm=1,wv=2,Ii=3,xr=0,Nn=1,Fi=2,_r=0,ks=1,Fp=2,Op=3,kp=4,Av=5,Gr=100,Rv=101,Cv=102,Pv=103,bv=104,Lv=200,Dv=201,Uv=202,Nv=203,Jc=204,ef=205,Iv=206,Fv=207,Ov=208,kv=209,Bv=210,zv=211,Hv=212,Vv=213,Gv=214,tf=0,nf=1,rf=2,Hs=3,sf=4,of=5,af=6,lf=7,Hm=0,Wv=1,Xv=2,vr=0,jv=1,Yv=2,qv=3,$v=4,Kv=5,Zv=6,Qv=7,Vm=300,Vs=301,Gs=302,uf=303,cf=304,Dl=306,Fo=1e3,jr=1001,ff=1002,Tn=1003,Jv=1004,tl=1005,mi=1006,vc=1007,Yr=1008,vi=1009,Gm=1010,Wm=1011,Oo=1012,Vf=1013,$r=1014,Oi=1015,Go=1016,Gf=1017,Wf=1018,ko=1020,Xm=35902,jm=1021,Ym=1022,ai=1023,Bo=1026,zo=1027,qm=1028,Xf=1029,$m=1030,jf=1031,Yf=1033,El=33776,Tl=33777,wl=33778,Al=33779,df=35840,hf=35841,pf=35842,mf=35843,gf=36196,_f=37492,vf=37496,xf=37808,Sf=37809,yf=37810,Mf=37811,Ef=37812,Tf=37813,wf=37814,Af=37815,Rf=37816,Cf=37817,Pf=37818,bf=37819,Lf=37820,Df=37821,Rl=36492,Uf=36494,Nf=36495,Km=36283,If=36284,Ff=36285,Of=36286,e0=3200,t0=3201,n0=0,i0=1,gr="",$n="srgb",Ws="srgb-linear",bl="linear",Dt="srgb",Ms=7680,Bp=519,r0=512,s0=513,o0=514,Zm=515,a0=516,l0=517,u0=518,c0=519,zp=35044,Hp="300 es",ki=2e3,Ll=2001;class js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,c=a.length;u<c;u++)a[u].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xc=Math.PI/180,kf=180/Math.PI;function Wo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function _t(s,e,n){return Math.max(e,Math.min(n,s))}function f0(s,e){return(s%e+e)%e}function Sc(s,e,n){return(1-n)*s+n*e}function Co(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,n=0){At.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*a+e.x,this.y=u*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,c,d){let h=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const S=u[c+0],y=u[c+1],T=u[c+2],A=u[c+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=S,e[n+1]=y,e[n+2]=T,e[n+3]=A;return}if(v!==A||h!==S||m!==y||_!==T){let x=1-d;const g=h*S+m*y+_*T+v*A,U=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const G=Math.sqrt(D),F=Math.atan2(G,g*U);x=Math.sin(x*F)/G,d=Math.sin(d*F)/G}const P=d*U;if(h=h*x+S*P,m=m*x+y*P,_=_*x+T*P,v=v*x+A*P,x===1-d){const G=1/Math.sqrt(h*h+m*m+_*_+v*v);h*=G,m*=G,_*=G,v*=G}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,c){const d=r[a],h=r[a+1],m=r[a+2],_=r[a+3],v=u[c],S=u[c+1],y=u[c+2],T=u[c+3];return e[n]=d*T+_*v+h*y-m*S,e[n+1]=h*T+_*S+m*v-d*y,e[n+2]=m*T+_*y+d*S-h*v,e[n+3]=_*T-d*v-h*S-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,c=e._order,d=Math.cos,h=Math.sin,m=d(r/2),_=d(a/2),v=d(u/2),S=h(r/2),y=h(a/2),T=h(u/2);switch(c){case"XYZ":this._x=S*_*v+m*y*T,this._y=m*y*v-S*_*T,this._z=m*_*T+S*y*v,this._w=m*_*v-S*y*T;break;case"YXZ":this._x=S*_*v+m*y*T,this._y=m*y*v-S*_*T,this._z=m*_*T-S*y*v,this._w=m*_*v+S*y*T;break;case"ZXY":this._x=S*_*v-m*y*T,this._y=m*y*v+S*_*T,this._z=m*_*T+S*y*v,this._w=m*_*v-S*y*T;break;case"ZYX":this._x=S*_*v-m*y*T,this._y=m*y*v+S*_*T,this._z=m*_*T-S*y*v,this._w=m*_*v+S*y*T;break;case"YZX":this._x=S*_*v+m*y*T,this._y=m*y*v+S*_*T,this._z=m*_*T-S*y*v,this._w=m*_*v-S*y*T;break;case"XZY":this._x=S*_*v-m*y*T,this._y=m*y*v-S*_*T,this._z=m*_*T+S*y*v,this._w=m*_*v+S*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],c=n[1],d=n[5],h=n[9],m=n[2],_=n[6],v=n[10],S=r+d+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-h)*y,this._y=(u-m)*y,this._z=(c-a)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(_-h)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(u+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-m)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(h+_)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(c-a)/y,this._x=(u+m)/y,this._y=(h+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,c=e._w,d=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+c*d+a*m-u*h,this._y=a*_+c*h+u*d-r*m,this._z=u*_+c*m+r*h-a*d,this._w=c*_-r*d-a*h-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=u,this;const h=1-d*d;if(h<=Number.EPSILON){const y=1-n;return this._w=y*c+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,S=Math.sin(n*_)/m;return this._w=c*v+this._w*S,this._x=r*v+this._x*S,this._y=a*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,n=0,r=0){ie.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,c=e.y,d=e.z,h=e.w,m=2*(c*a-d*r),_=2*(d*n-u*a),v=2*(u*r-c*n);return this.x=n+h*m+c*v-d*_,this.y=r+h*_+d*m-u*v,this.z=a+h*v+u*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,c=n.x,d=n.y,h=n.z;return this.x=a*h-u*d,this.y=u*c-r*h,this.z=r*d-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new ie,Vp=new Xo;class ut{constructor(e,n,r,a,u,c,d,h,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,c,d,h,m)}set(e,n,r,a,u,c,d,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=h,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,c=r[0],d=r[3],h=r[6],m=r[1],_=r[4],v=r[7],S=r[2],y=r[5],T=r[8],A=a[0],x=a[3],g=a[6],U=a[1],D=a[4],P=a[7],G=a[2],F=a[5],I=a[8];return u[0]=c*A+d*U+h*G,u[3]=c*x+d*D+h*F,u[6]=c*g+d*P+h*I,u[1]=m*A+_*U+v*G,u[4]=m*x+_*D+v*F,u[7]=m*g+_*P+v*I,u[2]=S*A+y*U+T*G,u[5]=S*x+y*D+T*F,u[8]=S*g+y*P+T*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8];return n*c*_-n*d*m-r*u*_+r*d*h+a*u*m-a*c*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8],v=_*c-d*m,S=d*h-_*u,y=m*u-c*h,T=n*v+r*S+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(a*m-_*r)*A,e[2]=(d*r-a*c)*A,e[3]=S*A,e[4]=(_*n-a*h)*A,e[5]=(a*u-d*n)*A,e[6]=y*A,e[7]=(r*h-m*n)*A,e[8]=(c*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,c,d){const h=Math.cos(u),m=Math.sin(u);return this.set(r*h,r*m,-r*(h*c+m*d)+c+e,-a*m,a*h,-a*(-m*c+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Mc.makeScale(e,n)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mc=new ut;function Qm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ho(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function d0(){const s=Ho("canvas");return s.style.display="block",s}const Gp={};function Bs(s){s in Gp||(Gp[s]=!0,console.warn(s))}function h0(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function p0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function m0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wp=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function g0(){const s={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(a,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Dt&&(a.r=Bi(a.r),a.g=Bi(a.g),a.b=Bi(a.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(a.r=zs(a.r),a.g=zs(a.g),a.b=zs(a.b))),a},workingToColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},colorSpaceToWorking:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===gr?bl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,c){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,u){return Bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,u)},toWorkingColorSpace:function(a,u){return Bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ws]:{primaries:e,whitePoint:r,transfer:bl,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),s}const Et=g0();function Bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Es;class _0{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Es===void 0&&(Es=Ho("canvas")),Es.width=e.width,Es.height=e.height;const a=Es.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Es}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ho("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let c=0;c<u.length;c++)u[c]=Bi(u[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Bi(n[r]/255)*255):n[r]=Bi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v0=0;class qf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?u.push(Ec(a[c].image)):u.push(Ec(a[c]))}else u=Ec(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Ec(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x0=0;const Tc=new ie;class wn extends js{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,r=jr,a=jr,u=mi,c=Yr,d=ai,h=vi,m=wn.DEFAULT_ANISOTROPY,_=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Wo(),this.name="",this.source=new qf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fo:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fo:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Vm;wn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const h=e.elements,m=h[0],_=h[4],v=h[8],S=h[1],y=h[5],T=h[9],A=h[2],x=h[6],g=h[10];if(Math.abs(_-S)<.01&&Math.abs(v-A)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+A)<.1&&Math.abs(T+x)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,P=(y+1)/2,G=(g+1)/2,F=(_+S)/4,I=(v+A)/4,X=(T+x)/4;return D>P&&D>G?D<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(D),a=F/r,u=I/r):P>G?P<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(P),r=F/a,u=X/a):G<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(G),r=I/u,a=X/u),this.set(r,a,u,n),this}let U=Math.sqrt((x-T)*(x-T)+(v-A)*(v-A)+(S-_)*(S-_));return Math.abs(U)<.001&&(U=1),this.x=(x-T)/U,this.y=(v-A)/U,this.z=(S-_)/U,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this.w=_t(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this.w=_t(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class S0 extends js{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:r.depth},u=new wn(a);this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:mi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new qf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends S0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Jm extends wn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class y0 extends wn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,ii):ii.fromBufferAttribute(u,c),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nl.copy(r.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const a=e.children;for(let u=0,c=a.length;u<c;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),il.subVectors(this.max,Po),Ts.subVectors(e.a,Po),ws.subVectors(e.b,Po),As.subVectors(e.c,Po),ur.subVectors(ws,Ts),cr.subVectors(As,ws),Ir.subVectors(Ts,As);let n=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-Ir.z,Ir.y,ur.z,0,-ur.x,cr.z,0,-cr.x,Ir.z,0,-Ir.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-Ir.y,Ir.x,0];return!wc(n,Ts,ws,As,il)||(n=[1,0,0,0,1,0,0,0,1],!wc(n,Ts,ws,As,il))?!1:(rl.crossVectors(ur,cr),n=[rl.x,rl.y,rl.z],wc(n,Ts,ws,As,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],ii=new ie,nl=new jo,Ts=new ie,ws=new ie,As=new ie,ur=new ie,cr=new ie,Ir=new ie,Po=new ie,il=new ie,rl=new ie,Fr=new ie;function wc(s,e,n,r,a){for(let u=0,c=s.length-3;u<=c;u+=3){Fr.fromArray(s,u);const d=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),h=e.dot(Fr),m=n.dot(Fr),_=r.dot(Fr);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>d)return!1}return!0}const M0=new jo,bo=new ie,Ac=new ie;class $f{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):M0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,c=e.length;u<c;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Ac)),this.expandByPoint(bo.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Li=new ie,Rc=new ie,sl=new ie,fr=new ie,Cc=new ie,ol=new ie,Pc=new ie;class E0{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Rc.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Rc);const u=e.distanceTo(n)*.5,c=-this.direction.dot(sl),d=fr.dot(this.direction),h=-fr.dot(sl),m=fr.lengthSq(),_=Math.abs(1-c*c);let v,S,y,T;if(_>0)if(v=c*h-d,S=c*d-h,T=u*_,v>=0)if(S>=-T)if(S<=T){const A=1/_;v*=A,S*=A,y=v*(v+c*S+2*d)+S*(c*v+S+2*h)+m}else S=u,v=Math.max(0,-(c*S+d)),y=-v*v+S*(S+2*h)+m;else S=-u,v=Math.max(0,-(c*S+d)),y=-v*v+S*(S+2*h)+m;else S<=-T?(v=Math.max(0,-(-c*u+d)),S=v>0?-u:Math.min(Math.max(-u,-h),u),y=-v*v+S*(S+2*h)+m):S<=T?(v=0,S=Math.min(Math.max(-u,-h),u),y=S*(S+2*h)+m):(v=Math.max(0,-(c*u+d)),S=v>0?u:Math.min(Math.max(-u,-h),u),y=-v*v+S*(S+2*h)+m);else S=c>0?-u:u,v=Math.max(0,-(c*S+d)),y=-v*v+S*(S+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Rc).addScaledVector(sl,S),y}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const r=Li.dot(this.direction),a=Li.dot(Li)-r*r,u=e.radius*e.radius;if(a>u)return null;const c=Math.sqrt(u-a),d=r-c,h=r+c;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,c,d,h;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,a=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,a=(e.min.x-S.x)*m),_>=0?(u=(e.min.y-S.y)*_,c=(e.max.y-S.y)*_):(u=(e.max.y-S.y)*_,c=(e.min.y-S.y)*_),r>c||u>a||((u>r||isNaN(r))&&(r=u),(c<a||isNaN(a))&&(a=c),v>=0?(d=(e.min.z-S.z)*v,h=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,h=(e.min.z-S.z)*v),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,r,a,u){Cc.subVectors(n,e),ol.subVectors(r,e),Pc.crossVectors(Cc,ol);let c=this.direction.dot(Pc),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;fr.subVectors(this.origin,e);const h=d*this.direction.dot(ol.crossVectors(fr,ol));if(h<0)return null;const m=d*this.direction.dot(Cc.cross(fr));if(m<0||h+m>c)return null;const _=-d*fr.dot(Pc);return _<0?null:this.at(_/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,r,a,u,c,d,h,m,_,v,S,y,T,A,x){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,c,d,h,m,_,v,S,y,T,A,x)}set(e,n,r,a,u,c,d,h,m,_,v,S,y,T,A,x){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=c,g[9]=d,g[13]=h,g[2]=m,g[6]=_,g[10]=v,g[14]=S,g[3]=y,g[7]=T,g[11]=A,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Rs.setFromMatrixColumn(e,0).length(),u=1/Rs.setFromMatrixColumn(e,1).length(),c=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=c*_,y=c*v,T=d*_,A=d*v;n[0]=h*_,n[4]=-h*v,n[8]=m,n[1]=y+T*m,n[5]=S-A*m,n[9]=-d*h,n[2]=A-S*m,n[6]=T+y*m,n[10]=c*h}else if(e.order==="YXZ"){const S=h*_,y=h*v,T=m*_,A=m*v;n[0]=S+A*d,n[4]=T*d-y,n[8]=c*m,n[1]=c*v,n[5]=c*_,n[9]=-d,n[2]=y*d-T,n[6]=A+S*d,n[10]=c*h}else if(e.order==="ZXY"){const S=h*_,y=h*v,T=m*_,A=m*v;n[0]=S-A*d,n[4]=-c*v,n[8]=T+y*d,n[1]=y+T*d,n[5]=c*_,n[9]=A-S*d,n[2]=-c*m,n[6]=d,n[10]=c*h}else if(e.order==="ZYX"){const S=c*_,y=c*v,T=d*_,A=d*v;n[0]=h*_,n[4]=T*m-y,n[8]=S*m+A,n[1]=h*v,n[5]=A*m+S,n[9]=y*m-T,n[2]=-m,n[6]=d*h,n[10]=c*h}else if(e.order==="YZX"){const S=c*h,y=c*m,T=d*h,A=d*m;n[0]=h*_,n[4]=A-S*v,n[8]=T*v+y,n[1]=v,n[5]=c*_,n[9]=-d*_,n[2]=-m*_,n[6]=y*v+T,n[10]=S-A*v}else if(e.order==="XZY"){const S=c*h,y=c*m,T=d*h,A=d*m;n[0]=h*_,n[4]=-v,n[8]=m*_,n[1]=S*v+A,n[5]=c*_,n[9]=y*v-T,n[2]=T*v-y,n[6]=d*_,n[10]=A*v+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T0,e,w0)}lookAt(e,n,r){const a=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),dr.crossVectors(r,Bn),dr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),dr.crossVectors(r,Bn)),dr.normalize(),al.crossVectors(Bn,dr),a[0]=dr.x,a[4]=al.x,a[8]=Bn.x,a[1]=dr.y,a[5]=al.y,a[9]=Bn.y,a[2]=dr.z,a[6]=al.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,c=r[0],d=r[4],h=r[8],m=r[12],_=r[1],v=r[5],S=r[9],y=r[13],T=r[2],A=r[6],x=r[10],g=r[14],U=r[3],D=r[7],P=r[11],G=r[15],F=a[0],I=a[4],X=a[8],C=a[12],R=a[1],z=a[5],oe=a[9],Q=a[13],ce=a[2],de=a[6],re=a[10],le=a[14],B=a[3],ae=a[7],J=a[11],N=a[15];return u[0]=c*F+d*R+h*ce+m*B,u[4]=c*I+d*z+h*de+m*ae,u[8]=c*X+d*oe+h*re+m*J,u[12]=c*C+d*Q+h*le+m*N,u[1]=_*F+v*R+S*ce+y*B,u[5]=_*I+v*z+S*de+y*ae,u[9]=_*X+v*oe+S*re+y*J,u[13]=_*C+v*Q+S*le+y*N,u[2]=T*F+A*R+x*ce+g*B,u[6]=T*I+A*z+x*de+g*ae,u[10]=T*X+A*oe+x*re+g*J,u[14]=T*C+A*Q+x*le+g*N,u[3]=U*F+D*R+P*ce+G*B,u[7]=U*I+D*z+P*de+G*ae,u[11]=U*X+D*oe+P*re+G*J,u[15]=U*C+D*Q+P*le+G*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],c=e[1],d=e[5],h=e[9],m=e[13],_=e[2],v=e[6],S=e[10],y=e[14],T=e[3],A=e[7],x=e[11],g=e[15];return T*(+u*h*v-a*m*v-u*d*S+r*m*S+a*d*y-r*h*y)+A*(+n*h*y-n*m*S+u*c*S-a*c*y+a*m*_-u*h*_)+x*(+n*m*v-n*d*y-u*c*v+r*c*y+u*d*_-r*m*_)+g*(-a*d*_-n*h*v+n*d*S+a*c*v-r*c*S+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8],v=e[9],S=e[10],y=e[11],T=e[12],A=e[13],x=e[14],g=e[15],U=v*x*m-A*S*m+A*h*y-d*x*y-v*h*g+d*S*g,D=T*S*m-_*x*m-T*h*y+c*x*y+_*h*g-c*S*g,P=_*A*m-T*v*m+T*d*y-c*A*y-_*d*g+c*v*g,G=T*v*h-_*A*h-T*d*S+c*A*S+_*d*x-c*v*x,F=n*U+r*D+a*P+u*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=U*I,e[1]=(A*S*u-v*x*u-A*a*y+r*x*y+v*a*g-r*S*g)*I,e[2]=(d*x*u-A*h*u+A*a*m-r*x*m-d*a*g+r*h*g)*I,e[3]=(v*h*u-d*S*u-v*a*m+r*S*m+d*a*y-r*h*y)*I,e[4]=D*I,e[5]=(_*x*u-T*S*u+T*a*y-n*x*y-_*a*g+n*S*g)*I,e[6]=(T*h*u-c*x*u-T*a*m+n*x*m+c*a*g-n*h*g)*I,e[7]=(c*S*u-_*h*u+_*a*m-n*S*m-c*a*y+n*h*y)*I,e[8]=P*I,e[9]=(T*v*u-_*A*u-T*r*y+n*A*y+_*r*g-n*v*g)*I,e[10]=(c*A*u-T*d*u+T*r*m-n*A*m-c*r*g+n*d*g)*I,e[11]=(_*d*u-c*v*u-_*r*m+n*v*m+c*r*y-n*d*y)*I,e[12]=G*I,e[13]=(_*A*a-T*v*a+T*r*S-n*A*S-_*r*x+n*v*x)*I,e[14]=(T*d*a-c*A*a-T*r*h+n*A*h+c*r*x-n*d*x)*I,e[15]=(c*v*a-_*d*a+_*r*h-n*v*h-c*r*S+n*d*S)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,c=e.x,d=e.y,h=e.z,m=u*c,_=u*d;return this.set(m*c+r,m*d-a*h,m*h+a*d,0,m*d+a*h,_*d+r,_*h-a*c,0,m*h-a*d,_*h+a*c,u*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,c){return this.set(1,r,u,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,c=n._y,d=n._z,h=n._w,m=u+u,_=c+c,v=d+d,S=u*m,y=u*_,T=u*v,A=c*_,x=c*v,g=d*v,U=h*m,D=h*_,P=h*v,G=r.x,F=r.y,I=r.z;return a[0]=(1-(A+g))*G,a[1]=(y+P)*G,a[2]=(T-D)*G,a[3]=0,a[4]=(y-P)*F,a[5]=(1-(S+g))*F,a[6]=(x+U)*F,a[7]=0,a[8]=(T+D)*I,a[9]=(x-U)*I,a[10]=(1-(S+A))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Rs.set(a[0],a[1],a[2]).length();const c=Rs.set(a[4],a[5],a[6]).length(),d=Rs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const m=1/u,_=1/c,v=1/d;return ri.elements[0]*=m,ri.elements[1]*=m,ri.elements[2]*=m,ri.elements[4]*=_,ri.elements[5]*=_,ri.elements[6]*=_,ri.elements[8]*=v,ri.elements[9]*=v,ri.elements[10]*=v,n.setFromRotationMatrix(ri),r.x=u,r.y=c,r.z=d,this}makePerspective(e,n,r,a,u,c,d=ki){const h=this.elements,m=2*u/(n-e),_=2*u/(r-a),v=(n+e)/(n-e),S=(r+a)/(r-a);let y,T;if(d===ki)y=-(c+u)/(c-u),T=-2*c*u/(c-u);else if(d===Ll)y=-c/(c-u),T=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,u,c,d=ki){const h=this.elements,m=1/(n-e),_=1/(r-a),v=1/(c-u),S=(n+e)*m,y=(r+a)*_;let T,A;if(d===ki)T=(c+u)*v,A=-2*v;else if(d===Ll)T=u*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-S,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=A,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Rs=new ie,ri=new Xt,T0=new ie(0,0,0),w0=new ie(1,1,1),dr=new ie,al=new ie,Bn=new ie,jp=new Xt,Yp=new Xo;class zi{constructor(e=0,n=0,r=0,a=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],c=a[4],d=a[8],h=a[1],m=a[5],_=a[9],v=a[2],S=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(_t(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,u));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(h,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Yp.setFromEuler(this),this.setFromQuaternion(Yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class eg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let A0=0;const qp=new ie,Cs=new Xo,Di=new Xt,ll=new ie,Lo=new ie,R0=new ie,C0=new Xo,$p=new ie(1,0,0),Kp=new ie(0,1,0),Zp=new ie(0,0,1),Qp={type:"added"},P0={type:"removed"},Ps={type:"childadded",child:null},bc={type:"childremoved",child:null};class vn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new ie,n=new zi,r=new Xo,a=new ie(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new ut}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis($p,e)}rotateY(e){return this.rotateOnAxis(Kp,e)}rotateZ(e){return this.rotateOnAxis(Zp,e)}translateOnAxis(e,n){return qp.copy(e).applyQuaternion(this.quaternion),this.position.add(qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($p,e)}translateY(e){return this.translateOnAxis(Kp,e)}translateZ(e){return this.translateOnAxis(Zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ll.copy(e):ll.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Lo,ll,this.up):Di.lookAt(ll,Lo,this.up),this.quaternion.setFromRotationMatrix(Di),a&&(Di.extractRotation(a.matrixWorld),Cs.setFromRotationMatrix(Di),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(P0),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,R0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,C0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function u(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const v=h[m];u(e.shapes,v)}else u(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(u(e.materials,this.material[h]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(u(e.animations,h))}}if(n){const d=c(e.geometries),h=c(e.materials),m=c(e.textures),_=c(e.images),v=c(e.shapes),S=c(e.skeletons),y=c(e.animations),T=c(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=a,r;function c(d){const h=[];for(const m in d){const _=d[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}vn.DEFAULT_UP=new ie(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new ie,Ui=new ie,Lc=new ie,Ni=new ie,bs=new ie,Ls=new ie,Jp=new ie,Dc=new ie,Uc=new ie,Nc=new ie,Ic=new Wt,Fc=new Wt,Oc=new Wt;class oi{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),si.subVectors(e,n),a.cross(si);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){si.subVectors(a,n),Ui.subVectors(r,n),Lc.subVectors(e,n);const c=si.dot(si),d=si.dot(Ui),h=si.dot(Lc),m=Ui.dot(Ui),_=Ui.dot(Lc),v=c*m-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,y=(m*h-d*_)*S,T=(c*_-d*h)*S;return u.set(1-y-T,T,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,r,a,u,c,d,h){return this.getBarycoord(e,n,r,a,Ni)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(u,Ni.x),h.addScaledVector(c,Ni.y),h.addScaledVector(d,Ni.z),h)}static getInterpolatedAttribute(e,n,r,a,u,c){return Ic.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),Ic.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,r),Oc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Ic,u.x),c.addScaledVector(Fc,u.y),c.addScaledVector(Oc,u.z),c}static isFrontFacing(e,n,r,a){return si.subVectors(r,n),Ui.subVectors(e,n),si.cross(Ui).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),si.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let c,d;bs.subVectors(a,r),Ls.subVectors(u,r),Dc.subVectors(e,r);const h=bs.dot(Dc),m=Ls.dot(Dc);if(h<=0&&m<=0)return n.copy(r);Uc.subVectors(e,a);const _=bs.dot(Uc),v=Ls.dot(Uc);if(_>=0&&v<=_)return n.copy(a);const S=h*v-_*m;if(S<=0&&h>=0&&_<=0)return c=h/(h-_),n.copy(r).addScaledVector(bs,c);Nc.subVectors(e,u);const y=bs.dot(Nc),T=Ls.dot(Nc);if(T>=0&&y<=T)return n.copy(u);const A=y*m-h*T;if(A<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Ls,d);const x=_*T-y*v;if(x<=0&&v-_>=0&&y-T>=0)return Jp.subVectors(u,a),d=(v-_)/(v-_+(y-T)),n.copy(a).addScaledVector(Jp,d);const g=1/(x+A+S);return c=A*g,d=S*g,n.copy(r).addScaledVector(bs,c).addScaledVector(Ls,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},ul={h:0,s:0,l:0};function kc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Pt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=Et.workingColorSpace){if(e=f0(e,1),n=_t(n,0,1),r=_t(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=kc(c,u,e+1/3),this.g=kc(c,u,e),this.b=kc(c,u,e-1/3)}return Et.colorSpaceToWorking(this,a),this}setStyle(e,n=$n){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const r=tg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Et.workingToColorSpace(_n.copy(this),e),Math.round(_t(_n.r*255,0,255))*65536+Math.round(_t(_n.g*255,0,255))*256+Math.round(_t(_n.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.workingToColorSpace(_n.copy(this),n);const r=_n.r,a=_n.g,u=_n.b,c=Math.max(r,a,u),d=Math.min(r,a,u);let h,m;const _=(d+c)/2;if(d===c)h=0,m=0;else{const v=c-d;switch(m=_<=.5?v/(c+d):v/(2-c-d),c){case r:h=(a-u)/v+(a<u?6:0);break;case a:h=(u-r)/v+2;break;case u:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Et.workingColorSpace){return Et.workingToColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=$n){Et.workingToColorSpace(_n.copy(this),e);const n=_n.r,r=_n.g,a=_n.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(ul);const r=Sc(hr.h,ul.h,n),a=Sc(hr.s,ul.s,n),u=Sc(hr.l,ul.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Pt;Pt.NAMES=tg;let b0=0;class Ul extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=ks,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=ef,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Jc&&(r.blendSrc=this.blendSrc),this.blendDst!==ef&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const c=[];for(const d in u){const h=u[d];delete h.metadata,c.push(h)}return c}if(n){const u=a(e.textures),c=a(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mr extends Ul{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new ie,cl=new At;let L0=0;class _i{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L0++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=zp,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Co(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Co(n,this.array)),n}setX(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Co(n,this.array)),n}setY(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Co(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Co(n,this.array)),n}setW(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),a=Un(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),a=Un(a,this.array),u=Un(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zp&&(e.usage=this.usage),e}}class ng extends _i{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class ig extends _i{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class qr extends _i{constructor(e,n,r){super(new Float32Array(e),n,r)}}let D0=0;const Yn=new Xt,Bc=new vn,Ds=new ie,zn=new jo,Do=new jo,an=new ie;class Zr extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qm(e)?ig:ng)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,r){return Yn.makeTranslation(e,n,r),this.applyMatrix4(Yn),this}scale(e,n,r){return Yn.makeScale(e,n,r),this.applyMatrix4(Yn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new qr(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];zn.setFromBufferAttribute(u),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $f);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const d=n[u];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(an.addVectors(zn.min,Do.min),zn.expandByPoint(an),an.addVectors(zn.max,Do.max),zn.expandByPoint(an)):(zn.expandByPoint(Do.min),zn.expandByPoint(Do.max))}zn.getCenter(r);let a=0;for(let u=0,c=e.count;u<c;u++)an.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(an));if(n)for(let u=0,c=n.length;u<c;u++){const d=n[u],h=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)an.fromBufferAttribute(d,m),h&&(Ds.fromBufferAttribute(e,m),an.add(Ds)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let X=0;X<r.count;X++)d[X]=new ie,h[X]=new ie;const m=new ie,_=new ie,v=new ie,S=new At,y=new At,T=new At,A=new ie,x=new ie;function g(X,C,R){m.fromBufferAttribute(r,X),_.fromBufferAttribute(r,C),v.fromBufferAttribute(r,R),S.fromBufferAttribute(u,X),y.fromBufferAttribute(u,C),T.fromBufferAttribute(u,R),_.sub(m),v.sub(m),y.sub(S),T.sub(S);const z=1/(y.x*T.y-T.x*y.y);isFinite(z)&&(A.copy(_).multiplyScalar(T.y).addScaledVector(v,-y.y).multiplyScalar(z),x.copy(v).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(z),d[X].add(A),d[C].add(A),d[R].add(A),h[X].add(x),h[C].add(x),h[R].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let X=0,C=U.length;X<C;++X){const R=U[X],z=R.start,oe=R.count;for(let Q=z,ce=z+oe;Q<ce;Q+=3)g(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const D=new ie,P=new ie,G=new ie,F=new ie;function I(X){G.fromBufferAttribute(a,X),F.copy(G);const C=d[X];D.copy(C),D.sub(G.multiplyScalar(G.dot(C))).normalize(),P.crossVectors(F,C);const z=P.dot(h[X])<0?-1:1;c.setXYZW(X,D.x,D.y,D.z,z)}for(let X=0,C=U.length;X<C;++X){const R=U[X],z=R.start,oe=R.count;for(let Q=z,ce=z+oe;Q<ce;Q+=3)I(e.getX(Q+0)),I(e.getX(Q+1)),I(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const a=new ie,u=new ie,c=new ie,d=new ie,h=new ie,m=new ie,_=new ie,v=new ie;if(e)for(let S=0,y=e.count;S<y;S+=3){const T=e.getX(S+0),A=e.getX(S+1),x=e.getX(S+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,A),c.fromBufferAttribute(n,x),_.subVectors(c,u),v.subVectors(a,u),_.cross(v),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,x),d.add(_),h.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let S=0,y=n.count;S<y;S+=3)a.fromBufferAttribute(n,S+0),u.fromBufferAttribute(n,S+1),c.fromBufferAttribute(n,S+2),_.subVectors(c,u),v.subVectors(a,u),_.cross(v),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(d,h){const m=d.array,_=d.itemSize,v=d.normalized,S=new m.constructor(h.length*_);let y=0,T=0;for(let A=0,x=h.length;A<x;A++){d.isInterleavedBufferAttribute?y=h[A]*d.data.stride+d.offset:y=h[A]*_;for(let g=0;g<_;g++)S[T++]=m[y++]}return new _i(S,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zr,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const h=[],m=u[d];for(let _=0,v=m.length;_<v;_++){const S=m[_],y=e(S,r);h.push(y)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let u=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let v=0,S=m.length;v<S;v++){const y=m[v];_.push(y.toJSON(e.data))}_.length>0&&(a[h]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let S=0,y=v.length;S<y;S++)_.push(v[S].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const em=new Xt,Or=new E0,fl=new $f,tm=new ie,dl=new ie,hl=new ie,pl=new ie,zc=new ie,ml=new ie,nm=new ie,gl=new ie;class gi extends vn{constructor(e=new Zr,n=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ml.set(0,0,0);for(let h=0,m=u.length;h<m;h++){const _=d[h],v=u[h];_!==0&&(zc.fromBufferAttribute(v,e),c?ml.addScaledVector(zc,_):ml.addScaledVector(zc.sub(n),_))}n.add(ml)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fl.copy(r.boundingSphere),fl.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(fl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(fl,tm)===null||Or.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(u).invert(),Or.copy(e.ray).applyMatrix4(em),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const u=this.geometry,c=this.material,d=u.index,h=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,S=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(c))for(let T=0,A=S.length;T<A;T++){const x=S[T],g=c[x.materialIndex],U=Math.max(x.start,y.start),D=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let P=U,G=D;P<G;P+=3){const F=d.getX(P),I=d.getX(P+1),X=d.getX(P+2);a=_l(this,g,e,r,m,_,v,F,I,X),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let x=T,g=A;x<g;x+=3){const U=d.getX(x),D=d.getX(x+1),P=d.getX(x+2);a=_l(this,c,e,r,m,_,v,U,D,P),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,A=S.length;T<A;T++){const x=S[T],g=c[x.materialIndex],U=Math.max(x.start,y.start),D=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let P=U,G=D;P<G;P+=3){const F=P,I=P+1,X=P+2;a=_l(this,g,e,r,m,_,v,F,I,X),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let x=T,g=A;x<g;x+=3){const U=x,D=x+1,P=x+2;a=_l(this,c,e,r,m,_,v,U,D,P),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}}function U0(s,e,n,r,a,u,c,d){let h;if(e.side===Nn?h=r.intersectTriangle(c,u,a,!0,d):h=r.intersectTriangle(a,u,c,e.side===xr,d),h===null)return null;gl.copy(d),gl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(gl);return m<n.near||m>n.far?null:{distance:m,point:gl.clone(),object:s}}function _l(s,e,n,r,a,u,c,d,h,m){s.getVertexPosition(d,dl),s.getVertexPosition(h,hl),s.getVertexPosition(m,pl);const _=U0(s,e,n,r,dl,hl,pl,nm);if(_){const v=new ie;oi.getBarycoord(nm,dl,hl,pl,v),a&&(_.uv=oi.getInterpolatedAttribute(a,d,h,m,v,new At)),u&&(_.uv1=oi.getInterpolatedAttribute(u,d,h,m,v,new At)),c&&(_.normal=oi.getInterpolatedAttribute(c,d,h,m,v,new ie),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:h,c:m,normal:new ie,materialIndex:0};oi.getNormal(dl,hl,pl,S.normal),_.face=S,_.barycoord=v}return _}class Ys extends Zr{constructor(e=1,n=1,r=1,a=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:c};const d=this;a=Math.floor(a),u=Math.floor(u),c=Math.floor(c);const h=[],m=[],_=[],v=[];let S=0,y=0;T("z","y","x",-1,-1,r,n,e,c,u,0),T("z","y","x",1,-1,r,n,-e,c,u,1),T("x","z","y",1,1,e,r,n,a,c,2),T("x","z","y",1,-1,e,r,-n,a,c,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(h),this.setAttribute("position",new qr(m,3)),this.setAttribute("normal",new qr(_,3)),this.setAttribute("uv",new qr(v,2));function T(A,x,g,U,D,P,G,F,I,X,C){const R=P/I,z=G/X,oe=P/2,Q=G/2,ce=F/2,de=I+1,re=X+1;let le=0,B=0;const ae=new ie;for(let J=0;J<re;J++){const N=J*z-Q;for(let ne=0;ne<de;ne++){const De=ne*R-oe;ae[A]=De*U,ae[x]=N*D,ae[g]=ce,m.push(ae.x,ae.y,ae.z),ae[A]=0,ae[x]=0,ae[g]=F>0?1:-1,_.push(ae.x,ae.y,ae.z),v.push(ne/I),v.push(1-J/X),le+=1}}for(let J=0;J<X;J++)for(let N=0;N<I;N++){const ne=S+N+de*J,De=S+N+de*(J+1),Z=S+(N+1)+de*(J+1),fe=S+(N+1)+de*J;h.push(ne,De,fe),h.push(De,Z,fe),B+=6}d.addGroup(y,B,C),y+=B,S+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function En(s){const e={};for(let n=0;n<s.length;n++){const r=Xs(s[n]);for(const a in r)e[a]=r[a]}return e}function N0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function rg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const I0={clone:Xs,merge:En};var F0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends Ul{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F0,this.fragmentShader=O0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=N0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class sg extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new ie,im=new At,rm=new At;class Kn extends sg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kf*2*Math.atan(Math.tan(xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,im,rm),n.subVectors(rm,im)}setViewOffset(e,n,r,a,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;u+=c.offsetX*a/h,n-=c.offsetY*r/m,a*=c.width/h,r*=c.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Ns=1;class k0 extends vn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kn(Us,Ns,e,n);a.layers=this.layers,this.add(a);const u=new Kn(Us,Ns,e,n);u.layers=this.layers,this.add(u);const c=new Kn(Us,Ns,e,n);c.layers=this.layers,this.add(c);const d=new Kn(Us,Ns,e,n);d.layers=this.layers,this.add(d);const h=new Kn(Us,Ns,e,n);h.layers=this.layers,this.add(h);const m=new Kn(Us,Ns,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,c,d,h]=n;for(const m of n)this.remove(m);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ll)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,h,m,_]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,S,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class og extends wn{constructor(e=[],n=Vs,r,a,u,c,d,h,m,_){super(e,n,r,a,u,c,d,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class B0 extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new og(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ys(5,5,5),u=new Sr({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:_r});u.uniforms.tEquirect.value=n;const c=new gi(a,u),d=n.minFilter;return n.minFilter===Yr&&(n.minFilter=mi),new k0(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(u)}}class No extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z0={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,c=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const A of e.hand.values()){const x=n.getJointPose(A,r),g=this._getHandJoint(m,A);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],S=_.position.distanceTo(v.position),y=.02,T=.005;m.inputState.pinching&&S>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new No;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class H0 extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vc=new ie,V0=new ie,G0=new ut;class Hr{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Vc.subVectors(r,n).cross(V0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Vc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||G0.getNormalMatrix(e),a=this.coplanarPoint(Vc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new $f,W0=new At(.5,.5),vl=new ie;class Kf{constructor(e=new Hr,n=new Hr,r=new Hr,a=new Hr,u=new Hr,c=new Hr){this.planes=[e,n,r,a,u,c]}set(e,n,r,a,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ki){const r=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],h=a[3],m=a[4],_=a[5],v=a[6],S=a[7],y=a[8],T=a[9],A=a[10],x=a[11],g=a[12],U=a[13],D=a[14],P=a[15];if(r[0].setComponents(h-u,S-m,x-y,P-g).normalize(),r[1].setComponents(h+u,S+m,x+y,P+g).normalize(),r[2].setComponents(h+c,S+_,x+T,P+U).normalize(),r[3].setComponents(h-c,S-_,x-T,P-U).normalize(),r[4].setComponents(h-d,S-v,x-A,P-D).normalize(),n===ki)r[5].setComponents(h+d,S+v,x+A,P+D).normalize();else if(n===Ll)r[5].setComponents(d,v,A,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const n=W0.distanceTo(e.center);return kr.radius=.7071067811865476+n,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(vl.x=a.normal.x>0?e.max.x:e.min.x,vl.y=a.normal.y>0?e.max.y:e.min.y,vl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ag extends wn{constructor(e,n,r=$r,a,u,c,d=Tn,h=Tn,m,_=Bo,v=1){if(_!==Bo&&_!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:n,depth:v};super(S,a,u,c,d,h,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Nl extends Zr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,c=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,_=h+1,v=e/d,S=n/h,y=[],T=[],A=[],x=[];for(let g=0;g<_;g++){const U=g*S-c;for(let D=0;D<m;D++){const P=D*v-u;T.push(P,-U,0),A.push(0,0,1),x.push(D/d),x.push(1-g/h)}}for(let g=0;g<h;g++)for(let U=0;U<d;U++){const D=U+m*g,P=U+m*(g+1),G=U+1+m*(g+1),F=U+1+m*g;y.push(D,P,F),y.push(P,G,F)}this.setIndex(y),this.setAttribute("position",new qr(T,3)),this.setAttribute("normal",new qr(A,3)),this.setAttribute("uv",new qr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.width,e.height,e.widthSegments,e.heightSegments)}}class X0 extends Ul{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j0 extends Ul{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Y0{constructor(e,n,r){const a=this;let u=!1,c=0,d=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(_){d++,u===!1&&a.onStart!==void 0&&a.onStart(_,c,d),u=!0},this.itemEnd=function(_){c++,a.onProgress!==void 0&&a.onProgress(_,c,d),c===d&&(u=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(_){a.onError!==void 0&&a.onError(_)},this.resolveURL=function(_){return h?h(_):_},this.setURLModifier=function(_){return h=_,this},this.addHandler=function(_,v){return m.push(_,v),this},this.removeHandler=function(_){const v=m.indexOf(_);return v!==-1&&m.splice(v,2),this},this.getHandler=function(_){for(let v=0,S=m.length;v<S;v+=2){const y=m[v],T=m[v+1];if(y.global&&(y.lastIndex=0),y.test(_))return T}return null}}}const q0=new Y0;class Zf{constructor(e){this.manager=e!==void 0?e:q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,u){r.load(e,a,n,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Is=new WeakMap;class $0 extends Zf{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,c=Gc.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)u.manager.itemStart(e),setTimeout(function(){n&&n(c),u.manager.itemEnd(e)},0);else{let v=Is.get(c);v===void 0&&(v=[],Is.set(c,v)),v.push({onLoad:n,onError:a})}return c}const d=Ho("img");function h(){_(),n&&n(this);const v=Is.get(this)||[];for(let S=0;S<v.length;S++){const y=v[S];y.onLoad&&y.onLoad(this)}Is.delete(this),u.manager.itemEnd(e)}function m(v){_(),a&&a(v),Gc.remove(`image:${e}`);const S=Is.get(this)||[];for(let y=0;y<S.length;y++){const T=S[y];T.onError&&T.onError(v)}Is.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function _(){d.removeEventListener("load",h,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",h,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Gc.add(`image:${e}`,d),u.manager.itemStart(e),d.src=e,d}}class K0 extends Zf{constructor(e){super(e)}load(e,n,r,a){const u=new wn,c=new $0(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){u.image=d,u.needsUpdate=!0,n!==void 0&&n(u)},r,a),u}}class Z0 extends vn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Wc=new Xt,sm=new ie,om=new ie;class Q0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kf,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;sm.setFromMatrixPosition(e.matrixWorld),n.position.copy(sm),om.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(om),n.updateMatrixWorld(),Wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lg extends sg{constructor(e=-1,n=1,r=1,a=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class J0 extends Q0{constructor(){super(new lg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ex extends Z0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new J0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tx extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function am(s,e,n,r){const a=nx(r);switch(n){case jm:return s*e;case qm:return s*e/a.components*a.byteLength;case Xf:return s*e/a.components*a.byteLength;case $m:return s*e*2/a.components*a.byteLength;case jf:return s*e*2/a.components*a.byteLength;case Ym:return s*e*3/a.components*a.byteLength;case ai:return s*e*4/a.components*a.byteLength;case Yf:return s*e*4/a.components*a.byteLength;case El:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hf:case mf:return Math.max(s,16)*Math.max(e,8)/4;case df:case pf:return Math.max(s,8)*Math.max(e,8)/2;case gf:case _f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Af:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Df:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Uf:case Nf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Km:case If:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ff:case Of:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nx(s){switch(s){case vi:case Gm:return{byteLength:1,components:1};case Oo:case Wm:case Go:return{byteLength:2,components:1};case Gf:case Wf:return{byteLength:2,components:4};case $r:case Vf:case Oi:return{byteLength:4,components:1};case Xm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ug(){let s=null,e=!1,n=null,r=null;function a(u,c){n(u,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function ix(s){const e=new WeakMap;function n(d,h){const m=d.array,_=d.usage,v=m.byteLength,S=s.createBuffer();s.bindBuffer(h,S),s.bufferData(h,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,h,m){const _=h.array,v=h.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((y,T)=>y.start-T.start);let S=0;for(let y=1;y<v.length;y++){const T=v[S],A=v[y];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++S,v[S]=A)}v.length=S+1;for(let y=0,T=v.length;y<T;y++){const A=v[y];s.bufferSubData(m,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:u,update:c}}var rx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sx=`#ifdef USE_ALPHAHASH
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
#endif`,ox=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cx=`#ifdef USE_AOMAP
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
#endif`,fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dx=`#ifdef USE_BATCHING
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
#endif`,hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_x=`#ifdef USE_IRIDESCENCE
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
#endif`,vx=`#ifdef USE_BUMPMAP
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
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rx=`#define PI 3.141592653589793
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
} // validated`,Cx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Px=`vec3 transformedNormal = objectNormal;
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
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xx=`#ifdef USE_GRADIENTMAP
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
}`,jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$x=`uniform bool receiveShadow;
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
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tS=`PhysicalMaterial material;
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
#endif`,nS=`struct PhysicalMaterial {
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
}`,iS=`
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
#endif`,rS=`#if defined( RE_IndirectDiffuse )
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
#endif`,sS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hS=`#if defined( USE_POINTS_UV )
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
#endif`,pS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_S=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xS=`#ifdef USE_MORPHTARGETS
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
#endif`,SS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,MS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ES=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AS=`#ifdef USE_NORMALMAP
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
#endif`,RS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,US=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VS=`float getShadowMask() {
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
}`,GS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WS=`#ifdef USE_SKINNING
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
#endif`,XS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jS=`#ifdef USE_SKINNING
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
#endif`,YS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$S=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZS=`#ifdef USE_TRANSMISSION
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
#endif`,QS=`#ifdef USE_TRANSMISSION
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ry=`uniform sampler2D t2D;
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`#include <common>
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
}`,cy=`#if DEPTH_PACKING == 3200
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
}`,fy=`#define DISTANCE
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
}`,dy=`#define DISTANCE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`uniform float scale;
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
}`,gy=`uniform vec3 diffuse;
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
}`,_y=`#include <common>
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
}`,vy=`uniform vec3 diffuse;
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
}`,xy=`#define LAMBERT
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
}`,Sy=`#define LAMBERT
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
}`,yy=`#define MATCAP
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
}`,My=`#define MATCAP
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
}`,Ey=`#define NORMAL
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
}`,Ty=`#define NORMAL
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
}`,wy=`#define PHONG
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
}`,Ay=`#define PHONG
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
}`,Ry=`#define STANDARD
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
}`,Cy=`#define STANDARD
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
}`,Py=`#define TOON
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
}`,by=`#define TOON
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
}`,Ly=`uniform float size;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,Ny=`uniform vec3 color;
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
}`,Iy=`uniform float rotation;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:rx,alphahash_pars_fragment:sx,alphamap_fragment:ox,alphamap_pars_fragment:ax,alphatest_fragment:lx,alphatest_pars_fragment:ux,aomap_fragment:cx,aomap_pars_fragment:fx,batching_pars_vertex:dx,batching_vertex:hx,begin_vertex:px,beginnormal_vertex:mx,bsdfs:gx,iridescence_fragment:_x,bumpmap_pars_fragment:vx,clipping_planes_fragment:xx,clipping_planes_pars_fragment:Sx,clipping_planes_pars_vertex:yx,clipping_planes_vertex:Mx,color_fragment:Ex,color_pars_fragment:Tx,color_pars_vertex:wx,color_vertex:Ax,common:Rx,cube_uv_reflection_fragment:Cx,defaultnormal_vertex:Px,displacementmap_pars_vertex:bx,displacementmap_vertex:Lx,emissivemap_fragment:Dx,emissivemap_pars_fragment:Ux,colorspace_fragment:Nx,colorspace_pars_fragment:Ix,envmap_fragment:Fx,envmap_common_pars_fragment:Ox,envmap_pars_fragment:kx,envmap_pars_vertex:Bx,envmap_physical_pars_fragment:Kx,envmap_vertex:zx,fog_vertex:Hx,fog_pars_vertex:Vx,fog_fragment:Gx,fog_pars_fragment:Wx,gradientmap_pars_fragment:Xx,lightmap_pars_fragment:jx,lights_lambert_fragment:Yx,lights_lambert_pars_fragment:qx,lights_pars_begin:$x,lights_toon_fragment:Zx,lights_toon_pars_fragment:Qx,lights_phong_fragment:Jx,lights_phong_pars_fragment:eS,lights_physical_fragment:tS,lights_physical_pars_fragment:nS,lights_fragment_begin:iS,lights_fragment_maps:rS,lights_fragment_end:sS,logdepthbuf_fragment:oS,logdepthbuf_pars_fragment:aS,logdepthbuf_pars_vertex:lS,logdepthbuf_vertex:uS,map_fragment:cS,map_pars_fragment:fS,map_particle_fragment:dS,map_particle_pars_fragment:hS,metalnessmap_fragment:pS,metalnessmap_pars_fragment:mS,morphinstance_vertex:gS,morphcolor_vertex:_S,morphnormal_vertex:vS,morphtarget_pars_vertex:xS,morphtarget_vertex:SS,normal_fragment_begin:yS,normal_fragment_maps:MS,normal_pars_fragment:ES,normal_pars_vertex:TS,normal_vertex:wS,normalmap_pars_fragment:AS,clearcoat_normal_fragment_begin:RS,clearcoat_normal_fragment_maps:CS,clearcoat_pars_fragment:PS,iridescence_pars_fragment:bS,opaque_fragment:LS,packing:DS,premultiplied_alpha_fragment:US,project_vertex:NS,dithering_fragment:IS,dithering_pars_fragment:FS,roughnessmap_fragment:OS,roughnessmap_pars_fragment:kS,shadowmap_pars_fragment:BS,shadowmap_pars_vertex:zS,shadowmap_vertex:HS,shadowmask_pars_fragment:VS,skinbase_vertex:GS,skinning_pars_vertex:WS,skinning_vertex:XS,skinnormal_vertex:jS,specularmap_fragment:YS,specularmap_pars_fragment:qS,tonemapping_fragment:$S,tonemapping_pars_fragment:KS,transmission_fragment:ZS,transmission_pars_fragment:QS,uv_pars_fragment:JS,uv_pars_vertex:ey,uv_vertex:ty,worldpos_vertex:ny,background_vert:iy,background_frag:ry,backgroundCube_vert:sy,backgroundCube_frag:oy,cube_vert:ay,cube_frag:ly,depth_vert:uy,depth_frag:cy,distanceRGBA_vert:fy,distanceRGBA_frag:dy,equirect_vert:hy,equirect_frag:py,linedashed_vert:my,linedashed_frag:gy,meshbasic_vert:_y,meshbasic_frag:vy,meshlambert_vert:xy,meshlambert_frag:Sy,meshmatcap_vert:yy,meshmatcap_frag:My,meshnormal_vert:Ey,meshnormal_frag:Ty,meshphong_vert:wy,meshphong_frag:Ay,meshphysical_vert:Ry,meshphysical_frag:Cy,meshtoon_vert:Py,meshtoon_frag:by,points_vert:Ly,points_frag:Dy,shadow_vert:Uy,shadow_frag:Ny,sprite_vert:Iy,sprite_frag:Fy},Le={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},pi={basic:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:En([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:En([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:En([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:En([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:En([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:En([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:En([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:En([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:En([Le.common,Le.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:En([Le.lights,Le.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};pi.physical={uniforms:En([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const xl={r:0,b:0,g:0},Br=new zi,Oy=new Xt;function ky(s,e,n,r,a,u,c){const d=new Pt(0);let h=u===!0?0:1,m,_,v=null,S=0,y=null;function T(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?n:e).get(P)),P}function A(D){let P=!1;const G=T(D);G===null?g(d,h):G&&G.isColor&&(g(G,1),P=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(D,P){const G=T(P);G&&(G.isCubeTexture||G.mapping===Dl)?(_===void 0&&(_=new gi(new Ys(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:Xs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Br.copy(P.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Oy.makeRotationFromEuler(Br)),_.material.toneMapped=Et.getTransfer(G.colorSpace)!==Dt,(v!==G||S!==G.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,v=G,S=G.version,y=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new gi(new Nl(2,2),new Sr({name:"BackgroundMaterial",uniforms:Xs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Et.getTransfer(G.colorSpace)!==Dt,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||S!==G.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,v=G,S=G.version,y=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,P){D.getRGB(xl,rg(s)),r.buffers.color.setClear(xl.r,xl.g,xl.b,P,c)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,P=1){d.set(D),h=P,g(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,g(d,h)},render:A,addToRenderList:x,dispose:U}}function By(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=S(null);let u=a,c=!1;function d(R,z,oe,Q,ce){let de=!1;const re=v(Q,oe,z);u!==re&&(u=re,m(u.object)),de=y(R,Q,oe,ce),de&&T(R,Q,oe,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(de||c)&&(c=!1,P(R,z,oe,Q),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function h(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function _(R){return s.deleteVertexArray(R)}function v(R,z,oe){const Q=oe.wireframe===!0;let ce=r[R.id];ce===void 0&&(ce={},r[R.id]=ce);let de=ce[z.id];de===void 0&&(de={},ce[z.id]=de);let re=de[Q];return re===void 0&&(re=S(h()),de[Q]=re),re}function S(R){const z=[],oe=[],Q=[];for(let ce=0;ce<n;ce++)z[ce]=0,oe[ce]=0,Q[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:Q,object:R,attributes:{},index:null}}function y(R,z,oe,Q){const ce=u.attributes,de=z.attributes;let re=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){const J=ce[B];let N=de[B];if(N===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),J===void 0||J.attribute!==N||N&&J.data!==N.data)return!0;re++}return u.attributesNum!==re||u.index!==Q}function T(R,z,oe,Q){const ce={},de=z.attributes;let re=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){let J=de[B];J===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(J=R.instanceColor));const N={};N.attribute=J,J&&J.data&&(N.data=J.data),ce[B]=N,re++}u.attributes=ce,u.attributesNum=re,u.index=Q}function A(){const R=u.newAttributes;for(let z=0,oe=R.length;z<oe;z++)R[z]=0}function x(R){g(R,0)}function g(R,z){const oe=u.newAttributes,Q=u.enabledAttributes,ce=u.attributeDivisors;oe[R]=1,Q[R]===0&&(s.enableVertexAttribArray(R),Q[R]=1),ce[R]!==z&&(s.vertexAttribDivisor(R,z),ce[R]=z)}function U(){const R=u.newAttributes,z=u.enabledAttributes;for(let oe=0,Q=z.length;oe<Q;oe++)z[oe]!==R[oe]&&(s.disableVertexAttribArray(oe),z[oe]=0)}function D(R,z,oe,Q,ce,de,re){re===!0?s.vertexAttribIPointer(R,z,oe,ce,de):s.vertexAttribPointer(R,z,oe,Q,ce,de)}function P(R,z,oe,Q){A();const ce=Q.attributes,de=oe.getAttributes(),re=z.defaultAttributeValues;for(const le in de){const B=de[le];if(B.location>=0){let ae=ce[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const J=ae.normalized,N=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const De=ne.buffer,Z=ne.type,fe=ne.bytesPerElement,Ee=Z===s.INT||Z===s.UNSIGNED_INT||ae.gpuType===Vf;if(ae.isInterleavedBufferAttribute){const xe=ae.data,we=xe.stride,Ye=ae.offset;if(xe.isInstancedInterleavedBuffer){for(let ze=0;ze<B.locationSize;ze++)g(B.location+ze,xe.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ze=0;ze<B.locationSize;ze++)x(B.location+ze);s.bindBuffer(s.ARRAY_BUFFER,De);for(let ze=0;ze<B.locationSize;ze++)D(B.location+ze,N/B.locationSize,Z,J,we*fe,(Ye+N/B.locationSize*ze)*fe,Ee)}else{if(ae.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)g(B.location+xe,ae.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let xe=0;xe<B.locationSize;xe++)x(B.location+xe);s.bindBuffer(s.ARRAY_BUFFER,De);for(let xe=0;xe<B.locationSize;xe++)D(B.location+xe,N/B.locationSize,Z,J,N*fe,N/B.locationSize*xe*fe,Ee)}}else if(re!==void 0){const J=re[le];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(B.location,J);break;case 3:s.vertexAttrib3fv(B.location,J);break;case 4:s.vertexAttrib4fv(B.location,J);break;default:s.vertexAttrib1fv(B.location,J)}}}}U()}function G(){X();for(const R in r){const z=r[R];for(const oe in z){const Q=z[oe];for(const ce in Q)_(Q[ce].object),delete Q[ce];delete z[oe]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const oe in z){const Q=z[oe];for(const ce in Q)_(Q[ce].object),delete Q[ce];delete z[oe]}delete r[R.id]}function I(R){for(const z in r){const oe=r[z];if(oe[R.id]===void 0)continue;const Q=oe[R.id];for(const ce in Q)_(Q[ce].object),delete Q[ce];delete oe[R.id]}}function X(){C(),c=!0,u!==a&&(u=a,m(u.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:X,resetDefaultState:C,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:x,disableUnusedAttributes:U}}function zy(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function c(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let y=0;for(let T=0;T<v;T++)y+=_[T];n.update(y,r,1)}function h(m,_,v,S){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<m.length;T++)c(m[T],_[T],S[T]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,_,0,S,0,v);let T=0;for(let A=0;A<v;A++)T+=_[A]*S[A];n.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Hy(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==ai&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const X=I===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==vi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Oi&&!X)}function h(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,S=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:P,vertexTextures:G,maxSamples:F}}function Vy(s){const e=this;let n=null,r=0,a=!1,u=!1;const c=new Hr,d=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||r!==0||a;return a=S,r=v.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){n=_(v,S,0)},this.setState=function(v,S,y){const T=v.clippingPlanes,A=v.clipIntersection,x=v.clipShadows,g=s.get(v);if(!a||T===null||T.length===0||u&&!x)u?_(null):m();else{const U=u?0:r,D=U*4;let P=g.clippingState||null;h.value=P,P=_(T,S,D,y);for(let G=0;G!==D;++G)P[G]=n[G];g.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,S,y,T){const A=v!==null?v.length:0;let x=null;if(A!==0){if(x=h.value,T!==!0||x===null){const g=y+A*4,U=S.matrixWorldInverse;d.getNormalMatrix(U),(x===null||x.length<g)&&(x=new Float32Array(g));for(let D=0,P=y;D!==A;++D,P+=4)c.copy(v[D]).applyMatrix4(U,d),c.normal.toArray(x,P),x[P+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function Gy(s){let e=new WeakMap;function n(c,d){return d===uf?c.mapping=Vs:d===cf&&(c.mapping=Gs),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===uf||d===cf)if(e.has(c)){const h=e.get(c).texture;return n(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new B0(h.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),n(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Os=4,lm=[.125,.215,.35,.446,.526,.582],Wr=20,Xc=new lg,um=new Pt;let jc=null,Yc=0,qc=0,$c=!1;const Vr=(1+Math.sqrt(5))/2,Fs=1/Vr,cm=[new ie(-Vr,Fs,0),new ie(Vr,Fs,0),new ie(-Fs,0,Vr),new ie(Fs,0,Vr),new ie(0,Vr,-Fs),new ie(0,Vr,Fs),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],Wy=new ie;class fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,u={}){const{size:c=256,position:d=Wy}=u;jc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,d),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,Yc,qc),this._renderer.xr.enabled=$c,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Go,format:ai,colorSpace:Ws,depthBuffer:!1},a=dm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xy(u)),this._blurMaterial=jy(u,e,n)}return a}_compileMaterial(e){const n=new gi(this._lodPlanes[0],e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,r,a,u){const h=new Kn(90,1,n,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(um),v.toneMapping=vr,v.autoClear=!1;const T=new mr({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),A=new gi(new Ys,T);let x=!1;const g=e.background;g?g.isColor&&(T.color.copy(g),e.background=null,x=!0):(T.color.copy(um),x=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(h.up.set(0,m[U],0),h.position.set(u.x,u.y,u.z),h.lookAt(u.x+_[U],u.y,u.z)):D===1?(h.up.set(0,0,m[U]),h.position.set(u.x,u.y,u.z),h.lookAt(u.x,u.y+_[U],u.z)):(h.up.set(0,m[U],0),h.position.set(u.x,u.y,u.z),h.lookAt(u.x,u.y,u.z+_[U]));const P=this._cubeSize;Sl(a,D*P,U>2?P:0,P,P),v.setRenderTarget(a),x&&v.render(A,h),v.render(e,h)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=y,v.autoClear=S,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Vs||e.mapping===Gs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const u=a?this._cubemapMaterial:this._equirectMaterial,c=new gi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const h=this._cubeSize;Sl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(c,Xc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=cm[(a-u-1)%cm.length];this._blur(e,u-1,u,c,d)}n.autoClear=r}_blur(e,n,r,a,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",u),this._halfBlur(c,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,c,d){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new gi(this._lodPlanes[a],m),S=m.uniforms,y=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Wr-1),A=u/T,x=isFinite(u)?1+Math.floor(_*A):Wr;x>Wr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Wr}`);const g=[];let U=0;for(let I=0;I<Wr;++I){const X=I/A,C=Math.exp(-X*X/2);g.push(C),I===0?U+=C:I<x&&(U+=2*C)}for(let I=0;I<g.length;I++)g[I]=g[I]/U;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=g,S.latitudinal.value=c==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:D}=this;S.dTheta.value=T,S.mipInt.value=D-r;const P=this._sizeLods[a],G=3*P*(a>D-Os?a-D+Os:0),F=4*(this._cubeSize-P);Sl(n,G,F,3*P,2*P),h.setRenderTarget(n),h.render(v,Xc)}}function Xy(s){const e=[],n=[],r=[];let a=s;const u=s-Os+1+lm.length;for(let c=0;c<u;c++){const d=Math.pow(2,a);n.push(d);let h=1/d;c>s-Os?h=lm[c-s+Os-1]:c===0&&(h=0),r.push(h);const m=1/(d-2),_=-m,v=1+m,S=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,T=6,A=3,x=2,g=1,U=new Float32Array(A*T*y),D=new Float32Array(x*T*y),P=new Float32Array(g*T*y);for(let F=0;F<y;F++){const I=F%3*2/3-1,X=F>2?0:-1,C=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];U.set(C,A*T*F),D.set(S,x*T*F);const R=[F,F,F,F,F,F];P.set(R,g*T*F)}const G=new Zr;G.setAttribute("position",new _i(U,A)),G.setAttribute("uv",new _i(D,x)),G.setAttribute("faceIndex",new _i(P,g)),e.push(G),a>Os&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function dm(s,e,n){const r=new Kr(s,e,n);return r.texture.mapping=Dl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Sl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function jy(s,e,n){const r=new Float32Array(Wr),a=new ie(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Qf(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function hm(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qf(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function pm(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Qf(){return`

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
	`}function Yy(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===uf||h===cf,_=h===Vs||h===Gs;if(m||_){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return n===null&&(n=new fm(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&a(y)?(n===null&&(n=new fm(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d){let h=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&h++;return h===m}function u(d){const h=d.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function qy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Bs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function $y(s,e,n,r){const a={},u=new WeakMap;function c(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",c),delete a[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function d(v,S){return a[S.id]===!0||(S.addEventListener("dispose",c),a[S.id]=!0,n.memory.geometries++),S}function h(v){const S=v.attributes;for(const y in S)e.update(S[y],s.ARRAY_BUFFER)}function m(v){const S=[],y=v.index,T=v.attributes.position;let A=0;if(y!==null){const U=y.array;A=y.version;for(let D=0,P=U.length;D<P;D+=3){const G=U[D+0],F=U[D+1],I=U[D+2];S.push(G,F,F,I,I,G)}}else if(T!==void 0){const U=T.array;A=T.version;for(let D=0,P=U.length/3-1;D<P;D+=3){const G=D+0,F=D+1,I=D+2;S.push(G,F,F,I,I,G)}}else return;const x=new(Qm(S)?ig:ng)(S,1);x.version=A;const g=u.get(v);g&&e.remove(g),u.set(v,x)}function _(v){const S=u.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:h,getWireframeAttribute:_}}function Ky(s,e,n){let r;function a(S){r=S}let u,c;function d(S){u=S.type,c=S.bytesPerElement}function h(S,y){s.drawElements(r,y,u,S*c),n.update(y,r,1)}function m(S,y,T){T!==0&&(s.drawElementsInstanced(r,y,u,S*c,T),n.update(y,r,T))}function _(S,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,S,0,T);let x=0;for(let g=0;g<T;g++)x+=y[g];n.update(x,r,1)}function v(S,y,T,A){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<S.length;g++)m(S[g]/c,y[g],A[g]);else{x.multiDrawElementsInstancedWEBGL(r,y,0,u,S,0,A,0,T);let g=0;for(let U=0;U<T;U++)g+=y[U]*A[U];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function Zy(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function Qy(s,e,n){const r=new WeakMap,a=new Wt;function u(c,d,h){const m=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let R=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;S!==void 0&&S.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let P=0;T===!0&&(P=1),A===!0&&(P=2),x===!0&&(P=3);let G=d.attributes.position.count*P,F=1;G>e.maxTextureSize&&(F=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const I=new Float32Array(G*F*4*v),X=new Jm(I,G,F,v);X.type=Oi,X.needsUpdate=!0;const C=P*4;for(let z=0;z<v;z++){const oe=g[z],Q=U[z],ce=D[z],de=G*F*4*z;for(let re=0;re<oe.count;re++){const le=re*C;T===!0&&(a.fromBufferAttribute(oe,re),I[de+le+0]=a.x,I[de+le+1]=a.y,I[de+le+2]=a.z,I[de+le+3]=0),A===!0&&(a.fromBufferAttribute(Q,re),I[de+le+4]=a.x,I[de+le+5]=a.y,I[de+le+6]=a.z,I[de+le+7]=0),x===!0&&(a.fromBufferAttribute(ce,re),I[de+le+8]=a.x,I[de+le+9]=a.y,I[de+le+10]=a.z,I[de+le+11]=ce.itemSize===4?a.w:1)}}S={count:v,texture:X,size:new At(G,F)},r.set(d,S),d.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let T=0;for(let x=0;x<m.length;x++)T+=m[x];const A=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",S.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:u}}function Jy(s,e,n,r){let a=new WeakMap;function u(h){const m=r.render.frame,_=h.geometry,v=e.get(h,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const S=h.skeleton;a.get(S)!==m&&(S.update(),a.set(S,m))}return v}function c(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:c}}const cg=new wn,mm=new ag(1,1),fg=new Jm,dg=new y0,hg=new og,gm=[],_m=[],vm=new Float32Array(16),xm=new Float32Array(9),Sm=new Float32Array(4);function qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=gm[a];if(u===void 0&&(u=new Float32Array(a),gm[a]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(u,d)}return u}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Il(s,e){let n=_m[e];n===void 0&&(n=new Int32Array(e),_m[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function eM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function tM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function nM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function iM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function rM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Sm.set(r),s.uniformMatrix2fv(this.addr,!1,Sm),Qt(n,r)}}function sM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;xm.set(r),s.uniformMatrix3fv(this.addr,!1,xm),Qt(n,r)}}function oM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;vm.set(r),s.uniformMatrix4fv(this.addr,!1,vm),Qt(n,r)}}function aM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function fM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function dM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function hM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function pM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function mM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(mm.compareFunction=Zm,u=mm):u=cg,n.setTexture2D(e||u,a)}function gM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||dg,a)}function _M(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||hg,a)}function vM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||fg,a)}function xM(s){switch(s){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return rM;case 35675:return sM;case 35676:return oM;case 5124:case 35670:return aM;case 35667:case 35671:return lM;case 35668:case 35672:return uM;case 35669:case 35673:return cM;case 5125:return fM;case 36294:return dM;case 36295:return hM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return _M;case 36289:case 36303:case 36311:case 36292:return vM}}function SM(s,e){s.uniform1fv(this.addr,e)}function yM(s,e){const n=qs(e,this.size,2);s.uniform2fv(this.addr,n)}function MM(s,e){const n=qs(e,this.size,3);s.uniform3fv(this.addr,n)}function EM(s,e){const n=qs(e,this.size,4);s.uniform4fv(this.addr,n)}function TM(s,e){const n=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function wM(s,e){const n=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function AM(s,e){const n=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function RM(s,e){s.uniform1iv(this.addr,e)}function CM(s,e){s.uniform2iv(this.addr,e)}function PM(s,e){s.uniform3iv(this.addr,e)}function bM(s,e){s.uniform4iv(this.addr,e)}function LM(s,e){s.uniform1uiv(this.addr,e)}function DM(s,e){s.uniform2uiv(this.addr,e)}function UM(s,e){s.uniform3uiv(this.addr,e)}function NM(s,e){s.uniform4uiv(this.addr,e)}function IM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||cg,u[c])}function FM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||dg,u[c])}function OM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||hg,u[c])}function kM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||fg,u[c])}function BM(s){switch(s){case 5126:return SM;case 35664:return yM;case 35665:return MM;case 35666:return EM;case 35674:return TM;case 35675:return wM;case 35676:return AM;case 5124:case 35670:return RM;case 35667:case 35671:return CM;case 35668:case 35672:return PM;case 35669:case 35673:return bM;case 5125:return LM;case 36294:return DM;case 36295:return UM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return kM}}class zM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=xM(n.type)}}class HM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=BM(n.type)}}class VM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,c=a.length;u!==c;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Kc=/(\w+)(\])?(\[|\.)?/g;function ym(s,e){s.seq.push(e),s.map[e.id]=e}function GM(s,e,n){const r=s.name,a=r.length;for(Kc.lastIndex=0;;){const u=Kc.exec(r),c=Kc.lastIndex;let d=u[1];const h=u[2]==="]",m=u[3];if(h&&(d=d|0),m===void 0||m==="["&&c+2===a){ym(n,m===void 0?new zM(d,s,e):new HM(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new VM(d),ym(n,v)),n=v}}}class Cl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),c=e.getUniformLocation(n,u.name);GM(u,c,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,c=n.length;u!==c;++u){const d=n[u],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Mm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const WM=37297;let XM=0;function jM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=a;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Em=new ut;function YM(s){Et._getMatrix(Em,Et.workingColorSpace,s);const e=`mat3( ${Em.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(s)){case bl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Tm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+jM(s.getShaderSource(e),c)}else return a}function qM(s,e){const n=YM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function $M(s,e){let n;switch(e){case jv:n="Linear";break;case Yv:n="Reinhard";break;case qv:n="Cineon";break;case $v:n="ACESFilmic";break;case Zv:n="AgX";break;case Qv:n="Neutral";break;case Kv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yl=new ie;function KM(){Et.getLuminanceCoefficients(yl);const s=yl.x.toFixed(4),e=yl.y.toFixed(4),n=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function QM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function JM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),c=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function Io(s){return s!==""}function wm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Am(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(s){return s.replace(eE,nE)}const tE=new Map;function nE(s,e){let n=ft[e];if(n===void 0){const r=tE.get(e);if(r!==void 0)n=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bf(n)}const iE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(s){return s.replace(iE,rE)}function rE(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Cm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function sE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===zm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===wv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function oE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function lE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hm:e="ENVMAP_BLENDING_MULTIPLY";break;case Wv:e="ENVMAP_BLENDING_MIX";break;case Xv:e="ENVMAP_BLENDING_ADD";break}return e}function uE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function cE(s,e,n,r){const a=s.getContext(),u=n.defines;let c=n.vertexShader,d=n.fragmentShader;const h=sE(n),m=oE(n),_=aE(n),v=lE(n),S=uE(n),y=ZM(n),T=QM(u),A=a.createProgram();let x,g,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Io).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Io).join(`
`),g.length>0&&(g+=`
`)):(x=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),g=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?ft.tonemapping_pars_fragment:"",n.toneMapping!==vr?$M("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,qM("linearToOutputTexel",n.outputColorSpace),KM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Io).join(`
`)),c=Bf(c),c=wm(c,n),c=Am(c,n),d=Bf(d),d=wm(d,n),d=Am(d,n),c=Rm(c),d=Rm(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",n.glslVersion===Hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=U+x+c,P=U+g+d,G=Mm(a,a.VERTEX_SHADER,D),F=Mm(a,a.FRAGMENT_SHADER,P);a.attachShader(A,G),a.attachShader(A,F),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function I(z){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(A).trim(),Q=a.getShaderInfoLog(G).trim(),ce=a.getShaderInfoLog(F).trim();let de=!0,re=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,G,F);else{const le=Tm(a,G,"vertex"),B=Tm(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+le+`
`+B)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(Q===""||ce==="")&&(re=!1);re&&(z.diagnostics={runnable:de,programLog:oe,vertexShader:{log:Q,prefix:x},fragmentShader:{log:ce,prefix:g}})}a.deleteShader(G),a.deleteShader(F),X=new Cl(a,A),C=JM(a,A)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(A,WM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=XM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=F,this}let fE=0;class dE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new hE(e),n.set(e,r)),r}}class hE{constructor(e){this.id=fE++,this.code=e,this.usedTimes=0}}function pE(s,e,n,r,a,u,c){const d=new eg,h=new dE,m=new Set,_=[],v=a.logarithmicDepthBuffer,S=a.vertexTextures;let y=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return m.add(C),C===0?"uv":`uv${C}`}function x(C,R,z,oe,Q){const ce=oe.fog,de=Q.geometry,re=C.isMeshStandardMaterial?oe.environment:null,le=(C.isMeshStandardMaterial?n:e).get(C.envMap||re),B=le&&le.mapping===Dl?le.image.height:null,ae=T[C.type];C.precision!==null&&(y=a.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const J=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,N=J!==void 0?J.length:0;let ne=0;de.morphAttributes.position!==void 0&&(ne=1),de.morphAttributes.normal!==void 0&&(ne=2),de.morphAttributes.color!==void 0&&(ne=3);let De,Z,fe,Ee;if(ae){const xt=pi[ae];De=xt.vertexShader,Z=xt.fragmentShader}else De=C.vertexShader,Z=C.fragmentShader,h.update(C),fe=h.getVertexShaderID(C),Ee=h.getFragmentShaderID(C);const xe=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ye=Q.isInstancedMesh===!0,ze=Q.isBatchedMesh===!0,Tt=!!C.map,Rt=!!C.matcap,dt=!!le,O=!!C.aoMap,Jt=!!C.lightMap,vt=!!C.bumpMap,wt=!!C.normalMap,Xe=!!C.displacementMap,gt=!!C.emissiveMap,Ze=!!C.metalnessMap,ot=!!C.roughnessMap,zt=C.anisotropy>0,b=C.clearcoat>0,E=C.dispersion>0,K=C.iridescence>0,ue=C.sheen>0,pe=C.transmission>0,se=zt&&!!C.anisotropyMap,qe=b&&!!C.clearcoatMap,Ae=b&&!!C.clearcoatNormalMap,Be=b&&!!C.clearcoatRoughnessMap,$e=K&&!!C.iridescenceMap,_e=K&&!!C.iridescenceThicknessMap,Ie=ue&&!!C.sheenColorMap,nt=ue&&!!C.sheenRoughnessMap,Je=!!C.specularMap,Re=!!C.specularColorMap,st=!!C.specularIntensityMap,H=pe&&!!C.transmissionMap,Pe=pe&&!!C.thicknessMap,ge=!!C.gradientMap,Ue=!!C.alphaMap,ye=C.alphaTest>0,he=!!C.alphaHash,He=!!C.extensions;let lt=vr;C.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(lt=s.toneMapping);const bt={shaderID:ae,shaderType:C.type,shaderName:C.name,vertexShader:De,fragmentShader:Z,defines:C.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:ze,batchingColor:ze&&Q._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&Q.instanceColor!==null,instancingMorph:Ye&&Q.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ws,alphaToCoverage:!!C.alphaToCoverage,map:Tt,matcap:Rt,envMap:dt,envMapMode:dt&&le.mapping,envMapCubeUVHeight:B,aoMap:O,lightMap:Jt,bumpMap:vt,normalMap:wt,displacementMap:S&&Xe,emissiveMap:gt,normalMapObjectSpace:wt&&C.normalMapType===i0,normalMapTangentSpace:wt&&C.normalMapType===n0,metalnessMap:Ze,roughnessMap:ot,anisotropy:zt,anisotropyMap:se,clearcoat:b,clearcoatMap:qe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Be,dispersion:E,iridescence:K,iridescenceMap:$e,iridescenceThicknessMap:_e,sheen:ue,sheenColorMap:Ie,sheenRoughnessMap:nt,specularMap:Je,specularColorMap:Re,specularIntensityMap:st,transmission:pe,transmissionMap:H,thicknessMap:Pe,gradientMap:ge,opaque:C.transparent===!1&&C.blending===ks&&C.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ye,alphaHash:he,combine:C.combine,mapUv:Tt&&A(C.map.channel),aoMapUv:O&&A(C.aoMap.channel),lightMapUv:Jt&&A(C.lightMap.channel),bumpMapUv:vt&&A(C.bumpMap.channel),normalMapUv:wt&&A(C.normalMap.channel),displacementMapUv:Xe&&A(C.displacementMap.channel),emissiveMapUv:gt&&A(C.emissiveMap.channel),metalnessMapUv:Ze&&A(C.metalnessMap.channel),roughnessMapUv:ot&&A(C.roughnessMap.channel),anisotropyMapUv:se&&A(C.anisotropyMap.channel),clearcoatMapUv:qe&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:nt&&A(C.sheenRoughnessMap.channel),specularMapUv:Je&&A(C.specularMap.channel),specularColorMapUv:Re&&A(C.specularColorMap.channel),specularIntensityMapUv:st&&A(C.specularIntensityMap.channel),transmissionMapUv:H&&A(C.transmissionMap.channel),thicknessMapUv:Pe&&A(C.thicknessMap.channel),alphaMapUv:Ue&&A(C.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(wt||zt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!de.attributes.uv&&(Tt||Ue),fog:!!ce,useFog:C.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:we,skinning:Q.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:Tt&&C.map.isVideoTexture===!0&&Et.getTransfer(C.map.colorSpace)===Dt,decodeVideoTextureEmissive:gt&&C.emissiveMap.isVideoTexture===!0&&Et.getTransfer(C.emissiveMap.colorSpace)===Dt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Fi,flipSided:C.side===Nn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:He&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&C.extensions.multiDraw===!0||ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return bt.vertexUv1s=m.has(1),bt.vertexUv2s=m.has(2),bt.vertexUv3s=m.has(3),m.clear(),bt}function g(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)R.push(z),R.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(U(R,C),D(R,C),R.push(s.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function U(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function D(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function P(C){const R=T[C.type];let z;if(R){const oe=pi[R];z=I0.clone(oe.uniforms)}else z=C.uniforms;return z}function G(C,R){let z;for(let oe=0,Q=_.length;oe<Q;oe++){const ce=_[oe];if(ce.cacheKey===R){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new cE(s,R,C,u),_.push(z)),z}function F(C){if(--C.usedTimes===0){const R=_.indexOf(C);_[R]=_[_.length-1],_.pop(),C.destroy()}}function I(C){h.remove(C)}function X(){h.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:P,acquireProgram:G,releaseProgram:F,releaseShaderCache:I,programs:_,dispose:X}}function mE(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,h){s.get(c)[d]=h}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function gE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Pm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function bm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function c(v,S,y,T,A,x){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:S,material:y,groupOrder:T,renderOrder:v.renderOrder,z:A,group:x},s[e]=g):(g.id=v.id,g.object=v,g.geometry=S,g.material=y,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=A,g.group=x),e++,g}function d(v,S,y,T,A,x){const g=c(v,S,y,T,A,x);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):n.push(g)}function h(v,S,y,T,A,x){const g=c(v,S,y,T,A,x);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,S){n.length>1&&n.sort(v||gE),r.length>1&&r.sort(S||Pm),a.length>1&&a.sort(S||Pm)}function _(){for(let v=e,S=s.length;v<S;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:h,finish:_,sort:m}}function _E(){let s=new WeakMap;function e(r,a){const u=s.get(r);let c;return u===void 0?(c=new bm,s.set(r,[c])):a>=u.length?(c=new bm,u.push(c)):c=u[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function vE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new Pt};break;case"SpotLight":n={position:new ie,direction:new ie,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":n={color:new Pt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=n,n}}}function xE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let SE=0;function yE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ME(s){const e=new vE,n=xE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const a=new ie,u=new Xt,c=new Xt;function d(m){let _=0,v=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,T=0,A=0,x=0,g=0,U=0,D=0,P=0,G=0,F=0,I=0;m.sort(yE);for(let C=0,R=m.length;C<R;C++){const z=m[C],oe=z.color,Q=z.intensity,ce=z.distance,de=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=oe.r*Q,v+=oe.g*Q,S+=oe.b*Q;else if(z.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(z.sh.coefficients[re],Q);I++}else if(z.isDirectionalLight){const re=e.get(z);if(re.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const le=z.shadow,B=n.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.directionalShadow[y]=B,r.directionalShadowMap[y]=de,r.directionalShadowMatrix[y]=z.shadow.matrix,U++}r.directional[y]=re,y++}else if(z.isSpotLight){const re=e.get(z);re.position.setFromMatrixPosition(z.matrixWorld),re.color.copy(oe).multiplyScalar(Q),re.distance=ce,re.coneCos=Math.cos(z.angle),re.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),re.decay=z.decay,r.spot[A]=re;const le=z.shadow;if(z.map&&(r.spotLightMap[G]=z.map,G++,le.updateMatrices(z),z.castShadow&&F++),r.spotLightMatrix[A]=le.matrix,z.castShadow){const B=n.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.spotShadow[A]=B,r.spotShadowMap[A]=de,P++}A++}else if(z.isRectAreaLight){const re=e.get(z);re.color.copy(oe).multiplyScalar(Q),re.halfWidth.set(z.width*.5,0,0),re.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=re,x++}else if(z.isPointLight){const re=e.get(z);if(re.color.copy(z.color).multiplyScalar(z.intensity),re.distance=z.distance,re.decay=z.decay,z.castShadow){const le=z.shadow,B=n.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,r.pointShadow[T]=B,r.pointShadowMap[T]=de,r.pointShadowMatrix[T]=z.shadow.matrix,D++}r.point[T]=re,T++}else if(z.isHemisphereLight){const re=e.get(z);re.skyColor.copy(z.color).multiplyScalar(Q),re.groundColor.copy(z.groundColor).multiplyScalar(Q),r.hemi[g]=re,g++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=S;const X=r.hash;(X.directionalLength!==y||X.pointLength!==T||X.spotLength!==A||X.rectAreaLength!==x||X.hemiLength!==g||X.numDirectionalShadows!==U||X.numPointShadows!==D||X.numSpotShadows!==P||X.numSpotMaps!==G||X.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=x,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+G-F,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=I,X.directionalLength=y,X.pointLength=T,X.spotLength=A,X.rectAreaLength=x,X.hemiLength=g,X.numDirectionalShadows=U,X.numPointShadows=D,X.numSpotShadows=P,X.numSpotMaps=G,X.numLightProbes=I,r.version=SE++)}function h(m,_){let v=0,S=0,y=0,T=0,A=0;const x=_.matrixWorldInverse;for(let g=0,U=m.length;g<U;g++){const D=m[g];if(D.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(x),v++}else if(D.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(x),y++}else if(D.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),c.identity(),u.copy(D.matrixWorld),u.premultiply(x),c.extractRotation(u),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),T++}else if(D.isPointLight){const P=r.point[S];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),S++}else if(D.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(x),A++}}}return{setup:d,setupView:h,state:r}}function Lm(s){const e=new ME(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function c(_){r.push(_)}function d(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:u,pushShadow:c}}function EE(s){let e=new WeakMap;function n(a,u=0){const c=e.get(a);let d;return c===void 0?(d=new Lm(s),e.set(a,[d])):u>=c.length?(d=new Lm(s),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const TE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wE=`uniform sampler2D shadow_pass;
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
}`;function AE(s,e,n){let r=new Kf;const a=new At,u=new At,c=new Wt,d=new X0({depthPacking:t0}),h=new j0,m={},_=n.maxTextureSize,v={[xr]:Nn,[Nn]:xr,[Fi]:Fi},S=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:TE,fragmentShader:wE}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const T=new Zr;T.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new gi(T,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zm;let g=this.type;this.render=function(F,I,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const C=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(_r),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const Q=g!==Ii&&this.type===Ii,ce=g===Ii&&this.type!==Ii;for(let de=0,re=F.length;de<re;de++){const le=F[de],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ae=B.getFrameExtents();if(a.multiply(ae),u.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ae.x),a.x=u.x*ae.x,B.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ae.y),a.y=u.y*ae.y,B.mapSize.y=u.y)),B.map===null||Q===!0||ce===!0){const N=this.type!==Ii?{minFilter:Tn,magFilter:Tn}:{};B.map!==null&&B.map.dispose(),B.map=new Kr(a.x,a.y,N),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const J=B.getViewportCount();for(let N=0;N<J;N++){const ne=B.getViewport(N);c.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),oe.viewport(c),B.updateMatrices(le,N),r=B.getFrustum(),P(I,X,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===Ii&&U(B,X),B.needsUpdate=!1}g=this.type,x.needsUpdate=!1,s.setRenderTarget(C,R,z)};function U(F,I){const X=e.update(A);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Kr(a.x,a.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(I,null,X,S,A,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(I,null,X,y,A,null)}function D(F,I,X,C){let R=null;const z=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)R=z;else if(R=X.isPointLight===!0?h:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const oe=R.uuid,Q=I.uuid;let ce=m[oe];ce===void 0&&(ce={},m[oe]=ce);let de=ce[Q];de===void 0&&(de=R.clone(),ce[Q]=de,I.addEventListener("dispose",G)),R=de}if(R.visible=I.visible,R.wireframe=I.wireframe,C===Ii?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:v[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=s.properties.get(R);oe.light=X}return R}function P(F,I,X,C,R){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Ii)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const Q=e.update(F),ce=F.material;if(Array.isArray(ce)){const de=Q.groups;for(let re=0,le=de.length;re<le;re++){const B=de[re],ae=ce[B.materialIndex];if(ae&&ae.visible){const J=D(F,ae,C,R);F.onBeforeShadow(s,F,I,X,Q,J,B),s.renderBufferDirect(X,null,Q,J,F,B),F.onAfterShadow(s,F,I,X,Q,J,B)}}}else if(ce.visible){const de=D(F,ce,C,R);F.onBeforeShadow(s,F,I,X,Q,de,null),s.renderBufferDirect(X,null,Q,de,F,null),F.onAfterShadow(s,F,I,X,Q,de,null)}}const oe=F.children;for(let Q=0,ce=oe.length;Q<ce;Q++)P(oe[Q],I,X,C,R)}function G(F){F.target.removeEventListener("dispose",G);for(const X in m){const C=m[X],R=F.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const RE={[tf]:nf,[rf]:af,[sf]:lf,[Hs]:of,[nf]:tf,[af]:rf,[lf]:sf,[of]:Hs};function CE(s,e){function n(){let H=!1;const Pe=new Wt;let ge=null;const Ue=new Wt(0,0,0,0);return{setMask:function(ye){ge!==ye&&!H&&(s.colorMask(ye,ye,ye,ye),ge=ye)},setLocked:function(ye){H=ye},setClear:function(ye,he,He,lt,bt){bt===!0&&(ye*=lt,he*=lt,He*=lt),Pe.set(ye,he,He,lt),Ue.equals(Pe)===!1&&(s.clearColor(ye,he,He,lt),Ue.copy(Pe))},reset:function(){H=!1,ge=null,Ue.set(-1,0,0,0)}}}function r(){let H=!1,Pe=!1,ge=null,Ue=null,ye=null;return{setReversed:function(he){if(Pe!==he){const He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Pe=he;const lt=ye;ye=null,this.setClear(lt)}},getReversed:function(){return Pe},setTest:function(he){he?xe(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(he){ge!==he&&!H&&(s.depthMask(he),ge=he)},setFunc:function(he){if(Pe&&(he=RE[he]),Ue!==he){switch(he){case tf:s.depthFunc(s.NEVER);break;case nf:s.depthFunc(s.ALWAYS);break;case rf:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case sf:s.depthFunc(s.EQUAL);break;case of:s.depthFunc(s.GEQUAL);break;case af:s.depthFunc(s.GREATER);break;case lf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=he}},setLocked:function(he){H=he},setClear:function(he){ye!==he&&(Pe&&(he=1-he),s.clearDepth(he),ye=he)},reset:function(){H=!1,ge=null,Ue=null,ye=null,Pe=!1}}}function a(){let H=!1,Pe=null,ge=null,Ue=null,ye=null,he=null,He=null,lt=null,bt=null;return{setTest:function(xt){H||(xt?xe(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(xt){Pe!==xt&&!H&&(s.stencilMask(xt),Pe=xt)},setFunc:function(xt,An,xn){(ge!==xt||Ue!==An||ye!==xn)&&(s.stencilFunc(xt,An,xn),ge=xt,Ue=An,ye=xn)},setOp:function(xt,An,xn){(he!==xt||He!==An||lt!==xn)&&(s.stencilOp(xt,An,xn),he=xt,He=An,lt=xn)},setLocked:function(xt){H=xt},setClear:function(xt){bt!==xt&&(s.clearStencil(xt),bt=xt)},reset:function(){H=!1,Pe=null,ge=null,Ue=null,ye=null,he=null,He=null,lt=null,bt=null}}}const u=new n,c=new r,d=new a,h=new WeakMap,m=new WeakMap;let _={},v={},S=new WeakMap,y=[],T=null,A=!1,x=null,g=null,U=null,D=null,P=null,G=null,F=null,I=new Pt(0,0,0),X=0,C=!1,R=null,z=null,oe=null,Q=null,ce=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,le=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),re=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),re=le>=2);let ae=null,J={};const N=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),De=new Wt().fromArray(N),Z=new Wt().fromArray(ne);function fe(H,Pe,ge,Ue){const ye=new Uint8Array(4),he=s.createTexture();s.bindTexture(H,he),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<ge;He++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(Pe+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return he}const Ee={};Ee[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),xe(s.DEPTH_TEST),c.setFunc(Hs),vt(!1),wt(Ip),xe(s.CULL_FACE),O(_r);function xe(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function we(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Ye(H,Pe){return v[H]!==Pe?(s.bindFramebuffer(H,Pe),v[H]=Pe,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Pe),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function ze(H,Pe){let ge=y,Ue=!1;if(H){ge=S.get(Pe),ge===void 0&&(ge=[],S.set(Pe,ge));const ye=H.textures;if(ge.length!==ye.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let he=0,He=ye.length;he<He;he++)ge[he]=s.COLOR_ATTACHMENT0+he;ge.length=ye.length,Ue=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(ge)}function Tt(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const Rt={[Gr]:s.FUNC_ADD,[Rv]:s.FUNC_SUBTRACT,[Cv]:s.FUNC_REVERSE_SUBTRACT};Rt[Pv]=s.MIN,Rt[bv]=s.MAX;const dt={[Lv]:s.ZERO,[Dv]:s.ONE,[Uv]:s.SRC_COLOR,[Jc]:s.SRC_ALPHA,[Bv]:s.SRC_ALPHA_SATURATE,[Ov]:s.DST_COLOR,[Iv]:s.DST_ALPHA,[Nv]:s.ONE_MINUS_SRC_COLOR,[ef]:s.ONE_MINUS_SRC_ALPHA,[kv]:s.ONE_MINUS_DST_COLOR,[Fv]:s.ONE_MINUS_DST_ALPHA,[zv]:s.CONSTANT_COLOR,[Hv]:s.ONE_MINUS_CONSTANT_COLOR,[Vv]:s.CONSTANT_ALPHA,[Gv]:s.ONE_MINUS_CONSTANT_ALPHA};function O(H,Pe,ge,Ue,ye,he,He,lt,bt,xt){if(H===_r){A===!0&&(we(s.BLEND),A=!1);return}if(A===!1&&(xe(s.BLEND),A=!0),H!==Av){if(H!==x||xt!==C){if((g!==Gr||P!==Gr)&&(s.blendEquation(s.FUNC_ADD),g=Gr,P=Gr),xt)switch(H){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fp:s.blendFunc(s.ONE,s.ONE);break;case Op:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Op:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}U=null,D=null,G=null,F=null,I.set(0,0,0),X=0,x=H,C=xt}return}ye=ye||Pe,he=he||ge,He=He||Ue,(Pe!==g||ye!==P)&&(s.blendEquationSeparate(Rt[Pe],Rt[ye]),g=Pe,P=ye),(ge!==U||Ue!==D||he!==G||He!==F)&&(s.blendFuncSeparate(dt[ge],dt[Ue],dt[he],dt[He]),U=ge,D=Ue,G=he,F=He),(lt.equals(I)===!1||bt!==X)&&(s.blendColor(lt.r,lt.g,lt.b,bt),I.copy(lt),X=bt),x=H,C=!1}function Jt(H,Pe){H.side===Fi?we(s.CULL_FACE):xe(s.CULL_FACE);let ge=H.side===Nn;Pe&&(ge=!ge),vt(ge),H.blending===ks&&H.transparent===!1?O(_r):O(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),u.setMask(H.colorWrite);const Ue=H.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),gt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(H){R!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),R=H)}function wt(H){H!==Ev?(xe(s.CULL_FACE),H!==z&&(H===Ip?s.cullFace(s.BACK):H===Tv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),z=H}function Xe(H){H!==oe&&(re&&s.lineWidth(H),oe=H)}function gt(H,Pe,ge){H?(xe(s.POLYGON_OFFSET_FILL),(Q!==Pe||ce!==ge)&&(s.polygonOffset(Pe,ge),Q=Pe,ce=ge)):we(s.POLYGON_OFFSET_FILL)}function Ze(H){H?xe(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function ot(H){H===void 0&&(H=s.TEXTURE0+de-1),ae!==H&&(s.activeTexture(H),ae=H)}function zt(H,Pe,ge){ge===void 0&&(ae===null?ge=s.TEXTURE0+de-1:ge=ae);let Ue=J[ge];Ue===void 0&&(Ue={type:void 0,texture:void 0},J[ge]=Ue),(Ue.type!==H||Ue.texture!==Pe)&&(ae!==ge&&(s.activeTexture(ge),ae=ge),s.bindTexture(H,Pe||Ee[H]),Ue.type=H,Ue.texture=Pe)}function b(){const H=J[ae];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{s.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{s.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{s.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{s.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{s.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(){try{s.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{s.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(H){De.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),De.copy(H))}function nt(H){Z.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Z.copy(H))}function Je(H,Pe){let ge=m.get(Pe);ge===void 0&&(ge=new WeakMap,m.set(Pe,ge));let Ue=ge.get(H);Ue===void 0&&(Ue=s.getUniformBlockIndex(Pe,H.name),ge.set(H,Ue))}function Re(H,Pe){const Ue=m.get(Pe).get(H);h.get(Pe)!==Ue&&(s.uniformBlockBinding(Pe,Ue,H.__bindingPointIndex),h.set(Pe,Ue))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ae=null,J={},v={},S=new WeakMap,y=[],T=null,A=!1,x=null,g=null,U=null,D=null,P=null,G=null,F=null,I=new Pt(0,0,0),X=0,C=!1,R=null,z=null,oe=null,Q=null,ce=null,De.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:xe,disable:we,bindFramebuffer:Ye,drawBuffers:ze,useProgram:Tt,setBlending:O,setMaterial:Jt,setFlipSided:vt,setCullFace:wt,setLineWidth:Xe,setPolygonOffset:gt,setScissorTest:Ze,activeTexture:ot,bindTexture:zt,unbindTexture:b,compressedTexImage2D:E,compressedTexImage3D:K,texImage2D:$e,texImage3D:_e,updateUBOMapping:Je,uniformBlockBinding:Re,texStorage2D:Ae,texStorage3D:Be,texSubImage2D:ue,texSubImage3D:pe,compressedTexSubImage2D:se,compressedTexSubImage3D:qe,scissor:Ie,viewport:nt,reset:st}}function PE(s,e,n,r,a,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new At,_=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,E){return y?new OffscreenCanvas(b,E):Ho("canvas")}function A(b,E,K){let ue=1;const pe=zt(b);if((pe.width>K||pe.height>K)&&(ue=K/Math.max(pe.width,pe.height)),ue<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const se=Math.floor(ue*pe.width),qe=Math.floor(ue*pe.height);v===void 0&&(v=T(se,qe));const Ae=E?T(se,qe):v;return Ae.width=se,Ae.height=qe,Ae.getContext("2d").drawImage(b,0,0,se,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+se+"x"+qe+")."),Ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),b;return b}function x(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function U(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(b,E,K,ue,pe=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se=E;if(E===s.RED&&(K===s.FLOAT&&(se=s.R32F),K===s.HALF_FLOAT&&(se=s.R16F),K===s.UNSIGNED_BYTE&&(se=s.R8)),E===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(se=s.R8UI),K===s.UNSIGNED_SHORT&&(se=s.R16UI),K===s.UNSIGNED_INT&&(se=s.R32UI),K===s.BYTE&&(se=s.R8I),K===s.SHORT&&(se=s.R16I),K===s.INT&&(se=s.R32I)),E===s.RG&&(K===s.FLOAT&&(se=s.RG32F),K===s.HALF_FLOAT&&(se=s.RG16F),K===s.UNSIGNED_BYTE&&(se=s.RG8)),E===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(se=s.RG8UI),K===s.UNSIGNED_SHORT&&(se=s.RG16UI),K===s.UNSIGNED_INT&&(se=s.RG32UI),K===s.BYTE&&(se=s.RG8I),K===s.SHORT&&(se=s.RG16I),K===s.INT&&(se=s.RG32I)),E===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(se=s.RGB8UI),K===s.UNSIGNED_SHORT&&(se=s.RGB16UI),K===s.UNSIGNED_INT&&(se=s.RGB32UI),K===s.BYTE&&(se=s.RGB8I),K===s.SHORT&&(se=s.RGB16I),K===s.INT&&(se=s.RGB32I)),E===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(se=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(se=s.RGBA16UI),K===s.UNSIGNED_INT&&(se=s.RGBA32UI),K===s.BYTE&&(se=s.RGBA8I),K===s.SHORT&&(se=s.RGBA16I),K===s.INT&&(se=s.RGBA32I)),E===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),E===s.RGBA){const qe=pe?bl:Et.getTransfer(ue);K===s.FLOAT&&(se=s.RGBA32F),K===s.HALF_FLOAT&&(se=s.RGBA16F),K===s.UNSIGNED_BYTE&&(se=qe===Dt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function P(b,E){let K;return b?E===null||E===$r||E===ko?K=s.DEPTH24_STENCIL8:E===Oi?K=s.DEPTH32F_STENCIL8:E===Oo&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$r||E===ko?K=s.DEPTH_COMPONENT24:E===Oi?K=s.DEPTH_COMPONENT32F:E===Oo&&(K=s.DEPTH_COMPONENT16),K}function G(b,E){return x(b)===!0||b.isFramebufferTexture&&b.minFilter!==Tn&&b.minFilter!==mi?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function F(b){const E=b.target;E.removeEventListener("dispose",F),X(E),E.isVideoTexture&&_.delete(E)}function I(b){const E=b.target;E.removeEventListener("dispose",I),R(E)}function X(b){const E=r.get(b);if(E.__webglInit===void 0)return;const K=b.source,ue=S.get(K);if(ue){const pe=ue[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&C(b),Object.keys(ue).length===0&&S.delete(K)}r.remove(b)}function C(b){const E=r.get(b);s.deleteTexture(E.__webglTexture);const K=b.source,ue=S.get(K);delete ue[E.__cacheKey],c.memory.textures--}function R(b){const E=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let pe=0;pe<E.__webglFramebuffer[ue].length;pe++)s.deleteFramebuffer(E.__webglFramebuffer[ue][pe]);else s.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)s.deleteFramebuffer(E.__webglFramebuffer[ue]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=b.textures;for(let ue=0,pe=K.length;ue<pe;ue++){const se=r.get(K[ue]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),c.memory.textures--),r.remove(K[ue])}r.remove(b)}let z=0;function oe(){z=0}function Q(){const b=z;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),z+=1,b}function ce(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function de(b,E){const K=r.get(b);if(b.isVideoTexture&&Ze(b),b.isRenderTargetTexture===!1&&b.version>0&&K.__version!==b.version){const ue=b.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(K,b,E);return}}n.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+E)}function re(b,E){const K=r.get(b);if(b.version>0&&K.__version!==b.version){Ee(K,b,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+E)}function le(b,E){const K=r.get(b);if(b.version>0&&K.__version!==b.version){Ee(K,b,E);return}n.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+E)}function B(b,E){const K=r.get(b);if(b.version>0&&K.__version!==b.version){xe(K,b,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+E)}const ae={[Fo]:s.REPEAT,[jr]:s.CLAMP_TO_EDGE,[ff]:s.MIRRORED_REPEAT},J={[Tn]:s.NEAREST,[Jv]:s.NEAREST_MIPMAP_NEAREST,[tl]:s.NEAREST_MIPMAP_LINEAR,[mi]:s.LINEAR,[vc]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},N={[r0]:s.NEVER,[c0]:s.ALWAYS,[s0]:s.LESS,[Zm]:s.LEQUAL,[o0]:s.EQUAL,[u0]:s.GEQUAL,[a0]:s.GREATER,[l0]:s.NOTEQUAL};function ne(b,E){if(E.type===Oi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===mi||E.magFilter===vc||E.magFilter===tl||E.magFilter===Yr||E.minFilter===mi||E.minFilter===vc||E.minFilter===tl||E.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ae[E.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ae[E.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ae[E.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,J[E.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,J[E.minFilter]),E.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==tl&&E.minFilter!==Yr||E.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function De(b,E){let K=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",F));const ue=E.source;let pe=S.get(ue);pe===void 0&&(pe={},S.set(ue,pe));const se=ce(E);if(se!==b.__cacheKey){pe[se]===void 0&&(pe[se]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,K=!0),pe[se].usedTimes++;const qe=pe[b.__cacheKey];qe!==void 0&&(pe[b.__cacheKey].usedTimes--,qe.usedTimes===0&&C(E)),b.__cacheKey=se,b.__webglTexture=pe[se].texture}return K}function Z(b,E,K){return Math.floor(Math.floor(b/K)/E)}function fe(b,E,K,ue){const se=b.updateRanges;if(se.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,K,ue,E.data);else{se.sort((_e,Ie)=>_e.start-Ie.start);let qe=0;for(let _e=1;_e<se.length;_e++){const Ie=se[qe],nt=se[_e],Je=Ie.start+Ie.count,Re=Z(nt.start,E.width,4),st=Z(Ie.start,E.width,4);nt.start<=Je+1&&Re===st&&Z(nt.start+nt.count-1,E.width,4)===Re?Ie.count=Math.max(Ie.count,nt.start+nt.count-Ie.start):(++qe,se[qe]=nt)}se.length=qe+1;const Ae=s.getParameter(s.UNPACK_ROW_LENGTH),Be=s.getParameter(s.UNPACK_SKIP_PIXELS),$e=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let _e=0,Ie=se.length;_e<Ie;_e++){const nt=se[_e],Je=Math.floor(nt.start/4),Re=Math.ceil(nt.count/4),st=Je%E.width,H=Math.floor(Je/E.width),Pe=Re,ge=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),n.texSubImage2D(s.TEXTURE_2D,0,st,H,Pe,ge,K,ue,E.data)}b.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),s.pixelStorei(s.UNPACK_SKIP_ROWS,$e)}}function Ee(b,E,K){let ue=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=s.TEXTURE_3D);const pe=De(b,E),se=E.source;n.bindTexture(ue,b.__webglTexture,s.TEXTURE0+K);const qe=r.get(se);if(se.version!==qe.__version||pe===!0){n.activeTexture(s.TEXTURE0+K);const Ae=Et.getPrimaries(Et.workingColorSpace),Be=E.colorSpace===gr?null:Et.getPrimaries(E.colorSpace),$e=E.colorSpace===gr||Ae===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let _e=A(E.image,!1,a.maxTextureSize);_e=ot(E,_e);const Ie=u.convert(E.format,E.colorSpace),nt=u.convert(E.type);let Je=D(E.internalFormat,Ie,nt,E.colorSpace,E.isVideoTexture);ne(ue,E);let Re;const st=E.mipmaps,H=E.isVideoTexture!==!0,Pe=qe.__version===void 0||pe===!0,ge=se.dataReady,Ue=G(E,_e);if(E.isDepthTexture)Je=P(E.format===zo,E.type),Pe&&(H?n.texStorage2D(s.TEXTURE_2D,1,Je,_e.width,_e.height):n.texImage2D(s.TEXTURE_2D,0,Je,_e.width,_e.height,0,Ie,nt,null));else if(E.isDataTexture)if(st.length>0){H&&Pe&&n.texStorage2D(s.TEXTURE_2D,Ue,Je,st[0].width,st[0].height);for(let ye=0,he=st.length;ye<he;ye++)Re=st[ye],H?ge&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Re.width,Re.height,Ie,nt,Re.data):n.texImage2D(s.TEXTURE_2D,ye,Je,Re.width,Re.height,0,Ie,nt,Re.data);E.generateMipmaps=!1}else H?(Pe&&n.texStorage2D(s.TEXTURE_2D,Ue,Je,_e.width,_e.height),ge&&fe(E,_e,Ie,nt)):n.texImage2D(s.TEXTURE_2D,0,Je,_e.width,_e.height,0,Ie,nt,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&Pe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Je,st[0].width,st[0].height,_e.depth);for(let ye=0,he=st.length;ye<he;ye++)if(Re=st[ye],E.format!==ai)if(Ie!==null)if(H){if(ge)if(E.layerUpdates.size>0){const He=am(Re.width,Re.height,E.format,E.type);for(const lt of E.layerUpdates){const bt=Re.data.subarray(lt*He/Re.data.BYTES_PER_ELEMENT,(lt+1)*He/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,lt,Re.width,Re.height,1,Ie,bt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Re.width,Re.height,_e.depth,Ie,Re.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,Je,Re.width,Re.height,_e.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ge&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Re.width,Re.height,_e.depth,Ie,nt,Re.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ye,Je,Re.width,Re.height,_e.depth,0,Ie,nt,Re.data)}else{H&&Pe&&n.texStorage2D(s.TEXTURE_2D,Ue,Je,st[0].width,st[0].height);for(let ye=0,he=st.length;ye<he;ye++)Re=st[ye],E.format!==ai?Ie!==null?H?ge&&n.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,Re.width,Re.height,Ie,Re.data):n.compressedTexImage2D(s.TEXTURE_2D,ye,Je,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ge&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Re.width,Re.height,Ie,nt,Re.data):n.texImage2D(s.TEXTURE_2D,ye,Je,Re.width,Re.height,0,Ie,nt,Re.data)}else if(E.isDataArrayTexture)if(H){if(Pe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Je,_e.width,_e.height,_e.depth),ge)if(E.layerUpdates.size>0){const ye=am(_e.width,_e.height,E.format,E.type);for(const he of E.layerUpdates){const He=_e.data.subarray(he*ye/_e.data.BYTES_PER_ELEMENT,(he+1)*ye/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,Ie,nt,He)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ie,nt,_e.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,_e.width,_e.height,_e.depth,0,Ie,nt,_e.data);else if(E.isData3DTexture)H?(Pe&&n.texStorage3D(s.TEXTURE_3D,Ue,Je,_e.width,_e.height,_e.depth),ge&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ie,nt,_e.data)):n.texImage3D(s.TEXTURE_3D,0,Je,_e.width,_e.height,_e.depth,0,Ie,nt,_e.data);else if(E.isFramebufferTexture){if(Pe)if(H)n.texStorage2D(s.TEXTURE_2D,Ue,Je,_e.width,_e.height);else{let ye=_e.width,he=_e.height;for(let He=0;He<Ue;He++)n.texImage2D(s.TEXTURE_2D,He,Je,ye,he,0,Ie,nt,null),ye>>=1,he>>=1}}else if(st.length>0){if(H&&Pe){const ye=zt(st[0]);n.texStorage2D(s.TEXTURE_2D,Ue,Je,ye.width,ye.height)}for(let ye=0,he=st.length;ye<he;ye++)Re=st[ye],H?ge&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ie,nt,Re):n.texImage2D(s.TEXTURE_2D,ye,Je,Ie,nt,Re);E.generateMipmaps=!1}else if(H){if(Pe){const ye=zt(_e);n.texStorage2D(s.TEXTURE_2D,Ue,Je,ye.width,ye.height)}ge&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,nt,_e)}else n.texImage2D(s.TEXTURE_2D,0,Je,Ie,nt,_e);x(E)&&g(ue),qe.__version=se.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function xe(b,E,K){if(E.image.length!==6)return;const ue=De(b,E),pe=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+K);const se=r.get(pe);if(pe.version!==se.__version||ue===!0){n.activeTexture(s.TEXTURE0+K);const qe=Et.getPrimaries(Et.workingColorSpace),Ae=E.colorSpace===gr?null:Et.getPrimaries(E.colorSpace),Be=E.colorSpace===gr||qe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const $e=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let he=0;he<6;he++)!$e&&!_e?Ie[he]=A(E.image[he],!0,a.maxCubemapSize):Ie[he]=_e?E.image[he].image:E.image[he],Ie[he]=ot(E,Ie[he]);const nt=Ie[0],Je=u.convert(E.format,E.colorSpace),Re=u.convert(E.type),st=D(E.internalFormat,Je,Re,E.colorSpace),H=E.isVideoTexture!==!0,Pe=se.__version===void 0||ue===!0,ge=pe.dataReady;let Ue=G(E,nt);ne(s.TEXTURE_CUBE_MAP,E);let ye;if($e){H&&Pe&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,st,nt.width,nt.height);for(let he=0;he<6;he++){ye=Ie[he].mipmaps;for(let He=0;He<ye.length;He++){const lt=ye[He];E.format!==ai?Je!==null?H?ge&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,lt.width,lt.height,Je,lt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,st,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,lt.width,lt.height,Je,Re,lt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,st,lt.width,lt.height,0,Je,Re,lt.data)}}}else{if(ye=E.mipmaps,H&&Pe){ye.length>0&&Ue++;const he=zt(Ie[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,st,he.width,he.height)}for(let he=0;he<6;he++)if(_e){H?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ie[he].width,Ie[he].height,Je,Re,Ie[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,Ie[he].width,Ie[he].height,0,Je,Re,Ie[he].data);for(let He=0;He<ye.length;He++){const bt=ye[He].image[he].image;H?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,bt.width,bt.height,Je,Re,bt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,st,bt.width,bt.height,0,Je,Re,bt.data)}}else{H?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,Re,Ie[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,Je,Re,Ie[he]);for(let He=0;He<ye.length;He++){const lt=ye[He];H?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,Je,Re,lt.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,st,Je,Re,lt.image[he])}}}x(E)&&g(s.TEXTURE_CUBE_MAP),se.__version=pe.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function we(b,E,K,ue,pe,se){const qe=u.convert(K.format,K.colorSpace),Ae=u.convert(K.type),Be=D(K.internalFormat,qe,Ae,K.colorSpace),$e=r.get(E),_e=r.get(K);if(_e.__renderTarget=E,!$e.__hasExternalTextures){const Ie=Math.max(1,E.width>>se),nt=Math.max(1,E.height>>se);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?n.texImage3D(pe,se,Be,Ie,nt,E.depth,0,qe,Ae,null):n.texImage2D(pe,se,Be,Ie,nt,0,qe,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),gt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,pe,_e.__webglTexture,0,Xe(E)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,pe,_e.__webglTexture,se),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(b,E,K){if(s.bindRenderbuffer(s.RENDERBUFFER,b),E.depthBuffer){const ue=E.depthTexture,pe=ue&&ue.isDepthTexture?ue.type:null,se=P(E.stencilBuffer,pe),qe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=Xe(E);gt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,se,E.width,E.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,se,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,se,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,b)}else{const ue=E.textures;for(let pe=0;pe<ue.length;pe++){const se=ue[pe],qe=u.convert(se.format,se.colorSpace),Ae=u.convert(se.type),Be=D(se.internalFormat,qe,Ae,se.colorSpace),$e=Xe(E);K&&gt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Be,E.width,E.height):gt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,Be,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Be,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ze(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=r.get(E.depthTexture);ue.__renderTarget=E,(!ue.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de(E.depthTexture,0);const pe=ue.__webglTexture,se=Xe(E);if(E.depthTexture.format===Bo)gt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(E.depthTexture.format===zo)gt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Tt(b){const E=r.get(b),K=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const ue=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ue){const pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ue.removeEventListener("dispose",pe)};ue.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=ue}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const ue=b.texture.mipmaps;ue&&ue.length>0?ze(E.__webglFramebuffer[0],b):ze(E.__webglFramebuffer,b)}else if(K){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]===void 0)E.__webglDepthbuffer[ue]=s.createRenderbuffer(),Ye(E.__webglDepthbuffer[ue],b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,se)}}else{const ue=b.texture.mipmaps;if(ue&&ue.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ye(E.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,se)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(b,E,K){const ue=r.get(b);E!==void 0&&we(ue.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Tt(b)}function dt(b){const E=b.texture,K=r.get(b),ue=r.get(E);b.addEventListener("dispose",I);const pe=b.textures,se=b.isWebGLCubeRenderTarget===!0,qe=pe.length>1;if(qe||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=E.version,c.memory.textures++),se){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let Be=0;Be<E.mipmaps.length;Be++)K.__webglFramebuffer[Ae][Be]=s.createFramebuffer()}else K.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Ae=0,Be=pe.length;Ae<Be;Ae++){const $e=r.get(pe[Ae]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),c.memory.textures++)}if(b.samples>0&&gt(b)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ae=0;Ae<pe.length;Ae++){const Be=pe[Ae];K.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Ae]);const $e=u.convert(Be.format,Be.colorSpace),_e=u.convert(Be.type),Ie=D(Be.internalFormat,$e,_e,Be.colorSpace,b.isXRRenderTarget===!0),nt=Xe(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,Ie,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,K.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Ye(K.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){n.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Be=0;Be<E.mipmaps.length;Be++)we(K.__webglFramebuffer[Ae][Be],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Be);else we(K.__webglFramebuffer[Ae],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);x(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Ae=0,Be=pe.length;Ae<Be;Ae++){const $e=pe[Ae],_e=r.get($e);n.bindTexture(s.TEXTURE_2D,_e.__webglTexture),ne(s.TEXTURE_2D,$e),we(K.__webglFramebuffer,b,$e,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),x($e)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ae=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,ue.__webglTexture),ne(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Be=0;Be<E.mipmaps.length;Be++)we(K.__webglFramebuffer[Be],b,E,s.COLOR_ATTACHMENT0,Ae,Be);else we(K.__webglFramebuffer,b,E,s.COLOR_ATTACHMENT0,Ae,0);x(E)&&g(Ae),n.unbindTexture()}b.depthBuffer&&Tt(b)}function O(b){const E=b.textures;for(let K=0,ue=E.length;K<ue;K++){const pe=E[K];if(x(pe)){const se=U(b),qe=r.get(pe).__webglTexture;n.bindTexture(se,qe),g(se),n.unbindTexture()}}}const Jt=[],vt=[];function wt(b){if(b.samples>0){if(gt(b)===!1){const E=b.textures,K=b.width,ue=b.height;let pe=s.COLOR_BUFFER_BIT;const se=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(b),Ae=E.length>1;if(Ae)for(let $e=0;$e<E.length;$e++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Be=b.texture.mipmaps;Be&&Be.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let $e=0;$e<E.length;$e++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[$e]);const _e=r.get(E[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,K,ue,0,0,K,ue,pe,s.NEAREST),h===!0&&(Jt.length=0,vt.length=0,Jt.push(s.COLOR_ATTACHMENT0+$e),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Jt.push(se),vt.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Jt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let $e=0;$e<E.length;$e++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,qe.__webglColorRenderbuffer[$e]);const _e=r.get(E[$e]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,_e,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const E=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Xe(b){return Math.min(a.maxSamples,b.samples)}function gt(b){const E=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ze(b){const E=c.render.frame;_.get(b)!==E&&(_.set(b,E),b.update())}function ot(b,E){const K=b.colorSpace,ue=b.format,pe=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||K!==Ws&&K!==gr&&(Et.getTransfer(K)===Dt?(ue!==ai||pe!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}function zt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=oe,this.setTexture2D=de,this.setTexture2DArray=re,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Rt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=gt}function bE(s,e){function n(r,a=gr){let u;const c=Et.getTransfer(a);if(r===vi)return s.UNSIGNED_BYTE;if(r===Gf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Xm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Gm)return s.BYTE;if(r===Wm)return s.SHORT;if(r===Oo)return s.UNSIGNED_SHORT;if(r===Vf)return s.INT;if(r===$r)return s.UNSIGNED_INT;if(r===Oi)return s.FLOAT;if(r===Go)return s.HALF_FLOAT;if(r===jm)return s.ALPHA;if(r===Ym)return s.RGB;if(r===ai)return s.RGBA;if(r===Bo)return s.DEPTH_COMPONENT;if(r===zo)return s.DEPTH_STENCIL;if(r===qm)return s.RED;if(r===Xf)return s.RED_INTEGER;if(r===$m)return s.RG;if(r===jf)return s.RG_INTEGER;if(r===Yf)return s.RGBA_INTEGER;if(r===El||r===Tl||r===wl||r===Al)if(c===Dt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===El)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Tl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Al)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===El)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Tl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Al)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===df||r===hf||r===pf||r===mf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===df)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gf||r===_f||r===vf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===gf||r===_f)return c===Dt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===vf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xf||r===Sf||r===yf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===Pf||r===bf||r===Lf||r===Df)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===xf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ef)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Tf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Af)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Df)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rl||r===Uf||r===Nf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Rl)return c===Dt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Km||r===If||r===Ff||r===Of)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Rl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===If)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ff)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Of)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ko?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const LE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DE=`
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

}`;class UE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new wn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Sr({vertexShader:LE,fragmentShader:DE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gi(new Nl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NE extends js{constructor(e,n){super();const r=this;let a=null,u=1,c=null,d="local-floor",h=1,m=null,_=null,v=null,S=null,y=null,T=null;const A=new UE,x=n.getContextAttributes();let g=null,U=null;const D=[],P=[],G=new At;let F=null;const I=new Kn;I.viewport=new Wt;const X=new Kn;X.viewport=new Wt;const C=[I,X],R=new tx;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=D[Z];return fe===void 0&&(fe=new Hc,D[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=D[Z];return fe===void 0&&(fe=new Hc,D[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=D[Z];return fe===void 0&&(fe=new Hc,D[Z]=fe),fe.getHandSpace()};function Q(Z){const fe=P.indexOf(Z.inputSource);if(fe===-1)return;const Ee=D[fe];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,m||c),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ce(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",de);for(let Z=0;Z<D.length;Z++){const fe=P[Z];fe!==null&&(P[Z]=null,D[Z].disconnect(fe))}z=null,oe=null,A.reset(),e.setRenderTarget(g),y=null,S=null,v=null,a=null,U=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",de),x.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,xe=null,we=null;x.depth&&(we=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=x.stencil?zo:Bo,xe=x.stencil?ko:$r);const Ye={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:u};v=new XRWebGLBinding(a,n),S=v.createProjectionLayer(Ye),a.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),U=new Kr(S.textureWidth,S.textureHeight,{format:ai,type:vi,depthTexture:new ag(S.textureWidth,S.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ee={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,Ee),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Kr(y.framebufferWidth,y.framebufferHeight,{format:ai,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(d),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function de(Z){for(let fe=0;fe<Z.removed.length;fe++){const Ee=Z.removed[fe],xe=P.indexOf(Ee);xe>=0&&(P[xe]=null,D[xe].disconnect(Ee))}for(let fe=0;fe<Z.added.length;fe++){const Ee=Z.added[fe];let xe=P.indexOf(Ee);if(xe===-1){for(let Ye=0;Ye<D.length;Ye++)if(Ye>=P.length){P.push(Ee),xe=Ye;break}else if(P[Ye]===null){P[Ye]=Ee,xe=Ye;break}if(xe===-1)break}const we=D[xe];we&&we.connect(Ee)}}const re=new ie,le=new ie;function B(Z,fe,Ee){re.setFromMatrixPosition(fe.matrixWorld),le.setFromMatrixPosition(Ee.matrixWorld);const xe=re.distanceTo(le),we=fe.projectionMatrix.elements,Ye=Ee.projectionMatrix.elements,ze=we[14]/(we[10]-1),Tt=we[14]/(we[10]+1),Rt=(we[9]+1)/we[5],dt=(we[9]-1)/we[5],O=(we[8]-1)/we[0],Jt=(Ye[8]+1)/Ye[0],vt=ze*O,wt=ze*Jt,Xe=xe/(-O+Jt),gt=Xe*-O;if(fe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(gt),Z.translateZ(Xe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ze=ze+Xe,ot=Tt+Xe,zt=vt-gt,b=wt+(xe-gt),E=Rt*Tt/ot*Ze,K=dt*Tt/ot*Ze;Z.projectionMatrix.makePerspective(zt,b,E,K,Ze,ot),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let fe=Z.near,Ee=Z.far;A.texture!==null&&(A.depthNear>0&&(fe=A.depthNear),A.depthFar>0&&(Ee=A.depthFar)),R.near=X.near=I.near=fe,R.far=X.far=I.far=Ee,(z!==R.near||oe!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,oe=R.far),I.layers.mask=Z.layers.mask|2,X.layers.mask=Z.layers.mask|4,R.layers.mask=I.layers.mask|X.layers.mask;const xe=Z.parent,we=R.cameras;ae(R,xe);for(let Ye=0;Ye<we.length;Ye++)ae(we[Ye],xe);we.length===2?B(R,I,X):R.projectionMatrix.copy(I.projectionMatrix),J(Z,R,xe)};function J(Z,fe,Ee){Ee===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=kf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&y===null))return h},this.setFoveation=function(Z){h=Z,S!==null&&(S.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let N=null;function ne(Z,fe){if(_=fe.getViewerPose(m||c),T=fe,_!==null){const Ee=_.views;y!==null&&(e.setRenderTargetFramebuffer(U,y.framebuffer),e.setRenderTarget(U));let xe=!1;Ee.length!==R.cameras.length&&(R.cameras.length=0,xe=!0);for(let ze=0;ze<Ee.length;ze++){const Tt=Ee[ze];let Rt=null;if(y!==null)Rt=y.getViewport(Tt);else{const O=v.getViewSubImage(S,Tt);Rt=O.viewport,ze===0&&(e.setRenderTargetTextures(U,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(U))}let dt=C[ze];dt===void 0&&(dt=new Kn,dt.layers.enable(ze),dt.viewport=new Wt,C[ze]=dt),dt.matrix.fromArray(Tt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Tt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),ze===0&&(R.matrix.copy(dt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),xe===!0&&R.cameras.push(dt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const ze=v.getDepthInformation(Ee[0]);ze&&ze.isValid&&ze.texture&&A.init(e,ze,a.renderState)}}for(let Ee=0;Ee<D.length;Ee++){const xe=P[Ee],we=D[Ee];xe!==null&&we!==void 0&&we.update(xe,fe,m||c)}N&&N(Z,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),T=null}const De=new ug;De.setAnimationLoop(ne),this.setAnimationLoop=function(Z){N=Z},this.dispose=function(){}}}const zr=new zi,IE=new Xt;function FE(s,e){function n(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function r(x,g){g.color.getRGB(x.fogColor.value,rg(s)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function a(x,g,U,D,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(x,g):g.isMeshToonMaterial?(u(x,g),v(x,g)):g.isMeshPhongMaterial?(u(x,g),_(x,g)):g.isMeshStandardMaterial?(u(x,g),S(x,g),g.isMeshPhysicalMaterial&&y(x,g,P)):g.isMeshMatcapMaterial?(u(x,g),T(x,g)):g.isMeshDepthMaterial?u(x,g):g.isMeshDistanceMaterial?(u(x,g),A(x,g)):g.isMeshNormalMaterial?u(x,g):g.isLineBasicMaterial?(c(x,g),g.isLineDashedMaterial&&d(x,g)):g.isPointsMaterial?h(x,g,U,D):g.isSpriteMaterial?m(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,n(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,n(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Nn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,n(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Nn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,n(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,n(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const U=e.get(g),D=U.envMap,P=U.envMapRotation;D&&(x.envMap.value=D,zr.copy(P),zr.x*=-1,zr.y*=-1,zr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),x.envMapRotation.value.setFromMatrix4(IE.makeRotationFromEuler(zr)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,x.aoMapTransform))}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,n(g.map,x.mapTransform))}function d(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function h(x,g,U,D){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*U,x.scale.value=D*.5,g.map&&(x.map.value=g.map,n(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function m(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,n(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function _(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function v(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function S(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function y(x,g,U){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Nn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,g){g.matcap&&(x.matcap.value=g.matcap)}function A(x,g){const U=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function OE(s,e,n,r){let a={},u={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,D){const P=D.program;r.uniformBlockBinding(U,P)}function m(U,D){let P=a[U.id];P===void 0&&(T(U),P=_(U),a[U.id]=P,U.addEventListener("dispose",x));const G=D.program;r.updateUBOMapping(U,G);const F=e.render.frame;u[U.id]!==F&&(S(U),u[U.id]=F)}function _(U){const D=v();U.__bindingPointIndex=D;const P=s.createBuffer(),G=U.__size,F=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,G,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,P),P}function v(){for(let U=0;U<d;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const D=a[U.id],P=U.uniforms,G=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let F=0,I=P.length;F<I;F++){const X=Array.isArray(P[F])?P[F]:[P[F]];for(let C=0,R=X.length;C<R;C++){const z=X[C];if(y(z,F,C,G)===!0){const oe=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let de=0;de<Q.length;de++){const re=Q[de],le=A(re);typeof re=="number"||typeof re=="boolean"?(z.__data[0]=re,s.bufferSubData(s.UNIFORM_BUFFER,oe+ce,z.__data)):re.isMatrix3?(z.__data[0]=re.elements[0],z.__data[1]=re.elements[1],z.__data[2]=re.elements[2],z.__data[3]=0,z.__data[4]=re.elements[3],z.__data[5]=re.elements[4],z.__data[6]=re.elements[5],z.__data[7]=0,z.__data[8]=re.elements[6],z.__data[9]=re.elements[7],z.__data[10]=re.elements[8],z.__data[11]=0):(re.toArray(z.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(U,D,P,G){const F=U.value,I=D+"_"+P;if(G[I]===void 0)return typeof F=="number"||typeof F=="boolean"?G[I]=F:G[I]=F.clone(),!0;{const X=G[I];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return G[I]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function T(U){const D=U.uniforms;let P=0;const G=16;for(let I=0,X=D.length;I<X;I++){const C=Array.isArray(D[I])?D[I]:[D[I]];for(let R=0,z=C.length;R<z;R++){const oe=C[R],Q=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,de=Q.length;ce<de;ce++){const re=Q[ce],le=A(re),B=P%G,ae=B%le.boundary,J=B+ae;P+=ae,J!==0&&G-J<le.storage&&(P+=G-J),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=P,P+=le.storage}}}const F=P%G;return F>0&&(P+=G-F),U.__size=P,U.__cache={},this}function A(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function x(U){const D=U.target;D.removeEventListener("dispose",x);const P=c.indexOf(D.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete u[D.id]}function g(){for(const U in a)s.deleteBuffer(a[U]);c=[],a={},u={}}return{bind:h,update:m,dispose:g}}class kE{constructor(e={}){const{canvas:n=d0(),context:r=null,depth:a=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=c;const T=new Uint32Array(4),A=new Int32Array(4);let x=null,g=null;const U=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let G=!1;this._outputColorSpace=$n;let F=0,I=0,X=null,C=-1,R=null;const z=new Wt,oe=new Wt;let Q=null;const ce=new Pt(0);let de=0,re=n.width,le=n.height,B=1,ae=null,J=null;const N=new Wt(0,0,re,le),ne=new Wt(0,0,re,le);let De=!1;const Z=new Kf;let fe=!1,Ee=!1;const xe=new Xt,we=new Xt,Ye=new ie,ze=new Wt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function dt(){return X===null?B:1}let O=r;function Jt(w,W){return n.getContext(w,W)}try{const w={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hf}`),n.addEventListener("webglcontextlost",Ue,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",he,!1),O===null){const W="webgl2";if(O=Jt(W,w),O===null)throw Jt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let vt,wt,Xe,gt,Ze,ot,zt,b,E,K,ue,pe,se,qe,Ae,Be,$e,_e,Ie,nt,Je,Re,st,H;function Pe(){vt=new qy(O),vt.init(),Re=new bE(O,vt),wt=new Hy(O,vt,e,Re),Xe=new CE(O,vt),wt.reverseDepthBuffer&&S&&Xe.buffers.depth.setReversed(!0),gt=new Zy(O),Ze=new mE,ot=new PE(O,vt,Xe,Ze,wt,Re,gt),zt=new Gy(P),b=new Yy(P),E=new ix(O),st=new By(O,E),K=new $y(O,E,gt,st),ue=new Jy(O,K,E,gt),Ie=new Qy(O,wt,ot),Be=new Vy(Ze),pe=new pE(P,zt,b,vt,wt,st,Be),se=new FE(P,Ze),qe=new _E,Ae=new EE(vt),_e=new ky(P,zt,b,Xe,ue,y,h),$e=new AE(P,ue,wt),H=new OE(O,gt,wt,Xe),nt=new zy(O,vt,gt),Je=new Ky(O,vt,gt),gt.programs=pe.programs,P.capabilities=wt,P.extensions=vt,P.properties=Ze,P.renderLists=qe,P.shadowMap=$e,P.state=Xe,P.info=gt}Pe();const ge=new NE(P,O);this.xr=ge,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(re,le,!1))},this.getSize=function(w){return w.set(re,le)},this.setSize=function(w,W,te=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=w,le=W,n.width=Math.floor(w*B),n.height=Math.floor(W*B),te===!0&&(n.style.width=w+"px",n.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(re*B,le*B).floor()},this.setDrawingBufferSize=function(w,W,te){re=w,le=W,B=te,n.width=Math.floor(w*te),n.height=Math.floor(W*te),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,W,te,q){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,W,te,q),Xe.viewport(z.copy(N).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,W,te,q){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,W,te,q),Xe.scissor(oe.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(w){Xe.setScissorTest(De=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,te=!0){let q=0;if(w){let j=!1;if(X!==null){const Me=X.texture.format;j=Me===Yf||Me===jf||Me===Xf}if(j){const Me=X.texture.type,be=Me===vi||Me===$r||Me===Oo||Me===ko||Me===Gf||Me===Wf,Oe=_e.getClearColor(),Fe=_e.getClearAlpha(),rt=Oe.r,it=Oe.g,Ve=Oe.b;be?(T[0]=rt,T[1]=it,T[2]=Ve,T[3]=Fe,O.clearBufferuiv(O.COLOR,0,T)):(A[0]=rt,A[1]=it,A[2]=Ve,A[3]=Fe,O.clearBufferiv(O.COLOR,0,A))}else q|=O.COLOR_BUFFER_BIT}W&&(q|=O.DEPTH_BUFFER_BIT),te&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ue,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",he,!1),_e.dispose(),qe.dispose(),Ae.dispose(),Ze.dispose(),zt.dispose(),b.dispose(),ue.dispose(),st.dispose(),H.dispose(),pe.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Qr),ge.removeEventListener("sessionend",Hi),xi.stop()};function Ue(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const w=gt.autoReset,W=$e.enabled,te=$e.autoUpdate,q=$e.needsUpdate,j=$e.type;Pe(),gt.autoReset=w,$e.enabled=W,$e.autoUpdate=te,$e.needsUpdate=q,$e.type=j}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function He(w){const W=w.target;W.removeEventListener("dispose",He),lt(W)}function lt(w){bt(w),Ze.remove(w)}function bt(w){const W=Ze.get(w).programs;W!==void 0&&(W.forEach(function(te){pe.releaseProgram(te)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,te,q,j,Me){W===null&&(W=Tt);const be=j.isMesh&&j.matrixWorld.determinant()<0,Oe=$o(w,W,te,q,j);Xe.setMaterial(q,be);let Fe=te.index,rt=1;if(q.wireframe===!0){if(Fe=K.getWireframeAttribute(te),Fe===void 0)return;rt=2}const it=te.drawRange,Ve=te.attributes.position;let ht=it.start*rt,ct=(it.start+it.count)*rt;Me!==null&&(ht=Math.max(ht,Me.start*rt),ct=Math.min(ct,(Me.start+Me.count)*rt)),Fe!==null?(ht=Math.max(ht,0),ct=Math.min(ct,Fe.count)):Ve!=null&&(ht=Math.max(ht,0),ct=Math.min(ct,Ve.count));const kt=ct-ht;if(kt<0||kt===1/0)return;st.setup(j,q,Oe,te,Fe);let Ut,Ct=nt;if(Fe!==null&&(Ut=E.get(Fe),Ct=Je,Ct.setIndex(Ut)),j.isMesh)q.wireframe===!0?(Xe.setLineWidth(q.wireframeLinewidth*dt()),Ct.setMode(O.LINES)):Ct.setMode(O.TRIANGLES);else if(j.isLine){let Qe=q.linewidth;Qe===void 0&&(Qe=1),Xe.setLineWidth(Qe*dt()),j.isLineSegments?Ct.setMode(O.LINES):j.isLineLoop?Ct.setMode(O.LINE_LOOP):Ct.setMode(O.LINE_STRIP)}else j.isPoints?Ct.setMode(O.POINTS):j.isSprite&&Ct.setMode(O.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Qe=j._multiDrawStarts,Lt=j._multiDrawCounts,pt=j._multiDrawCount,en=Fe?E.get(Fe).bytesPerElement:1,Gi=Ze.get(q).currentProgram.getUniforms();for(let Sn=0;Sn<pt;Sn++)Gi.setValue(O,"_gl_DrawID",Sn),Ct.render(Qe[Sn]/en,Lt[Sn])}else if(j.isInstancedMesh)Ct.renderInstances(ht,kt,j.count);else if(te.isInstancedBufferGeometry){const Qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Lt=Math.min(te.instanceCount,Qe);Ct.renderInstances(ht,kt,Lt)}else Ct.render(ht,kt)};function xt(w,W,te){w.transparent===!0&&w.side===Fi&&w.forceSinglePass===!1?(w.side=Nn,w.needsUpdate=!0,Jr(w,W,te),w.side=xr,w.needsUpdate=!0,Jr(w,W,te),w.side=Fi):Jr(w,W,te)}this.compile=function(w,W,te=null){te===null&&(te=w),g=Ae.get(te),g.init(W),D.push(g),te.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),w!==te&&w.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const q=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Me=j.material;if(Me)if(Array.isArray(Me))for(let be=0;be<Me.length;be++){const Oe=Me[be];xt(Oe,te,j),q.add(Oe)}else xt(Me,te,j),q.add(Me)}),g=D.pop(),q},this.compileAsync=function(w,W,te=null){const q=this.compile(w,W,te);return new Promise(j=>{function Me(){if(q.forEach(function(be){Ze.get(be).currentProgram.isReady()&&q.delete(be)}),q.size===0){j(w);return}setTimeout(Me,10)}vt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let An=null;function xn(w){An&&An(w)}function Qr(){xi.stop()}function Hi(){xi.start()}const xi=new ug;xi.setAnimationLoop(xn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(w){An=w,ge.setAnimationLoop(w),w===null?xi.stop():xi.start()},ge.addEventListener("sessionstart",Qr),ge.addEventListener("sessionend",Hi),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(W),W=ge.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,W,X),g=Ae.get(w,D.length),g.init(W),D.push(g),we.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,fe=Be.init(this.clippingPlanes,Ee),x=qe.get(w,U.length),x.init(),U.push(x),ge.enabled===!0&&ge.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&Si(Me,W,-1/0,P.sortObjects)}Si(w,W,0,P.sortObjects),x.finish(),P.sortObjects===!0&&x.sort(ae,J),Rt=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,Rt&&_e.addToRenderList(x,w),this.info.render.frame++,fe===!0&&Be.beginShadows();const te=g.state.shadowsArray;$e.render(te,w,W),fe===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,j=x.transmissive;if(g.setupLights(),W.isArrayCamera){const Me=W.cameras;if(j.length>0)for(let be=0,Oe=Me.length;be<Oe;be++){const Fe=Me[be];Mr(q,j,w,Fe)}Rt&&_e.render(w);for(let be=0,Oe=Me.length;be<Oe;be++){const Fe=Me[be];yr(x,w,Fe,Fe.viewport)}}else j.length>0&&Mr(q,j,w,W),Rt&&_e.render(w),yr(x,w,W);X!==null&&I===0&&(ot.updateMultisampleRenderTarget(X),ot.updateRenderTargetMipmap(X)),w.isScene===!0&&w.onAfterRender(P,w,W),st.resetDefaultState(),C=-1,R=null,D.pop(),D.length>0?(g=D[D.length-1],fe===!0&&Be.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,U.pop(),U.length>0?x=U[U.length-1]:x=null};function Si(w,W,te,q){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)te=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){q&&ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const be=ue.update(w),Oe=w.material;Oe.visible&&x.push(w,be,Oe,te,ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const be=ue.update(w),Oe=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ze.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ze.copy(be.boundingSphere.center)),ze.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Oe)){const Fe=be.groups;for(let rt=0,it=Fe.length;rt<it;rt++){const Ve=Fe[rt],ht=Oe[Ve.materialIndex];ht&&ht.visible&&x.push(w,be,ht,te,ze.z,Ve)}}else Oe.visible&&x.push(w,be,Oe,te,ze.z,null)}}const Me=w.children;for(let be=0,Oe=Me.length;be<Oe;be++)Si(Me[be],W,te,q)}function yr(w,W,te,q){const j=w.opaque,Me=w.transmissive,be=w.transparent;g.setupLightsView(te),fe===!0&&Be.setGlobalState(P.clippingPlanes,te),q&&Xe.viewport(z.copy(q)),j.length>0&&Vi(j,W,te),Me.length>0&&Vi(Me,W,te),be.length>0&&Vi(be,W,te),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Mr(w,W,te,q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new Kr(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Go:vi,minFilter:Yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Me=g.state.transmissionRenderTarget[q.id],be=q.viewport||z;Me.setSize(be.z*P.transmissionResolutionScale,be.w*P.transmissionResolutionScale);const Oe=P.getRenderTarget(),Fe=P.getActiveCubeFace(),rt=P.getActiveMipmapLevel();P.setRenderTarget(Me),P.getClearColor(ce),de=P.getClearAlpha(),de<1&&P.setClearColor(16777215,.5),P.clear(),Rt&&_e.render(te);const it=P.toneMapping;P.toneMapping=vr;const Ve=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),fe===!0&&Be.setGlobalState(P.clippingPlanes,q),Vi(w,te,q),ot.updateMultisampleRenderTarget(Me),ot.updateRenderTargetMipmap(Me),vt.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let ct=0,kt=W.length;ct<kt;ct++){const Ut=W[ct],Ct=Ut.object,Qe=Ut.geometry,Lt=Ut.material,pt=Ut.group;if(Lt.side===Fi&&Ct.layers.test(q.layers)){const en=Lt.side;Lt.side=Nn,Lt.needsUpdate=!0,Yo(Ct,te,q,Qe,Lt,pt),Lt.side=en,Lt.needsUpdate=!0,ht=!0}}ht===!0&&(ot.updateMultisampleRenderTarget(Me),ot.updateRenderTargetMipmap(Me))}P.setRenderTarget(Oe,Fe,rt),P.setClearColor(ce,de),Ve!==void 0&&(q.viewport=Ve),P.toneMapping=it}function Vi(w,W,te){const q=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Me=w.length;j<Me;j++){const be=w[j],Oe=be.object,Fe=be.geometry,rt=be.group;let it=be.material;it.allowOverride===!0&&q!==null&&(it=q),Oe.layers.test(te.layers)&&Yo(Oe,W,te,Fe,it,rt)}}function Yo(w,W,te,q,j,Me){w.onBeforeRender(P,W,te,q,j,Me),w.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(P,W,te,q,w,Me),j.transparent===!0&&j.side===Fi&&j.forceSinglePass===!1?(j.side=Nn,j.needsUpdate=!0,P.renderBufferDirect(te,W,q,j,w,Me),j.side=xr,j.needsUpdate=!0,P.renderBufferDirect(te,W,q,j,w,Me),j.side=Fi):P.renderBufferDirect(te,W,q,j,w,Me),w.onAfterRender(P,W,te,q,j,Me)}function Jr(w,W,te){W.isScene!==!0&&(W=Tt);const q=Ze.get(w),j=g.state.lights,Me=g.state.shadowsArray,be=j.state.version,Oe=pe.getParameters(w,j.state,Me,W,te),Fe=pe.getProgramCacheKey(Oe);let rt=q.programs;q.environment=w.isMeshStandardMaterial?W.environment:null,q.fog=W.fog,q.envMap=(w.isMeshStandardMaterial?b:zt).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,rt===void 0&&(w.addEventListener("dispose",He),rt=new Map,q.programs=rt);let it=rt.get(Fe);if(it!==void 0){if(q.currentProgram===it&&q.lightsStateVersion===be)return li(w,Oe),it}else Oe.uniforms=pe.getUniforms(w),w.onBeforeCompile(Oe,P),it=pe.acquireProgram(Oe,Fe),rt.set(Fe,it),q.uniforms=Oe.uniforms;const Ve=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ve.clippingPlanes=Be.uniform),li(w,Oe),q.needsLights=Fl(w),q.lightsStateVersion=be,q.needsLights&&(Ve.ambientLightColor.value=j.state.ambient,Ve.lightProbe.value=j.state.probe,Ve.directionalLights.value=j.state.directional,Ve.directionalLightShadows.value=j.state.directionalShadow,Ve.spotLights.value=j.state.spot,Ve.spotLightShadows.value=j.state.spotShadow,Ve.rectAreaLights.value=j.state.rectArea,Ve.ltc_1.value=j.state.rectAreaLTC1,Ve.ltc_2.value=j.state.rectAreaLTC2,Ve.pointLights.value=j.state.point,Ve.pointLightShadows.value=j.state.pointShadow,Ve.hemisphereLights.value=j.state.hemi,Ve.directionalShadowMap.value=j.state.directionalShadowMap,Ve.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ve.spotShadowMap.value=j.state.spotShadowMap,Ve.spotLightMatrix.value=j.state.spotLightMatrix,Ve.spotLightMap.value=j.state.spotLightMap,Ve.pointShadowMap.value=j.state.pointShadowMap,Ve.pointShadowMatrix.value=j.state.pointShadowMatrix),q.currentProgram=it,q.uniformsList=null,it}function qo(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Cl.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function li(w,W){const te=Ze.get(w);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function $o(w,W,te,q,j){W.isScene!==!0&&(W=Tt),ot.resetTextureUnits();const Me=W.fog,be=q.isMeshStandardMaterial?W.environment:null,Oe=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ws,Fe=(q.isMeshStandardMaterial?b:zt).get(q.envMap||be),rt=q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!te.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ve=!!te.morphAttributes.position,ht=!!te.morphAttributes.normal,ct=!!te.morphAttributes.color;let kt=vr;q.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(kt=P.toneMapping);const Ut=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ct=Ut!==void 0?Ut.length:0,Qe=Ze.get(q),Lt=g.state.lights;if(fe===!0&&(Ee===!0||w!==R)){const ln=w===R&&q.id===C;Be.setState(q,w,ln)}let pt=!1;q.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Lt.state.version||Qe.outputColorSpace!==Oe||j.isBatchedMesh&&Qe.batching===!1||!j.isBatchedMesh&&Qe.batching===!0||j.isBatchedMesh&&Qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Qe.instancing===!1||!j.isInstancedMesh&&Qe.instancing===!0||j.isSkinnedMesh&&Qe.skinning===!1||!j.isSkinnedMesh&&Qe.skinning===!0||j.isInstancedMesh&&Qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Qe.instancingMorph===!1&&j.morphTexture!==null||Qe.envMap!==Fe||q.fog===!0&&Qe.fog!==Me||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Be.numPlanes||Qe.numIntersection!==Be.numIntersection)||Qe.vertexAlphas!==rt||Qe.vertexTangents!==it||Qe.morphTargets!==Ve||Qe.morphNormals!==ht||Qe.morphColors!==ct||Qe.toneMapping!==kt||Qe.morphTargetsCount!==Ct)&&(pt=!0):(pt=!0,Qe.__version=q.version);let en=Qe.currentProgram;pt===!0&&(en=Jr(q,W,j));let Gi=!1,Sn=!1,yi=!1;const Nt=en.getUniforms(),fn=Qe.uniforms;if(Xe.useProgram(en.program)&&(Gi=!0,Sn=!0,yi=!0),q.id!==C&&(C=q.id,Sn=!0),Gi||R!==w){Xe.buffers.depth.getReversed()?(xe.copy(w.projectionMatrix),p0(xe),m0(xe),Nt.setValue(O,"projectionMatrix",xe)):Nt.setValue(O,"projectionMatrix",w.projectionMatrix),Nt.setValue(O,"viewMatrix",w.matrixWorldInverse);const nn=Nt.map.cameraPosition;nn!==void 0&&nn.setValue(O,Ye.setFromMatrixPosition(w.matrixWorld)),wt.logarithmicDepthBuffer&&Nt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Nt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,Sn=!0,yi=!0)}if(j.isSkinnedMesh){Nt.setOptional(O,j,"bindMatrix"),Nt.setOptional(O,j,"bindMatrixInverse");const ln=j.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Nt.setValue(O,"boneTexture",ln.boneTexture,ot))}j.isBatchedMesh&&(Nt.setOptional(O,j,"batchingTexture"),Nt.setValue(O,"batchingTexture",j._matricesTexture,ot),Nt.setOptional(O,j,"batchingIdTexture"),Nt.setValue(O,"batchingIdTexture",j._indirectTexture,ot),Nt.setOptional(O,j,"batchingColorTexture"),j._colorsTexture!==null&&Nt.setValue(O,"batchingColorTexture",j._colorsTexture,ot));const tn=te.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Ie.update(j,te,en),(Sn||Qe.receiveShadow!==j.receiveShadow)&&(Qe.receiveShadow=j.receiveShadow,Nt.setValue(O,"receiveShadow",j.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(fn.envMap.value=Fe,fn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&W.environment!==null&&(fn.envMapIntensity.value=W.environmentIntensity),Sn&&(Nt.setValue(O,"toneMappingExposure",P.toneMappingExposure),Qe.needsLights&&Ko(fn,yi),Me&&q.fog===!0&&se.refreshFogUniforms(fn,Me),se.refreshMaterialUniforms(fn,q,B,le,g.state.transmissionRenderTarget[w.id]),Cl.upload(O,qo(Qe),fn,ot)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Cl.upload(O,qo(Qe),fn,ot),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Nt.setValue(O,"center",j.center),Nt.setValue(O,"modelViewMatrix",j.modelViewMatrix),Nt.setValue(O,"normalMatrix",j.normalMatrix),Nt.setValue(O,"modelMatrix",j.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const ln=q.uniformsGroups;for(let nn=0,St=ln.length;nn<St;nn++){const ui=ln[nn];H.update(ui,en),H.bind(ui,en)}}return en}function Ko(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Fl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,W,te){const q=Ze.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ze.get(w.texture).__webglTexture=W,Ze.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:te,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const te=Ze.get(w);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0};const Zo=O.createFramebuffer();this.setRenderTarget=function(w,W=0,te=0){X=w,F=W,I=te;let q=!0,j=null,Me=!1,be=!1;if(w){const Fe=Ze.get(w);if(Fe.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(Fe.__webglFramebuffer===void 0)ot.setupRenderTarget(w);else if(Fe.__hasExternalTextures)ot.rebindTextures(w,Ze.get(w.texture).__webglTexture,Ze.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ve=w.depthTexture;if(Fe.__boundDepthTexture!==Ve){if(Ve!==null&&Ze.has(Ve)&&(w.width!==Ve.image.width||w.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(w)}}const rt=w.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(be=!0);const it=Ze.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(it[W])?j=it[W][te]:j=it[W],Me=!0):w.samples>0&&ot.useMultisampledRTT(w)===!1?j=Ze.get(w).__webglMultisampledFramebuffer:Array.isArray(it)?j=it[te]:j=it,z.copy(w.viewport),oe.copy(w.scissor),Q=w.scissorTest}else z.copy(N).multiplyScalar(B).floor(),oe.copy(ne).multiplyScalar(B).floor(),Q=De;if(te!==0&&(j=Zo),Xe.bindFramebuffer(O.FRAMEBUFFER,j)&&q&&Xe.drawBuffers(w,j),Xe.viewport(z),Xe.scissor(oe),Xe.setScissorTest(Q),Me){const Fe=Ze.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,te)}else if(be){const Fe=Ze.get(w.texture),rt=W;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.__webglTexture,te,rt)}else if(w!==null&&te!==0){const Fe=Ze.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Fe.__webglTexture,te)}C=-1},this.readRenderTargetPixels=function(w,W,te,q,j,Me,be,Oe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ze.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe){Xe.bindFramebuffer(O.FRAMEBUFFER,Fe);try{const rt=w.textures[Oe],it=rt.format,Ve=rt.type;if(!wt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-q&&te>=0&&te<=w.height-j&&(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Oe),O.readPixels(W,te,q,j,Re.convert(it),Re.convert(Ve),Me))}finally{const rt=X!==null?Ze.get(X).__webglFramebuffer:null;Xe.bindFramebuffer(O.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(w,W,te,q,j,Me,be,Oe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ze.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe)if(W>=0&&W<=w.width-q&&te>=0&&te<=w.height-j){Xe.bindFramebuffer(O.FRAMEBUFFER,Fe);const rt=w.textures[Oe],it=rt.format,Ve=rt.type;if(!wt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ht),O.bufferData(O.PIXEL_PACK_BUFFER,Me.byteLength,O.STREAM_READ),w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Oe),O.readPixels(W,te,q,j,Re.convert(it),Re.convert(Ve),0);const ct=X!==null?Ze.get(X).__webglFramebuffer:null;Xe.bindFramebuffer(O.FRAMEBUFFER,ct);const kt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await h0(O,kt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ht),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Me),O.deleteBuffer(ht),O.deleteSync(kt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,te=0){const q=Math.pow(2,-te),j=Math.floor(w.image.width*q),Me=Math.floor(w.image.height*q),be=W!==null?W.x:0,Oe=W!==null?W.y:0;ot.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,te,0,0,be,Oe,j,Me),Xe.unbindTexture()};const Qo=O.createFramebuffer(),Jo=O.createFramebuffer();this.copyTextureToTexture=function(w,W,te=null,q=null,j=0,Me=null){Me===null&&(j!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=j,j=0):Me=0);let be,Oe,Fe,rt,it,Ve,ht,ct,kt;const Ut=w.isCompressedTexture?w.mipmaps[Me]:w.image;if(te!==null)be=te.max.x-te.min.x,Oe=te.max.y-te.min.y,Fe=te.isBox3?te.max.z-te.min.z:1,rt=te.min.x,it=te.min.y,Ve=te.isBox3?te.min.z:0;else{const tn=Math.pow(2,-j);be=Math.floor(Ut.width*tn),Oe=Math.floor(Ut.height*tn),w.isDataArrayTexture?Fe=Ut.depth:w.isData3DTexture?Fe=Math.floor(Ut.depth*tn):Fe=1,rt=0,it=0,Ve=0}q!==null?(ht=q.x,ct=q.y,kt=q.z):(ht=0,ct=0,kt=0);const Ct=Re.convert(W.format),Qe=Re.convert(W.type);let Lt;W.isData3DTexture?(ot.setTexture3D(W,0),Lt=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ot.setTexture2DArray(W,0),Lt=O.TEXTURE_2D_ARRAY):(ot.setTexture2D(W,0),Lt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const pt=O.getParameter(O.UNPACK_ROW_LENGTH),en=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Gi=O.getParameter(O.UNPACK_SKIP_PIXELS),Sn=O.getParameter(O.UNPACK_SKIP_ROWS),yi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ut.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ut.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,rt),O.pixelStorei(O.UNPACK_SKIP_ROWS,it),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ve);const Nt=w.isDataArrayTexture||w.isData3DTexture,fn=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const tn=Ze.get(w),ln=Ze.get(W),nn=Ze.get(tn.__renderTarget),St=Ze.get(ln.__renderTarget);Xe.bindFramebuffer(O.READ_FRAMEBUFFER,nn.__webglFramebuffer),Xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ui=0;ui<Fe;ui++)Nt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ze.get(w).__webglTexture,j,Ve+ui),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ze.get(W).__webglTexture,Me,kt+ui)),O.blitFramebuffer(rt,it,be,Oe,ht,ct,be,Oe,O.DEPTH_BUFFER_BIT,O.NEAREST);Xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||Ze.has(w)){const tn=Ze.get(w),ln=Ze.get(W);Xe.bindFramebuffer(O.READ_FRAMEBUFFER,Qo),Xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Jo);for(let nn=0;nn<Fe;nn++)Nt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tn.__webglTexture,j,Ve+nn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tn.__webglTexture,j),fn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ln.__webglTexture,Me,kt+nn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ln.__webglTexture,Me),j!==0?O.blitFramebuffer(rt,it,be,Oe,ht,ct,be,Oe,O.COLOR_BUFFER_BIT,O.NEAREST):fn?O.copyTexSubImage3D(Lt,Me,ht,ct,kt+nn,rt,it,be,Oe):O.copyTexSubImage2D(Lt,Me,ht,ct,rt,it,be,Oe);Xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else fn?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Lt,Me,ht,ct,kt,be,Oe,Fe,Ct,Qe,Ut.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Lt,Me,ht,ct,kt,be,Oe,Fe,Ct,Ut.data):O.texSubImage3D(Lt,Me,ht,ct,kt,be,Oe,Fe,Ct,Qe,Ut):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Me,ht,ct,be,Oe,Ct,Qe,Ut.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Me,ht,ct,Ut.width,Ut.height,Ct,Ut.data):O.texSubImage2D(O.TEXTURE_2D,Me,ht,ct,be,Oe,Ct,Qe,Ut);O.pixelStorei(O.UNPACK_ROW_LENGTH,pt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,en),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Gi),O.pixelStorei(O.UNPACK_SKIP_ROWS,Sn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,yi),Me===0&&W.generateMipmaps&&O.generateMipmap(Lt),Xe.unbindTexture()},this.copyTextureToTexture3D=function(w,W,te=null,q=null,j=0){return Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,W,te,q,j)},this.initRenderTarget=function(w){Ze.get(w).__webglFramebuffer===void 0&&ot.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ot.setTextureCube(w,0):w.isData3DTexture?ot.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ot.setTexture2DArray(w,0):ot.setTexture2D(w,0),Xe.unbindTexture()},this.resetState=function(){F=0,I=0,X=null,Xe.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}function BE(s,e){const{armL:n,armR:r,legL:a,legR:u,armLOL:c,armROL:d,legLOL:h,legROL:m}=e;if(!(!n||!r||!a||!u)){if([n,r,a,u,c,d,h,m].forEach(_=>_?.rotation.set(0,0,0)),n.position.set(-6,12,0),r.position.set(6,12,0),a.position.set(-2,0,0),u.position.set(2,0,0),c?.position.set(-6,12,0),d?.position.set(6,12,0),h?.position.set(-2,0,0),m?.position.set(2,0,0),s==="tpose"){const _=Math.PI/2;n.rotation.z=_,r.rotation.z=-_,c?.rotation.set(0,0,_),d?.rotation.set(0,0,-_)}else if(s==="walking"){const _=-Math.PI/4,v=Math.PI/4;n.rotation.x=_,n.position.z=3,r.rotation.x=v,r.position.z=-3,a.rotation.x=v,a.position.set(a.position.x,1,-4),u.rotation.x=_,u.position.set(u.position.x,1,4),c&&(c.rotation.x=_,c.position.z=3),d&&(d.rotation.x=v,d.position.z=-3),h&&(h.rotation.x=v,h.position.set(h.position.x,1,-4)),m&&(m.rotation.x=_,m.position.set(m.position.x,1,4))}}}const Ml=64;function qn(s,e,n,r,a,u,c,d,h={}){const{transparent:m=!1,expand:_=0}=h,v=new Ys(e+_,n+_,r+_),S=[new mr({transparent:m}),new mr({transparent:m}),new mr({transparent:m}),new mr({transparent:m}),new mr({transparent:m}),new mr({transparent:m})],y=(A,x)=>{const g=s.clone();g.magFilter=Tn,g.minFilter=Tn,g.wrapS=Fo,g.wrapT=Fo,g.repeat.set((x[2]-x[0])/Ml,(x[3]-x[1])/Ml),g.offset.set(x[0]/Ml,1-x[3]/Ml),g.needsUpdate=!0,A.map=g};y(S[0],d.right),y(S[1],d.left),y(S[2],d.top),y(S[3],d.bottom),y(S[4],d.front),y(S[5],d.back);const T=new gi(v,S);return T.position.set(a,u,c),T}const zE={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},HE={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},pg={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[48,20,44,32],back:[56,20,52,32]},mg={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[8,20,4,32],back:[16,20,12,32]},VE={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},GE={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},gg={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[48,36,44,48],back:[56,36,52,48]},_g={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[8,36,4,48],back:[16,36,12,48]},WE={...pg},XE={...mg},jE={...gg},YE={..._g};function qE({texture:s,pose:e="default",showOverlay:n=!0,bottomOffset:r=0}){const a=Ke.useRef(null),u=Ke.useRef(),c=Ke.useRef(),d=Ke.useRef(0),[h,m]=Ke.useState(0),_=Ke.useRef(null),v=Ke.useRef(null),S=Ke.useRef(null),y=Ke.useRef(null),T=Ke.useRef(null),A=Ke.useRef(null),x=Ke.useRef(null),g=Ke.useRef(null),U=Ke.useRef(null),D=Ke.useRef(null),P=[U,D,T,A,x,g],G=Ke.useCallback(F=>{BE(F,{armL:_.current,armR:v.current,legL:S.current,legR:y.current,armLOL:T.current,armROL:A.current,legLOL:x.current,legROL:g.current})},[]);return Ke.useEffect(()=>{const F=a.current;if(!F)return;const I=F.clientWidth,X=F.clientHeight,C=new kE({antialias:!0,alpha:!0});C.setClearColor(0,0),C.setSize(I,X),F.appendChild(C.domElement),u.current=C;const R=new Kn(52,I/X,.1,1e3);R.position.z=40,c.current=R;const z=new H0,oe=new ex(16777215,1);oe.position.set(10,10,10),z.add(oe);const Q=new No;Q.position.y=-10,Q.rotation.y=d.current,z.add(Q);const ce=new K0,de=s??"/textures/steve.png";ce.load(de,J=>{J.magFilter=Tn,J.minFilter=Tn;const N=qn(J,8,8,8,0,22,0,zE),ne=qn(J,8,12,4,0,12,0,HE),De=qn(J,4,12,4,-6,12,0,WE),Z=qn(J,4,12,4,6,12,0,pg),fe=qn(J,4,12,4,-2,0,0,XE),Ee=qn(J,4,12,4,2,0,0,mg);_.current=De,v.current=Z,S.current=fe,y.current=Ee;const xe=qn(J,8,8,8,0,22,0,VE,{transparent:!0,expand:.5}),we=qn(J,8,12,4,0,12,0,GE,{transparent:!0,expand:.5}),Ye=qn(J,4,12,4,-6,12,0,jE,{transparent:!0,expand:.5}),ze=qn(J,4,12,4,6,12,0,gg,{transparent:!0,expand:.5}),Tt=qn(J,4,12,4,-2,0,0,YE,{transparent:!0,expand:.5}),Rt=qn(J,4,12,4,2,0,0,_g,{transparent:!0,expand:.5});U.current=xe,D.current=we,T.current=Ye,A.current=ze,x.current=Tt,g.current=Rt,Q.add(N,ne,De,Z,fe,Ee,xe,we,Ye,ze,Tt,Rt),P.forEach(dt=>{dt.current&&(dt.current.visible=n)}),G(e)});let re;const le=()=>{re=requestAnimationFrame(le),Q.rotation.y+=.01,C.render(z,R)};le();const B=()=>{if(F&&u.current&&c.current){const J=F.clientWidth,N=F.clientHeight;u.current.setSize(J,N),c.current.aspect=J/N,c.current.updateProjectionMatrix()}},ae=new ResizeObserver(B);return ae.observe(F),window.addEventListener("resize",B),B(),()=>{window.removeEventListener("resize",B),ae.disconnect(),cancelAnimationFrame(re),d.current=Q.rotation.y,C.dispose(),C.domElement.parentNode&&C.domElement.parentNode.removeChild(C.domElement),F.innerHTML=""}},[s,G]),Ke.useEffect(()=>{G(e)},[e,G]),Ke.useEffect(()=>{P.forEach(F=>{F.current&&(F.current.visible=n)})},[n]),Ke.useEffect(()=>{const F=()=>{const I=a.current?.getBoundingClientRect();if(I){const X=window.innerHeight-I.top-r;m(X>0?X:0)}};return F(),window.addEventListener("resize",F),()=>window.removeEventListener("resize",F)},[r]),Ce.jsx("div",{ref:a,style:{width:"100%",minHeight:"200px",height:h?`${h}px`:"100%",position:"relative"}})}function $E({texture:s,footerHeight:e}){const[n,r]=Ke.useState("default"),[a,u]=Ke.useState(!0),[c,d]=Ke.useState(0),h=Ke.useRef(null),m=()=>{r(S=>S==="default"?"tpose":S==="tpose"?"walking":"default")},_=()=>{u(S=>!S)},v=()=>{if(!s)return;const S=document.createElement("a");S.href=s,S.download="skin.png",S.click()};return Ke.useEffect(()=>{const S=()=>{const y=h.current?.offsetHeight??0;d(y+e)};return S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[e]),Ce.jsxs("section",{className:"mb-4 md:mb-0 md:flex md:flex-col md:h-full p-4",children:[Ce.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[Ce.jsx("i",{className:"fas fa-eye mr-2 text-green-700"})," Preview"]}),Ce.jsx("div",{className:"bg-gray-800 shadow-lg overflow-hidden pixel-border flex-grow h-full max-h-[70dvh] md:max-h-full",children:Ce.jsx("div",{className:"flex justify-center items-center model-placeholder",children:Ce.jsx(qE,{texture:s,pose:n,showOverlay:a,bottomOffset:c})})}),Ce.jsxs("div",{ref:h,className:"mt-4 grid grid-cols-3 gap-2",children:[Ce.jsxs("button",{className:"pixel-button bg-gray-200 hover:bg-gray-300 p-2 pixel-border transition-colors flex items-center justify-center","aria-label":"Change character pose",onClick:m,children:[Ce.jsx("i",{className:"fas fa-arrows-rotate mr-2"}),"Change Pose"]}),Ce.jsxs("button",{className:"pixel-button bg-gray-200 hover:bg-gray-300 p-2 pixel-border transition-colors flex items-center justify-center","aria-label":a?"Hide overlay":"Show overlay",onClick:_,children:[Ce.jsx("i",{className:"fas fa-layer-group mr-2"}),a?"Hide":"Show"," Overlay"]}),Ce.jsxs("button",{className:"pixel-button bg-gray-200 hover:bg-gray-300 p-2 pixel-border transition-colors flex items-center justify-center","aria-label":"Download character skin",onClick:v,children:[Ce.jsx("i",{className:"fas fa-download mr-2"}),"Download"]})]})]})}const KE=Vo.memo(({selectedRace:s,onChange:e,hideLabel:n=!1,className:r})=>{const a=Ke.useCallback(u=>{e?.(u)},[e]);return Ce.jsxs("div",{className:r??"mb-4",role:"group","aria-label":"Select Race",children:[!n&&Ce.jsx("h3",{className:"mb-2 font-semibold",children:"Race"}),Ce.jsx("div",{className:"grid grid-cols-3 gap-2",children:Bm.map(u=>{const c=s===u;return Ce.jsx("button",{type:"button",className:`px-2 py-1 border rounded hover:bg-gray-200${c?" bg-blue-500 text-white":""}`,"aria-pressed":c,onClick:()=>a(u),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),a(u))},children:u},u)})})]})});function ZE({colors:s,selectedColor:e,onChange:n,hideLabel:r=!1,className:a}){return Ce.jsxs("div",{className:a??"mb-4",children:[!r&&Ce.jsx("h3",{className:"mb-2 font-semibold",children:"Skin Color"}),Ce.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(u=>Ce.jsx("button",{type:"button",className:`w-8 h-8 rounded-full border hover:scale-110 transition${e===u?" ring-2 ring-blue-500":""}`,style:{backgroundColor:u},"aria-label":`Kolor skóry ${u}`,onClick:()=>n?.(u)},u))})]})}const vg=["None","Duck"],QE={None:null,Duck:"/textures/hat/duck.png"},JE=Vo.memo(({selectedHat:s,onChange:e,hideLabel:n=!1,className:r})=>{const a=Ke.useCallback(u=>{e?.(u)},[e]);return Ce.jsxs("div",{className:r??"mb-4",role:"group","aria-label":"Select Hat",children:[!n&&Ce.jsx("h3",{className:"mb-2 font-semibold",children:"Hat"}),Ce.jsx("div",{className:"grid grid-cols-3 gap-2",children:vg.map(u=>{const c=s===u;return Ce.jsx("button",{type:"button",className:`px-2 py-1 border rounded hover:bg-gray-200${c?" bg-blue-500 text-white":""}`,"aria-pressed":c,onClick:()=>a(u),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),a(u))},children:u},u)})})]})});function xg(){return Ce.jsx("div",{children:xg.name})}function Sg(){return Ce.jsx("div",{children:Sg.name})}function eT({skinColors:s,selectedSkinColor:e,selectedRace:n,selectedHat:r,onRaceChange:a,onSkinColorChange:u,onHatChange:c}){return Ce.jsxs("section",{className:"overflow-visible md:overflow-y-scroll mb-4 md:mb-0 md:flex md:flex-col md:h-full p-4 customization-panel",children:[Ce.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[Ce.jsx("i",{className:"fas fa-sliders mr-2 text-green-700"})," Customization"]}),Ce.jsxs("div",{className:"space-y-2 options-container",children:[Ce.jsxs("div",{className:"option-card bg-white rounded-lg shadow p-4 pixel-border relative",children:[Ce.jsxs("h3",{className:"font-medium text-gray-700 mb-2 flex items-center absolute -top-3 left-4 px-2 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]",children:[Ce.jsx("i",{className:"fas fa-user-tag mr-2 text-amber-600"})," Character Race"]}),Ce.jsx(KE,{selectedRace:n,onChange:a,hideLabel:!0,className:"mt-4"})]}),Ce.jsxs("div",{className:"option-card bg-white rounded-lg shadow p-4 pixel-border relative",children:[Ce.jsxs("h3",{className:"font-medium text-gray-700 mb-2 flex items-center absolute -top-3 left-4 px-2 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]",children:[Ce.jsx("i",{className:"fas fa-palette mr-2 text-amber-600"})," Skin Color"]}),Ce.jsx(ZE,{colors:s,selectedColor:e,onChange:u,hideLabel:!0,className:"mt-4"})]}),Ce.jsxs("div",{className:"option-card bg-white rounded-lg shadow p-4 pixel-border relative",children:[Ce.jsxs("h3",{className:"font-medium text-gray-700 mb-2 flex items-center absolute -top-3 left-4 px-2 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]",children:[Ce.jsx("i",{className:"fas fa-tshirt mr-2 text-amber-600"})," Hat"]}),Ce.jsx(JE,{selectedHat:r,onChange:c,hideLabel:!0,className:"mt-4"})]}),Ce.jsxs("div",{className:"option-card bg-white rounded-lg shadow p-4 pixel-border relative",children:[Ce.jsxs("h3",{className:"font-medium text-gray-700 mb-2 flex items-center absolute -top-3 left-4 px-2 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]",children:[Ce.jsx("i",{className:"fas fa-eye mr-2 text-amber-600"})," Eyes"]}),Ce.jsxs("div",{className:"mt-4",children:[Ce.jsx(xg,{}),Ce.jsx(Sg,{})]})]})]})]})}const tT=["race","hat"],Uo={Human:["#D5BAAA","#E0AC69","#C68642"],Zombie:["#556B2F"],Template:["#FFFFFF"]},nT={Human:"/textures/race/human.png",Zombie:"/textures/race/zombie.png",Template:"/textures/race/template.png"};async function iT(s){const e=s.filter(u=>!!u);if(e.length===0)return"";const n=await Promise.all(e.map(u=>new Promise((c,d)=>{const h=new Image;h.crossOrigin="anonymous",h.onload=()=>c(h),h.onerror=d,h.src=u}))),r=document.createElement("canvas");r.width=n[0].width,r.height=n[0].height;const a=r.getContext("2d");return a?(n.forEach(u=>{a.drawImage(u,0,0)}),r.toDataURL()):""}const rT=Vo.forwardRef((s,e)=>Ce.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:Ce.jsxs("div",{className:"container mx-auto text-center text-sm",children:[Ce.jsx("p",{children:"© 2025 SkinCrafter. All rights reserved."}),Ce.jsxs("div",{className:"flex justify-center space-x-4 mt-2",children:[Ce.jsx("a",{href:"#",className:"hover:text-amber-400 transition-colors",children:"Terms"}),Ce.jsx("a",{href:"#",className:"hover:text-amber-400 transition-colors",children:"Privacy"}),Ce.jsx("a",{href:"#",className:"hover:text-amber-400 transition-colors",children:"Contact"})]})]})})),sT=()=>{const[s,e]=Ke.useState("Human"),[n,r]=Ke.useState(Uo.Human[0]),[a,u]=Ke.useState("None"),c=tT,[d,h]=Ke.useState(null),m=Ke.useRef(null),[_,v]=Ke.useState(0);Ke.useEffect(()=>{const x=localStorage.getItem("wardrobeRace");let g="Human";x&&Bm.includes(x)&&(g=x,e(g));const U=localStorage.getItem("wardrobeSkinColor");U&&Uo[g].includes(U)?r(U):r(Uo[g][0]);const D=localStorage.getItem("wardrobeHat");D&&vg.includes(D)&&u(D)},[]);const S=Ke.useMemo(()=>Uo[s],[s]),y=Ke.useCallback(x=>{e(x),r(Uo[x][0])},[]),T=Ke.useCallback(x=>{r(x)},[]),A=Ke.useCallback(x=>{u(x)},[]);return Ke.useEffect(()=>{localStorage.setItem("wardrobeRace",s)},[s]),Ke.useEffect(()=>{localStorage.setItem("wardrobeSkinColor",n)},[n]),Ke.useEffect(()=>{localStorage.setItem("wardrobeHat",a)},[a]),Ke.useEffect(()=>{const x=()=>{v(m.current?.offsetHeight??0)};return x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),Ke.useEffect(()=>{const x=[];c.forEach(g=>{g==="race"?x.push(nT[s]):g==="hat"&&x.push(QE[a])}),iT(x).then(g=>h(g))},[s,a]),Ce.jsxs("div",{className:"max-w-full min-h-dvh md:h-screen overflow-x-visible overflow-y-auto flex flex-col",children:[Ce.jsx(Mv,{}),Ce.jsxs("div",{className:"flex-1 flex flex-col md:flex-row",children:[Ce.jsx("div",{className:"flex-1 w-full md:w-1/2",children:Ce.jsx($E,{texture:d,footerHeight:_})}),Ce.jsx("div",{className:"flex-1 w-full md:w-1/2",children:Ce.jsx(eT,{skinColors:S,selectedSkinColor:n,selectedRace:s,selectedHat:a,onRaceChange:y,onSkinColorChange:T,onHatChange:A})})]}),Ce.jsx(rT,{ref:m})]})};uv.createRoot(document.getElementById("root")).render(Ce.jsx(Vo.StrictMode,{children:Ce.jsx(yv,{children:Ce.jsx(sT,{})})}));
