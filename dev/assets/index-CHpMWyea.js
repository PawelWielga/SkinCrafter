(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();function qv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ed={exports:{}},oa={},Md={exports:{}},wt={};var sg;function qx(){if(sg)return wt;sg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(F,re,ke){this.props=F,this.context=re,this.refs=M,this.updater=ke||S}x.prototype.isReactComponent={},x.prototype.setState=function(F,re){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,re,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=x.prototype;function L(F,re,ke){this.props=F,this.context=re,this.refs=M,this.updater=ke||S}var P=L.prototype=new _;P.constructor=L,E(P,x.prototype),P.isPureReactComponent=!0;var A=Array.isArray,G=Object.prototype.hasOwnProperty,N={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function W(F,re,ke){var te,me={},Ce=null,Se=null;if(re!=null)for(te in re.ref!==void 0&&(Se=re.ref),re.key!==void 0&&(Ce=""+re.key),re)G.call(re,te)&&!k.hasOwnProperty(te)&&(me[te]=re[te]);var Ae=arguments.length-2;if(Ae===1)me.children=ke;else if(1<Ae){for(var ne=Array(Ae),_e=0;_e<Ae;_e++)ne[_e]=arguments[_e+2];me.children=ne}if(F&&F.defaultProps)for(te in Ae=F.defaultProps,Ae)me[te]===void 0&&(me[te]=Ae[te]);return{$$typeof:r,type:F,key:Ce,ref:Se,props:me,_owner:N.current}}function b(F,re){return{$$typeof:r,type:F.type,key:re,ref:F.ref,props:F.props,_owner:F._owner}}function C(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function V(F){var re={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(ke){return re[ke]})}var ae=/\/+/g;function Z(F,re){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):re.toString(36)}function J(F,re,ke,te,me){var Ce=typeof F;(Ce==="undefined"||Ce==="boolean")&&(F=null);var Se=!1;if(F===null)Se=!0;else switch(Ce){case"string":case"number":Se=!0;break;case"object":switch(F.$$typeof){case r:case e:Se=!0}}if(Se)return Se=F,me=me(Se),F=te===""?"."+Z(Se,0):te,A(me)?(ke="",F!=null&&(ke=F.replace(ae,"$&/")+"/"),J(me,re,ke,"",function(_e){return _e})):me!=null&&(C(me)&&(me=b(me,ke+(!me.key||Se&&Se.key===me.key?"":(""+me.key).replace(ae,"$&/")+"/")+F)),re.push(me)),1;if(Se=0,te=te===""?".":te+":",A(F))for(var Ae=0;Ae<F.length;Ae++){Ce=F[Ae];var ne=te+Z(Ce,Ae);Se+=J(Ce,re,ke,ne,me)}else if(ne=y(F),typeof ne=="function")for(F=ne.call(F),Ae=0;!(Ce=F.next()).done;)Ce=Ce.value,ne=te+Z(Ce,Ae++),Se+=J(Ce,re,ke,ne,me);else if(Ce==="object")throw re=String(F),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return Se}function fe(F,re,ke){if(F==null)return F;var te=[],me=0;return J(F,te,"","",function(Ce){return re.call(ke,Ce,me++)}),te}function ue(F){if(F._status===-1){var re=F._result;re=re(),re.then(function(ke){(F._status===0||F._status===-1)&&(F._status=1,F._result=ke)},function(ke){(F._status===0||F._status===-1)&&(F._status=2,F._result=ke)}),F._status===-1&&(F._status=0,F._result=re)}if(F._status===1)return F._result.default;throw F._result}var he={current:null},z={transition:null},de={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:z,ReactCurrentOwner:N};function le(){throw Error("act(...) is not supported in production builds of React.")}return wt.Children={map:fe,forEach:function(F,re,ke){fe(F,function(){re.apply(this,arguments)},ke)},count:function(F){var re=0;return fe(F,function(){re++}),re},toArray:function(F){return fe(F,function(re){return re})||[]},only:function(F){if(!C(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},wt.Component=x,wt.Fragment=t,wt.Profiler=s,wt.PureComponent=L,wt.StrictMode=o,wt.Suspense=f,wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,wt.act=le,wt.cloneElement=function(F,re,ke){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var te=E({},F.props),me=F.key,Ce=F.ref,Se=F._owner;if(re!=null){if(re.ref!==void 0&&(Ce=re.ref,Se=N.current),re.key!==void 0&&(me=""+re.key),F.type&&F.type.defaultProps)var Ae=F.type.defaultProps;for(ne in re)G.call(re,ne)&&!k.hasOwnProperty(ne)&&(te[ne]=re[ne]===void 0&&Ae!==void 0?Ae[ne]:re[ne])}var ne=arguments.length-2;if(ne===1)te.children=ke;else if(1<ne){Ae=Array(ne);for(var _e=0;_e<ne;_e++)Ae[_e]=arguments[_e+2];te.children=Ae}return{$$typeof:r,type:F.type,key:me,ref:Ce,props:te,_owner:Se}},wt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},wt.createElement=W,wt.createFactory=function(F){var re=W.bind(null,F);return re.type=F,re},wt.createRef=function(){return{current:null}},wt.forwardRef=function(F){return{$$typeof:d,render:F}},wt.isValidElement=C,wt.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:ue}},wt.memo=function(F,re){return{$$typeof:p,type:F,compare:re===void 0?null:re}},wt.startTransition=function(F){var re=z.transition;z.transition={};try{F()}finally{z.transition=re}},wt.unstable_act=le,wt.useCallback=function(F,re){return he.current.useCallback(F,re)},wt.useContext=function(F){return he.current.useContext(F)},wt.useDebugValue=function(){},wt.useDeferredValue=function(F){return he.current.useDeferredValue(F)},wt.useEffect=function(F,re){return he.current.useEffect(F,re)},wt.useId=function(){return he.current.useId()},wt.useImperativeHandle=function(F,re,ke){return he.current.useImperativeHandle(F,re,ke)},wt.useInsertionEffect=function(F,re){return he.current.useInsertionEffect(F,re)},wt.useLayoutEffect=function(F,re){return he.current.useLayoutEffect(F,re)},wt.useMemo=function(F,re){return he.current.useMemo(F,re)},wt.useReducer=function(F,re,ke){return he.current.useReducer(F,re,ke)},wt.useRef=function(F){return he.current.useRef(F)},wt.useState=function(F){return he.current.useState(F)},wt.useSyncExternalStore=function(F,re,ke){return he.current.useSyncExternalStore(F,re,ke)},wt.useTransition=function(){return he.current.useTransition()},wt.version="18.3.1",wt}var ag;function ah(){return ag||(ag=1,Md.exports=qx()),Md.exports}var lg;function Kx(){if(lg)return oa;lg=1;var r=ah(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,p){var m,v={},y=null,S=null;p!==void 0&&(y=""+p),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(S=f.ref);for(m in f)o.call(f,m)&&!l.hasOwnProperty(m)&&(v[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)v[m]===void 0&&(v[m]=f[m]);return{$$typeof:e,type:d,key:y,ref:S,props:v,_owner:s.current}}return oa.Fragment=t,oa.jsx=c,oa.jsxs=c,oa}var ug;function Zx(){return ug||(ug=1,Ed.exports=Kx()),Ed.exports}var B=Zx(),O=ah();const Kv=qv(O);var $l={},wd={exports:{}},jn={},Td={exports:{}},Cd={};var cg;function Jx(){return cg||(cg=1,(function(r){function e(z,de){var le=z.length;z.push(de);e:for(;0<le;){var F=le-1>>>1,re=z[F];if(0<s(re,de))z[F]=de,z[le]=re,le=F;else break e}}function t(z){return z.length===0?null:z[0]}function o(z){if(z.length===0)return null;var de=z[0],le=z.pop();if(le!==de){z[0]=le;e:for(var F=0,re=z.length,ke=re>>>1;F<ke;){var te=2*(F+1)-1,me=z[te],Ce=te+1,Se=z[Ce];if(0>s(me,le))Ce<re&&0>s(Se,me)?(z[F]=Se,z[Ce]=le,F=Ce):(z[F]=me,z[te]=le,F=te);else if(Ce<re&&0>s(Se,le))z[F]=Se,z[Ce]=le,F=Ce;else break e}}return de}function s(z,de){var le=z.sortIndex-de.sortIndex;return le!==0?le:z.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();r.unstable_now=function(){return c.now()-d}}var f=[],p=[],m=1,v=null,y=3,S=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var de=t(p);de!==null;){if(de.callback===null)o(p);else if(de.startTime<=z)o(p),de.sortIndex=de.expirationTime,e(f,de);else break;de=t(p)}}function A(z){if(M=!1,P(z),!E)if(t(f)!==null)E=!0,ue(G);else{var de=t(p);de!==null&&he(A,de.startTime-z)}}function G(z,de){E=!1,M&&(M=!1,_(W),W=-1),S=!0;var le=y;try{for(P(de),v=t(f);v!==null&&(!(v.expirationTime>de)||z&&!V());){var F=v.callback;if(typeof F=="function"){v.callback=null,y=v.priorityLevel;var re=F(v.expirationTime<=de);de=r.unstable_now(),typeof re=="function"?v.callback=re:v===t(f)&&o(f),P(de)}else o(f);v=t(f)}if(v!==null)var ke=!0;else{var te=t(p);te!==null&&he(A,te.startTime-de),ke=!1}return ke}finally{v=null,y=le,S=!1}}var N=!1,k=null,W=-1,b=5,C=-1;function V(){return!(r.unstable_now()-C<b)}function ae(){if(k!==null){var z=r.unstable_now();C=z;var de=!0;try{de=k(!0,z)}finally{de?Z():(N=!1,k=null)}}else N=!1}var Z;if(typeof L=="function")Z=function(){L(ae)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,fe=J.port2;J.port1.onmessage=ae,Z=function(){fe.postMessage(null)}}else Z=function(){x(ae,0)};function ue(z){k=z,N||(N=!0,Z())}function he(z,de){W=x(function(){z(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,ue(G))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(z){switch(y){case 1:case 2:case 3:var de=3;break;default:de=y}var le=y;y=de;try{return z()}finally{y=le}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,de){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var le=y;y=z;try{return de()}finally{y=le}},r.unstable_scheduleCallback=function(z,de,le){var F=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?F+le:F):le=F,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=le+re,z={id:m++,callback:de,priorityLevel:z,startTime:le,expirationTime:re,sortIndex:-1},le>F?(z.sortIndex=le,e(p,z),t(f)===null&&z===t(p)&&(M?(_(W),W=-1):M=!0,he(A,le-F))):(z.sortIndex=re,e(f,z),E||S||(E=!0,ue(G))),z},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(z){var de=y;return function(){var le=y;y=de;try{return z.apply(this,arguments)}finally{y=le}}}})(Cd)),Cd}var dg;function Qx(){return dg||(dg=1,Td.exports=Jx()),Td.exports}var fg;function ey(){if(fg)return jn;fg=1;var r=ah(),e=Qx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(s[n]=i,n=0;n<i.length;n++)o.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function y(n){return f.call(v,n)?!0:f.call(m,n)?!1:p.test(n)?v[n]=!0:(m[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(n,i,a,u,h,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new M(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,L);x[i]=new M(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,L);x[i]=new M(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,L);x[i]=new M(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,u){var h=x.hasOwnProperty(i)?x[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,u)&&(a=null),u||h===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,u=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var A=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),N=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),z=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,F;function re(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var ke=!1;function te(n,i){if(!n||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var u=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){u=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){u=oe}n()}}catch(oe){if(oe&&u&&typeof oe.stack=="string"){for(var h=oe.stack.split(`
`),g=u.stack.split(`
`),w=h.length-1,U=g.length-1;1<=w&&0<=U&&h[w]!==g[U];)U--;for(;1<=w&&0<=U;w--,U--)if(h[w]!==g[U]){if(w!==1||U!==1)do if(w--,U--,0>U||h[w]!==g[U]){var H=`
`+h[w].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=w&&0<=U);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function me(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=te(n.type,!1),n;case 11:return n=te(n.type.render,!1),n;case 1:return n=te(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case N:return"Portal";case b:return"Profiler";case W:return"StrictMode";case Z:return"Suspense";case J:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ae:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return i=n.displayName||null,i!==null?i:Ce(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return Ce(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ne(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _e(n){var i=ne(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(w){u=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Le(n){n._valueTracker||(n._valueTracker=_e(n))}function it(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=ne(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Je(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function I(n,i){var a=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ot(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Tt(n,i){ct(n,i);var a=Ae(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?mt(n,i.type,a):i.hasOwnProperty("defaultValue")&&mt(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function We(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function mt(n,i,a){(i!=="number"||Je(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var je=Array.isArray;function ze(n,i,a,u){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Rt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(je(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ae(a)}}function T(n,i){var a=Ae(i.value),u=Ae(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function Q(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ce,qe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function De(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qe=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(n){Qe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),He[i]=He[n]})});function ge(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||He.hasOwnProperty(n)&&He[n]?(""+i).trim():i+"px"}function Be(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=ge(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,h):n[a]=h}}var st=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(n,i){if(i){if(st[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var at=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ne=null,ye=null,Oe=null;function we(n){if(n=Ws(n)){if(typeof Ne!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ll(i),Ne(n.stateNode,n.type,i))}}function ve(n){ye?Oe?Oe.push(n):Oe=[n]:ye=n}function Xe(){if(ye){var n=ye,i=Oe;if(Oe=ye=null,we(n),i)for(n=0;n<i.length;n++)we(i[n])}}function pt(n,i){return n(i)}function be(){}var dt=!1;function vt(n,i,a){if(dt)return n(i,a);dt=!0;try{return pt(n,i,a)}finally{dt=!1,(ye!==null||Oe!==null)&&(be(),Xe())}}function St(n,i){var a=n.stateNode;if(a===null)return null;var u=ll(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Vt=!1;if(d)try{var Qt={};Object.defineProperty(Qt,"passive",{get:function(){Vt=!0}}),window.addEventListener("test",Qt,Qt),window.removeEventListener("test",Qt,Qt)}catch{Vt=!1}function mn(n,i,a,u,h,g,w,U,H){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(Me){this.onError(Me)}}var Pn=!1,an=null,Bn=!1,Sn=null,za={onError:function(n){Pn=!0,an=n}};function wo(n,i,a,u,h,g,w,U,H){Pn=!1,an=null,mn.apply(za,arguments)}function Ha(n,i,a,u,h,g,w,U,H){if(wo.apply(this,arguments),Pn){if(Pn){var oe=an;Pn=!1,an=null}else throw Error(t(198));Bn||(Bn=!0,Sn=oe)}}function Cr(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Va(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ga(n){if(Cr(n)!==n)throw Error(t(188))}function ju(n){var i=n.alternate;if(!i){if(i=Cr(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Ga(h),n;if(g===u)return Ga(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=h,u=g;else{for(var w=!1,U=h.child;U;){if(U===a){w=!0,a=h,u=g;break}if(U===u){w=!0,u=h,a=g;break}U=U.sibling}if(!w){for(U=g.child;U;){if(U===a){w=!0,a=g,u=h;break}if(U===u){w=!0,u=g,a=h;break}U=U.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Wa(n){return n=ju(n),n!==null?ja(n):null}function ja(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ja(n);if(i!==null)return i;n=n.sibling}return null}var Xa=e.unstable_scheduleCallback,R=e.unstable_cancelCallback,$=e.unstable_shouldYield,se=e.unstable_requestPaint,K=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Ie=e.unstable_UserBlockingPriority,$e=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,ht=e.unstable_IdlePriority,ft=null,Ke=null;function Et(n){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Ut,Gt=Math.log,kt=Math.LN2;function Ut(n){return n>>>=0,n===0?32:31-(Gt(n)/kt|0)|0}var rt=64,It=4194304;function Mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ln(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var U=w&~h;U!==0?u=Mt(U):(g&=w,g!==0&&(u=Mt(g)))}else w=a&~h,w!==0?u=Mt(w):g!==0&&(u=Mt(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-xt(i),h=1<<a,u|=n[a],i&=~h;return u}function gi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ln(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-xt(g),U=1<<w,H=h[w];H===-1?((U&a)===0||(U&u)!==0)&&(h[w]=gi(U,i)):H<=i&&(n.expiredLanes|=U),g&=~U}}function jr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ot(){var n=rt;return rt<<=1,(rt&4194240)===0&&(rt=64),n}function En(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function un(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-xt(i),n[i]=a}function gn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-xt(a),g=1<<h;i[h]=0,u[h]=-1,n[h]=-1,a&=~g}}function cn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-xt(a),h=1<<u;h&i|n[u]&i&&(n[u]|=i),a&=~h}}var At=0;function Rr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bh,Xu,zh,Hh,Vh,$u=!1,$a=[],vi=null,_i=null,xi=null,As=new Map,bs=new Map,yi=[],v0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gh(n,i){switch(n){case"focusin":case"focusout":vi=null;break;case"dragenter":case"dragleave":_i=null;break;case"mouseover":case"mouseout":xi=null;break;case"pointerover":case"pointerout":As.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bs.delete(i.pointerId)}}function Ps(n,i,a,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Ws(i),i!==null&&Xu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function _0(n,i,a,u,h){switch(i){case"focusin":return vi=Ps(vi,n,i,a,u,h),!0;case"dragenter":return _i=Ps(_i,n,i,a,u,h),!0;case"mouseover":return xi=Ps(xi,n,i,a,u,h),!0;case"pointerover":var g=h.pointerId;return As.set(g,Ps(As.get(g)||null,n,i,a,u,h)),!0;case"gotpointercapture":return g=h.pointerId,bs.set(g,Ps(bs.get(g)||null,n,i,a,u,h)),!0}return!1}function Wh(n){var i=$i(n.target);if(i!==null){var a=Cr(i);if(a!==null){if(i=a.tag,i===13){if(i=Va(a),i!==null){n.blockedOn=i,Vh(n.priority,function(){zh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ya(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=qu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);at=u,a.target.dispatchEvent(u),at=null}else return i=Ws(a),i!==null&&Xu(i),n.blockedOn=a,!1;i.shift()}return!0}function jh(n,i,a){Ya(n)&&a.delete(i)}function x0(){$u=!1,vi!==null&&Ya(vi)&&(vi=null),_i!==null&&Ya(_i)&&(_i=null),xi!==null&&Ya(xi)&&(xi=null),As.forEach(jh),bs.forEach(jh)}function Ls(n,i){n.blockedOn===i&&(n.blockedOn=null,$u||($u=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,x0)))}function Ds(n){function i(h){return Ls(h,n)}if(0<$a.length){Ls($a[0],n);for(var a=1;a<$a.length;a++){var u=$a[a];u.blockedOn===n&&(u.blockedOn=null)}}for(vi!==null&&Ls(vi,n),_i!==null&&Ls(_i,n),xi!==null&&Ls(xi,n),As.forEach(i),bs.forEach(i),a=0;a<yi.length;a++)u=yi[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<yi.length&&(a=yi[0],a.blockedOn===null);)Wh(a),a.blockedOn===null&&yi.shift()}var To=A.ReactCurrentBatchConfig,qa=!0;function y0(n,i,a,u){var h=At,g=To.transition;To.transition=null;try{At=1,Yu(n,i,a,u)}finally{At=h,To.transition=g}}function S0(n,i,a,u){var h=At,g=To.transition;To.transition=null;try{At=4,Yu(n,i,a,u)}finally{At=h,To.transition=g}}function Yu(n,i,a,u){if(qa){var h=qu(n,i,a,u);if(h===null)fc(n,i,u,Ka,a),Gh(n,u);else if(_0(h,n,i,a,u))u.stopPropagation();else if(Gh(n,u),i&4&&-1<v0.indexOf(n)){for(;h!==null;){var g=Ws(h);if(g!==null&&Bh(g),g=qu(n,i,a,u),g===null&&fc(n,i,u,Ka,a),g===h)break;h=g}h!==null&&u.stopPropagation()}else fc(n,i,u,null,a)}}var Ka=null;function qu(n,i,a,u){if(Ka=null,n=j(u),n=$i(n),n!==null)if(i=Cr(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Va(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ka=n,null}function Xh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Re:return 1;case Ie:return 4;case $e:case Ge:return 16;case ht:return 536870912;default:return 16}default:return 16}}var Si=null,Ku=null,Za=null;function $h(){if(Za)return Za;var n,i=Ku,a=i.length,u,h="value"in Si?Si.value:Si.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var w=a-n;for(u=1;u<=w&&i[a-u]===h[g-u];u++);return Za=h.slice(n,1<u?1-u:void 0)}function Ja(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Qa(){return!0}function Yh(){return!1}function qn(n){function i(a,u,h,g,w){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Qa:Yh,this.isPropagationStopped=Yh,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),i}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zu=qn(Co),Us=le({},Co,{view:0,detail:0}),E0=qn(Us),Ju,Qu,Ns,el=le({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ns&&(Ns&&n.type==="mousemove"?(Ju=n.screenX-Ns.screenX,Qu=n.screenY-Ns.screenY):Qu=Ju=0,Ns=n),Ju)},movementY:function(n){return"movementY"in n?n.movementY:Qu}}),qh=qn(el),M0=le({},el,{dataTransfer:0}),w0=qn(M0),T0=le({},Us,{relatedTarget:0}),ec=qn(T0),C0=le({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),R0=qn(C0),A0=le({},Co,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),b0=qn(A0),P0=le({},Co,{data:0}),Kh=qn(P0),L0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=U0[n])?!!i[n]:!1}function tc(){return N0}var I0=le({},Us,{key:function(n){if(n.key){var i=L0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ja(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?D0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(n){return n.type==="keypress"?Ja(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ja(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),F0=qn(I0),k0=le({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=qn(k0),O0=le({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),B0=qn(O0),z0=le({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),H0=qn(z0),V0=le({},el,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),G0=qn(V0),W0=[9,13,27,32],nc=d&&"CompositionEvent"in window,Is=null;d&&"documentMode"in document&&(Is=document.documentMode);var j0=d&&"TextEvent"in window&&!Is,Jh=d&&(!nc||Is&&8<Is&&11>=Is),Qh=" ",ep=!1;function tp(n,i){switch(n){case"keyup":return W0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ro=!1;function X0(n,i){switch(n){case"compositionend":return np(i);case"keypress":return i.which!==32?null:(ep=!0,Qh);case"textInput":return n=i.data,n===Qh&&ep?null:n;default:return null}}function $0(n,i){if(Ro)return n==="compositionend"||!nc&&tp(n,i)?(n=$h(),Za=Ku=Si=null,Ro=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Jh&&i.locale!=="ko"?null:i.data;default:return null}}var Y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Y0[n.type]:i==="textarea"}function ip(n,i,a,u){ve(u),i=ol(i,"onChange"),0<i.length&&(a=new Zu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Fs=null,ks=null;function q0(n){Ep(n,0)}function tl(n){var i=Do(n);if(it(i))return n}function K0(n,i){if(n==="change")return i}var op=!1;if(d){var rc;if(d){var ic="oninput"in document;if(!ic){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),ic=typeof sp.oninput=="function"}rc=ic}else rc=!1;op=rc&&(!document.documentMode||9<document.documentMode)}function ap(){Fs&&(Fs.detachEvent("onpropertychange",lp),ks=Fs=null)}function lp(n){if(n.propertyName==="value"&&tl(ks)){var i=[];ip(i,ks,n,j(n)),vt(q0,i)}}function Z0(n,i,a){n==="focusin"?(ap(),Fs=i,ks=a,Fs.attachEvent("onpropertychange",lp)):n==="focusout"&&ap()}function J0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return tl(ks)}function Q0(n,i){if(n==="click")return tl(i)}function ex(n,i){if(n==="input"||n==="change")return tl(i)}function tx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var hr=typeof Object.is=="function"?Object.is:tx;function Os(n,i){if(hr(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!f.call(i,h)||!hr(n[h],i[h]))return!1}return!0}function up(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cp(n,i){var a=up(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=up(a)}}function dp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?dp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function fp(){for(var n=window,i=Je();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Je(n.document)}return i}function oc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function nx(n){var i=fp(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&dp(a.ownerDocument.documentElement,a)){if(u!==null&&oc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=cp(a,g);var w=cp(a,u);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var rx=d&&"documentMode"in document&&11>=document.documentMode,Ao=null,sc=null,Bs=null,ac=!1;function hp(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ac||Ao==null||Ao!==Je(u)||(u=Ao,"selectionStart"in u&&oc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Bs&&Os(Bs,u)||(Bs=u,u=ol(sc,"onSelect"),0<u.length&&(i=new Zu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Ao)))}function nl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var bo={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},lc={},pp={};d&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function rl(n){if(lc[n])return lc[n];if(!bo[n])return n;var i=bo[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in pp)return lc[n]=i[a];return n}var mp=rl("animationend"),gp=rl("animationiteration"),vp=rl("animationstart"),_p=rl("transitionend"),xp=new Map,yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ei(n,i){xp.set(n,i),l(i,[n])}for(var uc=0;uc<yp.length;uc++){var cc=yp[uc],ix=cc.toLowerCase(),ox=cc[0].toUpperCase()+cc.slice(1);Ei(ix,"on"+ox)}Ei(mp,"onAnimationEnd"),Ei(gp,"onAnimationIteration"),Ei(vp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(_p,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function Sp(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Ha(u,i,void 0,n),n.currentTarget=null}function Ep(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],h=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var w=u.length-1;0<=w;w--){var U=u[w],H=U.instance,oe=U.currentTarget;if(U=U.listener,H!==g&&h.isPropagationStopped())break e;Sp(h,U,oe),g=H}else for(w=0;w<u.length;w++){if(U=u[w],H=U.instance,oe=U.currentTarget,U=U.listener,H!==g&&h.isPropagationStopped())break e;Sp(h,U,oe),g=H}}}if(Bn)throw n=Sn,Bn=!1,Sn=null,n}function zt(n,i){var a=i[_c];a===void 0&&(a=i[_c]=new Set);var u=n+"__bubble";a.has(u)||(Mp(i,n,2,!1),a.add(u))}function dc(n,i,a){var u=0;i&&(u|=4),Mp(a,n,u,i)}var il="_reactListening"+Math.random().toString(36).slice(2);function Hs(n){if(!n[il]){n[il]=!0,o.forEach(function(a){a!=="selectionchange"&&(sx.has(a)||dc(a,!1,n),dc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[il]||(i[il]=!0,dc("selectionchange",!1,i))}}function Mp(n,i,a,u){switch(Xh(i)){case 1:var h=y0;break;case 4:h=S0;break;default:h=Yu}a=h.bind(null,i,a,n),h=void 0,!Vt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function fc(n,i,a,u,h){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var U=u.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(w===4)for(w=u.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===h||H.nodeType===8&&H.parentNode===h))return;w=w.return}for(;U!==null;){if(w=$i(U),w===null)return;if(H=w.tag,H===5||H===6){u=g=w;continue e}U=U.parentNode}}u=u.return}vt(function(){var oe=g,Me=j(a),Te=[];e:{var Ee=xp.get(n);if(Ee!==void 0){var Ve=Zu,Ze=n;switch(n){case"keypress":if(Ja(a)===0)break e;case"keydown":case"keyup":Ve=F0;break;case"focusin":Ze="focus",Ve=ec;break;case"focusout":Ze="blur",Ve=ec;break;case"beforeblur":case"afterblur":Ve=ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=w0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=B0;break;case mp:case gp:case vp:Ve=R0;break;case _p:Ve=H0;break;case"scroll":Ve=E0;break;case"wheel":Ve=G0;break;case"copy":case"cut":case"paste":Ve=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=Zh}var et=(i&4)!==0,Jt=!et&&n==="scroll",q=et?Ee!==null?Ee+"Capture":null:Ee;et=[];for(var X=oe,ee;X!==null;){ee=X;var Pe=ee.stateNode;if(ee.tag===5&&Pe!==null&&(ee=Pe,q!==null&&(Pe=St(X,q),Pe!=null&&et.push(Vs(X,Pe,ee)))),Jt)break;X=X.return}0<et.length&&(Ee=new Ve(Ee,Ze,null,a,Me),Te.push({event:Ee,listeners:et}))}}if((i&7)===0){e:{if(Ee=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",Ee&&a!==at&&(Ze=a.relatedTarget||a.fromElement)&&($i(Ze)||Ze[Xr]))break e;if((Ve||Ee)&&(Ee=Me.window===Me?Me:(Ee=Me.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,Ve?(Ze=a.relatedTarget||a.toElement,Ve=oe,Ze=Ze?$i(Ze):null,Ze!==null&&(Jt=Cr(Ze),Ze!==Jt||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(Ve=null,Ze=oe),Ve!==Ze)){if(et=qh,Pe="onMouseLeave",q="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(et=Zh,Pe="onPointerLeave",q="onPointerEnter",X="pointer"),Jt=Ve==null?Ee:Do(Ve),ee=Ze==null?Ee:Do(Ze),Ee=new et(Pe,X+"leave",Ve,a,Me),Ee.target=Jt,Ee.relatedTarget=ee,Pe=null,$i(Me)===oe&&(et=new et(q,X+"enter",Ze,a,Me),et.target=ee,et.relatedTarget=Jt,Pe=et),Jt=Pe,Ve&&Ze)t:{for(et=Ve,q=Ze,X=0,ee=et;ee;ee=Po(ee))X++;for(ee=0,Pe=q;Pe;Pe=Po(Pe))ee++;for(;0<X-ee;)et=Po(et),X--;for(;0<ee-X;)q=Po(q),ee--;for(;X--;){if(et===q||q!==null&&et===q.alternate)break t;et=Po(et),q=Po(q)}et=null}else et=null;Ve!==null&&wp(Te,Ee,Ve,et,!1),Ze!==null&&Jt!==null&&wp(Te,Jt,Ze,et,!0)}}e:{if(Ee=oe?Do(oe):window,Ve=Ee.nodeName&&Ee.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&Ee.type==="file")var tt=K0;else if(rp(Ee))if(op)tt=ex;else{tt=J0;var lt=Z0}else(Ve=Ee.nodeName)&&Ve.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(tt=Q0);if(tt&&(tt=tt(n,oe))){ip(Te,tt,a,Me);break e}lt&&lt(n,Ee,oe),n==="focusout"&&(lt=Ee._wrapperState)&&lt.controlled&&Ee.type==="number"&&mt(Ee,"number",Ee.value)}switch(lt=oe?Do(oe):window,n){case"focusin":(rp(lt)||lt.contentEditable==="true")&&(Ao=lt,sc=oe,Bs=null);break;case"focusout":Bs=sc=Ao=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,hp(Te,a,Me);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":hp(Te,a,Me)}var ut;if(nc)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else Ro?tp(n,a)&&(gt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(Jh&&a.locale!=="ko"&&(Ro||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Ro&&(ut=$h()):(Si=Me,Ku="value"in Si?Si.value:Si.textContent,Ro=!0)),lt=ol(oe,gt),0<lt.length&&(gt=new Kh(gt,n,null,a,Me),Te.push({event:gt,listeners:lt}),ut?gt.data=ut:(ut=np(a),ut!==null&&(gt.data=ut)))),(ut=j0?X0(n,a):$0(n,a))&&(oe=ol(oe,"onBeforeInput"),0<oe.length&&(Me=new Kh("onBeforeInput","beforeinput",null,a,Me),Te.push({event:Me,listeners:oe}),Me.data=ut))}Ep(Te,i)})}function Vs(n,i,a){return{instance:n,listener:i,currentTarget:a}}function ol(n,i){for(var a=i+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=St(n,a),g!=null&&u.unshift(Vs(n,g,h)),g=St(n,i),g!=null&&u.push(Vs(n,g,h))),n=n.return}return u}function Po(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function wp(n,i,a,u,h){for(var g=i._reactName,w=[];a!==null&&a!==u;){var U=a,H=U.alternate,oe=U.stateNode;if(H!==null&&H===u)break;U.tag===5&&oe!==null&&(U=oe,h?(H=St(a,g),H!=null&&w.unshift(Vs(a,H,U))):h||(H=St(a,g),H!=null&&w.push(Vs(a,H,U)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var ax=/\r\n?/g,lx=/\u0000|\uFFFD/g;function Tp(n){return(typeof n=="string"?n:""+n).replace(ax,`
`).replace(lx,"")}function sl(n,i,a){if(i=Tp(i),Tp(n)!==i&&a)throw Error(t(425))}function al(){}var hc=null,pc=null;function mc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,ux=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,cx=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(n){return Cp.resolve(null).then(n).catch(dx)}:gc;function dx(n){setTimeout(function(){throw n})}function vc(n,i){var a=i,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){n.removeChild(h),Ds(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);Ds(i)}function Mi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Rp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Lo=Math.random().toString(36).slice(2),Ar="__reactFiber$"+Lo,Gs="__reactProps$"+Lo,Xr="__reactContainer$"+Lo,_c="__reactEvents$"+Lo,fx="__reactListeners$"+Lo,hx="__reactHandles$"+Lo;function $i(n){var i=n[Ar];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Xr]||a[Ar]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Rp(n);n!==null;){if(a=n[Ar])return a;n=Rp(n)}return i}n=a,a=n.parentNode}return null}function Ws(n){return n=n[Ar]||n[Xr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Do(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ll(n){return n[Gs]||null}var xc=[],Uo=-1;function wi(n){return{current:n}}function Ht(n){0>Uo||(n.current=xc[Uo],xc[Uo]=null,Uo--)}function Bt(n,i){Uo++,xc[Uo]=n.current,n.current=i}var Ti={},Mn=wi(Ti),zn=wi(!1),Yi=Ti;function No(n,i){var a=n.type.contextTypes;if(!a)return Ti;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Hn(n){return n=n.childContextTypes,n!=null}function ul(){Ht(zn),Ht(Mn)}function Ap(n,i,a){if(Mn.current!==Ti)throw Error(t(168));Bt(Mn,i),Bt(zn,a)}function bp(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,Se(n)||"Unknown",h));return le({},a,u)}function cl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ti,Yi=Mn.current,Bt(Mn,n),Bt(zn,zn.current),!0}function Pp(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=bp(n,i,Yi),u.__reactInternalMemoizedMergedChildContext=n,Ht(zn),Ht(Mn),Bt(Mn,n)):Ht(zn),Bt(zn,a)}var $r=null,dl=!1,yc=!1;function Lp(n){$r===null?$r=[n]:$r.push(n)}function px(n){dl=!0,Lp(n)}function Ci(){if(!yc&&$r!==null){yc=!0;var n=0,i=At;try{var a=$r;for(At=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}$r=null,dl=!1}catch(h){throw $r!==null&&($r=$r.slice(n+1)),Xa(Re,Ci),h}finally{At=i,yc=!1}}return null}var Io=[],Fo=0,fl=null,hl=0,nr=[],rr=0,qi=null,Yr=1,qr="";function Ki(n,i){Io[Fo++]=hl,Io[Fo++]=fl,fl=n,hl=i}function Dp(n,i,a){nr[rr++]=Yr,nr[rr++]=qr,nr[rr++]=qi,qi=n;var u=Yr;n=qr;var h=32-xt(u)-1;u&=~(1<<h),a+=1;var g=32-xt(i)+h;if(30<g){var w=h-h%5;g=(u&(1<<w)-1).toString(32),u>>=w,h-=w,Yr=1<<32-xt(i)+h|a<<h|u,qr=g+n}else Yr=1<<g|a<<h|u,qr=n}function Sc(n){n.return!==null&&(Ki(n,1),Dp(n,1,0))}function Ec(n){for(;n===fl;)fl=Io[--Fo],Io[Fo]=null,hl=Io[--Fo],Io[Fo]=null;for(;n===qi;)qi=nr[--rr],nr[rr]=null,qr=nr[--rr],nr[rr]=null,Yr=nr[--rr],nr[rr]=null}var Kn=null,Zn=null,Wt=!1,pr=null;function Up(n,i){var a=ar(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Np(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=Mi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=qi!==null?{id:Yr,overflow:qr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ar(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Kn=n,Zn=null,!0):!1;default:return!1}}function Mc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wc(n){if(Wt){var i=Zn;if(i){var a=i;if(!Np(n,i)){if(Mc(n))throw Error(t(418));i=Mi(a.nextSibling);var u=Kn;i&&Np(n,i)?Up(u,a):(n.flags=n.flags&-4097|2,Wt=!1,Kn=n)}}else{if(Mc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Wt=!1,Kn=n}}}function Ip(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kn=n}function pl(n){if(n!==Kn)return!1;if(!Wt)return Ip(n),Wt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!mc(n.type,n.memoizedProps)),i&&(i=Zn)){if(Mc(n))throw Fp(),Error(t(418));for(;i;)Up(n,i),i=Mi(i.nextSibling)}if(Ip(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Zn=Mi(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Zn=null}}else Zn=Kn?Mi(n.stateNode.nextSibling):null;return!0}function Fp(){for(var n=Zn;n;)n=Mi(n.nextSibling)}function ko(){Zn=Kn=null,Wt=!1}function Tc(n){pr===null?pr=[n]:pr.push(n)}var mx=A.ReactCurrentBatchConfig;function js(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var U=h.refs;w===null?delete U[g]:U[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ml(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function kp(n){var i=n._init;return i(n._payload)}function Op(n){function i(q,X){if(n){var ee=q.deletions;ee===null?(q.deletions=[X],q.flags|=16):ee.push(X)}}function a(q,X){if(!n)return null;for(;X!==null;)i(q,X),X=X.sibling;return null}function u(q,X){for(q=new Map;X!==null;)X.key!==null?q.set(X.key,X):q.set(X.index,X),X=X.sibling;return q}function h(q,X){return q=Ni(q,X),q.index=0,q.sibling=null,q}function g(q,X,ee){return q.index=ee,n?(ee=q.alternate,ee!==null?(ee=ee.index,ee<X?(q.flags|=2,X):ee):(q.flags|=2,X)):(q.flags|=1048576,X)}function w(q){return n&&q.alternate===null&&(q.flags|=2),q}function U(q,X,ee,Pe){return X===null||X.tag!==6?(X=gd(ee,q.mode,Pe),X.return=q,X):(X=h(X,ee),X.return=q,X)}function H(q,X,ee,Pe){var tt=ee.type;return tt===k?Me(q,X,ee.props.children,Pe,ee.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ue&&kp(tt)===X.type)?(Pe=h(X,ee.props),Pe.ref=js(q,X,ee),Pe.return=q,Pe):(Pe=Bl(ee.type,ee.key,ee.props,null,q.mode,Pe),Pe.ref=js(q,X,ee),Pe.return=q,Pe)}function oe(q,X,ee,Pe){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=vd(ee,q.mode,Pe),X.return=q,X):(X=h(X,ee.children||[]),X.return=q,X)}function Me(q,X,ee,Pe,tt){return X===null||X.tag!==7?(X=io(ee,q.mode,Pe,tt),X.return=q,X):(X=h(X,ee),X.return=q,X)}function Te(q,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number")return X=gd(""+X,q.mode,ee),X.return=q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case G:return ee=Bl(X.type,X.key,X.props,null,q.mode,ee),ee.ref=js(q,null,X),ee.return=q,ee;case N:return X=vd(X,q.mode,ee),X.return=q,X;case ue:var Pe=X._init;return Te(q,Pe(X._payload),ee)}if(je(X)||de(X))return X=io(X,q.mode,ee,null),X.return=q,X;ml(q,X)}return null}function Ee(q,X,ee,Pe){var tt=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return tt!==null?null:U(q,X,""+ee,Pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case G:return ee.key===tt?H(q,X,ee,Pe):null;case N:return ee.key===tt?oe(q,X,ee,Pe):null;case ue:return tt=ee._init,Ee(q,X,tt(ee._payload),Pe)}if(je(ee)||de(ee))return tt!==null?null:Me(q,X,ee,Pe,null);ml(q,ee)}return null}function Ve(q,X,ee,Pe,tt){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return q=q.get(ee)||null,U(X,q,""+Pe,tt);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case G:return q=q.get(Pe.key===null?ee:Pe.key)||null,H(X,q,Pe,tt);case N:return q=q.get(Pe.key===null?ee:Pe.key)||null,oe(X,q,Pe,tt);case ue:var lt=Pe._init;return Ve(q,X,ee,lt(Pe._payload),tt)}if(je(Pe)||de(Pe))return q=q.get(ee)||null,Me(X,q,Pe,tt,null);ml(X,Pe)}return null}function Ze(q,X,ee,Pe){for(var tt=null,lt=null,ut=X,gt=X=0,hn=null;ut!==null&&gt<ee.length;gt++){ut.index>gt?(hn=ut,ut=null):hn=ut.sibling;var Pt=Ee(q,ut,ee[gt],Pe);if(Pt===null){ut===null&&(ut=hn);break}n&&ut&&Pt.alternate===null&&i(q,ut),X=g(Pt,X,gt),lt===null?tt=Pt:lt.sibling=Pt,lt=Pt,ut=hn}if(gt===ee.length)return a(q,ut),Wt&&Ki(q,gt),tt;if(ut===null){for(;gt<ee.length;gt++)ut=Te(q,ee[gt],Pe),ut!==null&&(X=g(ut,X,gt),lt===null?tt=ut:lt.sibling=ut,lt=ut);return Wt&&Ki(q,gt),tt}for(ut=u(q,ut);gt<ee.length;gt++)hn=Ve(ut,q,gt,ee[gt],Pe),hn!==null&&(n&&hn.alternate!==null&&ut.delete(hn.key===null?gt:hn.key),X=g(hn,X,gt),lt===null?tt=hn:lt.sibling=hn,lt=hn);return n&&ut.forEach(function(Ii){return i(q,Ii)}),Wt&&Ki(q,gt),tt}function et(q,X,ee,Pe){var tt=de(ee);if(typeof tt!="function")throw Error(t(150));if(ee=tt.call(ee),ee==null)throw Error(t(151));for(var lt=tt=null,ut=X,gt=X=0,hn=null,Pt=ee.next();ut!==null&&!Pt.done;gt++,Pt=ee.next()){ut.index>gt?(hn=ut,ut=null):hn=ut.sibling;var Ii=Ee(q,ut,Pt.value,Pe);if(Ii===null){ut===null&&(ut=hn);break}n&&ut&&Ii.alternate===null&&i(q,ut),X=g(Ii,X,gt),lt===null?tt=Ii:lt.sibling=Ii,lt=Ii,ut=hn}if(Pt.done)return a(q,ut),Wt&&Ki(q,gt),tt;if(ut===null){for(;!Pt.done;gt++,Pt=ee.next())Pt=Te(q,Pt.value,Pe),Pt!==null&&(X=g(Pt,X,gt),lt===null?tt=Pt:lt.sibling=Pt,lt=Pt);return Wt&&Ki(q,gt),tt}for(ut=u(q,ut);!Pt.done;gt++,Pt=ee.next())Pt=Ve(ut,q,gt,Pt.value,Pe),Pt!==null&&(n&&Pt.alternate!==null&&ut.delete(Pt.key===null?gt:Pt.key),X=g(Pt,X,gt),lt===null?tt=Pt:lt.sibling=Pt,lt=Pt);return n&&ut.forEach(function(Yx){return i(q,Yx)}),Wt&&Ki(q,gt),tt}function Jt(q,X,ee,Pe){if(typeof ee=="object"&&ee!==null&&ee.type===k&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case G:e:{for(var tt=ee.key,lt=X;lt!==null;){if(lt.key===tt){if(tt=ee.type,tt===k){if(lt.tag===7){a(q,lt.sibling),X=h(lt,ee.props.children),X.return=q,q=X;break e}}else if(lt.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ue&&kp(tt)===lt.type){a(q,lt.sibling),X=h(lt,ee.props),X.ref=js(q,lt,ee),X.return=q,q=X;break e}a(q,lt);break}else i(q,lt);lt=lt.sibling}ee.type===k?(X=io(ee.props.children,q.mode,Pe,ee.key),X.return=q,q=X):(Pe=Bl(ee.type,ee.key,ee.props,null,q.mode,Pe),Pe.ref=js(q,X,ee),Pe.return=q,q=Pe)}return w(q);case N:e:{for(lt=ee.key;X!==null;){if(X.key===lt)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){a(q,X.sibling),X=h(X,ee.children||[]),X.return=q,q=X;break e}else{a(q,X);break}else i(q,X);X=X.sibling}X=vd(ee,q.mode,Pe),X.return=q,q=X}return w(q);case ue:return lt=ee._init,Jt(q,X,lt(ee._payload),Pe)}if(je(ee))return Ze(q,X,ee,Pe);if(de(ee))return et(q,X,ee,Pe);ml(q,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,X!==null&&X.tag===6?(a(q,X.sibling),X=h(X,ee),X.return=q,q=X):(a(q,X),X=gd(ee,q.mode,Pe),X.return=q,q=X),w(q)):a(q,X)}return Jt}var Oo=Op(!0),Bp=Op(!1),gl=wi(null),vl=null,Bo=null,Cc=null;function Rc(){Cc=Bo=vl=null}function Ac(n){var i=gl.current;Ht(gl),n._currentValue=i}function bc(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function zo(n,i){vl=n,Cc=Bo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Vn=!0),n.firstContext=null)}function ir(n){var i=n._currentValue;if(Cc!==n)if(n={context:n,memoizedValue:i,next:null},Bo===null){if(vl===null)throw Error(t(308));Bo=n,vl.dependencies={lanes:0,firstContext:n}}else Bo=Bo.next=n;return i}var Zi=null;function Pc(n){Zi===null?Zi=[n]:Zi.push(n)}function zp(n,i,a,u){var h=i.interleaved;return h===null?(a.next=a,Pc(i)):(a.next=h.next,h.next=a),i.interleaved=a,Kr(n,u)}function Kr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ri=!1;function Lc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Ai(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(bt&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,Kr(n,a)}return h=u.interleaved,h===null?(i.next=i,Pc(u)):(i.next=h.next,h.next=i),u.interleaved=i,Kr(n,a)}function _l(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,cn(n,a)}}function Vp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function xl(n,i,a,u){var h=n.updateQueue;Ri=!1;var g=h.firstBaseUpdate,w=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var H=U,oe=H.next;H.next=null,w===null?g=oe:w.next=oe,w=H;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,U=Me.lastBaseUpdate,U!==w&&(U===null?Me.firstBaseUpdate=oe:U.next=oe,Me.lastBaseUpdate=H))}if(g!==null){var Te=h.baseState;w=0,Me=oe=H=null,U=g;do{var Ee=U.lane,Ve=U.eventTime;if((u&Ee)===Ee){Me!==null&&(Me=Me.next={eventTime:Ve,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ze=n,et=U;switch(Ee=i,Ve=a,et.tag){case 1:if(Ze=et.payload,typeof Ze=="function"){Te=Ze.call(Ve,Te,Ee);break e}Te=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=et.payload,Ee=typeof Ze=="function"?Ze.call(Ve,Te,Ee):Ze,Ee==null)break e;Te=le({},Te,Ee);break e;case 2:Ri=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,Ee=h.effects,Ee===null?h.effects=[U]:Ee.push(U))}else Ve={eventTime:Ve,lane:Ee,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Me===null?(oe=Me=Ve,H=Te):Me=Me.next=Ve,w|=Ee;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;Ee=U,U=Ee.next,Ee.next=null,h.lastBaseUpdate=Ee,h.shared.pending=null}}while(!0);if(Me===null&&(H=Te),h.baseState=H,h.firstBaseUpdate=oe,h.lastBaseUpdate=Me,i=h.shared.interleaved,i!==null){h=i;do w|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);eo|=w,n.lanes=w,n.memoizedState=Te}}function Gp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Xs={},br=wi(Xs),$s=wi(Xs),Ys=wi(Xs);function Ji(n){if(n===Xs)throw Error(t(174));return n}function Dc(n,i){switch(Bt(Ys,i),Bt($s,n),Bt(br,Xs),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=xe(i,n)}Ht(br),Bt(br,i)}function Ho(){Ht(br),Ht($s),Ht(Ys)}function Wp(n){Ji(Ys.current);var i=Ji(br.current),a=xe(i,n.type);i!==a&&(Bt($s,n),Bt(br,a))}function Uc(n){$s.current===n&&(Ht(br),Ht($s))}var jt=wi(0);function yl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nc=[];function Ic(){for(var n=0;n<Nc.length;n++)Nc[n]._workInProgressVersionPrimary=null;Nc.length=0}var Sl=A.ReactCurrentDispatcher,Fc=A.ReactCurrentBatchConfig,Qi=0,Xt=null,nn=null,dn=null,El=!1,qs=!1,Ks=0,gx=0;function wn(){throw Error(t(321))}function kc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!hr(n[a],i[a]))return!1;return!0}function Oc(n,i,a,u,h,g){if(Qi=g,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Sl.current=n===null||n.memoizedState===null?yx:Sx,n=a(u,h),qs){g=0;do{if(qs=!1,Ks=0,25<=g)throw Error(t(301));g+=1,dn=nn=null,i.updateQueue=null,Sl.current=Ex,n=a(u,h)}while(qs)}if(Sl.current=Tl,i=nn!==null&&nn.next!==null,Qi=0,dn=nn=Xt=null,El=!1,i)throw Error(t(300));return n}function Bc(){var n=Ks!==0;return Ks=0,n}function Pr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Xt.memoizedState=dn=n:dn=dn.next=n,dn}function or(){if(nn===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var i=dn===null?Xt.memoizedState:dn.next;if(i!==null)dn=i,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},dn===null?Xt.memoizedState=dn=n:dn=dn.next=n}return dn}function Zs(n,i){return typeof i=="function"?i(n):i}function zc(n){var i=or(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=nn,h=u.baseQueue,g=a.pending;if(g!==null){if(h!==null){var w=h.next;h.next=g.next,g.next=w}u.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,u=u.baseState;var U=w=null,H=null,oe=g;do{var Me=oe.lane;if((Qi&Me)===Me)H!==null&&(H=H.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),u=oe.hasEagerState?oe.eagerState:n(u,oe.action);else{var Te={lane:Me,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};H===null?(U=H=Te,w=u):H=H.next=Te,Xt.lanes|=Me,eo|=Me}oe=oe.next}while(oe!==null&&oe!==g);H===null?w=u:H.next=U,hr(u,i.memoizedState)||(Vn=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=H,a.lastRenderedState=u}if(n=a.interleaved,n!==null){h=n;do g=h.lane,Xt.lanes|=g,eo|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Hc(n){var i=or(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do g=n(g,w.action),w=w.next;while(w!==h);hr(g,i.memoizedState)||(Vn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function jp(){}function Xp(n,i){var a=Xt,u=or(),h=i(),g=!hr(u.memoizedState,h);if(g&&(u.memoizedState=h,Vn=!0),u=u.queue,Vc(qp.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||dn!==null&&dn.memoizedState.tag&1){if(a.flags|=2048,Js(9,Yp.bind(null,a,u,h,i),void 0,null),fn===null)throw Error(t(349));(Qi&30)!==0||$p(a,i,h)}return h}function $p(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Yp(n,i,a,u){i.value=a,i.getSnapshot=u,Kp(i)&&Zp(n)}function qp(n,i,a){return a(function(){Kp(i)&&Zp(n)})}function Kp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!hr(n,a)}catch{return!0}}function Zp(n){var i=Kr(n,1);i!==null&&_r(i,n,1,-1)}function Jp(n){var i=Pr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zs,lastRenderedState:n},i.queue=n,n=n.dispatch=xx.bind(null,Xt,n),[i.memoizedState,n]}function Js(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Qp(){return or().memoizedState}function Ml(n,i,a,u){var h=Pr();Xt.flags|=n,h.memoizedState=Js(1|i,a,void 0,u===void 0?null:u)}function wl(n,i,a,u){var h=or();u=u===void 0?null:u;var g=void 0;if(nn!==null){var w=nn.memoizedState;if(g=w.destroy,u!==null&&kc(u,w.deps)){h.memoizedState=Js(i,a,g,u);return}}Xt.flags|=n,h.memoizedState=Js(1|i,a,g,u)}function em(n,i){return Ml(8390656,8,n,i)}function Vc(n,i){return wl(2048,8,n,i)}function tm(n,i){return wl(4,2,n,i)}function nm(n,i){return wl(4,4,n,i)}function rm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function im(n,i,a){return a=a!=null?a.concat([n]):null,wl(4,4,rm.bind(null,i,n),a)}function Gc(){}function om(n,i){var a=or();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&kc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function sm(n,i){var a=or();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&kc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function am(n,i,a){return(Qi&21)===0?(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=a):(hr(a,i)||(a=Ot(),Xt.lanes|=a,eo|=a,n.baseState=!0),i)}function vx(n,i){var a=At;At=a!==0&&4>a?a:4,n(!0);var u=Fc.transition;Fc.transition={};try{n(!1),i()}finally{At=a,Fc.transition=u}}function lm(){return or().memoizedState}function _x(n,i,a){var u=Di(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},um(n))cm(i,a);else if(a=zp(n,i,a,u),a!==null){var h=Un();_r(a,n,u,h),dm(a,i,u)}}function xx(n,i,a){var u=Di(n),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(um(n))cm(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,U=g(w,a);if(h.hasEagerState=!0,h.eagerState=U,hr(U,w)){var H=i.interleaved;H===null?(h.next=h,Pc(i)):(h.next=H.next,H.next=h),i.interleaved=h;return}}catch{}a=zp(n,i,h,u),a!==null&&(h=Un(),_r(a,n,u,h),dm(a,i,u))}}function um(n){var i=n.alternate;return n===Xt||i!==null&&i===Xt}function cm(n,i){qs=El=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function dm(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,cn(n,a)}}var Tl={readContext:ir,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},yx={readContext:ir,useCallback:function(n,i){return Pr().memoizedState=[n,i===void 0?null:i],n},useContext:ir,useEffect:em,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ml(4194308,4,rm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ml(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ml(4,2,n,i)},useMemo:function(n,i){var a=Pr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Pr();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=_x.bind(null,Xt,n),[u.memoizedState,n]},useRef:function(n){var i=Pr();return n={current:n},i.memoizedState=n},useState:Jp,useDebugValue:Gc,useDeferredValue:function(n){return Pr().memoizedState=n},useTransition:function(){var n=Jp(!1),i=n[0];return n=vx.bind(null,n[1]),Pr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Xt,h=Pr();if(Wt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),fn===null)throw Error(t(349));(Qi&30)!==0||$p(u,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,em(qp.bind(null,u,g,n),[n]),u.flags|=2048,Js(9,Yp.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=Pr(),i=fn.identifierPrefix;if(Wt){var a=qr,u=Yr;a=(u&~(1<<32-xt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ks++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=gx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Sx={readContext:ir,useCallback:om,useContext:ir,useEffect:Vc,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:sm,useReducer:zc,useRef:Qp,useState:function(){return zc(Zs)},useDebugValue:Gc,useDeferredValue:function(n){var i=or();return am(i,nn.memoizedState,n)},useTransition:function(){var n=zc(Zs)[0],i=or().memoizedState;return[n,i]},useMutableSource:jp,useSyncExternalStore:Xp,useId:lm,unstable_isNewReconciler:!1},Ex={readContext:ir,useCallback:om,useContext:ir,useEffect:Vc,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:sm,useReducer:Hc,useRef:Qp,useState:function(){return Hc(Zs)},useDebugValue:Gc,useDeferredValue:function(n){var i=or();return nn===null?i.memoizedState=n:am(i,nn.memoizedState,n)},useTransition:function(){var n=Hc(Zs)[0],i=or().memoizedState;return[n,i]},useMutableSource:jp,useSyncExternalStore:Xp,useId:lm,unstable_isNewReconciler:!1};function mr(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Wc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:le({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Cl={isMounted:function(n){return(n=n._reactInternals)?Cr(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Un(),h=Di(n),g=Zr(u,h);g.payload=i,a!=null&&(g.callback=a),i=Ai(n,g,h),i!==null&&(_r(i,n,h,u),_l(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Un(),h=Di(n),g=Zr(u,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Ai(n,g,h),i!==null&&(_r(i,n,h,u),_l(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Un(),u=Di(n),h=Zr(a,u);h.tag=2,i!=null&&(h.callback=i),i=Ai(n,h,u),i!==null&&(_r(i,n,u,a),_l(i,n,u))}};function fm(n,i,a,u,h,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,w):i.prototype&&i.prototype.isPureReactComponent?!Os(a,u)||!Os(h,g):!0}function hm(n,i,a){var u=!1,h=Ti,g=i.contextType;return typeof g=="object"&&g!==null?g=ir(g):(h=Hn(i)?Yi:Mn.current,u=i.contextTypes,g=(u=u!=null)?No(n,h):Ti),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Cl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function pm(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Cl.enqueueReplaceState(i,i.state,null)}function jc(n,i,a,u){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Lc(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=ir(g):(g=Hn(i)?Yi:Mn.current,h.context=No(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Wc(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Cl.enqueueReplaceState(h,h.state,null),xl(n,a,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Vo(n,i){try{var a="",u=i;do a+=me(u),u=u.return;while(u);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Xc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function $c(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Mx=typeof WeakMap=="function"?WeakMap:Map;function mm(n,i,a){a=Zr(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Ul||(Ul=!0,ld=u),$c(n,i)},a}function gm(n,i,a){a=Zr(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;a.payload=function(){return u(h)},a.callback=function(){$c(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){$c(n,i),typeof u!="function"&&(Pi===null?Pi=new Set([this]):Pi.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function vm(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Mx;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(a)||(h.add(a),n=kx.bind(null,n,i,a),i.then(n,n))}function _m(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function xm(n,i,a,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Zr(-1,1),i.tag=2,Ai(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var wx=A.ReactCurrentOwner,Vn=!1;function Dn(n,i,a,u){i.child=n===null?Bp(i,null,a,u):Oo(i,n.child,a,u)}function ym(n,i,a,u,h){a=a.render;var g=i.ref;return zo(i,h),u=Oc(n,i,a,u,g,h),a=Bc(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Jr(n,i,h)):(Wt&&a&&Sc(i),i.flags|=1,Dn(n,i,u,h),i.child)}function Sm(n,i,a,u,h){if(n===null){var g=a.type;return typeof g=="function"&&!md(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Em(n,i,g,u,h)):(n=Bl(a.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Os,a(w,u)&&n.ref===i.ref)return Jr(n,i,h)}return i.flags|=1,n=Ni(g,u),n.ref=i.ref,n.return=i,i.child=n}function Em(n,i,a,u,h){if(n!==null){var g=n.memoizedProps;if(Os(g,u)&&n.ref===i.ref)if(Vn=!1,i.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Vn=!0);else return i.lanes=n.lanes,Jr(n,i,h)}return Yc(n,i,a,u,h)}function Mm(n,i,a){var u=i.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Wo,Jn),Jn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Bt(Wo,Jn),Jn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,Bt(Wo,Jn),Jn|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,Bt(Wo,Jn),Jn|=u;return Dn(n,i,h,a),i.child}function wm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Yc(n,i,a,u,h){var g=Hn(a)?Yi:Mn.current;return g=No(i,g),zo(i,h),a=Oc(n,i,a,u,g,h),u=Bc(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Jr(n,i,h)):(Wt&&u&&Sc(i),i.flags|=1,Dn(n,i,a,h),i.child)}function Tm(n,i,a,u,h){if(Hn(a)){var g=!0;cl(i)}else g=!1;if(zo(i,h),i.stateNode===null)Al(n,i),hm(i,a,u),jc(i,a,u,h),u=!0;else if(n===null){var w=i.stateNode,U=i.memoizedProps;w.props=U;var H=w.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=ir(oe):(oe=Hn(a)?Yi:Mn.current,oe=No(i,oe));var Me=a.getDerivedStateFromProps,Te=typeof Me=="function"||typeof w.getSnapshotBeforeUpdate=="function";Te||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==u||H!==oe)&&pm(i,w,u,oe),Ri=!1;var Ee=i.memoizedState;w.state=Ee,xl(i,u,w,h),H=i.memoizedState,U!==u||Ee!==H||zn.current||Ri?(typeof Me=="function"&&(Wc(i,a,Me,u),H=i.memoizedState),(U=Ri||fm(i,a,U,u,Ee,H,oe))?(Te||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=H),w.props=u,w.state=H,w.context=oe,u=U):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,Hp(n,i),U=i.memoizedProps,oe=i.type===i.elementType?U:mr(i.type,U),w.props=oe,Te=i.pendingProps,Ee=w.context,H=a.contextType,typeof H=="object"&&H!==null?H=ir(H):(H=Hn(a)?Yi:Mn.current,H=No(i,H));var Ve=a.getDerivedStateFromProps;(Me=typeof Ve=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==Te||Ee!==H)&&pm(i,w,u,H),Ri=!1,Ee=i.memoizedState,w.state=Ee,xl(i,u,w,h);var Ze=i.memoizedState;U!==Te||Ee!==Ze||zn.current||Ri?(typeof Ve=="function"&&(Wc(i,a,Ve,u),Ze=i.memoizedState),(oe=Ri||fm(i,a,oe,u,Ee,Ze,H)||!1)?(Me||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Ze,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Ze,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ze),w.props=u,w.state=Ze,w.context=H,u=oe):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=1024),u=!1)}return qc(n,i,a,u,g,h)}function qc(n,i,a,u,h,g){wm(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return h&&Pp(i,a,!1),Jr(n,i,g);u=i.stateNode,wx.current=i;var U=w&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=Oo(i,n.child,null,g),i.child=Oo(i,null,U,g)):Dn(n,i,U,g),i.memoizedState=u.state,h&&Pp(i,a,!0),i.child}function Cm(n){var i=n.stateNode;i.pendingContext?Ap(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ap(n,i.context,!1),Dc(n,i.containerInfo)}function Rm(n,i,a,u,h){return ko(),Tc(h),i.flags|=256,Dn(n,i,a,u),i.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Zc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Am(n,i,a){var u=i.pendingProps,h=jt.current,g=!1,w=(i.flags&128)!==0,U;if((U=w)||(U=n!==null&&n.memoizedState===null?!1:(h&2)!==0),U?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Bt(jt,h&1),n===null)return wc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,n=u.fallback,g?(u=i.mode,g=i.child,w={mode:"hidden",children:w},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=zl(w,u,0,null),n=io(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Zc(a),i.memoizedState=Kc,n):Jc(i,w));if(h=n.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return Tx(n,i,w,u,U,h,a);if(g){g=u.fallback,w=i.mode,h=n.child,U=h.sibling;var H={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=H,i.deletions=null):(u=Ni(h,H),u.subtreeFlags=h.subtreeFlags&14680064),U!==null?g=Ni(U,g):(g=io(g,w,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,w=n.child.memoizedState,w=w===null?Zc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=Kc,u}return g=n.child,n=g.sibling,u=Ni(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Jc(n,i){return i=zl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Rl(n,i,a,u){return u!==null&&Tc(u),Oo(i,n.child,null,a),n=Jc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Tx(n,i,a,u,h,g,w){if(a)return i.flags&256?(i.flags&=-257,u=Xc(Error(t(422))),Rl(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,h=i.mode,u=zl({mode:"visible",children:u.children},h,0,null),g=io(g,h,w,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Oo(i,n.child,null,w),i.child.memoizedState=Zc(w),i.memoizedState=Kc,g);if((i.mode&1)===0)return Rl(n,i,w,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var U=u.dgst;return u=U,g=Error(t(419)),u=Xc(g,u,void 0),Rl(n,i,w,u)}if(U=(w&n.childLanes)!==0,Vn||U){if(u=fn,u!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|w))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Kr(n,h),_r(u,n,h,-1))}return pd(),u=Xc(Error(t(421))),Rl(n,i,w,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Ox.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,Zn=Mi(h.nextSibling),Kn=i,Wt=!0,pr=null,n!==null&&(nr[rr++]=Yr,nr[rr++]=qr,nr[rr++]=qi,Yr=n.id,qr=n.overflow,qi=i),i=Jc(i,u.children),i.flags|=4096,i)}function bm(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),bc(n.return,i,a)}function Qc(n,i,a,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=h)}function Pm(n,i,a){var u=i.pendingProps,h=u.revealOrder,g=u.tail;if(Dn(n,i,u.children,a),u=jt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&bm(n,a,i);else if(n.tag===19)bm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Bt(jt,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&yl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Qc(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&yl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Qc(i,!0,a,null,g);break;case"together":Qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Al(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Jr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),eo|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Ni(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ni(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Cx(n,i,a){switch(i.tag){case 3:Cm(i),ko();break;case 5:Wp(i);break;case 1:Hn(i.type)&&cl(i);break;case 4:Dc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Bt(gl,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Bt(jt,jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Am(n,i,a):(Bt(jt,jt.current&1),n=Jr(n,i,a),n!==null?n.sibling:null);Bt(jt,jt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Pm(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Bt(jt,jt.current),u)break;return null;case 22:case 23:return i.lanes=0,Mm(n,i,a)}return Jr(n,i,a)}var Lm,ed,Dm,Um;Lm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ed=function(){},Dm=function(n,i,a,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,Ji(br.current);var g=null;switch(a){case"input":h=I(n,h),u=I(n,u),g=[];break;case"select":h=le({},h,{value:void 0}),u=le({},u,{value:void 0}),g=[];break;case"textarea":h=Rt(n,h),u=Rt(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=al)}nt(a,u);var w;a=null;for(oe in h)if(!u.hasOwnProperty(oe)&&h.hasOwnProperty(oe)&&h[oe]!=null)if(oe==="style"){var U=h[oe];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(s.hasOwnProperty(oe)?g||(g=[]):(g=g||[]).push(oe,null));for(oe in u){var H=u[oe];if(U=h?.[oe],u.hasOwnProperty(oe)&&H!==U&&(H!=null||U!=null))if(oe==="style")if(U){for(w in U)!U.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in H)H.hasOwnProperty(w)&&U[w]!==H[w]&&(a||(a={}),a[w]=H[w])}else a||(g||(g=[]),g.push(oe,a)),a=H;else oe==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(g=g||[]).push(oe,H)):oe==="children"?typeof H!="string"&&typeof H!="number"||(g=g||[]).push(oe,""+H):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(s.hasOwnProperty(oe)?(H!=null&&oe==="onScroll"&&zt("scroll",n),g||U===H||(g=[])):(g=g||[]).push(oe,H))}a&&(g=g||[]).push("style",a);var oe=g;(i.updateQueue=oe)&&(i.flags|=4)}},Um=function(n,i,a,u){a!==u&&(i.flags|=4)};function Qs(n,i){if(!Wt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Tn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Rx(n,i,a){var u=i.pendingProps;switch(Ec(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(i),null;case 1:return Hn(i.type)&&ul(),Tn(i),null;case 3:return u=i.stateNode,Ho(),Ht(zn),Ht(Mn),Ic(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(pl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,pr!==null&&(dd(pr),pr=null))),ed(n,i),Tn(i),null;case 5:Uc(i);var h=Ji(Ys.current);if(a=i.type,n!==null&&i.stateNode!=null)Dm(n,i,a,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Tn(i),null}if(n=Ji(br.current),pl(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[Ar]=i,u[Gs]=g,n=(i.mode&1)!==0,a){case"dialog":zt("cancel",u),zt("close",u);break;case"iframe":case"object":case"embed":zt("load",u);break;case"video":case"audio":for(h=0;h<zs.length;h++)zt(zs[h],u);break;case"source":zt("error",u);break;case"img":case"image":case"link":zt("error",u),zt("load",u);break;case"details":zt("toggle",u);break;case"input":ot(u,g),zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},zt("invalid",u);break;case"textarea":D(u,g),zt("invalid",u)}nt(a,g),h=null;for(var w in g)if(g.hasOwnProperty(w)){var U=g[w];w==="children"?typeof U=="string"?u.textContent!==U&&(g.suppressHydrationWarning!==!0&&sl(u.textContent,U,n),h=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&sl(u.textContent,U,n),h=["children",""+U]):s.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&zt("scroll",u)}switch(a){case"input":Le(u),We(u,g,!0);break;case"textarea":Le(u),Q(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=al)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(a,{is:u.is}):(n=w.createElement(a),a==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,a),n[Ar]=i,n[Gs]=u,Lm(n,i,!1,!1),i.stateNode=n;e:{switch(w=Ue(a,u),a){case"dialog":zt("cancel",n),zt("close",n),h=u;break;case"iframe":case"object":case"embed":zt("load",n),h=u;break;case"video":case"audio":for(h=0;h<zs.length;h++)zt(zs[h],n);h=u;break;case"source":zt("error",n),h=u;break;case"img":case"image":case"link":zt("error",n),zt("load",n),h=u;break;case"details":zt("toggle",n),h=u;break;case"input":ot(n,u),h=I(n,u),zt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=le({},u,{value:void 0}),zt("invalid",n);break;case"textarea":D(n,u),h=Rt(n,u),zt("invalid",n);break;default:h=u}nt(a,h),U=h;for(g in U)if(U.hasOwnProperty(g)){var H=U[g];g==="style"?Be(n,H):g==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&qe(n,H)):g==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&De(n,H):typeof H=="number"&&De(n,""+H):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(s.hasOwnProperty(g)?H!=null&&g==="onScroll"&&zt("scroll",n):H!=null&&P(n,g,H,w))}switch(a){case"input":Le(n),We(n,u,!1);break;case"textarea":Le(n),Q(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?ze(n,!!u.multiple,g,!1):u.defaultValue!=null&&ze(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=al)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Tn(i),null;case 6:if(n&&i.stateNode!=null)Um(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ji(Ys.current),Ji(br.current),pl(i)){if(u=i.stateNode,a=i.memoizedProps,u[Ar]=i,(g=u.nodeValue!==a)&&(n=Kn,n!==null))switch(n.tag){case 3:sl(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&sl(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Ar]=i,i.stateNode=u}return Tn(i),null;case 13:if(Ht(jt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&Zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Fp(),ko(),i.flags|=98560,g=!1;else if(g=pl(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ar]=i}else ko(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Tn(i),g=!1}else pr!==null&&(dd(pr),pr=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(jt.current&1)!==0?rn===0&&(rn=3):pd())),i.updateQueue!==null&&(i.flags|=4),Tn(i),null);case 4:return Ho(),ed(n,i),n===null&&Hs(i.stateNode.containerInfo),Tn(i),null;case 10:return Ac(i.type._context),Tn(i),null;case 17:return Hn(i.type)&&ul(),Tn(i),null;case 19:if(Ht(jt),g=i.memoizedState,g===null)return Tn(i),null;if(u=(i.flags&128)!==0,w=g.rendering,w===null)if(u)Qs(g,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=yl(n),w!==null){for(i.flags|=128,Qs(g,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Bt(jt,jt.current&1|2),i.child}n=n.sibling}g.tail!==null&&K()>jo&&(i.flags|=128,u=!0,Qs(g,!1),i.lanes=4194304)}else{if(!u)if(n=yl(w),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Qs(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Wt)return Tn(i),null}else 2*K()-g.renderingStartTime>jo&&a!==1073741824&&(i.flags|=128,u=!0,Qs(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=K(),i.sibling=null,a=jt.current,Bt(jt,u?a&1|2:a&1),i):(Tn(i),null);case 22:case 23:return hd(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Jn&1073741824)!==0&&(Tn(i),i.subtreeFlags&6&&(i.flags|=8192)):Tn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Ax(n,i){switch(Ec(i),i.tag){case 1:return Hn(i.type)&&ul(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ho(),Ht(zn),Ht(Mn),Ic(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Uc(i),null;case 13:if(Ht(jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ko()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ht(jt),null;case 4:return Ho(),null;case 10:return Ac(i.type._context),null;case 22:case 23:return hd(),null;case 24:return null;default:return null}}var bl=!1,Cn=!1,bx=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Go(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){qt(n,i,u)}else a.current=null}function td(n,i,a){try{a()}catch(u){qt(n,i,u)}}var Nm=!1;function Px(n,i){if(hc=qa,n=fp(),oc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,U=-1,H=-1,oe=0,Me=0,Te=n,Ee=null;t:for(;;){for(var Ve;Te!==a||h!==0&&Te.nodeType!==3||(U=w+h),Te!==g||u!==0&&Te.nodeType!==3||(H=w+u),Te.nodeType===3&&(w+=Te.nodeValue.length),(Ve=Te.firstChild)!==null;)Ee=Te,Te=Ve;for(;;){if(Te===n)break t;if(Ee===a&&++oe===h&&(U=w),Ee===g&&++Me===u&&(H=w),(Ve=Te.nextSibling)!==null)break;Te=Ee,Ee=Te.parentNode}Te=Ve}a=U===-1||H===-1?null:{start:U,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(pc={focusedElem:n,selectionRange:a},qa=!1,Ye=i;Ye!==null;)if(i=Ye,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ye=n;else for(;Ye!==null;){i=Ye;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var et=Ze.memoizedProps,Jt=Ze.memoizedState,q=i.stateNode,X=q.getSnapshotBeforeUpdate(i.elementType===i.type?et:mr(i.type,et),Jt);q.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){qt(i,i.return,Pe)}if(n=i.sibling,n!==null){n.return=i.return,Ye=n;break}Ye=i.return}return Ze=Nm,Nm=!1,Ze}function ea(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&td(i,a,g)}h=h.next}while(h!==u)}}function Pl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function nd(n){var i=n.ref;if(i!==null){var a=n.stateNode;n.tag,n=a,typeof i=="function"?i(n):i.current=n}}function Im(n){var i=n.alternate;i!==null&&(n.alternate=null,Im(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ar],delete i[Gs],delete i[_c],delete i[fx],delete i[hx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Fm(n){return n.tag===5||n.tag===3||n.tag===4}function km(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Fm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rd(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=al));else if(u!==4&&(n=n.child,n!==null))for(rd(n,i,a),n=n.sibling;n!==null;)rd(n,i,a),n=n.sibling}function id(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(id(n,i,a),n=n.sibling;n!==null;)id(n,i,a),n=n.sibling}var vn=null,gr=!1;function bi(n,i,a){for(a=a.child;a!==null;)Om(n,i,a),a=a.sibling}function Om(n,i,a){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 5:Cn||Go(a,i);case 6:var u=vn,h=gr;vn=null,bi(n,i,a),vn=u,gr=h,vn!==null&&(gr?(n=vn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(gr?(n=vn,a=a.stateNode,n.nodeType===8?vc(n.parentNode,a):n.nodeType===1&&vc(n,a),Ds(n)):vc(vn,a.stateNode));break;case 4:u=vn,h=gr,vn=a.stateNode.containerInfo,gr=!0,bi(n,i,a),vn=u,gr=h;break;case 0:case 11:case 14:case 15:if(!Cn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&td(a,i,w),h=h.next}while(h!==u)}bi(n,i,a);break;case 1:if(!Cn&&(Go(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(U){qt(a,i,U)}bi(n,i,a);break;case 21:bi(n,i,a);break;case 22:a.mode&1?(Cn=(u=Cn)||a.memoizedState!==null,bi(n,i,a),Cn=u):bi(n,i,a);break;default:bi(n,i,a)}}function Bm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new bx),i.forEach(function(u){var h=Bx.bind(null,n,u);a.has(u)||(a.add(u),u.then(h,h))})}}function vr(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var g=n,w=i,U=w;e:for(;U!==null;){switch(U.tag){case 5:vn=U.stateNode,gr=!1;break e;case 3:vn=U.stateNode.containerInfo,gr=!0;break e;case 4:vn=U.stateNode.containerInfo,gr=!0;break e}U=U.return}if(vn===null)throw Error(t(160));Om(g,w,h),vn=null,gr=!1;var H=h.alternate;H!==null&&(H.return=null),h.return=null}catch(oe){qt(h,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)zm(i,n),i=i.sibling}function zm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vr(i,n),Lr(n),u&4){try{ea(3,n,n.return),Pl(3,n)}catch(et){qt(n,n.return,et)}try{ea(5,n,n.return)}catch(et){qt(n,n.return,et)}}break;case 1:vr(i,n),Lr(n),u&512&&a!==null&&Go(a,a.return);break;case 5:if(vr(i,n),Lr(n),u&512&&a!==null&&Go(a,a.return),n.flags&32){var h=n.stateNode;try{De(h,"")}catch(et){qt(n,n.return,et)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,U=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&ct(h,g),Ue(U,w);var oe=Ue(U,g);for(w=0;w<H.length;w+=2){var Me=H[w],Te=H[w+1];Me==="style"?Be(h,Te):Me==="dangerouslySetInnerHTML"?qe(h,Te):Me==="children"?De(h,Te):P(h,Me,Te,oe)}switch(U){case"input":Tt(h,g);break;case"textarea":T(h,g);break;case"select":var Ee=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Ve=g.value;Ve!=null?ze(h,!!g.multiple,Ve,!1):Ee!==!!g.multiple&&(g.defaultValue!=null?ze(h,!!g.multiple,g.defaultValue,!0):ze(h,!!g.multiple,g.multiple?[]:"",!1))}h[Gs]=g}catch(et){qt(n,n.return,et)}}break;case 6:if(vr(i,n),Lr(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(et){qt(n,n.return,et)}}break;case 3:if(vr(i,n),Lr(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Ds(i.containerInfo)}catch(et){qt(n,n.return,et)}break;case 4:vr(i,n),Lr(n);break;case 13:vr(i,n),Lr(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(ad=K())),u&4&&Bm(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(Cn=(oe=Cn)||Me,vr(i,n),Cn=oe):vr(i,n),Lr(n),u&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!Me&&(n.mode&1)!==0)for(Ye=n,Me=n.child;Me!==null;){for(Te=Ye=Me;Ye!==null;){switch(Ee=Ye,Ve=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:ea(4,Ee,Ee.return);break;case 1:Go(Ee,Ee.return);var Ze=Ee.stateNode;if(typeof Ze.componentWillUnmount=="function"){u=Ee,a=Ee.return;try{i=u,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(et){qt(u,a,et)}}break;case 5:Go(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){Gm(Te);continue}}Ve!==null?(Ve.return=Ee,Ye=Ve):Gm(Te)}Me=Me.sibling}e:for(Me=null,Te=n;;){if(Te.tag===5){if(Me===null){Me=Te;try{h=Te.stateNode,oe?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=Te.stateNode,H=Te.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=ge("display",w))}catch(et){qt(n,n.return,et)}}}else if(Te.tag===6){if(Me===null)try{Te.stateNode.nodeValue=oe?"":Te.memoizedProps}catch(et){qt(n,n.return,et)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;Me===Te&&(Me=null),Te=Te.return}Me===Te&&(Me=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:vr(i,n),Lr(n),u&4&&Bm(n);break;case 21:break;default:vr(i,n),Lr(n)}}function Lr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Fm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(De(h,""),u.flags&=-33);var g=km(n);id(n,g,h);break;case 3:case 4:var w=u.stateNode.containerInfo,U=km(n);rd(n,U,w);break;default:throw Error(t(161))}}catch(H){qt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Lx(n,i,a){Ye=n,Hm(n)}function Hm(n,i,a){for(var u=(n.mode&1)!==0;Ye!==null;){var h=Ye,g=h.child;if(h.tag===22&&u){var w=h.memoizedState!==null||bl;if(!w){var U=h.alternate,H=U!==null&&U.memoizedState!==null||Cn;U=bl;var oe=Cn;if(bl=w,(Cn=H)&&!oe)for(Ye=h;Ye!==null;)w=Ye,H=w.child,w.tag===22&&w.memoizedState!==null?Wm(h):H!==null?(H.return=w,Ye=H):Wm(h);for(;g!==null;)Ye=g,Hm(g),g=g.sibling;Ye=h,bl=U,Cn=oe}Vm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ye=g):Vm(n)}}function Vm(n){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Cn||Pl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Cn)if(a===null)u.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:mr(i.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Gp(i,g,u);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Gp(i,w,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var Me=oe.memoizedState;if(Me!==null){var Te=Me.dehydrated;Te!==null&&Ds(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||i.flags&512&&nd(i)}catch(Ee){qt(i,i.return,Ee)}}if(i===n){Ye=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function Gm(n){for(;Ye!==null;){var i=Ye;if(i===n){Ye=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function Wm(n){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Pl(4,i)}catch(H){qt(i,a,H)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(H){qt(i,h,H)}}var g=i.return;try{nd(i)}catch(H){qt(i,g,H)}break;case 5:var w=i.return;try{nd(i)}catch(H){qt(i,w,H)}}}catch(H){qt(i,i.return,H)}if(i===n){Ye=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ye=U;break}Ye=i.return}}var Dx=Math.ceil,Ll=A.ReactCurrentDispatcher,od=A.ReactCurrentOwner,sr=A.ReactCurrentBatchConfig,bt=0,fn=null,en=null,_n=0,Jn=0,Wo=wi(0),rn=0,ta=null,eo=0,Dl=0,sd=0,na=null,Gn=null,ad=0,jo=1/0,Qr=null,Ul=!1,ld=null,Pi=null,Nl=!1,Li=null,Il=0,ra=0,ud=null,Fl=-1,kl=0;function Un(){return(bt&6)!==0?K():Fl!==-1?Fl:Fl=K()}function Di(n){return(n.mode&1)===0?1:(bt&2)!==0&&_n!==0?_n&-_n:mx.transition!==null?(kl===0&&(kl=Ot()),kl):(n=At,n!==0||(n=window.event,n=n===void 0?16:Xh(n.type)),n)}function _r(n,i,a,u){if(50<ra)throw ra=0,ud=null,Error(t(185));un(n,a,u),((bt&2)===0||n!==fn)&&(n===fn&&((bt&2)===0&&(Dl|=a),rn===4&&Ui(n,_n)),Wn(n,u),a===1&&bt===0&&(i.mode&1)===0&&(jo=K()+500,dl&&Ci()))}function Wn(n,i){var a=n.callbackNode;Ln(n,i);var u=ln(n,n===fn?_n:0);if(u===0)a!==null&&R(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&R(a),i===1)n.tag===0?px(Xm.bind(null,n)):Lp(Xm.bind(null,n)),cx(function(){(bt&6)===0&&Ci()}),a=null;else{switch(Rr(u)){case 1:a=Re;break;case 4:a=Ie;break;case 16:a=$e;break;case 536870912:a=ht;break;default:a=$e}a=eg(a,jm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function jm(n,i){if(Fl=-1,kl=0,(bt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Xo()&&n.callbackNode!==a)return null;var u=ln(n,n===fn?_n:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Ol(n,u);else{i=u;var h=bt;bt|=2;var g=Ym();(fn!==n||_n!==i)&&(Qr=null,jo=K()+500,no(n,i));do try{Ix();break}catch(U){$m(n,U)}while(!0);Rc(),Ll.current=g,bt=h,en!==null?i=0:(fn=null,_n=0,i=rn)}if(i!==0){if(i===2&&(h=jr(n),h!==0&&(u=h,i=cd(n,h))),i===1)throw a=ta,no(n,0),Ui(n,u),Wn(n,K()),a;if(i===6)Ui(n,u);else{if(h=n.current.alternate,(u&30)===0&&!Ux(h)&&(i=Ol(n,u),i===2&&(g=jr(n),g!==0&&(u=g,i=cd(n,g))),i===1))throw a=ta,no(n,0),Ui(n,u),Wn(n,K()),a;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:ro(n,Gn,Qr);break;case 3:if(Ui(n,u),(u&130023424)===u&&(i=ad+500-K(),10<i)){if(ln(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Un(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=gc(ro.bind(null,n,Gn,Qr),i);break}ro(n,Gn,Qr);break;case 4:if(Ui(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var w=31-xt(u);g=1<<w,w=i[w],w>h&&(h=w),u&=~g}if(u=h,u=K()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Dx(u/1960))-u,10<u){n.timeoutHandle=gc(ro.bind(null,n,Gn,Qr),u);break}ro(n,Gn,Qr);break;case 5:ro(n,Gn,Qr);break;default:throw Error(t(329))}}}return Wn(n,K()),n.callbackNode===a?jm.bind(null,n):null}function cd(n,i){var a=na;return n.current.memoizedState.isDehydrated&&(no(n,i).flags|=256),n=Ol(n,i),n!==2&&(i=Gn,Gn=a,i!==null&&dd(i)),n}function dd(n){Gn===null?Gn=n:Gn.push.apply(Gn,n)}function Ux(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],g=h.getSnapshot;h=h.value;try{if(!hr(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ui(n,i){for(i&=~sd,i&=~Dl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-xt(i),u=1<<a;n[a]=-1,i&=~u}}function Xm(n){if((bt&6)!==0)throw Error(t(327));Xo();var i=ln(n,0);if((i&1)===0)return Wn(n,K()),null;var a=Ol(n,i);if(n.tag!==0&&a===2){var u=jr(n);u!==0&&(i=u,a=cd(n,u))}if(a===1)throw a=ta,no(n,0),Ui(n,i),Wn(n,K()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ro(n,Gn,Qr),Wn(n,K()),null}function fd(n,i){var a=bt;bt|=1;try{return n(i)}finally{bt=a,bt===0&&(jo=K()+500,dl&&Ci())}}function to(n){Li!==null&&Li.tag===0&&(bt&6)===0&&Xo();var i=bt;bt|=1;var a=sr.transition,u=At;try{if(sr.transition=null,At=1,n)return n()}finally{At=u,sr.transition=a,bt=i,(bt&6)===0&&Ci()}}function hd(){Jn=Wo.current,Ht(Wo)}function no(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,ux(a)),en!==null)for(a=en.return;a!==null;){var u=a;switch(Ec(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ul();break;case 3:Ho(),Ht(zn),Ht(Mn),Ic();break;case 5:Uc(u);break;case 4:Ho();break;case 13:Ht(jt);break;case 19:Ht(jt);break;case 10:Ac(u.type._context);break;case 22:case 23:hd()}a=a.return}if(fn=n,en=n=Ni(n.current,null),_n=Jn=i,rn=0,ta=null,sd=Dl=eo=0,Gn=na=null,Zi!==null){for(i=0;i<Zi.length;i++)if(a=Zi[i],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,g=a.pending;if(g!==null){var w=g.next;g.next=h,u.next=w}a.pending=u}Zi=null}return n}function $m(n,i){do{var a=en;try{if(Rc(),Sl.current=Tl,El){for(var u=Xt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}El=!1}if(Qi=0,dn=nn=Xt=null,qs=!1,Ks=0,od.current=null,a===null||a.return===null){rn=1,ta=i,en=null;break}e:{var g=n,w=a.return,U=a,H=i;if(i=_n,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var oe=H,Me=U,Te=Me.tag;if((Me.mode&1)===0&&(Te===0||Te===11||Te===15)){var Ee=Me.alternate;Ee?(Me.updateQueue=Ee.updateQueue,Me.memoizedState=Ee.memoizedState,Me.lanes=Ee.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Ve=_m(w);if(Ve!==null){Ve.flags&=-257,xm(Ve,w,U,g,i),Ve.mode&1&&vm(g,oe,i),i=Ve,H=oe;var Ze=i.updateQueue;if(Ze===null){var et=new Set;et.add(H),i.updateQueue=et}else Ze.add(H);break e}else{if((i&1)===0){vm(g,oe,i),pd();break e}H=Error(t(426))}}else if(Wt&&U.mode&1){var Jt=_m(w);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),xm(Jt,w,U,g,i),Tc(Vo(H,U));break e}}g=H=Vo(H,U),rn!==4&&(rn=2),na===null?na=[g]:na.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var q=mm(g,H,i);Vp(g,q);break e;case 1:U=H;var X=g.type,ee=g.stateNode;if((g.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Pi===null||!Pi.has(ee)))){g.flags|=65536,i&=-i,g.lanes|=i;var Pe=gm(g,U,i);Vp(g,Pe);break e}}g=g.return}while(g!==null)}Km(a)}catch(tt){i=tt,en===a&&a!==null&&(en=a=a.return);continue}break}while(!0)}function Ym(){var n=Ll.current;return Ll.current=Tl,n===null?Tl:n}function pd(){(rn===0||rn===3||rn===2)&&(rn=4),fn===null||(eo&268435455)===0&&(Dl&268435455)===0||Ui(fn,_n)}function Ol(n,i){var a=bt;bt|=2;var u=Ym();(fn!==n||_n!==i)&&(Qr=null,no(n,i));do try{Nx();break}catch(h){$m(n,h)}while(!0);if(Rc(),bt=a,Ll.current=u,en!==null)throw Error(t(261));return fn=null,_n=0,rn}function Nx(){for(;en!==null;)qm(en)}function Ix(){for(;en!==null&&!$();)qm(en)}function qm(n){var i=Qm(n.alternate,n,Jn);n.memoizedProps=n.pendingProps,i===null?Km(n):en=i,od.current=null}function Km(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Rx(a,i,Jn),a!==null){en=a;return}}else{if(a=Ax(a,i),a!==null){a.flags&=32767,en=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,en=null;return}}if(i=i.sibling,i!==null){en=i;return}en=i=n}while(i!==null);rn===0&&(rn=5)}function ro(n,i,a){var u=At,h=sr.transition;try{sr.transition=null,At=1,Fx(n,i,a,u)}finally{sr.transition=h,At=u}return null}function Fx(n,i,a,u){do Xo();while(Li!==null);if((bt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(gn(n,g),n===fn&&(en=fn=null,_n=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Nl||(Nl=!0,eg($e,function(){return Xo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=sr.transition,sr.transition=null;var w=At;At=1;var U=bt;bt|=4,od.current=null,Px(n,a),zm(a,n),nx(pc),qa=!!hc,pc=hc=null,n.current=a,Lx(a),se(),bt=U,At=w,sr.transition=g}else n.current=a;if(Nl&&(Nl=!1,Li=n,Il=h),g=n.pendingLanes,g===0&&(Pi=null),Et(a.stateNode),Wn(n,K()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(Ul)throw Ul=!1,n=ld,ld=null,n;return(Il&1)!==0&&n.tag!==0&&Xo(),g=n.pendingLanes,(g&1)!==0?n===ud?ra++:(ra=0,ud=n):ra=0,Ci(),null}function Xo(){if(Li!==null){var n=Rr(Il),i=sr.transition,a=At;try{if(sr.transition=null,At=16>n?16:n,Li===null)var u=!1;else{if(n=Li,Li=null,Il=0,(bt&6)!==0)throw Error(t(331));var h=bt;for(bt|=4,Ye=n.current;Ye!==null;){var g=Ye,w=g.child;if((Ye.flags&16)!==0){var U=g.deletions;if(U!==null){for(var H=0;H<U.length;H++){var oe=U[H];for(Ye=oe;Ye!==null;){var Me=Ye;switch(Me.tag){case 0:case 11:case 15:ea(8,Me,g)}var Te=Me.child;if(Te!==null)Te.return=Me,Ye=Te;else for(;Ye!==null;){Me=Ye;var Ee=Me.sibling,Ve=Me.return;if(Im(Me),Me===oe){Ye=null;break}if(Ee!==null){Ee.return=Ve,Ye=Ee;break}Ye=Ve}}}var Ze=g.alternate;if(Ze!==null){var et=Ze.child;if(et!==null){Ze.child=null;do{var Jt=et.sibling;et.sibling=null,et=Jt}while(et!==null)}}Ye=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,Ye=w;else e:for(;Ye!==null;){if(g=Ye,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ea(9,g,g.return)}var q=g.sibling;if(q!==null){q.return=g.return,Ye=q;break e}Ye=g.return}}var X=n.current;for(Ye=X;Ye!==null;){w=Ye;var ee=w.child;if((w.subtreeFlags&2064)!==0&&ee!==null)ee.return=w,Ye=ee;else e:for(w=X;Ye!==null;){if(U=Ye,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Pl(9,U)}}catch(tt){qt(U,U.return,tt)}if(U===w){Ye=null;break e}var Pe=U.sibling;if(Pe!==null){Pe.return=U.return,Ye=Pe;break e}Ye=U.return}}if(bt=h,Ci(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(ft,n)}catch{}u=!0}return u}finally{At=a,sr.transition=i}}return!1}function Zm(n,i,a){i=Vo(a,i),i=mm(n,i,1),n=Ai(n,i,1),i=Un(),n!==null&&(un(n,1,i),Wn(n,i))}function qt(n,i,a){if(n.tag===3)Zm(n,n,a);else for(;i!==null;){if(i.tag===3){Zm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Pi===null||!Pi.has(u))){n=Vo(a,n),n=gm(i,n,1),i=Ai(i,n,1),n=Un(),i!==null&&(un(i,1,n),Wn(i,n));break}}i=i.return}}function kx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Un(),n.pingedLanes|=n.suspendedLanes&a,fn===n&&(_n&a)===a&&(rn===4||rn===3&&(_n&130023424)===_n&&500>K()-ad?no(n,0):sd|=a),Wn(n,i)}function Jm(n,i){i===0&&((n.mode&1)===0?i=1:(i=It,It<<=1,(It&130023424)===0&&(It=4194304)));var a=Un();n=Kr(n,i),n!==null&&(un(n,i,a),Wn(n,a))}function Ox(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Jm(n,a)}function Bx(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Jm(n,a)}var Qm;Qm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||zn.current)Vn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Vn=!1,Cx(n,i,a);Vn=(n.flags&131072)!==0}else Vn=!1,Wt&&(i.flags&1048576)!==0&&Dp(i,hl,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Al(n,i),n=i.pendingProps;var h=No(i,Mn.current);zo(i,a),h=Oc(null,i,u,n,h,a);var g=Bc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Hn(u)?(g=!0,cl(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Lc(i),h.updater=Cl,i.stateNode=h,h._reactInternals=i,jc(i,u,n,a),i=qc(null,i,u,!0,g,a)):(i.tag=0,Wt&&g&&Sc(i),Dn(null,i,h,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Al(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=Hx(u),n=mr(u,n),h){case 0:i=Yc(null,i,u,n,a);break e;case 1:i=Tm(null,i,u,n,a);break e;case 11:i=ym(null,i,u,n,a);break e;case 14:i=Sm(null,i,u,mr(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:mr(u,h),Yc(n,i,u,h,a);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:mr(u,h),Tm(n,i,u,h,a);case 3:e:{if(Cm(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,h=g.element,Hp(n,i),xl(i,u,null,a);var w=i.memoizedState;if(u=w.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Vo(Error(t(423)),i),i=Rm(n,i,u,a,h);break e}else if(u!==h){h=Vo(Error(t(424)),i),i=Rm(n,i,u,a,h);break e}else for(Zn=Mi(i.stateNode.containerInfo.firstChild),Kn=i,Wt=!0,pr=null,a=Bp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ko(),u===h){i=Jr(n,i,a);break e}Dn(n,i,u,a)}i=i.child}return i;case 5:return Wp(i),n===null&&wc(i),u=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,w=h.children,mc(u,h)?w=null:g!==null&&mc(u,g)&&(i.flags|=32),wm(n,i),Dn(n,i,w,a),i.child;case 6:return n===null&&wc(i),null;case 13:return Am(n,i,a);case 4:return Dc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Oo(i,null,u,a):Dn(n,i,u,a),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:mr(u,h),ym(n,i,u,h,a);case 7:return Dn(n,i,i.pendingProps,a),i.child;case 8:return Dn(n,i,i.pendingProps.children,a),i.child;case 12:return Dn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,g=i.memoizedProps,w=h.value,Bt(gl,u._currentValue),u._currentValue=w,g!==null)if(hr(g.value,w)){if(g.children===h.children&&!zn.current){i=Jr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var U=g.dependencies;if(U!==null){w=g.child;for(var H=U.firstContext;H!==null;){if(H.context===u){if(g.tag===1){H=Zr(-1,a&-a),H.tag=2;var oe=g.updateQueue;if(oe!==null){oe=oe.shared;var Me=oe.pending;Me===null?H.next=H:(H.next=Me.next,Me.next=H),oe.pending=H}}g.lanes|=a,H=g.alternate,H!==null&&(H.lanes|=a),bc(g.return,a,i),U.lanes|=a;break}H=H.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),bc(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Dn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,zo(i,a),h=ir(h),u=u(h),i.flags|=1,Dn(n,i,u,a),i.child;case 14:return u=i.type,h=mr(u,i.pendingProps),h=mr(u.type,h),Sm(n,i,u,h,a);case 15:return Em(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:mr(u,h),Al(n,i),i.tag=1,Hn(u)?(n=!0,cl(i)):n=!1,zo(i,a),hm(i,u,h),jc(i,u,h,a),qc(null,i,u,!0,n,a);case 19:return Pm(n,i,a);case 22:return Mm(n,i,a)}throw Error(t(156,i.tag))};function eg(n,i){return Xa(n,i)}function zx(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ar(n,i,a,u){return new zx(n,i,a,u)}function md(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Hx(n){if(typeof n=="function")return md(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===fe)return 14}return 2}function Ni(n,i){var a=n.alternate;return a===null?(a=ar(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Bl(n,i,a,u,h,g){var w=2;if(u=n,typeof n=="function")md(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case k:return io(a.children,h,g,i);case W:w=8,h|=8;break;case b:return n=ar(12,a,i,h|2),n.elementType=b,n.lanes=g,n;case Z:return n=ar(13,a,i,h),n.elementType=Z,n.lanes=g,n;case J:return n=ar(19,a,i,h),n.elementType=J,n.lanes=g,n;case he:return zl(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:w=10;break e;case V:w=9;break e;case ae:w=11;break e;case fe:w=14;break e;case ue:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ar(w,a,i,h),i.elementType=n,i.type=u,i.lanes=g,i}function io(n,i,a,u){return n=ar(7,n,u,i),n.lanes=a,n}function zl(n,i,a,u){return n=ar(22,n,u,i),n.elementType=he,n.lanes=a,n.stateNode={isHidden:!1},n}function gd(n,i,a){return n=ar(6,n,null,i),n.lanes=a,n}function vd(n,i,a){return i=ar(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Vx(n,i,a,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=En(0),this.expirationTimes=En(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function _d(n,i,a,u,h,g,w,U,H){return n=new Vx(n,i,a,U,H),i===1?(i=1,g===!0&&(i|=8)):i=0,g=ar(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(g),n}function Gx(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function tg(n){if(!n)return Ti;n=n._reactInternals;e:{if(Cr(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Hn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Hn(a))return bp(n,a,i)}return i}function ng(n,i,a,u,h,g,w,U,H){return n=_d(a,u,!0,n,h,g,w,U,H),n.context=tg(null),a=n.current,u=Un(),h=Di(a),g=Zr(u,h),g.callback=i??null,Ai(a,g,h),n.current.lanes=h,un(n,h,u),Wn(n,u),n}function Hl(n,i,a,u){var h=i.current,g=Un(),w=Di(h);return a=tg(a),i.context===null?i.context=a:i.pendingContext=a,i=Zr(g,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Ai(h,i,w),n!==null&&(_r(n,h,w,g),_l(n,h,w)),w}function Vl(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function rg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function xd(n,i){rg(n,i),(n=n.alternate)&&rg(n,i)}function Wx(){return null}var ig=typeof reportError=="function"?reportError:function(n){console.error(n)};function yd(n){this._internalRoot=n}Gl.prototype.render=yd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Hl(n,i,null,null)},Gl.prototype.unmount=yd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;to(function(){Hl(null,n,null,null)}),i[Xr]=null}};function Gl(n){this._internalRoot=n}Gl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Hh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<yi.length&&i!==0&&i<yi[a].priority;a++);yi.splice(a,0,n),a===0&&Wh(n)}};function Sd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Wl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function og(){}function jx(n,i,a,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var oe=Vl(w);g.call(oe)}}var w=ng(i,u,n,0,null,!1,!1,"",og);return n._reactRootContainer=w,n[Xr]=w.current,Hs(n.nodeType===8?n.parentNode:n),to(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var U=u;u=function(){var oe=Vl(H);U.call(oe)}}var H=_d(n,0,!1,null,null,!1,!1,"",og);return n._reactRootContainer=H,n[Xr]=H.current,Hs(n.nodeType===8?n.parentNode:n),to(function(){Hl(i,H,a,u)}),H}function jl(n,i,a,u,h){var g=a._reactRootContainer;if(g){var w=g;if(typeof h=="function"){var U=h;h=function(){var H=Vl(w);U.call(H)}}Hl(i,w,n,h)}else w=jx(a,i,n,h,u);return Vl(w)}Bh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Mt(i.pendingLanes);a!==0&&(cn(i,a|1),Wn(i,K()),(bt&6)===0&&(jo=K()+500,Ci()))}break;case 13:to(function(){var u=Kr(n,1);if(u!==null){var h=Un();_r(u,n,1,h)}}),xd(n,1)}},Xu=function(n){if(n.tag===13){var i=Kr(n,134217728);if(i!==null){var a=Un();_r(i,n,134217728,a)}xd(n,134217728)}},zh=function(n){if(n.tag===13){var i=Di(n),a=Kr(n,i);if(a!==null){var u=Un();_r(a,n,i,u)}xd(n,i)}},Hh=function(){return At},Vh=function(n,i){var a=At;try{return At=n,i()}finally{At=a}},Ne=function(n,i,a){switch(i){case"input":if(Tt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var h=ll(u);if(!h)throw Error(t(90));it(u),Tt(u,h)}}}break;case"textarea":T(n,a);break;case"select":i=a.value,i!=null&&ze(n,!!a.multiple,i,!1)}},pt=fd,be=to;var Xx={usingClientEntryPoint:!1,Events:[Ws,Do,ll,ve,Xe,fd]},ia={findFiberByHostInstance:$i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$x={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Wa(n),n===null?null:n.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||Wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{ft=Xl.inject($x),Ke=Xl}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xx,jn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sd(i))throw Error(t(200));return Gx(n,i,null,a)},jn.createRoot=function(n,i){if(!Sd(n))throw Error(t(299));var a=!1,u="",h=ig;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=_d(n,1,!1,null,null,a,!1,u,h),n[Xr]=i.current,Hs(n.nodeType===8?n.parentNode:n),new yd(i)},jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Wa(i),n=n===null?null:n.stateNode,n},jn.flushSync=function(n){return to(n)},jn.hydrate=function(n,i,a){if(!Wl(i))throw Error(t(200));return jl(null,n,i,!0,a)},jn.hydrateRoot=function(n,i,a){if(!Sd(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,h=!1,g="",w=ig;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=ng(i,null,n,1,a??null,h,!1,g,w),n[Xr]=i.current,Hs(n),u)for(n=0;n<u.length;n++)a=u[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Gl(i)},jn.render=function(n,i,a){if(!Wl(i))throw Error(t(200));return jl(null,n,i,!1,a)},jn.unmountComponentAtNode=function(n){if(!Wl(n))throw Error(t(40));return n._reactRootContainer?(to(function(){jl(null,null,n,!1,function(){n._reactRootContainer=null,n[Xr]=null})}),!0):!1},jn.unstable_batchedUpdates=fd,jn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Wl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return jl(n,i,a,!1,u)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var hg;function ty(){if(hg)return wd.exports;hg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),wd.exports=ey(),wd.exports}var pg;function ny(){if(pg)return $l;pg=1;var r=ty();return $l.createRoot=r.createRoot,$l.hydrateRoot=r.hydrateRoot,$l}var ry=ny();const iy=qv(ry);var lh=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Zv=/^[\\/]{2}/;function oy(r,e){return e+r.replace(/\\/g,"/")}var mg="popstate";function gg(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function sy(r={}){function e(o,s){let l=s.state?.masked,{pathname:c,search:d,hash:f}=l||o.location;return mf("",{pathname:c,search:d,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default",l?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function t(o,s){return typeof s=="string"?s:Sa(s)}return ly(e,t,null,r)}function Yt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Vr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ay(){return Math.random().toString(36).substring(2,10)}function vg(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function mf(r,e,t=null,o,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ss(e):e,state:t,key:e&&e.key||o||ay(),mask:s}}function Sa({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Ss(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let o=r.indexOf("?");o>=0&&(e.search=r.substring(o),r=r.substring(0,o)),r&&(e.pathname=r)}return e}function ly(r,e,t,o={}){let{window:s=document.defaultView,v5Compat:l=!1}=o,c=s.history,d="POP",f=null,p=m();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function m(){return(c.state||{idx:null}).idx}function v(){d="POP";let x=m(),_=x==null?null:x-p;p=x,f&&f({action:d,location:M.location,delta:_})}function y(x,_){d="PUSH";let L=gg(x)?x:mf(M.location,x,_);p=m()+1;let P=vg(L,p),A=M.createHref(L.mask||L);try{c.pushState(P,"",A)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;s.location.assign(A)}l&&f&&f({action:d,location:M.location,delta:1})}function S(x,_){d="REPLACE";let L=gg(x)?x:mf(M.location,x,_);p=m();let P=vg(L,p),A=M.createHref(L.mask||L);c.replaceState(P,"",A),l&&f&&f({action:d,location:M.location,delta:0})}function E(x){return uy(s,x)}let M={get action(){return d},get location(){return r(s,c)},listen(x){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(mg,v),f=x,()=>{s.removeEventListener(mg,v),f=null}},createHref(x){return e(s,x)},createURL:E,encodeLocation(x){let _=E(x);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:S,go(x){return c.go(x)}};return M}function uy(r,e,t=!1){let o="http://localhost";r&&(o=r.location.origin!=="null"?r.location.origin:r.location.href),Yt(o,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Sa(e);return s=s.replace(/ $/,"%20"),!t&&Zv.test(s)&&(s=o+s),new URL(s,o)}function Jv(r,e,t="/"){return cy(r,e,t,!1)}function cy(r,e,t,o,s){let l=typeof e=="string"?Ss(e):e,c=hi(l.pathname||"/",t);if(c==null)return null;let d=dy(r),f=null,p=Ey(c);for(let m=0;f==null&&m<d.length;++m)f=Sy(d[m],p,o);return f}function dy(r){let e=Qv(r);return fy(e),e}function Qv(r,e=[],t=[],o="",s=!1){let l=(c,d,f=s,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(o)&&f)return;Yt(m.relativePath.startsWith(o),`Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(o.length)}let v=wr([o,m.relativePath]),y=t.concat(m);c.children&&c.children.length>0&&(Yt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Qv(c.children,e,y,v,f)),!(c.path==null&&!c.index)&&e.push({path:v,score:xy(v,c.index),routesMeta:y.map((S,E)=>{let[M,x]=n_(S.relativePath,S.caseSensitive,E===y.length-1);return{...S,matcher:M,compiledParams:x}})})};return r.forEach((c,d)=>{if(c.path===""||!c.path?.includes("?"))l(c,d);else for(let f of e_(c.path))l(c,d,!0,f)}),e}function e_(r){let e=r.split("/");if(e.length===0)return[];let[t,...o]=e,s=t.endsWith("?"),l=t.replace(/\?$/,"");if(o.length===0)return s?[l,""]:[l];let c=e_(o.join("/")),d=[];return d.push(...c.map(f=>f===""?l:[l,f].join("/"))),s&&d.push(...c),d.map(f=>r.startsWith("/")&&f===""?"/":f)}function fy(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:yy(e.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}var hy=/^:[\w-]+$/,py=3,my=2,gy=1,vy=10,_y=-2,_g=r=>r==="*";function xy(r,e){let t=r.split("/"),o=t.length;return t.some(_g)&&(o+=_y),e&&(o+=my),t.filter(s=>!_g(s)).reduce((s,l)=>s+(hy.test(l)?py:l===""?gy:vy),o)}function yy(r,e){return r.length===e.length&&r.slice(0,-1).every((o,s)=>o===e[s])?r[r.length-1]-e[e.length-1]:0}function Sy(r,e,t=!1){let{routesMeta:o}=r,s={},l="/",c=[];for(let d=0;d<o.length;++d){let f=o[d],p=d===o.length-1,m=l==="/"?e:e.slice(l.length)||"/",v={path:f.relativePath,caseSensitive:f.caseSensitive,end:p},y=f.matcher&&f.compiledParams?t_(v,m,f.matcher,f.compiledParams):Lu(v,m),S=f.route;if(!y&&p&&t&&!o[o.length-1].route.index&&(y=Lu({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},m)),!y)return null;Object.assign(s,y.params),c.push({params:s,pathname:wr([l,y.pathname]),pathnameBase:Ty(wr([l,y.pathnameBase])),route:S}),y.pathnameBase!=="/"&&(l=wr([l,y.pathnameBase]))}return c}function Lu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,o]=n_(r.path,r.caseSensitive,r.end);return t_(r,e,t,o)}function t_(r,e,t,o){let s=e.match(t);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:o.reduce((p,{paramName:m,isOptional:v},y)=>{if(m==="*"){let E=d[y]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=d[y];return v&&!S?p[m]=void 0:p[m]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function n_(r,e=!1,t=!0){Vr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,f,p,m)=>{if(o.push({paramName:d,isOptional:f!=null}),f){let v=m.charAt(p+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(o.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),o]}function Ey(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vr(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function hi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,o=r.charAt(t);return o&&o!=="/"?null:r.slice(t)||"/"}function My(r,e="/"){let{pathname:t,search:o="",hash:s=""}=typeof r=="string"?Ss(r):r,l;return t?(t=i_(t),t.startsWith("/")?l=xg(t.substring(1),"/"):l=xg(t,e)):l=e,{pathname:l,search:Cy(o),hash:Ry(s)}}function xg(r,e){let t=Du(e).split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Rd(r,e,t,o){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wy(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function r_(r){let e=wy(r);return e.map((t,o)=>o===e.length-1?t.pathname:t.pathnameBase)}function uh(r,e,t,o=!1){let s;typeof r=="string"?s=Ss(r):(s={...r},Yt(!s.pathname||!s.pathname.includes("?"),Rd("?","pathname","search",s)),Yt(!s.pathname||!s.pathname.includes("#"),Rd("#","pathname","hash",s)),Yt(!s.search||!s.search.includes("#"),Rd("#","search","hash",s)));let l=r===""||s.pathname==="",c=l?"/":s.pathname,d;if(c==null)d=t;else{let v=e.length-1;if(!o&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),v-=1;s.pathname=y.join("/")}d=v>=0?e[v]:"/"}let f=My(s,d),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||m)&&(f.pathname+="/"),f}var i_=r=>r.replace(/[\\/]{2,}/g,"/"),wr=r=>i_(r.join("/")),Du=r=>r.replace(/\/+$/,""),Ty=r=>Du(r).replace(/^\/*/,"/"),Cy=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Ry=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Ay=class{constructor(r,e,t,o=!1){this.status=r,this.statusText=e||"",this.internal=o,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function by(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Py(r){let e=r.map(t=>t.route.path).filter(Boolean);return wr(e)||"/"}var o_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function s_(r,e){let t=r;if(typeof t!="string"||!lh.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let o=t,s=!1;if(o_)try{let l=new URL(window.location.href),c=Zv.test(t)?new URL(oy(t,l.protocol)):new URL(t),d=hi(c.pathname,e);c.origin===l.origin&&d!=null?t=d+c.search+c.hash:s=!0}catch{Vr(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:s,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var a_=["POST","PUT","PATCH","DELETE"];new Set(a_);var Ly=["GET",...a_];new Set(Ly);var Dy=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Uy(r){try{return Dy.includes(new URL(r).protocol)}catch{return!1}}var Es=O.createContext(null);Es.displayName="DataRouter";var Fu=O.createContext(null);Fu.displayName="DataRouterState";var l_=O.createContext(!1);function Ny(){return O.useContext(l_)}var u_=O.createContext({isTransitioning:!1});u_.displayName="ViewTransition";var Iy=O.createContext(new Map);Iy.displayName="Fetchers";var Fy=O.createContext(null);Fy.displayName="Await";var fr=O.createContext(null);fr.displayName="Navigation";var La=O.createContext(null);La.displayName="Location";var pi=O.createContext({outlet:null,matches:[],isDataRoute:!1});pi.displayName="Route";var ch=O.createContext(null);ch.displayName="RouteError";var c_="REACT_ROUTER_ERROR",ky="REDIRECT",Oy="ROUTE_ERROR_RESPONSE";function By(r){if(r.startsWith(`${c_}:${ky}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function zy(r){if(r.startsWith(`${c_}:${Oy}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Ay(e.status,e.statusText,e.data)}catch{}}function Hy(r,{relative:e}={}){Yt(Da(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:o}=O.useContext(fr),{hash:s,pathname:l,search:c}=Ua(r,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:wr([t,l])),o.createHref({pathname:d,search:c,hash:s})}function Da(){return O.useContext(La)!=null}function mi(){return Yt(Da(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(La).location}var d_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function f_(r){O.useContext(fr).static||O.useLayoutEffect(r)}function Vy(){let{isDataRoute:r}=O.useContext(pi);return r?tS():Gy()}function Gy(){Yt(Da(),"useNavigate() may be used only in the context of a <Router> component.");let r=O.useContext(Es),{basename:e,navigator:t}=O.useContext(fr),{matches:o}=O.useContext(pi),{pathname:s}=mi(),l=JSON.stringify(r_(o)),c=O.useRef(!1);return f_(()=>{c.current=!0}),O.useCallback((f,p={})=>{if(Vr(c.current,d_),!c.current)return;if(typeof f=="number"){t.go(f);return}let m=uh(f,JSON.parse(l),s,p.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:wr([e,m.pathname])),(p.replace?t.replace:t.push)(m,p.state,p)},[e,t,l,s,r])}O.createContext(null);function Ua(r,{relative:e}={}){let{matches:t}=O.useContext(pi),{pathname:o}=mi(),s=JSON.stringify(r_(t));return O.useMemo(()=>uh(r,JSON.parse(s),o,e==="path"),[r,s,o,e])}function Wy(r,e){return h_(r,e)}function h_(r,e,t){Yt(Da(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=O.useContext(fr),{matches:s}=O.useContext(pi),l=s[s.length-1],c=l?l.params:{},d=l?l.pathname:"/",f=l?l.pathnameBase:"/",p=l&&l.route;{let x=p&&p.path||"";m_(d,!p||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let m=mi(),v;if(e){let x=typeof e=="string"?Ss(e):e;Yt(f==="/"||x.pathname?.startsWith(f),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${x.pathname}" was given in the \`location\` prop.`),v=x}else v=m;let y=v.pathname||"/",S=y;if(f!=="/"){let x=f.replace(/^\//,"").split("/");S="/"+y.replace(/^\//,"").split("/").slice(x.length).join("/")}let E=t&&t.state.matches.length?t.state.matches.map(x=>Object.assign(x,{route:t.manifest[x.route.id]||x.route})):Jv(r,{pathname:S});Vr(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Vr(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=qy(E&&E.map(x=>Object.assign({},x,{params:Object.assign({},c,x.params),pathname:wr([f,o.encodeLocation?o.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?f:wr([f,o.encodeLocation?o.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),s,t);return e&&M?O.createElement(La.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},M):M}function jy(){let r=eS(),e=by(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},l={padding:"2px 4px",backgroundColor:o},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:l},"ErrorBoundary")," or"," ",O.createElement("code",{style:l},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),t?O.createElement("pre",{style:s},t):null,c)}var Xy=O.createElement(jy,null),p_=class extends O.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=zy(r.digest);t&&(r=t)}let e=r!==void 0?O.createElement(pi.Provider,{value:this.props.routeContext},O.createElement(ch.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?O.createElement($y,{error:r},e):e}};p_.contextType=l_;var Ad=new WeakMap;function $y({children:r,error:e}){let{basename:t}=O.useContext(fr);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let o=By(e.digest);if(o){let s=Ad.get(e);if(s)throw s;let l=s_(o.location,t),c=l.absoluteURL||l.to;if(Uy(c))throw new Error("Invalid redirect location");if(o_&&!Ad.get(e))if(l.isExternal||o.reloadDocument)window.location.href=c;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:o.replace}));throw Ad.set(e,d),d}return O.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return r}function Yy({routeContext:r,match:e,children:t}){let o=O.useContext(Es);return o&&o.static&&o.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=e.route.id),O.createElement(pi.Provider,{value:r},t)}function qy(r,e=[],t){let o=t?.state;if(r==null){if(!o)return null;if(o.errors)r=o.matches;else if(e.length===0&&!o.initialized&&o.matches.length>0)r=o.matches;else return null}let s=r,l=o?.errors;if(l!=null){let m=s.findIndex(v=>v.route.id&&l?.[v.route.id]!==void 0);Yt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,m+1))}let c=!1,d=-1;if(t&&o){c=o.renderFallback;for(let m=0;m<s.length;m++){let v=s[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(d=m),v.route.id){let{loaderData:y,errors:S}=o,E=v.route.loader&&!y.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(c=!0),d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}}let f=t?.onError,p=o&&f?(m,v)=>{f(m,{location:o.location,params:o.matches?.[0]?.params??{},pattern:Py(o.matches),errorInfo:v})}:void 0;return s.reduceRight((m,v,y)=>{let S,E=!1,M=null,x=null;o&&(S=l&&v.route.id?l[v.route.id]:void 0,M=v.route.errorElement||Xy,c&&(d<0&&y===0?(m_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,x=null):d===y&&(E=!0,x=v.route.hydrateFallbackElement||null)));let _=e.concat(s.slice(0,y+1)),L=()=>{let P;return S?P=M:E?P=x:v.route.Component?P=O.createElement(v.route.Component,null):v.route.element?P=v.route.element:P=m,O.createElement(Yy,{match:v,routeContext:{outlet:m,matches:_,isDataRoute:o!=null},children:P})};return o&&(v.route.ErrorBoundary||v.route.errorElement||y===0)?O.createElement(p_,{location:o.location,revalidation:o.revalidation,component:M,error:S,children:L(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):L()},null)}function dh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ky(r){let e=O.useContext(Es);return Yt(e,dh(r)),e}function Zy(r){let e=O.useContext(Fu);return Yt(e,dh(r)),e}function Jy(r){let e=O.useContext(pi);return Yt(e,dh(r)),e}function fh(r){let e=Jy(r),t=e.matches[e.matches.length-1];return Yt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function Qy(){return fh("useRouteId")}function eS(){let r=O.useContext(ch),e=Zy("useRouteError"),t=fh("useRouteError");return r!==void 0?r:e.errors?.[t]}function tS(){let{router:r}=Ky("useNavigate"),e=fh("useNavigate"),t=O.useRef(!1);return f_(()=>{t.current=!0}),O.useCallback(async(s,l={})=>{Vr(t.current,d_),t.current&&(typeof s=="number"?await r.navigate(s):await r.navigate(s,{fromRouteId:e,...l}))},[r,e])}var yg={};function m_(r,e,t){!e&&!yg[r]&&(yg[r]=!0,Vr(!1,t))}O.memo(nS);function nS({routes:r,manifest:e,future:t,state:o,isStatic:s,onError:l}){return h_(r,void 0,{manifest:e,state:o,isStatic:s,onError:l})}function yu(r){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rS({basename:r="/",children:e=null,location:t,navigationType:o="POP",navigator:s,static:l=!1,useTransitions:c}){Yt(!Da(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),f=O.useMemo(()=>({basename:d,navigator:s,static:l,useTransitions:c,future:{}}),[d,s,l,c]);typeof t=="string"&&(t=Ss(t));let{pathname:p="/",search:m="",hash:v="",state:y=null,key:S="default",mask:E}=t,M=O.useMemo(()=>{let x=hi(p,d);return x==null?null:{location:{pathname:x,search:m,hash:v,state:y,key:S,mask:E},navigationType:o}},[d,p,m,v,y,S,o,E]);return Vr(M!=null,`<Router basename="${d}"> is not able to match the URL "${p}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:O.createElement(fr.Provider,{value:f},O.createElement(La.Provider,{children:e,value:M}))}function iS({children:r,location:e}){return Wy(gf(r),e)}function gf(r,e=[]){let t=[];return O.Children.forEach(r,(o,s)=>{if(!O.isValidElement(o))return;let l=[...e,s];if(o.type===O.Fragment){t.push.apply(t,gf(o.props.children,l));return}Yt(o.type===yu,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let c={id:o.props.id||l.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(c.children=gf(o.props.children,l)),t.push(c)}),t}var Su="get",Eu="application/x-www-form-urlencoded";function ku(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function oS(r){return ku(r)&&r.tagName.toLowerCase()==="button"}function sS(r){return ku(r)&&r.tagName.toLowerCase()==="form"}function aS(r){return ku(r)&&r.tagName.toLowerCase()==="input"}function lS(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function uS(r,e){return r.button===0&&(!e||e==="_self")&&!lS(r)}var Yl=null;function cS(){if(Yl===null)try{new FormData(document.createElement("form"),0),Yl=!1}catch{Yl=!0}return Yl}var dS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bd(r){return r!=null&&!dS.has(r)?(Vr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Eu}"`),null):r}function fS(r,e){let t,o,s,l,c;if(sS(r)){let d=r.getAttribute("action");o=d?hi(d,e):null,t=r.getAttribute("method")||Su,s=bd(r.getAttribute("enctype"))||Eu,l=new FormData(r)}else if(oS(r)||aS(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=r.getAttribute("formaction")||d.getAttribute("action");if(o=f?hi(f,e):null,t=r.getAttribute("formmethod")||d.getAttribute("method")||Su,s=bd(r.getAttribute("formenctype"))||bd(d.getAttribute("enctype"))||Eu,l=new FormData(d,r),!cS()){let{name:p,type:m,value:v}=r;if(m==="image"){let y=p?`${p}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else p&&l.append(p,v)}}else{if(ku(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Su,o=null,s=Eu,c=r}return l&&s==="text/plain"&&(c=l,l=void 0),{action:o,method:t.toLowerCase(),encType:s,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function hh(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function g_(r,e,t,o){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${o}`:s.pathname=`${s.pathname}.${o}`:s.pathname==="/"?s.pathname=`_root.${o}`:e&&hi(s.pathname,e)==="/"?s.pathname=`${Du(e)}/_root.${o}`:s.pathname=`${Du(s.pathname)}.${o}`,s}async function hS(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pS(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function mS(r,e,t){let o=await Promise.all(r.map(async s=>{let l=e.routes[s.route.id];if(l){let c=await hS(l,t);return c.links?c.links():[]}return[]}));return xS(o.flat(1).filter(pS).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Sg(r,e,t,o,s,l){let c=(f,p)=>t[p]?f.route.id!==t[p].route.id:!0,d=(f,p)=>t[p].pathname!==f.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==f.params["*"];return l==="assets"?e.filter((f,p)=>c(f,p)||d(f,p)):l==="data"?e.filter((f,p)=>{let m=o.routes[f.route.id];if(!m||!m.hasLoader)return!1;if(c(f,p)||d(f,p))return!0;if(f.route.shouldRevalidate){let v=f.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function gS(r,e,{includeHydrateFallback:t}={}){return vS(r.map(o=>{let s=e.routes[o.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function vS(r){return[...new Set(r)]}function _S(r){let e={},t=Object.keys(r).sort();for(let o of t)e[o]=r[o];return e}function xS(r,e){let t=new Set;return new Set(e),r.reduce((o,s)=>{let l=JSON.stringify(_S(s));return t.has(l)||(t.add(l),o.push({key:l,link:s})),o},[])}function ph(){let r=O.useContext(Es);return hh(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function yS(){let r=O.useContext(Fu);return hh(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var mh=O.createContext(void 0);mh.displayName="FrameworkContext";function Ou(){let r=O.useContext(mh);return hh(r,"You must render this element inside a <HydratedRouter> element"),r}function SS(r,e){let t=O.useContext(mh),[o,s]=O.useState(!1),[l,c]=O.useState(!1),{onFocus:d,onBlur:f,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=e,y=O.useRef(null);O.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let M=_=>{_.forEach(L=>{c(L.isIntersecting)})},x=new IntersectionObserver(M,{threshold:.5});return y.current&&x.observe(y.current),()=>{x.disconnect()}}},[r]),O.useEffect(()=>{if(o){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[o]);let S=()=>{s(!0)},E=()=>{s(!1),c(!1)};return t?r!=="intent"?[l,y,{}]:[l,y,{onFocus:sa(d,S),onBlur:sa(f,E),onMouseEnter:sa(p,S),onMouseLeave:sa(m,E),onTouchStart:sa(v,S)}]:[!1,y,{}]}function sa(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function ES({page:r,...e}){let t=Ny(),{nonce:o}=Ou(),{router:s}=ph(),l=O.useMemo(()=>Jv(s.routes,r,s.basename),[s.routes,r,s.basename]);return l?(e.nonce==null&&o&&(e={...e,nonce:o}),t?O.createElement(wS,{page:r,matches:l,...e}):O.createElement(TS,{page:r,matches:l,...e})):null}function MS(r){let{manifest:e,routeModules:t}=Ou(),[o,s]=O.useState([]);return O.useEffect(()=>{let l=!1;return mS(r,e,t).then(c=>{l||s(c)}),()=>{l=!0}},[r,e,t]),o}function wS({page:r,matches:e,...t}){let o=mi(),{future:s}=Ou(),{basename:l}=ph(),c=O.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let d=g_(r,l,s.v8_trailingSlashAwareDataRequests,"rsc"),f=!1,p=[];for(let m of e)typeof m.route.shouldRevalidate=="function"?f=!0:p.push(m.route.id);return f&&p.length>0&&d.searchParams.set("_routes",p.join(",")),[d.pathname+d.search]},[l,s.v8_trailingSlashAwareDataRequests,r,o,e]);return O.createElement(O.Fragment,null,c.map(d=>O.createElement("link",{key:d,rel:"prefetch",as:"fetch",href:d,...t})))}function TS({page:r,matches:e,...t}){let o=mi(),{future:s,manifest:l,routeModules:c}=Ou(),{basename:d}=ph(),{loaderData:f,matches:p}=yS(),m=O.useMemo(()=>Sg(r,e,p,l,o,"data"),[r,e,p,l,o]),v=O.useMemo(()=>Sg(r,e,p,l,o,"assets"),[r,e,p,l,o]),y=O.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let M=new Set,x=!1;if(e.forEach(L=>{let P=l.routes[L.route.id];!P||!P.hasLoader||(!m.some(A=>A.route.id===L.route.id)&&L.route.id in f&&c[L.route.id]?.shouldRevalidate||P.hasClientLoader?x=!0:M.add(L.route.id))}),M.size===0)return[];let _=g_(r,d,s.v8_trailingSlashAwareDataRequests,"data");return x&&M.size>0&&_.searchParams.set("_routes",e.filter(L=>M.has(L.route.id)).map(L=>L.route.id).join(",")),[_.pathname+_.search]},[d,s.v8_trailingSlashAwareDataRequests,f,o,l,m,e,r,c]),S=O.useMemo(()=>gS(v,l),[v,l]),E=MS(v);return O.createElement(O.Fragment,null,y.map(M=>O.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...t})),S.map(M=>O.createElement("link",{key:M,rel:"modulepreload",href:M,...t})),E.map(({key:M,link:x})=>O.createElement("link",{key:M,nonce:t.nonce,...x,crossOrigin:x.crossOrigin??t.crossOrigin})))}function CS(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var RS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{RS&&(window.__reactRouterVersion="7.18.2")}catch{}function AS({basename:r,children:e,useTransitions:t,window:o}){let s=O.useRef();s.current==null&&(s.current=sy({window:o,v5Compat:!0}));let l=s.current,[c,d]=O.useState({action:l.action,location:l.location}),f=O.useCallback(p=>{t===!1?d(p):O.startTransition(()=>d(p))},[t]);return O.useLayoutEffect(()=>l.listen(f),[l,f]),O.createElement(rS,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l,useTransitions:t})}var gh=O.forwardRef(function({onClick:e,discover:t="render",prefetch:o="none",relative:s,reloadDocument:l,replace:c,mask:d,state:f,target:p,to:m,preventScrollReset:v,viewTransition:y,defaultShouldRevalidate:S,...E},M){let{basename:x,navigator:_,useTransitions:L}=O.useContext(fr),P=typeof m=="string"&&lh.test(m),A=s_(m,x);m=A.to;let G=Hy(m,{relative:s}),N=mi(),k=null;if(d){let fe=uh(d,[],N.mask?N.mask.pathname:"/",!0);x!=="/"&&(fe.pathname=fe.pathname==="/"?x:wr([x,fe.pathname])),k=_.createHref(fe)}let[W,b,C]=SS(o,E),V=LS(m,{replace:c,mask:d,state:f,target:p,preventScrollReset:v,relative:s,viewTransition:y,defaultShouldRevalidate:S,useTransitions:L});function ae(fe){e&&e(fe),fe.defaultPrevented||V(fe)}let Z=!(A.isExternal||l),J=O.createElement("a",{...E,...C,href:(Z?k:void 0)||A.absoluteURL||G,onClick:Z?ae:e,ref:CS(M,b),target:p,"data-discover":!P&&t==="render"?"true":void 0});return W&&!P?O.createElement(O.Fragment,null,J,O.createElement(ES,{page:G})):J});gh.displayName="Link";var vf=O.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:o="",end:s=!1,style:l,to:c,viewTransition:d,children:f,...p},m){let v=Ua(c,{relative:p.relative}),y=mi(),S=O.useContext(Fu),{navigator:E,basename:M}=O.useContext(fr),x=S!=null&&FS(v)&&d===!0,_=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,L=y.pathname,P=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(L=L.toLowerCase(),P=P?P.toLowerCase():null,_=_.toLowerCase()),P&&M&&(P=hi(P,M)||P);const A=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let G=L===_||!s&&L.startsWith(_)&&L.charAt(A)==="/",N=P!=null&&(P===_||!s&&P.startsWith(_)&&P.charAt(_.length)==="/"),k={isActive:G,isPending:N,isTransitioning:x},W=G?e:void 0,b;typeof o=="function"?b=o(k):b=[o,G?"active":null,N?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(k):l;return O.createElement(gh,{...p,"aria-current":W,className:b,ref:m,style:C,to:c,viewTransition:d},typeof f=="function"?f(k):f)});vf.displayName="NavLink";var bS=O.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:o,replace:s,state:l,method:c=Su,action:d,onSubmit:f,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:y,...S},E)=>{let{useTransitions:M}=O.useContext(fr),x=NS(),_=IS(d,{relative:p}),L=c.toLowerCase()==="get"?"get":"post",P=typeof d=="string"&&lh.test(d),A=G=>{if(f&&f(G),G.defaultPrevented)return;G.preventDefault();let N=G.nativeEvent.submitter,k=N?.getAttribute("formmethod")||c,W=()=>x(N||G.currentTarget,{fetcherKey:e,method:k,navigate:t,replace:s,state:l,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:y});M&&t!==!1?O.startTransition(()=>W()):W()};return O.createElement("form",{ref:E,method:L,action:_,onSubmit:o?f:A,...S,"data-discover":!P&&r==="render"?"true":void 0})});bS.displayName="Form";function PS(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function v_(r){let e=O.useContext(Es);return Yt(e,PS(r)),e}function LS(r,{target:e,replace:t,mask:o,state:s,preventScrollReset:l,relative:c,viewTransition:d,defaultShouldRevalidate:f,useTransitions:p}={}){let m=Vy(),v=mi(),y=Ua(r,{relative:c});return O.useCallback(S=>{if(uS(S,e)){S.preventDefault();let E=t!==void 0?t:Sa(v)===Sa(y),M=()=>m(r,{replace:E,mask:o,state:s,preventScrollReset:l,relative:c,viewTransition:d,defaultShouldRevalidate:f});p?O.startTransition(()=>M()):M()}},[v,m,y,t,o,s,e,r,l,c,d,f,p])}var DS=0,US=()=>`__${String(++DS)}__`;function NS(){let{router:r}=v_("useSubmit"),{basename:e}=O.useContext(fr),t=Qy(),o=r.fetch,s=r.navigate;return O.useCallback(async(l,c={})=>{let{action:d,method:f,encType:p,formData:m,body:v}=fS(l,e);if(c.navigate===!1){let y=c.fetcherKey||US();await o(y,t,c.action||d,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||f,formEncType:c.encType||p,flushSync:c.flushSync})}else await s(c.action||d,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||f,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[o,s,e,t])}function IS(r,{relative:e}={}){let{basename:t}=O.useContext(fr),o=O.useContext(pi);Yt(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),l={...Ua(r||".",{relative:e})},c=mi();if(r==null){l.search=c.search;let d=new URLSearchParams(l.search),f=d.getAll("index");if(f.some(m=>m==="")){d.delete("index"),f.filter(v=>v).forEach(v=>d.append("index",v));let m=d.toString();l.search=m?`?${m}`:""}}return(!r||r===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:wr([t,l.pathname])),Sa(l)}function FS(r,{relative:e}={}){let t=O.useContext(u_);Yt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=v_("useViewTransitionState"),s=Ua(r,{relative:e});if(!t.isTransitioning)return!1;let l=hi(t.currentLocation.pathname,o)||t.currentLocation.pathname,c=hi(t.nextLocation.pathname,o)||t.nextLocation.pathname;return Lu(s.pathname,c)!=null||Lu(s.pathname,l)!=null}const vh="178",kS=0,Eg=1,OS=2,__=1,BS=2,oi=3,Wi=0,$n=1,Ir=2,Gi=0,fs=1,Mg=2,wg=3,Tg=4,zS=5,mo=100,HS=101,VS=102,GS=103,WS=104,jS=200,XS=201,$S=202,YS=203,_f=204,xf=205,qS=206,KS=207,ZS=208,JS=209,QS=210,eE=211,tE=212,nE=213,rE=214,yf=0,Sf=1,Ef=2,ms=3,Mf=4,wf=5,Tf=6,Cf=7,x_=0,iE=1,oE=2,di=0,sE=1,aE=2,lE=3,uE=4,cE=5,dE=6,fE=7,y_=300,gs=301,vs=302,Rf=303,Af=304,Bu=306,Ea=1e3,ai=1001,bf=1002,yn=1003,hE=1004,ql=1005,kr=1006,Pd=1007,_o=1008,Gr=1009,S_=1010,E_=1011,Ma=1012,_h=1013,So=1014,li=1015,Na=1016,xh=1017,yh=1018,wa=1020,M_=35902,w_=1021,T_=1022,Mr=1023,Ta=1026,Ca=1027,C_=1028,Sh=1029,R_=1030,Eh=1031,Mh=1033,Mu=33776,wu=33777,Tu=33778,Cu=33779,Pf=35840,Lf=35841,Df=35842,Uf=35843,Nf=36196,If=37492,Ff=37496,kf=37808,Of=37809,Bf=37810,zf=37811,Hf=37812,Vf=37813,Gf=37814,Wf=37815,jf=37816,Xf=37817,$f=37818,Yf=37819,qf=37820,Kf=37821,Ru=36492,Zf=36494,Jf=36495,A_=36283,Qf=36284,eh=36285,th=36286,pE=3200,mE=3201,gE=0,vE=1,Vi="",Fn="srgb",_s="srgb-linear",Uu="linear",Ft="srgb",$o=7680,Cg=519,_E=512,xE=513,yE=514,b_=515,SE=516,EE=517,ME=518,wE=519,Rg=35044,Ag="300 es",ui=2e3,Nu=2001;class Ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(t)===-1&&o[e].push(t)}hasEventListener(e,t){const o=this._listeners;return o===void 0?!1:o[e]!==void 0&&o[e].indexOf(t)!==-1}removeEventListener(e,t){const o=this._listeners;if(o===void 0)return;const s=o[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const o=t[e.type];if(o!==void 0){e.target=this;const s=o.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bg=1234567;const _a=Math.PI/180,Ra=180/Math.PI;function ws(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]).toLowerCase()}function Ct(r,e,t){return Math.max(e,Math.min(t,r))}function wh(r,e){return(r%e+e)%e}function TE(r,e,t,o,s){return o+(r-e)*(s-o)/(t-e)}function CE(r,e,t){return r!==e?(t-r)/(e-r):0}function xa(r,e,t){return(1-t)*r+t*e}function RE(r,e,t,o){return xa(r,e,1-Math.exp(-t*o))}function AE(r,e=1){return e-Math.abs(wh(r,e*2)-e)}function bE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function PE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function LE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function DE(r,e){return r+Math.random()*(e-r)}function UE(r){return r*(.5-Math.random())}function NE(r){r!==void 0&&(bg=r);let e=bg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function IE(r){return r*_a}function FE(r){return r*Ra}function kE(r){return(r&r-1)===0&&r!==0}function OE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function BE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zE(r,e,t,o,s){const l=Math.cos,c=Math.sin,d=l(t/2),f=c(t/2),p=l((e+o)/2),m=c((e+o)/2),v=l((e-o)/2),y=c((e-o)/2),S=l((o-e)/2),E=c((o-e)/2);switch(s){case"XYX":r.set(d*m,f*v,f*y,d*p);break;case"YZY":r.set(f*y,d*m,f*v,d*p);break;case"ZXZ":r.set(f*v,f*y,d*m,d*p);break;case"XZX":r.set(d*m,f*E,f*S,d*p);break;case"YXY":r.set(f*S,d*m,f*E,d*p);break;case"ZYZ":r.set(f*E,f*S,d*m,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function us(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const pa={DEG2RAD:_a,RAD2DEG:Ra,generateUUID:ws,clamp:Ct,euclideanModulo:wh,mapLinear:TE,inverseLerp:CE,lerp:xa,damp:RE,pingpong:AE,smoothstep:bE,smootherstep:PE,randInt:LE,randFloat:DE,randFloatSpread:UE,seededRandom:NE,degToRad:IE,radToDeg:FE,isPowerOfTwo:kE,ceilPowerOfTwo:OE,floorPowerOfTwo:BE,setQuaternionFromProperEuler:zE,normalize:Nn,denormalize:us};class Dt{constructor(e=0,t=0){Dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,o=this.y,s=e.elements;return this.x=s[0]*t+s[3]*o+s[6],this.y=s[1]*t+s[4]*o+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Ct(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(Ct(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y;return t*t+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const o=Math.cos(t),s=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*o-c*s+e.x,this.y=l*s+c*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ia{constructor(e=0,t=0,o=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=o,this._w=s}static slerpFlat(e,t,o,s,l,c,d){let f=o[s+0],p=o[s+1],m=o[s+2],v=o[s+3];const y=l[c+0],S=l[c+1],E=l[c+2],M=l[c+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(d===1){e[t+0]=y,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(v!==M||f!==y||p!==S||m!==E){let x=1-d;const _=f*y+p*S+m*E+v*M,L=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const G=Math.sqrt(P),N=Math.atan2(G,_*L);x=Math.sin(x*N)/G,d=Math.sin(d*N)/G}const A=d*L;if(f=f*x+y*A,p=p*x+S*A,m=m*x+E*A,v=v*x+M*A,x===1-d){const G=1/Math.sqrt(f*f+p*p+m*m+v*v);f*=G,p*=G,m*=G,v*=G}}e[t]=f,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,o,s,l,c){const d=o[s],f=o[s+1],p=o[s+2],m=o[s+3],v=l[c],y=l[c+1],S=l[c+2],E=l[c+3];return e[t]=d*E+m*v+f*S-p*y,e[t+1]=f*E+m*y+p*v-d*S,e[t+2]=p*E+m*S+d*y-f*v,e[t+3]=m*E-d*v-f*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,o,s){return this._x=e,this._y=t,this._z=o,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const o=e._x,s=e._y,l=e._z,c=e._order,d=Math.cos,f=Math.sin,p=d(o/2),m=d(s/2),v=d(l/2),y=f(o/2),S=f(s/2),E=f(l/2);switch(c){case"XYZ":this._x=y*m*v+p*S*E,this._y=p*S*v-y*m*E,this._z=p*m*E+y*S*v,this._w=p*m*v-y*S*E;break;case"YXZ":this._x=y*m*v+p*S*E,this._y=p*S*v-y*m*E,this._z=p*m*E-y*S*v,this._w=p*m*v+y*S*E;break;case"ZXY":this._x=y*m*v-p*S*E,this._y=p*S*v+y*m*E,this._z=p*m*E+y*S*v,this._w=p*m*v-y*S*E;break;case"ZYX":this._x=y*m*v-p*S*E,this._y=p*S*v+y*m*E,this._z=p*m*E-y*S*v,this._w=p*m*v+y*S*E;break;case"YZX":this._x=y*m*v+p*S*E,this._y=p*S*v+y*m*E,this._z=p*m*E-y*S*v,this._w=p*m*v-y*S*E;break;case"XZY":this._x=y*m*v-p*S*E,this._y=p*S*v-y*m*E,this._z=p*m*E+y*S*v,this._w=p*m*v+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const o=t/2,s=Math.sin(o);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,o=t[0],s=t[4],l=t[8],c=t[1],d=t[5],f=t[9],p=t[2],m=t[6],v=t[10],y=o+d+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(m-f)*S,this._y=(l-p)*S,this._z=(c-s)*S}else if(o>d&&o>v){const S=2*Math.sqrt(1+o-d-v);this._w=(m-f)/S,this._x=.25*S,this._y=(s+c)/S,this._z=(l+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-o-v);this._w=(l-p)/S,this._x=(s+c)/S,this._y=.25*S,this._z=(f+m)/S}else{const S=2*Math.sqrt(1+v-o-d);this._w=(c-s)/S,this._x=(l+p)/S,this._y=(f+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let o=e.dot(t)+1;return o<1e-8?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const o=this.angleTo(e);if(o===0)return this;const s=Math.min(1,t/o);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const o=e._x,s=e._y,l=e._z,c=e._w,d=t._x,f=t._y,p=t._z,m=t._w;return this._x=o*m+c*d+s*p-l*f,this._y=s*m+c*f+l*d-o*p,this._z=l*m+c*p+o*f-s*d,this._w=c*m-o*d-s*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const o=this._x,s=this._y,l=this._z,c=this._w;let d=c*e._w+o*e._x+s*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=o,this._y=s,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*o+t*this._x,this._y=S*s+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),m=Math.atan2(p,d),v=Math.sin((1-t)*m)/p,y=Math.sin(t*m)/p;return this._w=c*v+this._w*y,this._x=o*v+this._x*y,this._y=s*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,o){return this.copy(e).slerp(t,o)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),o=Math.random(),s=Math.sqrt(1-o),l=Math.sqrt(o);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,o=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=o}set(e,t,o){return o===void 0&&(o=this.z),this.x=e,this.y=t,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,o=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*o+l[6]*s,this.y=l[1]*t+l[4]*o+l[7]*s,this.z=l[2]*t+l[5]*o+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,o=this.y,s=this.z,l=e.elements,c=1/(l[3]*t+l[7]*o+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*o+l[8]*s+l[12])*c,this.y=(l[1]*t+l[5]*o+l[9]*s+l[13])*c,this.z=(l[2]*t+l[6]*o+l[10]*s+l[14])*c,this}applyQuaternion(e){const t=this.x,o=this.y,s=this.z,l=e.x,c=e.y,d=e.z,f=e.w,p=2*(c*s-d*o),m=2*(d*t-l*s),v=2*(l*o-c*t);return this.x=t+f*p+c*v-d*m,this.y=o+f*m+d*p-l*v,this.z=s+f*v+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,o=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*o+l[8]*s,this.y=l[1]*t+l[5]*o+l[9]*s,this.z=l[2]*t+l[6]*o+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Ct(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const o=e.x,s=e.y,l=e.z,c=t.x,d=t.y,f=t.z;return this.x=s*f-l*d,this.y=l*c-o*f,this.z=o*d-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const o=e.dot(this)/t;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return Ld.copy(this).projectOnVector(e),this.sub(Ld)}reflect(e){return this.sub(Ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(Ct(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y,s=this.z-e.z;return t*t+o*o+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,o){const s=Math.sin(t)*e;return this.x=s*Math.sin(o),this.y=Math.cos(t)*e,this.z=s*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,o){return this.x=e*Math.sin(t),this.y=o,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=o,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,o=Math.sqrt(1-t*t);return this.x=o*Math.cos(e),this.y=t,this.z=o*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ld=new ie,Pg=new Ia;class _t{constructor(e,t,o,s,l,c,d,f,p){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,o,s,l,c,d,f,p)}set(e,t,o,s,l,c,d,f,p){const m=this.elements;return m[0]=e,m[1]=s,m[2]=d,m[3]=t,m[4]=l,m[5]=f,m[6]=o,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],this}extractBasis(e,t,o){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,s=t.elements,l=this.elements,c=o[0],d=o[3],f=o[6],p=o[1],m=o[4],v=o[7],y=o[2],S=o[5],E=o[8],M=s[0],x=s[3],_=s[6],L=s[1],P=s[4],A=s[7],G=s[2],N=s[5],k=s[8];return l[0]=c*M+d*L+f*G,l[3]=c*x+d*P+f*N,l[6]=c*_+d*A+f*k,l[1]=p*M+m*L+v*G,l[4]=p*x+m*P+v*N,l[7]=p*_+m*A+v*k,l[2]=y*M+S*L+E*G,l[5]=y*x+S*P+E*N,l[8]=y*_+S*A+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[1],s=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],m=e[8];return t*c*m-t*d*p-o*l*m+o*d*f+s*l*p-s*c*f}invert(){const e=this.elements,t=e[0],o=e[1],s=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],m=e[8],v=m*c-d*p,y=d*f-m*l,S=p*l-c*f,E=t*v+o*y+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=v*M,e[1]=(s*p-m*o)*M,e[2]=(d*o-s*c)*M,e[3]=y*M,e[4]=(m*t-s*f)*M,e[5]=(s*l-d*t)*M,e[6]=S*M,e[7]=(o*f-p*t)*M,e[8]=(c*t-o*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,o,s,l,c,d){const f=Math.cos(l),p=Math.sin(l);return this.set(o*f,o*p,-o*(f*c+p*d)+c+e,-s*p,s*f,-s*(-p*c+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Dd.makeScale(e,t)),this}rotate(e){return this.premultiply(Dd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,o,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,o=e.elements;for(let s=0;s<9;s++)if(t[s]!==o[s])return!1;return!0}fromArray(e,t=0){for(let o=0;o<9;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dd=new _t;function P_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Aa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function HE(){const r=Aa("canvas");return r.style.display="block",r}const Lg={};function hs(r){r in Lg||(Lg[r]=!0,console.warn(r))}function VE(r,e,t){return new Promise(function(o,s){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:o()}}setTimeout(l,t)})}function GE(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function WE(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Dg=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ug=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jE(){const r={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ft&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?Uu:this.spaces[s].transfer},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return hs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return hs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],o=[.3127,.329];return r.define({[_s]:{primaries:e,whitePoint:o,transfer:Uu,toXYZ:Dg,fromXYZ:Ug,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:o,transfer:Ft,toXYZ:Dg,fromXYZ:Ug,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),r}const Lt=jE();function fi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Yo;class XE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let o;if(e instanceof HTMLCanvasElement)o=e;else{Yo===void 0&&(Yo=Aa("canvas")),Yo.width=e.width,Yo.height=e.height;const s=Yo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),o=Yo}return o.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Aa("canvas");t.width=e.width,t.height=e.height;const o=t.getContext("2d");o.drawImage(e,0,0,e.width,e.height);const s=o.getImageData(0,0,e.width,e.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=fi(l[c]/255)*255;return o.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let o=0;o<t.length;o++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[o]=Math.floor(fi(t[o]/255)*255):t[o]=fi(t[o]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $E=0;class Th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const o={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,d=s.length;c<d;c++)s[c].isDataTexture?l.push(Ud(s[c].image)):l.push(Ud(s[c]))}else l=Ud(s);o.url=l}return t||(e.images[this.uuid]=o),o}}function Ud(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?XE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YE=0;const Nd=new ie;class On extends Ms{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,o=ai,s=ai,l=kr,c=_o,d=Mr,f=Gr,p=On.DEFAULT_ANISOTROPY,m=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=ws(),this.name="",this.source=new Th(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=o,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nd).x}get height(){return this.source.getSize(Nd).y}get depth(){return this.source.getSize(Nd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&o&&s.isVector2&&o.isVector2||s&&o&&s.isVector3&&o.isVector3||s&&o&&s.isMatrix3&&o.isMatrix3?s.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const o={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),t||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ea:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ea:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=y_;On.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,o=0,s=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=o,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,o,s){return this.x=e,this.y=t,this.z=o,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,o=this.y,s=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*o+c[8]*s+c[12]*l,this.y=c[1]*t+c[5]*o+c[9]*s+c[13]*l,this.z=c[2]*t+c[6]*o+c[10]*s+c[14]*l,this.w=c[3]*t+c[7]*o+c[11]*s+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,o,s,l;const f=e.elements,p=f[0],m=f[4],v=f[8],y=f[1],S=f[5],E=f[9],M=f[2],x=f[6],_=f[10];if(Math.abs(m-y)<.01&&Math.abs(v-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(m+y)<.1&&Math.abs(v+M)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,A=(S+1)/2,G=(_+1)/2,N=(m+y)/4,k=(v+M)/4,W=(E+x)/4;return P>A&&P>G?P<.01?(o=0,s=.707106781,l=.707106781):(o=Math.sqrt(P),s=N/o,l=k/o):A>G?A<.01?(o=.707106781,s=0,l=.707106781):(s=Math.sqrt(A),o=N/s,l=W/s):G<.01?(o=.707106781,s=.707106781,l=0):(l=Math.sqrt(G),o=k/l,s=W/l),this.set(o,s,l,t),this}let L=Math.sqrt((x-E)*(x-E)+(v-M)*(v-M)+(y-m)*(y-m));return Math.abs(L)<.001&&(L=1),this.x=(x-E)/L,this.y=(v-M)/L,this.z=(y-m)/L,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Ct(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this.w=e.w+(t.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qE extends Ms{constructor(e=1,t=1,o={}){super(),o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},o),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=o.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const s={width:e,height:t,depth:o.depth},l=new On(s);this.textures=[];const c=o.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(o),this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=o.depthTexture,this.samples=o.samples,this.multiview=o.multiview}_setTextureOptions(e={}){const t={minFilter:kr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let o=0;o<this.textures.length;o++)this.textures[o].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,o=1){if(this.width!==e||this.height!==t||this.depth!==o){this.width=e,this.height=t,this.depth=o;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=o,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,o=e.textures.length;t<o;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Th(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Eo extends qE{constructor(e=1,t=1,o={}){super(e,t,o),this.isWebGLRenderTarget=!0}}class L_ extends On{constructor(e=null,t=1,o=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:o,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class KE extends On{constructor(e=null,t=1,o=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:o,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fa{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t+=3)this.expandByPoint(xr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,o=e.count;t<o;t++)this.expandByPoint(xr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const o=xr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const o=e.geometry;if(o!==void 0){const l=o.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,xr):xr.fromBufferAttribute(l,c),xr.applyMatrix4(e.matrixWorld),this.expandByPoint(xr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kl.copy(e.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),Kl.copy(o.boundingBox)),Kl.applyMatrix4(e.matrixWorld),this.union(Kl)}const s=e.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xr),xr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,o;return e.normal.x>0?(t=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),t<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),Zl.subVectors(this.max,aa),qo.subVectors(e.a,aa),Ko.subVectors(e.b,aa),Zo.subVectors(e.c,aa),Fi.subVectors(Ko,qo),ki.subVectors(Zo,Ko),oo.subVectors(qo,Zo);let t=[0,-Fi.z,Fi.y,0,-ki.z,ki.y,0,-oo.z,oo.y,Fi.z,0,-Fi.x,ki.z,0,-ki.x,oo.z,0,-oo.x,-Fi.y,Fi.x,0,-ki.y,ki.x,0,-oo.y,oo.x,0];return!Id(t,qo,Ko,Zo,Zl)||(t=[1,0,0,0,1,0,0,0,1],!Id(t,qo,Ko,Zo,Zl))?!1:(Jl.crossVectors(Fi,ki),t=[Jl.x,Jl.y,Jl.z],Id(t,qo,Ko,Zo,Zl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],xr=new ie,Kl=new Fa,qo=new ie,Ko=new ie,Zo=new ie,Fi=new ie,ki=new ie,oo=new ie,aa=new ie,Zl=new ie,Jl=new ie,so=new ie;function Id(r,e,t,o,s){for(let l=0,c=r.length-3;l<=c;l+=3){so.fromArray(r,l);const d=s.x*Math.abs(so.x)+s.y*Math.abs(so.y)+s.z*Math.abs(so.z),f=e.dot(so),p=t.dot(so),m=o.dot(so);if(Math.max(-Math.max(f,p,m),Math.min(f,p,m))>d)return!1}return!0}const ZE=new Fa,la=new ie,Fd=new ie;class Ch{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const o=this.center;t!==void 0?o.copy(t):ZE.setFromPoints(e).getCenter(o);let s=0;for(let l=0,c=e.length;l<c;l++)s=Math.max(s,o.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const o=this.center.distanceToSquared(e);return t.copy(e),o>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const o=Math.sqrt(t),s=(o-this.radius)*.5;this.center.addScaledVector(la,s/o),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Fd)),this.expandByPoint(la.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ti=new ie,kd=new ie,Ql=new ie,Oi=new ie,Od=new ie,eu=new ie,Bd=new ie;class JE{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const o=t.dot(this.direction);return o<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,o,s){kd.copy(e).add(t).multiplyScalar(.5),Ql.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(kd);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ql),d=Oi.dot(this.direction),f=-Oi.dot(Ql),p=Oi.lengthSq(),m=Math.abs(1-c*c);let v,y,S,E;if(m>0)if(v=c*f-d,y=c*d-f,E=l*m,v>=0)if(y>=-E)if(y<=E){const M=1/m;v*=M,y*=M,S=v*(v+c*y+2*d)+y*(c*v+y+2*f)+p}else y=l,v=Math.max(0,-(c*y+d)),S=-v*v+y*(y+2*f)+p;else y=-l,v=Math.max(0,-(c*y+d)),S=-v*v+y*(y+2*f)+p;else y<=-E?(v=Math.max(0,-(-c*l+d)),y=v>0?-l:Math.min(Math.max(-l,-f),l),S=-v*v+y*(y+2*f)+p):y<=E?(v=0,y=Math.min(Math.max(-l,-f),l),S=y*(y+2*f)+p):(v=Math.max(0,-(c*l+d)),y=v>0?l:Math.min(Math.max(-l,-f),l),S=-v*v+y*(y+2*f)+p);else y=c>0?-l:l,v=Math.max(0,-(c*y+d)),S=-v*v+y*(y+2*f)+p;return o&&o.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(kd).addScaledVector(Ql,y),S}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const o=ti.dot(this.direction),s=ti.dot(ti)-o*o,l=e.radius*e.radius;if(s>l)return null;const c=Math.sqrt(l-s),d=o-c,f=o+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const o=-(this.origin.dot(e.normal)+e.constant)/t;return o>=0?o:null}intersectPlane(e,t){const o=this.distanceToPlane(e);return o===null?null:this.at(o,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let o,s,l,c,d,f;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(o=(e.min.x-y.x)*p,s=(e.max.x-y.x)*p):(o=(e.max.x-y.x)*p,s=(e.min.x-y.x)*p),m>=0?(l=(e.min.y-y.y)*m,c=(e.max.y-y.y)*m):(l=(e.max.y-y.y)*m,c=(e.min.y-y.y)*m),o>c||l>s||((l>o||isNaN(o))&&(o=l),(c<s||isNaN(s))&&(s=c),v>=0?(d=(e.min.z-y.z)*v,f=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,f=(e.min.z-y.z)*v),o>f||d>s)||((d>o||o!==o)&&(o=d),(f<s||s!==s)&&(s=f),s<0)?null:this.at(o>=0?o:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,o,s,l){Od.subVectors(t,e),eu.subVectors(o,e),Bd.crossVectors(Od,eu);let c=this.direction.dot(Bd),d;if(c>0){if(s)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Oi.subVectors(this.origin,e);const f=d*this.direction.dot(eu.crossVectors(Oi,eu));if(f<0)return null;const p=d*this.direction.dot(Od.cross(Oi));if(p<0||f+p>c)return null;const m=-d*Oi.dot(Bd);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,t,o,s,l,c,d,f,p,m,v,y,S,E,M,x){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,o,s,l,c,d,f,p,m,v,y,S,E,M,x)}set(e,t,o,s,l,c,d,f,p,m,v,y,S,E,M,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=o,_[12]=s,_[1]=l,_[5]=c,_[9]=d,_[13]=f,_[2]=p,_[6]=m,_[10]=v,_[14]=y,_[3]=S,_[7]=E,_[11]=M,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],t[9]=o[9],t[10]=o[10],t[11]=o[11],t[12]=o[12],t[13]=o[13],t[14]=o[14],t[15]=o[15],this}copyPosition(e){const t=this.elements,o=e.elements;return t[12]=o[12],t[13]=o[13],t[14]=o[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,o){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this}makeBasis(e,t,o){return this.set(e.x,t.x,o.x,0,e.y,t.y,o.y,0,e.z,t.z,o.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,o=e.elements,s=1/Jo.setFromMatrixColumn(e,0).length(),l=1/Jo.setFromMatrixColumn(e,1).length(),c=1/Jo.setFromMatrixColumn(e,2).length();return t[0]=o[0]*s,t[1]=o[1]*s,t[2]=o[2]*s,t[3]=0,t[4]=o[4]*l,t[5]=o[5]*l,t[6]=o[6]*l,t[7]=0,t[8]=o[8]*c,t[9]=o[9]*c,t[10]=o[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,o=e.x,s=e.y,l=e.z,c=Math.cos(o),d=Math.sin(o),f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=c*m,S=c*v,E=d*m,M=d*v;t[0]=f*m,t[4]=-f*v,t[8]=p,t[1]=S+E*p,t[5]=y-M*p,t[9]=-d*f,t[2]=M-y*p,t[6]=E+S*p,t[10]=c*f}else if(e.order==="YXZ"){const y=f*m,S=f*v,E=p*m,M=p*v;t[0]=y+M*d,t[4]=E*d-S,t[8]=c*p,t[1]=c*v,t[5]=c*m,t[9]=-d,t[2]=S*d-E,t[6]=M+y*d,t[10]=c*f}else if(e.order==="ZXY"){const y=f*m,S=f*v,E=p*m,M=p*v;t[0]=y-M*d,t[4]=-c*v,t[8]=E+S*d,t[1]=S+E*d,t[5]=c*m,t[9]=M-y*d,t[2]=-c*p,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const y=c*m,S=c*v,E=d*m,M=d*v;t[0]=f*m,t[4]=E*p-S,t[8]=y*p+M,t[1]=f*v,t[5]=M*p+y,t[9]=S*p-E,t[2]=-p,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const y=c*f,S=c*p,E=d*f,M=d*p;t[0]=f*m,t[4]=M-y*v,t[8]=E*v+S,t[1]=v,t[5]=c*m,t[9]=-d*m,t[2]=-p*m,t[6]=S*v+E,t[10]=y-M*v}else if(e.order==="XZY"){const y=c*f,S=c*p,E=d*f,M=d*p;t[0]=f*m,t[4]=-v,t[8]=p*m,t[1]=y*v+M,t[5]=c*m,t[9]=S*v-E,t[2]=E*v-S,t[6]=d*m,t[10]=M*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QE,e,eM)}lookAt(e,t,o){const s=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Bi.crossVectors(o,Qn),Bi.lengthSq()===0&&(Math.abs(o.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Bi.crossVectors(o,Qn)),Bi.normalize(),tu.crossVectors(Qn,Bi),s[0]=Bi.x,s[4]=tu.x,s[8]=Qn.x,s[1]=Bi.y,s[5]=tu.y,s[9]=Qn.y,s[2]=Bi.z,s[6]=tu.z,s[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,s=t.elements,l=this.elements,c=o[0],d=o[4],f=o[8],p=o[12],m=o[1],v=o[5],y=o[9],S=o[13],E=o[2],M=o[6],x=o[10],_=o[14],L=o[3],P=o[7],A=o[11],G=o[15],N=s[0],k=s[4],W=s[8],b=s[12],C=s[1],V=s[5],ae=s[9],Z=s[13],J=s[2],fe=s[6],ue=s[10],he=s[14],z=s[3],de=s[7],le=s[11],F=s[15];return l[0]=c*N+d*C+f*J+p*z,l[4]=c*k+d*V+f*fe+p*de,l[8]=c*W+d*ae+f*ue+p*le,l[12]=c*b+d*Z+f*he+p*F,l[1]=m*N+v*C+y*J+S*z,l[5]=m*k+v*V+y*fe+S*de,l[9]=m*W+v*ae+y*ue+S*le,l[13]=m*b+v*Z+y*he+S*F,l[2]=E*N+M*C+x*J+_*z,l[6]=E*k+M*V+x*fe+_*de,l[10]=E*W+M*ae+x*ue+_*le,l[14]=E*b+M*Z+x*he+_*F,l[3]=L*N+P*C+A*J+G*z,l[7]=L*k+P*V+A*fe+G*de,l[11]=L*W+P*ae+A*ue+G*le,l[15]=L*b+P*Z+A*he+G*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[4],s=e[8],l=e[12],c=e[1],d=e[5],f=e[9],p=e[13],m=e[2],v=e[6],y=e[10],S=e[14],E=e[3],M=e[7],x=e[11],_=e[15];return E*(+l*f*v-s*p*v-l*d*y+o*p*y+s*d*S-o*f*S)+M*(+t*f*S-t*p*y+l*c*y-s*c*S+s*p*m-l*f*m)+x*(+t*p*v-t*d*S-l*c*v+o*c*S+l*d*m-o*p*m)+_*(-s*d*m-t*f*v+t*d*y+s*c*v-o*c*y+o*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,o){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=o),this}invert(){const e=this.elements,t=e[0],o=e[1],s=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],m=e[8],v=e[9],y=e[10],S=e[11],E=e[12],M=e[13],x=e[14],_=e[15],L=v*x*p-M*y*p+M*f*S-d*x*S-v*f*_+d*y*_,P=E*y*p-m*x*p-E*f*S+c*x*S+m*f*_-c*y*_,A=m*M*p-E*v*p+E*d*S-c*M*S-m*d*_+c*v*_,G=E*v*f-m*M*f-E*d*y+c*M*y+m*d*x-c*v*x,N=t*L+o*P+s*A+l*G;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/N;return e[0]=L*k,e[1]=(M*y*l-v*x*l-M*s*S+o*x*S+v*s*_-o*y*_)*k,e[2]=(d*x*l-M*f*l+M*s*p-o*x*p-d*s*_+o*f*_)*k,e[3]=(v*f*l-d*y*l-v*s*p+o*y*p+d*s*S-o*f*S)*k,e[4]=P*k,e[5]=(m*x*l-E*y*l+E*s*S-t*x*S-m*s*_+t*y*_)*k,e[6]=(E*f*l-c*x*l-E*s*p+t*x*p+c*s*_-t*f*_)*k,e[7]=(c*y*l-m*f*l+m*s*p-t*y*p-c*s*S+t*f*S)*k,e[8]=A*k,e[9]=(E*v*l-m*M*l-E*o*S+t*M*S+m*o*_-t*v*_)*k,e[10]=(c*M*l-E*d*l+E*o*p-t*M*p-c*o*_+t*d*_)*k,e[11]=(m*d*l-c*v*l-m*o*p+t*v*p+c*o*S-t*d*S)*k,e[12]=G*k,e[13]=(m*M*s-E*v*s+E*o*y-t*M*y-m*o*x+t*v*x)*k,e[14]=(E*d*s-c*M*s-E*o*f+t*M*f+c*o*x-t*d*x)*k,e[15]=(c*v*s-m*d*s+m*o*f-t*v*f-c*o*y+t*d*y)*k,this}scale(e){const t=this.elements,o=e.x,s=e.y,l=e.z;return t[0]*=o,t[4]*=s,t[8]*=l,t[1]*=o,t[5]*=s,t[9]*=l,t[2]*=o,t[6]*=s,t[10]*=l,t[3]*=o,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,o,s))}makeTranslation(e,t,o){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,o,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,t,-o,0,0,o,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,0,o,0,0,1,0,0,-o,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,0,o,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const o=Math.cos(t),s=Math.sin(t),l=1-o,c=e.x,d=e.y,f=e.z,p=l*c,m=l*d;return this.set(p*c+o,p*d-s*f,p*f+s*d,0,p*d+s*f,m*d+o,m*f-s*c,0,p*f-s*d,m*f+s*c,l*f*f+o,0,0,0,0,1),this}makeScale(e,t,o){return this.set(e,0,0,0,0,t,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,t,o,s,l,c){return this.set(1,o,l,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,o){const s=this.elements,l=t._x,c=t._y,d=t._z,f=t._w,p=l+l,m=c+c,v=d+d,y=l*p,S=l*m,E=l*v,M=c*m,x=c*v,_=d*v,L=f*p,P=f*m,A=f*v,G=o.x,N=o.y,k=o.z;return s[0]=(1-(M+_))*G,s[1]=(S+A)*G,s[2]=(E-P)*G,s[3]=0,s[4]=(S-A)*N,s[5]=(1-(y+_))*N,s[6]=(x+L)*N,s[7]=0,s[8]=(E+P)*k,s[9]=(x-L)*k,s[10]=(1-(y+M))*k,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,o){const s=this.elements;let l=Jo.set(s[0],s[1],s[2]).length();const c=Jo.set(s[4],s[5],s[6]).length(),d=Jo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),e.x=s[12],e.y=s[13],e.z=s[14],yr.copy(this);const p=1/l,m=1/c,v=1/d;return yr.elements[0]*=p,yr.elements[1]*=p,yr.elements[2]*=p,yr.elements[4]*=m,yr.elements[5]*=m,yr.elements[6]*=m,yr.elements[8]*=v,yr.elements[9]*=v,yr.elements[10]*=v,t.setFromRotationMatrix(yr),o.x=l,o.y=c,o.z=d,this}makePerspective(e,t,o,s,l,c,d=ui){const f=this.elements,p=2*l/(t-e),m=2*l/(o-s),v=(t+e)/(t-e),y=(o+s)/(o-s);let S,E;if(d===ui)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(d===Nu)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=m,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,o,s,l,c,d=ui){const f=this.elements,p=1/(t-e),m=1/(o-s),v=1/(c-l),y=(t+e)*p,S=(o+s)*m;let E,M;if(d===ui)E=(c+l)*v,M=-2*v;else if(d===Nu)E=l*v,M=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-y,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=M,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,o=e.elements;for(let s=0;s<16;s++)if(t[s]!==o[s])return!1;return!0}fromArray(e,t=0){for(let o=0;o<16;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e[t+9]=o[9],e[t+10]=o[10],e[t+11]=o[11],e[t+12]=o[12],e[t+13]=o[13],e[t+14]=o[14],e[t+15]=o[15],e}}const Jo=new ie,yr=new Zt,QE=new ie(0,0,0),eM=new ie(1,1,1),Bi=new ie,tu=new ie,Qn=new ie,Ng=new Zt,Ig=new Ia;class kn{constructor(e=0,t=0,o=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=o,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,o,s=this._order){return this._x=e,this._y=t,this._z=o,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,o=!0){const s=e.elements,l=s[0],c=s[4],d=s[8],f=s[1],p=s[5],m=s[9],v=s[2],y=s[6],S=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Ct(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,o){return Ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ng,t,o)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ig.setFromEuler(this),this.setFromQuaternion(Ig,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class D_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tM=0;const Fg=new ie,Qo=new Ia,ni=new Zt,nu=new ie,ua=new ie,nM=new ie,rM=new Ia,kg=new ie(1,0,0),Og=new ie(0,1,0),Bg=new ie(0,0,1),zg={type:"added"},iM={type:"removed"},es={type:"childadded",child:null},zd={type:"childremoved",child:null};class bn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new ie,t=new kn,o=new Ia,s=new ie(1,1,1);function l(){o.setFromEuler(t,!1)}function c(){t.setFromQuaternion(o,void 0,!1)}t._onChange(l),o._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new _t}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qo.setFromAxisAngle(e,t),this.quaternion.multiply(Qo),this}rotateOnWorldAxis(e,t){return Qo.setFromAxisAngle(e,t),this.quaternion.premultiply(Qo),this}rotateX(e){return this.rotateOnAxis(kg,e)}rotateY(e){return this.rotateOnAxis(Og,e)}rotateZ(e){return this.rotateOnAxis(Bg,e)}translateOnAxis(e,t){return Fg.copy(e).applyQuaternion(this.quaternion),this.position.add(Fg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kg,e)}translateY(e){return this.translateOnAxis(Og,e)}translateZ(e){return this.translateOnAxis(Bg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,o){e.isVector3?nu.copy(e):nu.set(e,t,o);const s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(ua,nu,this.up):ni.lookAt(nu,ua,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),Qo.setFromRotationMatrix(ni),this.quaternion.premultiply(Qo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zg),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iM),zd.child=e,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zg),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let o=0,s=this.children.length;o<s;o++){const c=this.children[o].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,o=[]){this[e]===t&&o.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(e,t,o);return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,nM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,rM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let o=0,s=t.length;o<s;o++)t[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let o=0,s=t.length;o<s;o++)t[o].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let o=0,s=t.length;o<s;o++)t[o].updateMatrixWorld(e)}updateWorldMatrix(e,t){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",o={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,m=f.length;p<m;p++){const v=f[p];l(e.shapes,v)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));s.material=d}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];s.animations.push(l(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),p=c(e.textures),m=c(e.images),v=c(e.shapes),y=c(e.skeletons),S=c(e.animations),E=c(e.nodes);d.length>0&&(o.geometries=d),f.length>0&&(o.materials=f),p.length>0&&(o.textures=p),m.length>0&&(o.images=m),v.length>0&&(o.shapes=v),y.length>0&&(o.skeletons=y),S.length>0&&(o.animations=S),E.length>0&&(o.nodes=E)}return o.object=s,o;function c(d){const f=[];for(const p in d){const m=d[p];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let o=0;o<e.children.length;o++){const s=e.children[o];this.add(s.clone())}return this}}bn.DEFAULT_UP=new ie(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sr=new ie,ri=new ie,Hd=new ie,ii=new ie,ts=new ie,ns=new ie,Hg=new ie,Vd=new ie,Gd=new ie,Wd=new ie,jd=new Kt,Xd=new Kt,$d=new Kt;class Er{constructor(e=new ie,t=new ie,o=new ie){this.a=e,this.b=t,this.c=o}static getNormal(e,t,o,s){s.subVectors(o,t),Sr.subVectors(e,t),s.cross(Sr);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,o,s,l){Sr.subVectors(s,t),ri.subVectors(o,t),Hd.subVectors(e,t);const c=Sr.dot(Sr),d=Sr.dot(ri),f=Sr.dot(Hd),p=ri.dot(ri),m=ri.dot(Hd),v=c*p-d*d;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(p*f-d*m)*y,E=(c*m-d*f)*y;return l.set(1-S-E,E,S)}static containsPoint(e,t,o,s){return this.getBarycoord(e,t,o,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,o,s,l,c,d,f){return this.getBarycoord(e,t,o,s,ii)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,ii.x),f.addScaledVector(c,ii.y),f.addScaledVector(d,ii.z),f)}static getInterpolatedAttribute(e,t,o,s,l,c){return jd.setScalar(0),Xd.setScalar(0),$d.setScalar(0),jd.fromBufferAttribute(e,t),Xd.fromBufferAttribute(e,o),$d.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(jd,l.x),c.addScaledVector(Xd,l.y),c.addScaledVector($d,l.z),c}static isFrontFacing(e,t,o,s){return Sr.subVectors(o,t),ri.subVectors(e,t),Sr.cross(ri).dot(s)<0}set(e,t,o){return this.a.copy(e),this.b.copy(t),this.c.copy(o),this}setFromPointsAndIndices(e,t,o,s){return this.a.copy(e[t]),this.b.copy(e[o]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,o,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sr.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Sr.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Er.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Er.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,o,s,l){return Er.getInterpolation(e,this.a,this.b,this.c,t,o,s,l)}containsPoint(e){return Er.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Er.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const o=this.a,s=this.b,l=this.c;let c,d;ts.subVectors(s,o),ns.subVectors(l,o),Vd.subVectors(e,o);const f=ts.dot(Vd),p=ns.dot(Vd);if(f<=0&&p<=0)return t.copy(o);Gd.subVectors(e,s);const m=ts.dot(Gd),v=ns.dot(Gd);if(m>=0&&v<=m)return t.copy(s);const y=f*v-m*p;if(y<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(o).addScaledVector(ts,c);Wd.subVectors(e,l);const S=ts.dot(Wd),E=ns.dot(Wd);if(E>=0&&S<=E)return t.copy(l);const M=S*p-f*E;if(M<=0&&p>=0&&E<=0)return d=p/(p-E),t.copy(o).addScaledVector(ns,d);const x=m*E-S*v;if(x<=0&&v-m>=0&&S-E>=0)return Hg.subVectors(l,s),d=(v-m)/(v-m+(S-E)),t.copy(s).addScaledVector(Hg,d);const _=1/(x+M+y);return c=M*_,d=y*_,t.copy(o).addScaledVector(ts,c).addScaledVector(ns,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const U_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ru={h:0,s:0,l:0};function Yd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Nt{constructor(e,t,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,o)}set(e,t,o){if(t===void 0&&o===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,o);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,o,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=o,Lt.colorSpaceToWorking(this,s),this}setHSL(e,t,o,s=Lt.workingColorSpace){if(e=wh(e,1),t=Ct(t,0,1),o=Ct(o,0,1),t===0)this.r=this.g=this.b=o;else{const l=o<=.5?o*(1+t):o+t-o*t,c=2*o-l;this.r=Yd(c,l,e+1/3),this.g=Yd(c,l,e),this.b=Yd(c,l,e-1/3)}return Lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Fn){function o(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=s[1],d=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return o(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return o(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return o(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const o=U_[e.toLowerCase()];return o!==void 0?this.setHex(o,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Lt.workingToColorSpace(An.copy(this),e),Math.round(Ct(An.r*255,0,255))*65536+Math.round(Ct(An.g*255,0,255))*256+Math.round(Ct(An.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(An.copy(this),t);const o=An.r,s=An.g,l=An.b,c=Math.max(o,s,l),d=Math.min(o,s,l);let f,p;const m=(d+c)/2;if(d===c)f=0,p=0;else{const v=c-d;switch(p=m<=.5?v/(c+d):v/(2-c-d),c){case o:f=(s-l)/v+(s<l?6:0);break;case s:f=(l-o)/v+2;break;case l:f=(o-s)/v+4;break}f/=6}return e.h=f,e.s=p,e.l=m,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Fn){Lt.workingToColorSpace(An.copy(this),e);const t=An.r,o=An.g,s=An.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${o.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(o*255)},${Math.round(s*255)})`}offsetHSL(e,t,o){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+o)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,o){return this.r=e.r+(t.r-e.r)*o,this.g=e.g+(t.g-e.g)*o,this.b=e.b+(t.b-e.b)*o,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(ru);const o=xa(zi.h,ru.h,t),s=xa(zi.s,ru.s,t),l=xa(zi.l,ru.l,t);return this.setHSL(o,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,o=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*o+l[6]*s,this.g=l[1]*t+l[4]*o+l[7]*s,this.b=l[2]*t+l[5]*o+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Nt;Nt.NAMES=U_;let oM=0;class zu extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=fs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_f,this.blendDst=xf,this.blendEquation=mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(o):s&&s.isVector3&&o&&o.isVector3?s.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const o={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.shadowSide!==null&&(o.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(o.blending=this.blending),this.side!==Wi&&(o.side=this.side),this.vertexColors===!0&&(o.vertexColors=!0),this.opacity<1&&(o.opacity=this.opacity),this.transparent===!0&&(o.transparent=!0),this.blendSrc!==_f&&(o.blendSrc=this.blendSrc),this.blendDst!==xf&&(o.blendDst=this.blendDst),this.blendEquation!==mo&&(o.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(o.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(o.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(o.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(o.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(o.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(o.depthFunc=this.depthFunc),this.depthTest===!1&&(o.depthTest=this.depthTest),this.depthWrite===!1&&(o.depthWrite=this.depthWrite),this.colorWrite===!1&&(o.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(o.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cg&&(o.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(o.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(o.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$o&&(o.stencilFail=this.stencilFail),this.stencilZFail!==$o&&(o.stencilZFail=this.stencilZFail),this.stencilZPass!==$o&&(o.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(o.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(o.rotation=this.rotation),this.polygonOffset===!0&&(o.polygonOffset=!0),this.polygonOffsetFactor!==0&&(o.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(o.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(o.linewidth=this.linewidth),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.dithering===!0&&(o.dithering=!0),this.alphaTest>0&&(o.alphaTest=this.alphaTest),this.alphaHash===!0&&(o.alphaHash=!0),this.alphaToCoverage===!0&&(o.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(o.premultipliedAlpha=!0),this.forceSinglePass===!0&&(o.forceSinglePass=!0),this.wireframe===!0&&(o.wireframe=!0),this.wireframeLinewidth>1&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(o.flatShading=!0),this.visible===!1&&(o.visible=!1),this.toneMapped===!1&&(o.toneMapped=!1),this.fog===!1&&(o.fog=!1),Object.keys(this.userData).length>0&&(o.userData=this.userData);function s(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}if(t){const l=s(e.textures),c=s(e.images);l.length>0&&(o.textures=l),c.length>0&&(o.images=c)}return o}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let o=null;if(t!==null){const s=t.length;o=new Array(s);for(let l=0;l!==s;++l)o[l]=t[l].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rh extends zu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=x_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new ie,iu=new Dt;let sM=0;class Hr{constructor(e,t,o=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=o,this.usage=Rg,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,o){e*=this.itemSize,o*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[o+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,o=this.count;t<o;t++)iu.fromBufferAttribute(this,t),iu.applyMatrix3(e),this.setXY(t,iu.x,iu.y);else if(this.itemSize===3)for(let t=0,o=this.count;t<o;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,o=this.count;t<o;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,o=this.count;t<o;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,o=this.count;t<o;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let o=this.array[e*this.itemSize+t];return this.normalized&&(o=us(o,this.array)),o}setComponent(e,t,o){return this.normalized&&(o=Nn(o,this.array)),this.array[e*this.itemSize+t]=o,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=us(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=us(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=us(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,o){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),o=Nn(o,this.array)),this.array[e+0]=t,this.array[e+1]=o,this}setXYZ(e,t,o,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),o=Nn(o,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=s,this}setXYZW(e,t,o,s,l){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),o=Nn(o,this.array),s=Nn(s,this.array),l=Nn(l,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rg&&(e.usage=this.usage),e}}class N_ extends Hr{constructor(e,t,o){super(new Uint16Array(e),t,o)}}class I_ extends Hr{constructor(e,t,o){super(new Uint32Array(e),t,o)}}class yo extends Hr{constructor(e,t,o){super(new Float32Array(e),t,o)}}let aM=0;const lr=new Zt,qd=new bn,rs=new ie,er=new Fa,ca=new Fa,pn=new ie;class Mo extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P_(e)?I_:N_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,o=0){this.groups.push({start:e,count:t,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const o=this.attributes.normal;if(o!==void 0){const l=new _t().getNormalMatrix(e);o.applyNormalMatrix(l),o.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return lr.makeRotationFromQuaternion(e),this.applyMatrix4(lr),this}rotateX(e){return lr.makeRotationX(e),this.applyMatrix4(lr),this}rotateY(e){return lr.makeRotationY(e),this.applyMatrix4(lr),this}rotateZ(e){return lr.makeRotationZ(e),this.applyMatrix4(lr),this}translate(e,t,o){return lr.makeTranslation(e,t,o),this.applyMatrix4(lr),this}scale(e,t,o){return lr.makeScale(e,t,o),this.applyMatrix4(lr),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const o=[];for(let s=0,l=e.length;s<l;s++){const c=e[s];o.push(c.x,c.y,c.z||0)}this.setAttribute("position",new yo(o,3))}else{const o=Math.min(e.length,t.count);for(let s=0;s<o;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const l=t[o];er.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,er.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,er.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(er.min),this.boundingBox.expandByPoint(er.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ch);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const o=this.boundingSphere.center;if(er.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];ca.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors(er.min,ca.min),er.expandByPoint(pn),pn.addVectors(er.max,ca.max),er.expandByPoint(pn)):(er.expandByPoint(ca.min),er.expandByPoint(ca.max))}er.getCenter(o);let s=0;for(let l=0,c=e.count;l<c;l++)pn.fromBufferAttribute(e,l),s=Math.max(s,o.distanceToSquared(pn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,m=d.count;p<m;p++)pn.fromBufferAttribute(d,p),f&&(rs.fromBufferAttribute(e,p),pn.add(rs)),s=Math.max(s,o.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const o=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hr(new Float32Array(4*o.count),4));const c=this.getAttribute("tangent"),d=[],f=[];for(let W=0;W<o.count;W++)d[W]=new ie,f[W]=new ie;const p=new ie,m=new ie,v=new ie,y=new Dt,S=new Dt,E=new Dt,M=new ie,x=new ie;function _(W,b,C){p.fromBufferAttribute(o,W),m.fromBufferAttribute(o,b),v.fromBufferAttribute(o,C),y.fromBufferAttribute(l,W),S.fromBufferAttribute(l,b),E.fromBufferAttribute(l,C),m.sub(p),v.sub(p),S.sub(y),E.sub(y);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(V),x.copy(v).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(V),d[W].add(M),d[b].add(M),d[C].add(M),f[W].add(x),f[b].add(x),f[C].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let W=0,b=L.length;W<b;++W){const C=L[W],V=C.start,ae=C.count;for(let Z=V,J=V+ae;Z<J;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const P=new ie,A=new ie,G=new ie,N=new ie;function k(W){G.fromBufferAttribute(s,W),N.copy(G);const b=d[W];P.copy(b),P.sub(G.multiplyScalar(G.dot(b))).normalize(),A.crossVectors(N,b);const V=A.dot(f[W])<0?-1:1;c.setXYZW(W,P.x,P.y,P.z,V)}for(let W=0,b=L.length;W<b;++W){const C=L[W],V=C.start,ae=C.count;for(let Z=V,J=V+ae;Z<J;Z+=3)k(e.getX(Z+0)),k(e.getX(Z+1)),k(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new Hr(new Float32Array(t.count*3),3),this.setAttribute("normal",o);else for(let y=0,S=o.count;y<S;y++)o.setXYZ(y,0,0,0);const s=new ie,l=new ie,c=new ie,d=new ie,f=new ie,p=new ie,m=new ie,v=new ie;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),M=e.getX(y+1),x=e.getX(y+2);s.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,x),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),d.fromBufferAttribute(o,E),f.fromBufferAttribute(o,M),p.fromBufferAttribute(o,x),d.add(m),f.add(m),p.add(m),o.setXYZ(E,d.x,d.y,d.z),o.setXYZ(M,f.x,f.y,f.z),o.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)s.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),c.fromBufferAttribute(t,y+2),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),o.setXYZ(y+0,m.x,m.y,m.z),o.setXYZ(y+1,m.x,m.y,m.z),o.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,o=e.count;t<o;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(d,f){const p=d.array,m=d.itemSize,v=d.normalized,y=new p.constructor(f.length*m);let S=0,E=0;for(let M=0,x=f.length;M<x;M++){d.isInterleavedBufferAttribute?S=f[M]*d.data.stride+d.offset:S=f[M]*m;for(let _=0;_<m;_++)y[E++]=p[S++]}return new Hr(y,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mo,o=this.index.array,s=this.attributes;for(const d in s){const f=s[d],p=e(f,o);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let m=0,v=p.length;m<v;m++){const y=p[m],S=e(y,o);f.push(S)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const p=c[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const o=this.attributes;for(const f in o){const p=o[f];e.data.attributes[f]=p.toJSON(e.data)}const s={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],m=[];for(let v=0,y=p.length;v<y;v++){const S=p[v];m.push(S.toJSON(e.data))}m.length>0&&(s[f]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const o=e.index;o!==null&&this.setIndex(o.clone());const s=e.attributes;for(const p in s){const m=s[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],v=l[p];for(let y=0,S=v.length;y<S;y++)m.push(v[y].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vg=new Zt,ao=new JE,ou=new Ch,Gg=new ie,su=new ie,au=new ie,lu=new ie,Kd=new ie,uu=new ie,Wg=new ie,cu=new ie;class Or extends bn{constructor(e=new Mo,t=new Rh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,o=Object.keys(t);if(o.length>0){const s=t[o[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const d=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const o=this.geometry,s=o.attributes.position,l=o.morphAttributes.position,c=o.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(l&&d){uu.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const m=d[f],v=l[f];m!==0&&(Kd.fromBufferAttribute(v,e),c?uu.addScaledVector(Kd,m):uu.addScaledVector(Kd.sub(t),m))}t.add(uu)}return t}raycast(e,t){const o=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),ou.copy(o.boundingSphere),ou.applyMatrix4(l),ao.copy(e.ray).recast(e.near),!(ou.containsPoint(ao.origin)===!1&&(ao.intersectSphere(ou,Gg)===null||ao.origin.distanceToSquared(Gg)>(e.far-e.near)**2))&&(Vg.copy(l).invert(),ao.copy(e.ray).applyMatrix4(Vg),!(o.boundingBox!==null&&ao.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(e,t,ao)))}_computeIntersections(e,t,o){let s;const l=this.geometry,c=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,M=y.length;E<M;E++){const x=y[E],_=c[x.materialIndex],L=Math.max(x.start,S.start),P=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let A=L,G=P;A<G;A+=3){const N=d.getX(A),k=d.getX(A+1),W=d.getX(A+2);s=du(this,_,e,o,p,m,v,N,k,W),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let x=E,_=M;x<_;x+=3){const L=d.getX(x),P=d.getX(x+1),A=d.getX(x+2);s=du(this,c,e,o,p,m,v,L,P,A),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,M=y.length;E<M;E++){const x=y[E],_=c[x.materialIndex],L=Math.max(x.start,S.start),P=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let A=L,G=P;A<G;A+=3){const N=A,k=A+1,W=A+2;s=du(this,_,e,o,p,m,v,N,k,W),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let x=E,_=M;x<_;x+=3){const L=x,P=x+1,A=x+2;s=du(this,c,e,o,p,m,v,L,P,A),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function lM(r,e,t,o,s,l,c,d){let f;if(e.side===$n?f=o.intersectTriangle(c,l,s,!0,d):f=o.intersectTriangle(s,l,c,e.side===Wi,d),f===null)return null;cu.copy(d),cu.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(cu);return p<t.near||p>t.far?null:{distance:p,point:cu.clone(),object:r}}function du(r,e,t,o,s,l,c,d,f,p){r.getVertexPosition(d,su),r.getVertexPosition(f,au),r.getVertexPosition(p,lu);const m=lM(r,e,t,o,su,au,lu,Wg);if(m){const v=new ie;Er.getBarycoord(Wg,su,au,lu,v),s&&(m.uv=Er.getInterpolatedAttribute(s,d,f,p,v,new Dt)),l&&(m.uv1=Er.getInterpolatedAttribute(l,d,f,p,v,new Dt)),c&&(m.normal=Er.getInterpolatedAttribute(c,d,f,p,v,new ie),m.normal.dot(o.direction)>0&&m.normal.multiplyScalar(-1));const y={a:d,b:f,c:p,normal:new ie,materialIndex:0};Er.getNormal(su,au,lu,y.normal),m.face=y,m.barycoord=v}return m}class Ts extends Mo{constructor(e=1,t=1,o=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:o,widthSegments:s,heightSegments:l,depthSegments:c};const d=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const f=[],p=[],m=[],v=[];let y=0,S=0;E("z","y","x",-1,-1,o,t,e,c,l,0),E("z","y","x",1,-1,o,t,-e,c,l,1),E("x","z","y",1,1,e,o,t,s,c,2),E("x","z","y",1,-1,e,o,-t,s,c,3),E("x","y","z",1,-1,e,t,o,s,l,4),E("x","y","z",-1,-1,e,t,-o,s,l,5),this.setIndex(f),this.setAttribute("position",new yo(p,3)),this.setAttribute("normal",new yo(m,3)),this.setAttribute("uv",new yo(v,2));function E(M,x,_,L,P,A,G,N,k,W,b){const C=A/k,V=G/W,ae=A/2,Z=G/2,J=N/2,fe=k+1,ue=W+1;let he=0,z=0;const de=new ie;for(let le=0;le<ue;le++){const F=le*V-Z;for(let re=0;re<fe;re++){const ke=re*C-ae;de[M]=ke*L,de[x]=F*P,de[_]=J,p.push(de.x,de.y,de.z),de[M]=0,de[x]=0,de[_]=N>0?1:-1,m.push(de.x,de.y,de.z),v.push(re/k),v.push(1-le/W),he+=1}}for(let le=0;le<W;le++)for(let F=0;F<k;F++){const re=y+F+fe*le,ke=y+F+fe*(le+1),te=y+(F+1)+fe*(le+1),me=y+(F+1)+fe*le;f.push(re,ke,me),f.push(ke,te,me),z+=6}d.addGroup(S,z,b),S+=z,y+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(r){const e={};for(const t in r){e[t]={};for(const o in r[t]){const s=r[t][o];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][o]=null):e[t][o]=s.clone():Array.isArray(s)?e[t][o]=s.slice():e[t][o]=s}}return e}function In(r){const e={};for(let t=0;t<r.length;t++){const o=xs(r[t]);for(const s in o)e[s]=o[s]}return e}function uM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function F_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const cM={clone:xs,merge:In};var dM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends zu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dM,this.fragmentShader=fM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=uM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const o={};for(const s in this.extensions)this.extensions[s]===!0&&(o[s]=!0);return Object.keys(o).length>0&&(t.extensions=o),t}}class k_ extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new ie,jg=new Dt,Xg=new Dt;class dr extends k_{constructor(e=50,t=1,o=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,o){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,jg,Xg),t.subVectors(Xg,jg)}setViewOffset(e,t,o,s,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_a*.5*this.fov)/this.zoom,o=2*t,s=this.aspect*o,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,p=c.fullHeight;l+=c.offsetX*s/f,t-=c.offsetY*o/p,s*=c.width/f,o*=c.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-o,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const is=-90,os=1;class hM extends bn{constructor(e,t,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dr(is,os,e,t);s.layers=this.layers,this.add(s);const l=new dr(is,os,e,t);l.layers=this.layers,this.add(l);const c=new dr(is,os,e,t);c.layers=this.layers,this.add(c);const d=new dr(is,os,e,t);d.layers=this.layers,this.add(d);const f=new dr(is,os,e,t);f.layers=this.layers,this.add(f);const p=new dr(is,os,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[o,s,l,c,d,f]=t;for(const p of t)this.remove(p);if(e===ui)o.up.set(0,1,0),o.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Nu)o.up.set(0,-1,0),o.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:o,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,f,p,m]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=o.texture.generateMipmaps;o.texture.generateMipmaps=!1,e.setRenderTarget(o,0,s),e.render(t,l),e.setRenderTarget(o,1,s),e.render(t,c),e.setRenderTarget(o,2,s),e.render(t,d),e.setRenderTarget(o,3,s),e.render(t,f),e.setRenderTarget(o,4,s),e.render(t,p),o.texture.generateMipmaps=M,e.setRenderTarget(o,5,s),e.render(t,m),e.setRenderTarget(v,y,S),e.xr.enabled=E,o.texture.needsPMREMUpdate=!0}}class O_ extends On{constructor(e=[],t=gs,o,s,l,c,d,f,p,m){super(e,t,o,s,l,c,d,f,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pM extends Eo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const o={width:e,height:e,depth:1},s=[o,o,o,o,o,o];this.texture=new O_(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const o={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ts(5,5,5),l=new ji({name:"CubemapFromEquirect",uniforms:xs(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:$n,blending:Gi});l.uniforms.tEquirect.value=t;const c=new Or(s,l),d=t.minFilter;return t.minFilter===_o&&(t.minFilter=kr),new hM(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,o=!0,s=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,o,s);e.setRenderTarget(l)}}class ma extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mM={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const o of e.hand.values())this._getHandJoint(t,o)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,o){let s=null,l=null,c=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,o),_=this._getHandJoint(p,M);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=m.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,o),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(s=t.getPose(e.targetRaySpace,o),s===null&&l!==null&&(s=l),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(mM)))}return d!==null&&(d.visible=s!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const o=new ma;o.matrixAutoUpdate=!1,o.visible=!1,e.joints[t.jointName]=o,e.add(o)}return e.joints[t.jointName]}}class gM extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Jd=new ie,vM=new ie,_M=new _t;class fo{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,o,s){return this.normal.set(e,t,o),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,o){const s=Jd.subVectors(o,t).cross(vM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const o=e.delta(Jd),s=this.normal.dot(o);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(o,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return t<0&&o>0||o<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const o=t||_M.getNormalMatrix(e),s=this.coplanarPoint(Jd).applyMatrix4(e),l=this.normal.applyMatrix3(o).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lo=new Ch,xM=new Dt(.5,.5),fu=new ie;class Ah{constructor(e=new fo,t=new fo,o=new fo,s=new fo,l=new fo,c=new fo){this.planes=[e,t,o,s,l,c]}set(e,t,o,s,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(o),d[3].copy(s),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let o=0;o<6;o++)t[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e,t=ui){const o=this.planes,s=e.elements,l=s[0],c=s[1],d=s[2],f=s[3],p=s[4],m=s[5],v=s[6],y=s[7],S=s[8],E=s[9],M=s[10],x=s[11],_=s[12],L=s[13],P=s[14],A=s[15];if(o[0].setComponents(f-l,y-p,x-S,A-_).normalize(),o[1].setComponents(f+l,y+p,x+S,A+_).normalize(),o[2].setComponents(f+c,y+m,x+E,A+L).normalize(),o[3].setComponents(f-c,y-m,x-E,A-L).normalize(),o[4].setComponents(f-d,y-v,x-M,A-P).normalize(),t===ui)o[5].setComponents(f+d,y+v,x+M,A+P).normalize();else if(t===Nu)o[5].setComponents(d,v,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lo)}intersectsSprite(e){lo.center.set(0,0,0);const t=xM.distanceTo(e.center);return lo.radius=.7071067811865476+t,lo.applyMatrix4(e.matrixWorld),this.intersectsSphere(lo)}intersectsSphere(e){const t=this.planes,o=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(o)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let o=0;o<6;o++){const s=t[o];if(fu.x=s.normal.x>0?e.max.x:e.min.x,fu.y=s.normal.y>0?e.max.y:e.min.y,fu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let o=0;o<6;o++)if(t[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class B_ extends On{constructor(e,t,o=So,s,l,c,d=yn,f=yn,p,m=Ta,v=1){if(m!==Ta&&m!==Ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:v};super(y,s,l,c,d,f,m,o,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Th(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Hu extends Mo{constructor(e=1,t=1,o=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:o,heightSegments:s};const l=e/2,c=t/2,d=Math.floor(o),f=Math.floor(s),p=d+1,m=f+1,v=e/d,y=t/f,S=[],E=[],M=[],x=[];for(let _=0;_<m;_++){const L=_*y-c;for(let P=0;P<p;P++){const A=P*v-l;E.push(A,-L,0),M.push(0,0,1),x.push(P/d),x.push(1-_/f)}}for(let _=0;_<f;_++)for(let L=0;L<d;L++){const P=L+p*_,A=L+p*(_+1),G=L+1+p*(_+1),N=L+1+p*_;S.push(P,A,N),S.push(A,G,N)}this.setIndex(S),this.setAttribute("position",new yo(E,3)),this.setAttribute("normal",new yo(M,3)),this.setAttribute("uv",new yo(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hu(e.width,e.height,e.widthSegments,e.heightSegments)}}class yM extends zu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SM extends zu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qd={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class EM{constructor(e,t,o){const s=this;let l=!1,c=0,d=0,f;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=o,this.itemStart=function(m){d++,l===!1&&s.onStart!==void 0&&s.onStart(m,c,d),l=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,d),c===d&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,v){return p.push(m,v),this},this.removeHandler=function(m){const v=p.indexOf(m);return v!==-1&&p.splice(v,2),this},this.getHandler=function(m){for(let v=0,y=p.length;v<y;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(m))return E}return null}}}const MM=new EM;class bh{constructor(e){this.manager=e!==void 0?e:MM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const o=this;return new Promise(function(s,l){o.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bh.DEFAULT_MATERIAL_NAME="__DEFAULT";const ss=new WeakMap;class wM extends bh{constructor(e){super(e)}load(e,t,o,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Qd.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let v=ss.get(c);v===void 0&&(v=[],ss.set(c,v)),v.push({onLoad:t,onError:s})}return c}const d=Aa("img");function f(){m(),t&&t(this);const v=ss.get(this)||[];for(let y=0;y<v.length;y++){const S=v[y];S.onLoad&&S.onLoad(this)}ss.delete(this),l.manager.itemEnd(e)}function p(v){m(),s&&s(v),Qd.remove(`image:${e}`);const y=ss.get(this)||[];for(let S=0;S<y.length;S++){const E=y[S];E.onError&&E.onError(v)}ss.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){d.removeEventListener("load",f,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",f,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Qd.add(`image:${e}`,d),l.manager.itemStart(e),d.src=e,d}}class TM extends bh{constructor(e){super(e)}load(e,t,o,s){const l=new On,c=new wM(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){l.image=d,l.needsUpdate=!0,t!==void 0&&t(l)},o,s),l}}class CM extends bn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ef=new Zt,$g=new ie,Yg=new ie;class RM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Gr,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ah,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,o=this.matrix;$g.setFromMatrixPosition(e.matrixWorld),t.position.copy($g),Yg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yg),t.updateMatrixWorld(),ef.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ef),o.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),o.multiply(ef)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class z_ extends k_{constructor(e=-1,t=1,o=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=o,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,o,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=o-e,c=o+e,d=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,d-=m*this.view.offsetY,f=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class AM extends RM{constructor(){super(new z_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bM extends CM{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new AM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class PM extends dr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function qg(r,e,t,o){const s=LM(o);switch(t){case w_:return r*e;case C_:return r*e/s.components*s.byteLength;case Sh:return r*e/s.components*s.byteLength;case R_:return r*e*2/s.components*s.byteLength;case Eh:return r*e*2/s.components*s.byteLength;case T_:return r*e*3/s.components*s.byteLength;case Mr:return r*e*4/s.components*s.byteLength;case Mh:return r*e*4/s.components*s.byteLength;case Mu:case wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Tu:case Cu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lf:case Uf:return Math.max(r,16)*Math.max(e,8)/4;case Pf:case Df:return Math.max(r,8)*Math.max(e,8)/2;case Nf:case If:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ff:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case zf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case $f:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ru:case Zf:case Jf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case A_:case Qf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case eh:case th:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function LM(r){switch(r){case Gr:case S_:return{byteLength:1,components:1};case Ma:case E_:case Na:return{byteLength:2,components:1};case xh:case yh:return{byteLength:2,components:4};case So:case _h:case li:return{byteLength:4,components:1};case M_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);function H_(){let r=null,e=!1,t=null,o=null;function s(l,c){t(l,c),o=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(o=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function DM(r){const e=new WeakMap;function t(d,f){const p=d.array,m=d.usage,v=p.byteLength,y=r.createBuffer();r.bindBuffer(f,y),r.bufferData(f,p,m),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function o(d,f,p){const m=f.array,v=f.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,m);else{v.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<v.length;S++){const E=v[y],M=v[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++y,v[y]=M)}v.length=y+1;for(let S=0,E=v.length;S<E;S++){const M=v[S];r.bufferSubData(p,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(r.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(p.buffer,d,f),p.version=d.version}}return{get:s,remove:l,update:c}}var UM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NM=`#ifdef USE_ALPHAHASH
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
#endif`,IM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BM=`#ifdef USE_AOMAP
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
#endif`,zM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HM=`#ifdef USE_BATCHING
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
#endif`,VM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XM=`#ifdef USE_IRIDESCENCE
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
#endif`,$M=`#ifdef USE_BUMPMAP
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
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nw=`#define PI 3.141592653589793
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
} // validated`,rw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iw=`vec3 transformedNormal = objectNormal;
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
#endif`,ow=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uw="gl_FragColor = linearToOutputTexel( gl_FragColor );",cw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dw=`#ifdef USE_ENVMAP
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
#endif`,fw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hw=`#ifdef USE_ENVMAP
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
#endif`,pw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mw=`#ifdef USE_ENVMAP
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
#endif`,gw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_w=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yw=`#ifdef USE_GRADIENTMAP
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
}`,Sw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ew=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ww=`uniform bool receiveShadow;
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
#endif`,Tw=`#ifdef USE_ENVMAP
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
#endif`,Cw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Aw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pw=`PhysicalMaterial material;
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
#endif`,Lw=`struct PhysicalMaterial {
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
}`,Dw=`
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
#endif`,Uw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ow=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vw=`#if defined( USE_POINTS_UV )
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
#endif`,Gw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ww=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$w=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yw=`#ifdef USE_MORPHTARGETS
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
#endif`,qw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tT=`#ifdef USE_NORMALMAP
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
#endif`,nT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vT=`float getShadowMask() {
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
}`,_T=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xT=`#ifdef USE_SKINNING
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
#endif`,yT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ST=`#ifdef USE_SKINNING
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
#endif`,ET=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CT=`#ifdef USE_TRANSMISSION
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
#endif`,RT=`#ifdef USE_TRANSMISSION
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
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UT=`uniform sampler2D t2D;
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
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`#include <common>
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
}`,BT=`#if DEPTH_PACKING == 3200
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
}`,zT=`#define DISTANCE
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
}`,HT=`#define DISTANCE
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
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`uniform float scale;
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
}`,jT=`uniform vec3 diffuse;
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
}`,XT=`#include <common>
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
}`,$T=`uniform vec3 diffuse;
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
}`,YT=`#define LAMBERT
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
}`,qT=`#define LAMBERT
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
}`,KT=`#define MATCAP
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
}`,ZT=`#define MATCAP
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
}`,JT=`#define NORMAL
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
}`,QT=`#define NORMAL
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
}`,e1=`#define PHONG
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
}`,t1=`#define PHONG
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
}`,n1=`#define STANDARD
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
}`,r1=`#define STANDARD
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
}`,i1=`#define TOON
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
}`,o1=`#define TOON
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
}`,s1=`uniform float size;
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
}`,a1=`uniform vec3 diffuse;
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
}`,l1=`#include <common>
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
}`,u1=`uniform vec3 color;
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
}`,c1=`uniform float rotation;
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
}`,d1=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:UM,alphahash_pars_fragment:NM,alphamap_fragment:IM,alphamap_pars_fragment:FM,alphatest_fragment:kM,alphatest_pars_fragment:OM,aomap_fragment:BM,aomap_pars_fragment:zM,batching_pars_vertex:HM,batching_vertex:VM,begin_vertex:GM,beginnormal_vertex:WM,bsdfs:jM,iridescence_fragment:XM,bumpmap_pars_fragment:$M,clipping_planes_fragment:YM,clipping_planes_pars_fragment:qM,clipping_planes_pars_vertex:KM,clipping_planes_vertex:ZM,color_fragment:JM,color_pars_fragment:QM,color_pars_vertex:ew,color_vertex:tw,common:nw,cube_uv_reflection_fragment:rw,defaultnormal_vertex:iw,displacementmap_pars_vertex:ow,displacementmap_vertex:sw,emissivemap_fragment:aw,emissivemap_pars_fragment:lw,colorspace_fragment:uw,colorspace_pars_fragment:cw,envmap_fragment:dw,envmap_common_pars_fragment:fw,envmap_pars_fragment:hw,envmap_pars_vertex:pw,envmap_physical_pars_fragment:Tw,envmap_vertex:mw,fog_vertex:gw,fog_pars_vertex:vw,fog_fragment:_w,fog_pars_fragment:xw,gradientmap_pars_fragment:yw,lightmap_pars_fragment:Sw,lights_lambert_fragment:Ew,lights_lambert_pars_fragment:Mw,lights_pars_begin:ww,lights_toon_fragment:Cw,lights_toon_pars_fragment:Rw,lights_phong_fragment:Aw,lights_phong_pars_fragment:bw,lights_physical_fragment:Pw,lights_physical_pars_fragment:Lw,lights_fragment_begin:Dw,lights_fragment_maps:Uw,lights_fragment_end:Nw,logdepthbuf_fragment:Iw,logdepthbuf_pars_fragment:Fw,logdepthbuf_pars_vertex:kw,logdepthbuf_vertex:Ow,map_fragment:Bw,map_pars_fragment:zw,map_particle_fragment:Hw,map_particle_pars_fragment:Vw,metalnessmap_fragment:Gw,metalnessmap_pars_fragment:Ww,morphinstance_vertex:jw,morphcolor_vertex:Xw,morphnormal_vertex:$w,morphtarget_pars_vertex:Yw,morphtarget_vertex:qw,normal_fragment_begin:Kw,normal_fragment_maps:Zw,normal_pars_fragment:Jw,normal_pars_vertex:Qw,normal_vertex:eT,normalmap_pars_fragment:tT,clearcoat_normal_fragment_begin:nT,clearcoat_normal_fragment_maps:rT,clearcoat_pars_fragment:iT,iridescence_pars_fragment:oT,opaque_fragment:sT,packing:aT,premultiplied_alpha_fragment:lT,project_vertex:uT,dithering_fragment:cT,dithering_pars_fragment:dT,roughnessmap_fragment:fT,roughnessmap_pars_fragment:hT,shadowmap_pars_fragment:pT,shadowmap_pars_vertex:mT,shadowmap_vertex:gT,shadowmask_pars_fragment:vT,skinbase_vertex:_T,skinning_pars_vertex:xT,skinning_vertex:yT,skinnormal_vertex:ST,specularmap_fragment:ET,specularmap_pars_fragment:MT,tonemapping_fragment:wT,tonemapping_pars_fragment:TT,transmission_fragment:CT,transmission_pars_fragment:RT,uv_pars_fragment:AT,uv_pars_vertex:bT,uv_vertex:PT,worldpos_vertex:LT,background_vert:DT,background_frag:UT,backgroundCube_vert:NT,backgroundCube_frag:IT,cube_vert:FT,cube_frag:kT,depth_vert:OT,depth_frag:BT,distanceRGBA_vert:zT,distanceRGBA_frag:HT,equirect_vert:VT,equirect_frag:GT,linedashed_vert:WT,linedashed_frag:jT,meshbasic_vert:XT,meshbasic_frag:$T,meshlambert_vert:YT,meshlambert_frag:qT,meshmatcap_vert:KT,meshmatcap_frag:ZT,meshnormal_vert:JT,meshnormal_frag:QT,meshphong_vert:e1,meshphong_frag:t1,meshphysical_vert:n1,meshphysical_frag:r1,meshtoon_vert:i1,meshtoon_frag:o1,points_vert:s1,points_frag:a1,shadow_vert:l1,shadow_frag:u1,sprite_vert:c1,sprite_frag:d1},Fe={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Ur={basic:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:In([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:In([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:In([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:In([Fe.points,Fe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:In([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:In([Fe.common,Fe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:In([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:In([Fe.sprite,Fe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:In([Fe.common,Fe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:In([Fe.lights,Fe.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Ur.physical={uniforms:In([Ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const hu={r:0,b:0,g:0},uo=new kn,f1=new Zt;function h1(r,e,t,o,s,l,c){const d=new Nt(0);let f=l===!0?0:1,p,m,v=null,y=0,S=null;function E(P){let A=P.isScene===!0?P.background:null;return A&&A.isTexture&&(A=(P.backgroundBlurriness>0?t:e).get(A)),A}function M(P){let A=!1;const G=E(P);G===null?_(d,f):G&&G.isColor&&(_(G,1),A=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?o.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&o.buffers.color.setClear(0,0,0,0,c),(r.autoClear||A)&&(o.buffers.depth.setTest(!0),o.buffers.depth.setMask(!0),o.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(P,A){const G=E(A);G&&(G.isCubeTexture||G.mapping===Bu)?(m===void 0&&(m=new Or(new Ts(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:xs(Ur.backgroundCube.uniforms),vertexShader:Ur.backgroundCube.vertexShader,fragmentShader:Ur.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,k,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),uo.copy(A.backgroundRotation),uo.x*=-1,uo.y*=-1,uo.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(uo.y*=-1,uo.z*=-1),m.material.uniforms.envMap.value=G,m.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(f1.makeRotationFromEuler(uo)),m.material.toneMapped=Lt.getTransfer(G.colorSpace)!==Ft,(v!==G||y!==G.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,v=G,y=G.version,S=r.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Or(new Hu(2,2),new ji({name:"BackgroundMaterial",uniforms:xs(Ur.background.uniforms),vertexShader:Ur.background.vertexShader,fragmentShader:Ur.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(G.colorSpace)!==Ft,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||y!==G.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,v=G,y=G.version,S=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function _(P,A){P.getRGB(hu,F_(r)),o.buffers.color.setClear(hu.r,hu.g,hu.b,A,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,A=1){d.set(P),f=A,_(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,_(d,f)},render:M,addToRenderList:x,dispose:L}}function p1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),o={},s=y(null);let l=s,c=!1;function d(C,V,ae,Z,J){let fe=!1;const ue=v(Z,ae,V);l!==ue&&(l=ue,p(l.object)),fe=S(C,Z,ae,J),fe&&E(C,Z,ae,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,A(C,V,ae,Z),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function m(C){return r.deleteVertexArray(C)}function v(C,V,ae){const Z=ae.wireframe===!0;let J=o[C.id];J===void 0&&(J={},o[C.id]=J);let fe=J[V.id];fe===void 0&&(fe={},J[V.id]=fe);let ue=fe[Z];return ue===void 0&&(ue=y(f()),fe[Z]=ue),ue}function y(C){const V=[],ae=[],Z=[];for(let J=0;J<t;J++)V[J]=0,ae[J]=0,Z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ae,attributeDivisors:Z,object:C,attributes:{},index:null}}function S(C,V,ae,Z){const J=l.attributes,fe=V.attributes;let ue=0;const he=ae.getAttributes();for(const z in he)if(he[z].location>=0){const le=J[z];let F=fe[z];if(F===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),le===void 0||le.attribute!==F||F&&le.data!==F.data)return!0;ue++}return l.attributesNum!==ue||l.index!==Z}function E(C,V,ae,Z){const J={},fe=V.attributes;let ue=0;const he=ae.getAttributes();for(const z in he)if(he[z].location>=0){let le=fe[z];le===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(le=C.instanceColor));const F={};F.attribute=le,le&&le.data&&(F.data=le.data),J[z]=F,ue++}l.attributes=J,l.attributesNum=ue,l.index=Z}function M(){const C=l.newAttributes;for(let V=0,ae=C.length;V<ae;V++)C[V]=0}function x(C){_(C,0)}function _(C,V){const ae=l.newAttributes,Z=l.enabledAttributes,J=l.attributeDivisors;ae[C]=1,Z[C]===0&&(r.enableVertexAttribArray(C),Z[C]=1),J[C]!==V&&(r.vertexAttribDivisor(C,V),J[C]=V)}function L(){const C=l.newAttributes,V=l.enabledAttributes;for(let ae=0,Z=V.length;ae<Z;ae++)V[ae]!==C[ae]&&(r.disableVertexAttribArray(ae),V[ae]=0)}function P(C,V,ae,Z,J,fe,ue){ue===!0?r.vertexAttribIPointer(C,V,ae,J,fe):r.vertexAttribPointer(C,V,ae,Z,J,fe)}function A(C,V,ae,Z){M();const J=Z.attributes,fe=ae.getAttributes(),ue=V.defaultAttributeValues;for(const he in fe){const z=fe[he];if(z.location>=0){let de=J[he];if(de===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),de!==void 0){const le=de.normalized,F=de.itemSize,re=e.get(de);if(re===void 0)continue;const ke=re.buffer,te=re.type,me=re.bytesPerElement,Ce=te===r.INT||te===r.UNSIGNED_INT||de.gpuType===_h;if(de.isInterleavedBufferAttribute){const Se=de.data,Ae=Se.stride,ne=de.offset;if(Se.isInstancedInterleavedBuffer){for(let _e=0;_e<z.locationSize;_e++)_(z.location+_e,Se.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let _e=0;_e<z.locationSize;_e++)x(z.location+_e);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let _e=0;_e<z.locationSize;_e++)P(z.location+_e,F/z.locationSize,te,le,Ae*me,(ne+F/z.locationSize*_e)*me,Ce)}else{if(de.isInstancedBufferAttribute){for(let Se=0;Se<z.locationSize;Se++)_(z.location+Se,de.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Se=0;Se<z.locationSize;Se++)x(z.location+Se);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let Se=0;Se<z.locationSize;Se++)P(z.location+Se,F/z.locationSize,te,le,F*me,F/z.locationSize*Se*me,Ce)}}else if(ue!==void 0){const le=ue[he];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(z.location,le);break;case 3:r.vertexAttrib3fv(z.location,le);break;case 4:r.vertexAttrib4fv(z.location,le);break;default:r.vertexAttrib1fv(z.location,le)}}}}L()}function G(){W();for(const C in o){const V=o[C];for(const ae in V){const Z=V[ae];for(const J in Z)m(Z[J].object),delete Z[J];delete V[ae]}delete o[C]}}function N(C){if(o[C.id]===void 0)return;const V=o[C.id];for(const ae in V){const Z=V[ae];for(const J in Z)m(Z[J].object),delete Z[J];delete V[ae]}delete o[C.id]}function k(C){for(const V in o){const ae=o[V];if(ae[C.id]===void 0)continue;const Z=ae[C.id];for(const J in Z)m(Z[J].object),delete Z[J];delete ae[C.id]}}function W(){b(),c=!0,l!==s&&(l=s,p(l.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:W,resetDefaultState:b,dispose:G,releaseStatesOfGeometry:N,releaseStatesOfProgram:k,initAttributes:M,enableAttribute:x,disableUnusedAttributes:L}}function m1(r,e,t){let o;function s(p){o=p}function l(p,m){r.drawArrays(o,p,m),t.update(m,o,1)}function c(p,m,v){v!==0&&(r.drawArraysInstanced(o,p,m,v),t.update(m,o,v))}function d(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,p,0,m,0,v);let S=0;for(let E=0;E<v;E++)S+=m[E];t.update(S,o,1)}function f(p,m,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],m[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(o,p,0,m,0,y,0,v);let E=0;for(let M=0;M<v;M++)E+=m[M]*y[M];t.update(E,o,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function g1(r,e,t,o){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(k){return!(k!==Mr&&o.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const W=k===Na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Gr&&o.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==li&&!W)}function f(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=f(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const v=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:G,maxSamples:N}}function v1(r){const e=this;let t=null,o=0,s=!1,l=!1;const c=new fo,d=new _t,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||o!==0||s;return s=y,o=v.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=m(v,y,0)},this.setState=function(v,y,S){const E=v.clippingPlanes,M=v.clipIntersection,x=v.clipShadows,_=r.get(v);if(!s||E===null||E.length===0||l&&!x)l?m(null):p();else{const L=l?0:o,P=L*4;let A=_.clippingState||null;f.value=A,A=m(E,y,P,S);for(let G=0;G!==P;++G)A[G]=t[G];_.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function m(v,y,S,E){const M=v!==null?v.length:0;let x=null;if(M!==0){if(x=f.value,E!==!0||x===null){const _=S+M*4,L=y.matrixWorldInverse;d.getNormalMatrix(L),(x===null||x.length<_)&&(x=new Float32Array(_));for(let P=0,A=S;P!==M;++P,A+=4)c.copy(v[P]).applyMatrix4(L,d),c.normal.toArray(x,A),x[A+3]=c.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function _1(r){let e=new WeakMap;function t(c,d){return d===Rf?c.mapping=gs:d===Af&&(c.mapping=vs),c}function o(c){if(c&&c.isTexture){const d=c.mapping;if(d===Rf||d===Af)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const p=new pM(f.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",s),t(p.texture,c.mapping)}else return null}}return c}function s(c){const d=c.target;d.removeEventListener("dispose",s);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:o,dispose:l}}const ds=4,Kg=[.125,.215,.35,.446,.526,.582],go=20,tf=new z_,Zg=new Nt;let nf=null,rf=0,of=0,sf=!1;const ho=(1+Math.sqrt(5))/2,as=1/ho,Jg=[new ie(-ho,as,0),new ie(ho,as,0),new ie(-as,0,ho),new ie(as,0,ho),new ie(0,ho,-as),new ie(0,ho,as),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],x1=new ie;class Qg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,o=.1,s=100,l={}){const{size:c=256,position:d=x1}=l;nf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,o,s,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nf,rf,of),this._renderer.xr.enabled=sf,e.scissorTest=!1,pu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const o=t||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,o={magFilter:kr,minFilter:kr,generateMipmaps:!1,type:Na,format:Mr,colorSpace:_s,depthBuffer:!1},s=ev(e,t,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ev(e,t,o);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y1(l)),this._blurMaterial=S1(l,e,t)}return s}_compileMaterial(e){const t=new Or(this._lodPlanes[0],e);this._renderer.compile(t,tf)}_sceneToCubeUV(e,t,o,s,l){const f=new dr(90,1,t,o),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(Zg),v.toneMapping=di,v.autoClear=!1;const E=new Rh({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),M=new Or(new Ts,E);let x=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,x=!0):(E.color.copy(Zg),x=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(f.up.set(0,p[L],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+m[L],l.y,l.z)):P===1?(f.up.set(0,0,p[L]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+m[L],l.z)):(f.up.set(0,p[L],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+m[L]));const A=this._cubeSize;pu(s,P*A,L>2?A:0,A,A),v.setRenderTarget(s),x&&v.render(M,f),v.render(e,f)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=S,v.autoClear=y,e.background=_}_textureToCubeUV(e,t){const o=this._renderer,s=e.mapping===gs||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tv());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new Or(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;pu(t,0,0,3*f,2*f),o.setRenderTarget(t),o.render(c,tf)}_applyPMREM(e){const t=this._renderer,o=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Jg[(s-l-1)%Jg.length];this._blur(e,l-1,l,c,d)}t.autoClear=o}_blur(e,t,o,s,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,o,s,"latitudinal",l),this._halfBlur(c,e,o,o,s,"longitudinal",l)}_halfBlur(e,t,o,s,l,c,d){const f=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Or(this._lodPlanes[s],p),y=p.uniforms,S=this._sizeLods[o]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*go-1),M=l/E,x=isFinite(l)?1+Math.floor(m*M):go;x>go&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${go}`);const _=[];let L=0;for(let k=0;k<go;++k){const W=k/M,b=Math.exp(-W*W/2);_.push(b),k===0?L+=b:k<x&&(L+=2*b)}for(let k=0;k<_.length;k++)_[k]=_[k]/L;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=c==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=E,y.mipInt.value=P-o;const A=this._sizeLods[s],G=3*A*(s>P-ds?s-P+ds:0),N=4*(this._cubeSize-A);pu(t,G,N,3*A,2*A),f.setRenderTarget(t),f.render(v,tf)}}function y1(r){const e=[],t=[],o=[];let s=r;const l=r-ds+1+Kg.length;for(let c=0;c<l;c++){const d=Math.pow(2,s);t.push(d);let f=1/d;c>r-ds?f=Kg[c-r+ds-1]:c===0&&(f=0),o.push(f);const p=1/(d-2),m=-p,v=1+p,y=[m,m,v,m,v,v,m,m,v,v,m,v],S=6,E=6,M=3,x=2,_=1,L=new Float32Array(M*E*S),P=new Float32Array(x*E*S),A=new Float32Array(_*E*S);for(let N=0;N<S;N++){const k=N%3*2/3-1,W=N>2?0:-1,b=[k,W,0,k+2/3,W,0,k+2/3,W+1,0,k,W,0,k+2/3,W+1,0,k,W+1,0];L.set(b,M*E*N),P.set(y,x*E*N);const C=[N,N,N,N,N,N];A.set(C,_*E*N)}const G=new Mo;G.setAttribute("position",new Hr(L,M)),G.setAttribute("uv",new Hr(P,x)),G.setAttribute("faceIndex",new Hr(A,_)),e.push(G),s>ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:o}}function ev(r,e,t){const o=new Eo(r,e,t);return o.texture.mapping=Bu,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function pu(r,e,t,o,s){r.viewport.set(e,t,o,s),r.scissor.set(e,t,o,s)}function S1(r,e,t){const o=new Float32Array(go),s=new ie(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:go,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function tv(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function nv(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ph(){return`

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
	`}function E1(r){let e=new WeakMap,t=null;function o(d){if(d&&d.isTexture){const f=d.mapping,p=f===Rf||f===Af,m=f===gs||f===vs;if(p||m){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new Qg(r)),v=p?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return p&&S&&S.height>0||m&&S&&s(S)?(t===null&&(t=new Qg(r)),v=p?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function s(d){let f=0;const p=6;for(let m=0;m<p;m++)d[m]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:o,dispose:c}}function M1(r){const e={};function t(o){if(e[o]!==void 0)return e[o];let s;switch(o){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(o)}return e[o]=s,s}return{has:function(o){return t(o)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(o){const s=t(o);return s===null&&hs("THREE.WebGLRenderer: "+o+" extension not supported."),s}}}function w1(r,e,t,o){const s={},l=new WeakMap;function c(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",c),delete s[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),o.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(v,y){return s[y.id]===!0||(y.addEventListener("dispose",c),s[y.id]=!0,t.memory.geometries++),y}function f(v){const y=v.attributes;for(const S in y)e.update(y[S],r.ARRAY_BUFFER)}function p(v){const y=[],S=v.index,E=v.attributes.position;let M=0;if(S!==null){const L=S.array;M=S.version;for(let P=0,A=L.length;P<A;P+=3){const G=L[P+0],N=L[P+1],k=L[P+2];y.push(G,N,N,k,k,G)}}else if(E!==void 0){const L=E.array;M=E.version;for(let P=0,A=L.length/3-1;P<A;P+=3){const G=P+0,N=P+1,k=P+2;y.push(G,N,N,k,k,G)}}else return;const x=new(P_(y)?I_:N_)(y,1);x.version=M;const _=l.get(v);_&&e.remove(_),l.set(v,x)}function m(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:d,update:f,getWireframeAttribute:m}}function T1(r,e,t){let o;function s(y){o=y}let l,c;function d(y){l=y.type,c=y.bytesPerElement}function f(y,S){r.drawElements(o,S,l,y*c),t.update(S,o,1)}function p(y,S,E){E!==0&&(r.drawElementsInstanced(o,S,l,y*c,E),t.update(S,o,E))}function m(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,S,0,l,y,0,E);let x=0;for(let _=0;_<E;_++)x+=S[_];t.update(x,o,1)}function v(y,S,E,M){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<y.length;_++)p(y[_]/c,S[_],M[_]);else{x.multiDrawElementsInstancedWEBGL(o,S,0,l,y,0,M,0,E);let _=0;for(let L=0;L<E;L++)_+=S[L]*M[L];t.update(_,o,1)}}this.setMode=s,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function C1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function o(l,c,d){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:o}}function R1(r,e,t){const o=new WeakMap,s=new Kt;function l(c,d,f){const p=c.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=m!==void 0?m.length:0;let y=o.get(d);if(y===void 0||y.count!==v){let b=function(){k.dispose(),o.delete(d),d.removeEventListener("dispose",b)};y!==void 0&&y.texture.dispose();const S=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let P=0;S===!0&&(P=1),E===!0&&(P=2),M===!0&&(P=3);let A=d.attributes.position.count*P,G=1;A>e.maxTextureSize&&(G=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const N=new Float32Array(A*G*4*v),k=new L_(N,A,G,v);k.type=li,k.needsUpdate=!0;const W=P*4;for(let C=0;C<v;C++){const V=x[C],ae=_[C],Z=L[C],J=A*G*4*C;for(let fe=0;fe<V.count;fe++){const ue=fe*W;S===!0&&(s.fromBufferAttribute(V,fe),N[J+ue+0]=s.x,N[J+ue+1]=s.y,N[J+ue+2]=s.z,N[J+ue+3]=0),E===!0&&(s.fromBufferAttribute(ae,fe),N[J+ue+4]=s.x,N[J+ue+5]=s.y,N[J+ue+6]=s.z,N[J+ue+7]=0),M===!0&&(s.fromBufferAttribute(Z,fe),N[J+ue+8]=s.x,N[J+ue+9]=s.y,N[J+ue+10]=s.z,N[J+ue+11]=Z.itemSize===4?s.w:1)}}y={count:v,texture:k,size:new Dt(A,G)},o.set(d,y),d.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let S=0;for(let M=0;M<p.length;M++)S+=p[M];const E=d.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",E),f.getUniforms().setValue(r,"morphTargetInfluences",p)}f.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:l}}function A1(r,e,t,o){let s=new WeakMap;function l(f){const p=o.render.frame,m=f.geometry,v=e.get(f,m);if(s.get(v)!==p&&(e.update(v),s.set(v,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),s.get(f)!==p&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),s.set(f,p))),f.isSkinnedMesh){const y=f.skeleton;s.get(y)!==p&&(y.update(),s.set(y,p))}return v}function c(){s=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const V_=new On,rv=new B_(1,1),G_=new L_,W_=new KE,j_=new O_,iv=[],ov=[],sv=new Float32Array(16),av=new Float32Array(9),lv=new Float32Array(4);function Cs(r,e,t){const o=r[0];if(o<=0||o>0)return r;const s=e*t;let l=iv[s];if(l===void 0&&(l=new Float32Array(s),iv[s]=l),e!==0){o.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,r[c].toArray(l,d)}return l}function on(r,e){if(r.length!==e.length)return!1;for(let t=0,o=r.length;t<o;t++)if(r[t]!==e[t])return!1;return!0}function sn(r,e){for(let t=0,o=e.length;t<o;t++)r[t]=e[t]}function Vu(r,e){let t=ov[e];t===void 0&&(t=new Int32Array(e),ov[e]=t);for(let o=0;o!==e;++o)t[o]=r.allocateTextureUnit();return t}function b1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function P1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2fv(this.addr,e),sn(t,e)}}function L1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;r.uniform3fv(this.addr,e),sn(t,e)}}function D1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4fv(this.addr,e),sn(t,e)}}function U1(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(on(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(on(t,o))return;lv.set(o),r.uniformMatrix2fv(this.addr,!1,lv),sn(t,o)}}function N1(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(on(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(on(t,o))return;av.set(o),r.uniformMatrix3fv(this.addr,!1,av),sn(t,o)}}function I1(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(on(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(on(t,o))return;sv.set(o),r.uniformMatrix4fv(this.addr,!1,sv),sn(t,o)}}function F1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function k1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2iv(this.addr,e),sn(t,e)}}function O1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3iv(this.addr,e),sn(t,e)}}function B1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4iv(this.addr,e),sn(t,e)}}function z1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function H1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2uiv(this.addr,e),sn(t,e)}}function V1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3uiv(this.addr,e),sn(t,e)}}function G1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4uiv(this.addr,e),sn(t,e)}}function W1(r,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(r.uniform1i(this.addr,s),o[0]=s);let l;this.type===r.SAMPLER_2D_SHADOW?(rv.compareFunction=b_,l=rv):l=V_,t.setTexture2D(e||l,s)}function j1(r,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(r.uniform1i(this.addr,s),o[0]=s),t.setTexture3D(e||W_,s)}function X1(r,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(r.uniform1i(this.addr,s),o[0]=s),t.setTextureCube(e||j_,s)}function $1(r,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(r.uniform1i(this.addr,s),o[0]=s),t.setTexture2DArray(e||G_,s)}function Y1(r){switch(r){case 5126:return b1;case 35664:return P1;case 35665:return L1;case 35666:return D1;case 35674:return U1;case 35675:return N1;case 35676:return I1;case 5124:case 35670:return F1;case 35667:case 35671:return k1;case 35668:case 35672:return O1;case 35669:case 35673:return B1;case 5125:return z1;case 36294:return H1;case 36295:return V1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return $1}}function q1(r,e){r.uniform1fv(this.addr,e)}function K1(r,e){const t=Cs(e,this.size,2);r.uniform2fv(this.addr,t)}function Z1(r,e){const t=Cs(e,this.size,3);r.uniform3fv(this.addr,t)}function J1(r,e){const t=Cs(e,this.size,4);r.uniform4fv(this.addr,t)}function Q1(r,e){const t=Cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function eC(r,e){const t=Cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function tC(r,e){const t=Cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function nC(r,e){r.uniform1iv(this.addr,e)}function rC(r,e){r.uniform2iv(this.addr,e)}function iC(r,e){r.uniform3iv(this.addr,e)}function oC(r,e){r.uniform4iv(this.addr,e)}function sC(r,e){r.uniform1uiv(this.addr,e)}function aC(r,e){r.uniform2uiv(this.addr,e)}function lC(r,e){r.uniform3uiv(this.addr,e)}function uC(r,e){r.uniform4uiv(this.addr,e)}function cC(r,e,t){const o=this.cache,s=e.length,l=Vu(t,s);on(o,l)||(r.uniform1iv(this.addr,l),sn(o,l));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||V_,l[c])}function dC(r,e,t){const o=this.cache,s=e.length,l=Vu(t,s);on(o,l)||(r.uniform1iv(this.addr,l),sn(o,l));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||W_,l[c])}function fC(r,e,t){const o=this.cache,s=e.length,l=Vu(t,s);on(o,l)||(r.uniform1iv(this.addr,l),sn(o,l));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||j_,l[c])}function hC(r,e,t){const o=this.cache,s=e.length,l=Vu(t,s);on(o,l)||(r.uniform1iv(this.addr,l),sn(o,l));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||G_,l[c])}function pC(r){switch(r){case 5126:return q1;case 35664:return K1;case 35665:return Z1;case 35666:return J1;case 35674:return Q1;case 35675:return eC;case 35676:return tC;case 5124:case 35670:return nC;case 35667:case 35671:return rC;case 35668:case 35672:return iC;case 35669:case 35673:return oC;case 5125:return sC;case 36294:return aC;case 36295:return lC;case 36296:return uC;case 35678:case 36198:case 36298:case 36306:case 35682:return cC;case 35679:case 36299:case 36307:return dC;case 35680:case 36300:case 36308:case 36293:return fC;case 36289:case 36303:case 36311:case 36292:return hC}}class mC{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.type=t.type,this.setValue=Y1(t.type)}}class gC{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pC(t.type)}}class vC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,o){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const d=s[l];d.setValue(e,t[d.id],o)}}}const af=/(\w+)(\])?(\[|\.)?/g;function uv(r,e){r.seq.push(e),r.map[e.id]=e}function _C(r,e,t){const o=r.name,s=o.length;for(af.lastIndex=0;;){const l=af.exec(o),c=af.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&c+2===s){uv(t,p===void 0?new mC(d,r,e):new gC(d,r,e));break}else{let v=t.map[d];v===void 0&&(v=new vC(d),uv(t,v)),t=v}}}class Au{constructor(e,t){this.seq=[],this.map={};const o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<o;++s){const l=e.getActiveUniform(t,s),c=e.getUniformLocation(t,l.name);_C(l,c,this)}}setValue(e,t,o,s){const l=this.map[t];l!==void 0&&l.setValue(e,o,s)}setOptional(e,t,o){const s=t[o];s!==void 0&&this.setValue(e,o,s)}static upload(e,t,o,s){for(let l=0,c=t.length;l!==c;++l){const d=t[l],f=o[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,s)}}static seqWithValue(e,t){const o=[];for(let s=0,l=e.length;s!==l;++s){const c=e[s];c.id in t&&o.push(c)}return o}}function cv(r,e,t){const o=r.createShader(e);return r.shaderSource(o,t),r.compileShader(o),o}const xC=37297;let yC=0;function SC(r,e){const t=r.split(`
`),o=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=s;c<l;c++){const d=c+1;o.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return o.join(`
`)}const dv=new _t;function EC(r){Lt._getMatrix(dv,Lt.workingColorSpace,r);const e=`mat3( ${dv.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(r)){case Uu:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function fv(r,e,t){const o=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(o&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+s+`

`+SC(r.getShaderSource(e),c)}else return s}function MC(r,e){const t=EC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wC(r,e){let t;switch(e){case sE:t="Linear";break;case aE:t="Reinhard";break;case lE:t="Cineon";break;case uE:t="ACESFilmic";break;case dE:t="AgX";break;case fE:t="Neutral";break;case cE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mu=new ie;function TC(){Lt.getLuminanceCoefficients(mu);const r=mu.x.toFixed(4),e=mu.y.toFixed(4),t=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function RC(r){const e=[];for(const t in r){const o=r[t];o!==!1&&e.push("#define "+t+" "+o)}return e.join(`
`)}function AC(r,e){const t={},o=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<o;s++){const l=r.getActiveAttrib(e,s),c=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:d}}return t}function ga(r){return r!==""}function hv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bC=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(r){return r.replace(bC,LC)}const PC=new Map;function LC(r,e){let t=yt[e];if(t===void 0){const o=PC.get(e);if(o!==void 0)t=yt[o],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,o);else throw new Error("Can not resolve #include <"+e+">")}return nh(t)}const DC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mv(r){return r.replace(DC,UC)}function UC(r,e,t,o){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=o.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function gv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function NC(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===__?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===BS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function IC(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gs:case vs:e="ENVMAP_TYPE_CUBE";break;case Bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FC(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===vs&&(e="ENVMAP_MODE_REFRACTION"),e}function kC(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case x_:e="ENVMAP_BLENDING_MULTIPLY";break;case iE:e="ENVMAP_BLENDING_MIX";break;case oE:e="ENVMAP_BLENDING_ADD";break}return e}function OC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:o,maxMip:t}}function BC(r,e,t,o){const s=r.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=NC(t),p=IC(t),m=FC(t),v=kC(t),y=OC(t),S=CC(t),E=RC(l),M=s.createProgram();let x,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ga).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ga).join(`
`),_.length>0&&(_+=`
`)):(x=[gv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),_=[gv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?yt.tonemapping_pars_fragment:"",t.toneMapping!==di?wC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,MC("linearToOutputTexel",t.outputColorSpace),TC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),c=nh(c),c=hv(c,t),c=pv(c,t),d=nh(d),d=hv(d,t),d=pv(d,t),c=mv(c),d=mv(d),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Ag?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ag?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=L+x+c,A=L+_+d,G=cv(s,s.VERTEX_SHADER,P),N=cv(s,s.FRAGMENT_SHADER,A);s.attachShader(M,G),s.attachShader(M,N),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function k(V){if(r.debug.checkShaderErrors){const ae=s.getProgramInfoLog(M).trim(),Z=s.getShaderInfoLog(G).trim(),J=s.getShaderInfoLog(N).trim();let fe=!0,ue=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(fe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,M,G,N);else{const he=fv(s,G,"vertex"),z=fv(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ae+`
`+he+`
`+z)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(Z===""||J==="")&&(ue=!1);ue&&(V.diagnostics={runnable:fe,programLog:ae,vertexShader:{log:Z,prefix:x},fragmentShader:{log:J,prefix:_}})}s.deleteShader(G),s.deleteShader(N),W=new Au(s,M),b=AC(s,M)}let W;this.getUniforms=function(){return W===void 0&&k(this),W};let b;this.getAttributes=function(){return b===void 0&&k(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,xC)),C},this.destroy=function(){o.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yC++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=G,this.fragmentShader=N,this}let zC=0;class HC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,o=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(o),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const o of t)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let o=t.get(e);return o===void 0&&(o=new Set,t.set(e,o)),o}_getShaderStage(e){const t=this.shaderCache;let o=t.get(e);return o===void 0&&(o=new VC(e),t.set(e,o)),o}}class VC{constructor(e){this.id=zC++,this.code=e,this.usedTimes=0}}function GC(r,e,t,o,s,l,c){const d=new D_,f=new HC,p=new Set,m=[],v=s.logarithmicDepthBuffer,y=s.vertexTextures;let S=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return p.add(b),b===0?"uv":`uv${b}`}function x(b,C,V,ae,Z){const J=ae.fog,fe=Z.geometry,ue=b.isMeshStandardMaterial?ae.environment:null,he=(b.isMeshStandardMaterial?t:e).get(b.envMap||ue),z=he&&he.mapping===Bu?he.image.height:null,de=E[b.type];b.precision!==null&&(S=s.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const le=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,F=le!==void 0?le.length:0;let re=0;fe.morphAttributes.position!==void 0&&(re=1),fe.morphAttributes.normal!==void 0&&(re=2),fe.morphAttributes.color!==void 0&&(re=3);let ke,te,me,Ce;if(de){const dt=Ur[de];ke=dt.vertexShader,te=dt.fragmentShader}else ke=b.vertexShader,te=b.fragmentShader,f.update(b),me=f.getVertexShaderID(b),Ce=f.getFragmentShaderID(b);const Se=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),ne=Z.isInstancedMesh===!0,_e=Z.isBatchedMesh===!0,Le=!!b.map,it=!!b.matcap,Je=!!he,I=!!b.aoMap,ot=!!b.lightMap,ct=!!b.bumpMap,Tt=!!b.normalMap,We=!!b.displacementMap,mt=!!b.emissiveMap,je=!!b.metalnessMap,ze=!!b.roughnessMap,Rt=b.anisotropy>0,D=b.clearcoat>0,T=b.dispersion>0,Q=b.iridescence>0,pe=b.sheen>0,xe=b.transmission>0,ce=Rt&&!!b.anisotropyMap,qe=D&&!!b.clearcoatMap,De=D&&!!b.clearcoatNormalMap,He=D&&!!b.clearcoatRoughnessMap,Qe=Q&&!!b.iridescenceMap,ge=Q&&!!b.iridescenceThicknessMap,Be=pe&&!!b.sheenColorMap,st=pe&&!!b.sheenRoughnessMap,nt=!!b.specularMap,Ue=!!b.specularColorMap,at=!!b.specularIntensityMap,j=xe&&!!b.transmissionMap,Ne=xe&&!!b.thicknessMap,ye=!!b.gradientMap,Oe=!!b.alphaMap,we=b.alphaTest>0,ve=!!b.alphaHash,Xe=!!b.extensions;let pt=di;b.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(pt=r.toneMapping);const be={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:ke,fragmentShader:te,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:Ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:_e,batchingColor:_e&&Z._colorsTexture!==null,instancing:ne,instancingColor:ne&&Z.instanceColor!==null,instancingMorph:ne&&Z.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Se===null?r.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:_s,alphaToCoverage:!!b.alphaToCoverage,map:Le,matcap:it,envMap:Je,envMapMode:Je&&he.mapping,envMapCubeUVHeight:z,aoMap:I,lightMap:ot,bumpMap:ct,normalMap:Tt,displacementMap:y&&We,emissiveMap:mt,normalMapObjectSpace:Tt&&b.normalMapType===vE,normalMapTangentSpace:Tt&&b.normalMapType===gE,metalnessMap:je,roughnessMap:ze,anisotropy:Rt,anisotropyMap:ce,clearcoat:D,clearcoatMap:qe,clearcoatNormalMap:De,clearcoatRoughnessMap:He,dispersion:T,iridescence:Q,iridescenceMap:Qe,iridescenceThicknessMap:ge,sheen:pe,sheenColorMap:Be,sheenRoughnessMap:st,specularMap:nt,specularColorMap:Ue,specularIntensityMap:at,transmission:xe,transmissionMap:j,thicknessMap:Ne,gradientMap:ye,opaque:b.transparent===!1&&b.blending===fs&&b.alphaToCoverage===!1,alphaMap:Oe,alphaTest:we,alphaHash:ve,combine:b.combine,mapUv:Le&&M(b.map.channel),aoMapUv:I&&M(b.aoMap.channel),lightMapUv:ot&&M(b.lightMap.channel),bumpMapUv:ct&&M(b.bumpMap.channel),normalMapUv:Tt&&M(b.normalMap.channel),displacementMapUv:We&&M(b.displacementMap.channel),emissiveMapUv:mt&&M(b.emissiveMap.channel),metalnessMapUv:je&&M(b.metalnessMap.channel),roughnessMapUv:ze&&M(b.roughnessMap.channel),anisotropyMapUv:ce&&M(b.anisotropyMap.channel),clearcoatMapUv:qe&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:De&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:st&&M(b.sheenRoughnessMap.channel),specularMapUv:nt&&M(b.specularMap.channel),specularColorMapUv:Ue&&M(b.specularColorMap.channel),specularIntensityMapUv:at&&M(b.specularIntensityMap.channel),transmissionMapUv:j&&M(b.transmissionMap.channel),thicknessMapUv:Ne&&M(b.thicknessMap.channel),alphaMapUv:Oe&&M(b.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Tt||Rt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!fe.attributes.uv&&(Le||Oe),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:Z.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:pt,decodeVideoTexture:Le&&b.map.isVideoTexture===!0&&Lt.getTransfer(b.map.colorSpace)===Ft,decodeVideoTextureEmissive:mt&&b.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(b.emissiveMap.colorSpace)===Ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ir,flipSided:b.side===$n,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Xe&&b.extensions.clipCullDistance===!0&&o.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&b.extensions.multiDraw===!0||_e)&&o.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:o.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return be.vertexUv1s=p.has(1),be.vertexUv2s=p.has(2),be.vertexUv3s=p.has(3),p.clear(),be}function _(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)C.push(V),C.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(L(C,b),P(C,b),C.push(r.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function L(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function P(b,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),b.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),b.push(d.mask)}function A(b){const C=E[b.type];let V;if(C){const ae=Ur[C];V=cM.clone(ae.uniforms)}else V=b.uniforms;return V}function G(b,C){let V;for(let ae=0,Z=m.length;ae<Z;ae++){const J=m[ae];if(J.cacheKey===C){V=J,++V.usedTimes;break}}return V===void 0&&(V=new BC(r,C,b,l),m.push(V)),V}function N(b){if(--b.usedTimes===0){const C=m.indexOf(b);m[C]=m[m.length-1],m.pop(),b.destroy()}}function k(b){f.remove(b)}function W(){f.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:A,acquireProgram:G,releaseProgram:N,releaseShaderCache:k,programs:m,dispose:W}}function WC(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function o(c){r.delete(c)}function s(c,d,f){r.get(c)[d]=f}function l(){r=new WeakMap}return{has:e,get:t,remove:o,update:s,dispose:l}}function jC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _v(){const r=[];let e=0;const t=[],o=[],s=[];function l(){e=0,t.length=0,o.length=0,s.length=0}function c(v,y,S,E,M,x){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:E,renderOrder:v.renderOrder,z:M,group:x},r[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=M,_.group=x),e++,_}function d(v,y,S,E,M,x){const _=c(v,y,S,E,M,x);S.transmission>0?o.push(_):S.transparent===!0?s.push(_):t.push(_)}function f(v,y,S,E,M,x){const _=c(v,y,S,E,M,x);S.transmission>0?o.unshift(_):S.transparent===!0?s.unshift(_):t.unshift(_)}function p(v,y){t.length>1&&t.sort(v||jC),o.length>1&&o.sort(y||vv),s.length>1&&s.sort(y||vv)}function m(){for(let v=e,y=r.length;v<y;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:o,transparent:s,init:l,push:d,unshift:f,finish:m,sort:p}}function XC(){let r=new WeakMap;function e(o,s){const l=r.get(o);let c;return l===void 0?(c=new _v,r.set(o,[c])):s>=l.length?(c=new _v,l.push(c)):c=l[s],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function $C(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Nt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function YC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let qC=0;function KC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ZC(r){const e=new $C,t=YC(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new ie);const s=new ie,l=new Zt,c=new Zt;function d(p){let m=0,v=0,y=0;for(let b=0;b<9;b++)o.probe[b].set(0,0,0);let S=0,E=0,M=0,x=0,_=0,L=0,P=0,A=0,G=0,N=0,k=0;p.sort(KC);for(let b=0,C=p.length;b<C;b++){const V=p[b],ae=V.color,Z=V.intensity,J=V.distance,fe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=ae.r*Z,v+=ae.g*Z,y+=ae.b*Z;else if(V.isLightProbe){for(let ue=0;ue<9;ue++)o.probe[ue].addScaledVector(V.sh.coefficients[ue],Z);k++}else if(V.isDirectionalLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const he=V.shadow,z=t.get(V);z.shadowIntensity=he.intensity,z.shadowBias=he.bias,z.shadowNormalBias=he.normalBias,z.shadowRadius=he.radius,z.shadowMapSize=he.mapSize,o.directionalShadow[S]=z,o.directionalShadowMap[S]=fe,o.directionalShadowMatrix[S]=V.shadow.matrix,L++}o.directional[S]=ue,S++}else if(V.isSpotLight){const ue=e.get(V);ue.position.setFromMatrixPosition(V.matrixWorld),ue.color.copy(ae).multiplyScalar(Z),ue.distance=J,ue.coneCos=Math.cos(V.angle),ue.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ue.decay=V.decay,o.spot[M]=ue;const he=V.shadow;if(V.map&&(o.spotLightMap[G]=V.map,G++,he.updateMatrices(V),V.castShadow&&N++),o.spotLightMatrix[M]=he.matrix,V.castShadow){const z=t.get(V);z.shadowIntensity=he.intensity,z.shadowBias=he.bias,z.shadowNormalBias=he.normalBias,z.shadowRadius=he.radius,z.shadowMapSize=he.mapSize,o.spotShadow[M]=z,o.spotShadowMap[M]=fe,A++}M++}else if(V.isRectAreaLight){const ue=e.get(V);ue.color.copy(ae).multiplyScalar(Z),ue.halfWidth.set(V.width*.5,0,0),ue.halfHeight.set(0,V.height*.5,0),o.rectArea[x]=ue,x++}else if(V.isPointLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),ue.distance=V.distance,ue.decay=V.decay,V.castShadow){const he=V.shadow,z=t.get(V);z.shadowIntensity=he.intensity,z.shadowBias=he.bias,z.shadowNormalBias=he.normalBias,z.shadowRadius=he.radius,z.shadowMapSize=he.mapSize,z.shadowCameraNear=he.camera.near,z.shadowCameraFar=he.camera.far,o.pointShadow[E]=z,o.pointShadowMap[E]=fe,o.pointShadowMatrix[E]=V.shadow.matrix,P++}o.point[E]=ue,E++}else if(V.isHemisphereLight){const ue=e.get(V);ue.skyColor.copy(V.color).multiplyScalar(Z),ue.groundColor.copy(V.groundColor).multiplyScalar(Z),o.hemi[_]=ue,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Fe.LTC_FLOAT_1,o.rectAreaLTC2=Fe.LTC_FLOAT_2):(o.rectAreaLTC1=Fe.LTC_HALF_1,o.rectAreaLTC2=Fe.LTC_HALF_2)),o.ambient[0]=m,o.ambient[1]=v,o.ambient[2]=y;const W=o.hash;(W.directionalLength!==S||W.pointLength!==E||W.spotLength!==M||W.rectAreaLength!==x||W.hemiLength!==_||W.numDirectionalShadows!==L||W.numPointShadows!==P||W.numSpotShadows!==A||W.numSpotMaps!==G||W.numLightProbes!==k)&&(o.directional.length=S,o.spot.length=M,o.rectArea.length=x,o.point.length=E,o.hemi.length=_,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=P,o.pointShadowMap.length=P,o.spotShadow.length=A,o.spotShadowMap.length=A,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=P,o.spotLightMatrix.length=A+G-N,o.spotLightMap.length=G,o.numSpotLightShadowsWithMaps=N,o.numLightProbes=k,W.directionalLength=S,W.pointLength=E,W.spotLength=M,W.rectAreaLength=x,W.hemiLength=_,W.numDirectionalShadows=L,W.numPointShadows=P,W.numSpotShadows=A,W.numSpotMaps=G,W.numLightProbes=k,o.version=qC++)}function f(p,m){let v=0,y=0,S=0,E=0,M=0;const x=m.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const P=p[_];if(P.isDirectionalLight){const A=o.directional[v];A.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),v++}else if(P.isSpotLight){const A=o.spot[S];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),S++}else if(P.isRectAreaLight){const A=o.rectArea[E];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),c.identity(),l.copy(P.matrixWorld),l.premultiply(x),c.extractRotation(l),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const A=o.point[y];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),y++}else if(P.isHemisphereLight){const A=o.hemi[M];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(x),M++}}}return{setup:d,setupView:f,state:o}}function xv(r){const e=new ZC(r),t=[],o=[];function s(m){p.camera=m,t.length=0,o.length=0}function l(m){t.push(m)}function c(m){o.push(m)}function d(){e.setup(t)}function f(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:o,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:c}}function JC(r){let e=new WeakMap;function t(s,l=0){const c=e.get(s);let d;return c===void 0?(d=new xv(r),e.set(s,[d])):l>=c.length?(d=new xv(r),c.push(d)):d=c[l],d}function o(){e=new WeakMap}return{get:t,dispose:o}}const QC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eR=`uniform sampler2D shadow_pass;
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
}`;function tR(r,e,t){let o=new Ah;const s=new Dt,l=new Dt,c=new Kt,d=new yM({depthPacking:mE}),f=new SM,p={},m=t.maxTextureSize,v={[Wi]:$n,[$n]:Wi,[Ir]:Ir},y=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:QC,fragmentShader:eR}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Mo;E.setAttribute("position",new Hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Or(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=__;let _=this.type;this.render=function(N,k,W){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;const b=r.getRenderTarget(),C=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),ae=r.state;ae.setBlending(Gi),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const Z=_!==oi&&this.type===oi,J=_===oi&&this.type!==oi;for(let fe=0,ue=N.length;fe<ue;fe++){const he=N[fe],z=he.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const de=z.getFrameExtents();if(s.multiply(de),l.copy(z.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/de.x),s.x=l.x*de.x,z.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/de.y),s.y=l.y*de.y,z.mapSize.y=l.y)),z.map===null||Z===!0||J===!0){const F=this.type!==oi?{minFilter:yn,magFilter:yn}:{};z.map!==null&&z.map.dispose(),z.map=new Eo(s.x,s.y,F),z.map.texture.name=he.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const le=z.getViewportCount();for(let F=0;F<le;F++){const re=z.getViewport(F);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ae.viewport(c),z.updateMatrices(he,F),o=z.getFrustum(),A(k,W,z.camera,he,this.type)}z.isPointLightShadow!==!0&&this.type===oi&&L(z,W),z.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(b,C,V)};function L(N,k){const W=e.update(M);y.defines.VSM_SAMPLES!==N.blurSamples&&(y.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Eo(s.x,s.y)),y.uniforms.shadow_pass.value=N.map.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(k,null,W,y,M,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(k,null,W,S,M,null)}function P(N,k,W,b){let C=null;const V=W.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)C=V;else if(C=W.isPointLight===!0?f:d,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const ae=C.uuid,Z=k.uuid;let J=p[ae];J===void 0&&(J={},p[ae]=J);let fe=J[Z];fe===void 0&&(fe=C.clone(),J[Z]=fe,k.addEventListener("dispose",G)),C=fe}if(C.visible=k.visible,C.wireframe=k.wireframe,b===oi?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:v[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=r.properties.get(C);ae.light=W}return C}function A(N,k,W,b,C){if(N.visible===!1)return;if(N.layers.test(k.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===oi)&&(!N.frustumCulled||o.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,N.matrixWorld);const Z=e.update(N),J=N.material;if(Array.isArray(J)){const fe=Z.groups;for(let ue=0,he=fe.length;ue<he;ue++){const z=fe[ue],de=J[z.materialIndex];if(de&&de.visible){const le=P(N,de,b,C);N.onBeforeShadow(r,N,k,W,Z,le,z),r.renderBufferDirect(W,null,Z,le,N,z),N.onAfterShadow(r,N,k,W,Z,le,z)}}}else if(J.visible){const fe=P(N,J,b,C);N.onBeforeShadow(r,N,k,W,Z,fe,null),r.renderBufferDirect(W,null,Z,fe,N,null),N.onAfterShadow(r,N,k,W,Z,fe,null)}}const ae=N.children;for(let Z=0,J=ae.length;Z<J;Z++)A(ae[Z],k,W,b,C)}function G(N){N.target.removeEventListener("dispose",G);for(const W in p){const b=p[W],C=N.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const nR={[yf]:Sf,[Ef]:Tf,[Mf]:Cf,[ms]:wf,[Sf]:yf,[Tf]:Ef,[Cf]:Mf,[wf]:ms};function rR(r,e){function t(){let j=!1;const Ne=new Kt;let ye=null;const Oe=new Kt(0,0,0,0);return{setMask:function(we){ye!==we&&!j&&(r.colorMask(we,we,we,we),ye=we)},setLocked:function(we){j=we},setClear:function(we,ve,Xe,pt,be){be===!0&&(we*=pt,ve*=pt,Xe*=pt),Ne.set(we,ve,Xe,pt),Oe.equals(Ne)===!1&&(r.clearColor(we,ve,Xe,pt),Oe.copy(Ne))},reset:function(){j=!1,ye=null,Oe.set(-1,0,0,0)}}}function o(){let j=!1,Ne=!1,ye=null,Oe=null,we=null;return{setReversed:function(ve){if(Ne!==ve){const Xe=e.get("EXT_clip_control");ve?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ne=ve;const pt=we;we=null,this.setClear(pt)}},getReversed:function(){return Ne},setTest:function(ve){ve?Se(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(ve){ye!==ve&&!j&&(r.depthMask(ve),ye=ve)},setFunc:function(ve){if(Ne&&(ve=nR[ve]),Oe!==ve){switch(ve){case yf:r.depthFunc(r.NEVER);break;case Sf:r.depthFunc(r.ALWAYS);break;case Ef:r.depthFunc(r.LESS);break;case ms:r.depthFunc(r.LEQUAL);break;case Mf:r.depthFunc(r.EQUAL);break;case wf:r.depthFunc(r.GEQUAL);break;case Tf:r.depthFunc(r.GREATER);break;case Cf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Oe=ve}},setLocked:function(ve){j=ve},setClear:function(ve){we!==ve&&(Ne&&(ve=1-ve),r.clearDepth(ve),we=ve)},reset:function(){j=!1,ye=null,Oe=null,we=null,Ne=!1}}}function s(){let j=!1,Ne=null,ye=null,Oe=null,we=null,ve=null,Xe=null,pt=null,be=null;return{setTest:function(dt){j||(dt?Se(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(dt){Ne!==dt&&!j&&(r.stencilMask(dt),Ne=dt)},setFunc:function(dt,vt,St){(ye!==dt||Oe!==vt||we!==St)&&(r.stencilFunc(dt,vt,St),ye=dt,Oe=vt,we=St)},setOp:function(dt,vt,St){(ve!==dt||Xe!==vt||pt!==St)&&(r.stencilOp(dt,vt,St),ve=dt,Xe=vt,pt=St)},setLocked:function(dt){j=dt},setClear:function(dt){be!==dt&&(r.clearStencil(dt),be=dt)},reset:function(){j=!1,Ne=null,ye=null,Oe=null,we=null,ve=null,Xe=null,pt=null,be=null}}}const l=new t,c=new o,d=new s,f=new WeakMap,p=new WeakMap;let m={},v={},y=new WeakMap,S=[],E=null,M=!1,x=null,_=null,L=null,P=null,A=null,G=null,N=null,k=new Nt(0,0,0),W=0,b=!1,C=null,V=null,ae=null,Z=null,J=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,he=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(z)[1]),ue=he>=1):z.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ue=he>=2);let de=null,le={};const F=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),ke=new Kt().fromArray(F),te=new Kt().fromArray(re);function me(j,Ne,ye,Oe){const we=new Uint8Array(4),ve=r.createTexture();r.bindTexture(j,ve),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<ye;Xe++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(Ne+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return ve}const Ce={};Ce[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),Ce[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ce[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),Se(r.DEPTH_TEST),c.setFunc(ms),ct(!1),Tt(Eg),Se(r.CULL_FACE),I(Gi);function Se(j){m[j]!==!0&&(r.enable(j),m[j]=!0)}function Ae(j){m[j]!==!1&&(r.disable(j),m[j]=!1)}function ne(j,Ne){return v[j]!==Ne?(r.bindFramebuffer(j,Ne),v[j]=Ne,j===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ne),j===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function _e(j,Ne){let ye=S,Oe=!1;if(j){ye=y.get(Ne),ye===void 0&&(ye=[],y.set(Ne,ye));const we=j.textures;if(ye.length!==we.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,Xe=we.length;ve<Xe;ve++)ye[ve]=r.COLOR_ATTACHMENT0+ve;ye.length=we.length,Oe=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,Oe=!0);Oe&&r.drawBuffers(ye)}function Le(j){return E!==j?(r.useProgram(j),E=j,!0):!1}const it={[mo]:r.FUNC_ADD,[HS]:r.FUNC_SUBTRACT,[VS]:r.FUNC_REVERSE_SUBTRACT};it[GS]=r.MIN,it[WS]=r.MAX;const Je={[jS]:r.ZERO,[XS]:r.ONE,[$S]:r.SRC_COLOR,[_f]:r.SRC_ALPHA,[QS]:r.SRC_ALPHA_SATURATE,[ZS]:r.DST_COLOR,[qS]:r.DST_ALPHA,[YS]:r.ONE_MINUS_SRC_COLOR,[xf]:r.ONE_MINUS_SRC_ALPHA,[JS]:r.ONE_MINUS_DST_COLOR,[KS]:r.ONE_MINUS_DST_ALPHA,[eE]:r.CONSTANT_COLOR,[tE]:r.ONE_MINUS_CONSTANT_COLOR,[nE]:r.CONSTANT_ALPHA,[rE]:r.ONE_MINUS_CONSTANT_ALPHA};function I(j,Ne,ye,Oe,we,ve,Xe,pt,be,dt){if(j===Gi){M===!0&&(Ae(r.BLEND),M=!1);return}if(M===!1&&(Se(r.BLEND),M=!0),j!==zS){if(j!==x||dt!==b){if((_!==mo||A!==mo)&&(r.blendEquation(r.FUNC_ADD),_=mo,A=mo),dt)switch(j){case fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mg:r.blendFunc(r.ONE,r.ONE);break;case wg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mg:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case wg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}L=null,P=null,G=null,N=null,k.set(0,0,0),W=0,x=j,b=dt}return}we=we||Ne,ve=ve||ye,Xe=Xe||Oe,(Ne!==_||we!==A)&&(r.blendEquationSeparate(it[Ne],it[we]),_=Ne,A=we),(ye!==L||Oe!==P||ve!==G||Xe!==N)&&(r.blendFuncSeparate(Je[ye],Je[Oe],Je[ve],Je[Xe]),L=ye,P=Oe,G=ve,N=Xe),(pt.equals(k)===!1||be!==W)&&(r.blendColor(pt.r,pt.g,pt.b,be),k.copy(pt),W=be),x=j,b=!1}function ot(j,Ne){j.side===Ir?Ae(r.CULL_FACE):Se(r.CULL_FACE);let ye=j.side===$n;Ne&&(ye=!ye),ct(ye),j.blending===fs&&j.transparent===!1?I(Gi):I(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),l.setMask(j.colorWrite);const Oe=j.stencilWrite;d.setTest(Oe),Oe&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),mt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Se(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function ct(j){C!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),C=j)}function Tt(j){j!==kS?(Se(r.CULL_FACE),j!==V&&(j===Eg?r.cullFace(r.BACK):j===OS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),V=j}function We(j){j!==ae&&(ue&&r.lineWidth(j),ae=j)}function mt(j,Ne,ye){j?(Se(r.POLYGON_OFFSET_FILL),(Z!==Ne||J!==ye)&&(r.polygonOffset(Ne,ye),Z=Ne,J=ye)):Ae(r.POLYGON_OFFSET_FILL)}function je(j){j?Se(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function ze(j){j===void 0&&(j=r.TEXTURE0+fe-1),de!==j&&(r.activeTexture(j),de=j)}function Rt(j,Ne,ye){ye===void 0&&(de===null?ye=r.TEXTURE0+fe-1:ye=de);let Oe=le[ye];Oe===void 0&&(Oe={type:void 0,texture:void 0},le[ye]=Oe),(Oe.type!==j||Oe.texture!==Ne)&&(de!==ye&&(r.activeTexture(ye),de=ye),r.bindTexture(j,Ne||Ce[j]),Oe.type=j,Oe.texture=Ne)}function D(){const j=le[de];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pe(){try{r.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{r.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function qe(){try{r.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function De(){try{r.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function He(){try{r.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qe(){try{r.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{r.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Be(j){ke.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),ke.copy(j))}function st(j){te.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),te.copy(j))}function nt(j,Ne){let ye=p.get(Ne);ye===void 0&&(ye=new WeakMap,p.set(Ne,ye));let Oe=ye.get(j);Oe===void 0&&(Oe=r.getUniformBlockIndex(Ne,j.name),ye.set(j,Oe))}function Ue(j,Ne){const Oe=p.get(Ne).get(j);f.get(Ne)!==Oe&&(r.uniformBlockBinding(Ne,Oe,j.__bindingPointIndex),f.set(Ne,Oe))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},de=null,le={},v={},y=new WeakMap,S=[],E=null,M=!1,x=null,_=null,L=null,P=null,A=null,G=null,N=null,k=new Nt(0,0,0),W=0,b=!1,C=null,V=null,ae=null,Z=null,J=null,ke.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:Se,disable:Ae,bindFramebuffer:ne,drawBuffers:_e,useProgram:Le,setBlending:I,setMaterial:ot,setFlipSided:ct,setCullFace:Tt,setLineWidth:We,setPolygonOffset:mt,setScissorTest:je,activeTexture:ze,bindTexture:Rt,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:Q,texImage2D:Qe,texImage3D:ge,updateUBOMapping:nt,uniformBlockBinding:Ue,texStorage2D:De,texStorage3D:He,texSubImage2D:pe,texSubImage3D:xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:qe,scissor:Be,viewport:st,reset:at}}function iR(r,e,t,o,s,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Dt,m=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return S?new OffscreenCanvas(D,T):Aa("canvas")}function M(D,T,Q){let pe=1;const xe=Rt(D);if((xe.width>Q||xe.height>Q)&&(pe=Q/Math.max(xe.width,xe.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(pe*xe.width),qe=Math.floor(pe*xe.height);v===void 0&&(v=E(ce,qe));const De=T?E(ce,qe):v;return De.width=ce,De.height=qe,De.getContext("2d").drawImage(D,0,0,ce,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ce+"x"+qe+")."),De}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function x(D){return D.generateMipmaps}function _(D){r.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(D,T,Q,pe,xe=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=T;if(T===r.RED&&(Q===r.FLOAT&&(ce=r.R32F),Q===r.HALF_FLOAT&&(ce=r.R16F),Q===r.UNSIGNED_BYTE&&(ce=r.R8)),T===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.R8UI),Q===r.UNSIGNED_SHORT&&(ce=r.R16UI),Q===r.UNSIGNED_INT&&(ce=r.R32UI),Q===r.BYTE&&(ce=r.R8I),Q===r.SHORT&&(ce=r.R16I),Q===r.INT&&(ce=r.R32I)),T===r.RG&&(Q===r.FLOAT&&(ce=r.RG32F),Q===r.HALF_FLOAT&&(ce=r.RG16F),Q===r.UNSIGNED_BYTE&&(ce=r.RG8)),T===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RG16UI),Q===r.UNSIGNED_INT&&(ce=r.RG32UI),Q===r.BYTE&&(ce=r.RG8I),Q===r.SHORT&&(ce=r.RG16I),Q===r.INT&&(ce=r.RG32I)),T===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),Q===r.UNSIGNED_INT&&(ce=r.RGB32UI),Q===r.BYTE&&(ce=r.RGB8I),Q===r.SHORT&&(ce=r.RGB16I),Q===r.INT&&(ce=r.RGB32I)),T===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ce=r.RGBA32UI),Q===r.BYTE&&(ce=r.RGBA8I),Q===r.SHORT&&(ce=r.RGBA16I),Q===r.INT&&(ce=r.RGBA32I)),T===r.RGB&&Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),T===r.RGBA){const qe=xe?Uu:Lt.getTransfer(pe);Q===r.FLOAT&&(ce=r.RGBA32F),Q===r.HALF_FLOAT&&(ce=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ce=qe===Ft?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function A(D,T){let Q;return D?T===null||T===So||T===wa?Q=r.DEPTH24_STENCIL8:T===li?Q=r.DEPTH32F_STENCIL8:T===Ma&&(Q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===So||T===wa?Q=r.DEPTH_COMPONENT24:T===li?Q=r.DEPTH_COMPONENT32F:T===Ma&&(Q=r.DEPTH_COMPONENT16),Q}function G(D,T){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==yn&&D.minFilter!==kr?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function N(D){const T=D.target;T.removeEventListener("dispose",N),W(T),T.isVideoTexture&&m.delete(T)}function k(D){const T=D.target;T.removeEventListener("dispose",k),C(T)}function W(D){const T=o.get(D);if(T.__webglInit===void 0)return;const Q=D.source,pe=y.get(Q);if(pe){const xe=pe[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&b(D),Object.keys(pe).length===0&&y.delete(Q)}o.remove(D)}function b(D){const T=o.get(D);r.deleteTexture(T.__webglTexture);const Q=D.source,pe=y.get(Q);delete pe[T.__cacheKey],c.memory.textures--}function C(D){const T=o.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),o.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let xe=0;xe<T.__webglFramebuffer[pe].length;xe++)r.deleteFramebuffer(T.__webglFramebuffer[pe][xe]);else r.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)r.deleteFramebuffer(T.__webglFramebuffer[pe]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=D.textures;for(let pe=0,xe=Q.length;pe<xe;pe++){const ce=o.get(Q[pe]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),c.memory.textures--),o.remove(Q[pe])}o.remove(D)}let V=0;function ae(){V=0}function Z(){const D=V;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),V+=1,D}function J(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function fe(D,T){const Q=o.get(D);if(D.isVideoTexture&&je(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(Q,D,T);return}}t.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+T)}function ue(D,T){const Q=o.get(D);if(D.version>0&&Q.__version!==D.version){Ce(Q,D,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+T)}function he(D,T){const Q=o.get(D);if(D.version>0&&Q.__version!==D.version){Ce(Q,D,T);return}t.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+T)}function z(D,T){const Q=o.get(D);if(D.version>0&&Q.__version!==D.version){Se(Q,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+T)}const de={[Ea]:r.REPEAT,[ai]:r.CLAMP_TO_EDGE,[bf]:r.MIRRORED_REPEAT},le={[yn]:r.NEAREST,[hE]:r.NEAREST_MIPMAP_NEAREST,[ql]:r.NEAREST_MIPMAP_LINEAR,[kr]:r.LINEAR,[Pd]:r.LINEAR_MIPMAP_NEAREST,[_o]:r.LINEAR_MIPMAP_LINEAR},F={[_E]:r.NEVER,[wE]:r.ALWAYS,[xE]:r.LESS,[b_]:r.LEQUAL,[yE]:r.EQUAL,[ME]:r.GEQUAL,[SE]:r.GREATER,[EE]:r.NOTEQUAL};function re(D,T){if(T.type===li&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===kr||T.magFilter===Pd||T.magFilter===ql||T.magFilter===_o||T.minFilter===kr||T.minFilter===Pd||T.minFilter===ql||T.minFilter===_o)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,de[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,de[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,de[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,le[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,le[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yn||T.minFilter!==ql&&T.minFilter!==_o||T.type===li&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||o.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),o.get(T).__currentAnisotropy=T.anisotropy}}}function ke(D,T){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",N));const pe=T.source;let xe=y.get(pe);xe===void 0&&(xe={},y.set(pe,xe));const ce=J(T);if(ce!==D.__cacheKey){xe[ce]===void 0&&(xe[ce]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),xe[ce].usedTimes++;const qe=xe[D.__cacheKey];qe!==void 0&&(xe[D.__cacheKey].usedTimes--,qe.usedTimes===0&&b(T)),D.__cacheKey=ce,D.__webglTexture=xe[ce].texture}return Q}function te(D,T,Q){return Math.floor(Math.floor(D/Q)/T)}function me(D,T,Q,pe){const ce=D.updateRanges;if(ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,Q,pe,T.data);else{ce.sort((ge,Be)=>ge.start-Be.start);let qe=0;for(let ge=1;ge<ce.length;ge++){const Be=ce[qe],st=ce[ge],nt=Be.start+Be.count,Ue=te(st.start,T.width,4),at=te(Be.start,T.width,4);st.start<=nt+1&&Ue===at&&te(st.start+st.count-1,T.width,4)===Ue?Be.count=Math.max(Be.count,st.start+st.count-Be.start):(++qe,ce[qe]=st)}ce.length=qe+1;const De=r.getParameter(r.UNPACK_ROW_LENGTH),He=r.getParameter(r.UNPACK_SKIP_PIXELS),Qe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let ge=0,Be=ce.length;ge<Be;ge++){const st=ce[ge],nt=Math.floor(st.start/4),Ue=Math.ceil(st.count/4),at=nt%T.width,j=Math.floor(nt/T.width),Ne=Ue,ye=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,at),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),t.texSubImage2D(r.TEXTURE_2D,0,at,j,Ne,ye,Q,pe,T.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,De),r.pixelStorei(r.UNPACK_SKIP_PIXELS,He),r.pixelStorei(r.UNPACK_SKIP_ROWS,Qe)}}function Ce(D,T,Q){let pe=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=r.TEXTURE_3D);const xe=ke(D,T),ce=T.source;t.bindTexture(pe,D.__webglTexture,r.TEXTURE0+Q);const qe=o.get(ce);if(ce.version!==qe.__version||xe===!0){t.activeTexture(r.TEXTURE0+Q);const De=Lt.getPrimaries(Lt.workingColorSpace),He=T.colorSpace===Vi?null:Lt.getPrimaries(T.colorSpace),Qe=T.colorSpace===Vi||De===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let ge=M(T.image,!1,s.maxTextureSize);ge=ze(T,ge);const Be=l.convert(T.format,T.colorSpace),st=l.convert(T.type);let nt=P(T.internalFormat,Be,st,T.colorSpace,T.isVideoTexture);re(pe,T);let Ue;const at=T.mipmaps,j=T.isVideoTexture!==!0,Ne=qe.__version===void 0||xe===!0,ye=ce.dataReady,Oe=G(T,ge);if(T.isDepthTexture)nt=A(T.format===Ca,T.type),Ne&&(j?t.texStorage2D(r.TEXTURE_2D,1,nt,ge.width,ge.height):t.texImage2D(r.TEXTURE_2D,0,nt,ge.width,ge.height,0,Be,st,null));else if(T.isDataTexture)if(at.length>0){j&&Ne&&t.texStorage2D(r.TEXTURE_2D,Oe,nt,at[0].width,at[0].height);for(let we=0,ve=at.length;we<ve;we++)Ue=at[we],j?ye&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,Ue.width,Ue.height,Be,st,Ue.data):t.texImage2D(r.TEXTURE_2D,we,nt,Ue.width,Ue.height,0,Be,st,Ue.data);T.generateMipmaps=!1}else j?(Ne&&t.texStorage2D(r.TEXTURE_2D,Oe,nt,ge.width,ge.height),ye&&me(T,ge,Be,st)):t.texImage2D(r.TEXTURE_2D,0,nt,ge.width,ge.height,0,Be,st,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){j&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,nt,at[0].width,at[0].height,ge.depth);for(let we=0,ve=at.length;we<ve;we++)if(Ue=at[we],T.format!==Mr)if(Be!==null)if(j){if(ye)if(T.layerUpdates.size>0){const Xe=qg(Ue.width,Ue.height,T.format,T.type);for(const pt of T.layerUpdates){const be=Ue.data.subarray(pt*Xe/Ue.data.BYTES_PER_ELEMENT,(pt+1)*Xe/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,pt,Ue.width,Ue.height,1,Be,be)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,Ue.width,Ue.height,ge.depth,Be,Ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,we,nt,Ue.width,Ue.height,ge.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?ye&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,Ue.width,Ue.height,ge.depth,Be,st,Ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,we,nt,Ue.width,Ue.height,ge.depth,0,Be,st,Ue.data)}else{j&&Ne&&t.texStorage2D(r.TEXTURE_2D,Oe,nt,at[0].width,at[0].height);for(let we=0,ve=at.length;we<ve;we++)Ue=at[we],T.format!==Mr?Be!==null?j?ye&&t.compressedTexSubImage2D(r.TEXTURE_2D,we,0,0,Ue.width,Ue.height,Be,Ue.data):t.compressedTexImage2D(r.TEXTURE_2D,we,nt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?ye&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,Ue.width,Ue.height,Be,st,Ue.data):t.texImage2D(r.TEXTURE_2D,we,nt,Ue.width,Ue.height,0,Be,st,Ue.data)}else if(T.isDataArrayTexture)if(j){if(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,nt,ge.width,ge.height,ge.depth),ye)if(T.layerUpdates.size>0){const we=qg(ge.width,ge.height,T.format,T.type);for(const ve of T.layerUpdates){const Xe=ge.data.subarray(ve*we/ge.data.BYTES_PER_ELEMENT,(ve+1)*we/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,ge.width,ge.height,1,Be,st,Xe)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Be,st,ge.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,nt,ge.width,ge.height,ge.depth,0,Be,st,ge.data);else if(T.isData3DTexture)j?(Ne&&t.texStorage3D(r.TEXTURE_3D,Oe,nt,ge.width,ge.height,ge.depth),ye&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Be,st,ge.data)):t.texImage3D(r.TEXTURE_3D,0,nt,ge.width,ge.height,ge.depth,0,Be,st,ge.data);else if(T.isFramebufferTexture){if(Ne)if(j)t.texStorage2D(r.TEXTURE_2D,Oe,nt,ge.width,ge.height);else{let we=ge.width,ve=ge.height;for(let Xe=0;Xe<Oe;Xe++)t.texImage2D(r.TEXTURE_2D,Xe,nt,we,ve,0,Be,st,null),we>>=1,ve>>=1}}else if(at.length>0){if(j&&Ne){const we=Rt(at[0]);t.texStorage2D(r.TEXTURE_2D,Oe,nt,we.width,we.height)}for(let we=0,ve=at.length;we<ve;we++)Ue=at[we],j?ye&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,Be,st,Ue):t.texImage2D(r.TEXTURE_2D,we,nt,Be,st,Ue);T.generateMipmaps=!1}else if(j){if(Ne){const we=Rt(ge);t.texStorage2D(r.TEXTURE_2D,Oe,nt,we.width,we.height)}ye&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,st,ge)}else t.texImage2D(r.TEXTURE_2D,0,nt,Be,st,ge);x(T)&&_(pe),qe.__version=ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Se(D,T,Q){if(T.image.length!==6)return;const pe=ke(D,T),xe=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Q);const ce=o.get(xe);if(xe.version!==ce.__version||pe===!0){t.activeTexture(r.TEXTURE0+Q);const qe=Lt.getPrimaries(Lt.workingColorSpace),De=T.colorSpace===Vi?null:Lt.getPrimaries(T.colorSpace),He=T.colorSpace===Vi||qe===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Qe=T.isCompressedTexture||T.image[0].isCompressedTexture,ge=T.image[0]&&T.image[0].isDataTexture,Be=[];for(let ve=0;ve<6;ve++)!Qe&&!ge?Be[ve]=M(T.image[ve],!0,s.maxCubemapSize):Be[ve]=ge?T.image[ve].image:T.image[ve],Be[ve]=ze(T,Be[ve]);const st=Be[0],nt=l.convert(T.format,T.colorSpace),Ue=l.convert(T.type),at=P(T.internalFormat,nt,Ue,T.colorSpace),j=T.isVideoTexture!==!0,Ne=ce.__version===void 0||pe===!0,ye=xe.dataReady;let Oe=G(T,st);re(r.TEXTURE_CUBE_MAP,T);let we;if(Qe){j&&Ne&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,at,st.width,st.height);for(let ve=0;ve<6;ve++){we=Be[ve].mipmaps;for(let Xe=0;Xe<we.length;Xe++){const pt=we[Xe];T.format!==Mr?nt!==null?j?ye&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,0,0,pt.width,pt.height,nt,pt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,at,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,0,0,pt.width,pt.height,nt,Ue,pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,at,pt.width,pt.height,0,nt,Ue,pt.data)}}}else{if(we=T.mipmaps,j&&Ne){we.length>0&&Oe++;const ve=Rt(Be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,at,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(ge){j?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Be[ve].width,Be[ve].height,nt,Ue,Be[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,at,Be[ve].width,Be[ve].height,0,nt,Ue,Be[ve].data);for(let Xe=0;Xe<we.length;Xe++){const be=we[Xe].image[ve].image;j?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,0,0,be.width,be.height,nt,Ue,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,at,be.width,be.height,0,nt,Ue,be.data)}}else{j?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,nt,Ue,Be[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,at,nt,Ue,Be[ve]);for(let Xe=0;Xe<we.length;Xe++){const pt=we[Xe];j?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,0,0,nt,Ue,pt.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,at,nt,Ue,pt.image[ve])}}}x(T)&&_(r.TEXTURE_CUBE_MAP),ce.__version=xe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ae(D,T,Q,pe,xe,ce){const qe=l.convert(Q.format,Q.colorSpace),De=l.convert(Q.type),He=P(Q.internalFormat,qe,De,Q.colorSpace),Qe=o.get(T),ge=o.get(Q);if(ge.__renderTarget=T,!Qe.__hasExternalTextures){const Be=Math.max(1,T.width>>ce),st=Math.max(1,T.height>>ce);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?t.texImage3D(xe,ce,He,Be,st,T.depth,0,qe,De,null):t.texImage2D(xe,ce,He,Be,st,0,qe,De,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),mt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,xe,ge.__webglTexture,0,We(T)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,xe,ge.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(D,T,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const pe=T.depthTexture,xe=pe&&pe.isDepthTexture?pe.type:null,ce=A(T.stencilBuffer,xe),qe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=We(T);mt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De,ce,T.width,T.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,De,ce,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ce,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qe,r.RENDERBUFFER,D)}else{const pe=T.textures;for(let xe=0;xe<pe.length;xe++){const ce=pe[xe],qe=l.convert(ce.format,ce.colorSpace),De=l.convert(ce.type),He=P(ce.internalFormat,qe,De,ce.colorSpace),Qe=We(T);Q&&mt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,He,T.width,T.height):mt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe,He,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,He,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=o.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe(T.depthTexture,0);const xe=pe.__webglTexture,ce=We(T);if(T.depthTexture.format===Ta)mt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0);else if(T.depthTexture.format===Ca)mt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Le(D){const T=o.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",xe)};pe.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=pe}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const pe=D.texture.mipmaps;pe&&pe.length>0?_e(T.__webglFramebuffer[0],D):_e(T.__webglFramebuffer,D)}else if(Q){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=r.createRenderbuffer(),ne(T.__webglDepthbuffer[pe],D,!1);else{const xe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,ce)}}else{const pe=D.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ne(T.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function it(D,T,Q){const pe=o.get(D);T!==void 0&&Ae(pe.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&Le(D)}function Je(D){const T=D.texture,Q=o.get(D),pe=o.get(T);D.addEventListener("dispose",k);const xe=D.textures,ce=D.isWebGLCubeRenderTarget===!0,qe=xe.length>1;if(qe||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=T.version,c.memory.textures++),ce){Q.__webglFramebuffer=[];for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[De]=[];for(let He=0;He<T.mipmaps.length;He++)Q.__webglFramebuffer[De][He]=r.createFramebuffer()}else Q.__webglFramebuffer[De]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)Q.__webglFramebuffer[De]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(qe)for(let De=0,He=xe.length;De<He;De++){const Qe=o.get(xe[De]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&mt(D)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let De=0;De<xe.length;De++){const He=xe[De];Q.__webglColorRenderbuffer[De]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[De]);const Qe=l.convert(He.format,He.colorSpace),ge=l.convert(He.type),Be=P(He.internalFormat,Qe,ge,He.colorSpace,D.isXRRenderTarget===!0),st=We(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,st,Be,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Q.__webglColorRenderbuffer[De])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),ne(Q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),re(r.TEXTURE_CUBE_MAP,T);for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)Ae(Q.__webglFramebuffer[De][He],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+De,He);else Ae(Q.__webglFramebuffer[De],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);x(T)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let De=0,He=xe.length;De<He;De++){const Qe=xe[De],ge=o.get(Qe);t.bindTexture(r.TEXTURE_2D,ge.__webglTexture),re(r.TEXTURE_2D,Qe),Ae(Q.__webglFramebuffer,D,Qe,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,0),x(Qe)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let De=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(De=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(De,pe.__webglTexture),re(De,T),T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)Ae(Q.__webglFramebuffer[He],D,T,r.COLOR_ATTACHMENT0,De,He);else Ae(Q.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,De,0);x(T)&&_(De),t.unbindTexture()}D.depthBuffer&&Le(D)}function I(D){const T=D.textures;for(let Q=0,pe=T.length;Q<pe;Q++){const xe=T[Q];if(x(xe)){const ce=L(D),qe=o.get(xe).__webglTexture;t.bindTexture(ce,qe),_(ce),t.unbindTexture()}}}const ot=[],ct=[];function Tt(D){if(D.samples>0){if(mt(D)===!1){const T=D.textures,Q=D.width,pe=D.height;let xe=r.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qe=o.get(D),De=T.length>1;if(De)for(let Qe=0;Qe<T.length;Qe++)t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const He=D.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Qe=0;Qe<T.length;Qe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),De){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qe.__webglColorRenderbuffer[Qe]);const ge=o.get(T[Qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,Q,pe,0,0,Q,pe,xe,r.NEAREST),f===!0&&(ot.length=0,ct.length=0,ot.push(r.COLOR_ATTACHMENT0+Qe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ot.push(ce),ct.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ct)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),De)for(let Qe=0;Qe<T.length;Qe++){t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,qe.__webglColorRenderbuffer[Qe]);const ge=o.get(T[Qe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function We(D){return Math.min(s.maxSamples,D.samples)}function mt(D){const T=o.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function je(D){const T=c.render.frame;m.get(D)!==T&&(m.set(D,T),D.update())}function ze(D,T){const Q=D.colorSpace,pe=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==_s&&Q!==Vi&&(Lt.getTransfer(Q)===Ft?(pe!==Mr||xe!==Gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function Rt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=ae,this.setTexture2D=fe,this.setTexture2DArray=ue,this.setTexture3D=he,this.setTextureCube=z,this.rebindTextures=it,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=mt}function oR(r,e){function t(o,s=Vi){let l;const c=Lt.getTransfer(s);if(o===Gr)return r.UNSIGNED_BYTE;if(o===xh)return r.UNSIGNED_SHORT_4_4_4_4;if(o===yh)return r.UNSIGNED_SHORT_5_5_5_1;if(o===M_)return r.UNSIGNED_INT_5_9_9_9_REV;if(o===S_)return r.BYTE;if(o===E_)return r.SHORT;if(o===Ma)return r.UNSIGNED_SHORT;if(o===_h)return r.INT;if(o===So)return r.UNSIGNED_INT;if(o===li)return r.FLOAT;if(o===Na)return r.HALF_FLOAT;if(o===w_)return r.ALPHA;if(o===T_)return r.RGB;if(o===Mr)return r.RGBA;if(o===Ta)return r.DEPTH_COMPONENT;if(o===Ca)return r.DEPTH_STENCIL;if(o===C_)return r.RED;if(o===Sh)return r.RED_INTEGER;if(o===R_)return r.RG;if(o===Eh)return r.RG_INTEGER;if(o===Mh)return r.RGBA_INTEGER;if(o===Mu||o===wu||o===Tu||o===Cu)if(c===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===Mu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===wu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Tu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Cu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===Mu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===wu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Tu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Cu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Pf||o===Lf||o===Df||o===Uf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===Pf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Lf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Df)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Uf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Nf||o===If||o===Ff)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(o===Nf||o===If)return c===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===Ff)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===kf||o===Of||o===Bf||o===zf||o===Hf||o===Vf||o===Gf||o===Wf||o===jf||o===Xf||o===$f||o===Yf||o===qf||o===Kf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(o===kf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Of)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Bf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===zf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Hf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Vf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Gf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Wf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===jf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Xf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===$f)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Yf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===qf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Kf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Ru||o===Zf||o===Jf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(o===Ru)return c===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Zf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Jf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===A_||o===Qf||o===eh||o===th)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(o===Ru)return l.COMPRESSED_RED_RGTC1_EXT;if(o===Qf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===eh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===th)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===wa?r.UNSIGNED_INT_24_8:r[o]!==void 0?r[o]:null}return{convert:t}}const sR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aR=`
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

}`;class lR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,o){if(this.texture===null){const s=new On,l=e.properties.get(s);l.__webglTexture=t.texture,(t.depthNear!==o.depthNear||t.depthFar!==o.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,o=new ji({vertexShader:sR,fragmentShader:aR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Or(new Hu(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uR extends Ms{constructor(e,t){super();const o=this;let s=null,l=1,c=null,d="local-floor",f=1,p=null,m=null,v=null,y=null,S=null,E=null;const M=new lR,x=t.getContextAttributes();let _=null,L=null;const P=[],A=[],G=new Dt;let N=null;const k=new dr;k.viewport=new Kt;const W=new dr;W.viewport=new Kt;const b=[k,W],C=new PM;let V=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let me=P[te];return me===void 0&&(me=new Zd,P[te]=me),me.getTargetRaySpace()},this.getControllerGrip=function(te){let me=P[te];return me===void 0&&(me=new Zd,P[te]=me),me.getGripSpace()},this.getHand=function(te){let me=P[te];return me===void 0&&(me=new Zd,P[te]=me),me.getHandSpace()};function Z(te){const me=A.indexOf(te.inputSource);if(me===-1)return;const Ce=P[me];Ce!==void 0&&(Ce.update(te.inputSource,te.frame,p||c),Ce.dispatchEvent({type:te.type,data:te.inputSource}))}function J(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",fe);for(let te=0;te<P.length;te++){const me=A[te];me!==null&&(A[te]=null,P[te].disconnect(me))}V=null,ae=null,M.reset(),e.setRenderTarget(_),S=null,y=null,v=null,s=null,L=null,ke.stop(),o.isPresenting=!1,e.setPixelRatio(N),e.setSize(G.width,G.height,!1),o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",J),s.addEventListener("inputsourceschange",fe),x.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Se=null,Ae=null;x.depth&&(Ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=x.stencil?Ca:Ta,Se=x.stencil?wa:So);const ne={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};v=new XRWebGLBinding(s,t),y=v.createProjectionLayer(ne),s.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new Eo(y.textureWidth,y.textureHeight,{format:Mr,type:Gr,depthTexture:new B_(y.textureWidth,y.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ce={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Eo(S.framebufferWidth,S.framebufferHeight,{format:Mr,type:Gr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),p=null,c=await s.requestReferenceSpace(d),ke.setContext(s),ke.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function fe(te){for(let me=0;me<te.removed.length;me++){const Ce=te.removed[me],Se=A.indexOf(Ce);Se>=0&&(A[Se]=null,P[Se].disconnect(Ce))}for(let me=0;me<te.added.length;me++){const Ce=te.added[me];let Se=A.indexOf(Ce);if(Se===-1){for(let ne=0;ne<P.length;ne++)if(ne>=A.length){A.push(Ce),Se=ne;break}else if(A[ne]===null){A[ne]=Ce,Se=ne;break}if(Se===-1)break}const Ae=P[Se];Ae&&Ae.connect(Ce)}}const ue=new ie,he=new ie;function z(te,me,Ce){ue.setFromMatrixPosition(me.matrixWorld),he.setFromMatrixPosition(Ce.matrixWorld);const Se=ue.distanceTo(he),Ae=me.projectionMatrix.elements,ne=Ce.projectionMatrix.elements,_e=Ae[14]/(Ae[10]-1),Le=Ae[14]/(Ae[10]+1),it=(Ae[9]+1)/Ae[5],Je=(Ae[9]-1)/Ae[5],I=(Ae[8]-1)/Ae[0],ot=(ne[8]+1)/ne[0],ct=_e*I,Tt=_e*ot,We=Se/(-I+ot),mt=We*-I;if(me.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(mt),te.translateZ(We),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ae[10]===-1)te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const je=_e+We,ze=Le+We,Rt=ct-mt,D=Tt+(Se-mt),T=it*Le/ze*je,Q=Je*Le/ze*je;te.projectionMatrix.makePerspective(Rt,D,T,Q,je,ze),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function de(te,me){me===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(me.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let me=te.near,Ce=te.far;M.texture!==null&&(M.depthNear>0&&(me=M.depthNear),M.depthFar>0&&(Ce=M.depthFar)),C.near=W.near=k.near=me,C.far=W.far=k.far=Ce,(V!==C.near||ae!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,ae=C.far),k.layers.mask=te.layers.mask|2,W.layers.mask=te.layers.mask|4,C.layers.mask=k.layers.mask|W.layers.mask;const Se=te.parent,Ae=C.cameras;de(C,Se);for(let ne=0;ne<Ae.length;ne++)de(Ae[ne],Se);Ae.length===2?z(C,k,W):C.projectionMatrix.copy(k.projectionMatrix),le(te,C,Se)};function le(te,me,Ce){Ce===null?te.matrix.copy(me.matrixWorld):(te.matrix.copy(Ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(me.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ra*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&S===null))return f},this.setFoveation=function(te){f=te,y!==null&&(y.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)};let F=null;function re(te,me){if(m=me.getViewerPose(p||c),E=me,m!==null){const Ce=m.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Se=!1;Ce.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let _e=0;_e<Ce.length;_e++){const Le=Ce[_e];let it=null;if(S!==null)it=S.getViewport(Le);else{const I=v.getViewSubImage(y,Le);it=I.viewport,_e===0&&(e.setRenderTargetTextures(L,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(L))}let Je=b[_e];Je===void 0&&(Je=new dr,Je.layers.enable(_e),Je.viewport=new Kt,b[_e]=Je),Je.matrix.fromArray(Le.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Le.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(it.x,it.y,it.width,it.height),_e===0&&(C.matrix.copy(Je.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Se===!0&&C.cameras.push(Je)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){const _e=v.getDepthInformation(Ce[0]);_e&&_e.isValid&&_e.texture&&M.init(e,_e,s.renderState)}}for(let Ce=0;Ce<P.length;Ce++){const Se=A[Ce],Ae=P[Ce];Se!==null&&Ae!==void 0&&Ae.update(Se,me,p||c)}F&&F(te,me),me.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:me}),E=null}const ke=new H_;ke.setAnimationLoop(re),this.setAnimationLoop=function(te){F=te},this.dispose=function(){}}}const co=new kn,cR=new Zt;function dR(r,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function o(x,_){_.color.getRGB(x.fogColor.value,F_(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,L,P,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(x,_):_.isMeshToonMaterial?(l(x,_),v(x,_)):_.isMeshPhongMaterial?(l(x,_),m(x,_)):_.isMeshStandardMaterial?(l(x,_),y(x,_),_.isMeshPhysicalMaterial&&S(x,_,A)):_.isMeshMatcapMaterial?(l(x,_),E(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),M(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?f(x,_,L,P):_.isSpriteMaterial?p(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===$n&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===$n&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const L=e.get(_),P=L.envMap,A=L.envMapRotation;P&&(x.envMap.value=P,co.copy(A),co.x*=-1,co.y*=-1,co.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(co.y*=-1,co.z*=-1),x.envMapRotation.value.setFromMatrix4(cR.makeRotationFromEuler(co)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function f(x,_,L,P){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*L,x.scale.value=P*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,L){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===$n&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function M(x,_){const L=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:s}}function fR(r,e,t,o){let s={},l={},c=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,P){const A=P.program;o.uniformBlockBinding(L,A)}function p(L,P){let A=s[L.id];A===void 0&&(E(L),A=m(L),s[L.id]=A,L.addEventListener("dispose",x));const G=P.program;o.updateUBOMapping(L,G);const N=e.render.frame;l[L.id]!==N&&(y(L),l[L.id]=N)}function m(L){const P=v();L.__bindingPointIndex=P;const A=r.createBuffer(),G=L.__size,N=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,G,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,A),A}function v(){for(let L=0;L<d;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const P=s[L.id],A=L.uniforms,G=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let N=0,k=A.length;N<k;N++){const W=Array.isArray(A[N])?A[N]:[A[N]];for(let b=0,C=W.length;b<C;b++){const V=W[b];if(S(V,N,b,G)===!0){const ae=V.__offset,Z=Array.isArray(V.value)?V.value:[V.value];let J=0;for(let fe=0;fe<Z.length;fe++){const ue=Z[fe],he=M(ue);typeof ue=="number"||typeof ue=="boolean"?(V.__data[0]=ue,r.bufferSubData(r.UNIFORM_BUFFER,ae+J,V.__data)):ue.isMatrix3?(V.__data[0]=ue.elements[0],V.__data[1]=ue.elements[1],V.__data[2]=ue.elements[2],V.__data[3]=0,V.__data[4]=ue.elements[3],V.__data[5]=ue.elements[4],V.__data[6]=ue.elements[5],V.__data[7]=0,V.__data[8]=ue.elements[6],V.__data[9]=ue.elements[7],V.__data[10]=ue.elements[8],V.__data[11]=0):(ue.toArray(V.__data,J),J+=he.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ae,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,P,A,G){const N=L.value,k=P+"_"+A;if(G[k]===void 0)return typeof N=="number"||typeof N=="boolean"?G[k]=N:G[k]=N.clone(),!0;{const W=G[k];if(typeof N=="number"||typeof N=="boolean"){if(W!==N)return G[k]=N,!0}else if(W.equals(N)===!1)return W.copy(N),!0}return!1}function E(L){const P=L.uniforms;let A=0;const G=16;for(let k=0,W=P.length;k<W;k++){const b=Array.isArray(P[k])?P[k]:[P[k]];for(let C=0,V=b.length;C<V;C++){const ae=b[C],Z=Array.isArray(ae.value)?ae.value:[ae.value];for(let J=0,fe=Z.length;J<fe;J++){const ue=Z[J],he=M(ue),z=A%G,de=z%he.boundary,le=z+de;A+=de,le!==0&&G-le<he.storage&&(A+=G-le),ae.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=A,A+=he.storage}}}const N=A%G;return N>0&&(A+=G-N),L.__size=A,L.__cache={},this}function M(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function x(L){const P=L.target;P.removeEventListener("dispose",x);const A=c.indexOf(P.__bindingPointIndex);c.splice(A,1),r.deleteBuffer(s[P.id]),delete s[P.id],delete l[P.id]}function _(){for(const L in s)r.deleteBuffer(s[L]);c=[],s={},l={}}return{bind:f,update:p,dispose:_}}class hR{constructor(e={}){const{canvas:t=HE(),context:o=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(o!==null){if(typeof WebGLRenderingContext<"u"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=o.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),M=new Int32Array(4);let x=null,_=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let G=!1;this._outputColorSpace=Fn;let N=0,k=0,W=null,b=-1,C=null;const V=new Kt,ae=new Kt;let Z=null;const J=new Nt(0);let fe=0,ue=t.width,he=t.height,z=1,de=null,le=null;const F=new Kt(0,0,ue,he),re=new Kt(0,0,ue,he);let ke=!1;const te=new Ah;let me=!1,Ce=!1;const Se=new Zt,Ae=new Zt,ne=new ie,_e=new Kt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Je(){return W===null?z:1}let I=o;function ot(R,$){return t.getContext(R,$)}try{const R={alpha:!0,depth:s,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vh}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",ve,!1),I===null){const $="webgl2";if(I=ot($,R),I===null)throw ot($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ct,Tt,We,mt,je,ze,Rt,D,T,Q,pe,xe,ce,qe,De,He,Qe,ge,Be,st,nt,Ue,at,j;function Ne(){ct=new M1(I),ct.init(),Ue=new oR(I,ct),Tt=new g1(I,ct,e,Ue),We=new rR(I,ct),Tt.reverseDepthBuffer&&y&&We.buffers.depth.setReversed(!0),mt=new C1(I),je=new WC,ze=new iR(I,ct,We,je,Tt,Ue,mt),Rt=new _1(A),D=new E1(A),T=new DM(I),at=new p1(I,T),Q=new w1(I,T,mt,at),pe=new A1(I,Q,T,mt),Be=new R1(I,Tt,ze),He=new v1(je),xe=new GC(A,Rt,D,ct,Tt,at,He),ce=new dR(A,je),qe=new XC,De=new JC(ct),ge=new h1(A,Rt,D,We,pe,S,f),Qe=new tR(A,pe,Tt),j=new fR(I,mt,Tt,We),st=new m1(I,ct,mt),nt=new T1(I,ct,mt),mt.programs=xe.programs,A.capabilities=Tt,A.extensions=ct,A.properties=je,A.renderLists=qe,A.shadowMap=Qe,A.state=We,A.info=mt}Ne();const ye=new uR(A,I);this.xr=ye,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(ue,he,!1))},this.getSize=function(R){return R.set(ue,he)},this.setSize=function(R,$,se=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=R,he=$,t.width=Math.floor(R*z),t.height=Math.floor($*z),se===!0&&(t.style.width=R+"px",t.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(ue*z,he*z).floor()},this.setDrawingBufferSize=function(R,$,se){ue=R,he=$,z=se,t.width=Math.floor(R*se),t.height=Math.floor($*se),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,$,se,K){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,$,se,K),We.viewport(V.copy(F).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,$,se,K){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,$,se,K),We.scissor(ae.copy(re).multiplyScalar(z).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(R){We.setScissorTest(ke=R)},this.setOpaqueSort=function(R){de=R},this.setTransparentSort=function(R){le=R},this.getClearColor=function(R){return R.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,se=!0){let K=0;if(R){let Y=!1;if(W!==null){const Re=W.texture.format;Y=Re===Mh||Re===Eh||Re===Sh}if(Y){const Re=W.texture.type,Ie=Re===Gr||Re===So||Re===Ma||Re===wa||Re===xh||Re===yh,$e=ge.getClearColor(),Ge=ge.getClearAlpha(),ht=$e.r,ft=$e.g,Ke=$e.b;Ie?(E[0]=ht,E[1]=ft,E[2]=Ke,E[3]=Ge,I.clearBufferuiv(I.COLOR,0,E)):(M[0]=ht,M[1]=ft,M[2]=Ke,M[3]=Ge,I.clearBufferiv(I.COLOR,0,M))}else K|=I.COLOR_BUFFER_BIT}$&&(K|=I.DEPTH_BUFFER_BIT),se&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ge.dispose(),qe.dispose(),De.dispose(),je.dispose(),Rt.dispose(),D.dispose(),pe.dispose(),at.dispose(),j.dispose(),xe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Vt),ye.removeEventListener("sessionend",Qt),mn.stop()};function Oe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=mt.autoReset,$=Qe.enabled,se=Qe.autoUpdate,K=Qe.needsUpdate,Y=Qe.type;Ne(),mt.autoReset=R,Qe.enabled=$,Qe.autoUpdate=se,Qe.needsUpdate=K,Qe.type=Y}function ve(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Xe(R){const $=R.target;$.removeEventListener("dispose",Xe),pt($)}function pt(R){be(R),je.remove(R)}function be(R){const $=je.get(R).programs;$!==void 0&&($.forEach(function(se){xe.releaseProgram(se)}),R.isShaderMaterial&&xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,se,K,Y,Re){$===null&&($=Le);const Ie=Y.isMesh&&Y.matrixWorld.determinant()<0,$e=Va(R,$,se,K,Y);We.setMaterial(K,Ie);let Ge=se.index,ht=1;if(K.wireframe===!0){if(Ge=Q.getWireframeAttribute(se),Ge===void 0)return;ht=2}const ft=se.drawRange,Ke=se.attributes.position;let Et=ft.start*ht,xt=(ft.start+ft.count)*ht;Re!==null&&(Et=Math.max(Et,Re.start*ht),xt=Math.min(xt,(Re.start+Re.count)*ht)),Ge!==null?(Et=Math.max(Et,0),xt=Math.min(xt,Ge.count)):Ke!=null&&(Et=Math.max(Et,0),xt=Math.min(xt,Ke.count));const Gt=xt-Et;if(Gt<0||Gt===1/0)return;at.setup(Y,K,$e,se,Ge);let kt,Ut=st;if(Ge!==null&&(kt=T.get(Ge),Ut=nt,Ut.setIndex(kt)),Y.isMesh)K.wireframe===!0?(We.setLineWidth(K.wireframeLinewidth*Je()),Ut.setMode(I.LINES)):Ut.setMode(I.TRIANGLES);else if(Y.isLine){let rt=K.linewidth;rt===void 0&&(rt=1),We.setLineWidth(rt*Je()),Y.isLineSegments?Ut.setMode(I.LINES):Y.isLineLoop?Ut.setMode(I.LINE_LOOP):Ut.setMode(I.LINE_STRIP)}else Y.isPoints?Ut.setMode(I.POINTS):Y.isSprite&&Ut.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)hs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Ut.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const rt=Y._multiDrawStarts,It=Y._multiDrawCounts,Mt=Y._multiDrawCount,ln=Ge?T.get(Ge).bytesPerElement:1,gi=je.get(K).currentProgram.getUniforms();for(let Ln=0;Ln<Mt;Ln++)gi.setValue(I,"_gl_DrawID",Ln),Ut.render(rt[Ln]/ln,It[Ln])}else if(Y.isInstancedMesh)Ut.renderInstances(Et,Gt,Y.count);else if(se.isInstancedBufferGeometry){const rt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,It=Math.min(se.instanceCount,rt);Ut.renderInstances(Et,Gt,It)}else Ut.render(Et,Gt)};function dt(R,$,se){R.transparent===!0&&R.side===Ir&&R.forceSinglePass===!1?(R.side=$n,R.needsUpdate=!0,wo(R,$,se),R.side=Wi,R.needsUpdate=!0,wo(R,$,se),R.side=Ir):wo(R,$,se)}this.compile=function(R,$,se=null){se===null&&(se=R),_=De.get(se),_.init($),P.push(_),se.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),R!==se&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const K=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Re=Y.material;if(Re)if(Array.isArray(Re))for(let Ie=0;Ie<Re.length;Ie++){const $e=Re[Ie];dt($e,se,Y),K.add($e)}else dt(Re,se,Y),K.add(Re)}),_=P.pop(),K},this.compileAsync=function(R,$,se=null){const K=this.compile(R,$,se);return new Promise(Y=>{function Re(){if(K.forEach(function(Ie){je.get(Ie).currentProgram.isReady()&&K.delete(Ie)}),K.size===0){Y(R);return}setTimeout(Re,10)}ct.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let vt=null;function St(R){vt&&vt(R)}function Vt(){mn.stop()}function Qt(){mn.start()}const mn=new H_;mn.setAnimationLoop(St),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(R){vt=R,ye.setAnimationLoop(R),R===null?mn.stop():mn.start()},ye.addEventListener("sessionstart",Vt),ye.addEventListener("sessionend",Qt),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera($),$=ye.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,$,W),_=De.get(R,P.length),_.init($),P.push(_),Ae.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),te.setFromProjectionMatrix(Ae),Ce=this.localClippingEnabled,me=He.init(this.clippingPlanes,Ce),x=qe.get(R,L.length),x.init(),L.push(x),ye.enabled===!0&&ye.isPresenting===!0){const Re=A.xr.getDepthSensingMesh();Re!==null&&Pn(Re,$,-1/0,A.sortObjects)}Pn(R,$,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(de,le),it=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,it&&ge.addToRenderList(x,R),this.info.render.frame++,me===!0&&He.beginShadows();const se=_.state.shadowsArray;Qe.render(se,R,$),me===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,Y=x.transmissive;if(_.setupLights(),$.isArrayCamera){const Re=$.cameras;if(Y.length>0)for(let Ie=0,$e=Re.length;Ie<$e;Ie++){const Ge=Re[Ie];Bn(K,Y,R,Ge)}it&&ge.render(R);for(let Ie=0,$e=Re.length;Ie<$e;Ie++){const Ge=Re[Ie];an(x,R,Ge,Ge.viewport)}}else Y.length>0&&Bn(K,Y,R,$),it&&ge.render(R),an(x,R,$);W!==null&&k===0&&(ze.updateMultisampleRenderTarget(W),ze.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(A,R,$),at.resetDefaultState(),b=-1,C=null,P.pop(),P.length>0?(_=P[P.length-1],me===!0&&He.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?x=L[L.length-1]:x=null};function Pn(R,$,se,K){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||te.intersectsSprite(R)){K&&_e.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ae);const Ie=pe.update(R),$e=R.material;$e.visible&&x.push(R,Ie,$e,se,_e.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||te.intersectsObject(R))){const Ie=pe.update(R),$e=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_e.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),_e.copy(Ie.boundingSphere.center)),_e.applyMatrix4(R.matrixWorld).applyMatrix4(Ae)),Array.isArray($e)){const Ge=Ie.groups;for(let ht=0,ft=Ge.length;ht<ft;ht++){const Ke=Ge[ht],Et=$e[Ke.materialIndex];Et&&Et.visible&&x.push(R,Ie,Et,se,_e.z,Ke)}}else $e.visible&&x.push(R,Ie,$e,se,_e.z,null)}}const Re=R.children;for(let Ie=0,$e=Re.length;Ie<$e;Ie++)Pn(Re[Ie],$,se,K)}function an(R,$,se,K){const Y=R.opaque,Re=R.transmissive,Ie=R.transparent;_.setupLightsView(se),me===!0&&He.setGlobalState(A.clippingPlanes,se),K&&We.viewport(V.copy(K)),Y.length>0&&Sn(Y,$,se),Re.length>0&&Sn(Re,$,se),Ie.length>0&&Sn(Ie,$,se),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Bn(R,$,se,K){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[K.id]===void 0&&(_.state.transmissionRenderTarget[K.id]=new Eo(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Na:Gr,minFilter:_o,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Re=_.state.transmissionRenderTarget[K.id],Ie=K.viewport||V;Re.setSize(Ie.z*A.transmissionResolutionScale,Ie.w*A.transmissionResolutionScale);const $e=A.getRenderTarget(),Ge=A.getActiveCubeFace(),ht=A.getActiveMipmapLevel();A.setRenderTarget(Re),A.getClearColor(J),fe=A.getClearAlpha(),fe<1&&A.setClearColor(16777215,.5),A.clear(),it&&ge.render(se);const ft=A.toneMapping;A.toneMapping=di;const Ke=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),_.setupLightsView(K),me===!0&&He.setGlobalState(A.clippingPlanes,K),Sn(R,se,K),ze.updateMultisampleRenderTarget(Re),ze.updateRenderTargetMipmap(Re),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let xt=0,Gt=$.length;xt<Gt;xt++){const kt=$[xt],Ut=kt.object,rt=kt.geometry,It=kt.material,Mt=kt.group;if(It.side===Ir&&Ut.layers.test(K.layers)){const ln=It.side;It.side=$n,It.needsUpdate=!0,za(Ut,se,K,rt,It,Mt),It.side=ln,It.needsUpdate=!0,Et=!0}}Et===!0&&(ze.updateMultisampleRenderTarget(Re),ze.updateRenderTargetMipmap(Re))}A.setRenderTarget($e,Ge,ht),A.setClearColor(J,fe),Ke!==void 0&&(K.viewport=Ke),A.toneMapping=ft}function Sn(R,$,se){const K=$.isScene===!0?$.overrideMaterial:null;for(let Y=0,Re=R.length;Y<Re;Y++){const Ie=R[Y],$e=Ie.object,Ge=Ie.geometry,ht=Ie.group;let ft=Ie.material;ft.allowOverride===!0&&K!==null&&(ft=K),$e.layers.test(se.layers)&&za($e,$,se,Ge,ft,ht)}}function za(R,$,se,K,Y,Re){R.onBeforeRender(A,$,se,K,Y,Re),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(A,$,se,K,R,Re),Y.transparent===!0&&Y.side===Ir&&Y.forceSinglePass===!1?(Y.side=$n,Y.needsUpdate=!0,A.renderBufferDirect(se,$,K,Y,R,Re),Y.side=Wi,Y.needsUpdate=!0,A.renderBufferDirect(se,$,K,Y,R,Re),Y.side=Ir):A.renderBufferDirect(se,$,K,Y,R,Re),R.onAfterRender(A,$,se,K,Y,Re)}function wo(R,$,se){$.isScene!==!0&&($=Le);const K=je.get(R),Y=_.state.lights,Re=_.state.shadowsArray,Ie=Y.state.version,$e=xe.getParameters(R,Y.state,Re,$,se),Ge=xe.getProgramCacheKey($e);let ht=K.programs;K.environment=R.isMeshStandardMaterial?$.environment:null,K.fog=$.fog,K.envMap=(R.isMeshStandardMaterial?D:Rt).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,ht===void 0&&(R.addEventListener("dispose",Xe),ht=new Map,K.programs=ht);let ft=ht.get(Ge);if(ft!==void 0){if(K.currentProgram===ft&&K.lightsStateVersion===Ie)return Cr(R,$e),ft}else $e.uniforms=xe.getUniforms(R),R.onBeforeCompile($e,A),ft=xe.acquireProgram($e,Ge),ht.set(Ge,ft),K.uniforms=$e.uniforms;const Ke=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=He.uniform),Cr(R,$e),K.needsLights=ju(R),K.lightsStateVersion=Ie,K.needsLights&&(Ke.ambientLightColor.value=Y.state.ambient,Ke.lightProbe.value=Y.state.probe,Ke.directionalLights.value=Y.state.directional,Ke.directionalLightShadows.value=Y.state.directionalShadow,Ke.spotLights.value=Y.state.spot,Ke.spotLightShadows.value=Y.state.spotShadow,Ke.rectAreaLights.value=Y.state.rectArea,Ke.ltc_1.value=Y.state.rectAreaLTC1,Ke.ltc_2.value=Y.state.rectAreaLTC2,Ke.pointLights.value=Y.state.point,Ke.pointLightShadows.value=Y.state.pointShadow,Ke.hemisphereLights.value=Y.state.hemi,Ke.directionalShadowMap.value=Y.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ke.spotShadowMap.value=Y.state.spotShadowMap,Ke.spotLightMatrix.value=Y.state.spotLightMatrix,Ke.spotLightMap.value=Y.state.spotLightMap,Ke.pointShadowMap.value=Y.state.pointShadowMap,Ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=ft,K.uniformsList=null,ft}function Ha(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=Au.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function Cr(R,$){const se=je.get(R);se.outputColorSpace=$.outputColorSpace,se.batching=$.batching,se.batchingColor=$.batchingColor,se.instancing=$.instancing,se.instancingColor=$.instancingColor,se.instancingMorph=$.instancingMorph,se.skinning=$.skinning,se.morphTargets=$.morphTargets,se.morphNormals=$.morphNormals,se.morphColors=$.morphColors,se.morphTargetsCount=$.morphTargetsCount,se.numClippingPlanes=$.numClippingPlanes,se.numIntersection=$.numClipIntersection,se.vertexAlphas=$.vertexAlphas,se.vertexTangents=$.vertexTangents,se.toneMapping=$.toneMapping}function Va(R,$,se,K,Y){$.isScene!==!0&&($=Le),ze.resetTextureUnits();const Re=$.fog,Ie=K.isMeshStandardMaterial?$.environment:null,$e=W===null?A.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:_s,Ge=(K.isMeshStandardMaterial?D:Rt).get(K.envMap||Ie),ht=K.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ft=!!se.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ke=!!se.morphAttributes.position,Et=!!se.morphAttributes.normal,xt=!!se.morphAttributes.color;let Gt=di;K.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Gt=A.toneMapping);const kt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ut=kt!==void 0?kt.length:0,rt=je.get(K),It=_.state.lights;if(me===!0&&(Ce===!0||R!==C)){const gn=R===C&&K.id===b;He.setState(K,R,gn)}let Mt=!1;K.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==It.state.version||rt.outputColorSpace!==$e||Y.isBatchedMesh&&rt.batching===!1||!Y.isBatchedMesh&&rt.batching===!0||Y.isBatchedMesh&&rt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&rt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&rt.instancing===!1||!Y.isInstancedMesh&&rt.instancing===!0||Y.isSkinnedMesh&&rt.skinning===!1||!Y.isSkinnedMesh&&rt.skinning===!0||Y.isInstancedMesh&&rt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&rt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&rt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&rt.instancingMorph===!1&&Y.morphTexture!==null||rt.envMap!==Ge||K.fog===!0&&rt.fog!==Re||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==He.numPlanes||rt.numIntersection!==He.numIntersection)||rt.vertexAlphas!==ht||rt.vertexTangents!==ft||rt.morphTargets!==Ke||rt.morphNormals!==Et||rt.morphColors!==xt||rt.toneMapping!==Gt||rt.morphTargetsCount!==Ut)&&(Mt=!0):(Mt=!0,rt.__version=K.version);let ln=rt.currentProgram;Mt===!0&&(ln=wo(K,$,Y));let gi=!1,Ln=!1,jr=!1;const Ot=ln.getUniforms(),En=rt.uniforms;if(We.useProgram(ln.program)&&(gi=!0,Ln=!0,jr=!0),K.id!==b&&(b=K.id,Ln=!0),gi||C!==R){We.buffers.depth.getReversed()?(Se.copy(R.projectionMatrix),GE(Se),WE(Se),Ot.setValue(I,"projectionMatrix",Se)):Ot.setValue(I,"projectionMatrix",R.projectionMatrix),Ot.setValue(I,"viewMatrix",R.matrixWorldInverse);const cn=Ot.map.cameraPosition;cn!==void 0&&cn.setValue(I,ne.setFromMatrixPosition(R.matrixWorld)),Tt.logarithmicDepthBuffer&&Ot.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ot.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Ln=!0,jr=!0)}if(Y.isSkinnedMesh){Ot.setOptional(I,Y,"bindMatrix"),Ot.setOptional(I,Y,"bindMatrixInverse");const gn=Y.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ot.setValue(I,"boneTexture",gn.boneTexture,ze))}Y.isBatchedMesh&&(Ot.setOptional(I,Y,"batchingTexture"),Ot.setValue(I,"batchingTexture",Y._matricesTexture,ze),Ot.setOptional(I,Y,"batchingIdTexture"),Ot.setValue(I,"batchingIdTexture",Y._indirectTexture,ze),Ot.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ot.setValue(I,"batchingColorTexture",Y._colorsTexture,ze));const un=se.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Be.update(Y,se,ln),(Ln||rt.receiveShadow!==Y.receiveShadow)&&(rt.receiveShadow=Y.receiveShadow,Ot.setValue(I,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(En.envMap.value=Ge,En.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&$.environment!==null&&(En.envMapIntensity.value=$.environmentIntensity),Ln&&(Ot.setValue(I,"toneMappingExposure",A.toneMappingExposure),rt.needsLights&&Ga(En,jr),Re&&K.fog===!0&&ce.refreshFogUniforms(En,Re),ce.refreshMaterialUniforms(En,K,z,he,_.state.transmissionRenderTarget[R.id]),Au.upload(I,Ha(rt),En,ze)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Au.upload(I,Ha(rt),En,ze),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ot.setValue(I,"center",Y.center),Ot.setValue(I,"modelViewMatrix",Y.modelViewMatrix),Ot.setValue(I,"normalMatrix",Y.normalMatrix),Ot.setValue(I,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const gn=K.uniformsGroups;for(let cn=0,At=gn.length;cn<At;cn++){const Rr=gn[cn];j.update(Rr,ln),j.bind(Rr,ln)}}return ln}function Ga(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function ju(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,$,se){const K=je.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),je.get(R.texture).__webglTexture=$,je.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:se,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const se=je.get(R);se.__webglFramebuffer=$,se.__useDefaultFramebuffer=$===void 0};const Wa=I.createFramebuffer();this.setRenderTarget=function(R,$=0,se=0){W=R,N=$,k=se;let K=!0,Y=null,Re=!1,Ie=!1;if(R){const Ge=je.get(R);if(Ge.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(I.FRAMEBUFFER,null),K=!1;else if(Ge.__webglFramebuffer===void 0)ze.setupRenderTarget(R);else if(Ge.__hasExternalTextures)ze.rebindTextures(R,je.get(R.texture).__webglTexture,je.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ke=R.depthTexture;if(Ge.__boundDepthTexture!==Ke){if(Ke!==null&&je.has(Ke)&&(R.width!==Ke.image.width||R.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(R)}}const ht=R.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(Ie=!0);const ft=je.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ft[$])?Y=ft[$][se]:Y=ft[$],Re=!0):R.samples>0&&ze.useMultisampledRTT(R)===!1?Y=je.get(R).__webglMultisampledFramebuffer:Array.isArray(ft)?Y=ft[se]:Y=ft,V.copy(R.viewport),ae.copy(R.scissor),Z=R.scissorTest}else V.copy(F).multiplyScalar(z).floor(),ae.copy(re).multiplyScalar(z).floor(),Z=ke;if(se!==0&&(Y=Wa),We.bindFramebuffer(I.FRAMEBUFFER,Y)&&K&&We.drawBuffers(R,Y),We.viewport(V),We.scissor(ae),We.setScissorTest(Z),Re){const Ge=je.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ge.__webglTexture,se)}else if(Ie){const Ge=je.get(R.texture),ht=$;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ge.__webglTexture,se,ht)}else if(R!==null&&se!==0){const Ge=je.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ge.__webglTexture,se)}b=-1},this.readRenderTargetPixels=function(R,$,se,K,Y,Re,Ie,$e=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ge=Ge[Ie]),Ge){We.bindFramebuffer(I.FRAMEBUFFER,Ge);try{const ht=R.textures[$e],ft=ht.format,Ke=ht.type;if(!Tt.textureFormatReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-K&&se>=0&&se<=R.height-Y&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+$e),I.readPixels($,se,K,Y,Ue.convert(ft),Ue.convert(Ke),Re))}finally{const ht=W!==null?je.get(W).__webglFramebuffer:null;We.bindFramebuffer(I.FRAMEBUFFER,ht)}}},this.readRenderTargetPixelsAsync=async function(R,$,se,K,Y,Re,Ie,$e=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ge=Ge[Ie]),Ge)if($>=0&&$<=R.width-K&&se>=0&&se<=R.height-Y){We.bindFramebuffer(I.FRAMEBUFFER,Ge);const ht=R.textures[$e],ft=ht.format,Ke=ht.type;if(!Tt.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.bufferData(I.PIXEL_PACK_BUFFER,Re.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+$e),I.readPixels($,se,K,Y,Ue.convert(ft),Ue.convert(Ke),0);const xt=W!==null?je.get(W).__webglFramebuffer:null;We.bindFramebuffer(I.FRAMEBUFFER,xt);const Gt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await VE(I,Gt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Re),I.deleteBuffer(Et),I.deleteSync(Gt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,se=0){const K=Math.pow(2,-se),Y=Math.floor(R.image.width*K),Re=Math.floor(R.image.height*K),Ie=$!==null?$.x:0,$e=$!==null?$.y:0;ze.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,se,0,0,Ie,$e,Y,Re),We.unbindTexture()};const ja=I.createFramebuffer(),Xa=I.createFramebuffer();this.copyTextureToTexture=function(R,$,se=null,K=null,Y=0,Re=null){Re===null&&(Y!==0?(hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=Y,Y=0):Re=0);let Ie,$e,Ge,ht,ft,Ke,Et,xt,Gt;const kt=R.isCompressedTexture?R.mipmaps[Re]:R.image;if(se!==null)Ie=se.max.x-se.min.x,$e=se.max.y-se.min.y,Ge=se.isBox3?se.max.z-se.min.z:1,ht=se.min.x,ft=se.min.y,Ke=se.isBox3?se.min.z:0;else{const un=Math.pow(2,-Y);Ie=Math.floor(kt.width*un),$e=Math.floor(kt.height*un),R.isDataArrayTexture?Ge=kt.depth:R.isData3DTexture?Ge=Math.floor(kt.depth*un):Ge=1,ht=0,ft=0,Ke=0}K!==null?(Et=K.x,xt=K.y,Gt=K.z):(Et=0,xt=0,Gt=0);const Ut=Ue.convert($.format),rt=Ue.convert($.type);let It;$.isData3DTexture?(ze.setTexture3D($,0),It=I.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ze.setTexture2DArray($,0),It=I.TEXTURE_2D_ARRAY):(ze.setTexture2D($,0),It=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,$.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,$.unpackAlignment);const Mt=I.getParameter(I.UNPACK_ROW_LENGTH),ln=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gi=I.getParameter(I.UNPACK_SKIP_PIXELS),Ln=I.getParameter(I.UNPACK_SKIP_ROWS),jr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,kt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,kt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ht),I.pixelStorei(I.UNPACK_SKIP_ROWS,ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ke);const Ot=R.isDataArrayTexture||R.isData3DTexture,En=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const un=je.get(R),gn=je.get($),cn=je.get(un.__renderTarget),At=je.get(gn.__renderTarget);We.bindFramebuffer(I.READ_FRAMEBUFFER,cn.__webglFramebuffer),We.bindFramebuffer(I.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Rr=0;Rr<Ge;Rr++)Ot&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.get(R).__webglTexture,Y,Ke+Rr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.get($).__webglTexture,Re,Gt+Rr)),I.blitFramebuffer(ht,ft,Ie,$e,Et,xt,Ie,$e,I.DEPTH_BUFFER_BIT,I.NEAREST);We.bindFramebuffer(I.READ_FRAMEBUFFER,null),We.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||je.has(R)){const un=je.get(R),gn=je.get($);We.bindFramebuffer(I.READ_FRAMEBUFFER,ja),We.bindFramebuffer(I.DRAW_FRAMEBUFFER,Xa);for(let cn=0;cn<Ge;cn++)Ot?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,un.__webglTexture,Y,Ke+cn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,un.__webglTexture,Y),En?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gn.__webglTexture,Re,Gt+cn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gn.__webglTexture,Re),Y!==0?I.blitFramebuffer(ht,ft,Ie,$e,Et,xt,Ie,$e,I.COLOR_BUFFER_BIT,I.NEAREST):En?I.copyTexSubImage3D(It,Re,Et,xt,Gt+cn,ht,ft,Ie,$e):I.copyTexSubImage2D(It,Re,Et,xt,ht,ft,Ie,$e);We.bindFramebuffer(I.READ_FRAMEBUFFER,null),We.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else En?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(It,Re,Et,xt,Gt,Ie,$e,Ge,Ut,rt,kt.data):$.isCompressedArrayTexture?I.compressedTexSubImage3D(It,Re,Et,xt,Gt,Ie,$e,Ge,Ut,kt.data):I.texSubImage3D(It,Re,Et,xt,Gt,Ie,$e,Ge,Ut,rt,kt):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Re,Et,xt,Ie,$e,Ut,rt,kt.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Re,Et,xt,kt.width,kt.height,Ut,kt.data):I.texSubImage2D(I.TEXTURE_2D,Re,Et,xt,Ie,$e,Ut,rt,kt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Mt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ln),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ln),I.pixelStorei(I.UNPACK_SKIP_IMAGES,jr),Re===0&&$.generateMipmaps&&I.generateMipmap(It),We.unbindTexture()},this.copyTextureToTexture3D=function(R,$,se=null,K=null,Y=0){return hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,$,se,K,Y)},this.initRenderTarget=function(R){je.get(R).__webglFramebuffer===void 0&&ze.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ze.setTextureCube(R,0):R.isData3DTexture?ze.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ze.setTexture2DArray(R,0):ze.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){N=0,k=0,W=null,We.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}function pR(r){switch(r){case"fa-user-tag":case"fa-person":return B.jsxs(B.Fragment,{children:[B.jsx("circle",{cx:"12",cy:"7",r:"3.5"}),B.jsx("path",{d:"M5 21c0-4.2 3.1-7 7-7s7 2.8 7 7"})]});case"fa-venus-mars":return B.jsxs(B.Fragment,{children:[B.jsx("circle",{cx:"8",cy:"9",r:"3.5"}),B.jsx("path",{d:"M8 12.5V21M5 17.5h6"}),B.jsx("circle",{cx:"16.5",cy:"14.5",r:"3.5"}),B.jsx("path",{d:"M19 12l3-3m0 0h-4m4 0v4"})]});case"fa-palette":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0 0-5H12a2 2 0 0 1 0-4h3a6 6 0 0 0-3-9Z"}),B.jsx("circle",{cx:"7",cy:"10",r:".7",fill:"currentColor",stroke:"none"}),B.jsx("circle",{cx:"9",cy:"6.5",r:".7",fill:"currentColor",stroke:"none"}),B.jsx("circle",{cx:"13",cy:"5.8",r:".7",fill:"currentColor",stroke:"none"})]});case"fa-eye":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z"}),B.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]});case"fa-eye-dropper":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"m14 5 5 5M16.5 2.5l5 5-10 10-4 1 1-4 10-10Z"}),B.jsx("path",{d:"M5 19h6"})]});case"fa-scissors":return B.jsxs(B.Fragment,{children:[B.jsx("circle",{cx:"6",cy:"7",r:"2.5"}),B.jsx("circle",{cx:"6",cy:"17",r:"2.5"}),B.jsx("path",{d:"m8 8.5 12 8.5M8 15.5 20 7"})]});case"fa-fill-drip":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"m4 14 8-8 6 6-8 8H4v-6Z"}),B.jsx("path",{d:"M15 5 12 2"}),B.jsx("path",{d:"M20 15s2 2.2 2 3.5a2 2 0 0 1-4 0c0-1.3 2-3.5 2-3.5Z"})]});case"fa-hat-cowboy":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M4 16h16M7 16l1.5-7h7L17 16"}),B.jsx("path",{d:"M2.5 16c1.5 3 17.5 3 19 0"})]});case"fa-shirt":return B.jsx("path",{d:"M8 4h8l5 4-3 4-2-2v10H8V10l-2 2-3-4 5-4Z"});case"fa-shoe-prints":return B.jsxs(B.Fragment,{children:[B.jsx("ellipse",{cx:"8",cy:"8",rx:"2.5",ry:"4",transform:"rotate(-20 8 8)"}),B.jsx("ellipse",{cx:"16",cy:"16",rx:"2.5",ry:"4",transform:"rotate(-20 16 16)"})]});case"fa-gem":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M6 4h12l4 5-10 11L2 9l4-5Z"}),B.jsx("path",{d:"M2 9h20M8 4l4 16 4-16"})]});case"fa-sliders":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M4 6h5M15 6h5M4 12h10M18 12h2M4 18h2M10 18h10"}),B.jsx("circle",{cx:"12",cy:"6",r:"2"}),B.jsx("circle",{cx:"16",cy:"12",r:"2"}),B.jsx("circle",{cx:"8",cy:"18",r:"2"})]});case"fa-grip-vertical":return B.jsxs(B.Fragment,{children:[B.jsx("circle",{cx:"9",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),B.jsx("circle",{cx:"15",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),B.jsx("circle",{cx:"9",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),B.jsx("circle",{cx:"15",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),B.jsx("circle",{cx:"9",cy:"18",r:"1",fill:"currentColor",stroke:"none"}),B.jsx("circle",{cx:"15",cy:"18",r:"1",fill:"currentColor",stroke:"none"})]});case"fa-chevron-up":return B.jsx("path",{d:"m6 15 6-6 6 6"});case"fa-chevron-down":return B.jsx("path",{d:"m6 9 6 6 6-6"});case"fa-check":return B.jsx("path",{d:"m5 12 4 4L19 6"});case"fa-arrows-rotate":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M20 7v5h-5"}),B.jsx("path",{d:"M4 17v-5h5"}),B.jsx("path",{d:"M6.2 8.2A7 7 0 0 1 18.8 10M17.8 15.8A7 7 0 0 1 5.2 14"})]});case"fa-layer-group":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),B.jsx("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]});case"fa-pause":return B.jsx("path",{d:"M8 5v14M16 5v14"});case"fa-play":return B.jsx("path",{d:"m8 5 11 7-11 7V5Z"});case"fa-download":return B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M12 3v12m0 0 4-4m-4 4-4-4"}),B.jsx("path",{d:"M5 20h14"})]});default:return B.jsxs(B.Fragment,{children:[B.jsx("circle",{cx:"12",cy:"12",r:"8"}),B.jsx("path",{d:"M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01"})]})}}function si({name:r,className:e=""}){return B.jsx("svg",{className:`skincrafter-icon ${e}`.trim(),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false","data-skincrafter-icon":r,children:pR(r)})}function X_({title:r,icon:e,iconClassName:t="skincrafter-accent-text",className:o="",children:s}){return B.jsxs("section",{className:`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${o}`,children:[B.jsxs("h2",{className:"text-xl font-bold mb-2 skincrafter-heading flex items-center",children:[B.jsx(si,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),r]}),s]})}function da({icon:r,className:e="",children:t,...o}){return B.jsxs("button",{className:`pixel-button preview-action-button p-2 pixel-border transition-colors ${e}`,...o,children:[r&&B.jsx(si,{name:r,className:"skincrafter-button-icon"}),t]})}const mR=""+new URL("/dev/assets/default-BAcllNor-BAcllNor.png",import.meta.url).href,gR=""+new URL("/dev/assets/male.tintable-fxeAI3uu-fxeAI3uu.png",import.meta.url).href,vR=""+new URL("/dev/assets/male.fixed-DcqZ3kjg-DcqZ3kjg.png",import.meta.url).href,_R=""+new URL("/dev/assets/female.tintable-BLp5_Gdk-BLp5_Gdk.png",import.meta.url).href,xR=""+new URL("/dev/assets/female.fixed-DbzKxh-8-DbzKxh-8.png",import.meta.url).href,yR=""+new URL("/dev/assets/male.fixed-C1cq_pNO-C1cq_pNO.png",import.meta.url).href,SR=""+new URL("/dev/assets/male.tintable-D_4mkZ79-D_4mkZ79.png",import.meta.url).href,ER=""+new URL("/dev/assets/male.fixed-BGzxECBj-BGzxECBj.png",import.meta.url).href,MR=""+new URL("/dev/assets/male.tintable-Dll7q7aD-Dll7q7aD.png",import.meta.url).href,wR=""+new URL("/dev/assets/male.fixed-DKYrqDB3-DKYrqDB3.png",import.meta.url).href,TR=""+new URL("/dev/assets/none.tintable-Bs7knCxE-Bs7knCxE.png",import.meta.url).href,CR=""+new URL("/dev/assets/none.fixed-DGZLEiFj-DGZLEiFj.png",import.meta.url).href,RR=""+new URL("/dev/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,AR=""+new URL("/dev/assets/clasic.fixed-Dli_mmU6-Dli_mmU6.png",import.meta.url).href,bR=""+new URL("/dev/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,PR=""+new URL("/dev/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,LR=""+new URL("/dev/assets/big.fixed-BuEC2Ubs-BuEC2Ubs.png",import.meta.url).href,DR=""+new URL("/dev/assets/duck-Dz_q_Va_-Dz_q_Va_.png",import.meta.url).href,UR=""+new URL("/dev/assets/hoodie-C1a1is5P-C1a1is5P.png",import.meta.url).href,NR=""+new URL("/dev/assets/pants-gRdPSA1G-gRdPSA1G.png",import.meta.url).href,$_={"textures/preview/default.png":mR,"textures/race/human/male.tintable.png":gR,"textures/race/human/male.fixed.png":vR,"textures/race/human/female.tintable.png":_R,"textures/race/human/female.fixed.png":xR,"textures/race/bear/male.fixed.png":yR,"textures/race/orc/male.tintable.png":SR,"textures/race/orc/male.fixed.png":ER,"textures/race/zombie/male.tintable.png":MR,"textures/race/zombie/male.fixed.png":wR,"textures/race/template/none.tintable.png":TR,"textures/race/template/none.fixed.png":CR,"textures/eyes/clasic.tintable.png":RR,"textures/eyes/clasic.fixed.png":AR,"textures/eyes/small.tintable.png":bR,"textures/eyes/big.tintable.png":PR,"textures/eyes/big.fixed.png":LR,"textures/hat/duck.png":DR,"textures/top/male/hoodie.png":UR,"textures/bottom/pants.png":NR};function lf(r,e){return e?`${e.replace(/\/+$/,"")}/${r.replace(/^\/+/,"")}`:$_[r]}const yv=$_["textures/preview/default.png"],ls=64,IR=["bottom"];function ur(r,e,t,o,s,l,c,d,f={}){const{transparent:p=!1,expand:m=0,rotate180Faces:v=[],flipXFaces:y=[],flipYFaces:S=IR}=f,E=new Set(v),M=new Set(y),x=new Set(S),_=new Ts(e+m,t+m,o+m),L=()=>new Rh({transparent:p,toneMapped:!1,alphaTest:p?.1:0,side:Ir}),P=[L(),L(),L(),L(),L(),L()],A=(W,b,C=!1,V=!1)=>{const ae=r.clone(),Z=(b[2]-b[0])/ls,J=(b[3]-b[1])/ls,fe=b[0]/ls,ue=b[2]/ls,he=1-b[1]/ls,z=1-b[3]/ls;ae.magFilter=yn,ae.minFilter=yn,ae.generateMipmaps=!1,ae.wrapS=Ea,ae.wrapT=Ea,ae.repeat.set(C?-Z:Z,V?-J:J),ae.offset.set(C?ue:fe,V?he:z),ae.needsUpdate=!0,W.map=ae},G=W=>E.has(W)||M.has(W),N=W=>E.has(W)||x.has(W);A(P[0],d.right,G("right"),N("right")),A(P[1],d.left,G("left"),N("left")),A(P[2],d.top,G("top"),N("top")),A(P[3],d.bottom,G("bottom"),N("bottom")),A(P[4],d.front,G("front"),N("front")),A(P[5],d.back,G("back"),N("back"));const k=new Or(_,P);return k.position.set(s,l,c),k}const FR=-6,kR=6,gu=new ie(-5,16,0),vu=new ie(5,16,0),Y_=-1.9,q_=1.9,Sv=new ie(Y_,6,0),Ev=new ie(q_,6,0);function cr(r,e,t,o){if(!r)return;const s=e.clone().sub(t).applyEuler(o).add(t);r.position.copy(s),r.rotation.copy(o)}function OR(r,e,t={}){const{armL:o,armR:s,legL:l,legR:c,armLOL:d,armROL:f,legLOL:p,legROL:m}=e,v=t.leftArmX??kR,y=t.rightArmX??FR,S=new ie(v,12,0),E=new ie(y,12,0),M=new ie(q_,0,0),x=new ie(Y_,0,0);if(!(!o||!s||!l||!c)){if([o,s,l,c,d,f,p,m].forEach(_=>_?.rotation.set(0,0,0)),o.position.copy(S),s.position.copy(E),l.position.copy(M),c.position.copy(x),d?.position.copy(S),f?.position.copy(E),p?.position.copy(M),m?.position.copy(x),r==="tpose"){const _=new kn(0,0,Math.PI/2),L=new kn(0,0,-Math.PI/2);cr(o,S,vu,_),cr(s,E,gu,L),cr(d,S,vu,_),cr(f,E,gu,L)}else if(r==="walking"){const _=-Math.PI/4,L=Math.PI/4,P=new kn(_,0,0),A=new kn(L,0,0),G=new kn(L,0,0),N=new kn(_,0,0);cr(o,S,vu,P),cr(s,E,gu,A),cr(l,M,Ev,G),cr(c,x,Sv,N),cr(d,S,vu,P),cr(f,E,gu,A),cr(p,M,Ev,G),cr(m,x,Sv,N)}}}const BR={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},zR={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},HR={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},VR={left:[40,20,44,32],right:[47,20,51,32],top:[44,16,47,20],bottom:[47,16,50,20],front:[44,20,47,32],back:[51,20,54,32]},GR={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},WR={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},jR={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},XR={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},$R={left:[40,36,44,48],right:[47,36,51,48],top:[44,32,47,36],bottom:[47,32,50,36],front:[44,36,47,48],back:[51,36,54,48]},YR={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},qR={left:[32,52,36,64],right:[40,52,44,64],top:[36,48,40,52],bottom:[40,48,44,52],front:[36,52,40,64],back:[44,52,48,64]},KR={left:[32,52,36,64],right:[39,52,43,64],top:[36,48,39,52],bottom:[39,48,42,52],front:[36,52,39,64],back:[43,52,46,64]},ZR={left:[16,52,20,64],right:[24,52,28,64],top:[20,48,24,52],bottom:[24,48,28,52],front:[20,52,24,64],back:[28,52,32,64]},JR={left:[48,52,52,64],right:[56,52,60,64],top:[52,48,56,52],bottom:[56,48,60,52],front:[52,52,56,64],back:[60,52,64,64]},QR={left:[48,52,52,64],right:[55,52,59,64],top:[52,48,55,52],bottom:[55,48,58,52],front:[52,52,55,64],back:[59,52,62,64]},eA={left:[0,52,4,64],right:[8,52,12,64],top:[4,48,8,52],bottom:[8,48,12,52],front:[4,52,8,64],back:[12,52,16,64]},uf=0,tA=44,nA=24,rA=72,iA=.04,Mv=.01,wv=pa.degToRad(50),oA=.6,sA=1/60,aA=.05,lA=8,uA=1,cA=.5,Tv=-6,Cv=6,Rv=-5.5,Av=5.5,bv=-1.9,Pv=1.9,Lv=()=>({armL:null,armR:null,legL:null,legR:null,armLOL:null,armROL:null,legLOL:null,legROL:null,headOL:null,bodyOL:null}),dA={createRenderer:()=>new hR({antialias:!1,alpha:!0}),createTextureLoader:()=>new TM,createResizeObserver:r=>new ResizeObserver(r),requestAnimationFrame:r=>window.requestAnimationFrame(r),cancelAnimationFrame:r=>window.cancelAnimationFrame(r),addWindowResizeListener:r=>window.addEventListener("resize",r),removeWindowResizeListener:r=>window.removeEventListener("resize",r),getDevicePixelRatio:()=>window.devicePixelRatio||1};class fA{constructor(e,t,o=dA){this.container=e,this.dependencies=o,this.pose=t.pose,this.model=t.model,this.showOverlay=t.showOverlay,this.autoRotate=t.autoRotate,this.onError=t.onError,this.initialCursor=e.style.cursor;const s=e.clientWidth||1,l=e.clientHeight||1;this.renderer=o.createRenderer(),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Fn,this.renderer.toneMapping=di,this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(s,l),e.appendChild(this.renderer.domElement),this.camera=new dr(52,s/l,.1,1e3),this.camera.position.set(0,uf,this.cameraDistance),this.camera.lookAt(0,uf,0),this.scene=new gM;const c=new bM(16777215,1);c.position.set(10,10,10),this.scene.add(c),this.group=new ma,this.group.position.y=-10,this.scene.add(this.group),this.textureLoader=o.createTextureLoader(),this.resizeObserver=o.createResizeObserver(this.handleResize),this.resizeObserver.observe(e),o.addWindowResizeListener(this.handleResize),e.addEventListener("wheel",this.handleWheel,{passive:!1}),e.addEventListener("pointerdown",this.handlePointerDown),e.addEventListener("pointermove",this.handlePointerMove),e.addEventListener("pointerup",this.handlePointerUp),e.addEventListener("pointercancel",this.handlePointerCancel),e.addEventListener("lostpointercapture",this.handleLostPointerCapture),e.style.cursor="grab",this.handleResize(),this.scheduleAnimationFrame(),this.setTexture(t.textureUrl)}container;dependencies;renderer;camera;scene;group;textureLoader;resizeObserver;onError;disposedTextures=new WeakSet;pendingTextures=new Map;initialCursor;parts=Lv();modelMeshes=[];currentTexture=null;requestedTextureUrl=null;textureLoadVersion=0;animationFrameId=null;disposed=!1;pose;model;showOverlay;autoRotate;cameraDistance=tA;modelRevision=0;textureRevision=0;activePointerId=null;lastPointerX=0;lastPointerY=0;isDragging=!1;previousFrameTimestamp=null;setTexture(e){if(this.disposed||e===this.requestedTextureUrl)return;this.requestedTextureUrl=e;const t=++this.textureLoadVersion;let o=!1;const s=this.textureLoader.load(e,l=>{o=!0,this.pendingTextures.delete(t),this.handleTextureLoaded(t,l)},void 0,l=>{o=!0;const c=this.pendingTextures.get(t);c&&(this.disposeTexture(c),this.pendingTextures.delete(t)),!this.disposed&&t===this.textureLoadVersion&&(this.requestedTextureUrl=null,this.onError?.({code:"texture_load_failed",textureUrl:e,cause:l}))});o||this.pendingTextures.set(t,s)}setModel(e){this.disposed||e===this.model||(this.model=e,this.currentTexture&&this.buildModel(this.currentTexture))}setPose(e){this.disposed||e===this.pose||(this.pose=e,this.applyCurrentPose())}setShowOverlay(e){this.disposed||e===this.showOverlay||(this.showOverlay=e,this.applyOverlayVisibility())}setAutoRotate(e){this.disposed||(this.autoRotate=e)}getDiagnostics(){const e=this.parts.armR?.geometry.parameters.width;return{rendererAttached:this.renderer.domElement.parentNode===this.container,modelRevision:this.modelRevision,textureRevision:this.textureRevision,meshCount:this.modelMeshes.length,rightArmWidth:typeof e=="number"?e:null,overlayVisible:this.getOverlayMeshes().map(t=>t.visible),cameraDistance:this.cameraDistance,rotation:this.group.rotation.y,rotationX:this.group.rotation.x,rotationY:this.group.rotation.y,rotationZ:this.group.rotation.z,isDragging:this.isDragging}}dispose(){if(this.disposed)return;const e=this.activePointerId;this.disposed=!0,this.textureLoadVersion+=1,this.container.removeEventListener("wheel",this.handleWheel),this.container.removeEventListener("pointerdown",this.handlePointerDown),this.container.removeEventListener("pointermove",this.handlePointerMove),this.container.removeEventListener("pointerup",this.handlePointerUp),this.container.removeEventListener("pointercancel",this.handlePointerCancel),this.container.removeEventListener("lostpointercapture",this.handleLostPointerCapture),this.dependencies.removeWindowResizeListener(this.handleResize),this.resizeObserver.disconnect(),e!==null&&this.releasePointerCapture(e),this.activePointerId=null,this.isDragging=!1,this.previousFrameTimestamp=null,this.container.style.cursor=this.initialCursor,this.animationFrameId!==null&&(this.dependencies.cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.pendingTextures.forEach(t=>this.disposeTexture(t)),this.pendingTextures.clear(),this.disposeModel(),this.currentTexture&&(this.disposeTexture(this.currentTexture),this.currentTexture=null),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement)}handleResize=()=>{if(this.disposed)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()};handleWheel=e=>{this.disposed||(e.preventDefault(),this.cameraDistance=pa.clamp(this.cameraDistance+e.deltaY*iA,nA,rA),this.camera.position.z=this.cameraDistance,this.camera.lookAt(0,uf,0),this.camera.updateProjectionMatrix())};handlePointerDown=e=>{this.disposed||this.activePointerId!==null||e.pointerType==="mouse"&&e.button!==0||(this.activePointerId=e.pointerId,this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.isDragging=!0,this.container.style.cursor="grabbing",this.capturePointer(e.pointerId),e.preventDefault())};handlePointerMove=e=>{if(this.disposed||!this.isDragging||e.pointerId!==this.activePointerId)return;const t=e.clientX-this.lastPointerX,o=e.clientY-this.lastPointerY;this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.group.rotation.y+=t*Mv,this.group.rotation.x=pa.clamp(this.group.rotation.x+o*Mv,-wv,wv),this.group.rotation.z=0,e.preventDefault()};handlePointerUp=e=>{this.finishPointerInteraction(e.pointerId,!0)};handlePointerCancel=e=>{this.finishPointerInteraction(e.pointerId,!1)};handleLostPointerCapture=e=>{this.finishPointerInteraction(e.pointerId,!1)};finishPointerInteraction(e,t){this.disposed||e!==this.activePointerId||(this.activePointerId=null,this.isDragging=!1,this.container.style.cursor="grab",t&&this.releasePointerCapture(e))}capturePointer(e){try{this.container.setPointerCapture?.(e)}catch{}}releasePointerCapture(e){try{if(this.container.hasPointerCapture?.(e)===!1)return;this.container.releasePointerCapture?.(e)}catch{}}scheduleAnimationFrame(){this.animationFrameId=this.dependencies.requestAnimationFrame(this.handleAnimationFrame)}handleAnimationFrame=e=>{if(this.disposed)return;const t=this.previousFrameTimestamp===null?sA:pa.clamp((e-this.previousFrameTimestamp)/1e3,0,aA);this.previousFrameTimestamp=e,this.autoRotate&&!this.isDragging&&(this.group.rotation.y+=oA*t,this.group.rotation.x=pa.damp(this.group.rotation.x,0,lA,t),this.group.rotation.z=0),this.renderer.render(this.scene,this.camera),this.scheduleAnimationFrame()};getClampedDpr(){return Math.min(this.dependencies.getDevicePixelRatio(),2)}handleTextureLoaded(e,t){if(this.disposed||e!==this.textureLoadVersion){this.disposeTexture(t);return}this.configureTexture(t);const o=this.currentTexture;this.modelMeshes.length===0?this.buildModel(t):this.replaceModelTexture(t),this.currentTexture=t,this.textureRevision+=1,o&&o!==t&&this.disposeTexture(o)}configureTexture(e){e.magFilter=yn,e.minFilter=yn,e.generateMipmaps=!1,e.colorSpace=Fn,e.wrapS=ai,e.wrapT=ai}buildModel(e){this.disposeModel();const t=this.model==="slim",o=t?3:4,s=t?Rv:Tv,l=t?Av:Cv,c=t?VR:HR,d=t?KR:qR,f=t?$R:XR,p=t?QR:JR,m=ur(e,8,8,8,0,22,0,BR),v=ur(e,8,12,4,0,12,0,zR),y=ur(e,o,12,4,s,12,0,c),S=ur(e,o,12,4,l,12,0,d),E=ur(e,4,12,4,bv,0,0,GR),M=ur(e,4,12,4,Pv,0,0,ZR),x={transparent:!0,expand:uA},_={transparent:!0,expand:cA},L=ur(e,8,8,8,0,22,0,WR,x),P=ur(e,8,12,4,0,12,0,jR,_),A=ur(e,o,12,4,s,12,0,f,_),G=ur(e,o,12,4,l,12,0,p,_),N=ur(e,4,12,4,bv,0,0,YR,_),k=ur(e,4,12,4,Pv,0,0,eA,_);this.parts={armL:S,armR:y,legL:M,legR:E,armLOL:G,armROL:A,legLOL:k,legROL:N,headOL:L,bodyOL:P},this.modelMeshes=[m,v,y,S,E,M,L,P,A,G,N,k],this.group.add(...this.modelMeshes),this.modelRevision+=1,this.applyOverlayVisibility(),this.applyCurrentPose()}replaceModelTexture(e){this.modelMeshes.forEach(t=>{t.material.forEach(o=>{const s=o.map;if(!s)return;const l=e.clone();l.magFilter=yn,l.minFilter=yn,l.generateMipmaps=!1,l.colorSpace=Fn,l.wrapS=s.wrapS,l.wrapT=s.wrapT,l.repeat.copy(s.repeat),l.offset.copy(s.offset),l.center.copy(s.center),l.rotation=s.rotation,l.flipY=s.flipY,l.needsUpdate=!0,o.map=l,o.needsUpdate=!0,this.disposeTexture(s)})})}applyCurrentPose(){const e=this.model==="slim";OR(this.pose,{armL:this.parts.armL,armR:this.parts.armR,legL:this.parts.legL,legR:this.parts.legR,armLOL:this.parts.armLOL,armROL:this.parts.armROL,legLOL:this.parts.legLOL,legROL:this.parts.legROL},{leftArmX:e?Av:Cv,rightArmX:e?Rv:Tv})}applyOverlayVisibility(){this.getOverlayMeshes().forEach(e=>{e.visible=this.showOverlay})}getOverlayMeshes(){return[this.parts.headOL,this.parts.bodyOL,this.parts.armLOL,this.parts.armROL,this.parts.legLOL,this.parts.legROL].filter(e=>e!==null)}disposeModel(){this.modelMeshes.forEach(e=>{this.group.remove(e),e.geometry.dispose(),e.material.forEach(t=>{t.map&&(this.disposeTexture(t.map),t.map=null),t.dispose()})}),this.modelMeshes=[],this.parts=Lv()}disposeTexture(e){this.disposedTextures.has(e)||(this.disposedTextures.add(e),e.dispose())}}function hA(r,e,t){return new fA(r,e,t)}function pA(r){return{code:"preview_texture_load_failed",category:"preview",message:`Failed to load preview texture: ${r.textureUrl}`,assetUrl:r.textureUrl,cause:r.cause}}function mA({texture:r,pose:e="default",model:t="classic",showOverlay:o=!0,autoRotate:s=!0,textureRequestRevision:l=0,style:c,onError:d}){const f=O.useRef(null),p=O.useRef(null),m=O.useRef(d),v=O.useRef({textureUrl:r??yv,pose:e,model:t,showOverlay:o,autoRotate:s,onError:y=>m.current?.(pA(y))});return O.useEffect(()=>{m.current=d},[d]),O.useEffect(()=>{const y=f.current;if(!y)return;let S;try{S=hA(y,v.current)}catch(E){m.current?.({code:"preview_webgl_initialization_failed",category:"preview",message:"Failed to initialize the WebGL skin preview.",cause:E});return}return p.current=S,()=>{S.dispose(),p.current===S&&(p.current=null)}},[]),O.useEffect(()=>{p.current?.setTexture(r??yv)},[r,l]),O.useEffect(()=>{p.current?.setModel(t)},[t]),O.useEffect(()=>{p.current?.setPose(e)},[e]),O.useEffect(()=>{p.current?.setShowOverlay(o)},[o]),O.useEffect(()=>{p.current?.setAutoRotate(s)},[s]),B.jsx("div",{ref:f,style:{width:"100%",height:"100%",minHeight:0,position:"relative",touchAction:"none",...c??{}}})}const gA={"app.title":"SkinCrafter","nav.wardrobe":"Wardrobe","nav.skinView":"Skin View","nav.language":"Language","nav.workInProgress":"Work in progress","panel.preview":"Preview","panel.customization":"Customization","panel.loadSkin":"Load Minecraft Skin","action.changePose":"Change Pose","action.hideOverlay":"Hide Overlay","action.showOverlay":"Show Overlay","action.disableAutoRotate":"Stop Rotation","action.enableAutoRotate":"Start Rotation","action.download":"Download","action.downloadSkin":"Download character skin","action.dragLayer":"Drag layer","action.moveLayerUp":"Move layer up","action.moveLayerDown":"Move layer down","action.loadSkin":"Load Skin","action.loading":"Loading...","action.retryPreview":"Retry Preview","error.assetLoad":"A skin texture could not be loaded. Check the selected assets and try again.","error.generation":"The skin could not be generated. Change the selection and try again.","error.initialSkin":"The supplied skin is not a valid 64x64 Minecraft PNG.","error.preview":"The 3D preview could not be loaded. Skin editing and download may still be available.","skinView.player":"Player","skinView.username":"Minecraft username","category.race":"Character Race","category.sex":"Sex","category.skinColor":"Skin Color","category.eyes":"Eyes","category.eyesColor":"Eye Color","category.hair":"Hair","category.hairColor":"Hair Color","category.hat":"Hat","category.shirt":"Shirt","category.pants":"Pants","category.shoes":"Shoes","category.accessory":"Accessory","wardrobeColor.primary":"Color","wardrobeColor.secondary":"Secondary color","option.none":"None","option.sex.Male":"Male","option.sex.Female":"Female","option.race.Human":"Human","option.race.Bear":"Bear","option.race.Orc":"Orc","option.race.Zombie":"Zombie","option.race.Template":"Template","option.eyes.Classic":"Classic","option.eyes.Small":"Small","option.eyes.Big":"Big","option.hat.Duck":"Duck","option.shirt.Hoodie":"Hoodie","option.pants.Pants":"Pants","option.color.blue":"Blue","option.color.green":"Green","option.color.brown":"Brown","option.color.blond":"Blond","option.color.black":"Black"},vA={"app.title":"SkinCrafter","nav.wardrobe":"Kreator","nav.skinView":"Podgląd","nav.language":"Język","nav.workInProgress":"Produkt w trakcie prac","panel.preview":"Podgląd","panel.customization":"Personalizacja","panel.loadSkin":"Wczytaj skin Minecraft","action.changePose":"Zmień Pozę","action.hideOverlay":"Ukryj Warstwę","action.showOverlay":"Pokaż Warstwę","action.disableAutoRotate":"Zatrzymaj Obrót","action.enableAutoRotate":"Włącz Obrót","action.download":"Pobierz","action.downloadSkin":"Pobierz skin postaci","action.dragLayer":"Przeciągnij warstwę","action.moveLayerUp":"Przesuń warstwę wyżej","action.moveLayerDown":"Przesuń warstwę niżej","action.loadSkin":"Wczytaj Skin","action.loading":"Wczytywanie...","action.retryPreview":"Ponów Podgląd","error.assetLoad":"Nie udało się wczytać tekstury skina. Sprawdź wybrane elementy i spróbuj ponownie.","error.generation":"Nie udało się wygenerować skina. Zmień wybór i spróbuj ponownie.","error.initialSkin":"Przekazany skin nie jest prawidłowym plikiem PNG Minecraft 64x64.","error.preview":"Nie udało się uruchomić podglądu 3D. Edycja i pobieranie skina mogą nadal działać.","skinView.player":"Gracz","skinView.username":"Nazwa gracza Minecraft","category.race":"Rasa Postaci","category.sex":"Płeć","category.skinColor":"Kolor Skóry","category.eyes":"Oczy","category.eyesColor":"Kolor Oczu","category.hair":"Włosy","category.hairColor":"Kolor Włosów","category.hat":"Czapka","category.shirt":"Koszulka","category.pants":"Spodnie","category.shoes":"Buty","category.accessory":"Dodatek","wardrobeColor.primary":"Kolor","wardrobeColor.secondary":"Kolor dodatkowy","option.none":"Brak","option.sex.Male":"Mężczyzna","option.sex.Female":"Kobieta","option.race.Human":"Człowiek","option.race.Bear":"Niedźwiedź","option.race.Orc":"Ork","option.race.Zombie":"Zombie","option.race.Template":"Szablon","option.eyes.Classic":"Klasyczne","option.eyes.Small":"Małe","option.eyes.Big":"Duże","option.hat.Duck":"Kaczka","option.shirt.Hoodie":"Bluza","option.pants.Pants":"Spodnie","option.color.blue":"Niebieski","option.color.green":"Zielony","option.color.brown":"Brązowy","option.color.blond":"Blond","option.color.black":"Czarny"},_A={"app.title":"SkinCrafter","nav.wardrobe":"Criador","nav.skinView":"Visualizador","nav.language":"Idioma","nav.workInProgress":"Produto em desenvolvimento","panel.preview":"Pré-visualização","panel.customization":"Personalização","panel.loadSkin":"Carregar skin do Minecraft","action.changePose":"Mudar pose","action.hideOverlay":"Ocultar camada","action.showOverlay":"Mostrar camada","action.disableAutoRotate":"Parar rotação","action.enableAutoRotate":"Iniciar rotação","action.download":"Baixar","action.downloadSkin":"Baixar skin do personagem","action.dragLayer":"Arrastar camada","action.moveLayerUp":"Mover camada para cima","action.moveLayerDown":"Mover camada para baixo","action.loadSkin":"Carregar skin","action.loading":"Carregando...","action.retryPreview":"Tentar pré-visualização novamente","error.assetLoad":"Não foi possível carregar uma textura da skin. Verifique os itens selecionados e tente novamente.","error.generation":"Não foi possível gerar a skin. Altere a seleção e tente novamente.","error.initialSkin":"A skin fornecida não é um PNG válido do Minecraft em 64x64.","error.preview":"Não foi possível carregar a pré-visualização 3D. A edição e o download da skin ainda podem estar disponíveis.","skinView.player":"Jogador","skinView.username":"Nome de usuário do Minecraft","category.race":"Raça do personagem","category.sex":"Gênero","category.skinColor":"Cor da pele","category.eyes":"Olhos","category.eyesColor":"Cor dos olhos","category.hair":"Cabelo","category.hairColor":"Cor do cabelo","category.hat":"Chapéu","category.shirt":"Camisa","category.pants":"Calças","category.shoes":"Calçados","category.accessory":"Acessório","wardrobeColor.primary":"Cor","wardrobeColor.secondary":"Cor secundária","option.none":"Nenhum","option.sex.Male":"Masculino","option.sex.Female":"Feminino","option.race.Human":"Humano","option.race.Bear":"Urso","option.race.Orc":"Orc","option.race.Zombie":"Zumbi","option.race.Template":"Modelo","option.eyes.Classic":"Clássico","option.eyes.Small":"Pequenos","option.eyes.Big":"Grandes","option.hat.Duck":"Pato","option.shirt.Hoodie":"Moletom","option.pants.Pants":"Calças","option.color.blue":"Azul","option.color.green":"Verde","option.color.brown":"Marrom","option.color.blond":"Loiro","option.color.black":"Preto"},rh={en:gA,pl:vA,"pt-BR":_A},K_=Object.keys(rh),Rs="en";function xA(r){return!!r&&K_.includes(r)}function ka(r,e){return rh[r][e]??rh[Rs][e]??e}const yA=r=>ka(Rs,r);function SA(r){return r.code==="asset_load_failed"?"error.assetLoad":r.code==="invalid_initial_skin"?"error.initialSkin":r.category==="preview"?"error.preview":"error.generation"}function Z_({texture:r,model:e="classic",footerHeight:t=0,t:o=yA,onSave:s,canSave:l,generationStatus:c,generationError:d,onError:f}){const[p,m]=O.useState("default"),[v,y]=O.useState(!0),[S,E]=O.useState(!0),[M,x]=O.useState(null),[_,L]=O.useState(0),P=()=>{m(J=>J==="default"?"tpose":J==="tpose"?"walking":"default")},A=()=>{y(J=>!J)},G=()=>{E(J=>!J)},N=l??!!r,k=()=>{if(!r||!N)return;const J=document.createElement("a");J.href=r,J.download="skincrafter-skin.png",J.click()},W=()=>{if(N){if(s){s();return}k()}},b=O.useCallback(J=>{x(J),f?.(J)},[f]),C=()=>{x(null),L(J=>J+1)};O.useEffect(()=>{x(J=>J?.code==="preview_texture_load_failed"?null:J)},[r]);const V=c==="error"&&d?d:M,ae=V===M&&M?.code==="preview_texture_load_failed",Z={"--skincrafter-preview-bottom-offset":`${Math.max(0,t)}px`};return B.jsxs(X_,{title:o("panel.preview"),icon:"fa-eye",children:[B.jsx("div",{className:"skincrafter-preview-surface overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full",style:Z,children:B.jsx("div",{className:"flex justify-center items-center model-placeholder h-full",children:B.jsx(mA,{texture:r,pose:p,model:e,showOverlay:v,autoRotate:S,textureRequestRevision:_,onError:b})})}),V&&B.jsx("p",{className:"mt-3 text-sm font-semibold skincrafter-error-text",role:"alert",children:o(SA(V))}),ae&&B.jsx(da,{className:"mt-2 skincrafter-secondary-action",icon:"fa-arrows-rotate","aria-label":o("action.retryPreview"),onClick:C,children:o("action.retryPreview")}),B.jsxs("div",{className:"mt-4 preview-actions",children:[B.jsx(da,{className:"skincrafter-secondary-action",icon:"fa-arrows-rotate","aria-label":o("action.changePose"),onClick:P,children:o("action.changePose")}),B.jsx(da,{className:"skincrafter-secondary-action",icon:"fa-layer-group","aria-label":o(v?"action.hideOverlay":"action.showOverlay"),onClick:A,children:o(v?"action.hideOverlay":"action.showOverlay")}),B.jsx(da,{className:"skincrafter-secondary-action",icon:S?"fa-pause":"fa-play","aria-label":o(S?"action.disableAutoRotate":"action.enableAutoRotate"),onClick:G,children:o(S?"action.disableAutoRotate":"action.enableAutoRotate")}),B.jsx(da,{className:"skincrafter-secondary-action disabled:opacity-50 disabled:cursor-not-allowed",icon:"fa-download","aria-label":o("action.downloadSkin"),onClick:W,disabled:!N,children:o("action.download")})]})]})}function EA({left:r,right:e}){return B.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[B.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:r}),B.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:e})]})}function MA(r,e){if(r.length===0)return null;for(const t of r){const o=t.top+(t.bottom-t.top)/2;if(e<o)return{targetLayer:t.layer,position:"before"};if(e<=t.bottom)return{targetLayer:t.layer,position:"after"}}return{targetLayer:r[r.length-1].layer,position:"after"}}function wA(r,e,t,o){if(!r.includes(e)||!r.includes(t))return[...r];if(e===t)return[...r];const s=r.filter(c=>c!==e),l=s.indexOf(t)+(o==="after"?1:0);return s.splice(l,0,e),s}function TA({heading:r,icon:e,iconClassName:t="skincrafter-category-icon",className:o="",children:s,...l}){return B.jsxs("div",{className:`option-card skincrafter-surface p-4 pixel-border relative ${r?"pt-5":""} ${o}`,...l,children:[r&&B.jsxs("h3",{className:"font-medium mb-2 flex items-center absolute -top-3 left-4 px-2 skincrafter-surface skincrafter-heading z-10",children:[e&&B.jsx(si,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),r]}),s]})}function Xn(r){const e=(r.tintable===void 0?[]:Array.isArray(r.tintable)?r.tintable:[r.tintable]).map(t=>typeof t=="string"?{texture:t}:{...t});if(e.length===0&&!r.fixed)throw new Error("A texture-backed option must define a tintable layer, a fixed layer, or both.");return e.length>0?{tintable:e,...r.fixed?{fixed:r.fixed}:{}}:{fixed:r.fixed}}function CA(r,e){return r.tintable?{tintable:r.tintable.map(t=>({texture:lf(t.texture,e),...t.colorSlot?{colorSlot:t.colorSlot}:{}})),...r.fixed?{fixed:lf(r.fixed,e)}:{}}:{fixed:lf(r.fixed,e)}}const Dv=r=>/^#[0-9a-f]{6}$/i.test(r);function RA(r,e){const t=r??[],o=e??[];return t.length!==o.length?!1:t.every((s,l)=>{const c=o[l];return!!c&&s.id===c.id&&s.labelKey===c.labelKey&&s.defaultColor===c.defaultColor&&s.palette.length===c.palette.length&&s.palette.every((d,f)=>d===c.palette[f])})}function AA(r){const e=r.textureLayers.tintable??[],t=r.colorSlots??[];if(e.length===0){if(t.length>0)throw new Error("A fixed-only texture item must not define color slots.");return}if(t.length===0)throw new Error("Every tintable texture item must define at least one color slot.");const o=new Map;for(const l of t){if(!l.id.trim())throw new Error("Texture item color slot ids must not be empty.");if(o.has(l.id))throw new Error(`Texture item color slot "${l.id}" is defined more than once.`);if(l.palette.length===0)throw new Error(`Texture item color slot "${l.id}" must define a non-empty palette.`);if(!Dv(l.defaultColor)||l.palette.some(c=>!Dv(c)))throw new Error(`Texture item color slot "${l.id}" must use #RRGGBB palette colors.`);if(!l.palette.includes(l.defaultColor))throw new Error(`Texture item color slot "${l.id}" defaultColor must be present in its palette.`);o.set(l.id,l)}const s=new Set;for(const l of e){if(!l.colorSlot||!o.has(l.colorSlot))throw new Error("Every tintable texture layer must reference a declared colorSlot.");s.add(l.colorSlot)}for(const l of t)if(!s.has(l.id))throw new Error(`Texture item color slot "${l.id}" is not used by any tintable layer.`)}function ys(r){const e=r.skinModel;if(e!=="classic"&&e!=="slim")throw new Error('A texture item must define skinModel as "classic" or "slim".');return AA(r),{...r,skinModel:e,...r.colorSlots?{colorSlots:r.colorSlots.map(t=>({...t,palette:[...t.palette]}))}:{}}}function vo(r){const e={};for(const o of["classic","slim"]){const s=r[o];if(!s)continue;const l=ys(s);if(l.skinModel!==o)throw new Error(`Texture item variant "${o}" must declare the same skinModel.`);e[o]=l}const t=Object.values(e).filter(o=>!!o?.colorSlots?.length);if(t.length>1){const o=t[0].colorSlots;if(t.some(s=>!RA(s.colorSlots,o)))throw new Error("Colorable texture item variants must define identical color slots across skin models.")}return e}function bA(r,e){return{skinModel:r.skinModel,textureLayers:CA(r.textureLayers,e),...r.colorSlots?{colorSlots:r.colorSlots}:{}}}function Gu(r,e,t){const o=r[e];return o?bA(o,t):null}function PA(r,e){return r.skinModel===e}function LA(r,e){if(!r)return[];const t=new Map((r.colorSlots??[]).map(s=>[s.id,s])),o=[];for(const s of r.textureLayers.tintable??[]){const l=s.colorSlot?t.get(s.colorSlot):void 0;o.push({url:s.texture,role:"tintable",tint:(s.colorSlot?e?.[s.colorSlot]:void 0)??l?.defaultColor??"#FFFFFF"})}return r.textureLayers.fixed&&o.push({url:r.textureLayers.fixed,role:"fixed"}),o}const ba=ys,Lh=vo,Dh=Gu,DA=PA,UA=["None","Duck"],NA={Duck:Lh({classic:ba({skinModel:"classic",textureLayers:Xn({fixed:"textures/hat/duck.png"})}),slim:ba({skinModel:"slim",textureLayers:Xn({fixed:"textures/hat/duck.png"})})})};function IA(r,e,t){return r==="None"?null:Dh(NA[r],e,t)}const FA=["None","Pants"],kA={Pants:Lh({classic:ba({skinModel:"classic",textureLayers:Xn({fixed:"textures/bottom/pants.png"})}),slim:ba({skinModel:"slim",textureLayers:Xn({fixed:"textures/bottom/pants.png"})})})};function OA(r,e,t){return r==="None"?null:Dh(kA[r],e,t)}const po={id:"iris",labelKey:"category.eyesColor",defaultColor:"#2F5D9B",palette:["#2F5D9B","#2F8F4E","#5B3A29"]},BA={palette:["#4A2F20","#D6B15D","#1F1A17"]};function cf(r,e){return vo({classic:ys({skinModel:"classic",textureLayers:r,colorSlots:[e]}),slim:ys({skinModel:"slim",textureLayers:r,colorSlots:[e]})})}const J_={Classic:cf(Xn({tintable:{texture:"textures/eyes/clasic.tintable.png",colorSlot:po.id},fixed:"textures/eyes/clasic.fixed.png"}),po),Small:cf(Xn({tintable:{texture:"textures/eyes/small.tintable.png",colorSlot:po.id}}),po),Big:cf(Xn({tintable:{texture:"textures/eyes/big.tintable.png",colorSlot:po.id},fixed:"textures/eyes/big.fixed.png"}),po)},Q_={None:null},zA=Object.keys(J_),HA=Object.keys(Q_);function VA(r,e,t){const o=J_[r];return o?Gu(o,e,t):null}function GA(r,e,t){const o=Q_[r];return o?Gu(o,e,t):null}function e0(){return po.palette}function t0(){return BA.palette}function WA(r){return{id:"skin",labelKey:"category.skinColor",defaultColor:r[0],palette:r}}function fa(r,e,t){return ys({skinModel:r,textureLayers:e,colorSlots:[WA(t)]})}const df=["#D5BAAA","#E0AC69","#C68642"],jA=["#5D4037","#8D6E63","#A1887F"],Uv=["#558B2F","#7CB342"],Nv=["#556B2F"],Iv=["#FFFFFF"],Uh={Human:{skinColors:df,sexes:{classic:"Male",slim:"Female"},variants:vo({classic:fa("classic",Xn({tintable:{texture:"textures/race/human/male.tintable.png",colorSlot:"skin"},fixed:"textures/race/human/male.fixed.png"}),df),slim:fa("slim",Xn({tintable:{texture:"textures/race/human/female.tintable.png",colorSlot:"skin"},fixed:"textures/race/human/female.fixed.png"}),df)})},Bear:{skinColors:jA,sexes:{classic:"Male"},variants:vo({classic:ys({skinModel:"classic",textureLayers:Xn({fixed:"textures/race/bear/male.fixed.png"})})})},Orc:{skinColors:Uv,sexes:{classic:"Male"},variants:vo({classic:fa("classic",Xn({tintable:{texture:"textures/race/orc/male.tintable.png",colorSlot:"skin"},fixed:"textures/race/orc/male.fixed.png"}),Uv)})},Zombie:{skinColors:Nv,sexes:{classic:"Male"},variants:vo({classic:fa("classic",Xn({tintable:{texture:"textures/race/zombie/male.tintable.png",colorSlot:"skin"},fixed:"textures/race/zombie/male.fixed.png"}),Nv)})},Template:{skinColors:Iv,sexes:{classic:"None"},variants:vo({classic:fa("classic",Xn({tintable:{texture:"textures/race/template/none.tintable.png",colorSlot:"skin"},fixed:"textures/race/template/none.fixed.png"}),Iv)})}};function XA(r){const e=Object.values(Uh[r].sexes).flatMap(t=>t?[t]:[]);return[...new Set(e)]}function n0(r){return Uh[r].skinColors}function $A(r,e,t){return Gu(Uh[r].variants,e,t)}const r0=["Human","Bear","Orc","Zombie"],YA=["None","Hoodie"],Fv=["#4A6FA5","#A33A3A","#2F8F4E","#D6B15D","#7047A3","#5B3A29","#1F1A17","#FFFFFF"],qA={Hoodie:Lh({classic:ba({skinModel:"classic",textureLayers:Xn({tintable:[{texture:"textures/top/male/hoodie.png",colorSlot:"primary"}]}),colorSlots:[{id:"primary",labelKey:"wardrobeColor.primary",defaultColor:Fv[0],palette:Fv}]})})};function KA(r,e,t){return r==="None"?null:Dh(qA[r],e,t)}const Wr=[{id:"race",labelKey:"category.race",icon:"fa-user-tag",control:"choice"},{id:"sex",labelKey:"category.sex",icon:"fa-venus-mars",control:"choice"},{id:"skinColor",labelKey:"category.skinColor",icon:"fa-palette",control:"color"},{id:"eyes",labelKey:"category.eyes",icon:"fa-eye",control:"choice"},{id:"eyesColor",labelKey:"category.eyesColor",icon:"fa-eye-dropper",control:"color"},{id:"hair",labelKey:"category.hair",icon:"fa-scissors",control:"choice"},{id:"hairColor",labelKey:"category.hairColor",icon:"fa-fill-drip",control:"color"},{id:"hat",labelKey:"category.hat",icon:"fa-hat-cowboy",control:"choice"},{id:"shirt",labelKey:"category.shirt",icon:"fa-shirt",control:"choice"},{id:"pants",labelKey:"category.pants",icon:"fa-person",control:"choice"},{id:"shoes",labelKey:"category.shoes",icon:"fa-shoe-prints",control:"choice"},{id:"accessory",labelKey:"category.accessory",icon:"fa-gem",control:"choice"}],i0=[{ownerCategoryId:"race",colorControlId:"skinColor",slotId:"skin"},{ownerCategoryId:"eyes",colorControlId:"eyesColor",slotId:"iris"},{ownerCategoryId:"hair",colorControlId:"hairColor",slotId:"primary"}],ZA={race:"race",sex:"race",skinColor:"race",eyes:"eyes",eyesColor:"eyes",hair:"hair",hairColor:"hair",hat:"hat",shirt:"shirt",pants:"pants",shoes:"shoes",accessory:"accessory"};function o0(r){return ZA[r]}function s0(r){return i0.find(e=>e.ownerCategoryId===r)??null}function a0(r){return i0.find(e=>e.colorControlId===r)??null}function JA(r){return a0(r)!==null}const Br={race:"Human",sex:"Male",skinColor:n0("Human")[0],eyes:"Classic",eyesColor:e0()[0],hair:"None",hairColor:t0()[0],hat:"None",shirt:"None",pants:"None",shoes:"None",accessory:"None"},Tr=["hat","shirt","pants","shoes","accessory"],cs={id:"None",labelKey:"option.none",textureItem:null,textureLayers:null},QA={Male:{id:"Male",labelKey:"option.sex.Male",textureItem:null,textureLayers:null},Female:{id:"Female",labelKey:"option.sex.Female",textureItem:null,textureLayers:null},None:cs};function Oa(r){return r.sex==="Female"?"slim":"classic"}function bu(r,e,t){return t?[{id:r,labelKey:e,textureItem:t,textureLayers:t.textureLayers,...t.colorSlots?{colorSlots:t.colorSlots}:{}}]:[]}function ff(r,e,t,o){return!t||!DA(t,o)?[]:bu(r,e,t)}function kv(r,e="option.color"){const t={"#2F5D9B":`${e}.blue`,"#2F8F4E":`${e}.green`,"#5B3A29":`${e}.brown`,"#4A2F20":`${e}.brown`,"#D6B15D":`${e}.blond`,"#1F1A17":`${e}.black`};return r.map(o=>({id:o,labelKey:t[o]??`option.skinColor.${o}`,color:o}))}function ci(r,e,t,o=Oa(e)){return r==="race"?r0.flatMap(s=>bu(s,`option.race.${s}`,$A(s,o,t))):r==="sex"?XA(e.race).map(s=>QA[s]):r==="skinColor"?n0(e.race).map(s=>({id:s,labelKey:`option.skinColor.${s}`,color:s})):r==="eyes"?zA.flatMap(s=>bu(s,`option.eyes.${s}`,VA(s,o,t))):r==="eyesColor"?kv(e0()):r==="hair"?HA.flatMap(s=>s==="None"?[cs]:bu(s,`option.hair.${s}`,GA(s,o,t))):r==="hairColor"?kv(t0()):r==="hat"?UA.flatMap(s=>s==="None"?[cs]:ff(s,`option.hat.${s}`,IA(s,o,t),o)):r==="shirt"?YA.flatMap(s=>s==="None"?[cs]:ff(s,`option.shirt.${s}`,KA(s,o,t),o)):r==="pants"?FA.flatMap(s=>s==="None"?[cs]:ff(s,`option.pants.${s}`,OA(s,o,t),o)):[cs]}function Wu(r,e){const t={...Br,...r??{}};(e?ci("race",t,void 0,e).map(c=>c.id):[...r0]).includes(t.race)||(t.race=Br.race);const o=ci("sex",t).map(c=>c.id);o.includes(t.sex)||(t.sex=o[0]??Br.sex);const s=e??Oa(t),l=ci("skinColor",t,void 0,s).map(c=>c.id);return l.includes(t.skinColor)||(t.skinColor=l[0]??Br.skinColor),Wr.forEach(c=>{if(c.id==="race"||c.id==="sex"||c.id==="skinColor")return;const d=ci(c.id,t,void 0,s).map(f=>f.id);d.includes(t[c.id])||(t[c.id]=d[0]??"None")}),t}function eb(r){const e=new Map;for(const t of["classic","slim"])for(const o of ci(r,Br,void 0,t)){const s=e.get(o.id);(!s||!s.textureItem?.colorSlots?.length&&o.textureItem?.colorSlots?.length)&&e.set(o.id,o)}return[...e.values()]}function Yn(r){const e={};for(const t of Tr){const o={};for(const s of eb(t)){const l=s.textureItem?.colorSlots??[];if(l.length===0)continue;const c={};for(const d of l){const f=r?.[t]?.[s.id]?.[d.id];c[d.id]=typeof f=="string"&&d.palette.includes(f)?f:d.defaultColor}o[s.id]=c}Object.keys(o).length>0&&(e[t]=o)}return e}function Ba(r){const e={};for(const t of Tr){const o=r[t];o&&(e[t]=Object.fromEntries(Object.entries(o).map(([s,l])=>[s,{...l}])))}return e}function Xi(r){const e=new Set(Tr),t=[];return(r??[]).forEach(o=>{e.has(o)&&!t.includes(o)&&t.push(o)}),Tr.forEach(o=>{t.includes(o)||t.push(o)}),t}function hf(r){const e=s0(r);return({appearance:t,assetBaseUrl:o,skinModel:s})=>{const l=ci(r,t,o,s).find(d=>d.id===t[r]),c=e?{[e.slotId]:t[e.colorControlId]}:void 0;return{item:l?.textureItem??null,colors:c}}}function ha(r){return({appearance:e,assetBaseUrl:t,skinModel:o,wardrobeColors:s})=>({item:ci(r,e,t,o).find(l=>l.id===e[r])?.textureItem??null,colors:s[r]?.[e[r]]})}const tb={race:hf("race"),eyes:hf("eyes"),hair:hf("hair"),hat:ha("hat"),shirt:ha("shirt"),pants:ha("pants"),shoes:ha("shoes"),accessory:ha("accessory")};function l0(r){return["race","eyes","hair",...Xi(r)]}function u0(r,e){const t=tb[r](e);return LA(t.item,t.colors)}function nb(r,e=Tr,t,o=Oa(r),s){const l={appearance:r,assetBaseUrl:t,skinModel:o,wardrobeColors:Yn(s)};return l0(e).flatMap(c=>u0(c,l))}function rb(r,e,t,o,s=Oa(r),l){const c=new Set(t.map(o0)),d={appearance:r,assetBaseUrl:o,skinModel:s,wardrobeColors:Yn(l)};return l0(e).filter(f=>c.has(f)).flatMap(f=>u0(f,d))}function ib(r,e,t,o=Oa(e)){const s=a0(r);return s?!!ci(s.ownerCategoryId,e,t,o).find(l=>l.id===e[s.ownerCategoryId])?.textureItem?.colorSlots?.some(l=>l.id===s.slotId):!0}function c0({colorSlots:r,colors:e,onChange:t,t:o,testId:s="texture-item-color-palettes"}){return r.length===0?null:B.jsx("div",{className:"mt-2 space-y-2","data-testid":s,children:r.map(l=>{const c=e?.[l.id]??l.defaultColor,d=o(l.labelKey);return B.jsxs("div",{"data-color-slot":l.id,children:[B.jsx("div",{className:"text-xs font-semibold mb-1",children:d}),B.jsx("div",{className:"flex flex-wrap gap-1.5",role:"group","aria-label":d,children:l.palette.map(f=>{const p=c===f;return B.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border ${p?"is-selected":""}`,style:{backgroundColor:f},"aria-label":`${d}: ${f}`,"aria-pressed":p,onClick:()=>t(l.id,f),children:p&&B.jsx(si,{name:"fa-check"})},f)})})]},l.id)})})}function ob(r){return B.jsx(c0,{...r,testId:"wardrobe-color-palettes"})}const _u=r=>Tr.includes(r),Ov=(r,e)=>r.length===e.length&&r.every((t,o)=>t===e[o]);function sb({appearance:r,textureLayerOrder:e,wardrobeColors:t,onAppearanceChange:o,onWardrobeColorChange:s,onLayerOrderChange:l,t:c,assetBaseUrl:d,skinModel:f}){const[p,m]=O.useState(null),[v,y]=O.useState(null),[S,E]=O.useState(null),[M,x]=O.useState(null),_=O.useRef(null),L=O.useRef(null),P=O.useRef(null),A=O.useRef(null),G=O.useRef([]),N=O.useRef(new Map),k=O.useMemo(()=>new Map(Wr.map(ne=>[ne.id,ne])),[]),W=O.useMemo(()=>Wr.filter(ne=>!_u(ne.id)&&!JA(ne.id)),[]),b=p&&v?v:e,C=O.useMemo(()=>b.map(ne=>k.get(ne)).filter(ne=>!!ne),[k,b]);O.useLayoutEffect(()=>{const ne=A.current;if(!ne)return;const _e=new Map;ne.querySelectorAll("[data-layer-id]").forEach(Le=>{const it=Le.dataset.layerId;if(!it||!_u(it))return;const Je=Le.offsetTop,I=N.current.get(it);if(_e.set(it,Je),I===void 0||I===Je||typeof Le.animate!="function")return;typeof Le.getAnimations=="function"&&Le.getAnimations().filter(ct=>ct.id==="skincrafter-layer-preview").forEach(ct=>ct.cancel());const ot=Le.animate([{transform:`translateY(${I-Je}px)`},{transform:"translateY(0)"}],{duration:150,easing:"ease-out"});ot.id="skincrafter-layer-preview"}),N.current=_e},[b]);const V=ne=>{const _e=A.current;if(!_e)return[];const Le=_e.getBoundingClientRect().top;return[..._e.querySelectorAll("[data-layer-id]")].flatMap(it=>{const Je=it.dataset.layerId;if(!Je||!_u(Je)||Je===ne)return[];const I=it.getBoundingClientRect();return[{layer:Je,top:I.top-Le,bottom:I.bottom-Le}]})},ae=ne=>{const _e=A.current;if(!_e)return null;const Le=ne-_e.getBoundingClientRect().top;return MA(G.current,Le)},Z=()=>{_.current=null,L.current=null,P.current=null,G.current=[],m(null),y(null),E(null),x(null)},J=(ne,_e)=>{const Le=[...e];G.current=V(ne),_.current=ne,L.current=Le,m(ne),y(Le),E(null),x(_e)},fe=(ne,_e)=>{const Le=_.current;if(!Le)return;const it=wA(e,Le,ne,_e);L.current=it,y(Je=>Je&&Ov(Je,it)?Je:it),E({targetLayer:ne,position:_e})},ue=()=>{const ne=L.current,_e=ne&&!Ov(ne,e);Z(),_e&&ne&&l(ne)},he=(ne,_e)=>{const Le=e.indexOf(ne),it=Le+_e;if(Le<0||it<0||it>=e.length)return;const Je=[...e];[Je[Le],Je[it]]=[Je[it],Je[Le]],l(Je)},z=(ne,_e)=>{if(J(_e,{x:ne.clientX,y:ne.clientY,pointerType:"mouse"}),ne.dataTransfer.effectAllowed="move",ne.dataTransfer.setData("text/plain",_e),typeof ne.dataTransfer.setDragImage=="function"){const Le=document.createElement("div");Le.style.position="fixed",Le.style.left="-10000px",Le.style.top="-10000px",Le.style.width="1px",Le.style.height="1px",Le.style.opacity="0",document.body.appendChild(Le),ne.dataTransfer.setDragImage(Le,0,0),window.setTimeout(()=>Le.remove(),0)}},de=ne=>{!_.current||ne.clientX===0&&ne.clientY===0||x({x:ne.clientX,y:ne.clientY,pointerType:"mouse"})},le=()=>{_.current&&Z()},F=ne=>{if(!_.current)return;ne.preventDefault(),ne.dataTransfer.dropEffect="move";const _e=ae(ne.clientY);_e&&fe(_e.targetLayer,_e.position)},re=ne=>{ne.preventDefault(),ue()},ke=(ne,_e)=>{if(!(ne.pointerType==="mouse"||ne.button>0||!(ne.target instanceof Element?ne.target:null)?.closest("h3"))){ne.preventDefault(),P.current=ne.pointerId;try{ne.currentTarget.setPointerCapture(ne.pointerId)}catch{}J(_e,{x:ne.clientX,y:ne.clientY,pointerType:"touch"})}},te=ne=>{if(ne.pointerId!==P.current||!_.current)return;ne.preventDefault(),x({x:ne.clientX,y:ne.clientY,pointerType:"touch"});const _e=ae(ne.clientY);_e&&fe(_e.targetLayer,_e.position)},me=ne=>{if(ne.pointerId===P.current){ne.preventDefault();try{ne.currentTarget.releasePointerCapture(ne.pointerId)}catch{}ue()}},Ce=ne=>{ne.pointerId===P.current&&Z()},Se=ne=>{const _e=ci(ne.id,r,d,f),Le=_u(ne.id)?ne.id:null,it=Le?e.indexOf(Le):-1,Je=Le&&S?.targetLayer===Le,I=_e.find(ze=>r[ne.id]===ze.id),ot=s0(ne.id),ct=ot?I?.textureItem?.colorSlots?.filter(ze=>ze.id===ot.slotId)??[]:[],Tt=ot&&ib(ot.colorControlId,r,d,f)?ct:[],We=Le?I?.textureItem?.colorSlots??[]:[],mt=Le&&I?t?.[Le]?.[I.id]:void 0,je=ot?{[ot.slotId]:r[ot.colorControlId]}:void 0;return B.jsxs(TA,{heading:c(ne.labelKey),icon:ne.icon,className:`wardrobe-option-card p-2.5 pt-6 ${Le?"layer-order-card":""} ${Le===p?"is-dragging":""} ${Je?`drop-${S.position}`:""}`,"data-layer-id":Le??void 0,onPointerDown:Le?ze=>ke(ze,Le):void 0,onPointerMove:Le?te:void 0,onPointerUp:Le?me:void 0,onPointerCancel:Le?Ce:void 0,children:[Le&&B.jsxs("div",{className:"layer-order-controls",children:[B.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${c("action.moveLayerUp")} ${c(ne.labelKey)}`,title:c("action.moveLayerUp"),disabled:it<=0,onClick:()=>he(Le,-1),children:B.jsx(si,{name:"fa-chevron-up"})}),B.jsx("button",{type:"button",className:"layer-order-handle","aria-label":`${c("action.dragLayer")} ${c(ne.labelKey)}`,title:c("action.dragLayer"),draggable:!0,onDragStart:ze=>z(ze,Le),onDrag:de,onDragEnd:le,children:B.jsx(si,{name:"fa-grip-vertical"})}),B.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${c("action.moveLayerDown")} ${c(ne.labelKey)}`,title:c("action.moveLayerDown"),disabled:it>=e.length-1,onClick:()=>he(Le,1),children:B.jsx(si,{name:"fa-chevron-down"})})]}),B.jsx("div",{className:ne.control==="color"?"mt-2 flex flex-wrap gap-1.5":"mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1.5",role:"group","aria-label":c(ne.labelKey),children:_e.map(ze=>{const Rt=r[ne.id]===ze.id;return ne.control==="color"?B.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border ${Rt?"is-selected":""}`,style:{backgroundColor:ze.color??ze.id},"aria-label":c(ze.labelKey),"aria-pressed":Rt,onClick:()=>o(ne.id,ze.id),children:Rt&&B.jsx(si,{name:"fa-check"})},ze.id):B.jsx("button",{type:"button",className:`pixel-button min-h-8 px-2 py-1 border text-xs leading-tight transition-colors ${Rt?"skincrafter-option-selected":"skincrafter-secondary-action"}`,"aria-pressed":Rt,onClick:()=>o(ne.id,ze.id),children:c(ze.labelKey)},ze.id)})}),ot&&Tt.length>0&&B.jsx(c0,{colorSlots:Tt,colors:je,t:c,testId:`appearance-color-palettes-${ne.id}`,onChange:(ze,Rt)=>o(ot.colorControlId,Rt)}),Le&&I&&We.length>0&&B.jsx(ob,{colorSlots:We,colors:mt,t:c,onChange:(ze,Rt)=>s?.(Le,I.id,ze,Rt)})]},ne.id)},Ae=p?k.get(p):null;return B.jsxs(X_,{title:c("panel.customization"),icon:"fa-sliders",className:"overflow-visible md:overflow-hidden customization-panel p-3",children:[B.jsxs("div",{className:"space-y-1.5 options-container md:flex-1 md:min-h-0",children:[W.map(Se),B.jsx("div",{ref:A,className:"layer-order-list space-y-1.5",onDragOver:F,onDrop:re,children:C.map(Se)})]}),M&&Ae&&B.jsxs("div",{className:`layer-drag-ghost ${M.pointerType==="touch"?"is-touch":""}`,style:{left:M.x,top:M.y},"aria-hidden":"true","data-testid":"layer-drag-ghost",children:[B.jsx(si,{name:Ae.icon}),B.jsx("span",{children:c(Ae.labelKey)})]})]})}function ab(r,e){return r.length===e.length&&r.every((t,o)=>t===e[o])}function lb(r,e){return ab(r,e)}function ub(r,e){return Wr.every(({id:t})=>r[t]===e[t])}function d0(r,e){const t=Object.entries(r??{}),o=e??{};return t.length===Object.keys(o).length&&t.every(([s,l])=>o[s]===l)}function cb(r,e){const t=Yn(r),o=Yn(e);return Tr.every(s=>{const l=t[s]??{},c=o[s]??{},d=Object.keys(l);return d.length===Object.keys(c).length&&d.every(f=>f in c&&d0(l[f],c[f]))})}function Bv(r,e){return ub(r.appearance,e.appearance)&&lb(r.layerOrder,e.layerOrder)&&cb(r.wardrobeColors,e.wardrobeColors)}function db(r){return{appearance:{...r.appearance},layerOrder:[...r.layerOrder],wardrobeColors:Ba(Yn(r.wardrobeColors))}}const fb=["race","eyes","hair",...Tr];function xo(r){return`${r.length}:${r}`}function zv(r){return r===void 0?"u":r===null?"n":`s${xo(r)}`}function ih(r){return`${r.length}[${r.map(xo).join("")}]`}function Hv(r){return ih(Wr.map(({id:e})=>r[e]))}function hb(r){const e=Yn(r);return Tr.map(t=>{const o=e[t]??{},s=Object.keys(o).sort(),l=s.map(c=>{const d=o[c]??{},f=Object.keys(d).sort(),p=f.map(m=>`${xo(m)}${xo(d[m])}`).join("");return`${xo(c)}${f.length}{${p}}`}).join("");return`${xo(t)}${s.length}{${l}}`}).join("")}function pb(r){const e=new Set(r.map(o0));return fb.filter(t=>e.has(t))}function mb({state:r,compositionSex:e,wardrobeColors:t,activeCategories:o,assetBaseUrl:s,importedFingerprint:l,model:c}){const d={...r.appearance},f=new Set(o);return{appearance:d,compositionAppearance:{...d,sex:e},layerOrder:[...r.layerOrder],wardrobeColors:Ba(Yn(t)),activeCategories:Wr.map(({id:p})=>p).filter(p=>f.has(p)),assetBaseUrl:s,importedFingerprint:l,model:c}}function gb(r){return[`appearance:${Hv(r.appearance)}`,`composition:${Hv(r.compositionAppearance)}`,`layers:${ih(r.layerOrder)}`,`colors:${hb(r.wardrobeColors)}`,`activeLayers:${ih(pb(r.activeCategories))}`,`assets:${zv(r.assetBaseUrl)}`,`import:${zv(r.importedFingerprint)}`,`model:${xo(r.model)}`].join("|")}const Vv=[137,80,78,71,13,10,26,10],Iu=64;class tr extends Error{cause;constructor(e,t){super(e),this.name="InvalidInitialSkinError",this.cause=t}}function vb(r){let e="";for(let t=0;t<r.length;t+=32768){const o=r.subarray(t,Math.min(t+32768,r.length));e+=String.fromCharCode(...o)}return`data:image/png;base64,${btoa(e)}`}async function _b(r){const e=globalThis.crypto?.subtle;if(!e)throw new tr("Initial skin fingerprint could not be computed because Web Crypto is unavailable.");try{const t=new Uint8Array(r.byteLength);t.set(r);const o=await e.digest("SHA-256",t);return Array.from(new Uint8Array(o),s=>s.toString(16).padStart(2,"0")).join("")}catch(t){throw new tr("Initial skin fingerprint could not be computed.",t)}}function xb(r){if(r.length<24)throw new tr("Initial skin is not a valid PNG file.");for(let s=0;s<Vv.length;s+=1)if(r[s]!==Vv[s])throw new tr("Initial skin is not a valid PNG file.");const e=new DataView(r.buffer,r.byteOffset,r.byteLength),t=e.getUint32(8),o=String.fromCharCode(r[12],r[13],r[14],r[15]);if(t!==13||o!=="IHDR")throw new tr("Initial skin PNG is missing a valid IHDR header.");return{width:e.getUint32(16),height:e.getUint32(20)}}async function yb(r){return typeof r.arrayBuffer=="function"?new Uint8Array(await r.arrayBuffer()):new Promise((e,t)=>{const o=new FileReader;o.onload=()=>{if(!(o.result instanceof ArrayBuffer)){t(new Error("Blob reader did not return an ArrayBuffer."));return}e(new Uint8Array(o.result))},o.onerror=()=>t(o.error??new Error("Blob reader failed.")),o.readAsArrayBuffer(r)})}async function Sb(r){await new Promise((e,t)=>{const o=new Image;o.onload=()=>{const s=o.naturalWidth||o.width,l=o.naturalHeight||o.height;if(o.onload=null,o.onerror=null,s!==Iu||l!==Iu){t(new tr("Initial skin must be a 64x64 Minecraft PNG."));return}e()},o.onerror=s=>{o.onload=null,o.onerror=null,t(new tr("Initial skin PNG could not be decoded.",s))},o.src=r})}async function Eb(r,e){if(r.type&&r.type.toLowerCase()!=="image/png")throw new tr("Initial skin must use the image/png MIME type.");let t;try{t=await yb(r)}catch(c){throw new tr("Initial skin data could not be read.",c)}const o=xb(t);if(o.width!==Iu||o.height!==Iu)throw new tr("Initial skin must be a 64x64 Minecraft PNG.");const s=vb(t);await Sb(s);const l=await _b(t);return{dataUrl:s,fingerprint:l,model:e}}function Mb(r){const[e,t]=r.split(",",2),o=e.match(/^data:([^;]+);base64$/)?.[1]??"image/png",s=atob(t??""),l=new Uint8Array(s.length);for(let c=0;c<s.length;c+=1)l[c]=s.charCodeAt(c);return new Blob([l],{type:o})}function wb(r,e,t,o=e.sex==="Female"?"slim":"classic",s){const l=Mb(r),c=new File([l],"skincrafter-skin.png",{type:"image/png"}),d=Yn(s);return{blob:l,file:c,dataUrl:r,metadata:{width:64,height:64,mimeType:"image/png",model:o,appearance:{...e},layerOrder:[...t],wardrobeColors:Ba(d)}}}const va=2,Tb=new Map([[0,r=>({...r,schemaVersion:1})],[1,r=>({...r,schemaVersion:2,wardrobeColors:r.wardrobeColors??{}})]]);function ya(r){return typeof r=="object"&&r!==null&&!Array.isArray(r)}function Dr(r){return{success:!1,error:{code:"invalid_state",message:r}}}function Gv(r){return{success:!1,error:{code:"unsupported_schema_version",message:`Unsupported SkinCrafter state schema version: ${r}.`,schemaVersion:r}}}function Cb(r){return{schemaVersion:va,appearance:Wu(r.appearance),layerOrder:Xi(r.layerOrder),wardrobeColors:Yn(r.wardrobeColors)}}function Nh(r){const e=Cb(r);return{...e,appearance:{...e.appearance},layerOrder:[...e.layerOrder],wardrobeColors:Ba(e.wardrobeColors)}}function Rb(r){const e={};for(const t of Tr){const o=r[t];if(o===void 0)continue;if(!ya(o))return`SkinCrafter persisted wardrobeColors.${t} must be an object.`;const s={};for(const[l,c]of Object.entries(o)){if(!ya(c))return`SkinCrafter persisted wardrobeColors.${t}.${l} must be an object.`;const d={};for(const[f,p]of Object.entries(c)){if(typeof p!="string")return`SkinCrafter persisted wardrobeColors.${t}.${l}.${f} must be a string.`;d[f]=p}s[l]=d}e[t]=s}return e}function f0(r){if(!ya(r))return Dr("SkinCrafter persisted state must be an object.");const e=[],t=r.schemaVersion;let o,s;if(t===void 0)o=null,e.push({code:"legacy_unversioned",message:"Migrated legacy unversioned SkinCrafter state."}),s={...r,schemaVersion:0};else{if(typeof t!="number"||!Number.isInteger(t)||t<0)return Dr("SkinCrafter schemaVersion must be a non-negative integer.");if(o=t,o>va)return Gv(o);s={...r}}let l=o??0;for(;l<va;){const x=Tb.get(l);if(!x)return Gv(l);const _=l+1;s=x(s),e.push({code:"schema_version_migrated",message:`Migrated SkinCrafter state schema from version ${l} to ${_}.`,from:l,to:_}),l=_}if(s.schemaVersion!==va)return Dr("SkinCrafter state migration did not produce the current schema version.");const c=o===null||o===0;if(!ya(s.appearance))return Dr("SkinCrafter persisted appearance must be an object.");const d={};for(const x of Wr){const _=s.appearance[x.id];if(_===void 0){if(!c)return Dr(`SkinCrafter persisted appearance is missing ${x.id}.`);continue}if(typeof _!="string")return Dr(`SkinCrafter persisted appearance.${x.id} must be a string.`);d[x.id]=_}const f=s.layerOrder;if(f===void 0&&!c)return Dr("SkinCrafter persisted state is missing layerOrder.");if(f!==void 0&&(!Array.isArray(f)||f.some(x=>typeof x!="string")))return Dr("SkinCrafter persisted layerOrder must be an array of strings.");if(!ya(s.wardrobeColors))return Dr("SkinCrafter persisted wardrobeColors must be an object.");const p=Rb(s.wardrobeColors);if(typeof p=="string")return Dr(p);const m=Wu(d);for(const x of Wr){const _=s.appearance[x.id],L=m[x.id];_!==L&&e.push({code:"appearance_value_defaulted",message:`Normalized persisted appearance.${x.id} to a supported value.`,path:x.id,from:_,to:L})}const v=f??[],y=Xi(v);(v.length!==y.length||v.some((x,_)=>x!==y[_]))&&e.push({code:"layer_order_normalized",message:"Normalized persisted layer order by removing invalid/duplicate layers and appending missing layers.",path:"layerOrder",from:[...v],to:[...y]});const S=Yn(p);JSON.stringify(p)!==JSON.stringify(S)&&e.push({code:"wardrobe_colors_normalized",message:"Normalized wardrobe color slots by removing unknown values and filling missing slots with defaults.",path:"wardrobeColors",from:p,to:S});const E={appearance:m,layerOrder:y,wardrobeColors:S},M=Nh(E);return{success:!0,state:E,serializedState:M,sourceSchemaVersion:o,migrated:o!==va||e.length>0,notices:e}}class oh extends Error{assetUrl;cause;constructor(e,t){super(`Failed to load texture asset: ${e}`),this.name="TextureLoadError",this.assetUrl=e,this.cause=t}}const zr=64,Ab=r=>r?typeof r=="string"?{url:r,role:"fixed"}:r.url?r.role==="tintable"?{url:r.url,role:"tintable",tint:r.tint}:{url:r.url,role:"fixed"}:null:null;function bb(r){const e=r.replace("#",""),t=e.length===3?e.split("").map(o=>`${o}${o}`).join(""):e;return{r:Number.parseInt(t.slice(0,2),16),g:Number.parseInt(t.slice(2,4),16),b:Number.parseInt(t.slice(4,6),16),a:255}}function Pb(r,e){return r===zr&&e===zr}function Lb(r,e){if(r.a===0)return r;const t=(r.r+r.g+r.b)/765;return{r:Math.round(e.r*t),g:Math.round(e.g*t),b:Math.round(e.b*t),a:r.a}}function Db(r,e){const t=new Uint8ClampedArray(r);for(let o=0;o<t.length;o+=4){const s=Lb({r:r[o],g:r[o+1],b:r[o+2],a:r[o+3]},e);t[o]=s.r,t[o+1]=s.g,t[o+2]=s.b,t[o+3]=s.a}return t}const Ub=(r,e,t)=>{const o=document.createElement("canvas");o.width=zr,o.height=zr;const s=o.getContext("2d",{willReadFrequently:!0});if(!s)throw new Error("Could not create a 2D canvas context for tintable skin composition.");s.imageSmoothingEnabled=!1,s.drawImage(e,0,0);const l=s.getImageData(0,0,zr,zr);l.data.set(Db(l.data,bb(t))),s.putImageData(l,0,0),r.drawImage(o,0,0)},Nb=(r,e,t)=>{if(t.role==="fixed"){r.drawImage(e,0,0);return}Ub(r,e,t.tint??"#FFFFFF")},Ib=r=>new Promise((e,t)=>{const o=new Image;o.crossOrigin="anonymous",o.onload=()=>{const s=o.naturalWidth||o.width,l=o.naturalHeight||o.height;if(!Pb(s,l)){t(new oh(r,new Error(`Skin texture atlas must be ${zr}x${zr}; got ${s}x${l}.`)));return}e(o)},o.onerror=s=>t(new oh(r,s)),o.src=r});async function Wv(r){const e=r.map(Ab).filter(l=>!!l);if(e.length===0)throw new Error("No texture assets were available for skin composition.");const t=await Promise.all(e.map(l=>Ib(l.url))),o=document.createElement("canvas");o.width=zr,o.height=zr;const s=o.getContext("2d",{willReadFrequently:!0});if(!s)throw new Error("Could not create a 2D canvas context for skin composition.");return s.imageSmoothingEnabled=!1,t.forEach((l,c)=>Nb(s,l,e[c])),o.toDataURL("image/png")}function Fr(r,e){return{appearance:Wu(r?.appearance??null,e),layerOrder:Xi(r?.layerOrder),wardrobeColors:Yn(r?.wardrobeColors)}}function h0(r,e){return{code:r==="load"?"persistence_load_failed":"persistence_save_failed",category:"persistence",message:r==="load"?"Failed to load persisted SkinCrafter state.":"Failed to save SkinCrafter state.",cause:e}}function jv(r){try{const e=r?.load()??null;return e&&"status"in e?e.status==="incompatible"?{state:Fr(null),writesBlocked:!0,error:null}:e.status==="empty"?{state:Fr(null),writesBlocked:!1,error:null}:{state:Fr(e.state),writesBlocked:!1,error:null}:{state:Fr(e),writesBlocked:!1,error:null}}catch(e){return{state:Fr(null),writesBlocked:!0,error:h0("load",e)}}}function Fb(r){return r?{"--skincrafter-accent":r.accent,"--skincrafter-accent-strong":r.accentStrong,"--skincrafter-surface":r.surface,"--skincrafter-text":r.text,"--skincrafter-muted":r.muted,"--skincrafter-border":r.border}:{}}function kb(r){return r instanceof oh?{code:"asset_load_failed",category:"asset",message:`Failed to load skin texture asset: ${r.assetUrl}`,assetUrl:r.assetUrl,cause:r.cause}:{code:"generation_failed",category:"generation",message:"Failed to generate the current skin.",cause:r}}function Xv(r){return{code:"invalid_initial_skin",category:"input",message:r instanceof tr?r.message:"Initial skin must be a decodable 64x64 Minecraft PNG.",cause:r instanceof tr?r.cause??r:r}}function xn(r,...e){if(r)try{r(...e)}catch(t){console.error("SkinCrafter host callback failed",t)}}function Ob({locale:r=Rs,value:e,initialSkin:t,persistence:o,assetBaseUrl:s,onStateChange:l,onSkinChange:c,onSave:d,onStatusChange:f,onError:p,className:m="",style:v,theme:y,previewBottomOffset:S=0}){const E=t?.image??null,M=t?.model??null,x=E!==null,[_]=O.useState(()=>{if(e)return{state:Fr(e,M??void 0),writesBlocked:!1,error:null};const be=jv(o);return t?{state:Fr(t,M??void 0),writesBlocked:be.writesBlocked,error:be.error}:be}),[L,P]=O.useState(_.state),[A,G]=O.useState(null),[N,k]=O.useState({key:null,status:"idle",error:null}),[W,b]=O.useState(null),[C,V]=O.useState({source:null,model:null,status:"idle",error:null}),[ae,Z]=O.useState([]),J=O.useRef(0),fe=O.useRef({}),ue=O.useRef(c),he=O.useRef(f),z=O.useRef(p),de=O.useRef(null),le=O.useRef(!1),F=O.useRef(null),re=O.useRef(null),ke=O.useRef("classic"),te=O.useRef(o),me=O.useRef(!e),Ce=O.useRef(_.writesBlocked),Se=O.useRef(_.error!==null),Ae=O.useRef(!1),ne=O.useRef(null),_e=x&&M!==null&&W?.source===E&&W.model===M,Le=_e&&W?W.baselineState.appearance.sex:_.state.appearance.sex,it=ae.includes("sex"),Je=O.useMemo(()=>{if(!e)return null;const be=M!==null&&!it&&e.appearance.sex===Le?M:void 0;return Fr(e,be)},[Le,M,it,e]),I=O.useMemo(()=>{if(!_e||M===null||it)return L;const be=Fr(L,M);return Bv(L,be)?L:be},[_e,M,L,it]),ot=Je??I,ct=O.useMemo(()=>Yn(ot.wardrobeColors),[ot.wardrobeColors]),Tt=O.useRef(ot);Tt.current=ot;const We=O.useCallback(be=>ka(r,be),[r]),mt=O.useCallback(be=>{const dt=J.current+1;J.current=dt,fe.current[be]=dt,Z(vt=>vt.includes(be)?vt:[...vt,be])},[]);O.useEffect(()=>{Je&&P(be=>Bv(be,Je)?be:Je)},[Je]),O.useEffect(()=>{e||I===L||P(I)},[L,I,e]),O.useEffect(()=>{!e||!x||it||e.appearance.sex!==Le&&mt("sex")},[x,Le,mt,it,e]);const je=O.useCallback(be=>{e||P(be),xn(l,be)},[l,e]),ze=O.useCallback((be,dt)=>{x&&mt(be);const vt=be==="sex"?dt==="Female"?"slim":"classic":ke.current;je({...ot,appearance:Wu({...ot.appearance,[be]:dt},vt),wardrobeColors:ct})},[x,mt,je,ot,ct]),Rt=O.useCallback((be,dt,vt,St)=>{x&&(e?ne.current={category:be,itemId:dt,slotId:vt,color:St}:mt(be));const Vt=Ba(ct),Qt=Vt[be]??{},mn=Qt[dt]??{};Vt[be]={...Qt,[dt]:{...mn,[vt]:St}},je({...ot,wardrobeColors:Yn(Vt)})},[x,mt,je,ot,ct,e]),D=O.useCallback(be=>{je({...ot,layerOrder:Xi(be)})},[je,ot]);O.useEffect(()=>{const be=ne.current;!be||!e||ot.appearance[be.category]===be.itemId&&ct[be.category]?.[be.itemId]?.[be.slotId]===be.color&&(ne.current=null,mt(be.category))},[_e,mt,ot.appearance,ct,e]),O.useEffect(()=>{ne.current=null},[E,M]),O.useEffect(()=>{ue.current=c},[c]),O.useEffect(()=>{he.current=f},[f]),O.useEffect(()=>{z.current=p},[p]),O.useEffect(()=>()=>{re.current=null},[]),O.useEffect(()=>{Ae.current||!_.error||(Ae.current=!0,xn(z.current,_.error))},[_.error]),O.useEffect(()=>{if(!E){de.current=null,le.current=!1,b(null),J.current=0,fe.current={},Z([]),V({source:null,model:null,status:"idle",error:null});return}if(!M){le.current=!1;const St=Xv(new tr("Initial skin model must be either classic or slim."));V({source:E,model:null,status:"error",error:St}),xn(he.current,"error"),xn(z.current,St);return}let be=!0;const dt=db(Tt.current),vt=J.current;return V({source:E,model:M,status:"loading",error:null}),xn(he.current,"generating"),Eb(E,M).then(St=>{if(!be)return;const Vt=de.current,Qt=Vt!==null&&Vt.fingerprint===St.fingerprint&&Vt.model===St.model,mn=Qt?{...Vt,source:E}:{source:E,dataUrl:St.dataUrl,fingerprint:St.fingerprint,model:St.model,baselineState:Fr(dt,St.model)};if(le.current=Qt,de.current=mn,b(mn),!Qt){const Pn=Object.entries(fe.current).filter(([,an])=>(an??0)>vt).map(([an])=>an);Z(Pn)}V({source:E,model:M,status:"ready",error:null}),Qt&&xn(he.current,"ready")}).catch(St=>{if(!be)return;le.current=!1;const Vt=Xv(St);V({source:E,model:M,status:"error",error:Vt}),xn(he.current,"error"),xn(z.current,Vt)}),()=>{be=!1}},[E,M]),O.useEffect(()=>{if(!(e||Se.current)){if(!me.current||te.current!==o){const be=jv(o);if(te.current=o,me.current=!0,Ce.current=be.writesBlocked,be.error){Se.current=!0,xn(z.current,be.error);return}}if(!(Ce.current||!o))try{o.save(Nh(ot))}catch(be){Ce.current=!0,Se.current=!0,xn(z.current,h0("save",be))}}},[o,ot,e]);const T=O.useMemo(()=>{if(!_e||!W)return[];const be=new Set(ae);for(const vt of Wr)ot.appearance[vt.id]!==W.baselineState.appearance[vt.id]&&be.add(vt.id);const dt=Yn(W.baselineState.wardrobeColors);for(const vt of Tr){const St=ot.appearance[vt];if(St!==W.baselineState.appearance[vt])continue;const Vt=ct[vt]?.[St],Qt=dt[vt]?.[St];d0(Vt,Qt)||be.add(vt)}return Wr.map(vt=>vt.id).filter(vt=>be.has(vt))},[ae,_e,W,ot.appearance,ct]),{sex:Q}=ot.appearance,pe=s?.replace(/\/+$/,"")||void 0,xe=T.includes("sex"),ce=_e&&W&&!xe?W.model==="slim"?"Female":"Male":Q,qe=_e&&W&&!xe?W.model:Q==="Female"?"slim":"classic";ke.current=qe;const De=_e?W?.fingerprint??null:null,He=_e?W?.dataUrl??null:null,Qe=mb({state:ot,compositionSex:ce,wardrobeColors:ct,activeCategories:T,assetBaseUrl:pe,importedFingerprint:De,model:qe}),ge=gb(Qe),Be=A?.key===ge?A:null,st=x&&C.source===E&&C.model===M,nt=x&&(!st||C.status==="loading"),Ue=st&&C.status==="error",at=nt?"generating":Ue?"error":N.key===ge?N.status:"idle",j=Ue?C.error:N.key===ge?N.error:null;O.useEffect(()=>{if(x&&!_e){re.current=null;return}if(le.current){const an=F.current===ge;if(le.current=!1,an){re.current={key:ge,token:null};return}}if(re.current?.key===ge)return;const be=Symbol("SkinCrafter generation");re.current={key:ge,token:be};const{appearance:dt,compositionAppearance:vt,layerOrder:St,wardrobeColors:Vt,activeCategories:Qt,assetBaseUrl:mn,model:Pn}=Qe;k({key:ge,status:"generating",error:null}),xn(he.current,"generating"),(async()=>{let an;try{let Bn;if(He){const Sn=rb(vt,St,Qt,mn,Pn,Vt);Bn=Sn.filter(Boolean).length===0?He:await Wv([He,...Sn])}else{const Sn=nb(dt,St,mn,Pn,Vt);Bn=await Wv(Sn)}an={dataUrl:Bn,output:wb(Bn,dt,St,Pn,Vt)}}catch(Bn){if(re.current?.token!==be)return;const Sn=kb(Bn);k({key:ge,status:"error",error:Sn}),xn(he.current,"error"),xn(z.current,Sn);return}re.current?.token===be&&(F.current=ge,G({key:ge,texture:an.dataUrl,output:an.output}),k({key:ge,status:"ready",error:null}),xn(ue.current,an.output),xn(he.current,"ready"))})()},[ge,Qe,x,He,_e]);const Ne=Be??A,ye=Be?.output??null,Oe=Ne?.texture??null,we=Ne?.output.metadata.model??qe,ve=at==="ready"&&ye!==null,Xe=d&&ve&&ye?()=>xn(d,ye):void 0,pt=O.useCallback(be=>{xn(z.current,be)},[]);return B.jsx("div",{className:`skincrafter-editor h-full min-h-0 w-full ${m}`.trim(),style:{...Fb(y),...v},"data-testid":"skincrafter-editor","data-skincrafter-locale":r,"data-skincrafter-generation-status":at,children:B.jsx(EA,{left:B.jsx(Z_,{texture:Oe,model:we,footerHeight:S,t:We,onSave:Xe,canSave:ve,generationStatus:at,generationError:j,onError:pt}),right:B.jsx(sb,{appearance:ot.appearance,textureLayerOrder:ot.layerOrder,wardrobeColors:ct,onAppearanceChange:ze,onWardrobeColorChange:Rt,onLayerOrderChange:D,t:We,assetBaseUrl:s,skinModel:qe})})})}function Bb({texture:r,model:e="classic",locale:t=Rs,bottomOffset:o=0,className:s="",style:l,theme:c,onError:d}){const f=m=>ka(t,m),p={"--skincrafter-accent":c?.accent,"--skincrafter-accent-strong":c?.accentStrong,"--skincrafter-surface":c?.surface,"--skincrafter-text":c?.text,"--skincrafter-muted":c?.muted,"--skincrafter-border":c?.border};return B.jsx("div",{className:`skincrafter-editor h-full min-h-0 ${s}`.trim(),style:{...p,...l},children:B.jsx(Z_,{texture:r,model:e,footerHeight:o,t:f,onError:d})})}const p0={en:{"skinView.error.usernameRequired":"Please enter a Minecraft username.","skinView.error.playerNotFound":"Minecraft player not found.","skinView.error.skinTextureMissing":"This player does not have an available skin texture.","skinView.error.network":"Could not reach PlayerDB. Check your connection and try again.","skinView.error.serviceUnavailable":"PlayerDB is temporarily unavailable. Try again later.","skinView.error.rateLimited":"Too many player lookup requests. Try again in a moment.","skinView.error.invalidResponse":"PlayerDB returned an unexpected response. Try again later.","notFound.title":"Page not found","notFound.description":"This address does not point to a SkinCrafter page.","notFound.backToCreator":"Back to creator"},pl:{"skinView.error.usernameRequired":"Podaj nazwę gracza Minecraft.","skinView.error.playerNotFound":"Nie znaleziono gracza Minecraft.","skinView.error.skinTextureMissing":"Ten gracz nie ma dostępnej tekstury skina.","skinView.error.network":"Nie udało się połączyć z PlayerDB. Sprawdź połączenie i spróbuj ponownie.","skinView.error.serviceUnavailable":"PlayerDB jest chwilowo niedostępne. Spróbuj ponownie później.","skinView.error.rateLimited":"Za dużo zapytań o graczy. Spróbuj ponownie za chwilę.","skinView.error.invalidResponse":"PlayerDB zwróciło nieoczekiwaną odpowiedź. Spróbuj ponownie później.","notFound.title":"Nie znaleziono strony","notFound.description":"Ten adres nie prowadzi do żadnej strony SkinCraftera.","notFound.backToCreator":"Wróć do kreatora"},"pt-BR":{"skinView.error.usernameRequired":"Digite um nome de usuário do Minecraft.","skinView.error.playerNotFound":"Jogador do Minecraft não encontrado.","skinView.error.skinTextureMissing":"Este jogador não possui uma textura de skin disponível.","skinView.error.network":"Não foi possível acessar o PlayerDB. Verifique sua conexão e tente novamente.","skinView.error.serviceUnavailable":"O PlayerDB está temporariamente indisponível. Tente novamente mais tarde.","skinView.error.rateLimited":"Muitas consultas de jogadores. Tente novamente em instantes.","skinView.error.invalidResponse":"O PlayerDB retornou uma resposta inesperada. Tente novamente mais tarde.","notFound.title":"Página não encontrada","notFound.description":"Este endereço não aponta para uma página do SkinCrafter.","notFound.backToCreator":"Voltar ao criador"}};function zb(r){return r in p0.en}function Hb(r,e){return zb(e)?p0[r][e]:ka(r,e)}function Vb(r=()=>window.localStorage){return{read:e=>{try{return{status:"available",value:r().getItem(e)}}catch{return{status:"unavailable"}}},write:(e,t)=>{try{return r().setItem(e,t),!0}catch{return!1}}}}const Ih=Vb(),Gb=Kv.forwardRef((r,e)=>B.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:B.jsx("div",{className:"container mx-auto text-center text-sm",children:B.jsx("p",{children:"(c) 2026 SkinCrafter. All rights reserved."})})})),Wb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2036'%20role='img'%20aria-label='Brazil%20flag'%3e%3crect%20width='60'%20height='36'%20fill='%23009B3A'/%3e%3cpath%20d='M30%204%2054%2018%2030%2032%206%2018Z'%20fill='%23FFDF00'/%3e%3ccircle%20cx='30'%20cy='18'%20r='9'%20fill='%23002776'/%3e%3cpath%20d='M22.5%2016.5c5.5-2%2011-1.5%2015%201.5'%20fill='none'%20stroke='%23fff'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3c/svg%3e",jb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2036'%20role='img'%20aria-label='United%20Kingdom%20flag'%3e%3crect%20width='60'%20height='36'%20fill='%23012169'/%3e%3cpath%20d='M0%200%2060%2036M60%200%200%2036'%20stroke='%23fff'%20stroke-width='8'/%3e%3cpath%20d='M0%200%2060%2036M60%200%200%2036'%20stroke='%23C8102E'%20stroke-width='4'/%3e%3cpath%20d='M30%200v36M0%2018h60'%20stroke='%23fff'%20stroke-width='12'/%3e%3cpath%20d='M30%200v36M0%2018h60'%20stroke='%23C8102E'%20stroke-width='7'/%3e%3c/svg%3e",Xb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2036'%20role='img'%20aria-label='Poland%20flag'%3e%3crect%20width='60'%20height='18'%20fill='%23fff'/%3e%3crect%20y='18'%20width='60'%20height='18'%20fill='%23DC143C'/%3e%3c/svg%3e",$b=r=>ka(Rs,r),Yb="/dev/logo.png",qb={en:{flagSrc:jb,label:"English"},pl:{flagSrc:Xb,label:"Polski"},"pt-BR":{flagSrc:Wb,label:"Português"}},$v=r=>qb[r],Kb=r=>"DEV",pf=Kb(),Yv=({src:r})=>B.jsx("img",{src:r,alt:"","aria-hidden":"true",className:"h-[14px] w-6 shrink-0 object-contain"}),Zb=({logoSrc:r=Yb,logoAlt:e="SkinCrafter logo",language:t="en",onLanguageChange:o,t:s=$b})=>{const l=O.useRef(null),c=$v(t),d=f=>{l.current?.removeAttribute("open"),o?.(f)};return B.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:B.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[B.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[B.jsx("div",{className:"h-8 w-36 flex items-center",children:B.jsx("img",{src:r,alt:e,className:"h-auto max-h-8 w-full object-contain",style:{imageRendering:"pixelated"}})}),B.jsx("span",{className:"pixel-border bg-amber-500 px-2 py-0.5 text-xs font-bold uppercase tracking-normal text-green-950 shadow-sm",title:pf,"aria-label":pf,children:pf})]}),B.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[B.jsx(vf,{to:"/",className:({isActive:f})=>`pixel-button px-3 py-1 pixel-border transition-colors ${f?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:s("nav.wardrobe")}),B.jsx(vf,{to:"/mcskinview",className:({isActive:f})=>`pixel-button px-3 py-1 pixel-border transition-colors ${f?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:s("nav.skinView")}),o&&B.jsxs("details",{ref:l,className:"group relative ml-auto sm:ml-0",children:[B.jsxs("summary",{className:"pixel-button pixel-border flex h-9 min-w-16 cursor-pointer list-none items-center justify-center gap-2 bg-green-700 px-3 py-1 text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-green-800 [&::-webkit-details-marker]:hidden","aria-label":`${s("nav.language")}: ${c.label}`,children:[B.jsx(Yv,{src:c.flagSrc}),B.jsx("span",{className:"text-xs transition-transform group-open:rotate-180","aria-hidden":"true",children:"▾"})]}),B.jsx("div",{className:"pixel-border absolute right-0 z-50 mt-2 min-w-44 bg-green-800 p-1 text-white shadow-md",role:"menu","aria-label":s("nav.language"),children:K_.map(f=>{const p=$v(f),m=f===t;return B.jsxs("button",{type:"button",className:`pixel-button pixel-border mb-1 flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors last:mb-0 ${m?"bg-green-700 text-white hover:bg-green-800 focus:bg-green-800":"bg-gray-100 text-gray-700 hover:bg-gray-200 focus:bg-gray-200"} focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-inset`,role:"menuitemradio","aria-checked":m,onClick:()=>d(f),children:[B.jsx(Yv,{src:p.flagSrc}),B.jsx("span",{children:p.label})]},f)})})]})]})]})})},m0="skincrafterLanguage",Jb=()=>{const r=Ih.read(m0);return r.status==="available"&&xA(r.value)?r.value:Rs};function Fh({children:r}){const[e,t]=O.useState(()=>Jb()),o=O.useRef(null),[s,l]=O.useState(0),c=O.useCallback(f=>Hb(e,f),[e]),d=O.useCallback(f=>{t(f)},[]);return O.useLayoutEffect(()=>{document.documentElement.lang=e},[e]),O.useEffect(()=>{Ih.write(m0,e)},[e]),O.useEffect(()=>{const f=()=>{l(o.current?.offsetHeight??0)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),B.jsxs("div",{className:"max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col",children:[B.jsx("div",{className:"shrink-0",children:B.jsx(Zb,{language:e,onLanguageChange:d,t:c})}),r({footerHeight:s,language:e,t:c}),B.jsx("div",{className:"shrink-0",children:B.jsx(Gb,{ref:o})})]})}const Pu="skincrafterState",kh="wardrobeAppearance",Oh="wardrobeLayerOrder";function Pa(r){return JSON.parse(r)}function xu(){return{appearance:{...Br},layerOrder:Xi(null)}}function g0(r){const e=f0(r);return e.success?{state:e.state,serializedState:e.serializedState}:null}function Qb(r){let e;try{e=Pa(r)}catch{return{kind:"invalid"}}const t=f0(e);return t.success?{kind:"loaded",value:{state:t.state,serializedState:t.serializedState}}:t.error.code==="unsupported_schema_version"?{kind:"unsupported"}:{kind:"invalid"}}function e2(r){const e=r(kh);if(e.status==="unavailable")return{kind:"unavailable"};if(e.value===null)return{kind:"missing"};const t=r(Oh);if(t.status==="unavailable")return{kind:"unavailable"};if(t.value===null)return{kind:"missing"};try{const o=g0({appearance:Pa(e.value),layerOrder:Pa(t.value)});return o?{kind:"loaded",value:o}:{kind:"missing"}}catch{return{kind:"missing"}}}function t2(r,e){const t=r(kh);if(t.status==="unavailable")return xu();let o;if(t.value)try{o=Pa(t.value)}catch{o={...Br}}else{const d=r("wardrobeRace"),f=r("wardrobeSkinColor"),p=r("wardrobeHat");if(d.status==="unavailable"||f.status==="unavailable"||p.status==="unavailable")return xu();o={race:d.value??Br.race,skinColor:f.value??Br.skinColor,hat:p.value??Br.hat}}let s=Xi(null);const l=r(Oh);if(l.status==="unavailable")return xu();if(l.value)try{s=Pa(l.value)}catch{s=Xi(null)}const c=g0({appearance:o,layerOrder:s});return c?(e(Pu,JSON.stringify(c.serializedState)),c.state):xu()}function n2(r,e){return JSON.stringify(r.appearance)===JSON.stringify(e.appearance)&&JSON.stringify(r.layerOrder)===JSON.stringify(e.layerOrder)}function r2(r=Ih){let e=!0;const t=s=>{const l=r.read(s);return l.status==="unavailable"&&(e=!1),l},o=(s,l)=>{if(!e)return!1;const c=r.write(s,l);return c||(e=!1),c};return{load:()=>{e=!0;const s=t(Pu);if(s.status==="unavailable")return{status:"empty"};if(s.value===null)return{status:"loaded",state:t2(t,o)};const l=Qb(s.value);if(l.kind==="unsupported")return e=!1,{status:"incompatible"};if(l.kind==="invalid")return{status:"empty"};const c=e2(t);if(c.kind==="loaded"&&!n2(c.value.serializedState,l.value.serializedState)){const d={...c.value.state,wardrobeColors:l.value.state.wardrobeColors},f=Nh(d);return o(Pu,JSON.stringify(f)),{status:"loaded",state:d}}return{status:"loaded",state:l.value.state}},save:s=>{o(Pu,JSON.stringify(s))&&o(kh,JSON.stringify(s.appearance))&&o(Oh,JSON.stringify(s.layerOrder))}}}const i2=r2();class $t extends Error{code;status;cause;constructor(e,t={}){super(e),this.name="FetchSkinError",this.code=e,this.status=t.status,this.cause=t.cause}}const o2="textures.minecraft.net",s2=(r,e)=>{let t;try{t=new URL(r)}catch(s){throw new $t("invalid_response",{status:e,cause:s})}if(!(t.hostname===o2&&t.port===""&&t.username===""&&t.password==="")||t.protocol!=="http:"&&t.protocol!=="https:")throw new $t("invalid_response",{status:e});return t.protocol="https:",t.toString()},Nr=r=>typeof r=="object"&&r!==null,a2=r=>Nr(r)&&typeof r.name=="string"&&typeof r.value=="string",l2=r=>{if(!Nr(r)||typeof r.success!="boolean")throw new $t("invalid_response");if(!r.success)return{success:!1};if(!Nr(r.data)||!Nr(r.data.player))throw new $t("invalid_response");const e=r.data.player;if(e.skin_texture!==void 0&&typeof e.skin_texture!="string")throw new $t("invalid_response");if(e.properties!==void 0&&(!Array.isArray(e.properties)||!e.properties.every(a2)))throw new $t("invalid_response");return{success:!0,data:{player:{skin_texture:e.skin_texture,properties:e.properties}}}},u2=r=>{if(!r)return null;let e;try{e=JSON.parse(atob(r.value))}catch(l){throw new $t("invalid_response",{cause:l})}if(!Nr(e))throw new $t("invalid_response");const t=e.textures;if(t===void 0)return{};if(!Nr(t))throw new $t("invalid_response");const o=t.SKIN;if(o===void 0)return{textures:{}};if(!Nr(o))throw new $t("invalid_response");if(o.url!==void 0&&typeof o.url!="string")throw new $t("invalid_response");const s=o.metadata;if(s!==void 0&&!Nr(s))throw new $t("invalid_response");if(Nr(s)&&s.model!==void 0&&typeof s.model!="string")throw new $t("invalid_response");return{textures:{SKIN:{url:o.url,metadata:Nr(s)&&typeof s.model=="string"?{model:s.model}:void 0}}}},c2=r=>r===404?new $t("player_not_found",{status:r}):r===429?new $t("rate_limited",{status:r}):r>=500?new $t("service_unavailable",{status:r}):new $t("invalid_response",{status:r});async function d2(r){let e;try{e=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(r)}`)}catch(f){throw new $t("network_error",{cause:f})}if(!e.ok)throw c2(e.status);let t;try{t=await e.json()}catch(f){throw new $t("invalid_response",{status:e.status,cause:f})}const o=l2(t);if(!o.success)throw new $t("player_not_found",{status:e.status});const s=o.data?.player;if(!s)throw new $t("invalid_response",{status:e.status});const l=s.properties?.find(f=>f.name==="textures"),c=u2(l)?.textures?.SKIN,d=c?.url??s.skin_texture;if(!d)throw new $t("skin_texture_missing",{status:e.status});return{texture:s2(d,e.status),model:c?.metadata?.model==="slim"?"slim":"classic"}}const f2={player_not_found:"skinView.error.playerNotFound",skin_texture_missing:"skinView.error.skinTextureMissing",rate_limited:"skinView.error.rateLimited",service_unavailable:"skinView.error.serviceUnavailable",network_error:"skinView.error.network",invalid_response:"skinView.error.invalidResponse"},h2=({className:r})=>B.jsxs("svg",{"aria-hidden":"true","data-standalone-icon":"user",focusable:"false",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:r,children:[B.jsx("circle",{cx:"12",cy:"8",r:"4"}),B.jsx("path",{d:"M4 21c0-4.25 3.6-7 8-7s8 2.75 8 7"})]}),p2=({className:r})=>B.jsxs("svg",{"aria-hidden":"true","data-standalone-icon":"player-card",focusable:"false",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:r,children:[B.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),B.jsx("circle",{cx:"9",cy:"11",r:"2"}),B.jsx("path",{d:"M6.5 16c.7-1.4 1.5-2 2.5-2s1.8.6 2.5 2M14 10h4M14 14h4"})]}),m2=({className:r})=>B.jsxs("svg",{"aria-hidden":"true","data-standalone-icon":"download",focusable:"false",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:r,children:[B.jsx("path",{d:"M7 18H6a4 4 0 0 1-.4-7.98A6.5 6.5 0 0 1 18.2 9 4.5 4.5 0 0 1 18 18h-1"}),B.jsx("path",{d:"M12 11v8m0 0-3-3m3 3 3-3"})]}),g2=()=>{const[r,e]=O.useState(""),[t,o]=O.useState(null),[s,l]=O.useState(null),[c,d]=O.useState(!1),f=O.useCallback(m=>{e(m.target.value)},[]),p=O.useCallback(async m=>{if(m.preventDefault(),!r.trim()){l("skinView.error.usernameRequired");return}l(null),o(null),d(!0);try{o(await d2(r.trim()))}catch(v){l(v instanceof $t?f2[v.code]:"skinView.error.invalidResponse"),o(null)}finally{d(!1)}},[r]);return B.jsx(Fh,{children:({footerHeight:m,language:v,t:y})=>B.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[B.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:B.jsx(Bb,{texture:t?.texture??null,model:t?.model??"classic",locale:v,bottomOffset:m})}),B.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:B.jsxs("section",{className:"mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4",children:[B.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[B.jsx(h2,{className:"mr-2 h-5 w-5 shrink-0 text-green-700"}),y("panel.loadSkin")]}),B.jsxs("div",{className:"space-y-4 md:flex-1 md:min-h-0 overflow-y-auto pr-2",children:[B.jsxs("div",{className:"option-card bg-white shadow p-4 pixel-border relative pt-5",children:[B.jsxs("h3",{className:"font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10",children:[B.jsx(p2,{className:"mr-2 h-4 w-4 shrink-0 text-amber-600"}),y("skinView.player")]}),B.jsxs("form",{onSubmit:p,className:"mt-4 flex flex-col gap-3",children:[B.jsx("input",{type:"text",value:r,onChange:f,placeholder:y("skinView.username"),"aria-label":y("skinView.username"),className:"w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"}),B.jsxs("button",{type:"submit",disabled:c,className:"pixel-button p-2 pixel-border bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white",children:[B.jsx(m2,{className:"mr-2 inline-block h-4 w-4 align-middle"}),y(c?"action.loading":"action.loadSkin")]})]})]}),s&&B.jsx("div",{role:"alert",className:"option-card bg-red-50 text-red-700 shadow p-4 pixel-border",children:y(s)})]})]})})]})})},v2=()=>B.jsx(Fh,{children:({t:r})=>B.jsx("main",{className:"flex-1 min-h-0 flex items-center justify-center p-4",children:B.jsxs("section",{className:"option-card bg-white shadow p-6 pixel-border max-w-xl w-full text-center","aria-labelledby":"not-found-title",children:[B.jsx("p",{className:"text-sm font-semibold uppercase tracking-wider text-amber-700 mb-2",children:"404"}),B.jsx("h1",{id:"not-found-title",className:"text-2xl font-bold text-gray-800 mb-3",children:r("notFound.title")}),B.jsx("p",{className:"text-gray-600 mb-6",children:r("notFound.description")}),B.jsx(gh,{to:"/",className:"inline-block pixel-button p-3 pixel-border bg-green-700 hover:bg-green-800 text-white",children:r("notFound.backToCreator")})]})})}),_2=()=>B.jsx(Fh,{children:({footerHeight:r,language:e})=>B.jsx(Ob,{locale:e,persistence:i2,previewBottomOffset:r})}),x2=()=>B.jsxs(iS,{children:[B.jsx(yu,{path:"/",element:B.jsx(_2,{})}),B.jsx(yu,{path:"/mcskinview",element:B.jsx(g2,{})}),B.jsx(yu,{path:"*",element:B.jsx(v2,{})})]}),y2="__skincrafter_spa",sh="/dev/",S2=sh.replace(/\/$/,""),E2=()=>{const e=new URL(window.location.href).searchParams.get(y2);if(!e)return;let t;try{t=new URL(e,window.location.origin)}catch{return}const o=sh.replace(/\/$/,""),s=t.pathname===o||t.pathname.startsWith(sh);t.origin!==window.location.origin||!s||window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`)};E2();iy.createRoot(document.getElementById("root")).render(B.jsx(Kv.StrictMode,{children:B.jsx(AS,{basename:S2,children:B.jsx(x2,{})})}));
