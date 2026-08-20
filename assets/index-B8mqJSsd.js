(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function ev(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qc={exports:{}},Yo={},ef={exports:{}},vt={};var Em;function K0(){if(Em)return vt;Em=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function _(N,ie,Oe){this.props=N,this.context=ie,this.refs=M,this.updater=Oe||S}_.prototype.isReactComponent={},_.prototype.setState=function(N,ie){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ie,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=_.prototype;function L(N,ie,Oe){this.props=N,this.context=ie,this.refs=M,this.updater=Oe||S}var b=L.prototype=new y;b.constructor=L,E(b,_.prototype),b.isPureReactComponent=!0;var R=Array.isArray,H=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function W(N,ie,Oe){var ee,fe={},Re=null,Ee=null;if(ie!=null)for(ee in ie.ref!==void 0&&(Ee=ie.ref),ie.key!==void 0&&(Re=""+ie.key),ie)H.call(ie,ee)&&!F.hasOwnProperty(ee)&&(fe[ee]=ie[ee]);var Ae=arguments.length-2;if(Ae===1)fe.children=Oe;else if(1<Ae){for(var Ke=Array(Ae),Ve=0;Ve<Ae;Ve++)Ke[Ve]=arguments[Ve+2];fe.children=Ke}if(N&&N.defaultProps)for(ee in Ae=N.defaultProps,Ae)fe[ee]===void 0&&(fe[ee]=Ae[ee]);return{$$typeof:r,type:N,key:Re,ref:Ee,props:fe,_owner:I.current}}function P(N,ie){return{$$typeof:r,type:N.type,key:ie,ref:N.ref,props:N.props,_owner:N._owner}}function A(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function B(N){var ie={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Oe){return ie[Oe]})}var ue=/\/+/g;function Q(N,ie){return typeof N=="object"&&N!==null&&N.key!=null?B(""+N.key):ie.toString(36)}function ae(N,ie,Oe,ee,fe){var Re=typeof N;(Re==="undefined"||Re==="boolean")&&(N=null);var Ee=!1;if(N===null)Ee=!0;else switch(Re){case"string":case"number":Ee=!0;break;case"object":switch(N.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=N,fe=fe(Ee),N=ee===""?"."+Q(Ee,0):ee,R(fe)?(Oe="",N!=null&&(Oe=N.replace(ue,"$&/")+"/"),ae(fe,ie,Oe,"",function(Ve){return Ve})):fe!=null&&(A(fe)&&(fe=P(fe,Oe+(!fe.key||Ee&&Ee.key===fe.key?"":(""+fe.key).replace(ue,"$&/")+"/")+N)),ie.push(fe)),1;if(Ee=0,ee=ee===""?".":ee+":",R(N))for(var Ae=0;Ae<N.length;Ae++){Re=N[Ae];var Ke=ee+Q(Re,Ae);Ee+=ae(Re,ie,Oe,Ke,fe)}else if(Ke=x(N),typeof Ke=="function")for(N=Ke.call(N),Ae=0;!(Re=N.next()).done;)Re=Re.value,Ke=ee+Q(Re,Ae++),Ee+=ae(Re,ie,Oe,Ke,fe);else if(Re==="object")throw ie=String(N),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return Ee}function me(N,ie,Oe){if(N==null)return N;var ee=[],fe=0;return ae(N,ee,"","",function(Re){return ie.call(Oe,Re,fe++)}),ee}function te(N){if(N._status===-1){var ie=N._result;ie=ie(),ie.then(function(Oe){(N._status===0||N._status===-1)&&(N._status=1,N._result=Oe)},function(Oe){(N._status===0||N._status===-1)&&(N._status=2,N._result=Oe)}),N._status===-1&&(N._status=0,N._result=ie)}if(N._status===1)return N._result.default;throw N._result}var ve={current:null},V={transition:null},le={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:V,ReactCurrentOwner:I};function oe(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:me,forEach:function(N,ie,Oe){me(N,function(){ie.apply(this,arguments)},Oe)},count:function(N){var ie=0;return me(N,function(){ie++}),ie},toArray:function(N){return me(N,function(ie){return ie})||[]},only:function(N){if(!A(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},vt.Component=_,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=L,vt.StrictMode=s,vt.Suspense=d,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,vt.act=oe,vt.cloneElement=function(N,ie,Oe){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var ee=E({},N.props),fe=N.key,Re=N.ref,Ee=N._owner;if(ie!=null){if(ie.ref!==void 0&&(Re=ie.ref,Ee=I.current),ie.key!==void 0&&(fe=""+ie.key),N.type&&N.type.defaultProps)var Ae=N.type.defaultProps;for(Ke in ie)H.call(ie,Ke)&&!F.hasOwnProperty(Ke)&&(ee[Ke]=ie[Ke]===void 0&&Ae!==void 0?Ae[Ke]:ie[Ke])}var Ke=arguments.length-2;if(Ke===1)ee.children=Oe;else if(1<Ke){Ae=Array(Ke);for(var Ve=0;Ve<Ke;Ve++)Ae[Ve]=arguments[Ve+2];ee.children=Ae}return{$$typeof:r,type:N.type,key:fe,ref:Re,props:ee,_owner:Ee}},vt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},vt.createElement=W,vt.createFactory=function(N){var ie=W.bind(null,N);return ie.type=N,ie},vt.createRef=function(){return{current:null}},vt.forwardRef=function(N){return{$$typeof:f,render:N}},vt.isValidElement=A,vt.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:te}},vt.memo=function(N,ie){return{$$typeof:p,type:N,compare:ie===void 0?null:ie}},vt.startTransition=function(N){var ie=V.transition;V.transition={};try{N()}finally{V.transition=ie}},vt.unstable_act=oe,vt.useCallback=function(N,ie){return ve.current.useCallback(N,ie)},vt.useContext=function(N){return ve.current.useContext(N)},vt.useDebugValue=function(){},vt.useDeferredValue=function(N){return ve.current.useDeferredValue(N)},vt.useEffect=function(N,ie){return ve.current.useEffect(N,ie)},vt.useId=function(){return ve.current.useId()},vt.useImperativeHandle=function(N,ie,Oe){return ve.current.useImperativeHandle(N,ie,Oe)},vt.useInsertionEffect=function(N,ie){return ve.current.useInsertionEffect(N,ie)},vt.useLayoutEffect=function(N,ie){return ve.current.useLayoutEffect(N,ie)},vt.useMemo=function(N,ie){return ve.current.useMemo(N,ie)},vt.useReducer=function(N,ie,Oe){return ve.current.useReducer(N,ie,Oe)},vt.useRef=function(N){return ve.current.useRef(N)},vt.useState=function(N){return ve.current.useState(N)},vt.useSyncExternalStore=function(N,ie,Oe){return ve.current.useSyncExternalStore(N,ie,Oe)},vt.useTransition=function(){return ve.current.useTransition()},vt.version="18.3.1",vt}var Mm;function Ld(){return Mm||(Mm=1,ef.exports=K0()),ef.exports}var wm;function Z0(){if(wm)return Yo;wm=1;var r=Ld(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,p){var m,v={},x=null,S=null;p!==void 0&&(x=""+p),d.key!==void 0&&(x=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)s.call(d,m)&&!l.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:x,ref:S,props:v,_owner:o.current}}return Yo.Fragment=t,Yo.jsx=c,Yo.jsxs=c,Yo}var Tm;function J0(){return Tm||(Tm=1,Qc.exports=Z0()),Qc.exports}var $=J0(),X=Ld();const tv=ev(X);var bl={},tf={exports:{}},In={},nf={exports:{}},rf={};var Rm;function Q0(){return Rm||(Rm=1,(function(r){function e(V,le){var oe=V.length;V.push(le);e:for(;0<oe;){var N=oe-1>>>1,ie=V[N];if(0<o(ie,le))V[N]=le,V[oe]=ie,oe=N;else break e}}function t(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var le=V[0],oe=V.pop();if(oe!==le){V[0]=oe;e:for(var N=0,ie=V.length,Oe=ie>>>1;N<Oe;){var ee=2*(N+1)-1,fe=V[ee],Re=ee+1,Ee=V[Re];if(0>o(fe,oe))Re<ie&&0>o(Ee,fe)?(V[N]=Ee,V[Re]=oe,N=Re):(V[N]=fe,V[ee]=oe,N=ee);else if(Re<ie&&0>o(Ee,oe))V[N]=Ee,V[Re]=oe,N=Re;else break e}}return le}function o(V,le){var oe=V.sortIndex-le.sortIndex;return oe!==0?oe:V.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var d=[],p=[],m=1,v=null,x=3,S=!1,E=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(V){for(var le=t(p);le!==null;){if(le.callback===null)s(p);else if(le.startTime<=V)s(p),le.sortIndex=le.expirationTime,e(d,le);else break;le=t(p)}}function R(V){if(M=!1,b(V),!E)if(t(d)!==null)E=!0,te(H);else{var le=t(p);le!==null&&ve(R,le.startTime-V)}}function H(V,le){E=!1,M&&(M=!1,y(W),W=-1),S=!0;var oe=x;try{for(b(le),v=t(d);v!==null&&(!(v.expirationTime>le)||V&&!B());){var N=v.callback;if(typeof N=="function"){v.callback=null,x=v.priorityLevel;var ie=N(v.expirationTime<=le);le=r.unstable_now(),typeof ie=="function"?v.callback=ie:v===t(d)&&s(d),b(le)}else s(d);v=t(d)}if(v!==null)var Oe=!0;else{var ee=t(p);ee!==null&&ve(R,ee.startTime-le),Oe=!1}return Oe}finally{v=null,x=oe,S=!1}}var I=!1,F=null,W=-1,P=5,A=-1;function B(){return!(r.unstable_now()-A<P)}function ue(){if(F!==null){var V=r.unstable_now();A=V;var le=!0;try{le=F(!0,V)}finally{le?Q():(I=!1,F=null)}}else I=!1}var Q;if(typeof L=="function")Q=function(){L(ue)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,me=ae.port2;ae.port1.onmessage=ue,Q=function(){me.postMessage(null)}}else Q=function(){_(ue,0)};function te(V){F=V,I||(I=!0,Q())}function ve(V,le){W=_(function(){V(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,te(H))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(d)},r.unstable_next=function(V){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var oe=x;x=le;try{return V()}finally{x=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,le){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var oe=x;x=V;try{return le()}finally{x=oe}},r.unstable_scheduleCallback=function(V,le,oe){var N=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?N+oe:N):oe=N,V){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=oe+ie,V={id:m++,callback:le,priorityLevel:V,startTime:oe,expirationTime:ie,sortIndex:-1},oe>N?(V.sortIndex=oe,e(p,V),t(d)===null&&V===t(p)&&(M?(y(W),W=-1):M=!0,ve(R,oe-N))):(V.sortIndex=ie,e(d,V),E||S||(E=!0,te(H))),V},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(V){var le=x;return function(){var oe=x;x=le;try{return V.apply(this,arguments)}finally{x=oe}}}})(rf)),rf}var Am;function ex(){return Am||(Am=1,nf.exports=Q0()),nf.exports}var Cm;function tx(){if(Cm)return In;Cm=1;var r=Ld(),e=ex();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function x(n){return d.call(v,n)?!0:d.call(m,n)?!1:p.test(n)?v[n]=!0:(m[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(n,i,a,u,h,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new M(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,L);_[i]=new M(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,L);_[i]=new M(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,L);_[i]=new M(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,a,u){var h=_.hasOwnProperty(i)?_[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,u)&&(a=null),u||h===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,u=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),V=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,N;function ie(n){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Oe=!1;function ee(n,i){if(!n||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var u=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){u=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){u=ne}n()}}catch(ne){if(ne&&u&&typeof ne.stack=="string"){for(var h=ne.stack.split(`
`),g=u.stack.split(`
`),w=h.length-1,U=g.length-1;1<=w&&0<=U&&h[w]!==g[U];)U--;for(;1<=w&&0<=U;w--,U--)if(h[w]!==g[U]){if(w!==1||U!==1)do if(w--,U--,0>U||h[w]!==g[U]){var z=`
`+h[w].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=w&&0<=U);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ie(n):""}function fe(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=ee(n.type,!1),n;case 11:return n=ee(n.type.render,!1),n;case 1:return n=ee(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case I:return"Portal";case P:return"Profiler";case W:return"StrictMode";case Q:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case ue:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case me:return i=n.displayName||null,i!==null?i:Re(n.type)||"Memo";case te:i=n._payload,n=n._init;try{return Re(n(i))}catch{}}return null}function Ee(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(n){var i=Ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(w){u=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Mt(n){n._valueTracker||(n._valueTracker=Ve(n))}function Rt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ke(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function k(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Wt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function xt(n,i){pt(n,i);var a=Ae(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ft(n,i.type,a):i.hasOwnProperty("defaultValue")&&ft(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ge(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ft(n,i,a){(i!=="number"||ct(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var qe=Array.isArray;function tt(n,i,a,u){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function It(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(qe(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ae(a)}}function T(n,i){var a=Ae(i.value),u=Ae(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function J(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ce,je=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function be(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(n){$e.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ke[i]=ke[n]})});function _e(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ke.hasOwnProperty(n)&&ke[n]?(""+i).trim():i+"px"}function Ne(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=_e(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,h):n[a]=h}}var nt=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(n,i){if(i){if(nt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Le(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function O(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Te=null,pe=null,Pe=null;function ye(n){if(n=Uo(n)){if(typeof Te!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Wa(i),Te(n.stateNode,n.type,i))}}function he(n){pe?Pe?Pe.push(n):Pe=[n]:pe=n}function Ie(){if(pe){var n=pe,i=Pe;if(Pe=pe=null,ye(n),i)for(n=0;n<i.length;n++)ye(i[n])}}function et(n,i){return n(i)}function Pt(){}var yt=!1;function bn(n,i,a){if(yt)return n(i,a);yt=!0;try{return et(n,i,a)}finally{yt=!1,(pe!==null||Pe!==null)&&(Pt(),Ie())}}function Sn(n,i){var a=n.stateNode;if(a===null)return null;var u=Wa(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ds=!1;if(f)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){ds=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{ds=!1}function Ti(n,i,a,u,h,g,w,U,z){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(a,ne)}catch(Se){this.onError(Se)}}var Ri=!1,Nr=null,Ir=!1,Qi=null,Ea={onError:function(n){Ri=!0,Nr=n}};function hs(n,i,a,u,h,g,w,U,z){Ri=!1,Nr=null,Ti.apply(Ea,arguments)}function Ma(n,i,a,u,h,g,w,U,z){if(hs.apply(this,arguments),Ri){if(Ri){var ne=Nr;Ri=!1,Nr=null}else throw Error(t(198));Ir||(Ir=!0,Qi=ne)}}function hi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function wa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ta(n){if(hi(n)!==n)throw Error(t(188))}function Eu(n){var i=n.alternate;if(!i){if(i=hi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Ta(h),n;if(g===u)return Ta(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=h,u=g;else{for(var w=!1,U=h.child;U;){if(U===a){w=!0,a=h,u=g;break}if(U===u){w=!0,u=h,a=g;break}U=U.sibling}if(!w){for(U=g.child;U;){if(U===a){w=!0,a=g,u=h;break}if(U===u){w=!0,u=g,a=h;break}U=U.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ra(n){return n=Eu(n),n!==null?Aa(n):null}function Aa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Aa(n);if(i!==null)return i;n=n.sibling}return null}var Ca=e.unstable_scheduleCallback,C=e.unstable_cancelCallback,j=e.unstable_shouldYield,re=e.unstable_requestPaint,K=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,we=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,Be=e.unstable_LowPriority,at=e.unstable_IdlePriority,ot=null,We=null;function mt(n){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(ot,n,void 0,(n.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Ct,Bt=Math.log,Ut=Math.LN2;function Ct(n){return n>>>=0,n===0?32:31-(Bt(n)/Ut|0)|0}var Qe=64,Lt=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tn(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var U=w&~h;U!==0?u=gt(U):(g&=w,g!==0&&(u=gt(g)))}else w=a&~h,w!==0?u=gt(w):g!==0&&(u=gt(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-dt(i),h=1<<a,u|=n[a],i&=~h;return u}function er(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-dt(g),U=1<<w,z=h[w];z===-1?((U&a)===0||(U&u)!==0)&&(h[w]=er(U,i)):z<=i&&(n.expiredLanes|=U),g&=~U}}function Ai(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nt(){var n=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),n}function hn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function nn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-dt(i),n[i]=a}function un(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-dt(a),g=1<<h;i[h]=0,u[h]=-1,n[h]=-1,a&=~g}}function rn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-dt(a),h=1<<u;h&i|n[u]&i&&(n[u]|=i),a&=~h}}var St=0;function pi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var th,Mu,nh,ih,rh,wu=!1,ba=[],tr=null,nr=null,ir=null,vo=new Map,_o=new Map,rr=[],__="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sh(n,i){switch(n){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(i.pointerId)}}function xo(n,i,a,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Uo(i),i!==null&&Mu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function x_(n,i,a,u,h){switch(i){case"focusin":return tr=xo(tr,n,i,a,u,h),!0;case"dragenter":return nr=xo(nr,n,i,a,u,h),!0;case"mouseover":return ir=xo(ir,n,i,a,u,h),!0;case"pointerover":var g=h.pointerId;return vo.set(g,xo(vo.get(g)||null,n,i,a,u,h)),!0;case"gotpointercapture":return g=h.pointerId,_o.set(g,xo(_o.get(g)||null,n,i,a,u,h)),!0}return!1}function oh(n){var i=Fr(n.target);if(i!==null){var a=hi(i);if(a!==null){if(i=a.tag,i===13){if(i=wa(a),i!==null){n.blockedOn=i,rh(n.priority,function(){nh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ru(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);st=u,a.target.dispatchEvent(u),st=null}else return i=Uo(a),i!==null&&Mu(i),n.blockedOn=a,!1;i.shift()}return!0}function ah(n,i,a){Pa(n)&&a.delete(i)}function y_(){wu=!1,tr!==null&&Pa(tr)&&(tr=null),nr!==null&&Pa(nr)&&(nr=null),ir!==null&&Pa(ir)&&(ir=null),vo.forEach(ah),_o.forEach(ah)}function yo(n,i){n.blockedOn===i&&(n.blockedOn=null,wu||(wu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,y_)))}function So(n){function i(h){return yo(h,n)}if(0<ba.length){yo(ba[0],n);for(var a=1;a<ba.length;a++){var u=ba[a];u.blockedOn===n&&(u.blockedOn=null)}}for(tr!==null&&yo(tr,n),nr!==null&&yo(nr,n),ir!==null&&yo(ir,n),vo.forEach(i),_o.forEach(i),a=0;a<rr.length;a++)u=rr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<rr.length&&(a=rr[0],a.blockedOn===null);)oh(a),a.blockedOn===null&&rr.shift()}var ps=R.ReactCurrentBatchConfig,La=!0;function S_(n,i,a,u){var h=St,g=ps.transition;ps.transition=null;try{St=1,Tu(n,i,a,u)}finally{St=h,ps.transition=g}}function E_(n,i,a,u){var h=St,g=ps.transition;ps.transition=null;try{St=4,Tu(n,i,a,u)}finally{St=h,ps.transition=g}}function Tu(n,i,a,u){if(La){var h=Ru(n,i,a,u);if(h===null)Gu(n,i,u,Da,a),sh(n,u);else if(x_(h,n,i,a,u))u.stopPropagation();else if(sh(n,u),i&4&&-1<__.indexOf(n)){for(;h!==null;){var g=Uo(h);if(g!==null&&th(g),g=Ru(n,i,a,u),g===null&&Gu(n,i,u,Da,a),g===h)break;h=g}h!==null&&u.stopPropagation()}else Gu(n,i,u,null,a)}}var Da=null;function Ru(n,i,a,u){if(Da=null,n=O(u),n=Fr(n),n!==null)if(i=hi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=wa(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Da=n,null}function lh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case we:return 1;case De:return 4;case ze:case Be:return 16;case at:return 536870912;default:return 16}default:return 16}}var sr=null,Au=null,Ua=null;function uh(){if(Ua)return Ua;var n,i=Au,a=i.length,u,h="value"in sr?sr.value:sr.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var w=a-n;for(u=1;u<=w&&i[a-u]===h[g-u];u++);return Ua=h.slice(n,1<u?1-u:void 0)}function Na(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ia(){return!0}function ch(){return!1}function On(n){function i(a,u,h,g,w){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ia:ch,this.isPropagationStopped=ch,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cu=On(ms),Eo=oe({},ms,{view:0,detail:0}),M_=On(Eo),bu,Pu,Mo,Fa=oe({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Mo&&(Mo&&n.type==="mousemove"?(bu=n.screenX-Mo.screenX,Pu=n.screenY-Mo.screenY):Pu=bu=0,Mo=n),bu)},movementY:function(n){return"movementY"in n?n.movementY:Pu}}),fh=On(Fa),w_=oe({},Fa,{dataTransfer:0}),T_=On(w_),R_=oe({},Eo,{relatedTarget:0}),Lu=On(R_),A_=oe({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),C_=On(A_),b_=oe({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),P_=On(b_),L_=oe({},ms,{data:0}),dh=On(L_),D_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=N_[n])?!!i[n]:!1}function Du(){return I_}var F_=oe({},Eo,{key:function(n){if(n.key){var i=D_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Na(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?U_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(n){return n.type==="keypress"?Na(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Na(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),O_=On(F_),k_=oe({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hh=On(k_),B_=oe({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),z_=On(B_),H_=oe({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),V_=On(H_),G_=oe({},Fa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),W_=On(G_),X_=[9,13,27,32],Uu=f&&"CompositionEvent"in window,wo=null;f&&"documentMode"in document&&(wo=document.documentMode);var j_=f&&"TextEvent"in window&&!wo,ph=f&&(!Uu||wo&&8<wo&&11>=wo),mh=" ",gh=!1;function vh(n,i){switch(n){case"keyup":return X_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _h(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function $_(n,i){switch(n){case"compositionend":return _h(i);case"keypress":return i.which!==32?null:(gh=!0,mh);case"textInput":return n=i.data,n===mh&&gh?null:n;default:return null}}function Y_(n,i){if(gs)return n==="compositionend"||!Uu&&vh(n,i)?(n=uh(),Ua=Au=sr=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ph&&i.locale!=="ko"?null:i.data;default:return null}}var q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!q_[n.type]:i==="textarea"}function yh(n,i,a,u){he(u),i=Ha(i,"onChange"),0<i.length&&(a=new Cu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var To=null,Ro=null;function K_(n){kh(n,0)}function Oa(n){var i=Ss(n);if(Rt(i))return n}function Z_(n,i){if(n==="change")return i}var Sh=!1;if(f){var Nu;if(f){var Iu="oninput"in document;if(!Iu){var Eh=document.createElement("div");Eh.setAttribute("oninput","return;"),Iu=typeof Eh.oninput=="function"}Nu=Iu}else Nu=!1;Sh=Nu&&(!document.documentMode||9<document.documentMode)}function Mh(){To&&(To.detachEvent("onpropertychange",wh),Ro=To=null)}function wh(n){if(n.propertyName==="value"&&Oa(Ro)){var i=[];yh(i,Ro,n,O(n)),bn(K_,i)}}function J_(n,i,a){n==="focusin"?(Mh(),To=i,Ro=a,To.attachEvent("onpropertychange",wh)):n==="focusout"&&Mh()}function Q_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oa(Ro)}function e0(n,i){if(n==="click")return Oa(i)}function t0(n,i){if(n==="input"||n==="change")return Oa(i)}function n0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ei=typeof Object.is=="function"?Object.is:n0;function Ao(n,i){if(ei(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!d.call(i,h)||!ei(n[h],i[h]))return!1}return!0}function Th(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Rh(n,i){var a=Th(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Th(a)}}function Ah(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ah(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ch(){for(var n=window,i=ct();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ct(n.document)}return i}function Fu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function i0(n){var i=Ch(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ah(a.ownerDocument.documentElement,a)){if(u!==null&&Fu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=Rh(a,g);var w=Rh(a,u);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var r0=f&&"documentMode"in document&&11>=document.documentMode,vs=null,Ou=null,Co=null,ku=!1;function bh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ku||vs==null||vs!==ct(u)||(u=vs,"selectionStart"in u&&Fu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Co&&Ao(Co,u)||(Co=u,u=Ha(Ou,"onSelect"),0<u.length&&(i=new Cu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=vs)))}function ka(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},Bu={},Ph={};f&&(Ph=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Ba(n){if(Bu[n])return Bu[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ph)return Bu[n]=i[a];return n}var Lh=Ba("animationend"),Dh=Ba("animationiteration"),Uh=Ba("animationstart"),Nh=Ba("transitionend"),Ih=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(n,i){Ih.set(n,i),l(i,[n])}for(var zu=0;zu<Fh.length;zu++){var Hu=Fh[zu],s0=Hu.toLowerCase(),o0=Hu[0].toUpperCase()+Hu.slice(1);or(s0,"on"+o0)}or(Lh,"onAnimationEnd"),or(Dh,"onAnimationIteration"),or(Uh,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(Nh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a0=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function Oh(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Ma(u,i,void 0,n),n.currentTarget=null}function kh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],h=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var w=u.length-1;0<=w;w--){var U=u[w],z=U.instance,ne=U.currentTarget;if(U=U.listener,z!==g&&h.isPropagationStopped())break e;Oh(h,U,ne),g=z}else for(w=0;w<u.length;w++){if(U=u[w],z=U.instance,ne=U.currentTarget,U=U.listener,z!==g&&h.isPropagationStopped())break e;Oh(h,U,ne),g=z}}}if(Ir)throw n=Qi,Ir=!1,Qi=null,n}function Ot(n,i){var a=i[qu];a===void 0&&(a=i[qu]=new Set);var u=n+"__bubble";a.has(u)||(Bh(i,n,2,!1),a.add(u))}function Vu(n,i,a){var u=0;i&&(u|=4),Bh(a,n,u,i)}var za="_reactListening"+Math.random().toString(36).slice(2);function Po(n){if(!n[za]){n[za]=!0,s.forEach(function(a){a!=="selectionchange"&&(a0.has(a)||Vu(a,!1,n),Vu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[za]||(i[za]=!0,Vu("selectionchange",!1,i))}}function Bh(n,i,a,u){switch(lh(i)){case 1:var h=S_;break;case 4:h=E_;break;default:h=Tu}a=h.bind(null,i,a,n),h=void 0,!ds||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Gu(n,i,a,u,h){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var U=u.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(w===4)for(w=u.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===h||z.nodeType===8&&z.parentNode===h))return;w=w.return}for(;U!==null;){if(w=Fr(U),w===null)return;if(z=w.tag,z===5||z===6){u=g=w;continue e}U=U.parentNode}}u=u.return}bn(function(){var ne=g,Se=O(a),Me=[];e:{var xe=Ih.get(n);if(xe!==void 0){var Fe=Cu,Xe=n;switch(n){case"keypress":if(Na(a)===0)break e;case"keydown":case"keyup":Fe=O_;break;case"focusin":Xe="focus",Fe=Lu;break;case"focusout":Xe="blur",Fe=Lu;break;case"beforeblur":case"afterblur":Fe=Lu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=T_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=z_;break;case Lh:case Dh:case Uh:Fe=C_;break;case Nh:Fe=V_;break;case"scroll":Fe=M_;break;case"wheel":Fe=W_;break;case"copy":case"cut":case"paste":Fe=P_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=hh}var Ye=(i&4)!==0,Yt=!Ye&&n==="scroll",q=Ye?xe!==null?xe+"Capture":null:xe;Ye=[];for(var G=ne,Z;G!==null;){Z=G;var Ce=Z.stateNode;if(Z.tag===5&&Ce!==null&&(Z=Ce,q!==null&&(Ce=Sn(G,q),Ce!=null&&Ye.push(Lo(G,Ce,Z)))),Yt)break;G=G.return}0<Ye.length&&(xe=new Fe(xe,Xe,null,a,Se),Me.push({event:xe,listeners:Ye}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",xe&&a!==st&&(Xe=a.relatedTarget||a.fromElement)&&(Fr(Xe)||Xe[Ci]))break e;if((Fe||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Fe?(Xe=a.relatedTarget||a.toElement,Fe=ne,Xe=Xe?Fr(Xe):null,Xe!==null&&(Yt=hi(Xe),Xe!==Yt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Fe=null,Xe=ne),Fe!==Xe)){if(Ye=fh,Ce="onMouseLeave",q="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=hh,Ce="onPointerLeave",q="onPointerEnter",G="pointer"),Yt=Fe==null?xe:Ss(Fe),Z=Xe==null?xe:Ss(Xe),xe=new Ye(Ce,G+"leave",Fe,a,Se),xe.target=Yt,xe.relatedTarget=Z,Ce=null,Fr(Se)===ne&&(Ye=new Ye(q,G+"enter",Xe,a,Se),Ye.target=Z,Ye.relatedTarget=Yt,Ce=Ye),Yt=Ce,Fe&&Xe)t:{for(Ye=Fe,q=Xe,G=0,Z=Ye;Z;Z=xs(Z))G++;for(Z=0,Ce=q;Ce;Ce=xs(Ce))Z++;for(;0<G-Z;)Ye=xs(Ye),G--;for(;0<Z-G;)q=xs(q),Z--;for(;G--;){if(Ye===q||q!==null&&Ye===q.alternate)break t;Ye=xs(Ye),q=xs(q)}Ye=null}else Ye=null;Fe!==null&&zh(Me,xe,Fe,Ye,!1),Xe!==null&&Yt!==null&&zh(Me,Yt,Xe,Ye,!0)}}e:{if(xe=ne?Ss(ne):window,Fe=xe.nodeName&&xe.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&xe.type==="file")var Ze=Z_;else if(xh(xe))if(Sh)Ze=t0;else{Ze=Q_;var it=J_}else(Fe=xe.nodeName)&&Fe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ze=e0);if(Ze&&(Ze=Ze(n,ne))){yh(Me,Ze,a,Se);break e}it&&it(n,xe,ne),n==="focusout"&&(it=xe._wrapperState)&&it.controlled&&xe.type==="number"&&ft(xe,"number",xe.value)}switch(it=ne?Ss(ne):window,n){case"focusin":(xh(it)||it.contentEditable==="true")&&(vs=it,Ou=ne,Co=null);break;case"focusout":Co=Ou=vs=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,bh(Me,a,Se);break;case"selectionchange":if(r0)break;case"keydown":case"keyup":bh(Me,a,Se)}var rt;if(Uu)e:{switch(n){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else gs?vh(n,a)&&(lt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(ph&&a.locale!=="ko"&&(gs||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&gs&&(rt=uh()):(sr=Se,Au="value"in sr?sr.value:sr.textContent,gs=!0)),it=Ha(ne,lt),0<it.length&&(lt=new dh(lt,n,null,a,Se),Me.push({event:lt,listeners:it}),rt?lt.data=rt:(rt=_h(a),rt!==null&&(lt.data=rt)))),(rt=j_?$_(n,a):Y_(n,a))&&(ne=Ha(ne,"onBeforeInput"),0<ne.length&&(Se=new dh("onBeforeInput","beforeinput",null,a,Se),Me.push({event:Se,listeners:ne}),Se.data=rt))}kh(Me,i)})}function Lo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ha(n,i){for(var a=i+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Sn(n,a),g!=null&&u.unshift(Lo(n,g,h)),g=Sn(n,i),g!=null&&u.push(Lo(n,g,h))),n=n.return}return u}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function zh(n,i,a,u,h){for(var g=i._reactName,w=[];a!==null&&a!==u;){var U=a,z=U.alternate,ne=U.stateNode;if(z!==null&&z===u)break;U.tag===5&&ne!==null&&(U=ne,h?(z=Sn(a,g),z!=null&&w.unshift(Lo(a,z,U))):h||(z=Sn(a,g),z!=null&&w.push(Lo(a,z,U)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var l0=/\r\n?/g,u0=/\u0000|\uFFFD/g;function Hh(n){return(typeof n=="string"?n:""+n).replace(l0,`
`).replace(u0,"")}function Va(n,i,a){if(i=Hh(i),Hh(n)!==i&&a)throw Error(t(425))}function Ga(){}var Wu=null,Xu=null;function ju(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,c0=typeof clearTimeout=="function"?clearTimeout:void 0,Vh=typeof Promise=="function"?Promise:void 0,f0=typeof queueMicrotask=="function"?queueMicrotask:typeof Vh<"u"?function(n){return Vh.resolve(null).then(n).catch(d0)}:$u;function d0(n){setTimeout(function(){throw n})}function Yu(n,i){var a=i,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){n.removeChild(h),So(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);So(i)}function ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Gh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),mi="__reactFiber$"+ys,Do="__reactProps$"+ys,Ci="__reactContainer$"+ys,qu="__reactEvents$"+ys,h0="__reactListeners$"+ys,p0="__reactHandles$"+ys;function Fr(n){var i=n[mi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ci]||a[mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Gh(n);n!==null;){if(a=n[mi])return a;n=Gh(n)}return i}n=a,a=n.parentNode}return null}function Uo(n){return n=n[mi]||n[Ci],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Wa(n){return n[Do]||null}var Ku=[],Es=-1;function lr(n){return{current:n}}function kt(n){0>Es||(n.current=Ku[Es],Ku[Es]=null,Es--)}function Ft(n,i){Es++,Ku[Es]=n.current,n.current=i}var ur={},pn=lr(ur),Pn=lr(!1),Or=ur;function Ms(n,i){var a=n.type.contextTypes;if(!a)return ur;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Ln(n){return n=n.childContextTypes,n!=null}function Xa(){kt(Pn),kt(pn)}function Wh(n,i,a){if(pn.current!==ur)throw Error(t(168));Ft(pn,i),Ft(Pn,a)}function Xh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,Ee(n)||"Unknown",h));return oe({},a,u)}function ja(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ur,Or=pn.current,Ft(pn,n),Ft(Pn,Pn.current),!0}function jh(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Xh(n,i,Or),u.__reactInternalMemoizedMergedChildContext=n,kt(Pn),kt(pn),Ft(pn,n)):kt(Pn),Ft(Pn,a)}var bi=null,$a=!1,Zu=!1;function $h(n){bi===null?bi=[n]:bi.push(n)}function m0(n){$a=!0,$h(n)}function cr(){if(!Zu&&bi!==null){Zu=!0;var n=0,i=St;try{var a=bi;for(St=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}bi=null,$a=!1}catch(h){throw bi!==null&&(bi=bi.slice(n+1)),Ca(we,cr),h}finally{St=i,Zu=!1}}return null}var ws=[],Ts=0,Ya=null,qa=0,Gn=[],Wn=0,kr=null,Pi=1,Li="";function Br(n,i){ws[Ts++]=qa,ws[Ts++]=Ya,Ya=n,qa=i}function Yh(n,i,a){Gn[Wn++]=Pi,Gn[Wn++]=Li,Gn[Wn++]=kr,kr=n;var u=Pi;n=Li;var h=32-dt(u)-1;u&=~(1<<h),a+=1;var g=32-dt(i)+h;if(30<g){var w=h-h%5;g=(u&(1<<w)-1).toString(32),u>>=w,h-=w,Pi=1<<32-dt(i)+h|a<<h|u,Li=g+n}else Pi=1<<g|a<<h|u,Li=n}function Ju(n){n.return!==null&&(Br(n,1),Yh(n,1,0))}function Qu(n){for(;n===Ya;)Ya=ws[--Ts],ws[Ts]=null,qa=ws[--Ts],ws[Ts]=null;for(;n===kr;)kr=Gn[--Wn],Gn[Wn]=null,Li=Gn[--Wn],Gn[Wn]=null,Pi=Gn[--Wn],Gn[Wn]=null}var kn=null,Bn=null,zt=!1,ti=null;function qh(n,i){var a=Yn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Kh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,kn=n,Bn=ar(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,kn=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=kr!==null?{id:Pi,overflow:Li}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Yn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,kn=n,Bn=null,!0):!1;default:return!1}}function ec(n){return(n.mode&1)!==0&&(n.flags&128)===0}function tc(n){if(zt){var i=Bn;if(i){var a=i;if(!Kh(n,i)){if(ec(n))throw Error(t(418));i=ar(a.nextSibling);var u=kn;i&&Kh(n,i)?qh(u,a):(n.flags=n.flags&-4097|2,zt=!1,kn=n)}}else{if(ec(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,kn=n}}}function Zh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function Ka(n){if(n!==kn)return!1;if(!zt)return Zh(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!ju(n.type,n.memoizedProps)),i&&(i=Bn)){if(ec(n))throw Jh(),Error(t(418));for(;i;)qh(n,i),i=ar(i.nextSibling)}if(Zh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Bn=ar(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=kn?ar(n.stateNode.nextSibling):null;return!0}function Jh(){for(var n=Bn;n;)n=ar(n.nextSibling)}function Rs(){Bn=kn=null,zt=!1}function nc(n){ti===null?ti=[n]:ti.push(n)}var g0=R.ReactCurrentBatchConfig;function No(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var U=h.refs;w===null?delete U[g]:U[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Za(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Qh(n){var i=n._init;return i(n._payload)}function ep(n){function i(q,G){if(n){var Z=q.deletions;Z===null?(q.deletions=[G],q.flags|=16):Z.push(G)}}function a(q,G){if(!n)return null;for(;G!==null;)i(q,G),G=G.sibling;return null}function u(q,G){for(q=new Map;G!==null;)G.key!==null?q.set(G.key,G):q.set(G.index,G),G=G.sibling;return q}function h(q,G){return q=_r(q,G),q.index=0,q.sibling=null,q}function g(q,G,Z){return q.index=Z,n?(Z=q.alternate,Z!==null?(Z=Z.index,Z<G?(q.flags|=2,G):Z):(q.flags|=2,G)):(q.flags|=1048576,G)}function w(q){return n&&q.alternate===null&&(q.flags|=2),q}function U(q,G,Z,Ce){return G===null||G.tag!==6?(G=$c(Z,q.mode,Ce),G.return=q,G):(G=h(G,Z),G.return=q,G)}function z(q,G,Z,Ce){var Ze=Z.type;return Ze===F?Se(q,G,Z.props.children,Ce,Z.key):G!==null&&(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===te&&Qh(Ze)===G.type)?(Ce=h(G,Z.props),Ce.ref=No(q,G,Z),Ce.return=q,Ce):(Ce=Sl(Z.type,Z.key,Z.props,null,q.mode,Ce),Ce.ref=No(q,G,Z),Ce.return=q,Ce)}function ne(q,G,Z,Ce){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=Yc(Z,q.mode,Ce),G.return=q,G):(G=h(G,Z.children||[]),G.return=q,G)}function Se(q,G,Z,Ce,Ze){return G===null||G.tag!==7?(G=$r(Z,q.mode,Ce,Ze),G.return=q,G):(G=h(G,Z),G.return=q,G)}function Me(q,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number")return G=$c(""+G,q.mode,Z),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case H:return Z=Sl(G.type,G.key,G.props,null,q.mode,Z),Z.ref=No(q,null,G),Z.return=q,Z;case I:return G=Yc(G,q.mode,Z),G.return=q,G;case te:var Ce=G._init;return Me(q,Ce(G._payload),Z)}if(qe(G)||le(G))return G=$r(G,q.mode,Z,null),G.return=q,G;Za(q,G)}return null}function xe(q,G,Z,Ce){var Ze=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Ze!==null?null:U(q,G,""+Z,Ce);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case H:return Z.key===Ze?z(q,G,Z,Ce):null;case I:return Z.key===Ze?ne(q,G,Z,Ce):null;case te:return Ze=Z._init,xe(q,G,Ze(Z._payload),Ce)}if(qe(Z)||le(Z))return Ze!==null?null:Se(q,G,Z,Ce,null);Za(q,Z)}return null}function Fe(q,G,Z,Ce,Ze){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return q=q.get(Z)||null,U(G,q,""+Ce,Ze);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case H:return q=q.get(Ce.key===null?Z:Ce.key)||null,z(G,q,Ce,Ze);case I:return q=q.get(Ce.key===null?Z:Ce.key)||null,ne(G,q,Ce,Ze);case te:var it=Ce._init;return Fe(q,G,Z,it(Ce._payload),Ze)}if(qe(Ce)||le(Ce))return q=q.get(Z)||null,Se(G,q,Ce,Ze,null);Za(G,Ce)}return null}function Xe(q,G,Z,Ce){for(var Ze=null,it=null,rt=G,lt=G=0,an=null;rt!==null&&lt<Z.length;lt++){rt.index>lt?(an=rt,rt=null):an=rt.sibling;var wt=xe(q,rt,Z[lt],Ce);if(wt===null){rt===null&&(rt=an);break}n&&rt&&wt.alternate===null&&i(q,rt),G=g(wt,G,lt),it===null?Ze=wt:it.sibling=wt,it=wt,rt=an}if(lt===Z.length)return a(q,rt),zt&&Br(q,lt),Ze;if(rt===null){for(;lt<Z.length;lt++)rt=Me(q,Z[lt],Ce),rt!==null&&(G=g(rt,G,lt),it===null?Ze=rt:it.sibling=rt,it=rt);return zt&&Br(q,lt),Ze}for(rt=u(q,rt);lt<Z.length;lt++)an=Fe(rt,q,lt,Z[lt],Ce),an!==null&&(n&&an.alternate!==null&&rt.delete(an.key===null?lt:an.key),G=g(an,G,lt),it===null?Ze=an:it.sibling=an,it=an);return n&&rt.forEach(function(xr){return i(q,xr)}),zt&&Br(q,lt),Ze}function Ye(q,G,Z,Ce){var Ze=le(Z);if(typeof Ze!="function")throw Error(t(150));if(Z=Ze.call(Z),Z==null)throw Error(t(151));for(var it=Ze=null,rt=G,lt=G=0,an=null,wt=Z.next();rt!==null&&!wt.done;lt++,wt=Z.next()){rt.index>lt?(an=rt,rt=null):an=rt.sibling;var xr=xe(q,rt,wt.value,Ce);if(xr===null){rt===null&&(rt=an);break}n&&rt&&xr.alternate===null&&i(q,rt),G=g(xr,G,lt),it===null?Ze=xr:it.sibling=xr,it=xr,rt=an}if(wt.done)return a(q,rt),zt&&Br(q,lt),Ze;if(rt===null){for(;!wt.done;lt++,wt=Z.next())wt=Me(q,wt.value,Ce),wt!==null&&(G=g(wt,G,lt),it===null?Ze=wt:it.sibling=wt,it=wt);return zt&&Br(q,lt),Ze}for(rt=u(q,rt);!wt.done;lt++,wt=Z.next())wt=Fe(rt,q,lt,wt.value,Ce),wt!==null&&(n&&wt.alternate!==null&&rt.delete(wt.key===null?lt:wt.key),G=g(wt,G,lt),it===null?Ze=wt:it.sibling=wt,it=wt);return n&&rt.forEach(function(q0){return i(q,q0)}),zt&&Br(q,lt),Ze}function Yt(q,G,Z,Ce){if(typeof Z=="object"&&Z!==null&&Z.type===F&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case H:e:{for(var Ze=Z.key,it=G;it!==null;){if(it.key===Ze){if(Ze=Z.type,Ze===F){if(it.tag===7){a(q,it.sibling),G=h(it,Z.props.children),G.return=q,q=G;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===te&&Qh(Ze)===it.type){a(q,it.sibling),G=h(it,Z.props),G.ref=No(q,it,Z),G.return=q,q=G;break e}a(q,it);break}else i(q,it);it=it.sibling}Z.type===F?(G=$r(Z.props.children,q.mode,Ce,Z.key),G.return=q,q=G):(Ce=Sl(Z.type,Z.key,Z.props,null,q.mode,Ce),Ce.ref=No(q,G,Z),Ce.return=q,q=Ce)}return w(q);case I:e:{for(it=Z.key;G!==null;){if(G.key===it)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){a(q,G.sibling),G=h(G,Z.children||[]),G.return=q,q=G;break e}else{a(q,G);break}else i(q,G);G=G.sibling}G=Yc(Z,q.mode,Ce),G.return=q,q=G}return w(q);case te:return it=Z._init,Yt(q,G,it(Z._payload),Ce)}if(qe(Z))return Xe(q,G,Z,Ce);if(le(Z))return Ye(q,G,Z,Ce);Za(q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,G!==null&&G.tag===6?(a(q,G.sibling),G=h(G,Z),G.return=q,q=G):(a(q,G),G=$c(Z,q.mode,Ce),G.return=q,q=G),w(q)):a(q,G)}return Yt}var As=ep(!0),tp=ep(!1),Ja=lr(null),Qa=null,Cs=null,ic=null;function rc(){ic=Cs=Qa=null}function sc(n){var i=Ja.current;kt(Ja),n._currentValue=i}function oc(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function bs(n,i){Qa=n,ic=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Dn=!0),n.firstContext=null)}function Xn(n){var i=n._currentValue;if(ic!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(Qa===null)throw Error(t(308));Cs=n,Qa.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var zr=null;function ac(n){zr===null?zr=[n]:zr.push(n)}function np(n,i,a,u){var h=i.interleaved;return h===null?(a.next=a,ac(i)):(a.next=h.next,h.next=a),i.interleaved=a,Di(n,u)}function Di(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var fr=!1;function lc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ip(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function dr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,Di(n,a)}return h=u.interleaved,h===null?(i.next=i,ac(u)):(i.next=h.next,h.next=i),u.interleaved=i,Di(n,a)}function el(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,rn(n,a)}}function rp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function tl(n,i,a,u){var h=n.updateQueue;fr=!1;var g=h.firstBaseUpdate,w=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var z=U,ne=z.next;z.next=null,w===null?g=ne:w.next=ne,w=z;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,U=Se.lastBaseUpdate,U!==w&&(U===null?Se.firstBaseUpdate=ne:U.next=ne,Se.lastBaseUpdate=z))}if(g!==null){var Me=h.baseState;w=0,Se=ne=z=null,U=g;do{var xe=U.lane,Fe=U.eventTime;if((u&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Fe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Xe=n,Ye=U;switch(xe=i,Fe=a,Ye.tag){case 1:if(Xe=Ye.payload,typeof Xe=="function"){Me=Xe.call(Fe,Me,xe);break e}Me=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ye.payload,xe=typeof Xe=="function"?Xe.call(Fe,Me,xe):Xe,xe==null)break e;Me=oe({},Me,xe);break e;case 2:fr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,xe=h.effects,xe===null?h.effects=[U]:xe.push(U))}else Fe={eventTime:Fe,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Se===null?(ne=Se=Fe,z=Me):Se=Se.next=Fe,w|=xe;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,h.lastBaseUpdate=xe,h.shared.pending=null}}while(!0);if(Se===null&&(z=Me),h.baseState=z,h.firstBaseUpdate=ne,h.lastBaseUpdate=Se,i=h.shared.interleaved,i!==null){h=i;do w|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Gr|=w,n.lanes=w,n.memoizedState=Me}}function sp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Io={},gi=lr(Io),Fo=lr(Io),Oo=lr(Io);function Hr(n){if(n===Io)throw Error(t(174));return n}function uc(n,i){switch(Ft(Oo,i),Ft(Fo,n),Ft(gi,Io),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ge(i,n)}kt(gi),Ft(gi,i)}function Ps(){kt(gi),kt(Fo),kt(Oo)}function op(n){Hr(Oo.current);var i=Hr(gi.current),a=ge(i,n.type);i!==a&&(Ft(Fo,n),Ft(gi,a))}function cc(n){Fo.current===n&&(kt(gi),kt(Fo))}var Ht=lr(0);function nl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var fc=[];function dc(){for(var n=0;n<fc.length;n++)fc[n]._workInProgressVersionPrimary=null;fc.length=0}var il=R.ReactCurrentDispatcher,hc=R.ReactCurrentBatchConfig,Vr=0,Vt=null,Zt=null,sn=null,rl=!1,ko=!1,Bo=0,v0=0;function mn(){throw Error(t(321))}function pc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ei(n[a],i[a]))return!1;return!0}function mc(n,i,a,u,h,g){if(Vr=g,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,il.current=n===null||n.memoizedState===null?S0:E0,n=a(u,h),ko){g=0;do{if(ko=!1,Bo=0,25<=g)throw Error(t(301));g+=1,sn=Zt=null,i.updateQueue=null,il.current=M0,n=a(u,h)}while(ko)}if(il.current=al,i=Zt!==null&&Zt.next!==null,Vr=0,sn=Zt=Vt=null,rl=!1,i)throw Error(t(300));return n}function gc(){var n=Bo!==0;return Bo=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Vt.memoizedState=sn=n:sn=sn.next=n,sn}function jn(){if(Zt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=sn===null?Vt.memoizedState:sn.next;if(i!==null)sn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},sn===null?Vt.memoizedState=sn=n:sn=sn.next=n}return sn}function zo(n,i){return typeof i=="function"?i(n):i}function vc(n){var i=jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Zt,h=u.baseQueue,g=a.pending;if(g!==null){if(h!==null){var w=h.next;h.next=g.next,g.next=w}u.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,u=u.baseState;var U=w=null,z=null,ne=g;do{var Se=ne.lane;if((Vr&Se)===Se)z!==null&&(z=z.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),u=ne.hasEagerState?ne.eagerState:n(u,ne.action);else{var Me={lane:Se,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};z===null?(U=z=Me,w=u):z=z.next=Me,Vt.lanes|=Se,Gr|=Se}ne=ne.next}while(ne!==null&&ne!==g);z===null?w=u:z.next=U,ei(u,i.memoizedState)||(Dn=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=z,a.lastRenderedState=u}if(n=a.interleaved,n!==null){h=n;do g=h.lane,Vt.lanes|=g,Gr|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function _c(n){var i=jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do g=n(g,w.action),w=w.next;while(w!==h);ei(g,i.memoizedState)||(Dn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function ap(){}function lp(n,i){var a=Vt,u=jn(),h=i(),g=!ei(u.memoizedState,h);if(g&&(u.memoizedState=h,Dn=!0),u=u.queue,xc(fp.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,Ho(9,cp.bind(null,a,u,h,i),void 0,null),on===null)throw Error(t(349));(Vr&30)!==0||up(a,i,h)}return h}function up(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function cp(n,i,a,u){i.value=a,i.getSnapshot=u,dp(i)&&hp(n)}function fp(n,i,a){return a(function(){dp(i)&&hp(n)})}function dp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ei(n,a)}catch{return!0}}function hp(n){var i=Di(n,1);i!==null&&si(i,n,1,-1)}function pp(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},i.queue=n,n=n.dispatch=y0.bind(null,Vt,n),[i.memoizedState,n]}function Ho(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function mp(){return jn().memoizedState}function sl(n,i,a,u){var h=vi();Vt.flags|=n,h.memoizedState=Ho(1|i,a,void 0,u===void 0?null:u)}function ol(n,i,a,u){var h=jn();u=u===void 0?null:u;var g=void 0;if(Zt!==null){var w=Zt.memoizedState;if(g=w.destroy,u!==null&&pc(u,w.deps)){h.memoizedState=Ho(i,a,g,u);return}}Vt.flags|=n,h.memoizedState=Ho(1|i,a,g,u)}function gp(n,i){return sl(8390656,8,n,i)}function xc(n,i){return ol(2048,8,n,i)}function vp(n,i){return ol(4,2,n,i)}function _p(n,i){return ol(4,4,n,i)}function xp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function yp(n,i,a){return a=a!=null?a.concat([n]):null,ol(4,4,xp.bind(null,i,n),a)}function yc(){}function Sp(n,i){var a=jn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&pc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Ep(n,i){var a=jn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&pc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Mp(n,i,a){return(Vr&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=a):(ei(a,i)||(a=Nt(),Vt.lanes|=a,Gr|=a,n.baseState=!0),i)}function _0(n,i){var a=St;St=a!==0&&4>a?a:4,n(!0);var u=hc.transition;hc.transition={};try{n(!1),i()}finally{St=a,hc.transition=u}}function wp(){return jn().memoizedState}function x0(n,i,a){var u=gr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Tp(n))Rp(i,a);else if(a=np(n,i,a,u),a!==null){var h=wn();si(a,n,u,h),Ap(a,i,u)}}function y0(n,i,a){var u=gr(n),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tp(n))Rp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,U=g(w,a);if(h.hasEagerState=!0,h.eagerState=U,ei(U,w)){var z=i.interleaved;z===null?(h.next=h,ac(i)):(h.next=z.next,z.next=h),i.interleaved=h;return}}catch{}a=np(n,i,h,u),a!==null&&(h=wn(),si(a,n,u,h),Ap(a,i,u))}}function Tp(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function Rp(n,i){ko=rl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Ap(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,rn(n,a)}}var al={readContext:Xn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},S0={readContext:Xn,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:Xn,useEffect:gp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,sl(4194308,4,xp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return sl(4194308,4,n,i)},useInsertionEffect:function(n,i){return sl(4,2,n,i)},useMemo:function(n,i){var a=vi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=vi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=x0.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:pp,useDebugValue:yc,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=pp(!1),i=n[0];return n=_0.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Vt,h=vi();if(zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),on===null)throw Error(t(349));(Vr&30)!==0||up(u,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,gp(fp.bind(null,u,g,n),[n]),u.flags|=2048,Ho(9,cp.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=vi(),i=on.identifierPrefix;if(zt){var a=Li,u=Pi;a=(u&~(1<<32-dt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Bo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=v0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},E0={readContext:Xn,useCallback:Sp,useContext:Xn,useEffect:xc,useImperativeHandle:yp,useInsertionEffect:vp,useLayoutEffect:_p,useMemo:Ep,useReducer:vc,useRef:mp,useState:function(){return vc(zo)},useDebugValue:yc,useDeferredValue:function(n){var i=jn();return Mp(i,Zt.memoizedState,n)},useTransition:function(){var n=vc(zo)[0],i=jn().memoizedState;return[n,i]},useMutableSource:ap,useSyncExternalStore:lp,useId:wp,unstable_isNewReconciler:!1},M0={readContext:Xn,useCallback:Sp,useContext:Xn,useEffect:xc,useImperativeHandle:yp,useInsertionEffect:vp,useLayoutEffect:_p,useMemo:Ep,useReducer:_c,useRef:mp,useState:function(){return _c(zo)},useDebugValue:yc,useDeferredValue:function(n){var i=jn();return Zt===null?i.memoizedState=n:Mp(i,Zt.memoizedState,n)},useTransition:function(){var n=_c(zo)[0],i=jn().memoizedState;return[n,i]},useMutableSource:ap,useSyncExternalStore:lp,useId:wp,unstable_isNewReconciler:!1};function ni(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Sc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ll={isMounted:function(n){return(n=n._reactInternals)?hi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=wn(),h=gr(n),g=Ui(u,h);g.payload=i,a!=null&&(g.callback=a),i=dr(n,g,h),i!==null&&(si(i,n,h,u),el(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=wn(),h=gr(n),g=Ui(u,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=dr(n,g,h),i!==null&&(si(i,n,h,u),el(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=wn(),u=gr(n),h=Ui(a,u);h.tag=2,i!=null&&(h.callback=i),i=dr(n,h,u),i!==null&&(si(i,n,u,a),el(i,n,u))}};function Cp(n,i,a,u,h,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,w):i.prototype&&i.prototype.isPureReactComponent?!Ao(a,u)||!Ao(h,g):!0}function bp(n,i,a){var u=!1,h=ur,g=i.contextType;return typeof g=="object"&&g!==null?g=Xn(g):(h=Ln(i)?Or:pn.current,u=i.contextTypes,g=(u=u!=null)?Ms(n,h):ur),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ll,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Pp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&ll.enqueueReplaceState(i,i.state,null)}function Ec(n,i,a,u){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},lc(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=Xn(g):(g=Ln(i)?Or:pn.current,h.context=Ms(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Sc(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&ll.enqueueReplaceState(h,h.state,null),tl(n,a,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var a="",u=i;do a+=fe(u),u=u.return;while(u);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Mc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function wc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var w0=typeof WeakMap=="function"?WeakMap:Map;function Lp(n,i,a){a=Ui(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){ml||(ml=!0,Bc=u),wc(n,i)},a}function Dp(n,i,a){a=Ui(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;a.payload=function(){return u(h)},a.callback=function(){wc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){wc(n,i),typeof u!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Up(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new w0;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(a)||(h.add(a),n=k0.bind(null,n,i,a),i.then(n,n))}function Np(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Ip(n,i,a,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ui(-1,1),i.tag=2,dr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var T0=R.ReactCurrentOwner,Dn=!1;function Mn(n,i,a,u){i.child=n===null?tp(i,null,a,u):As(i,n.child,a,u)}function Fp(n,i,a,u,h){a=a.render;var g=i.ref;return bs(i,h),u=mc(n,i,a,u,g,h),a=gc(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Ni(n,i,h)):(zt&&a&&Ju(i),i.flags|=1,Mn(n,i,u,h),i.child)}function Op(n,i,a,u,h){if(n===null){var g=a.type;return typeof g=="function"&&!jc(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,kp(n,i,g,u,h)):(n=Sl(a.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ao,a(w,u)&&n.ref===i.ref)return Ni(n,i,h)}return i.flags|=1,n=_r(g,u),n.ref=i.ref,n.return=i,i.child=n}function kp(n,i,a,u,h){if(n!==null){var g=n.memoizedProps;if(Ao(g,u)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Dn=!0);else return i.lanes=n.lanes,Ni(n,i,h)}return Tc(n,i,a,u,h)}function Bp(n,i,a){var u=i.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Us,zn),zn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ft(Us,zn),zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,Ft(Us,zn),zn|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,Ft(Us,zn),zn|=u;return Mn(n,i,h,a),i.child}function zp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Tc(n,i,a,u,h){var g=Ln(a)?Or:pn.current;return g=Ms(i,g),bs(i,h),a=mc(n,i,a,u,g,h),u=gc(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Ni(n,i,h)):(zt&&u&&Ju(i),i.flags|=1,Mn(n,i,a,h),i.child)}function Hp(n,i,a,u,h){if(Ln(a)){var g=!0;ja(i)}else g=!1;if(bs(i,h),i.stateNode===null)cl(n,i),bp(i,a,u),Ec(i,a,u,h),u=!0;else if(n===null){var w=i.stateNode,U=i.memoizedProps;w.props=U;var z=w.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=Xn(ne):(ne=Ln(a)?Or:pn.current,ne=Ms(i,ne));var Se=a.getDerivedStateFromProps,Me=typeof Se=="function"||typeof w.getSnapshotBeforeUpdate=="function";Me||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==u||z!==ne)&&Pp(i,w,u,ne),fr=!1;var xe=i.memoizedState;w.state=xe,tl(i,u,w,h),z=i.memoizedState,U!==u||xe!==z||Pn.current||fr?(typeof Se=="function"&&(Sc(i,a,Se,u),z=i.memoizedState),(U=fr||Cp(i,a,U,u,xe,z,ne))?(Me||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=z),w.props=u,w.state=z,w.context=ne,u=U):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,ip(n,i),U=i.memoizedProps,ne=i.type===i.elementType?U:ni(i.type,U),w.props=ne,Me=i.pendingProps,xe=w.context,z=a.contextType,typeof z=="object"&&z!==null?z=Xn(z):(z=Ln(a)?Or:pn.current,z=Ms(i,z));var Fe=a.getDerivedStateFromProps;(Se=typeof Fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==Me||xe!==z)&&Pp(i,w,u,z),fr=!1,xe=i.memoizedState,w.state=xe,tl(i,u,w,h);var Xe=i.memoizedState;U!==Me||xe!==Xe||Pn.current||fr?(typeof Fe=="function"&&(Sc(i,a,Fe,u),Xe=i.memoizedState),(ne=fr||Cp(i,a,ne,u,xe,Xe,z)||!1)?(Se||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Xe,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Xe,z)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Xe),w.props=u,w.state=Xe,w.context=z,u=ne):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),u=!1)}return Rc(n,i,a,u,g,h)}function Rc(n,i,a,u,h,g){zp(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return h&&jh(i,a,!1),Ni(n,i,g);u=i.stateNode,T0.current=i;var U=w&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=As(i,n.child,null,g),i.child=As(i,null,U,g)):Mn(n,i,U,g),i.memoizedState=u.state,h&&jh(i,a,!0),i.child}function Vp(n){var i=n.stateNode;i.pendingContext?Wh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Wh(n,i.context,!1),uc(n,i.containerInfo)}function Gp(n,i,a,u,h){return Rs(),nc(h),i.flags|=256,Mn(n,i,a,u),i.child}var Ac={dehydrated:null,treeContext:null,retryLane:0};function Cc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Wp(n,i,a){var u=i.pendingProps,h=Ht.current,g=!1,w=(i.flags&128)!==0,U;if((U=w)||(U=n!==null&&n.memoizedState===null?!1:(h&2)!==0),U?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Ft(Ht,h&1),n===null)return tc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,n=u.fallback,g?(u=i.mode,g=i.child,w={mode:"hidden",children:w},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=El(w,u,0,null),n=$r(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Cc(a),i.memoizedState=Ac,n):bc(i,w));if(h=n.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return R0(n,i,w,u,U,h,a);if(g){g=u.fallback,w=i.mode,h=n.child,U=h.sibling;var z={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=z,i.deletions=null):(u=_r(h,z),u.subtreeFlags=h.subtreeFlags&14680064),U!==null?g=_r(U,g):(g=$r(g,w,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,w=n.child.memoizedState,w=w===null?Cc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=Ac,u}return g=n.child,n=g.sibling,u=_r(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function bc(n,i){return i=El({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ul(n,i,a,u){return u!==null&&nc(u),As(i,n.child,null,a),n=bc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function R0(n,i,a,u,h,g,w){if(a)return i.flags&256?(i.flags&=-257,u=Mc(Error(t(422))),ul(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,h=i.mode,u=El({mode:"visible",children:u.children},h,0,null),g=$r(g,h,w,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&As(i,n.child,null,w),i.child.memoizedState=Cc(w),i.memoizedState=Ac,g);if((i.mode&1)===0)return ul(n,i,w,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var U=u.dgst;return u=U,g=Error(t(419)),u=Mc(g,u,void 0),ul(n,i,w,u)}if(U=(w&n.childLanes)!==0,Dn||U){if(u=on,u!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|w))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Di(n,h),si(u,n,h,-1))}return Xc(),u=Mc(Error(t(421))),ul(n,i,w,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=B0.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,Bn=ar(h.nextSibling),kn=i,zt=!0,ti=null,n!==null&&(Gn[Wn++]=Pi,Gn[Wn++]=Li,Gn[Wn++]=kr,Pi=n.id,Li=n.overflow,kr=i),i=bc(i,u.children),i.flags|=4096,i)}function Xp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),oc(n.return,i,a)}function Pc(n,i,a,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=h)}function jp(n,i,a){var u=i.pendingProps,h=u.revealOrder,g=u.tail;if(Mn(n,i,u.children,a),u=Ht.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xp(n,a,i);else if(n.tag===19)Xp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ft(Ht,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&nl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Pc(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&nl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Pc(i,!0,a,null,g);break;case"together":Pc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function cl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ni(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Gr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=_r(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=_r(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function A0(n,i,a){switch(i.tag){case 3:Vp(i),Rs();break;case 5:op(i);break;case 1:Ln(i.type)&&ja(i);break;case 4:uc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Ft(Ja,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ft(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Wp(n,i,a):(Ft(Ht,Ht.current&1),n=Ni(n,i,a),n!==null?n.sibling:null);Ft(Ht,Ht.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return jp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ft(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,Bp(n,i,a)}return Ni(n,i,a)}var $p,Lc,Yp,qp;$p=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Lc=function(){},Yp=function(n,i,a,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,Hr(gi.current);var g=null;switch(a){case"input":h=k(n,h),u=k(n,u),g=[];break;case"select":h=oe({},h,{value:void 0}),u=oe({},u,{value:void 0}),g=[];break;case"textarea":h=It(n,h),u=It(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ga)}Je(a,u);var w;a=null;for(ne in h)if(!u.hasOwnProperty(ne)&&h.hasOwnProperty(ne)&&h[ne]!=null)if(ne==="style"){var U=h[ne];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?g||(g=[]):(g=g||[]).push(ne,null));for(ne in u){var z=u[ne];if(U=h?.[ne],u.hasOwnProperty(ne)&&z!==U&&(z!=null||U!=null))if(ne==="style")if(U){for(w in U)!U.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in z)z.hasOwnProperty(w)&&U[w]!==z[w]&&(a||(a={}),a[w]=z[w])}else a||(g||(g=[]),g.push(ne,a)),a=z;else ne==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(g=g||[]).push(ne,z)):ne==="children"?typeof z!="string"&&typeof z!="number"||(g=g||[]).push(ne,""+z):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(z!=null&&ne==="onScroll"&&Ot("scroll",n),g||U===z||(g=[])):(g=g||[]).push(ne,z))}a&&(g=g||[]).push("style",a);var ne=g;(i.updateQueue=ne)&&(i.flags|=4)}},qp=function(n,i,a,u){a!==u&&(i.flags|=4)};function Vo(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function C0(n,i,a){var u=i.pendingProps;switch(Qu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Ln(i.type)&&Xa(),gn(i),null;case 3:return u=i.stateNode,Ps(),kt(Pn),kt(pn),dc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ka(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(Vc(ti),ti=null))),Lc(n,i),gn(i),null;case 5:cc(i);var h=Hr(Oo.current);if(a=i.type,n!==null&&i.stateNode!=null)Yp(n,i,a,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=Hr(gi.current),Ka(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[mi]=i,u[Do]=g,n=(i.mode&1)!==0,a){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(h=0;h<bo.length;h++)Ot(bo[h],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":Wt(u,g),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Ot("invalid",u);break;case"textarea":D(u,g),Ot("invalid",u)}Je(a,g),h=null;for(var w in g)if(g.hasOwnProperty(w)){var U=g[w];w==="children"?typeof U=="string"?u.textContent!==U&&(g.suppressHydrationWarning!==!0&&Va(u.textContent,U,n),h=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&Va(u.textContent,U,n),h=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&Ot("scroll",u)}switch(a){case"input":Mt(u),Ge(u,g,!0);break;case"textarea":Mt(u),J(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Ga)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(a,{is:u.is}):(n=w.createElement(a),a==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,a),n[mi]=i,n[Do]=u,$p(n,i,!1,!1),i.stateNode=n;e:{switch(w=Le(a,u),a){case"dialog":Ot("cancel",n),Ot("close",n),h=u;break;case"iframe":case"object":case"embed":Ot("load",n),h=u;break;case"video":case"audio":for(h=0;h<bo.length;h++)Ot(bo[h],n);h=u;break;case"source":Ot("error",n),h=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),h=u;break;case"details":Ot("toggle",n),h=u;break;case"input":Wt(n,u),h=k(n,u),Ot("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=oe({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":D(n,u),h=It(n,u),Ot("invalid",n);break;default:h=u}Je(a,h),U=h;for(g in U)if(U.hasOwnProperty(g)){var z=U[g];g==="style"?Ne(n,z):g==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&je(n,z)):g==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&be(n,z):typeof z=="number"&&be(n,""+z):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?z!=null&&g==="onScroll"&&Ot("scroll",n):z!=null&&b(n,g,z,w))}switch(a){case"input":Mt(n),Ge(n,u,!1);break;case"textarea":Mt(n),J(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?tt(n,!!u.multiple,g,!1):u.defaultValue!=null&&tt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Ga)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)qp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Hr(Oo.current),Hr(gi.current),Ka(i)){if(u=i.stateNode,a=i.memoizedProps,u[mi]=i,(g=u.nodeValue!==a)&&(n=kn,n!==null))switch(n.tag){case 3:Va(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Va(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[mi]=i,i.stateNode=u}return gn(i),null;case 13:if(kt(Ht),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Jh(),Rs(),i.flags|=98560,g=!1;else if(g=Ka(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[mi]=i}else Rs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),g=!1}else ti!==null&&(Vc(ti),ti=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?Jt===0&&(Jt=3):Xc())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return Ps(),Lc(n,i),n===null&&Po(i.stateNode.containerInfo),gn(i),null;case 10:return sc(i.type._context),gn(i),null;case 17:return Ln(i.type)&&Xa(),gn(i),null;case 19:if(kt(Ht),g=i.memoizedState,g===null)return gn(i),null;if(u=(i.flags&128)!==0,w=g.rendering,w===null)if(u)Vo(g,!1);else{if(Jt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=nl(n),w!==null){for(i.flags|=128,Vo(g,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ft(Ht,Ht.current&1|2),i.child}n=n.sibling}g.tail!==null&&K()>Ns&&(i.flags|=128,u=!0,Vo(g,!1),i.lanes=4194304)}else{if(!u)if(n=nl(w),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Vo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!zt)return gn(i),null}else 2*K()-g.renderingStartTime>Ns&&a!==1073741824&&(i.flags|=128,u=!0,Vo(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=K(),i.sibling=null,a=Ht.current,Ft(Ht,u?a&1|2:a&1),i):(gn(i),null);case 22:case 23:return Wc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(zn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function b0(n,i){switch(Qu(i),i.tag){case 1:return Ln(i.type)&&Xa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ps(),kt(Pn),kt(pn),dc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return cc(i),null;case 13:if(kt(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Rs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return kt(Ht),null;case 4:return Ps(),null;case 10:return sc(i.type._context),null;case 22:case 23:return Wc(),null;case 24:return null;default:return null}}var fl=!1,vn=!1,P0=typeof WeakSet=="function"?WeakSet:Set,He=null;function Ds(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Xt(n,i,u)}else a.current=null}function Dc(n,i,a){try{a()}catch(u){Xt(n,i,u)}}var Kp=!1;function L0(n,i){if(Wu=La,n=Ch(),Fu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,U=-1,z=-1,ne=0,Se=0,Me=n,xe=null;t:for(;;){for(var Fe;Me!==a||h!==0&&Me.nodeType!==3||(U=w+h),Me!==g||u!==0&&Me.nodeType!==3||(z=w+u),Me.nodeType===3&&(w+=Me.nodeValue.length),(Fe=Me.firstChild)!==null;)xe=Me,Me=Fe;for(;;){if(Me===n)break t;if(xe===a&&++ne===h&&(U=w),xe===g&&++Se===u&&(z=w),(Fe=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=Fe}a=U===-1||z===-1?null:{start:U,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xu={focusedElem:n,selectionRange:a},La=!1,He=i;He!==null;)if(i=He,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,He=n;else for(;He!==null;){i=He;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ye=Xe.memoizedProps,Yt=Xe.memoizedState,q=i.stateNode,G=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:ni(i.type,Ye),Yt);q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){Xt(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,He=n;break}He=i.return}return Xe=Kp,Kp=!1,Xe}function Go(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Dc(i,a,g)}h=h.next}while(h!==u)}}function dl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Uc(n){var i=n.ref;if(i!==null){var a=n.stateNode;n.tag,n=a,typeof i=="function"?i(n):i.current=n}}function Zp(n){var i=n.alternate;i!==null&&(n.alternate=null,Zp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[mi],delete i[Do],delete i[qu],delete i[h0],delete i[p0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Jp(n){return n.tag===5||n.tag===3||n.tag===4}function Qp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Jp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ga));else if(u!==4&&(n=n.child,n!==null))for(Nc(n,i,a),n=n.sibling;n!==null;)Nc(n,i,a),n=n.sibling}function Ic(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Ic(n,i,a),n=n.sibling;n!==null;)Ic(n,i,a),n=n.sibling}var cn=null,ii=!1;function hr(n,i,a){for(a=a.child;a!==null;)em(n,i,a),a=a.sibling}function em(n,i,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(ot,a)}catch{}switch(a.tag){case 5:vn||Ds(a,i);case 6:var u=cn,h=ii;cn=null,hr(n,i,a),cn=u,ii=h,cn!==null&&(ii?(n=cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(ii?(n=cn,a=a.stateNode,n.nodeType===8?Yu(n.parentNode,a):n.nodeType===1&&Yu(n,a),So(n)):Yu(cn,a.stateNode));break;case 4:u=cn,h=ii,cn=a.stateNode.containerInfo,ii=!0,hr(n,i,a),cn=u,ii=h;break;case 0:case 11:case 14:case 15:if(!vn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&Dc(a,i,w),h=h.next}while(h!==u)}hr(n,i,a);break;case 1:if(!vn&&(Ds(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(U){Xt(a,i,U)}hr(n,i,a);break;case 21:hr(n,i,a);break;case 22:a.mode&1?(vn=(u=vn)||a.memoizedState!==null,hr(n,i,a),vn=u):hr(n,i,a);break;default:hr(n,i,a)}}function tm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new P0),i.forEach(function(u){var h=z0.bind(null,n,u);a.has(u)||(a.add(u),u.then(h,h))})}}function ri(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var g=n,w=i,U=w;e:for(;U!==null;){switch(U.tag){case 5:cn=U.stateNode,ii=!1;break e;case 3:cn=U.stateNode.containerInfo,ii=!0;break e;case 4:cn=U.stateNode.containerInfo,ii=!0;break e}U=U.return}if(cn===null)throw Error(t(160));em(g,w,h),cn=null,ii=!1;var z=h.alternate;z!==null&&(z.return=null),h.return=null}catch(ne){Xt(h,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)nm(i,n),i=i.sibling}function nm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ri(i,n),_i(n),u&4){try{Go(3,n,n.return),dl(3,n)}catch(Ye){Xt(n,n.return,Ye)}try{Go(5,n,n.return)}catch(Ye){Xt(n,n.return,Ye)}}break;case 1:ri(i,n),_i(n),u&512&&a!==null&&Ds(a,a.return);break;case 5:if(ri(i,n),_i(n),u&512&&a!==null&&Ds(a,a.return),n.flags&32){var h=n.stateNode;try{be(h,"")}catch(Ye){Xt(n,n.return,Ye)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,U=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&pt(h,g),Le(U,w);var ne=Le(U,g);for(w=0;w<z.length;w+=2){var Se=z[w],Me=z[w+1];Se==="style"?Ne(h,Me):Se==="dangerouslySetInnerHTML"?je(h,Me):Se==="children"?be(h,Me):b(h,Se,Me,ne)}switch(U){case"input":xt(h,g);break;case"textarea":T(h,g);break;case"select":var xe=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Fe=g.value;Fe!=null?tt(h,!!g.multiple,Fe,!1):xe!==!!g.multiple&&(g.defaultValue!=null?tt(h,!!g.multiple,g.defaultValue,!0):tt(h,!!g.multiple,g.multiple?[]:"",!1))}h[Do]=g}catch(Ye){Xt(n,n.return,Ye)}}break;case 6:if(ri(i,n),_i(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Ye){Xt(n,n.return,Ye)}}break;case 3:if(ri(i,n),_i(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{So(i.containerInfo)}catch(Ye){Xt(n,n.return,Ye)}break;case 4:ri(i,n),_i(n);break;case 13:ri(i,n),_i(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(kc=K())),u&4&&tm(n);break;case 22:if(Se=a!==null&&a.memoizedState!==null,n.mode&1?(vn=(ne=vn)||Se,ri(i,n),vn=ne):ri(i,n),_i(n),u&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!Se&&(n.mode&1)!==0)for(He=n,Se=n.child;Se!==null;){for(Me=He=Se;He!==null;){switch(xe=He,Fe=xe.child,xe.tag){case 0:case 11:case 14:case 15:Go(4,xe,xe.return);break;case 1:Ds(xe,xe.return);var Xe=xe.stateNode;if(typeof Xe.componentWillUnmount=="function"){u=xe,a=xe.return;try{i=u,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(Ye){Xt(u,a,Ye)}}break;case 5:Ds(xe,xe.return);break;case 22:if(xe.memoizedState!==null){sm(Me);continue}}Fe!==null?(Fe.return=xe,He=Fe):sm(Me)}Se=Se.sibling}e:for(Se=null,Me=n;;){if(Me.tag===5){if(Se===null){Se=Me;try{h=Me.stateNode,ne?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=Me.stateNode,z=Me.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=_e("display",w))}catch(Ye){Xt(n,n.return,Ye)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=ne?"":Me.memoizedProps}catch(Ye){Xt(n,n.return,Ye)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:ri(i,n),_i(n),u&4&&tm(n);break;case 21:break;default:ri(i,n),_i(n)}}function _i(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Jp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(be(h,""),u.flags&=-33);var g=Qp(n);Ic(n,g,h);break;case 3:case 4:var w=u.stateNode.containerInfo,U=Qp(n);Nc(n,U,w);break;default:throw Error(t(161))}}catch(z){Xt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function D0(n,i,a){He=n,im(n)}function im(n,i,a){for(var u=(n.mode&1)!==0;He!==null;){var h=He,g=h.child;if(h.tag===22&&u){var w=h.memoizedState!==null||fl;if(!w){var U=h.alternate,z=U!==null&&U.memoizedState!==null||vn;U=fl;var ne=vn;if(fl=w,(vn=z)&&!ne)for(He=h;He!==null;)w=He,z=w.child,w.tag===22&&w.memoizedState!==null?om(h):z!==null?(z.return=w,He=z):om(h);for(;g!==null;)He=g,im(g),g=g.sibling;He=h,fl=U,vn=ne}rm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,He=g):rm(n)}}function rm(n){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||dl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!vn)if(a===null)u.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:ni(i.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&sp(i,g,u);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}sp(i,w,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var Se=ne.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&So(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||i.flags&512&&Uc(i)}catch(xe){Xt(i,i.return,xe)}}if(i===n){He=null;break}if(a=i.sibling,a!==null){a.return=i.return,He=a;break}He=i.return}}function sm(n){for(;He!==null;){var i=He;if(i===n){He=null;break}var a=i.sibling;if(a!==null){a.return=i.return,He=a;break}He=i.return}}function om(n){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{dl(4,i)}catch(z){Xt(i,a,z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(z){Xt(i,h,z)}}var g=i.return;try{Uc(i)}catch(z){Xt(i,g,z)}break;case 5:var w=i.return;try{Uc(i)}catch(z){Xt(i,w,z)}}}catch(z){Xt(i,i.return,z)}if(i===n){He=null;break}var U=i.sibling;if(U!==null){U.return=i.return,He=U;break}He=i.return}}var U0=Math.ceil,hl=R.ReactCurrentDispatcher,Fc=R.ReactCurrentOwner,$n=R.ReactCurrentBatchConfig,Et=0,on=null,qt=null,fn=0,zn=0,Us=lr(0),Jt=0,Wo=null,Gr=0,pl=0,Oc=0,Xo=null,Un=null,kc=0,Ns=1/0,Ii=null,ml=!1,Bc=null,pr=null,gl=!1,mr=null,vl=0,jo=0,zc=null,_l=-1,xl=0;function wn(){return(Et&6)!==0?K():_l!==-1?_l:_l=K()}function gr(n){return(n.mode&1)===0?1:(Et&2)!==0&&fn!==0?fn&-fn:g0.transition!==null?(xl===0&&(xl=Nt()),xl):(n=St,n!==0||(n=window.event,n=n===void 0?16:lh(n.type)),n)}function si(n,i,a,u){if(50<jo)throw jo=0,zc=null,Error(t(185));nn(n,a,u),((Et&2)===0||n!==on)&&(n===on&&((Et&2)===0&&(pl|=a),Jt===4&&vr(n,fn)),Nn(n,u),a===1&&Et===0&&(i.mode&1)===0&&(Ns=K()+500,$a&&cr()))}function Nn(n,i){var a=n.callbackNode;En(n,i);var u=tn(n,n===on?fn:0);if(u===0)a!==null&&C(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&C(a),i===1)n.tag===0?m0(lm.bind(null,n)):$h(lm.bind(null,n)),f0(function(){(Et&6)===0&&cr()}),a=null;else{switch(pi(u)){case 1:a=we;break;case 4:a=De;break;case 16:a=ze;break;case 536870912:a=at;break;default:a=ze}a=gm(a,am.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function am(n,i){if(_l=-1,xl=0,(Et&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Is()&&n.callbackNode!==a)return null;var u=tn(n,n===on?fn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=yl(n,u);else{i=u;var h=Et;Et|=2;var g=cm();(on!==n||fn!==i)&&(Ii=null,Ns=K()+500,Xr(n,i));do try{F0();break}catch(U){um(n,U)}while(!0);rc(),hl.current=g,Et=h,qt!==null?i=0:(on=null,fn=0,i=Jt)}if(i!==0){if(i===2&&(h=Ai(n),h!==0&&(u=h,i=Hc(n,h))),i===1)throw a=Wo,Xr(n,0),vr(n,u),Nn(n,K()),a;if(i===6)vr(n,u);else{if(h=n.current.alternate,(u&30)===0&&!N0(h)&&(i=yl(n,u),i===2&&(g=Ai(n),g!==0&&(u=g,i=Hc(n,g))),i===1))throw a=Wo,Xr(n,0),vr(n,u),Nn(n,K()),a;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:jr(n,Un,Ii);break;case 3:if(vr(n,u),(u&130023424)===u&&(i=kc+500-K(),10<i)){if(tn(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){wn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=$u(jr.bind(null,n,Un,Ii),i);break}jr(n,Un,Ii);break;case 4:if(vr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var w=31-dt(u);g=1<<w,w=i[w],w>h&&(h=w),u&=~g}if(u=h,u=K()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*U0(u/1960))-u,10<u){n.timeoutHandle=$u(jr.bind(null,n,Un,Ii),u);break}jr(n,Un,Ii);break;case 5:jr(n,Un,Ii);break;default:throw Error(t(329))}}}return Nn(n,K()),n.callbackNode===a?am.bind(null,n):null}function Hc(n,i){var a=Xo;return n.current.memoizedState.isDehydrated&&(Xr(n,i).flags|=256),n=yl(n,i),n!==2&&(i=Un,Un=a,i!==null&&Vc(i)),n}function Vc(n){Un===null?Un=n:Un.push.apply(Un,n)}function N0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],g=h.getSnapshot;h=h.value;try{if(!ei(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vr(n,i){for(i&=~Oc,i&=~pl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-dt(i),u=1<<a;n[a]=-1,i&=~u}}function lm(n){if((Et&6)!==0)throw Error(t(327));Is();var i=tn(n,0);if((i&1)===0)return Nn(n,K()),null;var a=yl(n,i);if(n.tag!==0&&a===2){var u=Ai(n);u!==0&&(i=u,a=Hc(n,u))}if(a===1)throw a=Wo,Xr(n,0),vr(n,i),Nn(n,K()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,jr(n,Un,Ii),Nn(n,K()),null}function Gc(n,i){var a=Et;Et|=1;try{return n(i)}finally{Et=a,Et===0&&(Ns=K()+500,$a&&cr())}}function Wr(n){mr!==null&&mr.tag===0&&(Et&6)===0&&Is();var i=Et;Et|=1;var a=$n.transition,u=St;try{if($n.transition=null,St=1,n)return n()}finally{St=u,$n.transition=a,Et=i,(Et&6)===0&&cr()}}function Wc(){zn=Us.current,kt(Us)}function Xr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,c0(a)),qt!==null)for(a=qt.return;a!==null;){var u=a;switch(Qu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Xa();break;case 3:Ps(),kt(Pn),kt(pn),dc();break;case 5:cc(u);break;case 4:Ps();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:sc(u.type._context);break;case 22:case 23:Wc()}a=a.return}if(on=n,qt=n=_r(n.current,null),fn=zn=i,Jt=0,Wo=null,Oc=pl=Gr=0,Un=Xo=null,zr!==null){for(i=0;i<zr.length;i++)if(a=zr[i],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,g=a.pending;if(g!==null){var w=g.next;g.next=h,u.next=w}a.pending=u}zr=null}return n}function um(n,i){do{var a=qt;try{if(rc(),il.current=al,rl){for(var u=Vt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}rl=!1}if(Vr=0,sn=Zt=Vt=null,ko=!1,Bo=0,Fc.current=null,a===null||a.return===null){Jt=1,Wo=i,qt=null;break}e:{var g=n,w=a.return,U=a,z=i;if(i=fn,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ne=z,Se=U,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Fe=Np(w);if(Fe!==null){Fe.flags&=-257,Ip(Fe,w,U,g,i),Fe.mode&1&&Up(g,ne,i),i=Fe,z=ne;var Xe=i.updateQueue;if(Xe===null){var Ye=new Set;Ye.add(z),i.updateQueue=Ye}else Xe.add(z);break e}else{if((i&1)===0){Up(g,ne,i),Xc();break e}z=Error(t(426))}}else if(zt&&U.mode&1){var Yt=Np(w);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Ip(Yt,w,U,g,i),nc(Ls(z,U));break e}}g=z=Ls(z,U),Jt!==4&&(Jt=2),Xo===null?Xo=[g]:Xo.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var q=Lp(g,z,i);rp(g,q);break e;case 1:U=z;var G=g.type,Z=g.stateNode;if((g.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(pr===null||!pr.has(Z)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ce=Dp(g,U,i);rp(g,Ce);break e}}g=g.return}while(g!==null)}dm(a)}catch(Ze){i=Ze,qt===a&&a!==null&&(qt=a=a.return);continue}break}while(!0)}function cm(){var n=hl.current;return hl.current=al,n===null?al:n}function Xc(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),on===null||(Gr&268435455)===0&&(pl&268435455)===0||vr(on,fn)}function yl(n,i){var a=Et;Et|=2;var u=cm();(on!==n||fn!==i)&&(Ii=null,Xr(n,i));do try{I0();break}catch(h){um(n,h)}while(!0);if(rc(),Et=a,hl.current=u,qt!==null)throw Error(t(261));return on=null,fn=0,Jt}function I0(){for(;qt!==null;)fm(qt)}function F0(){for(;qt!==null&&!j();)fm(qt)}function fm(n){var i=mm(n.alternate,n,zn);n.memoizedProps=n.pendingProps,i===null?dm(n):qt=i,Fc.current=null}function dm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=C0(a,i,zn),a!==null){qt=a;return}}else{if(a=b0(a,i),a!==null){a.flags&=32767,qt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=n}while(i!==null);Jt===0&&(Jt=5)}function jr(n,i,a){var u=St,h=$n.transition;try{$n.transition=null,St=1,O0(n,i,a,u)}finally{$n.transition=h,St=u}return null}function O0(n,i,a,u){do Is();while(mr!==null);if((Et&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(un(n,g),n===on&&(qt=on=null,fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||gl||(gl=!0,gm(ze,function(){return Is(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=$n.transition,$n.transition=null;var w=St;St=1;var U=Et;Et|=4,Fc.current=null,L0(n,a),nm(a,n),i0(Xu),La=!!Wu,Xu=Wu=null,n.current=a,D0(a),re(),Et=U,St=w,$n.transition=g}else n.current=a;if(gl&&(gl=!1,mr=n,vl=h),g=n.pendingLanes,g===0&&(pr=null),mt(a.stateNode),Nn(n,K()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(ml)throw ml=!1,n=Bc,Bc=null,n;return(vl&1)!==0&&n.tag!==0&&Is(),g=n.pendingLanes,(g&1)!==0?n===zc?jo++:(jo=0,zc=n):jo=0,cr(),null}function Is(){if(mr!==null){var n=pi(vl),i=$n.transition,a=St;try{if($n.transition=null,St=16>n?16:n,mr===null)var u=!1;else{if(n=mr,mr=null,vl=0,(Et&6)!==0)throw Error(t(331));var h=Et;for(Et|=4,He=n.current;He!==null;){var g=He,w=g.child;if((He.flags&16)!==0){var U=g.deletions;if(U!==null){for(var z=0;z<U.length;z++){var ne=U[z];for(He=ne;He!==null;){var Se=He;switch(Se.tag){case 0:case 11:case 15:Go(8,Se,g)}var Me=Se.child;if(Me!==null)Me.return=Se,He=Me;else for(;He!==null;){Se=He;var xe=Se.sibling,Fe=Se.return;if(Zp(Se),Se===ne){He=null;break}if(xe!==null){xe.return=Fe,He=xe;break}He=Fe}}}var Xe=g.alternate;if(Xe!==null){var Ye=Xe.child;if(Ye!==null){Xe.child=null;do{var Yt=Ye.sibling;Ye.sibling=null,Ye=Yt}while(Ye!==null)}}He=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,He=w;else e:for(;He!==null;){if(g=He,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Go(9,g,g.return)}var q=g.sibling;if(q!==null){q.return=g.return,He=q;break e}He=g.return}}var G=n.current;for(He=G;He!==null;){w=He;var Z=w.child;if((w.subtreeFlags&2064)!==0&&Z!==null)Z.return=w,He=Z;else e:for(w=G;He!==null;){if(U=He,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:dl(9,U)}}catch(Ze){Xt(U,U.return,Ze)}if(U===w){He=null;break e}var Ce=U.sibling;if(Ce!==null){Ce.return=U.return,He=Ce;break e}He=U.return}}if(Et=h,cr(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(ot,n)}catch{}u=!0}return u}finally{St=a,$n.transition=i}}return!1}function hm(n,i,a){i=Ls(a,i),i=Lp(n,i,1),n=dr(n,i,1),i=wn(),n!==null&&(nn(n,1,i),Nn(n,i))}function Xt(n,i,a){if(n.tag===3)hm(n,n,a);else for(;i!==null;){if(i.tag===3){hm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(pr===null||!pr.has(u))){n=Ls(a,n),n=Dp(i,n,1),i=dr(i,n,1),n=wn(),i!==null&&(nn(i,1,n),Nn(i,n));break}}i=i.return}}function k0(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=wn(),n.pingedLanes|=n.suspendedLanes&a,on===n&&(fn&a)===a&&(Jt===4||Jt===3&&(fn&130023424)===fn&&500>K()-kc?Xr(n,0):Oc|=a),Nn(n,i)}function pm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Lt,Lt<<=1,(Lt&130023424)===0&&(Lt=4194304)));var a=wn();n=Di(n,i),n!==null&&(nn(n,i,a),Nn(n,a))}function B0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),pm(n,a)}function z0(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),pm(n,a)}var mm;mm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Pn.current)Dn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Dn=!1,A0(n,i,a);Dn=(n.flags&131072)!==0}else Dn=!1,zt&&(i.flags&1048576)!==0&&Yh(i,qa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;cl(n,i),n=i.pendingProps;var h=Ms(i,pn.current);bs(i,a),h=mc(null,i,u,n,h,a);var g=gc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(u)?(g=!0,ja(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,lc(i),h.updater=ll,i.stateNode=h,h._reactInternals=i,Ec(i,u,n,a),i=Rc(null,i,u,!0,g,a)):(i.tag=0,zt&&g&&Ju(i),Mn(null,i,h,a),i=i.child),i;case 16:u=i.elementType;e:{switch(cl(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=V0(u),n=ni(u,n),h){case 0:i=Tc(null,i,u,n,a);break e;case 1:i=Hp(null,i,u,n,a);break e;case 11:i=Fp(null,i,u,n,a);break e;case 14:i=Op(null,i,u,ni(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:ni(u,h),Tc(n,i,u,h,a);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:ni(u,h),Hp(n,i,u,h,a);case 3:e:{if(Vp(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,h=g.element,ip(n,i),tl(i,u,null,a);var w=i.memoizedState;if(u=w.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Ls(Error(t(423)),i),i=Gp(n,i,u,a,h);break e}else if(u!==h){h=Ls(Error(t(424)),i),i=Gp(n,i,u,a,h);break e}else for(Bn=ar(i.stateNode.containerInfo.firstChild),kn=i,zt=!0,ti=null,a=tp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),u===h){i=Ni(n,i,a);break e}Mn(n,i,u,a)}i=i.child}return i;case 5:return op(i),n===null&&tc(i),u=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,w=h.children,ju(u,h)?w=null:g!==null&&ju(u,g)&&(i.flags|=32),zp(n,i),Mn(n,i,w,a),i.child;case 6:return n===null&&tc(i),null;case 13:return Wp(n,i,a);case 4:return uc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=As(i,null,u,a):Mn(n,i,u,a),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:ni(u,h),Fp(n,i,u,h,a);case 7:return Mn(n,i,i.pendingProps,a),i.child;case 8:return Mn(n,i,i.pendingProps.children,a),i.child;case 12:return Mn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,g=i.memoizedProps,w=h.value,Ft(Ja,u._currentValue),u._currentValue=w,g!==null)if(ei(g.value,w)){if(g.children===h.children&&!Pn.current){i=Ni(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var U=g.dependencies;if(U!==null){w=g.child;for(var z=U.firstContext;z!==null;){if(z.context===u){if(g.tag===1){z=Ui(-1,a&-a),z.tag=2;var ne=g.updateQueue;if(ne!==null){ne=ne.shared;var Se=ne.pending;Se===null?z.next=z:(z.next=Se.next,Se.next=z),ne.pending=z}}g.lanes|=a,z=g.alternate,z!==null&&(z.lanes|=a),oc(g.return,a,i),U.lanes|=a;break}z=z.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),oc(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Mn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,bs(i,a),h=Xn(h),u=u(h),i.flags|=1,Mn(n,i,u,a),i.child;case 14:return u=i.type,h=ni(u,i.pendingProps),h=ni(u.type,h),Op(n,i,u,h,a);case 15:return kp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:ni(u,h),cl(n,i),i.tag=1,Ln(u)?(n=!0,ja(i)):n=!1,bs(i,a),bp(i,u,h),Ec(i,u,h,a),Rc(null,i,u,!0,n,a);case 19:return jp(n,i,a);case 22:return Bp(n,i,a)}throw Error(t(156,i.tag))};function gm(n,i){return Ca(n,i)}function H0(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(n,i,a,u){return new H0(n,i,a,u)}function jc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function V0(n){if(typeof n=="function")return jc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ue)return 11;if(n===me)return 14}return 2}function _r(n,i){var a=n.alternate;return a===null?(a=Yn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Sl(n,i,a,u,h,g){var w=2;if(u=n,typeof n=="function")jc(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case F:return $r(a.children,h,g,i);case W:w=8,h|=8;break;case P:return n=Yn(12,a,i,h|2),n.elementType=P,n.lanes=g,n;case Q:return n=Yn(13,a,i,h),n.elementType=Q,n.lanes=g,n;case ae:return n=Yn(19,a,i,h),n.elementType=ae,n.lanes=g,n;case ve:return El(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:w=10;break e;case B:w=9;break e;case ue:w=11;break e;case me:w=14;break e;case te:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Yn(w,a,i,h),i.elementType=n,i.type=u,i.lanes=g,i}function $r(n,i,a,u){return n=Yn(7,n,u,i),n.lanes=a,n}function El(n,i,a,u){return n=Yn(22,n,u,i),n.elementType=ve,n.lanes=a,n.stateNode={isHidden:!1},n}function $c(n,i,a){return n=Yn(6,n,null,i),n.lanes=a,n}function Yc(n,i,a){return i=Yn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function G0(n,i,a,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function qc(n,i,a,u,h,g,w,U,z){return n=new G0(n,i,a,U,z),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Yn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},lc(g),n}function W0(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function vm(n){if(!n)return ur;n=n._reactInternals;e:{if(hi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ln(a))return Xh(n,a,i)}return i}function _m(n,i,a,u,h,g,w,U,z){return n=qc(a,u,!0,n,h,g,w,U,z),n.context=vm(null),a=n.current,u=wn(),h=gr(a),g=Ui(u,h),g.callback=i??null,dr(a,g,h),n.current.lanes=h,nn(n,h,u),Nn(n,u),n}function Ml(n,i,a,u){var h=i.current,g=wn(),w=gr(h);return a=vm(a),i.context===null?i.context=a:i.pendingContext=a,i=Ui(g,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=dr(h,i,w),n!==null&&(si(n,h,w,g),el(n,h,w)),w}function wl(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function xm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Kc(n,i){xm(n,i),(n=n.alternate)&&xm(n,i)}function X0(){return null}var ym=typeof reportError=="function"?reportError:function(n){console.error(n)};function Zc(n){this._internalRoot=n}Tl.prototype.render=Zc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ml(n,i,null,null)},Tl.prototype.unmount=Zc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Wr(function(){Ml(null,n,null,null)}),i[Ci]=null}};function Tl(n){this._internalRoot=n}Tl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ih();n={blockedOn:null,target:n,priority:i};for(var a=0;a<rr.length&&i!==0&&i<rr[a].priority;a++);rr.splice(a,0,n),a===0&&oh(n)}};function Jc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Sm(){}function j0(n,i,a,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var ne=wl(w);g.call(ne)}}var w=_m(i,u,n,0,null,!1,!1,"",Sm);return n._reactRootContainer=w,n[Ci]=w.current,Po(n.nodeType===8?n.parentNode:n),Wr(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var U=u;u=function(){var ne=wl(z);U.call(ne)}}var z=qc(n,0,!1,null,null,!1,!1,"",Sm);return n._reactRootContainer=z,n[Ci]=z.current,Po(n.nodeType===8?n.parentNode:n),Wr(function(){Ml(i,z,a,u)}),z}function Al(n,i,a,u,h){var g=a._reactRootContainer;if(g){var w=g;if(typeof h=="function"){var U=h;h=function(){var z=wl(w);U.call(z)}}Ml(i,w,n,h)}else w=j0(a,i,n,h,u);return wl(w)}th=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=gt(i.pendingLanes);a!==0&&(rn(i,a|1),Nn(i,K()),(Et&6)===0&&(Ns=K()+500,cr()))}break;case 13:Wr(function(){var u=Di(n,1);if(u!==null){var h=wn();si(u,n,1,h)}}),Kc(n,1)}},Mu=function(n){if(n.tag===13){var i=Di(n,134217728);if(i!==null){var a=wn();si(i,n,134217728,a)}Kc(n,134217728)}},nh=function(n){if(n.tag===13){var i=gr(n),a=Di(n,i);if(a!==null){var u=wn();si(a,n,i,u)}Kc(n,i)}},ih=function(){return St},rh=function(n,i){var a=St;try{return St=n,i()}finally{St=a}},Te=function(n,i,a){switch(i){case"input":if(xt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var h=Wa(u);if(!h)throw Error(t(90));Rt(u),xt(u,h)}}}break;case"textarea":T(n,a);break;case"select":i=a.value,i!=null&&tt(n,!!a.multiple,i,!1)}},et=Gc,Pt=Wr;var $0={usingClientEntryPoint:!1,Events:[Uo,Ss,Wa,he,Ie,Gc]},$o={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Y0={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ra(n),n===null?null:n.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||X0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{ot=Cl.inject(Y0),We=Cl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$0,In.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jc(i))throw Error(t(200));return W0(n,i,null,a)},In.createRoot=function(n,i){if(!Jc(n))throw Error(t(299));var a=!1,u="",h=ym;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=qc(n,1,!1,null,null,a,!1,u,h),n[Ci]=i.current,Po(n.nodeType===8?n.parentNode:n),new Zc(i)},In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ra(i),n=n===null?null:n.stateNode,n},In.flushSync=function(n){return Wr(n)},In.hydrate=function(n,i,a){if(!Rl(i))throw Error(t(200));return Al(null,n,i,!0,a)},In.hydrateRoot=function(n,i,a){if(!Jc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,h=!1,g="",w=ym;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=_m(i,null,n,1,a??null,h,!1,g,w),n[Ci]=i.current,Po(n),u)for(n=0;n<u.length;n++)a=u[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Tl(i)},In.render=function(n,i,a){if(!Rl(i))throw Error(t(200));return Al(null,n,i,!1,a)},In.unmountComponentAtNode=function(n){if(!Rl(n))throw Error(t(40));return n._reactRootContainer?(Wr(function(){Al(null,null,n,!1,function(){n._reactRootContainer=null,n[Ci]=null})}),!0):!1},In.unstable_batchedUpdates=Gc,In.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Rl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Al(n,i,a,!1,u)},In.version="18.3.1-next-f1338f8080-20240426",In}var bm;function nx(){if(bm)return tf.exports;bm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),tf.exports=tx(),tf.exports}var Pm;function ix(){if(Pm)return bl;Pm=1;var r=nx();return bl.createRoot=r.createRoot,bl.hydrateRoot=r.hydrateRoot,bl}var rx=ix();const sx=ev(rx);var Dd=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,nv=/^[\\/]{2}/;function ox(r,e){return e+r.replace(/\\/g,"/")}var Lm="popstate";function Dm(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function ax(r={}){function e(s,o){let l=o.state?.masked,{pathname:c,search:f,hash:d}=l||s.location;return Hf("",{pathname:c,search:f,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default",l?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function t(s,o){return typeof o=="string"?o:oa(o)}return ux(e,t,null,r)}function Gt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Mi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lx(){return Math.random().toString(36).substring(2,10)}function Um(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Hf(r,e,t=null,s,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?uo(e):e,state:t,key:e&&e.key||s||lx(),mask:o}}function oa({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function uo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function ux(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,f="POP",d=null,p=m();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function m(){return(c.state||{idx:null}).idx}function v(){f="POP";let _=m(),y=_==null?null:_-p;p=_,d&&d({action:f,location:M.location,delta:y})}function x(_,y){f="PUSH";let L=Dm(_)?_:Hf(M.location,_,y);p=m()+1;let b=Um(L,p),R=M.createHref(L.mask||L);try{c.pushState(b,"",R)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;o.location.assign(R)}l&&d&&d({action:f,location:M.location,delta:1})}function S(_,y){f="REPLACE";let L=Dm(_)?_:Hf(M.location,_,y);p=m();let b=Um(L,p),R=M.createHref(L.mask||L);c.replaceState(b,"",R),l&&d&&d({action:f,location:M.location,delta:0})}function E(_){return cx(o,_)}let M={get action(){return f},get location(){return r(o,c)},listen(_){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(Lm,v),d=_,()=>{o.removeEventListener(Lm,v),d=null}},createHref(_){return e(o,_)},createURL:E,encodeLocation(_){let y=E(_);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:x,replace:S,go(_){return c.go(_)}};return M}function cx(r,e,t=!1){let s="http://localhost";r&&(s=r.location.origin!=="null"?r.location.origin:r.location.href),Gt(s,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:oa(e);return o=o.replace(/ $/,"%20"),!t&&nv.test(o)&&(o=s+o),new URL(o,s)}function iv(r,e,t="/"){return fx(r,e,t,!1)}function fx(r,e,t,s,o){let l=typeof e=="string"?uo(e):e,c=Yi(l.pathname||"/",t);if(c==null)return null;let f=dx(r),d=null,p=Mx(c);for(let m=0;d==null&&m<f.length;++m)d=Ex(f[m],p,s);return d}function dx(r){let e=rv(r);return hx(e),e}function rv(r,e=[],t=[],s="",o=!1){let l=(c,f,d=o,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(s)&&d)return;Gt(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length)}let v=fi([s,m.relativePath]),x=t.concat(m);c.children&&c.children.length>0&&(Gt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),rv(c.children,e,x,v,d)),!(c.path==null&&!c.index)&&e.push({path:v,score:yx(v,c.index),routesMeta:x.map((S,E)=>{let[M,_]=av(S.relativePath,S.caseSensitive,E===x.length-1);return{...S,matcher:M,compiledParams:_}})})};return r.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let d of sv(c.path))l(c,f,!0,d)}),e}function sv(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=sv(s.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),o&&f.push(...c),f.map(d=>r.startsWith("/")&&d===""?"/":d)}function hx(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Sx(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var px=/^:[\w-]+$/,mx=3,gx=2,vx=1,_x=10,xx=-2,Nm=r=>r==="*";function yx(r,e){let t=r.split("/"),s=t.length;return t.some(Nm)&&(s+=xx),e&&(s+=gx),t.filter(o=>!Nm(o)).reduce((o,l)=>o+(px.test(l)?mx:l===""?vx:_x),s)}function Sx(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function Ex(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",c=[];for(let f=0;f<s.length;++f){let d=s[f],p=f===s.length-1,m=l==="/"?e:e.slice(l.length)||"/",v={path:d.relativePath,caseSensitive:d.caseSensitive,end:p},x=d.matcher&&d.compiledParams?ov(v,m,d.matcher,d.compiledParams):lu(v,m),S=d.route;if(!x&&p&&t&&!s[s.length-1].route.index&&(x=lu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!x)return null;Object.assign(o,x.params),c.push({params:o,pathname:fi([l,x.pathname]),pathnameBase:Rx(fi([l,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(l=fi([l,x.pathnameBase]))}return c}function lu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=av(r.path,r.caseSensitive,r.end);return ov(r,e,t,s)}function ov(r,e,t,s){let o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((p,{paramName:m,isOptional:v},x)=>{if(m==="*"){let E=f[x]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[x];return v&&!S?p[m]=void 0:p[m]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function av(r,e=!1,t=!0){Mi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d,p,m)=>{if(s.push({paramName:f,isOptional:d!=null}),d){let v=m.charAt(p+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Mx(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Yi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function wx(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?uo(r):r,l;return t?(t=uv(t),t.startsWith("/")?l=Im(t.substring(1),"/"):l=Im(t,e)):l=e,{pathname:l,search:Ax(s),hash:Cx(o)}}function Im(r,e){let t=uu(e).split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function sf(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Tx(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function lv(r){let e=Tx(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Ud(r,e,t,s=!1){let o;typeof r=="string"?o=uo(r):(o={...r},Gt(!o.pathname||!o.pathname.includes("?"),sf("?","pathname","search",o)),Gt(!o.pathname||!o.pathname.includes("#"),sf("#","pathname","hash",o)),Gt(!o.search||!o.search.includes("#"),sf("#","search","hash",o)));let l=r===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let v=e.length-1;if(!s&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),v-=1;o.pathname=x.join("/")}f=v>=0?e[v]:"/"}let d=wx(o,f),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(p||m)&&(d.pathname+="/"),d}var uv=r=>r.replace(/[\\/]{2,}/g,"/"),fi=r=>uv(r.join("/")),uu=r=>r.replace(/\/+$/,""),Rx=r=>uu(r).replace(/^\/*/,"/"),Ax=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Cx=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,bx=class{constructor(r,e,t,s=!1){this.status=r,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Px(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Lx(r){let e=r.map(t=>t.route.path).filter(Boolean);return fi(e)||"/"}var cv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function fv(r,e){let t=r;if(typeof t!="string"||!Dd.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,o=!1;if(cv)try{let l=new URL(window.location.href),c=nv.test(t)?new URL(ox(t,l.protocol)):new URL(t),f=Yi(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:o=!0}catch{Mi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var dv=["POST","PUT","PATCH","DELETE"];new Set(dv);var Dx=["GET",...dv];new Set(Dx);var Ux=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Nx(r){try{return Ux.includes(new URL(r).protocol)}catch{return!1}}var co=X.createContext(null);co.displayName="DataRouter";var pu=X.createContext(null);pu.displayName="DataRouterState";var hv=X.createContext(!1);function Ix(){return X.useContext(hv)}var pv=X.createContext({isTransitioning:!1});pv.displayName="ViewTransition";var Fx=X.createContext(new Map);Fx.displayName="Fetchers";var Ox=X.createContext(null);Ox.displayName="Await";var Qn=X.createContext(null);Qn.displayName="Navigation";var ma=X.createContext(null);ma.displayName="Location";var Ki=X.createContext({outlet:null,matches:[],isDataRoute:!1});Ki.displayName="Route";var Nd=X.createContext(null);Nd.displayName="RouteError";var mv="REACT_ROUTER_ERROR",kx="REDIRECT",Bx="ROUTE_ERROR_RESPONSE";function zx(r){if(r.startsWith(`${mv}:${kx}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Hx(r){if(r.startsWith(`${mv}:${Bx}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new bx(e.status,e.statusText,e.data)}catch{}}function Vx(r,{relative:e}={}){Gt(ga(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=X.useContext(Qn),{hash:o,pathname:l,search:c}=va(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:fi([t,l])),s.createHref({pathname:f,search:c,hash:o})}function ga(){return X.useContext(ma)!=null}function Zi(){return Gt(ga(),"useLocation() may be used only in the context of a <Router> component."),X.useContext(ma).location}var gv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vv(r){X.useContext(Qn).static||X.useLayoutEffect(r)}function Gx(){let{isDataRoute:r}=X.useContext(Ki);return r?ny():Wx()}function Wx(){Gt(ga(),"useNavigate() may be used only in the context of a <Router> component.");let r=X.useContext(co),{basename:e,navigator:t}=X.useContext(Qn),{matches:s}=X.useContext(Ki),{pathname:o}=Zi(),l=JSON.stringify(lv(s)),c=X.useRef(!1);return vv(()=>{c.current=!0}),X.useCallback((d,p={})=>{if(Mi(c.current,gv),!c.current)return;if(typeof d=="number"){t.go(d);return}let m=Ud(d,JSON.parse(l),o,p.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:fi([e,m.pathname])),(p.replace?t.replace:t.push)(m,p.state,p)},[e,t,l,o,r])}X.createContext(null);function va(r,{relative:e}={}){let{matches:t}=X.useContext(Ki),{pathname:s}=Zi(),o=JSON.stringify(lv(t));return X.useMemo(()=>Ud(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function Xx(r,e){return _v(r,e)}function _v(r,e,t){Gt(ga(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=X.useContext(Qn),{matches:o}=X.useContext(Ki),l=o[o.length-1],c=l?l.params:{},f=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let _=p&&p.path||"";yv(f,!p||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let m=Zi(),v;if(e){let _=typeof e=="string"?uo(e):e;Gt(d==="/"||_.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=m;let x=v.pathname||"/",S=x;if(d!=="/"){let _=d.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(_.length).join("/")}let E=t&&t.state.matches.length?t.state.matches.map(_=>Object.assign(_,{route:t.manifest[_.route.id]||_.route})):iv(r,{pathname:S});Mi(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Mi(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=Kx(E&&E.map(_=>Object.assign({},_,{params:Object.assign({},c,_.params),pathname:fi([d,s.encodeLocation?s.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?d:fi([d,s.encodeLocation?s.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),o,t);return e&&M?X.createElement(ma.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},M):M}function jx(){let r=ty(),e=Px(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=X.createElement(X.Fragment,null,X.createElement("p",null,"💿 Hey developer 👋"),X.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",X.createElement("code",{style:l},"ErrorBoundary")," or"," ",X.createElement("code",{style:l},"errorElement")," prop on your route.")),X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),t?X.createElement("pre",{style:o},t):null,c)}var $x=X.createElement(jx,null),xv=class extends X.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=Hx(r.digest);t&&(r=t)}let e=r!==void 0?X.createElement(Ki.Provider,{value:this.props.routeContext},X.createElement(Nd.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?X.createElement(Yx,{error:r},e):e}};xv.contextType=hv;var of=new WeakMap;function Yx({children:r,error:e}){let{basename:t}=X.useContext(Qn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=zx(e.digest);if(s){let o=of.get(e);if(o)throw o;let l=fv(s.location,t),c=l.absoluteURL||l.to;if(Nx(c))throw new Error("Invalid redirect location");if(cv&&!of.get(e))if(l.isExternal||s.reloadDocument)window.location.href=c;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw of.set(e,f),f}return X.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return r}function qx({routeContext:r,match:e,children:t}){let s=X.useContext(co);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),X.createElement(Ki.Provider,{value:r},t)}function Kx(r,e=[],t){let s=t?.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let o=r,l=s?.errors;if(l!=null){let m=o.findIndex(v=>v.route.id&&l?.[v.route.id]!==void 0);Gt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let c=!1,f=-1;if(t&&s){c=s.renderFallback;for(let m=0;m<o.length;m++){let v=o[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=m),v.route.id){let{loaderData:x,errors:S}=s,E=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(c=!0),f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}}let d=t?.onError,p=s&&d?(m,v)=>{d(m,{location:s.location,params:s.matches?.[0]?.params??{},pattern:Lx(s.matches),errorInfo:v})}:void 0;return o.reduceRight((m,v,x)=>{let S,E=!1,M=null,_=null;s&&(S=l&&v.route.id?l[v.route.id]:void 0,M=v.route.errorElement||$x,c&&(f<0&&x===0?(yv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,_=null):f===x&&(E=!0,_=v.route.hydrateFallbackElement||null)));let y=e.concat(o.slice(0,x+1)),L=()=>{let b;return S?b=M:E?b=_:v.route.Component?b=X.createElement(v.route.Component,null):v.route.element?b=v.route.element:b=m,X.createElement(qx,{match:v,routeContext:{outlet:m,matches:y,isDataRoute:s!=null},children:b})};return s&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?X.createElement(xv,{location:s.location,revalidation:s.revalidation,component:M,error:S,children:L(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:p}):L()},null)}function Id(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zx(r){let e=X.useContext(co);return Gt(e,Id(r)),e}function Jx(r){let e=X.useContext(pu);return Gt(e,Id(r)),e}function Qx(r){let e=X.useContext(Ki);return Gt(e,Id(r)),e}function Fd(r){let e=Qx(r),t=e.matches[e.matches.length-1];return Gt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function ey(){return Fd("useRouteId")}function ty(){let r=X.useContext(Nd),e=Jx("useRouteError"),t=Fd("useRouteError");return r!==void 0?r:e.errors?.[t]}function ny(){let{router:r}=Zx("useNavigate"),e=Fd("useNavigate"),t=X.useRef(!1);return vv(()=>{t.current=!0}),X.useCallback(async(o,l={})=>{Mi(t.current,gv),t.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var Fm={};function yv(r,e,t){!e&&!Fm[r]&&(Fm[r]=!0,Mi(!1,t))}X.memo(iy);function iy({routes:r,manifest:e,future:t,state:s,isStatic:o,onError:l}){return _v(r,void 0,{manifest:e,state:s,isStatic:o,onError:l})}function Vf(r){Gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ry({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1,useTransitions:c}){Gt(!ga(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),d=X.useMemo(()=>({basename:f,navigator:o,static:l,useTransitions:c,future:{}}),[f,o,l,c]);typeof t=="string"&&(t=uo(t));let{pathname:p="/",search:m="",hash:v="",state:x=null,key:S="default",mask:E}=t,M=X.useMemo(()=>{let _=Yi(p,f);return _==null?null:{location:{pathname:_,search:m,hash:v,state:x,key:S,mask:E},navigationType:s}},[f,p,m,v,x,S,s,E]);return Mi(M!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:X.createElement(Qn.Provider,{value:d},X.createElement(ma.Provider,{children:e,value:M}))}function sy({children:r,location:e}){return Xx(Gf(r),e)}function Gf(r,e=[]){let t=[];return X.Children.forEach(r,(s,o)=>{if(!X.isValidElement(s))return;let l=[...e,o];if(s.type===X.Fragment){t.push.apply(t,Gf(s.props.children,l));return}Gt(s.type===Vf,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Gt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Gf(s.props.children,l)),t.push(c)}),t}var eu="get",tu="application/x-www-form-urlencoded";function mu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function oy(r){return mu(r)&&r.tagName.toLowerCase()==="button"}function ay(r){return mu(r)&&r.tagName.toLowerCase()==="form"}function ly(r){return mu(r)&&r.tagName.toLowerCase()==="input"}function uy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function cy(r,e){return r.button===0&&(!e||e==="_self")&&!uy(r)}var Pl=null;function fy(){if(Pl===null)try{new FormData(document.createElement("form"),0),Pl=!1}catch{Pl=!0}return Pl}var dy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function af(r){return r!=null&&!dy.has(r)?(Mi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tu}"`),null):r}function hy(r,e){let t,s,o,l,c;if(ay(r)){let f=r.getAttribute("action");s=f?Yi(f,e):null,t=r.getAttribute("method")||eu,o=af(r.getAttribute("enctype"))||tu,l=new FormData(r)}else if(oy(r)||ly(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=r.getAttribute("formaction")||f.getAttribute("action");if(s=d?Yi(d,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||eu,o=af(r.getAttribute("formenctype"))||af(f.getAttribute("enctype"))||tu,l=new FormData(f,r),!fy()){let{name:p,type:m,value:v}=r;if(m==="image"){let x=p?`${p}.`:"";l.append(`${x}x`,"0"),l.append(`${x}y`,"0")}else p&&l.append(p,v)}}else{if(mu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=eu,s=null,o=tu,c=r}return l&&o==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Od(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Sv(r,e,t,s){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${s}`:o.pathname=`${o.pathname}.${s}`:o.pathname==="/"?o.pathname=`_root.${s}`:e&&Yi(o.pathname,e)==="/"?o.pathname=`${uu(e)}/_root.${s}`:o.pathname=`${uu(o.pathname)}.${s}`,o}async function py(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function my(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function gy(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await py(l,t);return c.links?c.links():[]}return[]}));return yy(s.flat(1).filter(my).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Om(r,e,t,s,o,l){let c=(d,p)=>t[p]?d.route.id!==t[p].route.id:!0,f=(d,p)=>t[p].pathname!==d.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==d.params["*"];return l==="assets"?e.filter((d,p)=>c(d,p)||f(d,p)):l==="data"?e.filter((d,p)=>{let m=s.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(c(d,p)||f(d,p))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function vy(r,e,{includeHydrateFallback:t}={}){return _y(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function _y(r){return[...new Set(r)]}function xy(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function yy(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(xy(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function kd(){let r=X.useContext(co);return Od(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Sy(){let r=X.useContext(pu);return Od(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Bd=X.createContext(void 0);Bd.displayName="FrameworkContext";function gu(){let r=X.useContext(Bd);return Od(r,"You must render this element inside a <HydratedRouter> element"),r}function Ey(r,e){let t=X.useContext(Bd),[s,o]=X.useState(!1),[l,c]=X.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=e,x=X.useRef(null);X.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let M=y=>{y.forEach(L=>{c(L.isIntersecting)})},_=new IntersectionObserver(M,{threshold:.5});return x.current&&_.observe(x.current),()=>{_.disconnect()}}},[r]),X.useEffect(()=>{if(s){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[s]);let S=()=>{o(!0)},E=()=>{o(!1),c(!1)};return t?r!=="intent"?[l,x,{}]:[l,x,{onFocus:qo(f,S),onBlur:qo(d,E),onMouseEnter:qo(p,S),onMouseLeave:qo(m,E),onTouchStart:qo(v,S)}]:[!1,x,{}]}function qo(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function My({page:r,...e}){let t=Ix(),{nonce:s}=gu(),{router:o}=kd(),l=X.useMemo(()=>iv(o.routes,r,o.basename),[o.routes,r,o.basename]);return l?(e.nonce==null&&s&&(e={...e,nonce:s}),t?X.createElement(Ty,{page:r,matches:l,...e}):X.createElement(Ry,{page:r,matches:l,...e})):null}function wy(r){let{manifest:e,routeModules:t}=gu(),[s,o]=X.useState([]);return X.useEffect(()=>{let l=!1;return gy(r,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[r,e,t]),s}function Ty({page:r,matches:e,...t}){let s=Zi(),{future:o}=gu(),{basename:l}=kd(),c=X.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let f=Sv(r,l,o.v8_trailingSlashAwareDataRequests,"rsc"),d=!1,p=[];for(let m of e)typeof m.route.shouldRevalidate=="function"?d=!0:p.push(m.route.id);return d&&p.length>0&&f.searchParams.set("_routes",p.join(",")),[f.pathname+f.search]},[l,o.v8_trailingSlashAwareDataRequests,r,s,e]);return X.createElement(X.Fragment,null,c.map(f=>X.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...t})))}function Ry({page:r,matches:e,...t}){let s=Zi(),{future:o,manifest:l,routeModules:c}=gu(),{basename:f}=kd(),{loaderData:d,matches:p}=Sy(),m=X.useMemo(()=>Om(r,e,p,l,s,"data"),[r,e,p,l,s]),v=X.useMemo(()=>Om(r,e,p,l,s,"assets"),[r,e,p,l,s]),x=X.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let M=new Set,_=!1;if(e.forEach(L=>{let b=l.routes[L.route.id];!b||!b.hasLoader||(!m.some(R=>R.route.id===L.route.id)&&L.route.id in d&&c[L.route.id]?.shouldRevalidate||b.hasClientLoader?_=!0:M.add(L.route.id))}),M.size===0)return[];let y=Sv(r,f,o.v8_trailingSlashAwareDataRequests,"data");return _&&M.size>0&&y.searchParams.set("_routes",e.filter(L=>M.has(L.route.id)).map(L=>L.route.id).join(",")),[y.pathname+y.search]},[f,o.v8_trailingSlashAwareDataRequests,d,s,l,m,e,r,c]),S=X.useMemo(()=>vy(v,l),[v,l]),E=wy(v);return X.createElement(X.Fragment,null,x.map(M=>X.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...t})),S.map(M=>X.createElement("link",{key:M,rel:"modulepreload",href:M,...t})),E.map(({key:M,link:_})=>X.createElement("link",{key:M,nonce:t.nonce,..._,crossOrigin:_.crossOrigin??t.crossOrigin})))}function Ay(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Cy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Cy&&(window.__reactRouterVersion="7.18.2")}catch{}function by({basename:r,children:e,useTransitions:t,window:s}){let o=X.useRef();o.current==null&&(o.current=ax({window:s,v5Compat:!0}));let l=o.current,[c,f]=X.useState({action:l.action,location:l.location}),d=X.useCallback(p=>{t===!1?f(p):X.startTransition(()=>f(p))},[t]);return X.useLayoutEffect(()=>l.listen(d),[l,d]),X.createElement(ry,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l,useTransitions:t})}var Ev=X.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:c,mask:f,state:d,target:p,to:m,preventScrollReset:v,viewTransition:x,defaultShouldRevalidate:S,...E},M){let{basename:_,navigator:y,useTransitions:L}=X.useContext(Qn),b=typeof m=="string"&&Dd.test(m),R=fv(m,_);m=R.to;let H=Vx(m,{relative:o}),I=Zi(),F=null;if(f){let me=Ud(f,[],I.mask?I.mask.pathname:"/",!0);_!=="/"&&(me.pathname=me.pathname==="/"?_:fi([_,me.pathname])),F=y.createHref(me)}let[W,P,A]=Ey(s,E),B=Dy(m,{replace:c,mask:f,state:d,target:p,preventScrollReset:v,relative:o,viewTransition:x,defaultShouldRevalidate:S,useTransitions:L});function ue(me){e&&e(me),me.defaultPrevented||B(me)}let Q=!(R.isExternal||l),ae=X.createElement("a",{...E,...A,href:(Q?F:void 0)||R.absoluteURL||H,onClick:Q?ue:e,ref:Ay(M,P),target:p,"data-discover":!b&&t==="render"?"true":void 0});return W&&!b?X.createElement(X.Fragment,null,ae,X.createElement(My,{page:H})):ae});Ev.displayName="Link";var Wf=X.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:f,children:d,...p},m){let v=va(c,{relative:p.relative}),x=Zi(),S=X.useContext(pu),{navigator:E,basename:M}=X.useContext(Qn),_=S!=null&&Oy(v)&&f===!0,y=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,L=x.pathname,b=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(L=L.toLowerCase(),b=b?b.toLowerCase():null,y=y.toLowerCase()),b&&M&&(b=Yi(b,M)||b);const R=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let H=L===y||!o&&L.startsWith(y)&&L.charAt(R)==="/",I=b!=null&&(b===y||!o&&b.startsWith(y)&&b.charAt(y.length)==="/"),F={isActive:H,isPending:I,isTransitioning:_},W=H?e:void 0,P;typeof s=="function"?P=s(F):P=[s,H?"active":null,I?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let A=typeof l=="function"?l(F):l;return X.createElement(Ev,{...p,"aria-current":W,className:P,ref:m,style:A,to:c,viewTransition:f},typeof d=="function"?d(F):d)});Wf.displayName="NavLink";var Py=X.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:c=eu,action:f,onSubmit:d,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:x,...S},E)=>{let{useTransitions:M}=X.useContext(Qn),_=Iy(),y=Fy(f,{relative:p}),L=c.toLowerCase()==="get"?"get":"post",b=typeof f=="string"&&Dd.test(f),R=H=>{if(d&&d(H),H.defaultPrevented)return;H.preventDefault();let I=H.nativeEvent.submitter,F=I?.getAttribute("formmethod")||c,W=()=>_(I||H.currentTarget,{fetcherKey:e,method:F,navigate:t,replace:o,state:l,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:x});M&&t!==!1?X.startTransition(()=>W()):W()};return X.createElement("form",{ref:E,method:L,action:y,onSubmit:s?d:R,...S,"data-discover":!b&&r==="render"?"true":void 0})});Py.displayName="Form";function Ly(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mv(r){let e=X.useContext(co);return Gt(e,Ly(r)),e}function Dy(r,{target:e,replace:t,mask:s,state:o,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d,useTransitions:p}={}){let m=Gx(),v=Zi(),x=va(r,{relative:c});return X.useCallback(S=>{if(cy(S,e)){S.preventDefault();let E=t!==void 0?t:oa(v)===oa(x),M=()=>m(r,{replace:E,mask:s,state:o,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d});p?X.startTransition(()=>M()):M()}},[v,m,x,t,s,o,e,r,l,c,f,d,p])}var Uy=0,Ny=()=>`__${String(++Uy)}__`;function Iy(){let{router:r}=Mv("useSubmit"),{basename:e}=X.useContext(Qn),t=ey(),s=r.fetch,o=r.navigate;return X.useCallback(async(l,c={})=>{let{action:f,method:d,encType:p,formData:m,body:v}=hy(l,e);if(c.navigate===!1){let x=c.fetcherKey||Ny();await s(x,t,c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,flushSync:c.flushSync})}else await o(c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[s,o,e,t])}function Fy(r,{relative:e}={}){let{basename:t}=X.useContext(Qn),s=X.useContext(Ki);Gt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...va(r||".",{relative:e})},c=Zi();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(m=>m==="")){f.delete("index"),d.filter(v=>v).forEach(v=>f.append("index",v));let m=f.toString();l.search=m?`?${m}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:fi([t,l.pathname])),oa(l)}function Oy(r,{relative:e}={}){let t=X.useContext(pv);Gt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Mv("useViewTransitionState"),o=va(r,{relative:e});if(!t.isTransitioning)return!1;let l=Yi(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Yi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return lu(o.pathname,c)!=null||lu(o.pathname,l)!=null}const zd="178",ky=0,km=1,By=2,wv=1,zy=2,Hi=3,Dr=0,Fn=1,Vi=2,Pr=0,eo=1,Bm=2,zm=3,Hm=4,Hy=5,ns=100,Vy=101,Gy=102,Wy=103,Xy=104,jy=200,$y=201,Yy=202,qy=203,Xf=204,jf=205,Ky=206,Zy=207,Jy=208,Qy=209,eS=210,tS=211,nS=212,iS=213,rS=214,$f=0,Yf=1,qf=2,ro=3,Kf=4,Zf=5,Jf=6,Qf=7,Tv=0,sS=1,oS=2,ji=0,aS=1,lS=2,uS=3,cS=4,fS=5,dS=6,hS=7,Rv=300,so=301,oo=302,ed=303,td=304,vu=306,aa=1e3,Gi=1001,nd=1002,dn=1003,pS=1004,Ll=1005,yi=1006,lf=1007,rs=1008,wi=1009,Av=1010,Cv=1011,la=1012,Hd=1013,ls=1014,Wi=1015,_a=1016,Vd=1017,Gd=1018,ua=1020,bv=35902,Pv=1021,Lv=1022,ci=1023,ca=1026,fa=1027,Dv=1028,Wd=1029,Uv=1030,Xd=1031,jd=1033,nu=33776,iu=33777,ru=33778,su=33779,id=35840,rd=35841,sd=35842,od=35843,ad=36196,ld=37492,ud=37496,cd=37808,fd=37809,dd=37810,hd=37811,pd=37812,md=37813,gd=37814,vd=37815,_d=37816,xd=37817,yd=37818,Sd=37819,Ed=37820,Md=37821,ou=36492,wd=36494,Td=36495,Nv=36283,Rd=36284,Ad=36285,Cd=36286,mS=3200,gS=3201,vS=0,_S=1,Cr="",An="srgb",ao="srgb-linear",cu="linear",Dt="srgb",Fs=7680,Vm=519,xS=512,yS=513,SS=514,Iv=515,ES=516,MS=517,wS=518,TS=519,Gm=35044,Wm="300 es",Xi=2e3,fu=2001;class fo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xm=1234567;const ia=Math.PI/180,da=180/Math.PI;function ho(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function $d(r,e){return(r%e+e)%e}function RS(r,e,t,s,o){return s+(r-e)*(o-s)/(t-e)}function AS(r,e,t){return r!==e?(t-r)/(e-r):0}function ra(r,e,t){return(1-t)*r+t*e}function CS(r,e,t,s){return ra(r,e,1-Math.exp(-t*s))}function bS(r,e=1){return e-Math.abs($d(r,e*2)-e)}function PS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function LS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function DS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function US(r,e){return r+Math.random()*(e-r)}function NS(r){return r*(.5-Math.random())}function IS(r){r!==void 0&&(Xm=r);let e=Xm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function FS(r){return r*ia}function OS(r){return r*da}function kS(r){return(r&r-1)===0&&r!==0}function BS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function HS(r,e,t,s,o){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),p=l((e+s)/2),m=c((e+s)/2),v=l((e-s)/2),x=c((e-s)/2),S=l((s-e)/2),E=c((s-e)/2);switch(o){case"XYX":r.set(f*m,d*v,d*x,f*p);break;case"YZY":r.set(d*x,f*m,d*v,f*p);break;case"ZXZ":r.set(d*v,d*x,f*m,f*p);break;case"XZX":r.set(f*m,d*E,d*S,f*p);break;case"YXY":r.set(d*S,f*m,d*E,f*p);break;case"ZYZ":r.set(d*E,d*S,f*m,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Js(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const VS={DEG2RAD:ia,RAD2DEG:da,generateUUID:ho,clamp:_t,euclideanModulo:$d,mapLinear:RS,inverseLerp:AS,lerp:ra,damp:CS,pingpong:bS,smoothstep:PS,smootherstep:LS,randInt:DS,randFloat:US,randFloatSpread:NS,seededRandom:IS,degToRad:FS,radToDeg:OS,isPowerOfTwo:kS,ceilPowerOfTwo:BS,floorPowerOfTwo:zS,setQuaternionFromProperEuler:HS,normalize:Tn,denormalize:Js};class At{constructor(e=0,t=0){At.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xa{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,f){let d=s[o+0],p=s[o+1],m=s[o+2],v=s[o+3];const x=l[c+0],S=l[c+1],E=l[c+2],M=l[c+3];if(f===0){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(v!==M||d!==x||p!==S||m!==E){let _=1-f;const y=d*x+p*S+m*E+v*M,L=y>=0?1:-1,b=1-y*y;if(b>Number.EPSILON){const H=Math.sqrt(b),I=Math.atan2(H,y*L);_=Math.sin(_*I)/H,f=Math.sin(f*I)/H}const R=f*L;if(d=d*_+x*R,p=p*_+S*R,m=m*_+E*R,v=v*_+M*R,_===1-f){const H=1/Math.sqrt(d*d+p*p+m*m+v*v);d*=H,p*=H,m*=H,v*=H}}e[t]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,o,l,c){const f=s[o],d=s[o+1],p=s[o+2],m=s[o+3],v=l[c],x=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+m*v+d*S-p*x,e[t+1]=d*E+m*x+p*v-f*S,e[t+2]=p*E+m*S+f*x-d*v,e[t+3]=m*E-f*v-d*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,p=f(s/2),m=f(o/2),v=f(l/2),x=d(s/2),S=d(o/2),E=d(l/2);switch(c){case"XYZ":this._x=x*m*v+p*S*E,this._y=p*S*v-x*m*E,this._z=p*m*E+x*S*v,this._w=p*m*v-x*S*E;break;case"YXZ":this._x=x*m*v+p*S*E,this._y=p*S*v-x*m*E,this._z=p*m*E-x*S*v,this._w=p*m*v+x*S*E;break;case"ZXY":this._x=x*m*v-p*S*E,this._y=p*S*v+x*m*E,this._z=p*m*E+x*S*v,this._w=p*m*v-x*S*E;break;case"ZYX":this._x=x*m*v-p*S*E,this._y=p*S*v+x*m*E,this._z=p*m*E-x*S*v,this._w=p*m*v+x*S*E;break;case"YZX":this._x=x*m*v+p*S*E,this._y=p*S*v+x*m*E,this._z=p*m*E-x*S*v,this._w=p*m*v-x*S*E;break;case"XZY":this._x=x*m*v-p*S*E,this._y=p*S*v-x*m*E,this._z=p*m*E+x*S*v,this._w=p*m*v+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],p=t[2],m=t[6],v=t[10],x=s+f+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(s>f&&s>v){const S=2*Math.sqrt(1+s-f-v);this._w=(m-d)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-s-v);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+v-s-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,p=t._z,m=t._w;return this._x=s*m+c*f+o*p-l*d,this._y=o*m+c*d+l*f-s*p,this._z=l*m+c*p+s*d-o*f,this._w=c*m-s*f-o*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=o,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),v=Math.sin((1-t)*m)/p,x=Math.sin(t*m)/p;return this._w=c*v+this._w*x,this._x=s*v+this._x*x,this._y=o*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,s=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,p=2*(c*o-f*s),m=2*(f*t-l*o),v=2*(l*s-c*t);return this.x=t+d*p+c*v-f*m,this.y=s+d*m+f*p-l*v,this.z=o+d*v+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-s*d,this.z=s*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return uf.copy(this).projectOnVector(e),this.sub(uf)}reflect(e){return this.sub(uf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uf=new se,jm=new xa;class ut{constructor(e,t,s,o,l,c,f,d,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,d,p)}set(e,t,s,o,l,c,f,d,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=s,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[3],d=s[6],p=s[1],m=s[4],v=s[7],x=s[2],S=s[5],E=s[8],M=o[0],_=o[3],y=o[6],L=o[1],b=o[4],R=o[7],H=o[2],I=o[5],F=o[8];return l[0]=c*M+f*L+d*H,l[3]=c*_+f*b+d*I,l[6]=c*y+f*R+d*F,l[1]=p*M+m*L+v*H,l[4]=p*_+m*b+v*I,l[7]=p*y+m*R+v*F,l[2]=x*M+S*L+E*H,l[5]=x*_+S*b+E*I,l[8]=x*y+S*R+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8];return t*c*m-t*f*p-s*l*m+s*f*d+o*l*p-o*c*d}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=m*c-f*p,x=f*d-m*l,S=p*l-c*d,E=t*v+s*x+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=v*M,e[1]=(o*p-m*s)*M,e[2]=(f*s-o*c)*M,e[3]=x*M,e[4]=(m*t-o*d)*M,e[5]=(o*l-f*t)*M,e[6]=S*M,e[7]=(s*d-p*t)*M,e[8]=(c*t-s*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(s*d,s*p,-s*(d*c+p*f)+c+e,-o*p,o*d,-o*(-p*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(cf.makeScale(e,t)),this}rotate(e){return this.premultiply(cf.makeRotation(-e)),this}translate(e,t){return this.premultiply(cf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cf=new ut;function Fv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ha(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function GS(){const r=ha("canvas");return r.style.display="block",r}const $m={};function to(r){r in $m||($m[r]=!0,console.warn(r))}function WS(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function XS(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jS(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ym=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $S(){const r={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(o.r=$i(o.r),o.g=$i(o.g),o.b=$i(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(o.r=no(o.r),o.g=no(o.g),o.b=no(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Cr?cu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return to("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return to("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ao]:{primaries:e,whitePoint:s,transfer:cu,toXYZ:Ym,fromXYZ:qm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:s,transfer:Dt,toXYZ:Ym,fromXYZ:qm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),r}const Tt=$S();function $i(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function no(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Os;class YS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Os===void 0&&(Os=ha("canvas")),Os.width=e.width,Os.height=e.height;const o=Os.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Os}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ha("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=$i(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor($i(t[s]/255)*255):t[s]=$i(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qS=0;class Yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(ff(o[c].image)):l.push(ff(o[c]))}else l=ff(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function ff(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?YS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KS=0;const df=new se;class Cn extends fo{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,s=Gi,o=Gi,l=yi,c=rs,f=ci,d=wi,p=Cn.DEFAULT_ANISOTROPY,m=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=ho(),this.name="",this.source=new Yd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(df).x}get height(){return this.source.getSize(df).y}get depth(){return this.source.getSize(df).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Rv;Cn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,s=0,o=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const d=e.elements,p=d[0],m=d[4],v=d[8],x=d[1],S=d[5],E=d[9],M=d[2],_=d[6],y=d[10];if(Math.abs(m-x)<.01&&Math.abs(v-M)<.01&&Math.abs(E-_)<.01){if(Math.abs(m+x)<.1&&Math.abs(v+M)<.1&&Math.abs(E+_)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,R=(S+1)/2,H=(y+1)/2,I=(m+x)/4,F=(v+M)/4,W=(E+_)/4;return b>R&&b>H?b<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(b),o=I/s,l=F/s):R>H?R<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),s=I/o,l=W/o):H<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(H),s=F/l,o=W/l),this.set(s,o,l,t),this}let L=Math.sqrt((_-E)*(_-E)+(v-M)*(v-M)+(x-m)*(x-m));return Math.abs(L)<.001&&(L=1),this.x=(_-E)/L,this.y=(v-M)/L,this.z=(x-m)/L,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZS extends fo{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const o={width:e,height:t,depth:s.depth},l=new Cn(o);this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Yd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends ZS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Ov extends Cn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JS extends Cn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ya{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,oi):oi.fromBufferAttribute(l,c),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Dl.copy(s.boundingBox)),Dl.applyMatrix4(e.matrixWorld),this.union(Dl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Ul.subVectors(this.max,Ko),ks.subVectors(e.a,Ko),Bs.subVectors(e.b,Ko),zs.subVectors(e.c,Ko),yr.subVectors(Bs,ks),Sr.subVectors(zs,Bs),Yr.subVectors(ks,zs);let t=[0,-yr.z,yr.y,0,-Sr.z,Sr.y,0,-Yr.z,Yr.y,yr.z,0,-yr.x,Sr.z,0,-Sr.x,Yr.z,0,-Yr.x,-yr.y,yr.x,0,-Sr.y,Sr.x,0,-Yr.y,Yr.x,0];return!hf(t,ks,Bs,zs,Ul)||(t=[1,0,0,0,1,0,0,0,1],!hf(t,ks,Bs,zs,Ul))?!1:(Nl.crossVectors(yr,Sr),t=[Nl.x,Nl.y,Nl.z],hf(t,ks,Bs,zs,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new se,new se,new se,new se,new se,new se,new se,new se],oi=new se,Dl=new ya,ks=new se,Bs=new se,zs=new se,yr=new se,Sr=new se,Yr=new se,Ko=new se,Ul=new se,Nl=new se,qr=new se;function hf(r,e,t,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){qr.fromArray(r,l);const f=o.x*Math.abs(qr.x)+o.y*Math.abs(qr.y)+o.z*Math.abs(qr.z),d=e.dot(qr),p=t.dot(qr),m=s.dot(qr);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const QS=new ya,Zo=new se,pf=new se;class qd{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):QS.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const t=Zo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Zo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(pf)),this.expandByPoint(Zo.copy(e.center).sub(pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Oi=new se,mf=new se,Il=new se,Er=new se,gf=new se,Fl=new se,vf=new se;class eE{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){mf.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(mf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Il),f=Er.dot(this.direction),d=-Er.dot(Il),p=Er.lengthSq(),m=Math.abs(1-c*c);let v,x,S,E;if(m>0)if(v=c*d-f,x=c*f-d,E=l*m,v>=0)if(x>=-E)if(x<=E){const M=1/m;v*=M,x*=M,S=v*(v+c*x+2*f)+x*(c*v+x+2*d)+p}else x=l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*d)+p;else x=-l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*d)+p;else x<=-E?(v=Math.max(0,-(-c*l+f)),x=v>0?-l:Math.min(Math.max(-l,-d),l),S=-v*v+x*(x+2*d)+p):x<=E?(v=0,x=Math.min(Math.max(-l,-d),l),S=x*(x+2*d)+p):(v=Math.max(0,-(c*l+f)),x=v>0?l:Math.min(Math.max(-l,-d),l),S=-v*v+x*(x+2*d)+p);else x=c>0?-l:l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*d)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(mf).addScaledVector(Il,x),S}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const s=Oi.dot(this.direction),o=Oi.dot(Oi)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=s-c,d=s+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,f,d;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),m>=0?(l=(e.min.y-x.y)*m,c=(e.max.y-x.y)*m):(l=(e.max.y-x.y)*m,c=(e.min.y-x.y)*m),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),v>=0?(f=(e.min.z-x.z)*v,d=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,d=(e.min.z-x.z)*v),s>d||f>o)||((f>s||s!==s)&&(s=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,s,o,l){gf.subVectors(t,e),Fl.subVectors(s,e),vf.crossVectors(gf,Fl);let c=this.direction.dot(vf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Er.subVectors(this.origin,e);const d=f*this.direction.dot(Fl.crossVectors(Er,Fl));if(d<0)return null;const p=f*this.direction.dot(gf.cross(Er));if(p<0||d+p>c)return null;const m=-f*Er.dot(vf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,s,o,l,c,f,d,p,m,v,x,S,E,M,_){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,d,p,m,v,x,S,E,M,_)}set(e,t,s,o,l,c,f,d,p,m,v,x,S,E,M,_){const y=this.elements;return y[0]=e,y[4]=t,y[8]=s,y[12]=o,y[1]=l,y[5]=c,y[9]=f,y[13]=d,y[2]=p,y[6]=m,y[10]=v,y[14]=x,y[3]=S,y[7]=E,y[11]=M,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),c=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),d=Math.cos(o),p=Math.sin(o),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*m,S=c*v,E=f*m,M=f*v;t[0]=d*m,t[4]=-d*v,t[8]=p,t[1]=S+E*p,t[5]=x-M*p,t[9]=-f*d,t[2]=M-x*p,t[6]=E+S*p,t[10]=c*d}else if(e.order==="YXZ"){const x=d*m,S=d*v,E=p*m,M=p*v;t[0]=x+M*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*m,t[9]=-f,t[2]=S*f-E,t[6]=M+x*f,t[10]=c*d}else if(e.order==="ZXY"){const x=d*m,S=d*v,E=p*m,M=p*v;t[0]=x-M*f,t[4]=-c*v,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*m,t[9]=M-x*f,t[2]=-c*p,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const x=c*m,S=c*v,E=f*m,M=f*v;t[0]=d*m,t[4]=E*p-S,t[8]=x*p+M,t[1]=d*v,t[5]=M*p+x,t[9]=S*p-E,t[2]=-p,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const x=c*d,S=c*p,E=f*d,M=f*p;t[0]=d*m,t[4]=M-x*v,t[8]=E*v+S,t[1]=v,t[5]=c*m,t[9]=-f*m,t[2]=-p*m,t[6]=S*v+E,t[10]=x-M*v}else if(e.order==="XZY"){const x=c*d,S=c*p,E=f*d,M=f*p;t[0]=d*m,t[4]=-v,t[8]=p*m,t[1]=x*v+M,t[5]=c*m,t[9]=S*v-E,t[2]=E*v-S,t[6]=f*m,t[10]=M*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tE,e,nE)}lookAt(e,t,s){const o=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Mr.crossVectors(s,Hn),Mr.lengthSq()===0&&(Math.abs(s.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Mr.crossVectors(s,Hn)),Mr.normalize(),Ol.crossVectors(Hn,Mr),o[0]=Mr.x,o[4]=Ol.x,o[8]=Hn.x,o[1]=Mr.y,o[5]=Ol.y,o[9]=Hn.y,o[2]=Mr.z,o[6]=Ol.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[4],d=s[8],p=s[12],m=s[1],v=s[5],x=s[9],S=s[13],E=s[2],M=s[6],_=s[10],y=s[14],L=s[3],b=s[7],R=s[11],H=s[15],I=o[0],F=o[4],W=o[8],P=o[12],A=o[1],B=o[5],ue=o[9],Q=o[13],ae=o[2],me=o[6],te=o[10],ve=o[14],V=o[3],le=o[7],oe=o[11],N=o[15];return l[0]=c*I+f*A+d*ae+p*V,l[4]=c*F+f*B+d*me+p*le,l[8]=c*W+f*ue+d*te+p*oe,l[12]=c*P+f*Q+d*ve+p*N,l[1]=m*I+v*A+x*ae+S*V,l[5]=m*F+v*B+x*me+S*le,l[9]=m*W+v*ue+x*te+S*oe,l[13]=m*P+v*Q+x*ve+S*N,l[2]=E*I+M*A+_*ae+y*V,l[6]=E*F+M*B+_*me+y*le,l[10]=E*W+M*ue+_*te+y*oe,l[14]=E*P+M*Q+_*ve+y*N,l[3]=L*I+b*A+R*ae+H*V,l[7]=L*F+b*B+R*me+H*le,l[11]=L*W+b*ue+R*te+H*oe,l[15]=L*P+b*Q+R*ve+H*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],p=e[13],m=e[2],v=e[6],x=e[10],S=e[14],E=e[3],M=e[7],_=e[11],y=e[15];return E*(+l*d*v-o*p*v-l*f*x+s*p*x+o*f*S-s*d*S)+M*(+t*d*S-t*p*x+l*c*x-o*c*S+o*p*m-l*d*m)+_*(+t*p*v-t*f*S-l*c*v+s*c*S+l*f*m-s*p*m)+y*(-o*f*m-t*d*v+t*f*x+o*c*v-s*c*x+s*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=e[9],x=e[10],S=e[11],E=e[12],M=e[13],_=e[14],y=e[15],L=v*_*p-M*x*p+M*d*S-f*_*S-v*d*y+f*x*y,b=E*x*p-m*_*p-E*d*S+c*_*S+m*d*y-c*x*y,R=m*M*p-E*v*p+E*f*S-c*M*S-m*f*y+c*v*y,H=E*v*d-m*M*d-E*f*x+c*M*x+m*f*_-c*v*_,I=t*L+s*b+o*R+l*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=L*F,e[1]=(M*x*l-v*_*l-M*o*S+s*_*S+v*o*y-s*x*y)*F,e[2]=(f*_*l-M*d*l+M*o*p-s*_*p-f*o*y+s*d*y)*F,e[3]=(v*d*l-f*x*l-v*o*p+s*x*p+f*o*S-s*d*S)*F,e[4]=b*F,e[5]=(m*_*l-E*x*l+E*o*S-t*_*S-m*o*y+t*x*y)*F,e[6]=(E*d*l-c*_*l-E*o*p+t*_*p+c*o*y-t*d*y)*F,e[7]=(c*x*l-m*d*l+m*o*p-t*x*p-c*o*S+t*d*S)*F,e[8]=R*F,e[9]=(E*v*l-m*M*l-E*s*S+t*M*S+m*s*y-t*v*y)*F,e[10]=(c*M*l-E*f*l+E*s*p-t*M*p-c*s*y+t*f*y)*F,e[11]=(m*f*l-c*v*l-m*s*p+t*v*p+c*s*S-t*f*S)*F,e[12]=H*F,e[13]=(m*M*o-E*v*o+E*s*x-t*M*x-m*s*_+t*v*_)*F,e[14]=(E*f*o-c*M*o-E*s*d+t*M*d+c*s*_-t*f*_)*F,e[15]=(c*v*o-m*f*o+m*s*d-t*v*d-c*s*x+t*f*x)*F,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,f=e.y,d=e.z,p=l*c,m=l*f;return this.set(p*c+s,p*f-o*d,p*d+o*f,0,p*f+o*d,m*f+s,m*d-o*c,0,p*d-o*f,m*d+o*c,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,p=l+l,m=c+c,v=f+f,x=l*p,S=l*m,E=l*v,M=c*m,_=c*v,y=f*v,L=d*p,b=d*m,R=d*v,H=s.x,I=s.y,F=s.z;return o[0]=(1-(M+y))*H,o[1]=(S+R)*H,o[2]=(E-b)*H,o[3]=0,o[4]=(S-R)*I,o[5]=(1-(x+y))*I,o[6]=(_+L)*I,o[7]=0,o[8]=(E+b)*F,o[9]=(_-L)*F,o[10]=(1-(x+M))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Hs.set(o[0],o[1],o[2]).length();const c=Hs.set(o[4],o[5],o[6]).length(),f=Hs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ai.copy(this);const p=1/l,m=1/c,v=1/f;return ai.elements[0]*=p,ai.elements[1]*=p,ai.elements[2]*=p,ai.elements[4]*=m,ai.elements[5]*=m,ai.elements[6]*=m,ai.elements[8]*=v,ai.elements[9]*=v,ai.elements[10]*=v,t.setFromRotationMatrix(ai),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,o,l,c,f=Xi){const d=this.elements,p=2*l/(t-e),m=2*l/(s-o),v=(t+e)/(t-e),x=(s+o)/(s-o);let S,E;if(f===Xi)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===fu)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,o,l,c,f=Xi){const d=this.elements,p=1/(t-e),m=1/(s-o),v=1/(c-l),x=(t+e)*p,S=(s+o)*m;let E,M;if(f===Xi)E=(c+l)*v,M=-2*v;else if(f===fu)E=l*v,M=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-x,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Hs=new se,ai=new $t,tE=new se(0,0,0),nE=new se(1,1,1),Mr=new se,Ol=new se,Hn=new se,Km=new $t,Zm=new xa;class qi{constructor(e=0,t=0,s=0,o=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],p=o[5],m=o[9],v=o[2],x=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Km,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zm.setFromEuler(this),this.setFromQuaternion(Zm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class kv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iE=0;const Jm=new se,Vs=new xa,ki=new $t,kl=new se,Jo=new se,rE=new se,sE=new xa,Qm=new se(1,0,0),eg=new se(0,1,0),tg=new se(0,0,1),ng={type:"added"},oE={type:"removed"},Gs={type:"childadded",child:null},_f={type:"childremoved",child:null};class yn extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new se,t=new qi,s=new xa,o=new se(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new ut}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Qm,e)}rotateY(e){return this.rotateOnAxis(eg,e)}rotateZ(e){return this.rotateOnAxis(tg,e)}translateOnAxis(e,t){return Jm.copy(e).applyQuaternion(this.quaternion),this.position.add(Jm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qm,e)}translateY(e){return this.translateOnAxis(eg,e)}translateZ(e){return this.translateOnAxis(tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?kl.copy(e):kl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Jo,kl,this.up):ki.lookAt(kl,Jo,this.up),this.quaternion.setFromRotationMatrix(ki),o&&(ki.extractRotation(o.matrixWorld),Vs.setFromRotationMatrix(ki),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ng),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oE),_f.child=e,this.dispatchEvent(_f),_f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ng),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,rE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,sE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const v=d[p];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),p=c(e.textures),m=c(e.images),v=c(e.shapes),x=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),d.length>0&&(s.materials=d),p.length>0&&(s.textures=p),m.length>0&&(s.images=m),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=o,s;function c(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}yn.DEFAULT_UP=new se(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new se,Bi=new se,xf=new se,zi=new se,Ws=new se,Xs=new se,ig=new se,yf=new se,Sf=new se,Ef=new se,Mf=new jt,wf=new jt,Tf=new jt;class ui{constructor(e=new se,t=new se,s=new se){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),li.subVectors(e,t),o.cross(li);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){li.subVectors(o,t),Bi.subVectors(s,t),xf.subVectors(e,t);const c=li.dot(li),f=li.dot(Bi),d=li.dot(xf),p=Bi.dot(Bi),m=Bi.dot(xf),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const x=1/v,S=(p*d-f*m)*x,E=(c*m-f*d)*x;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,s,o,l,c,f,d){return this.getBarycoord(e,t,s,o,zi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,zi.x),d.addScaledVector(c,zi.y),d.addScaledVector(f,zi.z),d)}static getInterpolatedAttribute(e,t,s,o,l,c){return Mf.setScalar(0),wf.setScalar(0),Tf.setScalar(0),Mf.fromBufferAttribute(e,t),wf.fromBufferAttribute(e,s),Tf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Mf,l.x),c.addScaledVector(wf,l.y),c.addScaledVector(Tf,l.z),c}static isFrontFacing(e,t,s,o){return li.subVectors(s,t),Bi.subVectors(e,t),li.cross(Bi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),li.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return ui.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,f;Ws.subVectors(o,s),Xs.subVectors(l,s),yf.subVectors(e,s);const d=Ws.dot(yf),p=Xs.dot(yf);if(d<=0&&p<=0)return t.copy(s);Sf.subVectors(e,o);const m=Ws.dot(Sf),v=Xs.dot(Sf);if(m>=0&&v<=m)return t.copy(o);const x=d*v-m*p;if(x<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(s).addScaledVector(Ws,c);Ef.subVectors(e,l);const S=Ws.dot(Ef),E=Xs.dot(Ef);if(E>=0&&S<=E)return t.copy(l);const M=S*p-d*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(Xs,f);const _=m*E-S*v;if(_<=0&&v-m>=0&&S-E>=0)return ig.subVectors(l,o),f=(v-m)/(v-m+(S-E)),t.copy(o).addScaledVector(ig,f);const y=1/(_+M+x);return c=M*y,f=x*y,t.copy(s).addScaledVector(Ws,c).addScaledVector(Xs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function Rf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class bt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Tt.workingColorSpace){if(e=$d(e,1),t=_t(t,0,1),s=_t(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Rf(c,l,e+1/3),this.g=Rf(c,l,e),this.b=Rf(c,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=An){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const s=Bv[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Tt.workingToColorSpace(xn.copy(this),e),Math.round(_t(xn.r*255,0,255))*65536+Math.round(_t(xn.g*255,0,255))*256+Math.round(_t(xn.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(xn.copy(this),t);const s=xn.r,o=xn.g,l=xn.b,c=Math.max(s,o,l),f=Math.min(s,o,l);let d,p;const m=(f+c)/2;if(f===c)d=0,p=0;else{const v=c-f;switch(p=m<=.5?v/(c+f):v/(2-c-f),c){case s:d=(o-l)/v+(o<l?6:0);break;case o:d=(l-s)/v+2;break;case l:d=(s-o)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=m,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=An){Tt.workingToColorSpace(xn.copy(this),e);const t=xn.r,s=xn.g,o=xn.b;return e!==An?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(Bl);const s=ra(wr.h,Bl.h,t),o=ra(wr.s,Bl.s,t),l=ra(wr.l,Bl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new bt;bt.NAMES=Bv;let aE=0;class _u extends fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=eo,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xf,this.blendDst=jf,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(s.blending=this.blending),this.side!==Dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Xf&&(s.blendSrc=this.blendSrc),this.blendDst!==jf&&(s.blendDst=this.blendDst),this.blendEquation!==ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ar extends _u{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new se,zl=new At;let lE=0;class Ei{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Gm,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Js(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Tn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Js(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Js(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Js(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Js(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array),o=Tn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array),o=Tn(o,this.array),l=Tn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gm&&(e.usage=this.usage),e}}class zv extends Ei{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Hv extends Ei{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class os extends Ei{constructor(e,t,s){super(new Float32Array(e),t,s)}}let uE=0;const qn=new $t,Af=new yn,js=new se,Vn=new ya,Qo=new ya,ln=new se;class fs extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fv(e)?Hv:zv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ut().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,s){return qn.makeTranslation(e,t,s),this.applyMatrix4(qn),this}scale(e,t,s){return qn.makeScale(e,t,s),this.applyMatrix4(qn),this}lookAt(e){return Af.lookAt(e),Af.updateMatrix(),this.applyMatrix4(Af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new os(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const s=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Qo.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Vn.min,Qo.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,Qo.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(Qo.min),Vn.expandByPoint(Qo.max))}Vn.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(ln));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)ln.fromBufferAttribute(f,p),d&&(js.fromBufferAttribute(e,p),ln.add(js)),o=Math.max(o,s.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let W=0;W<s.count;W++)f[W]=new se,d[W]=new se;const p=new se,m=new se,v=new se,x=new At,S=new At,E=new At,M=new se,_=new se;function y(W,P,A){p.fromBufferAttribute(s,W),m.fromBufferAttribute(s,P),v.fromBufferAttribute(s,A),x.fromBufferAttribute(l,W),S.fromBufferAttribute(l,P),E.fromBufferAttribute(l,A),m.sub(p),v.sub(p),S.sub(x),E.sub(x);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(B),_.copy(v).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(B),f[W].add(M),f[P].add(M),f[A].add(M),d[W].add(_),d[P].add(_),d[A].add(_))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let W=0,P=L.length;W<P;++W){const A=L[W],B=A.start,ue=A.count;for(let Q=B,ae=B+ue;Q<ae;Q+=3)y(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const b=new se,R=new se,H=new se,I=new se;function F(W){H.fromBufferAttribute(o,W),I.copy(H);const P=f[W];b.copy(P),b.sub(H.multiplyScalar(H.dot(P))).normalize(),R.crossVectors(I,P);const B=R.dot(d[W])<0?-1:1;c.setXYZW(W,b.x,b.y,b.z,B)}for(let W=0,P=L.length;W<P;++W){const A=L[W],B=A.start,ue=A.count;for(let Q=B,ae=B+ue;Q<ae;Q+=3)F(e.getX(Q+0)),F(e.getX(Q+1)),F(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const o=new se,l=new se,c=new se,f=new se,d=new se,p=new se,m=new se,v=new se;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),M=e.getX(x+1),_=e.getX(x+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,_),m.subVectors(c,l),v.subVectors(o,l),m.cross(v),f.fromBufferAttribute(s,E),d.fromBufferAttribute(s,M),p.fromBufferAttribute(s,_),f.add(m),d.add(m),p.add(m),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(_,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),m.subVectors(c,l),v.subVectors(o,l),m.cross(v),s.setXYZ(x+0,m.x,m.y,m.z),s.setXYZ(x+1,m.x,m.y,m.z),s.setXYZ(x+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,d){const p=f.array,m=f.itemSize,v=f.normalized,x=new p.constructor(d.length*m);let S=0,E=0;for(let M=0,_=d.length;M<_;M++){f.isInterleavedBufferAttribute?S=d[M]*f.data.stride+f.offset:S=d[M]*m;for(let y=0;y<m;y++)x[E++]=p[S++]}return new Ei(x,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fs,s=this.index.array,o=this.attributes;for(const f in o){const d=o[f],p=e(d,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,v=p.length;m<v;m++){const x=p[m],S=e(x,s);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const p=s[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];m.push(S.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],v=l[p];for(let x=0,S=v.length;x<S;x++)m.push(v[x].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rg=new $t,Kr=new eE,Hl=new qd,sg=new se,Vl=new se,Gl=new se,Wl=new se,Cf=new se,Xl=new se,og=new se,jl=new se;class Si extends yn{constructor(e=new fs,t=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Xl.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],v=l[d];m!==0&&(Cf.fromBufferAttribute(v,e),c?Xl.addScaledVector(Cf,m):Xl.addScaledVector(Cf.sub(t),m))}t.add(Xl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Hl.copy(s.boundingSphere),Hl.applyMatrix4(l),Kr.copy(e.ray).recast(e.near),!(Hl.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Hl,sg)===null||Kr.origin.distanceToSquared(sg)>(e.far-e.near)**2))&&(rg.copy(l).invert(),Kr.copy(e.ray).applyMatrix4(rg),!(s.boundingBox!==null&&Kr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=x.length;E<M;E++){const _=x[E],y=c[_.materialIndex],L=Math.max(_.start,S.start),b=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let R=L,H=b;R<H;R+=3){const I=f.getX(R),F=f.getX(R+1),W=f.getX(R+2);o=$l(this,y,e,s,p,m,v,I,F,W),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let _=E,y=M;_<y;_+=3){const L=f.getX(_),b=f.getX(_+1),R=f.getX(_+2);o=$l(this,c,e,s,p,m,v,L,b,R),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,M=x.length;E<M;E++){const _=x[E],y=c[_.materialIndex],L=Math.max(_.start,S.start),b=Math.min(d.count,Math.min(_.start+_.count,S.start+S.count));for(let R=L,H=b;R<H;R+=3){const I=R,F=R+1,W=R+2;o=$l(this,y,e,s,p,m,v,I,F,W),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let _=E,y=M;_<y;_+=3){const L=_,b=_+1,R=_+2;o=$l(this,c,e,s,p,m,v,L,b,R),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function cE(r,e,t,s,o,l,c,f){let d;if(e.side===Fn?d=s.intersectTriangle(c,l,o,!0,f):d=s.intersectTriangle(o,l,c,e.side===Dr,f),d===null)return null;jl.copy(f),jl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(jl);return p<t.near||p>t.far?null:{distance:p,point:jl.clone(),object:r}}function $l(r,e,t,s,o,l,c,f,d,p){r.getVertexPosition(f,Vl),r.getVertexPosition(d,Gl),r.getVertexPosition(p,Wl);const m=cE(r,e,t,s,Vl,Gl,Wl,og);if(m){const v=new se;ui.getBarycoord(og,Vl,Gl,Wl,v),o&&(m.uv=ui.getInterpolatedAttribute(o,f,d,p,v,new At)),l&&(m.uv1=ui.getInterpolatedAttribute(l,f,d,p,v,new At)),c&&(m.normal=ui.getInterpolatedAttribute(c,f,d,p,v,new se),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const x={a:f,b:d,c:p,normal:new se,materialIndex:0};ui.getNormal(Vl,Gl,Wl,x.normal),m.face=x,m.barycoord=v}return m}class po extends fs{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],m=[],v=[];let x=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,o,c,2),E("x","z","y",1,-1,e,s,-t,o,c,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(d),this.setAttribute("position",new os(p,3)),this.setAttribute("normal",new os(m,3)),this.setAttribute("uv",new os(v,2));function E(M,_,y,L,b,R,H,I,F,W,P){const A=R/F,B=H/W,ue=R/2,Q=H/2,ae=I/2,me=F+1,te=W+1;let ve=0,V=0;const le=new se;for(let oe=0;oe<te;oe++){const N=oe*B-Q;for(let ie=0;ie<me;ie++){const Oe=ie*A-ue;le[M]=Oe*L,le[_]=N*b,le[y]=ae,p.push(le.x,le.y,le.z),le[M]=0,le[_]=0,le[y]=I>0?1:-1,m.push(le.x,le.y,le.z),v.push(ie/F),v.push(1-oe/W),ve+=1}}for(let oe=0;oe<W;oe++)for(let N=0;N<F;N++){const ie=x+N+me*oe,Oe=x+N+me*(oe+1),ee=x+(N+1)+me*(oe+1),fe=x+(N+1)+me*oe;d.push(ie,Oe,fe),d.push(Oe,ee,fe),V+=6}f.addGroup(S,V,P),S+=V,x+=ve}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lo(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function Rn(r){const e={};for(let t=0;t<r.length;t++){const s=lo(r[t]);for(const o in s)e[o]=s[o]}return e}function fE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const dE={clone:lo,merge:Rn};var hE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends _u{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hE,this.fragmentShader=pE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=fE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Gv extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new se,ag=new At,lg=new At;class Jn extends Gv{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,ag,lg),t.subVectors(lg,ag)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ia*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*s/p,o*=c.width/d,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Ys=1;class mE extends yn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Jn($s,Ys,e,t);o.layers=this.layers,this.add(o);const l=new Jn($s,Ys,e,t);l.layers=this.layers,this.add(l);const c=new Jn($s,Ys,e,t);c.layers=this.layers,this.add(c);const f=new Jn($s,Ys,e,t);f.layers=this.layers,this.add(f);const d=new Jn($s,Ys,e,t);d.layers=this.layers,this.add(d);const p=new Jn($s,Ys,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,f,d]=t;for(const p of t)this.remove(p);if(e===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===fu)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,m]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,c),e.setRenderTarget(s,2,o),e.render(t,f),e.setRenderTarget(s,3,o),e.render(t,d),e.setRenderTarget(s,4,o),e.render(t,p),s.texture.generateMipmaps=M,e.setRenderTarget(s,5,o),e.render(t,m),e.setRenderTarget(v,x,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Wv extends Cn{constructor(e=[],t=so,s,o,l,c,f,d,p,m){super(e,t,s,o,l,c,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gE extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new Wv(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new po(5,5,5),l=new Ur({name:"CubemapFromEquirect",uniforms:lo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Fn,blending:Pr});l.uniforms.tEquirect.value=t;const c=new Si(o,l),f=t.minFilter;return t.minFilter===rs&&(t.minFilter=yi),new mE(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}class ea extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vE={type:"move"};class bf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const M of e.hand.values()){const _=t.getJointPose(M,s),y=this._getHandJoint(p,M);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=m.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(vE)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new ea;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class _E extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Pf=new se,xE=new se,yE=new ut;class es{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Pf.subVectors(s,t).cross(xE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Pf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||yE.getNormalMatrix(e),o=this.coplanarPoint(Pf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new qd,SE=new At(.5,.5),Yl=new se;class Kd{constructor(e=new es,t=new es,s=new es,o=new es,l=new es,c=new es){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Xi){const s=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],d=o[3],p=o[4],m=o[5],v=o[6],x=o[7],S=o[8],E=o[9],M=o[10],_=o[11],y=o[12],L=o[13],b=o[14],R=o[15];if(s[0].setComponents(d-l,x-p,_-S,R-y).normalize(),s[1].setComponents(d+l,x+p,_+S,R+y).normalize(),s[2].setComponents(d+c,x+m,_+E,R+L).normalize(),s[3].setComponents(d-c,x-m,_-E,R-L).normalize(),s[4].setComponents(d-f,x-v,_-M,R-b).normalize(),t===Xi)s[5].setComponents(d+f,x+v,_+M,R+b).normalize();else if(t===fu)s[5].setComponents(f,v,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const t=SE.distanceTo(e.center);return Zr.radius=.7071067811865476+t,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Yl.x=o.normal.x>0?e.max.x:e.min.x,Yl.y=o.normal.y>0?e.max.y:e.min.y,Yl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xv extends Cn{constructor(e,t,s=ls,o,l,c,f=dn,d=dn,p,m=ca,v=1){if(m!==ca&&m!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:v};super(x,o,l,c,f,d,m,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xu extends fs{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(s),d=Math.floor(o),p=f+1,m=d+1,v=e/f,x=t/d,S=[],E=[],M=[],_=[];for(let y=0;y<m;y++){const L=y*x-c;for(let b=0;b<p;b++){const R=b*v-l;E.push(R,-L,0),M.push(0,0,1),_.push(b/f),_.push(1-y/d)}}for(let y=0;y<d;y++)for(let L=0;L<f;L++){const b=L+p*y,R=L+p*(y+1),H=L+1+p*(y+1),I=L+1+p*y;S.push(b,R,I),S.push(R,H,I)}this.setIndex(S),this.setAttribute("position",new os(E,3)),this.setAttribute("normal",new os(M,3)),this.setAttribute("uv",new os(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.width,e.height,e.widthSegments,e.heightSegments)}}class EE extends _u{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ME extends _u{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class wE{constructor(e,t,s){const o=this;let l=!1,c=0,f=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){f++,l===!1&&o.onStart!==void 0&&o.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,o.onProgress!==void 0&&o.onProgress(m,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,v){return p.push(m,v),this},this.removeHandler=function(m){const v=p.indexOf(m);return v!==-1&&p.splice(v,2),this},this.getHandler=function(m){for(let v=0,x=p.length;v<x;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(m))return E}return null}}}const TE=new wE;class Zd{constructor(e){this.manager=e!==void 0?e:TE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zd.DEFAULT_MATERIAL_NAME="__DEFAULT";const qs=new WeakMap;class RE extends Zd{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Lf.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let v=qs.get(c);v===void 0&&(v=[],qs.set(c,v)),v.push({onLoad:t,onError:o})}return c}const f=ha("img");function d(){m(),t&&t(this);const v=qs.get(this)||[];for(let x=0;x<v.length;x++){const S=v[x];S.onLoad&&S.onLoad(this)}qs.delete(this),l.manager.itemEnd(e)}function p(v){m(),o&&o(v),Lf.remove(`image:${e}`);const x=qs.get(this)||[];for(let S=0;S<x.length;S++){const E=x[S];E.onError&&E.onError(v)}qs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Lf.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class AE extends Zd{constructor(e){super(e)}load(e,t,s,o){const l=new Cn,c=new RE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}}class CE extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Df=new $t,ug=new se,cg=new se;class bE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kd,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;ug.setFromMatrixPosition(e.matrixWorld),t.position.copy(ug),cg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cg),t.updateMatrixWorld(),Df.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jv extends Gv{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class PE extends bE{constructor(){super(new jv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LE extends CE{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new PE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class DE extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function fg(r,e,t,s){const o=UE(s);switch(t){case Pv:return r*e;case Dv:return r*e/o.components*o.byteLength;case Wd:return r*e/o.components*o.byteLength;case Uv:return r*e*2/o.components*o.byteLength;case Xd:return r*e*2/o.components*o.byteLength;case Lv:return r*e*3/o.components*o.byteLength;case ci:return r*e*4/o.components*o.byteLength;case jd:return r*e*4/o.components*o.byteLength;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ru:case su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rd:case od:return Math.max(r,16)*Math.max(e,8)/4;case id:case sd:return Math.max(r,8)*Math.max(e,8)/2;case ad:case ld:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case hd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case pd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case md:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case gd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case vd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case _d:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case xd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case yd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ou:case wd:case Td:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Nv:case Rd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ad:case Cd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function UE(r){switch(r){case wi:case Av:return{byteLength:1,components:1};case la:case Cv:case _a:return{byteLength:2,components:1};case Vd:case Gd:return{byteLength:2,components:4};case ls:case Hd:case Wi:return{byteLength:4,components:1};case bv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);function $v(){let r=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function NE(r){const e=new WeakMap;function t(f,d){const p=f.array,m=f.usage,v=p.byteLength,x=r.createBuffer();r.bindBuffer(d,x),r.bufferData(d,p,m),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,d,p){const m=d.array,v=d.updateRanges;if(r.bindBuffer(p,f),v.length===0)r.bufferSubData(p,0,m);else{v.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<v.length;S++){const E=v[x],M=v[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++x,v[x]=M)}v.length=x+1;for(let S=0,E=v.length;S<E;S++){const M=v[S];r.bufferSubData(p,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(r.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,d),p.version=f.version}}return{get:o,remove:l,update:c}}var IE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FE=`#ifdef USE_ALPHAHASH
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
#endif`,OE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HE=`#ifdef USE_AOMAP
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
#endif`,VE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GE=`#ifdef USE_BATCHING
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
#endif`,WE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$E=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,YE=`#ifdef USE_IRIDESCENCE
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
#endif`,qE=`#ifdef USE_BUMPMAP
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
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rM=`#define PI 3.141592653589793
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
} // validated`,sM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oM=`vec3 transformedNormal = objectNormal;
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
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fM="gl_FragColor = linearToOutputTexel( gl_FragColor );",dM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EM=`#ifdef USE_GRADIENTMAP
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
}`,MM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RM=`uniform bool receiveShadow;
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
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,CM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DM=`PhysicalMaterial material;
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
#endif`,UM=`struct PhysicalMaterial {
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
}`,NM=`
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
#endif`,IM=`#if defined( RE_IndirectDiffuse )
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
#endif`,FM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WM=`#if defined( USE_POINTS_UV )
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
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$M=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
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
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ew=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iw=`#ifdef USE_NORMALMAP
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
#endif`,rw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ow=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_w=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xw=`float getShadowMask() {
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
}`,yw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sw=`#ifdef USE_SKINNING
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
#endif`,Ew=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mw=`#ifdef USE_SKINNING
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
#endif`,ww=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Aw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cw=`#ifdef USE_TRANSMISSION
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
#endif`,bw=`#ifdef USE_TRANSMISSION
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
#endif`,Pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iw=`uniform sampler2D t2D;
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
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ow=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`#include <common>
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
}`,Hw=`#if DEPTH_PACKING == 3200
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
}`,Vw=`#define DISTANCE
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
}`,Gw=`#define DISTANCE
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
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`uniform float scale;
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
}`,$w=`uniform vec3 diffuse;
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
}`,Yw=`#include <common>
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
}`,qw=`uniform vec3 diffuse;
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
}`,Kw=`#define LAMBERT
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
}`,Zw=`#define LAMBERT
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
}`,Jw=`#define MATCAP
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
}`,Qw=`#define MATCAP
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
}`,eT=`#define NORMAL
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
}`,tT=`#define NORMAL
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
}`,nT=`#define PHONG
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
}`,iT=`#define PHONG
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
}`,rT=`#define STANDARD
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
}`,sT=`#define STANDARD
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
}`,oT=`#define TOON
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
}`,aT=`#define TOON
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
}`,lT=`uniform float size;
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
}`,uT=`uniform vec3 diffuse;
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
}`,cT=`#include <common>
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
}`,fT=`uniform vec3 color;
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
}`,dT=`uniform float rotation;
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
}`,hT=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:IE,alphahash_pars_fragment:FE,alphamap_fragment:OE,alphamap_pars_fragment:kE,alphatest_fragment:BE,alphatest_pars_fragment:zE,aomap_fragment:HE,aomap_pars_fragment:VE,batching_pars_vertex:GE,batching_vertex:WE,begin_vertex:XE,beginnormal_vertex:jE,bsdfs:$E,iridescence_fragment:YE,bumpmap_pars_fragment:qE,clipping_planes_fragment:KE,clipping_planes_pars_fragment:ZE,clipping_planes_pars_vertex:JE,clipping_planes_vertex:QE,color_fragment:eM,color_pars_fragment:tM,color_pars_vertex:nM,color_vertex:iM,common:rM,cube_uv_reflection_fragment:sM,defaultnormal_vertex:oM,displacementmap_pars_vertex:aM,displacementmap_vertex:lM,emissivemap_fragment:uM,emissivemap_pars_fragment:cM,colorspace_fragment:fM,colorspace_pars_fragment:dM,envmap_fragment:hM,envmap_common_pars_fragment:pM,envmap_pars_fragment:mM,envmap_pars_vertex:gM,envmap_physical_pars_fragment:AM,envmap_vertex:vM,fog_vertex:_M,fog_pars_vertex:xM,fog_fragment:yM,fog_pars_fragment:SM,gradientmap_pars_fragment:EM,lightmap_pars_fragment:MM,lights_lambert_fragment:wM,lights_lambert_pars_fragment:TM,lights_pars_begin:RM,lights_toon_fragment:CM,lights_toon_pars_fragment:bM,lights_phong_fragment:PM,lights_phong_pars_fragment:LM,lights_physical_fragment:DM,lights_physical_pars_fragment:UM,lights_fragment_begin:NM,lights_fragment_maps:IM,lights_fragment_end:FM,logdepthbuf_fragment:OM,logdepthbuf_pars_fragment:kM,logdepthbuf_pars_vertex:BM,logdepthbuf_vertex:zM,map_fragment:HM,map_pars_fragment:VM,map_particle_fragment:GM,map_particle_pars_fragment:WM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:jM,morphinstance_vertex:$M,morphcolor_vertex:YM,morphnormal_vertex:qM,morphtarget_pars_vertex:KM,morphtarget_vertex:ZM,normal_fragment_begin:JM,normal_fragment_maps:QM,normal_pars_fragment:ew,normal_pars_vertex:tw,normal_vertex:nw,normalmap_pars_fragment:iw,clearcoat_normal_fragment_begin:rw,clearcoat_normal_fragment_maps:sw,clearcoat_pars_fragment:ow,iridescence_pars_fragment:aw,opaque_fragment:lw,packing:uw,premultiplied_alpha_fragment:cw,project_vertex:fw,dithering_fragment:dw,dithering_pars_fragment:hw,roughnessmap_fragment:pw,roughnessmap_pars_fragment:mw,shadowmap_pars_fragment:gw,shadowmap_pars_vertex:vw,shadowmap_vertex:_w,shadowmask_pars_fragment:xw,skinbase_vertex:yw,skinning_pars_vertex:Sw,skinning_vertex:Ew,skinnormal_vertex:Mw,specularmap_fragment:ww,specularmap_pars_fragment:Tw,tonemapping_fragment:Rw,tonemapping_pars_fragment:Aw,transmission_fragment:Cw,transmission_pars_fragment:bw,uv_pars_fragment:Pw,uv_pars_vertex:Lw,uv_vertex:Dw,worldpos_vertex:Uw,background_vert:Nw,background_frag:Iw,backgroundCube_vert:Fw,backgroundCube_frag:Ow,cube_vert:kw,cube_frag:Bw,depth_vert:zw,depth_frag:Hw,distanceRGBA_vert:Vw,distanceRGBA_frag:Gw,equirect_vert:Ww,equirect_frag:Xw,linedashed_vert:jw,linedashed_frag:$w,meshbasic_vert:Yw,meshbasic_frag:qw,meshlambert_vert:Kw,meshlambert_frag:Zw,meshmatcap_vert:Jw,meshmatcap_frag:Qw,meshnormal_vert:eT,meshnormal_frag:tT,meshphong_vert:nT,meshphong_frag:iT,meshphysical_vert:rT,meshphysical_frag:sT,meshtoon_vert:oT,meshtoon_frag:aT,points_vert:lT,points_frag:uT,shadow_vert:cT,shadow_frag:fT,sprite_vert:dT,sprite_frag:hT},Ue={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},xi={basic:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Rn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Rn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Rn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Rn([Ue.points,Ue.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Rn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Rn([Ue.common,Ue.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Rn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Rn([Ue.sprite,Ue.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Rn([Ue.common,Ue.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Rn([Ue.lights,Ue.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};xi.physical={uniforms:Rn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const ql={r:0,b:0,g:0},Jr=new qi,pT=new $t;function mT(r,e,t,s,o,l,c){const f=new bt(0);let d=l===!0?0:1,p,m,v=null,x=0,S=null;function E(b){let R=b.isScene===!0?b.background:null;return R&&R.isTexture&&(R=(b.backgroundBlurriness>0?t:e).get(R)),R}function M(b){let R=!1;const H=E(b);H===null?y(f,d):H&&H.isColor&&(y(H,1),R=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(b,R){const H=E(R);H&&(H.isCubeTexture||H.mapping===vu)?(m===void 0&&(m=new Si(new po(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:lo(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,F,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Jr.copy(R.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),m.material.uniforms.envMap.value=H,m.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(pT.makeRotationFromEuler(Jr)),m.material.toneMapped=Tt.getTransfer(H.colorSpace)!==Dt,(v!==H||x!==H.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,v=H,x=H.version,S=r.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Si(new xu(2,2),new Ur({name:"BackgroundMaterial",uniforms:lo(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(H.colorSpace)!==Dt,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||x!==H.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,v=H,x=H.version,S=r.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function y(b,R){b.getRGB(ql,Vv(r)),s.buffers.color.setClear(ql.r,ql.g,ql.b,R,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(b,R=1){f.set(b),d=R,y(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,y(f,d)},render:M,addToRenderList:_,dispose:L}}function gT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=x(null);let l=o,c=!1;function f(A,B,ue,Q,ae){let me=!1;const te=v(Q,ue,B);l!==te&&(l=te,p(l.object)),me=S(A,Q,ue,ae),me&&E(A,Q,ue,ae),ae!==null&&e.update(ae,r.ELEMENT_ARRAY_BUFFER),(me||c)&&(c=!1,R(A,B,ue,Q),ae!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function d(){return r.createVertexArray()}function p(A){return r.bindVertexArray(A)}function m(A){return r.deleteVertexArray(A)}function v(A,B,ue){const Q=ue.wireframe===!0;let ae=s[A.id];ae===void 0&&(ae={},s[A.id]=ae);let me=ae[B.id];me===void 0&&(me={},ae[B.id]=me);let te=me[Q];return te===void 0&&(te=x(d()),me[Q]=te),te}function x(A){const B=[],ue=[],Q=[];for(let ae=0;ae<t;ae++)B[ae]=0,ue[ae]=0,Q[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ue,attributeDivisors:Q,object:A,attributes:{},index:null}}function S(A,B,ue,Q){const ae=l.attributes,me=B.attributes;let te=0;const ve=ue.getAttributes();for(const V in ve)if(ve[V].location>=0){const oe=ae[V];let N=me[V];if(N===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(N=A.instanceColor)),oe===void 0||oe.attribute!==N||N&&oe.data!==N.data)return!0;te++}return l.attributesNum!==te||l.index!==Q}function E(A,B,ue,Q){const ae={},me=B.attributes;let te=0;const ve=ue.getAttributes();for(const V in ve)if(ve[V].location>=0){let oe=me[V];oe===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(oe=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(oe=A.instanceColor));const N={};N.attribute=oe,oe&&oe.data&&(N.data=oe.data),ae[V]=N,te++}l.attributes=ae,l.attributesNum=te,l.index=Q}function M(){const A=l.newAttributes;for(let B=0,ue=A.length;B<ue;B++)A[B]=0}function _(A){y(A,0)}function y(A,B){const ue=l.newAttributes,Q=l.enabledAttributes,ae=l.attributeDivisors;ue[A]=1,Q[A]===0&&(r.enableVertexAttribArray(A),Q[A]=1),ae[A]!==B&&(r.vertexAttribDivisor(A,B),ae[A]=B)}function L(){const A=l.newAttributes,B=l.enabledAttributes;for(let ue=0,Q=B.length;ue<Q;ue++)B[ue]!==A[ue]&&(r.disableVertexAttribArray(ue),B[ue]=0)}function b(A,B,ue,Q,ae,me,te){te===!0?r.vertexAttribIPointer(A,B,ue,ae,me):r.vertexAttribPointer(A,B,ue,Q,ae,me)}function R(A,B,ue,Q){M();const ae=Q.attributes,me=ue.getAttributes(),te=B.defaultAttributeValues;for(const ve in me){const V=me[ve];if(V.location>=0){let le=ae[ve];if(le===void 0&&(ve==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),ve==="instanceColor"&&A.instanceColor&&(le=A.instanceColor)),le!==void 0){const oe=le.normalized,N=le.itemSize,ie=e.get(le);if(ie===void 0)continue;const Oe=ie.buffer,ee=ie.type,fe=ie.bytesPerElement,Re=ee===r.INT||ee===r.UNSIGNED_INT||le.gpuType===Hd;if(le.isInterleavedBufferAttribute){const Ee=le.data,Ae=Ee.stride,Ke=le.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)y(V.location+Ve,Ee.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)_(V.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let Ve=0;Ve<V.locationSize;Ve++)b(V.location+Ve,N/V.locationSize,ee,oe,Ae*fe,(Ke+N/V.locationSize*Ve)*fe,Re)}else{if(le.isInstancedBufferAttribute){for(let Ee=0;Ee<V.locationSize;Ee++)y(V.location+Ee,le.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)_(V.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let Ee=0;Ee<V.locationSize;Ee++)b(V.location+Ee,N/V.locationSize,ee,oe,N*fe,N/V.locationSize*Ee*fe,Re)}}else if(te!==void 0){const oe=te[ve];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(V.location,oe);break;case 3:r.vertexAttrib3fv(V.location,oe);break;case 4:r.vertexAttrib4fv(V.location,oe);break;default:r.vertexAttrib1fv(V.location,oe)}}}}L()}function H(){W();for(const A in s){const B=s[A];for(const ue in B){const Q=B[ue];for(const ae in Q)m(Q[ae].object),delete Q[ae];delete B[ue]}delete s[A]}}function I(A){if(s[A.id]===void 0)return;const B=s[A.id];for(const ue in B){const Q=B[ue];for(const ae in Q)m(Q[ae].object),delete Q[ae];delete B[ue]}delete s[A.id]}function F(A){for(const B in s){const ue=s[B];if(ue[A.id]===void 0)continue;const Q=ue[A.id];for(const ae in Q)m(Q[ae].object),delete Q[ae];delete ue[A.id]}}function W(){P(),c=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:W,resetDefaultState:P,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:_,disableUnusedAttributes:L}}function vT(r,e,t){let s;function o(p){s=p}function l(p,m){r.drawArrays(s,p,m),t.update(m,s,1)}function c(p,m,v){v!==0&&(r.drawArraysInstanced(s,p,m,v),t.update(m,s,v))}function f(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,v);let S=0;for(let E=0;E<v;E++)S+=m[E];t.update(S,s,1)}function d(p,m,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],m[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,m,0,x,0,v);let E=0;for(let M=0;M<v;M++)E+=m[M]*x[M];t.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function _T(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==ci&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const W=F===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==wi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Wi&&!W)}function d(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=d(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const v=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:H,maxSamples:I}}function xT(r){const e=this;let t=null,s=0,o=!1,l=!1;const c=new es,f=new ut,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||s!==0||o;return o=x,s=v.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){t=m(v,x,0)},this.setState=function(v,x,S){const E=v.clippingPlanes,M=v.clipIntersection,_=v.clipShadows,y=r.get(v);if(!o||E===null||E.length===0||l&&!_)l?m(null):p();else{const L=l?0:s,b=L*4;let R=y.clippingState||null;d.value=R,R=m(E,x,b,S);for(let H=0;H!==b;++H)R[H]=t[H];y.clippingState=R,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(v,x,S,E){const M=v!==null?v.length:0;let _=null;if(M!==0){if(_=d.value,E!==!0||_===null){const y=S+M*4,L=x.matrixWorldInverse;f.getNormalMatrix(L),(_===null||_.length<y)&&(_=new Float32Array(y));for(let b=0,R=S;b!==M;++b,R+=4)c.copy(v[b]).applyMatrix4(L,f),c.normal.toArray(_,R),_[R+3]=c.constant}d.value=_,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}function yT(r){let e=new WeakMap;function t(c,f){return f===ed?c.mapping=so:f===td&&(c.mapping=oo),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===ed||f===td)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new gE(d.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const Qs=4,dg=[.125,.215,.35,.446,.526,.582],is=20,Uf=new jv,hg=new bt;let Nf=null,If=0,Ff=0,Of=!1;const ts=(1+Math.sqrt(5))/2,Ks=1/ts,pg=[new se(-ts,Ks,0),new se(ts,Ks,0),new se(-Ks,0,ts),new se(Ks,0,ts),new se(0,ts,-Ks),new se(0,ts,Ks),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],ST=new se;class mg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100,l={}){const{size:c=256,position:f=ST}=l;Nf=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,s,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nf,If,Ff),this._renderer.xr.enabled=Of,e.scissorTest=!1,Kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nf=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:_a,format:ci,colorSpace:ao,depthBuffer:!1},o=gg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ET(l)),this._blurMaterial=MT(l,e,t)}return o}_compileMaterial(e){const t=new Si(this._lodPlanes[0],e);this._renderer.compile(t,Uf)}_sceneToCubeUV(e,t,s,o,l){const d=new Jn(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(hg),v.toneMapping=ji,v.autoClear=!1;const E=new Ar({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),M=new Si(new po,E);let _=!1;const y=e.background;y?y.isColor&&(E.color.copy(y),e.background=null,_=!0):(E.color.copy(hg),_=!0);for(let L=0;L<6;L++){const b=L%3;b===0?(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[L],l.y,l.z)):b===1?(d.up.set(0,0,p[L]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[L],l.z)):(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[L]));const R=this._cubeSize;Kl(o,b*R,L>2?R:0,R,R),v.setRenderTarget(o),_&&v.render(M,d),v.render(e,d)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===so||e.mapping===oo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=_g()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Si(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Kl(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(c,Uf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=pg[(o-l-1)%pg.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Si(this._lodPlanes[o],p),x=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*is-1),M=l/E,_=isFinite(l)?1+Math.floor(m*M):is;_>is&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${is}`);const y=[];let L=0;for(let F=0;F<is;++F){const W=F/M,P=Math.exp(-W*W/2);y.push(P),F===0?L+=P:F<_&&(L+=2*P)}for(let F=0;F<y.length;F++)y[F]=y[F]/L;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=y,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:b}=this;x.dTheta.value=E,x.mipInt.value=b-s;const R=this._sizeLods[o],H=3*R*(o>b-Qs?o-b+Qs:0),I=4*(this._cubeSize-R);Kl(t,H,I,3*R,2*R),d.setRenderTarget(t),d.render(v,Uf)}}function ET(r){const e=[],t=[],s=[];let o=r;const l=r-Qs+1+dg.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let d=1/f;c>r-Qs?d=dg[c-r+Qs-1]:c===0&&(d=0),s.push(d);const p=1/(f-2),m=-p,v=1+p,x=[m,m,v,m,v,v,m,m,v,v,m,v],S=6,E=6,M=3,_=2,y=1,L=new Float32Array(M*E*S),b=new Float32Array(_*E*S),R=new Float32Array(y*E*S);for(let I=0;I<S;I++){const F=I%3*2/3-1,W=I>2?0:-1,P=[F,W,0,F+2/3,W,0,F+2/3,W+1,0,F,W,0,F+2/3,W+1,0,F,W+1,0];L.set(P,M*E*I),b.set(x,_*E*I);const A=[I,I,I,I,I,I];R.set(A,y*E*I)}const H=new fs;H.setAttribute("position",new Ei(L,M)),H.setAttribute("uv",new Ei(b,_)),H.setAttribute("faceIndex",new Ei(R,y)),e.push(H),o>Qs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function gg(r,e,t){const s=new us(r,e,t);return s.texture.mapping=vu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Kl(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function MT(r,e,t){const s=new Float32Array(is),o=new se(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Jd(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function vg(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jd(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function _g(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Jd(){return`

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
	`}function wT(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const d=f.mapping,p=d===ed||d===td,m=d===so||d===oo;if(p||m){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new mg(r)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||m&&S&&o(S)?(t===null&&(t=new mg(r)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function TT(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&to("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function RT(r,e,t,s){const o={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",c),delete o[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(v,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function d(v){const x=v.attributes;for(const S in x)e.update(x[S],r.ARRAY_BUFFER)}function p(v){const x=[],S=v.index,E=v.attributes.position;let M=0;if(S!==null){const L=S.array;M=S.version;for(let b=0,R=L.length;b<R;b+=3){const H=L[b+0],I=L[b+1],F=L[b+2];x.push(H,I,I,F,F,H)}}else if(E!==void 0){const L=E.array;M=E.version;for(let b=0,R=L.length/3-1;b<R;b+=3){const H=b+0,I=b+1,F=b+2;x.push(H,I,I,F,F,H)}}else return;const _=new(Fv(x)?Hv:zv)(x,1);_.version=M;const y=l.get(v);y&&e.remove(y),l.set(v,_)}function m(v){const x=l.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function AT(r,e,t){let s;function o(x){s=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function d(x,S){r.drawElements(s,S,l,x*c),t.update(S,s,1)}function p(x,S,E){E!==0&&(r.drawElementsInstanced(s,S,l,x*c,E),t.update(S,s,E))}function m(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,x,0,E);let _=0;for(let y=0;y<E;y++)_+=S[y];t.update(_,s,1)}function v(x,S,E,M){if(E===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<x.length;y++)p(x[y]/c,S[y],M[y]);else{_.multiDrawElementsInstancedWEBGL(s,S,0,l,x,0,M,0,E);let y=0;for(let L=0;L<E;L++)y+=S[L]*M[L];t.update(y,s,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function CT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function bT(r,e,t){const s=new WeakMap,o=new jt;function l(c,f,d){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let x=s.get(f);if(x===void 0||x.count!==v){let P=function(){F.dispose(),s.delete(f),f.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const S=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],y=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let b=0;S===!0&&(b=1),E===!0&&(b=2),M===!0&&(b=3);let R=f.attributes.position.count*b,H=1;R>e.maxTextureSize&&(H=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const I=new Float32Array(R*H*4*v),F=new Ov(I,R,H,v);F.type=Wi,F.needsUpdate=!0;const W=b*4;for(let A=0;A<v;A++){const B=_[A],ue=y[A],Q=L[A],ae=R*H*4*A;for(let me=0;me<B.count;me++){const te=me*W;S===!0&&(o.fromBufferAttribute(B,me),I[ae+te+0]=o.x,I[ae+te+1]=o.y,I[ae+te+2]=o.z,I[ae+te+3]=0),E===!0&&(o.fromBufferAttribute(ue,me),I[ae+te+4]=o.x,I[ae+te+5]=o.y,I[ae+te+6]=o.z,I[ae+te+7]=0),M===!0&&(o.fromBufferAttribute(Q,me),I[ae+te+8]=o.x,I[ae+te+9]=o.y,I[ae+te+10]=o.z,I[ae+te+11]=Q.itemSize===4?o.w:1)}}x={count:v,texture:F,size:new At(R,H)},s.set(f,x),f.addEventListener("dispose",P)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let S=0;for(let M=0;M<p.length;M++)S+=p[M];const E=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",p)}d.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function PT(r,e,t,s){let o=new WeakMap;function l(d){const p=s.render.frame,m=d.geometry,v=e.get(d,m);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==p&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const x=d.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return v}function c(){o=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const Yv=new Cn,xg=new Xv(1,1),qv=new Ov,Kv=new JS,Zv=new Wv,yg=[],Sg=[],Eg=new Float32Array(16),Mg=new Float32Array(9),wg=new Float32Array(4);function mo(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=yg[o];if(l===void 0&&(l=new Float32Array(o),yg[o]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function yu(r,e){let t=Sg[e];t===void 0&&(t=new Int32Array(e),Sg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function LT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function DT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function UT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function NT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function IT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,s))return;wg.set(s),r.uniformMatrix2fv(this.addr,!1,wg),en(t,s)}}function FT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,s))return;Mg.set(s),r.uniformMatrix3fv(this.addr,!1,Mg),en(t,s)}}function OT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,s))return;Eg.set(s),r.uniformMatrix4fv(this.addr,!1,Eg),en(t,s)}}function kT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function BT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function zT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function HT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function VT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function GT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function WT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function XT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function jT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(xg.compareFunction=Iv,l=xg):l=Yv,t.setTexture2D(e||l,o)}function $T(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||Kv,o)}function YT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||Zv,o)}function qT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||qv,o)}function KT(r){switch(r){case 5126:return LT;case 35664:return DT;case 35665:return UT;case 35666:return NT;case 35674:return IT;case 35675:return FT;case 35676:return OT;case 5124:case 35670:return kT;case 35667:case 35671:return BT;case 35668:case 35672:return zT;case 35669:case 35673:return HT;case 5125:return VT;case 36294:return GT;case 36295:return WT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return qT}}function ZT(r,e){r.uniform1fv(this.addr,e)}function JT(r,e){const t=mo(e,this.size,2);r.uniform2fv(this.addr,t)}function QT(r,e){const t=mo(e,this.size,3);r.uniform3fv(this.addr,t)}function e1(r,e){const t=mo(e,this.size,4);r.uniform4fv(this.addr,t)}function t1(r,e){const t=mo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function n1(r,e){const t=mo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function i1(r,e){const t=mo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function r1(r,e){r.uniform1iv(this.addr,e)}function s1(r,e){r.uniform2iv(this.addr,e)}function o1(r,e){r.uniform3iv(this.addr,e)}function a1(r,e){r.uniform4iv(this.addr,e)}function l1(r,e){r.uniform1uiv(this.addr,e)}function u1(r,e){r.uniform2uiv(this.addr,e)}function c1(r,e){r.uniform3uiv(this.addr,e)}function f1(r,e){r.uniform4uiv(this.addr,e)}function d1(r,e,t){const s=this.cache,o=e.length,l=yu(t,o);Qt(s,l)||(r.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||Yv,l[c])}function h1(r,e,t){const s=this.cache,o=e.length,l=yu(t,o);Qt(s,l)||(r.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Kv,l[c])}function p1(r,e,t){const s=this.cache,o=e.length,l=yu(t,o);Qt(s,l)||(r.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Zv,l[c])}function m1(r,e,t){const s=this.cache,o=e.length,l=yu(t,o);Qt(s,l)||(r.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||qv,l[c])}function g1(r){switch(r){case 5126:return ZT;case 35664:return JT;case 35665:return QT;case 35666:return e1;case 35674:return t1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return r1;case 35667:case 35671:return s1;case 35668:case 35672:return o1;case 35669:case 35673:return a1;case 5125:return l1;case 36294:return u1;case 36295:return c1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}class v1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=KT(t.type)}}class _1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g1(t.type)}}class x1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const kf=/(\w+)(\])?(\[|\.)?/g;function Tg(r,e){r.seq.push(e),r.map[e.id]=e}function y1(r,e,t){const s=r.name,o=s.length;for(kf.lastIndex=0;;){const l=kf.exec(s),c=kf.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===o){Tg(t,p===void 0?new v1(f,r,e):new _1(f,r,e));break}else{let v=t.map[f];v===void 0&&(v=new x1(f),Tg(t,v)),t=v}}}class au{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);y1(l,c,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=s[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function Rg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const S1=37297;let E1=0;function M1(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const Ag=new ut;function w1(r){Tt._getMatrix(Ag,Tt.workingColorSpace,r);const e=`mat3( ${Ag.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(r)){case cu:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Cg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+M1(r.getShaderSource(e),c)}else return o}function T1(r,e){const t=w1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function R1(r,e){let t;switch(e){case aS:t="Linear";break;case lS:t="Reinhard";break;case uS:t="Cineon";break;case cS:t="ACESFilmic";break;case dS:t="AgX";break;case hS:t="Neutral";break;case fS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zl=new se;function A1(){Tt.getLuminanceCoefficients(Zl);const r=Zl.x.toFixed(4),e=Zl.y.toFixed(4),t=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function b1(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function P1(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function ta(r){return r!==""}function bg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const L1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(r){return r.replace(L1,U1)}const D1=new Map;function U1(r,e){let t=ht[e];if(t===void 0){const s=D1.get(e);if(s!==void 0)t=ht[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return bd(t)}const N1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lg(r){return r.replace(N1,I1)}function I1(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Dg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function F1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===wv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===zy?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function O1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k1(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===oo&&(e="ENVMAP_MODE_REFRACTION"),e}function B1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Tv:e="ENVMAP_BLENDING_MULTIPLY";break;case sS:e="ENVMAP_BLENDING_MIX";break;case oS:e="ENVMAP_BLENDING_ADD";break}return e}function z1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function H1(r,e,t,s){const o=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=F1(t),p=O1(t),m=k1(t),v=B1(t),x=z1(t),S=C1(t),E=b1(l),M=o.createProgram();let _,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ta).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ta).join(`
`),y.length>0&&(y+=`
`)):(_=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),y=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?ht.tonemapping_pars_fragment:"",t.toneMapping!==ji?R1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,T1("linearToOutputTexel",t.outputColorSpace),A1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),c=bd(c),c=bg(c,t),c=Pg(c,t),f=bd(f),f=bg(f,t),f=Pg(f,t),c=Lg(c),f=Lg(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",t.glslVersion===Wm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=L+_+c,R=L+y+f,H=Rg(o,o.VERTEX_SHADER,b),I=Rg(o,o.FRAGMENT_SHADER,R);o.attachShader(M,H),o.attachShader(M,I),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function F(B){if(r.debug.checkShaderErrors){const ue=o.getProgramInfoLog(M).trim(),Q=o.getShaderInfoLog(H).trim(),ae=o.getShaderInfoLog(I).trim();let me=!0,te=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(me=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,M,H,I);else{const ve=Cg(o,H,"vertex"),V=Cg(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ue+`
`+ve+`
`+V)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(Q===""||ae==="")&&(te=!1);te&&(B.diagnostics={runnable:me,programLog:ue,vertexShader:{log:Q,prefix:_},fragmentShader:{log:ae,prefix:y}})}o.deleteShader(H),o.deleteShader(I),W=new au(o,M),P=P1(o,M)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(M,S1)),A},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E1++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=H,this.fragmentShader=I,this}let V1=0;class G1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new W1(e),t.set(e,s)),s}}class W1{constructor(e){this.id=V1++,this.code=e,this.usedTimes=0}}function X1(r,e,t,s,o,l,c){const f=new kv,d=new G1,p=new Set,m=[],v=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return p.add(P),P===0?"uv":`uv${P}`}function _(P,A,B,ue,Q){const ae=ue.fog,me=Q.geometry,te=P.isMeshStandardMaterial?ue.environment:null,ve=(P.isMeshStandardMaterial?t:e).get(P.envMap||te),V=ve&&ve.mapping===vu?ve.image.height:null,le=E[P.type];P.precision!==null&&(S=o.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const oe=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,N=oe!==void 0?oe.length:0;let ie=0;me.morphAttributes.position!==void 0&&(ie=1),me.morphAttributes.normal!==void 0&&(ie=2),me.morphAttributes.color!==void 0&&(ie=3);let Oe,ee,fe,Re;if(le){const yt=xi[le];Oe=yt.vertexShader,ee=yt.fragmentShader}else Oe=P.vertexShader,ee=P.fragmentShader,d.update(P),fe=d.getVertexShaderID(P),Re=d.getFragmentShaderID(P);const Ee=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Ke=Q.isInstancedMesh===!0,Ve=Q.isBatchedMesh===!0,Mt=!!P.map,Rt=!!P.matcap,ct=!!ve,k=!!P.aoMap,Wt=!!P.lightMap,pt=!!P.bumpMap,xt=!!P.normalMap,Ge=!!P.displacementMap,ft=!!P.emissiveMap,qe=!!P.metalnessMap,tt=!!P.roughnessMap,It=P.anisotropy>0,D=P.clearcoat>0,T=P.dispersion>0,J=P.iridescence>0,de=P.sheen>0,ge=P.transmission>0,ce=It&&!!P.anisotropyMap,je=D&&!!P.clearcoatMap,be=D&&!!P.clearcoatNormalMap,ke=D&&!!P.clearcoatRoughnessMap,$e=J&&!!P.iridescenceMap,_e=J&&!!P.iridescenceThicknessMap,Ne=de&&!!P.sheenColorMap,nt=de&&!!P.sheenRoughnessMap,Je=!!P.specularMap,Le=!!P.specularColorMap,st=!!P.specularIntensityMap,O=ge&&!!P.transmissionMap,Te=ge&&!!P.thicknessMap,pe=!!P.gradientMap,Pe=!!P.alphaMap,ye=P.alphaTest>0,he=!!P.alphaHash,Ie=!!P.extensions;let et=ji;P.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(et=r.toneMapping);const Pt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:Oe,fragmentShader:ee,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:Re,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ve,batchingColor:Ve&&Q._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&Q.instanceColor!==null,instancingMorph:Ke&&Q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:ao,alphaToCoverage:!!P.alphaToCoverage,map:Mt,matcap:Rt,envMap:ct,envMapMode:ct&&ve.mapping,envMapCubeUVHeight:V,aoMap:k,lightMap:Wt,bumpMap:pt,normalMap:xt,displacementMap:x&&Ge,emissiveMap:ft,normalMapObjectSpace:xt&&P.normalMapType===_S,normalMapTangentSpace:xt&&P.normalMapType===vS,metalnessMap:qe,roughnessMap:tt,anisotropy:It,anisotropyMap:ce,clearcoat:D,clearcoatMap:je,clearcoatNormalMap:be,clearcoatRoughnessMap:ke,dispersion:T,iridescence:J,iridescenceMap:$e,iridescenceThicknessMap:_e,sheen:de,sheenColorMap:Ne,sheenRoughnessMap:nt,specularMap:Je,specularColorMap:Le,specularIntensityMap:st,transmission:ge,transmissionMap:O,thicknessMap:Te,gradientMap:pe,opaque:P.transparent===!1&&P.blending===eo&&P.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ye,alphaHash:he,combine:P.combine,mapUv:Mt&&M(P.map.channel),aoMapUv:k&&M(P.aoMap.channel),lightMapUv:Wt&&M(P.lightMap.channel),bumpMapUv:pt&&M(P.bumpMap.channel),normalMapUv:xt&&M(P.normalMap.channel),displacementMapUv:Ge&&M(P.displacementMap.channel),emissiveMapUv:ft&&M(P.emissiveMap.channel),metalnessMapUv:qe&&M(P.metalnessMap.channel),roughnessMapUv:tt&&M(P.roughnessMap.channel),anisotropyMapUv:ce&&M(P.anisotropyMap.channel),clearcoatMapUv:je&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:be&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:nt&&M(P.sheenRoughnessMap.channel),specularMapUv:Je&&M(P.specularMap.channel),specularColorMapUv:Le&&M(P.specularColorMap.channel),specularIntensityMapUv:st&&M(P.specularIntensityMap.channel),transmissionMapUv:O&&M(P.transmissionMap.channel),thicknessMapUv:Te&&M(P.thicknessMap.channel),alphaMapUv:Pe&&M(P.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(xt||It),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!me.attributes.uv&&(Mt||Pe),fog:!!ae,useFog:P.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:et,decodeVideoTexture:Mt&&P.map.isVideoTexture===!0&&Tt.getTransfer(P.map.colorSpace)===Dt,decodeVideoTextureEmissive:ft&&P.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(P.emissiveMap.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Vi,flipSided:P.side===Fn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ie&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&P.extensions.multiDraw===!0||Ve)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function y(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)A.push(B),A.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(L(A,P),b(A,P),A.push(r.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function L(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function b(P,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),A.gradientMap&&f.enable(22),P.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),P.push(f.mask)}function R(P){const A=E[P.type];let B;if(A){const ue=xi[A];B=dE.clone(ue.uniforms)}else B=P.uniforms;return B}function H(P,A){let B;for(let ue=0,Q=m.length;ue<Q;ue++){const ae=m[ue];if(ae.cacheKey===A){B=ae,++B.usedTimes;break}}return B===void 0&&(B=new H1(r,A,P,l),m.push(B)),B}function I(P){if(--P.usedTimes===0){const A=m.indexOf(P);m[A]=m[m.length-1],m.pop(),P.destroy()}}function F(P){d.remove(P)}function W(){d.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:R,acquireProgram:H,releaseProgram:I,releaseShaderCache:F,programs:m,dispose:W}}function j1(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function o(c,f,d){r.get(c)[f]=d}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function $1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ug(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ng(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(v,x,S,E,M,_){let y=r[e];return y===void 0?(y={id:v.id,object:v,geometry:x,material:S,groupOrder:E,renderOrder:v.renderOrder,z:M,group:_},r[e]=y):(y.id=v.id,y.object=v,y.geometry=x,y.material=S,y.groupOrder=E,y.renderOrder=v.renderOrder,y.z=M,y.group=_),e++,y}function f(v,x,S,E,M,_){const y=c(v,x,S,E,M,_);S.transmission>0?s.push(y):S.transparent===!0?o.push(y):t.push(y)}function d(v,x,S,E,M,_){const y=c(v,x,S,E,M,_);S.transmission>0?s.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function p(v,x){t.length>1&&t.sort(v||$1),s.length>1&&s.sort(x||Ug),o.length>1&&o.sort(x||Ug)}function m(){for(let v=e,x=r.length;v<x;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:f,unshift:d,finish:m,sort:p}}function Y1(){let r=new WeakMap;function e(s,o){const l=r.get(s);let c;return l===void 0?(c=new Ng,r.set(s,[c])):o>=l.length?(c=new Ng,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function q1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new bt};break;case"SpotLight":t={position:new se,direction:new se,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new se,halfWidth:new se,halfHeight:new se};break}return r[e.id]=t,t}}}function K1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Z1=0;function J1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Q1(r){const e=new q1,t=K1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new se);const o=new se,l=new $t,c=new $t;function f(p){let m=0,v=0,x=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let S=0,E=0,M=0,_=0,y=0,L=0,b=0,R=0,H=0,I=0,F=0;p.sort(J1);for(let P=0,A=p.length;P<A;P++){const B=p[P],ue=B.color,Q=B.intensity,ae=B.distance,me=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=ue.r*Q,v+=ue.g*Q,x+=ue.b*Q;else if(B.isLightProbe){for(let te=0;te<9;te++)s.probe[te].addScaledVector(B.sh.coefficients[te],Q);F++}else if(B.isDirectionalLight){const te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ve=B.shadow,V=t.get(B);V.shadowIntensity=ve.intensity,V.shadowBias=ve.bias,V.shadowNormalBias=ve.normalBias,V.shadowRadius=ve.radius,V.shadowMapSize=ve.mapSize,s.directionalShadow[S]=V,s.directionalShadowMap[S]=me,s.directionalShadowMatrix[S]=B.shadow.matrix,L++}s.directional[S]=te,S++}else if(B.isSpotLight){const te=e.get(B);te.position.setFromMatrixPosition(B.matrixWorld),te.color.copy(ue).multiplyScalar(Q),te.distance=ae,te.coneCos=Math.cos(B.angle),te.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),te.decay=B.decay,s.spot[M]=te;const ve=B.shadow;if(B.map&&(s.spotLightMap[H]=B.map,H++,ve.updateMatrices(B),B.castShadow&&I++),s.spotLightMatrix[M]=ve.matrix,B.castShadow){const V=t.get(B);V.shadowIntensity=ve.intensity,V.shadowBias=ve.bias,V.shadowNormalBias=ve.normalBias,V.shadowRadius=ve.radius,V.shadowMapSize=ve.mapSize,s.spotShadow[M]=V,s.spotShadowMap[M]=me,R++}M++}else if(B.isRectAreaLight){const te=e.get(B);te.color.copy(ue).multiplyScalar(Q),te.halfWidth.set(B.width*.5,0,0),te.halfHeight.set(0,B.height*.5,0),s.rectArea[_]=te,_++}else if(B.isPointLight){const te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity),te.distance=B.distance,te.decay=B.decay,B.castShadow){const ve=B.shadow,V=t.get(B);V.shadowIntensity=ve.intensity,V.shadowBias=ve.bias,V.shadowNormalBias=ve.normalBias,V.shadowRadius=ve.radius,V.shadowMapSize=ve.mapSize,V.shadowCameraNear=ve.camera.near,V.shadowCameraFar=ve.camera.far,s.pointShadow[E]=V,s.pointShadowMap[E]=me,s.pointShadowMatrix[E]=B.shadow.matrix,b++}s.point[E]=te,E++}else if(B.isHemisphereLight){const te=e.get(B);te.skyColor.copy(B.color).multiplyScalar(Q),te.groundColor.copy(B.groundColor).multiplyScalar(Q),s.hemi[y]=te,y++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=v,s.ambient[2]=x;const W=s.hash;(W.directionalLength!==S||W.pointLength!==E||W.spotLength!==M||W.rectAreaLength!==_||W.hemiLength!==y||W.numDirectionalShadows!==L||W.numPointShadows!==b||W.numSpotShadows!==R||W.numSpotMaps!==H||W.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=M,s.rectArea.length=_,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=R+H-I,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=F,W.directionalLength=S,W.pointLength=E,W.spotLength=M,W.rectAreaLength=_,W.hemiLength=y,W.numDirectionalShadows=L,W.numPointShadows=b,W.numSpotShadows=R,W.numSpotMaps=H,W.numLightProbes=F,s.version=Z1++)}function d(p,m){let v=0,x=0,S=0,E=0,M=0;const _=m.matrixWorldInverse;for(let y=0,L=p.length;y<L;y++){const b=p[y];if(b.isDirectionalLight){const R=s.directional[v];R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(_),v++}else if(b.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(_),S++}else if(b.isRectAreaLight){const R=s.rectArea[E];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(_),c.identity(),l.copy(b.matrixWorld),l.premultiply(_),c.extractRotation(l),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),E++}else if(b.isPointLight){const R=s.point[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(_),x++}else if(b.isHemisphereLight){const R=s.hemi[M];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(_),M++}}}return{setup:f,setupView:d,state:s}}function Ig(r){const e=new Q1(r),t=[],s=[];function o(m){p.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function eR(r){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new Ig(r),e.set(o,[f])):l>=c.length?(f=new Ig(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const tR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nR=`uniform sampler2D shadow_pass;
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
}`;function iR(r,e,t){let s=new Kd;const o=new At,l=new At,c=new jt,f=new EE({depthPacking:gS}),d=new ME,p={},m=t.maxTextureSize,v={[Dr]:Fn,[Fn]:Dr,[Vi]:Vi},x=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:tR,fragmentShader:nR}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new fs;E.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Si(E,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wv;let y=this.type;this.render=function(I,F,W){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;const P=r.getRenderTarget(),A=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),ue=r.state;ue.setBlending(Pr),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const Q=y!==Hi&&this.type===Hi,ae=y===Hi&&this.type!==Hi;for(let me=0,te=I.length;me<te;me++){const ve=I[me],V=ve.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ve,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const le=V.getFrameExtents();if(o.multiply(le),l.copy(V.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/le.x),o.x=l.x*le.x,V.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/le.y),o.y=l.y*le.y,V.mapSize.y=l.y)),V.map===null||Q===!0||ae===!0){const N=this.type!==Hi?{minFilter:dn,magFilter:dn}:{};V.map!==null&&V.map.dispose(),V.map=new us(o.x,o.y,N),V.map.texture.name=ve.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const oe=V.getViewportCount();for(let N=0;N<oe;N++){const ie=V.getViewport(N);c.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),ue.viewport(c),V.updateMatrices(ve,N),s=V.getFrustum(),R(F,W,V.camera,ve,this.type)}V.isPointLightShadow!==!0&&this.type===Hi&&L(V,W),V.needsUpdate=!1}y=this.type,_.needsUpdate=!1,r.setRenderTarget(P,A,B)};function L(I,F){const W=e.update(M);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new us(o.x,o.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(F,null,W,x,M,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(F,null,W,S,M,null)}function b(I,F,W,P){let A=null;const B=W.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)A=B;else if(A=W.isPointLight===!0?d:f,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ue=A.uuid,Q=F.uuid;let ae=p[ue];ae===void 0&&(ae={},p[ue]=ae);let me=ae[Q];me===void 0&&(me=A.clone(),ae[Q]=me,F.addEventListener("dispose",H)),A=me}if(A.visible=F.visible,A.wireframe=F.wireframe,P===Hi?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:v[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,W.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ue=r.properties.get(A);ue.light=W}return A}function R(I,F,W,P,A){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===Hi)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld);const Q=e.update(I),ae=I.material;if(Array.isArray(ae)){const me=Q.groups;for(let te=0,ve=me.length;te<ve;te++){const V=me[te],le=ae[V.materialIndex];if(le&&le.visible){const oe=b(I,le,P,A);I.onBeforeShadow(r,I,F,W,Q,oe,V),r.renderBufferDirect(W,null,Q,oe,I,V),I.onAfterShadow(r,I,F,W,Q,oe,V)}}}else if(ae.visible){const me=b(I,ae,P,A);I.onBeforeShadow(r,I,F,W,Q,me,null),r.renderBufferDirect(W,null,Q,me,I,null),I.onAfterShadow(r,I,F,W,Q,me,null)}}const ue=I.children;for(let Q=0,ae=ue.length;Q<ae;Q++)R(ue[Q],F,W,P,A)}function H(I){I.target.removeEventListener("dispose",H);for(const W in p){const P=p[W],A=I.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const rR={[$f]:Yf,[qf]:Jf,[Kf]:Qf,[ro]:Zf,[Yf]:$f,[Jf]:qf,[Qf]:Kf,[Zf]:ro};function sR(r,e){function t(){let O=!1;const Te=new jt;let pe=null;const Pe=new jt(0,0,0,0);return{setMask:function(ye){pe!==ye&&!O&&(r.colorMask(ye,ye,ye,ye),pe=ye)},setLocked:function(ye){O=ye},setClear:function(ye,he,Ie,et,Pt){Pt===!0&&(ye*=et,he*=et,Ie*=et),Te.set(ye,he,Ie,et),Pe.equals(Te)===!1&&(r.clearColor(ye,he,Ie,et),Pe.copy(Te))},reset:function(){O=!1,pe=null,Pe.set(-1,0,0,0)}}}function s(){let O=!1,Te=!1,pe=null,Pe=null,ye=null;return{setReversed:function(he){if(Te!==he){const Ie=e.get("EXT_clip_control");he?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Te=he;const et=ye;ye=null,this.setClear(et)}},getReversed:function(){return Te},setTest:function(he){he?Ee(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(he){pe!==he&&!O&&(r.depthMask(he),pe=he)},setFunc:function(he){if(Te&&(he=rR[he]),Pe!==he){switch(he){case $f:r.depthFunc(r.NEVER);break;case Yf:r.depthFunc(r.ALWAYS);break;case qf:r.depthFunc(r.LESS);break;case ro:r.depthFunc(r.LEQUAL);break;case Kf:r.depthFunc(r.EQUAL);break;case Zf:r.depthFunc(r.GEQUAL);break;case Jf:r.depthFunc(r.GREATER);break;case Qf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Pe=he}},setLocked:function(he){O=he},setClear:function(he){ye!==he&&(Te&&(he=1-he),r.clearDepth(he),ye=he)},reset:function(){O=!1,pe=null,Pe=null,ye=null,Te=!1}}}function o(){let O=!1,Te=null,pe=null,Pe=null,ye=null,he=null,Ie=null,et=null,Pt=null;return{setTest:function(yt){O||(yt?Ee(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(yt){Te!==yt&&!O&&(r.stencilMask(yt),Te=yt)},setFunc:function(yt,bn,Sn){(pe!==yt||Pe!==bn||ye!==Sn)&&(r.stencilFunc(yt,bn,Sn),pe=yt,Pe=bn,ye=Sn)},setOp:function(yt,bn,Sn){(he!==yt||Ie!==bn||et!==Sn)&&(r.stencilOp(yt,bn,Sn),he=yt,Ie=bn,et=Sn)},setLocked:function(yt){O=yt},setClear:function(yt){Pt!==yt&&(r.clearStencil(yt),Pt=yt)},reset:function(){O=!1,Te=null,pe=null,Pe=null,ye=null,he=null,Ie=null,et=null,Pt=null}}}const l=new t,c=new s,f=new o,d=new WeakMap,p=new WeakMap;let m={},v={},x=new WeakMap,S=[],E=null,M=!1,_=null,y=null,L=null,b=null,R=null,H=null,I=null,F=new bt(0,0,0),W=0,P=!1,A=null,B=null,ue=null,Q=null,ae=null;const me=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ve=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(V)[1]),te=ve>=1):V.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),te=ve>=2);let le=null,oe={};const N=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),Oe=new jt().fromArray(N),ee=new jt().fromArray(ie);function fe(O,Te,pe,Pe){const ye=new Uint8Array(4),he=r.createTexture();r.bindTexture(O,he),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<pe;Ie++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,Pe,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(Te+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return he}const Re={};Re[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Ee(r.DEPTH_TEST),c.setFunc(ro),pt(!1),xt(km),Ee(r.CULL_FACE),k(Pr);function Ee(O){m[O]!==!0&&(r.enable(O),m[O]=!0)}function Ae(O){m[O]!==!1&&(r.disable(O),m[O]=!1)}function Ke(O,Te){return v[O]!==Te?(r.bindFramebuffer(O,Te),v[O]=Te,O===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Te),O===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ve(O,Te){let pe=S,Pe=!1;if(O){pe=x.get(Te),pe===void 0&&(pe=[],x.set(Te,pe));const ye=O.textures;if(pe.length!==ye.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let he=0,Ie=ye.length;he<Ie;he++)pe[he]=r.COLOR_ATTACHMENT0+he;pe.length=ye.length,Pe=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,Pe=!0);Pe&&r.drawBuffers(pe)}function Mt(O){return E!==O?(r.useProgram(O),E=O,!0):!1}const Rt={[ns]:r.FUNC_ADD,[Vy]:r.FUNC_SUBTRACT,[Gy]:r.FUNC_REVERSE_SUBTRACT};Rt[Wy]=r.MIN,Rt[Xy]=r.MAX;const ct={[jy]:r.ZERO,[$y]:r.ONE,[Yy]:r.SRC_COLOR,[Xf]:r.SRC_ALPHA,[eS]:r.SRC_ALPHA_SATURATE,[Jy]:r.DST_COLOR,[Ky]:r.DST_ALPHA,[qy]:r.ONE_MINUS_SRC_COLOR,[jf]:r.ONE_MINUS_SRC_ALPHA,[Qy]:r.ONE_MINUS_DST_COLOR,[Zy]:r.ONE_MINUS_DST_ALPHA,[tS]:r.CONSTANT_COLOR,[nS]:r.ONE_MINUS_CONSTANT_COLOR,[iS]:r.CONSTANT_ALPHA,[rS]:r.ONE_MINUS_CONSTANT_ALPHA};function k(O,Te,pe,Pe,ye,he,Ie,et,Pt,yt){if(O===Pr){M===!0&&(Ae(r.BLEND),M=!1);return}if(M===!1&&(Ee(r.BLEND),M=!0),O!==Hy){if(O!==_||yt!==P){if((y!==ns||R!==ns)&&(r.blendEquation(r.FUNC_ADD),y=ns,R=ns),yt)switch(O){case eo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bm:r.blendFunc(r.ONE,r.ONE);break;case zm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case eo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case zm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}L=null,b=null,H=null,I=null,F.set(0,0,0),W=0,_=O,P=yt}return}ye=ye||Te,he=he||pe,Ie=Ie||Pe,(Te!==y||ye!==R)&&(r.blendEquationSeparate(Rt[Te],Rt[ye]),y=Te,R=ye),(pe!==L||Pe!==b||he!==H||Ie!==I)&&(r.blendFuncSeparate(ct[pe],ct[Pe],ct[he],ct[Ie]),L=pe,b=Pe,H=he,I=Ie),(et.equals(F)===!1||Pt!==W)&&(r.blendColor(et.r,et.g,et.b,Pt),F.copy(et),W=Pt),_=O,P=!1}function Wt(O,Te){O.side===Vi?Ae(r.CULL_FACE):Ee(r.CULL_FACE);let pe=O.side===Fn;Te&&(pe=!pe),pt(pe),O.blending===eo&&O.transparent===!1?k(Pr):k(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),l.setMask(O.colorWrite);const Pe=O.stencilWrite;f.setTest(Pe),Pe&&(f.setMask(O.stencilWriteMask),f.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),f.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ft(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(O){A!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),A=O)}function xt(O){O!==ky?(Ee(r.CULL_FACE),O!==B&&(O===km?r.cullFace(r.BACK):O===By?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),B=O}function Ge(O){O!==ue&&(te&&r.lineWidth(O),ue=O)}function ft(O,Te,pe){O?(Ee(r.POLYGON_OFFSET_FILL),(Q!==Te||ae!==pe)&&(r.polygonOffset(Te,pe),Q=Te,ae=pe)):Ae(r.POLYGON_OFFSET_FILL)}function qe(O){O?Ee(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function tt(O){O===void 0&&(O=r.TEXTURE0+me-1),le!==O&&(r.activeTexture(O),le=O)}function It(O,Te,pe){pe===void 0&&(le===null?pe=r.TEXTURE0+me-1:pe=le);let Pe=oe[pe];Pe===void 0&&(Pe={type:void 0,texture:void 0},oe[pe]=Pe),(Pe.type!==O||Pe.texture!==Te)&&(le!==pe&&(r.activeTexture(pe),le=pe),r.bindTexture(O,Te||Re[O]),Pe.type=O,Pe.texture=Te)}function D(){const O=oe[le];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{r.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{r.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{r.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{r.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{r.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{r.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{r.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{r.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(O){Oe.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Oe.copy(O))}function nt(O){ee.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function Je(O,Te){let pe=p.get(Te);pe===void 0&&(pe=new WeakMap,p.set(Te,pe));let Pe=pe.get(O);Pe===void 0&&(Pe=r.getUniformBlockIndex(Te,O.name),pe.set(O,Pe))}function Le(O,Te){const Pe=p.get(Te).get(O);d.get(Te)!==Pe&&(r.uniformBlockBinding(Te,Pe,O.__bindingPointIndex),d.set(Te,Pe))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},le=null,oe={},v={},x=new WeakMap,S=[],E=null,M=!1,_=null,y=null,L=null,b=null,R=null,H=null,I=null,F=new bt(0,0,0),W=0,P=!1,A=null,B=null,ue=null,Q=null,ae=null,Oe.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Ee,disable:Ae,bindFramebuffer:Ke,drawBuffers:Ve,useProgram:Mt,setBlending:k,setMaterial:Wt,setFlipSided:pt,setCullFace:xt,setLineWidth:Ge,setPolygonOffset:ft,setScissorTest:qe,activeTexture:tt,bindTexture:It,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:J,texImage2D:$e,texImage3D:_e,updateUBOMapping:Je,uniformBlockBinding:Le,texStorage2D:be,texStorage3D:ke,texSubImage2D:de,texSubImage3D:ge,compressedTexSubImage2D:ce,compressedTexSubImage3D:je,scissor:Ne,viewport:nt,reset:st}}function oR(r,e,t,s,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new At,m=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return S?new OffscreenCanvas(D,T):ha("canvas")}function M(D,T,J){let de=1;const ge=It(D);if((ge.width>J||ge.height>J)&&(de=J/Math.max(ge.width,ge.height)),de<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(de*ge.width),je=Math.floor(de*ge.height);v===void 0&&(v=E(ce,je));const be=T?E(ce,je):v;return be.width=ce,be.height=je,be.getContext("2d").drawImage(D,0,0,ce,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+je+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function _(D){return D.generateMipmaps}function y(D){r.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(D,T,J,de,ge=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=T;if(T===r.RED&&(J===r.FLOAT&&(ce=r.R32F),J===r.HALF_FLOAT&&(ce=r.R16F),J===r.UNSIGNED_BYTE&&(ce=r.R8)),T===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ce=r.R8UI),J===r.UNSIGNED_SHORT&&(ce=r.R16UI),J===r.UNSIGNED_INT&&(ce=r.R32UI),J===r.BYTE&&(ce=r.R8I),J===r.SHORT&&(ce=r.R16I),J===r.INT&&(ce=r.R32I)),T===r.RG&&(J===r.FLOAT&&(ce=r.RG32F),J===r.HALF_FLOAT&&(ce=r.RG16F),J===r.UNSIGNED_BYTE&&(ce=r.RG8)),T===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ce=r.RG8UI),J===r.UNSIGNED_SHORT&&(ce=r.RG16UI),J===r.UNSIGNED_INT&&(ce=r.RG32UI),J===r.BYTE&&(ce=r.RG8I),J===r.SHORT&&(ce=r.RG16I),J===r.INT&&(ce=r.RG32I)),T===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),J===r.UNSIGNED_INT&&(ce=r.RGB32UI),J===r.BYTE&&(ce=r.RGB8I),J===r.SHORT&&(ce=r.RGB16I),J===r.INT&&(ce=r.RGB32I)),T===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),J===r.UNSIGNED_INT&&(ce=r.RGBA32UI),J===r.BYTE&&(ce=r.RGBA8I),J===r.SHORT&&(ce=r.RGBA16I),J===r.INT&&(ce=r.RGBA32I)),T===r.RGB&&J===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),T===r.RGBA){const je=ge?cu:Tt.getTransfer(de);J===r.FLOAT&&(ce=r.RGBA32F),J===r.HALF_FLOAT&&(ce=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ce=je===Dt?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function R(D,T){let J;return D?T===null||T===ls||T===ua?J=r.DEPTH24_STENCIL8:T===Wi?J=r.DEPTH32F_STENCIL8:T===la&&(J=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ls||T===ua?J=r.DEPTH_COMPONENT24:T===Wi?J=r.DEPTH_COMPONENT32F:T===la&&(J=r.DEPTH_COMPONENT16),J}function H(D,T){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==dn&&D.minFilter!==yi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function I(D){const T=D.target;T.removeEventListener("dispose",I),W(T),T.isVideoTexture&&m.delete(T)}function F(D){const T=D.target;T.removeEventListener("dispose",F),A(T)}function W(D){const T=s.get(D);if(T.__webglInit===void 0)return;const J=D.source,de=x.get(J);if(de){const ge=de[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(D),Object.keys(de).length===0&&x.delete(J)}s.remove(D)}function P(D){const T=s.get(D);r.deleteTexture(T.__webglTexture);const J=D.source,de=x.get(J);delete de[T.__cacheKey],c.memory.textures--}function A(D){const T=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let ge=0;ge<T.__webglFramebuffer[de].length;ge++)r.deleteFramebuffer(T.__webglFramebuffer[de][ge]);else r.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)r.deleteFramebuffer(T.__webglFramebuffer[de]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=D.textures;for(let de=0,ge=J.length;de<ge;de++){const ce=s.get(J[de]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),c.memory.textures--),s.remove(J[de])}s.remove(D)}let B=0;function ue(){B=0}function Q(){const D=B;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),B+=1,D}function ae(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function me(D,T){const J=s.get(D);if(D.isVideoTexture&&qe(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){const de=D.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(J,D,T);return}}t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+T)}function te(D,T){const J=s.get(D);if(D.version>0&&J.__version!==D.version){Re(J,D,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+T)}function ve(D,T){const J=s.get(D);if(D.version>0&&J.__version!==D.version){Re(J,D,T);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+T)}function V(D,T){const J=s.get(D);if(D.version>0&&J.__version!==D.version){Ee(J,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+T)}const le={[aa]:r.REPEAT,[Gi]:r.CLAMP_TO_EDGE,[nd]:r.MIRRORED_REPEAT},oe={[dn]:r.NEAREST,[pS]:r.NEAREST_MIPMAP_NEAREST,[Ll]:r.NEAREST_MIPMAP_LINEAR,[yi]:r.LINEAR,[lf]:r.LINEAR_MIPMAP_NEAREST,[rs]:r.LINEAR_MIPMAP_LINEAR},N={[xS]:r.NEVER,[TS]:r.ALWAYS,[yS]:r.LESS,[Iv]:r.LEQUAL,[SS]:r.EQUAL,[wS]:r.GEQUAL,[ES]:r.GREATER,[MS]:r.NOTEQUAL};function ie(D,T){if(T.type===Wi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===yi||T.magFilter===lf||T.magFilter===Ll||T.magFilter===rs||T.minFilter===yi||T.minFilter===lf||T.minFilter===Ll||T.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,le[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,le[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,le[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,oe[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,oe[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===dn||T.minFilter!==Ll&&T.minFilter!==rs||T.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Oe(D,T){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",I));const de=T.source;let ge=x.get(de);ge===void 0&&(ge={},x.set(de,ge));const ce=ae(T);if(ce!==D.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,J=!0),ge[ce].usedTimes++;const je=ge[D.__cacheKey];je!==void 0&&(ge[D.__cacheKey].usedTimes--,je.usedTimes===0&&P(T)),D.__cacheKey=ce,D.__webglTexture=ge[ce].texture}return J}function ee(D,T,J){return Math.floor(Math.floor(D/J)/T)}function fe(D,T,J,de){const ce=D.updateRanges;if(ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,J,de,T.data);else{ce.sort((_e,Ne)=>_e.start-Ne.start);let je=0;for(let _e=1;_e<ce.length;_e++){const Ne=ce[je],nt=ce[_e],Je=Ne.start+Ne.count,Le=ee(nt.start,T.width,4),st=ee(Ne.start,T.width,4);nt.start<=Je+1&&Le===st&&ee(nt.start+nt.count-1,T.width,4)===Le?Ne.count=Math.max(Ne.count,nt.start+nt.count-Ne.start):(++je,ce[je]=nt)}ce.length=je+1;const be=r.getParameter(r.UNPACK_ROW_LENGTH),ke=r.getParameter(r.UNPACK_SKIP_PIXELS),$e=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let _e=0,Ne=ce.length;_e<Ne;_e++){const nt=ce[_e],Je=Math.floor(nt.start/4),Le=Math.ceil(nt.count/4),st=Je%T.width,O=Math.floor(Je/T.width),Te=Le,pe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,st),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,st,O,Te,pe,J,de,T.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,be),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,$e)}}function Re(D,T,J){let de=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=r.TEXTURE_3D);const ge=Oe(D,T),ce=T.source;t.bindTexture(de,D.__webglTexture,r.TEXTURE0+J);const je=s.get(ce);if(ce.version!==je.__version||ge===!0){t.activeTexture(r.TEXTURE0+J);const be=Tt.getPrimaries(Tt.workingColorSpace),ke=T.colorSpace===Cr?null:Tt.getPrimaries(T.colorSpace),$e=T.colorSpace===Cr||be===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let _e=M(T.image,!1,o.maxTextureSize);_e=tt(T,_e);const Ne=l.convert(T.format,T.colorSpace),nt=l.convert(T.type);let Je=b(T.internalFormat,Ne,nt,T.colorSpace,T.isVideoTexture);ie(de,T);let Le;const st=T.mipmaps,O=T.isVideoTexture!==!0,Te=je.__version===void 0||ge===!0,pe=ce.dataReady,Pe=H(T,_e);if(T.isDepthTexture)Je=R(T.format===fa,T.type),Te&&(O?t.texStorage2D(r.TEXTURE_2D,1,Je,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,Je,_e.width,_e.height,0,Ne,nt,null));else if(T.isDataTexture)if(st.length>0){O&&Te&&t.texStorage2D(r.TEXTURE_2D,Pe,Je,st[0].width,st[0].height);for(let ye=0,he=st.length;ye<he;ye++)Le=st[ye],O?pe&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ne,nt,Le.data):t.texImage2D(r.TEXTURE_2D,ye,Je,Le.width,Le.height,0,Ne,nt,Le.data);T.generateMipmaps=!1}else O?(Te&&t.texStorage2D(r.TEXTURE_2D,Pe,Je,_e.width,_e.height),pe&&fe(T,_e,Ne,nt)):t.texImage2D(r.TEXTURE_2D,0,Je,_e.width,_e.height,0,Ne,nt,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){O&&Te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,Je,st[0].width,st[0].height,_e.depth);for(let ye=0,he=st.length;ye<he;ye++)if(Le=st[ye],T.format!==ci)if(Ne!==null)if(O){if(pe)if(T.layerUpdates.size>0){const Ie=fg(Le.width,Le.height,T.format,T.type);for(const et of T.layerUpdates){const Pt=Le.data.subarray(et*Ie/Le.data.BYTES_PER_ELEMENT,(et+1)*Ie/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,et,Le.width,Le.height,1,Ne,Pt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,_e.depth,Ne,Le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,Je,Le.width,Le.height,_e.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?pe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,_e.depth,Ne,nt,Le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ye,Je,Le.width,Le.height,_e.depth,0,Ne,nt,Le.data)}else{O&&Te&&t.texStorage2D(r.TEXTURE_2D,Pe,Je,st[0].width,st[0].height);for(let ye=0,he=st.length;ye<he;ye++)Le=st[ye],T.format!==ci?Ne!==null?O?pe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ne,Le.data):t.compressedTexImage2D(r.TEXTURE_2D,ye,Je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?pe&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ne,nt,Le.data):t.texImage2D(r.TEXTURE_2D,ye,Je,Le.width,Le.height,0,Ne,nt,Le.data)}else if(T.isDataArrayTexture)if(O){if(Te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,Je,_e.width,_e.height,_e.depth),pe)if(T.layerUpdates.size>0){const ye=fg(_e.width,_e.height,T.format,T.type);for(const he of T.layerUpdates){const Ie=_e.data.subarray(he*ye/_e.data.BYTES_PER_ELEMENT,(he+1)*ye/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,Ne,nt,Ie)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ne,nt,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Je,_e.width,_e.height,_e.depth,0,Ne,nt,_e.data);else if(T.isData3DTexture)O?(Te&&t.texStorage3D(r.TEXTURE_3D,Pe,Je,_e.width,_e.height,_e.depth),pe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ne,nt,_e.data)):t.texImage3D(r.TEXTURE_3D,0,Je,_e.width,_e.height,_e.depth,0,Ne,nt,_e.data);else if(T.isFramebufferTexture){if(Te)if(O)t.texStorage2D(r.TEXTURE_2D,Pe,Je,_e.width,_e.height);else{let ye=_e.width,he=_e.height;for(let Ie=0;Ie<Pe;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,Je,ye,he,0,Ne,nt,null),ye>>=1,he>>=1}}else if(st.length>0){if(O&&Te){const ye=It(st[0]);t.texStorage2D(r.TEXTURE_2D,Pe,Je,ye.width,ye.height)}for(let ye=0,he=st.length;ye<he;ye++)Le=st[ye],O?pe&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ne,nt,Le):t.texImage2D(r.TEXTURE_2D,ye,Je,Ne,nt,Le);T.generateMipmaps=!1}else if(O){if(Te){const ye=It(_e);t.texStorage2D(r.TEXTURE_2D,Pe,Je,ye.width,ye.height)}pe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,nt,_e)}else t.texImage2D(r.TEXTURE_2D,0,Je,Ne,nt,_e);_(T)&&y(de),je.__version=ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ee(D,T,J){if(T.image.length!==6)return;const de=Oe(D,T),ge=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+J);const ce=s.get(ge);if(ge.version!==ce.__version||de===!0){t.activeTexture(r.TEXTURE0+J);const je=Tt.getPrimaries(Tt.workingColorSpace),be=T.colorSpace===Cr?null:Tt.getPrimaries(T.colorSpace),ke=T.colorSpace===Cr||je===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const $e=T.isCompressedTexture||T.image[0].isCompressedTexture,_e=T.image[0]&&T.image[0].isDataTexture,Ne=[];for(let he=0;he<6;he++)!$e&&!_e?Ne[he]=M(T.image[he],!0,o.maxCubemapSize):Ne[he]=_e?T.image[he].image:T.image[he],Ne[he]=tt(T,Ne[he]);const nt=Ne[0],Je=l.convert(T.format,T.colorSpace),Le=l.convert(T.type),st=b(T.internalFormat,Je,Le,T.colorSpace),O=T.isVideoTexture!==!0,Te=ce.__version===void 0||de===!0,pe=ge.dataReady;let Pe=H(T,nt);ie(r.TEXTURE_CUBE_MAP,T);let ye;if($e){O&&Te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,st,nt.width,nt.height);for(let he=0;he<6;he++){ye=Ne[he].mipmaps;for(let Ie=0;Ie<ye.length;Ie++){const et=ye[Ie];T.format!==ci?Je!==null?O?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,0,0,et.width,et.height,Je,et.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,st,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,0,0,et.width,et.height,Je,Le,et.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,st,et.width,et.height,0,Je,Le,et.data)}}}else{if(ye=T.mipmaps,O&&Te){ye.length>0&&Pe++;const he=It(Ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,st,he.width,he.height)}for(let he=0;he<6;he++)if(_e){O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne[he].width,Ne[he].height,Je,Le,Ne[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,Ne[he].width,Ne[he].height,0,Je,Le,Ne[he].data);for(let Ie=0;Ie<ye.length;Ie++){const Pt=ye[Ie].image[he].image;O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,0,0,Pt.width,Pt.height,Je,Le,Pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,st,Pt.width,Pt.height,0,Je,Le,Pt.data)}}else{O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,Le,Ne[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,Je,Le,Ne[he]);for(let Ie=0;Ie<ye.length;Ie++){const et=ye[Ie];O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,0,0,Je,Le,et.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,st,Je,Le,et.image[he])}}}_(T)&&y(r.TEXTURE_CUBE_MAP),ce.__version=ge.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ae(D,T,J,de,ge,ce){const je=l.convert(J.format,J.colorSpace),be=l.convert(J.type),ke=b(J.internalFormat,je,be,J.colorSpace),$e=s.get(T),_e=s.get(J);if(_e.__renderTarget=T,!$e.__hasExternalTextures){const Ne=Math.max(1,T.width>>ce),nt=Math.max(1,T.height>>ce);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?t.texImage3D(ge,ce,ke,Ne,nt,T.depth,0,je,be,null):t.texImage2D(ge,ce,ke,Ne,nt,0,je,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),ft(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ge,_e.__webglTexture,0,Ge(T)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,ge,_e.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(D,T,J){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const de=T.depthTexture,ge=de&&de.isDepthTexture?de.type:null,ce=R(T.stencilBuffer,ge),je=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=Ge(T);ft(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,ce,T.width,T.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ce,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ce,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,je,r.RENDERBUFFER,D)}else{const de=T.textures;for(let ge=0;ge<de.length;ge++){const ce=de[ge],je=l.convert(ce.format,ce.colorSpace),be=l.convert(ce.type),ke=b(ce.internalFormat,je,be,ce.colorSpace),$e=Ge(T);J&&ft(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,ke,T.width,T.height):ft(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,ke,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ke,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=s.get(T.depthTexture);de.__renderTarget=T,(!de.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me(T.depthTexture,0);const ge=de.__webglTexture,ce=Ge(T);if(T.depthTexture.format===ca)ft(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ge,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ge,0);else if(T.depthTexture.format===fa)ft(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ge,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Mt(D){const T=s.get(D),J=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const de=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",ge)};de.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=de}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const de=D.texture.mipmaps;de&&de.length>0?Ve(T.__webglFramebuffer[0],D):Ve(T.__webglFramebuffer,D)}else if(J){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=r.createRenderbuffer(),Ke(T.__webglDepthbuffer[de],D,!1);else{const ge=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,ce)}}else{const de=D.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Ke(T.__webglDepthbuffer,D,!1);else{const ge=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(D,T,J){const de=s.get(D);T!==void 0&&Ae(de.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&Mt(D)}function ct(D){const T=D.texture,J=s.get(D),de=s.get(T);D.addEventListener("dispose",F);const ge=D.textures,ce=D.isWebGLCubeRenderTarget===!0,je=ge.length>1;if(je||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=T.version,c.memory.textures++),ce){J.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[be]=[];for(let ke=0;ke<T.mipmaps.length;ke++)J.__webglFramebuffer[be][ke]=r.createFramebuffer()}else J.__webglFramebuffer[be]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)J.__webglFramebuffer[be]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(je)for(let be=0,ke=ge.length;be<ke;be++){const $e=s.get(ge[be]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&ft(D)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let be=0;be<ge.length;be++){const ke=ge[be];J.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[be]);const $e=l.convert(ke.format,ke.colorSpace),_e=l.convert(ke.type),Ne=b(ke.internalFormat,$e,_e,ke.colorSpace,D.isXRRenderTarget===!0),nt=Ge(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,Ne,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,J.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Ke(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),ie(r.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Ae(J.__webglFramebuffer[be][ke],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke);else Ae(J.__webglFramebuffer[be],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);_(T)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let be=0,ke=ge.length;be<ke;be++){const $e=ge[be],_e=s.get($e);t.bindTexture(r.TEXTURE_2D,_e.__webglTexture),ie(r.TEXTURE_2D,$e),Ae(J.__webglFramebuffer,D,$e,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,0),_($e)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,de.__webglTexture),ie(be,T),T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Ae(J.__webglFramebuffer[ke],D,T,r.COLOR_ATTACHMENT0,be,ke);else Ae(J.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,be,0);_(T)&&y(be),t.unbindTexture()}D.depthBuffer&&Mt(D)}function k(D){const T=D.textures;for(let J=0,de=T.length;J<de;J++){const ge=T[J];if(_(ge)){const ce=L(D),je=s.get(ge).__webglTexture;t.bindTexture(ce,je),y(ce),t.unbindTexture()}}}const Wt=[],pt=[];function xt(D){if(D.samples>0){if(ft(D)===!1){const T=D.textures,J=D.width,de=D.height;let ge=r.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,je=s.get(D),be=T.length>1;if(be)for(let $e=0;$e<T.length;$e++)t.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const ke=D.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let $e=0;$e<T.length;$e++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,je.__webglColorRenderbuffer[$e]);const _e=s.get(T[$e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,J,de,0,0,J,de,ge,r.NEAREST),d===!0&&(Wt.length=0,pt.length=0,Wt.push(r.COLOR_ATTACHMENT0+$e),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Wt.push(ce),pt.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let $e=0;$e<T.length;$e++){t.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,je.__webglColorRenderbuffer[$e]);const _e=s.get(T[$e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,_e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ge(D){return Math.min(o.maxSamples,D.samples)}function ft(D){const T=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(D){const T=c.render.frame;m.get(D)!==T&&(m.set(D,T),D.update())}function tt(D,T){const J=D.colorSpace,de=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==ao&&J!==Cr&&(Tt.getTransfer(J)===Dt?(de!==ci||ge!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function It(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=ue,this.setTexture2D=me,this.setTexture2DArray=te,this.setTexture3D=ve,this.setTextureCube=V,this.rebindTextures=Rt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ft}function aR(r,e){function t(s,o=Cr){let l;const c=Tt.getTransfer(o);if(s===wi)return r.UNSIGNED_BYTE;if(s===Vd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Gd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===bv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Av)return r.BYTE;if(s===Cv)return r.SHORT;if(s===la)return r.UNSIGNED_SHORT;if(s===Hd)return r.INT;if(s===ls)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===_a)return r.HALF_FLOAT;if(s===Pv)return r.ALPHA;if(s===Lv)return r.RGB;if(s===ci)return r.RGBA;if(s===ca)return r.DEPTH_COMPONENT;if(s===fa)return r.DEPTH_STENCIL;if(s===Dv)return r.RED;if(s===Wd)return r.RED_INTEGER;if(s===Uv)return r.RG;if(s===Xd)return r.RG_INTEGER;if(s===jd)return r.RGBA_INTEGER;if(s===nu||s===iu||s===ru||s===su)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===nu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ru)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===nu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ru)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===id||s===rd||s===sd||s===od)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===id)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===od)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ad||s===ld||s===ud)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===ad||s===ld)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===ud)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cd||s===fd||s===dd||s===hd||s===pd||s===md||s===gd||s===vd||s===_d||s===xd||s===yd||s===Sd||s===Ed||s===Md)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===cd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===md)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_d)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ed)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Md)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ou||s===wd||s===Td)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===ou)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Td)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Nv||s===Rd||s===Ad||s===Cd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===ou)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Rd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ad)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ua?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const lR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uR=`
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

}`;class cR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Cn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Ur({vertexShader:lR,fragmentShader:uR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Si(new xu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fR extends fo{constructor(e,t){super();const s=this;let o=null,l=1,c=null,f="local-floor",d=1,p=null,m=null,v=null,x=null,S=null,E=null;const M=new cR,_=t.getContextAttributes();let y=null,L=null;const b=[],R=[],H=new At;let I=null;const F=new Jn;F.viewport=new jt;const W=new Jn;W.viewport=new jt;const P=[F,W],A=new DE;let B=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=b[ee];return fe===void 0&&(fe=new bf,b[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=b[ee];return fe===void 0&&(fe=new bf,b[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=b[ee];return fe===void 0&&(fe=new bf,b[ee]=fe),fe.getHandSpace()};function Q(ee){const fe=R.indexOf(ee.inputSource);if(fe===-1)return;const Re=b[fe];Re!==void 0&&(Re.update(ee.inputSource,ee.frame,p||c),Re.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ae(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",me);for(let ee=0;ee<b.length;ee++){const fe=R[ee];fe!==null&&(R[ee]=null,b[ee].disconnect(fe))}B=null,ue=null,M.reset(),e.setRenderTarget(y),S=null,x=null,v=null,o=null,L=null,Oe.stop(),s.isPresenting=!1,e.setPixelRatio(I),e.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){f=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",me),_.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ee=null,Ae=null;_.depth&&(Ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=_.stencil?fa:ca,Ee=_.stencil?ua:ls);const Ke={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};v=new XRWebGLBinding(o,t),x=v.createProjectionLayer(Ke),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new us(x.textureWidth,x.textureHeight,{format:ci,type:wi,depthTexture:new Xv(x.textureWidth,x.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,Re),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new us(S.framebufferWidth,S.framebufferHeight,{format:ci,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await o.requestReferenceSpace(f),Oe.setContext(o),Oe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function me(ee){for(let fe=0;fe<ee.removed.length;fe++){const Re=ee.removed[fe],Ee=R.indexOf(Re);Ee>=0&&(R[Ee]=null,b[Ee].disconnect(Re))}for(let fe=0;fe<ee.added.length;fe++){const Re=ee.added[fe];let Ee=R.indexOf(Re);if(Ee===-1){for(let Ke=0;Ke<b.length;Ke++)if(Ke>=R.length){R.push(Re),Ee=Ke;break}else if(R[Ke]===null){R[Ke]=Re,Ee=Ke;break}if(Ee===-1)break}const Ae=b[Ee];Ae&&Ae.connect(Re)}}const te=new se,ve=new se;function V(ee,fe,Re){te.setFromMatrixPosition(fe.matrixWorld),ve.setFromMatrixPosition(Re.matrixWorld);const Ee=te.distanceTo(ve),Ae=fe.projectionMatrix.elements,Ke=Re.projectionMatrix.elements,Ve=Ae[14]/(Ae[10]-1),Mt=Ae[14]/(Ae[10]+1),Rt=(Ae[9]+1)/Ae[5],ct=(Ae[9]-1)/Ae[5],k=(Ae[8]-1)/Ae[0],Wt=(Ke[8]+1)/Ke[0],pt=Ve*k,xt=Ve*Wt,Ge=Ee/(-k+Wt),ft=Ge*-k;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ft),ee.translateZ(Ge),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ae[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=Ve+Ge,tt=Mt+Ge,It=pt-ft,D=xt+(Ee-ft),T=Rt*Mt/tt*qe,J=ct*Mt/tt*qe;ee.projectionMatrix.makePerspective(It,D,T,J,qe,tt),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function le(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let fe=ee.near,Re=ee.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(Re=M.depthFar)),A.near=W.near=F.near=fe,A.far=W.far=F.far=Re,(B!==A.near||ue!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,ue=A.far),F.layers.mask=ee.layers.mask|2,W.layers.mask=ee.layers.mask|4,A.layers.mask=F.layers.mask|W.layers.mask;const Ee=ee.parent,Ae=A.cameras;le(A,Ee);for(let Ke=0;Ke<Ae.length;Ke++)le(Ae[Ke],Ee);Ae.length===2?V(A,F,W):A.projectionMatrix.copy(F.projectionMatrix),oe(ee,A,Ee)};function oe(ee,fe,Re){Re===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(Re.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=da*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return d},this.setFoveation=function(ee){d=ee,x!==null&&(x.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let N=null;function ie(ee,fe){if(m=fe.getViewerPose(p||c),E=fe,m!==null){const Re=m.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Ee=!1;Re.length!==A.cameras.length&&(A.cameras.length=0,Ee=!0);for(let Ve=0;Ve<Re.length;Ve++){const Mt=Re[Ve];let Rt=null;if(S!==null)Rt=S.getViewport(Mt);else{const k=v.getViewSubImage(x,Mt);Rt=k.viewport,Ve===0&&(e.setRenderTargetTextures(L,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(L))}let ct=P[Ve];ct===void 0&&(ct=new Jn,ct.layers.enable(Ve),ct.viewport=new jt,P[Ve]=ct),ct.matrix.fromArray(Mt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Mt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ve===0&&(A.matrix.copy(ct.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ee===!0&&A.cameras.push(ct)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const Ve=v.getDepthInformation(Re[0]);Ve&&Ve.isValid&&Ve.texture&&M.init(e,Ve,o.renderState)}}for(let Re=0;Re<b.length;Re++){const Ee=R[Re],Ae=b[Re];Ee!==null&&Ae!==void 0&&Ae.update(Ee,fe,p||c)}N&&N(ee,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Oe=new $v;Oe.setAnimationLoop(ie),this.setAnimationLoop=function(ee){N=ee},this.dispose=function(){}}}const Qr=new qi,dR=new $t;function hR(r,e){function t(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function s(_,y){y.color.getRGB(_.fogColor.value,Vv(r)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function o(_,y,L,b,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(_,y):y.isMeshToonMaterial?(l(_,y),v(_,y)):y.isMeshPhongMaterial?(l(_,y),m(_,y)):y.isMeshStandardMaterial?(l(_,y),x(_,y),y.isMeshPhysicalMaterial&&S(_,y,R)):y.isMeshMatcapMaterial?(l(_,y),E(_,y)):y.isMeshDepthMaterial?l(_,y):y.isMeshDistanceMaterial?(l(_,y),M(_,y)):y.isMeshNormalMaterial?l(_,y):y.isLineBasicMaterial?(c(_,y),y.isLineDashedMaterial&&f(_,y)):y.isPointsMaterial?d(_,y,L,b):y.isSpriteMaterial?p(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,t(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===Fn&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,t(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===Fn&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,t(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,t(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);const L=e.get(y),b=L.envMap,R=L.envMapRotation;b&&(_.envMap.value=b,Qr.copy(R),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),_.envMapRotation.value.setFromMatrix4(dR.makeRotationFromEuler(Qr)),_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,_.aoMapTransform))}function c(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform))}function f(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function d(_,y,L,b){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*L,_.scale.value=b*.5,y.map&&(_.map.value=y.map,t(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function p(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function m(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function v(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function x(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function S(_,y,L){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Fn&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=L.texture,_.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,y){y.matcap&&(_.matcap.value=y.matcap)}function M(_,y){const L=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(L.matrixWorld),_.nearDistance.value=L.shadow.camera.near,_.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function pR(r,e,t,s){let o={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,b){const R=b.program;s.uniformBlockBinding(L,R)}function p(L,b){let R=o[L.id];R===void 0&&(E(L),R=m(L),o[L.id]=R,L.addEventListener("dispose",_));const H=b.program;s.updateUBOMapping(L,H);const I=e.render.frame;l[L.id]!==I&&(x(L),l[L.id]=I)}function m(L){const b=v();L.__bindingPointIndex=b;const R=r.createBuffer(),H=L.__size,I=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,H,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,R),R}function v(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const b=o[L.id],R=L.uniforms,H=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let I=0,F=R.length;I<F;I++){const W=Array.isArray(R[I])?R[I]:[R[I]];for(let P=0,A=W.length;P<A;P++){const B=W[P];if(S(B,I,P,H)===!0){const ue=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value];let ae=0;for(let me=0;me<Q.length;me++){const te=Q[me],ve=M(te);typeof te=="number"||typeof te=="boolean"?(B.__data[0]=te,r.bufferSubData(r.UNIFORM_BUFFER,ue+ae,B.__data)):te.isMatrix3?(B.__data[0]=te.elements[0],B.__data[1]=te.elements[1],B.__data[2]=te.elements[2],B.__data[3]=0,B.__data[4]=te.elements[3],B.__data[5]=te.elements[4],B.__data[6]=te.elements[5],B.__data[7]=0,B.__data[8]=te.elements[6],B.__data[9]=te.elements[7],B.__data[10]=te.elements[8],B.__data[11]=0):(te.toArray(B.__data,ae),ae+=ve.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ue,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,b,R,H){const I=L.value,F=b+"_"+R;if(H[F]===void 0)return typeof I=="number"||typeof I=="boolean"?H[F]=I:H[F]=I.clone(),!0;{const W=H[F];if(typeof I=="number"||typeof I=="boolean"){if(W!==I)return H[F]=I,!0}else if(W.equals(I)===!1)return W.copy(I),!0}return!1}function E(L){const b=L.uniforms;let R=0;const H=16;for(let F=0,W=b.length;F<W;F++){const P=Array.isArray(b[F])?b[F]:[b[F]];for(let A=0,B=P.length;A<B;A++){const ue=P[A],Q=Array.isArray(ue.value)?ue.value:[ue.value];for(let ae=0,me=Q.length;ae<me;ae++){const te=Q[ae],ve=M(te),V=R%H,le=V%ve.boundary,oe=V+le;R+=le,oe!==0&&H-oe<ve.storage&&(R+=H-oe),ue.__data=new Float32Array(ve.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=R,R+=ve.storage}}}const I=R%H;return I>0&&(R+=H-I),L.__size=R,L.__cache={},this}function M(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function _(L){const b=L.target;b.removeEventListener("dispose",_);const R=c.indexOf(b.__bindingPointIndex);c.splice(R,1),r.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function y(){for(const L in o)r.deleteBuffer(o[L]);c=[],o={},l={}}return{bind:d,update:p,dispose:y}}class mR{constructor(e={}){const{canvas:t=GS(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),M=new Int32Array(4);let _=null,y=null;const L=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let H=!1;this._outputColorSpace=An;let I=0,F=0,W=null,P=-1,A=null;const B=new jt,ue=new jt;let Q=null;const ae=new bt(0);let me=0,te=t.width,ve=t.height,V=1,le=null,oe=null;const N=new jt(0,0,te,ve),ie=new jt(0,0,te,ve);let Oe=!1;const ee=new Kd;let fe=!1,Re=!1;const Ee=new $t,Ae=new $t,Ke=new se,Ve=new jt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function ct(){return W===null?V:1}let k=s;function Wt(C,j){return t.getContext(C,j)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zd}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",he,!1),k===null){const j="webgl2";if(k=Wt(j,C),k===null)throw Wt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let pt,xt,Ge,ft,qe,tt,It,D,T,J,de,ge,ce,je,be,ke,$e,_e,Ne,nt,Je,Le,st,O;function Te(){pt=new TT(k),pt.init(),Le=new aR(k,pt),xt=new _T(k,pt,e,Le),Ge=new sR(k,pt),xt.reverseDepthBuffer&&x&&Ge.buffers.depth.setReversed(!0),ft=new CT(k),qe=new j1,tt=new oR(k,pt,Ge,qe,xt,Le,ft),It=new yT(R),D=new wT(R),T=new NE(k),st=new gT(k,T),J=new RT(k,T,ft,st),de=new PT(k,J,T,ft),Ne=new bT(k,xt,tt),ke=new xT(qe),ge=new X1(R,It,D,pt,xt,st,ke),ce=new hR(R,qe),je=new Y1,be=new eR(pt),_e=new mT(R,It,D,Ge,de,S,d),$e=new iR(R,de,xt),O=new pR(k,ft,xt,Ge),nt=new vT(k,pt,ft),Je=new AT(k,pt,ft),ft.programs=ge.programs,R.capabilities=xt,R.extensions=pt,R.properties=qe,R.renderLists=je,R.shadowMap=$e,R.state=Ge,R.info=ft}Te();const pe=new fR(R,k);this.xr=pe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(te,ve,!1))},this.getSize=function(C){return C.set(te,ve)},this.setSize=function(C,j,re=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=C,ve=j,t.width=Math.floor(C*V),t.height=Math.floor(j*V),re===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(te*V,ve*V).floor()},this.setDrawingBufferSize=function(C,j,re){te=C,ve=j,V=re,t.width=Math.floor(C*re),t.height=Math.floor(j*re),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(N)},this.setViewport=function(C,j,re,K){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,j,re,K),Ge.viewport(B.copy(N).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,j,re,K){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,j,re,K),Ge.scissor(ue.copy(ie).multiplyScalar(V).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(C){Ge.setScissorTest(Oe=C)},this.setOpaqueSort=function(C){le=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,re=!0){let K=0;if(C){let Y=!1;if(W!==null){const we=W.texture.format;Y=we===jd||we===Xd||we===Wd}if(Y){const we=W.texture.type,De=we===wi||we===ls||we===la||we===ua||we===Vd||we===Gd,ze=_e.getClearColor(),Be=_e.getClearAlpha(),at=ze.r,ot=ze.g,We=ze.b;De?(E[0]=at,E[1]=ot,E[2]=We,E[3]=Be,k.clearBufferuiv(k.COLOR,0,E)):(M[0]=at,M[1]=ot,M[2]=We,M[3]=Be,k.clearBufferiv(k.COLOR,0,M))}else K|=k.COLOR_BUFFER_BIT}j&&(K|=k.DEPTH_BUFFER_BIT),re&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",he,!1),_e.dispose(),je.dispose(),be.dispose(),qe.dispose(),It.dispose(),D.dispose(),de.dispose(),st.dispose(),O.dispose(),ge.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ds),pe.removeEventListener("sessionend",Ji),Ti.stop()};function Pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const C=ft.autoReset,j=$e.enabled,re=$e.autoUpdate,K=$e.needsUpdate,Y=$e.type;Te(),ft.autoReset=C,$e.enabled=j,$e.autoUpdate=re,$e.needsUpdate=K,$e.type=Y}function he(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ie(C){const j=C.target;j.removeEventListener("dispose",Ie),et(j)}function et(C){Pt(C),qe.remove(C)}function Pt(C){const j=qe.get(C).programs;j!==void 0&&(j.forEach(function(re){ge.releaseProgram(re)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,re,K,Y,we){j===null&&(j=Mt);const De=Y.isMesh&&Y.matrixWorld.determinant()<0,ze=wa(C,j,re,K,Y);Ge.setMaterial(K,De);let Be=re.index,at=1;if(K.wireframe===!0){if(Be=J.getWireframeAttribute(re),Be===void 0)return;at=2}const ot=re.drawRange,We=re.attributes.position;let mt=ot.start*at,dt=(ot.start+ot.count)*at;we!==null&&(mt=Math.max(mt,we.start*at),dt=Math.min(dt,(we.start+we.count)*at)),Be!==null?(mt=Math.max(mt,0),dt=Math.min(dt,Be.count)):We!=null&&(mt=Math.max(mt,0),dt=Math.min(dt,We.count));const Bt=dt-mt;if(Bt<0||Bt===1/0)return;st.setup(Y,K,ze,re,Be);let Ut,Ct=nt;if(Be!==null&&(Ut=T.get(Be),Ct=Je,Ct.setIndex(Ut)),Y.isMesh)K.wireframe===!0?(Ge.setLineWidth(K.wireframeLinewidth*ct()),Ct.setMode(k.LINES)):Ct.setMode(k.TRIANGLES);else if(Y.isLine){let Qe=K.linewidth;Qe===void 0&&(Qe=1),Ge.setLineWidth(Qe*ct()),Y.isLineSegments?Ct.setMode(k.LINES):Y.isLineLoop?Ct.setMode(k.LINE_LOOP):Ct.setMode(k.LINE_STRIP)}else Y.isPoints?Ct.setMode(k.POINTS):Y.isSprite&&Ct.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)to("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Qe=Y._multiDrawStarts,Lt=Y._multiDrawCounts,gt=Y._multiDrawCount,tn=Be?T.get(Be).bytesPerElement:1,er=qe.get(K).currentProgram.getUniforms();for(let En=0;En<gt;En++)er.setValue(k,"_gl_DrawID",En),Ct.render(Qe[En]/tn,Lt[En])}else if(Y.isInstancedMesh)Ct.renderInstances(mt,Bt,Y.count);else if(re.isInstancedBufferGeometry){const Qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Lt=Math.min(re.instanceCount,Qe);Ct.renderInstances(mt,Bt,Lt)}else Ct.render(mt,Bt)};function yt(C,j,re){C.transparent===!0&&C.side===Vi&&C.forceSinglePass===!1?(C.side=Fn,C.needsUpdate=!0,hs(C,j,re),C.side=Dr,C.needsUpdate=!0,hs(C,j,re),C.side=Vi):hs(C,j,re)}this.compile=function(C,j,re=null){re===null&&(re=C),y=be.get(re),y.init(j),b.push(y),re.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),C!==re&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights();const K=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const we=Y.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const ze=we[De];yt(ze,re,Y),K.add(ze)}else yt(we,re,Y),K.add(we)}),y=b.pop(),K},this.compileAsync=function(C,j,re=null){const K=this.compile(C,j,re);return new Promise(Y=>{function we(){if(K.forEach(function(De){qe.get(De).currentProgram.isReady()&&K.delete(De)}),K.size===0){Y(C);return}setTimeout(we,10)}pt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let bn=null;function Sn(C){bn&&bn(C)}function ds(){Ti.stop()}function Ji(){Ti.start()}const Ti=new $v;Ti.setAnimationLoop(Sn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(C){bn=C,pe.setAnimationLoop(C),C===null?Ti.stop():Ti.start()},pe.addEventListener("sessionstart",ds),pe.addEventListener("sessionend",Ji),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(j),j=pe.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,j,W),y=be.get(C,b.length),y.init(j),b.push(y),Ae.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ee.setFromProjectionMatrix(Ae),Re=this.localClippingEnabled,fe=ke.init(this.clippingPlanes,Re),_=je.get(C,L.length),_.init(),L.push(_),pe.enabled===!0&&pe.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Ri(we,j,-1/0,R.sortObjects)}Ri(C,j,0,R.sortObjects),_.finish(),R.sortObjects===!0&&_.sort(le,oe),Rt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Rt&&_e.addToRenderList(_,C),this.info.render.frame++,fe===!0&&ke.beginShadows();const re=y.state.shadowsArray;$e.render(re,C,j),fe===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=_.opaque,Y=_.transmissive;if(y.setupLights(),j.isArrayCamera){const we=j.cameras;if(Y.length>0)for(let De=0,ze=we.length;De<ze;De++){const Be=we[De];Ir(K,Y,C,Be)}Rt&&_e.render(C);for(let De=0,ze=we.length;De<ze;De++){const Be=we[De];Nr(_,C,Be,Be.viewport)}}else Y.length>0&&Ir(K,Y,C,j),Rt&&_e.render(C),Nr(_,C,j);W!==null&&F===0&&(tt.updateMultisampleRenderTarget(W),tt.updateRenderTargetMipmap(W)),C.isScene===!0&&C.onAfterRender(R,C,j),st.resetDefaultState(),P=-1,A=null,b.pop(),b.length>0?(y=b[b.length-1],fe===!0&&ke.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?_=L[L.length-1]:_=null};function Ri(C,j,re,K){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ee.intersectsSprite(C)){K&&Ve.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const De=de.update(C),ze=C.material;ze.visible&&_.push(C,De,ze,re,Ve.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ee.intersectsObject(C))){const De=de.update(C),ze=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ve.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ve.copy(De.boundingSphere.center)),Ve.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(ze)){const Be=De.groups;for(let at=0,ot=Be.length;at<ot;at++){const We=Be[at],mt=ze[We.materialIndex];mt&&mt.visible&&_.push(C,De,mt,re,Ve.z,We)}}else ze.visible&&_.push(C,De,ze,re,Ve.z,null)}}const we=C.children;for(let De=0,ze=we.length;De<ze;De++)Ri(we[De],j,re,K)}function Nr(C,j,re,K){const Y=C.opaque,we=C.transmissive,De=C.transparent;y.setupLightsView(re),fe===!0&&ke.setGlobalState(R.clippingPlanes,re),K&&Ge.viewport(B.copy(K)),Y.length>0&&Qi(Y,j,re),we.length>0&&Qi(we,j,re),De.length>0&&Qi(De,j,re),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Ir(C,j,re,K){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[K.id]===void 0&&(y.state.transmissionRenderTarget[K.id]=new us(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?_a:wi,minFilter:rs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const we=y.state.transmissionRenderTarget[K.id],De=K.viewport||B;we.setSize(De.z*R.transmissionResolutionScale,De.w*R.transmissionResolutionScale);const ze=R.getRenderTarget(),Be=R.getActiveCubeFace(),at=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(ae),me=R.getClearAlpha(),me<1&&R.setClearColor(16777215,.5),R.clear(),Rt&&_e.render(re);const ot=R.toneMapping;R.toneMapping=ji;const We=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),y.setupLightsView(K),fe===!0&&ke.setGlobalState(R.clippingPlanes,K),Qi(C,re,K),tt.updateMultisampleRenderTarget(we),tt.updateRenderTargetMipmap(we),pt.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let dt=0,Bt=j.length;dt<Bt;dt++){const Ut=j[dt],Ct=Ut.object,Qe=Ut.geometry,Lt=Ut.material,gt=Ut.group;if(Lt.side===Vi&&Ct.layers.test(K.layers)){const tn=Lt.side;Lt.side=Fn,Lt.needsUpdate=!0,Ea(Ct,re,K,Qe,Lt,gt),Lt.side=tn,Lt.needsUpdate=!0,mt=!0}}mt===!0&&(tt.updateMultisampleRenderTarget(we),tt.updateRenderTargetMipmap(we))}R.setRenderTarget(ze,Be,at),R.setClearColor(ae,me),We!==void 0&&(K.viewport=We),R.toneMapping=ot}function Qi(C,j,re){const K=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,we=C.length;Y<we;Y++){const De=C[Y],ze=De.object,Be=De.geometry,at=De.group;let ot=De.material;ot.allowOverride===!0&&K!==null&&(ot=K),ze.layers.test(re.layers)&&Ea(ze,j,re,Be,ot,at)}}function Ea(C,j,re,K,Y,we){C.onBeforeRender(R,j,re,K,Y,we),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(R,j,re,K,C,we),Y.transparent===!0&&Y.side===Vi&&Y.forceSinglePass===!1?(Y.side=Fn,Y.needsUpdate=!0,R.renderBufferDirect(re,j,K,Y,C,we),Y.side=Dr,Y.needsUpdate=!0,R.renderBufferDirect(re,j,K,Y,C,we),Y.side=Vi):R.renderBufferDirect(re,j,K,Y,C,we),C.onAfterRender(R,j,re,K,Y,we)}function hs(C,j,re){j.isScene!==!0&&(j=Mt);const K=qe.get(C),Y=y.state.lights,we=y.state.shadowsArray,De=Y.state.version,ze=ge.getParameters(C,Y.state,we,j,re),Be=ge.getProgramCacheKey(ze);let at=K.programs;K.environment=C.isMeshStandardMaterial?j.environment:null,K.fog=j.fog,K.envMap=(C.isMeshStandardMaterial?D:It).get(C.envMap||K.environment),K.envMapRotation=K.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,at===void 0&&(C.addEventListener("dispose",Ie),at=new Map,K.programs=at);let ot=at.get(Be);if(ot!==void 0){if(K.currentProgram===ot&&K.lightsStateVersion===De)return hi(C,ze),ot}else ze.uniforms=ge.getUniforms(C),C.onBeforeCompile(ze,R),ot=ge.acquireProgram(ze,Be),at.set(Be,ot),K.uniforms=ze.uniforms;const We=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=ke.uniform),hi(C,ze),K.needsLights=Eu(C),K.lightsStateVersion=De,K.needsLights&&(We.ambientLightColor.value=Y.state.ambient,We.lightProbe.value=Y.state.probe,We.directionalLights.value=Y.state.directional,We.directionalLightShadows.value=Y.state.directionalShadow,We.spotLights.value=Y.state.spot,We.spotLightShadows.value=Y.state.spotShadow,We.rectAreaLights.value=Y.state.rectArea,We.ltc_1.value=Y.state.rectAreaLTC1,We.ltc_2.value=Y.state.rectAreaLTC2,We.pointLights.value=Y.state.point,We.pointLightShadows.value=Y.state.pointShadow,We.hemisphereLights.value=Y.state.hemi,We.directionalShadowMap.value=Y.state.directionalShadowMap,We.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,We.spotShadowMap.value=Y.state.spotShadowMap,We.spotLightMatrix.value=Y.state.spotLightMatrix,We.spotLightMap.value=Y.state.spotLightMap,We.pointShadowMap.value=Y.state.pointShadowMap,We.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=ot,K.uniformsList=null,ot}function Ma(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=au.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function hi(C,j){const re=qe.get(C);re.outputColorSpace=j.outputColorSpace,re.batching=j.batching,re.batchingColor=j.batchingColor,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.instancingMorph=j.instancingMorph,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function wa(C,j,re,K,Y){j.isScene!==!0&&(j=Mt),tt.resetTextureUnits();const we=j.fog,De=K.isMeshStandardMaterial?j.environment:null,ze=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ao,Be=(K.isMeshStandardMaterial?D:It).get(K.envMap||De),at=K.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ot=!!re.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),We=!!re.morphAttributes.position,mt=!!re.morphAttributes.normal,dt=!!re.morphAttributes.color;let Bt=ji;K.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Bt=R.toneMapping);const Ut=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ct=Ut!==void 0?Ut.length:0,Qe=qe.get(K),Lt=y.state.lights;if(fe===!0&&(Re===!0||C!==A)){const un=C===A&&K.id===P;ke.setState(K,C,un)}let gt=!1;K.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Lt.state.version||Qe.outputColorSpace!==ze||Y.isBatchedMesh&&Qe.batching===!1||!Y.isBatchedMesh&&Qe.batching===!0||Y.isBatchedMesh&&Qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Qe.instancing===!1||!Y.isInstancedMesh&&Qe.instancing===!0||Y.isSkinnedMesh&&Qe.skinning===!1||!Y.isSkinnedMesh&&Qe.skinning===!0||Y.isInstancedMesh&&Qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Qe.instancingMorph===!1&&Y.morphTexture!==null||Qe.envMap!==Be||K.fog===!0&&Qe.fog!==we||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ke.numPlanes||Qe.numIntersection!==ke.numIntersection)||Qe.vertexAlphas!==at||Qe.vertexTangents!==ot||Qe.morphTargets!==We||Qe.morphNormals!==mt||Qe.morphColors!==dt||Qe.toneMapping!==Bt||Qe.morphTargetsCount!==Ct)&&(gt=!0):(gt=!0,Qe.__version=K.version);let tn=Qe.currentProgram;gt===!0&&(tn=hs(K,j,Y));let er=!1,En=!1,Ai=!1;const Nt=tn.getUniforms(),hn=Qe.uniforms;if(Ge.useProgram(tn.program)&&(er=!0,En=!0,Ai=!0),K.id!==P&&(P=K.id,En=!0),er||A!==C){Ge.buffers.depth.getReversed()?(Ee.copy(C.projectionMatrix),XS(Ee),jS(Ee),Nt.setValue(k,"projectionMatrix",Ee)):Nt.setValue(k,"projectionMatrix",C.projectionMatrix),Nt.setValue(k,"viewMatrix",C.matrixWorldInverse);const rn=Nt.map.cameraPosition;rn!==void 0&&rn.setValue(k,Ke.setFromMatrixPosition(C.matrixWorld)),xt.logarithmicDepthBuffer&&Nt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Nt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,En=!0,Ai=!0)}if(Y.isSkinnedMesh){Nt.setOptional(k,Y,"bindMatrix"),Nt.setOptional(k,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Nt.setValue(k,"boneTexture",un.boneTexture,tt))}Y.isBatchedMesh&&(Nt.setOptional(k,Y,"batchingTexture"),Nt.setValue(k,"batchingTexture",Y._matricesTexture,tt),Nt.setOptional(k,Y,"batchingIdTexture"),Nt.setValue(k,"batchingIdTexture",Y._indirectTexture,tt),Nt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Nt.setValue(k,"batchingColorTexture",Y._colorsTexture,tt));const nn=re.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Ne.update(Y,re,tn),(En||Qe.receiveShadow!==Y.receiveShadow)&&(Qe.receiveShadow=Y.receiveShadow,Nt.setValue(k,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(hn.envMap.value=Be,hn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&j.environment!==null&&(hn.envMapIntensity.value=j.environmentIntensity),En&&(Nt.setValue(k,"toneMappingExposure",R.toneMappingExposure),Qe.needsLights&&Ta(hn,Ai),we&&K.fog===!0&&ce.refreshFogUniforms(hn,we),ce.refreshMaterialUniforms(hn,K,V,ve,y.state.transmissionRenderTarget[C.id]),au.upload(k,Ma(Qe),hn,tt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(au.upload(k,Ma(Qe),hn,tt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Nt.setValue(k,"center",Y.center),Nt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),Nt.setValue(k,"normalMatrix",Y.normalMatrix),Nt.setValue(k,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const un=K.uniformsGroups;for(let rn=0,St=un.length;rn<St;rn++){const pi=un[rn];O.update(pi,tn),O.bind(pi,tn)}}return tn}function Ta(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Eu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,j,re){const K=qe.get(C);K.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),qe.get(C.texture).__webglTexture=j,qe.get(C.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:re,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const re=qe.get(C);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0};const Ra=k.createFramebuffer();this.setRenderTarget=function(C,j=0,re=0){W=C,I=j,F=re;let K=!0,Y=null,we=!1,De=!1;if(C){const Be=qe.get(C);if(Be.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(k.FRAMEBUFFER,null),K=!1;else if(Be.__webglFramebuffer===void 0)tt.setupRenderTarget(C);else if(Be.__hasExternalTextures)tt.rebindTextures(C,qe.get(C.texture).__webglTexture,qe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const We=C.depthTexture;if(Be.__boundDepthTexture!==We){if(We!==null&&qe.has(We)&&(C.width!==We.image.width||C.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(C)}}const at=C.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(De=!0);const ot=qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ot[j])?Y=ot[j][re]:Y=ot[j],we=!0):C.samples>0&&tt.useMultisampledRTT(C)===!1?Y=qe.get(C).__webglMultisampledFramebuffer:Array.isArray(ot)?Y=ot[re]:Y=ot,B.copy(C.viewport),ue.copy(C.scissor),Q=C.scissorTest}else B.copy(N).multiplyScalar(V).floor(),ue.copy(ie).multiplyScalar(V).floor(),Q=Oe;if(re!==0&&(Y=Ra),Ge.bindFramebuffer(k.FRAMEBUFFER,Y)&&K&&Ge.drawBuffers(C,Y),Ge.viewport(B),Ge.scissor(ue),Ge.setScissorTest(Q),we){const Be=qe.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+j,Be.__webglTexture,re)}else if(De){const Be=qe.get(C.texture),at=j;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,re,at)}else if(C!==null&&re!==0){const Be=qe.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,re)}P=-1},this.readRenderTargetPixels=function(C,j,re,K,Y,we,De,ze=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){Ge.bindFramebuffer(k.FRAMEBUFFER,Be);try{const at=C.textures[ze],ot=at.format,We=at.type;if(!xt.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-K&&re>=0&&re<=C.height-Y&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ze),k.readPixels(j,re,K,Y,Le.convert(ot),Le.convert(We),we))}finally{const at=W!==null?qe.get(W).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(C,j,re,K,Y,we,De,ze=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be)if(j>=0&&j<=C.width-K&&re>=0&&re<=C.height-Y){Ge.bindFramebuffer(k.FRAMEBUFFER,Be);const at=C.textures[ze],ot=at.format,We=at.type;if(!xt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,mt),k.bufferData(k.PIXEL_PACK_BUFFER,we.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ze),k.readPixels(j,re,K,Y,Le.convert(ot),Le.convert(We),0);const dt=W!==null?qe.get(W).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,dt);const Bt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await WS(k,Bt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,mt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,we),k.deleteBuffer(mt),k.deleteSync(Bt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,re=0){const K=Math.pow(2,-re),Y=Math.floor(C.image.width*K),we=Math.floor(C.image.height*K),De=j!==null?j.x:0,ze=j!==null?j.y:0;tt.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,re,0,0,De,ze,Y,we),Ge.unbindTexture()};const Aa=k.createFramebuffer(),Ca=k.createFramebuffer();this.copyTextureToTexture=function(C,j,re=null,K=null,Y=0,we=null){we===null&&(Y!==0?(to("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=Y,Y=0):we=0);let De,ze,Be,at,ot,We,mt,dt,Bt;const Ut=C.isCompressedTexture?C.mipmaps[we]:C.image;if(re!==null)De=re.max.x-re.min.x,ze=re.max.y-re.min.y,Be=re.isBox3?re.max.z-re.min.z:1,at=re.min.x,ot=re.min.y,We=re.isBox3?re.min.z:0;else{const nn=Math.pow(2,-Y);De=Math.floor(Ut.width*nn),ze=Math.floor(Ut.height*nn),C.isDataArrayTexture?Be=Ut.depth:C.isData3DTexture?Be=Math.floor(Ut.depth*nn):Be=1,at=0,ot=0,We=0}K!==null?(mt=K.x,dt=K.y,Bt=K.z):(mt=0,dt=0,Bt=0);const Ct=Le.convert(j.format),Qe=Le.convert(j.type);let Lt;j.isData3DTexture?(tt.setTexture3D(j,0),Lt=k.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(tt.setTexture2DArray(j,0),Lt=k.TEXTURE_2D_ARRAY):(tt.setTexture2D(j,0),Lt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const gt=k.getParameter(k.UNPACK_ROW_LENGTH),tn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),er=k.getParameter(k.UNPACK_SKIP_PIXELS),En=k.getParameter(k.UNPACK_SKIP_ROWS),Ai=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,at),k.pixelStorei(k.UNPACK_SKIP_ROWS,ot),k.pixelStorei(k.UNPACK_SKIP_IMAGES,We);const Nt=C.isDataArrayTexture||C.isData3DTexture,hn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const nn=qe.get(C),un=qe.get(j),rn=qe.get(nn.__renderTarget),St=qe.get(un.__renderTarget);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let pi=0;pi<Be;pi++)Nt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qe.get(C).__webglTexture,Y,We+pi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qe.get(j).__webglTexture,we,Bt+pi)),k.blitFramebuffer(at,ot,De,ze,mt,dt,De,ze,k.DEPTH_BUFFER_BIT,k.NEAREST);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||qe.has(C)){const nn=qe.get(C),un=qe.get(j);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,Aa),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ca);for(let rn=0;rn<Be;rn++)Nt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nn.__webglTexture,Y,We+rn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nn.__webglTexture,Y),hn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,un.__webglTexture,we,Bt+rn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,un.__webglTexture,we),Y!==0?k.blitFramebuffer(at,ot,De,ze,mt,dt,De,ze,k.COLOR_BUFFER_BIT,k.NEAREST):hn?k.copyTexSubImage3D(Lt,we,mt,dt,Bt+rn,at,ot,De,ze):k.copyTexSubImage2D(Lt,we,mt,dt,at,ot,De,ze);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else hn?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Lt,we,mt,dt,Bt,De,ze,Be,Ct,Qe,Ut.data):j.isCompressedArrayTexture?k.compressedTexSubImage3D(Lt,we,mt,dt,Bt,De,ze,Be,Ct,Ut.data):k.texSubImage3D(Lt,we,mt,dt,Bt,De,ze,Be,Ct,Qe,Ut):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,we,mt,dt,De,ze,Ct,Qe,Ut.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,we,mt,dt,Ut.width,Ut.height,Ct,Ut.data):k.texSubImage2D(k.TEXTURE_2D,we,mt,dt,De,ze,Ct,Qe,Ut);k.pixelStorei(k.UNPACK_ROW_LENGTH,gt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,er),k.pixelStorei(k.UNPACK_SKIP_ROWS,En),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ai),we===0&&j.generateMipmaps&&k.generateMipmap(Lt),Ge.unbindTexture()},this.copyTextureToTexture3D=function(C,j,re=null,K=null,Y=0){return to('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,re,K,Y)},this.initRenderTarget=function(C){qe.get(C).__webglFramebuffer===void 0&&tt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?tt.setTextureCube(C,0):C.isData3DTexture?tt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?tt.setTexture2DArray(C,0):tt.setTexture2D(C,0),Ge.unbindTexture()},this.resetState=function(){I=0,F=0,W=null,Ge.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}function gR(r){switch(r){case"fa-user-tag":case"fa-person":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"12",cy:"7",r:"3.5"}),$.jsx("path",{d:"M5 21c0-4.2 3.1-7 7-7s7 2.8 7 7"})]});case"fa-venus-mars":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"8",cy:"9",r:"3.5"}),$.jsx("path",{d:"M8 12.5V21M5 17.5h6"}),$.jsx("circle",{cx:"16.5",cy:"14.5",r:"3.5"}),$.jsx("path",{d:"M19 12l3-3m0 0h-4m4 0v4"})]});case"fa-palette":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0 0-5H12a2 2 0 0 1 0-4h3a6 6 0 0 0-3-9Z"}),$.jsx("circle",{cx:"7",cy:"10",r:".7",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"6.5",r:".7",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"13",cy:"5.8",r:".7",fill:"currentColor",stroke:"none"})]});case"fa-eye":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z"}),$.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]});case"fa-eye-dropper":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m14 5 5 5M16.5 2.5l5 5-10 10-4 1 1-4 10-10Z"}),$.jsx("path",{d:"M5 19h6"})]});case"fa-scissors":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"6",cy:"7",r:"2.5"}),$.jsx("circle",{cx:"6",cy:"17",r:"2.5"}),$.jsx("path",{d:"m8 8.5 12 8.5M8 15.5 20 7"})]});case"fa-fill-drip":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m4 14 8-8 6 6-8 8H4v-6Z"}),$.jsx("path",{d:"M15 5 12 2"}),$.jsx("path",{d:"M20 15s2 2.2 2 3.5a2 2 0 0 1-4 0c0-1.3 2-3.5 2-3.5Z"})]});case"fa-hat-cowboy":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M4 16h16M7 16l1.5-7h7L17 16"}),$.jsx("path",{d:"M2.5 16c1.5 3 17.5 3 19 0"})]});case"fa-shirt":return $.jsx("path",{d:"M8 4h8l5 4-3 4-2-2v10H8V10l-2 2-3-4 5-4Z"});case"fa-shoe-prints":return $.jsxs($.Fragment,{children:[$.jsx("ellipse",{cx:"8",cy:"8",rx:"2.5",ry:"4",transform:"rotate(-20 8 8)"}),$.jsx("ellipse",{cx:"16",cy:"16",rx:"2.5",ry:"4",transform:"rotate(-20 16 16)"})]});case"fa-gem":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M6 4h12l4 5-10 11L2 9l4-5Z"}),$.jsx("path",{d:"M2 9h20M8 4l4 16 4-16"})]});case"fa-sliders":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M4 6h5M15 6h5M4 12h10M18 12h2M4 18h2M10 18h10"}),$.jsx("circle",{cx:"12",cy:"6",r:"2"}),$.jsx("circle",{cx:"16",cy:"12",r:"2"}),$.jsx("circle",{cx:"8",cy:"18",r:"2"})]});case"fa-grip-vertical":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"9",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"18",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"18",r:"1",fill:"currentColor",stroke:"none"})]});case"fa-chevron-up":return $.jsx("path",{d:"m6 15 6-6 6 6"});case"fa-chevron-down":return $.jsx("path",{d:"m6 9 6 6 6-6"});case"fa-check":return $.jsx("path",{d:"m5 12 4 4L19 6"});case"fa-arrows-rotate":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M20 7v5h-5"}),$.jsx("path",{d:"M4 17v-5h5"}),$.jsx("path",{d:"M6.2 8.2A7 7 0 0 1 18.8 10M17.8 15.8A7 7 0 0 1 5.2 14"})]});case"fa-layer-group":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),$.jsx("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]});case"fa-pause":return $.jsx("path",{d:"M8 5v14M16 5v14"});case"fa-play":return $.jsx("path",{d:"m8 5 11 7-11 7V5Z"});case"fa-download":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M12 3v12m0 0 4-4m-4 4-4-4"}),$.jsx("path",{d:"M5 20h14"})]});default:return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"12",cy:"12",r:"8"}),$.jsx("path",{d:"M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01"})]})}}function ss({name:r,className:e=""}){return $.jsx("svg",{className:`skincrafter-icon ${e}`.trim(),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false","data-skincrafter-icon":r,children:gR(r)})}function Jv({title:r,icon:e,iconClassName:t="skincrafter-accent-text",className:s="",children:o}){return $.jsxs("section",{className:`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${s}`,children:[$.jsxs("h2",{className:"text-xl font-bold mb-2 skincrafter-heading flex items-center",children:[$.jsx(ss,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),r]}),o]})}function Jl({icon:r,className:e="",children:t,...s}){return $.jsxs("button",{className:`pixel-button preview-action-button p-2 pixel-border transition-colors ${e}`,...s,children:[r&&$.jsx(ss,{name:r,className:"skincrafter-button-icon"}),t]})}const vR=""+new URL("/assets/male-BAcllNor-BAcllNor.png",import.meta.url).href,_R=""+new URL("/assets/female-QkyEKH3M-QkyEKH3M.png",import.meta.url).href,xR=""+new URL("/assets/male-CCp8Ivtz-CCp8Ivtz.png",import.meta.url).href,yR=""+new URL("/assets/male-Df8EQiYb-Df8EQiYb.png",import.meta.url).href,SR=""+new URL("/assets/male-Kk_GEnn7-Kk_GEnn7.png",import.meta.url).href,ER=""+new URL("/assets/none-CbOwHiBU-CbOwHiBU.png",import.meta.url).href,MR=""+new URL("/assets/clasic-Cok0gEvd-Cok0gEvd.png",import.meta.url).href,wR=""+new URL("/assets/small-lE1Vvqgb-lE1Vvqgb.png",import.meta.url).href,TR=""+new URL("/assets/big-exakGI1u-exakGI1u.png",import.meta.url).href,RR=""+new URL("/assets/duck-Dz_q_Va_-Dz_q_Va_.png",import.meta.url).href,AR=""+new URL("/assets/hoodie-C1a1is5P-C1a1is5P.png",import.meta.url).href,CR=""+new URL("/assets/pants-gRdPSA1G-gRdPSA1G.png",import.meta.url).href,Qv={"textures/race/human/male.png":vR,"textures/race/human/female.png":_R,"textures/race/bear/male.png":xR,"textures/race/orc/male.png":yR,"textures/race/zombie/male.png":SR,"textures/race/template/none.png":ER,"textures/eyes/clasic.png":MR,"textures/eyes/small.png":wR,"textures/eyes/big.png":TR,"textures/hat/duck.png":RR,"textures/top/male/hoodie.png":AR,"textures/bottom/pants.png":CR};function as(r,e){return e?`${e.replace(/\/+$/,"")}/${r.replace(/^\/+/,"")}`:Qv[r]}const Fg=Qv["textures/race/human/male.png"],Zs=64;function Kn(r,e,t,s,o,l,c,f,d={}){const{transparent:p=!1,expand:m=0,rotate180Faces:v=[],flipXFaces:x=[],flipYFaces:S=[]}=d,E=new Set(v),M=new Set(x),_=new Set(S),y=new po(e+m,t+m,s+m),L=[new Ar({transparent:p,toneMapped:!1}),new Ar({transparent:p,toneMapped:!1}),new Ar({transparent:p,toneMapped:!1}),new Ar({transparent:p,toneMapped:!1}),new Ar({transparent:p,toneMapped:!1}),new Ar({transparent:p,toneMapped:!1})],b=(F,W,P=!1,A=!1)=>{const B=r.clone(),ue=(W[2]-W[0])/Zs,Q=(W[3]-W[1])/Zs,ae=W[0]/Zs,me=W[2]/Zs,te=1-W[1]/Zs,ve=1-W[3]/Zs;B.magFilter=dn,B.minFilter=dn,B.wrapS=aa,B.wrapT=aa,B.repeat.set(P?-ue:ue,A?-Q:Q),B.offset.set(P?me:ae,A?te:ve),B.needsUpdate=!0,F.map=B},R=F=>E.has(F)||M.has(F),H=F=>E.has(F)||_.has(F);b(L[0],f.right,R("right"),H("right")),b(L[1],f.left,R("left"),H("left")),b(L[2],f.top,R("top"),H("top")),b(L[3],f.bottom,R("bottom"),H("bottom")),b(L[4],f.front,R("front"),H("front")),b(L[5],f.back,R("back"),H("back"));const I=new Si(y,L);return I.position.set(o,l,c),I}const bR=-6,PR=6,LR=-10,DR=10,Ql=16,Og=-2,kg=2;function UR(r,e,t={}){const{armL:s,armR:o,legL:l,legR:c,armLOL:f,armROL:d,legLOL:p,legROL:m}=e,v=t.leftArmX??PR,x=t.rightArmX??bR,S=t.leftArmX!==void 0?t.leftArmX+4:DR,E=t.rightArmX!==void 0?t.rightArmX-4:LR;if(!(!s||!o||!l||!c)){if([s,o,l,c,f,d,p,m].forEach(M=>M?.rotation.set(0,0,0)),s.position.set(v,12,0),o.position.set(x,12,0),l.position.set(kg,0,0),c.position.set(Og,0,0),f?.position.set(v,12,0),d?.position.set(x,12,0),p?.position.set(kg,0,0),m?.position.set(Og,0,0),r==="tpose"){const M=Math.PI/2;s.position.set(S,Ql,0),o.position.set(E,Ql,0),s.rotation.z=M,o.rotation.z=-M,f?.position.set(S,Ql,0),d?.position.set(E,Ql,0),f?.rotation.set(0,0,M),d?.rotation.set(0,0,-M)}else if(r==="walking"){const M=-Math.PI/4,_=Math.PI/4,y=13;s.rotation.x=M,s.position.set(s.position.x,y,3),o.rotation.x=_,o.position.set(o.position.x,y,-3),l.rotation.x=_,l.position.set(l.position.x,1,-4),c.rotation.x=M,c.position.set(c.position.x,1,4),f&&(f.rotation.x=M,f.position.set(f.position.x,y,3)),d&&(d.rotation.x=_,d.position.set(d.position.x,y,-3)),p&&(p.rotation.x=_,p.position.set(p.position.x,1,-4)),m&&(m.rotation.x=M,m.position.set(m.position.x,1,4))}}}const NR={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},IR={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},FR={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},OR={left:[40,20,44,32],right:[47,20,51,32],top:[44,16,47,20],bottom:[47,16,50,20],front:[44,20,47,32],back:[51,20,54,32]},kR={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},BR={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},zR={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},HR={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},VR={left:[40,36,44,48],right:[47,36,51,48],top:[44,32,47,36],bottom:[47,32,50,36],front:[44,36,47,48],back:[51,36,54,48]},GR={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},WR={left:[32,52,36,64],right:[40,52,44,64],top:[36,48,40,52],bottom:[40,48,44,52],front:[36,52,40,64],back:[44,52,48,64]},XR={left:[32,52,36,64],right:[39,52,43,64],top:[36,48,39,52],bottom:[39,48,42,52],front:[36,52,39,64],back:[43,52,46,64]},jR={left:[16,52,20,64],right:[24,52,28,64],top:[20,48,24,52],bottom:[24,48,28,52],front:[20,52,24,64],back:[28,52,32,64]},$R={left:[48,52,52,64],right:[56,52,60,64],top:[52,48,56,52],bottom:[56,48,60,52],front:[52,52,56,64],back:[60,52,64,64]},YR={left:[48,52,52,64],right:[55,52,59,64],top:[52,48,55,52],bottom:[55,48,58,52],front:[52,52,55,64],back:[59,52,62,64]},qR={left:[0,52,4,64],right:[8,52,12,64],top:[4,48,8,52],bottom:[8,48,12,52],front:[4,52,8,64],back:[12,52,16,64]},Bf=0,KR=44,ZR=24,JR=72,QR=.04,eA=.5,Bg=-6,zg=6,Hg=-5.5,Vg=5.5,Gg=-2,Wg=2,Xg=()=>({armL:null,armR:null,legL:null,legR:null,armLOL:null,armROL:null,legLOL:null,legROL:null,headOL:null,bodyOL:null}),tA={createRenderer:()=>new mR({antialias:!1,alpha:!0}),createTextureLoader:()=>new AE,createResizeObserver:r=>new ResizeObserver(r),requestAnimationFrame:r=>window.requestAnimationFrame(r),cancelAnimationFrame:r=>window.cancelAnimationFrame(r),addWindowResizeListener:r=>window.addEventListener("resize",r),removeWindowResizeListener:r=>window.removeEventListener("resize",r),getDevicePixelRatio:()=>window.devicePixelRatio||1};class nA{constructor(e,t,s=tA){this.container=e,this.dependencies=s,this.pose=t.pose,this.model=t.model,this.showOverlay=t.showOverlay,this.autoRotate=t.autoRotate,this.onError=t.onError;const o=e.clientWidth||1,l=e.clientHeight||1;this.renderer=s.createRenderer(),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=An,this.renderer.toneMapping=ji,this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(o,l),e.appendChild(this.renderer.domElement),this.camera=new Jn(52,o/l,.1,1e3),this.camera.position.set(0,Bf,this.cameraDistance),this.camera.lookAt(0,Bf,0),this.scene=new _E;const c=new LE(16777215,1);c.position.set(10,10,10),this.scene.add(c),this.group=new ea,this.group.position.y=-10,this.scene.add(this.group),this.textureLoader=s.createTextureLoader(),this.resizeObserver=s.createResizeObserver(this.handleResize),this.resizeObserver.observe(e),s.addWindowResizeListener(this.handleResize),e.addEventListener("wheel",this.handleWheel,{passive:!1}),this.handleResize(),this.scheduleAnimationFrame(),this.setTexture(t.textureUrl)}container;dependencies;renderer;camera;scene;group;textureLoader;resizeObserver;onError;disposedTextures=new WeakSet;pendingTextures=new Map;parts=Xg();modelMeshes=[];currentTexture=null;requestedTextureUrl=null;textureLoadVersion=0;animationFrameId=null;disposed=!1;pose;model;showOverlay;autoRotate;cameraDistance=KR;modelRevision=0;textureRevision=0;setTexture(e){if(this.disposed||e===this.requestedTextureUrl)return;this.requestedTextureUrl=e;const t=++this.textureLoadVersion;let s=!1;const o=this.textureLoader.load(e,l=>{s=!0,this.pendingTextures.delete(t),this.handleTextureLoaded(t,l)},void 0,l=>{s=!0;const c=this.pendingTextures.get(t);c&&(this.disposeTexture(c),this.pendingTextures.delete(t)),!this.disposed&&t===this.textureLoadVersion&&this.onError?.({code:"texture_load_failed",textureUrl:e,cause:l})});s||this.pendingTextures.set(t,o)}setModel(e){this.disposed||e===this.model||(this.model=e,this.currentTexture&&this.buildModel(this.currentTexture))}setPose(e){this.disposed||e===this.pose||(this.pose=e,this.applyCurrentPose())}setShowOverlay(e){this.disposed||e===this.showOverlay||(this.showOverlay=e,this.applyOverlayVisibility())}setAutoRotate(e){this.disposed||(this.autoRotate=e)}getDiagnostics(){const e=this.parts.armR?.geometry.parameters.width;return{rendererAttached:this.renderer.domElement.parentNode===this.container,modelRevision:this.modelRevision,textureRevision:this.textureRevision,meshCount:this.modelMeshes.length,rightArmWidth:typeof e=="number"?e:null,overlayVisible:this.getOverlayMeshes().map(t=>t.visible),cameraDistance:this.cameraDistance,rotation:this.group.rotation.y}}dispose(){this.disposed||(this.disposed=!0,this.textureLoadVersion+=1,this.container.removeEventListener("wheel",this.handleWheel),this.dependencies.removeWindowResizeListener(this.handleResize),this.resizeObserver.disconnect(),this.animationFrameId!==null&&(this.dependencies.cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.pendingTextures.forEach(e=>this.disposeTexture(e)),this.pendingTextures.clear(),this.disposeModel(),this.currentTexture&&(this.disposeTexture(this.currentTexture),this.currentTexture=null),this.renderer.dispose(),this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement))}handleResize=()=>{if(this.disposed)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()};handleWheel=e=>{this.disposed||(e.preventDefault(),this.cameraDistance=VS.clamp(this.cameraDistance+e.deltaY*QR,ZR,JR),this.camera.position.z=this.cameraDistance,this.camera.lookAt(0,Bf,0),this.camera.updateProjectionMatrix())};scheduleAnimationFrame(){this.animationFrameId=this.dependencies.requestAnimationFrame(()=>{this.disposed||(this.autoRotate&&(this.group.rotation.y+=.01),this.renderer.render(this.scene,this.camera),this.scheduleAnimationFrame())})}getClampedDpr(){return Math.min(this.dependencies.getDevicePixelRatio(),2)}handleTextureLoaded(e,t){if(this.disposed||e!==this.textureLoadVersion){this.disposeTexture(t);return}this.configureTexture(t);const s=this.currentTexture;this.modelMeshes.length===0?this.buildModel(t):this.replaceModelTexture(t),this.currentTexture=t,this.textureRevision+=1,s&&s!==t&&this.disposeTexture(s)}configureTexture(e){e.magFilter=dn,e.minFilter=dn,e.generateMipmaps=!1,e.colorSpace=An,e.wrapS=Gi,e.wrapT=Gi}buildModel(e){this.disposeModel();const t=this.model==="slim",s=t?3:4,o=t?Hg:Bg,l=t?Vg:zg,c=t?OR:FR,f=t?XR:WR,d=t?VR:HR,p=t?YR:$R,m=Kn(e,8,8,8,0,22,0,NR,{flipYFaces:["bottom"]}),v=Kn(e,8,12,4,0,12,0,IR),x=Kn(e,s,12,4,o,12,0,c),S=Kn(e,s,12,4,l,12,0,f),E=Kn(e,4,12,4,Gg,0,0,kR),M=Kn(e,4,12,4,Wg,0,0,jR),_={transparent:!0,expand:eA},y=Kn(e,8,8,8,0,22,0,BR,{..._,flipYFaces:["bottom"]}),L=Kn(e,8,12,4,0,12,0,zR,_),b=Kn(e,s,12,4,o,12,0,d,_),R=Kn(e,s,12,4,l,12,0,p,_),H=Kn(e,4,12,4,Gg,0,0,GR,_),I=Kn(e,4,12,4,Wg,0,0,qR,_);this.parts={armL:S,armR:x,legL:M,legR:E,armLOL:R,armROL:b,legLOL:I,legROL:H,headOL:y,bodyOL:L},this.modelMeshes=[m,v,x,S,E,M,y,L,b,R,H,I],this.group.add(...this.modelMeshes),this.modelRevision+=1,this.applyOverlayVisibility(),this.applyCurrentPose()}replaceModelTexture(e){this.modelMeshes.forEach(t=>{t.material.forEach(s=>{const o=s.map;if(!o)return;const l=e.clone();l.magFilter=dn,l.minFilter=dn,l.generateMipmaps=!1,l.colorSpace=An,l.wrapS=o.wrapS,l.wrapT=o.wrapT,l.repeat.copy(o.repeat),l.offset.copy(o.offset),l.center.copy(o.center),l.rotation=o.rotation,l.flipY=o.flipY,l.needsUpdate=!0,s.map=l,s.needsUpdate=!0,this.disposeTexture(o)})})}applyCurrentPose(){const e=this.model==="slim";UR(this.pose,{armL:this.parts.armL,armR:this.parts.armR,legL:this.parts.legL,legR:this.parts.legR,armLOL:this.parts.armLOL,armROL:this.parts.armROL,legLOL:this.parts.legLOL,legROL:this.parts.legROL},{leftArmX:e?Vg:zg,rightArmX:e?Hg:Bg})}applyOverlayVisibility(){this.getOverlayMeshes().forEach(e=>{e.visible=this.showOverlay})}getOverlayMeshes(){return[this.parts.headOL,this.parts.bodyOL,this.parts.armLOL,this.parts.armROL,this.parts.legLOL,this.parts.legROL].filter(e=>e!==null)}disposeModel(){this.modelMeshes.forEach(e=>{this.group.remove(e),e.geometry.dispose(),e.material.forEach(t=>{t.map&&(this.disposeTexture(t.map),t.map=null),t.dispose()})}),this.modelMeshes=[],this.parts=Xg()}disposeTexture(e){this.disposedTextures.has(e)||(this.disposedTextures.add(e),e.dispose())}}function iA(r,e,t){return new nA(r,e,t)}function rA(r){return{code:"preview_texture_load_failed",category:"preview",message:`Failed to load preview texture: ${r.textureUrl}`,assetUrl:r.textureUrl,cause:r.cause}}function sA({texture:r,pose:e="default",model:t="classic",showOverlay:s=!0,autoRotate:o=!0,style:l,onError:c}){const f=X.useRef(null),d=X.useRef(null),p=X.useRef(c),m=X.useRef({textureUrl:r??Fg,pose:e,model:t,showOverlay:s,autoRotate:o,onError:v=>p.current?.(rA(v))});return X.useEffect(()=>{p.current=c},[c]),X.useEffect(()=>{const v=f.current;if(!v)return;let x;try{x=iA(v,m.current)}catch(S){p.current?.({code:"preview_webgl_initialization_failed",category:"preview",message:"Failed to initialize the WebGL skin preview.",cause:S});return}return d.current=x,()=>{x.dispose(),d.current===x&&(d.current=null)}},[]),X.useEffect(()=>{d.current?.setTexture(r??Fg)},[r]),X.useEffect(()=>{d.current?.setModel(t)},[t]),X.useEffect(()=>{d.current?.setPose(e)},[e]),X.useEffect(()=>{d.current?.setShowOverlay(s)},[s]),X.useEffect(()=>{d.current?.setAutoRotate(o)},[o]),$.jsx("div",{ref:f,style:{width:"100%",height:"100%",minHeight:0,position:"relative",touchAction:"none",...l??{}}})}const e_=["en","pl"],go="en",jg={en:{"app.title":"SkinCrafter","nav.wardrobe":"Wardrobe","nav.skinView":"Skin View","nav.language":"Language","nav.workInProgress":"Work in progress","panel.preview":"Preview","panel.customization":"Customization","panel.loadSkin":"Load Minecraft Skin","action.changePose":"Change Pose","action.hideOverlay":"Hide Overlay","action.showOverlay":"Show Overlay","action.disableAutoRotate":"Stop Rotation","action.enableAutoRotate":"Start Rotation","action.download":"Download","action.downloadSkin":"Download character skin","action.dragLayer":"Drag layer","action.moveLayerUp":"Move layer up","action.moveLayerDown":"Move layer down","action.loadSkin":"Load Skin","action.loading":"Loading...","error.assetLoad":"A skin texture could not be loaded. Check the selected assets and try again.","error.generation":"The skin could not be generated. Change the selection and try again.","error.initialSkin":"The supplied skin is not a valid 64x64 Minecraft PNG.","error.preview":"The 3D preview could not be loaded. Skin editing and download may still be available.","skinView.player":"Player","skinView.username":"Minecraft username","category.race":"Character Race","category.sex":"Sex","category.skinColor":"Skin Color","category.eyes":"Eyes","category.eyesColor":"Eye Color","category.hair":"Hair","category.hairColor":"Hair Color","category.hat":"Hat","category.shirt":"Shirt","category.pants":"Pants","category.shoes":"Shoes","category.accessory":"Accessory","option.none":"None","option.sex.Male":"Male","option.sex.Female":"Female","option.race.Human":"Human","option.race.Bear":"Bear","option.race.Orc":"Orc","option.race.Zombie":"Zombie","option.race.Template":"Template","option.eyes.Classic":"Classic","option.eyes.Small":"Small","option.eyes.Big":"Big","option.hat.Duck":"Duck","option.shirt.Hoodie":"Hoodie","option.pants.Pants":"Pants","option.color.blue":"Blue","option.color.green":"Green","option.color.brown":"Brown","option.color.blond":"Blond","option.color.black":"Black"},pl:{"app.title":"SkinCrafter","nav.wardrobe":"Kreator","nav.skinView":"Podglad","nav.language":"Jezyk","nav.workInProgress":"Produkt w trakcie prac","panel.preview":"Podglad","panel.customization":"Personalizacja","panel.loadSkin":"Wczytaj skin Minecraft","action.changePose":"Zmien Poze","action.hideOverlay":"Ukryj Warstwe","action.showOverlay":"Pokaz Warstwe","action.disableAutoRotate":"Zatrzymaj Obrot","action.enableAutoRotate":"Wlacz Obrot","action.download":"Pobierz","action.downloadSkin":"Pobierz skin postaci","action.dragLayer":"Przeciagnij warstwe","action.moveLayerUp":"Przesun warstwe wyzej","action.moveLayerDown":"Przesun warstwe nizej","action.loadSkin":"Wczytaj Skin","action.loading":"Wczytywanie...","error.assetLoad":"Nie udalo sie wczytac tekstury skina. Sprawdz wybrane elementy i sprobuj ponownie.","error.generation":"Nie udalo sie wygenerowac skina. Zmien wybor i sprobuj ponownie.","error.initialSkin":"Przekazany skin nie jest prawidlowym plikiem PNG Minecraft 64x64.","error.preview":"Nie udalo sie uruchomic podgladu 3D. Edycja i pobieranie skina moga nadal dzialac.","skinView.player":"Gracz","skinView.username":"Nazwa gracza Minecraft","category.race":"Rasa Postaci","category.sex":"Plec","category.skinColor":"Kolor Skory","category.eyes":"Oczy","category.eyesColor":"Kolor Oczu","category.hair":"Wlosy","category.hairColor":"Kolor Wlosow","category.hat":"Czapka","category.shirt":"Koszulka","category.pants":"Spodnie","category.shoes":"Buty","category.accessory":"Dodatek","option.none":"Brak","option.sex.Male":"Mezczyzna","option.sex.Female":"Kobieta","option.race.Human":"Czlowiek","option.race.Bear":"Niedzwiedz","option.race.Orc":"Ork","option.race.Zombie":"Zombie","option.race.Template":"Szablon","option.eyes.Classic":"Klasyczne","option.eyes.Small":"Male","option.eyes.Big":"Duze","option.hat.Duck":"Kaczka","option.shirt.Hoodie":"Bluza","option.pants.Pants":"Spodnie","option.color.blue":"Niebieski","option.color.green":"Zielony","option.color.brown":"Brazowy","option.color.blond":"Blond","option.color.black":"Czarny"}};function oA(r){return!!r&&e_.includes(r)}function Sa(r,e){return jg[r][e]??jg[go][e]??e}const aA=r=>Sa(go,r);function lA(r){return r.code==="asset_load_failed"?"error.assetLoad":r.code==="invalid_initial_skin"?"error.initialSkin":r.category==="preview"?"error.preview":"error.generation"}function t_({texture:r,model:e="classic",footerHeight:t=0,t:s=aA,onSave:o,canSave:l,generationStatus:c,generationError:f,onError:d}){const[p,m]=X.useState("default"),[v,x]=X.useState(!0),[S,E]=X.useState(!0),[M,_]=X.useState(null),y=()=>{m(A=>A==="default"?"tpose":A==="tpose"?"walking":"default")},L=()=>{x(A=>!A)},b=()=>{E(A=>!A)},R=l??!!r,H=()=>{if(!r||!R)return;const A=document.createElement("a");A.href=r,A.download="skincrafter-skin.png",A.click()},I=()=>{if(R){if(o){o();return}H()}},F=X.useCallback(A=>{_(A),d?.(A)},[d]);X.useEffect(()=>{_(A=>A?.code==="preview_texture_load_failed"?null:A)},[r]);const W=c==="error"&&f?f:M,P={"--skincrafter-preview-bottom-offset":`${Math.max(0,t)}px`};return $.jsxs(Jv,{title:s("panel.preview"),icon:"fa-eye",children:[$.jsx("div",{className:"skincrafter-preview-surface overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full",style:P,children:$.jsx("div",{className:"flex justify-center items-center model-placeholder h-full",children:$.jsx(sA,{texture:r,pose:p,model:e,showOverlay:v,autoRotate:S,onError:F})})}),W&&$.jsx("p",{className:"mt-3 text-sm font-semibold skincrafter-error-text",role:"alert",children:s(lA(W))}),$.jsxs("div",{className:"mt-4 preview-actions",children:[$.jsx(Jl,{className:"skincrafter-secondary-action",icon:"fa-arrows-rotate","aria-label":s("action.changePose"),onClick:y,children:s("action.changePose")}),$.jsx(Jl,{className:"skincrafter-secondary-action",icon:"fa-layer-group","aria-label":s(v?"action.hideOverlay":"action.showOverlay"),onClick:L,children:s(v?"action.hideOverlay":"action.showOverlay")}),$.jsx(Jl,{className:"skincrafter-secondary-action",icon:S?"fa-pause":"fa-play","aria-label":s(S?"action.disableAutoRotate":"action.enableAutoRotate"),onClick:b,children:s(S?"action.disableAutoRotate":"action.enableAutoRotate")}),$.jsx(Jl,{className:"skincrafter-secondary-action disabled:opacity-50 disabled:cursor-not-allowed",icon:"fa-download","aria-label":s("action.downloadSkin"),onClick:I,disabled:!R,children:s("action.download")})]})]})}function uA({left:r,right:e}){return $.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:r}),$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:e})]})}function cA({heading:r,icon:e,iconClassName:t="skincrafter-category-icon",className:s="",children:o,...l}){return $.jsxs("div",{className:`option-card skincrafter-surface p-4 pixel-border relative ${r?"pt-5":""} ${s}`,...l,children:[r&&$.jsxs("h3",{className:"font-medium mb-2 flex items-center absolute -top-3 left-4 px-2 skincrafter-surface skincrafter-heading z-10",children:[e&&$.jsx(ss,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),r]}),o]})}const fA=["None","Duck"];function n_(r,e){return r==="Duck"?as("textures/hat/duck.png",e):null}const dA=["None","Pants"];function i_(r,e){return r==="Pants"?as("textures/bottom/pants.png",e):null}const r_={Human:{Male:"textures/race/human/male.png",Female:"textures/race/human/female.png"},Bear:{Male:"textures/race/bear/male.png"},Orc:{Male:"textures/race/orc/male.png"},Zombie:{Male:"textures/race/zombie/male.png"},Template:{None:"textures/race/template/none.png"}};function s_(r){return Object.keys(r_[r])}function o_(r,e,t){const s=r_[r],o=s_(r)[0],l=s[e]??s[o];return l?as(l,t):""}const hA=["Human","Bear","Orc","Zombie"],pA=["None","Hoodie"];function a_(r,e){return r==="Hoodie"?as("textures/top/male/hoodie.png",e):null}const l_={Human:["#D5BAAA","#E0AC69","#C68642"],Bear:["#5D4037","#8D6E63","#A1887F"],Orc:["#558B2F","#7CB342"],Zombie:["#556B2F"],Template:["#FFFFFF"]},cs=[{id:"race",labelKey:"category.race",icon:"fa-user-tag",control:"choice"},{id:"sex",labelKey:"category.sex",icon:"fa-venus-mars",control:"choice"},{id:"skinColor",labelKey:"category.skinColor",icon:"fa-palette",control:"color"},{id:"eyes",labelKey:"category.eyes",icon:"fa-eye",control:"choice"},{id:"eyesColor",labelKey:"category.eyesColor",icon:"fa-eye-dropper",control:"color"},{id:"hair",labelKey:"category.hair",icon:"fa-scissors",control:"choice"},{id:"hairColor",labelKey:"category.hairColor",icon:"fa-fill-drip",control:"color"},{id:"hat",labelKey:"category.hat",icon:"fa-hat-cowboy",control:"choice"},{id:"shirt",labelKey:"category.shirt",icon:"fa-shirt",control:"choice"},{id:"pants",labelKey:"category.pants",icon:"fa-person",control:"choice"},{id:"shoes",labelKey:"category.shoes",icon:"fa-shoe-prints",control:"choice"},{id:"accessory",labelKey:"category.accessory",icon:"fa-gem",control:"choice"}],br={race:"Human",sex:"Male",skinColor:l_.Human[0],eyes:"Classic",eyesColor:"#2F5D9B",hair:"None",hairColor:"#4A2F20",hat:"None",shirt:"None",pants:"None",shoes:"None",accessory:"None"},du=["hat","shirt","pants","shoes","accessory"],Pd={id:"None",labelKey:"option.none",texture:null},mA={Male:{id:"Male",labelKey:"option.sex.Male",texture:null},Female:{id:"Female",labelKey:"option.sex.Female",texture:null},None:Pd};function io(r,e,t){if(r==="race")return hA.map(s=>({id:s,labelKey:`option.race.${s}`,texture:o_(s,"Male",t)}));if(r==="sex")return s_(e.race).map(s=>mA[s]);if(r==="skinColor"){const s=e.race;return l_[s].map(o=>({id:o,labelKey:`option.skinColor.${o}`,color:o}))}return r==="eyes"?[{id:"Classic",labelKey:"option.eyes.Classic",texture:as("textures/eyes/clasic.png",t)},{id:"Small",labelKey:"option.eyes.Small",texture:as("textures/eyes/small.png",t)},{id:"Big",labelKey:"option.eyes.Big",texture:as("textures/eyes/big.png",t)}]:r==="eyesColor"?[{id:"#2F5D9B",labelKey:"option.color.blue",color:"#2F5D9B"},{id:"#2F8F4E",labelKey:"option.color.green",color:"#2F8F4E"},{id:"#5B3A29",labelKey:"option.color.brown",color:"#5B3A29"}]:r==="hair"?[Pd]:r==="hairColor"?[{id:"#4A2F20",labelKey:"option.color.brown",color:"#4A2F20"},{id:"#D6B15D",labelKey:"option.color.blond",color:"#D6B15D"},{id:"#1F1A17",labelKey:"option.color.black",color:"#1F1A17"}]:r==="hat"?fA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.hat.${s}`,texture:n_(s,t)})):r==="shirt"?pA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.shirt.${s}`,texture:a_(s,t)})):r==="pants"?dA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.pants.${s}`,texture:i_(s,t)})):[Pd]}function Su(r){const e={...br,...r??{}};io("race",e).map(s=>s.id).includes(e.race)||(e.race=br.race);const t=io("skinColor",e).map(s=>s.id);return t.includes(e.skinColor)||(e.skinColor=t[0]??br.skinColor),cs.forEach(s=>{const o=io(s.id,e).map(l=>l.id);o.includes(e[s.id])||(e[s.id]=o[0]??"None")}),e}function Lr(r){const e=new Set(du),t=[];return(r??[]).forEach(s=>{e.has(s)&&!t.includes(s)&&t.push(s)}),du.forEach(s=>{t.includes(s)||t.push(s)}),t}function u_(r,e,t){if(r==="race")return{url:o_(e.race,e.sex,t),tint:e.skinColor};if(r==="hat")return n_(e.hat,t);if(r==="shirt"){const s=a_(e.shirt,t);return s?{url:s}:null}if(r==="pants"){const s=i_(e.pants,t);return s?{url:s}:null}if(r==="eyes"){const s=io("eyes",e,t).find(o=>o.id===e.eyes);return s?.texture?{url:s.texture,tint:e.eyesColor}:null}return io(r,e,t).find(s=>s.id===e[r])?.texture??null}function c_(r){return["race","sex","eyes","hair",...Lr(r)]}function gA(r,e=du,t){return c_(e).map(s=>u_(s,r,t))}function vA(r,e,t,s){const o=new Set(t),l=c=>c==="race"?o.has("race")||o.has("sex")||o.has("skinColor"):c==="sex"?!1:c==="eyes"?o.has("eyes")||o.has("eyesColor"):c==="hair"?o.has("hair")||o.has("hairColor"):o.has(c);return c_(e).filter(l).map(c=>u_(c,r,s))}const zf=r=>du.includes(r);function _A({appearance:r,textureLayerOrder:e,onAppearanceChange:t,onLayerOrderChange:s,t:o,assetBaseUrl:l}){const[c,f]=X.useState(null),{fixedCategories:d,layerCategories:p}=X.useMemo(()=>{const _=new Map(cs.map(b=>[b.id,b])),y=cs.filter(b=>!zf(b.id)),L=e.map(b=>_.get(b)).filter(b=>!!b);return{fixedCategories:y,layerCategories:L}},[e]),m=(_,y)=>{const L=e.indexOf(_),b=L+y;if(L<0||b<0||b>=e.length)return;const R=[...e];[R[L],R[b]]=[R[b],R[L]],s(R)},v=(_,y)=>{f(y),_.dataTransfer.effectAllowed="move",_.dataTransfer.setData("text/plain",y)},x=()=>{f(null)},S=(_,y)=>{!c||c===y||(_.preventDefault(),_.dataTransfer.dropEffect="move")},E=(_,y)=>{_.preventDefault();const L=c??_.dataTransfer.getData("text/plain");if(f(null),!zf(L))return;const b=L;if(b===y)return;const R=e.filter(I=>I!==b),H=R.indexOf(y);H<0||(R.splice(H,0,b),s(R))},M=_=>{const y=io(_.id,r,l),L=zf(_.id)?_.id:null,b=L?e.indexOf(L):-1;return $.jsxs(cA,{heading:o(_.labelKey),icon:_.icon,className:`wardrobe-option-card p-2.5 pt-6 ${L?"layer-order-card":""} ${L===c?"is-dragging":""}`,"data-layer-id":L??void 0,onDragOver:L?R=>S(R,L):void 0,onDrop:L?R=>E(R,L):void 0,children:[L&&$.jsxs("div",{className:"layer-order-controls",children:[$.jsx("button",{type:"button",className:"layer-order-handle","aria-label":`${o("action.dragLayer")} ${o(_.labelKey)}`,title:o("action.dragLayer"),draggable:!0,onDragStart:R=>v(R,L),onDragEnd:x,children:$.jsx(ss,{name:"fa-grip-vertical"})}),$.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${o("action.moveLayerUp")} ${o(_.labelKey)}`,title:o("action.moveLayerUp"),disabled:b<=0,onClick:()=>m(L,-1),children:$.jsx(ss,{name:"fa-chevron-up"})}),$.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${o("action.moveLayerDown")} ${o(_.labelKey)}`,title:o("action.moveLayerDown"),disabled:b>=e.length-1,onClick:()=>m(L,1),children:$.jsx(ss,{name:"fa-chevron-down"})})]}),$.jsx("div",{className:_.control==="color"?"mt-2 flex flex-wrap gap-1.5":"mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1.5",role:"group","aria-label":o(_.labelKey),children:y.map(R=>{const H=r[_.id]===R.id;return _.control==="color"?$.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border ${H?"is-selected":""}`,style:{backgroundColor:R.color??R.id},"aria-label":o(R.labelKey),"aria-pressed":H,onClick:()=>t(_.id,R.id),children:H&&$.jsx(ss,{name:"fa-check"})},R.id):$.jsx("button",{type:"button",className:`pixel-button min-h-8 px-2 py-1 border text-xs leading-tight transition-colors ${H?"skincrafter-option-selected":"skincrafter-secondary-action"}`,"aria-pressed":H,onClick:()=>t(_.id,R.id),children:o(R.labelKey)},R.id)})})]},_.id)};return $.jsx(Jv,{title:o("panel.customization"),icon:"fa-sliders",className:"overflow-visible md:overflow-hidden customization-panel p-3",children:$.jsxs("div",{className:"space-y-1.5 options-container md:flex-1 md:min-h-0",children:[d.map(M),$.jsx("div",{className:"layer-order-list space-y-1.5",children:p.map(M)})]})})}const $g=[137,80,78,71,13,10,26,10],hu=64;class di extends Error{cause;constructor(e,t){super(e),this.name="InvalidInitialSkinError",this.cause=t}}function xA(r){let e="";for(let t=0;t<r.length;t+=32768){const s=r.subarray(t,Math.min(t+32768,r.length));e+=String.fromCharCode(...s)}return`data:image/png;base64,${btoa(e)}`}function yA(r){let e=2166136261;for(const t of r)e^=t,e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}function SA(r){if(r.length<24)throw new di("Initial skin is not a valid PNG file.");for(let o=0;o<$g.length;o+=1)if(r[o]!==$g[o])throw new di("Initial skin is not a valid PNG file.");const e=new DataView(r.buffer,r.byteOffset,r.byteLength),t=e.getUint32(8),s=String.fromCharCode(r[12],r[13],r[14],r[15]);if(t!==13||s!=="IHDR")throw new di("Initial skin PNG is missing a valid IHDR header.");return{width:e.getUint32(16),height:e.getUint32(20)}}async function EA(r){return typeof r.arrayBuffer=="function"?new Uint8Array(await r.arrayBuffer()):new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{if(!(s.result instanceof ArrayBuffer)){t(new Error("Blob reader did not return an ArrayBuffer."));return}e(new Uint8Array(s.result))},s.onerror=()=>t(s.error??new Error("Blob reader failed.")),s.readAsArrayBuffer(r)})}async function MA(r){await new Promise((e,t)=>{const s=new Image;s.onload=()=>{const o=s.naturalWidth||s.width,l=s.naturalHeight||s.height;if(s.onload=null,s.onerror=null,o!==hu||l!==hu){t(new di("Initial skin must be a 64x64 Minecraft PNG."));return}e()},s.onerror=o=>{s.onload=null,s.onerror=null,t(new di("Initial skin PNG could not be decoded.",o))},s.src=r})}async function wA(r,e){if(r.type&&r.type.toLowerCase()!=="image/png")throw new di("Initial skin must use the image/png MIME type.");let t;try{t=await EA(r)}catch(l){throw new di("Initial skin data could not be read.",l)}const s=SA(t);if(s.width!==hu||s.height!==hu)throw new di("Initial skin must be a 64x64 Minecraft PNG.");const o=xA(t);return await MA(o),{dataUrl:o,fingerprint:yA(t),model:e}}function TA(r){const[e,t]=r.split(",",2),s=e.match(/^data:([^;]+);base64$/)?.[1]??"image/png",o=atob(t??""),l=new Uint8Array(o.length);for(let c=0;c<o.length;c+=1)l[c]=o.charCodeAt(c);return new Blob([l],{type:s})}function RA(r,e,t,s=e.sex==="Female"?"slim":"classic"){const o=TA(r),l=new File([o],"skincrafter-skin.png",{type:"image/png"});return{blob:o,file:l,dataUrl:r,metadata:{width:64,height:64,mimeType:"image/png",model:s,appearance:{...e},layerOrder:[...t]}}}const na=1,AA=new Map([[0,r=>({...r,schemaVersion:1})]]);function Yg(r){return typeof r=="object"&&r!==null&&!Array.isArray(r)}function Rr(r){return{success:!1,error:{code:"invalid_state",message:r}}}function qg(r){return{success:!1,error:{code:"unsupported_schema_version",message:`Unsupported SkinCrafter state schema version: ${r}.`,schemaVersion:r}}}function CA(r){return{schemaVersion:na,appearance:Su(r.appearance),layerOrder:Lr(r.layerOrder)}}function f_(r){const e=CA(r);return{...e,appearance:{...e.appearance},layerOrder:[...e.layerOrder]}}function d_(r){if(!Yg(r))return Rr("SkinCrafter persisted state must be an object.");const e=[],t=r.schemaVersion;let s,o;if(t===void 0)s=null,e.push({code:"legacy_unversioned",message:"Migrated legacy unversioned SkinCrafter state."}),o={...r,schemaVersion:0};else{if(typeof t!="number"||!Number.isInteger(t)||t<0)return Rr("SkinCrafter schemaVersion must be a non-negative integer.");if(s=t,s>na)return qg(s);o={...r}}let l=s??0;for(;l<na;){const E=AA.get(l);if(!E)return qg(l);const M=l+1;o=E(o),e.push({code:"schema_version_migrated",message:`Migrated SkinCrafter state schema from version ${l} to ${M}.`,from:l,to:M}),l=M}if(o.schemaVersion!==na)return Rr("SkinCrafter state migration did not produce the current schema version.");const c=s===null||s===0;if(!Yg(o.appearance))return Rr("SkinCrafter persisted appearance must be an object.");const f={};for(const E of cs){const M=o.appearance[E.id];if(M===void 0){if(!c)return Rr(`SkinCrafter persisted appearance is missing ${E.id}.`);continue}if(typeof M!="string")return Rr(`SkinCrafter persisted appearance.${E.id} must be a string.`);f[E.id]=M}const d=o.layerOrder;if(d===void 0&&!c)return Rr("SkinCrafter persisted state is missing layerOrder.");if(d!==void 0&&(!Array.isArray(d)||d.some(E=>typeof E!="string")))return Rr("SkinCrafter persisted layerOrder must be an array of strings.");const p=Su(f);for(const E of cs){const M=o.appearance[E.id],_=p[E.id];M!==_&&e.push({code:"appearance_value_defaulted",message:`Normalized persisted appearance.${E.id} to a supported value.`,path:E.id,from:M,to:_})}const m=d??[],v=Lr(m);(m.length!==v.length||m.some((E,M)=>E!==v[M]))&&e.push({code:"layer_order_normalized",message:"Normalized persisted layer order by removing invalid/duplicate layers and appending missing layers.",path:"layerOrder",from:[...m],to:[...v]});const x={appearance:p,layerOrder:v},S=f_(x);return{success:!0,state:x,serializedState:S,sourceSchemaVersion:s,migrated:s!==na||e.length>0,notices:e}}class h_ extends Error{assetUrl;cause;constructor(e,t){super(`Failed to load texture asset: ${e}`),this.name="TextureLoadError",this.assetUrl=e,this.cause=t}}const Kg=64,bA=4,PA=r=>r?typeof r=="string"?{url:r}:r.url?{url:r.url,tint:r.tint}:null:null;function LA(r){const e=r.replace("#",""),t=e.length===3?e.split("").map(s=>`${s}${s}`).join(""):e;return{r:Number.parseInt(t.slice(0,2),16),g:Number.parseInt(t.slice(2,4),16),b:Number.parseInt(t.slice(4,6),16),a:255}}function DA(r){const e=r.r===0&&r.g===0&&r.b===0,t=r.r===255&&r.g===255&&r.b===255;return e||t}function UA(r){if(r.a===0||DA(r))return!1;const e=Math.min(r.r,r.g,r.b);return Math.max(r.r,r.g,r.b)-e<=bA}function NA(r,e){if(!UA(r))return r;const t=(r.r+r.g+r.b)/765;return{r:Math.round(e.r*t),g:Math.round(e.g*t),b:Math.round(e.b*t),a:r.a}}function IA(r,e){const t=new Uint8ClampedArray(r);for(let s=0;s<t.length;s+=4){const o=NA({r:r[s],g:r[s+1],b:r[s+2],a:r[s+3]},e);t[s]=o.r,t[s+1]=o.g,t[s+2]=o.b,t[s+3]=o.a}return t}const FA=(r,e,t,s,o)=>{const l=document.createElement("canvas");l.width=s,l.height=o;const c=l.getContext("2d",{willReadFrequently:!0});if(!c){r.drawImage(e,0,0,s,o);return}c.imageSmoothingEnabled=!1,c.drawImage(e,0,0,s,o);const f=c.getImageData(0,0,s,o);f.data.set(IA(f.data,LA(t))),c.putImageData(f,0,0),r.drawImage(l,0,0)},OA=(r,e,t,s,o)=>{if(!t){r.drawImage(e,0,0,s,o);return}FA(r,e,t,s,o)};async function Zg(r){const e=r.map(PA).filter(c=>!!c),t=e.map(c=>c.url);if(t.length===0)throw new Error("No texture assets were available for skin composition.");const s=await Promise.all(t.map(c=>new Promise((f,d)=>{const p=new Image;p.crossOrigin="anonymous",p.onload=()=>f(p),p.onerror=m=>d(new h_(c,m)),p.src=c}))),o=document.createElement("canvas");o.width=Kg,o.height=Kg;const l=o.getContext("2d",{willReadFrequently:!0});if(!l)throw new Error("Could not create a 2D canvas context for skin composition.");return l.imageSmoothingEnabled=!1,s.forEach((c,f)=>{const d=e[f];OA(l,c,d.tint,o.width,o.height)}),o.toDataURL("image/png")}function Jg(r){return{appearance:Su(r?.appearance??null),layerOrder:Lr(r?.layerOrder)}}function kA(r){return{appearance:{...r.appearance},layerOrder:[...r.layerOrder]}}function BA(r){return r?{"--skincrafter-accent":r.accent,"--skincrafter-accent-strong":r.accentStrong,"--skincrafter-surface":r.surface,"--skincrafter-text":r.text,"--skincrafter-muted":r.muted,"--skincrafter-border":r.border}:{}}function zA(r){return r instanceof h_?{code:"asset_load_failed",category:"asset",message:`Failed to load skin texture asset: ${r.assetUrl}`,assetUrl:r.assetUrl,cause:r.cause}:{code:"generation_failed",category:"generation",message:"Failed to generate the current skin.",cause:r}}function Qg(r){return{code:"invalid_initial_skin",category:"input",message:r instanceof di?r.message:"Initial skin must be a decodable 64x64 Minecraft PNG.",cause:r instanceof di?r.cause??r:r}}function Zn(r,...e){if(r)try{r(...e)}catch(t){console.error("SkinCrafter host callback failed",t)}}function HA({locale:r=go,value:e,initialSkin:t,persistence:s,assetBaseUrl:o,onStateChange:l,onSkinChange:c,onSave:f,onStatusChange:d,onError:p,className:m="",style:v,theme:x,previewBottomOffset:S=0}){const[E,M]=X.useState(()=>Jg(e||t||(s?.load()??null))),[_,y]=X.useState(null),[L,b]=X.useState({key:null,status:"idle",error:null}),[R,H]=X.useState(null),[I,F]=X.useState({source:null,model:null,status:"idle",error:null}),[W,P]=X.useState([]),A=X.useRef(c),B=X.useRef(d),ue=X.useRef(p),Q=X.useRef(null),ae=X.useRef(!1),me=X.useRef(null),te=X.useMemo(()=>e?Jg(e):null,[e])??E,ve=X.useRef(te);ve.current=te;const V=X.useCallback(O=>Sa(r,O),[r]),le=t?.image??null,oe=t?.model??null,N=le!==null,ie=X.useCallback(O=>{e||M(O),l?.(O)},[l,e]),Oe=X.useCallback((O,Te)=>{N&&P(pe=>pe.includes(O)?pe:[...pe,O]),ie({...te,appearance:Su({...te.appearance,[O]:Te})})},[N,ie,te]),ee=X.useCallback(O=>{ie({...te,layerOrder:Lr(O)})},[ie,te]);X.useEffect(()=>{A.current=c},[c]),X.useEffect(()=>{B.current=d},[d]),X.useEffect(()=>{ue.current=p},[p]),X.useEffect(()=>{if(!le){Q.current=null,ae.current=!1,H(null),P([]),F({source:null,model:null,status:"idle",error:null});return}if(!oe){ae.current=!1;const pe=Qg(new di("Initial skin model must be either classic or slim."));F({source:le,model:null,status:"error",error:pe}),Zn(B.current,"error"),Zn(ue.current,pe);return}let O=!0;const Te=kA(ve.current);return F({source:le,model:oe,status:"loading",error:null}),Zn(B.current,"generating"),wA(le,oe).then(pe=>{if(!O)return;const Pe=Q.current,ye=Pe!==null&&Pe.fingerprint===pe.fingerprint&&Pe.model===pe.model,he=ye?{...Pe,source:le}:{source:le,dataUrl:pe.dataUrl,fingerprint:pe.fingerprint,model:pe.model,baselineState:Te};ae.current=ye,Q.current=he,H(he),ye||P([]),F({source:le,model:oe,status:"ready",error:null}),ye&&Zn(B.current,"ready")}).catch(pe=>{if(!O)return;ae.current=!1;const Pe=Qg(pe);F({source:le,model:oe,status:"error",error:Pe}),Zn(B.current,"error"),Zn(ue.current,Pe)}),()=>{O=!1}},[le,oe]),X.useEffect(()=>{e||s?.save(f_(te))},[s,te,e]);const fe=N&&oe!==null&&R?.source===le&&R.model===oe,Re=X.useMemo(()=>{if(!fe||!R)return[];const O=new Set(W);for(const Te of cs)te.appearance[Te.id]!==R.baselineState.appearance[Te.id]&&O.add(Te.id);return cs.map(Te=>Te.id).filter(Te=>O.has(Te))},[W,fe,R,te.appearance]),{race:Ee,sex:Ae,skinColor:Ke,eyes:Ve,eyesColor:Mt,hair:Rt,hairColor:ct,hat:k,shirt:Wt,pants:pt,shoes:xt,accessory:Ge}=te.appearance,ft=JSON.stringify(te.layerOrder),qe=JSON.stringify(Re),tt=o?.replace(/\/+$/,"")||void 0,It=Re.includes("sex"),D=fe&&R&&!It?R.model==="slim"?"Female":"Male":Ae,T=fe&&R&&!It?R.model:Ae==="Female"?"slim":"classic",J=fe?R?.fingerprint??null:null,de=fe?R?.dataUrl??null:null,ge=JSON.stringify([Ee,Ae,Ke,Ve,Mt,Rt,ct,k,Wt,pt,xt,Ge,ft,tt??null,J,T,qe]),ce=_?.key===ge?_:null,je=N&&I.source===le&&I.model===oe,be=N&&(!je||I.status==="loading"),ke=je&&I.status==="error",$e=be?"generating":ke?"error":L.key===ge?L.status:"idle",_e=ke?I.error:L.key===ge?L.error:null;X.useEffect(()=>{if(N&&!fe)return;if(ae.current){const he=me.current===ge;if(ae.current=!1,he)return}let O=!0;const Te={race:Ee,sex:Ae,skinColor:Ke,eyes:Ve,eyesColor:Mt,hair:Rt,hairColor:ct,hat:k,shirt:Wt,pants:pt,shoes:xt,accessory:Ge},pe={...Te,sex:D},Pe=JSON.parse(ft),ye=JSON.parse(qe);return b({key:ge,status:"generating",error:null}),Zn(B.current,"generating"),(async()=>{let he;try{let Ie;if(de){const et=vA(pe,Pe,ye,tt);Ie=et.filter(Boolean).length===0?de:await Zg([de,...et])}else{const et=gA(Te,Pe,tt);Ie=await Zg(et)}he={dataUrl:Ie,output:RA(Ie,Te,Pe,T)}}catch(Ie){if(!O)return;const et=zA(Ie);b({key:ge,status:"error",error:et}),Zn(B.current,"error"),Zn(ue.current,et);return}O&&(me.current=ge,y({key:ge,texture:he.dataUrl,output:he.output}),b({key:ge,status:"ready",error:null}),Zn(A.current,he.output),Zn(B.current,"ready"))})(),()=>{O=!1}},[Ge,qe,tt,D,T,Ve,Mt,ge,Rt,ct,N,k,de,fe,ft,pt,Ee,Ae,Wt,xt,Ke]);const Ne=ce?.output??null,nt=ce?.texture??null,Je=$e==="ready"&&Ne!==null,Le=f&&Je&&Ne?()=>f(Ne):void 0,st=X.useCallback(O=>{Zn(ue.current,O)},[]);return $.jsx("div",{className:`skincrafter-editor h-full min-h-0 w-full ${m}`.trim(),style:{...BA(x),...v},"data-testid":"skincrafter-editor","data-skincrafter-locale":r,"data-skincrafter-generation-status":$e,children:$.jsx(uA,{left:$.jsx(t_,{texture:nt,model:T,footerHeight:S,t:V,onSave:Le,canSave:Je,generationStatus:$e,generationError:_e,onError:st}),right:$.jsx(_A,{appearance:te.appearance,textureLayerOrder:te.layerOrder,onAppearanceChange:Oe,onLayerOrderChange:ee,t:V,assetBaseUrl:o})})})}function VA({texture:r,model:e="classic",locale:t=go,bottomOffset:s=0,className:o="",style:l,theme:c,onError:f}){const d=m=>Sa(t,m),p={"--skincrafter-accent":c?.accent,"--skincrafter-accent-strong":c?.accentStrong,"--skincrafter-surface":c?.surface,"--skincrafter-text":c?.text,"--skincrafter-muted":c?.muted,"--skincrafter-border":c?.border};return $.jsx("div",{className:`skincrafter-editor h-full min-h-0 ${o}`.trim(),style:{...p,...l},children:$.jsx(t_,{texture:r,model:e,footerHeight:s,t:d,onError:f})})}const GA=tv.forwardRef((r,e)=>$.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:$.jsx("div",{className:"container mx-auto text-center text-sm",children:$.jsx("p",{children:"(c) 2026 SkinCrafter. All rights reserved."})})})),WA=r=>Sa(go,r),XA=({logoSrc:r="/logo.png",logoAlt:e="SkinCrafter logo",language:t="en",onLanguageChange:s,t:o=WA})=>$.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:$.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[$.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[$.jsx("div",{className:"h-8 w-36 flex items-center",children:$.jsx("img",{src:r,alt:e,className:"h-auto max-h-8 w-full object-contain",style:{imageRendering:"pixelated"}})}),$.jsx("span",{className:"pixel-border bg-amber-500 px-2 py-0.5 text-xs font-bold uppercase tracking-normal text-green-950 shadow-sm",title:o("nav.workInProgress"),"aria-label":o("nav.workInProgress"),children:"WIP"})]}),$.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[$.jsx(Wf,{to:"/",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:o("nav.wardrobe")}),$.jsx(Wf,{to:"/mcskinview",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:o("nav.skinView")}),s&&$.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[$.jsx("span",{children:o("nav.language")}),$.jsx("select",{className:"bg-green-700 text-white pixel-border px-2 py-1",value:t,onChange:l=>s(l.target.value),"aria-label":o("nav.language"),children:e_.map(l=>$.jsx("option",{value:l,children:l.toUpperCase()},l))})]})]})]})}),p_="skincrafterLanguage",jA=()=>{const r=localStorage.getItem(p_);return oA(r)?r:go};function m_({children:r}){const[e,t]=X.useState(()=>jA()),s=X.useRef(null),[o,l]=X.useState(0),c=X.useCallback(d=>Sa(e,d),[e]),f=X.useCallback(d=>{t(d)},[]);return X.useEffect(()=>{localStorage.setItem(p_,e)},[e]),X.useEffect(()=>{const d=()=>{l(s.current?.offsetHeight??0)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),$.jsxs("div",{className:"max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col",children:[$.jsx("div",{className:"shrink-0",children:$.jsx(XA,{language:e,onLanguageChange:f,t:c})}),r({footerHeight:o,language:e,t:c}),$.jsx("div",{className:"shrink-0",children:$.jsx(GA,{ref:s})})]})}const sa="skincrafterState",Qd="wardrobeAppearance",eh="wardrobeLayerOrder";function pa(r){return JSON.parse(r)}function g_(r){const e=d_(r);return e.success?{state:e.state,serializedState:e.serializedState}:null}function v_(r){let e;try{e=pa(r)}catch{return{kind:"invalid"}}const t=d_(e);return t.success?{kind:"loaded",value:{state:t.state,serializedState:t.serializedState}}:t.error.code==="unsupported_schema_version"?{kind:"unsupported"}:{kind:"invalid"}}function $A(){const r=localStorage.getItem(Qd),e=localStorage.getItem(eh);if(r===null||e===null)return null;try{return g_({appearance:pa(r),layerOrder:pa(e)})}catch{return null}}function YA(){let r;const e=localStorage.getItem(Qd);if(e)try{r=pa(e)}catch{r={...br}}else r={race:localStorage.getItem("wardrobeRace")??br.race,skinColor:localStorage.getItem("wardrobeSkinColor")??br.skinColor,hat:localStorage.getItem("wardrobeHat")??br.hat};let t=Lr(null);const s=localStorage.getItem(eh);if(s)try{t=pa(s)}catch{t=Lr(null)}const o=g_({appearance:r,layerOrder:t});return o?(localStorage.setItem(sa,JSON.stringify(o.serializedState)),o.state):{appearance:{...br},layerOrder:Lr(null)}}function qA(r,e){return JSON.stringify(r)===JSON.stringify(e)}function KA(){const r=localStorage.getItem(sa);return r===null?!1:v_(r).kind==="unsupported"}const ZA={load:()=>{const r=localStorage.getItem(sa);if(r===null)return YA();const e=v_(r);if(e.kind==="unsupported"||e.kind==="invalid")return null;const t=$A();return t&&!qA(t.serializedState,e.value.serializedState)?(localStorage.setItem(sa,JSON.stringify(t.serializedState)),t.state):e.value.state},save:r=>{KA()||(localStorage.setItem(sa,JSON.stringify(r)),localStorage.setItem(Qd,JSON.stringify(r.appearance)),localStorage.setItem(eh,JSON.stringify(r.layerOrder)))}},JA=r=>r.replace(/^http:\/\//,"https://"),QA=r=>{if(!r)return null;try{return JSON.parse(atob(r.value))}catch{return null}};async function eC(r){const e=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(r)}`);if(!e.ok)throw new Error("User not found");const t=await e.json(),s=t.data?.player;if(!t.success||!s)throw new Error("User not found");const o=s.properties?.find(f=>f.name==="textures"),l=QA(o)?.textures?.SKIN,c=l?.url??s.skin_texture;if(!c)throw new Error("Skin texture not found");return{texture:JA(c),model:l?.metadata?.model==="slim"?"slim":"classic"}}const tC=()=>{const[r,e]=X.useState(""),[t,s]=X.useState(null),[o,l]=X.useState(null),[c,f]=X.useState(!1),d=X.useCallback(m=>{e(m.target.value)},[]),p=X.useCallback(async m=>{if(m.preventDefault(),!r.trim()){l("Please enter a username.");return}l(null),s(null),f(!0);try{s(await eC(r.trim()))}catch(v){l(v instanceof Error?v.message:"An unexpected error occurred."),s(null)}finally{f(!1)}},[r]);return $.jsx(m_,{children:({footerHeight:m,language:v,t:x})=>$.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:$.jsx(VA,{texture:t?.texture??null,model:t?.model??"classic",locale:v,bottomOffset:m})}),$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:$.jsxs("section",{className:"mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4",children:[$.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[$.jsx("i",{className:"fas fa-user mr-2 text-green-700"})," ",x("panel.loadSkin")]}),$.jsxs("div",{className:"space-y-4 md:flex-1 md:min-h-0 overflow-y-auto pr-2",children:[$.jsxs("div",{className:"option-card bg-white shadow p-4 pixel-border relative pt-5",children:[$.jsxs("h3",{className:"font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10",children:[$.jsx("i",{className:"fas fa-id-card mr-2 text-amber-600"})," ",x("skinView.player")]}),$.jsxs("form",{onSubmit:p,className:"mt-4 flex flex-col gap-3",children:[$.jsx("input",{type:"text",value:r,onChange:d,placeholder:x("skinView.username"),"aria-label":x("skinView.username"),className:"w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"}),$.jsxs("button",{type:"submit",disabled:c,className:"pixel-button p-2 pixel-border bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white",children:[$.jsx("i",{className:"fas fa-cloud-arrow-down mr-2"}),x(c?"action.loading":"action.loadSkin")]})]})]}),o&&$.jsx("div",{className:"option-card bg-red-50 text-red-700 shadow p-4 pixel-border",children:o})]})]})})]})})},nC=()=>$.jsx(m_,{children:({footerHeight:r,language:e})=>$.jsx(HA,{locale:e,persistence:ZA,previewBottomOffset:r})}),iC=()=>$.jsxs(sy,{children:[$.jsx(Vf,{path:"/",element:$.jsx(nC,{})}),$.jsx(Vf,{path:"/mcskinview",element:$.jsx(tC,{})})]});sx.createRoot(document.getElementById("root")).render($.jsx(tv.StrictMode,{children:$.jsx(by,{children:$.jsx(iC,{})})}));
