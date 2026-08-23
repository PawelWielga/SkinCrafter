(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();function Av(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var gf={exports:{}},ca={},vf={exports:{}},St={};var Ym;function xx(){if(Ym)return St;Ym=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(F,ie,Be){this.props=F,this.context=ie,this.refs=M,this.updater=Be||S}x.prototype.isReactComponent={},x.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=x.prototype;function L(F,ie,Be){this.props=F,this.context=ie,this.refs=M,this.updater=Be||S}var P=L.prototype=new _;P.constructor=L,E(P,x.prototype),P.isPureReactComponent=!0;var A=Array.isArray,H=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function W(F,ie,Be){var te,me={},Re=null,Se=null;if(ie!=null)for(te in ie.ref!==void 0&&(Se=ie.ref),ie.key!==void 0&&(Re=""+ie.key),ie)H.call(ie,te)&&!O.hasOwnProperty(te)&&(me[te]=ie[te]);var Ae=arguments.length-2;if(Ae===1)me.children=Be;else if(1<Ae){for(var Z=Array(Ae),Ee=0;Ee<Ae;Ee++)Z[Ee]=arguments[Ee+2];me.children=Z}if(F&&F.defaultProps)for(te in Ae=F.defaultProps,Ae)me[te]===void 0&&(me[te]=Ae[te]);return{$$typeof:r,type:F,key:Re,ref:Se,props:me,_owner:I.current}}function b(F,ie){return{$$typeof:r,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function V(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Be){return ie[Be]})}var se=/\/+/g;function Q(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):ie.toString(36)}function le(F,ie,Be,te,me){var Re=typeof F;(Re==="undefined"||Re==="boolean")&&(F=null);var Se=!1;if(F===null)Se=!0;else switch(Re){case"string":case"number":Se=!0;break;case"object":switch(F.$$typeof){case r:case e:Se=!0}}if(Se)return Se=F,me=me(Se),F=te===""?"."+Q(Se,0):te,A(me)?(Be="",F!=null&&(Be=F.replace(se,"$&/")+"/"),le(me,ie,Be,"",function(Ee){return Ee})):me!=null&&(R(me)&&(me=b(me,Be+(!me.key||Se&&Se.key===me.key?"":(""+me.key).replace(se,"$&/")+"/")+F)),ie.push(me)),1;if(Se=0,te=te===""?".":te+":",A(F))for(var Ae=0;Ae<F.length;Ae++){Re=F[Ae];var Z=te+Q(Re,Ae);Se+=le(Re,ie,Be,Z,me)}else if(Z=y(F),typeof Z=="function")for(F=Z.call(F),Ae=0;!(Re=F.next()).done;)Re=Re.value,Z=te+Q(Re,Ae++),Se+=le(Re,ie,Be,Z,me);else if(Re==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return Se}function de(F,ie,Be){if(F==null)return F;var te=[],me=0;return le(F,te,"","",function(Re){return ie.call(Be,Re,me++)}),te}function ue(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(Be){(F._status===0||F._status===-1)&&(F._status=1,F._result=Be)},function(Be){(F._status===0||F._status===-1)&&(F._status=2,F._result=Be)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var he={current:null},B={transition:null},fe={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:B,ReactCurrentOwner:I};function ae(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:de,forEach:function(F,ie,Be){de(F,function(){ie.apply(this,arguments)},Be)},count:function(F){var ie=0;return de(F,function(){ie++}),ie},toArray:function(F){return de(F,function(ie){return ie})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},St.Component=x,St.Fragment=t,St.Profiler=s,St.PureComponent=L,St.StrictMode=o,St.Suspense=d,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,St.act=ae,St.cloneElement=function(F,ie,Be){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var te=E({},F.props),me=F.key,Re=F.ref,Se=F._owner;if(ie!=null){if(ie.ref!==void 0&&(Re=ie.ref,Se=I.current),ie.key!==void 0&&(me=""+ie.key),F.type&&F.type.defaultProps)var Ae=F.type.defaultProps;for(Z in ie)H.call(ie,Z)&&!O.hasOwnProperty(Z)&&(te[Z]=ie[Z]===void 0&&Ae!==void 0?Ae[Z]:ie[Z])}var Z=arguments.length-2;if(Z===1)te.children=Be;else if(1<Z){Ae=Array(Z);for(var Ee=0;Ee<Z;Ee++)Ae[Ee]=arguments[Ee+2];te.children=Ae}return{$$typeof:r,type:F.type,key:me,ref:Re,props:te,_owner:Se}},St.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},St.createElement=W,St.createFactory=function(F){var ie=W.bind(null,F);return ie.type=F,ie},St.createRef=function(){return{current:null}},St.forwardRef=function(F){return{$$typeof:f,render:F}},St.isValidElement=R,St.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:ue}},St.memo=function(F,ie){return{$$typeof:p,type:F,compare:ie===void 0?null:ie}},St.startTransition=function(F){var ie=B.transition;B.transition={};try{F()}finally{B.transition=ie}},St.unstable_act=ae,St.useCallback=function(F,ie){return he.current.useCallback(F,ie)},St.useContext=function(F){return he.current.useContext(F)},St.useDebugValue=function(){},St.useDeferredValue=function(F){return he.current.useDeferredValue(F)},St.useEffect=function(F,ie){return he.current.useEffect(F,ie)},St.useId=function(){return he.current.useId()},St.useImperativeHandle=function(F,ie,Be){return he.current.useImperativeHandle(F,ie,Be)},St.useInsertionEffect=function(F,ie){return he.current.useInsertionEffect(F,ie)},St.useLayoutEffect=function(F,ie){return he.current.useLayoutEffect(F,ie)},St.useMemo=function(F,ie){return he.current.useMemo(F,ie)},St.useReducer=function(F,ie,Be){return he.current.useReducer(F,ie,Be)},St.useRef=function(F){return he.current.useRef(F)},St.useState=function(F){return he.current.useState(F)},St.useSyncExternalStore=function(F,ie,Be){return he.current.useSyncExternalStore(F,ie,Be)},St.useTransition=function(){return he.current.useTransition()},St.version="18.3.1",St}var qm;function qd(){return qm||(qm=1,vf.exports=xx()),vf.exports}var Km;function yx(){if(Km)return ca;Km=1;var r=qd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,p){var m,v={},y=null,S=null;p!==void 0&&(y=""+p),d.key!==void 0&&(y=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)o.call(d,m)&&!l.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:y,ref:S,props:v,_owner:s.current}}return ca.Fragment=t,ca.jsx=c,ca.jsxs=c,ca}var Zm;function Sx(){return Zm||(Zm=1,gf.exports=yx()),gf.exports}var X=Sx(),k=qd();const bv=Av(k);var Bl={},_f={exports:{}},jn={},xf={exports:{}},yf={};var Jm;function Ex(){return Jm||(Jm=1,(function(r){function e(B,fe){var ae=B.length;B.push(fe);e:for(;0<ae;){var F=ae-1>>>1,ie=B[F];if(0<s(ie,fe))B[F]=fe,B[ae]=ie,ae=F;else break e}}function t(B){return B.length===0?null:B[0]}function o(B){if(B.length===0)return null;var fe=B[0],ae=B.pop();if(ae!==fe){B[0]=ae;e:for(var F=0,ie=B.length,Be=ie>>>1;F<Be;){var te=2*(F+1)-1,me=B[te],Re=te+1,Se=B[Re];if(0>s(me,ae))Re<ie&&0>s(Se,me)?(B[F]=Se,B[Re]=ae,F=Re):(B[F]=me,B[te]=ae,F=te);else if(Re<ie&&0>s(Se,ae))B[F]=Se,B[Re]=ae,F=Re;else break e}}return fe}function s(B,fe){var ae=B.sortIndex-fe.sortIndex;return ae!==0?ae:B.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var d=[],p=[],m=1,v=null,y=3,S=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(B){for(var fe=t(p);fe!==null;){if(fe.callback===null)o(p);else if(fe.startTime<=B)o(p),fe.sortIndex=fe.expirationTime,e(d,fe);else break;fe=t(p)}}function A(B){if(M=!1,P(B),!E)if(t(d)!==null)E=!0,ue(H);else{var fe=t(p);fe!==null&&he(A,fe.startTime-B)}}function H(B,fe){E=!1,M&&(M=!1,_(W),W=-1),S=!0;var ae=y;try{for(P(fe),v=t(d);v!==null&&(!(v.expirationTime>fe)||B&&!V());){var F=v.callback;if(typeof F=="function"){v.callback=null,y=v.priorityLevel;var ie=F(v.expirationTime<=fe);fe=r.unstable_now(),typeof ie=="function"?v.callback=ie:v===t(d)&&o(d),P(fe)}else o(d);v=t(d)}if(v!==null)var Be=!0;else{var te=t(p);te!==null&&he(A,te.startTime-fe),Be=!1}return Be}finally{v=null,y=ae,S=!1}}var I=!1,O=null,W=-1,b=5,R=-1;function V(){return!(r.unstable_now()-R<b)}function se(){if(O!==null){var B=r.unstable_now();R=B;var fe=!0;try{fe=O(!0,B)}finally{fe?Q():(I=!1,O=null)}}else I=!1}var Q;if(typeof L=="function")Q=function(){L(se)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,de=le.port2;le.port1.onmessage=se,Q=function(){de.postMessage(null)}}else Q=function(){x(se,0)};function ue(B){O=B,I||(I=!0,Q())}function he(B,fe){W=x(function(){B(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,ue(H))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return t(d)},r.unstable_next=function(B){switch(y){case 1:case 2:case 3:var fe=3;break;default:fe=y}var ae=y;y=fe;try{return B()}finally{y=ae}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,fe){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ae=y;y=B;try{return fe()}finally{y=ae}},r.unstable_scheduleCallback=function(B,fe,ae){var F=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?F+ae:F):ae=F,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=ae+ie,B={id:m++,callback:fe,priorityLevel:B,startTime:ae,expirationTime:ie,sortIndex:-1},ae>F?(B.sortIndex=ae,e(p,B),t(d)===null&&B===t(p)&&(M?(_(W),W=-1):M=!0,he(A,ae-F))):(B.sortIndex=ie,e(d,B),E||S||(E=!0,ue(H))),B},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(B){var fe=y;return function(){var ae=y;y=fe;try{return B.apply(this,arguments)}finally{y=ae}}}})(yf)),yf}var Qm;function Mx(){return Qm||(Qm=1,xf.exports=Ex()),xf.exports}var eg;function wx(){if(eg)return jn;eg=1;var r=qd(),e=Mx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(s[n]=i,n=0;n<i.length;n++)o.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function y(n){return d.call(v,n)?!0:d.call(m,n)?!1:p.test(n)?v[n]=!0:(m[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(n,i,a,u,h,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new M(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,L);x[i]=new M(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,L);x[i]=new M(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,L);x[i]=new M(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,u){var h=x.hasOwnProperty(i)?x[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,u)&&(a=null),u||h===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,u=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var A=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),V=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),B=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,F;function ie(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Be=!1;function te(n,i){if(!n||Be)return"";Be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var u=re}Reflect.construct(n,[],i)}else{try{i.call()}catch(re){u=re}n.call(i.prototype)}else{try{throw Error()}catch(re){u=re}n()}}catch(re){if(re&&u&&typeof re.stack=="string"){for(var h=re.stack.split(`
`),g=u.stack.split(`
`),w=h.length-1,N=g.length-1;1<=w&&0<=N&&h[w]!==g[N];)N--;for(;1<=w&&0<=N;w--,N--)if(h[w]!==g[N]){if(w!==1||N!==1)do if(w--,N--,0>N||h[w]!==g[N]){var z=`
`+h[w].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=w&&0<=N);break}}}finally{Be=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ie(n):""}function me(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=te(n.type,!1),n;case 11:return n=te(n.type.render,!1),n;case 1:return n=te(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case b:return"Profiler";case W:return"StrictMode";case Q:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case se:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return i=n.displayName||null,i!==null?i:Re(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return Re(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Z(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ee(n){var i=Z(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(w){u=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function be(n){n._valueTracker||(n._valueTracker=Ee(n))}function it(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Z(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Ke(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function U(n,i){var a=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Tt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function lt(n,i){pt(n,i);var a=Ae(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?mt(n,i.type,a):i.hasOwnProperty("defaultValue")&&mt(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ie(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function mt(n,i,a){(i!=="number"||Ke(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var et=Array.isArray;function ct(n,i,a,u){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function zt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(et(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ae(a)}}function T(n,i){var a=Ae(i.value),u=Ae(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function J(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ce,qe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Le(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(n){Ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ve[i]=Ve[n]})});function _e(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ve.hasOwnProperty(n)&&Ve[n]?(""+i).trim():i+"px"}function ze(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=_e(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,h):n[a]=h}}var rt=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tt(n,i){if(i){if(rt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function De(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ot=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ne=null,xe=null,Ue=null;function we(n){if(n=qs(n)){if(typeof Ne!="function")throw Error(t(280));var i=n.stateNode;i&&(i=el(i),Ne(n.stateNode,n.type,i))}}function ge(n){xe?Ue?Ue.push(n):Ue=[n]:xe=n}function Fe(){if(xe){var n=xe,i=Ue;if(Ue=xe=null,we(n),i)for(n=0;n<i.length;n++)we(i[n])}}function ft(n,i){return n(i)}function Pt(){}var wt=!1;function gn(n,i,a){if(wt)return n(i,a);wt=!0;try{return ft(n,i,a)}finally{wt=!1,(xe!==null||Ue!==null)&&(Pt(),Fe())}}function rn(n,i){var a=n.stateNode;if(a===null)return null;var u=el(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ei=!1;if(f)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){Ei=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{Ei=!1}function qn(n,i,a,u,h,g,w,N,z){var re=Array.prototype.slice.call(arguments,3);try{i.apply(a,re)}catch(Me){this.onError(Me)}}var gr=!1,Kr=null,Lr=!1,Dr=null,bo={onError:function(n){gr=!0,Kr=n}};function Ge(n,i,a,u,h,g,w,N,z){gr=!1,Kr=null,qn.apply(bo,arguments)}function Yt(n,i,a,u,h,g,w,N,z){if(Ge.apply(this,arguments),gr){if(gr){var re=Kr;gr=!1,Kr=null}else throw Error(t(198));Lr||(Lr=!0,Dr=re)}}function Et(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ft(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function qt(n){if(Et(n)!==n)throw Error(t(188))}function Ln(n){var i=n.alternate;if(!i){if(i=Et(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return qt(h),n;if(g===u)return qt(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=h,u=g;else{for(var w=!1,N=h.child;N;){if(N===a){w=!0,a=h,u=g;break}if(N===u){w=!0,u=h,a=g;break}N=N.sibling}if(!w){for(N=g.child;N;){if(N===a){w=!0,a=g,u=h;break}if(N===u){w=!0,u=g,a=h;break}N=N.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Sn(n){return n=Ln(n),n!==null?Kn(n):null}function Kn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Kn(n);if(i!==null)return i;n=n.sibling}return null}var En=e.unstable_scheduleCallback,C=e.unstable_cancelCallback,$=e.unstable_shouldYield,oe=e.unstable_requestPaint,K=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,Oe=e.unstable_UserBlockingPriority,Xe=e.unstable_NormalPriority,We=e.unstable_LowPriority,dt=e.unstable_IdlePriority,ut=null,$e=null;function xt(n){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Dt,Gt=Math.log,Ot=Math.LN2;function Dt(n){return n>>>=0,n===0?32:31-(Gt(n)/Ot|0)|0}var nt=64,Ut=4194304;function yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function un(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var N=w&~h;N!==0?u=yt(N):(g&=w,g!==0&&(u=yt(g)))}else w=a&~h,w!==0?u=yt(w):g!==0&&(u=yt(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-vt(i),h=1<<a,u|=n[a],i&=~h;return u}function Mi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dn(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-vt(g),N=1<<w,z=h[w];z===-1?((N&a)===0||(N&u)!==0)&&(h[w]=Mi(N,i)):z<=i&&(n.expiredLanes|=N),g&=~N}}function Zr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function kt(){var n=nt;return nt<<=1,(nt&4194240)===0&&(nt=64),n}function Mn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function cn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-vt(i),n[i]=a}function vn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-vt(a),g=1<<h;i[h]=0,u[h]=-1,n[h]=-1,a&=~g}}function fn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-vt(a),h=1<<u;h&i|n[u]&i&&(n[u]|=i),a&=~h}}var Rt=0;function Nr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ch,Bu,Ah,bh,Ph,zu=!1,Ba=[],wi=null,Ti=null,Ri=null,Ns=new Map,Us=new Map,Ci=[],H_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lh(n,i){switch(n){case"focusin":case"focusout":wi=null;break;case"dragenter":case"dragleave":Ti=null;break;case"mouseover":case"mouseout":Ri=null;break;case"pointerover":case"pointerout":Ns.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(i.pointerId)}}function Is(n,i,a,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},i!==null&&(i=qs(i),i!==null&&Bu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function V_(n,i,a,u,h){switch(i){case"focusin":return wi=Is(wi,n,i,a,u,h),!0;case"dragenter":return Ti=Is(Ti,n,i,a,u,h),!0;case"mouseover":return Ri=Is(Ri,n,i,a,u,h),!0;case"pointerover":var g=h.pointerId;return Ns.set(g,Is(Ns.get(g)||null,n,i,a,u,h)),!0;case"gotpointercapture":return g=h.pointerId,Us.set(g,Is(Us.get(g)||null,n,i,a,u,h)),!0}return!1}function Dh(n){var i=to(n.target);if(i!==null){var a=Et(i);if(a!==null){if(i=a.tag,i===13){if(i=Ft(a),i!==null){n.blockedOn=i,Ph(n.priority,function(){Ah(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function za(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Vu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);ot=u,a.target.dispatchEvent(u),ot=null}else return i=qs(a),i!==null&&Bu(i),n.blockedOn=a,!1;i.shift()}return!0}function Nh(n,i,a){za(n)&&a.delete(i)}function G_(){zu=!1,wi!==null&&za(wi)&&(wi=null),Ti!==null&&za(Ti)&&(Ti=null),Ri!==null&&za(Ri)&&(Ri=null),Ns.forEach(Nh),Us.forEach(Nh)}function Fs(n,i){n.blockedOn===i&&(n.blockedOn=null,zu||(zu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,G_)))}function Os(n){function i(h){return Fs(h,n)}if(0<Ba.length){Fs(Ba[0],n);for(var a=1;a<Ba.length;a++){var u=Ba[a];u.blockedOn===n&&(u.blockedOn=null)}}for(wi!==null&&Fs(wi,n),Ti!==null&&Fs(Ti,n),Ri!==null&&Fs(Ri,n),Ns.forEach(i),Us.forEach(i),a=0;a<Ci.length;a++)u=Ci[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Ci.length&&(a=Ci[0],a.blockedOn===null);)Dh(a),a.blockedOn===null&&Ci.shift()}var Po=A.ReactCurrentBatchConfig,Ha=!0;function W_(n,i,a,u){var h=Rt,g=Po.transition;Po.transition=null;try{Rt=1,Hu(n,i,a,u)}finally{Rt=h,Po.transition=g}}function X_(n,i,a,u){var h=Rt,g=Po.transition;Po.transition=null;try{Rt=4,Hu(n,i,a,u)}finally{Rt=h,Po.transition=g}}function Hu(n,i,a,u){if(Ha){var h=Vu(n,i,a,u);if(h===null)oc(n,i,u,Va,a),Lh(n,u);else if(V_(h,n,i,a,u))u.stopPropagation();else if(Lh(n,u),i&4&&-1<H_.indexOf(n)){for(;h!==null;){var g=qs(h);if(g!==null&&Ch(g),g=Vu(n,i,a,u),g===null&&oc(n,i,u,Va,a),g===h)break;h=g}h!==null&&u.stopPropagation()}else oc(n,i,u,null,a)}}var Va=null;function Vu(n,i,a,u){if(Va=null,n=G(u),n=to(n),n!==null)if(i=Et(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ft(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Va=n,null}function Uh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Ce:return 1;case Oe:return 4;case Xe:case We:return 16;case dt:return 536870912;default:return 16}default:return 16}}var Ai=null,Gu=null,Ga=null;function Ih(){if(Ga)return Ga;var n,i=Gu,a=i.length,u,h="value"in Ai?Ai.value:Ai.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var w=a-n;for(u=1;u<=w&&i[a-u]===h[g-u];u++);return Ga=h.slice(n,1<u?1-u:void 0)}function Wa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Xa(){return!0}function Fh(){return!1}function Zn(n){function i(a,u,h,g,w){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(a=n[N],this[N]=a?a(g):g[N]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Xa:Fh,this.isPropagationStopped=Fh,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),i}var Lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wu=Zn(Lo),ks=ae({},Lo,{view:0,detail:0}),j_=Zn(ks),Xu,ju,Bs,ja=ae({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Bs&&(Bs&&n.type==="mousemove"?(Xu=n.screenX-Bs.screenX,ju=n.screenY-Bs.screenY):ju=Xu=0,Bs=n),Xu)},movementY:function(n){return"movementY"in n?n.movementY:ju}}),Oh=Zn(ja),$_=ae({},ja,{dataTransfer:0}),Y_=Zn($_),q_=ae({},ks,{relatedTarget:0}),$u=Zn(q_),K_=ae({},Lo,{animationName:0,elapsedTime:0,pseudoElement:0}),Z_=Zn(K_),J_=ae({},Lo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Q_=Zn(J_),e0=ae({},Lo,{data:0}),kh=Zn(e0),t0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=r0[n])?!!i[n]:!1}function Yu(){return i0}var o0=ae({},ks,{key:function(n){if(n.key){var i=t0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Wa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?n0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(n){return n.type==="keypress"?Wa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Wa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),s0=Zn(o0),a0=ae({},ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bh=Zn(a0),l0=ae({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),u0=Zn(l0),c0=ae({},Lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),f0=Zn(c0),d0=ae({},ja,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=Zn(d0),p0=[9,13,27,32],qu=f&&"CompositionEvent"in window,zs=null;f&&"documentMode"in document&&(zs=document.documentMode);var m0=f&&"TextEvent"in window&&!zs,zh=f&&(!qu||zs&&8<zs&&11>=zs),Hh=" ",Vh=!1;function Gh(n,i){switch(n){case"keyup":return p0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Do=!1;function g0(n,i){switch(n){case"compositionend":return Wh(i);case"keypress":return i.which!==32?null:(Vh=!0,Hh);case"textInput":return n=i.data,n===Hh&&Vh?null:n;default:return null}}function v0(n,i){if(Do)return n==="compositionend"||!qu&&Gh(n,i)?(n=Ih(),Ga=Gu=Ai=null,Do=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zh&&i.locale!=="ko"?null:i.data;default:return null}}var _0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!_0[n.type]:i==="textarea"}function jh(n,i,a,u){ge(u),i=Za(i,"onChange"),0<i.length&&(a=new Wu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Hs=null,Vs=null;function x0(n){cp(n,0)}function $a(n){var i=Oo(n);if(it(i))return n}function y0(n,i){if(n==="change")return i}var $h=!1;if(f){var Ku;if(f){var Zu="oninput"in document;if(!Zu){var Yh=document.createElement("div");Yh.setAttribute("oninput","return;"),Zu=typeof Yh.oninput=="function"}Ku=Zu}else Ku=!1;$h=Ku&&(!document.documentMode||9<document.documentMode)}function qh(){Hs&&(Hs.detachEvent("onpropertychange",Kh),Vs=Hs=null)}function Kh(n){if(n.propertyName==="value"&&$a(Vs)){var i=[];jh(i,Vs,n,G(n)),gn(x0,i)}}function S0(n,i,a){n==="focusin"?(qh(),Hs=i,Vs=a,Hs.attachEvent("onpropertychange",Kh)):n==="focusout"&&qh()}function E0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $a(Vs)}function M0(n,i){if(n==="click")return $a(i)}function w0(n,i){if(n==="input"||n==="change")return $a(i)}function T0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var vr=typeof Object.is=="function"?Object.is:T0;function Gs(n,i){if(vr(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!d.call(i,h)||!vr(n[h],i[h]))return!1}return!0}function Zh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jh(n,i){var a=Zh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zh(a)}}function Qh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Qh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ep(){for(var n=window,i=Ke();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ke(n.document)}return i}function Ju(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function R0(n){var i=ep(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Qh(a.ownerDocument.documentElement,a)){if(u!==null&&Ju(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=Jh(a,g);var w=Jh(a,u);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var C0=f&&"documentMode"in document&&11>=document.documentMode,No=null,Qu=null,Ws=null,ec=!1;function tp(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ec||No==null||No!==Ke(u)||(u=No,"selectionStart"in u&&Ju(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ws&&Gs(Ws,u)||(Ws=u,u=Za(Qu,"onSelect"),0<u.length&&(i=new Wu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=No)))}function Ya(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Uo={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},tc={},np={};f&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete Uo.animationend.animation,delete Uo.animationiteration.animation,delete Uo.animationstart.animation),"TransitionEvent"in window||delete Uo.transitionend.transition);function qa(n){if(tc[n])return tc[n];if(!Uo[n])return n;var i=Uo[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in np)return tc[n]=i[a];return n}var rp=qa("animationend"),ip=qa("animationiteration"),op=qa("animationstart"),sp=qa("transitionend"),ap=new Map,lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(n,i){ap.set(n,i),l(i,[n])}for(var nc=0;nc<lp.length;nc++){var rc=lp[nc],A0=rc.toLowerCase(),b0=rc[0].toUpperCase()+rc.slice(1);bi(A0,"on"+b0)}bi(rp,"onAnimationEnd"),bi(ip,"onAnimationIteration"),bi(op,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(sp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xs));function up(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Yt(u,i,void 0,n),n.currentTarget=null}function cp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],h=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var w=u.length-1;0<=w;w--){var N=u[w],z=N.instance,re=N.currentTarget;if(N=N.listener,z!==g&&h.isPropagationStopped())break e;up(h,N,re),g=z}else for(w=0;w<u.length;w++){if(N=u[w],z=N.instance,re=N.currentTarget,N=N.listener,z!==g&&h.isPropagationStopped())break e;up(h,N,re),g=z}}}if(Lr)throw n=Dr,Lr=!1,Dr=null,n}function Ht(n,i){var a=i[fc];a===void 0&&(a=i[fc]=new Set);var u=n+"__bubble";a.has(u)||(fp(i,n,2,!1),a.add(u))}function ic(n,i,a){var u=0;i&&(u|=4),fp(a,n,u,i)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function js(n){if(!n[Ka]){n[Ka]=!0,o.forEach(function(a){a!=="selectionchange"&&(P0.has(a)||ic(a,!1,n),ic(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ka]||(i[Ka]=!0,ic("selectionchange",!1,i))}}function fp(n,i,a,u){switch(Uh(i)){case 1:var h=W_;break;case 4:h=X_;break;default:h=Hu}a=h.bind(null,i,a,n),h=void 0,!Ei||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function oc(n,i,a,u,h){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var N=u.stateNode.containerInfo;if(N===h||N.nodeType===8&&N.parentNode===h)break;if(w===4)for(w=u.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===h||z.nodeType===8&&z.parentNode===h))return;w=w.return}for(;N!==null;){if(w=to(N),w===null)return;if(z=w.tag,z===5||z===6){u=g=w;continue e}N=N.parentNode}}u=u.return}gn(function(){var re=g,Me=G(a),Te=[];e:{var ye=ap.get(n);if(ye!==void 0){var He=Wu,Ye=n;switch(n){case"keypress":if(Wa(a)===0)break e;case"keydown":case"keyup":He=s0;break;case"focusin":Ye="focus",He=$u;break;case"focusout":Ye="blur",He=$u;break;case"beforeblur":case"afterblur":He=$u;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=Y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=u0;break;case rp:case ip:case op:He=Z_;break;case sp:He=f0;break;case"scroll":He=j_;break;case"wheel":He=h0;break;case"copy":case"cut":case"paste":He=Q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Bh}var Je=(i&4)!==0,Qt=!Je&&n==="scroll",q=Je?ye!==null?ye+"Capture":null:ye;Je=[];for(var j=re,ee;j!==null;){ee=j;var Pe=ee.stateNode;if(ee.tag===5&&Pe!==null&&(ee=Pe,q!==null&&(Pe=rn(j,q),Pe!=null&&Je.push($s(j,Pe,ee)))),Qt)break;j=j.return}0<Je.length&&(ye=new He(ye,Ye,null,a,Me),Te.push({event:ye,listeners:Je}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",ye&&a!==ot&&(Ye=a.relatedTarget||a.fromElement)&&(to(Ye)||Ye[Jr]))break e;if((He||ye)&&(ye=Me.window===Me?Me:(ye=Me.ownerDocument)?ye.defaultView||ye.parentWindow:window,He?(Ye=a.relatedTarget||a.toElement,He=re,Ye=Ye?to(Ye):null,Ye!==null&&(Qt=Et(Ye),Ye!==Qt||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(He=null,Ye=re),He!==Ye)){if(Je=Oh,Pe="onMouseLeave",q="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(Je=Bh,Pe="onPointerLeave",q="onPointerEnter",j="pointer"),Qt=He==null?ye:Oo(He),ee=Ye==null?ye:Oo(Ye),ye=new Je(Pe,j+"leave",He,a,Me),ye.target=Qt,ye.relatedTarget=ee,Pe=null,to(Me)===re&&(Je=new Je(q,j+"enter",Ye,a,Me),Je.target=ee,Je.relatedTarget=Qt,Pe=Je),Qt=Pe,He&&Ye)t:{for(Je=He,q=Ye,j=0,ee=Je;ee;ee=Io(ee))j++;for(ee=0,Pe=q;Pe;Pe=Io(Pe))ee++;for(;0<j-ee;)Je=Io(Je),j--;for(;0<ee-j;)q=Io(q),ee--;for(;j--;){if(Je===q||q!==null&&Je===q.alternate)break t;Je=Io(Je),q=Io(q)}Je=null}else Je=null;He!==null&&dp(Te,ye,He,Je,!1),Ye!==null&&Qt!==null&&dp(Te,Qt,Ye,Je,!0)}}e:{if(ye=re?Oo(re):window,He=ye.nodeName&&ye.nodeName.toLowerCase(),He==="select"||He==="input"&&ye.type==="file")var Qe=y0;else if(Xh(ye))if($h)Qe=w0;else{Qe=E0;var st=S0}else(He=ye.nodeName)&&He.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Qe=M0);if(Qe&&(Qe=Qe(n,re))){jh(Te,Qe,a,Me);break e}st&&st(n,ye,re),n==="focusout"&&(st=ye._wrapperState)&&st.controlled&&ye.type==="number"&&mt(ye,"number",ye.value)}switch(st=re?Oo(re):window,n){case"focusin":(Xh(st)||st.contentEditable==="true")&&(No=st,Qu=re,Ws=null);break;case"focusout":Ws=Qu=No=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,tp(Te,a,Me);break;case"selectionchange":if(C0)break;case"keydown":case"keyup":tp(Te,a,Me)}var at;if(qu)e:{switch(n){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else Do?Gh(n,a)&&(ht="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(zh&&a.locale!=="ko"&&(Do||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Do&&(at=Ih()):(Ai=Me,Gu="value"in Ai?Ai.value:Ai.textContent,Do=!0)),st=Za(re,ht),0<st.length&&(ht=new kh(ht,n,null,a,Me),Te.push({event:ht,listeners:st}),at?ht.data=at:(at=Wh(a),at!==null&&(ht.data=at)))),(at=m0?g0(n,a):v0(n,a))&&(re=Za(re,"onBeforeInput"),0<re.length&&(Me=new kh("onBeforeInput","beforeinput",null,a,Me),Te.push({event:Me,listeners:re}),Me.data=at))}cp(Te,i)})}function $s(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Za(n,i){for(var a=i+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=rn(n,a),g!=null&&u.unshift($s(n,g,h)),g=rn(n,i),g!=null&&u.push($s(n,g,h))),n=n.return}return u}function Io(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function dp(n,i,a,u,h){for(var g=i._reactName,w=[];a!==null&&a!==u;){var N=a,z=N.alternate,re=N.stateNode;if(z!==null&&z===u)break;N.tag===5&&re!==null&&(N=re,h?(z=rn(a,g),z!=null&&w.unshift($s(a,z,N))):h||(z=rn(a,g),z!=null&&w.push($s(a,z,N)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var L0=/\r\n?/g,D0=/\u0000|\uFFFD/g;function hp(n){return(typeof n=="string"?n:""+n).replace(L0,`
`).replace(D0,"")}function Ja(n,i,a){if(i=hp(i),hp(n)!==i&&a)throw Error(t(425))}function Qa(){}var sc=null,ac=null;function lc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,N0=typeof clearTimeout=="function"?clearTimeout:void 0,pp=typeof Promise=="function"?Promise:void 0,U0=typeof queueMicrotask=="function"?queueMicrotask:typeof pp<"u"?function(n){return pp.resolve(null).then(n).catch(I0)}:uc;function I0(n){setTimeout(function(){throw n})}function cc(n,i){var a=i,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){n.removeChild(h),Os(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);Os(i)}function Pi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function mp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fo=Math.random().toString(36).slice(2),Ur="__reactFiber$"+Fo,Ys="__reactProps$"+Fo,Jr="__reactContainer$"+Fo,fc="__reactEvents$"+Fo,F0="__reactListeners$"+Fo,O0="__reactHandles$"+Fo;function to(n){var i=n[Ur];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Jr]||a[Ur]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=mp(n);n!==null;){if(a=n[Ur])return a;n=mp(n)}return i}n=a,a=n.parentNode}return null}function qs(n){return n=n[Ur]||n[Jr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Oo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function el(n){return n[Ys]||null}var dc=[],ko=-1;function Li(n){return{current:n}}function Vt(n){0>ko||(n.current=dc[ko],dc[ko]=null,ko--)}function Bt(n,i){ko++,dc[ko]=n.current,n.current=i}var Di={},wn=Li(Di),Hn=Li(!1),no=Di;function Bo(n,i){var a=n.type.contextTypes;if(!a)return Di;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Vn(n){return n=n.childContextTypes,n!=null}function tl(){Vt(Hn),Vt(wn)}function gp(n,i,a){if(wn.current!==Di)throw Error(t(168));Bt(wn,i),Bt(Hn,a)}function vp(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,Se(n)||"Unknown",h));return ae({},a,u)}function nl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Di,no=wn.current,Bt(wn,n),Bt(Hn,Hn.current),!0}function _p(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=vp(n,i,no),u.__reactInternalMemoizedMergedChildContext=n,Vt(Hn),Vt(wn),Bt(wn,n)):Vt(Hn),Bt(Hn,a)}var Qr=null,rl=!1,hc=!1;function xp(n){Qr===null?Qr=[n]:Qr.push(n)}function k0(n){rl=!0,xp(n)}function Ni(){if(!hc&&Qr!==null){hc=!0;var n=0,i=Rt;try{var a=Qr;for(Rt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Qr=null,rl=!1}catch(h){throw Qr!==null&&(Qr=Qr.slice(n+1)),En(Ce,Ni),h}finally{Rt=i,hc=!1}}return null}var zo=[],Ho=0,il=null,ol=0,rr=[],ir=0,ro=null,ei=1,ti="";function io(n,i){zo[Ho++]=ol,zo[Ho++]=il,il=n,ol=i}function yp(n,i,a){rr[ir++]=ei,rr[ir++]=ti,rr[ir++]=ro,ro=n;var u=ei;n=ti;var h=32-vt(u)-1;u&=~(1<<h),a+=1;var g=32-vt(i)+h;if(30<g){var w=h-h%5;g=(u&(1<<w)-1).toString(32),u>>=w,h-=w,ei=1<<32-vt(i)+h|a<<h|u,ti=g+n}else ei=1<<g|a<<h|u,ti=n}function pc(n){n.return!==null&&(io(n,1),yp(n,1,0))}function mc(n){for(;n===il;)il=zo[--Ho],zo[Ho]=null,ol=zo[--Ho],zo[Ho]=null;for(;n===ro;)ro=rr[--ir],rr[ir]=null,ti=rr[--ir],rr[ir]=null,ei=rr[--ir],rr[ir]=null}var Jn=null,Qn=null,Wt=!1,_r=null;function Sp(n,i){var a=lr(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Ep(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Jn=n,Qn=Pi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Jn=n,Qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ro!==null?{id:ei,overflow:ti}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=lr(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Jn=n,Qn=null,!0):!1;default:return!1}}function gc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function vc(n){if(Wt){var i=Qn;if(i){var a=i;if(!Ep(n,i)){if(gc(n))throw Error(t(418));i=Pi(a.nextSibling);var u=Jn;i&&Ep(n,i)?Sp(u,a):(n.flags=n.flags&-4097|2,Wt=!1,Jn=n)}}else{if(gc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Wt=!1,Jn=n}}}function Mp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jn=n}function sl(n){if(n!==Jn)return!1;if(!Wt)return Mp(n),Wt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!lc(n.type,n.memoizedProps)),i&&(i=Qn)){if(gc(n))throw wp(),Error(t(418));for(;i;)Sp(n,i),i=Pi(i.nextSibling)}if(Mp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Qn=Pi(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Qn=null}}else Qn=Jn?Pi(n.stateNode.nextSibling):null;return!0}function wp(){for(var n=Qn;n;)n=Pi(n.nextSibling)}function Vo(){Qn=Jn=null,Wt=!1}function _c(n){_r===null?_r=[n]:_r.push(n)}var B0=A.ReactCurrentBatchConfig;function Ks(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var N=h.refs;w===null?delete N[g]:N[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function al(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Tp(n){var i=n._init;return i(n._payload)}function Rp(n){function i(q,j){if(n){var ee=q.deletions;ee===null?(q.deletions=[j],q.flags|=16):ee.push(j)}}function a(q,j){if(!n)return null;for(;j!==null;)i(q,j),j=j.sibling;return null}function u(q,j){for(q=new Map;j!==null;)j.key!==null?q.set(j.key,j):q.set(j.index,j),j=j.sibling;return q}function h(q,j){return q=Hi(q,j),q.index=0,q.sibling=null,q}function g(q,j,ee){return q.index=ee,n?(ee=q.alternate,ee!==null?(ee=ee.index,ee<j?(q.flags|=2,j):ee):(q.flags|=2,j)):(q.flags|=1048576,j)}function w(q){return n&&q.alternate===null&&(q.flags|=2),q}function N(q,j,ee,Pe){return j===null||j.tag!==6?(j=cf(ee,q.mode,Pe),j.return=q,j):(j=h(j,ee),j.return=q,j)}function z(q,j,ee,Pe){var Qe=ee.type;return Qe===O?Me(q,j,ee.props.children,Pe,ee.key):j!==null&&(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ue&&Tp(Qe)===j.type)?(Pe=h(j,ee.props),Pe.ref=Ks(q,j,ee),Pe.return=q,Pe):(Pe=Ll(ee.type,ee.key,ee.props,null,q.mode,Pe),Pe.ref=Ks(q,j,ee),Pe.return=q,Pe)}function re(q,j,ee,Pe){return j===null||j.tag!==4||j.stateNode.containerInfo!==ee.containerInfo||j.stateNode.implementation!==ee.implementation?(j=ff(ee,q.mode,Pe),j.return=q,j):(j=h(j,ee.children||[]),j.return=q,j)}function Me(q,j,ee,Pe,Qe){return j===null||j.tag!==7?(j=ho(ee,q.mode,Pe,Qe),j.return=q,j):(j=h(j,ee),j.return=q,j)}function Te(q,j,ee){if(typeof j=="string"&&j!==""||typeof j=="number")return j=cf(""+j,q.mode,ee),j.return=q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case H:return ee=Ll(j.type,j.key,j.props,null,q.mode,ee),ee.ref=Ks(q,null,j),ee.return=q,ee;case I:return j=ff(j,q.mode,ee),j.return=q,j;case ue:var Pe=j._init;return Te(q,Pe(j._payload),ee)}if(et(j)||fe(j))return j=ho(j,q.mode,ee,null),j.return=q,j;al(q,j)}return null}function ye(q,j,ee,Pe){var Qe=j!==null?j.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Qe!==null?null:N(q,j,""+ee,Pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case H:return ee.key===Qe?z(q,j,ee,Pe):null;case I:return ee.key===Qe?re(q,j,ee,Pe):null;case ue:return Qe=ee._init,ye(q,j,Qe(ee._payload),Pe)}if(et(ee)||fe(ee))return Qe!==null?null:Me(q,j,ee,Pe,null);al(q,ee)}return null}function He(q,j,ee,Pe,Qe){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return q=q.get(ee)||null,N(j,q,""+Pe,Qe);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case H:return q=q.get(Pe.key===null?ee:Pe.key)||null,z(j,q,Pe,Qe);case I:return q=q.get(Pe.key===null?ee:Pe.key)||null,re(j,q,Pe,Qe);case ue:var st=Pe._init;return He(q,j,ee,st(Pe._payload),Qe)}if(et(Pe)||fe(Pe))return q=q.get(ee)||null,Me(j,q,Pe,Qe,null);al(j,Pe)}return null}function Ye(q,j,ee,Pe){for(var Qe=null,st=null,at=j,ht=j=0,pn=null;at!==null&&ht<ee.length;ht++){at.index>ht?(pn=at,at=null):pn=at.sibling;var At=ye(q,at,ee[ht],Pe);if(At===null){at===null&&(at=pn);break}n&&at&&At.alternate===null&&i(q,at),j=g(At,j,ht),st===null?Qe=At:st.sibling=At,st=At,at=pn}if(ht===ee.length)return a(q,at),Wt&&io(q,ht),Qe;if(at===null){for(;ht<ee.length;ht++)at=Te(q,ee[ht],Pe),at!==null&&(j=g(at,j,ht),st===null?Qe=at:st.sibling=at,st=at);return Wt&&io(q,ht),Qe}for(at=u(q,at);ht<ee.length;ht++)pn=He(at,q,ht,ee[ht],Pe),pn!==null&&(n&&pn.alternate!==null&&at.delete(pn.key===null?ht:pn.key),j=g(pn,j,ht),st===null?Qe=pn:st.sibling=pn,st=pn);return n&&at.forEach(function(Vi){return i(q,Vi)}),Wt&&io(q,ht),Qe}function Je(q,j,ee,Pe){var Qe=fe(ee);if(typeof Qe!="function")throw Error(t(150));if(ee=Qe.call(ee),ee==null)throw Error(t(151));for(var st=Qe=null,at=j,ht=j=0,pn=null,At=ee.next();at!==null&&!At.done;ht++,At=ee.next()){at.index>ht?(pn=at,at=null):pn=at.sibling;var Vi=ye(q,at,At.value,Pe);if(Vi===null){at===null&&(at=pn);break}n&&at&&Vi.alternate===null&&i(q,at),j=g(Vi,j,ht),st===null?Qe=Vi:st.sibling=Vi,st=Vi,at=pn}if(At.done)return a(q,at),Wt&&io(q,ht),Qe;if(at===null){for(;!At.done;ht++,At=ee.next())At=Te(q,At.value,Pe),At!==null&&(j=g(At,j,ht),st===null?Qe=At:st.sibling=At,st=At);return Wt&&io(q,ht),Qe}for(at=u(q,at);!At.done;ht++,At=ee.next())At=He(at,q,ht,At.value,Pe),At!==null&&(n&&At.alternate!==null&&at.delete(At.key===null?ht:At.key),j=g(At,j,ht),st===null?Qe=At:st.sibling=At,st=At);return n&&at.forEach(function(_x){return i(q,_x)}),Wt&&io(q,ht),Qe}function Qt(q,j,ee,Pe){if(typeof ee=="object"&&ee!==null&&ee.type===O&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case H:e:{for(var Qe=ee.key,st=j;st!==null;){if(st.key===Qe){if(Qe=ee.type,Qe===O){if(st.tag===7){a(q,st.sibling),j=h(st,ee.props.children),j.return=q,q=j;break e}}else if(st.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ue&&Tp(Qe)===st.type){a(q,st.sibling),j=h(st,ee.props),j.ref=Ks(q,st,ee),j.return=q,q=j;break e}a(q,st);break}else i(q,st);st=st.sibling}ee.type===O?(j=ho(ee.props.children,q.mode,Pe,ee.key),j.return=q,q=j):(Pe=Ll(ee.type,ee.key,ee.props,null,q.mode,Pe),Pe.ref=Ks(q,j,ee),Pe.return=q,q=Pe)}return w(q);case I:e:{for(st=ee.key;j!==null;){if(j.key===st)if(j.tag===4&&j.stateNode.containerInfo===ee.containerInfo&&j.stateNode.implementation===ee.implementation){a(q,j.sibling),j=h(j,ee.children||[]),j.return=q,q=j;break e}else{a(q,j);break}else i(q,j);j=j.sibling}j=ff(ee,q.mode,Pe),j.return=q,q=j}return w(q);case ue:return st=ee._init,Qt(q,j,st(ee._payload),Pe)}if(et(ee))return Ye(q,j,ee,Pe);if(fe(ee))return Je(q,j,ee,Pe);al(q,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,j!==null&&j.tag===6?(a(q,j.sibling),j=h(j,ee),j.return=q,q=j):(a(q,j),j=cf(ee,q.mode,Pe),j.return=q,q=j),w(q)):a(q,j)}return Qt}var Go=Rp(!0),Cp=Rp(!1),ll=Li(null),ul=null,Wo=null,xc=null;function yc(){xc=Wo=ul=null}function Sc(n){var i=ll.current;Vt(ll),n._currentValue=i}function Ec(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Xo(n,i){ul=n,xc=Wo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gn=!0),n.firstContext=null)}function or(n){var i=n._currentValue;if(xc!==n)if(n={context:n,memoizedValue:i,next:null},Wo===null){if(ul===null)throw Error(t(308));Wo=n,ul.dependencies={lanes:0,firstContext:n}}else Wo=Wo.next=n;return i}var oo=null;function Mc(n){oo===null?oo=[n]:oo.push(n)}function Ap(n,i,a,u){var h=i.interleaved;return h===null?(a.next=a,Mc(i)):(a.next=h.next,h.next=a),i.interleaved=a,ni(n,u)}function ni(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ui=!1;function wc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ri(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Ii(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ct&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,ni(n,a)}return h=u.interleaved,h===null?(i.next=i,Mc(u)):(i.next=h.next,h.next=i),u.interleaved=i,ni(n,a)}function cl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,fn(n,a)}}function Pp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function fl(n,i,a,u){var h=n.updateQueue;Ui=!1;var g=h.firstBaseUpdate,w=h.lastBaseUpdate,N=h.shared.pending;if(N!==null){h.shared.pending=null;var z=N,re=z.next;z.next=null,w===null?g=re:w.next=re,w=z;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,N=Me.lastBaseUpdate,N!==w&&(N===null?Me.firstBaseUpdate=re:N.next=re,Me.lastBaseUpdate=z))}if(g!==null){var Te=h.baseState;w=0,Me=re=z=null,N=g;do{var ye=N.lane,He=N.eventTime;if((u&ye)===ye){Me!==null&&(Me=Me.next={eventTime:He,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ye=n,Je=N;switch(ye=i,He=a,Je.tag){case 1:if(Ye=Je.payload,typeof Ye=="function"){Te=Ye.call(He,Te,ye);break e}Te=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Je.payload,ye=typeof Ye=="function"?Ye.call(He,Te,ye):Ye,ye==null)break e;Te=ae({},Te,ye);break e;case 2:Ui=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,ye=h.effects,ye===null?h.effects=[N]:ye.push(N))}else He={eventTime:He,lane:ye,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Me===null?(re=Me=He,z=Te):Me=Me.next=He,w|=ye;if(N=N.next,N===null){if(N=h.shared.pending,N===null)break;ye=N,N=ye.next,ye.next=null,h.lastBaseUpdate=ye,h.shared.pending=null}}while(!0);if(Me===null&&(z=Te),h.baseState=z,h.firstBaseUpdate=re,h.lastBaseUpdate=Me,i=h.shared.interleaved,i!==null){h=i;do w|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);lo|=w,n.lanes=w,n.memoizedState=Te}}function Lp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Zs={},Ir=Li(Zs),Js=Li(Zs),Qs=Li(Zs);function so(n){if(n===Zs)throw Error(t(174));return n}function Tc(n,i){switch(Bt(Qs,i),Bt(Js,n),Bt(Ir,Zs),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ve(i,n)}Vt(Ir),Bt(Ir,i)}function jo(){Vt(Ir),Vt(Js),Vt(Qs)}function Dp(n){so(Qs.current);var i=so(Ir.current),a=ve(i,n.type);i!==a&&(Bt(Js,n),Bt(Ir,a))}function Rc(n){Js.current===n&&(Vt(Ir),Vt(Js))}var Xt=Li(0);function dl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Cc=[];function Ac(){for(var n=0;n<Cc.length;n++)Cc[n]._workInProgressVersionPrimary=null;Cc.length=0}var hl=A.ReactCurrentDispatcher,bc=A.ReactCurrentBatchConfig,ao=0,jt=null,on=null,dn=null,pl=!1,ea=!1,ta=0,z0=0;function Tn(){throw Error(t(321))}function Pc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!vr(n[a],i[a]))return!1;return!0}function Lc(n,i,a,u,h,g){if(ao=g,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,hl.current=n===null||n.memoizedState===null?W0:X0,n=a(u,h),ea){g=0;do{if(ea=!1,ta=0,25<=g)throw Error(t(301));g+=1,dn=on=null,i.updateQueue=null,hl.current=j0,n=a(u,h)}while(ea)}if(hl.current=vl,i=on!==null&&on.next!==null,ao=0,dn=on=jt=null,pl=!1,i)throw Error(t(300));return n}function Dc(){var n=ta!==0;return ta=0,n}function Fr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?jt.memoizedState=dn=n:dn=dn.next=n,dn}function sr(){if(on===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var i=dn===null?jt.memoizedState:dn.next;if(i!==null)dn=i,on=n;else{if(n===null)throw Error(t(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},dn===null?jt.memoizedState=dn=n:dn=dn.next=n}return dn}function na(n,i){return typeof i=="function"?i(n):i}function Nc(n){var i=sr(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=on,h=u.baseQueue,g=a.pending;if(g!==null){if(h!==null){var w=h.next;h.next=g.next,g.next=w}u.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,u=u.baseState;var N=w=null,z=null,re=g;do{var Me=re.lane;if((ao&Me)===Me)z!==null&&(z=z.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),u=re.hasEagerState?re.eagerState:n(u,re.action);else{var Te={lane:Me,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};z===null?(N=z=Te,w=u):z=z.next=Te,jt.lanes|=Me,lo|=Me}re=re.next}while(re!==null&&re!==g);z===null?w=u:z.next=N,vr(u,i.memoizedState)||(Gn=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=z,a.lastRenderedState=u}if(n=a.interleaved,n!==null){h=n;do g=h.lane,jt.lanes|=g,lo|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Uc(n){var i=sr(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do g=n(g,w.action),w=w.next;while(w!==h);vr(g,i.memoizedState)||(Gn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function Np(){}function Up(n,i){var a=jt,u=sr(),h=i(),g=!vr(u.memoizedState,h);if(g&&(u.memoizedState=h,Gn=!0),u=u.queue,Ic(Op.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||dn!==null&&dn.memoizedState.tag&1){if(a.flags|=2048,ra(9,Fp.bind(null,a,u,h,i),void 0,null),hn===null)throw Error(t(349));(ao&30)!==0||Ip(a,i,h)}return h}function Ip(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Fp(n,i,a,u){i.value=a,i.getSnapshot=u,kp(i)&&Bp(n)}function Op(n,i,a){return a(function(){kp(i)&&Bp(n)})}function kp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!vr(n,a)}catch{return!0}}function Bp(n){var i=ni(n,1);i!==null&&Er(i,n,1,-1)}function zp(n){var i=Fr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:n},i.queue=n,n=n.dispatch=G0.bind(null,jt,n),[i.memoizedState,n]}function ra(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Hp(){return sr().memoizedState}function ml(n,i,a,u){var h=Fr();jt.flags|=n,h.memoizedState=ra(1|i,a,void 0,u===void 0?null:u)}function gl(n,i,a,u){var h=sr();u=u===void 0?null:u;var g=void 0;if(on!==null){var w=on.memoizedState;if(g=w.destroy,u!==null&&Pc(u,w.deps)){h.memoizedState=ra(i,a,g,u);return}}jt.flags|=n,h.memoizedState=ra(1|i,a,g,u)}function Vp(n,i){return ml(8390656,8,n,i)}function Ic(n,i){return gl(2048,8,n,i)}function Gp(n,i){return gl(4,2,n,i)}function Wp(n,i){return gl(4,4,n,i)}function Xp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function jp(n,i,a){return a=a!=null?a.concat([n]):null,gl(4,4,Xp.bind(null,i,n),a)}function Fc(){}function $p(n,i){var a=sr();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Pc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Yp(n,i){var a=sr();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Pc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function qp(n,i,a){return(ao&21)===0?(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=a):(vr(a,i)||(a=kt(),jt.lanes|=a,lo|=a,n.baseState=!0),i)}function H0(n,i){var a=Rt;Rt=a!==0&&4>a?a:4,n(!0);var u=bc.transition;bc.transition={};try{n(!1),i()}finally{Rt=a,bc.transition=u}}function Kp(){return sr().memoizedState}function V0(n,i,a){var u=Bi(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Zp(n))Jp(i,a);else if(a=Ap(n,i,a,u),a!==null){var h=Un();Er(a,n,u,h),Qp(a,i,u)}}function G0(n,i,a){var u=Bi(n),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zp(n))Jp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,N=g(w,a);if(h.hasEagerState=!0,h.eagerState=N,vr(N,w)){var z=i.interleaved;z===null?(h.next=h,Mc(i)):(h.next=z.next,z.next=h),i.interleaved=h;return}}catch{}a=Ap(n,i,h,u),a!==null&&(h=Un(),Er(a,n,u,h),Qp(a,i,u))}}function Zp(n){var i=n.alternate;return n===jt||i!==null&&i===jt}function Jp(n,i){ea=pl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Qp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,fn(n,a)}}var vl={readContext:or,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},W0={readContext:or,useCallback:function(n,i){return Fr().memoizedState=[n,i===void 0?null:i],n},useContext:or,useEffect:Vp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ml(4194308,4,Xp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ml(4194308,4,n,i)},useInsertionEffect:function(n,i){return ml(4,2,n,i)},useMemo:function(n,i){var a=Fr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Fr();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=V0.bind(null,jt,n),[u.memoizedState,n]},useRef:function(n){var i=Fr();return n={current:n},i.memoizedState=n},useState:zp,useDebugValue:Fc,useDeferredValue:function(n){return Fr().memoizedState=n},useTransition:function(){var n=zp(!1),i=n[0];return n=H0.bind(null,n[1]),Fr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=jt,h=Fr();if(Wt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),hn===null)throw Error(t(349));(ao&30)!==0||Ip(u,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,Vp(Op.bind(null,u,g,n),[n]),u.flags|=2048,ra(9,Fp.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=Fr(),i=hn.identifierPrefix;if(Wt){var a=ti,u=ei;a=(u&~(1<<32-vt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=ta++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=z0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},X0={readContext:or,useCallback:$p,useContext:or,useEffect:Ic,useImperativeHandle:jp,useInsertionEffect:Gp,useLayoutEffect:Wp,useMemo:Yp,useReducer:Nc,useRef:Hp,useState:function(){return Nc(na)},useDebugValue:Fc,useDeferredValue:function(n){var i=sr();return qp(i,on.memoizedState,n)},useTransition:function(){var n=Nc(na)[0],i=sr().memoizedState;return[n,i]},useMutableSource:Np,useSyncExternalStore:Up,useId:Kp,unstable_isNewReconciler:!1},j0={readContext:or,useCallback:$p,useContext:or,useEffect:Ic,useImperativeHandle:jp,useInsertionEffect:Gp,useLayoutEffect:Wp,useMemo:Yp,useReducer:Uc,useRef:Hp,useState:function(){return Uc(na)},useDebugValue:Fc,useDeferredValue:function(n){var i=sr();return on===null?i.memoizedState=n:qp(i,on.memoizedState,n)},useTransition:function(){var n=Uc(na)[0],i=sr().memoizedState;return[n,i]},useMutableSource:Np,useSyncExternalStore:Up,useId:Kp,unstable_isNewReconciler:!1};function xr(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Oc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:ae({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var _l={isMounted:function(n){return(n=n._reactInternals)?Et(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Un(),h=Bi(n),g=ri(u,h);g.payload=i,a!=null&&(g.callback=a),i=Ii(n,g,h),i!==null&&(Er(i,n,h,u),cl(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Un(),h=Bi(n),g=ri(u,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Ii(n,g,h),i!==null&&(Er(i,n,h,u),cl(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Un(),u=Bi(n),h=ri(a,u);h.tag=2,i!=null&&(h.callback=i),i=Ii(n,h,u),i!==null&&(Er(i,n,u,a),cl(i,n,u))}};function em(n,i,a,u,h,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,w):i.prototype&&i.prototype.isPureReactComponent?!Gs(a,u)||!Gs(h,g):!0}function tm(n,i,a){var u=!1,h=Di,g=i.contextType;return typeof g=="object"&&g!==null?g=or(g):(h=Vn(i)?no:wn.current,u=i.contextTypes,g=(u=u!=null)?Bo(n,h):Di),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=_l,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function nm(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&_l.enqueueReplaceState(i,i.state,null)}function kc(n,i,a,u){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},wc(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=or(g):(g=Vn(i)?no:wn.current,h.context=Bo(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Oc(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&_l.enqueueReplaceState(h,h.state,null),fl(n,a,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function $o(n,i){try{var a="",u=i;do a+=me(u),u=u.return;while(u);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Bc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function zc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var $0=typeof WeakMap=="function"?WeakMap:Map;function rm(n,i,a){a=ri(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Tl||(Tl=!0,tf=u),zc(n,i)},a}function im(n,i,a){a=ri(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;a.payload=function(){return u(h)},a.callback=function(){zc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){zc(n,i),typeof u!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function om(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new $0;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(a)||(h.add(a),n=ax.bind(null,n,i,a),i.then(n,n))}function sm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function am(n,i,a,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ri(-1,1),i.tag=2,Ii(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Y0=A.ReactCurrentOwner,Gn=!1;function Nn(n,i,a,u){i.child=n===null?Cp(i,null,a,u):Go(i,n.child,a,u)}function lm(n,i,a,u,h){a=a.render;var g=i.ref;return Xo(i,h),u=Lc(n,i,a,u,g,h),a=Dc(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,ii(n,i,h)):(Wt&&a&&pc(i),i.flags|=1,Nn(n,i,u,h),i.child)}function um(n,i,a,u,h){if(n===null){var g=a.type;return typeof g=="function"&&!uf(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,cm(n,i,g,u,h)):(n=Ll(a.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Gs,a(w,u)&&n.ref===i.ref)return ii(n,i,h)}return i.flags|=1,n=Hi(g,u),n.ref=i.ref,n.return=i,i.child=n}function cm(n,i,a,u,h){if(n!==null){var g=n.memoizedProps;if(Gs(g,u)&&n.ref===i.ref)if(Gn=!1,i.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Gn=!0);else return i.lanes=n.lanes,ii(n,i,h)}return Hc(n,i,a,u,h)}function fm(n,i,a){var u=i.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(qo,er),er|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Bt(qo,er),er|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,Bt(qo,er),er|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,Bt(qo,er),er|=u;return Nn(n,i,h,a),i.child}function dm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Hc(n,i,a,u,h){var g=Vn(a)?no:wn.current;return g=Bo(i,g),Xo(i,h),a=Lc(n,i,a,u,g,h),u=Dc(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,ii(n,i,h)):(Wt&&u&&pc(i),i.flags|=1,Nn(n,i,a,h),i.child)}function hm(n,i,a,u,h){if(Vn(a)){var g=!0;nl(i)}else g=!1;if(Xo(i,h),i.stateNode===null)yl(n,i),tm(i,a,u),kc(i,a,u,h),u=!0;else if(n===null){var w=i.stateNode,N=i.memoizedProps;w.props=N;var z=w.context,re=a.contextType;typeof re=="object"&&re!==null?re=or(re):(re=Vn(a)?no:wn.current,re=Bo(i,re));var Me=a.getDerivedStateFromProps,Te=typeof Me=="function"||typeof w.getSnapshotBeforeUpdate=="function";Te||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==u||z!==re)&&nm(i,w,u,re),Ui=!1;var ye=i.memoizedState;w.state=ye,fl(i,u,w,h),z=i.memoizedState,N!==u||ye!==z||Hn.current||Ui?(typeof Me=="function"&&(Oc(i,a,Me,u),z=i.memoizedState),(N=Ui||em(i,a,N,u,ye,z,re))?(Te||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=z),w.props=u,w.state=z,w.context=re,u=N):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,bp(n,i),N=i.memoizedProps,re=i.type===i.elementType?N:xr(i.type,N),w.props=re,Te=i.pendingProps,ye=w.context,z=a.contextType,typeof z=="object"&&z!==null?z=or(z):(z=Vn(a)?no:wn.current,z=Bo(i,z));var He=a.getDerivedStateFromProps;(Me=typeof He=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==Te||ye!==z)&&nm(i,w,u,z),Ui=!1,ye=i.memoizedState,w.state=ye,fl(i,u,w,h);var Ye=i.memoizedState;N!==Te||ye!==Ye||Hn.current||Ui?(typeof He=="function"&&(Oc(i,a,He,u),Ye=i.memoizedState),(re=Ui||em(i,a,re,u,ye,Ye,z)||!1)?(Me||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Ye,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Ye,z)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||N===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ye),w.props=u,w.state=Ye,w.context=z,u=re):(typeof w.componentDidUpdate!="function"||N===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),u=!1)}return Vc(n,i,a,u,g,h)}function Vc(n,i,a,u,h,g){dm(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return h&&_p(i,a,!1),ii(n,i,g);u=i.stateNode,Y0.current=i;var N=w&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=Go(i,n.child,null,g),i.child=Go(i,null,N,g)):Nn(n,i,N,g),i.memoizedState=u.state,h&&_p(i,a,!0),i.child}function pm(n){var i=n.stateNode;i.pendingContext?gp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&gp(n,i.context,!1),Tc(n,i.containerInfo)}function mm(n,i,a,u,h){return Vo(),_c(h),i.flags|=256,Nn(n,i,a,u),i.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function Wc(n){return{baseLanes:n,cachePool:null,transitions:null}}function gm(n,i,a){var u=i.pendingProps,h=Xt.current,g=!1,w=(i.flags&128)!==0,N;if((N=w)||(N=n!==null&&n.memoizedState===null?!1:(h&2)!==0),N?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Bt(Xt,h&1),n===null)return vc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,n=u.fallback,g?(u=i.mode,g=i.child,w={mode:"hidden",children:w},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Dl(w,u,0,null),n=ho(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Wc(a),i.memoizedState=Gc,n):Xc(i,w));if(h=n.memoizedState,h!==null&&(N=h.dehydrated,N!==null))return q0(n,i,w,u,N,h,a);if(g){g=u.fallback,w=i.mode,h=n.child,N=h.sibling;var z={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=z,i.deletions=null):(u=Hi(h,z),u.subtreeFlags=h.subtreeFlags&14680064),N!==null?g=Hi(N,g):(g=ho(g,w,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,w=n.child.memoizedState,w=w===null?Wc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=Gc,u}return g=n.child,n=g.sibling,u=Hi(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Xc(n,i){return i=Dl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function xl(n,i,a,u){return u!==null&&_c(u),Go(i,n.child,null,a),n=Xc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function q0(n,i,a,u,h,g,w){if(a)return i.flags&256?(i.flags&=-257,u=Bc(Error(t(422))),xl(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,h=i.mode,u=Dl({mode:"visible",children:u.children},h,0,null),g=ho(g,h,w,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Go(i,n.child,null,w),i.child.memoizedState=Wc(w),i.memoizedState=Gc,g);if((i.mode&1)===0)return xl(n,i,w,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var N=u.dgst;return u=N,g=Error(t(419)),u=Bc(g,u,void 0),xl(n,i,w,u)}if(N=(w&n.childLanes)!==0,Gn||N){if(u=hn,u!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|w))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,ni(n,h),Er(u,n,h,-1))}return lf(),u=Bc(Error(t(421))),xl(n,i,w,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=lx.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,Qn=Pi(h.nextSibling),Jn=i,Wt=!0,_r=null,n!==null&&(rr[ir++]=ei,rr[ir++]=ti,rr[ir++]=ro,ei=n.id,ti=n.overflow,ro=i),i=Xc(i,u.children),i.flags|=4096,i)}function vm(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Ec(n.return,i,a)}function jc(n,i,a,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=h)}function _m(n,i,a){var u=i.pendingProps,h=u.revealOrder,g=u.tail;if(Nn(n,i,u.children,a),u=Xt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vm(n,a,i);else if(n.tag===19)vm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Bt(Xt,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&dl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),jc(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&dl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}jc(i,!0,a,null,g);break;case"together":jc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function yl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ii(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),lo|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Hi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Hi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function K0(n,i,a){switch(i.tag){case 3:pm(i),Vo();break;case 5:Dp(i);break;case 1:Vn(i.type)&&nl(i);break;case 4:Tc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Bt(ll,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Bt(Xt,Xt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?gm(n,i,a):(Bt(Xt,Xt.current&1),n=ii(n,i,a),n!==null?n.sibling:null);Bt(Xt,Xt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return _m(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Bt(Xt,Xt.current),u)break;return null;case 22:case 23:return i.lanes=0,fm(n,i,a)}return ii(n,i,a)}var xm,$c,ym,Sm;xm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},$c=function(){},ym=function(n,i,a,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,so(Ir.current);var g=null;switch(a){case"input":h=U(n,h),u=U(n,u),g=[];break;case"select":h=ae({},h,{value:void 0}),u=ae({},u,{value:void 0}),g=[];break;case"textarea":h=zt(n,h),u=zt(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Qa)}tt(a,u);var w;a=null;for(re in h)if(!u.hasOwnProperty(re)&&h.hasOwnProperty(re)&&h[re]!=null)if(re==="style"){var N=h[re];for(w in N)N.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(s.hasOwnProperty(re)?g||(g=[]):(g=g||[]).push(re,null));for(re in u){var z=u[re];if(N=h?.[re],u.hasOwnProperty(re)&&z!==N&&(z!=null||N!=null))if(re==="style")if(N){for(w in N)!N.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in z)z.hasOwnProperty(w)&&N[w]!==z[w]&&(a||(a={}),a[w]=z[w])}else a||(g||(g=[]),g.push(re,a)),a=z;else re==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,N=N?N.__html:void 0,z!=null&&N!==z&&(g=g||[]).push(re,z)):re==="children"?typeof z!="string"&&typeof z!="number"||(g=g||[]).push(re,""+z):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(s.hasOwnProperty(re)?(z!=null&&re==="onScroll"&&Ht("scroll",n),g||N===z||(g=[])):(g=g||[]).push(re,z))}a&&(g=g||[]).push("style",a);var re=g;(i.updateQueue=re)&&(i.flags|=4)}},Sm=function(n,i,a,u){a!==u&&(i.flags|=4)};function ia(n,i){if(!Wt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Rn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Z0(n,i,a){var u=i.pendingProps;switch(mc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(i),null;case 1:return Vn(i.type)&&tl(),Rn(i),null;case 3:return u=i.stateNode,jo(),Vt(Hn),Vt(wn),Ac(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(sl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_r!==null&&(of(_r),_r=null))),$c(n,i),Rn(i),null;case 5:Rc(i);var h=so(Qs.current);if(a=i.type,n!==null&&i.stateNode!=null)ym(n,i,a,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Rn(i),null}if(n=so(Ir.current),sl(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[Ur]=i,u[Ys]=g,n=(i.mode&1)!==0,a){case"dialog":Ht("cancel",u),Ht("close",u);break;case"iframe":case"object":case"embed":Ht("load",u);break;case"video":case"audio":for(h=0;h<Xs.length;h++)Ht(Xs[h],u);break;case"source":Ht("error",u);break;case"img":case"image":case"link":Ht("error",u),Ht("load",u);break;case"details":Ht("toggle",u);break;case"input":Tt(u,g),Ht("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Ht("invalid",u);break;case"textarea":D(u,g),Ht("invalid",u)}tt(a,g),h=null;for(var w in g)if(g.hasOwnProperty(w)){var N=g[w];w==="children"?typeof N=="string"?u.textContent!==N&&(g.suppressHydrationWarning!==!0&&Ja(u.textContent,N,n),h=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(g.suppressHydrationWarning!==!0&&Ja(u.textContent,N,n),h=["children",""+N]):s.hasOwnProperty(w)&&N!=null&&w==="onScroll"&&Ht("scroll",u)}switch(a){case"input":be(u),Ie(u,g,!0);break;case"textarea":be(u),J(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Qa)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(a,{is:u.is}):(n=w.createElement(a),a==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,a),n[Ur]=i,n[Ys]=u,xm(n,i,!1,!1),i.stateNode=n;e:{switch(w=De(a,u),a){case"dialog":Ht("cancel",n),Ht("close",n),h=u;break;case"iframe":case"object":case"embed":Ht("load",n),h=u;break;case"video":case"audio":for(h=0;h<Xs.length;h++)Ht(Xs[h],n);h=u;break;case"source":Ht("error",n),h=u;break;case"img":case"image":case"link":Ht("error",n),Ht("load",n),h=u;break;case"details":Ht("toggle",n),h=u;break;case"input":Tt(n,u),h=U(n,u),Ht("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=ae({},u,{value:void 0}),Ht("invalid",n);break;case"textarea":D(n,u),h=zt(n,u),Ht("invalid",n);break;default:h=u}tt(a,h),N=h;for(g in N)if(N.hasOwnProperty(g)){var z=N[g];g==="style"?ze(n,z):g==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&qe(n,z)):g==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&Le(n,z):typeof z=="number"&&Le(n,""+z):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(s.hasOwnProperty(g)?z!=null&&g==="onScroll"&&Ht("scroll",n):z!=null&&P(n,g,z,w))}switch(a){case"input":be(n),Ie(n,u,!1);break;case"textarea":be(n),J(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?ct(n,!!u.multiple,g,!1):u.defaultValue!=null&&ct(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Qa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Rn(i),null;case 6:if(n&&i.stateNode!=null)Sm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=so(Qs.current),so(Ir.current),sl(i)){if(u=i.stateNode,a=i.memoizedProps,u[Ur]=i,(g=u.nodeValue!==a)&&(n=Jn,n!==null))switch(n.tag){case 3:Ja(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ja(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Ur]=i,i.stateNode=u}return Rn(i),null;case 13:if(Vt(Xt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&Qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)wp(),Vo(),i.flags|=98560,g=!1;else if(g=sl(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ur]=i}else Vo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Rn(i),g=!1}else _r!==null&&(of(_r),_r=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Xt.current&1)!==0?sn===0&&(sn=3):lf())),i.updateQueue!==null&&(i.flags|=4),Rn(i),null);case 4:return jo(),$c(n,i),n===null&&js(i.stateNode.containerInfo),Rn(i),null;case 10:return Sc(i.type._context),Rn(i),null;case 17:return Vn(i.type)&&tl(),Rn(i),null;case 19:if(Vt(Xt),g=i.memoizedState,g===null)return Rn(i),null;if(u=(i.flags&128)!==0,w=g.rendering,w===null)if(u)ia(g,!1);else{if(sn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=dl(n),w!==null){for(i.flags|=128,ia(g,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Bt(Xt,Xt.current&1|2),i.child}n=n.sibling}g.tail!==null&&K()>Ko&&(i.flags|=128,u=!0,ia(g,!1),i.lanes=4194304)}else{if(!u)if(n=dl(w),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ia(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Wt)return Rn(i),null}else 2*K()-g.renderingStartTime>Ko&&a!==1073741824&&(i.flags|=128,u=!0,ia(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=K(),i.sibling=null,a=Xt.current,Bt(Xt,u?a&1|2:a&1),i):(Rn(i),null);case 22:case 23:return af(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(er&1073741824)!==0&&(Rn(i),i.subtreeFlags&6&&(i.flags|=8192)):Rn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function J0(n,i){switch(mc(i),i.tag){case 1:return Vn(i.type)&&tl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return jo(),Vt(Hn),Vt(wn),Ac(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Rc(i),null;case 13:if(Vt(Xt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Vo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Vt(Xt),null;case 4:return jo(),null;case 10:return Sc(i.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Sl=!1,Cn=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,je=null;function Yo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Kt(n,i,u)}else a.current=null}function Yc(n,i,a){try{a()}catch(u){Kt(n,i,u)}}var Em=!1;function ex(n,i){if(sc=Ha,n=ep(),Ju(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,N=-1,z=-1,re=0,Me=0,Te=n,ye=null;t:for(;;){for(var He;Te!==a||h!==0&&Te.nodeType!==3||(N=w+h),Te!==g||u!==0&&Te.nodeType!==3||(z=w+u),Te.nodeType===3&&(w+=Te.nodeValue.length),(He=Te.firstChild)!==null;)ye=Te,Te=He;for(;;){if(Te===n)break t;if(ye===a&&++re===h&&(N=w),ye===g&&++Me===u&&(z=w),(He=Te.nextSibling)!==null)break;Te=ye,ye=Te.parentNode}Te=He}a=N===-1||z===-1?null:{start:N,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(ac={focusedElem:n,selectionRange:a},Ha=!1,je=i;je!==null;)if(i=je,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,je=n;else for(;je!==null;){i=je;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Je=Ye.memoizedProps,Qt=Ye.memoizedState,q=i.stateNode,j=q.getSnapshotBeforeUpdate(i.elementType===i.type?Je:xr(i.type,Je),Qt);q.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){Kt(i,i.return,Pe)}if(n=i.sibling,n!==null){n.return=i.return,je=n;break}je=i.return}return Ye=Em,Em=!1,Ye}function oa(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Yc(i,a,g)}h=h.next}while(h!==u)}}function El(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function qc(n){var i=n.ref;if(i!==null){var a=n.stateNode;n.tag,n=a,typeof i=="function"?i(n):i.current=n}}function Mm(n){var i=n.alternate;i!==null&&(n.alternate=null,Mm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ur],delete i[Ys],delete i[fc],delete i[F0],delete i[O0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function wm(n){return n.tag===5||n.tag===3||n.tag===4}function Tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||wm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Kc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Qa));else if(u!==4&&(n=n.child,n!==null))for(Kc(n,i,a),n=n.sibling;n!==null;)Kc(n,i,a),n=n.sibling}function Zc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Zc(n,i,a),n=n.sibling;n!==null;)Zc(n,i,a),n=n.sibling}var _n=null,yr=!1;function Fi(n,i,a){for(a=a.child;a!==null;)Rm(n,i,a),a=a.sibling}function Rm(n,i,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 5:Cn||Yo(a,i);case 6:var u=_n,h=yr;_n=null,Fi(n,i,a),_n=u,yr=h,_n!==null&&(yr?(n=_n,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):_n.removeChild(a.stateNode));break;case 18:_n!==null&&(yr?(n=_n,a=a.stateNode,n.nodeType===8?cc(n.parentNode,a):n.nodeType===1&&cc(n,a),Os(n)):cc(_n,a.stateNode));break;case 4:u=_n,h=yr,_n=a.stateNode.containerInfo,yr=!0,Fi(n,i,a),_n=u,yr=h;break;case 0:case 11:case 14:case 15:if(!Cn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&Yc(a,i,w),h=h.next}while(h!==u)}Fi(n,i,a);break;case 1:if(!Cn&&(Yo(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(N){Kt(a,i,N)}Fi(n,i,a);break;case 21:Fi(n,i,a);break;case 22:a.mode&1?(Cn=(u=Cn)||a.memoizedState!==null,Fi(n,i,a),Cn=u):Fi(n,i,a);break;default:Fi(n,i,a)}}function Cm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Q0),i.forEach(function(u){var h=ux.bind(null,n,u);a.has(u)||(a.add(u),u.then(h,h))})}}function Sr(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var g=n,w=i,N=w;e:for(;N!==null;){switch(N.tag){case 5:_n=N.stateNode,yr=!1;break e;case 3:_n=N.stateNode.containerInfo,yr=!0;break e;case 4:_n=N.stateNode.containerInfo,yr=!0;break e}N=N.return}if(_n===null)throw Error(t(160));Rm(g,w,h),_n=null,yr=!1;var z=h.alternate;z!==null&&(z.return=null),h.return=null}catch(re){Kt(h,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Am(i,n),i=i.sibling}function Am(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Sr(i,n),Or(n),u&4){try{oa(3,n,n.return),El(3,n)}catch(Je){Kt(n,n.return,Je)}try{oa(5,n,n.return)}catch(Je){Kt(n,n.return,Je)}}break;case 1:Sr(i,n),Or(n),u&512&&a!==null&&Yo(a,a.return);break;case 5:if(Sr(i,n),Or(n),u&512&&a!==null&&Yo(a,a.return),n.flags&32){var h=n.stateNode;try{Le(h,"")}catch(Je){Kt(n,n.return,Je)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,N=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{N==="input"&&g.type==="radio"&&g.name!=null&&pt(h,g),De(N,w);var re=De(N,g);for(w=0;w<z.length;w+=2){var Me=z[w],Te=z[w+1];Me==="style"?ze(h,Te):Me==="dangerouslySetInnerHTML"?qe(h,Te):Me==="children"?Le(h,Te):P(h,Me,Te,re)}switch(N){case"input":lt(h,g);break;case"textarea":T(h,g);break;case"select":var ye=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var He=g.value;He!=null?ct(h,!!g.multiple,He,!1):ye!==!!g.multiple&&(g.defaultValue!=null?ct(h,!!g.multiple,g.defaultValue,!0):ct(h,!!g.multiple,g.multiple?[]:"",!1))}h[Ys]=g}catch(Je){Kt(n,n.return,Je)}}break;case 6:if(Sr(i,n),Or(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Je){Kt(n,n.return,Je)}}break;case 3:if(Sr(i,n),Or(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Os(i.containerInfo)}catch(Je){Kt(n,n.return,Je)}break;case 4:Sr(i,n),Or(n);break;case 13:Sr(i,n),Or(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(ef=K())),u&4&&Cm(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(Cn=(re=Cn)||Me,Sr(i,n),Cn=re):Sr(i,n),Or(n),u&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!Me&&(n.mode&1)!==0)for(je=n,Me=n.child;Me!==null;){for(Te=je=Me;je!==null;){switch(ye=je,He=ye.child,ye.tag){case 0:case 11:case 14:case 15:oa(4,ye,ye.return);break;case 1:Yo(ye,ye.return);var Ye=ye.stateNode;if(typeof Ye.componentWillUnmount=="function"){u=ye,a=ye.return;try{i=u,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(Je){Kt(u,a,Je)}}break;case 5:Yo(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Lm(Te);continue}}He!==null?(He.return=ye,je=He):Lm(Te)}Me=Me.sibling}e:for(Me=null,Te=n;;){if(Te.tag===5){if(Me===null){Me=Te;try{h=Te.stateNode,re?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(N=Te.stateNode,z=Te.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,N.style.display=_e("display",w))}catch(Je){Kt(n,n.return,Je)}}}else if(Te.tag===6){if(Me===null)try{Te.stateNode.nodeValue=re?"":Te.memoizedProps}catch(Je){Kt(n,n.return,Je)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;Me===Te&&(Me=null),Te=Te.return}Me===Te&&(Me=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Sr(i,n),Or(n),u&4&&Cm(n);break;case 21:break;default:Sr(i,n),Or(n)}}function Or(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(wm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Le(h,""),u.flags&=-33);var g=Tm(n);Zc(n,g,h);break;case 3:case 4:var w=u.stateNode.containerInfo,N=Tm(n);Kc(n,N,w);break;default:throw Error(t(161))}}catch(z){Kt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function tx(n,i,a){je=n,bm(n)}function bm(n,i,a){for(var u=(n.mode&1)!==0;je!==null;){var h=je,g=h.child;if(h.tag===22&&u){var w=h.memoizedState!==null||Sl;if(!w){var N=h.alternate,z=N!==null&&N.memoizedState!==null||Cn;N=Sl;var re=Cn;if(Sl=w,(Cn=z)&&!re)for(je=h;je!==null;)w=je,z=w.child,w.tag===22&&w.memoizedState!==null?Dm(h):z!==null?(z.return=w,je=z):Dm(h);for(;g!==null;)je=g,bm(g),g=g.sibling;je=h,Sl=N,Cn=re}Pm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,je=g):Pm(n)}}function Pm(n){for(;je!==null;){var i=je;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Cn||El(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Cn)if(a===null)u.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:xr(i.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Lp(i,g,u);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Lp(i,w,a)}break;case 5:var N=i.stateNode;if(a===null&&i.flags&4){a=N;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var Me=re.memoizedState;if(Me!==null){var Te=Me.dehydrated;Te!==null&&Os(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||i.flags&512&&qc(i)}catch(ye){Kt(i,i.return,ye)}}if(i===n){je=null;break}if(a=i.sibling,a!==null){a.return=i.return,je=a;break}je=i.return}}function Lm(n){for(;je!==null;){var i=je;if(i===n){je=null;break}var a=i.sibling;if(a!==null){a.return=i.return,je=a;break}je=i.return}}function Dm(n){for(;je!==null;){var i=je;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{El(4,i)}catch(z){Kt(i,a,z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(z){Kt(i,h,z)}}var g=i.return;try{qc(i)}catch(z){Kt(i,g,z)}break;case 5:var w=i.return;try{qc(i)}catch(z){Kt(i,w,z)}}}catch(z){Kt(i,i.return,z)}if(i===n){je=null;break}var N=i.sibling;if(N!==null){N.return=i.return,je=N;break}je=i.return}}var nx=Math.ceil,Ml=A.ReactCurrentDispatcher,Jc=A.ReactCurrentOwner,ar=A.ReactCurrentBatchConfig,Ct=0,hn=null,tn=null,xn=0,er=0,qo=Li(0),sn=0,sa=null,lo=0,wl=0,Qc=0,aa=null,Wn=null,ef=0,Ko=1/0,oi=null,Tl=!1,tf=null,Oi=null,Rl=!1,ki=null,Cl=0,la=0,nf=null,Al=-1,bl=0;function Un(){return(Ct&6)!==0?K():Al!==-1?Al:Al=K()}function Bi(n){return(n.mode&1)===0?1:(Ct&2)!==0&&xn!==0?xn&-xn:B0.transition!==null?(bl===0&&(bl=kt()),bl):(n=Rt,n!==0||(n=window.event,n=n===void 0?16:Uh(n.type)),n)}function Er(n,i,a,u){if(50<la)throw la=0,nf=null,Error(t(185));cn(n,a,u),((Ct&2)===0||n!==hn)&&(n===hn&&((Ct&2)===0&&(wl|=a),sn===4&&zi(n,xn)),Xn(n,u),a===1&&Ct===0&&(i.mode&1)===0&&(Ko=K()+500,rl&&Ni()))}function Xn(n,i){var a=n.callbackNode;Dn(n,i);var u=un(n,n===hn?xn:0);if(u===0)a!==null&&C(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&C(a),i===1)n.tag===0?k0(Um.bind(null,n)):xp(Um.bind(null,n)),U0(function(){(Ct&6)===0&&Ni()}),a=null;else{switch(Nr(u)){case 1:a=Ce;break;case 4:a=Oe;break;case 16:a=Xe;break;case 536870912:a=dt;break;default:a=Xe}a=Vm(a,Nm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Nm(n,i){if(Al=-1,bl=0,(Ct&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Zo()&&n.callbackNode!==a)return null;var u=un(n,n===hn?xn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Pl(n,u);else{i=u;var h=Ct;Ct|=2;var g=Fm();(hn!==n||xn!==i)&&(oi=null,Ko=K()+500,co(n,i));do try{ox();break}catch(N){Im(n,N)}while(!0);yc(),Ml.current=g,Ct=h,tn!==null?i=0:(hn=null,xn=0,i=sn)}if(i!==0){if(i===2&&(h=Zr(n),h!==0&&(u=h,i=rf(n,h))),i===1)throw a=sa,co(n,0),zi(n,u),Xn(n,K()),a;if(i===6)zi(n,u);else{if(h=n.current.alternate,(u&30)===0&&!rx(h)&&(i=Pl(n,u),i===2&&(g=Zr(n),g!==0&&(u=g,i=rf(n,g))),i===1))throw a=sa,co(n,0),zi(n,u),Xn(n,K()),a;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:fo(n,Wn,oi);break;case 3:if(zi(n,u),(u&130023424)===u&&(i=ef+500-K(),10<i)){if(un(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Un(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=uc(fo.bind(null,n,Wn,oi),i);break}fo(n,Wn,oi);break;case 4:if(zi(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var w=31-vt(u);g=1<<w,w=i[w],w>h&&(h=w),u&=~g}if(u=h,u=K()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*nx(u/1960))-u,10<u){n.timeoutHandle=uc(fo.bind(null,n,Wn,oi),u);break}fo(n,Wn,oi);break;case 5:fo(n,Wn,oi);break;default:throw Error(t(329))}}}return Xn(n,K()),n.callbackNode===a?Nm.bind(null,n):null}function rf(n,i){var a=aa;return n.current.memoizedState.isDehydrated&&(co(n,i).flags|=256),n=Pl(n,i),n!==2&&(i=Wn,Wn=a,i!==null&&of(i)),n}function of(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function rx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],g=h.getSnapshot;h=h.value;try{if(!vr(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function zi(n,i){for(i&=~Qc,i&=~wl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-vt(i),u=1<<a;n[a]=-1,i&=~u}}function Um(n){if((Ct&6)!==0)throw Error(t(327));Zo();var i=un(n,0);if((i&1)===0)return Xn(n,K()),null;var a=Pl(n,i);if(n.tag!==0&&a===2){var u=Zr(n);u!==0&&(i=u,a=rf(n,u))}if(a===1)throw a=sa,co(n,0),zi(n,i),Xn(n,K()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,fo(n,Wn,oi),Xn(n,K()),null}function sf(n,i){var a=Ct;Ct|=1;try{return n(i)}finally{Ct=a,Ct===0&&(Ko=K()+500,rl&&Ni())}}function uo(n){ki!==null&&ki.tag===0&&(Ct&6)===0&&Zo();var i=Ct;Ct|=1;var a=ar.transition,u=Rt;try{if(ar.transition=null,Rt=1,n)return n()}finally{Rt=u,ar.transition=a,Ct=i,(Ct&6)===0&&Ni()}}function af(){er=qo.current,Vt(qo)}function co(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,N0(a)),tn!==null)for(a=tn.return;a!==null;){var u=a;switch(mc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&tl();break;case 3:jo(),Vt(Hn),Vt(wn),Ac();break;case 5:Rc(u);break;case 4:jo();break;case 13:Vt(Xt);break;case 19:Vt(Xt);break;case 10:Sc(u.type._context);break;case 22:case 23:af()}a=a.return}if(hn=n,tn=n=Hi(n.current,null),xn=er=i,sn=0,sa=null,Qc=wl=lo=0,Wn=aa=null,oo!==null){for(i=0;i<oo.length;i++)if(a=oo[i],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,g=a.pending;if(g!==null){var w=g.next;g.next=h,u.next=w}a.pending=u}oo=null}return n}function Im(n,i){do{var a=tn;try{if(yc(),hl.current=vl,pl){for(var u=jt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}pl=!1}if(ao=0,dn=on=jt=null,ea=!1,ta=0,Jc.current=null,a===null||a.return===null){sn=1,sa=i,tn=null;break}e:{var g=n,w=a.return,N=a,z=i;if(i=xn,N.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var re=z,Me=N,Te=Me.tag;if((Me.mode&1)===0&&(Te===0||Te===11||Te===15)){var ye=Me.alternate;ye?(Me.updateQueue=ye.updateQueue,Me.memoizedState=ye.memoizedState,Me.lanes=ye.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var He=sm(w);if(He!==null){He.flags&=-257,am(He,w,N,g,i),He.mode&1&&om(g,re,i),i=He,z=re;var Ye=i.updateQueue;if(Ye===null){var Je=new Set;Je.add(z),i.updateQueue=Je}else Ye.add(z);break e}else{if((i&1)===0){om(g,re,i),lf();break e}z=Error(t(426))}}else if(Wt&&N.mode&1){var Qt=sm(w);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),am(Qt,w,N,g,i),_c($o(z,N));break e}}g=z=$o(z,N),sn!==4&&(sn=2),aa===null?aa=[g]:aa.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var q=rm(g,z,i);Pp(g,q);break e;case 1:N=z;var j=g.type,ee=g.stateNode;if((g.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Oi===null||!Oi.has(ee)))){g.flags|=65536,i&=-i,g.lanes|=i;var Pe=im(g,N,i);Pp(g,Pe);break e}}g=g.return}while(g!==null)}km(a)}catch(Qe){i=Qe,tn===a&&a!==null&&(tn=a=a.return);continue}break}while(!0)}function Fm(){var n=Ml.current;return Ml.current=vl,n===null?vl:n}function lf(){(sn===0||sn===3||sn===2)&&(sn=4),hn===null||(lo&268435455)===0&&(wl&268435455)===0||zi(hn,xn)}function Pl(n,i){var a=Ct;Ct|=2;var u=Fm();(hn!==n||xn!==i)&&(oi=null,co(n,i));do try{ix();break}catch(h){Im(n,h)}while(!0);if(yc(),Ct=a,Ml.current=u,tn!==null)throw Error(t(261));return hn=null,xn=0,sn}function ix(){for(;tn!==null;)Om(tn)}function ox(){for(;tn!==null&&!$();)Om(tn)}function Om(n){var i=Hm(n.alternate,n,er);n.memoizedProps=n.pendingProps,i===null?km(n):tn=i,Jc.current=null}function km(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Z0(a,i,er),a!==null){tn=a;return}}else{if(a=J0(a,i),a!==null){a.flags&=32767,tn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,tn=null;return}}if(i=i.sibling,i!==null){tn=i;return}tn=i=n}while(i!==null);sn===0&&(sn=5)}function fo(n,i,a){var u=Rt,h=ar.transition;try{ar.transition=null,Rt=1,sx(n,i,a,u)}finally{ar.transition=h,Rt=u}return null}function sx(n,i,a,u){do Zo();while(ki!==null);if((Ct&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(vn(n,g),n===hn&&(tn=hn=null,xn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Rl||(Rl=!0,Vm(Xe,function(){return Zo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=ar.transition,ar.transition=null;var w=Rt;Rt=1;var N=Ct;Ct|=4,Jc.current=null,ex(n,a),Am(a,n),R0(ac),Ha=!!sc,ac=sc=null,n.current=a,tx(a),oe(),Ct=N,Rt=w,ar.transition=g}else n.current=a;if(Rl&&(Rl=!1,ki=n,Cl=h),g=n.pendingLanes,g===0&&(Oi=null),xt(a.stateNode),Xn(n,K()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(Tl)throw Tl=!1,n=tf,tf=null,n;return(Cl&1)!==0&&n.tag!==0&&Zo(),g=n.pendingLanes,(g&1)!==0?n===nf?la++:(la=0,nf=n):la=0,Ni(),null}function Zo(){if(ki!==null){var n=Nr(Cl),i=ar.transition,a=Rt;try{if(ar.transition=null,Rt=16>n?16:n,ki===null)var u=!1;else{if(n=ki,ki=null,Cl=0,(Ct&6)!==0)throw Error(t(331));var h=Ct;for(Ct|=4,je=n.current;je!==null;){var g=je,w=g.child;if((je.flags&16)!==0){var N=g.deletions;if(N!==null){for(var z=0;z<N.length;z++){var re=N[z];for(je=re;je!==null;){var Me=je;switch(Me.tag){case 0:case 11:case 15:oa(8,Me,g)}var Te=Me.child;if(Te!==null)Te.return=Me,je=Te;else for(;je!==null;){Me=je;var ye=Me.sibling,He=Me.return;if(Mm(Me),Me===re){je=null;break}if(ye!==null){ye.return=He,je=ye;break}je=He}}}var Ye=g.alternate;if(Ye!==null){var Je=Ye.child;if(Je!==null){Ye.child=null;do{var Qt=Je.sibling;Je.sibling=null,Je=Qt}while(Je!==null)}}je=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,je=w;else e:for(;je!==null;){if(g=je,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:oa(9,g,g.return)}var q=g.sibling;if(q!==null){q.return=g.return,je=q;break e}je=g.return}}var j=n.current;for(je=j;je!==null;){w=je;var ee=w.child;if((w.subtreeFlags&2064)!==0&&ee!==null)ee.return=w,je=ee;else e:for(w=j;je!==null;){if(N=je,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:El(9,N)}}catch(Qe){Kt(N,N.return,Qe)}if(N===w){je=null;break e}var Pe=N.sibling;if(Pe!==null){Pe.return=N.return,je=Pe;break e}je=N.return}}if(Ct=h,Ni(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(ut,n)}catch{}u=!0}return u}finally{Rt=a,ar.transition=i}}return!1}function Bm(n,i,a){i=$o(a,i),i=rm(n,i,1),n=Ii(n,i,1),i=Un(),n!==null&&(cn(n,1,i),Xn(n,i))}function Kt(n,i,a){if(n.tag===3)Bm(n,n,a);else for(;i!==null;){if(i.tag===3){Bm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Oi===null||!Oi.has(u))){n=$o(a,n),n=im(i,n,1),i=Ii(i,n,1),n=Un(),i!==null&&(cn(i,1,n),Xn(i,n));break}}i=i.return}}function ax(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Un(),n.pingedLanes|=n.suspendedLanes&a,hn===n&&(xn&a)===a&&(sn===4||sn===3&&(xn&130023424)===xn&&500>K()-ef?co(n,0):Qc|=a),Xn(n,i)}function zm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ut,Ut<<=1,(Ut&130023424)===0&&(Ut=4194304)));var a=Un();n=ni(n,i),n!==null&&(cn(n,i,a),Xn(n,a))}function lx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),zm(n,a)}function ux(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),zm(n,a)}var Hm;Hm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Hn.current)Gn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Gn=!1,K0(n,i,a);Gn=(n.flags&131072)!==0}else Gn=!1,Wt&&(i.flags&1048576)!==0&&yp(i,ol,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;yl(n,i),n=i.pendingProps;var h=Bo(i,wn.current);Xo(i,a),h=Lc(null,i,u,n,h,a);var g=Dc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Vn(u)?(g=!0,nl(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,wc(i),h.updater=_l,i.stateNode=h,h._reactInternals=i,kc(i,u,n,a),i=Vc(null,i,u,!0,g,a)):(i.tag=0,Wt&&g&&pc(i),Nn(null,i,h,a),i=i.child),i;case 16:u=i.elementType;e:{switch(yl(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=fx(u),n=xr(u,n),h){case 0:i=Hc(null,i,u,n,a);break e;case 1:i=hm(null,i,u,n,a);break e;case 11:i=lm(null,i,u,n,a);break e;case 14:i=um(null,i,u,xr(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:xr(u,h),Hc(n,i,u,h,a);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:xr(u,h),hm(n,i,u,h,a);case 3:e:{if(pm(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,h=g.element,bp(n,i),fl(i,u,null,a);var w=i.memoizedState;if(u=w.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=$o(Error(t(423)),i),i=mm(n,i,u,a,h);break e}else if(u!==h){h=$o(Error(t(424)),i),i=mm(n,i,u,a,h);break e}else for(Qn=Pi(i.stateNode.containerInfo.firstChild),Jn=i,Wt=!0,_r=null,a=Cp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Vo(),u===h){i=ii(n,i,a);break e}Nn(n,i,u,a)}i=i.child}return i;case 5:return Dp(i),n===null&&vc(i),u=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,w=h.children,lc(u,h)?w=null:g!==null&&lc(u,g)&&(i.flags|=32),dm(n,i),Nn(n,i,w,a),i.child;case 6:return n===null&&vc(i),null;case 13:return gm(n,i,a);case 4:return Tc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Go(i,null,u,a):Nn(n,i,u,a),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:xr(u,h),lm(n,i,u,h,a);case 7:return Nn(n,i,i.pendingProps,a),i.child;case 8:return Nn(n,i,i.pendingProps.children,a),i.child;case 12:return Nn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,g=i.memoizedProps,w=h.value,Bt(ll,u._currentValue),u._currentValue=w,g!==null)if(vr(g.value,w)){if(g.children===h.children&&!Hn.current){i=ii(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var N=g.dependencies;if(N!==null){w=g.child;for(var z=N.firstContext;z!==null;){if(z.context===u){if(g.tag===1){z=ri(-1,a&-a),z.tag=2;var re=g.updateQueue;if(re!==null){re=re.shared;var Me=re.pending;Me===null?z.next=z:(z.next=Me.next,Me.next=z),re.pending=z}}g.lanes|=a,z=g.alternate,z!==null&&(z.lanes|=a),Ec(g.return,a,i),N.lanes|=a;break}z=z.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,N=w.alternate,N!==null&&(N.lanes|=a),Ec(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Nn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,Xo(i,a),h=or(h),u=u(h),i.flags|=1,Nn(n,i,u,a),i.child;case 14:return u=i.type,h=xr(u,i.pendingProps),h=xr(u.type,h),um(n,i,u,h,a);case 15:return cm(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:xr(u,h),yl(n,i),i.tag=1,Vn(u)?(n=!0,nl(i)):n=!1,Xo(i,a),tm(i,u,h),kc(i,u,h,a),Vc(null,i,u,!0,n,a);case 19:return _m(n,i,a);case 22:return fm(n,i,a)}throw Error(t(156,i.tag))};function Vm(n,i){return En(n,i)}function cx(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lr(n,i,a,u){return new cx(n,i,a,u)}function uf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function fx(n){if(typeof n=="function")return uf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===se)return 11;if(n===de)return 14}return 2}function Hi(n,i){var a=n.alternate;return a===null?(a=lr(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ll(n,i,a,u,h,g){var w=2;if(u=n,typeof n=="function")uf(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case O:return ho(a.children,h,g,i);case W:w=8,h|=8;break;case b:return n=lr(12,a,i,h|2),n.elementType=b,n.lanes=g,n;case Q:return n=lr(13,a,i,h),n.elementType=Q,n.lanes=g,n;case le:return n=lr(19,a,i,h),n.elementType=le,n.lanes=g,n;case he:return Dl(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:w=10;break e;case V:w=9;break e;case se:w=11;break e;case de:w=14;break e;case ue:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=lr(w,a,i,h),i.elementType=n,i.type=u,i.lanes=g,i}function ho(n,i,a,u){return n=lr(7,n,u,i),n.lanes=a,n}function Dl(n,i,a,u){return n=lr(22,n,u,i),n.elementType=he,n.lanes=a,n.stateNode={isHidden:!1},n}function cf(n,i,a){return n=lr(6,n,null,i),n.lanes=a,n}function ff(n,i,a){return i=lr(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function dx(n,i,a,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mn(0),this.expirationTimes=Mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function df(n,i,a,u,h,g,w,N,z){return n=new dx(n,i,a,N,z),i===1?(i=1,g===!0&&(i|=8)):i=0,g=lr(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(g),n}function hx(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Gm(n){if(!n)return Di;n=n._reactInternals;e:{if(Et(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Vn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Vn(a))return vp(n,a,i)}return i}function Wm(n,i,a,u,h,g,w,N,z){return n=df(a,u,!0,n,h,g,w,N,z),n.context=Gm(null),a=n.current,u=Un(),h=Bi(a),g=ri(u,h),g.callback=i??null,Ii(a,g,h),n.current.lanes=h,cn(n,h,u),Xn(n,u),n}function Nl(n,i,a,u){var h=i.current,g=Un(),w=Bi(h);return a=Gm(a),i.context===null?i.context=a:i.pendingContext=a,i=ri(g,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Ii(h,i,w),n!==null&&(Er(n,h,w,g),cl(n,h,w)),w}function Ul(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function Xm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function hf(n,i){Xm(n,i),(n=n.alternate)&&Xm(n,i)}function px(){return null}var jm=typeof reportError=="function"?reportError:function(n){console.error(n)};function pf(n){this._internalRoot=n}Il.prototype.render=pf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Nl(n,i,null,null)},Il.prototype.unmount=pf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;uo(function(){Nl(null,n,null,null)}),i[Jr]=null}};function Il(n){this._internalRoot=n}Il.prototype.unstable_scheduleHydration=function(n){if(n){var i=bh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Ci.length&&i!==0&&i<Ci[a].priority;a++);Ci.splice(a,0,n),a===0&&Dh(n)}};function mf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Fl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function $m(){}function mx(n,i,a,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var re=Ul(w);g.call(re)}}var w=Wm(i,u,n,0,null,!1,!1,"",$m);return n._reactRootContainer=w,n[Jr]=w.current,js(n.nodeType===8?n.parentNode:n),uo(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var N=u;u=function(){var re=Ul(z);N.call(re)}}var z=df(n,0,!1,null,null,!1,!1,"",$m);return n._reactRootContainer=z,n[Jr]=z.current,js(n.nodeType===8?n.parentNode:n),uo(function(){Nl(i,z,a,u)}),z}function Ol(n,i,a,u,h){var g=a._reactRootContainer;if(g){var w=g;if(typeof h=="function"){var N=h;h=function(){var z=Ul(w);N.call(z)}}Nl(i,w,n,h)}else w=mx(a,i,n,h,u);return Ul(w)}Ch=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=yt(i.pendingLanes);a!==0&&(fn(i,a|1),Xn(i,K()),(Ct&6)===0&&(Ko=K()+500,Ni()))}break;case 13:uo(function(){var u=ni(n,1);if(u!==null){var h=Un();Er(u,n,1,h)}}),hf(n,1)}},Bu=function(n){if(n.tag===13){var i=ni(n,134217728);if(i!==null){var a=Un();Er(i,n,134217728,a)}hf(n,134217728)}},Ah=function(n){if(n.tag===13){var i=Bi(n),a=ni(n,i);if(a!==null){var u=Un();Er(a,n,i,u)}hf(n,i)}},bh=function(){return Rt},Ph=function(n,i){var a=Rt;try{return Rt=n,i()}finally{Rt=a}},Ne=function(n,i,a){switch(i){case"input":if(lt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var h=el(u);if(!h)throw Error(t(90));it(u),lt(u,h)}}}break;case"textarea":T(n,a);break;case"select":i=a.value,i!=null&&ct(n,!!a.multiple,i,!1)}},ft=sf,Pt=uo;var gx={usingClientEntryPoint:!1,Events:[qs,Oo,el,ge,Fe,sf]},ua={findFiberByHostInstance:to,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vx={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Sn(n),n===null?null:n.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||px,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{ut=kl.inject(vx),$e=kl}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gx,jn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mf(i))throw Error(t(200));return hx(n,i,null,a)},jn.createRoot=function(n,i){if(!mf(n))throw Error(t(299));var a=!1,u="",h=jm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=df(n,1,!1,null,null,a,!1,u,h),n[Jr]=i.current,js(n.nodeType===8?n.parentNode:n),new pf(i)},jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Sn(i),n=n===null?null:n.stateNode,n},jn.flushSync=function(n){return uo(n)},jn.hydrate=function(n,i,a){if(!Fl(i))throw Error(t(200));return Ol(null,n,i,!0,a)},jn.hydrateRoot=function(n,i,a){if(!mf(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,h=!1,g="",w=jm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Wm(i,null,n,1,a??null,h,!1,g,w),n[Jr]=i.current,js(n),u)for(n=0;n<u.length;n++)a=u[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Il(i)},jn.render=function(n,i,a){if(!Fl(i))throw Error(t(200));return Ol(null,n,i,!1,a)},jn.unmountComponentAtNode=function(n){if(!Fl(n))throw Error(t(40));return n._reactRootContainer?(uo(function(){Ol(null,null,n,!1,function(){n._reactRootContainer=null,n[Jr]=null})}),!0):!1},jn.unstable_batchedUpdates=sf,jn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Fl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ol(n,i,a,!1,u)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var tg;function Tx(){if(tg)return _f.exports;tg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),_f.exports=wx(),_f.exports}var ng;function Rx(){if(ng)return Bl;ng=1;var r=Tx();return Bl.createRoot=r.createRoot,Bl.hydrateRoot=r.hydrateRoot,Bl}var Cx=Rx();const Ax=Av(Cx);var Kd=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Pv=/^[\\/]{2}/;function bx(r,e){return e+r.replace(/\\/g,"/")}var rg="popstate";function ig(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function Px(r={}){function e(o,s){let l=s.state?.masked,{pathname:c,search:f,hash:d}=l||o.location;return sd("",{pathname:c,search:f,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default",l?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function t(o,s){return typeof s=="string"?s:Ma(s)}return Dx(e,t,null,r)}function $t(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Yr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Lx(){return Math.random().toString(36).substring(2,10)}function og(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function sd(r,e,t=null,o,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Rs(e):e,state:t,key:e&&e.key||o||Lx(),mask:s}}function Ma({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Rs(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let o=r.indexOf("?");o>=0&&(e.search=r.substring(o),r=r.substring(0,o)),r&&(e.pathname=r)}return e}function Dx(r,e,t,o={}){let{window:s=document.defaultView,v5Compat:l=!1}=o,c=s.history,f="POP",d=null,p=m();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function m(){return(c.state||{idx:null}).idx}function v(){f="POP";let x=m(),_=x==null?null:x-p;p=x,d&&d({action:f,location:M.location,delta:_})}function y(x,_){f="PUSH";let L=ig(x)?x:sd(M.location,x,_);p=m()+1;let P=og(L,p),A=M.createHref(L.mask||L);try{c.pushState(P,"",A)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;s.location.assign(A)}l&&d&&d({action:f,location:M.location,delta:1})}function S(x,_){f="REPLACE";let L=ig(x)?x:sd(M.location,x,_);p=m();let P=og(L,p),A=M.createHref(L.mask||L);c.replaceState(P,"",A),l&&d&&d({action:f,location:M.location,delta:0})}function E(x){return Nx(s,x)}let M={get action(){return f},get location(){return r(s,c)},listen(x){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(rg,v),d=x,()=>{s.removeEventListener(rg,v),d=null}},createHref(x){return e(s,x)},createURL:E,encodeLocation(x){let _=E(x);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:S,go(x){return c.go(x)}};return M}function Nx(r,e,t=!1){let o="http://localhost";r&&(o=r.location.origin!=="null"?r.location.origin:r.location.href),$t(o,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Ma(e);return s=s.replace(/ $/,"%20"),!t&&Pv.test(s)&&(s=o+s),new URL(s,o)}function Lv(r,e,t="/"){return Ux(r,e,t,!1)}function Ux(r,e,t,o,s){let l=typeof e=="string"?Rs(e):e,c=_i(l.pathname||"/",t);if(c==null)return null;let f=Ix(r),d=null,p=jx(c);for(let m=0;d==null&&m<f.length;++m)d=Xx(f[m],p,o);return d}function Ix(r){let e=Dv(r);return Fx(e),e}function Dv(r,e=[],t=[],o="",s=!1){let l=(c,f,d=s,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(o)&&d)return;$t(m.relativePath.startsWith(o),`Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(o.length)}let v=br([o,m.relativePath]),y=t.concat(m);c.children&&c.children.length>0&&($t(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Dv(c.children,e,y,v,d)),!(c.path==null&&!c.index)&&e.push({path:v,score:Gx(v,c.index),routesMeta:y.map((S,E)=>{let[M,x]=Iv(S.relativePath,S.caseSensitive,E===y.length-1);return{...S,matcher:M,compiledParams:x}})})};return r.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let d of Nv(c.path))l(c,f,!0,d)}),e}function Nv(r){let e=r.split("/");if(e.length===0)return[];let[t,...o]=e,s=t.endsWith("?"),l=t.replace(/\?$/,"");if(o.length===0)return s?[l,""]:[l];let c=Nv(o.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),s&&f.push(...c),f.map(d=>r.startsWith("/")&&d===""?"/":d)}function Fx(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Wx(e.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}var Ox=/^:[\w-]+$/,kx=3,Bx=2,zx=1,Hx=10,Vx=-2,sg=r=>r==="*";function Gx(r,e){let t=r.split("/"),o=t.length;return t.some(sg)&&(o+=Vx),e&&(o+=Bx),t.filter(s=>!sg(s)).reduce((s,l)=>s+(Ox.test(l)?kx:l===""?zx:Hx),o)}function Wx(r,e){return r.length===e.length&&r.slice(0,-1).every((o,s)=>o===e[s])?r[r.length-1]-e[e.length-1]:0}function Xx(r,e,t=!1){let{routesMeta:o}=r,s={},l="/",c=[];for(let f=0;f<o.length;++f){let d=o[f],p=f===o.length-1,m=l==="/"?e:e.slice(l.length)||"/",v={path:d.relativePath,caseSensitive:d.caseSensitive,end:p},y=d.matcher&&d.compiledParams?Uv(v,m,d.matcher,d.compiledParams):wu(v,m),S=d.route;if(!y&&p&&t&&!o[o.length-1].route.index&&(y=wu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!y)return null;Object.assign(s,y.params),c.push({params:s,pathname:br([l,y.pathname]),pathnameBase:qx(br([l,y.pathnameBase])),route:S}),y.pathnameBase!=="/"&&(l=br([l,y.pathnameBase]))}return c}function wu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,o]=Iv(r.path,r.caseSensitive,r.end);return Uv(r,e,t,o)}function Uv(r,e,t,o){let s=e.match(t);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:o.reduce((p,{paramName:m,isOptional:v},y)=>{if(m==="*"){let E=f[y]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[y];return v&&!S?p[m]=void 0:p[m]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function Iv(r,e=!1,t=!0){Yr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d,p,m)=>{if(o.push({paramName:f,isOptional:d!=null}),d){let v=m.charAt(p+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(o.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),o]}function jx(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Yr(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function _i(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,o=r.charAt(t);return o&&o!=="/"?null:r.slice(t)||"/"}function $x(r,e="/"){let{pathname:t,search:o="",hash:s=""}=typeof r=="string"?Rs(r):r,l;return t?(t=Ov(t),t.startsWith("/")?l=ag(t.substring(1),"/"):l=ag(t,e)):l=e,{pathname:l,search:Kx(o),hash:Zx(s)}}function ag(r,e){let t=Tu(e).split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Sf(r,e,t,o){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Yx(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Fv(r){let e=Yx(r);return e.map((t,o)=>o===e.length-1?t.pathname:t.pathnameBase)}function Zd(r,e,t,o=!1){let s;typeof r=="string"?s=Rs(r):(s={...r},$t(!s.pathname||!s.pathname.includes("?"),Sf("?","pathname","search",s)),$t(!s.pathname||!s.pathname.includes("#"),Sf("#","pathname","hash",s)),$t(!s.search||!s.search.includes("#"),Sf("#","search","hash",s)));let l=r===""||s.pathname==="",c=l?"/":s.pathname,f;if(c==null)f=t;else{let v=e.length-1;if(!o&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),v-=1;s.pathname=y.join("/")}f=v>=0?e[v]:"/"}let d=$x(s,f),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(p||m)&&(d.pathname+="/"),d}var Ov=r=>r.replace(/[\\/]{2,}/g,"/"),br=r=>Ov(r.join("/")),Tu=r=>r.replace(/\/+$/,""),qx=r=>Tu(r).replace(/^\/*/,"/"),Kx=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Zx=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Jx=class{constructor(r,e,t,o=!1){this.status=r,this.statusText=e||"",this.internal=o,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Qx(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function ey(r){let e=r.map(t=>t.route.path).filter(Boolean);return br(e)||"/"}var kv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Bv(r,e){let t=r;if(typeof t!="string"||!Kd.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let o=t,s=!1;if(kv)try{let l=new URL(window.location.href),c=Pv.test(t)?new URL(bx(t,l.protocol)):new URL(t),f=_i(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:s=!0}catch{Yr(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:s,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var zv=["POST","PUT","PATCH","DELETE"];new Set(zv);var ty=["GET",...zv];new Set(ty);var ny=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function ry(r){try{return ny.includes(new URL(r).protocol)}catch{return!1}}var Cs=k.createContext(null);Cs.displayName="DataRouter";var bu=k.createContext(null);bu.displayName="DataRouterState";var Hv=k.createContext(!1);function iy(){return k.useContext(Hv)}var Vv=k.createContext({isTransitioning:!1});Vv.displayName="ViewTransition";var oy=k.createContext(new Map);oy.displayName="Fetchers";var sy=k.createContext(null);sy.displayName="Await";var pr=k.createContext(null);pr.displayName="Navigation";var Da=k.createContext(null);Da.displayName="Location";var yi=k.createContext({outlet:null,matches:[],isDataRoute:!1});yi.displayName="Route";var Jd=k.createContext(null);Jd.displayName="RouteError";var Gv="REACT_ROUTER_ERROR",ay="REDIRECT",ly="ROUTE_ERROR_RESPONSE";function uy(r){if(r.startsWith(`${Gv}:${ay}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function cy(r){if(r.startsWith(`${Gv}:${ly}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Jx(e.status,e.statusText,e.data)}catch{}}function fy(r,{relative:e}={}){$t(Na(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:o}=k.useContext(pr),{hash:s,pathname:l,search:c}=Ua(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:br([t,l])),o.createHref({pathname:f,search:c,hash:s})}function Na(){return k.useContext(Da)!=null}function Si(){return $t(Na(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Da).location}var Wv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xv(r){k.useContext(pr).static||k.useLayoutEffect(r)}function dy(){let{isDataRoute:r}=k.useContext(yi);return r?Ty():hy()}function hy(){$t(Na(),"useNavigate() may be used only in the context of a <Router> component.");let r=k.useContext(Cs),{basename:e,navigator:t}=k.useContext(pr),{matches:o}=k.useContext(yi),{pathname:s}=Si(),l=JSON.stringify(Fv(o)),c=k.useRef(!1);return Xv(()=>{c.current=!0}),k.useCallback((d,p={})=>{if(Yr(c.current,Wv),!c.current)return;if(typeof d=="number"){t.go(d);return}let m=Zd(d,JSON.parse(l),s,p.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:br([e,m.pathname])),(p.replace?t.replace:t.push)(m,p.state,p)},[e,t,l,s,r])}k.createContext(null);function Ua(r,{relative:e}={}){let{matches:t}=k.useContext(yi),{pathname:o}=Si(),s=JSON.stringify(Fv(t));return k.useMemo(()=>Zd(r,JSON.parse(s),o,e==="path"),[r,s,o,e])}function py(r,e){return jv(r,e)}function jv(r,e,t){$t(Na(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=k.useContext(pr),{matches:s}=k.useContext(yi),l=s[s.length-1],c=l?l.params:{},f=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let x=p&&p.path||"";Yv(f,!p||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let m=Si(),v;if(e){let x=typeof e=="string"?Rs(e):e;$t(d==="/"||x.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${x.pathname}" was given in the \`location\` prop.`),v=x}else v=m;let y=v.pathname||"/",S=y;if(d!=="/"){let x=d.replace(/^\//,"").split("/");S="/"+y.replace(/^\//,"").split("/").slice(x.length).join("/")}let E=t&&t.state.matches.length?t.state.matches.map(x=>Object.assign(x,{route:t.manifest[x.route.id]||x.route})):Lv(r,{pathname:S});Yr(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Yr(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=xy(E&&E.map(x=>Object.assign({},x,{params:Object.assign({},c,x.params),pathname:br([d,o.encodeLocation?o.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?d:br([d,o.encodeLocation?o.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),s,t);return e&&M?k.createElement(Da.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},M):M}function my(){let r=wy(),e=Qx(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},l={padding:"2px 4px",backgroundColor:o},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:l},"ErrorBoundary")," or"," ",k.createElement("code",{style:l},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),t?k.createElement("pre",{style:s},t):null,c)}var gy=k.createElement(my,null),$v=class extends k.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=cy(r.digest);t&&(r=t)}let e=r!==void 0?k.createElement(yi.Provider,{value:this.props.routeContext},k.createElement(Jd.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?k.createElement(vy,{error:r},e):e}};$v.contextType=Hv;var Ef=new WeakMap;function vy({children:r,error:e}){let{basename:t}=k.useContext(pr);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let o=uy(e.digest);if(o){let s=Ef.get(e);if(s)throw s;let l=Bv(o.location,t),c=l.absoluteURL||l.to;if(ry(c))throw new Error("Invalid redirect location");if(kv&&!Ef.get(e))if(l.isExternal||o.reloadDocument)window.location.href=c;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:o.replace}));throw Ef.set(e,f),f}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return r}function _y({routeContext:r,match:e,children:t}){let o=k.useContext(Cs);return o&&o.static&&o.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=e.route.id),k.createElement(yi.Provider,{value:r},t)}function xy(r,e=[],t){let o=t?.state;if(r==null){if(!o)return null;if(o.errors)r=o.matches;else if(e.length===0&&!o.initialized&&o.matches.length>0)r=o.matches;else return null}let s=r,l=o?.errors;if(l!=null){let m=s.findIndex(v=>v.route.id&&l?.[v.route.id]!==void 0);$t(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,m+1))}let c=!1,f=-1;if(t&&o){c=o.renderFallback;for(let m=0;m<s.length;m++){let v=s[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=m),v.route.id){let{loaderData:y,errors:S}=o,E=v.route.loader&&!y.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(c=!0),f>=0?s=s.slice(0,f+1):s=[s[0]];break}}}}let d=t?.onError,p=o&&d?(m,v)=>{d(m,{location:o.location,params:o.matches?.[0]?.params??{},pattern:ey(o.matches),errorInfo:v})}:void 0;return s.reduceRight((m,v,y)=>{let S,E=!1,M=null,x=null;o&&(S=l&&v.route.id?l[v.route.id]:void 0,M=v.route.errorElement||gy,c&&(f<0&&y===0?(Yv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,x=null):f===y&&(E=!0,x=v.route.hydrateFallbackElement||null)));let _=e.concat(s.slice(0,y+1)),L=()=>{let P;return S?P=M:E?P=x:v.route.Component?P=k.createElement(v.route.Component,null):v.route.element?P=v.route.element:P=m,k.createElement(_y,{match:v,routeContext:{outlet:m,matches:_,isDataRoute:o!=null},children:P})};return o&&(v.route.ErrorBoundary||v.route.errorElement||y===0)?k.createElement($v,{location:o.location,revalidation:o.revalidation,component:M,error:S,children:L(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):L()},null)}function Qd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yy(r){let e=k.useContext(Cs);return $t(e,Qd(r)),e}function Sy(r){let e=k.useContext(bu);return $t(e,Qd(r)),e}function Ey(r){let e=k.useContext(yi);return $t(e,Qd(r)),e}function eh(r){let e=Ey(r),t=e.matches[e.matches.length-1];return $t(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function My(){return eh("useRouteId")}function wy(){let r=k.useContext(Jd),e=Sy("useRouteError"),t=eh("useRouteError");return r!==void 0?r:e.errors?.[t]}function Ty(){let{router:r}=yy("useNavigate"),e=eh("useNavigate"),t=k.useRef(!1);return Xv(()=>{t.current=!0}),k.useCallback(async(s,l={})=>{Yr(t.current,Wv),t.current&&(typeof s=="number"?await r.navigate(s):await r.navigate(s,{fromRouteId:e,...l}))},[r,e])}var lg={};function Yv(r,e,t){!e&&!lg[r]&&(lg[r]=!0,Yr(!1,t))}k.memo(Ry);function Ry({routes:r,manifest:e,future:t,state:o,isStatic:s,onError:l}){return jv(r,void 0,{manifest:e,state:o,isStatic:s,onError:l})}function pu(r){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cy({basename:r="/",children:e=null,location:t,navigationType:o="POP",navigator:s,static:l=!1,useTransitions:c}){$t(!Na(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),d=k.useMemo(()=>({basename:f,navigator:s,static:l,useTransitions:c,future:{}}),[f,s,l,c]);typeof t=="string"&&(t=Rs(t));let{pathname:p="/",search:m="",hash:v="",state:y=null,key:S="default",mask:E}=t,M=k.useMemo(()=>{let x=_i(p,f);return x==null?null:{location:{pathname:x,search:m,hash:v,state:y,key:S,mask:E},navigationType:o}},[f,p,m,v,y,S,o,E]);return Yr(M!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:k.createElement(pr.Provider,{value:d},k.createElement(Da.Provider,{children:e,value:M}))}function Ay({children:r,location:e}){return py(ad(r),e)}function ad(r,e=[]){let t=[];return k.Children.forEach(r,(o,s)=>{if(!k.isValidElement(o))return;let l=[...e,s];if(o.type===k.Fragment){t.push.apply(t,ad(o.props.children,l));return}$t(o.type===pu,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!o.props.index||!o.props.children,"An index route cannot have child routes.");let c={id:o.props.id||l.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(c.children=ad(o.props.children,l)),t.push(c)}),t}var mu="get",gu="application/x-www-form-urlencoded";function Pu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function by(r){return Pu(r)&&r.tagName.toLowerCase()==="button"}function Py(r){return Pu(r)&&r.tagName.toLowerCase()==="form"}function Ly(r){return Pu(r)&&r.tagName.toLowerCase()==="input"}function Dy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Ny(r,e){return r.button===0&&(!e||e==="_self")&&!Dy(r)}var zl=null;function Uy(){if(zl===null)try{new FormData(document.createElement("form"),0),zl=!1}catch{zl=!0}return zl}var Iy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mf(r){return r!=null&&!Iy.has(r)?(Yr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gu}"`),null):r}function Fy(r,e){let t,o,s,l,c;if(Py(r)){let f=r.getAttribute("action");o=f?_i(f,e):null,t=r.getAttribute("method")||mu,s=Mf(r.getAttribute("enctype"))||gu,l=new FormData(r)}else if(by(r)||Ly(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=r.getAttribute("formaction")||f.getAttribute("action");if(o=d?_i(d,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||mu,s=Mf(r.getAttribute("formenctype"))||Mf(f.getAttribute("enctype"))||gu,l=new FormData(f,r),!Uy()){let{name:p,type:m,value:v}=r;if(m==="image"){let y=p?`${p}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else p&&l.append(p,v)}}else{if(Pu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=mu,o=null,s=gu,c=r}return l&&s==="text/plain"&&(c=l,l=void 0),{action:o,method:t.toLowerCase(),encType:s,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function th(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function qv(r,e,t,o){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${o}`:s.pathname=`${s.pathname}.${o}`:s.pathname==="/"?s.pathname=`_root.${o}`:e&&_i(s.pathname,e)==="/"?s.pathname=`${Tu(e)}/_root.${o}`:s.pathname=`${Tu(s.pathname)}.${o}`,s}async function Oy(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ky(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function By(r,e,t){let o=await Promise.all(r.map(async s=>{let l=e.routes[s.route.id];if(l){let c=await Oy(l,t);return c.links?c.links():[]}return[]}));return Gy(o.flat(1).filter(ky).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function ug(r,e,t,o,s,l){let c=(d,p)=>t[p]?d.route.id!==t[p].route.id:!0,f=(d,p)=>t[p].pathname!==d.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==d.params["*"];return l==="assets"?e.filter((d,p)=>c(d,p)||f(d,p)):l==="data"?e.filter((d,p)=>{let m=o.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(c(d,p)||f(d,p))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function zy(r,e,{includeHydrateFallback:t}={}){return Hy(r.map(o=>{let s=e.routes[o.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function Hy(r){return[...new Set(r)]}function Vy(r){let e={},t=Object.keys(r).sort();for(let o of t)e[o]=r[o];return e}function Gy(r,e){let t=new Set;return new Set(e),r.reduce((o,s)=>{let l=JSON.stringify(Vy(s));return t.has(l)||(t.add(l),o.push({key:l,link:s})),o},[])}function nh(){let r=k.useContext(Cs);return th(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Wy(){let r=k.useContext(bu);return th(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var rh=k.createContext(void 0);rh.displayName="FrameworkContext";function Lu(){let r=k.useContext(rh);return th(r,"You must render this element inside a <HydratedRouter> element"),r}function Xy(r,e){let t=k.useContext(rh),[o,s]=k.useState(!1),[l,c]=k.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=e,y=k.useRef(null);k.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let M=_=>{_.forEach(L=>{c(L.isIntersecting)})},x=new IntersectionObserver(M,{threshold:.5});return y.current&&x.observe(y.current),()=>{x.disconnect()}}},[r]),k.useEffect(()=>{if(o){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[o]);let S=()=>{s(!0)},E=()=>{s(!1),c(!1)};return t?r!=="intent"?[l,y,{}]:[l,y,{onFocus:fa(f,S),onBlur:fa(d,E),onMouseEnter:fa(p,S),onMouseLeave:fa(m,E),onTouchStart:fa(v,S)}]:[!1,y,{}]}function fa(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function jy({page:r,...e}){let t=iy(),{nonce:o}=Lu(),{router:s}=nh(),l=k.useMemo(()=>Lv(s.routes,r,s.basename),[s.routes,r,s.basename]);return l?(e.nonce==null&&o&&(e={...e,nonce:o}),t?k.createElement(Yy,{page:r,matches:l,...e}):k.createElement(qy,{page:r,matches:l,...e})):null}function $y(r){let{manifest:e,routeModules:t}=Lu(),[o,s]=k.useState([]);return k.useEffect(()=>{let l=!1;return By(r,e,t).then(c=>{l||s(c)}),()=>{l=!0}},[r,e,t]),o}function Yy({page:r,matches:e,...t}){let o=Si(),{future:s}=Lu(),{basename:l}=nh(),c=k.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let f=qv(r,l,s.v8_trailingSlashAwareDataRequests,"rsc"),d=!1,p=[];for(let m of e)typeof m.route.shouldRevalidate=="function"?d=!0:p.push(m.route.id);return d&&p.length>0&&f.searchParams.set("_routes",p.join(",")),[f.pathname+f.search]},[l,s.v8_trailingSlashAwareDataRequests,r,o,e]);return k.createElement(k.Fragment,null,c.map(f=>k.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...t})))}function qy({page:r,matches:e,...t}){let o=Si(),{future:s,manifest:l,routeModules:c}=Lu(),{basename:f}=nh(),{loaderData:d,matches:p}=Wy(),m=k.useMemo(()=>ug(r,e,p,l,o,"data"),[r,e,p,l,o]),v=k.useMemo(()=>ug(r,e,p,l,o,"assets"),[r,e,p,l,o]),y=k.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let M=new Set,x=!1;if(e.forEach(L=>{let P=l.routes[L.route.id];!P||!P.hasLoader||(!m.some(A=>A.route.id===L.route.id)&&L.route.id in d&&c[L.route.id]?.shouldRevalidate||P.hasClientLoader?x=!0:M.add(L.route.id))}),M.size===0)return[];let _=qv(r,f,s.v8_trailingSlashAwareDataRequests,"data");return x&&M.size>0&&_.searchParams.set("_routes",e.filter(L=>M.has(L.route.id)).map(L=>L.route.id).join(",")),[_.pathname+_.search]},[f,s.v8_trailingSlashAwareDataRequests,d,o,l,m,e,r,c]),S=k.useMemo(()=>zy(v,l),[v,l]),E=$y(v);return k.createElement(k.Fragment,null,y.map(M=>k.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...t})),S.map(M=>k.createElement("link",{key:M,rel:"modulepreload",href:M,...t})),E.map(({key:M,link:x})=>k.createElement("link",{key:M,nonce:t.nonce,...x,crossOrigin:x.crossOrigin??t.crossOrigin})))}function Ky(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Zy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Zy&&(window.__reactRouterVersion="7.18.2")}catch{}function Jy({basename:r,children:e,useTransitions:t,window:o}){let s=k.useRef();s.current==null&&(s.current=Px({window:o,v5Compat:!0}));let l=s.current,[c,f]=k.useState({action:l.action,location:l.location}),d=k.useCallback(p=>{t===!1?f(p):k.startTransition(()=>f(p))},[t]);return k.useLayoutEffect(()=>l.listen(d),[l,d]),k.createElement(Cy,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l,useTransitions:t})}var ih=k.forwardRef(function({onClick:e,discover:t="render",prefetch:o="none",relative:s,reloadDocument:l,replace:c,mask:f,state:d,target:p,to:m,preventScrollReset:v,viewTransition:y,defaultShouldRevalidate:S,...E},M){let{basename:x,navigator:_,useTransitions:L}=k.useContext(pr),P=typeof m=="string"&&Kd.test(m),A=Bv(m,x);m=A.to;let H=fy(m,{relative:s}),I=Si(),O=null;if(f){let de=Zd(f,[],I.mask?I.mask.pathname:"/",!0);x!=="/"&&(de.pathname=de.pathname==="/"?x:br([x,de.pathname])),O=_.createHref(de)}let[W,b,R]=Xy(o,E),V=tS(m,{replace:c,mask:f,state:d,target:p,preventScrollReset:v,relative:s,viewTransition:y,defaultShouldRevalidate:S,useTransitions:L});function se(de){e&&e(de),de.defaultPrevented||V(de)}let Q=!(A.isExternal||l),le=k.createElement("a",{...E,...R,href:(Q?O:void 0)||A.absoluteURL||H,onClick:Q?se:e,ref:Ky(M,b),target:p,"data-discover":!P&&t==="render"?"true":void 0});return W&&!P?k.createElement(k.Fragment,null,le,k.createElement(jy,{page:H})):le});ih.displayName="Link";var ld=k.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:o="",end:s=!1,style:l,to:c,viewTransition:f,children:d,...p},m){let v=Ua(c,{relative:p.relative}),y=Si(),S=k.useContext(bu),{navigator:E,basename:M}=k.useContext(pr),x=S!=null&&sS(v)&&f===!0,_=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,L=y.pathname,P=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(L=L.toLowerCase(),P=P?P.toLowerCase():null,_=_.toLowerCase()),P&&M&&(P=_i(P,M)||P);const A=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let H=L===_||!s&&L.startsWith(_)&&L.charAt(A)==="/",I=P!=null&&(P===_||!s&&P.startsWith(_)&&P.charAt(_.length)==="/"),O={isActive:H,isPending:I,isTransitioning:x},W=H?e:void 0,b;typeof o=="function"?b=o(O):b=[o,H?"active":null,I?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(O):l;return k.createElement(ih,{...p,"aria-current":W,className:b,ref:m,style:R,to:c,viewTransition:f},typeof d=="function"?d(O):d)});ld.displayName="NavLink";var Qy=k.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:o,replace:s,state:l,method:c=mu,action:f,onSubmit:d,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:y,...S},E)=>{let{useTransitions:M}=k.useContext(pr),x=iS(),_=oS(f,{relative:p}),L=c.toLowerCase()==="get"?"get":"post",P=typeof f=="string"&&Kd.test(f),A=H=>{if(d&&d(H),H.defaultPrevented)return;H.preventDefault();let I=H.nativeEvent.submitter,O=I?.getAttribute("formmethod")||c,W=()=>x(I||H.currentTarget,{fetcherKey:e,method:O,navigate:t,replace:s,state:l,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:y});M&&t!==!1?k.startTransition(()=>W()):W()};return k.createElement("form",{ref:E,method:L,action:_,onSubmit:o?d:A,...S,"data-discover":!P&&r==="render"?"true":void 0})});Qy.displayName="Form";function eS(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kv(r){let e=k.useContext(Cs);return $t(e,eS(r)),e}function tS(r,{target:e,replace:t,mask:o,state:s,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d,useTransitions:p}={}){let m=dy(),v=Si(),y=Ua(r,{relative:c});return k.useCallback(S=>{if(Ny(S,e)){S.preventDefault();let E=t!==void 0?t:Ma(v)===Ma(y),M=()=>m(r,{replace:E,mask:o,state:s,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d});p?k.startTransition(()=>M()):M()}},[v,m,y,t,o,s,e,r,l,c,f,d,p])}var nS=0,rS=()=>`__${String(++nS)}__`;function iS(){let{router:r}=Kv("useSubmit"),{basename:e}=k.useContext(pr),t=My(),o=r.fetch,s=r.navigate;return k.useCallback(async(l,c={})=>{let{action:f,method:d,encType:p,formData:m,body:v}=Fy(l,e);if(c.navigate===!1){let y=c.fetcherKey||rS();await o(y,t,c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,flushSync:c.flushSync})}else await s(c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[o,s,e,t])}function oS(r,{relative:e}={}){let{basename:t}=k.useContext(pr),o=k.useContext(yi);$t(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),l={...Ua(r||".",{relative:e})},c=Si();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(m=>m==="")){f.delete("index"),d.filter(v=>v).forEach(v=>f.append("index",v));let m=f.toString();l.search=m?`?${m}`:""}}return(!r||r===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:br([t,l.pathname])),Ma(l)}function sS(r,{relative:e}={}){let t=k.useContext(Vv);$t(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Kv("useViewTransitionState"),s=Ua(r,{relative:e});if(!t.isTransitioning)return!1;let l=_i(t.currentLocation.pathname,o)||t.currentLocation.pathname,c=_i(t.nextLocation.pathname,o)||t.nextLocation.pathname;return wu(s.pathname,c)!=null||wu(s.pathname,l)!=null}const oh="178",aS=0,cg=1,lS=2,Zv=1,uS=2,fi=3,Zi=0,Yn=1,Hr=2,Ki=0,vs=1,fg=2,dg=3,hg=4,cS=5,Eo=100,fS=101,dS=102,hS=103,pS=104,mS=200,gS=201,vS=202,_S=203,ud=204,cd=205,xS=206,yS=207,SS=208,ES=209,MS=210,wS=211,TS=212,RS=213,CS=214,fd=0,dd=1,hd=2,ys=3,pd=4,md=5,gd=6,vd=7,Jv=0,AS=1,bS=2,gi=0,PS=1,LS=2,DS=3,NS=4,US=5,IS=6,FS=7,Qv=300,Ss=301,Es=302,_d=303,xd=304,Du=306,wa=1e3,hi=1001,yd=1002,yn=1003,OS=1004,Hl=1005,Gr=1006,wf=1007,wo=1008,qr=1009,e_=1010,t_=1011,Ta=1012,sh=1013,Ro=1014,pi=1015,Ia=1016,ah=1017,lh=1018,Ra=1020,n_=35902,r_=1021,i_=1022,Cr=1023,Ca=1026,Aa=1027,o_=1028,uh=1029,s_=1030,ch=1031,fh=1033,vu=33776,_u=33777,xu=33778,yu=33779,Sd=35840,Ed=35841,Md=35842,wd=35843,Td=36196,Rd=37492,Cd=37496,Ad=37808,bd=37809,Pd=37810,Ld=37811,Dd=37812,Nd=37813,Ud=37814,Id=37815,Fd=37816,Od=37817,kd=37818,Bd=37819,zd=37820,Hd=37821,Su=36492,Vd=36494,Gd=36495,a_=36283,Wd=36284,Xd=36285,jd=36286,kS=3200,BS=3201,zS=0,HS=1,qi="",kn="srgb",Ms="srgb-linear",Ru="linear",It="srgb",Jo=7680,pg=519,VS=512,GS=513,WS=514,l_=515,XS=516,jS=517,$S=518,YS=519,mg=35044,gg="300 es",mi=2e3,Cu=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(t)===-1&&o[e].push(t)}hasEventListener(e,t){const o=this._listeners;return o===void 0?!1:o[e]!==void 0&&o[e].indexOf(t)!==-1}removeEventListener(e,t){const o=this._listeners;if(o===void 0)return;const s=o[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const o=t[e.type];if(o!==void 0){e.target=this;const s=o.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vg=1234567;const xa=Math.PI/180,ba=180/Math.PI;function bs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]).toLowerCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function dh(r,e){return(r%e+e)%e}function qS(r,e,t,o,s){return o+(r-e)*(s-o)/(t-e)}function KS(r,e,t){return r!==e?(t-r)/(e-r):0}function ya(r,e,t){return(1-t)*r+t*e}function ZS(r,e,t,o){return ya(r,e,1-Math.exp(-t*o))}function JS(r,e=1){return e-Math.abs(dh(r,e*2)-e)}function QS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function eE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function tE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function nE(r,e){return r+Math.random()*(e-r)}function rE(r){return r*(.5-Math.random())}function iE(r){r!==void 0&&(vg=r);let e=vg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oE(r){return r*xa}function sE(r){return r*ba}function aE(r){return(r&r-1)===0&&r!==0}function lE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function uE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cE(r,e,t,o,s){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),p=l((e+o)/2),m=c((e+o)/2),v=l((e-o)/2),y=c((e-o)/2),S=l((o-e)/2),E=c((o-e)/2);switch(s){case"XYX":r.set(f*m,d*v,d*y,f*p);break;case"YZY":r.set(d*y,f*m,d*v,f*p);break;case"ZXZ":r.set(d*v,d*y,f*m,f*p);break;case"XZX":r.set(f*m,d*E,d*S,f*p);break;case"YXY":r.set(d*S,f*m,d*E,f*p);break;case"ZYZ":r.set(d*E,d*S,f*m,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ps(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const fE={DEG2RAD:xa,RAD2DEG:ba,generateUUID:bs,clamp:Mt,euclideanModulo:dh,mapLinear:qS,inverseLerp:KS,lerp:ya,damp:ZS,pingpong:JS,smoothstep:QS,smootherstep:eE,randInt:tE,randFloat:nE,randFloatSpread:rE,seededRandom:iE,degToRad:oE,radToDeg:sE,isPowerOfTwo:aE,ceilPowerOfTwo:lE,floorPowerOfTwo:uE,setQuaternionFromProperEuler:cE,normalize:Fn,denormalize:ps};class Lt{constructor(e=0,t=0){Lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,o=this.y,s=e.elements;return this.x=s[0]*t+s[3]*o+s[6],this.y=s[1]*t+s[4]*o+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Mt(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(Mt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y;return t*t+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const o=Math.cos(t),s=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*o-c*s+e.x,this.y=l*s+c*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fa{constructor(e=0,t=0,o=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=o,this._w=s}static slerpFlat(e,t,o,s,l,c,f){let d=o[s+0],p=o[s+1],m=o[s+2],v=o[s+3];const y=l[c+0],S=l[c+1],E=l[c+2],M=l[c+3];if(f===0){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(f===1){e[t+0]=y,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(v!==M||d!==y||p!==S||m!==E){let x=1-f;const _=d*y+p*S+m*E+v*M,L=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const H=Math.sqrt(P),I=Math.atan2(H,_*L);x=Math.sin(x*I)/H,f=Math.sin(f*I)/H}const A=f*L;if(d=d*x+y*A,p=p*x+S*A,m=m*x+E*A,v=v*x+M*A,x===1-f){const H=1/Math.sqrt(d*d+p*p+m*m+v*v);d*=H,p*=H,m*=H,v*=H}}e[t]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,o,s,l,c){const f=o[s],d=o[s+1],p=o[s+2],m=o[s+3],v=l[c],y=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+m*v+d*S-p*y,e[t+1]=d*E+m*y+p*v-f*S,e[t+2]=p*E+m*S+f*y-d*v,e[t+3]=m*E-f*v-d*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,o,s){return this._x=e,this._y=t,this._z=o,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const o=e._x,s=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,p=f(o/2),m=f(s/2),v=f(l/2),y=d(o/2),S=d(s/2),E=d(l/2);switch(c){case"XYZ":this._x=y*m*v+p*S*E,this._y=p*S*v-y*m*E,this._z=p*m*E+y*S*v,this._w=p*m*v-y*S*E;break;case"YXZ":this._x=y*m*v+p*S*E,this._y=p*S*v-y*m*E,this._z=p*m*E-y*S*v,this._w=p*m*v+y*S*E;break;case"ZXY":this._x=y*m*v-p*S*E,this._y=p*S*v+y*m*E,this._z=p*m*E+y*S*v,this._w=p*m*v-y*S*E;break;case"ZYX":this._x=y*m*v-p*S*E,this._y=p*S*v+y*m*E,this._z=p*m*E-y*S*v,this._w=p*m*v+y*S*E;break;case"YZX":this._x=y*m*v+p*S*E,this._y=p*S*v+y*m*E,this._z=p*m*E-y*S*v,this._w=p*m*v-y*S*E;break;case"XZY":this._x=y*m*v-p*S*E,this._y=p*S*v-y*m*E,this._z=p*m*E+y*S*v,this._w=p*m*v+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const o=t/2,s=Math.sin(o);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,o=t[0],s=t[4],l=t[8],c=t[1],f=t[5],d=t[9],p=t[2],m=t[6],v=t[10],y=o+f+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-p)*S,this._z=(c-s)*S}else if(o>f&&o>v){const S=2*Math.sqrt(1+o-f-v);this._w=(m-d)/S,this._x=.25*S,this._y=(s+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-o-v);this._w=(l-p)/S,this._x=(s+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+v-o-f);this._w=(c-s)/S,this._x=(l+p)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let o=e.dot(t)+1;return o<1e-8?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const o=this.angleTo(e);if(o===0)return this;const s=Math.min(1,t/o);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const o=e._x,s=e._y,l=e._z,c=e._w,f=t._x,d=t._y,p=t._z,m=t._w;return this._x=o*m+c*f+s*p-l*d,this._y=s*m+c*d+l*f-o*p,this._z=l*m+c*p+o*d-s*f,this._w=c*m-o*f-s*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const o=this._x,s=this._y,l=this._z,c=this._w;let f=c*e._w+o*e._x+s*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=o,this._y=s,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*o+t*this._x,this._y=S*s+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),v=Math.sin((1-t)*m)/p,y=Math.sin(t*m)/p;return this._w=c*v+this._w*y,this._x=o*v+this._x*y,this._y=s*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,o){return this.copy(e).slerp(t,o)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),o=Math.random(),s=Math.sqrt(1-o),l=Math.sqrt(o);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,o=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=o}set(e,t,o){return o===void 0&&(o=this.z),this.x=e,this.y=t,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_g.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_g.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,o=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*o+l[6]*s,this.y=l[1]*t+l[4]*o+l[7]*s,this.z=l[2]*t+l[5]*o+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,o=this.y,s=this.z,l=e.elements,c=1/(l[3]*t+l[7]*o+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*o+l[8]*s+l[12])*c,this.y=(l[1]*t+l[5]*o+l[9]*s+l[13])*c,this.z=(l[2]*t+l[6]*o+l[10]*s+l[14])*c,this}applyQuaternion(e){const t=this.x,o=this.y,s=this.z,l=e.x,c=e.y,f=e.z,d=e.w,p=2*(c*s-f*o),m=2*(f*t-l*s),v=2*(l*o-c*t);return this.x=t+d*p+c*v-f*m,this.y=o+d*m+f*p-l*v,this.z=s+d*v+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,o=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*o+l[8]*s,this.y=l[1]*t+l[5]*o+l[9]*s,this.z=l[2]*t+l[6]*o+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Mt(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const o=e.x,s=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=s*d-l*f,this.y=l*c-o*d,this.z=o*f-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const o=e.dot(this)/t;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return Tf.copy(this).projectOnVector(e),this.sub(Tf)}reflect(e){return this.sub(Tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(Mt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y,s=this.z-e.z;return t*t+o*o+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,o){const s=Math.sin(t)*e;return this.x=s*Math.sin(o),this.y=Math.cos(t)*e,this.z=s*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,o){return this.x=e*Math.sin(t),this.y=o,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=o,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,o=Math.sqrt(1-t*t);return this.x=o*Math.cos(e),this.y=t,this.z=o*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tf=new ne,_g=new Fa;class gt{constructor(e,t,o,s,l,c,f,d,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,o,s,l,c,f,d,p)}set(e,t,o,s,l,c,f,d,p){const m=this.elements;return m[0]=e,m[1]=s,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=o,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],this}extractBasis(e,t,o){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,s=t.elements,l=this.elements,c=o[0],f=o[3],d=o[6],p=o[1],m=o[4],v=o[7],y=o[2],S=o[5],E=o[8],M=s[0],x=s[3],_=s[6],L=s[1],P=s[4],A=s[7],H=s[2],I=s[5],O=s[8];return l[0]=c*M+f*L+d*H,l[3]=c*x+f*P+d*I,l[6]=c*_+f*A+d*O,l[1]=p*M+m*L+v*H,l[4]=p*x+m*P+v*I,l[7]=p*_+m*A+v*O,l[2]=y*M+S*L+E*H,l[5]=y*x+S*P+E*I,l[8]=y*_+S*A+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[1],s=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8];return t*c*m-t*f*p-o*l*m+o*f*d+s*l*p-s*c*d}invert(){const e=this.elements,t=e[0],o=e[1],s=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=m*c-f*p,y=f*d-m*l,S=p*l-c*d,E=t*v+o*y+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=v*M,e[1]=(s*p-m*o)*M,e[2]=(f*o-s*c)*M,e[3]=y*M,e[4]=(m*t-s*d)*M,e[5]=(s*l-f*t)*M,e[6]=S*M,e[7]=(o*d-p*t)*M,e[8]=(c*t-o*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,o,s,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(o*d,o*p,-o*(d*c+p*f)+c+e,-s*p,s*d,-s*(-p*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Rf.makeScale(e,t)),this}rotate(e){return this.premultiply(Rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,o,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,o=e.elements;for(let s=0;s<9;s++)if(t[s]!==o[s])return!1;return!0}fromArray(e,t=0){for(let o=0;o<9;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rf=new gt;function u_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Pa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dE(){const r=Pa("canvas");return r.style.display="block",r}const xg={};function _s(r){r in xg||(xg[r]=!0,console.warn(r))}function hE(r,e,t){return new Promise(function(o,s){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:o()}}setTimeout(l,t)})}function pE(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mE(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yg=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sg=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gE(){const r={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===It&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===It&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?Ru:this.spaces[s].transfer},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return _s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return _s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],o=[.3127,.329];return r.define({[Ms]:{primaries:e,whitePoint:o,transfer:Ru,toXYZ:yg,fromXYZ:Sg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:o,transfer:It,toXYZ:yg,fromXYZ:Sg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),r}const bt=gE();function vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qo;class vE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let o;if(e instanceof HTMLCanvasElement)o=e;else{Qo===void 0&&(Qo=Pa("canvas")),Qo.width=e.width,Qo.height=e.height;const s=Qo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),o=Qo}return o.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pa("canvas");t.width=e.width,t.height=e.height;const o=t.getContext("2d");o.drawImage(e,0,0,e.width,e.height);const s=o.getImageData(0,0,e.width,e.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=vi(l[c]/255)*255;return o.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let o=0;o<t.length;o++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[o]=Math.floor(vi(t[o]/255)*255):t[o]=vi(t[o]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _E=0;class hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const o={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(Cf(s[c].image)):l.push(Cf(s[c]))}else l=Cf(s);o.url=l}return t||(e.images[this.uuid]=o),o}}function Cf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xE=0;const Af=new ne;class zn extends As{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,o=hi,s=hi,l=Gr,c=wo,f=Cr,d=qr,p=zn.DEFAULT_ANISOTROPY,m=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=bs(),this.name="",this.source=new hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=o,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Af).x}get height(){return this.source.getSize(Af).y}get depth(){return this.source.getSize(Af).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&o&&s.isVector2&&o.isVector2||s&&o&&s.isVector3&&o.isVector3||s&&o&&s.isMatrix3&&o.isMatrix3?s.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const o={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),t||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Qv;zn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,o=0,s=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=o,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,o,s){return this.x=e,this.y=t,this.z=o,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,o=this.y,s=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*o+c[8]*s+c[12]*l,this.y=c[1]*t+c[5]*o+c[9]*s+c[13]*l,this.z=c[2]*t+c[6]*o+c[10]*s+c[14]*l,this.w=c[3]*t+c[7]*o+c[11]*s+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,o,s,l;const d=e.elements,p=d[0],m=d[4],v=d[8],y=d[1],S=d[5],E=d[9],M=d[2],x=d[6],_=d[10];if(Math.abs(m-y)<.01&&Math.abs(v-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(m+y)<.1&&Math.abs(v+M)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,A=(S+1)/2,H=(_+1)/2,I=(m+y)/4,O=(v+M)/4,W=(E+x)/4;return P>A&&P>H?P<.01?(o=0,s=.707106781,l=.707106781):(o=Math.sqrt(P),s=I/o,l=O/o):A>H?A<.01?(o=.707106781,s=0,l=.707106781):(s=Math.sqrt(A),o=I/s,l=W/s):H<.01?(o=.707106781,s=.707106781,l=0):(l=Math.sqrt(H),o=O/l,s=W/l),this.set(o,s,l,t),this}let L=Math.sqrt((x-E)*(x-E)+(v-M)*(v-M)+(y-m)*(y-m));return Math.abs(L)<.001&&(L=1),this.x=(x-E)/L,this.y=(v-M)/L,this.z=(y-m)/L,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Mt(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this.w=e.w+(t.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yE extends As{constructor(e=1,t=1,o={}){super(),o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},o),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=o.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const s={width:e,height:t,depth:o.depth},l=new zn(s);this.textures=[];const c=o.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(o),this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=o.depthTexture,this.samples=o.samples,this.multiview=o.multiview}_setTextureOptions(e={}){const t={minFilter:Gr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let o=0;o<this.textures.length;o++)this.textures[o].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,o=1){if(this.width!==e||this.height!==t||this.depth!==o){this.width=e,this.height=t,this.depth=o;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=o,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,o=e.textures.length;t<o;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new hh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Co extends yE{constructor(e=1,t=1,o={}){super(e,t,o),this.isWebGLRenderTarget=!0}}class c_ extends zn{constructor(e=null,t=1,o=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:o,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SE extends zn{constructor(e=null,t=1,o=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:o,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t+=3)this.expandByPoint(Mr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,o=e.count;t<o;t++)this.expandByPoint(Mr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const o=Mr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const o=e.geometry;if(o!==void 0){const l=o.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Mr):Mr.fromBufferAttribute(l,c),Mr.applyMatrix4(e.matrixWorld),this.expandByPoint(Mr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),Vl.copy(o.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}const s=e.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mr),Mr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,o;return e.normal.x>0?(t=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),t<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),Gl.subVectors(this.max,da),es.subVectors(e.a,da),ts.subVectors(e.b,da),ns.subVectors(e.c,da),Gi.subVectors(ts,es),Wi.subVectors(ns,ts),po.subVectors(es,ns);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-po.z,po.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,po.z,0,-po.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-po.y,po.x,0];return!bf(t,es,ts,ns,Gl)||(t=[1,0,0,0,1,0,0,0,1],!bf(t,es,ts,ns,Gl))?!1:(Wl.crossVectors(Gi,Wi),t=[Wl.x,Wl.y,Wl.z],bf(t,es,ts,ns,Gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Mr=new ne,Vl=new Oa,es=new ne,ts=new ne,ns=new ne,Gi=new ne,Wi=new ne,po=new ne,da=new ne,Gl=new ne,Wl=new ne,mo=new ne;function bf(r,e,t,o,s){for(let l=0,c=r.length-3;l<=c;l+=3){mo.fromArray(r,l);const f=s.x*Math.abs(mo.x)+s.y*Math.abs(mo.y)+s.z*Math.abs(mo.z),d=e.dot(mo),p=t.dot(mo),m=o.dot(mo);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const EE=new Oa,ha=new ne,Pf=new ne;class ph{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const o=this.center;t!==void 0?o.copy(t):EE.setFromPoints(e).getCenter(o);let s=0;for(let l=0,c=e.length;l<c;l++)s=Math.max(s,o.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const o=this.center.distanceToSquared(e);return t.copy(e),o>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const o=Math.sqrt(t),s=(o-this.radius)*.5;this.center.addScaledVector(ha,s/o),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Pf)),this.expandByPoint(ha.copy(e.center).sub(Pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ai=new ne,Lf=new ne,Xl=new ne,Xi=new ne,Df=new ne,jl=new ne,Nf=new ne;class ME{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const o=t.dot(this.direction);return o<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,o,s){Lf.copy(e).add(t).multiplyScalar(.5),Xl.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Lf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Xl),f=Xi.dot(this.direction),d=-Xi.dot(Xl),p=Xi.lengthSq(),m=Math.abs(1-c*c);let v,y,S,E;if(m>0)if(v=c*d-f,y=c*f-d,E=l*m,v>=0)if(y>=-E)if(y<=E){const M=1/m;v*=M,y*=M,S=v*(v+c*y+2*f)+y*(c*v+y+2*d)+p}else y=l,v=Math.max(0,-(c*y+f)),S=-v*v+y*(y+2*d)+p;else y=-l,v=Math.max(0,-(c*y+f)),S=-v*v+y*(y+2*d)+p;else y<=-E?(v=Math.max(0,-(-c*l+f)),y=v>0?-l:Math.min(Math.max(-l,-d),l),S=-v*v+y*(y+2*d)+p):y<=E?(v=0,y=Math.min(Math.max(-l,-d),l),S=y*(y+2*d)+p):(v=Math.max(0,-(c*l+f)),y=v>0?l:Math.min(Math.max(-l,-d),l),S=-v*v+y*(y+2*d)+p);else y=c>0?-l:l,v=Math.max(0,-(c*y+f)),S=-v*v+y*(y+2*d)+p;return o&&o.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(Lf).addScaledVector(Xl,y),S}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const o=ai.dot(this.direction),s=ai.dot(ai)-o*o,l=e.radius*e.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=o-c,d=o+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const o=-(this.origin.dot(e.normal)+e.constant)/t;return o>=0?o:null}intersectPlane(e,t){const o=this.distanceToPlane(e);return o===null?null:this.at(o,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let o,s,l,c,f,d;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(o=(e.min.x-y.x)*p,s=(e.max.x-y.x)*p):(o=(e.max.x-y.x)*p,s=(e.min.x-y.x)*p),m>=0?(l=(e.min.y-y.y)*m,c=(e.max.y-y.y)*m):(l=(e.max.y-y.y)*m,c=(e.min.y-y.y)*m),o>c||l>s||((l>o||isNaN(o))&&(o=l),(c<s||isNaN(s))&&(s=c),v>=0?(f=(e.min.z-y.z)*v,d=(e.max.z-y.z)*v):(f=(e.max.z-y.z)*v,d=(e.min.z-y.z)*v),o>d||f>s)||((f>o||o!==o)&&(o=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(o>=0?o:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,o,s,l){Df.subVectors(t,e),jl.subVectors(o,e),Nf.crossVectors(Df,jl);let c=this.direction.dot(Nf),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Xi.subVectors(this.origin,e);const d=f*this.direction.dot(jl.crossVectors(Xi,jl));if(d<0)return null;const p=f*this.direction.dot(Df.cross(Xi));if(p<0||d+p>c)return null;const m=-f*Xi.dot(Nf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,o,s,l,c,f,d,p,m,v,y,S,E,M,x){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,o,s,l,c,f,d,p,m,v,y,S,E,M,x)}set(e,t,o,s,l,c,f,d,p,m,v,y,S,E,M,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=o,_[12]=s,_[1]=l,_[5]=c,_[9]=f,_[13]=d,_[2]=p,_[6]=m,_[10]=v,_[14]=y,_[3]=S,_[7]=E,_[11]=M,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],t[9]=o[9],t[10]=o[10],t[11]=o[11],t[12]=o[12],t[13]=o[13],t[14]=o[14],t[15]=o[15],this}copyPosition(e){const t=this.elements,o=e.elements;return t[12]=o[12],t[13]=o[13],t[14]=o[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,o){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this}makeBasis(e,t,o){return this.set(e.x,t.x,o.x,0,e.y,t.y,o.y,0,e.z,t.z,o.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,o=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),l=1/rs.setFromMatrixColumn(e,1).length(),c=1/rs.setFromMatrixColumn(e,2).length();return t[0]=o[0]*s,t[1]=o[1]*s,t[2]=o[2]*s,t[3]=0,t[4]=o[4]*l,t[5]=o[5]*l,t[6]=o[6]*l,t[7]=0,t[8]=o[8]*c,t[9]=o[9]*c,t[10]=o[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,o=e.x,s=e.y,l=e.z,c=Math.cos(o),f=Math.sin(o),d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=c*m,S=c*v,E=f*m,M=f*v;t[0]=d*m,t[4]=-d*v,t[8]=p,t[1]=S+E*p,t[5]=y-M*p,t[9]=-f*d,t[2]=M-y*p,t[6]=E+S*p,t[10]=c*d}else if(e.order==="YXZ"){const y=d*m,S=d*v,E=p*m,M=p*v;t[0]=y+M*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*m,t[9]=-f,t[2]=S*f-E,t[6]=M+y*f,t[10]=c*d}else if(e.order==="ZXY"){const y=d*m,S=d*v,E=p*m,M=p*v;t[0]=y-M*f,t[4]=-c*v,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*m,t[9]=M-y*f,t[2]=-c*p,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const y=c*m,S=c*v,E=f*m,M=f*v;t[0]=d*m,t[4]=E*p-S,t[8]=y*p+M,t[1]=d*v,t[5]=M*p+y,t[9]=S*p-E,t[2]=-p,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const y=c*d,S=c*p,E=f*d,M=f*p;t[0]=d*m,t[4]=M-y*v,t[8]=E*v+S,t[1]=v,t[5]=c*m,t[9]=-f*m,t[2]=-p*m,t[6]=S*v+E,t[10]=y-M*v}else if(e.order==="XZY"){const y=c*d,S=c*p,E=f*d,M=f*p;t[0]=d*m,t[4]=-v,t[8]=p*m,t[1]=y*v+M,t[5]=c*m,t[9]=S*v-E,t[2]=E*v-S,t[6]=f*m,t[10]=M*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wE,e,TE)}lookAt(e,t,o){const s=this.elements;return tr.subVectors(e,t),tr.lengthSq()===0&&(tr.z=1),tr.normalize(),ji.crossVectors(o,tr),ji.lengthSq()===0&&(Math.abs(o.z)===1?tr.x+=1e-4:tr.z+=1e-4,tr.normalize(),ji.crossVectors(o,tr)),ji.normalize(),$l.crossVectors(tr,ji),s[0]=ji.x,s[4]=$l.x,s[8]=tr.x,s[1]=ji.y,s[5]=$l.y,s[9]=tr.y,s[2]=ji.z,s[6]=$l.z,s[10]=tr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,s=t.elements,l=this.elements,c=o[0],f=o[4],d=o[8],p=o[12],m=o[1],v=o[5],y=o[9],S=o[13],E=o[2],M=o[6],x=o[10],_=o[14],L=o[3],P=o[7],A=o[11],H=o[15],I=s[0],O=s[4],W=s[8],b=s[12],R=s[1],V=s[5],se=s[9],Q=s[13],le=s[2],de=s[6],ue=s[10],he=s[14],B=s[3],fe=s[7],ae=s[11],F=s[15];return l[0]=c*I+f*R+d*le+p*B,l[4]=c*O+f*V+d*de+p*fe,l[8]=c*W+f*se+d*ue+p*ae,l[12]=c*b+f*Q+d*he+p*F,l[1]=m*I+v*R+y*le+S*B,l[5]=m*O+v*V+y*de+S*fe,l[9]=m*W+v*se+y*ue+S*ae,l[13]=m*b+v*Q+y*he+S*F,l[2]=E*I+M*R+x*le+_*B,l[6]=E*O+M*V+x*de+_*fe,l[10]=E*W+M*se+x*ue+_*ae,l[14]=E*b+M*Q+x*he+_*F,l[3]=L*I+P*R+A*le+H*B,l[7]=L*O+P*V+A*de+H*fe,l[11]=L*W+P*se+A*ue+H*ae,l[15]=L*b+P*Q+A*he+H*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[4],s=e[8],l=e[12],c=e[1],f=e[5],d=e[9],p=e[13],m=e[2],v=e[6],y=e[10],S=e[14],E=e[3],M=e[7],x=e[11],_=e[15];return E*(+l*d*v-s*p*v-l*f*y+o*p*y+s*f*S-o*d*S)+M*(+t*d*S-t*p*y+l*c*y-s*c*S+s*p*m-l*d*m)+x*(+t*p*v-t*f*S-l*c*v+o*c*S+l*f*m-o*p*m)+_*(-s*f*m-t*d*v+t*f*y+s*c*v-o*c*y+o*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,o){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=o),this}invert(){const e=this.elements,t=e[0],o=e[1],s=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=e[9],y=e[10],S=e[11],E=e[12],M=e[13],x=e[14],_=e[15],L=v*x*p-M*y*p+M*d*S-f*x*S-v*d*_+f*y*_,P=E*y*p-m*x*p-E*d*S+c*x*S+m*d*_-c*y*_,A=m*M*p-E*v*p+E*f*S-c*M*S-m*f*_+c*v*_,H=E*v*d-m*M*d-E*f*y+c*M*y+m*f*x-c*v*x,I=t*L+o*P+s*A+l*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=L*O,e[1]=(M*y*l-v*x*l-M*s*S+o*x*S+v*s*_-o*y*_)*O,e[2]=(f*x*l-M*d*l+M*s*p-o*x*p-f*s*_+o*d*_)*O,e[3]=(v*d*l-f*y*l-v*s*p+o*y*p+f*s*S-o*d*S)*O,e[4]=P*O,e[5]=(m*x*l-E*y*l+E*s*S-t*x*S-m*s*_+t*y*_)*O,e[6]=(E*d*l-c*x*l-E*s*p+t*x*p+c*s*_-t*d*_)*O,e[7]=(c*y*l-m*d*l+m*s*p-t*y*p-c*s*S+t*d*S)*O,e[8]=A*O,e[9]=(E*v*l-m*M*l-E*o*S+t*M*S+m*o*_-t*v*_)*O,e[10]=(c*M*l-E*f*l+E*o*p-t*M*p-c*o*_+t*f*_)*O,e[11]=(m*f*l-c*v*l-m*o*p+t*v*p+c*o*S-t*f*S)*O,e[12]=H*O,e[13]=(m*M*s-E*v*s+E*o*y-t*M*y-m*o*x+t*v*x)*O,e[14]=(E*f*s-c*M*s-E*o*d+t*M*d+c*o*x-t*f*x)*O,e[15]=(c*v*s-m*f*s+m*o*d-t*v*d-c*o*y+t*f*y)*O,this}scale(e){const t=this.elements,o=e.x,s=e.y,l=e.z;return t[0]*=o,t[4]*=s,t[8]*=l,t[1]*=o,t[5]*=s,t[9]*=l,t[2]*=o,t[6]*=s,t[10]*=l,t[3]*=o,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,o,s))}makeTranslation(e,t,o){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,o,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,t,-o,0,0,o,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,0,o,0,0,1,0,0,-o,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,0,o,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const o=Math.cos(t),s=Math.sin(t),l=1-o,c=e.x,f=e.y,d=e.z,p=l*c,m=l*f;return this.set(p*c+o,p*f-s*d,p*d+s*f,0,p*f+s*d,m*f+o,m*d-s*c,0,p*d-s*f,m*d+s*c,l*d*d+o,0,0,0,0,1),this}makeScale(e,t,o){return this.set(e,0,0,0,0,t,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,t,o,s,l,c){return this.set(1,o,l,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,o){const s=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,p=l+l,m=c+c,v=f+f,y=l*p,S=l*m,E=l*v,M=c*m,x=c*v,_=f*v,L=d*p,P=d*m,A=d*v,H=o.x,I=o.y,O=o.z;return s[0]=(1-(M+_))*H,s[1]=(S+A)*H,s[2]=(E-P)*H,s[3]=0,s[4]=(S-A)*I,s[5]=(1-(y+_))*I,s[6]=(x+L)*I,s[7]=0,s[8]=(E+P)*O,s[9]=(x-L)*O,s[10]=(1-(y+M))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,o){const s=this.elements;let l=rs.set(s[0],s[1],s[2]).length();const c=rs.set(s[4],s[5],s[6]).length(),f=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),e.x=s[12],e.y=s[13],e.z=s[14],wr.copy(this);const p=1/l,m=1/c,v=1/f;return wr.elements[0]*=p,wr.elements[1]*=p,wr.elements[2]*=p,wr.elements[4]*=m,wr.elements[5]*=m,wr.elements[6]*=m,wr.elements[8]*=v,wr.elements[9]*=v,wr.elements[10]*=v,t.setFromRotationMatrix(wr),o.x=l,o.y=c,o.z=f,this}makePerspective(e,t,o,s,l,c,f=mi){const d=this.elements,p=2*l/(t-e),m=2*l/(o-s),v=(t+e)/(t-e),y=(o+s)/(o-s);let S,E;if(f===mi)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Cu)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,o,s,l,c,f=mi){const d=this.elements,p=1/(t-e),m=1/(o-s),v=1/(c-l),y=(t+e)*p,S=(o+s)*m;let E,M;if(f===mi)E=(c+l)*v,M=-2*v;else if(f===Cu)E=l*v,M=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-y,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,o=e.elements;for(let s=0;s<16;s++)if(t[s]!==o[s])return!1;return!0}fromArray(e,t=0){for(let o=0;o<16;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e[t+9]=o[9],e[t+10]=o[10],e[t+11]=o[11],e[t+12]=o[12],e[t+13]=o[13],e[t+14]=o[14],e[t+15]=o[15],e}}const rs=new ne,wr=new Jt,wE=new ne(0,0,0),TE=new ne(1,1,1),ji=new ne,$l=new ne,tr=new ne,Eg=new Jt,Mg=new Fa;class Bn{constructor(e=0,t=0,o=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=o,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,o,s=this._order){return this._x=e,this._y=t,this._z=o,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,o=!0){const s=e.elements,l=s[0],c=s[4],f=s[8],d=s[1],p=s[5],m=s[9],v=s[2],y=s[6],S=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,o){return Eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eg,t,o)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class f_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RE=0;const wg=new ne,is=new Fa,li=new Jt,Yl=new ne,pa=new ne,CE=new ne,AE=new Fa,Tg=new ne(1,0,0),Rg=new ne(0,1,0),Cg=new ne(0,0,1),Ag={type:"added"},bE={type:"removed"},os={type:"childadded",child:null},Uf={type:"childremoved",child:null};class Pn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new ne,t=new Bn,o=new Fa,s=new ne(1,1,1);function l(){o.setFromEuler(t,!1)}function c(){t.setFromQuaternion(o,void 0,!1)}t._onChange(l),o._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new gt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(Rg,e)}rotateZ(e){return this.rotateOnAxis(Cg,e)}translateOnAxis(e,t){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(Rg,e)}translateZ(e){return this.translateOnAxis(Cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,o){e.isVector3?Yl.copy(e):Yl.set(e,t,o);const s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(pa,Yl,this.up):li.lookAt(Yl,pa,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),is.setFromRotationMatrix(li),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ag),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bE),Uf.child=e,this.dispatchEvent(Uf),Uf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ag),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let o=0,s=this.children.length;o<s;o++){const c=this.children[o].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,o=[]){this[e]===t&&o.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(e,t,o);return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,CE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,AE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let o=0,s=t.length;o<s;o++)t[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let o=0,s=t.length;o<s;o++)t[o].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let o=0,s=t.length;o<s;o++)t[o].updateMatrixWorld(e)}updateWorldMatrix(e,t){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",o={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const v=d[p];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),p=c(e.textures),m=c(e.images),v=c(e.shapes),y=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(o.geometries=f),d.length>0&&(o.materials=d),p.length>0&&(o.textures=p),m.length>0&&(o.images=m),v.length>0&&(o.shapes=v),y.length>0&&(o.skeletons=y),S.length>0&&(o.animations=S),E.length>0&&(o.nodes=E)}return o.object=s,o;function c(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let o=0;o<e.children.length;o++){const s=e.children[o];this.add(s.clone())}return this}}Pn.DEFAULT_UP=new ne(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tr=new ne,ui=new ne,If=new ne,ci=new ne,ss=new ne,as=new ne,bg=new ne,Ff=new ne,Of=new ne,kf=new ne,Bf=new Zt,zf=new Zt,Hf=new Zt;class Rr{constructor(e=new ne,t=new ne,o=new ne){this.a=e,this.b=t,this.c=o}static getNormal(e,t,o,s){s.subVectors(o,t),Tr.subVectors(e,t),s.cross(Tr);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,o,s,l){Tr.subVectors(s,t),ui.subVectors(o,t),If.subVectors(e,t);const c=Tr.dot(Tr),f=Tr.dot(ui),d=Tr.dot(If),p=ui.dot(ui),m=ui.dot(If),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(p*d-f*m)*y,E=(c*m-f*d)*y;return l.set(1-S-E,E,S)}static containsPoint(e,t,o,s){return this.getBarycoord(e,t,o,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,o,s,l,c,f,d){return this.getBarycoord(e,t,o,s,ci)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,ci.x),d.addScaledVector(c,ci.y),d.addScaledVector(f,ci.z),d)}static getInterpolatedAttribute(e,t,o,s,l,c){return Bf.setScalar(0),zf.setScalar(0),Hf.setScalar(0),Bf.fromBufferAttribute(e,t),zf.fromBufferAttribute(e,o),Hf.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Bf,l.x),c.addScaledVector(zf,l.y),c.addScaledVector(Hf,l.z),c}static isFrontFacing(e,t,o,s){return Tr.subVectors(o,t),ui.subVectors(e,t),Tr.cross(ui).dot(s)<0}set(e,t,o){return this.a.copy(e),this.b.copy(t),this.c.copy(o),this}setFromPointsAndIndices(e,t,o,s){return this.a.copy(e[t]),this.b.copy(e[o]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,o,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tr.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Tr.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,o,s,l){return Rr.getInterpolation(e,this.a,this.b,this.c,t,o,s,l)}containsPoint(e){return Rr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const o=this.a,s=this.b,l=this.c;let c,f;ss.subVectors(s,o),as.subVectors(l,o),Ff.subVectors(e,o);const d=ss.dot(Ff),p=as.dot(Ff);if(d<=0&&p<=0)return t.copy(o);Of.subVectors(e,s);const m=ss.dot(Of),v=as.dot(Of);if(m>=0&&v<=m)return t.copy(s);const y=d*v-m*p;if(y<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(o).addScaledVector(ss,c);kf.subVectors(e,l);const S=ss.dot(kf),E=as.dot(kf);if(E>=0&&S<=E)return t.copy(l);const M=S*p-d*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(o).addScaledVector(as,f);const x=m*E-S*v;if(x<=0&&v-m>=0&&S-E>=0)return bg.subVectors(l,s),f=(v-m)/(v-m+(S-E)),t.copy(s).addScaledVector(bg,f);const _=1/(x+M+y);return c=M*_,f=y*_,t.copy(o).addScaledVector(ss,c).addScaledVector(as,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const d_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},ql={h:0,s:0,l:0};function Vf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Nt{constructor(e,t,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,o)}set(e,t,o){if(t===void 0&&o===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,o);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,o,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=o,bt.colorSpaceToWorking(this,s),this}setHSL(e,t,o,s=bt.workingColorSpace){if(e=dh(e,1),t=Mt(t,0,1),o=Mt(o,0,1),t===0)this.r=this.g=this.b=o;else{const l=o<=.5?o*(1+t):o+t-o*t,c=2*o-l;this.r=Vf(c,l,e+1/3),this.g=Vf(c,l,e),this.b=Vf(c,l,e-1/3)}return bt.colorSpaceToWorking(this,s),this}setStyle(e,t=kn){function o(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return o(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return o(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return o(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kn){const o=d_[e.toLowerCase()];return o!==void 0?this.setHex(o,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return bt.workingToColorSpace(bn.copy(this),e),Math.round(Mt(bn.r*255,0,255))*65536+Math.round(Mt(bn.g*255,0,255))*256+Math.round(Mt(bn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(bn.copy(this),t);const o=bn.r,s=bn.g,l=bn.b,c=Math.max(o,s,l),f=Math.min(o,s,l);let d,p;const m=(f+c)/2;if(f===c)d=0,p=0;else{const v=c-f;switch(p=m<=.5?v/(c+f):v/(2-c-f),c){case o:d=(s-l)/v+(s<l?6:0);break;case s:d=(l-o)/v+2;break;case l:d=(o-s)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=m,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=kn){bt.workingToColorSpace(bn.copy(this),e);const t=bn.r,o=bn.g,s=bn.b;return e!==kn?`color(${e} ${t.toFixed(3)} ${o.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(o*255)},${Math.round(s*255)})`}offsetHSL(e,t,o){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+o)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,o){return this.r=e.r+(t.r-e.r)*o,this.g=e.g+(t.g-e.g)*o,this.b=e.b+(t.b-e.b)*o,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(ql);const o=ya($i.h,ql.h,t),s=ya($i.s,ql.s,t),l=ya($i.l,ql.l,t);return this.setHSL(o,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,o=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*o+l[6]*s,this.g=l[1]*t+l[4]*o+l[7]*s,this.b=l[2]*t+l[5]*o+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Nt;Nt.NAMES=d_;let PE=0;class Nu extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=vs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=cd,this.blendEquation=Eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(o):s&&s.isVector3&&o&&o.isVector3?s.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const o={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.shadowSide!==null&&(o.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(o.blending=this.blending),this.side!==Zi&&(o.side=this.side),this.vertexColors===!0&&(o.vertexColors=!0),this.opacity<1&&(o.opacity=this.opacity),this.transparent===!0&&(o.transparent=!0),this.blendSrc!==ud&&(o.blendSrc=this.blendSrc),this.blendDst!==cd&&(o.blendDst=this.blendDst),this.blendEquation!==Eo&&(o.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(o.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(o.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(o.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(o.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(o.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(o.depthFunc=this.depthFunc),this.depthTest===!1&&(o.depthTest=this.depthTest),this.depthWrite===!1&&(o.depthWrite=this.depthWrite),this.colorWrite===!1&&(o.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(o.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pg&&(o.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(o.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(o.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jo&&(o.stencilFail=this.stencilFail),this.stencilZFail!==Jo&&(o.stencilZFail=this.stencilZFail),this.stencilZPass!==Jo&&(o.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(o.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(o.rotation=this.rotation),this.polygonOffset===!0&&(o.polygonOffset=!0),this.polygonOffsetFactor!==0&&(o.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(o.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(o.linewidth=this.linewidth),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.dithering===!0&&(o.dithering=!0),this.alphaTest>0&&(o.alphaTest=this.alphaTest),this.alphaHash===!0&&(o.alphaHash=!0),this.alphaToCoverage===!0&&(o.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(o.premultipliedAlpha=!0),this.forceSinglePass===!0&&(o.forceSinglePass=!0),this.wireframe===!0&&(o.wireframe=!0),this.wireframeLinewidth>1&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(o.flatShading=!0),this.visible===!1&&(o.visible=!1),this.toneMapped===!1&&(o.toneMapped=!1),this.fog===!1&&(o.fog=!1),Object.keys(this.userData).length>0&&(o.userData=this.userData);function s(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=s(e.textures),c=s(e.images);l.length>0&&(o.textures=l),c.length>0&&(o.images=c)}return o}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let o=null;if(t!==null){const s=t.length;o=new Array(s);for(let l=0;l!==s;++l)o[l]=t[l].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mh extends Nu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new ne,Kl=new Lt;let LE=0;class $r{constructor(e,t,o=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=o,this.usage=mg,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,o){e*=this.itemSize,o*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[o+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,o=this.count;t<o;t++)Kl.fromBufferAttribute(this,t),Kl.applyMatrix3(e),this.setXY(t,Kl.x,Kl.y);else if(this.itemSize===3)for(let t=0,o=this.count;t<o;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,o=this.count;t<o;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,o=this.count;t<o;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,o=this.count;t<o;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let o=this.array[e*this.itemSize+t];return this.normalized&&(o=ps(o,this.array)),o}setComponent(e,t,o){return this.normalized&&(o=Fn(o,this.array)),this.array[e*this.itemSize+t]=o,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,o){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),o=Fn(o,this.array)),this.array[e+0]=t,this.array[e+1]=o,this}setXYZ(e,t,o,s){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),o=Fn(o,this.array),s=Fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=s,this}setXYZW(e,t,o,s,l){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),o=Fn(o,this.array),s=Fn(s,this.array),l=Fn(l,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mg&&(e.usage=this.usage),e}}class h_ extends $r{constructor(e,t,o){super(new Uint16Array(e),t,o)}}class p_ extends $r{constructor(e,t,o){super(new Uint32Array(e),t,o)}}class To extends $r{constructor(e,t,o){super(new Float32Array(e),t,o)}}let DE=0;const ur=new Jt,Gf=new Pn,ls=new ne,nr=new Oa,ma=new Oa,mn=new ne;class Ao extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u_(e)?p_:h_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,o=0){this.groups.push({start:e,count:t,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const o=this.attributes.normal;if(o!==void 0){const l=new gt().getNormalMatrix(e);o.applyNormalMatrix(l),o.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ur.makeRotationFromQuaternion(e),this.applyMatrix4(ur),this}rotateX(e){return ur.makeRotationX(e),this.applyMatrix4(ur),this}rotateY(e){return ur.makeRotationY(e),this.applyMatrix4(ur),this}rotateZ(e){return ur.makeRotationZ(e),this.applyMatrix4(ur),this}translate(e,t,o){return ur.makeTranslation(e,t,o),this.applyMatrix4(ur),this}scale(e,t,o){return ur.makeScale(e,t,o),this.applyMatrix4(ur),this}lookAt(e){return Gf.lookAt(e),Gf.updateMatrix(),this.applyMatrix4(Gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const o=[];for(let s=0,l=e.length;s<l;s++){const c=e[s];o.push(c.x,c.y,c.z||0)}this.setAttribute("position",new To(o,3))}else{const o=Math.min(e.length,t.count);for(let s=0;s<o;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const l=t[o];nr.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,nr.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,nr.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(nr.min),this.boundingBox.expandByPoint(nr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ph);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const o=this.boundingSphere.center;if(nr.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ma.setFromBufferAttribute(f),this.morphTargetsRelative?(mn.addVectors(nr.min,ma.min),nr.expandByPoint(mn),mn.addVectors(nr.max,ma.max),nr.expandByPoint(mn)):(nr.expandByPoint(ma.min),nr.expandByPoint(ma.max))}nr.getCenter(o);let s=0;for(let l=0,c=e.count;l<c;l++)mn.fromBufferAttribute(e,l),s=Math.max(s,o.distanceToSquared(mn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)mn.fromBufferAttribute(f,p),d&&(ls.fromBufferAttribute(e,p),mn.add(ls)),s=Math.max(s,o.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const o=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $r(new Float32Array(4*o.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let W=0;W<o.count;W++)f[W]=new ne,d[W]=new ne;const p=new ne,m=new ne,v=new ne,y=new Lt,S=new Lt,E=new Lt,M=new ne,x=new ne;function _(W,b,R){p.fromBufferAttribute(o,W),m.fromBufferAttribute(o,b),v.fromBufferAttribute(o,R),y.fromBufferAttribute(l,W),S.fromBufferAttribute(l,b),E.fromBufferAttribute(l,R),m.sub(p),v.sub(p),S.sub(y),E.sub(y);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(V),x.copy(v).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(V),f[W].add(M),f[b].add(M),f[R].add(M),d[W].add(x),d[b].add(x),d[R].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let W=0,b=L.length;W<b;++W){const R=L[W],V=R.start,se=R.count;for(let Q=V,le=V+se;Q<le;Q+=3)_(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const P=new ne,A=new ne,H=new ne,I=new ne;function O(W){H.fromBufferAttribute(s,W),I.copy(H);const b=f[W];P.copy(b),P.sub(H.multiplyScalar(H.dot(b))).normalize(),A.crossVectors(I,b);const V=A.dot(d[W])<0?-1:1;c.setXYZW(W,P.x,P.y,P.z,V)}for(let W=0,b=L.length;W<b;++W){const R=L[W],V=R.start,se=R.count;for(let Q=V,le=V+se;Q<le;Q+=3)O(e.getX(Q+0)),O(e.getX(Q+1)),O(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new $r(new Float32Array(t.count*3),3),this.setAttribute("normal",o);else for(let y=0,S=o.count;y<S;y++)o.setXYZ(y,0,0,0);const s=new ne,l=new ne,c=new ne,f=new ne,d=new ne,p=new ne,m=new ne,v=new ne;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),M=e.getX(y+1),x=e.getX(y+2);s.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,x),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),f.fromBufferAttribute(o,E),d.fromBufferAttribute(o,M),p.fromBufferAttribute(o,x),f.add(m),d.add(m),p.add(m),o.setXYZ(E,f.x,f.y,f.z),o.setXYZ(M,d.x,d.y,d.z),o.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)s.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),c.fromBufferAttribute(t,y+2),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),o.setXYZ(y+0,m.x,m.y,m.z),o.setXYZ(y+1,m.x,m.y,m.z),o.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,o=e.count;t<o;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(f,d){const p=f.array,m=f.itemSize,v=f.normalized,y=new p.constructor(d.length*m);let S=0,E=0;for(let M=0,x=d.length;M<x;M++){f.isInterleavedBufferAttribute?S=d[M]*f.data.stride+f.offset:S=d[M]*m;for(let _=0;_<m;_++)y[E++]=p[S++]}return new $r(y,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ao,o=this.index.array,s=this.attributes;for(const f in s){const d=s[f],p=e(d,o);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,v=p.length;m<v;m++){const y=p[m],S=e(y,o);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const o=this.attributes;for(const d in o){const p=o[d];e.data.attributes[d]=p.toJSON(e.data)}const s={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let v=0,y=p.length;v<y;v++){const S=p[v];m.push(S.toJSON(e.data))}m.length>0&&(s[d]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const o=e.index;o!==null&&this.setIndex(o.clone());const s=e.attributes;for(const p in s){const m=s[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],v=l[p];for(let y=0,S=v.length;y<S;y++)m.push(v[y].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pg=new Jt,go=new ME,Zl=new ph,Lg=new ne,Jl=new ne,Ql=new ne,eu=new ne,Wf=new ne,tu=new ne,Dg=new ne,nu=new ne;class Wr extends Pn{constructor(e=new Ao,t=new mh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,o=Object.keys(t);if(o.length>0){const s=t[o[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const o=this.geometry,s=o.attributes.position,l=o.morphAttributes.position,c=o.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){tu.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],v=l[d];m!==0&&(Wf.fromBufferAttribute(v,e),c?tu.addScaledVector(Wf,m):tu.addScaledVector(Wf.sub(t),m))}t.add(tu)}return t}raycast(e,t){const o=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),Zl.copy(o.boundingSphere),Zl.applyMatrix4(l),go.copy(e.ray).recast(e.near),!(Zl.containsPoint(go.origin)===!1&&(go.intersectSphere(Zl,Lg)===null||go.origin.distanceToSquared(Lg)>(e.far-e.near)**2))&&(Pg.copy(l).invert(),go.copy(e.ray).applyMatrix4(Pg),!(o.boundingBox!==null&&go.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(e,t,go)))}_computeIntersections(e,t,o){let s;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=y.length;E<M;E++){const x=y[E],_=c[x.materialIndex],L=Math.max(x.start,S.start),P=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let A=L,H=P;A<H;A+=3){const I=f.getX(A),O=f.getX(A+1),W=f.getX(A+2);s=ru(this,_,e,o,p,m,v,I,O,W),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let x=E,_=M;x<_;x+=3){const L=f.getX(x),P=f.getX(x+1),A=f.getX(x+2);s=ru(this,c,e,o,p,m,v,L,P,A),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,M=y.length;E<M;E++){const x=y[E],_=c[x.materialIndex],L=Math.max(x.start,S.start),P=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let A=L,H=P;A<H;A+=3){const I=A,O=A+1,W=A+2;s=ru(this,_,e,o,p,m,v,I,O,W),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let x=E,_=M;x<_;x+=3){const L=x,P=x+1,A=x+2;s=ru(this,c,e,o,p,m,v,L,P,A),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function NE(r,e,t,o,s,l,c,f){let d;if(e.side===Yn?d=o.intersectTriangle(c,l,s,!0,f):d=o.intersectTriangle(s,l,c,e.side===Zi,f),d===null)return null;nu.copy(f),nu.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(nu);return p<t.near||p>t.far?null:{distance:p,point:nu.clone(),object:r}}function ru(r,e,t,o,s,l,c,f,d,p){r.getVertexPosition(f,Jl),r.getVertexPosition(d,Ql),r.getVertexPosition(p,eu);const m=NE(r,e,t,o,Jl,Ql,eu,Dg);if(m){const v=new ne;Rr.getBarycoord(Dg,Jl,Ql,eu,v),s&&(m.uv=Rr.getInterpolatedAttribute(s,f,d,p,v,new Lt)),l&&(m.uv1=Rr.getInterpolatedAttribute(l,f,d,p,v,new Lt)),c&&(m.normal=Rr.getInterpolatedAttribute(c,f,d,p,v,new ne),m.normal.dot(o.direction)>0&&m.normal.multiplyScalar(-1));const y={a:f,b:d,c:p,normal:new ne,materialIndex:0};Rr.getNormal(Jl,Ql,eu,y.normal),m.face=y,m.barycoord=v}return m}class Ps extends Ao{constructor(e=1,t=1,o=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:o,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],m=[],v=[];let y=0,S=0;E("z","y","x",-1,-1,o,t,e,c,l,0),E("z","y","x",1,-1,o,t,-e,c,l,1),E("x","z","y",1,1,e,o,t,s,c,2),E("x","z","y",1,-1,e,o,-t,s,c,3),E("x","y","z",1,-1,e,t,o,s,l,4),E("x","y","z",-1,-1,e,t,-o,s,l,5),this.setIndex(d),this.setAttribute("position",new To(p,3)),this.setAttribute("normal",new To(m,3)),this.setAttribute("uv",new To(v,2));function E(M,x,_,L,P,A,H,I,O,W,b){const R=A/O,V=H/W,se=A/2,Q=H/2,le=I/2,de=O+1,ue=W+1;let he=0,B=0;const fe=new ne;for(let ae=0;ae<ue;ae++){const F=ae*V-Q;for(let ie=0;ie<de;ie++){const Be=ie*R-se;fe[M]=Be*L,fe[x]=F*P,fe[_]=le,p.push(fe.x,fe.y,fe.z),fe[M]=0,fe[x]=0,fe[_]=I>0?1:-1,m.push(fe.x,fe.y,fe.z),v.push(ie/O),v.push(1-ae/W),he+=1}}for(let ae=0;ae<W;ae++)for(let F=0;F<O;F++){const ie=y+F+de*ae,Be=y+F+de*(ae+1),te=y+(F+1)+de*(ae+1),me=y+(F+1)+de*ae;d.push(ie,Be,me),d.push(Be,te,me),B+=6}f.addGroup(S,B,b),S+=B,y+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(r){const e={};for(const t in r){e[t]={};for(const o in r[t]){const s=r[t][o];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][o]=null):e[t][o]=s.clone():Array.isArray(s)?e[t][o]=s.slice():e[t][o]=s}}return e}function On(r){const e={};for(let t=0;t<r.length;t++){const o=ws(r[t]);for(const s in o)e[s]=o[s]}return e}function UE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function m_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const IE={clone:ws,merge:On};var FE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Nu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FE,this.fragmentShader=OE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=UE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const o={};for(const s in this.extensions)this.extensions[s]===!0&&(o[s]=!0);return Object.keys(o).length>0&&(t.extensions=o),t}}class g_ extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new ne,Ng=new Lt,Ug=new Lt;class dr extends g_{constructor(e=50,t=1,o=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,o){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Ng,Ug),t.subVectors(Ug,Ng)}setViewOffset(e,t,o,s,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xa*.5*this.fov)/this.zoom,o=2*t,s=this.aspect*o,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*s/d,t-=c.offsetY*o/p,s*=c.width/d,o*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-o,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,cs=1;class kE extends Pn{constructor(e,t,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dr(us,cs,e,t);s.layers=this.layers,this.add(s);const l=new dr(us,cs,e,t);l.layers=this.layers,this.add(l);const c=new dr(us,cs,e,t);c.layers=this.layers,this.add(c);const f=new dr(us,cs,e,t);f.layers=this.layers,this.add(f);const d=new dr(us,cs,e,t);d.layers=this.layers,this.add(d);const p=new dr(us,cs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[o,s,l,c,f,d]=t;for(const p of t)this.remove(p);if(e===mi)o.up.set(0,1,0),o.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Cu)o.up.set(0,-1,0),o.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:o,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,m]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=o.texture.generateMipmaps;o.texture.generateMipmaps=!1,e.setRenderTarget(o,0,s),e.render(t,l),e.setRenderTarget(o,1,s),e.render(t,c),e.setRenderTarget(o,2,s),e.render(t,f),e.setRenderTarget(o,3,s),e.render(t,d),e.setRenderTarget(o,4,s),e.render(t,p),o.texture.generateMipmaps=M,e.setRenderTarget(o,5,s),e.render(t,m),e.setRenderTarget(v,y,S),e.xr.enabled=E,o.texture.needsPMREMUpdate=!0}}class v_ extends zn{constructor(e=[],t=Ss,o,s,l,c,f,d,p,m){super(e,t,o,s,l,c,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class BE extends Co{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const o={width:e,height:e,depth:1},s=[o,o,o,o,o,o];this.texture=new v_(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const o={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ps(5,5,5),l=new Ji({name:"CubemapFromEquirect",uniforms:ws(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:Yn,blending:Ki});l.uniforms.tEquirect.value=t;const c=new Wr(s,l),f=t.minFilter;return t.minFilter===wo&&(t.minFilter=Gr),new kE(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,o=!0,s=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,o,s);e.setRenderTarget(l)}}class ga extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zE={type:"move"};class Xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const o of e.hand.values())this._getHandJoint(t,o)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,o){let s=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,o),_=this._getHandJoint(p,M);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=m.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,o),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,o),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(zE)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const o=new ga;o.matrixAutoUpdate=!1,o.visible=!1,e.joints[t.jointName]=o,e.add(o)}return e.joints[t.jointName]}}class HE extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jf=new ne,VE=new ne,GE=new gt;class yo{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,o,s){return this.normal.set(e,t,o),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,o){const s=jf.subVectors(o,t).cross(VE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const o=e.delta(jf),s=this.normal.dot(o);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(o,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return t<0&&o>0||o<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const o=t||GE.getNormalMatrix(e),s=this.coplanarPoint(jf).applyMatrix4(e),l=this.normal.applyMatrix3(o).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vo=new ph,WE=new Lt(.5,.5),iu=new ne;class gh{constructor(e=new yo,t=new yo,o=new yo,s=new yo,l=new yo,c=new yo){this.planes=[e,t,o,s,l,c]}set(e,t,o,s,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(o),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let o=0;o<6;o++)t[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e,t=mi){const o=this.planes,s=e.elements,l=s[0],c=s[1],f=s[2],d=s[3],p=s[4],m=s[5],v=s[6],y=s[7],S=s[8],E=s[9],M=s[10],x=s[11],_=s[12],L=s[13],P=s[14],A=s[15];if(o[0].setComponents(d-l,y-p,x-S,A-_).normalize(),o[1].setComponents(d+l,y+p,x+S,A+_).normalize(),o[2].setComponents(d+c,y+m,x+E,A+L).normalize(),o[3].setComponents(d-c,y-m,x-E,A-L).normalize(),o[4].setComponents(d-f,y-v,x-M,A-P).normalize(),t===mi)o[5].setComponents(d+f,y+v,x+M,A+P).normalize();else if(t===Cu)o[5].setComponents(f,v,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vo)}intersectsSprite(e){vo.center.set(0,0,0);const t=WE.distanceTo(e.center);return vo.radius=.7071067811865476+t,vo.applyMatrix4(e.matrixWorld),this.intersectsSphere(vo)}intersectsSphere(e){const t=this.planes,o=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(o)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let o=0;o<6;o++){const s=t[o];if(iu.x=s.normal.x>0?e.max.x:e.min.x,iu.y=s.normal.y>0?e.max.y:e.min.y,iu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(iu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let o=0;o<6;o++)if(t[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class __ extends zn{constructor(e,t,o=Ro,s,l,c,f=yn,d=yn,p,m=Ca,v=1){if(m!==Ca&&m!==Aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:v};super(y,s,l,c,f,d,m,o,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Uu extends Ao{constructor(e=1,t=1,o=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:o,heightSegments:s};const l=e/2,c=t/2,f=Math.floor(o),d=Math.floor(s),p=f+1,m=d+1,v=e/f,y=t/d,S=[],E=[],M=[],x=[];for(let _=0;_<m;_++){const L=_*y-c;for(let P=0;P<p;P++){const A=P*v-l;E.push(A,-L,0),M.push(0,0,1),x.push(P/f),x.push(1-_/d)}}for(let _=0;_<d;_++)for(let L=0;L<f;L++){const P=L+p*_,A=L+p*(_+1),H=L+1+p*(_+1),I=L+1+p*_;S.push(P,A,I),S.push(A,H,I)}this.setIndex(S),this.setAttribute("position",new To(E,3)),this.setAttribute("normal",new To(M,3)),this.setAttribute("uv",new To(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.width,e.height,e.widthSegments,e.heightSegments)}}class XE extends Nu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jE extends Nu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $f={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class $E{constructor(e,t,o){const s=this;let l=!1,c=0,f=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=o,this.itemStart=function(m){f++,l===!1&&s.onStart!==void 0&&s.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,f),c===f&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,v){return p.push(m,v),this},this.removeHandler=function(m){const v=p.indexOf(m);return v!==-1&&p.splice(v,2),this},this.getHandler=function(m){for(let v=0,y=p.length;v<y;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(m))return E}return null}}}const YE=new $E;class vh{constructor(e){this.manager=e!==void 0?e:YE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const o=this;return new Promise(function(s,l){o.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vh.DEFAULT_MATERIAL_NAME="__DEFAULT";const fs=new WeakMap;class qE extends vh{constructor(e){super(e)}load(e,t,o,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=$f.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let v=fs.get(c);v===void 0&&(v=[],fs.set(c,v)),v.push({onLoad:t,onError:s})}return c}const f=Pa("img");function d(){m(),t&&t(this);const v=fs.get(this)||[];for(let y=0;y<v.length;y++){const S=v[y];S.onLoad&&S.onLoad(this)}fs.delete(this),l.manager.itemEnd(e)}function p(v){m(),s&&s(v),$f.remove(`image:${e}`);const y=fs.get(this)||[];for(let S=0;S<y.length;S++){const E=y[S];E.onError&&E.onError(v)}fs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),$f.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class KE extends vh{constructor(e){super(e)}load(e,t,o,s){const l=new zn,c=new qE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},o,s),l}}class ZE extends Pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Yf=new Jt,Ig=new ne,Fg=new ne;class JE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=qr,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gh,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,o=this.matrix;Ig.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ig),Fg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fg),t.updateMatrixWorld(),Yf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yf),o.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),o.multiply(Yf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class x_ extends g_{constructor(e=-1,t=1,o=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=o,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,o,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=o-e,c=o+e,f=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class QE extends JE{constructor(){super(new x_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eM extends ZE{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new QE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tM extends dr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Og(r,e,t,o){const s=nM(o);switch(t){case r_:return r*e;case o_:return r*e/s.components*s.byteLength;case uh:return r*e/s.components*s.byteLength;case s_:return r*e*2/s.components*s.byteLength;case ch:return r*e*2/s.components*s.byteLength;case i_:return r*e*3/s.components*s.byteLength;case Cr:return r*e*4/s.components*s.byteLength;case fh:return r*e*4/s.components*s.byteLength;case vu:case _u:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xu:case yu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ed:case wd:return Math.max(r,16)*Math.max(e,8)/4;case Sd:case Md:return Math.max(r,8)*Math.max(e,8)/2;case Td:case Rd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Cd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Od:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case kd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case zd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Su:case Vd:case Gd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case a_:case Wd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Xd:case jd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nM(r){switch(r){case qr:case e_:return{byteLength:1,components:1};case Ta:case t_:case Ia:return{byteLength:2,components:1};case ah:case lh:return{byteLength:2,components:4};case Ro:case sh:case pi:return{byteLength:4,components:1};case n_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);function y_(){let r=null,e=!1,t=null,o=null;function s(l,c){t(l,c),o=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(o=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function rM(r){const e=new WeakMap;function t(f,d){const p=f.array,m=f.usage,v=p.byteLength,y=r.createBuffer();r.bindBuffer(d,y),r.bufferData(d,p,m),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function o(f,d,p){const m=d.array,v=d.updateRanges;if(r.bindBuffer(p,f),v.length===0)r.bufferSubData(p,0,m);else{v.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<v.length;S++){const E=v[y],M=v[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++y,v[y]=M)}v.length=y+1;for(let S=0,E=v.length;S<E;S++){const M=v[S];r.bufferSubData(p,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(r.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(p.buffer,f,d),p.version=f.version}}return{get:s,remove:l,update:c}}var iM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oM=`#ifdef USE_ALPHAHASH
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
#endif`,sM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cM=`#ifdef USE_AOMAP
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
#endif`,fM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dM=`#ifdef USE_BATCHING
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
#endif`,hM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vM=`#ifdef USE_IRIDESCENCE
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
#endif`,_M=`#ifdef USE_BUMPMAP
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
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,CM=`#define PI 3.141592653589793
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
} // validated`,AM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bM=`vec3 transformedNormal = objectNormal;
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
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UM="gl_FragColor = linearToOutputTexel( gl_FragColor );",IM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XM=`#ifdef USE_GRADIENTMAP
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
}`,jM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qM=`uniform bool receiveShadow;
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
#endif`,KM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ew=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tw=`PhysicalMaterial material;
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
#endif`,nw=`struct PhysicalMaterial {
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
}`,rw=`
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
#endif`,iw=`#if defined( RE_IndirectDiffuse )
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
#endif`,ow=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hw=`#if defined( USE_POINTS_UV )
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
#endif`,pw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_w=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xw=`#ifdef USE_MORPHTARGETS
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
#endif`,yw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ew=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rw=`#ifdef USE_NORMALMAP
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
#endif`,Cw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ow=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vw=`float getShadowMask() {
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
}`,Gw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ww=`#ifdef USE_SKINNING
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
#endif`,Xw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jw=`#ifdef USE_SKINNING
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
#endif`,$w=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zw=`#ifdef USE_TRANSMISSION
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
#endif`,Jw=`#ifdef USE_TRANSMISSION
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
#endif`,Qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iT=`uniform sampler2D t2D;
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
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`#include <common>
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
}`,cT=`#if DEPTH_PACKING == 3200
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
}`,fT=`#define DISTANCE
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
}`,dT=`#define DISTANCE
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`uniform float scale;
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
}`,gT=`uniform vec3 diffuse;
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
}`,vT=`#include <common>
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
}`,_T=`uniform vec3 diffuse;
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
}`,xT=`#define LAMBERT
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
}`,yT=`#define LAMBERT
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
}`,ST=`#define MATCAP
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
}`,ET=`#define MATCAP
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
}`,MT=`#define NORMAL
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
}`,wT=`#define NORMAL
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
}`,TT=`#define PHONG
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
}`,RT=`#define PHONG
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
}`,CT=`#define STANDARD
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
}`,AT=`#define STANDARD
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
}`,bT=`#define TOON
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
}`,PT=`#define TOON
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
}`,LT=`uniform float size;
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
}`,DT=`uniform vec3 diffuse;
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
}`,NT=`#include <common>
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
}`,UT=`uniform vec3 color;
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
}`,IT=`uniform float rotation;
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
}`,FT=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:iM,alphahash_pars_fragment:oM,alphamap_fragment:sM,alphamap_pars_fragment:aM,alphatest_fragment:lM,alphatest_pars_fragment:uM,aomap_fragment:cM,aomap_pars_fragment:fM,batching_pars_vertex:dM,batching_vertex:hM,begin_vertex:pM,beginnormal_vertex:mM,bsdfs:gM,iridescence_fragment:vM,bumpmap_pars_fragment:_M,clipping_planes_fragment:xM,clipping_planes_pars_fragment:yM,clipping_planes_pars_vertex:SM,clipping_planes_vertex:EM,color_fragment:MM,color_pars_fragment:wM,color_pars_vertex:TM,color_vertex:RM,common:CM,cube_uv_reflection_fragment:AM,defaultnormal_vertex:bM,displacementmap_pars_vertex:PM,displacementmap_vertex:LM,emissivemap_fragment:DM,emissivemap_pars_fragment:NM,colorspace_fragment:UM,colorspace_pars_fragment:IM,envmap_fragment:FM,envmap_common_pars_fragment:OM,envmap_pars_fragment:kM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:KM,envmap_vertex:zM,fog_vertex:HM,fog_pars_vertex:VM,fog_fragment:GM,fog_pars_fragment:WM,gradientmap_pars_fragment:XM,lightmap_pars_fragment:jM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:YM,lights_pars_begin:qM,lights_toon_fragment:ZM,lights_toon_pars_fragment:JM,lights_phong_fragment:QM,lights_phong_pars_fragment:ew,lights_physical_fragment:tw,lights_physical_pars_fragment:nw,lights_fragment_begin:rw,lights_fragment_maps:iw,lights_fragment_end:ow,logdepthbuf_fragment:sw,logdepthbuf_pars_fragment:aw,logdepthbuf_pars_vertex:lw,logdepthbuf_vertex:uw,map_fragment:cw,map_pars_fragment:fw,map_particle_fragment:dw,map_particle_pars_fragment:hw,metalnessmap_fragment:pw,metalnessmap_pars_fragment:mw,morphinstance_vertex:gw,morphcolor_vertex:vw,morphnormal_vertex:_w,morphtarget_pars_vertex:xw,morphtarget_vertex:yw,normal_fragment_begin:Sw,normal_fragment_maps:Ew,normal_pars_fragment:Mw,normal_pars_vertex:ww,normal_vertex:Tw,normalmap_pars_fragment:Rw,clearcoat_normal_fragment_begin:Cw,clearcoat_normal_fragment_maps:Aw,clearcoat_pars_fragment:bw,iridescence_pars_fragment:Pw,opaque_fragment:Lw,packing:Dw,premultiplied_alpha_fragment:Nw,project_vertex:Uw,dithering_fragment:Iw,dithering_pars_fragment:Fw,roughnessmap_fragment:Ow,roughnessmap_pars_fragment:kw,shadowmap_pars_fragment:Bw,shadowmap_pars_vertex:zw,shadowmap_vertex:Hw,shadowmask_pars_fragment:Vw,skinbase_vertex:Gw,skinning_pars_vertex:Ww,skinning_vertex:Xw,skinnormal_vertex:jw,specularmap_fragment:$w,specularmap_pars_fragment:Yw,tonemapping_fragment:qw,tonemapping_pars_fragment:Kw,transmission_fragment:Zw,transmission_pars_fragment:Jw,uv_pars_fragment:Qw,uv_pars_vertex:eT,uv_vertex:tT,worldpos_vertex:nT,background_vert:rT,background_frag:iT,backgroundCube_vert:oT,backgroundCube_frag:sT,cube_vert:aT,cube_frag:lT,depth_vert:uT,depth_frag:cT,distanceRGBA_vert:fT,distanceRGBA_frag:dT,equirect_vert:hT,equirect_frag:pT,linedashed_vert:mT,linedashed_frag:gT,meshbasic_vert:vT,meshbasic_frag:_T,meshlambert_vert:xT,meshlambert_frag:yT,meshmatcap_vert:ST,meshmatcap_frag:ET,meshnormal_vert:MT,meshnormal_frag:wT,meshphong_vert:TT,meshphong_frag:RT,meshphysical_vert:CT,meshphysical_frag:AT,meshtoon_vert:bT,meshtoon_frag:PT,points_vert:LT,points_frag:DT,shadow_vert:NT,shadow_frag:UT,sprite_vert:IT,sprite_frag:FT},ke={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Br={basic:{uniforms:On([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:On([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Nt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:On([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:On([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:On([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Nt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:On([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:On([ke.points,ke.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:On([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:On([ke.common,ke.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:On([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:On([ke.sprite,ke.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:On([ke.common,ke.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:On([ke.lights,ke.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Br.physical={uniforms:On([Br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const ou={r:0,b:0,g:0},_o=new Bn,OT=new Jt;function kT(r,e,t,o,s,l,c){const f=new Nt(0);let d=l===!0?0:1,p,m,v=null,y=0,S=null;function E(P){let A=P.isScene===!0?P.background:null;return A&&A.isTexture&&(A=(P.backgroundBlurriness>0?t:e).get(A)),A}function M(P){let A=!1;const H=E(P);H===null?_(f,d):H&&H.isColor&&(_(H,1),A=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?o.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&o.buffers.color.setClear(0,0,0,0,c),(r.autoClear||A)&&(o.buffers.depth.setTest(!0),o.buffers.depth.setMask(!0),o.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(P,A){const H=E(A);H&&(H.isCubeTexture||H.mapping===Du)?(m===void 0&&(m=new Wr(new Ps(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:ws(Br.backgroundCube.uniforms),vertexShader:Br.backgroundCube.vertexShader,fragmentShader:Br.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),_o.copy(A.backgroundRotation),_o.x*=-1,_o.y*=-1,_o.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(_o.y*=-1,_o.z*=-1),m.material.uniforms.envMap.value=H,m.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(_o)),m.material.toneMapped=bt.getTransfer(H.colorSpace)!==It,(v!==H||y!==H.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,v=H,y=H.version,S=r.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Wr(new Uu(2,2),new Ji({name:"BackgroundMaterial",uniforms:ws(Br.background.uniforms),vertexShader:Br.background.vertexShader,fragmentShader:Br.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=bt.getTransfer(H.colorSpace)!==It,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||y!==H.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,v=H,y=H.version,S=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function _(P,A){P.getRGB(ou,m_(r)),o.buffers.color.setClear(ou.r,ou.g,ou.b,A,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,A=1){f.set(P),d=A,_(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,_(f,d)},render:M,addToRenderList:x,dispose:L}}function BT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),o={},s=y(null);let l=s,c=!1;function f(R,V,se,Q,le){let de=!1;const ue=v(Q,se,V);l!==ue&&(l=ue,p(l.object)),de=S(R,Q,se,le),de&&E(R,Q,se,le),le!==null&&e.update(le,r.ELEMENT_ARRAY_BUFFER),(de||c)&&(c=!1,A(R,V,se,Q),le!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function d(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function m(R){return r.deleteVertexArray(R)}function v(R,V,se){const Q=se.wireframe===!0;let le=o[R.id];le===void 0&&(le={},o[R.id]=le);let de=le[V.id];de===void 0&&(de={},le[V.id]=de);let ue=de[Q];return ue===void 0&&(ue=y(d()),de[Q]=ue),ue}function y(R){const V=[],se=[],Q=[];for(let le=0;le<t;le++)V[le]=0,se[le]=0,Q[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:se,attributeDivisors:Q,object:R,attributes:{},index:null}}function S(R,V,se,Q){const le=l.attributes,de=V.attributes;let ue=0;const he=se.getAttributes();for(const B in he)if(he[B].location>=0){const ae=le[B];let F=de[B];if(F===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),ae===void 0||ae.attribute!==F||F&&ae.data!==F.data)return!0;ue++}return l.attributesNum!==ue||l.index!==Q}function E(R,V,se,Q){const le={},de=V.attributes;let ue=0;const he=se.getAttributes();for(const B in he)if(he[B].location>=0){let ae=de[B];ae===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));const F={};F.attribute=ae,ae&&ae.data&&(F.data=ae.data),le[B]=F,ue++}l.attributes=le,l.attributesNum=ue,l.index=Q}function M(){const R=l.newAttributes;for(let V=0,se=R.length;V<se;V++)R[V]=0}function x(R){_(R,0)}function _(R,V){const se=l.newAttributes,Q=l.enabledAttributes,le=l.attributeDivisors;se[R]=1,Q[R]===0&&(r.enableVertexAttribArray(R),Q[R]=1),le[R]!==V&&(r.vertexAttribDivisor(R,V),le[R]=V)}function L(){const R=l.newAttributes,V=l.enabledAttributes;for(let se=0,Q=V.length;se<Q;se++)V[se]!==R[se]&&(r.disableVertexAttribArray(se),V[se]=0)}function P(R,V,se,Q,le,de,ue){ue===!0?r.vertexAttribIPointer(R,V,se,le,de):r.vertexAttribPointer(R,V,se,Q,le,de)}function A(R,V,se,Q){M();const le=Q.attributes,de=se.getAttributes(),ue=V.defaultAttributeValues;for(const he in de){const B=de[he];if(B.location>=0){let fe=le[he];if(fe===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const ae=fe.normalized,F=fe.itemSize,ie=e.get(fe);if(ie===void 0)continue;const Be=ie.buffer,te=ie.type,me=ie.bytesPerElement,Re=te===r.INT||te===r.UNSIGNED_INT||fe.gpuType===sh;if(fe.isInterleavedBufferAttribute){const Se=fe.data,Ae=Se.stride,Z=fe.offset;if(Se.isInstancedInterleavedBuffer){for(let Ee=0;Ee<B.locationSize;Ee++)_(B.location+Ee,Se.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ee=0;Ee<B.locationSize;Ee++)x(B.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let Ee=0;Ee<B.locationSize;Ee++)P(B.location+Ee,F/B.locationSize,te,ae,Ae*me,(Z+F/B.locationSize*Ee)*me,Re)}else{if(fe.isInstancedBufferAttribute){for(let Se=0;Se<B.locationSize;Se++)_(B.location+Se,fe.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Se=0;Se<B.locationSize;Se++)x(B.location+Se);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let Se=0;Se<B.locationSize;Se++)P(B.location+Se,F/B.locationSize,te,ae,F*me,F/B.locationSize*Se*me,Re)}}else if(ue!==void 0){const ae=ue[he];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(B.location,ae);break;case 3:r.vertexAttrib3fv(B.location,ae);break;case 4:r.vertexAttrib4fv(B.location,ae);break;default:r.vertexAttrib1fv(B.location,ae)}}}}L()}function H(){W();for(const R in o){const V=o[R];for(const se in V){const Q=V[se];for(const le in Q)m(Q[le].object),delete Q[le];delete V[se]}delete o[R]}}function I(R){if(o[R.id]===void 0)return;const V=o[R.id];for(const se in V){const Q=V[se];for(const le in Q)m(Q[le].object),delete Q[le];delete V[se]}delete o[R.id]}function O(R){for(const V in o){const se=o[V];if(se[R.id]===void 0)continue;const Q=se[R.id];for(const le in Q)m(Q[le].object),delete Q[le];delete se[R.id]}}function W(){b(),c=!0,l!==s&&(l=s,p(l.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:W,resetDefaultState:b,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:x,disableUnusedAttributes:L}}function zT(r,e,t){let o;function s(p){o=p}function l(p,m){r.drawArrays(o,p,m),t.update(m,o,1)}function c(p,m,v){v!==0&&(r.drawArraysInstanced(o,p,m,v),t.update(m,o,v))}function f(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,p,0,m,0,v);let S=0;for(let E=0;E<v;E++)S+=m[E];t.update(S,o,1)}function d(p,m,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],m[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(o,p,0,m,0,y,0,v);let E=0;for(let M=0;M<v;M++)E+=m[M]*y[M];t.update(E,o,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function HT(r,e,t,o){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==Cr&&o.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const W=O===Ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==qr&&o.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==pi&&!W)}function d(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=d(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const v=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:H,maxSamples:I}}function VT(r){const e=this;let t=null,o=0,s=!1,l=!1;const c=new yo,f=new gt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||o!==0||s;return s=y,o=v.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=m(v,y,0)},this.setState=function(v,y,S){const E=v.clippingPlanes,M=v.clipIntersection,x=v.clipShadows,_=r.get(v);if(!s||E===null||E.length===0||l&&!x)l?m(null):p();else{const L=l?0:o,P=L*4;let A=_.clippingState||null;d.value=A,A=m(E,y,P,S);for(let H=0;H!==P;++H)A[H]=t[H];_.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function m(v,y,S,E){const M=v!==null?v.length:0;let x=null;if(M!==0){if(x=d.value,E!==!0||x===null){const _=S+M*4,L=y.matrixWorldInverse;f.getNormalMatrix(L),(x===null||x.length<_)&&(x=new Float32Array(_));for(let P=0,A=S;P!==M;++P,A+=4)c.copy(v[P]).applyMatrix4(L,f),c.normal.toArray(x,A),x[A+3]=c.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function GT(r){let e=new WeakMap;function t(c,f){return f===_d?c.mapping=Ss:f===xd&&(c.mapping=Es),c}function o(c){if(c&&c.isTexture){const f=c.mapping;if(f===_d||f===xd)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new BE(d.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",s),t(p.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:o,dispose:l}}const gs=4,kg=[.125,.215,.35,.446,.526,.582],Mo=20,qf=new x_,Bg=new Nt;let Kf=null,Zf=0,Jf=0,Qf=!1;const So=(1+Math.sqrt(5))/2,ds=1/So,zg=[new ne(-So,ds,0),new ne(So,ds,0),new ne(-ds,0,So),new ne(ds,0,So),new ne(0,So,-ds),new ne(0,So,ds),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],WT=new ne;class Hg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,o=.1,s=100,l={}){const{size:c=256,position:f=WT}=l;Kf=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,o,s,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kf,Zf,Jf),this._renderer.xr.enabled=Qf,e.scissorTest=!1,su(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kf=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const o=t||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,o={magFilter:Gr,minFilter:Gr,generateMipmaps:!1,type:Ia,format:Cr,colorSpace:Ms,depthBuffer:!1},s=Vg(e,t,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vg(e,t,o);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XT(l)),this._blurMaterial=jT(l,e,t)}return s}_compileMaterial(e){const t=new Wr(this._lodPlanes[0],e);this._renderer.compile(t,qf)}_sceneToCubeUV(e,t,o,s,l){const d=new dr(90,1,t,o),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(Bg),v.toneMapping=gi,v.autoClear=!1;const E=new mh({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),M=new Wr(new Ps,E);let x=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,x=!0):(E.color.copy(Bg),x=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[L],l.y,l.z)):P===1?(d.up.set(0,0,p[L]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[L],l.z)):(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[L]));const A=this._cubeSize;su(s,P*A,L>2?A:0,A,A),v.setRenderTarget(s),x&&v.render(M,d),v.render(e,d)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=S,v.autoClear=y,e.background=_}_textureToCubeUV(e,t){const o=this._renderer,s=e.mapping===Ss||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new Wr(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;su(t,0,0,3*d,2*d),o.setRenderTarget(t),o.render(c,qf)}_applyPMREM(e){const t=this._renderer,o=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=zg[(s-l-1)%zg.length];this._blur(e,l-1,l,c,f)}t.autoClear=o}_blur(e,t,o,s,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,o,s,"latitudinal",l),this._halfBlur(c,e,o,o,s,"longitudinal",l)}_halfBlur(e,t,o,s,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Wr(this._lodPlanes[s],p),y=p.uniforms,S=this._sizeLods[o]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Mo-1),M=l/E,x=isFinite(l)?1+Math.floor(m*M):Mo;x>Mo&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Mo}`);const _=[];let L=0;for(let O=0;O<Mo;++O){const W=O/M,b=Math.exp(-W*W/2);_.push(b),O===0?L+=b:O<x&&(L+=2*b)}for(let O=0;O<_.length;O++)_[O]=_[O]/L;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=c==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:P}=this;y.dTheta.value=E,y.mipInt.value=P-o;const A=this._sizeLods[s],H=3*A*(s>P-gs?s-P+gs:0),I=4*(this._cubeSize-A);su(t,H,I,3*A,2*A),d.setRenderTarget(t),d.render(v,qf)}}function XT(r){const e=[],t=[],o=[];let s=r;const l=r-gs+1+kg.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);t.push(f);let d=1/f;c>r-gs?d=kg[c-r+gs-1]:c===0&&(d=0),o.push(d);const p=1/(f-2),m=-p,v=1+p,y=[m,m,v,m,v,v,m,m,v,v,m,v],S=6,E=6,M=3,x=2,_=1,L=new Float32Array(M*E*S),P=new Float32Array(x*E*S),A=new Float32Array(_*E*S);for(let I=0;I<S;I++){const O=I%3*2/3-1,W=I>2?0:-1,b=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];L.set(b,M*E*I),P.set(y,x*E*I);const R=[I,I,I,I,I,I];A.set(R,_*E*I)}const H=new Ao;H.setAttribute("position",new $r(L,M)),H.setAttribute("uv",new $r(P,x)),H.setAttribute("faceIndex",new $r(A,_)),e.push(H),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:o}}function Vg(r,e,t){const o=new Co(r,e,t);return o.texture.mapping=Du,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function su(r,e,t,o,s){r.viewport.set(e,t,o,s),r.scissor.set(e,t,o,s)}function jT(r,e,t){const o=new Float32Array(Mo),s=new ne(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Mo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_h(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Gg(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Wg(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function _h(){return`

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
	`}function $T(r){let e=new WeakMap,t=null;function o(f){if(f&&f.isTexture){const d=f.mapping,p=d===_d||d===xd,m=d===Ss||d===Es;if(p||m){let v=e.get(f);const y=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return t===null&&(t=new Hg(r)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||m&&S&&s(S)?(t===null&&(t=new Hg(r)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function s(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:o,dispose:c}}function YT(r){const e={};function t(o){if(e[o]!==void 0)return e[o];let s;switch(o){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(o)}return e[o]=s,s}return{has:function(o){return t(o)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(o){const s=t(o);return s===null&&_s("THREE.WebGLRenderer: "+o+" extension not supported."),s}}}function qT(r,e,t,o){const s={},l=new WeakMap;function c(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",c),delete s[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),o.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function f(v,y){return s[y.id]===!0||(y.addEventListener("dispose",c),s[y.id]=!0,t.memory.geometries++),y}function d(v){const y=v.attributes;for(const S in y)e.update(y[S],r.ARRAY_BUFFER)}function p(v){const y=[],S=v.index,E=v.attributes.position;let M=0;if(S!==null){const L=S.array;M=S.version;for(let P=0,A=L.length;P<A;P+=3){const H=L[P+0],I=L[P+1],O=L[P+2];y.push(H,I,I,O,O,H)}}else if(E!==void 0){const L=E.array;M=E.version;for(let P=0,A=L.length/3-1;P<A;P+=3){const H=P+0,I=P+1,O=P+2;y.push(H,I,I,O,O,H)}}else return;const x=new(u_(y)?p_:h_)(y,1);x.version=M;const _=l.get(v);_&&e.remove(_),l.set(v,x)}function m(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function KT(r,e,t){let o;function s(y){o=y}let l,c;function f(y){l=y.type,c=y.bytesPerElement}function d(y,S){r.drawElements(o,S,l,y*c),t.update(S,o,1)}function p(y,S,E){E!==0&&(r.drawElementsInstanced(o,S,l,y*c,E),t.update(S,o,E))}function m(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,S,0,l,y,0,E);let x=0;for(let _=0;_<E;_++)x+=S[_];t.update(x,o,1)}function v(y,S,E,M){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<y.length;_++)p(y[_]/c,S[_],M[_]);else{x.multiDrawElementsInstancedWEBGL(o,S,0,l,y,0,M,0,E);let _=0;for(let L=0;L<E;L++)_+=S[L]*M[L];t.update(_,o,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function ZT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function o(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:o}}function JT(r,e,t){const o=new WeakMap,s=new Zt;function l(c,f,d){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let y=o.get(f);if(y===void 0||y.count!==v){let b=function(){O.dispose(),o.delete(f),f.removeEventListener("dispose",b)};y!==void 0&&y.texture.dispose();const S=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],_=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;S===!0&&(P=1),E===!0&&(P=2),M===!0&&(P=3);let A=f.attributes.position.count*P,H=1;A>e.maxTextureSize&&(H=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const I=new Float32Array(A*H*4*v),O=new c_(I,A,H,v);O.type=pi,O.needsUpdate=!0;const W=P*4;for(let R=0;R<v;R++){const V=x[R],se=_[R],Q=L[R],le=A*H*4*R;for(let de=0;de<V.count;de++){const ue=de*W;S===!0&&(s.fromBufferAttribute(V,de),I[le+ue+0]=s.x,I[le+ue+1]=s.y,I[le+ue+2]=s.z,I[le+ue+3]=0),E===!0&&(s.fromBufferAttribute(se,de),I[le+ue+4]=s.x,I[le+ue+5]=s.y,I[le+ue+6]=s.z,I[le+ue+7]=0),M===!0&&(s.fromBufferAttribute(Q,de),I[le+ue+8]=s.x,I[le+ue+9]=s.y,I[le+ue+10]=s.z,I[le+ue+11]=Q.itemSize===4?s.w:1)}}y={count:v,texture:O,size:new Lt(A,H)},o.set(f,y),f.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let S=0;for(let M=0;M<p.length;M++)S+=p[M];const E=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",p)}d.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:l}}function QT(r,e,t,o){let s=new WeakMap;function l(d){const p=o.render.frame,m=d.geometry,v=e.get(d,m);if(s.get(v)!==p&&(e.update(v),s.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),s.get(d)!==p&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),s.set(d,p))),d.isSkinnedMesh){const y=d.skeleton;s.get(y)!==p&&(y.update(),s.set(y,p))}return v}function c(){s=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const S_=new zn,Xg=new __(1,1),E_=new c_,M_=new SE,w_=new v_,jg=[],$g=[],Yg=new Float32Array(16),qg=new Float32Array(9),Kg=new Float32Array(4);function Ls(r,e,t){const o=r[0];if(o<=0||o>0)return r;const s=e*t;let l=jg[s];if(l===void 0&&(l=new Float32Array(s),jg[s]=l),e!==0){o.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,o=r.length;t<o;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,o=e.length;t<o;t++)r[t]=e[t]}function Iu(r,e){let t=$g[e];t===void 0&&(t=new Int32Array(e),$g[e]=t);for(let o=0;o!==e;++o)t[o]=r.allocateTextureUnit();return t}function e1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function t1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function n1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function r1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function i1(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,o))return;Kg.set(o),r.uniformMatrix2fv(this.addr,!1,Kg),ln(t,o)}}function o1(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,o))return;qg.set(o),r.uniformMatrix3fv(this.addr,!1,qg),ln(t,o)}}function s1(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,o))return;Yg.set(o),r.uniformMatrix4fv(this.addr,!1,Yg),ln(t,o)}}function a1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function l1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}function u1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}function c1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}function f1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function d1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}function h1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}function p1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}function m1(r,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(r.uniform1i(this.addr,s),o[0]=s);let l;this.type===r.SAMPLER_2D_SHADOW?(Xg.compareFunction=l_,l=Xg):l=S_,t.setTexture2D(e||l,s)}function g1(r,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(r.uniform1i(this.addr,s),o[0]=s),t.setTexture3D(e||M_,s)}function v1(r,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(r.uniform1i(this.addr,s),o[0]=s),t.setTextureCube(e||w_,s)}function _1(r,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(r.uniform1i(this.addr,s),o[0]=s),t.setTexture2DArray(e||E_,s)}function x1(r){switch(r){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return r1;case 35674:return i1;case 35675:return o1;case 35676:return s1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return u1;case 35669:case 35673:return c1;case 5125:return f1;case 36294:return d1;case 36295:return h1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return _1}}function y1(r,e){r.uniform1fv(this.addr,e)}function S1(r,e){const t=Ls(e,this.size,2);r.uniform2fv(this.addr,t)}function E1(r,e){const t=Ls(e,this.size,3);r.uniform3fv(this.addr,t)}function M1(r,e){const t=Ls(e,this.size,4);r.uniform4fv(this.addr,t)}function w1(r,e){const t=Ls(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function T1(r,e){const t=Ls(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function R1(r,e){const t=Ls(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function C1(r,e){r.uniform1iv(this.addr,e)}function A1(r,e){r.uniform2iv(this.addr,e)}function b1(r,e){r.uniform3iv(this.addr,e)}function P1(r,e){r.uniform4iv(this.addr,e)}function L1(r,e){r.uniform1uiv(this.addr,e)}function D1(r,e){r.uniform2uiv(this.addr,e)}function N1(r,e){r.uniform3uiv(this.addr,e)}function U1(r,e){r.uniform4uiv(this.addr,e)}function I1(r,e,t){const o=this.cache,s=e.length,l=Iu(t,s);an(o,l)||(r.uniform1iv(this.addr,l),ln(o,l));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||S_,l[c])}function F1(r,e,t){const o=this.cache,s=e.length,l=Iu(t,s);an(o,l)||(r.uniform1iv(this.addr,l),ln(o,l));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||M_,l[c])}function O1(r,e,t){const o=this.cache,s=e.length,l=Iu(t,s);an(o,l)||(r.uniform1iv(this.addr,l),ln(o,l));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||w_,l[c])}function k1(r,e,t){const o=this.cache,s=e.length,l=Iu(t,s);an(o,l)||(r.uniform1iv(this.addr,l),ln(o,l));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||E_,l[c])}function B1(r){switch(r){case 5126:return y1;case 35664:return S1;case 35665:return E1;case 35666:return M1;case 35674:return w1;case 35675:return T1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return A1;case 35668:case 35672:return b1;case 35669:case 35673:return P1;case 5125:return L1;case 36294:return D1;case 36295:return N1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return k1}}class z1{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.type=t.type,this.setValue=x1(t.type)}}class H1{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B1(t.type)}}class V1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,o){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(e,t[f.id],o)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function Zg(r,e){r.seq.push(e),r.map[e.id]=e}function G1(r,e,t){const o=r.name,s=o.length;for(ed.lastIndex=0;;){const l=ed.exec(o),c=ed.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===s){Zg(t,p===void 0?new z1(f,r,e):new H1(f,r,e));break}else{let v=t.map[f];v===void 0&&(v=new V1(f),Zg(t,v)),t=v}}}class Eu{constructor(e,t){this.seq=[],this.map={};const o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<o;++s){const l=e.getActiveUniform(t,s),c=e.getUniformLocation(t,l.name);G1(l,c,this)}}setValue(e,t,o,s){const l=this.map[t];l!==void 0&&l.setValue(e,o,s)}setOptional(e,t,o){const s=t[o];s!==void 0&&this.setValue(e,o,s)}static upload(e,t,o,s){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=o[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,s)}}static seqWithValue(e,t){const o=[];for(let s=0,l=e.length;s!==l;++s){const c=e[s];c.id in t&&o.push(c)}return o}}function Jg(r,e,t){const o=r.createShader(e);return r.shaderSource(o,t),r.compileShader(o),o}const W1=37297;let X1=0;function j1(r,e){const t=r.split(`
`),o=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=s;c<l;c++){const f=c+1;o.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return o.join(`
`)}const Qg=new gt;function $1(r){bt._getMatrix(Qg,bt.workingColorSpace,r);const e=`mat3( ${Qg.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(r)){case Ru:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ev(r,e,t){const o=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(o&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+s+`

`+j1(r.getShaderSource(e),c)}else return s}function Y1(r,e){const t=$1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function q1(r,e){let t;switch(e){case PS:t="Linear";break;case LS:t="Reinhard";break;case DS:t="Cineon";break;case NS:t="ACESFilmic";break;case IS:t="AgX";break;case FS:t="Neutral";break;case US:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const au=new ne;function K1(){bt.getLuminanceCoefficients(au);const r=au.x.toFixed(4),e=au.y.toFixed(4),t=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function J1(r){const e=[];for(const t in r){const o=r[t];o!==!1&&e.push("#define "+t+" "+o)}return e.join(`
`)}function Q1(r,e){const t={},o=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<o;s++){const l=r.getActiveAttrib(e,s),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function va(r){return r!==""}function tv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eR=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(r){return r.replace(eR,nR)}const tR=new Map;function nR(r,e){let t=_t[e];if(t===void 0){const o=tR.get(e);if(o!==void 0)t=_t[o],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,o);else throw new Error("Can not resolve #include <"+e+">")}return $d(t)}const rR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rv(r){return r.replace(rR,iR)}function iR(r,e,t,o){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=o.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function iv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function oR(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===uS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function sR(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ss:case Es:e="ENVMAP_TYPE_CUBE";break;case Du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aR(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Es&&(e="ENVMAP_MODE_REFRACTION"),e}function lR(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Jv:e="ENVMAP_BLENDING_MULTIPLY";break;case AS:e="ENVMAP_BLENDING_MIX";break;case bS:e="ENVMAP_BLENDING_ADD";break}return e}function uR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:o,maxMip:t}}function cR(r,e,t,o){const s=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=oR(t),p=sR(t),m=aR(t),v=lR(t),y=uR(t),S=Z1(t),E=J1(l),M=s.createProgram();let x,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(va).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(va).join(`
`),_.length>0&&(_+=`
`)):(x=[iv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),_=[iv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?_t.tonemapping_pars_fragment:"",t.toneMapping!==gi?q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,Y1("linearToOutputTexel",t.outputColorSpace),K1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(va).join(`
`)),c=$d(c),c=tv(c,t),c=nv(c,t),f=$d(f),f=tv(f,t),f=nv(f,t),c=rv(c),f=rv(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===gg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=L+x+c,A=L+_+f,H=Jg(s,s.VERTEX_SHADER,P),I=Jg(s,s.FRAGMENT_SHADER,A);s.attachShader(M,H),s.attachShader(M,I),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function O(V){if(r.debug.checkShaderErrors){const se=s.getProgramInfoLog(M).trim(),Q=s.getShaderInfoLog(H).trim(),le=s.getShaderInfoLog(I).trim();let de=!0,ue=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,M,H,I);else{const he=ev(s,H,"vertex"),B=ev(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+se+`
`+he+`
`+B)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(Q===""||le==="")&&(ue=!1);ue&&(V.diagnostics={runnable:de,programLog:se,vertexShader:{log:Q,prefix:x},fragmentShader:{log:le,prefix:_}})}s.deleteShader(H),s.deleteShader(I),W=new Eu(s,M),b=Q1(s,M)}let W;this.getUniforms=function(){return W===void 0&&O(this),W};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,W1)),R},this.destroy=function(){o.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X1++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=H,this.fragmentShader=I,this}let fR=0;class dR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,o=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(o),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const o of t)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let o=t.get(e);return o===void 0&&(o=new Set,t.set(e,o)),o}_getShaderStage(e){const t=this.shaderCache;let o=t.get(e);return o===void 0&&(o=new hR(e),t.set(e,o)),o}}class hR{constructor(e){this.id=fR++,this.code=e,this.usedTimes=0}}function pR(r,e,t,o,s,l,c){const f=new f_,d=new dR,p=new Set,m=[],v=s.logarithmicDepthBuffer,y=s.vertexTextures;let S=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return p.add(b),b===0?"uv":`uv${b}`}function x(b,R,V,se,Q){const le=se.fog,de=Q.geometry,ue=b.isMeshStandardMaterial?se.environment:null,he=(b.isMeshStandardMaterial?t:e).get(b.envMap||ue),B=he&&he.mapping===Du?he.image.height:null,fe=E[b.type];b.precision!==null&&(S=s.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const ae=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,F=ae!==void 0?ae.length:0;let ie=0;de.morphAttributes.position!==void 0&&(ie=1),de.morphAttributes.normal!==void 0&&(ie=2),de.morphAttributes.color!==void 0&&(ie=3);let Be,te,me,Re;if(fe){const wt=Br[fe];Be=wt.vertexShader,te=wt.fragmentShader}else Be=b.vertexShader,te=b.fragmentShader,d.update(b),me=d.getVertexShaderID(b),Re=d.getFragmentShaderID(b);const Se=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Z=Q.isInstancedMesh===!0,Ee=Q.isBatchedMesh===!0,be=!!b.map,it=!!b.matcap,Ke=!!he,U=!!b.aoMap,Tt=!!b.lightMap,pt=!!b.bumpMap,lt=!!b.normalMap,Ie=!!b.displacementMap,mt=!!b.emissiveMap,et=!!b.metalnessMap,ct=!!b.roughnessMap,zt=b.anisotropy>0,D=b.clearcoat>0,T=b.dispersion>0,J=b.iridescence>0,pe=b.sheen>0,ve=b.transmission>0,ce=zt&&!!b.anisotropyMap,qe=D&&!!b.clearcoatMap,Le=D&&!!b.clearcoatNormalMap,Ve=D&&!!b.clearcoatRoughnessMap,Ze=J&&!!b.iridescenceMap,_e=J&&!!b.iridescenceThicknessMap,ze=pe&&!!b.sheenColorMap,rt=pe&&!!b.sheenRoughnessMap,tt=!!b.specularMap,De=!!b.specularColorMap,ot=!!b.specularIntensityMap,G=ve&&!!b.transmissionMap,Ne=ve&&!!b.thicknessMap,xe=!!b.gradientMap,Ue=!!b.alphaMap,we=b.alphaTest>0,ge=!!b.alphaHash,Fe=!!b.extensions;let ft=gi;b.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(ft=r.toneMapping);const Pt={shaderID:fe,shaderType:b.type,shaderName:b.name,vertexShader:Be,fragmentShader:te,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:Re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Ee,batchingColor:Ee&&Q._colorsTexture!==null,instancing:Z,instancingColor:Z&&Q.instanceColor!==null,instancingMorph:Z&&Q.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Se===null?r.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ms,alphaToCoverage:!!b.alphaToCoverage,map:be,matcap:it,envMap:Ke,envMapMode:Ke&&he.mapping,envMapCubeUVHeight:B,aoMap:U,lightMap:Tt,bumpMap:pt,normalMap:lt,displacementMap:y&&Ie,emissiveMap:mt,normalMapObjectSpace:lt&&b.normalMapType===HS,normalMapTangentSpace:lt&&b.normalMapType===zS,metalnessMap:et,roughnessMap:ct,anisotropy:zt,anisotropyMap:ce,clearcoat:D,clearcoatMap:qe,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ve,dispersion:T,iridescence:J,iridescenceMap:Ze,iridescenceThicknessMap:_e,sheen:pe,sheenColorMap:ze,sheenRoughnessMap:rt,specularMap:tt,specularColorMap:De,specularIntensityMap:ot,transmission:ve,transmissionMap:G,thicknessMap:Ne,gradientMap:xe,opaque:b.transparent===!1&&b.blending===vs&&b.alphaToCoverage===!1,alphaMap:Ue,alphaTest:we,alphaHash:ge,combine:b.combine,mapUv:be&&M(b.map.channel),aoMapUv:U&&M(b.aoMap.channel),lightMapUv:Tt&&M(b.lightMap.channel),bumpMapUv:pt&&M(b.bumpMap.channel),normalMapUv:lt&&M(b.normalMap.channel),displacementMapUv:Ie&&M(b.displacementMap.channel),emissiveMapUv:mt&&M(b.emissiveMap.channel),metalnessMapUv:et&&M(b.metalnessMap.channel),roughnessMapUv:ct&&M(b.roughnessMap.channel),anisotropyMapUv:ce&&M(b.anisotropyMap.channel),clearcoatMapUv:qe&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Le&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:rt&&M(b.sheenRoughnessMap.channel),specularMapUv:tt&&M(b.specularMap.channel),specularColorMapUv:De&&M(b.specularColorMap.channel),specularIntensityMapUv:ot&&M(b.specularIntensityMap.channel),transmissionMapUv:G&&M(b.transmissionMap.channel),thicknessMapUv:Ne&&M(b.thicknessMap.channel),alphaMapUv:Ue&&M(b.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(lt||zt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!de.attributes.uv&&(be||Ue),fog:!!le,useFog:b.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:be&&b.map.isVideoTexture===!0&&bt.getTransfer(b.map.colorSpace)===It,decodeVideoTextureEmissive:mt&&b.emissiveMap.isVideoTexture===!0&&bt.getTransfer(b.emissiveMap.colorSpace)===It,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Hr,flipSided:b.side===Yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Fe&&b.extensions.clipCullDistance===!0&&o.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&b.extensions.multiDraw===!0||Ee)&&o.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:o.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function _(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)R.push(V),R.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(L(R,b),P(R,b),R.push(r.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function L(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function P(b,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function A(b){const R=E[b.type];let V;if(R){const se=Br[R];V=IE.clone(se.uniforms)}else V=b.uniforms;return V}function H(b,R){let V;for(let se=0,Q=m.length;se<Q;se++){const le=m[se];if(le.cacheKey===R){V=le,++V.usedTimes;break}}return V===void 0&&(V=new cR(r,R,b,l),m.push(V)),V}function I(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),b.destroy()}}function O(b){d.remove(b)}function W(){d.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:A,acquireProgram:H,releaseProgram:I,releaseShaderCache:O,programs:m,dispose:W}}function mR(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function o(c){r.delete(c)}function s(c,f,d){r.get(c)[f]=d}function l(){r=new WeakMap}return{has:e,get:t,remove:o,update:s,dispose:l}}function gR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ov(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sv(){const r=[];let e=0;const t=[],o=[],s=[];function l(){e=0,t.length=0,o.length=0,s.length=0}function c(v,y,S,E,M,x){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:E,renderOrder:v.renderOrder,z:M,group:x},r[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=M,_.group=x),e++,_}function f(v,y,S,E,M,x){const _=c(v,y,S,E,M,x);S.transmission>0?o.push(_):S.transparent===!0?s.push(_):t.push(_)}function d(v,y,S,E,M,x){const _=c(v,y,S,E,M,x);S.transmission>0?o.unshift(_):S.transparent===!0?s.unshift(_):t.unshift(_)}function p(v,y){t.length>1&&t.sort(v||gR),o.length>1&&o.sort(y||ov),s.length>1&&s.sort(y||ov)}function m(){for(let v=e,y=r.length;v<y;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:o,transparent:s,init:l,push:f,unshift:d,finish:m,sort:p}}function vR(){let r=new WeakMap;function e(o,s){const l=r.get(o);let c;return l===void 0?(c=new sv,r.set(o,[c])):s>=l.length?(c=new sv,l.push(c)):c=l[s],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function _R(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Nt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return r[e.id]=t,t}}}function xR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let yR=0;function SR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ER(r){const e=new _R,t=xR(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new ne);const s=new ne,l=new Jt,c=new Jt;function f(p){let m=0,v=0,y=0;for(let b=0;b<9;b++)o.probe[b].set(0,0,0);let S=0,E=0,M=0,x=0,_=0,L=0,P=0,A=0,H=0,I=0,O=0;p.sort(SR);for(let b=0,R=p.length;b<R;b++){const V=p[b],se=V.color,Q=V.intensity,le=V.distance,de=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=se.r*Q,v+=se.g*Q,y+=se.b*Q;else if(V.isLightProbe){for(let ue=0;ue<9;ue++)o.probe[ue].addScaledVector(V.sh.coefficients[ue],Q);O++}else if(V.isDirectionalLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const he=V.shadow,B=t.get(V);B.shadowIntensity=he.intensity,B.shadowBias=he.bias,B.shadowNormalBias=he.normalBias,B.shadowRadius=he.radius,B.shadowMapSize=he.mapSize,o.directionalShadow[S]=B,o.directionalShadowMap[S]=de,o.directionalShadowMatrix[S]=V.shadow.matrix,L++}o.directional[S]=ue,S++}else if(V.isSpotLight){const ue=e.get(V);ue.position.setFromMatrixPosition(V.matrixWorld),ue.color.copy(se).multiplyScalar(Q),ue.distance=le,ue.coneCos=Math.cos(V.angle),ue.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ue.decay=V.decay,o.spot[M]=ue;const he=V.shadow;if(V.map&&(o.spotLightMap[H]=V.map,H++,he.updateMatrices(V),V.castShadow&&I++),o.spotLightMatrix[M]=he.matrix,V.castShadow){const B=t.get(V);B.shadowIntensity=he.intensity,B.shadowBias=he.bias,B.shadowNormalBias=he.normalBias,B.shadowRadius=he.radius,B.shadowMapSize=he.mapSize,o.spotShadow[M]=B,o.spotShadowMap[M]=de,A++}M++}else if(V.isRectAreaLight){const ue=e.get(V);ue.color.copy(se).multiplyScalar(Q),ue.halfWidth.set(V.width*.5,0,0),ue.halfHeight.set(0,V.height*.5,0),o.rectArea[x]=ue,x++}else if(V.isPointLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),ue.distance=V.distance,ue.decay=V.decay,V.castShadow){const he=V.shadow,B=t.get(V);B.shadowIntensity=he.intensity,B.shadowBias=he.bias,B.shadowNormalBias=he.normalBias,B.shadowRadius=he.radius,B.shadowMapSize=he.mapSize,B.shadowCameraNear=he.camera.near,B.shadowCameraFar=he.camera.far,o.pointShadow[E]=B,o.pointShadowMap[E]=de,o.pointShadowMatrix[E]=V.shadow.matrix,P++}o.point[E]=ue,E++}else if(V.isHemisphereLight){const ue=e.get(V);ue.skyColor.copy(V.color).multiplyScalar(Q),ue.groundColor.copy(V.groundColor).multiplyScalar(Q),o.hemi[_]=ue,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=ke.LTC_FLOAT_1,o.rectAreaLTC2=ke.LTC_FLOAT_2):(o.rectAreaLTC1=ke.LTC_HALF_1,o.rectAreaLTC2=ke.LTC_HALF_2)),o.ambient[0]=m,o.ambient[1]=v,o.ambient[2]=y;const W=o.hash;(W.directionalLength!==S||W.pointLength!==E||W.spotLength!==M||W.rectAreaLength!==x||W.hemiLength!==_||W.numDirectionalShadows!==L||W.numPointShadows!==P||W.numSpotShadows!==A||W.numSpotMaps!==H||W.numLightProbes!==O)&&(o.directional.length=S,o.spot.length=M,o.rectArea.length=x,o.point.length=E,o.hemi.length=_,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=P,o.pointShadowMap.length=P,o.spotShadow.length=A,o.spotShadowMap.length=A,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=P,o.spotLightMatrix.length=A+H-I,o.spotLightMap.length=H,o.numSpotLightShadowsWithMaps=I,o.numLightProbes=O,W.directionalLength=S,W.pointLength=E,W.spotLength=M,W.rectAreaLength=x,W.hemiLength=_,W.numDirectionalShadows=L,W.numPointShadows=P,W.numSpotShadows=A,W.numSpotMaps=H,W.numLightProbes=O,o.version=yR++)}function d(p,m){let v=0,y=0,S=0,E=0,M=0;const x=m.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const P=p[_];if(P.isDirectionalLight){const A=o.directional[v];A.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),v++}else if(P.isSpotLight){const A=o.spot[S];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),S++}else if(P.isRectAreaLight){const A=o.rectArea[E];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),c.identity(),l.copy(P.matrixWorld),l.premultiply(x),c.extractRotation(l),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const A=o.point[y];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),y++}else if(P.isHemisphereLight){const A=o.hemi[M];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(x),M++}}}return{setup:f,setupView:d,state:o}}function av(r){const e=new ER(r),t=[],o=[];function s(m){p.camera=m,t.length=0,o.length=0}function l(m){t.push(m)}function c(m){o.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:o,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function MR(r){let e=new WeakMap;function t(s,l=0){const c=e.get(s);let f;return c===void 0?(f=new av(r),e.set(s,[f])):l>=c.length?(f=new av(r),c.push(f)):f=c[l],f}function o(){e=new WeakMap}return{get:t,dispose:o}}const wR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TR=`uniform sampler2D shadow_pass;
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
}`;function RR(r,e,t){let o=new gh;const s=new Lt,l=new Lt,c=new Zt,f=new XE({depthPacking:BS}),d=new jE,p={},m=t.maxTextureSize,v={[Zi]:Yn,[Yn]:Zi,[Hr]:Hr},y=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:wR,fragmentShader:TR}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Ao;E.setAttribute("position",new $r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Wr(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zv;let _=this.type;this.render=function(I,O,W){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const b=r.getRenderTarget(),R=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),se=r.state;se.setBlending(Ki),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const Q=_!==fi&&this.type===fi,le=_===fi&&this.type!==fi;for(let de=0,ue=I.length;de<ue;de++){const he=I[de],B=he.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const fe=B.getFrameExtents();if(s.multiply(fe),l.copy(B.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/fe.x),s.x=l.x*fe.x,B.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/fe.y),s.y=l.y*fe.y,B.mapSize.y=l.y)),B.map===null||Q===!0||le===!0){const F=this.type!==fi?{minFilter:yn,magFilter:yn}:{};B.map!==null&&B.map.dispose(),B.map=new Co(s.x,s.y,F),B.map.texture.name=he.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const ae=B.getViewportCount();for(let F=0;F<ae;F++){const ie=B.getViewport(F);c.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),se.viewport(c),B.updateMatrices(he,F),o=B.getFrustum(),A(O,W,B.camera,he,this.type)}B.isPointLightShadow!==!0&&this.type===fi&&L(B,W),B.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(b,R,V)};function L(I,O){const W=e.update(M);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Co(s.x,s.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(O,null,W,y,M,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(O,null,W,S,M,null)}function P(I,O,W,b){let R=null;const V=W.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)R=V;else if(R=W.isPointLight===!0?d:f,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const se=R.uuid,Q=O.uuid;let le=p[se];le===void 0&&(le={},p[se]=le);let de=le[Q];de===void 0&&(de=R.clone(),le[Q]=de,O.addEventListener("dispose",H)),R=de}if(R.visible=O.visible,R.wireframe=O.wireframe,b===fi?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:v[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const se=r.properties.get(R);se.light=W}return R}function A(I,O,W,b,R){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===fi)&&(!I.frustumCulled||o.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld);const Q=e.update(I),le=I.material;if(Array.isArray(le)){const de=Q.groups;for(let ue=0,he=de.length;ue<he;ue++){const B=de[ue],fe=le[B.materialIndex];if(fe&&fe.visible){const ae=P(I,fe,b,R);I.onBeforeShadow(r,I,O,W,Q,ae,B),r.renderBufferDirect(W,null,Q,ae,I,B),I.onAfterShadow(r,I,O,W,Q,ae,B)}}}else if(le.visible){const de=P(I,le,b,R);I.onBeforeShadow(r,I,O,W,Q,de,null),r.renderBufferDirect(W,null,Q,de,I,null),I.onAfterShadow(r,I,O,W,Q,de,null)}}const se=I.children;for(let Q=0,le=se.length;Q<le;Q++)A(se[Q],O,W,b,R)}function H(I){I.target.removeEventListener("dispose",H);for(const W in p){const b=p[W],R=I.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const CR={[fd]:dd,[hd]:gd,[pd]:vd,[ys]:md,[dd]:fd,[gd]:hd,[vd]:pd,[md]:ys};function AR(r,e){function t(){let G=!1;const Ne=new Zt;let xe=null;const Ue=new Zt(0,0,0,0);return{setMask:function(we){xe!==we&&!G&&(r.colorMask(we,we,we,we),xe=we)},setLocked:function(we){G=we},setClear:function(we,ge,Fe,ft,Pt){Pt===!0&&(we*=ft,ge*=ft,Fe*=ft),Ne.set(we,ge,Fe,ft),Ue.equals(Ne)===!1&&(r.clearColor(we,ge,Fe,ft),Ue.copy(Ne))},reset:function(){G=!1,xe=null,Ue.set(-1,0,0,0)}}}function o(){let G=!1,Ne=!1,xe=null,Ue=null,we=null;return{setReversed:function(ge){if(Ne!==ge){const Fe=e.get("EXT_clip_control");ge?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Ne=ge;const ft=we;we=null,this.setClear(ft)}},getReversed:function(){return Ne},setTest:function(ge){ge?Se(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(ge){xe!==ge&&!G&&(r.depthMask(ge),xe=ge)},setFunc:function(ge){if(Ne&&(ge=CR[ge]),Ue!==ge){switch(ge){case fd:r.depthFunc(r.NEVER);break;case dd:r.depthFunc(r.ALWAYS);break;case hd:r.depthFunc(r.LESS);break;case ys:r.depthFunc(r.LEQUAL);break;case pd:r.depthFunc(r.EQUAL);break;case md:r.depthFunc(r.GEQUAL);break;case gd:r.depthFunc(r.GREATER);break;case vd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ue=ge}},setLocked:function(ge){G=ge},setClear:function(ge){we!==ge&&(Ne&&(ge=1-ge),r.clearDepth(ge),we=ge)},reset:function(){G=!1,xe=null,Ue=null,we=null,Ne=!1}}}function s(){let G=!1,Ne=null,xe=null,Ue=null,we=null,ge=null,Fe=null,ft=null,Pt=null;return{setTest:function(wt){G||(wt?Se(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(wt){Ne!==wt&&!G&&(r.stencilMask(wt),Ne=wt)},setFunc:function(wt,gn,rn){(xe!==wt||Ue!==gn||we!==rn)&&(r.stencilFunc(wt,gn,rn),xe=wt,Ue=gn,we=rn)},setOp:function(wt,gn,rn){(ge!==wt||Fe!==gn||ft!==rn)&&(r.stencilOp(wt,gn,rn),ge=wt,Fe=gn,ft=rn)},setLocked:function(wt){G=wt},setClear:function(wt){Pt!==wt&&(r.clearStencil(wt),Pt=wt)},reset:function(){G=!1,Ne=null,xe=null,Ue=null,we=null,ge=null,Fe=null,ft=null,Pt=null}}}const l=new t,c=new o,f=new s,d=new WeakMap,p=new WeakMap;let m={},v={},y=new WeakMap,S=[],E=null,M=!1,x=null,_=null,L=null,P=null,A=null,H=null,I=null,O=new Nt(0,0,0),W=0,b=!1,R=null,V=null,se=null,Q=null,le=null;const de=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,he=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(B)[1]),ue=he>=1):B.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ue=he>=2);let fe=null,ae={};const F=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),Be=new Zt().fromArray(F),te=new Zt().fromArray(ie);function me(G,Ne,xe,Ue){const we=new Uint8Array(4),ge=r.createTexture();r.bindTexture(G,ge),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Fe=0;Fe<xe;Fe++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,Ue,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(Ne+Fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return ge}const Re={};Re[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Se(r.DEPTH_TEST),c.setFunc(ys),pt(!1),lt(cg),Se(r.CULL_FACE),U(Ki);function Se(G){m[G]!==!0&&(r.enable(G),m[G]=!0)}function Ae(G){m[G]!==!1&&(r.disable(G),m[G]=!1)}function Z(G,Ne){return v[G]!==Ne?(r.bindFramebuffer(G,Ne),v[G]=Ne,G===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ne),G===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ee(G,Ne){let xe=S,Ue=!1;if(G){xe=y.get(Ne),xe===void 0&&(xe=[],y.set(Ne,xe));const we=G.textures;if(xe.length!==we.length||xe[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,Fe=we.length;ge<Fe;ge++)xe[ge]=r.COLOR_ATTACHMENT0+ge;xe.length=we.length,Ue=!0}}else xe[0]!==r.BACK&&(xe[0]=r.BACK,Ue=!0);Ue&&r.drawBuffers(xe)}function be(G){return E!==G?(r.useProgram(G),E=G,!0):!1}const it={[Eo]:r.FUNC_ADD,[fS]:r.FUNC_SUBTRACT,[dS]:r.FUNC_REVERSE_SUBTRACT};it[hS]=r.MIN,it[pS]=r.MAX;const Ke={[mS]:r.ZERO,[gS]:r.ONE,[vS]:r.SRC_COLOR,[ud]:r.SRC_ALPHA,[MS]:r.SRC_ALPHA_SATURATE,[SS]:r.DST_COLOR,[xS]:r.DST_ALPHA,[_S]:r.ONE_MINUS_SRC_COLOR,[cd]:r.ONE_MINUS_SRC_ALPHA,[ES]:r.ONE_MINUS_DST_COLOR,[yS]:r.ONE_MINUS_DST_ALPHA,[wS]:r.CONSTANT_COLOR,[TS]:r.ONE_MINUS_CONSTANT_COLOR,[RS]:r.CONSTANT_ALPHA,[CS]:r.ONE_MINUS_CONSTANT_ALPHA};function U(G,Ne,xe,Ue,we,ge,Fe,ft,Pt,wt){if(G===Ki){M===!0&&(Ae(r.BLEND),M=!1);return}if(M===!1&&(Se(r.BLEND),M=!0),G!==cS){if(G!==x||wt!==b){if((_!==Eo||A!==Eo)&&(r.blendEquation(r.FUNC_ADD),_=Eo,A=Eo),wt)switch(G){case vs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fg:r.blendFunc(r.ONE,r.ONE);break;case dg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case vs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fg:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case dg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}L=null,P=null,H=null,I=null,O.set(0,0,0),W=0,x=G,b=wt}return}we=we||Ne,ge=ge||xe,Fe=Fe||Ue,(Ne!==_||we!==A)&&(r.blendEquationSeparate(it[Ne],it[we]),_=Ne,A=we),(xe!==L||Ue!==P||ge!==H||Fe!==I)&&(r.blendFuncSeparate(Ke[xe],Ke[Ue],Ke[ge],Ke[Fe]),L=xe,P=Ue,H=ge,I=Fe),(ft.equals(O)===!1||Pt!==W)&&(r.blendColor(ft.r,ft.g,ft.b,Pt),O.copy(ft),W=Pt),x=G,b=!1}function Tt(G,Ne){G.side===Hr?Ae(r.CULL_FACE):Se(r.CULL_FACE);let xe=G.side===Yn;Ne&&(xe=!xe),pt(xe),G.blending===vs&&G.transparent===!1?U(Ki):U(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ue=G.stencilWrite;f.setTest(Ue),Ue&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),mt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Se(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(G){R!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),R=G)}function lt(G){G!==aS?(Se(r.CULL_FACE),G!==V&&(G===cg?r.cullFace(r.BACK):G===lS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),V=G}function Ie(G){G!==se&&(ue&&r.lineWidth(G),se=G)}function mt(G,Ne,xe){G?(Se(r.POLYGON_OFFSET_FILL),(Q!==Ne||le!==xe)&&(r.polygonOffset(Ne,xe),Q=Ne,le=xe)):Ae(r.POLYGON_OFFSET_FILL)}function et(G){G?Se(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function ct(G){G===void 0&&(G=r.TEXTURE0+de-1),fe!==G&&(r.activeTexture(G),fe=G)}function zt(G,Ne,xe){xe===void 0&&(fe===null?xe=r.TEXTURE0+de-1:xe=fe);let Ue=ae[xe];Ue===void 0&&(Ue={type:void 0,texture:void 0},ae[xe]=Ue),(Ue.type!==G||Ue.texture!==Ne)&&(fe!==xe&&(r.activeTexture(xe),fe=xe),r.bindTexture(G,Ne||Re[G]),Ue.type=G,Ue.texture=Ne)}function D(){const G=ae[fe];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{r.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{r.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{r.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{r.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{r.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{r.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ze(){try{r.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{r.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(G){Be.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Be.copy(G))}function rt(G){te.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),te.copy(G))}function tt(G,Ne){let xe=p.get(Ne);xe===void 0&&(xe=new WeakMap,p.set(Ne,xe));let Ue=xe.get(G);Ue===void 0&&(Ue=r.getUniformBlockIndex(Ne,G.name),xe.set(G,Ue))}function De(G,Ne){const Ue=p.get(Ne).get(G);d.get(Ne)!==Ue&&(r.uniformBlockBinding(Ne,Ue,G.__bindingPointIndex),d.set(Ne,Ue))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},fe=null,ae={},v={},y=new WeakMap,S=[],E=null,M=!1,x=null,_=null,L=null,P=null,A=null,H=null,I=null,O=new Nt(0,0,0),W=0,b=!1,R=null,V=null,se=null,Q=null,le=null,Be.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Se,disable:Ae,bindFramebuffer:Z,drawBuffers:Ee,useProgram:be,setBlending:U,setMaterial:Tt,setFlipSided:pt,setCullFace:lt,setLineWidth:Ie,setPolygonOffset:mt,setScissorTest:et,activeTexture:ct,bindTexture:zt,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:J,texImage2D:Ze,texImage3D:_e,updateUBOMapping:tt,uniformBlockBinding:De,texStorage2D:Le,texStorage3D:Ve,texSubImage2D:pe,texSubImage3D:ve,compressedTexSubImage2D:ce,compressedTexSubImage3D:qe,scissor:ze,viewport:rt,reset:ot}}function bR(r,e,t,o,s,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,m=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return S?new OffscreenCanvas(D,T):Pa("canvas")}function M(D,T,J){let pe=1;const ve=zt(D);if((ve.width>J||ve.height>J)&&(pe=J/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(pe*ve.width),qe=Math.floor(pe*ve.height);v===void 0&&(v=E(ce,qe));const Le=T?E(ce,qe):v;return Le.width=ce,Le.height=qe,Le.getContext("2d").drawImage(D,0,0,ce,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ce+"x"+qe+")."),Le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function x(D){return D.generateMipmaps}function _(D){r.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(D,T,J,pe,ve=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=T;if(T===r.RED&&(J===r.FLOAT&&(ce=r.R32F),J===r.HALF_FLOAT&&(ce=r.R16F),J===r.UNSIGNED_BYTE&&(ce=r.R8)),T===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ce=r.R8UI),J===r.UNSIGNED_SHORT&&(ce=r.R16UI),J===r.UNSIGNED_INT&&(ce=r.R32UI),J===r.BYTE&&(ce=r.R8I),J===r.SHORT&&(ce=r.R16I),J===r.INT&&(ce=r.R32I)),T===r.RG&&(J===r.FLOAT&&(ce=r.RG32F),J===r.HALF_FLOAT&&(ce=r.RG16F),J===r.UNSIGNED_BYTE&&(ce=r.RG8)),T===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ce=r.RG8UI),J===r.UNSIGNED_SHORT&&(ce=r.RG16UI),J===r.UNSIGNED_INT&&(ce=r.RG32UI),J===r.BYTE&&(ce=r.RG8I),J===r.SHORT&&(ce=r.RG16I),J===r.INT&&(ce=r.RG32I)),T===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),J===r.UNSIGNED_INT&&(ce=r.RGB32UI),J===r.BYTE&&(ce=r.RGB8I),J===r.SHORT&&(ce=r.RGB16I),J===r.INT&&(ce=r.RGB32I)),T===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),J===r.UNSIGNED_INT&&(ce=r.RGBA32UI),J===r.BYTE&&(ce=r.RGBA8I),J===r.SHORT&&(ce=r.RGBA16I),J===r.INT&&(ce=r.RGBA32I)),T===r.RGB&&J===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),T===r.RGBA){const qe=ve?Ru:bt.getTransfer(pe);J===r.FLOAT&&(ce=r.RGBA32F),J===r.HALF_FLOAT&&(ce=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ce=qe===It?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function A(D,T){let J;return D?T===null||T===Ro||T===Ra?J=r.DEPTH24_STENCIL8:T===pi?J=r.DEPTH32F_STENCIL8:T===Ta&&(J=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ro||T===Ra?J=r.DEPTH_COMPONENT24:T===pi?J=r.DEPTH_COMPONENT32F:T===Ta&&(J=r.DEPTH_COMPONENT16),J}function H(D,T){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==yn&&D.minFilter!==Gr?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function I(D){const T=D.target;T.removeEventListener("dispose",I),W(T),T.isVideoTexture&&m.delete(T)}function O(D){const T=D.target;T.removeEventListener("dispose",O),R(T)}function W(D){const T=o.get(D);if(T.__webglInit===void 0)return;const J=D.source,pe=y.get(J);if(pe){const ve=pe[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&b(D),Object.keys(pe).length===0&&y.delete(J)}o.remove(D)}function b(D){const T=o.get(D);r.deleteTexture(T.__webglTexture);const J=D.source,pe=y.get(J);delete pe[T.__cacheKey],c.memory.textures--}function R(D){const T=o.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),o.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ve=0;ve<T.__webglFramebuffer[pe].length;ve++)r.deleteFramebuffer(T.__webglFramebuffer[pe][ve]);else r.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)r.deleteFramebuffer(T.__webglFramebuffer[pe]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=D.textures;for(let pe=0,ve=J.length;pe<ve;pe++){const ce=o.get(J[pe]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),c.memory.textures--),o.remove(J[pe])}o.remove(D)}let V=0;function se(){V=0}function Q(){const D=V;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),V+=1,D}function le(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function de(D,T){const J=o.get(D);if(D.isVideoTexture&&et(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){const pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(J,D,T);return}}t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+T)}function ue(D,T){const J=o.get(D);if(D.version>0&&J.__version!==D.version){Re(J,D,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+T)}function he(D,T){const J=o.get(D);if(D.version>0&&J.__version!==D.version){Re(J,D,T);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+T)}function B(D,T){const J=o.get(D);if(D.version>0&&J.__version!==D.version){Se(J,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+T)}const fe={[wa]:r.REPEAT,[hi]:r.CLAMP_TO_EDGE,[yd]:r.MIRRORED_REPEAT},ae={[yn]:r.NEAREST,[OS]:r.NEAREST_MIPMAP_NEAREST,[Hl]:r.NEAREST_MIPMAP_LINEAR,[Gr]:r.LINEAR,[wf]:r.LINEAR_MIPMAP_NEAREST,[wo]:r.LINEAR_MIPMAP_LINEAR},F={[VS]:r.NEVER,[YS]:r.ALWAYS,[GS]:r.LESS,[l_]:r.LEQUAL,[WS]:r.EQUAL,[$S]:r.GEQUAL,[XS]:r.GREATER,[jS]:r.NOTEQUAL};function ie(D,T){if(T.type===pi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Gr||T.magFilter===wf||T.magFilter===Hl||T.magFilter===wo||T.minFilter===Gr||T.minFilter===wf||T.minFilter===Hl||T.minFilter===wo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,fe[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,fe[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,fe[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ae[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ae[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yn||T.minFilter!==Hl&&T.minFilter!==wo||T.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||o.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),o.get(T).__currentAnisotropy=T.anisotropy}}}function Be(D,T){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",I));const pe=T.source;let ve=y.get(pe);ve===void 0&&(ve={},y.set(pe,ve));const ce=le(T);if(ce!==D.__cacheKey){ve[ce]===void 0&&(ve[ce]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,J=!0),ve[ce].usedTimes++;const qe=ve[D.__cacheKey];qe!==void 0&&(ve[D.__cacheKey].usedTimes--,qe.usedTimes===0&&b(T)),D.__cacheKey=ce,D.__webglTexture=ve[ce].texture}return J}function te(D,T,J){return Math.floor(Math.floor(D/J)/T)}function me(D,T,J,pe){const ce=D.updateRanges;if(ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,J,pe,T.data);else{ce.sort((_e,ze)=>_e.start-ze.start);let qe=0;for(let _e=1;_e<ce.length;_e++){const ze=ce[qe],rt=ce[_e],tt=ze.start+ze.count,De=te(rt.start,T.width,4),ot=te(ze.start,T.width,4);rt.start<=tt+1&&De===ot&&te(rt.start+rt.count-1,T.width,4)===De?ze.count=Math.max(ze.count,rt.start+rt.count-ze.start):(++qe,ce[qe]=rt)}ce.length=qe+1;const Le=r.getParameter(r.UNPACK_ROW_LENGTH),Ve=r.getParameter(r.UNPACK_SKIP_PIXELS),Ze=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let _e=0,ze=ce.length;_e<ze;_e++){const rt=ce[_e],tt=Math.floor(rt.start/4),De=Math.ceil(rt.count/4),ot=tt%T.width,G=Math.floor(tt/T.width),Ne=De,xe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),r.pixelStorei(r.UNPACK_SKIP_ROWS,G),t.texSubImage2D(r.TEXTURE_2D,0,ot,G,Ne,xe,J,pe,T.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ze)}}function Re(D,T,J){let pe=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=r.TEXTURE_3D);const ve=Be(D,T),ce=T.source;t.bindTexture(pe,D.__webglTexture,r.TEXTURE0+J);const qe=o.get(ce);if(ce.version!==qe.__version||ve===!0){t.activeTexture(r.TEXTURE0+J);const Le=bt.getPrimaries(bt.workingColorSpace),Ve=T.colorSpace===qi?null:bt.getPrimaries(T.colorSpace),Ze=T.colorSpace===qi||Le===Ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let _e=M(T.image,!1,s.maxTextureSize);_e=ct(T,_e);const ze=l.convert(T.format,T.colorSpace),rt=l.convert(T.type);let tt=P(T.internalFormat,ze,rt,T.colorSpace,T.isVideoTexture);ie(pe,T);let De;const ot=T.mipmaps,G=T.isVideoTexture!==!0,Ne=qe.__version===void 0||ve===!0,xe=ce.dataReady,Ue=H(T,_e);if(T.isDepthTexture)tt=A(T.format===Aa,T.type),Ne&&(G?t.texStorage2D(r.TEXTURE_2D,1,tt,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,tt,_e.width,_e.height,0,ze,rt,null));else if(T.isDataTexture)if(ot.length>0){G&&Ne&&t.texStorage2D(r.TEXTURE_2D,Ue,tt,ot[0].width,ot[0].height);for(let we=0,ge=ot.length;we<ge;we++)De=ot[we],G?xe&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,De.width,De.height,ze,rt,De.data):t.texImage2D(r.TEXTURE_2D,we,tt,De.width,De.height,0,ze,rt,De.data);T.generateMipmaps=!1}else G?(Ne&&t.texStorage2D(r.TEXTURE_2D,Ue,tt,_e.width,_e.height),xe&&me(T,_e,ze,rt)):t.texImage2D(r.TEXTURE_2D,0,tt,_e.width,_e.height,0,ze,rt,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){G&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,tt,ot[0].width,ot[0].height,_e.depth);for(let we=0,ge=ot.length;we<ge;we++)if(De=ot[we],T.format!==Cr)if(ze!==null)if(G){if(xe)if(T.layerUpdates.size>0){const Fe=Og(De.width,De.height,T.format,T.type);for(const ft of T.layerUpdates){const Pt=De.data.subarray(ft*Fe/De.data.BYTES_PER_ELEMENT,(ft+1)*Fe/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,ft,De.width,De.height,1,ze,Pt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,De.width,De.height,_e.depth,ze,De.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,we,tt,De.width,De.height,_e.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?xe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,De.width,De.height,_e.depth,ze,rt,De.data):t.texImage3D(r.TEXTURE_2D_ARRAY,we,tt,De.width,De.height,_e.depth,0,ze,rt,De.data)}else{G&&Ne&&t.texStorage2D(r.TEXTURE_2D,Ue,tt,ot[0].width,ot[0].height);for(let we=0,ge=ot.length;we<ge;we++)De=ot[we],T.format!==Cr?ze!==null?G?xe&&t.compressedTexSubImage2D(r.TEXTURE_2D,we,0,0,De.width,De.height,ze,De.data):t.compressedTexImage2D(r.TEXTURE_2D,we,tt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?xe&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,De.width,De.height,ze,rt,De.data):t.texImage2D(r.TEXTURE_2D,we,tt,De.width,De.height,0,ze,rt,De.data)}else if(T.isDataArrayTexture)if(G){if(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,tt,_e.width,_e.height,_e.depth),xe)if(T.layerUpdates.size>0){const we=Og(_e.width,_e.height,T.format,T.type);for(const ge of T.layerUpdates){const Fe=_e.data.subarray(ge*we/_e.data.BYTES_PER_ELEMENT,(ge+1)*we/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,_e.width,_e.height,1,ze,rt,Fe)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,ze,rt,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,tt,_e.width,_e.height,_e.depth,0,ze,rt,_e.data);else if(T.isData3DTexture)G?(Ne&&t.texStorage3D(r.TEXTURE_3D,Ue,tt,_e.width,_e.height,_e.depth),xe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,ze,rt,_e.data)):t.texImage3D(r.TEXTURE_3D,0,tt,_e.width,_e.height,_e.depth,0,ze,rt,_e.data);else if(T.isFramebufferTexture){if(Ne)if(G)t.texStorage2D(r.TEXTURE_2D,Ue,tt,_e.width,_e.height);else{let we=_e.width,ge=_e.height;for(let Fe=0;Fe<Ue;Fe++)t.texImage2D(r.TEXTURE_2D,Fe,tt,we,ge,0,ze,rt,null),we>>=1,ge>>=1}}else if(ot.length>0){if(G&&Ne){const we=zt(ot[0]);t.texStorage2D(r.TEXTURE_2D,Ue,tt,we.width,we.height)}for(let we=0,ge=ot.length;we<ge;we++)De=ot[we],G?xe&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,ze,rt,De):t.texImage2D(r.TEXTURE_2D,we,tt,ze,rt,De);T.generateMipmaps=!1}else if(G){if(Ne){const we=zt(_e);t.texStorage2D(r.TEXTURE_2D,Ue,tt,we.width,we.height)}xe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,rt,_e)}else t.texImage2D(r.TEXTURE_2D,0,tt,ze,rt,_e);x(T)&&_(pe),qe.__version=ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Se(D,T,J){if(T.image.length!==6)return;const pe=Be(D,T),ve=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+J);const ce=o.get(ve);if(ve.version!==ce.__version||pe===!0){t.activeTexture(r.TEXTURE0+J);const qe=bt.getPrimaries(bt.workingColorSpace),Le=T.colorSpace===qi?null:bt.getPrimaries(T.colorSpace),Ve=T.colorSpace===qi||qe===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Ze=T.isCompressedTexture||T.image[0].isCompressedTexture,_e=T.image[0]&&T.image[0].isDataTexture,ze=[];for(let ge=0;ge<6;ge++)!Ze&&!_e?ze[ge]=M(T.image[ge],!0,s.maxCubemapSize):ze[ge]=_e?T.image[ge].image:T.image[ge],ze[ge]=ct(T,ze[ge]);const rt=ze[0],tt=l.convert(T.format,T.colorSpace),De=l.convert(T.type),ot=P(T.internalFormat,tt,De,T.colorSpace),G=T.isVideoTexture!==!0,Ne=ce.__version===void 0||pe===!0,xe=ve.dataReady;let Ue=H(T,rt);ie(r.TEXTURE_CUBE_MAP,T);let we;if(Ze){G&&Ne&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,ot,rt.width,rt.height);for(let ge=0;ge<6;ge++){we=ze[ge].mipmaps;for(let Fe=0;Fe<we.length;Fe++){const ft=we[Fe];T.format!==Cr?tt!==null?G?xe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,0,0,ft.width,ft.height,tt,ft.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,ot,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,0,0,ft.width,ft.height,tt,De,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,ot,ft.width,ft.height,0,tt,De,ft.data)}}}else{if(we=T.mipmaps,G&&Ne){we.length>0&&Ue++;const ge=zt(ze[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,ot,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(_e){G?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ze[ge].width,ze[ge].height,tt,De,ze[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ot,ze[ge].width,ze[ge].height,0,tt,De,ze[ge].data);for(let Fe=0;Fe<we.length;Fe++){const Pt=we[Fe].image[ge].image;G?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,0,0,Pt.width,Pt.height,tt,De,Pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,ot,Pt.width,Pt.height,0,tt,De,Pt.data)}}else{G?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,tt,De,ze[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ot,tt,De,ze[ge]);for(let Fe=0;Fe<we.length;Fe++){const ft=we[Fe];G?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,0,0,tt,De,ft.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,ot,tt,De,ft.image[ge])}}}x(T)&&_(r.TEXTURE_CUBE_MAP),ce.__version=ve.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ae(D,T,J,pe,ve,ce){const qe=l.convert(J.format,J.colorSpace),Le=l.convert(J.type),Ve=P(J.internalFormat,qe,Le,J.colorSpace),Ze=o.get(T),_e=o.get(J);if(_e.__renderTarget=T,!Ze.__hasExternalTextures){const ze=Math.max(1,T.width>>ce),rt=Math.max(1,T.height>>ce);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,ce,Ve,ze,rt,T.depth,0,qe,Le,null):t.texImage2D(ve,ce,Ve,ze,rt,0,qe,Le,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),mt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ve,_e.__webglTexture,0,Ie(T)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,ve,_e.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Z(D,T,J){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const pe=T.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,ce=A(T.stencilBuffer,ve),qe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=Ie(T);mt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Le,ce,T.width,T.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,ce,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ce,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qe,r.RENDERBUFFER,D)}else{const pe=T.textures;for(let ve=0;ve<pe.length;ve++){const ce=pe[ve],qe=l.convert(ce.format,ce.colorSpace),Le=l.convert(ce.type),Ve=P(ce.internalFormat,qe,Le,ce.colorSpace),Ze=Ie(T);J&&mt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,Ve,T.width,T.height):mt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,Ve,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ve,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=o.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),de(T.depthTexture,0);const ve=pe.__webglTexture,ce=Ie(T);if(T.depthTexture.format===Ca)mt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Aa)mt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function be(D){const T=o.get(D),J=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=pe}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const pe=D.texture.mipmaps;pe&&pe.length>0?Ee(T.__webglFramebuffer[0],D):Ee(T.__webglFramebuffer,D)}else if(J){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=r.createRenderbuffer(),Z(T.__webglDepthbuffer[pe],D,!1);else{const ve=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ce)}}else{const pe=D.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Z(T.__webglDepthbuffer,D,!1);else{const ve=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function it(D,T,J){const pe=o.get(D);T!==void 0&&Ae(pe.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&be(D)}function Ke(D){const T=D.texture,J=o.get(D),pe=o.get(T);D.addEventListener("dispose",O);const ve=D.textures,ce=D.isWebGLCubeRenderTarget===!0,qe=ve.length>1;if(qe||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=T.version,c.memory.textures++),ce){J.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Le]=[];for(let Ve=0;Ve<T.mipmaps.length;Ve++)J.__webglFramebuffer[Le][Ve]=r.createFramebuffer()}else J.__webglFramebuffer[Le]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Le=0;Le<T.mipmaps.length;Le++)J.__webglFramebuffer[Le]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(qe)for(let Le=0,Ve=ve.length;Le<Ve;Le++){const Ze=o.get(ve[Le]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&mt(D)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Le=0;Le<ve.length;Le++){const Ve=ve[Le];J.__webglColorRenderbuffer[Le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[Le]);const Ze=l.convert(Ve.format,Ve.colorSpace),_e=l.convert(Ve.type),ze=P(Ve.internalFormat,Ze,_e,Ve.colorSpace,D.isXRRenderTarget===!0),rt=Ie(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,ze,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,J.__webglColorRenderbuffer[Le])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Z(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(r.TEXTURE_CUBE_MAP,T);for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)Ae(J.__webglFramebuffer[Le][Ve],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ve);else Ae(J.__webglFramebuffer[Le],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);x(T)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let Le=0,Ve=ve.length;Le<Ve;Le++){const Ze=ve[Le],_e=o.get(Ze);t.bindTexture(r.TEXTURE_2D,_e.__webglTexture),ie(r.TEXTURE_2D,Ze),Ae(J.__webglFramebuffer,D,Ze,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,0),x(Ze)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Le=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Le=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Le,pe.__webglTexture),ie(Le,T),T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)Ae(J.__webglFramebuffer[Ve],D,T,r.COLOR_ATTACHMENT0,Le,Ve);else Ae(J.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,Le,0);x(T)&&_(Le),t.unbindTexture()}D.depthBuffer&&be(D)}function U(D){const T=D.textures;for(let J=0,pe=T.length;J<pe;J++){const ve=T[J];if(x(ve)){const ce=L(D),qe=o.get(ve).__webglTexture;t.bindTexture(ce,qe),_(ce),t.unbindTexture()}}}const Tt=[],pt=[];function lt(D){if(D.samples>0){if(mt(D)===!1){const T=D.textures,J=D.width,pe=D.height;let ve=r.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qe=o.get(D),Le=T.length>1;if(Le)for(let Ze=0;Ze<T.length;Ze++)t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Ve=D.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Ze=0;Ze<T.length;Ze++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qe.__webglColorRenderbuffer[Ze]);const _e=o.get(T[Ze]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,J,pe,0,0,J,pe,ve,r.NEAREST),d===!0&&(Tt.length=0,pt.length=0,Tt.push(r.COLOR_ATTACHMENT0+Ze),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Tt.push(ce),pt.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Le)for(let Ze=0;Ze<T.length;Ze++){t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,qe.__webglColorRenderbuffer[Ze]);const _e=o.get(T[Ze]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,_e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ie(D){return Math.min(s.maxSamples,D.samples)}function mt(D){const T=o.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function et(D){const T=c.render.frame;m.get(D)!==T&&(m.set(D,T),D.update())}function ct(D,T){const J=D.colorSpace,pe=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==Ms&&J!==qi&&(bt.getTransfer(J)===It?(pe!==Cr||ve!==qr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function zt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=se,this.setTexture2D=de,this.setTexture2DArray=ue,this.setTexture3D=he,this.setTextureCube=B,this.rebindTextures=it,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=mt}function PR(r,e){function t(o,s=qi){let l;const c=bt.getTransfer(s);if(o===qr)return r.UNSIGNED_BYTE;if(o===ah)return r.UNSIGNED_SHORT_4_4_4_4;if(o===lh)return r.UNSIGNED_SHORT_5_5_5_1;if(o===n_)return r.UNSIGNED_INT_5_9_9_9_REV;if(o===e_)return r.BYTE;if(o===t_)return r.SHORT;if(o===Ta)return r.UNSIGNED_SHORT;if(o===sh)return r.INT;if(o===Ro)return r.UNSIGNED_INT;if(o===pi)return r.FLOAT;if(o===Ia)return r.HALF_FLOAT;if(o===r_)return r.ALPHA;if(o===i_)return r.RGB;if(o===Cr)return r.RGBA;if(o===Ca)return r.DEPTH_COMPONENT;if(o===Aa)return r.DEPTH_STENCIL;if(o===o_)return r.RED;if(o===uh)return r.RED_INTEGER;if(o===s_)return r.RG;if(o===ch)return r.RG_INTEGER;if(o===fh)return r.RGBA_INTEGER;if(o===vu||o===_u||o===xu||o===yu)if(c===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===vu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===_u)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===xu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===yu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===vu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===_u)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===xu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===yu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Sd||o===Ed||o===Md||o===wd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===Sd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Ed)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Md)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===wd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Td||o===Rd||o===Cd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(o===Td||o===Rd)return c===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===Cd)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Ad||o===bd||o===Pd||o===Ld||o===Dd||o===Nd||o===Ud||o===Id||o===Fd||o===Od||o===kd||o===Bd||o===zd||o===Hd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(o===Ad)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===bd)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Pd)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Ld)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Dd)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Nd)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Ud)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Id)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Fd)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Od)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===kd)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Bd)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===zd)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Hd)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Su||o===Vd||o===Gd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(o===Su)return c===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Vd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Gd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===a_||o===Wd||o===Xd||o===jd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(o===Su)return l.COMPRESSED_RED_RGTC1_EXT;if(o===Wd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Xd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===jd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ra?r.UNSIGNED_INT_24_8:r[o]!==void 0?r[o]:null}return{convert:t}}const LR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DR=`
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

}`;class NR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,o){if(this.texture===null){const s=new zn,l=e.properties.get(s);l.__webglTexture=t.texture,(t.depthNear!==o.depthNear||t.depthFar!==o.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,o=new Ji({vertexShader:LR,fragmentShader:DR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wr(new Uu(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UR extends As{constructor(e,t){super();const o=this;let s=null,l=1,c=null,f="local-floor",d=1,p=null,m=null,v=null,y=null,S=null,E=null;const M=new NR,x=t.getContextAttributes();let _=null,L=null;const P=[],A=[],H=new Lt;let I=null;const O=new dr;O.viewport=new Zt;const W=new dr;W.viewport=new Zt;const b=[O,W],R=new tM;let V=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let me=P[te];return me===void 0&&(me=new Xf,P[te]=me),me.getTargetRaySpace()},this.getControllerGrip=function(te){let me=P[te];return me===void 0&&(me=new Xf,P[te]=me),me.getGripSpace()},this.getHand=function(te){let me=P[te];return me===void 0&&(me=new Xf,P[te]=me),me.getHandSpace()};function Q(te){const me=A.indexOf(te.inputSource);if(me===-1)return;const Re=P[me];Re!==void 0&&(Re.update(te.inputSource,te.frame,p||c),Re.dispatchEvent({type:te.type,data:te.inputSource}))}function le(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",de);for(let te=0;te<P.length;te++){const me=A[te];me!==null&&(A[te]=null,P[te].disconnect(me))}V=null,se=null,M.reset(),e.setRenderTarget(_),S=null,y=null,v=null,s=null,L=null,Be.stop(),o.isPresenting=!1,e.setPixelRatio(I),e.setSize(H.width,H.height,!1),o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",le),s.addEventListener("inputsourceschange",de),x.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Se=null,Ae=null;x.depth&&(Ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=x.stencil?Aa:Ca,Se=x.stencil?Ra:Ro);const Z={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};v=new XRWebGLBinding(s,t),y=v.createProjectionLayer(Z),s.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new Co(y.textureWidth,y.textureHeight,{format:Cr,type:qr,depthTexture:new __(y.textureWidth,y.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Re={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Co(S.framebufferWidth,S.framebufferHeight,{format:Cr,type:qr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await s.requestReferenceSpace(f),Be.setContext(s),Be.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function de(te){for(let me=0;me<te.removed.length;me++){const Re=te.removed[me],Se=A.indexOf(Re);Se>=0&&(A[Se]=null,P[Se].disconnect(Re))}for(let me=0;me<te.added.length;me++){const Re=te.added[me];let Se=A.indexOf(Re);if(Se===-1){for(let Z=0;Z<P.length;Z++)if(Z>=A.length){A.push(Re),Se=Z;break}else if(A[Z]===null){A[Z]=Re,Se=Z;break}if(Se===-1)break}const Ae=P[Se];Ae&&Ae.connect(Re)}}const ue=new ne,he=new ne;function B(te,me,Re){ue.setFromMatrixPosition(me.matrixWorld),he.setFromMatrixPosition(Re.matrixWorld);const Se=ue.distanceTo(he),Ae=me.projectionMatrix.elements,Z=Re.projectionMatrix.elements,Ee=Ae[14]/(Ae[10]-1),be=Ae[14]/(Ae[10]+1),it=(Ae[9]+1)/Ae[5],Ke=(Ae[9]-1)/Ae[5],U=(Ae[8]-1)/Ae[0],Tt=(Z[8]+1)/Z[0],pt=Ee*U,lt=Ee*Tt,Ie=Se/(-U+Tt),mt=Ie*-U;if(me.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(mt),te.translateZ(Ie),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ae[10]===-1)te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const et=Ee+Ie,ct=be+Ie,zt=pt-mt,D=lt+(Se-mt),T=it*be/ct*et,J=Ke*be/ct*et;te.projectionMatrix.makePerspective(zt,D,T,J,et,ct),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function fe(te,me){me===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(me.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let me=te.near,Re=te.far;M.texture!==null&&(M.depthNear>0&&(me=M.depthNear),M.depthFar>0&&(Re=M.depthFar)),R.near=W.near=O.near=me,R.far=W.far=O.far=Re,(V!==R.near||se!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,se=R.far),O.layers.mask=te.layers.mask|2,W.layers.mask=te.layers.mask|4,R.layers.mask=O.layers.mask|W.layers.mask;const Se=te.parent,Ae=R.cameras;fe(R,Se);for(let Z=0;Z<Ae.length;Z++)fe(Ae[Z],Se);Ae.length===2?B(R,O,W):R.projectionMatrix.copy(O.projectionMatrix),ae(te,R,Se)};function ae(te,me,Re){Re===null?te.matrix.copy(me.matrixWorld):(te.matrix.copy(Re.matrixWorld),te.matrix.invert(),te.matrix.multiply(me.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ba*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&S===null))return d},this.setFoveation=function(te){d=te,y!==null&&(y.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(R)};let F=null;function ie(te,me){if(m=me.getViewerPose(p||c),E=me,m!==null){const Re=m.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Se=!1;Re.length!==R.cameras.length&&(R.cameras.length=0,Se=!0);for(let Ee=0;Ee<Re.length;Ee++){const be=Re[Ee];let it=null;if(S!==null)it=S.getViewport(be);else{const U=v.getViewSubImage(y,be);it=U.viewport,Ee===0&&(e.setRenderTargetTextures(L,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(L))}let Ke=b[Ee];Ke===void 0&&(Ke=new dr,Ke.layers.enable(Ee),Ke.viewport=new Zt,b[Ee]=Ke),Ke.matrix.fromArray(be.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(be.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(it.x,it.y,it.width,it.height),Ee===0&&(R.matrix.copy(Ke.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Se===!0&&R.cameras.push(Ke)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){const Ee=v.getDepthInformation(Re[0]);Ee&&Ee.isValid&&Ee.texture&&M.init(e,Ee,s.renderState)}}for(let Re=0;Re<P.length;Re++){const Se=A[Re],Ae=P[Re];Se!==null&&Ae!==void 0&&Ae.update(Se,me,p||c)}F&&F(te,me),me.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:me}),E=null}const Be=new y_;Be.setAnimationLoop(ie),this.setAnimationLoop=function(te){F=te},this.dispose=function(){}}}const xo=new Bn,IR=new Jt;function FR(r,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function o(x,_){_.color.getRGB(x.fogColor.value,m_(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,L,P,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(x,_):_.isMeshToonMaterial?(l(x,_),v(x,_)):_.isMeshPhongMaterial?(l(x,_),m(x,_)):_.isMeshStandardMaterial?(l(x,_),y(x,_),_.isMeshPhysicalMaterial&&S(x,_,A)):_.isMeshMatcapMaterial?(l(x,_),E(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),M(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&f(x,_)):_.isPointsMaterial?d(x,_,L,P):_.isSpriteMaterial?p(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Yn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Yn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const L=e.get(_),P=L.envMap,A=L.envMapRotation;P&&(x.envMap.value=P,xo.copy(A),xo.x*=-1,xo.y*=-1,xo.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(xo.y*=-1,xo.z*=-1),x.envMapRotation.value.setFromMatrix4(IR.makeRotationFromEuler(xo)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function f(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function d(x,_,L,P){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*L,x.scale.value=P*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,L){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function M(x,_){const L=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:s}}function OR(r,e,t,o){let s={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,P){const A=P.program;o.uniformBlockBinding(L,A)}function p(L,P){let A=s[L.id];A===void 0&&(E(L),A=m(L),s[L.id]=A,L.addEventListener("dispose",x));const H=P.program;o.updateUBOMapping(L,H);const I=e.render.frame;l[L.id]!==I&&(y(L),l[L.id]=I)}function m(L){const P=v();L.__bindingPointIndex=P;const A=r.createBuffer(),H=L.__size,I=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,H,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,A),A}function v(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const P=s[L.id],A=L.uniforms,H=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let I=0,O=A.length;I<O;I++){const W=Array.isArray(A[I])?A[I]:[A[I]];for(let b=0,R=W.length;b<R;b++){const V=W[b];if(S(V,I,b,H)===!0){const se=V.__offset,Q=Array.isArray(V.value)?V.value:[V.value];let le=0;for(let de=0;de<Q.length;de++){const ue=Q[de],he=M(ue);typeof ue=="number"||typeof ue=="boolean"?(V.__data[0]=ue,r.bufferSubData(r.UNIFORM_BUFFER,se+le,V.__data)):ue.isMatrix3?(V.__data[0]=ue.elements[0],V.__data[1]=ue.elements[1],V.__data[2]=ue.elements[2],V.__data[3]=0,V.__data[4]=ue.elements[3],V.__data[5]=ue.elements[4],V.__data[6]=ue.elements[5],V.__data[7]=0,V.__data[8]=ue.elements[6],V.__data[9]=ue.elements[7],V.__data[10]=ue.elements[8],V.__data[11]=0):(ue.toArray(V.__data,le),le+=he.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,se,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,P,A,H){const I=L.value,O=P+"_"+A;if(H[O]===void 0)return typeof I=="number"||typeof I=="boolean"?H[O]=I:H[O]=I.clone(),!0;{const W=H[O];if(typeof I=="number"||typeof I=="boolean"){if(W!==I)return H[O]=I,!0}else if(W.equals(I)===!1)return W.copy(I),!0}return!1}function E(L){const P=L.uniforms;let A=0;const H=16;for(let O=0,W=P.length;O<W;O++){const b=Array.isArray(P[O])?P[O]:[P[O]];for(let R=0,V=b.length;R<V;R++){const se=b[R],Q=Array.isArray(se.value)?se.value:[se.value];for(let le=0,de=Q.length;le<de;le++){const ue=Q[le],he=M(ue),B=A%H,fe=B%he.boundary,ae=B+fe;A+=fe,ae!==0&&H-ae<he.storage&&(A+=H-ae),se.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=A,A+=he.storage}}}const I=A%H;return I>0&&(A+=H-I),L.__size=A,L.__cache={},this}function M(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function x(L){const P=L.target;P.removeEventListener("dispose",x);const A=c.indexOf(P.__bindingPointIndex);c.splice(A,1),r.deleteBuffer(s[P.id]),delete s[P.id],delete l[P.id]}function _(){for(const L in s)r.deleteBuffer(s[L]);c=[],s={},l={}}return{bind:d,update:p,dispose:_}}class kR{constructor(e={}){const{canvas:t=dE(),context:o=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(o!==null){if(typeof WebGLRenderingContext<"u"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=o.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),M=new Int32Array(4);let x=null,_=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let H=!1;this._outputColorSpace=kn;let I=0,O=0,W=null,b=-1,R=null;const V=new Zt,se=new Zt;let Q=null;const le=new Nt(0);let de=0,ue=t.width,he=t.height,B=1,fe=null,ae=null;const F=new Zt(0,0,ue,he),ie=new Zt(0,0,ue,he);let Be=!1;const te=new gh;let me=!1,Re=!1;const Se=new Jt,Ae=new Jt,Z=new ne,Ee=new Zt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Ke(){return W===null?B:1}let U=o;function Tt(C,$){return t.getContext(C,$)}try{const C={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oh}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",ge,!1),U===null){const $="webgl2";if(U=Tt($,C),U===null)throw Tt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let pt,lt,Ie,mt,et,ct,zt,D,T,J,pe,ve,ce,qe,Le,Ve,Ze,_e,ze,rt,tt,De,ot,G;function Ne(){pt=new YT(U),pt.init(),De=new PR(U,pt),lt=new HT(U,pt,e,De),Ie=new AR(U,pt),lt.reverseDepthBuffer&&y&&Ie.buffers.depth.setReversed(!0),mt=new ZT(U),et=new mR,ct=new bR(U,pt,Ie,et,lt,De,mt),zt=new GT(A),D=new $T(A),T=new rM(U),ot=new BT(U,T),J=new qT(U,T,mt,ot),pe=new QT(U,J,T,mt),ze=new JT(U,lt,ct),Ve=new VT(et),ve=new pR(A,zt,D,pt,lt,ot,Ve),ce=new FR(A,et),qe=new vR,Le=new MR(pt),_e=new kT(A,zt,D,Ie,pe,S,d),Ze=new RR(A,pe,lt),G=new OR(U,mt,lt,Ie),rt=new zT(U,pt,mt),tt=new KT(U,pt,mt),mt.programs=ve.programs,A.capabilities=lt,A.extensions=pt,A.properties=et,A.renderLists=qe,A.shadowMap=Ze,A.state=Ie,A.info=mt}Ne();const xe=new UR(A,U);this.xr=xe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(ue,he,!1))},this.getSize=function(C){return C.set(ue,he)},this.setSize=function(C,$,oe=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=C,he=$,t.width=Math.floor(C*B),t.height=Math.floor($*B),oe===!0&&(t.style.width=C+"px",t.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(ue*B,he*B).floor()},this.setDrawingBufferSize=function(C,$,oe){ue=C,he=$,B=oe,t.width=Math.floor(C*oe),t.height=Math.floor($*oe),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,$,oe,K){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,$,oe,K),Ie.viewport(V.copy(F).multiplyScalar(B).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,$,oe,K){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,$,oe,K),Ie.scissor(se.copy(ie).multiplyScalar(B).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(C){Ie.setScissorTest(Be=C)},this.setOpaqueSort=function(C){fe=C},this.setTransparentSort=function(C){ae=C},this.getClearColor=function(C){return C.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,oe=!0){let K=0;if(C){let Y=!1;if(W!==null){const Ce=W.texture.format;Y=Ce===fh||Ce===ch||Ce===uh}if(Y){const Ce=W.texture.type,Oe=Ce===qr||Ce===Ro||Ce===Ta||Ce===Ra||Ce===ah||Ce===lh,Xe=_e.getClearColor(),We=_e.getClearAlpha(),dt=Xe.r,ut=Xe.g,$e=Xe.b;Oe?(E[0]=dt,E[1]=ut,E[2]=$e,E[3]=We,U.clearBufferuiv(U.COLOR,0,E)):(M[0]=dt,M[1]=ut,M[2]=$e,M[3]=We,U.clearBufferiv(U.COLOR,0,M))}else K|=U.COLOR_BUFFER_BIT}$&&(K|=U.DEPTH_BUFFER_BIT),oe&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),_e.dispose(),qe.dispose(),Le.dispose(),et.dispose(),zt.dispose(),D.dispose(),pe.dispose(),ot.dispose(),G.dispose(),ve.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Ei),xe.removeEventListener("sessionend",mr),qn.stop()};function Ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const C=mt.autoReset,$=Ze.enabled,oe=Ze.autoUpdate,K=Ze.needsUpdate,Y=Ze.type;Ne(),mt.autoReset=C,Ze.enabled=$,Ze.autoUpdate=oe,Ze.needsUpdate=K,Ze.type=Y}function ge(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Fe(C){const $=C.target;$.removeEventListener("dispose",Fe),ft($)}function ft(C){Pt(C),et.remove(C)}function Pt(C){const $=et.get(C).programs;$!==void 0&&($.forEach(function(oe){ve.releaseProgram(oe)}),C.isShaderMaterial&&ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,oe,K,Y,Ce){$===null&&($=be);const Oe=Y.isMesh&&Y.matrixWorld.determinant()<0,Xe=Ft(C,$,oe,K,Y);Ie.setMaterial(K,Oe);let We=oe.index,dt=1;if(K.wireframe===!0){if(We=J.getWireframeAttribute(oe),We===void 0)return;dt=2}const ut=oe.drawRange,$e=oe.attributes.position;let xt=ut.start*dt,vt=(ut.start+ut.count)*dt;Ce!==null&&(xt=Math.max(xt,Ce.start*dt),vt=Math.min(vt,(Ce.start+Ce.count)*dt)),We!==null?(xt=Math.max(xt,0),vt=Math.min(vt,We.count)):$e!=null&&(xt=Math.max(xt,0),vt=Math.min(vt,$e.count));const Gt=vt-xt;if(Gt<0||Gt===1/0)return;ot.setup(Y,K,Xe,oe,We);let Ot,Dt=rt;if(We!==null&&(Ot=T.get(We),Dt=tt,Dt.setIndex(Ot)),Y.isMesh)K.wireframe===!0?(Ie.setLineWidth(K.wireframeLinewidth*Ke()),Dt.setMode(U.LINES)):Dt.setMode(U.TRIANGLES);else if(Y.isLine){let nt=K.linewidth;nt===void 0&&(nt=1),Ie.setLineWidth(nt*Ke()),Y.isLineSegments?Dt.setMode(U.LINES):Y.isLineLoop?Dt.setMode(U.LINE_LOOP):Dt.setMode(U.LINE_STRIP)}else Y.isPoints?Dt.setMode(U.POINTS):Y.isSprite&&Dt.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)_s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const nt=Y._multiDrawStarts,Ut=Y._multiDrawCounts,yt=Y._multiDrawCount,un=We?T.get(We).bytesPerElement:1,Mi=et.get(K).currentProgram.getUniforms();for(let Dn=0;Dn<yt;Dn++)Mi.setValue(U,"_gl_DrawID",Dn),Dt.render(nt[Dn]/un,Ut[Dn])}else if(Y.isInstancedMesh)Dt.renderInstances(xt,Gt,Y.count);else if(oe.isInstancedBufferGeometry){const nt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ut=Math.min(oe.instanceCount,nt);Dt.renderInstances(xt,Gt,Ut)}else Dt.render(xt,Gt)};function wt(C,$,oe){C.transparent===!0&&C.side===Hr&&C.forceSinglePass===!1?(C.side=Yn,C.needsUpdate=!0,Ge(C,$,oe),C.side=Zi,C.needsUpdate=!0,Ge(C,$,oe),C.side=Hr):Ge(C,$,oe)}this.compile=function(C,$,oe=null){oe===null&&(oe=C),_=Le.get(oe),_.init($),P.push(_),oe.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),C!==oe&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const K=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ce=Y.material;if(Ce)if(Array.isArray(Ce))for(let Oe=0;Oe<Ce.length;Oe++){const Xe=Ce[Oe];wt(Xe,oe,Y),K.add(Xe)}else wt(Ce,oe,Y),K.add(Ce)}),_=P.pop(),K},this.compileAsync=function(C,$,oe=null){const K=this.compile(C,$,oe);return new Promise(Y=>{function Ce(){if(K.forEach(function(Oe){et.get(Oe).currentProgram.isReady()&&K.delete(Oe)}),K.size===0){Y(C);return}setTimeout(Ce,10)}pt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let gn=null;function rn(C){gn&&gn(C)}function Ei(){qn.stop()}function mr(){qn.start()}const qn=new y_;qn.setAnimationLoop(rn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(C){gn=C,xe.setAnimationLoop(C),C===null?qn.stop():qn.start()},xe.addEventListener("sessionstart",Ei),xe.addEventListener("sessionend",mr),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera($),$=xe.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,$,W),_=Le.get(C,P.length),_.init($),P.push(_),Ae.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),te.setFromProjectionMatrix(Ae),Re=this.localClippingEnabled,me=Ve.init(this.clippingPlanes,Re),x=qe.get(C,L.length),x.init(),L.push(x),xe.enabled===!0&&xe.isPresenting===!0){const Ce=A.xr.getDepthSensingMesh();Ce!==null&&gr(Ce,$,-1/0,A.sortObjects)}gr(C,$,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(fe,ae),it=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,it&&_e.addToRenderList(x,C),this.info.render.frame++,me===!0&&Ve.beginShadows();const oe=_.state.shadowsArray;Ze.render(oe,C,$),me===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,Y=x.transmissive;if(_.setupLights(),$.isArrayCamera){const Ce=$.cameras;if(Y.length>0)for(let Oe=0,Xe=Ce.length;Oe<Xe;Oe++){const We=Ce[Oe];Lr(K,Y,C,We)}it&&_e.render(C);for(let Oe=0,Xe=Ce.length;Oe<Xe;Oe++){const We=Ce[Oe];Kr(x,C,We,We.viewport)}}else Y.length>0&&Lr(K,Y,C,$),it&&_e.render(C),Kr(x,C,$);W!==null&&O===0&&(ct.updateMultisampleRenderTarget(W),ct.updateRenderTargetMipmap(W)),C.isScene===!0&&C.onAfterRender(A,C,$),ot.resetDefaultState(),b=-1,R=null,P.pop(),P.length>0?(_=P[P.length-1],me===!0&&Ve.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?x=L[L.length-1]:x=null};function gr(C,$,oe,K){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){K&&Ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const Oe=pe.update(C),Xe=C.material;Xe.visible&&x.push(C,Oe,Xe,oe,Ee.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){const Oe=pe.update(C),Xe=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ee.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ee.copy(Oe.boundingSphere.center)),Ee.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(Xe)){const We=Oe.groups;for(let dt=0,ut=We.length;dt<ut;dt++){const $e=We[dt],xt=Xe[$e.materialIndex];xt&&xt.visible&&x.push(C,Oe,xt,oe,Ee.z,$e)}}else Xe.visible&&x.push(C,Oe,Xe,oe,Ee.z,null)}}const Ce=C.children;for(let Oe=0,Xe=Ce.length;Oe<Xe;Oe++)gr(Ce[Oe],$,oe,K)}function Kr(C,$,oe,K){const Y=C.opaque,Ce=C.transmissive,Oe=C.transparent;_.setupLightsView(oe),me===!0&&Ve.setGlobalState(A.clippingPlanes,oe),K&&Ie.viewport(V.copy(K)),Y.length>0&&Dr(Y,$,oe),Ce.length>0&&Dr(Ce,$,oe),Oe.length>0&&Dr(Oe,$,oe),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Lr(C,$,oe,K){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[K.id]===void 0&&(_.state.transmissionRenderTarget[K.id]=new Co(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Ia:qr,minFilter:wo,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Ce=_.state.transmissionRenderTarget[K.id],Oe=K.viewport||V;Ce.setSize(Oe.z*A.transmissionResolutionScale,Oe.w*A.transmissionResolutionScale);const Xe=A.getRenderTarget(),We=A.getActiveCubeFace(),dt=A.getActiveMipmapLevel();A.setRenderTarget(Ce),A.getClearColor(le),de=A.getClearAlpha(),de<1&&A.setClearColor(16777215,.5),A.clear(),it&&_e.render(oe);const ut=A.toneMapping;A.toneMapping=gi;const $e=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),_.setupLightsView(K),me===!0&&Ve.setGlobalState(A.clippingPlanes,K),Dr(C,oe,K),ct.updateMultisampleRenderTarget(Ce),ct.updateRenderTargetMipmap(Ce),pt.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let vt=0,Gt=$.length;vt<Gt;vt++){const Ot=$[vt],Dt=Ot.object,nt=Ot.geometry,Ut=Ot.material,yt=Ot.group;if(Ut.side===Hr&&Dt.layers.test(K.layers)){const un=Ut.side;Ut.side=Yn,Ut.needsUpdate=!0,bo(Dt,oe,K,nt,Ut,yt),Ut.side=un,Ut.needsUpdate=!0,xt=!0}}xt===!0&&(ct.updateMultisampleRenderTarget(Ce),ct.updateRenderTargetMipmap(Ce))}A.setRenderTarget(Xe,We,dt),A.setClearColor(le,de),$e!==void 0&&(K.viewport=$e),A.toneMapping=ut}function Dr(C,$,oe){const K=$.isScene===!0?$.overrideMaterial:null;for(let Y=0,Ce=C.length;Y<Ce;Y++){const Oe=C[Y],Xe=Oe.object,We=Oe.geometry,dt=Oe.group;let ut=Oe.material;ut.allowOverride===!0&&K!==null&&(ut=K),Xe.layers.test(oe.layers)&&bo(Xe,$,oe,We,ut,dt)}}function bo(C,$,oe,K,Y,Ce){C.onBeforeRender(A,$,oe,K,Y,Ce),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(A,$,oe,K,C,Ce),Y.transparent===!0&&Y.side===Hr&&Y.forceSinglePass===!1?(Y.side=Yn,Y.needsUpdate=!0,A.renderBufferDirect(oe,$,K,Y,C,Ce),Y.side=Zi,Y.needsUpdate=!0,A.renderBufferDirect(oe,$,K,Y,C,Ce),Y.side=Hr):A.renderBufferDirect(oe,$,K,Y,C,Ce),C.onAfterRender(A,$,oe,K,Y,Ce)}function Ge(C,$,oe){$.isScene!==!0&&($=be);const K=et.get(C),Y=_.state.lights,Ce=_.state.shadowsArray,Oe=Y.state.version,Xe=ve.getParameters(C,Y.state,Ce,$,oe),We=ve.getProgramCacheKey(Xe);let dt=K.programs;K.environment=C.isMeshStandardMaterial?$.environment:null,K.fog=$.fog,K.envMap=(C.isMeshStandardMaterial?D:zt).get(C.envMap||K.environment),K.envMapRotation=K.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,dt===void 0&&(C.addEventListener("dispose",Fe),dt=new Map,K.programs=dt);let ut=dt.get(We);if(ut!==void 0){if(K.currentProgram===ut&&K.lightsStateVersion===Oe)return Et(C,Xe),ut}else Xe.uniforms=ve.getUniforms(C),C.onBeforeCompile(Xe,A),ut=ve.acquireProgram(Xe,We),dt.set(We,ut),K.uniforms=Xe.uniforms;const $e=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=Ve.uniform),Et(C,Xe),K.needsLights=Ln(C),K.lightsStateVersion=Oe,K.needsLights&&($e.ambientLightColor.value=Y.state.ambient,$e.lightProbe.value=Y.state.probe,$e.directionalLights.value=Y.state.directional,$e.directionalLightShadows.value=Y.state.directionalShadow,$e.spotLights.value=Y.state.spot,$e.spotLightShadows.value=Y.state.spotShadow,$e.rectAreaLights.value=Y.state.rectArea,$e.ltc_1.value=Y.state.rectAreaLTC1,$e.ltc_2.value=Y.state.rectAreaLTC2,$e.pointLights.value=Y.state.point,$e.pointLightShadows.value=Y.state.pointShadow,$e.hemisphereLights.value=Y.state.hemi,$e.directionalShadowMap.value=Y.state.directionalShadowMap,$e.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,$e.spotShadowMap.value=Y.state.spotShadowMap,$e.spotLightMatrix.value=Y.state.spotLightMatrix,$e.spotLightMap.value=Y.state.spotLightMap,$e.pointShadowMap.value=Y.state.pointShadowMap,$e.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=ut,K.uniformsList=null,ut}function Yt(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Eu.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function Et(C,$){const oe=et.get(C);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.batchingColor=$.batchingColor,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.instancingMorph=$.instancingMorph,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function Ft(C,$,oe,K,Y){$.isScene!==!0&&($=be),ct.resetTextureUnits();const Ce=$.fog,Oe=K.isMeshStandardMaterial?$.environment:null,Xe=W===null?A.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ms,We=(K.isMeshStandardMaterial?D:zt).get(K.envMap||Oe),dt=K.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ut=!!oe.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),$e=!!oe.morphAttributes.position,xt=!!oe.morphAttributes.normal,vt=!!oe.morphAttributes.color;let Gt=gi;K.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Gt=A.toneMapping);const Ot=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Dt=Ot!==void 0?Ot.length:0,nt=et.get(K),Ut=_.state.lights;if(me===!0&&(Re===!0||C!==R)){const vn=C===R&&K.id===b;Ve.setState(K,C,vn)}let yt=!1;K.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Ut.state.version||nt.outputColorSpace!==Xe||Y.isBatchedMesh&&nt.batching===!1||!Y.isBatchedMesh&&nt.batching===!0||Y.isBatchedMesh&&nt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&nt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&nt.instancing===!1||!Y.isInstancedMesh&&nt.instancing===!0||Y.isSkinnedMesh&&nt.skinning===!1||!Y.isSkinnedMesh&&nt.skinning===!0||Y.isInstancedMesh&&nt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&nt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&nt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&nt.instancingMorph===!1&&Y.morphTexture!==null||nt.envMap!==We||K.fog===!0&&nt.fog!==Ce||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ve.numPlanes||nt.numIntersection!==Ve.numIntersection)||nt.vertexAlphas!==dt||nt.vertexTangents!==ut||nt.morphTargets!==$e||nt.morphNormals!==xt||nt.morphColors!==vt||nt.toneMapping!==Gt||nt.morphTargetsCount!==Dt)&&(yt=!0):(yt=!0,nt.__version=K.version);let un=nt.currentProgram;yt===!0&&(un=Ge(K,$,Y));let Mi=!1,Dn=!1,Zr=!1;const kt=un.getUniforms(),Mn=nt.uniforms;if(Ie.useProgram(un.program)&&(Mi=!0,Dn=!0,Zr=!0),K.id!==b&&(b=K.id,Dn=!0),Mi||R!==C){Ie.buffers.depth.getReversed()?(Se.copy(C.projectionMatrix),pE(Se),mE(Se),kt.setValue(U,"projectionMatrix",Se)):kt.setValue(U,"projectionMatrix",C.projectionMatrix),kt.setValue(U,"viewMatrix",C.matrixWorldInverse);const fn=kt.map.cameraPosition;fn!==void 0&&fn.setValue(U,Z.setFromMatrixPosition(C.matrixWorld)),lt.logarithmicDepthBuffer&&kt.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&kt.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Dn=!0,Zr=!0)}if(Y.isSkinnedMesh){kt.setOptional(U,Y,"bindMatrix"),kt.setOptional(U,Y,"bindMatrixInverse");const vn=Y.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),kt.setValue(U,"boneTexture",vn.boneTexture,ct))}Y.isBatchedMesh&&(kt.setOptional(U,Y,"batchingTexture"),kt.setValue(U,"batchingTexture",Y._matricesTexture,ct),kt.setOptional(U,Y,"batchingIdTexture"),kt.setValue(U,"batchingIdTexture",Y._indirectTexture,ct),kt.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&kt.setValue(U,"batchingColorTexture",Y._colorsTexture,ct));const cn=oe.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&ze.update(Y,oe,un),(Dn||nt.receiveShadow!==Y.receiveShadow)&&(nt.receiveShadow=Y.receiveShadow,kt.setValue(U,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Mn.envMap.value=We,Mn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&$.environment!==null&&(Mn.envMapIntensity.value=$.environmentIntensity),Dn&&(kt.setValue(U,"toneMappingExposure",A.toneMappingExposure),nt.needsLights&&qt(Mn,Zr),Ce&&K.fog===!0&&ce.refreshFogUniforms(Mn,Ce),ce.refreshMaterialUniforms(Mn,K,B,he,_.state.transmissionRenderTarget[C.id]),Eu.upload(U,Yt(nt),Mn,ct)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Eu.upload(U,Yt(nt),Mn,ct),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&kt.setValue(U,"center",Y.center),kt.setValue(U,"modelViewMatrix",Y.modelViewMatrix),kt.setValue(U,"normalMatrix",Y.normalMatrix),kt.setValue(U,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const vn=K.uniformsGroups;for(let fn=0,Rt=vn.length;fn<Rt;fn++){const Nr=vn[fn];G.update(Nr,un),G.bind(Nr,un)}}return un}function qt(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function Ln(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,$,oe){const K=et.get(C);K.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),et.get(C.texture).__webglTexture=$,et.get(C.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:oe,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const oe=et.get(C);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0};const Sn=U.createFramebuffer();this.setRenderTarget=function(C,$=0,oe=0){W=C,I=$,O=oe;let K=!0,Y=null,Ce=!1,Oe=!1;if(C){const We=et.get(C);if(We.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(U.FRAMEBUFFER,null),K=!1;else if(We.__webglFramebuffer===void 0)ct.setupRenderTarget(C);else if(We.__hasExternalTextures)ct.rebindTextures(C,et.get(C.texture).__webglTexture,et.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $e=C.depthTexture;if(We.__boundDepthTexture!==$e){if($e!==null&&et.has($e)&&(C.width!==$e.image.width||C.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(C)}}const dt=C.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Oe=!0);const ut=et.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ut[$])?Y=ut[$][oe]:Y=ut[$],Ce=!0):C.samples>0&&ct.useMultisampledRTT(C)===!1?Y=et.get(C).__webglMultisampledFramebuffer:Array.isArray(ut)?Y=ut[oe]:Y=ut,V.copy(C.viewport),se.copy(C.scissor),Q=C.scissorTest}else V.copy(F).multiplyScalar(B).floor(),se.copy(ie).multiplyScalar(B).floor(),Q=Be;if(oe!==0&&(Y=Sn),Ie.bindFramebuffer(U.FRAMEBUFFER,Y)&&K&&Ie.drawBuffers(C,Y),Ie.viewport(V),Ie.scissor(se),Ie.setScissorTest(Q),Ce){const We=et.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+$,We.__webglTexture,oe)}else if(Oe){const We=et.get(C.texture),dt=$;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,We.__webglTexture,oe,dt)}else if(C!==null&&oe!==0){const We=et.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,We.__webglTexture,oe)}b=-1},this.readRenderTargetPixels=function(C,$,oe,K,Y,Ce,Oe,Xe=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(We=We[Oe]),We){Ie.bindFramebuffer(U.FRAMEBUFFER,We);try{const dt=C.textures[Xe],ut=dt.format,$e=dt.type;if(!lt.textureFormatReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-K&&oe>=0&&oe<=C.height-Y&&(C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Xe),U.readPixels($,oe,K,Y,De.convert(ut),De.convert($e),Ce))}finally{const dt=W!==null?et.get(W).__webglFramebuffer:null;Ie.bindFramebuffer(U.FRAMEBUFFER,dt)}}},this.readRenderTargetPixelsAsync=async function(C,$,oe,K,Y,Ce,Oe,Xe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(We=We[Oe]),We)if($>=0&&$<=C.width-K&&oe>=0&&oe<=C.height-Y){Ie.bindFramebuffer(U.FRAMEBUFFER,We);const dt=C.textures[Xe],ut=dt.format,$e=dt.type;if(!lt.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.bufferData(U.PIXEL_PACK_BUFFER,Ce.byteLength,U.STREAM_READ),C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Xe),U.readPixels($,oe,K,Y,De.convert(ut),De.convert($e),0);const vt=W!==null?et.get(W).__webglFramebuffer:null;Ie.bindFramebuffer(U.FRAMEBUFFER,vt);const Gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await hE(U,Gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ce),U.deleteBuffer(xt),U.deleteSync(Gt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,oe=0){const K=Math.pow(2,-oe),Y=Math.floor(C.image.width*K),Ce=Math.floor(C.image.height*K),Oe=$!==null?$.x:0,Xe=$!==null?$.y:0;ct.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,oe,0,0,Oe,Xe,Y,Ce),Ie.unbindTexture()};const Kn=U.createFramebuffer(),En=U.createFramebuffer();this.copyTextureToTexture=function(C,$,oe=null,K=null,Y=0,Ce=null){Ce===null&&(Y!==0?(_s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=Y,Y=0):Ce=0);let Oe,Xe,We,dt,ut,$e,xt,vt,Gt;const Ot=C.isCompressedTexture?C.mipmaps[Ce]:C.image;if(oe!==null)Oe=oe.max.x-oe.min.x,Xe=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,dt=oe.min.x,ut=oe.min.y,$e=oe.isBox3?oe.min.z:0;else{const cn=Math.pow(2,-Y);Oe=Math.floor(Ot.width*cn),Xe=Math.floor(Ot.height*cn),C.isDataArrayTexture?We=Ot.depth:C.isData3DTexture?We=Math.floor(Ot.depth*cn):We=1,dt=0,ut=0,$e=0}K!==null?(xt=K.x,vt=K.y,Gt=K.z):(xt=0,vt=0,Gt=0);const Dt=De.convert($.format),nt=De.convert($.type);let Ut;$.isData3DTexture?(ct.setTexture3D($,0),Ut=U.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ct.setTexture2DArray($,0),Ut=U.TEXTURE_2D_ARRAY):(ct.setTexture2D($,0),Ut=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,$.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,$.unpackAlignment);const yt=U.getParameter(U.UNPACK_ROW_LENGTH),un=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Mi=U.getParameter(U.UNPACK_SKIP_PIXELS),Dn=U.getParameter(U.UNPACK_SKIP_ROWS),Zr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ot.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ot.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,dt),U.pixelStorei(U.UNPACK_SKIP_ROWS,ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$e);const kt=C.isDataArrayTexture||C.isData3DTexture,Mn=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const cn=et.get(C),vn=et.get($),fn=et.get(cn.__renderTarget),Rt=et.get(vn.__renderTarget);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,fn.__webglFramebuffer),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Nr=0;Nr<We;Nr++)kt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,et.get(C).__webglTexture,Y,$e+Nr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,et.get($).__webglTexture,Ce,Gt+Nr)),U.blitFramebuffer(dt,ut,Oe,Xe,xt,vt,Oe,Xe,U.DEPTH_BUFFER_BIT,U.NEAREST);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||et.has(C)){const cn=et.get(C),vn=et.get($);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,Kn),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,En);for(let fn=0;fn<We;fn++)kt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,cn.__webglTexture,Y,$e+fn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,cn.__webglTexture,Y),Mn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vn.__webglTexture,Ce,Gt+fn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vn.__webglTexture,Ce),Y!==0?U.blitFramebuffer(dt,ut,Oe,Xe,xt,vt,Oe,Xe,U.COLOR_BUFFER_BIT,U.NEAREST):Mn?U.copyTexSubImage3D(Ut,Ce,xt,vt,Gt+fn,dt,ut,Oe,Xe):U.copyTexSubImage2D(Ut,Ce,xt,vt,dt,ut,Oe,Xe);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Mn?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(Ut,Ce,xt,vt,Gt,Oe,Xe,We,Dt,nt,Ot.data):$.isCompressedArrayTexture?U.compressedTexSubImage3D(Ut,Ce,xt,vt,Gt,Oe,Xe,We,Dt,Ot.data):U.texSubImage3D(Ut,Ce,xt,vt,Gt,Oe,Xe,We,Dt,nt,Ot):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ce,xt,vt,Oe,Xe,Dt,nt,Ot.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ce,xt,vt,Ot.width,Ot.height,Dt,Ot.data):U.texSubImage2D(U.TEXTURE_2D,Ce,xt,vt,Oe,Xe,Dt,nt,Ot);U.pixelStorei(U.UNPACK_ROW_LENGTH,yt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,un),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Dn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Zr),Ce===0&&$.generateMipmaps&&U.generateMipmap(Ut),Ie.unbindTexture()},this.copyTextureToTexture3D=function(C,$,oe=null,K=null,Y=0){return _s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,$,oe,K,Y)},this.initRenderTarget=function(C){et.get(C).__webglFramebuffer===void 0&&ct.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ct.setTextureCube(C,0):C.isData3DTexture?ct.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ct.setTexture2DArray(C,0):ct.setTexture2D(C,0),Ie.unbindTexture()},this.resetState=function(){I=0,O=0,W=null,Ie.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}function BR(r){switch(r){case"fa-user-tag":case"fa-person":return X.jsxs(X.Fragment,{children:[X.jsx("circle",{cx:"12",cy:"7",r:"3.5"}),X.jsx("path",{d:"M5 21c0-4.2 3.1-7 7-7s7 2.8 7 7"})]});case"fa-venus-mars":return X.jsxs(X.Fragment,{children:[X.jsx("circle",{cx:"8",cy:"9",r:"3.5"}),X.jsx("path",{d:"M8 12.5V21M5 17.5h6"}),X.jsx("circle",{cx:"16.5",cy:"14.5",r:"3.5"}),X.jsx("path",{d:"M19 12l3-3m0 0h-4m4 0v4"})]});case"fa-palette":return X.jsxs(X.Fragment,{children:[X.jsx("path",{d:"M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0 0-5H12a2 2 0 0 1 0-4h3a6 6 0 0 0-3-9Z"}),X.jsx("circle",{cx:"7",cy:"10",r:".7",fill:"currentColor",stroke:"none"}),X.jsx("circle",{cx:"9",cy:"6.5",r:".7",fill:"currentColor",stroke:"none"}),X.jsx("circle",{cx:"13",cy:"5.8",r:".7",fill:"currentColor",stroke:"none"})]});case"fa-eye":return X.jsxs(X.Fragment,{children:[X.jsx("path",{d:"M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z"}),X.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]});case"fa-eye-dropper":return X.jsxs(X.Fragment,{children:[X.jsx("path",{d:"m14 5 5 5M16.5 2.5l5 5-10 10-4 1 1-4 10-10Z"}),X.jsx("path",{d:"M5 19h6"})]});case"fa-scissors":return X.jsxs(X.Fragment,{children:[X.jsx("circle",{cx:"6",cy:"7",r:"2.5"}),X.jsx("circle",{cx:"6",cy:"17",r:"2.5"}),X.jsx("path",{d:"m8 8.5 12 8.5M8 15.5 20 7"})]});case"fa-fill-drip":return X.jsxs(X.Fragment,{children:[X.jsx("path",{d:"m4 14 8-8 6 6-8 8H4v-6Z"}),X.jsx("path",{d:"M15 5 12 2"}),X.jsx("path",{d:"M20 15s2 2.2 2 3.5a2 2 0 0 1-4 0c0-1.3 2-3.5 2-3.5Z"})]});case"fa-hat-cowboy":return X.jsxs(X.Fragment,{children:[X.jsx("path",{d:"M4 16h16M7 16l1.5-7h7L17 16"}),X.jsx("path",{d:"M2.5 16c1.5 3 17.5 3 19 0"})]});case"fa-shirt":return X.jsx("path",{d:"M8 4h8l5 4-3 4-2-2v10H8V10l-2 2-3-4 5-4Z"});case"fa-shoe-prints":return X.jsxs(X.Fragment,{children:[X.jsx("ellipse",{cx:"8",cy:"8",rx:"2.5",ry:"4",transform:"rotate(-20 8 8)"}),X.jsx("ellipse",{cx:"16",cy:"16",rx:"2.5",ry:"4",transform:"rotate(-20 16 16)"})]});case"fa-gem":return X.jsxs(X.Fragment,{children:[X.jsx("path",{d:"M6 4h12l4 5-10 11L2 9l4-5Z"}),X.jsx("path",{d:"M2 9h20M8 4l4 16 4-16"})]});case"fa-sliders":return X.jsxs(X.Fragment,{children:[X.jsx("path",{d:"M4 6h5M15 6h5M4 12h10M18 12h2M4 18h2M10 18h10"}),X.jsx("circle",{cx:"12",cy:"6",r:"2"}),X.jsx("circle",{cx:"16",cy:"12",r:"2"}),X.jsx("circle",{cx:"8",cy:"18",r:"2"})]});case"fa-grip-vertical":return X.jsxs(X.Fragment,{children:[X.jsx("circle",{cx:"9",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),X.jsx("circle",{cx:"15",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),X.jsx("circle",{cx:"9",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),X.jsx("circle",{cx:"15",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),X.jsx("circle",{cx:"9",cy:"18",r:"1",fill:"currentColor",stroke:"none"}),X.jsx("circle",{cx:"15",cy:"18",r:"1",fill:"currentColor",stroke:"none"})]});case"fa-chevron-up":return X.jsx("path",{d:"m6 15 6-6 6 6"});case"fa-chevron-down":return X.jsx("path",{d:"m6 9 6 6 6-6"});case"fa-check":return X.jsx("path",{d:"m5 12 4 4L19 6"});case"fa-arrows-rotate":return X.jsxs(X.Fragment,{children:[X.jsx("path",{d:"M20 7v5h-5"}),X.jsx("path",{d:"M4 17v-5h5"}),X.jsx("path",{d:"M6.2 8.2A7 7 0 0 1 18.8 10M17.8 15.8A7 7 0 0 1 5.2 14"})]});case"fa-layer-group":return X.jsxs(X.Fragment,{children:[X.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),X.jsx("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]});case"fa-pause":return X.jsx("path",{d:"M8 5v14M16 5v14"});case"fa-play":return X.jsx("path",{d:"m8 5 11 7-11 7V5Z"});case"fa-download":return X.jsxs(X.Fragment,{children:[X.jsx("path",{d:"M12 3v12m0 0 4-4m-4 4-4-4"}),X.jsx("path",{d:"M5 20h14"})]});default:return X.jsxs(X.Fragment,{children:[X.jsx("circle",{cx:"12",cy:"12",r:"8"}),X.jsx("path",{d:"M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01"})]})}}function di({name:r,className:e=""}){return X.jsx("svg",{className:`skincrafter-icon ${e}`.trim(),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false","data-skincrafter-icon":r,children:BR(r)})}function T_({title:r,icon:e,iconClassName:t="skincrafter-accent-text",className:o="",children:s}){return X.jsxs("section",{className:`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${o}`,children:[X.jsxs("h2",{className:"text-xl font-bold mb-2 skincrafter-heading flex items-center",children:[X.jsx(di,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),r]}),s]})}function lu({icon:r,className:e="",children:t,...o}){return X.jsxs("button",{className:`pixel-button preview-action-button p-2 pixel-border transition-colors ${e}`,...o,children:[r&&X.jsx(di,{name:r,className:"skincrafter-button-icon"}),t]})}const zR=""+new URL("/assets/default-BAcllNor-BAcllNor.png",import.meta.url).href,HR=""+new URL("/assets/male.tintable-fxeAI3uu-fxeAI3uu.png",import.meta.url).href,VR=""+new URL("/assets/male.fixed-DcqZ3kjg-DcqZ3kjg.png",import.meta.url).href,GR=""+new URL("/assets/female.tintable-BLp5_Gdk-BLp5_Gdk.png",import.meta.url).href,WR=""+new URL("/assets/female.fixed-DbzKxh-8-DbzKxh-8.png",import.meta.url).href,XR=""+new URL("/assets/male.fixed-C1cq_pNO-C1cq_pNO.png",import.meta.url).href,jR=""+new URL("/assets/male.tintable-D_4mkZ79-D_4mkZ79.png",import.meta.url).href,$R=""+new URL("/assets/male.fixed-BGzxECBj-BGzxECBj.png",import.meta.url).href,YR=""+new URL("/assets/male.tintable-Dll7q7aD-Dll7q7aD.png",import.meta.url).href,qR=""+new URL("/assets/male.fixed-DKYrqDB3-DKYrqDB3.png",import.meta.url).href,KR=""+new URL("/assets/none.tintable-Bs7knCxE-Bs7knCxE.png",import.meta.url).href,ZR=""+new URL("/assets/none.fixed-DGZLEiFj-DGZLEiFj.png",import.meta.url).href,JR=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,QR=""+new URL("/assets/clasic.fixed-Dli_mmU6-Dli_mmU6.png",import.meta.url).href,eC=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,tC=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,nC=""+new URL("/assets/big.fixed-BuEC2Ubs-BuEC2Ubs.png",import.meta.url).href,rC=""+new URL("/assets/duck-Dz_q_Va_-Dz_q_Va_.png",import.meta.url).href,iC=""+new URL("/assets/hoodie-C1a1is5P-C1a1is5P.png",import.meta.url).href,oC=""+new URL("/assets/pants-gRdPSA1G-gRdPSA1G.png",import.meta.url).href,R_={"textures/preview/default.png":zR,"textures/race/human/male.tintable.png":HR,"textures/race/human/male.fixed.png":VR,"textures/race/human/female.tintable.png":GR,"textures/race/human/female.fixed.png":WR,"textures/race/bear/male.fixed.png":XR,"textures/race/orc/male.tintable.png":jR,"textures/race/orc/male.fixed.png":$R,"textures/race/zombie/male.tintable.png":YR,"textures/race/zombie/male.fixed.png":qR,"textures/race/template/none.tintable.png":KR,"textures/race/template/none.fixed.png":ZR,"textures/eyes/clasic.tintable.png":JR,"textures/eyes/clasic.fixed.png":QR,"textures/eyes/small.tintable.png":eC,"textures/eyes/big.tintable.png":tC,"textures/eyes/big.fixed.png":nC,"textures/hat/duck.png":rC,"textures/top/male/hoodie.png":iC,"textures/bottom/pants.png":oC};function td(r,e){return e?`${e.replace(/\/+$/,"")}/${r.replace(/^\/+/,"")}`:R_[r]}const lv=R_["textures/preview/default.png"],hs=64,sC=["bottom"];function cr(r,e,t,o,s,l,c,f,d={}){const{transparent:p=!1,expand:m=0,rotate180Faces:v=[],flipXFaces:y=[],flipYFaces:S=sC}=d,E=new Set(v),M=new Set(y),x=new Set(S),_=new Ps(e+m,t+m,o+m),L=()=>new mh({transparent:p,toneMapped:!1,alphaTest:p?.1:0,side:Hr}),P=[L(),L(),L(),L(),L(),L()],A=(W,b,R=!1,V=!1)=>{const se=r.clone(),Q=(b[2]-b[0])/hs,le=(b[3]-b[1])/hs,de=b[0]/hs,ue=b[2]/hs,he=1-b[1]/hs,B=1-b[3]/hs;se.magFilter=yn,se.minFilter=yn,se.generateMipmaps=!1,se.wrapS=wa,se.wrapT=wa,se.repeat.set(R?-Q:Q,V?-le:le),se.offset.set(R?ue:de,V?he:B),se.needsUpdate=!0,W.map=se},H=W=>E.has(W)||M.has(W),I=W=>E.has(W)||x.has(W);A(P[0],f.right,H("right"),I("right")),A(P[1],f.left,H("left"),I("left")),A(P[2],f.top,H("top"),I("top")),A(P[3],f.bottom,H("bottom"),I("bottom")),A(P[4],f.front,H("front"),I("front")),A(P[5],f.back,H("back"),I("back"));const O=new Wr(_,P);return O.position.set(s,l,c),O}const aC=-6,lC=6,uu=new ne(-5,16,0),cu=new ne(5,16,0),C_=-1.9,A_=1.9,uv=new ne(C_,6,0),cv=new ne(A_,6,0);function fr(r,e,t,o){if(!r)return;const s=e.clone().sub(t).applyEuler(o).add(t);r.position.copy(s),r.rotation.copy(o)}function uC(r,e,t={}){const{armL:o,armR:s,legL:l,legR:c,armLOL:f,armROL:d,legLOL:p,legROL:m}=e,v=t.leftArmX??lC,y=t.rightArmX??aC,S=new ne(v,12,0),E=new ne(y,12,0),M=new ne(A_,0,0),x=new ne(C_,0,0);if(!(!o||!s||!l||!c)){if([o,s,l,c,f,d,p,m].forEach(_=>_?.rotation.set(0,0,0)),o.position.copy(S),s.position.copy(E),l.position.copy(M),c.position.copy(x),f?.position.copy(S),d?.position.copy(E),p?.position.copy(M),m?.position.copy(x),r==="tpose"){const _=new Bn(0,0,Math.PI/2),L=new Bn(0,0,-Math.PI/2);fr(o,S,cu,_),fr(s,E,uu,L),fr(f,S,cu,_),fr(d,E,uu,L)}else if(r==="walking"){const _=-Math.PI/4,L=Math.PI/4,P=new Bn(_,0,0),A=new Bn(L,0,0),H=new Bn(L,0,0),I=new Bn(_,0,0);fr(o,S,cu,P),fr(s,E,uu,A),fr(l,M,cv,H),fr(c,x,uv,I),fr(f,S,cu,P),fr(d,E,uu,A),fr(p,M,cv,H),fr(m,x,uv,I)}}}const cC={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},fC={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},dC={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},hC={left:[40,20,44,32],right:[47,20,51,32],top:[44,16,47,20],bottom:[47,16,50,20],front:[44,20,47,32],back:[51,20,54,32]},pC={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},mC={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},gC={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},vC={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},_C={left:[40,36,44,48],right:[47,36,51,48],top:[44,32,47,36],bottom:[47,32,50,36],front:[44,36,47,48],back:[51,36,54,48]},xC={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},yC={left:[32,52,36,64],right:[40,52,44,64],top:[36,48,40,52],bottom:[40,48,44,52],front:[36,52,40,64],back:[44,52,48,64]},SC={left:[32,52,36,64],right:[39,52,43,64],top:[36,48,39,52],bottom:[39,48,42,52],front:[36,52,39,64],back:[43,52,46,64]},EC={left:[16,52,20,64],right:[24,52,28,64],top:[20,48,24,52],bottom:[24,48,28,52],front:[20,52,24,64],back:[28,52,32,64]},MC={left:[48,52,52,64],right:[56,52,60,64],top:[52,48,56,52],bottom:[56,48,60,52],front:[52,52,56,64],back:[60,52,64,64]},wC={left:[48,52,52,64],right:[55,52,59,64],top:[52,48,55,52],bottom:[55,48,58,52],front:[52,52,55,64],back:[59,52,62,64]},TC={left:[0,52,4,64],right:[8,52,12,64],top:[4,48,8,52],bottom:[8,48,12,52],front:[4,52,8,64],back:[12,52,16,64]},nd=0,RC=44,CC=24,AC=72,bC=.04,PC=1,LC=.5,fv=-6,dv=6,hv=-5.5,pv=5.5,mv=-1.9,gv=1.9,vv=()=>({armL:null,armR:null,legL:null,legR:null,armLOL:null,armROL:null,legLOL:null,legROL:null,headOL:null,bodyOL:null}),DC={createRenderer:()=>new kR({antialias:!1,alpha:!0}),createTextureLoader:()=>new KE,createResizeObserver:r=>new ResizeObserver(r),requestAnimationFrame:r=>window.requestAnimationFrame(r),cancelAnimationFrame:r=>window.cancelAnimationFrame(r),addWindowResizeListener:r=>window.addEventListener("resize",r),removeWindowResizeListener:r=>window.removeEventListener("resize",r),getDevicePixelRatio:()=>window.devicePixelRatio||1};class NC{constructor(e,t,o=DC){this.container=e,this.dependencies=o,this.pose=t.pose,this.model=t.model,this.showOverlay=t.showOverlay,this.autoRotate=t.autoRotate,this.onError=t.onError;const s=e.clientWidth||1,l=e.clientHeight||1;this.renderer=o.createRenderer(),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=kn,this.renderer.toneMapping=gi,this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(s,l),e.appendChild(this.renderer.domElement),this.camera=new dr(52,s/l,.1,1e3),this.camera.position.set(0,nd,this.cameraDistance),this.camera.lookAt(0,nd,0),this.scene=new HE;const c=new eM(16777215,1);c.position.set(10,10,10),this.scene.add(c),this.group=new ga,this.group.position.y=-10,this.scene.add(this.group),this.textureLoader=o.createTextureLoader(),this.resizeObserver=o.createResizeObserver(this.handleResize),this.resizeObserver.observe(e),o.addWindowResizeListener(this.handleResize),e.addEventListener("wheel",this.handleWheel,{passive:!1}),this.handleResize(),this.scheduleAnimationFrame(),this.setTexture(t.textureUrl)}container;dependencies;renderer;camera;scene;group;textureLoader;resizeObserver;onError;disposedTextures=new WeakSet;pendingTextures=new Map;parts=vv();modelMeshes=[];currentTexture=null;requestedTextureUrl=null;textureLoadVersion=0;animationFrameId=null;disposed=!1;pose;model;showOverlay;autoRotate;cameraDistance=RC;modelRevision=0;textureRevision=0;setTexture(e){if(this.disposed||e===this.requestedTextureUrl)return;this.requestedTextureUrl=e;const t=++this.textureLoadVersion;let o=!1;const s=this.textureLoader.load(e,l=>{o=!0,this.pendingTextures.delete(t),this.handleTextureLoaded(t,l)},void 0,l=>{o=!0;const c=this.pendingTextures.get(t);c&&(this.disposeTexture(c),this.pendingTextures.delete(t)),!this.disposed&&t===this.textureLoadVersion&&this.onError?.({code:"texture_load_failed",textureUrl:e,cause:l})});o||this.pendingTextures.set(t,s)}setModel(e){this.disposed||e===this.model||(this.model=e,this.currentTexture&&this.buildModel(this.currentTexture))}setPose(e){this.disposed||e===this.pose||(this.pose=e,this.applyCurrentPose())}setShowOverlay(e){this.disposed||e===this.showOverlay||(this.showOverlay=e,this.applyOverlayVisibility())}setAutoRotate(e){this.disposed||(this.autoRotate=e)}getDiagnostics(){const e=this.parts.armR?.geometry.parameters.width;return{rendererAttached:this.renderer.domElement.parentNode===this.container,modelRevision:this.modelRevision,textureRevision:this.textureRevision,meshCount:this.modelMeshes.length,rightArmWidth:typeof e=="number"?e:null,overlayVisible:this.getOverlayMeshes().map(t=>t.visible),cameraDistance:this.cameraDistance,rotation:this.group.rotation.y}}dispose(){this.disposed||(this.disposed=!0,this.textureLoadVersion+=1,this.container.removeEventListener("wheel",this.handleWheel),this.dependencies.removeWindowResizeListener(this.handleResize),this.resizeObserver.disconnect(),this.animationFrameId!==null&&(this.dependencies.cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.pendingTextures.forEach(e=>this.disposeTexture(e)),this.pendingTextures.clear(),this.disposeModel(),this.currentTexture&&(this.disposeTexture(this.currentTexture),this.currentTexture=null),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement))}handleResize=()=>{if(this.disposed)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()};handleWheel=e=>{this.disposed||(e.preventDefault(),this.cameraDistance=fE.clamp(this.cameraDistance+e.deltaY*bC,CC,AC),this.camera.position.z=this.cameraDistance,this.camera.lookAt(0,nd,0),this.camera.updateProjectionMatrix())};scheduleAnimationFrame(){this.animationFrameId=this.dependencies.requestAnimationFrame(()=>{this.disposed||(this.autoRotate&&(this.group.rotation.y+=.01),this.renderer.render(this.scene,this.camera),this.scheduleAnimationFrame())})}getClampedDpr(){return Math.min(this.dependencies.getDevicePixelRatio(),2)}handleTextureLoaded(e,t){if(this.disposed||e!==this.textureLoadVersion){this.disposeTexture(t);return}this.configureTexture(t);const o=this.currentTexture;this.modelMeshes.length===0?this.buildModel(t):this.replaceModelTexture(t),this.currentTexture=t,this.textureRevision+=1,o&&o!==t&&this.disposeTexture(o)}configureTexture(e){e.magFilter=yn,e.minFilter=yn,e.generateMipmaps=!1,e.colorSpace=kn,e.wrapS=hi,e.wrapT=hi}buildModel(e){this.disposeModel();const t=this.model==="slim",o=t?3:4,s=t?hv:fv,l=t?pv:dv,c=t?hC:dC,f=t?SC:yC,d=t?_C:vC,p=t?wC:MC,m=cr(e,8,8,8,0,22,0,cC),v=cr(e,8,12,4,0,12,0,fC),y=cr(e,o,12,4,s,12,0,c),S=cr(e,o,12,4,l,12,0,f),E=cr(e,4,12,4,mv,0,0,pC),M=cr(e,4,12,4,gv,0,0,EC),x={transparent:!0,expand:PC},_={transparent:!0,expand:LC},L=cr(e,8,8,8,0,22,0,mC,x),P=cr(e,8,12,4,0,12,0,gC,_),A=cr(e,o,12,4,s,12,0,d,_),H=cr(e,o,12,4,l,12,0,p,_),I=cr(e,4,12,4,mv,0,0,xC,_),O=cr(e,4,12,4,gv,0,0,TC,_);this.parts={armL:S,armR:y,legL:M,legR:E,armLOL:H,armROL:A,legLOL:O,legROL:I,headOL:L,bodyOL:P},this.modelMeshes=[m,v,y,S,E,M,L,P,A,H,I,O],this.group.add(...this.modelMeshes),this.modelRevision+=1,this.applyOverlayVisibility(),this.applyCurrentPose()}replaceModelTexture(e){this.modelMeshes.forEach(t=>{t.material.forEach(o=>{const s=o.map;if(!s)return;const l=e.clone();l.magFilter=yn,l.minFilter=yn,l.generateMipmaps=!1,l.colorSpace=kn,l.wrapS=s.wrapS,l.wrapT=s.wrapT,l.repeat.copy(s.repeat),l.offset.copy(s.offset),l.center.copy(s.center),l.rotation=s.rotation,l.flipY=s.flipY,l.needsUpdate=!0,o.map=l,o.needsUpdate=!0,this.disposeTexture(s)})})}applyCurrentPose(){const e=this.model==="slim";uC(this.pose,{armL:this.parts.armL,armR:this.parts.armR,legL:this.parts.legL,legR:this.parts.legR,armLOL:this.parts.armLOL,armROL:this.parts.armROL,legLOL:this.parts.legLOL,legROL:this.parts.legROL},{leftArmX:e?pv:dv,rightArmX:e?hv:fv})}applyOverlayVisibility(){this.getOverlayMeshes().forEach(e=>{e.visible=this.showOverlay})}getOverlayMeshes(){return[this.parts.headOL,this.parts.bodyOL,this.parts.armLOL,this.parts.armROL,this.parts.legLOL,this.parts.legROL].filter(e=>e!==null)}disposeModel(){this.modelMeshes.forEach(e=>{this.group.remove(e),e.geometry.dispose(),e.material.forEach(t=>{t.map&&(this.disposeTexture(t.map),t.map=null),t.dispose()})}),this.modelMeshes=[],this.parts=vv()}disposeTexture(e){this.disposedTextures.has(e)||(this.disposedTextures.add(e),e.dispose())}}function UC(r,e,t){return new NC(r,e,t)}function IC(r){return{code:"preview_texture_load_failed",category:"preview",message:`Failed to load preview texture: ${r.textureUrl}`,assetUrl:r.textureUrl,cause:r.cause}}function FC({texture:r,pose:e="default",model:t="classic",showOverlay:o=!0,autoRotate:s=!0,style:l,onError:c}){const f=k.useRef(null),d=k.useRef(null),p=k.useRef(c),m=k.useRef({textureUrl:r??lv,pose:e,model:t,showOverlay:o,autoRotate:s,onError:v=>p.current?.(IC(v))});return k.useEffect(()=>{p.current=c},[c]),k.useEffect(()=>{const v=f.current;if(!v)return;let y;try{y=UC(v,m.current)}catch(S){p.current?.({code:"preview_webgl_initialization_failed",category:"preview",message:"Failed to initialize the WebGL skin preview.",cause:S});return}return d.current=y,()=>{y.dispose(),d.current===y&&(d.current=null)}},[]),k.useEffect(()=>{d.current?.setTexture(r??lv)},[r]),k.useEffect(()=>{d.current?.setModel(t)},[t]),k.useEffect(()=>{d.current?.setPose(e)},[e]),k.useEffect(()=>{d.current?.setShowOverlay(o)},[o]),k.useEffect(()=>{d.current?.setAutoRotate(s)},[s]),X.jsx("div",{ref:f,style:{width:"100%",height:"100%",minHeight:0,position:"relative",touchAction:"none",...l??{}}})}const b_=["en","pl"],Ds="en",_v={en:{"app.title":"SkinCrafter","nav.wardrobe":"Wardrobe","nav.skinView":"Skin View","nav.language":"Language","nav.workInProgress":"Work in progress","panel.preview":"Preview","panel.customization":"Customization","panel.loadSkin":"Load Minecraft Skin","action.changePose":"Change Pose","action.hideOverlay":"Hide Overlay","action.showOverlay":"Show Overlay","action.disableAutoRotate":"Stop Rotation","action.enableAutoRotate":"Start Rotation","action.download":"Download","action.downloadSkin":"Download character skin","action.dragLayer":"Drag layer","action.moveLayerUp":"Move layer up","action.moveLayerDown":"Move layer down","action.loadSkin":"Load Skin","action.loading":"Loading...","error.assetLoad":"A skin texture could not be loaded. Check the selected assets and try again.","error.generation":"The skin could not be generated. Change the selection and try again.","error.initialSkin":"The supplied skin is not a valid 64x64 Minecraft PNG.","error.preview":"The 3D preview could not be loaded. Skin editing and download may still be available.","skinView.player":"Player","skinView.username":"Minecraft username","category.race":"Character Race","category.sex":"Sex","category.skinColor":"Skin Color","category.eyes":"Eyes","category.eyesColor":"Eye Color","category.hair":"Hair","category.hairColor":"Hair Color","category.hat":"Hat","category.shirt":"Shirt","category.pants":"Pants","category.shoes":"Shoes","category.accessory":"Accessory","wardrobeColor.primary":"Color","wardrobeColor.secondary":"Secondary color","option.none":"None","option.sex.Male":"Male","option.sex.Female":"Female","option.race.Human":"Human","option.race.Bear":"Bear","option.race.Orc":"Orc","option.race.Zombie":"Zombie","option.race.Template":"Template","option.eyes.Classic":"Classic","option.eyes.Small":"Small","option.eyes.Big":"Big","option.hat.Duck":"Duck","option.shirt.Hoodie":"Hoodie","option.pants.Pants":"Pants","option.color.blue":"Blue","option.color.green":"Green","option.color.brown":"Brown","option.color.blond":"Blond","option.color.black":"Black"},pl:{"app.title":"SkinCrafter","nav.wardrobe":"Kreator","nav.skinView":"Podglad","nav.language":"Jezyk","nav.workInProgress":"Produkt w trakcie prac","panel.preview":"Podglad","panel.customization":"Personalizacja","panel.loadSkin":"Wczytaj skin Minecraft","action.changePose":"Zmien Poze","action.hideOverlay":"Ukryj Warstwe","action.showOverlay":"Pokaz Warstwe","action.disableAutoRotate":"Zatrzymaj Obrot","action.enableAutoRotate":"Wlacz Obrot","action.download":"Pobierz","action.downloadSkin":"Pobierz skin postaci","action.dragLayer":"Przeciagnij warstwe","action.moveLayerUp":"Przesun warstwe wyzej","action.moveLayerDown":"Przesun warstwe nizej","action.loadSkin":"Wczytaj Skin","action.loading":"Wczytywanie...","error.assetLoad":"Nie udalo sie wczytac tekstury skina. Sprawdz wybrane elementy i sprobuj ponownie.","error.generation":"Nie udalo sie wygenerowac skina. Zmien wybor i sprobuj ponownie.","error.initialSkin":"Przekazany skin nie jest prawidlowym plikiem PNG Minecraft 64x64.","error.preview":"Nie udalo sie uruchomic podgladu 3D. Edycja i pobieranie skina moga nadal dzialac.","skinView.player":"Gracz","skinView.username":"Nazwa gracza Minecraft","category.race":"Rasa Postaci","category.sex":"Plec","category.skinColor":"Kolor Skory","category.eyes":"Oczy","category.eyesColor":"Kolor Oczu","category.hair":"Wlosy","category.hairColor":"Kolor Wlosow","category.hat":"Czapka","category.shirt":"Koszulka","category.pants":"Spodnie","category.shoes":"Buty","category.accessory":"Dodatek","wardrobeColor.primary":"Kolor","wardrobeColor.secondary":"Kolor dodatkowy","option.none":"Brak","option.sex.Male":"Mezczyzna","option.sex.Female":"Kobieta","option.race.Human":"Czlowiek","option.race.Bear":"Niedzwiedz","option.race.Orc":"Ork","option.race.Zombie":"Zombie","option.race.Template":"Szablon","option.eyes.Classic":"Klasyczne","option.eyes.Small":"Male","option.eyes.Big":"Duze","option.hat.Duck":"Kaczka","option.shirt.Hoodie":"Bluza","option.pants.Pants":"Spodnie","option.color.blue":"Niebieski","option.color.green":"Zielony","option.color.brown":"Brazowy","option.color.blond":"Blond","option.color.black":"Czarny"}};function OC(r){return!!r&&b_.includes(r)}function ka(r,e){return _v[r][e]??_v[Ds][e]??e}const kC=r=>ka(Ds,r);function BC(r){return r.code==="asset_load_failed"?"error.assetLoad":r.code==="invalid_initial_skin"?"error.initialSkin":r.category==="preview"?"error.preview":"error.generation"}function P_({texture:r,model:e="classic",footerHeight:t=0,t:o=kC,onSave:s,canSave:l,generationStatus:c,generationError:f,onError:d}){const[p,m]=k.useState("default"),[v,y]=k.useState(!0),[S,E]=k.useState(!0),[M,x]=k.useState(null),_=()=>{m(R=>R==="default"?"tpose":R==="tpose"?"walking":"default")},L=()=>{y(R=>!R)},P=()=>{E(R=>!R)},A=l??!!r,H=()=>{if(!r||!A)return;const R=document.createElement("a");R.href=r,R.download="skincrafter-skin.png",R.click()},I=()=>{if(A){if(s){s();return}H()}},O=k.useCallback(R=>{x(R),d?.(R)},[d]);k.useEffect(()=>{x(R=>R?.code==="preview_texture_load_failed"?null:R)},[r]);const W=c==="error"&&f?f:M,b={"--skincrafter-preview-bottom-offset":`${Math.max(0,t)}px`};return X.jsxs(T_,{title:o("panel.preview"),icon:"fa-eye",children:[X.jsx("div",{className:"skincrafter-preview-surface overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full",style:b,children:X.jsx("div",{className:"flex justify-center items-center model-placeholder h-full",children:X.jsx(FC,{texture:r,pose:p,model:e,showOverlay:v,autoRotate:S,onError:O})})}),W&&X.jsx("p",{className:"mt-3 text-sm font-semibold skincrafter-error-text",role:"alert",children:o(BC(W))}),X.jsxs("div",{className:"mt-4 preview-actions",children:[X.jsx(lu,{className:"skincrafter-secondary-action",icon:"fa-arrows-rotate","aria-label":o("action.changePose"),onClick:_,children:o("action.changePose")}),X.jsx(lu,{className:"skincrafter-secondary-action",icon:"fa-layer-group","aria-label":o(v?"action.hideOverlay":"action.showOverlay"),onClick:L,children:o(v?"action.hideOverlay":"action.showOverlay")}),X.jsx(lu,{className:"skincrafter-secondary-action",icon:S?"fa-pause":"fa-play","aria-label":o(S?"action.disableAutoRotate":"action.enableAutoRotate"),onClick:P,children:o(S?"action.disableAutoRotate":"action.enableAutoRotate")}),X.jsx(lu,{className:"skincrafter-secondary-action disabled:opacity-50 disabled:cursor-not-allowed",icon:"fa-download","aria-label":o("action.downloadSkin"),onClick:I,disabled:!A,children:o("action.download")})]})]})}function zC({left:r,right:e}){return X.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[X.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:r}),X.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:e})]})}function HC(r,e){if(r.length===0)return null;for(const t of r){const o=t.top+(t.bottom-t.top)/2;if(e<o)return{targetLayer:t.layer,position:"before"};if(e<=t.bottom)return{targetLayer:t.layer,position:"after"}}return{targetLayer:r[r.length-1].layer,position:"after"}}function VC(r,e,t,o){if(!r.includes(e)||!r.includes(t))return[...r];if(e===t)return[...r];const s=r.filter(c=>c!==e),l=s.indexOf(t)+(o==="after"?1:0);return s.splice(l,0,e),s}function GC({heading:r,icon:e,iconClassName:t="skincrafter-category-icon",className:o="",children:s,...l}){return X.jsxs("div",{className:`option-card skincrafter-surface p-4 pixel-border relative ${r?"pt-5":""} ${o}`,...l,children:[r&&X.jsxs("h3",{className:"font-medium mb-2 flex items-center absolute -top-3 left-4 px-2 skincrafter-surface skincrafter-heading z-10",children:[e&&X.jsx(di,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),r]}),s]})}function $n(r){const e=(r.tintable===void 0?[]:Array.isArray(r.tintable)?r.tintable:[r.tintable]).map(t=>typeof t=="string"?{texture:t}:{...t});if(e.length===0&&!r.fixed)throw new Error("A texture-backed option must define a tintable layer, a fixed layer, or both.");return e.length>0?{tintable:e,...r.fixed?{fixed:r.fixed}:{}}:{fixed:r.fixed}}function Sa(r,e){return r.tintable?{tintable:r.tintable.map(t=>({texture:td(t.texture,e),...t.colorSlot?{colorSlot:t.colorSlot}:{}})),...r.fixed?{fixed:td(r.fixed,e)}:{}}:{fixed:td(r.fixed,e)}}function rd(r){return!!r?.tintable?.length}const xv=r=>/^#[0-9a-f]{6}$/i.test(r);function WC(r){const e=r.textureLayers.tintable??[],t=r.colorSlots??[];if(e.length===0){if(t.length>0)throw new Error("A fixed-only wardrobe item must not define color slots.");return}if(t.length===0)throw new Error("Every tintable wardrobe item must define at least one color slot.");const o=new Map;for(const l of t){if(!l.id.trim())throw new Error("Wardrobe color slot ids must not be empty.");if(o.has(l.id))throw new Error(`Wardrobe color slot "${l.id}" is defined more than once.`);if(l.palette.length===0)throw new Error(`Wardrobe color slot "${l.id}" must define a non-empty palette.`);if(!xv(l.defaultColor)||l.palette.some(c=>!xv(c)))throw new Error(`Wardrobe color slot "${l.id}" must use #RRGGBB palette colors.`);if(!l.palette.includes(l.defaultColor))throw new Error(`Wardrobe color slot "${l.id}" defaultColor must be present in its palette.`);o.set(l.id,l)}const s=new Set;for(const l of e){if(!l.colorSlot||!o.has(l.colorSlot))throw new Error("Every tintable wardrobe layer must reference a declared colorSlot.");s.add(l.colorSlot)}for(const l of t)if(!s.has(l.id))throw new Error(`Wardrobe color slot "${l.id}" is not used by any tintable layer.`)}function Ts(r){const e=r.skinModel;if(e!=="classic"&&e!=="slim")throw new Error('A wardrobe item must define skinModel as "classic" or "slim".');return WC(r),{...r,skinModel:e,...r.colorSlots?{colorSlots:r.colorSlots.map(t=>({...t,palette:[...t.palette]}))}:{}}}function xh(r){const e={};for(const o of["classic","slim"]){const s=r[o];if(!s)continue;const l=Ts(s);if(l.skinModel!==o)throw new Error(`Wardrobe variant "${o}" must declare the same skinModel.`);e[o]=l}const t=Object.values(e).filter(o=>!!o?.colorSlots?.length);if(t.length>1){const o=JSON.stringify(t[0].colorSlots);if(t.some(s=>JSON.stringify(s.colorSlots)!==o))throw new Error("Colorable wardrobe variants for one item must define identical color slots across skin models.")}return e}function XC(r,e){return{skinModel:r.skinModel,textureLayers:Sa(r.textureLayers,e),...r.colorSlots?{colorSlots:r.colorSlots}:{}}}function yh(r,e,t){const o=r[e];return o?XC(o,t):null}function jC(r,e){return r.skinModel===e}const $C=["None","Duck"],YC={Duck:xh({classic:Ts({skinModel:"classic",textureLayers:$n({fixed:"textures/hat/duck.png"})}),slim:Ts({skinModel:"slim",textureLayers:$n({fixed:"textures/hat/duck.png"})})})};function qC(r,e,t){return r==="None"?null:yh(YC[r],e,t)}const KC=["None","Pants"],ZC={Pants:xh({classic:Ts({skinModel:"classic",textureLayers:$n({fixed:"textures/bottom/pants.png"})}),slim:Ts({skinModel:"slim",textureLayers:$n({fixed:"textures/bottom/pants.png"})})})};function JC(r,e,t){return r==="None"?null:yh(ZC[r],e,t)}const L_={Human:{Male:$n({tintable:"textures/race/human/male.tintable.png",fixed:"textures/race/human/male.fixed.png"}),Female:$n({tintable:"textures/race/human/female.tintable.png",fixed:"textures/race/human/female.fixed.png"})},Bear:{Male:$n({fixed:"textures/race/bear/male.fixed.png"})},Orc:{Male:$n({tintable:"textures/race/orc/male.tintable.png",fixed:"textures/race/orc/male.fixed.png"})},Zombie:{Male:$n({tintable:"textures/race/zombie/male.tintable.png",fixed:"textures/race/zombie/male.fixed.png"})},Template:{None:$n({tintable:"textures/race/template/none.tintable.png",fixed:"textures/race/template/none.fixed.png"})}};function D_(r){return Object.keys(L_[r])}function Sh(r,e,t){const o=L_[r],s=D_(r)[0],l=o[e]??o[s];return l?Sa(l,t):null}const QC=["Human","Bear","Orc","Zombie"],eA=["None","Hoodie"],yv=["#4A6FA5","#A33A3A","#2F8F4E","#D6B15D","#7047A3","#5B3A29","#1F1A17","#FFFFFF"],tA={Hoodie:xh({classic:Ts({skinModel:"classic",textureLayers:$n({tintable:[{texture:"textures/top/male/hoodie.png",colorSlot:"primary"}]}),colorSlots:[{id:"primary",labelKey:"wardrobeColor.primary",defaultColor:yv[0],palette:yv}]})})};function nA(r,e,t){return r==="None"?null:yh(tA[r],e,t)}const N_={Human:["#D5BAAA","#E0AC69","#C68642"],Bear:["#5D4037","#8D6E63","#A1887F"],Orc:["#558B2F","#7CB342"],Zombie:["#556B2F"],Template:["#FFFFFF"]},Qi=[{id:"race",labelKey:"category.race",icon:"fa-user-tag",control:"choice"},{id:"sex",labelKey:"category.sex",icon:"fa-venus-mars",control:"choice"},{id:"skinColor",labelKey:"category.skinColor",icon:"fa-palette",control:"color"},{id:"eyes",labelKey:"category.eyes",icon:"fa-eye",control:"choice"},{id:"eyesColor",labelKey:"category.eyesColor",icon:"fa-eye-dropper",control:"color"},{id:"hair",labelKey:"category.hair",icon:"fa-scissors",control:"choice"},{id:"hairColor",labelKey:"category.hairColor",icon:"fa-fill-drip",control:"color"},{id:"hat",labelKey:"category.hat",icon:"fa-hat-cowboy",control:"choice"},{id:"shirt",labelKey:"category.shirt",icon:"fa-shirt",control:"choice"},{id:"pants",labelKey:"category.pants",icon:"fa-person",control:"choice"},{id:"shoes",labelKey:"category.shoes",icon:"fa-shoe-prints",control:"choice"},{id:"accessory",labelKey:"category.accessory",icon:"fa-gem",control:"choice"}],Xr={race:"Human",sex:"Male",skinColor:N_.Human[0],eyes:"Classic",eyesColor:"#2F5D9B",hair:"None",hairColor:"#4A2F20",hat:"None",shirt:"None",pants:"None",shoes:"None",accessory:"None"},xi=["hat","shirt","pants","shoes","accessory"],ms={id:"None",labelKey:"option.none",textureLayers:null},rA={Male:{id:"Male",labelKey:"option.sex.Male",textureLayers:null},Female:{id:"Female",labelKey:"option.sex.Female",textureLayers:null},None:ms},id={Classic:$n({tintable:"textures/eyes/clasic.tintable.png",fixed:"textures/eyes/clasic.fixed.png"}),Small:$n({tintable:"textures/eyes/small.tintable.png"}),Big:$n({tintable:"textures/eyes/big.tintable.png",fixed:"textures/eyes/big.fixed.png"})};function Fu(r){return r.sex==="Female"?"slim":"classic"}function iA(r){return xi.includes(r)}function od(r,e,t,o){return!t||!jC(t,o)?[]:[{id:r,labelKey:e,textureLayers:t.textureLayers,...t.colorSlots?{colorSlots:t.colorSlots}:{}}]}function Ar(r,e,t,o=Fu(e)){if(r==="race")return QC.map(s=>({id:s,labelKey:`option.race.${s}`,textureLayers:Sh(s,"Male",t)}));if(r==="sex")return D_(e.race).map(s=>rA[s]);if(r==="skinColor"){const s=e.race;return N_[s].map(l=>({id:l,labelKey:`option.skinColor.${l}`,color:l}))}return r==="eyes"?[{id:"Classic",labelKey:"option.eyes.Classic",textureLayers:Sa(id.Classic,t)},{id:"Small",labelKey:"option.eyes.Small",textureLayers:Sa(id.Small,t)},{id:"Big",labelKey:"option.eyes.Big",textureLayers:Sa(id.Big,t)}]:r==="eyesColor"?[{id:"#2F5D9B",labelKey:"option.color.blue",color:"#2F5D9B"},{id:"#2F8F4E",labelKey:"option.color.green",color:"#2F8F4E"},{id:"#5B3A29",labelKey:"option.color.brown",color:"#5B3A29"}]:r==="hair"?[ms]:r==="hairColor"?[{id:"#4A2F20",labelKey:"option.color.brown",color:"#4A2F20"},{id:"#D6B15D",labelKey:"option.color.blond",color:"#D6B15D"},{id:"#1F1A17",labelKey:"option.color.black",color:"#1F1A17"}]:r==="hat"?$C.flatMap(s=>s==="None"?[ms]:od(s,`option.hat.${s}`,qC(s,o,t),o)):r==="shirt"?eA.flatMap(s=>s==="None"?[ms]:od(s,`option.shirt.${s}`,nA(s,o,t),o)):r==="pants"?KC.flatMap(s=>s==="None"?[ms]:od(s,`option.pants.${s}`,JC(s,o,t),o)):[ms]}function Ou(r,e){const t={...Xr,...r??{}};Ar("race",t).map(c=>c.id).includes(t.race)||(t.race=Xr.race);const o=Ar("sex",t).map(c=>c.id);o.includes(t.sex)||(t.sex=o[0]??Xr.sex);const s=e??Fu(t),l=Ar("skinColor",t,void 0,s).map(c=>c.id);return l.includes(t.skinColor)||(t.skinColor=l[0]??Xr.skinColor),Qi.forEach(c=>{if(c.id==="race"||c.id==="sex"||c.id==="skinColor")return;const f=Ar(c.id,t,void 0,s).map(d=>d.id);f.includes(t[c.id])||(t[c.id]=f[0]??"None")}),t}function oA(r){const e=new Map;for(const t of["classic","slim"])for(const o of Ar(r,Xr,void 0,t)){const s=e.get(o.id);(!s||!s.colorSlots?.length&&o.colorSlots?.length)&&e.set(o.id,o)}return[...e.values()]}function hr(r){const e={};for(const t of xi){const o={};for(const s of oA(t)){if(!s.colorSlots?.length)continue;const l={};for(const c of s.colorSlots){const f=r?.[t]?.[s.id]?.[c.id];l[c.id]=typeof f=="string"&&c.palette.includes(f)?f:c.defaultColor}o[s.id]=l}Object.keys(o).length>0&&(e[t]=o)}return e}function ku(r){const e={};for(const t of xi){const o=r[t];o&&(e[t]=Object.fromEntries(Object.entries(o).map(([s,l])=>[s,{...l}])))}return e}function eo(r){const e=new Set(xi),t=[];return(r??[]).forEach(o=>{e.has(o)&&!t.includes(o)&&t.push(o)}),xi.forEach(o=>{t.includes(o)||t.push(o)}),t}function fu(r,e,t){if(!r)return[];const o=[];for(const s of r.tintable??[]){const l=s.colorSlot?t?.[s.colorSlot]:e;o.push({url:s.texture,role:"tintable",tint:l??e??"#FFFFFF"})}return r.fixed&&o.push({url:r.fixed,role:"fixed"}),o}function U_(r,e,t,o,s){if(r==="race")return fu(Sh(e.race,e.sex,t),e.skinColor);if(r==="sex")return[];if(r==="eyes"){const f=Ar("eyes",e,t,o).find(d=>d.id===e.eyes);return fu(f?.textureLayers,e.eyesColor)}if(r==="hair"){const f=Ar("hair",e,t,o).find(d=>d.id===e.hair);return fu(f?.textureLayers,e.hairColor)}if(!iA(r))return[];const l=Ar(r,e,t,o).find(f=>f.id===e[r]),c=s[r]?.[e[r]];return fu(l?.textureLayers,void 0,c)}function I_(r){return["race","sex","eyes","hair",...eo(r)]}function sA(r,e=xi,t,o=Fu(r),s){const l=hr(s);return I_(e).flatMap(c=>U_(c,r,t,o,l))}function aA(r,e,t,o,s=Fu(r),l){const c=new Set(t),f=hr(l),d=p=>p==="race"?c.has("race")||c.has("sex")||c.has("skinColor"):p==="sex"?!1:p==="eyes"?c.has("eyes")||c.has("eyesColor"):p==="hair"?c.has("hair")||c.has("hairColor"):c.has(p);return I_(e).filter(d).flatMap(p=>U_(p,r,o,s,f))}function lA(r,e,t){if(r==="skinColor")return rd(Sh(e.race,e.sex,t));if(r==="eyesColor"){const o=Ar("eyes",e,t).find(s=>s.id===e.eyes);return rd(o?.textureLayers)}if(r==="hairColor"){const o=Ar("hair",e,t).find(s=>s.id===e.hair);return rd(o?.textureLayers)}return!0}function uA({colorSlots:r,colors:e,onChange:t,t:o}){return r.length===0?null:X.jsx("div",{className:"mt-2 space-y-2","data-testid":"wardrobe-color-palettes",children:r.map(s=>{const l=e?.[s.id]??s.defaultColor,c=o(s.labelKey);return X.jsxs("div",{"data-color-slot":s.id,children:[X.jsx("div",{className:"text-xs font-semibold mb-1",children:c}),X.jsx("div",{className:"flex flex-wrap gap-1.5",role:"group","aria-label":c,children:s.palette.map(f=>{const d=l===f;return X.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border ${d?"is-selected":""}`,style:{backgroundColor:f},"aria-label":`${c}: ${f}`,"aria-pressed":d,onClick:()=>t(s.id,f),children:d&&X.jsx(di,{name:"fa-check"})},f)})})]},s.id)})})}const du=r=>xi.includes(r),Sv=(r,e)=>r.length===e.length&&r.every((t,o)=>t===e[o]);function cA({appearance:r,textureLayerOrder:e,wardrobeColors:t,onAppearanceChange:o,onWardrobeColorChange:s,onLayerOrderChange:l,t:c,assetBaseUrl:f,skinModel:d}){const[p,m]=k.useState(null),[v,y]=k.useState(null),[S,E]=k.useState(null),[M,x]=k.useState(null),_=k.useRef(null),L=k.useRef(null),P=k.useRef(null),A=k.useRef(null),H=k.useRef([]),I=k.useRef(new Map),O=k.useMemo(()=>new Map(Qi.map(Z=>[Z.id,Z])),[]),W=k.useMemo(()=>Qi.filter(Z=>!du(Z.id)&&lA(Z.id,r,f)),[r,f]),b=p&&v?v:e,R=k.useMemo(()=>b.map(Z=>O.get(Z)).filter(Z=>!!Z),[O,b]);k.useLayoutEffect(()=>{const Z=A.current;if(!Z)return;const Ee=new Map;Z.querySelectorAll("[data-layer-id]").forEach(be=>{const it=be.dataset.layerId;if(!it||!du(it))return;const Ke=be.offsetTop,U=I.current.get(it);if(Ee.set(it,Ke),U===void 0||U===Ke||typeof be.animate!="function")return;typeof be.getAnimations=="function"&&be.getAnimations().filter(pt=>pt.id==="skincrafter-layer-preview").forEach(pt=>pt.cancel());const Tt=be.animate([{transform:`translateY(${U-Ke}px)`},{transform:"translateY(0)"}],{duration:150,easing:"ease-out"});Tt.id="skincrafter-layer-preview"}),I.current=Ee},[b]);const V=Z=>{const Ee=A.current;if(!Ee)return[];const be=Ee.getBoundingClientRect().top;return[...Ee.querySelectorAll("[data-layer-id]")].flatMap(it=>{const Ke=it.dataset.layerId;if(!Ke||!du(Ke)||Ke===Z)return[];const U=it.getBoundingClientRect();return[{layer:Ke,top:U.top-be,bottom:U.bottom-be}]})},se=Z=>{const Ee=A.current;if(!Ee)return null;const be=Z-Ee.getBoundingClientRect().top;return HC(H.current,be)},Q=()=>{_.current=null,L.current=null,P.current=null,H.current=[],m(null),y(null),E(null),x(null)},le=(Z,Ee)=>{const be=[...e];H.current=V(Z),_.current=Z,L.current=be,m(Z),y(be),E(null),x(Ee)},de=(Z,Ee)=>{const be=_.current;if(!be)return;const it=VC(e,be,Z,Ee);L.current=it,y(Ke=>Ke&&Sv(Ke,it)?Ke:it),E({targetLayer:Z,position:Ee})},ue=()=>{const Z=L.current,Ee=Z&&!Sv(Z,e);Q(),Ee&&Z&&l(Z)},he=(Z,Ee)=>{const be=e.indexOf(Z),it=be+Ee;if(be<0||it<0||it>=e.length)return;const Ke=[...e];[Ke[be],Ke[it]]=[Ke[it],Ke[be]],l(Ke)},B=(Z,Ee)=>{if(le(Ee,{x:Z.clientX,y:Z.clientY,pointerType:"mouse"}),Z.dataTransfer.effectAllowed="move",Z.dataTransfer.setData("text/plain",Ee),typeof Z.dataTransfer.setDragImage=="function"){const be=document.createElement("div");be.style.position="fixed",be.style.left="-10000px",be.style.top="-10000px",be.style.width="1px",be.style.height="1px",be.style.opacity="0",document.body.appendChild(be),Z.dataTransfer.setDragImage(be,0,0),window.setTimeout(()=>be.remove(),0)}},fe=Z=>{!_.current||Z.clientX===0&&Z.clientY===0||x({x:Z.clientX,y:Z.clientY,pointerType:"mouse"})},ae=()=>{_.current&&Q()},F=Z=>{if(!_.current)return;Z.preventDefault(),Z.dataTransfer.dropEffect="move";const Ee=se(Z.clientY);Ee&&de(Ee.targetLayer,Ee.position)},ie=Z=>{Z.preventDefault(),ue()},Be=(Z,Ee)=>{if(!(Z.pointerType==="mouse"||Z.button>0||!(Z.target instanceof Element?Z.target:null)?.closest("h3"))){Z.preventDefault(),P.current=Z.pointerId;try{Z.currentTarget.setPointerCapture(Z.pointerId)}catch{}le(Ee,{x:Z.clientX,y:Z.clientY,pointerType:"touch"})}},te=Z=>{if(Z.pointerId!==P.current||!_.current)return;Z.preventDefault(),x({x:Z.clientX,y:Z.clientY,pointerType:"touch"});const Ee=se(Z.clientY);Ee&&de(Ee.targetLayer,Ee.position)},me=Z=>{if(Z.pointerId===P.current){Z.preventDefault();try{Z.currentTarget.releasePointerCapture(Z.pointerId)}catch{}ue()}},Re=Z=>{Z.pointerId===P.current&&Q()},Se=Z=>{const Ee=Ar(Z.id,r,f,d),be=du(Z.id)?Z.id:null,it=be?e.indexOf(be):-1,Ke=be&&S?.targetLayer===be,U=Ee.find(lt=>r[Z.id]===lt.id),Tt=be?U?.colorSlots??[]:[],pt=be&&U?t?.[be]?.[U.id]:void 0;return X.jsxs(GC,{heading:c(Z.labelKey),icon:Z.icon,className:`wardrobe-option-card p-2.5 pt-6 ${be?"layer-order-card":""} ${be===p?"is-dragging":""} ${Ke?`drop-${S.position}`:""}`,"data-layer-id":be??void 0,onPointerDown:be?lt=>Be(lt,be):void 0,onPointerMove:be?te:void 0,onPointerUp:be?me:void 0,onPointerCancel:be?Re:void 0,children:[be&&X.jsxs("div",{className:"layer-order-controls",children:[X.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${c("action.moveLayerUp")} ${c(Z.labelKey)}`,title:c("action.moveLayerUp"),disabled:it<=0,onClick:()=>he(be,-1),children:X.jsx(di,{name:"fa-chevron-up"})}),X.jsx("button",{type:"button",className:"layer-order-handle","aria-label":`${c("action.dragLayer")} ${c(Z.labelKey)}`,title:c("action.dragLayer"),draggable:!0,onDragStart:lt=>B(lt,be),onDrag:fe,onDragEnd:ae,children:X.jsx(di,{name:"fa-grip-vertical"})}),X.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${c("action.moveLayerDown")} ${c(Z.labelKey)}`,title:c("action.moveLayerDown"),disabled:it>=e.length-1,onClick:()=>he(be,1),children:X.jsx(di,{name:"fa-chevron-down"})})]}),X.jsx("div",{className:Z.control==="color"?"mt-2 flex flex-wrap gap-1.5":"mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1.5",role:"group","aria-label":c(Z.labelKey),children:Ee.map(lt=>{const Ie=r[Z.id]===lt.id;return Z.control==="color"?X.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border ${Ie?"is-selected":""}`,style:{backgroundColor:lt.color??lt.id},"aria-label":c(lt.labelKey),"aria-pressed":Ie,onClick:()=>o(Z.id,lt.id),children:Ie&&X.jsx(di,{name:"fa-check"})},lt.id):X.jsx("button",{type:"button",className:`pixel-button min-h-8 px-2 py-1 border text-xs leading-tight transition-colors ${Ie?"skincrafter-option-selected":"skincrafter-secondary-action"}`,"aria-pressed":Ie,onClick:()=>o(Z.id,lt.id),children:c(lt.labelKey)},lt.id)})}),be&&U&&Tt.length>0&&X.jsx(uA,{colorSlots:Tt,colors:pt,t:c,onChange:(lt,Ie)=>s?.(be,U.id,lt,Ie)})]},Z.id)},Ae=p?O.get(p):null;return X.jsxs(T_,{title:c("panel.customization"),icon:"fa-sliders",className:"overflow-visible md:overflow-hidden customization-panel p-3",children:[X.jsxs("div",{className:"space-y-1.5 options-container md:flex-1 md:min-h-0",children:[W.map(Se),X.jsx("div",{ref:A,className:"layer-order-list space-y-1.5",onDragOver:F,onDrop:ie,children:R.map(Se)})]}),M&&Ae&&X.jsxs("div",{className:`layer-drag-ghost ${M.pointerType==="touch"?"is-touch":""}`,style:{left:M.x,top:M.y},"aria-hidden":"true","data-testid":"layer-drag-ghost",children:[X.jsx(di,{name:Ae.icon}),X.jsx("span",{children:c(Ae.labelKey)})]})]})}const Ev=[137,80,78,71,13,10,26,10],Au=64;class Pr extends Error{cause;constructor(e,t){super(e),this.name="InvalidInitialSkinError",this.cause=t}}function fA(r){let e="";for(let t=0;t<r.length;t+=32768){const o=r.subarray(t,Math.min(t+32768,r.length));e+=String.fromCharCode(...o)}return`data:image/png;base64,${btoa(e)}`}function dA(r){let e=2166136261;for(const t of r)e^=t,e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}function hA(r){if(r.length<24)throw new Pr("Initial skin is not a valid PNG file.");for(let s=0;s<Ev.length;s+=1)if(r[s]!==Ev[s])throw new Pr("Initial skin is not a valid PNG file.");const e=new DataView(r.buffer,r.byteOffset,r.byteLength),t=e.getUint32(8),o=String.fromCharCode(r[12],r[13],r[14],r[15]);if(t!==13||o!=="IHDR")throw new Pr("Initial skin PNG is missing a valid IHDR header.");return{width:e.getUint32(16),height:e.getUint32(20)}}async function pA(r){return typeof r.arrayBuffer=="function"?new Uint8Array(await r.arrayBuffer()):new Promise((e,t)=>{const o=new FileReader;o.onload=()=>{if(!(o.result instanceof ArrayBuffer)){t(new Error("Blob reader did not return an ArrayBuffer."));return}e(new Uint8Array(o.result))},o.onerror=()=>t(o.error??new Error("Blob reader failed.")),o.readAsArrayBuffer(r)})}async function mA(r){await new Promise((e,t)=>{const o=new Image;o.onload=()=>{const s=o.naturalWidth||o.width,l=o.naturalHeight||o.height;if(o.onload=null,o.onerror=null,s!==Au||l!==Au){t(new Pr("Initial skin must be a 64x64 Minecraft PNG."));return}e()},o.onerror=s=>{o.onload=null,o.onerror=null,t(new Pr("Initial skin PNG could not be decoded.",s))},o.src=r})}async function gA(r,e){if(r.type&&r.type.toLowerCase()!=="image/png")throw new Pr("Initial skin must use the image/png MIME type.");let t;try{t=await pA(r)}catch(l){throw new Pr("Initial skin data could not be read.",l)}const o=hA(t);if(o.width!==Au||o.height!==Au)throw new Pr("Initial skin must be a 64x64 Minecraft PNG.");const s=fA(t);return await mA(s),{dataUrl:s,fingerprint:dA(t),model:e}}function vA(r){const[e,t]=r.split(",",2),o=e.match(/^data:([^;]+);base64$/)?.[1]??"image/png",s=atob(t??""),l=new Uint8Array(s.length);for(let c=0;c<s.length;c+=1)l[c]=s.charCodeAt(c);return new Blob([l],{type:o})}function _A(r,e,t,o=e.sex==="Female"?"slim":"classic",s){const l=vA(r),c=new File([l],"skincrafter-skin.png",{type:"image/png"}),f=hr(s);return{blob:l,file:c,dataUrl:r,metadata:{width:64,height:64,mimeType:"image/png",model:o,appearance:{...e},layerOrder:[...t],wardrobeColors:ku(f)}}}const _a=2,xA=new Map([[0,r=>({...r,schemaVersion:1})],[1,r=>({...r,schemaVersion:2,wardrobeColors:r.wardrobeColors??{}})]]);function Ea(r){return typeof r=="object"&&r!==null&&!Array.isArray(r)}function kr(r){return{success:!1,error:{code:"invalid_state",message:r}}}function Mv(r){return{success:!1,error:{code:"unsupported_schema_version",message:`Unsupported SkinCrafter state schema version: ${r}.`,schemaVersion:r}}}function yA(r){return{schemaVersion:_a,appearance:Ou(r.appearance),layerOrder:eo(r.layerOrder),wardrobeColors:hr(r.wardrobeColors)}}function Eh(r){const e=yA(r);return{...e,appearance:{...e.appearance},layerOrder:[...e.layerOrder],wardrobeColors:ku(e.wardrobeColors)}}function SA(r){const e={};for(const t of xi){const o=r[t];if(o===void 0)continue;if(!Ea(o))return`SkinCrafter persisted wardrobeColors.${t} must be an object.`;const s={};for(const[l,c]of Object.entries(o)){if(!Ea(c))return`SkinCrafter persisted wardrobeColors.${t}.${l} must be an object.`;const f={};for(const[d,p]of Object.entries(c)){if(typeof p!="string")return`SkinCrafter persisted wardrobeColors.${t}.${l}.${d} must be a string.`;f[d]=p}s[l]=f}e[t]=s}return e}function F_(r){if(!Ea(r))return kr("SkinCrafter persisted state must be an object.");const e=[],t=r.schemaVersion;let o,s;if(t===void 0)o=null,e.push({code:"legacy_unversioned",message:"Migrated legacy unversioned SkinCrafter state."}),s={...r,schemaVersion:0};else{if(typeof t!="number"||!Number.isInteger(t)||t<0)return kr("SkinCrafter schemaVersion must be a non-negative integer.");if(o=t,o>_a)return Mv(o);s={...r}}let l=o??0;for(;l<_a;){const x=xA.get(l);if(!x)return Mv(l);const _=l+1;s=x(s),e.push({code:"schema_version_migrated",message:`Migrated SkinCrafter state schema from version ${l} to ${_}.`,from:l,to:_}),l=_}if(s.schemaVersion!==_a)return kr("SkinCrafter state migration did not produce the current schema version.");const c=o===null||o===0;if(!Ea(s.appearance))return kr("SkinCrafter persisted appearance must be an object.");const f={};for(const x of Qi){const _=s.appearance[x.id];if(_===void 0){if(!c)return kr(`SkinCrafter persisted appearance is missing ${x.id}.`);continue}if(typeof _!="string")return kr(`SkinCrafter persisted appearance.${x.id} must be a string.`);f[x.id]=_}const d=s.layerOrder;if(d===void 0&&!c)return kr("SkinCrafter persisted state is missing layerOrder.");if(d!==void 0&&(!Array.isArray(d)||d.some(x=>typeof x!="string")))return kr("SkinCrafter persisted layerOrder must be an array of strings.");if(!Ea(s.wardrobeColors))return kr("SkinCrafter persisted wardrobeColors must be an object.");const p=SA(s.wardrobeColors);if(typeof p=="string")return kr(p);const m=Ou(f);for(const x of Qi){const _=s.appearance[x.id],L=m[x.id];_!==L&&e.push({code:"appearance_value_defaulted",message:`Normalized persisted appearance.${x.id} to a supported value.`,path:x.id,from:_,to:L})}const v=d??[],y=eo(v);(v.length!==y.length||v.some((x,_)=>x!==y[_]))&&e.push({code:"layer_order_normalized",message:"Normalized persisted layer order by removing invalid/duplicate layers and appending missing layers.",path:"layerOrder",from:[...v],to:[...y]});const S=hr(p);JSON.stringify(p)!==JSON.stringify(S)&&e.push({code:"wardrobe_colors_normalized",message:"Normalized wardrobe color slots by removing unknown values and filling missing slots with defaults.",path:"wardrobeColors",from:p,to:S});const E={appearance:m,layerOrder:y,wardrobeColors:S},M=Eh(E);return{success:!0,state:E,serializedState:M,sourceSchemaVersion:o,migrated:o!==_a||e.length>0,notices:e}}class Yd extends Error{assetUrl;cause;constructor(e,t){super(`Failed to load texture asset: ${e}`),this.name="TextureLoadError",this.assetUrl=e,this.cause=t}}const jr=64,EA=r=>r?typeof r=="string"?{url:r,role:"fixed"}:r.url?r.role==="tintable"?{url:r.url,role:"tintable",tint:r.tint}:{url:r.url,role:"fixed"}:null:null;function MA(r){const e=r.replace("#",""),t=e.length===3?e.split("").map(o=>`${o}${o}`).join(""):e;return{r:Number.parseInt(t.slice(0,2),16),g:Number.parseInt(t.slice(2,4),16),b:Number.parseInt(t.slice(4,6),16),a:255}}function wA(r,e){return r===jr&&e===jr}function TA(r,e){if(r.a===0)return r;const t=(r.r+r.g+r.b)/765;return{r:Math.round(e.r*t),g:Math.round(e.g*t),b:Math.round(e.b*t),a:r.a}}function RA(r,e){const t=new Uint8ClampedArray(r);for(let o=0;o<t.length;o+=4){const s=TA({r:r[o],g:r[o+1],b:r[o+2],a:r[o+3]},e);t[o]=s.r,t[o+1]=s.g,t[o+2]=s.b,t[o+3]=s.a}return t}const CA=(r,e,t)=>{const o=document.createElement("canvas");o.width=jr,o.height=jr;const s=o.getContext("2d",{willReadFrequently:!0});if(!s)throw new Error("Could not create a 2D canvas context for tintable skin composition.");s.imageSmoothingEnabled=!1,s.drawImage(e,0,0);const l=s.getImageData(0,0,jr,jr);l.data.set(RA(l.data,MA(t))),s.putImageData(l,0,0),r.drawImage(o,0,0)},AA=(r,e,t)=>{if(t.role==="fixed"){r.drawImage(e,0,0);return}CA(r,e,t.tint??"#FFFFFF")},bA=r=>new Promise((e,t)=>{const o=new Image;o.crossOrigin="anonymous",o.onload=()=>{const s=o.naturalWidth||o.width,l=o.naturalHeight||o.height;if(!wA(s,l)){t(new Yd(r,new Error(`Skin texture atlas must be ${jr}x${jr}; got ${s}x${l}.`)));return}e(o)},o.onerror=s=>t(new Yd(r,s)),o.src=r});async function wv(r){const e=r.map(EA).filter(l=>!!l);if(e.length===0)throw new Error("No texture assets were available for skin composition.");const t=await Promise.all(e.map(l=>bA(l.url))),o=document.createElement("canvas");o.width=jr,o.height=jr;const s=o.getContext("2d",{willReadFrequently:!0});if(!s)throw new Error("Could not create a 2D canvas context for skin composition.");return s.imageSmoothingEnabled=!1,t.forEach((l,c)=>AA(s,l,e[c])),o.toDataURL("image/png")}function Vr(r,e){return{appearance:Ou(r?.appearance??null,e),layerOrder:eo(r?.layerOrder),wardrobeColors:hr(r?.wardrobeColors)}}function PA(r,e){return JSON.stringify(hr(r))===JSON.stringify(hr(e))}function Tv(r,e){return r.layerOrder.length!==e.layerOrder.length||r.layerOrder.some((t,o)=>t!==e.layerOrder[o])||!PA(r.wardrobeColors,e.wardrobeColors)?!1:Qi.every(({id:t})=>r.appearance[t]===e.appearance[t])}function O_(r,e){return{code:r==="load"?"persistence_load_failed":"persistence_save_failed",category:"persistence",message:r==="load"?"Failed to load persisted SkinCrafter state.":"Failed to save SkinCrafter state.",cause:e}}function Rv(r){try{const e=r?.load()??null;return e&&"status"in e?e.status==="incompatible"?{state:Vr(null),writesBlocked:!0,error:null}:e.status==="empty"?{state:Vr(null),writesBlocked:!1,error:null}:{state:Vr(e.state),writesBlocked:!1,error:null}:{state:Vr(e),writesBlocked:!1,error:null}}catch(e){return{state:Vr(null),writesBlocked:!0,error:O_("load",e)}}}function LA(r){return{appearance:{...r.appearance},layerOrder:[...r.layerOrder],wardrobeColors:ku(hr(r.wardrobeColors))}}function DA(r){return r?{"--skincrafter-accent":r.accent,"--skincrafter-accent-strong":r.accentStrong,"--skincrafter-surface":r.surface,"--skincrafter-text":r.text,"--skincrafter-muted":r.muted,"--skincrafter-border":r.border}:{}}function NA(r){return r instanceof Yd?{code:"asset_load_failed",category:"asset",message:`Failed to load skin texture asset: ${r.assetUrl}`,assetUrl:r.assetUrl,cause:r.cause}:{code:"generation_failed",category:"generation",message:"Failed to generate the current skin.",cause:r}}function Cv(r){return{code:"invalid_initial_skin",category:"input",message:r instanceof Pr?r.message:"Initial skin must be a decodable 64x64 Minecraft PNG.",cause:r instanceof Pr?r.cause??r:r}}function In(r,...e){if(r)try{r(...e)}catch(t){console.error("SkinCrafter host callback failed",t)}}function UA({locale:r=Ds,value:e,initialSkin:t,persistence:o,assetBaseUrl:s,onStateChange:l,onSkinChange:c,onSave:f,onStatusChange:d,onError:p,className:m="",style:v,theme:y,previewBottomOffset:S=0}){const E=t?.image??null,M=t?.model??null,x=E!==null,[_]=k.useState(()=>{if(e)return{state:Vr(e,M??void 0),writesBlocked:!1,error:null};const Ge=Rv(o);return t?{state:Vr(t,M??void 0),writesBlocked:Ge.writesBlocked,error:Ge.error}:Ge}),[L,P]=k.useState(_.state),[A,H]=k.useState(null),[I,O]=k.useState({key:null,status:"idle",error:null}),[W,b]=k.useState(null),[R,V]=k.useState({source:null,model:null,status:"idle",error:null}),[se,Q]=k.useState([]),le=k.useRef(0),de=k.useRef({}),ue=k.useRef(c),he=k.useRef(d),B=k.useRef(p),fe=k.useRef(null),ae=k.useRef(!1),F=k.useRef(null),ie=k.useRef("classic"),Be=k.useRef(o),te=k.useRef(!e),me=k.useRef(_.writesBlocked),Re=k.useRef(_.error!==null),Se=k.useRef(!1),Ae=k.useRef(null),Z=x&&M!==null&&W?.source===E&&W.model===M,Ee=Z&&W?W.baselineState.appearance.sex:_.state.appearance.sex,be=se.includes("sex"),it=k.useMemo(()=>{if(!e)return null;const Ge=M!==null&&!be&&e.appearance.sex===Ee?M:void 0;return Vr(e,Ge)},[Ee,M,be,e]),Ke=k.useMemo(()=>{if(!Z||M===null||be)return L;const Ge=Vr(L,M);return Tv(L,Ge)?L:Ge},[Z,M,L,be]),U=it??Ke,Tt=k.useMemo(()=>hr(U.wardrobeColors),[U.wardrobeColors]),pt=k.useRef(U);pt.current=U;const lt=k.useCallback(Ge=>ka(r,Ge),[r]),Ie=k.useCallback(Ge=>{const Yt=le.current+1;le.current=Yt,de.current[Ge]=Yt,Q(Et=>Et.includes(Ge)?Et:[...Et,Ge])},[]);k.useEffect(()=>{it&&P(Ge=>Tv(Ge,it)?Ge:it)},[it]),k.useEffect(()=>{e||Ke===L||P(Ke)},[L,Ke,e]),k.useEffect(()=>{!e||!x||be||e.appearance.sex!==Ee&&Ie("sex")},[x,Ee,Ie,be,e]);const mt=k.useCallback(Ge=>{e||P(Ge),l?.(Ge)},[l,e]),et=k.useCallback((Ge,Yt)=>{x&&Ie(Ge);const Et=Ge==="sex"?Yt==="Female"?"slim":"classic":ie.current;mt({...U,appearance:Ou({...U.appearance,[Ge]:Yt},Et),wardrobeColors:Tt})},[x,Ie,mt,U,Tt]),ct=k.useCallback((Ge,Yt,Et,Ft)=>{x&&(e?Ae.current={category:Ge,itemId:Yt,slotId:Et,color:Ft}:Ie(Ge));const qt=ku(Tt),Ln=qt[Ge]??{},Sn=Ln[Yt]??{};qt[Ge]={...Ln,[Yt]:{...Sn,[Et]:Ft}},mt({...U,wardrobeColors:hr(qt)})},[x,Ie,mt,U,Tt,e]),zt=k.useCallback(Ge=>{mt({...U,layerOrder:eo(Ge)})},[mt,U]);k.useEffect(()=>{const Ge=Ae.current;!Ge||!e||U.appearance[Ge.category]===Ge.itemId&&Tt[Ge.category]?.[Ge.itemId]?.[Ge.slotId]===Ge.color&&(Ae.current=null,Ie(Ge.category))},[Z,Ie,U.appearance,Tt,e]),k.useEffect(()=>{Ae.current=null},[E,M]),k.useEffect(()=>{ue.current=c},[c]),k.useEffect(()=>{he.current=d},[d]),k.useEffect(()=>{B.current=p},[p]),k.useEffect(()=>{Se.current||!_.error||(Se.current=!0,In(B.current,_.error))},[_.error]),k.useEffect(()=>{if(!E){fe.current=null,ae.current=!1,b(null),le.current=0,de.current={},Q([]),V({source:null,model:null,status:"idle",error:null});return}if(!M){ae.current=!1;const Ft=Cv(new Pr("Initial skin model must be either classic or slim."));V({source:E,model:null,status:"error",error:Ft}),In(he.current,"error"),In(B.current,Ft);return}let Ge=!0;const Yt=LA(pt.current),Et=le.current;return V({source:E,model:M,status:"loading",error:null}),In(he.current,"generating"),gA(E,M).then(Ft=>{if(!Ge)return;const qt=fe.current,Ln=qt!==null&&qt.fingerprint===Ft.fingerprint&&qt.model===Ft.model,Sn=Ln?{...qt,source:E}:{source:E,dataUrl:Ft.dataUrl,fingerprint:Ft.fingerprint,model:Ft.model,baselineState:Vr(Yt,Ft.model)};if(ae.current=Ln,fe.current=Sn,b(Sn),!Ln){const Kn=Object.entries(de.current).filter(([,En])=>(En??0)>Et).map(([En])=>En);Q(Kn)}V({source:E,model:M,status:"ready",error:null}),Ln&&In(he.current,"ready")}).catch(Ft=>{if(!Ge)return;ae.current=!1;const qt=Cv(Ft);V({source:E,model:M,status:"error",error:qt}),In(he.current,"error"),In(B.current,qt)}),()=>{Ge=!1}},[E,M]),k.useEffect(()=>{if(!(e||Re.current)){if(!te.current||Be.current!==o){const Ge=Rv(o);if(Be.current=o,te.current=!0,me.current=Ge.writesBlocked,Ge.error){Re.current=!0,In(B.current,Ge.error);return}}if(!(me.current||!o))try{o.save(Eh(U))}catch(Ge){me.current=!0,Re.current=!0,In(B.current,O_("save",Ge))}}},[o,U,e]);const D=k.useMemo(()=>{if(!Z||!W)return[];const Ge=new Set(se);for(const Et of Qi)U.appearance[Et.id]!==W.baselineState.appearance[Et.id]&&Ge.add(Et.id);const Yt=hr(W.baselineState.wardrobeColors);for(const Et of xi){const Ft=U.appearance[Et];if(Ft!==W.baselineState.appearance[Et])continue;const qt=Tt[Et]?.[Ft]??{},Ln=Yt[Et]?.[Ft]??{};JSON.stringify(qt)!==JSON.stringify(Ln)&&Ge.add(Et)}return Qi.map(Et=>Et.id).filter(Et=>Ge.has(Et))},[se,Z,W,U.appearance,Tt]),{race:T,sex:J,skinColor:pe,eyes:ve,eyesColor:ce,hair:qe,hairColor:Le,hat:Ve,shirt:Ze,pants:_e,shoes:ze,accessory:rt}=U.appearance,tt=JSON.stringify(U.layerOrder),De=JSON.stringify(Tt),ot=JSON.stringify(D),G=s?.replace(/\/+$/,"")||void 0,Ne=D.includes("sex"),xe=Z&&W&&!Ne?W.model==="slim"?"Female":"Male":J,Ue=Z&&W&&!Ne?W.model:J==="Female"?"slim":"classic";ie.current=Ue;const we=Z?W?.fingerprint??null:null,ge=Z?W?.dataUrl??null:null,Fe=JSON.stringify([T,J,pe,ve,ce,qe,Le,Ve,Ze,_e,ze,rt,tt,De,G??null,we,Ue,ot]),ft=A?.key===Fe?A:null,Pt=x&&R.source===E&&R.model===M,wt=x&&(!Pt||R.status==="loading"),gn=Pt&&R.status==="error",rn=wt?"generating":gn?"error":I.key===Fe?I.status:"idle",Ei=gn?R.error:I.key===Fe?I.error:null;k.useEffect(()=>{if(x&&!Z)return;if(ae.current){const Sn=F.current===Fe;if(ae.current=!1,Sn)return}let Ge=!0;const Yt={race:T,sex:J,skinColor:pe,eyes:ve,eyesColor:ce,hair:qe,hairColor:Le,hat:Ve,shirt:Ze,pants:_e,shoes:ze,accessory:rt},Et={...Yt,sex:xe},Ft=JSON.parse(tt),qt=JSON.parse(De),Ln=JSON.parse(ot);return O({key:Fe,status:"generating",error:null}),In(he.current,"generating"),(async()=>{let Sn;try{let Kn;if(ge){const En=aA(Et,Ft,Ln,G,Ue,qt);Kn=En.filter(Boolean).length===0?ge:await wv([ge,...En])}else{const En=sA(Yt,Ft,G,Ue,qt);Kn=await wv(En)}Sn={dataUrl:Kn,output:_A(Kn,Yt,Ft,Ue,qt)}}catch(Kn){if(!Ge)return;const En=NA(Kn);O({key:Fe,status:"error",error:En}),In(he.current,"error"),In(B.current,En);return}Ge&&(F.current=Fe,H({key:Fe,texture:Sn.dataUrl,output:Sn.output}),O({key:Fe,status:"ready",error:null}),In(ue.current,Sn.output),In(he.current,"ready"))})(),()=>{Ge=!1}},[rt,ot,G,xe,Ue,ve,ce,Fe,qe,Le,x,Ve,ge,Z,tt,_e,T,J,Ze,ze,pe,De]);const mr=ft??A,qn=ft?.output??null,gr=mr?.texture??null,Kr=mr?.output.metadata.model??Ue,Lr=rn==="ready"&&qn!==null,Dr=f&&Lr&&qn?()=>f(qn):void 0,bo=k.useCallback(Ge=>{In(B.current,Ge)},[]);return X.jsx("div",{className:`skincrafter-editor h-full min-h-0 w-full ${m}`.trim(),style:{...DA(y),...v},"data-testid":"skincrafter-editor","data-skincrafter-locale":r,"data-skincrafter-generation-status":rn,children:X.jsx(zC,{left:X.jsx(P_,{texture:gr,model:Kr,footerHeight:S,t:lt,onSave:Dr,canSave:Lr,generationStatus:rn,generationError:Ei,onError:bo}),right:X.jsx(cA,{appearance:U.appearance,textureLayerOrder:U.layerOrder,wardrobeColors:Tt,onAppearanceChange:et,onWardrobeColorChange:ct,onLayerOrderChange:zt,t:lt,assetBaseUrl:s,skinModel:Ue})})})}function IA({texture:r,model:e="classic",locale:t=Ds,bottomOffset:o=0,className:s="",style:l,theme:c,onError:f}){const d=m=>ka(t,m),p={"--skincrafter-accent":c?.accent,"--skincrafter-accent-strong":c?.accentStrong,"--skincrafter-surface":c?.surface,"--skincrafter-text":c?.text,"--skincrafter-muted":c?.muted,"--skincrafter-border":c?.border};return X.jsx("div",{className:`skincrafter-editor h-full min-h-0 ${s}`.trim(),style:{...p,...l},children:X.jsx(P_,{texture:r,model:e,footerHeight:o,t:d,onError:f})})}const k_={en:{"skinView.error.usernameRequired":"Please enter a Minecraft username.","skinView.error.playerNotFound":"Minecraft player not found.","skinView.error.skinTextureMissing":"This player does not have an available skin texture.","skinView.error.network":"Could not reach PlayerDB. Check your connection and try again.","skinView.error.serviceUnavailable":"PlayerDB is temporarily unavailable. Try again later.","skinView.error.rateLimited":"Too many player lookup requests. Try again in a moment.","skinView.error.invalidResponse":"PlayerDB returned an unexpected response. Try again later.","notFound.title":"Page not found","notFound.description":"This address does not point to a SkinCrafter page.","notFound.backToCreator":"Back to creator"},pl:{"skinView.error.usernameRequired":"Podaj nazwe gracza Minecraft.","skinView.error.playerNotFound":"Nie znaleziono gracza Minecraft.","skinView.error.skinTextureMissing":"Ten gracz nie ma dostepnej tekstury skina.","skinView.error.network":"Nie udalo sie polaczyc z PlayerDB. Sprawdz polaczenie i sprobuj ponownie.","skinView.error.serviceUnavailable":"PlayerDB jest chwilowo niedostepne. Sprobuj ponownie pozniej.","skinView.error.rateLimited":"Za duzo zapytan o graczy. Sprobuj ponownie za chwile.","skinView.error.invalidResponse":"PlayerDB zwrocilo nieoczekiwana odpowiedz. Sprobuj ponownie pozniej.","notFound.title":"Nie znaleziono strony","notFound.description":"Ten adres nie prowadzi do żadnej strony SkinCraftera.","notFound.backToCreator":"Wróć do kreatora"}};function FA(r){return r in k_.en}function OA(r,e){return FA(e)?k_[r][e]:ka(r,e)}function kA(r=()=>window.localStorage){return{read:e=>{try{return{status:"available",value:r().getItem(e)}}catch{return{status:"unavailable"}}},write:(e,t)=>{try{return r().setItem(e,t),!0}catch{return!1}}}}const Mh=kA(),BA=bv.forwardRef((r,e)=>X.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:X.jsx("div",{className:"container mx-auto text-center text-sm",children:X.jsx("p",{children:"(c) 2026 SkinCrafter. All rights reserved."})})})),zA=r=>ka(Ds,r),HA=({logoSrc:r="/logo.png",logoAlt:e="SkinCrafter logo",language:t="en",onLanguageChange:o,t:s=zA})=>X.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:X.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[X.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[X.jsx("div",{className:"h-8 w-36 flex items-center",children:X.jsx("img",{src:r,alt:e,className:"h-auto max-h-8 w-full object-contain",style:{imageRendering:"pixelated"}})}),X.jsx("span",{className:"pixel-border bg-amber-500 px-2 py-0.5 text-xs font-bold uppercase tracking-normal text-green-950 shadow-sm",title:s("nav.workInProgress"),"aria-label":s("nav.workInProgress"),children:"WIP"})]}),X.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[X.jsx(ld,{to:"/",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:s("nav.wardrobe")}),X.jsx(ld,{to:"/mcskinview",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:s("nav.skinView")}),o&&X.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[X.jsx("span",{children:s("nav.language")}),X.jsx("select",{className:"bg-green-700 text-white pixel-border px-2 py-1",value:t,onChange:l=>o(l.target.value),"aria-label":s("nav.language"),children:b_.map(l=>X.jsx("option",{value:l,children:l.toUpperCase()},l))})]})]})]})}),B_="skincrafterLanguage",VA=()=>{const r=Mh.read(B_);return r.status==="available"&&OC(r.value)?r.value:Ds};function wh({children:r}){const[e,t]=k.useState(()=>VA()),o=k.useRef(null),[s,l]=k.useState(0),c=k.useCallback(d=>OA(e,d),[e]),f=k.useCallback(d=>{t(d)},[]);return k.useEffect(()=>{Mh.write(B_,e)},[e]),k.useEffect(()=>{const d=()=>{l(o.current?.offsetHeight??0)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),X.jsxs("div",{className:"max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col",children:[X.jsx("div",{className:"shrink-0",children:X.jsx(HA,{language:e,onLanguageChange:f,t:c})}),r({footerHeight:s,language:e,t:c}),X.jsx("div",{className:"shrink-0",children:X.jsx(BA,{ref:o})})]})}const Mu="skincrafterState",Th="wardrobeAppearance",Rh="wardrobeLayerOrder";function La(r){return JSON.parse(r)}function hu(){return{appearance:{...Xr},layerOrder:eo(null)}}function z_(r){const e=F_(r);return e.success?{state:e.state,serializedState:e.serializedState}:null}function GA(r){let e;try{e=La(r)}catch{return{kind:"invalid"}}const t=F_(e);return t.success?{kind:"loaded",value:{state:t.state,serializedState:t.serializedState}}:t.error.code==="unsupported_schema_version"?{kind:"unsupported"}:{kind:"invalid"}}function WA(r){const e=r(Th);if(e.status==="unavailable")return{kind:"unavailable"};if(e.value===null)return{kind:"missing"};const t=r(Rh);if(t.status==="unavailable")return{kind:"unavailable"};if(t.value===null)return{kind:"missing"};try{const o=z_({appearance:La(e.value),layerOrder:La(t.value)});return o?{kind:"loaded",value:o}:{kind:"missing"}}catch{return{kind:"missing"}}}function XA(r,e){const t=r(Th);if(t.status==="unavailable")return hu();let o;if(t.value)try{o=La(t.value)}catch{o={...Xr}}else{const f=r("wardrobeRace"),d=r("wardrobeSkinColor"),p=r("wardrobeHat");if(f.status==="unavailable"||d.status==="unavailable"||p.status==="unavailable")return hu();o={race:f.value??Xr.race,skinColor:d.value??Xr.skinColor,hat:p.value??Xr.hat}}let s=eo(null);const l=r(Rh);if(l.status==="unavailable")return hu();if(l.value)try{s=La(l.value)}catch{s=eo(null)}const c=z_({appearance:o,layerOrder:s});return c?(e(Mu,JSON.stringify(c.serializedState)),c.state):hu()}function jA(r,e){return JSON.stringify(r.appearance)===JSON.stringify(e.appearance)&&JSON.stringify(r.layerOrder)===JSON.stringify(e.layerOrder)}function $A(r=Mh){let e=!0;const t=s=>{const l=r.read(s);return l.status==="unavailable"&&(e=!1),l},o=(s,l)=>{if(!e)return!1;const c=r.write(s,l);return c||(e=!1),c};return{load:()=>{e=!0;const s=t(Mu);if(s.status==="unavailable")return{status:"empty"};if(s.value===null)return{status:"loaded",state:XA(t,o)};const l=GA(s.value);if(l.kind==="unsupported")return e=!1,{status:"incompatible"};if(l.kind==="invalid")return{status:"empty"};const c=WA(t);if(c.kind==="loaded"&&!jA(c.value.serializedState,l.value.serializedState)){const f={...c.value.state,wardrobeColors:l.value.state.wardrobeColors},d=Eh(f);return o(Mu,JSON.stringify(d)),{status:"loaded",state:f}}return{status:"loaded",state:l.value.state}},save:s=>{o(Mu,JSON.stringify(s))&&o(Th,JSON.stringify(s.appearance))&&o(Rh,JSON.stringify(s.layerOrder))}}}const YA=$A();class en extends Error{code;status;cause;constructor(e,t={}){super(e),this.name="FetchSkinError",this.code=e,this.status=t.status,this.cause=t.cause}}const qA=r=>r.replace(/^http:\/\//,"https://"),zr=r=>typeof r=="object"&&r!==null,KA=r=>zr(r)&&typeof r.name=="string"&&typeof r.value=="string",ZA=r=>{if(!zr(r)||typeof r.success!="boolean")throw new en("invalid_response");if(!r.success)return{success:!1};if(!zr(r.data)||!zr(r.data.player))throw new en("invalid_response");const e=r.data.player;if(e.skin_texture!==void 0&&typeof e.skin_texture!="string")throw new en("invalid_response");if(e.properties!==void 0&&(!Array.isArray(e.properties)||!e.properties.every(KA)))throw new en("invalid_response");return{success:!0,data:{player:{skin_texture:e.skin_texture,properties:e.properties}}}},JA=r=>{if(!r)return null;let e;try{e=JSON.parse(atob(r.value))}catch(l){throw new en("invalid_response",{cause:l})}if(!zr(e))throw new en("invalid_response");const t=e.textures;if(t===void 0)return{};if(!zr(t))throw new en("invalid_response");const o=t.SKIN;if(o===void 0)return{textures:{}};if(!zr(o))throw new en("invalid_response");if(o.url!==void 0&&typeof o.url!="string")throw new en("invalid_response");const s=o.metadata;if(s!==void 0&&!zr(s))throw new en("invalid_response");if(zr(s)&&s.model!==void 0&&typeof s.model!="string")throw new en("invalid_response");return{textures:{SKIN:{url:o.url,metadata:zr(s)&&typeof s.model=="string"?{model:s.model}:void 0}}}},QA=r=>r===404?new en("player_not_found",{status:r}):r===429?new en("rate_limited",{status:r}):r>=500?new en("service_unavailable",{status:r}):new en("invalid_response",{status:r});async function eb(r){let e;try{e=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(r)}`)}catch(d){throw new en("network_error",{cause:d})}if(!e.ok)throw QA(e.status);let t;try{t=await e.json()}catch(d){throw new en("invalid_response",{status:e.status,cause:d})}const o=ZA(t);if(!o.success)throw new en("player_not_found",{status:e.status});const s=o.data?.player;if(!s)throw new en("invalid_response",{status:e.status});const l=s.properties?.find(d=>d.name==="textures"),c=JA(l)?.textures?.SKIN,f=c?.url??s.skin_texture;if(!f)throw new en("skin_texture_missing",{status:e.status});return{texture:qA(f),model:c?.metadata?.model==="slim"?"slim":"classic"}}const tb={player_not_found:"skinView.error.playerNotFound",skin_texture_missing:"skinView.error.skinTextureMissing",rate_limited:"skinView.error.rateLimited",service_unavailable:"skinView.error.serviceUnavailable",network_error:"skinView.error.network",invalid_response:"skinView.error.invalidResponse"},nb=()=>{const[r,e]=k.useState(""),[t,o]=k.useState(null),[s,l]=k.useState(null),[c,f]=k.useState(!1),d=k.useCallback(m=>{e(m.target.value)},[]),p=k.useCallback(async m=>{if(m.preventDefault(),!r.trim()){l("skinView.error.usernameRequired");return}l(null),o(null),f(!0);try{o(await eb(r.trim()))}catch(v){l(v instanceof en?tb[v.code]:"skinView.error.invalidResponse"),o(null)}finally{f(!1)}},[r]);return X.jsx(wh,{children:({footerHeight:m,language:v,t:y})=>X.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[X.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:X.jsx(IA,{texture:t?.texture??null,model:t?.model??"classic",locale:v,bottomOffset:m})}),X.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:X.jsxs("section",{className:"mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4",children:[X.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[X.jsx("i",{className:"fas fa-user mr-2 text-green-700"})," ",y("panel.loadSkin")]}),X.jsxs("div",{className:"space-y-4 md:flex-1 md:min-h-0 overflow-y-auto pr-2",children:[X.jsxs("div",{className:"option-card bg-white shadow p-4 pixel-border relative pt-5",children:[X.jsxs("h3",{className:"font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10",children:[X.jsx("i",{className:"fas fa-id-card mr-2 text-amber-600"})," ",y("skinView.player")]}),X.jsxs("form",{onSubmit:p,className:"mt-4 flex flex-col gap-3",children:[X.jsx("input",{type:"text",value:r,onChange:d,placeholder:y("skinView.username"),"aria-label":y("skinView.username"),className:"w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"}),X.jsxs("button",{type:"submit",disabled:c,className:"pixel-button p-2 pixel-border bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white",children:[X.jsx("i",{className:"fas fa-cloud-arrow-down mr-2"}),y(c?"action.loading":"action.loadSkin")]})]})]}),s&&X.jsx("div",{role:"alert",className:"option-card bg-red-50 text-red-700 shadow p-4 pixel-border",children:y(s)})]})]})})]})})},rb=()=>X.jsx(wh,{children:({t:r})=>X.jsx("main",{className:"flex-1 min-h-0 flex items-center justify-center p-4",children:X.jsxs("section",{className:"option-card bg-white shadow p-6 pixel-border max-w-xl w-full text-center","aria-labelledby":"not-found-title",children:[X.jsx("p",{className:"text-sm font-semibold uppercase tracking-wider text-amber-700 mb-2",children:"404"}),X.jsx("h1",{id:"not-found-title",className:"text-2xl font-bold text-gray-800 mb-3",children:r("notFound.title")}),X.jsx("p",{className:"text-gray-600 mb-6",children:r("notFound.description")}),X.jsx(ih,{to:"/",className:"inline-block pixel-button p-3 pixel-border bg-green-700 hover:bg-green-800 text-white",children:r("notFound.backToCreator")})]})})}),ib=()=>X.jsx(wh,{children:({footerHeight:r,language:e})=>X.jsx(UA,{locale:e,persistence:YA,previewBottomOffset:r})}),ob=()=>X.jsxs(Ay,{children:[X.jsx(pu,{path:"/",element:X.jsx(ib,{})}),X.jsx(pu,{path:"/mcskinview",element:X.jsx(nb,{})}),X.jsx(pu,{path:"*",element:X.jsx(rb,{})})]});Ax.createRoot(document.getElementById("root")).render(X.jsx(bv.StrictMode,{children:X.jsx(Jy,{children:X.jsx(ob,{})})}));
