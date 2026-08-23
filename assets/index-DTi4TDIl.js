(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Mv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var hf={exports:{}},io={},pf={exports:{}},yt={};var Wm;function mx(){if(Wm)return yt;Wm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(I,re,Fe){this.props=I,this.context=re,this.refs=M,this.updater=Fe||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=y.prototype;function L(I,re,Fe){this.props=I,this.context=re,this.refs=M,this.updater=Fe||S}var P=L.prototype=new x;P.constructor=L,E(P,y.prototype),P.isPureReactComponent=!0;var C=Array.isArray,H=Object.prototype.hasOwnProperty,U={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function G(I,re,Fe){var te,ge={},Te=null,j=null;if(re!=null)for(te in re.ref!==void 0&&(j=re.ref),re.key!==void 0&&(Te=""+re.key),re)H.call(re,te)&&!F.hasOwnProperty(te)&&(ge[te]=re[te]);var ce=arguments.length-2;if(ce===1)ge.children=Fe;else if(1<ce){for(var xe=Array(ce),be=0;be<ce;be++)xe[be]=arguments[be+2];ge.children=xe}if(I&&I.defaultProps)for(te in ce=I.defaultProps,ce)ge[te]===void 0&&(ge[te]=ce[te]);return{$$typeof:i,type:I,key:Te,ref:j,props:ge,_owner:U.current}}function b(I,re){return{$$typeof:i,type:I.type,key:re,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===i}function V(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Fe){return re[Fe]})}var ae=/\/+/g;function J(I,re){return typeof I=="object"&&I!==null&&I.key!=null?V(""+I.key):re.toString(36)}function le(I,re,Fe,te,ge){var Te=typeof I;(Te==="undefined"||Te==="boolean")&&(I=null);var j=!1;if(I===null)j=!0;else switch(Te){case"string":case"number":j=!0;break;case"object":switch(I.$$typeof){case i:case e:j=!0}}if(j)return j=I,ge=ge(j),I=te===""?"."+J(j,0):te,C(ge)?(Fe="",I!=null&&(Fe=I.replace(ae,"$&/")+"/"),le(ge,re,Fe,"",function(be){return be})):ge!=null&&(R(ge)&&(ge=b(ge,Fe+(!ge.key||j&&j.key===ge.key?"":(""+ge.key).replace(ae,"$&/")+"/")+I)),re.push(ge)),1;if(j=0,te=te===""?".":te+":",C(I))for(var ce=0;ce<I.length;ce++){Te=I[ce];var xe=te+J(Te,ce);j+=le(Te,re,Fe,xe,ge)}else if(xe=_(I),typeof xe=="function")for(I=xe.call(I),ce=0;!(Te=I.next()).done;)Te=Te.value,xe=te+J(Te,ce++),j+=le(Te,re,Fe,xe,ge);else if(Te==="object")throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return j}function he(I,re,Fe){if(I==null)return I;var te=[],ge=0;return le(I,te,"","",function(Te){return re.call(Fe,Te,ge++)}),te}function ue(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(Fe){(I._status===0||I._status===-1)&&(I._status=1,I._result=Fe)},function(Fe){(I._status===0||I._status===-1)&&(I._status=2,I._result=Fe)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var me={current:null},k={transition:null},de={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:k,ReactCurrentOwner:U};function oe(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:he,forEach:function(I,re,Fe){he(I,function(){re.apply(this,arguments)},Fe)},count:function(I){var re=0;return he(I,function(){re++}),re},toArray:function(I){return he(I,function(re){return re})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},yt.Component=y,yt.Fragment=t,yt.Profiler=a,yt.PureComponent=L,yt.StrictMode=s,yt.Suspense=d,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,yt.act=oe,yt.cloneElement=function(I,re,Fe){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var te=E({},I.props),ge=I.key,Te=I.ref,j=I._owner;if(re!=null){if(re.ref!==void 0&&(Te=re.ref,j=U.current),re.key!==void 0&&(ge=""+re.key),I.type&&I.type.defaultProps)var ce=I.type.defaultProps;for(xe in re)H.call(re,xe)&&!F.hasOwnProperty(xe)&&(te[xe]=re[xe]===void 0&&ce!==void 0?ce[xe]:re[xe])}var xe=arguments.length-2;if(xe===1)te.children=Fe;else if(1<xe){ce=Array(xe);for(var be=0;be<xe;be++)ce[be]=arguments[be+2];te.children=ce}return{$$typeof:i,type:I.type,key:ge,ref:Te,props:te,_owner:j}},yt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},yt.createElement=G,yt.createFactory=function(I){var re=G.bind(null,I);return re.type=I,re},yt.createRef=function(){return{current:null}},yt.forwardRef=function(I){return{$$typeof:f,render:I}},yt.isValidElement=R,yt.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:ue}},yt.memo=function(I,re){return{$$typeof:p,type:I,compare:re===void 0?null:re}},yt.startTransition=function(I){var re=k.transition;k.transition={};try{I()}finally{k.transition=re}},yt.unstable_act=oe,yt.useCallback=function(I,re){return me.current.useCallback(I,re)},yt.useContext=function(I){return me.current.useContext(I)},yt.useDebugValue=function(){},yt.useDeferredValue=function(I){return me.current.useDeferredValue(I)},yt.useEffect=function(I,re){return me.current.useEffect(I,re)},yt.useId=function(){return me.current.useId()},yt.useImperativeHandle=function(I,re,Fe){return me.current.useImperativeHandle(I,re,Fe)},yt.useInsertionEffect=function(I,re){return me.current.useInsertionEffect(I,re)},yt.useLayoutEffect=function(I,re){return me.current.useLayoutEffect(I,re)},yt.useMemo=function(I,re){return me.current.useMemo(I,re)},yt.useReducer=function(I,re,Fe){return me.current.useReducer(I,re,Fe)},yt.useRef=function(I){return me.current.useRef(I)},yt.useState=function(I){return me.current.useState(I)},yt.useSyncExternalStore=function(I,re,Fe){return me.current.useSyncExternalStore(I,re,Fe)},yt.useTransition=function(){return me.current.useTransition()},yt.version="18.3.1",yt}var Xm;function jd(){return Xm||(Xm=1,pf.exports=mx()),pf.exports}var jm;function gx(){if(jm)return io;jm=1;var i=jd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,p){var m,v={},_=null,S=null;p!==void 0&&(_=""+p),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)s.call(d,m)&&!l.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:_,ref:S,props:v,_owner:a.current}}return io.Fragment=t,io.jsx=c,io.jsxs=c,io}var $m;function vx(){return $m||($m=1,hf.exports=gx()),hf.exports}var $=vx(),z=jd();const wv=Mv(z);var Il={},mf={exports:{}},jn={},gf={exports:{}},vf={};var Ym;function _x(){return Ym||(Ym=1,(function(i){function e(k,de){var oe=k.length;k.push(de);e:for(;0<oe;){var I=oe-1>>>1,re=k[I];if(0<a(re,de))k[I]=de,k[oe]=re,oe=I;else break e}}function t(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var de=k[0],oe=k.pop();if(oe!==de){k[0]=oe;e:for(var I=0,re=k.length,Fe=re>>>1;I<Fe;){var te=2*(I+1)-1,ge=k[te],Te=te+1,j=k[Te];if(0>a(ge,oe))Te<re&&0>a(j,ge)?(k[I]=j,k[Te]=oe,I=Te):(k[I]=ge,k[te]=oe,I=te);else if(Te<re&&0>a(j,oe))k[I]=j,k[Te]=oe,I=Te;else break e}}return de}function a(k,de){var oe=k.sortIndex-de.sortIndex;return oe!==0?oe:k.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var d=[],p=[],m=1,v=null,_=3,S=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(k){for(var de=t(p);de!==null;){if(de.callback===null)s(p);else if(de.startTime<=k)s(p),de.sortIndex=de.expirationTime,e(d,de);else break;de=t(p)}}function C(k){if(M=!1,P(k),!E)if(t(d)!==null)E=!0,ue(H);else{var de=t(p);de!==null&&me(C,de.startTime-k)}}function H(k,de){E=!1,M&&(M=!1,x(G),G=-1),S=!0;var oe=_;try{for(P(de),v=t(d);v!==null&&(!(v.expirationTime>de)||k&&!V());){var I=v.callback;if(typeof I=="function"){v.callback=null,_=v.priorityLevel;var re=I(v.expirationTime<=de);de=i.unstable_now(),typeof re=="function"?v.callback=re:v===t(d)&&s(d),P(de)}else s(d);v=t(d)}if(v!==null)var Fe=!0;else{var te=t(p);te!==null&&me(C,te.startTime-de),Fe=!1}return Fe}finally{v=null,_=oe,S=!1}}var U=!1,F=null,G=-1,b=5,R=-1;function V(){return!(i.unstable_now()-R<b)}function ae(){if(F!==null){var k=i.unstable_now();R=k;var de=!0;try{de=F(!0,k)}finally{de?J():(U=!1,F=null)}}else U=!1}var J;if(typeof L=="function")J=function(){L(ae)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,he=le.port2;le.port1.onmessage=ae,J=function(){he.postMessage(null)}}else J=function(){y(ae,0)};function ue(k){F=k,U||(U=!0,J())}function me(k,de){G=y(function(){k(i.unstable_now())},de)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(k){k.callback=null},i.unstable_continueExecution=function(){E||S||(E=!0,ue(H))},i.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(k){switch(_){case 1:case 2:case 3:var de=3;break;default:de=_}var oe=_;_=de;try{return k()}finally{_=oe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(k,de){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var oe=_;_=k;try{return de()}finally{_=oe}},i.unstable_scheduleCallback=function(k,de,oe){var I=i.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?I+oe:I):oe=I,k){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=oe+re,k={id:m++,callback:de,priorityLevel:k,startTime:oe,expirationTime:re,sortIndex:-1},oe>I?(k.sortIndex=oe,e(p,k),t(d)===null&&k===t(p)&&(M?(x(G),G=-1):M=!0,me(C,oe-I))):(k.sortIndex=re,e(d,k),E||S||(E=!0,ue(H))),k},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(k){var de=_;return function(){var oe=_;_=de;try{return k.apply(this,arguments)}finally{_=oe}}}})(vf)),vf}var qm;function xx(){return qm||(qm=1,gf.exports=_x()),gf.exports}var Km;function yx(){if(Km)return jn;Km=1;var i=jd(),e=xx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function _(n){return d.call(v,n)?!0:d.call(m,n)?!1:p.test(n)?v[n]=!0:(m[n]=!0,!1)}function S(n,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,o,u){if(r===null||typeof r>"u"||S(n,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,o,u,h,g,w){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,L);y[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,L);y[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,L);y[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,o,u){var h=y.hasOwnProperty(r)?y[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,o,h,u)&&(o=null),u||h===null?_(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,r,o):n.setAttribute(r,o))))}var C=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),U=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),V=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),k=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,I;function re(n){if(I===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+n}var Fe=!1;function te(n,r){if(!n||Fe)return"";Fe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ie){var u=ie}Reflect.construct(n,[],r)}else{try{r.call()}catch(ie){u=ie}n.call(r.prototype)}else{try{throw Error()}catch(ie){u=ie}n()}}catch(ie){if(ie&&u&&typeof ie.stack=="string"){for(var h=ie.stack.split(`
`),g=u.stack.split(`
`),w=h.length-1,N=g.length-1;1<=w&&0<=N&&h[w]!==g[N];)N--;for(;1<=w&&0<=N;w--,N--)if(h[w]!==g[N]){if(w!==1||N!==1)do if(w--,N--,0>N||h[w]!==g[N]){var B=`
`+h[w].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=w&&0<=N);break}}}finally{Fe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?re(n):""}function ge(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=te(n.type,!1),n;case 11:return n=te(n.type.render,!1),n;case 1:return n=te(n.type,!0),n;default:return""}}function Te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case U:return"Portal";case b:return"Profiler";case G:return"StrictMode";case J:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case ae:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return r=n.displayName||null,r!==null?r:Te(n.type)||"Memo";case ue:r=n._payload,n=n._init;try{return Te(n(r))}catch{}}return null}function j(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(r);case 8:return r===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function xe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function be(n){var r=xe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(w){u=""+w,g.call(this,w)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function nt(n){n._valueTracker||(n._valueTracker=be(n))}function st(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=xe(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Ke(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function O(n,r){var o=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function qt(n,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=ce(r.value!=null?r.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function gt(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function Mt(n,r){gt(n,r);var o=ce(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?vt(n,r.type,o):r.hasOwnProperty("defaultValue")&&vt(n,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function $e(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function vt(n,r,o){(r!=="number"||Ke(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ze=Array.isArray;function lt(n,r,o,u){if(n=n.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=r.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+ce(o),r=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function Pt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(Ze(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:ce(o)}}function T(n,r){var o=ce(r.value),u=ce(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Q(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ye(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fe,je=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(r,o,u,h)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Pe(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(n){Ye.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Be[r]=Be[n]})});function Se(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Be.hasOwnProperty(n)&&Be[n]?(""+r).trim():r+"px"}function Oe(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=Se(o,r[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var it=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(n,r){if(r){if(it[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Le(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var et=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var De=null,ve=null,Ie=null;function we(n){if(n=Va(n)){if(typeof De!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ko(r),De(n.stateNode,n.type,r))}}function _e(n){ve?Ie?Ie.push(n):Ie=[n]:ve=n}function ze(){if(ve){var n=ve,r=Ie;if(Ie=ve=null,we(n),r)for(n=0;n<r.length;n++)we(r[n])}}function ut(n,r){return n(r)}function Ct(){}var St=!1;function on(n,r,o){if(St)return n(r,o);St=!0;try{return ut(n,r,o)}finally{St=!1,(ve!==null||Ie!==null)&&(Ct(),ze())}}function gn(n,r){var o=n.stateNode;if(o===null)return null;var u=Ko(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var pr=!1;if(f)try{var di={};Object.defineProperty(di,"passive",{get:function(){pr=!0}}),window.addEventListener("test",di,di),window.removeEventListener("test",di,di)}catch{pr=!1}function hi(n,r,o,u,h,g,w,N,B){var ie=Array.prototype.slice.call(arguments,3);try{r.apply(o,ie)}catch(Me){this.onError(Me)}}var pi=!1,rt=null,It=!1,ln=null,Jt={onError:function(n){pi=!0,rt=n}};function Sn(n,r,o,u,h,g,w,N,B){pi=!1,rt=null,hi.apply(Jt,arguments)}function En(n,r,o,u,h,g,w,N,B){if(Sn.apply(this,arguments),pi){if(pi){var ie=rt;pi=!1,rt=null}else throw Error(t(198));It||(It=!0,ln=ie)}}function Qt(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function zn(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function mr(n){if(Qt(n)!==n)throw Error(t(188))}function Iu(n){var r=n.alternate;if(!r){if(r=Qt(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,u=r;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return mr(h),n;if(g===u)return mr(h),r;g=g.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=g;else{for(var w=!1,N=h.child;N;){if(N===o){w=!0,o=h,u=g;break}if(N===u){w=!0,u=h,o=g;break}N=N.sibling}if(!w){for(N=g.child;N;){if(N===o){w=!0,o=g,u=h;break}if(N===u){w=!0,u=g,o=h;break}N=N.sibling}if(!w)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function Do(n){return n=Iu(n),n!==null?No(n):null}function No(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=No(n);if(r!==null)return r;n=n.sibling}return null}var Uo=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,Y=e.unstable_shouldYield,se=e.unstable_requestPaint,Z=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Ae=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,Ve=e.unstable_NormalPriority,He=e.unstable_LowPriority,ft=e.unstable_IdlePriority,ct=null,We=null;function _t(n){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Lt,Ht=Math.log,Ft=Math.LN2;function Lt(n){return n>>>=0,n===0?32:31-(Ht(n)/Ft|0)|0}var tt=64,Nt=4194304;function xt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function un(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,w=o&268435455;if(w!==0){var N=w&~h;N!==0?u=xt(N):(g&=w,g!==0&&(u=xt(g)))}else w=o&~h,w!==0?u=xt(w):g!==0&&(u=xt(g));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,g=r&-r,h>=g||h===16&&(g&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)o=31-pt(r),h=1<<o,u|=n[o],r&=~h;return u}function gr(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ln(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-pt(g),N=1<<w,B=h[w];B===-1?((N&o)===0||(N&u)!==0)&&(h[w]=gr(N,r)):B<=r&&(n.expiredLanes|=N),g&=~N}}function Wi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ot(){var n=tt;return tt<<=1,(tt&4194240)===0&&(tt=64),n}function Mn(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function cn(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-pt(r),n[r]=o}function vn(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-pt(o),g=1<<h;r[h]=0,u[h]=-1,n[h]=-1,o&=~g}}function fn(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-pt(o),h=1<<u;h&r|n[u]&r&&(n[u]|=r),o&=~h}}var wt=0;function Ci(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Mh,Fu,wh,Th,Rh,Ou=!1,Io=[],vr=null,_r=null,xr=null,Ra=new Map,Aa=new Map,yr=[],O_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ah(n,r){switch(n){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Ra.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(r.pointerId)}}function Ca(n,r,o,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},r!==null&&(r=Va(r),r!==null&&Fu(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function k_(n,r,o,u,h){switch(r){case"focusin":return vr=Ca(vr,n,r,o,u,h),!0;case"dragenter":return _r=Ca(_r,n,r,o,u,h),!0;case"mouseover":return xr=Ca(xr,n,r,o,u,h),!0;case"pointerover":var g=h.pointerId;return Ra.set(g,Ca(Ra.get(g)||null,n,r,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,Aa.set(g,Ca(Aa.get(g)||null,n,r,o,u,h)),!0}return!1}function Ch(n){var r=Kr(n.target);if(r!==null){var o=Qt(r);if(o!==null){if(r=o.tag,r===13){if(r=zn(o),r!==null){n.blockedOn=r,Rh(n.priority,function(){wh(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Fo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Bu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);et=u,o.target.dispatchEvent(u),et=null}else return r=Va(o),r!==null&&Fu(r),n.blockedOn=o,!1;r.shift()}return!0}function bh(n,r,o){Fo(n)&&o.delete(r)}function B_(){Ou=!1,vr!==null&&Fo(vr)&&(vr=null),_r!==null&&Fo(_r)&&(_r=null),xr!==null&&Fo(xr)&&(xr=null),Ra.forEach(bh),Aa.forEach(bh)}function ba(n,r){n.blockedOn===r&&(n.blockedOn=null,Ou||(Ou=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,B_)))}function Pa(n){function r(h){return ba(h,n)}if(0<Io.length){ba(Io[0],n);for(var o=1;o<Io.length;o++){var u=Io[o];u.blockedOn===n&&(u.blockedOn=null)}}for(vr!==null&&ba(vr,n),_r!==null&&ba(_r,n),xr!==null&&ba(xr,n),Ra.forEach(r),Aa.forEach(r),o=0;o<yr.length;o++)u=yr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<yr.length&&(o=yr[0],o.blockedOn===null);)Ch(o),o.blockedOn===null&&yr.shift()}var Ms=C.ReactCurrentBatchConfig,Oo=!0;function z_(n,r,o,u){var h=wt,g=Ms.transition;Ms.transition=null;try{wt=1,ku(n,r,o,u)}finally{wt=h,Ms.transition=g}}function H_(n,r,o,u){var h=wt,g=Ms.transition;Ms.transition=null;try{wt=4,ku(n,r,o,u)}finally{wt=h,Ms.transition=g}}function ku(n,r,o,u){if(Oo){var h=Bu(n,r,o,u);if(h===null)nc(n,r,u,ko,o),Ah(n,u);else if(k_(h,n,r,o,u))u.stopPropagation();else if(Ah(n,u),r&4&&-1<O_.indexOf(n)){for(;h!==null;){var g=Va(h);if(g!==null&&Mh(g),g=Bu(n,r,o,u),g===null&&nc(n,r,u,ko,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else nc(n,r,u,null,o)}}var ko=null;function Bu(n,r,o,u){if(ko=null,n=W(u),n=Kr(n),n!==null)if(r=Qt(n),r===null)n=null;else if(o=r.tag,o===13){if(n=zn(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ko=n,null}function Ph(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Ae:return 1;case Ne:return 4;case Ve:case He:return 16;case ft:return 536870912;default:return 16}default:return 16}}var Sr=null,zu=null,Bo=null;function Lh(){if(Bo)return Bo;var n,r=zu,o=r.length,u,h="value"in Sr?Sr.value:Sr.textContent,g=h.length;for(n=0;n<o&&r[n]===h[n];n++);var w=o-n;for(u=1;u<=w&&r[o-u]===h[g-u];u++);return Bo=h.slice(n,1<u?1-u:void 0)}function zo(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ho(){return!0}function Dh(){return!1}function qn(n){function r(o,u,h,g,w){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(g):g[N]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ho:Dh,this.isPropagationStopped=Dh,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),r}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=qn(ws),La=oe({},ws,{view:0,detail:0}),V_=qn(La),Vu,Gu,Da,Vo=oe({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Da&&(Da&&n.type==="mousemove"?(Vu=n.screenX-Da.screenX,Gu=n.screenY-Da.screenY):Gu=Vu=0,Da=n),Vu)},movementY:function(n){return"movementY"in n?n.movementY:Gu}}),Nh=qn(Vo),G_=oe({},Vo,{dataTransfer:0}),W_=qn(G_),X_=oe({},La,{relatedTarget:0}),Wu=qn(X_),j_=oe({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),$_=qn(j_),Y_=oe({},ws,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),q_=qn(Y_),K_=oe({},ws,{data:0}),Uh=qn(K_),Z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e0(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Q_[n])?!!r[n]:!1}function Xu(){return e0}var t0=oe({},La,{key:function(n){if(n.key){var r=Z_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=zo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?J_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(n){return n.type==="keypress"?zo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),n0=qn(t0),i0=oe({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ih=qn(i0),r0=oe({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),s0=qn(r0),a0=oe({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),o0=qn(a0),l0=oe({},Vo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),u0=qn(l0),c0=[9,13,27,32],ju=f&&"CompositionEvent"in window,Na=null;f&&"documentMode"in document&&(Na=document.documentMode);var f0=f&&"TextEvent"in window&&!Na,Fh=f&&(!ju||Na&&8<Na&&11>=Na),Oh=" ",kh=!1;function Bh(n,r){switch(n){case"keyup":return c0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ts=!1;function d0(n,r){switch(n){case"compositionend":return zh(r);case"keypress":return r.which!==32?null:(kh=!0,Oh);case"textInput":return n=r.data,n===Oh&&kh?null:n;default:return null}}function h0(n,r){if(Ts)return n==="compositionend"||!ju&&Bh(n,r)?(n=Lh(),Bo=zu=Sr=null,Ts=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fh&&r.locale!=="ko"?null:r.data;default:return null}}var p0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!p0[n.type]:r==="textarea"}function Vh(n,r,o,u){_e(u),r=$o(r,"onChange"),0<r.length&&(o=new Hu("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Ua=null,Ia=null;function m0(n){ap(n,0)}function Go(n){var r=Ps(n);if(st(r))return n}function g0(n,r){if(n==="change")return r}var Gh=!1;if(f){var $u;if(f){var Yu="oninput"in document;if(!Yu){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),Yu=typeof Wh.oninput=="function"}$u=Yu}else $u=!1;Gh=$u&&(!document.documentMode||9<document.documentMode)}function Xh(){Ua&&(Ua.detachEvent("onpropertychange",jh),Ia=Ua=null)}function jh(n){if(n.propertyName==="value"&&Go(Ia)){var r=[];Vh(r,Ia,n,W(n)),on(m0,r)}}function v0(n,r,o){n==="focusin"?(Xh(),Ua=r,Ia=o,Ua.attachEvent("onpropertychange",jh)):n==="focusout"&&Xh()}function _0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Go(Ia)}function x0(n,r){if(n==="click")return Go(r)}function y0(n,r){if(n==="input"||n==="change")return Go(r)}function S0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var mi=typeof Object.is=="function"?Object.is:S0;function Fa(n,r){if(mi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!d.call(r,h)||!mi(n[h],r[h]))return!1}return!0}function $h(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Yh(n,r){var o=$h(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=$h(o)}}function qh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?qh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Kh(){for(var n=window,r=Ke();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Ke(n.document)}return r}function qu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function E0(n){var r=Kh(),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&qh(o.ownerDocument.documentElement,o)){if(u!==null&&qu(o)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=Yh(o,g);var w=Yh(o,u);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(r),n.extend(w.node,w.offset)):(r.setEnd(w.node,w.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var M0=f&&"documentMode"in document&&11>=document.documentMode,Rs=null,Ku=null,Oa=null,Zu=!1;function Zh(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Zu||Rs==null||Rs!==Ke(u)||(u=Rs,"selectionStart"in u&&qu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Oa&&Fa(Oa,u)||(Oa=u,u=$o(Ku,"onSelect"),0<u.length&&(r=new Hu("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=Rs)))}function Wo(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var As={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},Ju={},Jh={};f&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Xo(n){if(Ju[n])return Ju[n];if(!As[n])return n;var r=As[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Jh)return Ju[n]=r[o];return n}var Qh=Xo("animationend"),ep=Xo("animationiteration"),tp=Xo("animationstart"),np=Xo("transitionend"),ip=new Map,rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(n,r){ip.set(n,r),l(r,[n])}for(var Qu=0;Qu<rp.length;Qu++){var ec=rp[Qu],w0=ec.toLowerCase(),T0=ec[0].toUpperCase()+ec.slice(1);Er(w0,"on"+T0)}Er(Qh,"onAnimationEnd"),Er(ep,"onAnimationIteration"),Er(tp,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(np,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ka));function sp(n,r,o){var u=n.type||"unknown-event";n.currentTarget=o,En(u,r,void 0,n),n.currentTarget=null}function ap(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var w=u.length-1;0<=w;w--){var N=u[w],B=N.instance,ie=N.currentTarget;if(N=N.listener,B!==g&&h.isPropagationStopped())break e;sp(h,N,ie),g=B}else for(w=0;w<u.length;w++){if(N=u[w],B=N.instance,ie=N.currentTarget,N=N.listener,B!==g&&h.isPropagationStopped())break e;sp(h,N,ie),g=B}}}if(It)throw n=ln,It=!1,ln=null,n}function Bt(n,r){var o=r[lc];o===void 0&&(o=r[lc]=new Set);var u=n+"__bubble";o.has(u)||(op(r,n,2,!1),o.add(u))}function tc(n,r,o){var u=0;r&&(u|=4),op(o,n,u,r)}var jo="_reactListening"+Math.random().toString(36).slice(2);function Ba(n){if(!n[jo]){n[jo]=!0,s.forEach(function(o){o!=="selectionchange"&&(R0.has(o)||tc(o,!1,n),tc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[jo]||(r[jo]=!0,tc("selectionchange",!1,r))}}function op(n,r,o,u){switch(Ph(r)){case 1:var h=z_;break;case 4:h=H_;break;default:h=ku}o=h.bind(null,r,o,n),h=void 0,!pr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(r,o,{capture:!0,passive:h}):n.addEventListener(r,o,!0):h!==void 0?n.addEventListener(r,o,{passive:h}):n.addEventListener(r,o,!1)}function nc(n,r,o,u,h){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var N=u.stateNode.containerInfo;if(N===h||N.nodeType===8&&N.parentNode===h)break;if(w===4)for(w=u.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===h||B.nodeType===8&&B.parentNode===h))return;w=w.return}for(;N!==null;){if(w=Kr(N),w===null)return;if(B=w.tag,B===5||B===6){u=g=w;continue e}N=N.parentNode}}u=u.return}on(function(){var ie=g,Me=W(o),Re=[];e:{var Ee=ip.get(n);if(Ee!==void 0){var ke=Hu,Xe=n;switch(n){case"keypress":if(zo(o)===0)break e;case"keydown":case"keyup":ke=n0;break;case"focusin":Xe="focus",ke=Wu;break;case"focusout":Xe="blur",ke=Wu;break;case"beforeblur":case"afterblur":ke=Wu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=W_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=s0;break;case Qh:case ep:case tp:ke=$_;break;case np:ke=o0;break;case"scroll":ke=V_;break;case"wheel":ke=u0;break;case"copy":case"cut":case"paste":ke=q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Ih}var qe=(r&4)!==0,Kt=!qe&&n==="scroll",K=qe?Ee!==null?Ee+"Capture":null:Ee;qe=[];for(var X=ie,ee;X!==null;){ee=X;var Ce=ee.stateNode;if(ee.tag===5&&Ce!==null&&(ee=Ce,K!==null&&(Ce=gn(X,K),Ce!=null&&qe.push(za(X,Ce,ee)))),Kt)break;X=X.return}0<qe.length&&(Ee=new ke(Ee,Xe,null,o,Me),Re.push({event:Ee,listeners:qe}))}}if((r&7)===0){e:{if(Ee=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",Ee&&o!==et&&(Xe=o.relatedTarget||o.fromElement)&&(Kr(Xe)||Xe[Xi]))break e;if((ke||Ee)&&(Ee=Me.window===Me?Me:(Ee=Me.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,ke?(Xe=o.relatedTarget||o.toElement,ke=ie,Xe=Xe?Kr(Xe):null,Xe!==null&&(Kt=Qt(Xe),Xe!==Kt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ke=null,Xe=ie),ke!==Xe)){if(qe=Nh,Ce="onMouseLeave",K="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(qe=Ih,Ce="onPointerLeave",K="onPointerEnter",X="pointer"),Kt=ke==null?Ee:Ps(ke),ee=Xe==null?Ee:Ps(Xe),Ee=new qe(Ce,X+"leave",ke,o,Me),Ee.target=Kt,Ee.relatedTarget=ee,Ce=null,Kr(Me)===ie&&(qe=new qe(K,X+"enter",Xe,o,Me),qe.target=ee,qe.relatedTarget=Kt,Ce=qe),Kt=Ce,ke&&Xe)t:{for(qe=ke,K=Xe,X=0,ee=qe;ee;ee=Cs(ee))X++;for(ee=0,Ce=K;Ce;Ce=Cs(Ce))ee++;for(;0<X-ee;)qe=Cs(qe),X--;for(;0<ee-X;)K=Cs(K),ee--;for(;X--;){if(qe===K||K!==null&&qe===K.alternate)break t;qe=Cs(qe),K=Cs(K)}qe=null}else qe=null;ke!==null&&lp(Re,Ee,ke,qe,!1),Xe!==null&&Kt!==null&&lp(Re,Kt,Xe,qe,!0)}}e:{if(Ee=ie?Ps(ie):window,ke=Ee.nodeName&&Ee.nodeName.toLowerCase(),ke==="select"||ke==="input"&&Ee.type==="file")var Je=g0;else if(Hh(Ee))if(Gh)Je=y0;else{Je=_0;var at=v0}else(ke=Ee.nodeName)&&ke.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(Je=x0);if(Je&&(Je=Je(n,ie))){Vh(Re,Je,o,Me);break e}at&&at(n,Ee,ie),n==="focusout"&&(at=Ee._wrapperState)&&at.controlled&&Ee.type==="number"&&vt(Ee,"number",Ee.value)}switch(at=ie?Ps(ie):window,n){case"focusin":(Hh(at)||at.contentEditable==="true")&&(Rs=at,Ku=ie,Oa=null);break;case"focusout":Oa=Ku=Rs=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,Zh(Re,o,Me);break;case"selectionchange":if(M0)break;case"keydown":case"keyup":Zh(Re,o,Me)}var ot;if(ju)e:{switch(n){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else Ts?Bh(n,o)&&(dt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(dt="onCompositionStart");dt&&(Fh&&o.locale!=="ko"&&(Ts||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&Ts&&(ot=Lh()):(Sr=Me,zu="value"in Sr?Sr.value:Sr.textContent,Ts=!0)),at=$o(ie,dt),0<at.length&&(dt=new Uh(dt,n,null,o,Me),Re.push({event:dt,listeners:at}),ot?dt.data=ot:(ot=zh(o),ot!==null&&(dt.data=ot)))),(ot=f0?d0(n,o):h0(n,o))&&(ie=$o(ie,"onBeforeInput"),0<ie.length&&(Me=new Uh("onBeforeInput","beforeinput",null,o,Me),Re.push({event:Me,listeners:ie}),Me.data=ot))}ap(Re,r)})}function za(n,r,o){return{instance:n,listener:r,currentTarget:o}}function $o(n,r){for(var o=r+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=gn(n,o),g!=null&&u.unshift(za(n,g,h)),g=gn(n,r),g!=null&&u.push(za(n,g,h))),n=n.return}return u}function Cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lp(n,r,o,u,h){for(var g=r._reactName,w=[];o!==null&&o!==u;){var N=o,B=N.alternate,ie=N.stateNode;if(B!==null&&B===u)break;N.tag===5&&ie!==null&&(N=ie,h?(B=gn(o,g),B!=null&&w.unshift(za(o,B,N))):h||(B=gn(o,g),B!=null&&w.push(za(o,B,N)))),o=o.return}w.length!==0&&n.push({event:r,listeners:w})}var A0=/\r\n?/g,C0=/\u0000|\uFFFD/g;function up(n){return(typeof n=="string"?n:""+n).replace(A0,`
`).replace(C0,"")}function Yo(n,r,o){if(r=up(r),up(n)!==r&&o)throw Error(t(425))}function qo(){}var ic=null,rc=null;function sc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ac=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,P0=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(n){return cp.resolve(null).then(n).catch(L0)}:ac;function L0(n){setTimeout(function(){throw n})}function oc(n,r){var o=r,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),Pa(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);Pa(r)}function Mr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function fp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var bs=Math.random().toString(36).slice(2),bi="__reactFiber$"+bs,Ha="__reactProps$"+bs,Xi="__reactContainer$"+bs,lc="__reactEvents$"+bs,D0="__reactListeners$"+bs,N0="__reactHandles$"+bs;function Kr(n){var r=n[bi];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Xi]||o[bi]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=fp(n);n!==null;){if(o=n[bi])return o;n=fp(n)}return r}n=o,o=n.parentNode}return null}function Va(n){return n=n[bi]||n[Xi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ko(n){return n[Ha]||null}var uc=[],Ls=-1;function wr(n){return{current:n}}function zt(n){0>Ls||(n.current=uc[Ls],uc[Ls]=null,Ls--)}function kt(n,r){Ls++,uc[Ls]=n.current,n.current=r}var Tr={},wn=wr(Tr),Hn=wr(!1),Zr=Tr;function Ds(n,r){var o=n.type.contextTypes;if(!o)return Tr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=r[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function Vn(n){return n=n.childContextTypes,n!=null}function Zo(){zt(Hn),zt(wn)}function dp(n,r,o){if(wn.current!==Tr)throw Error(t(168));kt(wn,r),kt(Hn,o)}function hp(n,r,o){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(t(108,j(n)||"Unknown",h));return oe({},o,u)}function Jo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Tr,Zr=wn.current,kt(wn,n),kt(Hn,Hn.current),!0}function pp(n,r,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=hp(n,r,Zr),u.__reactInternalMemoizedMergedChildContext=n,zt(Hn),zt(wn),kt(wn,n)):zt(Hn),kt(Hn,o)}var ji=null,Qo=!1,cc=!1;function mp(n){ji===null?ji=[n]:ji.push(n)}function U0(n){Qo=!0,mp(n)}function Rr(){if(!cc&&ji!==null){cc=!0;var n=0,r=wt;try{var o=ji;for(wt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}ji=null,Qo=!1}catch(h){throw ji!==null&&(ji=ji.slice(n+1)),Uo(Ae,Rr),h}finally{wt=r,cc=!1}}return null}var Ns=[],Us=0,el=null,tl=0,ti=[],ni=0,Jr=null,$i=1,Yi="";function Qr(n,r){Ns[Us++]=tl,Ns[Us++]=el,el=n,tl=r}function gp(n,r,o){ti[ni++]=$i,ti[ni++]=Yi,ti[ni++]=Jr,Jr=n;var u=$i;n=Yi;var h=32-pt(u)-1;u&=~(1<<h),o+=1;var g=32-pt(r)+h;if(30<g){var w=h-h%5;g=(u&(1<<w)-1).toString(32),u>>=w,h-=w,$i=1<<32-pt(r)+h|o<<h|u,Yi=g+n}else $i=1<<g|o<<h|u,Yi=n}function fc(n){n.return!==null&&(Qr(n,1),gp(n,1,0))}function dc(n){for(;n===el;)el=Ns[--Us],Ns[Us]=null,tl=Ns[--Us],Ns[Us]=null;for(;n===Jr;)Jr=ti[--ni],ti[ni]=null,Yi=ti[--ni],ti[ni]=null,$i=ti[--ni],ti[ni]=null}var Kn=null,Zn=null,Vt=!1,gi=null;function vp(n,r){var o=ai(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function _p(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Kn=n,Zn=Mr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Kn=n,Zn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Jr!==null?{id:$i,overflow:Yi}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=ai(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,Kn=n,Zn=null,!0):!1;default:return!1}}function hc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function pc(n){if(Vt){var r=Zn;if(r){var o=r;if(!_p(n,r)){if(hc(n))throw Error(t(418));r=Mr(o.nextSibling);var u=Kn;r&&_p(n,r)?vp(u,o):(n.flags=n.flags&-4097|2,Vt=!1,Kn=n)}}else{if(hc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,Kn=n}}}function xp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kn=n}function nl(n){if(n!==Kn)return!1;if(!Vt)return xp(n),Vt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!sc(n.type,n.memoizedProps)),r&&(r=Zn)){if(hc(n))throw yp(),Error(t(418));for(;r;)vp(n,r),r=Mr(r.nextSibling)}if(xp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){Zn=Mr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}Zn=null}}else Zn=Kn?Mr(n.stateNode.nextSibling):null;return!0}function yp(){for(var n=Zn;n;)n=Mr(n.nextSibling)}function Is(){Zn=Kn=null,Vt=!1}function mc(n){gi===null?gi=[n]:gi.push(n)}var I0=C.ReactCurrentBatchConfig;function Ga(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(w){var N=h.refs;w===null?delete N[g]:N[g]=w},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function il(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Sp(n){var r=n._init;return r(n._payload)}function Ep(n){function r(K,X){if(n){var ee=K.deletions;ee===null?(K.deletions=[X],K.flags|=16):ee.push(X)}}function o(K,X){if(!n)return null;for(;X!==null;)r(K,X),X=X.sibling;return null}function u(K,X){for(K=new Map;X!==null;)X.key!==null?K.set(X.key,X):K.set(X.index,X),X=X.sibling;return K}function h(K,X){return K=Ur(K,X),K.index=0,K.sibling=null,K}function g(K,X,ee){return K.index=ee,n?(ee=K.alternate,ee!==null?(ee=ee.index,ee<X?(K.flags|=2,X):ee):(K.flags|=2,X)):(K.flags|=1048576,X)}function w(K){return n&&K.alternate===null&&(K.flags|=2),K}function N(K,X,ee,Ce){return X===null||X.tag!==6?(X=of(ee,K.mode,Ce),X.return=K,X):(X=h(X,ee),X.return=K,X)}function B(K,X,ee,Ce){var Je=ee.type;return Je===F?Me(K,X,ee.props.children,Ce,ee.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ue&&Sp(Je)===X.type)?(Ce=h(X,ee.props),Ce.ref=Ga(K,X,ee),Ce.return=K,Ce):(Ce=Al(ee.type,ee.key,ee.props,null,K.mode,Ce),Ce.ref=Ga(K,X,ee),Ce.return=K,Ce)}function ie(K,X,ee,Ce){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=lf(ee,K.mode,Ce),X.return=K,X):(X=h(X,ee.children||[]),X.return=K,X)}function Me(K,X,ee,Ce,Je){return X===null||X.tag!==7?(X=os(ee,K.mode,Ce,Je),X.return=K,X):(X=h(X,ee),X.return=K,X)}function Re(K,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number")return X=of(""+X,K.mode,ee),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case H:return ee=Al(X.type,X.key,X.props,null,K.mode,ee),ee.ref=Ga(K,null,X),ee.return=K,ee;case U:return X=lf(X,K.mode,ee),X.return=K,X;case ue:var Ce=X._init;return Re(K,Ce(X._payload),ee)}if(Ze(X)||de(X))return X=os(X,K.mode,ee,null),X.return=K,X;il(K,X)}return null}function Ee(K,X,ee,Ce){var Je=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Je!==null?null:N(K,X,""+ee,Ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case H:return ee.key===Je?B(K,X,ee,Ce):null;case U:return ee.key===Je?ie(K,X,ee,Ce):null;case ue:return Je=ee._init,Ee(K,X,Je(ee._payload),Ce)}if(Ze(ee)||de(ee))return Je!==null?null:Me(K,X,ee,Ce,null);il(K,ee)}return null}function ke(K,X,ee,Ce,Je){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return K=K.get(ee)||null,N(X,K,""+Ce,Je);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case H:return K=K.get(Ce.key===null?ee:Ce.key)||null,B(X,K,Ce,Je);case U:return K=K.get(Ce.key===null?ee:Ce.key)||null,ie(X,K,Ce,Je);case ue:var at=Ce._init;return ke(K,X,ee,at(Ce._payload),Je)}if(Ze(Ce)||de(Ce))return K=K.get(ee)||null,Me(X,K,Ce,Je,null);il(X,Ce)}return null}function Xe(K,X,ee,Ce){for(var Je=null,at=null,ot=X,dt=X=0,pn=null;ot!==null&&dt<ee.length;dt++){ot.index>dt?(pn=ot,ot=null):pn=ot.sibling;var Rt=Ee(K,ot,ee[dt],Ce);if(Rt===null){ot===null&&(ot=pn);break}n&&ot&&Rt.alternate===null&&r(K,ot),X=g(Rt,X,dt),at===null?Je=Rt:at.sibling=Rt,at=Rt,ot=pn}if(dt===ee.length)return o(K,ot),Vt&&Qr(K,dt),Je;if(ot===null){for(;dt<ee.length;dt++)ot=Re(K,ee[dt],Ce),ot!==null&&(X=g(ot,X,dt),at===null?Je=ot:at.sibling=ot,at=ot);return Vt&&Qr(K,dt),Je}for(ot=u(K,ot);dt<ee.length;dt++)pn=ke(ot,K,dt,ee[dt],Ce),pn!==null&&(n&&pn.alternate!==null&&ot.delete(pn.key===null?dt:pn.key),X=g(pn,X,dt),at===null?Je=pn:at.sibling=pn,at=pn);return n&&ot.forEach(function(Ir){return r(K,Ir)}),Vt&&Qr(K,dt),Je}function qe(K,X,ee,Ce){var Je=de(ee);if(typeof Je!="function")throw Error(t(150));if(ee=Je.call(ee),ee==null)throw Error(t(151));for(var at=Je=null,ot=X,dt=X=0,pn=null,Rt=ee.next();ot!==null&&!Rt.done;dt++,Rt=ee.next()){ot.index>dt?(pn=ot,ot=null):pn=ot.sibling;var Ir=Ee(K,ot,Rt.value,Ce);if(Ir===null){ot===null&&(ot=pn);break}n&&ot&&Ir.alternate===null&&r(K,ot),X=g(Ir,X,dt),at===null?Je=Ir:at.sibling=Ir,at=Ir,ot=pn}if(Rt.done)return o(K,ot),Vt&&Qr(K,dt),Je;if(ot===null){for(;!Rt.done;dt++,Rt=ee.next())Rt=Re(K,Rt.value,Ce),Rt!==null&&(X=g(Rt,X,dt),at===null?Je=Rt:at.sibling=Rt,at=Rt);return Vt&&Qr(K,dt),Je}for(ot=u(K,ot);!Rt.done;dt++,Rt=ee.next())Rt=ke(ot,K,dt,Rt.value,Ce),Rt!==null&&(n&&Rt.alternate!==null&&ot.delete(Rt.key===null?dt:Rt.key),X=g(Rt,X,dt),at===null?Je=Rt:at.sibling=Rt,at=Rt);return n&&ot.forEach(function(px){return r(K,px)}),Vt&&Qr(K,dt),Je}function Kt(K,X,ee,Ce){if(typeof ee=="object"&&ee!==null&&ee.type===F&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case H:e:{for(var Je=ee.key,at=X;at!==null;){if(at.key===Je){if(Je=ee.type,Je===F){if(at.tag===7){o(K,at.sibling),X=h(at,ee.props.children),X.return=K,K=X;break e}}else if(at.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ue&&Sp(Je)===at.type){o(K,at.sibling),X=h(at,ee.props),X.ref=Ga(K,at,ee),X.return=K,K=X;break e}o(K,at);break}else r(K,at);at=at.sibling}ee.type===F?(X=os(ee.props.children,K.mode,Ce,ee.key),X.return=K,K=X):(Ce=Al(ee.type,ee.key,ee.props,null,K.mode,Ce),Ce.ref=Ga(K,X,ee),Ce.return=K,K=Ce)}return w(K);case U:e:{for(at=ee.key;X!==null;){if(X.key===at)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){o(K,X.sibling),X=h(X,ee.children||[]),X.return=K,K=X;break e}else{o(K,X);break}else r(K,X);X=X.sibling}X=lf(ee,K.mode,Ce),X.return=K,K=X}return w(K);case ue:return at=ee._init,Kt(K,X,at(ee._payload),Ce)}if(Ze(ee))return Xe(K,X,ee,Ce);if(de(ee))return qe(K,X,ee,Ce);il(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,X!==null&&X.tag===6?(o(K,X.sibling),X=h(X,ee),X.return=K,K=X):(o(K,X),X=of(ee,K.mode,Ce),X.return=K,K=X),w(K)):o(K,X)}return Kt}var Fs=Ep(!0),Mp=Ep(!1),rl=wr(null),sl=null,Os=null,gc=null;function vc(){gc=Os=sl=null}function _c(n){var r=rl.current;zt(rl),n._currentValue=r}function xc(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function ks(n,r){sl=n,gc=Os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Gn=!0),n.firstContext=null)}function ii(n){var r=n._currentValue;if(gc!==n)if(n={context:n,memoizedValue:r,next:null},Os===null){if(sl===null)throw Error(t(308));Os=n,sl.dependencies={lanes:0,firstContext:n}}else Os=Os.next=n;return r}var es=null;function yc(n){es===null?es=[n]:es.push(n)}function wp(n,r,o,u){var h=r.interleaved;return h===null?(o.next=o,yc(r)):(o.next=h.next,h.next=o),r.interleaved=o,qi(n,u)}function qi(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Ar=!1;function Sc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ki(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Cr(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Tt&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,qi(n,o)}return h=u.interleaved,h===null?(r.next=r,yc(u)):(r.next=h.next,h.next=r),u.interleaved=r,qi(n,o)}function al(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,fn(n,o)}}function Rp(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=w:g=g.next=w,o=o.next}while(o!==null);g===null?h=g=r:g=g.next=r}else h=g=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function ol(n,r,o,u){var h=n.updateQueue;Ar=!1;var g=h.firstBaseUpdate,w=h.lastBaseUpdate,N=h.shared.pending;if(N!==null){h.shared.pending=null;var B=N,ie=B.next;B.next=null,w===null?g=ie:w.next=ie,w=B;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,N=Me.lastBaseUpdate,N!==w&&(N===null?Me.firstBaseUpdate=ie:N.next=ie,Me.lastBaseUpdate=B))}if(g!==null){var Re=h.baseState;w=0,Me=ie=B=null,N=g;do{var Ee=N.lane,ke=N.eventTime;if((u&Ee)===Ee){Me!==null&&(Me=Me.next={eventTime:ke,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Xe=n,qe=N;switch(Ee=r,ke=o,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){Re=Xe.call(ke,Re,Ee);break e}Re=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,Ee=typeof Xe=="function"?Xe.call(ke,Re,Ee):Xe,Ee==null)break e;Re=oe({},Re,Ee);break e;case 2:Ar=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,Ee=h.effects,Ee===null?h.effects=[N]:Ee.push(N))}else ke={eventTime:ke,lane:Ee,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Me===null?(ie=Me=ke,B=Re):Me=Me.next=ke,w|=Ee;if(N=N.next,N===null){if(N=h.shared.pending,N===null)break;Ee=N,N=Ee.next,Ee.next=null,h.lastBaseUpdate=Ee,h.shared.pending=null}}while(!0);if(Me===null&&(B=Re),h.baseState=B,h.firstBaseUpdate=ie,h.lastBaseUpdate=Me,r=h.shared.interleaved,r!==null){h=r;do w|=h.lane,h=h.next;while(h!==r)}else g===null&&(h.shared.lanes=0);is|=w,n.lanes=w,n.memoizedState=Re}}function Ap(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Wa={},Pi=wr(Wa),Xa=wr(Wa),ja=wr(Wa);function ts(n){if(n===Wa)throw Error(t(174));return n}function Ec(n,r){switch(kt(ja,r),kt(Xa,n),kt(Pi,Wa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ye(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ye(r,n)}zt(Pi),kt(Pi,r)}function Bs(){zt(Pi),zt(Xa),zt(ja)}function Cp(n){ts(ja.current);var r=ts(Pi.current),o=ye(r,n.type);r!==o&&(kt(Xa,n),kt(Pi,o))}function Mc(n){Xa.current===n&&(zt(Pi),zt(Xa))}var Gt=wr(0);function ll(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var wc=[];function Tc(){for(var n=0;n<wc.length;n++)wc[n]._workInProgressVersionPrimary=null;wc.length=0}var ul=C.ReactCurrentDispatcher,Rc=C.ReactCurrentBatchConfig,ns=0,Wt=null,nn=null,dn=null,cl=!1,$a=!1,Ya=0,F0=0;function Tn(){throw Error(t(321))}function Ac(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!mi(n[o],r[o]))return!1;return!0}function Cc(n,r,o,u,h,g){if(ns=g,Wt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ul.current=n===null||n.memoizedState===null?z0:H0,n=o(u,h),$a){g=0;do{if($a=!1,Ya=0,25<=g)throw Error(t(301));g+=1,dn=nn=null,r.updateQueue=null,ul.current=V0,n=o(u,h)}while($a)}if(ul.current=hl,r=nn!==null&&nn.next!==null,ns=0,dn=nn=Wt=null,cl=!1,r)throw Error(t(300));return n}function bc(){var n=Ya!==0;return Ya=0,n}function Li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Wt.memoizedState=dn=n:dn=dn.next=n,dn}function ri(){if(nn===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var r=dn===null?Wt.memoizedState:dn.next;if(r!==null)dn=r,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},dn===null?Wt.memoizedState=dn=n:dn=dn.next=n}return dn}function qa(n,r){return typeof r=="function"?r(n):r}function Pc(n){var r=ri(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=nn,h=u.baseQueue,g=o.pending;if(g!==null){if(h!==null){var w=h.next;h.next=g.next,g.next=w}u.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,u=u.baseState;var N=w=null,B=null,ie=g;do{var Me=ie.lane;if((ns&Me)===Me)B!==null&&(B=B.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),u=ie.hasEagerState?ie.eagerState:n(u,ie.action);else{var Re={lane:Me,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};B===null?(N=B=Re,w=u):B=B.next=Re,Wt.lanes|=Me,is|=Me}ie=ie.next}while(ie!==null&&ie!==g);B===null?w=u:B.next=N,mi(u,r.memoizedState)||(Gn=!0),r.memoizedState=u,r.baseState=w,r.baseQueue=B,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do g=h.lane,Wt.lanes|=g,is|=g,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Lc(n){var r=ri(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,g=r.memoizedState;if(h!==null){o.pending=null;var w=h=h.next;do g=n(g,w.action),w=w.next;while(w!==h);mi(g,r.memoizedState)||(Gn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,u]}function bp(){}function Pp(n,r){var o=Wt,u=ri(),h=r(),g=!mi(u.memoizedState,h);if(g&&(u.memoizedState=h,Gn=!0),u=u.queue,Dc(Np.bind(null,o,u,n),[n]),u.getSnapshot!==r||g||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,Ka(9,Dp.bind(null,o,u,h,r),void 0,null),hn===null)throw Error(t(349));(ns&30)!==0||Lp(o,r,h)}return h}function Lp(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Dp(n,r,o,u){r.value=o,r.getSnapshot=u,Up(r)&&Ip(n)}function Np(n,r,o){return o(function(){Up(r)&&Ip(n)})}function Up(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!mi(n,o)}catch{return!0}}function Ip(n){var r=qi(n,1);r!==null&&yi(r,n,1,-1)}function Fp(n){var r=Li();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:n},r.queue=n,n=n.dispatch=B0.bind(null,Wt,n),[r.memoizedState,n]}function Ka(n,r,o,u){return n={tag:n,create:r,destroy:o,deps:u,next:null},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n)),n}function Op(){return ri().memoizedState}function fl(n,r,o,u){var h=Li();Wt.flags|=n,h.memoizedState=Ka(1|r,o,void 0,u===void 0?null:u)}function dl(n,r,o,u){var h=ri();u=u===void 0?null:u;var g=void 0;if(nn!==null){var w=nn.memoizedState;if(g=w.destroy,u!==null&&Ac(u,w.deps)){h.memoizedState=Ka(r,o,g,u);return}}Wt.flags|=n,h.memoizedState=Ka(1|r,o,g,u)}function kp(n,r){return fl(8390656,8,n,r)}function Dc(n,r){return dl(2048,8,n,r)}function Bp(n,r){return dl(4,2,n,r)}function zp(n,r){return dl(4,4,n,r)}function Hp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Vp(n,r,o){return o=o!=null?o.concat([n]):null,dl(4,4,Hp.bind(null,r,n),o)}function Nc(){}function Gp(n,r){var o=ri();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Ac(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Wp(n,r){var o=ri();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Ac(r,u[1])?u[0]:(n=n(),o.memoizedState=[n,r],n)}function Xp(n,r,o){return(ns&21)===0?(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=o):(mi(o,r)||(o=Ot(),Wt.lanes|=o,is|=o,n.baseState=!0),r)}function O0(n,r){var o=wt;wt=o!==0&&4>o?o:4,n(!0);var u=Rc.transition;Rc.transition={};try{n(!1),r()}finally{wt=o,Rc.transition=u}}function jp(){return ri().memoizedState}function k0(n,r,o){var u=Dr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},$p(n))Yp(r,o);else if(o=wp(n,r,o,u),o!==null){var h=Nn();yi(o,n,u,h),qp(o,r,u)}}function B0(n,r,o){var u=Dr(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if($p(n))Yp(r,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var w=r.lastRenderedState,N=g(w,o);if(h.hasEagerState=!0,h.eagerState=N,mi(N,w)){var B=r.interleaved;B===null?(h.next=h,yc(r)):(h.next=B.next,B.next=h),r.interleaved=h;return}}catch{}o=wp(n,r,h,u),o!==null&&(h=Nn(),yi(o,n,u,h),qp(o,r,u))}}function $p(n){var r=n.alternate;return n===Wt||r!==null&&r===Wt}function Yp(n,r){$a=cl=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function qp(n,r,o){if((o&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,fn(n,o)}}var hl={readContext:ii,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},z0={readContext:ii,useCallback:function(n,r){return Li().memoizedState=[n,r===void 0?null:r],n},useContext:ii,useEffect:kp,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,fl(4194308,4,Hp.bind(null,r,n),o)},useLayoutEffect:function(n,r){return fl(4194308,4,n,r)},useInsertionEffect:function(n,r){return fl(4,2,n,r)},useMemo:function(n,r){var o=Li();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var u=Li();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=k0.bind(null,Wt,n),[u.memoizedState,n]},useRef:function(n){var r=Li();return n={current:n},r.memoizedState=n},useState:Fp,useDebugValue:Nc,useDeferredValue:function(n){return Li().memoizedState=n},useTransition:function(){var n=Fp(!1),r=n[0];return n=O0.bind(null,n[1]),Li().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var u=Wt,h=Li();if(Vt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),hn===null)throw Error(t(349));(ns&30)!==0||Lp(u,r,o)}h.memoizedState=o;var g={value:o,getSnapshot:r};return h.queue=g,kp(Np.bind(null,u,g,n),[n]),u.flags|=2048,Ka(9,Dp.bind(null,u,g,o,r),void 0,null),o},useId:function(){var n=Li(),r=hn.identifierPrefix;if(Vt){var o=Yi,u=$i;o=(u&~(1<<32-pt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ya++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=F0++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},H0={readContext:ii,useCallback:Gp,useContext:ii,useEffect:Dc,useImperativeHandle:Vp,useInsertionEffect:Bp,useLayoutEffect:zp,useMemo:Wp,useReducer:Pc,useRef:Op,useState:function(){return Pc(qa)},useDebugValue:Nc,useDeferredValue:function(n){var r=ri();return Xp(r,nn.memoizedState,n)},useTransition:function(){var n=Pc(qa)[0],r=ri().memoizedState;return[n,r]},useMutableSource:bp,useSyncExternalStore:Pp,useId:jp,unstable_isNewReconciler:!1},V0={readContext:ii,useCallback:Gp,useContext:ii,useEffect:Dc,useImperativeHandle:Vp,useInsertionEffect:Bp,useLayoutEffect:zp,useMemo:Wp,useReducer:Lc,useRef:Op,useState:function(){return Lc(qa)},useDebugValue:Nc,useDeferredValue:function(n){var r=ri();return nn===null?r.memoizedState=n:Xp(r,nn.memoizedState,n)},useTransition:function(){var n=Lc(qa)[0],r=ri().memoizedState;return[n,r]},useMutableSource:bp,useSyncExternalStore:Pp,useId:jp,unstable_isNewReconciler:!1};function vi(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Uc(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:oe({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var pl={isMounted:function(n){return(n=n._reactInternals)?Qt(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Nn(),h=Dr(n),g=Ki(u,h);g.payload=r,o!=null&&(g.callback=o),r=Cr(n,g,h),r!==null&&(yi(r,n,h,u),al(r,n,h))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Nn(),h=Dr(n),g=Ki(u,h);g.tag=1,g.payload=r,o!=null&&(g.callback=o),r=Cr(n,g,h),r!==null&&(yi(r,n,h,u),al(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Nn(),u=Dr(n),h=Ki(o,u);h.tag=2,r!=null&&(h.callback=r),r=Cr(n,h,u),r!==null&&(yi(r,n,u,o),al(r,n,u))}};function Kp(n,r,o,u,h,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,w):r.prototype&&r.prototype.isPureReactComponent?!Fa(o,u)||!Fa(h,g):!0}function Zp(n,r,o){var u=!1,h=Tr,g=r.contextType;return typeof g=="object"&&g!==null?g=ii(g):(h=Vn(r)?Zr:wn.current,u=r.contextTypes,g=(u=u!=null)?Ds(n,h):Tr),r=new r(o,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=pl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),r}function Jp(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&pl.enqueueReplaceState(r,r.state,null)}function Ic(n,r,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},Sc(n);var g=r.contextType;typeof g=="object"&&g!==null?h.context=ii(g):(g=Vn(r)?Zr:wn.current,h.context=Ds(n,g)),h.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Uc(n,r,g,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&pl.enqueueReplaceState(h,h.state,null),ol(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,r){try{var o="",u=r;do o+=ge(u),u=u.return;while(u);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:h,digest:null}}function Fc(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Oc(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var G0=typeof WeakMap=="function"?WeakMap:Map;function Qp(n,r,o){o=Ki(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){Sl||(Sl=!0,Jc=u),Oc(n,r)},o}function em(n,r,o){o=Ki(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){Oc(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Oc(n,r),typeof u!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})}),o}function tm(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new G0;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),n=ix.bind(null,n,r,o),r.then(n,n))}function nm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function im(n,r,o,u,h){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Ki(-1,1),r.tag=2,Cr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var W0=C.ReactCurrentOwner,Gn=!1;function Dn(n,r,o,u){r.child=n===null?Mp(r,null,o,u):Fs(r,n.child,o,u)}function rm(n,r,o,u,h){o=o.render;var g=r.ref;return ks(r,h),u=Cc(n,r,o,u,g,h),o=bc(),n!==null&&!Gn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,Zi(n,r,h)):(Vt&&o&&fc(r),r.flags|=1,Dn(n,r,u,h),r.child)}function sm(n,r,o,u,h){if(n===null){var g=o.type;return typeof g=="function"&&!af(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=g,am(n,r,g,u,h)):(n=Al(o.type,null,u,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&h)===0){var w=g.memoizedProps;if(o=o.compare,o=o!==null?o:Fa,o(w,u)&&n.ref===r.ref)return Zi(n,r,h)}return r.flags|=1,n=Ur(g,u),n.ref=r.ref,n.return=r,r.child=n}function am(n,r,o,u,h){if(n!==null){var g=n.memoizedProps;if(Fa(g,u)&&n.ref===r.ref)if(Gn=!1,r.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Gn=!0);else return r.lanes=n.lanes,Zi(n,r,h)}return kc(n,r,o,u,h)}function om(n,r,o){var u=r.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Vs,Jn),Jn|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,kt(Vs,Jn),Jn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,kt(Vs,Jn),Jn|=u}else g!==null?(u=g.baseLanes|o,r.memoizedState=null):u=o,kt(Vs,Jn),Jn|=u;return Dn(n,r,h,o),r.child}function lm(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function kc(n,r,o,u,h){var g=Vn(o)?Zr:wn.current;return g=Ds(r,g),ks(r,h),o=Cc(n,r,o,u,g,h),u=bc(),n!==null&&!Gn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,Zi(n,r,h)):(Vt&&u&&fc(r),r.flags|=1,Dn(n,r,o,h),r.child)}function um(n,r,o,u,h){if(Vn(o)){var g=!0;Jo(r)}else g=!1;if(ks(r,h),r.stateNode===null)gl(n,r),Zp(r,o,u),Ic(r,o,u,h),u=!0;else if(n===null){var w=r.stateNode,N=r.memoizedProps;w.props=N;var B=w.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=ii(ie):(ie=Vn(o)?Zr:wn.current,ie=Ds(r,ie));var Me=o.getDerivedStateFromProps,Re=typeof Me=="function"||typeof w.getSnapshotBeforeUpdate=="function";Re||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==u||B!==ie)&&Jp(r,w,u,ie),Ar=!1;var Ee=r.memoizedState;w.state=Ee,ol(r,u,w,h),B=r.memoizedState,N!==u||Ee!==B||Hn.current||Ar?(typeof Me=="function"&&(Uc(r,o,Me,u),B=r.memoizedState),(N=Ar||Kp(r,o,N,u,Ee,B,ie))?(Re||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(r.flags|=4194308)):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=B),w.props=u,w.state=B,w.context=ie,u=N):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{w=r.stateNode,Tp(n,r),N=r.memoizedProps,ie=r.type===r.elementType?N:vi(r.type,N),w.props=ie,Re=r.pendingProps,Ee=w.context,B=o.contextType,typeof B=="object"&&B!==null?B=ii(B):(B=Vn(o)?Zr:wn.current,B=Ds(r,B));var ke=o.getDerivedStateFromProps;(Me=typeof ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==Re||Ee!==B)&&Jp(r,w,u,B),Ar=!1,Ee=r.memoizedState,w.state=Ee,ol(r,u,w,h);var Xe=r.memoizedState;N!==Re||Ee!==Xe||Hn.current||Ar?(typeof ke=="function"&&(Uc(r,o,ke,u),Xe=r.memoizedState),(ie=Ar||Kp(r,o,ie,u,Ee,Xe,B)||!1)?(Me||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Xe,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Xe,B)),typeof w.componentDidUpdate=="function"&&(r.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof w.componentDidUpdate!="function"||N===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Xe),w.props=u,w.state=Xe,w.context=B,u=ie):(typeof w.componentDidUpdate!="function"||N===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=1024),u=!1)}return Bc(n,r,o,u,g,h)}function Bc(n,r,o,u,h,g){lm(n,r);var w=(r.flags&128)!==0;if(!u&&!w)return h&&pp(r,o,!1),Zi(n,r,g);u=r.stateNode,W0.current=r;var N=w&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&w?(r.child=Fs(r,n.child,null,g),r.child=Fs(r,null,N,g)):Dn(n,r,N,g),r.memoizedState=u.state,h&&pp(r,o,!0),r.child}function cm(n){var r=n.stateNode;r.pendingContext?dp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&dp(n,r.context,!1),Ec(n,r.containerInfo)}function fm(n,r,o,u,h){return Is(),mc(h),r.flags|=256,Dn(n,r,o,u),r.child}var zc={dehydrated:null,treeContext:null,retryLane:0};function Hc(n){return{baseLanes:n,cachePool:null,transitions:null}}function dm(n,r,o){var u=r.pendingProps,h=Gt.current,g=!1,w=(r.flags&128)!==0,N;if((N=w)||(N=n!==null&&n.memoizedState===null?!1:(h&2)!==0),N?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),kt(Gt,h&1),n===null)return pc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(w=u.children,n=u.fallback,g?(u=r.mode,g=r.child,w={mode:"hidden",children:w},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Cl(w,u,0,null),n=os(n,u,o,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=Hc(o),r.memoizedState=zc,n):Vc(r,w));if(h=n.memoizedState,h!==null&&(N=h.dehydrated,N!==null))return X0(n,r,w,u,N,h,o);if(g){g=u.fallback,w=r.mode,h=n.child,N=h.sibling;var B={mode:"hidden",children:u.children};return(w&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=B,r.deletions=null):(u=Ur(h,B),u.subtreeFlags=h.subtreeFlags&14680064),N!==null?g=Ur(N,g):(g=os(g,w,o,null),g.flags|=2),g.return=r,u.return=r,u.sibling=g,r.child=u,u=g,g=r.child,w=n.child.memoizedState,w=w===null?Hc(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~o,r.memoizedState=zc,u}return g=n.child,n=g.sibling,u=Ur(g,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=u,r.memoizedState=null,u}function Vc(n,r){return r=Cl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ml(n,r,o,u){return u!==null&&mc(u),Fs(r,n.child,null,o),n=Vc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function X0(n,r,o,u,h,g,w){if(o)return r.flags&256?(r.flags&=-257,u=Fc(Error(t(422))),ml(n,r,w,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=u.fallback,h=r.mode,u=Cl({mode:"visible",children:u.children},h,0,null),g=os(g,h,w,null),g.flags|=2,u.return=r,g.return=r,u.sibling=g,r.child=u,(r.mode&1)!==0&&Fs(r,n.child,null,w),r.child.memoizedState=Hc(w),r.memoizedState=zc,g);if((r.mode&1)===0)return ml(n,r,w,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var N=u.dgst;return u=N,g=Error(t(419)),u=Fc(g,u,void 0),ml(n,r,w,u)}if(N=(w&n.childLanes)!==0,Gn||N){if(u=hn,u!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|w))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,qi(n,h),yi(u,n,h,-1))}return sf(),u=Fc(Error(t(421))),ml(n,r,w,u)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=rx.bind(null,n),h._reactRetry=r,null):(n=g.treeContext,Zn=Mr(h.nextSibling),Kn=r,Vt=!0,gi=null,n!==null&&(ti[ni++]=$i,ti[ni++]=Yi,ti[ni++]=Jr,$i=n.id,Yi=n.overflow,Jr=r),r=Vc(r,u.children),r.flags|=4096,r)}function hm(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),xc(n.return,r,o)}function Gc(n,r,o,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function pm(n,r,o){var u=r.pendingProps,h=u.revealOrder,g=u.tail;if(Dn(n,r,u.children,o),u=Gt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hm(n,o,r);else if(n.tag===19)hm(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(kt(Gt,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)n=o.alternate,n!==null&&ll(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),Gc(r,!1,h,o,g);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&ll(n)===null){r.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}Gc(r,!0,o,null,g);break;case"together":Gc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function gl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Zi(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),is|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Ur(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Ur(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function j0(n,r,o){switch(r.tag){case 3:cm(r),Is();break;case 5:Cp(r);break;case 1:Vn(r.type)&&Jo(r);break;case 4:Ec(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;kt(rl,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(kt(Gt,Gt.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?dm(n,r,o):(kt(Gt,Gt.current&1),n=Zi(n,r,o),n!==null?n.sibling:null);kt(Gt,Gt.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(n.flags&128)!==0){if(u)return pm(n,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),kt(Gt,Gt.current),u)break;return null;case 22:case 23:return r.lanes=0,om(n,r,o)}return Zi(n,r,o)}var mm,Wc,gm,vm;mm=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Wc=function(){},gm=function(n,r,o,u){var h=n.memoizedProps;if(h!==u){n=r.stateNode,ts(Pi.current);var g=null;switch(o){case"input":h=O(n,h),u=O(n,u),g=[];break;case"select":h=oe({},h,{value:void 0}),u=oe({},u,{value:void 0}),g=[];break;case"textarea":h=Pt(n,h),u=Pt(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=qo)}Qe(o,u);var w;o=null;for(ie in h)if(!u.hasOwnProperty(ie)&&h.hasOwnProperty(ie)&&h[ie]!=null)if(ie==="style"){var N=h[ie];for(w in N)N.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?g||(g=[]):(g=g||[]).push(ie,null));for(ie in u){var B=u[ie];if(N=h?.[ie],u.hasOwnProperty(ie)&&B!==N&&(B!=null||N!=null))if(ie==="style")if(N){for(w in N)!N.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in B)B.hasOwnProperty(w)&&N[w]!==B[w]&&(o||(o={}),o[w]=B[w])}else o||(g||(g=[]),g.push(ie,o)),o=B;else ie==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,N=N?N.__html:void 0,B!=null&&N!==B&&(g=g||[]).push(ie,B)):ie==="children"?typeof B!="string"&&typeof B!="number"||(g=g||[]).push(ie,""+B):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(B!=null&&ie==="onScroll"&&Bt("scroll",n),g||N===B||(g=[])):(g=g||[]).push(ie,B))}o&&(g=g||[]).push("style",o);var ie=g;(r.updateQueue=ie)&&(r.flags|=4)}},vm=function(n,r,o,u){o!==u&&(r.flags|=4)};function Za(n,r){if(!Vt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Rn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function $0(n,r,o){var u=r.pendingProps;switch(dc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(r),null;case 1:return Vn(r.type)&&Zo(),Rn(r),null;case 3:return u=r.stateNode,Bs(),zt(Hn),zt(wn),Tc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(nl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,gi!==null&&(tf(gi),gi=null))),Wc(n,r),Rn(r),null;case 5:Mc(r);var h=ts(ja.current);if(o=r.type,n!==null&&r.stateNode!=null)gm(n,r,o,u,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Rn(r),null}if(n=ts(Pi.current),nl(r)){u=r.stateNode,o=r.type;var g=r.memoizedProps;switch(u[bi]=r,u[Ha]=g,n=(r.mode&1)!==0,o){case"dialog":Bt("cancel",u),Bt("close",u);break;case"iframe":case"object":case"embed":Bt("load",u);break;case"video":case"audio":for(h=0;h<ka.length;h++)Bt(ka[h],u);break;case"source":Bt("error",u);break;case"img":case"image":case"link":Bt("error",u),Bt("load",u);break;case"details":Bt("toggle",u);break;case"input":qt(u,g),Bt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Bt("invalid",u);break;case"textarea":D(u,g),Bt("invalid",u)}Qe(o,g),h=null;for(var w in g)if(g.hasOwnProperty(w)){var N=g[w];w==="children"?typeof N=="string"?u.textContent!==N&&(g.suppressHydrationWarning!==!0&&Yo(u.textContent,N,n),h=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(g.suppressHydrationWarning!==!0&&Yo(u.textContent,N,n),h=["children",""+N]):a.hasOwnProperty(w)&&N!=null&&w==="onScroll"&&Bt("scroll",u)}switch(o){case"input":nt(u),$e(u,g,!0);break;case"textarea":nt(u),Q(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=qo)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(o,{is:u.is}):(n=w.createElement(o),o==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,o),n[bi]=r,n[Ha]=u,mm(n,r,!1,!1),r.stateNode=n;e:{switch(w=Le(o,u),o){case"dialog":Bt("cancel",n),Bt("close",n),h=u;break;case"iframe":case"object":case"embed":Bt("load",n),h=u;break;case"video":case"audio":for(h=0;h<ka.length;h++)Bt(ka[h],n);h=u;break;case"source":Bt("error",n),h=u;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),h=u;break;case"details":Bt("toggle",n),h=u;break;case"input":qt(n,u),h=O(n,u),Bt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=oe({},u,{value:void 0}),Bt("invalid",n);break;case"textarea":D(n,u),h=Pt(n,u),Bt("invalid",n);break;default:h=u}Qe(o,h),N=h;for(g in N)if(N.hasOwnProperty(g)){var B=N[g];g==="style"?Oe(n,B):g==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&je(n,B)):g==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&Pe(n,B):typeof B=="number"&&Pe(n,""+B):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?B!=null&&g==="onScroll"&&Bt("scroll",n):B!=null&&P(n,g,B,w))}switch(o){case"input":nt(n),$e(n,u,!1);break;case"textarea":nt(n),Q(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ce(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?lt(n,!!u.multiple,g,!1):u.defaultValue!=null&&lt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=qo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Rn(r),null;case 6:if(n&&r.stateNode!=null)vm(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(o=ts(ja.current),ts(Pi.current),nl(r)){if(u=r.stateNode,o=r.memoizedProps,u[bi]=r,(g=u.nodeValue!==o)&&(n=Kn,n!==null))switch(n.tag){case 3:Yo(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Yo(u.nodeValue,o,(n.mode&1)!==0)}g&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[bi]=r,r.stateNode=u}return Rn(r),null;case 13:if(zt(Gt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&Zn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)yp(),Is(),r.flags|=98560,g=!1;else if(g=nl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[bi]=r}else Is(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Rn(r),g=!1}else gi!==null&&(tf(gi),gi=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Gt.current&1)!==0?rn===0&&(rn=3):sf())),r.updateQueue!==null&&(r.flags|=4),Rn(r),null);case 4:return Bs(),Wc(n,r),n===null&&Ba(r.stateNode.containerInfo),Rn(r),null;case 10:return _c(r.type._context),Rn(r),null;case 17:return Vn(r.type)&&Zo(),Rn(r),null;case 19:if(zt(Gt),g=r.memoizedState,g===null)return Rn(r),null;if(u=(r.flags&128)!==0,w=g.rendering,w===null)if(u)Za(g,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(w=ll(n),w!==null){for(r.flags|=128,Za(g,!1),u=w.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)g=o,n=u,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return kt(Gt,Gt.current&1|2),r.child}n=n.sibling}g.tail!==null&&Z()>Gs&&(r.flags|=128,u=!0,Za(g,!1),r.lanes=4194304)}else{if(!u)if(n=ll(w),n!==null){if(r.flags|=128,u=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Za(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Vt)return Rn(r),null}else 2*Z()-g.renderingStartTime>Gs&&o!==1073741824&&(r.flags|=128,u=!0,Za(g,!1),r.lanes=4194304);g.isBackwards?(w.sibling=r.child,r.child=w):(o=g.last,o!==null?o.sibling=w:r.child=w,g.last=w)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Z(),r.sibling=null,o=Gt.current,kt(Gt,u?o&1|2:o&1),r):(Rn(r),null);case 22:case 23:return rf(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Jn&1073741824)!==0&&(Rn(r),r.subtreeFlags&6&&(r.flags|=8192)):Rn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Y0(n,r){switch(dc(r),r.tag){case 1:return Vn(r.type)&&Zo(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Bs(),zt(Hn),zt(wn),Tc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Mc(r),null;case 13:if(zt(Gt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Is()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return zt(Gt),null;case 4:return Bs(),null;case 10:return _c(r.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var vl=!1,An=!1,q0=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Hs(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){jt(n,r,u)}else o.current=null}function Xc(n,r,o){try{o()}catch(u){jt(n,r,u)}}var _m=!1;function K0(n,r){if(ic=Oo,n=Kh(),qu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var w=0,N=-1,B=-1,ie=0,Me=0,Re=n,Ee=null;t:for(;;){for(var ke;Re!==o||h!==0&&Re.nodeType!==3||(N=w+h),Re!==g||u!==0&&Re.nodeType!==3||(B=w+u),Re.nodeType===3&&(w+=Re.nodeValue.length),(ke=Re.firstChild)!==null;)Ee=Re,Re=ke;for(;;){if(Re===n)break t;if(Ee===o&&++ie===h&&(N=w),Ee===g&&++Me===u&&(B=w),(ke=Re.nextSibling)!==null)break;Re=Ee,Ee=Re.parentNode}Re=ke}o=N===-1||B===-1?null:{start:N,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(rc={focusedElem:n,selectionRange:o},Oo=!1,Ge=r;Ge!==null;)if(r=Ge,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ge=n;else for(;Ge!==null;){r=Ge;try{var Xe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,Kt=Xe.memoizedState,K=r.stateNode,X=K.getSnapshotBeforeUpdate(r.elementType===r.type?qe:vi(r.type,qe),Kt);K.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ee=r.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){jt(r,r.return,Ce)}if(n=r.sibling,n!==null){n.return=r.return,Ge=n;break}Ge=r.return}return Xe=_m,_m=!1,Xe}function Ja(n,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Xc(r,o,g)}h=h.next}while(h!==u)}}function _l(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function jc(n){var r=n.ref;if(r!==null){var o=n.stateNode;n.tag,n=o,typeof r=="function"?r(n):r.current=n}}function xm(n){var r=n.alternate;r!==null&&(n.alternate=null,xm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[bi],delete r[Ha],delete r[lc],delete r[D0],delete r[N0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ym(n){return n.tag===5||n.tag===3||n.tag===4}function Sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ym(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $c(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=qo));else if(u!==4&&(n=n.child,n!==null))for($c(n,r,o),n=n.sibling;n!==null;)$c(n,r,o),n=n.sibling}function Yc(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Yc(n,r,o),n=n.sibling;n!==null;)Yc(n,r,o),n=n.sibling}var _n=null,_i=!1;function br(n,r,o){for(o=o.child;o!==null;)Em(n,r,o),o=o.sibling}function Em(n,r,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(ct,o)}catch{}switch(o.tag){case 5:An||Hs(o,r);case 6:var u=_n,h=_i;_n=null,br(n,r,o),_n=u,_i=h,_n!==null&&(_i?(n=_n,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):_n.removeChild(o.stateNode));break;case 18:_n!==null&&(_i?(n=_n,o=o.stateNode,n.nodeType===8?oc(n.parentNode,o):n.nodeType===1&&oc(n,o),Pa(n)):oc(_n,o.stateNode));break;case 4:u=_n,h=_i,_n=o.stateNode.containerInfo,_i=!0,br(n,r,o),_n=u,_i=h;break;case 0:case 11:case 14:case 15:if(!An&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&Xc(o,r,w),h=h.next}while(h!==u)}br(n,r,o);break;case 1:if(!An&&(Hs(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(N){jt(o,r,N)}br(n,r,o);break;case 21:br(n,r,o);break;case 22:o.mode&1?(An=(u=An)||o.memoizedState!==null,br(n,r,o),An=u):br(n,r,o);break;default:br(n,r,o)}}function Mm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new q0),r.forEach(function(u){var h=sx.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function xi(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var g=n,w=r,N=w;e:for(;N!==null;){switch(N.tag){case 5:_n=N.stateNode,_i=!1;break e;case 3:_n=N.stateNode.containerInfo,_i=!0;break e;case 4:_n=N.stateNode.containerInfo,_i=!0;break e}N=N.return}if(_n===null)throw Error(t(160));Em(g,w,h),_n=null,_i=!1;var B=h.alternate;B!==null&&(B.return=null),h.return=null}catch(ie){jt(h,r,ie)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)wm(r,n),r=r.sibling}function wm(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xi(r,n),Di(n),u&4){try{Ja(3,n,n.return),_l(3,n)}catch(qe){jt(n,n.return,qe)}try{Ja(5,n,n.return)}catch(qe){jt(n,n.return,qe)}}break;case 1:xi(r,n),Di(n),u&512&&o!==null&&Hs(o,o.return);break;case 5:if(xi(r,n),Di(n),u&512&&o!==null&&Hs(o,o.return),n.flags&32){var h=n.stateNode;try{Pe(h,"")}catch(qe){jt(n,n.return,qe)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,w=o!==null?o.memoizedProps:g,N=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{N==="input"&&g.type==="radio"&&g.name!=null&&gt(h,g),Le(N,w);var ie=Le(N,g);for(w=0;w<B.length;w+=2){var Me=B[w],Re=B[w+1];Me==="style"?Oe(h,Re):Me==="dangerouslySetInnerHTML"?je(h,Re):Me==="children"?Pe(h,Re):P(h,Me,Re,ie)}switch(N){case"input":Mt(h,g);break;case"textarea":T(h,g);break;case"select":var Ee=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var ke=g.value;ke!=null?lt(h,!!g.multiple,ke,!1):Ee!==!!g.multiple&&(g.defaultValue!=null?lt(h,!!g.multiple,g.defaultValue,!0):lt(h,!!g.multiple,g.multiple?[]:"",!1))}h[Ha]=g}catch(qe){jt(n,n.return,qe)}}break;case 6:if(xi(r,n),Di(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(qe){jt(n,n.return,qe)}}break;case 3:if(xi(r,n),Di(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Pa(r.containerInfo)}catch(qe){jt(n,n.return,qe)}break;case 4:xi(r,n),Di(n);break;case 13:xi(r,n),Di(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Zc=Z())),u&4&&Mm(n);break;case 22:if(Me=o!==null&&o.memoizedState!==null,n.mode&1?(An=(ie=An)||Me,xi(r,n),An=ie):xi(r,n),Di(n),u&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!Me&&(n.mode&1)!==0)for(Ge=n,Me=n.child;Me!==null;){for(Re=Ge=Me;Ge!==null;){switch(Ee=Ge,ke=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Ja(4,Ee,Ee.return);break;case 1:Hs(Ee,Ee.return);var Xe=Ee.stateNode;if(typeof Xe.componentWillUnmount=="function"){u=Ee,o=Ee.return;try{r=u,Xe.props=r.memoizedProps,Xe.state=r.memoizedState,Xe.componentWillUnmount()}catch(qe){jt(u,o,qe)}}break;case 5:Hs(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){Am(Re);continue}}ke!==null?(ke.return=Ee,Ge=ke):Am(Re)}Me=Me.sibling}e:for(Me=null,Re=n;;){if(Re.tag===5){if(Me===null){Me=Re;try{h=Re.stateNode,ie?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(N=Re.stateNode,B=Re.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,N.style.display=Se("display",w))}catch(qe){jt(n,n.return,qe)}}}else if(Re.tag===6){if(Me===null)try{Re.stateNode.nodeValue=ie?"":Re.memoizedProps}catch(qe){jt(n,n.return,qe)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===n)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===n)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===n)break e;Me===Re&&(Me=null),Re=Re.return}Me===Re&&(Me=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:xi(r,n),Di(n),u&4&&Mm(n);break;case 21:break;default:xi(r,n),Di(n)}}function Di(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(ym(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Pe(h,""),u.flags&=-33);var g=Sm(n);Yc(n,g,h);break;case 3:case 4:var w=u.stateNode.containerInfo,N=Sm(n);$c(n,N,w);break;default:throw Error(t(161))}}catch(B){jt(n,n.return,B)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Z0(n,r,o){Ge=n,Tm(n)}function Tm(n,r,o){for(var u=(n.mode&1)!==0;Ge!==null;){var h=Ge,g=h.child;if(h.tag===22&&u){var w=h.memoizedState!==null||vl;if(!w){var N=h.alternate,B=N!==null&&N.memoizedState!==null||An;N=vl;var ie=An;if(vl=w,(An=B)&&!ie)for(Ge=h;Ge!==null;)w=Ge,B=w.child,w.tag===22&&w.memoizedState!==null?Cm(h):B!==null?(B.return=w,Ge=B):Cm(h);for(;g!==null;)Ge=g,Tm(g),g=g.sibling;Ge=h,vl=N,An=ie}Rm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ge=g):Rm(n)}}function Rm(n){for(;Ge!==null;){var r=Ge;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:An||_l(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!An)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:vi(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&Ap(r,g,u);break;case 3:var w=r.updateQueue;if(w!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Ap(r,w,o)}break;case 5:var N=r.stateNode;if(o===null&&r.flags&4){o=N;var B=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ie=r.alternate;if(ie!==null){var Me=ie.memoizedState;if(Me!==null){var Re=Me.dehydrated;Re!==null&&Pa(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||r.flags&512&&jc(r)}catch(Ee){jt(r,r.return,Ee)}}if(r===n){Ge=null;break}if(o=r.sibling,o!==null){o.return=r.return,Ge=o;break}Ge=r.return}}function Am(n){for(;Ge!==null;){var r=Ge;if(r===n){Ge=null;break}var o=r.sibling;if(o!==null){o.return=r.return,Ge=o;break}Ge=r.return}}function Cm(n){for(;Ge!==null;){var r=Ge;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{_l(4,r)}catch(B){jt(r,o,B)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(B){jt(r,h,B)}}var g=r.return;try{jc(r)}catch(B){jt(r,g,B)}break;case 5:var w=r.return;try{jc(r)}catch(B){jt(r,w,B)}}}catch(B){jt(r,r.return,B)}if(r===n){Ge=null;break}var N=r.sibling;if(N!==null){N.return=r.return,Ge=N;break}Ge=r.return}}var J0=Math.ceil,xl=C.ReactCurrentDispatcher,qc=C.ReactCurrentOwner,si=C.ReactCurrentBatchConfig,Tt=0,hn=null,en=null,xn=0,Jn=0,Vs=wr(0),rn=0,Qa=null,is=0,yl=0,Kc=0,eo=null,Wn=null,Zc=0,Gs=1/0,Ji=null,Sl=!1,Jc=null,Pr=null,El=!1,Lr=null,Ml=0,to=0,Qc=null,wl=-1,Tl=0;function Nn(){return(Tt&6)!==0?Z():wl!==-1?wl:wl=Z()}function Dr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&xn!==0?xn&-xn:I0.transition!==null?(Tl===0&&(Tl=Ot()),Tl):(n=wt,n!==0||(n=window.event,n=n===void 0?16:Ph(n.type)),n)}function yi(n,r,o,u){if(50<to)throw to=0,Qc=null,Error(t(185));cn(n,o,u),((Tt&2)===0||n!==hn)&&(n===hn&&((Tt&2)===0&&(yl|=o),rn===4&&Nr(n,xn)),Xn(n,u),o===1&&Tt===0&&(r.mode&1)===0&&(Gs=Z()+500,Qo&&Rr()))}function Xn(n,r){var o=n.callbackNode;Ln(n,r);var u=un(n,n===hn?xn:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(o!=null&&A(o),r===1)n.tag===0?U0(Pm.bind(null,n)):mp(Pm.bind(null,n)),P0(function(){(Tt&6)===0&&Rr()}),o=null;else{switch(Ci(u)){case 1:o=Ae;break;case 4:o=Ne;break;case 16:o=Ve;break;case 536870912:o=ft;break;default:o=Ve}o=km(o,bm.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function bm(n,r){if(wl=-1,Tl=0,(Tt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ws()&&n.callbackNode!==o)return null;var u=un(n,n===hn?xn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Rl(n,u);else{r=u;var h=Tt;Tt|=2;var g=Dm();(hn!==n||xn!==r)&&(Ji=null,Gs=Z()+500,ss(n,r));do try{tx();break}catch(N){Lm(n,N)}while(!0);vc(),xl.current=g,Tt=h,en!==null?r=0:(hn=null,xn=0,r=rn)}if(r!==0){if(r===2&&(h=Wi(n),h!==0&&(u=h,r=ef(n,h))),r===1)throw o=Qa,ss(n,0),Nr(n,u),Xn(n,Z()),o;if(r===6)Nr(n,u);else{if(h=n.current.alternate,(u&30)===0&&!Q0(h)&&(r=Rl(n,u),r===2&&(g=Wi(n),g!==0&&(u=g,r=ef(n,g))),r===1))throw o=Qa,ss(n,0),Nr(n,u),Xn(n,Z()),o;switch(n.finishedWork=h,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:as(n,Wn,Ji);break;case 3:if(Nr(n,u),(u&130023424)===u&&(r=Zc+500-Z(),10<r)){if(un(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Nn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=ac(as.bind(null,n,Wn,Ji),r);break}as(n,Wn,Ji);break;case 4:if(Nr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,h=-1;0<u;){var w=31-pt(u);g=1<<w,w=r[w],w>h&&(h=w),u&=~g}if(u=h,u=Z()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*J0(u/1960))-u,10<u){n.timeoutHandle=ac(as.bind(null,n,Wn,Ji),u);break}as(n,Wn,Ji);break;case 5:as(n,Wn,Ji);break;default:throw Error(t(329))}}}return Xn(n,Z()),n.callbackNode===o?bm.bind(null,n):null}function ef(n,r){var o=eo;return n.current.memoizedState.isDehydrated&&(ss(n,r).flags|=256),n=Rl(n,r),n!==2&&(r=Wn,Wn=o,r!==null&&tf(r)),n}function tf(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function Q0(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!mi(g(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Nr(n,r){for(r&=~Kc,r&=~yl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-pt(r),u=1<<o;n[o]=-1,r&=~u}}function Pm(n){if((Tt&6)!==0)throw Error(t(327));Ws();var r=un(n,0);if((r&1)===0)return Xn(n,Z()),null;var o=Rl(n,r);if(n.tag!==0&&o===2){var u=Wi(n);u!==0&&(r=u,o=ef(n,u))}if(o===1)throw o=Qa,ss(n,0),Nr(n,r),Xn(n,Z()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,as(n,Wn,Ji),Xn(n,Z()),null}function nf(n,r){var o=Tt;Tt|=1;try{return n(r)}finally{Tt=o,Tt===0&&(Gs=Z()+500,Qo&&Rr())}}function rs(n){Lr!==null&&Lr.tag===0&&(Tt&6)===0&&Ws();var r=Tt;Tt|=1;var o=si.transition,u=wt;try{if(si.transition=null,wt=1,n)return n()}finally{wt=u,si.transition=o,Tt=r,(Tt&6)===0&&Rr()}}function rf(){Jn=Vs.current,zt(Vs)}function ss(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,b0(o)),en!==null)for(o=en.return;o!==null;){var u=o;switch(dc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Zo();break;case 3:Bs(),zt(Hn),zt(wn),Tc();break;case 5:Mc(u);break;case 4:Bs();break;case 13:zt(Gt);break;case 19:zt(Gt);break;case 10:_c(u.type._context);break;case 22:case 23:rf()}o=o.return}if(hn=n,en=n=Ur(n.current,null),xn=Jn=r,rn=0,Qa=null,Kc=yl=is=0,Wn=eo=null,es!==null){for(r=0;r<es.length;r++)if(o=es[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,g=o.pending;if(g!==null){var w=g.next;g.next=h,u.next=w}o.pending=u}es=null}return n}function Lm(n,r){do{var o=en;try{if(vc(),ul.current=hl,cl){for(var u=Wt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}cl=!1}if(ns=0,dn=nn=Wt=null,$a=!1,Ya=0,qc.current=null,o===null||o.return===null){rn=1,Qa=r,en=null;break}e:{var g=n,w=o.return,N=o,B=r;if(r=xn,N.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ie=B,Me=N,Re=Me.tag;if((Me.mode&1)===0&&(Re===0||Re===11||Re===15)){var Ee=Me.alternate;Ee?(Me.updateQueue=Ee.updateQueue,Me.memoizedState=Ee.memoizedState,Me.lanes=Ee.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var ke=nm(w);if(ke!==null){ke.flags&=-257,im(ke,w,N,g,r),ke.mode&1&&tm(g,ie,r),r=ke,B=ie;var Xe=r.updateQueue;if(Xe===null){var qe=new Set;qe.add(B),r.updateQueue=qe}else Xe.add(B);break e}else{if((r&1)===0){tm(g,ie,r),sf();break e}B=Error(t(426))}}else if(Vt&&N.mode&1){var Kt=nm(w);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),im(Kt,w,N,g,r),mc(zs(B,N));break e}}g=B=zs(B,N),rn!==4&&(rn=2),eo===null?eo=[g]:eo.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var K=Qp(g,B,r);Rp(g,K);break e;case 1:N=B;var X=g.type,ee=g.stateNode;if((g.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Pr===null||!Pr.has(ee)))){g.flags|=65536,r&=-r,g.lanes|=r;var Ce=em(g,N,r);Rp(g,Ce);break e}}g=g.return}while(g!==null)}Um(o)}catch(Je){r=Je,en===o&&o!==null&&(en=o=o.return);continue}break}while(!0)}function Dm(){var n=xl.current;return xl.current=hl,n===null?hl:n}function sf(){(rn===0||rn===3||rn===2)&&(rn=4),hn===null||(is&268435455)===0&&(yl&268435455)===0||Nr(hn,xn)}function Rl(n,r){var o=Tt;Tt|=2;var u=Dm();(hn!==n||xn!==r)&&(Ji=null,ss(n,r));do try{ex();break}catch(h){Lm(n,h)}while(!0);if(vc(),Tt=o,xl.current=u,en!==null)throw Error(t(261));return hn=null,xn=0,rn}function ex(){for(;en!==null;)Nm(en)}function tx(){for(;en!==null&&!Y();)Nm(en)}function Nm(n){var r=Om(n.alternate,n,Jn);n.memoizedProps=n.pendingProps,r===null?Um(n):en=r,qc.current=null}function Um(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=$0(o,r,Jn),o!==null){en=o;return}}else{if(o=Y0(o,r),o!==null){o.flags&=32767,en=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,en=null;return}}if(r=r.sibling,r!==null){en=r;return}en=r=n}while(r!==null);rn===0&&(rn=5)}function as(n,r,o){var u=wt,h=si.transition;try{si.transition=null,wt=1,nx(n,r,o,u)}finally{si.transition=h,wt=u}return null}function nx(n,r,o,u){do Ws();while(Lr!==null);if((Tt&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(vn(n,g),n===hn&&(en=hn=null,xn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||El||(El=!0,km(Ve,function(){return Ws(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=si.transition,si.transition=null;var w=wt;wt=1;var N=Tt;Tt|=4,qc.current=null,K0(n,o),wm(o,n),E0(rc),Oo=!!ic,rc=ic=null,n.current=o,Z0(o),se(),Tt=N,wt=w,si.transition=g}else n.current=o;if(El&&(El=!1,Lr=n,Ml=h),g=n.pendingLanes,g===0&&(Pr=null),_t(o.stateNode),Xn(n,Z()),r!==null)for(u=n.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Sl)throw Sl=!1,n=Jc,Jc=null,n;return(Ml&1)!==0&&n.tag!==0&&Ws(),g=n.pendingLanes,(g&1)!==0?n===Qc?to++:(to=0,Qc=n):to=0,Rr(),null}function Ws(){if(Lr!==null){var n=Ci(Ml),r=si.transition,o=wt;try{if(si.transition=null,wt=16>n?16:n,Lr===null)var u=!1;else{if(n=Lr,Lr=null,Ml=0,(Tt&6)!==0)throw Error(t(331));var h=Tt;for(Tt|=4,Ge=n.current;Ge!==null;){var g=Ge,w=g.child;if((Ge.flags&16)!==0){var N=g.deletions;if(N!==null){for(var B=0;B<N.length;B++){var ie=N[B];for(Ge=ie;Ge!==null;){var Me=Ge;switch(Me.tag){case 0:case 11:case 15:Ja(8,Me,g)}var Re=Me.child;if(Re!==null)Re.return=Me,Ge=Re;else for(;Ge!==null;){Me=Ge;var Ee=Me.sibling,ke=Me.return;if(xm(Me),Me===ie){Ge=null;break}if(Ee!==null){Ee.return=ke,Ge=Ee;break}Ge=ke}}}var Xe=g.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var Kt=qe.sibling;qe.sibling=null,qe=Kt}while(qe!==null)}}Ge=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,Ge=w;else e:for(;Ge!==null;){if(g=Ge,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ja(9,g,g.return)}var K=g.sibling;if(K!==null){K.return=g.return,Ge=K;break e}Ge=g.return}}var X=n.current;for(Ge=X;Ge!==null;){w=Ge;var ee=w.child;if((w.subtreeFlags&2064)!==0&&ee!==null)ee.return=w,Ge=ee;else e:for(w=X;Ge!==null;){if(N=Ge,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:_l(9,N)}}catch(Je){jt(N,N.return,Je)}if(N===w){Ge=null;break e}var Ce=N.sibling;if(Ce!==null){Ce.return=N.return,Ge=Ce;break e}Ge=N.return}}if(Tt=h,Rr(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(ct,n)}catch{}u=!0}return u}finally{wt=o,si.transition=r}}return!1}function Im(n,r,o){r=zs(o,r),r=Qp(n,r,1),n=Cr(n,r,1),r=Nn(),n!==null&&(cn(n,1,r),Xn(n,r))}function jt(n,r,o){if(n.tag===3)Im(n,n,o);else for(;r!==null;){if(r.tag===3){Im(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Pr===null||!Pr.has(u))){n=zs(o,n),n=em(r,n,1),r=Cr(r,n,1),n=Nn(),r!==null&&(cn(r,1,n),Xn(r,n));break}}r=r.return}}function ix(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),r=Nn(),n.pingedLanes|=n.suspendedLanes&o,hn===n&&(xn&o)===o&&(rn===4||rn===3&&(xn&130023424)===xn&&500>Z()-Zc?ss(n,0):Kc|=o),Xn(n,r)}function Fm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Nt,Nt<<=1,(Nt&130023424)===0&&(Nt=4194304)));var o=Nn();n=qi(n,r),n!==null&&(cn(n,r,o),Xn(n,o))}function rx(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Fm(n,o)}function sx(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Fm(n,o)}var Om;Om=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Hn.current)Gn=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Gn=!1,j0(n,r,o);Gn=(n.flags&131072)!==0}else Gn=!1,Vt&&(r.flags&1048576)!==0&&gp(r,tl,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;gl(n,r),n=r.pendingProps;var h=Ds(r,wn.current);ks(r,o),h=Cc(null,r,u,n,h,o);var g=bc();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Vn(u)?(g=!0,Jo(r)):g=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Sc(r),h.updater=pl,r.stateNode=h,h._reactInternals=r,Ic(r,u,n,o),r=Bc(null,r,u,!0,g,o)):(r.tag=0,Vt&&g&&fc(r),Dn(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(gl(n,r),n=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=ox(u),n=vi(u,n),h){case 0:r=kc(null,r,u,n,o);break e;case 1:r=um(null,r,u,n,o);break e;case 11:r=rm(null,r,u,n,o);break e;case 14:r=sm(null,r,u,vi(u.type,n),o);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:vi(u,h),kc(n,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:vi(u,h),um(n,r,u,h,o);case 3:e:{if(cm(r),n===null)throw Error(t(387));u=r.pendingProps,g=r.memoizedState,h=g.element,Tp(n,r),ol(r,u,null,o);var w=r.memoizedState;if(u=w.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){h=zs(Error(t(423)),r),r=fm(n,r,u,o,h);break e}else if(u!==h){h=zs(Error(t(424)),r),r=fm(n,r,u,o,h);break e}else for(Zn=Mr(r.stateNode.containerInfo.firstChild),Kn=r,Vt=!0,gi=null,o=Mp(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Is(),u===h){r=Zi(n,r,o);break e}Dn(n,r,u,o)}r=r.child}return r;case 5:return Cp(r),n===null&&pc(r),u=r.type,h=r.pendingProps,g=n!==null?n.memoizedProps:null,w=h.children,sc(u,h)?w=null:g!==null&&sc(u,g)&&(r.flags|=32),lm(n,r),Dn(n,r,w,o),r.child;case 6:return n===null&&pc(r),null;case 13:return dm(n,r,o);case 4:return Ec(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Fs(r,null,u,o):Dn(n,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:vi(u,h),rm(n,r,u,h,o);case 7:return Dn(n,r,r.pendingProps,o),r.child;case 8:return Dn(n,r,r.pendingProps.children,o),r.child;case 12:return Dn(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,g=r.memoizedProps,w=h.value,kt(rl,u._currentValue),u._currentValue=w,g!==null)if(mi(g.value,w)){if(g.children===h.children&&!Hn.current){r=Zi(n,r,o);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var N=g.dependencies;if(N!==null){w=g.child;for(var B=N.firstContext;B!==null;){if(B.context===u){if(g.tag===1){B=Ki(-1,o&-o),B.tag=2;var ie=g.updateQueue;if(ie!==null){ie=ie.shared;var Me=ie.pending;Me===null?B.next=B:(B.next=Me.next,Me.next=B),ie.pending=B}}g.lanes|=o,B=g.alternate,B!==null&&(B.lanes|=o),xc(g.return,o,r),N.lanes|=o;break}B=B.next}}else if(g.tag===10)w=g.type===r.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=o,N=w.alternate,N!==null&&(N.lanes|=o),xc(w,o,r),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===r){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Dn(n,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,ks(r,o),h=ii(h),u=u(h),r.flags|=1,Dn(n,r,u,o),r.child;case 14:return u=r.type,h=vi(u,r.pendingProps),h=vi(u.type,h),sm(n,r,u,h,o);case 15:return am(n,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:vi(u,h),gl(n,r),r.tag=1,Vn(u)?(n=!0,Jo(r)):n=!1,ks(r,o),Zp(r,u,h),Ic(r,u,h,o),Bc(null,r,u,!0,n,o);case 19:return pm(n,r,o);case 22:return om(n,r,o)}throw Error(t(156,r.tag))};function km(n,r){return Uo(n,r)}function ax(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,r,o,u){return new ax(n,r,o,u)}function af(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ox(n){if(typeof n=="function")return af(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===he)return 14}return 2}function Ur(n,r){var o=n.alternate;return o===null?(o=ai(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Al(n,r,o,u,h,g){var w=2;if(u=n,typeof n=="function")af(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case F:return os(o.children,h,g,r);case G:w=8,h|=8;break;case b:return n=ai(12,o,r,h|2),n.elementType=b,n.lanes=g,n;case J:return n=ai(13,o,r,h),n.elementType=J,n.lanes=g,n;case le:return n=ai(19,o,r,h),n.elementType=le,n.lanes=g,n;case me:return Cl(o,h,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:w=10;break e;case V:w=9;break e;case ae:w=11;break e;case he:w=14;break e;case ue:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ai(w,o,r,h),r.elementType=n,r.type=u,r.lanes=g,r}function os(n,r,o,u){return n=ai(7,n,u,r),n.lanes=o,n}function Cl(n,r,o,u){return n=ai(22,n,u,r),n.elementType=me,n.lanes=o,n.stateNode={isHidden:!1},n}function of(n,r,o){return n=ai(6,n,null,r),n.lanes=o,n}function lf(n,r,o){return r=ai(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function lx(n,r,o,u,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mn(0),this.expirationTimes=Mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function uf(n,r,o,u,h,g,w,N,B){return n=new lx(n,r,o,N,B),r===1?(r=1,g===!0&&(r|=8)):r=0,g=ai(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(g),n}function ux(n,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:u==null?null:""+u,children:n,containerInfo:r,implementation:o}}function Bm(n){if(!n)return Tr;n=n._reactInternals;e:{if(Qt(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Vn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Vn(o))return hp(n,o,r)}return r}function zm(n,r,o,u,h,g,w,N,B){return n=uf(o,u,!0,n,h,g,w,N,B),n.context=Bm(null),o=n.current,u=Nn(),h=Dr(o),g=Ki(u,h),g.callback=r??null,Cr(o,g,h),n.current.lanes=h,cn(n,h,u),Xn(n,u),n}function bl(n,r,o,u){var h=r.current,g=Nn(),w=Dr(h);return o=Bm(o),r.context===null?r.context=o:r.pendingContext=o,r=Ki(g,w),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=Cr(h,r,w),n!==null&&(yi(n,h,w,g),al(n,h,w)),w}function Pl(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function Hm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function cf(n,r){Hm(n,r),(n=n.alternate)&&Hm(n,r)}function cx(){return null}var Vm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ff(n){this._internalRoot=n}Ll.prototype.render=ff.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));bl(n,r,null,null)},Ll.prototype.unmount=ff.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;rs(function(){bl(null,n,null,null)}),r[Xi]=null}};function Ll(n){this._internalRoot=n}Ll.prototype.unstable_scheduleHydration=function(n){if(n){var r=Th();n={blockedOn:null,target:n,priority:r};for(var o=0;o<yr.length&&r!==0&&r<yr[o].priority;o++);yr.splice(o,0,n),o===0&&Ch(n)}};function df(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function fx(n,r,o,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var ie=Pl(w);g.call(ie)}}var w=zm(r,u,n,0,null,!1,!1,"",Gm);return n._reactRootContainer=w,n[Xi]=w.current,Ba(n.nodeType===8?n.parentNode:n),rs(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var N=u;u=function(){var ie=Pl(B);N.call(ie)}}var B=uf(n,0,!1,null,null,!1,!1,"",Gm);return n._reactRootContainer=B,n[Xi]=B.current,Ba(n.nodeType===8?n.parentNode:n),rs(function(){bl(r,B,o,u)}),B}function Nl(n,r,o,u,h){var g=o._reactRootContainer;if(g){var w=g;if(typeof h=="function"){var N=h;h=function(){var B=Pl(w);N.call(B)}}bl(r,w,n,h)}else w=fx(o,r,n,h,u);return Pl(w)}Mh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=xt(r.pendingLanes);o!==0&&(fn(r,o|1),Xn(r,Z()),(Tt&6)===0&&(Gs=Z()+500,Rr()))}break;case 13:rs(function(){var u=qi(n,1);if(u!==null){var h=Nn();yi(u,n,1,h)}}),cf(n,1)}},Fu=function(n){if(n.tag===13){var r=qi(n,134217728);if(r!==null){var o=Nn();yi(r,n,134217728,o)}cf(n,134217728)}},wh=function(n){if(n.tag===13){var r=Dr(n),o=qi(n,r);if(o!==null){var u=Nn();yi(o,n,r,u)}cf(n,r)}},Th=function(){return wt},Rh=function(n,r){var o=wt;try{return wt=n,r()}finally{wt=o}},De=function(n,r,o){switch(r){case"input":if(Mt(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var h=Ko(u);if(!h)throw Error(t(90));st(u),Mt(u,h)}}}break;case"textarea":T(n,o);break;case"select":r=o.value,r!=null&&lt(n,!!o.multiple,r,!1)}},ut=nf,Ct=rs;var dx={usingClientEntryPoint:!1,Events:[Va,Ps,Ko,_e,ze,nf]},no={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hx={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Do(n),n===null?null:n.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||cx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{ct=Ul.inject(hx),We=Ul}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dx,jn.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(r))throw Error(t(200));return ux(n,r,null,o)},jn.createRoot=function(n,r){if(!df(n))throw Error(t(299));var o=!1,u="",h=Vm;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=uf(n,1,!1,null,null,o,!1,u,h),n[Xi]=r.current,Ba(n.nodeType===8?n.parentNode:n),new ff(r)},jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Do(r),n=n===null?null:n.stateNode,n},jn.flushSync=function(n){return rs(n)},jn.hydrate=function(n,r,o){if(!Dl(r))throw Error(t(200));return Nl(null,n,r,!0,o)},jn.hydrateRoot=function(n,r,o){if(!df(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,g="",w=Vm;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),r=zm(r,null,n,1,o??null,h,!1,g,w),n[Xi]=r.current,Ba(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new Ll(r)},jn.render=function(n,r,o){if(!Dl(r))throw Error(t(200));return Nl(null,n,r,!1,o)},jn.unmountComponentAtNode=function(n){if(!Dl(n))throw Error(t(40));return n._reactRootContainer?(rs(function(){Nl(null,null,n,!1,function(){n._reactRootContainer=null,n[Xi]=null})}),!0):!1},jn.unstable_batchedUpdates=nf,jn.unstable_renderSubtreeIntoContainer=function(n,r,o,u){if(!Dl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Nl(n,r,o,!1,u)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var Zm;function Sx(){if(Zm)return mf.exports;Zm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),mf.exports=yx(),mf.exports}var Jm;function Ex(){if(Jm)return Il;Jm=1;var i=Sx();return Il.createRoot=i.createRoot,Il.hydrateRoot=i.hydrateRoot,Il}var Mx=Ex();const wx=Mv(Mx);var $d=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Tv=/^[\\/]{2}/;function Tx(i,e){return e+i.replace(/\\/g,"/")}var Qm="popstate";function eg(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function Rx(i={}){function e(s,a){let l=a.state?.masked,{pathname:c,search:f,hash:d}=l||s.location;return id("",{pathname:c,search:f,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default",l?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function t(s,a){return typeof a=="string"?a:go(a)}return Cx(e,t,null,i)}function Xt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Vi(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ax(){return Math.random().toString(36).substring(2,10)}function tg(i,e){return{usr:i.state,key:i.key,idx:e,masked:i.mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function id(i,e,t=null,s,a){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?xa(e):e,state:t,key:e&&e.key||s||Ax(),mask:a}}function go({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function xa(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function Cx(i,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,f="POP",d=null,p=m();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function m(){return(c.state||{idx:null}).idx}function v(){f="POP";let y=m(),x=y==null?null:y-p;p=y,d&&d({action:f,location:M.location,delta:x})}function _(y,x){f="PUSH";let L=eg(y)?y:id(M.location,y,x);p=m()+1;let P=tg(L,p),C=M.createHref(L.mask||L);try{c.pushState(P,"",C)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;a.location.assign(C)}l&&d&&d({action:f,location:M.location,delta:1})}function S(y,x){f="REPLACE";let L=eg(y)?y:id(M.location,y,x);p=m();let P=tg(L,p),C=M.createHref(L.mask||L);c.replaceState(P,"",C),l&&d&&d({action:f,location:M.location,delta:0})}function E(y){return bx(a,y)}let M={get action(){return f},get location(){return i(a,c)},listen(y){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(Qm,v),d=y,()=>{a.removeEventListener(Qm,v),d=null}},createHref(y){return e(a,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:S,go(y){return c.go(y)}};return M}function bx(i,e,t=!1){let s="http://localhost";i&&(s=i.location.origin!=="null"?i.location.origin:i.location.href),Xt(s,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:go(e);return a=a.replace(/ $/,"%20"),!t&&Tv.test(a)&&(a=s+a),new URL(a,s)}function Rv(i,e,t="/"){return Px(i,e,t,!1)}function Px(i,e,t,s,a){let l=typeof e=="string"?xa(e):e,c=fr(l.pathname||"/",t);if(c==null)return null;let f=Lx(i),d=null,p=Vx(c);for(let m=0;d==null&&m<f.length;++m)d=Hx(f[m],p,s);return d}function Lx(i){let e=Av(i);return Dx(e),e}function Av(i,e=[],t=[],s="",a=!1){let l=(c,f,d=a,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(s)&&d)return;Xt(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length)}let v=Ri([s,m.relativePath]),_=t.concat(m);c.children&&c.children.length>0&&(Xt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Av(c.children,e,_,v,d)),!(c.path==null&&!c.index)&&e.push({path:v,score:Bx(v,c.index),routesMeta:_.map((S,E)=>{let[M,y]=Pv(S.relativePath,S.caseSensitive,E===_.length-1);return{...S,matcher:M,compiledParams:y}})})};return i.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let d of Cv(c.path))l(c,f,!0,d)}),e}function Cv(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=Cv(s.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),a&&f.push(...c),f.map(d=>i.startsWith("/")&&d===""?"/":d)}function Dx(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:zx(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Nx=/^:[\w-]+$/,Ux=3,Ix=2,Fx=1,Ox=10,kx=-2,ng=i=>i==="*";function Bx(i,e){let t=i.split("/"),s=t.length;return t.some(ng)&&(s+=kx),e&&(s+=Ix),t.filter(a=>!ng(a)).reduce((a,l)=>a+(Nx.test(l)?Ux:l===""?Fx:Ox),s)}function zx(i,e){return i.length===e.length&&i.slice(0,-1).every((s,a)=>s===e[a])?i[i.length-1]-e[e.length-1]:0}function Hx(i,e,t=!1){let{routesMeta:s}=i,a={},l="/",c=[];for(let f=0;f<s.length;++f){let d=s[f],p=f===s.length-1,m=l==="/"?e:e.slice(l.length)||"/",v={path:d.relativePath,caseSensitive:d.caseSensitive,end:p},_=d.matcher&&d.compiledParams?bv(v,m,d.matcher,d.compiledParams):yu(v,m),S=d.route;if(!_&&p&&t&&!s[s.length-1].route.index&&(_=yu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!_)return null;Object.assign(a,_.params),c.push({params:a,pathname:Ri([l,_.pathname]),pathnameBase:Xx(Ri([l,_.pathnameBase])),route:S}),_.pathnameBase!=="/"&&(l=Ri([l,_.pathnameBase]))}return c}function yu(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=Pv(i.path,i.caseSensitive,i.end);return bv(i,e,t,s)}function bv(i,e,t,s){let a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:s.reduce((p,{paramName:m,isOptional:v},_)=>{if(m==="*"){let E=f[_]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[_];return v&&!S?p[m]=void 0:p[m]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:i}}function Pv(i,e=!1,t=!0){Vi(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d,p,m)=>{if(s.push({paramName:f,isOptional:d!=null}),d){let v=m.charAt(p+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(s.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function Vx(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vi(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function fr(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}function Gx(i,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof i=="string"?xa(i):i,l;return t?(t=Dv(t),t.startsWith("/")?l=ig(t.substring(1),"/"):l=ig(t,e)):l=e,{pathname:l,search:jx(s),hash:$x(a)}}function ig(i,e){let t=Su(e).split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function _f(i,e,t,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wx(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Lv(i){let e=Wx(i);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Yd(i,e,t,s=!1){let a;typeof i=="string"?a=xa(i):(a={...i},Xt(!a.pathname||!a.pathname.includes("?"),_f("?","pathname","search",a)),Xt(!a.pathname||!a.pathname.includes("#"),_f("#","pathname","hash",a)),Xt(!a.search||!a.search.includes("#"),_f("#","search","hash",a)));let l=i===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let v=e.length-1;if(!s&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),v-=1;a.pathname=_.join("/")}f=v>=0?e[v]:"/"}let d=Gx(a,f),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(p||m)&&(d.pathname+="/"),d}var Dv=i=>i.replace(/[\\/]{2,}/g,"/"),Ri=i=>Dv(i.join("/")),Su=i=>i.replace(/\/+$/,""),Xx=i=>Su(i).replace(/^\/*/,"/"),jx=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,$x=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Yx=class{constructor(i,e,t,s=!1){this.status=i,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function qx(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function Kx(i){let e=i.map(t=>t.route.path).filter(Boolean);return Ri(e)||"/"}var Nv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Uv(i,e){let t=i;if(typeof t!="string"||!$d.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,a=!1;if(Nv)try{let l=new URL(window.location.href),c=Tv.test(t)?new URL(Tx(t,l.protocol)):new URL(t),f=fr(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:a=!0}catch{Vi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Iv=["POST","PUT","PATCH","DELETE"];new Set(Iv);var Zx=["GET",...Iv];new Set(Zx);var Jx=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Qx(i){try{return Jx.includes(new URL(i).protocol)}catch{return!1}}var ya=z.createContext(null);ya.displayName="DataRouter";var Ru=z.createContext(null);Ru.displayName="DataRouterState";var Fv=z.createContext(!1);function ey(){return z.useContext(Fv)}var Ov=z.createContext({isTransitioning:!1});Ov.displayName="ViewTransition";var ty=z.createContext(new Map);ty.displayName="Fetchers";var ny=z.createContext(null);ny.displayName="Await";var fi=z.createContext(null);fi.displayName="Navigation";var To=z.createContext(null);To.displayName="Location";var dr=z.createContext({outlet:null,matches:[],isDataRoute:!1});dr.displayName="Route";var qd=z.createContext(null);qd.displayName="RouteError";var kv="REACT_ROUTER_ERROR",iy="REDIRECT",ry="ROUTE_ERROR_RESPONSE";function sy(i){if(i.startsWith(`${kv}:${iy}:{`))try{let e=JSON.parse(i.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function ay(i){if(i.startsWith(`${kv}:${ry}:{`))try{let e=JSON.parse(i.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Yx(e.status,e.statusText,e.data)}catch{}}function oy(i,{relative:e}={}){Xt(Ro(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=z.useContext(fi),{hash:a,pathname:l,search:c}=Ao(i,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Ri([t,l])),s.createHref({pathname:f,search:c,hash:a})}function Ro(){return z.useContext(To)!=null}function hr(){return Xt(Ro(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(To).location}var Bv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zv(i){z.useContext(fi).static||z.useLayoutEffect(i)}function ly(){let{isDataRoute:i}=z.useContext(dr);return i?Sy():uy()}function uy(){Xt(Ro(),"useNavigate() may be used only in the context of a <Router> component.");let i=z.useContext(ya),{basename:e,navigator:t}=z.useContext(fi),{matches:s}=z.useContext(dr),{pathname:a}=hr(),l=JSON.stringify(Lv(s)),c=z.useRef(!1);return zv(()=>{c.current=!0}),z.useCallback((d,p={})=>{if(Vi(c.current,Bv),!c.current)return;if(typeof d=="number"){t.go(d);return}let m=Yd(d,JSON.parse(l),a,p.relative==="path");i==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Ri([e,m.pathname])),(p.replace?t.replace:t.push)(m,p.state,p)},[e,t,l,a,i])}z.createContext(null);function Ao(i,{relative:e}={}){let{matches:t}=z.useContext(dr),{pathname:s}=hr(),a=JSON.stringify(Lv(t));return z.useMemo(()=>Yd(i,JSON.parse(a),s,e==="path"),[i,a,s,e])}function cy(i,e){return Hv(i,e)}function Hv(i,e,t){Xt(Ro(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=z.useContext(fi),{matches:a}=z.useContext(dr),l=a[a.length-1],c=l?l.params:{},f=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let y=p&&p.path||"";Gv(f,!p||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let m=hr(),v;if(e){let y=typeof e=="string"?xa(e):e;Xt(d==="/"||y.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${y.pathname}" was given in the \`location\` prop.`),v=y}else v=m;let _=v.pathname||"/",S=_;if(d!=="/"){let y=d.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(y.length).join("/")}let E=t&&t.state.matches.length?t.state.matches.map(y=>Object.assign(y,{route:t.manifest[y.route.id]||y.route})):Rv(i,{pathname:S});Vi(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Vi(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=my(E&&E.map(y=>Object.assign({},y,{params:Object.assign({},c,y.params),pathname:Ri([d,s.encodeLocation?s.encodeLocation(y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:Ri([d,s.encodeLocation?s.encodeLocation(y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),a,t);return e&&M?z.createElement(To.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},M):M}function fy(){let i=yy(),e=qx(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",i),c=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:l},"ErrorBoundary")," or"," ",z.createElement("code",{style:l},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),t?z.createElement("pre",{style:a},t):null,c)}var dy=z.createElement(fy,null),Vv=class extends z.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){this.props.onError?this.props.onError(i,e):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const t=ay(i.digest);t&&(i=t)}let e=i!==void 0?z.createElement(dr.Provider,{value:this.props.routeContext},z.createElement(qd.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?z.createElement(hy,{error:i},e):e}};Vv.contextType=Fv;var xf=new WeakMap;function hy({children:i,error:e}){let{basename:t}=z.useContext(fi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=sy(e.digest);if(s){let a=xf.get(e);if(a)throw a;let l=Uv(s.location,t),c=l.absoluteURL||l.to;if(Qx(c))throw new Error("Invalid redirect location");if(Nv&&!xf.get(e))if(l.isExternal||s.reloadDocument)window.location.href=c;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw xf.set(e,f),f}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return i}function py({routeContext:i,match:e,children:t}){let s=z.useContext(ya);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),z.createElement(dr.Provider,{value:i},t)}function my(i,e=[],t){let s=t?.state;if(i==null){if(!s)return null;if(s.errors)i=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)i=s.matches;else return null}let a=i,l=s?.errors;if(l!=null){let m=a.findIndex(v=>v.route.id&&l?.[v.route.id]!==void 0);Xt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,f=-1;if(t&&s){c=s.renderFallback;for(let m=0;m<a.length;m++){let v=a[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=m),v.route.id){let{loaderData:_,errors:S}=s,E=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(c=!0),f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}}let d=t?.onError,p=s&&d?(m,v)=>{d(m,{location:s.location,params:s.matches?.[0]?.params??{},pattern:Kx(s.matches),errorInfo:v})}:void 0;return a.reduceRight((m,v,_)=>{let S,E=!1,M=null,y=null;s&&(S=l&&v.route.id?l[v.route.id]:void 0,M=v.route.errorElement||dy,c&&(f<0&&_===0?(Gv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):f===_&&(E=!0,y=v.route.hydrateFallbackElement||null)));let x=e.concat(a.slice(0,_+1)),L=()=>{let P;return S?P=M:E?P=y:v.route.Component?P=z.createElement(v.route.Component,null):v.route.element?P=v.route.element:P=m,z.createElement(py,{match:v,routeContext:{outlet:m,matches:x,isDataRoute:s!=null},children:P})};return s&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?z.createElement(Vv,{location:s.location,revalidation:s.revalidation,component:M,error:S,children:L(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:p}):L()},null)}function Kd(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gy(i){let e=z.useContext(ya);return Xt(e,Kd(i)),e}function vy(i){let e=z.useContext(Ru);return Xt(e,Kd(i)),e}function _y(i){let e=z.useContext(dr);return Xt(e,Kd(i)),e}function Zd(i){let e=_y(i),t=e.matches[e.matches.length-1];return Xt(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function xy(){return Zd("useRouteId")}function yy(){let i=z.useContext(qd),e=vy("useRouteError"),t=Zd("useRouteError");return i!==void 0?i:e.errors?.[t]}function Sy(){let{router:i}=gy("useNavigate"),e=Zd("useNavigate"),t=z.useRef(!1);return zv(()=>{t.current=!0}),z.useCallback(async(a,l={})=>{Vi(t.current,Bv),t.current&&(typeof a=="number"?await i.navigate(a):await i.navigate(a,{fromRouteId:e,...l}))},[i,e])}var rg={};function Gv(i,e,t){!e&&!rg[i]&&(rg[i]=!0,Vi(!1,t))}z.memo(Ey);function Ey({routes:i,manifest:e,future:t,state:s,isStatic:a,onError:l}){return Hv(i,void 0,{manifest:e,state:s,isStatic:a,onError:l})}function cu(i){Xt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function My({basename:i="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1,useTransitions:c}){Xt(!Ro(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=i.replace(/^\/*/,"/"),d=z.useMemo(()=>({basename:f,navigator:a,static:l,useTransitions:c,future:{}}),[f,a,l,c]);typeof t=="string"&&(t=xa(t));let{pathname:p="/",search:m="",hash:v="",state:_=null,key:S="default",mask:E}=t,M=z.useMemo(()=>{let y=fr(p,f);return y==null?null:{location:{pathname:y,search:m,hash:v,state:_,key:S,mask:E},navigationType:s}},[f,p,m,v,_,S,s,E]);return Vi(M!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:z.createElement(fi.Provider,{value:d},z.createElement(To.Provider,{children:e,value:M}))}function wy({children:i,location:e}){return cy(rd(i),e)}function rd(i,e=[]){let t=[];return z.Children.forEach(i,(s,a)=>{if(!z.isValidElement(s))return;let l=[...e,a];if(s.type===z.Fragment){t.push.apply(t,rd(s.props.children,l));return}Xt(s.type===cu,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=rd(s.props.children,l)),t.push(c)}),t}var fu="get",du="application/x-www-form-urlencoded";function Au(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function Ty(i){return Au(i)&&i.tagName.toLowerCase()==="button"}function Ry(i){return Au(i)&&i.tagName.toLowerCase()==="form"}function Ay(i){return Au(i)&&i.tagName.toLowerCase()==="input"}function Cy(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function by(i,e){return i.button===0&&(!e||e==="_self")&&!Cy(i)}var Fl=null;function Py(){if(Fl===null)try{new FormData(document.createElement("form"),0),Fl=!1}catch{Fl=!0}return Fl}var Ly=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yf(i){return i!=null&&!Ly.has(i)?(Vi(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${du}"`),null):i}function Dy(i,e){let t,s,a,l,c;if(Ry(i)){let f=i.getAttribute("action");s=f?fr(f,e):null,t=i.getAttribute("method")||fu,a=yf(i.getAttribute("enctype"))||du,l=new FormData(i)}else if(Ty(i)||Ay(i)&&(i.type==="submit"||i.type==="image")){let f=i.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=i.getAttribute("formaction")||f.getAttribute("action");if(s=d?fr(d,e):null,t=i.getAttribute("formmethod")||f.getAttribute("method")||fu,a=yf(i.getAttribute("formenctype"))||yf(f.getAttribute("enctype"))||du,l=new FormData(f,i),!Py()){let{name:p,type:m,value:v}=i;if(m==="image"){let _=p?`${p}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else p&&l.append(p,v)}}else{if(Au(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=fu,s=null,a=du,c=i}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Jd(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Wv(i,e,t,s){let a=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return t?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${s}`:a.pathname=`${a.pathname}.${s}`:a.pathname==="/"?a.pathname=`_root.${s}`:e&&fr(a.pathname,e)==="/"?a.pathname=`${Su(e)}/_root.${s}`:a.pathname=`${Su(a.pathname)}.${s}`,a}async function Ny(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Uy(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Iy(i,e,t){let s=await Promise.all(i.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await Ny(l,t);return c.links?c.links():[]}return[]}));return By(s.flat(1).filter(Uy).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function sg(i,e,t,s,a,l){let c=(d,p)=>t[p]?d.route.id!==t[p].route.id:!0,f=(d,p)=>t[p].pathname!==d.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==d.params["*"];return l==="assets"?e.filter((d,p)=>c(d,p)||f(d,p)):l==="data"?e.filter((d,p)=>{let m=s.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(c(d,p)||f(d,p))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Fy(i,e,{includeHydrateFallback:t}={}){return Oy(i.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function Oy(i){return[...new Set(i)]}function ky(i){let e={},t=Object.keys(i).sort();for(let s of t)e[s]=i[s];return e}function By(i,e){let t=new Set;return new Set(e),i.reduce((s,a)=>{let l=JSON.stringify(ky(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}function Qd(){let i=z.useContext(ya);return Jd(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function zy(){let i=z.useContext(Ru);return Jd(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var eh=z.createContext(void 0);eh.displayName="FrameworkContext";function Cu(){let i=z.useContext(eh);return Jd(i,"You must render this element inside a <HydratedRouter> element"),i}function Hy(i,e){let t=z.useContext(eh),[s,a]=z.useState(!1),[l,c]=z.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=e,_=z.useRef(null);z.useEffect(()=>{if(i==="render"&&c(!0),i==="viewport"){let M=x=>{x.forEach(L=>{c(L.isIntersecting)})},y=new IntersectionObserver(M,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[i]),z.useEffect(()=>{if(s){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[s]);let S=()=>{a(!0)},E=()=>{a(!1),c(!1)};return t?i!=="intent"?[l,_,{}]:[l,_,{onFocus:ro(f,S),onBlur:ro(d,E),onMouseEnter:ro(p,S),onMouseLeave:ro(m,E),onTouchStart:ro(v,S)}]:[!1,_,{}]}function ro(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function Vy({page:i,...e}){let t=ey(),{nonce:s}=Cu(),{router:a}=Qd(),l=z.useMemo(()=>Rv(a.routes,i,a.basename),[a.routes,i,a.basename]);return l?(e.nonce==null&&s&&(e={...e,nonce:s}),t?z.createElement(Wy,{page:i,matches:l,...e}):z.createElement(Xy,{page:i,matches:l,...e})):null}function Gy(i){let{manifest:e,routeModules:t}=Cu(),[s,a]=z.useState([]);return z.useEffect(()=>{let l=!1;return Iy(i,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[i,e,t]),s}function Wy({page:i,matches:e,...t}){let s=hr(),{future:a}=Cu(),{basename:l}=Qd(),c=z.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let f=Wv(i,l,a.v8_trailingSlashAwareDataRequests,"rsc"),d=!1,p=[];for(let m of e)typeof m.route.shouldRevalidate=="function"?d=!0:p.push(m.route.id);return d&&p.length>0&&f.searchParams.set("_routes",p.join(",")),[f.pathname+f.search]},[l,a.v8_trailingSlashAwareDataRequests,i,s,e]);return z.createElement(z.Fragment,null,c.map(f=>z.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...t})))}function Xy({page:i,matches:e,...t}){let s=hr(),{future:a,manifest:l,routeModules:c}=Cu(),{basename:f}=Qd(),{loaderData:d,matches:p}=zy(),m=z.useMemo(()=>sg(i,e,p,l,s,"data"),[i,e,p,l,s]),v=z.useMemo(()=>sg(i,e,p,l,s,"assets"),[i,e,p,l,s]),_=z.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let M=new Set,y=!1;if(e.forEach(L=>{let P=l.routes[L.route.id];!P||!P.hasLoader||(!m.some(C=>C.route.id===L.route.id)&&L.route.id in d&&c[L.route.id]?.shouldRevalidate||P.hasClientLoader?y=!0:M.add(L.route.id))}),M.size===0)return[];let x=Wv(i,f,a.v8_trailingSlashAwareDataRequests,"data");return y&&M.size>0&&x.searchParams.set("_routes",e.filter(L=>M.has(L.route.id)).map(L=>L.route.id).join(",")),[x.pathname+x.search]},[f,a.v8_trailingSlashAwareDataRequests,d,s,l,m,e,i,c]),S=z.useMemo(()=>Fy(v,l),[v,l]),E=Gy(v);return z.createElement(z.Fragment,null,_.map(M=>z.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...t})),S.map(M=>z.createElement("link",{key:M,rel:"modulepreload",href:M,...t})),E.map(({key:M,link:y})=>z.createElement("link",{key:M,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function jy(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var $y=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$y&&(window.__reactRouterVersion="7.18.2")}catch{}function Yy({basename:i,children:e,useTransitions:t,window:s}){let a=z.useRef();a.current==null&&(a.current=Rx({window:s,v5Compat:!0}));let l=a.current,[c,f]=z.useState({action:l.action,location:l.location}),d=z.useCallback(p=>{t===!1?f(p):z.startTransition(()=>f(p))},[t]);return z.useLayoutEffect(()=>l.listen(d),[l,d]),z.createElement(My,{basename:i,children:e,location:c.location,navigationType:c.action,navigator:l,useTransitions:t})}var th=z.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,mask:f,state:d,target:p,to:m,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:S,...E},M){let{basename:y,navigator:x,useTransitions:L}=z.useContext(fi),P=typeof m=="string"&&$d.test(m),C=Uv(m,y);m=C.to;let H=oy(m,{relative:a}),U=hr(),F=null;if(f){let he=Yd(f,[],U.mask?U.mask.pathname:"/",!0);y!=="/"&&(he.pathname=he.pathname==="/"?y:Ri([y,he.pathname])),F=x.createHref(he)}let[G,b,R]=Hy(s,E),V=Zy(m,{replace:c,mask:f,state:d,target:p,preventScrollReset:v,relative:a,viewTransition:_,defaultShouldRevalidate:S,useTransitions:L});function ae(he){e&&e(he),he.defaultPrevented||V(he)}let J=!(C.isExternal||l),le=z.createElement("a",{...E,...R,href:(J?F:void 0)||C.absoluteURL||H,onClick:J?ae:e,ref:jy(M,b),target:p,"data-discover":!P&&t==="render"?"true":void 0});return G&&!P?z.createElement(z.Fragment,null,le,z.createElement(Vy,{page:H})):le});th.displayName="Link";var sd=z.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:f,children:d,...p},m){let v=Ao(c,{relative:p.relative}),_=hr(),S=z.useContext(Ru),{navigator:E,basename:M}=z.useContext(fi),y=S!=null&&nS(v)&&f===!0,x=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,L=_.pathname,P=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(L=L.toLowerCase(),P=P?P.toLowerCase():null,x=x.toLowerCase()),P&&M&&(P=fr(P,M)||P);const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let H=L===x||!a&&L.startsWith(x)&&L.charAt(C)==="/",U=P!=null&&(P===x||!a&&P.startsWith(x)&&P.charAt(x.length)==="/"),F={isActive:H,isPending:U,isTransitioning:y},G=H?e:void 0,b;typeof s=="function"?b=s(F):b=[s,H?"active":null,U?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(F):l;return z.createElement(th,{...p,"aria-current":G,className:b,ref:m,style:R,to:c,viewTransition:f},typeof d=="function"?d(F):d)});sd.displayName="NavLink";var qy=z.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=fu,action:f,onSubmit:d,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:_,...S},E)=>{let{useTransitions:M}=z.useContext(fi),y=eS(),x=tS(f,{relative:p}),L=c.toLowerCase()==="get"?"get":"post",P=typeof f=="string"&&$d.test(f),C=H=>{if(d&&d(H),H.defaultPrevented)return;H.preventDefault();let U=H.nativeEvent.submitter,F=U?.getAttribute("formmethod")||c,G=()=>y(U||H.currentTarget,{fetcherKey:e,method:F,navigate:t,replace:a,state:l,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:_});M&&t!==!1?z.startTransition(()=>G()):G()};return z.createElement("form",{ref:E,method:L,action:x,onSubmit:s?d:C,...S,"data-discover":!P&&i==="render"?"true":void 0})});qy.displayName="Form";function Ky(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xv(i){let e=z.useContext(ya);return Xt(e,Ky(i)),e}function Zy(i,{target:e,replace:t,mask:s,state:a,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d,useTransitions:p}={}){let m=ly(),v=hr(),_=Ao(i,{relative:c});return z.useCallback(S=>{if(by(S,e)){S.preventDefault();let E=t!==void 0?t:go(v)===go(_),M=()=>m(i,{replace:E,mask:s,state:a,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d});p?z.startTransition(()=>M()):M()}},[v,m,_,t,s,a,e,i,l,c,f,d,p])}var Jy=0,Qy=()=>`__${String(++Jy)}__`;function eS(){let{router:i}=Xv("useSubmit"),{basename:e}=z.useContext(fi),t=xy(),s=i.fetch,a=i.navigate;return z.useCallback(async(l,c={})=>{let{action:f,method:d,encType:p,formData:m,body:v}=Dy(l,e);if(c.navigate===!1){let _=c.fetcherKey||Qy();await s(_,t,c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,flushSync:c.flushSync})}else await a(c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[s,a,e,t])}function tS(i,{relative:e}={}){let{basename:t}=z.useContext(fi),s=z.useContext(dr);Xt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...Ao(i||".",{relative:e})},c=hr();if(i==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(m=>m==="")){f.delete("index"),d.filter(v=>v).forEach(v=>f.append("index",v));let m=f.toString();l.search=m?`?${m}`:""}}return(!i||i===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ri([t,l.pathname])),go(l)}function nS(i,{relative:e}={}){let t=z.useContext(Ov);Xt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Xv("useViewTransitionState"),a=Ao(i,{relative:e});if(!t.isTransitioning)return!1;let l=fr(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=fr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return yu(a.pathname,c)!=null||yu(a.pathname,l)!=null}const nh="178",iS=0,ag=1,rS=2,jv=1,sS=2,rr=3,jr=0,Yn=1,Ii=2,Xr=0,ca=1,og=2,lg=3,ug=4,aS=5,gs=100,oS=101,lS=102,uS=103,cS=104,fS=200,dS=201,hS=202,pS=203,ad=204,od=205,mS=206,gS=207,vS=208,_S=209,xS=210,yS=211,SS=212,ES=213,MS=214,ld=0,ud=1,cd=2,ha=3,fd=4,dd=5,hd=6,pd=7,$v=0,wS=1,TS=2,ur=0,RS=1,AS=2,CS=3,bS=4,PS=5,LS=6,DS=7,Yv=300,pa=301,ma=302,md=303,gd=304,bu=306,vo=1e3,sr=1001,vd=1002,yn=1003,NS=1004,Ol=1005,Oi=1006,Sf=1007,_s=1008,Gi=1009,qv=1010,Kv=1011,_o=1012,ih=1013,ys=1014,ar=1015,Co=1016,rh=1017,sh=1018,xo=1020,Zv=35902,Jv=1021,Qv=1022,Ti=1023,yo=1026,So=1027,e_=1028,ah=1029,t_=1030,oh=1031,lh=1033,hu=33776,pu=33777,mu=33778,gu=33779,_d=35840,xd=35841,yd=35842,Sd=35843,Ed=36196,Md=37492,wd=37496,Td=37808,Rd=37809,Ad=37810,Cd=37811,bd=37812,Pd=37813,Ld=37814,Dd=37815,Nd=37816,Ud=37817,Id=37818,Fd=37819,Od=37820,kd=37821,vu=36492,Bd=36494,zd=36495,n_=36283,Hd=36284,Vd=36285,Gd=36286,US=3200,IS=3201,FS=0,OS=1,Gr="",On="srgb",ga="srgb-linear",Eu="linear",Ut="srgb",Xs=7680,cg=519,kS=512,BS=513,zS=514,i_=515,HS=516,VS=517,GS=518,WS=519,fg=35044,dg="300 es",or=2e3,Mu=2001;class Sa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hg=1234567;const ho=Math.PI/180,Eo=180/Math.PI;function Ea(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function uh(i,e){return(i%e+e)%e}function XS(i,e,t,s,a){return s+(i-e)*(a-s)/(t-e)}function jS(i,e,t){return i!==e?(t-i)/(e-i):0}function po(i,e,t){return(1-t)*i+t*e}function $S(i,e,t,s){return po(i,e,1-Math.exp(-t*s))}function YS(i,e=1){return e-Math.abs(uh(i,e*2)-e)}function qS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function KS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ZS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function JS(i,e){return i+Math.random()*(e-i)}function QS(i){return i*(.5-Math.random())}function eE(i){i!==void 0&&(hg=i);let e=hg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tE(i){return i*ho}function nE(i){return i*Eo}function iE(i){return(i&i-1)===0&&i!==0}function rE(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sE(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function aE(i,e,t,s,a){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),p=l((e+s)/2),m=c((e+s)/2),v=l((e-s)/2),_=c((e-s)/2),S=l((s-e)/2),E=c((s-e)/2);switch(a){case"XYX":i.set(f*m,d*v,d*_,f*p);break;case"YZY":i.set(d*_,f*m,d*v,f*p);break;case"ZXZ":i.set(d*v,d*_,f*m,f*p);break;case"XZX":i.set(f*m,d*E,d*S,f*p);break;case"YXY":i.set(d*S,f*m,d*E,f*p);break;case"ZYZ":i.set(d*E,d*S,f*m,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function oa(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const oE={DEG2RAD:ho,RAD2DEG:Eo,generateUUID:Ea,clamp:Et,euclideanModulo:uh,mapLinear:XS,inverseLerp:jS,lerp:po,damp:$S,pingpong:YS,smoothstep:qS,smootherstep:KS,randInt:ZS,randFloat:JS,randFloatSpread:QS,seededRandom:eE,degToRad:tE,radToDeg:nE,isPowerOfTwo:iE,ceilPowerOfTwo:rE,floorPowerOfTwo:sE,setQuaternionFromProperEuler:aE,normalize:In,denormalize:oa};class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bo{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let d=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];const _=l[c+0],S=l[c+1],E=l[c+2],M=l[c+3];if(f===0){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(f===1){e[t+0]=_,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(v!==M||d!==_||p!==S||m!==E){let y=1-f;const x=d*_+p*S+m*E+v*M,L=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const H=Math.sqrt(P),U=Math.atan2(H,x*L);y=Math.sin(y*U)/H,f=Math.sin(f*U)/H}const C=f*L;if(d=d*y+_*C,p=p*y+S*C,m=m*y+E*C,v=v*y+M*C,y===1-f){const H=1/Math.sqrt(d*d+p*p+m*m+v*v);d*=H,p*=H,m*=H,v*=H}}e[t]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],d=s[a+1],p=s[a+2],m=s[a+3],v=l[c],_=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+m*v+d*S-p*_,e[t+1]=d*E+m*_+p*v-f*S,e[t+2]=p*E+m*S+f*_-d*v,e[t+3]=m*E-f*v-d*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,p=f(s/2),m=f(a/2),v=f(l/2),_=d(s/2),S=d(a/2),E=d(l/2);switch(c){case"XYZ":this._x=_*m*v+p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v-_*S*E;break;case"YXZ":this._x=_*m*v+p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v+_*S*E;break;case"ZXY":this._x=_*m*v-p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v-_*S*E;break;case"ZYX":this._x=_*m*v-p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v+_*S*E;break;case"YZX":this._x=_*m*v+p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v-_*S*E;break;case"XZY":this._x=_*m*v-p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],d=t[9],p=t[2],m=t[6],v=t[10],_=s+f+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(s>f&&s>v){const S=2*Math.sqrt(1+s-f-v);this._w=(m-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-s-v);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+v-s-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,d=t._y,p=t._z,m=t._w;return this._x=s*m+c*f+a*p-l*d,this._y=a*m+c*d+l*f-s*p,this._z=l*m+c*p+s*d-a*f,this._w=c*m-s*f-a*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),v=Math.sin((1-t)*m)/p,_=Math.sin(t*m)/p;return this._w=c*v+this._w*_,this._x=s*v+this._x*_,this._y=a*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,s=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,d=e.w,p=2*(c*a-f*s),m=2*(f*t-l*a),v=2*(l*s-c*t);return this.x=t+d*p+c*v-f*m,this.y=s+d*m+f*p-l*v,this.z=a+d*v+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=a*d-l*f,this.y=l*c-s*d,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ef.copy(this).projectOnVector(e),this.sub(Ef)}reflect(e){return this.sub(Ef.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ef=new ne,pg=new bo;class ht{constructor(e,t,s,a,l,c,f,d,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,p)}set(e,t,s,a,l,c,f,d,p){const m=this.elements;return m[0]=e,m[1]=a,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=s,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],d=s[6],p=s[1],m=s[4],v=s[7],_=s[2],S=s[5],E=s[8],M=a[0],y=a[3],x=a[6],L=a[1],P=a[4],C=a[7],H=a[2],U=a[5],F=a[8];return l[0]=c*M+f*L+d*H,l[3]=c*y+f*P+d*U,l[6]=c*x+f*C+d*F,l[1]=p*M+m*L+v*H,l[4]=p*y+m*P+v*U,l[7]=p*x+m*C+v*F,l[2]=_*M+S*L+E*H,l[5]=_*y+S*P+E*U,l[8]=_*x+S*C+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8];return t*c*m-t*f*p-s*l*m+s*f*d+a*l*p-a*c*d}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=m*c-f*p,_=f*d-m*l,S=p*l-c*d,E=t*v+s*_+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=v*M,e[1]=(a*p-m*s)*M,e[2]=(f*s-a*c)*M,e[3]=_*M,e[4]=(m*t-a*d)*M,e[5]=(a*l-f*t)*M,e[6]=S*M,e[7]=(s*d-p*t)*M,e[8]=(c*t-s*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(s*d,s*p,-s*(d*c+p*f)+c+e,-a*p,a*d,-a*(-p*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Mf.makeScale(e,t)),this}rotate(e){return this.premultiply(Mf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mf=new ht;function r_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lE(){const i=Mo("canvas");return i.style.display="block",i}const mg={};function fa(i){i in mg||(mg[i]=!0,console.warn(i))}function uE(i,e,t){return new Promise(function(s,a){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function cE(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fE(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gg=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vg=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dE(){const i={enabled:!0,workingColorSpace:ga,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ut&&(a.r=cr(a.r),a.g=cr(a.g),a.b=cr(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(a.r=da(a.r),a.g=da(a.g),a.b=da(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Gr?Eu:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return fa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return fa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[ga]:{primaries:e,whitePoint:s,transfer:Eu,toXYZ:gg,fromXYZ:vg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:s,transfer:Ut,toXYZ:gg,fromXYZ:vg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),i}const At=dE();function cr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function da(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let js;class hE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{js===void 0&&(js=Mo("canvas")),js.width=e.width,js.height=e.height;const a=js.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=js}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mo("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=cr(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(cr(t[s]/255)*255):t[s]=cr(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pE=0;class ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Ea(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(wf(a[c].image)):l.push(wf(a[c]))}else l=wf(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function wf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mE=0;const Tf=new ne;class Bn extends Sa{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,s=sr,a=sr,l=Oi,c=_s,f=Ti,d=Gi,p=Bn.DEFAULT_ANISOTROPY,m=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Ea(),this.name="",this.source=new ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tf).x}get height(){return this.source.getSize(Tf).y}get depth(){return this.source.getSize(Tf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Yv;Bn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,s=0,a=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const d=e.elements,p=d[0],m=d[4],v=d[8],_=d[1],S=d[5],E=d[9],M=d[2],y=d[6],x=d[10];if(Math.abs(m-_)<.01&&Math.abs(v-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+M)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,C=(S+1)/2,H=(x+1)/2,U=(m+_)/4,F=(v+M)/4,G=(E+y)/4;return P>C&&P>H?P<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(P),a=U/s,l=F/s):C>H?C<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),s=U/a,l=G/a):H<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(H),s=F/l,a=G/l),this.set(s,a,l,t),this}let L=Math.sqrt((y-E)*(y-E)+(v-M)*(v-M)+(_-m)*(_-m));return Math.abs(L)<.001&&(L=1),this.x=(y-E)/L,this.y=(v-M)/L,this.z=(_-m)/L,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gE extends Sa{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const a={width:e,height:t,depth:s.depth},l=new Bn(a);this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Oi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new ch(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends gE{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class s_ extends Bn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vE extends Bn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Si):Si.fromBufferAttribute(l,c),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),kl.copy(s.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),Bl.subVectors(this.max,so),$s.subVectors(e.a,so),Ys.subVectors(e.b,so),qs.subVectors(e.c,so),Fr.subVectors(Ys,$s),Or.subVectors(qs,Ys),ls.subVectors($s,qs);let t=[0,-Fr.z,Fr.y,0,-Or.z,Or.y,0,-ls.z,ls.y,Fr.z,0,-Fr.x,Or.z,0,-Or.x,ls.z,0,-ls.x,-Fr.y,Fr.x,0,-Or.y,Or.x,0,-ls.y,ls.x,0];return!Rf(t,$s,Ys,qs,Bl)||(t=[1,0,0,0,1,0,0,0,1],!Rf(t,$s,Ys,qs,Bl))?!1:(zl.crossVectors(Fr,Or),t=[zl.x,zl.y,zl.z],Rf(t,$s,Ys,qs,Bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Si=new ne,kl=new Po,$s=new ne,Ys=new ne,qs=new ne,Fr=new ne,Or=new ne,ls=new ne,so=new ne,Bl=new ne,zl=new ne,us=new ne;function Rf(i,e,t,s,a){for(let l=0,c=i.length-3;l<=c;l+=3){us.fromArray(i,l);const f=a.x*Math.abs(us.x)+a.y*Math.abs(us.y)+a.z*Math.abs(us.z),d=e.dot(us),p=t.dot(us),m=s.dot(us);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const _E=new Po,ao=new ne,Af=new ne;class fh{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):_E.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);const t=ao.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(ao,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(Af)),this.expandByPoint(ao.copy(e.center).sub(Af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const er=new ne,Cf=new ne,Hl=new ne,kr=new ne,bf=new ne,Vl=new ne,Pf=new ne;class xE{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Cf.copy(e).add(t).multiplyScalar(.5),Hl.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(Cf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Hl),f=kr.dot(this.direction),d=-kr.dot(Hl),p=kr.lengthSq(),m=Math.abs(1-c*c);let v,_,S,E;if(m>0)if(v=c*d-f,_=c*f-d,E=l*m,v>=0)if(_>=-E)if(_<=E){const M=1/m;v*=M,_*=M,S=v*(v+c*_+2*f)+_*(c*v+_+2*d)+p}else _=l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;else _=-l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;else _<=-E?(v=Math.max(0,-(-c*l+f)),_=v>0?-l:Math.min(Math.max(-l,-d),l),S=-v*v+_*(_+2*d)+p):_<=E?(v=0,_=Math.min(Math.max(-l,-d),l),S=_*(_+2*d)+p):(v=Math.max(0,-(c*l+f)),_=v>0?l:Math.min(Math.max(-l,-d),l),S=-v*v+_*(_+2*d)+p);else _=c>0?-l:l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Cf).addScaledVector(Hl,_),S}intersectSphere(e,t){er.subVectors(e.center,this.origin);const s=er.dot(this.direction),a=er.dot(er)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,d=s+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,d;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,a=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,a=(e.min.x-_.x)*p),m>=0?(l=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),v>=0?(f=(e.min.z-_.z)*v,d=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,d=(e.min.z-_.z)*v),s>d||f>a)||((f>s||s!==s)&&(s=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,s,a,l){bf.subVectors(t,e),Vl.subVectors(s,e),Pf.crossVectors(bf,Vl);let c=this.direction.dot(Pf),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;kr.subVectors(this.origin,e);const d=f*this.direction.dot(Vl.crossVectors(kr,Vl));if(d<0)return null;const p=f*this.direction.dot(bf.cross(kr));if(p<0||d+p>c)return null;const m=-f*kr.dot(Pf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,s,a,l,c,f,d,p,m,v,_,S,E,M,y){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,p,m,v,_,S,E,M,y)}set(e,t,s,a,l,c,f,d,p,m,v,_,S,E,M,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=a,x[1]=l,x[5]=c,x[9]=f,x[13]=d,x[2]=p,x[6]=m,x[10]=v,x[14]=_,x[3]=S,x[7]=E,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Ks.setFromMatrixColumn(e,0).length(),l=1/Ks.setFromMatrixColumn(e,1).length(),c=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),d=Math.cos(a),p=Math.sin(a),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=c*m,S=c*v,E=f*m,M=f*v;t[0]=d*m,t[4]=-d*v,t[8]=p,t[1]=S+E*p,t[5]=_-M*p,t[9]=-f*d,t[2]=M-_*p,t[6]=E+S*p,t[10]=c*d}else if(e.order==="YXZ"){const _=d*m,S=d*v,E=p*m,M=p*v;t[0]=_+M*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*m,t[9]=-f,t[2]=S*f-E,t[6]=M+_*f,t[10]=c*d}else if(e.order==="ZXY"){const _=d*m,S=d*v,E=p*m,M=p*v;t[0]=_-M*f,t[4]=-c*v,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*m,t[9]=M-_*f,t[2]=-c*p,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const _=c*m,S=c*v,E=f*m,M=f*v;t[0]=d*m,t[4]=E*p-S,t[8]=_*p+M,t[1]=d*v,t[5]=M*p+_,t[9]=S*p-E,t[2]=-p,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,S=c*p,E=f*d,M=f*p;t[0]=d*m,t[4]=M-_*v,t[8]=E*v+S,t[1]=v,t[5]=c*m,t[9]=-f*m,t[2]=-p*m,t[6]=S*v+E,t[10]=_-M*v}else if(e.order==="XZY"){const _=c*d,S=c*p,E=f*d,M=f*p;t[0]=d*m,t[4]=-v,t[8]=p*m,t[1]=_*v+M,t[5]=c*m,t[9]=S*v-E,t[2]=E*v-S,t[6]=f*m,t[10]=M*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yE,e,SE)}lookAt(e,t,s){const a=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Br.crossVectors(s,Qn),Br.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Br.crossVectors(s,Qn)),Br.normalize(),Gl.crossVectors(Qn,Br),a[0]=Br.x,a[4]=Gl.x,a[8]=Qn.x,a[1]=Br.y,a[5]=Gl.y,a[9]=Qn.y,a[2]=Br.z,a[6]=Gl.z,a[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],d=s[8],p=s[12],m=s[1],v=s[5],_=s[9],S=s[13],E=s[2],M=s[6],y=s[10],x=s[14],L=s[3],P=s[7],C=s[11],H=s[15],U=a[0],F=a[4],G=a[8],b=a[12],R=a[1],V=a[5],ae=a[9],J=a[13],le=a[2],he=a[6],ue=a[10],me=a[14],k=a[3],de=a[7],oe=a[11],I=a[15];return l[0]=c*U+f*R+d*le+p*k,l[4]=c*F+f*V+d*he+p*de,l[8]=c*G+f*ae+d*ue+p*oe,l[12]=c*b+f*J+d*me+p*I,l[1]=m*U+v*R+_*le+S*k,l[5]=m*F+v*V+_*he+S*de,l[9]=m*G+v*ae+_*ue+S*oe,l[13]=m*b+v*J+_*me+S*I,l[2]=E*U+M*R+y*le+x*k,l[6]=E*F+M*V+y*he+x*de,l[10]=E*G+M*ae+y*ue+x*oe,l[14]=E*b+M*J+y*me+x*I,l[3]=L*U+P*R+C*le+H*k,l[7]=L*F+P*V+C*he+H*de,l[11]=L*G+P*ae+C*ue+H*oe,l[15]=L*b+P*J+C*me+H*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],d=e[9],p=e[13],m=e[2],v=e[6],_=e[10],S=e[14],E=e[3],M=e[7],y=e[11],x=e[15];return E*(+l*d*v-a*p*v-l*f*_+s*p*_+a*f*S-s*d*S)+M*(+t*d*S-t*p*_+l*c*_-a*c*S+a*p*m-l*d*m)+y*(+t*p*v-t*f*S-l*c*v+s*c*S+l*f*m-s*p*m)+x*(-a*f*m-t*d*v+t*f*_+a*c*v-s*c*_+s*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=e[9],_=e[10],S=e[11],E=e[12],M=e[13],y=e[14],x=e[15],L=v*y*p-M*_*p+M*d*S-f*y*S-v*d*x+f*_*x,P=E*_*p-m*y*p-E*d*S+c*y*S+m*d*x-c*_*x,C=m*M*p-E*v*p+E*f*S-c*M*S-m*f*x+c*v*x,H=E*v*d-m*M*d-E*f*_+c*M*_+m*f*y-c*v*y,U=t*L+s*P+a*C+l*H;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/U;return e[0]=L*F,e[1]=(M*_*l-v*y*l-M*a*S+s*y*S+v*a*x-s*_*x)*F,e[2]=(f*y*l-M*d*l+M*a*p-s*y*p-f*a*x+s*d*x)*F,e[3]=(v*d*l-f*_*l-v*a*p+s*_*p+f*a*S-s*d*S)*F,e[4]=P*F,e[5]=(m*y*l-E*_*l+E*a*S-t*y*S-m*a*x+t*_*x)*F,e[6]=(E*d*l-c*y*l-E*a*p+t*y*p+c*a*x-t*d*x)*F,e[7]=(c*_*l-m*d*l+m*a*p-t*_*p-c*a*S+t*d*S)*F,e[8]=C*F,e[9]=(E*v*l-m*M*l-E*s*S+t*M*S+m*s*x-t*v*x)*F,e[10]=(c*M*l-E*f*l+E*s*p-t*M*p-c*s*x+t*f*x)*F,e[11]=(m*f*l-c*v*l-m*s*p+t*v*p+c*s*S-t*f*S)*F,e[12]=H*F,e[13]=(m*M*a-E*v*a+E*s*_-t*M*_-m*s*y+t*v*y)*F,e[14]=(E*f*a-c*M*a-E*s*d+t*M*d+c*s*y-t*f*y)*F,e[15]=(c*v*a-m*f*a+m*s*d-t*v*d-c*s*_+t*f*_)*F,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,d=e.z,p=l*c,m=l*f;return this.set(p*c+s,p*f-a*d,p*d+a*f,0,p*f+a*d,m*f+s,m*d-a*c,0,p*d-a*f,m*d+a*c,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,p=l+l,m=c+c,v=f+f,_=l*p,S=l*m,E=l*v,M=c*m,y=c*v,x=f*v,L=d*p,P=d*m,C=d*v,H=s.x,U=s.y,F=s.z;return a[0]=(1-(M+x))*H,a[1]=(S+C)*H,a[2]=(E-P)*H,a[3]=0,a[4]=(S-C)*U,a[5]=(1-(_+x))*U,a[6]=(y+L)*U,a[7]=0,a[8]=(E+P)*F,a[9]=(y-L)*F,a[10]=(1-(_+M))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Ks.set(a[0],a[1],a[2]).length();const c=Ks.set(a[4],a[5],a[6]).length(),f=Ks.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Ei.copy(this);const p=1/l,m=1/c,v=1/f;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=m,Ei.elements[5]*=m,Ei.elements[6]*=m,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,t.setFromRotationMatrix(Ei),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=or){const d=this.elements,p=2*l/(t-e),m=2*l/(s-a),v=(t+e)/(t-e),_=(s+a)/(s-a);let S,E;if(f===or)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Mu)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=or){const d=this.elements,p=1/(t-e),m=1/(s-a),v=1/(c-l),_=(t+e)*p,S=(s+a)*m;let E,M;if(f===or)E=(c+l)*v,M=-2*v;else if(f===Mu)E=l*v,M=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Ks=new ne,Ei=new Yt,yE=new ne(0,0,0),SE=new ne(1,1,1),Br=new ne,Gl=new ne,Qn=new ne,_g=new Yt,xg=new bo;class kn{constructor(e=0,t=0,s=0,a=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],d=a[1],p=a[5],m=a[9],v=a[2],_=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return _g.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_g,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xg.setFromEuler(this),this.setFromQuaternion(xg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class a_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EE=0;const yg=new ne,Zs=new bo,tr=new Yt,Wl=new ne,oo=new ne,ME=new ne,wE=new bo,Sg=new ne(1,0,0),Eg=new ne(0,1,0),Mg=new ne(0,0,1),wg={type:"added"},TE={type:"removed"},Js={type:"childadded",child:null},Lf={type:"childremoved",child:null};class Pn extends Sa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new ne,t=new kn,s=new bo,a=new ne(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ht}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new a_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(Sg,e)}rotateY(e){return this.rotateOnAxis(Eg,e)}rotateZ(e){return this.rotateOnAxis(Mg,e)}translateOnAxis(e,t){return yg.copy(e).applyQuaternion(this.quaternion),this.position.add(yg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sg,e)}translateY(e){return this.translateOnAxis(Eg,e)}translateZ(e){return this.translateOnAxis(Mg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Wl.copy(e):Wl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(oo,Wl,this.up):tr.lookAt(Wl,oo,this.up),this.quaternion.setFromRotationMatrix(tr),a&&(tr.extractRotation(a.matrixWorld),Zs.setFromRotationMatrix(tr),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wg),Js.child=e,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(TE),Lf.child=e,this.dispatchEvent(Lf),Lf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wg),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,ME),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,wE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const v=d[p];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),p=c(e.textures),m=c(e.images),v=c(e.shapes),_=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),d.length>0&&(s.materials=d),p.length>0&&(s.textures=p),m.length>0&&(s.images=m),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=a,s;function c(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Pn.DEFAULT_UP=new ne(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new ne,nr=new ne,Df=new ne,ir=new ne,Qs=new ne,ea=new ne,Tg=new ne,Nf=new ne,Uf=new ne,If=new ne,Ff=new $t,Of=new $t,kf=new $t;class wi{constructor(e=new ne,t=new ne,s=new ne){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),Mi.subVectors(e,t),a.cross(Mi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){Mi.subVectors(a,t),nr.subVectors(s,t),Df.subVectors(e,t);const c=Mi.dot(Mi),f=Mi.dot(nr),d=Mi.dot(Df),p=nr.dot(nr),m=nr.dot(Df),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,S=(p*d-f*m)*_,E=(c*m-f*d)*_;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,s,a,l,c,f,d){return this.getBarycoord(e,t,s,a,ir)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,ir.x),d.addScaledVector(c,ir.y),d.addScaledVector(f,ir.z),d)}static getInterpolatedAttribute(e,t,s,a,l,c){return Ff.setScalar(0),Of.setScalar(0),kf.setScalar(0),Ff.fromBufferAttribute(e,t),Of.fromBufferAttribute(e,s),kf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Ff,l.x),c.addScaledVector(Of,l.y),c.addScaledVector(kf,l.z),c}static isFrontFacing(e,t,s,a){return Mi.subVectors(s,t),nr.subVectors(e,t),Mi.cross(nr).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Mi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return wi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;Qs.subVectors(a,s),ea.subVectors(l,s),Nf.subVectors(e,s);const d=Qs.dot(Nf),p=ea.dot(Nf);if(d<=0&&p<=0)return t.copy(s);Uf.subVectors(e,a);const m=Qs.dot(Uf),v=ea.dot(Uf);if(m>=0&&v<=m)return t.copy(a);const _=d*v-m*p;if(_<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(s).addScaledVector(Qs,c);If.subVectors(e,l);const S=Qs.dot(If),E=ea.dot(If);if(E>=0&&S<=E)return t.copy(l);const M=S*p-d*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(ea,f);const y=m*E-S*v;if(y<=0&&v-m>=0&&S-E>=0)return Tg.subVectors(l,a),f=(v-m)/(v-m+(S-E)),t.copy(a).addScaledVector(Tg,f);const x=1/(y+M+_);return c=M*x,f=_*x,t.copy(s).addScaledVector(Qs,c).addScaledVector(ea,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const o_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},Xl={h:0,s:0,l:0};function Bf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Dt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,s,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=s,At.colorSpaceToWorking(this,a),this}setHSL(e,t,s,a=At.workingColorSpace){if(e=uh(e,1),t=Et(t,0,1),s=Et(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Bf(c,l,e+1/3),this.g=Bf(c,l,e),this.b=Bf(c,l,e-1/3)}return At.colorSpaceToWorking(this,a),this}setStyle(e,t=On){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){const s=o_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return At.workingToColorSpace(bn.copy(this),e),Math.round(Et(bn.r*255,0,255))*65536+Math.round(Et(bn.g*255,0,255))*256+Math.round(Et(bn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(bn.copy(this),t);const s=bn.r,a=bn.g,l=bn.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let d,p;const m=(f+c)/2;if(f===c)d=0,p=0;else{const v=c-f;switch(p=m<=.5?v/(c+f):v/(2-c-f),c){case s:d=(a-l)/v+(a<l?6:0);break;case a:d=(l-s)/v+2;break;case l:d=(s-a)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=m,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=On){At.workingToColorSpace(bn.copy(this),e);const t=bn.r,s=bn.g,a=bn.b;return e!==On?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(Xl);const s=po(zr.h,Xl.h,t),a=po(zr.s,Xl.s,t),l=po(zr.l,Xl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Dt;Dt.NAMES=o_;let RE=0;class Pu extends Sa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Ea(),this.name="",this.type="Material",this.blending=ca,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=od,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ca&&(s.blending=this.blending),this.side!==jr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ad&&(s.blendSrc=this.blendSrc),this.blendDst!==od&&(s.blendDst=this.blendDst),this.blendEquation!==gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ha&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dh extends Pu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=$v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new ne,jl=new bt;let AE=0;class Hi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=fg,this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)jl.fromBufferAttribute(this,t),jl.applyMatrix3(e),this.setXY(t,jl.x,jl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=oa(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=In(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oa(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oa(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oa(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array),a=In(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array),a=In(a,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fg&&(e.usage=this.usage),e}}class l_ extends Hi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class u_ extends Hi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class xs extends Hi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let CE=0;const oi=new Yt,zf=new Pn,ta=new ne,ei=new Po,lo=new Po,mn=new ne;class Es extends Sa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r_(e)?u_:l_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ht().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,s){return oi.makeTranslation(e,t,s),this.applyMatrix4(oi),this}scale(e,t,s){return oi.makeScale(e,t,s),this.applyMatrix4(oi),this}lookAt(e){return zf.lookAt(e),zf.updateMatrix(),this.applyMatrix4(zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ta).negate(),this.translate(ta.x,ta.y,ta.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new xs(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];lo.setFromBufferAttribute(f),this.morphTargetsRelative?(mn.addVectors(ei.min,lo.min),ei.expandByPoint(mn),mn.addVectors(ei.max,lo.max),ei.expandByPoint(mn)):(ei.expandByPoint(lo.min),ei.expandByPoint(lo.max))}ei.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)mn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(mn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)mn.fromBufferAttribute(f,p),d&&(ta.fromBufferAttribute(e,p),mn.add(ta)),a=Math.max(a,s.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let G=0;G<s.count;G++)f[G]=new ne,d[G]=new ne;const p=new ne,m=new ne,v=new ne,_=new bt,S=new bt,E=new bt,M=new ne,y=new ne;function x(G,b,R){p.fromBufferAttribute(s,G),m.fromBufferAttribute(s,b),v.fromBufferAttribute(s,R),_.fromBufferAttribute(l,G),S.fromBufferAttribute(l,b),E.fromBufferAttribute(l,R),m.sub(p),v.sub(p),S.sub(_),E.sub(_);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(V),y.copy(v).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(V),f[G].add(M),f[b].add(M),f[R].add(M),d[G].add(y),d[b].add(y),d[R].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let G=0,b=L.length;G<b;++G){const R=L[G],V=R.start,ae=R.count;for(let J=V,le=V+ae;J<le;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const P=new ne,C=new ne,H=new ne,U=new ne;function F(G){H.fromBufferAttribute(a,G),U.copy(H);const b=f[G];P.copy(b),P.sub(H.multiplyScalar(H.dot(b))).normalize(),C.crossVectors(U,b);const V=C.dot(d[G])<0?-1:1;c.setXYZW(G,P.x,P.y,P.z,V)}for(let G=0,b=L.length;G<b;++G){const R=L[G],V=R.start,ae=R.count;for(let J=V,le=V+ae;J<le;J+=3)F(e.getX(J+0)),F(e.getX(J+1)),F(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Hi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const a=new ne,l=new ne,c=new ne,f=new ne,d=new ne,p=new ne,m=new ne,v=new ne;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),M=e.getX(_+1),y=e.getX(_+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,y),m.subVectors(c,l),v.subVectors(a,l),m.cross(v),f.fromBufferAttribute(s,E),d.fromBufferAttribute(s,M),p.fromBufferAttribute(s,y),f.add(m),d.add(m),p.add(m),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,l),v.subVectors(a,l),m.cross(v),s.setXYZ(_+0,m.x,m.y,m.z),s.setXYZ(_+1,m.x,m.y,m.z),s.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(f,d){const p=f.array,m=f.itemSize,v=f.normalized,_=new p.constructor(d.length*m);let S=0,E=0;for(let M=0,y=d.length;M<y;M++){f.isInterleavedBufferAttribute?S=d[M]*f.data.stride+f.offset:S=d[M]*m;for(let x=0;x<m;x++)_[E++]=p[S++]}return new Hi(_,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Es,s=this.index.array,a=this.attributes;for(const f in a){const d=a[f],p=e(d,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,v=p.length;m<v;m++){const _=p[m],S=e(_,s);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const p=s[d];e.data.attributes[d]=p.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let v=0,_=p.length;v<_;v++){const S=p[v];m.push(S.toJSON(e.data))}m.length>0&&(a[d]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],v=l[p];for(let _=0,S=v.length;_<S;_++)m.push(v[_].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rg=new Yt,cs=new xE,$l=new fh,Ag=new ne,Yl=new ne,ql=new ne,Kl=new ne,Hf=new ne,Zl=new ne,Cg=new ne,Jl=new ne;class ki extends Pn{constructor(e=new Es,t=new dh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Zl.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],v=l[d];m!==0&&(Hf.fromBufferAttribute(v,e),c?Zl.addScaledVector(Hf,m):Zl.addScaledVector(Hf.sub(t),m))}t.add(Zl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),$l.copy(s.boundingSphere),$l.applyMatrix4(l),cs.copy(e.ray).recast(e.near),!($l.containsPoint(cs.origin)===!1&&(cs.intersectSphere($l,Ag)===null||cs.origin.distanceToSquared(Ag)>(e.far-e.near)**2))&&(Rg.copy(l).invert(),cs.copy(e.ray).applyMatrix4(Rg),!(s.boundingBox!==null&&cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=_.length;E<M;E++){const y=_[E],x=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,H=P;C<H;C+=3){const U=f.getX(C),F=f.getX(C+1),G=f.getX(C+2);a=Ql(this,x,e,s,p,m,v,U,F,G),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const L=f.getX(y),P=f.getX(y+1),C=f.getX(y+2);a=Ql(this,c,e,s,p,m,v,L,P,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,M=_.length;E<M;E++){const y=_[E],x=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,H=P;C<H;C+=3){const U=C,F=C+1,G=C+2;a=Ql(this,x,e,s,p,m,v,U,F,G),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const L=y,P=y+1,C=y+2;a=Ql(this,c,e,s,p,m,v,L,P,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function bE(i,e,t,s,a,l,c,f){let d;if(e.side===Yn?d=s.intersectTriangle(c,l,a,!0,f):d=s.intersectTriangle(a,l,c,e.side===jr,f),d===null)return null;Jl.copy(f),Jl.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Jl);return p<t.near||p>t.far?null:{distance:p,point:Jl.clone(),object:i}}function Ql(i,e,t,s,a,l,c,f,d,p){i.getVertexPosition(f,Yl),i.getVertexPosition(d,ql),i.getVertexPosition(p,Kl);const m=bE(i,e,t,s,Yl,ql,Kl,Cg);if(m){const v=new ne;wi.getBarycoord(Cg,Yl,ql,Kl,v),a&&(m.uv=wi.getInterpolatedAttribute(a,f,d,p,v,new bt)),l&&(m.uv1=wi.getInterpolatedAttribute(l,f,d,p,v,new bt)),c&&(m.normal=wi.getInterpolatedAttribute(c,f,d,p,v,new ne),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:d,c:p,normal:new ne,materialIndex:0};wi.getNormal(Yl,ql,Kl,_.normal),m.face=_,m.barycoord=v}return m}class Ma extends Es{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],m=[],v=[];let _=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,a,c,2),E("x","z","y",1,-1,e,s,-t,a,c,3),E("x","y","z",1,-1,e,t,s,a,l,4),E("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(d),this.setAttribute("position",new xs(p,3)),this.setAttribute("normal",new xs(m,3)),this.setAttribute("uv",new xs(v,2));function E(M,y,x,L,P,C,H,U,F,G,b){const R=C/F,V=H/G,ae=C/2,J=H/2,le=U/2,he=F+1,ue=G+1;let me=0,k=0;const de=new ne;for(let oe=0;oe<ue;oe++){const I=oe*V-J;for(let re=0;re<he;re++){const Fe=re*R-ae;de[M]=Fe*L,de[y]=I*P,de[x]=le,p.push(de.x,de.y,de.z),de[M]=0,de[y]=0,de[x]=U>0?1:-1,m.push(de.x,de.y,de.z),v.push(re/F),v.push(1-oe/G),me+=1}}for(let oe=0;oe<G;oe++)for(let I=0;I<F;I++){const re=_+I+he*oe,Fe=_+I+he*(oe+1),te=_+(I+1)+he*(oe+1),ge=_+(I+1)+he*oe;d.push(re,Fe,ge),d.push(Fe,te,ge),k+=6}f.addGroup(S,k,b),S+=k,_+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function va(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const a=i[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Fn(i){const e={};for(let t=0;t<i.length;t++){const s=va(i[t]);for(const a in s)e[a]=s[a]}return e}function PE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function c_(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const LE={clone:va,merge:Fn};var DE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $r extends Pu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DE,this.fragmentShader=NE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=va(e.uniforms),this.uniformsGroups=PE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class f_ extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new ne,bg=new bt,Pg=new bt;class ci extends f_{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,bg,Pg),t.subVectors(Pg,bg)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ho*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/d,t-=c.offsetY*s/p,a*=c.width/d,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const na=-90,ia=1;class UE extends Pn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ci(na,ia,e,t);a.layers=this.layers,this.add(a);const l=new ci(na,ia,e,t);l.layers=this.layers,this.add(l);const c=new ci(na,ia,e,t);c.layers=this.layers,this.add(c);const f=new ci(na,ia,e,t);f.layers=this.layers,this.add(f);const d=new ci(na,ia,e,t);d.layers=this.layers,this.add(d);const p=new ci(na,ia,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,d]=t;for(const p of t)this.remove(p);if(e===or)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Mu)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,m]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,d),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=M,e.setRenderTarget(s,5,a),e.render(t,m),e.setRenderTarget(v,_,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class d_ extends Bn{constructor(e=[],t=pa,s,a,l,c,f,d,p,m){super(e,t,s,a,l,c,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IE extends Ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new d_(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ma(5,5,5),l=new $r({name:"CubemapFromEquirect",uniforms:va(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:Xr});l.uniforms.tEquirect.value=t;const c=new ki(a,l),f=t.minFilter;return t.minFilter===_s&&(t.minFilter=Oi),new UE(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}class uo extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FE={type:"move"};class Vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,s),x=this._getHandJoint(p,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=m.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(FE)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new uo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class OE extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gf=new ne,kE=new ne,BE=new ht;class ps{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Gf.subVectors(s,t).cross(kE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Gf),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||BE.getNormalMatrix(e),a=this.coplanarPoint(Gf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new fh,zE=new bt(.5,.5),eu=new ne;class hh{constructor(e=new ps,t=new ps,s=new ps,a=new ps,l=new ps,c=new ps){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=or){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],d=a[3],p=a[4],m=a[5],v=a[6],_=a[7],S=a[8],E=a[9],M=a[10],y=a[11],x=a[12],L=a[13],P=a[14],C=a[15];if(s[0].setComponents(d-l,_-p,y-S,C-x).normalize(),s[1].setComponents(d+l,_+p,y+S,C+x).normalize(),s[2].setComponents(d+c,_+m,y+E,C+L).normalize(),s[3].setComponents(d-c,_-m,y-E,C-L).normalize(),s[4].setComponents(d-f,_-v,y-M,C-P).normalize(),t===or)s[5].setComponents(d+f,_+v,y+M,C+P).normalize();else if(t===Mu)s[5].setComponents(f,v,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);const t=zE.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(eu.x=a.normal.x>0?e.max.x:e.min.x,eu.y=a.normal.y>0?e.max.y:e.min.y,eu.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(eu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class h_ extends Bn{constructor(e,t,s=ys,a,l,c,f=yn,d=yn,p,m=yo,v=1){if(m!==yo&&m!==So)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,a,l,c,f,d,m,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ch(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lu extends Es{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),d=Math.floor(a),p=f+1,m=d+1,v=e/f,_=t/d,S=[],E=[],M=[],y=[];for(let x=0;x<m;x++){const L=x*_-c;for(let P=0;P<p;P++){const C=P*v-l;E.push(C,-L,0),M.push(0,0,1),y.push(P/f),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let L=0;L<f;L++){const P=L+p*x,C=L+p*(x+1),H=L+1+p*(x+1),U=L+1+p*x;S.push(P,C,U),S.push(C,H,U)}this.setIndex(S),this.setAttribute("position",new xs(E,3)),this.setAttribute("normal",new xs(M,3)),this.setAttribute("uv",new xs(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.width,e.height,e.widthSegments,e.heightSegments)}}class HE extends Pu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=US,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VE extends Pu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wf={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class GE{constructor(e,t,s){const a=this;let l=!1,c=0,f=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){f++,l===!1&&a.onStart!==void 0&&a.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,v){return p.push(m,v),this},this.removeHandler=function(m){const v=p.indexOf(m);return v!==-1&&p.splice(v,2),this},this.getHandler=function(m){for(let v=0,_=p.length;v<_;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(m))return E}return null}}}const WE=new GE;class ph{constructor(e){this.manager=e!==void 0?e:WE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,l){s.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ph.DEFAULT_MATERIAL_NAME="__DEFAULT";const ra=new WeakMap;class XE extends ph{constructor(e){super(e)}load(e,t,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Wf.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let v=ra.get(c);v===void 0&&(v=[],ra.set(c,v)),v.push({onLoad:t,onError:a})}return c}const f=Mo("img");function d(){m(),t&&t(this);const v=ra.get(this)||[];for(let _=0;_<v.length;_++){const S=v[_];S.onLoad&&S.onLoad(this)}ra.delete(this),l.manager.itemEnd(e)}function p(v){m(),a&&a(v),Wf.remove(`image:${e}`);const _=ra.get(this)||[];for(let S=0;S<_.length;S++){const E=_[S];E.onError&&E.onError(v)}ra.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Wf.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class jE extends ph{constructor(e){super(e)}load(e,t,s,a){const l=new Bn,c=new XE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,a),l}}class $E extends Pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Xf=new Yt,Lg=new ne,Dg=new ne;class YE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hh,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Lg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lg),Dg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dg),t.updateMatrixWorld(),Xf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xf),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Xf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class p_ extends f_{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qE extends YE{constructor(){super(new p_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class KE extends $E{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new qE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ZE extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ng(i,e,t,s){const a=JE(s);switch(t){case Jv:return i*e;case e_:return i*e/a.components*a.byteLength;case ah:return i*e/a.components*a.byteLength;case t_:return i*e*2/a.components*a.byteLength;case oh:return i*e*2/a.components*a.byteLength;case Qv:return i*e*3/a.components*a.byteLength;case Ti:return i*e*4/a.components*a.byteLength;case lh:return i*e*4/a.components*a.byteLength;case hu:case pu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mu:case gu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xd:case Sd:return Math.max(i,16)*Math.max(e,8)/4;case _d:case yd:return Math.max(i,8)*Math.max(e,8)/2;case Ed:case Md:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bd:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Id:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case kd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vu:case Bd:case zd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case n_:case Hd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vd:case Gd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JE(i){switch(i){case Gi:case qv:return{byteLength:1,components:1};case _o:case Kv:case Co:return{byteLength:2,components:1};case rh:case sh:return{byteLength:2,components:4};case ys:case ih:case ar:return{byteLength:4,components:1};case Zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);function m_(){let i=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function QE(i){const e=new WeakMap;function t(f,d){const p=f.array,m=f.usage,v=p.byteLength,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,p,m),f.onUploadCallback();let S;if(p instanceof Float32Array)S=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=i.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=i.SHORT;else if(p instanceof Uint32Array)S=i.UNSIGNED_INT;else if(p instanceof Int32Array)S=i.INT;else if(p instanceof Int8Array)S=i.BYTE;else if(p instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,d,p){const m=d.array,v=d.updateRanges;if(i.bindBuffer(p,f),v.length===0)i.bufferSubData(p,0,m);else{v.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<v.length;S++){const E=v[_],M=v[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++_,v[_]=M)}v.length=_+1;for(let S=0,E=v.length;S<E;S++){const M=v[S];i.bufferSubData(p,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(i.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,d),p.version=f.version}}return{get:a,remove:l,update:c}}var eM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tM=`#ifdef USE_ALPHAHASH
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
#endif`,nM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aM=`#ifdef USE_AOMAP
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
#endif`,oM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lM=`#ifdef USE_BATCHING
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
#endif`,uM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hM=`#ifdef USE_IRIDESCENCE
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
#endif`,pM=`#ifdef USE_BUMPMAP
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,MM=`#define PI 3.141592653589793
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
} // validated`,wM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TM=`vec3 transformedNormal = objectNormal;
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
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PM="gl_FragColor = linearToOutputTexel( gl_FragColor );",LM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,IM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HM=`#ifdef USE_GRADIENTMAP
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
}`,VM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XM=`uniform bool receiveShadow;
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
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,$M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZM=`PhysicalMaterial material;
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
#endif`,JM=`struct PhysicalMaterial {
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
}`,QM=`
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
#endif`,ew=`#if defined( RE_IndirectDiffuse )
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
#endif`,tw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ow=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uw=`#if defined( USE_POINTS_UV )
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
#endif`,cw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mw=`#ifdef USE_MORPHTARGETS
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
#endif`,gw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_w=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ew=`#ifdef USE_NORMALMAP
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
#endif`,Mw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ww=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Aw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ow=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kw=`float getShadowMask() {
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
}`,Bw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zw=`#ifdef USE_SKINNING
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
#endif`,Hw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vw=`#ifdef USE_SKINNING
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
#endif`,Gw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ww=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$w=`#ifdef USE_TRANSMISSION
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
#endif`,Yw=`#ifdef USE_TRANSMISSION
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
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eT=`uniform sampler2D t2D;
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
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`#include <common>
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
}`,aT=`#if DEPTH_PACKING == 3200
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
}`,oT=`#define DISTANCE
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
}`,lT=`#define DISTANCE
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`uniform float scale;
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
}`,dT=`uniform vec3 diffuse;
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
}`,hT=`#include <common>
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
}`,pT=`uniform vec3 diffuse;
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
}`,mT=`#define LAMBERT
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
}`,gT=`#define LAMBERT
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
}`,vT=`#define MATCAP
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
}`,_T=`#define MATCAP
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
}`,xT=`#define NORMAL
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
}`,yT=`#define NORMAL
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
}`,ST=`#define PHONG
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
}`,ET=`#define PHONG
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
}`,MT=`#define STANDARD
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
}`,wT=`#define STANDARD
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
}`,TT=`#define TOON
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
}`,RT=`#define TOON
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
}`,AT=`uniform float size;
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
}`,CT=`uniform vec3 diffuse;
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
}`,bT=`#include <common>
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
}`,PT=`uniform vec3 color;
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
}`,LT=`uniform float rotation;
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
}`,DT=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:eM,alphahash_pars_fragment:tM,alphamap_fragment:nM,alphamap_pars_fragment:iM,alphatest_fragment:rM,alphatest_pars_fragment:sM,aomap_fragment:aM,aomap_pars_fragment:oM,batching_pars_vertex:lM,batching_vertex:uM,begin_vertex:cM,beginnormal_vertex:fM,bsdfs:dM,iridescence_fragment:hM,bumpmap_pars_fragment:pM,clipping_planes_fragment:mM,clipping_planes_pars_fragment:gM,clipping_planes_pars_vertex:vM,clipping_planes_vertex:_M,color_fragment:xM,color_pars_fragment:yM,color_pars_vertex:SM,color_vertex:EM,common:MM,cube_uv_reflection_fragment:wM,defaultnormal_vertex:TM,displacementmap_pars_vertex:RM,displacementmap_vertex:AM,emissivemap_fragment:CM,emissivemap_pars_fragment:bM,colorspace_fragment:PM,colorspace_pars_fragment:LM,envmap_fragment:DM,envmap_common_pars_fragment:NM,envmap_pars_fragment:UM,envmap_pars_vertex:IM,envmap_physical_pars_fragment:jM,envmap_vertex:FM,fog_vertex:OM,fog_pars_vertex:kM,fog_fragment:BM,fog_pars_fragment:zM,gradientmap_pars_fragment:HM,lightmap_pars_fragment:VM,lights_lambert_fragment:GM,lights_lambert_pars_fragment:WM,lights_pars_begin:XM,lights_toon_fragment:$M,lights_toon_pars_fragment:YM,lights_phong_fragment:qM,lights_phong_pars_fragment:KM,lights_physical_fragment:ZM,lights_physical_pars_fragment:JM,lights_fragment_begin:QM,lights_fragment_maps:ew,lights_fragment_end:tw,logdepthbuf_fragment:nw,logdepthbuf_pars_fragment:iw,logdepthbuf_pars_vertex:rw,logdepthbuf_vertex:sw,map_fragment:aw,map_pars_fragment:ow,map_particle_fragment:lw,map_particle_pars_fragment:uw,metalnessmap_fragment:cw,metalnessmap_pars_fragment:fw,morphinstance_vertex:dw,morphcolor_vertex:hw,morphnormal_vertex:pw,morphtarget_pars_vertex:mw,morphtarget_vertex:gw,normal_fragment_begin:vw,normal_fragment_maps:_w,normal_pars_fragment:xw,normal_pars_vertex:yw,normal_vertex:Sw,normalmap_pars_fragment:Ew,clearcoat_normal_fragment_begin:Mw,clearcoat_normal_fragment_maps:ww,clearcoat_pars_fragment:Tw,iridescence_pars_fragment:Rw,opaque_fragment:Aw,packing:Cw,premultiplied_alpha_fragment:bw,project_vertex:Pw,dithering_fragment:Lw,dithering_pars_fragment:Dw,roughnessmap_fragment:Nw,roughnessmap_pars_fragment:Uw,shadowmap_pars_fragment:Iw,shadowmap_pars_vertex:Fw,shadowmap_vertex:Ow,shadowmask_pars_fragment:kw,skinbase_vertex:Bw,skinning_pars_vertex:zw,skinning_vertex:Hw,skinnormal_vertex:Vw,specularmap_fragment:Gw,specularmap_pars_fragment:Ww,tonemapping_fragment:Xw,tonemapping_pars_fragment:jw,transmission_fragment:$w,transmission_pars_fragment:Yw,uv_pars_fragment:qw,uv_pars_vertex:Kw,uv_vertex:Zw,worldpos_vertex:Jw,background_vert:Qw,background_frag:eT,backgroundCube_vert:tT,backgroundCube_frag:nT,cube_vert:iT,cube_frag:rT,depth_vert:sT,depth_frag:aT,distanceRGBA_vert:oT,distanceRGBA_frag:lT,equirect_vert:uT,equirect_frag:cT,linedashed_vert:fT,linedashed_frag:dT,meshbasic_vert:hT,meshbasic_frag:pT,meshlambert_vert:mT,meshlambert_frag:gT,meshmatcap_vert:vT,meshmatcap_frag:_T,meshnormal_vert:xT,meshnormal_frag:yT,meshphong_vert:ST,meshphong_frag:ET,meshphysical_vert:MT,meshphysical_frag:wT,meshtoon_vert:TT,meshtoon_frag:RT,points_vert:AT,points_frag:CT,shadow_vert:bT,shadow_frag:PT,sprite_vert:LT,sprite_frag:DT},Ue={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ni={basic:{uniforms:Fn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Fn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Dt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Fn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Fn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Fn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Dt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Fn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Fn([Ue.points,Ue.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Fn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Fn([Ue.common,Ue.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Fn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Fn([Ue.sprite,Ue.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Fn([Ue.common,Ue.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Fn([Ue.lights,Ue.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ni.physical={uniforms:Fn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const tu={r:0,b:0,g:0},ds=new kn,NT=new Yt;function UT(i,e,t,s,a,l,c){const f=new Dt(0);let d=l===!0?0:1,p,m,v=null,_=0,S=null;function E(P){let C=P.isScene===!0?P.background:null;return C&&C.isTexture&&(C=(P.backgroundBlurriness>0?t:e).get(C)),C}function M(P){let C=!1;const H=E(P);H===null?x(f,d):H&&H.isColor&&(x(H,1),C=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?s.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(P,C){const H=E(C);H&&(H.isCubeTexture||H.mapping===bu)?(m===void 0&&(m=new ki(new Ma(1,1,1),new $r({name:"BackgroundCubeMaterial",uniforms:va(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,F,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),ds.copy(C.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.material.uniforms.envMap.value=H,m.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(NT.makeRotationFromEuler(ds)),m.material.toneMapped=At.getTransfer(H.colorSpace)!==Ut,(v!==H||_!==H.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,v=H,_=H.version,S=i.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new ki(new Lu(2,2),new $r({name:"BackgroundMaterial",uniforms:va(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=At.getTransfer(H.colorSpace)!==Ut,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||_!==H.version||S!==i.toneMapping)&&(p.material.needsUpdate=!0,v=H,_=H.version,S=i.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,C){P.getRGB(tu,c_(i)),s.buffers.color.setClear(tu.r,tu.g,tu.b,C,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,C=1){f.set(P),d=C,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,x(f,d)},render:M,addToRenderList:y,dispose:L}}function IT(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},a=_(null);let l=a,c=!1;function f(R,V,ae,J,le){let he=!1;const ue=v(J,ae,V);l!==ue&&(l=ue,p(l.object)),he=S(R,J,ae,le),he&&E(R,J,ae,le),le!==null&&e.update(le,i.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,C(R,V,ae,J),le!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function d(){return i.createVertexArray()}function p(R){return i.bindVertexArray(R)}function m(R){return i.deleteVertexArray(R)}function v(R,V,ae){const J=ae.wireframe===!0;let le=s[R.id];le===void 0&&(le={},s[R.id]=le);let he=le[V.id];he===void 0&&(he={},le[V.id]=he);let ue=he[J];return ue===void 0&&(ue=_(d()),he[J]=ue),ue}function _(R){const V=[],ae=[],J=[];for(let le=0;le<t;le++)V[le]=0,ae[le]=0,J[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ae,attributeDivisors:J,object:R,attributes:{},index:null}}function S(R,V,ae,J){const le=l.attributes,he=V.attributes;let ue=0;const me=ae.getAttributes();for(const k in me)if(me[k].location>=0){const oe=le[k];let I=he[k];if(I===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),oe===void 0||oe.attribute!==I||I&&oe.data!==I.data)return!0;ue++}return l.attributesNum!==ue||l.index!==J}function E(R,V,ae,J){const le={},he=V.attributes;let ue=0;const me=ae.getAttributes();for(const k in me)if(me[k].location>=0){let oe=he[k];oe===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const I={};I.attribute=oe,oe&&oe.data&&(I.data=oe.data),le[k]=I,ue++}l.attributes=le,l.attributesNum=ue,l.index=J}function M(){const R=l.newAttributes;for(let V=0,ae=R.length;V<ae;V++)R[V]=0}function y(R){x(R,0)}function x(R,V){const ae=l.newAttributes,J=l.enabledAttributes,le=l.attributeDivisors;ae[R]=1,J[R]===0&&(i.enableVertexAttribArray(R),J[R]=1),le[R]!==V&&(i.vertexAttribDivisor(R,V),le[R]=V)}function L(){const R=l.newAttributes,V=l.enabledAttributes;for(let ae=0,J=V.length;ae<J;ae++)V[ae]!==R[ae]&&(i.disableVertexAttribArray(ae),V[ae]=0)}function P(R,V,ae,J,le,he,ue){ue===!0?i.vertexAttribIPointer(R,V,ae,le,he):i.vertexAttribPointer(R,V,ae,J,le,he)}function C(R,V,ae,J){M();const le=J.attributes,he=ae.getAttributes(),ue=V.defaultAttributeValues;for(const me in he){const k=he[me];if(k.location>=0){let de=le[me];if(de===void 0&&(me==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),me==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const oe=de.normalized,I=de.itemSize,re=e.get(de);if(re===void 0)continue;const Fe=re.buffer,te=re.type,ge=re.bytesPerElement,Te=te===i.INT||te===i.UNSIGNED_INT||de.gpuType===ih;if(de.isInterleavedBufferAttribute){const j=de.data,ce=j.stride,xe=de.offset;if(j.isInstancedInterleavedBuffer){for(let be=0;be<k.locationSize;be++)x(k.location+be,j.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let be=0;be<k.locationSize;be++)y(k.location+be);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let be=0;be<k.locationSize;be++)P(k.location+be,I/k.locationSize,te,oe,ce*ge,(xe+I/k.locationSize*be)*ge,Te)}else{if(de.isInstancedBufferAttribute){for(let j=0;j<k.locationSize;j++)x(k.location+j,de.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let j=0;j<k.locationSize;j++)y(k.location+j);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let j=0;j<k.locationSize;j++)P(k.location+j,I/k.locationSize,te,oe,I*ge,I/k.locationSize*j*ge,Te)}}else if(ue!==void 0){const oe=ue[me];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(k.location,oe);break;case 3:i.vertexAttrib3fv(k.location,oe);break;case 4:i.vertexAttrib4fv(k.location,oe);break;default:i.vertexAttrib1fv(k.location,oe)}}}}L()}function H(){G();for(const R in s){const V=s[R];for(const ae in V){const J=V[ae];for(const le in J)m(J[le].object),delete J[le];delete V[ae]}delete s[R]}}function U(R){if(s[R.id]===void 0)return;const V=s[R.id];for(const ae in V){const J=V[ae];for(const le in J)m(J[le].object),delete J[le];delete V[ae]}delete s[R.id]}function F(R){for(const V in s){const ae=s[V];if(ae[R.id]===void 0)continue;const J=ae[R.id];for(const le in J)m(J[le].object),delete J[le];delete ae[R.id]}}function G(){b(),c=!0,l!==a&&(l=a,p(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:G,resetDefaultState:b,dispose:H,releaseStatesOfGeometry:U,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:y,disableUnusedAttributes:L}}function FT(i,e,t){let s;function a(p){s=p}function l(p,m){i.drawArrays(s,p,m),t.update(m,s,1)}function c(p,m,v){v!==0&&(i.drawArraysInstanced(s,p,m,v),t.update(m,s,v))}function f(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,v);let S=0;for(let E=0;E<v;E++)S+=m[E];t.update(S,s,1)}function d(p,m,v,_){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],m[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,m,0,_,0,v);let E=0;for(let M=0;M<v;M++)E+=m[M]*_[M];t.update(E,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function OT(i,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==Ti&&s.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const G=F===Co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Gi&&s.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ar&&!G)}function d(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=d(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const v=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:C,vertexTextures:H,maxSamples:U}}function kT(i){const e=this;let t=null,s=0,a=!1,l=!1;const c=new ps,f=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||s!==0||a;return a=_,s=v.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=m(v,_,0)},this.setState=function(v,_,S){const E=v.clippingPlanes,M=v.clipIntersection,y=v.clipShadows,x=i.get(v);if(!a||E===null||E.length===0||l&&!y)l?m(null):p();else{const L=l?0:s,P=L*4;let C=x.clippingState||null;d.value=C,C=m(E,_,P,S);for(let H=0;H!==P;++H)C[H]=t[H];x.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(v,_,S,E){const M=v!==null?v.length:0;let y=null;if(M!==0){if(y=d.value,E!==!0||y===null){const x=S+M*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,C=S;P!==M;++P,C+=4)c.copy(v[P]).applyMatrix4(L,f),c.normal.toArray(y,C),y[C+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function BT(i){let e=new WeakMap;function t(c,f){return f===md?c.mapping=pa:f===gd&&(c.mapping=ma),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===md||f===gd)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new IE(d.height);return p.fromEquirectangularTexture(i,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const ua=4,Ug=[.125,.215,.35,.446,.526,.582],vs=20,jf=new p_,Ig=new Dt;let $f=null,Yf=0,qf=0,Kf=!1;const ms=(1+Math.sqrt(5))/2,sa=1/ms,Fg=[new ne(-ms,sa,0),new ne(ms,sa,0),new ne(-sa,0,ms),new ne(sa,0,ms),new ne(0,ms,-sa),new ne(0,ms,sa),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],zT=new ne;class Og{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100,l={}){const{size:c=256,position:f=zT}=l;$f=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),Kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,s,a,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($f,Yf,qf),this._renderer.xr.enabled=Kf,e.scissorTest=!1,nu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pa||e.mapping===ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$f=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),Kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:Co,format:Ti,colorSpace:ga,depthBuffer:!1},a=kg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HT(l)),this._blurMaterial=VT(l,e,t)}return a}_compileMaterial(e){const t=new ki(this._lodPlanes[0],e);this._renderer.compile(t,jf)}_sceneToCubeUV(e,t,s,a,l){const d=new ci(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(Ig),v.toneMapping=ur,v.autoClear=!1;const E=new dh({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),M=new ki(new Ma,E);let y=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,y=!0):(E.color.copy(Ig),y=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[L],l.y,l.z)):P===1?(d.up.set(0,0,p[L]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[L],l.z)):(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[L]));const C=this._cubeSize;nu(a,P*C,L>2?C:0,C,C),v.setRenderTarget(a),y&&v.render(M,d),v.render(e,d)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=S,v.autoClear=_,e.background=x}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===pa||e.mapping===ma;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new ki(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;nu(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(c,jf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Fg[(a-l-1)%Fg.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new ki(this._lodPlanes[a],p),_=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*vs-1),M=l/E,y=isFinite(l)?1+Math.floor(m*M):vs;y>vs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${vs}`);const x=[];let L=0;for(let F=0;F<vs;++F){const G=F/M,b=Math.exp(-G*G/2);x.push(b),F===0?L+=b:F<y&&(L+=2*b)}for(let F=0;F<x.length;F++)x[F]=x[F]/L;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:P}=this;_.dTheta.value=E,_.mipInt.value=P-s;const C=this._sizeLods[a],H=3*C*(a>P-ua?a-P+ua:0),U=4*(this._cubeSize-C);nu(t,H,U,3*C,2*C),d.setRenderTarget(t),d.render(v,jf)}}function HT(i){const e=[],t=[],s=[];let a=i;const l=i-ua+1+Ug.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let d=1/f;c>i-ua?d=Ug[c-i+ua-1]:c===0&&(d=0),s.push(d);const p=1/(f-2),m=-p,v=1+p,_=[m,m,v,m,v,v,m,m,v,v,m,v],S=6,E=6,M=3,y=2,x=1,L=new Float32Array(M*E*S),P=new Float32Array(y*E*S),C=new Float32Array(x*E*S);for(let U=0;U<S;U++){const F=U%3*2/3-1,G=U>2?0:-1,b=[F,G,0,F+2/3,G,0,F+2/3,G+1,0,F,G,0,F+2/3,G+1,0,F,G+1,0];L.set(b,M*E*U),P.set(_,y*E*U);const R=[U,U,U,U,U,U];C.set(R,x*E*U)}const H=new Es;H.setAttribute("position",new Hi(L,M)),H.setAttribute("uv",new Hi(P,y)),H.setAttribute("faceIndex",new Hi(C,x)),e.push(H),a>ua&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function kg(i,e,t){const s=new Ss(i,e,t);return s.texture.mapping=bu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function nu(i,e,t,s,a){i.viewport.set(e,t,s,a),i.scissor.set(e,t,s,a)}function VT(i,e,t){const s=new Float32Array(vs),a=new ne(0,1,0);return new $r({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function Bg(){return new $r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function zg(){return new $r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}function GT(i){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const d=f.mapping,p=d===md||d===gd,m=d===pa||d===ma;if(p||m){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new Og(i)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||m&&S&&a(S)?(t===null&&(t=new Og(i)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function WT(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&fa("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function XT(i,e,t,s){const a={},l=new WeakMap;function c(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete a[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(v,_){return a[_.id]===!0||(_.addEventListener("dispose",c),a[_.id]=!0,t.memory.geometries++),_}function d(v){const _=v.attributes;for(const S in _)e.update(_[S],i.ARRAY_BUFFER)}function p(v){const _=[],S=v.index,E=v.attributes.position;let M=0;if(S!==null){const L=S.array;M=S.version;for(let P=0,C=L.length;P<C;P+=3){const H=L[P+0],U=L[P+1],F=L[P+2];_.push(H,U,U,F,F,H)}}else if(E!==void 0){const L=E.array;M=E.version;for(let P=0,C=L.length/3-1;P<C;P+=3){const H=P+0,U=P+1,F=P+2;_.push(H,U,U,F,F,H)}}else return;const y=new(r_(_)?u_:l_)(_,1);y.version=M;const x=l.get(v);x&&e.remove(x),l.set(v,y)}function m(v){const _=l.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function jT(i,e,t){let s;function a(_){s=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function d(_,S){i.drawElements(s,S,l,_*c),t.update(S,s,1)}function p(_,S,E){E!==0&&(i.drawElementsInstanced(s,S,l,_*c,E),t.update(S,s,E))}function m(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,_,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];t.update(y,s,1)}function v(_,S,E,M){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)p(_[x]/c,S[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,_,0,M,0,E);let x=0;for(let L=0;L<E;L++)x+=S[L]*M[L];t.update(x,s,1)}}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function $T(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=f*(l/3);break;case i.LINES:t.lines+=f*(l/2);break;case i.LINE_STRIP:t.lines+=f*(l-1);break;case i.LINE_LOOP:t.lines+=f*l;break;case i.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function YT(i,e,t){const s=new WeakMap,a=new $t;function l(c,f,d){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let _=s.get(f);if(_===void 0||_.count!==v){let b=function(){F.dispose(),s.delete(f),f.removeEventListener("dispose",b)};_!==void 0&&_.texture.dispose();const S=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;S===!0&&(P=1),E===!0&&(P=2),M===!0&&(P=3);let C=f.attributes.position.count*P,H=1;C>e.maxTextureSize&&(H=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const U=new Float32Array(C*H*4*v),F=new s_(U,C,H,v);F.type=ar,F.needsUpdate=!0;const G=P*4;for(let R=0;R<v;R++){const V=y[R],ae=x[R],J=L[R],le=C*H*4*R;for(let he=0;he<V.count;he++){const ue=he*G;S===!0&&(a.fromBufferAttribute(V,he),U[le+ue+0]=a.x,U[le+ue+1]=a.y,U[le+ue+2]=a.z,U[le+ue+3]=0),E===!0&&(a.fromBufferAttribute(ae,he),U[le+ue+4]=a.x,U[le+ue+5]=a.y,U[le+ue+6]=a.z,U[le+ue+7]=0),M===!0&&(a.fromBufferAttribute(J,he),U[le+ue+8]=a.x,U[le+ue+9]=a.y,U[le+ue+10]=a.z,U[le+ue+11]=J.itemSize===4?a.w:1)}}_={count:v,texture:F,size:new bt(C,H)},s.set(f,_),f.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let S=0;for(let M=0;M<p.length;M++)S+=p[M];const E=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:l}}function qT(i,e,t,s){let a=new WeakMap;function l(d){const p=s.render.frame,m=d.geometry,v=e.get(d,m);if(a.get(v)!==p&&(e.update(v),a.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==p&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),a.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return v}function c(){a=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const g_=new Bn,Hg=new h_(1,1),v_=new s_,__=new vE,x_=new d_,Vg=[],Gg=[],Wg=new Float32Array(16),Xg=new Float32Array(9),jg=new Float32Array(4);function wa(i,e,t){const s=i[0];if(s<=0||s>0)return i;const a=e*t;let l=Vg[a];if(l===void 0&&(l=new Float32Array(a),Vg[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,i[c].toArray(l,f)}return l}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Du(i,e){let t=Gg[e];t===void 0&&(t=new Int32Array(e),Gg[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function KT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ZT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function JT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function QT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function e1(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(sn(t,s))return;jg.set(s),i.uniformMatrix2fv(this.addr,!1,jg),an(t,s)}}function t1(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(sn(t,s))return;Xg.set(s),i.uniformMatrix3fv(this.addr,!1,Xg),an(t,s)}}function n1(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(sn(t,s))return;Wg.set(s),i.uniformMatrix4fv(this.addr,!1,Wg),an(t,s)}}function i1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function r1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function s1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function a1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function o1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function l1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function u1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function c1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function f1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a);let l;this.type===i.SAMPLER_2D_SHADOW?(Hg.compareFunction=i_,l=Hg):l=g_,t.setTexture2D(e||l,a)}function d1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||__,a)}function h1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||x_,a)}function p1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||v_,a)}function m1(i){switch(i){case 5126:return KT;case 35664:return ZT;case 35665:return JT;case 35666:return QT;case 35674:return e1;case 35675:return t1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return a1;case 5125:return o1;case 36294:return l1;case 36295:return u1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return p1}}function g1(i,e){i.uniform1fv(this.addr,e)}function v1(i,e){const t=wa(e,this.size,2);i.uniform2fv(this.addr,t)}function _1(i,e){const t=wa(e,this.size,3);i.uniform3fv(this.addr,t)}function x1(i,e){const t=wa(e,this.size,4);i.uniform4fv(this.addr,t)}function y1(i,e){const t=wa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function S1(i,e){const t=wa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function E1(i,e){const t=wa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function M1(i,e){i.uniform1iv(this.addr,e)}function w1(i,e){i.uniform2iv(this.addr,e)}function T1(i,e){i.uniform3iv(this.addr,e)}function R1(i,e){i.uniform4iv(this.addr,e)}function A1(i,e){i.uniform1uiv(this.addr,e)}function C1(i,e){i.uniform2uiv(this.addr,e)}function b1(i,e){i.uniform3uiv(this.addr,e)}function P1(i,e){i.uniform4uiv(this.addr,e)}function L1(i,e,t){const s=this.cache,a=e.length,l=Du(t,a);sn(s,l)||(i.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||g_,l[c])}function D1(i,e,t){const s=this.cache,a=e.length,l=Du(t,a);sn(s,l)||(i.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||__,l[c])}function N1(i,e,t){const s=this.cache,a=e.length,l=Du(t,a);sn(s,l)||(i.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||x_,l[c])}function U1(i,e,t){const s=this.cache,a=e.length,l=Du(t,a);sn(s,l)||(i.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||v_,l[c])}function I1(i){switch(i){case 5126:return g1;case 35664:return v1;case 35665:return _1;case 35666:return x1;case 35674:return y1;case 35675:return S1;case 35676:return E1;case 5124:case 35670:return M1;case 35667:case 35671:return w1;case 35668:case 35672:return T1;case 35669:case 35673:return R1;case 5125:return A1;case 36294:return C1;case 36295:return b1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return U1}}class F1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=m1(t.type)}}class O1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I1(t.type)}}class k1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const Zf=/(\w+)(\])?(\[|\.)?/g;function $g(i,e){i.seq.push(e),i.map[e.id]=e}function B1(i,e,t){const s=i.name,a=s.length;for(Zf.lastIndex=0;;){const l=Zf.exec(s),c=Zf.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===a){$g(t,p===void 0?new F1(f,i,e):new O1(f,i,e));break}else{let v=t.map[f];v===void 0&&(v=new k1(f),$g(t,v)),t=v}}}class _u{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);B1(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=s[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function Yg(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const z1=37297;let H1=0;function V1(i,e){const t=i.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const qg=new ht;function G1(i){At._getMatrix(qg,At.workingColorSpace,i);const e=`mat3( ${qg.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(i)){case Eu:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kg(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+V1(i.getShaderSource(e),c)}else return a}function W1(i,e){const t=G1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function X1(i,e){let t;switch(e){case RS:t="Linear";break;case AS:t="Reinhard";break;case CS:t="Cineon";break;case bS:t="ACESFilmic";break;case LS:t="AgX";break;case DS:t="Neutral";break;case PS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const iu=new ne;function j1(){At.getLuminanceCoefficients(iu);const i=iu.x.toFixed(4),e=iu.y.toFixed(4),t=iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function Y1(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function q1(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=i.getActiveAttrib(e,a),c=l.name;let f=1;l.type===i.FLOAT_MAT2&&(f=2),l.type===i.FLOAT_MAT3&&(f=3),l.type===i.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:f}}return t}function co(i){return i!==""}function Zg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(i){return i.replace(K1,J1)}const Z1=new Map;function J1(i,e){let t=mt[e];if(t===void 0){const s=Z1.get(e);if(s!==void 0)t=mt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Wd(t)}const Q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qg(i){return i.replace(Q1,eR)}function eR(i,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function ev(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tR(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jv?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sS?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rr&&(e="SHADOWMAP_TYPE_VSM"),e}function nR(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pa:case ma:e="ENVMAP_TYPE_CUBE";break;case bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iR(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ma&&(e="ENVMAP_MODE_REFRACTION"),e}function rR(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $v:e="ENVMAP_BLENDING_MULTIPLY";break;case wS:e="ENVMAP_BLENDING_MIX";break;case TS:e="ENVMAP_BLENDING_ADD";break}return e}function sR(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function aR(i,e,t,s){const a=i.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=tR(t),p=nR(t),m=iR(t),v=rR(t),_=sR(t),S=$1(t),E=Y1(l),M=a.createProgram();let y,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(co).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(co).join(`
`),x.length>0&&(x+=`
`)):(y=[ev(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),x=[ev(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ur?"#define TONE_MAPPING":"",t.toneMapping!==ur?mt.tonemapping_pars_fragment:"",t.toneMapping!==ur?X1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,W1("linearToOutputTexel",t.outputColorSpace),j1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),c=Wd(c),c=Zg(c,t),c=Jg(c,t),f=Wd(f),f=Zg(f,t),f=Jg(f,t),c=Qg(c),f=Qg(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=L+y+c,C=L+x+f,H=Yg(a,a.VERTEX_SHADER,P),U=Yg(a,a.FRAGMENT_SHADER,C);a.attachShader(M,H),a.attachShader(M,U),t.index0AttributeName!==void 0?a.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function F(V){if(i.debug.checkShaderErrors){const ae=a.getProgramInfoLog(M).trim(),J=a.getShaderInfoLog(H).trim(),le=a.getShaderInfoLog(U).trim();let he=!0,ue=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(he=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,M,H,U);else{const me=Kg(a,H,"vertex"),k=Kg(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ae+`
`+me+`
`+k)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(J===""||le==="")&&(ue=!1);ue&&(V.diagnostics={runnable:he,programLog:ae,vertexShader:{log:J,prefix:y},fragmentShader:{log:le,prefix:x}})}a.deleteShader(H),a.deleteShader(U),G=new _u(a,M),b=q1(a,M)}let G;this.getUniforms=function(){return G===void 0&&F(this),G};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(M,z1)),R},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H1++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=H,this.fragmentShader=U,this}let oR=0;class lR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new uR(e),t.set(e,s)),s}}class uR{constructor(e){this.id=oR++,this.code=e,this.usedTimes=0}}function cR(i,e,t,s,a,l,c){const f=new a_,d=new lR,p=new Set,m=[],v=a.logarithmicDepthBuffer,_=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return p.add(b),b===0?"uv":`uv${b}`}function y(b,R,V,ae,J){const le=ae.fog,he=J.geometry,ue=b.isMeshStandardMaterial?ae.environment:null,me=(b.isMeshStandardMaterial?t:e).get(b.envMap||ue),k=me&&me.mapping===bu?me.image.height:null,de=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const oe=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,I=oe!==void 0?oe.length:0;let re=0;he.morphAttributes.position!==void 0&&(re=1),he.morphAttributes.normal!==void 0&&(re=2),he.morphAttributes.color!==void 0&&(re=3);let Fe,te,ge,Te;if(de){const St=Ni[de];Fe=St.vertexShader,te=St.fragmentShader}else Fe=b.vertexShader,te=b.fragmentShader,d.update(b),ge=d.getVertexShaderID(b),Te=d.getFragmentShaderID(b);const j=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),xe=J.isInstancedMesh===!0,be=J.isBatchedMesh===!0,nt=!!b.map,st=!!b.matcap,Ke=!!me,O=!!b.aoMap,qt=!!b.lightMap,gt=!!b.bumpMap,Mt=!!b.normalMap,$e=!!b.displacementMap,vt=!!b.emissiveMap,Ze=!!b.metalnessMap,lt=!!b.roughnessMap,Pt=b.anisotropy>0,D=b.clearcoat>0,T=b.dispersion>0,Q=b.iridescence>0,pe=b.sheen>0,ye=b.transmission>0,fe=Pt&&!!b.anisotropyMap,je=D&&!!b.clearcoatMap,Pe=D&&!!b.clearcoatNormalMap,Be=D&&!!b.clearcoatRoughnessMap,Ye=Q&&!!b.iridescenceMap,Se=Q&&!!b.iridescenceThicknessMap,Oe=pe&&!!b.sheenColorMap,it=pe&&!!b.sheenRoughnessMap,Qe=!!b.specularMap,Le=!!b.specularColorMap,et=!!b.specularIntensityMap,W=ye&&!!b.transmissionMap,De=ye&&!!b.thicknessMap,ve=!!b.gradientMap,Ie=!!b.alphaMap,we=b.alphaTest>0,_e=!!b.alphaHash,ze=!!b.extensions;let ut=ur;b.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ut=i.toneMapping);const Ct={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:Fe,fragmentShader:te,defines:b.defines,customVertexShaderID:ge,customFragmentShaderID:Te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:be,batchingColor:be&&J._colorsTexture!==null,instancing:xe,instancingColor:xe&&J.instanceColor!==null,instancingMorph:xe&&J.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ga,alphaToCoverage:!!b.alphaToCoverage,map:nt,matcap:st,envMap:Ke,envMapMode:Ke&&me.mapping,envMapCubeUVHeight:k,aoMap:O,lightMap:qt,bumpMap:gt,normalMap:Mt,displacementMap:_&&$e,emissiveMap:vt,normalMapObjectSpace:Mt&&b.normalMapType===OS,normalMapTangentSpace:Mt&&b.normalMapType===FS,metalnessMap:Ze,roughnessMap:lt,anisotropy:Pt,anisotropyMap:fe,clearcoat:D,clearcoatMap:je,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Be,dispersion:T,iridescence:Q,iridescenceMap:Ye,iridescenceThicknessMap:Se,sheen:pe,sheenColorMap:Oe,sheenRoughnessMap:it,specularMap:Qe,specularColorMap:Le,specularIntensityMap:et,transmission:ye,transmissionMap:W,thicknessMap:De,gradientMap:ve,opaque:b.transparent===!1&&b.blending===ca&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:we,alphaHash:_e,combine:b.combine,mapUv:nt&&M(b.map.channel),aoMapUv:O&&M(b.aoMap.channel),lightMapUv:qt&&M(b.lightMap.channel),bumpMapUv:gt&&M(b.bumpMap.channel),normalMapUv:Mt&&M(b.normalMap.channel),displacementMapUv:$e&&M(b.displacementMap.channel),emissiveMapUv:vt&&M(b.emissiveMap.channel),metalnessMapUv:Ze&&M(b.metalnessMap.channel),roughnessMapUv:lt&&M(b.roughnessMap.channel),anisotropyMapUv:fe&&M(b.anisotropyMap.channel),clearcoatMapUv:je&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:it&&M(b.sheenRoughnessMap.channel),specularMapUv:Qe&&M(b.specularMap.channel),specularColorMapUv:Le&&M(b.specularColorMap.channel),specularIntensityMapUv:et&&M(b.specularIntensityMap.channel),transmissionMapUv:W&&M(b.transmissionMap.channel),thicknessMapUv:De&&M(b.thicknessMap.channel),alphaMapUv:Ie&&M(b.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(Mt||Pt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!he.attributes.uv&&(nt||Ie),fog:!!le,useFog:b.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:ce,skinning:J.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,decodeVideoTexture:nt&&b.map.isVideoTexture===!0&&At.getTransfer(b.map.colorSpace)===Ut,decodeVideoTextureEmissive:vt&&b.emissiveMap.isVideoTexture===!0&&At.getTransfer(b.emissiveMap.colorSpace)===Ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ii,flipSided:b.side===Yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ze&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&b.extensions.multiDraw===!0||be)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ct.vertexUv1s=p.has(1),Ct.vertexUv2s=p.has(2),Ct.vertexUv3s=p.has(3),p.clear(),Ct}function x(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)R.push(V),R.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(L(R,b),P(R,b),R.push(i.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function L(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function P(b,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function C(b){const R=E[b.type];let V;if(R){const ae=Ni[R];V=LE.clone(ae.uniforms)}else V=b.uniforms;return V}function H(b,R){let V;for(let ae=0,J=m.length;ae<J;ae++){const le=m[ae];if(le.cacheKey===R){V=le,++V.usedTimes;break}}return V===void 0&&(V=new aR(i,R,b,l),m.push(V)),V}function U(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),b.destroy()}}function F(b){d.remove(b)}function G(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:H,releaseProgram:U,releaseShaderCache:F,programs:m,dispose:G}}function fR(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let f=i.get(c);return f===void 0&&(f={},i.set(c,f)),f}function s(c){i.delete(c)}function a(c,f,d){i.get(c)[f]=d}function l(){i=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function dR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nv(){const i=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(v,_,S,E,M,y){let x=i[e];return x===void 0?(x={id:v.id,object:v,geometry:_,material:S,groupOrder:E,renderOrder:v.renderOrder,z:M,group:y},i[e]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=M,x.group=y),e++,x}function f(v,_,S,E,M,y){const x=c(v,_,S,E,M,y);S.transmission>0?s.push(x):S.transparent===!0?a.push(x):t.push(x)}function d(v,_,S,E,M,y){const x=c(v,_,S,E,M,y);S.transmission>0?s.unshift(x):S.transparent===!0?a.unshift(x):t.unshift(x)}function p(v,_){t.length>1&&t.sort(v||dR),s.length>1&&s.sort(_||tv),a.length>1&&a.sort(_||tv)}function m(){for(let v=e,_=i.length;v<_;v++){const S=i[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:d,finish:m,sort:p}}function hR(){let i=new WeakMap;function e(s,a){const l=i.get(s);let c;return l===void 0?(c=new nv,i.set(s,[c])):a>=l.length?(c=new nv,l.push(c)):c=l[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function pR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Dt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":t={color:new Dt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return i[e.id]=t,t}}}function mR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gR=0;function vR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _R(i){const e=new pR,t=mR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ne);const a=new ne,l=new Yt,c=new Yt;function f(p){let m=0,v=0,_=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let S=0,E=0,M=0,y=0,x=0,L=0,P=0,C=0,H=0,U=0,F=0;p.sort(vR);for(let b=0,R=p.length;b<R;b++){const V=p[b],ae=V.color,J=V.intensity,le=V.distance,he=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=ae.r*J,v+=ae.g*J,_+=ae.b*J;else if(V.isLightProbe){for(let ue=0;ue<9;ue++)s.probe[ue].addScaledVector(V.sh.coefficients[ue],J);F++}else if(V.isDirectionalLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const me=V.shadow,k=t.get(V);k.shadowIntensity=me.intensity,k.shadowBias=me.bias,k.shadowNormalBias=me.normalBias,k.shadowRadius=me.radius,k.shadowMapSize=me.mapSize,s.directionalShadow[S]=k,s.directionalShadowMap[S]=he,s.directionalShadowMatrix[S]=V.shadow.matrix,L++}s.directional[S]=ue,S++}else if(V.isSpotLight){const ue=e.get(V);ue.position.setFromMatrixPosition(V.matrixWorld),ue.color.copy(ae).multiplyScalar(J),ue.distance=le,ue.coneCos=Math.cos(V.angle),ue.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ue.decay=V.decay,s.spot[M]=ue;const me=V.shadow;if(V.map&&(s.spotLightMap[H]=V.map,H++,me.updateMatrices(V),V.castShadow&&U++),s.spotLightMatrix[M]=me.matrix,V.castShadow){const k=t.get(V);k.shadowIntensity=me.intensity,k.shadowBias=me.bias,k.shadowNormalBias=me.normalBias,k.shadowRadius=me.radius,k.shadowMapSize=me.mapSize,s.spotShadow[M]=k,s.spotShadowMap[M]=he,C++}M++}else if(V.isRectAreaLight){const ue=e.get(V);ue.color.copy(ae).multiplyScalar(J),ue.halfWidth.set(V.width*.5,0,0),ue.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=ue,y++}else if(V.isPointLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),ue.distance=V.distance,ue.decay=V.decay,V.castShadow){const me=V.shadow,k=t.get(V);k.shadowIntensity=me.intensity,k.shadowBias=me.bias,k.shadowNormalBias=me.normalBias,k.shadowRadius=me.radius,k.shadowMapSize=me.mapSize,k.shadowCameraNear=me.camera.near,k.shadowCameraFar=me.camera.far,s.pointShadow[E]=k,s.pointShadowMap[E]=he,s.pointShadowMatrix[E]=V.shadow.matrix,P++}s.point[E]=ue,E++}else if(V.isHemisphereLight){const ue=e.get(V);ue.skyColor.copy(V.color).multiplyScalar(J),ue.groundColor.copy(V.groundColor).multiplyScalar(J),s.hemi[x]=ue,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=v,s.ambient[2]=_;const G=s.hash;(G.directionalLength!==S||G.pointLength!==E||G.spotLength!==M||G.rectAreaLength!==y||G.hemiLength!==x||G.numDirectionalShadows!==L||G.numPointShadows!==P||G.numSpotShadows!==C||G.numSpotMaps!==H||G.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=M,s.rectArea.length=y,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=C+H-U,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=F,G.directionalLength=S,G.pointLength=E,G.spotLength=M,G.rectAreaLength=y,G.hemiLength=x,G.numDirectionalShadows=L,G.numPointShadows=P,G.numSpotShadows=C,G.numSpotMaps=H,G.numLightProbes=F,s.version=gR++)}function d(p,m){let v=0,_=0,S=0,E=0,M=0;const y=m.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const P=p[x];if(P.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(P.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const C=s.point[_];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),_++}else if(P.isHemisphereLight){const C=s.hemi[M];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(y),M++}}}return{setup:f,setupView:d,state:s}}function iv(i){const e=new _R(i),t=[],s=[];function a(m){p.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function xR(i){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new iv(i),e.set(a,[f])):l>=c.length?(f=new iv(i),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const yR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SR=`uniform sampler2D shadow_pass;
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
}`;function ER(i,e,t){let s=new hh;const a=new bt,l=new bt,c=new $t,f=new HE({depthPacking:IS}),d=new VE,p={},m=t.maxTextureSize,v={[jr]:Yn,[Yn]:jr,[Ii]:Ii},_=new $r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:yR,fragmentShader:SR}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Es;E.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ki(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jv;let x=this.type;this.render=function(U,F,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;const b=i.getRenderTarget(),R=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),ae=i.state;ae.setBlending(Xr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const J=x!==rr&&this.type===rr,le=x===rr&&this.type!==rr;for(let he=0,ue=U.length;he<ue;he++){const me=U[he],k=me.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const de=k.getFrameExtents();if(a.multiply(de),l.copy(k.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/de.x),a.x=l.x*de.x,k.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/de.y),a.y=l.y*de.y,k.mapSize.y=l.y)),k.map===null||J===!0||le===!0){const I=this.type!==rr?{minFilter:yn,magFilter:yn}:{};k.map!==null&&k.map.dispose(),k.map=new Ss(a.x,a.y,I),k.map.texture.name=me.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const oe=k.getViewportCount();for(let I=0;I<oe;I++){const re=k.getViewport(I);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ae.viewport(c),k.updateMatrices(me,I),s=k.getFrustum(),C(F,G,k.camera,me,this.type)}k.isPointLightShadow!==!0&&this.type===rr&&L(k,G),k.needsUpdate=!1}x=this.type,y.needsUpdate=!1,i.setRenderTarget(b,R,V)};function L(U,F){const G=e.update(M);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ss(a.x,a.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(F,null,G,_,M,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(F,null,G,S,M,null)}function P(U,F,G,b){let R=null;const V=G.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)R=V;else if(R=G.isPointLight===!0?d:f,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ae=R.uuid,J=F.uuid;let le=p[ae];le===void 0&&(le={},p[ae]=le);let he=le[J];he===void 0&&(he=R.clone(),le[J]=he,F.addEventListener("dispose",H)),R=he}if(R.visible=F.visible,R.wireframe=F.wireframe,b===rr?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:v[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,G.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ae=i.properties.get(R);ae.light=G}return R}function C(U,F,G,b,R){if(U.visible===!1)return;if(U.layers.test(F.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&R===rr)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,U.matrixWorld);const J=e.update(U),le=U.material;if(Array.isArray(le)){const he=J.groups;for(let ue=0,me=he.length;ue<me;ue++){const k=he[ue],de=le[k.materialIndex];if(de&&de.visible){const oe=P(U,de,b,R);U.onBeforeShadow(i,U,F,G,J,oe,k),i.renderBufferDirect(G,null,J,oe,U,k),U.onAfterShadow(i,U,F,G,J,oe,k)}}}else if(le.visible){const he=P(U,le,b,R);U.onBeforeShadow(i,U,F,G,J,he,null),i.renderBufferDirect(G,null,J,he,U,null),U.onAfterShadow(i,U,F,G,J,he,null)}}const ae=U.children;for(let J=0,le=ae.length;J<le;J++)C(ae[J],F,G,b,R)}function H(U){U.target.removeEventListener("dispose",H);for(const G in p){const b=p[G],R=U.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const MR={[ld]:ud,[cd]:hd,[fd]:pd,[ha]:dd,[ud]:ld,[hd]:cd,[pd]:fd,[dd]:ha};function wR(i,e){function t(){let W=!1;const De=new $t;let ve=null;const Ie=new $t(0,0,0,0);return{setMask:function(we){ve!==we&&!W&&(i.colorMask(we,we,we,we),ve=we)},setLocked:function(we){W=we},setClear:function(we,_e,ze,ut,Ct){Ct===!0&&(we*=ut,_e*=ut,ze*=ut),De.set(we,_e,ze,ut),Ie.equals(De)===!1&&(i.clearColor(we,_e,ze,ut),Ie.copy(De))},reset:function(){W=!1,ve=null,Ie.set(-1,0,0,0)}}}function s(){let W=!1,De=!1,ve=null,Ie=null,we=null;return{setReversed:function(_e){if(De!==_e){const ze=e.get("EXT_clip_control");_e?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),De=_e;const ut=we;we=null,this.setClear(ut)}},getReversed:function(){return De},setTest:function(_e){_e?j(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(_e){ve!==_e&&!W&&(i.depthMask(_e),ve=_e)},setFunc:function(_e){if(De&&(_e=MR[_e]),Ie!==_e){switch(_e){case ld:i.depthFunc(i.NEVER);break;case ud:i.depthFunc(i.ALWAYS);break;case cd:i.depthFunc(i.LESS);break;case ha:i.depthFunc(i.LEQUAL);break;case fd:i.depthFunc(i.EQUAL);break;case dd:i.depthFunc(i.GEQUAL);break;case hd:i.depthFunc(i.GREATER);break;case pd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=_e}},setLocked:function(_e){W=_e},setClear:function(_e){we!==_e&&(De&&(_e=1-_e),i.clearDepth(_e),we=_e)},reset:function(){W=!1,ve=null,Ie=null,we=null,De=!1}}}function a(){let W=!1,De=null,ve=null,Ie=null,we=null,_e=null,ze=null,ut=null,Ct=null;return{setTest:function(St){W||(St?j(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(St){De!==St&&!W&&(i.stencilMask(St),De=St)},setFunc:function(St,on,gn){(ve!==St||Ie!==on||we!==gn)&&(i.stencilFunc(St,on,gn),ve=St,Ie=on,we=gn)},setOp:function(St,on,gn){(_e!==St||ze!==on||ut!==gn)&&(i.stencilOp(St,on,gn),_e=St,ze=on,ut=gn)},setLocked:function(St){W=St},setClear:function(St){Ct!==St&&(i.clearStencil(St),Ct=St)},reset:function(){W=!1,De=null,ve=null,Ie=null,we=null,_e=null,ze=null,ut=null,Ct=null}}}const l=new t,c=new s,f=new a,d=new WeakMap,p=new WeakMap;let m={},v={},_=new WeakMap,S=[],E=null,M=!1,y=null,x=null,L=null,P=null,C=null,H=null,U=null,F=new Dt(0,0,0),G=0,b=!1,R=null,V=null,ae=null,J=null,le=null;const he=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,me=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(k)[1]),ue=me>=1):k.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ue=me>=2);let de=null,oe={};const I=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),Fe=new $t().fromArray(I),te=new $t().fromArray(re);function ge(W,De,ve,Ie){const we=new Uint8Array(4),_e=i.createTexture();i.bindTexture(W,_e),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<ve;ze++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(De+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return _e}const Te={};Te[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),j(i.DEPTH_TEST),c.setFunc(ha),gt(!1),Mt(ag),j(i.CULL_FACE),O(Xr);function j(W){m[W]!==!0&&(i.enable(W),m[W]=!0)}function ce(W){m[W]!==!1&&(i.disable(W),m[W]=!1)}function xe(W,De){return v[W]!==De?(i.bindFramebuffer(W,De),v[W]=De,W===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=De),W===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=De),!0):!1}function be(W,De){let ve=S,Ie=!1;if(W){ve=_.get(De),ve===void 0&&(ve=[],_.set(De,ve));const we=W.textures;if(ve.length!==we.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,ze=we.length;_e<ze;_e++)ve[_e]=i.COLOR_ATTACHMENT0+_e;ve.length=we.length,Ie=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(ve)}function nt(W){return E!==W?(i.useProgram(W),E=W,!0):!1}const st={[gs]:i.FUNC_ADD,[oS]:i.FUNC_SUBTRACT,[lS]:i.FUNC_REVERSE_SUBTRACT};st[uS]=i.MIN,st[cS]=i.MAX;const Ke={[fS]:i.ZERO,[dS]:i.ONE,[hS]:i.SRC_COLOR,[ad]:i.SRC_ALPHA,[xS]:i.SRC_ALPHA_SATURATE,[vS]:i.DST_COLOR,[mS]:i.DST_ALPHA,[pS]:i.ONE_MINUS_SRC_COLOR,[od]:i.ONE_MINUS_SRC_ALPHA,[_S]:i.ONE_MINUS_DST_COLOR,[gS]:i.ONE_MINUS_DST_ALPHA,[yS]:i.CONSTANT_COLOR,[SS]:i.ONE_MINUS_CONSTANT_COLOR,[ES]:i.CONSTANT_ALPHA,[MS]:i.ONE_MINUS_CONSTANT_ALPHA};function O(W,De,ve,Ie,we,_e,ze,ut,Ct,St){if(W===Xr){M===!0&&(ce(i.BLEND),M=!1);return}if(M===!1&&(j(i.BLEND),M=!0),W!==aS){if(W!==y||St!==b){if((x!==gs||C!==gs)&&(i.blendEquation(i.FUNC_ADD),x=gs,C=gs),St)switch(W){case ca:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case og:i.blendFunc(i.ONE,i.ONE);break;case lg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ug:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ca:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case og:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case lg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ug:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,P=null,H=null,U=null,F.set(0,0,0),G=0,y=W,b=St}return}we=we||De,_e=_e||ve,ze=ze||Ie,(De!==x||we!==C)&&(i.blendEquationSeparate(st[De],st[we]),x=De,C=we),(ve!==L||Ie!==P||_e!==H||ze!==U)&&(i.blendFuncSeparate(Ke[ve],Ke[Ie],Ke[_e],Ke[ze]),L=ve,P=Ie,H=_e,U=ze),(ut.equals(F)===!1||Ct!==G)&&(i.blendColor(ut.r,ut.g,ut.b,Ct),F.copy(ut),G=Ct),y=W,b=!1}function qt(W,De){W.side===Ii?ce(i.CULL_FACE):j(i.CULL_FACE);let ve=W.side===Yn;De&&(ve=!ve),gt(ve),W.blending===ca&&W.transparent===!1?O(Xr):O(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const Ie=W.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),vt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(W){R!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),R=W)}function Mt(W){W!==iS?(j(i.CULL_FACE),W!==V&&(W===ag?i.cullFace(i.BACK):W===rS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),V=W}function $e(W){W!==ae&&(ue&&i.lineWidth(W),ae=W)}function vt(W,De,ve){W?(j(i.POLYGON_OFFSET_FILL),(J!==De||le!==ve)&&(i.polygonOffset(De,ve),J=De,le=ve)):ce(i.POLYGON_OFFSET_FILL)}function Ze(W){W?j(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function lt(W){W===void 0&&(W=i.TEXTURE0+he-1),de!==W&&(i.activeTexture(W),de=W)}function Pt(W,De,ve){ve===void 0&&(de===null?ve=i.TEXTURE0+he-1:ve=de);let Ie=oe[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},oe[ve]=Ie),(Ie.type!==W||Ie.texture!==De)&&(de!==ve&&(i.activeTexture(ve),de=ve),i.bindTexture(W,De||Te[W]),Ie.type=W,Ie.texture=De)}function D(){const W=oe[de];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Q(){try{i.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{i.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{i.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{i.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(){try{i.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pe(){try{i.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Be(){try{i.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ye(){try{i.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{i.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(W){Fe.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Fe.copy(W))}function it(W){te.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),te.copy(W))}function Qe(W,De){let ve=p.get(De);ve===void 0&&(ve=new WeakMap,p.set(De,ve));let Ie=ve.get(W);Ie===void 0&&(Ie=i.getUniformBlockIndex(De,W.name),ve.set(W,Ie))}function Le(W,De){const Ie=p.get(De).get(W);d.get(De)!==Ie&&(i.uniformBlockBinding(De,Ie,W.__bindingPointIndex),d.set(De,Ie))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},de=null,oe={},v={},_=new WeakMap,S=[],E=null,M=!1,y=null,x=null,L=null,P=null,C=null,H=null,U=null,F=new Dt(0,0,0),G=0,b=!1,R=null,V=null,ae=null,J=null,le=null,Fe.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:j,disable:ce,bindFramebuffer:xe,drawBuffers:be,useProgram:nt,setBlending:O,setMaterial:qt,setFlipSided:gt,setCullFace:Mt,setLineWidth:$e,setPolygonOffset:vt,setScissorTest:Ze,activeTexture:lt,bindTexture:Pt,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:Q,texImage2D:Ye,texImage3D:Se,updateUBOMapping:Qe,uniformBlockBinding:Le,texStorage2D:Pe,texStorage3D:Be,texSubImage2D:pe,texSubImage3D:ye,compressedTexSubImage2D:fe,compressedTexSubImage3D:je,scissor:Oe,viewport:it,reset:et}}function TR(i,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new bt,m=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return S?new OffscreenCanvas(D,T):Mo("canvas")}function M(D,T,Q){let pe=1;const ye=Pt(D);if((ye.width>Q||ye.height>Q)&&(pe=Q/Math.max(ye.width,ye.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const fe=Math.floor(pe*ye.width),je=Math.floor(pe*ye.height);v===void 0&&(v=E(fe,je));const Pe=T?E(fe,je):v;return Pe.width=fe,Pe.height=je,Pe.getContext("2d").drawImage(D,0,0,fe,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+fe+"x"+je+")."),Pe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){i.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(D,T,Q,pe,ye=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let fe=T;if(T===i.RED&&(Q===i.FLOAT&&(fe=i.R32F),Q===i.HALF_FLOAT&&(fe=i.R16F),Q===i.UNSIGNED_BYTE&&(fe=i.R8)),T===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.R8UI),Q===i.UNSIGNED_SHORT&&(fe=i.R16UI),Q===i.UNSIGNED_INT&&(fe=i.R32UI),Q===i.BYTE&&(fe=i.R8I),Q===i.SHORT&&(fe=i.R16I),Q===i.INT&&(fe=i.R32I)),T===i.RG&&(Q===i.FLOAT&&(fe=i.RG32F),Q===i.HALF_FLOAT&&(fe=i.RG16F),Q===i.UNSIGNED_BYTE&&(fe=i.RG8)),T===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.RG8UI),Q===i.UNSIGNED_SHORT&&(fe=i.RG16UI),Q===i.UNSIGNED_INT&&(fe=i.RG32UI),Q===i.BYTE&&(fe=i.RG8I),Q===i.SHORT&&(fe=i.RG16I),Q===i.INT&&(fe=i.RG32I)),T===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(fe=i.RGB16UI),Q===i.UNSIGNED_INT&&(fe=i.RGB32UI),Q===i.BYTE&&(fe=i.RGB8I),Q===i.SHORT&&(fe=i.RGB16I),Q===i.INT&&(fe=i.RGB32I)),T===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(fe=i.RGBA16UI),Q===i.UNSIGNED_INT&&(fe=i.RGBA32UI),Q===i.BYTE&&(fe=i.RGBA8I),Q===i.SHORT&&(fe=i.RGBA16I),Q===i.INT&&(fe=i.RGBA32I)),T===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(fe=i.RGB9_E5),T===i.RGBA){const je=ye?Eu:At.getTransfer(pe);Q===i.FLOAT&&(fe=i.RGBA32F),Q===i.HALF_FLOAT&&(fe=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(fe=je===Ut?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function C(D,T){let Q;return D?T===null||T===ys||T===xo?Q=i.DEPTH24_STENCIL8:T===ar?Q=i.DEPTH32F_STENCIL8:T===_o&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ys||T===xo?Q=i.DEPTH_COMPONENT24:T===ar?Q=i.DEPTH_COMPONENT32F:T===_o&&(Q=i.DEPTH_COMPONENT16),Q}function H(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==yn&&D.minFilter!==Oi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function U(D){const T=D.target;T.removeEventListener("dispose",U),G(T),T.isVideoTexture&&m.delete(T)}function F(D){const T=D.target;T.removeEventListener("dispose",F),R(T)}function G(D){const T=s.get(D);if(T.__webglInit===void 0)return;const Q=D.source,pe=_.get(Q);if(pe){const ye=pe[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&b(D),Object.keys(pe).length===0&&_.delete(Q)}s.remove(D)}function b(D){const T=s.get(D);i.deleteTexture(T.__webglTexture);const Q=D.source,pe=_.get(Q);delete pe[T.__cacheKey],c.memory.textures--}function R(D){const T=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ye=0;ye<T.__webglFramebuffer[pe].length;ye++)i.deleteFramebuffer(T.__webglFramebuffer[pe][ye]);else i.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)i.deleteFramebuffer(T.__webglFramebuffer[pe]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=D.textures;for(let pe=0,ye=Q.length;pe<ye;pe++){const fe=s.get(Q[pe]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),c.memory.textures--),s.remove(Q[pe])}s.remove(D)}let V=0;function ae(){V=0}function J(){const D=V;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),V+=1,D}function le(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function he(D,T){const Q=s.get(D);if(D.isVideoTexture&&Ze(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Q,D,T);return}}t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+T)}function ue(D,T){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){Te(Q,D,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+T)}function me(D,T){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){Te(Q,D,T);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+T)}function k(D,T){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){j(Q,D,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+T)}const de={[vo]:i.REPEAT,[sr]:i.CLAMP_TO_EDGE,[vd]:i.MIRRORED_REPEAT},oe={[yn]:i.NEAREST,[NS]:i.NEAREST_MIPMAP_NEAREST,[Ol]:i.NEAREST_MIPMAP_LINEAR,[Oi]:i.LINEAR,[Sf]:i.LINEAR_MIPMAP_NEAREST,[_s]:i.LINEAR_MIPMAP_LINEAR},I={[kS]:i.NEVER,[WS]:i.ALWAYS,[BS]:i.LESS,[i_]:i.LEQUAL,[zS]:i.EQUAL,[GS]:i.GEQUAL,[HS]:i.GREATER,[VS]:i.NOTEQUAL};function re(D,T){if(T.type===ar&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Oi||T.magFilter===Sf||T.magFilter===Ol||T.magFilter===_s||T.minFilter===Oi||T.minFilter===Sf||T.minFilter===Ol||T.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,de[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,de[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,de[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,oe[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,oe[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yn||T.minFilter!==Ol&&T.minFilter!==_s||T.type===ar&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Fe(D,T){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",U));const pe=T.source;let ye=_.get(pe);ye===void 0&&(ye={},_.set(pe,ye));const fe=le(T);if(fe!==D.__cacheKey){ye[fe]===void 0&&(ye[fe]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),ye[fe].usedTimes++;const je=ye[D.__cacheKey];je!==void 0&&(ye[D.__cacheKey].usedTimes--,je.usedTimes===0&&b(T)),D.__cacheKey=fe,D.__webglTexture=ye[fe].texture}return Q}function te(D,T,Q){return Math.floor(Math.floor(D/Q)/T)}function ge(D,T,Q,pe){const fe=D.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,Q,pe,T.data);else{fe.sort((Se,Oe)=>Se.start-Oe.start);let je=0;for(let Se=1;Se<fe.length;Se++){const Oe=fe[je],it=fe[Se],Qe=Oe.start+Oe.count,Le=te(it.start,T.width,4),et=te(Oe.start,T.width,4);it.start<=Qe+1&&Le===et&&te(it.start+it.count-1,T.width,4)===Le?Oe.count=Math.max(Oe.count,it.start+it.count-Oe.start):(++je,fe[je]=it)}fe.length=je+1;const Pe=i.getParameter(i.UNPACK_ROW_LENGTH),Be=i.getParameter(i.UNPACK_SKIP_PIXELS),Ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Se=0,Oe=fe.length;Se<Oe;Se++){const it=fe[Se],Qe=Math.floor(it.start/4),Le=Math.ceil(it.count/4),et=Qe%T.width,W=Math.floor(Qe/T.width),De=Le,ve=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,et),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,et,W,De,ve,Q,pe,T.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ye)}}function Te(D,T,Q){let pe=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=i.TEXTURE_3D);const ye=Fe(D,T),fe=T.source;t.bindTexture(pe,D.__webglTexture,i.TEXTURE0+Q);const je=s.get(fe);if(fe.version!==je.__version||ye===!0){t.activeTexture(i.TEXTURE0+Q);const Pe=At.getPrimaries(At.workingColorSpace),Be=T.colorSpace===Gr?null:At.getPrimaries(T.colorSpace),Ye=T.colorSpace===Gr||Pe===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Se=M(T.image,!1,a.maxTextureSize);Se=lt(T,Se);const Oe=l.convert(T.format,T.colorSpace),it=l.convert(T.type);let Qe=P(T.internalFormat,Oe,it,T.colorSpace,T.isVideoTexture);re(pe,T);let Le;const et=T.mipmaps,W=T.isVideoTexture!==!0,De=je.__version===void 0||ye===!0,ve=fe.dataReady,Ie=H(T,Se);if(T.isDepthTexture)Qe=C(T.format===So,T.type),De&&(W?t.texStorage2D(i.TEXTURE_2D,1,Qe,Se.width,Se.height):t.texImage2D(i.TEXTURE_2D,0,Qe,Se.width,Se.height,0,Oe,it,null));else if(T.isDataTexture)if(et.length>0){W&&De&&t.texStorage2D(i.TEXTURE_2D,Ie,Qe,et[0].width,et[0].height);for(let we=0,_e=et.length;we<_e;we++)Le=et[we],W?ve&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,Le.width,Le.height,Oe,it,Le.data):t.texImage2D(i.TEXTURE_2D,we,Qe,Le.width,Le.height,0,Oe,it,Le.data);T.generateMipmaps=!1}else W?(De&&t.texStorage2D(i.TEXTURE_2D,Ie,Qe,Se.width,Se.height),ve&&ge(T,Se,Oe,it)):t.texImage2D(i.TEXTURE_2D,0,Qe,Se.width,Se.height,0,Oe,it,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Qe,et[0].width,et[0].height,Se.depth);for(let we=0,_e=et.length;we<_e;we++)if(Le=et[we],T.format!==Ti)if(Oe!==null)if(W){if(ve)if(T.layerUpdates.size>0){const ze=Ng(Le.width,Le.height,T.format,T.type);for(const ut of T.layerUpdates){const Ct=Le.data.subarray(ut*ze/Le.data.BYTES_PER_ELEMENT,(ut+1)*ze/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,ut,Le.width,Le.height,1,Oe,Ct)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Le.width,Le.height,Se.depth,Oe,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,Qe,Le.width,Le.height,Se.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Le.width,Le.height,Se.depth,Oe,it,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,Qe,Le.width,Le.height,Se.depth,0,Oe,it,Le.data)}else{W&&De&&t.texStorage2D(i.TEXTURE_2D,Ie,Qe,et[0].width,et[0].height);for(let we=0,_e=et.length;we<_e;we++)Le=et[we],T.format!==Ti?Oe!==null?W?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,Le.width,Le.height,Oe,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,we,Qe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?ve&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,Le.width,Le.height,Oe,it,Le.data):t.texImage2D(i.TEXTURE_2D,we,Qe,Le.width,Le.height,0,Oe,it,Le.data)}else if(T.isDataArrayTexture)if(W){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Qe,Se.width,Se.height,Se.depth),ve)if(T.layerUpdates.size>0){const we=Ng(Se.width,Se.height,T.format,T.type);for(const _e of T.layerUpdates){const ze=Se.data.subarray(_e*we/Se.data.BYTES_PER_ELEMENT,(_e+1)*we/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,Se.width,Se.height,1,Oe,it,ze)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Oe,it,Se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Qe,Se.width,Se.height,Se.depth,0,Oe,it,Se.data);else if(T.isData3DTexture)W?(De&&t.texStorage3D(i.TEXTURE_3D,Ie,Qe,Se.width,Se.height,Se.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Oe,it,Se.data)):t.texImage3D(i.TEXTURE_3D,0,Qe,Se.width,Se.height,Se.depth,0,Oe,it,Se.data);else if(T.isFramebufferTexture){if(De)if(W)t.texStorage2D(i.TEXTURE_2D,Ie,Qe,Se.width,Se.height);else{let we=Se.width,_e=Se.height;for(let ze=0;ze<Ie;ze++)t.texImage2D(i.TEXTURE_2D,ze,Qe,we,_e,0,Oe,it,null),we>>=1,_e>>=1}}else if(et.length>0){if(W&&De){const we=Pt(et[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Qe,we.width,we.height)}for(let we=0,_e=et.length;we<_e;we++)Le=et[we],W?ve&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,Oe,it,Le):t.texImage2D(i.TEXTURE_2D,we,Qe,Oe,it,Le);T.generateMipmaps=!1}else if(W){if(De){const we=Pt(Se);t.texStorage2D(i.TEXTURE_2D,Ie,Qe,we.width,we.height)}ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe,it,Se)}else t.texImage2D(i.TEXTURE_2D,0,Qe,Oe,it,Se);y(T)&&x(pe),je.__version=fe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function j(D,T,Q){if(T.image.length!==6)return;const pe=Fe(D,T),ye=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+Q);const fe=s.get(ye);if(ye.version!==fe.__version||pe===!0){t.activeTexture(i.TEXTURE0+Q);const je=At.getPrimaries(At.workingColorSpace),Pe=T.colorSpace===Gr?null:At.getPrimaries(T.colorSpace),Be=T.colorSpace===Gr||je===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let _e=0;_e<6;_e++)!Ye&&!Se?Oe[_e]=M(T.image[_e],!0,a.maxCubemapSize):Oe[_e]=Se?T.image[_e].image:T.image[_e],Oe[_e]=lt(T,Oe[_e]);const it=Oe[0],Qe=l.convert(T.format,T.colorSpace),Le=l.convert(T.type),et=P(T.internalFormat,Qe,Le,T.colorSpace),W=T.isVideoTexture!==!0,De=fe.__version===void 0||pe===!0,ve=ye.dataReady;let Ie=H(T,it);re(i.TEXTURE_CUBE_MAP,T);let we;if(Ye){W&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,et,it.width,it.height);for(let _e=0;_e<6;_e++){we=Oe[_e].mipmaps;for(let ze=0;ze<we.length;ze++){const ut=we[ze];T.format!==Ti?Qe!==null?W?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,0,0,ut.width,ut.height,Qe,ut.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,et,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,0,0,ut.width,ut.height,Qe,Le,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,et,ut.width,ut.height,0,Qe,Le,ut.data)}}}else{if(we=T.mipmaps,W&&De){we.length>0&&Ie++;const _e=Pt(Oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,et,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Se){W?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Oe[_e].width,Oe[_e].height,Qe,Le,Oe[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,et,Oe[_e].width,Oe[_e].height,0,Qe,Le,Oe[_e].data);for(let ze=0;ze<we.length;ze++){const Ct=we[ze].image[_e].image;W?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,0,0,Ct.width,Ct.height,Qe,Le,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,et,Ct.width,Ct.height,0,Qe,Le,Ct.data)}}else{W?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Qe,Le,Oe[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,et,Qe,Le,Oe[_e]);for(let ze=0;ze<we.length;ze++){const ut=we[ze];W?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,0,0,Qe,Le,ut.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,et,Qe,Le,ut.image[_e])}}}y(T)&&x(i.TEXTURE_CUBE_MAP),fe.__version=ye.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ce(D,T,Q,pe,ye,fe){const je=l.convert(Q.format,Q.colorSpace),Pe=l.convert(Q.type),Be=P(Q.internalFormat,je,Pe,Q.colorSpace),Ye=s.get(T),Se=s.get(Q);if(Se.__renderTarget=T,!Ye.__hasExternalTextures){const Oe=Math.max(1,T.width>>fe),it=Math.max(1,T.height>>fe);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,fe,Be,Oe,it,T.depth,0,je,Pe,null):t.texImage2D(ye,fe,Be,Oe,it,0,je,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),vt(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,ye,Se.__webglTexture,0,$e(T)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,ye,Se.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(D,T,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const pe=T.depthTexture,ye=pe&&pe.isDepthTexture?pe.type:null,fe=C(T.stencilBuffer,ye),je=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=$e(T);vt(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,fe,T.width,T.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,fe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,fe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,je,i.RENDERBUFFER,D)}else{const pe=T.textures;for(let ye=0;ye<pe.length;ye++){const fe=pe[ye],je=l.convert(fe.format,fe.colorSpace),Pe=l.convert(fe.type),Be=P(fe.internalFormat,je,Pe,fe.colorSpace),Ye=$e(T);Q&&vt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,Be,T.width,T.height):vt(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,Be,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Be,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=s.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const ye=pe.__webglTexture,fe=$e(T);if(T.depthTexture.format===yo)vt(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(T.depthTexture.format===So)vt(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function nt(D){const T=s.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ye=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ye)};pe.addEventListener("dispose",ye),T.__depthDisposeCallback=ye}T.__boundDepthTexture=pe}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const pe=D.texture.mipmaps;pe&&pe.length>0?be(T.__webglFramebuffer[0],D):be(T.__webglFramebuffer,D)}else if(Q){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=i.createRenderbuffer(),xe(T.__webglDepthbuffer[pe],D,!1);else{const ye=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,fe)}}else{const pe=D.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),xe(T.__webglDepthbuffer,D,!1);else{const ye=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(D,T,Q){const pe=s.get(D);T!==void 0&&ce(pe.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&nt(D)}function Ke(D){const T=D.texture,Q=s.get(D),pe=s.get(T);D.addEventListener("dispose",F);const ye=D.textures,fe=D.isWebGLCubeRenderTarget===!0,je=ye.length>1;if(je||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=T.version,c.memory.textures++),fe){Q.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[Pe]=[];for(let Be=0;Be<T.mipmaps.length;Be++)Q.__webglFramebuffer[Pe][Be]=i.createFramebuffer()}else Q.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)Q.__webglFramebuffer[Pe]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(je)for(let Pe=0,Be=ye.length;Pe<Be;Pe++){const Ye=s.get(ye[Pe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),c.memory.textures++)}if(D.samples>0&&vt(D)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ye.length;Pe++){const Be=ye[Pe];Q.__webglColorRenderbuffer[Pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Pe]);const Ye=l.convert(Be.format,Be.colorSpace),Se=l.convert(Be.type),Oe=P(Be.internalFormat,Ye,Se,Be.colorSpace,D.isXRRenderTarget===!0),it=$e(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Oe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(Q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),re(i.TEXTURE_CUBE_MAP,T);for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Be=0;Be<T.mipmaps.length;Be++)ce(Q.__webglFramebuffer[Pe][Be],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Be);else ce(Q.__webglFramebuffer[Pe],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);y(T)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Pe=0,Be=ye.length;Pe<Be;Pe++){const Ye=ye[Pe],Se=s.get(Ye);t.bindTexture(i.TEXTURE_2D,Se.__webglTexture),re(i.TEXTURE_2D,Ye),ce(Q.__webglFramebuffer,D,Ye,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,0),y(Ye)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,pe.__webglTexture),re(Pe,T),T.mipmaps&&T.mipmaps.length>0)for(let Be=0;Be<T.mipmaps.length;Be++)ce(Q.__webglFramebuffer[Be],D,T,i.COLOR_ATTACHMENT0,Pe,Be);else ce(Q.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,Pe,0);y(T)&&x(Pe),t.unbindTexture()}D.depthBuffer&&nt(D)}function O(D){const T=D.textures;for(let Q=0,pe=T.length;Q<pe;Q++){const ye=T[Q];if(y(ye)){const fe=L(D),je=s.get(ye).__webglTexture;t.bindTexture(fe,je),x(fe),t.unbindTexture()}}}const qt=[],gt=[];function Mt(D){if(D.samples>0){if(vt(D)===!1){const T=D.textures,Q=D.width,pe=D.height;let ye=i.COLOR_BUFFER_BIT;const fe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,je=s.get(D),Pe=T.length>1;if(Pe)for(let Ye=0;Ye<T.length;Ye++)t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Be=D.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Ye=0;Ye<T.length;Ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),Pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,je.__webglColorRenderbuffer[Ye]);const Se=s.get(T[Ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,Q,pe,0,0,Q,pe,ye,i.NEAREST),d===!0&&(qt.length=0,gt.length=0,qt.push(i.COLOR_ATTACHMENT0+Ye),D.depthBuffer&&D.resolveDepthBuffer===!1&&(qt.push(fe),gt.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pe)for(let Ye=0;Ye<T.length;Ye++){t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,je.__webglColorRenderbuffer[Ye]);const Se=s.get(T[Ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,Se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function $e(D){return Math.min(a.maxSamples,D.samples)}function vt(D){const T=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(D){const T=c.render.frame;m.get(D)!==T&&(m.set(D,T),D.update())}function lt(D,T){const Q=D.colorSpace,pe=D.format,ye=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==ga&&Q!==Gr&&(At.getTransfer(Q)===Ut?(pe!==Ti||ye!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function Pt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=ae,this.setTexture2D=he,this.setTexture2DArray=ue,this.setTexture3D=me,this.setTextureCube=k,this.rebindTextures=st,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=vt}function RR(i,e){function t(s,a=Gr){let l;const c=At.getTransfer(a);if(s===Gi)return i.UNSIGNED_BYTE;if(s===rh)return i.UNSIGNED_SHORT_4_4_4_4;if(s===sh)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Zv)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===qv)return i.BYTE;if(s===Kv)return i.SHORT;if(s===_o)return i.UNSIGNED_SHORT;if(s===ih)return i.INT;if(s===ys)return i.UNSIGNED_INT;if(s===ar)return i.FLOAT;if(s===Co)return i.HALF_FLOAT;if(s===Jv)return i.ALPHA;if(s===Qv)return i.RGB;if(s===Ti)return i.RGBA;if(s===yo)return i.DEPTH_COMPONENT;if(s===So)return i.DEPTH_STENCIL;if(s===e_)return i.RED;if(s===ah)return i.RED_INTEGER;if(s===t_)return i.RG;if(s===oh)return i.RG_INTEGER;if(s===lh)return i.RGBA_INTEGER;if(s===hu||s===pu||s===mu||s===gu)if(c===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===hu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===hu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_d||s===xd||s===yd||s===Sd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===_d)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ed||s===Md||s===wd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Ed||s===Md)return c===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===wd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Td||s===Rd||s===Ad||s===Cd||s===bd||s===Pd||s===Ld||s===Dd||s===Nd||s===Ud||s===Id||s===Fd||s===Od||s===kd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Td)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ad)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ld)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ud)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Id)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Od)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vu||s===Bd||s===zd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===vu)return c===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===n_||s===Hd||s===Vd||s===Gd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===vu)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Hd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xo?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}const AR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CR=`
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

}`;class bR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Bn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new $r({vertexShader:AR,fragmentShader:CR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ki(new Lu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PR extends Sa{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",d=1,p=null,m=null,v=null,_=null,S=null,E=null;const M=new bR,y=t.getContextAttributes();let x=null,L=null;const P=[],C=[],H=new bt;let U=null;const F=new ci;F.viewport=new $t;const G=new ci;G.viewport=new $t;const b=[F,G],R=new ZE;let V=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=P[te];return ge===void 0&&(ge=new Vf,P[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=P[te];return ge===void 0&&(ge=new Vf,P[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=P[te];return ge===void 0&&(ge=new Vf,P[te]=ge),ge.getHandSpace()};function J(te){const ge=C.indexOf(te.inputSource);if(ge===-1)return;const Te=P[ge];Te!==void 0&&(Te.update(te.inputSource,te.frame,p||c),Te.dispatchEvent({type:te.type,data:te.inputSource}))}function le(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",he);for(let te=0;te<P.length;te++){const ge=C[te];ge!==null&&(C[te]=null,P[te].disconnect(ge))}V=null,ae=null,M.reset(),e.setRenderTarget(x),S=null,_=null,v=null,a=null,L=null,Fe.stop(),s.isPresenting=!1,e.setPixelRatio(U),e.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",le),a.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,j=null,ce=null;y.depth&&(ce=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=y.stencil?So:yo,j=y.stencil?xo:ys);const xe={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:l};v=new XRWebGLBinding(a,t),_=v.createProjectionLayer(xe),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Ss(_.textureWidth,_.textureHeight,{format:Ti,type:Gi,depthTexture:new h_(_.textureWidth,_.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Te),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Ss(S.framebufferWidth,S.framebufferHeight,{format:Ti,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await a.requestReferenceSpace(f),Fe.setContext(a),Fe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function he(te){for(let ge=0;ge<te.removed.length;ge++){const Te=te.removed[ge],j=C.indexOf(Te);j>=0&&(C[j]=null,P[j].disconnect(Te))}for(let ge=0;ge<te.added.length;ge++){const Te=te.added[ge];let j=C.indexOf(Te);if(j===-1){for(let xe=0;xe<P.length;xe++)if(xe>=C.length){C.push(Te),j=xe;break}else if(C[xe]===null){C[xe]=Te,j=xe;break}if(j===-1)break}const ce=P[j];ce&&ce.connect(Te)}}const ue=new ne,me=new ne;function k(te,ge,Te){ue.setFromMatrixPosition(ge.matrixWorld),me.setFromMatrixPosition(Te.matrixWorld);const j=ue.distanceTo(me),ce=ge.projectionMatrix.elements,xe=Te.projectionMatrix.elements,be=ce[14]/(ce[10]-1),nt=ce[14]/(ce[10]+1),st=(ce[9]+1)/ce[5],Ke=(ce[9]-1)/ce[5],O=(ce[8]-1)/ce[0],qt=(xe[8]+1)/xe[0],gt=be*O,Mt=be*qt,$e=j/(-O+qt),vt=$e*-O;if(ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(vt),te.translateZ($e),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ce[10]===-1)te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Ze=be+$e,lt=nt+$e,Pt=gt-vt,D=Mt+(j-vt),T=st*nt/lt*Ze,Q=Ke*nt/lt*Ze;te.projectionMatrix.makePerspective(Pt,D,T,Q,Ze,lt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function de(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let ge=te.near,Te=te.far;M.texture!==null&&(M.depthNear>0&&(ge=M.depthNear),M.depthFar>0&&(Te=M.depthFar)),R.near=G.near=F.near=ge,R.far=G.far=F.far=Te,(V!==R.near||ae!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,ae=R.far),F.layers.mask=te.layers.mask|2,G.layers.mask=te.layers.mask|4,R.layers.mask=F.layers.mask|G.layers.mask;const j=te.parent,ce=R.cameras;de(R,j);for(let xe=0;xe<ce.length;xe++)de(ce[xe],j);ce.length===2?k(R,F,G):R.projectionMatrix.copy(F.projectionMatrix),oe(te,R,j)};function oe(te,ge,Te){Te===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(Te.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Eo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&S===null))return d},this.setFoveation=function(te){d=te,_!==null&&(_.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(R)};let I=null;function re(te,ge){if(m=ge.getViewerPose(p||c),E=ge,m!==null){const Te=m.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let j=!1;Te.length!==R.cameras.length&&(R.cameras.length=0,j=!0);for(let be=0;be<Te.length;be++){const nt=Te[be];let st=null;if(S!==null)st=S.getViewport(nt);else{const O=v.getViewSubImage(_,nt);st=O.viewport,be===0&&(e.setRenderTargetTextures(L,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(L))}let Ke=b[be];Ke===void 0&&(Ke=new ci,Ke.layers.enable(be),Ke.viewport=new $t,b[be]=Ke),Ke.matrix.fromArray(nt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(nt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(st.x,st.y,st.width,st.height),be===0&&(R.matrix.copy(Ke.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),j===!0&&R.cameras.push(Ke)}const ce=a.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const be=v.getDepthInformation(Te[0]);be&&be.isValid&&be.texture&&M.init(e,be,a.renderState)}}for(let Te=0;Te<P.length;Te++){const j=C[Te],ce=P[Te];j!==null&&ce!==void 0&&ce.update(j,ge,p||c)}I&&I(te,ge),ge.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ge}),E=null}const Fe=new m_;Fe.setAnimationLoop(re),this.setAnimationLoop=function(te){I=te},this.dispose=function(){}}}const hs=new kn,LR=new Yt;function DR(i,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,c_(i)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function a(y,x,L,P,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),v(y,x)):x.isMeshPhongMaterial?(l(y,x),m(y,x)):x.isMeshStandardMaterial?(l(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(l(y,x),E(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),M(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?d(y,x,L,P):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Yn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Yn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const L=e.get(x),P=L.envMap,C=L.envMapRotation;P&&(y.envMap.value=P,hs.copy(C),hs.x*=-1,hs.y*=-1,hs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),y.envMapRotation.value.setFromMatrix4(LR.makeRotationFromEuler(hs)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,L,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*L,y.scale.value=P*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,L){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const L=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function NR(i,e,t,s){let a={},l={},c=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,P){const C=P.program;s.uniformBlockBinding(L,C)}function p(L,P){let C=a[L.id];C===void 0&&(E(L),C=m(L),a[L.id]=C,L.addEventListener("dispose",y));const H=P.program;s.updateUBOMapping(L,H);const U=e.render.frame;l[L.id]!==U&&(_(L),l[L.id]=U)}function m(L){const P=v();L.__bindingPointIndex=P;const C=i.createBuffer(),H=L.__size,U=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,H,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,C),C}function v(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const P=a[L.id],C=L.uniforms,H=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let U=0,F=C.length;U<F;U++){const G=Array.isArray(C[U])?C[U]:[C[U]];for(let b=0,R=G.length;b<R;b++){const V=G[b];if(S(V,U,b,H)===!0){const ae=V.__offset,J=Array.isArray(V.value)?V.value:[V.value];let le=0;for(let he=0;he<J.length;he++){const ue=J[he],me=M(ue);typeof ue=="number"||typeof ue=="boolean"?(V.__data[0]=ue,i.bufferSubData(i.UNIFORM_BUFFER,ae+le,V.__data)):ue.isMatrix3?(V.__data[0]=ue.elements[0],V.__data[1]=ue.elements[1],V.__data[2]=ue.elements[2],V.__data[3]=0,V.__data[4]=ue.elements[3],V.__data[5]=ue.elements[4],V.__data[6]=ue.elements[5],V.__data[7]=0,V.__data[8]=ue.elements[6],V.__data[9]=ue.elements[7],V.__data[10]=ue.elements[8],V.__data[11]=0):(ue.toArray(V.__data,le),le+=me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ae,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(L,P,C,H){const U=L.value,F=P+"_"+C;if(H[F]===void 0)return typeof U=="number"||typeof U=="boolean"?H[F]=U:H[F]=U.clone(),!0;{const G=H[F];if(typeof U=="number"||typeof U=="boolean"){if(G!==U)return H[F]=U,!0}else if(G.equals(U)===!1)return G.copy(U),!0}return!1}function E(L){const P=L.uniforms;let C=0;const H=16;for(let F=0,G=P.length;F<G;F++){const b=Array.isArray(P[F])?P[F]:[P[F]];for(let R=0,V=b.length;R<V;R++){const ae=b[R],J=Array.isArray(ae.value)?ae.value:[ae.value];for(let le=0,he=J.length;le<he;le++){const ue=J[le],me=M(ue),k=C%H,de=k%me.boundary,oe=k+de;C+=de,oe!==0&&H-oe<me.storage&&(C+=H-oe),ae.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=C,C+=me.storage}}}const U=C%H;return U>0&&(C+=H-U),L.__size=C,L.__cache={},this}function M(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function y(L){const P=L.target;P.removeEventListener("dispose",y);const C=c.indexOf(P.__bindingPointIndex);c.splice(C,1),i.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function x(){for(const L in a)i.deleteBuffer(a[L]);c=[],a={},l={}}return{bind:d,update:p,dispose:x}}class UR{constructor(e={}){const{canvas:t=lE(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),M=new Int32Array(4);let y=null,x=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let H=!1;this._outputColorSpace=On;let U=0,F=0,G=null,b=-1,R=null;const V=new $t,ae=new $t;let J=null;const le=new Dt(0);let he=0,ue=t.width,me=t.height,k=1,de=null,oe=null;const I=new $t(0,0,ue,me),re=new $t(0,0,ue,me);let Fe=!1;const te=new hh;let ge=!1,Te=!1;const j=new Yt,ce=new Yt,xe=new ne,be=new $t,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Ke(){return G===null?k:1}let O=s;function qt(A,Y){return t.getContext(A,Y)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nh}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",_e,!1),O===null){const Y="webgl2";if(O=qt(Y,A),O===null)throw qt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let gt,Mt,$e,vt,Ze,lt,Pt,D,T,Q,pe,ye,fe,je,Pe,Be,Ye,Se,Oe,it,Qe,Le,et,W;function De(){gt=new WT(O),gt.init(),Le=new RR(O,gt),Mt=new OT(O,gt,e,Le),$e=new wR(O,gt),Mt.reverseDepthBuffer&&_&&$e.buffers.depth.setReversed(!0),vt=new $T(O),Ze=new fR,lt=new TR(O,gt,$e,Ze,Mt,Le,vt),Pt=new BT(C),D=new GT(C),T=new QE(O),et=new IT(O,T),Q=new XT(O,T,vt,et),pe=new qT(O,Q,T,vt),Oe=new YT(O,Mt,lt),Be=new kT(Ze),ye=new cR(C,Pt,D,gt,Mt,et,Be),fe=new DR(C,Ze),je=new hR,Pe=new xR(gt),Se=new UT(C,Pt,D,$e,pe,S,d),Ye=new ER(C,pe,Mt),W=new NR(O,vt,Mt,$e),it=new FT(O,gt,vt),Qe=new jT(O,gt,vt),vt.programs=ye.programs,C.capabilities=Mt,C.extensions=gt,C.properties=Ze,C.renderLists=je,C.shadowMap=Ye,C.state=$e,C.info=vt}De();const ve=new PR(C,O);this.xr=ve,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(ue,me,!1))},this.getSize=function(A){return A.set(ue,me)},this.setSize=function(A,Y,se=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=A,me=Y,t.width=Math.floor(A*k),t.height=Math.floor(Y*k),se===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(ue*k,me*k).floor()},this.setDrawingBufferSize=function(A,Y,se){ue=A,me=Y,k=se,t.width=Math.floor(A*se),t.height=Math.floor(Y*se),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,Y,se,Z){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,Y,se,Z),$e.viewport(V.copy(I).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,Y,se,Z){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,Y,se,Z),$e.scissor(ae.copy(re).multiplyScalar(k).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(A){$e.setScissorTest(Fe=A)},this.setOpaqueSort=function(A){de=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,se=!0){let Z=0;if(A){let q=!1;if(G!==null){const Ae=G.texture.format;q=Ae===lh||Ae===oh||Ae===ah}if(q){const Ae=G.texture.type,Ne=Ae===Gi||Ae===ys||Ae===_o||Ae===xo||Ae===rh||Ae===sh,Ve=Se.getClearColor(),He=Se.getClearAlpha(),ft=Ve.r,ct=Ve.g,We=Ve.b;Ne?(E[0]=ft,E[1]=ct,E[2]=We,E[3]=He,O.clearBufferuiv(O.COLOR,0,E)):(M[0]=ft,M[1]=ct,M[2]=We,M[3]=He,O.clearBufferiv(O.COLOR,0,M))}else Z|=O.COLOR_BUFFER_BIT}Y&&(Z|=O.DEPTH_BUFFER_BIT),se&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Se.dispose(),je.dispose(),Pe.dispose(),Ze.dispose(),Pt.dispose(),D.dispose(),pe.dispose(),et.dispose(),W.dispose(),ye.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",pr),ve.removeEventListener("sessionend",di),hi.stop()};function Ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=vt.autoReset,Y=Ye.enabled,se=Ye.autoUpdate,Z=Ye.needsUpdate,q=Ye.type;De(),vt.autoReset=A,Ye.enabled=Y,Ye.autoUpdate=se,Ye.needsUpdate=Z,Ye.type=q}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ze(A){const Y=A.target;Y.removeEventListener("dispose",ze),ut(Y)}function ut(A){Ct(A),Ze.remove(A)}function Ct(A){const Y=Ze.get(A).programs;Y!==void 0&&(Y.forEach(function(se){ye.releaseProgram(se)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,se,Z,q,Ae){Y===null&&(Y=nt);const Ne=q.isMesh&&q.matrixWorld.determinant()<0,Ve=zn(A,Y,se,Z,q);$e.setMaterial(Z,Ne);let He=se.index,ft=1;if(Z.wireframe===!0){if(He=Q.getWireframeAttribute(se),He===void 0)return;ft=2}const ct=se.drawRange,We=se.attributes.position;let _t=ct.start*ft,pt=(ct.start+ct.count)*ft;Ae!==null&&(_t=Math.max(_t,Ae.start*ft),pt=Math.min(pt,(Ae.start+Ae.count)*ft)),He!==null?(_t=Math.max(_t,0),pt=Math.min(pt,He.count)):We!=null&&(_t=Math.max(_t,0),pt=Math.min(pt,We.count));const Ht=pt-_t;if(Ht<0||Ht===1/0)return;et.setup(q,Z,Ve,se,He);let Ft,Lt=it;if(He!==null&&(Ft=T.get(He),Lt=Qe,Lt.setIndex(Ft)),q.isMesh)Z.wireframe===!0?($e.setLineWidth(Z.wireframeLinewidth*Ke()),Lt.setMode(O.LINES)):Lt.setMode(O.TRIANGLES);else if(q.isLine){let tt=Z.linewidth;tt===void 0&&(tt=1),$e.setLineWidth(tt*Ke()),q.isLineSegments?Lt.setMode(O.LINES):q.isLineLoop?Lt.setMode(O.LINE_LOOP):Lt.setMode(O.LINE_STRIP)}else q.isPoints?Lt.setMode(O.POINTS):q.isSprite&&Lt.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)fa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const tt=q._multiDrawStarts,Nt=q._multiDrawCounts,xt=q._multiDrawCount,un=He?T.get(He).bytesPerElement:1,gr=Ze.get(Z).currentProgram.getUniforms();for(let Ln=0;Ln<xt;Ln++)gr.setValue(O,"_gl_DrawID",Ln),Lt.render(tt[Ln]/un,Nt[Ln])}else if(q.isInstancedMesh)Lt.renderInstances(_t,Ht,q.count);else if(se.isInstancedBufferGeometry){const tt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Nt=Math.min(se.instanceCount,tt);Lt.renderInstances(_t,Ht,Nt)}else Lt.render(_t,Ht)};function St(A,Y,se){A.transparent===!0&&A.side===Ii&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,Sn(A,Y,se),A.side=jr,A.needsUpdate=!0,Sn(A,Y,se),A.side=Ii):Sn(A,Y,se)}this.compile=function(A,Y,se=null){se===null&&(se=A),x=Pe.get(se),x.init(Y),P.push(x),se.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),A!==se&&A.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const Z=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Ae=q.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const Ve=Ae[Ne];St(Ve,se,q),Z.add(Ve)}else St(Ae,se,q),Z.add(Ae)}),x=P.pop(),Z},this.compileAsync=function(A,Y,se=null){const Z=this.compile(A,Y,se);return new Promise(q=>{function Ae(){if(Z.forEach(function(Ne){Ze.get(Ne).currentProgram.isReady()&&Z.delete(Ne)}),Z.size===0){q(A);return}setTimeout(Ae,10)}gt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let on=null;function gn(A){on&&on(A)}function pr(){hi.stop()}function di(){hi.start()}const hi=new m_;hi.setAnimationLoop(gn),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(A){on=A,ve.setAnimationLoop(A),A===null?hi.stop():hi.start()},ve.addEventListener("sessionstart",pr),ve.addEventListener("sessionend",di),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(Y),Y=ve.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,Y,G),x=Pe.get(A,P.length),x.init(Y),P.push(x),ce.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),te.setFromProjectionMatrix(ce),Te=this.localClippingEnabled,ge=Be.init(this.clippingPlanes,Te),y=je.get(A,L.length),y.init(),L.push(y),ve.enabled===!0&&ve.isPresenting===!0){const Ae=C.xr.getDepthSensingMesh();Ae!==null&&pi(Ae,Y,-1/0,C.sortObjects)}pi(A,Y,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(de,oe),st=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,st&&Se.addToRenderList(y,A),this.info.render.frame++,ge===!0&&Be.beginShadows();const se=x.state.shadowsArray;Ye.render(se,A,Y),ge===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=y.opaque,q=y.transmissive;if(x.setupLights(),Y.isArrayCamera){const Ae=Y.cameras;if(q.length>0)for(let Ne=0,Ve=Ae.length;Ne<Ve;Ne++){const He=Ae[Ne];It(Z,q,A,He)}st&&Se.render(A);for(let Ne=0,Ve=Ae.length;Ne<Ve;Ne++){const He=Ae[Ne];rt(y,A,He,He.viewport)}}else q.length>0&&It(Z,q,A,Y),st&&Se.render(A),rt(y,A,Y);G!==null&&F===0&&(lt.updateMultisampleRenderTarget(G),lt.updateRenderTargetMipmap(G)),A.isScene===!0&&A.onAfterRender(C,A,Y),et.resetDefaultState(),b=-1,R=null,P.pop(),P.length>0?(x=P[P.length-1],ge===!0&&Be.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function pi(A,Y,se,Z){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){Z&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);const Ne=pe.update(A),Ve=A.material;Ve.visible&&y.push(A,Ne,Ve,se,be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const Ne=pe.update(A),Ve=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),be.copy(Ne.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(Ve)){const He=Ne.groups;for(let ft=0,ct=He.length;ft<ct;ft++){const We=He[ft],_t=Ve[We.materialIndex];_t&&_t.visible&&y.push(A,Ne,_t,se,be.z,We)}}else Ve.visible&&y.push(A,Ne,Ve,se,be.z,null)}}const Ae=A.children;for(let Ne=0,Ve=Ae.length;Ne<Ve;Ne++)pi(Ae[Ne],Y,se,Z)}function rt(A,Y,se,Z){const q=A.opaque,Ae=A.transmissive,Ne=A.transparent;x.setupLightsView(se),ge===!0&&Be.setGlobalState(C.clippingPlanes,se),Z&&$e.viewport(V.copy(Z)),q.length>0&&ln(q,Y,se),Ae.length>0&&ln(Ae,Y,se),Ne.length>0&&ln(Ne,Y,se),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function It(A,Y,se,Z){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[Z.id]===void 0&&(x.state.transmissionRenderTarget[Z.id]=new Ss(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Co:Gi,minFilter:_s,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Ae=x.state.transmissionRenderTarget[Z.id],Ne=Z.viewport||V;Ae.setSize(Ne.z*C.transmissionResolutionScale,Ne.w*C.transmissionResolutionScale);const Ve=C.getRenderTarget(),He=C.getActiveCubeFace(),ft=C.getActiveMipmapLevel();C.setRenderTarget(Ae),C.getClearColor(le),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),st&&Se.render(se);const ct=C.toneMapping;C.toneMapping=ur;const We=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),x.setupLightsView(Z),ge===!0&&Be.setGlobalState(C.clippingPlanes,Z),ln(A,se,Z),lt.updateMultisampleRenderTarget(Ae),lt.updateRenderTargetMipmap(Ae),gt.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let pt=0,Ht=Y.length;pt<Ht;pt++){const Ft=Y[pt],Lt=Ft.object,tt=Ft.geometry,Nt=Ft.material,xt=Ft.group;if(Nt.side===Ii&&Lt.layers.test(Z.layers)){const un=Nt.side;Nt.side=Yn,Nt.needsUpdate=!0,Jt(Lt,se,Z,tt,Nt,xt),Nt.side=un,Nt.needsUpdate=!0,_t=!0}}_t===!0&&(lt.updateMultisampleRenderTarget(Ae),lt.updateRenderTargetMipmap(Ae))}C.setRenderTarget(Ve,He,ft),C.setClearColor(le,he),We!==void 0&&(Z.viewport=We),C.toneMapping=ct}function ln(A,Y,se){const Z=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,Ae=A.length;q<Ae;q++){const Ne=A[q],Ve=Ne.object,He=Ne.geometry,ft=Ne.group;let ct=Ne.material;ct.allowOverride===!0&&Z!==null&&(ct=Z),Ve.layers.test(se.layers)&&Jt(Ve,Y,se,He,ct,ft)}}function Jt(A,Y,se,Z,q,Ae){A.onBeforeRender(C,Y,se,Z,q,Ae),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(C,Y,se,Z,A,Ae),q.transparent===!0&&q.side===Ii&&q.forceSinglePass===!1?(q.side=Yn,q.needsUpdate=!0,C.renderBufferDirect(se,Y,Z,q,A,Ae),q.side=jr,q.needsUpdate=!0,C.renderBufferDirect(se,Y,Z,q,A,Ae),q.side=Ii):C.renderBufferDirect(se,Y,Z,q,A,Ae),A.onAfterRender(C,Y,se,Z,q,Ae)}function Sn(A,Y,se){Y.isScene!==!0&&(Y=nt);const Z=Ze.get(A),q=x.state.lights,Ae=x.state.shadowsArray,Ne=q.state.version,Ve=ye.getParameters(A,q.state,Ae,Y,se),He=ye.getProgramCacheKey(Ve);let ft=Z.programs;Z.environment=A.isMeshStandardMaterial?Y.environment:null,Z.fog=Y.fog,Z.envMap=(A.isMeshStandardMaterial?D:Pt).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,ft===void 0&&(A.addEventListener("dispose",ze),ft=new Map,Z.programs=ft);let ct=ft.get(He);if(ct!==void 0){if(Z.currentProgram===ct&&Z.lightsStateVersion===Ne)return Qt(A,Ve),ct}else Ve.uniforms=ye.getUniforms(A),A.onBeforeCompile(Ve,C),ct=ye.acquireProgram(Ve,He),ft.set(He,ct),Z.uniforms=Ve.uniforms;const We=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Be.uniform),Qt(A,Ve),Z.needsLights=Iu(A),Z.lightsStateVersion=Ne,Z.needsLights&&(We.ambientLightColor.value=q.state.ambient,We.lightProbe.value=q.state.probe,We.directionalLights.value=q.state.directional,We.directionalLightShadows.value=q.state.directionalShadow,We.spotLights.value=q.state.spot,We.spotLightShadows.value=q.state.spotShadow,We.rectAreaLights.value=q.state.rectArea,We.ltc_1.value=q.state.rectAreaLTC1,We.ltc_2.value=q.state.rectAreaLTC2,We.pointLights.value=q.state.point,We.pointLightShadows.value=q.state.pointShadow,We.hemisphereLights.value=q.state.hemi,We.directionalShadowMap.value=q.state.directionalShadowMap,We.directionalShadowMatrix.value=q.state.directionalShadowMatrix,We.spotShadowMap.value=q.state.spotShadowMap,We.spotLightMatrix.value=q.state.spotLightMatrix,We.spotLightMap.value=q.state.spotLightMap,We.pointShadowMap.value=q.state.pointShadowMap,We.pointShadowMatrix.value=q.state.pointShadowMatrix),Z.currentProgram=ct,Z.uniformsList=null,ct}function En(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=_u.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Qt(A,Y){const se=Ze.get(A);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function zn(A,Y,se,Z,q){Y.isScene!==!0&&(Y=nt),lt.resetTextureUnits();const Ae=Y.fog,Ne=Z.isMeshStandardMaterial?Y.environment:null,Ve=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ga,He=(Z.isMeshStandardMaterial?D:Pt).get(Z.envMap||Ne),ft=Z.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ct=!!se.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),We=!!se.morphAttributes.position,_t=!!se.morphAttributes.normal,pt=!!se.morphAttributes.color;let Ht=ur;Z.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ht=C.toneMapping);const Ft=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Lt=Ft!==void 0?Ft.length:0,tt=Ze.get(Z),Nt=x.state.lights;if(ge===!0&&(Te===!0||A!==R)){const vn=A===R&&Z.id===b;Be.setState(Z,A,vn)}let xt=!1;Z.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Nt.state.version||tt.outputColorSpace!==Ve||q.isBatchedMesh&&tt.batching===!1||!q.isBatchedMesh&&tt.batching===!0||q.isBatchedMesh&&tt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&tt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&tt.instancing===!1||!q.isInstancedMesh&&tt.instancing===!0||q.isSkinnedMesh&&tt.skinning===!1||!q.isSkinnedMesh&&tt.skinning===!0||q.isInstancedMesh&&tt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&tt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&tt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&tt.instancingMorph===!1&&q.morphTexture!==null||tt.envMap!==He||Z.fog===!0&&tt.fog!==Ae||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Be.numPlanes||tt.numIntersection!==Be.numIntersection)||tt.vertexAlphas!==ft||tt.vertexTangents!==ct||tt.morphTargets!==We||tt.morphNormals!==_t||tt.morphColors!==pt||tt.toneMapping!==Ht||tt.morphTargetsCount!==Lt)&&(xt=!0):(xt=!0,tt.__version=Z.version);let un=tt.currentProgram;xt===!0&&(un=Sn(Z,Y,q));let gr=!1,Ln=!1,Wi=!1;const Ot=un.getUniforms(),Mn=tt.uniforms;if($e.useProgram(un.program)&&(gr=!0,Ln=!0,Wi=!0),Z.id!==b&&(b=Z.id,Ln=!0),gr||R!==A){$e.buffers.depth.getReversed()?(j.copy(A.projectionMatrix),cE(j),fE(j),Ot.setValue(O,"projectionMatrix",j)):Ot.setValue(O,"projectionMatrix",A.projectionMatrix),Ot.setValue(O,"viewMatrix",A.matrixWorldInverse);const fn=Ot.map.cameraPosition;fn!==void 0&&fn.setValue(O,xe.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&Ot.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ot.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Ln=!0,Wi=!0)}if(q.isSkinnedMesh){Ot.setOptional(O,q,"bindMatrix"),Ot.setOptional(O,q,"bindMatrixInverse");const vn=q.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Ot.setValue(O,"boneTexture",vn.boneTexture,lt))}q.isBatchedMesh&&(Ot.setOptional(O,q,"batchingTexture"),Ot.setValue(O,"batchingTexture",q._matricesTexture,lt),Ot.setOptional(O,q,"batchingIdTexture"),Ot.setValue(O,"batchingIdTexture",q._indirectTexture,lt),Ot.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Ot.setValue(O,"batchingColorTexture",q._colorsTexture,lt));const cn=se.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&Oe.update(q,se,un),(Ln||tt.receiveShadow!==q.receiveShadow)&&(tt.receiveShadow=q.receiveShadow,Ot.setValue(O,"receiveShadow",q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Mn.envMap.value=He,Mn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&Y.environment!==null&&(Mn.envMapIntensity.value=Y.environmentIntensity),Ln&&(Ot.setValue(O,"toneMappingExposure",C.toneMappingExposure),tt.needsLights&&mr(Mn,Wi),Ae&&Z.fog===!0&&fe.refreshFogUniforms(Mn,Ae),fe.refreshMaterialUniforms(Mn,Z,k,me,x.state.transmissionRenderTarget[A.id]),_u.upload(O,En(tt),Mn,lt)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(_u.upload(O,En(tt),Mn,lt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ot.setValue(O,"center",q.center),Ot.setValue(O,"modelViewMatrix",q.modelViewMatrix),Ot.setValue(O,"normalMatrix",q.normalMatrix),Ot.setValue(O,"modelMatrix",q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const vn=Z.uniformsGroups;for(let fn=0,wt=vn.length;fn<wt;fn++){const Ci=vn[fn];W.update(Ci,un),W.bind(Ci,un)}}return un}function mr(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Iu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,Y,se){const Z=Ze.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ze.get(A.texture).__webglTexture=Y,Ze.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:se,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const se=Ze.get(A);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0};const Do=O.createFramebuffer();this.setRenderTarget=function(A,Y=0,se=0){G=A,U=Y,F=se;let Z=!0,q=null,Ae=!1,Ne=!1;if(A){const He=Ze.get(A);if(He.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(O.FRAMEBUFFER,null),Z=!1;else if(He.__webglFramebuffer===void 0)lt.setupRenderTarget(A);else if(He.__hasExternalTextures)lt.rebindTextures(A,Ze.get(A.texture).__webglTexture,Ze.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&Ze.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(A)}}const ft=A.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(Ne=!0);const ct=Ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ct[Y])?q=ct[Y][se]:q=ct[Y],Ae=!0):A.samples>0&&lt.useMultisampledRTT(A)===!1?q=Ze.get(A).__webglMultisampledFramebuffer:Array.isArray(ct)?q=ct[se]:q=ct,V.copy(A.viewport),ae.copy(A.scissor),J=A.scissorTest}else V.copy(I).multiplyScalar(k).floor(),ae.copy(re).multiplyScalar(k).floor(),J=Fe;if(se!==0&&(q=Do),$e.bindFramebuffer(O.FRAMEBUFFER,q)&&Z&&$e.drawBuffers(A,q),$e.viewport(V),$e.scissor(ae),$e.setScissorTest(J),Ae){const He=Ze.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,He.__webglTexture,se)}else if(Ne){const He=Ze.get(A.texture),ft=Y;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.__webglTexture,se,ft)}else if(A!==null&&se!==0){const He=Ze.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,He.__webglTexture,se)}b=-1},this.readRenderTargetPixels=function(A,Y,se,Z,q,Ae,Ne,Ve=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He){$e.bindFramebuffer(O.FRAMEBUFFER,He);try{const ft=A.textures[Ve],ct=ft.format,We=ft.type;if(!Mt.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-Z&&se>=0&&se<=A.height-q&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ve),O.readPixels(Y,se,Z,q,Le.convert(ct),Le.convert(We),Ae))}finally{const ft=G!==null?Ze.get(G).__webglFramebuffer:null;$e.bindFramebuffer(O.FRAMEBUFFER,ft)}}},this.readRenderTargetPixelsAsync=async function(A,Y,se,Z,q,Ae,Ne,Ve=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He)if(Y>=0&&Y<=A.width-Z&&se>=0&&se<=A.height-q){$e.bindFramebuffer(O.FRAMEBUFFER,He);const ft=A.textures[Ve],ct=ft.format,We=ft.type;if(!Mt.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,_t),O.bufferData(O.PIXEL_PACK_BUFFER,Ae.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ve),O.readPixels(Y,se,Z,q,Le.convert(ct),Le.convert(We),0);const pt=G!==null?Ze.get(G).__webglFramebuffer:null;$e.bindFramebuffer(O.FRAMEBUFFER,pt);const Ht=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await uE(O,Ht,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,_t),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ae),O.deleteBuffer(_t),O.deleteSync(Ht),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,se=0){const Z=Math.pow(2,-se),q=Math.floor(A.image.width*Z),Ae=Math.floor(A.image.height*Z),Ne=Y!==null?Y.x:0,Ve=Y!==null?Y.y:0;lt.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,se,0,0,Ne,Ve,q,Ae),$e.unbindTexture()};const No=O.createFramebuffer(),Uo=O.createFramebuffer();this.copyTextureToTexture=function(A,Y,se=null,Z=null,q=0,Ae=null){Ae===null&&(q!==0?(fa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=q,q=0):Ae=0);let Ne,Ve,He,ft,ct,We,_t,pt,Ht;const Ft=A.isCompressedTexture?A.mipmaps[Ae]:A.image;if(se!==null)Ne=se.max.x-se.min.x,Ve=se.max.y-se.min.y,He=se.isBox3?se.max.z-se.min.z:1,ft=se.min.x,ct=se.min.y,We=se.isBox3?se.min.z:0;else{const cn=Math.pow(2,-q);Ne=Math.floor(Ft.width*cn),Ve=Math.floor(Ft.height*cn),A.isDataArrayTexture?He=Ft.depth:A.isData3DTexture?He=Math.floor(Ft.depth*cn):He=1,ft=0,ct=0,We=0}Z!==null?(_t=Z.x,pt=Z.y,Ht=Z.z):(_t=0,pt=0,Ht=0);const Lt=Le.convert(Y.format),tt=Le.convert(Y.type);let Nt;Y.isData3DTexture?(lt.setTexture3D(Y,0),Nt=O.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(lt.setTexture2DArray(Y,0),Nt=O.TEXTURE_2D_ARRAY):(lt.setTexture2D(Y,0),Nt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const xt=O.getParameter(O.UNPACK_ROW_LENGTH),un=O.getParameter(O.UNPACK_IMAGE_HEIGHT),gr=O.getParameter(O.UNPACK_SKIP_PIXELS),Ln=O.getParameter(O.UNPACK_SKIP_ROWS),Wi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ft),O.pixelStorei(O.UNPACK_SKIP_ROWS,ct),O.pixelStorei(O.UNPACK_SKIP_IMAGES,We);const Ot=A.isDataArrayTexture||A.isData3DTexture,Mn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const cn=Ze.get(A),vn=Ze.get(Y),fn=Ze.get(cn.__renderTarget),wt=Ze.get(vn.__renderTarget);$e.bindFramebuffer(O.READ_FRAMEBUFFER,fn.__webglFramebuffer),$e.bindFramebuffer(O.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Ci=0;Ci<He;Ci++)Ot&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ze.get(A).__webglTexture,q,We+Ci),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ze.get(Y).__webglTexture,Ae,Ht+Ci)),O.blitFramebuffer(ft,ct,Ne,Ve,_t,pt,Ne,Ve,O.DEPTH_BUFFER_BIT,O.NEAREST);$e.bindFramebuffer(O.READ_FRAMEBUFFER,null),$e.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Ze.has(A)){const cn=Ze.get(A),vn=Ze.get(Y);$e.bindFramebuffer(O.READ_FRAMEBUFFER,No),$e.bindFramebuffer(O.DRAW_FRAMEBUFFER,Uo);for(let fn=0;fn<He;fn++)Ot?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,cn.__webglTexture,q,We+fn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,cn.__webglTexture,q),Mn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,vn.__webglTexture,Ae,Ht+fn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,vn.__webglTexture,Ae),q!==0?O.blitFramebuffer(ft,ct,Ne,Ve,_t,pt,Ne,Ve,O.COLOR_BUFFER_BIT,O.NEAREST):Mn?O.copyTexSubImage3D(Nt,Ae,_t,pt,Ht+fn,ft,ct,Ne,Ve):O.copyTexSubImage2D(Nt,Ae,_t,pt,ft,ct,Ne,Ve);$e.bindFramebuffer(O.READ_FRAMEBUFFER,null),$e.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Mn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Nt,Ae,_t,pt,Ht,Ne,Ve,He,Lt,tt,Ft.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Nt,Ae,_t,pt,Ht,Ne,Ve,He,Lt,Ft.data):O.texSubImage3D(Nt,Ae,_t,pt,Ht,Ne,Ve,He,Lt,tt,Ft):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ae,_t,pt,Ne,Ve,Lt,tt,Ft.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ae,_t,pt,Ft.width,Ft.height,Lt,Ft.data):O.texSubImage2D(O.TEXTURE_2D,Ae,_t,pt,Ne,Ve,Lt,tt,Ft);O.pixelStorei(O.UNPACK_ROW_LENGTH,xt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,un),O.pixelStorei(O.UNPACK_SKIP_PIXELS,gr),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ln),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Wi),Ae===0&&Y.generateMipmaps&&O.generateMipmap(Nt),$e.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,se=null,Z=null,q=0){return fa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,se,Z,q)},this.initRenderTarget=function(A){Ze.get(A).__webglFramebuffer===void 0&&lt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?lt.setTextureCube(A,0):A.isData3DTexture?lt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?lt.setTexture2DArray(A,0):lt.setTexture2D(A,0),$e.unbindTexture()},this.resetState=function(){U=0,F=0,G=null,$e.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}function IR(i){switch(i){case"fa-user-tag":case"fa-person":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"12",cy:"7",r:"3.5"}),$.jsx("path",{d:"M5 21c0-4.2 3.1-7 7-7s7 2.8 7 7"})]});case"fa-venus-mars":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"8",cy:"9",r:"3.5"}),$.jsx("path",{d:"M8 12.5V21M5 17.5h6"}),$.jsx("circle",{cx:"16.5",cy:"14.5",r:"3.5"}),$.jsx("path",{d:"M19 12l3-3m0 0h-4m4 0v4"})]});case"fa-palette":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0 0-5H12a2 2 0 0 1 0-4h3a6 6 0 0 0-3-9Z"}),$.jsx("circle",{cx:"7",cy:"10",r:".7",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"6.5",r:".7",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"13",cy:"5.8",r:".7",fill:"currentColor",stroke:"none"})]});case"fa-eye":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z"}),$.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]});case"fa-eye-dropper":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m14 5 5 5M16.5 2.5l5 5-10 10-4 1 1-4 10-10Z"}),$.jsx("path",{d:"M5 19h6"})]});case"fa-scissors":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"6",cy:"7",r:"2.5"}),$.jsx("circle",{cx:"6",cy:"17",r:"2.5"}),$.jsx("path",{d:"m8 8.5 12 8.5M8 15.5 20 7"})]});case"fa-fill-drip":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m4 14 8-8 6 6-8 8H4v-6Z"}),$.jsx("path",{d:"M15 5 12 2"}),$.jsx("path",{d:"M20 15s2 2.2 2 3.5a2 2 0 0 1-4 0c0-1.3 2-3.5 2-3.5Z"})]});case"fa-hat-cowboy":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M4 16h16M7 16l1.5-7h7L17 16"}),$.jsx("path",{d:"M2.5 16c1.5 3 17.5 3 19 0"})]});case"fa-shirt":return $.jsx("path",{d:"M8 4h8l5 4-3 4-2-2v10H8V10l-2 2-3-4 5-4Z"});case"fa-shoe-prints":return $.jsxs($.Fragment,{children:[$.jsx("ellipse",{cx:"8",cy:"8",rx:"2.5",ry:"4",transform:"rotate(-20 8 8)"}),$.jsx("ellipse",{cx:"16",cy:"16",rx:"2.5",ry:"4",transform:"rotate(-20 16 16)"})]});case"fa-gem":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M6 4h12l4 5-10 11L2 9l4-5Z"}),$.jsx("path",{d:"M2 9h20M8 4l4 16 4-16"})]});case"fa-sliders":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M4 6h5M15 6h5M4 12h10M18 12h2M4 18h2M10 18h10"}),$.jsx("circle",{cx:"12",cy:"6",r:"2"}),$.jsx("circle",{cx:"16",cy:"12",r:"2"}),$.jsx("circle",{cx:"8",cy:"18",r:"2"})]});case"fa-grip-vertical":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"9",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"18",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"18",r:"1",fill:"currentColor",stroke:"none"})]});case"fa-chevron-up":return $.jsx("path",{d:"m6 15 6-6 6 6"});case"fa-chevron-down":return $.jsx("path",{d:"m6 9 6 6 6-6"});case"fa-check":return $.jsx("path",{d:"m5 12 4 4L19 6"});case"fa-arrows-rotate":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M20 7v5h-5"}),$.jsx("path",{d:"M4 17v-5h5"}),$.jsx("path",{d:"M6.2 8.2A7 7 0 0 1 18.8 10M17.8 15.8A7 7 0 0 1 5.2 14"})]});case"fa-layer-group":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),$.jsx("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]});case"fa-pause":return $.jsx("path",{d:"M8 5v14M16 5v14"});case"fa-play":return $.jsx("path",{d:"m8 5 11 7-11 7V5Z"});case"fa-download":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M12 3v12m0 0 4-4m-4 4-4-4"}),$.jsx("path",{d:"M5 20h14"})]});default:return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"12",cy:"12",r:"8"}),$.jsx("path",{d:"M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01"})]})}}function Wr({name:i,className:e=""}){return $.jsx("svg",{className:`skincrafter-icon ${e}`.trim(),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false","data-skincrafter-icon":i,children:IR(i)})}function y_({title:i,icon:e,iconClassName:t="skincrafter-accent-text",className:s="",children:a}){return $.jsxs("section",{className:`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${s}`,children:[$.jsxs("h2",{className:"text-xl font-bold mb-2 skincrafter-heading flex items-center",children:[$.jsx(Wr,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),i]}),a]})}function ru({icon:i,className:e="",children:t,...s}){return $.jsxs("button",{className:`pixel-button preview-action-button p-2 pixel-border transition-colors ${e}`,...s,children:[i&&$.jsx(Wr,{name:i,className:"skincrafter-button-icon"}),t]})}const FR=""+new URL("/assets/default-BAcllNor-BAcllNor.png",import.meta.url).href,OR=""+new URL("/assets/male.tintable-fxeAI3uu-fxeAI3uu.png",import.meta.url).href,kR=""+new URL("/assets/male.fixed-DcqZ3kjg-DcqZ3kjg.png",import.meta.url).href,BR=""+new URL("/assets/female.tintable-BLp5_Gdk-BLp5_Gdk.png",import.meta.url).href,zR=""+new URL("/assets/female.fixed-DbzKxh-8-DbzKxh-8.png",import.meta.url).href,HR=""+new URL("/assets/male.fixed-C1cq_pNO-C1cq_pNO.png",import.meta.url).href,VR=""+new URL("/assets/male.tintable-D_4mkZ79-D_4mkZ79.png",import.meta.url).href,GR=""+new URL("/assets/male.fixed-BGzxECBj-BGzxECBj.png",import.meta.url).href,WR=""+new URL("/assets/male.tintable-Dll7q7aD-Dll7q7aD.png",import.meta.url).href,XR=""+new URL("/assets/male.fixed-DKYrqDB3-DKYrqDB3.png",import.meta.url).href,jR=""+new URL("/assets/none.tintable-Bs7knCxE-Bs7knCxE.png",import.meta.url).href,$R=""+new URL("/assets/none.fixed-DGZLEiFj-DGZLEiFj.png",import.meta.url).href,YR=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,qR=""+new URL("/assets/clasic.fixed-Dli_mmU6-Dli_mmU6.png",import.meta.url).href,KR=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,ZR=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,JR=""+new URL("/assets/big.fixed-BuEC2Ubs-BuEC2Ubs.png",import.meta.url).href,QR=""+new URL("/assets/duck-Dz_q_Va_-Dz_q_Va_.png",import.meta.url).href,eA=""+new URL("/assets/hoodie-C1a1is5P-C1a1is5P.png",import.meta.url).href,tA=""+new URL("/assets/pants-gRdPSA1G-gRdPSA1G.png",import.meta.url).href,S_={"textures/preview/default.png":FR,"textures/race/human/male.tintable.png":OR,"textures/race/human/male.fixed.png":kR,"textures/race/human/female.tintable.png":BR,"textures/race/human/female.fixed.png":zR,"textures/race/bear/male.fixed.png":HR,"textures/race/orc/male.tintable.png":VR,"textures/race/orc/male.fixed.png":GR,"textures/race/zombie/male.tintable.png":WR,"textures/race/zombie/male.fixed.png":XR,"textures/race/template/none.tintable.png":jR,"textures/race/template/none.fixed.png":$R,"textures/eyes/clasic.tintable.png":YR,"textures/eyes/clasic.fixed.png":qR,"textures/eyes/small.tintable.png":KR,"textures/eyes/big.tintable.png":ZR,"textures/eyes/big.fixed.png":JR,"textures/hat/duck.png":QR,"textures/top/male/hoodie.png":eA,"textures/bottom/pants.png":tA};function Jf(i,e){return e?`${e.replace(/\/+$/,"")}/${i.replace(/^\/+/,"")}`:S_[i]}const rv=S_["textures/preview/default.png"],aa=64,nA=["bottom"];function li(i,e,t,s,a,l,c,f,d={}){const{transparent:p=!1,expand:m=0,rotate180Faces:v=[],flipXFaces:_=[],flipYFaces:S=nA}=d,E=new Set(v),M=new Set(_),y=new Set(S),x=new Ma(e+m,t+m,s+m),L=()=>new dh({transparent:p,toneMapped:!1,alphaTest:p?.1:0,side:Ii}),P=[L(),L(),L(),L(),L(),L()],C=(G,b,R=!1,V=!1)=>{const ae=i.clone(),J=(b[2]-b[0])/aa,le=(b[3]-b[1])/aa,he=b[0]/aa,ue=b[2]/aa,me=1-b[1]/aa,k=1-b[3]/aa;ae.magFilter=yn,ae.minFilter=yn,ae.generateMipmaps=!1,ae.wrapS=vo,ae.wrapT=vo,ae.repeat.set(R?-J:J,V?-le:le),ae.offset.set(R?ue:he,V?me:k),ae.needsUpdate=!0,G.map=ae},H=G=>E.has(G)||M.has(G),U=G=>E.has(G)||y.has(G);C(P[0],f.right,H("right"),U("right")),C(P[1],f.left,H("left"),U("left")),C(P[2],f.top,H("top"),U("top")),C(P[3],f.bottom,H("bottom"),U("bottom")),C(P[4],f.front,H("front"),U("front")),C(P[5],f.back,H("back"),U("back"));const F=new ki(x,P);return F.position.set(a,l,c),F}const iA=-6,rA=6,su=new ne(-5,16,0),au=new ne(5,16,0),E_=-1.9,M_=1.9,sv=new ne(E_,6,0),av=new ne(M_,6,0);function ui(i,e,t,s){if(!i)return;const a=e.clone().sub(t).applyEuler(s).add(t);i.position.copy(a),i.rotation.copy(s)}function sA(i,e,t={}){const{armL:s,armR:a,legL:l,legR:c,armLOL:f,armROL:d,legLOL:p,legROL:m}=e,v=t.leftArmX??rA,_=t.rightArmX??iA,S=new ne(v,12,0),E=new ne(_,12,0),M=new ne(M_,0,0),y=new ne(E_,0,0);if(!(!s||!a||!l||!c)){if([s,a,l,c,f,d,p,m].forEach(x=>x?.rotation.set(0,0,0)),s.position.copy(S),a.position.copy(E),l.position.copy(M),c.position.copy(y),f?.position.copy(S),d?.position.copy(E),p?.position.copy(M),m?.position.copy(y),i==="tpose"){const x=new kn(0,0,Math.PI/2),L=new kn(0,0,-Math.PI/2);ui(s,S,au,x),ui(a,E,su,L),ui(f,S,au,x),ui(d,E,su,L)}else if(i==="walking"){const x=-Math.PI/4,L=Math.PI/4,P=new kn(x,0,0),C=new kn(L,0,0),H=new kn(L,0,0),U=new kn(x,0,0);ui(s,S,au,P),ui(a,E,su,C),ui(l,M,av,H),ui(c,y,sv,U),ui(f,S,au,P),ui(d,E,su,C),ui(p,M,av,H),ui(m,y,sv,U)}}}const aA={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},oA={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},lA={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},uA={left:[40,20,44,32],right:[47,20,51,32],top:[44,16,47,20],bottom:[47,16,50,20],front:[44,20,47,32],back:[51,20,54,32]},cA={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},fA={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},dA={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},hA={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},pA={left:[40,36,44,48],right:[47,36,51,48],top:[44,32,47,36],bottom:[47,32,50,36],front:[44,36,47,48],back:[51,36,54,48]},mA={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},gA={left:[32,52,36,64],right:[40,52,44,64],top:[36,48,40,52],bottom:[40,48,44,52],front:[36,52,40,64],back:[44,52,48,64]},vA={left:[32,52,36,64],right:[39,52,43,64],top:[36,48,39,52],bottom:[39,48,42,52],front:[36,52,39,64],back:[43,52,46,64]},_A={left:[16,52,20,64],right:[24,52,28,64],top:[20,48,24,52],bottom:[24,48,28,52],front:[20,52,24,64],back:[28,52,32,64]},xA={left:[48,52,52,64],right:[56,52,60,64],top:[52,48,56,52],bottom:[56,48,60,52],front:[52,52,56,64],back:[60,52,64,64]},yA={left:[48,52,52,64],right:[55,52,59,64],top:[52,48,55,52],bottom:[55,48,58,52],front:[52,52,55,64],back:[59,52,62,64]},SA={left:[0,52,4,64],right:[8,52,12,64],top:[4,48,8,52],bottom:[8,48,12,52],front:[4,52,8,64],back:[12,52,16,64]},Qf=0,EA=44,MA=24,wA=72,TA=.04,RA=1,AA=.5,ov=-6,lv=6,uv=-5.5,cv=5.5,fv=-1.9,dv=1.9,hv=()=>({armL:null,armR:null,legL:null,legR:null,armLOL:null,armROL:null,legLOL:null,legROL:null,headOL:null,bodyOL:null}),CA={createRenderer:()=>new UR({antialias:!1,alpha:!0}),createTextureLoader:()=>new jE,createResizeObserver:i=>new ResizeObserver(i),requestAnimationFrame:i=>window.requestAnimationFrame(i),cancelAnimationFrame:i=>window.cancelAnimationFrame(i),addWindowResizeListener:i=>window.addEventListener("resize",i),removeWindowResizeListener:i=>window.removeEventListener("resize",i),getDevicePixelRatio:()=>window.devicePixelRatio||1};class bA{constructor(e,t,s=CA){this.container=e,this.dependencies=s,this.pose=t.pose,this.model=t.model,this.showOverlay=t.showOverlay,this.autoRotate=t.autoRotate,this.onError=t.onError;const a=e.clientWidth||1,l=e.clientHeight||1;this.renderer=s.createRenderer(),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=On,this.renderer.toneMapping=ur,this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(a,l),e.appendChild(this.renderer.domElement),this.camera=new ci(52,a/l,.1,1e3),this.camera.position.set(0,Qf,this.cameraDistance),this.camera.lookAt(0,Qf,0),this.scene=new OE;const c=new KE(16777215,1);c.position.set(10,10,10),this.scene.add(c),this.group=new uo,this.group.position.y=-10,this.scene.add(this.group),this.textureLoader=s.createTextureLoader(),this.resizeObserver=s.createResizeObserver(this.handleResize),this.resizeObserver.observe(e),s.addWindowResizeListener(this.handleResize),e.addEventListener("wheel",this.handleWheel,{passive:!1}),this.handleResize(),this.scheduleAnimationFrame(),this.setTexture(t.textureUrl)}container;dependencies;renderer;camera;scene;group;textureLoader;resizeObserver;onError;disposedTextures=new WeakSet;pendingTextures=new Map;parts=hv();modelMeshes=[];currentTexture=null;requestedTextureUrl=null;textureLoadVersion=0;animationFrameId=null;disposed=!1;pose;model;showOverlay;autoRotate;cameraDistance=EA;modelRevision=0;textureRevision=0;setTexture(e){if(this.disposed||e===this.requestedTextureUrl)return;this.requestedTextureUrl=e;const t=++this.textureLoadVersion;let s=!1;const a=this.textureLoader.load(e,l=>{s=!0,this.pendingTextures.delete(t),this.handleTextureLoaded(t,l)},void 0,l=>{s=!0;const c=this.pendingTextures.get(t);c&&(this.disposeTexture(c),this.pendingTextures.delete(t)),!this.disposed&&t===this.textureLoadVersion&&this.onError?.({code:"texture_load_failed",textureUrl:e,cause:l})});s||this.pendingTextures.set(t,a)}setModel(e){this.disposed||e===this.model||(this.model=e,this.currentTexture&&this.buildModel(this.currentTexture))}setPose(e){this.disposed||e===this.pose||(this.pose=e,this.applyCurrentPose())}setShowOverlay(e){this.disposed||e===this.showOverlay||(this.showOverlay=e,this.applyOverlayVisibility())}setAutoRotate(e){this.disposed||(this.autoRotate=e)}getDiagnostics(){const e=this.parts.armR?.geometry.parameters.width;return{rendererAttached:this.renderer.domElement.parentNode===this.container,modelRevision:this.modelRevision,textureRevision:this.textureRevision,meshCount:this.modelMeshes.length,rightArmWidth:typeof e=="number"?e:null,overlayVisible:this.getOverlayMeshes().map(t=>t.visible),cameraDistance:this.cameraDistance,rotation:this.group.rotation.y}}dispose(){this.disposed||(this.disposed=!0,this.textureLoadVersion+=1,this.container.removeEventListener("wheel",this.handleWheel),this.dependencies.removeWindowResizeListener(this.handleResize),this.resizeObserver.disconnect(),this.animationFrameId!==null&&(this.dependencies.cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.pendingTextures.forEach(e=>this.disposeTexture(e)),this.pendingTextures.clear(),this.disposeModel(),this.currentTexture&&(this.disposeTexture(this.currentTexture),this.currentTexture=null),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement))}handleResize=()=>{if(this.disposed)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()};handleWheel=e=>{this.disposed||(e.preventDefault(),this.cameraDistance=oE.clamp(this.cameraDistance+e.deltaY*TA,MA,wA),this.camera.position.z=this.cameraDistance,this.camera.lookAt(0,Qf,0),this.camera.updateProjectionMatrix())};scheduleAnimationFrame(){this.animationFrameId=this.dependencies.requestAnimationFrame(()=>{this.disposed||(this.autoRotate&&(this.group.rotation.y+=.01),this.renderer.render(this.scene,this.camera),this.scheduleAnimationFrame())})}getClampedDpr(){return Math.min(this.dependencies.getDevicePixelRatio(),2)}handleTextureLoaded(e,t){if(this.disposed||e!==this.textureLoadVersion){this.disposeTexture(t);return}this.configureTexture(t);const s=this.currentTexture;this.modelMeshes.length===0?this.buildModel(t):this.replaceModelTexture(t),this.currentTexture=t,this.textureRevision+=1,s&&s!==t&&this.disposeTexture(s)}configureTexture(e){e.magFilter=yn,e.minFilter=yn,e.generateMipmaps=!1,e.colorSpace=On,e.wrapS=sr,e.wrapT=sr}buildModel(e){this.disposeModel();const t=this.model==="slim",s=t?3:4,a=t?uv:ov,l=t?cv:lv,c=t?uA:lA,f=t?vA:gA,d=t?pA:hA,p=t?yA:xA,m=li(e,8,8,8,0,22,0,aA),v=li(e,8,12,4,0,12,0,oA),_=li(e,s,12,4,a,12,0,c),S=li(e,s,12,4,l,12,0,f),E=li(e,4,12,4,fv,0,0,cA),M=li(e,4,12,4,dv,0,0,_A),y={transparent:!0,expand:RA},x={transparent:!0,expand:AA},L=li(e,8,8,8,0,22,0,fA,y),P=li(e,8,12,4,0,12,0,dA,x),C=li(e,s,12,4,a,12,0,d,x),H=li(e,s,12,4,l,12,0,p,x),U=li(e,4,12,4,fv,0,0,mA,x),F=li(e,4,12,4,dv,0,0,SA,x);this.parts={armL:S,armR:_,legL:M,legR:E,armLOL:H,armROL:C,legLOL:F,legROL:U,headOL:L,bodyOL:P},this.modelMeshes=[m,v,_,S,E,M,L,P,C,H,U,F],this.group.add(...this.modelMeshes),this.modelRevision+=1,this.applyOverlayVisibility(),this.applyCurrentPose()}replaceModelTexture(e){this.modelMeshes.forEach(t=>{t.material.forEach(s=>{const a=s.map;if(!a)return;const l=e.clone();l.magFilter=yn,l.minFilter=yn,l.generateMipmaps=!1,l.colorSpace=On,l.wrapS=a.wrapS,l.wrapT=a.wrapT,l.repeat.copy(a.repeat),l.offset.copy(a.offset),l.center.copy(a.center),l.rotation=a.rotation,l.flipY=a.flipY,l.needsUpdate=!0,s.map=l,s.needsUpdate=!0,this.disposeTexture(a)})})}applyCurrentPose(){const e=this.model==="slim";sA(this.pose,{armL:this.parts.armL,armR:this.parts.armR,legL:this.parts.legL,legR:this.parts.legR,armLOL:this.parts.armLOL,armROL:this.parts.armROL,legLOL:this.parts.legLOL,legROL:this.parts.legROL},{leftArmX:e?cv:lv,rightArmX:e?uv:ov})}applyOverlayVisibility(){this.getOverlayMeshes().forEach(e=>{e.visible=this.showOverlay})}getOverlayMeshes(){return[this.parts.headOL,this.parts.bodyOL,this.parts.armLOL,this.parts.armROL,this.parts.legLOL,this.parts.legROL].filter(e=>e!==null)}disposeModel(){this.modelMeshes.forEach(e=>{this.group.remove(e),e.geometry.dispose(),e.material.forEach(t=>{t.map&&(this.disposeTexture(t.map),t.map=null),t.dispose()})}),this.modelMeshes=[],this.parts=hv()}disposeTexture(e){this.disposedTextures.has(e)||(this.disposedTextures.add(e),e.dispose())}}function PA(i,e,t){return new bA(i,e,t)}function LA(i){return{code:"preview_texture_load_failed",category:"preview",message:`Failed to load preview texture: ${i.textureUrl}`,assetUrl:i.textureUrl,cause:i.cause}}function DA({texture:i,pose:e="default",model:t="classic",showOverlay:s=!0,autoRotate:a=!0,style:l,onError:c}){const f=z.useRef(null),d=z.useRef(null),p=z.useRef(c),m=z.useRef({textureUrl:i??rv,pose:e,model:t,showOverlay:s,autoRotate:a,onError:v=>p.current?.(LA(v))});return z.useEffect(()=>{p.current=c},[c]),z.useEffect(()=>{const v=f.current;if(!v)return;let _;try{_=PA(v,m.current)}catch(S){p.current?.({code:"preview_webgl_initialization_failed",category:"preview",message:"Failed to initialize the WebGL skin preview.",cause:S});return}return d.current=_,()=>{_.dispose(),d.current===_&&(d.current=null)}},[]),z.useEffect(()=>{d.current?.setTexture(i??rv)},[i]),z.useEffect(()=>{d.current?.setModel(t)},[t]),z.useEffect(()=>{d.current?.setPose(e)},[e]),z.useEffect(()=>{d.current?.setShowOverlay(s)},[s]),z.useEffect(()=>{d.current?.setAutoRotate(a)},[a]),$.jsx("div",{ref:f,style:{width:"100%",height:"100%",minHeight:0,position:"relative",touchAction:"none",...l??{}}})}const w_=["en","pl"],Ta="en",pv={en:{"app.title":"SkinCrafter","nav.wardrobe":"Wardrobe","nav.skinView":"Skin View","nav.language":"Language","nav.workInProgress":"Work in progress","panel.preview":"Preview","panel.customization":"Customization","panel.loadSkin":"Load Minecraft Skin","action.changePose":"Change Pose","action.hideOverlay":"Hide Overlay","action.showOverlay":"Show Overlay","action.disableAutoRotate":"Stop Rotation","action.enableAutoRotate":"Start Rotation","action.download":"Download","action.downloadSkin":"Download character skin","action.dragLayer":"Drag layer","action.moveLayerUp":"Move layer up","action.moveLayerDown":"Move layer down","action.loadSkin":"Load Skin","action.loading":"Loading...","error.assetLoad":"A skin texture could not be loaded. Check the selected assets and try again.","error.generation":"The skin could not be generated. Change the selection and try again.","error.initialSkin":"The supplied skin is not a valid 64x64 Minecraft PNG.","error.preview":"The 3D preview could not be loaded. Skin editing and download may still be available.","skinView.player":"Player","skinView.username":"Minecraft username","category.race":"Character Race","category.sex":"Sex","category.skinColor":"Skin Color","category.eyes":"Eyes","category.eyesColor":"Eye Color","category.hair":"Hair","category.hairColor":"Hair Color","category.hat":"Hat","category.shirt":"Shirt","category.pants":"Pants","category.shoes":"Shoes","category.accessory":"Accessory","option.none":"None","option.sex.Male":"Male","option.sex.Female":"Female","option.race.Human":"Human","option.race.Bear":"Bear","option.race.Orc":"Orc","option.race.Zombie":"Zombie","option.race.Template":"Template","option.eyes.Classic":"Classic","option.eyes.Small":"Small","option.eyes.Big":"Big","option.hat.Duck":"Duck","option.shirt.Hoodie":"Hoodie","option.pants.Pants":"Pants","option.color.blue":"Blue","option.color.green":"Green","option.color.brown":"Brown","option.color.blond":"Blond","option.color.black":"Black"},pl:{"app.title":"SkinCrafter","nav.wardrobe":"Kreator","nav.skinView":"Podglad","nav.language":"Jezyk","nav.workInProgress":"Produkt w trakcie prac","panel.preview":"Podglad","panel.customization":"Personalizacja","panel.loadSkin":"Wczytaj skin Minecraft","action.changePose":"Zmien Poze","action.hideOverlay":"Ukryj Warstwe","action.showOverlay":"Pokaz Warstwe","action.disableAutoRotate":"Zatrzymaj Obrot","action.enableAutoRotate":"Wlacz Obrot","action.download":"Pobierz","action.downloadSkin":"Pobierz skin postaci","action.dragLayer":"Przeciagnij warstwe","action.moveLayerUp":"Przesun warstwe wyzej","action.moveLayerDown":"Przesun warstwe nizej","action.loadSkin":"Wczytaj Skin","action.loading":"Wczytywanie...","error.assetLoad":"Nie udalo sie wczytac tekstury skina. Sprawdz wybrane elementy i sprobuj ponownie.","error.generation":"Nie udalo sie wygenerowac skina. Zmien wybor i sprobuj ponownie.","error.initialSkin":"Przekazany skin nie jest prawidlowym plikiem PNG Minecraft 64x64.","error.preview":"Nie udalo sie uruchomic podgladu 3D. Edycja i pobieranie skina moga nadal dzialac.","skinView.player":"Gracz","skinView.username":"Nazwa gracza Minecraft","category.race":"Rasa Postaci","category.sex":"Plec","category.skinColor":"Kolor Skory","category.eyes":"Oczy","category.eyesColor":"Kolor Oczu","category.hair":"Wlosy","category.hairColor":"Kolor Wlosow","category.hat":"Czapka","category.shirt":"Koszulka","category.pants":"Spodnie","category.shoes":"Buty","category.accessory":"Dodatek","option.none":"Brak","option.sex.Male":"Mezczyzna","option.sex.Female":"Kobieta","option.race.Human":"Czlowiek","option.race.Bear":"Niedzwiedz","option.race.Orc":"Ork","option.race.Zombie":"Zombie","option.race.Template":"Szablon","option.eyes.Classic":"Klasyczne","option.eyes.Small":"Male","option.eyes.Big":"Duze","option.hat.Duck":"Kaczka","option.shirt.Hoodie":"Bluza","option.pants.Pants":"Spodnie","option.color.blue":"Niebieski","option.color.green":"Zielony","option.color.brown":"Brazowy","option.color.blond":"Blond","option.color.black":"Czarny"}};function NA(i){return!!i&&w_.includes(i)}function Lo(i,e){return pv[i][e]??pv[Ta][e]??e}const UA=i=>Lo(Ta,i);function IA(i){return i.code==="asset_load_failed"?"error.assetLoad":i.code==="invalid_initial_skin"?"error.initialSkin":i.category==="preview"?"error.preview":"error.generation"}function T_({texture:i,model:e="classic",footerHeight:t=0,t:s=UA,onSave:a,canSave:l,generationStatus:c,generationError:f,onError:d}){const[p,m]=z.useState("default"),[v,_]=z.useState(!0),[S,E]=z.useState(!0),[M,y]=z.useState(null),x=()=>{m(R=>R==="default"?"tpose":R==="tpose"?"walking":"default")},L=()=>{_(R=>!R)},P=()=>{E(R=>!R)},C=l??!!i,H=()=>{if(!i||!C)return;const R=document.createElement("a");R.href=i,R.download="skincrafter-skin.png",R.click()},U=()=>{if(C){if(a){a();return}H()}},F=z.useCallback(R=>{y(R),d?.(R)},[d]);z.useEffect(()=>{y(R=>R?.code==="preview_texture_load_failed"?null:R)},[i]);const G=c==="error"&&f?f:M,b={"--skincrafter-preview-bottom-offset":`${Math.max(0,t)}px`};return $.jsxs(y_,{title:s("panel.preview"),icon:"fa-eye",children:[$.jsx("div",{className:"skincrafter-preview-surface overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full",style:b,children:$.jsx("div",{className:"flex justify-center items-center model-placeholder h-full",children:$.jsx(DA,{texture:i,pose:p,model:e,showOverlay:v,autoRotate:S,onError:F})})}),G&&$.jsx("p",{className:"mt-3 text-sm font-semibold skincrafter-error-text",role:"alert",children:s(IA(G))}),$.jsxs("div",{className:"mt-4 preview-actions",children:[$.jsx(ru,{className:"skincrafter-secondary-action",icon:"fa-arrows-rotate","aria-label":s("action.changePose"),onClick:x,children:s("action.changePose")}),$.jsx(ru,{className:"skincrafter-secondary-action",icon:"fa-layer-group","aria-label":s(v?"action.hideOverlay":"action.showOverlay"),onClick:L,children:s(v?"action.hideOverlay":"action.showOverlay")}),$.jsx(ru,{className:"skincrafter-secondary-action",icon:S?"fa-pause":"fa-play","aria-label":s(S?"action.disableAutoRotate":"action.enableAutoRotate"),onClick:P,children:s(S?"action.disableAutoRotate":"action.enableAutoRotate")}),$.jsx(ru,{className:"skincrafter-secondary-action disabled:opacity-50 disabled:cursor-not-allowed",icon:"fa-download","aria-label":s("action.downloadSkin"),onClick:U,disabled:!C,children:s("action.download")})]})]})}function FA({left:i,right:e}){return $.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:i}),$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:e})]})}function OA(i,e){if(i.length===0)return null;for(const t of i){const s=t.top+(t.bottom-t.top)/2;if(e<s)return{targetLayer:t.layer,position:"before"};if(e<=t.bottom)return{targetLayer:t.layer,position:"after"}}return{targetLayer:i[i.length-1].layer,position:"after"}}function kA(i,e,t,s){if(!i.includes(e)||!i.includes(t))return[...i];if(e===t)return[...i];const a=i.filter(c=>c!==e),l=a.indexOf(t)+(s==="after"?1:0);return a.splice(l,0,e),a}function BA({heading:i,icon:e,iconClassName:t="skincrafter-category-icon",className:s="",children:a,...l}){return $.jsxs("div",{className:`option-card skincrafter-surface p-4 pixel-border relative ${i?"pt-5":""} ${s}`,...l,children:[i&&$.jsxs("h3",{className:"font-medium mb-2 flex items-center absolute -top-3 left-4 px-2 skincrafter-surface skincrafter-heading z-10",children:[e&&$.jsx(Wr,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),i]}),a]})}function $n(i){if(!i.tintable&&!i.fixed)throw new Error("A texture-backed option must define a tintable layer, a fixed layer, or both.");return{...i}}function mo(i,e){return i.tintable?{tintable:Jf(i.tintable,e),...i.fixed?{fixed:Jf(i.fixed,e)}:{}}:{fixed:Jf(i.fixed,e)}}function ed(i){return!!i?.tintable}function _a(i){const e=i.skinModel;if(e!=="classic"&&e!=="slim")throw new Error('A wardrobe item must define skinModel as "classic" or "slim".');return{...i,skinModel:e}}function gh(i){const e={};for(const t of["classic","slim"]){const s=i[t];if(!s)continue;const a=_a(s);if(a.skinModel!==t)throw new Error(`Wardrobe variant "${t}" must declare the same skinModel.`);e[t]=a}return e}function zA(i,e){return{skinModel:i.skinModel,textureLayers:mo(i.textureLayers,e)}}function vh(i,e,t){const s=i[e];return s?zA(s,t):null}function HA(i,e){return i.skinModel===e}const VA=["None","Duck"],GA={Duck:gh({classic:_a({skinModel:"classic",textureLayers:$n({fixed:"textures/hat/duck.png"})}),slim:_a({skinModel:"slim",textureLayers:$n({fixed:"textures/hat/duck.png"})})})};function WA(i,e,t){return i==="None"?null:vh(GA[i],e,t)}const XA=["None","Pants"],jA={Pants:gh({classic:_a({skinModel:"classic",textureLayers:$n({fixed:"textures/bottom/pants.png"})}),slim:_a({skinModel:"slim",textureLayers:$n({fixed:"textures/bottom/pants.png"})})})};function $A(i,e,t){return i==="None"?null:vh(jA[i],e,t)}const R_={Human:{Male:$n({tintable:"textures/race/human/male.tintable.png",fixed:"textures/race/human/male.fixed.png"}),Female:$n({tintable:"textures/race/human/female.tintable.png",fixed:"textures/race/human/female.fixed.png"})},Bear:{Male:$n({fixed:"textures/race/bear/male.fixed.png"})},Orc:{Male:$n({tintable:"textures/race/orc/male.tintable.png",fixed:"textures/race/orc/male.fixed.png"})},Zombie:{Male:$n({tintable:"textures/race/zombie/male.tintable.png",fixed:"textures/race/zombie/male.fixed.png"})},Template:{None:$n({tintable:"textures/race/template/none.tintable.png",fixed:"textures/race/template/none.fixed.png"})}};function A_(i){return Object.keys(R_[i])}function _h(i,e,t){const s=R_[i],a=A_(i)[0],l=s[e]??s[a];return l?mo(l,t):null}const YA=["Human","Bear","Orc","Zombie"],qA=["None","Hoodie"],KA={Hoodie:gh({classic:_a({skinModel:"classic",textureLayers:$n({fixed:"textures/top/male/hoodie.png"})})})};function ZA(i,e,t){return i==="None"?null:vh(KA[i],e,t)}const C_={Human:["#D5BAAA","#E0AC69","#C68642"],Bear:["#5D4037","#8D6E63","#A1887F"],Orc:["#558B2F","#7CB342"],Zombie:["#556B2F"],Template:["#FFFFFF"]},Yr=[{id:"race",labelKey:"category.race",icon:"fa-user-tag",control:"choice"},{id:"sex",labelKey:"category.sex",icon:"fa-venus-mars",control:"choice"},{id:"skinColor",labelKey:"category.skinColor",icon:"fa-palette",control:"color"},{id:"eyes",labelKey:"category.eyes",icon:"fa-eye",control:"choice"},{id:"eyesColor",labelKey:"category.eyesColor",icon:"fa-eye-dropper",control:"color"},{id:"hair",labelKey:"category.hair",icon:"fa-scissors",control:"choice"},{id:"hairColor",labelKey:"category.hairColor",icon:"fa-fill-drip",control:"color"},{id:"hat",labelKey:"category.hat",icon:"fa-hat-cowboy",control:"choice"},{id:"shirt",labelKey:"category.shirt",icon:"fa-shirt",control:"choice"},{id:"pants",labelKey:"category.pants",icon:"fa-person",control:"choice"},{id:"shoes",labelKey:"category.shoes",icon:"fa-shoe-prints",control:"choice"},{id:"accessory",labelKey:"category.accessory",icon:"fa-gem",control:"choice"}],lr={race:"Human",sex:"Male",skinColor:C_.Human[0],eyes:"Classic",eyesColor:"#2F5D9B",hair:"None",hairColor:"#4A2F20",hat:"None",shirt:"None",pants:"None",shoes:"None",accessory:"None"},wu=["hat","shirt","pants","shoes","accessory"],la={id:"None",labelKey:"option.none",textureLayers:null},JA={Male:{id:"Male",labelKey:"option.sex.Male",textureLayers:null},Female:{id:"Female",labelKey:"option.sex.Female",textureLayers:null},None:la},td={Classic:$n({tintable:"textures/eyes/clasic.tintable.png",fixed:"textures/eyes/clasic.fixed.png"}),Small:$n({tintable:"textures/eyes/small.tintable.png"}),Big:$n({tintable:"textures/eyes/big.tintable.png",fixed:"textures/eyes/big.fixed.png"})};function Nu(i){return i.sex==="Female"?"slim":"classic"}function nd(i,e,t,s){return!t||!HA(t,s)?[]:[{id:i,labelKey:e,textureLayers:t.textureLayers}]}function Bi(i,e,t,s=Nu(e)){if(i==="race")return YA.map(a=>({id:a,labelKey:`option.race.${a}`,textureLayers:_h(a,"Male",t)}));if(i==="sex")return A_(e.race).map(a=>JA[a]);if(i==="skinColor"){const a=e.race;return C_[a].map(l=>({id:l,labelKey:`option.skinColor.${l}`,color:l}))}return i==="eyes"?[{id:"Classic",labelKey:"option.eyes.Classic",textureLayers:mo(td.Classic,t)},{id:"Small",labelKey:"option.eyes.Small",textureLayers:mo(td.Small,t)},{id:"Big",labelKey:"option.eyes.Big",textureLayers:mo(td.Big,t)}]:i==="eyesColor"?[{id:"#2F5D9B",labelKey:"option.color.blue",color:"#2F5D9B"},{id:"#2F8F4E",labelKey:"option.color.green",color:"#2F8F4E"},{id:"#5B3A29",labelKey:"option.color.brown",color:"#5B3A29"}]:i==="hair"?[la]:i==="hairColor"?[{id:"#4A2F20",labelKey:"option.color.brown",color:"#4A2F20"},{id:"#D6B15D",labelKey:"option.color.blond",color:"#D6B15D"},{id:"#1F1A17",labelKey:"option.color.black",color:"#1F1A17"}]:i==="hat"?VA.flatMap(a=>a==="None"?[la]:nd(a,`option.hat.${a}`,WA(a,s,t),s)):i==="shirt"?qA.flatMap(a=>a==="None"?[la]:nd(a,`option.shirt.${a}`,ZA(a,s,t),s)):i==="pants"?XA.flatMap(a=>a==="None"?[la]:nd(a,`option.pants.${a}`,$A(a,s,t),s)):[la]}function Uu(i,e){const t={...lr,...i??{}};Bi("race",t).map(c=>c.id).includes(t.race)||(t.race=lr.race);const s=Bi("sex",t).map(c=>c.id);s.includes(t.sex)||(t.sex=s[0]??lr.sex);const a=e??Nu(t),l=Bi("skinColor",t,void 0,a).map(c=>c.id);return l.includes(t.skinColor)||(t.skinColor=l[0]??lr.skinColor),Yr.forEach(c=>{if(c.id==="race"||c.id==="sex"||c.id==="skinColor")return;const f=Bi(c.id,t,void 0,a).map(d=>d.id);f.includes(t[c.id])||(t[c.id]=f[0]??"None")}),t}function qr(i){const e=new Set(wu),t=[];return(i??[]).forEach(s=>{e.has(s)&&!t.includes(s)&&t.push(s)}),wu.forEach(s=>{t.includes(s)||t.push(s)}),t}function ou(i,e){if(!i)return[];const t=[];return i.tintable&&t.push({url:i.tintable,role:"tintable",tint:e??"#FFFFFF"}),i.fixed&&t.push({url:i.fixed,role:"fixed"}),t}function b_(i,e,t,s){if(i==="race")return ou(_h(e.race,e.sex,t),e.skinColor);if(i==="sex")return[];if(i==="eyes"){const l=Bi("eyes",e,t,s).find(c=>c.id===e.eyes);return ou(l?.textureLayers,e.eyesColor)}if(i==="hair"){const l=Bi("hair",e,t,s).find(c=>c.id===e.hair);return ou(l?.textureLayers,e.hairColor)}const a=Bi(i,e,t,s).find(l=>l.id===e[i]);return ou(a?.textureLayers)}function P_(i){return["race","sex","eyes","hair",...qr(i)]}function QA(i,e=wu,t,s=Nu(i)){return P_(e).flatMap(a=>b_(a,i,t,s))}function eC(i,e,t,s,a=Nu(i)){const l=new Set(t),c=f=>f==="race"?l.has("race")||l.has("sex")||l.has("skinColor"):f==="sex"?!1:f==="eyes"?l.has("eyes")||l.has("eyesColor"):f==="hair"?l.has("hair")||l.has("hairColor"):l.has(f);return P_(e).filter(c).flatMap(f=>b_(f,i,s,a))}function tC(i,e,t){if(i==="skinColor")return ed(_h(e.race,e.sex,t));if(i==="eyesColor"){const s=Bi("eyes",e,t).find(a=>a.id===e.eyes);return ed(s?.textureLayers)}if(i==="hairColor"){const s=Bi("hair",e,t).find(a=>a.id===e.hair);return ed(s?.textureLayers)}return!0}const lu=i=>wu.includes(i),mv=(i,e)=>i.length===e.length&&i.every((t,s)=>t===e[s]);function nC({appearance:i,textureLayerOrder:e,onAppearanceChange:t,onLayerOrderChange:s,t:a,assetBaseUrl:l,skinModel:c}){const[f,d]=z.useState(null),[p,m]=z.useState(null),[v,_]=z.useState(null),[S,E]=z.useState(null),M=z.useRef(null),y=z.useRef(null),x=z.useRef(null),L=z.useRef(null),P=z.useRef([]),C=z.useRef(new Map),H=z.useMemo(()=>new Map(Yr.map(j=>[j.id,j])),[]),U=z.useMemo(()=>Yr.filter(j=>!lu(j.id)&&tC(j.id,i,l)),[i,l]),F=f&&p?p:e,G=z.useMemo(()=>F.map(j=>H.get(j)).filter(j=>!!j),[H,F]);z.useLayoutEffect(()=>{const j=L.current;if(!j)return;const ce=new Map;j.querySelectorAll("[data-layer-id]").forEach(xe=>{const be=xe.dataset.layerId;if(!be||!lu(be))return;const nt=xe.offsetTop,st=C.current.get(be);if(ce.set(be,nt),st===void 0||st===nt||typeof xe.animate!="function")return;typeof xe.getAnimations=="function"&&xe.getAnimations().filter(O=>O.id==="skincrafter-layer-preview").forEach(O=>O.cancel());const Ke=xe.animate([{transform:`translateY(${st-nt}px)`},{transform:"translateY(0)"}],{duration:150,easing:"ease-out"});Ke.id="skincrafter-layer-preview"}),C.current=ce},[F]);const b=j=>{const ce=L.current;if(!ce)return[];const xe=ce.getBoundingClientRect().top;return[...ce.querySelectorAll("[data-layer-id]")].flatMap(be=>{const nt=be.dataset.layerId;if(!nt||!lu(nt)||nt===j)return[];const st=be.getBoundingClientRect();return[{layer:nt,top:st.top-xe,bottom:st.bottom-xe}]})},R=j=>{const ce=L.current;if(!ce)return null;const xe=j-ce.getBoundingClientRect().top;return OA(P.current,xe)},V=()=>{M.current=null,y.current=null,x.current=null,P.current=[],d(null),m(null),_(null),E(null)},ae=(j,ce)=>{const xe=[...e];P.current=b(j),M.current=j,y.current=xe,d(j),m(xe),_(null),E(ce)},J=(j,ce)=>{const xe=M.current;if(!xe)return;const be=kA(e,xe,j,ce);y.current=be,m(nt=>nt&&mv(nt,be)?nt:be),_({targetLayer:j,position:ce})},le=()=>{const j=y.current,ce=j&&!mv(j,e);V(),ce&&j&&s(j)},he=(j,ce)=>{const xe=e.indexOf(j),be=xe+ce;if(xe<0||be<0||be>=e.length)return;const nt=[...e];[nt[xe],nt[be]]=[nt[be],nt[xe]],s(nt)},ue=(j,ce)=>{if(ae(ce,{x:j.clientX,y:j.clientY,pointerType:"mouse"}),j.dataTransfer.effectAllowed="move",j.dataTransfer.setData("text/plain",ce),typeof j.dataTransfer.setDragImage=="function"){const xe=document.createElement("div");xe.style.position="fixed",xe.style.left="-10000px",xe.style.top="-10000px",xe.style.width="1px",xe.style.height="1px",xe.style.opacity="0",document.body.appendChild(xe),j.dataTransfer.setDragImage(xe,0,0),window.setTimeout(()=>xe.remove(),0)}},me=j=>{!M.current||j.clientX===0&&j.clientY===0||E({x:j.clientX,y:j.clientY,pointerType:"mouse"})},k=()=>{M.current&&V()},de=j=>{if(!M.current)return;j.preventDefault(),j.dataTransfer.dropEffect="move";const ce=R(j.clientY);ce&&J(ce.targetLayer,ce.position)},oe=j=>{j.preventDefault(),le()},I=(j,ce)=>{if(!(j.pointerType==="mouse"||j.button>0||!(j.target instanceof Element?j.target:null)?.closest("h3"))){j.preventDefault(),x.current=j.pointerId;try{j.currentTarget.setPointerCapture(j.pointerId)}catch{}ae(ce,{x:j.clientX,y:j.clientY,pointerType:"touch"})}},re=j=>{if(j.pointerId!==x.current||!M.current)return;j.preventDefault(),E({x:j.clientX,y:j.clientY,pointerType:"touch"});const ce=R(j.clientY);ce&&J(ce.targetLayer,ce.position)},Fe=j=>{if(j.pointerId===x.current){j.preventDefault();try{j.currentTarget.releasePointerCapture(j.pointerId)}catch{}le()}},te=j=>{j.pointerId===x.current&&V()},ge=j=>{const ce=Bi(j.id,i,l,c),xe=lu(j.id)?j.id:null,be=xe?e.indexOf(xe):-1,nt=xe&&v?.targetLayer===xe;return $.jsxs(BA,{heading:a(j.labelKey),icon:j.icon,className:`wardrobe-option-card p-2.5 pt-6 ${xe?"layer-order-card":""} ${xe===f?"is-dragging":""} ${nt?`drop-${v.position}`:""}`,"data-layer-id":xe??void 0,onPointerDown:xe?st=>I(st,xe):void 0,onPointerMove:xe?re:void 0,onPointerUp:xe?Fe:void 0,onPointerCancel:xe?te:void 0,children:[xe&&$.jsxs("div",{className:"layer-order-controls",children:[$.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${a("action.moveLayerUp")} ${a(j.labelKey)}`,title:a("action.moveLayerUp"),disabled:be<=0,onClick:()=>he(xe,-1),children:$.jsx(Wr,{name:"fa-chevron-up"})}),$.jsx("button",{type:"button",className:"layer-order-handle","aria-label":`${a("action.dragLayer")} ${a(j.labelKey)}`,title:a("action.dragLayer"),draggable:!0,onDragStart:st=>ue(st,xe),onDrag:me,onDragEnd:k,children:$.jsx(Wr,{name:"fa-grip-vertical"})}),$.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${a("action.moveLayerDown")} ${a(j.labelKey)}`,title:a("action.moveLayerDown"),disabled:be>=e.length-1,onClick:()=>he(xe,1),children:$.jsx(Wr,{name:"fa-chevron-down"})})]}),$.jsx("div",{className:j.control==="color"?"mt-2 flex flex-wrap gap-1.5":"mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1.5",role:"group","aria-label":a(j.labelKey),children:ce.map(st=>{const Ke=i[j.id]===st.id;return j.control==="color"?$.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border ${Ke?"is-selected":""}`,style:{backgroundColor:st.color??st.id},"aria-label":a(st.labelKey),"aria-pressed":Ke,onClick:()=>t(j.id,st.id),children:Ke&&$.jsx(Wr,{name:"fa-check"})},st.id):$.jsx("button",{type:"button",className:`pixel-button min-h-8 px-2 py-1 border text-xs leading-tight transition-colors ${Ke?"skincrafter-option-selected":"skincrafter-secondary-action"}`,"aria-pressed":Ke,onClick:()=>t(j.id,st.id),children:a(st.labelKey)},st.id)})})]},j.id)},Te=f?H.get(f):null;return $.jsxs(y_,{title:a("panel.customization"),icon:"fa-sliders",className:"overflow-visible md:overflow-hidden customization-panel p-3",children:[$.jsxs("div",{className:"space-y-1.5 options-container md:flex-1 md:min-h-0",children:[U.map(ge),$.jsx("div",{ref:L,className:"layer-order-list space-y-1.5",onDragOver:de,onDrop:oe,children:G.map(ge)})]}),S&&Te&&$.jsxs("div",{className:`layer-drag-ghost ${S.pointerType==="touch"?"is-touch":""}`,style:{left:S.x,top:S.y},"aria-hidden":"true","data-testid":"layer-drag-ghost",children:[$.jsx(Wr,{name:Te.icon}),$.jsx("span",{children:a(Te.labelKey)})]})]})}const gv=[137,80,78,71,13,10,26,10],Tu=64;class Ai extends Error{cause;constructor(e,t){super(e),this.name="InvalidInitialSkinError",this.cause=t}}function iC(i){let e="";for(let t=0;t<i.length;t+=32768){const s=i.subarray(t,Math.min(t+32768,i.length));e+=String.fromCharCode(...s)}return`data:image/png;base64,${btoa(e)}`}function rC(i){let e=2166136261;for(const t of i)e^=t,e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}function sC(i){if(i.length<24)throw new Ai("Initial skin is not a valid PNG file.");for(let a=0;a<gv.length;a+=1)if(i[a]!==gv[a])throw new Ai("Initial skin is not a valid PNG file.");const e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=e.getUint32(8),s=String.fromCharCode(i[12],i[13],i[14],i[15]);if(t!==13||s!=="IHDR")throw new Ai("Initial skin PNG is missing a valid IHDR header.");return{width:e.getUint32(16),height:e.getUint32(20)}}async function aC(i){return typeof i.arrayBuffer=="function"?new Uint8Array(await i.arrayBuffer()):new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{if(!(s.result instanceof ArrayBuffer)){t(new Error("Blob reader did not return an ArrayBuffer."));return}e(new Uint8Array(s.result))},s.onerror=()=>t(s.error??new Error("Blob reader failed.")),s.readAsArrayBuffer(i)})}async function oC(i){await new Promise((e,t)=>{const s=new Image;s.onload=()=>{const a=s.naturalWidth||s.width,l=s.naturalHeight||s.height;if(s.onload=null,s.onerror=null,a!==Tu||l!==Tu){t(new Ai("Initial skin must be a 64x64 Minecraft PNG."));return}e()},s.onerror=a=>{s.onload=null,s.onerror=null,t(new Ai("Initial skin PNG could not be decoded.",a))},s.src=i})}async function lC(i,e){if(i.type&&i.type.toLowerCase()!=="image/png")throw new Ai("Initial skin must use the image/png MIME type.");let t;try{t=await aC(i)}catch(l){throw new Ai("Initial skin data could not be read.",l)}const s=sC(t);if(s.width!==Tu||s.height!==Tu)throw new Ai("Initial skin must be a 64x64 Minecraft PNG.");const a=iC(t);return await oC(a),{dataUrl:a,fingerprint:rC(t),model:e}}function uC(i){const[e,t]=i.split(",",2),s=e.match(/^data:([^;]+);base64$/)?.[1]??"image/png",a=atob(t??""),l=new Uint8Array(a.length);for(let c=0;c<a.length;c+=1)l[c]=a.charCodeAt(c);return new Blob([l],{type:s})}function cC(i,e,t,s=e.sex==="Female"?"slim":"classic"){const a=uC(i),l=new File([a],"skincrafter-skin.png",{type:"image/png"});return{blob:a,file:l,dataUrl:i,metadata:{width:64,height:64,mimeType:"image/png",model:s,appearance:{...e},layerOrder:[...t]}}}const fo=1,fC=new Map([[0,i=>({...i,schemaVersion:1})]]);function vv(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function Vr(i){return{success:!1,error:{code:"invalid_state",message:i}}}function _v(i){return{success:!1,error:{code:"unsupported_schema_version",message:`Unsupported SkinCrafter state schema version: ${i}.`,schemaVersion:i}}}function dC(i){return{schemaVersion:fo,appearance:Uu(i.appearance),layerOrder:qr(i.layerOrder)}}function L_(i){const e=dC(i);return{...e,appearance:{...e.appearance},layerOrder:[...e.layerOrder]}}function D_(i){if(!vv(i))return Vr("SkinCrafter persisted state must be an object.");const e=[],t=i.schemaVersion;let s,a;if(t===void 0)s=null,e.push({code:"legacy_unversioned",message:"Migrated legacy unversioned SkinCrafter state."}),a={...i,schemaVersion:0};else{if(typeof t!="number"||!Number.isInteger(t)||t<0)return Vr("SkinCrafter schemaVersion must be a non-negative integer.");if(s=t,s>fo)return _v(s);a={...i}}let l=s??0;for(;l<fo;){const E=fC.get(l);if(!E)return _v(l);const M=l+1;a=E(a),e.push({code:"schema_version_migrated",message:`Migrated SkinCrafter state schema from version ${l} to ${M}.`,from:l,to:M}),l=M}if(a.schemaVersion!==fo)return Vr("SkinCrafter state migration did not produce the current schema version.");const c=s===null||s===0;if(!vv(a.appearance))return Vr("SkinCrafter persisted appearance must be an object.");const f={};for(const E of Yr){const M=a.appearance[E.id];if(M===void 0){if(!c)return Vr(`SkinCrafter persisted appearance is missing ${E.id}.`);continue}if(typeof M!="string")return Vr(`SkinCrafter persisted appearance.${E.id} must be a string.`);f[E.id]=M}const d=a.layerOrder;if(d===void 0&&!c)return Vr("SkinCrafter persisted state is missing layerOrder.");if(d!==void 0&&(!Array.isArray(d)||d.some(E=>typeof E!="string")))return Vr("SkinCrafter persisted layerOrder must be an array of strings.");const p=Uu(f);for(const E of Yr){const M=a.appearance[E.id],y=p[E.id];M!==y&&e.push({code:"appearance_value_defaulted",message:`Normalized persisted appearance.${E.id} to a supported value.`,path:E.id,from:M,to:y})}const m=d??[],v=qr(m);(m.length!==v.length||m.some((E,M)=>E!==v[M]))&&e.push({code:"layer_order_normalized",message:"Normalized persisted layer order by removing invalid/duplicate layers and appending missing layers.",path:"layerOrder",from:[...m],to:[...v]});const _={appearance:p,layerOrder:v},S=L_(_);return{success:!0,state:_,serializedState:S,sourceSchemaVersion:s,migrated:s!==fo||e.length>0,notices:e}}class Xd extends Error{assetUrl;cause;constructor(e,t){super(`Failed to load texture asset: ${e}`),this.name="TextureLoadError",this.assetUrl=e,this.cause=t}}const zi=64,hC=i=>i?typeof i=="string"?{url:i,role:"fixed"}:i.url?i.role==="tintable"?{url:i.url,role:"tintable",tint:i.tint}:{url:i.url,role:"fixed"}:null:null;function pC(i){const e=i.replace("#",""),t=e.length===3?e.split("").map(s=>`${s}${s}`).join(""):e;return{r:Number.parseInt(t.slice(0,2),16),g:Number.parseInt(t.slice(2,4),16),b:Number.parseInt(t.slice(4,6),16),a:255}}function mC(i,e){return i===zi&&e===zi}function gC(i,e){if(i.a===0)return i;const t=(i.r+i.g+i.b)/765;return{r:Math.round(e.r*t),g:Math.round(e.g*t),b:Math.round(e.b*t),a:i.a}}function vC(i,e){const t=new Uint8ClampedArray(i);for(let s=0;s<t.length;s+=4){const a=gC({r:i[s],g:i[s+1],b:i[s+2],a:i[s+3]},e);t[s]=a.r,t[s+1]=a.g,t[s+2]=a.b,t[s+3]=a.a}return t}const _C=(i,e,t)=>{const s=document.createElement("canvas");s.width=zi,s.height=zi;const a=s.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("Could not create a 2D canvas context for tintable skin composition.");a.imageSmoothingEnabled=!1,a.drawImage(e,0,0);const l=a.getImageData(0,0,zi,zi);l.data.set(vC(l.data,pC(t))),a.putImageData(l,0,0),i.drawImage(s,0,0)},xC=(i,e,t)=>{if(t.role==="fixed"){i.drawImage(e,0,0);return}_C(i,e,t.tint??"#FFFFFF")},yC=i=>new Promise((e,t)=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{const a=s.naturalWidth||s.width,l=s.naturalHeight||s.height;if(!mC(a,l)){t(new Xd(i,new Error(`Skin texture atlas must be ${zi}x${zi}; got ${a}x${l}.`)));return}e(s)},s.onerror=a=>t(new Xd(i,a)),s.src=i});async function xv(i){const e=i.map(hC).filter(l=>!!l);if(e.length===0)throw new Error("No texture assets were available for skin composition.");const t=await Promise.all(e.map(l=>yC(l.url))),s=document.createElement("canvas");s.width=zi,s.height=zi;const a=s.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("Could not create a 2D canvas context for skin composition.");return a.imageSmoothingEnabled=!1,t.forEach((l,c)=>xC(a,l,e[c])),s.toDataURL("image/png")}function Fi(i,e){return{appearance:Uu(i?.appearance??null,e),layerOrder:qr(i?.layerOrder)}}function yv(i,e){return i.layerOrder.length!==e.layerOrder.length||i.layerOrder.some((t,s)=>t!==e.layerOrder[s])?!1:Yr.every(({id:t})=>i.appearance[t]===e.appearance[t])}function N_(i,e){return{code:i==="load"?"persistence_load_failed":"persistence_save_failed",category:"persistence",message:i==="load"?"Failed to load persisted SkinCrafter state.":"Failed to save SkinCrafter state.",cause:e}}function Sv(i){try{const e=i?.load()??null;return e&&"status"in e?e.status==="incompatible"?{state:Fi(null),writesBlocked:!0,error:null}:e.status==="empty"?{state:Fi(null),writesBlocked:!1,error:null}:{state:Fi(e.state),writesBlocked:!1,error:null}:{state:Fi(e),writesBlocked:!1,error:null}}catch(e){return{state:Fi(null),writesBlocked:!0,error:N_("load",e)}}}function SC(i){return{appearance:{...i.appearance},layerOrder:[...i.layerOrder]}}function EC(i){return i?{"--skincrafter-accent":i.accent,"--skincrafter-accent-strong":i.accentStrong,"--skincrafter-surface":i.surface,"--skincrafter-text":i.text,"--skincrafter-muted":i.muted,"--skincrafter-border":i.border}:{}}function MC(i){return i instanceof Xd?{code:"asset_load_failed",category:"asset",message:`Failed to load skin texture asset: ${i.assetUrl}`,assetUrl:i.assetUrl,cause:i.cause}:{code:"generation_failed",category:"generation",message:"Failed to generate the current skin.",cause:i}}function Ev(i){return{code:"invalid_initial_skin",category:"input",message:i instanceof Ai?i.message:"Initial skin must be a decodable 64x64 Minecraft PNG.",cause:i instanceof Ai?i.cause??i:i}}function Un(i,...e){if(i)try{i(...e)}catch(t){console.error("SkinCrafter host callback failed",t)}}function wC({locale:i=Ta,value:e,initialSkin:t,persistence:s,assetBaseUrl:a,onStateChange:l,onSkinChange:c,onSave:f,onStatusChange:d,onError:p,className:m="",style:v,theme:_,previewBottomOffset:S=0}){const E=t?.image??null,M=t?.model??null,y=E!==null,[x]=z.useState(()=>{if(e)return{state:Fi(e,M??void 0),writesBlocked:!1,error:null};const rt=Sv(s);return t?{state:Fi(t,M??void 0),writesBlocked:rt.writesBlocked,error:rt.error}:rt}),[L,P]=z.useState(x.state),[C,H]=z.useState(null),[U,F]=z.useState({key:null,status:"idle",error:null}),[G,b]=z.useState(null),[R,V]=z.useState({source:null,model:null,status:"idle",error:null}),[ae,J]=z.useState([]),le=z.useRef(0),he=z.useRef({}),ue=z.useRef(c),me=z.useRef(d),k=z.useRef(p),de=z.useRef(null),oe=z.useRef(!1),I=z.useRef(null),re=z.useRef("classic"),Fe=z.useRef(s),te=z.useRef(!e),ge=z.useRef(x.writesBlocked),Te=z.useRef(x.error!==null),j=z.useRef(!1),ce=y&&M!==null&&G?.source===E&&G.model===M,xe=ce&&G?G.baselineState.appearance.sex:x.state.appearance.sex,be=ae.includes("sex"),nt=z.useMemo(()=>{if(!e)return null;const rt=M!==null&&!be&&e.appearance.sex===xe?M:void 0;return Fi(e,rt)},[xe,M,be,e]),st=z.useMemo(()=>{if(!ce||M===null||be)return L;const rt=Fi(L,M);return yv(L,rt)?L:rt},[ce,M,L,be]),Ke=nt??st,O=z.useRef(Ke);O.current=Ke;const qt=z.useCallback(rt=>Lo(i,rt),[i]),gt=z.useCallback(rt=>{const It=le.current+1;le.current=It,he.current[rt]=It,J(ln=>ln.includes(rt)?ln:[...ln,rt])},[]);z.useEffect(()=>{nt&&P(rt=>yv(rt,nt)?rt:nt)},[nt]),z.useEffect(()=>{e||st===L||P(st)},[L,st,e]),z.useEffect(()=>{!e||!y||be||e.appearance.sex!==xe&&gt("sex")},[y,xe,gt,be,e]);const Mt=z.useCallback(rt=>{e||P(rt),l?.(rt)},[l,e]),$e=z.useCallback((rt,It)=>{y&&gt(rt);const ln=rt==="sex"?It==="Female"?"slim":"classic":re.current;Mt({...Ke,appearance:Uu({...Ke.appearance,[rt]:It},ln)})},[y,gt,Mt,Ke]),vt=z.useCallback(rt=>{Mt({...Ke,layerOrder:qr(rt)})},[Mt,Ke]);z.useEffect(()=>{ue.current=c},[c]),z.useEffect(()=>{me.current=d},[d]),z.useEffect(()=>{k.current=p},[p]),z.useEffect(()=>{j.current||!x.error||(j.current=!0,Un(k.current,x.error))},[x.error]),z.useEffect(()=>{if(!E){de.current=null,oe.current=!1,b(null),le.current=0,he.current={},J([]),V({source:null,model:null,status:"idle",error:null});return}if(!M){oe.current=!1;const Jt=Ev(new Ai("Initial skin model must be either classic or slim."));V({source:E,model:null,status:"error",error:Jt}),Un(me.current,"error"),Un(k.current,Jt);return}let rt=!0;const It=SC(O.current),ln=le.current;return V({source:E,model:M,status:"loading",error:null}),Un(me.current,"generating"),lC(E,M).then(Jt=>{if(!rt)return;const Sn=de.current,En=Sn!==null&&Sn.fingerprint===Jt.fingerprint&&Sn.model===Jt.model,Qt=En?{...Sn,source:E}:{source:E,dataUrl:Jt.dataUrl,fingerprint:Jt.fingerprint,model:Jt.model,baselineState:Fi(It,Jt.model)};if(oe.current=En,de.current=Qt,b(Qt),!En){const zn=Object.entries(he.current).filter(([,mr])=>(mr??0)>ln).map(([mr])=>mr);J(zn)}V({source:E,model:M,status:"ready",error:null}),En&&Un(me.current,"ready")}).catch(Jt=>{if(!rt)return;oe.current=!1;const Sn=Ev(Jt);V({source:E,model:M,status:"error",error:Sn}),Un(me.current,"error"),Un(k.current,Sn)}),()=>{rt=!1}},[E,M]),z.useEffect(()=>{if(!(e||Te.current)){if(!te.current||Fe.current!==s){const rt=Sv(s);if(Fe.current=s,te.current=!0,ge.current=rt.writesBlocked,rt.error){Te.current=!0,Un(k.current,rt.error);return}}if(!(ge.current||!s))try{s.save(L_(Ke))}catch(rt){ge.current=!0,Te.current=!0,Un(k.current,N_("save",rt))}}},[s,Ke,e]);const Ze=z.useMemo(()=>{if(!ce||!G)return[];const rt=new Set(ae);for(const It of Yr)Ke.appearance[It.id]!==G.baselineState.appearance[It.id]&&rt.add(It.id);return Yr.map(It=>It.id).filter(It=>rt.has(It))},[ae,ce,G,Ke.appearance]),{race:lt,sex:Pt,skinColor:D,eyes:T,eyesColor:Q,hair:pe,hairColor:ye,hat:fe,shirt:je,pants:Pe,shoes:Be,accessory:Ye}=Ke.appearance,Se=JSON.stringify(Ke.layerOrder),Oe=JSON.stringify(Ze),it=a?.replace(/\/+$/,"")||void 0,Qe=Ze.includes("sex"),Le=ce&&G&&!Qe?G.model==="slim"?"Female":"Male":Pt,et=ce&&G&&!Qe?G.model:Pt==="Female"?"slim":"classic";re.current=et;const W=ce?G?.fingerprint??null:null,De=ce?G?.dataUrl??null:null,ve=JSON.stringify([lt,Pt,D,T,Q,pe,ye,fe,je,Pe,Be,Ye,Se,it??null,W,et,Oe]),Ie=C?.key===ve?C:null,we=y&&R.source===E&&R.model===M,_e=y&&(!we||R.status==="loading"),ze=we&&R.status==="error",ut=_e?"generating":ze?"error":U.key===ve?U.status:"idle",Ct=ze?R.error:U.key===ve?U.error:null;z.useEffect(()=>{if(y&&!ce)return;if(oe.current){const En=I.current===ve;if(oe.current=!1,En)return}let rt=!0;const It={race:lt,sex:Pt,skinColor:D,eyes:T,eyesColor:Q,hair:pe,hairColor:ye,hat:fe,shirt:je,pants:Pe,shoes:Be,accessory:Ye},ln={...It,sex:Le},Jt=JSON.parse(Se),Sn=JSON.parse(Oe);return F({key:ve,status:"generating",error:null}),Un(me.current,"generating"),(async()=>{let En;try{let Qt;if(De){const zn=eC(ln,Jt,Sn,it,et);Qt=zn.filter(Boolean).length===0?De:await xv([De,...zn])}else{const zn=QA(It,Jt,it,et);Qt=await xv(zn)}En={dataUrl:Qt,output:cC(Qt,It,Jt,et)}}catch(Qt){if(!rt)return;const zn=MC(Qt);F({key:ve,status:"error",error:zn}),Un(me.current,"error"),Un(k.current,zn);return}rt&&(I.current=ve,H({key:ve,texture:En.dataUrl,output:En.output}),F({key:ve,status:"ready",error:null}),Un(ue.current,En.output),Un(me.current,"ready"))})(),()=>{rt=!1}},[Ye,Oe,it,Le,et,T,Q,ve,pe,ye,y,fe,De,ce,Se,Pe,lt,Pt,je,Be,D]);const St=Ie??C,on=Ie?.output??null,gn=St?.texture??null,pr=St?.output.metadata.model??et,di=ut==="ready"&&on!==null,hi=f&&di&&on?()=>f(on):void 0,pi=z.useCallback(rt=>{Un(k.current,rt)},[]);return $.jsx("div",{className:`skincrafter-editor h-full min-h-0 w-full ${m}`.trim(),style:{...EC(_),...v},"data-testid":"skincrafter-editor","data-skincrafter-locale":i,"data-skincrafter-generation-status":ut,children:$.jsx(FA,{left:$.jsx(T_,{texture:gn,model:pr,footerHeight:S,t:qt,onSave:hi,canSave:di,generationStatus:ut,generationError:Ct,onError:pi}),right:$.jsx(nC,{appearance:Ke.appearance,textureLayerOrder:Ke.layerOrder,onAppearanceChange:$e,onLayerOrderChange:vt,t:qt,assetBaseUrl:a,skinModel:et})})})}function TC({texture:i,model:e="classic",locale:t=Ta,bottomOffset:s=0,className:a="",style:l,theme:c,onError:f}){const d=m=>Lo(t,m),p={"--skincrafter-accent":c?.accent,"--skincrafter-accent-strong":c?.accentStrong,"--skincrafter-surface":c?.surface,"--skincrafter-text":c?.text,"--skincrafter-muted":c?.muted,"--skincrafter-border":c?.border};return $.jsx("div",{className:`skincrafter-editor h-full min-h-0 ${a}`.trim(),style:{...p,...l},children:$.jsx(T_,{texture:i,model:e,footerHeight:s,t:d,onError:f})})}const U_={en:{"skinView.error.usernameRequired":"Please enter a Minecraft username.","skinView.error.playerNotFound":"Minecraft player not found.","skinView.error.skinTextureMissing":"This player does not have an available skin texture.","skinView.error.network":"Could not reach PlayerDB. Check your connection and try again.","skinView.error.serviceUnavailable":"PlayerDB is temporarily unavailable. Try again later.","skinView.error.rateLimited":"Too many player lookup requests. Try again in a moment.","skinView.error.invalidResponse":"PlayerDB returned an unexpected response. Try again later.","notFound.title":"Page not found","notFound.description":"This address does not point to a SkinCrafter page.","notFound.backToCreator":"Back to creator"},pl:{"skinView.error.usernameRequired":"Podaj nazwe gracza Minecraft.","skinView.error.playerNotFound":"Nie znaleziono gracza Minecraft.","skinView.error.skinTextureMissing":"Ten gracz nie ma dostepnej tekstury skina.","skinView.error.network":"Nie udalo sie polaczyc z PlayerDB. Sprawdz polaczenie i sprobuj ponownie.","skinView.error.serviceUnavailable":"PlayerDB jest chwilowo niedostepne. Sprobuj ponownie pozniej.","skinView.error.rateLimited":"Za duzo zapytan o graczy. Sprobuj ponownie za chwile.","skinView.error.invalidResponse":"PlayerDB zwrocilo nieoczekiwana odpowiedz. Sprobuj ponownie pozniej.","notFound.title":"Nie znaleziono strony","notFound.description":"Ten adres nie prowadzi do żadnej strony SkinCraftera.","notFound.backToCreator":"Wróć do kreatora"}};function RC(i){return i in U_.en}function AC(i,e){return RC(e)?U_[i][e]:Lo(i,e)}function CC(i=()=>window.localStorage){return{read:e=>{try{return{status:"available",value:i().getItem(e)}}catch{return{status:"unavailable"}}},write:(e,t)=>{try{return i().setItem(e,t),!0}catch{return!1}}}}const xh=CC(),bC=wv.forwardRef((i,e)=>$.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:$.jsx("div",{className:"container mx-auto text-center text-sm",children:$.jsx("p",{children:"(c) 2026 SkinCrafter. All rights reserved."})})})),PC=i=>Lo(Ta,i),LC=({logoSrc:i="/logo.png",logoAlt:e="SkinCrafter logo",language:t="en",onLanguageChange:s,t:a=PC})=>$.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:$.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[$.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[$.jsx("div",{className:"h-8 w-36 flex items-center",children:$.jsx("img",{src:i,alt:e,className:"h-auto max-h-8 w-full object-contain",style:{imageRendering:"pixelated"}})}),$.jsx("span",{className:"pixel-border bg-amber-500 px-2 py-0.5 text-xs font-bold uppercase tracking-normal text-green-950 shadow-sm",title:a("nav.workInProgress"),"aria-label":a("nav.workInProgress"),children:"WIP"})]}),$.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[$.jsx(sd,{to:"/",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.wardrobe")}),$.jsx(sd,{to:"/mcskinview",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.skinView")}),s&&$.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[$.jsx("span",{children:a("nav.language")}),$.jsx("select",{className:"bg-green-700 text-white pixel-border px-2 py-1",value:t,onChange:l=>s(l.target.value),"aria-label":a("nav.language"),children:w_.map(l=>$.jsx("option",{value:l,children:l.toUpperCase()},l))})]})]})]})}),I_="skincrafterLanguage",DC=()=>{const i=xh.read(I_);return i.status==="available"&&NA(i.value)?i.value:Ta};function yh({children:i}){const[e,t]=z.useState(()=>DC()),s=z.useRef(null),[a,l]=z.useState(0),c=z.useCallback(d=>AC(e,d),[e]),f=z.useCallback(d=>{t(d)},[]);return z.useEffect(()=>{xh.write(I_,e)},[e]),z.useEffect(()=>{const d=()=>{l(s.current?.offsetHeight??0)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),$.jsxs("div",{className:"max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col",children:[$.jsx("div",{className:"shrink-0",children:$.jsx(LC,{language:e,onLanguageChange:f,t:c})}),i({footerHeight:a,language:e,t:c}),$.jsx("div",{className:"shrink-0",children:$.jsx(bC,{ref:s})})]})}const xu="skincrafterState",Sh="wardrobeAppearance",Eh="wardrobeLayerOrder";function wo(i){return JSON.parse(i)}function uu(){return{appearance:{...lr},layerOrder:qr(null)}}function F_(i){const e=D_(i);return e.success?{state:e.state,serializedState:e.serializedState}:null}function NC(i){let e;try{e=wo(i)}catch{return{kind:"invalid"}}const t=D_(e);return t.success?{kind:"loaded",value:{state:t.state,serializedState:t.serializedState}}:t.error.code==="unsupported_schema_version"?{kind:"unsupported"}:{kind:"invalid"}}function UC(i){const e=i(Sh);if(e.status==="unavailable")return{kind:"unavailable"};if(e.value===null)return{kind:"missing"};const t=i(Eh);if(t.status==="unavailable")return{kind:"unavailable"};if(t.value===null)return{kind:"missing"};try{const s=F_({appearance:wo(e.value),layerOrder:wo(t.value)});return s?{kind:"loaded",value:s}:{kind:"missing"}}catch{return{kind:"missing"}}}function IC(i,e){const t=i(Sh);if(t.status==="unavailable")return uu();let s;if(t.value)try{s=wo(t.value)}catch{s={...lr}}else{const f=i("wardrobeRace"),d=i("wardrobeSkinColor"),p=i("wardrobeHat");if(f.status==="unavailable"||d.status==="unavailable"||p.status==="unavailable")return uu();s={race:f.value??lr.race,skinColor:d.value??lr.skinColor,hat:p.value??lr.hat}}let a=qr(null);const l=i(Eh);if(l.status==="unavailable")return uu();if(l.value)try{a=wo(l.value)}catch{a=qr(null)}const c=F_({appearance:s,layerOrder:a});return c?(e(xu,JSON.stringify(c.serializedState)),c.state):uu()}function FC(i,e){return JSON.stringify(i)===JSON.stringify(e)}function OC(i=xh){let e=!0;const t=a=>{const l=i.read(a);return l.status==="unavailable"&&(e=!1),l},s=(a,l)=>{if(!e)return!1;const c=i.write(a,l);return c||(e=!1),c};return{load:()=>{e=!0;const a=t(xu);if(a.status==="unavailable")return{status:"empty"};if(a.value===null)return{status:"loaded",state:IC(t,s)};const l=NC(a.value);if(l.kind==="unsupported")return e=!1,{status:"incompatible"};if(l.kind==="invalid")return{status:"empty"};const c=UC(t);return c.kind==="loaded"&&!FC(c.value.serializedState,l.value.serializedState)?(s(xu,JSON.stringify(c.value.serializedState)),{status:"loaded",state:c.value.state}):{status:"loaded",state:l.value.state}},save:a=>{s(xu,JSON.stringify(a))&&s(Sh,JSON.stringify(a.appearance))&&s(Eh,JSON.stringify(a.layerOrder))}}}const kC=OC();class Zt extends Error{code;status;cause;constructor(e,t={}){super(e),this.name="FetchSkinError",this.code=e,this.status=t.status,this.cause=t.cause}}const BC=i=>i.replace(/^http:\/\//,"https://"),Ui=i=>typeof i=="object"&&i!==null,zC=i=>Ui(i)&&typeof i.name=="string"&&typeof i.value=="string",HC=i=>{if(!Ui(i)||typeof i.success!="boolean")throw new Zt("invalid_response");if(!i.success)return{success:!1};if(!Ui(i.data)||!Ui(i.data.player))throw new Zt("invalid_response");const e=i.data.player;if(e.skin_texture!==void 0&&typeof e.skin_texture!="string")throw new Zt("invalid_response");if(e.properties!==void 0&&(!Array.isArray(e.properties)||!e.properties.every(zC)))throw new Zt("invalid_response");return{success:!0,data:{player:{skin_texture:e.skin_texture,properties:e.properties}}}},VC=i=>{if(!i)return null;let e;try{e=JSON.parse(atob(i.value))}catch(l){throw new Zt("invalid_response",{cause:l})}if(!Ui(e))throw new Zt("invalid_response");const t=e.textures;if(t===void 0)return{};if(!Ui(t))throw new Zt("invalid_response");const s=t.SKIN;if(s===void 0)return{textures:{}};if(!Ui(s))throw new Zt("invalid_response");if(s.url!==void 0&&typeof s.url!="string")throw new Zt("invalid_response");const a=s.metadata;if(a!==void 0&&!Ui(a))throw new Zt("invalid_response");if(Ui(a)&&a.model!==void 0&&typeof a.model!="string")throw new Zt("invalid_response");return{textures:{SKIN:{url:s.url,metadata:Ui(a)&&typeof a.model=="string"?{model:a.model}:void 0}}}},GC=i=>i===404?new Zt("player_not_found",{status:i}):i===429?new Zt("rate_limited",{status:i}):i>=500?new Zt("service_unavailable",{status:i}):new Zt("invalid_response",{status:i});async function WC(i){let e;try{e=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(i)}`)}catch(d){throw new Zt("network_error",{cause:d})}if(!e.ok)throw GC(e.status);let t;try{t=await e.json()}catch(d){throw new Zt("invalid_response",{status:e.status,cause:d})}const s=HC(t);if(!s.success)throw new Zt("player_not_found",{status:e.status});const a=s.data?.player;if(!a)throw new Zt("invalid_response",{status:e.status});const l=a.properties?.find(d=>d.name==="textures"),c=VC(l)?.textures?.SKIN,f=c?.url??a.skin_texture;if(!f)throw new Zt("skin_texture_missing",{status:e.status});return{texture:BC(f),model:c?.metadata?.model==="slim"?"slim":"classic"}}const XC={player_not_found:"skinView.error.playerNotFound",skin_texture_missing:"skinView.error.skinTextureMissing",rate_limited:"skinView.error.rateLimited",service_unavailable:"skinView.error.serviceUnavailable",network_error:"skinView.error.network",invalid_response:"skinView.error.invalidResponse"},jC=()=>{const[i,e]=z.useState(""),[t,s]=z.useState(null),[a,l]=z.useState(null),[c,f]=z.useState(!1),d=z.useCallback(m=>{e(m.target.value)},[]),p=z.useCallback(async m=>{if(m.preventDefault(),!i.trim()){l("skinView.error.usernameRequired");return}l(null),s(null),f(!0);try{s(await WC(i.trim()))}catch(v){l(v instanceof Zt?XC[v.code]:"skinView.error.invalidResponse"),s(null)}finally{f(!1)}},[i]);return $.jsx(yh,{children:({footerHeight:m,language:v,t:_})=>$.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:$.jsx(TC,{texture:t?.texture??null,model:t?.model??"classic",locale:v,bottomOffset:m})}),$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:$.jsxs("section",{className:"mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4",children:[$.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[$.jsx("i",{className:"fas fa-user mr-2 text-green-700"})," ",_("panel.loadSkin")]}),$.jsxs("div",{className:"space-y-4 md:flex-1 md:min-h-0 overflow-y-auto pr-2",children:[$.jsxs("div",{className:"option-card bg-white shadow p-4 pixel-border relative pt-5",children:[$.jsxs("h3",{className:"font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10",children:[$.jsx("i",{className:"fas fa-id-card mr-2 text-amber-600"})," ",_("skinView.player")]}),$.jsxs("form",{onSubmit:p,className:"mt-4 flex flex-col gap-3",children:[$.jsx("input",{type:"text",value:i,onChange:d,placeholder:_("skinView.username"),"aria-label":_("skinView.username"),className:"w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"}),$.jsxs("button",{type:"submit",disabled:c,className:"pixel-button p-2 pixel-border bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white",children:[$.jsx("i",{className:"fas fa-cloud-arrow-down mr-2"}),_(c?"action.loading":"action.loadSkin")]})]})]}),a&&$.jsx("div",{role:"alert",className:"option-card bg-red-50 text-red-700 shadow p-4 pixel-border",children:_(a)})]})]})})]})})},$C=()=>$.jsx(yh,{children:({t:i})=>$.jsx("main",{className:"flex-1 min-h-0 flex items-center justify-center p-4",children:$.jsxs("section",{className:"option-card bg-white shadow p-6 pixel-border max-w-xl w-full text-center","aria-labelledby":"not-found-title",children:[$.jsx("p",{className:"text-sm font-semibold uppercase tracking-wider text-amber-700 mb-2",children:"404"}),$.jsx("h1",{id:"not-found-title",className:"text-2xl font-bold text-gray-800 mb-3",children:i("notFound.title")}),$.jsx("p",{className:"text-gray-600 mb-6",children:i("notFound.description")}),$.jsx(th,{to:"/",className:"inline-block pixel-button p-3 pixel-border bg-green-700 hover:bg-green-800 text-white",children:i("notFound.backToCreator")})]})})}),YC=()=>$.jsx(yh,{children:({footerHeight:i,language:e})=>$.jsx(wC,{locale:e,persistence:kC,previewBottomOffset:i})}),qC=()=>$.jsxs(wy,{children:[$.jsx(cu,{path:"/",element:$.jsx(YC,{})}),$.jsx(cu,{path:"/mcskinview",element:$.jsx(jC,{})}),$.jsx(cu,{path:"*",element:$.jsx($C,{})})]});wx.createRoot(document.getElementById("root")).render($.jsx(wv.StrictMode,{children:$.jsx(Yy,{children:$.jsx(qC,{})})}));
