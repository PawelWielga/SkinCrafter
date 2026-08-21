(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function pv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var uf={exports:{}},Ja={},cf={exports:{}},yt={};var Fm;function lx(){if(Fm)return yt;Fm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(I,re,Ce){this.props=I,this.context=re,this.refs=w,this.updater=Ce||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=y.prototype;function L(I,re,Ce){this.props=I,this.context=re,this.refs=w,this.updater=Ce||S}var P=L.prototype=new x;P.constructor=L,E(P,y.prototype),P.isPureReactComponent=!0;var C=Array.isArray,k=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function X(I,re,Ce){var te,ge={},j=null,le=null;if(re!=null)for(te in re.ref!==void 0&&(le=re.ref),re.key!==void 0&&(j=""+re.key),re)k.call(re,te)&&!F.hasOwnProperty(te)&&(ge[te]=re[te]);var oe=arguments.length-2;if(oe===1)ge.children=Ce;else if(1<oe){for(var Le=Array(oe),be=0;be<oe;be++)Le[be]=arguments[be+2];ge.children=Le}if(I&&I.defaultProps)for(te in oe=I.defaultProps,oe)ge[te]===void 0&&(ge[te]=oe[te]);return{$$typeof:r,type:I,key:j,ref:le,props:ge,_owner:N.current}}function b(I,re){return{$$typeof:r,type:I.type,key:re,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function H(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ce){return re[Ce]})}var se=/\/+/g;function Z(I,re){return typeof I=="object"&&I!==null&&I.key!=null?H(""+I.key):re.toString(36)}function ue(I,re,Ce,te,ge){var j=typeof I;(j==="undefined"||j==="boolean")&&(I=null);var le=!1;if(I===null)le=!0;else switch(j){case"string":case"number":le=!0;break;case"object":switch(I.$$typeof){case r:case e:le=!0}}if(le)return le=I,ge=ge(le),I=te===""?"."+Z(le,0):te,C(ge)?(Ce="",I!=null&&(Ce=I.replace(se,"$&/")+"/"),ue(ge,re,Ce,"",function(be){return be})):ge!=null&&(R(ge)&&(ge=b(ge,Ce+(!ge.key||le&&le.key===ge.key?"":(""+ge.key).replace(se,"$&/")+"/")+I)),re.push(ge)),1;if(le=0,te=te===""?".":te+":",C(I))for(var oe=0;oe<I.length;oe++){j=I[oe];var Le=te+Z(j,oe);le+=ue(j,re,Ce,Le,ge)}else if(Le=_(I),typeof Le=="function")for(I=Le.call(I),oe=0;!(j=I.next()).done;)j=j.value,Le=te+Z(j,oe++),le+=ue(j,re,Ce,Le,ge);else if(j==="object")throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return le}function pe(I,re,Ce){if(I==null)return I;var te=[],ge=0;return ue(I,te,"","",function(j){return re.call(Ce,j,ge++)}),te}function ce(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(Ce){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ce)},function(Ce){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ce)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var ve={current:null},z={transition:null},he={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:z,ReactCurrentOwner:N};function fe(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:pe,forEach:function(I,re,Ce){pe(I,function(){re.apply(this,arguments)},Ce)},count:function(I){var re=0;return pe(I,function(){re++}),re},toArray:function(I){return pe(I,function(re){return re})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},yt.Component=y,yt.Fragment=t,yt.Profiler=a,yt.PureComponent=L,yt.StrictMode=s,yt.Suspense=d,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,yt.act=fe,yt.cloneElement=function(I,re,Ce){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var te=E({},I.props),ge=I.key,j=I.ref,le=I._owner;if(re!=null){if(re.ref!==void 0&&(j=re.ref,le=N.current),re.key!==void 0&&(ge=""+re.key),I.type&&I.type.defaultProps)var oe=I.type.defaultProps;for(Le in re)k.call(re,Le)&&!F.hasOwnProperty(Le)&&(te[Le]=re[Le]===void 0&&oe!==void 0?oe[Le]:re[Le])}var Le=arguments.length-2;if(Le===1)te.children=Ce;else if(1<Le){oe=Array(Le);for(var be=0;be<Le;be++)oe[be]=arguments[be+2];te.children=oe}return{$$typeof:r,type:I.type,key:ge,ref:j,props:te,_owner:le}},yt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},yt.createElement=X,yt.createFactory=function(I){var re=X.bind(null,I);return re.type=I,re},yt.createRef=function(){return{current:null}},yt.forwardRef=function(I){return{$$typeof:f,render:I}},yt.isValidElement=R,yt.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:ce}},yt.memo=function(I,re){return{$$typeof:p,type:I,compare:re===void 0?null:re}},yt.startTransition=function(I){var re=z.transition;z.transition={};try{I()}finally{z.transition=re}},yt.unstable_act=fe,yt.useCallback=function(I,re){return ve.current.useCallback(I,re)},yt.useContext=function(I){return ve.current.useContext(I)},yt.useDebugValue=function(){},yt.useDeferredValue=function(I){return ve.current.useDeferredValue(I)},yt.useEffect=function(I,re){return ve.current.useEffect(I,re)},yt.useId=function(){return ve.current.useId()},yt.useImperativeHandle=function(I,re,Ce){return ve.current.useImperativeHandle(I,re,Ce)},yt.useInsertionEffect=function(I,re){return ve.current.useInsertionEffect(I,re)},yt.useLayoutEffect=function(I,re){return ve.current.useLayoutEffect(I,re)},yt.useMemo=function(I,re){return ve.current.useMemo(I,re)},yt.useReducer=function(I,re,Ce){return ve.current.useReducer(I,re,Ce)},yt.useRef=function(I){return ve.current.useRef(I)},yt.useState=function(I){return ve.current.useState(I)},yt.useSyncExternalStore=function(I,re,Ce){return ve.current.useSyncExternalStore(I,re,Ce)},yt.useTransition=function(){return ve.current.useTransition()},yt.version="18.3.1",yt}var Om;function Gd(){return Om||(Om=1,cf.exports=lx()),cf.exports}var km;function ux(){if(km)return Ja;km=1;var r=Gd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,p){var m,v={},_=null,S=null;p!==void 0&&(_=""+p),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)s.call(d,m)&&!l.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:_,ref:S,props:v,_owner:a.current}}return Ja.Fragment=t,Ja.jsx=c,Ja.jsxs=c,Ja}var Bm;function cx(){return Bm||(Bm=1,uf.exports=ux()),uf.exports}var $=cx(),G=Gd();const mv=pv(G);var Ul={},ff={exports:{}},Gn={},df={exports:{}},hf={};var zm;function fx(){return zm||(zm=1,(function(r){function e(z,he){var fe=z.length;z.push(he);e:for(;0<fe;){var I=fe-1>>>1,re=z[I];if(0<a(re,he))z[I]=he,z[fe]=re,fe=I;else break e}}function t(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var he=z[0],fe=z.pop();if(fe!==he){z[0]=fe;e:for(var I=0,re=z.length,Ce=re>>>1;I<Ce;){var te=2*(I+1)-1,ge=z[te],j=te+1,le=z[j];if(0>a(ge,fe))j<re&&0>a(le,ge)?(z[I]=le,z[j]=fe,I=j):(z[I]=ge,z[te]=fe,I=te);else if(j<re&&0>a(le,fe))z[I]=le,z[j]=fe,I=j;else break e}}return he}function a(z,he){var fe=z.sortIndex-he.sortIndex;return fe!==0?fe:z.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var d=[],p=[],m=1,v=null,_=3,S=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var he=t(p);he!==null;){if(he.callback===null)s(p);else if(he.startTime<=z)s(p),he.sortIndex=he.expirationTime,e(d,he);else break;he=t(p)}}function C(z){if(w=!1,P(z),!E)if(t(d)!==null)E=!0,ce(k);else{var he=t(p);he!==null&&ve(C,he.startTime-z)}}function k(z,he){E=!1,w&&(w=!1,x(X),X=-1),S=!0;var fe=_;try{for(P(he),v=t(d);v!==null&&(!(v.expirationTime>he)||z&&!H());){var I=v.callback;if(typeof I=="function"){v.callback=null,_=v.priorityLevel;var re=I(v.expirationTime<=he);he=r.unstable_now(),typeof re=="function"?v.callback=re:v===t(d)&&s(d),P(he)}else s(d);v=t(d)}if(v!==null)var Ce=!0;else{var te=t(p);te!==null&&ve(C,te.startTime-he),Ce=!1}return Ce}finally{v=null,_=fe,S=!1}}var N=!1,F=null,X=-1,b=5,R=-1;function H(){return!(r.unstable_now()-R<b)}function se(){if(F!==null){var z=r.unstable_now();R=z;var he=!0;try{he=F(!0,z)}finally{he?Z():(N=!1,F=null)}}else N=!1}var Z;if(typeof L=="function")Z=function(){L(se)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,pe=ue.port2;ue.port1.onmessage=se,Z=function(){pe.postMessage(null)}}else Z=function(){y(se,0)};function ce(z){F=z,N||(N=!0,Z())}function ve(z,he){X=y(function(){z(r.unstable_now())},he)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,ce(k))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(d)},r.unstable_next=function(z){switch(_){case 1:case 2:case 3:var he=3;break;default:he=_}var fe=_;_=he;try{return z()}finally{_=fe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,he){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var fe=_;_=z;try{return he()}finally{_=fe}},r.unstable_scheduleCallback=function(z,he,fe){var I=r.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?I+fe:I):fe=I,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=fe+re,z={id:m++,callback:he,priorityLevel:z,startTime:fe,expirationTime:re,sortIndex:-1},fe>I?(z.sortIndex=fe,e(p,z),t(d)===null&&z===t(p)&&(w?(x(X),X=-1):w=!0,ve(C,fe-I))):(z.sortIndex=re,e(d,z),E||S||(E=!0,ce(k))),z},r.unstable_shouldYield=H,r.unstable_wrapCallback=function(z){var he=_;return function(){var fe=_;_=he;try{return z.apply(this,arguments)}finally{_=fe}}}})(hf)),hf}var Hm;function dx(){return Hm||(Hm=1,df.exports=fx()),df.exports}var Vm;function hx(){if(Vm)return Gn;Vm=1;var r=Gd(),e=dx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function _(n){return d.call(v,n)?!0:d.call(m,n)?!1:p.test(n)?v[n]=!0:(m[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,u,h,g,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,L);y[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,L);y[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,L);y[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,o,u){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,h,u)&&(o=null),u||h===null?_(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var C=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),z=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var fe=Object.assign,I;function re(n){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var Ce=!1;function te(n,i){if(!n||Ce)return"";Ce=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var u=ie}Reflect.construct(n,[],i)}else{try{i.call()}catch(ie){u=ie}n.call(i.prototype)}else{try{throw Error()}catch(ie){u=ie}n()}}catch(ie){if(ie&&u&&typeof ie.stack=="string"){for(var h=ie.stack.split(`
`),g=u.stack.split(`
`),M=h.length-1,U=g.length-1;1<=M&&0<=U&&h[M]!==g[U];)U--;for(;1<=M&&0<=U;M--,U--)if(h[M]!==g[U]){if(M!==1||U!==1)do if(M--,U--,0>U||h[M]!==g[U]){var B=`
`+h[M].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=M&&0<=U);break}}}finally{Ce=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?re(n):""}function ge(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=te(n.type,!1),n;case 11:return n=te(n.type.render,!1),n;case 1:return n=te(n.type,!0),n;default:return""}}function j(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case N:return"Portal";case b:return"Profiler";case X:return"StrictMode";case Z:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case se:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return i=n.displayName||null,i!==null?i:j(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return j(n(i))}catch{}}return null}function le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return j(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function be(n){var i=Le(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(M){u=""+M,g.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function it(n){n._valueTracker||(n._valueTracker=be(n))}function ft(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Le(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function O(n,i){var o=i.checked;return fe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Ht(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=oe(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function vt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Et(n,i){vt(n,i);var o=oe(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?pt(n,i.type,o):i.hasOwnProperty("defaultValue")&&pt(n,i.type,oe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Xe(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function pt(n,i,o){(i!=="number"||dt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ke=Array.isArray;function st(n,i,o,u){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+oe(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function It(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return fe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ke(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:oe(o)}}function T(n,i){var o=oe(i.value),u=oe(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Q(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function me(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?me(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var de,Ye=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=de.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Pe(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(n){Ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ke[i]=ke[n]})});function ye(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ke.hasOwnProperty(n)&&ke[n]?(""+i).trim():i+"px"}function Ue(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=ye(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var tt=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(n,i){if(i){if(tt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function De(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var at=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ne=null,Se=null,Oe=null;function we(n){if(n=Oa(n)){if(typeof Ne!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Yo(i),Ne(n.stateNode,n.type,i))}}function _e(n){Se?Oe?Oe.push(n):Oe=[n]:Se=n}function He(){if(Se){var n=Se,i=Oe;if(Oe=Se=null,we(n),i)for(n=0;n<i.length;n++)we(i[n])}}function ut(n,i){return n(i)}function Ct(){}var Be=!1;function bt(n,i,o){if(Be)return n(i,o);Be=!0;try{return ut(n,i,o)}finally{Be=!1,(Se!==null||Oe!==null)&&(Ct(),He())}}function Tt(n,i){var o=n.stateNode;if(o===null)return null;var u=Yo(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var an=!1;if(f)try{var An={};Object.defineProperty(An,"passive",{get:function(){an=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{an=!1}function en(n,i,o,u,h,g,M,U,B){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(o,ie)}catch(Me){this.onError(Me)}}var _n=!1,Cn=null,Wi=!1,oi=null,Ro={onError:function(n){_n=!0,Cn=n}};function _s(n,i,o,u,h,g,M,U,B){_n=!1,Cn=null,en.apply(Ro,arguments)}function Ao(n,i,o,u,h,g,M,U,B){if(_s.apply(this,arguments),_n){if(_n){var ie=Cn;_n=!1,Cn=null}else throw Error(t(198));Wi||(Wi=!0,oi=ie)}}function Sr(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Co(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function bo(n){if(Sr(n)!==n)throw Error(t(188))}function Lu(n){var i=n.alternate;if(!i){if(i=Sr(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return bo(h),n;if(g===u)return bo(h),i;g=g.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=g;else{for(var M=!1,U=h.child;U;){if(U===o){M=!0,o=h,u=g;break}if(U===u){M=!0,u=h,o=g;break}U=U.sibling}if(!M){for(U=g.child;U;){if(U===o){M=!0,o=g,u=h;break}if(U===u){M=!0,u=g,o=h;break}U=U.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Po(n){return n=Lu(n),n!==null?Lo(n):null}function Lo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Lo(n);if(i!==null)return i;n=n.sibling}return null}var Do=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,Y=e.unstable_shouldYield,ae=e.unstable_requestPaint,J=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Ie=e.unstable_UserBlockingPriority,Ge=e.unstable_NormalPriority,Ve=e.unstable_LowPriority,lt=e.unstable_IdlePriority,ot=null,je=null;function _t(n){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(ot,n,void 0,(n.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Lt,Vt=Math.log,Ft=Math.LN2;function Lt(n){return n>>>=0,n===0?32:31-(Vt(n)/Ft|0)|0}var et=64,Ut=4194304;function xt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function on(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,M=o&268435455;if(M!==0){var U=M&~h;U!==0?u=xt(U):(g&=M,g!==0&&(u=xt(g)))}else M=o&~h,M!==0?u=xt(M):g!==0&&(u=xt(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-mt(i),h=1<<o,u|=n[o],i&=~h;return u}function li(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var M=31-mt(g),U=1<<M,B=h[M];B===-1?((U&o)===0||(U&u)!==0)&&(h[M]=li(U,i)):B<=i&&(n.expiredLanes|=U),g&=~U}}function Fr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ot(){var n=et;return et<<=1,(et&4194240)===0&&(et=64),n}function xn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function ln(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-mt(i),n[i]=o}function pn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-mt(o),g=1<<h;i[h]=0,u[h]=-1,n[h]=-1,o&=~g}}function un(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-mt(o),h=1<<u;h&i|n[u]&i&&(n[u]|=i),o&=~h}}var Mt=0;function Er(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var mh,Du,gh,vh,_h,Uu=!1,Uo=[],ui=null,ci=null,fi=null,Sa=new Map,Ea=new Map,di=[],P_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xh(n,i){switch(n){case"focusin":case"focusout":ui=null;break;case"dragenter":case"dragleave":ci=null;break;case"mouseover":case"mouseout":fi=null;break;case"pointerover":case"pointerout":Sa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(i.pointerId)}}function Ma(n,i,o,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Oa(i),i!==null&&Du(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function L_(n,i,o,u,h){switch(i){case"focusin":return ui=Ma(ui,n,i,o,u,h),!0;case"dragenter":return ci=Ma(ci,n,i,o,u,h),!0;case"mouseover":return fi=Ma(fi,n,i,o,u,h),!0;case"pointerover":var g=h.pointerId;return Sa.set(g,Ma(Sa.get(g)||null,n,i,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,Ea.set(g,Ma(Ea.get(g)||null,n,i,o,u,h)),!0}return!1}function yh(n){var i=Xi(n.target);if(i!==null){var o=Sr(i);if(o!==null){if(i=o.tag,i===13){if(i=Co(o),i!==null){n.blockedOn=i,_h(n.priority,function(){gh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function No(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Iu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);at=u,o.target.dispatchEvent(u),at=null}else return i=Oa(o),i!==null&&Du(i),n.blockedOn=o,!1;i.shift()}return!0}function Sh(n,i,o){No(n)&&o.delete(i)}function D_(){Uu=!1,ui!==null&&No(ui)&&(ui=null),ci!==null&&No(ci)&&(ci=null),fi!==null&&No(fi)&&(fi=null),Sa.forEach(Sh),Ea.forEach(Sh)}function wa(n,i){n.blockedOn===i&&(n.blockedOn=null,Uu||(Uu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,D_)))}function Ta(n){function i(h){return wa(h,n)}if(0<Uo.length){wa(Uo[0],n);for(var o=1;o<Uo.length;o++){var u=Uo[o];u.blockedOn===n&&(u.blockedOn=null)}}for(ui!==null&&wa(ui,n),ci!==null&&wa(ci,n),fi!==null&&wa(fi,n),Sa.forEach(i),Ea.forEach(i),o=0;o<di.length;o++)u=di[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<di.length&&(o=di[0],o.blockedOn===null);)yh(o),o.blockedOn===null&&di.shift()}var xs=C.ReactCurrentBatchConfig,Io=!0;function U_(n,i,o,u){var h=Mt,g=xs.transition;xs.transition=null;try{Mt=1,Nu(n,i,o,u)}finally{Mt=h,xs.transition=g}}function N_(n,i,o,u){var h=Mt,g=xs.transition;xs.transition=null;try{Mt=4,Nu(n,i,o,u)}finally{Mt=h,xs.transition=g}}function Nu(n,i,o,u){if(Io){var h=Iu(n,i,o,u);if(h===null)Ju(n,i,u,Fo,o),xh(n,u);else if(L_(h,n,i,o,u))u.stopPropagation();else if(xh(n,u),i&4&&-1<P_.indexOf(n)){for(;h!==null;){var g=Oa(h);if(g!==null&&mh(g),g=Iu(n,i,o,u),g===null&&Ju(n,i,u,Fo,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else Ju(n,i,u,null,o)}}var Fo=null;function Iu(n,i,o,u){if(Fo=null,n=V(u),n=Xi(n),n!==null)if(i=Sr(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Co(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Fo=n,null}function Eh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Re:return 1;case Ie:return 4;case Ge:case Ve:return 16;case lt:return 536870912;default:return 16}default:return 16}}var hi=null,Fu=null,Oo=null;function Mh(){if(Oo)return Oo;var n,i=Fu,o=i.length,u,h="value"in hi?hi.value:hi.textContent,g=h.length;for(n=0;n<o&&i[n]===h[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===h[g-u];u++);return Oo=h.slice(n,1<u?1-u:void 0)}function ko(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Bo(){return!0}function wh(){return!1}function Xn(n){function i(o,u,h,g,M){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=M,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(o=n[U],this[U]=o?o(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Bo:wh,this.isPropagationStopped=wh,this}return fe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),i}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ou=Xn(ys),Ra=fe({},ys,{view:0,detail:0}),I_=Xn(Ra),ku,Bu,Aa,zo=fe({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Aa&&(Aa&&n.type==="mousemove"?(ku=n.screenX-Aa.screenX,Bu=n.screenY-Aa.screenY):Bu=ku=0,Aa=n),ku)},movementY:function(n){return"movementY"in n?n.movementY:Bu}}),Th=Xn(zo),F_=fe({},zo,{dataTransfer:0}),O_=Xn(F_),k_=fe({},Ra,{relatedTarget:0}),zu=Xn(k_),B_=fe({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),z_=Xn(B_),H_=fe({},ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),V_=Xn(H_),G_=fe({},ys,{data:0}),Rh=Xn(G_),W_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=j_[n])?!!i[n]:!1}function Hu(){return $_}var Y_=fe({},Ra,{key:function(n){if(n.key){var i=W_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ko(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?X_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(n){return n.type==="keypress"?ko(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ko(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),q_=Xn(Y_),K_=fe({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=Xn(K_),Z_=fe({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),J_=Xn(Z_),Q_=fe({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),e0=Xn(Q_),t0=fe({},zo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),n0=Xn(t0),r0=[9,13,27,32],Vu=f&&"CompositionEvent"in window,Ca=null;f&&"documentMode"in document&&(Ca=document.documentMode);var i0=f&&"TextEvent"in window&&!Ca,Ch=f&&(!Vu||Ca&&8<Ca&&11>=Ca),bh=" ",Ph=!1;function Lh(n,i){switch(n){case"keyup":return r0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ss=!1;function s0(n,i){switch(n){case"compositionend":return Dh(i);case"keypress":return i.which!==32?null:(Ph=!0,bh);case"textInput":return n=i.data,n===bh&&Ph?null:n;default:return null}}function a0(n,i){if(Ss)return n==="compositionend"||!Vu&&Lh(n,i)?(n=Mh(),Oo=Fu=hi=null,Ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ch&&i.locale!=="ko"?null:i.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!o0[n.type]:i==="textarea"}function Nh(n,i,o,u){_e(u),i=Xo(i,"onChange"),0<i.length&&(o=new Ou("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var ba=null,Pa=null;function l0(n){Jh(n,0)}function Ho(n){var i=Rs(n);if(ft(i))return n}function u0(n,i){if(n==="change")return i}var Ih=!1;if(f){var Gu;if(f){var Wu="oninput"in document;if(!Wu){var Fh=document.createElement("div");Fh.setAttribute("oninput","return;"),Wu=typeof Fh.oninput=="function"}Gu=Wu}else Gu=!1;Ih=Gu&&(!document.documentMode||9<document.documentMode)}function Oh(){ba&&(ba.detachEvent("onpropertychange",kh),Pa=ba=null)}function kh(n){if(n.propertyName==="value"&&Ho(Pa)){var i=[];Nh(i,Pa,n,V(n)),bt(l0,i)}}function c0(n,i,o){n==="focusin"?(Oh(),ba=i,Pa=o,ba.attachEvent("onpropertychange",kh)):n==="focusout"&&Oh()}function f0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ho(Pa)}function d0(n,i){if(n==="click")return Ho(i)}function h0(n,i){if(n==="input"||n==="change")return Ho(i)}function p0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var lr=typeof Object.is=="function"?Object.is:p0;function La(n,i){if(lr(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!d.call(i,h)||!lr(n[h],i[h]))return!1}return!0}function Bh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zh(n,i){var o=Bh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Bh(o)}}function Hh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Hh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Vh(){for(var n=window,i=dt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=dt(n.document)}return i}function Xu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function m0(n){var i=Vh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Hh(o.ownerDocument.documentElement,o)){if(u!==null&&Xu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=zh(o,g);var M=zh(o,u);h&&M&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var g0=f&&"documentMode"in document&&11>=document.documentMode,Es=null,ju=null,Da=null,$u=!1;function Gh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$u||Es==null||Es!==dt(u)||(u=Es,"selectionStart"in u&&Xu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Da&&La(Da,u)||(Da=u,u=Xo(ju,"onSelect"),0<u.length&&(i=new Ou("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=Es)))}function Vo(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Ms={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},Yu={},Wh={};f&&(Wh=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Go(n){if(Yu[n])return Yu[n];if(!Ms[n])return n;var i=Ms[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Wh)return Yu[n]=i[o];return n}var Xh=Go("animationend"),jh=Go("animationiteration"),$h=Go("animationstart"),Yh=Go("transitionend"),qh=new Map,Kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pi(n,i){qh.set(n,i),l(i,[n])}for(var qu=0;qu<Kh.length;qu++){var Ku=Kh[qu],v0=Ku.toLowerCase(),_0=Ku[0].toUpperCase()+Ku.slice(1);pi(v0,"on"+_0)}pi(Xh,"onAnimationEnd"),pi(jh,"onAnimationIteration"),pi($h,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Yh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function Zh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,Ao(u,i,void 0,n),n.currentTarget=null}function Jh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var M=u.length-1;0<=M;M--){var U=u[M],B=U.instance,ie=U.currentTarget;if(U=U.listener,B!==g&&h.isPropagationStopped())break e;Zh(h,U,ie),g=B}else for(M=0;M<u.length;M++){if(U=u[M],B=U.instance,ie=U.currentTarget,U=U.listener,B!==g&&h.isPropagationStopped())break e;Zh(h,U,ie),g=B}}}if(Wi)throw n=oi,Wi=!1,oi=null,n}function Bt(n,i){var o=i[ic];o===void 0&&(o=i[ic]=new Set);var u=n+"__bubble";o.has(u)||(Qh(i,n,2,!1),o.add(u))}function Zu(n,i,o){var u=0;i&&(u|=4),Qh(o,n,u,i)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function Na(n){if(!n[Wo]){n[Wo]=!0,s.forEach(function(o){o!=="selectionchange"&&(x0.has(o)||Zu(o,!1,n),Zu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Wo]||(i[Wo]=!0,Zu("selectionchange",!1,i))}}function Qh(n,i,o,u){switch(Eh(i)){case 1:var h=U_;break;case 4:h=N_;break;default:h=Nu}o=h.bind(null,i,o,n),h=void 0,!an||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function Ju(n,i,o,u,h){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var U=u.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(M===4)for(M=u.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===h||B.nodeType===8&&B.parentNode===h))return;M=M.return}for(;U!==null;){if(M=Xi(U),M===null)return;if(B=M.tag,B===5||B===6){u=g=M;continue e}U=U.parentNode}}u=u.return}bt(function(){var ie=g,Me=V(o),Te=[];e:{var Ee=qh.get(n);if(Ee!==void 0){var ze=Ou,$e=n;switch(n){case"keypress":if(ko(o)===0)break e;case"keydown":case"keyup":ze=q_;break;case"focusin":$e="focus",ze=zu;break;case"focusout":$e="blur",ze=zu;break;case"beforeblur":case"afterblur":ze=zu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=O_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=J_;break;case Xh:case jh:case $h:ze=z_;break;case Yh:ze=e0;break;case"scroll":ze=I_;break;case"wheel":ze=n0;break;case"copy":case"cut":case"paste":ze=V_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Ah}var qe=(i&4)!==0,Kt=!qe&&n==="scroll",K=qe?Ee!==null?Ee+"Capture":null:Ee;qe=[];for(var W=ie,ee;W!==null;){ee=W;var Ae=ee.stateNode;if(ee.tag===5&&Ae!==null&&(ee=Ae,K!==null&&(Ae=Tt(W,K),Ae!=null&&qe.push(Ia(W,Ae,ee)))),Kt)break;W=W.return}0<qe.length&&(Ee=new ze(Ee,$e,null,o,Me),Te.push({event:Ee,listeners:qe}))}}if((i&7)===0){e:{if(Ee=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",Ee&&o!==at&&($e=o.relatedTarget||o.fromElement)&&(Xi($e)||$e[Or]))break e;if((ze||Ee)&&(Ee=Me.window===Me?Me:(Ee=Me.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,ze?($e=o.relatedTarget||o.toElement,ze=ie,$e=$e?Xi($e):null,$e!==null&&(Kt=Sr($e),$e!==Kt||$e.tag!==5&&$e.tag!==6)&&($e=null)):(ze=null,$e=ie),ze!==$e)){if(qe=Th,Ae="onMouseLeave",K="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(qe=Ah,Ae="onPointerLeave",K="onPointerEnter",W="pointer"),Kt=ze==null?Ee:Rs(ze),ee=$e==null?Ee:Rs($e),Ee=new qe(Ae,W+"leave",ze,o,Me),Ee.target=Kt,Ee.relatedTarget=ee,Ae=null,Xi(Me)===ie&&(qe=new qe(K,W+"enter",$e,o,Me),qe.target=ee,qe.relatedTarget=Kt,Ae=qe),Kt=Ae,ze&&$e)t:{for(qe=ze,K=$e,W=0,ee=qe;ee;ee=ws(ee))W++;for(ee=0,Ae=K;Ae;Ae=ws(Ae))ee++;for(;0<W-ee;)qe=ws(qe),W--;for(;0<ee-W;)K=ws(K),ee--;for(;W--;){if(qe===K||K!==null&&qe===K.alternate)break t;qe=ws(qe),K=ws(K)}qe=null}else qe=null;ze!==null&&ep(Te,Ee,ze,qe,!1),$e!==null&&Kt!==null&&ep(Te,Kt,$e,qe,!0)}}e:{if(Ee=ie?Rs(ie):window,ze=Ee.nodeName&&Ee.nodeName.toLowerCase(),ze==="select"||ze==="input"&&Ee.type==="file")var Je=u0;else if(Uh(Ee))if(Ih)Je=h0;else{Je=f0;var nt=c0}else(ze=Ee.nodeName)&&ze.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(Je=d0);if(Je&&(Je=Je(n,ie))){Nh(Te,Je,o,Me);break e}nt&&nt(n,Ee,ie),n==="focusout"&&(nt=Ee._wrapperState)&&nt.controlled&&Ee.type==="number"&&pt(Ee,"number",Ee.value)}switch(nt=ie?Rs(ie):window,n){case"focusin":(Uh(nt)||nt.contentEditable==="true")&&(Es=nt,ju=ie,Da=null);break;case"focusout":Da=ju=Es=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,Gh(Te,o,Me);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":Gh(Te,o,Me)}var rt;if(Vu)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Ss?Lh(n,o)&&(ct="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ct="onCompositionStart");ct&&(Ch&&o.locale!=="ko"&&(Ss||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Ss&&(rt=Mh()):(hi=Me,Fu="value"in hi?hi.value:hi.textContent,Ss=!0)),nt=Xo(ie,ct),0<nt.length&&(ct=new Rh(ct,n,null,o,Me),Te.push({event:ct,listeners:nt}),rt?ct.data=rt:(rt=Dh(o),rt!==null&&(ct.data=rt)))),(rt=i0?s0(n,o):a0(n,o))&&(ie=Xo(ie,"onBeforeInput"),0<ie.length&&(Me=new Rh("onBeforeInput","beforeinput",null,o,Me),Te.push({event:Me,listeners:ie}),Me.data=rt))}Jh(Te,i)})}function Ia(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Xo(n,i){for(var o=i+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Tt(n,o),g!=null&&u.unshift(Ia(n,g,h)),g=Tt(n,i),g!=null&&u.push(Ia(n,g,h))),n=n.return}return u}function ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ep(n,i,o,u,h){for(var g=i._reactName,M=[];o!==null&&o!==u;){var U=o,B=U.alternate,ie=U.stateNode;if(B!==null&&B===u)break;U.tag===5&&ie!==null&&(U=ie,h?(B=Tt(o,g),B!=null&&M.unshift(Ia(o,B,U))):h||(B=Tt(o,g),B!=null&&M.push(Ia(o,B,U)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var y0=/\r\n?/g,S0=/\u0000|\uFFFD/g;function tp(n){return(typeof n=="string"?n:""+n).replace(y0,`
`).replace(S0,"")}function jo(n,i,o){if(i=tp(i),tp(n)!==i&&o)throw Error(t(425))}function $o(){}var Qu=null,ec=null;function tc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var nc=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,M0=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(n){return np.resolve(null).then(n).catch(w0)}:nc;function w0(n){setTimeout(function(){throw n})}function rc(n,i){var o=i,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),Ta(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);Ta(i)}function mi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function rp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),Mr="__reactFiber$"+Ts,Fa="__reactProps$"+Ts,Or="__reactContainer$"+Ts,ic="__reactEvents$"+Ts,T0="__reactListeners$"+Ts,R0="__reactHandles$"+Ts;function Xi(n){var i=n[Mr];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Or]||o[Mr]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=rp(n);n!==null;){if(o=n[Mr])return o;n=rp(n)}return i}n=o,o=n.parentNode}return null}function Oa(n){return n=n[Mr]||n[Or],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Yo(n){return n[Fa]||null}var sc=[],As=-1;function gi(n){return{current:n}}function zt(n){0>As||(n.current=sc[As],sc[As]=null,As--)}function kt(n,i){As++,sc[As]=n.current,n.current=i}var vi={},yn=gi(vi),kn=gi(!1),ji=vi;function Cs(n,i){var o=n.type.contextTypes;if(!o)return vi;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Bn(n){return n=n.childContextTypes,n!=null}function qo(){zt(kn),zt(yn)}function ip(n,i,o){if(yn.current!==vi)throw Error(t(168));kt(yn,i),kt(kn,o)}function sp(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,le(n)||"Unknown",h));return fe({},o,u)}function Ko(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vi,ji=yn.current,kt(yn,n),kt(kn,kn.current),!0}function ap(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=sp(n,i,ji),u.__reactInternalMemoizedMergedChildContext=n,zt(kn),zt(yn),kt(yn,n)):zt(kn),kt(kn,o)}var kr=null,Zo=!1,ac=!1;function op(n){kr===null?kr=[n]:kr.push(n)}function A0(n){Zo=!0,op(n)}function _i(){if(!ac&&kr!==null){ac=!0;var n=0,i=Mt;try{var o=kr;for(Mt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}kr=null,Zo=!1}catch(h){throw kr!==null&&(kr=kr.slice(n+1)),Do(Re,_i),h}finally{Mt=i,ac=!1}}return null}var bs=[],Ps=0,Jo=null,Qo=0,Zn=[],Jn=0,$i=null,Br=1,zr="";function Yi(n,i){bs[Ps++]=Qo,bs[Ps++]=Jo,Jo=n,Qo=i}function lp(n,i,o){Zn[Jn++]=Br,Zn[Jn++]=zr,Zn[Jn++]=$i,$i=n;var u=Br;n=zr;var h=32-mt(u)-1;u&=~(1<<h),o+=1;var g=32-mt(i)+h;if(30<g){var M=h-h%5;g=(u&(1<<M)-1).toString(32),u>>=M,h-=M,Br=1<<32-mt(i)+h|o<<h|u,zr=g+n}else Br=1<<g|o<<h|u,zr=n}function oc(n){n.return!==null&&(Yi(n,1),lp(n,1,0))}function lc(n){for(;n===Jo;)Jo=bs[--Ps],bs[Ps]=null,Qo=bs[--Ps],bs[Ps]=null;for(;n===$i;)$i=Zn[--Jn],Zn[Jn]=null,zr=Zn[--Jn],Zn[Jn]=null,Br=Zn[--Jn],Zn[Jn]=null}var jn=null,$n=null,Gt=!1,ur=null;function up(n,i){var o=nr(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function cp(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,jn=n,$n=mi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,jn=n,$n=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=$i!==null?{id:Br,overflow:zr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=nr(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,jn=n,$n=null,!0):!1;default:return!1}}function uc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function cc(n){if(Gt){var i=$n;if(i){var o=i;if(!cp(n,i)){if(uc(n))throw Error(t(418));i=mi(o.nextSibling);var u=jn;i&&cp(n,i)?up(u,o):(n.flags=n.flags&-4097|2,Gt=!1,jn=n)}}else{if(uc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,jn=n}}}function fp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function el(n){if(n!==jn)return!1;if(!Gt)return fp(n),Gt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!tc(n.type,n.memoizedProps)),i&&(i=$n)){if(uc(n))throw dp(),Error(t(418));for(;i;)up(n,i),i=mi(i.nextSibling)}if(fp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){$n=mi(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}$n=null}}else $n=jn?mi(n.stateNode.nextSibling):null;return!0}function dp(){for(var n=$n;n;)n=mi(n.nextSibling)}function Ls(){$n=jn=null,Gt=!1}function fc(n){ur===null?ur=[n]:ur.push(n)}var C0=C.ReactCurrentBatchConfig;function ka(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(M){var U=h.refs;M===null?delete U[g]:U[g]=M},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function tl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function hp(n){var i=n._init;return i(n._payload)}function pp(n){function i(K,W){if(n){var ee=K.deletions;ee===null?(K.deletions=[W],K.flags|=16):ee.push(W)}}function o(K,W){if(!n)return null;for(;W!==null;)i(K,W),W=W.sibling;return null}function u(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function h(K,W){return K=Ri(K,W),K.index=0,K.sibling=null,K}function g(K,W,ee){return K.index=ee,n?(ee=K.alternate,ee!==null?(ee=ee.index,ee<W?(K.flags|=2,W):ee):(K.flags|=2,W)):(K.flags|=1048576,W)}function M(K){return n&&K.alternate===null&&(K.flags|=2),K}function U(K,W,ee,Ae){return W===null||W.tag!==6?(W=nf(ee,K.mode,Ae),W.return=K,W):(W=h(W,ee),W.return=K,W)}function B(K,W,ee,Ae){var Je=ee.type;return Je===F?Me(K,W,ee.props.children,Ae,ee.key):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ce&&hp(Je)===W.type)?(Ae=h(W,ee.props),Ae.ref=ka(K,W,ee),Ae.return=K,Ae):(Ae=Tl(ee.type,ee.key,ee.props,null,K.mode,Ae),Ae.ref=ka(K,W,ee),Ae.return=K,Ae)}function ie(K,W,ee,Ae){return W===null||W.tag!==4||W.stateNode.containerInfo!==ee.containerInfo||W.stateNode.implementation!==ee.implementation?(W=rf(ee,K.mode,Ae),W.return=K,W):(W=h(W,ee.children||[]),W.return=K,W)}function Me(K,W,ee,Ae,Je){return W===null||W.tag!==7?(W=ns(ee,K.mode,Ae,Je),W.return=K,W):(W=h(W,ee),W.return=K,W)}function Te(K,W,ee){if(typeof W=="string"&&W!==""||typeof W=="number")return W=nf(""+W,K.mode,ee),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case k:return ee=Tl(W.type,W.key,W.props,null,K.mode,ee),ee.ref=ka(K,null,W),ee.return=K,ee;case N:return W=rf(W,K.mode,ee),W.return=K,W;case ce:var Ae=W._init;return Te(K,Ae(W._payload),ee)}if(Ke(W)||he(W))return W=ns(W,K.mode,ee,null),W.return=K,W;tl(K,W)}return null}function Ee(K,W,ee,Ae){var Je=W!==null?W.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Je!==null?null:U(K,W,""+ee,Ae);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case k:return ee.key===Je?B(K,W,ee,Ae):null;case N:return ee.key===Je?ie(K,W,ee,Ae):null;case ce:return Je=ee._init,Ee(K,W,Je(ee._payload),Ae)}if(Ke(ee)||he(ee))return Je!==null?null:Me(K,W,ee,Ae,null);tl(K,ee)}return null}function ze(K,W,ee,Ae,Je){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return K=K.get(ee)||null,U(W,K,""+Ae,Je);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case k:return K=K.get(Ae.key===null?ee:Ae.key)||null,B(W,K,Ae,Je);case N:return K=K.get(Ae.key===null?ee:Ae.key)||null,ie(W,K,Ae,Je);case ce:var nt=Ae._init;return ze(K,W,ee,nt(Ae._payload),Je)}if(Ke(Ae)||he(Ae))return K=K.get(ee)||null,Me(W,K,Ae,Je,null);tl(W,Ae)}return null}function $e(K,W,ee,Ae){for(var Je=null,nt=null,rt=W,ct=W=0,dn=null;rt!==null&&ct<ee.length;ct++){rt.index>ct?(dn=rt,rt=null):dn=rt.sibling;var Rt=Ee(K,rt,ee[ct],Ae);if(Rt===null){rt===null&&(rt=dn);break}n&&rt&&Rt.alternate===null&&i(K,rt),W=g(Rt,W,ct),nt===null?Je=Rt:nt.sibling=Rt,nt=Rt,rt=dn}if(ct===ee.length)return o(K,rt),Gt&&Yi(K,ct),Je;if(rt===null){for(;ct<ee.length;ct++)rt=Te(K,ee[ct],Ae),rt!==null&&(W=g(rt,W,ct),nt===null?Je=rt:nt.sibling=rt,nt=rt);return Gt&&Yi(K,ct),Je}for(rt=u(K,rt);ct<ee.length;ct++)dn=ze(rt,K,ct,ee[ct],Ae),dn!==null&&(n&&dn.alternate!==null&&rt.delete(dn.key===null?ct:dn.key),W=g(dn,W,ct),nt===null?Je=dn:nt.sibling=dn,nt=dn);return n&&rt.forEach(function(Ai){return i(K,Ai)}),Gt&&Yi(K,ct),Je}function qe(K,W,ee,Ae){var Je=he(ee);if(typeof Je!="function")throw Error(t(150));if(ee=Je.call(ee),ee==null)throw Error(t(151));for(var nt=Je=null,rt=W,ct=W=0,dn=null,Rt=ee.next();rt!==null&&!Rt.done;ct++,Rt=ee.next()){rt.index>ct?(dn=rt,rt=null):dn=rt.sibling;var Ai=Ee(K,rt,Rt.value,Ae);if(Ai===null){rt===null&&(rt=dn);break}n&&rt&&Ai.alternate===null&&i(K,rt),W=g(Ai,W,ct),nt===null?Je=Ai:nt.sibling=Ai,nt=Ai,rt=dn}if(Rt.done)return o(K,rt),Gt&&Yi(K,ct),Je;if(rt===null){for(;!Rt.done;ct++,Rt=ee.next())Rt=Te(K,Rt.value,Ae),Rt!==null&&(W=g(Rt,W,ct),nt===null?Je=Rt:nt.sibling=Rt,nt=Rt);return Gt&&Yi(K,ct),Je}for(rt=u(K,rt);!Rt.done;ct++,Rt=ee.next())Rt=ze(rt,K,ct,Rt.value,Ae),Rt!==null&&(n&&Rt.alternate!==null&&rt.delete(Rt.key===null?ct:Rt.key),W=g(Rt,W,ct),nt===null?Je=Rt:nt.sibling=Rt,nt=Rt);return n&&rt.forEach(function(ox){return i(K,ox)}),Gt&&Yi(K,ct),Je}function Kt(K,W,ee,Ae){if(typeof ee=="object"&&ee!==null&&ee.type===F&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case k:e:{for(var Je=ee.key,nt=W;nt!==null;){if(nt.key===Je){if(Je=ee.type,Je===F){if(nt.tag===7){o(K,nt.sibling),W=h(nt,ee.props.children),W.return=K,K=W;break e}}else if(nt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ce&&hp(Je)===nt.type){o(K,nt.sibling),W=h(nt,ee.props),W.ref=ka(K,nt,ee),W.return=K,K=W;break e}o(K,nt);break}else i(K,nt);nt=nt.sibling}ee.type===F?(W=ns(ee.props.children,K.mode,Ae,ee.key),W.return=K,K=W):(Ae=Tl(ee.type,ee.key,ee.props,null,K.mode,Ae),Ae.ref=ka(K,W,ee),Ae.return=K,K=Ae)}return M(K);case N:e:{for(nt=ee.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===ee.containerInfo&&W.stateNode.implementation===ee.implementation){o(K,W.sibling),W=h(W,ee.children||[]),W.return=K,K=W;break e}else{o(K,W);break}else i(K,W);W=W.sibling}W=rf(ee,K.mode,Ae),W.return=K,K=W}return M(K);case ce:return nt=ee._init,Kt(K,W,nt(ee._payload),Ae)}if(Ke(ee))return $e(K,W,ee,Ae);if(he(ee))return qe(K,W,ee,Ae);tl(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,W!==null&&W.tag===6?(o(K,W.sibling),W=h(W,ee),W.return=K,K=W):(o(K,W),W=nf(ee,K.mode,Ae),W.return=K,K=W),M(K)):o(K,W)}return Kt}var Ds=pp(!0),mp=pp(!1),nl=gi(null),rl=null,Us=null,dc=null;function hc(){dc=Us=rl=null}function pc(n){var i=nl.current;zt(nl),n._currentValue=i}function mc(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Ns(n,i){rl=n,dc=Us=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(zn=!0),n.firstContext=null)}function Qn(n){var i=n._currentValue;if(dc!==n)if(n={context:n,memoizedValue:i,next:null},Us===null){if(rl===null)throw Error(t(308));Us=n,rl.dependencies={lanes:0,firstContext:n}}else Us=Us.next=n;return i}var qi=null;function gc(n){qi===null?qi=[n]:qi.push(n)}function gp(n,i,o,u){var h=i.interleaved;return h===null?(o.next=o,gc(i)):(o.next=h.next,h.next=o),i.interleaved=o,Hr(n,u)}function Hr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var xi=!1;function vc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function yi(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(wt&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,Hr(n,o)}return h=u.interleaved,h===null?(i.next=i,gc(u)):(i.next=h.next,h.next=i),u.interleaved=i,Hr(n,o)}function il(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,un(n,o)}}function _p(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=M:g=g.next=M,o=o.next}while(o!==null);g===null?h=g=i:g=g.next=i}else h=g=i;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function sl(n,i,o,u){var h=n.updateQueue;xi=!1;var g=h.firstBaseUpdate,M=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var B=U,ie=B.next;B.next=null,M===null?g=ie:M.next=ie,M=B;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,U=Me.lastBaseUpdate,U!==M&&(U===null?Me.firstBaseUpdate=ie:U.next=ie,Me.lastBaseUpdate=B))}if(g!==null){var Te=h.baseState;M=0,Me=ie=B=null,U=g;do{var Ee=U.lane,ze=U.eventTime;if((u&Ee)===Ee){Me!==null&&(Me=Me.next={eventTime:ze,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var $e=n,qe=U;switch(Ee=i,ze=o,qe.tag){case 1:if($e=qe.payload,typeof $e=="function"){Te=$e.call(ze,Te,Ee);break e}Te=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=qe.payload,Ee=typeof $e=="function"?$e.call(ze,Te,Ee):$e,Ee==null)break e;Te=fe({},Te,Ee);break e;case 2:xi=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,Ee=h.effects,Ee===null?h.effects=[U]:Ee.push(U))}else ze={eventTime:ze,lane:Ee,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Me===null?(ie=Me=ze,B=Te):Me=Me.next=ze,M|=Ee;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;Ee=U,U=Ee.next,Ee.next=null,h.lastBaseUpdate=Ee,h.shared.pending=null}}while(!0);if(Me===null&&(B=Te),h.baseState=B,h.firstBaseUpdate=ie,h.lastBaseUpdate=Me,i=h.shared.interleaved,i!==null){h=i;do M|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Ji|=M,n.lanes=M,n.memoizedState=Te}}function xp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Ba={},wr=gi(Ba),za=gi(Ba),Ha=gi(Ba);function Ki(n){if(n===Ba)throw Error(t(174));return n}function _c(n,i){switch(kt(Ha,i),kt(za,n),kt(wr,Ba),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=xe(i,n)}zt(wr),kt(wr,i)}function Is(){zt(wr),zt(za),zt(Ha)}function yp(n){Ki(Ha.current);var i=Ki(wr.current),o=xe(i,n.type);i!==o&&(kt(za,n),kt(wr,o))}function xc(n){za.current===n&&(zt(wr),zt(za))}var Wt=gi(0);function al(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var yc=[];function Sc(){for(var n=0;n<yc.length;n++)yc[n]._workInProgressVersionPrimary=null;yc.length=0}var ol=C.ReactCurrentDispatcher,Ec=C.ReactCurrentBatchConfig,Zi=0,Xt=null,tn=null,cn=null,ll=!1,Va=!1,Ga=0,b0=0;function Sn(){throw Error(t(321))}function Mc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!lr(n[o],i[o]))return!1;return!0}function wc(n,i,o,u,h,g){if(Zi=g,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ol.current=n===null||n.memoizedState===null?U0:N0,n=o(u,h),Va){g=0;do{if(Va=!1,Ga=0,25<=g)throw Error(t(301));g+=1,cn=tn=null,i.updateQueue=null,ol.current=I0,n=o(u,h)}while(Va)}if(ol.current=fl,i=tn!==null&&tn.next!==null,Zi=0,cn=tn=Xt=null,ll=!1,i)throw Error(t(300));return n}function Tc(){var n=Ga!==0;return Ga=0,n}function Tr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Xt.memoizedState=cn=n:cn=cn.next=n,cn}function er(){if(tn===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var i=cn===null?Xt.memoizedState:cn.next;if(i!==null)cn=i,tn=n;else{if(n===null)throw Error(t(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},cn===null?Xt.memoizedState=cn=n:cn=cn.next=n}return cn}function Wa(n,i){return typeof i=="function"?i(n):i}function Rc(n){var i=er(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=tn,h=u.baseQueue,g=o.pending;if(g!==null){if(h!==null){var M=h.next;h.next=g.next,g.next=M}u.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,u=u.baseState;var U=M=null,B=null,ie=g;do{var Me=ie.lane;if((Zi&Me)===Me)B!==null&&(B=B.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),u=ie.hasEagerState?ie.eagerState:n(u,ie.action);else{var Te={lane:Me,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};B===null?(U=B=Te,M=u):B=B.next=Te,Xt.lanes|=Me,Ji|=Me}ie=ie.next}while(ie!==null&&ie!==g);B===null?M=u:B.next=U,lr(u,i.memoizedState)||(zn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=B,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do g=h.lane,Xt.lanes|=g,Ji|=g,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Ac(n){var i=er(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,g=i.memoizedState;if(h!==null){o.pending=null;var M=h=h.next;do g=n(g,M.action),M=M.next;while(M!==h);lr(g,i.memoizedState)||(zn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,u]}function Sp(){}function Ep(n,i){var o=Xt,u=er(),h=i(),g=!lr(u.memoizedState,h);if(g&&(u.memoizedState=h,zn=!0),u=u.queue,Cc(Tp.bind(null,o,u,n),[n]),u.getSnapshot!==i||g||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,Xa(9,wp.bind(null,o,u,h,i),void 0,null),fn===null)throw Error(t(349));(Zi&30)!==0||Mp(o,i,h)}return h}function Mp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function wp(n,i,o,u){i.value=o,i.getSnapshot=u,Rp(i)&&Ap(n)}function Tp(n,i,o){return o(function(){Rp(i)&&Ap(n)})}function Rp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!lr(n,o)}catch{return!0}}function Ap(n){var i=Hr(n,1);i!==null&&hr(i,n,1,-1)}function Cp(n){var i=Tr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},i.queue=n,n=n.dispatch=D0.bind(null,Xt,n),[i.memoizedState,n]}function Xa(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function bp(){return er().memoizedState}function ul(n,i,o,u){var h=Tr();Xt.flags|=n,h.memoizedState=Xa(1|i,o,void 0,u===void 0?null:u)}function cl(n,i,o,u){var h=er();u=u===void 0?null:u;var g=void 0;if(tn!==null){var M=tn.memoizedState;if(g=M.destroy,u!==null&&Mc(u,M.deps)){h.memoizedState=Xa(i,o,g,u);return}}Xt.flags|=n,h.memoizedState=Xa(1|i,o,g,u)}function Pp(n,i){return ul(8390656,8,n,i)}function Cc(n,i){return cl(2048,8,n,i)}function Lp(n,i){return cl(4,2,n,i)}function Dp(n,i){return cl(4,4,n,i)}function Up(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Np(n,i,o){return o=o!=null?o.concat([n]):null,cl(4,4,Up.bind(null,i,n),o)}function bc(){}function Ip(n,i){var o=er();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Mc(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Fp(n,i){var o=er();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Mc(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Op(n,i,o){return(Zi&21)===0?(n.baseState&&(n.baseState=!1,zn=!0),n.memoizedState=o):(lr(o,i)||(o=Ot(),Xt.lanes|=o,Ji|=o,n.baseState=!0),i)}function P0(n,i){var o=Mt;Mt=o!==0&&4>o?o:4,n(!0);var u=Ec.transition;Ec.transition={};try{n(!1),i()}finally{Mt=o,Ec.transition=u}}function kp(){return er().memoizedState}function L0(n,i,o){var u=wi(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Bp(n))zp(i,o);else if(o=gp(n,i,o,u),o!==null){var h=Ln();hr(o,n,u,h),Hp(o,i,u)}}function D0(n,i,o){var u=wi(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Bp(n))zp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var M=i.lastRenderedState,U=g(M,o);if(h.hasEagerState=!0,h.eagerState=U,lr(U,M)){var B=i.interleaved;B===null?(h.next=h,gc(i)):(h.next=B.next,B.next=h),i.interleaved=h;return}}catch{}o=gp(n,i,h,u),o!==null&&(h=Ln(),hr(o,n,u,h),Hp(o,i,u))}}function Bp(n){var i=n.alternate;return n===Xt||i!==null&&i===Xt}function zp(n,i){Va=ll=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Hp(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,un(n,o)}}var fl={readContext:Qn,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},U0={readContext:Qn,useCallback:function(n,i){return Tr().memoizedState=[n,i===void 0?null:i],n},useContext:Qn,useEffect:Pp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,ul(4194308,4,Up.bind(null,i,n),o)},useLayoutEffect:function(n,i){return ul(4194308,4,n,i)},useInsertionEffect:function(n,i){return ul(4,2,n,i)},useMemo:function(n,i){var o=Tr();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Tr();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=L0.bind(null,Xt,n),[u.memoizedState,n]},useRef:function(n){var i=Tr();return n={current:n},i.memoizedState=n},useState:Cp,useDebugValue:bc,useDeferredValue:function(n){return Tr().memoizedState=n},useTransition:function(){var n=Cp(!1),i=n[0];return n=P0.bind(null,n[1]),Tr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Xt,h=Tr();if(Gt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),fn===null)throw Error(t(349));(Zi&30)!==0||Mp(u,i,o)}h.memoizedState=o;var g={value:o,getSnapshot:i};return h.queue=g,Pp(Tp.bind(null,u,g,n),[n]),u.flags|=2048,Xa(9,wp.bind(null,u,g,o,i),void 0,null),o},useId:function(){var n=Tr(),i=fn.identifierPrefix;if(Gt){var o=zr,u=Br;o=(u&~(1<<32-mt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ga++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=b0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},N0={readContext:Qn,useCallback:Ip,useContext:Qn,useEffect:Cc,useImperativeHandle:Np,useInsertionEffect:Lp,useLayoutEffect:Dp,useMemo:Fp,useReducer:Rc,useRef:bp,useState:function(){return Rc(Wa)},useDebugValue:bc,useDeferredValue:function(n){var i=er();return Op(i,tn.memoizedState,n)},useTransition:function(){var n=Rc(Wa)[0],i=er().memoizedState;return[n,i]},useMutableSource:Sp,useSyncExternalStore:Ep,useId:kp,unstable_isNewReconciler:!1},I0={readContext:Qn,useCallback:Ip,useContext:Qn,useEffect:Cc,useImperativeHandle:Np,useInsertionEffect:Lp,useLayoutEffect:Dp,useMemo:Fp,useReducer:Ac,useRef:bp,useState:function(){return Ac(Wa)},useDebugValue:bc,useDeferredValue:function(n){var i=er();return tn===null?i.memoizedState=n:Op(i,tn.memoizedState,n)},useTransition:function(){var n=Ac(Wa)[0],i=er().memoizedState;return[n,i]},useMutableSource:Sp,useSyncExternalStore:Ep,useId:kp,unstable_isNewReconciler:!1};function cr(n,i){if(n&&n.defaultProps){i=fe({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Pc(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:fe({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var dl={isMounted:function(n){return(n=n._reactInternals)?Sr(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Ln(),h=wi(n),g=Vr(u,h);g.payload=i,o!=null&&(g.callback=o),i=yi(n,g,h),i!==null&&(hr(i,n,h,u),il(i,n,h))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Ln(),h=wi(n),g=Vr(u,h);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=yi(n,g,h),i!==null&&(hr(i,n,h,u),il(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Ln(),u=wi(n),h=Vr(o,u);h.tag=2,i!=null&&(h.callback=i),i=yi(n,h,u),i!==null&&(hr(i,n,u,o),il(i,n,u))}};function Vp(n,i,o,u,h,g,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,M):i.prototype&&i.prototype.isPureReactComponent?!La(o,u)||!La(h,g):!0}function Gp(n,i,o){var u=!1,h=vi,g=i.contextType;return typeof g=="object"&&g!==null?g=Qn(g):(h=Bn(i)?ji:yn.current,u=i.contextTypes,g=(u=u!=null)?Cs(n,h):vi),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=dl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Wp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&dl.enqueueReplaceState(i,i.state,null)}function Lc(n,i,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},vc(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=Qn(g):(g=Bn(i)?ji:yn.current,h.context=Cs(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Pc(n,i,g,o),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&dl.enqueueReplaceState(h,h.state,null),sl(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Fs(n,i){try{var o="",u=i;do o+=ge(u),u=u.return;while(u);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Dc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Uc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var F0=typeof WeakMap=="function"?WeakMap:Map;function Xp(n,i,o){o=Vr(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){xl||(xl=!0,Yc=u),Uc(n,i)},o}function jp(n,i,o){o=Vr(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;o.payload=function(){return u(h)},o.callback=function(){Uc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Uc(n,i),typeof u!="function"&&(Ei===null?Ei=new Set([this]):Ei.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function $p(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new F0;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(o)||(h.add(o),n=K0.bind(null,n,i,o),i.then(n,n))}function Yp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function qp(n,i,o,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Vr(-1,1),i.tag=2,yi(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var O0=C.ReactCurrentOwner,zn=!1;function Pn(n,i,o,u){i.child=n===null?mp(i,null,o,u):Ds(i,n.child,o,u)}function Kp(n,i,o,u,h){o=o.render;var g=i.ref;return Ns(i,h),u=wc(n,i,o,u,g,h),o=Tc(),n!==null&&!zn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Gr(n,i,h)):(Gt&&o&&oc(i),i.flags|=1,Pn(n,i,u,h),i.child)}function Zp(n,i,o,u,h){if(n===null){var g=o.type;return typeof g=="function"&&!tf(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,Jp(n,i,g,u,h)):(n=Tl(o.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var M=g.memoizedProps;if(o=o.compare,o=o!==null?o:La,o(M,u)&&n.ref===i.ref)return Gr(n,i,h)}return i.flags|=1,n=Ri(g,u),n.ref=i.ref,n.return=i,i.child=n}function Jp(n,i,o,u,h){if(n!==null){var g=n.memoizedProps;if(La(g,u)&&n.ref===i.ref)if(zn=!1,i.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(zn=!0);else return i.lanes=n.lanes,Gr(n,i,h)}return Nc(n,i,o,u,h)}function Qp(n,i,o){var u=i.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(ks,Yn),Yn|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(ks,Yn),Yn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,kt(ks,Yn),Yn|=u}else g!==null?(u=g.baseLanes|o,i.memoizedState=null):u=o,kt(ks,Yn),Yn|=u;return Pn(n,i,h,o),i.child}function em(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Nc(n,i,o,u,h){var g=Bn(o)?ji:yn.current;return g=Cs(i,g),Ns(i,h),o=wc(n,i,o,u,g,h),u=Tc(),n!==null&&!zn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Gr(n,i,h)):(Gt&&u&&oc(i),i.flags|=1,Pn(n,i,o,h),i.child)}function tm(n,i,o,u,h){if(Bn(o)){var g=!0;Ko(i)}else g=!1;if(Ns(i,h),i.stateNode===null)pl(n,i),Gp(i,o,u),Lc(i,o,u,h),u=!0;else if(n===null){var M=i.stateNode,U=i.memoizedProps;M.props=U;var B=M.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=Qn(ie):(ie=Bn(o)?ji:yn.current,ie=Cs(i,ie));var Me=o.getDerivedStateFromProps,Te=typeof Me=="function"||typeof M.getSnapshotBeforeUpdate=="function";Te||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==u||B!==ie)&&Wp(i,M,u,ie),xi=!1;var Ee=i.memoizedState;M.state=Ee,sl(i,u,M,h),B=i.memoizedState,U!==u||Ee!==B||kn.current||xi?(typeof Me=="function"&&(Pc(i,o,Me,u),B=i.memoizedState),(U=xi||Vp(i,o,U,u,Ee,B,ie))?(Te||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),M.props=u,M.state=B,M.context=ie,u=U):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,vp(n,i),U=i.memoizedProps,ie=i.type===i.elementType?U:cr(i.type,U),M.props=ie,Te=i.pendingProps,Ee=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=Qn(B):(B=Bn(o)?ji:yn.current,B=Cs(i,B));var ze=o.getDerivedStateFromProps;(Me=typeof ze=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==Te||Ee!==B)&&Wp(i,M,u,B),xi=!1,Ee=i.memoizedState,M.state=Ee,sl(i,u,M,h);var $e=i.memoizedState;U!==Te||Ee!==$e||kn.current||xi?(typeof ze=="function"&&(Pc(i,o,ze,u),$e=i.memoizedState),(ie=xi||Vp(i,o,ie,u,Ee,$e,B)||!1)?(Me||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,$e,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,$e,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=$e),M.props=u,M.state=$e,M.context=B,u=ie):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=1024),u=!1)}return Ic(n,i,o,u,g,h)}function Ic(n,i,o,u,h,g){em(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return h&&ap(i,o,!1),Gr(n,i,g);u=i.stateNode,O0.current=i;var U=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=Ds(i,n.child,null,g),i.child=Ds(i,null,U,g)):Pn(n,i,U,g),i.memoizedState=u.state,h&&ap(i,o,!0),i.child}function nm(n){var i=n.stateNode;i.pendingContext?ip(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ip(n,i.context,!1),_c(n,i.containerInfo)}function rm(n,i,o,u,h){return Ls(),fc(h),i.flags|=256,Pn(n,i,o,u),i.child}var Fc={dehydrated:null,treeContext:null,retryLane:0};function Oc(n){return{baseLanes:n,cachePool:null,transitions:null}}function im(n,i,o){var u=i.pendingProps,h=Wt.current,g=!1,M=(i.flags&128)!==0,U;if((U=M)||(U=n!==null&&n.memoizedState===null?!1:(h&2)!==0),U?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),kt(Wt,h&1),n===null)return cc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,n=u.fallback,g?(u=i.mode,g=i.child,M={mode:"hidden",children:M},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=M):g=Rl(M,u,0,null),n=ns(n,u,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Oc(o),i.memoizedState=Fc,n):kc(i,M));if(h=n.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return k0(n,i,M,u,U,h,o);if(g){g=u.fallback,M=i.mode,h=n.child,U=h.sibling;var B={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=Ri(h,B),u.subtreeFlags=h.subtreeFlags&14680064),U!==null?g=Ri(U,g):(g=ns(g,M,o,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,M=n.child.memoizedState,M=M===null?Oc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},g.memoizedState=M,g.childLanes=n.childLanes&~o,i.memoizedState=Fc,u}return g=n.child,n=g.sibling,u=Ri(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function kc(n,i){return i=Rl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function hl(n,i,o,u){return u!==null&&fc(u),Ds(i,n.child,null,o),n=kc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function k0(n,i,o,u,h,g,M){if(o)return i.flags&256?(i.flags&=-257,u=Dc(Error(t(422))),hl(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,h=i.mode,u=Rl({mode:"visible",children:u.children},h,0,null),g=ns(g,h,M,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Ds(i,n.child,null,M),i.child.memoizedState=Oc(M),i.memoizedState=Fc,g);if((i.mode&1)===0)return hl(n,i,M,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var U=u.dgst;return u=U,g=Error(t(419)),u=Dc(g,u,void 0),hl(n,i,M,u)}if(U=(M&n.childLanes)!==0,zn||U){if(u=fn,u!==null){switch(M&-M){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|M))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Hr(n,h),hr(u,n,h,-1))}return ef(),u=Dc(Error(t(421))),hl(n,i,M,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Z0.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,$n=mi(h.nextSibling),jn=i,Gt=!0,ur=null,n!==null&&(Zn[Jn++]=Br,Zn[Jn++]=zr,Zn[Jn++]=$i,Br=n.id,zr=n.overflow,$i=i),i=kc(i,u.children),i.flags|=4096,i)}function sm(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),mc(n.return,i,o)}function Bc(n,i,o,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function am(n,i,o){var u=i.pendingProps,h=u.revealOrder,g=u.tail;if(Pn(n,i,u.children,o),u=Wt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&sm(n,o,i);else if(n.tag===19)sm(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(kt(Wt,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&al(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),Bc(i,!1,h,o,g);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&al(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}Bc(i,!0,o,null,g);break;case"together":Bc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function pl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Gr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Ji|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Ri(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Ri(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function B0(n,i,o){switch(i.tag){case 3:nm(i),Ls();break;case 5:yp(i);break;case 1:Bn(i.type)&&Ko(i);break;case 4:_c(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;kt(nl,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(kt(Wt,Wt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?im(n,i,o):(kt(Wt,Wt.current&1),n=Gr(n,i,o),n!==null?n.sibling:null);kt(Wt,Wt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return am(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),kt(Wt,Wt.current),u)break;return null;case 22:case 23:return i.lanes=0,Qp(n,i,o)}return Gr(n,i,o)}var om,zc,lm,um;om=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},zc=function(){},lm=function(n,i,o,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,Ki(wr.current);var g=null;switch(o){case"input":h=O(n,h),u=O(n,u),g=[];break;case"select":h=fe({},h,{value:void 0}),u=fe({},u,{value:void 0}),g=[];break;case"textarea":h=It(n,h),u=It(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=$o)}Qe(o,u);var M;o=null;for(ie in h)if(!u.hasOwnProperty(ie)&&h.hasOwnProperty(ie)&&h[ie]!=null)if(ie==="style"){var U=h[ie];for(M in U)U.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?g||(g=[]):(g=g||[]).push(ie,null));for(ie in u){var B=u[ie];if(U=h?.[ie],u.hasOwnProperty(ie)&&B!==U&&(B!=null||U!=null))if(ie==="style")if(U){for(M in U)!U.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&U[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(g||(g=[]),g.push(ie,o)),o=B;else ie==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(g=g||[]).push(ie,B)):ie==="children"?typeof B!="string"&&typeof B!="number"||(g=g||[]).push(ie,""+B):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(B!=null&&ie==="onScroll"&&Bt("scroll",n),g||U===B||(g=[])):(g=g||[]).push(ie,B))}o&&(g=g||[]).push("style",o);var ie=g;(i.updateQueue=ie)&&(i.flags|=4)}},um=function(n,i,o,u){o!==u&&(i.flags|=4)};function ja(n,i){if(!Gt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function En(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function z0(n,i,o){var u=i.pendingProps;switch(lc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(i),null;case 1:return Bn(i.type)&&qo(),En(i),null;case 3:return u=i.stateNode,Is(),zt(kn),zt(yn),Sc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(el(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ur!==null&&(Zc(ur),ur=null))),zc(n,i),En(i),null;case 5:xc(i);var h=Ki(Ha.current);if(o=i.type,n!==null&&i.stateNode!=null)lm(n,i,o,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return En(i),null}if(n=Ki(wr.current),el(i)){u=i.stateNode,o=i.type;var g=i.memoizedProps;switch(u[Mr]=i,u[Fa]=g,n=(i.mode&1)!==0,o){case"dialog":Bt("cancel",u),Bt("close",u);break;case"iframe":case"object":case"embed":Bt("load",u);break;case"video":case"audio":for(h=0;h<Ua.length;h++)Bt(Ua[h],u);break;case"source":Bt("error",u);break;case"img":case"image":case"link":Bt("error",u),Bt("load",u);break;case"details":Bt("toggle",u);break;case"input":Ht(u,g),Bt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Bt("invalid",u);break;case"textarea":D(u,g),Bt("invalid",u)}Qe(o,g),h=null;for(var M in g)if(g.hasOwnProperty(M)){var U=g[M];M==="children"?typeof U=="string"?u.textContent!==U&&(g.suppressHydrationWarning!==!0&&jo(u.textContent,U,n),h=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&jo(u.textContent,U,n),h=["children",""+U]):a.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Bt("scroll",u)}switch(o){case"input":it(u),Xe(u,g,!0);break;case"textarea":it(u),Q(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=$o)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=me(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[Mr]=i,n[Fa]=u,om(n,i,!1,!1),i.stateNode=n;e:{switch(M=De(o,u),o){case"dialog":Bt("cancel",n),Bt("close",n),h=u;break;case"iframe":case"object":case"embed":Bt("load",n),h=u;break;case"video":case"audio":for(h=0;h<Ua.length;h++)Bt(Ua[h],n);h=u;break;case"source":Bt("error",n),h=u;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),h=u;break;case"details":Bt("toggle",n),h=u;break;case"input":Ht(n,u),h=O(n,u),Bt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=fe({},u,{value:void 0}),Bt("invalid",n);break;case"textarea":D(n,u),h=It(n,u),Bt("invalid",n);break;default:h=u}Qe(o,h),U=h;for(g in U)if(U.hasOwnProperty(g)){var B=U[g];g==="style"?Ue(n,B):g==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ye(n,B)):g==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&Pe(n,B):typeof B=="number"&&Pe(n,""+B):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?B!=null&&g==="onScroll"&&Bt("scroll",n):B!=null&&P(n,g,B,M))}switch(o){case"input":it(n),Xe(n,u,!1);break;case"textarea":it(n),Q(n);break;case"option":u.value!=null&&n.setAttribute("value",""+oe(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?st(n,!!u.multiple,g,!1):u.defaultValue!=null&&st(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=$o)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return En(i),null;case 6:if(n&&i.stateNode!=null)um(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Ki(Ha.current),Ki(wr.current),el(i)){if(u=i.stateNode,o=i.memoizedProps,u[Mr]=i,(g=u.nodeValue!==o)&&(n=jn,n!==null))switch(n.tag){case 3:jo(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&jo(u.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Mr]=i,i.stateNode=u}return En(i),null;case 13:if(zt(Wt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&$n!==null&&(i.mode&1)!==0&&(i.flags&128)===0)dp(),Ls(),i.flags|=98560,g=!1;else if(g=el(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Mr]=i}else Ls(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;En(i),g=!1}else ur!==null&&(Zc(ur),ur=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Wt.current&1)!==0?nn===0&&(nn=3):ef())),i.updateQueue!==null&&(i.flags|=4),En(i),null);case 4:return Is(),zc(n,i),n===null&&Na(i.stateNode.containerInfo),En(i),null;case 10:return pc(i.type._context),En(i),null;case 17:return Bn(i.type)&&qo(),En(i),null;case 19:if(zt(Wt),g=i.memoizedState,g===null)return En(i),null;if(u=(i.flags&128)!==0,M=g.rendering,M===null)if(u)ja(g,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=al(n),M!==null){for(i.flags|=128,ja(g,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)g=o,n=u,g.flags&=14680066,M=g.alternate,M===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=M.childLanes,g.lanes=M.lanes,g.child=M.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=M.memoizedProps,g.memoizedState=M.memoizedState,g.updateQueue=M.updateQueue,g.type=M.type,n=M.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return kt(Wt,Wt.current&1|2),i.child}n=n.sibling}g.tail!==null&&J()>Bs&&(i.flags|=128,u=!0,ja(g,!1),i.lanes=4194304)}else{if(!u)if(n=al(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ja(g,!0),g.tail===null&&g.tailMode==="hidden"&&!M.alternate&&!Gt)return En(i),null}else 2*J()-g.renderingStartTime>Bs&&o!==1073741824&&(i.flags|=128,u=!0,ja(g,!1),i.lanes=4194304);g.isBackwards?(M.sibling=i.child,i.child=M):(o=g.last,o!==null?o.sibling=M:i.child=M,g.last=M)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=J(),i.sibling=null,o=Wt.current,kt(Wt,u?o&1|2:o&1),i):(En(i),null);case 22:case 23:return Qc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Yn&1073741824)!==0&&(En(i),i.subtreeFlags&6&&(i.flags|=8192)):En(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function H0(n,i){switch(lc(i),i.tag){case 1:return Bn(i.type)&&qo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Is(),zt(kn),zt(yn),Sc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return xc(i),null;case 13:if(zt(Wt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ls()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Wt),null;case 4:return Is(),null;case 10:return pc(i.type._context),null;case 22:case 23:return Qc(),null;case 24:return null;default:return null}}var ml=!1,Mn=!1,V0=typeof WeakSet=="function"?WeakSet:Set,We=null;function Os(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){$t(n,i,u)}else o.current=null}function Hc(n,i,o){try{o()}catch(u){$t(n,i,u)}}var cm=!1;function G0(n,i){if(Qu=Io,n=Vh(),Xu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var M=0,U=-1,B=-1,ie=0,Me=0,Te=n,Ee=null;t:for(;;){for(var ze;Te!==o||h!==0&&Te.nodeType!==3||(U=M+h),Te!==g||u!==0&&Te.nodeType!==3||(B=M+u),Te.nodeType===3&&(M+=Te.nodeValue.length),(ze=Te.firstChild)!==null;)Ee=Te,Te=ze;for(;;){if(Te===n)break t;if(Ee===o&&++ie===h&&(U=M),Ee===g&&++Me===u&&(B=M),(ze=Te.nextSibling)!==null)break;Te=Ee,Ee=Te.parentNode}Te=ze}o=U===-1||B===-1?null:{start:U,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(ec={focusedElem:n,selectionRange:o},Io=!1,We=i;We!==null;)if(i=We,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,We=n;else for(;We!==null;){i=We;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var qe=$e.memoizedProps,Kt=$e.memoizedState,K=i.stateNode,W=K.getSnapshotBeforeUpdate(i.elementType===i.type?qe:cr(i.type,qe),Kt);K.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){$t(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,We=n;break}We=i.return}return $e=cm,cm=!1,$e}function $a(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Hc(i,o,g)}h=h.next}while(h!==u)}}function gl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Vc(n){var i=n.ref;if(i!==null){var o=n.stateNode;n.tag,n=o,typeof i=="function"?i(n):i.current=n}}function fm(n){var i=n.alternate;i!==null&&(n.alternate=null,fm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Mr],delete i[Fa],delete i[ic],delete i[T0],delete i[R0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function dm(n){return n.tag===5||n.tag===3||n.tag===4}function hm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||dm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=$o));else if(u!==4&&(n=n.child,n!==null))for(Gc(n,i,o),n=n.sibling;n!==null;)Gc(n,i,o),n=n.sibling}function Wc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Wc(n,i,o),n=n.sibling;n!==null;)Wc(n,i,o),n=n.sibling}var mn=null,fr=!1;function Si(n,i,o){for(o=o.child;o!==null;)pm(n,i,o),o=o.sibling}function pm(n,i,o){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(ot,o)}catch{}switch(o.tag){case 5:Mn||Os(o,i);case 6:var u=mn,h=fr;mn=null,Si(n,i,o),mn=u,fr=h,mn!==null&&(fr?(n=mn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):mn.removeChild(o.stateNode));break;case 18:mn!==null&&(fr?(n=mn,o=o.stateNode,n.nodeType===8?rc(n.parentNode,o):n.nodeType===1&&rc(n,o),Ta(n)):rc(mn,o.stateNode));break;case 4:u=mn,h=fr,mn=o.stateNode.containerInfo,fr=!0,Si(n,i,o),mn=u,fr=h;break;case 0:case 11:case 14:case 15:if(!Mn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,M=g.destroy;g=g.tag,M!==void 0&&((g&2)!==0||(g&4)!==0)&&Hc(o,i,M),h=h.next}while(h!==u)}Si(n,i,o);break;case 1:if(!Mn&&(Os(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(U){$t(o,i,U)}Si(n,i,o);break;case 21:Si(n,i,o);break;case 22:o.mode&1?(Mn=(u=Mn)||o.memoizedState!==null,Si(n,i,o),Mn=u):Si(n,i,o);break;default:Si(n,i,o)}}function mm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new V0),i.forEach(function(u){var h=J0.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function dr(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var g=n,M=i,U=M;e:for(;U!==null;){switch(U.tag){case 5:mn=U.stateNode,fr=!1;break e;case 3:mn=U.stateNode.containerInfo,fr=!0;break e;case 4:mn=U.stateNode.containerInfo,fr=!0;break e}U=U.return}if(mn===null)throw Error(t(160));pm(g,M,h),mn=null,fr=!1;var B=h.alternate;B!==null&&(B.return=null),h.return=null}catch(ie){$t(h,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)gm(i,n),i=i.sibling}function gm(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(dr(i,n),Rr(n),u&4){try{$a(3,n,n.return),gl(3,n)}catch(qe){$t(n,n.return,qe)}try{$a(5,n,n.return)}catch(qe){$t(n,n.return,qe)}}break;case 1:dr(i,n),Rr(n),u&512&&o!==null&&Os(o,o.return);break;case 5:if(dr(i,n),Rr(n),u&512&&o!==null&&Os(o,o.return),n.flags&32){var h=n.stateNode;try{Pe(h,"")}catch(qe){$t(n,n.return,qe)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,M=o!==null?o.memoizedProps:g,U=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&vt(h,g),De(U,M);var ie=De(U,g);for(M=0;M<B.length;M+=2){var Me=B[M],Te=B[M+1];Me==="style"?Ue(h,Te):Me==="dangerouslySetInnerHTML"?Ye(h,Te):Me==="children"?Pe(h,Te):P(h,Me,Te,ie)}switch(U){case"input":Et(h,g);break;case"textarea":T(h,g);break;case"select":var Ee=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var ze=g.value;ze!=null?st(h,!!g.multiple,ze,!1):Ee!==!!g.multiple&&(g.defaultValue!=null?st(h,!!g.multiple,g.defaultValue,!0):st(h,!!g.multiple,g.multiple?[]:"",!1))}h[Fa]=g}catch(qe){$t(n,n.return,qe)}}break;case 6:if(dr(i,n),Rr(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(qe){$t(n,n.return,qe)}}break;case 3:if(dr(i,n),Rr(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ta(i.containerInfo)}catch(qe){$t(n,n.return,qe)}break;case 4:dr(i,n),Rr(n);break;case 13:dr(i,n),Rr(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||($c=J())),u&4&&mm(n);break;case 22:if(Me=o!==null&&o.memoizedState!==null,n.mode&1?(Mn=(ie=Mn)||Me,dr(i,n),Mn=ie):dr(i,n),Rr(n),u&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!Me&&(n.mode&1)!==0)for(We=n,Me=n.child;Me!==null;){for(Te=We=Me;We!==null;){switch(Ee=We,ze=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:$a(4,Ee,Ee.return);break;case 1:Os(Ee,Ee.return);var $e=Ee.stateNode;if(typeof $e.componentWillUnmount=="function"){u=Ee,o=Ee.return;try{i=u,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(qe){$t(u,o,qe)}}break;case 5:Os(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){xm(Te);continue}}ze!==null?(ze.return=Ee,We=ze):xm(Te)}Me=Me.sibling}e:for(Me=null,Te=n;;){if(Te.tag===5){if(Me===null){Me=Te;try{h=Te.stateNode,ie?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=Te.stateNode,B=Te.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=ye("display",M))}catch(qe){$t(n,n.return,qe)}}}else if(Te.tag===6){if(Me===null)try{Te.stateNode.nodeValue=ie?"":Te.memoizedProps}catch(qe){$t(n,n.return,qe)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;Me===Te&&(Me=null),Te=Te.return}Me===Te&&(Me=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:dr(i,n),Rr(n),u&4&&mm(n);break;case 21:break;default:dr(i,n),Rr(n)}}function Rr(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(dm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Pe(h,""),u.flags&=-33);var g=hm(n);Wc(n,g,h);break;case 3:case 4:var M=u.stateNode.containerInfo,U=hm(n);Gc(n,U,M);break;default:throw Error(t(161))}}catch(B){$t(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function W0(n,i,o){We=n,vm(n)}function vm(n,i,o){for(var u=(n.mode&1)!==0;We!==null;){var h=We,g=h.child;if(h.tag===22&&u){var M=h.memoizedState!==null||ml;if(!M){var U=h.alternate,B=U!==null&&U.memoizedState!==null||Mn;U=ml;var ie=Mn;if(ml=M,(Mn=B)&&!ie)for(We=h;We!==null;)M=We,B=M.child,M.tag===22&&M.memoizedState!==null?ym(h):B!==null?(B.return=M,We=B):ym(h);for(;g!==null;)We=g,vm(g),g=g.sibling;We=h,ml=U,Mn=ie}_m(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,We=g):_m(n)}}function _m(n){for(;We!==null;){var i=We;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||gl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Mn)if(o===null)u.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:cr(i.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&xp(i,g,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}xp(i,M,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var Me=ie.memoizedState;if(Me!==null){var Te=Me.dehydrated;Te!==null&&Ta(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||i.flags&512&&Vc(i)}catch(Ee){$t(i,i.return,Ee)}}if(i===n){We=null;break}if(o=i.sibling,o!==null){o.return=i.return,We=o;break}We=i.return}}function xm(n){for(;We!==null;){var i=We;if(i===n){We=null;break}var o=i.sibling;if(o!==null){o.return=i.return,We=o;break}We=i.return}}function ym(n){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{gl(4,i)}catch(B){$t(i,o,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(B){$t(i,h,B)}}var g=i.return;try{Vc(i)}catch(B){$t(i,g,B)}break;case 5:var M=i.return;try{Vc(i)}catch(B){$t(i,M,B)}}}catch(B){$t(i,i.return,B)}if(i===n){We=null;break}var U=i.sibling;if(U!==null){U.return=i.return,We=U;break}We=i.return}}var X0=Math.ceil,vl=C.ReactCurrentDispatcher,Xc=C.ReactCurrentOwner,tr=C.ReactCurrentBatchConfig,wt=0,fn=null,Jt=null,gn=0,Yn=0,ks=gi(0),nn=0,Ya=null,Ji=0,_l=0,jc=0,qa=null,Hn=null,$c=0,Bs=1/0,Wr=null,xl=!1,Yc=null,Ei=null,yl=!1,Mi=null,Sl=0,Ka=0,qc=null,El=-1,Ml=0;function Ln(){return(wt&6)!==0?J():El!==-1?El:El=J()}function wi(n){return(n.mode&1)===0?1:(wt&2)!==0&&gn!==0?gn&-gn:C0.transition!==null?(Ml===0&&(Ml=Ot()),Ml):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:Eh(n.type)),n)}function hr(n,i,o,u){if(50<Ka)throw Ka=0,qc=null,Error(t(185));ln(n,o,u),((wt&2)===0||n!==fn)&&(n===fn&&((wt&2)===0&&(_l|=o),nn===4&&Ti(n,gn)),Vn(n,u),o===1&&wt===0&&(i.mode&1)===0&&(Bs=J()+500,Zo&&_i()))}function Vn(n,i){var o=n.callbackNode;bn(n,i);var u=on(n,n===fn?gn:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?A0(Em.bind(null,n)):op(Em.bind(null,n)),M0(function(){(wt&6)===0&&_i()}),o=null;else{switch(Er(u)){case 1:o=Re;break;case 4:o=Ie;break;case 16:o=Ge;break;case 536870912:o=lt;break;default:o=Ge}o=Pm(o,Sm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Sm(n,i){if(El=-1,Ml=0,(wt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(zs()&&n.callbackNode!==o)return null;var u=on(n,n===fn?gn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=wl(n,u);else{i=u;var h=wt;wt|=2;var g=wm();(fn!==n||gn!==i)&&(Wr=null,Bs=J()+500,es(n,i));do try{Y0();break}catch(U){Mm(n,U)}while(!0);hc(),vl.current=g,wt=h,Jt!==null?i=0:(fn=null,gn=0,i=nn)}if(i!==0){if(i===2&&(h=Fr(n),h!==0&&(u=h,i=Kc(n,h))),i===1)throw o=Ya,es(n,0),Ti(n,u),Vn(n,J()),o;if(i===6)Ti(n,u);else{if(h=n.current.alternate,(u&30)===0&&!j0(h)&&(i=wl(n,u),i===2&&(g=Fr(n),g!==0&&(u=g,i=Kc(n,g))),i===1))throw o=Ya,es(n,0),Ti(n,u),Vn(n,J()),o;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:ts(n,Hn,Wr);break;case 3:if(Ti(n,u),(u&130023424)===u&&(i=$c+500-J(),10<i)){if(on(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Ln(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=nc(ts.bind(null,n,Hn,Wr),i);break}ts(n,Hn,Wr);break;case 4:if(Ti(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var M=31-mt(u);g=1<<M,M=i[M],M>h&&(h=M),u&=~g}if(u=h,u=J()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*X0(u/1960))-u,10<u){n.timeoutHandle=nc(ts.bind(null,n,Hn,Wr),u);break}ts(n,Hn,Wr);break;case 5:ts(n,Hn,Wr);break;default:throw Error(t(329))}}}return Vn(n,J()),n.callbackNode===o?Sm.bind(null,n):null}function Kc(n,i){var o=qa;return n.current.memoizedState.isDehydrated&&(es(n,i).flags|=256),n=wl(n,i),n!==2&&(i=Hn,Hn=o,i!==null&&Zc(i)),n}function Zc(n){Hn===null?Hn=n:Hn.push.apply(Hn,n)}function j0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!lr(g(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ti(n,i){for(i&=~jc,i&=~_l,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-mt(i),u=1<<o;n[o]=-1,i&=~u}}function Em(n){if((wt&6)!==0)throw Error(t(327));zs();var i=on(n,0);if((i&1)===0)return Vn(n,J()),null;var o=wl(n,i);if(n.tag!==0&&o===2){var u=Fr(n);u!==0&&(i=u,o=Kc(n,u))}if(o===1)throw o=Ya,es(n,0),Ti(n,i),Vn(n,J()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ts(n,Hn,Wr),Vn(n,J()),null}function Jc(n,i){var o=wt;wt|=1;try{return n(i)}finally{wt=o,wt===0&&(Bs=J()+500,Zo&&_i())}}function Qi(n){Mi!==null&&Mi.tag===0&&(wt&6)===0&&zs();var i=wt;wt|=1;var o=tr.transition,u=Mt;try{if(tr.transition=null,Mt=1,n)return n()}finally{Mt=u,tr.transition=o,wt=i,(wt&6)===0&&_i()}}function Qc(){Yn=ks.current,zt(ks)}function es(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,E0(o)),Jt!==null)for(o=Jt.return;o!==null;){var u=o;switch(lc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&qo();break;case 3:Is(),zt(kn),zt(yn),Sc();break;case 5:xc(u);break;case 4:Is();break;case 13:zt(Wt);break;case 19:zt(Wt);break;case 10:pc(u.type._context);break;case 22:case 23:Qc()}o=o.return}if(fn=n,Jt=n=Ri(n.current,null),gn=Yn=i,nn=0,Ya=null,jc=_l=Ji=0,Hn=qa=null,qi!==null){for(i=0;i<qi.length;i++)if(o=qi[i],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,g=o.pending;if(g!==null){var M=g.next;g.next=h,u.next=M}o.pending=u}qi=null}return n}function Mm(n,i){do{var o=Jt;try{if(hc(),ol.current=fl,ll){for(var u=Xt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}ll=!1}if(Zi=0,cn=tn=Xt=null,Va=!1,Ga=0,Xc.current=null,o===null||o.return===null){nn=1,Ya=i,Jt=null;break}e:{var g=n,M=o.return,U=o,B=i;if(i=gn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ie=B,Me=U,Te=Me.tag;if((Me.mode&1)===0&&(Te===0||Te===11||Te===15)){var Ee=Me.alternate;Ee?(Me.updateQueue=Ee.updateQueue,Me.memoizedState=Ee.memoizedState,Me.lanes=Ee.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var ze=Yp(M);if(ze!==null){ze.flags&=-257,qp(ze,M,U,g,i),ze.mode&1&&$p(g,ie,i),i=ze,B=ie;var $e=i.updateQueue;if($e===null){var qe=new Set;qe.add(B),i.updateQueue=qe}else $e.add(B);break e}else{if((i&1)===0){$p(g,ie,i),ef();break e}B=Error(t(426))}}else if(Gt&&U.mode&1){var Kt=Yp(M);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),qp(Kt,M,U,g,i),fc(Fs(B,U));break e}}g=B=Fs(B,U),nn!==4&&(nn=2),qa===null?qa=[g]:qa.push(g),g=M;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var K=Xp(g,B,i);_p(g,K);break e;case 1:U=B;var W=g.type,ee=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Ei===null||!Ei.has(ee)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ae=jp(g,U,i);_p(g,Ae);break e}}g=g.return}while(g!==null)}Rm(o)}catch(Je){i=Je,Jt===o&&o!==null&&(Jt=o=o.return);continue}break}while(!0)}function wm(){var n=vl.current;return vl.current=fl,n===null?fl:n}function ef(){(nn===0||nn===3||nn===2)&&(nn=4),fn===null||(Ji&268435455)===0&&(_l&268435455)===0||Ti(fn,gn)}function wl(n,i){var o=wt;wt|=2;var u=wm();(fn!==n||gn!==i)&&(Wr=null,es(n,i));do try{$0();break}catch(h){Mm(n,h)}while(!0);if(hc(),wt=o,vl.current=u,Jt!==null)throw Error(t(261));return fn=null,gn=0,nn}function $0(){for(;Jt!==null;)Tm(Jt)}function Y0(){for(;Jt!==null&&!Y();)Tm(Jt)}function Tm(n){var i=bm(n.alternate,n,Yn);n.memoizedProps=n.pendingProps,i===null?Rm(n):Jt=i,Xc.current=null}function Rm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=z0(o,i,Yn),o!==null){Jt=o;return}}else{if(o=H0(o,i),o!==null){o.flags&=32767,Jt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);nn===0&&(nn=5)}function ts(n,i,o){var u=Mt,h=tr.transition;try{tr.transition=null,Mt=1,q0(n,i,o,u)}finally{tr.transition=h,Mt=u}return null}function q0(n,i,o,u){do zs();while(Mi!==null);if((wt&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(pn(n,g),n===fn&&(Jt=fn=null,gn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||yl||(yl=!0,Pm(Ge,function(){return zs(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=tr.transition,tr.transition=null;var M=Mt;Mt=1;var U=wt;wt|=4,Xc.current=null,G0(n,o),gm(o,n),m0(ec),Io=!!Qu,ec=Qu=null,n.current=o,W0(o),ae(),wt=U,Mt=M,tr.transition=g}else n.current=o;if(yl&&(yl=!1,Mi=n,Sl=h),g=n.pendingLanes,g===0&&(Ei=null),_t(o.stateNode),Vn(n,J()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)h=i[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(xl)throw xl=!1,n=Yc,Yc=null,n;return(Sl&1)!==0&&n.tag!==0&&zs(),g=n.pendingLanes,(g&1)!==0?n===qc?Ka++:(Ka=0,qc=n):Ka=0,_i(),null}function zs(){if(Mi!==null){var n=Er(Sl),i=tr.transition,o=Mt;try{if(tr.transition=null,Mt=16>n?16:n,Mi===null)var u=!1;else{if(n=Mi,Mi=null,Sl=0,(wt&6)!==0)throw Error(t(331));var h=wt;for(wt|=4,We=n.current;We!==null;){var g=We,M=g.child;if((We.flags&16)!==0){var U=g.deletions;if(U!==null){for(var B=0;B<U.length;B++){var ie=U[B];for(We=ie;We!==null;){var Me=We;switch(Me.tag){case 0:case 11:case 15:$a(8,Me,g)}var Te=Me.child;if(Te!==null)Te.return=Me,We=Te;else for(;We!==null;){Me=We;var Ee=Me.sibling,ze=Me.return;if(fm(Me),Me===ie){We=null;break}if(Ee!==null){Ee.return=ze,We=Ee;break}We=ze}}}var $e=g.alternate;if($e!==null){var qe=$e.child;if(qe!==null){$e.child=null;do{var Kt=qe.sibling;qe.sibling=null,qe=Kt}while(qe!==null)}}We=g}}if((g.subtreeFlags&2064)!==0&&M!==null)M.return=g,We=M;else e:for(;We!==null;){if(g=We,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:$a(9,g,g.return)}var K=g.sibling;if(K!==null){K.return=g.return,We=K;break e}We=g.return}}var W=n.current;for(We=W;We!==null;){M=We;var ee=M.child;if((M.subtreeFlags&2064)!==0&&ee!==null)ee.return=M,We=ee;else e:for(M=W;We!==null;){if(U=We,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:gl(9,U)}}catch(Je){$t(U,U.return,Je)}if(U===M){We=null;break e}var Ae=U.sibling;if(Ae!==null){Ae.return=U.return,We=Ae;break e}We=U.return}}if(wt=h,_i(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(ot,n)}catch{}u=!0}return u}finally{Mt=o,tr.transition=i}}return!1}function Am(n,i,o){i=Fs(o,i),i=Xp(n,i,1),n=yi(n,i,1),i=Ln(),n!==null&&(ln(n,1,i),Vn(n,i))}function $t(n,i,o){if(n.tag===3)Am(n,n,o);else for(;i!==null;){if(i.tag===3){Am(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ei===null||!Ei.has(u))){n=Fs(o,n),n=jp(i,n,1),i=yi(i,n,1),n=Ln(),i!==null&&(ln(i,1,n),Vn(i,n));break}}i=i.return}}function K0(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Ln(),n.pingedLanes|=n.suspendedLanes&o,fn===n&&(gn&o)===o&&(nn===4||nn===3&&(gn&130023424)===gn&&500>J()-$c?es(n,0):jc|=o),Vn(n,i)}function Cm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ut,Ut<<=1,(Ut&130023424)===0&&(Ut=4194304)));var o=Ln();n=Hr(n,i),n!==null&&(ln(n,i,o),Vn(n,o))}function Z0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Cm(n,o)}function J0(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Cm(n,o)}var bm;bm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||kn.current)zn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return zn=!1,B0(n,i,o);zn=(n.flags&131072)!==0}else zn=!1,Gt&&(i.flags&1048576)!==0&&lp(i,Qo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;pl(n,i),n=i.pendingProps;var h=Cs(i,yn.current);Ns(i,o),h=wc(null,i,u,n,h,o);var g=Tc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Bn(u)?(g=!0,Ko(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,vc(i),h.updater=dl,i.stateNode=h,h._reactInternals=i,Lc(i,u,n,o),i=Ic(null,i,u,!0,g,o)):(i.tag=0,Gt&&g&&oc(i),Pn(null,i,h,o),i=i.child),i;case 16:u=i.elementType;e:{switch(pl(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=ex(u),n=cr(u,n),h){case 0:i=Nc(null,i,u,n,o);break e;case 1:i=tm(null,i,u,n,o);break e;case 11:i=Kp(null,i,u,n,o);break e;case 14:i=Zp(null,i,u,cr(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:cr(u,h),Nc(n,i,u,h,o);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:cr(u,h),tm(n,i,u,h,o);case 3:e:{if(nm(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,h=g.element,vp(n,i),sl(i,u,null,o);var M=i.memoizedState;if(u=M.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Fs(Error(t(423)),i),i=rm(n,i,u,o,h);break e}else if(u!==h){h=Fs(Error(t(424)),i),i=rm(n,i,u,o,h);break e}else for($n=mi(i.stateNode.containerInfo.firstChild),jn=i,Gt=!0,ur=null,o=mp(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ls(),u===h){i=Gr(n,i,o);break e}Pn(n,i,u,o)}i=i.child}return i;case 5:return yp(i),n===null&&cc(i),u=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,M=h.children,tc(u,h)?M=null:g!==null&&tc(u,g)&&(i.flags|=32),em(n,i),Pn(n,i,M,o),i.child;case 6:return n===null&&cc(i),null;case 13:return im(n,i,o);case 4:return _c(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ds(i,null,u,o):Pn(n,i,u,o),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:cr(u,h),Kp(n,i,u,h,o);case 7:return Pn(n,i,i.pendingProps,o),i.child;case 8:return Pn(n,i,i.pendingProps.children,o),i.child;case 12:return Pn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,g=i.memoizedProps,M=h.value,kt(nl,u._currentValue),u._currentValue=M,g!==null)if(lr(g.value,M)){if(g.children===h.children&&!kn.current){i=Gr(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var U=g.dependencies;if(U!==null){M=g.child;for(var B=U.firstContext;B!==null;){if(B.context===u){if(g.tag===1){B=Vr(-1,o&-o),B.tag=2;var ie=g.updateQueue;if(ie!==null){ie=ie.shared;var Me=ie.pending;Me===null?B.next=B:(B.next=Me.next,Me.next=B),ie.pending=B}}g.lanes|=o,B=g.alternate,B!==null&&(B.lanes|=o),mc(g.return,o,i),U.lanes|=o;break}B=B.next}}else if(g.tag===10)M=g.type===i.type?null:g.child;else if(g.tag===18){if(M=g.return,M===null)throw Error(t(341));M.lanes|=o,U=M.alternate,U!==null&&(U.lanes|=o),mc(M,o,i),M=g.sibling}else M=g.child;if(M!==null)M.return=g;else for(M=g;M!==null;){if(M===i){M=null;break}if(g=M.sibling,g!==null){g.return=M.return,M=g;break}M=M.return}g=M}Pn(n,i,h.children,o),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,Ns(i,o),h=Qn(h),u=u(h),i.flags|=1,Pn(n,i,u,o),i.child;case 14:return u=i.type,h=cr(u,i.pendingProps),h=cr(u.type,h),Zp(n,i,u,h,o);case 15:return Jp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:cr(u,h),pl(n,i),i.tag=1,Bn(u)?(n=!0,Ko(i)):n=!1,Ns(i,o),Gp(i,u,h),Lc(i,u,h,o),Ic(null,i,u,!0,n,o);case 19:return am(n,i,o);case 22:return Qp(n,i,o)}throw Error(t(156,i.tag))};function Pm(n,i){return Do(n,i)}function Q0(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nr(n,i,o,u){return new Q0(n,i,o,u)}function tf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ex(n){if(typeof n=="function")return tf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===se)return 11;if(n===pe)return 14}return 2}function Ri(n,i){var o=n.alternate;return o===null?(o=nr(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Tl(n,i,o,u,h,g){var M=2;if(u=n,typeof n=="function")tf(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case F:return ns(o.children,h,g,i);case X:M=8,h|=8;break;case b:return n=nr(12,o,i,h|2),n.elementType=b,n.lanes=g,n;case Z:return n=nr(13,o,i,h),n.elementType=Z,n.lanes=g,n;case ue:return n=nr(19,o,i,h),n.elementType=ue,n.lanes=g,n;case ve:return Rl(o,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:M=10;break e;case H:M=9;break e;case se:M=11;break e;case pe:M=14;break e;case ce:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=nr(M,o,i,h),i.elementType=n,i.type=u,i.lanes=g,i}function ns(n,i,o,u){return n=nr(7,n,u,i),n.lanes=o,n}function Rl(n,i,o,u){return n=nr(22,n,u,i),n.elementType=ve,n.lanes=o,n.stateNode={isHidden:!1},n}function nf(n,i,o){return n=nr(6,n,null,i),n.lanes=o,n}function rf(n,i,o){return i=nr(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function tx(n,i,o,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function sf(n,i,o,u,h,g,M,U,B){return n=new tx(n,i,o,U,B),i===1?(i=1,g===!0&&(i|=8)):i=0,g=nr(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},vc(g),n}function nx(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Lm(n){if(!n)return vi;n=n._reactInternals;e:{if(Sr(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Bn(o))return sp(n,o,i)}return i}function Dm(n,i,o,u,h,g,M,U,B){return n=sf(o,u,!0,n,h,g,M,U,B),n.context=Lm(null),o=n.current,u=Ln(),h=wi(o),g=Vr(u,h),g.callback=i??null,yi(o,g,h),n.current.lanes=h,ln(n,h,u),Vn(n,u),n}function Al(n,i,o,u){var h=i.current,g=Ln(),M=wi(h);return o=Lm(o),i.context===null?i.context=o:i.pendingContext=o,i=Vr(g,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=yi(h,i,M),n!==null&&(hr(n,h,M,g),il(n,h,M)),M}function Cl(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function Um(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function af(n,i){Um(n,i),(n=n.alternate)&&Um(n,i)}function rx(){return null}var Nm=typeof reportError=="function"?reportError:function(n){console.error(n)};function of(n){this._internalRoot=n}bl.prototype.render=of.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Al(n,i,null,null)},bl.prototype.unmount=of.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Qi(function(){Al(null,n,null,null)}),i[Or]=null}};function bl(n){this._internalRoot=n}bl.prototype.unstable_scheduleHydration=function(n){if(n){var i=vh();n={blockedOn:null,target:n,priority:i};for(var o=0;o<di.length&&i!==0&&i<di[o].priority;o++);di.splice(o,0,n),o===0&&yh(n)}};function lf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Im(){}function ix(n,i,o,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var ie=Cl(M);g.call(ie)}}var M=Dm(i,u,n,0,null,!1,!1,"",Im);return n._reactRootContainer=M,n[Or]=M.current,Na(n.nodeType===8?n.parentNode:n),Qi(),M}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var U=u;u=function(){var ie=Cl(B);U.call(ie)}}var B=sf(n,0,!1,null,null,!1,!1,"",Im);return n._reactRootContainer=B,n[Or]=B.current,Na(n.nodeType===8?n.parentNode:n),Qi(function(){Al(i,B,o,u)}),B}function Ll(n,i,o,u,h){var g=o._reactRootContainer;if(g){var M=g;if(typeof h=="function"){var U=h;h=function(){var B=Cl(M);U.call(B)}}Al(i,M,n,h)}else M=ix(o,i,n,h,u);return Cl(M)}mh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=xt(i.pendingLanes);o!==0&&(un(i,o|1),Vn(i,J()),(wt&6)===0&&(Bs=J()+500,_i()))}break;case 13:Qi(function(){var u=Hr(n,1);if(u!==null){var h=Ln();hr(u,n,1,h)}}),af(n,1)}},Du=function(n){if(n.tag===13){var i=Hr(n,134217728);if(i!==null){var o=Ln();hr(i,n,134217728,o)}af(n,134217728)}},gh=function(n){if(n.tag===13){var i=wi(n),o=Hr(n,i);if(o!==null){var u=Ln();hr(o,n,i,u)}af(n,i)}},vh=function(){return Mt},_h=function(n,i){var o=Mt;try{return Mt=n,i()}finally{Mt=o}},Ne=function(n,i,o){switch(i){case"input":if(Et(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var h=Yo(u);if(!h)throw Error(t(90));ft(u),Et(u,h)}}}break;case"textarea":T(n,o);break;case"select":i=o.value,i!=null&&st(n,!!o.multiple,i,!1)}},ut=Jc,Ct=Qi;var sx={usingClientEntryPoint:!1,Events:[Oa,Rs,Yo,_e,He,Jc]},Za={findFiberByHostInstance:Xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ax={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Po(n),n===null?null:n.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{ot=Dl.inject(ax),je=Dl}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx,Gn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lf(i))throw Error(t(200));return nx(n,i,null,o)},Gn.createRoot=function(n,i){if(!lf(n))throw Error(t(299));var o=!1,u="",h=Nm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=sf(n,1,!1,null,null,o,!1,u,h),n[Or]=i.current,Na(n.nodeType===8?n.parentNode:n),new of(i)},Gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Po(i),n=n===null?null:n.stateNode,n},Gn.flushSync=function(n){return Qi(n)},Gn.hydrate=function(n,i,o){if(!Pl(i))throw Error(t(200));return Ll(null,n,i,!0,o)},Gn.hydrateRoot=function(n,i,o){if(!lf(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,g="",M=Nm;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Dm(i,null,n,1,o??null,h,!1,g,M),n[Or]=i.current,Na(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new bl(i)},Gn.render=function(n,i,o){if(!Pl(i))throw Error(t(200));return Ll(null,n,i,!1,o)},Gn.unmountComponentAtNode=function(n){if(!Pl(n))throw Error(t(40));return n._reactRootContainer?(Qi(function(){Ll(null,null,n,!1,function(){n._reactRootContainer=null,n[Or]=null})}),!0):!1},Gn.unstable_batchedUpdates=Jc,Gn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!Pl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ll(n,i,o,!1,u)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var Gm;function px(){if(Gm)return ff.exports;Gm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ff.exports=hx(),ff.exports}var Wm;function mx(){if(Wm)return Ul;Wm=1;var r=px();return Ul.createRoot=r.createRoot,Ul.hydrateRoot=r.hydrateRoot,Ul}var gx=mx();const vx=pv(gx);var Wd=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,gv=/^[\\/]{2}/;function _x(r,e){return e+r.replace(/\\/g,"/")}var Xm="popstate";function jm(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function xx(r={}){function e(s,a){let l=a.state?.masked,{pathname:c,search:f,hash:d}=l||s.location;return Jf("",{pathname:c,search:f,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default",l?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function t(s,a){return typeof a=="string"?a:uo(a)}return Sx(e,t,null,r)}function jt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Nr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yx(){return Math.random().toString(36).substring(2,10)}function $m(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Jf(r,e,t=null,s,a){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?pa(e):e,state:t,key:e&&e.key||s||yx(),mask:a}}function uo({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function pa(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function Sx(r,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,f="POP",d=null,p=m();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function m(){return(c.state||{idx:null}).idx}function v(){f="POP";let y=m(),x=y==null?null:y-p;p=y,d&&d({action:f,location:w.location,delta:x})}function _(y,x){f="PUSH";let L=jm(y)?y:Jf(w.location,y,x);p=m()+1;let P=$m(L,p),C=w.createHref(L.mask||L);try{c.pushState(P,"",C)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(C)}l&&d&&d({action:f,location:w.location,delta:1})}function S(y,x){f="REPLACE";let L=jm(y)?y:Jf(w.location,y,x);p=m();let P=$m(L,p),C=w.createHref(L.mask||L);c.replaceState(P,"",C),l&&d&&d({action:f,location:w.location,delta:0})}function E(y){return Ex(a,y)}let w={get action(){return f},get location(){return r(a,c)},listen(y){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(Xm,v),d=y,()=>{a.removeEventListener(Xm,v),d=null}},createHref(y){return e(a,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:S,go(y){return c.go(y)}};return w}function Ex(r,e,t=!1){let s="http://localhost";r&&(s=r.location.origin!=="null"?r.location.origin:r.location.href),jt(s,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:uo(e);return a=a.replace(/ $/,"%20"),!t&&gv.test(a)&&(a=s+a),new URL(a,s)}function vv(r,e,t="/"){return Mx(r,e,t,!1)}function Mx(r,e,t,s,a){let l=typeof e=="string"?pa(e):e,c=ii(l.pathname||"/",t);if(c==null)return null;let f=wx(r),d=null,p=Ix(c);for(let m=0;d==null&&m<f.length;++m)d=Nx(f[m],p,s);return d}function wx(r){let e=_v(r);return Tx(e),e}function _v(r,e=[],t=[],s="",a=!1){let l=(c,f,d=a,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(s)&&d)return;jt(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length)}let v=xr([s,m.relativePath]),_=t.concat(m);c.children&&c.children.length>0&&(jt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),_v(c.children,e,_,v,d)),!(c.path==null&&!c.index)&&e.push({path:v,score:Dx(v,c.index),routesMeta:_.map((S,E)=>{let[w,y]=Sv(S.relativePath,S.caseSensitive,E===_.length-1);return{...S,matcher:w,compiledParams:y}})})};return r.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let d of xv(c.path))l(c,f,!0,d)}),e}function xv(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=xv(s.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),a&&f.push(...c),f.map(d=>r.startsWith("/")&&d===""?"/":d)}function Tx(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Ux(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Rx=/^:[\w-]+$/,Ax=3,Cx=2,bx=1,Px=10,Lx=-2,Ym=r=>r==="*";function Dx(r,e){let t=r.split("/"),s=t.length;return t.some(Ym)&&(s+=Lx),e&&(s+=Cx),t.filter(a=>!Ym(a)).reduce((a,l)=>a+(Rx.test(l)?Ax:l===""?bx:Px),s)}function Ux(r,e){return r.length===e.length&&r.slice(0,-1).every((s,a)=>s===e[a])?r[r.length-1]-e[e.length-1]:0}function Nx(r,e,t=!1){let{routesMeta:s}=r,a={},l="/",c=[];for(let f=0;f<s.length;++f){let d=s[f],p=f===s.length-1,m=l==="/"?e:e.slice(l.length)||"/",v={path:d.relativePath,caseSensitive:d.caseSensitive,end:p},_=d.matcher&&d.compiledParams?yv(v,m,d.matcher,d.compiledParams):vu(v,m),S=d.route;if(!_&&p&&t&&!s[s.length-1].route.index&&(_=vu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!_)return null;Object.assign(a,_.params),c.push({params:a,pathname:xr([l,_.pathname]),pathnameBase:kx(xr([l,_.pathnameBase])),route:S}),_.pathnameBase!=="/"&&(l=xr([l,_.pathnameBase]))}return c}function vu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=Sv(r.path,r.caseSensitive,r.end);return yv(r,e,t,s)}function yv(r,e,t,s){let a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:s.reduce((p,{paramName:m,isOptional:v},_)=>{if(m==="*"){let E=f[_]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[_];return v&&!S?p[m]=void 0:p[m]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function Sv(r,e=!1,t=!0){Nr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d,p,m)=>{if(s.push({paramName:f,isOptional:d!=null}),d){let v=m.charAt(p+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function Ix(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Nr(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function ii(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function Fx(r,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof r=="string"?pa(r):r,l;return t?(t=Mv(t),t.startsWith("/")?l=qm(t.substring(1),"/"):l=qm(t,e)):l=e,{pathname:l,search:Bx(s),hash:zx(a)}}function qm(r,e){let t=_u(e).split("/");return r.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function pf(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ox(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ev(r){let e=Ox(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Xd(r,e,t,s=!1){let a;typeof r=="string"?a=pa(r):(a={...r},jt(!a.pathname||!a.pathname.includes("?"),pf("?","pathname","search",a)),jt(!a.pathname||!a.pathname.includes("#"),pf("#","pathname","hash",a)),jt(!a.search||!a.search.includes("#"),pf("#","search","hash",a)));let l=r===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let v=e.length-1;if(!s&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),v-=1;a.pathname=_.join("/")}f=v>=0?e[v]:"/"}let d=Fx(a,f),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(p||m)&&(d.pathname+="/"),d}var Mv=r=>r.replace(/[\\/]{2,}/g,"/"),xr=r=>Mv(r.join("/")),_u=r=>r.replace(/\/+$/,""),kx=r=>_u(r).replace(/^\/*/,"/"),Bx=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,zx=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Hx=class{constructor(r,e,t,s=!1){this.status=r,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Vx(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Gx(r){let e=r.map(t=>t.route.path).filter(Boolean);return xr(e)||"/"}var wv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Tv(r,e){let t=r;if(typeof t!="string"||!Wd.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,a=!1;if(wv)try{let l=new URL(window.location.href),c=gv.test(t)?new URL(_x(t,l.protocol)):new URL(t),f=ii(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:a=!0}catch{Nr(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Rv=["POST","PUT","PATCH","DELETE"];new Set(Rv);var Wx=["GET",...Rv];new Set(Wx);var Xx=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function jx(r){try{return Xx.includes(new URL(r).protocol)}catch{return!1}}var ma=G.createContext(null);ma.displayName="DataRouter";var Mu=G.createContext(null);Mu.displayName="DataRouterState";var Av=G.createContext(!1);function $x(){return G.useContext(Av)}var Cv=G.createContext({isTransitioning:!1});Cv.displayName="ViewTransition";var Yx=G.createContext(new Map);Yx.displayName="Fetchers";var qx=G.createContext(null);qx.displayName="Await";var or=G.createContext(null);or.displayName="Navigation";var xo=G.createContext(null);xo.displayName="Location";var si=G.createContext({outlet:null,matches:[],isDataRoute:!1});si.displayName="Route";var jd=G.createContext(null);jd.displayName="RouteError";var bv="REACT_ROUTER_ERROR",Kx="REDIRECT",Zx="ROUTE_ERROR_RESPONSE";function Jx(r){if(r.startsWith(`${bv}:${Kx}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Qx(r){if(r.startsWith(`${bv}:${Zx}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Hx(e.status,e.statusText,e.data)}catch{}}function ey(r,{relative:e}={}){jt(yo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=G.useContext(or),{hash:a,pathname:l,search:c}=So(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:xr([t,l])),s.createHref({pathname:f,search:c,hash:a})}function yo(){return G.useContext(xo)!=null}function ai(){return jt(yo(),"useLocation() may be used only in the context of a <Router> component."),G.useContext(xo).location}var Pv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lv(r){G.useContext(or).static||G.useLayoutEffect(r)}function ty(){let{isDataRoute:r}=G.useContext(si);return r?py():ny()}function ny(){jt(yo(),"useNavigate() may be used only in the context of a <Router> component.");let r=G.useContext(ma),{basename:e,navigator:t}=G.useContext(or),{matches:s}=G.useContext(si),{pathname:a}=ai(),l=JSON.stringify(Ev(s)),c=G.useRef(!1);return Lv(()=>{c.current=!0}),G.useCallback((d,p={})=>{if(Nr(c.current,Pv),!c.current)return;if(typeof d=="number"){t.go(d);return}let m=Xd(d,JSON.parse(l),a,p.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:xr([e,m.pathname])),(p.replace?t.replace:t.push)(m,p.state,p)},[e,t,l,a,r])}G.createContext(null);function So(r,{relative:e}={}){let{matches:t}=G.useContext(si),{pathname:s}=ai(),a=JSON.stringify(Ev(t));return G.useMemo(()=>Xd(r,JSON.parse(a),s,e==="path"),[r,a,s,e])}function ry(r,e){return Dv(r,e)}function Dv(r,e,t){jt(yo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=G.useContext(or),{matches:a}=G.useContext(si),l=a[a.length-1],c=l?l.params:{},f=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let y=p&&p.path||"";Nv(f,!p||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let m=ai(),v;if(e){let y=typeof e=="string"?pa(e):e;jt(d==="/"||y.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${y.pathname}" was given in the \`location\` prop.`),v=y}else v=m;let _=v.pathname||"/",S=_;if(d!=="/"){let y=d.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(y.length).join("/")}let E=t&&t.state.matches.length?t.state.matches.map(y=>Object.assign(y,{route:t.manifest[y.route.id]||y.route})):vv(r,{pathname:S});Nr(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Nr(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=ly(E&&E.map(y=>Object.assign({},y,{params:Object.assign({},c,y.params),pathname:xr([d,s.encodeLocation?s.encodeLocation(y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:xr([d,s.encodeLocation?s.encodeLocation(y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),a,t);return e&&w?G.createElement(xo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},w):w}function iy(){let r=hy(),e=Vx(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=G.createElement(G.Fragment,null,G.createElement("p",null,"💿 Hey developer 👋"),G.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",G.createElement("code",{style:l},"ErrorBoundary")," or"," ",G.createElement("code",{style:l},"errorElement")," prop on your route.")),G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},e),t?G.createElement("pre",{style:a},t):null,c)}var sy=G.createElement(iy,null),Uv=class extends G.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=Qx(r.digest);t&&(r=t)}let e=r!==void 0?G.createElement(si.Provider,{value:this.props.routeContext},G.createElement(jd.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?G.createElement(ay,{error:r},e):e}};Uv.contextType=Av;var mf=new WeakMap;function ay({children:r,error:e}){let{basename:t}=G.useContext(or);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=Jx(e.digest);if(s){let a=mf.get(e);if(a)throw a;let l=Tv(s.location,t),c=l.absoluteURL||l.to;if(jx(c))throw new Error("Invalid redirect location");if(wv&&!mf.get(e))if(l.isExternal||s.reloadDocument)window.location.href=c;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw mf.set(e,f),f}return G.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return r}function oy({routeContext:r,match:e,children:t}){let s=G.useContext(ma);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),G.createElement(si.Provider,{value:r},t)}function ly(r,e=[],t){let s=t?.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let a=r,l=s?.errors;if(l!=null){let m=a.findIndex(v=>v.route.id&&l?.[v.route.id]!==void 0);jt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,f=-1;if(t&&s){c=s.renderFallback;for(let m=0;m<a.length;m++){let v=a[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=m),v.route.id){let{loaderData:_,errors:S}=s,E=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(c=!0),f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}}let d=t?.onError,p=s&&d?(m,v)=>{d(m,{location:s.location,params:s.matches?.[0]?.params??{},pattern:Gx(s.matches),errorInfo:v})}:void 0;return a.reduceRight((m,v,_)=>{let S,E=!1,w=null,y=null;s&&(S=l&&v.route.id?l[v.route.id]:void 0,w=v.route.errorElement||sy,c&&(f<0&&_===0?(Nv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):f===_&&(E=!0,y=v.route.hydrateFallbackElement||null)));let x=e.concat(a.slice(0,_+1)),L=()=>{let P;return S?P=w:E?P=y:v.route.Component?P=G.createElement(v.route.Component,null):v.route.element?P=v.route.element:P=m,G.createElement(oy,{match:v,routeContext:{outlet:m,matches:x,isDataRoute:s!=null},children:P})};return s&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?G.createElement(Uv,{location:s.location,revalidation:s.revalidation,component:w,error:S,children:L(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:p}):L()},null)}function $d(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function uy(r){let e=G.useContext(ma);return jt(e,$d(r)),e}function cy(r){let e=G.useContext(Mu);return jt(e,$d(r)),e}function fy(r){let e=G.useContext(si);return jt(e,$d(r)),e}function Yd(r){let e=fy(r),t=e.matches[e.matches.length-1];return jt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function dy(){return Yd("useRouteId")}function hy(){let r=G.useContext(jd),e=cy("useRouteError"),t=Yd("useRouteError");return r!==void 0?r:e.errors?.[t]}function py(){let{router:r}=uy("useNavigate"),e=Yd("useNavigate"),t=G.useRef(!1);return Lv(()=>{t.current=!0}),G.useCallback(async(a,l={})=>{Nr(t.current,Pv),t.current&&(typeof a=="number"?await r.navigate(a):await r.navigate(a,{fromRouteId:e,...l}))},[r,e])}var Km={};function Nv(r,e,t){!e&&!Km[r]&&(Km[r]=!0,Nr(!1,t))}G.memo(my);function my({routes:r,manifest:e,future:t,state:s,isStatic:a,onError:l}){return Dv(r,void 0,{manifest:e,state:s,isStatic:a,onError:l})}function Qf(r){jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function gy({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1,useTransitions:c}){jt(!yo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),d=G.useMemo(()=>({basename:f,navigator:a,static:l,useTransitions:c,future:{}}),[f,a,l,c]);typeof t=="string"&&(t=pa(t));let{pathname:p="/",search:m="",hash:v="",state:_=null,key:S="default",mask:E}=t,w=G.useMemo(()=>{let y=ii(p,f);return y==null?null:{location:{pathname:y,search:m,hash:v,state:_,key:S,mask:E},navigationType:s}},[f,p,m,v,_,S,s,E]);return Nr(w!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:G.createElement(or.Provider,{value:d},G.createElement(xo.Provider,{children:e,value:w}))}function vy({children:r,location:e}){return ry(ed(r),e)}function ed(r,e=[]){let t=[];return G.Children.forEach(r,(s,a)=>{if(!G.isValidElement(s))return;let l=[...e,a];if(s.type===G.Fragment){t.push.apply(t,ed(s.props.children,l));return}jt(s.type===Qf,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),jt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=ed(s.props.children,l)),t.push(c)}),t}var ou="get",lu="application/x-www-form-urlencoded";function wu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function _y(r){return wu(r)&&r.tagName.toLowerCase()==="button"}function xy(r){return wu(r)&&r.tagName.toLowerCase()==="form"}function yy(r){return wu(r)&&r.tagName.toLowerCase()==="input"}function Sy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Ey(r,e){return r.button===0&&(!e||e==="_self")&&!Sy(r)}var Nl=null;function My(){if(Nl===null)try{new FormData(document.createElement("form"),0),Nl=!1}catch{Nl=!0}return Nl}var wy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gf(r){return r!=null&&!wy.has(r)?(Nr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lu}"`),null):r}function Ty(r,e){let t,s,a,l,c;if(xy(r)){let f=r.getAttribute("action");s=f?ii(f,e):null,t=r.getAttribute("method")||ou,a=gf(r.getAttribute("enctype"))||lu,l=new FormData(r)}else if(_y(r)||yy(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=r.getAttribute("formaction")||f.getAttribute("action");if(s=d?ii(d,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||ou,a=gf(r.getAttribute("formenctype"))||gf(f.getAttribute("enctype"))||lu,l=new FormData(f,r),!My()){let{name:p,type:m,value:v}=r;if(m==="image"){let _=p?`${p}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else p&&l.append(p,v)}}else{if(wu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=ou,s=null,a=lu,c=r}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function qd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Iv(r,e,t,s){let a=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${s}`:a.pathname=`${a.pathname}.${s}`:a.pathname==="/"?a.pathname=`_root.${s}`:e&&ii(a.pathname,e)==="/"?a.pathname=`${_u(e)}/_root.${s}`:a.pathname=`${_u(a.pathname)}.${s}`,a}async function Ry(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ay(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Cy(r,e,t){let s=await Promise.all(r.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await Ry(l,t);return c.links?c.links():[]}return[]}));return Dy(s.flat(1).filter(Ay).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Zm(r,e,t,s,a,l){let c=(d,p)=>t[p]?d.route.id!==t[p].route.id:!0,f=(d,p)=>t[p].pathname!==d.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==d.params["*"];return l==="assets"?e.filter((d,p)=>c(d,p)||f(d,p)):l==="data"?e.filter((d,p)=>{let m=s.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(c(d,p)||f(d,p))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function by(r,e,{includeHydrateFallback:t}={}){return Py(r.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function Py(r){return[...new Set(r)]}function Ly(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function Dy(r,e){let t=new Set;return new Set(e),r.reduce((s,a)=>{let l=JSON.stringify(Ly(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}function Kd(){let r=G.useContext(ma);return qd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Uy(){let r=G.useContext(Mu);return qd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Zd=G.createContext(void 0);Zd.displayName="FrameworkContext";function Tu(){let r=G.useContext(Zd);return qd(r,"You must render this element inside a <HydratedRouter> element"),r}function Ny(r,e){let t=G.useContext(Zd),[s,a]=G.useState(!1),[l,c]=G.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=e,_=G.useRef(null);G.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let w=x=>{x.forEach(L=>{c(L.isIntersecting)})},y=new IntersectionObserver(w,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[r]),G.useEffect(()=>{if(s){let w=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(w)}}},[s]);let S=()=>{a(!0)},E=()=>{a(!1),c(!1)};return t?r!=="intent"?[l,_,{}]:[l,_,{onFocus:Qa(f,S),onBlur:Qa(d,E),onMouseEnter:Qa(p,S),onMouseLeave:Qa(m,E),onTouchStart:Qa(v,S)}]:[!1,_,{}]}function Qa(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function Iy({page:r,...e}){let t=$x(),{nonce:s}=Tu(),{router:a}=Kd(),l=G.useMemo(()=>vv(a.routes,r,a.basename),[a.routes,r,a.basename]);return l?(e.nonce==null&&s&&(e={...e,nonce:s}),t?G.createElement(Oy,{page:r,matches:l,...e}):G.createElement(ky,{page:r,matches:l,...e})):null}function Fy(r){let{manifest:e,routeModules:t}=Tu(),[s,a]=G.useState([]);return G.useEffect(()=>{let l=!1;return Cy(r,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[r,e,t]),s}function Oy({page:r,matches:e,...t}){let s=ai(),{future:a}=Tu(),{basename:l}=Kd(),c=G.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let f=Iv(r,l,a.v8_trailingSlashAwareDataRequests,"rsc"),d=!1,p=[];for(let m of e)typeof m.route.shouldRevalidate=="function"?d=!0:p.push(m.route.id);return d&&p.length>0&&f.searchParams.set("_routes",p.join(",")),[f.pathname+f.search]},[l,a.v8_trailingSlashAwareDataRequests,r,s,e]);return G.createElement(G.Fragment,null,c.map(f=>G.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...t})))}function ky({page:r,matches:e,...t}){let s=ai(),{future:a,manifest:l,routeModules:c}=Tu(),{basename:f}=Kd(),{loaderData:d,matches:p}=Uy(),m=G.useMemo(()=>Zm(r,e,p,l,s,"data"),[r,e,p,l,s]),v=G.useMemo(()=>Zm(r,e,p,l,s,"assets"),[r,e,p,l,s]),_=G.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let w=new Set,y=!1;if(e.forEach(L=>{let P=l.routes[L.route.id];!P||!P.hasLoader||(!m.some(C=>C.route.id===L.route.id)&&L.route.id in d&&c[L.route.id]?.shouldRevalidate||P.hasClientLoader?y=!0:w.add(L.route.id))}),w.size===0)return[];let x=Iv(r,f,a.v8_trailingSlashAwareDataRequests,"data");return y&&w.size>0&&x.searchParams.set("_routes",e.filter(L=>w.has(L.route.id)).map(L=>L.route.id).join(",")),[x.pathname+x.search]},[f,a.v8_trailingSlashAwareDataRequests,d,s,l,m,e,r,c]),S=G.useMemo(()=>by(v,l),[v,l]),E=Fy(v);return G.createElement(G.Fragment,null,_.map(w=>G.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...t})),S.map(w=>G.createElement("link",{key:w,rel:"modulepreload",href:w,...t})),E.map(({key:w,link:y})=>G.createElement("link",{key:w,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function By(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var zy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zy&&(window.__reactRouterVersion="7.18.2")}catch{}function Hy({basename:r,children:e,useTransitions:t,window:s}){let a=G.useRef();a.current==null&&(a.current=xx({window:s,v5Compat:!0}));let l=a.current,[c,f]=G.useState({action:l.action,location:l.location}),d=G.useCallback(p=>{t===!1?f(p):G.startTransition(()=>f(p))},[t]);return G.useLayoutEffect(()=>l.listen(d),[l,d]),G.createElement(gy,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l,useTransitions:t})}var Fv=G.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,mask:f,state:d,target:p,to:m,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:S,...E},w){let{basename:y,navigator:x,useTransitions:L}=G.useContext(or),P=typeof m=="string"&&Wd.test(m),C=Tv(m,y);m=C.to;let k=ey(m,{relative:a}),N=ai(),F=null;if(f){let pe=Xd(f,[],N.mask?N.mask.pathname:"/",!0);y!=="/"&&(pe.pathname=pe.pathname==="/"?y:xr([y,pe.pathname])),F=x.createHref(pe)}let[X,b,R]=Ny(s,E),H=Wy(m,{replace:c,mask:f,state:d,target:p,preventScrollReset:v,relative:a,viewTransition:_,defaultShouldRevalidate:S,useTransitions:L});function se(pe){e&&e(pe),pe.defaultPrevented||H(pe)}let Z=!(C.isExternal||l),ue=G.createElement("a",{...E,...R,href:(Z?F:void 0)||C.absoluteURL||k,onClick:Z?se:e,ref:By(w,b),target:p,"data-discover":!P&&t==="render"?"true":void 0});return X&&!P?G.createElement(G.Fragment,null,ue,G.createElement(Iy,{page:k})):ue});Fv.displayName="Link";var td=G.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:f,children:d,...p},m){let v=So(c,{relative:p.relative}),_=ai(),S=G.useContext(Mu),{navigator:E,basename:w}=G.useContext(or),y=S!=null&&qy(v)&&f===!0,x=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,L=_.pathname,P=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(L=L.toLowerCase(),P=P?P.toLowerCase():null,x=x.toLowerCase()),P&&w&&(P=ii(P,w)||P);const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let k=L===x||!a&&L.startsWith(x)&&L.charAt(C)==="/",N=P!=null&&(P===x||!a&&P.startsWith(x)&&P.charAt(x.length)==="/"),F={isActive:k,isPending:N,isTransitioning:y},X=k?e:void 0,b;typeof s=="function"?b=s(F):b=[s,k?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(F):l;return G.createElement(Fv,{...p,"aria-current":X,className:b,ref:m,style:R,to:c,viewTransition:f},typeof d=="function"?d(F):d)});td.displayName="NavLink";var Vy=G.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=ou,action:f,onSubmit:d,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:_,...S},E)=>{let{useTransitions:w}=G.useContext(or),y=$y(),x=Yy(f,{relative:p}),L=c.toLowerCase()==="get"?"get":"post",P=typeof f=="string"&&Wd.test(f),C=k=>{if(d&&d(k),k.defaultPrevented)return;k.preventDefault();let N=k.nativeEvent.submitter,F=N?.getAttribute("formmethod")||c,X=()=>y(N||k.currentTarget,{fetcherKey:e,method:F,navigate:t,replace:a,state:l,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:_});w&&t!==!1?G.startTransition(()=>X()):X()};return G.createElement("form",{ref:E,method:L,action:x,onSubmit:s?d:C,...S,"data-discover":!P&&r==="render"?"true":void 0})});Vy.displayName="Form";function Gy(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ov(r){let e=G.useContext(ma);return jt(e,Gy(r)),e}function Wy(r,{target:e,replace:t,mask:s,state:a,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d,useTransitions:p}={}){let m=ty(),v=ai(),_=So(r,{relative:c});return G.useCallback(S=>{if(Ey(S,e)){S.preventDefault();let E=t!==void 0?t:uo(v)===uo(_),w=()=>m(r,{replace:E,mask:s,state:a,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d});p?G.startTransition(()=>w()):w()}},[v,m,_,t,s,a,e,r,l,c,f,d,p])}var Xy=0,jy=()=>`__${String(++Xy)}__`;function $y(){let{router:r}=Ov("useSubmit"),{basename:e}=G.useContext(or),t=dy(),s=r.fetch,a=r.navigate;return G.useCallback(async(l,c={})=>{let{action:f,method:d,encType:p,formData:m,body:v}=Ty(l,e);if(c.navigate===!1){let _=c.fetcherKey||jy();await s(_,t,c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,flushSync:c.flushSync})}else await a(c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[s,a,e,t])}function Yy(r,{relative:e}={}){let{basename:t}=G.useContext(or),s=G.useContext(si);jt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...So(r||".",{relative:e})},c=ai();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(m=>m==="")){f.delete("index"),d.filter(v=>v).forEach(v=>f.append("index",v));let m=f.toString();l.search=m?`?${m}`:""}}return(!r||r===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:xr([t,l.pathname])),uo(l)}function qy(r,{relative:e}={}){let t=G.useContext(Cv);jt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Ov("useViewTransitionState"),a=So(r,{relative:e});if(!t.isTransitioning)return!1;let l=ii(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=ii(t.nextLocation.pathname,s)||t.nextLocation.pathname;return vu(a.pathname,c)!=null||vu(a.pathname,l)!=null}const Jd="178",Ky=0,Jm=1,Zy=2,kv=1,Jy=2,Kr=3,Hi=0,Wn=1,br=2,Bi=0,sa=1,Qm=2,eg=3,tg=4,Qy=5,fs=100,eS=101,tS=102,nS=103,rS=104,iS=200,sS=201,aS=202,oS=203,nd=204,rd=205,lS=206,uS=207,cS=208,fS=209,dS=210,hS=211,pS=212,mS=213,gS=214,id=0,sd=1,ad=2,ua=3,od=4,ld=5,ud=6,cd=7,Bv=0,vS=1,_S=2,ti=0,xS=1,yS=2,SS=3,ES=4,MS=5,wS=6,TS=7,zv=300,ca=301,fa=302,fd=303,dd=304,Ru=306,co=1e3,Jr=1001,hd=1002,vn=1003,RS=1004,Il=1005,Pr=1006,vf=1007,hs=1008,Ir=1009,Hv=1010,Vv=1011,fo=1012,Qd=1013,ms=1014,Qr=1015,Eo=1016,eh=1017,th=1018,ho=1020,Gv=35902,Wv=1021,Xv=1022,_r=1023,po=1026,mo=1027,jv=1028,nh=1029,$v=1030,rh=1031,ih=1033,uu=33776,cu=33777,fu=33778,du=33779,pd=35840,md=35841,gd=35842,vd=35843,_d=36196,xd=37492,yd=37496,Sd=37808,Ed=37809,Md=37810,wd=37811,Td=37812,Rd=37813,Ad=37814,Cd=37815,bd=37816,Pd=37817,Ld=37818,Dd=37819,Ud=37820,Nd=37821,hu=36492,Id=36494,Fd=36495,Yv=36283,Od=36284,kd=36285,Bd=36286,AS=3200,CS=3201,bS=0,PS=1,Ii="",In="srgb",da="srgb-linear",xu="linear",Nt="srgb",Hs=7680,ng=519,LS=512,DS=513,US=514,qv=515,NS=516,IS=517,FS=518,OS=519,rg=35044,ig="300 es",ei=2e3,yu=2001;class ga{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sg=1234567;const oo=Math.PI/180,go=180/Math.PI;function va(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function sh(r,e){return(r%e+e)%e}function kS(r,e,t,s,a){return s+(r-e)*(a-s)/(t-e)}function BS(r,e,t){return r!==e?(t-r)/(e-r):0}function lo(r,e,t){return(1-t)*r+t*e}function zS(r,e,t,s){return lo(r,e,1-Math.exp(-t*s))}function HS(r,e=1){return e-Math.abs(sh(r,e*2)-e)}function VS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function GS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function WS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function XS(r,e){return r+Math.random()*(e-r)}function jS(r){return r*(.5-Math.random())}function $S(r){r!==void 0&&(sg=r);let e=sg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function YS(r){return r*oo}function qS(r){return r*go}function KS(r){return(r&r-1)===0&&r!==0}function ZS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function JS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function QS(r,e,t,s,a){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),p=l((e+s)/2),m=c((e+s)/2),v=l((e-s)/2),_=c((e-s)/2),S=l((s-e)/2),E=c((s-e)/2);switch(a){case"XYX":r.set(f*m,d*v,d*_,f*p);break;case"YZY":r.set(d*_,f*m,d*v,f*p);break;case"ZXZ":r.set(d*v,d*_,f*m,f*p);break;case"XZX":r.set(f*m,d*E,d*S,f*p);break;case"YXY":r.set(d*S,f*m,d*E,f*p);break;case"ZYZ":r.set(d*E,d*S,f*m,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ra(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Un(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const eE={DEG2RAD:oo,RAD2DEG:go,generateUUID:va,clamp:St,euclideanModulo:sh,mapLinear:kS,inverseLerp:BS,lerp:lo,damp:zS,pingpong:HS,smoothstep:VS,smootherstep:GS,randInt:WS,randFloat:XS,randFloatSpread:jS,seededRandom:$S,degToRad:YS,radToDeg:qS,isPowerOfTwo:KS,ceilPowerOfTwo:ZS,floorPowerOfTwo:JS,setQuaternionFromProperEuler:QS,normalize:Un,denormalize:ra};class Pt{constructor(e=0,t=0){Pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mo{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let d=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];const _=l[c+0],S=l[c+1],E=l[c+2],w=l[c+3];if(f===0){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(f===1){e[t+0]=_,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(v!==w||d!==_||p!==S||m!==E){let y=1-f;const x=d*_+p*S+m*E+v*w,L=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const k=Math.sqrt(P),N=Math.atan2(k,x*L);y=Math.sin(y*N)/k,f=Math.sin(f*N)/k}const C=f*L;if(d=d*y+_*C,p=p*y+S*C,m=m*y+E*C,v=v*y+w*C,y===1-f){const k=1/Math.sqrt(d*d+p*p+m*m+v*v);d*=k,p*=k,m*=k,v*=k}}e[t]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],d=s[a+1],p=s[a+2],m=s[a+3],v=l[c],_=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+m*v+d*S-p*_,e[t+1]=d*E+m*_+p*v-f*S,e[t+2]=p*E+m*S+f*_-d*v,e[t+3]=m*E-f*v-d*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,p=f(s/2),m=f(a/2),v=f(l/2),_=d(s/2),S=d(a/2),E=d(l/2);switch(c){case"XYZ":this._x=_*m*v+p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v-_*S*E;break;case"YXZ":this._x=_*m*v+p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v+_*S*E;break;case"ZXY":this._x=_*m*v-p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v-_*S*E;break;case"ZYX":this._x=_*m*v-p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v+_*S*E;break;case"YZX":this._x=_*m*v+p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v-_*S*E;break;case"XZY":this._x=_*m*v-p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],d=t[9],p=t[2],m=t[6],v=t[10],_=s+f+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(s>f&&s>v){const S=2*Math.sqrt(1+s-f-v);this._w=(m-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-s-v);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+v-s-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,d=t._y,p=t._z,m=t._w;return this._x=s*m+c*f+a*p-l*d,this._y=a*m+c*d+l*f-s*p,this._z=l*m+c*p+s*d-a*f,this._w=c*m-s*f-a*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),v=Math.sin((1-t)*m)/p,_=Math.sin(t*m)/p;return this._w=c*v+this._w*_,this._x=s*v+this._x*_,this._y=a*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,s=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ag.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ag.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,d=e.w,p=2*(c*a-f*s),m=2*(f*t-l*a),v=2*(l*s-c*t);return this.x=t+d*p+c*v-f*m,this.y=s+d*m+f*p-l*v,this.z=a+d*v+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=a*d-l*f,this.y=l*c-s*d,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return _f.copy(this).projectOnVector(e),this.sub(_f)}reflect(e){return this.sub(_f.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _f=new ne,ag=new Mo;class ht{constructor(e,t,s,a,l,c,f,d,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,p)}set(e,t,s,a,l,c,f,d,p){const m=this.elements;return m[0]=e,m[1]=a,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=s,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],d=s[6],p=s[1],m=s[4],v=s[7],_=s[2],S=s[5],E=s[8],w=a[0],y=a[3],x=a[6],L=a[1],P=a[4],C=a[7],k=a[2],N=a[5],F=a[8];return l[0]=c*w+f*L+d*k,l[3]=c*y+f*P+d*N,l[6]=c*x+f*C+d*F,l[1]=p*w+m*L+v*k,l[4]=p*y+m*P+v*N,l[7]=p*x+m*C+v*F,l[2]=_*w+S*L+E*k,l[5]=_*y+S*P+E*N,l[8]=_*x+S*C+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8];return t*c*m-t*f*p-s*l*m+s*f*d+a*l*p-a*c*d}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=m*c-f*p,_=f*d-m*l,S=p*l-c*d,E=t*v+s*_+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(a*p-m*s)*w,e[2]=(f*s-a*c)*w,e[3]=_*w,e[4]=(m*t-a*d)*w,e[5]=(a*l-f*t)*w,e[6]=S*w,e[7]=(s*d-p*t)*w,e[8]=(c*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(s*d,s*p,-s*(d*c+p*f)+c+e,-a*p,a*d,-a*(-p*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(xf.makeScale(e,t)),this}rotate(e){return this.premultiply(xf.makeRotation(-e)),this}translate(e,t){return this.premultiply(xf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xf=new ht;function Kv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function vo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tE(){const r=vo("canvas");return r.style.display="block",r}const og={};function aa(r){r in og||(og[r]=!0,console.warn(r))}function nE(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function rE(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function iE(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lg=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ug=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sE(){const r={enabled:!0,workingColorSpace:da,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Nt&&(a.r=ni(a.r),a.g=ni(a.g),a.b=ni(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(a.r=oa(a.r),a.g=oa(a.g),a.b=oa(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ii?xu:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return aa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return aa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[da]:{primaries:e,whitePoint:s,transfer:xu,toXYZ:lg,fromXYZ:ug,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:s,transfer:Nt,toXYZ:lg,fromXYZ:ug,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),r}const At=sE();function ni(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function oa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Vs;class aE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Vs===void 0&&(Vs=vo("canvas")),Vs.width=e.width,Vs.height=e.height;const a=Vs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=Vs}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=ni(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(ni(t[s]/255)*255):t[s]=ni(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oE=0;class ah{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(yf(a[c].image)):l.push(yf(a[c]))}else l=yf(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function yf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?aE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lE=0;const Sf=new ne;class On extends ga{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,s=Jr,a=Jr,l=Pr,c=hs,f=_r,d=Ir,p=On.DEFAULT_ANISOTROPY,m=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=va(),this.name="",this.source=new ah(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sf).x}get height(){return this.source.getSize(Sf).y}get depth(){return this.source.getSize(Sf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case co:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case co:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=zv;On.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,s=0,a=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const d=e.elements,p=d[0],m=d[4],v=d[8],_=d[1],S=d[5],E=d[9],w=d[2],y=d[6],x=d[10];if(Math.abs(m-_)<.01&&Math.abs(v-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+w)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,C=(S+1)/2,k=(x+1)/2,N=(m+_)/4,F=(v+w)/4,X=(E+y)/4;return P>C&&P>k?P<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(P),a=N/s,l=F/s):C>k?C<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),s=N/a,l=X/a):k<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(k),s=F/l,a=X/l),this.set(s,a,l,t),this}let L=Math.sqrt((y-E)*(y-E)+(v-w)*(v-w)+(_-m)*(_-m));return Math.abs(L)<.001&&(L=1),this.x=(y-E)/L,this.y=(v-w)/L,this.z=(_-m)/L,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uE extends ga{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const a={width:e,height:t,depth:s.depth},l=new On(a);this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Pr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new ah(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends uE{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Zv extends On{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=vn,this.minFilter=vn,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cE extends On{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=vn,this.minFilter=vn,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(pr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(pr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=pr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,pr):pr.fromBufferAttribute(l,c),pr.applyMatrix4(e.matrixWorld),this.expandByPoint(pr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Fl.copy(s.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pr),pr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Ol.subVectors(this.max,eo),Gs.subVectors(e.a,eo),Ws.subVectors(e.b,eo),Xs.subVectors(e.c,eo),Ci.subVectors(Ws,Gs),bi.subVectors(Xs,Ws),rs.subVectors(Gs,Xs);let t=[0,-Ci.z,Ci.y,0,-bi.z,bi.y,0,-rs.z,rs.y,Ci.z,0,-Ci.x,bi.z,0,-bi.x,rs.z,0,-rs.x,-Ci.y,Ci.x,0,-bi.y,bi.x,0,-rs.y,rs.x,0];return!Ef(t,Gs,Ws,Xs,Ol)||(t=[1,0,0,0,1,0,0,0,1],!Ef(t,Gs,Ws,Xs,Ol))?!1:(kl.crossVectors(Ci,bi),t=[kl.x,kl.y,kl.z],Ef(t,Gs,Ws,Xs,Ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xr=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],pr=new ne,Fl=new wo,Gs=new ne,Ws=new ne,Xs=new ne,Ci=new ne,bi=new ne,rs=new ne,eo=new ne,Ol=new ne,kl=new ne,is=new ne;function Ef(r,e,t,s,a){for(let l=0,c=r.length-3;l<=c;l+=3){is.fromArray(r,l);const f=a.x*Math.abs(is.x)+a.y*Math.abs(is.y)+a.z*Math.abs(is.z),d=e.dot(is),p=t.dot(is),m=s.dot(is);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const fE=new wo,to=new ne,Mf=new ne;class oh{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):fE.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(to,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Mf)),this.expandByPoint(to.copy(e.center).sub(Mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const jr=new ne,wf=new ne,Bl=new ne,Pi=new ne,Tf=new ne,zl=new ne,Rf=new ne;class dE{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jr.copy(this.origin).addScaledVector(this.direction,t),jr.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){wf.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(wf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Bl),f=Pi.dot(this.direction),d=-Pi.dot(Bl),p=Pi.lengthSq(),m=Math.abs(1-c*c);let v,_,S,E;if(m>0)if(v=c*d-f,_=c*f-d,E=l*m,v>=0)if(_>=-E)if(_<=E){const w=1/m;v*=w,_*=w,S=v*(v+c*_+2*f)+_*(c*v+_+2*d)+p}else _=l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;else _=-l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;else _<=-E?(v=Math.max(0,-(-c*l+f)),_=v>0?-l:Math.min(Math.max(-l,-d),l),S=-v*v+_*(_+2*d)+p):_<=E?(v=0,_=Math.min(Math.max(-l,-d),l),S=_*(_+2*d)+p):(v=Math.max(0,-(c*l+f)),_=v>0?l:Math.min(Math.max(-l,-d),l),S=-v*v+_*(_+2*d)+p);else _=c>0?-l:l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(wf).addScaledVector(Bl,_),S}intersectSphere(e,t){jr.subVectors(e.center,this.origin);const s=jr.dot(this.direction),a=jr.dot(jr)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,d=s+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,d;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,a=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,a=(e.min.x-_.x)*p),m>=0?(l=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),v>=0?(f=(e.min.z-_.z)*v,d=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,d=(e.min.z-_.z)*v),s>d||f>a)||((f>s||s!==s)&&(s=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,jr)!==null}intersectTriangle(e,t,s,a,l){Tf.subVectors(t,e),zl.subVectors(s,e),Rf.crossVectors(Tf,zl);let c=this.direction.dot(Rf),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Pi.subVectors(this.origin,e);const d=f*this.direction.dot(zl.crossVectors(Pi,zl));if(d<0)return null;const p=f*this.direction.dot(Tf.cross(Pi));if(p<0||d+p>c)return null;const m=-f*Pi.dot(Rf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,s,a,l,c,f,d,p,m,v,_,S,E,w,y){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,p,m,v,_,S,E,w,y)}set(e,t,s,a,l,c,f,d,p,m,v,_,S,E,w,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=a,x[1]=l,x[5]=c,x[9]=f,x[13]=d,x[2]=p,x[6]=m,x[10]=v,x[14]=_,x[3]=S,x[7]=E,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/js.setFromMatrixColumn(e,0).length(),l=1/js.setFromMatrixColumn(e,1).length(),c=1/js.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),d=Math.cos(a),p=Math.sin(a),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=c*m,S=c*v,E=f*m,w=f*v;t[0]=d*m,t[4]=-d*v,t[8]=p,t[1]=S+E*p,t[5]=_-w*p,t[9]=-f*d,t[2]=w-_*p,t[6]=E+S*p,t[10]=c*d}else if(e.order==="YXZ"){const _=d*m,S=d*v,E=p*m,w=p*v;t[0]=_+w*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*m,t[9]=-f,t[2]=S*f-E,t[6]=w+_*f,t[10]=c*d}else if(e.order==="ZXY"){const _=d*m,S=d*v,E=p*m,w=p*v;t[0]=_-w*f,t[4]=-c*v,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*m,t[9]=w-_*f,t[2]=-c*p,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const _=c*m,S=c*v,E=f*m,w=f*v;t[0]=d*m,t[4]=E*p-S,t[8]=_*p+w,t[1]=d*v,t[5]=w*p+_,t[9]=S*p-E,t[2]=-p,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,S=c*p,E=f*d,w=f*p;t[0]=d*m,t[4]=w-_*v,t[8]=E*v+S,t[1]=v,t[5]=c*m,t[9]=-f*m,t[2]=-p*m,t[6]=S*v+E,t[10]=_-w*v}else if(e.order==="XZY"){const _=c*d,S=c*p,E=f*d,w=f*p;t[0]=d*m,t[4]=-v,t[8]=p*m,t[1]=_*v+w,t[5]=c*m,t[9]=S*v-E,t[2]=E*v-S,t[6]=f*m,t[10]=w*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hE,e,pE)}lookAt(e,t,s){const a=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Li.crossVectors(s,qn),Li.lengthSq()===0&&(Math.abs(s.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Li.crossVectors(s,qn)),Li.normalize(),Hl.crossVectors(qn,Li),a[0]=Li.x,a[4]=Hl.x,a[8]=qn.x,a[1]=Li.y,a[5]=Hl.y,a[9]=qn.y,a[2]=Li.z,a[6]=Hl.z,a[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],d=s[8],p=s[12],m=s[1],v=s[5],_=s[9],S=s[13],E=s[2],w=s[6],y=s[10],x=s[14],L=s[3],P=s[7],C=s[11],k=s[15],N=a[0],F=a[4],X=a[8],b=a[12],R=a[1],H=a[5],se=a[9],Z=a[13],ue=a[2],pe=a[6],ce=a[10],ve=a[14],z=a[3],he=a[7],fe=a[11],I=a[15];return l[0]=c*N+f*R+d*ue+p*z,l[4]=c*F+f*H+d*pe+p*he,l[8]=c*X+f*se+d*ce+p*fe,l[12]=c*b+f*Z+d*ve+p*I,l[1]=m*N+v*R+_*ue+S*z,l[5]=m*F+v*H+_*pe+S*he,l[9]=m*X+v*se+_*ce+S*fe,l[13]=m*b+v*Z+_*ve+S*I,l[2]=E*N+w*R+y*ue+x*z,l[6]=E*F+w*H+y*pe+x*he,l[10]=E*X+w*se+y*ce+x*fe,l[14]=E*b+w*Z+y*ve+x*I,l[3]=L*N+P*R+C*ue+k*z,l[7]=L*F+P*H+C*pe+k*he,l[11]=L*X+P*se+C*ce+k*fe,l[15]=L*b+P*Z+C*ve+k*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],d=e[9],p=e[13],m=e[2],v=e[6],_=e[10],S=e[14],E=e[3],w=e[7],y=e[11],x=e[15];return E*(+l*d*v-a*p*v-l*f*_+s*p*_+a*f*S-s*d*S)+w*(+t*d*S-t*p*_+l*c*_-a*c*S+a*p*m-l*d*m)+y*(+t*p*v-t*f*S-l*c*v+s*c*S+l*f*m-s*p*m)+x*(-a*f*m-t*d*v+t*f*_+a*c*v-s*c*_+s*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=e[9],_=e[10],S=e[11],E=e[12],w=e[13],y=e[14],x=e[15],L=v*y*p-w*_*p+w*d*S-f*y*S-v*d*x+f*_*x,P=E*_*p-m*y*p-E*d*S+c*y*S+m*d*x-c*_*x,C=m*w*p-E*v*p+E*f*S-c*w*S-m*f*x+c*v*x,k=E*v*d-m*w*d-E*f*_+c*w*_+m*f*y-c*v*y,N=t*L+s*P+a*C+l*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=L*F,e[1]=(w*_*l-v*y*l-w*a*S+s*y*S+v*a*x-s*_*x)*F,e[2]=(f*y*l-w*d*l+w*a*p-s*y*p-f*a*x+s*d*x)*F,e[3]=(v*d*l-f*_*l-v*a*p+s*_*p+f*a*S-s*d*S)*F,e[4]=P*F,e[5]=(m*y*l-E*_*l+E*a*S-t*y*S-m*a*x+t*_*x)*F,e[6]=(E*d*l-c*y*l-E*a*p+t*y*p+c*a*x-t*d*x)*F,e[7]=(c*_*l-m*d*l+m*a*p-t*_*p-c*a*S+t*d*S)*F,e[8]=C*F,e[9]=(E*v*l-m*w*l-E*s*S+t*w*S+m*s*x-t*v*x)*F,e[10]=(c*w*l-E*f*l+E*s*p-t*w*p-c*s*x+t*f*x)*F,e[11]=(m*f*l-c*v*l-m*s*p+t*v*p+c*s*S-t*f*S)*F,e[12]=k*F,e[13]=(m*w*a-E*v*a+E*s*_-t*w*_-m*s*y+t*v*y)*F,e[14]=(E*f*a-c*w*a-E*s*d+t*w*d+c*s*y-t*f*y)*F,e[15]=(c*v*a-m*f*a+m*s*d-t*v*d-c*s*_+t*f*_)*F,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,d=e.z,p=l*c,m=l*f;return this.set(p*c+s,p*f-a*d,p*d+a*f,0,p*f+a*d,m*f+s,m*d-a*c,0,p*d-a*f,m*d+a*c,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,p=l+l,m=c+c,v=f+f,_=l*p,S=l*m,E=l*v,w=c*m,y=c*v,x=f*v,L=d*p,P=d*m,C=d*v,k=s.x,N=s.y,F=s.z;return a[0]=(1-(w+x))*k,a[1]=(S+C)*k,a[2]=(E-P)*k,a[3]=0,a[4]=(S-C)*N,a[5]=(1-(_+x))*N,a[6]=(y+L)*N,a[7]=0,a[8]=(E+P)*F,a[9]=(y-L)*F,a[10]=(1-(_+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=js.set(a[0],a[1],a[2]).length();const c=js.set(a[4],a[5],a[6]).length(),f=js.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],mr.copy(this);const p=1/l,m=1/c,v=1/f;return mr.elements[0]*=p,mr.elements[1]*=p,mr.elements[2]*=p,mr.elements[4]*=m,mr.elements[5]*=m,mr.elements[6]*=m,mr.elements[8]*=v,mr.elements[9]*=v,mr.elements[10]*=v,t.setFromRotationMatrix(mr),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=ei){const d=this.elements,p=2*l/(t-e),m=2*l/(s-a),v=(t+e)/(t-e),_=(s+a)/(s-a);let S,E;if(f===ei)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===yu)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=ei){const d=this.elements,p=1/(t-e),m=1/(s-a),v=1/(c-l),_=(t+e)*p,S=(s+a)*m;let E,w;if(f===ei)E=(c+l)*v,w=-2*v;else if(f===yu)E=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=w,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const js=new ne,mr=new qt,hE=new ne(0,0,0),pE=new ne(1,1,1),Li=new ne,Hl=new ne,qn=new ne,cg=new qt,fg=new Mo;class Fn{constructor(e=0,t=0,s=0,a=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],d=a[1],p=a[5],m=a[9],v=a[2],_=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return cg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fg.setFromEuler(this),this.setFromQuaternion(fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Jv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mE=0;const dg=new ne,$s=new Mo,$r=new qt,Vl=new ne,no=new ne,gE=new ne,vE=new Mo,hg=new ne(1,0,0),pg=new ne(0,1,0),mg=new ne(0,0,1),gg={type:"added"},_E={type:"removed"},Ys={type:"childadded",child:null},Af={type:"childremoved",child:null};class Rn extends ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new ne,t=new Fn,s=new Mo,a=new ne(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qt},normalMatrix:{value:new ht}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(hg,e)}rotateY(e){return this.rotateOnAxis(pg,e)}rotateZ(e){return this.rotateOnAxis(mg,e)}translateOnAxis(e,t){return dg.copy(e).applyQuaternion(this.quaternion),this.position.add(dg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hg,e)}translateY(e){return this.translateOnAxis(pg,e)}translateZ(e){return this.translateOnAxis(mg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($r.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Vl.copy(e):Vl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$r.lookAt(no,Vl,this.up):$r.lookAt(Vl,no,this.up),this.quaternion.setFromRotationMatrix($r),a&&($r.extractRotation(a.matrixWorld),$s.setFromRotationMatrix($r),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gg),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_E),Af.child=e,this.dispatchEvent(Af),Af.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$r.multiply(e.parent.matrixWorld)),e.applyMatrix4($r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gg),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,gE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,vE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const v=d[p];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),p=c(e.textures),m=c(e.images),v=c(e.shapes),_=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),d.length>0&&(s.materials=d),p.length>0&&(s.textures=p),m.length>0&&(s.images=m),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=a,s;function c(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Rn.DEFAULT_UP=new ne(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gr=new ne,Yr=new ne,Cf=new ne,qr=new ne,qs=new ne,Ks=new ne,vg=new ne,bf=new ne,Pf=new ne,Lf=new ne,Df=new Yt,Uf=new Yt,Nf=new Yt;class vr{constructor(e=new ne,t=new ne,s=new ne){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),gr.subVectors(e,t),a.cross(gr);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){gr.subVectors(a,t),Yr.subVectors(s,t),Cf.subVectors(e,t);const c=gr.dot(gr),f=gr.dot(Yr),d=gr.dot(Cf),p=Yr.dot(Yr),m=Yr.dot(Cf),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,S=(p*d-f*m)*_,E=(c*m-f*d)*_;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,qr)===null?!1:qr.x>=0&&qr.y>=0&&qr.x+qr.y<=1}static getInterpolation(e,t,s,a,l,c,f,d){return this.getBarycoord(e,t,s,a,qr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,qr.x),d.addScaledVector(c,qr.y),d.addScaledVector(f,qr.z),d)}static getInterpolatedAttribute(e,t,s,a,l,c){return Df.setScalar(0),Uf.setScalar(0),Nf.setScalar(0),Df.fromBufferAttribute(e,t),Uf.fromBufferAttribute(e,s),Nf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Df,l.x),c.addScaledVector(Uf,l.y),c.addScaledVector(Nf,l.z),c}static isFrontFacing(e,t,s,a){return gr.subVectors(s,t),Yr.subVectors(e,t),gr.cross(Yr).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gr.subVectors(this.c,this.b),Yr.subVectors(this.a,this.b),gr.cross(Yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return vr.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return vr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;qs.subVectors(a,s),Ks.subVectors(l,s),bf.subVectors(e,s);const d=qs.dot(bf),p=Ks.dot(bf);if(d<=0&&p<=0)return t.copy(s);Pf.subVectors(e,a);const m=qs.dot(Pf),v=Ks.dot(Pf);if(m>=0&&v<=m)return t.copy(a);const _=d*v-m*p;if(_<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(s).addScaledVector(qs,c);Lf.subVectors(e,l);const S=qs.dot(Lf),E=Ks.dot(Lf);if(E>=0&&S<=E)return t.copy(l);const w=S*p-d*E;if(w<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(Ks,f);const y=m*E-S*v;if(y<=0&&v-m>=0&&S-E>=0)return vg.subVectors(l,a),f=(v-m)/(v-m+(S-E)),t.copy(a).addScaledVector(vg,f);const x=1/(y+w+_);return c=w*x,f=_*x,t.copy(s).addScaledVector(qs,c).addScaledVector(Ks,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function If(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Dt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,s,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=s,At.colorSpaceToWorking(this,a),this}setHSL(e,t,s,a=At.workingColorSpace){if(e=sh(e,1),t=St(t,0,1),s=St(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=If(c,l,e+1/3),this.g=If(c,l,e),this.b=If(c,l,e-1/3)}return At.colorSpaceToWorking(this,a),this}setStyle(e,t=In){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const s=Qv[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return At.workingToColorSpace(Tn.copy(this),e),Math.round(St(Tn.r*255,0,255))*65536+Math.round(St(Tn.g*255,0,255))*256+Math.round(St(Tn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(Tn.copy(this),t);const s=Tn.r,a=Tn.g,l=Tn.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let d,p;const m=(f+c)/2;if(f===c)d=0,p=0;else{const v=c-f;switch(p=m<=.5?v/(c+f):v/(2-c-f),c){case s:d=(a-l)/v+(a<l?6:0);break;case a:d=(l-s)/v+2;break;case l:d=(s-a)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=m,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=In){At.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,s=Tn.g,a=Tn.b;return e!==In?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Gl);const s=lo(Di.h,Gl.h,t),a=lo(Di.s,Gl.s,t),l=lo(Di.l,Gl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Dt;Dt.NAMES=Qv;let xE=0;class Au extends ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=va(),this.name="",this.type="Material",this.blending=sa,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=rd,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==sa&&(s.blending=this.blending),this.side!==Hi&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==nd&&(s.blendSrc=this.blendSrc),this.blendDst!==rd&&(s.blendDst=this.blendDst),this.blendEquation!==fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ua&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ng&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lh extends Au{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new ne,Wl=new Pt;let yE=0;class Ur{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=rg,this.updateRanges=[],this.gpuType=Qr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Wl.fromBufferAttribute(this,t),Wl.applyMatrix3(e),this.setXY(t,Wl.x,Wl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=ra(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Un(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ra(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ra(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ra(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ra(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),s=Un(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),s=Un(s,this.array),a=Un(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),s=Un(s,this.array),a=Un(a,this.array),l=Un(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rg&&(e.usage=this.usage),e}}class e_ extends Ur{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class t_ extends Ur{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class ps extends Ur{constructor(e,t,s){super(new Float32Array(e),t,s)}}let SE=0;const rr=new qt,Ff=new Rn,Zs=new ne,Kn=new wo,ro=new wo,hn=new ne;class vs extends ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kv(e)?t_:e_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ht().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rr.makeRotationFromQuaternion(e),this.applyMatrix4(rr),this}rotateX(e){return rr.makeRotationX(e),this.applyMatrix4(rr),this}rotateY(e){return rr.makeRotationY(e),this.applyMatrix4(rr),this}rotateZ(e){return rr.makeRotationZ(e),this.applyMatrix4(rr),this}translate(e,t,s){return rr.makeTranslation(e,t,s),this.applyMatrix4(rr),this}scale(e,t,s){return rr.makeScale(e,t,s),this.applyMatrix4(rr),this}lookAt(e){return Ff.lookAt(e),Ff.updateMatrix(),this.applyMatrix4(Ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ps(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Kn.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const s=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ro.setFromBufferAttribute(f),this.morphTargetsRelative?(hn.addVectors(Kn.min,ro.min),Kn.expandByPoint(hn),hn.addVectors(Kn.max,ro.max),Kn.expandByPoint(hn)):(Kn.expandByPoint(ro.min),Kn.expandByPoint(ro.max))}Kn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)hn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(hn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)hn.fromBufferAttribute(f,p),d&&(Zs.fromBufferAttribute(e,p),hn.add(Zs)),a=Math.max(a,s.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ur(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let X=0;X<s.count;X++)f[X]=new ne,d[X]=new ne;const p=new ne,m=new ne,v=new ne,_=new Pt,S=new Pt,E=new Pt,w=new ne,y=new ne;function x(X,b,R){p.fromBufferAttribute(s,X),m.fromBufferAttribute(s,b),v.fromBufferAttribute(s,R),_.fromBufferAttribute(l,X),S.fromBufferAttribute(l,b),E.fromBufferAttribute(l,R),m.sub(p),v.sub(p),S.sub(_),E.sub(_);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(w.copy(m).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(H),y.copy(v).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(H),f[X].add(w),f[b].add(w),f[R].add(w),d[X].add(y),d[b].add(y),d[R].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let X=0,b=L.length;X<b;++X){const R=L[X],H=R.start,se=R.count;for(let Z=H,ue=H+se;Z<ue;Z+=3)x(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const P=new ne,C=new ne,k=new ne,N=new ne;function F(X){k.fromBufferAttribute(a,X),N.copy(k);const b=f[X];P.copy(b),P.sub(k.multiplyScalar(k.dot(b))).normalize(),C.crossVectors(N,b);const H=C.dot(d[X])<0?-1:1;c.setXYZW(X,P.x,P.y,P.z,H)}for(let X=0,b=L.length;X<b;++X){const R=L[X],H=R.start,se=R.count;for(let Z=H,ue=H+se;Z<ue;Z+=3)F(e.getX(Z+0)),F(e.getX(Z+1)),F(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ur(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const a=new ne,l=new ne,c=new ne,f=new ne,d=new ne,p=new ne,m=new ne,v=new ne;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),w=e.getX(_+1),y=e.getX(_+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),m.subVectors(c,l),v.subVectors(a,l),m.cross(v),f.fromBufferAttribute(s,E),d.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),f.add(m),d.add(m),p.add(m),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(w,d.x,d.y,d.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,l),v.subVectors(a,l),m.cross(v),s.setXYZ(_+0,m.x,m.y,m.z),s.setXYZ(_+1,m.x,m.y,m.z),s.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(f,d){const p=f.array,m=f.itemSize,v=f.normalized,_=new p.constructor(d.length*m);let S=0,E=0;for(let w=0,y=d.length;w<y;w++){f.isInterleavedBufferAttribute?S=d[w]*f.data.stride+f.offset:S=d[w]*m;for(let x=0;x<m;x++)_[E++]=p[S++]}return new Ur(_,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vs,s=this.index.array,a=this.attributes;for(const f in a){const d=a[f],p=e(d,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,v=p.length;m<v;m++){const _=p[m],S=e(_,s);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const p=s[d];e.data.attributes[d]=p.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let v=0,_=p.length;v<_;v++){const S=p[v];m.push(S.toJSON(e.data))}m.length>0&&(a[d]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],v=l[p];for(let _=0,S=v.length;_<S;_++)m.push(v[_].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _g=new qt,ss=new dE,Xl=new oh,xg=new ne,jl=new ne,$l=new ne,Yl=new ne,Of=new ne,ql=new ne,yg=new ne,Kl=new ne;class Lr extends Rn{constructor(e=new vs,t=new lh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){ql.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],v=l[d];m!==0&&(Of.fromBufferAttribute(v,e),c?ql.addScaledVector(Of,m):ql.addScaledVector(Of.sub(t),m))}t.add(ql)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Xl.copy(s.boundingSphere),Xl.applyMatrix4(l),ss.copy(e.ray).recast(e.near),!(Xl.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Xl,xg)===null||ss.origin.distanceToSquared(xg)>(e.far-e.near)**2))&&(_g.copy(l).invert(),ss.copy(e.ray).applyMatrix4(_g),!(s.boundingBox!==null&&ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const y=_[E],x=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,k=P;C<k;C+=3){const N=f.getX(C),F=f.getX(C+1),X=f.getX(C+2);a=Zl(this,x,e,s,p,m,v,N,F,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=E,x=w;y<x;y+=3){const L=f.getX(y),P=f.getX(y+1),C=f.getX(y+2);a=Zl(this,c,e,s,p,m,v,L,P,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const y=_[E],x=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,k=P;C<k;C+=3){const N=C,F=C+1,X=C+2;a=Zl(this,x,e,s,p,m,v,N,F,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=E,x=w;y<x;y+=3){const L=y,P=y+1,C=y+2;a=Zl(this,c,e,s,p,m,v,L,P,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function EE(r,e,t,s,a,l,c,f){let d;if(e.side===Wn?d=s.intersectTriangle(c,l,a,!0,f):d=s.intersectTriangle(a,l,c,e.side===Hi,f),d===null)return null;Kl.copy(f),Kl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Kl);return p<t.near||p>t.far?null:{distance:p,point:Kl.clone(),object:r}}function Zl(r,e,t,s,a,l,c,f,d,p){r.getVertexPosition(f,jl),r.getVertexPosition(d,$l),r.getVertexPosition(p,Yl);const m=EE(r,e,t,s,jl,$l,Yl,yg);if(m){const v=new ne;vr.getBarycoord(yg,jl,$l,Yl,v),a&&(m.uv=vr.getInterpolatedAttribute(a,f,d,p,v,new Pt)),l&&(m.uv1=vr.getInterpolatedAttribute(l,f,d,p,v,new Pt)),c&&(m.normal=vr.getInterpolatedAttribute(c,f,d,p,v,new ne),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:d,c:p,normal:new ne,materialIndex:0};vr.getNormal(jl,$l,Yl,_.normal),m.face=_,m.barycoord=v}return m}class _a extends vs{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],m=[],v=[];let _=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,a,c,2),E("x","z","y",1,-1,e,s,-t,a,c,3),E("x","y","z",1,-1,e,t,s,a,l,4),E("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(d),this.setAttribute("position",new ps(p,3)),this.setAttribute("normal",new ps(m,3)),this.setAttribute("uv",new ps(v,2));function E(w,y,x,L,P,C,k,N,F,X,b){const R=C/F,H=k/X,se=C/2,Z=k/2,ue=N/2,pe=F+1,ce=X+1;let ve=0,z=0;const he=new ne;for(let fe=0;fe<ce;fe++){const I=fe*H-Z;for(let re=0;re<pe;re++){const Ce=re*R-se;he[w]=Ce*L,he[y]=I*P,he[x]=ue,p.push(he.x,he.y,he.z),he[w]=0,he[y]=0,he[x]=N>0?1:-1,m.push(he.x,he.y,he.z),v.push(re/F),v.push(1-fe/X),ve+=1}}for(let fe=0;fe<X;fe++)for(let I=0;I<F;I++){const re=_+I+pe*fe,Ce=_+I+pe*(fe+1),te=_+(I+1)+pe*(fe+1),ge=_+(I+1)+pe*fe;d.push(re,Ce,ge),d.push(Ce,te,ge),z+=6}f.addGroup(S,z,b),S+=z,_+=ve}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ha(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Nn(r){const e={};for(let t=0;t<r.length;t++){const s=ha(r[t]);for(const a in s)e[a]=s[a]}return e}function ME(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function n_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const wE={clone:ha,merge:Nn};var TE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Au{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TE,this.fragmentShader=RE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=ME(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class r_ extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new ne,Sg=new Pt,Eg=new Pt;class ar extends r_{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Sg,Eg),t.subVectors(Eg,Sg)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oo*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/d,t-=c.offsetY*s/p,a*=c.width/d,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Js=-90,Qs=1;class AE extends Rn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ar(Js,Qs,e,t);a.layers=this.layers,this.add(a);const l=new ar(Js,Qs,e,t);l.layers=this.layers,this.add(l);const c=new ar(Js,Qs,e,t);c.layers=this.layers,this.add(c);const f=new ar(Js,Qs,e,t);f.layers=this.layers,this.add(f);const d=new ar(Js,Qs,e,t);d.layers=this.layers,this.add(d);const p=new ar(Js,Qs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,d]=t;for(const p of t)this.remove(p);if(e===ei)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===yu)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,m]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,d),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(t,m),e.setRenderTarget(v,_,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class i_ extends On{constructor(e=[],t=ca,s,a,l,c,f,d,p,m){super(e,t,s,a,l,c,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CE extends gs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new i_(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new _a(5,5,5),l=new Vi({name:"CubemapFromEquirect",uniforms:ha(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:Bi});l.uniforms.tEquirect.value=t;const c=new Lr(a,l),f=t.minFilter;return t.minFilter===hs&&(t.minFilter=Pr),new AE(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}class io extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bE={type:"move"};class kf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,s),x=this._getHandJoint(p,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=m.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(bE)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new io;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class PE extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bf=new ne,LE=new ne,DE=new ht;class us{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Bf.subVectors(s,t).cross(LE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Bf),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||DE.getNormalMatrix(e),a=this.coplanarPoint(Bf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new oh,UE=new Pt(.5,.5),Jl=new ne;class uh{constructor(e=new us,t=new us,s=new us,a=new us,l=new us,c=new us){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=ei){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],d=a[3],p=a[4],m=a[5],v=a[6],_=a[7],S=a[8],E=a[9],w=a[10],y=a[11],x=a[12],L=a[13],P=a[14],C=a[15];if(s[0].setComponents(d-l,_-p,y-S,C-x).normalize(),s[1].setComponents(d+l,_+p,y+S,C+x).normalize(),s[2].setComponents(d+c,_+m,y+E,C+L).normalize(),s[3].setComponents(d-c,_-m,y-E,C-L).normalize(),s[4].setComponents(d-f,_-v,y-w,C-P).normalize(),t===ei)s[5].setComponents(d+f,_+v,y+w,C+P).normalize();else if(t===yu)s[5].setComponents(f,v,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const t=UE.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Jl.x=a.normal.x>0?e.max.x:e.min.x,Jl.y=a.normal.y>0?e.max.y:e.min.y,Jl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class s_ extends On{constructor(e,t,s=ms,a,l,c,f=vn,d=vn,p,m=po,v=1){if(m!==po&&m!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,a,l,c,f,d,m,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ah(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cu extends vs{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),d=Math.floor(a),p=f+1,m=d+1,v=e/f,_=t/d,S=[],E=[],w=[],y=[];for(let x=0;x<m;x++){const L=x*_-c;for(let P=0;P<p;P++){const C=P*v-l;E.push(C,-L,0),w.push(0,0,1),y.push(P/f),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let L=0;L<f;L++){const P=L+p*x,C=L+p*(x+1),k=L+1+p*(x+1),N=L+1+p*x;S.push(P,C,N),S.push(C,k,N)}this.setIndex(S),this.setAttribute("position",new ps(E,3)),this.setAttribute("normal",new ps(w,3)),this.setAttribute("uv",new ps(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.width,e.height,e.widthSegments,e.heightSegments)}}class NE extends Au{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IE extends Au{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class FE{constructor(e,t,s){const a=this;let l=!1,c=0,f=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){f++,l===!1&&a.onStart!==void 0&&a.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,v){return p.push(m,v),this},this.removeHandler=function(m){const v=p.indexOf(m);return v!==-1&&p.splice(v,2),this},this.getHandler=function(m){for(let v=0,_=p.length;v<_;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(m))return E}return null}}}const OE=new FE;class ch{constructor(e){this.manager=e!==void 0?e:OE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,l){s.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ch.DEFAULT_MATERIAL_NAME="__DEFAULT";const ea=new WeakMap;class kE extends ch{constructor(e){super(e)}load(e,t,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=zf.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let v=ea.get(c);v===void 0&&(v=[],ea.set(c,v)),v.push({onLoad:t,onError:a})}return c}const f=vo("img");function d(){m(),t&&t(this);const v=ea.get(this)||[];for(let _=0;_<v.length;_++){const S=v[_];S.onLoad&&S.onLoad(this)}ea.delete(this),l.manager.itemEnd(e)}function p(v){m(),a&&a(v),zf.remove(`image:${e}`);const _=ea.get(this)||[];for(let S=0;S<_.length;S++){const E=_[S];E.onError&&E.onError(v)}ea.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),zf.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class BE extends ch{constructor(e){super(e)}load(e,t,s,a){const l=new On,c=new kE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,a),l}}class zE extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Hf=new qt,Mg=new ne,wg=new ne;class HE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=Ir,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uh,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Mg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mg),wg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wg),t.updateMatrixWorld(),Hf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hf),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Hf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class a_ extends r_{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class VE extends HE{constructor(){super(new a_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class GE extends zE{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new VE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class WE extends ar{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Tg(r,e,t,s){const a=XE(s);switch(t){case Wv:return r*e;case jv:return r*e/a.components*a.byteLength;case nh:return r*e/a.components*a.byteLength;case $v:return r*e*2/a.components*a.byteLength;case rh:return r*e*2/a.components*a.byteLength;case Xv:return r*e*3/a.components*a.byteLength;case _r:return r*e*4/a.components*a.byteLength;case ih:return r*e*4/a.components*a.byteLength;case uu:case cu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fu:case du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case md:case vd:return Math.max(r,16)*Math.max(e,8)/4;case pd:case gd:return Math.max(r,8)*Math.max(e,8)/2;case _d:case xd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case yd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Md:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case wd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Td:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case bd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Nd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case hu:case Id:case Fd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Yv:case Od:return Math.ceil(r/4)*Math.ceil(e/4)*8;case kd:case Bd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function XE(r){switch(r){case Ir:case Hv:return{byteLength:1,components:1};case fo:case Vv:case Eo:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case ms:case Qd:case Qr:return{byteLength:4,components:1};case Gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);function o_(){let r=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function jE(r){const e=new WeakMap;function t(f,d){const p=f.array,m=f.usage,v=p.byteLength,_=r.createBuffer();r.bindBuffer(d,_),r.bufferData(d,p,m),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,d,p){const m=d.array,v=d.updateRanges;if(r.bindBuffer(p,f),v.length===0)r.bufferSubData(p,0,m);else{v.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<v.length;S++){const E=v[_],w=v[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++_,v[_]=w)}v.length=_+1;for(let S=0,E=v.length;S<E;S++){const w=v[S];r.bufferSubData(p,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(r.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,d),p.version=f.version}}return{get:a,remove:l,update:c}}var $E=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YE=`#ifdef USE_ALPHAHASH
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
#endif`,qE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QE=`#ifdef USE_AOMAP
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
#endif`,eM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tM=`#ifdef USE_BATCHING
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
#endif`,nM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aM=`#ifdef USE_IRIDESCENCE
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
#endif`,oM=`#ifdef USE_BUMPMAP
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
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gM=`#define PI 3.141592653589793
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
} // validated`,vM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_M=`vec3 transformedNormal = objectNormal;
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
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,CM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NM=`#ifdef USE_GRADIENTMAP
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
}`,IM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kM=`uniform bool receiveShadow;
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
#endif`,BM=`#ifdef USE_ENVMAP
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
#endif`,zM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WM=`PhysicalMaterial material;
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
#endif`,XM=`struct PhysicalMaterial {
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
}`,jM=`
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
#endif`,$M=`#if defined( RE_IndirectDiffuse )
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
#endif`,YM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ew=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nw=`#if defined( USE_POINTS_UV )
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
#endif`,rw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ow=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lw=`#ifdef USE_MORPHTARGETS
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
#endif`,uw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mw=`#ifdef USE_NORMALMAP
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
#endif`,gw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_w=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Aw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lw=`float getShadowMask() {
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
}`,Dw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uw=`#ifdef USE_SKINNING
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
#endif`,Nw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iw=`#ifdef USE_SKINNING
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
#endif`,Fw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ow=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zw=`#ifdef USE_TRANSMISSION
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
#endif`,Hw=`#ifdef USE_TRANSMISSION
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
#endif`,Vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$w=`uniform sampler2D t2D;
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
}`,Yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jw=`#include <common>
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
}`,Qw=`#if DEPTH_PACKING == 3200
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
}`,eT=`#define DISTANCE
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
}`,tT=`#define DISTANCE
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`uniform float scale;
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
}`,sT=`uniform vec3 diffuse;
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
}`,aT=`#include <common>
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#define LAMBERT
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
}`,uT=`#define LAMBERT
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
}`,cT=`#define MATCAP
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
}`,fT=`#define MATCAP
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
}`,dT=`#define NORMAL
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
}`,hT=`#define NORMAL
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
}`,pT=`#define PHONG
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
}`,mT=`#define PHONG
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
}`,gT=`#define STANDARD
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
}`,vT=`#define STANDARD
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
}`,_T=`#define TOON
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
}`,xT=`#define TOON
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
}`,yT=`uniform float size;
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
}`,ST=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,MT=`uniform vec3 color;
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
}`,wT=`uniform float rotation;
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
}`,TT=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:$E,alphahash_pars_fragment:YE,alphamap_fragment:qE,alphamap_pars_fragment:KE,alphatest_fragment:ZE,alphatest_pars_fragment:JE,aomap_fragment:QE,aomap_pars_fragment:eM,batching_pars_vertex:tM,batching_vertex:nM,begin_vertex:rM,beginnormal_vertex:iM,bsdfs:sM,iridescence_fragment:aM,bumpmap_pars_fragment:oM,clipping_planes_fragment:lM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:cM,clipping_planes_vertex:fM,color_fragment:dM,color_pars_fragment:hM,color_pars_vertex:pM,color_vertex:mM,common:gM,cube_uv_reflection_fragment:vM,defaultnormal_vertex:_M,displacementmap_pars_vertex:xM,displacementmap_vertex:yM,emissivemap_fragment:SM,emissivemap_pars_fragment:EM,colorspace_fragment:MM,colorspace_pars_fragment:wM,envmap_fragment:TM,envmap_common_pars_fragment:RM,envmap_pars_fragment:AM,envmap_pars_vertex:CM,envmap_physical_pars_fragment:BM,envmap_vertex:bM,fog_vertex:PM,fog_pars_vertex:LM,fog_fragment:DM,fog_pars_fragment:UM,gradientmap_pars_fragment:NM,lightmap_pars_fragment:IM,lights_lambert_fragment:FM,lights_lambert_pars_fragment:OM,lights_pars_begin:kM,lights_toon_fragment:zM,lights_toon_pars_fragment:HM,lights_phong_fragment:VM,lights_phong_pars_fragment:GM,lights_physical_fragment:WM,lights_physical_pars_fragment:XM,lights_fragment_begin:jM,lights_fragment_maps:$M,lights_fragment_end:YM,logdepthbuf_fragment:qM,logdepthbuf_pars_fragment:KM,logdepthbuf_pars_vertex:ZM,logdepthbuf_vertex:JM,map_fragment:QM,map_pars_fragment:ew,map_particle_fragment:tw,map_particle_pars_fragment:nw,metalnessmap_fragment:rw,metalnessmap_pars_fragment:iw,morphinstance_vertex:sw,morphcolor_vertex:aw,morphnormal_vertex:ow,morphtarget_pars_vertex:lw,morphtarget_vertex:uw,normal_fragment_begin:cw,normal_fragment_maps:fw,normal_pars_fragment:dw,normal_pars_vertex:hw,normal_vertex:pw,normalmap_pars_fragment:mw,clearcoat_normal_fragment_begin:gw,clearcoat_normal_fragment_maps:vw,clearcoat_pars_fragment:_w,iridescence_pars_fragment:xw,opaque_fragment:yw,packing:Sw,premultiplied_alpha_fragment:Ew,project_vertex:Mw,dithering_fragment:ww,dithering_pars_fragment:Tw,roughnessmap_fragment:Rw,roughnessmap_pars_fragment:Aw,shadowmap_pars_fragment:Cw,shadowmap_pars_vertex:bw,shadowmap_vertex:Pw,shadowmask_pars_fragment:Lw,skinbase_vertex:Dw,skinning_pars_vertex:Uw,skinning_vertex:Nw,skinnormal_vertex:Iw,specularmap_fragment:Fw,specularmap_pars_fragment:Ow,tonemapping_fragment:kw,tonemapping_pars_fragment:Bw,transmission_fragment:zw,transmission_pars_fragment:Hw,uv_pars_fragment:Vw,uv_pars_vertex:Gw,uv_vertex:Ww,worldpos_vertex:Xw,background_vert:jw,background_frag:$w,backgroundCube_vert:Yw,backgroundCube_frag:qw,cube_vert:Kw,cube_frag:Zw,depth_vert:Jw,depth_frag:Qw,distanceRGBA_vert:eT,distanceRGBA_frag:tT,equirect_vert:nT,equirect_frag:rT,linedashed_vert:iT,linedashed_frag:sT,meshbasic_vert:aT,meshbasic_frag:oT,meshlambert_vert:lT,meshlambert_frag:uT,meshmatcap_vert:cT,meshmatcap_frag:fT,meshnormal_vert:dT,meshnormal_frag:hT,meshphong_vert:pT,meshphong_frag:mT,meshphysical_vert:gT,meshphysical_frag:vT,meshtoon_vert:_T,meshtoon_frag:xT,points_vert:yT,points_frag:ST,shadow_vert:ET,shadow_frag:MT,sprite_vert:wT,sprite_frag:TT},Fe={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ar={basic:{uniforms:Nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Nn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Nn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Nn([Fe.points,Fe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Nn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Nn([Fe.common,Fe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Nn([Fe.sprite,Fe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Nn([Fe.common,Fe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Nn([Fe.lights,Fe.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ar.physical={uniforms:Nn([Ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Ql={r:0,b:0,g:0},os=new Fn,RT=new qt;function AT(r,e,t,s,a,l,c){const f=new Dt(0);let d=l===!0?0:1,p,m,v=null,_=0,S=null;function E(P){let C=P.isScene===!0?P.background:null;return C&&C.isTexture&&(C=(P.backgroundBlurriness>0?t:e).get(C)),C}function w(P){let C=!1;const k=E(P);k===null?x(f,d):k&&k.isColor&&(x(k,1),C=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(P,C){const k=E(C);k&&(k.isCubeTexture||k.mapping===Ru)?(m===void 0&&(m=new Lr(new _a(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:ha(Ar.backgroundCube.uniforms),vertexShader:Ar.backgroundCube.vertexShader,fragmentShader:Ar.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),os.copy(C.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),m.material.uniforms.envMap.value=k,m.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(RT.makeRotationFromEuler(os)),m.material.toneMapped=At.getTransfer(k.colorSpace)!==Nt,(v!==k||_!==k.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,v=k,_=k.version,S=r.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new Lr(new Cu(2,2),new Vi({name:"BackgroundMaterial",uniforms:ha(Ar.background.uniforms),vertexShader:Ar.background.vertexShader,fragmentShader:Ar.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=At.getTransfer(k.colorSpace)!==Nt,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(v!==k||_!==k.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,v=k,_=k.version,S=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,C){P.getRGB(Ql,n_(r)),s.buffers.color.setClear(Ql.r,Ql.g,Ql.b,C,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,C=1){f.set(P),d=C,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,x(f,d)},render:w,addToRenderList:y,dispose:L}}function CT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=_(null);let l=a,c=!1;function f(R,H,se,Z,ue){let pe=!1;const ce=v(Z,se,H);l!==ce&&(l=ce,p(l.object)),pe=S(R,Z,se,ue),pe&&E(R,Z,se,ue),ue!==null&&e.update(ue,r.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,C(R,H,se,Z),ue!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function d(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function m(R){return r.deleteVertexArray(R)}function v(R,H,se){const Z=se.wireframe===!0;let ue=s[R.id];ue===void 0&&(ue={},s[R.id]=ue);let pe=ue[H.id];pe===void 0&&(pe={},ue[H.id]=pe);let ce=pe[Z];return ce===void 0&&(ce=_(d()),pe[Z]=ce),ce}function _(R){const H=[],se=[],Z=[];for(let ue=0;ue<t;ue++)H[ue]=0,se[ue]=0,Z[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:se,attributeDivisors:Z,object:R,attributes:{},index:null}}function S(R,H,se,Z){const ue=l.attributes,pe=H.attributes;let ce=0;const ve=se.getAttributes();for(const z in ve)if(ve[z].location>=0){const fe=ue[z];let I=pe[z];if(I===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),fe===void 0||fe.attribute!==I||I&&fe.data!==I.data)return!0;ce++}return l.attributesNum!==ce||l.index!==Z}function E(R,H,se,Z){const ue={},pe=H.attributes;let ce=0;const ve=se.getAttributes();for(const z in ve)if(ve[z].location>=0){let fe=pe[z];fe===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor));const I={};I.attribute=fe,fe&&fe.data&&(I.data=fe.data),ue[z]=I,ce++}l.attributes=ue,l.attributesNum=ce,l.index=Z}function w(){const R=l.newAttributes;for(let H=0,se=R.length;H<se;H++)R[H]=0}function y(R){x(R,0)}function x(R,H){const se=l.newAttributes,Z=l.enabledAttributes,ue=l.attributeDivisors;se[R]=1,Z[R]===0&&(r.enableVertexAttribArray(R),Z[R]=1),ue[R]!==H&&(r.vertexAttribDivisor(R,H),ue[R]=H)}function L(){const R=l.newAttributes,H=l.enabledAttributes;for(let se=0,Z=H.length;se<Z;se++)H[se]!==R[se]&&(r.disableVertexAttribArray(se),H[se]=0)}function P(R,H,se,Z,ue,pe,ce){ce===!0?r.vertexAttribIPointer(R,H,se,ue,pe):r.vertexAttribPointer(R,H,se,Z,ue,pe)}function C(R,H,se,Z){w();const ue=Z.attributes,pe=se.getAttributes(),ce=H.defaultAttributeValues;for(const ve in pe){const z=pe[ve];if(z.location>=0){let he=ue[ve];if(he===void 0&&(ve==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),ve==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),he!==void 0){const fe=he.normalized,I=he.itemSize,re=e.get(he);if(re===void 0)continue;const Ce=re.buffer,te=re.type,ge=re.bytesPerElement,j=te===r.INT||te===r.UNSIGNED_INT||he.gpuType===Qd;if(he.isInterleavedBufferAttribute){const le=he.data,oe=le.stride,Le=he.offset;if(le.isInstancedInterleavedBuffer){for(let be=0;be<z.locationSize;be++)x(z.location+be,le.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let be=0;be<z.locationSize;be++)y(z.location+be);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let be=0;be<z.locationSize;be++)P(z.location+be,I/z.locationSize,te,fe,oe*ge,(Le+I/z.locationSize*be)*ge,j)}else{if(he.isInstancedBufferAttribute){for(let le=0;le<z.locationSize;le++)x(z.location+le,he.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let le=0;le<z.locationSize;le++)y(z.location+le);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let le=0;le<z.locationSize;le++)P(z.location+le,I/z.locationSize,te,fe,I*ge,I/z.locationSize*le*ge,j)}}else if(ce!==void 0){const fe=ce[ve];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(z.location,fe);break;case 3:r.vertexAttrib3fv(z.location,fe);break;case 4:r.vertexAttrib4fv(z.location,fe);break;default:r.vertexAttrib1fv(z.location,fe)}}}}L()}function k(){X();for(const R in s){const H=s[R];for(const se in H){const Z=H[se];for(const ue in Z)m(Z[ue].object),delete Z[ue];delete H[se]}delete s[R]}}function N(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const se in H){const Z=H[se];for(const ue in Z)m(Z[ue].object),delete Z[ue];delete H[se]}delete s[R.id]}function F(R){for(const H in s){const se=s[H];if(se[R.id]===void 0)continue;const Z=se[R.id];for(const ue in Z)m(Z[ue].object),delete Z[ue];delete se[R.id]}}function X(){b(),c=!0,l!==a&&(l=a,p(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:b,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}function bT(r,e,t){let s;function a(p){s=p}function l(p,m){r.drawArrays(s,p,m),t.update(m,s,1)}function c(p,m,v){v!==0&&(r.drawArraysInstanced(s,p,m,v),t.update(m,s,v))}function f(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,v);let S=0;for(let E=0;E<v;E++)S+=m[E];t.update(S,s,1)}function d(p,m,v,_){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],m[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,m,0,_,0,v);let E=0;for(let w=0;w<v;w++)E+=m[w]*_[w];t.update(E,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function PT(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==_r&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const X=F===Eo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ir&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Qr&&!X)}function d(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=d(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const v=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:C,vertexTextures:k,maxSamples:N}}function LT(r){const e=this;let t=null,s=0,a=!1,l=!1;const c=new us,f=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||s!==0||a;return a=_,s=v.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=m(v,_,0)},this.setState=function(v,_,S){const E=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,x=r.get(v);if(!a||E===null||E.length===0||l&&!y)l?m(null):p();else{const L=l?0:s,P=L*4;let C=x.clippingState||null;d.value=C,C=m(E,_,P,S);for(let k=0;k!==P;++k)C[k]=t[k];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(v,_,S,E){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=d.value,E!==!0||y===null){const x=S+w*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,C=S;P!==w;++P,C+=4)c.copy(v[P]).applyMatrix4(L,f),c.normal.toArray(y,C),y[C+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function DT(r){let e=new WeakMap;function t(c,f){return f===fd?c.mapping=ca:f===dd&&(c.mapping=fa),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===fd||f===dd)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new CE(d.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const ia=4,Rg=[.125,.215,.35,.446,.526,.582],ds=20,Vf=new a_,Ag=new Dt;let Gf=null,Wf=0,Xf=0,jf=!1;const cs=(1+Math.sqrt(5))/2,ta=1/cs,Cg=[new ne(-cs,ta,0),new ne(cs,ta,0),new ne(-ta,0,cs),new ne(ta,0,cs),new ne(0,cs,-ta),new ne(0,cs,ta),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],UT=new ne;class bg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100,l={}){const{size:c=256,position:f=UT}=l;Gf=this._renderer.getRenderTarget(),Wf=this._renderer.getActiveCubeFace(),Xf=this._renderer.getActiveMipmapLevel(),jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,s,a,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gf,Wf,Xf),this._renderer.xr.enabled=jf,e.scissorTest=!1,eu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ca||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gf=this._renderer.getRenderTarget(),Wf=this._renderer.getActiveCubeFace(),Xf=this._renderer.getActiveMipmapLevel(),jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Pr,minFilter:Pr,generateMipmaps:!1,type:Eo,format:_r,colorSpace:da,depthBuffer:!1},a=Pg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NT(l)),this._blurMaterial=IT(l,e,t)}return a}_compileMaterial(e){const t=new Lr(this._lodPlanes[0],e);this._renderer.compile(t,Vf)}_sceneToCubeUV(e,t,s,a,l){const d=new ar(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(Ag),v.toneMapping=ti,v.autoClear=!1;const E=new lh({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),w=new Lr(new _a,E);let y=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,y=!0):(E.color.copy(Ag),y=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[L],l.y,l.z)):P===1?(d.up.set(0,0,p[L]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[L],l.z)):(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[L]));const C=this._cubeSize;eu(a,P*C,L>2?C:0,C,C),v.setRenderTarget(a),y&&v.render(w,d),v.render(e,d)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=S,v.autoClear=_,e.background=x}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===ca||e.mapping===fa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Lr(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;eu(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(c,Vf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Cg[(a-l-1)%Cg.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Lr(this._lodPlanes[a],p),_=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ds-1),w=l/E,y=isFinite(l)?1+Math.floor(m*w):ds;y>ds&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ds}`);const x=[];let L=0;for(let F=0;F<ds;++F){const X=F/w,b=Math.exp(-X*X/2);x.push(b),F===0?L+=b:F<y&&(L+=2*b)}for(let F=0;F<x.length;F++)x[F]=x[F]/L;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:P}=this;_.dTheta.value=E,_.mipInt.value=P-s;const C=this._sizeLods[a],k=3*C*(a>P-ia?a-P+ia:0),N=4*(this._cubeSize-C);eu(t,k,N,3*C,2*C),d.setRenderTarget(t),d.render(v,Vf)}}function NT(r){const e=[],t=[],s=[];let a=r;const l=r-ia+1+Rg.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let d=1/f;c>r-ia?d=Rg[c-r+ia-1]:c===0&&(d=0),s.push(d);const p=1/(f-2),m=-p,v=1+p,_=[m,m,v,m,v,v,m,m,v,v,m,v],S=6,E=6,w=3,y=2,x=1,L=new Float32Array(w*E*S),P=new Float32Array(y*E*S),C=new Float32Array(x*E*S);for(let N=0;N<S;N++){const F=N%3*2/3-1,X=N>2?0:-1,b=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];L.set(b,w*E*N),P.set(_,y*E*N);const R=[N,N,N,N,N,N];C.set(R,x*E*N)}const k=new vs;k.setAttribute("position",new Ur(L,w)),k.setAttribute("uv",new Ur(P,y)),k.setAttribute("faceIndex",new Ur(C,x)),e.push(k),a>ia&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Pg(r,e,t){const s=new gs(r,e,t);return s.texture.mapping=Ru,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function eu(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function IT(r,e,t){const s=new Float32Array(ds),a=new ne(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Lg(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Dg(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function FT(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const d=f.mapping,p=d===fd||d===dd,m=d===ca||d===fa;if(p||m){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new bg(r)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||m&&S&&a(S)?(t===null&&(t=new bg(r)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function OT(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&aa("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function kT(r,e,t,s){const a={},l=new WeakMap;function c(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete a[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(v,_){return a[_.id]===!0||(_.addEventListener("dispose",c),a[_.id]=!0,t.memory.geometries++),_}function d(v){const _=v.attributes;for(const S in _)e.update(_[S],r.ARRAY_BUFFER)}function p(v){const _=[],S=v.index,E=v.attributes.position;let w=0;if(S!==null){const L=S.array;w=S.version;for(let P=0,C=L.length;P<C;P+=3){const k=L[P+0],N=L[P+1],F=L[P+2];_.push(k,N,N,F,F,k)}}else if(E!==void 0){const L=E.array;w=E.version;for(let P=0,C=L.length/3-1;P<C;P+=3){const k=P+0,N=P+1,F=P+2;_.push(k,N,N,F,F,k)}}else return;const y=new(Kv(_)?t_:e_)(_,1);y.version=w;const x=l.get(v);x&&e.remove(x),l.set(v,y)}function m(v){const _=l.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function BT(r,e,t){let s;function a(_){s=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function d(_,S){r.drawElements(s,S,l,_*c),t.update(S,s,1)}function p(_,S,E){E!==0&&(r.drawElementsInstanced(s,S,l,_*c,E),t.update(S,s,E))}function m(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,_,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];t.update(y,s,1)}function v(_,S,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)p(_[x]/c,S[x],w[x]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,_,0,w,0,E);let x=0;for(let L=0;L<E;L++)x+=S[L]*w[L];t.update(x,s,1)}}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function zT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function HT(r,e,t){const s=new WeakMap,a=new Yt;function l(c,f,d){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let _=s.get(f);if(_===void 0||_.count!==v){let b=function(){F.dispose(),s.delete(f),f.removeEventListener("dispose",b)};_!==void 0&&_.texture.dispose();const S=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;S===!0&&(P=1),E===!0&&(P=2),w===!0&&(P=3);let C=f.attributes.position.count*P,k=1;C>e.maxTextureSize&&(k=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const N=new Float32Array(C*k*4*v),F=new Zv(N,C,k,v);F.type=Qr,F.needsUpdate=!0;const X=P*4;for(let R=0;R<v;R++){const H=y[R],se=x[R],Z=L[R],ue=C*k*4*R;for(let pe=0;pe<H.count;pe++){const ce=pe*X;S===!0&&(a.fromBufferAttribute(H,pe),N[ue+ce+0]=a.x,N[ue+ce+1]=a.y,N[ue+ce+2]=a.z,N[ue+ce+3]=0),E===!0&&(a.fromBufferAttribute(se,pe),N[ue+ce+4]=a.x,N[ue+ce+5]=a.y,N[ue+ce+6]=a.z,N[ue+ce+7]=0),w===!0&&(a.fromBufferAttribute(Z,pe),N[ue+ce+8]=a.x,N[ue+ce+9]=a.y,N[ue+ce+10]=a.z,N[ue+ce+11]=Z.itemSize===4?a.w:1)}}_={count:v,texture:F,size:new Pt(C,k)},s.set(f,_),f.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let S=0;for(let w=0;w<p.length;w++)S+=p[w];const E=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",p)}d.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:l}}function VT(r,e,t,s){let a=new WeakMap;function l(d){const p=s.render.frame,m=d.geometry,v=e.get(d,m);if(a.get(v)!==p&&(e.update(v),a.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==p&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),a.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return v}function c(){a=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const l_=new On,Ug=new s_(1,1),u_=new Zv,c_=new cE,f_=new i_,Ng=[],Ig=[],Fg=new Float32Array(16),Og=new Float32Array(9),kg=new Float32Array(4);function xa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=Ng[a];if(l===void 0&&(l=new Float32Array(a),Ng[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function rn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function sn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function bu(r,e){let t=Ig[e];t===void 0&&(t=new Int32Array(e),Ig[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function GT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function WT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2fv(this.addr,e),sn(t,e)}}function XT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;r.uniform3fv(this.addr,e),sn(t,e)}}function jT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4fv(this.addr,e),sn(t,e)}}function $T(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(rn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,s))return;kg.set(s),r.uniformMatrix2fv(this.addr,!1,kg),sn(t,s)}}function YT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(rn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,s))return;Og.set(s),r.uniformMatrix3fv(this.addr,!1,Og),sn(t,s)}}function qT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(rn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,s))return;Fg.set(s),r.uniformMatrix4fv(this.addr,!1,Fg),sn(t,s)}}function KT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ZT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2iv(this.addr,e),sn(t,e)}}function JT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3iv(this.addr,e),sn(t,e)}}function QT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4iv(this.addr,e),sn(t,e)}}function e1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function t1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2uiv(this.addr,e),sn(t,e)}}function n1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3uiv(this.addr,e),sn(t,e)}}function r1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4uiv(this.addr,e),sn(t,e)}}function i1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Ug.compareFunction=qv,l=Ug):l=l_,t.setTexture2D(e||l,a)}function s1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||c_,a)}function a1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||f_,a)}function o1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||u_,a)}function l1(r){switch(r){case 5126:return GT;case 35664:return WT;case 35665:return XT;case 35666:return jT;case 35674:return $T;case 35675:return YT;case 35676:return qT;case 5124:case 35670:return KT;case 35667:case 35671:return ZT;case 35668:case 35672:return JT;case 35669:case 35673:return QT;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return o1}}function u1(r,e){r.uniform1fv(this.addr,e)}function c1(r,e){const t=xa(e,this.size,2);r.uniform2fv(this.addr,t)}function f1(r,e){const t=xa(e,this.size,3);r.uniform3fv(this.addr,t)}function d1(r,e){const t=xa(e,this.size,4);r.uniform4fv(this.addr,t)}function h1(r,e){const t=xa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function p1(r,e){const t=xa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function m1(r,e){const t=xa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function g1(r,e){r.uniform1iv(this.addr,e)}function v1(r,e){r.uniform2iv(this.addr,e)}function _1(r,e){r.uniform3iv(this.addr,e)}function x1(r,e){r.uniform4iv(this.addr,e)}function y1(r,e){r.uniform1uiv(this.addr,e)}function S1(r,e){r.uniform2uiv(this.addr,e)}function E1(r,e){r.uniform3uiv(this.addr,e)}function M1(r,e){r.uniform4uiv(this.addr,e)}function w1(r,e,t){const s=this.cache,a=e.length,l=bu(t,a);rn(s,l)||(r.uniform1iv(this.addr,l),sn(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||l_,l[c])}function T1(r,e,t){const s=this.cache,a=e.length,l=bu(t,a);rn(s,l)||(r.uniform1iv(this.addr,l),sn(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||c_,l[c])}function R1(r,e,t){const s=this.cache,a=e.length,l=bu(t,a);rn(s,l)||(r.uniform1iv(this.addr,l),sn(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||f_,l[c])}function A1(r,e,t){const s=this.cache,a=e.length,l=bu(t,a);rn(s,l)||(r.uniform1iv(this.addr,l),sn(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||u_,l[c])}function C1(r){switch(r){case 5126:return u1;case 35664:return c1;case 35665:return f1;case 35666:return d1;case 35674:return h1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return v1;case 35668:case 35672:return _1;case 35669:case 35673:return x1;case 5125:return y1;case 36294:return S1;case 36295:return E1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return A1}}class b1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=l1(t.type)}}class P1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C1(t.type)}}class L1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const $f=/(\w+)(\])?(\[|\.)?/g;function Bg(r,e){r.seq.push(e),r.map[e.id]=e}function D1(r,e,t){const s=r.name,a=s.length;for($f.lastIndex=0;;){const l=$f.exec(s),c=$f.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===a){Bg(t,p===void 0?new b1(f,r,e):new P1(f,r,e));break}else{let v=t.map[f];v===void 0&&(v=new L1(f),Bg(t,v)),t=v}}}class pu{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);D1(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=s[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function zg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const U1=37297;let N1=0;function I1(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const Hg=new ht;function F1(r){At._getMatrix(Hg,At.workingColorSpace,r);const e=`mat3( ${Hg.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(r)){case xu:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Vg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+I1(r.getShaderSource(e),c)}else return a}function O1(r,e){const t=F1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function k1(r,e){let t;switch(e){case xS:t="Linear";break;case yS:t="Reinhard";break;case SS:t="Cineon";break;case ES:t="ACESFilmic";break;case wS:t="AgX";break;case TS:t="Neutral";break;case MS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tu=new ne;function B1(){At.getLuminanceCoefficients(tu);const r=tu.x.toFixed(4),e=tu.y.toFixed(4),t=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function H1(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function V1(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function so(r){return r!==""}function Gg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G1=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(r){return r.replace(G1,X1)}const W1=new Map;function X1(r,e){let t=gt[e];if(t===void 0){const s=W1.get(e);if(s!==void 0)t=gt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return zd(t)}const j1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xg(r){return r.replace(j1,$1)}function $1(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function jg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Y1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Jy?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Kr&&(e="SHADOWMAP_TYPE_VSM"),e}function q1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ca:case fa:e="ENVMAP_TYPE_CUBE";break;case Ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K1(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===fa&&(e="ENVMAP_MODE_REFRACTION"),e}function Z1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Bv:e="ENVMAP_BLENDING_MULTIPLY";break;case vS:e="ENVMAP_BLENDING_MIX";break;case _S:e="ENVMAP_BLENDING_ADD";break}return e}function J1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function Q1(r,e,t,s){const a=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=Y1(t),p=q1(t),m=K1(t),v=Z1(t),_=J1(t),S=z1(t),E=H1(l),w=a.createProgram();let y,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(so).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(so).join(`
`),x.length>0&&(x+=`
`)):(y=[jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),x=[jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?gt.tonemapping_pars_fragment:"",t.toneMapping!==ti?k1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,O1("linearToOutputTexel",t.outputColorSpace),B1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),c=zd(c),c=Gg(c,t),c=Wg(c,t),f=zd(f),f=Gg(f,t),f=Wg(f,t),c=Xg(c),f=Xg(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=L+y+c,C=L+x+f,k=zg(a,a.VERTEX_SHADER,P),N=zg(a,a.FRAGMENT_SHADER,C);a.attachShader(w,k),a.attachShader(w,N),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(H){if(r.debug.checkShaderErrors){const se=a.getProgramInfoLog(w).trim(),Z=a.getShaderInfoLog(k).trim(),ue=a.getShaderInfoLog(N).trim();let pe=!0,ce=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(pe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,k,N);else{const ve=Vg(a,k,"vertex"),z=Vg(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+se+`
`+ve+`
`+z)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(Z===""||ue==="")&&(ce=!1);ce&&(H.diagnostics={runnable:pe,programLog:se,vertexShader:{log:Z,prefix:y},fragmentShader:{log:ue,prefix:x}})}a.deleteShader(k),a.deleteShader(N),X=new pu(a,w),b=V1(a,w)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,U1)),R},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=N,this}let eR=0;class tR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new nR(e),t.set(e,s)),s}}class nR{constructor(e){this.id=eR++,this.code=e,this.usedTimes=0}}function rR(r,e,t,s,a,l,c){const f=new Jv,d=new tR,p=new Set,m=[],v=a.logarithmicDepthBuffer,_=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function y(b,R,H,se,Z){const ue=se.fog,pe=Z.geometry,ce=b.isMeshStandardMaterial?se.environment:null,ve=(b.isMeshStandardMaterial?t:e).get(b.envMap||ce),z=ve&&ve.mapping===Ru?ve.image.height:null,he=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const fe=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,I=fe!==void 0?fe.length:0;let re=0;pe.morphAttributes.position!==void 0&&(re=1),pe.morphAttributes.normal!==void 0&&(re=2),pe.morphAttributes.color!==void 0&&(re=3);let Ce,te,ge,j;if(he){const Be=Ar[he];Ce=Be.vertexShader,te=Be.fragmentShader}else Ce=b.vertexShader,te=b.fragmentShader,d.update(b),ge=d.getVertexShaderID(b),j=d.getFragmentShaderID(b);const le=r.getRenderTarget(),oe=r.state.buffers.depth.getReversed(),Le=Z.isInstancedMesh===!0,be=Z.isBatchedMesh===!0,it=!!b.map,ft=!!b.matcap,dt=!!ve,O=!!b.aoMap,Ht=!!b.lightMap,vt=!!b.bumpMap,Et=!!b.normalMap,Xe=!!b.displacementMap,pt=!!b.emissiveMap,Ke=!!b.metalnessMap,st=!!b.roughnessMap,It=b.anisotropy>0,D=b.clearcoat>0,T=b.dispersion>0,Q=b.iridescence>0,me=b.sheen>0,xe=b.transmission>0,de=It&&!!b.anisotropyMap,Ye=D&&!!b.clearcoatMap,Pe=D&&!!b.clearcoatNormalMap,ke=D&&!!b.clearcoatRoughnessMap,Ze=Q&&!!b.iridescenceMap,ye=Q&&!!b.iridescenceThicknessMap,Ue=me&&!!b.sheenColorMap,tt=me&&!!b.sheenRoughnessMap,Qe=!!b.specularMap,De=!!b.specularColorMap,at=!!b.specularIntensityMap,V=xe&&!!b.transmissionMap,Ne=xe&&!!b.thicknessMap,Se=!!b.gradientMap,Oe=!!b.alphaMap,we=b.alphaTest>0,_e=!!b.alphaHash,He=!!b.extensions;let ut=ti;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ut=r.toneMapping);const Ct={shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:Ce,fragmentShader:te,defines:b.defines,customVertexShaderID:ge,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:be,batchingColor:be&&Z._colorsTexture!==null,instancing:Le,instancingColor:Le&&Z.instanceColor!==null,instancingMorph:Le&&Z.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:da,alphaToCoverage:!!b.alphaToCoverage,map:it,matcap:ft,envMap:dt,envMapMode:dt&&ve.mapping,envMapCubeUVHeight:z,aoMap:O,lightMap:Ht,bumpMap:vt,normalMap:Et,displacementMap:_&&Xe,emissiveMap:pt,normalMapObjectSpace:Et&&b.normalMapType===PS,normalMapTangentSpace:Et&&b.normalMapType===bS,metalnessMap:Ke,roughnessMap:st,anisotropy:It,anisotropyMap:de,clearcoat:D,clearcoatMap:Ye,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ke,dispersion:T,iridescence:Q,iridescenceMap:Ze,iridescenceThicknessMap:ye,sheen:me,sheenColorMap:Ue,sheenRoughnessMap:tt,specularMap:Qe,specularColorMap:De,specularIntensityMap:at,transmission:xe,transmissionMap:V,thicknessMap:Ne,gradientMap:Se,opaque:b.transparent===!1&&b.blending===sa&&b.alphaToCoverage===!1,alphaMap:Oe,alphaTest:we,alphaHash:_e,combine:b.combine,mapUv:it&&w(b.map.channel),aoMapUv:O&&w(b.aoMap.channel),lightMapUv:Ht&&w(b.lightMap.channel),bumpMapUv:vt&&w(b.bumpMap.channel),normalMapUv:Et&&w(b.normalMap.channel),displacementMapUv:Xe&&w(b.displacementMap.channel),emissiveMapUv:pt&&w(b.emissiveMap.channel),metalnessMapUv:Ke&&w(b.metalnessMap.channel),roughnessMapUv:st&&w(b.roughnessMap.channel),anisotropyMapUv:de&&w(b.anisotropyMap.channel),clearcoatMapUv:Ye&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:tt&&w(b.sheenRoughnessMap.channel),specularMapUv:Qe&&w(b.specularMap.channel),specularColorMapUv:De&&w(b.specularColorMap.channel),specularIntensityMapUv:at&&w(b.specularIntensityMap.channel),transmissionMapUv:V&&w(b.transmissionMap.channel),thicknessMapUv:Ne&&w(b.thicknessMap.channel),alphaMapUv:Oe&&w(b.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(Et||It),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!pe.attributes.uv&&(it||Oe),fog:!!ue,useFog:b.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:oe,skinning:Z.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,decodeVideoTexture:it&&b.map.isVideoTexture===!0&&At.getTransfer(b.map.colorSpace)===Nt,decodeVideoTextureEmissive:pt&&b.emissiveMap.isVideoTexture===!0&&At.getTransfer(b.emissiveMap.colorSpace)===Nt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===br,flipSided:b.side===Wn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:He&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&b.extensions.multiDraw===!0||be)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ct.vertexUv1s=p.has(1),Ct.vertexUv2s=p.has(2),Ct.vertexUv3s=p.has(3),p.clear(),Ct}function x(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)R.push(H),R.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(L(R,b),P(R,b),R.push(r.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function L(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function P(b,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function C(b){const R=E[b.type];let H;if(R){const se=Ar[R];H=wE.clone(se.uniforms)}else H=b.uniforms;return H}function k(b,R){let H;for(let se=0,Z=m.length;se<Z;se++){const ue=m[se];if(ue.cacheKey===R){H=ue,++H.usedTimes;break}}return H===void 0&&(H=new Q1(r,R,b,l),m.push(H)),H}function N(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),b.destroy()}}function F(b){d.remove(b)}function X(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:k,releaseProgram:N,releaseShaderCache:F,programs:m,dispose:X}}function iR(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function a(c,f,d){r.get(c)[f]=d}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function sR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function $g(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yg(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(v,_,S,E,w,y){let x=r[e];return x===void 0?(x={id:v.id,object:v,geometry:_,material:S,groupOrder:E,renderOrder:v.renderOrder,z:w,group:y},r[e]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=w,x.group=y),e++,x}function f(v,_,S,E,w,y){const x=c(v,_,S,E,w,y);S.transmission>0?s.push(x):S.transparent===!0?a.push(x):t.push(x)}function d(v,_,S,E,w,y){const x=c(v,_,S,E,w,y);S.transmission>0?s.unshift(x):S.transparent===!0?a.unshift(x):t.unshift(x)}function p(v,_){t.length>1&&t.sort(v||sR),s.length>1&&s.sort(_||$g),a.length>1&&a.sort(_||$g)}function m(){for(let v=e,_=r.length;v<_;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:d,finish:m,sort:p}}function aR(){let r=new WeakMap;function e(s,a){const l=r.get(s);let c;return l===void 0?(c=new Yg,r.set(s,[c])):a>=l.length?(c=new Yg,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function oR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Dt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":t={color:new Dt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return r[e.id]=t,t}}}function lR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let uR=0;function cR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function fR(r){const e=new oR,t=lR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ne);const a=new ne,l=new qt,c=new qt;function f(p){let m=0,v=0,_=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let S=0,E=0,w=0,y=0,x=0,L=0,P=0,C=0,k=0,N=0,F=0;p.sort(cR);for(let b=0,R=p.length;b<R;b++){const H=p[b],se=H.color,Z=H.intensity,ue=H.distance,pe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=se.r*Z,v+=se.g*Z,_+=se.b*Z;else if(H.isLightProbe){for(let ce=0;ce<9;ce++)s.probe[ce].addScaledVector(H.sh.coefficients[ce],Z);F++}else if(H.isDirectionalLight){const ce=e.get(H);if(ce.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ve=H.shadow,z=t.get(H);z.shadowIntensity=ve.intensity,z.shadowBias=ve.bias,z.shadowNormalBias=ve.normalBias,z.shadowRadius=ve.radius,z.shadowMapSize=ve.mapSize,s.directionalShadow[S]=z,s.directionalShadowMap[S]=pe,s.directionalShadowMatrix[S]=H.shadow.matrix,L++}s.directional[S]=ce,S++}else if(H.isSpotLight){const ce=e.get(H);ce.position.setFromMatrixPosition(H.matrixWorld),ce.color.copy(se).multiplyScalar(Z),ce.distance=ue,ce.coneCos=Math.cos(H.angle),ce.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ce.decay=H.decay,s.spot[w]=ce;const ve=H.shadow;if(H.map&&(s.spotLightMap[k]=H.map,k++,ve.updateMatrices(H),H.castShadow&&N++),s.spotLightMatrix[w]=ve.matrix,H.castShadow){const z=t.get(H);z.shadowIntensity=ve.intensity,z.shadowBias=ve.bias,z.shadowNormalBias=ve.normalBias,z.shadowRadius=ve.radius,z.shadowMapSize=ve.mapSize,s.spotShadow[w]=z,s.spotShadowMap[w]=pe,C++}w++}else if(H.isRectAreaLight){const ce=e.get(H);ce.color.copy(se).multiplyScalar(Z),ce.halfWidth.set(H.width*.5,0,0),ce.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=ce,y++}else if(H.isPointLight){const ce=e.get(H);if(ce.color.copy(H.color).multiplyScalar(H.intensity),ce.distance=H.distance,ce.decay=H.decay,H.castShadow){const ve=H.shadow,z=t.get(H);z.shadowIntensity=ve.intensity,z.shadowBias=ve.bias,z.shadowNormalBias=ve.normalBias,z.shadowRadius=ve.radius,z.shadowMapSize=ve.mapSize,z.shadowCameraNear=ve.camera.near,z.shadowCameraFar=ve.camera.far,s.pointShadow[E]=z,s.pointShadowMap[E]=pe,s.pointShadowMatrix[E]=H.shadow.matrix,P++}s.point[E]=ce,E++}else if(H.isHemisphereLight){const ce=e.get(H);ce.skyColor.copy(H.color).multiplyScalar(Z),ce.groundColor.copy(H.groundColor).multiplyScalar(Z),s.hemi[x]=ce,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Fe.LTC_FLOAT_1,s.rectAreaLTC2=Fe.LTC_FLOAT_2):(s.rectAreaLTC1=Fe.LTC_HALF_1,s.rectAreaLTC2=Fe.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=v,s.ambient[2]=_;const X=s.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==w||X.rectAreaLength!==y||X.hemiLength!==x||X.numDirectionalShadows!==L||X.numPointShadows!==P||X.numSpotShadows!==C||X.numSpotMaps!==k||X.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=y,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=C+k-N,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=F,X.directionalLength=S,X.pointLength=E,X.spotLength=w,X.rectAreaLength=y,X.hemiLength=x,X.numDirectionalShadows=L,X.numPointShadows=P,X.numSpotShadows=C,X.numSpotMaps=k,X.numLightProbes=F,s.version=uR++)}function d(p,m){let v=0,_=0,S=0,E=0,w=0;const y=m.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const P=p[x];if(P.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(P.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const C=s.point[_];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),_++}else if(P.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:f,setupView:d,state:s}}function qg(r){const e=new fR(r),t=[],s=[];function a(m){p.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function dR(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new qg(r),e.set(a,[f])):l>=c.length?(f=new qg(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const hR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pR=`uniform sampler2D shadow_pass;
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
}`;function mR(r,e,t){let s=new uh;const a=new Pt,l=new Pt,c=new Yt,f=new NE({depthPacking:CS}),d=new IE,p={},m=t.maxTextureSize,v={[Hi]:Wn,[Wn]:Hi,[br]:br},_=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:hR,fragmentShader:pR}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new vs;E.setAttribute("position",new Ur(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Lr(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kv;let x=this.type;this.render=function(N,F,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const b=r.getRenderTarget(),R=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),se=r.state;se.setBlending(Bi),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const Z=x!==Kr&&this.type===Kr,ue=x===Kr&&this.type!==Kr;for(let pe=0,ce=N.length;pe<ce;pe++){const ve=N[pe],z=ve.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ve,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const he=z.getFrameExtents();if(a.multiply(he),l.copy(z.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/he.x),a.x=l.x*he.x,z.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/he.y),a.y=l.y*he.y,z.mapSize.y=l.y)),z.map===null||Z===!0||ue===!0){const I=this.type!==Kr?{minFilter:vn,magFilter:vn}:{};z.map!==null&&z.map.dispose(),z.map=new gs(a.x,a.y,I),z.map.texture.name=ve.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const fe=z.getViewportCount();for(let I=0;I<fe;I++){const re=z.getViewport(I);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),se.viewport(c),z.updateMatrices(ve,I),s=z.getFrustum(),C(F,X,z.camera,ve,this.type)}z.isPointLightShadow!==!0&&this.type===Kr&&L(z,X),z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(b,R,H)};function L(N,F){const X=e.update(w);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new gs(a.x,a.y)),_.uniforms.shadow_pass.value=N.map.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(F,null,X,_,w,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(F,null,X,S,w,null)}function P(N,F,X,b){let R=null;const H=X.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)R=H;else if(R=X.isPointLight===!0?d:f,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const se=R.uuid,Z=F.uuid;let ue=p[se];ue===void 0&&(ue={},p[se]=ue);let pe=ue[Z];pe===void 0&&(pe=R.clone(),ue[Z]=pe,F.addEventListener("dispose",k)),R=pe}if(R.visible=F.visible,R.wireframe=F.wireframe,b===Kr?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:v[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const se=r.properties.get(R);se.light=X}return R}function C(N,F,X,b,R){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===Kr)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,N.matrixWorld);const Z=e.update(N),ue=N.material;if(Array.isArray(ue)){const pe=Z.groups;for(let ce=0,ve=pe.length;ce<ve;ce++){const z=pe[ce],he=ue[z.materialIndex];if(he&&he.visible){const fe=P(N,he,b,R);N.onBeforeShadow(r,N,F,X,Z,fe,z),r.renderBufferDirect(X,null,Z,fe,N,z),N.onAfterShadow(r,N,F,X,Z,fe,z)}}}else if(ue.visible){const pe=P(N,ue,b,R);N.onBeforeShadow(r,N,F,X,Z,pe,null),r.renderBufferDirect(X,null,Z,pe,N,null),N.onAfterShadow(r,N,F,X,Z,pe,null)}}const se=N.children;for(let Z=0,ue=se.length;Z<ue;Z++)C(se[Z],F,X,b,R)}function k(N){N.target.removeEventListener("dispose",k);for(const X in p){const b=p[X],R=N.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const gR={[id]:sd,[ad]:ud,[od]:cd,[ua]:ld,[sd]:id,[ud]:ad,[cd]:od,[ld]:ua};function vR(r,e){function t(){let V=!1;const Ne=new Yt;let Se=null;const Oe=new Yt(0,0,0,0);return{setMask:function(we){Se!==we&&!V&&(r.colorMask(we,we,we,we),Se=we)},setLocked:function(we){V=we},setClear:function(we,_e,He,ut,Ct){Ct===!0&&(we*=ut,_e*=ut,He*=ut),Ne.set(we,_e,He,ut),Oe.equals(Ne)===!1&&(r.clearColor(we,_e,He,ut),Oe.copy(Ne))},reset:function(){V=!1,Se=null,Oe.set(-1,0,0,0)}}}function s(){let V=!1,Ne=!1,Se=null,Oe=null,we=null;return{setReversed:function(_e){if(Ne!==_e){const He=e.get("EXT_clip_control");_e?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Ne=_e;const ut=we;we=null,this.setClear(ut)}},getReversed:function(){return Ne},setTest:function(_e){_e?le(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(_e){Se!==_e&&!V&&(r.depthMask(_e),Se=_e)},setFunc:function(_e){if(Ne&&(_e=gR[_e]),Oe!==_e){switch(_e){case id:r.depthFunc(r.NEVER);break;case sd:r.depthFunc(r.ALWAYS);break;case ad:r.depthFunc(r.LESS);break;case ua:r.depthFunc(r.LEQUAL);break;case od:r.depthFunc(r.EQUAL);break;case ld:r.depthFunc(r.GEQUAL);break;case ud:r.depthFunc(r.GREATER);break;case cd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Oe=_e}},setLocked:function(_e){V=_e},setClear:function(_e){we!==_e&&(Ne&&(_e=1-_e),r.clearDepth(_e),we=_e)},reset:function(){V=!1,Se=null,Oe=null,we=null,Ne=!1}}}function a(){let V=!1,Ne=null,Se=null,Oe=null,we=null,_e=null,He=null,ut=null,Ct=null;return{setTest:function(Be){V||(Be?le(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(Be){Ne!==Be&&!V&&(r.stencilMask(Be),Ne=Be)},setFunc:function(Be,bt,Tt){(Se!==Be||Oe!==bt||we!==Tt)&&(r.stencilFunc(Be,bt,Tt),Se=Be,Oe=bt,we=Tt)},setOp:function(Be,bt,Tt){(_e!==Be||He!==bt||ut!==Tt)&&(r.stencilOp(Be,bt,Tt),_e=Be,He=bt,ut=Tt)},setLocked:function(Be){V=Be},setClear:function(Be){Ct!==Be&&(r.clearStencil(Be),Ct=Be)},reset:function(){V=!1,Ne=null,Se=null,Oe=null,we=null,_e=null,He=null,ut=null,Ct=null}}}const l=new t,c=new s,f=new a,d=new WeakMap,p=new WeakMap;let m={},v={},_=new WeakMap,S=[],E=null,w=!1,y=null,x=null,L=null,P=null,C=null,k=null,N=null,F=new Dt(0,0,0),X=0,b=!1,R=null,H=null,se=null,Z=null,ue=null;const pe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ve=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(z)[1]),ce=ve>=1):z.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ce=ve>=2);let he=null,fe={};const I=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),Ce=new Yt().fromArray(I),te=new Yt().fromArray(re);function ge(V,Ne,Se,Oe){const we=new Uint8Array(4),_e=r.createTexture();r.bindTexture(V,_e),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<Se;He++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(Ne+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return _e}const j={};j[r.TEXTURE_2D]=ge(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),le(r.DEPTH_TEST),c.setFunc(ua),vt(!1),Et(Jm),le(r.CULL_FACE),O(Bi);function le(V){m[V]!==!0&&(r.enable(V),m[V]=!0)}function oe(V){m[V]!==!1&&(r.disable(V),m[V]=!1)}function Le(V,Ne){return v[V]!==Ne?(r.bindFramebuffer(V,Ne),v[V]=Ne,V===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ne),V===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function be(V,Ne){let Se=S,Oe=!1;if(V){Se=_.get(Ne),Se===void 0&&(Se=[],_.set(Ne,Se));const we=V.textures;if(Se.length!==we.length||Se[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,He=we.length;_e<He;_e++)Se[_e]=r.COLOR_ATTACHMENT0+_e;Se.length=we.length,Oe=!0}}else Se[0]!==r.BACK&&(Se[0]=r.BACK,Oe=!0);Oe&&r.drawBuffers(Se)}function it(V){return E!==V?(r.useProgram(V),E=V,!0):!1}const ft={[fs]:r.FUNC_ADD,[eS]:r.FUNC_SUBTRACT,[tS]:r.FUNC_REVERSE_SUBTRACT};ft[nS]=r.MIN,ft[rS]=r.MAX;const dt={[iS]:r.ZERO,[sS]:r.ONE,[aS]:r.SRC_COLOR,[nd]:r.SRC_ALPHA,[dS]:r.SRC_ALPHA_SATURATE,[cS]:r.DST_COLOR,[lS]:r.DST_ALPHA,[oS]:r.ONE_MINUS_SRC_COLOR,[rd]:r.ONE_MINUS_SRC_ALPHA,[fS]:r.ONE_MINUS_DST_COLOR,[uS]:r.ONE_MINUS_DST_ALPHA,[hS]:r.CONSTANT_COLOR,[pS]:r.ONE_MINUS_CONSTANT_COLOR,[mS]:r.CONSTANT_ALPHA,[gS]:r.ONE_MINUS_CONSTANT_ALPHA};function O(V,Ne,Se,Oe,we,_e,He,ut,Ct,Be){if(V===Bi){w===!0&&(oe(r.BLEND),w=!1);return}if(w===!1&&(le(r.BLEND),w=!0),V!==Qy){if(V!==y||Be!==b){if((x!==fs||C!==fs)&&(r.blendEquation(r.FUNC_ADD),x=fs,C=fs),Be)switch(V){case sa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qm:r.blendFunc(r.ONE,r.ONE);break;case eg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case sa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case eg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}L=null,P=null,k=null,N=null,F.set(0,0,0),X=0,y=V,b=Be}return}we=we||Ne,_e=_e||Se,He=He||Oe,(Ne!==x||we!==C)&&(r.blendEquationSeparate(ft[Ne],ft[we]),x=Ne,C=we),(Se!==L||Oe!==P||_e!==k||He!==N)&&(r.blendFuncSeparate(dt[Se],dt[Oe],dt[_e],dt[He]),L=Se,P=Oe,k=_e,N=He),(ut.equals(F)===!1||Ct!==X)&&(r.blendColor(ut.r,ut.g,ut.b,Ct),F.copy(ut),X=Ct),y=V,b=!1}function Ht(V,Ne){V.side===br?oe(r.CULL_FACE):le(r.CULL_FACE);let Se=V.side===Wn;Ne&&(Se=!Se),vt(Se),V.blending===sa&&V.transparent===!1?O(Bi):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const Oe=V.stencilWrite;f.setTest(Oe),Oe&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),pt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?le(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function vt(V){R!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),R=V)}function Et(V){V!==Ky?(le(r.CULL_FACE),V!==H&&(V===Jm?r.cullFace(r.BACK):V===Zy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),H=V}function Xe(V){V!==se&&(ce&&r.lineWidth(V),se=V)}function pt(V,Ne,Se){V?(le(r.POLYGON_OFFSET_FILL),(Z!==Ne||ue!==Se)&&(r.polygonOffset(Ne,Se),Z=Ne,ue=Se)):oe(r.POLYGON_OFFSET_FILL)}function Ke(V){V?le(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)}function st(V){V===void 0&&(V=r.TEXTURE0+pe-1),he!==V&&(r.activeTexture(V),he=V)}function It(V,Ne,Se){Se===void 0&&(he===null?Se=r.TEXTURE0+pe-1:Se=he);let Oe=fe[Se];Oe===void 0&&(Oe={type:void 0,texture:void 0},fe[Se]=Oe),(Oe.type!==V||Oe.texture!==Ne)&&(he!==Se&&(r.activeTexture(Se),he=Se),r.bindTexture(V,Ne||j[V]),Oe.type=V,Oe.texture=Ne)}function D(){const V=fe[he];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{r.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{r.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{r.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{r.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{r.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{r.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{r.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(V){Ce.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Ce.copy(V))}function tt(V){te.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),te.copy(V))}function Qe(V,Ne){let Se=p.get(Ne);Se===void 0&&(Se=new WeakMap,p.set(Ne,Se));let Oe=Se.get(V);Oe===void 0&&(Oe=r.getUniformBlockIndex(Ne,V.name),Se.set(V,Oe))}function De(V,Ne){const Oe=p.get(Ne).get(V);d.get(Ne)!==Oe&&(r.uniformBlockBinding(Ne,Oe,V.__bindingPointIndex),d.set(Ne,Oe))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},he=null,fe={},v={},_=new WeakMap,S=[],E=null,w=!1,y=null,x=null,L=null,P=null,C=null,k=null,N=null,F=new Dt(0,0,0),X=0,b=!1,R=null,H=null,se=null,Z=null,ue=null,Ce.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:le,disable:oe,bindFramebuffer:Le,drawBuffers:be,useProgram:it,setBlending:O,setMaterial:Ht,setFlipSided:vt,setCullFace:Et,setLineWidth:Xe,setPolygonOffset:pt,setScissorTest:Ke,activeTexture:st,bindTexture:It,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:Q,texImage2D:Ze,texImage3D:ye,updateUBOMapping:Qe,uniformBlockBinding:De,texStorage2D:Pe,texStorage3D:ke,texSubImage2D:me,texSubImage3D:xe,compressedTexSubImage2D:de,compressedTexSubImage3D:Ye,scissor:Ue,viewport:tt,reset:at}}function _R(r,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,m=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return S?new OffscreenCanvas(D,T):vo("canvas")}function w(D,T,Q){let me=1;const xe=It(D);if((xe.width>Q||xe.height>Q)&&(me=Q/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(me*xe.width),Ye=Math.floor(me*xe.height);v===void 0&&(v=E(de,Ye));const Pe=T?E(de,Ye):v;return Pe.width=de,Pe.height=Ye,Pe.getContext("2d").drawImage(D,0,0,de,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+Ye+")."),Pe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){r.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(D,T,Q,me,xe=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=T;if(T===r.RED&&(Q===r.FLOAT&&(de=r.R32F),Q===r.HALF_FLOAT&&(de=r.R16F),Q===r.UNSIGNED_BYTE&&(de=r.R8)),T===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.R8UI),Q===r.UNSIGNED_SHORT&&(de=r.R16UI),Q===r.UNSIGNED_INT&&(de=r.R32UI),Q===r.BYTE&&(de=r.R8I),Q===r.SHORT&&(de=r.R16I),Q===r.INT&&(de=r.R32I)),T===r.RG&&(Q===r.FLOAT&&(de=r.RG32F),Q===r.HALF_FLOAT&&(de=r.RG16F),Q===r.UNSIGNED_BYTE&&(de=r.RG8)),T===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.RG8UI),Q===r.UNSIGNED_SHORT&&(de=r.RG16UI),Q===r.UNSIGNED_INT&&(de=r.RG32UI),Q===r.BYTE&&(de=r.RG8I),Q===r.SHORT&&(de=r.RG16I),Q===r.INT&&(de=r.RG32I)),T===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(de=r.RGB16UI),Q===r.UNSIGNED_INT&&(de=r.RGB32UI),Q===r.BYTE&&(de=r.RGB8I),Q===r.SHORT&&(de=r.RGB16I),Q===r.INT&&(de=r.RGB32I)),T===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),Q===r.UNSIGNED_INT&&(de=r.RGBA32UI),Q===r.BYTE&&(de=r.RGBA8I),Q===r.SHORT&&(de=r.RGBA16I),Q===r.INT&&(de=r.RGBA32I)),T===r.RGB&&Q===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),T===r.RGBA){const Ye=xe?xu:At.getTransfer(me);Q===r.FLOAT&&(de=r.RGBA32F),Q===r.HALF_FLOAT&&(de=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(de=Ye===Nt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function C(D,T){let Q;return D?T===null||T===ms||T===ho?Q=r.DEPTH24_STENCIL8:T===Qr?Q=r.DEPTH32F_STENCIL8:T===fo&&(Q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ms||T===ho?Q=r.DEPTH_COMPONENT24:T===Qr?Q=r.DEPTH_COMPONENT32F:T===fo&&(Q=r.DEPTH_COMPONENT16),Q}function k(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==vn&&D.minFilter!==Pr?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function N(D){const T=D.target;T.removeEventListener("dispose",N),X(T),T.isVideoTexture&&m.delete(T)}function F(D){const T=D.target;T.removeEventListener("dispose",F),R(T)}function X(D){const T=s.get(D);if(T.__webglInit===void 0)return;const Q=D.source,me=_.get(Q);if(me){const xe=me[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&b(D),Object.keys(me).length===0&&_.delete(Q)}s.remove(D)}function b(D){const T=s.get(D);r.deleteTexture(T.__webglTexture);const Q=D.source,me=_.get(Q);delete me[T.__cacheKey],c.memory.textures--}function R(D){const T=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let xe=0;xe<T.__webglFramebuffer[me].length;xe++)r.deleteFramebuffer(T.__webglFramebuffer[me][xe]);else r.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)r.deleteFramebuffer(T.__webglFramebuffer[me]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=D.textures;for(let me=0,xe=Q.length;me<xe;me++){const de=s.get(Q[me]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),c.memory.textures--),s.remove(Q[me])}s.remove(D)}let H=0;function se(){H=0}function Z(){const D=H;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),H+=1,D}function ue(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function pe(D,T){const Q=s.get(D);if(D.isVideoTexture&&Ke(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(Q,D,T);return}}t.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+T)}function ce(D,T){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){j(Q,D,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+T)}function ve(D,T){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){j(Q,D,T);return}t.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+T)}function z(D,T){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){le(Q,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+T)}const he={[co]:r.REPEAT,[Jr]:r.CLAMP_TO_EDGE,[hd]:r.MIRRORED_REPEAT},fe={[vn]:r.NEAREST,[RS]:r.NEAREST_MIPMAP_NEAREST,[Il]:r.NEAREST_MIPMAP_LINEAR,[Pr]:r.LINEAR,[vf]:r.LINEAR_MIPMAP_NEAREST,[hs]:r.LINEAR_MIPMAP_LINEAR},I={[LS]:r.NEVER,[OS]:r.ALWAYS,[DS]:r.LESS,[qv]:r.LEQUAL,[US]:r.EQUAL,[FS]:r.GEQUAL,[NS]:r.GREATER,[IS]:r.NOTEQUAL};function re(D,T){if(T.type===Qr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Pr||T.magFilter===vf||T.magFilter===Il||T.magFilter===hs||T.minFilter===Pr||T.minFilter===vf||T.minFilter===Il||T.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,he[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,he[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,he[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,fe[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,fe[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===vn||T.minFilter!==Il&&T.minFilter!==hs||T.type===Qr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ce(D,T){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",N));const me=T.source;let xe=_.get(me);xe===void 0&&(xe={},_.set(me,xe));const de=ue(T);if(de!==D.__cacheKey){xe[de]===void 0&&(xe[de]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),xe[de].usedTimes++;const Ye=xe[D.__cacheKey];Ye!==void 0&&(xe[D.__cacheKey].usedTimes--,Ye.usedTimes===0&&b(T)),D.__cacheKey=de,D.__webglTexture=xe[de].texture}return Q}function te(D,T,Q){return Math.floor(Math.floor(D/Q)/T)}function ge(D,T,Q,me){const de=D.updateRanges;if(de.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,Q,me,T.data);else{de.sort((ye,Ue)=>ye.start-Ue.start);let Ye=0;for(let ye=1;ye<de.length;ye++){const Ue=de[Ye],tt=de[ye],Qe=Ue.start+Ue.count,De=te(tt.start,T.width,4),at=te(Ue.start,T.width,4);tt.start<=Qe+1&&De===at&&te(tt.start+tt.count-1,T.width,4)===De?Ue.count=Math.max(Ue.count,tt.start+tt.count-Ue.start):(++Ye,de[Ye]=tt)}de.length=Ye+1;const Pe=r.getParameter(r.UNPACK_ROW_LENGTH),ke=r.getParameter(r.UNPACK_SKIP_PIXELS),Ze=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let ye=0,Ue=de.length;ye<Ue;ye++){const tt=de[ye],Qe=Math.floor(tt.start/4),De=Math.ceil(tt.count/4),at=Qe%T.width,V=Math.floor(Qe/T.width),Ne=De,Se=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,at),r.pixelStorei(r.UNPACK_SKIP_ROWS,V),t.texSubImage2D(r.TEXTURE_2D,0,at,V,Ne,Se,Q,me,T.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Pe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ze)}}function j(D,T,Q){let me=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=r.TEXTURE_3D);const xe=Ce(D,T),de=T.source;t.bindTexture(me,D.__webglTexture,r.TEXTURE0+Q);const Ye=s.get(de);if(de.version!==Ye.__version||xe===!0){t.activeTexture(r.TEXTURE0+Q);const Pe=At.getPrimaries(At.workingColorSpace),ke=T.colorSpace===Ii?null:At.getPrimaries(T.colorSpace),Ze=T.colorSpace===Ii||Pe===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ye=w(T.image,!1,a.maxTextureSize);ye=st(T,ye);const Ue=l.convert(T.format,T.colorSpace),tt=l.convert(T.type);let Qe=P(T.internalFormat,Ue,tt,T.colorSpace,T.isVideoTexture);re(me,T);let De;const at=T.mipmaps,V=T.isVideoTexture!==!0,Ne=Ye.__version===void 0||xe===!0,Se=de.dataReady,Oe=k(T,ye);if(T.isDepthTexture)Qe=C(T.format===mo,T.type),Ne&&(V?t.texStorage2D(r.TEXTURE_2D,1,Qe,ye.width,ye.height):t.texImage2D(r.TEXTURE_2D,0,Qe,ye.width,ye.height,0,Ue,tt,null));else if(T.isDataTexture)if(at.length>0){V&&Ne&&t.texStorage2D(r.TEXTURE_2D,Oe,Qe,at[0].width,at[0].height);for(let we=0,_e=at.length;we<_e;we++)De=at[we],V?Se&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,De.width,De.height,Ue,tt,De.data):t.texImage2D(r.TEXTURE_2D,we,Qe,De.width,De.height,0,Ue,tt,De.data);T.generateMipmaps=!1}else V?(Ne&&t.texStorage2D(r.TEXTURE_2D,Oe,Qe,ye.width,ye.height),Se&&ge(T,ye,Ue,tt)):t.texImage2D(r.TEXTURE_2D,0,Qe,ye.width,ye.height,0,Ue,tt,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,Qe,at[0].width,at[0].height,ye.depth);for(let we=0,_e=at.length;we<_e;we++)if(De=at[we],T.format!==_r)if(Ue!==null)if(V){if(Se)if(T.layerUpdates.size>0){const He=Tg(De.width,De.height,T.format,T.type);for(const ut of T.layerUpdates){const Ct=De.data.subarray(ut*He/De.data.BYTES_PER_ELEMENT,(ut+1)*He/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,ut,De.width,De.height,1,Ue,Ct)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,De.width,De.height,ye.depth,Ue,De.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,we,Qe,De.width,De.height,ye.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,De.width,De.height,ye.depth,Ue,tt,De.data):t.texImage3D(r.TEXTURE_2D_ARRAY,we,Qe,De.width,De.height,ye.depth,0,Ue,tt,De.data)}else{V&&Ne&&t.texStorage2D(r.TEXTURE_2D,Oe,Qe,at[0].width,at[0].height);for(let we=0,_e=at.length;we<_e;we++)De=at[we],T.format!==_r?Ue!==null?V?Se&&t.compressedTexSubImage2D(r.TEXTURE_2D,we,0,0,De.width,De.height,Ue,De.data):t.compressedTexImage2D(r.TEXTURE_2D,we,Qe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Se&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,De.width,De.height,Ue,tt,De.data):t.texImage2D(r.TEXTURE_2D,we,Qe,De.width,De.height,0,Ue,tt,De.data)}else if(T.isDataArrayTexture)if(V){if(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,Qe,ye.width,ye.height,ye.depth),Se)if(T.layerUpdates.size>0){const we=Tg(ye.width,ye.height,T.format,T.type);for(const _e of T.layerUpdates){const He=ye.data.subarray(_e*we/ye.data.BYTES_PER_ELEMENT,(_e+1)*we/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_e,ye.width,ye.height,1,Ue,tt,He)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ue,tt,ye.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Qe,ye.width,ye.height,ye.depth,0,Ue,tt,ye.data);else if(T.isData3DTexture)V?(Ne&&t.texStorage3D(r.TEXTURE_3D,Oe,Qe,ye.width,ye.height,ye.depth),Se&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ue,tt,ye.data)):t.texImage3D(r.TEXTURE_3D,0,Qe,ye.width,ye.height,ye.depth,0,Ue,tt,ye.data);else if(T.isFramebufferTexture){if(Ne)if(V)t.texStorage2D(r.TEXTURE_2D,Oe,Qe,ye.width,ye.height);else{let we=ye.width,_e=ye.height;for(let He=0;He<Oe;He++)t.texImage2D(r.TEXTURE_2D,He,Qe,we,_e,0,Ue,tt,null),we>>=1,_e>>=1}}else if(at.length>0){if(V&&Ne){const we=It(at[0]);t.texStorage2D(r.TEXTURE_2D,Oe,Qe,we.width,we.height)}for(let we=0,_e=at.length;we<_e;we++)De=at[we],V?Se&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,Ue,tt,De):t.texImage2D(r.TEXTURE_2D,we,Qe,Ue,tt,De);T.generateMipmaps=!1}else if(V){if(Ne){const we=It(ye);t.texStorage2D(r.TEXTURE_2D,Oe,Qe,we.width,we.height)}Se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,tt,ye)}else t.texImage2D(r.TEXTURE_2D,0,Qe,Ue,tt,ye);y(T)&&x(me),Ye.__version=de.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function le(D,T,Q){if(T.image.length!==6)return;const me=Ce(D,T),xe=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Q);const de=s.get(xe);if(xe.version!==de.__version||me===!0){t.activeTexture(r.TEXTURE0+Q);const Ye=At.getPrimaries(At.workingColorSpace),Pe=T.colorSpace===Ii?null:At.getPrimaries(T.colorSpace),ke=T.colorSpace===Ii||Ye===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Ze=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,Ue=[];for(let _e=0;_e<6;_e++)!Ze&&!ye?Ue[_e]=w(T.image[_e],!0,a.maxCubemapSize):Ue[_e]=ye?T.image[_e].image:T.image[_e],Ue[_e]=st(T,Ue[_e]);const tt=Ue[0],Qe=l.convert(T.format,T.colorSpace),De=l.convert(T.type),at=P(T.internalFormat,Qe,De,T.colorSpace),V=T.isVideoTexture!==!0,Ne=de.__version===void 0||me===!0,Se=xe.dataReady;let Oe=k(T,tt);re(r.TEXTURE_CUBE_MAP,T);let we;if(Ze){V&&Ne&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,at,tt.width,tt.height);for(let _e=0;_e<6;_e++){we=Ue[_e].mipmaps;for(let He=0;He<we.length;He++){const ut=we[He];T.format!==_r?Qe!==null?V?Se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,0,0,ut.width,ut.height,Qe,ut.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,at,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,0,0,ut.width,ut.height,Qe,De,ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,at,ut.width,ut.height,0,Qe,De,ut.data)}}}else{if(we=T.mipmaps,V&&Ne){we.length>0&&Oe++;const _e=It(Ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,at,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ye){V?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ue[_e].width,Ue[_e].height,Qe,De,Ue[_e].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,Ue[_e].width,Ue[_e].height,0,Qe,De,Ue[_e].data);for(let He=0;He<we.length;He++){const Ct=we[He].image[_e].image;V?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,0,0,Ct.width,Ct.height,Qe,De,Ct.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,at,Ct.width,Ct.height,0,Qe,De,Ct.data)}}else{V?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Qe,De,Ue[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,Qe,De,Ue[_e]);for(let He=0;He<we.length;He++){const ut=we[He];V?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,0,0,Qe,De,ut.image[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,at,Qe,De,ut.image[_e])}}}y(T)&&x(r.TEXTURE_CUBE_MAP),de.__version=xe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function oe(D,T,Q,me,xe,de){const Ye=l.convert(Q.format,Q.colorSpace),Pe=l.convert(Q.type),ke=P(Q.internalFormat,Ye,Pe,Q.colorSpace),Ze=s.get(T),ye=s.get(Q);if(ye.__renderTarget=T,!Ze.__hasExternalTextures){const Ue=Math.max(1,T.width>>de),tt=Math.max(1,T.height>>de);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?t.texImage3D(xe,de,ke,Ue,tt,T.depth,0,Ye,Pe,null):t.texImage2D(xe,de,ke,Ue,tt,0,Ye,Pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),pt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,xe,ye.__webglTexture,0,Xe(T)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,xe,ye.__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(D,T,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const me=T.depthTexture,xe=me&&me.isDepthTexture?me.type:null,de=C(T.stencilBuffer,xe),Ye=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=Xe(T);pt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pe,de,T.width,T.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,de,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,de,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ye,r.RENDERBUFFER,D)}else{const me=T.textures;for(let xe=0;xe<me.length;xe++){const de=me[xe],Ye=l.convert(de.format,de.colorSpace),Pe=l.convert(de.type),ke=P(de.internalFormat,Ye,Pe,de.colorSpace),Ze=Xe(T);Q&&pt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,ke,T.width,T.height):pt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,ke,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ke,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe(T.depthTexture,0);const xe=me.__webglTexture,de=Xe(T);if(T.depthTexture.format===po)pt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0);else if(T.depthTexture.format===mo)pt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function it(D){const T=s.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=me}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const me=D.texture.mipmaps;me&&me.length>0?be(T.__webglFramebuffer[0],D):be(T.__webglFramebuffer,D)}else if(Q){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=r.createRenderbuffer(),Le(T.__webglDepthbuffer[me],D,!1);else{const xe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,de)}}else{const me=D.texture.mipmaps;if(me&&me.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Le(T.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,de)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(D,T,Q){const me=s.get(D);T!==void 0&&oe(me.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&it(D)}function dt(D){const T=D.texture,Q=s.get(D),me=s.get(T);D.addEventListener("dispose",F);const xe=D.textures,de=D.isWebGLCubeRenderTarget===!0,Ye=xe.length>1;if(Ye||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=T.version,c.memory.textures++),de){Q.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[Pe]=[];for(let ke=0;ke<T.mipmaps.length;ke++)Q.__webglFramebuffer[Pe][ke]=r.createFramebuffer()}else Q.__webglFramebuffer[Pe]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)Q.__webglFramebuffer[Pe]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Ye)for(let Pe=0,ke=xe.length;Pe<ke;Pe++){const Ze=s.get(xe[Pe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&pt(D)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Pe=0;Pe<xe.length;Pe++){const ke=xe[Pe];Q.__webglColorRenderbuffer[Pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Pe]);const Ze=l.convert(ke.format,ke.colorSpace),ye=l.convert(ke.type),Ue=P(ke.internalFormat,Ze,ye,ke.colorSpace,D.isXRRenderTarget===!0),tt=Xe(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Ue,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(Q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),re(r.TEXTURE_CUBE_MAP,T);for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)oe(Q.__webglFramebuffer[Pe][ke],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ke);else oe(Q.__webglFramebuffer[Pe],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);y(T)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Pe=0,ke=xe.length;Pe<ke;Pe++){const Ze=xe[Pe],ye=s.get(Ze);t.bindTexture(r.TEXTURE_2D,ye.__webglTexture),re(r.TEXTURE_2D,Ze),oe(Q.__webglFramebuffer,D,Ze,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,0),y(Ze)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let Pe=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Pe,me.__webglTexture),re(Pe,T),T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)oe(Q.__webglFramebuffer[ke],D,T,r.COLOR_ATTACHMENT0,Pe,ke);else oe(Q.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,Pe,0);y(T)&&x(Pe),t.unbindTexture()}D.depthBuffer&&it(D)}function O(D){const T=D.textures;for(let Q=0,me=T.length;Q<me;Q++){const xe=T[Q];if(y(xe)){const de=L(D),Ye=s.get(xe).__webglTexture;t.bindTexture(de,Ye),x(de),t.unbindTexture()}}}const Ht=[],vt=[];function Et(D){if(D.samples>0){if(pt(D)===!1){const T=D.textures,Q=D.width,me=D.height;let xe=r.COLOR_BUFFER_BIT;const de=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ye=s.get(D),Pe=T.length>1;if(Pe)for(let Ze=0;Ze<T.length;Ze++)t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const ke=D.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Ze=0;Ze<T.length;Ze++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),Pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ze]);const ye=s.get(T[Ze]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,Q,me,0,0,Q,me,xe,r.NEAREST),d===!0&&(Ht.length=0,vt.length=0,Ht.push(r.COLOR_ATTACHMENT0+Ze),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ht.push(de),vt.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,vt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Pe)for(let Ze=0;Ze<T.length;Ze++){t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ze]);const ye=s.get(T[Ze]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Xe(D){return Math.min(a.maxSamples,D.samples)}function pt(D){const T=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(D){const T=c.render.frame;m.get(D)!==T&&(m.set(D,T),D.update())}function st(D,T){const Q=D.colorSpace,me=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==da&&Q!==Ii&&(At.getTransfer(Q)===Nt?(me!==_r||xe!==Ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function It(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=se,this.setTexture2D=pe,this.setTexture2DArray=ce,this.setTexture3D=ve,this.setTextureCube=z,this.rebindTextures=ft,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=pt}function xR(r,e){function t(s,a=Ii){let l;const c=At.getTransfer(a);if(s===Ir)return r.UNSIGNED_BYTE;if(s===eh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===th)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Gv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Hv)return r.BYTE;if(s===Vv)return r.SHORT;if(s===fo)return r.UNSIGNED_SHORT;if(s===Qd)return r.INT;if(s===ms)return r.UNSIGNED_INT;if(s===Qr)return r.FLOAT;if(s===Eo)return r.HALF_FLOAT;if(s===Wv)return r.ALPHA;if(s===Xv)return r.RGB;if(s===_r)return r.RGBA;if(s===po)return r.DEPTH_COMPONENT;if(s===mo)return r.DEPTH_STENCIL;if(s===jv)return r.RED;if(s===nh)return r.RED_INTEGER;if(s===$v)return r.RG;if(s===rh)return r.RG_INTEGER;if(s===ih)return r.RGBA_INTEGER;if(s===uu||s===cu||s===fu||s===du)if(c===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===uu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===du)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===uu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===du)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pd||s===md||s===gd||s===vd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===pd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===md)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_d||s===xd||s===yd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===_d||s===xd)return c===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===yd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sd||s===Ed||s===Md||s===wd||s===Td||s===Rd||s===Ad||s===Cd||s===bd||s===Pd||s===Ld||s===Dd||s===Ud||s===Nd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Sd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ed)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Md)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Td)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ad)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ld)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ud)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hu||s===Id||s===Fd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===hu)return c===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Id)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Yv||s===Od||s===kd||s===Bd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===hu)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Od)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ho?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const yR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SR=`
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

}`;class ER{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new On,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Vi({vertexShader:yR,fragmentShader:SR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lr(new Cu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MR extends ga{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",d=1,p=null,m=null,v=null,_=null,S=null,E=null;const w=new ER,y=t.getContextAttributes();let x=null,L=null;const P=[],C=[],k=new Pt;let N=null;const F=new ar;F.viewport=new Yt;const X=new ar;X.viewport=new Yt;const b=[F,X],R=new WE;let H=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=P[te];return ge===void 0&&(ge=new kf,P[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=P[te];return ge===void 0&&(ge=new kf,P[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=P[te];return ge===void 0&&(ge=new kf,P[te]=ge),ge.getHandSpace()};function Z(te){const ge=C.indexOf(te.inputSource);if(ge===-1)return;const j=P[ge];j!==void 0&&(j.update(te.inputSource,te.frame,p||c),j.dispatchEvent({type:te.type,data:te.inputSource}))}function ue(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",pe);for(let te=0;te<P.length;te++){const ge=C[te];ge!==null&&(C[te]=null,P[te].disconnect(ge))}H=null,se=null,w.reset(),e.setRenderTarget(x),S=null,_=null,v=null,a=null,L=null,Ce.stop(),s.isPresenting=!1,e.setPixelRatio(N),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,le=null,oe=null;y.depth&&(oe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?mo:po,le=y.stencil?ho:ms);const Le={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:l};v=new XRWebGLBinding(a,t),_=v.createProjectionLayer(Le),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new gs(_.textureWidth,_.textureHeight,{format:_r,type:Ir,depthTexture:new s_(_.textureWidth,_.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const j={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,j),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new gs(S.framebufferWidth,S.framebufferHeight,{format:_r,type:Ir,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await a.requestReferenceSpace(f),Ce.setContext(a),Ce.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function pe(te){for(let ge=0;ge<te.removed.length;ge++){const j=te.removed[ge],le=C.indexOf(j);le>=0&&(C[le]=null,P[le].disconnect(j))}for(let ge=0;ge<te.added.length;ge++){const j=te.added[ge];let le=C.indexOf(j);if(le===-1){for(let Le=0;Le<P.length;Le++)if(Le>=C.length){C.push(j),le=Le;break}else if(C[Le]===null){C[Le]=j,le=Le;break}if(le===-1)break}const oe=P[le];oe&&oe.connect(j)}}const ce=new ne,ve=new ne;function z(te,ge,j){ce.setFromMatrixPosition(ge.matrixWorld),ve.setFromMatrixPosition(j.matrixWorld);const le=ce.distanceTo(ve),oe=ge.projectionMatrix.elements,Le=j.projectionMatrix.elements,be=oe[14]/(oe[10]-1),it=oe[14]/(oe[10]+1),ft=(oe[9]+1)/oe[5],dt=(oe[9]-1)/oe[5],O=(oe[8]-1)/oe[0],Ht=(Le[8]+1)/Le[0],vt=be*O,Et=be*Ht,Xe=le/(-O+Ht),pt=Xe*-O;if(ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(pt),te.translateZ(Xe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),oe[10]===-1)te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Ke=be+Xe,st=it+Xe,It=vt-pt,D=Et+(le-pt),T=ft*it/st*Ke,Q=dt*it/st*Ke;te.projectionMatrix.makePerspective(It,D,T,Q,Ke,st),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function he(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let ge=te.near,j=te.far;w.texture!==null&&(w.depthNear>0&&(ge=w.depthNear),w.depthFar>0&&(j=w.depthFar)),R.near=X.near=F.near=ge,R.far=X.far=F.far=j,(H!==R.near||se!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,se=R.far),F.layers.mask=te.layers.mask|2,X.layers.mask=te.layers.mask|4,R.layers.mask=F.layers.mask|X.layers.mask;const le=te.parent,oe=R.cameras;he(R,le);for(let Le=0;Le<oe.length;Le++)he(oe[Le],le);oe.length===2?z(R,F,X):R.projectionMatrix.copy(F.projectionMatrix),fe(te,R,le)};function fe(te,ge,j){j===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(j.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=go*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&S===null))return d},this.setFoveation=function(te){d=te,_!==null&&(_.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let I=null;function re(te,ge){if(m=ge.getViewerPose(p||c),E=ge,m!==null){const j=m.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let le=!1;j.length!==R.cameras.length&&(R.cameras.length=0,le=!0);for(let be=0;be<j.length;be++){const it=j[be];let ft=null;if(S!==null)ft=S.getViewport(it);else{const O=v.getViewSubImage(_,it);ft=O.viewport,be===0&&(e.setRenderTargetTextures(L,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(L))}let dt=b[be];dt===void 0&&(dt=new ar,dt.layers.enable(be),dt.viewport=new Yt,b[be]=dt),dt.matrix.fromArray(it.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(it.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ft.x,ft.y,ft.width,ft.height),be===0&&(R.matrix.copy(dt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),le===!0&&R.cameras.push(dt)}const oe=a.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const be=v.getDepthInformation(j[0]);be&&be.isValid&&be.texture&&w.init(e,be,a.renderState)}}for(let j=0;j<P.length;j++){const le=C[j],oe=P[j];le!==null&&oe!==void 0&&oe.update(le,ge,p||c)}I&&I(te,ge),ge.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ge}),E=null}const Ce=new o_;Ce.setAnimationLoop(re),this.setAnimationLoop=function(te){I=te},this.dispose=function(){}}}const ls=new Fn,wR=new qt;function TR(r,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,n_(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function a(y,x,L,P,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),v(y,x)):x.isMeshPhongMaterial?(l(y,x),m(y,x)):x.isMeshStandardMaterial?(l(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(l(y,x),E(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),w(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?d(y,x,L,P):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Wn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Wn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const L=e.get(x),P=L.envMap,C=L.envMapRotation;P&&(y.envMap.value=P,ls.copy(C),ls.x*=-1,ls.y*=-1,ls.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),y.envMapRotation.value.setFromMatrix4(wR.makeRotationFromEuler(ls)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,L,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*L,y.scale.value=P*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,L){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const L=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function RR(r,e,t,s){let a={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,P){const C=P.program;s.uniformBlockBinding(L,C)}function p(L,P){let C=a[L.id];C===void 0&&(E(L),C=m(L),a[L.id]=C,L.addEventListener("dispose",y));const k=P.program;s.updateUBOMapping(L,k);const N=e.render.frame;l[L.id]!==N&&(_(L),l[L.id]=N)}function m(L){const P=v();L.__bindingPointIndex=P;const C=r.createBuffer(),k=L.__size,N=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,k,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,C),C}function v(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const P=a[L.id],C=L.uniforms,k=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let N=0,F=C.length;N<F;N++){const X=Array.isArray(C[N])?C[N]:[C[N]];for(let b=0,R=X.length;b<R;b++){const H=X[b];if(S(H,N,b,k)===!0){const se=H.__offset,Z=Array.isArray(H.value)?H.value:[H.value];let ue=0;for(let pe=0;pe<Z.length;pe++){const ce=Z[pe],ve=w(ce);typeof ce=="number"||typeof ce=="boolean"?(H.__data[0]=ce,r.bufferSubData(r.UNIFORM_BUFFER,se+ue,H.__data)):ce.isMatrix3?(H.__data[0]=ce.elements[0],H.__data[1]=ce.elements[1],H.__data[2]=ce.elements[2],H.__data[3]=0,H.__data[4]=ce.elements[3],H.__data[5]=ce.elements[4],H.__data[6]=ce.elements[5],H.__data[7]=0,H.__data[8]=ce.elements[6],H.__data[9]=ce.elements[7],H.__data[10]=ce.elements[8],H.__data[11]=0):(ce.toArray(H.__data,ue),ue+=ve.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,se,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,P,C,k){const N=L.value,F=P+"_"+C;if(k[F]===void 0)return typeof N=="number"||typeof N=="boolean"?k[F]=N:k[F]=N.clone(),!0;{const X=k[F];if(typeof N=="number"||typeof N=="boolean"){if(X!==N)return k[F]=N,!0}else if(X.equals(N)===!1)return X.copy(N),!0}return!1}function E(L){const P=L.uniforms;let C=0;const k=16;for(let F=0,X=P.length;F<X;F++){const b=Array.isArray(P[F])?P[F]:[P[F]];for(let R=0,H=b.length;R<H;R++){const se=b[R],Z=Array.isArray(se.value)?se.value:[se.value];for(let ue=0,pe=Z.length;ue<pe;ue++){const ce=Z[ue],ve=w(ce),z=C%k,he=z%ve.boundary,fe=z+he;C+=he,fe!==0&&k-fe<ve.storage&&(C+=k-fe),se.__data=new Float32Array(ve.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=C,C+=ve.storage}}}const N=C%k;return N>0&&(C+=k-N),L.__size=C,L.__cache={},this}function w(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function y(L){const P=L.target;P.removeEventListener("dispose",y);const C=c.indexOf(P.__bindingPointIndex);c.splice(C,1),r.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function x(){for(const L in a)r.deleteBuffer(a[L]);c=[],a={},l={}}return{bind:d,update:p,dispose:x}}class AR{constructor(e={}){const{canvas:t=tE(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,x=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let k=!1;this._outputColorSpace=In;let N=0,F=0,X=null,b=-1,R=null;const H=new Yt,se=new Yt;let Z=null;const ue=new Dt(0);let pe=0,ce=t.width,ve=t.height,z=1,he=null,fe=null;const I=new Yt(0,0,ce,ve),re=new Yt(0,0,ce,ve);let Ce=!1;const te=new uh;let ge=!1,j=!1;const le=new qt,oe=new qt,Le=new ne,be=new Yt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function dt(){return X===null?z:1}let O=s;function Ht(A,Y){return t.getContext(A,Y)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jd}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",_e,!1),O===null){const Y="webgl2";if(O=Ht(Y,A),O===null)throw Ht(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let vt,Et,Xe,pt,Ke,st,It,D,T,Q,me,xe,de,Ye,Pe,ke,Ze,ye,Ue,tt,Qe,De,at,V;function Ne(){vt=new OT(O),vt.init(),De=new xR(O,vt),Et=new PT(O,vt,e,De),Xe=new vR(O,vt),Et.reverseDepthBuffer&&_&&Xe.buffers.depth.setReversed(!0),pt=new zT(O),Ke=new iR,st=new _R(O,vt,Xe,Ke,Et,De,pt),It=new DT(C),D=new FT(C),T=new jE(O),at=new CT(O,T),Q=new kT(O,T,pt,at),me=new VT(O,Q,T,pt),Ue=new HT(O,Et,st),ke=new LT(Ke),xe=new rR(C,It,D,vt,Et,at,ke),de=new TR(C,Ke),Ye=new aR,Pe=new dR(vt),ye=new AT(C,It,D,Xe,me,S,d),Ze=new mR(C,me,Et),V=new RR(O,pt,Et,Xe),tt=new bT(O,vt,pt),Qe=new BT(O,vt,pt),pt.programs=xe.programs,C.capabilities=Et,C.extensions=vt,C.properties=Ke,C.renderLists=Ye,C.shadowMap=Ze,C.state=Xe,C.info=pt}Ne();const Se=new MR(C,O);this.xr=Se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(ce,ve,!1))},this.getSize=function(A){return A.set(ce,ve)},this.setSize=function(A,Y,ae=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=A,ve=Y,t.width=Math.floor(A*z),t.height=Math.floor(Y*z),ae===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(ce*z,ve*z).floor()},this.setDrawingBufferSize=function(A,Y,ae){ce=A,ve=Y,z=ae,t.width=Math.floor(A*ae),t.height=Math.floor(Y*ae),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,Y,ae,J){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,Y,ae,J),Xe.viewport(H.copy(I).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,Y,ae,J){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,Y,ae,J),Xe.scissor(se.copy(re).multiplyScalar(z).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(A){Xe.setScissorTest(Ce=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){fe=A},this.getClearColor=function(A){return A.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,ae=!0){let J=0;if(A){let q=!1;if(X!==null){const Re=X.texture.format;q=Re===ih||Re===rh||Re===nh}if(q){const Re=X.texture.type,Ie=Re===Ir||Re===ms||Re===fo||Re===ho||Re===eh||Re===th,Ge=ye.getClearColor(),Ve=ye.getClearAlpha(),lt=Ge.r,ot=Ge.g,je=Ge.b;Ie?(E[0]=lt,E[1]=ot,E[2]=je,E[3]=Ve,O.clearBufferuiv(O.COLOR,0,E)):(w[0]=lt,w[1]=ot,w[2]=je,w[3]=Ve,O.clearBufferiv(O.COLOR,0,w))}else J|=O.COLOR_BUFFER_BIT}Y&&(J|=O.DEPTH_BUFFER_BIT),ae&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ye.dispose(),Ye.dispose(),Pe.dispose(),Ke.dispose(),It.dispose(),D.dispose(),me.dispose(),at.dispose(),V.dispose(),xe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",an),Se.removeEventListener("sessionend",An),en.stop()};function Oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=pt.autoReset,Y=Ze.enabled,ae=Ze.autoUpdate,J=Ze.needsUpdate,q=Ze.type;Ne(),pt.autoReset=A,Ze.enabled=Y,Ze.autoUpdate=ae,Ze.needsUpdate=J,Ze.type=q}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function He(A){const Y=A.target;Y.removeEventListener("dispose",He),ut(Y)}function ut(A){Ct(A),Ke.remove(A)}function Ct(A){const Y=Ke.get(A).programs;Y!==void 0&&(Y.forEach(function(ae){xe.releaseProgram(ae)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ae,J,q,Re){Y===null&&(Y=it);const Ie=q.isMesh&&q.matrixWorld.determinant()<0,Ge=Co(A,Y,ae,J,q);Xe.setMaterial(J,Ie);let Ve=ae.index,lt=1;if(J.wireframe===!0){if(Ve=Q.getWireframeAttribute(ae),Ve===void 0)return;lt=2}const ot=ae.drawRange,je=ae.attributes.position;let _t=ot.start*lt,mt=(ot.start+ot.count)*lt;Re!==null&&(_t=Math.max(_t,Re.start*lt),mt=Math.min(mt,(Re.start+Re.count)*lt)),Ve!==null?(_t=Math.max(_t,0),mt=Math.min(mt,Ve.count)):je!=null&&(_t=Math.max(_t,0),mt=Math.min(mt,je.count));const Vt=mt-_t;if(Vt<0||Vt===1/0)return;at.setup(q,J,Ge,ae,Ve);let Ft,Lt=tt;if(Ve!==null&&(Ft=T.get(Ve),Lt=Qe,Lt.setIndex(Ft)),q.isMesh)J.wireframe===!0?(Xe.setLineWidth(J.wireframeLinewidth*dt()),Lt.setMode(O.LINES)):Lt.setMode(O.TRIANGLES);else if(q.isLine){let et=J.linewidth;et===void 0&&(et=1),Xe.setLineWidth(et*dt()),q.isLineSegments?Lt.setMode(O.LINES):q.isLineLoop?Lt.setMode(O.LINE_LOOP):Lt.setMode(O.LINE_STRIP)}else q.isPoints?Lt.setMode(O.POINTS):q.isSprite&&Lt.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)aa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const et=q._multiDrawStarts,Ut=q._multiDrawCounts,xt=q._multiDrawCount,on=Ve?T.get(Ve).bytesPerElement:1,li=Ke.get(J).currentProgram.getUniforms();for(let bn=0;bn<xt;bn++)li.setValue(O,"_gl_DrawID",bn),Lt.render(et[bn]/on,Ut[bn])}else if(q.isInstancedMesh)Lt.renderInstances(_t,Vt,q.count);else if(ae.isInstancedBufferGeometry){const et=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ut=Math.min(ae.instanceCount,et);Lt.renderInstances(_t,Vt,Ut)}else Lt.render(_t,Vt)};function Be(A,Y,ae){A.transparent===!0&&A.side===br&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,_s(A,Y,ae),A.side=Hi,A.needsUpdate=!0,_s(A,Y,ae),A.side=br):_s(A,Y,ae)}this.compile=function(A,Y,ae=null){ae===null&&(ae=A),x=Pe.get(ae),x.init(Y),P.push(x),ae.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),A!==ae&&A.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const J=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Re=q.material;if(Re)if(Array.isArray(Re))for(let Ie=0;Ie<Re.length;Ie++){const Ge=Re[Ie];Be(Ge,ae,q),J.add(Ge)}else Be(Re,ae,q),J.add(Re)}),x=P.pop(),J},this.compileAsync=function(A,Y,ae=null){const J=this.compile(A,Y,ae);return new Promise(q=>{function Re(){if(J.forEach(function(Ie){Ke.get(Ie).currentProgram.isReady()&&J.delete(Ie)}),J.size===0){q(A);return}setTimeout(Re,10)}vt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let bt=null;function Tt(A){bt&&bt(A)}function an(){en.stop()}function An(){en.start()}const en=new o_;en.setAnimationLoop(Tt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(A){bt=A,Se.setAnimationLoop(A),A===null?en.stop():en.start()},Se.addEventListener("sessionstart",an),Se.addEventListener("sessionend",An),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(Y),Y=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,Y,X),x=Pe.get(A,P.length),x.init(Y),P.push(x),oe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),te.setFromProjectionMatrix(oe),j=this.localClippingEnabled,ge=ke.init(this.clippingPlanes,j),y=Ye.get(A,L.length),y.init(),L.push(y),Se.enabled===!0&&Se.isPresenting===!0){const Re=C.xr.getDepthSensingMesh();Re!==null&&_n(Re,Y,-1/0,C.sortObjects)}_n(A,Y,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(he,fe),ft=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,ft&&ye.addToRenderList(y,A),this.info.render.frame++,ge===!0&&ke.beginShadows();const ae=x.state.shadowsArray;Ze.render(ae,A,Y),ge===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=y.opaque,q=y.transmissive;if(x.setupLights(),Y.isArrayCamera){const Re=Y.cameras;if(q.length>0)for(let Ie=0,Ge=Re.length;Ie<Ge;Ie++){const Ve=Re[Ie];Wi(J,q,A,Ve)}ft&&ye.render(A);for(let Ie=0,Ge=Re.length;Ie<Ge;Ie++){const Ve=Re[Ie];Cn(y,A,Ve,Ve.viewport)}}else q.length>0&&Wi(J,q,A,Y),ft&&ye.render(A),Cn(y,A,Y);X!==null&&F===0&&(st.updateMultisampleRenderTarget(X),st.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,Y),at.resetDefaultState(),b=-1,R=null,P.pop(),P.length>0?(x=P[P.length-1],ge===!0&&ke.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function _n(A,Y,ae,J){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){J&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);const Ie=me.update(A),Ge=A.material;Ge.visible&&y.push(A,Ie,Ge,ae,be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const Ie=me.update(A),Ge=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),be.copy(Ie.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(oe)),Array.isArray(Ge)){const Ve=Ie.groups;for(let lt=0,ot=Ve.length;lt<ot;lt++){const je=Ve[lt],_t=Ge[je.materialIndex];_t&&_t.visible&&y.push(A,Ie,_t,ae,be.z,je)}}else Ge.visible&&y.push(A,Ie,Ge,ae,be.z,null)}}const Re=A.children;for(let Ie=0,Ge=Re.length;Ie<Ge;Ie++)_n(Re[Ie],Y,ae,J)}function Cn(A,Y,ae,J){const q=A.opaque,Re=A.transmissive,Ie=A.transparent;x.setupLightsView(ae),ge===!0&&ke.setGlobalState(C.clippingPlanes,ae),J&&Xe.viewport(H.copy(J)),q.length>0&&oi(q,Y,ae),Re.length>0&&oi(Re,Y,ae),Ie.length>0&&oi(Ie,Y,ae),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Wi(A,Y,ae,J){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[J.id]===void 0&&(x.state.transmissionRenderTarget[J.id]=new gs(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Eo:Ir,minFilter:hs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Re=x.state.transmissionRenderTarget[J.id],Ie=J.viewport||H;Re.setSize(Ie.z*C.transmissionResolutionScale,Ie.w*C.transmissionResolutionScale);const Ge=C.getRenderTarget(),Ve=C.getActiveCubeFace(),lt=C.getActiveMipmapLevel();C.setRenderTarget(Re),C.getClearColor(ue),pe=C.getClearAlpha(),pe<1&&C.setClearColor(16777215,.5),C.clear(),ft&&ye.render(ae);const ot=C.toneMapping;C.toneMapping=ti;const je=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),x.setupLightsView(J),ge===!0&&ke.setGlobalState(C.clippingPlanes,J),oi(A,ae,J),st.updateMultisampleRenderTarget(Re),st.updateRenderTargetMipmap(Re),vt.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let mt=0,Vt=Y.length;mt<Vt;mt++){const Ft=Y[mt],Lt=Ft.object,et=Ft.geometry,Ut=Ft.material,xt=Ft.group;if(Ut.side===br&&Lt.layers.test(J.layers)){const on=Ut.side;Ut.side=Wn,Ut.needsUpdate=!0,Ro(Lt,ae,J,et,Ut,xt),Ut.side=on,Ut.needsUpdate=!0,_t=!0}}_t===!0&&(st.updateMultisampleRenderTarget(Re),st.updateRenderTargetMipmap(Re))}C.setRenderTarget(Ge,Ve,lt),C.setClearColor(ue,pe),je!==void 0&&(J.viewport=je),C.toneMapping=ot}function oi(A,Y,ae){const J=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,Re=A.length;q<Re;q++){const Ie=A[q],Ge=Ie.object,Ve=Ie.geometry,lt=Ie.group;let ot=Ie.material;ot.allowOverride===!0&&J!==null&&(ot=J),Ge.layers.test(ae.layers)&&Ro(Ge,Y,ae,Ve,ot,lt)}}function Ro(A,Y,ae,J,q,Re){A.onBeforeRender(C,Y,ae,J,q,Re),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(C,Y,ae,J,A,Re),q.transparent===!0&&q.side===br&&q.forceSinglePass===!1?(q.side=Wn,q.needsUpdate=!0,C.renderBufferDirect(ae,Y,J,q,A,Re),q.side=Hi,q.needsUpdate=!0,C.renderBufferDirect(ae,Y,J,q,A,Re),q.side=br):C.renderBufferDirect(ae,Y,J,q,A,Re),A.onAfterRender(C,Y,ae,J,q,Re)}function _s(A,Y,ae){Y.isScene!==!0&&(Y=it);const J=Ke.get(A),q=x.state.lights,Re=x.state.shadowsArray,Ie=q.state.version,Ge=xe.getParameters(A,q.state,Re,Y,ae),Ve=xe.getProgramCacheKey(Ge);let lt=J.programs;J.environment=A.isMeshStandardMaterial?Y.environment:null,J.fog=Y.fog,J.envMap=(A.isMeshStandardMaterial?D:It).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,lt===void 0&&(A.addEventListener("dispose",He),lt=new Map,J.programs=lt);let ot=lt.get(Ve);if(ot!==void 0){if(J.currentProgram===ot&&J.lightsStateVersion===Ie)return Sr(A,Ge),ot}else Ge.uniforms=xe.getUniforms(A),A.onBeforeCompile(Ge,C),ot=xe.acquireProgram(Ge,Ve),lt.set(Ve,ot),J.uniforms=Ge.uniforms;const je=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=ke.uniform),Sr(A,Ge),J.needsLights=Lu(A),J.lightsStateVersion=Ie,J.needsLights&&(je.ambientLightColor.value=q.state.ambient,je.lightProbe.value=q.state.probe,je.directionalLights.value=q.state.directional,je.directionalLightShadows.value=q.state.directionalShadow,je.spotLights.value=q.state.spot,je.spotLightShadows.value=q.state.spotShadow,je.rectAreaLights.value=q.state.rectArea,je.ltc_1.value=q.state.rectAreaLTC1,je.ltc_2.value=q.state.rectAreaLTC2,je.pointLights.value=q.state.point,je.pointLightShadows.value=q.state.pointShadow,je.hemisphereLights.value=q.state.hemi,je.directionalShadowMap.value=q.state.directionalShadowMap,je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,je.spotShadowMap.value=q.state.spotShadowMap,je.spotLightMatrix.value=q.state.spotLightMatrix,je.spotLightMap.value=q.state.spotLightMap,je.pointShadowMap.value=q.state.pointShadowMap,je.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=ot,J.uniformsList=null,ot}function Ao(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=pu.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Sr(A,Y){const ae=Ke.get(A);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function Co(A,Y,ae,J,q){Y.isScene!==!0&&(Y=it),st.resetTextureUnits();const Re=Y.fog,Ie=J.isMeshStandardMaterial?Y.environment:null,Ge=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:da,Ve=(J.isMeshStandardMaterial?D:It).get(J.envMap||Ie),lt=J.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ot=!!ae.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),je=!!ae.morphAttributes.position,_t=!!ae.morphAttributes.normal,mt=!!ae.morphAttributes.color;let Vt=ti;J.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Vt=C.toneMapping);const Ft=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Lt=Ft!==void 0?Ft.length:0,et=Ke.get(J),Ut=x.state.lights;if(ge===!0&&(j===!0||A!==R)){const pn=A===R&&J.id===b;ke.setState(J,A,pn)}let xt=!1;J.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ut.state.version||et.outputColorSpace!==Ge||q.isBatchedMesh&&et.batching===!1||!q.isBatchedMesh&&et.batching===!0||q.isBatchedMesh&&et.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&et.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&et.instancing===!1||!q.isInstancedMesh&&et.instancing===!0||q.isSkinnedMesh&&et.skinning===!1||!q.isSkinnedMesh&&et.skinning===!0||q.isInstancedMesh&&et.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&et.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&et.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&et.instancingMorph===!1&&q.morphTexture!==null||et.envMap!==Ve||J.fog===!0&&et.fog!==Re||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ke.numPlanes||et.numIntersection!==ke.numIntersection)||et.vertexAlphas!==lt||et.vertexTangents!==ot||et.morphTargets!==je||et.morphNormals!==_t||et.morphColors!==mt||et.toneMapping!==Vt||et.morphTargetsCount!==Lt)&&(xt=!0):(xt=!0,et.__version=J.version);let on=et.currentProgram;xt===!0&&(on=_s(J,Y,q));let li=!1,bn=!1,Fr=!1;const Ot=on.getUniforms(),xn=et.uniforms;if(Xe.useProgram(on.program)&&(li=!0,bn=!0,Fr=!0),J.id!==b&&(b=J.id,bn=!0),li||R!==A){Xe.buffers.depth.getReversed()?(le.copy(A.projectionMatrix),rE(le),iE(le),Ot.setValue(O,"projectionMatrix",le)):Ot.setValue(O,"projectionMatrix",A.projectionMatrix),Ot.setValue(O,"viewMatrix",A.matrixWorldInverse);const un=Ot.map.cameraPosition;un!==void 0&&un.setValue(O,Le.setFromMatrixPosition(A.matrixWorld)),Et.logarithmicDepthBuffer&&Ot.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ot.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,bn=!0,Fr=!0)}if(q.isSkinnedMesh){Ot.setOptional(O,q,"bindMatrix"),Ot.setOptional(O,q,"bindMatrixInverse");const pn=q.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ot.setValue(O,"boneTexture",pn.boneTexture,st))}q.isBatchedMesh&&(Ot.setOptional(O,q,"batchingTexture"),Ot.setValue(O,"batchingTexture",q._matricesTexture,st),Ot.setOptional(O,q,"batchingIdTexture"),Ot.setValue(O,"batchingIdTexture",q._indirectTexture,st),Ot.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Ot.setValue(O,"batchingColorTexture",q._colorsTexture,st));const ln=ae.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Ue.update(q,ae,on),(bn||et.receiveShadow!==q.receiveShadow)&&(et.receiveShadow=q.receiveShadow,Ot.setValue(O,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(xn.envMap.value=Ve,xn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&Y.environment!==null&&(xn.envMapIntensity.value=Y.environmentIntensity),bn&&(Ot.setValue(O,"toneMappingExposure",C.toneMappingExposure),et.needsLights&&bo(xn,Fr),Re&&J.fog===!0&&de.refreshFogUniforms(xn,Re),de.refreshMaterialUniforms(xn,J,z,ve,x.state.transmissionRenderTarget[A.id]),pu.upload(O,Ao(et),xn,st)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(pu.upload(O,Ao(et),xn,st),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ot.setValue(O,"center",q.center),Ot.setValue(O,"modelViewMatrix",q.modelViewMatrix),Ot.setValue(O,"normalMatrix",q.normalMatrix),Ot.setValue(O,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const pn=J.uniformsGroups;for(let un=0,Mt=pn.length;un<Mt;un++){const Er=pn[un];V.update(Er,on),V.bind(Er,on)}}return on}function bo(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Lu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,Y,ae){const J=Ke.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Ke.get(A.texture).__webglTexture=Y,Ke.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ae,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const ae=Ke.get(A);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0};const Po=O.createFramebuffer();this.setRenderTarget=function(A,Y=0,ae=0){X=A,N=Y,F=ae;let J=!0,q=null,Re=!1,Ie=!1;if(A){const Ve=Ke.get(A);if(Ve.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(O.FRAMEBUFFER,null),J=!1;else if(Ve.__webglFramebuffer===void 0)st.setupRenderTarget(A);else if(Ve.__hasExternalTextures)st.rebindTextures(A,Ke.get(A.texture).__webglTexture,Ke.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(Ve.__boundDepthTexture!==je){if(je!==null&&Ke.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(A)}}const lt=A.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ie=!0);const ot=Ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ot[Y])?q=ot[Y][ae]:q=ot[Y],Re=!0):A.samples>0&&st.useMultisampledRTT(A)===!1?q=Ke.get(A).__webglMultisampledFramebuffer:Array.isArray(ot)?q=ot[ae]:q=ot,H.copy(A.viewport),se.copy(A.scissor),Z=A.scissorTest}else H.copy(I).multiplyScalar(z).floor(),se.copy(re).multiplyScalar(z).floor(),Z=Ce;if(ae!==0&&(q=Po),Xe.bindFramebuffer(O.FRAMEBUFFER,q)&&J&&Xe.drawBuffers(A,q),Xe.viewport(H),Xe.scissor(se),Xe.setScissorTest(Z),Re){const Ve=Ke.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ve.__webglTexture,ae)}else if(Ie){const Ve=Ke.get(A.texture),lt=Y;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ve.__webglTexture,ae,lt)}else if(A!==null&&ae!==0){const Ve=Ke.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ve.__webglTexture,ae)}b=-1},this.readRenderTargetPixels=function(A,Y,ae,J,q,Re,Ie,Ge=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ve=Ve[Ie]),Ve){Xe.bindFramebuffer(O.FRAMEBUFFER,Ve);try{const lt=A.textures[Ge],ot=lt.format,je=lt.type;if(!Et.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-J&&ae>=0&&ae<=A.height-q&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ge),O.readPixels(Y,ae,J,q,De.convert(ot),De.convert(je),Re))}finally{const lt=X!==null?Ke.get(X).__webglFramebuffer:null;Xe.bindFramebuffer(O.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ae,J,q,Re,Ie,Ge=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ve=Ve[Ie]),Ve)if(Y>=0&&Y<=A.width-J&&ae>=0&&ae<=A.height-q){Xe.bindFramebuffer(O.FRAMEBUFFER,Ve);const lt=A.textures[Ge],ot=lt.format,je=lt.type;if(!Et.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,_t),O.bufferData(O.PIXEL_PACK_BUFFER,Re.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ge),O.readPixels(Y,ae,J,q,De.convert(ot),De.convert(je),0);const mt=X!==null?Ke.get(X).__webglFramebuffer:null;Xe.bindFramebuffer(O.FRAMEBUFFER,mt);const Vt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await nE(O,Vt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,_t),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Re),O.deleteBuffer(_t),O.deleteSync(Vt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,ae=0){const J=Math.pow(2,-ae),q=Math.floor(A.image.width*J),Re=Math.floor(A.image.height*J),Ie=Y!==null?Y.x:0,Ge=Y!==null?Y.y:0;st.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,ae,0,0,Ie,Ge,q,Re),Xe.unbindTexture()};const Lo=O.createFramebuffer(),Do=O.createFramebuffer();this.copyTextureToTexture=function(A,Y,ae=null,J=null,q=0,Re=null){Re===null&&(q!==0?(aa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=q,q=0):Re=0);let Ie,Ge,Ve,lt,ot,je,_t,mt,Vt;const Ft=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(ae!==null)Ie=ae.max.x-ae.min.x,Ge=ae.max.y-ae.min.y,Ve=ae.isBox3?ae.max.z-ae.min.z:1,lt=ae.min.x,ot=ae.min.y,je=ae.isBox3?ae.min.z:0;else{const ln=Math.pow(2,-q);Ie=Math.floor(Ft.width*ln),Ge=Math.floor(Ft.height*ln),A.isDataArrayTexture?Ve=Ft.depth:A.isData3DTexture?Ve=Math.floor(Ft.depth*ln):Ve=1,lt=0,ot=0,je=0}J!==null?(_t=J.x,mt=J.y,Vt=J.z):(_t=0,mt=0,Vt=0);const Lt=De.convert(Y.format),et=De.convert(Y.type);let Ut;Y.isData3DTexture?(st.setTexture3D(Y,0),Ut=O.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(st.setTexture2DArray(Y,0),Ut=O.TEXTURE_2D_ARRAY):(st.setTexture2D(Y,0),Ut=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const xt=O.getParameter(O.UNPACK_ROW_LENGTH),on=O.getParameter(O.UNPACK_IMAGE_HEIGHT),li=O.getParameter(O.UNPACK_SKIP_PIXELS),bn=O.getParameter(O.UNPACK_SKIP_ROWS),Fr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,lt),O.pixelStorei(O.UNPACK_SKIP_ROWS,ot),O.pixelStorei(O.UNPACK_SKIP_IMAGES,je);const Ot=A.isDataArrayTexture||A.isData3DTexture,xn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const ln=Ke.get(A),pn=Ke.get(Y),un=Ke.get(ln.__renderTarget),Mt=Ke.get(pn.__renderTarget);Xe.bindFramebuffer(O.READ_FRAMEBUFFER,un.__webglFramebuffer),Xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Er=0;Er<Ve;Er++)Ot&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ke.get(A).__webglTexture,q,je+Er),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ke.get(Y).__webglTexture,Re,Vt+Er)),O.blitFramebuffer(lt,ot,Ie,Ge,_t,mt,Ie,Ge,O.DEPTH_BUFFER_BIT,O.NEAREST);Xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Ke.has(A)){const ln=Ke.get(A),pn=Ke.get(Y);Xe.bindFramebuffer(O.READ_FRAMEBUFFER,Lo),Xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Do);for(let un=0;un<Ve;un++)Ot?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ln.__webglTexture,q,je+un):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ln.__webglTexture,q),xn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,pn.__webglTexture,Re,Vt+un):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pn.__webglTexture,Re),q!==0?O.blitFramebuffer(lt,ot,Ie,Ge,_t,mt,Ie,Ge,O.COLOR_BUFFER_BIT,O.NEAREST):xn?O.copyTexSubImage3D(Ut,Re,_t,mt,Vt+un,lt,ot,Ie,Ge):O.copyTexSubImage2D(Ut,Re,_t,mt,lt,ot,Ie,Ge);Xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else xn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Ut,Re,_t,mt,Vt,Ie,Ge,Ve,Lt,et,Ft.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Ut,Re,_t,mt,Vt,Ie,Ge,Ve,Lt,Ft.data):O.texSubImage3D(Ut,Re,_t,mt,Vt,Ie,Ge,Ve,Lt,et,Ft):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Re,_t,mt,Ie,Ge,Lt,et,Ft.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Re,_t,mt,Ft.width,Ft.height,Lt,Ft.data):O.texSubImage2D(O.TEXTURE_2D,Re,_t,mt,Ie,Ge,Lt,et,Ft);O.pixelStorei(O.UNPACK_ROW_LENGTH,xt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,on),O.pixelStorei(O.UNPACK_SKIP_PIXELS,li),O.pixelStorei(O.UNPACK_SKIP_ROWS,bn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Fr),Re===0&&Y.generateMipmaps&&O.generateMipmap(Ut),Xe.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,ae=null,J=null,q=0){return aa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,ae,J,q)},this.initRenderTarget=function(A){Ke.get(A).__webglFramebuffer===void 0&&st.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?st.setTextureCube(A,0):A.isData3DTexture?st.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?st.setTexture2DArray(A,0):st.setTexture2D(A,0),Xe.unbindTexture()},this.resetState=function(){N=0,F=0,X=null,Xe.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}function CR(r){switch(r){case"fa-user-tag":case"fa-person":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"12",cy:"7",r:"3.5"}),$.jsx("path",{d:"M5 21c0-4.2 3.1-7 7-7s7 2.8 7 7"})]});case"fa-venus-mars":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"8",cy:"9",r:"3.5"}),$.jsx("path",{d:"M8 12.5V21M5 17.5h6"}),$.jsx("circle",{cx:"16.5",cy:"14.5",r:"3.5"}),$.jsx("path",{d:"M19 12l3-3m0 0h-4m4 0v4"})]});case"fa-palette":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0 0-5H12a2 2 0 0 1 0-4h3a6 6 0 0 0-3-9Z"}),$.jsx("circle",{cx:"7",cy:"10",r:".7",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"6.5",r:".7",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"13",cy:"5.8",r:".7",fill:"currentColor",stroke:"none"})]});case"fa-eye":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z"}),$.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]});case"fa-eye-dropper":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m14 5 5 5M16.5 2.5l5 5-10 10-4 1 1-4 10-10Z"}),$.jsx("path",{d:"M5 19h6"})]});case"fa-scissors":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"6",cy:"7",r:"2.5"}),$.jsx("circle",{cx:"6",cy:"17",r:"2.5"}),$.jsx("path",{d:"m8 8.5 12 8.5M8 15.5 20 7"})]});case"fa-fill-drip":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m4 14 8-8 6 6-8 8H4v-6Z"}),$.jsx("path",{d:"M15 5 12 2"}),$.jsx("path",{d:"M20 15s2 2.2 2 3.5a2 2 0 0 1-4 0c0-1.3 2-3.5 2-3.5Z"})]});case"fa-hat-cowboy":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M4 16h16M7 16l1.5-7h7L17 16"}),$.jsx("path",{d:"M2.5 16c1.5 3 17.5 3 19 0"})]});case"fa-shirt":return $.jsx("path",{d:"M8 4h8l5 4-3 4-2-2v10H8V10l-2 2-3-4 5-4Z"});case"fa-shoe-prints":return $.jsxs($.Fragment,{children:[$.jsx("ellipse",{cx:"8",cy:"8",rx:"2.5",ry:"4",transform:"rotate(-20 8 8)"}),$.jsx("ellipse",{cx:"16",cy:"16",rx:"2.5",ry:"4",transform:"rotate(-20 16 16)"})]});case"fa-gem":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M6 4h12l4 5-10 11L2 9l4-5Z"}),$.jsx("path",{d:"M2 9h20M8 4l4 16 4-16"})]});case"fa-sliders":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M4 6h5M15 6h5M4 12h10M18 12h2M4 18h2M10 18h10"}),$.jsx("circle",{cx:"12",cy:"6",r:"2"}),$.jsx("circle",{cx:"16",cy:"12",r:"2"}),$.jsx("circle",{cx:"8",cy:"18",r:"2"})]});case"fa-grip-vertical":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"9",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"18",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"18",r:"1",fill:"currentColor",stroke:"none"})]});case"fa-chevron-up":return $.jsx("path",{d:"m6 15 6-6 6 6"});case"fa-chevron-down":return $.jsx("path",{d:"m6 9 6 6 6-6"});case"fa-check":return $.jsx("path",{d:"m5 12 4 4L19 6"});case"fa-arrows-rotate":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M20 7v5h-5"}),$.jsx("path",{d:"M4 17v-5h5"}),$.jsx("path",{d:"M6.2 8.2A7 7 0 0 1 18.8 10M17.8 15.8A7 7 0 0 1 5.2 14"})]});case"fa-layer-group":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),$.jsx("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]});case"fa-pause":return $.jsx("path",{d:"M8 5v14M16 5v14"});case"fa-play":return $.jsx("path",{d:"m8 5 11 7-11 7V5Z"});case"fa-download":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M12 3v12m0 0 4-4m-4 4-4-4"}),$.jsx("path",{d:"M5 20h14"})]});default:return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"12",cy:"12",r:"8"}),$.jsx("path",{d:"M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01"})]})}}function Fi({name:r,className:e=""}){return $.jsx("svg",{className:`skincrafter-icon ${e}`.trim(),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false","data-skincrafter-icon":r,children:CR(r)})}function d_({title:r,icon:e,iconClassName:t="skincrafter-accent-text",className:s="",children:a}){return $.jsxs("section",{className:`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${s}`,children:[$.jsxs("h2",{className:"text-xl font-bold mb-2 skincrafter-heading flex items-center",children:[$.jsx(Fi,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),r]}),a]})}function nu({icon:r,className:e="",children:t,...s}){return $.jsxs("button",{className:`pixel-button preview-action-button p-2 pixel-border transition-colors ${e}`,...s,children:[r&&$.jsx(Fi,{name:r,className:"skincrafter-button-icon"}),t]})}const bR=""+new URL("/assets/default-BAcllNor-BAcllNor.png",import.meta.url).href,PR=""+new URL("/assets/male.tintable-fxeAI3uu-fxeAI3uu.png",import.meta.url).href,LR=""+new URL("/assets/male.fixed-DcqZ3kjg-DcqZ3kjg.png",import.meta.url).href,DR=""+new URL("/assets/female.tintable-BLp5_Gdk-BLp5_Gdk.png",import.meta.url).href,UR=""+new URL("/assets/female.fixed-DbzKxh-8-DbzKxh-8.png",import.meta.url).href,NR=""+new URL("/assets/male.fixed-C1cq_pNO-C1cq_pNO.png",import.meta.url).href,IR=""+new URL("/assets/male.tintable-D_4mkZ79-D_4mkZ79.png",import.meta.url).href,FR=""+new URL("/assets/male.fixed-BGzxECBj-BGzxECBj.png",import.meta.url).href,OR=""+new URL("/assets/male.tintable-Dll7q7aD-Dll7q7aD.png",import.meta.url).href,kR=""+new URL("/assets/male.fixed-DKYrqDB3-DKYrqDB3.png",import.meta.url).href,BR=""+new URL("/assets/none.tintable-Bs7knCxE-Bs7knCxE.png",import.meta.url).href,zR=""+new URL("/assets/none.fixed-DGZLEiFj-DGZLEiFj.png",import.meta.url).href,HR=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,VR=""+new URL("/assets/clasic.fixed-Dli_mmU6-Dli_mmU6.png",import.meta.url).href,GR=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,WR=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,XR=""+new URL("/assets/big.fixed-BuEC2Ubs-BuEC2Ubs.png",import.meta.url).href,jR=""+new URL("/assets/duck-Dz_q_Va_-Dz_q_Va_.png",import.meta.url).href,$R=""+new URL("/assets/hoodie-C1a1is5P-C1a1is5P.png",import.meta.url).href,YR=""+new URL("/assets/pants-gRdPSA1G-gRdPSA1G.png",import.meta.url).href,h_={"textures/preview/default.png":bR,"textures/race/human/male.tintable.png":PR,"textures/race/human/male.fixed.png":LR,"textures/race/human/female.tintable.png":DR,"textures/race/human/female.fixed.png":UR,"textures/race/bear/male.fixed.png":NR,"textures/race/orc/male.tintable.png":IR,"textures/race/orc/male.fixed.png":FR,"textures/race/zombie/male.tintable.png":OR,"textures/race/zombie/male.fixed.png":kR,"textures/race/template/none.tintable.png":BR,"textures/race/template/none.fixed.png":zR,"textures/eyes/clasic.tintable.png":HR,"textures/eyes/clasic.fixed.png":VR,"textures/eyes/small.tintable.png":GR,"textures/eyes/big.tintable.png":WR,"textures/eyes/big.fixed.png":XR,"textures/hat/duck.png":jR,"textures/top/male/hoodie.png":$R,"textures/bottom/pants.png":YR};function la(r,e){return e?`${e.replace(/\/+$/,"")}/${r.replace(/^\/+/,"")}`:h_[r]}const Kg=h_["textures/preview/default.png"],na=64,qR=["bottom"];function ir(r,e,t,s,a,l,c,f,d={}){const{transparent:p=!1,expand:m=0,rotate180Faces:v=[],flipXFaces:_=[],flipYFaces:S=qR}=d,E=new Set(v),w=new Set(_),y=new Set(S),x=new _a(e+m,t+m,s+m),L=()=>new lh({transparent:p,toneMapped:!1,alphaTest:p?.1:0,side:br}),P=[L(),L(),L(),L(),L(),L()],C=(X,b,R=!1,H=!1)=>{const se=r.clone(),Z=(b[2]-b[0])/na,ue=(b[3]-b[1])/na,pe=b[0]/na,ce=b[2]/na,ve=1-b[1]/na,z=1-b[3]/na;se.magFilter=vn,se.minFilter=vn,se.generateMipmaps=!1,se.wrapS=co,se.wrapT=co,se.repeat.set(R?-Z:Z,H?-ue:ue),se.offset.set(R?ce:pe,H?ve:z),se.needsUpdate=!0,X.map=se},k=X=>E.has(X)||w.has(X),N=X=>E.has(X)||y.has(X);C(P[0],f.right,k("right"),N("right")),C(P[1],f.left,k("left"),N("left")),C(P[2],f.top,k("top"),N("top")),C(P[3],f.bottom,k("bottom"),N("bottom")),C(P[4],f.front,k("front"),N("front")),C(P[5],f.back,k("back"),N("back"));const F=new Lr(x,P);return F.position.set(a,l,c),F}const KR=-6,ZR=6,ru=new ne(-5,16,0),iu=new ne(5,16,0),p_=-1.9,m_=1.9,Zg=new ne(p_,6,0),Jg=new ne(m_,6,0);function sr(r,e,t,s){if(!r)return;const a=e.clone().sub(t).applyEuler(s).add(t);r.position.copy(a),r.rotation.copy(s)}function JR(r,e,t={}){const{armL:s,armR:a,legL:l,legR:c,armLOL:f,armROL:d,legLOL:p,legROL:m}=e,v=t.leftArmX??ZR,_=t.rightArmX??KR,S=new ne(v,12,0),E=new ne(_,12,0),w=new ne(m_,0,0),y=new ne(p_,0,0);if(!(!s||!a||!l||!c)){if([s,a,l,c,f,d,p,m].forEach(x=>x?.rotation.set(0,0,0)),s.position.copy(S),a.position.copy(E),l.position.copy(w),c.position.copy(y),f?.position.copy(S),d?.position.copy(E),p?.position.copy(w),m?.position.copy(y),r==="tpose"){const x=new Fn(0,0,Math.PI/2),L=new Fn(0,0,-Math.PI/2);sr(s,S,iu,x),sr(a,E,ru,L),sr(f,S,iu,x),sr(d,E,ru,L)}else if(r==="walking"){const x=-Math.PI/4,L=Math.PI/4,P=new Fn(x,0,0),C=new Fn(L,0,0),k=new Fn(L,0,0),N=new Fn(x,0,0);sr(s,S,iu,P),sr(a,E,ru,C),sr(l,w,Jg,k),sr(c,y,Zg,N),sr(f,S,iu,P),sr(d,E,ru,C),sr(p,w,Jg,k),sr(m,y,Zg,N)}}}const QR={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},eA={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},tA={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},nA={left:[40,20,44,32],right:[47,20,51,32],top:[44,16,47,20],bottom:[47,16,50,20],front:[44,20,47,32],back:[51,20,54,32]},rA={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},iA={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},sA={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},aA={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},oA={left:[40,36,44,48],right:[47,36,51,48],top:[44,32,47,36],bottom:[47,32,50,36],front:[44,36,47,48],back:[51,36,54,48]},lA={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},uA={left:[32,52,36,64],right:[40,52,44,64],top:[36,48,40,52],bottom:[40,48,44,52],front:[36,52,40,64],back:[44,52,48,64]},cA={left:[32,52,36,64],right:[39,52,43,64],top:[36,48,39,52],bottom:[39,48,42,52],front:[36,52,39,64],back:[43,52,46,64]},fA={left:[16,52,20,64],right:[24,52,28,64],top:[20,48,24,52],bottom:[24,48,28,52],front:[20,52,24,64],back:[28,52,32,64]},dA={left:[48,52,52,64],right:[56,52,60,64],top:[52,48,56,52],bottom:[56,48,60,52],front:[52,52,56,64],back:[60,52,64,64]},hA={left:[48,52,52,64],right:[55,52,59,64],top:[52,48,55,52],bottom:[55,48,58,52],front:[52,52,55,64],back:[59,52,62,64]},pA={left:[0,52,4,64],right:[8,52,12,64],top:[4,48,8,52],bottom:[8,48,12,52],front:[4,52,8,64],back:[12,52,16,64]},Yf=0,mA=44,gA=24,vA=72,_A=.04,xA=1,yA=.5,Qg=-6,ev=6,tv=-5.5,nv=5.5,rv=-1.9,iv=1.9,sv=()=>({armL:null,armR:null,legL:null,legR:null,armLOL:null,armROL:null,legLOL:null,legROL:null,headOL:null,bodyOL:null}),SA={createRenderer:()=>new AR({antialias:!1,alpha:!0}),createTextureLoader:()=>new BE,createResizeObserver:r=>new ResizeObserver(r),requestAnimationFrame:r=>window.requestAnimationFrame(r),cancelAnimationFrame:r=>window.cancelAnimationFrame(r),addWindowResizeListener:r=>window.addEventListener("resize",r),removeWindowResizeListener:r=>window.removeEventListener("resize",r),getDevicePixelRatio:()=>window.devicePixelRatio||1};class EA{constructor(e,t,s=SA){this.container=e,this.dependencies=s,this.pose=t.pose,this.model=t.model,this.showOverlay=t.showOverlay,this.autoRotate=t.autoRotate,this.onError=t.onError;const a=e.clientWidth||1,l=e.clientHeight||1;this.renderer=s.createRenderer(),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=In,this.renderer.toneMapping=ti,this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(a,l),e.appendChild(this.renderer.domElement),this.camera=new ar(52,a/l,.1,1e3),this.camera.position.set(0,Yf,this.cameraDistance),this.camera.lookAt(0,Yf,0),this.scene=new PE;const c=new GE(16777215,1);c.position.set(10,10,10),this.scene.add(c),this.group=new io,this.group.position.y=-10,this.scene.add(this.group),this.textureLoader=s.createTextureLoader(),this.resizeObserver=s.createResizeObserver(this.handleResize),this.resizeObserver.observe(e),s.addWindowResizeListener(this.handleResize),e.addEventListener("wheel",this.handleWheel,{passive:!1}),this.handleResize(),this.scheduleAnimationFrame(),this.setTexture(t.textureUrl)}container;dependencies;renderer;camera;scene;group;textureLoader;resizeObserver;onError;disposedTextures=new WeakSet;pendingTextures=new Map;parts=sv();modelMeshes=[];currentTexture=null;requestedTextureUrl=null;textureLoadVersion=0;animationFrameId=null;disposed=!1;pose;model;showOverlay;autoRotate;cameraDistance=mA;modelRevision=0;textureRevision=0;setTexture(e){if(this.disposed||e===this.requestedTextureUrl)return;this.requestedTextureUrl=e;const t=++this.textureLoadVersion;let s=!1;const a=this.textureLoader.load(e,l=>{s=!0,this.pendingTextures.delete(t),this.handleTextureLoaded(t,l)},void 0,l=>{s=!0;const c=this.pendingTextures.get(t);c&&(this.disposeTexture(c),this.pendingTextures.delete(t)),!this.disposed&&t===this.textureLoadVersion&&this.onError?.({code:"texture_load_failed",textureUrl:e,cause:l})});s||this.pendingTextures.set(t,a)}setModel(e){this.disposed||e===this.model||(this.model=e,this.currentTexture&&this.buildModel(this.currentTexture))}setPose(e){this.disposed||e===this.pose||(this.pose=e,this.applyCurrentPose())}setShowOverlay(e){this.disposed||e===this.showOverlay||(this.showOverlay=e,this.applyOverlayVisibility())}setAutoRotate(e){this.disposed||(this.autoRotate=e)}getDiagnostics(){const e=this.parts.armR?.geometry.parameters.width;return{rendererAttached:this.renderer.domElement.parentNode===this.container,modelRevision:this.modelRevision,textureRevision:this.textureRevision,meshCount:this.modelMeshes.length,rightArmWidth:typeof e=="number"?e:null,overlayVisible:this.getOverlayMeshes().map(t=>t.visible),cameraDistance:this.cameraDistance,rotation:this.group.rotation.y}}dispose(){this.disposed||(this.disposed=!0,this.textureLoadVersion+=1,this.container.removeEventListener("wheel",this.handleWheel),this.dependencies.removeWindowResizeListener(this.handleResize),this.resizeObserver.disconnect(),this.animationFrameId!==null&&(this.dependencies.cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.pendingTextures.forEach(e=>this.disposeTexture(e)),this.pendingTextures.clear(),this.disposeModel(),this.currentTexture&&(this.disposeTexture(this.currentTexture),this.currentTexture=null),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement))}handleResize=()=>{if(this.disposed)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()};handleWheel=e=>{this.disposed||(e.preventDefault(),this.cameraDistance=eE.clamp(this.cameraDistance+e.deltaY*_A,gA,vA),this.camera.position.z=this.cameraDistance,this.camera.lookAt(0,Yf,0),this.camera.updateProjectionMatrix())};scheduleAnimationFrame(){this.animationFrameId=this.dependencies.requestAnimationFrame(()=>{this.disposed||(this.autoRotate&&(this.group.rotation.y+=.01),this.renderer.render(this.scene,this.camera),this.scheduleAnimationFrame())})}getClampedDpr(){return Math.min(this.dependencies.getDevicePixelRatio(),2)}handleTextureLoaded(e,t){if(this.disposed||e!==this.textureLoadVersion){this.disposeTexture(t);return}this.configureTexture(t);const s=this.currentTexture;this.modelMeshes.length===0?this.buildModel(t):this.replaceModelTexture(t),this.currentTexture=t,this.textureRevision+=1,s&&s!==t&&this.disposeTexture(s)}configureTexture(e){e.magFilter=vn,e.minFilter=vn,e.generateMipmaps=!1,e.colorSpace=In,e.wrapS=Jr,e.wrapT=Jr}buildModel(e){this.disposeModel();const t=this.model==="slim",s=t?3:4,a=t?tv:Qg,l=t?nv:ev,c=t?nA:tA,f=t?cA:uA,d=t?oA:aA,p=t?hA:dA,m=ir(e,8,8,8,0,22,0,QR),v=ir(e,8,12,4,0,12,0,eA),_=ir(e,s,12,4,a,12,0,c),S=ir(e,s,12,4,l,12,0,f),E=ir(e,4,12,4,rv,0,0,rA),w=ir(e,4,12,4,iv,0,0,fA),y={transparent:!0,expand:xA},x={transparent:!0,expand:yA},L=ir(e,8,8,8,0,22,0,iA,y),P=ir(e,8,12,4,0,12,0,sA,x),C=ir(e,s,12,4,a,12,0,d,x),k=ir(e,s,12,4,l,12,0,p,x),N=ir(e,4,12,4,rv,0,0,lA,x),F=ir(e,4,12,4,iv,0,0,pA,x);this.parts={armL:S,armR:_,legL:w,legR:E,armLOL:k,armROL:C,legLOL:F,legROL:N,headOL:L,bodyOL:P},this.modelMeshes=[m,v,_,S,E,w,L,P,C,k,N,F],this.group.add(...this.modelMeshes),this.modelRevision+=1,this.applyOverlayVisibility(),this.applyCurrentPose()}replaceModelTexture(e){this.modelMeshes.forEach(t=>{t.material.forEach(s=>{const a=s.map;if(!a)return;const l=e.clone();l.magFilter=vn,l.minFilter=vn,l.generateMipmaps=!1,l.colorSpace=In,l.wrapS=a.wrapS,l.wrapT=a.wrapT,l.repeat.copy(a.repeat),l.offset.copy(a.offset),l.center.copy(a.center),l.rotation=a.rotation,l.flipY=a.flipY,l.needsUpdate=!0,s.map=l,s.needsUpdate=!0,this.disposeTexture(a)})})}applyCurrentPose(){const e=this.model==="slim";JR(this.pose,{armL:this.parts.armL,armR:this.parts.armR,legL:this.parts.legL,legR:this.parts.legR,armLOL:this.parts.armLOL,armROL:this.parts.armROL,legLOL:this.parts.legLOL,legROL:this.parts.legROL},{leftArmX:e?nv:ev,rightArmX:e?tv:Qg})}applyOverlayVisibility(){this.getOverlayMeshes().forEach(e=>{e.visible=this.showOverlay})}getOverlayMeshes(){return[this.parts.headOL,this.parts.bodyOL,this.parts.armLOL,this.parts.armROL,this.parts.legLOL,this.parts.legROL].filter(e=>e!==null)}disposeModel(){this.modelMeshes.forEach(e=>{this.group.remove(e),e.geometry.dispose(),e.material.forEach(t=>{t.map&&(this.disposeTexture(t.map),t.map=null),t.dispose()})}),this.modelMeshes=[],this.parts=sv()}disposeTexture(e){this.disposedTextures.has(e)||(this.disposedTextures.add(e),e.dispose())}}function MA(r,e,t){return new EA(r,e,t)}function wA(r){return{code:"preview_texture_load_failed",category:"preview",message:`Failed to load preview texture: ${r.textureUrl}`,assetUrl:r.textureUrl,cause:r.cause}}function TA({texture:r,pose:e="default",model:t="classic",showOverlay:s=!0,autoRotate:a=!0,style:l,onError:c}){const f=G.useRef(null),d=G.useRef(null),p=G.useRef(c),m=G.useRef({textureUrl:r??Kg,pose:e,model:t,showOverlay:s,autoRotate:a,onError:v=>p.current?.(wA(v))});return G.useEffect(()=>{p.current=c},[c]),G.useEffect(()=>{const v=f.current;if(!v)return;let _;try{_=MA(v,m.current)}catch(S){p.current?.({code:"preview_webgl_initialization_failed",category:"preview",message:"Failed to initialize the WebGL skin preview.",cause:S});return}return d.current=_,()=>{_.dispose(),d.current===_&&(d.current=null)}},[]),G.useEffect(()=>{d.current?.setTexture(r??Kg)},[r]),G.useEffect(()=>{d.current?.setModel(t)},[t]),G.useEffect(()=>{d.current?.setPose(e)},[e]),G.useEffect(()=>{d.current?.setShowOverlay(s)},[s]),G.useEffect(()=>{d.current?.setAutoRotate(a)},[a]),$.jsx("div",{ref:f,style:{width:"100%",height:"100%",minHeight:0,position:"relative",touchAction:"none",...l??{}}})}const g_=["en","pl"],ya="en",av={en:{"app.title":"SkinCrafter","nav.wardrobe":"Wardrobe","nav.skinView":"Skin View","nav.language":"Language","nav.workInProgress":"Work in progress","panel.preview":"Preview","panel.customization":"Customization","panel.loadSkin":"Load Minecraft Skin","action.changePose":"Change Pose","action.hideOverlay":"Hide Overlay","action.showOverlay":"Show Overlay","action.disableAutoRotate":"Stop Rotation","action.enableAutoRotate":"Start Rotation","action.download":"Download","action.downloadSkin":"Download character skin","action.dragLayer":"Drag layer","action.moveLayerUp":"Move layer up","action.moveLayerDown":"Move layer down","action.loadSkin":"Load Skin","action.loading":"Loading...","error.assetLoad":"A skin texture could not be loaded. Check the selected assets and try again.","error.generation":"The skin could not be generated. Change the selection and try again.","error.initialSkin":"The supplied skin is not a valid 64x64 Minecraft PNG.","error.preview":"The 3D preview could not be loaded. Skin editing and download may still be available.","skinView.player":"Player","skinView.username":"Minecraft username","category.race":"Character Race","category.sex":"Sex","category.skinColor":"Skin Color","category.eyes":"Eyes","category.eyesColor":"Eye Color","category.hair":"Hair","category.hairColor":"Hair Color","category.hat":"Hat","category.shirt":"Shirt","category.pants":"Pants","category.shoes":"Shoes","category.accessory":"Accessory","option.none":"None","option.sex.Male":"Male","option.sex.Female":"Female","option.race.Human":"Human","option.race.Bear":"Bear","option.race.Orc":"Orc","option.race.Zombie":"Zombie","option.race.Template":"Template","option.eyes.Classic":"Classic","option.eyes.Small":"Small","option.eyes.Big":"Big","option.hat.Duck":"Duck","option.shirt.Hoodie":"Hoodie","option.pants.Pants":"Pants","option.color.blue":"Blue","option.color.green":"Green","option.color.brown":"Brown","option.color.blond":"Blond","option.color.black":"Black"},pl:{"app.title":"SkinCrafter","nav.wardrobe":"Kreator","nav.skinView":"Podglad","nav.language":"Jezyk","nav.workInProgress":"Produkt w trakcie prac","panel.preview":"Podglad","panel.customization":"Personalizacja","panel.loadSkin":"Wczytaj skin Minecraft","action.changePose":"Zmien Poze","action.hideOverlay":"Ukryj Warstwe","action.showOverlay":"Pokaz Warstwe","action.disableAutoRotate":"Zatrzymaj Obrot","action.enableAutoRotate":"Wlacz Obrot","action.download":"Pobierz","action.downloadSkin":"Pobierz skin postaci","action.dragLayer":"Przeciagnij warstwe","action.moveLayerUp":"Przesun warstwe wyzej","action.moveLayerDown":"Przesun warstwe nizej","action.loadSkin":"Wczytaj Skin","action.loading":"Wczytywanie...","error.assetLoad":"Nie udalo sie wczytac tekstury skina. Sprawdz wybrane elementy i sprobuj ponownie.","error.generation":"Nie udalo sie wygenerowac skina. Zmien wybor i sprobuj ponownie.","error.initialSkin":"Przekazany skin nie jest prawidlowym plikiem PNG Minecraft 64x64.","error.preview":"Nie udalo sie uruchomic podgladu 3D. Edycja i pobieranie skina moga nadal dzialac.","skinView.player":"Gracz","skinView.username":"Nazwa gracza Minecraft","category.race":"Rasa Postaci","category.sex":"Plec","category.skinColor":"Kolor Skory","category.eyes":"Oczy","category.eyesColor":"Kolor Oczu","category.hair":"Wlosy","category.hairColor":"Kolor Wlosow","category.hat":"Czapka","category.shirt":"Koszulka","category.pants":"Spodnie","category.shoes":"Buty","category.accessory":"Dodatek","option.none":"Brak","option.sex.Male":"Mezczyzna","option.sex.Female":"Kobieta","option.race.Human":"Czlowiek","option.race.Bear":"Niedzwiedz","option.race.Orc":"Ork","option.race.Zombie":"Zombie","option.race.Template":"Szablon","option.eyes.Classic":"Klasyczne","option.eyes.Small":"Male","option.eyes.Big":"Duze","option.hat.Duck":"Kaczka","option.shirt.Hoodie":"Bluza","option.pants.Pants":"Spodnie","option.color.blue":"Niebieski","option.color.green":"Zielony","option.color.brown":"Brazowy","option.color.blond":"Blond","option.color.black":"Czarny"}};function RA(r){return!!r&&g_.includes(r)}function To(r,e){return av[r][e]??av[ya][e]??e}const AA=r=>To(ya,r);function CA(r){return r.code==="asset_load_failed"?"error.assetLoad":r.code==="invalid_initial_skin"?"error.initialSkin":r.category==="preview"?"error.preview":"error.generation"}function v_({texture:r,model:e="classic",footerHeight:t=0,t:s=AA,onSave:a,canSave:l,generationStatus:c,generationError:f,onError:d}){const[p,m]=G.useState("default"),[v,_]=G.useState(!0),[S,E]=G.useState(!0),[w,y]=G.useState(null),x=()=>{m(R=>R==="default"?"tpose":R==="tpose"?"walking":"default")},L=()=>{_(R=>!R)},P=()=>{E(R=>!R)},C=l??!!r,k=()=>{if(!r||!C)return;const R=document.createElement("a");R.href=r,R.download="skincrafter-skin.png",R.click()},N=()=>{if(C){if(a){a();return}k()}},F=G.useCallback(R=>{y(R),d?.(R)},[d]);G.useEffect(()=>{y(R=>R?.code==="preview_texture_load_failed"?null:R)},[r]);const X=c==="error"&&f?f:w,b={"--skincrafter-preview-bottom-offset":`${Math.max(0,t)}px`};return $.jsxs(d_,{title:s("panel.preview"),icon:"fa-eye",children:[$.jsx("div",{className:"skincrafter-preview-surface overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full",style:b,children:$.jsx("div",{className:"flex justify-center items-center model-placeholder h-full",children:$.jsx(TA,{texture:r,pose:p,model:e,showOverlay:v,autoRotate:S,onError:F})})}),X&&$.jsx("p",{className:"mt-3 text-sm font-semibold skincrafter-error-text",role:"alert",children:s(CA(X))}),$.jsxs("div",{className:"mt-4 preview-actions",children:[$.jsx(nu,{className:"skincrafter-secondary-action",icon:"fa-arrows-rotate","aria-label":s("action.changePose"),onClick:x,children:s("action.changePose")}),$.jsx(nu,{className:"skincrafter-secondary-action",icon:"fa-layer-group","aria-label":s(v?"action.hideOverlay":"action.showOverlay"),onClick:L,children:s(v?"action.hideOverlay":"action.showOverlay")}),$.jsx(nu,{className:"skincrafter-secondary-action",icon:S?"fa-pause":"fa-play","aria-label":s(S?"action.disableAutoRotate":"action.enableAutoRotate"),onClick:P,children:s(S?"action.disableAutoRotate":"action.enableAutoRotate")}),$.jsx(nu,{className:"skincrafter-secondary-action disabled:opacity-50 disabled:cursor-not-allowed",icon:"fa-download","aria-label":s("action.downloadSkin"),onClick:N,disabled:!C,children:s("action.download")})]})]})}function bA({left:r,right:e}){return $.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:r}),$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:e})]})}function PA(r,e){if(r.length===0)return null;for(const t of r){const s=t.top+(t.bottom-t.top)/2;if(e<s)return{targetLayer:t.layer,position:"before"};if(e<=t.bottom)return{targetLayer:t.layer,position:"after"}}return{targetLayer:r[r.length-1].layer,position:"after"}}function LA(r,e,t,s){if(!r.includes(e)||!r.includes(t))return[...r];if(e===t)return[...r];const a=r.filter(c=>c!==e),l=a.indexOf(t)+(s==="after"?1:0);return a.splice(l,0,e),a}function DA({heading:r,icon:e,iconClassName:t="skincrafter-category-icon",className:s="",children:a,...l}){return $.jsxs("div",{className:`option-card skincrafter-surface p-4 pixel-border relative ${r?"pt-5":""} ${s}`,...l,children:[r&&$.jsxs("h3",{className:"font-medium mb-2 flex items-center absolute -top-3 left-4 px-2 skincrafter-surface skincrafter-heading z-10",children:[e&&$.jsx(Fi,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),r]}),a]})}const UA=["None","Duck"];function NA(r,e){return r==="Duck"?la("textures/hat/duck.png",e):null}const IA=["None","Pants"];function FA(r,e){return r==="Pants"?la("textures/bottom/pants.png",e):null}function Zr(r){if(!r.tintable&&!r.fixed)throw new Error("A texture-backed option must define a tintable layer, a fixed layer, or both.");return{...r}}function mu(r,e){return r.tintable?{tintable:la(r.tintable,e),...r.fixed?{fixed:la(r.fixed,e)}:{}}:{fixed:la(r.fixed,e)}}function qf(r){return!!r?.tintable}const __={Human:{Male:Zr({tintable:"textures/race/human/male.tintable.png",fixed:"textures/race/human/male.fixed.png"}),Female:Zr({tintable:"textures/race/human/female.tintable.png",fixed:"textures/race/human/female.fixed.png"})},Bear:{Male:Zr({fixed:"textures/race/bear/male.fixed.png"})},Orc:{Male:Zr({tintable:"textures/race/orc/male.tintable.png",fixed:"textures/race/orc/male.fixed.png"})},Zombie:{Male:Zr({tintable:"textures/race/zombie/male.tintable.png",fixed:"textures/race/zombie/male.fixed.png"})},Template:{None:Zr({tintable:"textures/race/template/none.tintable.png",fixed:"textures/race/template/none.fixed.png"})}};function x_(r){return Object.keys(__[r])}function dh(r,e,t){const s=__[r],a=x_(r)[0],l=s[e]??s[a];return l?mu(l,t):null}const OA=["Human","Bear","Orc","Zombie"],kA=["None","Hoodie"];function BA(r,e){return r==="Hoodie"?la("textures/top/male/hoodie.png",e):null}const y_={Human:["#D5BAAA","#E0AC69","#C68642"],Bear:["#5D4037","#8D6E63","#A1887F"],Orc:["#558B2F","#7CB342"],Zombie:["#556B2F"],Template:["#FFFFFF"]},Gi=[{id:"race",labelKey:"category.race",icon:"fa-user-tag",control:"choice"},{id:"sex",labelKey:"category.sex",icon:"fa-venus-mars",control:"choice"},{id:"skinColor",labelKey:"category.skinColor",icon:"fa-palette",control:"color"},{id:"eyes",labelKey:"category.eyes",icon:"fa-eye",control:"choice"},{id:"eyesColor",labelKey:"category.eyesColor",icon:"fa-eye-dropper",control:"color"},{id:"hair",labelKey:"category.hair",icon:"fa-scissors",control:"choice"},{id:"hairColor",labelKey:"category.hairColor",icon:"fa-fill-drip",control:"color"},{id:"hat",labelKey:"category.hat",icon:"fa-hat-cowboy",control:"choice"},{id:"shirt",labelKey:"category.shirt",icon:"fa-shirt",control:"choice"},{id:"pants",labelKey:"category.pants",icon:"fa-person",control:"choice"},{id:"shoes",labelKey:"category.shoes",icon:"fa-shoe-prints",control:"choice"},{id:"accessory",labelKey:"category.accessory",icon:"fa-gem",control:"choice"}],Oi={race:"Human",sex:"Male",skinColor:y_.Human[0],eyes:"Classic",eyesColor:"#2F5D9B",hair:"None",hairColor:"#4A2F20",hat:"None",shirt:"None",pants:"None",shoes:"None",accessory:"None"},Su=["hat","shirt","pants","shoes","accessory"],Hd={id:"None",labelKey:"option.none",textureLayers:null},zA={Male:{id:"Male",labelKey:"option.sex.Male",textureLayers:null},Female:{id:"Female",labelKey:"option.sex.Female",textureLayers:null},None:Hd},Kf={Classic:Zr({tintable:"textures/eyes/clasic.tintable.png",fixed:"textures/eyes/clasic.fixed.png"}),Small:Zr({tintable:"textures/eyes/small.tintable.png"}),Big:Zr({tintable:"textures/eyes/big.tintable.png",fixed:"textures/eyes/big.fixed.png"})},Zf=r=>r?{fixed:r}:null;function ri(r,e,t){if(r==="race")return OA.map(s=>({id:s,labelKey:`option.race.${s}`,textureLayers:dh(s,"Male",t)}));if(r==="sex")return x_(e.race).map(s=>zA[s]);if(r==="skinColor"){const s=e.race;return y_[s].map(a=>({id:a,labelKey:`option.skinColor.${a}`,color:a}))}return r==="eyes"?[{id:"Classic",labelKey:"option.eyes.Classic",textureLayers:mu(Kf.Classic,t)},{id:"Small",labelKey:"option.eyes.Small",textureLayers:mu(Kf.Small,t)},{id:"Big",labelKey:"option.eyes.Big",textureLayers:mu(Kf.Big,t)}]:r==="eyesColor"?[{id:"#2F5D9B",labelKey:"option.color.blue",color:"#2F5D9B"},{id:"#2F8F4E",labelKey:"option.color.green",color:"#2F8F4E"},{id:"#5B3A29",labelKey:"option.color.brown",color:"#5B3A29"}]:r==="hair"?[Hd]:r==="hairColor"?[{id:"#4A2F20",labelKey:"option.color.brown",color:"#4A2F20"},{id:"#D6B15D",labelKey:"option.color.blond",color:"#D6B15D"},{id:"#1F1A17",labelKey:"option.color.black",color:"#1F1A17"}]:r==="hat"?UA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.hat.${s}`,textureLayers:Zf(NA(s,t))})):r==="shirt"?kA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.shirt.${s}`,textureLayers:Zf(BA(s,t))})):r==="pants"?IA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.pants.${s}`,textureLayers:Zf(FA(s,t))})):[Hd]}function Pu(r){const e={...Oi,...r??{}};ri("race",e).map(s=>s.id).includes(e.race)||(e.race=Oi.race);const t=ri("skinColor",e).map(s=>s.id);return t.includes(e.skinColor)||(e.skinColor=t[0]??Oi.skinColor),Gi.forEach(s=>{const a=ri(s.id,e).map(l=>l.id);a.includes(e[s.id])||(e[s.id]=a[0]??"None")}),e}function zi(r){const e=new Set(Su),t=[];return(r??[]).forEach(s=>{e.has(s)&&!t.includes(s)&&t.push(s)}),Su.forEach(s=>{t.includes(s)||t.push(s)}),t}function su(r,e){if(!r)return[];const t=[];return r.tintable&&t.push({url:r.tintable,role:"tintable",tint:e??"#FFFFFF"}),r.fixed&&t.push({url:r.fixed,role:"fixed"}),t}function S_(r,e,t){if(r==="race")return su(dh(e.race,e.sex,t),e.skinColor);if(r==="sex")return[];if(r==="eyes"){const a=ri("eyes",e,t).find(l=>l.id===e.eyes);return su(a?.textureLayers,e.eyesColor)}if(r==="hair"){const a=ri("hair",e,t).find(l=>l.id===e.hair);return su(a?.textureLayers,e.hairColor)}const s=ri(r,e,t).find(a=>a.id===e[r]);return su(s?.textureLayers)}function E_(r){return["race","sex","eyes","hair",...zi(r)]}function HA(r,e=Su,t){return E_(e).flatMap(s=>S_(s,r,t))}function VA(r,e,t,s){const a=new Set(t),l=c=>c==="race"?a.has("race")||a.has("sex")||a.has("skinColor"):c==="sex"?!1:c==="eyes"?a.has("eyes")||a.has("eyesColor"):c==="hair"?a.has("hair")||a.has("hairColor"):a.has(c);return E_(e).filter(l).flatMap(c=>S_(c,r,s))}function GA(r,e,t){if(r==="skinColor")return qf(dh(e.race,e.sex,t));if(r==="eyesColor"){const s=ri("eyes",e,t).find(a=>a.id===e.eyes);return qf(s?.textureLayers)}if(r==="hairColor"){const s=ri("hair",e,t).find(a=>a.id===e.hair);return qf(s?.textureLayers)}return!0}const au=r=>Su.includes(r),ov=(r,e)=>r.length===e.length&&r.every((t,s)=>t===e[s]);function WA({appearance:r,textureLayerOrder:e,onAppearanceChange:t,onLayerOrderChange:s,t:a,assetBaseUrl:l}){const[c,f]=G.useState(null),[d,p]=G.useState(null),[m,v]=G.useState(null),[_,S]=G.useState(null),E=G.useRef(null),w=G.useRef(null),y=G.useRef(null),x=G.useRef(null),L=G.useRef([]),P=G.useRef(new Map),C=G.useMemo(()=>new Map(Gi.map(j=>[j.id,j])),[]),k=G.useMemo(()=>Gi.filter(j=>!au(j.id)&&GA(j.id,r,l)),[r,l]),N=c&&d?d:e,F=G.useMemo(()=>N.map(j=>C.get(j)).filter(j=>!!j),[C,N]);G.useLayoutEffect(()=>{const j=x.current;if(!j)return;const le=new Map;j.querySelectorAll("[data-layer-id]").forEach(oe=>{const Le=oe.dataset.layerId;if(!Le||!au(Le))return;const be=oe.offsetTop,it=P.current.get(Le);if(le.set(Le,be),it===void 0||it===be||typeof oe.animate!="function")return;typeof oe.getAnimations=="function"&&oe.getAnimations().filter(dt=>dt.id==="skincrafter-layer-preview").forEach(dt=>dt.cancel());const ft=oe.animate([{transform:`translateY(${it-be}px)`},{transform:"translateY(0)"}],{duration:150,easing:"ease-out"});ft.id="skincrafter-layer-preview"}),P.current=le},[N]);const X=j=>{const le=x.current;if(!le)return[];const oe=le.getBoundingClientRect().top;return[...le.querySelectorAll("[data-layer-id]")].flatMap(Le=>{const be=Le.dataset.layerId;if(!be||!au(be)||be===j)return[];const it=Le.getBoundingClientRect();return[{layer:be,top:it.top-oe,bottom:it.bottom-oe}]})},b=j=>{const le=x.current;if(!le)return null;const oe=j-le.getBoundingClientRect().top;return PA(L.current,oe)},R=()=>{E.current=null,w.current=null,y.current=null,L.current=[],f(null),p(null),v(null),S(null)},H=(j,le)=>{const oe=[...e];L.current=X(j),E.current=j,w.current=oe,f(j),p(oe),v(null),S(le)},se=(j,le)=>{const oe=E.current;if(!oe)return;const Le=LA(e,oe,j,le);w.current=Le,p(be=>be&&ov(be,Le)?be:Le),v({targetLayer:j,position:le})},Z=()=>{const j=w.current,le=j&&!ov(j,e);R(),le&&j&&s(j)},ue=(j,le)=>{const oe=e.indexOf(j),Le=oe+le;if(oe<0||Le<0||Le>=e.length)return;const be=[...e];[be[oe],be[Le]]=[be[Le],be[oe]],s(be)},pe=(j,le)=>{if(H(le,{x:j.clientX,y:j.clientY,pointerType:"mouse"}),j.dataTransfer.effectAllowed="move",j.dataTransfer.setData("text/plain",le),typeof j.dataTransfer.setDragImage=="function"){const oe=document.createElement("div");oe.style.position="fixed",oe.style.left="-10000px",oe.style.top="-10000px",oe.style.width="1px",oe.style.height="1px",oe.style.opacity="0",document.body.appendChild(oe),j.dataTransfer.setDragImage(oe,0,0),window.setTimeout(()=>oe.remove(),0)}},ce=j=>{!E.current||j.clientX===0&&j.clientY===0||S({x:j.clientX,y:j.clientY,pointerType:"mouse"})},ve=()=>{E.current&&R()},z=j=>{if(!E.current)return;j.preventDefault(),j.dataTransfer.dropEffect="move";const le=b(j.clientY);le&&se(le.targetLayer,le.position)},he=j=>{j.preventDefault(),Z()},fe=(j,le)=>{if(!(j.pointerType==="mouse"||j.button>0||!(j.target instanceof Element?j.target:null)?.closest("h3"))){j.preventDefault(),y.current=j.pointerId;try{j.currentTarget.setPointerCapture(j.pointerId)}catch{}H(le,{x:j.clientX,y:j.clientY,pointerType:"touch"})}},I=j=>{if(j.pointerId!==y.current||!E.current)return;j.preventDefault(),S({x:j.clientX,y:j.clientY,pointerType:"touch"});const le=b(j.clientY);le&&se(le.targetLayer,le.position)},re=j=>{if(j.pointerId===y.current){j.preventDefault();try{j.currentTarget.releasePointerCapture(j.pointerId)}catch{}Z()}},Ce=j=>{j.pointerId===y.current&&R()},te=j=>{const le=ri(j.id,r,l),oe=au(j.id)?j.id:null,Le=oe?e.indexOf(oe):-1,be=oe&&m?.targetLayer===oe;return $.jsxs(DA,{heading:a(j.labelKey),icon:j.icon,className:`wardrobe-option-card p-2.5 pt-6 ${oe?"layer-order-card":""} ${oe===c?"is-dragging":""} ${be?`drop-${m.position}`:""}`,"data-layer-id":oe??void 0,onPointerDown:oe?it=>fe(it,oe):void 0,onPointerMove:oe?I:void 0,onPointerUp:oe?re:void 0,onPointerCancel:oe?Ce:void 0,children:[oe&&$.jsxs("div",{className:"layer-order-controls",children:[$.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${a("action.moveLayerUp")} ${a(j.labelKey)}`,title:a("action.moveLayerUp"),disabled:Le<=0,onClick:()=>ue(oe,-1),children:$.jsx(Fi,{name:"fa-chevron-up"})}),$.jsx("button",{type:"button",className:"layer-order-handle","aria-label":`${a("action.dragLayer")} ${a(j.labelKey)}`,title:a("action.dragLayer"),draggable:!0,onDragStart:it=>pe(it,oe),onDrag:ce,onDragEnd:ve,children:$.jsx(Fi,{name:"fa-grip-vertical"})}),$.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${a("action.moveLayerDown")} ${a(j.labelKey)}`,title:a("action.moveLayerDown"),disabled:Le>=e.length-1,onClick:()=>ue(oe,1),children:$.jsx(Fi,{name:"fa-chevron-down"})})]}),$.jsx("div",{className:j.control==="color"?"mt-2 flex flex-wrap gap-1.5":"mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1.5",role:"group","aria-label":a(j.labelKey),children:le.map(it=>{const ft=r[j.id]===it.id;return j.control==="color"?$.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border ${ft?"is-selected":""}`,style:{backgroundColor:it.color??it.id},"aria-label":a(it.labelKey),"aria-pressed":ft,onClick:()=>t(j.id,it.id),children:ft&&$.jsx(Fi,{name:"fa-check"})},it.id):$.jsx("button",{type:"button",className:`pixel-button min-h-8 px-2 py-1 border text-xs leading-tight transition-colors ${ft?"skincrafter-option-selected":"skincrafter-secondary-action"}`,"aria-pressed":ft,onClick:()=>t(j.id,it.id),children:a(it.labelKey)},it.id)})})]},j.id)},ge=c?C.get(c):null;return $.jsxs(d_,{title:a("panel.customization"),icon:"fa-sliders",className:"overflow-visible md:overflow-hidden customization-panel p-3",children:[$.jsxs("div",{className:"space-y-1.5 options-container md:flex-1 md:min-h-0",children:[k.map(te),$.jsx("div",{ref:x,className:"layer-order-list space-y-1.5",onDragOver:z,onDrop:he,children:F.map(te)})]}),_&&ge&&$.jsxs("div",{className:`layer-drag-ghost ${_.pointerType==="touch"?"is-touch":""}`,style:{left:_.x,top:_.y},"aria-hidden":"true","data-testid":"layer-drag-ghost",children:[$.jsx(Fi,{name:ge.icon}),$.jsx("span",{children:a(ge.labelKey)})]})]})}const lv=[137,80,78,71,13,10,26,10],Eu=64;class yr extends Error{cause;constructor(e,t){super(e),this.name="InvalidInitialSkinError",this.cause=t}}function XA(r){let e="";for(let t=0;t<r.length;t+=32768){const s=r.subarray(t,Math.min(t+32768,r.length));e+=String.fromCharCode(...s)}return`data:image/png;base64,${btoa(e)}`}function jA(r){let e=2166136261;for(const t of r)e^=t,e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}function $A(r){if(r.length<24)throw new yr("Initial skin is not a valid PNG file.");for(let a=0;a<lv.length;a+=1)if(r[a]!==lv[a])throw new yr("Initial skin is not a valid PNG file.");const e=new DataView(r.buffer,r.byteOffset,r.byteLength),t=e.getUint32(8),s=String.fromCharCode(r[12],r[13],r[14],r[15]);if(t!==13||s!=="IHDR")throw new yr("Initial skin PNG is missing a valid IHDR header.");return{width:e.getUint32(16),height:e.getUint32(20)}}async function YA(r){return typeof r.arrayBuffer=="function"?new Uint8Array(await r.arrayBuffer()):new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{if(!(s.result instanceof ArrayBuffer)){t(new Error("Blob reader did not return an ArrayBuffer."));return}e(new Uint8Array(s.result))},s.onerror=()=>t(s.error??new Error("Blob reader failed.")),s.readAsArrayBuffer(r)})}async function qA(r){await new Promise((e,t)=>{const s=new Image;s.onload=()=>{const a=s.naturalWidth||s.width,l=s.naturalHeight||s.height;if(s.onload=null,s.onerror=null,a!==Eu||l!==Eu){t(new yr("Initial skin must be a 64x64 Minecraft PNG."));return}e()},s.onerror=a=>{s.onload=null,s.onerror=null,t(new yr("Initial skin PNG could not be decoded.",a))},s.src=r})}async function KA(r,e){if(r.type&&r.type.toLowerCase()!=="image/png")throw new yr("Initial skin must use the image/png MIME type.");let t;try{t=await YA(r)}catch(l){throw new yr("Initial skin data could not be read.",l)}const s=$A(t);if(s.width!==Eu||s.height!==Eu)throw new yr("Initial skin must be a 64x64 Minecraft PNG.");const a=XA(t);return await qA(a),{dataUrl:a,fingerprint:jA(t),model:e}}function ZA(r){const[e,t]=r.split(",",2),s=e.match(/^data:([^;]+);base64$/)?.[1]??"image/png",a=atob(t??""),l=new Uint8Array(a.length);for(let c=0;c<a.length;c+=1)l[c]=a.charCodeAt(c);return new Blob([l],{type:s})}function JA(r,e,t,s=e.sex==="Female"?"slim":"classic"){const a=ZA(r),l=new File([a],"skincrafter-skin.png",{type:"image/png"});return{blob:a,file:l,dataUrl:r,metadata:{width:64,height:64,mimeType:"image/png",model:s,appearance:{...e},layerOrder:[...t]}}}const ao=1,QA=new Map([[0,r=>({...r,schemaVersion:1})]]);function uv(r){return typeof r=="object"&&r!==null&&!Array.isArray(r)}function Ni(r){return{success:!1,error:{code:"invalid_state",message:r}}}function cv(r){return{success:!1,error:{code:"unsupported_schema_version",message:`Unsupported SkinCrafter state schema version: ${r}.`,schemaVersion:r}}}function eC(r){return{schemaVersion:ao,appearance:Pu(r.appearance),layerOrder:zi(r.layerOrder)}}function M_(r){const e=eC(r);return{...e,appearance:{...e.appearance},layerOrder:[...e.layerOrder]}}function w_(r){if(!uv(r))return Ni("SkinCrafter persisted state must be an object.");const e=[],t=r.schemaVersion;let s,a;if(t===void 0)s=null,e.push({code:"legacy_unversioned",message:"Migrated legacy unversioned SkinCrafter state."}),a={...r,schemaVersion:0};else{if(typeof t!="number"||!Number.isInteger(t)||t<0)return Ni("SkinCrafter schemaVersion must be a non-negative integer.");if(s=t,s>ao)return cv(s);a={...r}}let l=s??0;for(;l<ao;){const E=QA.get(l);if(!E)return cv(l);const w=l+1;a=E(a),e.push({code:"schema_version_migrated",message:`Migrated SkinCrafter state schema from version ${l} to ${w}.`,from:l,to:w}),l=w}if(a.schemaVersion!==ao)return Ni("SkinCrafter state migration did not produce the current schema version.");const c=s===null||s===0;if(!uv(a.appearance))return Ni("SkinCrafter persisted appearance must be an object.");const f={};for(const E of Gi){const w=a.appearance[E.id];if(w===void 0){if(!c)return Ni(`SkinCrafter persisted appearance is missing ${E.id}.`);continue}if(typeof w!="string")return Ni(`SkinCrafter persisted appearance.${E.id} must be a string.`);f[E.id]=w}const d=a.layerOrder;if(d===void 0&&!c)return Ni("SkinCrafter persisted state is missing layerOrder.");if(d!==void 0&&(!Array.isArray(d)||d.some(E=>typeof E!="string")))return Ni("SkinCrafter persisted layerOrder must be an array of strings.");const p=Pu(f);for(const E of Gi){const w=a.appearance[E.id],y=p[E.id];w!==y&&e.push({code:"appearance_value_defaulted",message:`Normalized persisted appearance.${E.id} to a supported value.`,path:E.id,from:w,to:y})}const m=d??[],v=zi(m);(m.length!==v.length||m.some((E,w)=>E!==v[w]))&&e.push({code:"layer_order_normalized",message:"Normalized persisted layer order by removing invalid/duplicate layers and appending missing layers.",path:"layerOrder",from:[...m],to:[...v]});const _={appearance:p,layerOrder:v},S=M_(_);return{success:!0,state:_,serializedState:S,sourceSchemaVersion:s,migrated:s!==ao||e.length>0,notices:e}}class Vd extends Error{assetUrl;cause;constructor(e,t){super(`Failed to load texture asset: ${e}`),this.name="TextureLoadError",this.assetUrl=e,this.cause=t}}const Dr=64,tC=r=>r?typeof r=="string"?{url:r,role:"fixed"}:r.url?r.role==="tintable"?{url:r.url,role:"tintable",tint:r.tint}:{url:r.url,role:"fixed"}:null:null;function nC(r){const e=r.replace("#",""),t=e.length===3?e.split("").map(s=>`${s}${s}`).join(""):e;return{r:Number.parseInt(t.slice(0,2),16),g:Number.parseInt(t.slice(2,4),16),b:Number.parseInt(t.slice(4,6),16),a:255}}function rC(r,e){return r===Dr&&e===Dr}function iC(r,e){if(r.a===0)return r;const t=(r.r+r.g+r.b)/765;return{r:Math.round(e.r*t),g:Math.round(e.g*t),b:Math.round(e.b*t),a:r.a}}function sC(r,e){const t=new Uint8ClampedArray(r);for(let s=0;s<t.length;s+=4){const a=iC({r:r[s],g:r[s+1],b:r[s+2],a:r[s+3]},e);t[s]=a.r,t[s+1]=a.g,t[s+2]=a.b,t[s+3]=a.a}return t}const aC=(r,e,t)=>{const s=document.createElement("canvas");s.width=Dr,s.height=Dr;const a=s.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("Could not create a 2D canvas context for tintable skin composition.");a.imageSmoothingEnabled=!1,a.drawImage(e,0,0);const l=a.getImageData(0,0,Dr,Dr);l.data.set(sC(l.data,nC(t))),a.putImageData(l,0,0),r.drawImage(s,0,0)},oC=(r,e,t)=>{if(t.role==="fixed"){r.drawImage(e,0,0);return}aC(r,e,t.tint??"#FFFFFF")},lC=r=>new Promise((e,t)=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{const a=s.naturalWidth||s.width,l=s.naturalHeight||s.height;if(!rC(a,l)){t(new Vd(r,new Error(`Skin texture atlas must be ${Dr}x${Dr}; got ${a}x${l}.`)));return}e(s)},s.onerror=a=>t(new Vd(r,a)),s.src=r});async function fv(r){const e=r.map(tC).filter(l=>!!l);if(e.length===0)throw new Error("No texture assets were available for skin composition.");const t=await Promise.all(e.map(l=>lC(l.url))),s=document.createElement("canvas");s.width=Dr,s.height=Dr;const a=s.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("Could not create a 2D canvas context for skin composition.");return a.imageSmoothingEnabled=!1,t.forEach((l,c)=>oC(a,l,e[c])),s.toDataURL("image/png")}function ki(r){return{appearance:Pu(r?.appearance??null),layerOrder:zi(r?.layerOrder)}}function uC(r,e){return r.layerOrder.length!==e.layerOrder.length||r.layerOrder.some((t,s)=>t!==e.layerOrder[s])?!1:Gi.every(({id:t})=>r.appearance[t]===e.appearance[t])}function T_(r,e){return{code:r==="load"?"persistence_load_failed":"persistence_save_failed",category:"persistence",message:r==="load"?"Failed to load persisted SkinCrafter state.":"Failed to save SkinCrafter state.",cause:e}}function dv(r){try{const e=r?.load()??null;return e&&"status"in e?e.status==="incompatible"?{state:ki(null),writesBlocked:!0,error:null}:e.status==="empty"?{state:ki(null),writesBlocked:!1,error:null}:{state:ki(e.state),writesBlocked:!1,error:null}:{state:ki(e),writesBlocked:!1,error:null}}catch(e){return{state:ki(null),writesBlocked:!0,error:T_("load",e)}}}function cC(r){return{appearance:{...r.appearance},layerOrder:[...r.layerOrder]}}function fC(r){return r?{"--skincrafter-accent":r.accent,"--skincrafter-accent-strong":r.accentStrong,"--skincrafter-surface":r.surface,"--skincrafter-text":r.text,"--skincrafter-muted":r.muted,"--skincrafter-border":r.border}:{}}function dC(r){return r instanceof Vd?{code:"asset_load_failed",category:"asset",message:`Failed to load skin texture asset: ${r.assetUrl}`,assetUrl:r.assetUrl,cause:r.cause}:{code:"generation_failed",category:"generation",message:"Failed to generate the current skin.",cause:r}}function hv(r){return{code:"invalid_initial_skin",category:"input",message:r instanceof yr?r.message:"Initial skin must be a decodable 64x64 Minecraft PNG.",cause:r instanceof yr?r.cause??r:r}}function Dn(r,...e){if(r)try{r(...e)}catch(t){console.error("SkinCrafter host callback failed",t)}}function hC({locale:r=ya,value:e,initialSkin:t,persistence:s,assetBaseUrl:a,onStateChange:l,onSkinChange:c,onSave:f,onStatusChange:d,onError:p,className:m="",style:v,theme:_,previewBottomOffset:S=0}){const[E]=G.useState(()=>{if(e)return{state:ki(e),writesBlocked:!1,error:null};const Be=dv(s);return t?{state:ki(t),writesBlocked:Be.writesBlocked,error:Be.error}:Be}),[w,y]=G.useState(E.state),[x,L]=G.useState(null),[P,C]=G.useState({key:null,status:"idle",error:null}),[k,N]=G.useState(null),[F,X]=G.useState({source:null,model:null,status:"idle",error:null}),[b,R]=G.useState([]),H=G.useRef(c),se=G.useRef(d),Z=G.useRef(p),ue=G.useRef(null),pe=G.useRef(!1),ce=G.useRef(null),ve=G.useRef(s),z=G.useRef(!e),he=G.useRef(E.writesBlocked),fe=G.useRef(E.error!==null),I=G.useRef(!1),re=G.useMemo(()=>e?ki(e):null,[e]),Ce=re??w,te=G.useRef(Ce);te.current=Ce;const ge=G.useCallback(Be=>To(r,Be),[r]),j=t?.image??null,le=t?.model??null,oe=j!==null;G.useEffect(()=>{re&&y(Be=>uC(Be,re)?Be:re)},[re]);const Le=G.useCallback(Be=>{e||y(Be),l?.(Be)},[l,e]),be=G.useCallback((Be,bt)=>{oe&&R(Tt=>Tt.includes(Be)?Tt:[...Tt,Be]),Le({...Ce,appearance:Pu({...Ce.appearance,[Be]:bt})})},[oe,Le,Ce]),it=G.useCallback(Be=>{Le({...Ce,layerOrder:zi(Be)})},[Le,Ce]);G.useEffect(()=>{H.current=c},[c]),G.useEffect(()=>{se.current=d},[d]),G.useEffect(()=>{Z.current=p},[p]),G.useEffect(()=>{I.current||!E.error||(I.current=!0,Dn(Z.current,E.error))},[E.error]),G.useEffect(()=>{if(!j){ue.current=null,pe.current=!1,N(null),R([]),X({source:null,model:null,status:"idle",error:null});return}if(!le){pe.current=!1;const Tt=hv(new yr("Initial skin model must be either classic or slim."));X({source:j,model:null,status:"error",error:Tt}),Dn(se.current,"error"),Dn(Z.current,Tt);return}let Be=!0;const bt=cC(te.current);return X({source:j,model:le,status:"loading",error:null}),Dn(se.current,"generating"),KA(j,le).then(Tt=>{if(!Be)return;const an=ue.current,An=an!==null&&an.fingerprint===Tt.fingerprint&&an.model===Tt.model,en=An?{...an,source:j}:{source:j,dataUrl:Tt.dataUrl,fingerprint:Tt.fingerprint,model:Tt.model,baselineState:bt};pe.current=An,ue.current=en,N(en),An||R([]),X({source:j,model:le,status:"ready",error:null}),An&&Dn(se.current,"ready")}).catch(Tt=>{if(!Be)return;pe.current=!1;const an=hv(Tt);X({source:j,model:le,status:"error",error:an}),Dn(se.current,"error"),Dn(Z.current,an)}),()=>{Be=!1}},[j,le]),G.useEffect(()=>{if(!(e||fe.current)){if(!z.current||ve.current!==s){const Be=dv(s);if(ve.current=s,z.current=!0,he.current=Be.writesBlocked,Be.error){fe.current=!0,Dn(Z.current,Be.error);return}}if(!(he.current||!s))try{s.save(M_(Ce))}catch(Be){he.current=!0,fe.current=!0,Dn(Z.current,T_("save",Be))}}},[s,Ce,e]);const ft=oe&&le!==null&&k?.source===j&&k.model===le,dt=G.useMemo(()=>{if(!ft||!k)return[];const Be=new Set(b);for(const bt of Gi)Ce.appearance[bt.id]!==k.baselineState.appearance[bt.id]&&Be.add(bt.id);return Gi.map(bt=>bt.id).filter(bt=>Be.has(bt))},[b,ft,k,Ce.appearance]),{race:O,sex:Ht,skinColor:vt,eyes:Et,eyesColor:Xe,hair:pt,hairColor:Ke,hat:st,shirt:It,pants:D,shoes:T,accessory:Q}=Ce.appearance,me=JSON.stringify(Ce.layerOrder),xe=JSON.stringify(dt),de=a?.replace(/\/+$/,"")||void 0,Ye=dt.includes("sex"),Pe=ft&&k&&!Ye?k.model==="slim"?"Female":"Male":Ht,ke=ft&&k&&!Ye?k.model:Ht==="Female"?"slim":"classic",Ze=ft?k?.fingerprint??null:null,ye=ft?k?.dataUrl??null:null,Ue=JSON.stringify([O,Ht,vt,Et,Xe,pt,Ke,st,It,D,T,Q,me,de??null,Ze,ke,xe]),tt=x?.key===Ue?x:null,Qe=oe&&F.source===j&&F.model===le,De=oe&&(!Qe||F.status==="loading"),at=Qe&&F.status==="error",V=De?"generating":at?"error":P.key===Ue?P.status:"idle",Ne=at?F.error:P.key===Ue?P.error:null;G.useEffect(()=>{if(oe&&!ft)return;if(pe.current){const en=ce.current===Ue;if(pe.current=!1,en)return}let Be=!0;const bt={race:O,sex:Ht,skinColor:vt,eyes:Et,eyesColor:Xe,hair:pt,hairColor:Ke,hat:st,shirt:It,pants:D,shoes:T,accessory:Q},Tt={...bt,sex:Pe},an=JSON.parse(me),An=JSON.parse(xe);return C({key:Ue,status:"generating",error:null}),Dn(se.current,"generating"),(async()=>{let en;try{let _n;if(ye){const Cn=VA(Tt,an,An,de);_n=Cn.filter(Boolean).length===0?ye:await fv([ye,...Cn])}else{const Cn=HA(bt,an,de);_n=await fv(Cn)}en={dataUrl:_n,output:JA(_n,bt,an,ke)}}catch(_n){if(!Be)return;const Cn=dC(_n);C({key:Ue,status:"error",error:Cn}),Dn(se.current,"error"),Dn(Z.current,Cn);return}Be&&(ce.current=Ue,L({key:Ue,texture:en.dataUrl,output:en.output}),C({key:Ue,status:"ready",error:null}),Dn(H.current,en.output),Dn(se.current,"ready"))})(),()=>{Be=!1}},[Q,xe,de,Pe,ke,Et,Xe,Ue,pt,Ke,oe,st,ye,ft,me,D,O,Ht,It,T,vt]);const Se=tt??x,Oe=tt?.output??null,we=Se?.texture??null,_e=Se?.output.metadata.model??ke,He=V==="ready"&&Oe!==null,ut=f&&He&&Oe?()=>f(Oe):void 0,Ct=G.useCallback(Be=>{Dn(Z.current,Be)},[]);return $.jsx("div",{className:`skincrafter-editor h-full min-h-0 w-full ${m}`.trim(),style:{...fC(_),...v},"data-testid":"skincrafter-editor","data-skincrafter-locale":r,"data-skincrafter-generation-status":V,children:$.jsx(bA,{left:$.jsx(v_,{texture:we,model:_e,footerHeight:S,t:ge,onSave:ut,canSave:He,generationStatus:V,generationError:Ne,onError:Ct}),right:$.jsx(WA,{appearance:Ce.appearance,textureLayerOrder:Ce.layerOrder,onAppearanceChange:be,onLayerOrderChange:it,t:ge,assetBaseUrl:a})})})}function pC({texture:r,model:e="classic",locale:t=ya,bottomOffset:s=0,className:a="",style:l,theme:c,onError:f}){const d=m=>To(t,m),p={"--skincrafter-accent":c?.accent,"--skincrafter-accent-strong":c?.accentStrong,"--skincrafter-surface":c?.surface,"--skincrafter-text":c?.text,"--skincrafter-muted":c?.muted,"--skincrafter-border":c?.border};return $.jsx("div",{className:`skincrafter-editor h-full min-h-0 ${a}`.trim(),style:{...p,...l},children:$.jsx(v_,{texture:r,model:e,footerHeight:s,t:d,onError:f})})}const R_={en:{"skinView.error.usernameRequired":"Please enter a Minecraft username.","skinView.error.playerNotFound":"Minecraft player not found.","skinView.error.skinTextureMissing":"This player does not have an available skin texture.","skinView.error.network":"Could not reach PlayerDB. Check your connection and try again.","skinView.error.serviceUnavailable":"PlayerDB is temporarily unavailable. Try again later.","skinView.error.rateLimited":"Too many player lookup requests. Try again in a moment.","skinView.error.invalidResponse":"PlayerDB returned an unexpected response. Try again later."},pl:{"skinView.error.usernameRequired":"Podaj nazwe gracza Minecraft.","skinView.error.playerNotFound":"Nie znaleziono gracza Minecraft.","skinView.error.skinTextureMissing":"Ten gracz nie ma dostepnej tekstury skina.","skinView.error.network":"Nie udalo sie polaczyc z PlayerDB. Sprawdz polaczenie i sprobuj ponownie.","skinView.error.serviceUnavailable":"PlayerDB jest chwilowo niedostepne. Sprobuj ponownie pozniej.","skinView.error.rateLimited":"Za duzo zapytan o graczy. Sprobuj ponownie za chwile.","skinView.error.invalidResponse":"PlayerDB zwrocilo nieoczekiwana odpowiedz. Sprobuj ponownie pozniej."}};function mC(r){return r in R_.en}function gC(r,e){return mC(e)?R_[r][e]:To(r,e)}const vC=mv.forwardRef((r,e)=>$.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:$.jsx("div",{className:"container mx-auto text-center text-sm",children:$.jsx("p",{children:"(c) 2026 SkinCrafter. All rights reserved."})})})),_C=r=>To(ya,r),xC=({logoSrc:r="/logo.png",logoAlt:e="SkinCrafter logo",language:t="en",onLanguageChange:s,t:a=_C})=>$.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:$.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[$.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[$.jsx("div",{className:"h-8 w-36 flex items-center",children:$.jsx("img",{src:r,alt:e,className:"h-auto max-h-8 w-full object-contain",style:{imageRendering:"pixelated"}})}),$.jsx("span",{className:"pixel-border bg-amber-500 px-2 py-0.5 text-xs font-bold uppercase tracking-normal text-green-950 shadow-sm",title:a("nav.workInProgress"),"aria-label":a("nav.workInProgress"),children:"WIP"})]}),$.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[$.jsx(td,{to:"/",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.wardrobe")}),$.jsx(td,{to:"/mcskinview",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.skinView")}),s&&$.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[$.jsx("span",{children:a("nav.language")}),$.jsx("select",{className:"bg-green-700 text-white pixel-border px-2 py-1",value:t,onChange:l=>s(l.target.value),"aria-label":a("nav.language"),children:g_.map(l=>$.jsx("option",{value:l,children:l.toUpperCase()},l))})]})]})]})}),A_="skincrafterLanguage",yC=()=>{const r=localStorage.getItem(A_);return RA(r)?r:ya};function C_({children:r}){const[e,t]=G.useState(()=>yC()),s=G.useRef(null),[a,l]=G.useState(0),c=G.useCallback(d=>gC(e,d),[e]),f=G.useCallback(d=>{t(d)},[]);return G.useEffect(()=>{localStorage.setItem(A_,e)},[e]),G.useEffect(()=>{const d=()=>{l(s.current?.offsetHeight??0)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),$.jsxs("div",{className:"max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col",children:[$.jsx("div",{className:"shrink-0",children:$.jsx(xC,{language:e,onLanguageChange:f,t:c})}),r({footerHeight:a,language:e,t:c}),$.jsx("div",{className:"shrink-0",children:$.jsx(vC,{ref:s})})]})}const gu="skincrafterState",hh="wardrobeAppearance",ph="wardrobeLayerOrder";function _o(r){return JSON.parse(r)}function b_(r){const e=w_(r);return e.success?{state:e.state,serializedState:e.serializedState}:null}function SC(r){let e;try{e=_o(r)}catch{return{kind:"invalid"}}const t=w_(e);return t.success?{kind:"loaded",value:{state:t.state,serializedState:t.serializedState}}:t.error.code==="unsupported_schema_version"?{kind:"unsupported"}:{kind:"invalid"}}function EC(){const r=localStorage.getItem(hh),e=localStorage.getItem(ph);if(r===null||e===null)return null;try{return b_({appearance:_o(r),layerOrder:_o(e)})}catch{return null}}function MC(){let r;const e=localStorage.getItem(hh);if(e)try{r=_o(e)}catch{r={...Oi}}else r={race:localStorage.getItem("wardrobeRace")??Oi.race,skinColor:localStorage.getItem("wardrobeSkinColor")??Oi.skinColor,hat:localStorage.getItem("wardrobeHat")??Oi.hat};let t=zi(null);const s=localStorage.getItem(ph);if(s)try{t=_o(s)}catch{t=zi(null)}const a=b_({appearance:r,layerOrder:t});return a?(localStorage.setItem(gu,JSON.stringify(a.serializedState)),a.state):{appearance:{...Oi},layerOrder:zi(null)}}function wC(r,e){return JSON.stringify(r)===JSON.stringify(e)}const TC={load:()=>{const r=localStorage.getItem(gu);if(r===null)return{status:"loaded",state:MC()};const e=SC(r);if(e.kind==="unsupported")return{status:"incompatible"};if(e.kind==="invalid")return{status:"empty"};const t=EC();return t&&!wC(t.serializedState,e.value.serializedState)?(localStorage.setItem(gu,JSON.stringify(t.serializedState)),{status:"loaded",state:t.state}):{status:"loaded",state:e.value.state}},save:r=>{localStorage.setItem(gu,JSON.stringify(r)),localStorage.setItem(hh,JSON.stringify(r.appearance)),localStorage.setItem(ph,JSON.stringify(r.layerOrder))}};class Zt extends Error{code;status;cause;constructor(e,t={}){super(e),this.name="FetchSkinError",this.code=e,this.status=t.status,this.cause=t.cause}}const RC=r=>r.replace(/^http:\/\//,"https://"),Cr=r=>typeof r=="object"&&r!==null,AC=r=>Cr(r)&&typeof r.name=="string"&&typeof r.value=="string",CC=r=>{if(!Cr(r)||typeof r.success!="boolean")throw new Zt("invalid_response");if(!r.success)return{success:!1};if(!Cr(r.data)||!Cr(r.data.player))throw new Zt("invalid_response");const e=r.data.player;if(e.skin_texture!==void 0&&typeof e.skin_texture!="string")throw new Zt("invalid_response");if(e.properties!==void 0&&(!Array.isArray(e.properties)||!e.properties.every(AC)))throw new Zt("invalid_response");return{success:!0,data:{player:{skin_texture:e.skin_texture,properties:e.properties}}}},bC=r=>{if(!r)return null;let e;try{e=JSON.parse(atob(r.value))}catch(l){throw new Zt("invalid_response",{cause:l})}if(!Cr(e))throw new Zt("invalid_response");const t=e.textures;if(t===void 0)return{};if(!Cr(t))throw new Zt("invalid_response");const s=t.SKIN;if(s===void 0)return{textures:{}};if(!Cr(s))throw new Zt("invalid_response");if(s.url!==void 0&&typeof s.url!="string")throw new Zt("invalid_response");const a=s.metadata;if(a!==void 0&&!Cr(a))throw new Zt("invalid_response");if(Cr(a)&&a.model!==void 0&&typeof a.model!="string")throw new Zt("invalid_response");return{textures:{SKIN:{url:s.url,metadata:Cr(a)&&typeof a.model=="string"?{model:a.model}:void 0}}}},PC=r=>r===404?new Zt("player_not_found",{status:r}):r===429?new Zt("rate_limited",{status:r}):r>=500?new Zt("service_unavailable",{status:r}):new Zt("invalid_response",{status:r});async function LC(r){let e;try{e=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(r)}`)}catch(d){throw new Zt("network_error",{cause:d})}if(!e.ok)throw PC(e.status);let t;try{t=await e.json()}catch(d){throw new Zt("invalid_response",{status:e.status,cause:d})}const s=CC(t);if(!s.success)throw new Zt("player_not_found",{status:e.status});const a=s.data?.player;if(!a)throw new Zt("invalid_response",{status:e.status});const l=a.properties?.find(d=>d.name==="textures"),c=bC(l)?.textures?.SKIN,f=c?.url??a.skin_texture;if(!f)throw new Zt("skin_texture_missing",{status:e.status});return{texture:RC(f),model:c?.metadata?.model==="slim"?"slim":"classic"}}const DC={player_not_found:"skinView.error.playerNotFound",skin_texture_missing:"skinView.error.skinTextureMissing",rate_limited:"skinView.error.rateLimited",service_unavailable:"skinView.error.serviceUnavailable",network_error:"skinView.error.network",invalid_response:"skinView.error.invalidResponse"},UC=()=>{const[r,e]=G.useState(""),[t,s]=G.useState(null),[a,l]=G.useState(null),[c,f]=G.useState(!1),d=G.useCallback(m=>{e(m.target.value)},[]),p=G.useCallback(async m=>{if(m.preventDefault(),!r.trim()){l("skinView.error.usernameRequired");return}l(null),s(null),f(!0);try{s(await LC(r.trim()))}catch(v){l(v instanceof Zt?DC[v.code]:"skinView.error.invalidResponse"),s(null)}finally{f(!1)}},[r]);return $.jsx(C_,{children:({footerHeight:m,language:v,t:_})=>$.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:$.jsx(pC,{texture:t?.texture??null,model:t?.model??"classic",locale:v,bottomOffset:m})}),$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:$.jsxs("section",{className:"mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4",children:[$.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[$.jsx("i",{className:"fas fa-user mr-2 text-green-700"})," ",_("panel.loadSkin")]}),$.jsxs("div",{className:"space-y-4 md:flex-1 md:min-h-0 overflow-y-auto pr-2",children:[$.jsxs("div",{className:"option-card bg-white shadow p-4 pixel-border relative pt-5",children:[$.jsxs("h3",{className:"font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10",children:[$.jsx("i",{className:"fas fa-id-card mr-2 text-amber-600"})," ",_("skinView.player")]}),$.jsxs("form",{onSubmit:p,className:"mt-4 flex flex-col gap-3",children:[$.jsx("input",{type:"text",value:r,onChange:d,placeholder:_("skinView.username"),"aria-label":_("skinView.username"),className:"w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"}),$.jsxs("button",{type:"submit",disabled:c,className:"pixel-button p-2 pixel-border bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white",children:[$.jsx("i",{className:"fas fa-cloud-arrow-down mr-2"}),_(c?"action.loading":"action.loadSkin")]})]})]}),a&&$.jsx("div",{role:"alert",className:"option-card bg-red-50 text-red-700 shadow p-4 pixel-border",children:_(a)})]})]})})]})})},NC=()=>$.jsx(C_,{children:({footerHeight:r,language:e})=>$.jsx(hC,{locale:e,persistence:TC,previewBottomOffset:r})}),IC=()=>$.jsxs(vy,{children:[$.jsx(Qf,{path:"/",element:$.jsx(NC,{})}),$.jsx(Qf,{path:"/mcskinview",element:$.jsx(UC,{})})]});vx.createRoot(document.getElementById("root")).render($.jsx(mv.StrictMode,{children:$.jsx(Hy,{children:$.jsx(IC,{})})}));
