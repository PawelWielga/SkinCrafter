(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();function Xv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Sd={exports:{}},fa={},Ed={exports:{}},St={};var ig;function Gx(){if(ig)return St;ig=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(F,oe,Oe){this.props=F,this.context=oe,this.refs=M,this.updater=Oe||S}x.prototype.isReactComponent={},x.prototype.setState=function(F,oe){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,oe,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=x.prototype;function L(F,oe,Oe){this.props=F,this.context=oe,this.refs=M,this.updater=Oe||S}var P=L.prototype=new _;P.constructor=L,E(P,x.prototype),P.isPureReactComponent=!0;var A=Array.isArray,G=Object.prototype.hasOwnProperty,I={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function X(F,oe,Oe){var ne,me={},Ce=null,Se=null;if(oe!=null)for(ne in oe.ref!==void 0&&(Se=oe.ref),oe.key!==void 0&&(Ce=""+oe.key),oe)G.call(oe,ne)&&!k.hasOwnProperty(ne)&&(me[ne]=oe[ne]);var Ae=arguments.length-2;if(Ae===1)me.children=Oe;else if(1<Ae){for(var Z=Array(Ae),Ee=0;Ee<Ae;Ee++)Z[Ee]=arguments[Ee+2];me.children=Z}if(F&&F.defaultProps)for(ne in Ae=F.defaultProps,Ae)me[ne]===void 0&&(me[ne]=Ae[ne]);return{$$typeof:r,type:F,key:Ce,ref:Se,props:me,_owner:I.current}}function b(F,oe){return{$$typeof:r,type:F.type,key:oe,ref:F.ref,props:F.props,_owner:F._owner}}function C(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function V(F){var oe={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Oe){return oe[Oe]})}var ae=/\/+/g;function J(F,oe){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):oe.toString(36)}function ee(F,oe,Oe,ne,me){var Ce=typeof F;(Ce==="undefined"||Ce==="boolean")&&(F=null);var Se=!1;if(F===null)Se=!0;else switch(Ce){case"string":case"number":Se=!0;break;case"object":switch(F.$$typeof){case r:case e:Se=!0}}if(Se)return Se=F,me=me(Se),F=ne===""?"."+J(Se,0):ne,A(me)?(Oe="",F!=null&&(Oe=F.replace(ae,"$&/")+"/"),ee(me,oe,Oe,"",function(Ee){return Ee})):me!=null&&(C(me)&&(me=b(me,Oe+(!me.key||Se&&Se.key===me.key?"":(""+me.key).replace(ae,"$&/")+"/")+F)),oe.push(me)),1;if(Se=0,ne=ne===""?".":ne+":",A(F))for(var Ae=0;Ae<F.length;Ae++){Ce=F[Ae];var Z=ne+J(Ce,Ae);Se+=ee(Ce,oe,Oe,Z,me)}else if(Z=y(F),typeof Z=="function")for(F=Z.call(F),Ae=0;!(Ce=F.next()).done;)Ce=Ce.value,Z=ne+J(Ce,Ae++),Se+=ee(Ce,oe,Oe,Z,me);else if(Ce==="object")throw oe=String(F),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return Se}function fe(F,oe,Oe){if(F==null)return F;var ne=[],me=0;return ee(F,ne,"","",function(Ce){return oe.call(Oe,Ce,me++)}),ne}function ue(F){if(F._status===-1){var oe=F._result;oe=oe(),oe.then(function(Oe){(F._status===0||F._status===-1)&&(F._status=1,F._result=Oe)},function(Oe){(F._status===0||F._status===-1)&&(F._status=2,F._result=Oe)}),F._status===-1&&(F._status=0,F._result=oe)}if(F._status===1)return F._result.default;throw F._result}var he={current:null},z={transition:null},de={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:z,ReactCurrentOwner:I};function le(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:fe,forEach:function(F,oe,Oe){fe(F,function(){oe.apply(this,arguments)},Oe)},count:function(F){var oe=0;return fe(F,function(){oe++}),oe},toArray:function(F){return fe(F,function(oe){return oe})||[]},only:function(F){if(!C(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},St.Component=x,St.Fragment=t,St.Profiler=s,St.PureComponent=L,St.StrictMode=o,St.Suspense=f,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,St.act=le,St.cloneElement=function(F,oe,Oe){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ne=E({},F.props),me=F.key,Ce=F.ref,Se=F._owner;if(oe!=null){if(oe.ref!==void 0&&(Ce=oe.ref,Se=I.current),oe.key!==void 0&&(me=""+oe.key),F.type&&F.type.defaultProps)var Ae=F.type.defaultProps;for(Z in oe)G.call(oe,Z)&&!k.hasOwnProperty(Z)&&(ne[Z]=oe[Z]===void 0&&Ae!==void 0?Ae[Z]:oe[Z])}var Z=arguments.length-2;if(Z===1)ne.children=Oe;else if(1<Z){Ae=Array(Z);for(var Ee=0;Ee<Z;Ee++)Ae[Ee]=arguments[Ee+2];ne.children=Ae}return{$$typeof:r,type:F.type,key:me,ref:Ce,props:ne,_owner:Se}},St.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},St.createElement=X,St.createFactory=function(F){var oe=X.bind(null,F);return oe.type=F,oe},St.createRef=function(){return{current:null}},St.forwardRef=function(F){return{$$typeof:d,render:F}},St.isValidElement=C,St.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:ue}},St.memo=function(F,oe){return{$$typeof:p,type:F,compare:oe===void 0?null:oe}},St.startTransition=function(F){var oe=z.transition;z.transition={};try{F()}finally{z.transition=oe}},St.unstable_act=le,St.useCallback=function(F,oe){return he.current.useCallback(F,oe)},St.useContext=function(F){return he.current.useContext(F)},St.useDebugValue=function(){},St.useDeferredValue=function(F){return he.current.useDeferredValue(F)},St.useEffect=function(F,oe){return he.current.useEffect(F,oe)},St.useId=function(){return he.current.useId()},St.useImperativeHandle=function(F,oe,Oe){return he.current.useImperativeHandle(F,oe,Oe)},St.useInsertionEffect=function(F,oe){return he.current.useInsertionEffect(F,oe)},St.useLayoutEffect=function(F,oe){return he.current.useLayoutEffect(F,oe)},St.useMemo=function(F,oe){return he.current.useMemo(F,oe)},St.useReducer=function(F,oe,Oe){return he.current.useReducer(F,oe,Oe)},St.useRef=function(F){return he.current.useRef(F)},St.useState=function(F){return he.current.useState(F)},St.useSyncExternalStore=function(F,oe,Oe){return he.current.useSyncExternalStore(F,oe,Oe)},St.useTransition=function(){return he.current.useTransition()},St.version="18.3.1",St}var og;function oh(){return og||(og=1,Ed.exports=Gx()),Ed.exports}var sg;function Wx(){if(sg)return fa;sg=1;var r=oh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,p){var m,v={},y=null,S=null;p!==void 0&&(y=""+p),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(S=f.ref);for(m in f)o.call(f,m)&&!l.hasOwnProperty(m)&&(v[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)v[m]===void 0&&(v[m]=f[m]);return{$$typeof:e,type:d,key:y,ref:S,props:v,_owner:s.current}}return fa.Fragment=t,fa.jsx=c,fa.jsxs=c,fa}var ag;function Xx(){return ag||(ag=1,Sd.exports=Wx()),Sd.exports}var B=Xx(),O=oh();const jv=Xv(O);var jl={},Md={exports:{}},jn={},wd={exports:{}},Td={};var lg;function jx(){return lg||(lg=1,(function(r){function e(z,de){var le=z.length;z.push(de);e:for(;0<le;){var F=le-1>>>1,oe=z[F];if(0<s(oe,de))z[F]=de,z[le]=oe,le=F;else break e}}function t(z){return z.length===0?null:z[0]}function o(z){if(z.length===0)return null;var de=z[0],le=z.pop();if(le!==de){z[0]=le;e:for(var F=0,oe=z.length,Oe=oe>>>1;F<Oe;){var ne=2*(F+1)-1,me=z[ne],Ce=ne+1,Se=z[Ce];if(0>s(me,le))Ce<oe&&0>s(Se,me)?(z[F]=Se,z[Ce]=le,F=Ce):(z[F]=me,z[ne]=le,F=ne);else if(Ce<oe&&0>s(Se,le))z[F]=Se,z[Ce]=le,F=Ce;else break e}}return de}function s(z,de){var le=z.sortIndex-de.sortIndex;return le!==0?le:z.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();r.unstable_now=function(){return c.now()-d}}var f=[],p=[],m=1,v=null,y=3,S=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var de=t(p);de!==null;){if(de.callback===null)o(p);else if(de.startTime<=z)o(p),de.sortIndex=de.expirationTime,e(f,de);else break;de=t(p)}}function A(z){if(M=!1,P(z),!E)if(t(f)!==null)E=!0,ue(G);else{var de=t(p);de!==null&&he(A,de.startTime-z)}}function G(z,de){E=!1,M&&(M=!1,_(X),X=-1),S=!0;var le=y;try{for(P(de),v=t(f);v!==null&&(!(v.expirationTime>de)||z&&!V());){var F=v.callback;if(typeof F=="function"){v.callback=null,y=v.priorityLevel;var oe=F(v.expirationTime<=de);de=r.unstable_now(),typeof oe=="function"?v.callback=oe:v===t(f)&&o(f),P(de)}else o(f);v=t(f)}if(v!==null)var Oe=!0;else{var ne=t(p);ne!==null&&he(A,ne.startTime-de),Oe=!1}return Oe}finally{v=null,y=le,S=!1}}var I=!1,k=null,X=-1,b=5,C=-1;function V(){return!(r.unstable_now()-C<b)}function ae(){if(k!==null){var z=r.unstable_now();C=z;var de=!0;try{de=k(!0,z)}finally{de?J():(I=!1,k=null)}}else I=!1}var J;if(typeof L=="function")J=function(){L(ae)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,fe=ee.port2;ee.port1.onmessage=ae,J=function(){fe.postMessage(null)}}else J=function(){x(ae,0)};function ue(z){k=z,I||(I=!0,J())}function he(z,de){X=x(function(){z(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,ue(G))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(z){switch(y){case 1:case 2:case 3:var de=3;break;default:de=y}var le=y;y=de;try{return z()}finally{y=le}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,de){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var le=y;y=z;try{return de()}finally{y=le}},r.unstable_scheduleCallback=function(z,de,le){var F=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?F+le:F):le=F,z){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=le+oe,z={id:m++,callback:de,priorityLevel:z,startTime:le,expirationTime:oe,sortIndex:-1},le>F?(z.sortIndex=le,e(p,z),t(f)===null&&z===t(p)&&(M?(_(X),X=-1):M=!0,he(A,le-F))):(z.sortIndex=oe,e(f,z),E||S||(E=!0,ue(G))),z},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(z){var de=y;return function(){var le=y;y=de;try{return z.apply(this,arguments)}finally{y=le}}}})(Td)),Td}var ug;function $x(){return ug||(ug=1,wd.exports=jx()),wd.exports}var cg;function Yx(){if(cg)return jn;cg=1;var r=oh(),e=$x();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(s[n]=i,n=0;n<i.length;n++)o.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function y(n){return f.call(v,n)?!0:f.call(m,n)?!1:p.test(n)?v[n]=!0:(m[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(n,i,a,u,h,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new M(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,L);x[i]=new M(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,L);x[i]=new M(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,L);x[i]=new M(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,u){var h=x.hasOwnProperty(i)?x[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,u)&&(a=null),u||h===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,u=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var A=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),I=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),z=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,F;function oe(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Oe=!1;function ne(n,i){if(!n||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var u=ie}Reflect.construct(n,[],i)}else{try{i.call()}catch(ie){u=ie}n.call(i.prototype)}else{try{throw Error()}catch(ie){u=ie}n()}}catch(ie){if(ie&&u&&typeof ie.stack=="string"){for(var h=ie.stack.split(`
`),g=u.stack.split(`
`),w=h.length-1,N=g.length-1;1<=w&&0<=N&&h[w]!==g[N];)N--;for(;1<=w&&0<=N;w--,N--)if(h[w]!==g[N]){if(w!==1||N!==1)do if(w--,N--,0>N||h[w]!==g[N]){var H=`
`+h[w].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=w&&0<=N);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?oe(n):""}function me(n){switch(n.tag){case 5:return oe(n.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return n=ne(n.type,!1),n;case 11:return n=ne(n.type.render,!1),n;case 1:return n=ne(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case I:return"Portal";case b:return"Profiler";case X:return"StrictMode";case J:return"Suspense";case ee:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ae:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return i=n.displayName||null,i!==null?i:Ce(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return Ce(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Z(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ee(n){var i=Z(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(w){u=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function be(n){n._valueTracker||(n._valueTracker=Ee(n))}function ot(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Z(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Ze(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function U(n,i){var a=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function mt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Mt(n,i){pt(n,i);var a=Ae(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ht(n,i.type,a):i.hasOwnProperty("defaultValue")&&ht(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Be(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ht(n,i,a){(i!=="number"||Ze(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var et=Array.isArray;function He(n,i,a,u){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Tt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(et(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ae(a)}}function T(n,i){var a=Ae(i.value),u=Ae(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function Q(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ce,Ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Le(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Je=["Webkit","ms","Moz","O"];Object.keys(Ge).forEach(function(n){Je.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ge[i]=Ge[n]})});function _e(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ge.hasOwnProperty(n)&&Ge[n]?(""+i).trim():i+"px"}function ze(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=_e(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,h):n[a]=h}}var it=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(n,i){if(i){if(it[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function De(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ne=null,xe=null,Ue=null;function we(n){if(n=Zs(n)){if(typeof Ne!="function")throw Error(t(280));var i=n.stateNode;i&&(i=al(i),Ne(n.stateNode,n.type,i))}}function ge(n){xe?Ue?Ue.push(n):Ue=[n]:xe=n}function Ie(){if(xe){var n=xe,i=Ue;if(Ue=xe=null,we(n),i)for(n=0;n<i.length;n++)we(i[n])}}function ct(n,i){return n(i)}function Lt(){}var Ct=!1;function gn(n,i,a){if(Ct)return n(i,a);Ct=!0;try{return ct(n,i,a)}finally{Ct=!1,(xe!==null||Ue!==null)&&(Lt(),Ie())}}function rn(n,i){var a=n.stateNode;if(a===null)return null;var u=al(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Si=!1;if(d)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){Si=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{Si=!1}function qn(n,i,a,u,h,g,w,N,H){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(a,ie)}catch(Me){this.onError(Me)}}var vr=!1,qr=null,Pr=!1,Lr=null,Lo={onError:function(n){vr=!0,qr=n}};function We(n,i,a,u,h,g,w,N,H){vr=!1,qr=null,qn.apply(Lo,arguments)}function qt(n,i,a,u,h,g,w,N,H){if(We.apply(this,arguments),vr){if(vr){var ie=qr;vr=!1,qr=null}else throw Error(t(198));Pr||(Pr=!0,Lr=ie)}}function Et(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function kt(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Kt(n){if(Et(n)!==n)throw Error(t(188))}function Ln(n){var i=n.alternate;if(!i){if(i=Et(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Kt(h),n;if(g===u)return Kt(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=h,u=g;else{for(var w=!1,N=h.child;N;){if(N===a){w=!0,a=h,u=g;break}if(N===u){w=!0,u=h,a=g;break}N=N.sibling}if(!w){for(N=g.child;N;){if(N===a){w=!0,a=g,u=h;break}if(N===u){w=!0,u=g,a=h;break}N=N.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Sn(n){return n=Ln(n),n!==null?Kn(n):null}function Kn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Kn(n);if(i!==null)return i;n=n.sibling}return null}var En=e.unstable_scheduleCallback,R=e.unstable_cancelCallback,$=e.unstable_shouldYield,se=e.unstable_requestPaint,K=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Fe=e.unstable_UserBlockingPriority,je=e.unstable_NormalPriority,Xe=e.unstable_LowPriority,dt=e.unstable_IdlePriority,ut=null,Ye=null;function xt(n){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Nt,Gt=Math.log,Ot=Math.LN2;function Nt(n){return n>>>=0,n===0?32:31-(Gt(n)/Ot|0)|0}var rt=64,It=4194304;function yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function un(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var N=w&~h;N!==0?u=yt(N):(g&=w,g!==0&&(u=yt(g)))}else w=a&~h,w!==0?u=yt(w):g!==0&&(u=yt(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-vt(i),h=1<<a,u|=n[a],i&=~h;return u}function Ei(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dn(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-vt(g),N=1<<w,H=h[w];H===-1?((N&a)===0||(N&u)!==0)&&(h[w]=Ei(N,i)):H<=i&&(n.expiredLanes|=N),g&=~N}}function Kr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Bt(){var n=rt;return rt<<=1,(rt&4194240)===0&&(rt=64),n}function Mn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function cn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-vt(i),n[i]=a}function vn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-vt(a),g=1<<h;i[h]=0,u[h]=-1,n[h]=-1,a&=~g}}function dn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-vt(a),h=1<<u;h&i|n[u]&i&&(n[u]|=i),a&=~h}}var Rt=0;function Dr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var kh,Xu,Oh,Bh,zh,ju=!1,ja=[],Mi=null,wi=null,Ti=null,Is=new Map,Fs=new Map,Ci=[],d0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hh(n,i){switch(n){case"focusin":case"focusout":Mi=null;break;case"dragenter":case"dragleave":wi=null;break;case"mouseover":case"mouseout":Ti=null;break;case"pointerover":case"pointerout":Is.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fs.delete(i.pointerId)}}function ks(n,i,a,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Zs(i),i!==null&&Xu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function f0(n,i,a,u,h){switch(i){case"focusin":return Mi=ks(Mi,n,i,a,u,h),!0;case"dragenter":return wi=ks(wi,n,i,a,u,h),!0;case"mouseover":return Ti=ks(Ti,n,i,a,u,h),!0;case"pointerover":var g=h.pointerId;return Is.set(g,ks(Is.get(g)||null,n,i,a,u,h)),!0;case"gotpointercapture":return g=h.pointerId,Fs.set(g,ks(Fs.get(g)||null,n,i,a,u,h)),!0}return!1}function Vh(n){var i=to(n.target);if(i!==null){var a=Et(i);if(a!==null){if(i=a.tag,i===13){if(i=kt(a),i!==null){n.blockedOn=i,zh(n.priority,function(){Oh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $a(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Yu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);st=u,a.target.dispatchEvent(u),st=null}else return i=Zs(a),i!==null&&Xu(i),n.blockedOn=a,!1;i.shift()}return!0}function Gh(n,i,a){$a(n)&&a.delete(i)}function h0(){ju=!1,Mi!==null&&$a(Mi)&&(Mi=null),wi!==null&&$a(wi)&&(wi=null),Ti!==null&&$a(Ti)&&(Ti=null),Is.forEach(Gh),Fs.forEach(Gh)}function Os(n,i){n.blockedOn===i&&(n.blockedOn=null,ju||(ju=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,h0)))}function Bs(n){function i(h){return Os(h,n)}if(0<ja.length){Os(ja[0],n);for(var a=1;a<ja.length;a++){var u=ja[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Mi!==null&&Os(Mi,n),wi!==null&&Os(wi,n),Ti!==null&&Os(Ti,n),Is.forEach(i),Fs.forEach(i),a=0;a<Ci.length;a++)u=Ci[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Ci.length&&(a=Ci[0],a.blockedOn===null);)Vh(a),a.blockedOn===null&&Ci.shift()}var Do=A.ReactCurrentBatchConfig,Ya=!0;function p0(n,i,a,u){var h=Rt,g=Do.transition;Do.transition=null;try{Rt=1,$u(n,i,a,u)}finally{Rt=h,Do.transition=g}}function m0(n,i,a,u){var h=Rt,g=Do.transition;Do.transition=null;try{Rt=4,$u(n,i,a,u)}finally{Rt=h,Do.transition=g}}function $u(n,i,a,u){if(Ya){var h=Yu(n,i,a,u);if(h===null)dc(n,i,u,qa,a),Hh(n,u);else if(f0(h,n,i,a,u))u.stopPropagation();else if(Hh(n,u),i&4&&-1<d0.indexOf(n)){for(;h!==null;){var g=Zs(h);if(g!==null&&kh(g),g=Yu(n,i,a,u),g===null&&dc(n,i,u,qa,a),g===h)break;h=g}h!==null&&u.stopPropagation()}else dc(n,i,u,null,a)}}var qa=null;function Yu(n,i,a,u){if(qa=null,n=W(u),n=to(n),n!==null)if(i=Et(n),i===null)n=null;else if(a=i.tag,a===13){if(n=kt(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return qa=n,null}function Wh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Re:return 1;case Fe:return 4;case je:case Xe:return 16;case dt:return 536870912;default:return 16}default:return 16}}var Ri=null,qu=null,Ka=null;function Xh(){if(Ka)return Ka;var n,i=qu,a=i.length,u,h="value"in Ri?Ri.value:Ri.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var w=a-n;for(u=1;u<=w&&i[a-u]===h[g-u];u++);return Ka=h.slice(n,1<u?1-u:void 0)}function Za(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ja(){return!0}function jh(){return!1}function Zn(n){function i(a,u,h,g,w){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(a=n[N],this[N]=a?a(g):g[N]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ja:jh,this.isPropagationStopped=jh,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),i}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ku=Zn(No),zs=le({},No,{view:0,detail:0}),g0=Zn(zs),Zu,Ju,Hs,Qa=le({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ec,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Hs&&(Hs&&n.type==="mousemove"?(Zu=n.screenX-Hs.screenX,Ju=n.screenY-Hs.screenY):Ju=Zu=0,Hs=n),Zu)},movementY:function(n){return"movementY"in n?n.movementY:Ju}}),$h=Zn(Qa),v0=le({},Qa,{dataTransfer:0}),_0=Zn(v0),x0=le({},zs,{relatedTarget:0}),Qu=Zn(x0),y0=le({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),S0=Zn(y0),E0=le({},No,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),M0=Zn(E0),w0=le({},No,{data:0}),Yh=Zn(w0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=R0[n])?!!i[n]:!1}function ec(){return A0}var b0=le({},zs,{key:function(n){if(n.key){var i=T0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Za(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?C0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ec,charCode:function(n){return n.type==="keypress"?Za(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Za(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),P0=Zn(b0),L0=le({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qh=Zn(L0),D0=le({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ec}),N0=Zn(D0),U0=le({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),I0=Zn(U0),F0=le({},Qa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),k0=Zn(F0),O0=[9,13,27,32],tc=d&&"CompositionEvent"in window,Vs=null;d&&"documentMode"in document&&(Vs=document.documentMode);var B0=d&&"TextEvent"in window&&!Vs,Kh=d&&(!tc||Vs&&8<Vs&&11>=Vs),Zh=" ",Jh=!1;function Qh(n,i){switch(n){case"keyup":return O0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Uo=!1;function z0(n,i){switch(n){case"compositionend":return ep(i);case"keypress":return i.which!==32?null:(Jh=!0,Zh);case"textInput":return n=i.data,n===Zh&&Jh?null:n;default:return null}}function H0(n,i){if(Uo)return n==="compositionend"||!tc&&Qh(n,i)?(n=Xh(),Ka=qu=Ri=null,Uo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kh&&i.locale!=="ko"?null:i.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!V0[n.type]:i==="textarea"}function np(n,i,a,u){ge(u),i=il(i,"onChange"),0<i.length&&(a=new Ku("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Gs=null,Ws=null;function G0(n){yp(n,0)}function el(n){var i=Bo(n);if(ot(i))return n}function W0(n,i){if(n==="change")return i}var rp=!1;if(d){var nc;if(d){var rc="oninput"in document;if(!rc){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),rc=typeof ip.oninput=="function"}nc=rc}else nc=!1;rp=nc&&(!document.documentMode||9<document.documentMode)}function op(){Gs&&(Gs.detachEvent("onpropertychange",sp),Ws=Gs=null)}function sp(n){if(n.propertyName==="value"&&el(Ws)){var i=[];np(i,Ws,n,W(n)),gn(G0,i)}}function X0(n,i,a){n==="focusin"?(op(),Gs=i,Ws=a,Gs.attachEvent("onpropertychange",sp)):n==="focusout"&&op()}function j0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return el(Ws)}function $0(n,i){if(n==="click")return el(i)}function Y0(n,i){if(n==="input"||n==="change")return el(i)}function q0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var _r=typeof Object.is=="function"?Object.is:q0;function Xs(n,i){if(_r(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!f.call(i,h)||!_r(n[h],i[h]))return!1}return!0}function ap(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function lp(n,i){var a=ap(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ap(a)}}function up(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?up(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function cp(){for(var n=window,i=Ze();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ze(n.document)}return i}function ic(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function K0(n){var i=cp(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&up(a.ownerDocument.documentElement,a)){if(u!==null&&ic(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=lp(a,g);var w=lp(a,u);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Z0=d&&"documentMode"in document&&11>=document.documentMode,Io=null,oc=null,js=null,sc=!1;function dp(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sc||Io==null||Io!==Ze(u)||(u=Io,"selectionStart"in u&&ic(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),js&&Xs(js,u)||(js=u,u=il(oc,"onSelect"),0<u.length&&(i=new Ku("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Io)))}function tl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Fo={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},ac={},fp={};d&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete Fo.animationend.animation,delete Fo.animationiteration.animation,delete Fo.animationstart.animation),"TransitionEvent"in window||delete Fo.transitionend.transition);function nl(n){if(ac[n])return ac[n];if(!Fo[n])return n;var i=Fo[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in fp)return ac[n]=i[a];return n}var hp=nl("animationend"),pp=nl("animationiteration"),mp=nl("animationstart"),gp=nl("transitionend"),vp=new Map,_p="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ai(n,i){vp.set(n,i),l(i,[n])}for(var lc=0;lc<_p.length;lc++){var uc=_p[lc],J0=uc.toLowerCase(),Q0=uc[0].toUpperCase()+uc.slice(1);Ai(J0,"on"+Q0)}Ai(hp,"onAnimationEnd"),Ai(pp,"onAnimationIteration"),Ai(mp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(gp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function xp(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,qt(u,i,void 0,n),n.currentTarget=null}function yp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],h=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var w=u.length-1;0<=w;w--){var N=u[w],H=N.instance,ie=N.currentTarget;if(N=N.listener,H!==g&&h.isPropagationStopped())break e;xp(h,N,ie),g=H}else for(w=0;w<u.length;w++){if(N=u[w],H=N.instance,ie=N.currentTarget,N=N.listener,H!==g&&h.isPropagationStopped())break e;xp(h,N,ie),g=H}}}if(Pr)throw n=Lr,Pr=!1,Lr=null,n}function Ht(n,i){var a=i[vc];a===void 0&&(a=i[vc]=new Set);var u=n+"__bubble";a.has(u)||(Sp(i,n,2,!1),a.add(u))}function cc(n,i,a){var u=0;i&&(u|=4),Sp(a,n,u,i)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Ys(n){if(!n[rl]){n[rl]=!0,o.forEach(function(a){a!=="selectionchange"&&(ex.has(a)||cc(a,!1,n),cc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[rl]||(i[rl]=!0,cc("selectionchange",!1,i))}}function Sp(n,i,a,u){switch(Wh(i)){case 1:var h=p0;break;case 4:h=m0;break;default:h=$u}a=h.bind(null,i,a,n),h=void 0,!Si||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function dc(n,i,a,u,h){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var N=u.stateNode.containerInfo;if(N===h||N.nodeType===8&&N.parentNode===h)break;if(w===4)for(w=u.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===h||H.nodeType===8&&H.parentNode===h))return;w=w.return}for(;N!==null;){if(w=to(N),w===null)return;if(H=w.tag,H===5||H===6){u=g=w;continue e}N=N.parentNode}}u=u.return}gn(function(){var ie=g,Me=W(a),Te=[];e:{var ye=vp.get(n);if(ye!==void 0){var Ve=Ku,qe=n;switch(n){case"keypress":if(Za(a)===0)break e;case"keydown":case"keyup":Ve=P0;break;case"focusin":qe="focus",Ve=Qu;break;case"focusout":qe="blur",Ve=Qu;break;case"beforeblur":case"afterblur":Ve=Qu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=$h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=_0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=N0;break;case hp:case pp:case mp:Ve=S0;break;case gp:Ve=I0;break;case"scroll":Ve=g0;break;case"wheel":Ve=k0;break;case"copy":case"cut":case"paste":Ve=M0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=qh}var Qe=(i&4)!==0,en=!Qe&&n==="scroll",q=Qe?ye!==null?ye+"Capture":null:ye;Qe=[];for(var j=ie,te;j!==null;){te=j;var Pe=te.stateNode;if(te.tag===5&&Pe!==null&&(te=Pe,q!==null&&(Pe=rn(j,q),Pe!=null&&Qe.push(qs(j,Pe,te)))),en)break;j=j.return}0<Qe.length&&(ye=new Ve(ye,qe,null,a,Me),Te.push({event:ye,listeners:Qe}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",ye&&a!==st&&(qe=a.relatedTarget||a.fromElement)&&(to(qe)||qe[Zr]))break e;if((Ve||ye)&&(ye=Me.window===Me?Me:(ye=Me.ownerDocument)?ye.defaultView||ye.parentWindow:window,Ve?(qe=a.relatedTarget||a.toElement,Ve=ie,qe=qe?to(qe):null,qe!==null&&(en=Et(qe),qe!==en||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(Ve=null,qe=ie),Ve!==qe)){if(Qe=$h,Pe="onMouseLeave",q="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(Qe=qh,Pe="onPointerLeave",q="onPointerEnter",j="pointer"),en=Ve==null?ye:Bo(Ve),te=qe==null?ye:Bo(qe),ye=new Qe(Pe,j+"leave",Ve,a,Me),ye.target=en,ye.relatedTarget=te,Pe=null,to(Me)===ie&&(Qe=new Qe(q,j+"enter",qe,a,Me),Qe.target=te,Qe.relatedTarget=en,Pe=Qe),en=Pe,Ve&&qe)t:{for(Qe=Ve,q=qe,j=0,te=Qe;te;te=ko(te))j++;for(te=0,Pe=q;Pe;Pe=ko(Pe))te++;for(;0<j-te;)Qe=ko(Qe),j--;for(;0<te-j;)q=ko(q),te--;for(;j--;){if(Qe===q||q!==null&&Qe===q.alternate)break t;Qe=ko(Qe),q=ko(q)}Qe=null}else Qe=null;Ve!==null&&Ep(Te,ye,Ve,Qe,!1),qe!==null&&en!==null&&Ep(Te,en,qe,Qe,!0)}}e:{if(ye=ie?Bo(ie):window,Ve=ye.nodeName&&ye.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&ye.type==="file")var tt=W0;else if(tp(ye))if(rp)tt=Y0;else{tt=j0;var at=X0}else(Ve=ye.nodeName)&&Ve.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(tt=$0);if(tt&&(tt=tt(n,ie))){np(Te,tt,a,Me);break e}at&&at(n,ye,ie),n==="focusout"&&(at=ye._wrapperState)&&at.controlled&&ye.type==="number"&&ht(ye,"number",ye.value)}switch(at=ie?Bo(ie):window,n){case"focusin":(tp(at)||at.contentEditable==="true")&&(Io=at,oc=ie,js=null);break;case"focusout":js=oc=Io=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,dp(Te,a,Me);break;case"selectionchange":if(Z0)break;case"keydown":case"keyup":dp(Te,a,Me)}var lt;if(tc)e:{switch(n){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else Uo?Qh(n,a)&&(ft="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ft="onCompositionStart");ft&&(Kh&&a.locale!=="ko"&&(Uo||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Uo&&(lt=Xh()):(Ri=Me,qu="value"in Ri?Ri.value:Ri.textContent,Uo=!0)),at=il(ie,ft),0<at.length&&(ft=new Yh(ft,n,null,a,Me),Te.push({event:ft,listeners:at}),lt?ft.data=lt:(lt=ep(a),lt!==null&&(ft.data=lt)))),(lt=B0?z0(n,a):H0(n,a))&&(ie=il(ie,"onBeforeInput"),0<ie.length&&(Me=new Yh("onBeforeInput","beforeinput",null,a,Me),Te.push({event:Me,listeners:ie}),Me.data=lt))}yp(Te,i)})}function qs(n,i,a){return{instance:n,listener:i,currentTarget:a}}function il(n,i){for(var a=i+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=rn(n,a),g!=null&&u.unshift(qs(n,g,h)),g=rn(n,i),g!=null&&u.push(qs(n,g,h))),n=n.return}return u}function ko(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ep(n,i,a,u,h){for(var g=i._reactName,w=[];a!==null&&a!==u;){var N=a,H=N.alternate,ie=N.stateNode;if(H!==null&&H===u)break;N.tag===5&&ie!==null&&(N=ie,h?(H=rn(a,g),H!=null&&w.unshift(qs(a,H,N))):h||(H=rn(a,g),H!=null&&w.push(qs(a,H,N)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var tx=/\r\n?/g,nx=/\u0000|\uFFFD/g;function Mp(n){return(typeof n=="string"?n:""+n).replace(tx,`
`).replace(nx,"")}function ol(n,i,a){if(i=Mp(i),Mp(n)!==i&&a)throw Error(t(425))}function sl(){}var fc=null,hc=null;function pc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mc=typeof setTimeout=="function"?setTimeout:void 0,rx=typeof clearTimeout=="function"?clearTimeout:void 0,wp=typeof Promise=="function"?Promise:void 0,ix=typeof queueMicrotask=="function"?queueMicrotask:typeof wp<"u"?function(n){return wp.resolve(null).then(n).catch(ox)}:mc;function ox(n){setTimeout(function(){throw n})}function gc(n,i){var a=i,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){n.removeChild(h),Bs(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);Bs(i)}function bi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Tp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),Nr="__reactFiber$"+Oo,Ks="__reactProps$"+Oo,Zr="__reactContainer$"+Oo,vc="__reactEvents$"+Oo,sx="__reactListeners$"+Oo,ax="__reactHandles$"+Oo;function to(n){var i=n[Nr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Zr]||a[Nr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Tp(n);n!==null;){if(a=n[Nr])return a;n=Tp(n)}return i}n=a,a=n.parentNode}return null}function Zs(n){return n=n[Nr]||n[Zr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Bo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function al(n){return n[Ks]||null}var _c=[],zo=-1;function Pi(n){return{current:n}}function Vt(n){0>zo||(n.current=_c[zo],_c[zo]=null,zo--)}function zt(n,i){zo++,_c[zo]=n.current,n.current=i}var Li={},wn=Pi(Li),Hn=Pi(!1),no=Li;function Ho(n,i){var a=n.type.contextTypes;if(!a)return Li;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Vn(n){return n=n.childContextTypes,n!=null}function ll(){Vt(Hn),Vt(wn)}function Cp(n,i,a){if(wn.current!==Li)throw Error(t(168));zt(wn,i),zt(Hn,a)}function Rp(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,Se(n)||"Unknown",h));return le({},a,u)}function ul(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Li,no=wn.current,zt(wn,n),zt(Hn,Hn.current),!0}function Ap(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Rp(n,i,no),u.__reactInternalMemoizedMergedChildContext=n,Vt(Hn),Vt(wn),zt(wn,n)):Vt(Hn),zt(Hn,a)}var Jr=null,cl=!1,xc=!1;function bp(n){Jr===null?Jr=[n]:Jr.push(n)}function lx(n){cl=!0,bp(n)}function Di(){if(!xc&&Jr!==null){xc=!0;var n=0,i=Rt;try{var a=Jr;for(Rt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Jr=null,cl=!1}catch(h){throw Jr!==null&&(Jr=Jr.slice(n+1)),En(Re,Di),h}finally{Rt=i,xc=!1}}return null}var Vo=[],Go=0,dl=null,fl=0,ir=[],or=0,ro=null,Qr=1,ei="";function io(n,i){Vo[Go++]=fl,Vo[Go++]=dl,dl=n,fl=i}function Pp(n,i,a){ir[or++]=Qr,ir[or++]=ei,ir[or++]=ro,ro=n;var u=Qr;n=ei;var h=32-vt(u)-1;u&=~(1<<h),a+=1;var g=32-vt(i)+h;if(30<g){var w=h-h%5;g=(u&(1<<w)-1).toString(32),u>>=w,h-=w,Qr=1<<32-vt(i)+h|a<<h|u,ei=g+n}else Qr=1<<g|a<<h|u,ei=n}function yc(n){n.return!==null&&(io(n,1),Pp(n,1,0))}function Sc(n){for(;n===dl;)dl=Vo[--Go],Vo[Go]=null,fl=Vo[--Go],Vo[Go]=null;for(;n===ro;)ro=ir[--or],ir[or]=null,ei=ir[--or],ir[or]=null,Qr=ir[--or],ir[or]=null}var Jn=null,Qn=null,Wt=!1,xr=null;function Lp(n,i){var a=ur(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Dp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Jn=n,Qn=bi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Jn=n,Qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ro!==null?{id:Qr,overflow:ei}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ur(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Jn=n,Qn=null,!0):!1;default:return!1}}function Ec(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Mc(n){if(Wt){var i=Qn;if(i){var a=i;if(!Dp(n,i)){if(Ec(n))throw Error(t(418));i=bi(a.nextSibling);var u=Jn;i&&Dp(n,i)?Lp(u,a):(n.flags=n.flags&-4097|2,Wt=!1,Jn=n)}}else{if(Ec(n))throw Error(t(418));n.flags=n.flags&-4097|2,Wt=!1,Jn=n}}}function Np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jn=n}function hl(n){if(n!==Jn)return!1;if(!Wt)return Np(n),Wt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!pc(n.type,n.memoizedProps)),i&&(i=Qn)){if(Ec(n))throw Up(),Error(t(418));for(;i;)Lp(n,i),i=bi(i.nextSibling)}if(Np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Qn=bi(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Qn=null}}else Qn=Jn?bi(n.stateNode.nextSibling):null;return!0}function Up(){for(var n=Qn;n;)n=bi(n.nextSibling)}function Wo(){Qn=Jn=null,Wt=!1}function wc(n){xr===null?xr=[n]:xr.push(n)}var ux=A.ReactCurrentBatchConfig;function Js(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var N=h.refs;w===null?delete N[g]:N[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function pl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ip(n){var i=n._init;return i(n._payload)}function Fp(n){function i(q,j){if(n){var te=q.deletions;te===null?(q.deletions=[j],q.flags|=16):te.push(j)}}function a(q,j){if(!n)return null;for(;j!==null;)i(q,j),j=j.sibling;return null}function u(q,j){for(q=new Map;j!==null;)j.key!==null?q.set(j.key,j):q.set(j.index,j),j=j.sibling;return q}function h(q,j){return q=zi(q,j),q.index=0,q.sibling=null,q}function g(q,j,te){return q.index=te,n?(te=q.alternate,te!==null?(te=te.index,te<j?(q.flags|=2,j):te):(q.flags|=2,j)):(q.flags|=1048576,j)}function w(q){return n&&q.alternate===null&&(q.flags|=2),q}function N(q,j,te,Pe){return j===null||j.tag!==6?(j=md(te,q.mode,Pe),j.return=q,j):(j=h(j,te),j.return=q,j)}function H(q,j,te,Pe){var tt=te.type;return tt===k?Me(q,j,te.props.children,Pe,te.key):j!==null&&(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ue&&Ip(tt)===j.type)?(Pe=h(j,te.props),Pe.ref=Js(q,j,te),Pe.return=q,Pe):(Pe=Ol(te.type,te.key,te.props,null,q.mode,Pe),Pe.ref=Js(q,j,te),Pe.return=q,Pe)}function ie(q,j,te,Pe){return j===null||j.tag!==4||j.stateNode.containerInfo!==te.containerInfo||j.stateNode.implementation!==te.implementation?(j=gd(te,q.mode,Pe),j.return=q,j):(j=h(j,te.children||[]),j.return=q,j)}function Me(q,j,te,Pe,tt){return j===null||j.tag!==7?(j=ho(te,q.mode,Pe,tt),j.return=q,j):(j=h(j,te),j.return=q,j)}function Te(q,j,te){if(typeof j=="string"&&j!==""||typeof j=="number")return j=md(""+j,q.mode,te),j.return=q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case G:return te=Ol(j.type,j.key,j.props,null,q.mode,te),te.ref=Js(q,null,j),te.return=q,te;case I:return j=gd(j,q.mode,te),j.return=q,j;case ue:var Pe=j._init;return Te(q,Pe(j._payload),te)}if(et(j)||de(j))return j=ho(j,q.mode,te,null),j.return=q,j;pl(q,j)}return null}function ye(q,j,te,Pe){var tt=j!==null?j.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return tt!==null?null:N(q,j,""+te,Pe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case G:return te.key===tt?H(q,j,te,Pe):null;case I:return te.key===tt?ie(q,j,te,Pe):null;case ue:return tt=te._init,ye(q,j,tt(te._payload),Pe)}if(et(te)||de(te))return tt!==null?null:Me(q,j,te,Pe,null);pl(q,te)}return null}function Ve(q,j,te,Pe,tt){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return q=q.get(te)||null,N(j,q,""+Pe,tt);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case G:return q=q.get(Pe.key===null?te:Pe.key)||null,H(j,q,Pe,tt);case I:return q=q.get(Pe.key===null?te:Pe.key)||null,ie(j,q,Pe,tt);case ue:var at=Pe._init;return Ve(q,j,te,at(Pe._payload),tt)}if(et(Pe)||de(Pe))return q=q.get(te)||null,Me(j,q,Pe,tt,null);pl(j,Pe)}return null}function qe(q,j,te,Pe){for(var tt=null,at=null,lt=j,ft=j=0,pn=null;lt!==null&&ft<te.length;ft++){lt.index>ft?(pn=lt,lt=null):pn=lt.sibling;var bt=ye(q,lt,te[ft],Pe);if(bt===null){lt===null&&(lt=pn);break}n&&lt&&bt.alternate===null&&i(q,lt),j=g(bt,j,ft),at===null?tt=bt:at.sibling=bt,at=bt,lt=pn}if(ft===te.length)return a(q,lt),Wt&&io(q,ft),tt;if(lt===null){for(;ft<te.length;ft++)lt=Te(q,te[ft],Pe),lt!==null&&(j=g(lt,j,ft),at===null?tt=lt:at.sibling=lt,at=lt);return Wt&&io(q,ft),tt}for(lt=u(q,lt);ft<te.length;ft++)pn=Ve(lt,q,ft,te[ft],Pe),pn!==null&&(n&&pn.alternate!==null&&lt.delete(pn.key===null?ft:pn.key),j=g(pn,j,ft),at===null?tt=pn:at.sibling=pn,at=pn);return n&&lt.forEach(function(Hi){return i(q,Hi)}),Wt&&io(q,ft),tt}function Qe(q,j,te,Pe){var tt=de(te);if(typeof tt!="function")throw Error(t(150));if(te=tt.call(te),te==null)throw Error(t(151));for(var at=tt=null,lt=j,ft=j=0,pn=null,bt=te.next();lt!==null&&!bt.done;ft++,bt=te.next()){lt.index>ft?(pn=lt,lt=null):pn=lt.sibling;var Hi=ye(q,lt,bt.value,Pe);if(Hi===null){lt===null&&(lt=pn);break}n&&lt&&Hi.alternate===null&&i(q,lt),j=g(Hi,j,ft),at===null?tt=Hi:at.sibling=Hi,at=Hi,lt=pn}if(bt.done)return a(q,lt),Wt&&io(q,ft),tt;if(lt===null){for(;!bt.done;ft++,bt=te.next())bt=Te(q,bt.value,Pe),bt!==null&&(j=g(bt,j,ft),at===null?tt=bt:at.sibling=bt,at=bt);return Wt&&io(q,ft),tt}for(lt=u(q,lt);!bt.done;ft++,bt=te.next())bt=Ve(lt,q,ft,bt.value,Pe),bt!==null&&(n&&bt.alternate!==null&&lt.delete(bt.key===null?ft:bt.key),j=g(bt,j,ft),at===null?tt=bt:at.sibling=bt,at=bt);return n&&lt.forEach(function(Vx){return i(q,Vx)}),Wt&&io(q,ft),tt}function en(q,j,te,Pe){if(typeof te=="object"&&te!==null&&te.type===k&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case G:e:{for(var tt=te.key,at=j;at!==null;){if(at.key===tt){if(tt=te.type,tt===k){if(at.tag===7){a(q,at.sibling),j=h(at,te.props.children),j.return=q,q=j;break e}}else if(at.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ue&&Ip(tt)===at.type){a(q,at.sibling),j=h(at,te.props),j.ref=Js(q,at,te),j.return=q,q=j;break e}a(q,at);break}else i(q,at);at=at.sibling}te.type===k?(j=ho(te.props.children,q.mode,Pe,te.key),j.return=q,q=j):(Pe=Ol(te.type,te.key,te.props,null,q.mode,Pe),Pe.ref=Js(q,j,te),Pe.return=q,q=Pe)}return w(q);case I:e:{for(at=te.key;j!==null;){if(j.key===at)if(j.tag===4&&j.stateNode.containerInfo===te.containerInfo&&j.stateNode.implementation===te.implementation){a(q,j.sibling),j=h(j,te.children||[]),j.return=q,q=j;break e}else{a(q,j);break}else i(q,j);j=j.sibling}j=gd(te,q.mode,Pe),j.return=q,q=j}return w(q);case ue:return at=te._init,en(q,j,at(te._payload),Pe)}if(et(te))return qe(q,j,te,Pe);if(de(te))return Qe(q,j,te,Pe);pl(q,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,j!==null&&j.tag===6?(a(q,j.sibling),j=h(j,te),j.return=q,q=j):(a(q,j),j=md(te,q.mode,Pe),j.return=q,q=j),w(q)):a(q,j)}return en}var Xo=Fp(!0),kp=Fp(!1),ml=Pi(null),gl=null,jo=null,Tc=null;function Cc(){Tc=jo=gl=null}function Rc(n){var i=ml.current;Vt(ml),n._currentValue=i}function Ac(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function $o(n,i){gl=n,Tc=jo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gn=!0),n.firstContext=null)}function sr(n){var i=n._currentValue;if(Tc!==n)if(n={context:n,memoizedValue:i,next:null},jo===null){if(gl===null)throw Error(t(308));jo=n,gl.dependencies={lanes:0,firstContext:n}}else jo=jo.next=n;return i}var oo=null;function bc(n){oo===null?oo=[n]:oo.push(n)}function Op(n,i,a,u){var h=i.interleaved;return h===null?(a.next=a,bc(i)):(a.next=h.next,h.next=a),i.interleaved=a,ti(n,u)}function ti(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ni=!1;function Pc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ni(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Ui(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(At&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,ti(n,a)}return h=u.interleaved,h===null?(i.next=i,bc(u)):(i.next=h.next,h.next=i),u.interleaved=i,ti(n,a)}function vl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,dn(n,a)}}function zp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function _l(n,i,a,u){var h=n.updateQueue;Ni=!1;var g=h.firstBaseUpdate,w=h.lastBaseUpdate,N=h.shared.pending;if(N!==null){h.shared.pending=null;var H=N,ie=H.next;H.next=null,w===null?g=ie:w.next=ie,w=H;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,N=Me.lastBaseUpdate,N!==w&&(N===null?Me.firstBaseUpdate=ie:N.next=ie,Me.lastBaseUpdate=H))}if(g!==null){var Te=h.baseState;w=0,Me=ie=H=null,N=g;do{var ye=N.lane,Ve=N.eventTime;if((u&ye)===ye){Me!==null&&(Me=Me.next={eventTime:Ve,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var qe=n,Qe=N;switch(ye=i,Ve=a,Qe.tag){case 1:if(qe=Qe.payload,typeof qe=="function"){Te=qe.call(Ve,Te,ye);break e}Te=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Qe.payload,ye=typeof qe=="function"?qe.call(Ve,Te,ye):qe,ye==null)break e;Te=le({},Te,ye);break e;case 2:Ni=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,ye=h.effects,ye===null?h.effects=[N]:ye.push(N))}else Ve={eventTime:Ve,lane:ye,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Me===null?(ie=Me=Ve,H=Te):Me=Me.next=Ve,w|=ye;if(N=N.next,N===null){if(N=h.shared.pending,N===null)break;ye=N,N=ye.next,ye.next=null,h.lastBaseUpdate=ye,h.shared.pending=null}}while(!0);if(Me===null&&(H=Te),h.baseState=H,h.firstBaseUpdate=ie,h.lastBaseUpdate=Me,i=h.shared.interleaved,i!==null){h=i;do w|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);lo|=w,n.lanes=w,n.memoizedState=Te}}function Hp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Qs={},Ur=Pi(Qs),ea=Pi(Qs),ta=Pi(Qs);function so(n){if(n===Qs)throw Error(t(174));return n}function Lc(n,i){switch(zt(ta,i),zt(ea,n),zt(Ur,Qs),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ve(i,n)}Vt(Ur),zt(Ur,i)}function Yo(){Vt(Ur),Vt(ea),Vt(ta)}function Vp(n){so(ta.current);var i=so(Ur.current),a=ve(i,n.type);i!==a&&(zt(ea,n),zt(Ur,a))}function Dc(n){ea.current===n&&(Vt(Ur),Vt(ea))}var Xt=Pi(0);function xl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nc=[];function Uc(){for(var n=0;n<Nc.length;n++)Nc[n]._workInProgressVersionPrimary=null;Nc.length=0}var yl=A.ReactCurrentDispatcher,Ic=A.ReactCurrentBatchConfig,ao=0,jt=null,on=null,fn=null,Sl=!1,na=!1,ra=0,cx=0;function Tn(){throw Error(t(321))}function Fc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!_r(n[a],i[a]))return!1;return!0}function kc(n,i,a,u,h,g){if(ao=g,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,yl.current=n===null||n.memoizedState===null?px:mx,n=a(u,h),na){g=0;do{if(na=!1,ra=0,25<=g)throw Error(t(301));g+=1,fn=on=null,i.updateQueue=null,yl.current=gx,n=a(u,h)}while(na)}if(yl.current=wl,i=on!==null&&on.next!==null,ao=0,fn=on=jt=null,Sl=!1,i)throw Error(t(300));return n}function Oc(){var n=ra!==0;return ra=0,n}function Ir(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?jt.memoizedState=fn=n:fn=fn.next=n,fn}function ar(){if(on===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var i=fn===null?jt.memoizedState:fn.next;if(i!==null)fn=i,on=n;else{if(n===null)throw Error(t(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},fn===null?jt.memoizedState=fn=n:fn=fn.next=n}return fn}function ia(n,i){return typeof i=="function"?i(n):i}function Bc(n){var i=ar(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=on,h=u.baseQueue,g=a.pending;if(g!==null){if(h!==null){var w=h.next;h.next=g.next,g.next=w}u.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,u=u.baseState;var N=w=null,H=null,ie=g;do{var Me=ie.lane;if((ao&Me)===Me)H!==null&&(H=H.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),u=ie.hasEagerState?ie.eagerState:n(u,ie.action);else{var Te={lane:Me,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};H===null?(N=H=Te,w=u):H=H.next=Te,jt.lanes|=Me,lo|=Me}ie=ie.next}while(ie!==null&&ie!==g);H===null?w=u:H.next=N,_r(u,i.memoizedState)||(Gn=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=H,a.lastRenderedState=u}if(n=a.interleaved,n!==null){h=n;do g=h.lane,jt.lanes|=g,lo|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function zc(n){var i=ar(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do g=n(g,w.action),w=w.next;while(w!==h);_r(g,i.memoizedState)||(Gn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function Gp(){}function Wp(n,i){var a=jt,u=ar(),h=i(),g=!_r(u.memoizedState,h);if(g&&(u.memoizedState=h,Gn=!0),u=u.queue,Hc($p.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||fn!==null&&fn.memoizedState.tag&1){if(a.flags|=2048,oa(9,jp.bind(null,a,u,h,i),void 0,null),hn===null)throw Error(t(349));(ao&30)!==0||Xp(a,i,h)}return h}function Xp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function jp(n,i,a,u){i.value=a,i.getSnapshot=u,Yp(i)&&qp(n)}function $p(n,i,a){return a(function(){Yp(i)&&qp(n)})}function Yp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!_r(n,a)}catch{return!0}}function qp(n){var i=ti(n,1);i!==null&&Mr(i,n,1,-1)}function Kp(n){var i=Ir();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:n},i.queue=n,n=n.dispatch=hx.bind(null,jt,n),[i.memoizedState,n]}function oa(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Zp(){return ar().memoizedState}function El(n,i,a,u){var h=Ir();jt.flags|=n,h.memoizedState=oa(1|i,a,void 0,u===void 0?null:u)}function Ml(n,i,a,u){var h=ar();u=u===void 0?null:u;var g=void 0;if(on!==null){var w=on.memoizedState;if(g=w.destroy,u!==null&&Fc(u,w.deps)){h.memoizedState=oa(i,a,g,u);return}}jt.flags|=n,h.memoizedState=oa(1|i,a,g,u)}function Jp(n,i){return El(8390656,8,n,i)}function Hc(n,i){return Ml(2048,8,n,i)}function Qp(n,i){return Ml(4,2,n,i)}function em(n,i){return Ml(4,4,n,i)}function tm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function nm(n,i,a){return a=a!=null?a.concat([n]):null,Ml(4,4,tm.bind(null,i,n),a)}function Vc(){}function rm(n,i){var a=ar();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Fc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function im(n,i){var a=ar();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Fc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function om(n,i,a){return(ao&21)===0?(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=a):(_r(a,i)||(a=Bt(),jt.lanes|=a,lo|=a,n.baseState=!0),i)}function dx(n,i){var a=Rt;Rt=a!==0&&4>a?a:4,n(!0);var u=Ic.transition;Ic.transition={};try{n(!1),i()}finally{Rt=a,Ic.transition=u}}function sm(){return ar().memoizedState}function fx(n,i,a){var u=Oi(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},am(n))lm(i,a);else if(a=Op(n,i,a,u),a!==null){var h=Un();Mr(a,n,u,h),um(a,i,u)}}function hx(n,i,a){var u=Oi(n),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(am(n))lm(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,N=g(w,a);if(h.hasEagerState=!0,h.eagerState=N,_r(N,w)){var H=i.interleaved;H===null?(h.next=h,bc(i)):(h.next=H.next,H.next=h),i.interleaved=h;return}}catch{}a=Op(n,i,h,u),a!==null&&(h=Un(),Mr(a,n,u,h),um(a,i,u))}}function am(n){var i=n.alternate;return n===jt||i!==null&&i===jt}function lm(n,i){na=Sl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function um(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,dn(n,a)}}var wl={readContext:sr,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},px={readContext:sr,useCallback:function(n,i){return Ir().memoizedState=[n,i===void 0?null:i],n},useContext:sr,useEffect:Jp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,El(4194308,4,tm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return El(4194308,4,n,i)},useInsertionEffect:function(n,i){return El(4,2,n,i)},useMemo:function(n,i){var a=Ir();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Ir();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=fx.bind(null,jt,n),[u.memoizedState,n]},useRef:function(n){var i=Ir();return n={current:n},i.memoizedState=n},useState:Kp,useDebugValue:Vc,useDeferredValue:function(n){return Ir().memoizedState=n},useTransition:function(){var n=Kp(!1),i=n[0];return n=dx.bind(null,n[1]),Ir().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=jt,h=Ir();if(Wt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),hn===null)throw Error(t(349));(ao&30)!==0||Xp(u,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,Jp($p.bind(null,u,g,n),[n]),u.flags|=2048,oa(9,jp.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=Ir(),i=hn.identifierPrefix;if(Wt){var a=ei,u=Qr;a=(u&~(1<<32-vt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=ra++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=cx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},mx={readContext:sr,useCallback:rm,useContext:sr,useEffect:Hc,useImperativeHandle:nm,useInsertionEffect:Qp,useLayoutEffect:em,useMemo:im,useReducer:Bc,useRef:Zp,useState:function(){return Bc(ia)},useDebugValue:Vc,useDeferredValue:function(n){var i=ar();return om(i,on.memoizedState,n)},useTransition:function(){var n=Bc(ia)[0],i=ar().memoizedState;return[n,i]},useMutableSource:Gp,useSyncExternalStore:Wp,useId:sm,unstable_isNewReconciler:!1},gx={readContext:sr,useCallback:rm,useContext:sr,useEffect:Hc,useImperativeHandle:nm,useInsertionEffect:Qp,useLayoutEffect:em,useMemo:im,useReducer:zc,useRef:Zp,useState:function(){return zc(ia)},useDebugValue:Vc,useDeferredValue:function(n){var i=ar();return on===null?i.memoizedState=n:om(i,on.memoizedState,n)},useTransition:function(){var n=zc(ia)[0],i=ar().memoizedState;return[n,i]},useMutableSource:Gp,useSyncExternalStore:Wp,useId:sm,unstable_isNewReconciler:!1};function yr(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Gc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:le({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Tl={isMounted:function(n){return(n=n._reactInternals)?Et(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Un(),h=Oi(n),g=ni(u,h);g.payload=i,a!=null&&(g.callback=a),i=Ui(n,g,h),i!==null&&(Mr(i,n,h,u),vl(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Un(),h=Oi(n),g=ni(u,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Ui(n,g,h),i!==null&&(Mr(i,n,h,u),vl(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Un(),u=Oi(n),h=ni(a,u);h.tag=2,i!=null&&(h.callback=i),i=Ui(n,h,u),i!==null&&(Mr(i,n,u,a),vl(i,n,u))}};function cm(n,i,a,u,h,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,w):i.prototype&&i.prototype.isPureReactComponent?!Xs(a,u)||!Xs(h,g):!0}function dm(n,i,a){var u=!1,h=Li,g=i.contextType;return typeof g=="object"&&g!==null?g=sr(g):(h=Vn(i)?no:wn.current,u=i.contextTypes,g=(u=u!=null)?Ho(n,h):Li),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Tl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function fm(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Tl.enqueueReplaceState(i,i.state,null)}function Wc(n,i,a,u){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Pc(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=sr(g):(g=Vn(i)?no:wn.current,h.context=Ho(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Gc(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Tl.enqueueReplaceState(h,h.state,null),_l(n,a,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function qo(n,i){try{var a="",u=i;do a+=me(u),u=u.return;while(u);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Xc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function jc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var vx=typeof WeakMap=="function"?WeakMap:Map;function hm(n,i,a){a=ni(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Dl||(Dl=!0,ad=u),jc(n,i)},a}function pm(n,i,a){a=ni(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;a.payload=function(){return u(h)},a.callback=function(){jc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){jc(n,i),typeof u!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function mm(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new vx;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(a)||(h.add(a),n=Lx.bind(null,n,i,a),i.then(n,n))}function gm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function vm(n,i,a,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ni(-1,1),i.tag=2,Ui(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var _x=A.ReactCurrentOwner,Gn=!1;function Nn(n,i,a,u){i.child=n===null?kp(i,null,a,u):Xo(i,n.child,a,u)}function _m(n,i,a,u,h){a=a.render;var g=i.ref;return $o(i,h),u=kc(n,i,a,u,g,h),a=Oc(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,ri(n,i,h)):(Wt&&a&&yc(i),i.flags|=1,Nn(n,i,u,h),i.child)}function xm(n,i,a,u,h){if(n===null){var g=a.type;return typeof g=="function"&&!pd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,ym(n,i,g,u,h)):(n=Ol(a.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Xs,a(w,u)&&n.ref===i.ref)return ri(n,i,h)}return i.flags|=1,n=zi(g,u),n.ref=i.ref,n.return=i,i.child=n}function ym(n,i,a,u,h){if(n!==null){var g=n.memoizedProps;if(Xs(g,u)&&n.ref===i.ref)if(Gn=!1,i.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Gn=!0);else return i.lanes=n.lanes,ri(n,i,h)}return $c(n,i,a,u,h)}function Sm(n,i,a){var u=i.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Zo,er),er|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,zt(Zo,er),er|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,zt(Zo,er),er|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,zt(Zo,er),er|=u;return Nn(n,i,h,a),i.child}function Em(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function $c(n,i,a,u,h){var g=Vn(a)?no:wn.current;return g=Ho(i,g),$o(i,h),a=kc(n,i,a,u,g,h),u=Oc(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,ri(n,i,h)):(Wt&&u&&yc(i),i.flags|=1,Nn(n,i,a,h),i.child)}function Mm(n,i,a,u,h){if(Vn(a)){var g=!0;ul(i)}else g=!1;if($o(i,h),i.stateNode===null)Rl(n,i),dm(i,a,u),Wc(i,a,u,h),u=!0;else if(n===null){var w=i.stateNode,N=i.memoizedProps;w.props=N;var H=w.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=sr(ie):(ie=Vn(a)?no:wn.current,ie=Ho(i,ie));var Me=a.getDerivedStateFromProps,Te=typeof Me=="function"||typeof w.getSnapshotBeforeUpdate=="function";Te||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==u||H!==ie)&&fm(i,w,u,ie),Ni=!1;var ye=i.memoizedState;w.state=ye,_l(i,u,w,h),H=i.memoizedState,N!==u||ye!==H||Hn.current||Ni?(typeof Me=="function"&&(Gc(i,a,Me,u),H=i.memoizedState),(N=Ni||cm(i,a,N,u,ye,H,ie))?(Te||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=H),w.props=u,w.state=H,w.context=ie,u=N):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,Bp(n,i),N=i.memoizedProps,ie=i.type===i.elementType?N:yr(i.type,N),w.props=ie,Te=i.pendingProps,ye=w.context,H=a.contextType,typeof H=="object"&&H!==null?H=sr(H):(H=Vn(a)?no:wn.current,H=Ho(i,H));var Ve=a.getDerivedStateFromProps;(Me=typeof Ve=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==Te||ye!==H)&&fm(i,w,u,H),Ni=!1,ye=i.memoizedState,w.state=ye,_l(i,u,w,h);var qe=i.memoizedState;N!==Te||ye!==qe||Hn.current||Ni?(typeof Ve=="function"&&(Gc(i,a,Ve,u),qe=i.memoizedState),(ie=Ni||cm(i,a,ie,u,ye,qe,H)||!1)?(Me||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,qe,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,qe,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||N===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=qe),w.props=u,w.state=qe,w.context=H,u=ie):(typeof w.componentDidUpdate!="function"||N===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),u=!1)}return Yc(n,i,a,u,g,h)}function Yc(n,i,a,u,h,g){Em(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return h&&Ap(i,a,!1),ri(n,i,g);u=i.stateNode,_x.current=i;var N=w&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=Xo(i,n.child,null,g),i.child=Xo(i,null,N,g)):Nn(n,i,N,g),i.memoizedState=u.state,h&&Ap(i,a,!0),i.child}function wm(n){var i=n.stateNode;i.pendingContext?Cp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Cp(n,i.context,!1),Lc(n,i.containerInfo)}function Tm(n,i,a,u,h){return Wo(),wc(h),i.flags|=256,Nn(n,i,a,u),i.child}var qc={dehydrated:null,treeContext:null,retryLane:0};function Kc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cm(n,i,a){var u=i.pendingProps,h=Xt.current,g=!1,w=(i.flags&128)!==0,N;if((N=w)||(N=n!==null&&n.memoizedState===null?!1:(h&2)!==0),N?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),zt(Xt,h&1),n===null)return Mc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,n=u.fallback,g?(u=i.mode,g=i.child,w={mode:"hidden",children:w},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Bl(w,u,0,null),n=ho(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Kc(a),i.memoizedState=qc,n):Zc(i,w));if(h=n.memoizedState,h!==null&&(N=h.dehydrated,N!==null))return xx(n,i,w,u,N,h,a);if(g){g=u.fallback,w=i.mode,h=n.child,N=h.sibling;var H={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=H,i.deletions=null):(u=zi(h,H),u.subtreeFlags=h.subtreeFlags&14680064),N!==null?g=zi(N,g):(g=ho(g,w,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,w=n.child.memoizedState,w=w===null?Kc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=qc,u}return g=n.child,n=g.sibling,u=zi(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Zc(n,i){return i=Bl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Cl(n,i,a,u){return u!==null&&wc(u),Xo(i,n.child,null,a),n=Zc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function xx(n,i,a,u,h,g,w){if(a)return i.flags&256?(i.flags&=-257,u=Xc(Error(t(422))),Cl(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,h=i.mode,u=Bl({mode:"visible",children:u.children},h,0,null),g=ho(g,h,w,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Xo(i,n.child,null,w),i.child.memoizedState=Kc(w),i.memoizedState=qc,g);if((i.mode&1)===0)return Cl(n,i,w,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var N=u.dgst;return u=N,g=Error(t(419)),u=Xc(g,u,void 0),Cl(n,i,w,u)}if(N=(w&n.childLanes)!==0,Gn||N){if(u=hn,u!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|w))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,ti(n,h),Mr(u,n,h,-1))}return hd(),u=Xc(Error(t(421))),Cl(n,i,w,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Dx.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,Qn=bi(h.nextSibling),Jn=i,Wt=!0,xr=null,n!==null&&(ir[or++]=Qr,ir[or++]=ei,ir[or++]=ro,Qr=n.id,ei=n.overflow,ro=i),i=Zc(i,u.children),i.flags|=4096,i)}function Rm(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Ac(n.return,i,a)}function Jc(n,i,a,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=h)}function Am(n,i,a){var u=i.pendingProps,h=u.revealOrder,g=u.tail;if(Nn(n,i,u.children,a),u=Xt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Rm(n,a,i);else if(n.tag===19)Rm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(zt(Xt,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&xl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Jc(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&xl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Jc(i,!0,a,null,g);break;case"together":Jc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Rl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ri(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),lo|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=zi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=zi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function yx(n,i,a){switch(i.tag){case 3:wm(i),Wo();break;case 5:Vp(i);break;case 1:Vn(i.type)&&ul(i);break;case 4:Lc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;zt(ml,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(zt(Xt,Xt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Cm(n,i,a):(zt(Xt,Xt.current&1),n=ri(n,i,a),n!==null?n.sibling:null);zt(Xt,Xt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Am(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),zt(Xt,Xt.current),u)break;return null;case 22:case 23:return i.lanes=0,Sm(n,i,a)}return ri(n,i,a)}var bm,Qc,Pm,Lm;bm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Qc=function(){},Pm=function(n,i,a,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,so(Ur.current);var g=null;switch(a){case"input":h=U(n,h),u=U(n,u),g=[];break;case"select":h=le({},h,{value:void 0}),u=le({},u,{value:void 0}),g=[];break;case"textarea":h=Tt(n,h),u=Tt(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=sl)}nt(a,u);var w;a=null;for(ie in h)if(!u.hasOwnProperty(ie)&&h.hasOwnProperty(ie)&&h[ie]!=null)if(ie==="style"){var N=h[ie];for(w in N)N.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(s.hasOwnProperty(ie)?g||(g=[]):(g=g||[]).push(ie,null));for(ie in u){var H=u[ie];if(N=h?.[ie],u.hasOwnProperty(ie)&&H!==N&&(H!=null||N!=null))if(ie==="style")if(N){for(w in N)!N.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in H)H.hasOwnProperty(w)&&N[w]!==H[w]&&(a||(a={}),a[w]=H[w])}else a||(g||(g=[]),g.push(ie,a)),a=H;else ie==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,N=N?N.__html:void 0,H!=null&&N!==H&&(g=g||[]).push(ie,H)):ie==="children"?typeof H!="string"&&typeof H!="number"||(g=g||[]).push(ie,""+H):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(s.hasOwnProperty(ie)?(H!=null&&ie==="onScroll"&&Ht("scroll",n),g||N===H||(g=[])):(g=g||[]).push(ie,H))}a&&(g=g||[]).push("style",a);var ie=g;(i.updateQueue=ie)&&(i.flags|=4)}},Lm=function(n,i,a,u){a!==u&&(i.flags|=4)};function sa(n,i){if(!Wt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Cn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Sx(n,i,a){var u=i.pendingProps;switch(Sc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(i),null;case 1:return Vn(i.type)&&ll(),Cn(i),null;case 3:return u=i.stateNode,Yo(),Vt(Hn),Vt(wn),Uc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(hl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xr!==null&&(cd(xr),xr=null))),Qc(n,i),Cn(i),null;case 5:Dc(i);var h=so(ta.current);if(a=i.type,n!==null&&i.stateNode!=null)Pm(n,i,a,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Cn(i),null}if(n=so(Ur.current),hl(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[Nr]=i,u[Ks]=g,n=(i.mode&1)!==0,a){case"dialog":Ht("cancel",u),Ht("close",u);break;case"iframe":case"object":case"embed":Ht("load",u);break;case"video":case"audio":for(h=0;h<$s.length;h++)Ht($s[h],u);break;case"source":Ht("error",u);break;case"img":case"image":case"link":Ht("error",u),Ht("load",u);break;case"details":Ht("toggle",u);break;case"input":mt(u,g),Ht("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Ht("invalid",u);break;case"textarea":D(u,g),Ht("invalid",u)}nt(a,g),h=null;for(var w in g)if(g.hasOwnProperty(w)){var N=g[w];w==="children"?typeof N=="string"?u.textContent!==N&&(g.suppressHydrationWarning!==!0&&ol(u.textContent,N,n),h=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(g.suppressHydrationWarning!==!0&&ol(u.textContent,N,n),h=["children",""+N]):s.hasOwnProperty(w)&&N!=null&&w==="onScroll"&&Ht("scroll",u)}switch(a){case"input":be(u),Be(u,g,!0);break;case"textarea":be(u),Q(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=sl)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(a,{is:u.is}):(n=w.createElement(a),a==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,a),n[Nr]=i,n[Ks]=u,bm(n,i,!1,!1),i.stateNode=n;e:{switch(w=De(a,u),a){case"dialog":Ht("cancel",n),Ht("close",n),h=u;break;case"iframe":case"object":case"embed":Ht("load",n),h=u;break;case"video":case"audio":for(h=0;h<$s.length;h++)Ht($s[h],n);h=u;break;case"source":Ht("error",n),h=u;break;case"img":case"image":case"link":Ht("error",n),Ht("load",n),h=u;break;case"details":Ht("toggle",n),h=u;break;case"input":mt(n,u),h=U(n,u),Ht("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=le({},u,{value:void 0}),Ht("invalid",n);break;case"textarea":D(n,u),h=Tt(n,u),Ht("invalid",n);break;default:h=u}nt(a,h),N=h;for(g in N)if(N.hasOwnProperty(g)){var H=N[g];g==="style"?ze(n,H):g==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ke(n,H)):g==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&Le(n,H):typeof H=="number"&&Le(n,""+H):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(s.hasOwnProperty(g)?H!=null&&g==="onScroll"&&Ht("scroll",n):H!=null&&P(n,g,H,w))}switch(a){case"input":be(n),Be(n,u,!1);break;case"textarea":be(n),Q(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?He(n,!!u.multiple,g,!1):u.defaultValue!=null&&He(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=sl)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Cn(i),null;case 6:if(n&&i.stateNode!=null)Lm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=so(ta.current),so(Ur.current),hl(i)){if(u=i.stateNode,a=i.memoizedProps,u[Nr]=i,(g=u.nodeValue!==a)&&(n=Jn,n!==null))switch(n.tag){case 3:ol(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ol(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Nr]=i,i.stateNode=u}return Cn(i),null;case 13:if(Vt(Xt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&Qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Up(),Wo(),i.flags|=98560,g=!1;else if(g=hl(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Nr]=i}else Wo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Cn(i),g=!1}else xr!==null&&(cd(xr),xr=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Xt.current&1)!==0?sn===0&&(sn=3):hd())),i.updateQueue!==null&&(i.flags|=4),Cn(i),null);case 4:return Yo(),Qc(n,i),n===null&&Ys(i.stateNode.containerInfo),Cn(i),null;case 10:return Rc(i.type._context),Cn(i),null;case 17:return Vn(i.type)&&ll(),Cn(i),null;case 19:if(Vt(Xt),g=i.memoizedState,g===null)return Cn(i),null;if(u=(i.flags&128)!==0,w=g.rendering,w===null)if(u)sa(g,!1);else{if(sn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=xl(n),w!==null){for(i.flags|=128,sa(g,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return zt(Xt,Xt.current&1|2),i.child}n=n.sibling}g.tail!==null&&K()>Jo&&(i.flags|=128,u=!0,sa(g,!1),i.lanes=4194304)}else{if(!u)if(n=xl(w),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),sa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Wt)return Cn(i),null}else 2*K()-g.renderingStartTime>Jo&&a!==1073741824&&(i.flags|=128,u=!0,sa(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=K(),i.sibling=null,a=Xt.current,zt(Xt,u?a&1|2:a&1),i):(Cn(i),null);case 22:case 23:return fd(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(er&1073741824)!==0&&(Cn(i),i.subtreeFlags&6&&(i.flags|=8192)):Cn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Ex(n,i){switch(Sc(i),i.tag){case 1:return Vn(i.type)&&ll(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Yo(),Vt(Hn),Vt(wn),Uc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Dc(i),null;case 13:if(Vt(Xt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Wo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Vt(Xt),null;case 4:return Yo(),null;case 10:return Rc(i.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var Al=!1,Rn=!1,Mx=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Ko(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Zt(n,i,u)}else a.current=null}function ed(n,i,a){try{a()}catch(u){Zt(n,i,u)}}var Dm=!1;function wx(n,i){if(fc=Ya,n=cp(),ic(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,N=-1,H=-1,ie=0,Me=0,Te=n,ye=null;t:for(;;){for(var Ve;Te!==a||h!==0&&Te.nodeType!==3||(N=w+h),Te!==g||u!==0&&Te.nodeType!==3||(H=w+u),Te.nodeType===3&&(w+=Te.nodeValue.length),(Ve=Te.firstChild)!==null;)ye=Te,Te=Ve;for(;;){if(Te===n)break t;if(ye===a&&++ie===h&&(N=w),ye===g&&++Me===u&&(H=w),(Ve=Te.nextSibling)!==null)break;Te=ye,ye=Te.parentNode}Te=Ve}a=N===-1||H===-1?null:{start:N,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(hc={focusedElem:n,selectionRange:a},Ya=!1,$e=i;$e!==null;)if(i=$e,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,$e=n;else for(;$e!==null;){i=$e;try{var qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Qe=qe.memoizedProps,en=qe.memoizedState,q=i.stateNode,j=q.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:yr(i.type,Qe),en);q.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){Zt(i,i.return,Pe)}if(n=i.sibling,n!==null){n.return=i.return,$e=n;break}$e=i.return}return qe=Dm,Dm=!1,qe}function aa(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&ed(i,a,g)}h=h.next}while(h!==u)}}function bl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function td(n){var i=n.ref;if(i!==null){var a=n.stateNode;n.tag,n=a,typeof i=="function"?i(n):i.current=n}}function Nm(n){var i=n.alternate;i!==null&&(n.alternate=null,Nm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Nr],delete i[Ks],delete i[vc],delete i[sx],delete i[ax])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Um(n){return n.tag===5||n.tag===3||n.tag===4}function Im(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function nd(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=sl));else if(u!==4&&(n=n.child,n!==null))for(nd(n,i,a),n=n.sibling;n!==null;)nd(n,i,a),n=n.sibling}function rd(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(rd(n,i,a),n=n.sibling;n!==null;)rd(n,i,a),n=n.sibling}var _n=null,Sr=!1;function Ii(n,i,a){for(a=a.child;a!==null;)Fm(n,i,a),a=a.sibling}function Fm(n,i,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 5:Rn||Ko(a,i);case 6:var u=_n,h=Sr;_n=null,Ii(n,i,a),_n=u,Sr=h,_n!==null&&(Sr?(n=_n,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):_n.removeChild(a.stateNode));break;case 18:_n!==null&&(Sr?(n=_n,a=a.stateNode,n.nodeType===8?gc(n.parentNode,a):n.nodeType===1&&gc(n,a),Bs(n)):gc(_n,a.stateNode));break;case 4:u=_n,h=Sr,_n=a.stateNode.containerInfo,Sr=!0,Ii(n,i,a),_n=u,Sr=h;break;case 0:case 11:case 14:case 15:if(!Rn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&ed(a,i,w),h=h.next}while(h!==u)}Ii(n,i,a);break;case 1:if(!Rn&&(Ko(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(N){Zt(a,i,N)}Ii(n,i,a);break;case 21:Ii(n,i,a);break;case 22:a.mode&1?(Rn=(u=Rn)||a.memoizedState!==null,Ii(n,i,a),Rn=u):Ii(n,i,a);break;default:Ii(n,i,a)}}function km(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Mx),i.forEach(function(u){var h=Nx.bind(null,n,u);a.has(u)||(a.add(u),u.then(h,h))})}}function Er(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var g=n,w=i,N=w;e:for(;N!==null;){switch(N.tag){case 5:_n=N.stateNode,Sr=!1;break e;case 3:_n=N.stateNode.containerInfo,Sr=!0;break e;case 4:_n=N.stateNode.containerInfo,Sr=!0;break e}N=N.return}if(_n===null)throw Error(t(160));Fm(g,w,h),_n=null,Sr=!1;var H=h.alternate;H!==null&&(H.return=null),h.return=null}catch(ie){Zt(h,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Om(i,n),i=i.sibling}function Om(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Er(i,n),Fr(n),u&4){try{aa(3,n,n.return),bl(3,n)}catch(Qe){Zt(n,n.return,Qe)}try{aa(5,n,n.return)}catch(Qe){Zt(n,n.return,Qe)}}break;case 1:Er(i,n),Fr(n),u&512&&a!==null&&Ko(a,a.return);break;case 5:if(Er(i,n),Fr(n),u&512&&a!==null&&Ko(a,a.return),n.flags&32){var h=n.stateNode;try{Le(h,"")}catch(Qe){Zt(n,n.return,Qe)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,N=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{N==="input"&&g.type==="radio"&&g.name!=null&&pt(h,g),De(N,w);var ie=De(N,g);for(w=0;w<H.length;w+=2){var Me=H[w],Te=H[w+1];Me==="style"?ze(h,Te):Me==="dangerouslySetInnerHTML"?Ke(h,Te):Me==="children"?Le(h,Te):P(h,Me,Te,ie)}switch(N){case"input":Mt(h,g);break;case"textarea":T(h,g);break;case"select":var ye=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Ve=g.value;Ve!=null?He(h,!!g.multiple,Ve,!1):ye!==!!g.multiple&&(g.defaultValue!=null?He(h,!!g.multiple,g.defaultValue,!0):He(h,!!g.multiple,g.multiple?[]:"",!1))}h[Ks]=g}catch(Qe){Zt(n,n.return,Qe)}}break;case 6:if(Er(i,n),Fr(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Qe){Zt(n,n.return,Qe)}}break;case 3:if(Er(i,n),Fr(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Bs(i.containerInfo)}catch(Qe){Zt(n,n.return,Qe)}break;case 4:Er(i,n),Fr(n);break;case 13:Er(i,n),Fr(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(sd=K())),u&4&&km(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(Rn=(ie=Rn)||Me,Er(i,n),Rn=ie):Er(i,n),Fr(n),u&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!Me&&(n.mode&1)!==0)for($e=n,Me=n.child;Me!==null;){for(Te=$e=Me;$e!==null;){switch(ye=$e,Ve=ye.child,ye.tag){case 0:case 11:case 14:case 15:aa(4,ye,ye.return);break;case 1:Ko(ye,ye.return);var qe=ye.stateNode;if(typeof qe.componentWillUnmount=="function"){u=ye,a=ye.return;try{i=u,qe.props=i.memoizedProps,qe.state=i.memoizedState,qe.componentWillUnmount()}catch(Qe){Zt(u,a,Qe)}}break;case 5:Ko(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Hm(Te);continue}}Ve!==null?(Ve.return=ye,$e=Ve):Hm(Te)}Me=Me.sibling}e:for(Me=null,Te=n;;){if(Te.tag===5){if(Me===null){Me=Te;try{h=Te.stateNode,ie?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(N=Te.stateNode,H=Te.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,N.style.display=_e("display",w))}catch(Qe){Zt(n,n.return,Qe)}}}else if(Te.tag===6){if(Me===null)try{Te.stateNode.nodeValue=ie?"":Te.memoizedProps}catch(Qe){Zt(n,n.return,Qe)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;Me===Te&&(Me=null),Te=Te.return}Me===Te&&(Me=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Er(i,n),Fr(n),u&4&&km(n);break;case 21:break;default:Er(i,n),Fr(n)}}function Fr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Um(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Le(h,""),u.flags&=-33);var g=Im(n);rd(n,g,h);break;case 3:case 4:var w=u.stateNode.containerInfo,N=Im(n);nd(n,N,w);break;default:throw Error(t(161))}}catch(H){Zt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Tx(n,i,a){$e=n,Bm(n)}function Bm(n,i,a){for(var u=(n.mode&1)!==0;$e!==null;){var h=$e,g=h.child;if(h.tag===22&&u){var w=h.memoizedState!==null||Al;if(!w){var N=h.alternate,H=N!==null&&N.memoizedState!==null||Rn;N=Al;var ie=Rn;if(Al=w,(Rn=H)&&!ie)for($e=h;$e!==null;)w=$e,H=w.child,w.tag===22&&w.memoizedState!==null?Vm(h):H!==null?(H.return=w,$e=H):Vm(h);for(;g!==null;)$e=g,Bm(g),g=g.sibling;$e=h,Al=N,Rn=ie}zm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,$e=g):zm(n)}}function zm(n){for(;$e!==null;){var i=$e;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Rn||bl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Rn)if(a===null)u.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:yr(i.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Hp(i,g,u);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Hp(i,w,a)}break;case 5:var N=i.stateNode;if(a===null&&i.flags&4){a=N;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var Me=ie.memoizedState;if(Me!==null){var Te=Me.dehydrated;Te!==null&&Bs(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Rn||i.flags&512&&td(i)}catch(ye){Zt(i,i.return,ye)}}if(i===n){$e=null;break}if(a=i.sibling,a!==null){a.return=i.return,$e=a;break}$e=i.return}}function Hm(n){for(;$e!==null;){var i=$e;if(i===n){$e=null;break}var a=i.sibling;if(a!==null){a.return=i.return,$e=a;break}$e=i.return}}function Vm(n){for(;$e!==null;){var i=$e;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{bl(4,i)}catch(H){Zt(i,a,H)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(H){Zt(i,h,H)}}var g=i.return;try{td(i)}catch(H){Zt(i,g,H)}break;case 5:var w=i.return;try{td(i)}catch(H){Zt(i,w,H)}}}catch(H){Zt(i,i.return,H)}if(i===n){$e=null;break}var N=i.sibling;if(N!==null){N.return=i.return,$e=N;break}$e=i.return}}var Cx=Math.ceil,Pl=A.ReactCurrentDispatcher,id=A.ReactCurrentOwner,lr=A.ReactCurrentBatchConfig,At=0,hn=null,tn=null,xn=0,er=0,Zo=Pi(0),sn=0,la=null,lo=0,Ll=0,od=0,ua=null,Wn=null,sd=0,Jo=1/0,ii=null,Dl=!1,ad=null,Fi=null,Nl=!1,ki=null,Ul=0,ca=0,ld=null,Il=-1,Fl=0;function Un(){return(At&6)!==0?K():Il!==-1?Il:Il=K()}function Oi(n){return(n.mode&1)===0?1:(At&2)!==0&&xn!==0?xn&-xn:ux.transition!==null?(Fl===0&&(Fl=Bt()),Fl):(n=Rt,n!==0||(n=window.event,n=n===void 0?16:Wh(n.type)),n)}function Mr(n,i,a,u){if(50<ca)throw ca=0,ld=null,Error(t(185));cn(n,a,u),((At&2)===0||n!==hn)&&(n===hn&&((At&2)===0&&(Ll|=a),sn===4&&Bi(n,xn)),Xn(n,u),a===1&&At===0&&(i.mode&1)===0&&(Jo=K()+500,cl&&Di()))}function Xn(n,i){var a=n.callbackNode;Dn(n,i);var u=un(n,n===hn?xn:0);if(u===0)a!==null&&R(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&R(a),i===1)n.tag===0?lx(Wm.bind(null,n)):bp(Wm.bind(null,n)),ix(function(){(At&6)===0&&Di()}),a=null;else{switch(Dr(u)){case 1:a=Re;break;case 4:a=Fe;break;case 16:a=je;break;case 536870912:a=dt;break;default:a=je}a=Jm(a,Gm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Gm(n,i){if(Il=-1,Fl=0,(At&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Qo()&&n.callbackNode!==a)return null;var u=un(n,n===hn?xn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=kl(n,u);else{i=u;var h=At;At|=2;var g=jm();(hn!==n||xn!==i)&&(ii=null,Jo=K()+500,co(n,i));do try{bx();break}catch(N){Xm(n,N)}while(!0);Cc(),Pl.current=g,At=h,tn!==null?i=0:(hn=null,xn=0,i=sn)}if(i!==0){if(i===2&&(h=Kr(n),h!==0&&(u=h,i=ud(n,h))),i===1)throw a=la,co(n,0),Bi(n,u),Xn(n,K()),a;if(i===6)Bi(n,u);else{if(h=n.current.alternate,(u&30)===0&&!Rx(h)&&(i=kl(n,u),i===2&&(g=Kr(n),g!==0&&(u=g,i=ud(n,g))),i===1))throw a=la,co(n,0),Bi(n,u),Xn(n,K()),a;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:fo(n,Wn,ii);break;case 3:if(Bi(n,u),(u&130023424)===u&&(i=sd+500-K(),10<i)){if(un(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Un(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=mc(fo.bind(null,n,Wn,ii),i);break}fo(n,Wn,ii);break;case 4:if(Bi(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var w=31-vt(u);g=1<<w,w=i[w],w>h&&(h=w),u&=~g}if(u=h,u=K()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Cx(u/1960))-u,10<u){n.timeoutHandle=mc(fo.bind(null,n,Wn,ii),u);break}fo(n,Wn,ii);break;case 5:fo(n,Wn,ii);break;default:throw Error(t(329))}}}return Xn(n,K()),n.callbackNode===a?Gm.bind(null,n):null}function ud(n,i){var a=ua;return n.current.memoizedState.isDehydrated&&(co(n,i).flags|=256),n=kl(n,i),n!==2&&(i=Wn,Wn=a,i!==null&&cd(i)),n}function cd(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function Rx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],g=h.getSnapshot;h=h.value;try{if(!_r(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Bi(n,i){for(i&=~od,i&=~Ll,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-vt(i),u=1<<a;n[a]=-1,i&=~u}}function Wm(n){if((At&6)!==0)throw Error(t(327));Qo();var i=un(n,0);if((i&1)===0)return Xn(n,K()),null;var a=kl(n,i);if(n.tag!==0&&a===2){var u=Kr(n);u!==0&&(i=u,a=ud(n,u))}if(a===1)throw a=la,co(n,0),Bi(n,i),Xn(n,K()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,fo(n,Wn,ii),Xn(n,K()),null}function dd(n,i){var a=At;At|=1;try{return n(i)}finally{At=a,At===0&&(Jo=K()+500,cl&&Di())}}function uo(n){ki!==null&&ki.tag===0&&(At&6)===0&&Qo();var i=At;At|=1;var a=lr.transition,u=Rt;try{if(lr.transition=null,Rt=1,n)return n()}finally{Rt=u,lr.transition=a,At=i,(At&6)===0&&Di()}}function fd(){er=Zo.current,Vt(Zo)}function co(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,rx(a)),tn!==null)for(a=tn.return;a!==null;){var u=a;switch(Sc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ll();break;case 3:Yo(),Vt(Hn),Vt(wn),Uc();break;case 5:Dc(u);break;case 4:Yo();break;case 13:Vt(Xt);break;case 19:Vt(Xt);break;case 10:Rc(u.type._context);break;case 22:case 23:fd()}a=a.return}if(hn=n,tn=n=zi(n.current,null),xn=er=i,sn=0,la=null,od=Ll=lo=0,Wn=ua=null,oo!==null){for(i=0;i<oo.length;i++)if(a=oo[i],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,g=a.pending;if(g!==null){var w=g.next;g.next=h,u.next=w}a.pending=u}oo=null}return n}function Xm(n,i){do{var a=tn;try{if(Cc(),yl.current=wl,Sl){for(var u=jt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}Sl=!1}if(ao=0,fn=on=jt=null,na=!1,ra=0,id.current=null,a===null||a.return===null){sn=1,la=i,tn=null;break}e:{var g=n,w=a.return,N=a,H=i;if(i=xn,N.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ie=H,Me=N,Te=Me.tag;if((Me.mode&1)===0&&(Te===0||Te===11||Te===15)){var ye=Me.alternate;ye?(Me.updateQueue=ye.updateQueue,Me.memoizedState=ye.memoizedState,Me.lanes=ye.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Ve=gm(w);if(Ve!==null){Ve.flags&=-257,vm(Ve,w,N,g,i),Ve.mode&1&&mm(g,ie,i),i=Ve,H=ie;var qe=i.updateQueue;if(qe===null){var Qe=new Set;Qe.add(H),i.updateQueue=Qe}else qe.add(H);break e}else{if((i&1)===0){mm(g,ie,i),hd();break e}H=Error(t(426))}}else if(Wt&&N.mode&1){var en=gm(w);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),vm(en,w,N,g,i),wc(qo(H,N));break e}}g=H=qo(H,N),sn!==4&&(sn=2),ua===null?ua=[g]:ua.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var q=hm(g,H,i);zp(g,q);break e;case 1:N=H;var j=g.type,te=g.stateNode;if((g.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Fi===null||!Fi.has(te)))){g.flags|=65536,i&=-i,g.lanes|=i;var Pe=pm(g,N,i);zp(g,Pe);break e}}g=g.return}while(g!==null)}Ym(a)}catch(tt){i=tt,tn===a&&a!==null&&(tn=a=a.return);continue}break}while(!0)}function jm(){var n=Pl.current;return Pl.current=wl,n===null?wl:n}function hd(){(sn===0||sn===3||sn===2)&&(sn=4),hn===null||(lo&268435455)===0&&(Ll&268435455)===0||Bi(hn,xn)}function kl(n,i){var a=At;At|=2;var u=jm();(hn!==n||xn!==i)&&(ii=null,co(n,i));do try{Ax();break}catch(h){Xm(n,h)}while(!0);if(Cc(),At=a,Pl.current=u,tn!==null)throw Error(t(261));return hn=null,xn=0,sn}function Ax(){for(;tn!==null;)$m(tn)}function bx(){for(;tn!==null&&!$();)$m(tn)}function $m(n){var i=Zm(n.alternate,n,er);n.memoizedProps=n.pendingProps,i===null?Ym(n):tn=i,id.current=null}function Ym(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Sx(a,i,er),a!==null){tn=a;return}}else{if(a=Ex(a,i),a!==null){a.flags&=32767,tn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,tn=null;return}}if(i=i.sibling,i!==null){tn=i;return}tn=i=n}while(i!==null);sn===0&&(sn=5)}function fo(n,i,a){var u=Rt,h=lr.transition;try{lr.transition=null,Rt=1,Px(n,i,a,u)}finally{lr.transition=h,Rt=u}return null}function Px(n,i,a,u){do Qo();while(ki!==null);if((At&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(vn(n,g),n===hn&&(tn=hn=null,xn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Nl||(Nl=!0,Jm(je,function(){return Qo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=lr.transition,lr.transition=null;var w=Rt;Rt=1;var N=At;At|=4,id.current=null,wx(n,a),Om(a,n),K0(hc),Ya=!!fc,hc=fc=null,n.current=a,Tx(a),se(),At=N,Rt=w,lr.transition=g}else n.current=a;if(Nl&&(Nl=!1,ki=n,Ul=h),g=n.pendingLanes,g===0&&(Fi=null),xt(a.stateNode),Xn(n,K()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(Dl)throw Dl=!1,n=ad,ad=null,n;return(Ul&1)!==0&&n.tag!==0&&Qo(),g=n.pendingLanes,(g&1)!==0?n===ld?ca++:(ca=0,ld=n):ca=0,Di(),null}function Qo(){if(ki!==null){var n=Dr(Ul),i=lr.transition,a=Rt;try{if(lr.transition=null,Rt=16>n?16:n,ki===null)var u=!1;else{if(n=ki,ki=null,Ul=0,(At&6)!==0)throw Error(t(331));var h=At;for(At|=4,$e=n.current;$e!==null;){var g=$e,w=g.child;if(($e.flags&16)!==0){var N=g.deletions;if(N!==null){for(var H=0;H<N.length;H++){var ie=N[H];for($e=ie;$e!==null;){var Me=$e;switch(Me.tag){case 0:case 11:case 15:aa(8,Me,g)}var Te=Me.child;if(Te!==null)Te.return=Me,$e=Te;else for(;$e!==null;){Me=$e;var ye=Me.sibling,Ve=Me.return;if(Nm(Me),Me===ie){$e=null;break}if(ye!==null){ye.return=Ve,$e=ye;break}$e=Ve}}}var qe=g.alternate;if(qe!==null){var Qe=qe.child;if(Qe!==null){qe.child=null;do{var en=Qe.sibling;Qe.sibling=null,Qe=en}while(Qe!==null)}}$e=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,$e=w;else e:for(;$e!==null;){if(g=$e,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:aa(9,g,g.return)}var q=g.sibling;if(q!==null){q.return=g.return,$e=q;break e}$e=g.return}}var j=n.current;for($e=j;$e!==null;){w=$e;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,$e=te;else e:for(w=j;$e!==null;){if(N=$e,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:bl(9,N)}}catch(tt){Zt(N,N.return,tt)}if(N===w){$e=null;break e}var Pe=N.sibling;if(Pe!==null){Pe.return=N.return,$e=Pe;break e}$e=N.return}}if(At=h,Di(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(ut,n)}catch{}u=!0}return u}finally{Rt=a,lr.transition=i}}return!1}function qm(n,i,a){i=qo(a,i),i=hm(n,i,1),n=Ui(n,i,1),i=Un(),n!==null&&(cn(n,1,i),Xn(n,i))}function Zt(n,i,a){if(n.tag===3)qm(n,n,a);else for(;i!==null;){if(i.tag===3){qm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Fi===null||!Fi.has(u))){n=qo(a,n),n=pm(i,n,1),i=Ui(i,n,1),n=Un(),i!==null&&(cn(i,1,n),Xn(i,n));break}}i=i.return}}function Lx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Un(),n.pingedLanes|=n.suspendedLanes&a,hn===n&&(xn&a)===a&&(sn===4||sn===3&&(xn&130023424)===xn&&500>K()-sd?co(n,0):od|=a),Xn(n,i)}function Km(n,i){i===0&&((n.mode&1)===0?i=1:(i=It,It<<=1,(It&130023424)===0&&(It=4194304)));var a=Un();n=ti(n,i),n!==null&&(cn(n,i,a),Xn(n,a))}function Dx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Km(n,a)}function Nx(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Km(n,a)}var Zm;Zm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Hn.current)Gn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Gn=!1,yx(n,i,a);Gn=(n.flags&131072)!==0}else Gn=!1,Wt&&(i.flags&1048576)!==0&&Pp(i,fl,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Rl(n,i),n=i.pendingProps;var h=Ho(i,wn.current);$o(i,a),h=kc(null,i,u,n,h,a);var g=Oc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Vn(u)?(g=!0,ul(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Pc(i),h.updater=Tl,i.stateNode=h,h._reactInternals=i,Wc(i,u,n,a),i=Yc(null,i,u,!0,g,a)):(i.tag=0,Wt&&g&&yc(i),Nn(null,i,h,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Rl(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=Ix(u),n=yr(u,n),h){case 0:i=$c(null,i,u,n,a);break e;case 1:i=Mm(null,i,u,n,a);break e;case 11:i=_m(null,i,u,n,a);break e;case 14:i=xm(null,i,u,yr(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:yr(u,h),$c(n,i,u,h,a);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:yr(u,h),Mm(n,i,u,h,a);case 3:e:{if(wm(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,h=g.element,Bp(n,i),_l(i,u,null,a);var w=i.memoizedState;if(u=w.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=qo(Error(t(423)),i),i=Tm(n,i,u,a,h);break e}else if(u!==h){h=qo(Error(t(424)),i),i=Tm(n,i,u,a,h);break e}else for(Qn=bi(i.stateNode.containerInfo.firstChild),Jn=i,Wt=!0,xr=null,a=kp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Wo(),u===h){i=ri(n,i,a);break e}Nn(n,i,u,a)}i=i.child}return i;case 5:return Vp(i),n===null&&Mc(i),u=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,w=h.children,pc(u,h)?w=null:g!==null&&pc(u,g)&&(i.flags|=32),Em(n,i),Nn(n,i,w,a),i.child;case 6:return n===null&&Mc(i),null;case 13:return Cm(n,i,a);case 4:return Lc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Xo(i,null,u,a):Nn(n,i,u,a),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:yr(u,h),_m(n,i,u,h,a);case 7:return Nn(n,i,i.pendingProps,a),i.child;case 8:return Nn(n,i,i.pendingProps.children,a),i.child;case 12:return Nn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,g=i.memoizedProps,w=h.value,zt(ml,u._currentValue),u._currentValue=w,g!==null)if(_r(g.value,w)){if(g.children===h.children&&!Hn.current){i=ri(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var N=g.dependencies;if(N!==null){w=g.child;for(var H=N.firstContext;H!==null;){if(H.context===u){if(g.tag===1){H=ni(-1,a&-a),H.tag=2;var ie=g.updateQueue;if(ie!==null){ie=ie.shared;var Me=ie.pending;Me===null?H.next=H:(H.next=Me.next,Me.next=H),ie.pending=H}}g.lanes|=a,H=g.alternate,H!==null&&(H.lanes|=a),Ac(g.return,a,i),N.lanes|=a;break}H=H.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,N=w.alternate,N!==null&&(N.lanes|=a),Ac(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Nn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,$o(i,a),h=sr(h),u=u(h),i.flags|=1,Nn(n,i,u,a),i.child;case 14:return u=i.type,h=yr(u,i.pendingProps),h=yr(u.type,h),xm(n,i,u,h,a);case 15:return ym(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:yr(u,h),Rl(n,i),i.tag=1,Vn(u)?(n=!0,ul(i)):n=!1,$o(i,a),dm(i,u,h),Wc(i,u,h,a),Yc(null,i,u,!0,n,a);case 19:return Am(n,i,a);case 22:return Sm(n,i,a)}throw Error(t(156,i.tag))};function Jm(n,i){return En(n,i)}function Ux(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ur(n,i,a,u){return new Ux(n,i,a,u)}function pd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ix(n){if(typeof n=="function")return pd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===fe)return 14}return 2}function zi(n,i){var a=n.alternate;return a===null?(a=ur(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ol(n,i,a,u,h,g){var w=2;if(u=n,typeof n=="function")pd(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case k:return ho(a.children,h,g,i);case X:w=8,h|=8;break;case b:return n=ur(12,a,i,h|2),n.elementType=b,n.lanes=g,n;case J:return n=ur(13,a,i,h),n.elementType=J,n.lanes=g,n;case ee:return n=ur(19,a,i,h),n.elementType=ee,n.lanes=g,n;case he:return Bl(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:w=10;break e;case V:w=9;break e;case ae:w=11;break e;case fe:w=14;break e;case ue:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ur(w,a,i,h),i.elementType=n,i.type=u,i.lanes=g,i}function ho(n,i,a,u){return n=ur(7,n,u,i),n.lanes=a,n}function Bl(n,i,a,u){return n=ur(22,n,u,i),n.elementType=he,n.lanes=a,n.stateNode={isHidden:!1},n}function md(n,i,a){return n=ur(6,n,null,i),n.lanes=a,n}function gd(n,i,a){return i=ur(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Fx(n,i,a,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mn(0),this.expirationTimes=Mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function vd(n,i,a,u,h,g,w,N,H){return n=new Fx(n,i,a,N,H),i===1?(i=1,g===!0&&(i|=8)):i=0,g=ur(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pc(g),n}function kx(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Qm(n){if(!n)return Li;n=n._reactInternals;e:{if(Et(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Vn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Vn(a))return Rp(n,a,i)}return i}function eg(n,i,a,u,h,g,w,N,H){return n=vd(a,u,!0,n,h,g,w,N,H),n.context=Qm(null),a=n.current,u=Un(),h=Oi(a),g=ni(u,h),g.callback=i??null,Ui(a,g,h),n.current.lanes=h,cn(n,h,u),Xn(n,u),n}function zl(n,i,a,u){var h=i.current,g=Un(),w=Oi(h);return a=Qm(a),i.context===null?i.context=a:i.pendingContext=a,i=ni(g,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Ui(h,i,w),n!==null&&(Mr(n,h,w,g),vl(n,h,w)),w}function Hl(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function tg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function _d(n,i){tg(n,i),(n=n.alternate)&&tg(n,i)}function Ox(){return null}var ng=typeof reportError=="function"?reportError:function(n){console.error(n)};function xd(n){this._internalRoot=n}Vl.prototype.render=xd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));zl(n,i,null,null)},Vl.prototype.unmount=xd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;uo(function(){zl(null,n,null,null)}),i[Zr]=null}};function Vl(n){this._internalRoot=n}Vl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Bh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Ci.length&&i!==0&&i<Ci[a].priority;a++);Ci.splice(a,0,n),a===0&&Vh(n)}};function yd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function rg(){}function Bx(n,i,a,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var ie=Hl(w);g.call(ie)}}var w=eg(i,u,n,0,null,!1,!1,"",rg);return n._reactRootContainer=w,n[Zr]=w.current,Ys(n.nodeType===8?n.parentNode:n),uo(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var N=u;u=function(){var ie=Hl(H);N.call(ie)}}var H=vd(n,0,!1,null,null,!1,!1,"",rg);return n._reactRootContainer=H,n[Zr]=H.current,Ys(n.nodeType===8?n.parentNode:n),uo(function(){zl(i,H,a,u)}),H}function Wl(n,i,a,u,h){var g=a._reactRootContainer;if(g){var w=g;if(typeof h=="function"){var N=h;h=function(){var H=Hl(w);N.call(H)}}zl(i,w,n,h)}else w=Bx(a,i,n,h,u);return Hl(w)}kh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=yt(i.pendingLanes);a!==0&&(dn(i,a|1),Xn(i,K()),(At&6)===0&&(Jo=K()+500,Di()))}break;case 13:uo(function(){var u=ti(n,1);if(u!==null){var h=Un();Mr(u,n,1,h)}}),_d(n,1)}},Xu=function(n){if(n.tag===13){var i=ti(n,134217728);if(i!==null){var a=Un();Mr(i,n,134217728,a)}_d(n,134217728)}},Oh=function(n){if(n.tag===13){var i=Oi(n),a=ti(n,i);if(a!==null){var u=Un();Mr(a,n,i,u)}_d(n,i)}},Bh=function(){return Rt},zh=function(n,i){var a=Rt;try{return Rt=n,i()}finally{Rt=a}},Ne=function(n,i,a){switch(i){case"input":if(Mt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var h=al(u);if(!h)throw Error(t(90));ot(u),Mt(u,h)}}}break;case"textarea":T(n,a);break;case"select":i=a.value,i!=null&&He(n,!!a.multiple,i,!1)}},ct=dd,Lt=uo;var zx={usingClientEntryPoint:!1,Events:[Zs,Bo,al,ge,Ie,dd]},da={findFiberByHostInstance:to,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hx={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Sn(n),n===null?null:n.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||Ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{ut=Xl.inject(Hx),Ye=Xl}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zx,jn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yd(i))throw Error(t(200));return kx(n,i,null,a)},jn.createRoot=function(n,i){if(!yd(n))throw Error(t(299));var a=!1,u="",h=ng;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=vd(n,1,!1,null,null,a,!1,u,h),n[Zr]=i.current,Ys(n.nodeType===8?n.parentNode:n),new xd(i)},jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Sn(i),n=n===null?null:n.stateNode,n},jn.flushSync=function(n){return uo(n)},jn.hydrate=function(n,i,a){if(!Gl(i))throw Error(t(200));return Wl(null,n,i,!0,a)},jn.hydrateRoot=function(n,i,a){if(!yd(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,h=!1,g="",w=ng;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=eg(i,null,n,1,a??null,h,!1,g,w),n[Zr]=i.current,Ys(n),u)for(n=0;n<u.length;n++)a=u[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Vl(i)},jn.render=function(n,i,a){if(!Gl(i))throw Error(t(200));return Wl(null,n,i,!1,a)},jn.unmountComponentAtNode=function(n){if(!Gl(n))throw Error(t(40));return n._reactRootContainer?(uo(function(){Wl(null,null,n,!1,function(){n._reactRootContainer=null,n[Zr]=null})}),!0):!1},jn.unstable_batchedUpdates=dd,jn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Gl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Wl(n,i,a,!1,u)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var dg;function qx(){if(dg)return Md.exports;dg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Md.exports=Yx(),Md.exports}var fg;function Kx(){if(fg)return jl;fg=1;var r=qx();return jl.createRoot=r.createRoot,jl.hydrateRoot=r.hydrateRoot,jl}var Zx=Kx();const Jx=Xv(Zx);var sh=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,$v=/^[\\/]{2}/;function Qx(r,e){return e+r.replace(/\\/g,"/")}var hg="popstate";function pg(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function ey(r={}){function e(o,s){let l=s.state?.masked,{pathname:c,search:d,hash:f}=l||o.location;return pf("",{pathname:c,search:d,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default",l?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function t(o,s){return typeof s=="string"?s:Aa(s)}return ny(e,t,null,r)}function Yt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function $r(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ty(){return Math.random().toString(36).substring(2,10)}function mg(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function pf(r,e,t=null,o,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?As(e):e,state:t,key:e&&e.key||o||ty(),mask:s}}function Aa({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function As(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let o=r.indexOf("?");o>=0&&(e.search=r.substring(o),r=r.substring(0,o)),r&&(e.pathname=r)}return e}function ny(r,e,t,o={}){let{window:s=document.defaultView,v5Compat:l=!1}=o,c=s.history,d="POP",f=null,p=m();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function m(){return(c.state||{idx:null}).idx}function v(){d="POP";let x=m(),_=x==null?null:x-p;p=x,f&&f({action:d,location:M.location,delta:_})}function y(x,_){d="PUSH";let L=pg(x)?x:pf(M.location,x,_);p=m()+1;let P=mg(L,p),A=M.createHref(L.mask||L);try{c.pushState(P,"",A)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;s.location.assign(A)}l&&f&&f({action:d,location:M.location,delta:1})}function S(x,_){d="REPLACE";let L=pg(x)?x:pf(M.location,x,_);p=m();let P=mg(L,p),A=M.createHref(L.mask||L);c.replaceState(P,"",A),l&&f&&f({action:d,location:M.location,delta:0})}function E(x){return ry(s,x)}let M={get action(){return d},get location(){return r(s,c)},listen(x){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(hg,v),f=x,()=>{s.removeEventListener(hg,v),f=null}},createHref(x){return e(s,x)},createURL:E,encodeLocation(x){let _=E(x);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:S,go(x){return c.go(x)}};return M}function ry(r,e,t=!1){let o="http://localhost";r&&(o=r.location.origin!=="null"?r.location.origin:r.location.href),Yt(o,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Aa(e);return s=s.replace(/ $/,"%20"),!t&&$v.test(s)&&(s=o+s),new URL(s,o)}function Yv(r,e,t="/"){return iy(r,e,t,!1)}function iy(r,e,t,o,s){let l=typeof e=="string"?As(e):e,c=_i(l.pathname||"/",t);if(c==null)return null;let d=oy(r),f=null,p=gy(c);for(let m=0;f==null&&m<d.length;++m)f=my(d[m],p,o);return f}function oy(r){let e=qv(r);return sy(e),e}function qv(r,e=[],t=[],o="",s=!1){let l=(c,d,f=s,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(o)&&f)return;Yt(m.relativePath.startsWith(o),`Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(o.length)}let v=br([o,m.relativePath]),y=t.concat(m);c.children&&c.children.length>0&&(Yt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),qv(c.children,e,y,v,f)),!(c.path==null&&!c.index)&&e.push({path:v,score:hy(v,c.index),routesMeta:y.map((S,E)=>{let[M,x]=Jv(S.relativePath,S.caseSensitive,E===y.length-1);return{...S,matcher:M,compiledParams:x}})})};return r.forEach((c,d)=>{if(c.path===""||!c.path?.includes("?"))l(c,d);else for(let f of Kv(c.path))l(c,d,!0,f)}),e}function Kv(r){let e=r.split("/");if(e.length===0)return[];let[t,...o]=e,s=t.endsWith("?"),l=t.replace(/\?$/,"");if(o.length===0)return s?[l,""]:[l];let c=Kv(o.join("/")),d=[];return d.push(...c.map(f=>f===""?l:[l,f].join("/"))),s&&d.push(...c),d.map(f=>r.startsWith("/")&&f===""?"/":f)}function sy(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:py(e.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}var ay=/^:[\w-]+$/,ly=3,uy=2,cy=1,dy=10,fy=-2,gg=r=>r==="*";function hy(r,e){let t=r.split("/"),o=t.length;return t.some(gg)&&(o+=fy),e&&(o+=uy),t.filter(s=>!gg(s)).reduce((s,l)=>s+(ay.test(l)?ly:l===""?cy:dy),o)}function py(r,e){return r.length===e.length&&r.slice(0,-1).every((o,s)=>o===e[s])?r[r.length-1]-e[e.length-1]:0}function my(r,e,t=!1){let{routesMeta:o}=r,s={},l="/",c=[];for(let d=0;d<o.length;++d){let f=o[d],p=d===o.length-1,m=l==="/"?e:e.slice(l.length)||"/",v={path:f.relativePath,caseSensitive:f.caseSensitive,end:p},y=f.matcher&&f.compiledParams?Zv(v,m,f.matcher,f.compiledParams):Pu(v,m),S=f.route;if(!y&&p&&t&&!o[o.length-1].route.index&&(y=Pu({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},m)),!y)return null;Object.assign(s,y.params),c.push({params:s,pathname:br([l,y.pathname]),pathnameBase:xy(br([l,y.pathnameBase])),route:S}),y.pathnameBase!=="/"&&(l=br([l,y.pathnameBase]))}return c}function Pu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,o]=Jv(r.path,r.caseSensitive,r.end);return Zv(r,e,t,o)}function Zv(r,e,t,o){let s=e.match(t);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:o.reduce((p,{paramName:m,isOptional:v},y)=>{if(m==="*"){let E=d[y]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=d[y];return v&&!S?p[m]=void 0:p[m]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function Jv(r,e=!1,t=!0){$r(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,f,p,m)=>{if(o.push({paramName:d,isOptional:f!=null}),f){let v=m.charAt(p+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(o.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),o]}function gy(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $r(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function _i(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,o=r.charAt(t);return o&&o!=="/"?null:r.slice(t)||"/"}function vy(r,e="/"){let{pathname:t,search:o="",hash:s=""}=typeof r=="string"?As(r):r,l;return t?(t=e_(t),t.startsWith("/")?l=vg(t.substring(1),"/"):l=vg(t,e)):l=e,{pathname:l,search:yy(o),hash:Sy(s)}}function vg(r,e){let t=Lu(e).split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Cd(r,e,t,o){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _y(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Qv(r){let e=_y(r);return e.map((t,o)=>o===e.length-1?t.pathname:t.pathnameBase)}function ah(r,e,t,o=!1){let s;typeof r=="string"?s=As(r):(s={...r},Yt(!s.pathname||!s.pathname.includes("?"),Cd("?","pathname","search",s)),Yt(!s.pathname||!s.pathname.includes("#"),Cd("#","pathname","hash",s)),Yt(!s.search||!s.search.includes("#"),Cd("#","search","hash",s)));let l=r===""||s.pathname==="",c=l?"/":s.pathname,d;if(c==null)d=t;else{let v=e.length-1;if(!o&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),v-=1;s.pathname=y.join("/")}d=v>=0?e[v]:"/"}let f=vy(s,d),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||m)&&(f.pathname+="/"),f}var e_=r=>r.replace(/[\\/]{2,}/g,"/"),br=r=>e_(r.join("/")),Lu=r=>r.replace(/\/+$/,""),xy=r=>Lu(r).replace(/^\/*/,"/"),yy=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Sy=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Ey=class{constructor(r,e,t,o=!1){this.status=r,this.statusText=e||"",this.internal=o,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function My(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function wy(r){let e=r.map(t=>t.route.path).filter(Boolean);return br(e)||"/"}var t_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function n_(r,e){let t=r;if(typeof t!="string"||!sh.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let o=t,s=!1;if(t_)try{let l=new URL(window.location.href),c=$v.test(t)?new URL(Qx(t,l.protocol)):new URL(t),d=_i(c.pathname,e);c.origin===l.origin&&d!=null?t=d+c.search+c.hash:s=!0}catch{$r(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:s,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var r_=["POST","PUT","PATCH","DELETE"];new Set(r_);var Ty=["GET",...r_];new Set(Ty);var Cy=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Ry(r){try{return Cy.includes(new URL(r).protocol)}catch{return!1}}var bs=O.createContext(null);bs.displayName="DataRouter";var Iu=O.createContext(null);Iu.displayName="DataRouterState";var i_=O.createContext(!1);function Ay(){return O.useContext(i_)}var o_=O.createContext({isTransitioning:!1});o_.displayName="ViewTransition";var by=O.createContext(new Map);by.displayName="Fetchers";var Py=O.createContext(null);Py.displayName="Await";var mr=O.createContext(null);mr.displayName="Navigation";var Oa=O.createContext(null);Oa.displayName="Location";var xi=O.createContext({outlet:null,matches:[],isDataRoute:!1});xi.displayName="Route";var lh=O.createContext(null);lh.displayName="RouteError";var s_="REACT_ROUTER_ERROR",Ly="REDIRECT",Dy="ROUTE_ERROR_RESPONSE";function Ny(r){if(r.startsWith(`${s_}:${Ly}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Uy(r){if(r.startsWith(`${s_}:${Dy}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Ey(e.status,e.statusText,e.data)}catch{}}function Iy(r,{relative:e}={}){Yt(Ba(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:o}=O.useContext(mr),{hash:s,pathname:l,search:c}=za(r,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:br([t,l])),o.createHref({pathname:d,search:c,hash:s})}function Ba(){return O.useContext(Oa)!=null}function yi(){return Yt(Ba(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Oa).location}var a_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function l_(r){O.useContext(mr).static||O.useLayoutEffect(r)}function Fy(){let{isDataRoute:r}=O.useContext(xi);return r?qy():ky()}function ky(){Yt(Ba(),"useNavigate() may be used only in the context of a <Router> component.");let r=O.useContext(bs),{basename:e,navigator:t}=O.useContext(mr),{matches:o}=O.useContext(xi),{pathname:s}=yi(),l=JSON.stringify(Qv(o)),c=O.useRef(!1);return l_(()=>{c.current=!0}),O.useCallback((f,p={})=>{if($r(c.current,a_),!c.current)return;if(typeof f=="number"){t.go(f);return}let m=ah(f,JSON.parse(l),s,p.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:br([e,m.pathname])),(p.replace?t.replace:t.push)(m,p.state,p)},[e,t,l,s,r])}O.createContext(null);function za(r,{relative:e}={}){let{matches:t}=O.useContext(xi),{pathname:o}=yi(),s=JSON.stringify(Qv(t));return O.useMemo(()=>ah(r,JSON.parse(s),o,e==="path"),[r,s,o,e])}function Oy(r,e){return u_(r,e)}function u_(r,e,t){Yt(Ba(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=O.useContext(mr),{matches:s}=O.useContext(xi),l=s[s.length-1],c=l?l.params:{},d=l?l.pathname:"/",f=l?l.pathnameBase:"/",p=l&&l.route;{let x=p&&p.path||"";d_(d,!p||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let m=yi(),v;if(e){let x=typeof e=="string"?As(e):e;Yt(f==="/"||x.pathname?.startsWith(f),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${x.pathname}" was given in the \`location\` prop.`),v=x}else v=m;let y=v.pathname||"/",S=y;if(f!=="/"){let x=f.replace(/^\//,"").split("/");S="/"+y.replace(/^\//,"").split("/").slice(x.length).join("/")}let E=t&&t.state.matches.length?t.state.matches.map(x=>Object.assign(x,{route:t.manifest[x.route.id]||x.route})):Yv(r,{pathname:S});$r(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),$r(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=Gy(E&&E.map(x=>Object.assign({},x,{params:Object.assign({},c,x.params),pathname:br([f,o.encodeLocation?o.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?f:br([f,o.encodeLocation?o.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),s,t);return e&&M?O.createElement(Oa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},M):M}function By(){let r=Yy(),e=My(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},l={padding:"2px 4px",backgroundColor:o},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:l},"ErrorBoundary")," or"," ",O.createElement("code",{style:l},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),t?O.createElement("pre",{style:s},t):null,c)}var zy=O.createElement(By,null),c_=class extends O.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=Uy(r.digest);t&&(r=t)}let e=r!==void 0?O.createElement(xi.Provider,{value:this.props.routeContext},O.createElement(lh.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?O.createElement(Hy,{error:r},e):e}};c_.contextType=i_;var Rd=new WeakMap;function Hy({children:r,error:e}){let{basename:t}=O.useContext(mr);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let o=Ny(e.digest);if(o){let s=Rd.get(e);if(s)throw s;let l=n_(o.location,t),c=l.absoluteURL||l.to;if(Ry(c))throw new Error("Invalid redirect location");if(t_&&!Rd.get(e))if(l.isExternal||o.reloadDocument)window.location.href=c;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:o.replace}));throw Rd.set(e,d),d}return O.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return r}function Vy({routeContext:r,match:e,children:t}){let o=O.useContext(bs);return o&&o.static&&o.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=e.route.id),O.createElement(xi.Provider,{value:r},t)}function Gy(r,e=[],t){let o=t?.state;if(r==null){if(!o)return null;if(o.errors)r=o.matches;else if(e.length===0&&!o.initialized&&o.matches.length>0)r=o.matches;else return null}let s=r,l=o?.errors;if(l!=null){let m=s.findIndex(v=>v.route.id&&l?.[v.route.id]!==void 0);Yt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,m+1))}let c=!1,d=-1;if(t&&o){c=o.renderFallback;for(let m=0;m<s.length;m++){let v=s[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(d=m),v.route.id){let{loaderData:y,errors:S}=o,E=v.route.loader&&!y.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(c=!0),d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}}let f=t?.onError,p=o&&f?(m,v)=>{f(m,{location:o.location,params:o.matches?.[0]?.params??{},pattern:wy(o.matches),errorInfo:v})}:void 0;return s.reduceRight((m,v,y)=>{let S,E=!1,M=null,x=null;o&&(S=l&&v.route.id?l[v.route.id]:void 0,M=v.route.errorElement||zy,c&&(d<0&&y===0?(d_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,x=null):d===y&&(E=!0,x=v.route.hydrateFallbackElement||null)));let _=e.concat(s.slice(0,y+1)),L=()=>{let P;return S?P=M:E?P=x:v.route.Component?P=O.createElement(v.route.Component,null):v.route.element?P=v.route.element:P=m,O.createElement(Vy,{match:v,routeContext:{outlet:m,matches:_,isDataRoute:o!=null},children:P})};return o&&(v.route.ErrorBoundary||v.route.errorElement||y===0)?O.createElement(c_,{location:o.location,revalidation:o.revalidation,component:M,error:S,children:L(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):L()},null)}function uh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wy(r){let e=O.useContext(bs);return Yt(e,uh(r)),e}function Xy(r){let e=O.useContext(Iu);return Yt(e,uh(r)),e}function jy(r){let e=O.useContext(xi);return Yt(e,uh(r)),e}function ch(r){let e=jy(r),t=e.matches[e.matches.length-1];return Yt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function $y(){return ch("useRouteId")}function Yy(){let r=O.useContext(lh),e=Xy("useRouteError"),t=ch("useRouteError");return r!==void 0?r:e.errors?.[t]}function qy(){let{router:r}=Wy("useNavigate"),e=ch("useNavigate"),t=O.useRef(!1);return l_(()=>{t.current=!0}),O.useCallback(async(s,l={})=>{$r(t.current,a_),t.current&&(typeof s=="number"?await r.navigate(s):await r.navigate(s,{fromRouteId:e,...l}))},[r,e])}var _g={};function d_(r,e,t){!e&&!_g[r]&&(_g[r]=!0,$r(!1,t))}O.memo(Ky);function Ky({routes:r,manifest:e,future:t,state:o,isStatic:s,onError:l}){return u_(r,void 0,{manifest:e,state:o,isStatic:s,onError:l})}function xu(r){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Zy({basename:r="/",children:e=null,location:t,navigationType:o="POP",navigator:s,static:l=!1,useTransitions:c}){Yt(!Ba(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),f=O.useMemo(()=>({basename:d,navigator:s,static:l,useTransitions:c,future:{}}),[d,s,l,c]);typeof t=="string"&&(t=As(t));let{pathname:p="/",search:m="",hash:v="",state:y=null,key:S="default",mask:E}=t,M=O.useMemo(()=>{let x=_i(p,d);return x==null?null:{location:{pathname:x,search:m,hash:v,state:y,key:S,mask:E},navigationType:o}},[d,p,m,v,y,S,o,E]);return $r(M!=null,`<Router basename="${d}"> is not able to match the URL "${p}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:O.createElement(mr.Provider,{value:f},O.createElement(Oa.Provider,{children:e,value:M}))}function Jy({children:r,location:e}){return Oy(mf(r),e)}function mf(r,e=[]){let t=[];return O.Children.forEach(r,(o,s)=>{if(!O.isValidElement(o))return;let l=[...e,s];if(o.type===O.Fragment){t.push.apply(t,mf(o.props.children,l));return}Yt(o.type===xu,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let c={id:o.props.id||l.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(c.children=mf(o.props.children,l)),t.push(c)}),t}var yu="get",Su="application/x-www-form-urlencoded";function Fu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Qy(r){return Fu(r)&&r.tagName.toLowerCase()==="button"}function eS(r){return Fu(r)&&r.tagName.toLowerCase()==="form"}function tS(r){return Fu(r)&&r.tagName.toLowerCase()==="input"}function nS(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function rS(r,e){return r.button===0&&(!e||e==="_self")&&!nS(r)}var $l=null;function iS(){if($l===null)try{new FormData(document.createElement("form"),0),$l=!1}catch{$l=!0}return $l}var oS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ad(r){return r!=null&&!oS.has(r)?($r(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Su}"`),null):r}function sS(r,e){let t,o,s,l,c;if(eS(r)){let d=r.getAttribute("action");o=d?_i(d,e):null,t=r.getAttribute("method")||yu,s=Ad(r.getAttribute("enctype"))||Su,l=new FormData(r)}else if(Qy(r)||tS(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=r.getAttribute("formaction")||d.getAttribute("action");if(o=f?_i(f,e):null,t=r.getAttribute("formmethod")||d.getAttribute("method")||yu,s=Ad(r.getAttribute("formenctype"))||Ad(d.getAttribute("enctype"))||Su,l=new FormData(d,r),!iS()){let{name:p,type:m,value:v}=r;if(m==="image"){let y=p?`${p}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else p&&l.append(p,v)}}else{if(Fu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=yu,o=null,s=Su,c=r}return l&&s==="text/plain"&&(c=l,l=void 0),{action:o,method:t.toLowerCase(),encType:s,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function dh(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function f_(r,e,t,o){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${o}`:s.pathname=`${s.pathname}.${o}`:s.pathname==="/"?s.pathname=`_root.${o}`:e&&_i(s.pathname,e)==="/"?s.pathname=`${Lu(e)}/_root.${o}`:s.pathname=`${Lu(s.pathname)}.${o}`,s}async function aS(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lS(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function uS(r,e,t){let o=await Promise.all(r.map(async s=>{let l=e.routes[s.route.id];if(l){let c=await aS(l,t);return c.links?c.links():[]}return[]}));return hS(o.flat(1).filter(lS).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function xg(r,e,t,o,s,l){let c=(f,p)=>t[p]?f.route.id!==t[p].route.id:!0,d=(f,p)=>t[p].pathname!==f.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==f.params["*"];return l==="assets"?e.filter((f,p)=>c(f,p)||d(f,p)):l==="data"?e.filter((f,p)=>{let m=o.routes[f.route.id];if(!m||!m.hasLoader)return!1;if(c(f,p)||d(f,p))return!0;if(f.route.shouldRevalidate){let v=f.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function cS(r,e,{includeHydrateFallback:t}={}){return dS(r.map(o=>{let s=e.routes[o.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function dS(r){return[...new Set(r)]}function fS(r){let e={},t=Object.keys(r).sort();for(let o of t)e[o]=r[o];return e}function hS(r,e){let t=new Set;return new Set(e),r.reduce((o,s)=>{let l=JSON.stringify(fS(s));return t.has(l)||(t.add(l),o.push({key:l,link:s})),o},[])}function fh(){let r=O.useContext(bs);return dh(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function pS(){let r=O.useContext(Iu);return dh(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var hh=O.createContext(void 0);hh.displayName="FrameworkContext";function ku(){let r=O.useContext(hh);return dh(r,"You must render this element inside a <HydratedRouter> element"),r}function mS(r,e){let t=O.useContext(hh),[o,s]=O.useState(!1),[l,c]=O.useState(!1),{onFocus:d,onBlur:f,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=e,y=O.useRef(null);O.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let M=_=>{_.forEach(L=>{c(L.isIntersecting)})},x=new IntersectionObserver(M,{threshold:.5});return y.current&&x.observe(y.current),()=>{x.disconnect()}}},[r]),O.useEffect(()=>{if(o){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[o]);let S=()=>{s(!0)},E=()=>{s(!1),c(!1)};return t?r!=="intent"?[l,y,{}]:[l,y,{onFocus:ha(d,S),onBlur:ha(f,E),onMouseEnter:ha(p,S),onMouseLeave:ha(m,E),onTouchStart:ha(v,S)}]:[!1,y,{}]}function ha(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function gS({page:r,...e}){let t=Ay(),{nonce:o}=ku(),{router:s}=fh(),l=O.useMemo(()=>Yv(s.routes,r,s.basename),[s.routes,r,s.basename]);return l?(e.nonce==null&&o&&(e={...e,nonce:o}),t?O.createElement(_S,{page:r,matches:l,...e}):O.createElement(xS,{page:r,matches:l,...e})):null}function vS(r){let{manifest:e,routeModules:t}=ku(),[o,s]=O.useState([]);return O.useEffect(()=>{let l=!1;return uS(r,e,t).then(c=>{l||s(c)}),()=>{l=!0}},[r,e,t]),o}function _S({page:r,matches:e,...t}){let o=yi(),{future:s}=ku(),{basename:l}=fh(),c=O.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let d=f_(r,l,s.v8_trailingSlashAwareDataRequests,"rsc"),f=!1,p=[];for(let m of e)typeof m.route.shouldRevalidate=="function"?f=!0:p.push(m.route.id);return f&&p.length>0&&d.searchParams.set("_routes",p.join(",")),[d.pathname+d.search]},[l,s.v8_trailingSlashAwareDataRequests,r,o,e]);return O.createElement(O.Fragment,null,c.map(d=>O.createElement("link",{key:d,rel:"prefetch",as:"fetch",href:d,...t})))}function xS({page:r,matches:e,...t}){let o=yi(),{future:s,manifest:l,routeModules:c}=ku(),{basename:d}=fh(),{loaderData:f,matches:p}=pS(),m=O.useMemo(()=>xg(r,e,p,l,o,"data"),[r,e,p,l,o]),v=O.useMemo(()=>xg(r,e,p,l,o,"assets"),[r,e,p,l,o]),y=O.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let M=new Set,x=!1;if(e.forEach(L=>{let P=l.routes[L.route.id];!P||!P.hasLoader||(!m.some(A=>A.route.id===L.route.id)&&L.route.id in f&&c[L.route.id]?.shouldRevalidate||P.hasClientLoader?x=!0:M.add(L.route.id))}),M.size===0)return[];let _=f_(r,d,s.v8_trailingSlashAwareDataRequests,"data");return x&&M.size>0&&_.searchParams.set("_routes",e.filter(L=>M.has(L.route.id)).map(L=>L.route.id).join(",")),[_.pathname+_.search]},[d,s.v8_trailingSlashAwareDataRequests,f,o,l,m,e,r,c]),S=O.useMemo(()=>cS(v,l),[v,l]),E=vS(v);return O.createElement(O.Fragment,null,y.map(M=>O.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...t})),S.map(M=>O.createElement("link",{key:M,rel:"modulepreload",href:M,...t})),E.map(({key:M,link:x})=>O.createElement("link",{key:M,nonce:t.nonce,...x,crossOrigin:x.crossOrigin??t.crossOrigin})))}function yS(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var SS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{SS&&(window.__reactRouterVersion="7.18.2")}catch{}function ES({basename:r,children:e,useTransitions:t,window:o}){let s=O.useRef();s.current==null&&(s.current=ey({window:o,v5Compat:!0}));let l=s.current,[c,d]=O.useState({action:l.action,location:l.location}),f=O.useCallback(p=>{t===!1?d(p):O.startTransition(()=>d(p))},[t]);return O.useLayoutEffect(()=>l.listen(f),[l,f]),O.createElement(Zy,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l,useTransitions:t})}var ph=O.forwardRef(function({onClick:e,discover:t="render",prefetch:o="none",relative:s,reloadDocument:l,replace:c,mask:d,state:f,target:p,to:m,preventScrollReset:v,viewTransition:y,defaultShouldRevalidate:S,...E},M){let{basename:x,navigator:_,useTransitions:L}=O.useContext(mr),P=typeof m=="string"&&sh.test(m),A=n_(m,x);m=A.to;let G=Iy(m,{relative:s}),I=yi(),k=null;if(d){let fe=ah(d,[],I.mask?I.mask.pathname:"/",!0);x!=="/"&&(fe.pathname=fe.pathname==="/"?x:br([x,fe.pathname])),k=_.createHref(fe)}let[X,b,C]=mS(o,E),V=TS(m,{replace:c,mask:d,state:f,target:p,preventScrollReset:v,relative:s,viewTransition:y,defaultShouldRevalidate:S,useTransitions:L});function ae(fe){e&&e(fe),fe.defaultPrevented||V(fe)}let J=!(A.isExternal||l),ee=O.createElement("a",{...E,...C,href:(J?k:void 0)||A.absoluteURL||G,onClick:J?ae:e,ref:yS(M,b),target:p,"data-discover":!P&&t==="render"?"true":void 0});return X&&!P?O.createElement(O.Fragment,null,ee,O.createElement(gS,{page:G})):ee});ph.displayName="Link";var gf=O.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:o="",end:s=!1,style:l,to:c,viewTransition:d,children:f,...p},m){let v=za(c,{relative:p.relative}),y=yi(),S=O.useContext(Iu),{navigator:E,basename:M}=O.useContext(mr),x=S!=null&&PS(v)&&d===!0,_=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,L=y.pathname,P=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(L=L.toLowerCase(),P=P?P.toLowerCase():null,_=_.toLowerCase()),P&&M&&(P=_i(P,M)||P);const A=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let G=L===_||!s&&L.startsWith(_)&&L.charAt(A)==="/",I=P!=null&&(P===_||!s&&P.startsWith(_)&&P.charAt(_.length)==="/"),k={isActive:G,isPending:I,isTransitioning:x},X=G?e:void 0,b;typeof o=="function"?b=o(k):b=[o,G?"active":null,I?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(k):l;return O.createElement(ph,{...p,"aria-current":X,className:b,ref:m,style:C,to:c,viewTransition:d},typeof f=="function"?f(k):f)});gf.displayName="NavLink";var MS=O.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:o,replace:s,state:l,method:c=yu,action:d,onSubmit:f,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:y,...S},E)=>{let{useTransitions:M}=O.useContext(mr),x=AS(),_=bS(d,{relative:p}),L=c.toLowerCase()==="get"?"get":"post",P=typeof d=="string"&&sh.test(d),A=G=>{if(f&&f(G),G.defaultPrevented)return;G.preventDefault();let I=G.nativeEvent.submitter,k=I?.getAttribute("formmethod")||c,X=()=>x(I||G.currentTarget,{fetcherKey:e,method:k,navigate:t,replace:s,state:l,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:y});M&&t!==!1?O.startTransition(()=>X()):X()};return O.createElement("form",{ref:E,method:L,action:_,onSubmit:o?f:A,...S,"data-discover":!P&&r==="render"?"true":void 0})});MS.displayName="Form";function wS(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function h_(r){let e=O.useContext(bs);return Yt(e,wS(r)),e}function TS(r,{target:e,replace:t,mask:o,state:s,preventScrollReset:l,relative:c,viewTransition:d,defaultShouldRevalidate:f,useTransitions:p}={}){let m=Fy(),v=yi(),y=za(r,{relative:c});return O.useCallback(S=>{if(rS(S,e)){S.preventDefault();let E=t!==void 0?t:Aa(v)===Aa(y),M=()=>m(r,{replace:E,mask:o,state:s,preventScrollReset:l,relative:c,viewTransition:d,defaultShouldRevalidate:f});p?O.startTransition(()=>M()):M()}},[v,m,y,t,o,s,e,r,l,c,d,f,p])}var CS=0,RS=()=>`__${String(++CS)}__`;function AS(){let{router:r}=h_("useSubmit"),{basename:e}=O.useContext(mr),t=$y(),o=r.fetch,s=r.navigate;return O.useCallback(async(l,c={})=>{let{action:d,method:f,encType:p,formData:m,body:v}=sS(l,e);if(c.navigate===!1){let y=c.fetcherKey||RS();await o(y,t,c.action||d,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||f,formEncType:c.encType||p,flushSync:c.flushSync})}else await s(c.action||d,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||f,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[o,s,e,t])}function bS(r,{relative:e}={}){let{basename:t}=O.useContext(mr),o=O.useContext(xi);Yt(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),l={...za(r||".",{relative:e})},c=yi();if(r==null){l.search=c.search;let d=new URLSearchParams(l.search),f=d.getAll("index");if(f.some(m=>m==="")){d.delete("index"),f.filter(v=>v).forEach(v=>d.append("index",v));let m=d.toString();l.search=m?`?${m}`:""}}return(!r||r===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:br([t,l.pathname])),Aa(l)}function PS(r,{relative:e}={}){let t=O.useContext(o_);Yt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=h_("useViewTransitionState"),s=za(r,{relative:e});if(!t.isTransitioning)return!1;let l=_i(t.currentLocation.pathname,o)||t.currentLocation.pathname,c=_i(t.nextLocation.pathname,o)||t.nextLocation.pathname;return Pu(s.pathname,c)!=null||Pu(s.pathname,l)!=null}const mh="178",LS=0,yg=1,DS=2,p_=1,NS=2,ci=3,Ki=0,Yn=1,zr=2,qi=0,xs=1,Sg=2,Eg=3,Mg=4,US=5,Mo=100,IS=101,FS=102,kS=103,OS=104,BS=200,zS=201,HS=202,VS=203,vf=204,_f=205,GS=206,WS=207,XS=208,jS=209,$S=210,YS=211,qS=212,KS=213,ZS=214,xf=0,yf=1,Sf=2,Es=3,Ef=4,Mf=5,wf=6,Tf=7,m_=0,JS=1,QS=2,gi=0,eE=1,tE=2,nE=3,rE=4,iE=5,oE=6,sE=7,g_=300,Ms=301,ws=302,Cf=303,Rf=304,Ou=306,ba=1e3,fi=1001,Af=1002,yn=1003,aE=1004,Yl=1005,Vr=1006,bd=1007,Co=1008,Yr=1009,v_=1010,__=1011,Pa=1012,gh=1013,Ao=1014,hi=1015,Ha=1016,vh=1017,_h=1018,La=1020,x_=35902,y_=1021,S_=1022,Ar=1023,Da=1026,Na=1027,E_=1028,xh=1029,M_=1030,yh=1031,Sh=1033,Eu=33776,Mu=33777,wu=33778,Tu=33779,bf=35840,Pf=35841,Lf=35842,Df=35843,Nf=36196,Uf=37492,If=37496,Ff=37808,kf=37809,Of=37810,Bf=37811,zf=37812,Hf=37813,Vf=37814,Gf=37815,Wf=37816,Xf=37817,jf=37818,$f=37819,Yf=37820,qf=37821,Cu=36492,Kf=36494,Zf=36495,w_=36283,Jf=36284,Qf=36285,eh=36286,lE=3200,uE=3201,cE=0,dE=1,Yi="",On="srgb",Ts="srgb-linear",Du="linear",Ft="srgb",es=7680,wg=519,fE=512,hE=513,pE=514,T_=515,mE=516,gE=517,vE=518,_E=519,Tg=35044,Cg="300 es",pi=2e3,Nu=2001;class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(t)===-1&&o[e].push(t)}hasEventListener(e,t){const o=this._listeners;return o===void 0?!1:o[e]!==void 0&&o[e].indexOf(t)!==-1}removeEventListener(e,t){const o=this._listeners;if(o===void 0)return;const s=o[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const o=t[e.type];if(o!==void 0){e.target=this;const s=o.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rg=1234567;const Ta=Math.PI/180,Ua=180/Math.PI;function Ls(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]).toLowerCase()}function wt(r,e,t){return Math.max(e,Math.min(t,r))}function Eh(r,e){return(r%e+e)%e}function xE(r,e,t,o,s){return o+(r-e)*(s-o)/(t-e)}function yE(r,e,t){return r!==e?(t-r)/(e-r):0}function Ca(r,e,t){return(1-t)*r+t*e}function SE(r,e,t,o){return Ca(r,e,1-Math.exp(-t*o))}function EE(r,e=1){return e-Math.abs(Eh(r,e*2)-e)}function ME(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function wE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function TE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function CE(r,e){return r+Math.random()*(e-r)}function RE(r){return r*(.5-Math.random())}function AE(r){r!==void 0&&(Rg=r);let e=Rg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bE(r){return r*Ta}function PE(r){return r*Ua}function LE(r){return(r&r-1)===0&&r!==0}function DE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function NE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function UE(r,e,t,o,s){const l=Math.cos,c=Math.sin,d=l(t/2),f=c(t/2),p=l((e+o)/2),m=c((e+o)/2),v=l((e-o)/2),y=c((e-o)/2),S=l((o-e)/2),E=c((o-e)/2);switch(s){case"XYX":r.set(d*m,f*v,f*y,d*p);break;case"YZY":r.set(f*y,d*m,f*v,d*p);break;case"ZXZ":r.set(f*v,f*y,d*m,d*p);break;case"XZX":r.set(d*m,f*E,f*S,d*p);break;case"YXY":r.set(f*S,d*m,f*E,d*p);break;case"ZYZ":r.set(f*E,f*S,d*m,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sa={DEG2RAD:Ta,RAD2DEG:Ua,generateUUID:Ls,clamp:wt,euclideanModulo:Eh,mapLinear:xE,inverseLerp:yE,lerp:Ca,damp:SE,pingpong:EE,smoothstep:ME,smootherstep:wE,randInt:TE,randFloat:CE,randFloatSpread:RE,seededRandom:AE,degToRad:bE,radToDeg:PE,isPowerOfTwo:LE,ceilPowerOfTwo:DE,floorPowerOfTwo:NE,setQuaternionFromProperEuler:UE,normalize:Fn,denormalize:gs};class Dt{constructor(e=0,t=0){Dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,o=this.y,s=e.elements;return this.x=s[0]*t+s[3]*o+s[6],this.y=s[1]*t+s[4]*o+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(wt(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(wt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y;return t*t+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const o=Math.cos(t),s=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*o-c*s+e.x,this.y=l*s+c*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Va{constructor(e=0,t=0,o=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=o,this._w=s}static slerpFlat(e,t,o,s,l,c,d){let f=o[s+0],p=o[s+1],m=o[s+2],v=o[s+3];const y=l[c+0],S=l[c+1],E=l[c+2],M=l[c+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(d===1){e[t+0]=y,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(v!==M||f!==y||p!==S||m!==E){let x=1-d;const _=f*y+p*S+m*E+v*M,L=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const G=Math.sqrt(P),I=Math.atan2(G,_*L);x=Math.sin(x*I)/G,d=Math.sin(d*I)/G}const A=d*L;if(f=f*x+y*A,p=p*x+S*A,m=m*x+E*A,v=v*x+M*A,x===1-d){const G=1/Math.sqrt(f*f+p*p+m*m+v*v);f*=G,p*=G,m*=G,v*=G}}e[t]=f,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,o,s,l,c){const d=o[s],f=o[s+1],p=o[s+2],m=o[s+3],v=l[c],y=l[c+1],S=l[c+2],E=l[c+3];return e[t]=d*E+m*v+f*S-p*y,e[t+1]=f*E+m*y+p*v-d*S,e[t+2]=p*E+m*S+d*y-f*v,e[t+3]=m*E-d*v-f*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,o,s){return this._x=e,this._y=t,this._z=o,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const o=e._x,s=e._y,l=e._z,c=e._order,d=Math.cos,f=Math.sin,p=d(o/2),m=d(s/2),v=d(l/2),y=f(o/2),S=f(s/2),E=f(l/2);switch(c){case"XYZ":this._x=y*m*v+p*S*E,this._y=p*S*v-y*m*E,this._z=p*m*E+y*S*v,this._w=p*m*v-y*S*E;break;case"YXZ":this._x=y*m*v+p*S*E,this._y=p*S*v-y*m*E,this._z=p*m*E-y*S*v,this._w=p*m*v+y*S*E;break;case"ZXY":this._x=y*m*v-p*S*E,this._y=p*S*v+y*m*E,this._z=p*m*E+y*S*v,this._w=p*m*v-y*S*E;break;case"ZYX":this._x=y*m*v-p*S*E,this._y=p*S*v+y*m*E,this._z=p*m*E-y*S*v,this._w=p*m*v+y*S*E;break;case"YZX":this._x=y*m*v+p*S*E,this._y=p*S*v+y*m*E,this._z=p*m*E-y*S*v,this._w=p*m*v-y*S*E;break;case"XZY":this._x=y*m*v-p*S*E,this._y=p*S*v-y*m*E,this._z=p*m*E+y*S*v,this._w=p*m*v+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const o=t/2,s=Math.sin(o);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,o=t[0],s=t[4],l=t[8],c=t[1],d=t[5],f=t[9],p=t[2],m=t[6],v=t[10],y=o+d+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(m-f)*S,this._y=(l-p)*S,this._z=(c-s)*S}else if(o>d&&o>v){const S=2*Math.sqrt(1+o-d-v);this._w=(m-f)/S,this._x=.25*S,this._y=(s+c)/S,this._z=(l+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-o-v);this._w=(l-p)/S,this._x=(s+c)/S,this._y=.25*S,this._z=(f+m)/S}else{const S=2*Math.sqrt(1+v-o-d);this._w=(c-s)/S,this._x=(l+p)/S,this._y=(f+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let o=e.dot(t)+1;return o<1e-8?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const o=this.angleTo(e);if(o===0)return this;const s=Math.min(1,t/o);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const o=e._x,s=e._y,l=e._z,c=e._w,d=t._x,f=t._y,p=t._z,m=t._w;return this._x=o*m+c*d+s*p-l*f,this._y=s*m+c*f+l*d-o*p,this._z=l*m+c*p+o*f-s*d,this._w=c*m-o*d-s*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const o=this._x,s=this._y,l=this._z,c=this._w;let d=c*e._w+o*e._x+s*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=o,this._y=s,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*o+t*this._x,this._y=S*s+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),m=Math.atan2(p,d),v=Math.sin((1-t)*m)/p,y=Math.sin(t*m)/p;return this._w=c*v+this._w*y,this._x=o*v+this._x*y,this._y=s*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,o){return this.copy(e).slerp(t,o)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),o=Math.random(),s=Math.sqrt(1-o),l=Math.sqrt(o);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,o=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=o}set(e,t,o){return o===void 0&&(o=this.z),this.x=e,this.y=t,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ag.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ag.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,o=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*o+l[6]*s,this.y=l[1]*t+l[4]*o+l[7]*s,this.z=l[2]*t+l[5]*o+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,o=this.y,s=this.z,l=e.elements,c=1/(l[3]*t+l[7]*o+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*o+l[8]*s+l[12])*c,this.y=(l[1]*t+l[5]*o+l[9]*s+l[13])*c,this.z=(l[2]*t+l[6]*o+l[10]*s+l[14])*c,this}applyQuaternion(e){const t=this.x,o=this.y,s=this.z,l=e.x,c=e.y,d=e.z,f=e.w,p=2*(c*s-d*o),m=2*(d*t-l*s),v=2*(l*o-c*t);return this.x=t+f*p+c*v-d*m,this.y=o+f*m+d*p-l*v,this.z=s+f*v+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,o=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*o+l[8]*s,this.y=l[1]*t+l[5]*o+l[9]*s,this.z=l[2]*t+l[6]*o+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(wt(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const o=e.x,s=e.y,l=e.z,c=t.x,d=t.y,f=t.z;return this.x=s*f-l*d,this.y=l*c-o*f,this.z=o*d-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const o=e.dot(this)/t;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return Pd.copy(this).projectOnVector(e),this.sub(Pd)}reflect(e){return this.sub(Pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(wt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y,s=this.z-e.z;return t*t+o*o+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,o){const s=Math.sin(t)*e;return this.x=s*Math.sin(o),this.y=Math.cos(t)*e,this.z=s*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,o){return this.x=e*Math.sin(t),this.y=o,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=o,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,o=Math.sqrt(1-t*t);return this.x=o*Math.cos(e),this.y=t,this.z=o*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pd=new re,Ag=new Va;class gt{constructor(e,t,o,s,l,c,d,f,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,o,s,l,c,d,f,p)}set(e,t,o,s,l,c,d,f,p){const m=this.elements;return m[0]=e,m[1]=s,m[2]=d,m[3]=t,m[4]=l,m[5]=f,m[6]=o,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],this}extractBasis(e,t,o){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,s=t.elements,l=this.elements,c=o[0],d=o[3],f=o[6],p=o[1],m=o[4],v=o[7],y=o[2],S=o[5],E=o[8],M=s[0],x=s[3],_=s[6],L=s[1],P=s[4],A=s[7],G=s[2],I=s[5],k=s[8];return l[0]=c*M+d*L+f*G,l[3]=c*x+d*P+f*I,l[6]=c*_+d*A+f*k,l[1]=p*M+m*L+v*G,l[4]=p*x+m*P+v*I,l[7]=p*_+m*A+v*k,l[2]=y*M+S*L+E*G,l[5]=y*x+S*P+E*I,l[8]=y*_+S*A+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[1],s=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],m=e[8];return t*c*m-t*d*p-o*l*m+o*d*f+s*l*p-s*c*f}invert(){const e=this.elements,t=e[0],o=e[1],s=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],m=e[8],v=m*c-d*p,y=d*f-m*l,S=p*l-c*f,E=t*v+o*y+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=v*M,e[1]=(s*p-m*o)*M,e[2]=(d*o-s*c)*M,e[3]=y*M,e[4]=(m*t-s*f)*M,e[5]=(s*l-d*t)*M,e[6]=S*M,e[7]=(o*f-p*t)*M,e[8]=(c*t-o*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,o,s,l,c,d){const f=Math.cos(l),p=Math.sin(l);return this.set(o*f,o*p,-o*(f*c+p*d)+c+e,-s*p,s*f,-s*(-p*c+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Ld.makeScale(e,t)),this}rotate(e){return this.premultiply(Ld.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ld.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,o,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,o=e.elements;for(let s=0;s<9;s++)if(t[s]!==o[s])return!1;return!0}fromArray(e,t=0){for(let o=0;o<9;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ld=new gt;function C_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ia(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function IE(){const r=Ia("canvas");return r.style.display="block",r}const bg={};function ys(r){r in bg||(bg[r]=!0,console.warn(r))}function FE(r,e,t){return new Promise(function(o,s){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:o()}}setTimeout(l,t)})}function kE(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function OE(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pg=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lg=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BE(){const r={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ft&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yi?Du:this.spaces[s].transfer},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],o=[.3127,.329];return r.define({[Ts]:{primaries:e,whitePoint:o,transfer:Du,toXYZ:Pg,fromXYZ:Lg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:o,transfer:Ft,toXYZ:Pg,fromXYZ:Lg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),r}const Pt=BE();function vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ss(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ts;class zE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let o;if(e instanceof HTMLCanvasElement)o=e;else{ts===void 0&&(ts=Ia("canvas")),ts.width=e.width,ts.height=e.height;const s=ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),o=ts}return o.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ia("canvas");t.width=e.width,t.height=e.height;const o=t.getContext("2d");o.drawImage(e,0,0,e.width,e.height);const s=o.getImageData(0,0,e.width,e.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=vi(l[c]/255)*255;return o.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let o=0;o<t.length;o++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[o]=Math.floor(vi(t[o]/255)*255):t[o]=vi(t[o]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HE=0;class Mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const o={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,d=s.length;c<d;c++)s[c].isDataTexture?l.push(Dd(s[c].image)):l.push(Dd(s[c]))}else l=Dd(s);o.url=l}return t||(e.images[this.uuid]=o),o}}function Dd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VE=0;const Nd=new re;class zn extends Ps{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,o=fi,s=fi,l=Vr,c=Co,d=Ar,f=Yr,p=zn.DEFAULT_ANISOTROPY,m=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=Ls(),this.name="",this.source=new Mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=o,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nd).x}get height(){return this.source.getSize(Nd).y}get depth(){return this.source.getSize(Nd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&o&&s.isVector2&&o.isVector2||s&&o&&s.isVector3&&o.isVector3||s&&o&&s.isMatrix3&&o.isMatrix3?s.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const o={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),t||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==g_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=g_;zn.DEFAULT_ANISOTROPY=1;class Jt{constructor(e=0,t=0,o=0,s=1){Jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=o,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,o,s){return this.x=e,this.y=t,this.z=o,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,o=this.y,s=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*o+c[8]*s+c[12]*l,this.y=c[1]*t+c[5]*o+c[9]*s+c[13]*l,this.z=c[2]*t+c[6]*o+c[10]*s+c[14]*l,this.w=c[3]*t+c[7]*o+c[11]*s+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,o,s,l;const f=e.elements,p=f[0],m=f[4],v=f[8],y=f[1],S=f[5],E=f[9],M=f[2],x=f[6],_=f[10];if(Math.abs(m-y)<.01&&Math.abs(v-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(m+y)<.1&&Math.abs(v+M)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,A=(S+1)/2,G=(_+1)/2,I=(m+y)/4,k=(v+M)/4,X=(E+x)/4;return P>A&&P>G?P<.01?(o=0,s=.707106781,l=.707106781):(o=Math.sqrt(P),s=I/o,l=k/o):A>G?A<.01?(o=.707106781,s=0,l=.707106781):(s=Math.sqrt(A),o=I/s,l=X/s):G<.01?(o=.707106781,s=.707106781,l=0):(l=Math.sqrt(G),o=k/l,s=X/l),this.set(o,s,l,t),this}let L=Math.sqrt((x-E)*(x-E)+(v-M)*(v-M)+(y-m)*(y-m));return Math.abs(L)<.001&&(L=1),this.x=(x-E)/L,this.y=(v-M)/L,this.z=(y-m)/L,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(wt(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this.w=e.w+(t.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GE extends Ps{constructor(e=1,t=1,o={}){super(),o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},o),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=o.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t);const s={width:e,height:t,depth:o.depth},l=new zn(s);this.textures=[];const c=o.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(o),this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=o.depthTexture,this.samples=o.samples,this.multiview=o.multiview}_setTextureOptions(e={}){const t={minFilter:Vr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let o=0;o<this.textures.length;o++)this.textures[o].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,o=1){if(this.width!==e||this.height!==t||this.depth!==o){this.width=e,this.height=t,this.depth=o;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=o,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,o=e.textures.length;t<o;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Mh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bo extends GE{constructor(e=1,t=1,o={}){super(e,t,o),this.isWebGLRenderTarget=!0}}class R_ extends zn{constructor(e=null,t=1,o=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:o,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WE extends zn{constructor(e=null,t=1,o=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:o,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t+=3)this.expandByPoint(wr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,o=e.count;t<o;t++)this.expandByPoint(wr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const o=wr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const o=e.geometry;if(o!==void 0){const l=o.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,wr):wr.fromBufferAttribute(l,c),wr.applyMatrix4(e.matrixWorld),this.expandByPoint(wr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ql.copy(e.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),ql.copy(o.boundingBox)),ql.applyMatrix4(e.matrixWorld),this.union(ql)}const s=e.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wr),wr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,o;return e.normal.x>0?(t=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),t<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Kl.subVectors(this.max,pa),ns.subVectors(e.a,pa),rs.subVectors(e.b,pa),is.subVectors(e.c,pa),Vi.subVectors(rs,ns),Gi.subVectors(is,rs),po.subVectors(ns,is);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-po.z,po.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,po.z,0,-po.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-po.y,po.x,0];return!Ud(t,ns,rs,is,Kl)||(t=[1,0,0,0,1,0,0,0,1],!Ud(t,ns,rs,is,Kl))?!1:(Zl.crossVectors(Vi,Gi),t=[Zl.x,Zl.y,Zl.z],Ud(t,ns,rs,is,Kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new re,new re,new re,new re,new re,new re,new re,new re],wr=new re,ql=new Ga,ns=new re,rs=new re,is=new re,Vi=new re,Gi=new re,po=new re,pa=new re,Kl=new re,Zl=new re,mo=new re;function Ud(r,e,t,o,s){for(let l=0,c=r.length-3;l<=c;l+=3){mo.fromArray(r,l);const d=s.x*Math.abs(mo.x)+s.y*Math.abs(mo.y)+s.z*Math.abs(mo.z),f=e.dot(mo),p=t.dot(mo),m=o.dot(mo);if(Math.max(-Math.max(f,p,m),Math.min(f,p,m))>d)return!1}return!0}const XE=new Ga,ma=new re,Id=new re;class wh{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const o=this.center;t!==void 0?o.copy(t):XE.setFromPoints(e).getCenter(o);let s=0;for(let l=0,c=e.length;l<c;l++)s=Math.max(s,o.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const o=this.center.distanceToSquared(e);return t.copy(e),o>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const o=Math.sqrt(t),s=(o-this.radius)*.5;this.center.addScaledVector(ma,s/o),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(Id)),this.expandByPoint(ma.copy(e.center).sub(Id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const si=new re,Fd=new re,Jl=new re,Wi=new re,kd=new re,Ql=new re,Od=new re;class jE{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const o=t.dot(this.direction);return o<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,o,s){Fd.copy(e).add(t).multiplyScalar(.5),Jl.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(Fd);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Jl),d=Wi.dot(this.direction),f=-Wi.dot(Jl),p=Wi.lengthSq(),m=Math.abs(1-c*c);let v,y,S,E;if(m>0)if(v=c*f-d,y=c*d-f,E=l*m,v>=0)if(y>=-E)if(y<=E){const M=1/m;v*=M,y*=M,S=v*(v+c*y+2*d)+y*(c*v+y+2*f)+p}else y=l,v=Math.max(0,-(c*y+d)),S=-v*v+y*(y+2*f)+p;else y=-l,v=Math.max(0,-(c*y+d)),S=-v*v+y*(y+2*f)+p;else y<=-E?(v=Math.max(0,-(-c*l+d)),y=v>0?-l:Math.min(Math.max(-l,-f),l),S=-v*v+y*(y+2*f)+p):y<=E?(v=0,y=Math.min(Math.max(-l,-f),l),S=y*(y+2*f)+p):(v=Math.max(0,-(c*l+d)),y=v>0?l:Math.min(Math.max(-l,-f),l),S=-v*v+y*(y+2*f)+p);else y=c>0?-l:l,v=Math.max(0,-(c*y+d)),S=-v*v+y*(y+2*f)+p;return o&&o.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(Fd).addScaledVector(Jl,y),S}intersectSphere(e,t){si.subVectors(e.center,this.origin);const o=si.dot(this.direction),s=si.dot(si)-o*o,l=e.radius*e.radius;if(s>l)return null;const c=Math.sqrt(l-s),d=o-c,f=o+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const o=-(this.origin.dot(e.normal)+e.constant)/t;return o>=0?o:null}intersectPlane(e,t){const o=this.distanceToPlane(e);return o===null?null:this.at(o,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let o,s,l,c,d,f;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(o=(e.min.x-y.x)*p,s=(e.max.x-y.x)*p):(o=(e.max.x-y.x)*p,s=(e.min.x-y.x)*p),m>=0?(l=(e.min.y-y.y)*m,c=(e.max.y-y.y)*m):(l=(e.max.y-y.y)*m,c=(e.min.y-y.y)*m),o>c||l>s||((l>o||isNaN(o))&&(o=l),(c<s||isNaN(s))&&(s=c),v>=0?(d=(e.min.z-y.z)*v,f=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,f=(e.min.z-y.z)*v),o>f||d>s)||((d>o||o!==o)&&(o=d),(f<s||s!==s)&&(s=f),s<0)?null:this.at(o>=0?o:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,o,s,l){kd.subVectors(t,e),Ql.subVectors(o,e),Od.crossVectors(kd,Ql);let c=this.direction.dot(Od),d;if(c>0){if(s)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Wi.subVectors(this.origin,e);const f=d*this.direction.dot(Ql.crossVectors(Wi,Ql));if(f<0)return null;const p=d*this.direction.dot(kd.cross(Wi));if(p<0||f+p>c)return null;const m=-d*Wi.dot(Od);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,t,o,s,l,c,d,f,p,m,v,y,S,E,M,x){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,o,s,l,c,d,f,p,m,v,y,S,E,M,x)}set(e,t,o,s,l,c,d,f,p,m,v,y,S,E,M,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=o,_[12]=s,_[1]=l,_[5]=c,_[9]=d,_[13]=f,_[2]=p,_[6]=m,_[10]=v,_[14]=y,_[3]=S,_[7]=E,_[11]=M,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],t[9]=o[9],t[10]=o[10],t[11]=o[11],t[12]=o[12],t[13]=o[13],t[14]=o[14],t[15]=o[15],this}copyPosition(e){const t=this.elements,o=e.elements;return t[12]=o[12],t[13]=o[13],t[14]=o[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,o){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this}makeBasis(e,t,o){return this.set(e.x,t.x,o.x,0,e.y,t.y,o.y,0,e.z,t.z,o.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,o=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),l=1/os.setFromMatrixColumn(e,1).length(),c=1/os.setFromMatrixColumn(e,2).length();return t[0]=o[0]*s,t[1]=o[1]*s,t[2]=o[2]*s,t[3]=0,t[4]=o[4]*l,t[5]=o[5]*l,t[6]=o[6]*l,t[7]=0,t[8]=o[8]*c,t[9]=o[9]*c,t[10]=o[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,o=e.x,s=e.y,l=e.z,c=Math.cos(o),d=Math.sin(o),f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=c*m,S=c*v,E=d*m,M=d*v;t[0]=f*m,t[4]=-f*v,t[8]=p,t[1]=S+E*p,t[5]=y-M*p,t[9]=-d*f,t[2]=M-y*p,t[6]=E+S*p,t[10]=c*f}else if(e.order==="YXZ"){const y=f*m,S=f*v,E=p*m,M=p*v;t[0]=y+M*d,t[4]=E*d-S,t[8]=c*p,t[1]=c*v,t[5]=c*m,t[9]=-d,t[2]=S*d-E,t[6]=M+y*d,t[10]=c*f}else if(e.order==="ZXY"){const y=f*m,S=f*v,E=p*m,M=p*v;t[0]=y-M*d,t[4]=-c*v,t[8]=E+S*d,t[1]=S+E*d,t[5]=c*m,t[9]=M-y*d,t[2]=-c*p,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const y=c*m,S=c*v,E=d*m,M=d*v;t[0]=f*m,t[4]=E*p-S,t[8]=y*p+M,t[1]=f*v,t[5]=M*p+y,t[9]=S*p-E,t[2]=-p,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const y=c*f,S=c*p,E=d*f,M=d*p;t[0]=f*m,t[4]=M-y*v,t[8]=E*v+S,t[1]=v,t[5]=c*m,t[9]=-d*m,t[2]=-p*m,t[6]=S*v+E,t[10]=y-M*v}else if(e.order==="XZY"){const y=c*f,S=c*p,E=d*f,M=d*p;t[0]=f*m,t[4]=-v,t[8]=p*m,t[1]=y*v+M,t[5]=c*m,t[9]=S*v-E,t[2]=E*v-S,t[6]=d*m,t[10]=M*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($E,e,YE)}lookAt(e,t,o){const s=this.elements;return tr.subVectors(e,t),tr.lengthSq()===0&&(tr.z=1),tr.normalize(),Xi.crossVectors(o,tr),Xi.lengthSq()===0&&(Math.abs(o.z)===1?tr.x+=1e-4:tr.z+=1e-4,tr.normalize(),Xi.crossVectors(o,tr)),Xi.normalize(),eu.crossVectors(tr,Xi),s[0]=Xi.x,s[4]=eu.x,s[8]=tr.x,s[1]=Xi.y,s[5]=eu.y,s[9]=tr.y,s[2]=Xi.z,s[6]=eu.z,s[10]=tr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,s=t.elements,l=this.elements,c=o[0],d=o[4],f=o[8],p=o[12],m=o[1],v=o[5],y=o[9],S=o[13],E=o[2],M=o[6],x=o[10],_=o[14],L=o[3],P=o[7],A=o[11],G=o[15],I=s[0],k=s[4],X=s[8],b=s[12],C=s[1],V=s[5],ae=s[9],J=s[13],ee=s[2],fe=s[6],ue=s[10],he=s[14],z=s[3],de=s[7],le=s[11],F=s[15];return l[0]=c*I+d*C+f*ee+p*z,l[4]=c*k+d*V+f*fe+p*de,l[8]=c*X+d*ae+f*ue+p*le,l[12]=c*b+d*J+f*he+p*F,l[1]=m*I+v*C+y*ee+S*z,l[5]=m*k+v*V+y*fe+S*de,l[9]=m*X+v*ae+y*ue+S*le,l[13]=m*b+v*J+y*he+S*F,l[2]=E*I+M*C+x*ee+_*z,l[6]=E*k+M*V+x*fe+_*de,l[10]=E*X+M*ae+x*ue+_*le,l[14]=E*b+M*J+x*he+_*F,l[3]=L*I+P*C+A*ee+G*z,l[7]=L*k+P*V+A*fe+G*de,l[11]=L*X+P*ae+A*ue+G*le,l[15]=L*b+P*J+A*he+G*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[4],s=e[8],l=e[12],c=e[1],d=e[5],f=e[9],p=e[13],m=e[2],v=e[6],y=e[10],S=e[14],E=e[3],M=e[7],x=e[11],_=e[15];return E*(+l*f*v-s*p*v-l*d*y+o*p*y+s*d*S-o*f*S)+M*(+t*f*S-t*p*y+l*c*y-s*c*S+s*p*m-l*f*m)+x*(+t*p*v-t*d*S-l*c*v+o*c*S+l*d*m-o*p*m)+_*(-s*d*m-t*f*v+t*d*y+s*c*v-o*c*y+o*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,o){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=o),this}invert(){const e=this.elements,t=e[0],o=e[1],s=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],m=e[8],v=e[9],y=e[10],S=e[11],E=e[12],M=e[13],x=e[14],_=e[15],L=v*x*p-M*y*p+M*f*S-d*x*S-v*f*_+d*y*_,P=E*y*p-m*x*p-E*f*S+c*x*S+m*f*_-c*y*_,A=m*M*p-E*v*p+E*d*S-c*M*S-m*d*_+c*v*_,G=E*v*f-m*M*f-E*d*y+c*M*y+m*d*x-c*v*x,I=t*L+o*P+s*A+l*G;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/I;return e[0]=L*k,e[1]=(M*y*l-v*x*l-M*s*S+o*x*S+v*s*_-o*y*_)*k,e[2]=(d*x*l-M*f*l+M*s*p-o*x*p-d*s*_+o*f*_)*k,e[3]=(v*f*l-d*y*l-v*s*p+o*y*p+d*s*S-o*f*S)*k,e[4]=P*k,e[5]=(m*x*l-E*y*l+E*s*S-t*x*S-m*s*_+t*y*_)*k,e[6]=(E*f*l-c*x*l-E*s*p+t*x*p+c*s*_-t*f*_)*k,e[7]=(c*y*l-m*f*l+m*s*p-t*y*p-c*s*S+t*f*S)*k,e[8]=A*k,e[9]=(E*v*l-m*M*l-E*o*S+t*M*S+m*o*_-t*v*_)*k,e[10]=(c*M*l-E*d*l+E*o*p-t*M*p-c*o*_+t*d*_)*k,e[11]=(m*d*l-c*v*l-m*o*p+t*v*p+c*o*S-t*d*S)*k,e[12]=G*k,e[13]=(m*M*s-E*v*s+E*o*y-t*M*y-m*o*x+t*v*x)*k,e[14]=(E*d*s-c*M*s-E*o*f+t*M*f+c*o*x-t*d*x)*k,e[15]=(c*v*s-m*d*s+m*o*f-t*v*f-c*o*y+t*d*y)*k,this}scale(e){const t=this.elements,o=e.x,s=e.y,l=e.z;return t[0]*=o,t[4]*=s,t[8]*=l,t[1]*=o,t[5]*=s,t[9]*=l,t[2]*=o,t[6]*=s,t[10]*=l,t[3]*=o,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,o,s))}makeTranslation(e,t,o){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,o,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,t,-o,0,0,o,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,0,o,0,0,1,0,0,-o,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,0,o,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const o=Math.cos(t),s=Math.sin(t),l=1-o,c=e.x,d=e.y,f=e.z,p=l*c,m=l*d;return this.set(p*c+o,p*d-s*f,p*f+s*d,0,p*d+s*f,m*d+o,m*f-s*c,0,p*f-s*d,m*f+s*c,l*f*f+o,0,0,0,0,1),this}makeScale(e,t,o){return this.set(e,0,0,0,0,t,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,t,o,s,l,c){return this.set(1,o,l,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,o){const s=this.elements,l=t._x,c=t._y,d=t._z,f=t._w,p=l+l,m=c+c,v=d+d,y=l*p,S=l*m,E=l*v,M=c*m,x=c*v,_=d*v,L=f*p,P=f*m,A=f*v,G=o.x,I=o.y,k=o.z;return s[0]=(1-(M+_))*G,s[1]=(S+A)*G,s[2]=(E-P)*G,s[3]=0,s[4]=(S-A)*I,s[5]=(1-(y+_))*I,s[6]=(x+L)*I,s[7]=0,s[8]=(E+P)*k,s[9]=(x-L)*k,s[10]=(1-(y+M))*k,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,o){const s=this.elements;let l=os.set(s[0],s[1],s[2]).length();const c=os.set(s[4],s[5],s[6]).length(),d=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),e.x=s[12],e.y=s[13],e.z=s[14],Tr.copy(this);const p=1/l,m=1/c,v=1/d;return Tr.elements[0]*=p,Tr.elements[1]*=p,Tr.elements[2]*=p,Tr.elements[4]*=m,Tr.elements[5]*=m,Tr.elements[6]*=m,Tr.elements[8]*=v,Tr.elements[9]*=v,Tr.elements[10]*=v,t.setFromRotationMatrix(Tr),o.x=l,o.y=c,o.z=d,this}makePerspective(e,t,o,s,l,c,d=pi){const f=this.elements,p=2*l/(t-e),m=2*l/(o-s),v=(t+e)/(t-e),y=(o+s)/(o-s);let S,E;if(d===pi)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(d===Nu)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=m,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,o,s,l,c,d=pi){const f=this.elements,p=1/(t-e),m=1/(o-s),v=1/(c-l),y=(t+e)*p,S=(o+s)*m;let E,M;if(d===pi)E=(c+l)*v,M=-2*v;else if(d===Nu)E=l*v,M=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-y,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=M,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,o=e.elements;for(let s=0;s<16;s++)if(t[s]!==o[s])return!1;return!0}fromArray(e,t=0){for(let o=0;o<16;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e[t+9]=o[9],e[t+10]=o[10],e[t+11]=o[11],e[t+12]=o[12],e[t+13]=o[13],e[t+14]=o[14],e[t+15]=o[15],e}}const os=new re,Tr=new Qt,$E=new re(0,0,0),YE=new re(1,1,1),Xi=new re,eu=new re,tr=new re,Dg=new Qt,Ng=new Va;class Bn{constructor(e=0,t=0,o=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=o,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,o,s=this._order){return this._x=e,this._y=t,this._z=o,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,o=!0){const s=e.elements,l=s[0],c=s[4],d=s[8],f=s[1],p=s[5],m=s[9],v=s[2],y=s[6],S=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(wt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-wt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,o){return Dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dg,t,o)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ng.setFromEuler(this),this.setFromQuaternion(Ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class A_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qE=0;const Ug=new re,ss=new Va,ai=new Qt,tu=new re,ga=new re,KE=new re,ZE=new Va,Ig=new re(1,0,0),Fg=new re(0,1,0),kg=new re(0,0,1),Og={type:"added"},JE={type:"removed"},as={type:"childadded",child:null},Bd={type:"childremoved",child:null};class Pn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new re,t=new Bn,o=new Va,s=new re(1,1,1);function l(){o.setFromEuler(t,!1)}function c(){t.setFromQuaternion(o,void 0,!1)}t._onChange(l),o._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new gt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new A_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Ig,e)}rotateY(e){return this.rotateOnAxis(Fg,e)}rotateZ(e){return this.rotateOnAxis(kg,e)}translateOnAxis(e,t){return Ug.copy(e).applyQuaternion(this.quaternion),this.position.add(Ug.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ig,e)}translateY(e){return this.translateOnAxis(Fg,e)}translateZ(e){return this.translateOnAxis(kg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,o){e.isVector3?tu.copy(e):tu.set(e,t,o);const s=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(ga,tu,this.up):ai.lookAt(tu,ga,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(ai),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Og),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(JE),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Og),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let o=0,s=this.children.length;o<s;o++){const c=this.children[o].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,o=[]){this[e]===t&&o.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(e,t,o);return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,KE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,ZE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let o=0,s=t.length;o<s;o++)t[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let o=0,s=t.length;o<s;o++)t[o].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let o=0,s=t.length;o<s;o++)t[o].updateMatrixWorld(e)}updateWorldMatrix(e,t){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",o={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,m=f.length;p<m;p++){const v=f[p];l(e.shapes,v)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));s.material=d}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];s.animations.push(l(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),p=c(e.textures),m=c(e.images),v=c(e.shapes),y=c(e.skeletons),S=c(e.animations),E=c(e.nodes);d.length>0&&(o.geometries=d),f.length>0&&(o.materials=f),p.length>0&&(o.textures=p),m.length>0&&(o.images=m),v.length>0&&(o.shapes=v),y.length>0&&(o.skeletons=y),S.length>0&&(o.animations=S),E.length>0&&(o.nodes=E)}return o.object=s,o;function c(d){const f=[];for(const p in d){const m=d[p];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let o=0;o<e.children.length;o++){const s=e.children[o];this.add(s.clone())}return this}}Pn.DEFAULT_UP=new re(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cr=new re,li=new re,zd=new re,ui=new re,ls=new re,us=new re,Bg=new re,Hd=new re,Vd=new re,Gd=new re,Wd=new Jt,Xd=new Jt,jd=new Jt;class Rr{constructor(e=new re,t=new re,o=new re){this.a=e,this.b=t,this.c=o}static getNormal(e,t,o,s){s.subVectors(o,t),Cr.subVectors(e,t),s.cross(Cr);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,o,s,l){Cr.subVectors(s,t),li.subVectors(o,t),zd.subVectors(e,t);const c=Cr.dot(Cr),d=Cr.dot(li),f=Cr.dot(zd),p=li.dot(li),m=li.dot(zd),v=c*p-d*d;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(p*f-d*m)*y,E=(c*m-d*f)*y;return l.set(1-S-E,E,S)}static containsPoint(e,t,o,s){return this.getBarycoord(e,t,o,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,o,s,l,c,d,f){return this.getBarycoord(e,t,o,s,ui)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,ui.x),f.addScaledVector(c,ui.y),f.addScaledVector(d,ui.z),f)}static getInterpolatedAttribute(e,t,o,s,l,c){return Wd.setScalar(0),Xd.setScalar(0),jd.setScalar(0),Wd.fromBufferAttribute(e,t),Xd.fromBufferAttribute(e,o),jd.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Wd,l.x),c.addScaledVector(Xd,l.y),c.addScaledVector(jd,l.z),c}static isFrontFacing(e,t,o,s){return Cr.subVectors(o,t),li.subVectors(e,t),Cr.cross(li).dot(s)<0}set(e,t,o){return this.a.copy(e),this.b.copy(t),this.c.copy(o),this}setFromPointsAndIndices(e,t,o,s){return this.a.copy(e[t]),this.b.copy(e[o]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,o,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cr.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Cr.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,o,s,l){return Rr.getInterpolation(e,this.a,this.b,this.c,t,o,s,l)}containsPoint(e){return Rr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const o=this.a,s=this.b,l=this.c;let c,d;ls.subVectors(s,o),us.subVectors(l,o),Hd.subVectors(e,o);const f=ls.dot(Hd),p=us.dot(Hd);if(f<=0&&p<=0)return t.copy(o);Vd.subVectors(e,s);const m=ls.dot(Vd),v=us.dot(Vd);if(m>=0&&v<=m)return t.copy(s);const y=f*v-m*p;if(y<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(o).addScaledVector(ls,c);Gd.subVectors(e,l);const S=ls.dot(Gd),E=us.dot(Gd);if(E>=0&&S<=E)return t.copy(l);const M=S*p-f*E;if(M<=0&&p>=0&&E<=0)return d=p/(p-E),t.copy(o).addScaledVector(us,d);const x=m*E-S*v;if(x<=0&&v-m>=0&&S-E>=0)return Bg.subVectors(l,s),d=(v-m)/(v-m+(S-E)),t.copy(s).addScaledVector(Bg,d);const _=1/(x+M+y);return c=M*_,d=y*_,t.copy(o).addScaledVector(ls,c).addScaledVector(us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},nu={h:0,s:0,l:0};function $d(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ut{constructor(e,t,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,o)}set(e,t,o){if(t===void 0&&o===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,o);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,o,s=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=o,Pt.colorSpaceToWorking(this,s),this}setHSL(e,t,o,s=Pt.workingColorSpace){if(e=Eh(e,1),t=wt(t,0,1),o=wt(o,0,1),t===0)this.r=this.g=this.b=o;else{const l=o<=.5?o*(1+t):o+t-o*t,c=2*o-l;this.r=$d(c,l,e+1/3),this.g=$d(c,l,e),this.b=$d(c,l,e-1/3)}return Pt.colorSpaceToWorking(this,s),this}setStyle(e,t=On){function o(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=s[1],d=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return o(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return o(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return o(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){const o=b_[e.toLowerCase()];return o!==void 0?this.setHex(o,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Pt.workingToColorSpace(bn.copy(this),e),Math.round(wt(bn.r*255,0,255))*65536+Math.round(wt(bn.g*255,0,255))*256+Math.round(wt(bn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(bn.copy(this),t);const o=bn.r,s=bn.g,l=bn.b,c=Math.max(o,s,l),d=Math.min(o,s,l);let f,p;const m=(d+c)/2;if(d===c)f=0,p=0;else{const v=c-d;switch(p=m<=.5?v/(c+d):v/(2-c-d),c){case o:f=(s-l)/v+(s<l?6:0);break;case s:f=(l-o)/v+2;break;case l:f=(o-s)/v+4;break}f/=6}return e.h=f,e.s=p,e.l=m,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=On){Pt.workingToColorSpace(bn.copy(this),e);const t=bn.r,o=bn.g,s=bn.b;return e!==On?`color(${e} ${t.toFixed(3)} ${o.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(o*255)},${Math.round(s*255)})`}offsetHSL(e,t,o){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+o)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,o){return this.r=e.r+(t.r-e.r)*o,this.g=e.g+(t.g-e.g)*o,this.b=e.b+(t.b-e.b)*o,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(nu);const o=Ca(ji.h,nu.h,t),s=Ca(ji.s,nu.s,t),l=Ca(ji.l,nu.l,t);return this.setHSL(o,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,o=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*o+l[6]*s,this.g=l[1]*t+l[4]*o+l[7]*s,this.b=l[2]*t+l[5]*o+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Ut;Ut.NAMES=b_;let QE=0;class Bu extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=xs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vf,this.blendDst=_f,this.blendEquation=Mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(o):s&&s.isVector3&&o&&o.isVector3?s.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const o={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.shadowSide!==null&&(o.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(o.blending=this.blending),this.side!==Ki&&(o.side=this.side),this.vertexColors===!0&&(o.vertexColors=!0),this.opacity<1&&(o.opacity=this.opacity),this.transparent===!0&&(o.transparent=!0),this.blendSrc!==vf&&(o.blendSrc=this.blendSrc),this.blendDst!==_f&&(o.blendDst=this.blendDst),this.blendEquation!==Mo&&(o.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(o.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(o.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(o.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(o.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(o.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(o.depthFunc=this.depthFunc),this.depthTest===!1&&(o.depthTest=this.depthTest),this.depthWrite===!1&&(o.depthWrite=this.depthWrite),this.colorWrite===!1&&(o.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(o.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wg&&(o.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(o.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(o.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(o.stencilFail=this.stencilFail),this.stencilZFail!==es&&(o.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(o.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(o.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(o.rotation=this.rotation),this.polygonOffset===!0&&(o.polygonOffset=!0),this.polygonOffsetFactor!==0&&(o.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(o.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(o.linewidth=this.linewidth),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.dithering===!0&&(o.dithering=!0),this.alphaTest>0&&(o.alphaTest=this.alphaTest),this.alphaHash===!0&&(o.alphaHash=!0),this.alphaToCoverage===!0&&(o.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(o.premultipliedAlpha=!0),this.forceSinglePass===!0&&(o.forceSinglePass=!0),this.wireframe===!0&&(o.wireframe=!0),this.wireframeLinewidth>1&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(o.flatShading=!0),this.visible===!1&&(o.visible=!1),this.toneMapped===!1&&(o.toneMapped=!1),this.fog===!1&&(o.fog=!1),Object.keys(this.userData).length>0&&(o.userData=this.userData);function s(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}if(t){const l=s(e.textures),c=s(e.images);l.length>0&&(o.textures=l),c.length>0&&(o.images=c)}return o}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let o=null;if(t!==null){const s=t.length;o=new Array(s);for(let l=0;l!==s;++l)o[l]=t[l].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Th extends Bu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=m_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new re,ru=new Dt;let eM=0;class jr{constructor(e,t,o=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=o,this.usage=Tg,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,o){e*=this.itemSize,o*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[o+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,o=this.count;t<o;t++)ru.fromBufferAttribute(this,t),ru.applyMatrix3(e),this.setXY(t,ru.x,ru.y);else if(this.itemSize===3)for(let t=0,o=this.count;t<o;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,o=this.count;t<o;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,o=this.count;t<o;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,o=this.count;t<o;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let o=this.array[e*this.itemSize+t];return this.normalized&&(o=gs(o,this.array)),o}setComponent(e,t,o){return this.normalized&&(o=Fn(o,this.array)),this.array[e*this.itemSize+t]=o,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,o){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),o=Fn(o,this.array)),this.array[e+0]=t,this.array[e+1]=o,this}setXYZ(e,t,o,s){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),o=Fn(o,this.array),s=Fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=s,this}setXYZW(e,t,o,s,l){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),o=Fn(o,this.array),s=Fn(s,this.array),l=Fn(l,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tg&&(e.usage=this.usage),e}}class P_ extends jr{constructor(e,t,o){super(new Uint16Array(e),t,o)}}class L_ extends jr{constructor(e,t,o){super(new Uint32Array(e),t,o)}}class Ro extends jr{constructor(e,t,o){super(new Float32Array(e),t,o)}}let tM=0;const cr=new Qt,Yd=new Pn,cs=new re,nr=new Ga,va=new Ga,mn=new re;class Po extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C_(e)?L_:P_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,o=0){this.groups.push({start:e,count:t,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const o=this.attributes.normal;if(o!==void 0){const l=new gt().getNormalMatrix(e);o.applyNormalMatrix(l),o.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cr.makeRotationFromQuaternion(e),this.applyMatrix4(cr),this}rotateX(e){return cr.makeRotationX(e),this.applyMatrix4(cr),this}rotateY(e){return cr.makeRotationY(e),this.applyMatrix4(cr),this}rotateZ(e){return cr.makeRotationZ(e),this.applyMatrix4(cr),this}translate(e,t,o){return cr.makeTranslation(e,t,o),this.applyMatrix4(cr),this}scale(e,t,o){return cr.makeScale(e,t,o),this.applyMatrix4(cr),this}lookAt(e){return Yd.lookAt(e),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const o=[];for(let s=0,l=e.length;s<l;s++){const c=e[s];o.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ro(o,3))}else{const o=Math.min(e.length,t.count);for(let s=0;s<o;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const l=t[o];nr.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,nr.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,nr.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(nr.min),this.boundingBox.expandByPoint(nr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const o=this.boundingSphere.center;if(nr.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];va.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(nr.min,va.min),nr.expandByPoint(mn),mn.addVectors(nr.max,va.max),nr.expandByPoint(mn)):(nr.expandByPoint(va.min),nr.expandByPoint(va.max))}nr.getCenter(o);let s=0;for(let l=0,c=e.count;l<c;l++)mn.fromBufferAttribute(e,l),s=Math.max(s,o.distanceToSquared(mn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,m=d.count;p<m;p++)mn.fromBufferAttribute(d,p),f&&(cs.fromBufferAttribute(e,p),mn.add(cs)),s=Math.max(s,o.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const o=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jr(new Float32Array(4*o.count),4));const c=this.getAttribute("tangent"),d=[],f=[];for(let X=0;X<o.count;X++)d[X]=new re,f[X]=new re;const p=new re,m=new re,v=new re,y=new Dt,S=new Dt,E=new Dt,M=new re,x=new re;function _(X,b,C){p.fromBufferAttribute(o,X),m.fromBufferAttribute(o,b),v.fromBufferAttribute(o,C),y.fromBufferAttribute(l,X),S.fromBufferAttribute(l,b),E.fromBufferAttribute(l,C),m.sub(p),v.sub(p),S.sub(y),E.sub(y);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(V),x.copy(v).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(V),d[X].add(M),d[b].add(M),d[C].add(M),f[X].add(x),f[b].add(x),f[C].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let X=0,b=L.length;X<b;++X){const C=L[X],V=C.start,ae=C.count;for(let J=V,ee=V+ae;J<ee;J+=3)_(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const P=new re,A=new re,G=new re,I=new re;function k(X){G.fromBufferAttribute(s,X),I.copy(G);const b=d[X];P.copy(b),P.sub(G.multiplyScalar(G.dot(b))).normalize(),A.crossVectors(I,b);const V=A.dot(f[X])<0?-1:1;c.setXYZW(X,P.x,P.y,P.z,V)}for(let X=0,b=L.length;X<b;++X){const C=L[X],V=C.start,ae=C.count;for(let J=V,ee=V+ae;J<ee;J+=3)k(e.getX(J+0)),k(e.getX(J+1)),k(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new jr(new Float32Array(t.count*3),3),this.setAttribute("normal",o);else for(let y=0,S=o.count;y<S;y++)o.setXYZ(y,0,0,0);const s=new re,l=new re,c=new re,d=new re,f=new re,p=new re,m=new re,v=new re;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),M=e.getX(y+1),x=e.getX(y+2);s.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,x),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),d.fromBufferAttribute(o,E),f.fromBufferAttribute(o,M),p.fromBufferAttribute(o,x),d.add(m),f.add(m),p.add(m),o.setXYZ(E,d.x,d.y,d.z),o.setXYZ(M,f.x,f.y,f.z),o.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)s.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),c.fromBufferAttribute(t,y+2),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),o.setXYZ(y+0,m.x,m.y,m.z),o.setXYZ(y+1,m.x,m.y,m.z),o.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,o=e.count;t<o;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(d,f){const p=d.array,m=d.itemSize,v=d.normalized,y=new p.constructor(f.length*m);let S=0,E=0;for(let M=0,x=f.length;M<x;M++){d.isInterleavedBufferAttribute?S=f[M]*d.data.stride+d.offset:S=f[M]*m;for(let _=0;_<m;_++)y[E++]=p[S++]}return new jr(y,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Po,o=this.index.array,s=this.attributes;for(const d in s){const f=s[d],p=e(f,o);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let m=0,v=p.length;m<v;m++){const y=p[m],S=e(y,o);f.push(S)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const p=c[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const o=this.attributes;for(const f in o){const p=o[f];e.data.attributes[f]=p.toJSON(e.data)}const s={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],m=[];for(let v=0,y=p.length;v<y;v++){const S=p[v];m.push(S.toJSON(e.data))}m.length>0&&(s[f]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const o=e.index;o!==null&&this.setIndex(o.clone());const s=e.attributes;for(const p in s){const m=s[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],v=l[p];for(let y=0,S=v.length;y<S;y++)m.push(v[y].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zg=new Qt,go=new jE,iu=new wh,Hg=new re,ou=new re,su=new re,au=new re,qd=new re,lu=new re,Vg=new re,uu=new re;class Gr extends Pn{constructor(e=new Po,t=new Th){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,o=Object.keys(t);if(o.length>0){const s=t[o[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const d=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const o=this.geometry,s=o.attributes.position,l=o.morphAttributes.position,c=o.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(l&&d){lu.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const m=d[f],v=l[f];m!==0&&(qd.fromBufferAttribute(v,e),c?lu.addScaledVector(qd,m):lu.addScaledVector(qd.sub(t),m))}t.add(lu)}return t}raycast(e,t){const o=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),iu.copy(o.boundingSphere),iu.applyMatrix4(l),go.copy(e.ray).recast(e.near),!(iu.containsPoint(go.origin)===!1&&(go.intersectSphere(iu,Hg)===null||go.origin.distanceToSquared(Hg)>(e.far-e.near)**2))&&(zg.copy(l).invert(),go.copy(e.ray).applyMatrix4(zg),!(o.boundingBox!==null&&go.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(e,t,go)))}_computeIntersections(e,t,o){let s;const l=this.geometry,c=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,M=y.length;E<M;E++){const x=y[E],_=c[x.materialIndex],L=Math.max(x.start,S.start),P=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let A=L,G=P;A<G;A+=3){const I=d.getX(A),k=d.getX(A+1),X=d.getX(A+2);s=cu(this,_,e,o,p,m,v,I,k,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let x=E,_=M;x<_;x+=3){const L=d.getX(x),P=d.getX(x+1),A=d.getX(x+2);s=cu(this,c,e,o,p,m,v,L,P,A),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,M=y.length;E<M;E++){const x=y[E],_=c[x.materialIndex],L=Math.max(x.start,S.start),P=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let A=L,G=P;A<G;A+=3){const I=A,k=A+1,X=A+2;s=cu(this,_,e,o,p,m,v,I,k,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let x=E,_=M;x<_;x+=3){const L=x,P=x+1,A=x+2;s=cu(this,c,e,o,p,m,v,L,P,A),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function nM(r,e,t,o,s,l,c,d){let f;if(e.side===Yn?f=o.intersectTriangle(c,l,s,!0,d):f=o.intersectTriangle(s,l,c,e.side===Ki,d),f===null)return null;uu.copy(d),uu.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(uu);return p<t.near||p>t.far?null:{distance:p,point:uu.clone(),object:r}}function cu(r,e,t,o,s,l,c,d,f,p){r.getVertexPosition(d,ou),r.getVertexPosition(f,su),r.getVertexPosition(p,au);const m=nM(r,e,t,o,ou,su,au,Vg);if(m){const v=new re;Rr.getBarycoord(Vg,ou,su,au,v),s&&(m.uv=Rr.getInterpolatedAttribute(s,d,f,p,v,new Dt)),l&&(m.uv1=Rr.getInterpolatedAttribute(l,d,f,p,v,new Dt)),c&&(m.normal=Rr.getInterpolatedAttribute(c,d,f,p,v,new re),m.normal.dot(o.direction)>0&&m.normal.multiplyScalar(-1));const y={a:d,b:f,c:p,normal:new re,materialIndex:0};Rr.getNormal(ou,su,au,y.normal),m.face=y,m.barycoord=v}return m}class Ds extends Po{constructor(e=1,t=1,o=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:o,widthSegments:s,heightSegments:l,depthSegments:c};const d=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const f=[],p=[],m=[],v=[];let y=0,S=0;E("z","y","x",-1,-1,o,t,e,c,l,0),E("z","y","x",1,-1,o,t,-e,c,l,1),E("x","z","y",1,1,e,o,t,s,c,2),E("x","z","y",1,-1,e,o,-t,s,c,3),E("x","y","z",1,-1,e,t,o,s,l,4),E("x","y","z",-1,-1,e,t,-o,s,l,5),this.setIndex(f),this.setAttribute("position",new Ro(p,3)),this.setAttribute("normal",new Ro(m,3)),this.setAttribute("uv",new Ro(v,2));function E(M,x,_,L,P,A,G,I,k,X,b){const C=A/k,V=G/X,ae=A/2,J=G/2,ee=I/2,fe=k+1,ue=X+1;let he=0,z=0;const de=new re;for(let le=0;le<ue;le++){const F=le*V-J;for(let oe=0;oe<fe;oe++){const Oe=oe*C-ae;de[M]=Oe*L,de[x]=F*P,de[_]=ee,p.push(de.x,de.y,de.z),de[M]=0,de[x]=0,de[_]=I>0?1:-1,m.push(de.x,de.y,de.z),v.push(oe/k),v.push(1-le/X),he+=1}}for(let le=0;le<X;le++)for(let F=0;F<k;F++){const oe=y+F+fe*le,Oe=y+F+fe*(le+1),ne=y+(F+1)+fe*(le+1),me=y+(F+1)+fe*le;f.push(oe,Oe,me),f.push(Oe,ne,me),z+=6}d.addGroup(S,z,b),S+=z,y+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(r){const e={};for(const t in r){e[t]={};for(const o in r[t]){const s=r[t][o];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][o]=null):e[t][o]=s.clone():Array.isArray(s)?e[t][o]=s.slice():e[t][o]=s}}return e}function kn(r){const e={};for(let t=0;t<r.length;t++){const o=Cs(r[t]);for(const s in o)e[s]=o[s]}return e}function rM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function D_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const iM={clone:Cs,merge:kn};var oM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Bu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oM,this.fragmentShader=sM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const o={};for(const s in this.extensions)this.extensions[s]===!0&&(o[s]=!0);return Object.keys(o).length>0&&(t.extensions=o),t}}class N_ extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new re,Gg=new Dt,Wg=new Dt;class hr extends N_{constructor(e=50,t=1,o=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,o){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Gg,Wg),t.subVectors(Wg,Gg)}setViewOffset(e,t,o,s,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ta*.5*this.fov)/this.zoom,o=2*t,s=this.aspect*o,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,p=c.fullHeight;l+=c.offsetX*s/f,t-=c.offsetY*o/p,s*=c.width/f,o*=c.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-o,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ds=-90,fs=1;class aM extends Pn{constructor(e,t,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hr(ds,fs,e,t);s.layers=this.layers,this.add(s);const l=new hr(ds,fs,e,t);l.layers=this.layers,this.add(l);const c=new hr(ds,fs,e,t);c.layers=this.layers,this.add(c);const d=new hr(ds,fs,e,t);d.layers=this.layers,this.add(d);const f=new hr(ds,fs,e,t);f.layers=this.layers,this.add(f);const p=new hr(ds,fs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[o,s,l,c,d,f]=t;for(const p of t)this.remove(p);if(e===pi)o.up.set(0,1,0),o.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Nu)o.up.set(0,-1,0),o.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:o,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,f,p,m]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=o.texture.generateMipmaps;o.texture.generateMipmaps=!1,e.setRenderTarget(o,0,s),e.render(t,l),e.setRenderTarget(o,1,s),e.render(t,c),e.setRenderTarget(o,2,s),e.render(t,d),e.setRenderTarget(o,3,s),e.render(t,f),e.setRenderTarget(o,4,s),e.render(t,p),o.texture.generateMipmaps=M,e.setRenderTarget(o,5,s),e.render(t,m),e.setRenderTarget(v,y,S),e.xr.enabled=E,o.texture.needsPMREMUpdate=!0}}class U_ extends zn{constructor(e=[],t=Ms,o,s,l,c,d,f,p,m){super(e,t,o,s,l,c,d,f,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lM extends bo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const o={width:e,height:e,depth:1},s=[o,o,o,o,o,o];this.texture=new U_(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const o={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ds(5,5,5),l=new Zi({name:"CubemapFromEquirect",uniforms:Cs(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:Yn,blending:qi});l.uniforms.tEquirect.value=t;const c=new Gr(s,l),d=t.minFilter;return t.minFilter===Co&&(t.minFilter=Vr),new aM(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,o=!0,s=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,o,s);e.setRenderTarget(l)}}class Ea extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uM={type:"move"};class Kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const o of e.hand.values())this._getHandJoint(t,o)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,o){let s=null,l=null,c=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,o),_=this._getHandJoint(p,M);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=m.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,o),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(s=t.getPose(e.targetRaySpace,o),s===null&&l!==null&&(s=l),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return d!==null&&(d.visible=s!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const o=new Ea;o.matrixAutoUpdate=!1,o.visible=!1,e.joints[t.jointName]=o,e.add(o)}return e.joints[t.jointName]}}class cM extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zd=new re,dM=new re,fM=new gt;class yo{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,o,s){return this.normal.set(e,t,o),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,o){const s=Zd.subVectors(o,t).cross(dM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const o=e.delta(Zd),s=this.normal.dot(o);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(o,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return t<0&&o>0||o<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const o=t||fM.getNormalMatrix(e),s=this.coplanarPoint(Zd).applyMatrix4(e),l=this.normal.applyMatrix3(o).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vo=new wh,hM=new Dt(.5,.5),du=new re;class Ch{constructor(e=new yo,t=new yo,o=new yo,s=new yo,l=new yo,c=new yo){this.planes=[e,t,o,s,l,c]}set(e,t,o,s,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(o),d[3].copy(s),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let o=0;o<6;o++)t[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e,t=pi){const o=this.planes,s=e.elements,l=s[0],c=s[1],d=s[2],f=s[3],p=s[4],m=s[5],v=s[6],y=s[7],S=s[8],E=s[9],M=s[10],x=s[11],_=s[12],L=s[13],P=s[14],A=s[15];if(o[0].setComponents(f-l,y-p,x-S,A-_).normalize(),o[1].setComponents(f+l,y+p,x+S,A+_).normalize(),o[2].setComponents(f+c,y+m,x+E,A+L).normalize(),o[3].setComponents(f-c,y-m,x-E,A-L).normalize(),o[4].setComponents(f-d,y-v,x-M,A-P).normalize(),t===pi)o[5].setComponents(f+d,y+v,x+M,A+P).normalize();else if(t===Nu)o[5].setComponents(d,v,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vo)}intersectsSprite(e){vo.center.set(0,0,0);const t=hM.distanceTo(e.center);return vo.radius=.7071067811865476+t,vo.applyMatrix4(e.matrixWorld),this.intersectsSphere(vo)}intersectsSphere(e){const t=this.planes,o=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(o)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let o=0;o<6;o++){const s=t[o];if(du.x=s.normal.x>0?e.max.x:e.min.x,du.y=s.normal.y>0?e.max.y:e.min.y,du.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(du)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let o=0;o<6;o++)if(t[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class I_ extends zn{constructor(e,t,o=Ao,s,l,c,d=yn,f=yn,p,m=Da,v=1){if(m!==Da&&m!==Na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:v};super(y,s,l,c,d,f,m,o,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zu extends Po{constructor(e=1,t=1,o=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:o,heightSegments:s};const l=e/2,c=t/2,d=Math.floor(o),f=Math.floor(s),p=d+1,m=f+1,v=e/d,y=t/f,S=[],E=[],M=[],x=[];for(let _=0;_<m;_++){const L=_*y-c;for(let P=0;P<p;P++){const A=P*v-l;E.push(A,-L,0),M.push(0,0,1),x.push(P/d),x.push(1-_/f)}}for(let _=0;_<f;_++)for(let L=0;L<d;L++){const P=L+p*_,A=L+p*(_+1),G=L+1+p*(_+1),I=L+1+p*_;S.push(P,A,I),S.push(A,G,I)}this.setIndex(S),this.setAttribute("position",new Ro(E,3)),this.setAttribute("normal",new Ro(M,3)),this.setAttribute("uv",new Ro(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zu(e.width,e.height,e.widthSegments,e.heightSegments)}}class pM extends Bu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mM extends Bu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jd={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class gM{constructor(e,t,o){const s=this;let l=!1,c=0,d=0,f;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=o,this.itemStart=function(m){d++,l===!1&&s.onStart!==void 0&&s.onStart(m,c,d),l=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,d),c===d&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,v){return p.push(m,v),this},this.removeHandler=function(m){const v=p.indexOf(m);return v!==-1&&p.splice(v,2),this},this.getHandler=function(m){for(let v=0,y=p.length;v<y;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(m))return E}return null}}}const vM=new gM;class Rh{constructor(e){this.manager=e!==void 0?e:vM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const o=this;return new Promise(function(s,l){o.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rh.DEFAULT_MATERIAL_NAME="__DEFAULT";const hs=new WeakMap;class _M extends Rh{constructor(e){super(e)}load(e,t,o,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Jd.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let v=hs.get(c);v===void 0&&(v=[],hs.set(c,v)),v.push({onLoad:t,onError:s})}return c}const d=Ia("img");function f(){m(),t&&t(this);const v=hs.get(this)||[];for(let y=0;y<v.length;y++){const S=v[y];S.onLoad&&S.onLoad(this)}hs.delete(this),l.manager.itemEnd(e)}function p(v){m(),s&&s(v),Jd.remove(`image:${e}`);const y=hs.get(this)||[];for(let S=0;S<y.length;S++){const E=y[S];E.onError&&E.onError(v)}hs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){d.removeEventListener("load",f,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",f,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Jd.add(`image:${e}`,d),l.manager.itemStart(e),d.src=e,d}}class xM extends Rh{constructor(e){super(e)}load(e,t,o,s){const l=new zn,c=new _M(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){l.image=d,l.needsUpdate=!0,t!==void 0&&t(l)},o,s),l}}class yM extends Pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Qd=new Qt,Xg=new re,jg=new re;class SM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Yr,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ch,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,o=this.matrix;Xg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xg),jg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jg),t.updateMatrixWorld(),Qd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd),o.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),o.multiply(Qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class F_ extends N_{constructor(e=-1,t=1,o=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=o,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,o,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=o-e,c=o+e,d=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,d-=m*this.view.offsetY,f=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class EM extends SM{constructor(){super(new F_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class MM extends yM{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new EM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wM extends hr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function $g(r,e,t,o){const s=TM(o);switch(t){case y_:return r*e;case E_:return r*e/s.components*s.byteLength;case xh:return r*e/s.components*s.byteLength;case M_:return r*e*2/s.components*s.byteLength;case yh:return r*e*2/s.components*s.byteLength;case S_:return r*e*3/s.components*s.byteLength;case Ar:return r*e*4/s.components*s.byteLength;case Sh:return r*e*4/s.components*s.byteLength;case Eu:case Mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wu:case Tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pf:case Df:return Math.max(r,16)*Math.max(e,8)/4;case bf:case Lf:return Math.max(r,8)*Math.max(e,8)/2;case Nf:case Uf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case If:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Of:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case zf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case jf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case $f:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case qf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Cu:case Kf:case Zf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case w_:case Jf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Qf:case eh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function TM(r){switch(r){case Yr:case v_:return{byteLength:1,components:1};case Pa:case __:case Ha:return{byteLength:2,components:1};case vh:case _h:return{byteLength:2,components:4};case Ao:case gh:case hi:return{byteLength:4,components:1};case x_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);function k_(){let r=null,e=!1,t=null,o=null;function s(l,c){t(l,c),o=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(o=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function CM(r){const e=new WeakMap;function t(d,f){const p=d.array,m=d.usage,v=p.byteLength,y=r.createBuffer();r.bindBuffer(f,y),r.bufferData(f,p,m),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function o(d,f,p){const m=f.array,v=f.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,m);else{v.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<v.length;S++){const E=v[y],M=v[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++y,v[y]=M)}v.length=y+1;for(let S=0,E=v.length;S<E;S++){const M=v[S];r.bufferSubData(p,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(r.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(p.buffer,d,f),p.version=d.version}}return{get:s,remove:l,update:c}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
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
#endif`,bM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
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
#endif`,UM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
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
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zM=`#ifdef USE_IRIDESCENCE
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
#endif`,HM=`#ifdef USE_BUMPMAP
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
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,KM=`#define PI 3.141592653589793
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
} // validated`,ZM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JM=`vec3 transformedNormal = objectNormal;
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
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ew=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rw="gl_FragColor = linearToOutputTexel( gl_FragColor );",iw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ow=`#ifdef USE_ENVMAP
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
#endif`,sw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aw=`#ifdef USE_ENVMAP
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
#endif`,lw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uw=`#ifdef USE_ENVMAP
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
#endif`,cw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pw=`#ifdef USE_GRADIENTMAP
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
}`,mw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_w=`uniform bool receiveShadow;
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
#endif`,xw=`#ifdef USE_ENVMAP
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
#endif`,yw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ew=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ww=`PhysicalMaterial material;
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
#endif`,Tw=`struct PhysicalMaterial {
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
}`,Cw=`
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
#endif`,Rw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Aw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fw=`#if defined( USE_POINTS_UV )
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
#endif`,kw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ow=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vw=`#ifdef USE_MORPHTARGETS
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
#endif`,Gw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ww=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qw=`#ifdef USE_NORMALMAP
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
#endif`,Kw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dT=`float getShadowMask() {
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
}`,fT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hT=`#ifdef USE_SKINNING
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
#endif`,pT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mT=`#ifdef USE_SKINNING
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
#endif`,gT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yT=`#ifdef USE_TRANSMISSION
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
#endif`,ST=`#ifdef USE_TRANSMISSION
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
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RT=`uniform sampler2D t2D;
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
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,PT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`#include <common>
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
}`,NT=`#if DEPTH_PACKING == 3200
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
}`,UT=`#define DISTANCE
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
}`,IT=`#define DISTANCE
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
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`uniform float scale;
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
}`,BT=`uniform vec3 diffuse;
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
}`,zT=`#include <common>
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
}`,HT=`uniform vec3 diffuse;
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
}`,VT=`#define LAMBERT
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
}`,GT=`#define LAMBERT
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
}`,WT=`#define MATCAP
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
}`,XT=`#define MATCAP
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
}`,jT=`#define NORMAL
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
}`,$T=`#define NORMAL
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
}`,YT=`#define PHONG
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
}`,qT=`#define PHONG
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
}`,KT=`#define STANDARD
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
}`,ZT=`#define STANDARD
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
}`,JT=`#define TOON
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
}`,QT=`#define TOON
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
}`,e1=`uniform float size;
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,r1=`uniform vec3 color;
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
}`,i1=`uniform float rotation;
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
}`,o1=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:RM,alphahash_pars_fragment:AM,alphamap_fragment:bM,alphamap_pars_fragment:PM,alphatest_fragment:LM,alphatest_pars_fragment:DM,aomap_fragment:NM,aomap_pars_fragment:UM,batching_pars_vertex:IM,batching_vertex:FM,begin_vertex:kM,beginnormal_vertex:OM,bsdfs:BM,iridescence_fragment:zM,bumpmap_pars_fragment:HM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:GM,clipping_planes_pars_vertex:WM,clipping_planes_vertex:XM,color_fragment:jM,color_pars_fragment:$M,color_pars_vertex:YM,color_vertex:qM,common:KM,cube_uv_reflection_fragment:ZM,defaultnormal_vertex:JM,displacementmap_pars_vertex:QM,displacementmap_vertex:ew,emissivemap_fragment:tw,emissivemap_pars_fragment:nw,colorspace_fragment:rw,colorspace_pars_fragment:iw,envmap_fragment:ow,envmap_common_pars_fragment:sw,envmap_pars_fragment:aw,envmap_pars_vertex:lw,envmap_physical_pars_fragment:xw,envmap_vertex:uw,fog_vertex:cw,fog_pars_vertex:dw,fog_fragment:fw,fog_pars_fragment:hw,gradientmap_pars_fragment:pw,lightmap_pars_fragment:mw,lights_lambert_fragment:gw,lights_lambert_pars_fragment:vw,lights_pars_begin:_w,lights_toon_fragment:yw,lights_toon_pars_fragment:Sw,lights_phong_fragment:Ew,lights_phong_pars_fragment:Mw,lights_physical_fragment:ww,lights_physical_pars_fragment:Tw,lights_fragment_begin:Cw,lights_fragment_maps:Rw,lights_fragment_end:Aw,logdepthbuf_fragment:bw,logdepthbuf_pars_fragment:Pw,logdepthbuf_pars_vertex:Lw,logdepthbuf_vertex:Dw,map_fragment:Nw,map_pars_fragment:Uw,map_particle_fragment:Iw,map_particle_pars_fragment:Fw,metalnessmap_fragment:kw,metalnessmap_pars_fragment:Ow,morphinstance_vertex:Bw,morphcolor_vertex:zw,morphnormal_vertex:Hw,morphtarget_pars_vertex:Vw,morphtarget_vertex:Gw,normal_fragment_begin:Ww,normal_fragment_maps:Xw,normal_pars_fragment:jw,normal_pars_vertex:$w,normal_vertex:Yw,normalmap_pars_fragment:qw,clearcoat_normal_fragment_begin:Kw,clearcoat_normal_fragment_maps:Zw,clearcoat_pars_fragment:Jw,iridescence_pars_fragment:Qw,opaque_fragment:eT,packing:tT,premultiplied_alpha_fragment:nT,project_vertex:rT,dithering_fragment:iT,dithering_pars_fragment:oT,roughnessmap_fragment:sT,roughnessmap_pars_fragment:aT,shadowmap_pars_fragment:lT,shadowmap_pars_vertex:uT,shadowmap_vertex:cT,shadowmask_pars_fragment:dT,skinbase_vertex:fT,skinning_pars_vertex:hT,skinning_vertex:pT,skinnormal_vertex:mT,specularmap_fragment:gT,specularmap_pars_fragment:vT,tonemapping_fragment:_T,tonemapping_pars_fragment:xT,transmission_fragment:yT,transmission_pars_fragment:ST,uv_pars_fragment:ET,uv_pars_vertex:MT,uv_vertex:wT,worldpos_vertex:TT,background_vert:CT,background_frag:RT,backgroundCube_vert:AT,backgroundCube_frag:bT,cube_vert:PT,cube_frag:LT,depth_vert:DT,depth_frag:NT,distanceRGBA_vert:UT,distanceRGBA_frag:IT,equirect_vert:FT,equirect_frag:kT,linedashed_vert:OT,linedashed_frag:BT,meshbasic_vert:zT,meshbasic_frag:HT,meshlambert_vert:VT,meshlambert_frag:GT,meshmatcap_vert:WT,meshmatcap_frag:XT,meshnormal_vert:jT,meshnormal_frag:$T,meshphong_vert:YT,meshphong_frag:qT,meshphysical_vert:KT,meshphysical_frag:ZT,meshtoon_vert:JT,meshtoon_frag:QT,points_vert:e1,points_frag:t1,shadow_vert:n1,shadow_frag:r1,sprite_vert:i1,sprite_frag:o1},ke={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Or={basic:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ut(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:kn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:kn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ut(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:kn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:kn([ke.points,ke.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:kn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:kn([ke.common,ke.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:kn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:kn([ke.sprite,ke.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:kn([ke.common,ke.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:kn([ke.lights,ke.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Or.physical={uniforms:kn([Or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const fu={r:0,b:0,g:0},_o=new Bn,s1=new Qt;function a1(r,e,t,o,s,l,c){const d=new Ut(0);let f=l===!0?0:1,p,m,v=null,y=0,S=null;function E(P){let A=P.isScene===!0?P.background:null;return A&&A.isTexture&&(A=(P.backgroundBlurriness>0?t:e).get(A)),A}function M(P){let A=!1;const G=E(P);G===null?_(d,f):G&&G.isColor&&(_(G,1),A=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?o.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&o.buffers.color.setClear(0,0,0,0,c),(r.autoClear||A)&&(o.buffers.depth.setTest(!0),o.buffers.depth.setMask(!0),o.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(P,A){const G=E(A);G&&(G.isCubeTexture||G.mapping===Ou)?(m===void 0&&(m=new Gr(new Ds(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Cs(Or.backgroundCube.uniforms),vertexShader:Or.backgroundCube.vertexShader,fragmentShader:Or.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,k,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),_o.copy(A.backgroundRotation),_o.x*=-1,_o.y*=-1,_o.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(_o.y*=-1,_o.z*=-1),m.material.uniforms.envMap.value=G,m.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(s1.makeRotationFromEuler(_o)),m.material.toneMapped=Pt.getTransfer(G.colorSpace)!==Ft,(v!==G||y!==G.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,v=G,y=G.version,S=r.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Gr(new zu(2,2),new Zi({name:"BackgroundMaterial",uniforms:Cs(Or.background.uniforms),vertexShader:Or.background.vertexShader,fragmentShader:Or.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(G.colorSpace)!==Ft,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||y!==G.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,v=G,y=G.version,S=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function _(P,A){P.getRGB(fu,D_(r)),o.buffers.color.setClear(fu.r,fu.g,fu.b,A,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,A=1){d.set(P),f=A,_(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,_(d,f)},render:M,addToRenderList:x,dispose:L}}function l1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),o={},s=y(null);let l=s,c=!1;function d(C,V,ae,J,ee){let fe=!1;const ue=v(J,ae,V);l!==ue&&(l=ue,p(l.object)),fe=S(C,J,ae,ee),fe&&E(C,J,ae,ee),ee!==null&&e.update(ee,r.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,A(C,V,ae,J),ee!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function f(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function m(C){return r.deleteVertexArray(C)}function v(C,V,ae){const J=ae.wireframe===!0;let ee=o[C.id];ee===void 0&&(ee={},o[C.id]=ee);let fe=ee[V.id];fe===void 0&&(fe={},ee[V.id]=fe);let ue=fe[J];return ue===void 0&&(ue=y(f()),fe[J]=ue),ue}function y(C){const V=[],ae=[],J=[];for(let ee=0;ee<t;ee++)V[ee]=0,ae[ee]=0,J[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ae,attributeDivisors:J,object:C,attributes:{},index:null}}function S(C,V,ae,J){const ee=l.attributes,fe=V.attributes;let ue=0;const he=ae.getAttributes();for(const z in he)if(he[z].location>=0){const le=ee[z];let F=fe[z];if(F===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),le===void 0||le.attribute!==F||F&&le.data!==F.data)return!0;ue++}return l.attributesNum!==ue||l.index!==J}function E(C,V,ae,J){const ee={},fe=V.attributes;let ue=0;const he=ae.getAttributes();for(const z in he)if(he[z].location>=0){let le=fe[z];le===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(le=C.instanceColor));const F={};F.attribute=le,le&&le.data&&(F.data=le.data),ee[z]=F,ue++}l.attributes=ee,l.attributesNum=ue,l.index=J}function M(){const C=l.newAttributes;for(let V=0,ae=C.length;V<ae;V++)C[V]=0}function x(C){_(C,0)}function _(C,V){const ae=l.newAttributes,J=l.enabledAttributes,ee=l.attributeDivisors;ae[C]=1,J[C]===0&&(r.enableVertexAttribArray(C),J[C]=1),ee[C]!==V&&(r.vertexAttribDivisor(C,V),ee[C]=V)}function L(){const C=l.newAttributes,V=l.enabledAttributes;for(let ae=0,J=V.length;ae<J;ae++)V[ae]!==C[ae]&&(r.disableVertexAttribArray(ae),V[ae]=0)}function P(C,V,ae,J,ee,fe,ue){ue===!0?r.vertexAttribIPointer(C,V,ae,ee,fe):r.vertexAttribPointer(C,V,ae,J,ee,fe)}function A(C,V,ae,J){M();const ee=J.attributes,fe=ae.getAttributes(),ue=V.defaultAttributeValues;for(const he in fe){const z=fe[he];if(z.location>=0){let de=ee[he];if(de===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),de!==void 0){const le=de.normalized,F=de.itemSize,oe=e.get(de);if(oe===void 0)continue;const Oe=oe.buffer,ne=oe.type,me=oe.bytesPerElement,Ce=ne===r.INT||ne===r.UNSIGNED_INT||de.gpuType===gh;if(de.isInterleavedBufferAttribute){const Se=de.data,Ae=Se.stride,Z=de.offset;if(Se.isInstancedInterleavedBuffer){for(let Ee=0;Ee<z.locationSize;Ee++)_(z.location+Ee,Se.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ee=0;Ee<z.locationSize;Ee++)x(z.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let Ee=0;Ee<z.locationSize;Ee++)P(z.location+Ee,F/z.locationSize,ne,le,Ae*me,(Z+F/z.locationSize*Ee)*me,Ce)}else{if(de.isInstancedBufferAttribute){for(let Se=0;Se<z.locationSize;Se++)_(z.location+Se,de.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Se=0;Se<z.locationSize;Se++)x(z.location+Se);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let Se=0;Se<z.locationSize;Se++)P(z.location+Se,F/z.locationSize,ne,le,F*me,F/z.locationSize*Se*me,Ce)}}else if(ue!==void 0){const le=ue[he];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(z.location,le);break;case 3:r.vertexAttrib3fv(z.location,le);break;case 4:r.vertexAttrib4fv(z.location,le);break;default:r.vertexAttrib1fv(z.location,le)}}}}L()}function G(){X();for(const C in o){const V=o[C];for(const ae in V){const J=V[ae];for(const ee in J)m(J[ee].object),delete J[ee];delete V[ae]}delete o[C]}}function I(C){if(o[C.id]===void 0)return;const V=o[C.id];for(const ae in V){const J=V[ae];for(const ee in J)m(J[ee].object),delete J[ee];delete V[ae]}delete o[C.id]}function k(C){for(const V in o){const ae=o[V];if(ae[C.id]===void 0)continue;const J=ae[C.id];for(const ee in J)m(J[ee].object),delete J[ee];delete ae[C.id]}}function X(){b(),c=!0,l!==s&&(l=s,p(l.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:X,resetDefaultState:b,dispose:G,releaseStatesOfGeometry:I,releaseStatesOfProgram:k,initAttributes:M,enableAttribute:x,disableUnusedAttributes:L}}function u1(r,e,t){let o;function s(p){o=p}function l(p,m){r.drawArrays(o,p,m),t.update(m,o,1)}function c(p,m,v){v!==0&&(r.drawArraysInstanced(o,p,m,v),t.update(m,o,v))}function d(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,p,0,m,0,v);let S=0;for(let E=0;E<v;E++)S+=m[E];t.update(S,o,1)}function f(p,m,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],m[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(o,p,0,m,0,y,0,v);let E=0;for(let M=0;M<v;M++)E+=m[M]*y[M];t.update(E,o,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function c1(r,e,t,o){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(k){return!(k!==Ar&&o.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const X=k===Ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Yr&&o.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==hi&&!X)}function f(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=f(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const v=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:G,maxSamples:I}}function d1(r){const e=this;let t=null,o=0,s=!1,l=!1;const c=new yo,d=new gt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||o!==0||s;return s=y,o=v.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=m(v,y,0)},this.setState=function(v,y,S){const E=v.clippingPlanes,M=v.clipIntersection,x=v.clipShadows,_=r.get(v);if(!s||E===null||E.length===0||l&&!x)l?m(null):p();else{const L=l?0:o,P=L*4;let A=_.clippingState||null;f.value=A,A=m(E,y,P,S);for(let G=0;G!==P;++G)A[G]=t[G];_.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function m(v,y,S,E){const M=v!==null?v.length:0;let x=null;if(M!==0){if(x=f.value,E!==!0||x===null){const _=S+M*4,L=y.matrixWorldInverse;d.getNormalMatrix(L),(x===null||x.length<_)&&(x=new Float32Array(_));for(let P=0,A=S;P!==M;++P,A+=4)c.copy(v[P]).applyMatrix4(L,d),c.normal.toArray(x,A),x[A+3]=c.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function f1(r){let e=new WeakMap;function t(c,d){return d===Cf?c.mapping=Ms:d===Rf&&(c.mapping=ws),c}function o(c){if(c&&c.isTexture){const d=c.mapping;if(d===Cf||d===Rf)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const p=new lM(f.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",s),t(p.texture,c.mapping)}else return null}}return c}function s(c){const d=c.target;d.removeEventListener("dispose",s);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:o,dispose:l}}const _s=4,Yg=[.125,.215,.35,.446,.526,.582],wo=20,ef=new F_,qg=new Ut;let tf=null,nf=0,rf=0,of=!1;const So=(1+Math.sqrt(5))/2,ps=1/So,Kg=[new re(-So,ps,0),new re(So,ps,0),new re(-ps,0,So),new re(ps,0,So),new re(0,So,-ps),new re(0,So,ps),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)],h1=new re;class Zg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,o=.1,s=100,l={}){const{size:c=256,position:d=h1}=l;tf=this._renderer.getRenderTarget(),nf=this._renderer.getActiveCubeFace(),rf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,o,s,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tf,nf,rf),this._renderer.xr.enabled=of,e.scissorTest=!1,hu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tf=this._renderer.getRenderTarget(),nf=this._renderer.getActiveCubeFace(),rf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const o=t||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,o={magFilter:Vr,minFilter:Vr,generateMipmaps:!1,type:Ha,format:Ar,colorSpace:Ts,depthBuffer:!1},s=Jg(e,t,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jg(e,t,o);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p1(l)),this._blurMaterial=m1(l,e,t)}return s}_compileMaterial(e){const t=new Gr(this._lodPlanes[0],e);this._renderer.compile(t,ef)}_sceneToCubeUV(e,t,o,s,l){const f=new hr(90,1,t,o),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(qg),v.toneMapping=gi,v.autoClear=!1;const E=new Th({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),M=new Gr(new Ds,E);let x=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,x=!0):(E.color.copy(qg),x=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(f.up.set(0,p[L],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+m[L],l.y,l.z)):P===1?(f.up.set(0,0,p[L]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+m[L],l.z)):(f.up.set(0,p[L],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+m[L]));const A=this._cubeSize;hu(s,P*A,L>2?A:0,A,A),v.setRenderTarget(s),x&&v.render(M,f),v.render(e,f)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=S,v.autoClear=y,e.background=_}_textureToCubeUV(e,t){const o=this._renderer,s=e.mapping===Ms||e.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qg());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new Gr(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;hu(t,0,0,3*f,2*f),o.setRenderTarget(t),o.render(c,ef)}_applyPMREM(e){const t=this._renderer,o=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Kg[(s-l-1)%Kg.length];this._blur(e,l-1,l,c,d)}t.autoClear=o}_blur(e,t,o,s,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,o,s,"latitudinal",l),this._halfBlur(c,e,o,o,s,"longitudinal",l)}_halfBlur(e,t,o,s,l,c,d){const f=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Gr(this._lodPlanes[s],p),y=p.uniforms,S=this._sizeLods[o]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*wo-1),M=l/E,x=isFinite(l)?1+Math.floor(m*M):wo;x>wo&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${wo}`);const _=[];let L=0;for(let k=0;k<wo;++k){const X=k/M,b=Math.exp(-X*X/2);_.push(b),k===0?L+=b:k<x&&(L+=2*b)}for(let k=0;k<_.length;k++)_[k]=_[k]/L;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=c==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=E,y.mipInt.value=P-o;const A=this._sizeLods[s],G=3*A*(s>P-_s?s-P+_s:0),I=4*(this._cubeSize-A);hu(t,G,I,3*A,2*A),f.setRenderTarget(t),f.render(v,ef)}}function p1(r){const e=[],t=[],o=[];let s=r;const l=r-_s+1+Yg.length;for(let c=0;c<l;c++){const d=Math.pow(2,s);t.push(d);let f=1/d;c>r-_s?f=Yg[c-r+_s-1]:c===0&&(f=0),o.push(f);const p=1/(d-2),m=-p,v=1+p,y=[m,m,v,m,v,v,m,m,v,v,m,v],S=6,E=6,M=3,x=2,_=1,L=new Float32Array(M*E*S),P=new Float32Array(x*E*S),A=new Float32Array(_*E*S);for(let I=0;I<S;I++){const k=I%3*2/3-1,X=I>2?0:-1,b=[k,X,0,k+2/3,X,0,k+2/3,X+1,0,k,X,0,k+2/3,X+1,0,k,X+1,0];L.set(b,M*E*I),P.set(y,x*E*I);const C=[I,I,I,I,I,I];A.set(C,_*E*I)}const G=new Po;G.setAttribute("position",new jr(L,M)),G.setAttribute("uv",new jr(P,x)),G.setAttribute("faceIndex",new jr(A,_)),e.push(G),s>_s&&s--}return{lodPlanes:e,sizeLods:t,sigmas:o}}function Jg(r,e,t){const o=new bo(r,e,t);return o.texture.mapping=Ou,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function hu(r,e,t,o,s){r.viewport.set(e,t,o,s),r.scissor.set(e,t,o,s)}function m1(r,e,t){const o=new Float32Array(wo),s=new re(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:wo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Qg(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function ev(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Ah(){return`

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
	`}function g1(r){let e=new WeakMap,t=null;function o(d){if(d&&d.isTexture){const f=d.mapping,p=f===Cf||f===Rf,m=f===Ms||f===ws;if(p||m){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new Zg(r)),v=p?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return p&&S&&S.height>0||m&&S&&s(S)?(t===null&&(t=new Zg(r)),v=p?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function s(d){let f=0;const p=6;for(let m=0;m<p;m++)d[m]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:o,dispose:c}}function v1(r){const e={};function t(o){if(e[o]!==void 0)return e[o];let s;switch(o){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(o)}return e[o]=s,s}return{has:function(o){return t(o)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(o){const s=t(o);return s===null&&ys("THREE.WebGLRenderer: "+o+" extension not supported."),s}}}function _1(r,e,t,o){const s={},l=new WeakMap;function c(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",c),delete s[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),o.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(v,y){return s[y.id]===!0||(y.addEventListener("dispose",c),s[y.id]=!0,t.memory.geometries++),y}function f(v){const y=v.attributes;for(const S in y)e.update(y[S],r.ARRAY_BUFFER)}function p(v){const y=[],S=v.index,E=v.attributes.position;let M=0;if(S!==null){const L=S.array;M=S.version;for(let P=0,A=L.length;P<A;P+=3){const G=L[P+0],I=L[P+1],k=L[P+2];y.push(G,I,I,k,k,G)}}else if(E!==void 0){const L=E.array;M=E.version;for(let P=0,A=L.length/3-1;P<A;P+=3){const G=P+0,I=P+1,k=P+2;y.push(G,I,I,k,k,G)}}else return;const x=new(C_(y)?L_:P_)(y,1);x.version=M;const _=l.get(v);_&&e.remove(_),l.set(v,x)}function m(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:d,update:f,getWireframeAttribute:m}}function x1(r,e,t){let o;function s(y){o=y}let l,c;function d(y){l=y.type,c=y.bytesPerElement}function f(y,S){r.drawElements(o,S,l,y*c),t.update(S,o,1)}function p(y,S,E){E!==0&&(r.drawElementsInstanced(o,S,l,y*c,E),t.update(S,o,E))}function m(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,S,0,l,y,0,E);let x=0;for(let _=0;_<E;_++)x+=S[_];t.update(x,o,1)}function v(y,S,E,M){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<y.length;_++)p(y[_]/c,S[_],M[_]);else{x.multiDrawElementsInstancedWEBGL(o,S,0,l,y,0,M,0,E);let _=0;for(let L=0;L<E;L++)_+=S[L]*M[L];t.update(_,o,1)}}this.setMode=s,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function y1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function o(l,c,d){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:o}}function S1(r,e,t){const o=new WeakMap,s=new Jt;function l(c,d,f){const p=c.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=m!==void 0?m.length:0;let y=o.get(d);if(y===void 0||y.count!==v){let b=function(){k.dispose(),o.delete(d),d.removeEventListener("dispose",b)};y!==void 0&&y.texture.dispose();const S=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let P=0;S===!0&&(P=1),E===!0&&(P=2),M===!0&&(P=3);let A=d.attributes.position.count*P,G=1;A>e.maxTextureSize&&(G=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const I=new Float32Array(A*G*4*v),k=new R_(I,A,G,v);k.type=hi,k.needsUpdate=!0;const X=P*4;for(let C=0;C<v;C++){const V=x[C],ae=_[C],J=L[C],ee=A*G*4*C;for(let fe=0;fe<V.count;fe++){const ue=fe*X;S===!0&&(s.fromBufferAttribute(V,fe),I[ee+ue+0]=s.x,I[ee+ue+1]=s.y,I[ee+ue+2]=s.z,I[ee+ue+3]=0),E===!0&&(s.fromBufferAttribute(ae,fe),I[ee+ue+4]=s.x,I[ee+ue+5]=s.y,I[ee+ue+6]=s.z,I[ee+ue+7]=0),M===!0&&(s.fromBufferAttribute(J,fe),I[ee+ue+8]=s.x,I[ee+ue+9]=s.y,I[ee+ue+10]=s.z,I[ee+ue+11]=J.itemSize===4?s.w:1)}}y={count:v,texture:k,size:new Dt(A,G)},o.set(d,y),d.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let S=0;for(let M=0;M<p.length;M++)S+=p[M];const E=d.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",E),f.getUniforms().setValue(r,"morphTargetInfluences",p)}f.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:l}}function E1(r,e,t,o){let s=new WeakMap;function l(f){const p=o.render.frame,m=f.geometry,v=e.get(f,m);if(s.get(v)!==p&&(e.update(v),s.set(v,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),s.get(f)!==p&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),s.set(f,p))),f.isSkinnedMesh){const y=f.skeleton;s.get(y)!==p&&(y.update(),s.set(y,p))}return v}function c(){s=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const O_=new zn,tv=new I_(1,1),B_=new R_,z_=new WE,H_=new U_,nv=[],rv=[],iv=new Float32Array(16),ov=new Float32Array(9),sv=new Float32Array(4);function Ns(r,e,t){const o=r[0];if(o<=0||o>0)return r;const s=e*t;let l=nv[s];if(l===void 0&&(l=new Float32Array(s),nv[s]=l),e!==0){o.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,r[c].toArray(l,d)}return l}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,o=r.length;t<o;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,o=e.length;t<o;t++)r[t]=e[t]}function Hu(r,e){let t=rv[e];t===void 0&&(t=new Int32Array(e),rv[e]=t);for(let o=0;o!==e;++o)t[o]=r.allocateTextureUnit();return t}function M1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function w1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function T1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function C1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function R1(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,o))return;sv.set(o),r.uniformMatrix2fv(this.addr,!1,sv),ln(t,o)}}function A1(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,o))return;ov.set(o),r.uniformMatrix3fv(this.addr,!1,ov),ln(t,o)}}function b1(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,o))return;iv.set(o),r.uniformMatrix4fv(this.addr,!1,iv),ln(t,o)}}function P1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function L1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}function D1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}function N1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}function U1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function I1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}function F1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}function k1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}function O1(r,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(r.uniform1i(this.addr,s),o[0]=s);let l;this.type===r.SAMPLER_2D_SHADOW?(tv.compareFunction=T_,l=tv):l=O_,t.setTexture2D(e||l,s)}function B1(r,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(r.uniform1i(this.addr,s),o[0]=s),t.setTexture3D(e||z_,s)}function z1(r,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(r.uniform1i(this.addr,s),o[0]=s),t.setTextureCube(e||H_,s)}function H1(r,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(r.uniform1i(this.addr,s),o[0]=s),t.setTexture2DArray(e||B_,s)}function V1(r){switch(r){case 5126:return M1;case 35664:return w1;case 35665:return T1;case 35666:return C1;case 35674:return R1;case 35675:return A1;case 35676:return b1;case 5124:case 35670:return P1;case 35667:case 35671:return L1;case 35668:case 35672:return D1;case 35669:case 35673:return N1;case 5125:return U1;case 36294:return I1;case 36295:return F1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return z1;case 36289:case 36303:case 36311:case 36292:return H1}}function G1(r,e){r.uniform1fv(this.addr,e)}function W1(r,e){const t=Ns(e,this.size,2);r.uniform2fv(this.addr,t)}function X1(r,e){const t=Ns(e,this.size,3);r.uniform3fv(this.addr,t)}function j1(r,e){const t=Ns(e,this.size,4);r.uniform4fv(this.addr,t)}function $1(r,e){const t=Ns(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Y1(r,e){const t=Ns(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function q1(r,e){const t=Ns(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function K1(r,e){r.uniform1iv(this.addr,e)}function Z1(r,e){r.uniform2iv(this.addr,e)}function J1(r,e){r.uniform3iv(this.addr,e)}function Q1(r,e){r.uniform4iv(this.addr,e)}function eC(r,e){r.uniform1uiv(this.addr,e)}function tC(r,e){r.uniform2uiv(this.addr,e)}function nC(r,e){r.uniform3uiv(this.addr,e)}function rC(r,e){r.uniform4uiv(this.addr,e)}function iC(r,e,t){const o=this.cache,s=e.length,l=Hu(t,s);an(o,l)||(r.uniform1iv(this.addr,l),ln(o,l));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||O_,l[c])}function oC(r,e,t){const o=this.cache,s=e.length,l=Hu(t,s);an(o,l)||(r.uniform1iv(this.addr,l),ln(o,l));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||z_,l[c])}function sC(r,e,t){const o=this.cache,s=e.length,l=Hu(t,s);an(o,l)||(r.uniform1iv(this.addr,l),ln(o,l));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||H_,l[c])}function aC(r,e,t){const o=this.cache,s=e.length,l=Hu(t,s);an(o,l)||(r.uniform1iv(this.addr,l),ln(o,l));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||B_,l[c])}function lC(r){switch(r){case 5126:return G1;case 35664:return W1;case 35665:return X1;case 35666:return j1;case 35674:return $1;case 35675:return Y1;case 35676:return q1;case 5124:case 35670:return K1;case 35667:case 35671:return Z1;case 35668:case 35672:return J1;case 35669:case 35673:return Q1;case 5125:return eC;case 36294:return tC;case 36295:return nC;case 36296:return rC;case 35678:case 36198:case 36298:case 36306:case 35682:return iC;case 35679:case 36299:case 36307:return oC;case 35680:case 36300:case 36308:case 36293:return sC;case 36289:case 36303:case 36311:case 36292:return aC}}class uC{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.type=t.type,this.setValue=V1(t.type)}}class cC{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lC(t.type)}}class dC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,o){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const d=s[l];d.setValue(e,t[d.id],o)}}}const sf=/(\w+)(\])?(\[|\.)?/g;function av(r,e){r.seq.push(e),r.map[e.id]=e}function fC(r,e,t){const o=r.name,s=o.length;for(sf.lastIndex=0;;){const l=sf.exec(o),c=sf.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&c+2===s){av(t,p===void 0?new uC(d,r,e):new cC(d,r,e));break}else{let v=t.map[d];v===void 0&&(v=new dC(d),av(t,v)),t=v}}}class Ru{constructor(e,t){this.seq=[],this.map={};const o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<o;++s){const l=e.getActiveUniform(t,s),c=e.getUniformLocation(t,l.name);fC(l,c,this)}}setValue(e,t,o,s){const l=this.map[t];l!==void 0&&l.setValue(e,o,s)}setOptional(e,t,o){const s=t[o];s!==void 0&&this.setValue(e,o,s)}static upload(e,t,o,s){for(let l=0,c=t.length;l!==c;++l){const d=t[l],f=o[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,s)}}static seqWithValue(e,t){const o=[];for(let s=0,l=e.length;s!==l;++s){const c=e[s];c.id in t&&o.push(c)}return o}}function lv(r,e,t){const o=r.createShader(e);return r.shaderSource(o,t),r.compileShader(o),o}const hC=37297;let pC=0;function mC(r,e){const t=r.split(`
`),o=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=s;c<l;c++){const d=c+1;o.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return o.join(`
`)}const uv=new gt;function gC(r){Pt._getMatrix(uv,Pt.workingColorSpace,r);const e=`mat3( ${uv.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(r)){case Du:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function cv(r,e,t){const o=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(o&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+s+`

`+mC(r.getShaderSource(e),c)}else return s}function vC(r,e){const t=gC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _C(r,e){let t;switch(e){case eE:t="Linear";break;case tE:t="Reinhard";break;case nE:t="Cineon";break;case rE:t="ACESFilmic";break;case oE:t="AgX";break;case sE:t="Neutral";break;case iE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pu=new re;function xC(){Pt.getLuminanceCoefficients(pu);const r=pu.x.toFixed(4),e=pu.y.toFixed(4),t=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function SC(r){const e=[];for(const t in r){const o=r[t];o!==!1&&e.push("#define "+t+" "+o)}return e.join(`
`)}function EC(r,e){const t={},o=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<o;s++){const l=r.getActiveAttrib(e,s),c=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:d}}return t}function Ma(r){return r!==""}function dv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MC=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(r){return r.replace(MC,TC)}const wC=new Map;function TC(r,e){let t=_t[e];if(t===void 0){const o=wC.get(e);if(o!==void 0)t=_t[o],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,o);else throw new Error("Can not resolve #include <"+e+">")}return th(t)}const CC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hv(r){return r.replace(CC,RC)}function RC(r,e,t,o){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=o.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function pv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function AC(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===p_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===NS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function bC(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ms:case ws:e="ENVMAP_TYPE_CUBE";break;case Ou:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PC(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===ws&&(e="ENVMAP_MODE_REFRACTION"),e}function LC(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case m_:e="ENVMAP_BLENDING_MULTIPLY";break;case JS:e="ENVMAP_BLENDING_MIX";break;case QS:e="ENVMAP_BLENDING_ADD";break}return e}function DC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:o,maxMip:t}}function NC(r,e,t,o){const s=r.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=AC(t),p=bC(t),m=PC(t),v=LC(t),y=DC(t),S=yC(t),E=SC(l),M=s.createProgram();let x,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ma).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ma).join(`
`),_.length>0&&(_+=`
`)):(x=[pv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),_=[pv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?_t.tonemapping_pars_fragment:"",t.toneMapping!==gi?_C("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,vC("linearToOutputTexel",t.outputColorSpace),xC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),c=th(c),c=dv(c,t),c=fv(c,t),d=th(d),d=dv(d,t),d=fv(d,t),c=hv(c),d=hv(d),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=L+x+c,A=L+_+d,G=lv(s,s.VERTEX_SHADER,P),I=lv(s,s.FRAGMENT_SHADER,A);s.attachShader(M,G),s.attachShader(M,I),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function k(V){if(r.debug.checkShaderErrors){const ae=s.getProgramInfoLog(M).trim(),J=s.getShaderInfoLog(G).trim(),ee=s.getShaderInfoLog(I).trim();let fe=!0,ue=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(fe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,M,G,I);else{const he=cv(s,G,"vertex"),z=cv(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ae+`
`+he+`
`+z)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(J===""||ee==="")&&(ue=!1);ue&&(V.diagnostics={runnable:fe,programLog:ae,vertexShader:{log:J,prefix:x},fragmentShader:{log:ee,prefix:_}})}s.deleteShader(G),s.deleteShader(I),X=new Ru(s,M),b=EC(s,M)}let X;this.getUniforms=function(){return X===void 0&&k(this),X};let b;this.getAttributes=function(){return b===void 0&&k(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,hC)),C},this.destroy=function(){o.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pC++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=G,this.fragmentShader=I,this}let UC=0;class IC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,o=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(o),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const o of t)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let o=t.get(e);return o===void 0&&(o=new Set,t.set(e,o)),o}_getShaderStage(e){const t=this.shaderCache;let o=t.get(e);return o===void 0&&(o=new FC(e),t.set(e,o)),o}}class FC{constructor(e){this.id=UC++,this.code=e,this.usedTimes=0}}function kC(r,e,t,o,s,l,c){const d=new A_,f=new IC,p=new Set,m=[],v=s.logarithmicDepthBuffer,y=s.vertexTextures;let S=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return p.add(b),b===0?"uv":`uv${b}`}function x(b,C,V,ae,J){const ee=ae.fog,fe=J.geometry,ue=b.isMeshStandardMaterial?ae.environment:null,he=(b.isMeshStandardMaterial?t:e).get(b.envMap||ue),z=he&&he.mapping===Ou?he.image.height:null,de=E[b.type];b.precision!==null&&(S=s.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const le=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,F=le!==void 0?le.length:0;let oe=0;fe.morphAttributes.position!==void 0&&(oe=1),fe.morphAttributes.normal!==void 0&&(oe=2),fe.morphAttributes.color!==void 0&&(oe=3);let Oe,ne,me,Ce;if(de){const Ct=Or[de];Oe=Ct.vertexShader,ne=Ct.fragmentShader}else Oe=b.vertexShader,ne=b.fragmentShader,f.update(b),me=f.getVertexShaderID(b),Ce=f.getFragmentShaderID(b);const Se=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Z=J.isInstancedMesh===!0,Ee=J.isBatchedMesh===!0,be=!!b.map,ot=!!b.matcap,Ze=!!he,U=!!b.aoMap,mt=!!b.lightMap,pt=!!b.bumpMap,Mt=!!b.normalMap,Be=!!b.displacementMap,ht=!!b.emissiveMap,et=!!b.metalnessMap,He=!!b.roughnessMap,Tt=b.anisotropy>0,D=b.clearcoat>0,T=b.dispersion>0,Q=b.iridescence>0,pe=b.sheen>0,ve=b.transmission>0,ce=Tt&&!!b.anisotropyMap,Ke=D&&!!b.clearcoatMap,Le=D&&!!b.clearcoatNormalMap,Ge=D&&!!b.clearcoatRoughnessMap,Je=Q&&!!b.iridescenceMap,_e=Q&&!!b.iridescenceThicknessMap,ze=pe&&!!b.sheenColorMap,it=pe&&!!b.sheenRoughnessMap,nt=!!b.specularMap,De=!!b.specularColorMap,st=!!b.specularIntensityMap,W=ve&&!!b.transmissionMap,Ne=ve&&!!b.thicknessMap,xe=!!b.gradientMap,Ue=!!b.alphaMap,we=b.alphaTest>0,ge=!!b.alphaHash,Ie=!!b.extensions;let ct=gi;b.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(ct=r.toneMapping);const Lt={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:Oe,fragmentShader:ne,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:Ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Ee,batchingColor:Ee&&J._colorsTexture!==null,instancing:Z,instancingColor:Z&&J.instanceColor!==null,instancingMorph:Z&&J.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Se===null?r.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ts,alphaToCoverage:!!b.alphaToCoverage,map:be,matcap:ot,envMap:Ze,envMapMode:Ze&&he.mapping,envMapCubeUVHeight:z,aoMap:U,lightMap:mt,bumpMap:pt,normalMap:Mt,displacementMap:y&&Be,emissiveMap:ht,normalMapObjectSpace:Mt&&b.normalMapType===dE,normalMapTangentSpace:Mt&&b.normalMapType===cE,metalnessMap:et,roughnessMap:He,anisotropy:Tt,anisotropyMap:ce,clearcoat:D,clearcoatMap:Ke,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ge,dispersion:T,iridescence:Q,iridescenceMap:Je,iridescenceThicknessMap:_e,sheen:pe,sheenColorMap:ze,sheenRoughnessMap:it,specularMap:nt,specularColorMap:De,specularIntensityMap:st,transmission:ve,transmissionMap:W,thicknessMap:Ne,gradientMap:xe,opaque:b.transparent===!1&&b.blending===xs&&b.alphaToCoverage===!1,alphaMap:Ue,alphaTest:we,alphaHash:ge,combine:b.combine,mapUv:be&&M(b.map.channel),aoMapUv:U&&M(b.aoMap.channel),lightMapUv:mt&&M(b.lightMap.channel),bumpMapUv:pt&&M(b.bumpMap.channel),normalMapUv:Mt&&M(b.normalMap.channel),displacementMapUv:Be&&M(b.displacementMap.channel),emissiveMapUv:ht&&M(b.emissiveMap.channel),metalnessMapUv:et&&M(b.metalnessMap.channel),roughnessMapUv:He&&M(b.roughnessMap.channel),anisotropyMapUv:ce&&M(b.anisotropyMap.channel),clearcoatMapUv:Ke&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Le&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:it&&M(b.sheenRoughnessMap.channel),specularMapUv:nt&&M(b.specularMap.channel),specularColorMapUv:De&&M(b.specularColorMap.channel),specularIntensityMapUv:st&&M(b.specularIntensityMap.channel),transmissionMapUv:W&&M(b.transmissionMap.channel),thicknessMapUv:Ne&&M(b.thicknessMap.channel),alphaMapUv:Ue&&M(b.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Mt||Tt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!fe.attributes.uv&&(be||Ue),fog:!!ee,useFog:b.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:J.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:oe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:be&&b.map.isVideoTexture===!0&&Pt.getTransfer(b.map.colorSpace)===Ft,decodeVideoTextureEmissive:ht&&b.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(b.emissiveMap.colorSpace)===Ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zr,flipSided:b.side===Yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&o.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||Ee)&&o.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:o.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Lt.vertexUv1s=p.has(1),Lt.vertexUv2s=p.has(2),Lt.vertexUv3s=p.has(3),p.clear(),Lt}function _(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)C.push(V),C.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(L(C,b),P(C,b),C.push(r.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function L(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function P(b,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),b.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),b.push(d.mask)}function A(b){const C=E[b.type];let V;if(C){const ae=Or[C];V=iM.clone(ae.uniforms)}else V=b.uniforms;return V}function G(b,C){let V;for(let ae=0,J=m.length;ae<J;ae++){const ee=m[ae];if(ee.cacheKey===C){V=ee,++V.usedTimes;break}}return V===void 0&&(V=new NC(r,C,b,l),m.push(V)),V}function I(b){if(--b.usedTimes===0){const C=m.indexOf(b);m[C]=m[m.length-1],m.pop(),b.destroy()}}function k(b){f.remove(b)}function X(){f.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:A,acquireProgram:G,releaseProgram:I,releaseShaderCache:k,programs:m,dispose:X}}function OC(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function o(c){r.delete(c)}function s(c,d,f){r.get(c)[d]=f}function l(){r=new WeakMap}return{has:e,get:t,remove:o,update:s,dispose:l}}function BC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function mv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function gv(){const r=[];let e=0;const t=[],o=[],s=[];function l(){e=0,t.length=0,o.length=0,s.length=0}function c(v,y,S,E,M,x){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:E,renderOrder:v.renderOrder,z:M,group:x},r[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=M,_.group=x),e++,_}function d(v,y,S,E,M,x){const _=c(v,y,S,E,M,x);S.transmission>0?o.push(_):S.transparent===!0?s.push(_):t.push(_)}function f(v,y,S,E,M,x){const _=c(v,y,S,E,M,x);S.transmission>0?o.unshift(_):S.transparent===!0?s.unshift(_):t.unshift(_)}function p(v,y){t.length>1&&t.sort(v||BC),o.length>1&&o.sort(y||mv),s.length>1&&s.sort(y||mv)}function m(){for(let v=e,y=r.length;v<y;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:o,transparent:s,init:l,push:d,unshift:f,finish:m,sort:p}}function zC(){let r=new WeakMap;function e(o,s){const l=r.get(o);let c;return l===void 0?(c=new gv,r.set(o,[c])):s>=l.length?(c=new gv,l.push(c)):c=l[s],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function HC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new Ut};break;case"SpotLight":t={position:new re,direction:new re,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":t={color:new Ut,position:new re,halfWidth:new re,halfHeight:new re};break}return r[e.id]=t,t}}}function VC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let GC=0;function WC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function XC(r){const e=new HC,t=VC(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new re);const s=new re,l=new Qt,c=new Qt;function d(p){let m=0,v=0,y=0;for(let b=0;b<9;b++)o.probe[b].set(0,0,0);let S=0,E=0,M=0,x=0,_=0,L=0,P=0,A=0,G=0,I=0,k=0;p.sort(WC);for(let b=0,C=p.length;b<C;b++){const V=p[b],ae=V.color,J=V.intensity,ee=V.distance,fe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=ae.r*J,v+=ae.g*J,y+=ae.b*J;else if(V.isLightProbe){for(let ue=0;ue<9;ue++)o.probe[ue].addScaledVector(V.sh.coefficients[ue],J);k++}else if(V.isDirectionalLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const he=V.shadow,z=t.get(V);z.shadowIntensity=he.intensity,z.shadowBias=he.bias,z.shadowNormalBias=he.normalBias,z.shadowRadius=he.radius,z.shadowMapSize=he.mapSize,o.directionalShadow[S]=z,o.directionalShadowMap[S]=fe,o.directionalShadowMatrix[S]=V.shadow.matrix,L++}o.directional[S]=ue,S++}else if(V.isSpotLight){const ue=e.get(V);ue.position.setFromMatrixPosition(V.matrixWorld),ue.color.copy(ae).multiplyScalar(J),ue.distance=ee,ue.coneCos=Math.cos(V.angle),ue.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ue.decay=V.decay,o.spot[M]=ue;const he=V.shadow;if(V.map&&(o.spotLightMap[G]=V.map,G++,he.updateMatrices(V),V.castShadow&&I++),o.spotLightMatrix[M]=he.matrix,V.castShadow){const z=t.get(V);z.shadowIntensity=he.intensity,z.shadowBias=he.bias,z.shadowNormalBias=he.normalBias,z.shadowRadius=he.radius,z.shadowMapSize=he.mapSize,o.spotShadow[M]=z,o.spotShadowMap[M]=fe,A++}M++}else if(V.isRectAreaLight){const ue=e.get(V);ue.color.copy(ae).multiplyScalar(J),ue.halfWidth.set(V.width*.5,0,0),ue.halfHeight.set(0,V.height*.5,0),o.rectArea[x]=ue,x++}else if(V.isPointLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),ue.distance=V.distance,ue.decay=V.decay,V.castShadow){const he=V.shadow,z=t.get(V);z.shadowIntensity=he.intensity,z.shadowBias=he.bias,z.shadowNormalBias=he.normalBias,z.shadowRadius=he.radius,z.shadowMapSize=he.mapSize,z.shadowCameraNear=he.camera.near,z.shadowCameraFar=he.camera.far,o.pointShadow[E]=z,o.pointShadowMap[E]=fe,o.pointShadowMatrix[E]=V.shadow.matrix,P++}o.point[E]=ue,E++}else if(V.isHemisphereLight){const ue=e.get(V);ue.skyColor.copy(V.color).multiplyScalar(J),ue.groundColor.copy(V.groundColor).multiplyScalar(J),o.hemi[_]=ue,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=ke.LTC_FLOAT_1,o.rectAreaLTC2=ke.LTC_FLOAT_2):(o.rectAreaLTC1=ke.LTC_HALF_1,o.rectAreaLTC2=ke.LTC_HALF_2)),o.ambient[0]=m,o.ambient[1]=v,o.ambient[2]=y;const X=o.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==M||X.rectAreaLength!==x||X.hemiLength!==_||X.numDirectionalShadows!==L||X.numPointShadows!==P||X.numSpotShadows!==A||X.numSpotMaps!==G||X.numLightProbes!==k)&&(o.directional.length=S,o.spot.length=M,o.rectArea.length=x,o.point.length=E,o.hemi.length=_,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=P,o.pointShadowMap.length=P,o.spotShadow.length=A,o.spotShadowMap.length=A,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=P,o.spotLightMatrix.length=A+G-I,o.spotLightMap.length=G,o.numSpotLightShadowsWithMaps=I,o.numLightProbes=k,X.directionalLength=S,X.pointLength=E,X.spotLength=M,X.rectAreaLength=x,X.hemiLength=_,X.numDirectionalShadows=L,X.numPointShadows=P,X.numSpotShadows=A,X.numSpotMaps=G,X.numLightProbes=k,o.version=GC++)}function f(p,m){let v=0,y=0,S=0,E=0,M=0;const x=m.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const P=p[_];if(P.isDirectionalLight){const A=o.directional[v];A.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),v++}else if(P.isSpotLight){const A=o.spot[S];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),S++}else if(P.isRectAreaLight){const A=o.rectArea[E];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),c.identity(),l.copy(P.matrixWorld),l.premultiply(x),c.extractRotation(l),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const A=o.point[y];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),y++}else if(P.isHemisphereLight){const A=o.hemi[M];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(x),M++}}}return{setup:d,setupView:f,state:o}}function vv(r){const e=new XC(r),t=[],o=[];function s(m){p.camera=m,t.length=0,o.length=0}function l(m){t.push(m)}function c(m){o.push(m)}function d(){e.setup(t)}function f(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:o,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:c}}function jC(r){let e=new WeakMap;function t(s,l=0){const c=e.get(s);let d;return c===void 0?(d=new vv(r),e.set(s,[d])):l>=c.length?(d=new vv(r),c.push(d)):d=c[l],d}function o(){e=new WeakMap}return{get:t,dispose:o}}const $C=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YC=`uniform sampler2D shadow_pass;
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
}`;function qC(r,e,t){let o=new Ch;const s=new Dt,l=new Dt,c=new Jt,d=new pM({depthPacking:uE}),f=new mM,p={},m=t.maxTextureSize,v={[Ki]:Yn,[Yn]:Ki,[zr]:zr},y=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:$C,fragmentShader:YC}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Po;E.setAttribute("position",new jr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Gr(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=p_;let _=this.type;this.render=function(I,k,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const b=r.getRenderTarget(),C=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),ae=r.state;ae.setBlending(qi),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const J=_!==ci&&this.type===ci,ee=_===ci&&this.type!==ci;for(let fe=0,ue=I.length;fe<ue;fe++){const he=I[fe],z=he.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const de=z.getFrameExtents();if(s.multiply(de),l.copy(z.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/de.x),s.x=l.x*de.x,z.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/de.y),s.y=l.y*de.y,z.mapSize.y=l.y)),z.map===null||J===!0||ee===!0){const F=this.type!==ci?{minFilter:yn,magFilter:yn}:{};z.map!==null&&z.map.dispose(),z.map=new bo(s.x,s.y,F),z.map.texture.name=he.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const le=z.getViewportCount();for(let F=0;F<le;F++){const oe=z.getViewport(F);c.set(l.x*oe.x,l.y*oe.y,l.x*oe.z,l.y*oe.w),ae.viewport(c),z.updateMatrices(he,F),o=z.getFrustum(),A(k,X,z.camera,he,this.type)}z.isPointLightShadow!==!0&&this.type===ci&&L(z,X),z.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(b,C,V)};function L(I,k){const X=e.update(M);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new bo(s.x,s.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(k,null,X,y,M,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(k,null,X,S,M,null)}function P(I,k,X,b){let C=null;const V=X.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)C=V;else if(C=X.isPointLight===!0?f:d,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const ae=C.uuid,J=k.uuid;let ee=p[ae];ee===void 0&&(ee={},p[ae]=ee);let fe=ee[J];fe===void 0&&(fe=C.clone(),ee[J]=fe,k.addEventListener("dispose",G)),C=fe}if(C.visible=k.visible,C.wireframe=k.wireframe,b===ci?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:v[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=r.properties.get(C);ae.light=X}return C}function A(I,k,X,b,C){if(I.visible===!1)return;if(I.layers.test(k.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===ci)&&(!I.frustumCulled||o.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld);const J=e.update(I),ee=I.material;if(Array.isArray(ee)){const fe=J.groups;for(let ue=0,he=fe.length;ue<he;ue++){const z=fe[ue],de=ee[z.materialIndex];if(de&&de.visible){const le=P(I,de,b,C);I.onBeforeShadow(r,I,k,X,J,le,z),r.renderBufferDirect(X,null,J,le,I,z),I.onAfterShadow(r,I,k,X,J,le,z)}}}else if(ee.visible){const fe=P(I,ee,b,C);I.onBeforeShadow(r,I,k,X,J,fe,null),r.renderBufferDirect(X,null,J,fe,I,null),I.onAfterShadow(r,I,k,X,J,fe,null)}}const ae=I.children;for(let J=0,ee=ae.length;J<ee;J++)A(ae[J],k,X,b,C)}function G(I){I.target.removeEventListener("dispose",G);for(const X in p){const b=p[X],C=I.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const KC={[xf]:yf,[Sf]:wf,[Ef]:Tf,[Es]:Mf,[yf]:xf,[wf]:Sf,[Tf]:Ef,[Mf]:Es};function ZC(r,e){function t(){let W=!1;const Ne=new Jt;let xe=null;const Ue=new Jt(0,0,0,0);return{setMask:function(we){xe!==we&&!W&&(r.colorMask(we,we,we,we),xe=we)},setLocked:function(we){W=we},setClear:function(we,ge,Ie,ct,Lt){Lt===!0&&(we*=ct,ge*=ct,Ie*=ct),Ne.set(we,ge,Ie,ct),Ue.equals(Ne)===!1&&(r.clearColor(we,ge,Ie,ct),Ue.copy(Ne))},reset:function(){W=!1,xe=null,Ue.set(-1,0,0,0)}}}function o(){let W=!1,Ne=!1,xe=null,Ue=null,we=null;return{setReversed:function(ge){if(Ne!==ge){const Ie=e.get("EXT_clip_control");ge?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Ne=ge;const ct=we;we=null,this.setClear(ct)}},getReversed:function(){return Ne},setTest:function(ge){ge?Se(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(ge){xe!==ge&&!W&&(r.depthMask(ge),xe=ge)},setFunc:function(ge){if(Ne&&(ge=KC[ge]),Ue!==ge){switch(ge){case xf:r.depthFunc(r.NEVER);break;case yf:r.depthFunc(r.ALWAYS);break;case Sf:r.depthFunc(r.LESS);break;case Es:r.depthFunc(r.LEQUAL);break;case Ef:r.depthFunc(r.EQUAL);break;case Mf:r.depthFunc(r.GEQUAL);break;case wf:r.depthFunc(r.GREATER);break;case Tf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ue=ge}},setLocked:function(ge){W=ge},setClear:function(ge){we!==ge&&(Ne&&(ge=1-ge),r.clearDepth(ge),we=ge)},reset:function(){W=!1,xe=null,Ue=null,we=null,Ne=!1}}}function s(){let W=!1,Ne=null,xe=null,Ue=null,we=null,ge=null,Ie=null,ct=null,Lt=null;return{setTest:function(Ct){W||(Ct?Se(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(Ct){Ne!==Ct&&!W&&(r.stencilMask(Ct),Ne=Ct)},setFunc:function(Ct,gn,rn){(xe!==Ct||Ue!==gn||we!==rn)&&(r.stencilFunc(Ct,gn,rn),xe=Ct,Ue=gn,we=rn)},setOp:function(Ct,gn,rn){(ge!==Ct||Ie!==gn||ct!==rn)&&(r.stencilOp(Ct,gn,rn),ge=Ct,Ie=gn,ct=rn)},setLocked:function(Ct){W=Ct},setClear:function(Ct){Lt!==Ct&&(r.clearStencil(Ct),Lt=Ct)},reset:function(){W=!1,Ne=null,xe=null,Ue=null,we=null,ge=null,Ie=null,ct=null,Lt=null}}}const l=new t,c=new o,d=new s,f=new WeakMap,p=new WeakMap;let m={},v={},y=new WeakMap,S=[],E=null,M=!1,x=null,_=null,L=null,P=null,A=null,G=null,I=null,k=new Ut(0,0,0),X=0,b=!1,C=null,V=null,ae=null,J=null,ee=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,he=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(z)[1]),ue=he>=1):z.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ue=he>=2);let de=null,le={};const F=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),Oe=new Jt().fromArray(F),ne=new Jt().fromArray(oe);function me(W,Ne,xe,Ue){const we=new Uint8Array(4),ge=r.createTexture();r.bindTexture(W,ge),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<xe;Ie++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,Ue,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(Ne+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return ge}const Ce={};Ce[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),Ce[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ce[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),Se(r.DEPTH_TEST),c.setFunc(Es),pt(!1),Mt(yg),Se(r.CULL_FACE),U(qi);function Se(W){m[W]!==!0&&(r.enable(W),m[W]=!0)}function Ae(W){m[W]!==!1&&(r.disable(W),m[W]=!1)}function Z(W,Ne){return v[W]!==Ne?(r.bindFramebuffer(W,Ne),v[W]=Ne,W===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ne),W===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ee(W,Ne){let xe=S,Ue=!1;if(W){xe=y.get(Ne),xe===void 0&&(xe=[],y.set(Ne,xe));const we=W.textures;if(xe.length!==we.length||xe[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,Ie=we.length;ge<Ie;ge++)xe[ge]=r.COLOR_ATTACHMENT0+ge;xe.length=we.length,Ue=!0}}else xe[0]!==r.BACK&&(xe[0]=r.BACK,Ue=!0);Ue&&r.drawBuffers(xe)}function be(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const ot={[Mo]:r.FUNC_ADD,[IS]:r.FUNC_SUBTRACT,[FS]:r.FUNC_REVERSE_SUBTRACT};ot[kS]=r.MIN,ot[OS]=r.MAX;const Ze={[BS]:r.ZERO,[zS]:r.ONE,[HS]:r.SRC_COLOR,[vf]:r.SRC_ALPHA,[$S]:r.SRC_ALPHA_SATURATE,[XS]:r.DST_COLOR,[GS]:r.DST_ALPHA,[VS]:r.ONE_MINUS_SRC_COLOR,[_f]:r.ONE_MINUS_SRC_ALPHA,[jS]:r.ONE_MINUS_DST_COLOR,[WS]:r.ONE_MINUS_DST_ALPHA,[YS]:r.CONSTANT_COLOR,[qS]:r.ONE_MINUS_CONSTANT_COLOR,[KS]:r.CONSTANT_ALPHA,[ZS]:r.ONE_MINUS_CONSTANT_ALPHA};function U(W,Ne,xe,Ue,we,ge,Ie,ct,Lt,Ct){if(W===qi){M===!0&&(Ae(r.BLEND),M=!1);return}if(M===!1&&(Se(r.BLEND),M=!0),W!==US){if(W!==x||Ct!==b){if((_!==Mo||A!==Mo)&&(r.blendEquation(r.FUNC_ADD),_=Mo,A=Mo),Ct)switch(W){case xs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sg:r.blendFunc(r.ONE,r.ONE);break;case Eg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case xs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sg:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Eg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,P=null,G=null,I=null,k.set(0,0,0),X=0,x=W,b=Ct}return}we=we||Ne,ge=ge||xe,Ie=Ie||Ue,(Ne!==_||we!==A)&&(r.blendEquationSeparate(ot[Ne],ot[we]),_=Ne,A=we),(xe!==L||Ue!==P||ge!==G||Ie!==I)&&(r.blendFuncSeparate(Ze[xe],Ze[Ue],Ze[ge],Ze[Ie]),L=xe,P=Ue,G=ge,I=Ie),(ct.equals(k)===!1||Lt!==X)&&(r.blendColor(ct.r,ct.g,ct.b,Lt),k.copy(ct),X=Lt),x=W,b=!1}function mt(W,Ne){W.side===zr?Ae(r.CULL_FACE):Se(r.CULL_FACE);let xe=W.side===Yn;Ne&&(xe=!xe),pt(xe),W.blending===xs&&W.transparent===!1?U(qi):U(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const Ue=W.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ht(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Se(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(W){C!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),C=W)}function Mt(W){W!==LS?(Se(r.CULL_FACE),W!==V&&(W===yg?r.cullFace(r.BACK):W===DS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),V=W}function Be(W){W!==ae&&(ue&&r.lineWidth(W),ae=W)}function ht(W,Ne,xe){W?(Se(r.POLYGON_OFFSET_FILL),(J!==Ne||ee!==xe)&&(r.polygonOffset(Ne,xe),J=Ne,ee=xe)):Ae(r.POLYGON_OFFSET_FILL)}function et(W){W?Se(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function He(W){W===void 0&&(W=r.TEXTURE0+fe-1),de!==W&&(r.activeTexture(W),de=W)}function Tt(W,Ne,xe){xe===void 0&&(de===null?xe=r.TEXTURE0+fe-1:xe=de);let Ue=le[xe];Ue===void 0&&(Ue={type:void 0,texture:void 0},le[xe]=Ue),(Ue.type!==W||Ue.texture!==Ne)&&(de!==xe&&(r.activeTexture(xe),de=xe),r.bindTexture(W,Ne||Ce[W]),Ue.type=W,Ue.texture=Ne)}function D(){const W=le[de];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(W){Oe.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Oe.copy(W))}function it(W){ne.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),ne.copy(W))}function nt(W,Ne){let xe=p.get(Ne);xe===void 0&&(xe=new WeakMap,p.set(Ne,xe));let Ue=xe.get(W);Ue===void 0&&(Ue=r.getUniformBlockIndex(Ne,W.name),xe.set(W,Ue))}function De(W,Ne){const Ue=p.get(Ne).get(W);f.get(Ne)!==Ue&&(r.uniformBlockBinding(Ne,Ue,W.__bindingPointIndex),f.set(Ne,Ue))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},de=null,le={},v={},y=new WeakMap,S=[],E=null,M=!1,x=null,_=null,L=null,P=null,A=null,G=null,I=null,k=new Ut(0,0,0),X=0,b=!1,C=null,V=null,ae=null,J=null,ee=null,Oe.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:Se,disable:Ae,bindFramebuffer:Z,drawBuffers:Ee,useProgram:be,setBlending:U,setMaterial:mt,setFlipSided:pt,setCullFace:Mt,setLineWidth:Be,setPolygonOffset:ht,setScissorTest:et,activeTexture:He,bindTexture:Tt,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:Q,texImage2D:Je,texImage3D:_e,updateUBOMapping:nt,uniformBlockBinding:De,texStorage2D:Le,texStorage3D:Ge,texSubImage2D:pe,texSubImage3D:ve,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ke,scissor:ze,viewport:it,reset:st}}function JC(r,e,t,o,s,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Dt,m=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return S?new OffscreenCanvas(D,T):Ia("canvas")}function M(D,T,Q){let pe=1;const ve=Tt(D);if((ve.width>Q||ve.height>Q)&&(pe=Q/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(pe*ve.width),Ke=Math.floor(pe*ve.height);v===void 0&&(v=E(ce,Ke));const Le=T?E(ce,Ke):v;return Le.width=ce,Le.height=Ke,Le.getContext("2d").drawImage(D,0,0,ce,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ce+"x"+Ke+")."),Le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function x(D){return D.generateMipmaps}function _(D){r.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(D,T,Q,pe,ve=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=T;if(T===r.RED&&(Q===r.FLOAT&&(ce=r.R32F),Q===r.HALF_FLOAT&&(ce=r.R16F),Q===r.UNSIGNED_BYTE&&(ce=r.R8)),T===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.R8UI),Q===r.UNSIGNED_SHORT&&(ce=r.R16UI),Q===r.UNSIGNED_INT&&(ce=r.R32UI),Q===r.BYTE&&(ce=r.R8I),Q===r.SHORT&&(ce=r.R16I),Q===r.INT&&(ce=r.R32I)),T===r.RG&&(Q===r.FLOAT&&(ce=r.RG32F),Q===r.HALF_FLOAT&&(ce=r.RG16F),Q===r.UNSIGNED_BYTE&&(ce=r.RG8)),T===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RG16UI),Q===r.UNSIGNED_INT&&(ce=r.RG32UI),Q===r.BYTE&&(ce=r.RG8I),Q===r.SHORT&&(ce=r.RG16I),Q===r.INT&&(ce=r.RG32I)),T===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),Q===r.UNSIGNED_INT&&(ce=r.RGB32UI),Q===r.BYTE&&(ce=r.RGB8I),Q===r.SHORT&&(ce=r.RGB16I),Q===r.INT&&(ce=r.RGB32I)),T===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ce=r.RGBA32UI),Q===r.BYTE&&(ce=r.RGBA8I),Q===r.SHORT&&(ce=r.RGBA16I),Q===r.INT&&(ce=r.RGBA32I)),T===r.RGB&&Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),T===r.RGBA){const Ke=ve?Du:Pt.getTransfer(pe);Q===r.FLOAT&&(ce=r.RGBA32F),Q===r.HALF_FLOAT&&(ce=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ce=Ke===Ft?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function A(D,T){let Q;return D?T===null||T===Ao||T===La?Q=r.DEPTH24_STENCIL8:T===hi?Q=r.DEPTH32F_STENCIL8:T===Pa&&(Q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ao||T===La?Q=r.DEPTH_COMPONENT24:T===hi?Q=r.DEPTH_COMPONENT32F:T===Pa&&(Q=r.DEPTH_COMPONENT16),Q}function G(D,T){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==yn&&D.minFilter!==Vr?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function I(D){const T=D.target;T.removeEventListener("dispose",I),X(T),T.isVideoTexture&&m.delete(T)}function k(D){const T=D.target;T.removeEventListener("dispose",k),C(T)}function X(D){const T=o.get(D);if(T.__webglInit===void 0)return;const Q=D.source,pe=y.get(Q);if(pe){const ve=pe[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&b(D),Object.keys(pe).length===0&&y.delete(Q)}o.remove(D)}function b(D){const T=o.get(D);r.deleteTexture(T.__webglTexture);const Q=D.source,pe=y.get(Q);delete pe[T.__cacheKey],c.memory.textures--}function C(D){const T=o.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),o.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ve=0;ve<T.__webglFramebuffer[pe].length;ve++)r.deleteFramebuffer(T.__webglFramebuffer[pe][ve]);else r.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)r.deleteFramebuffer(T.__webglFramebuffer[pe]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=D.textures;for(let pe=0,ve=Q.length;pe<ve;pe++){const ce=o.get(Q[pe]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),c.memory.textures--),o.remove(Q[pe])}o.remove(D)}let V=0;function ae(){V=0}function J(){const D=V;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),V+=1,D}function ee(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function fe(D,T){const Q=o.get(D);if(D.isVideoTexture&&et(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(Q,D,T);return}}t.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+T)}function ue(D,T){const Q=o.get(D);if(D.version>0&&Q.__version!==D.version){Ce(Q,D,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+T)}function he(D,T){const Q=o.get(D);if(D.version>0&&Q.__version!==D.version){Ce(Q,D,T);return}t.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+T)}function z(D,T){const Q=o.get(D);if(D.version>0&&Q.__version!==D.version){Se(Q,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+T)}const de={[ba]:r.REPEAT,[fi]:r.CLAMP_TO_EDGE,[Af]:r.MIRRORED_REPEAT},le={[yn]:r.NEAREST,[aE]:r.NEAREST_MIPMAP_NEAREST,[Yl]:r.NEAREST_MIPMAP_LINEAR,[Vr]:r.LINEAR,[bd]:r.LINEAR_MIPMAP_NEAREST,[Co]:r.LINEAR_MIPMAP_LINEAR},F={[fE]:r.NEVER,[_E]:r.ALWAYS,[hE]:r.LESS,[T_]:r.LEQUAL,[pE]:r.EQUAL,[vE]:r.GEQUAL,[mE]:r.GREATER,[gE]:r.NOTEQUAL};function oe(D,T){if(T.type===hi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Vr||T.magFilter===bd||T.magFilter===Yl||T.magFilter===Co||T.minFilter===Vr||T.minFilter===bd||T.minFilter===Yl||T.minFilter===Co)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,de[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,de[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,de[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,le[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,le[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yn||T.minFilter!==Yl&&T.minFilter!==Co||T.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||o.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),o.get(T).__currentAnisotropy=T.anisotropy}}}function Oe(D,T){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",I));const pe=T.source;let ve=y.get(pe);ve===void 0&&(ve={},y.set(pe,ve));const ce=ee(T);if(ce!==D.__cacheKey){ve[ce]===void 0&&(ve[ce]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),ve[ce].usedTimes++;const Ke=ve[D.__cacheKey];Ke!==void 0&&(ve[D.__cacheKey].usedTimes--,Ke.usedTimes===0&&b(T)),D.__cacheKey=ce,D.__webglTexture=ve[ce].texture}return Q}function ne(D,T,Q){return Math.floor(Math.floor(D/Q)/T)}function me(D,T,Q,pe){const ce=D.updateRanges;if(ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,Q,pe,T.data);else{ce.sort((_e,ze)=>_e.start-ze.start);let Ke=0;for(let _e=1;_e<ce.length;_e++){const ze=ce[Ke],it=ce[_e],nt=ze.start+ze.count,De=ne(it.start,T.width,4),st=ne(ze.start,T.width,4);it.start<=nt+1&&De===st&&ne(it.start+it.count-1,T.width,4)===De?ze.count=Math.max(ze.count,it.start+it.count-ze.start):(++Ke,ce[Ke]=it)}ce.length=Ke+1;const Le=r.getParameter(r.UNPACK_ROW_LENGTH),Ge=r.getParameter(r.UNPACK_SKIP_PIXELS),Je=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let _e=0,ze=ce.length;_e<ze;_e++){const it=ce[_e],nt=Math.floor(it.start/4),De=Math.ceil(it.count/4),st=nt%T.width,W=Math.floor(nt/T.width),Ne=De,xe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,st),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),t.texSubImage2D(r.TEXTURE_2D,0,st,W,Ne,xe,Q,pe,T.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,Je)}}function Ce(D,T,Q){let pe=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=r.TEXTURE_3D);const ve=Oe(D,T),ce=T.source;t.bindTexture(pe,D.__webglTexture,r.TEXTURE0+Q);const Ke=o.get(ce);if(ce.version!==Ke.__version||ve===!0){t.activeTexture(r.TEXTURE0+Q);const Le=Pt.getPrimaries(Pt.workingColorSpace),Ge=T.colorSpace===Yi?null:Pt.getPrimaries(T.colorSpace),Je=T.colorSpace===Yi||Le===Ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let _e=M(T.image,!1,s.maxTextureSize);_e=He(T,_e);const ze=l.convert(T.format,T.colorSpace),it=l.convert(T.type);let nt=P(T.internalFormat,ze,it,T.colorSpace,T.isVideoTexture);oe(pe,T);let De;const st=T.mipmaps,W=T.isVideoTexture!==!0,Ne=Ke.__version===void 0||ve===!0,xe=ce.dataReady,Ue=G(T,_e);if(T.isDepthTexture)nt=A(T.format===Na,T.type),Ne&&(W?t.texStorage2D(r.TEXTURE_2D,1,nt,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,nt,_e.width,_e.height,0,ze,it,null));else if(T.isDataTexture)if(st.length>0){W&&Ne&&t.texStorage2D(r.TEXTURE_2D,Ue,nt,st[0].width,st[0].height);for(let we=0,ge=st.length;we<ge;we++)De=st[we],W?xe&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,De.width,De.height,ze,it,De.data):t.texImage2D(r.TEXTURE_2D,we,nt,De.width,De.height,0,ze,it,De.data);T.generateMipmaps=!1}else W?(Ne&&t.texStorage2D(r.TEXTURE_2D,Ue,nt,_e.width,_e.height),xe&&me(T,_e,ze,it)):t.texImage2D(r.TEXTURE_2D,0,nt,_e.width,_e.height,0,ze,it,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,nt,st[0].width,st[0].height,_e.depth);for(let we=0,ge=st.length;we<ge;we++)if(De=st[we],T.format!==Ar)if(ze!==null)if(W){if(xe)if(T.layerUpdates.size>0){const Ie=$g(De.width,De.height,T.format,T.type);for(const ct of T.layerUpdates){const Lt=De.data.subarray(ct*Ie/De.data.BYTES_PER_ELEMENT,(ct+1)*Ie/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,ct,De.width,De.height,1,ze,Lt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,De.width,De.height,_e.depth,ze,De.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,we,nt,De.width,De.height,_e.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?xe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,De.width,De.height,_e.depth,ze,it,De.data):t.texImage3D(r.TEXTURE_2D_ARRAY,we,nt,De.width,De.height,_e.depth,0,ze,it,De.data)}else{W&&Ne&&t.texStorage2D(r.TEXTURE_2D,Ue,nt,st[0].width,st[0].height);for(let we=0,ge=st.length;we<ge;we++)De=st[we],T.format!==Ar?ze!==null?W?xe&&t.compressedTexSubImage2D(r.TEXTURE_2D,we,0,0,De.width,De.height,ze,De.data):t.compressedTexImage2D(r.TEXTURE_2D,we,nt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?xe&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,De.width,De.height,ze,it,De.data):t.texImage2D(r.TEXTURE_2D,we,nt,De.width,De.height,0,ze,it,De.data)}else if(T.isDataArrayTexture)if(W){if(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,nt,_e.width,_e.height,_e.depth),xe)if(T.layerUpdates.size>0){const we=$g(_e.width,_e.height,T.format,T.type);for(const ge of T.layerUpdates){const Ie=_e.data.subarray(ge*we/_e.data.BYTES_PER_ELEMENT,(ge+1)*we/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,_e.width,_e.height,1,ze,it,Ie)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,ze,it,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,nt,_e.width,_e.height,_e.depth,0,ze,it,_e.data);else if(T.isData3DTexture)W?(Ne&&t.texStorage3D(r.TEXTURE_3D,Ue,nt,_e.width,_e.height,_e.depth),xe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,ze,it,_e.data)):t.texImage3D(r.TEXTURE_3D,0,nt,_e.width,_e.height,_e.depth,0,ze,it,_e.data);else if(T.isFramebufferTexture){if(Ne)if(W)t.texStorage2D(r.TEXTURE_2D,Ue,nt,_e.width,_e.height);else{let we=_e.width,ge=_e.height;for(let Ie=0;Ie<Ue;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,nt,we,ge,0,ze,it,null),we>>=1,ge>>=1}}else if(st.length>0){if(W&&Ne){const we=Tt(st[0]);t.texStorage2D(r.TEXTURE_2D,Ue,nt,we.width,we.height)}for(let we=0,ge=st.length;we<ge;we++)De=st[we],W?xe&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,ze,it,De):t.texImage2D(r.TEXTURE_2D,we,nt,ze,it,De);T.generateMipmaps=!1}else if(W){if(Ne){const we=Tt(_e);t.texStorage2D(r.TEXTURE_2D,Ue,nt,we.width,we.height)}xe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,it,_e)}else t.texImage2D(r.TEXTURE_2D,0,nt,ze,it,_e);x(T)&&_(pe),Ke.__version=ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Se(D,T,Q){if(T.image.length!==6)return;const pe=Oe(D,T),ve=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Q);const ce=o.get(ve);if(ve.version!==ce.__version||pe===!0){t.activeTexture(r.TEXTURE0+Q);const Ke=Pt.getPrimaries(Pt.workingColorSpace),Le=T.colorSpace===Yi?null:Pt.getPrimaries(T.colorSpace),Ge=T.colorSpace===Yi||Ke===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Je=T.isCompressedTexture||T.image[0].isCompressedTexture,_e=T.image[0]&&T.image[0].isDataTexture,ze=[];for(let ge=0;ge<6;ge++)!Je&&!_e?ze[ge]=M(T.image[ge],!0,s.maxCubemapSize):ze[ge]=_e?T.image[ge].image:T.image[ge],ze[ge]=He(T,ze[ge]);const it=ze[0],nt=l.convert(T.format,T.colorSpace),De=l.convert(T.type),st=P(T.internalFormat,nt,De,T.colorSpace),W=T.isVideoTexture!==!0,Ne=ce.__version===void 0||pe===!0,xe=ve.dataReady;let Ue=G(T,it);oe(r.TEXTURE_CUBE_MAP,T);let we;if(Je){W&&Ne&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,st,it.width,it.height);for(let ge=0;ge<6;ge++){we=ze[ge].mipmaps;for(let Ie=0;Ie<we.length;Ie++){const ct=we[Ie];T.format!==Ar?nt!==null?W?xe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,ct.width,ct.height,nt,ct.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,st,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,ct.width,ct.height,nt,De,ct.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,st,ct.width,ct.height,0,nt,De,ct.data)}}}else{if(we=T.mipmaps,W&&Ne){we.length>0&&Ue++;const ge=Tt(ze[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,st,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(_e){W?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ze[ge].width,ze[ge].height,nt,De,ze[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,st,ze[ge].width,ze[ge].height,0,nt,De,ze[ge].data);for(let Ie=0;Ie<we.length;Ie++){const Lt=we[Ie].image[ge].image;W?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,Lt.width,Lt.height,nt,De,Lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,st,Lt.width,Lt.height,0,nt,De,Lt.data)}}else{W?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,nt,De,ze[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,st,nt,De,ze[ge]);for(let Ie=0;Ie<we.length;Ie++){const ct=we[Ie];W?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,nt,De,ct.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,st,nt,De,ct.image[ge])}}}x(T)&&_(r.TEXTURE_CUBE_MAP),ce.__version=ve.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ae(D,T,Q,pe,ve,ce){const Ke=l.convert(Q.format,Q.colorSpace),Le=l.convert(Q.type),Ge=P(Q.internalFormat,Ke,Le,Q.colorSpace),Je=o.get(T),_e=o.get(Q);if(_e.__renderTarget=T,!Je.__hasExternalTextures){const ze=Math.max(1,T.width>>ce),it=Math.max(1,T.height>>ce);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,ce,Ge,ze,it,T.depth,0,Ke,Le,null):t.texImage2D(ve,ce,Ge,ze,it,0,Ke,Le,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),ht(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ve,_e.__webglTexture,0,Be(T)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,ve,_e.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Z(D,T,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const pe=T.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,ce=A(T.stencilBuffer,ve),Ke=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=Be(T);ht(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Le,ce,T.width,T.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,ce,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ce,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ke,r.RENDERBUFFER,D)}else{const pe=T.textures;for(let ve=0;ve<pe.length;ve++){const ce=pe[ve],Ke=l.convert(ce.format,ce.colorSpace),Le=l.convert(ce.type),Ge=P(ce.internalFormat,Ke,Le,ce.colorSpace),Je=Be(T);Q&&ht(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,Ge,T.width,T.height):ht(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Je,Ge,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ge,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=o.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe(T.depthTexture,0);const ve=pe.__webglTexture,ce=Be(T);if(T.depthTexture.format===Da)ht(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Na)ht(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function be(D){const T=o.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=pe}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const pe=D.texture.mipmaps;pe&&pe.length>0?Ee(T.__webglFramebuffer[0],D):Ee(T.__webglFramebuffer,D)}else if(Q){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=r.createRenderbuffer(),Z(T.__webglDepthbuffer[pe],D,!1);else{const ve=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ce)}}else{const pe=D.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Z(T.__webglDepthbuffer,D,!1);else{const ve=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(D,T,Q){const pe=o.get(D);T!==void 0&&Ae(pe.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&be(D)}function Ze(D){const T=D.texture,Q=o.get(D),pe=o.get(T);D.addEventListener("dispose",k);const ve=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Ke=ve.length>1;if(Ke||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=T.version,c.memory.textures++),ce){Q.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[Le]=[];for(let Ge=0;Ge<T.mipmaps.length;Ge++)Q.__webglFramebuffer[Le][Ge]=r.createFramebuffer()}else Q.__webglFramebuffer[Le]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Le=0;Le<T.mipmaps.length;Le++)Q.__webglFramebuffer[Le]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Ke)for(let Le=0,Ge=ve.length;Le<Ge;Le++){const Je=o.get(ve[Le]);Je.__webglTexture===void 0&&(Je.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&ht(D)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Le=0;Le<ve.length;Le++){const Ge=ve[Le];Q.__webglColorRenderbuffer[Le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Le]);const Je=l.convert(Ge.format,Ge.colorSpace),_e=l.convert(Ge.type),ze=P(Ge.internalFormat,Je,_e,Ge.colorSpace,D.isXRRenderTarget===!0),it=Be(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,it,ze,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Le])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Z(Q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),oe(r.TEXTURE_CUBE_MAP,T);for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)Ae(Q.__webglFramebuffer[Le][Ge],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ge);else Ae(Q.__webglFramebuffer[Le],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);x(T)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Le=0,Ge=ve.length;Le<Ge;Le++){const Je=ve[Le],_e=o.get(Je);t.bindTexture(r.TEXTURE_2D,_e.__webglTexture),oe(r.TEXTURE_2D,Je),Ae(Q.__webglFramebuffer,D,Je,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,0),x(Je)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Le=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Le=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Le,pe.__webglTexture),oe(Le,T),T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)Ae(Q.__webglFramebuffer[Ge],D,T,r.COLOR_ATTACHMENT0,Le,Ge);else Ae(Q.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,Le,0);x(T)&&_(Le),t.unbindTexture()}D.depthBuffer&&be(D)}function U(D){const T=D.textures;for(let Q=0,pe=T.length;Q<pe;Q++){const ve=T[Q];if(x(ve)){const ce=L(D),Ke=o.get(ve).__webglTexture;t.bindTexture(ce,Ke),_(ce),t.unbindTexture()}}}const mt=[],pt=[];function Mt(D){if(D.samples>0){if(ht(D)===!1){const T=D.textures,Q=D.width,pe=D.height;let ve=r.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ke=o.get(D),Le=T.length>1;if(Le)for(let Je=0;Je<T.length;Je++)t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Ge=D.texture.mipmaps;Ge&&Ge.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Je=0;Je<T.length;Je++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[Je]);const _e=o.get(T[Je]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,Q,pe,0,0,Q,pe,ve,r.NEAREST),f===!0&&(mt.length=0,pt.length=0,mt.push(r.COLOR_ATTACHMENT0+Je),D.depthBuffer&&D.resolveDepthBuffer===!1&&(mt.push(ce),pt.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Le)for(let Je=0;Je<T.length;Je++){t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[Je]);const _e=o.get(T[Je]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.TEXTURE_2D,_e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Be(D){return Math.min(s.maxSamples,D.samples)}function ht(D){const T=o.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function et(D){const T=c.render.frame;m.get(D)!==T&&(m.set(D,T),D.update())}function He(D,T){const Q=D.colorSpace,pe=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==Ts&&Q!==Yi&&(Pt.getTransfer(Q)===Ft?(pe!==Ar||ve!==Yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function Tt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=ae,this.setTexture2D=fe,this.setTexture2DArray=ue,this.setTexture3D=he,this.setTextureCube=z,this.rebindTextures=ot,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ht}function QC(r,e){function t(o,s=Yi){let l;const c=Pt.getTransfer(s);if(o===Yr)return r.UNSIGNED_BYTE;if(o===vh)return r.UNSIGNED_SHORT_4_4_4_4;if(o===_h)return r.UNSIGNED_SHORT_5_5_5_1;if(o===x_)return r.UNSIGNED_INT_5_9_9_9_REV;if(o===v_)return r.BYTE;if(o===__)return r.SHORT;if(o===Pa)return r.UNSIGNED_SHORT;if(o===gh)return r.INT;if(o===Ao)return r.UNSIGNED_INT;if(o===hi)return r.FLOAT;if(o===Ha)return r.HALF_FLOAT;if(o===y_)return r.ALPHA;if(o===S_)return r.RGB;if(o===Ar)return r.RGBA;if(o===Da)return r.DEPTH_COMPONENT;if(o===Na)return r.DEPTH_STENCIL;if(o===E_)return r.RED;if(o===xh)return r.RED_INTEGER;if(o===M_)return r.RG;if(o===yh)return r.RG_INTEGER;if(o===Sh)return r.RGBA_INTEGER;if(o===Eu||o===Mu||o===wu||o===Tu)if(c===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===Eu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Mu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===wu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Tu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===Eu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Mu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===wu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Tu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===bf||o===Pf||o===Lf||o===Df)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===bf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Pf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Lf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Df)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Nf||o===Uf||o===If)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(o===Nf||o===Uf)return c===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===If)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Ff||o===kf||o===Of||o===Bf||o===zf||o===Hf||o===Vf||o===Gf||o===Wf||o===Xf||o===jf||o===$f||o===Yf||o===qf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(o===Ff)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===kf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Of)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Bf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===zf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Hf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Vf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Gf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Wf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Xf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===jf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===$f)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Yf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===qf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Cu||o===Kf||o===Zf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(o===Cu)return c===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Kf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Zf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===w_||o===Jf||o===Qf||o===eh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(o===Cu)return l.COMPRESSED_RED_RGTC1_EXT;if(o===Jf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Qf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===eh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===La?r.UNSIGNED_INT_24_8:r[o]!==void 0?r[o]:null}return{convert:t}}const eR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tR=`
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

}`;class nR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,o){if(this.texture===null){const s=new zn,l=e.properties.get(s);l.__webglTexture=t.texture,(t.depthNear!==o.depthNear||t.depthFar!==o.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,o=new Zi({vertexShader:eR,fragmentShader:tR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gr(new zu(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rR extends Ps{constructor(e,t){super();const o=this;let s=null,l=1,c=null,d="local-floor",f=1,p=null,m=null,v=null,y=null,S=null,E=null;const M=new nR,x=t.getContextAttributes();let _=null,L=null;const P=[],A=[],G=new Dt;let I=null;const k=new hr;k.viewport=new Jt;const X=new hr;X.viewport=new Jt;const b=[k,X],C=new wM;let V=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=P[ne];return me===void 0&&(me=new Kd,P[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=P[ne];return me===void 0&&(me=new Kd,P[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=P[ne];return me===void 0&&(me=new Kd,P[ne]=me),me.getHandSpace()};function J(ne){const me=A.indexOf(ne.inputSource);if(me===-1)return;const Ce=P[me];Ce!==void 0&&(Ce.update(ne.inputSource,ne.frame,p||c),Ce.dispatchEvent({type:ne.type,data:ne.inputSource}))}function ee(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",fe);for(let ne=0;ne<P.length;ne++){const me=A[ne];me!==null&&(A[ne]=null,P[ne].disconnect(me))}V=null,ae=null,M.reset(),e.setRenderTarget(_),S=null,y=null,v=null,s=null,L=null,Oe.stop(),o.isPresenting=!1,e.setPixelRatio(I),e.setSize(G.width,G.height,!1),o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",fe),x.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Se=null,Ae=null;x.depth&&(Ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=x.stencil?Na:Da,Se=x.stencil?La:Ao);const Z={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};v=new XRWebGLBinding(s,t),y=v.createProjectionLayer(Z),s.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new bo(y.textureWidth,y.textureHeight,{format:Ar,type:Yr,depthTexture:new I_(y.textureWidth,y.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ce={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new bo(S.framebufferWidth,S.framebufferHeight,{format:Ar,type:Yr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),p=null,c=await s.requestReferenceSpace(d),Oe.setContext(s),Oe.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function fe(ne){for(let me=0;me<ne.removed.length;me++){const Ce=ne.removed[me],Se=A.indexOf(Ce);Se>=0&&(A[Se]=null,P[Se].disconnect(Ce))}for(let me=0;me<ne.added.length;me++){const Ce=ne.added[me];let Se=A.indexOf(Ce);if(Se===-1){for(let Z=0;Z<P.length;Z++)if(Z>=A.length){A.push(Ce),Se=Z;break}else if(A[Z]===null){A[Z]=Ce,Se=Z;break}if(Se===-1)break}const Ae=P[Se];Ae&&Ae.connect(Ce)}}const ue=new re,he=new re;function z(ne,me,Ce){ue.setFromMatrixPosition(me.matrixWorld),he.setFromMatrixPosition(Ce.matrixWorld);const Se=ue.distanceTo(he),Ae=me.projectionMatrix.elements,Z=Ce.projectionMatrix.elements,Ee=Ae[14]/(Ae[10]-1),be=Ae[14]/(Ae[10]+1),ot=(Ae[9]+1)/Ae[5],Ze=(Ae[9]-1)/Ae[5],U=(Ae[8]-1)/Ae[0],mt=(Z[8]+1)/Z[0],pt=Ee*U,Mt=Ee*mt,Be=Se/(-U+mt),ht=Be*-U;if(me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ht),ne.translateZ(Be),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ae[10]===-1)ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const et=Ee+Be,He=be+Be,Tt=pt-ht,D=Mt+(Se-ht),T=ot*be/He*et,Q=Ze*be/He*et;ne.projectionMatrix.makePerspective(Tt,D,T,Q,et,He),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function de(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let me=ne.near,Ce=ne.far;M.texture!==null&&(M.depthNear>0&&(me=M.depthNear),M.depthFar>0&&(Ce=M.depthFar)),C.near=X.near=k.near=me,C.far=X.far=k.far=Ce,(V!==C.near||ae!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,ae=C.far),k.layers.mask=ne.layers.mask|2,X.layers.mask=ne.layers.mask|4,C.layers.mask=k.layers.mask|X.layers.mask;const Se=ne.parent,Ae=C.cameras;de(C,Se);for(let Z=0;Z<Ae.length;Z++)de(Ae[Z],Se);Ae.length===2?z(C,k,X):C.projectionMatrix.copy(k.projectionMatrix),le(ne,C,Se)};function le(ne,me,Ce){Ce===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(Ce.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ua*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&S===null))return f},this.setFoveation=function(ne){f=ne,y!==null&&(y.fixedFoveation=ne),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)};let F=null;function oe(ne,me){if(m=me.getViewerPose(p||c),E=me,m!==null){const Ce=m.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Se=!1;Ce.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let Ee=0;Ee<Ce.length;Ee++){const be=Ce[Ee];let ot=null;if(S!==null)ot=S.getViewport(be);else{const U=v.getViewSubImage(y,be);ot=U.viewport,Ee===0&&(e.setRenderTargetTextures(L,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(L))}let Ze=b[Ee];Ze===void 0&&(Ze=new hr,Ze.layers.enable(Ee),Ze.viewport=new Jt,b[Ee]=Ze),Ze.matrix.fromArray(be.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(be.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ot.x,ot.y,ot.width,ot.height),Ee===0&&(C.matrix.copy(Ze.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Se===!0&&C.cameras.push(Ze)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){const Ee=v.getDepthInformation(Ce[0]);Ee&&Ee.isValid&&Ee.texture&&M.init(e,Ee,s.renderState)}}for(let Ce=0;Ce<P.length;Ce++){const Se=A[Ce],Ae=P[Ce];Se!==null&&Ae!==void 0&&Ae.update(Se,me,p||c)}F&&F(ne,me),me.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:me}),E=null}const Oe=new k_;Oe.setAnimationLoop(oe),this.setAnimationLoop=function(ne){F=ne},this.dispose=function(){}}}const xo=new Bn,iR=new Qt;function oR(r,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function o(x,_){_.color.getRGB(x.fogColor.value,D_(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,L,P,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(x,_):_.isMeshToonMaterial?(l(x,_),v(x,_)):_.isMeshPhongMaterial?(l(x,_),m(x,_)):_.isMeshStandardMaterial?(l(x,_),y(x,_),_.isMeshPhysicalMaterial&&S(x,_,A)):_.isMeshMatcapMaterial?(l(x,_),E(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),M(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?f(x,_,L,P):_.isSpriteMaterial?p(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Yn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Yn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const L=e.get(_),P=L.envMap,A=L.envMapRotation;P&&(x.envMap.value=P,xo.copy(A),xo.x*=-1,xo.y*=-1,xo.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(xo.y*=-1,xo.z*=-1),x.envMapRotation.value.setFromMatrix4(iR.makeRotationFromEuler(xo)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function f(x,_,L,P){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*L,x.scale.value=P*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,L){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function M(x,_){const L=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:s}}function sR(r,e,t,o){let s={},l={},c=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,P){const A=P.program;o.uniformBlockBinding(L,A)}function p(L,P){let A=s[L.id];A===void 0&&(E(L),A=m(L),s[L.id]=A,L.addEventListener("dispose",x));const G=P.program;o.updateUBOMapping(L,G);const I=e.render.frame;l[L.id]!==I&&(y(L),l[L.id]=I)}function m(L){const P=v();L.__bindingPointIndex=P;const A=r.createBuffer(),G=L.__size,I=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,G,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,A),A}function v(){for(let L=0;L<d;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const P=s[L.id],A=L.uniforms,G=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let I=0,k=A.length;I<k;I++){const X=Array.isArray(A[I])?A[I]:[A[I]];for(let b=0,C=X.length;b<C;b++){const V=X[b];if(S(V,I,b,G)===!0){const ae=V.__offset,J=Array.isArray(V.value)?V.value:[V.value];let ee=0;for(let fe=0;fe<J.length;fe++){const ue=J[fe],he=M(ue);typeof ue=="number"||typeof ue=="boolean"?(V.__data[0]=ue,r.bufferSubData(r.UNIFORM_BUFFER,ae+ee,V.__data)):ue.isMatrix3?(V.__data[0]=ue.elements[0],V.__data[1]=ue.elements[1],V.__data[2]=ue.elements[2],V.__data[3]=0,V.__data[4]=ue.elements[3],V.__data[5]=ue.elements[4],V.__data[6]=ue.elements[5],V.__data[7]=0,V.__data[8]=ue.elements[6],V.__data[9]=ue.elements[7],V.__data[10]=ue.elements[8],V.__data[11]=0):(ue.toArray(V.__data,ee),ee+=he.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ae,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,P,A,G){const I=L.value,k=P+"_"+A;if(G[k]===void 0)return typeof I=="number"||typeof I=="boolean"?G[k]=I:G[k]=I.clone(),!0;{const X=G[k];if(typeof I=="number"||typeof I=="boolean"){if(X!==I)return G[k]=I,!0}else if(X.equals(I)===!1)return X.copy(I),!0}return!1}function E(L){const P=L.uniforms;let A=0;const G=16;for(let k=0,X=P.length;k<X;k++){const b=Array.isArray(P[k])?P[k]:[P[k]];for(let C=0,V=b.length;C<V;C++){const ae=b[C],J=Array.isArray(ae.value)?ae.value:[ae.value];for(let ee=0,fe=J.length;ee<fe;ee++){const ue=J[ee],he=M(ue),z=A%G,de=z%he.boundary,le=z+de;A+=de,le!==0&&G-le<he.storage&&(A+=G-le),ae.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=A,A+=he.storage}}}const I=A%G;return I>0&&(A+=G-I),L.__size=A,L.__cache={},this}function M(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function x(L){const P=L.target;P.removeEventListener("dispose",x);const A=c.indexOf(P.__bindingPointIndex);c.splice(A,1),r.deleteBuffer(s[P.id]),delete s[P.id],delete l[P.id]}function _(){for(const L in s)r.deleteBuffer(s[L]);c=[],s={},l={}}return{bind:f,update:p,dispose:_}}class aR{constructor(e={}){const{canvas:t=IE(),context:o=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(o!==null){if(typeof WebGLRenderingContext<"u"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=o.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),M=new Int32Array(4);let x=null,_=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let G=!1;this._outputColorSpace=On;let I=0,k=0,X=null,b=-1,C=null;const V=new Jt,ae=new Jt;let J=null;const ee=new Ut(0);let fe=0,ue=t.width,he=t.height,z=1,de=null,le=null;const F=new Jt(0,0,ue,he),oe=new Jt(0,0,ue,he);let Oe=!1;const ne=new Ch;let me=!1,Ce=!1;const Se=new Qt,Ae=new Qt,Z=new re,Ee=new Jt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Ze(){return X===null?z:1}let U=o;function mt(R,$){return t.getContext(R,$)}try{const R={alpha:!0,depth:s,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mh}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",ge,!1),U===null){const $="webgl2";if(U=mt($,R),U===null)throw mt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let pt,Mt,Be,ht,et,He,Tt,D,T,Q,pe,ve,ce,Ke,Le,Ge,Je,_e,ze,it,nt,De,st,W;function Ne(){pt=new v1(U),pt.init(),De=new QC(U,pt),Mt=new c1(U,pt,e,De),Be=new ZC(U,pt),Mt.reverseDepthBuffer&&y&&Be.buffers.depth.setReversed(!0),ht=new y1(U),et=new OC,He=new JC(U,pt,Be,et,Mt,De,ht),Tt=new f1(A),D=new g1(A),T=new CM(U),st=new l1(U,T),Q=new _1(U,T,ht,st),pe=new E1(U,Q,T,ht),ze=new S1(U,Mt,He),Ge=new d1(et),ve=new kC(A,Tt,D,pt,Mt,st,Ge),ce=new oR(A,et),Ke=new zC,Le=new jC(pt),_e=new a1(A,Tt,D,Be,pe,S,f),Je=new qC(A,pe,Mt),W=new sR(U,ht,Mt,Be),it=new u1(U,pt,ht),nt=new x1(U,pt,ht),ht.programs=ve.programs,A.capabilities=Mt,A.extensions=pt,A.properties=et,A.renderLists=Ke,A.shadowMap=Je,A.state=Be,A.info=ht}Ne();const xe=new rR(A,U);this.xr=xe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(ue,he,!1))},this.getSize=function(R){return R.set(ue,he)},this.setSize=function(R,$,se=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=R,he=$,t.width=Math.floor(R*z),t.height=Math.floor($*z),se===!0&&(t.style.width=R+"px",t.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(ue*z,he*z).floor()},this.setDrawingBufferSize=function(R,$,se){ue=R,he=$,z=se,t.width=Math.floor(R*se),t.height=Math.floor($*se),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,$,se,K){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,$,se,K),Be.viewport(V.copy(F).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(oe)},this.setScissor=function(R,$,se,K){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,$,se,K),Be.scissor(ae.copy(oe).multiplyScalar(z).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(R){Be.setScissorTest(Oe=R)},this.setOpaqueSort=function(R){de=R},this.setTransparentSort=function(R){le=R},this.getClearColor=function(R){return R.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,se=!0){let K=0;if(R){let Y=!1;if(X!==null){const Re=X.texture.format;Y=Re===Sh||Re===yh||Re===xh}if(Y){const Re=X.texture.type,Fe=Re===Yr||Re===Ao||Re===Pa||Re===La||Re===vh||Re===_h,je=_e.getClearColor(),Xe=_e.getClearAlpha(),dt=je.r,ut=je.g,Ye=je.b;Fe?(E[0]=dt,E[1]=ut,E[2]=Ye,E[3]=Xe,U.clearBufferuiv(U.COLOR,0,E)):(M[0]=dt,M[1]=ut,M[2]=Ye,M[3]=Xe,U.clearBufferiv(U.COLOR,0,M))}else K|=U.COLOR_BUFFER_BIT}$&&(K|=U.DEPTH_BUFFER_BIT),se&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),_e.dispose(),Ke.dispose(),Le.dispose(),et.dispose(),Tt.dispose(),D.dispose(),pe.dispose(),st.dispose(),W.dispose(),ve.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Si),xe.removeEventListener("sessionend",gr),qn.stop()};function Ue(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=ht.autoReset,$=Je.enabled,se=Je.autoUpdate,K=Je.needsUpdate,Y=Je.type;Ne(),ht.autoReset=R,Je.enabled=$,Je.autoUpdate=se,Je.needsUpdate=K,Je.type=Y}function ge(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ie(R){const $=R.target;$.removeEventListener("dispose",Ie),ct($)}function ct(R){Lt(R),et.remove(R)}function Lt(R){const $=et.get(R).programs;$!==void 0&&($.forEach(function(se){ve.releaseProgram(se)}),R.isShaderMaterial&&ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,se,K,Y,Re){$===null&&($=be);const Fe=Y.isMesh&&Y.matrixWorld.determinant()<0,je=kt(R,$,se,K,Y);Be.setMaterial(K,Fe);let Xe=se.index,dt=1;if(K.wireframe===!0){if(Xe=Q.getWireframeAttribute(se),Xe===void 0)return;dt=2}const ut=se.drawRange,Ye=se.attributes.position;let xt=ut.start*dt,vt=(ut.start+ut.count)*dt;Re!==null&&(xt=Math.max(xt,Re.start*dt),vt=Math.min(vt,(Re.start+Re.count)*dt)),Xe!==null?(xt=Math.max(xt,0),vt=Math.min(vt,Xe.count)):Ye!=null&&(xt=Math.max(xt,0),vt=Math.min(vt,Ye.count));const Gt=vt-xt;if(Gt<0||Gt===1/0)return;st.setup(Y,K,je,se,Xe);let Ot,Nt=it;if(Xe!==null&&(Ot=T.get(Xe),Nt=nt,Nt.setIndex(Ot)),Y.isMesh)K.wireframe===!0?(Be.setLineWidth(K.wireframeLinewidth*Ze()),Nt.setMode(U.LINES)):Nt.setMode(U.TRIANGLES);else if(Y.isLine){let rt=K.linewidth;rt===void 0&&(rt=1),Be.setLineWidth(rt*Ze()),Y.isLineSegments?Nt.setMode(U.LINES):Y.isLineLoop?Nt.setMode(U.LINE_LOOP):Nt.setMode(U.LINE_STRIP)}else Y.isPoints?Nt.setMode(U.POINTS):Y.isSprite&&Nt.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const rt=Y._multiDrawStarts,It=Y._multiDrawCounts,yt=Y._multiDrawCount,un=Xe?T.get(Xe).bytesPerElement:1,Ei=et.get(K).currentProgram.getUniforms();for(let Dn=0;Dn<yt;Dn++)Ei.setValue(U,"_gl_DrawID",Dn),Nt.render(rt[Dn]/un,It[Dn])}else if(Y.isInstancedMesh)Nt.renderInstances(xt,Gt,Y.count);else if(se.isInstancedBufferGeometry){const rt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,It=Math.min(se.instanceCount,rt);Nt.renderInstances(xt,Gt,It)}else Nt.render(xt,Gt)};function Ct(R,$,se){R.transparent===!0&&R.side===zr&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,We(R,$,se),R.side=Ki,R.needsUpdate=!0,We(R,$,se),R.side=zr):We(R,$,se)}this.compile=function(R,$,se=null){se===null&&(se=R),_=Le.get(se),_.init($),P.push(_),se.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),R!==se&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const K=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Re=Y.material;if(Re)if(Array.isArray(Re))for(let Fe=0;Fe<Re.length;Fe++){const je=Re[Fe];Ct(je,se,Y),K.add(je)}else Ct(Re,se,Y),K.add(Re)}),_=P.pop(),K},this.compileAsync=function(R,$,se=null){const K=this.compile(R,$,se);return new Promise(Y=>{function Re(){if(K.forEach(function(Fe){et.get(Fe).currentProgram.isReady()&&K.delete(Fe)}),K.size===0){Y(R);return}setTimeout(Re,10)}pt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let gn=null;function rn(R){gn&&gn(R)}function Si(){qn.stop()}function gr(){qn.start()}const qn=new k_;qn.setAnimationLoop(rn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(R){gn=R,xe.setAnimationLoop(R),R===null?qn.stop():qn.start()},xe.addEventListener("sessionstart",Si),xe.addEventListener("sessionend",gr),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera($),$=xe.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,$,X),_=Le.get(R,P.length),_.init($),P.push(_),Ae.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ne.setFromProjectionMatrix(Ae),Ce=this.localClippingEnabled,me=Ge.init(this.clippingPlanes,Ce),x=Ke.get(R,L.length),x.init(),L.push(x),xe.enabled===!0&&xe.isPresenting===!0){const Re=A.xr.getDepthSensingMesh();Re!==null&&vr(Re,$,-1/0,A.sortObjects)}vr(R,$,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(de,le),ot=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,ot&&_e.addToRenderList(x,R),this.info.render.frame++,me===!0&&Ge.beginShadows();const se=_.state.shadowsArray;Je.render(se,R,$),me===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,Y=x.transmissive;if(_.setupLights(),$.isArrayCamera){const Re=$.cameras;if(Y.length>0)for(let Fe=0,je=Re.length;Fe<je;Fe++){const Xe=Re[Fe];Pr(K,Y,R,Xe)}ot&&_e.render(R);for(let Fe=0,je=Re.length;Fe<je;Fe++){const Xe=Re[Fe];qr(x,R,Xe,Xe.viewport)}}else Y.length>0&&Pr(K,Y,R,$),ot&&_e.render(R),qr(x,R,$);X!==null&&k===0&&(He.updateMultisampleRenderTarget(X),He.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(A,R,$),st.resetDefaultState(),b=-1,C=null,P.pop(),P.length>0?(_=P[P.length-1],me===!0&&Ge.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?x=L[L.length-1]:x=null};function vr(R,$,se,K){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ne.intersectsSprite(R)){K&&Ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ae);const Fe=pe.update(R),je=R.material;je.visible&&x.push(R,Fe,je,se,Ee.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ne.intersectsObject(R))){const Fe=pe.update(R),je=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ee.copy(R.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ee.copy(Fe.boundingSphere.center)),Ee.applyMatrix4(R.matrixWorld).applyMatrix4(Ae)),Array.isArray(je)){const Xe=Fe.groups;for(let dt=0,ut=Xe.length;dt<ut;dt++){const Ye=Xe[dt],xt=je[Ye.materialIndex];xt&&xt.visible&&x.push(R,Fe,xt,se,Ee.z,Ye)}}else je.visible&&x.push(R,Fe,je,se,Ee.z,null)}}const Re=R.children;for(let Fe=0,je=Re.length;Fe<je;Fe++)vr(Re[Fe],$,se,K)}function qr(R,$,se,K){const Y=R.opaque,Re=R.transmissive,Fe=R.transparent;_.setupLightsView(se),me===!0&&Ge.setGlobalState(A.clippingPlanes,se),K&&Be.viewport(V.copy(K)),Y.length>0&&Lr(Y,$,se),Re.length>0&&Lr(Re,$,se),Fe.length>0&&Lr(Fe,$,se),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Pr(R,$,se,K){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[K.id]===void 0&&(_.state.transmissionRenderTarget[K.id]=new bo(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Ha:Yr,minFilter:Co,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Re=_.state.transmissionRenderTarget[K.id],Fe=K.viewport||V;Re.setSize(Fe.z*A.transmissionResolutionScale,Fe.w*A.transmissionResolutionScale);const je=A.getRenderTarget(),Xe=A.getActiveCubeFace(),dt=A.getActiveMipmapLevel();A.setRenderTarget(Re),A.getClearColor(ee),fe=A.getClearAlpha(),fe<1&&A.setClearColor(16777215,.5),A.clear(),ot&&_e.render(se);const ut=A.toneMapping;A.toneMapping=gi;const Ye=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),_.setupLightsView(K),me===!0&&Ge.setGlobalState(A.clippingPlanes,K),Lr(R,se,K),He.updateMultisampleRenderTarget(Re),He.updateRenderTargetMipmap(Re),pt.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let vt=0,Gt=$.length;vt<Gt;vt++){const Ot=$[vt],Nt=Ot.object,rt=Ot.geometry,It=Ot.material,yt=Ot.group;if(It.side===zr&&Nt.layers.test(K.layers)){const un=It.side;It.side=Yn,It.needsUpdate=!0,Lo(Nt,se,K,rt,It,yt),It.side=un,It.needsUpdate=!0,xt=!0}}xt===!0&&(He.updateMultisampleRenderTarget(Re),He.updateRenderTargetMipmap(Re))}A.setRenderTarget(je,Xe,dt),A.setClearColor(ee,fe),Ye!==void 0&&(K.viewport=Ye),A.toneMapping=ut}function Lr(R,$,se){const K=$.isScene===!0?$.overrideMaterial:null;for(let Y=0,Re=R.length;Y<Re;Y++){const Fe=R[Y],je=Fe.object,Xe=Fe.geometry,dt=Fe.group;let ut=Fe.material;ut.allowOverride===!0&&K!==null&&(ut=K),je.layers.test(se.layers)&&Lo(je,$,se,Xe,ut,dt)}}function Lo(R,$,se,K,Y,Re){R.onBeforeRender(A,$,se,K,Y,Re),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(A,$,se,K,R,Re),Y.transparent===!0&&Y.side===zr&&Y.forceSinglePass===!1?(Y.side=Yn,Y.needsUpdate=!0,A.renderBufferDirect(se,$,K,Y,R,Re),Y.side=Ki,Y.needsUpdate=!0,A.renderBufferDirect(se,$,K,Y,R,Re),Y.side=zr):A.renderBufferDirect(se,$,K,Y,R,Re),R.onAfterRender(A,$,se,K,Y,Re)}function We(R,$,se){$.isScene!==!0&&($=be);const K=et.get(R),Y=_.state.lights,Re=_.state.shadowsArray,Fe=Y.state.version,je=ve.getParameters(R,Y.state,Re,$,se),Xe=ve.getProgramCacheKey(je);let dt=K.programs;K.environment=R.isMeshStandardMaterial?$.environment:null,K.fog=$.fog,K.envMap=(R.isMeshStandardMaterial?D:Tt).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,dt===void 0&&(R.addEventListener("dispose",Ie),dt=new Map,K.programs=dt);let ut=dt.get(Xe);if(ut!==void 0){if(K.currentProgram===ut&&K.lightsStateVersion===Fe)return Et(R,je),ut}else je.uniforms=ve.getUniforms(R),R.onBeforeCompile(je,A),ut=ve.acquireProgram(je,Xe),dt.set(Xe,ut),K.uniforms=je.uniforms;const Ye=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Ge.uniform),Et(R,je),K.needsLights=Ln(R),K.lightsStateVersion=Fe,K.needsLights&&(Ye.ambientLightColor.value=Y.state.ambient,Ye.lightProbe.value=Y.state.probe,Ye.directionalLights.value=Y.state.directional,Ye.directionalLightShadows.value=Y.state.directionalShadow,Ye.spotLights.value=Y.state.spot,Ye.spotLightShadows.value=Y.state.spotShadow,Ye.rectAreaLights.value=Y.state.rectArea,Ye.ltc_1.value=Y.state.rectAreaLTC1,Ye.ltc_2.value=Y.state.rectAreaLTC2,Ye.pointLights.value=Y.state.point,Ye.pointLightShadows.value=Y.state.pointShadow,Ye.hemisphereLights.value=Y.state.hemi,Ye.directionalShadowMap.value=Y.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ye.spotShadowMap.value=Y.state.spotShadowMap,Ye.spotLightMatrix.value=Y.state.spotLightMatrix,Ye.spotLightMap.value=Y.state.spotLightMap,Ye.pointShadowMap.value=Y.state.pointShadowMap,Ye.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=ut,K.uniformsList=null,ut}function qt(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=Ru.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function Et(R,$){const se=et.get(R);se.outputColorSpace=$.outputColorSpace,se.batching=$.batching,se.batchingColor=$.batchingColor,se.instancing=$.instancing,se.instancingColor=$.instancingColor,se.instancingMorph=$.instancingMorph,se.skinning=$.skinning,se.morphTargets=$.morphTargets,se.morphNormals=$.morphNormals,se.morphColors=$.morphColors,se.morphTargetsCount=$.morphTargetsCount,se.numClippingPlanes=$.numClippingPlanes,se.numIntersection=$.numClipIntersection,se.vertexAlphas=$.vertexAlphas,se.vertexTangents=$.vertexTangents,se.toneMapping=$.toneMapping}function kt(R,$,se,K,Y){$.isScene!==!0&&($=be),He.resetTextureUnits();const Re=$.fog,Fe=K.isMeshStandardMaterial?$.environment:null,je=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ts,Xe=(K.isMeshStandardMaterial?D:Tt).get(K.envMap||Fe),dt=K.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ut=!!se.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ye=!!se.morphAttributes.position,xt=!!se.morphAttributes.normal,vt=!!se.morphAttributes.color;let Gt=gi;K.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Gt=A.toneMapping);const Ot=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Nt=Ot!==void 0?Ot.length:0,rt=et.get(K),It=_.state.lights;if(me===!0&&(Ce===!0||R!==C)){const vn=R===C&&K.id===b;Ge.setState(K,R,vn)}let yt=!1;K.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==It.state.version||rt.outputColorSpace!==je||Y.isBatchedMesh&&rt.batching===!1||!Y.isBatchedMesh&&rt.batching===!0||Y.isBatchedMesh&&rt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&rt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&rt.instancing===!1||!Y.isInstancedMesh&&rt.instancing===!0||Y.isSkinnedMesh&&rt.skinning===!1||!Y.isSkinnedMesh&&rt.skinning===!0||Y.isInstancedMesh&&rt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&rt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&rt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&rt.instancingMorph===!1&&Y.morphTexture!==null||rt.envMap!==Xe||K.fog===!0&&rt.fog!==Re||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Ge.numPlanes||rt.numIntersection!==Ge.numIntersection)||rt.vertexAlphas!==dt||rt.vertexTangents!==ut||rt.morphTargets!==Ye||rt.morphNormals!==xt||rt.morphColors!==vt||rt.toneMapping!==Gt||rt.morphTargetsCount!==Nt)&&(yt=!0):(yt=!0,rt.__version=K.version);let un=rt.currentProgram;yt===!0&&(un=We(K,$,Y));let Ei=!1,Dn=!1,Kr=!1;const Bt=un.getUniforms(),Mn=rt.uniforms;if(Be.useProgram(un.program)&&(Ei=!0,Dn=!0,Kr=!0),K.id!==b&&(b=K.id,Dn=!0),Ei||C!==R){Be.buffers.depth.getReversed()?(Se.copy(R.projectionMatrix),kE(Se),OE(Se),Bt.setValue(U,"projectionMatrix",Se)):Bt.setValue(U,"projectionMatrix",R.projectionMatrix),Bt.setValue(U,"viewMatrix",R.matrixWorldInverse);const dn=Bt.map.cameraPosition;dn!==void 0&&dn.setValue(U,Z.setFromMatrixPosition(R.matrixWorld)),Mt.logarithmicDepthBuffer&&Bt.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Bt.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Dn=!0,Kr=!0)}if(Y.isSkinnedMesh){Bt.setOptional(U,Y,"bindMatrix"),Bt.setOptional(U,Y,"bindMatrixInverse");const vn=Y.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Bt.setValue(U,"boneTexture",vn.boneTexture,He))}Y.isBatchedMesh&&(Bt.setOptional(U,Y,"batchingTexture"),Bt.setValue(U,"batchingTexture",Y._matricesTexture,He),Bt.setOptional(U,Y,"batchingIdTexture"),Bt.setValue(U,"batchingIdTexture",Y._indirectTexture,He),Bt.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Bt.setValue(U,"batchingColorTexture",Y._colorsTexture,He));const cn=se.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&ze.update(Y,se,un),(Dn||rt.receiveShadow!==Y.receiveShadow)&&(rt.receiveShadow=Y.receiveShadow,Bt.setValue(U,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Mn.envMap.value=Xe,Mn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&$.environment!==null&&(Mn.envMapIntensity.value=$.environmentIntensity),Dn&&(Bt.setValue(U,"toneMappingExposure",A.toneMappingExposure),rt.needsLights&&Kt(Mn,Kr),Re&&K.fog===!0&&ce.refreshFogUniforms(Mn,Re),ce.refreshMaterialUniforms(Mn,K,z,he,_.state.transmissionRenderTarget[R.id]),Ru.upload(U,qt(rt),Mn,He)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ru.upload(U,qt(rt),Mn,He),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Bt.setValue(U,"center",Y.center),Bt.setValue(U,"modelViewMatrix",Y.modelViewMatrix),Bt.setValue(U,"normalMatrix",Y.normalMatrix),Bt.setValue(U,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const vn=K.uniformsGroups;for(let dn=0,Rt=vn.length;dn<Rt;dn++){const Dr=vn[dn];W.update(Dr,un),W.bind(Dr,un)}}return un}function Kt(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Ln(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,$,se){const K=et.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),et.get(R.texture).__webglTexture=$,et.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:se,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const se=et.get(R);se.__webglFramebuffer=$,se.__useDefaultFramebuffer=$===void 0};const Sn=U.createFramebuffer();this.setRenderTarget=function(R,$=0,se=0){X=R,I=$,k=se;let K=!0,Y=null,Re=!1,Fe=!1;if(R){const Xe=et.get(R);if(Xe.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(U.FRAMEBUFFER,null),K=!1;else if(Xe.__webglFramebuffer===void 0)He.setupRenderTarget(R);else if(Xe.__hasExternalTextures)He.rebindTextures(R,et.get(R.texture).__webglTexture,et.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(Xe.__boundDepthTexture!==Ye){if(Ye!==null&&et.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(R)}}const dt=R.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Fe=!0);const ut=et.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ut[$])?Y=ut[$][se]:Y=ut[$],Re=!0):R.samples>0&&He.useMultisampledRTT(R)===!1?Y=et.get(R).__webglMultisampledFramebuffer:Array.isArray(ut)?Y=ut[se]:Y=ut,V.copy(R.viewport),ae.copy(R.scissor),J=R.scissorTest}else V.copy(F).multiplyScalar(z).floor(),ae.copy(oe).multiplyScalar(z).floor(),J=Oe;if(se!==0&&(Y=Sn),Be.bindFramebuffer(U.FRAMEBUFFER,Y)&&K&&Be.drawBuffers(R,Y),Be.viewport(V),Be.scissor(ae),Be.setScissorTest(J),Re){const Xe=et.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+$,Xe.__webglTexture,se)}else if(Fe){const Xe=et.get(R.texture),dt=$;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xe.__webglTexture,se,dt)}else if(R!==null&&se!==0){const Xe=et.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xe.__webglTexture,se)}b=-1},this.readRenderTargetPixels=function(R,$,se,K,Y,Re,Fe,je=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(Xe=Xe[Fe]),Xe){Be.bindFramebuffer(U.FRAMEBUFFER,Xe);try{const dt=R.textures[je],ut=dt.format,Ye=dt.type;if(!Mt.textureFormatReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-K&&se>=0&&se<=R.height-Y&&(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+je),U.readPixels($,se,K,Y,De.convert(ut),De.convert(Ye),Re))}finally{const dt=X!==null?et.get(X).__webglFramebuffer:null;Be.bindFramebuffer(U.FRAMEBUFFER,dt)}}},this.readRenderTargetPixelsAsync=async function(R,$,se,K,Y,Re,Fe,je=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(Xe=Xe[Fe]),Xe)if($>=0&&$<=R.width-K&&se>=0&&se<=R.height-Y){Be.bindFramebuffer(U.FRAMEBUFFER,Xe);const dt=R.textures[je],ut=dt.format,Ye=dt.type;if(!Mt.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.bufferData(U.PIXEL_PACK_BUFFER,Re.byteLength,U.STREAM_READ),R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+je),U.readPixels($,se,K,Y,De.convert(ut),De.convert(Ye),0);const vt=X!==null?et.get(X).__webglFramebuffer:null;Be.bindFramebuffer(U.FRAMEBUFFER,vt);const Gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await FE(U,Gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Re),U.deleteBuffer(xt),U.deleteSync(Gt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,se=0){const K=Math.pow(2,-se),Y=Math.floor(R.image.width*K),Re=Math.floor(R.image.height*K),Fe=$!==null?$.x:0,je=$!==null?$.y:0;He.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,se,0,0,Fe,je,Y,Re),Be.unbindTexture()};const Kn=U.createFramebuffer(),En=U.createFramebuffer();this.copyTextureToTexture=function(R,$,se=null,K=null,Y=0,Re=null){Re===null&&(Y!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=Y,Y=0):Re=0);let Fe,je,Xe,dt,ut,Ye,xt,vt,Gt;const Ot=R.isCompressedTexture?R.mipmaps[Re]:R.image;if(se!==null)Fe=se.max.x-se.min.x,je=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,dt=se.min.x,ut=se.min.y,Ye=se.isBox3?se.min.z:0;else{const cn=Math.pow(2,-Y);Fe=Math.floor(Ot.width*cn),je=Math.floor(Ot.height*cn),R.isDataArrayTexture?Xe=Ot.depth:R.isData3DTexture?Xe=Math.floor(Ot.depth*cn):Xe=1,dt=0,ut=0,Ye=0}K!==null?(xt=K.x,vt=K.y,Gt=K.z):(xt=0,vt=0,Gt=0);const Nt=De.convert($.format),rt=De.convert($.type);let It;$.isData3DTexture?(He.setTexture3D($,0),It=U.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(He.setTexture2DArray($,0),It=U.TEXTURE_2D_ARRAY):(He.setTexture2D($,0),It=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,$.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,$.unpackAlignment);const yt=U.getParameter(U.UNPACK_ROW_LENGTH),un=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ei=U.getParameter(U.UNPACK_SKIP_PIXELS),Dn=U.getParameter(U.UNPACK_SKIP_ROWS),Kr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ot.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ot.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,dt),U.pixelStorei(U.UNPACK_SKIP_ROWS,ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye);const Bt=R.isDataArrayTexture||R.isData3DTexture,Mn=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const cn=et.get(R),vn=et.get($),dn=et.get(cn.__renderTarget),Rt=et.get(vn.__renderTarget);Be.bindFramebuffer(U.READ_FRAMEBUFFER,dn.__webglFramebuffer),Be.bindFramebuffer(U.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Dr=0;Dr<Xe;Dr++)Bt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,et.get(R).__webglTexture,Y,Ye+Dr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,et.get($).__webglTexture,Re,Gt+Dr)),U.blitFramebuffer(dt,ut,Fe,je,xt,vt,Fe,je,U.DEPTH_BUFFER_BIT,U.NEAREST);Be.bindFramebuffer(U.READ_FRAMEBUFFER,null),Be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||et.has(R)){const cn=et.get(R),vn=et.get($);Be.bindFramebuffer(U.READ_FRAMEBUFFER,Kn),Be.bindFramebuffer(U.DRAW_FRAMEBUFFER,En);for(let dn=0;dn<Xe;dn++)Bt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,cn.__webglTexture,Y,Ye+dn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,cn.__webglTexture,Y),Mn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vn.__webglTexture,Re,Gt+dn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vn.__webglTexture,Re),Y!==0?U.blitFramebuffer(dt,ut,Fe,je,xt,vt,Fe,je,U.COLOR_BUFFER_BIT,U.NEAREST):Mn?U.copyTexSubImage3D(It,Re,xt,vt,Gt+dn,dt,ut,Fe,je):U.copyTexSubImage2D(It,Re,xt,vt,dt,ut,Fe,je);Be.bindFramebuffer(U.READ_FRAMEBUFFER,null),Be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Mn?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(It,Re,xt,vt,Gt,Fe,je,Xe,Nt,rt,Ot.data):$.isCompressedArrayTexture?U.compressedTexSubImage3D(It,Re,xt,vt,Gt,Fe,je,Xe,Nt,Ot.data):U.texSubImage3D(It,Re,xt,vt,Gt,Fe,je,Xe,Nt,rt,Ot):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Re,xt,vt,Fe,je,Nt,rt,Ot.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Re,xt,vt,Ot.width,Ot.height,Nt,Ot.data):U.texSubImage2D(U.TEXTURE_2D,Re,xt,vt,Fe,je,Nt,rt,Ot);U.pixelStorei(U.UNPACK_ROW_LENGTH,yt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,un),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ei),U.pixelStorei(U.UNPACK_SKIP_ROWS,Dn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Kr),Re===0&&$.generateMipmaps&&U.generateMipmap(It),Be.unbindTexture()},this.copyTextureToTexture3D=function(R,$,se=null,K=null,Y=0){return ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,$,se,K,Y)},this.initRenderTarget=function(R){et.get(R).__webglFramebuffer===void 0&&He.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?He.setTextureCube(R,0):R.isData3DTexture?He.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?He.setTexture2DArray(R,0):He.setTexture2D(R,0),Be.unbindTexture()},this.resetState=function(){I=0,k=0,X=null,Be.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}function lR(r){switch(r){case"fa-user-tag":case"fa-person":return B.jsxs(B.Fragment,{children:[B.jsx("circle",{cx:"12",cy:"7",r:"3.5"}),B.jsx("path",{d:"M5 21c0-4.2 3.1-7 7-7s7 2.8 7 7"})]});case"fa-venus-mars":return B.jsxs(B.Fragment,{children:[B.jsx("circle",{cx:"8",cy:"9",r:"3.5"}),B.jsx("path",{d:"M8 12.5V21M5 17.5h6"}),B.jsx("circle",{cx:"16.5",cy:"14.5",r:"3.5"}),B.jsx("path",{d:"M19 12l3-3m0 0h-4m4 0v4"})]});case"fa-palette":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0 0-5H12a2 2 0 0 1 0-4h3a6 6 0 0 0-3-9Z"}),B.jsx("circle",{cx:"7",cy:"10",r:".7",fill:"currentColor",stroke:"none"}),B.jsx("circle",{cx:"9",cy:"6.5",r:".7",fill:"currentColor",stroke:"none"}),B.jsx("circle",{cx:"13",cy:"5.8",r:".7",fill:"currentColor",stroke:"none"})]});case"fa-eye":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z"}),B.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]});case"fa-eye-dropper":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"m14 5 5 5M16.5 2.5l5 5-10 10-4 1 1-4 10-10Z"}),B.jsx("path",{d:"M5 19h6"})]});case"fa-scissors":return B.jsxs(B.Fragment,{children:[B.jsx("circle",{cx:"6",cy:"7",r:"2.5"}),B.jsx("circle",{cx:"6",cy:"17",r:"2.5"}),B.jsx("path",{d:"m8 8.5 12 8.5M8 15.5 20 7"})]});case"fa-fill-drip":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"m4 14 8-8 6 6-8 8H4v-6Z"}),B.jsx("path",{d:"M15 5 12 2"}),B.jsx("path",{d:"M20 15s2 2.2 2 3.5a2 2 0 0 1-4 0c0-1.3 2-3.5 2-3.5Z"})]});case"fa-hat-cowboy":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M4 16h16M7 16l1.5-7h7L17 16"}),B.jsx("path",{d:"M2.5 16c1.5 3 17.5 3 19 0"})]});case"fa-shirt":return B.jsx("path",{d:"M8 4h8l5 4-3 4-2-2v10H8V10l-2 2-3-4 5-4Z"});case"fa-shoe-prints":return B.jsxs(B.Fragment,{children:[B.jsx("ellipse",{cx:"8",cy:"8",rx:"2.5",ry:"4",transform:"rotate(-20 8 8)"}),B.jsx("ellipse",{cx:"16",cy:"16",rx:"2.5",ry:"4",transform:"rotate(-20 16 16)"})]});case"fa-gem":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M6 4h12l4 5-10 11L2 9l4-5Z"}),B.jsx("path",{d:"M2 9h20M8 4l4 16 4-16"})]});case"fa-sliders":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M4 6h5M15 6h5M4 12h10M18 12h2M4 18h2M10 18h10"}),B.jsx("circle",{cx:"12",cy:"6",r:"2"}),B.jsx("circle",{cx:"16",cy:"12",r:"2"}),B.jsx("circle",{cx:"8",cy:"18",r:"2"})]});case"fa-grip-vertical":return B.jsxs(B.Fragment,{children:[B.jsx("circle",{cx:"9",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),B.jsx("circle",{cx:"15",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),B.jsx("circle",{cx:"9",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),B.jsx("circle",{cx:"15",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),B.jsx("circle",{cx:"9",cy:"18",r:"1",fill:"currentColor",stroke:"none"}),B.jsx("circle",{cx:"15",cy:"18",r:"1",fill:"currentColor",stroke:"none"})]});case"fa-chevron-up":return B.jsx("path",{d:"m6 15 6-6 6 6"});case"fa-chevron-down":return B.jsx("path",{d:"m6 9 6 6 6-6"});case"fa-check":return B.jsx("path",{d:"m5 12 4 4L19 6"});case"fa-arrows-rotate":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M20 7v5h-5"}),B.jsx("path",{d:"M4 17v-5h5"}),B.jsx("path",{d:"M6.2 8.2A7 7 0 0 1 18.8 10M17.8 15.8A7 7 0 0 1 5.2 14"})]});case"fa-layer-group":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),B.jsx("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]});case"fa-pause":return B.jsx("path",{d:"M8 5v14M16 5v14"});case"fa-play":return B.jsx("path",{d:"m8 5 11 7-11 7V5Z"});case"fa-download":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M12 3v12m0 0 4-4m-4 4-4-4"}),B.jsx("path",{d:"M5 20h14"})]});default:return B.jsxs(B.Fragment,{children:[B.jsx("circle",{cx:"12",cy:"12",r:"8"}),B.jsx("path",{d:"M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01"})]})}}function di({name:r,className:e=""}){return B.jsx("svg",{className:`skincrafter-icon ${e}`.trim(),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false","data-skincrafter-icon":r,children:lR(r)})}function V_({title:r,icon:e,iconClassName:t="skincrafter-accent-text",className:o="",children:s}){return B.jsxs("section",{className:`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${o}`,children:[B.jsxs("h2",{className:"text-xl font-bold mb-2 skincrafter-heading flex items-center",children:[B.jsx(di,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),r]}),s]})}function _a({icon:r,className:e="",children:t,...o}){return B.jsxs("button",{className:`pixel-button preview-action-button p-2 pixel-border transition-colors ${e}`,...o,children:[r&&B.jsx(di,{name:r,className:"skincrafter-button-icon"}),t]})}const uR=""+new URL("/dev/assets/default-BAcllNor-BAcllNor.png",import.meta.url).href,cR=""+new URL("/dev/assets/male.tintable-fxeAI3uu-fxeAI3uu.png",import.meta.url).href,dR=""+new URL("/dev/assets/male.fixed-DcqZ3kjg-DcqZ3kjg.png",import.meta.url).href,fR=""+new URL("/dev/assets/female.tintable-BLp5_Gdk-BLp5_Gdk.png",import.meta.url).href,hR=""+new URL("/dev/assets/female.fixed-DbzKxh-8-DbzKxh-8.png",import.meta.url).href,pR=""+new URL("/dev/assets/male.fixed-C1cq_pNO-C1cq_pNO.png",import.meta.url).href,mR=""+new URL("/dev/assets/male.tintable-D_4mkZ79-D_4mkZ79.png",import.meta.url).href,gR=""+new URL("/dev/assets/male.fixed-BGzxECBj-BGzxECBj.png",import.meta.url).href,vR=""+new URL("/dev/assets/male.tintable-Dll7q7aD-Dll7q7aD.png",import.meta.url).href,_R=""+new URL("/dev/assets/male.fixed-DKYrqDB3-DKYrqDB3.png",import.meta.url).href,xR=""+new URL("/dev/assets/none.tintable-Bs7knCxE-Bs7knCxE.png",import.meta.url).href,yR=""+new URL("/dev/assets/none.fixed-DGZLEiFj-DGZLEiFj.png",import.meta.url).href,SR=""+new URL("/dev/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,ER=""+new URL("/dev/assets/clasic.fixed-Dli_mmU6-Dli_mmU6.png",import.meta.url).href,MR=""+new URL("/dev/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,wR=""+new URL("/dev/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,TR=""+new URL("/dev/assets/big.fixed-BuEC2Ubs-BuEC2Ubs.png",import.meta.url).href,CR=""+new URL("/dev/assets/duck-Dz_q_Va_-Dz_q_Va_.png",import.meta.url).href,RR=""+new URL("/dev/assets/hoodie-C1a1is5P-C1a1is5P.png",import.meta.url).href,AR=""+new URL("/dev/assets/pants-gRdPSA1G-gRdPSA1G.png",import.meta.url).href,G_={"textures/preview/default.png":uR,"textures/race/human/male.tintable.png":cR,"textures/race/human/male.fixed.png":dR,"textures/race/human/female.tintable.png":fR,"textures/race/human/female.fixed.png":hR,"textures/race/bear/male.fixed.png":pR,"textures/race/orc/male.tintable.png":mR,"textures/race/orc/male.fixed.png":gR,"textures/race/zombie/male.tintable.png":vR,"textures/race/zombie/male.fixed.png":_R,"textures/race/template/none.tintable.png":xR,"textures/race/template/none.fixed.png":yR,"textures/eyes/clasic.tintable.png":SR,"textures/eyes/clasic.fixed.png":ER,"textures/eyes/small.tintable.png":MR,"textures/eyes/big.tintable.png":wR,"textures/eyes/big.fixed.png":TR,"textures/hat/duck.png":CR,"textures/top/male/hoodie.png":RR,"textures/bottom/pants.png":AR};function af(r,e){return e?`${e.replace(/\/+$/,"")}/${r.replace(/^\/+/,"")}`:G_[r]}const _v=G_["textures/preview/default.png"],ms=64,bR=["bottom"];function dr(r,e,t,o,s,l,c,d,f={}){const{transparent:p=!1,expand:m=0,rotate180Faces:v=[],flipXFaces:y=[],flipYFaces:S=bR}=f,E=new Set(v),M=new Set(y),x=new Set(S),_=new Ds(e+m,t+m,o+m),L=()=>new Th({transparent:p,toneMapped:!1,alphaTest:p?.1:0,side:zr}),P=[L(),L(),L(),L(),L(),L()],A=(X,b,C=!1,V=!1)=>{const ae=r.clone(),J=(b[2]-b[0])/ms,ee=(b[3]-b[1])/ms,fe=b[0]/ms,ue=b[2]/ms,he=1-b[1]/ms,z=1-b[3]/ms;ae.magFilter=yn,ae.minFilter=yn,ae.generateMipmaps=!1,ae.wrapS=ba,ae.wrapT=ba,ae.repeat.set(C?-J:J,V?-ee:ee),ae.offset.set(C?ue:fe,V?he:z),ae.needsUpdate=!0,X.map=ae},G=X=>E.has(X)||M.has(X),I=X=>E.has(X)||x.has(X);A(P[0],d.right,G("right"),I("right")),A(P[1],d.left,G("left"),I("left")),A(P[2],d.top,G("top"),I("top")),A(P[3],d.bottom,G("bottom"),I("bottom")),A(P[4],d.front,G("front"),I("front")),A(P[5],d.back,G("back"),I("back"));const k=new Gr(_,P);return k.position.set(s,l,c),k}const PR=-6,LR=6,mu=new re(-5,16,0),gu=new re(5,16,0),W_=-1.9,X_=1.9,xv=new re(W_,6,0),yv=new re(X_,6,0);function fr(r,e,t,o){if(!r)return;const s=e.clone().sub(t).applyEuler(o).add(t);r.position.copy(s),r.rotation.copy(o)}function DR(r,e,t={}){const{armL:o,armR:s,legL:l,legR:c,armLOL:d,armROL:f,legLOL:p,legROL:m}=e,v=t.leftArmX??LR,y=t.rightArmX??PR,S=new re(v,12,0),E=new re(y,12,0),M=new re(X_,0,0),x=new re(W_,0,0);if(!(!o||!s||!l||!c)){if([o,s,l,c,d,f,p,m].forEach(_=>_?.rotation.set(0,0,0)),o.position.copy(S),s.position.copy(E),l.position.copy(M),c.position.copy(x),d?.position.copy(S),f?.position.copy(E),p?.position.copy(M),m?.position.copy(x),r==="tpose"){const _=new Bn(0,0,Math.PI/2),L=new Bn(0,0,-Math.PI/2);fr(o,S,gu,_),fr(s,E,mu,L),fr(d,S,gu,_),fr(f,E,mu,L)}else if(r==="walking"){const _=-Math.PI/4,L=Math.PI/4,P=new Bn(_,0,0),A=new Bn(L,0,0),G=new Bn(L,0,0),I=new Bn(_,0,0);fr(o,S,gu,P),fr(s,E,mu,A),fr(l,M,yv,G),fr(c,x,xv,I),fr(d,S,gu,P),fr(f,E,mu,A),fr(p,M,yv,G),fr(m,x,xv,I)}}}const NR={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},UR={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},IR={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},FR={left:[40,20,44,32],right:[47,20,51,32],top:[44,16,47,20],bottom:[47,16,50,20],front:[44,20,47,32],back:[51,20,54,32]},kR={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},OR={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},BR={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},zR={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},HR={left:[40,36,44,48],right:[47,36,51,48],top:[44,32,47,36],bottom:[47,32,50,36],front:[44,36,47,48],back:[51,36,54,48]},VR={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},GR={left:[32,52,36,64],right:[40,52,44,64],top:[36,48,40,52],bottom:[40,48,44,52],front:[36,52,40,64],back:[44,52,48,64]},WR={left:[32,52,36,64],right:[39,52,43,64],top:[36,48,39,52],bottom:[39,48,42,52],front:[36,52,39,64],back:[43,52,46,64]},XR={left:[16,52,20,64],right:[24,52,28,64],top:[20,48,24,52],bottom:[24,48,28,52],front:[20,52,24,64],back:[28,52,32,64]},jR={left:[48,52,52,64],right:[56,52,60,64],top:[52,48,56,52],bottom:[56,48,60,52],front:[52,52,56,64],back:[60,52,64,64]},$R={left:[48,52,52,64],right:[55,52,59,64],top:[52,48,55,52],bottom:[55,48,58,52],front:[52,52,55,64],back:[59,52,62,64]},YR={left:[0,52,4,64],right:[8,52,12,64],top:[4,48,8,52],bottom:[8,48,12,52],front:[4,52,8,64],back:[12,52,16,64]},lf=0,qR=44,KR=24,ZR=72,JR=.04,Sv=.01,Ev=Sa.degToRad(50),QR=.6,eA=1/60,tA=.05,nA=8,rA=1,iA=.5,Mv=-6,wv=6,Tv=-5.5,Cv=5.5,Rv=-1.9,Av=1.9,bv=()=>({armL:null,armR:null,legL:null,legR:null,armLOL:null,armROL:null,legLOL:null,legROL:null,headOL:null,bodyOL:null}),oA={createRenderer:()=>new aR({antialias:!1,alpha:!0}),createTextureLoader:()=>new xM,createResizeObserver:r=>new ResizeObserver(r),requestAnimationFrame:r=>window.requestAnimationFrame(r),cancelAnimationFrame:r=>window.cancelAnimationFrame(r),addWindowResizeListener:r=>window.addEventListener("resize",r),removeWindowResizeListener:r=>window.removeEventListener("resize",r),getDevicePixelRatio:()=>window.devicePixelRatio||1};class sA{constructor(e,t,o=oA){this.container=e,this.dependencies=o,this.pose=t.pose,this.model=t.model,this.showOverlay=t.showOverlay,this.autoRotate=t.autoRotate,this.onError=t.onError,this.initialCursor=e.style.cursor;const s=e.clientWidth||1,l=e.clientHeight||1;this.renderer=o.createRenderer(),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=On,this.renderer.toneMapping=gi,this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(s,l),e.appendChild(this.renderer.domElement),this.camera=new hr(52,s/l,.1,1e3),this.camera.position.set(0,lf,this.cameraDistance),this.camera.lookAt(0,lf,0),this.scene=new cM;const c=new MM(16777215,1);c.position.set(10,10,10),this.scene.add(c),this.group=new Ea,this.group.position.y=-10,this.scene.add(this.group),this.textureLoader=o.createTextureLoader(),this.resizeObserver=o.createResizeObserver(this.handleResize),this.resizeObserver.observe(e),o.addWindowResizeListener(this.handleResize),e.addEventListener("wheel",this.handleWheel,{passive:!1}),e.addEventListener("pointerdown",this.handlePointerDown),e.addEventListener("pointermove",this.handlePointerMove),e.addEventListener("pointerup",this.handlePointerUp),e.addEventListener("pointercancel",this.handlePointerCancel),e.addEventListener("lostpointercapture",this.handleLostPointerCapture),e.style.cursor="grab",this.handleResize(),this.scheduleAnimationFrame(),this.setTexture(t.textureUrl)}container;dependencies;renderer;camera;scene;group;textureLoader;resizeObserver;onError;disposedTextures=new WeakSet;pendingTextures=new Map;initialCursor;parts=bv();modelMeshes=[];currentTexture=null;requestedTextureUrl=null;textureLoadVersion=0;animationFrameId=null;disposed=!1;pose;model;showOverlay;autoRotate;cameraDistance=qR;modelRevision=0;textureRevision=0;activePointerId=null;lastPointerX=0;lastPointerY=0;isDragging=!1;previousFrameTimestamp=null;setTexture(e){if(this.disposed||e===this.requestedTextureUrl)return;this.requestedTextureUrl=e;const t=++this.textureLoadVersion;let o=!1;const s=this.textureLoader.load(e,l=>{o=!0,this.pendingTextures.delete(t),this.handleTextureLoaded(t,l)},void 0,l=>{o=!0;const c=this.pendingTextures.get(t);c&&(this.disposeTexture(c),this.pendingTextures.delete(t)),!this.disposed&&t===this.textureLoadVersion&&(this.requestedTextureUrl=null,this.onError?.({code:"texture_load_failed",textureUrl:e,cause:l}))});o||this.pendingTextures.set(t,s)}setModel(e){this.disposed||e===this.model||(this.model=e,this.currentTexture&&this.buildModel(this.currentTexture))}setPose(e){this.disposed||e===this.pose||(this.pose=e,this.applyCurrentPose())}setShowOverlay(e){this.disposed||e===this.showOverlay||(this.showOverlay=e,this.applyOverlayVisibility())}setAutoRotate(e){this.disposed||(this.autoRotate=e)}getDiagnostics(){const e=this.parts.armR?.geometry.parameters.width;return{rendererAttached:this.renderer.domElement.parentNode===this.container,modelRevision:this.modelRevision,textureRevision:this.textureRevision,meshCount:this.modelMeshes.length,rightArmWidth:typeof e=="number"?e:null,overlayVisible:this.getOverlayMeshes().map(t=>t.visible),cameraDistance:this.cameraDistance,rotation:this.group.rotation.y,rotationX:this.group.rotation.x,rotationY:this.group.rotation.y,rotationZ:this.group.rotation.z,isDragging:this.isDragging}}dispose(){if(this.disposed)return;const e=this.activePointerId;this.disposed=!0,this.textureLoadVersion+=1,this.container.removeEventListener("wheel",this.handleWheel),this.container.removeEventListener("pointerdown",this.handlePointerDown),this.container.removeEventListener("pointermove",this.handlePointerMove),this.container.removeEventListener("pointerup",this.handlePointerUp),this.container.removeEventListener("pointercancel",this.handlePointerCancel),this.container.removeEventListener("lostpointercapture",this.handleLostPointerCapture),this.dependencies.removeWindowResizeListener(this.handleResize),this.resizeObserver.disconnect(),e!==null&&this.releasePointerCapture(e),this.activePointerId=null,this.isDragging=!1,this.previousFrameTimestamp=null,this.container.style.cursor=this.initialCursor,this.animationFrameId!==null&&(this.dependencies.cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.pendingTextures.forEach(t=>this.disposeTexture(t)),this.pendingTextures.clear(),this.disposeModel(),this.currentTexture&&(this.disposeTexture(this.currentTexture),this.currentTexture=null),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement)}handleResize=()=>{if(this.disposed)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()};handleWheel=e=>{this.disposed||(e.preventDefault(),this.cameraDistance=Sa.clamp(this.cameraDistance+e.deltaY*JR,KR,ZR),this.camera.position.z=this.cameraDistance,this.camera.lookAt(0,lf,0),this.camera.updateProjectionMatrix())};handlePointerDown=e=>{this.disposed||this.activePointerId!==null||e.pointerType==="mouse"&&e.button!==0||(this.activePointerId=e.pointerId,this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.isDragging=!0,this.container.style.cursor="grabbing",this.capturePointer(e.pointerId),e.preventDefault())};handlePointerMove=e=>{if(this.disposed||!this.isDragging||e.pointerId!==this.activePointerId)return;const t=e.clientX-this.lastPointerX,o=e.clientY-this.lastPointerY;this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.group.rotation.y+=t*Sv,this.group.rotation.x=Sa.clamp(this.group.rotation.x+o*Sv,-Ev,Ev),this.group.rotation.z=0,e.preventDefault()};handlePointerUp=e=>{this.finishPointerInteraction(e.pointerId,!0)};handlePointerCancel=e=>{this.finishPointerInteraction(e.pointerId,!1)};handleLostPointerCapture=e=>{this.finishPointerInteraction(e.pointerId,!1)};finishPointerInteraction(e,t){this.disposed||e!==this.activePointerId||(this.activePointerId=null,this.isDragging=!1,this.container.style.cursor="grab",t&&this.releasePointerCapture(e))}capturePointer(e){try{this.container.setPointerCapture?.(e)}catch{}}releasePointerCapture(e){try{if(this.container.hasPointerCapture?.(e)===!1)return;this.container.releasePointerCapture?.(e)}catch{}}scheduleAnimationFrame(){this.animationFrameId=this.dependencies.requestAnimationFrame(this.handleAnimationFrame)}handleAnimationFrame=e=>{if(this.disposed)return;const t=this.previousFrameTimestamp===null?eA:Sa.clamp((e-this.previousFrameTimestamp)/1e3,0,tA);this.previousFrameTimestamp=e,this.autoRotate&&!this.isDragging&&(this.group.rotation.y+=QR*t,this.group.rotation.x=Sa.damp(this.group.rotation.x,0,nA,t),this.group.rotation.z=0),this.renderer.render(this.scene,this.camera),this.scheduleAnimationFrame()};getClampedDpr(){return Math.min(this.dependencies.getDevicePixelRatio(),2)}handleTextureLoaded(e,t){if(this.disposed||e!==this.textureLoadVersion){this.disposeTexture(t);return}this.configureTexture(t);const o=this.currentTexture;this.modelMeshes.length===0?this.buildModel(t):this.replaceModelTexture(t),this.currentTexture=t,this.textureRevision+=1,o&&o!==t&&this.disposeTexture(o)}configureTexture(e){e.magFilter=yn,e.minFilter=yn,e.generateMipmaps=!1,e.colorSpace=On,e.wrapS=fi,e.wrapT=fi}buildModel(e){this.disposeModel();const t=this.model==="slim",o=t?3:4,s=t?Tv:Mv,l=t?Cv:wv,c=t?FR:IR,d=t?WR:GR,f=t?HR:zR,p=t?$R:jR,m=dr(e,8,8,8,0,22,0,NR),v=dr(e,8,12,4,0,12,0,UR),y=dr(e,o,12,4,s,12,0,c),S=dr(e,o,12,4,l,12,0,d),E=dr(e,4,12,4,Rv,0,0,kR),M=dr(e,4,12,4,Av,0,0,XR),x={transparent:!0,expand:rA},_={transparent:!0,expand:iA},L=dr(e,8,8,8,0,22,0,OR,x),P=dr(e,8,12,4,0,12,0,BR,_),A=dr(e,o,12,4,s,12,0,f,_),G=dr(e,o,12,4,l,12,0,p,_),I=dr(e,4,12,4,Rv,0,0,VR,_),k=dr(e,4,12,4,Av,0,0,YR,_);this.parts={armL:S,armR:y,legL:M,legR:E,armLOL:G,armROL:A,legLOL:k,legROL:I,headOL:L,bodyOL:P},this.modelMeshes=[m,v,y,S,E,M,L,P,A,G,I,k],this.group.add(...this.modelMeshes),this.modelRevision+=1,this.applyOverlayVisibility(),this.applyCurrentPose()}replaceModelTexture(e){this.modelMeshes.forEach(t=>{t.material.forEach(o=>{const s=o.map;if(!s)return;const l=e.clone();l.magFilter=yn,l.minFilter=yn,l.generateMipmaps=!1,l.colorSpace=On,l.wrapS=s.wrapS,l.wrapT=s.wrapT,l.repeat.copy(s.repeat),l.offset.copy(s.offset),l.center.copy(s.center),l.rotation=s.rotation,l.flipY=s.flipY,l.needsUpdate=!0,o.map=l,o.needsUpdate=!0,this.disposeTexture(s)})})}applyCurrentPose(){const e=this.model==="slim";DR(this.pose,{armL:this.parts.armL,armR:this.parts.armR,legL:this.parts.legL,legR:this.parts.legR,armLOL:this.parts.armLOL,armROL:this.parts.armROL,legLOL:this.parts.legLOL,legROL:this.parts.legROL},{leftArmX:e?Cv:wv,rightArmX:e?Tv:Mv})}applyOverlayVisibility(){this.getOverlayMeshes().forEach(e=>{e.visible=this.showOverlay})}getOverlayMeshes(){return[this.parts.headOL,this.parts.bodyOL,this.parts.armLOL,this.parts.armROL,this.parts.legLOL,this.parts.legROL].filter(e=>e!==null)}disposeModel(){this.modelMeshes.forEach(e=>{this.group.remove(e),e.geometry.dispose(),e.material.forEach(t=>{t.map&&(this.disposeTexture(t.map),t.map=null),t.dispose()})}),this.modelMeshes=[],this.parts=bv()}disposeTexture(e){this.disposedTextures.has(e)||(this.disposedTextures.add(e),e.dispose())}}function aA(r,e,t){return new sA(r,e,t)}function lA(r){return{code:"preview_texture_load_failed",category:"preview",message:`Failed to load preview texture: ${r.textureUrl}`,assetUrl:r.textureUrl,cause:r.cause}}function uA({texture:r,pose:e="default",model:t="classic",showOverlay:o=!0,autoRotate:s=!0,textureRequestRevision:l=0,style:c,onError:d}){const f=O.useRef(null),p=O.useRef(null),m=O.useRef(d),v=O.useRef({textureUrl:r??_v,pose:e,model:t,showOverlay:o,autoRotate:s,onError:y=>m.current?.(lA(y))});return O.useEffect(()=>{m.current=d},[d]),O.useEffect(()=>{const y=f.current;if(!y)return;let S;try{S=aA(y,v.current)}catch(E){m.current?.({code:"preview_webgl_initialization_failed",category:"preview",message:"Failed to initialize the WebGL skin preview.",cause:E});return}return p.current=S,()=>{S.dispose(),p.current===S&&(p.current=null)}},[]),O.useEffect(()=>{p.current?.setTexture(r??_v)},[r,l]),O.useEffect(()=>{p.current?.setModel(t)},[t]),O.useEffect(()=>{p.current?.setPose(e)},[e]),O.useEffect(()=>{p.current?.setShowOverlay(o)},[o]),O.useEffect(()=>{p.current?.setAutoRotate(s)},[s]),B.jsx("div",{ref:f,style:{width:"100%",height:"100%",minHeight:0,position:"relative",touchAction:"none",...c??{}}})}const cA={"app.title":"SkinCrafter","nav.wardrobe":"Wardrobe","nav.skinView":"Skin View","nav.language":"Language","nav.workInProgress":"Work in progress","panel.preview":"Preview","panel.customization":"Customization","panel.loadSkin":"Load Minecraft Skin","action.changePose":"Change Pose","action.hideOverlay":"Hide Overlay","action.showOverlay":"Show Overlay","action.disableAutoRotate":"Stop Rotation","action.enableAutoRotate":"Start Rotation","action.download":"Download","action.downloadSkin":"Download character skin","action.dragLayer":"Drag layer","action.moveLayerUp":"Move layer up","action.moveLayerDown":"Move layer down","action.loadSkin":"Load Skin","action.loading":"Loading...","action.retryPreview":"Retry Preview","error.assetLoad":"A skin texture could not be loaded. Check the selected assets and try again.","error.generation":"The skin could not be generated. Change the selection and try again.","error.initialSkin":"The supplied skin is not a valid 64x64 Minecraft PNG.","error.preview":"The 3D preview could not be loaded. Skin editing and download may still be available.","skinView.player":"Player","skinView.username":"Minecraft username","category.race":"Character Race","category.sex":"Sex","category.skinColor":"Skin Color","category.eyes":"Eyes","category.eyesColor":"Eye Color","category.hair":"Hair","category.hairColor":"Hair Color","category.hat":"Hat","category.shirt":"Shirt","category.pants":"Pants","category.shoes":"Shoes","category.accessory":"Accessory","wardrobeColor.primary":"Color","wardrobeColor.secondary":"Secondary color","option.none":"None","option.sex.Male":"Male","option.sex.Female":"Female","option.race.Human":"Human","option.race.Bear":"Bear","option.race.Orc":"Orc","option.race.Zombie":"Zombie","option.race.Template":"Template","option.eyes.Classic":"Classic","option.eyes.Small":"Small","option.eyes.Big":"Big","option.hat.Duck":"Duck","option.shirt.Hoodie":"Hoodie","option.pants.Pants":"Pants","option.color.blue":"Blue","option.color.green":"Green","option.color.brown":"Brown","option.color.blond":"Blond","option.color.black":"Black"},dA={"app.title":"SkinCrafter","nav.wardrobe":"Kreator","nav.skinView":"Podgląd","nav.language":"Język","nav.workInProgress":"Produkt w trakcie prac","panel.preview":"Podgląd","panel.customization":"Personalizacja","panel.loadSkin":"Wczytaj skin Minecraft","action.changePose":"Zmień Pozę","action.hideOverlay":"Ukryj Warstwę","action.showOverlay":"Pokaż Warstwę","action.disableAutoRotate":"Zatrzymaj Obrót","action.enableAutoRotate":"Włącz Obrót","action.download":"Pobierz","action.downloadSkin":"Pobierz skin postaci","action.dragLayer":"Przeciągnij warstwę","action.moveLayerUp":"Przesuń warstwę wyżej","action.moveLayerDown":"Przesuń warstwę niżej","action.loadSkin":"Wczytaj Skin","action.loading":"Wczytywanie...","action.retryPreview":"Ponów Podgląd","error.assetLoad":"Nie udało się wczytać tekstury skina. Sprawdź wybrane elementy i spróbuj ponownie.","error.generation":"Nie udało się wygenerować skina. Zmień wybór i spróbuj ponownie.","error.initialSkin":"Przekazany skin nie jest prawidłowym plikiem PNG Minecraft 64x64.","error.preview":"Nie udało się uruchomić podglądu 3D. Edycja i pobieranie skina mogą nadal działać.","skinView.player":"Gracz","skinView.username":"Nazwa gracza Minecraft","category.race":"Rasa Postaci","category.sex":"Płeć","category.skinColor":"Kolor Skóry","category.eyes":"Oczy","category.eyesColor":"Kolor Oczu","category.hair":"Włosy","category.hairColor":"Kolor Włosów","category.hat":"Czapka","category.shirt":"Koszulka","category.pants":"Spodnie","category.shoes":"Buty","category.accessory":"Dodatek","wardrobeColor.primary":"Kolor","wardrobeColor.secondary":"Kolor dodatkowy","option.none":"Brak","option.sex.Male":"Mężczyzna","option.sex.Female":"Kobieta","option.race.Human":"Człowiek","option.race.Bear":"Niedźwiedź","option.race.Orc":"Ork","option.race.Zombie":"Zombie","option.race.Template":"Szablon","option.eyes.Classic":"Klasyczne","option.eyes.Small":"Małe","option.eyes.Big":"Duże","option.hat.Duck":"Kaczka","option.shirt.Hoodie":"Bluza","option.pants.Pants":"Spodnie","option.color.blue":"Niebieski","option.color.green":"Zielony","option.color.brown":"Brązowy","option.color.blond":"Blond","option.color.black":"Czarny"},fA={"app.title":"SkinCrafter","nav.wardrobe":"Criador","nav.skinView":"Visualizador","nav.language":"Idioma","nav.workInProgress":"Produto em desenvolvimento","panel.preview":"Pré-visualização","panel.customization":"Personalização","panel.loadSkin":"Carregar skin do Minecraft","action.changePose":"Mudar pose","action.hideOverlay":"Ocultar camada","action.showOverlay":"Mostrar camada","action.disableAutoRotate":"Parar rotação","action.enableAutoRotate":"Iniciar rotação","action.download":"Baixar","action.downloadSkin":"Baixar skin do personagem","action.dragLayer":"Arrastar camada","action.moveLayerUp":"Mover camada para cima","action.moveLayerDown":"Mover camada para baixo","action.loadSkin":"Carregar skin","action.loading":"Carregando...","action.retryPreview":"Tentar pré-visualização novamente","error.assetLoad":"Não foi possível carregar uma textura da skin. Verifique os itens selecionados e tente novamente.","error.generation":"Não foi possível gerar a skin. Altere a seleção e tente novamente.","error.initialSkin":"A skin fornecida não é um PNG válido do Minecraft em 64x64.","error.preview":"Não foi possível carregar a pré-visualização 3D. A edição e o download da skin ainda podem estar disponíveis.","skinView.player":"Jogador","skinView.username":"Nome de usuário do Minecraft","category.race":"Raça do personagem","category.sex":"Gênero","category.skinColor":"Cor da pele","category.eyes":"Olhos","category.eyesColor":"Cor dos olhos","category.hair":"Cabelo","category.hairColor":"Cor do cabelo","category.hat":"Chapéu","category.shirt":"Camisa","category.pants":"Calças","category.shoes":"Calçados","category.accessory":"Acessório","wardrobeColor.primary":"Cor","wardrobeColor.secondary":"Cor secundária","option.none":"Nenhum","option.sex.Male":"Masculino","option.sex.Female":"Feminino","option.race.Human":"Humano","option.race.Bear":"Urso","option.race.Orc":"Orc","option.race.Zombie":"Zumbi","option.race.Template":"Modelo","option.eyes.Classic":"Clássico","option.eyes.Small":"Pequenos","option.eyes.Big":"Grandes","option.hat.Duck":"Pato","option.shirt.Hoodie":"Moletom","option.pants.Pants":"Calças","option.color.blue":"Azul","option.color.green":"Verde","option.color.brown":"Marrom","option.color.blond":"Loiro","option.color.black":"Preto"},nh={en:cA,pl:dA,"pt-BR":fA},j_=Object.keys(nh),Us="en";function hA(r){return!!r&&j_.includes(r)}function Wa(r,e){return nh[r][e]??nh[Us][e]??e}const pA=r=>Wa(Us,r);function mA(r){return r.code==="asset_load_failed"?"error.assetLoad":r.code==="invalid_initial_skin"?"error.initialSkin":r.category==="preview"?"error.preview":"error.generation"}function $_({texture:r,model:e="classic",footerHeight:t=0,t:o=pA,onSave:s,canSave:l,generationStatus:c,generationError:d,onError:f}){const[p,m]=O.useState("default"),[v,y]=O.useState(!0),[S,E]=O.useState(!0),[M,x]=O.useState(null),[_,L]=O.useState(0),P=()=>{m(ee=>ee==="default"?"tpose":ee==="tpose"?"walking":"default")},A=()=>{y(ee=>!ee)},G=()=>{E(ee=>!ee)},I=l??!!r,k=()=>{if(!r||!I)return;const ee=document.createElement("a");ee.href=r,ee.download="skincrafter-skin.png",ee.click()},X=()=>{if(I){if(s){s();return}k()}},b=O.useCallback(ee=>{x(ee),f?.(ee)},[f]),C=()=>{x(null),L(ee=>ee+1)};O.useEffect(()=>{x(ee=>ee?.code==="preview_texture_load_failed"?null:ee)},[r]);const V=c==="error"&&d?d:M,ae=V===M&&M?.code==="preview_texture_load_failed",J={"--skincrafter-preview-bottom-offset":`${Math.max(0,t)}px`};return B.jsxs(V_,{title:o("panel.preview"),icon:"fa-eye",children:[B.jsx("div",{className:"skincrafter-preview-surface overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full",style:J,children:B.jsx("div",{className:"flex justify-center items-center model-placeholder h-full",children:B.jsx(uA,{texture:r,pose:p,model:e,showOverlay:v,autoRotate:S,textureRequestRevision:_,onError:b})})}),V&&B.jsx("p",{className:"mt-3 text-sm font-semibold skincrafter-error-text",role:"alert",children:o(mA(V))}),ae&&B.jsx(_a,{className:"mt-2 skincrafter-secondary-action",icon:"fa-arrows-rotate","aria-label":o("action.retryPreview"),onClick:C,children:o("action.retryPreview")}),B.jsxs("div",{className:"mt-4 preview-actions",children:[B.jsx(_a,{className:"skincrafter-secondary-action",icon:"fa-arrows-rotate","aria-label":o("action.changePose"),onClick:P,children:o("action.changePose")}),B.jsx(_a,{className:"skincrafter-secondary-action",icon:"fa-layer-group","aria-label":o(v?"action.hideOverlay":"action.showOverlay"),onClick:A,children:o(v?"action.hideOverlay":"action.showOverlay")}),B.jsx(_a,{className:"skincrafter-secondary-action",icon:S?"fa-pause":"fa-play","aria-label":o(S?"action.disableAutoRotate":"action.enableAutoRotate"),onClick:G,children:o(S?"action.disableAutoRotate":"action.enableAutoRotate")}),B.jsx(_a,{className:"skincrafter-secondary-action disabled:opacity-50 disabled:cursor-not-allowed",icon:"fa-download","aria-label":o("action.downloadSkin"),onClick:X,disabled:!I,children:o("action.download")})]})]})}function gA({left:r,right:e}){return B.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[B.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:r}),B.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:e})]})}function vA(r,e){if(r.length===0)return null;for(const t of r){const o=t.top+(t.bottom-t.top)/2;if(e<o)return{targetLayer:t.layer,position:"before"};if(e<=t.bottom)return{targetLayer:t.layer,position:"after"}}return{targetLayer:r[r.length-1].layer,position:"after"}}function _A(r,e,t,o){if(!r.includes(e)||!r.includes(t))return[...r];if(e===t)return[...r];const s=r.filter(c=>c!==e),l=s.indexOf(t)+(o==="after"?1:0);return s.splice(l,0,e),s}function xA({heading:r,icon:e,iconClassName:t="skincrafter-category-icon",className:o="",children:s,...l}){return B.jsxs("div",{className:`option-card skincrafter-surface p-4 pixel-border relative ${r?"pt-5":""} ${o}`,...l,children:[r&&B.jsxs("h3",{className:"font-medium mb-2 flex items-center absolute -top-3 left-4 px-2 skincrafter-surface skincrafter-heading z-10",children:[e&&B.jsx(di,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),r]}),s]})}function $n(r){const e=(r.tintable===void 0?[]:Array.isArray(r.tintable)?r.tintable:[r.tintable]).map(t=>typeof t=="string"?{texture:t}:{...t});if(e.length===0&&!r.fixed)throw new Error("A texture-backed option must define a tintable layer, a fixed layer, or both.");return e.length>0?{tintable:e,...r.fixed?{fixed:r.fixed}:{}}:{fixed:r.fixed}}function yA(r,e){return r.tintable?{tintable:r.tintable.map(t=>({texture:af(t.texture,e),...t.colorSlot?{colorSlot:t.colorSlot}:{}})),...r.fixed?{fixed:af(r.fixed,e)}:{}}:{fixed:af(r.fixed,e)}}const Pv=r=>/^#[0-9a-f]{6}$/i.test(r);function SA(r,e){const t=r??[],o=e??[];return t.length!==o.length?!1:t.every((s,l)=>{const c=o[l];return!!c&&s.id===c.id&&s.labelKey===c.labelKey&&s.defaultColor===c.defaultColor&&s.palette.length===c.palette.length&&s.palette.every((d,f)=>d===c.palette[f])})}function EA(r){const e=r.textureLayers.tintable??[],t=r.colorSlots??[];if(e.length===0){if(t.length>0)throw new Error("A fixed-only texture item must not define color slots.");return}if(t.length===0)throw new Error("Every tintable texture item must define at least one color slot.");const o=new Map;for(const l of t){if(!l.id.trim())throw new Error("Texture item color slot ids must not be empty.");if(o.has(l.id))throw new Error(`Texture item color slot "${l.id}" is defined more than once.`);if(l.palette.length===0)throw new Error(`Texture item color slot "${l.id}" must define a non-empty palette.`);if(!Pv(l.defaultColor)||l.palette.some(c=>!Pv(c)))throw new Error(`Texture item color slot "${l.id}" must use #RRGGBB palette colors.`);if(!l.palette.includes(l.defaultColor))throw new Error(`Texture item color slot "${l.id}" defaultColor must be present in its palette.`);o.set(l.id,l)}const s=new Set;for(const l of e){if(!l.colorSlot||!o.has(l.colorSlot))throw new Error("Every tintable texture layer must reference a declared colorSlot.");s.add(l.colorSlot)}for(const l of t)if(!s.has(l.id))throw new Error(`Texture item color slot "${l.id}" is not used by any tintable layer.`)}function Rs(r){const e=r.skinModel;if(e!=="classic"&&e!=="slim")throw new Error('A texture item must define skinModel as "classic" or "slim".');return EA(r),{...r,skinModel:e,...r.colorSlots?{colorSlots:r.colorSlots.map(t=>({...t,palette:[...t.palette]}))}:{}}}function To(r){const e={};for(const o of["classic","slim"]){const s=r[o];if(!s)continue;const l=Rs(s);if(l.skinModel!==o)throw new Error(`Texture item variant "${o}" must declare the same skinModel.`);e[o]=l}const t=Object.values(e).filter(o=>!!o?.colorSlots?.length);if(t.length>1){const o=t[0].colorSlots;if(t.some(s=>!SA(s.colorSlots,o)))throw new Error("Colorable texture item variants must define identical color slots across skin models.")}return e}function MA(r,e){return{skinModel:r.skinModel,textureLayers:yA(r.textureLayers,e),...r.colorSlots?{colorSlots:r.colorSlots}:{}}}function Vu(r,e,t){const o=r[e];return o?MA(o,t):null}function wA(r,e){return r.skinModel===e}function TA(r,e){if(!r)return[];const t=new Map((r.colorSlots??[]).map(s=>[s.id,s])),o=[];for(const s of r.textureLayers.tintable??[]){const l=s.colorSlot?t.get(s.colorSlot):void 0;o.push({url:s.texture,role:"tintable",tint:(s.colorSlot?e?.[s.colorSlot]:void 0)??l?.defaultColor??"#FFFFFF"})}return r.textureLayers.fixed&&o.push({url:r.textureLayers.fixed,role:"fixed"}),o}const Fa=Rs,bh=To,Ph=Vu,CA=wA,RA=["None","Duck"],AA={Duck:bh({classic:Fa({skinModel:"classic",textureLayers:$n({fixed:"textures/hat/duck.png"})}),slim:Fa({skinModel:"slim",textureLayers:$n({fixed:"textures/hat/duck.png"})})})};function bA(r,e,t){return r==="None"?null:Ph(AA[r],e,t)}const PA=["None","Pants"],LA={Pants:bh({classic:Fa({skinModel:"classic",textureLayers:$n({fixed:"textures/bottom/pants.png"})}),slim:Fa({skinModel:"slim",textureLayers:$n({fixed:"textures/bottom/pants.png"})})})};function DA(r,e,t){return r==="None"?null:Ph(LA[r],e,t)}const Eo={id:"iris",labelKey:"category.eyesColor",defaultColor:"#2F5D9B",palette:["#2F5D9B","#2F8F4E","#5B3A29"]},NA={palette:["#4A2F20","#D6B15D","#1F1A17"]};function uf(r,e){return To({classic:Rs({skinModel:"classic",textureLayers:r,colorSlots:[e]}),slim:Rs({skinModel:"slim",textureLayers:r,colorSlots:[e]})})}const Y_={Classic:uf($n({tintable:{texture:"textures/eyes/clasic.tintable.png",colorSlot:Eo.id},fixed:"textures/eyes/clasic.fixed.png"}),Eo),Small:uf($n({tintable:{texture:"textures/eyes/small.tintable.png",colorSlot:Eo.id}}),Eo),Big:uf($n({tintable:{texture:"textures/eyes/big.tintable.png",colorSlot:Eo.id},fixed:"textures/eyes/big.fixed.png"}),Eo)},q_={None:null},UA=Object.keys(Y_),IA=Object.keys(q_);function FA(r,e,t){const o=Y_[r];return o?Vu(o,e,t):null}function kA(r,e,t){const o=q_[r];return o?Vu(o,e,t):null}function K_(){return Eo.palette}function Z_(){return NA.palette}function OA(r){return{id:"skin",labelKey:"category.skinColor",defaultColor:r[0],palette:r}}function xa(r,e,t){return Rs({skinModel:r,textureLayers:e,colorSlots:[OA(t)]})}const cf=["#D5BAAA","#E0AC69","#C68642"],BA=["#5D4037","#8D6E63","#A1887F"],Lv=["#558B2F","#7CB342"],Dv=["#556B2F"],Nv=["#FFFFFF"],Lh={Human:{skinColors:cf,sexes:{classic:"Male",slim:"Female"},variants:To({classic:xa("classic",$n({tintable:{texture:"textures/race/human/male.tintable.png",colorSlot:"skin"},fixed:"textures/race/human/male.fixed.png"}),cf),slim:xa("slim",$n({tintable:{texture:"textures/race/human/female.tintable.png",colorSlot:"skin"},fixed:"textures/race/human/female.fixed.png"}),cf)})},Bear:{skinColors:BA,sexes:{classic:"Male"},variants:To({classic:Rs({skinModel:"classic",textureLayers:$n({fixed:"textures/race/bear/male.fixed.png"})})})},Orc:{skinColors:Lv,sexes:{classic:"Male"},variants:To({classic:xa("classic",$n({tintable:{texture:"textures/race/orc/male.tintable.png",colorSlot:"skin"},fixed:"textures/race/orc/male.fixed.png"}),Lv)})},Zombie:{skinColors:Dv,sexes:{classic:"Male"},variants:To({classic:xa("classic",$n({tintable:{texture:"textures/race/zombie/male.tintable.png",colorSlot:"skin"},fixed:"textures/race/zombie/male.fixed.png"}),Dv)})},Template:{skinColors:Nv,sexes:{classic:"None"},variants:To({classic:xa("classic",$n({tintable:{texture:"textures/race/template/none.tintable.png",colorSlot:"skin"},fixed:"textures/race/template/none.fixed.png"}),Nv)})}};function zA(r){const e=Object.values(Lh[r].sexes).flatMap(t=>t?[t]:[]);return[...new Set(e)]}function J_(r){return Lh[r].skinColors}function HA(r,e,t){return Vu(Lh[r].variants,e,t)}const Q_=["Human","Bear","Orc","Zombie"],VA=["None","Hoodie"],Uv=["#4A6FA5","#A33A3A","#2F8F4E","#D6B15D","#7047A3","#5B3A29","#1F1A17","#FFFFFF"],GA={Hoodie:bh({classic:Fa({skinModel:"classic",textureLayers:$n({tintable:[{texture:"textures/top/male/hoodie.png",colorSlot:"primary"}]}),colorSlots:[{id:"primary",labelKey:"wardrobeColor.primary",defaultColor:Uv[0],palette:Uv}]})})};function WA(r,e,t){return r==="None"?null:Ph(GA[r],e,t)}const Ji=[{id:"race",labelKey:"category.race",icon:"fa-user-tag",control:"choice"},{id:"sex",labelKey:"category.sex",icon:"fa-venus-mars",control:"choice"},{id:"skinColor",labelKey:"category.skinColor",icon:"fa-palette",control:"color"},{id:"eyes",labelKey:"category.eyes",icon:"fa-eye",control:"choice"},{id:"eyesColor",labelKey:"category.eyesColor",icon:"fa-eye-dropper",control:"color"},{id:"hair",labelKey:"category.hair",icon:"fa-scissors",control:"choice"},{id:"hairColor",labelKey:"category.hairColor",icon:"fa-fill-drip",control:"color"},{id:"hat",labelKey:"category.hat",icon:"fa-hat-cowboy",control:"choice"},{id:"shirt",labelKey:"category.shirt",icon:"fa-shirt",control:"choice"},{id:"pants",labelKey:"category.pants",icon:"fa-person",control:"choice"},{id:"shoes",labelKey:"category.shoes",icon:"fa-shoe-prints",control:"choice"},{id:"accessory",labelKey:"category.accessory",icon:"fa-gem",control:"choice"}],e0=[{ownerCategoryId:"race",colorControlId:"skinColor",slotId:"skin"},{ownerCategoryId:"eyes",colorControlId:"eyesColor",slotId:"iris"},{ownerCategoryId:"hair",colorControlId:"hairColor",slotId:"primary"}],XA={race:"race",sex:"race",skinColor:"race",eyes:"eyes",eyesColor:"eyes",hair:"hair",hairColor:"hair",hat:"hat",shirt:"shirt",pants:"pants",shoes:"shoes",accessory:"accessory"};function jA(r){return XA[r]}function t0(r){return e0.find(e=>e.ownerCategoryId===r)??null}function n0(r){return e0.find(e=>e.colorControlId===r)??null}function $A(r){return n0(r)!==null}const Wr={race:"Human",sex:"Male",skinColor:J_("Human")[0],eyes:"Classic",eyesColor:K_()[0],hair:"None",hairColor:Z_()[0],hat:"None",shirt:"None",pants:"None",shoes:"None",accessory:"None"},Qi=["hat","shirt","pants","shoes","accessory"],vs={id:"None",labelKey:"option.none",textureItem:null,textureLayers:null},YA={Male:{id:"Male",labelKey:"option.sex.Male",textureItem:null,textureLayers:null},Female:{id:"Female",labelKey:"option.sex.Female",textureItem:null,textureLayers:null},None:vs};function Xa(r){return r.sex==="Female"?"slim":"classic"}function Au(r,e,t){return t?[{id:r,labelKey:e,textureItem:t,textureLayers:t.textureLayers,...t.colorSlots?{colorSlots:t.colorSlots}:{}}]:[]}function df(r,e,t,o){return!t||!CA(t,o)?[]:Au(r,e,t)}function Iv(r,e="option.color"){const t={"#2F5D9B":`${e}.blue`,"#2F8F4E":`${e}.green`,"#5B3A29":`${e}.brown`,"#4A2F20":`${e}.brown`,"#D6B15D":`${e}.blond`,"#1F1A17":`${e}.black`};return r.map(o=>({id:o,labelKey:t[o]??`option.skinColor.${o}`,color:o}))}function mi(r,e,t,o=Xa(e)){return r==="race"?Q_.flatMap(s=>Au(s,`option.race.${s}`,HA(s,o,t))):r==="sex"?zA(e.race).map(s=>YA[s]):r==="skinColor"?J_(e.race).map(s=>({id:s,labelKey:`option.skinColor.${s}`,color:s})):r==="eyes"?UA.flatMap(s=>Au(s,`option.eyes.${s}`,FA(s,o,t))):r==="eyesColor"?Iv(K_()):r==="hair"?IA.flatMap(s=>s==="None"?[vs]:Au(s,`option.hair.${s}`,kA(s,o,t))):r==="hairColor"?Iv(Z_()):r==="hat"?RA.flatMap(s=>s==="None"?[vs]:df(s,`option.hat.${s}`,bA(s,o,t),o)):r==="shirt"?VA.flatMap(s=>s==="None"?[vs]:df(s,`option.shirt.${s}`,WA(s,o,t),o)):r==="pants"?PA.flatMap(s=>s==="None"?[vs]:df(s,`option.pants.${s}`,DA(s,o,t),o)):[vs]}function Gu(r,e){const t={...Wr,...r??{}};(e?mi("race",t,void 0,e).map(c=>c.id):[...Q_]).includes(t.race)||(t.race=Wr.race);const o=mi("sex",t).map(c=>c.id);o.includes(t.sex)||(t.sex=o[0]??Wr.sex);const s=e??Xa(t),l=mi("skinColor",t,void 0,s).map(c=>c.id);return l.includes(t.skinColor)||(t.skinColor=l[0]??Wr.skinColor),Ji.forEach(c=>{if(c.id==="race"||c.id==="sex"||c.id==="skinColor")return;const d=mi(c.id,t,void 0,s).map(f=>f.id);d.includes(t[c.id])||(t[c.id]=d[0]??"None")}),t}function qA(r){const e=new Map;for(const t of["classic","slim"])for(const o of mi(r,Wr,void 0,t)){const s=e.get(o.id);(!s||!s.textureItem?.colorSlots?.length&&o.textureItem?.colorSlots?.length)&&e.set(o.id,o)}return[...e.values()]}function pr(r){const e={};for(const t of Qi){const o={};for(const s of qA(t)){const l=s.textureItem?.colorSlots??[];if(l.length===0)continue;const c={};for(const d of l){const f=r?.[t]?.[s.id]?.[d.id];c[d.id]=typeof f=="string"&&d.palette.includes(f)?f:d.defaultColor}o[s.id]=c}Object.keys(o).length>0&&(e[t]=o)}return e}function Wu(r){const e={};for(const t of Qi){const o=r[t];o&&(e[t]=Object.fromEntries(Object.entries(o).map(([s,l])=>[s,{...l}])))}return e}function eo(r){const e=new Set(Qi),t=[];return(r??[]).forEach(o=>{e.has(o)&&!t.includes(o)&&t.push(o)}),Qi.forEach(o=>{t.includes(o)||t.push(o)}),t}function ff(r){const e=t0(r);return({appearance:t,assetBaseUrl:o,skinModel:s})=>{const l=mi(r,t,o,s).find(d=>d.id===t[r]),c=e?{[e.slotId]:t[e.colorControlId]}:void 0;return{item:l?.textureItem??null,colors:c}}}function ya(r){return({appearance:e,assetBaseUrl:t,skinModel:o,wardrobeColors:s})=>({item:mi(r,e,t,o).find(l=>l.id===e[r])?.textureItem??null,colors:s[r]?.[e[r]]})}const KA={race:ff("race"),eyes:ff("eyes"),hair:ff("hair"),hat:ya("hat"),shirt:ya("shirt"),pants:ya("pants"),shoes:ya("shoes"),accessory:ya("accessory")};function r0(r){return["race","eyes","hair",...eo(r)]}function i0(r,e){const t=KA[r](e);return TA(t.item,t.colors)}function ZA(r,e=Qi,t,o=Xa(r),s){const l={appearance:r,assetBaseUrl:t,skinModel:o,wardrobeColors:pr(s)};return r0(e).flatMap(c=>i0(c,l))}function JA(r,e,t,o,s=Xa(r),l){const c=new Set(t.map(jA)),d={appearance:r,assetBaseUrl:o,skinModel:s,wardrobeColors:pr(l)};return r0(e).filter(f=>c.has(f)).flatMap(f=>i0(f,d))}function QA(r,e,t,o=Xa(e)){const s=n0(r);return s?!!mi(s.ownerCategoryId,e,t,o).find(l=>l.id===e[s.ownerCategoryId])?.textureItem?.colorSlots?.some(l=>l.id===s.slotId):!0}function o0({colorSlots:r,colors:e,onChange:t,t:o,testId:s="texture-item-color-palettes"}){return r.length===0?null:B.jsx("div",{className:"mt-2 space-y-2","data-testid":s,children:r.map(l=>{const c=e?.[l.id]??l.defaultColor,d=o(l.labelKey);return B.jsxs("div",{"data-color-slot":l.id,children:[B.jsx("div",{className:"text-xs font-semibold mb-1",children:d}),B.jsx("div",{className:"flex flex-wrap gap-1.5",role:"group","aria-label":d,children:l.palette.map(f=>{const p=c===f;return B.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border ${p?"is-selected":""}`,style:{backgroundColor:f},"aria-label":`${d}: ${f}`,"aria-pressed":p,onClick:()=>t(l.id,f),children:p&&B.jsx(di,{name:"fa-check"})},f)})})]},l.id)})})}function eb(r){return B.jsx(o0,{...r,testId:"wardrobe-color-palettes"})}const vu=r=>Qi.includes(r),Fv=(r,e)=>r.length===e.length&&r.every((t,o)=>t===e[o]);function tb({appearance:r,textureLayerOrder:e,wardrobeColors:t,onAppearanceChange:o,onWardrobeColorChange:s,onLayerOrderChange:l,t:c,assetBaseUrl:d,skinModel:f}){const[p,m]=O.useState(null),[v,y]=O.useState(null),[S,E]=O.useState(null),[M,x]=O.useState(null),_=O.useRef(null),L=O.useRef(null),P=O.useRef(null),A=O.useRef(null),G=O.useRef([]),I=O.useRef(new Map),k=O.useMemo(()=>new Map(Ji.map(Z=>[Z.id,Z])),[]),X=O.useMemo(()=>Ji.filter(Z=>!vu(Z.id)&&!$A(Z.id)),[]),b=p&&v?v:e,C=O.useMemo(()=>b.map(Z=>k.get(Z)).filter(Z=>!!Z),[k,b]);O.useLayoutEffect(()=>{const Z=A.current;if(!Z)return;const Ee=new Map;Z.querySelectorAll("[data-layer-id]").forEach(be=>{const ot=be.dataset.layerId;if(!ot||!vu(ot))return;const Ze=be.offsetTop,U=I.current.get(ot);if(Ee.set(ot,Ze),U===void 0||U===Ze||typeof be.animate!="function")return;typeof be.getAnimations=="function"&&be.getAnimations().filter(pt=>pt.id==="skincrafter-layer-preview").forEach(pt=>pt.cancel());const mt=be.animate([{transform:`translateY(${U-Ze}px)`},{transform:"translateY(0)"}],{duration:150,easing:"ease-out"});mt.id="skincrafter-layer-preview"}),I.current=Ee},[b]);const V=Z=>{const Ee=A.current;if(!Ee)return[];const be=Ee.getBoundingClientRect().top;return[...Ee.querySelectorAll("[data-layer-id]")].flatMap(ot=>{const Ze=ot.dataset.layerId;if(!Ze||!vu(Ze)||Ze===Z)return[];const U=ot.getBoundingClientRect();return[{layer:Ze,top:U.top-be,bottom:U.bottom-be}]})},ae=Z=>{const Ee=A.current;if(!Ee)return null;const be=Z-Ee.getBoundingClientRect().top;return vA(G.current,be)},J=()=>{_.current=null,L.current=null,P.current=null,G.current=[],m(null),y(null),E(null),x(null)},ee=(Z,Ee)=>{const be=[...e];G.current=V(Z),_.current=Z,L.current=be,m(Z),y(be),E(null),x(Ee)},fe=(Z,Ee)=>{const be=_.current;if(!be)return;const ot=_A(e,be,Z,Ee);L.current=ot,y(Ze=>Ze&&Fv(Ze,ot)?Ze:ot),E({targetLayer:Z,position:Ee})},ue=()=>{const Z=L.current,Ee=Z&&!Fv(Z,e);J(),Ee&&Z&&l(Z)},he=(Z,Ee)=>{const be=e.indexOf(Z),ot=be+Ee;if(be<0||ot<0||ot>=e.length)return;const Ze=[...e];[Ze[be],Ze[ot]]=[Ze[ot],Ze[be]],l(Ze)},z=(Z,Ee)=>{if(ee(Ee,{x:Z.clientX,y:Z.clientY,pointerType:"mouse"}),Z.dataTransfer.effectAllowed="move",Z.dataTransfer.setData("text/plain",Ee),typeof Z.dataTransfer.setDragImage=="function"){const be=document.createElement("div");be.style.position="fixed",be.style.left="-10000px",be.style.top="-10000px",be.style.width="1px",be.style.height="1px",be.style.opacity="0",document.body.appendChild(be),Z.dataTransfer.setDragImage(be,0,0),window.setTimeout(()=>be.remove(),0)}},de=Z=>{!_.current||Z.clientX===0&&Z.clientY===0||x({x:Z.clientX,y:Z.clientY,pointerType:"mouse"})},le=()=>{_.current&&J()},F=Z=>{if(!_.current)return;Z.preventDefault(),Z.dataTransfer.dropEffect="move";const Ee=ae(Z.clientY);Ee&&fe(Ee.targetLayer,Ee.position)},oe=Z=>{Z.preventDefault(),ue()},Oe=(Z,Ee)=>{if(!(Z.pointerType==="mouse"||Z.button>0||!(Z.target instanceof Element?Z.target:null)?.closest("h3"))){Z.preventDefault(),P.current=Z.pointerId;try{Z.currentTarget.setPointerCapture(Z.pointerId)}catch{}ee(Ee,{x:Z.clientX,y:Z.clientY,pointerType:"touch"})}},ne=Z=>{if(Z.pointerId!==P.current||!_.current)return;Z.preventDefault(),x({x:Z.clientX,y:Z.clientY,pointerType:"touch"});const Ee=ae(Z.clientY);Ee&&fe(Ee.targetLayer,Ee.position)},me=Z=>{if(Z.pointerId===P.current){Z.preventDefault();try{Z.currentTarget.releasePointerCapture(Z.pointerId)}catch{}ue()}},Ce=Z=>{Z.pointerId===P.current&&J()},Se=Z=>{const Ee=mi(Z.id,r,d,f),be=vu(Z.id)?Z.id:null,ot=be?e.indexOf(be):-1,Ze=be&&S?.targetLayer===be,U=Ee.find(He=>r[Z.id]===He.id),mt=t0(Z.id),pt=mt?U?.textureItem?.colorSlots?.filter(He=>He.id===mt.slotId)??[]:[],Mt=mt&&QA(mt.colorControlId,r,d,f)?pt:[],Be=be?U?.textureItem?.colorSlots??[]:[],ht=be&&U?t?.[be]?.[U.id]:void 0,et=mt?{[mt.slotId]:r[mt.colorControlId]}:void 0;return B.jsxs(xA,{heading:c(Z.labelKey),icon:Z.icon,className:`wardrobe-option-card p-2.5 pt-6 ${be?"layer-order-card":""} ${be===p?"is-dragging":""} ${Ze?`drop-${S.position}`:""}`,"data-layer-id":be??void 0,onPointerDown:be?He=>Oe(He,be):void 0,onPointerMove:be?ne:void 0,onPointerUp:be?me:void 0,onPointerCancel:be?Ce:void 0,children:[be&&B.jsxs("div",{className:"layer-order-controls",children:[B.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${c("action.moveLayerUp")} ${c(Z.labelKey)}`,title:c("action.moveLayerUp"),disabled:ot<=0,onClick:()=>he(be,-1),children:B.jsx(di,{name:"fa-chevron-up"})}),B.jsx("button",{type:"button",className:"layer-order-handle","aria-label":`${c("action.dragLayer")} ${c(Z.labelKey)}`,title:c("action.dragLayer"),draggable:!0,onDragStart:He=>z(He,be),onDrag:de,onDragEnd:le,children:B.jsx(di,{name:"fa-grip-vertical"})}),B.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${c("action.moveLayerDown")} ${c(Z.labelKey)}`,title:c("action.moveLayerDown"),disabled:ot>=e.length-1,onClick:()=>he(be,1),children:B.jsx(di,{name:"fa-chevron-down"})})]}),B.jsx("div",{className:Z.control==="color"?"mt-2 flex flex-wrap gap-1.5":"mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1.5",role:"group","aria-label":c(Z.labelKey),children:Ee.map(He=>{const Tt=r[Z.id]===He.id;return Z.control==="color"?B.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border ${Tt?"is-selected":""}`,style:{backgroundColor:He.color??He.id},"aria-label":c(He.labelKey),"aria-pressed":Tt,onClick:()=>o(Z.id,He.id),children:Tt&&B.jsx(di,{name:"fa-check"})},He.id):B.jsx("button",{type:"button",className:`pixel-button min-h-8 px-2 py-1 border text-xs leading-tight transition-colors ${Tt?"skincrafter-option-selected":"skincrafter-secondary-action"}`,"aria-pressed":Tt,onClick:()=>o(Z.id,He.id),children:c(He.labelKey)},He.id)})}),mt&&Mt.length>0&&B.jsx(o0,{colorSlots:Mt,colors:et,t:c,testId:`appearance-color-palettes-${Z.id}`,onChange:(He,Tt)=>o(mt.colorControlId,Tt)}),be&&U&&Be.length>0&&B.jsx(eb,{colorSlots:Be,colors:ht,t:c,onChange:(He,Tt)=>s?.(be,U.id,He,Tt)})]},Z.id)},Ae=p?k.get(p):null;return B.jsxs(V_,{title:c("panel.customization"),icon:"fa-sliders",className:"overflow-visible md:overflow-hidden customization-panel p-3",children:[B.jsxs("div",{className:"space-y-1.5 options-container md:flex-1 md:min-h-0",children:[X.map(Se),B.jsx("div",{ref:A,className:"layer-order-list space-y-1.5",onDragOver:F,onDrop:oe,children:C.map(Se)})]}),M&&Ae&&B.jsxs("div",{className:`layer-drag-ghost ${M.pointerType==="touch"?"is-touch":""}`,style:{left:M.x,top:M.y},"aria-hidden":"true","data-testid":"layer-drag-ghost",children:[B.jsx(di,{name:Ae.icon}),B.jsx("span",{children:c(Ae.labelKey)})]})]})}const kv=[137,80,78,71,13,10,26,10],Uu=64;class rr extends Error{cause;constructor(e,t){super(e),this.name="InvalidInitialSkinError",this.cause=t}}function nb(r){let e="";for(let t=0;t<r.length;t+=32768){const o=r.subarray(t,Math.min(t+32768,r.length));e+=String.fromCharCode(...o)}return`data:image/png;base64,${btoa(e)}`}async function rb(r){const e=globalThis.crypto?.subtle;if(!e)throw new rr("Initial skin fingerprint could not be computed because Web Crypto is unavailable.");try{const t=new Uint8Array(r.byteLength);t.set(r);const o=await e.digest("SHA-256",t);return Array.from(new Uint8Array(o),s=>s.toString(16).padStart(2,"0")).join("")}catch(t){throw new rr("Initial skin fingerprint could not be computed.",t)}}function ib(r){if(r.length<24)throw new rr("Initial skin is not a valid PNG file.");for(let s=0;s<kv.length;s+=1)if(r[s]!==kv[s])throw new rr("Initial skin is not a valid PNG file.");const e=new DataView(r.buffer,r.byteOffset,r.byteLength),t=e.getUint32(8),o=String.fromCharCode(r[12],r[13],r[14],r[15]);if(t!==13||o!=="IHDR")throw new rr("Initial skin PNG is missing a valid IHDR header.");return{width:e.getUint32(16),height:e.getUint32(20)}}async function ob(r){return typeof r.arrayBuffer=="function"?new Uint8Array(await r.arrayBuffer()):new Promise((e,t)=>{const o=new FileReader;o.onload=()=>{if(!(o.result instanceof ArrayBuffer)){t(new Error("Blob reader did not return an ArrayBuffer."));return}e(new Uint8Array(o.result))},o.onerror=()=>t(o.error??new Error("Blob reader failed.")),o.readAsArrayBuffer(r)})}async function sb(r){await new Promise((e,t)=>{const o=new Image;o.onload=()=>{const s=o.naturalWidth||o.width,l=o.naturalHeight||o.height;if(o.onload=null,o.onerror=null,s!==Uu||l!==Uu){t(new rr("Initial skin must be a 64x64 Minecraft PNG."));return}e()},o.onerror=s=>{o.onload=null,o.onerror=null,t(new rr("Initial skin PNG could not be decoded.",s))},o.src=r})}async function ab(r,e){if(r.type&&r.type.toLowerCase()!=="image/png")throw new rr("Initial skin must use the image/png MIME type.");let t;try{t=await ob(r)}catch(c){throw new rr("Initial skin data could not be read.",c)}const o=ib(t);if(o.width!==Uu||o.height!==Uu)throw new rr("Initial skin must be a 64x64 Minecraft PNG.");const s=nb(t);await sb(s);const l=await rb(t);return{dataUrl:s,fingerprint:l,model:e}}function lb(r){const[e,t]=r.split(",",2),o=e.match(/^data:([^;]+);base64$/)?.[1]??"image/png",s=atob(t??""),l=new Uint8Array(s.length);for(let c=0;c<s.length;c+=1)l[c]=s.charCodeAt(c);return new Blob([l],{type:o})}function ub(r,e,t,o=e.sex==="Female"?"slim":"classic",s){const l=lb(r),c=new File([l],"skincrafter-skin.png",{type:"image/png"}),d=pr(s);return{blob:l,file:c,dataUrl:r,metadata:{width:64,height:64,mimeType:"image/png",model:o,appearance:{...e},layerOrder:[...t],wardrobeColors:Wu(d)}}}const wa=2,cb=new Map([[0,r=>({...r,schemaVersion:1})],[1,r=>({...r,schemaVersion:2,wardrobeColors:r.wardrobeColors??{}})]]);function Ra(r){return typeof r=="object"&&r!==null&&!Array.isArray(r)}function kr(r){return{success:!1,error:{code:"invalid_state",message:r}}}function Ov(r){return{success:!1,error:{code:"unsupported_schema_version",message:`Unsupported SkinCrafter state schema version: ${r}.`,schemaVersion:r}}}function db(r){return{schemaVersion:wa,appearance:Gu(r.appearance),layerOrder:eo(r.layerOrder),wardrobeColors:pr(r.wardrobeColors)}}function Dh(r){const e=db(r);return{...e,appearance:{...e.appearance},layerOrder:[...e.layerOrder],wardrobeColors:Wu(e.wardrobeColors)}}function fb(r){const e={};for(const t of Qi){const o=r[t];if(o===void 0)continue;if(!Ra(o))return`SkinCrafter persisted wardrobeColors.${t} must be an object.`;const s={};for(const[l,c]of Object.entries(o)){if(!Ra(c))return`SkinCrafter persisted wardrobeColors.${t}.${l} must be an object.`;const d={};for(const[f,p]of Object.entries(c)){if(typeof p!="string")return`SkinCrafter persisted wardrobeColors.${t}.${l}.${f} must be a string.`;d[f]=p}s[l]=d}e[t]=s}return e}function s0(r){if(!Ra(r))return kr("SkinCrafter persisted state must be an object.");const e=[],t=r.schemaVersion;let o,s;if(t===void 0)o=null,e.push({code:"legacy_unversioned",message:"Migrated legacy unversioned SkinCrafter state."}),s={...r,schemaVersion:0};else{if(typeof t!="number"||!Number.isInteger(t)||t<0)return kr("SkinCrafter schemaVersion must be a non-negative integer.");if(o=t,o>wa)return Ov(o);s={...r}}let l=o??0;for(;l<wa;){const x=cb.get(l);if(!x)return Ov(l);const _=l+1;s=x(s),e.push({code:"schema_version_migrated",message:`Migrated SkinCrafter state schema from version ${l} to ${_}.`,from:l,to:_}),l=_}if(s.schemaVersion!==wa)return kr("SkinCrafter state migration did not produce the current schema version.");const c=o===null||o===0;if(!Ra(s.appearance))return kr("SkinCrafter persisted appearance must be an object.");const d={};for(const x of Ji){const _=s.appearance[x.id];if(_===void 0){if(!c)return kr(`SkinCrafter persisted appearance is missing ${x.id}.`);continue}if(typeof _!="string")return kr(`SkinCrafter persisted appearance.${x.id} must be a string.`);d[x.id]=_}const f=s.layerOrder;if(f===void 0&&!c)return kr("SkinCrafter persisted state is missing layerOrder.");if(f!==void 0&&(!Array.isArray(f)||f.some(x=>typeof x!="string")))return kr("SkinCrafter persisted layerOrder must be an array of strings.");if(!Ra(s.wardrobeColors))return kr("SkinCrafter persisted wardrobeColors must be an object.");const p=fb(s.wardrobeColors);if(typeof p=="string")return kr(p);const m=Gu(d);for(const x of Ji){const _=s.appearance[x.id],L=m[x.id];_!==L&&e.push({code:"appearance_value_defaulted",message:`Normalized persisted appearance.${x.id} to a supported value.`,path:x.id,from:_,to:L})}const v=f??[],y=eo(v);(v.length!==y.length||v.some((x,_)=>x!==y[_]))&&e.push({code:"layer_order_normalized",message:"Normalized persisted layer order by removing invalid/duplicate layers and appending missing layers.",path:"layerOrder",from:[...v],to:[...y]});const S=pr(p);JSON.stringify(p)!==JSON.stringify(S)&&e.push({code:"wardrobe_colors_normalized",message:"Normalized wardrobe color slots by removing unknown values and filling missing slots with defaults.",path:"wardrobeColors",from:p,to:S});const E={appearance:m,layerOrder:y,wardrobeColors:S},M=Dh(E);return{success:!0,state:E,serializedState:M,sourceSchemaVersion:o,migrated:o!==wa||e.length>0,notices:e}}class rh extends Error{assetUrl;cause;constructor(e,t){super(`Failed to load texture asset: ${e}`),this.name="TextureLoadError",this.assetUrl=e,this.cause=t}}const Xr=64,hb=r=>r?typeof r=="string"?{url:r,role:"fixed"}:r.url?r.role==="tintable"?{url:r.url,role:"tintable",tint:r.tint}:{url:r.url,role:"fixed"}:null:null;function pb(r){const e=r.replace("#",""),t=e.length===3?e.split("").map(o=>`${o}${o}`).join(""):e;return{r:Number.parseInt(t.slice(0,2),16),g:Number.parseInt(t.slice(2,4),16),b:Number.parseInt(t.slice(4,6),16),a:255}}function mb(r,e){return r===Xr&&e===Xr}function gb(r,e){if(r.a===0)return r;const t=(r.r+r.g+r.b)/765;return{r:Math.round(e.r*t),g:Math.round(e.g*t),b:Math.round(e.b*t),a:r.a}}function vb(r,e){const t=new Uint8ClampedArray(r);for(let o=0;o<t.length;o+=4){const s=gb({r:r[o],g:r[o+1],b:r[o+2],a:r[o+3]},e);t[o]=s.r,t[o+1]=s.g,t[o+2]=s.b,t[o+3]=s.a}return t}const _b=(r,e,t)=>{const o=document.createElement("canvas");o.width=Xr,o.height=Xr;const s=o.getContext("2d",{willReadFrequently:!0});if(!s)throw new Error("Could not create a 2D canvas context for tintable skin composition.");s.imageSmoothingEnabled=!1,s.drawImage(e,0,0);const l=s.getImageData(0,0,Xr,Xr);l.data.set(vb(l.data,pb(t))),s.putImageData(l,0,0),r.drawImage(o,0,0)},xb=(r,e,t)=>{if(t.role==="fixed"){r.drawImage(e,0,0);return}_b(r,e,t.tint??"#FFFFFF")},yb=r=>new Promise((e,t)=>{const o=new Image;o.crossOrigin="anonymous",o.onload=()=>{const s=o.naturalWidth||o.width,l=o.naturalHeight||o.height;if(!mb(s,l)){t(new rh(r,new Error(`Skin texture atlas must be ${Xr}x${Xr}; got ${s}x${l}.`)));return}e(o)},o.onerror=s=>t(new rh(r,s)),o.src=r});async function Bv(r){const e=r.map(hb).filter(l=>!!l);if(e.length===0)throw new Error("No texture assets were available for skin composition.");const t=await Promise.all(e.map(l=>yb(l.url))),o=document.createElement("canvas");o.width=Xr,o.height=Xr;const s=o.getContext("2d",{willReadFrequently:!0});if(!s)throw new Error("Could not create a 2D canvas context for skin composition.");return s.imageSmoothingEnabled=!1,t.forEach((l,c)=>xb(s,l,e[c])),o.toDataURL("image/png")}function Hr(r,e){return{appearance:Gu(r?.appearance??null,e),layerOrder:eo(r?.layerOrder),wardrobeColors:pr(r?.wardrobeColors)}}function Sb(r,e){return JSON.stringify(pr(r))===JSON.stringify(pr(e))}function zv(r,e){return r.layerOrder.length!==e.layerOrder.length||r.layerOrder.some((t,o)=>t!==e.layerOrder[o])||!Sb(r.wardrobeColors,e.wardrobeColors)?!1:Ji.every(({id:t})=>r.appearance[t]===e.appearance[t])}function a0(r,e){return{code:r==="load"?"persistence_load_failed":"persistence_save_failed",category:"persistence",message:r==="load"?"Failed to load persisted SkinCrafter state.":"Failed to save SkinCrafter state.",cause:e}}function Hv(r){try{const e=r?.load()??null;return e&&"status"in e?e.status==="incompatible"?{state:Hr(null),writesBlocked:!0,error:null}:e.status==="empty"?{state:Hr(null),writesBlocked:!1,error:null}:{state:Hr(e.state),writesBlocked:!1,error:null}:{state:Hr(e),writesBlocked:!1,error:null}}catch(e){return{state:Hr(null),writesBlocked:!0,error:a0("load",e)}}}function Eb(r){return{appearance:{...r.appearance},layerOrder:[...r.layerOrder],wardrobeColors:Wu(pr(r.wardrobeColors))}}function Mb(r){return r?{"--skincrafter-accent":r.accent,"--skincrafter-accent-strong":r.accentStrong,"--skincrafter-surface":r.surface,"--skincrafter-text":r.text,"--skincrafter-muted":r.muted,"--skincrafter-border":r.border}:{}}function wb(r){return r instanceof rh?{code:"asset_load_failed",category:"asset",message:`Failed to load skin texture asset: ${r.assetUrl}`,assetUrl:r.assetUrl,cause:r.cause}:{code:"generation_failed",category:"generation",message:"Failed to generate the current skin.",cause:r}}function Vv(r){return{code:"invalid_initial_skin",category:"input",message:r instanceof rr?r.message:"Initial skin must be a decodable 64x64 Minecraft PNG.",cause:r instanceof rr?r.cause??r:r}}function In(r,...e){if(r)try{r(...e)}catch(t){console.error("SkinCrafter host callback failed",t)}}function Tb({locale:r=Us,value:e,initialSkin:t,persistence:o,assetBaseUrl:s,onStateChange:l,onSkinChange:c,onSave:d,onStatusChange:f,onError:p,className:m="",style:v,theme:y,previewBottomOffset:S=0}){const E=t?.image??null,M=t?.model??null,x=E!==null,[_]=O.useState(()=>{if(e)return{state:Hr(e,M??void 0),writesBlocked:!1,error:null};const We=Hv(o);return t?{state:Hr(t,M??void 0),writesBlocked:We.writesBlocked,error:We.error}:We}),[L,P]=O.useState(_.state),[A,G]=O.useState(null),[I,k]=O.useState({key:null,status:"idle",error:null}),[X,b]=O.useState(null),[C,V]=O.useState({source:null,model:null,status:"idle",error:null}),[ae,J]=O.useState([]),ee=O.useRef(0),fe=O.useRef({}),ue=O.useRef(c),he=O.useRef(f),z=O.useRef(p),de=O.useRef(null),le=O.useRef(!1),F=O.useRef(null),oe=O.useRef("classic"),Oe=O.useRef(o),ne=O.useRef(!e),me=O.useRef(_.writesBlocked),Ce=O.useRef(_.error!==null),Se=O.useRef(!1),Ae=O.useRef(null),Z=x&&M!==null&&X?.source===E&&X.model===M,Ee=Z&&X?X.baselineState.appearance.sex:_.state.appearance.sex,be=ae.includes("sex"),ot=O.useMemo(()=>{if(!e)return null;const We=M!==null&&!be&&e.appearance.sex===Ee?M:void 0;return Hr(e,We)},[Ee,M,be,e]),Ze=O.useMemo(()=>{if(!Z||M===null||be)return L;const We=Hr(L,M);return zv(L,We)?L:We},[Z,M,L,be]),U=ot??Ze,mt=O.useMemo(()=>pr(U.wardrobeColors),[U.wardrobeColors]),pt=O.useRef(U);pt.current=U;const Mt=O.useCallback(We=>Wa(r,We),[r]),Be=O.useCallback(We=>{const qt=ee.current+1;ee.current=qt,fe.current[We]=qt,J(Et=>Et.includes(We)?Et:[...Et,We])},[]);O.useEffect(()=>{ot&&P(We=>zv(We,ot)?We:ot)},[ot]),O.useEffect(()=>{e||Ze===L||P(Ze)},[L,Ze,e]),O.useEffect(()=>{!e||!x||be||e.appearance.sex!==Ee&&Be("sex")},[x,Ee,Be,be,e]);const ht=O.useCallback(We=>{e||P(We),l?.(We)},[l,e]),et=O.useCallback((We,qt)=>{x&&Be(We);const Et=We==="sex"?qt==="Female"?"slim":"classic":oe.current;ht({...U,appearance:Gu({...U.appearance,[We]:qt},Et),wardrobeColors:mt})},[x,Be,ht,U,mt]),He=O.useCallback((We,qt,Et,kt)=>{x&&(e?Ae.current={category:We,itemId:qt,slotId:Et,color:kt}:Be(We));const Kt=Wu(mt),Ln=Kt[We]??{},Sn=Ln[qt]??{};Kt[We]={...Ln,[qt]:{...Sn,[Et]:kt}},ht({...U,wardrobeColors:pr(Kt)})},[x,Be,ht,U,mt,e]),Tt=O.useCallback(We=>{ht({...U,layerOrder:eo(We)})},[ht,U]);O.useEffect(()=>{const We=Ae.current;!We||!e||U.appearance[We.category]===We.itemId&&mt[We.category]?.[We.itemId]?.[We.slotId]===We.color&&(Ae.current=null,Be(We.category))},[Z,Be,U.appearance,mt,e]),O.useEffect(()=>{Ae.current=null},[E,M]),O.useEffect(()=>{ue.current=c},[c]),O.useEffect(()=>{he.current=f},[f]),O.useEffect(()=>{z.current=p},[p]),O.useEffect(()=>{Se.current||!_.error||(Se.current=!0,In(z.current,_.error))},[_.error]),O.useEffect(()=>{if(!E){de.current=null,le.current=!1,b(null),ee.current=0,fe.current={},J([]),V({source:null,model:null,status:"idle",error:null});return}if(!M){le.current=!1;const kt=Vv(new rr("Initial skin model must be either classic or slim."));V({source:E,model:null,status:"error",error:kt}),In(he.current,"error"),In(z.current,kt);return}let We=!0;const qt=Eb(pt.current),Et=ee.current;return V({source:E,model:M,status:"loading",error:null}),In(he.current,"generating"),ab(E,M).then(kt=>{if(!We)return;const Kt=de.current,Ln=Kt!==null&&Kt.fingerprint===kt.fingerprint&&Kt.model===kt.model,Sn=Ln?{...Kt,source:E}:{source:E,dataUrl:kt.dataUrl,fingerprint:kt.fingerprint,model:kt.model,baselineState:Hr(qt,kt.model)};if(le.current=Ln,de.current=Sn,b(Sn),!Ln){const Kn=Object.entries(fe.current).filter(([,En])=>(En??0)>Et).map(([En])=>En);J(Kn)}V({source:E,model:M,status:"ready",error:null}),Ln&&In(he.current,"ready")}).catch(kt=>{if(!We)return;le.current=!1;const Kt=Vv(kt);V({source:E,model:M,status:"error",error:Kt}),In(he.current,"error"),In(z.current,Kt)}),()=>{We=!1}},[E,M]),O.useEffect(()=>{if(!(e||Ce.current)){if(!ne.current||Oe.current!==o){const We=Hv(o);if(Oe.current=o,ne.current=!0,me.current=We.writesBlocked,We.error){Ce.current=!0,In(z.current,We.error);return}}if(!(me.current||!o))try{o.save(Dh(U))}catch(We){me.current=!0,Ce.current=!0,In(z.current,a0("save",We))}}},[o,U,e]);const D=O.useMemo(()=>{if(!Z||!X)return[];const We=new Set(ae);for(const Et of Ji)U.appearance[Et.id]!==X.baselineState.appearance[Et.id]&&We.add(Et.id);const qt=pr(X.baselineState.wardrobeColors);for(const Et of Qi){const kt=U.appearance[Et];if(kt!==X.baselineState.appearance[Et])continue;const Kt=mt[Et]?.[kt]??{},Ln=qt[Et]?.[kt]??{};JSON.stringify(Kt)!==JSON.stringify(Ln)&&We.add(Et)}return Ji.map(Et=>Et.id).filter(Et=>We.has(Et))},[ae,Z,X,U.appearance,mt]),{race:T,sex:Q,skinColor:pe,eyes:ve,eyesColor:ce,hair:Ke,hairColor:Le,hat:Ge,shirt:Je,pants:_e,shoes:ze,accessory:it}=U.appearance,nt=JSON.stringify(U.layerOrder),De=JSON.stringify(mt),st=JSON.stringify(D),W=s?.replace(/\/+$/,"")||void 0,Ne=D.includes("sex"),xe=Z&&X&&!Ne?X.model==="slim"?"Female":"Male":Q,Ue=Z&&X&&!Ne?X.model:Q==="Female"?"slim":"classic";oe.current=Ue;const we=Z?X?.fingerprint??null:null,ge=Z?X?.dataUrl??null:null,Ie=JSON.stringify([T,Q,pe,ve,ce,Ke,Le,Ge,Je,_e,ze,it,nt,De,W??null,we,Ue,st]),ct=A?.key===Ie?A:null,Lt=x&&C.source===E&&C.model===M,Ct=x&&(!Lt||C.status==="loading"),gn=Lt&&C.status==="error",rn=Ct?"generating":gn?"error":I.key===Ie?I.status:"idle",Si=gn?C.error:I.key===Ie?I.error:null;O.useEffect(()=>{if(x&&!Z)return;if(le.current){const Sn=F.current===Ie;if(le.current=!1,Sn)return}let We=!0;const qt={race:T,sex:Q,skinColor:pe,eyes:ve,eyesColor:ce,hair:Ke,hairColor:Le,hat:Ge,shirt:Je,pants:_e,shoes:ze,accessory:it},Et={...qt,sex:xe},kt=JSON.parse(nt),Kt=JSON.parse(De),Ln=JSON.parse(st);return k({key:Ie,status:"generating",error:null}),In(he.current,"generating"),(async()=>{let Sn;try{let Kn;if(ge){const En=JA(Et,kt,Ln,W,Ue,Kt);Kn=En.filter(Boolean).length===0?ge:await Bv([ge,...En])}else{const En=ZA(qt,kt,W,Ue,Kt);Kn=await Bv(En)}Sn={dataUrl:Kn,output:ub(Kn,qt,kt,Ue,Kt)}}catch(Kn){if(!We)return;const En=wb(Kn);k({key:Ie,status:"error",error:En}),In(he.current,"error"),In(z.current,En);return}We&&(F.current=Ie,G({key:Ie,texture:Sn.dataUrl,output:Sn.output}),k({key:Ie,status:"ready",error:null}),In(ue.current,Sn.output),In(he.current,"ready"))})(),()=>{We=!1}},[it,st,W,xe,Ue,ve,ce,Ie,Ke,Le,x,Ge,ge,Z,nt,_e,T,Q,Je,ze,pe,De]);const gr=ct??A,qn=ct?.output??null,vr=gr?.texture??null,qr=gr?.output.metadata.model??Ue,Pr=rn==="ready"&&qn!==null,Lr=d&&Pr&&qn?()=>d(qn):void 0,Lo=O.useCallback(We=>{In(z.current,We)},[]);return B.jsx("div",{className:`skincrafter-editor h-full min-h-0 w-full ${m}`.trim(),style:{...Mb(y),...v},"data-testid":"skincrafter-editor","data-skincrafter-locale":r,"data-skincrafter-generation-status":rn,children:B.jsx(gA,{left:B.jsx($_,{texture:vr,model:qr,footerHeight:S,t:Mt,onSave:Lr,canSave:Pr,generationStatus:rn,generationError:Si,onError:Lo}),right:B.jsx(tb,{appearance:U.appearance,textureLayerOrder:U.layerOrder,wardrobeColors:mt,onAppearanceChange:et,onWardrobeColorChange:He,onLayerOrderChange:Tt,t:Mt,assetBaseUrl:s,skinModel:Ue})})})}function Cb({texture:r,model:e="classic",locale:t=Us,bottomOffset:o=0,className:s="",style:l,theme:c,onError:d}){const f=m=>Wa(t,m),p={"--skincrafter-accent":c?.accent,"--skincrafter-accent-strong":c?.accentStrong,"--skincrafter-surface":c?.surface,"--skincrafter-text":c?.text,"--skincrafter-muted":c?.muted,"--skincrafter-border":c?.border};return B.jsx("div",{className:`skincrafter-editor h-full min-h-0 ${s}`.trim(),style:{...p,...l},children:B.jsx($_,{texture:r,model:e,footerHeight:o,t:f,onError:d})})}const l0={en:{"skinView.error.usernameRequired":"Please enter a Minecraft username.","skinView.error.playerNotFound":"Minecraft player not found.","skinView.error.skinTextureMissing":"This player does not have an available skin texture.","skinView.error.network":"Could not reach PlayerDB. Check your connection and try again.","skinView.error.serviceUnavailable":"PlayerDB is temporarily unavailable. Try again later.","skinView.error.rateLimited":"Too many player lookup requests. Try again in a moment.","skinView.error.invalidResponse":"PlayerDB returned an unexpected response. Try again later.","notFound.title":"Page not found","notFound.description":"This address does not point to a SkinCrafter page.","notFound.backToCreator":"Back to creator"},pl:{"skinView.error.usernameRequired":"Podaj nazwę gracza Minecraft.","skinView.error.playerNotFound":"Nie znaleziono gracza Minecraft.","skinView.error.skinTextureMissing":"Ten gracz nie ma dostępnej tekstury skina.","skinView.error.network":"Nie udało się połączyć z PlayerDB. Sprawdź połączenie i spróbuj ponownie.","skinView.error.serviceUnavailable":"PlayerDB jest chwilowo niedostępne. Spróbuj ponownie później.","skinView.error.rateLimited":"Za dużo zapytań o graczy. Spróbuj ponownie za chwilę.","skinView.error.invalidResponse":"PlayerDB zwróciło nieoczekiwaną odpowiedź. Spróbuj ponownie później.","notFound.title":"Nie znaleziono strony","notFound.description":"Ten adres nie prowadzi do żadnej strony SkinCraftera.","notFound.backToCreator":"Wróć do kreatora"},"pt-BR":{"skinView.error.usernameRequired":"Digite um nome de usuário do Minecraft.","skinView.error.playerNotFound":"Jogador do Minecraft não encontrado.","skinView.error.skinTextureMissing":"Este jogador não possui uma textura de skin disponível.","skinView.error.network":"Não foi possível acessar o PlayerDB. Verifique sua conexão e tente novamente.","skinView.error.serviceUnavailable":"O PlayerDB está temporariamente indisponível. Tente novamente mais tarde.","skinView.error.rateLimited":"Muitas consultas de jogadores. Tente novamente em instantes.","skinView.error.invalidResponse":"O PlayerDB retornou uma resposta inesperada. Tente novamente mais tarde.","notFound.title":"Página não encontrada","notFound.description":"Este endereço não aponta para uma página do SkinCrafter.","notFound.backToCreator":"Voltar ao criador"}};function Rb(r){return r in l0.en}function Ab(r,e){return Rb(e)?l0[r][e]:Wa(r,e)}function bb(r=()=>window.localStorage){return{read:e=>{try{return{status:"available",value:r().getItem(e)}}catch{return{status:"unavailable"}}},write:(e,t)=>{try{return r().setItem(e,t),!0}catch{return!1}}}}const Nh=bb(),Pb=jv.forwardRef((r,e)=>B.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:B.jsx("div",{className:"container mx-auto text-center text-sm",children:B.jsx("p",{children:"(c) 2026 SkinCrafter. All rights reserved."})})})),Lb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2036'%20role='img'%20aria-label='Brazil%20flag'%3e%3crect%20width='60'%20height='36'%20fill='%23009B3A'/%3e%3cpath%20d='M30%204%2054%2018%2030%2032%206%2018Z'%20fill='%23FFDF00'/%3e%3ccircle%20cx='30'%20cy='18'%20r='9'%20fill='%23002776'/%3e%3cpath%20d='M22.5%2016.5c5.5-2%2011-1.5%2015%201.5'%20fill='none'%20stroke='%23fff'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3c/svg%3e",Db="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2036'%20role='img'%20aria-label='United%20Kingdom%20flag'%3e%3crect%20width='60'%20height='36'%20fill='%23012169'/%3e%3cpath%20d='M0%200%2060%2036M60%200%200%2036'%20stroke='%23fff'%20stroke-width='8'/%3e%3cpath%20d='M0%200%2060%2036M60%200%200%2036'%20stroke='%23C8102E'%20stroke-width='4'/%3e%3cpath%20d='M30%200v36M0%2018h60'%20stroke='%23fff'%20stroke-width='12'/%3e%3cpath%20d='M30%200v36M0%2018h60'%20stroke='%23C8102E'%20stroke-width='7'/%3e%3c/svg%3e",Nb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2036'%20role='img'%20aria-label='Poland%20flag'%3e%3crect%20width='60'%20height='18'%20fill='%23fff'/%3e%3crect%20y='18'%20width='60'%20height='18'%20fill='%23DC143C'/%3e%3c/svg%3e",Ub=r=>Wa(Us,r),Ib="/dev/logo.png",Fb={en:{flagSrc:Db,label:"English"},pl:{flagSrc:Nb,label:"Polski"},"pt-BR":{flagSrc:Lb,label:"Português"}},Gv=r=>Fb[r],kb=r=>"DEV",hf=kb(),Wv=({src:r})=>B.jsx("img",{src:r,alt:"","aria-hidden":"true",className:"h-[14px] w-6 shrink-0 object-contain"}),Ob=({logoSrc:r=Ib,logoAlt:e="SkinCrafter logo",language:t="en",onLanguageChange:o,t:s=Ub})=>{const l=O.useRef(null),c=Gv(t),d=f=>{l.current?.removeAttribute("open"),o?.(f)};return B.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:B.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[B.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[B.jsx("div",{className:"h-8 w-36 flex items-center",children:B.jsx("img",{src:r,alt:e,className:"h-auto max-h-8 w-full object-contain",style:{imageRendering:"pixelated"}})}),B.jsx("span",{className:"pixel-border bg-amber-500 px-2 py-0.5 text-xs font-bold uppercase tracking-normal text-green-950 shadow-sm",title:hf,"aria-label":hf,children:hf})]}),B.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[B.jsx(gf,{to:"/",className:({isActive:f})=>`pixel-button px-3 py-1 pixel-border transition-colors ${f?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:s("nav.wardrobe")}),B.jsx(gf,{to:"/mcskinview",className:({isActive:f})=>`pixel-button px-3 py-1 pixel-border transition-colors ${f?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:s("nav.skinView")}),o&&B.jsxs("details",{ref:l,className:"group relative ml-auto sm:ml-0",children:[B.jsxs("summary",{className:"pixel-button pixel-border flex h-9 min-w-16 cursor-pointer list-none items-center justify-center gap-2 bg-green-700 px-3 py-1 text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-green-800 [&::-webkit-details-marker]:hidden","aria-label":`${s("nav.language")}: ${c.label}`,children:[B.jsx(Wv,{src:c.flagSrc}),B.jsx("span",{className:"text-xs transition-transform group-open:rotate-180","aria-hidden":"true",children:"▾"})]}),B.jsx("div",{className:"pixel-border absolute right-0 z-50 mt-2 min-w-44 bg-green-800 p-1 text-white shadow-md",role:"menu","aria-label":s("nav.language"),children:j_.map(f=>{const p=Gv(f),m=f===t;return B.jsxs("button",{type:"button",className:`pixel-button pixel-border mb-1 flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors last:mb-0 ${m?"bg-green-700 text-white hover:bg-green-800 focus:bg-green-800":"bg-gray-100 text-gray-700 hover:bg-gray-200 focus:bg-gray-200"} focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-inset`,role:"menuitemradio","aria-checked":m,onClick:()=>d(f),children:[B.jsx(Wv,{src:p.flagSrc}),B.jsx("span",{children:p.label})]},f)})})]})]})]})})},u0="skincrafterLanguage",Bb=()=>{const r=Nh.read(u0);return r.status==="available"&&hA(r.value)?r.value:Us};function Uh({children:r}){const[e,t]=O.useState(()=>Bb()),o=O.useRef(null),[s,l]=O.useState(0),c=O.useCallback(f=>Ab(e,f),[e]),d=O.useCallback(f=>{t(f)},[]);return O.useLayoutEffect(()=>{document.documentElement.lang=e},[e]),O.useEffect(()=>{Nh.write(u0,e)},[e]),O.useEffect(()=>{const f=()=>{l(o.current?.offsetHeight??0)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),B.jsxs("div",{className:"max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col",children:[B.jsx("div",{className:"shrink-0",children:B.jsx(Ob,{language:e,onLanguageChange:d,t:c})}),r({footerHeight:s,language:e,t:c}),B.jsx("div",{className:"shrink-0",children:B.jsx(Pb,{ref:o})})]})}const bu="skincrafterState",Ih="wardrobeAppearance",Fh="wardrobeLayerOrder";function ka(r){return JSON.parse(r)}function _u(){return{appearance:{...Wr},layerOrder:eo(null)}}function c0(r){const e=s0(r);return e.success?{state:e.state,serializedState:e.serializedState}:null}function zb(r){let e;try{e=ka(r)}catch{return{kind:"invalid"}}const t=s0(e);return t.success?{kind:"loaded",value:{state:t.state,serializedState:t.serializedState}}:t.error.code==="unsupported_schema_version"?{kind:"unsupported"}:{kind:"invalid"}}function Hb(r){const e=r(Ih);if(e.status==="unavailable")return{kind:"unavailable"};if(e.value===null)return{kind:"missing"};const t=r(Fh);if(t.status==="unavailable")return{kind:"unavailable"};if(t.value===null)return{kind:"missing"};try{const o=c0({appearance:ka(e.value),layerOrder:ka(t.value)});return o?{kind:"loaded",value:o}:{kind:"missing"}}catch{return{kind:"missing"}}}function Vb(r,e){const t=r(Ih);if(t.status==="unavailable")return _u();let o;if(t.value)try{o=ka(t.value)}catch{o={...Wr}}else{const d=r("wardrobeRace"),f=r("wardrobeSkinColor"),p=r("wardrobeHat");if(d.status==="unavailable"||f.status==="unavailable"||p.status==="unavailable")return _u();o={race:d.value??Wr.race,skinColor:f.value??Wr.skinColor,hat:p.value??Wr.hat}}let s=eo(null);const l=r(Fh);if(l.status==="unavailable")return _u();if(l.value)try{s=ka(l.value)}catch{s=eo(null)}const c=c0({appearance:o,layerOrder:s});return c?(e(bu,JSON.stringify(c.serializedState)),c.state):_u()}function Gb(r,e){return JSON.stringify(r.appearance)===JSON.stringify(e.appearance)&&JSON.stringify(r.layerOrder)===JSON.stringify(e.layerOrder)}function Wb(r=Nh){let e=!0;const t=s=>{const l=r.read(s);return l.status==="unavailable"&&(e=!1),l},o=(s,l)=>{if(!e)return!1;const c=r.write(s,l);return c||(e=!1),c};return{load:()=>{e=!0;const s=t(bu);if(s.status==="unavailable")return{status:"empty"};if(s.value===null)return{status:"loaded",state:Vb(t,o)};const l=zb(s.value);if(l.kind==="unsupported")return e=!1,{status:"incompatible"};if(l.kind==="invalid")return{status:"empty"};const c=Hb(t);if(c.kind==="loaded"&&!Gb(c.value.serializedState,l.value.serializedState)){const d={...c.value.state,wardrobeColors:l.value.state.wardrobeColors},f=Dh(d);return o(bu,JSON.stringify(f)),{status:"loaded",state:d}}return{status:"loaded",state:l.value.state}},save:s=>{o(bu,JSON.stringify(s))&&o(Ih,JSON.stringify(s.appearance))&&o(Fh,JSON.stringify(s.layerOrder))}}}const Xb=Wb();class $t extends Error{code;status;cause;constructor(e,t={}){super(e),this.name="FetchSkinError",this.code=e,this.status=t.status,this.cause=t.cause}}const jb="textures.minecraft.net",$b=(r,e)=>{let t;try{t=new URL(r)}catch(s){throw new $t("invalid_response",{status:e,cause:s})}if(!(t.hostname===jb&&t.port===""&&t.username===""&&t.password==="")||t.protocol!=="http:"&&t.protocol!=="https:")throw new $t("invalid_response",{status:e});return t.protocol="https:",t.toString()},Br=r=>typeof r=="object"&&r!==null,Yb=r=>Br(r)&&typeof r.name=="string"&&typeof r.value=="string",qb=r=>{if(!Br(r)||typeof r.success!="boolean")throw new $t("invalid_response");if(!r.success)return{success:!1};if(!Br(r.data)||!Br(r.data.player))throw new $t("invalid_response");const e=r.data.player;if(e.skin_texture!==void 0&&typeof e.skin_texture!="string")throw new $t("invalid_response");if(e.properties!==void 0&&(!Array.isArray(e.properties)||!e.properties.every(Yb)))throw new $t("invalid_response");return{success:!0,data:{player:{skin_texture:e.skin_texture,properties:e.properties}}}},Kb=r=>{if(!r)return null;let e;try{e=JSON.parse(atob(r.value))}catch(l){throw new $t("invalid_response",{cause:l})}if(!Br(e))throw new $t("invalid_response");const t=e.textures;if(t===void 0)return{};if(!Br(t))throw new $t("invalid_response");const o=t.SKIN;if(o===void 0)return{textures:{}};if(!Br(o))throw new $t("invalid_response");if(o.url!==void 0&&typeof o.url!="string")throw new $t("invalid_response");const s=o.metadata;if(s!==void 0&&!Br(s))throw new $t("invalid_response");if(Br(s)&&s.model!==void 0&&typeof s.model!="string")throw new $t("invalid_response");return{textures:{SKIN:{url:o.url,metadata:Br(s)&&typeof s.model=="string"?{model:s.model}:void 0}}}},Zb=r=>r===404?new $t("player_not_found",{status:r}):r===429?new $t("rate_limited",{status:r}):r>=500?new $t("service_unavailable",{status:r}):new $t("invalid_response",{status:r});async function Jb(r){let e;try{e=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(r)}`)}catch(f){throw new $t("network_error",{cause:f})}if(!e.ok)throw Zb(e.status);let t;try{t=await e.json()}catch(f){throw new $t("invalid_response",{status:e.status,cause:f})}const o=qb(t);if(!o.success)throw new $t("player_not_found",{status:e.status});const s=o.data?.player;if(!s)throw new $t("invalid_response",{status:e.status});const l=s.properties?.find(f=>f.name==="textures"),c=Kb(l)?.textures?.SKIN,d=c?.url??s.skin_texture;if(!d)throw new $t("skin_texture_missing",{status:e.status});return{texture:$b(d,e.status),model:c?.metadata?.model==="slim"?"slim":"classic"}}const Qb={player_not_found:"skinView.error.playerNotFound",skin_texture_missing:"skinView.error.skinTextureMissing",rate_limited:"skinView.error.rateLimited",service_unavailable:"skinView.error.serviceUnavailable",network_error:"skinView.error.network",invalid_response:"skinView.error.invalidResponse"},e2=({className:r})=>B.jsxs("svg",{"aria-hidden":"true","data-standalone-icon":"user",focusable:"false",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:r,children:[B.jsx("circle",{cx:"12",cy:"8",r:"4"}),B.jsx("path",{d:"M4 21c0-4.25 3.6-7 8-7s8 2.75 8 7"})]}),t2=({className:r})=>B.jsxs("svg",{"aria-hidden":"true","data-standalone-icon":"player-card",focusable:"false",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:r,children:[B.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),B.jsx("circle",{cx:"9",cy:"11",r:"2"}),B.jsx("path",{d:"M6.5 16c.7-1.4 1.5-2 2.5-2s1.8.6 2.5 2M14 10h4M14 14h4"})]}),n2=({className:r})=>B.jsxs("svg",{"aria-hidden":"true","data-standalone-icon":"download",focusable:"false",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:r,children:[B.jsx("path",{d:"M7 18H6a4 4 0 0 1-.4-7.98A6.5 6.5 0 0 1 18.2 9 4.5 4.5 0 0 1 18 18h-1"}),B.jsx("path",{d:"M12 11v8m0 0-3-3m3 3 3-3"})]}),r2=()=>{const[r,e]=O.useState(""),[t,o]=O.useState(null),[s,l]=O.useState(null),[c,d]=O.useState(!1),f=O.useCallback(m=>{e(m.target.value)},[]),p=O.useCallback(async m=>{if(m.preventDefault(),!r.trim()){l("skinView.error.usernameRequired");return}l(null),o(null),d(!0);try{o(await Jb(r.trim()))}catch(v){l(v instanceof $t?Qb[v.code]:"skinView.error.invalidResponse"),o(null)}finally{d(!1)}},[r]);return B.jsx(Uh,{children:({footerHeight:m,language:v,t:y})=>B.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[B.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:B.jsx(Cb,{texture:t?.texture??null,model:t?.model??"classic",locale:v,bottomOffset:m})}),B.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:B.jsxs("section",{className:"mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4",children:[B.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[B.jsx(e2,{className:"mr-2 h-5 w-5 shrink-0 text-green-700"}),y("panel.loadSkin")]}),B.jsxs("div",{className:"space-y-4 md:flex-1 md:min-h-0 overflow-y-auto pr-2",children:[B.jsxs("div",{className:"option-card bg-white shadow p-4 pixel-border relative pt-5",children:[B.jsxs("h3",{className:"font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10",children:[B.jsx(t2,{className:"mr-2 h-4 w-4 shrink-0 text-amber-600"}),y("skinView.player")]}),B.jsxs("form",{onSubmit:p,className:"mt-4 flex flex-col gap-3",children:[B.jsx("input",{type:"text",value:r,onChange:f,placeholder:y("skinView.username"),"aria-label":y("skinView.username"),className:"w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"}),B.jsxs("button",{type:"submit",disabled:c,className:"pixel-button p-2 pixel-border bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white",children:[B.jsx(n2,{className:"mr-2 inline-block h-4 w-4 align-middle"}),y(c?"action.loading":"action.loadSkin")]})]})]}),s&&B.jsx("div",{role:"alert",className:"option-card bg-red-50 text-red-700 shadow p-4 pixel-border",children:y(s)})]})]})})]})})},i2=()=>B.jsx(Uh,{children:({t:r})=>B.jsx("main",{className:"flex-1 min-h-0 flex items-center justify-center p-4",children:B.jsxs("section",{className:"option-card bg-white shadow p-6 pixel-border max-w-xl w-full text-center","aria-labelledby":"not-found-title",children:[B.jsx("p",{className:"text-sm font-semibold uppercase tracking-wider text-amber-700 mb-2",children:"404"}),B.jsx("h1",{id:"not-found-title",className:"text-2xl font-bold text-gray-800 mb-3",children:r("notFound.title")}),B.jsx("p",{className:"text-gray-600 mb-6",children:r("notFound.description")}),B.jsx(ph,{to:"/",className:"inline-block pixel-button p-3 pixel-border bg-green-700 hover:bg-green-800 text-white",children:r("notFound.backToCreator")})]})})}),o2=()=>B.jsx(Uh,{children:({footerHeight:r,language:e})=>B.jsx(Tb,{locale:e,persistence:Xb,previewBottomOffset:r})}),s2=()=>B.jsxs(Jy,{children:[B.jsx(xu,{path:"/",element:B.jsx(o2,{})}),B.jsx(xu,{path:"/mcskinview",element:B.jsx(r2,{})}),B.jsx(xu,{path:"*",element:B.jsx(i2,{})})]}),a2="__skincrafter_spa",ih="/dev/",l2=ih.replace(/\/$/,""),u2=()=>{const e=new URL(window.location.href).searchParams.get(a2);if(!e)return;let t;try{t=new URL(e,window.location.origin)}catch{return}const o=ih.replace(/\/$/,""),s=t.pathname===o||t.pathname.startsWith(ih);t.origin!==window.location.origin||!s||window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`)};u2();Jx.createRoot(document.getElementById("root")).render(B.jsx(jv.StrictMode,{children:B.jsx(ES,{basename:l2,children:B.jsx(s2,{})})}));
