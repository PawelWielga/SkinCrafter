(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function dv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var of={exports:{}},Ka={},lf={exports:{}},St={};var Nm;function rx(){if(Nm)return St;Nm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(I,ae,De){this.props=I,this.context=ae,this.refs=w,this.updater=De||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,ae){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ae,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=y.prototype;function L(I,ae,De){this.props=I,this.context=ae,this.refs=w,this.updater=De||S}var P=L.prototype=new x;P.constructor=L,E(P,y.prototype),P.isPureReactComponent=!0;var C=Array.isArray,k=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function X(I,ae,De){var Z,me={},j=null,fe=null;if(ae!=null)for(Z in ae.ref!==void 0&&(fe=ae.ref),ae.key!==void 0&&(j=""+ae.key),ae)k.call(ae,Z)&&!F.hasOwnProperty(Z)&&(me[Z]=ae[Z]);var ce=arguments.length-2;if(ce===1)me.children=De;else if(1<ce){for(var be=Array(ce),Pe=0;Pe<ce;Pe++)be[Pe]=arguments[Pe+2];me.children=be}if(I&&I.defaultProps)for(Z in ce=I.defaultProps,ce)me[Z]===void 0&&(me[Z]=ce[Z]);return{$$typeof:i,type:I,key:j,ref:fe,props:me,_owner:N.current}}function b(I,ae){return{$$typeof:i,type:I.type,key:ae,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===i}function H(I){var ae={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(De){return ae[De]})}var se=/\/+/g;function Q(I,ae){return typeof I=="object"&&I!==null&&I.key!=null?H(""+I.key):ae.toString(36)}function le(I,ae,De,Z,me){var j=typeof I;(j==="undefined"||j==="boolean")&&(I=null);var fe=!1;if(I===null)fe=!0;else switch(j){case"string":case"number":fe=!0;break;case"object":switch(I.$$typeof){case i:case e:fe=!0}}if(fe)return fe=I,me=me(fe),I=Z===""?"."+Q(fe,0):Z,C(me)?(De="",I!=null&&(De=I.replace(se,"$&/")+"/"),le(me,ae,De,"",function(Pe){return Pe})):me!=null&&(R(me)&&(me=b(me,De+(!me.key||fe&&fe.key===me.key?"":(""+me.key).replace(se,"$&/")+"/")+I)),ae.push(me)),1;if(fe=0,Z=Z===""?".":Z+":",C(I))for(var ce=0;ce<I.length;ce++){j=I[ce];var be=Z+Q(j,ce);fe+=le(j,ae,De,be,me)}else if(be=_(I),typeof be=="function")for(I=be.call(I),ce=0;!(j=I.next()).done;)j=j.value,be=Z+Q(j,ce++),fe+=le(j,ae,De,be,me);else if(j==="object")throw ae=String(I),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return fe}function pe(I,ae,De){if(I==null)return I;var Z=[],me=0;return le(I,Z,"","",function(j){return ae.call(De,j,me++)}),Z}function ue(I){if(I._status===-1){var ae=I._result;ae=ae(),ae.then(function(De){(I._status===0||I._status===-1)&&(I._status=1,I._result=De)},function(De){(I._status===0||I._status===-1)&&(I._status=2,I._result=De)}),I._status===-1&&(I._status=0,I._result=ae)}if(I._status===1)return I._result.default;throw I._result}var ve={current:null},z={transition:null},he={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:z,ReactCurrentOwner:N};function ie(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:pe,forEach:function(I,ae,De){pe(I,function(){ae.apply(this,arguments)},De)},count:function(I){var ae=0;return pe(I,function(){ae++}),ae},toArray:function(I){return pe(I,function(ae){return ae})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},St.Component=y,St.Fragment=t,St.Profiler=a,St.PureComponent=L,St.StrictMode=s,St.Suspense=d,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,St.act=ie,St.cloneElement=function(I,ae,De){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Z=E({},I.props),me=I.key,j=I.ref,fe=I._owner;if(ae!=null){if(ae.ref!==void 0&&(j=ae.ref,fe=N.current),ae.key!==void 0&&(me=""+ae.key),I.type&&I.type.defaultProps)var ce=I.type.defaultProps;for(be in ae)k.call(ae,be)&&!F.hasOwnProperty(be)&&(Z[be]=ae[be]===void 0&&ce!==void 0?ce[be]:ae[be])}var be=arguments.length-2;if(be===1)Z.children=De;else if(1<be){ce=Array(be);for(var Pe=0;Pe<be;Pe++)ce[Pe]=arguments[Pe+2];Z.children=ce}return{$$typeof:i,type:I.type,key:me,ref:j,props:Z,_owner:fe}},St.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},St.createElement=X,St.createFactory=function(I){var ae=X.bind(null,I);return ae.type=I,ae},St.createRef=function(){return{current:null}},St.forwardRef=function(I){return{$$typeof:f,render:I}},St.isValidElement=R,St.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:ue}},St.memo=function(I,ae){return{$$typeof:p,type:I,compare:ae===void 0?null:ae}},St.startTransition=function(I){var ae=z.transition;z.transition={};try{I()}finally{z.transition=ae}},St.unstable_act=ie,St.useCallback=function(I,ae){return ve.current.useCallback(I,ae)},St.useContext=function(I){return ve.current.useContext(I)},St.useDebugValue=function(){},St.useDeferredValue=function(I){return ve.current.useDeferredValue(I)},St.useEffect=function(I,ae){return ve.current.useEffect(I,ae)},St.useId=function(){return ve.current.useId()},St.useImperativeHandle=function(I,ae,De){return ve.current.useImperativeHandle(I,ae,De)},St.useInsertionEffect=function(I,ae){return ve.current.useInsertionEffect(I,ae)},St.useLayoutEffect=function(I,ae){return ve.current.useLayoutEffect(I,ae)},St.useMemo=function(I,ae){return ve.current.useMemo(I,ae)},St.useReducer=function(I,ae,De){return ve.current.useReducer(I,ae,De)},St.useRef=function(I){return ve.current.useRef(I)},St.useState=function(I){return ve.current.useState(I)},St.useSyncExternalStore=function(I,ae,De){return ve.current.useSyncExternalStore(I,ae,De)},St.useTransition=function(){return ve.current.useTransition()},St.version="18.3.1",St}var Im;function Hd(){return Im||(Im=1,lf.exports=rx()),lf.exports}var Fm;function sx(){if(Fm)return Ka;Fm=1;var i=Hd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,p){var m,v={},_=null,S=null;p!==void 0&&(_=""+p),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)s.call(d,m)&&!l.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:_,ref:S,props:v,_owner:a.current}}return Ka.Fragment=t,Ka.jsx=c,Ka.jsxs=c,Ka}var Om;function ax(){return Om||(Om=1,of.exports=sx()),of.exports}var $=ax(),G=Hd();const hv=dv(G);var Ll={},uf={exports:{}},On={},cf={exports:{}},ff={};var km;function ox(){return km||(km=1,(function(i){function e(z,he){var ie=z.length;z.push(he);e:for(;0<ie;){var I=ie-1>>>1,ae=z[I];if(0<a(ae,he))z[I]=he,z[ie]=ae,ie=I;else break e}}function t(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var he=z[0],ie=z.pop();if(ie!==he){z[0]=ie;e:for(var I=0,ae=z.length,De=ae>>>1;I<De;){var Z=2*(I+1)-1,me=z[Z],j=Z+1,fe=z[j];if(0>a(me,ie))j<ae&&0>a(fe,me)?(z[I]=fe,z[j]=ie,I=j):(z[I]=me,z[Z]=ie,I=Z);else if(j<ae&&0>a(fe,ie))z[I]=fe,z[j]=ie,I=j;else break e}}return he}function a(z,he){var ie=z.sortIndex-he.sortIndex;return ie!==0?ie:z.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var d=[],p=[],m=1,v=null,_=3,S=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var he=t(p);he!==null;){if(he.callback===null)s(p);else if(he.startTime<=z)s(p),he.sortIndex=he.expirationTime,e(d,he);else break;he=t(p)}}function C(z){if(w=!1,P(z),!E)if(t(d)!==null)E=!0,ue(k);else{var he=t(p);he!==null&&ve(C,he.startTime-z)}}function k(z,he){E=!1,w&&(w=!1,x(X),X=-1),S=!0;var ie=_;try{for(P(he),v=t(d);v!==null&&(!(v.expirationTime>he)||z&&!H());){var I=v.callback;if(typeof I=="function"){v.callback=null,_=v.priorityLevel;var ae=I(v.expirationTime<=he);he=i.unstable_now(),typeof ae=="function"?v.callback=ae:v===t(d)&&s(d),P(he)}else s(d);v=t(d)}if(v!==null)var De=!0;else{var Z=t(p);Z!==null&&ve(C,Z.startTime-he),De=!1}return De}finally{v=null,_=ie,S=!1}}var N=!1,F=null,X=-1,b=5,R=-1;function H(){return!(i.unstable_now()-R<b)}function se(){if(F!==null){var z=i.unstable_now();R=z;var he=!0;try{he=F(!0,z)}finally{he?Q():(N=!1,F=null)}}else N=!1}var Q;if(typeof L=="function")Q=function(){L(se)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,pe=le.port2;le.port1.onmessage=se,Q=function(){pe.postMessage(null)}}else Q=function(){y(se,0)};function ue(z){F=z,N||(N=!0,Q())}function ve(z,he){X=y(function(){z(i.unstable_now())},he)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_continueExecution=function(){E||S||(E=!0,ue(k))},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(z){switch(_){case 1:case 2:case 3:var he=3;break;default:he=_}var ie=_;_=he;try{return z()}finally{_=ie}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(z,he){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ie=_;_=z;try{return he()}finally{_=ie}},i.unstable_scheduleCallback=function(z,he,ie){var I=i.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?I+ie:I):ie=I,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=ie+ae,z={id:m++,callback:he,priorityLevel:z,startTime:ie,expirationTime:ae,sortIndex:-1},ie>I?(z.sortIndex=ie,e(p,z),t(d)===null&&z===t(p)&&(w?(x(X),X=-1):w=!0,ve(C,ie-I))):(z.sortIndex=ae,e(d,z),E||S||(E=!0,ue(k))),z},i.unstable_shouldYield=H,i.unstable_wrapCallback=function(z){var he=_;return function(){var ie=_;_=he;try{return z.apply(this,arguments)}finally{_=ie}}}})(ff)),ff}var Bm;function lx(){return Bm||(Bm=1,cf.exports=ox()),cf.exports}var zm;function ux(){if(zm)return On;zm=1;var i=Hd(),e=lx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function _(n){return d.call(v,n)?!0:d.call(m,n)?!1:p.test(n)?v[n]=!0:(m[n]=!0,!1)}function S(n,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,o,u){if(r===null||typeof r>"u"||S(n,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,o,u,h,g,M){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,L);y[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,L);y[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,L);y[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,o,u){var h=y.hasOwnProperty(r)?y[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,o,h,u)&&(o=null),u||h===null?_(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,r,o):n.setAttribute(r,o))))}var C=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),z=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,I;function ae(n){if(I===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+n}var De=!1;function Z(n,r){if(!n||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(re){var u=re}Reflect.construct(n,[],r)}else{try{r.call()}catch(re){u=re}n.call(r.prototype)}else{try{throw Error()}catch(re){u=re}n()}}catch(re){if(re&&u&&typeof re.stack=="string"){for(var h=re.stack.split(`
`),g=u.stack.split(`
`),M=h.length-1,U=g.length-1;1<=M&&0<=U&&h[M]!==g[U];)U--;for(;1<=M&&0<=U;M--,U--)if(h[M]!==g[U]){if(M!==1||U!==1)do if(M--,U--,0>U||h[M]!==g[U]){var B=`
`+h[M].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=M&&0<=U);break}}}finally{De=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ae(n):""}function me(n){switch(n.tag){case 5:return ae(n.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function j(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case N:return"Portal";case b:return"Profiler";case X:return"StrictMode";case Q:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case se:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return r=n.displayName||null,r!==null?r:j(n.type)||"Memo";case ue:r=n._payload,n=n._init;try{return j(n(r))}catch{}}return null}function fe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return j(r);case 8:return r===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Pe(n){var r=be(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(M){u=""+M,g.call(this,M)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function tt(n){n._valueTracker||(n._valueTracker=Pe(n))}function pt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=be(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function O(n,r){var o=r.checked;return ie({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Xt(n,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=ce(r.value!=null?r.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function _t(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function Mt(n,r){_t(n,r);var o=ce(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?mt(n,r.type,o):r.hasOwnProperty("defaultValue")&&mt(n,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function We(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function mt(n,r,o){(r!=="number"||dt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var qe=Array.isArray;function st(n,r,o,u){if(n=n.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=r.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+ce(o),r=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function Ut(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(qe(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:ce(o)}}function T(n,r){var o=ce(r.value),u=ce(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function ee(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ge(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ge(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var de,Ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(r,o,u,h)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=de.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Le(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Ie={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(Ie).forEach(function(n){Ze.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ie[r]=Ie[n]})});function ye(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Ie.hasOwnProperty(n)&&Ie[n]?(""+r).trim():r+"px"}function Be(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=ye(o,r[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var nt=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(n,r){if(r){if(nt[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ue(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var at=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ne=null,Se=null,ke=null;function we(n){if(n=Ia(n)){if(typeof Ne!="function")throw Error(t(280));var r=n.stateNode;r&&(r=jo(r),Ne(n.stateNode,n.type,r))}}function _e(n){Se?ke?ke.push(n):ke=[n]:Se=n}function Ae(){if(Se){var n=Se,r=ke;if(ke=Se=null,we(n),r)for(n=0;n<r.length;n++)we(r[n])}}function $e(n,r){return n(r)}function ct(){}var ft=!1;function qt(n,r,o){if(ft)return n(r,o);ft=!0;try{return $e(n,r,o)}finally{ft=!1,(Se!==null||ke!==null)&&(ct(),Ae())}}function Ot(n,r){var o=n.stateNode;if(o===null)return null;var u=jo(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var Bn=!1;if(f)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){Bn=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{Bn=!1}function Li(n,r,o,u,h,g,M,U,B){var re=Array.prototype.slice.call(arguments,3);try{r.apply(o,re)}catch(Me){this.onError(Me)}}var Di=!1,Br=null,zr=!1,rr=null,wo={onError:function(n){Di=!0,Br=n}};function gs(n,r,o,u,h,g,M,U,B){Di=!1,Br=null,Li.apply(wo,arguments)}function To(n,r,o,u,h,g,M,U,B){if(gs.apply(this,arguments),Di){if(Di){var re=Br;Di=!1,Br=null}else throw Error(t(198));zr||(zr=!0,rr=re)}}function vi(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Ro(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ao(n){if(vi(n)!==n)throw Error(t(188))}function bu(n){var r=n.alternate;if(!r){if(r=vi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,u=r;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return Ao(h),n;if(g===u)return Ao(h),r;g=g.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=g;else{for(var M=!1,U=h.child;U;){if(U===o){M=!0,o=h,u=g;break}if(U===u){M=!0,u=h,o=g;break}U=U.sibling}if(!M){for(U=g.child;U;){if(U===o){M=!0,o=g,u=h;break}if(U===u){M=!0,u=g,o=h;break}U=U.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function Co(n){return n=bu(n),n!==null?bo(n):null}function bo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=bo(n);if(r!==null)return r;n=n.sibling}return null}var Po=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,Y=e.unstable_shouldYield,oe=e.unstable_requestPaint,J=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Fe=e.unstable_UserBlockingPriority,Ve=e.unstable_NormalPriority,He=e.unstable_LowPriority,lt=e.unstable_IdlePriority,ot=null,Xe=null;function xt(n){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(ot,n,void 0,(n.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:bt,zt=Math.log,Nt=Math.LN2;function bt(n){return n>>>=0,n===0?32:31-(zt(n)/Nt|0)|0}var et=64,Lt=4194304;function yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function rn(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,M=o&268435455;if(M!==0){var U=M&~h;U!==0?u=yt(U):(g&=M,g!==0&&(u=yt(g)))}else M=o&~h,M!==0?u=yt(M):g!==0&&(u=yt(g));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,g=r&-r,h>=g||h===16&&(g&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)o=31-gt(r),h=1<<o,u|=n[o],r&=~h;return u}function sr(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wn(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var M=31-gt(g),U=1<<M,B=h[M];B===-1?((U&o)===0||(U&u)!==0)&&(h[M]=sr(U,r)):B<=r&&(n.expiredLanes|=U),g&=~U}}function Ui(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function It(){var n=et;return et<<=1,(et&4194240)===0&&(et=64),n}function gn(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function sn(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-gt(r),n[r]=o}function fn(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-gt(o),g=1<<h;r[h]=0,u[h]=-1,n[h]=-1,o&=~g}}function an(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-gt(o),h=1<<u;h&r|n[u]&r&&(n[u]|=r),o&=~h}}var wt=0;function _i(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var hh,Pu,ph,mh,gh,Lu=!1,Lo=[],ar=null,or=null,lr=null,xa=new Map,ya=new Map,ur=[],R_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vh(n,r){switch(n){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":xa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(r.pointerId)}}function Sa(n,r,o,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},r!==null&&(r=Ia(r),r!==null&&Pu(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function A_(n,r,o,u,h){switch(r){case"focusin":return ar=Sa(ar,n,r,o,u,h),!0;case"dragenter":return or=Sa(or,n,r,o,u,h),!0;case"mouseover":return lr=Sa(lr,n,r,o,u,h),!0;case"pointerover":var g=h.pointerId;return xa.set(g,Sa(xa.get(g)||null,n,r,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,ya.set(g,Sa(ya.get(g)||null,n,r,o,u,h)),!0}return!1}function _h(n){var r=Hr(n.target);if(r!==null){var o=vi(r);if(o!==null){if(r=o.tag,r===13){if(r=Ro(o),r!==null){n.blockedOn=r,gh(n.priority,function(){ph(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Do(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Uu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);at=u,o.target.dispatchEvent(u),at=null}else return r=Ia(o),r!==null&&Pu(r),n.blockedOn=o,!1;r.shift()}return!0}function xh(n,r,o){Do(n)&&o.delete(r)}function C_(){Lu=!1,ar!==null&&Do(ar)&&(ar=null),or!==null&&Do(or)&&(or=null),lr!==null&&Do(lr)&&(lr=null),xa.forEach(xh),ya.forEach(xh)}function Ea(n,r){n.blockedOn===r&&(n.blockedOn=null,Lu||(Lu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,C_)))}function Ma(n){function r(h){return Ea(h,n)}if(0<Lo.length){Ea(Lo[0],n);for(var o=1;o<Lo.length;o++){var u=Lo[o];u.blockedOn===n&&(u.blockedOn=null)}}for(ar!==null&&Ea(ar,n),or!==null&&Ea(or,n),lr!==null&&Ea(lr,n),xa.forEach(r),ya.forEach(r),o=0;o<ur.length;o++)u=ur[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<ur.length&&(o=ur[0],o.blockedOn===null);)_h(o),o.blockedOn===null&&ur.shift()}var vs=C.ReactCurrentBatchConfig,Uo=!0;function b_(n,r,o,u){var h=wt,g=vs.transition;vs.transition=null;try{wt=1,Du(n,r,o,u)}finally{wt=h,vs.transition=g}}function P_(n,r,o,u){var h=wt,g=vs.transition;vs.transition=null;try{wt=4,Du(n,r,o,u)}finally{wt=h,vs.transition=g}}function Du(n,r,o,u){if(Uo){var h=Uu(n,r,o,u);if(h===null)Ku(n,r,u,No,o),vh(n,u);else if(A_(h,n,r,o,u))u.stopPropagation();else if(vh(n,u),r&4&&-1<R_.indexOf(n)){for(;h!==null;){var g=Ia(h);if(g!==null&&hh(g),g=Uu(n,r,o,u),g===null&&Ku(n,r,u,No,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else Ku(n,r,u,null,o)}}var No=null;function Uu(n,r,o,u){if(No=null,n=V(u),n=Hr(n),n!==null)if(r=vi(n),r===null)n=null;else if(o=r.tag,o===13){if(n=Ro(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return No=n,null}function yh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Re:return 1;case Fe:return 4;case Ve:case He:return 16;case lt:return 536870912;default:return 16}default:return 16}}var cr=null,Nu=null,Io=null;function Sh(){if(Io)return Io;var n,r=Nu,o=r.length,u,h="value"in cr?cr.value:cr.textContent,g=h.length;for(n=0;n<o&&r[n]===h[n];n++);var M=o-n;for(u=1;u<=M&&r[o-u]===h[g-u];u++);return Io=h.slice(n,1<u?1-u:void 0)}function Fo(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Oo(){return!0}function Eh(){return!1}function zn(n){function r(o,u,h,g,M){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=M,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(o=n[U],this[U]=o?o(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Oo:Eh,this.isPropagationStopped=Eh,this}return ie(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),r}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=zn(_s),wa=ie({},_s,{view:0,detail:0}),L_=zn(wa),Fu,Ou,Ta,ko=ie({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ta&&(Ta&&n.type==="mousemove"?(Fu=n.screenX-Ta.screenX,Ou=n.screenY-Ta.screenY):Ou=Fu=0,Ta=n),Fu)},movementY:function(n){return"movementY"in n?n.movementY:Ou}}),Mh=zn(ko),D_=ie({},ko,{dataTransfer:0}),U_=zn(D_),N_=ie({},wa,{relatedTarget:0}),ku=zn(N_),I_=ie({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),F_=zn(I_),O_=ie({},_s,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),k_=zn(O_),B_=ie({},_s,{data:0}),wh=zn(B_),z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=V_[n])?!!r[n]:!1}function Bu(){return G_}var W_=ie({},wa,{key:function(n){if(n.key){var r=z_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Fo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?H_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(n){return n.type==="keypress"?Fo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),X_=zn(W_),j_=ie({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Th=zn(j_),$_=ie({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),Y_=zn($_),q_=ie({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),K_=zn(q_),Z_=ie({},ko,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),J_=zn(Z_),Q_=[9,13,27,32],zu=f&&"CompositionEvent"in window,Ra=null;f&&"documentMode"in document&&(Ra=document.documentMode);var e0=f&&"TextEvent"in window&&!Ra,Rh=f&&(!zu||Ra&&8<Ra&&11>=Ra),Ah=" ",Ch=!1;function bh(n,r){switch(n){case"keyup":return Q_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ph(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function t0(n,r){switch(n){case"compositionend":return Ph(r);case"keypress":return r.which!==32?null:(Ch=!0,Ah);case"textInput":return n=r.data,n===Ah&&Ch?null:n;default:return null}}function n0(n,r){if(xs)return n==="compositionend"||!zu&&bh(n,r)?(n=Sh(),Io=Nu=cr=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Rh&&r.locale!=="ko"?null:r.data;default:return null}}var i0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!i0[n.type]:r==="textarea"}function Dh(n,r,o,u){_e(u),r=Go(r,"onChange"),0<r.length&&(o=new Iu("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Aa=null,Ca=null;function r0(n){Kh(n,0)}function Bo(n){var r=ws(n);if(pt(r))return n}function s0(n,r){if(n==="change")return r}var Uh=!1;if(f){var Hu;if(f){var Vu="oninput"in document;if(!Vu){var Nh=document.createElement("div");Nh.setAttribute("oninput","return;"),Vu=typeof Nh.oninput=="function"}Hu=Vu}else Hu=!1;Uh=Hu&&(!document.documentMode||9<document.documentMode)}function Ih(){Aa&&(Aa.detachEvent("onpropertychange",Fh),Ca=Aa=null)}function Fh(n){if(n.propertyName==="value"&&Bo(Ca)){var r=[];Dh(r,Ca,n,V(n)),qt(r0,r)}}function a0(n,r,o){n==="focusin"?(Ih(),Aa=r,Ca=o,Aa.attachEvent("onpropertychange",Fh)):n==="focusout"&&Ih()}function o0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Bo(Ca)}function l0(n,r){if(n==="click")return Bo(r)}function u0(n,r){if(n==="input"||n==="change")return Bo(r)}function c0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ri=typeof Object.is=="function"?Object.is:c0;function ba(n,r){if(ri(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!d.call(r,h)||!ri(n[h],r[h]))return!1}return!0}function Oh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kh(n,r){var o=Oh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Oh(o)}}function Bh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Bh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function zh(){for(var n=window,r=dt();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=dt(n.document)}return r}function Gu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function f0(n){var r=zh(),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Bh(o.ownerDocument.documentElement,o)){if(u!==null&&Gu(o)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=kh(o,g);var M=kh(o,u);h&&M&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(r),n.extend(M.node,M.offset)):(r.setEnd(M.node,M.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var d0=f&&"documentMode"in document&&11>=document.documentMode,ys=null,Wu=null,Pa=null,Xu=!1;function Hh(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Xu||ys==null||ys!==dt(u)||(u=ys,"selectionStart"in u&&Gu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Pa&&ba(Pa,u)||(Pa=u,u=Go(Wu,"onSelect"),0<u.length&&(r=new Iu("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=ys)))}function zo(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ss={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},ju={},Vh={};f&&(Vh=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Ho(n){if(ju[n])return ju[n];if(!Ss[n])return n;var r=Ss[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Vh)return ju[n]=r[o];return n}var Gh=Ho("animationend"),Wh=Ho("animationiteration"),Xh=Ho("animationstart"),jh=Ho("transitionend"),$h=new Map,Yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(n,r){$h.set(n,r),l(r,[n])}for(var $u=0;$u<Yh.length;$u++){var Yu=Yh[$u],h0=Yu.toLowerCase(),p0=Yu[0].toUpperCase()+Yu.slice(1);fr(h0,"on"+p0)}fr(Gh,"onAnimationEnd"),fr(Wh,"onAnimationIteration"),fr(Xh,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(jh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function qh(n,r,o){var u=n.type||"unknown-event";n.currentTarget=o,To(u,r,void 0,n),n.currentTarget=null}function Kh(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var M=u.length-1;0<=M;M--){var U=u[M],B=U.instance,re=U.currentTarget;if(U=U.listener,B!==g&&h.isPropagationStopped())break e;qh(h,U,re),g=B}else for(M=0;M<u.length;M++){if(U=u[M],B=U.instance,re=U.currentTarget,U=U.listener,B!==g&&h.isPropagationStopped())break e;qh(h,U,re),g=B}}}if(zr)throw n=rr,zr=!1,rr=null,n}function kt(n,r){var o=r[nc];o===void 0&&(o=r[nc]=new Set);var u=n+"__bubble";o.has(u)||(Zh(r,n,2,!1),o.add(u))}function qu(n,r,o){var u=0;r&&(u|=4),Zh(o,n,u,r)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Vo]){n[Vo]=!0,s.forEach(function(o){o!=="selectionchange"&&(m0.has(o)||qu(o,!1,n),qu(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Vo]||(r[Vo]=!0,qu("selectionchange",!1,r))}}function Zh(n,r,o,u){switch(yh(r)){case 1:var h=b_;break;case 4:h=P_;break;default:h=Du}o=h.bind(null,r,o,n),h=void 0,!Bn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(r,o,{capture:!0,passive:h}):n.addEventListener(r,o,!0):h!==void 0?n.addEventListener(r,o,{passive:h}):n.addEventListener(r,o,!1)}function Ku(n,r,o,u,h){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var U=u.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(M===4)for(M=u.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===h||B.nodeType===8&&B.parentNode===h))return;M=M.return}for(;U!==null;){if(M=Hr(U),M===null)return;if(B=M.tag,B===5||B===6){u=g=M;continue e}U=U.parentNode}}u=u.return}qt(function(){var re=g,Me=V(o),Te=[];e:{var Ee=$h.get(n);if(Ee!==void 0){var ze=Iu,je=n;switch(n){case"keypress":if(Fo(o)===0)break e;case"keydown":case"keyup":ze=X_;break;case"focusin":je="focus",ze=ku;break;case"focusout":je="blur",ze=ku;break;case"beforeblur":case"afterblur":ze=ku;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=U_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=Y_;break;case Gh:case Wh:case Xh:ze=F_;break;case jh:ze=K_;break;case"scroll":ze=L_;break;case"wheel":ze=J_;break;case"copy":case"cut":case"paste":ze=k_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Th}var Ye=(r&4)!==0,Kt=!Ye&&n==="scroll",K=Ye?Ee!==null?Ee+"Capture":null:Ee;Ye=[];for(var W=re,te;W!==null;){te=W;var Ce=te.stateNode;if(te.tag===5&&Ce!==null&&(te=Ce,K!==null&&(Ce=Ot(W,K),Ce!=null&&Ye.push(Ua(W,Ce,te)))),Kt)break;W=W.return}0<Ye.length&&(Ee=new ze(Ee,je,null,o,Me),Te.push({event:Ee,listeners:Ye}))}}if((r&7)===0){e:{if(Ee=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",Ee&&o!==at&&(je=o.relatedTarget||o.fromElement)&&(Hr(je)||je[Ni]))break e;if((ze||Ee)&&(Ee=Me.window===Me?Me:(Ee=Me.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,ze?(je=o.relatedTarget||o.toElement,ze=re,je=je?Hr(je):null,je!==null&&(Kt=vi(je),je!==Kt||je.tag!==5&&je.tag!==6)&&(je=null)):(ze=null,je=re),ze!==je)){if(Ye=Mh,Ce="onMouseLeave",K="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Th,Ce="onPointerLeave",K="onPointerEnter",W="pointer"),Kt=ze==null?Ee:ws(ze),te=je==null?Ee:ws(je),Ee=new Ye(Ce,W+"leave",ze,o,Me),Ee.target=Kt,Ee.relatedTarget=te,Ce=null,Hr(Me)===re&&(Ye=new Ye(K,W+"enter",je,o,Me),Ye.target=te,Ye.relatedTarget=Kt,Ce=Ye),Kt=Ce,ze&&je)t:{for(Ye=ze,K=je,W=0,te=Ye;te;te=Es(te))W++;for(te=0,Ce=K;Ce;Ce=Es(Ce))te++;for(;0<W-te;)Ye=Es(Ye),W--;for(;0<te-W;)K=Es(K),te--;for(;W--;){if(Ye===K||K!==null&&Ye===K.alternate)break t;Ye=Es(Ye),K=Es(K)}Ye=null}else Ye=null;ze!==null&&Jh(Te,Ee,ze,Ye,!1),je!==null&&Kt!==null&&Jh(Te,Kt,je,Ye,!0)}}e:{if(Ee=re?ws(re):window,ze=Ee.nodeName&&Ee.nodeName.toLowerCase(),ze==="select"||ze==="input"&&Ee.type==="file")var Je=s0;else if(Lh(Ee))if(Uh)Je=u0;else{Je=o0;var it=a0}else(ze=Ee.nodeName)&&ze.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(Je=l0);if(Je&&(Je=Je(n,re))){Dh(Te,Je,o,Me);break e}it&&it(n,Ee,re),n==="focusout"&&(it=Ee._wrapperState)&&it.controlled&&Ee.type==="number"&&mt(Ee,"number",Ee.value)}switch(it=re?ws(re):window,n){case"focusin":(Lh(it)||it.contentEditable==="true")&&(ys=it,Wu=re,Pa=null);break;case"focusout":Pa=Wu=ys=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,Hh(Te,o,Me);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":Hh(Te,o,Me)}var rt;if(zu)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else xs?bh(n,o)&&(ut="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ut="onCompositionStart");ut&&(Rh&&o.locale!=="ko"&&(xs||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&xs&&(rt=Sh()):(cr=Me,Nu="value"in cr?cr.value:cr.textContent,xs=!0)),it=Go(re,ut),0<it.length&&(ut=new wh(ut,n,null,o,Me),Te.push({event:ut,listeners:it}),rt?ut.data=rt:(rt=Ph(o),rt!==null&&(ut.data=rt)))),(rt=e0?t0(n,o):n0(n,o))&&(re=Go(re,"onBeforeInput"),0<re.length&&(Me=new wh("onBeforeInput","beforeinput",null,o,Me),Te.push({event:Me,listeners:re}),Me.data=rt))}Kh(Te,r)})}function Ua(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Go(n,r){for(var o=r+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Ot(n,o),g!=null&&u.unshift(Ua(n,g,h)),g=Ot(n,r),g!=null&&u.push(Ua(n,g,h))),n=n.return}return u}function Es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Jh(n,r,o,u,h){for(var g=r._reactName,M=[];o!==null&&o!==u;){var U=o,B=U.alternate,re=U.stateNode;if(B!==null&&B===u)break;U.tag===5&&re!==null&&(U=re,h?(B=Ot(o,g),B!=null&&M.unshift(Ua(o,B,U))):h||(B=Ot(o,g),B!=null&&M.push(Ua(o,B,U)))),o=o.return}M.length!==0&&n.push({event:r,listeners:M})}var g0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function Qh(n){return(typeof n=="string"?n:""+n).replace(g0,`
`).replace(v0,"")}function Wo(n,r,o){if(r=Qh(r),Qh(n)!==r&&o)throw Error(t(425))}function Xo(){}var Zu=null,Ju=null;function Qu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ec=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,x0=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(n){return ep.resolve(null).then(n).catch(y0)}:ec;function y0(n){setTimeout(function(){throw n})}function tc(n,r){var o=r,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),Ma(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);Ma(r)}function dr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function tp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),xi="__reactFiber$"+Ms,Na="__reactProps$"+Ms,Ni="__reactContainer$"+Ms,nc="__reactEvents$"+Ms,S0="__reactListeners$"+Ms,E0="__reactHandles$"+Ms;function Hr(n){var r=n[xi];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Ni]||o[xi]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=tp(n);n!==null;){if(o=n[xi])return o;n=tp(n)}return r}n=o,o=n.parentNode}return null}function Ia(n){return n=n[xi]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function jo(n){return n[Na]||null}var ic=[],Ts=-1;function hr(n){return{current:n}}function Bt(n){0>Ts||(n.current=ic[Ts],ic[Ts]=null,Ts--)}function Ft(n,r){Ts++,ic[Ts]=n.current,n.current=r}var pr={},vn=hr(pr),Dn=hr(!1),Vr=pr;function Rs(n,r){var o=n.type.contextTypes;if(!o)return pr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=r[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function Un(n){return n=n.childContextTypes,n!=null}function $o(){Bt(Dn),Bt(vn)}function np(n,r,o){if(vn.current!==pr)throw Error(t(168));Ft(vn,r),Ft(Dn,o)}function ip(n,r,o){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(t(108,fe(n)||"Unknown",h));return ie({},o,u)}function Yo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,Vr=vn.current,Ft(vn,n),Ft(Dn,Dn.current),!0}function rp(n,r,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=ip(n,r,Vr),u.__reactInternalMemoizedMergedChildContext=n,Bt(Dn),Bt(vn),Ft(vn,n)):Bt(Dn),Ft(Dn,o)}var Ii=null,qo=!1,rc=!1;function sp(n){Ii===null?Ii=[n]:Ii.push(n)}function M0(n){qo=!0,sp(n)}function mr(){if(!rc&&Ii!==null){rc=!0;var n=0,r=wt;try{var o=Ii;for(wt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ii=null,qo=!1}catch(h){throw Ii!==null&&(Ii=Ii.slice(n+1)),Po(Re,mr),h}finally{wt=r,rc=!1}}return null}var As=[],Cs=0,Ko=null,Zo=0,jn=[],$n=0,Gr=null,Fi=1,Oi="";function Wr(n,r){As[Cs++]=Zo,As[Cs++]=Ko,Ko=n,Zo=r}function ap(n,r,o){jn[$n++]=Fi,jn[$n++]=Oi,jn[$n++]=Gr,Gr=n;var u=Fi;n=Oi;var h=32-gt(u)-1;u&=~(1<<h),o+=1;var g=32-gt(r)+h;if(30<g){var M=h-h%5;g=(u&(1<<M)-1).toString(32),u>>=M,h-=M,Fi=1<<32-gt(r)+h|o<<h|u,Oi=g+n}else Fi=1<<g|o<<h|u,Oi=n}function sc(n){n.return!==null&&(Wr(n,1),ap(n,1,0))}function ac(n){for(;n===Ko;)Ko=As[--Cs],As[Cs]=null,Zo=As[--Cs],As[Cs]=null;for(;n===Gr;)Gr=jn[--$n],jn[$n]=null,Oi=jn[--$n],jn[$n]=null,Fi=jn[--$n],jn[$n]=null}var Hn=null,Vn=null,Ht=!1,si=null;function op(n,r){var o=Zn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function lp(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Hn=n,Vn=dr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Hn=n,Vn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Gr!==null?{id:Fi,overflow:Oi}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Zn(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,Hn=n,Vn=null,!0):!1;default:return!1}}function oc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function lc(n){if(Ht){var r=Vn;if(r){var o=r;if(!lp(n,r)){if(oc(n))throw Error(t(418));r=dr(o.nextSibling);var u=Hn;r&&lp(n,r)?op(u,o):(n.flags=n.flags&-4097|2,Ht=!1,Hn=n)}}else{if(oc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ht=!1,Hn=n}}}function up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function Jo(n){if(n!==Hn)return!1;if(!Ht)return up(n),Ht=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Qu(n.type,n.memoizedProps)),r&&(r=Vn)){if(oc(n))throw cp(),Error(t(418));for(;r;)op(n,r),r=dr(r.nextSibling)}if(up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){Vn=dr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}Vn=null}}else Vn=Hn?dr(n.stateNode.nextSibling):null;return!0}function cp(){for(var n=Vn;n;)n=dr(n.nextSibling)}function bs(){Vn=Hn=null,Ht=!1}function uc(n){si===null?si=[n]:si.push(n)}var w0=C.ReactCurrentBatchConfig;function Fa(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(M){var U=h.refs;M===null?delete U[g]:U[g]=M},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Qo(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function fp(n){var r=n._init;return r(n._payload)}function dp(n){function r(K,W){if(n){var te=K.deletions;te===null?(K.deletions=[W],K.flags|=16):te.push(W)}}function o(K,W){if(!n)return null;for(;W!==null;)r(K,W),W=W.sibling;return null}function u(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function h(K,W){return K=Mr(K,W),K.index=0,K.sibling=null,K}function g(K,W,te){return K.index=te,n?(te=K.alternate,te!==null?(te=te.index,te<W?(K.flags|=2,W):te):(K.flags|=2,W)):(K.flags|=1048576,W)}function M(K){return n&&K.alternate===null&&(K.flags|=2),K}function U(K,W,te,Ce){return W===null||W.tag!==6?(W=ef(te,K.mode,Ce),W.return=K,W):(W=h(W,te),W.return=K,W)}function B(K,W,te,Ce){var Je=te.type;return Je===F?Me(K,W,te.props.children,Ce,te.key):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ue&&fp(Je)===W.type)?(Ce=h(W,te.props),Ce.ref=Fa(K,W,te),Ce.return=K,Ce):(Ce=Ml(te.type,te.key,te.props,null,K.mode,Ce),Ce.ref=Fa(K,W,te),Ce.return=K,Ce)}function re(K,W,te,Ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=tf(te,K.mode,Ce),W.return=K,W):(W=h(W,te.children||[]),W.return=K,W)}function Me(K,W,te,Ce,Je){return W===null||W.tag!==7?(W=Jr(te,K.mode,Ce,Je),W.return=K,W):(W=h(W,te),W.return=K,W)}function Te(K,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=ef(""+W,K.mode,te),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case k:return te=Ml(W.type,W.key,W.props,null,K.mode,te),te.ref=Fa(K,null,W),te.return=K,te;case N:return W=tf(W,K.mode,te),W.return=K,W;case ue:var Ce=W._init;return Te(K,Ce(W._payload),te)}if(qe(W)||he(W))return W=Jr(W,K.mode,te,null),W.return=K,W;Qo(K,W)}return null}function Ee(K,W,te,Ce){var Je=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Je!==null?null:U(K,W,""+te,Ce);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case k:return te.key===Je?B(K,W,te,Ce):null;case N:return te.key===Je?re(K,W,te,Ce):null;case ue:return Je=te._init,Ee(K,W,Je(te._payload),Ce)}if(qe(te)||he(te))return Je!==null?null:Me(K,W,te,Ce,null);Qo(K,te)}return null}function ze(K,W,te,Ce,Je){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return K=K.get(te)||null,U(W,K,""+Ce,Je);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case k:return K=K.get(Ce.key===null?te:Ce.key)||null,B(W,K,Ce,Je);case N:return K=K.get(Ce.key===null?te:Ce.key)||null,re(W,K,Ce,Je);case ue:var it=Ce._init;return ze(K,W,te,it(Ce._payload),Je)}if(qe(Ce)||he(Ce))return K=K.get(te)||null,Me(W,K,Ce,Je,null);Qo(W,Ce)}return null}function je(K,W,te,Ce){for(var Je=null,it=null,rt=W,ut=W=0,un=null;rt!==null&&ut<te.length;ut++){rt.index>ut?(un=rt,rt=null):un=rt.sibling;var Rt=Ee(K,rt,te[ut],Ce);if(Rt===null){rt===null&&(rt=un);break}n&&rt&&Rt.alternate===null&&r(K,rt),W=g(Rt,W,ut),it===null?Je=Rt:it.sibling=Rt,it=Rt,rt=un}if(ut===te.length)return o(K,rt),Ht&&Wr(K,ut),Je;if(rt===null){for(;ut<te.length;ut++)rt=Te(K,te[ut],Ce),rt!==null&&(W=g(rt,W,ut),it===null?Je=rt:it.sibling=rt,it=rt);return Ht&&Wr(K,ut),Je}for(rt=u(K,rt);ut<te.length;ut++)un=ze(rt,K,ut,te[ut],Ce),un!==null&&(n&&un.alternate!==null&&rt.delete(un.key===null?ut:un.key),W=g(un,W,ut),it===null?Je=un:it.sibling=un,it=un);return n&&rt.forEach(function(wr){return r(K,wr)}),Ht&&Wr(K,ut),Je}function Ye(K,W,te,Ce){var Je=he(te);if(typeof Je!="function")throw Error(t(150));if(te=Je.call(te),te==null)throw Error(t(151));for(var it=Je=null,rt=W,ut=W=0,un=null,Rt=te.next();rt!==null&&!Rt.done;ut++,Rt=te.next()){rt.index>ut?(un=rt,rt=null):un=rt.sibling;var wr=Ee(K,rt,Rt.value,Ce);if(wr===null){rt===null&&(rt=un);break}n&&rt&&wr.alternate===null&&r(K,rt),W=g(wr,W,ut),it===null?Je=wr:it.sibling=wr,it=wr,rt=un}if(Rt.done)return o(K,rt),Ht&&Wr(K,ut),Je;if(rt===null){for(;!Rt.done;ut++,Rt=te.next())Rt=Te(K,Rt.value,Ce),Rt!==null&&(W=g(Rt,W,ut),it===null?Je=Rt:it.sibling=Rt,it=Rt);return Ht&&Wr(K,ut),Je}for(rt=u(K,rt);!Rt.done;ut++,Rt=te.next())Rt=ze(rt,K,ut,Rt.value,Ce),Rt!==null&&(n&&Rt.alternate!==null&&rt.delete(Rt.key===null?ut:Rt.key),W=g(Rt,W,ut),it===null?Je=Rt:it.sibling=Rt,it=Rt);return n&&rt.forEach(function(ix){return r(K,ix)}),Ht&&Wr(K,ut),Je}function Kt(K,W,te,Ce){if(typeof te=="object"&&te!==null&&te.type===F&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case k:e:{for(var Je=te.key,it=W;it!==null;){if(it.key===Je){if(Je=te.type,Je===F){if(it.tag===7){o(K,it.sibling),W=h(it,te.props.children),W.return=K,K=W;break e}}else if(it.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ue&&fp(Je)===it.type){o(K,it.sibling),W=h(it,te.props),W.ref=Fa(K,it,te),W.return=K,K=W;break e}o(K,it);break}else r(K,it);it=it.sibling}te.type===F?(W=Jr(te.props.children,K.mode,Ce,te.key),W.return=K,K=W):(Ce=Ml(te.type,te.key,te.props,null,K.mode,Ce),Ce.ref=Fa(K,W,te),Ce.return=K,K=Ce)}return M(K);case N:e:{for(it=te.key;W!==null;){if(W.key===it)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){o(K,W.sibling),W=h(W,te.children||[]),W.return=K,K=W;break e}else{o(K,W);break}else r(K,W);W=W.sibling}W=tf(te,K.mode,Ce),W.return=K,K=W}return M(K);case ue:return it=te._init,Kt(K,W,it(te._payload),Ce)}if(qe(te))return je(K,W,te,Ce);if(he(te))return Ye(K,W,te,Ce);Qo(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(o(K,W.sibling),W=h(W,te),W.return=K,K=W):(o(K,W),W=ef(te,K.mode,Ce),W.return=K,K=W),M(K)):o(K,W)}return Kt}var Ps=dp(!0),hp=dp(!1),el=hr(null),tl=null,Ls=null,cc=null;function fc(){cc=Ls=tl=null}function dc(n){var r=el.current;Bt(el),n._currentValue=r}function hc(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Ds(n,r){tl=n,cc=Ls=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Nn=!0),n.firstContext=null)}function Yn(n){var r=n._currentValue;if(cc!==n)if(n={context:n,memoizedValue:r,next:null},Ls===null){if(tl===null)throw Error(t(308));Ls=n,tl.dependencies={lanes:0,firstContext:n}}else Ls=Ls.next=n;return r}var Xr=null;function pc(n){Xr===null?Xr=[n]:Xr.push(n)}function pp(n,r,o,u){var h=r.interleaved;return h===null?(o.next=o,pc(r)):(o.next=h.next,h.next=o),r.interleaved=o,ki(n,u)}function ki(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var gr=!1;function mc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Bi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function vr(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Tt&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,ki(n,o)}return h=u.interleaved,h===null?(r.next=r,pc(u)):(r.next=h.next,h.next=r),u.interleaved=r,ki(n,o)}function nl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,an(n,o)}}function gp(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=M:g=g.next=M,o=o.next}while(o!==null);g===null?h=g=r:g=g.next=r}else h=g=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function il(n,r,o,u){var h=n.updateQueue;gr=!1;var g=h.firstBaseUpdate,M=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var B=U,re=B.next;B.next=null,M===null?g=re:M.next=re,M=B;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,U=Me.lastBaseUpdate,U!==M&&(U===null?Me.firstBaseUpdate=re:U.next=re,Me.lastBaseUpdate=B))}if(g!==null){var Te=h.baseState;M=0,Me=re=B=null,U=g;do{var Ee=U.lane,ze=U.eventTime;if((u&Ee)===Ee){Me!==null&&(Me=Me.next={eventTime:ze,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var je=n,Ye=U;switch(Ee=r,ze=o,Ye.tag){case 1:if(je=Ye.payload,typeof je=="function"){Te=je.call(ze,Te,Ee);break e}Te=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ye.payload,Ee=typeof je=="function"?je.call(ze,Te,Ee):je,Ee==null)break e;Te=ie({},Te,Ee);break e;case 2:gr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,Ee=h.effects,Ee===null?h.effects=[U]:Ee.push(U))}else ze={eventTime:ze,lane:Ee,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Me===null?(re=Me=ze,B=Te):Me=Me.next=ze,M|=Ee;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;Ee=U,U=Ee.next,Ee.next=null,h.lastBaseUpdate=Ee,h.shared.pending=null}}while(!0);if(Me===null&&(B=Te),h.baseState=B,h.firstBaseUpdate=re,h.lastBaseUpdate=Me,r=h.shared.interleaved,r!==null){h=r;do M|=h.lane,h=h.next;while(h!==r)}else g===null&&(h.shared.lanes=0);Yr|=M,n.lanes=M,n.memoizedState=Te}}function vp(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Oa={},yi=hr(Oa),ka=hr(Oa),Ba=hr(Oa);function jr(n){if(n===Oa)throw Error(t(174));return n}function gc(n,r){switch(Ft(Ba,r),Ft(ka,n),Ft(yi,Oa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:xe(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=xe(r,n)}Bt(yi),Ft(yi,r)}function Us(){Bt(yi),Bt(ka),Bt(Ba)}function _p(n){jr(Ba.current);var r=jr(yi.current),o=xe(r,n.type);r!==o&&(Ft(ka,n),Ft(yi,o))}function vc(n){ka.current===n&&(Bt(yi),Bt(ka))}var Vt=hr(0);function rl(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var _c=[];function xc(){for(var n=0;n<_c.length;n++)_c[n]._workInProgressVersionPrimary=null;_c.length=0}var sl=C.ReactCurrentDispatcher,yc=C.ReactCurrentBatchConfig,$r=0,Gt=null,Qt=null,on=null,al=!1,za=!1,Ha=0,T0=0;function _n(){throw Error(t(321))}function Sc(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!ri(n[o],r[o]))return!1;return!0}function Ec(n,r,o,u,h,g){if($r=g,Gt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,sl.current=n===null||n.memoizedState===null?b0:P0,n=o(u,h),za){g=0;do{if(za=!1,Ha=0,25<=g)throw Error(t(301));g+=1,on=Qt=null,r.updateQueue=null,sl.current=L0,n=o(u,h)}while(za)}if(sl.current=ul,r=Qt!==null&&Qt.next!==null,$r=0,on=Qt=Gt=null,al=!1,r)throw Error(t(300));return n}function Mc(){var n=Ha!==0;return Ha=0,n}function Si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Gt.memoizedState=on=n:on=on.next=n,on}function qn(){if(Qt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var r=on===null?Gt.memoizedState:on.next;if(r!==null)on=r,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},on===null?Gt.memoizedState=on=n:on=on.next=n}return on}function Va(n,r){return typeof r=="function"?r(n):r}function wc(n){var r=qn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Qt,h=u.baseQueue,g=o.pending;if(g!==null){if(h!==null){var M=h.next;h.next=g.next,g.next=M}u.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,u=u.baseState;var U=M=null,B=null,re=g;do{var Me=re.lane;if(($r&Me)===Me)B!==null&&(B=B.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),u=re.hasEagerState?re.eagerState:n(u,re.action);else{var Te={lane:Me,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};B===null?(U=B=Te,M=u):B=B.next=Te,Gt.lanes|=Me,Yr|=Me}re=re.next}while(re!==null&&re!==g);B===null?M=u:B.next=U,ri(u,r.memoizedState)||(Nn=!0),r.memoizedState=u,r.baseState=M,r.baseQueue=B,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do g=h.lane,Gt.lanes|=g,Yr|=g,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Tc(n){var r=qn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,g=r.memoizedState;if(h!==null){o.pending=null;var M=h=h.next;do g=n(g,M.action),M=M.next;while(M!==h);ri(g,r.memoizedState)||(Nn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,u]}function xp(){}function yp(n,r){var o=Gt,u=qn(),h=r(),g=!ri(u.memoizedState,h);if(g&&(u.memoizedState=h,Nn=!0),u=u.queue,Rc(Mp.bind(null,o,u,n),[n]),u.getSnapshot!==r||g||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,Ga(9,Ep.bind(null,o,u,h,r),void 0,null),ln===null)throw Error(t(349));($r&30)!==0||Sp(o,r,h)}return h}function Sp(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Gt.updateQueue,r===null?(r={lastEffect:null,stores:null},Gt.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Ep(n,r,o,u){r.value=o,r.getSnapshot=u,wp(r)&&Tp(n)}function Mp(n,r,o){return o(function(){wp(r)&&Tp(n)})}function wp(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!ri(n,o)}catch{return!0}}function Tp(n){var r=ki(n,1);r!==null&&ui(r,n,1,-1)}function Rp(n){var r=Si();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:n},r.queue=n,n=n.dispatch=C0.bind(null,Gt,n),[r.memoizedState,n]}function Ga(n,r,o,u){return n={tag:n,create:r,destroy:o,deps:u,next:null},r=Gt.updateQueue,r===null?(r={lastEffect:null,stores:null},Gt.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n)),n}function Ap(){return qn().memoizedState}function ol(n,r,o,u){var h=Si();Gt.flags|=n,h.memoizedState=Ga(1|r,o,void 0,u===void 0?null:u)}function ll(n,r,o,u){var h=qn();u=u===void 0?null:u;var g=void 0;if(Qt!==null){var M=Qt.memoizedState;if(g=M.destroy,u!==null&&Sc(u,M.deps)){h.memoizedState=Ga(r,o,g,u);return}}Gt.flags|=n,h.memoizedState=Ga(1|r,o,g,u)}function Cp(n,r){return ol(8390656,8,n,r)}function Rc(n,r){return ll(2048,8,n,r)}function bp(n,r){return ll(4,2,n,r)}function Pp(n,r){return ll(4,4,n,r)}function Lp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Dp(n,r,o){return o=o!=null?o.concat([n]):null,ll(4,4,Lp.bind(null,r,n),o)}function Ac(){}function Up(n,r){var o=qn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Sc(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Np(n,r){var o=qn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Sc(r,u[1])?u[0]:(n=n(),o.memoizedState=[n,r],n)}function Ip(n,r,o){return($r&21)===0?(n.baseState&&(n.baseState=!1,Nn=!0),n.memoizedState=o):(ri(o,r)||(o=It(),Gt.lanes|=o,Yr|=o,n.baseState=!0),r)}function R0(n,r){var o=wt;wt=o!==0&&4>o?o:4,n(!0);var u=yc.transition;yc.transition={};try{n(!1),r()}finally{wt=o,yc.transition=u}}function Fp(){return qn().memoizedState}function A0(n,r,o){var u=Sr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Op(n))kp(r,o);else if(o=pp(n,r,o,u),o!==null){var h=Rn();ui(o,n,u,h),Bp(o,r,u)}}function C0(n,r,o){var u=Sr(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Op(n))kp(r,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var M=r.lastRenderedState,U=g(M,o);if(h.hasEagerState=!0,h.eagerState=U,ri(U,M)){var B=r.interleaved;B===null?(h.next=h,pc(r)):(h.next=B.next,B.next=h),r.interleaved=h;return}}catch{}o=pp(n,r,h,u),o!==null&&(h=Rn(),ui(o,n,u,h),Bp(o,r,u))}}function Op(n){var r=n.alternate;return n===Gt||r!==null&&r===Gt}function kp(n,r){za=al=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Bp(n,r,o){if((o&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,an(n,o)}}var ul={readContext:Yn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},b0={readContext:Yn,useCallback:function(n,r){return Si().memoizedState=[n,r===void 0?null:r],n},useContext:Yn,useEffect:Cp,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,ol(4194308,4,Lp.bind(null,r,n),o)},useLayoutEffect:function(n,r){return ol(4194308,4,n,r)},useInsertionEffect:function(n,r){return ol(4,2,n,r)},useMemo:function(n,r){var o=Si();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var u=Si();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=A0.bind(null,Gt,n),[u.memoizedState,n]},useRef:function(n){var r=Si();return n={current:n},r.memoizedState=n},useState:Rp,useDebugValue:Ac,useDeferredValue:function(n){return Si().memoizedState=n},useTransition:function(){var n=Rp(!1),r=n[0];return n=R0.bind(null,n[1]),Si().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var u=Gt,h=Si();if(Ht){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),ln===null)throw Error(t(349));($r&30)!==0||Sp(u,r,o)}h.memoizedState=o;var g={value:o,getSnapshot:r};return h.queue=g,Cp(Mp.bind(null,u,g,n),[n]),u.flags|=2048,Ga(9,Ep.bind(null,u,g,o,r),void 0,null),o},useId:function(){var n=Si(),r=ln.identifierPrefix;if(Ht){var o=Oi,u=Fi;o=(u&~(1<<32-gt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ha++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=T0++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},P0={readContext:Yn,useCallback:Up,useContext:Yn,useEffect:Rc,useImperativeHandle:Dp,useInsertionEffect:bp,useLayoutEffect:Pp,useMemo:Np,useReducer:wc,useRef:Ap,useState:function(){return wc(Va)},useDebugValue:Ac,useDeferredValue:function(n){var r=qn();return Ip(r,Qt.memoizedState,n)},useTransition:function(){var n=wc(Va)[0],r=qn().memoizedState;return[n,r]},useMutableSource:xp,useSyncExternalStore:yp,useId:Fp,unstable_isNewReconciler:!1},L0={readContext:Yn,useCallback:Up,useContext:Yn,useEffect:Rc,useImperativeHandle:Dp,useInsertionEffect:bp,useLayoutEffect:Pp,useMemo:Np,useReducer:Tc,useRef:Ap,useState:function(){return Tc(Va)},useDebugValue:Ac,useDeferredValue:function(n){var r=qn();return Qt===null?r.memoizedState=n:Ip(r,Qt.memoizedState,n)},useTransition:function(){var n=Tc(Va)[0],r=qn().memoizedState;return[n,r]},useMutableSource:xp,useSyncExternalStore:yp,useId:Fp,unstable_isNewReconciler:!1};function ai(n,r){if(n&&n.defaultProps){r=ie({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Cc(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:ie({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var cl={isMounted:function(n){return(n=n._reactInternals)?vi(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Rn(),h=Sr(n),g=Bi(u,h);g.payload=r,o!=null&&(g.callback=o),r=vr(n,g,h),r!==null&&(ui(r,n,h,u),nl(r,n,h))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Rn(),h=Sr(n),g=Bi(u,h);g.tag=1,g.payload=r,o!=null&&(g.callback=o),r=vr(n,g,h),r!==null&&(ui(r,n,h,u),nl(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Rn(),u=Sr(n),h=Bi(o,u);h.tag=2,r!=null&&(h.callback=r),r=vr(n,h,u),r!==null&&(ui(r,n,u,o),nl(r,n,u))}};function zp(n,r,o,u,h,g,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,M):r.prototype&&r.prototype.isPureReactComponent?!ba(o,u)||!ba(h,g):!0}function Hp(n,r,o){var u=!1,h=pr,g=r.contextType;return typeof g=="object"&&g!==null?g=Yn(g):(h=Un(r)?Vr:vn.current,u=r.contextTypes,g=(u=u!=null)?Rs(n,h):pr),r=new r(o,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=cl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),r}function Vp(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&cl.enqueueReplaceState(r,r.state,null)}function bc(n,r,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},mc(n);var g=r.contextType;typeof g=="object"&&g!==null?h.context=Yn(g):(g=Un(r)?Vr:vn.current,h.context=Rs(n,g)),h.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Cc(n,r,g,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&cl.enqueueReplaceState(h,h.state,null),il(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ns(n,r){try{var o="",u=r;do o+=me(u),u=u.return;while(u);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:h,digest:null}}function Pc(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Lc(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var D0=typeof WeakMap=="function"?WeakMap:Map;function Gp(n,r,o){o=Bi(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){vl||(vl=!0,jc=u),Lc(n,r)},o}function Wp(n,r,o){o=Bi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){Lc(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Lc(n,r),typeof u!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var M=r.stack;this.componentDidCatch(r.value,{componentStack:M!==null?M:""})}),o}function Xp(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new D0;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),n=j0.bind(null,n,r,o),r.then(n,n))}function jp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function $p(n,r,o,u,h){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Bi(-1,1),r.tag=2,vr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var U0=C.ReactCurrentOwner,Nn=!1;function Tn(n,r,o,u){r.child=n===null?hp(r,null,o,u):Ps(r,n.child,o,u)}function Yp(n,r,o,u,h){o=o.render;var g=r.ref;return Ds(r,h),u=Ec(n,r,o,u,g,h),o=Mc(),n!==null&&!Nn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,zi(n,r,h)):(Ht&&o&&sc(r),r.flags|=1,Tn(n,r,u,h),r.child)}function qp(n,r,o,u,h){if(n===null){var g=o.type;return typeof g=="function"&&!Qc(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=g,Kp(n,r,g,u,h)):(n=Ml(o.type,null,u,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&h)===0){var M=g.memoizedProps;if(o=o.compare,o=o!==null?o:ba,o(M,u)&&n.ref===r.ref)return zi(n,r,h)}return r.flags|=1,n=Mr(g,u),n.ref=r.ref,n.return=r,r.child=n}function Kp(n,r,o,u,h){if(n!==null){var g=n.memoizedProps;if(ba(g,u)&&n.ref===r.ref)if(Nn=!1,r.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Nn=!0);else return r.lanes=n.lanes,zi(n,r,h)}return Dc(n,r,o,u,h)}function Zp(n,r,o){var u=r.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Fs,Gn),Gn|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ft(Fs,Gn),Gn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,Ft(Fs,Gn),Gn|=u}else g!==null?(u=g.baseLanes|o,r.memoizedState=null):u=o,Ft(Fs,Gn),Gn|=u;return Tn(n,r,h,o),r.child}function Jp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Dc(n,r,o,u,h){var g=Un(o)?Vr:vn.current;return g=Rs(r,g),Ds(r,h),o=Ec(n,r,o,u,g,h),u=Mc(),n!==null&&!Nn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,zi(n,r,h)):(Ht&&u&&sc(r),r.flags|=1,Tn(n,r,o,h),r.child)}function Qp(n,r,o,u,h){if(Un(o)){var g=!0;Yo(r)}else g=!1;if(Ds(r,h),r.stateNode===null)dl(n,r),Hp(r,o,u),bc(r,o,u,h),u=!0;else if(n===null){var M=r.stateNode,U=r.memoizedProps;M.props=U;var B=M.context,re=o.contextType;typeof re=="object"&&re!==null?re=Yn(re):(re=Un(o)?Vr:vn.current,re=Rs(r,re));var Me=o.getDerivedStateFromProps,Te=typeof Me=="function"||typeof M.getSnapshotBeforeUpdate=="function";Te||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==u||B!==re)&&Vp(r,M,u,re),gr=!1;var Ee=r.memoizedState;M.state=Ee,il(r,u,M,h),B=r.memoizedState,U!==u||Ee!==B||Dn.current||gr?(typeof Me=="function"&&(Cc(r,o,Me,u),B=r.memoizedState),(U=gr||zp(r,o,U,u,Ee,B,re))?(Te||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(r.flags|=4194308)):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=B),M.props=u,M.state=B,M.context=re,u=U):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{M=r.stateNode,mp(n,r),U=r.memoizedProps,re=r.type===r.elementType?U:ai(r.type,U),M.props=re,Te=r.pendingProps,Ee=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=Yn(B):(B=Un(o)?Vr:vn.current,B=Rs(r,B));var ze=o.getDerivedStateFromProps;(Me=typeof ze=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==Te||Ee!==B)&&Vp(r,M,u,B),gr=!1,Ee=r.memoizedState,M.state=Ee,il(r,u,M,h);var je=r.memoizedState;U!==Te||Ee!==je||Dn.current||gr?(typeof ze=="function"&&(Cc(r,o,ze,u),je=r.memoizedState),(re=gr||zp(r,o,re,u,Ee,je,B)||!1)?(Me||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,je,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,je,B)),typeof M.componentDidUpdate=="function"&&(r.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=je),M.props=u,M.state=je,M.context=B,u=re):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=1024),u=!1)}return Uc(n,r,o,u,g,h)}function Uc(n,r,o,u,h,g){Jp(n,r);var M=(r.flags&128)!==0;if(!u&&!M)return h&&rp(r,o,!1),zi(n,r,g);u=r.stateNode,U0.current=r;var U=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&M?(r.child=Ps(r,n.child,null,g),r.child=Ps(r,null,U,g)):Tn(n,r,U,g),r.memoizedState=u.state,h&&rp(r,o,!0),r.child}function em(n){var r=n.stateNode;r.pendingContext?np(n,r.pendingContext,r.pendingContext!==r.context):r.context&&np(n,r.context,!1),gc(n,r.containerInfo)}function tm(n,r,o,u,h){return bs(),uc(h),r.flags|=256,Tn(n,r,o,u),r.child}var Nc={dehydrated:null,treeContext:null,retryLane:0};function Ic(n){return{baseLanes:n,cachePool:null,transitions:null}}function nm(n,r,o){var u=r.pendingProps,h=Vt.current,g=!1,M=(r.flags&128)!==0,U;if((U=M)||(U=n!==null&&n.memoizedState===null?!1:(h&2)!==0),U?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Ft(Vt,h&1),n===null)return lc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(M=u.children,n=u.fallback,g?(u=r.mode,g=r.child,M={mode:"hidden",children:M},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=M):g=wl(M,u,0,null),n=Jr(n,u,o,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=Ic(o),r.memoizedState=Nc,n):Fc(r,M));if(h=n.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return N0(n,r,M,u,U,h,o);if(g){g=u.fallback,M=r.mode,h=n.child,U=h.sibling;var B={mode:"hidden",children:u.children};return(M&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=B,r.deletions=null):(u=Mr(h,B),u.subtreeFlags=h.subtreeFlags&14680064),U!==null?g=Mr(U,g):(g=Jr(g,M,o,null),g.flags|=2),g.return=r,u.return=r,u.sibling=g,r.child=u,u=g,g=r.child,M=n.child.memoizedState,M=M===null?Ic(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},g.memoizedState=M,g.childLanes=n.childLanes&~o,r.memoizedState=Nc,u}return g=n.child,n=g.sibling,u=Mr(g,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=u,r.memoizedState=null,u}function Fc(n,r){return r=wl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function fl(n,r,o,u){return u!==null&&uc(u),Ps(r,n.child,null,o),n=Fc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function N0(n,r,o,u,h,g,M){if(o)return r.flags&256?(r.flags&=-257,u=Pc(Error(t(422))),fl(n,r,M,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=u.fallback,h=r.mode,u=wl({mode:"visible",children:u.children},h,0,null),g=Jr(g,h,M,null),g.flags|=2,u.return=r,g.return=r,u.sibling=g,r.child=u,(r.mode&1)!==0&&Ps(r,n.child,null,M),r.child.memoizedState=Ic(M),r.memoizedState=Nc,g);if((r.mode&1)===0)return fl(n,r,M,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var U=u.dgst;return u=U,g=Error(t(419)),u=Pc(g,u,void 0),fl(n,r,M,u)}if(U=(M&n.childLanes)!==0,Nn||U){if(u=ln,u!==null){switch(M&-M){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|M))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,ki(n,h),ui(u,n,h,-1))}return Jc(),u=Pc(Error(t(421))),fl(n,r,M,u)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=$0.bind(null,n),h._reactRetry=r,null):(n=g.treeContext,Vn=dr(h.nextSibling),Hn=r,Ht=!0,si=null,n!==null&&(jn[$n++]=Fi,jn[$n++]=Oi,jn[$n++]=Gr,Fi=n.id,Oi=n.overflow,Gr=r),r=Fc(r,u.children),r.flags|=4096,r)}function im(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),hc(n.return,r,o)}function Oc(n,r,o,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function rm(n,r,o){var u=r.pendingProps,h=u.revealOrder,g=u.tail;if(Tn(n,r,u.children,o),u=Vt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&im(n,o,r);else if(n.tag===19)im(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ft(Vt,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)n=o.alternate,n!==null&&rl(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),Oc(r,!1,h,o,g);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&rl(n)===null){r.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}Oc(r,!0,o,null,g);break;case"together":Oc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function dl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function zi(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Yr|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Mr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Mr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function I0(n,r,o){switch(r.tag){case 3:em(r),bs();break;case 5:_p(r);break;case 1:Un(r.type)&&Yo(r);break;case 4:gc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;Ft(el,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Ft(Vt,Vt.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?nm(n,r,o):(Ft(Vt,Vt.current&1),n=zi(n,r,o),n!==null?n.sibling:null);Ft(Vt,Vt.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(n.flags&128)!==0){if(u)return rm(n,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ft(Vt,Vt.current),u)break;return null;case 22:case 23:return r.lanes=0,Zp(n,r,o)}return zi(n,r,o)}var sm,kc,am,om;sm=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},kc=function(){},am=function(n,r,o,u){var h=n.memoizedProps;if(h!==u){n=r.stateNode,jr(yi.current);var g=null;switch(o){case"input":h=O(n,h),u=O(n,u),g=[];break;case"select":h=ie({},h,{value:void 0}),u=ie({},u,{value:void 0}),g=[];break;case"textarea":h=Ut(n,h),u=Ut(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Xo)}Qe(o,u);var M;o=null;for(re in h)if(!u.hasOwnProperty(re)&&h.hasOwnProperty(re)&&h[re]!=null)if(re==="style"){var U=h[re];for(M in U)U.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(a.hasOwnProperty(re)?g||(g=[]):(g=g||[]).push(re,null));for(re in u){var B=u[re];if(U=h?.[re],u.hasOwnProperty(re)&&B!==U&&(B!=null||U!=null))if(re==="style")if(U){for(M in U)!U.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&U[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(g||(g=[]),g.push(re,o)),o=B;else re==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(g=g||[]).push(re,B)):re==="children"?typeof B!="string"&&typeof B!="number"||(g=g||[]).push(re,""+B):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(a.hasOwnProperty(re)?(B!=null&&re==="onScroll"&&kt("scroll",n),g||U===B||(g=[])):(g=g||[]).push(re,B))}o&&(g=g||[]).push("style",o);var re=g;(r.updateQueue=re)&&(r.flags|=4)}},om=function(n,r,o,u){o!==u&&(r.flags|=4)};function Wa(n,r){if(!Ht)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function xn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function F0(n,r,o){var u=r.pendingProps;switch(ac(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(r),null;case 1:return Un(r.type)&&$o(),xn(r),null;case 3:return u=r.stateNode,Us(),Bt(Dn),Bt(vn),xc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Jo(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,si!==null&&(qc(si),si=null))),kc(n,r),xn(r),null;case 5:vc(r);var h=jr(Ba.current);if(o=r.type,n!==null&&r.stateNode!=null)am(n,r,o,u,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return xn(r),null}if(n=jr(yi.current),Jo(r)){u=r.stateNode,o=r.type;var g=r.memoizedProps;switch(u[xi]=r,u[Na]=g,n=(r.mode&1)!==0,o){case"dialog":kt("cancel",u),kt("close",u);break;case"iframe":case"object":case"embed":kt("load",u);break;case"video":case"audio":for(h=0;h<La.length;h++)kt(La[h],u);break;case"source":kt("error",u);break;case"img":case"image":case"link":kt("error",u),kt("load",u);break;case"details":kt("toggle",u);break;case"input":Xt(u,g),kt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},kt("invalid",u);break;case"textarea":D(u,g),kt("invalid",u)}Qe(o,g),h=null;for(var M in g)if(g.hasOwnProperty(M)){var U=g[M];M==="children"?typeof U=="string"?u.textContent!==U&&(g.suppressHydrationWarning!==!0&&Wo(u.textContent,U,n),h=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&Wo(u.textContent,U,n),h=["children",""+U]):a.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&kt("scroll",u)}switch(o){case"input":tt(u),We(u,g,!0);break;case"textarea":tt(u),ee(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Xo)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{M=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ge(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[xi]=r,n[Na]=u,sm(n,r,!1,!1),r.stateNode=n;e:{switch(M=Ue(o,u),o){case"dialog":kt("cancel",n),kt("close",n),h=u;break;case"iframe":case"object":case"embed":kt("load",n),h=u;break;case"video":case"audio":for(h=0;h<La.length;h++)kt(La[h],n);h=u;break;case"source":kt("error",n),h=u;break;case"img":case"image":case"link":kt("error",n),kt("load",n),h=u;break;case"details":kt("toggle",n),h=u;break;case"input":Xt(n,u),h=O(n,u),kt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=ie({},u,{value:void 0}),kt("invalid",n);break;case"textarea":D(n,u),h=Ut(n,u),kt("invalid",n);break;default:h=u}Qe(o,h),U=h;for(g in U)if(U.hasOwnProperty(g)){var B=U[g];g==="style"?Be(n,B):g==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ke(n,B)):g==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&Le(n,B):typeof B=="number"&&Le(n,""+B):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?B!=null&&g==="onScroll"&&kt("scroll",n):B!=null&&P(n,g,B,M))}switch(o){case"input":tt(n),We(n,u,!1);break;case"textarea":tt(n),ee(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ce(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?st(n,!!u.multiple,g,!1):u.defaultValue!=null&&st(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Xo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return xn(r),null;case 6:if(n&&r.stateNode!=null)om(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(o=jr(Ba.current),jr(yi.current),Jo(r)){if(u=r.stateNode,o=r.memoizedProps,u[xi]=r,(g=u.nodeValue!==o)&&(n=Hn,n!==null))switch(n.tag){case 3:Wo(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Wo(u.nodeValue,o,(n.mode&1)!==0)}g&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[xi]=r,r.stateNode=u}return xn(r),null;case 13:if(Bt(Vt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ht&&Vn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)cp(),bs(),r.flags|=98560,g=!1;else if(g=Jo(r),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[xi]=r}else bs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;xn(r),g=!1}else si!==null&&(qc(si),si=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Vt.current&1)!==0?en===0&&(en=3):Jc())),r.updateQueue!==null&&(r.flags|=4),xn(r),null);case 4:return Us(),kc(n,r),n===null&&Da(r.stateNode.containerInfo),xn(r),null;case 10:return dc(r.type._context),xn(r),null;case 17:return Un(r.type)&&$o(),xn(r),null;case 19:if(Bt(Vt),g=r.memoizedState,g===null)return xn(r),null;if(u=(r.flags&128)!==0,M=g.rendering,M===null)if(u)Wa(g,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(M=rl(n),M!==null){for(r.flags|=128,Wa(g,!1),u=M.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)g=o,n=u,g.flags&=14680066,M=g.alternate,M===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=M.childLanes,g.lanes=M.lanes,g.child=M.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=M.memoizedProps,g.memoizedState=M.memoizedState,g.updateQueue=M.updateQueue,g.type=M.type,n=M.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ft(Vt,Vt.current&1|2),r.child}n=n.sibling}g.tail!==null&&J()>Os&&(r.flags|=128,u=!0,Wa(g,!1),r.lanes=4194304)}else{if(!u)if(n=rl(M),n!==null){if(r.flags|=128,u=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Wa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!M.alternate&&!Ht)return xn(r),null}else 2*J()-g.renderingStartTime>Os&&o!==1073741824&&(r.flags|=128,u=!0,Wa(g,!1),r.lanes=4194304);g.isBackwards?(M.sibling=r.child,r.child=M):(o=g.last,o!==null?o.sibling=M:r.child=M,g.last=M)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=J(),r.sibling=null,o=Vt.current,Ft(Vt,u?o&1|2:o&1),r):(xn(r),null);case 22:case 23:return Zc(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Gn&1073741824)!==0&&(xn(r),r.subtreeFlags&6&&(r.flags|=8192)):xn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function O0(n,r){switch(ac(r),r.tag){case 1:return Un(r.type)&&$o(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Us(),Bt(Dn),Bt(vn),xc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return vc(r),null;case 13:if(Bt(Vt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));bs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Bt(Vt),null;case 4:return Us(),null;case 10:return dc(r.type._context),null;case 22:case 23:return Zc(),null;case 24:return null;default:return null}}var hl=!1,yn=!1,k0=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Is(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){jt(n,r,u)}else o.current=null}function Bc(n,r,o){try{o()}catch(u){jt(n,r,u)}}var lm=!1;function B0(n,r){if(Zu=Uo,n=zh(),Gu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var M=0,U=-1,B=-1,re=0,Me=0,Te=n,Ee=null;t:for(;;){for(var ze;Te!==o||h!==0&&Te.nodeType!==3||(U=M+h),Te!==g||u!==0&&Te.nodeType!==3||(B=M+u),Te.nodeType===3&&(M+=Te.nodeValue.length),(ze=Te.firstChild)!==null;)Ee=Te,Te=ze;for(;;){if(Te===n)break t;if(Ee===o&&++re===h&&(U=M),Ee===g&&++Me===u&&(B=M),(ze=Te.nextSibling)!==null)break;Te=Ee,Ee=Te.parentNode}Te=ze}o=U===-1||B===-1?null:{start:U,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ju={focusedElem:n,selectionRange:o},Uo=!1,Ge=r;Ge!==null;)if(r=Ge,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ge=n;else for(;Ge!==null;){r=Ge;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ye=je.memoizedProps,Kt=je.memoizedState,K=r.stateNode,W=K.getSnapshotBeforeUpdate(r.elementType===r.type?Ye:ai(r.type,Ye),Kt);K.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var te=r.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){jt(r,r.return,Ce)}if(n=r.sibling,n!==null){n.return=r.return,Ge=n;break}Ge=r.return}return je=lm,lm=!1,je}function Xa(n,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Bc(r,o,g)}h=h.next}while(h!==u)}}function pl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function zc(n){var r=n.ref;if(r!==null){var o=n.stateNode;n.tag,n=o,typeof r=="function"?r(n):r.current=n}}function um(n){var r=n.alternate;r!==null&&(n.alternate=null,um(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[xi],delete r[Na],delete r[nc],delete r[S0],delete r[E0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function cm(n){return n.tag===5||n.tag===3||n.tag===4}function fm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||cm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Hc(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Xo));else if(u!==4&&(n=n.child,n!==null))for(Hc(n,r,o),n=n.sibling;n!==null;)Hc(n,r,o),n=n.sibling}function Vc(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Vc(n,r,o),n=n.sibling;n!==null;)Vc(n,r,o),n=n.sibling}var dn=null,oi=!1;function _r(n,r,o){for(o=o.child;o!==null;)dm(n,r,o),o=o.sibling}function dm(n,r,o){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(ot,o)}catch{}switch(o.tag){case 5:yn||Is(o,r);case 6:var u=dn,h=oi;dn=null,_r(n,r,o),dn=u,oi=h,dn!==null&&(oi?(n=dn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):dn.removeChild(o.stateNode));break;case 18:dn!==null&&(oi?(n=dn,o=o.stateNode,n.nodeType===8?tc(n.parentNode,o):n.nodeType===1&&tc(n,o),Ma(n)):tc(dn,o.stateNode));break;case 4:u=dn,h=oi,dn=o.stateNode.containerInfo,oi=!0,_r(n,r,o),dn=u,oi=h;break;case 0:case 11:case 14:case 15:if(!yn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,M=g.destroy;g=g.tag,M!==void 0&&((g&2)!==0||(g&4)!==0)&&Bc(o,r,M),h=h.next}while(h!==u)}_r(n,r,o);break;case 1:if(!yn&&(Is(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(U){jt(o,r,U)}_r(n,r,o);break;case 21:_r(n,r,o);break;case 22:o.mode&1?(yn=(u=yn)||o.memoizedState!==null,_r(n,r,o),yn=u):_r(n,r,o);break;default:_r(n,r,o)}}function hm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new k0),r.forEach(function(u){var h=Y0.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function li(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var g=n,M=r,U=M;e:for(;U!==null;){switch(U.tag){case 5:dn=U.stateNode,oi=!1;break e;case 3:dn=U.stateNode.containerInfo,oi=!0;break e;case 4:dn=U.stateNode.containerInfo,oi=!0;break e}U=U.return}if(dn===null)throw Error(t(160));dm(g,M,h),dn=null,oi=!1;var B=h.alternate;B!==null&&(B.return=null),h.return=null}catch(re){jt(h,r,re)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)pm(r,n),r=r.sibling}function pm(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(li(r,n),Ei(n),u&4){try{Xa(3,n,n.return),pl(3,n)}catch(Ye){jt(n,n.return,Ye)}try{Xa(5,n,n.return)}catch(Ye){jt(n,n.return,Ye)}}break;case 1:li(r,n),Ei(n),u&512&&o!==null&&Is(o,o.return);break;case 5:if(li(r,n),Ei(n),u&512&&o!==null&&Is(o,o.return),n.flags&32){var h=n.stateNode;try{Le(h,"")}catch(Ye){jt(n,n.return,Ye)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,M=o!==null?o.memoizedProps:g,U=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&_t(h,g),Ue(U,M);var re=Ue(U,g);for(M=0;M<B.length;M+=2){var Me=B[M],Te=B[M+1];Me==="style"?Be(h,Te):Me==="dangerouslySetInnerHTML"?Ke(h,Te):Me==="children"?Le(h,Te):P(h,Me,Te,re)}switch(U){case"input":Mt(h,g);break;case"textarea":T(h,g);break;case"select":var Ee=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var ze=g.value;ze!=null?st(h,!!g.multiple,ze,!1):Ee!==!!g.multiple&&(g.defaultValue!=null?st(h,!!g.multiple,g.defaultValue,!0):st(h,!!g.multiple,g.multiple?[]:"",!1))}h[Na]=g}catch(Ye){jt(n,n.return,Ye)}}break;case 6:if(li(r,n),Ei(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Ye){jt(n,n.return,Ye)}}break;case 3:if(li(r,n),Ei(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ma(r.containerInfo)}catch(Ye){jt(n,n.return,Ye)}break;case 4:li(r,n),Ei(n);break;case 13:li(r,n),Ei(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Xc=J())),u&4&&hm(n);break;case 22:if(Me=o!==null&&o.memoizedState!==null,n.mode&1?(yn=(re=yn)||Me,li(r,n),yn=re):li(r,n),Ei(n),u&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!Me&&(n.mode&1)!==0)for(Ge=n,Me=n.child;Me!==null;){for(Te=Ge=Me;Ge!==null;){switch(Ee=Ge,ze=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Xa(4,Ee,Ee.return);break;case 1:Is(Ee,Ee.return);var je=Ee.stateNode;if(typeof je.componentWillUnmount=="function"){u=Ee,o=Ee.return;try{r=u,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch(Ye){jt(u,o,Ye)}}break;case 5:Is(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){vm(Te);continue}}ze!==null?(ze.return=Ee,Ge=ze):vm(Te)}Me=Me.sibling}e:for(Me=null,Te=n;;){if(Te.tag===5){if(Me===null){Me=Te;try{h=Te.stateNode,re?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=Te.stateNode,B=Te.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=ye("display",M))}catch(Ye){jt(n,n.return,Ye)}}}else if(Te.tag===6){if(Me===null)try{Te.stateNode.nodeValue=re?"":Te.memoizedProps}catch(Ye){jt(n,n.return,Ye)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;Me===Te&&(Me=null),Te=Te.return}Me===Te&&(Me=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:li(r,n),Ei(n),u&4&&hm(n);break;case 21:break;default:li(r,n),Ei(n)}}function Ei(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(cm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Le(h,""),u.flags&=-33);var g=fm(n);Vc(n,g,h);break;case 3:case 4:var M=u.stateNode.containerInfo,U=fm(n);Hc(n,U,M);break;default:throw Error(t(161))}}catch(B){jt(n,n.return,B)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function z0(n,r,o){Ge=n,mm(n)}function mm(n,r,o){for(var u=(n.mode&1)!==0;Ge!==null;){var h=Ge,g=h.child;if(h.tag===22&&u){var M=h.memoizedState!==null||hl;if(!M){var U=h.alternate,B=U!==null&&U.memoizedState!==null||yn;U=hl;var re=yn;if(hl=M,(yn=B)&&!re)for(Ge=h;Ge!==null;)M=Ge,B=M.child,M.tag===22&&M.memoizedState!==null?_m(h):B!==null?(B.return=M,Ge=B):_m(h);for(;g!==null;)Ge=g,mm(g),g=g.sibling;Ge=h,hl=U,yn=re}gm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ge=g):gm(n)}}function gm(n){for(;Ge!==null;){var r=Ge;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:yn||pl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!yn)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:ai(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&vp(r,g,u);break;case 3:var M=r.updateQueue;if(M!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}vp(r,M,o)}break;case 5:var U=r.stateNode;if(o===null&&r.flags&4){o=U;var B=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var re=r.alternate;if(re!==null){var Me=re.memoizedState;if(Me!==null){var Te=Me.dehydrated;Te!==null&&Ma(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||r.flags&512&&zc(r)}catch(Ee){jt(r,r.return,Ee)}}if(r===n){Ge=null;break}if(o=r.sibling,o!==null){o.return=r.return,Ge=o;break}Ge=r.return}}function vm(n){for(;Ge!==null;){var r=Ge;if(r===n){Ge=null;break}var o=r.sibling;if(o!==null){o.return=r.return,Ge=o;break}Ge=r.return}}function _m(n){for(;Ge!==null;){var r=Ge;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{pl(4,r)}catch(B){jt(r,o,B)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(B){jt(r,h,B)}}var g=r.return;try{zc(r)}catch(B){jt(r,g,B)}break;case 5:var M=r.return;try{zc(r)}catch(B){jt(r,M,B)}}}catch(B){jt(r,r.return,B)}if(r===n){Ge=null;break}var U=r.sibling;if(U!==null){U.return=r.return,Ge=U;break}Ge=r.return}}var H0=Math.ceil,ml=C.ReactCurrentDispatcher,Gc=C.ReactCurrentOwner,Kn=C.ReactCurrentBatchConfig,Tt=0,ln=null,Zt=null,hn=0,Gn=0,Fs=hr(0),en=0,ja=null,Yr=0,gl=0,Wc=0,$a=null,In=null,Xc=0,Os=1/0,Hi=null,vl=!1,jc=null,xr=null,_l=!1,yr=null,xl=0,Ya=0,$c=null,yl=-1,Sl=0;function Rn(){return(Tt&6)!==0?J():yl!==-1?yl:yl=J()}function Sr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&hn!==0?hn&-hn:w0.transition!==null?(Sl===0&&(Sl=It()),Sl):(n=wt,n!==0||(n=window.event,n=n===void 0?16:yh(n.type)),n)}function ui(n,r,o,u){if(50<Ya)throw Ya=0,$c=null,Error(t(185));sn(n,o,u),((Tt&2)===0||n!==ln)&&(n===ln&&((Tt&2)===0&&(gl|=o),en===4&&Er(n,hn)),Fn(n,u),o===1&&Tt===0&&(r.mode&1)===0&&(Os=J()+500,qo&&mr()))}function Fn(n,r){var o=n.callbackNode;wn(n,r);var u=rn(n,n===ln?hn:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(o!=null&&A(o),r===1)n.tag===0?M0(ym.bind(null,n)):sp(ym.bind(null,n)),x0(function(){(Tt&6)===0&&mr()}),o=null;else{switch(_i(u)){case 1:o=Re;break;case 4:o=Fe;break;case 16:o=Ve;break;case 536870912:o=lt;break;default:o=Ve}o=Cm(o,xm.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function xm(n,r){if(yl=-1,Sl=0,(Tt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ks()&&n.callbackNode!==o)return null;var u=rn(n,n===ln?hn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=El(n,u);else{r=u;var h=Tt;Tt|=2;var g=Em();(ln!==n||hn!==r)&&(Hi=null,Os=J()+500,Kr(n,r));do try{W0();break}catch(U){Sm(n,U)}while(!0);fc(),ml.current=g,Tt=h,Zt!==null?r=0:(ln=null,hn=0,r=en)}if(r!==0){if(r===2&&(h=Ui(n),h!==0&&(u=h,r=Yc(n,h))),r===1)throw o=ja,Kr(n,0),Er(n,u),Fn(n,J()),o;if(r===6)Er(n,u);else{if(h=n.current.alternate,(u&30)===0&&!V0(h)&&(r=El(n,u),r===2&&(g=Ui(n),g!==0&&(u=g,r=Yc(n,g))),r===1))throw o=ja,Kr(n,0),Er(n,u),Fn(n,J()),o;switch(n.finishedWork=h,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Zr(n,In,Hi);break;case 3:if(Er(n,u),(u&130023424)===u&&(r=Xc+500-J(),10<r)){if(rn(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Rn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=ec(Zr.bind(null,n,In,Hi),r);break}Zr(n,In,Hi);break;case 4:if(Er(n,u),(u&4194240)===u)break;for(r=n.eventTimes,h=-1;0<u;){var M=31-gt(u);g=1<<M,M=r[M],M>h&&(h=M),u&=~g}if(u=h,u=J()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*H0(u/1960))-u,10<u){n.timeoutHandle=ec(Zr.bind(null,n,In,Hi),u);break}Zr(n,In,Hi);break;case 5:Zr(n,In,Hi);break;default:throw Error(t(329))}}}return Fn(n,J()),n.callbackNode===o?xm.bind(null,n):null}function Yc(n,r){var o=$a;return n.current.memoizedState.isDehydrated&&(Kr(n,r).flags|=256),n=El(n,r),n!==2&&(r=In,In=o,r!==null&&qc(r)),n}function qc(n){In===null?In=n:In.push.apply(In,n)}function V0(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!ri(g(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Er(n,r){for(r&=~Wc,r&=~gl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-gt(r),u=1<<o;n[o]=-1,r&=~u}}function ym(n){if((Tt&6)!==0)throw Error(t(327));ks();var r=rn(n,0);if((r&1)===0)return Fn(n,J()),null;var o=El(n,r);if(n.tag!==0&&o===2){var u=Ui(n);u!==0&&(r=u,o=Yc(n,u))}if(o===1)throw o=ja,Kr(n,0),Er(n,r),Fn(n,J()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Zr(n,In,Hi),Fn(n,J()),null}function Kc(n,r){var o=Tt;Tt|=1;try{return n(r)}finally{Tt=o,Tt===0&&(Os=J()+500,qo&&mr())}}function qr(n){yr!==null&&yr.tag===0&&(Tt&6)===0&&ks();var r=Tt;Tt|=1;var o=Kn.transition,u=wt;try{if(Kn.transition=null,wt=1,n)return n()}finally{wt=u,Kn.transition=o,Tt=r,(Tt&6)===0&&mr()}}function Zc(){Gn=Fs.current,Bt(Fs)}function Kr(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,_0(o)),Zt!==null)for(o=Zt.return;o!==null;){var u=o;switch(ac(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&$o();break;case 3:Us(),Bt(Dn),Bt(vn),xc();break;case 5:vc(u);break;case 4:Us();break;case 13:Bt(Vt);break;case 19:Bt(Vt);break;case 10:dc(u.type._context);break;case 22:case 23:Zc()}o=o.return}if(ln=n,Zt=n=Mr(n.current,null),hn=Gn=r,en=0,ja=null,Wc=gl=Yr=0,In=$a=null,Xr!==null){for(r=0;r<Xr.length;r++)if(o=Xr[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,g=o.pending;if(g!==null){var M=g.next;g.next=h,u.next=M}o.pending=u}Xr=null}return n}function Sm(n,r){do{var o=Zt;try{if(fc(),sl.current=ul,al){for(var u=Gt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}al=!1}if($r=0,on=Qt=Gt=null,za=!1,Ha=0,Gc.current=null,o===null||o.return===null){en=1,ja=r,Zt=null;break}e:{var g=n,M=o.return,U=o,B=r;if(r=hn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var re=B,Me=U,Te=Me.tag;if((Me.mode&1)===0&&(Te===0||Te===11||Te===15)){var Ee=Me.alternate;Ee?(Me.updateQueue=Ee.updateQueue,Me.memoizedState=Ee.memoizedState,Me.lanes=Ee.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var ze=jp(M);if(ze!==null){ze.flags&=-257,$p(ze,M,U,g,r),ze.mode&1&&Xp(g,re,r),r=ze,B=re;var je=r.updateQueue;if(je===null){var Ye=new Set;Ye.add(B),r.updateQueue=Ye}else je.add(B);break e}else{if((r&1)===0){Xp(g,re,r),Jc();break e}B=Error(t(426))}}else if(Ht&&U.mode&1){var Kt=jp(M);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),$p(Kt,M,U,g,r),uc(Ns(B,U));break e}}g=B=Ns(B,U),en!==4&&(en=2),$a===null?$a=[g]:$a.push(g),g=M;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var K=Gp(g,B,r);gp(g,K);break e;case 1:U=B;var W=g.type,te=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(xr===null||!xr.has(te)))){g.flags|=65536,r&=-r,g.lanes|=r;var Ce=Wp(g,U,r);gp(g,Ce);break e}}g=g.return}while(g!==null)}wm(o)}catch(Je){r=Je,Zt===o&&o!==null&&(Zt=o=o.return);continue}break}while(!0)}function Em(){var n=ml.current;return ml.current=ul,n===null?ul:n}function Jc(){(en===0||en===3||en===2)&&(en=4),ln===null||(Yr&268435455)===0&&(gl&268435455)===0||Er(ln,hn)}function El(n,r){var o=Tt;Tt|=2;var u=Em();(ln!==n||hn!==r)&&(Hi=null,Kr(n,r));do try{G0();break}catch(h){Sm(n,h)}while(!0);if(fc(),Tt=o,ml.current=u,Zt!==null)throw Error(t(261));return ln=null,hn=0,en}function G0(){for(;Zt!==null;)Mm(Zt)}function W0(){for(;Zt!==null&&!Y();)Mm(Zt)}function Mm(n){var r=Am(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,r===null?wm(n):Zt=r,Gc.current=null}function wm(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=F0(o,r,Gn),o!==null){Zt=o;return}}else{if(o=O0(o,r),o!==null){o.flags&=32767,Zt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,Zt=null;return}}if(r=r.sibling,r!==null){Zt=r;return}Zt=r=n}while(r!==null);en===0&&(en=5)}function Zr(n,r,o){var u=wt,h=Kn.transition;try{Kn.transition=null,wt=1,X0(n,r,o,u)}finally{Kn.transition=h,wt=u}return null}function X0(n,r,o,u){do ks();while(yr!==null);if((Tt&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(fn(n,g),n===ln&&(Zt=ln=null,hn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||_l||(_l=!0,Cm(Ve,function(){return ks(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Kn.transition,Kn.transition=null;var M=wt;wt=1;var U=Tt;Tt|=4,Gc.current=null,B0(n,o),pm(o,n),f0(Ju),Uo=!!Zu,Ju=Zu=null,n.current=o,z0(o),oe(),Tt=U,wt=M,Kn.transition=g}else n.current=o;if(_l&&(_l=!1,yr=n,xl=h),g=n.pendingLanes,g===0&&(xr=null),xt(o.stateNode),Fn(n,J()),r!==null)for(u=n.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(vl)throw vl=!1,n=jc,jc=null,n;return(xl&1)!==0&&n.tag!==0&&ks(),g=n.pendingLanes,(g&1)!==0?n===$c?Ya++:(Ya=0,$c=n):Ya=0,mr(),null}function ks(){if(yr!==null){var n=_i(xl),r=Kn.transition,o=wt;try{if(Kn.transition=null,wt=16>n?16:n,yr===null)var u=!1;else{if(n=yr,yr=null,xl=0,(Tt&6)!==0)throw Error(t(331));var h=Tt;for(Tt|=4,Ge=n.current;Ge!==null;){var g=Ge,M=g.child;if((Ge.flags&16)!==0){var U=g.deletions;if(U!==null){for(var B=0;B<U.length;B++){var re=U[B];for(Ge=re;Ge!==null;){var Me=Ge;switch(Me.tag){case 0:case 11:case 15:Xa(8,Me,g)}var Te=Me.child;if(Te!==null)Te.return=Me,Ge=Te;else for(;Ge!==null;){Me=Ge;var Ee=Me.sibling,ze=Me.return;if(um(Me),Me===re){Ge=null;break}if(Ee!==null){Ee.return=ze,Ge=Ee;break}Ge=ze}}}var je=g.alternate;if(je!==null){var Ye=je.child;if(Ye!==null){je.child=null;do{var Kt=Ye.sibling;Ye.sibling=null,Ye=Kt}while(Ye!==null)}}Ge=g}}if((g.subtreeFlags&2064)!==0&&M!==null)M.return=g,Ge=M;else e:for(;Ge!==null;){if(g=Ge,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Xa(9,g,g.return)}var K=g.sibling;if(K!==null){K.return=g.return,Ge=K;break e}Ge=g.return}}var W=n.current;for(Ge=W;Ge!==null;){M=Ge;var te=M.child;if((M.subtreeFlags&2064)!==0&&te!==null)te.return=M,Ge=te;else e:for(M=W;Ge!==null;){if(U=Ge,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:pl(9,U)}}catch(Je){jt(U,U.return,Je)}if(U===M){Ge=null;break e}var Ce=U.sibling;if(Ce!==null){Ce.return=U.return,Ge=Ce;break e}Ge=U.return}}if(Tt=h,mr(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(ot,n)}catch{}u=!0}return u}finally{wt=o,Kn.transition=r}}return!1}function Tm(n,r,o){r=Ns(o,r),r=Gp(n,r,1),n=vr(n,r,1),r=Rn(),n!==null&&(sn(n,1,r),Fn(n,r))}function jt(n,r,o){if(n.tag===3)Tm(n,n,o);else for(;r!==null;){if(r.tag===3){Tm(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(xr===null||!xr.has(u))){n=Ns(o,n),n=Wp(r,n,1),r=vr(r,n,1),n=Rn(),r!==null&&(sn(r,1,n),Fn(r,n));break}}r=r.return}}function j0(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),r=Rn(),n.pingedLanes|=n.suspendedLanes&o,ln===n&&(hn&o)===o&&(en===4||en===3&&(hn&130023424)===hn&&500>J()-Xc?Kr(n,0):Wc|=o),Fn(n,r)}function Rm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Lt,Lt<<=1,(Lt&130023424)===0&&(Lt=4194304)));var o=Rn();n=ki(n,r),n!==null&&(sn(n,r,o),Fn(n,o))}function $0(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Rm(n,o)}function Y0(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Rm(n,o)}var Am;Am=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Dn.current)Nn=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Nn=!1,I0(n,r,o);Nn=(n.flags&131072)!==0}else Nn=!1,Ht&&(r.flags&1048576)!==0&&ap(r,Zo,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;dl(n,r),n=r.pendingProps;var h=Rs(r,vn.current);Ds(r,o),h=Ec(null,r,u,n,h,o);var g=Mc();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Un(u)?(g=!0,Yo(r)):g=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,mc(r),h.updater=cl,r.stateNode=h,h._reactInternals=r,bc(r,u,n,o),r=Uc(null,r,u,!0,g,o)):(r.tag=0,Ht&&g&&sc(r),Tn(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(dl(n,r),n=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=K0(u),n=ai(u,n),h){case 0:r=Dc(null,r,u,n,o);break e;case 1:r=Qp(null,r,u,n,o);break e;case 11:r=Yp(null,r,u,n,o);break e;case 14:r=qp(null,r,u,ai(u.type,n),o);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ai(u,h),Dc(n,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ai(u,h),Qp(n,r,u,h,o);case 3:e:{if(em(r),n===null)throw Error(t(387));u=r.pendingProps,g=r.memoizedState,h=g.element,mp(n,r),il(r,u,null,o);var M=r.memoizedState;if(u=M.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){h=Ns(Error(t(423)),r),r=tm(n,r,u,o,h);break e}else if(u!==h){h=Ns(Error(t(424)),r),r=tm(n,r,u,o,h);break e}else for(Vn=dr(r.stateNode.containerInfo.firstChild),Hn=r,Ht=!0,si=null,o=hp(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(bs(),u===h){r=zi(n,r,o);break e}Tn(n,r,u,o)}r=r.child}return r;case 5:return _p(r),n===null&&lc(r),u=r.type,h=r.pendingProps,g=n!==null?n.memoizedProps:null,M=h.children,Qu(u,h)?M=null:g!==null&&Qu(u,g)&&(r.flags|=32),Jp(n,r),Tn(n,r,M,o),r.child;case 6:return n===null&&lc(r),null;case 13:return nm(n,r,o);case 4:return gc(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Ps(r,null,u,o):Tn(n,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ai(u,h),Yp(n,r,u,h,o);case 7:return Tn(n,r,r.pendingProps,o),r.child;case 8:return Tn(n,r,r.pendingProps.children,o),r.child;case 12:return Tn(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,g=r.memoizedProps,M=h.value,Ft(el,u._currentValue),u._currentValue=M,g!==null)if(ri(g.value,M)){if(g.children===h.children&&!Dn.current){r=zi(n,r,o);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var U=g.dependencies;if(U!==null){M=g.child;for(var B=U.firstContext;B!==null;){if(B.context===u){if(g.tag===1){B=Bi(-1,o&-o),B.tag=2;var re=g.updateQueue;if(re!==null){re=re.shared;var Me=re.pending;Me===null?B.next=B:(B.next=Me.next,Me.next=B),re.pending=B}}g.lanes|=o,B=g.alternate,B!==null&&(B.lanes|=o),hc(g.return,o,r),U.lanes|=o;break}B=B.next}}else if(g.tag===10)M=g.type===r.type?null:g.child;else if(g.tag===18){if(M=g.return,M===null)throw Error(t(341));M.lanes|=o,U=M.alternate,U!==null&&(U.lanes|=o),hc(M,o,r),M=g.sibling}else M=g.child;if(M!==null)M.return=g;else for(M=g;M!==null;){if(M===r){M=null;break}if(g=M.sibling,g!==null){g.return=M.return,M=g;break}M=M.return}g=M}Tn(n,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Ds(r,o),h=Yn(h),u=u(h),r.flags|=1,Tn(n,r,u,o),r.child;case 14:return u=r.type,h=ai(u,r.pendingProps),h=ai(u.type,h),qp(n,r,u,h,o);case 15:return Kp(n,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ai(u,h),dl(n,r),r.tag=1,Un(u)?(n=!0,Yo(r)):n=!1,Ds(r,o),Hp(r,u,h),bc(r,u,h,o),Uc(null,r,u,!0,n,o);case 19:return rm(n,r,o);case 22:return Zp(n,r,o)}throw Error(t(156,r.tag))};function Cm(n,r){return Po(n,r)}function q0(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,r,o,u){return new q0(n,r,o,u)}function Qc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function K0(n){if(typeof n=="function")return Qc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===se)return 11;if(n===pe)return 14}return 2}function Mr(n,r){var o=n.alternate;return o===null?(o=Zn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ml(n,r,o,u,h,g){var M=2;if(u=n,typeof n=="function")Qc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case F:return Jr(o.children,h,g,r);case X:M=8,h|=8;break;case b:return n=Zn(12,o,r,h|2),n.elementType=b,n.lanes=g,n;case Q:return n=Zn(13,o,r,h),n.elementType=Q,n.lanes=g,n;case le:return n=Zn(19,o,r,h),n.elementType=le,n.lanes=g,n;case ve:return wl(o,h,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:M=10;break e;case H:M=9;break e;case se:M=11;break e;case pe:M=14;break e;case ue:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Zn(M,o,r,h),r.elementType=n,r.type=u,r.lanes=g,r}function Jr(n,r,o,u){return n=Zn(7,n,u,r),n.lanes=o,n}function wl(n,r,o,u){return n=Zn(22,n,u,r),n.elementType=ve,n.lanes=o,n.stateNode={isHidden:!1},n}function ef(n,r,o){return n=Zn(6,n,null,r),n.lanes=o,n}function tf(n,r,o){return r=Zn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Z0(n,r,o,u,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gn(0),this.expirationTimes=gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function nf(n,r,o,u,h,g,M,U,B){return n=new Z0(n,r,o,U,B),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Zn(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},mc(g),n}function J0(n,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:n,containerInfo:r,implementation:o}}function bm(n){if(!n)return pr;n=n._reactInternals;e:{if(vi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Un(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Un(o))return ip(n,o,r)}return r}function Pm(n,r,o,u,h,g,M,U,B){return n=nf(o,u,!0,n,h,g,M,U,B),n.context=bm(null),o=n.current,u=Rn(),h=Sr(o),g=Bi(u,h),g.callback=r??null,vr(o,g,h),n.current.lanes=h,sn(n,h,u),Fn(n,u),n}function Tl(n,r,o,u){var h=r.current,g=Rn(),M=Sr(h);return o=bm(o),r.context===null?r.context=o:r.pendingContext=o,r=Bi(g,M),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=vr(h,r,M),n!==null&&(ui(n,h,M,g),nl(n,h,M)),M}function Rl(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function Lm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function rf(n,r){Lm(n,r),(n=n.alternate)&&Lm(n,r)}function Q0(){return null}var Dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function sf(n){this._internalRoot=n}Al.prototype.render=sf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Tl(n,r,null,null)},Al.prototype.unmount=sf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;qr(function(){Tl(null,n,null,null)}),r[Ni]=null}};function Al(n){this._internalRoot=n}Al.prototype.unstable_scheduleHydration=function(n){if(n){var r=mh();n={blockedOn:null,target:n,priority:r};for(var o=0;o<ur.length&&r!==0&&r<ur[o].priority;o++);ur.splice(o,0,n),o===0&&_h(n)}};function af(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Um(){}function ex(n,r,o,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var re=Rl(M);g.call(re)}}var M=Pm(r,u,n,0,null,!1,!1,"",Um);return n._reactRootContainer=M,n[Ni]=M.current,Da(n.nodeType===8?n.parentNode:n),qr(),M}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var U=u;u=function(){var re=Rl(B);U.call(re)}}var B=nf(n,0,!1,null,null,!1,!1,"",Um);return n._reactRootContainer=B,n[Ni]=B.current,Da(n.nodeType===8?n.parentNode:n),qr(function(){Tl(r,B,o,u)}),B}function bl(n,r,o,u,h){var g=o._reactRootContainer;if(g){var M=g;if(typeof h=="function"){var U=h;h=function(){var B=Rl(M);U.call(B)}}Tl(r,M,n,h)}else M=ex(o,r,n,h,u);return Rl(M)}hh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=yt(r.pendingLanes);o!==0&&(an(r,o|1),Fn(r,J()),(Tt&6)===0&&(Os=J()+500,mr()))}break;case 13:qr(function(){var u=ki(n,1);if(u!==null){var h=Rn();ui(u,n,1,h)}}),rf(n,1)}},Pu=function(n){if(n.tag===13){var r=ki(n,134217728);if(r!==null){var o=Rn();ui(r,n,134217728,o)}rf(n,134217728)}},ph=function(n){if(n.tag===13){var r=Sr(n),o=ki(n,r);if(o!==null){var u=Rn();ui(o,n,r,u)}rf(n,r)}},mh=function(){return wt},gh=function(n,r){var o=wt;try{return wt=n,r()}finally{wt=o}},Ne=function(n,r,o){switch(r){case"input":if(Mt(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var h=jo(u);if(!h)throw Error(t(90));pt(u),Mt(u,h)}}}break;case"textarea":T(n,o);break;case"select":r=o.value,r!=null&&st(n,!!o.multiple,r,!1)}},$e=Kc,ct=qr;var tx={usingClientEntryPoint:!1,Events:[Ia,ws,jo,_e,Ae,Kc]},qa={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nx={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Co(n),n===null?null:n.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||Q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{ot=Pl.inject(nx),Xe=Pl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tx,On.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!af(r))throw Error(t(200));return J0(n,r,null,o)},On.createRoot=function(n,r){if(!af(n))throw Error(t(299));var o=!1,u="",h=Dm;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=nf(n,1,!1,null,null,o,!1,u,h),n[Ni]=r.current,Da(n.nodeType===8?n.parentNode:n),new sf(r)},On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Co(r),n=n===null?null:n.stateNode,n},On.flushSync=function(n){return qr(n)},On.hydrate=function(n,r,o){if(!Cl(r))throw Error(t(200));return bl(null,n,r,!0,o)},On.hydrateRoot=function(n,r,o){if(!af(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,g="",M=Dm;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),r=Pm(r,null,n,1,o??null,h,!1,g,M),n[Ni]=r.current,Da(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new Al(r)},On.render=function(n,r,o){if(!Cl(r))throw Error(t(200));return bl(null,n,r,!1,o)},On.unmountComponentAtNode=function(n){if(!Cl(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){bl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},On.unstable_batchedUpdates=Kc,On.unstable_renderSubtreeIntoContainer=function(n,r,o,u){if(!Cl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return bl(n,r,o,!1,u)},On.version="18.3.1-next-f1338f8080-20240426",On}var Hm;function cx(){if(Hm)return uf.exports;Hm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),uf.exports=ux(),uf.exports}var Vm;function fx(){if(Vm)return Ll;Vm=1;var i=cx();return Ll.createRoot=i.createRoot,Ll.hydrateRoot=i.hydrateRoot,Ll}var dx=fx();const hx=dv(dx);var Vd=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,pv=/^[\\/]{2}/;function px(i,e){return e+i.replace(/\\/g,"/")}var Gm="popstate";function Wm(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function mx(i={}){function e(s,a){let l=a.state?.masked,{pathname:c,search:f,hash:d}=l||s.location;return Kf("",{pathname:c,search:f,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default",l?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function t(s,a){return typeof a=="string"?a:oo(a)}return vx(e,t,null,i)}function Wt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function bi(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gx(){return Math.random().toString(36).substring(2,10)}function Xm(i,e){return{usr:i.state,key:i.key,idx:e,masked:i.mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function Kf(i,e,t=null,s,a){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?da(e):e,state:t,key:e&&e.key||s||gx(),mask:a}}function oo({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function da(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function vx(i,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,f="POP",d=null,p=m();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function m(){return(c.state||{idx:null}).idx}function v(){f="POP";let y=m(),x=y==null?null:y-p;p=y,d&&d({action:f,location:w.location,delta:x})}function _(y,x){f="PUSH";let L=Wm(y)?y:Kf(w.location,y,x);p=m()+1;let P=Xm(L,p),C=w.createHref(L.mask||L);try{c.pushState(P,"",C)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(C)}l&&d&&d({action:f,location:w.location,delta:1})}function S(y,x){f="REPLACE";let L=Wm(y)?y:Kf(w.location,y,x);p=m();let P=Xm(L,p),C=w.createHref(L.mask||L);c.replaceState(P,"",C),l&&d&&d({action:f,location:w.location,delta:0})}function E(y){return _x(a,y)}let w={get action(){return f},get location(){return i(a,c)},listen(y){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(Gm,v),d=y,()=>{a.removeEventListener(Gm,v),d=null}},createHref(y){return e(a,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:S,go(y){return c.go(y)}};return w}function _x(i,e,t=!1){let s="http://localhost";i&&(s=i.location.origin!=="null"?i.location.origin:i.location.href),Wt(s,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:oo(e);return a=a.replace(/ $/,"%20"),!t&&pv.test(a)&&(a=s+a),new URL(a,s)}function mv(i,e,t="/"){return xx(i,e,t,!1)}function xx(i,e,t,s,a){let l=typeof e=="string"?da(e):e,c=tr(l.pathname||"/",t);if(c==null)return null;let f=yx(i),d=null,p=Lx(c);for(let m=0;d==null&&m<f.length;++m)d=Px(f[m],p,s);return d}function yx(i){let e=gv(i);return Sx(e),e}function gv(i,e=[],t=[],s="",a=!1){let l=(c,f,d=a,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(s)&&d)return;Wt(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length)}let v=mi([s,m.relativePath]),_=t.concat(m);c.children&&c.children.length>0&&(Wt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),gv(c.children,e,_,v,d)),!(c.path==null&&!c.index)&&e.push({path:v,score:Cx(v,c.index),routesMeta:_.map((S,E)=>{let[w,y]=xv(S.relativePath,S.caseSensitive,E===_.length-1);return{...S,matcher:w,compiledParams:y}})})};return i.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let d of vv(c.path))l(c,f,!0,d)}),e}function vv(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=vv(s.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),a&&f.push(...c),f.map(d=>i.startsWith("/")&&d===""?"/":d)}function Sx(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:bx(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Ex=/^:[\w-]+$/,Mx=3,wx=2,Tx=1,Rx=10,Ax=-2,jm=i=>i==="*";function Cx(i,e){let t=i.split("/"),s=t.length;return t.some(jm)&&(s+=Ax),e&&(s+=wx),t.filter(a=>!jm(a)).reduce((a,l)=>a+(Ex.test(l)?Mx:l===""?Tx:Rx),s)}function bx(i,e){return i.length===e.length&&i.slice(0,-1).every((s,a)=>s===e[a])?i[i.length-1]-e[e.length-1]:0}function Px(i,e,t=!1){let{routesMeta:s}=i,a={},l="/",c=[];for(let f=0;f<s.length;++f){let d=s[f],p=f===s.length-1,m=l==="/"?e:e.slice(l.length)||"/",v={path:d.relativePath,caseSensitive:d.caseSensitive,end:p},_=d.matcher&&d.compiledParams?_v(v,m,d.matcher,d.compiledParams):mu(v,m),S=d.route;if(!_&&p&&t&&!s[s.length-1].route.index&&(_=mu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!_)return null;Object.assign(a,_.params),c.push({params:a,pathname:mi([l,_.pathname]),pathnameBase:Nx(mi([l,_.pathnameBase])),route:S}),_.pathnameBase!=="/"&&(l=mi([l,_.pathnameBase]))}return c}function mu(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=xv(i.path,i.caseSensitive,i.end);return _v(i,e,t,s)}function _v(i,e,t,s){let a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:s.reduce((p,{paramName:m,isOptional:v},_)=>{if(m==="*"){let E=f[_]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[_];return v&&!S?p[m]=void 0:p[m]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:i}}function xv(i,e=!1,t=!0){bi(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d,p,m)=>{if(s.push({paramName:f,isOptional:d!=null}),d){let v=m.charAt(p+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(s.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function Lx(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bi(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function tr(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}function Dx(i,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof i=="string"?da(i):i,l;return t?(t=Sv(t),t.startsWith("/")?l=$m(t.substring(1),"/"):l=$m(t,e)):l=e,{pathname:l,search:Ix(s),hash:Fx(a)}}function $m(i,e){let t=gu(e).split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function df(i,e,t,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ux(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function yv(i){let e=Ux(i);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Gd(i,e,t,s=!1){let a;typeof i=="string"?a=da(i):(a={...i},Wt(!a.pathname||!a.pathname.includes("?"),df("?","pathname","search",a)),Wt(!a.pathname||!a.pathname.includes("#"),df("#","pathname","hash",a)),Wt(!a.search||!a.search.includes("#"),df("#","search","hash",a)));let l=i===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let v=e.length-1;if(!s&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),v-=1;a.pathname=_.join("/")}f=v>=0?e[v]:"/"}let d=Dx(a,f),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(p||m)&&(d.pathname+="/"),d}var Sv=i=>i.replace(/[\\/]{2,}/g,"/"),mi=i=>Sv(i.join("/")),gu=i=>i.replace(/\/+$/,""),Nx=i=>gu(i).replace(/^\/*/,"/"),Ix=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Fx=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Ox=class{constructor(i,e,t,s=!1){this.status=i,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function kx(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function Bx(i){let e=i.map(t=>t.route.path).filter(Boolean);return mi(e)||"/"}var Ev=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Mv(i,e){let t=i;if(typeof t!="string"||!Vd.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,a=!1;if(Ev)try{let l=new URL(window.location.href),c=pv.test(t)?new URL(px(t,l.protocol)):new URL(t),f=tr(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:a=!0}catch{bi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var wv=["POST","PUT","PATCH","DELETE"];new Set(wv);var zx=["GET",...wv];new Set(zx);var Hx=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Vx(i){try{return Hx.includes(new URL(i).protocol)}catch{return!1}}var ha=G.createContext(null);ha.displayName="DataRouter";var Su=G.createContext(null);Su.displayName="DataRouterState";var Tv=G.createContext(!1);function Gx(){return G.useContext(Tv)}var Rv=G.createContext({isTransitioning:!1});Rv.displayName="ViewTransition";var Wx=G.createContext(new Map);Wx.displayName="Fetchers";var Xx=G.createContext(null);Xx.displayName="Await";var ii=G.createContext(null);ii.displayName="Navigation";var vo=G.createContext(null);vo.displayName="Location";var nr=G.createContext({outlet:null,matches:[],isDataRoute:!1});nr.displayName="Route";var Wd=G.createContext(null);Wd.displayName="RouteError";var Av="REACT_ROUTER_ERROR",jx="REDIRECT",$x="ROUTE_ERROR_RESPONSE";function Yx(i){if(i.startsWith(`${Av}:${jx}:{`))try{let e=JSON.parse(i.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function qx(i){if(i.startsWith(`${Av}:${$x}:{`))try{let e=JSON.parse(i.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Ox(e.status,e.statusText,e.data)}catch{}}function Kx(i,{relative:e}={}){Wt(_o(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=G.useContext(ii),{hash:a,pathname:l,search:c}=xo(i,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:mi([t,l])),s.createHref({pathname:f,search:c,hash:a})}function _o(){return G.useContext(vo)!=null}function ir(){return Wt(_o(),"useLocation() may be used only in the context of a <Router> component."),G.useContext(vo).location}var Cv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bv(i){G.useContext(ii).static||G.useLayoutEffect(i)}function Zx(){let{isDataRoute:i}=G.useContext(nr);return i?cy():Jx()}function Jx(){Wt(_o(),"useNavigate() may be used only in the context of a <Router> component.");let i=G.useContext(ha),{basename:e,navigator:t}=G.useContext(ii),{matches:s}=G.useContext(nr),{pathname:a}=ir(),l=JSON.stringify(yv(s)),c=G.useRef(!1);return bv(()=>{c.current=!0}),G.useCallback((d,p={})=>{if(bi(c.current,Cv),!c.current)return;if(typeof d=="number"){t.go(d);return}let m=Gd(d,JSON.parse(l),a,p.relative==="path");i==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:mi([e,m.pathname])),(p.replace?t.replace:t.push)(m,p.state,p)},[e,t,l,a,i])}G.createContext(null);function xo(i,{relative:e}={}){let{matches:t}=G.useContext(nr),{pathname:s}=ir(),a=JSON.stringify(yv(t));return G.useMemo(()=>Gd(i,JSON.parse(a),s,e==="path"),[i,a,s,e])}function Qx(i,e){return Pv(i,e)}function Pv(i,e,t){Wt(_o(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=G.useContext(ii),{matches:a}=G.useContext(nr),l=a[a.length-1],c=l?l.params:{},f=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let y=p&&p.path||"";Dv(f,!p||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let m=ir(),v;if(e){let y=typeof e=="string"?da(e):e;Wt(d==="/"||y.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${y.pathname}" was given in the \`location\` prop.`),v=y}else v=m;let _=v.pathname||"/",S=_;if(d!=="/"){let y=d.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(y.length).join("/")}let E=t&&t.state.matches.length?t.state.matches.map(y=>Object.assign(y,{route:t.manifest[y.route.id]||y.route})):mv(i,{pathname:S});bi(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),bi(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=ry(E&&E.map(y=>Object.assign({},y,{params:Object.assign({},c,y.params),pathname:mi([d,s.encodeLocation?s.encodeLocation(y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:mi([d,s.encodeLocation?s.encodeLocation(y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),a,t);return e&&w?G.createElement(vo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},w):w}function ey(){let i=uy(),e=kx(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",i),c=G.createElement(G.Fragment,null,G.createElement("p",null,"💿 Hey developer 👋"),G.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",G.createElement("code",{style:l},"ErrorBoundary")," or"," ",G.createElement("code",{style:l},"errorElement")," prop on your route.")),G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},e),t?G.createElement("pre",{style:a},t):null,c)}var ty=G.createElement(ey,null),Lv=class extends G.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){this.props.onError?this.props.onError(i,e):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const t=qx(i.digest);t&&(i=t)}let e=i!==void 0?G.createElement(nr.Provider,{value:this.props.routeContext},G.createElement(Wd.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?G.createElement(ny,{error:i},e):e}};Lv.contextType=Tv;var hf=new WeakMap;function ny({children:i,error:e}){let{basename:t}=G.useContext(ii);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=Yx(e.digest);if(s){let a=hf.get(e);if(a)throw a;let l=Mv(s.location,t),c=l.absoluteURL||l.to;if(Vx(c))throw new Error("Invalid redirect location");if(Ev&&!hf.get(e))if(l.isExternal||s.reloadDocument)window.location.href=c;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw hf.set(e,f),f}return G.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return i}function iy({routeContext:i,match:e,children:t}){let s=G.useContext(ha);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),G.createElement(nr.Provider,{value:i},t)}function ry(i,e=[],t){let s=t?.state;if(i==null){if(!s)return null;if(s.errors)i=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)i=s.matches;else return null}let a=i,l=s?.errors;if(l!=null){let m=a.findIndex(v=>v.route.id&&l?.[v.route.id]!==void 0);Wt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,f=-1;if(t&&s){c=s.renderFallback;for(let m=0;m<a.length;m++){let v=a[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=m),v.route.id){let{loaderData:_,errors:S}=s,E=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(c=!0),f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}}let d=t?.onError,p=s&&d?(m,v)=>{d(m,{location:s.location,params:s.matches?.[0]?.params??{},pattern:Bx(s.matches),errorInfo:v})}:void 0;return a.reduceRight((m,v,_)=>{let S,E=!1,w=null,y=null;s&&(S=l&&v.route.id?l[v.route.id]:void 0,w=v.route.errorElement||ty,c&&(f<0&&_===0?(Dv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):f===_&&(E=!0,y=v.route.hydrateFallbackElement||null)));let x=e.concat(a.slice(0,_+1)),L=()=>{let P;return S?P=w:E?P=y:v.route.Component?P=G.createElement(v.route.Component,null):v.route.element?P=v.route.element:P=m,G.createElement(iy,{match:v,routeContext:{outlet:m,matches:x,isDataRoute:s!=null},children:P})};return s&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?G.createElement(Lv,{location:s.location,revalidation:s.revalidation,component:w,error:S,children:L(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:p}):L()},null)}function Xd(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sy(i){let e=G.useContext(ha);return Wt(e,Xd(i)),e}function ay(i){let e=G.useContext(Su);return Wt(e,Xd(i)),e}function oy(i){let e=G.useContext(nr);return Wt(e,Xd(i)),e}function jd(i){let e=oy(i),t=e.matches[e.matches.length-1];return Wt(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function ly(){return jd("useRouteId")}function uy(){let i=G.useContext(Wd),e=ay("useRouteError"),t=jd("useRouteError");return i!==void 0?i:e.errors?.[t]}function cy(){let{router:i}=sy("useNavigate"),e=jd("useNavigate"),t=G.useRef(!1);return bv(()=>{t.current=!0}),G.useCallback(async(a,l={})=>{bi(t.current,Cv),t.current&&(typeof a=="number"?await i.navigate(a):await i.navigate(a,{fromRouteId:e,...l}))},[i,e])}var Ym={};function Dv(i,e,t){!e&&!Ym[i]&&(Ym[i]=!0,bi(!1,t))}G.memo(fy);function fy({routes:i,manifest:e,future:t,state:s,isStatic:a,onError:l}){return Pv(i,void 0,{manifest:e,state:s,isStatic:a,onError:l})}function Zf(i){Wt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dy({basename:i="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1,useTransitions:c}){Wt(!_o(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=i.replace(/^\/*/,"/"),d=G.useMemo(()=>({basename:f,navigator:a,static:l,useTransitions:c,future:{}}),[f,a,l,c]);typeof t=="string"&&(t=da(t));let{pathname:p="/",search:m="",hash:v="",state:_=null,key:S="default",mask:E}=t,w=G.useMemo(()=>{let y=tr(p,f);return y==null?null:{location:{pathname:y,search:m,hash:v,state:_,key:S,mask:E},navigationType:s}},[f,p,m,v,_,S,s,E]);return bi(w!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:G.createElement(ii.Provider,{value:d},G.createElement(vo.Provider,{children:e,value:w}))}function hy({children:i,location:e}){return Qx(Jf(i),e)}function Jf(i,e=[]){let t=[];return G.Children.forEach(i,(s,a)=>{if(!G.isValidElement(s))return;let l=[...e,a];if(s.type===G.Fragment){t.push.apply(t,Jf(s.props.children,l));return}Wt(s.type===Zf,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Wt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Jf(s.props.children,l)),t.push(c)}),t}var su="get",au="application/x-www-form-urlencoded";function Eu(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function py(i){return Eu(i)&&i.tagName.toLowerCase()==="button"}function my(i){return Eu(i)&&i.tagName.toLowerCase()==="form"}function gy(i){return Eu(i)&&i.tagName.toLowerCase()==="input"}function vy(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function _y(i,e){return i.button===0&&(!e||e==="_self")&&!vy(i)}var Dl=null;function xy(){if(Dl===null)try{new FormData(document.createElement("form"),0),Dl=!1}catch{Dl=!0}return Dl}var yy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function pf(i){return i!=null&&!yy.has(i)?(bi(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${au}"`),null):i}function Sy(i,e){let t,s,a,l,c;if(my(i)){let f=i.getAttribute("action");s=f?tr(f,e):null,t=i.getAttribute("method")||su,a=pf(i.getAttribute("enctype"))||au,l=new FormData(i)}else if(py(i)||gy(i)&&(i.type==="submit"||i.type==="image")){let f=i.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=i.getAttribute("formaction")||f.getAttribute("action");if(s=d?tr(d,e):null,t=i.getAttribute("formmethod")||f.getAttribute("method")||su,a=pf(i.getAttribute("formenctype"))||pf(f.getAttribute("enctype"))||au,l=new FormData(f,i),!xy()){let{name:p,type:m,value:v}=i;if(m==="image"){let _=p?`${p}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else p&&l.append(p,v)}}else{if(Eu(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=su,s=null,a=au,c=i}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $d(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Uv(i,e,t,s){let a=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return t?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${s}`:a.pathname=`${a.pathname}.${s}`:a.pathname==="/"?a.pathname=`_root.${s}`:e&&tr(a.pathname,e)==="/"?a.pathname=`${gu(e)}/_root.${s}`:a.pathname=`${gu(a.pathname)}.${s}`,a}async function Ey(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function My(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function wy(i,e,t){let s=await Promise.all(i.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await Ey(l,t);return c.links?c.links():[]}return[]}));return Cy(s.flat(1).filter(My).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function qm(i,e,t,s,a,l){let c=(d,p)=>t[p]?d.route.id!==t[p].route.id:!0,f=(d,p)=>t[p].pathname!==d.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==d.params["*"];return l==="assets"?e.filter((d,p)=>c(d,p)||f(d,p)):l==="data"?e.filter((d,p)=>{let m=s.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(c(d,p)||f(d,p))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Ty(i,e,{includeHydrateFallback:t}={}){return Ry(i.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function Ry(i){return[...new Set(i)]}function Ay(i){let e={},t=Object.keys(i).sort();for(let s of t)e[s]=i[s];return e}function Cy(i,e){let t=new Set;return new Set(e),i.reduce((s,a)=>{let l=JSON.stringify(Ay(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}function Yd(){let i=G.useContext(ha);return $d(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function by(){let i=G.useContext(Su);return $d(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var qd=G.createContext(void 0);qd.displayName="FrameworkContext";function Mu(){let i=G.useContext(qd);return $d(i,"You must render this element inside a <HydratedRouter> element"),i}function Py(i,e){let t=G.useContext(qd),[s,a]=G.useState(!1),[l,c]=G.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=e,_=G.useRef(null);G.useEffect(()=>{if(i==="render"&&c(!0),i==="viewport"){let w=x=>{x.forEach(L=>{c(L.isIntersecting)})},y=new IntersectionObserver(w,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[i]),G.useEffect(()=>{if(s){let w=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(w)}}},[s]);let S=()=>{a(!0)},E=()=>{a(!1),c(!1)};return t?i!=="intent"?[l,_,{}]:[l,_,{onFocus:Za(f,S),onBlur:Za(d,E),onMouseEnter:Za(p,S),onMouseLeave:Za(m,E),onTouchStart:Za(v,S)}]:[!1,_,{}]}function Za(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function Ly({page:i,...e}){let t=Gx(),{nonce:s}=Mu(),{router:a}=Yd(),l=G.useMemo(()=>mv(a.routes,i,a.basename),[a.routes,i,a.basename]);return l?(e.nonce==null&&s&&(e={...e,nonce:s}),t?G.createElement(Uy,{page:i,matches:l,...e}):G.createElement(Ny,{page:i,matches:l,...e})):null}function Dy(i){let{manifest:e,routeModules:t}=Mu(),[s,a]=G.useState([]);return G.useEffect(()=>{let l=!1;return wy(i,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[i,e,t]),s}function Uy({page:i,matches:e,...t}){let s=ir(),{future:a}=Mu(),{basename:l}=Yd(),c=G.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let f=Uv(i,l,a.v8_trailingSlashAwareDataRequests,"rsc"),d=!1,p=[];for(let m of e)typeof m.route.shouldRevalidate=="function"?d=!0:p.push(m.route.id);return d&&p.length>0&&f.searchParams.set("_routes",p.join(",")),[f.pathname+f.search]},[l,a.v8_trailingSlashAwareDataRequests,i,s,e]);return G.createElement(G.Fragment,null,c.map(f=>G.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...t})))}function Ny({page:i,matches:e,...t}){let s=ir(),{future:a,manifest:l,routeModules:c}=Mu(),{basename:f}=Yd(),{loaderData:d,matches:p}=by(),m=G.useMemo(()=>qm(i,e,p,l,s,"data"),[i,e,p,l,s]),v=G.useMemo(()=>qm(i,e,p,l,s,"assets"),[i,e,p,l,s]),_=G.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let w=new Set,y=!1;if(e.forEach(L=>{let P=l.routes[L.route.id];!P||!P.hasLoader||(!m.some(C=>C.route.id===L.route.id)&&L.route.id in d&&c[L.route.id]?.shouldRevalidate||P.hasClientLoader?y=!0:w.add(L.route.id))}),w.size===0)return[];let x=Uv(i,f,a.v8_trailingSlashAwareDataRequests,"data");return y&&w.size>0&&x.searchParams.set("_routes",e.filter(L=>w.has(L.route.id)).map(L=>L.route.id).join(",")),[x.pathname+x.search]},[f,a.v8_trailingSlashAwareDataRequests,d,s,l,m,e,i,c]),S=G.useMemo(()=>Ty(v,l),[v,l]),E=Dy(v);return G.createElement(G.Fragment,null,_.map(w=>G.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...t})),S.map(w=>G.createElement("link",{key:w,rel:"modulepreload",href:w,...t})),E.map(({key:w,link:y})=>G.createElement("link",{key:w,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function Iy(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Fy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fy&&(window.__reactRouterVersion="7.18.2")}catch{}function Oy({basename:i,children:e,useTransitions:t,window:s}){let a=G.useRef();a.current==null&&(a.current=mx({window:s,v5Compat:!0}));let l=a.current,[c,f]=G.useState({action:l.action,location:l.location}),d=G.useCallback(p=>{t===!1?f(p):G.startTransition(()=>f(p))},[t]);return G.useLayoutEffect(()=>l.listen(d),[l,d]),G.createElement(dy,{basename:i,children:e,location:c.location,navigationType:c.action,navigator:l,useTransitions:t})}var Nv=G.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,mask:f,state:d,target:p,to:m,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:S,...E},w){let{basename:y,navigator:x,useTransitions:L}=G.useContext(ii),P=typeof m=="string"&&Vd.test(m),C=Mv(m,y);m=C.to;let k=Kx(m,{relative:a}),N=ir(),F=null;if(f){let pe=Gd(f,[],N.mask?N.mask.pathname:"/",!0);y!=="/"&&(pe.pathname=pe.pathname==="/"?y:mi([y,pe.pathname])),F=x.createHref(pe)}let[X,b,R]=Py(s,E),H=zy(m,{replace:c,mask:f,state:d,target:p,preventScrollReset:v,relative:a,viewTransition:_,defaultShouldRevalidate:S,useTransitions:L});function se(pe){e&&e(pe),pe.defaultPrevented||H(pe)}let Q=!(C.isExternal||l),le=G.createElement("a",{...E,...R,href:(Q?F:void 0)||C.absoluteURL||k,onClick:Q?se:e,ref:Iy(w,b),target:p,"data-discover":!P&&t==="render"?"true":void 0});return X&&!P?G.createElement(G.Fragment,null,le,G.createElement(Ly,{page:k})):le});Nv.displayName="Link";var Qf=G.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:f,children:d,...p},m){let v=xo(c,{relative:p.relative}),_=ir(),S=G.useContext(Su),{navigator:E,basename:w}=G.useContext(ii),y=S!=null&&Xy(v)&&f===!0,x=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,L=_.pathname,P=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(L=L.toLowerCase(),P=P?P.toLowerCase():null,x=x.toLowerCase()),P&&w&&(P=tr(P,w)||P);const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let k=L===x||!a&&L.startsWith(x)&&L.charAt(C)==="/",N=P!=null&&(P===x||!a&&P.startsWith(x)&&P.charAt(x.length)==="/"),F={isActive:k,isPending:N,isTransitioning:y},X=k?e:void 0,b;typeof s=="function"?b=s(F):b=[s,k?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(F):l;return G.createElement(Nv,{...p,"aria-current":X,className:b,ref:m,style:R,to:c,viewTransition:f},typeof d=="function"?d(F):d)});Qf.displayName="NavLink";var ky=G.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=su,action:f,onSubmit:d,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:_,...S},E)=>{let{useTransitions:w}=G.useContext(ii),y=Gy(),x=Wy(f,{relative:p}),L=c.toLowerCase()==="get"?"get":"post",P=typeof f=="string"&&Vd.test(f),C=k=>{if(d&&d(k),k.defaultPrevented)return;k.preventDefault();let N=k.nativeEvent.submitter,F=N?.getAttribute("formmethod")||c,X=()=>y(N||k.currentTarget,{fetcherKey:e,method:F,navigate:t,replace:a,state:l,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:_});w&&t!==!1?G.startTransition(()=>X()):X()};return G.createElement("form",{ref:E,method:L,action:x,onSubmit:s?d:C,...S,"data-discover":!P&&i==="render"?"true":void 0})});ky.displayName="Form";function By(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Iv(i){let e=G.useContext(ha);return Wt(e,By(i)),e}function zy(i,{target:e,replace:t,mask:s,state:a,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d,useTransitions:p}={}){let m=Zx(),v=ir(),_=xo(i,{relative:c});return G.useCallback(S=>{if(_y(S,e)){S.preventDefault();let E=t!==void 0?t:oo(v)===oo(_),w=()=>m(i,{replace:E,mask:s,state:a,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d});p?G.startTransition(()=>w()):w()}},[v,m,_,t,s,a,e,i,l,c,f,d,p])}var Hy=0,Vy=()=>`__${String(++Hy)}__`;function Gy(){let{router:i}=Iv("useSubmit"),{basename:e}=G.useContext(ii),t=ly(),s=i.fetch,a=i.navigate;return G.useCallback(async(l,c={})=>{let{action:f,method:d,encType:p,formData:m,body:v}=Sy(l,e);if(c.navigate===!1){let _=c.fetcherKey||Vy();await s(_,t,c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,flushSync:c.flushSync})}else await a(c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[s,a,e,t])}function Wy(i,{relative:e}={}){let{basename:t}=G.useContext(ii),s=G.useContext(nr);Wt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...xo(i||".",{relative:e})},c=ir();if(i==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(m=>m==="")){f.delete("index"),d.filter(v=>v).forEach(v=>f.append("index",v));let m=f.toString();l.search=m?`?${m}`:""}}return(!i||i===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:mi([t,l.pathname])),oo(l)}function Xy(i,{relative:e}={}){let t=G.useContext(Rv);Wt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Iv("useViewTransitionState"),a=xo(i,{relative:e});if(!t.isTransitioning)return!1;let l=tr(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=tr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return mu(a.pathname,c)!=null||mu(a.pathname,l)!=null}const Kd="178",jy=0,Km=1,$y=2,Fv=1,Yy=2,$i=3,Or=0,kn=1,wi=2,Ir=0,ia=1,Zm=2,Jm=3,Qm=4,qy=5,os=100,Ky=101,Zy=102,Jy=103,Qy=104,eS=200,tS=201,nS=202,iS=203,ed=204,td=205,rS=206,sS=207,aS=208,oS=209,lS=210,uS=211,cS=212,fS=213,dS=214,nd=0,id=1,rd=2,oa=3,sd=4,ad=5,od=6,ld=7,Ov=0,hS=1,pS=2,Ji=0,mS=1,gS=2,vS=3,_S=4,xS=5,yS=6,SS=7,kv=300,la=301,ua=302,ud=303,cd=304,wu=306,lo=1e3,qi=1001,fd=1002,pn=1003,ES=1004,Ul=1005,Ti=1006,mf=1007,us=1008,Pi=1009,Bv=1010,zv=1011,uo=1012,Zd=1013,ds=1014,Ki=1015,yo=1016,Jd=1017,Qd=1018,co=1020,Hv=35902,Vv=1021,Gv=1022,pi=1023,fo=1026,ho=1027,Wv=1028,eh=1029,Xv=1030,th=1031,nh=1033,ou=33776,lu=33777,uu=33778,cu=33779,dd=35840,hd=35841,pd=35842,md=35843,gd=36196,vd=37492,_d=37496,xd=37808,yd=37809,Sd=37810,Ed=37811,Md=37812,wd=37813,Td=37814,Rd=37815,Ad=37816,Cd=37817,bd=37818,Pd=37819,Ld=37820,Dd=37821,fu=36492,Ud=36494,Nd=36495,jv=36283,Id=36284,Fd=36285,Od=36286,MS=3200,wS=3201,TS=0,RS=1,Dr="",bn="srgb",ca="srgb-linear",vu="linear",Dt="srgb",Bs=7680,eg=519,AS=512,CS=513,bS=514,$v=515,PS=516,LS=517,DS=518,US=519,tg=35044,ng="300 es",Zi=2e3,_u=2001;class pa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ig=1234567;const so=Math.PI/180,po=180/Math.PI;function ma(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function ih(i,e){return(i%e+e)%e}function NS(i,e,t,s,a){return s+(i-e)*(a-s)/(t-e)}function IS(i,e,t){return i!==e?(t-i)/(e-i):0}function ao(i,e,t){return(1-t)*i+t*e}function FS(i,e,t,s){return ao(i,e,1-Math.exp(-t*s))}function OS(i,e=1){return e-Math.abs(ih(i,e*2)-e)}function kS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function BS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function HS(i,e){return i+Math.random()*(e-i)}function VS(i){return i*(.5-Math.random())}function GS(i){i!==void 0&&(ig=i);let e=ig+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function WS(i){return i*so}function XS(i){return i*po}function jS(i){return(i&i-1)===0&&i!==0}function $S(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function YS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qS(i,e,t,s,a){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),p=l((e+s)/2),m=c((e+s)/2),v=l((e-s)/2),_=c((e-s)/2),S=l((s-e)/2),E=c((s-e)/2);switch(a){case"XYX":i.set(f*m,d*v,d*_,f*p);break;case"YZY":i.set(d*_,f*m,d*v,f*p);break;case"ZXZ":i.set(d*v,d*_,f*m,f*p);break;case"XZX":i.set(f*m,d*E,d*S,f*p);break;case"YXY":i.set(d*S,f*m,d*E,f*p);break;case"ZYZ":i.set(d*E,d*S,f*m,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ta(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const KS={DEG2RAD:so,RAD2DEG:po,generateUUID:ma,clamp:Et,euclideanModulo:ih,mapLinear:NS,inverseLerp:IS,lerp:ao,damp:FS,pingpong:OS,smoothstep:kS,smootherstep:BS,randInt:zS,randFloat:HS,randFloatSpread:VS,seededRandom:GS,degToRad:WS,radToDeg:XS,isPowerOfTwo:jS,ceilPowerOfTwo:$S,floorPowerOfTwo:YS,setQuaternionFromProperEuler:qS,normalize:An,denormalize:ta};class Ct{constructor(e=0,t=0){Ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class So{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let d=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];const _=l[c+0],S=l[c+1],E=l[c+2],w=l[c+3];if(f===0){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(f===1){e[t+0]=_,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(v!==w||d!==_||p!==S||m!==E){let y=1-f;const x=d*_+p*S+m*E+v*w,L=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const k=Math.sqrt(P),N=Math.atan2(k,x*L);y=Math.sin(y*N)/k,f=Math.sin(f*N)/k}const C=f*L;if(d=d*y+_*C,p=p*y+S*C,m=m*y+E*C,v=v*y+w*C,y===1-f){const k=1/Math.sqrt(d*d+p*p+m*m+v*v);d*=k,p*=k,m*=k,v*=k}}e[t]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],d=s[a+1],p=s[a+2],m=s[a+3],v=l[c],_=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+m*v+d*S-p*_,e[t+1]=d*E+m*_+p*v-f*S,e[t+2]=p*E+m*S+f*_-d*v,e[t+3]=m*E-f*v-d*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,p=f(s/2),m=f(a/2),v=f(l/2),_=d(s/2),S=d(a/2),E=d(l/2);switch(c){case"XYZ":this._x=_*m*v+p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v-_*S*E;break;case"YXZ":this._x=_*m*v+p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v+_*S*E;break;case"ZXY":this._x=_*m*v-p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v-_*S*E;break;case"ZYX":this._x=_*m*v-p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v+_*S*E;break;case"YZX":this._x=_*m*v+p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v-_*S*E;break;case"XZY":this._x=_*m*v-p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],d=t[9],p=t[2],m=t[6],v=t[10],_=s+f+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(s>f&&s>v){const S=2*Math.sqrt(1+s-f-v);this._w=(m-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-s-v);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+v-s-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,d=t._y,p=t._z,m=t._w;return this._x=s*m+c*f+a*p-l*d,this._y=a*m+c*d+l*f-s*p,this._z=l*m+c*p+s*d-a*f,this._w=c*m-s*f-a*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),v=Math.sin((1-t)*m)/p,_=Math.sin(t*m)/p;return this._w=c*v+this._w*_,this._x=s*v+this._x*_,this._y=a*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,s=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,d=e.w,p=2*(c*a-f*s),m=2*(f*t-l*a),v=2*(l*s-c*t);return this.x=t+d*p+c*v-f*m,this.y=s+d*m+f*p-l*v,this.z=a+d*v+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=a*d-l*f,this.y=l*c-s*d,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return gf.copy(this).projectOnVector(e),this.sub(gf)}reflect(e){return this.sub(gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gf=new ne,rg=new So;class ht{constructor(e,t,s,a,l,c,f,d,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,p)}set(e,t,s,a,l,c,f,d,p){const m=this.elements;return m[0]=e,m[1]=a,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=s,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],d=s[6],p=s[1],m=s[4],v=s[7],_=s[2],S=s[5],E=s[8],w=a[0],y=a[3],x=a[6],L=a[1],P=a[4],C=a[7],k=a[2],N=a[5],F=a[8];return l[0]=c*w+f*L+d*k,l[3]=c*y+f*P+d*N,l[6]=c*x+f*C+d*F,l[1]=p*w+m*L+v*k,l[4]=p*y+m*P+v*N,l[7]=p*x+m*C+v*F,l[2]=_*w+S*L+E*k,l[5]=_*y+S*P+E*N,l[8]=_*x+S*C+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8];return t*c*m-t*f*p-s*l*m+s*f*d+a*l*p-a*c*d}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=m*c-f*p,_=f*d-m*l,S=p*l-c*d,E=t*v+s*_+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(a*p-m*s)*w,e[2]=(f*s-a*c)*w,e[3]=_*w,e[4]=(m*t-a*d)*w,e[5]=(a*l-f*t)*w,e[6]=S*w,e[7]=(s*d-p*t)*w,e[8]=(c*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(s*d,s*p,-s*(d*c+p*f)+c+e,-a*p,a*d,-a*(-p*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(vf.makeScale(e,t)),this}rotate(e){return this.premultiply(vf.makeRotation(-e)),this}translate(e,t){return this.premultiply(vf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vf=new ht;function Yv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ZS(){const i=mo("canvas");return i.style.display="block",i}const sg={};function ra(i){i in sg||(sg[i]=!0,console.warn(i))}function JS(i,e,t){return new Promise(function(s,a){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function QS(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function eE(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ag=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),og=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tE(){const i={enabled:!0,workingColorSpace:ca,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(a.r=Qi(a.r),a.g=Qi(a.g),a.b=Qi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(a.r=sa(a.r),a.g=sa(a.g),a.b=sa(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Dr?vu:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return ra("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return ra("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[ca]:{primaries:e,whitePoint:s,transfer:vu,toXYZ:ag,fromXYZ:og,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:s,transfer:Dt,toXYZ:ag,fromXYZ:og,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),i}const At=tE();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zs;class nE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{zs===void 0&&(zs=mo("canvas")),zs.width=e.width,zs.height=e.height;const a=zs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=zs}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mo("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Qi(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Qi(t[s]/255)*255):t[s]=Qi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iE=0;class rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=ma(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(_f(a[c].image)):l.push(_f(a[c]))}else l=_f(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function _f(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rE=0;const xf=new ne;class Ln extends pa{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,s=qi,a=qi,l=Ti,c=us,f=pi,d=Pi,p=Ln.DEFAULT_ANISOTROPY,m=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=ma(),this.name="",this.source=new rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xf).x}get height(){return this.source.getSize(xf).y}get depth(){return this.source.getSize(xf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=kv;Ln.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,s=0,a=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const d=e.elements,p=d[0],m=d[4],v=d[8],_=d[1],S=d[5],E=d[9],w=d[2],y=d[6],x=d[10];if(Math.abs(m-_)<.01&&Math.abs(v-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+w)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,C=(S+1)/2,k=(x+1)/2,N=(m+_)/4,F=(v+w)/4,X=(E+y)/4;return P>C&&P>k?P<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(P),a=N/s,l=F/s):C>k?C<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),s=N/a,l=X/a):k<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(k),s=F/l,a=X/l),this.set(s,a,l,t),this}let L=Math.sqrt((y-E)*(y-E)+(v-w)*(v-w)+(_-m)*(_-m));return Math.abs(L)<.001&&(L=1),this.x=(y-E)/L,this.y=(v-w)/L,this.z=(_-m)/L,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sE extends pa{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const a={width:e,height:t,depth:s.depth},l=new Ln(a);this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new rh(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hs extends sE{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class qv extends Ln{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=pn,this.minFilter=pn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aE extends Ln{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=pn,this.minFilter=pn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eo{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ci):ci.fromBufferAttribute(l,c),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Nl.copy(s.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),Il.subVectors(this.max,Ja),Hs.subVectors(e.a,Ja),Vs.subVectors(e.b,Ja),Gs.subVectors(e.c,Ja),Tr.subVectors(Vs,Hs),Rr.subVectors(Gs,Vs),Qr.subVectors(Hs,Gs);let t=[0,-Tr.z,Tr.y,0,-Rr.z,Rr.y,0,-Qr.z,Qr.y,Tr.z,0,-Tr.x,Rr.z,0,-Rr.x,Qr.z,0,-Qr.x,-Tr.y,Tr.x,0,-Rr.y,Rr.x,0,-Qr.y,Qr.x,0];return!yf(t,Hs,Vs,Gs,Il)||(t=[1,0,0,0,1,0,0,0,1],!yf(t,Hs,Vs,Gs,Il))?!1:(Fl.crossVectors(Tr,Rr),t=[Fl.x,Fl.y,Fl.z],yf(t,Hs,Vs,Gs,Il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ci=new ne,Nl=new Eo,Hs=new ne,Vs=new ne,Gs=new ne,Tr=new ne,Rr=new ne,Qr=new ne,Ja=new ne,Il=new ne,Fl=new ne,es=new ne;function yf(i,e,t,s,a){for(let l=0,c=i.length-3;l<=c;l+=3){es.fromArray(i,l);const f=a.x*Math.abs(es.x)+a.y*Math.abs(es.y)+a.z*Math.abs(es.z),d=e.dot(es),p=t.dot(es),m=s.dot(es);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const oE=new Eo,Qa=new ne,Sf=new ne;class sh{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):oE.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qa.subVectors(e,this.center);const t=Qa.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Qa,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qa.copy(e.center).add(Sf)),this.expandByPoint(Qa.copy(e.center).sub(Sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Gi=new ne,Ef=new ne,Ol=new ne,Ar=new ne,Mf=new ne,kl=new ne,wf=new ne;class lE{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Ef.copy(e).add(t).multiplyScalar(.5),Ol.copy(t).sub(e).normalize(),Ar.copy(this.origin).sub(Ef);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ol),f=Ar.dot(this.direction),d=-Ar.dot(Ol),p=Ar.lengthSq(),m=Math.abs(1-c*c);let v,_,S,E;if(m>0)if(v=c*d-f,_=c*f-d,E=l*m,v>=0)if(_>=-E)if(_<=E){const w=1/m;v*=w,_*=w,S=v*(v+c*_+2*f)+_*(c*v+_+2*d)+p}else _=l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;else _=-l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;else _<=-E?(v=Math.max(0,-(-c*l+f)),_=v>0?-l:Math.min(Math.max(-l,-d),l),S=-v*v+_*(_+2*d)+p):_<=E?(v=0,_=Math.min(Math.max(-l,-d),l),S=_*(_+2*d)+p):(v=Math.max(0,-(c*l+f)),_=v>0?l:Math.min(Math.max(-l,-d),l),S=-v*v+_*(_+2*d)+p);else _=c>0?-l:l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Ef).addScaledVector(Ol,_),S}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const s=Gi.dot(this.direction),a=Gi.dot(Gi)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,d=s+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,d;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,a=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,a=(e.min.x-_.x)*p),m>=0?(l=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),v>=0?(f=(e.min.z-_.z)*v,d=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,d=(e.min.z-_.z)*v),s>d||f>a)||((f>s||s!==s)&&(s=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,s,a,l){Mf.subVectors(t,e),kl.subVectors(s,e),wf.crossVectors(Mf,kl);let c=this.direction.dot(wf),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Ar.subVectors(this.origin,e);const d=f*this.direction.dot(kl.crossVectors(Ar,kl));if(d<0)return null;const p=f*this.direction.dot(Mf.cross(Ar));if(p<0||d+p>c)return null;const m=-f*Ar.dot(wf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,s,a,l,c,f,d,p,m,v,_,S,E,w,y){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,p,m,v,_,S,E,w,y)}set(e,t,s,a,l,c,f,d,p,m,v,_,S,E,w,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=a,x[1]=l,x[5]=c,x[9]=f,x[13]=d,x[2]=p,x[6]=m,x[10]=v,x[14]=_,x[3]=S,x[7]=E,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Ws.setFromMatrixColumn(e,0).length(),l=1/Ws.setFromMatrixColumn(e,1).length(),c=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),d=Math.cos(a),p=Math.sin(a),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=c*m,S=c*v,E=f*m,w=f*v;t[0]=d*m,t[4]=-d*v,t[8]=p,t[1]=S+E*p,t[5]=_-w*p,t[9]=-f*d,t[2]=w-_*p,t[6]=E+S*p,t[10]=c*d}else if(e.order==="YXZ"){const _=d*m,S=d*v,E=p*m,w=p*v;t[0]=_+w*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*m,t[9]=-f,t[2]=S*f-E,t[6]=w+_*f,t[10]=c*d}else if(e.order==="ZXY"){const _=d*m,S=d*v,E=p*m,w=p*v;t[0]=_-w*f,t[4]=-c*v,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*m,t[9]=w-_*f,t[2]=-c*p,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const _=c*m,S=c*v,E=f*m,w=f*v;t[0]=d*m,t[4]=E*p-S,t[8]=_*p+w,t[1]=d*v,t[5]=w*p+_,t[9]=S*p-E,t[2]=-p,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,S=c*p,E=f*d,w=f*p;t[0]=d*m,t[4]=w-_*v,t[8]=E*v+S,t[1]=v,t[5]=c*m,t[9]=-f*m,t[2]=-p*m,t[6]=S*v+E,t[10]=_-w*v}else if(e.order==="XZY"){const _=c*d,S=c*p,E=f*d,w=f*p;t[0]=d*m,t[4]=-v,t[8]=p*m,t[1]=_*v+w,t[5]=c*m,t[9]=S*v-E,t[2]=E*v-S,t[6]=f*m,t[10]=w*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uE,e,cE)}lookAt(e,t,s){const a=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Cr.crossVectors(s,Wn),Cr.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Cr.crossVectors(s,Wn)),Cr.normalize(),Bl.crossVectors(Wn,Cr),a[0]=Cr.x,a[4]=Bl.x,a[8]=Wn.x,a[1]=Cr.y,a[5]=Bl.y,a[9]=Wn.y,a[2]=Cr.z,a[6]=Bl.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],d=s[8],p=s[12],m=s[1],v=s[5],_=s[9],S=s[13],E=s[2],w=s[6],y=s[10],x=s[14],L=s[3],P=s[7],C=s[11],k=s[15],N=a[0],F=a[4],X=a[8],b=a[12],R=a[1],H=a[5],se=a[9],Q=a[13],le=a[2],pe=a[6],ue=a[10],ve=a[14],z=a[3],he=a[7],ie=a[11],I=a[15];return l[0]=c*N+f*R+d*le+p*z,l[4]=c*F+f*H+d*pe+p*he,l[8]=c*X+f*se+d*ue+p*ie,l[12]=c*b+f*Q+d*ve+p*I,l[1]=m*N+v*R+_*le+S*z,l[5]=m*F+v*H+_*pe+S*he,l[9]=m*X+v*se+_*ue+S*ie,l[13]=m*b+v*Q+_*ve+S*I,l[2]=E*N+w*R+y*le+x*z,l[6]=E*F+w*H+y*pe+x*he,l[10]=E*X+w*se+y*ue+x*ie,l[14]=E*b+w*Q+y*ve+x*I,l[3]=L*N+P*R+C*le+k*z,l[7]=L*F+P*H+C*pe+k*he,l[11]=L*X+P*se+C*ue+k*ie,l[15]=L*b+P*Q+C*ve+k*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],d=e[9],p=e[13],m=e[2],v=e[6],_=e[10],S=e[14],E=e[3],w=e[7],y=e[11],x=e[15];return E*(+l*d*v-a*p*v-l*f*_+s*p*_+a*f*S-s*d*S)+w*(+t*d*S-t*p*_+l*c*_-a*c*S+a*p*m-l*d*m)+y*(+t*p*v-t*f*S-l*c*v+s*c*S+l*f*m-s*p*m)+x*(-a*f*m-t*d*v+t*f*_+a*c*v-s*c*_+s*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=e[9],_=e[10],S=e[11],E=e[12],w=e[13],y=e[14],x=e[15],L=v*y*p-w*_*p+w*d*S-f*y*S-v*d*x+f*_*x,P=E*_*p-m*y*p-E*d*S+c*y*S+m*d*x-c*_*x,C=m*w*p-E*v*p+E*f*S-c*w*S-m*f*x+c*v*x,k=E*v*d-m*w*d-E*f*_+c*w*_+m*f*y-c*v*y,N=t*L+s*P+a*C+l*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=L*F,e[1]=(w*_*l-v*y*l-w*a*S+s*y*S+v*a*x-s*_*x)*F,e[2]=(f*y*l-w*d*l+w*a*p-s*y*p-f*a*x+s*d*x)*F,e[3]=(v*d*l-f*_*l-v*a*p+s*_*p+f*a*S-s*d*S)*F,e[4]=P*F,e[5]=(m*y*l-E*_*l+E*a*S-t*y*S-m*a*x+t*_*x)*F,e[6]=(E*d*l-c*y*l-E*a*p+t*y*p+c*a*x-t*d*x)*F,e[7]=(c*_*l-m*d*l+m*a*p-t*_*p-c*a*S+t*d*S)*F,e[8]=C*F,e[9]=(E*v*l-m*w*l-E*s*S+t*w*S+m*s*x-t*v*x)*F,e[10]=(c*w*l-E*f*l+E*s*p-t*w*p-c*s*x+t*f*x)*F,e[11]=(m*f*l-c*v*l-m*s*p+t*v*p+c*s*S-t*f*S)*F,e[12]=k*F,e[13]=(m*w*a-E*v*a+E*s*_-t*w*_-m*s*y+t*v*y)*F,e[14]=(E*f*a-c*w*a-E*s*d+t*w*d+c*s*y-t*f*y)*F,e[15]=(c*v*a-m*f*a+m*s*d-t*v*d-c*s*_+t*f*_)*F,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,d=e.z,p=l*c,m=l*f;return this.set(p*c+s,p*f-a*d,p*d+a*f,0,p*f+a*d,m*f+s,m*d-a*c,0,p*d-a*f,m*d+a*c,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,p=l+l,m=c+c,v=f+f,_=l*p,S=l*m,E=l*v,w=c*m,y=c*v,x=f*v,L=d*p,P=d*m,C=d*v,k=s.x,N=s.y,F=s.z;return a[0]=(1-(w+x))*k,a[1]=(S+C)*k,a[2]=(E-P)*k,a[3]=0,a[4]=(S-C)*N,a[5]=(1-(_+x))*N,a[6]=(y+L)*N,a[7]=0,a[8]=(E+P)*F,a[9]=(y-L)*F,a[10]=(1-(_+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Ws.set(a[0],a[1],a[2]).length();const c=Ws.set(a[4],a[5],a[6]).length(),f=Ws.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],fi.copy(this);const p=1/l,m=1/c,v=1/f;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=m,fi.elements[5]*=m,fi.elements[6]*=m,fi.elements[8]*=v,fi.elements[9]*=v,fi.elements[10]*=v,t.setFromRotationMatrix(fi),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=Zi){const d=this.elements,p=2*l/(t-e),m=2*l/(s-a),v=(t+e)/(t-e),_=(s+a)/(s-a);let S,E;if(f===Zi)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===_u)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=Zi){const d=this.elements,p=1/(t-e),m=1/(s-a),v=1/(c-l),_=(t+e)*p,S=(s+a)*m;let E,w;if(f===Zi)E=(c+l)*v,w=-2*v;else if(f===_u)E=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=w,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Ws=new ne,fi=new Yt,uE=new ne(0,0,0),cE=new ne(1,1,1),Cr=new ne,Bl=new ne,Wn=new ne,lg=new Yt,ug=new So;class Pn{constructor(e=0,t=0,s=0,a=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],d=a[1],p=a[5],m=a[9],v=a[2],_=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ug.setFromEuler(this),this.setFromQuaternion(ug,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Kv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fE=0;const cg=new ne,Xs=new So,Wi=new Yt,zl=new ne,eo=new ne,dE=new ne,hE=new So,fg=new ne(1,0,0),dg=new ne(0,1,0),hg=new ne(0,0,1),pg={type:"added"},pE={type:"removed"},js={type:"childadded",child:null},Tf={type:"childremoved",child:null};class Mn extends pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new ne,t=new Pn,s=new So,a=new ne(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ht}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(fg,e)}rotateY(e){return this.rotateOnAxis(dg,e)}rotateZ(e){return this.rotateOnAxis(hg,e)}translateOnAxis(e,t){return cg.copy(e).applyQuaternion(this.quaternion),this.position.add(cg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fg,e)}translateY(e){return this.translateOnAxis(dg,e)}translateZ(e){return this.translateOnAxis(hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?zl.copy(e):zl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(eo,zl,this.up):Wi.lookAt(zl,eo,this.up),this.quaternion.setFromRotationMatrix(Wi),a&&(Wi.extractRotation(a.matrixWorld),Xs.setFromRotationMatrix(Wi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pg),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pE),Tf.child=e,this.dispatchEvent(Tf),Tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pg),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,dE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,hE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const v=d[p];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),p=c(e.textures),m=c(e.images),v=c(e.shapes),_=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),d.length>0&&(s.materials=d),p.length>0&&(s.textures=p),m.length>0&&(s.images=m),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=a,s;function c(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Mn.DEFAULT_UP=new ne(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new ne,Xi=new ne,Rf=new ne,ji=new ne,$s=new ne,Ys=new ne,mg=new ne,Af=new ne,Cf=new ne,bf=new ne,Pf=new $t,Lf=new $t,Df=new $t;class hi{constructor(e=new ne,t=new ne,s=new ne){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),di.subVectors(e,t),a.cross(di);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){di.subVectors(a,t),Xi.subVectors(s,t),Rf.subVectors(e,t);const c=di.dot(di),f=di.dot(Xi),d=di.dot(Rf),p=Xi.dot(Xi),m=Xi.dot(Rf),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,S=(p*d-f*m)*_,E=(c*m-f*d)*_;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,s,a,l,c,f,d){return this.getBarycoord(e,t,s,a,ji)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,ji.x),d.addScaledVector(c,ji.y),d.addScaledVector(f,ji.z),d)}static getInterpolatedAttribute(e,t,s,a,l,c){return Pf.setScalar(0),Lf.setScalar(0),Df.setScalar(0),Pf.fromBufferAttribute(e,t),Lf.fromBufferAttribute(e,s),Df.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Pf,l.x),c.addScaledVector(Lf,l.y),c.addScaledVector(Df,l.z),c}static isFrontFacing(e,t,s,a){return di.subVectors(s,t),Xi.subVectors(e,t),di.cross(Xi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),di.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return hi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;$s.subVectors(a,s),Ys.subVectors(l,s),Af.subVectors(e,s);const d=$s.dot(Af),p=Ys.dot(Af);if(d<=0&&p<=0)return t.copy(s);Cf.subVectors(e,a);const m=$s.dot(Cf),v=Ys.dot(Cf);if(m>=0&&v<=m)return t.copy(a);const _=d*v-m*p;if(_<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(s).addScaledVector($s,c);bf.subVectors(e,l);const S=$s.dot(bf),E=Ys.dot(bf);if(E>=0&&S<=E)return t.copy(l);const w=S*p-d*E;if(w<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(Ys,f);const y=m*E-S*v;if(y<=0&&v-m>=0&&S-E>=0)return mg.subVectors(l,a),f=(v-m)/(v-m+(S-E)),t.copy(a).addScaledVector(mg,f);const x=1/(y+w+_);return c=w*x,f=_*x,t.copy(s).addScaledVector($s,c).addScaledVector(Ys,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Uf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,s,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=s,At.colorSpaceToWorking(this,a),this}setHSL(e,t,s,a=At.workingColorSpace){if(e=ih(e,1),t=Et(t,0,1),s=Et(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Uf(c,l,e+1/3),this.g=Uf(c,l,e),this.b=Uf(c,l,e-1/3)}return At.colorSpaceToWorking(this,a),this}setStyle(e,t=bn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const s=Zv[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return At.workingToColorSpace(En.copy(this),e),Math.round(Et(En.r*255,0,255))*65536+Math.round(Et(En.g*255,0,255))*256+Math.round(Et(En.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(En.copy(this),t);const s=En.r,a=En.g,l=En.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let d,p;const m=(f+c)/2;if(f===c)d=0,p=0;else{const v=c-f;switch(p=m<=.5?v/(c+f):v/(2-c-f),c){case s:d=(a-l)/v+(a<l?6:0);break;case a:d=(l-s)/v+2;break;case l:d=(s-a)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=m,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=bn){At.workingToColorSpace(En.copy(this),e);const t=En.r,s=En.g,a=En.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(Hl);const s=ao(br.h,Hl.h,t),a=ao(br.s,Hl.s,t),l=ao(br.l,Hl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Pt;Pt.NAMES=Zv;let mE=0;class Tu extends pa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=ia,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ia&&(s.blending=this.blending),this.side!==Or&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ed&&(s.blendSrc=this.blendSrc),this.blendDst!==td&&(s.blendDst=this.blendDst),this.blendEquation!==os&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==oa&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ah extends Tu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new ne,Vl=new Ct;let gE=0;class Ci{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=tg,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=ta(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=An(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),s=An(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),s=An(s,this.array),a=An(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),s=An(s,this.array),a=An(a,this.array),l=An(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tg&&(e.usage=this.usage),e}}class Jv extends Ci{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Qv extends Ci{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class fs extends Ci{constructor(e,t,s){super(new Float32Array(e),t,s)}}let vE=0;const Jn=new Yt,Nf=new Mn,qs=new ne,Xn=new Eo,to=new Eo,cn=new ne;class ms extends pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yv(e)?Qv:Jv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ht().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,s){return Jn.makeTranslation(e,t,s),this.applyMatrix4(Jn),this}scale(e,t,s){return Jn.makeScale(e,t,s),this.applyMatrix4(Jn),this}lookAt(e){return Nf.lookAt(e),Nf.updateMatrix(),this.applyMatrix4(Nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new fs(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const s=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];to.setFromBufferAttribute(f),this.morphTargetsRelative?(cn.addVectors(Xn.min,to.min),Xn.expandByPoint(cn),cn.addVectors(Xn.max,to.max),Xn.expandByPoint(cn)):(Xn.expandByPoint(to.min),Xn.expandByPoint(to.max))}Xn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)cn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(cn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)cn.fromBufferAttribute(f,p),d&&(qs.fromBufferAttribute(e,p),cn.add(qs)),a=Math.max(a,s.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let X=0;X<s.count;X++)f[X]=new ne,d[X]=new ne;const p=new ne,m=new ne,v=new ne,_=new Ct,S=new Ct,E=new Ct,w=new ne,y=new ne;function x(X,b,R){p.fromBufferAttribute(s,X),m.fromBufferAttribute(s,b),v.fromBufferAttribute(s,R),_.fromBufferAttribute(l,X),S.fromBufferAttribute(l,b),E.fromBufferAttribute(l,R),m.sub(p),v.sub(p),S.sub(_),E.sub(_);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(w.copy(m).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(H),y.copy(v).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(H),f[X].add(w),f[b].add(w),f[R].add(w),d[X].add(y),d[b].add(y),d[R].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let X=0,b=L.length;X<b;++X){const R=L[X],H=R.start,se=R.count;for(let Q=H,le=H+se;Q<le;Q+=3)x(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const P=new ne,C=new ne,k=new ne,N=new ne;function F(X){k.fromBufferAttribute(a,X),N.copy(k);const b=f[X];P.copy(b),P.sub(k.multiplyScalar(k.dot(b))).normalize(),C.crossVectors(N,b);const H=C.dot(d[X])<0?-1:1;c.setXYZW(X,P.x,P.y,P.z,H)}for(let X=0,b=L.length;X<b;++X){const R=L[X],H=R.start,se=R.count;for(let Q=H,le=H+se;Q<le;Q+=3)F(e.getX(Q+0)),F(e.getX(Q+1)),F(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ci(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const a=new ne,l=new ne,c=new ne,f=new ne,d=new ne,p=new ne,m=new ne,v=new ne;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),w=e.getX(_+1),y=e.getX(_+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),m.subVectors(c,l),v.subVectors(a,l),m.cross(v),f.fromBufferAttribute(s,E),d.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),f.add(m),d.add(m),p.add(m),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(w,d.x,d.y,d.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,l),v.subVectors(a,l),m.cross(v),s.setXYZ(_+0,m.x,m.y,m.z),s.setXYZ(_+1,m.x,m.y,m.z),s.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(f,d){const p=f.array,m=f.itemSize,v=f.normalized,_=new p.constructor(d.length*m);let S=0,E=0;for(let w=0,y=d.length;w<y;w++){f.isInterleavedBufferAttribute?S=d[w]*f.data.stride+f.offset:S=d[w]*m;for(let x=0;x<m;x++)_[E++]=p[S++]}return new Ci(_,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ms,s=this.index.array,a=this.attributes;for(const f in a){const d=a[f],p=e(d,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,v=p.length;m<v;m++){const _=p[m],S=e(_,s);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const p=s[d];e.data.attributes[d]=p.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let v=0,_=p.length;v<_;v++){const S=p[v];m.push(S.toJSON(e.data))}m.length>0&&(a[d]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],v=l[p];for(let _=0,S=v.length;_<S;_++)m.push(v[_].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gg=new Yt,ts=new lE,Gl=new sh,vg=new ne,Wl=new ne,Xl=new ne,jl=new ne,If=new ne,$l=new ne,_g=new ne,Yl=new ne;class Ri extends Mn{constructor(e=new ms,t=new ah){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){$l.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],v=l[d];m!==0&&(If.fromBufferAttribute(v,e),c?$l.addScaledVector(If,m):$l.addScaledVector(If.sub(t),m))}t.add($l)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Gl.copy(s.boundingSphere),Gl.applyMatrix4(l),ts.copy(e.ray).recast(e.near),!(Gl.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Gl,vg)===null||ts.origin.distanceToSquared(vg)>(e.far-e.near)**2))&&(gg.copy(l).invert(),ts.copy(e.ray).applyMatrix4(gg),!(s.boundingBox!==null&&ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const y=_[E],x=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,k=P;C<k;C+=3){const N=f.getX(C),F=f.getX(C+1),X=f.getX(C+2);a=ql(this,x,e,s,p,m,v,N,F,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=E,x=w;y<x;y+=3){const L=f.getX(y),P=f.getX(y+1),C=f.getX(y+2);a=ql(this,c,e,s,p,m,v,L,P,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const y=_[E],x=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,k=P;C<k;C+=3){const N=C,F=C+1,X=C+2;a=ql(this,x,e,s,p,m,v,N,F,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=E,x=w;y<x;y+=3){const L=y,P=y+1,C=y+2;a=ql(this,c,e,s,p,m,v,L,P,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function _E(i,e,t,s,a,l,c,f){let d;if(e.side===kn?d=s.intersectTriangle(c,l,a,!0,f):d=s.intersectTriangle(a,l,c,e.side===Or,f),d===null)return null;Yl.copy(f),Yl.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Yl);return p<t.near||p>t.far?null:{distance:p,point:Yl.clone(),object:i}}function ql(i,e,t,s,a,l,c,f,d,p){i.getVertexPosition(f,Wl),i.getVertexPosition(d,Xl),i.getVertexPosition(p,jl);const m=_E(i,e,t,s,Wl,Xl,jl,_g);if(m){const v=new ne;hi.getBarycoord(_g,Wl,Xl,jl,v),a&&(m.uv=hi.getInterpolatedAttribute(a,f,d,p,v,new Ct)),l&&(m.uv1=hi.getInterpolatedAttribute(l,f,d,p,v,new Ct)),c&&(m.normal=hi.getInterpolatedAttribute(c,f,d,p,v,new ne),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:d,c:p,normal:new ne,materialIndex:0};hi.getNormal(Wl,Xl,jl,_.normal),m.face=_,m.barycoord=v}return m}class ga extends ms{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],m=[],v=[];let _=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,a,c,2),E("x","z","y",1,-1,e,s,-t,a,c,3),E("x","y","z",1,-1,e,t,s,a,l,4),E("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(d),this.setAttribute("position",new fs(p,3)),this.setAttribute("normal",new fs(m,3)),this.setAttribute("uv",new fs(v,2));function E(w,y,x,L,P,C,k,N,F,X,b){const R=C/F,H=k/X,se=C/2,Q=k/2,le=N/2,pe=F+1,ue=X+1;let ve=0,z=0;const he=new ne;for(let ie=0;ie<ue;ie++){const I=ie*H-Q;for(let ae=0;ae<pe;ae++){const De=ae*R-se;he[w]=De*L,he[y]=I*P,he[x]=le,p.push(he.x,he.y,he.z),he[w]=0,he[y]=0,he[x]=N>0?1:-1,m.push(he.x,he.y,he.z),v.push(ae/F),v.push(1-ie/X),ve+=1}}for(let ie=0;ie<X;ie++)for(let I=0;I<F;I++){const ae=_+I+pe*ie,De=_+I+pe*(ie+1),Z=_+(I+1)+pe*(ie+1),me=_+(I+1)+pe*ie;d.push(ae,De,me),d.push(De,Z,me),z+=6}f.addGroup(S,z,b),S+=z,_+=ve}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fa(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const a=i[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Cn(i){const e={};for(let t=0;t<i.length;t++){const s=fa(i[t]);for(const a in s)e[a]=s[a]}return e}function xE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function e_(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const yE={clone:fa,merge:Cn};var SE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends Tu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SE,this.fragmentShader=EE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=xE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class t_ extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new ne,xg=new Ct,yg=new Ct;class ni extends t_{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,xg,yg),t.subVectors(yg,xg)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(so*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/d,t-=c.offsetY*s/p,a*=c.width/d,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Zs=1;class ME extends Mn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ni(Ks,Zs,e,t);a.layers=this.layers,this.add(a);const l=new ni(Ks,Zs,e,t);l.layers=this.layers,this.add(l);const c=new ni(Ks,Zs,e,t);c.layers=this.layers,this.add(c);const f=new ni(Ks,Zs,e,t);f.layers=this.layers,this.add(f);const d=new ni(Ks,Zs,e,t);d.layers=this.layers,this.add(d);const p=new ni(Ks,Zs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,d]=t;for(const p of t)this.remove(p);if(e===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===_u)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,m]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,d),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(t,m),e.setRenderTarget(v,_,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class n_ extends Ln{constructor(e=[],t=la,s,a,l,c,f,d,p,m){super(e,t,s,a,l,c,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wE extends hs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new n_(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ga(5,5,5),l=new kr({name:"CubemapFromEquirect",uniforms:fa(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Ir});l.uniforms.tEquirect.value=t;const c=new Ri(a,l),f=t.minFilter;return t.minFilter===us&&(t.minFilter=Ti),new ME(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}class no extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class Ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new no,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new no,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new no,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,s),x=this._getHandJoint(p,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=m.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new no;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class RE extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Of=new ne,AE=new ne,CE=new ht;class ss{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Of.subVectors(s,t).cross(AE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Of),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||CE.getNormalMatrix(e),a=this.coplanarPoint(Of).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new sh,bE=new Ct(.5,.5),Kl=new ne;class oh{constructor(e=new ss,t=new ss,s=new ss,a=new ss,l=new ss,c=new ss){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Zi){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],d=a[3],p=a[4],m=a[5],v=a[6],_=a[7],S=a[8],E=a[9],w=a[10],y=a[11],x=a[12],L=a[13],P=a[14],C=a[15];if(s[0].setComponents(d-l,_-p,y-S,C-x).normalize(),s[1].setComponents(d+l,_+p,y+S,C+x).normalize(),s[2].setComponents(d+c,_+m,y+E,C+L).normalize(),s[3].setComponents(d-c,_-m,y-E,C-L).normalize(),s[4].setComponents(d-f,_-v,y-w,C-P).normalize(),t===Zi)s[5].setComponents(d+f,_+v,y+w,C+P).normalize();else if(t===_u)s[5].setComponents(f,v,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=bE.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Kl.x=a.normal.x>0?e.max.x:e.min.x,Kl.y=a.normal.y>0?e.max.y:e.min.y,Kl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class i_ extends Ln{constructor(e,t,s=ds,a,l,c,f=pn,d=pn,p,m=fo,v=1){if(m!==fo&&m!==ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,a,l,c,f,d,m,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ru extends ms{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),d=Math.floor(a),p=f+1,m=d+1,v=e/f,_=t/d,S=[],E=[],w=[],y=[];for(let x=0;x<m;x++){const L=x*_-c;for(let P=0;P<p;P++){const C=P*v-l;E.push(C,-L,0),w.push(0,0,1),y.push(P/f),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let L=0;L<f;L++){const P=L+p*x,C=L+p*(x+1),k=L+1+p*(x+1),N=L+1+p*x;S.push(P,C,N),S.push(C,k,N)}this.setIndex(S),this.setAttribute("position",new fs(E,3)),this.setAttribute("normal",new fs(w,3)),this.setAttribute("uv",new fs(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ru(e.width,e.height,e.widthSegments,e.heightSegments)}}class PE extends Tu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LE extends Tu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kf={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class DE{constructor(e,t,s){const a=this;let l=!1,c=0,f=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){f++,l===!1&&a.onStart!==void 0&&a.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,v){return p.push(m,v),this},this.removeHandler=function(m){const v=p.indexOf(m);return v!==-1&&p.splice(v,2),this},this.getHandler=function(m){for(let v=0,_=p.length;v<_;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(m))return E}return null}}}const UE=new DE;class lh{constructor(e){this.manager=e!==void 0?e:UE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,l){s.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Js=new WeakMap;class NE extends lh{constructor(e){super(e)}load(e,t,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=kf.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let v=Js.get(c);v===void 0&&(v=[],Js.set(c,v)),v.push({onLoad:t,onError:a})}return c}const f=mo("img");function d(){m(),t&&t(this);const v=Js.get(this)||[];for(let _=0;_<v.length;_++){const S=v[_];S.onLoad&&S.onLoad(this)}Js.delete(this),l.manager.itemEnd(e)}function p(v){m(),a&&a(v),kf.remove(`image:${e}`);const _=Js.get(this)||[];for(let S=0;S<_.length;S++){const E=_[S];E.onError&&E.onError(v)}Js.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),kf.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class IE extends lh{constructor(e){super(e)}load(e,t,s,a){const l=new Ln,c=new NE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,a),l}}class FE extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Bf=new Yt,Sg=new ne,Eg=new ne;class OE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oh,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Sg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sg),Eg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eg),t.updateMatrixWorld(),Bf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bf),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Bf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class r_ extends t_{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kE extends OE{constructor(){super(new r_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BE extends FE{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new kE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zE extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Mg(i,e,t,s){const a=HE(s);switch(t){case Vv:return i*e;case Wv:return i*e/a.components*a.byteLength;case eh:return i*e/a.components*a.byteLength;case Xv:return i*e*2/a.components*a.byteLength;case th:return i*e*2/a.components*a.byteLength;case Gv:return i*e*3/a.components*a.byteLength;case pi:return i*e*4/a.components*a.byteLength;case nh:return i*e*4/a.components*a.byteLength;case ou:case lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uu:case cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hd:case md:return Math.max(i,16)*Math.max(e,8)/4;case dd:case pd:return Math.max(i,8)*Math.max(e,8)/2;case gd:case vd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _d:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Md:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Td:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fu:case Ud:case Nd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jv:case Id:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fd:case Od:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function HE(i){switch(i){case Pi:case Bv:return{byteLength:1,components:1};case uo:case zv:case yo:return{byteLength:2,components:1};case Jd:case Qd:return{byteLength:2,components:4};case ds:case Zd:case Ki:return{byteLength:4,components:1};case Hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd);function s_(){let i=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function VE(i){const e=new WeakMap;function t(f,d){const p=f.array,m=f.usage,v=p.byteLength,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,p,m),f.onUploadCallback();let S;if(p instanceof Float32Array)S=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=i.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=i.SHORT;else if(p instanceof Uint32Array)S=i.UNSIGNED_INT;else if(p instanceof Int32Array)S=i.INT;else if(p instanceof Int8Array)S=i.BYTE;else if(p instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,d,p){const m=d.array,v=d.updateRanges;if(i.bindBuffer(p,f),v.length===0)i.bufferSubData(p,0,m);else{v.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<v.length;S++){const E=v[_],w=v[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++_,v[_]=w)}v.length=_+1;for(let S=0,E=v.length;S<E;S++){const w=v[S];i.bufferSubData(p,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(i.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,d),p.version=f.version}}return{get:a,remove:l,update:c}}var GE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WE=`#ifdef USE_ALPHAHASH
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
#endif`,XE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qE=`#ifdef USE_AOMAP
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
#endif`,KE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZE=`#ifdef USE_BATCHING
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
#endif`,JE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nM=`#ifdef USE_IRIDESCENCE
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
#endif`,iM=`#ifdef USE_BUMPMAP
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
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dM=`#define PI 3.141592653589793
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
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pM=`vec3 transformedNormal = objectNormal;
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
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xM="gl_FragColor = linearToOutputTexel( gl_FragColor );",yM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
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
}`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
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
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zM=`PhysicalMaterial material;
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
#endif`,HM=`struct PhysicalMaterial {
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
}`,VM=`
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
#endif`,GM=`#if defined( RE_IndirectDiffuse )
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JM=`#if defined( USE_POINTS_UV )
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
#endif`,QM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rw=`#ifdef USE_MORPHTARGETS
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
#endif`,sw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ow=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fw=`#ifdef USE_NORMALMAP
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
#endif`,dw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_w=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ew=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ww=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Aw=`float getShadowMask() {
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
}`,Cw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bw=`#ifdef USE_SKINNING
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
#endif`,Pw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lw=`#ifdef USE_SKINNING
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
#endif`,Dw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fw=`#ifdef USE_TRANSMISSION
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
#endif`,Ow=`#ifdef USE_TRANSMISSION
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
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gw=`uniform sampler2D t2D;
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
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$w=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yw=`#include <common>
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
}`,qw=`#if DEPTH_PACKING == 3200
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
}`,Kw=`#define DISTANCE
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
}`,Zw=`#define DISTANCE
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
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`uniform float scale;
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
}`,tT=`uniform vec3 diffuse;
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
}`,nT=`#include <common>
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
}`,iT=`uniform vec3 diffuse;
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
}`,rT=`#define LAMBERT
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
}`,sT=`#define LAMBERT
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
}`,aT=`#define MATCAP
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
}`,oT=`#define MATCAP
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
}`,lT=`#define NORMAL
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
}`,uT=`#define NORMAL
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
}`,cT=`#define PHONG
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
}`,fT=`#define PHONG
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
}`,dT=`#define STANDARD
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
}`,hT=`#define STANDARD
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
}`,pT=`#define TOON
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
}`,mT=`#define TOON
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
}`,gT=`uniform float size;
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
}`,vT=`uniform vec3 diffuse;
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
}`,_T=`#include <common>
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
}`,xT=`uniform vec3 color;
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
}`,yT=`uniform float rotation;
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
}`,ST=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:GE,alphahash_pars_fragment:WE,alphamap_fragment:XE,alphamap_pars_fragment:jE,alphatest_fragment:$E,alphatest_pars_fragment:YE,aomap_fragment:qE,aomap_pars_fragment:KE,batching_pars_vertex:ZE,batching_vertex:JE,begin_vertex:QE,beginnormal_vertex:eM,bsdfs:tM,iridescence_fragment:nM,bumpmap_pars_fragment:iM,clipping_planes_fragment:rM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:oM,color_fragment:lM,color_pars_fragment:uM,color_pars_vertex:cM,color_vertex:fM,common:dM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:pM,displacementmap_pars_vertex:mM,displacementmap_vertex:gM,emissivemap_fragment:vM,emissivemap_pars_fragment:_M,colorspace_fragment:xM,colorspace_pars_fragment:yM,envmap_fragment:SM,envmap_common_pars_fragment:EM,envmap_pars_fragment:MM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:IM,envmap_vertex:TM,fog_vertex:RM,fog_pars_vertex:AM,fog_fragment:CM,fog_pars_fragment:bM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:LM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:UM,lights_pars_begin:NM,lights_toon_fragment:FM,lights_toon_pars_fragment:OM,lights_phong_fragment:kM,lights_phong_pars_fragment:BM,lights_physical_fragment:zM,lights_physical_pars_fragment:HM,lights_fragment_begin:VM,lights_fragment_maps:GM,lights_fragment_end:WM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:jM,logdepthbuf_pars_vertex:$M,logdepthbuf_vertex:YM,map_fragment:qM,map_pars_fragment:KM,map_particle_fragment:ZM,map_particle_pars_fragment:JM,metalnessmap_fragment:QM,metalnessmap_pars_fragment:ew,morphinstance_vertex:tw,morphcolor_vertex:nw,morphnormal_vertex:iw,morphtarget_pars_vertex:rw,morphtarget_vertex:sw,normal_fragment_begin:aw,normal_fragment_maps:ow,normal_pars_fragment:lw,normal_pars_vertex:uw,normal_vertex:cw,normalmap_pars_fragment:fw,clearcoat_normal_fragment_begin:dw,clearcoat_normal_fragment_maps:hw,clearcoat_pars_fragment:pw,iridescence_pars_fragment:mw,opaque_fragment:gw,packing:vw,premultiplied_alpha_fragment:_w,project_vertex:xw,dithering_fragment:yw,dithering_pars_fragment:Sw,roughnessmap_fragment:Ew,roughnessmap_pars_fragment:Mw,shadowmap_pars_fragment:ww,shadowmap_pars_vertex:Tw,shadowmap_vertex:Rw,shadowmask_pars_fragment:Aw,skinbase_vertex:Cw,skinning_pars_vertex:bw,skinning_vertex:Pw,skinnormal_vertex:Lw,specularmap_fragment:Dw,specularmap_pars_fragment:Uw,tonemapping_fragment:Nw,tonemapping_pars_fragment:Iw,transmission_fragment:Fw,transmission_pars_fragment:Ow,uv_pars_fragment:kw,uv_pars_vertex:Bw,uv_vertex:zw,worldpos_vertex:Hw,background_vert:Vw,background_frag:Gw,backgroundCube_vert:Ww,backgroundCube_frag:Xw,cube_vert:jw,cube_frag:$w,depth_vert:Yw,depth_frag:qw,distanceRGBA_vert:Kw,distanceRGBA_frag:Zw,equirect_vert:Jw,equirect_frag:Qw,linedashed_vert:eT,linedashed_frag:tT,meshbasic_vert:nT,meshbasic_frag:iT,meshlambert_vert:rT,meshlambert_frag:sT,meshmatcap_vert:aT,meshmatcap_frag:oT,meshnormal_vert:lT,meshnormal_frag:uT,meshphong_vert:cT,meshphong_frag:fT,meshphysical_vert:dT,meshphysical_frag:hT,meshtoon_vert:pT,meshtoon_frag:mT,points_vert:gT,points_frag:vT,shadow_vert:_T,shadow_frag:xT,sprite_vert:yT,sprite_frag:ST},Oe={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Mi={basic:{uniforms:Cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Cn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Cn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Cn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Cn([Oe.points,Oe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Cn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Cn([Oe.common,Oe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Cn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Cn([Oe.sprite,Oe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Cn([Oe.common,Oe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Cn([Oe.lights,Oe.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Mi.physical={uniforms:Cn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Zl={r:0,b:0,g:0},is=new Pn,ET=new Yt;function MT(i,e,t,s,a,l,c){const f=new Pt(0);let d=l===!0?0:1,p,m,v=null,_=0,S=null;function E(P){let C=P.isScene===!0?P.background:null;return C&&C.isTexture&&(C=(P.backgroundBlurriness>0?t:e).get(C)),C}function w(P){let C=!1;const k=E(P);k===null?x(f,d):k&&k.isColor&&(x(k,1),C=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(P,C){const k=E(C);k&&(k.isCubeTexture||k.mapping===wu)?(m===void 0&&(m=new Ri(new ga(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:fa(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),is.copy(C.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.material.uniforms.envMap.value=k,m.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(ET.makeRotationFromEuler(is)),m.material.toneMapped=At.getTransfer(k.colorSpace)!==Dt,(v!==k||_!==k.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,v=k,_=k.version,S=i.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new Ri(new Ru(2,2),new kr({name:"BackgroundMaterial",uniforms:fa(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=At.getTransfer(k.colorSpace)!==Dt,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(v!==k||_!==k.version||S!==i.toneMapping)&&(p.material.needsUpdate=!0,v=k,_=k.version,S=i.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,C){P.getRGB(Zl,e_(i)),s.buffers.color.setClear(Zl.r,Zl.g,Zl.b,C,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,C=1){f.set(P),d=C,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,x(f,d)},render:w,addToRenderList:y,dispose:L}}function wT(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},a=_(null);let l=a,c=!1;function f(R,H,se,Q,le){let pe=!1;const ue=v(Q,se,H);l!==ue&&(l=ue,p(l.object)),pe=S(R,Q,se,le),pe&&E(R,Q,se,le),le!==null&&e.update(le,i.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,C(R,H,se,Q),le!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function d(){return i.createVertexArray()}function p(R){return i.bindVertexArray(R)}function m(R){return i.deleteVertexArray(R)}function v(R,H,se){const Q=se.wireframe===!0;let le=s[R.id];le===void 0&&(le={},s[R.id]=le);let pe=le[H.id];pe===void 0&&(pe={},le[H.id]=pe);let ue=pe[Q];return ue===void 0&&(ue=_(d()),pe[Q]=ue),ue}function _(R){const H=[],se=[],Q=[];for(let le=0;le<t;le++)H[le]=0,se[le]=0,Q[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:se,attributeDivisors:Q,object:R,attributes:{},index:null}}function S(R,H,se,Q){const le=l.attributes,pe=H.attributes;let ue=0;const ve=se.getAttributes();for(const z in ve)if(ve[z].location>=0){const ie=le[z];let I=pe[z];if(I===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),ie===void 0||ie.attribute!==I||I&&ie.data!==I.data)return!0;ue++}return l.attributesNum!==ue||l.index!==Q}function E(R,H,se,Q){const le={},pe=H.attributes;let ue=0;const ve=se.getAttributes();for(const z in ve)if(ve[z].location>=0){let ie=pe[z];ie===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const I={};I.attribute=ie,ie&&ie.data&&(I.data=ie.data),le[z]=I,ue++}l.attributes=le,l.attributesNum=ue,l.index=Q}function w(){const R=l.newAttributes;for(let H=0,se=R.length;H<se;H++)R[H]=0}function y(R){x(R,0)}function x(R,H){const se=l.newAttributes,Q=l.enabledAttributes,le=l.attributeDivisors;se[R]=1,Q[R]===0&&(i.enableVertexAttribArray(R),Q[R]=1),le[R]!==H&&(i.vertexAttribDivisor(R,H),le[R]=H)}function L(){const R=l.newAttributes,H=l.enabledAttributes;for(let se=0,Q=H.length;se<Q;se++)H[se]!==R[se]&&(i.disableVertexAttribArray(se),H[se]=0)}function P(R,H,se,Q,le,pe,ue){ue===!0?i.vertexAttribIPointer(R,H,se,le,pe):i.vertexAttribPointer(R,H,se,Q,le,pe)}function C(R,H,se,Q){w();const le=Q.attributes,pe=se.getAttributes(),ue=H.defaultAttributeValues;for(const ve in pe){const z=pe[ve];if(z.location>=0){let he=le[ve];if(he===void 0&&(ve==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),ve==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),he!==void 0){const ie=he.normalized,I=he.itemSize,ae=e.get(he);if(ae===void 0)continue;const De=ae.buffer,Z=ae.type,me=ae.bytesPerElement,j=Z===i.INT||Z===i.UNSIGNED_INT||he.gpuType===Zd;if(he.isInterleavedBufferAttribute){const fe=he.data,ce=fe.stride,be=he.offset;if(fe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<z.locationSize;Pe++)x(z.location+Pe,fe.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Pe=0;Pe<z.locationSize;Pe++)y(z.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,De);for(let Pe=0;Pe<z.locationSize;Pe++)P(z.location+Pe,I/z.locationSize,Z,ie,ce*me,(be+I/z.locationSize*Pe)*me,j)}else{if(he.isInstancedBufferAttribute){for(let fe=0;fe<z.locationSize;fe++)x(z.location+fe,he.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let fe=0;fe<z.locationSize;fe++)y(z.location+fe);i.bindBuffer(i.ARRAY_BUFFER,De);for(let fe=0;fe<z.locationSize;fe++)P(z.location+fe,I/z.locationSize,Z,ie,I*me,I/z.locationSize*fe*me,j)}}else if(ue!==void 0){const ie=ue[ve];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(z.location,ie);break;case 3:i.vertexAttrib3fv(z.location,ie);break;case 4:i.vertexAttrib4fv(z.location,ie);break;default:i.vertexAttrib1fv(z.location,ie)}}}}L()}function k(){X();for(const R in s){const H=s[R];for(const se in H){const Q=H[se];for(const le in Q)m(Q[le].object),delete Q[le];delete H[se]}delete s[R]}}function N(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const se in H){const Q=H[se];for(const le in Q)m(Q[le].object),delete Q[le];delete H[se]}delete s[R.id]}function F(R){for(const H in s){const se=s[H];if(se[R.id]===void 0)continue;const Q=se[R.id];for(const le in Q)m(Q[le].object),delete Q[le];delete se[R.id]}}function X(){b(),c=!0,l!==a&&(l=a,p(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:b,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}function TT(i,e,t){let s;function a(p){s=p}function l(p,m){i.drawArrays(s,p,m),t.update(m,s,1)}function c(p,m,v){v!==0&&(i.drawArraysInstanced(s,p,m,v),t.update(m,s,v))}function f(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,v);let S=0;for(let E=0;E<v;E++)S+=m[E];t.update(S,s,1)}function d(p,m,v,_){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],m[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,m,0,_,0,v);let E=0;for(let w=0;w<v;w++)E+=m[w]*_[w];t.update(E,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function RT(i,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==pi&&s.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const X=F===yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Pi&&s.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ki&&!X)}function d(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=d(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const v=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:C,vertexTextures:k,maxSamples:N}}function AT(i){const e=this;let t=null,s=0,a=!1,l=!1;const c=new ss,f=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||s!==0||a;return a=_,s=v.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=m(v,_,0)},this.setState=function(v,_,S){const E=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,x=i.get(v);if(!a||E===null||E.length===0||l&&!y)l?m(null):p();else{const L=l?0:s,P=L*4;let C=x.clippingState||null;d.value=C,C=m(E,_,P,S);for(let k=0;k!==P;++k)C[k]=t[k];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(v,_,S,E){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=d.value,E!==!0||y===null){const x=S+w*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,C=S;P!==w;++P,C+=4)c.copy(v[P]).applyMatrix4(L,f),c.normal.toArray(y,C),y[C+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function CT(i){let e=new WeakMap;function t(c,f){return f===ud?c.mapping=la:f===cd&&(c.mapping=ua),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===ud||f===cd)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new wE(d.height);return p.fromEquirectangularTexture(i,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const na=4,wg=[.125,.215,.35,.446,.526,.582],ls=20,zf=new r_,Tg=new Pt;let Hf=null,Vf=0,Gf=0,Wf=!1;const as=(1+Math.sqrt(5))/2,Qs=1/as,Rg=[new ne(-as,Qs,0),new ne(as,Qs,0),new ne(-Qs,0,as),new ne(Qs,0,as),new ne(0,as,-Qs),new ne(0,as,Qs),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],bT=new ne;class Ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100,l={}){const{size:c=256,position:f=bT}=l;Hf=this._renderer.getRenderTarget(),Vf=this._renderer.getActiveCubeFace(),Gf=this._renderer.getActiveMipmapLevel(),Wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,s,a,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hf,Vf,Gf),this._renderer.xr.enabled=Wf,e.scissorTest=!1,Jl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===la||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hf=this._renderer.getRenderTarget(),Vf=this._renderer.getActiveCubeFace(),Gf=this._renderer.getActiveMipmapLevel(),Wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:yo,format:pi,colorSpace:ca,depthBuffer:!1},a=Cg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PT(l)),this._blurMaterial=LT(l,e,t)}return a}_compileMaterial(e){const t=new Ri(this._lodPlanes[0],e);this._renderer.compile(t,zf)}_sceneToCubeUV(e,t,s,a,l){const d=new ni(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(Tg),v.toneMapping=Ji,v.autoClear=!1;const E=new ah({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),w=new Ri(new ga,E);let y=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,y=!0):(E.color.copy(Tg),y=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[L],l.y,l.z)):P===1?(d.up.set(0,0,p[L]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[L],l.z)):(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[L]));const C=this._cubeSize;Jl(a,P*C,L>2?C:0,C,C),v.setRenderTarget(a),y&&v.render(w,d),v.render(e,d)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=S,v.autoClear=_,e.background=x}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===la||e.mapping===ua;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Ri(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Jl(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(c,zf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Rg[(a-l-1)%Rg.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Ri(this._lodPlanes[a],p),_=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ls-1),w=l/E,y=isFinite(l)?1+Math.floor(m*w):ls;y>ls&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ls}`);const x=[];let L=0;for(let F=0;F<ls;++F){const X=F/w,b=Math.exp(-X*X/2);x.push(b),F===0?L+=b:F<y&&(L+=2*b)}for(let F=0;F<x.length;F++)x[F]=x[F]/L;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:P}=this;_.dTheta.value=E,_.mipInt.value=P-s;const C=this._sizeLods[a],k=3*C*(a>P-na?a-P+na:0),N=4*(this._cubeSize-C);Jl(t,k,N,3*C,2*C),d.setRenderTarget(t),d.render(v,zf)}}function PT(i){const e=[],t=[],s=[];let a=i;const l=i-na+1+wg.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let d=1/f;c>i-na?d=wg[c-i+na-1]:c===0&&(d=0),s.push(d);const p=1/(f-2),m=-p,v=1+p,_=[m,m,v,m,v,v,m,m,v,v,m,v],S=6,E=6,w=3,y=2,x=1,L=new Float32Array(w*E*S),P=new Float32Array(y*E*S),C=new Float32Array(x*E*S);for(let N=0;N<S;N++){const F=N%3*2/3-1,X=N>2?0:-1,b=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];L.set(b,w*E*N),P.set(_,y*E*N);const R=[N,N,N,N,N,N];C.set(R,x*E*N)}const k=new ms;k.setAttribute("position",new Ci(L,w)),k.setAttribute("uv",new Ci(P,y)),k.setAttribute("faceIndex",new Ci(C,x)),e.push(k),a>na&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Cg(i,e,t){const s=new hs(i,e,t);return s.texture.mapping=wu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Jl(i,e,t,s,a){i.viewport.set(e,t,s,a),i.scissor.set(e,t,s,a)}function LT(i,e,t){const s=new Float32Array(ls),a=new ne(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function bg(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Pg(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}function DT(i){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const d=f.mapping,p=d===ud||d===cd,m=d===la||d===ua;if(p||m){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new Ag(i)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||m&&S&&a(S)?(t===null&&(t=new Ag(i)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function UT(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&ra("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function NT(i,e,t,s){const a={},l=new WeakMap;function c(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete a[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(v,_){return a[_.id]===!0||(_.addEventListener("dispose",c),a[_.id]=!0,t.memory.geometries++),_}function d(v){const _=v.attributes;for(const S in _)e.update(_[S],i.ARRAY_BUFFER)}function p(v){const _=[],S=v.index,E=v.attributes.position;let w=0;if(S!==null){const L=S.array;w=S.version;for(let P=0,C=L.length;P<C;P+=3){const k=L[P+0],N=L[P+1],F=L[P+2];_.push(k,N,N,F,F,k)}}else if(E!==void 0){const L=E.array;w=E.version;for(let P=0,C=L.length/3-1;P<C;P+=3){const k=P+0,N=P+1,F=P+2;_.push(k,N,N,F,F,k)}}else return;const y=new(Yv(_)?Qv:Jv)(_,1);y.version=w;const x=l.get(v);x&&e.remove(x),l.set(v,y)}function m(v){const _=l.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function IT(i,e,t){let s;function a(_){s=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function d(_,S){i.drawElements(s,S,l,_*c),t.update(S,s,1)}function p(_,S,E){E!==0&&(i.drawElementsInstanced(s,S,l,_*c,E),t.update(S,s,E))}function m(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,_,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];t.update(y,s,1)}function v(_,S,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)p(_[x]/c,S[x],w[x]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,_,0,w,0,E);let x=0;for(let L=0;L<E;L++)x+=S[L]*w[L];t.update(x,s,1)}}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function FT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=f*(l/3);break;case i.LINES:t.lines+=f*(l/2);break;case i.LINE_STRIP:t.lines+=f*(l-1);break;case i.LINE_LOOP:t.lines+=f*l;break;case i.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function OT(i,e,t){const s=new WeakMap,a=new $t;function l(c,f,d){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let _=s.get(f);if(_===void 0||_.count!==v){let b=function(){F.dispose(),s.delete(f),f.removeEventListener("dispose",b)};_!==void 0&&_.texture.dispose();const S=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;S===!0&&(P=1),E===!0&&(P=2),w===!0&&(P=3);let C=f.attributes.position.count*P,k=1;C>e.maxTextureSize&&(k=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const N=new Float32Array(C*k*4*v),F=new qv(N,C,k,v);F.type=Ki,F.needsUpdate=!0;const X=P*4;for(let R=0;R<v;R++){const H=y[R],se=x[R],Q=L[R],le=C*k*4*R;for(let pe=0;pe<H.count;pe++){const ue=pe*X;S===!0&&(a.fromBufferAttribute(H,pe),N[le+ue+0]=a.x,N[le+ue+1]=a.y,N[le+ue+2]=a.z,N[le+ue+3]=0),E===!0&&(a.fromBufferAttribute(se,pe),N[le+ue+4]=a.x,N[le+ue+5]=a.y,N[le+ue+6]=a.z,N[le+ue+7]=0),w===!0&&(a.fromBufferAttribute(Q,pe),N[le+ue+8]=a.x,N[le+ue+9]=a.y,N[le+ue+10]=a.z,N[le+ue+11]=Q.itemSize===4?a.w:1)}}_={count:v,texture:F,size:new Ct(C,k)},s.set(f,_),f.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let S=0;for(let w=0;w<p.length;w++)S+=p[w];const E=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:l}}function kT(i,e,t,s){let a=new WeakMap;function l(d){const p=s.render.frame,m=d.geometry,v=e.get(d,m);if(a.get(v)!==p&&(e.update(v),a.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==p&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),a.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return v}function c(){a=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const a_=new Ln,Lg=new i_(1,1),o_=new qv,l_=new aE,u_=new n_,Dg=[],Ug=[],Ng=new Float32Array(16),Ig=new Float32Array(9),Fg=new Float32Array(4);function va(i,e,t){const s=i[0];if(s<=0||s>0)return i;const a=e*t;let l=Dg[a];if(l===void 0&&(l=new Float32Array(a),Dg[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,i[c].toArray(l,f)}return l}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Au(i,e){let t=Ug[e];t===void 0&&(t=new Int32Array(e),Ug[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function BT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function HT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function VT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function GT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,s))return;Fg.set(s),i.uniformMatrix2fv(this.addr,!1,Fg),nn(t,s)}}function WT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,s))return;Ig.set(s),i.uniformMatrix3fv(this.addr,!1,Ig),nn(t,s)}}function XT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,s))return;Ng.set(s),i.uniformMatrix4fv(this.addr,!1,Ng),nn(t,s)}}function jT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $T(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function YT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function qT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function KT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ZT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function JT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function QT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function e1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a);let l;this.type===i.SAMPLER_2D_SHADOW?(Lg.compareFunction=$v,l=Lg):l=a_,t.setTexture2D(e||l,a)}function t1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||l_,a)}function n1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||u_,a)}function i1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||o_,a)}function r1(i){switch(i){case 5126:return BT;case 35664:return zT;case 35665:return HT;case 35666:return VT;case 35674:return GT;case 35675:return WT;case 35676:return XT;case 5124:case 35670:return jT;case 35667:case 35671:return $T;case 35668:case 35672:return YT;case 35669:case 35673:return qT;case 5125:return KT;case 36294:return ZT;case 36295:return JT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}function s1(i,e){i.uniform1fv(this.addr,e)}function a1(i,e){const t=va(e,this.size,2);i.uniform2fv(this.addr,t)}function o1(i,e){const t=va(e,this.size,3);i.uniform3fv(this.addr,t)}function l1(i,e){const t=va(e,this.size,4);i.uniform4fv(this.addr,t)}function u1(i,e){const t=va(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function c1(i,e){const t=va(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function f1(i,e){const t=va(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function d1(i,e){i.uniform1iv(this.addr,e)}function h1(i,e){i.uniform2iv(this.addr,e)}function p1(i,e){i.uniform3iv(this.addr,e)}function m1(i,e){i.uniform4iv(this.addr,e)}function g1(i,e){i.uniform1uiv(this.addr,e)}function v1(i,e){i.uniform2uiv(this.addr,e)}function _1(i,e){i.uniform3uiv(this.addr,e)}function x1(i,e){i.uniform4uiv(this.addr,e)}function y1(i,e,t){const s=this.cache,a=e.length,l=Au(t,a);tn(s,l)||(i.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||a_,l[c])}function S1(i,e,t){const s=this.cache,a=e.length,l=Au(t,a);tn(s,l)||(i.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||l_,l[c])}function E1(i,e,t){const s=this.cache,a=e.length,l=Au(t,a);tn(s,l)||(i.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||u_,l[c])}function M1(i,e,t){const s=this.cache,a=e.length,l=Au(t,a);tn(s,l)||(i.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||o_,l[c])}function w1(i){switch(i){case 5126:return s1;case 35664:return a1;case 35665:return o1;case 35666:return l1;case 35674:return u1;case 35675:return c1;case 35676:return f1;case 5124:case 35670:return d1;case 35667:case 35671:return h1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return v1;case 36295:return _1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return M1}}class T1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=r1(t.type)}}class R1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w1(t.type)}}class A1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const Xf=/(\w+)(\])?(\[|\.)?/g;function Og(i,e){i.seq.push(e),i.map[e.id]=e}function C1(i,e,t){const s=i.name,a=s.length;for(Xf.lastIndex=0;;){const l=Xf.exec(s),c=Xf.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===a){Og(t,p===void 0?new T1(f,i,e):new R1(f,i,e));break}else{let v=t.map[f];v===void 0&&(v=new A1(f),Og(t,v)),t=v}}}class du{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);C1(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=s[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function kg(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const b1=37297;let P1=0;function L1(i,e){const t=i.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const Bg=new ht;function D1(i){At._getMatrix(Bg,At.workingColorSpace,i);const e=`mat3( ${Bg.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(i)){case vu:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zg(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+L1(i.getShaderSource(e),c)}else return a}function U1(i,e){const t=D1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function N1(i,e){let t;switch(e){case mS:t="Linear";break;case gS:t="Reinhard";break;case vS:t="Cineon";break;case _S:t="ACESFilmic";break;case yS:t="AgX";break;case SS:t="Neutral";break;case xS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ql=new ne;function I1(){At.getLuminanceCoefficients(Ql);const i=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function O1(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function k1(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=i.getActiveAttrib(e,a),c=l.name;let f=1;l.type===i.FLOAT_MAT2&&(f=2),l.type===i.FLOAT_MAT3&&(f=3),l.type===i.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:f}}return t}function io(i){return i!==""}function Hg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B1=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(i){return i.replace(B1,H1)}const z1=new Map;function H1(i,e){let t=vt[e];if(t===void 0){const s=z1.get(e);if(s!==void 0)t=vt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return kd(t)}const V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gg(i){return i.replace(V1,G1)}function G1(i,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Wg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function W1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fv?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yy?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function X1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case la:case ua:e="ENVMAP_TYPE_CUBE";break;case wu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j1(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ua&&(e="ENVMAP_MODE_REFRACTION"),e}function $1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ov:e="ENVMAP_BLENDING_MULTIPLY";break;case hS:e="ENVMAP_BLENDING_MIX";break;case pS:e="ENVMAP_BLENDING_ADD";break}return e}function Y1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function q1(i,e,t,s){const a=i.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=W1(t),p=X1(t),m=j1(t),v=$1(t),_=Y1(t),S=F1(t),E=O1(l),w=a.createProgram();let y,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(io).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(io).join(`
`),x.length>0&&(x+=`
`)):(y=[Wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),x=[Wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?vt.tonemapping_pars_fragment:"",t.toneMapping!==Ji?N1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,U1("linearToOutputTexel",t.outputColorSpace),I1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(io).join(`
`)),c=kd(c),c=Hg(c,t),c=Vg(c,t),f=kd(f),f=Hg(f,t),f=Vg(f,t),c=Gg(c),f=Gg(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=L+y+c,C=L+x+f,k=kg(a,a.VERTEX_SHADER,P),N=kg(a,a.FRAGMENT_SHADER,C);a.attachShader(w,k),a.attachShader(w,N),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(H){if(i.debug.checkShaderErrors){const se=a.getProgramInfoLog(w).trim(),Q=a.getShaderInfoLog(k).trim(),le=a.getShaderInfoLog(N).trim();let pe=!0,ue=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(pe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,w,k,N);else{const ve=zg(a,k,"vertex"),z=zg(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+se+`
`+ve+`
`+z)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(Q===""||le==="")&&(ue=!1);ue&&(H.diagnostics={runnable:pe,programLog:se,vertexShader:{log:Q,prefix:y},fragmentShader:{log:le,prefix:x}})}a.deleteShader(k),a.deleteShader(N),X=new du(a,w),b=k1(a,w)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,b1)),R},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=N,this}let K1=0;class Z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new J1(e),t.set(e,s)),s}}class J1{constructor(e){this.id=K1++,this.code=e,this.usedTimes=0}}function Q1(i,e,t,s,a,l,c){const f=new Kv,d=new Z1,p=new Set,m=[],v=a.logarithmicDepthBuffer,_=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function y(b,R,H,se,Q){const le=se.fog,pe=Q.geometry,ue=b.isMeshStandardMaterial?se.environment:null,ve=(b.isMeshStandardMaterial?t:e).get(b.envMap||ue),z=ve&&ve.mapping===wu?ve.image.height:null,he=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const ie=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,I=ie!==void 0?ie.length:0;let ae=0;pe.morphAttributes.position!==void 0&&(ae=1),pe.morphAttributes.normal!==void 0&&(ae=2),pe.morphAttributes.color!==void 0&&(ae=3);let De,Z,me,j;if(he){const ft=Mi[he];De=ft.vertexShader,Z=ft.fragmentShader}else De=b.vertexShader,Z=b.fragmentShader,d.update(b),me=d.getVertexShaderID(b),j=d.getFragmentShaderID(b);const fe=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),be=Q.isInstancedMesh===!0,Pe=Q.isBatchedMesh===!0,tt=!!b.map,pt=!!b.matcap,dt=!!ve,O=!!b.aoMap,Xt=!!b.lightMap,_t=!!b.bumpMap,Mt=!!b.normalMap,We=!!b.displacementMap,mt=!!b.emissiveMap,qe=!!b.metalnessMap,st=!!b.roughnessMap,Ut=b.anisotropy>0,D=b.clearcoat>0,T=b.dispersion>0,ee=b.iridescence>0,ge=b.sheen>0,xe=b.transmission>0,de=Ut&&!!b.anisotropyMap,Ke=D&&!!b.clearcoatMap,Le=D&&!!b.clearcoatNormalMap,Ie=D&&!!b.clearcoatRoughnessMap,Ze=ee&&!!b.iridescenceMap,ye=ee&&!!b.iridescenceThicknessMap,Be=ge&&!!b.sheenColorMap,nt=ge&&!!b.sheenRoughnessMap,Qe=!!b.specularMap,Ue=!!b.specularColorMap,at=!!b.specularIntensityMap,V=xe&&!!b.transmissionMap,Ne=xe&&!!b.thicknessMap,Se=!!b.gradientMap,ke=!!b.alphaMap,we=b.alphaTest>0,_e=!!b.alphaHash,Ae=!!b.extensions;let $e=Ji;b.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&($e=i.toneMapping);const ct={shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:De,fragmentShader:Z,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Pe,batchingColor:Pe&&Q._colorsTexture!==null,instancing:be,instancingColor:be&&Q.instanceColor!==null,instancingMorph:be&&Q.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ca,alphaToCoverage:!!b.alphaToCoverage,map:tt,matcap:pt,envMap:dt,envMapMode:dt&&ve.mapping,envMapCubeUVHeight:z,aoMap:O,lightMap:Xt,bumpMap:_t,normalMap:Mt,displacementMap:_&&We,emissiveMap:mt,normalMapObjectSpace:Mt&&b.normalMapType===RS,normalMapTangentSpace:Mt&&b.normalMapType===TS,metalnessMap:qe,roughnessMap:st,anisotropy:Ut,anisotropyMap:de,clearcoat:D,clearcoatMap:Ke,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ie,dispersion:T,iridescence:ee,iridescenceMap:Ze,iridescenceThicknessMap:ye,sheen:ge,sheenColorMap:Be,sheenRoughnessMap:nt,specularMap:Qe,specularColorMap:Ue,specularIntensityMap:at,transmission:xe,transmissionMap:V,thicknessMap:Ne,gradientMap:Se,opaque:b.transparent===!1&&b.blending===ia&&b.alphaToCoverage===!1,alphaMap:ke,alphaTest:we,alphaHash:_e,combine:b.combine,mapUv:tt&&w(b.map.channel),aoMapUv:O&&w(b.aoMap.channel),lightMapUv:Xt&&w(b.lightMap.channel),bumpMapUv:_t&&w(b.bumpMap.channel),normalMapUv:Mt&&w(b.normalMap.channel),displacementMapUv:We&&w(b.displacementMap.channel),emissiveMapUv:mt&&w(b.emissiveMap.channel),metalnessMapUv:qe&&w(b.metalnessMap.channel),roughnessMapUv:st&&w(b.roughnessMap.channel),anisotropyMapUv:de&&w(b.anisotropyMap.channel),clearcoatMapUv:Ke&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Le&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:nt&&w(b.sheenRoughnessMap.channel),specularMapUv:Qe&&w(b.specularMap.channel),specularColorMapUv:Ue&&w(b.specularColorMap.channel),specularIntensityMapUv:at&&w(b.specularIntensityMap.channel),transmissionMapUv:V&&w(b.transmissionMap.channel),thicknessMapUv:Ne&&w(b.thicknessMap.channel),alphaMapUv:ke&&w(b.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(Mt||Ut),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!pe.attributes.uv&&(tt||ke),fog:!!le,useFog:b.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:ce,skinning:Q.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ae,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:tt&&b.map.isVideoTexture===!0&&At.getTransfer(b.map.colorSpace)===Dt,decodeVideoTextureEmissive:mt&&b.emissiveMap.isVideoTexture===!0&&At.getTransfer(b.emissiveMap.colorSpace)===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wi,flipSided:b.side===kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ae&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&b.extensions.multiDraw===!0||Pe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ct.vertexUv1s=p.has(1),ct.vertexUv2s=p.has(2),ct.vertexUv3s=p.has(3),p.clear(),ct}function x(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)R.push(H),R.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(L(R,b),P(R,b),R.push(i.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function L(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function P(b,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function C(b){const R=E[b.type];let H;if(R){const se=Mi[R];H=yE.clone(se.uniforms)}else H=b.uniforms;return H}function k(b,R){let H;for(let se=0,Q=m.length;se<Q;se++){const le=m[se];if(le.cacheKey===R){H=le,++H.usedTimes;break}}return H===void 0&&(H=new q1(i,R,b,l),m.push(H)),H}function N(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),b.destroy()}}function F(b){d.remove(b)}function X(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:k,releaseProgram:N,releaseShaderCache:F,programs:m,dispose:X}}function eR(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let f=i.get(c);return f===void 0&&(f={},i.set(c,f)),f}function s(c){i.delete(c)}function a(c,f,d){i.get(c)[f]=d}function l(){i=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function tR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jg(){const i=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(v,_,S,E,w,y){let x=i[e];return x===void 0?(x={id:v.id,object:v,geometry:_,material:S,groupOrder:E,renderOrder:v.renderOrder,z:w,group:y},i[e]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=w,x.group=y),e++,x}function f(v,_,S,E,w,y){const x=c(v,_,S,E,w,y);S.transmission>0?s.push(x):S.transparent===!0?a.push(x):t.push(x)}function d(v,_,S,E,w,y){const x=c(v,_,S,E,w,y);S.transmission>0?s.unshift(x):S.transparent===!0?a.unshift(x):t.unshift(x)}function p(v,_){t.length>1&&t.sort(v||tR),s.length>1&&s.sort(_||Xg),a.length>1&&a.sort(_||Xg)}function m(){for(let v=e,_=i.length;v<_;v++){const S=i[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:d,finish:m,sort:p}}function nR(){let i=new WeakMap;function e(s,a){const l=i.get(s);let c;return l===void 0?(c=new jg,i.set(s,[c])):a>=l.length?(c=new jg,l.push(c)):c=l[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function iR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Pt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return i[e.id]=t,t}}}function rR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sR=0;function aR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function oR(i){const e=new iR,t=rR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ne);const a=new ne,l=new Yt,c=new Yt;function f(p){let m=0,v=0,_=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let S=0,E=0,w=0,y=0,x=0,L=0,P=0,C=0,k=0,N=0,F=0;p.sort(aR);for(let b=0,R=p.length;b<R;b++){const H=p[b],se=H.color,Q=H.intensity,le=H.distance,pe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=se.r*Q,v+=se.g*Q,_+=se.b*Q;else if(H.isLightProbe){for(let ue=0;ue<9;ue++)s.probe[ue].addScaledVector(H.sh.coefficients[ue],Q);F++}else if(H.isDirectionalLight){const ue=e.get(H);if(ue.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ve=H.shadow,z=t.get(H);z.shadowIntensity=ve.intensity,z.shadowBias=ve.bias,z.shadowNormalBias=ve.normalBias,z.shadowRadius=ve.radius,z.shadowMapSize=ve.mapSize,s.directionalShadow[S]=z,s.directionalShadowMap[S]=pe,s.directionalShadowMatrix[S]=H.shadow.matrix,L++}s.directional[S]=ue,S++}else if(H.isSpotLight){const ue=e.get(H);ue.position.setFromMatrixPosition(H.matrixWorld),ue.color.copy(se).multiplyScalar(Q),ue.distance=le,ue.coneCos=Math.cos(H.angle),ue.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ue.decay=H.decay,s.spot[w]=ue;const ve=H.shadow;if(H.map&&(s.spotLightMap[k]=H.map,k++,ve.updateMatrices(H),H.castShadow&&N++),s.spotLightMatrix[w]=ve.matrix,H.castShadow){const z=t.get(H);z.shadowIntensity=ve.intensity,z.shadowBias=ve.bias,z.shadowNormalBias=ve.normalBias,z.shadowRadius=ve.radius,z.shadowMapSize=ve.mapSize,s.spotShadow[w]=z,s.spotShadowMap[w]=pe,C++}w++}else if(H.isRectAreaLight){const ue=e.get(H);ue.color.copy(se).multiplyScalar(Q),ue.halfWidth.set(H.width*.5,0,0),ue.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=ue,y++}else if(H.isPointLight){const ue=e.get(H);if(ue.color.copy(H.color).multiplyScalar(H.intensity),ue.distance=H.distance,ue.decay=H.decay,H.castShadow){const ve=H.shadow,z=t.get(H);z.shadowIntensity=ve.intensity,z.shadowBias=ve.bias,z.shadowNormalBias=ve.normalBias,z.shadowRadius=ve.radius,z.shadowMapSize=ve.mapSize,z.shadowCameraNear=ve.camera.near,z.shadowCameraFar=ve.camera.far,s.pointShadow[E]=z,s.pointShadowMap[E]=pe,s.pointShadowMatrix[E]=H.shadow.matrix,P++}s.point[E]=ue,E++}else if(H.isHemisphereLight){const ue=e.get(H);ue.skyColor.copy(H.color).multiplyScalar(Q),ue.groundColor.copy(H.groundColor).multiplyScalar(Q),s.hemi[x]=ue,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=v,s.ambient[2]=_;const X=s.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==w||X.rectAreaLength!==y||X.hemiLength!==x||X.numDirectionalShadows!==L||X.numPointShadows!==P||X.numSpotShadows!==C||X.numSpotMaps!==k||X.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=y,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=C+k-N,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=F,X.directionalLength=S,X.pointLength=E,X.spotLength=w,X.rectAreaLength=y,X.hemiLength=x,X.numDirectionalShadows=L,X.numPointShadows=P,X.numSpotShadows=C,X.numSpotMaps=k,X.numLightProbes=F,s.version=sR++)}function d(p,m){let v=0,_=0,S=0,E=0,w=0;const y=m.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const P=p[x];if(P.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(P.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const C=s.point[_];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),_++}else if(P.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:f,setupView:d,state:s}}function $g(i){const e=new oR(i),t=[],s=[];function a(m){p.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function lR(i){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new $g(i),e.set(a,[f])):l>=c.length?(f=new $g(i),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const uR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cR=`uniform sampler2D shadow_pass;
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
}`;function fR(i,e,t){let s=new oh;const a=new Ct,l=new Ct,c=new $t,f=new PE({depthPacking:wS}),d=new LE,p={},m=t.maxTextureSize,v={[Or]:kn,[kn]:Or,[wi]:wi},_=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:uR,fragmentShader:cR}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new ms;E.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ri(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fv;let x=this.type;this.render=function(N,F,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const b=i.getRenderTarget(),R=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),se=i.state;se.setBlending(Ir),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const Q=x!==$i&&this.type===$i,le=x===$i&&this.type!==$i;for(let pe=0,ue=N.length;pe<ue;pe++){const ve=N[pe],z=ve.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ve,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const he=z.getFrameExtents();if(a.multiply(he),l.copy(z.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/he.x),a.x=l.x*he.x,z.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/he.y),a.y=l.y*he.y,z.mapSize.y=l.y)),z.map===null||Q===!0||le===!0){const I=this.type!==$i?{minFilter:pn,magFilter:pn}:{};z.map!==null&&z.map.dispose(),z.map=new hs(a.x,a.y,I),z.map.texture.name=ve.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ie=z.getViewportCount();for(let I=0;I<ie;I++){const ae=z.getViewport(I);c.set(l.x*ae.x,l.y*ae.y,l.x*ae.z,l.y*ae.w),se.viewport(c),z.updateMatrices(ve,I),s=z.getFrustum(),C(F,X,z.camera,ve,this.type)}z.isPointLightShadow!==!0&&this.type===$i&&L(z,X),z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,i.setRenderTarget(b,R,H)};function L(N,F){const X=e.update(w);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new hs(a.x,a.y)),_.uniforms.shadow_pass.value=N.map.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(F,null,X,_,w,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(F,null,X,S,w,null)}function P(N,F,X,b){let R=null;const H=X.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)R=H;else if(R=X.isPointLight===!0?d:f,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const se=R.uuid,Q=F.uuid;let le=p[se];le===void 0&&(le={},p[se]=le);let pe=le[Q];pe===void 0&&(pe=R.clone(),le[Q]=pe,F.addEventListener("dispose",k)),R=pe}if(R.visible=F.visible,R.wireframe=F.wireframe,b===$i?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:v[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const se=i.properties.get(R);se.light=X}return R}function C(N,F,X,b,R){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===$i)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,N.matrixWorld);const Q=e.update(N),le=N.material;if(Array.isArray(le)){const pe=Q.groups;for(let ue=0,ve=pe.length;ue<ve;ue++){const z=pe[ue],he=le[z.materialIndex];if(he&&he.visible){const ie=P(N,he,b,R);N.onBeforeShadow(i,N,F,X,Q,ie,z),i.renderBufferDirect(X,null,Q,ie,N,z),N.onAfterShadow(i,N,F,X,Q,ie,z)}}}else if(le.visible){const pe=P(N,le,b,R);N.onBeforeShadow(i,N,F,X,Q,pe,null),i.renderBufferDirect(X,null,Q,pe,N,null),N.onAfterShadow(i,N,F,X,Q,pe,null)}}const se=N.children;for(let Q=0,le=se.length;Q<le;Q++)C(se[Q],F,X,b,R)}function k(N){N.target.removeEventListener("dispose",k);for(const X in p){const b=p[X],R=N.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const dR={[nd]:id,[rd]:od,[sd]:ld,[oa]:ad,[id]:nd,[od]:rd,[ld]:sd,[ad]:oa};function hR(i,e){function t(){let V=!1;const Ne=new $t;let Se=null;const ke=new $t(0,0,0,0);return{setMask:function(we){Se!==we&&!V&&(i.colorMask(we,we,we,we),Se=we)},setLocked:function(we){V=we},setClear:function(we,_e,Ae,$e,ct){ct===!0&&(we*=$e,_e*=$e,Ae*=$e),Ne.set(we,_e,Ae,$e),ke.equals(Ne)===!1&&(i.clearColor(we,_e,Ae,$e),ke.copy(Ne))},reset:function(){V=!1,Se=null,ke.set(-1,0,0,0)}}}function s(){let V=!1,Ne=!1,Se=null,ke=null,we=null;return{setReversed:function(_e){if(Ne!==_e){const Ae=e.get("EXT_clip_control");_e?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Ne=_e;const $e=we;we=null,this.setClear($e)}},getReversed:function(){return Ne},setTest:function(_e){_e?fe(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(_e){Se!==_e&&!V&&(i.depthMask(_e),Se=_e)},setFunc:function(_e){if(Ne&&(_e=dR[_e]),ke!==_e){switch(_e){case nd:i.depthFunc(i.NEVER);break;case id:i.depthFunc(i.ALWAYS);break;case rd:i.depthFunc(i.LESS);break;case oa:i.depthFunc(i.LEQUAL);break;case sd:i.depthFunc(i.EQUAL);break;case ad:i.depthFunc(i.GEQUAL);break;case od:i.depthFunc(i.GREATER);break;case ld:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=_e}},setLocked:function(_e){V=_e},setClear:function(_e){we!==_e&&(Ne&&(_e=1-_e),i.clearDepth(_e),we=_e)},reset:function(){V=!1,Se=null,ke=null,we=null,Ne=!1}}}function a(){let V=!1,Ne=null,Se=null,ke=null,we=null,_e=null,Ae=null,$e=null,ct=null;return{setTest:function(ft){V||(ft?fe(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(ft){Ne!==ft&&!V&&(i.stencilMask(ft),Ne=ft)},setFunc:function(ft,qt,Ot){(Se!==ft||ke!==qt||we!==Ot)&&(i.stencilFunc(ft,qt,Ot),Se=ft,ke=qt,we=Ot)},setOp:function(ft,qt,Ot){(_e!==ft||Ae!==qt||$e!==Ot)&&(i.stencilOp(ft,qt,Ot),_e=ft,Ae=qt,$e=Ot)},setLocked:function(ft){V=ft},setClear:function(ft){ct!==ft&&(i.clearStencil(ft),ct=ft)},reset:function(){V=!1,Ne=null,Se=null,ke=null,we=null,_e=null,Ae=null,$e=null,ct=null}}}const l=new t,c=new s,f=new a,d=new WeakMap,p=new WeakMap;let m={},v={},_=new WeakMap,S=[],E=null,w=!1,y=null,x=null,L=null,P=null,C=null,k=null,N=null,F=new Pt(0,0,0),X=0,b=!1,R=null,H=null,se=null,Q=null,le=null;const pe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,ve=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(z)[1]),ue=ve>=1):z.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ue=ve>=2);let he=null,ie={};const I=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),De=new $t().fromArray(I),Z=new $t().fromArray(ae);function me(V,Ne,Se,ke){const we=new Uint8Array(4),_e=i.createTexture();i.bindTexture(V,_e),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<Se;Ae++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Ne,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(Ne+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return _e}const j={};j[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),fe(i.DEPTH_TEST),c.setFunc(oa),_t(!1),Mt(Km),fe(i.CULL_FACE),O(Ir);function fe(V){m[V]!==!0&&(i.enable(V),m[V]=!0)}function ce(V){m[V]!==!1&&(i.disable(V),m[V]=!1)}function be(V,Ne){return v[V]!==Ne?(i.bindFramebuffer(V,Ne),v[V]=Ne,V===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Ne),V===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Pe(V,Ne){let Se=S,ke=!1;if(V){Se=_.get(Ne),Se===void 0&&(Se=[],_.set(Ne,Se));const we=V.textures;if(Se.length!==we.length||Se[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Ae=we.length;_e<Ae;_e++)Se[_e]=i.COLOR_ATTACHMENT0+_e;Se.length=we.length,ke=!0}}else Se[0]!==i.BACK&&(Se[0]=i.BACK,ke=!0);ke&&i.drawBuffers(Se)}function tt(V){return E!==V?(i.useProgram(V),E=V,!0):!1}const pt={[os]:i.FUNC_ADD,[Ky]:i.FUNC_SUBTRACT,[Zy]:i.FUNC_REVERSE_SUBTRACT};pt[Jy]=i.MIN,pt[Qy]=i.MAX;const dt={[eS]:i.ZERO,[tS]:i.ONE,[nS]:i.SRC_COLOR,[ed]:i.SRC_ALPHA,[lS]:i.SRC_ALPHA_SATURATE,[aS]:i.DST_COLOR,[rS]:i.DST_ALPHA,[iS]:i.ONE_MINUS_SRC_COLOR,[td]:i.ONE_MINUS_SRC_ALPHA,[oS]:i.ONE_MINUS_DST_COLOR,[sS]:i.ONE_MINUS_DST_ALPHA,[uS]:i.CONSTANT_COLOR,[cS]:i.ONE_MINUS_CONSTANT_COLOR,[fS]:i.CONSTANT_ALPHA,[dS]:i.ONE_MINUS_CONSTANT_ALPHA};function O(V,Ne,Se,ke,we,_e,Ae,$e,ct,ft){if(V===Ir){w===!0&&(ce(i.BLEND),w=!1);return}if(w===!1&&(fe(i.BLEND),w=!0),V!==qy){if(V!==y||ft!==b){if((x!==os||C!==os)&&(i.blendEquation(i.FUNC_ADD),x=os,C=os),ft)switch(V){case ia:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zm:i.blendFunc(i.ONE,i.ONE);break;case Jm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qm:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ia:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zm:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}L=null,P=null,k=null,N=null,F.set(0,0,0),X=0,y=V,b=ft}return}we=we||Ne,_e=_e||Se,Ae=Ae||ke,(Ne!==x||we!==C)&&(i.blendEquationSeparate(pt[Ne],pt[we]),x=Ne,C=we),(Se!==L||ke!==P||_e!==k||Ae!==N)&&(i.blendFuncSeparate(dt[Se],dt[ke],dt[_e],dt[Ae]),L=Se,P=ke,k=_e,N=Ae),($e.equals(F)===!1||ct!==X)&&(i.blendColor($e.r,$e.g,$e.b,ct),F.copy($e),X=ct),y=V,b=!1}function Xt(V,Ne){V.side===wi?ce(i.CULL_FACE):fe(i.CULL_FACE);let Se=V.side===kn;Ne&&(Se=!Se),_t(Se),V.blending===ia&&V.transparent===!1?O(Ir):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const ke=V.stencilWrite;f.setTest(ke),ke&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),mt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(V){R!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),R=V)}function Mt(V){V!==jy?(fe(i.CULL_FACE),V!==H&&(V===Km?i.cullFace(i.BACK):V===$y?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),H=V}function We(V){V!==se&&(ue&&i.lineWidth(V),se=V)}function mt(V,Ne,Se){V?(fe(i.POLYGON_OFFSET_FILL),(Q!==Ne||le!==Se)&&(i.polygonOffset(Ne,Se),Q=Ne,le=Se)):ce(i.POLYGON_OFFSET_FILL)}function qe(V){V?fe(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function st(V){V===void 0&&(V=i.TEXTURE0+pe-1),he!==V&&(i.activeTexture(V),he=V)}function Ut(V,Ne,Se){Se===void 0&&(he===null?Se=i.TEXTURE0+pe-1:Se=he);let ke=ie[Se];ke===void 0&&(ke={type:void 0,texture:void 0},ie[Se]=ke),(ke.type!==V||ke.texture!==Ne)&&(he!==Se&&(i.activeTexture(Se),he=Se),i.bindTexture(V,Ne||j[V]),ke.type=V,ke.texture=Ne)}function D(){const V=ie[he];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ee(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(V){De.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),De.copy(V))}function nt(V){Z.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function Qe(V,Ne){let Se=p.get(Ne);Se===void 0&&(Se=new WeakMap,p.set(Ne,Se));let ke=Se.get(V);ke===void 0&&(ke=i.getUniformBlockIndex(Ne,V.name),Se.set(V,ke))}function Ue(V,Ne){const ke=p.get(Ne).get(V);d.get(Ne)!==ke&&(i.uniformBlockBinding(Ne,ke,V.__bindingPointIndex),d.set(Ne,ke))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},he=null,ie={},v={},_=new WeakMap,S=[],E=null,w=!1,y=null,x=null,L=null,P=null,C=null,k=null,N=null,F=new Pt(0,0,0),X=0,b=!1,R=null,H=null,se=null,Q=null,le=null,De.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:fe,disable:ce,bindFramebuffer:be,drawBuffers:Pe,useProgram:tt,setBlending:O,setMaterial:Xt,setFlipSided:_t,setCullFace:Mt,setLineWidth:We,setPolygonOffset:mt,setScissorTest:qe,activeTexture:st,bindTexture:Ut,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:ee,texImage2D:Ze,texImage3D:ye,updateUBOMapping:Qe,uniformBlockBinding:Ue,texStorage2D:Le,texStorage3D:Ie,texSubImage2D:ge,texSubImage3D:xe,compressedTexSubImage2D:de,compressedTexSubImage3D:Ke,scissor:Be,viewport:nt,reset:at}}function pR(i,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ct,m=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return S?new OffscreenCanvas(D,T):mo("canvas")}function w(D,T,ee){let ge=1;const xe=Ut(D);if((xe.width>ee||xe.height>ee)&&(ge=ee/Math.max(xe.width,xe.height)),ge<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(ge*xe.width),Ke=Math.floor(ge*xe.height);v===void 0&&(v=E(de,Ke));const Le=T?E(de,Ke):v;return Le.width=de,Le.height=Ke,Le.getContext("2d").drawImage(D,0,0,de,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+Ke+")."),Le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){i.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(D,T,ee,ge,xe=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=T;if(T===i.RED&&(ee===i.FLOAT&&(de=i.R32F),ee===i.HALF_FLOAT&&(de=i.R16F),ee===i.UNSIGNED_BYTE&&(de=i.R8)),T===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(de=i.R8UI),ee===i.UNSIGNED_SHORT&&(de=i.R16UI),ee===i.UNSIGNED_INT&&(de=i.R32UI),ee===i.BYTE&&(de=i.R8I),ee===i.SHORT&&(de=i.R16I),ee===i.INT&&(de=i.R32I)),T===i.RG&&(ee===i.FLOAT&&(de=i.RG32F),ee===i.HALF_FLOAT&&(de=i.RG16F),ee===i.UNSIGNED_BYTE&&(de=i.RG8)),T===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(de=i.RG8UI),ee===i.UNSIGNED_SHORT&&(de=i.RG16UI),ee===i.UNSIGNED_INT&&(de=i.RG32UI),ee===i.BYTE&&(de=i.RG8I),ee===i.SHORT&&(de=i.RG16I),ee===i.INT&&(de=i.RG32I)),T===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(de=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(de=i.RGB16UI),ee===i.UNSIGNED_INT&&(de=i.RGB32UI),ee===i.BYTE&&(de=i.RGB8I),ee===i.SHORT&&(de=i.RGB16I),ee===i.INT&&(de=i.RGB32I)),T===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(de=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(de=i.RGBA16UI),ee===i.UNSIGNED_INT&&(de=i.RGBA32UI),ee===i.BYTE&&(de=i.RGBA8I),ee===i.SHORT&&(de=i.RGBA16I),ee===i.INT&&(de=i.RGBA32I)),T===i.RGB&&ee===i.UNSIGNED_INT_5_9_9_9_REV&&(de=i.RGB9_E5),T===i.RGBA){const Ke=xe?vu:At.getTransfer(ge);ee===i.FLOAT&&(de=i.RGBA32F),ee===i.HALF_FLOAT&&(de=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(de=Ke===Dt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function C(D,T){let ee;return D?T===null||T===ds||T===co?ee=i.DEPTH24_STENCIL8:T===Ki?ee=i.DEPTH32F_STENCIL8:T===uo&&(ee=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ds||T===co?ee=i.DEPTH_COMPONENT24:T===Ki?ee=i.DEPTH_COMPONENT32F:T===uo&&(ee=i.DEPTH_COMPONENT16),ee}function k(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==pn&&D.minFilter!==Ti?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function N(D){const T=D.target;T.removeEventListener("dispose",N),X(T),T.isVideoTexture&&m.delete(T)}function F(D){const T=D.target;T.removeEventListener("dispose",F),R(T)}function X(D){const T=s.get(D);if(T.__webglInit===void 0)return;const ee=D.source,ge=_.get(ee);if(ge){const xe=ge[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&b(D),Object.keys(ge).length===0&&_.delete(ee)}s.remove(D)}function b(D){const T=s.get(D);i.deleteTexture(T.__webglTexture);const ee=D.source,ge=_.get(ee);delete ge[T.__cacheKey],c.memory.textures--}function R(D){const T=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let xe=0;xe<T.__webglFramebuffer[ge].length;xe++)i.deleteFramebuffer(T.__webglFramebuffer[ge][xe]);else i.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)i.deleteFramebuffer(T.__webglFramebuffer[ge]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ee=D.textures;for(let ge=0,xe=ee.length;ge<xe;ge++){const de=s.get(ee[ge]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),c.memory.textures--),s.remove(ee[ge])}s.remove(D)}let H=0;function se(){H=0}function Q(){const D=H;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),H+=1,D}function le(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function pe(D,T){const ee=s.get(D);if(D.isVideoTexture&&qe(D),D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){const ge=D.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(ee,D,T);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+T)}function ue(D,T){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){j(ee,D,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+T)}function ve(D,T){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){j(ee,D,T);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+T)}function z(D,T){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){fe(ee,D,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+T)}const he={[lo]:i.REPEAT,[qi]:i.CLAMP_TO_EDGE,[fd]:i.MIRRORED_REPEAT},ie={[pn]:i.NEAREST,[ES]:i.NEAREST_MIPMAP_NEAREST,[Ul]:i.NEAREST_MIPMAP_LINEAR,[Ti]:i.LINEAR,[mf]:i.LINEAR_MIPMAP_NEAREST,[us]:i.LINEAR_MIPMAP_LINEAR},I={[AS]:i.NEVER,[US]:i.ALWAYS,[CS]:i.LESS,[$v]:i.LEQUAL,[bS]:i.EQUAL,[DS]:i.GEQUAL,[PS]:i.GREATER,[LS]:i.NOTEQUAL};function ae(D,T){if(T.type===Ki&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ti||T.magFilter===mf||T.magFilter===Ul||T.magFilter===us||T.minFilter===Ti||T.minFilter===mf||T.minFilter===Ul||T.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,he[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,he[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,he[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ie[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pn||T.minFilter!==Ul&&T.minFilter!==us||T.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function De(D,T){let ee=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",N));const ge=T.source;let xe=_.get(ge);xe===void 0&&(xe={},_.set(ge,xe));const de=le(T);if(de!==D.__cacheKey){xe[de]===void 0&&(xe[de]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),xe[de].usedTimes++;const Ke=xe[D.__cacheKey];Ke!==void 0&&(xe[D.__cacheKey].usedTimes--,Ke.usedTimes===0&&b(T)),D.__cacheKey=de,D.__webglTexture=xe[de].texture}return ee}function Z(D,T,ee){return Math.floor(Math.floor(D/ee)/T)}function me(D,T,ee,ge){const de=D.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,ee,ge,T.data);else{de.sort((ye,Be)=>ye.start-Be.start);let Ke=0;for(let ye=1;ye<de.length;ye++){const Be=de[Ke],nt=de[ye],Qe=Be.start+Be.count,Ue=Z(nt.start,T.width,4),at=Z(Be.start,T.width,4);nt.start<=Qe+1&&Ue===at&&Z(nt.start+nt.count-1,T.width,4)===Ue?Be.count=Math.max(Be.count,nt.start+nt.count-Be.start):(++Ke,de[Ke]=nt)}de.length=Ke+1;const Le=i.getParameter(i.UNPACK_ROW_LENGTH),Ie=i.getParameter(i.UNPACK_SKIP_PIXELS),Ze=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let ye=0,Be=de.length;ye<Be;ye++){const nt=de[ye],Qe=Math.floor(nt.start/4),Ue=Math.ceil(nt.count/4),at=Qe%T.width,V=Math.floor(Qe/T.width),Ne=Ue,Se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,at),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,at,V,Ne,Se,ee,ge,T.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ze)}}function j(D,T,ee){let ge=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=i.TEXTURE_3D);const xe=De(D,T),de=T.source;t.bindTexture(ge,D.__webglTexture,i.TEXTURE0+ee);const Ke=s.get(de);if(de.version!==Ke.__version||xe===!0){t.activeTexture(i.TEXTURE0+ee);const Le=At.getPrimaries(At.workingColorSpace),Ie=T.colorSpace===Dr?null:At.getPrimaries(T.colorSpace),Ze=T.colorSpace===Dr||Le===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ye=w(T.image,!1,a.maxTextureSize);ye=st(T,ye);const Be=l.convert(T.format,T.colorSpace),nt=l.convert(T.type);let Qe=P(T.internalFormat,Be,nt,T.colorSpace,T.isVideoTexture);ae(ge,T);let Ue;const at=T.mipmaps,V=T.isVideoTexture!==!0,Ne=Ke.__version===void 0||xe===!0,Se=de.dataReady,ke=k(T,ye);if(T.isDepthTexture)Qe=C(T.format===ho,T.type),Ne&&(V?t.texStorage2D(i.TEXTURE_2D,1,Qe,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,Qe,ye.width,ye.height,0,Be,nt,null));else if(T.isDataTexture)if(at.length>0){V&&Ne&&t.texStorage2D(i.TEXTURE_2D,ke,Qe,at[0].width,at[0].height);for(let we=0,_e=at.length;we<_e;we++)Ue=at[we],V?Se&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,Ue.width,Ue.height,Be,nt,Ue.data):t.texImage2D(i.TEXTURE_2D,we,Qe,Ue.width,Ue.height,0,Be,nt,Ue.data);T.generateMipmaps=!1}else V?(Ne&&t.texStorage2D(i.TEXTURE_2D,ke,Qe,ye.width,ye.height),Se&&me(T,ye,Be,nt)):t.texImage2D(i.TEXTURE_2D,0,Qe,ye.width,ye.height,0,Be,nt,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Qe,at[0].width,at[0].height,ye.depth);for(let we=0,_e=at.length;we<_e;we++)if(Ue=at[we],T.format!==pi)if(Be!==null)if(V){if(Se)if(T.layerUpdates.size>0){const Ae=Mg(Ue.width,Ue.height,T.format,T.type);for(const $e of T.layerUpdates){const ct=Ue.data.subarray($e*Ae/Ue.data.BYTES_PER_ELEMENT,($e+1)*Ae/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,$e,Ue.width,Ue.height,1,Be,ct)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Ue.width,Ue.height,ye.depth,Be,Ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,Qe,Ue.width,Ue.height,ye.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Ue.width,Ue.height,ye.depth,Be,nt,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,Qe,Ue.width,Ue.height,ye.depth,0,Be,nt,Ue.data)}else{V&&Ne&&t.texStorage2D(i.TEXTURE_2D,ke,Qe,at[0].width,at[0].height);for(let we=0,_e=at.length;we<_e;we++)Ue=at[we],T.format!==pi?Be!==null?V?Se&&t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,Ue.width,Ue.height,Be,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,we,Qe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Se&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,Ue.width,Ue.height,Be,nt,Ue.data):t.texImage2D(i.TEXTURE_2D,we,Qe,Ue.width,Ue.height,0,Be,nt,Ue.data)}else if(T.isDataArrayTexture)if(V){if(Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Qe,ye.width,ye.height,ye.depth),Se)if(T.layerUpdates.size>0){const we=Mg(ye.width,ye.height,T.format,T.type);for(const _e of T.layerUpdates){const Ae=ye.data.subarray(_e*we/ye.data.BYTES_PER_ELEMENT,(_e+1)*we/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,ye.width,ye.height,1,Be,nt,Ae)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Be,nt,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Qe,ye.width,ye.height,ye.depth,0,Be,nt,ye.data);else if(T.isData3DTexture)V?(Ne&&t.texStorage3D(i.TEXTURE_3D,ke,Qe,ye.width,ye.height,ye.depth),Se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Be,nt,ye.data)):t.texImage3D(i.TEXTURE_3D,0,Qe,ye.width,ye.height,ye.depth,0,Be,nt,ye.data);else if(T.isFramebufferTexture){if(Ne)if(V)t.texStorage2D(i.TEXTURE_2D,ke,Qe,ye.width,ye.height);else{let we=ye.width,_e=ye.height;for(let Ae=0;Ae<ke;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Qe,we,_e,0,Be,nt,null),we>>=1,_e>>=1}}else if(at.length>0){if(V&&Ne){const we=Ut(at[0]);t.texStorage2D(i.TEXTURE_2D,ke,Qe,we.width,we.height)}for(let we=0,_e=at.length;we<_e;we++)Ue=at[we],V?Se&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,Be,nt,Ue):t.texImage2D(i.TEXTURE_2D,we,Qe,Be,nt,Ue);T.generateMipmaps=!1}else if(V){if(Ne){const we=Ut(ye);t.texStorage2D(i.TEXTURE_2D,ke,Qe,we.width,we.height)}Se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,nt,ye)}else t.texImage2D(i.TEXTURE_2D,0,Qe,Be,nt,ye);y(T)&&x(ge),Ke.__version=de.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function fe(D,T,ee){if(T.image.length!==6)return;const ge=De(D,T),xe=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+ee);const de=s.get(xe);if(xe.version!==de.__version||ge===!0){t.activeTexture(i.TEXTURE0+ee);const Ke=At.getPrimaries(At.workingColorSpace),Le=T.colorSpace===Dr?null:At.getPrimaries(T.colorSpace),Ie=T.colorSpace===Dr||Ke===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ze=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,Be=[];for(let _e=0;_e<6;_e++)!Ze&&!ye?Be[_e]=w(T.image[_e],!0,a.maxCubemapSize):Be[_e]=ye?T.image[_e].image:T.image[_e],Be[_e]=st(T,Be[_e]);const nt=Be[0],Qe=l.convert(T.format,T.colorSpace),Ue=l.convert(T.type),at=P(T.internalFormat,Qe,Ue,T.colorSpace),V=T.isVideoTexture!==!0,Ne=de.__version===void 0||ge===!0,Se=xe.dataReady;let ke=k(T,nt);ae(i.TEXTURE_CUBE_MAP,T);let we;if(Ze){V&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,at,nt.width,nt.height);for(let _e=0;_e<6;_e++){we=Be[_e].mipmaps;for(let Ae=0;Ae<we.length;Ae++){const $e=we[Ae];T.format!==pi?Qe!==null?V?Se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae,0,0,$e.width,$e.height,Qe,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae,at,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae,0,0,$e.width,$e.height,Qe,Ue,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae,at,$e.width,$e.height,0,Qe,Ue,$e.data)}}}else{if(we=T.mipmaps,V&&Ne){we.length>0&&ke++;const _e=Ut(Be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,at,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ye){V?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Be[_e].width,Be[_e].height,Qe,Ue,Be[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,Be[_e].width,Be[_e].height,0,Qe,Ue,Be[_e].data);for(let Ae=0;Ae<we.length;Ae++){const ct=we[Ae].image[_e].image;V?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae+1,0,0,ct.width,ct.height,Qe,Ue,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae+1,at,ct.width,ct.height,0,Qe,Ue,ct.data)}}else{V?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Qe,Ue,Be[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,Qe,Ue,Be[_e]);for(let Ae=0;Ae<we.length;Ae++){const $e=we[Ae];V?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae+1,0,0,Qe,Ue,$e.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae+1,at,Qe,Ue,$e.image[_e])}}}y(T)&&x(i.TEXTURE_CUBE_MAP),de.__version=xe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ce(D,T,ee,ge,xe,de){const Ke=l.convert(ee.format,ee.colorSpace),Le=l.convert(ee.type),Ie=P(ee.internalFormat,Ke,Le,ee.colorSpace),Ze=s.get(T),ye=s.get(ee);if(ye.__renderTarget=T,!Ze.__hasExternalTextures){const Be=Math.max(1,T.width>>de),nt=Math.max(1,T.height>>de);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,de,Ie,Be,nt,T.depth,0,Ke,Le,null):t.texImage2D(xe,de,Ie,Be,nt,0,Ke,Le,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),mt(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,xe,ye.__webglTexture,0,We(T)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,xe,ye.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(D,T,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const ge=T.depthTexture,xe=ge&&ge.isDepthTexture?ge.type:null,de=C(T.stencilBuffer,xe),Ke=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=We(T);mt(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,de,T.width,T.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,de,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,de,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ke,i.RENDERBUFFER,D)}else{const ge=T.textures;for(let xe=0;xe<ge.length;xe++){const de=ge[xe],Ke=l.convert(de.format,de.colorSpace),Le=l.convert(de.type),Ie=P(de.internalFormat,Ke,Le,de.colorSpace),Ze=We(T);ee&&mt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,Ie,T.width,T.height):mt(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,Ie,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(T.depthTexture);ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe(T.depthTexture,0);const xe=ge.__webglTexture,de=We(T);if(T.depthTexture.format===fo)mt(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(T.depthTexture.format===ho)mt(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function tt(D){const T=s.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ge=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",xe)};ge.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=ge}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const ge=D.texture.mipmaps;ge&&ge.length>0?Pe(T.__webglFramebuffer[0],D):Pe(T.__webglFramebuffer,D)}else if(ee){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=i.createRenderbuffer(),be(T.__webglDepthbuffer[ge],D,!1);else{const xe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[ge];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,de)}}else{const ge=D.texture.mipmaps;if(ge&&ge.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),be(T.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(D,T,ee){const ge=s.get(D);T!==void 0&&ce(ge.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&tt(D)}function dt(D){const T=D.texture,ee=s.get(D),ge=s.get(T);D.addEventListener("dispose",F);const xe=D.textures,de=D.isWebGLCubeRenderTarget===!0,Ke=xe.length>1;if(Ke||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=T.version,c.memory.textures++),de){ee.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer[Le]=[];for(let Ie=0;Ie<T.mipmaps.length;Ie++)ee.__webglFramebuffer[Le][Ie]=i.createFramebuffer()}else ee.__webglFramebuffer[Le]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Le=0;Le<T.mipmaps.length;Le++)ee.__webglFramebuffer[Le]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(Ke)for(let Le=0,Ie=xe.length;Le<Ie;Le++){const Ze=s.get(xe[Le]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),c.memory.textures++)}if(D.samples>0&&mt(D)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Le=0;Le<xe.length;Le++){const Ie=xe[Le];ee.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[Le]);const Ze=l.convert(Ie.format,Ie.colorSpace),ye=l.convert(Ie.type),Be=P(Ie.internalFormat,Ze,ye,Ie.colorSpace,D.isXRRenderTarget===!0),nt=We(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Be,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,ee.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),be(ee.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),ae(i.TEXTURE_CUBE_MAP,T);for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)ce(ee.__webglFramebuffer[Le][Ie],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ie);else ce(ee.__webglFramebuffer[Le],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);y(T)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Le=0,Ie=xe.length;Le<Ie;Le++){const Ze=xe[Le],ye=s.get(Ze);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),ae(i.TEXTURE_2D,Ze),ce(ee.__webglFramebuffer,D,Ze,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,0),y(Ze)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let Le=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Le=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,ge.__webglTexture),ae(Le,T),T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)ce(ee.__webglFramebuffer[Ie],D,T,i.COLOR_ATTACHMENT0,Le,Ie);else ce(ee.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,Le,0);y(T)&&x(Le),t.unbindTexture()}D.depthBuffer&&tt(D)}function O(D){const T=D.textures;for(let ee=0,ge=T.length;ee<ge;ee++){const xe=T[ee];if(y(xe)){const de=L(D),Ke=s.get(xe).__webglTexture;t.bindTexture(de,Ke),x(de),t.unbindTexture()}}}const Xt=[],_t=[];function Mt(D){if(D.samples>0){if(mt(D)===!1){const T=D.textures,ee=D.width,ge=D.height;let xe=i.COLOR_BUFFER_BIT;const de=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ke=s.get(D),Le=T.length>1;if(Le)for(let Ze=0;Ze<T.length;Ze++)t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Ie=D.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ze=0;Ze<T.length;Ze++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),Le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ze]);const ye=s.get(T[Ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,ee,ge,0,0,ee,ge,xe,i.NEAREST),d===!0&&(Xt.length=0,_t.length=0,Xt.push(i.COLOR_ATTACHMENT0+Ze),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Xt.push(de),_t.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let Ze=0;Ze<T.length;Ze++){t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ze]);const ye=s.get(T[Ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function We(D){return Math.min(a.maxSamples,D.samples)}function mt(D){const T=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(D){const T=c.render.frame;m.get(D)!==T&&(m.set(D,T),D.update())}function st(D,T){const ee=D.colorSpace,ge=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ee!==ca&&ee!==Dr&&(At.getTransfer(ee)===Dt?(ge!==pi||xe!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),T}function Ut(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=se,this.setTexture2D=pe,this.setTexture2DArray=ue,this.setTexture3D=ve,this.setTextureCube=z,this.rebindTextures=pt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=mt}function mR(i,e){function t(s,a=Dr){let l;const c=At.getTransfer(a);if(s===Pi)return i.UNSIGNED_BYTE;if(s===Jd)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Qd)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Hv)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===Bv)return i.BYTE;if(s===zv)return i.SHORT;if(s===uo)return i.UNSIGNED_SHORT;if(s===Zd)return i.INT;if(s===ds)return i.UNSIGNED_INT;if(s===Ki)return i.FLOAT;if(s===yo)return i.HALF_FLOAT;if(s===Vv)return i.ALPHA;if(s===Gv)return i.RGB;if(s===pi)return i.RGBA;if(s===fo)return i.DEPTH_COMPONENT;if(s===ho)return i.DEPTH_STENCIL;if(s===Wv)return i.RED;if(s===eh)return i.RED_INTEGER;if(s===Xv)return i.RG;if(s===th)return i.RG_INTEGER;if(s===nh)return i.RGBA_INTEGER;if(s===ou||s===lu||s===uu||s===cu)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===ou)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===ou)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dd||s===hd||s===pd||s===md)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===dd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===md)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gd||s===vd||s===_d)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===gd||s===vd)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===_d)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xd||s===yd||s===Sd||s===Ed||s===Md||s===wd||s===Td||s===Rd||s===Ad||s===Cd||s===bd||s===Pd||s===Ld||s===Dd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===xd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ed)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Md)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Td)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ad)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ld)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fu||s===Ud||s===Nd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===fu)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ud)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Nd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jv||s===Id||s===Fd||s===Od)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===fu)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Id)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Od)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===co?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}const gR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vR=`
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

}`;class _R{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Ln,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new kr({vertexShader:gR,fragmentShader:vR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ri(new Ru(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xR extends pa{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",d=1,p=null,m=null,v=null,_=null,S=null,E=null;const w=new _R,y=t.getContextAttributes();let x=null,L=null;const P=[],C=[],k=new Ct;let N=null;const F=new ni;F.viewport=new $t;const X=new ni;X.viewport=new $t;const b=[F,X],R=new zE;let H=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let me=P[Z];return me===void 0&&(me=new Ff,P[Z]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Z){let me=P[Z];return me===void 0&&(me=new Ff,P[Z]=me),me.getGripSpace()},this.getHand=function(Z){let me=P[Z];return me===void 0&&(me=new Ff,P[Z]=me),me.getHandSpace()};function Q(Z){const me=C.indexOf(Z.inputSource);if(me===-1)return;const j=P[me];j!==void 0&&(j.update(Z.inputSource,Z.frame,p||c),j.dispatchEvent({type:Z.type,data:Z.inputSource}))}function le(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",pe);for(let Z=0;Z<P.length;Z++){const me=C[Z];me!==null&&(C[Z]=null,P[Z].disconnect(me))}H=null,se=null,w.reset(),e.setRenderTarget(x),S=null,_=null,v=null,a=null,L=null,De.stop(),s.isPresenting=!1,e.setPixelRatio(N),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){f=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",le),a.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,fe=null,ce=null;y.depth&&(ce=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?ho:fo,fe=y.stencil?co:ds);const be={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:l};v=new XRWebGLBinding(a,t),_=v.createProjectionLayer(be),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new hs(_.textureWidth,_.textureHeight,{format:pi,type:Pi,depthTexture:new i_(_.textureWidth,_.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const j={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,j),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new hs(S.framebufferWidth,S.framebufferHeight,{format:pi,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await a.requestReferenceSpace(f),De.setContext(a),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function pe(Z){for(let me=0;me<Z.removed.length;me++){const j=Z.removed[me],fe=C.indexOf(j);fe>=0&&(C[fe]=null,P[fe].disconnect(j))}for(let me=0;me<Z.added.length;me++){const j=Z.added[me];let fe=C.indexOf(j);if(fe===-1){for(let be=0;be<P.length;be++)if(be>=C.length){C.push(j),fe=be;break}else if(C[be]===null){C[be]=j,fe=be;break}if(fe===-1)break}const ce=P[fe];ce&&ce.connect(j)}}const ue=new ne,ve=new ne;function z(Z,me,j){ue.setFromMatrixPosition(me.matrixWorld),ve.setFromMatrixPosition(j.matrixWorld);const fe=ue.distanceTo(ve),ce=me.projectionMatrix.elements,be=j.projectionMatrix.elements,Pe=ce[14]/(ce[10]-1),tt=ce[14]/(ce[10]+1),pt=(ce[9]+1)/ce[5],dt=(ce[9]-1)/ce[5],O=(ce[8]-1)/ce[0],Xt=(be[8]+1)/be[0],_t=Pe*O,Mt=Pe*Xt,We=fe/(-O+Xt),mt=We*-O;if(me.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(mt),Z.translateZ(We),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ce[10]===-1)Z.projectionMatrix.copy(me.projectionMatrix),Z.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const qe=Pe+We,st=tt+We,Ut=_t-mt,D=Mt+(fe-mt),T=pt*tt/st*qe,ee=dt*tt/st*qe;Z.projectionMatrix.makePerspective(Ut,D,T,ee,qe,st),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function he(Z,me){me===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(me.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let me=Z.near,j=Z.far;w.texture!==null&&(w.depthNear>0&&(me=w.depthNear),w.depthFar>0&&(j=w.depthFar)),R.near=X.near=F.near=me,R.far=X.far=F.far=j,(H!==R.near||se!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,se=R.far),F.layers.mask=Z.layers.mask|2,X.layers.mask=Z.layers.mask|4,R.layers.mask=F.layers.mask|X.layers.mask;const fe=Z.parent,ce=R.cameras;he(R,fe);for(let be=0;be<ce.length;be++)he(ce[be],fe);ce.length===2?z(R,F,X):R.projectionMatrix.copy(F.projectionMatrix),ie(Z,R,fe)};function ie(Z,me,j){j===null?Z.matrix.copy(me.matrixWorld):(Z.matrix.copy(j.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(me.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(me.projectionMatrix),Z.projectionMatrixInverse.copy(me.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=po*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&S===null))return d},this.setFoveation=function(Z){d=Z,_!==null&&(_.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let I=null;function ae(Z,me){if(m=me.getViewerPose(p||c),E=me,m!==null){const j=m.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let fe=!1;j.length!==R.cameras.length&&(R.cameras.length=0,fe=!0);for(let Pe=0;Pe<j.length;Pe++){const tt=j[Pe];let pt=null;if(S!==null)pt=S.getViewport(tt);else{const O=v.getViewSubImage(_,tt);pt=O.viewport,Pe===0&&(e.setRenderTargetTextures(L,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(L))}let dt=b[Pe];dt===void 0&&(dt=new ni,dt.layers.enable(Pe),dt.viewport=new $t,b[Pe]=dt),dt.matrix.fromArray(tt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(tt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(pt.x,pt.y,pt.width,pt.height),Pe===0&&(R.matrix.copy(dt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),fe===!0&&R.cameras.push(dt)}const ce=a.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const Pe=v.getDepthInformation(j[0]);Pe&&Pe.isValid&&Pe.texture&&w.init(e,Pe,a.renderState)}}for(let j=0;j<P.length;j++){const fe=C[j],ce=P[j];fe!==null&&ce!==void 0&&ce.update(fe,me,p||c)}I&&I(Z,me),me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:me}),E=null}const De=new s_;De.setAnimationLoop(ae),this.setAnimationLoop=function(Z){I=Z},this.dispose=function(){}}}const rs=new Pn,yR=new Yt;function SR(i,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,e_(i)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function a(y,x,L,P,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),v(y,x)):x.isMeshPhongMaterial?(l(y,x),m(y,x)):x.isMeshStandardMaterial?(l(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(l(y,x),E(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),w(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?d(y,x,L,P):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===kn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===kn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const L=e.get(x),P=L.envMap,C=L.envMapRotation;P&&(y.envMap.value=P,rs.copy(C),rs.x*=-1,rs.y*=-1,rs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),y.envMapRotation.value.setFromMatrix4(yR.makeRotationFromEuler(rs)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,L,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*L,y.scale.value=P*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,L){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const L=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function ER(i,e,t,s){let a={},l={},c=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,P){const C=P.program;s.uniformBlockBinding(L,C)}function p(L,P){let C=a[L.id];C===void 0&&(E(L),C=m(L),a[L.id]=C,L.addEventListener("dispose",y));const k=P.program;s.updateUBOMapping(L,k);const N=e.render.frame;l[L.id]!==N&&(_(L),l[L.id]=N)}function m(L){const P=v();L.__bindingPointIndex=P;const C=i.createBuffer(),k=L.__size,N=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,k,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,C),C}function v(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const P=a[L.id],C=L.uniforms,k=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let N=0,F=C.length;N<F;N++){const X=Array.isArray(C[N])?C[N]:[C[N]];for(let b=0,R=X.length;b<R;b++){const H=X[b];if(S(H,N,b,k)===!0){const se=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value];let le=0;for(let pe=0;pe<Q.length;pe++){const ue=Q[pe],ve=w(ue);typeof ue=="number"||typeof ue=="boolean"?(H.__data[0]=ue,i.bufferSubData(i.UNIFORM_BUFFER,se+le,H.__data)):ue.isMatrix3?(H.__data[0]=ue.elements[0],H.__data[1]=ue.elements[1],H.__data[2]=ue.elements[2],H.__data[3]=0,H.__data[4]=ue.elements[3],H.__data[5]=ue.elements[4],H.__data[6]=ue.elements[5],H.__data[7]=0,H.__data[8]=ue.elements[6],H.__data[9]=ue.elements[7],H.__data[10]=ue.elements[8],H.__data[11]=0):(ue.toArray(H.__data,le),le+=ve.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,se,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(L,P,C,k){const N=L.value,F=P+"_"+C;if(k[F]===void 0)return typeof N=="number"||typeof N=="boolean"?k[F]=N:k[F]=N.clone(),!0;{const X=k[F];if(typeof N=="number"||typeof N=="boolean"){if(X!==N)return k[F]=N,!0}else if(X.equals(N)===!1)return X.copy(N),!0}return!1}function E(L){const P=L.uniforms;let C=0;const k=16;for(let F=0,X=P.length;F<X;F++){const b=Array.isArray(P[F])?P[F]:[P[F]];for(let R=0,H=b.length;R<H;R++){const se=b[R],Q=Array.isArray(se.value)?se.value:[se.value];for(let le=0,pe=Q.length;le<pe;le++){const ue=Q[le],ve=w(ue),z=C%k,he=z%ve.boundary,ie=z+he;C+=he,ie!==0&&k-ie<ve.storage&&(C+=k-ie),se.__data=new Float32Array(ve.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=C,C+=ve.storage}}}const N=C%k;return N>0&&(C+=k-N),L.__size=C,L.__cache={},this}function w(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function y(L){const P=L.target;P.removeEventListener("dispose",y);const C=c.indexOf(P.__bindingPointIndex);c.splice(C,1),i.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function x(){for(const L in a)i.deleteBuffer(a[L]);c=[],a={},l={}}return{bind:d,update:p,dispose:x}}class MR{constructor(e={}){const{canvas:t=ZS(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,x=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let k=!1;this._outputColorSpace=bn;let N=0,F=0,X=null,b=-1,R=null;const H=new $t,se=new $t;let Q=null;const le=new Pt(0);let pe=0,ue=t.width,ve=t.height,z=1,he=null,ie=null;const I=new $t(0,0,ue,ve),ae=new $t(0,0,ue,ve);let De=!1;const Z=new oh;let me=!1,j=!1;const fe=new Yt,ce=new Yt,be=new ne,Pe=new $t,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function dt(){return X===null?z:1}let O=s;function Xt(A,Y){return t.getContext(A,Y)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kd}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",_e,!1),O===null){const Y="webgl2";if(O=Xt(Y,A),O===null)throw Xt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _t,Mt,We,mt,qe,st,Ut,D,T,ee,ge,xe,de,Ke,Le,Ie,Ze,ye,Be,nt,Qe,Ue,at,V;function Ne(){_t=new UT(O),_t.init(),Ue=new mR(O,_t),Mt=new RT(O,_t,e,Ue),We=new hR(O,_t),Mt.reverseDepthBuffer&&_&&We.buffers.depth.setReversed(!0),mt=new FT(O),qe=new eR,st=new pR(O,_t,We,qe,Mt,Ue,mt),Ut=new CT(C),D=new DT(C),T=new VE(O),at=new wT(O,T),ee=new NT(O,T,mt,at),ge=new kT(O,ee,T,mt),Be=new OT(O,Mt,st),Ie=new AT(qe),xe=new Q1(C,Ut,D,_t,Mt,at,Ie),de=new SR(C,qe),Ke=new nR,Le=new lR(_t),ye=new MT(C,Ut,D,We,ge,S,d),Ze=new fR(C,ge,Mt),V=new ER(O,mt,Mt,We),nt=new TT(O,_t,mt),Qe=new IT(O,_t,mt),mt.programs=xe.programs,C.capabilities=Mt,C.extensions=_t,C.properties=qe,C.renderLists=Ke,C.shadowMap=Ze,C.state=We,C.info=mt}Ne();const Se=new xR(C,O);this.xr=Se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=_t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(ue,ve,!1))},this.getSize=function(A){return A.set(ue,ve)},this.setSize=function(A,Y,oe=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=A,ve=Y,t.width=Math.floor(A*z),t.height=Math.floor(Y*z),oe===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(ue*z,ve*z).floor()},this.setDrawingBufferSize=function(A,Y,oe){ue=A,ve=Y,z=oe,t.width=Math.floor(A*oe),t.height=Math.floor(Y*oe),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,Y,oe,J){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,Y,oe,J),We.viewport(H.copy(I).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,Y,oe,J){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,Y,oe,J),We.scissor(se.copy(ae).multiplyScalar(z).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){We.setScissorTest(De=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,oe=!0){let J=0;if(A){let q=!1;if(X!==null){const Re=X.texture.format;q=Re===nh||Re===th||Re===eh}if(q){const Re=X.texture.type,Fe=Re===Pi||Re===ds||Re===uo||Re===co||Re===Jd||Re===Qd,Ve=ye.getClearColor(),He=ye.getClearAlpha(),lt=Ve.r,ot=Ve.g,Xe=Ve.b;Fe?(E[0]=lt,E[1]=ot,E[2]=Xe,E[3]=He,O.clearBufferuiv(O.COLOR,0,E)):(w[0]=lt,w[1]=ot,w[2]=Xe,w[3]=He,O.clearBufferiv(O.COLOR,0,w))}else J|=O.COLOR_BUFFER_BIT}Y&&(J|=O.DEPTH_BUFFER_BIT),oe&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ye.dispose(),Ke.dispose(),Le.dispose(),qe.dispose(),Ut.dispose(),D.dispose(),ge.dispose(),at.dispose(),V.dispose(),xe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Bn),Se.removeEventListener("sessionend",mn),Li.stop()};function ke(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=mt.autoReset,Y=Ze.enabled,oe=Ze.autoUpdate,J=Ze.needsUpdate,q=Ze.type;Ne(),mt.autoReset=A,Ze.enabled=Y,Ze.autoUpdate=oe,Ze.needsUpdate=J,Ze.type=q}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ae(A){const Y=A.target;Y.removeEventListener("dispose",Ae),$e(Y)}function $e(A){ct(A),qe.remove(A)}function ct(A){const Y=qe.get(A).programs;Y!==void 0&&(Y.forEach(function(oe){xe.releaseProgram(oe)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,oe,J,q,Re){Y===null&&(Y=tt);const Fe=q.isMesh&&q.matrixWorld.determinant()<0,Ve=Ro(A,Y,oe,J,q);We.setMaterial(J,Fe);let He=oe.index,lt=1;if(J.wireframe===!0){if(He=ee.getWireframeAttribute(oe),He===void 0)return;lt=2}const ot=oe.drawRange,Xe=oe.attributes.position;let xt=ot.start*lt,gt=(ot.start+ot.count)*lt;Re!==null&&(xt=Math.max(xt,Re.start*lt),gt=Math.min(gt,(Re.start+Re.count)*lt)),He!==null?(xt=Math.max(xt,0),gt=Math.min(gt,He.count)):Xe!=null&&(xt=Math.max(xt,0),gt=Math.min(gt,Xe.count));const zt=gt-xt;if(zt<0||zt===1/0)return;at.setup(q,J,Ve,oe,He);let Nt,bt=nt;if(He!==null&&(Nt=T.get(He),bt=Qe,bt.setIndex(Nt)),q.isMesh)J.wireframe===!0?(We.setLineWidth(J.wireframeLinewidth*dt()),bt.setMode(O.LINES)):bt.setMode(O.TRIANGLES);else if(q.isLine){let et=J.linewidth;et===void 0&&(et=1),We.setLineWidth(et*dt()),q.isLineSegments?bt.setMode(O.LINES):q.isLineLoop?bt.setMode(O.LINE_LOOP):bt.setMode(O.LINE_STRIP)}else q.isPoints?bt.setMode(O.POINTS):q.isSprite&&bt.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ra("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))bt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const et=q._multiDrawStarts,Lt=q._multiDrawCounts,yt=q._multiDrawCount,rn=He?T.get(He).bytesPerElement:1,sr=qe.get(J).currentProgram.getUniforms();for(let wn=0;wn<yt;wn++)sr.setValue(O,"_gl_DrawID",wn),bt.render(et[wn]/rn,Lt[wn])}else if(q.isInstancedMesh)bt.renderInstances(xt,zt,q.count);else if(oe.isInstancedBufferGeometry){const et=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Lt=Math.min(oe.instanceCount,et);bt.renderInstances(xt,zt,Lt)}else bt.render(xt,zt)};function ft(A,Y,oe){A.transparent===!0&&A.side===wi&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,gs(A,Y,oe),A.side=Or,A.needsUpdate=!0,gs(A,Y,oe),A.side=wi):gs(A,Y,oe)}this.compile=function(A,Y,oe=null){oe===null&&(oe=A),x=Le.get(oe),x.init(Y),P.push(x),oe.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),A!==oe&&A.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const J=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Re=q.material;if(Re)if(Array.isArray(Re))for(let Fe=0;Fe<Re.length;Fe++){const Ve=Re[Fe];ft(Ve,oe,q),J.add(Ve)}else ft(Re,oe,q),J.add(Re)}),x=P.pop(),J},this.compileAsync=function(A,Y,oe=null){const J=this.compile(A,Y,oe);return new Promise(q=>{function Re(){if(J.forEach(function(Fe){qe.get(Fe).currentProgram.isReady()&&J.delete(Fe)}),J.size===0){q(A);return}setTimeout(Re,10)}_t.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let qt=null;function Ot(A){qt&&qt(A)}function Bn(){Li.stop()}function mn(){Li.start()}const Li=new s_;Li.setAnimationLoop(Ot),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(A){qt=A,Se.setAnimationLoop(A),A===null?Li.stop():Li.start()},Se.addEventListener("sessionstart",Bn),Se.addEventListener("sessionend",mn),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(Y),Y=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,Y,X),x=Le.get(A,P.length),x.init(Y),P.push(x),ce.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Z.setFromProjectionMatrix(ce),j=this.localClippingEnabled,me=Ie.init(this.clippingPlanes,j),y=Ke.get(A,L.length),y.init(),L.push(y),Se.enabled===!0&&Se.isPresenting===!0){const Re=C.xr.getDepthSensingMesh();Re!==null&&Di(Re,Y,-1/0,C.sortObjects)}Di(A,Y,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(he,ie),pt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,pt&&ye.addToRenderList(y,A),this.info.render.frame++,me===!0&&Ie.beginShadows();const oe=x.state.shadowsArray;Ze.render(oe,A,Y),me===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=y.opaque,q=y.transmissive;if(x.setupLights(),Y.isArrayCamera){const Re=Y.cameras;if(q.length>0)for(let Fe=0,Ve=Re.length;Fe<Ve;Fe++){const He=Re[Fe];zr(J,q,A,He)}pt&&ye.render(A);for(let Fe=0,Ve=Re.length;Fe<Ve;Fe++){const He=Re[Fe];Br(y,A,He,He.viewport)}}else q.length>0&&zr(J,q,A,Y),pt&&ye.render(A),Br(y,A,Y);X!==null&&F===0&&(st.updateMultisampleRenderTarget(X),st.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,Y),at.resetDefaultState(),b=-1,R=null,P.pop(),P.length>0?(x=P[P.length-1],me===!0&&Ie.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Di(A,Y,oe,J){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){J&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);const Fe=ge.update(A),Ve=A.material;Ve.visible&&y.push(A,Fe,Ve,oe,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Fe=ge.update(A),Ve=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Pe.copy(Fe.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(Ve)){const He=Fe.groups;for(let lt=0,ot=He.length;lt<ot;lt++){const Xe=He[lt],xt=Ve[Xe.materialIndex];xt&&xt.visible&&y.push(A,Fe,xt,oe,Pe.z,Xe)}}else Ve.visible&&y.push(A,Fe,Ve,oe,Pe.z,null)}}const Re=A.children;for(let Fe=0,Ve=Re.length;Fe<Ve;Fe++)Di(Re[Fe],Y,oe,J)}function Br(A,Y,oe,J){const q=A.opaque,Re=A.transmissive,Fe=A.transparent;x.setupLightsView(oe),me===!0&&Ie.setGlobalState(C.clippingPlanes,oe),J&&We.viewport(H.copy(J)),q.length>0&&rr(q,Y,oe),Re.length>0&&rr(Re,Y,oe),Fe.length>0&&rr(Fe,Y,oe),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function zr(A,Y,oe,J){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[J.id]===void 0&&(x.state.transmissionRenderTarget[J.id]=new hs(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?yo:Pi,minFilter:us,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Re=x.state.transmissionRenderTarget[J.id],Fe=J.viewport||H;Re.setSize(Fe.z*C.transmissionResolutionScale,Fe.w*C.transmissionResolutionScale);const Ve=C.getRenderTarget(),He=C.getActiveCubeFace(),lt=C.getActiveMipmapLevel();C.setRenderTarget(Re),C.getClearColor(le),pe=C.getClearAlpha(),pe<1&&C.setClearColor(16777215,.5),C.clear(),pt&&ye.render(oe);const ot=C.toneMapping;C.toneMapping=Ji;const Xe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),x.setupLightsView(J),me===!0&&Ie.setGlobalState(C.clippingPlanes,J),rr(A,oe,J),st.updateMultisampleRenderTarget(Re),st.updateRenderTargetMipmap(Re),_t.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let gt=0,zt=Y.length;gt<zt;gt++){const Nt=Y[gt],bt=Nt.object,et=Nt.geometry,Lt=Nt.material,yt=Nt.group;if(Lt.side===wi&&bt.layers.test(J.layers)){const rn=Lt.side;Lt.side=kn,Lt.needsUpdate=!0,wo(bt,oe,J,et,Lt,yt),Lt.side=rn,Lt.needsUpdate=!0,xt=!0}}xt===!0&&(st.updateMultisampleRenderTarget(Re),st.updateRenderTargetMipmap(Re))}C.setRenderTarget(Ve,He,lt),C.setClearColor(le,pe),Xe!==void 0&&(J.viewport=Xe),C.toneMapping=ot}function rr(A,Y,oe){const J=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,Re=A.length;q<Re;q++){const Fe=A[q],Ve=Fe.object,He=Fe.geometry,lt=Fe.group;let ot=Fe.material;ot.allowOverride===!0&&J!==null&&(ot=J),Ve.layers.test(oe.layers)&&wo(Ve,Y,oe,He,ot,lt)}}function wo(A,Y,oe,J,q,Re){A.onBeforeRender(C,Y,oe,J,q,Re),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(C,Y,oe,J,A,Re),q.transparent===!0&&q.side===wi&&q.forceSinglePass===!1?(q.side=kn,q.needsUpdate=!0,C.renderBufferDirect(oe,Y,J,q,A,Re),q.side=Or,q.needsUpdate=!0,C.renderBufferDirect(oe,Y,J,q,A,Re),q.side=wi):C.renderBufferDirect(oe,Y,J,q,A,Re),A.onAfterRender(C,Y,oe,J,q,Re)}function gs(A,Y,oe){Y.isScene!==!0&&(Y=tt);const J=qe.get(A),q=x.state.lights,Re=x.state.shadowsArray,Fe=q.state.version,Ve=xe.getParameters(A,q.state,Re,Y,oe),He=xe.getProgramCacheKey(Ve);let lt=J.programs;J.environment=A.isMeshStandardMaterial?Y.environment:null,J.fog=Y.fog,J.envMap=(A.isMeshStandardMaterial?D:Ut).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,lt===void 0&&(A.addEventListener("dispose",Ae),lt=new Map,J.programs=lt);let ot=lt.get(He);if(ot!==void 0){if(J.currentProgram===ot&&J.lightsStateVersion===Fe)return vi(A,Ve),ot}else Ve.uniforms=xe.getUniforms(A),A.onBeforeCompile(Ve,C),ot=xe.acquireProgram(Ve,He),lt.set(He,ot),J.uniforms=Ve.uniforms;const Xe=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Ie.uniform),vi(A,Ve),J.needsLights=bu(A),J.lightsStateVersion=Fe,J.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=ot,J.uniformsList=null,ot}function To(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=du.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function vi(A,Y){const oe=qe.get(A);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function Ro(A,Y,oe,J,q){Y.isScene!==!0&&(Y=tt),st.resetTextureUnits();const Re=Y.fog,Fe=J.isMeshStandardMaterial?Y.environment:null,Ve=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ca,He=(J.isMeshStandardMaterial?D:Ut).get(J.envMap||Fe),lt=J.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ot=!!oe.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Xe=!!oe.morphAttributes.position,xt=!!oe.morphAttributes.normal,gt=!!oe.morphAttributes.color;let zt=Ji;J.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(zt=C.toneMapping);const Nt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,bt=Nt!==void 0?Nt.length:0,et=qe.get(J),Lt=x.state.lights;if(me===!0&&(j===!0||A!==R)){const fn=A===R&&J.id===b;Ie.setState(J,A,fn)}let yt=!1;J.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Lt.state.version||et.outputColorSpace!==Ve||q.isBatchedMesh&&et.batching===!1||!q.isBatchedMesh&&et.batching===!0||q.isBatchedMesh&&et.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&et.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&et.instancing===!1||!q.isInstancedMesh&&et.instancing===!0||q.isSkinnedMesh&&et.skinning===!1||!q.isSkinnedMesh&&et.skinning===!0||q.isInstancedMesh&&et.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&et.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&et.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&et.instancingMorph===!1&&q.morphTexture!==null||et.envMap!==He||J.fog===!0&&et.fog!==Re||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ie.numPlanes||et.numIntersection!==Ie.numIntersection)||et.vertexAlphas!==lt||et.vertexTangents!==ot||et.morphTargets!==Xe||et.morphNormals!==xt||et.morphColors!==gt||et.toneMapping!==zt||et.morphTargetsCount!==bt)&&(yt=!0):(yt=!0,et.__version=J.version);let rn=et.currentProgram;yt===!0&&(rn=gs(J,Y,q));let sr=!1,wn=!1,Ui=!1;const It=rn.getUniforms(),gn=et.uniforms;if(We.useProgram(rn.program)&&(sr=!0,wn=!0,Ui=!0),J.id!==b&&(b=J.id,wn=!0),sr||R!==A){We.buffers.depth.getReversed()?(fe.copy(A.projectionMatrix),QS(fe),eE(fe),It.setValue(O,"projectionMatrix",fe)):It.setValue(O,"projectionMatrix",A.projectionMatrix),It.setValue(O,"viewMatrix",A.matrixWorldInverse);const an=It.map.cameraPosition;an!==void 0&&an.setValue(O,be.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&It.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&It.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,wn=!0,Ui=!0)}if(q.isSkinnedMesh){It.setOptional(O,q,"bindMatrix"),It.setOptional(O,q,"bindMatrixInverse");const fn=q.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),It.setValue(O,"boneTexture",fn.boneTexture,st))}q.isBatchedMesh&&(It.setOptional(O,q,"batchingTexture"),It.setValue(O,"batchingTexture",q._matricesTexture,st),It.setOptional(O,q,"batchingIdTexture"),It.setValue(O,"batchingIdTexture",q._indirectTexture,st),It.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&It.setValue(O,"batchingColorTexture",q._colorsTexture,st));const sn=oe.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Be.update(q,oe,rn),(wn||et.receiveShadow!==q.receiveShadow)&&(et.receiveShadow=q.receiveShadow,It.setValue(O,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(gn.envMap.value=He,gn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&Y.environment!==null&&(gn.envMapIntensity.value=Y.environmentIntensity),wn&&(It.setValue(O,"toneMappingExposure",C.toneMappingExposure),et.needsLights&&Ao(gn,Ui),Re&&J.fog===!0&&de.refreshFogUniforms(gn,Re),de.refreshMaterialUniforms(gn,J,z,ve,x.state.transmissionRenderTarget[A.id]),du.upload(O,To(et),gn,st)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(du.upload(O,To(et),gn,st),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&It.setValue(O,"center",q.center),It.setValue(O,"modelViewMatrix",q.modelViewMatrix),It.setValue(O,"normalMatrix",q.normalMatrix),It.setValue(O,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const fn=J.uniformsGroups;for(let an=0,wt=fn.length;an<wt;an++){const _i=fn[an];V.update(_i,rn),V.bind(_i,rn)}}return rn}function Ao(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function bu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,Y,oe){const J=qe.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),qe.get(A.texture).__webglTexture=Y,qe.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:oe,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const oe=qe.get(A);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0};const Co=O.createFramebuffer();this.setRenderTarget=function(A,Y=0,oe=0){X=A,N=Y,F=oe;let J=!0,q=null,Re=!1,Fe=!1;if(A){const He=qe.get(A);if(He.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(O.FRAMEBUFFER,null),J=!1;else if(He.__webglFramebuffer===void 0)st.setupRenderTarget(A);else if(He.__hasExternalTextures)st.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(He.__boundDepthTexture!==Xe){if(Xe!==null&&qe.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(A)}}const lt=A.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Fe=!0);const ot=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ot[Y])?q=ot[Y][oe]:q=ot[Y],Re=!0):A.samples>0&&st.useMultisampledRTT(A)===!1?q=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(ot)?q=ot[oe]:q=ot,H.copy(A.viewport),se.copy(A.scissor),Q=A.scissorTest}else H.copy(I).multiplyScalar(z).floor(),se.copy(ae).multiplyScalar(z).floor(),Q=De;if(oe!==0&&(q=Co),We.bindFramebuffer(O.FRAMEBUFFER,q)&&J&&We.drawBuffers(A,q),We.viewport(H),We.scissor(se),We.setScissorTest(Q),Re){const He=qe.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,He.__webglTexture,oe)}else if(Fe){const He=qe.get(A.texture),lt=Y;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.__webglTexture,oe,lt)}else if(A!==null&&oe!==0){const He=qe.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,He.__webglTexture,oe)}b=-1},this.readRenderTargetPixels=function(A,Y,oe,J,q,Re,Fe,Ve=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){We.bindFramebuffer(O.FRAMEBUFFER,He);try{const lt=A.textures[Ve],ot=lt.format,Xe=lt.type;if(!Mt.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-J&&oe>=0&&oe<=A.height-q&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ve),O.readPixels(Y,oe,J,q,Ue.convert(ot),Ue.convert(Xe),Re))}finally{const lt=X!==null?qe.get(X).__webglFramebuffer:null;We.bindFramebuffer(O.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,oe,J,q,Re,Fe,Ve=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He)if(Y>=0&&Y<=A.width-J&&oe>=0&&oe<=A.height-q){We.bindFramebuffer(O.FRAMEBUFFER,He);const lt=A.textures[Ve],ot=lt.format,Xe=lt.type;if(!Mt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.bufferData(O.PIXEL_PACK_BUFFER,Re.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ve),O.readPixels(Y,oe,J,q,Ue.convert(ot),Ue.convert(Xe),0);const gt=X!==null?qe.get(X).__webglFramebuffer:null;We.bindFramebuffer(O.FRAMEBUFFER,gt);const zt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await JS(O,zt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Re),O.deleteBuffer(xt),O.deleteSync(zt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,oe=0){const J=Math.pow(2,-oe),q=Math.floor(A.image.width*J),Re=Math.floor(A.image.height*J),Fe=Y!==null?Y.x:0,Ve=Y!==null?Y.y:0;st.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,oe,0,0,Fe,Ve,q,Re),We.unbindTexture()};const bo=O.createFramebuffer(),Po=O.createFramebuffer();this.copyTextureToTexture=function(A,Y,oe=null,J=null,q=0,Re=null){Re===null&&(q!==0?(ra("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=q,q=0):Re=0);let Fe,Ve,He,lt,ot,Xe,xt,gt,zt;const Nt=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(oe!==null)Fe=oe.max.x-oe.min.x,Ve=oe.max.y-oe.min.y,He=oe.isBox3?oe.max.z-oe.min.z:1,lt=oe.min.x,ot=oe.min.y,Xe=oe.isBox3?oe.min.z:0;else{const sn=Math.pow(2,-q);Fe=Math.floor(Nt.width*sn),Ve=Math.floor(Nt.height*sn),A.isDataArrayTexture?He=Nt.depth:A.isData3DTexture?He=Math.floor(Nt.depth*sn):He=1,lt=0,ot=0,Xe=0}J!==null?(xt=J.x,gt=J.y,zt=J.z):(xt=0,gt=0,zt=0);const bt=Ue.convert(Y.format),et=Ue.convert(Y.type);let Lt;Y.isData3DTexture?(st.setTexture3D(Y,0),Lt=O.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(st.setTexture2DArray(Y,0),Lt=O.TEXTURE_2D_ARRAY):(st.setTexture2D(Y,0),Lt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const yt=O.getParameter(O.UNPACK_ROW_LENGTH),rn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),sr=O.getParameter(O.UNPACK_SKIP_PIXELS),wn=O.getParameter(O.UNPACK_SKIP_ROWS),Ui=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Nt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Nt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,lt),O.pixelStorei(O.UNPACK_SKIP_ROWS,ot),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe);const It=A.isDataArrayTexture||A.isData3DTexture,gn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const sn=qe.get(A),fn=qe.get(Y),an=qe.get(sn.__renderTarget),wt=qe.get(fn.__renderTarget);We.bindFramebuffer(O.READ_FRAMEBUFFER,an.__webglFramebuffer),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let _i=0;_i<He;_i++)It&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,q,Xe+_i),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qe.get(Y).__webglTexture,Re,zt+_i)),O.blitFramebuffer(lt,ot,Fe,Ve,xt,gt,Fe,Ve,O.DEPTH_BUFFER_BIT,O.NEAREST);We.bindFramebuffer(O.READ_FRAMEBUFFER,null),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||qe.has(A)){const sn=qe.get(A),fn=qe.get(Y);We.bindFramebuffer(O.READ_FRAMEBUFFER,bo),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,Po);for(let an=0;an<He;an++)It?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,sn.__webglTexture,q,Xe+an):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,sn.__webglTexture,q),gn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,fn.__webglTexture,Re,zt+an):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fn.__webglTexture,Re),q!==0?O.blitFramebuffer(lt,ot,Fe,Ve,xt,gt,Fe,Ve,O.COLOR_BUFFER_BIT,O.NEAREST):gn?O.copyTexSubImage3D(Lt,Re,xt,gt,zt+an,lt,ot,Fe,Ve):O.copyTexSubImage2D(Lt,Re,xt,gt,lt,ot,Fe,Ve);We.bindFramebuffer(O.READ_FRAMEBUFFER,null),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else gn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Lt,Re,xt,gt,zt,Fe,Ve,He,bt,et,Nt.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Lt,Re,xt,gt,zt,Fe,Ve,He,bt,Nt.data):O.texSubImage3D(Lt,Re,xt,gt,zt,Fe,Ve,He,bt,et,Nt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Re,xt,gt,Fe,Ve,bt,et,Nt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Re,xt,gt,Nt.width,Nt.height,bt,Nt.data):O.texSubImage2D(O.TEXTURE_2D,Re,xt,gt,Fe,Ve,bt,et,Nt);O.pixelStorei(O.UNPACK_ROW_LENGTH,yt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,sr),O.pixelStorei(O.UNPACK_SKIP_ROWS,wn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ui),Re===0&&Y.generateMipmaps&&O.generateMipmap(Lt),We.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,oe=null,J=null,q=0){return ra('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,oe,J,q)},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&st.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?st.setTextureCube(A,0):A.isData3DTexture?st.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?st.setTexture2DArray(A,0):st.setTexture2D(A,0),We.unbindTexture()},this.resetState=function(){N=0,F=0,X=null,We.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}function wR(i){switch(i){case"fa-user-tag":case"fa-person":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"12",cy:"7",r:"3.5"}),$.jsx("path",{d:"M5 21c0-4.2 3.1-7 7-7s7 2.8 7 7"})]});case"fa-venus-mars":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"8",cy:"9",r:"3.5"}),$.jsx("path",{d:"M8 12.5V21M5 17.5h6"}),$.jsx("circle",{cx:"16.5",cy:"14.5",r:"3.5"}),$.jsx("path",{d:"M19 12l3-3m0 0h-4m4 0v4"})]});case"fa-palette":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0 0-5H12a2 2 0 0 1 0-4h3a6 6 0 0 0-3-9Z"}),$.jsx("circle",{cx:"7",cy:"10",r:".7",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"6.5",r:".7",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"13",cy:"5.8",r:".7",fill:"currentColor",stroke:"none"})]});case"fa-eye":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z"}),$.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]});case"fa-eye-dropper":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m14 5 5 5M16.5 2.5l5 5-10 10-4 1 1-4 10-10Z"}),$.jsx("path",{d:"M5 19h6"})]});case"fa-scissors":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"6",cy:"7",r:"2.5"}),$.jsx("circle",{cx:"6",cy:"17",r:"2.5"}),$.jsx("path",{d:"m8 8.5 12 8.5M8 15.5 20 7"})]});case"fa-fill-drip":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m4 14 8-8 6 6-8 8H4v-6Z"}),$.jsx("path",{d:"M15 5 12 2"}),$.jsx("path",{d:"M20 15s2 2.2 2 3.5a2 2 0 0 1-4 0c0-1.3 2-3.5 2-3.5Z"})]});case"fa-hat-cowboy":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M4 16h16M7 16l1.5-7h7L17 16"}),$.jsx("path",{d:"M2.5 16c1.5 3 17.5 3 19 0"})]});case"fa-shirt":return $.jsx("path",{d:"M8 4h8l5 4-3 4-2-2v10H8V10l-2 2-3-4 5-4Z"});case"fa-shoe-prints":return $.jsxs($.Fragment,{children:[$.jsx("ellipse",{cx:"8",cy:"8",rx:"2.5",ry:"4",transform:"rotate(-20 8 8)"}),$.jsx("ellipse",{cx:"16",cy:"16",rx:"2.5",ry:"4",transform:"rotate(-20 16 16)"})]});case"fa-gem":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M6 4h12l4 5-10 11L2 9l4-5Z"}),$.jsx("path",{d:"M2 9h20M8 4l4 16 4-16"})]});case"fa-sliders":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M4 6h5M15 6h5M4 12h10M18 12h2M4 18h2M10 18h10"}),$.jsx("circle",{cx:"12",cy:"6",r:"2"}),$.jsx("circle",{cx:"16",cy:"12",r:"2"}),$.jsx("circle",{cx:"8",cy:"18",r:"2"})]});case"fa-grip-vertical":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"9",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"18",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"18",r:"1",fill:"currentColor",stroke:"none"})]});case"fa-chevron-up":return $.jsx("path",{d:"m6 15 6-6 6 6"});case"fa-chevron-down":return $.jsx("path",{d:"m6 9 6 6 6-6"});case"fa-check":return $.jsx("path",{d:"m5 12 4 4L19 6"});case"fa-arrows-rotate":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M20 7v5h-5"}),$.jsx("path",{d:"M4 17v-5h5"}),$.jsx("path",{d:"M6.2 8.2A7 7 0 0 1 18.8 10M17.8 15.8A7 7 0 0 1 5.2 14"})]});case"fa-layer-group":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),$.jsx("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]});case"fa-pause":return $.jsx("path",{d:"M8 5v14M16 5v14"});case"fa-play":return $.jsx("path",{d:"m8 5 11 7-11 7V5Z"});case"fa-download":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M12 3v12m0 0 4-4m-4 4-4-4"}),$.jsx("path",{d:"M5 20h14"})]});default:return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"12",cy:"12",r:"8"}),$.jsx("path",{d:"M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01"})]})}}function Ur({name:i,className:e=""}){return $.jsx("svg",{className:`skincrafter-icon ${e}`.trim(),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false","data-skincrafter-icon":i,children:wR(i)})}function c_({title:i,icon:e,iconClassName:t="skincrafter-accent-text",className:s="",children:a}){return $.jsxs("section",{className:`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${s}`,children:[$.jsxs("h2",{className:"text-xl font-bold mb-2 skincrafter-heading flex items-center",children:[$.jsx(Ur,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),i]}),a]})}function eu({icon:i,className:e="",children:t,...s}){return $.jsxs("button",{className:`pixel-button preview-action-button p-2 pixel-border transition-colors ${e}`,...s,children:[i&&$.jsx(Ur,{name:i,className:"skincrafter-button-icon"}),t]})}const TR=""+new URL("/assets/default-BAcllNor-BAcllNor.png",import.meta.url).href,RR=""+new URL("/assets/male.tintable-fxeAI3uu-fxeAI3uu.png",import.meta.url).href,AR=""+new URL("/assets/male.fixed-DcqZ3kjg-DcqZ3kjg.png",import.meta.url).href,CR=""+new URL("/assets/female.tintable-BLp5_Gdk-BLp5_Gdk.png",import.meta.url).href,bR=""+new URL("/assets/female.fixed-DbzKxh-8-DbzKxh-8.png",import.meta.url).href,PR=""+new URL("/assets/male.fixed-C1cq_pNO-C1cq_pNO.png",import.meta.url).href,LR=""+new URL("/assets/male.tintable-D_4mkZ79-D_4mkZ79.png",import.meta.url).href,DR=""+new URL("/assets/male.fixed-BGzxECBj-BGzxECBj.png",import.meta.url).href,UR=""+new URL("/assets/male.tintable-Dll7q7aD-Dll7q7aD.png",import.meta.url).href,NR=""+new URL("/assets/male.fixed-DKYrqDB3-DKYrqDB3.png",import.meta.url).href,IR=""+new URL("/assets/none.tintable-Bs7knCxE-Bs7knCxE.png",import.meta.url).href,FR=""+new URL("/assets/none.fixed-DGZLEiFj-DGZLEiFj.png",import.meta.url).href,OR=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,kR=""+new URL("/assets/clasic.fixed-Dli_mmU6-Dli_mmU6.png",import.meta.url).href,BR=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,zR=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,HR=""+new URL("/assets/big.fixed-BuEC2Ubs-BuEC2Ubs.png",import.meta.url).href,VR=""+new URL("/assets/duck-Dz_q_Va_-Dz_q_Va_.png",import.meta.url).href,GR=""+new URL("/assets/hoodie-C1a1is5P-C1a1is5P.png",import.meta.url).href,WR=""+new URL("/assets/pants-gRdPSA1G-gRdPSA1G.png",import.meta.url).href,f_={"textures/preview/default.png":TR,"textures/race/human/male.tintable.png":RR,"textures/race/human/male.fixed.png":AR,"textures/race/human/female.tintable.png":CR,"textures/race/human/female.fixed.png":bR,"textures/race/bear/male.fixed.png":PR,"textures/race/orc/male.tintable.png":LR,"textures/race/orc/male.fixed.png":DR,"textures/race/zombie/male.tintable.png":UR,"textures/race/zombie/male.fixed.png":NR,"textures/race/template/none.tintable.png":IR,"textures/race/template/none.fixed.png":FR,"textures/eyes/clasic.tintable.png":OR,"textures/eyes/clasic.fixed.png":kR,"textures/eyes/small.tintable.png":BR,"textures/eyes/big.tintable.png":zR,"textures/eyes/big.fixed.png":HR,"textures/hat/duck.png":VR,"textures/top/male/hoodie.png":GR,"textures/bottom/pants.png":WR};function aa(i,e){return e?`${e.replace(/\/+$/,"")}/${i.replace(/^\/+/,"")}`:f_[i]}const Yg=f_["textures/preview/default.png"],ea=64,XR=["bottom"];function Qn(i,e,t,s,a,l,c,f,d={}){const{transparent:p=!1,expand:m=0,rotate180Faces:v=[],flipXFaces:_=[],flipYFaces:S=XR}=d,E=new Set(v),w=new Set(_),y=new Set(S),x=new ga(e+m,t+m,s+m),L=()=>new ah({transparent:p,toneMapped:!1,alphaTest:p?.1:0,side:wi}),P=[L(),L(),L(),L(),L(),L()],C=(X,b,R=!1,H=!1)=>{const se=i.clone(),Q=(b[2]-b[0])/ea,le=(b[3]-b[1])/ea,pe=b[0]/ea,ue=b[2]/ea,ve=1-b[1]/ea,z=1-b[3]/ea;se.magFilter=pn,se.minFilter=pn,se.generateMipmaps=!1,se.wrapS=lo,se.wrapT=lo,se.repeat.set(R?-Q:Q,H?-le:le),se.offset.set(R?ue:pe,H?ve:z),se.needsUpdate=!0,X.map=se},k=X=>E.has(X)||w.has(X),N=X=>E.has(X)||y.has(X);C(P[0],f.right,k("right"),N("right")),C(P[1],f.left,k("left"),N("left")),C(P[2],f.top,k("top"),N("top")),C(P[3],f.bottom,k("bottom"),N("bottom")),C(P[4],f.front,k("front"),N("front")),C(P[5],f.back,k("back"),N("back"));const F=new Ri(x,P);return F.position.set(a,l,c),F}const jR=-6,$R=6,tu=new ne(-5,16,0),nu=new ne(5,16,0),d_=-1.9,h_=1.9,qg=new ne(d_,6,0),Kg=new ne(h_,6,0);function ei(i,e,t,s){if(!i)return;const a=e.clone().sub(t).applyEuler(s).add(t);i.position.copy(a),i.rotation.copy(s)}function YR(i,e,t={}){const{armL:s,armR:a,legL:l,legR:c,armLOL:f,armROL:d,legLOL:p,legROL:m}=e,v=t.leftArmX??$R,_=t.rightArmX??jR,S=new ne(v,12,0),E=new ne(_,12,0),w=new ne(h_,0,0),y=new ne(d_,0,0);if(!(!s||!a||!l||!c)){if([s,a,l,c,f,d,p,m].forEach(x=>x?.rotation.set(0,0,0)),s.position.copy(S),a.position.copy(E),l.position.copy(w),c.position.copy(y),f?.position.copy(S),d?.position.copy(E),p?.position.copy(w),m?.position.copy(y),i==="tpose"){const x=new Pn(0,0,Math.PI/2),L=new Pn(0,0,-Math.PI/2);ei(s,S,nu,x),ei(a,E,tu,L),ei(f,S,nu,x),ei(d,E,tu,L)}else if(i==="walking"){const x=-Math.PI/4,L=Math.PI/4,P=new Pn(x,0,0),C=new Pn(L,0,0),k=new Pn(L,0,0),N=new Pn(x,0,0);ei(s,S,nu,P),ei(a,E,tu,C),ei(l,w,Kg,k),ei(c,y,qg,N),ei(f,S,nu,P),ei(d,E,tu,C),ei(p,w,Kg,k),ei(m,y,qg,N)}}}const qR={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},KR={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},ZR={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},JR={left:[40,20,44,32],right:[47,20,51,32],top:[44,16,47,20],bottom:[47,16,50,20],front:[44,20,47,32],back:[51,20,54,32]},QR={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},eA={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},tA={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},nA={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},iA={left:[40,36,44,48],right:[47,36,51,48],top:[44,32,47,36],bottom:[47,32,50,36],front:[44,36,47,48],back:[51,36,54,48]},rA={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},sA={left:[32,52,36,64],right:[40,52,44,64],top:[36,48,40,52],bottom:[40,48,44,52],front:[36,52,40,64],back:[44,52,48,64]},aA={left:[32,52,36,64],right:[39,52,43,64],top:[36,48,39,52],bottom:[39,48,42,52],front:[36,52,39,64],back:[43,52,46,64]},oA={left:[16,52,20,64],right:[24,52,28,64],top:[20,48,24,52],bottom:[24,48,28,52],front:[20,52,24,64],back:[28,52,32,64]},lA={left:[48,52,52,64],right:[56,52,60,64],top:[52,48,56,52],bottom:[56,48,60,52],front:[52,52,56,64],back:[60,52,64,64]},uA={left:[48,52,52,64],right:[55,52,59,64],top:[52,48,55,52],bottom:[55,48,58,52],front:[52,52,55,64],back:[59,52,62,64]},cA={left:[0,52,4,64],right:[8,52,12,64],top:[4,48,8,52],bottom:[8,48,12,52],front:[4,52,8,64],back:[12,52,16,64]},jf=0,fA=44,dA=24,hA=72,pA=.04,mA=1,gA=.5,Zg=-6,Jg=6,Qg=-5.5,ev=5.5,tv=-1.9,nv=1.9,iv=()=>({armL:null,armR:null,legL:null,legR:null,armLOL:null,armROL:null,legLOL:null,legROL:null,headOL:null,bodyOL:null}),vA={createRenderer:()=>new MR({antialias:!1,alpha:!0}),createTextureLoader:()=>new IE,createResizeObserver:i=>new ResizeObserver(i),requestAnimationFrame:i=>window.requestAnimationFrame(i),cancelAnimationFrame:i=>window.cancelAnimationFrame(i),addWindowResizeListener:i=>window.addEventListener("resize",i),removeWindowResizeListener:i=>window.removeEventListener("resize",i),getDevicePixelRatio:()=>window.devicePixelRatio||1};class _A{constructor(e,t,s=vA){this.container=e,this.dependencies=s,this.pose=t.pose,this.model=t.model,this.showOverlay=t.showOverlay,this.autoRotate=t.autoRotate,this.onError=t.onError;const a=e.clientWidth||1,l=e.clientHeight||1;this.renderer=s.createRenderer(),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=bn,this.renderer.toneMapping=Ji,this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(a,l),e.appendChild(this.renderer.domElement),this.camera=new ni(52,a/l,.1,1e3),this.camera.position.set(0,jf,this.cameraDistance),this.camera.lookAt(0,jf,0),this.scene=new RE;const c=new BE(16777215,1);c.position.set(10,10,10),this.scene.add(c),this.group=new no,this.group.position.y=-10,this.scene.add(this.group),this.textureLoader=s.createTextureLoader(),this.resizeObserver=s.createResizeObserver(this.handleResize),this.resizeObserver.observe(e),s.addWindowResizeListener(this.handleResize),e.addEventListener("wheel",this.handleWheel,{passive:!1}),this.handleResize(),this.scheduleAnimationFrame(),this.setTexture(t.textureUrl)}container;dependencies;renderer;camera;scene;group;textureLoader;resizeObserver;onError;disposedTextures=new WeakSet;pendingTextures=new Map;parts=iv();modelMeshes=[];currentTexture=null;requestedTextureUrl=null;textureLoadVersion=0;animationFrameId=null;disposed=!1;pose;model;showOverlay;autoRotate;cameraDistance=fA;modelRevision=0;textureRevision=0;setTexture(e){if(this.disposed||e===this.requestedTextureUrl)return;this.requestedTextureUrl=e;const t=++this.textureLoadVersion;let s=!1;const a=this.textureLoader.load(e,l=>{s=!0,this.pendingTextures.delete(t),this.handleTextureLoaded(t,l)},void 0,l=>{s=!0;const c=this.pendingTextures.get(t);c&&(this.disposeTexture(c),this.pendingTextures.delete(t)),!this.disposed&&t===this.textureLoadVersion&&this.onError?.({code:"texture_load_failed",textureUrl:e,cause:l})});s||this.pendingTextures.set(t,a)}setModel(e){this.disposed||e===this.model||(this.model=e,this.currentTexture&&this.buildModel(this.currentTexture))}setPose(e){this.disposed||e===this.pose||(this.pose=e,this.applyCurrentPose())}setShowOverlay(e){this.disposed||e===this.showOverlay||(this.showOverlay=e,this.applyOverlayVisibility())}setAutoRotate(e){this.disposed||(this.autoRotate=e)}getDiagnostics(){const e=this.parts.armR?.geometry.parameters.width;return{rendererAttached:this.renderer.domElement.parentNode===this.container,modelRevision:this.modelRevision,textureRevision:this.textureRevision,meshCount:this.modelMeshes.length,rightArmWidth:typeof e=="number"?e:null,overlayVisible:this.getOverlayMeshes().map(t=>t.visible),cameraDistance:this.cameraDistance,rotation:this.group.rotation.y}}dispose(){this.disposed||(this.disposed=!0,this.textureLoadVersion+=1,this.container.removeEventListener("wheel",this.handleWheel),this.dependencies.removeWindowResizeListener(this.handleResize),this.resizeObserver.disconnect(),this.animationFrameId!==null&&(this.dependencies.cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.pendingTextures.forEach(e=>this.disposeTexture(e)),this.pendingTextures.clear(),this.disposeModel(),this.currentTexture&&(this.disposeTexture(this.currentTexture),this.currentTexture=null),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement))}handleResize=()=>{if(this.disposed)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()};handleWheel=e=>{this.disposed||(e.preventDefault(),this.cameraDistance=KS.clamp(this.cameraDistance+e.deltaY*pA,dA,hA),this.camera.position.z=this.cameraDistance,this.camera.lookAt(0,jf,0),this.camera.updateProjectionMatrix())};scheduleAnimationFrame(){this.animationFrameId=this.dependencies.requestAnimationFrame(()=>{this.disposed||(this.autoRotate&&(this.group.rotation.y+=.01),this.renderer.render(this.scene,this.camera),this.scheduleAnimationFrame())})}getClampedDpr(){return Math.min(this.dependencies.getDevicePixelRatio(),2)}handleTextureLoaded(e,t){if(this.disposed||e!==this.textureLoadVersion){this.disposeTexture(t);return}this.configureTexture(t);const s=this.currentTexture;this.modelMeshes.length===0?this.buildModel(t):this.replaceModelTexture(t),this.currentTexture=t,this.textureRevision+=1,s&&s!==t&&this.disposeTexture(s)}configureTexture(e){e.magFilter=pn,e.minFilter=pn,e.generateMipmaps=!1,e.colorSpace=bn,e.wrapS=qi,e.wrapT=qi}buildModel(e){this.disposeModel();const t=this.model==="slim",s=t?3:4,a=t?Qg:Zg,l=t?ev:Jg,c=t?JR:ZR,f=t?aA:sA,d=t?iA:nA,p=t?uA:lA,m=Qn(e,8,8,8,0,22,0,qR),v=Qn(e,8,12,4,0,12,0,KR),_=Qn(e,s,12,4,a,12,0,c),S=Qn(e,s,12,4,l,12,0,f),E=Qn(e,4,12,4,tv,0,0,QR),w=Qn(e,4,12,4,nv,0,0,oA),y={transparent:!0,expand:mA},x={transparent:!0,expand:gA},L=Qn(e,8,8,8,0,22,0,eA,y),P=Qn(e,8,12,4,0,12,0,tA,x),C=Qn(e,s,12,4,a,12,0,d,x),k=Qn(e,s,12,4,l,12,0,p,x),N=Qn(e,4,12,4,tv,0,0,rA,x),F=Qn(e,4,12,4,nv,0,0,cA,x);this.parts={armL:S,armR:_,legL:w,legR:E,armLOL:k,armROL:C,legLOL:F,legROL:N,headOL:L,bodyOL:P},this.modelMeshes=[m,v,_,S,E,w,L,P,C,k,N,F],this.group.add(...this.modelMeshes),this.modelRevision+=1,this.applyOverlayVisibility(),this.applyCurrentPose()}replaceModelTexture(e){this.modelMeshes.forEach(t=>{t.material.forEach(s=>{const a=s.map;if(!a)return;const l=e.clone();l.magFilter=pn,l.minFilter=pn,l.generateMipmaps=!1,l.colorSpace=bn,l.wrapS=a.wrapS,l.wrapT=a.wrapT,l.repeat.copy(a.repeat),l.offset.copy(a.offset),l.center.copy(a.center),l.rotation=a.rotation,l.flipY=a.flipY,l.needsUpdate=!0,s.map=l,s.needsUpdate=!0,this.disposeTexture(a)})})}applyCurrentPose(){const e=this.model==="slim";YR(this.pose,{armL:this.parts.armL,armR:this.parts.armR,legL:this.parts.legL,legR:this.parts.legR,armLOL:this.parts.armLOL,armROL:this.parts.armROL,legLOL:this.parts.legLOL,legROL:this.parts.legROL},{leftArmX:e?ev:Jg,rightArmX:e?Qg:Zg})}applyOverlayVisibility(){this.getOverlayMeshes().forEach(e=>{e.visible=this.showOverlay})}getOverlayMeshes(){return[this.parts.headOL,this.parts.bodyOL,this.parts.armLOL,this.parts.armROL,this.parts.legLOL,this.parts.legROL].filter(e=>e!==null)}disposeModel(){this.modelMeshes.forEach(e=>{this.group.remove(e),e.geometry.dispose(),e.material.forEach(t=>{t.map&&(this.disposeTexture(t.map),t.map=null),t.dispose()})}),this.modelMeshes=[],this.parts=iv()}disposeTexture(e){this.disposedTextures.has(e)||(this.disposedTextures.add(e),e.dispose())}}function xA(i,e,t){return new _A(i,e,t)}function yA(i){return{code:"preview_texture_load_failed",category:"preview",message:`Failed to load preview texture: ${i.textureUrl}`,assetUrl:i.textureUrl,cause:i.cause}}function SA({texture:i,pose:e="default",model:t="classic",showOverlay:s=!0,autoRotate:a=!0,style:l,onError:c}){const f=G.useRef(null),d=G.useRef(null),p=G.useRef(c),m=G.useRef({textureUrl:i??Yg,pose:e,model:t,showOverlay:s,autoRotate:a,onError:v=>p.current?.(yA(v))});return G.useEffect(()=>{p.current=c},[c]),G.useEffect(()=>{const v=f.current;if(!v)return;let _;try{_=xA(v,m.current)}catch(S){p.current?.({code:"preview_webgl_initialization_failed",category:"preview",message:"Failed to initialize the WebGL skin preview.",cause:S});return}return d.current=_,()=>{_.dispose(),d.current===_&&(d.current=null)}},[]),G.useEffect(()=>{d.current?.setTexture(i??Yg)},[i]),G.useEffect(()=>{d.current?.setModel(t)},[t]),G.useEffect(()=>{d.current?.setPose(e)},[e]),G.useEffect(()=>{d.current?.setShowOverlay(s)},[s]),G.useEffect(()=>{d.current?.setAutoRotate(a)},[a]),$.jsx("div",{ref:f,style:{width:"100%",height:"100%",minHeight:0,position:"relative",touchAction:"none",...l??{}}})}const p_=["en","pl"],_a="en",rv={en:{"app.title":"SkinCrafter","nav.wardrobe":"Wardrobe","nav.skinView":"Skin View","nav.language":"Language","nav.workInProgress":"Work in progress","panel.preview":"Preview","panel.customization":"Customization","panel.loadSkin":"Load Minecraft Skin","action.changePose":"Change Pose","action.hideOverlay":"Hide Overlay","action.showOverlay":"Show Overlay","action.disableAutoRotate":"Stop Rotation","action.enableAutoRotate":"Start Rotation","action.download":"Download","action.downloadSkin":"Download character skin","action.dragLayer":"Drag layer","action.moveLayerUp":"Move layer up","action.moveLayerDown":"Move layer down","action.loadSkin":"Load Skin","action.loading":"Loading...","error.assetLoad":"A skin texture could not be loaded. Check the selected assets and try again.","error.generation":"The skin could not be generated. Change the selection and try again.","error.initialSkin":"The supplied skin is not a valid 64x64 Minecraft PNG.","error.preview":"The 3D preview could not be loaded. Skin editing and download may still be available.","skinView.player":"Player","skinView.username":"Minecraft username","category.race":"Character Race","category.sex":"Sex","category.skinColor":"Skin Color","category.eyes":"Eyes","category.eyesColor":"Eye Color","category.hair":"Hair","category.hairColor":"Hair Color","category.hat":"Hat","category.shirt":"Shirt","category.pants":"Pants","category.shoes":"Shoes","category.accessory":"Accessory","option.none":"None","option.sex.Male":"Male","option.sex.Female":"Female","option.race.Human":"Human","option.race.Bear":"Bear","option.race.Orc":"Orc","option.race.Zombie":"Zombie","option.race.Template":"Template","option.eyes.Classic":"Classic","option.eyes.Small":"Small","option.eyes.Big":"Big","option.hat.Duck":"Duck","option.shirt.Hoodie":"Hoodie","option.pants.Pants":"Pants","option.color.blue":"Blue","option.color.green":"Green","option.color.brown":"Brown","option.color.blond":"Blond","option.color.black":"Black"},pl:{"app.title":"SkinCrafter","nav.wardrobe":"Kreator","nav.skinView":"Podglad","nav.language":"Jezyk","nav.workInProgress":"Produkt w trakcie prac","panel.preview":"Podglad","panel.customization":"Personalizacja","panel.loadSkin":"Wczytaj skin Minecraft","action.changePose":"Zmien Poze","action.hideOverlay":"Ukryj Warstwe","action.showOverlay":"Pokaz Warstwe","action.disableAutoRotate":"Zatrzymaj Obrot","action.enableAutoRotate":"Wlacz Obrot","action.download":"Pobierz","action.downloadSkin":"Pobierz skin postaci","action.dragLayer":"Przeciagnij warstwe","action.moveLayerUp":"Przesun warstwe wyzej","action.moveLayerDown":"Przesun warstwe nizej","action.loadSkin":"Wczytaj Skin","action.loading":"Wczytywanie...","error.assetLoad":"Nie udalo sie wczytac tekstury skina. Sprawdz wybrane elementy i sprobuj ponownie.","error.generation":"Nie udalo sie wygenerowac skina. Zmien wybor i sprobuj ponownie.","error.initialSkin":"Przekazany skin nie jest prawidlowym plikiem PNG Minecraft 64x64.","error.preview":"Nie udalo sie uruchomic podgladu 3D. Edycja i pobieranie skina moga nadal dzialac.","skinView.player":"Gracz","skinView.username":"Nazwa gracza Minecraft","category.race":"Rasa Postaci","category.sex":"Plec","category.skinColor":"Kolor Skory","category.eyes":"Oczy","category.eyesColor":"Kolor Oczu","category.hair":"Wlosy","category.hairColor":"Kolor Wlosow","category.hat":"Czapka","category.shirt":"Koszulka","category.pants":"Spodnie","category.shoes":"Buty","category.accessory":"Dodatek","option.none":"Brak","option.sex.Male":"Mezczyzna","option.sex.Female":"Kobieta","option.race.Human":"Czlowiek","option.race.Bear":"Niedzwiedz","option.race.Orc":"Ork","option.race.Zombie":"Zombie","option.race.Template":"Szablon","option.eyes.Classic":"Klasyczne","option.eyes.Small":"Male","option.eyes.Big":"Duze","option.hat.Duck":"Kaczka","option.shirt.Hoodie":"Bluza","option.pants.Pants":"Spodnie","option.color.blue":"Niebieski","option.color.green":"Zielony","option.color.brown":"Brazowy","option.color.blond":"Blond","option.color.black":"Czarny"}};function EA(i){return!!i&&p_.includes(i)}function Mo(i,e){return rv[i][e]??rv[_a][e]??e}const MA=i=>Mo(_a,i);function wA(i){return i.code==="asset_load_failed"?"error.assetLoad":i.code==="invalid_initial_skin"?"error.initialSkin":i.category==="preview"?"error.preview":"error.generation"}function m_({texture:i,model:e="classic",footerHeight:t=0,t:s=MA,onSave:a,canSave:l,generationStatus:c,generationError:f,onError:d}){const[p,m]=G.useState("default"),[v,_]=G.useState(!0),[S,E]=G.useState(!0),[w,y]=G.useState(null),x=()=>{m(R=>R==="default"?"tpose":R==="tpose"?"walking":"default")},L=()=>{_(R=>!R)},P=()=>{E(R=>!R)},C=l??!!i,k=()=>{if(!i||!C)return;const R=document.createElement("a");R.href=i,R.download="skincrafter-skin.png",R.click()},N=()=>{if(C){if(a){a();return}k()}},F=G.useCallback(R=>{y(R),d?.(R)},[d]);G.useEffect(()=>{y(R=>R?.code==="preview_texture_load_failed"?null:R)},[i]);const X=c==="error"&&f?f:w,b={"--skincrafter-preview-bottom-offset":`${Math.max(0,t)}px`};return $.jsxs(c_,{title:s("panel.preview"),icon:"fa-eye",children:[$.jsx("div",{className:"skincrafter-preview-surface overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full",style:b,children:$.jsx("div",{className:"flex justify-center items-center model-placeholder h-full",children:$.jsx(SA,{texture:i,pose:p,model:e,showOverlay:v,autoRotate:S,onError:F})})}),X&&$.jsx("p",{className:"mt-3 text-sm font-semibold skincrafter-error-text",role:"alert",children:s(wA(X))}),$.jsxs("div",{className:"mt-4 preview-actions",children:[$.jsx(eu,{className:"skincrafter-secondary-action",icon:"fa-arrows-rotate","aria-label":s("action.changePose"),onClick:x,children:s("action.changePose")}),$.jsx(eu,{className:"skincrafter-secondary-action",icon:"fa-layer-group","aria-label":s(v?"action.hideOverlay":"action.showOverlay"),onClick:L,children:s(v?"action.hideOverlay":"action.showOverlay")}),$.jsx(eu,{className:"skincrafter-secondary-action",icon:S?"fa-pause":"fa-play","aria-label":s(S?"action.disableAutoRotate":"action.enableAutoRotate"),onClick:P,children:s(S?"action.disableAutoRotate":"action.enableAutoRotate")}),$.jsx(eu,{className:"skincrafter-secondary-action disabled:opacity-50 disabled:cursor-not-allowed",icon:"fa-download","aria-label":s("action.downloadSkin"),onClick:N,disabled:!C,children:s("action.download")})]})]})}function TA({left:i,right:e}){return $.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:i}),$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:e})]})}function RA(i,e){if(i.length===0)return null;for(const t of i){const s=t.top+(t.bottom-t.top)/2;if(e<s)return{targetLayer:t.layer,position:"before"};if(e<=t.bottom)return{targetLayer:t.layer,position:"after"}}return{targetLayer:i[i.length-1].layer,position:"after"}}function AA(i,e,t,s){if(!i.includes(e)||!i.includes(t))return[...i];if(e===t)return[...i];const a=i.filter(c=>c!==e),l=a.indexOf(t)+(s==="after"?1:0);return a.splice(l,0,e),a}function CA({heading:i,icon:e,iconClassName:t="skincrafter-category-icon",className:s="",children:a,...l}){return $.jsxs("div",{className:`option-card skincrafter-surface p-4 pixel-border relative ${i?"pt-5":""} ${s}`,...l,children:[i&&$.jsxs("h3",{className:"font-medium mb-2 flex items-center absolute -top-3 left-4 px-2 skincrafter-surface skincrafter-heading z-10",children:[e&&$.jsx(Ur,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),i]}),a]})}const bA=["None","Duck"];function PA(i,e){return i==="Duck"?aa("textures/hat/duck.png",e):null}const LA=["None","Pants"];function DA(i,e){return i==="Pants"?aa("textures/bottom/pants.png",e):null}function Yi(i){if(!i.tintable&&!i.fixed)throw new Error("A texture-backed option must define a tintable layer, a fixed layer, or both.");return{...i}}function hu(i,e){return i.tintable?{tintable:aa(i.tintable,e),...i.fixed?{fixed:aa(i.fixed,e)}:{}}:{fixed:aa(i.fixed,e)}}function $f(i){return!!i?.tintable}const g_={Human:{Male:Yi({tintable:"textures/race/human/male.tintable.png",fixed:"textures/race/human/male.fixed.png"}),Female:Yi({tintable:"textures/race/human/female.tintable.png",fixed:"textures/race/human/female.fixed.png"})},Bear:{Male:Yi({fixed:"textures/race/bear/male.fixed.png"})},Orc:{Male:Yi({tintable:"textures/race/orc/male.tintable.png",fixed:"textures/race/orc/male.fixed.png"})},Zombie:{Male:Yi({tintable:"textures/race/zombie/male.tintable.png",fixed:"textures/race/zombie/male.fixed.png"})},Template:{None:Yi({tintable:"textures/race/template/none.tintable.png",fixed:"textures/race/template/none.fixed.png"})}};function v_(i){return Object.keys(g_[i])}function ch(i,e,t){const s=g_[i],a=v_(i)[0],l=s[e]??s[a];return l?hu(l,t):null}const UA=["Human","Bear","Orc","Zombie"],NA=["None","Hoodie"];function IA(i,e){return i==="Hoodie"?aa("textures/top/male/hoodie.png",e):null}const __={Human:["#D5BAAA","#E0AC69","#C68642"],Bear:["#5D4037","#8D6E63","#A1887F"],Orc:["#558B2F","#7CB342"],Zombie:["#556B2F"],Template:["#FFFFFF"]},ps=[{id:"race",labelKey:"category.race",icon:"fa-user-tag",control:"choice"},{id:"sex",labelKey:"category.sex",icon:"fa-venus-mars",control:"choice"},{id:"skinColor",labelKey:"category.skinColor",icon:"fa-palette",control:"color"},{id:"eyes",labelKey:"category.eyes",icon:"fa-eye",control:"choice"},{id:"eyesColor",labelKey:"category.eyesColor",icon:"fa-eye-dropper",control:"color"},{id:"hair",labelKey:"category.hair",icon:"fa-scissors",control:"choice"},{id:"hairColor",labelKey:"category.hairColor",icon:"fa-fill-drip",control:"color"},{id:"hat",labelKey:"category.hat",icon:"fa-hat-cowboy",control:"choice"},{id:"shirt",labelKey:"category.shirt",icon:"fa-shirt",control:"choice"},{id:"pants",labelKey:"category.pants",icon:"fa-person",control:"choice"},{id:"shoes",labelKey:"category.shoes",icon:"fa-shoe-prints",control:"choice"},{id:"accessory",labelKey:"category.accessory",icon:"fa-gem",control:"choice"}],Nr={race:"Human",sex:"Male",skinColor:__.Human[0],eyes:"Classic",eyesColor:"#2F5D9B",hair:"None",hairColor:"#4A2F20",hat:"None",shirt:"None",pants:"None",shoes:"None",accessory:"None"},xu=["hat","shirt","pants","shoes","accessory"],Bd={id:"None",labelKey:"option.none",textureLayers:null},FA={Male:{id:"Male",labelKey:"option.sex.Male",textureLayers:null},Female:{id:"Female",labelKey:"option.sex.Female",textureLayers:null},None:Bd},Yf={Classic:Yi({tintable:"textures/eyes/clasic.tintable.png",fixed:"textures/eyes/clasic.fixed.png"}),Small:Yi({tintable:"textures/eyes/small.tintable.png"}),Big:Yi({tintable:"textures/eyes/big.tintable.png",fixed:"textures/eyes/big.fixed.png"})},qf=i=>i?{fixed:i}:null;function er(i,e,t){if(i==="race")return UA.map(s=>({id:s,labelKey:`option.race.${s}`,textureLayers:ch(s,"Male",t)}));if(i==="sex")return v_(e.race).map(s=>FA[s]);if(i==="skinColor"){const s=e.race;return __[s].map(a=>({id:a,labelKey:`option.skinColor.${a}`,color:a}))}return i==="eyes"?[{id:"Classic",labelKey:"option.eyes.Classic",textureLayers:hu(Yf.Classic,t)},{id:"Small",labelKey:"option.eyes.Small",textureLayers:hu(Yf.Small,t)},{id:"Big",labelKey:"option.eyes.Big",textureLayers:hu(Yf.Big,t)}]:i==="eyesColor"?[{id:"#2F5D9B",labelKey:"option.color.blue",color:"#2F5D9B"},{id:"#2F8F4E",labelKey:"option.color.green",color:"#2F8F4E"},{id:"#5B3A29",labelKey:"option.color.brown",color:"#5B3A29"}]:i==="hair"?[Bd]:i==="hairColor"?[{id:"#4A2F20",labelKey:"option.color.brown",color:"#4A2F20"},{id:"#D6B15D",labelKey:"option.color.blond",color:"#D6B15D"},{id:"#1F1A17",labelKey:"option.color.black",color:"#1F1A17"}]:i==="hat"?bA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.hat.${s}`,textureLayers:qf(PA(s,t))})):i==="shirt"?NA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.shirt.${s}`,textureLayers:qf(IA(s,t))})):i==="pants"?LA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.pants.${s}`,textureLayers:qf(DA(s,t))})):[Bd]}function Cu(i){const e={...Nr,...i??{}};er("race",e).map(s=>s.id).includes(e.race)||(e.race=Nr.race);const t=er("skinColor",e).map(s=>s.id);return t.includes(e.skinColor)||(e.skinColor=t[0]??Nr.skinColor),ps.forEach(s=>{const a=er(s.id,e).map(l=>l.id);a.includes(e[s.id])||(e[s.id]=a[0]??"None")}),e}function Fr(i){const e=new Set(xu),t=[];return(i??[]).forEach(s=>{e.has(s)&&!t.includes(s)&&t.push(s)}),xu.forEach(s=>{t.includes(s)||t.push(s)}),t}function iu(i,e){if(!i)return[];const t=[];return i.tintable&&t.push({url:i.tintable,role:"tintable",tint:e??"#FFFFFF"}),i.fixed&&t.push({url:i.fixed,role:"fixed"}),t}function x_(i,e,t){if(i==="race")return iu(ch(e.race,e.sex,t),e.skinColor);if(i==="sex")return[];if(i==="eyes"){const a=er("eyes",e,t).find(l=>l.id===e.eyes);return iu(a?.textureLayers,e.eyesColor)}if(i==="hair"){const a=er("hair",e,t).find(l=>l.id===e.hair);return iu(a?.textureLayers,e.hairColor)}const s=er(i,e,t).find(a=>a.id===e[i]);return iu(s?.textureLayers)}function y_(i){return["race","sex","eyes","hair",...Fr(i)]}function OA(i,e=xu,t){return y_(e).flatMap(s=>x_(s,i,t))}function kA(i,e,t,s){const a=new Set(t),l=c=>c==="race"?a.has("race")||a.has("sex")||a.has("skinColor"):c==="sex"?!1:c==="eyes"?a.has("eyes")||a.has("eyesColor"):c==="hair"?a.has("hair")||a.has("hairColor"):a.has(c);return y_(e).filter(l).flatMap(c=>x_(c,i,s))}function BA(i,e,t){if(i==="skinColor")return $f(ch(e.race,e.sex,t));if(i==="eyesColor"){const s=er("eyes",e,t).find(a=>a.id===e.eyes);return $f(s?.textureLayers)}if(i==="hairColor"){const s=er("hair",e,t).find(a=>a.id===e.hair);return $f(s?.textureLayers)}return!0}const ru=i=>xu.includes(i),sv=(i,e)=>i.length===e.length&&i.every((t,s)=>t===e[s]);function zA({appearance:i,textureLayerOrder:e,onAppearanceChange:t,onLayerOrderChange:s,t:a,assetBaseUrl:l}){const[c,f]=G.useState(null),[d,p]=G.useState(null),[m,v]=G.useState(null),[_,S]=G.useState(null),E=G.useRef(null),w=G.useRef(null),y=G.useRef(null),x=G.useRef(null),L=G.useRef([]),P=G.useRef(new Map),C=G.useMemo(()=>new Map(ps.map(j=>[j.id,j])),[]),k=G.useMemo(()=>ps.filter(j=>!ru(j.id)&&BA(j.id,i,l)),[i,l]),N=c&&d?d:e,F=G.useMemo(()=>N.map(j=>C.get(j)).filter(j=>!!j),[C,N]);G.useLayoutEffect(()=>{const j=x.current;if(!j)return;const fe=new Map;j.querySelectorAll("[data-layer-id]").forEach(ce=>{const be=ce.dataset.layerId;if(!be||!ru(be))return;const Pe=ce.offsetTop,tt=P.current.get(be);if(fe.set(be,Pe),tt===void 0||tt===Pe||typeof ce.animate!="function")return;typeof ce.getAnimations=="function"&&ce.getAnimations().filter(dt=>dt.id==="skincrafter-layer-preview").forEach(dt=>dt.cancel());const pt=ce.animate([{transform:`translateY(${tt-Pe}px)`},{transform:"translateY(0)"}],{duration:150,easing:"ease-out"});pt.id="skincrafter-layer-preview"}),P.current=fe},[N]);const X=j=>{const fe=x.current;if(!fe)return[];const ce=fe.getBoundingClientRect().top;return[...fe.querySelectorAll("[data-layer-id]")].flatMap(be=>{const Pe=be.dataset.layerId;if(!Pe||!ru(Pe)||Pe===j)return[];const tt=be.getBoundingClientRect();return[{layer:Pe,top:tt.top-ce,bottom:tt.bottom-ce}]})},b=j=>{const fe=x.current;if(!fe)return null;const ce=j-fe.getBoundingClientRect().top;return RA(L.current,ce)},R=()=>{E.current=null,w.current=null,y.current=null,L.current=[],f(null),p(null),v(null),S(null)},H=(j,fe)=>{const ce=[...e];L.current=X(j),E.current=j,w.current=ce,f(j),p(ce),v(null),S(fe)},se=(j,fe)=>{const ce=E.current;if(!ce)return;const be=AA(e,ce,j,fe);w.current=be,p(Pe=>Pe&&sv(Pe,be)?Pe:be),v({targetLayer:j,position:fe})},Q=()=>{const j=w.current,fe=j&&!sv(j,e);R(),fe&&j&&s(j)},le=(j,fe)=>{const ce=e.indexOf(j),be=ce+fe;if(ce<0||be<0||be>=e.length)return;const Pe=[...e];[Pe[ce],Pe[be]]=[Pe[be],Pe[ce]],s(Pe)},pe=(j,fe)=>{if(H(fe,{x:j.clientX,y:j.clientY,pointerType:"mouse"}),j.dataTransfer.effectAllowed="move",j.dataTransfer.setData("text/plain",fe),typeof j.dataTransfer.setDragImage=="function"){const ce=document.createElement("div");ce.style.position="fixed",ce.style.left="-10000px",ce.style.top="-10000px",ce.style.width="1px",ce.style.height="1px",ce.style.opacity="0",document.body.appendChild(ce),j.dataTransfer.setDragImage(ce,0,0),window.setTimeout(()=>ce.remove(),0)}},ue=j=>{!E.current||j.clientX===0&&j.clientY===0||S({x:j.clientX,y:j.clientY,pointerType:"mouse"})},ve=()=>{E.current&&R()},z=j=>{if(!E.current)return;j.preventDefault(),j.dataTransfer.dropEffect="move";const fe=b(j.clientY);fe&&se(fe.targetLayer,fe.position)},he=j=>{j.preventDefault(),Q()},ie=(j,fe)=>{if(!(j.pointerType==="mouse"||j.button>0||!(j.target instanceof Element?j.target:null)?.closest("h3"))){j.preventDefault(),y.current=j.pointerId;try{j.currentTarget.setPointerCapture(j.pointerId)}catch{}H(fe,{x:j.clientX,y:j.clientY,pointerType:"touch"})}},I=j=>{if(j.pointerId!==y.current||!E.current)return;j.preventDefault(),S({x:j.clientX,y:j.clientY,pointerType:"touch"});const fe=b(j.clientY);fe&&se(fe.targetLayer,fe.position)},ae=j=>{if(j.pointerId===y.current){j.preventDefault();try{j.currentTarget.releasePointerCapture(j.pointerId)}catch{}Q()}},De=j=>{j.pointerId===y.current&&R()},Z=j=>{const fe=er(j.id,i,l),ce=ru(j.id)?j.id:null,be=ce?e.indexOf(ce):-1,Pe=ce&&m?.targetLayer===ce;return $.jsxs(CA,{heading:a(j.labelKey),icon:j.icon,className:`wardrobe-option-card p-2.5 pt-6 ${ce?"layer-order-card":""} ${ce===c?"is-dragging":""} ${Pe?`drop-${m.position}`:""}`,"data-layer-id":ce??void 0,onPointerDown:ce?tt=>ie(tt,ce):void 0,onPointerMove:ce?I:void 0,onPointerUp:ce?ae:void 0,onPointerCancel:ce?De:void 0,children:[ce&&$.jsxs("div",{className:"layer-order-controls",children:[$.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${a("action.moveLayerUp")} ${a(j.labelKey)}`,title:a("action.moveLayerUp"),disabled:be<=0,onClick:()=>le(ce,-1),children:$.jsx(Ur,{name:"fa-chevron-up"})}),$.jsx("button",{type:"button",className:"layer-order-handle","aria-label":`${a("action.dragLayer")} ${a(j.labelKey)}`,title:a("action.dragLayer"),draggable:!0,onDragStart:tt=>pe(tt,ce),onDrag:ue,onDragEnd:ve,children:$.jsx(Ur,{name:"fa-grip-vertical"})}),$.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${a("action.moveLayerDown")} ${a(j.labelKey)}`,title:a("action.moveLayerDown"),disabled:be>=e.length-1,onClick:()=>le(ce,1),children:$.jsx(Ur,{name:"fa-chevron-down"})})]}),$.jsx("div",{className:j.control==="color"?"mt-2 flex flex-wrap gap-1.5":"mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1.5",role:"group","aria-label":a(j.labelKey),children:fe.map(tt=>{const pt=i[j.id]===tt.id;return j.control==="color"?$.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border ${pt?"is-selected":""}`,style:{backgroundColor:tt.color??tt.id},"aria-label":a(tt.labelKey),"aria-pressed":pt,onClick:()=>t(j.id,tt.id),children:pt&&$.jsx(Ur,{name:"fa-check"})},tt.id):$.jsx("button",{type:"button",className:`pixel-button min-h-8 px-2 py-1 border text-xs leading-tight transition-colors ${pt?"skincrafter-option-selected":"skincrafter-secondary-action"}`,"aria-pressed":pt,onClick:()=>t(j.id,tt.id),children:a(tt.labelKey)},tt.id)})})]},j.id)},me=c?C.get(c):null;return $.jsxs(c_,{title:a("panel.customization"),icon:"fa-sliders",className:"overflow-visible md:overflow-hidden customization-panel p-3",children:[$.jsxs("div",{className:"space-y-1.5 options-container md:flex-1 md:min-h-0",children:[k.map(Z),$.jsx("div",{ref:x,className:"layer-order-list space-y-1.5",onDragOver:z,onDrop:he,children:F.map(Z)})]}),_&&me&&$.jsxs("div",{className:`layer-drag-ghost ${_.pointerType==="touch"?"is-touch":""}`,style:{left:_.x,top:_.y},"aria-hidden":"true","data-testid":"layer-drag-ghost",children:[$.jsx(Ur,{name:me.icon}),$.jsx("span",{children:a(me.labelKey)})]})]})}const av=[137,80,78,71,13,10,26,10],yu=64;class gi extends Error{cause;constructor(e,t){super(e),this.name="InvalidInitialSkinError",this.cause=t}}function HA(i){let e="";for(let t=0;t<i.length;t+=32768){const s=i.subarray(t,Math.min(t+32768,i.length));e+=String.fromCharCode(...s)}return`data:image/png;base64,${btoa(e)}`}function VA(i){let e=2166136261;for(const t of i)e^=t,e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}function GA(i){if(i.length<24)throw new gi("Initial skin is not a valid PNG file.");for(let a=0;a<av.length;a+=1)if(i[a]!==av[a])throw new gi("Initial skin is not a valid PNG file.");const e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=e.getUint32(8),s=String.fromCharCode(i[12],i[13],i[14],i[15]);if(t!==13||s!=="IHDR")throw new gi("Initial skin PNG is missing a valid IHDR header.");return{width:e.getUint32(16),height:e.getUint32(20)}}async function WA(i){return typeof i.arrayBuffer=="function"?new Uint8Array(await i.arrayBuffer()):new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{if(!(s.result instanceof ArrayBuffer)){t(new Error("Blob reader did not return an ArrayBuffer."));return}e(new Uint8Array(s.result))},s.onerror=()=>t(s.error??new Error("Blob reader failed.")),s.readAsArrayBuffer(i)})}async function XA(i){await new Promise((e,t)=>{const s=new Image;s.onload=()=>{const a=s.naturalWidth||s.width,l=s.naturalHeight||s.height;if(s.onload=null,s.onerror=null,a!==yu||l!==yu){t(new gi("Initial skin must be a 64x64 Minecraft PNG."));return}e()},s.onerror=a=>{s.onload=null,s.onerror=null,t(new gi("Initial skin PNG could not be decoded.",a))},s.src=i})}async function jA(i,e){if(i.type&&i.type.toLowerCase()!=="image/png")throw new gi("Initial skin must use the image/png MIME type.");let t;try{t=await WA(i)}catch(l){throw new gi("Initial skin data could not be read.",l)}const s=GA(t);if(s.width!==yu||s.height!==yu)throw new gi("Initial skin must be a 64x64 Minecraft PNG.");const a=HA(t);return await XA(a),{dataUrl:a,fingerprint:VA(t),model:e}}function $A(i){const[e,t]=i.split(",",2),s=e.match(/^data:([^;]+);base64$/)?.[1]??"image/png",a=atob(t??""),l=new Uint8Array(a.length);for(let c=0;c<a.length;c+=1)l[c]=a.charCodeAt(c);return new Blob([l],{type:s})}function YA(i,e,t,s=e.sex==="Female"?"slim":"classic"){const a=$A(i),l=new File([a],"skincrafter-skin.png",{type:"image/png"});return{blob:a,file:l,dataUrl:i,metadata:{width:64,height:64,mimeType:"image/png",model:s,appearance:{...e},layerOrder:[...t]}}}const ro=1,qA=new Map([[0,i=>({...i,schemaVersion:1})]]);function ov(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function Lr(i){return{success:!1,error:{code:"invalid_state",message:i}}}function lv(i){return{success:!1,error:{code:"unsupported_schema_version",message:`Unsupported SkinCrafter state schema version: ${i}.`,schemaVersion:i}}}function KA(i){return{schemaVersion:ro,appearance:Cu(i.appearance),layerOrder:Fr(i.layerOrder)}}function S_(i){const e=KA(i);return{...e,appearance:{...e.appearance},layerOrder:[...e.layerOrder]}}function E_(i){if(!ov(i))return Lr("SkinCrafter persisted state must be an object.");const e=[],t=i.schemaVersion;let s,a;if(t===void 0)s=null,e.push({code:"legacy_unversioned",message:"Migrated legacy unversioned SkinCrafter state."}),a={...i,schemaVersion:0};else{if(typeof t!="number"||!Number.isInteger(t)||t<0)return Lr("SkinCrafter schemaVersion must be a non-negative integer.");if(s=t,s>ro)return lv(s);a={...i}}let l=s??0;for(;l<ro;){const E=qA.get(l);if(!E)return lv(l);const w=l+1;a=E(a),e.push({code:"schema_version_migrated",message:`Migrated SkinCrafter state schema from version ${l} to ${w}.`,from:l,to:w}),l=w}if(a.schemaVersion!==ro)return Lr("SkinCrafter state migration did not produce the current schema version.");const c=s===null||s===0;if(!ov(a.appearance))return Lr("SkinCrafter persisted appearance must be an object.");const f={};for(const E of ps){const w=a.appearance[E.id];if(w===void 0){if(!c)return Lr(`SkinCrafter persisted appearance is missing ${E.id}.`);continue}if(typeof w!="string")return Lr(`SkinCrafter persisted appearance.${E.id} must be a string.`);f[E.id]=w}const d=a.layerOrder;if(d===void 0&&!c)return Lr("SkinCrafter persisted state is missing layerOrder.");if(d!==void 0&&(!Array.isArray(d)||d.some(E=>typeof E!="string")))return Lr("SkinCrafter persisted layerOrder must be an array of strings.");const p=Cu(f);for(const E of ps){const w=a.appearance[E.id],y=p[E.id];w!==y&&e.push({code:"appearance_value_defaulted",message:`Normalized persisted appearance.${E.id} to a supported value.`,path:E.id,from:w,to:y})}const m=d??[],v=Fr(m);(m.length!==v.length||m.some((E,w)=>E!==v[w]))&&e.push({code:"layer_order_normalized",message:"Normalized persisted layer order by removing invalid/duplicate layers and appending missing layers.",path:"layerOrder",from:[...m],to:[...v]});const _={appearance:p,layerOrder:v},S=S_(_);return{success:!0,state:_,serializedState:S,sourceSchemaVersion:s,migrated:s!==ro||e.length>0,notices:e}}class zd extends Error{assetUrl;cause;constructor(e,t){super(`Failed to load texture asset: ${e}`),this.name="TextureLoadError",this.assetUrl=e,this.cause=t}}const Ai=64,ZA=i=>i?typeof i=="string"?{url:i,role:"fixed"}:i.url?i.role==="tintable"?{url:i.url,role:"tintable",tint:i.tint}:{url:i.url,role:"fixed"}:null:null;function JA(i){const e=i.replace("#",""),t=e.length===3?e.split("").map(s=>`${s}${s}`).join(""):e;return{r:Number.parseInt(t.slice(0,2),16),g:Number.parseInt(t.slice(2,4),16),b:Number.parseInt(t.slice(4,6),16),a:255}}function QA(i,e){return i===Ai&&e===Ai}function eC(i,e){if(i.a===0)return i;const t=(i.r+i.g+i.b)/765;return{r:Math.round(e.r*t),g:Math.round(e.g*t),b:Math.round(e.b*t),a:i.a}}function tC(i,e){const t=new Uint8ClampedArray(i);for(let s=0;s<t.length;s+=4){const a=eC({r:i[s],g:i[s+1],b:i[s+2],a:i[s+3]},e);t[s]=a.r,t[s+1]=a.g,t[s+2]=a.b,t[s+3]=a.a}return t}const nC=(i,e,t)=>{const s=document.createElement("canvas");s.width=Ai,s.height=Ai;const a=s.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("Could not create a 2D canvas context for tintable skin composition.");a.imageSmoothingEnabled=!1,a.drawImage(e,0,0);const l=a.getImageData(0,0,Ai,Ai);l.data.set(tC(l.data,JA(t))),a.putImageData(l,0,0),i.drawImage(s,0,0)},iC=(i,e,t)=>{if(t.role==="fixed"){i.drawImage(e,0,0);return}nC(i,e,t.tint??"#FFFFFF")},rC=i=>new Promise((e,t)=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{const a=s.naturalWidth||s.width,l=s.naturalHeight||s.height;if(!QA(a,l)){t(new zd(i,new Error(`Skin texture atlas must be ${Ai}x${Ai}; got ${a}x${l}.`)));return}e(s)},s.onerror=a=>t(new zd(i,a)),s.src=i});async function uv(i){const e=i.map(ZA).filter(l=>!!l);if(e.length===0)throw new Error("No texture assets were available for skin composition.");const t=await Promise.all(e.map(l=>rC(l.url))),s=document.createElement("canvas");s.width=Ai,s.height=Ai;const a=s.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("Could not create a 2D canvas context for skin composition.");return a.imageSmoothingEnabled=!1,t.forEach((l,c)=>iC(a,l,e[c])),s.toDataURL("image/png")}function cs(i){return{appearance:Cu(i?.appearance??null),layerOrder:Fr(i?.layerOrder)}}function cv(i){const e=i?.load()??null;return e&&"status"in e?e.status==="incompatible"?{state:cs(null),writesBlocked:!0}:e.status==="empty"?{state:cs(null),writesBlocked:!1}:{state:cs(e.state),writesBlocked:!1}:{state:cs(e),writesBlocked:!1}}function sC(i){return{appearance:{...i.appearance},layerOrder:[...i.layerOrder]}}function aC(i){return i?{"--skincrafter-accent":i.accent,"--skincrafter-accent-strong":i.accentStrong,"--skincrafter-surface":i.surface,"--skincrafter-text":i.text,"--skincrafter-muted":i.muted,"--skincrafter-border":i.border}:{}}function oC(i){return i instanceof zd?{code:"asset_load_failed",category:"asset",message:`Failed to load skin texture asset: ${i.assetUrl}`,assetUrl:i.assetUrl,cause:i.cause}:{code:"generation_failed",category:"generation",message:"Failed to generate the current skin.",cause:i}}function fv(i){return{code:"invalid_initial_skin",category:"input",message:i instanceof gi?i.message:"Initial skin must be a decodable 64x64 Minecraft PNG.",cause:i instanceof gi?i.cause??i:i}}function ti(i,...e){if(i)try{i(...e)}catch(t){console.error("SkinCrafter host callback failed",t)}}function lC({locale:i=_a,value:e,initialSkin:t,persistence:s,assetBaseUrl:a,onStateChange:l,onSkinChange:c,onSave:f,onStatusChange:d,onError:p,className:m="",style:v,theme:_,previewBottomOffset:S=0}){const[E]=G.useState(()=>{if(e)return{state:cs(e),writesBlocked:!1};const Ae=cv(s);return t?{state:cs(t),writesBlocked:Ae.writesBlocked}:Ae}),[w,y]=G.useState(E.state),[x,L]=G.useState(null),[P,C]=G.useState({key:null,status:"idle",error:null}),[k,N]=G.useState(null),[F,X]=G.useState({source:null,model:null,status:"idle",error:null}),[b,R]=G.useState([]),H=G.useRef(c),se=G.useRef(d),Q=G.useRef(p),le=G.useRef(null),pe=G.useRef(!1),ue=G.useRef(null),ve=G.useRef(s),z=G.useRef(!e),he=G.useRef(E.writesBlocked),ie=G.useMemo(()=>e?cs(e):null,[e])??w,I=G.useRef(ie);I.current=ie;const ae=G.useCallback(Ae=>Mo(i,Ae),[i]),De=t?.image??null,Z=t?.model??null,me=De!==null,j=G.useCallback(Ae=>{e||y(Ae),l?.(Ae)},[l,e]),fe=G.useCallback((Ae,$e)=>{me&&R(ct=>ct.includes(Ae)?ct:[...ct,Ae]),j({...ie,appearance:Cu({...ie.appearance,[Ae]:$e})})},[me,j,ie]),ce=G.useCallback(Ae=>{j({...ie,layerOrder:Fr(Ae)})},[j,ie]);G.useEffect(()=>{H.current=c},[c]),G.useEffect(()=>{se.current=d},[d]),G.useEffect(()=>{Q.current=p},[p]),G.useEffect(()=>{if(!De){le.current=null,pe.current=!1,N(null),R([]),X({source:null,model:null,status:"idle",error:null});return}if(!Z){pe.current=!1;const ct=fv(new gi("Initial skin model must be either classic or slim."));X({source:De,model:null,status:"error",error:ct}),ti(se.current,"error"),ti(Q.current,ct);return}let Ae=!0;const $e=sC(I.current);return X({source:De,model:Z,status:"loading",error:null}),ti(se.current,"generating"),jA(De,Z).then(ct=>{if(!Ae)return;const ft=le.current,qt=ft!==null&&ft.fingerprint===ct.fingerprint&&ft.model===ct.model,Ot=qt?{...ft,source:De}:{source:De,dataUrl:ct.dataUrl,fingerprint:ct.fingerprint,model:ct.model,baselineState:$e};pe.current=qt,le.current=Ot,N(Ot),qt||R([]),X({source:De,model:Z,status:"ready",error:null}),qt&&ti(se.current,"ready")}).catch(ct=>{if(!Ae)return;pe.current=!1;const ft=fv(ct);X({source:De,model:Z,status:"error",error:ft}),ti(se.current,"error"),ti(Q.current,ft)}),()=>{Ae=!1}},[De,Z]),G.useEffect(()=>{if(!e){if(!z.current||ve.current!==s){const Ae=cv(s);ve.current=s,z.current=!0,he.current=Ae.writesBlocked}he.current||s?.save(S_(ie))}},[s,ie,e]);const be=me&&Z!==null&&k?.source===De&&k.model===Z,Pe=G.useMemo(()=>{if(!be||!k)return[];const Ae=new Set(b);for(const $e of ps)ie.appearance[$e.id]!==k.baselineState.appearance[$e.id]&&Ae.add($e.id);return ps.map($e=>$e.id).filter($e=>Ae.has($e))},[b,be,k,ie.appearance]),{race:tt,sex:pt,skinColor:dt,eyes:O,eyesColor:Xt,hair:_t,hairColor:Mt,hat:We,shirt:mt,pants:qe,shoes:st,accessory:Ut}=ie.appearance,D=JSON.stringify(ie.layerOrder),T=JSON.stringify(Pe),ee=a?.replace(/\/+$/,"")||void 0,ge=Pe.includes("sex"),xe=be&&k&&!ge?k.model==="slim"?"Female":"Male":pt,de=be&&k&&!ge?k.model:pt==="Female"?"slim":"classic",Ke=be?k?.fingerprint??null:null,Le=be?k?.dataUrl??null:null,Ie=JSON.stringify([tt,pt,dt,O,Xt,_t,Mt,We,mt,qe,st,Ut,D,ee??null,Ke,de,T]),Ze=x?.key===Ie?x:null,ye=me&&F.source===De&&F.model===Z,Be=me&&(!ye||F.status==="loading"),nt=ye&&F.status==="error",Qe=Be?"generating":nt?"error":P.key===Ie?P.status:"idle",Ue=nt?F.error:P.key===Ie?P.error:null;G.useEffect(()=>{if(me&&!be)return;if(pe.current){const Ot=ue.current===Ie;if(pe.current=!1,Ot)return}let Ae=!0;const $e={race:tt,sex:pt,skinColor:dt,eyes:O,eyesColor:Xt,hair:_t,hairColor:Mt,hat:We,shirt:mt,pants:qe,shoes:st,accessory:Ut},ct={...$e,sex:xe},ft=JSON.parse(D),qt=JSON.parse(T);return C({key:Ie,status:"generating",error:null}),ti(se.current,"generating"),(async()=>{let Ot;try{let Bn;if(Le){const mn=kA(ct,ft,qt,ee);Bn=mn.filter(Boolean).length===0?Le:await uv([Le,...mn])}else{const mn=OA($e,ft,ee);Bn=await uv(mn)}Ot={dataUrl:Bn,output:YA(Bn,$e,ft,de)}}catch(Bn){if(!Ae)return;const mn=oC(Bn);C({key:Ie,status:"error",error:mn}),ti(se.current,"error"),ti(Q.current,mn);return}Ae&&(ue.current=Ie,L({key:Ie,texture:Ot.dataUrl,output:Ot.output}),C({key:Ie,status:"ready",error:null}),ti(H.current,Ot.output),ti(se.current,"ready"))})(),()=>{Ae=!1}},[Ut,T,ee,xe,de,O,Xt,Ie,_t,Mt,me,We,Le,be,D,qe,tt,pt,mt,st,dt]);const at=Ze??x,V=Ze?.output??null,Ne=at?.texture??null,Se=at?.output.metadata.model??de,ke=Qe==="ready"&&V!==null,we=f&&ke&&V?()=>f(V):void 0,_e=G.useCallback(Ae=>{ti(Q.current,Ae)},[]);return $.jsx("div",{className:`skincrafter-editor h-full min-h-0 w-full ${m}`.trim(),style:{...aC(_),...v},"data-testid":"skincrafter-editor","data-skincrafter-locale":i,"data-skincrafter-generation-status":Qe,children:$.jsx(TA,{left:$.jsx(m_,{texture:Ne,model:Se,footerHeight:S,t:ae,onSave:we,canSave:ke,generationStatus:Qe,generationError:Ue,onError:_e}),right:$.jsx(zA,{appearance:ie.appearance,textureLayerOrder:ie.layerOrder,onAppearanceChange:fe,onLayerOrderChange:ce,t:ae,assetBaseUrl:a})})})}function uC({texture:i,model:e="classic",locale:t=_a,bottomOffset:s=0,className:a="",style:l,theme:c,onError:f}){const d=m=>Mo(t,m),p={"--skincrafter-accent":c?.accent,"--skincrafter-accent-strong":c?.accentStrong,"--skincrafter-surface":c?.surface,"--skincrafter-text":c?.text,"--skincrafter-muted":c?.muted,"--skincrafter-border":c?.border};return $.jsx("div",{className:`skincrafter-editor h-full min-h-0 ${a}`.trim(),style:{...p,...l},children:$.jsx(m_,{texture:i,model:e,footerHeight:s,t:d,onError:f})})}const cC=hv.forwardRef((i,e)=>$.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:$.jsx("div",{className:"container mx-auto text-center text-sm",children:$.jsx("p",{children:"(c) 2026 SkinCrafter. All rights reserved."})})})),fC=i=>Mo(_a,i),dC=({logoSrc:i="/logo.png",logoAlt:e="SkinCrafter logo",language:t="en",onLanguageChange:s,t:a=fC})=>$.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:$.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[$.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[$.jsx("div",{className:"h-8 w-36 flex items-center",children:$.jsx("img",{src:i,alt:e,className:"h-auto max-h-8 w-full object-contain",style:{imageRendering:"pixelated"}})}),$.jsx("span",{className:"pixel-border bg-amber-500 px-2 py-0.5 text-xs font-bold uppercase tracking-normal text-green-950 shadow-sm",title:a("nav.workInProgress"),"aria-label":a("nav.workInProgress"),children:"WIP"})]}),$.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[$.jsx(Qf,{to:"/",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.wardrobe")}),$.jsx(Qf,{to:"/mcskinview",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.skinView")}),s&&$.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[$.jsx("span",{children:a("nav.language")}),$.jsx("select",{className:"bg-green-700 text-white pixel-border px-2 py-1",value:t,onChange:l=>s(l.target.value),"aria-label":a("nav.language"),children:p_.map(l=>$.jsx("option",{value:l,children:l.toUpperCase()},l))})]})]})]})}),M_="skincrafterLanguage",hC=()=>{const i=localStorage.getItem(M_);return EA(i)?i:_a};function w_({children:i}){const[e,t]=G.useState(()=>hC()),s=G.useRef(null),[a,l]=G.useState(0),c=G.useCallback(d=>Mo(e,d),[e]),f=G.useCallback(d=>{t(d)},[]);return G.useEffect(()=>{localStorage.setItem(M_,e)},[e]),G.useEffect(()=>{const d=()=>{l(s.current?.offsetHeight??0)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),$.jsxs("div",{className:"max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col",children:[$.jsx("div",{className:"shrink-0",children:$.jsx(dC,{language:e,onLanguageChange:f,t:c})}),i({footerHeight:a,language:e,t:c}),$.jsx("div",{className:"shrink-0",children:$.jsx(cC,{ref:s})})]})}const pu="skincrafterState",fh="wardrobeAppearance",dh="wardrobeLayerOrder";function go(i){return JSON.parse(i)}function T_(i){const e=E_(i);return e.success?{state:e.state,serializedState:e.serializedState}:null}function pC(i){let e;try{e=go(i)}catch{return{kind:"invalid"}}const t=E_(e);return t.success?{kind:"loaded",value:{state:t.state,serializedState:t.serializedState}}:t.error.code==="unsupported_schema_version"?{kind:"unsupported"}:{kind:"invalid"}}function mC(){const i=localStorage.getItem(fh),e=localStorage.getItem(dh);if(i===null||e===null)return null;try{return T_({appearance:go(i),layerOrder:go(e)})}catch{return null}}function gC(){let i;const e=localStorage.getItem(fh);if(e)try{i=go(e)}catch{i={...Nr}}else i={race:localStorage.getItem("wardrobeRace")??Nr.race,skinColor:localStorage.getItem("wardrobeSkinColor")??Nr.skinColor,hat:localStorage.getItem("wardrobeHat")??Nr.hat};let t=Fr(null);const s=localStorage.getItem(dh);if(s)try{t=go(s)}catch{t=Fr(null)}const a=T_({appearance:i,layerOrder:t});return a?(localStorage.setItem(pu,JSON.stringify(a.serializedState)),a.state):{appearance:{...Nr},layerOrder:Fr(null)}}function vC(i,e){return JSON.stringify(i)===JSON.stringify(e)}const _C={load:()=>{const i=localStorage.getItem(pu);if(i===null)return{status:"loaded",state:gC()};const e=pC(i);if(e.kind==="unsupported")return{status:"incompatible"};if(e.kind==="invalid")return{status:"empty"};const t=mC();return t&&!vC(t.serializedState,e.value.serializedState)?(localStorage.setItem(pu,JSON.stringify(t.serializedState)),{status:"loaded",state:t.state}):{status:"loaded",state:e.value.state}},save:i=>{localStorage.setItem(pu,JSON.stringify(i)),localStorage.setItem(fh,JSON.stringify(i.appearance)),localStorage.setItem(dh,JSON.stringify(i.layerOrder))}},xC=i=>i.replace(/^http:\/\//,"https://"),yC=i=>{if(!i)return null;try{return JSON.parse(atob(i.value))}catch{return null}};async function SC(i){const e=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(i)}`);if(!e.ok)throw new Error("User not found");const t=await e.json(),s=t.data?.player;if(!t.success||!s)throw new Error("User not found");const a=s.properties?.find(f=>f.name==="textures"),l=yC(a)?.textures?.SKIN,c=l?.url??s.skin_texture;if(!c)throw new Error("Skin texture not found");return{texture:xC(c),model:l?.metadata?.model==="slim"?"slim":"classic"}}const EC=()=>{const[i,e]=G.useState(""),[t,s]=G.useState(null),[a,l]=G.useState(null),[c,f]=G.useState(!1),d=G.useCallback(m=>{e(m.target.value)},[]),p=G.useCallback(async m=>{if(m.preventDefault(),!i.trim()){l("Please enter a username.");return}l(null),s(null),f(!0);try{s(await SC(i.trim()))}catch(v){l(v instanceof Error?v.message:"An unexpected error occurred."),s(null)}finally{f(!1)}},[i]);return $.jsx(w_,{children:({footerHeight:m,language:v,t:_})=>$.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:$.jsx(uC,{texture:t?.texture??null,model:t?.model??"classic",locale:v,bottomOffset:m})}),$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:$.jsxs("section",{className:"mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4",children:[$.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[$.jsx("i",{className:"fas fa-user mr-2 text-green-700"})," ",_("panel.loadSkin")]}),$.jsxs("div",{className:"space-y-4 md:flex-1 md:min-h-0 overflow-y-auto pr-2",children:[$.jsxs("div",{className:"option-card bg-white shadow p-4 pixel-border relative pt-5",children:[$.jsxs("h3",{className:"font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10",children:[$.jsx("i",{className:"fas fa-id-card mr-2 text-amber-600"})," ",_("skinView.player")]}),$.jsxs("form",{onSubmit:p,className:"mt-4 flex flex-col gap-3",children:[$.jsx("input",{type:"text",value:i,onChange:d,placeholder:_("skinView.username"),"aria-label":_("skinView.username"),className:"w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"}),$.jsxs("button",{type:"submit",disabled:c,className:"pixel-button p-2 pixel-border bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white",children:[$.jsx("i",{className:"fas fa-cloud-arrow-down mr-2"}),_(c?"action.loading":"action.loadSkin")]})]})]}),a&&$.jsx("div",{className:"option-card bg-red-50 text-red-700 shadow p-4 pixel-border",children:a})]})]})})]})})},MC=()=>$.jsx(w_,{children:({footerHeight:i,language:e})=>$.jsx(lC,{locale:e,persistence:_C,previewBottomOffset:i})}),wC=()=>$.jsxs(hy,{children:[$.jsx(Zf,{path:"/",element:$.jsx(MC,{})}),$.jsx(Zf,{path:"/mcskinview",element:$.jsx(EC,{})})]});hx.createRoot(document.getElementById("root")).render($.jsx(hv.StrictMode,{children:$.jsx(Oy,{children:$.jsx(wC,{})})}));
