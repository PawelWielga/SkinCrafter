(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function fv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var af={exports:{}},qa={},of={exports:{}},yt={};var Um;function rx(){if(Um)return yt;Um=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(I,re,Fe){this.props=I,this.context=re,this.refs=w,this.updater=Fe||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=y.prototype;function L(I,re,Fe){this.props=I,this.context=re,this.refs=w,this.updater=Fe||S}var P=L.prototype=new x;P.constructor=L,E(P,y.prototype),P.isPureReactComponent=!0;var C=Array.isArray,z=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function X(I,re,Fe){var te,me={},j=null,de=null;if(re!=null)for(te in re.ref!==void 0&&(de=re.ref),re.key!==void 0&&(j=""+re.key),re)z.call(re,te)&&!F.hasOwnProperty(te)&&(me[te]=re[te]);var ue=arguments.length-2;if(ue===1)me.children=Fe;else if(1<ue){for(var De=Array(ue),Ce=0;Ce<ue;Ce++)De[Ce]=arguments[Ce+2];me.children=De}if(I&&I.defaultProps)for(te in ue=I.defaultProps,ue)me[te]===void 0&&(me[te]=ue[te]);return{$$typeof:i,type:I,key:j,ref:de,props:me,_owner:N.current}}function b(I,re){return{$$typeof:i,type:I.type,key:re,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===i}function B(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Fe){return re[Fe]})}var oe=/\/+/g;function J(I,re){return typeof I=="object"&&I!==null&&I.key!=null?B(""+I.key):re.toString(36)}function ce(I,re,Fe,te,me){var j=typeof I;(j==="undefined"||j==="boolean")&&(I=null);var de=!1;if(I===null)de=!0;else switch(j){case"string":case"number":de=!0;break;case"object":switch(I.$$typeof){case i:case e:de=!0}}if(de)return de=I,me=me(de),I=te===""?"."+J(de,0):te,C(me)?(Fe="",I!=null&&(Fe=I.replace(oe,"$&/")+"/"),ce(me,re,Fe,"",function(Ce){return Ce})):me!=null&&(R(me)&&(me=b(me,Fe+(!me.key||de&&de.key===me.key?"":(""+me.key).replace(oe,"$&/")+"/")+I)),re.push(me)),1;if(de=0,te=te===""?".":te+":",C(I))for(var ue=0;ue<I.length;ue++){j=I[ue];var De=te+J(j,ue);de+=ce(j,re,Fe,De,me)}else if(De=_(I),typeof De=="function")for(I=De.call(I),ue=0;!(j=I.next()).done;)j=j.value,De=te+J(j,ue++),de+=ce(j,re,Fe,De,me);else if(j==="object")throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return de}function _e(I,re,Fe){if(I==null)return I;var te=[],me=0;return ce(I,te,"","",function(j){return re.call(Fe,j,me++)}),te}function ne(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(Fe){(I._status===0||I._status===-1)&&(I._status=1,I._result=Fe)},function(Fe){(I._status===0||I._status===-1)&&(I._status=2,I._result=Fe)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var ye={current:null},H={transition:null},fe={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:H,ReactCurrentOwner:N};function le(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:_e,forEach:function(I,re,Fe){_e(I,function(){re.apply(this,arguments)},Fe)},count:function(I){var re=0;return _e(I,function(){re++}),re},toArray:function(I){return _e(I,function(re){return re})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},yt.Component=y,yt.Fragment=t,yt.Profiler=a,yt.PureComponent=L,yt.StrictMode=s,yt.Suspense=d,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,yt.act=le,yt.cloneElement=function(I,re,Fe){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var te=E({},I.props),me=I.key,j=I.ref,de=I._owner;if(re!=null){if(re.ref!==void 0&&(j=re.ref,de=N.current),re.key!==void 0&&(me=""+re.key),I.type&&I.type.defaultProps)var ue=I.type.defaultProps;for(De in re)z.call(re,De)&&!F.hasOwnProperty(De)&&(te[De]=re[De]===void 0&&ue!==void 0?ue[De]:re[De])}var De=arguments.length-2;if(De===1)te.children=Fe;else if(1<De){ue=Array(De);for(var Ce=0;Ce<De;Ce++)ue[Ce]=arguments[Ce+2];te.children=ue}return{$$typeof:i,type:I.type,key:me,ref:j,props:te,_owner:de}},yt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},yt.createElement=X,yt.createFactory=function(I){var re=X.bind(null,I);return re.type=I,re},yt.createRef=function(){return{current:null}},yt.forwardRef=function(I){return{$$typeof:f,render:I}},yt.isValidElement=R,yt.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:ne}},yt.memo=function(I,re){return{$$typeof:p,type:I,compare:re===void 0?null:re}},yt.startTransition=function(I){var re=H.transition;H.transition={};try{I()}finally{H.transition=re}},yt.unstable_act=le,yt.useCallback=function(I,re){return ye.current.useCallback(I,re)},yt.useContext=function(I){return ye.current.useContext(I)},yt.useDebugValue=function(){},yt.useDeferredValue=function(I){return ye.current.useDeferredValue(I)},yt.useEffect=function(I,re){return ye.current.useEffect(I,re)},yt.useId=function(){return ye.current.useId()},yt.useImperativeHandle=function(I,re,Fe){return ye.current.useImperativeHandle(I,re,Fe)},yt.useInsertionEffect=function(I,re){return ye.current.useInsertionEffect(I,re)},yt.useLayoutEffect=function(I,re){return ye.current.useLayoutEffect(I,re)},yt.useMemo=function(I,re){return ye.current.useMemo(I,re)},yt.useReducer=function(I,re,Fe){return ye.current.useReducer(I,re,Fe)},yt.useRef=function(I){return ye.current.useRef(I)},yt.useState=function(I){return ye.current.useState(I)},yt.useSyncExternalStore=function(I,re,Fe){return ye.current.useSyncExternalStore(I,re,Fe)},yt.useTransition=function(){return ye.current.useTransition()},yt.version="18.3.1",yt}var Nm;function zd(){return Nm||(Nm=1,of.exports=rx()),of.exports}var Im;function sx(){if(Im)return qa;Im=1;var i=zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,p){var m,v={},_=null,S=null;p!==void 0&&(_=""+p),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)s.call(d,m)&&!l.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:_,ref:S,props:v,_owner:a.current}}return qa.Fragment=t,qa.jsx=c,qa.jsxs=c,qa}var Fm;function ax(){return Fm||(Fm=1,af.exports=sx()),af.exports}var $=ax(),W=zd();const dv=fv(W);var Ll={},lf={exports:{}},Fn={},uf={exports:{}},cf={};var Om;function ox(){return Om||(Om=1,(function(i){function e(H,fe){var le=H.length;H.push(fe);e:for(;0<le;){var I=le-1>>>1,re=H[I];if(0<a(re,fe))H[I]=fe,H[le]=re,le=I;else break e}}function t(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var fe=H[0],le=H.pop();if(le!==fe){H[0]=le;e:for(var I=0,re=H.length,Fe=re>>>1;I<Fe;){var te=2*(I+1)-1,me=H[te],j=te+1,de=H[j];if(0>a(me,le))j<re&&0>a(de,me)?(H[I]=de,H[j]=le,I=j):(H[I]=me,H[te]=le,I=te);else if(j<re&&0>a(de,le))H[I]=de,H[j]=le,I=j;else break e}}return fe}function a(H,fe){var le=H.sortIndex-fe.sortIndex;return le!==0?le:H.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var d=[],p=[],m=1,v=null,_=3,S=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(H){for(var fe=t(p);fe!==null;){if(fe.callback===null)s(p);else if(fe.startTime<=H)s(p),fe.sortIndex=fe.expirationTime,e(d,fe);else break;fe=t(p)}}function C(H){if(w=!1,P(H),!E)if(t(d)!==null)E=!0,ne(z);else{var fe=t(p);fe!==null&&ye(C,fe.startTime-H)}}function z(H,fe){E=!1,w&&(w=!1,x(X),X=-1),S=!0;var le=_;try{for(P(fe),v=t(d);v!==null&&(!(v.expirationTime>fe)||H&&!B());){var I=v.callback;if(typeof I=="function"){v.callback=null,_=v.priorityLevel;var re=I(v.expirationTime<=fe);fe=i.unstable_now(),typeof re=="function"?v.callback=re:v===t(d)&&s(d),P(fe)}else s(d);v=t(d)}if(v!==null)var Fe=!0;else{var te=t(p);te!==null&&ye(C,te.startTime-fe),Fe=!1}return Fe}finally{v=null,_=le,S=!1}}var N=!1,F=null,X=-1,b=5,R=-1;function B(){return!(i.unstable_now()-R<b)}function oe(){if(F!==null){var H=i.unstable_now();R=H;var fe=!0;try{fe=F(!0,H)}finally{fe?J():(N=!1,F=null)}}else N=!1}var J;if(typeof L=="function")J=function(){L(oe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,_e=ce.port2;ce.port1.onmessage=oe,J=function(){_e.postMessage(null)}}else J=function(){y(oe,0)};function ne(H){F=H,N||(N=!0,J())}function ye(H,fe){X=y(function(){H(i.unstable_now())},fe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(H){H.callback=null},i.unstable_continueExecution=function(){E||S||(E=!0,ne(z))},i.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<H?Math.floor(1e3/H):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(H){switch(_){case 1:case 2:case 3:var fe=3;break;default:fe=_}var le=_;_=fe;try{return H()}finally{_=le}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(H,fe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var le=_;_=H;try{return fe()}finally{_=le}},i.unstable_scheduleCallback=function(H,fe,le){var I=i.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?I+le:I):le=I,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=le+re,H={id:m++,callback:fe,priorityLevel:H,startTime:le,expirationTime:re,sortIndex:-1},le>I?(H.sortIndex=le,e(p,H),t(d)===null&&H===t(p)&&(w?(x(X),X=-1):w=!0,ye(C,le-I))):(H.sortIndex=re,e(d,H),E||S||(E=!0,ne(z))),H},i.unstable_shouldYield=B,i.unstable_wrapCallback=function(H){var fe=_;return function(){var le=_;_=fe;try{return H.apply(this,arguments)}finally{_=le}}}})(cf)),cf}var km;function lx(){return km||(km=1,uf.exports=ox()),uf.exports}var Bm;function ux(){if(Bm)return Fn;Bm=1;var i=zd(),e=lx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function _(n){return d.call(v,n)?!0:d.call(m,n)?!1:p.test(n)?v[n]=!0:(m[n]=!0,!1)}function S(n,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,o,u){if(r===null||typeof r>"u"||S(n,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,o,u,h,g,M){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,L);y[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,L);y[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,L);y[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,o,u){var h=y.hasOwnProperty(r)?y[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,o,h,u)&&(o=null),u||h===null?_(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,r,o):n.setAttribute(r,o))))}var C=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),_e=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),H=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,I;function re(n){if(I===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+n}var Fe=!1;function te(n,r){if(!n||Fe)return"";Fe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(se){var u=se}Reflect.construct(n,[],r)}else{try{r.call()}catch(se){u=se}n.call(r.prototype)}else{try{throw Error()}catch(se){u=se}n()}}catch(se){if(se&&u&&typeof se.stack=="string"){for(var h=se.stack.split(`
`),g=u.stack.split(`
`),M=h.length-1,U=g.length-1;1<=M&&0<=U&&h[M]!==g[U];)U--;for(;1<=M&&0<=U;M--,U--)if(h[M]!==g[U]){if(M!==1||U!==1)do if(M--,U--,0>U||h[M]!==g[U]){var k=`
`+h[M].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=M&&0<=U);break}}}finally{Fe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?re(n):""}function me(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=te(n.type,!1),n;case 11:return n=te(n.type.render,!1),n;case 1:return n=te(n.type,!0),n;default:return""}}function j(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case N:return"Portal";case b:return"Profiler";case X:return"StrictMode";case J:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case oe:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _e:return r=n.displayName||null,r!==null?r:j(n.type)||"Memo";case ne:r=n._payload,n=n._init;try{return j(n(r))}catch{}}return null}function de(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return j(r);case 8:return r===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ue(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ce(n){var r=De(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(M){u=""+M,g.call(this,M)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function nt(n){n._valueTracker||(n._valueTracker=Ce(n))}function gt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=De(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function O(n,r){var o=r.checked;return le({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Wt(n,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=ue(r.value!=null?r.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vt(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function Mt(n,r){vt(n,r);var o=ue(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ht(n,r.type,o):r.hasOwnProperty("defaultValue")&&ht(n,r.type,ue(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function We(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function ht(n,r,o){(r!=="number"||ct(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ke=Array.isArray;function it(n,r,o,u){if(n=n.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=r.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+ue(o),r=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function It(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(Ke(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:ue(o)}}function T(n,r){var o=ue(r.value),u=ue(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function ee(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ve(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ve(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var he,$e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(r,o,u,h)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(he=he||document.createElement("div"),he.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=he.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Pe(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){Ye.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),ze[r]=ze[n]})});function Ee(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||ze.hasOwnProperty(n)&&ze[n]?(""+r).trim():r+"px"}function Oe(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=Ee(o,r[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var tt=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(n,r){if(r){if(tt[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Le(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var at=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ue=null,pe=null,be=null;function Se(n){if(n=Na(n)){if(typeof Ue!="function")throw Error(t(280));var r=n.stateNode;r&&(r=jo(r),Ue(n.stateNode,n.type,r))}}function ge(n){pe?be?be.push(n):be=[n]:pe=n}function ke(){if(pe){var n=pe,r=be;if(be=pe=null,Se(n),r)for(n=0;n<r.length;n++)Se(r[n])}}function Qe(n,r){return n(r)}function Et(){}var ft=!1;function Pn(n,r,o){if(ft)return n(r,o);ft=!0;try{return Qe(n,r,o)}finally{ft=!1,(pe!==null||be!==null)&&(Et(),ke())}}function Sn(n,r){var o=n.stateNode;if(o===null)return null;var u=jo(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var ps=!1;if(f)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){ps=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{ps=!1}function bi(n,r,o,u,h,g,M,U,k){var se=Array.prototype.slice.call(arguments,3);try{r.apply(o,se)}catch(we){this.onError(we)}}var Pi=!1,kr=null,Br=!1,ir=null,wo={onError:function(n){Pi=!0,kr=n}};function ms(n,r,o,u,h,g,M,U,k){Pi=!1,kr=null,bi.apply(wo,arguments)}function To(n,r,o,u,h,g,M,U,k){if(ms.apply(this,arguments),Pi){if(Pi){var se=kr;Pi=!1,kr=null}else throw Error(t(198));Br||(Br=!0,ir=se)}}function mi(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Ro(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ao(n){if(mi(n)!==n)throw Error(t(188))}function Cu(n){var r=n.alternate;if(!r){if(r=mi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,u=r;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return Ao(h),n;if(g===u)return Ao(h),r;g=g.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=g;else{for(var M=!1,U=h.child;U;){if(U===o){M=!0,o=h,u=g;break}if(U===u){M=!0,u=h,o=g;break}U=U.sibling}if(!M){for(U=g.child;U;){if(U===o){M=!0,o=g,u=h;break}if(U===u){M=!0,u=g,o=h;break}U=U.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function Co(n){return n=Cu(n),n!==null?bo(n):null}function bo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=bo(n);if(r!==null)return r;n=n.sibling}return null}var Po=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,Y=e.unstable_shouldYield,ae=e.unstable_requestPaint,Z=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,Ve=e.unstable_NormalPriority,He=e.unstable_LowPriority,lt=e.unstable_IdlePriority,ot=null,Xe=null;function _t(n){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(ot,n,void 0,(n.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:bt,Bt=Math.log,Ut=Math.LN2;function bt(n){return n>>>=0,n===0?32:31-(Bt(n)/Ut|0)|0}var et=64,Lt=4194304;function xt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tn(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,M=o&268435455;if(M!==0){var U=M&~h;U!==0?u=xt(U):(g&=M,g!==0&&(u=xt(g)))}else M=o&~h,M!==0?u=xt(M):g!==0&&(u=xt(g));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,g=r&-r,h>=g||h===16&&(g&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)o=31-pt(r),h=1<<o,u|=n[o],r&=~h;return u}function rr(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var M=31-pt(g),U=1<<M,k=h[M];k===-1?((U&o)===0||(U&u)!==0)&&(h[M]=rr(U,r)):k<=r&&(n.expiredLanes|=U),g&=~U}}function Li(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nt(){var n=et;return et<<=1,(et&4194240)===0&&(et=64),n}function hn(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function nn(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-pt(r),n[r]=o}function un(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-pt(o),g=1<<h;r[h]=0,u[h]=-1,n[h]=-1,o&=~g}}function rn(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-pt(o),h=1<<u;h&r|n[u]&r&&(n[u]|=r),o&=~h}}var wt=0;function gi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var dh,bu,hh,ph,mh,Pu=!1,Lo=[],sr=null,ar=null,or=null,_a=new Map,xa=new Map,lr=[],R_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gh(n,r){switch(n){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":_a.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(r.pointerId)}}function ya(n,r,o,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},r!==null&&(r=Na(r),r!==null&&bu(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function A_(n,r,o,u,h){switch(r){case"focusin":return sr=ya(sr,n,r,o,u,h),!0;case"dragenter":return ar=ya(ar,n,r,o,u,h),!0;case"mouseover":return or=ya(or,n,r,o,u,h),!0;case"pointerover":var g=h.pointerId;return _a.set(g,ya(_a.get(g)||null,n,r,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,xa.set(g,ya(xa.get(g)||null,n,r,o,u,h)),!0}return!1}function vh(n){var r=zr(n.target);if(r!==null){var o=mi(r);if(o!==null){if(r=o.tag,r===13){if(r=Ro(o),r!==null){n.blockedOn=r,mh(n.priority,function(){hh(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Do(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Du(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);at=u,o.target.dispatchEvent(u),at=null}else return r=Na(o),r!==null&&bu(r),n.blockedOn=o,!1;r.shift()}return!0}function _h(n,r,o){Do(n)&&o.delete(r)}function C_(){Pu=!1,sr!==null&&Do(sr)&&(sr=null),ar!==null&&Do(ar)&&(ar=null),or!==null&&Do(or)&&(or=null),_a.forEach(_h),xa.forEach(_h)}function Sa(n,r){n.blockedOn===r&&(n.blockedOn=null,Pu||(Pu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,C_)))}function Ea(n){function r(h){return Sa(h,n)}if(0<Lo.length){Sa(Lo[0],n);for(var o=1;o<Lo.length;o++){var u=Lo[o];u.blockedOn===n&&(u.blockedOn=null)}}for(sr!==null&&Sa(sr,n),ar!==null&&Sa(ar,n),or!==null&&Sa(or,n),_a.forEach(r),xa.forEach(r),o=0;o<lr.length;o++)u=lr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<lr.length&&(o=lr[0],o.blockedOn===null);)vh(o),o.blockedOn===null&&lr.shift()}var gs=C.ReactCurrentBatchConfig,Uo=!0;function b_(n,r,o,u){var h=wt,g=gs.transition;gs.transition=null;try{wt=1,Lu(n,r,o,u)}finally{wt=h,gs.transition=g}}function P_(n,r,o,u){var h=wt,g=gs.transition;gs.transition=null;try{wt=4,Lu(n,r,o,u)}finally{wt=h,gs.transition=g}}function Lu(n,r,o,u){if(Uo){var h=Du(n,r,o,u);if(h===null)qu(n,r,u,No,o),gh(n,u);else if(A_(h,n,r,o,u))u.stopPropagation();else if(gh(n,u),r&4&&-1<R_.indexOf(n)){for(;h!==null;){var g=Na(h);if(g!==null&&dh(g),g=Du(n,r,o,u),g===null&&qu(n,r,u,No,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else qu(n,r,u,null,o)}}var No=null;function Du(n,r,o,u){if(No=null,n=V(u),n=zr(n),n!==null)if(r=mi(n),r===null)n=null;else if(o=r.tag,o===13){if(n=Ro(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return No=n,null}function xh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Re:return 1;case Ne:return 4;case Ve:case He:return 16;case lt:return 536870912;default:return 16}default:return 16}}var ur=null,Uu=null,Io=null;function yh(){if(Io)return Io;var n,r=Uu,o=r.length,u,h="value"in ur?ur.value:ur.textContent,g=h.length;for(n=0;n<o&&r[n]===h[n];n++);var M=o-n;for(u=1;u<=M&&r[o-u]===h[g-u];u++);return Io=h.slice(n,1<u?1-u:void 0)}function Fo(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Oo(){return!0}function Sh(){return!1}function kn(n){function r(o,u,h,g,M){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=M,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(o=n[U],this[U]=o?o(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Oo:Sh,this.isPropagationStopped=Sh,this}return le(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),r}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nu=kn(vs),Ma=le({},vs,{view:0,detail:0}),L_=kn(Ma),Iu,Fu,wa,ko=le({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wa&&(wa&&n.type==="mousemove"?(Iu=n.screenX-wa.screenX,Fu=n.screenY-wa.screenY):Fu=Iu=0,wa=n),Iu)},movementY:function(n){return"movementY"in n?n.movementY:Fu}}),Eh=kn(ko),D_=le({},ko,{dataTransfer:0}),U_=kn(D_),N_=le({},Ma,{relatedTarget:0}),Ou=kn(N_),I_=le({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),F_=kn(I_),O_=le({},vs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),k_=kn(O_),B_=le({},vs,{data:0}),Mh=kn(B_),z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=V_[n])?!!r[n]:!1}function ku(){return G_}var W_=le({},Ma,{key:function(n){if(n.key){var r=z_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Fo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?H_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(n){return n.type==="keypress"?Fo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),X_=kn(W_),j_=le({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=kn(j_),$_=le({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),Y_=kn($_),q_=le({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),K_=kn(q_),Z_=le({},ko,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),J_=kn(Z_),Q_=[9,13,27,32],Bu=f&&"CompositionEvent"in window,Ta=null;f&&"documentMode"in document&&(Ta=document.documentMode);var e0=f&&"TextEvent"in window&&!Ta,Th=f&&(!Bu||Ta&&8<Ta&&11>=Ta),Rh=" ",Ah=!1;function Ch(n,r){switch(n){case"keyup":return Q_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _s=!1;function t0(n,r){switch(n){case"compositionend":return bh(r);case"keypress":return r.which!==32?null:(Ah=!0,Rh);case"textInput":return n=r.data,n===Rh&&Ah?null:n;default:return null}}function n0(n,r){if(_s)return n==="compositionend"||!Bu&&Ch(n,r)?(n=yh(),Io=Uu=ur=null,_s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Th&&r.locale!=="ko"?null:r.data;default:return null}}var i0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!i0[n.type]:r==="textarea"}function Lh(n,r,o,u){ge(u),r=Go(r,"onChange"),0<r.length&&(o=new Nu("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Ra=null,Aa=null;function r0(n){qh(n,0)}function Bo(n){var r=Ms(n);if(gt(r))return n}function s0(n,r){if(n==="change")return r}var Dh=!1;if(f){var zu;if(f){var Hu="oninput"in document;if(!Hu){var Uh=document.createElement("div");Uh.setAttribute("oninput","return;"),Hu=typeof Uh.oninput=="function"}zu=Hu}else zu=!1;Dh=zu&&(!document.documentMode||9<document.documentMode)}function Nh(){Ra&&(Ra.detachEvent("onpropertychange",Ih),Aa=Ra=null)}function Ih(n){if(n.propertyName==="value"&&Bo(Aa)){var r=[];Lh(r,Aa,n,V(n)),Pn(r0,r)}}function a0(n,r,o){n==="focusin"?(Nh(),Ra=r,Aa=o,Ra.attachEvent("onpropertychange",Ih)):n==="focusout"&&Nh()}function o0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Bo(Aa)}function l0(n,r){if(n==="click")return Bo(r)}function u0(n,r){if(n==="input"||n==="change")return Bo(r)}function c0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ni=typeof Object.is=="function"?Object.is:c0;function Ca(n,r){if(ni(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!d.call(r,h)||!ni(n[h],r[h]))return!1}return!0}function Fh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Oh(n,r){var o=Fh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Fh(o)}}function kh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?kh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Bh(){for(var n=window,r=ct();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=ct(n.document)}return r}function Vu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function f0(n){var r=Bh(),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&kh(o.ownerDocument.documentElement,o)){if(u!==null&&Vu(o)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=Oh(o,g);var M=Oh(o,u);h&&M&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(r),n.extend(M.node,M.offset)):(r.setEnd(M.node,M.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var d0=f&&"documentMode"in document&&11>=document.documentMode,xs=null,Gu=null,ba=null,Wu=!1;function zh(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Wu||xs==null||xs!==ct(u)||(u=xs,"selectionStart"in u&&Vu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ba&&Ca(ba,u)||(ba=u,u=Go(Gu,"onSelect"),0<u.length&&(r=new Nu("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=xs)))}function zo(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var ys={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},Xu={},Hh={};f&&(Hh=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function Ho(n){if(Xu[n])return Xu[n];if(!ys[n])return n;var r=ys[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Hh)return Xu[n]=r[o];return n}var Vh=Ho("animationend"),Gh=Ho("animationiteration"),Wh=Ho("animationstart"),Xh=Ho("transitionend"),jh=new Map,$h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(n,r){jh.set(n,r),l(r,[n])}for(var ju=0;ju<$h.length;ju++){var $u=$h[ju],h0=$u.toLowerCase(),p0=$u[0].toUpperCase()+$u.slice(1);cr(h0,"on"+p0)}cr(Vh,"onAnimationEnd"),cr(Gh,"onAnimationIteration"),cr(Wh,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(Xh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function Yh(n,r,o){var u=n.type||"unknown-event";n.currentTarget=o,To(u,r,void 0,n),n.currentTarget=null}function qh(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var M=u.length-1;0<=M;M--){var U=u[M],k=U.instance,se=U.currentTarget;if(U=U.listener,k!==g&&h.isPropagationStopped())break e;Yh(h,U,se),g=k}else for(M=0;M<u.length;M++){if(U=u[M],k=U.instance,se=U.currentTarget,U=U.listener,k!==g&&h.isPropagationStopped())break e;Yh(h,U,se),g=k}}}if(Br)throw n=ir,Br=!1,ir=null,n}function Ot(n,r){var o=r[tc];o===void 0&&(o=r[tc]=new Set);var u=n+"__bubble";o.has(u)||(Kh(r,n,2,!1),o.add(u))}function Yu(n,r,o){var u=0;r&&(u|=4),Kh(o,n,u,r)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function La(n){if(!n[Vo]){n[Vo]=!0,s.forEach(function(o){o!=="selectionchange"&&(m0.has(o)||Yu(o,!1,n),Yu(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Vo]||(r[Vo]=!0,Yu("selectionchange",!1,r))}}function Kh(n,r,o,u){switch(xh(r)){case 1:var h=b_;break;case 4:h=P_;break;default:h=Lu}o=h.bind(null,r,o,n),h=void 0,!ps||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(r,o,{capture:!0,passive:h}):n.addEventListener(r,o,!0):h!==void 0?n.addEventListener(r,o,{passive:h}):n.addEventListener(r,o,!1)}function qu(n,r,o,u,h){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var U=u.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(M===4)for(M=u.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===h||k.nodeType===8&&k.parentNode===h))return;M=M.return}for(;U!==null;){if(M=zr(U),M===null)return;if(k=M.tag,k===5||k===6){u=g=M;continue e}U=U.parentNode}}u=u.return}Pn(function(){var se=g,we=V(o),Te=[];e:{var Me=jh.get(n);if(Me!==void 0){var Be=Nu,je=n;switch(n){case"keypress":if(Fo(o)===0)break e;case"keydown":case"keyup":Be=X_;break;case"focusin":je="focus",Be=Ou;break;case"focusout":je="blur",Be=Ou;break;case"beforeblur":case"afterblur":Be=Ou;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=U_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=Y_;break;case Vh:case Gh:case Wh:Be=F_;break;case Xh:Be=K_;break;case"scroll":Be=L_;break;case"wheel":Be=J_;break;case"copy":case"cut":case"paste":Be=k_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=wh}var qe=(r&4)!==0,Yt=!qe&&n==="scroll",K=qe?Me!==null?Me+"Capture":null:Me;qe=[];for(var G=se,Q;G!==null;){Q=G;var Ae=Q.stateNode;if(Q.tag===5&&Ae!==null&&(Q=Ae,K!==null&&(Ae=Sn(G,K),Ae!=null&&qe.push(Da(G,Ae,Q)))),Yt)break;G=G.return}0<qe.length&&(Me=new Be(Me,je,null,o,we),Te.push({event:Me,listeners:qe}))}}if((r&7)===0){e:{if(Me=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",Me&&o!==at&&(je=o.relatedTarget||o.fromElement)&&(zr(je)||je[Di]))break e;if((Be||Me)&&(Me=we.window===we?we:(Me=we.ownerDocument)?Me.defaultView||Me.parentWindow:window,Be?(je=o.relatedTarget||o.toElement,Be=se,je=je?zr(je):null,je!==null&&(Yt=mi(je),je!==Yt||je.tag!==5&&je.tag!==6)&&(je=null)):(Be=null,je=se),Be!==je)){if(qe=Eh,Ae="onMouseLeave",K="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(qe=wh,Ae="onPointerLeave",K="onPointerEnter",G="pointer"),Yt=Be==null?Me:Ms(Be),Q=je==null?Me:Ms(je),Me=new qe(Ae,G+"leave",Be,o,we),Me.target=Yt,Me.relatedTarget=Q,Ae=null,zr(we)===se&&(qe=new qe(K,G+"enter",je,o,we),qe.target=Q,qe.relatedTarget=Yt,Ae=qe),Yt=Ae,Be&&je)t:{for(qe=Be,K=je,G=0,Q=qe;Q;Q=Ss(Q))G++;for(Q=0,Ae=K;Ae;Ae=Ss(Ae))Q++;for(;0<G-Q;)qe=Ss(qe),G--;for(;0<Q-G;)K=Ss(K),Q--;for(;G--;){if(qe===K||K!==null&&qe===K.alternate)break t;qe=Ss(qe),K=Ss(K)}qe=null}else qe=null;Be!==null&&Zh(Te,Me,Be,qe,!1),je!==null&&Yt!==null&&Zh(Te,Yt,je,qe,!0)}}e:{if(Me=se?Ms(se):window,Be=Me.nodeName&&Me.nodeName.toLowerCase(),Be==="select"||Be==="input"&&Me.type==="file")var Ze=s0;else if(Ph(Me))if(Dh)Ze=u0;else{Ze=o0;var rt=a0}else(Be=Me.nodeName)&&Be.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(Ze=l0);if(Ze&&(Ze=Ze(n,se))){Lh(Te,Ze,o,we);break e}rt&&rt(n,Me,se),n==="focusout"&&(rt=Me._wrapperState)&&rt.controlled&&Me.type==="number"&&ht(Me,"number",Me.value)}switch(rt=se?Ms(se):window,n){case"focusin":(Ph(rt)||rt.contentEditable==="true")&&(xs=rt,Gu=se,ba=null);break;case"focusout":ba=Gu=xs=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,zh(Te,o,we);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":zh(Te,o,we)}var st;if(Bu)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else _s?Ch(n,o)&&(ut="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ut="onCompositionStart");ut&&(Th&&o.locale!=="ko"&&(_s||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&_s&&(st=yh()):(ur=we,Uu="value"in ur?ur.value:ur.textContent,_s=!0)),rt=Go(se,ut),0<rt.length&&(ut=new Mh(ut,n,null,o,we),Te.push({event:ut,listeners:rt}),st?ut.data=st:(st=bh(o),st!==null&&(ut.data=st)))),(st=e0?t0(n,o):n0(n,o))&&(se=Go(se,"onBeforeInput"),0<se.length&&(we=new Mh("onBeforeInput","beforeinput",null,o,we),Te.push({event:we,listeners:se}),we.data=st))}qh(Te,r)})}function Da(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Go(n,r){for(var o=r+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Sn(n,o),g!=null&&u.unshift(Da(n,g,h)),g=Sn(n,r),g!=null&&u.push(Da(n,g,h))),n=n.return}return u}function Ss(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Zh(n,r,o,u,h){for(var g=r._reactName,M=[];o!==null&&o!==u;){var U=o,k=U.alternate,se=U.stateNode;if(k!==null&&k===u)break;U.tag===5&&se!==null&&(U=se,h?(k=Sn(o,g),k!=null&&M.unshift(Da(o,k,U))):h||(k=Sn(o,g),k!=null&&M.push(Da(o,k,U)))),o=o.return}M.length!==0&&n.push({event:r,listeners:M})}var g0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function Jh(n){return(typeof n=="string"?n:""+n).replace(g0,`
`).replace(v0,"")}function Wo(n,r,o){if(r=Jh(r),Jh(n)!==r&&o)throw Error(t(425))}function Xo(){}var Ku=null,Zu=null;function Ju(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Qu=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,Qh=typeof Promise=="function"?Promise:void 0,x0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qh<"u"?function(n){return Qh.resolve(null).then(n).catch(y0)}:Qu;function y0(n){setTimeout(function(){throw n})}function ec(n,r){var o=r,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),Ea(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);Ea(r)}function fr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function ep(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var Es=Math.random().toString(36).slice(2),vi="__reactFiber$"+Es,Ua="__reactProps$"+Es,Di="__reactContainer$"+Es,tc="__reactEvents$"+Es,S0="__reactListeners$"+Es,E0="__reactHandles$"+Es;function zr(n){var r=n[vi];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Di]||o[vi]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=ep(n);n!==null;){if(o=n[vi])return o;n=ep(n)}return r}n=o,o=n.parentNode}return null}function Na(n){return n=n[vi]||n[Di],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function jo(n){return n[Ua]||null}var nc=[],ws=-1;function dr(n){return{current:n}}function kt(n){0>ws||(n.current=nc[ws],nc[ws]=null,ws--)}function Ft(n,r){ws++,nc[ws]=n.current,n.current=r}var hr={},pn=dr(hr),Ln=dr(!1),Hr=hr;function Ts(n,r){var o=n.type.contextTypes;if(!o)return hr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=r[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function Dn(n){return n=n.childContextTypes,n!=null}function $o(){kt(Ln),kt(pn)}function tp(n,r,o){if(pn.current!==hr)throw Error(t(168));Ft(pn,r),Ft(Ln,o)}function np(n,r,o){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(t(108,de(n)||"Unknown",h));return le({},o,u)}function Yo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||hr,Hr=pn.current,Ft(pn,n),Ft(Ln,Ln.current),!0}function ip(n,r,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=np(n,r,Hr),u.__reactInternalMemoizedMergedChildContext=n,kt(Ln),kt(pn),Ft(pn,n)):kt(Ln),Ft(Ln,o)}var Ui=null,qo=!1,ic=!1;function rp(n){Ui===null?Ui=[n]:Ui.push(n)}function M0(n){qo=!0,rp(n)}function pr(){if(!ic&&Ui!==null){ic=!0;var n=0,r=wt;try{var o=Ui;for(wt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ui=null,qo=!1}catch(h){throw Ui!==null&&(Ui=Ui.slice(n+1)),Po(Re,pr),h}finally{wt=r,ic=!1}}return null}var Rs=[],As=0,Ko=null,Zo=0,Wn=[],Xn=0,Vr=null,Ni=1,Ii="";function Gr(n,r){Rs[As++]=Zo,Rs[As++]=Ko,Ko=n,Zo=r}function sp(n,r,o){Wn[Xn++]=Ni,Wn[Xn++]=Ii,Wn[Xn++]=Vr,Vr=n;var u=Ni;n=Ii;var h=32-pt(u)-1;u&=~(1<<h),o+=1;var g=32-pt(r)+h;if(30<g){var M=h-h%5;g=(u&(1<<M)-1).toString(32),u>>=M,h-=M,Ni=1<<32-pt(r)+h|o<<h|u,Ii=g+n}else Ni=1<<g|o<<h|u,Ii=n}function rc(n){n.return!==null&&(Gr(n,1),sp(n,1,0))}function sc(n){for(;n===Ko;)Ko=Rs[--As],Rs[As]=null,Zo=Rs[--As],Rs[As]=null;for(;n===Vr;)Vr=Wn[--Xn],Wn[Xn]=null,Ii=Wn[--Xn],Wn[Xn]=null,Ni=Wn[--Xn],Wn[Xn]=null}var Bn=null,zn=null,zt=!1,ii=null;function ap(n,r){var o=qn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function op(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Bn=n,zn=fr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Bn=n,zn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Vr!==null?{id:Ni,overflow:Ii}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=qn(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,Bn=n,zn=null,!0):!1;default:return!1}}function ac(n){return(n.mode&1)!==0&&(n.flags&128)===0}function oc(n){if(zt){var r=zn;if(r){var o=r;if(!op(n,r)){if(ac(n))throw Error(t(418));r=fr(o.nextSibling);var u=Bn;r&&op(n,r)?ap(u,o):(n.flags=n.flags&-4097|2,zt=!1,Bn=n)}}else{if(ac(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Bn=n}}}function lp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Jo(n){if(n!==Bn)return!1;if(!zt)return lp(n),zt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Ju(n.type,n.memoizedProps)),r&&(r=zn)){if(ac(n))throw up(),Error(t(418));for(;r;)ap(n,r),r=fr(r.nextSibling)}if(lp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){zn=fr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}zn=null}}else zn=Bn?fr(n.stateNode.nextSibling):null;return!0}function up(){for(var n=zn;n;)n=fr(n.nextSibling)}function Cs(){zn=Bn=null,zt=!1}function lc(n){ii===null?ii=[n]:ii.push(n)}var w0=C.ReactCurrentBatchConfig;function Ia(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(M){var U=h.refs;M===null?delete U[g]:U[g]=M},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Qo(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function cp(n){var r=n._init;return r(n._payload)}function fp(n){function r(K,G){if(n){var Q=K.deletions;Q===null?(K.deletions=[G],K.flags|=16):Q.push(G)}}function o(K,G){if(!n)return null;for(;G!==null;)r(K,G),G=G.sibling;return null}function u(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function h(K,G){return K=Er(K,G),K.index=0,K.sibling=null,K}function g(K,G,Q){return K.index=Q,n?(Q=K.alternate,Q!==null?(Q=Q.index,Q<G?(K.flags|=2,G):Q):(K.flags|=2,G)):(K.flags|=1048576,G)}function M(K){return n&&K.alternate===null&&(K.flags|=2),K}function U(K,G,Q,Ae){return G===null||G.tag!==6?(G=Qc(Q,K.mode,Ae),G.return=K,G):(G=h(G,Q),G.return=K,G)}function k(K,G,Q,Ae){var Ze=Q.type;return Ze===F?we(K,G,Q.props.children,Ae,Q.key):G!==null&&(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ne&&cp(Ze)===G.type)?(Ae=h(G,Q.props),Ae.ref=Ia(K,G,Q),Ae.return=K,Ae):(Ae=Ml(Q.type,Q.key,Q.props,null,K.mode,Ae),Ae.ref=Ia(K,G,Q),Ae.return=K,Ae)}function se(K,G,Q,Ae){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=ef(Q,K.mode,Ae),G.return=K,G):(G=h(G,Q.children||[]),G.return=K,G)}function we(K,G,Q,Ae,Ze){return G===null||G.tag!==7?(G=Zr(Q,K.mode,Ae,Ze),G.return=K,G):(G=h(G,Q),G.return=K,G)}function Te(K,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Qc(""+G,K.mode,Q),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case z:return Q=Ml(G.type,G.key,G.props,null,K.mode,Q),Q.ref=Ia(K,null,G),Q.return=K,Q;case N:return G=ef(G,K.mode,Q),G.return=K,G;case ne:var Ae=G._init;return Te(K,Ae(G._payload),Q)}if(Ke(G)||fe(G))return G=Zr(G,K.mode,Q,null),G.return=K,G;Qo(K,G)}return null}function Me(K,G,Q,Ae){var Ze=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ze!==null?null:U(K,G,""+Q,Ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case z:return Q.key===Ze?k(K,G,Q,Ae):null;case N:return Q.key===Ze?se(K,G,Q,Ae):null;case ne:return Ze=Q._init,Me(K,G,Ze(Q._payload),Ae)}if(Ke(Q)||fe(Q))return Ze!==null?null:we(K,G,Q,Ae,null);Qo(K,Q)}return null}function Be(K,G,Q,Ae,Ze){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return K=K.get(Q)||null,U(G,K,""+Ae,Ze);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case z:return K=K.get(Ae.key===null?Q:Ae.key)||null,k(G,K,Ae,Ze);case N:return K=K.get(Ae.key===null?Q:Ae.key)||null,se(G,K,Ae,Ze);case ne:var rt=Ae._init;return Be(K,G,Q,rt(Ae._payload),Ze)}if(Ke(Ae)||fe(Ae))return K=K.get(Q)||null,we(G,K,Ae,Ze,null);Qo(G,Ae)}return null}function je(K,G,Q,Ae){for(var Ze=null,rt=null,st=G,ut=G=0,on=null;st!==null&&ut<Q.length;ut++){st.index>ut?(on=st,st=null):on=st.sibling;var Rt=Me(K,st,Q[ut],Ae);if(Rt===null){st===null&&(st=on);break}n&&st&&Rt.alternate===null&&r(K,st),G=g(Rt,G,ut),rt===null?Ze=Rt:rt.sibling=Rt,rt=Rt,st=on}if(ut===Q.length)return o(K,st),zt&&Gr(K,ut),Ze;if(st===null){for(;ut<Q.length;ut++)st=Te(K,Q[ut],Ae),st!==null&&(G=g(st,G,ut),rt===null?Ze=st:rt.sibling=st,rt=st);return zt&&Gr(K,ut),Ze}for(st=u(K,st);ut<Q.length;ut++)on=Be(st,K,ut,Q[ut],Ae),on!==null&&(n&&on.alternate!==null&&st.delete(on.key===null?ut:on.key),G=g(on,G,ut),rt===null?Ze=on:rt.sibling=on,rt=on);return n&&st.forEach(function(Mr){return r(K,Mr)}),zt&&Gr(K,ut),Ze}function qe(K,G,Q,Ae){var Ze=fe(Q);if(typeof Ze!="function")throw Error(t(150));if(Q=Ze.call(Q),Q==null)throw Error(t(151));for(var rt=Ze=null,st=G,ut=G=0,on=null,Rt=Q.next();st!==null&&!Rt.done;ut++,Rt=Q.next()){st.index>ut?(on=st,st=null):on=st.sibling;var Mr=Me(K,st,Rt.value,Ae);if(Mr===null){st===null&&(st=on);break}n&&st&&Mr.alternate===null&&r(K,st),G=g(Mr,G,ut),rt===null?Ze=Mr:rt.sibling=Mr,rt=Mr,st=on}if(Rt.done)return o(K,st),zt&&Gr(K,ut),Ze;if(st===null){for(;!Rt.done;ut++,Rt=Q.next())Rt=Te(K,Rt.value,Ae),Rt!==null&&(G=g(Rt,G,ut),rt===null?Ze=Rt:rt.sibling=Rt,rt=Rt);return zt&&Gr(K,ut),Ze}for(st=u(K,st);!Rt.done;ut++,Rt=Q.next())Rt=Be(st,K,ut,Rt.value,Ae),Rt!==null&&(n&&Rt.alternate!==null&&st.delete(Rt.key===null?ut:Rt.key),G=g(Rt,G,ut),rt===null?Ze=Rt:rt.sibling=Rt,rt=Rt);return n&&st.forEach(function(ix){return r(K,ix)}),zt&&Gr(K,ut),Ze}function Yt(K,G,Q,Ae){if(typeof Q=="object"&&Q!==null&&Q.type===F&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case z:e:{for(var Ze=Q.key,rt=G;rt!==null;){if(rt.key===Ze){if(Ze=Q.type,Ze===F){if(rt.tag===7){o(K,rt.sibling),G=h(rt,Q.props.children),G.return=K,K=G;break e}}else if(rt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ne&&cp(Ze)===rt.type){o(K,rt.sibling),G=h(rt,Q.props),G.ref=Ia(K,rt,Q),G.return=K,K=G;break e}o(K,rt);break}else r(K,rt);rt=rt.sibling}Q.type===F?(G=Zr(Q.props.children,K.mode,Ae,Q.key),G.return=K,K=G):(Ae=Ml(Q.type,Q.key,Q.props,null,K.mode,Ae),Ae.ref=Ia(K,G,Q),Ae.return=K,K=Ae)}return M(K);case N:e:{for(rt=Q.key;G!==null;){if(G.key===rt)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){o(K,G.sibling),G=h(G,Q.children||[]),G.return=K,K=G;break e}else{o(K,G);break}else r(K,G);G=G.sibling}G=ef(Q,K.mode,Ae),G.return=K,K=G}return M(K);case ne:return rt=Q._init,Yt(K,G,rt(Q._payload),Ae)}if(Ke(Q))return je(K,G,Q,Ae);if(fe(Q))return qe(K,G,Q,Ae);Qo(K,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,G!==null&&G.tag===6?(o(K,G.sibling),G=h(G,Q),G.return=K,K=G):(o(K,G),G=Qc(Q,K.mode,Ae),G.return=K,K=G),M(K)):o(K,G)}return Yt}var bs=fp(!0),dp=fp(!1),el=dr(null),tl=null,Ps=null,uc=null;function cc(){uc=Ps=tl=null}function fc(n){var r=el.current;kt(el),n._currentValue=r}function dc(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Ls(n,r){tl=n,uc=Ps=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Un=!0),n.firstContext=null)}function jn(n){var r=n._currentValue;if(uc!==n)if(n={context:n,memoizedValue:r,next:null},Ps===null){if(tl===null)throw Error(t(308));Ps=n,tl.dependencies={lanes:0,firstContext:n}}else Ps=Ps.next=n;return r}var Wr=null;function hc(n){Wr===null?Wr=[n]:Wr.push(n)}function hp(n,r,o,u){var h=r.interleaved;return h===null?(o.next=o,hc(r)):(o.next=h.next,h.next=o),r.interleaved=o,Fi(n,u)}function Fi(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var mr=!1;function pc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Oi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function gr(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Tt&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,Fi(n,o)}return h=u.interleaved,h===null?(r.next=r,hc(u)):(r.next=h.next,h.next=r),u.interleaved=r,Fi(n,o)}function nl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,rn(n,o)}}function mp(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=M:g=g.next=M,o=o.next}while(o!==null);g===null?h=g=r:g=g.next=r}else h=g=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function il(n,r,o,u){var h=n.updateQueue;mr=!1;var g=h.firstBaseUpdate,M=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var k=U,se=k.next;k.next=null,M===null?g=se:M.next=se,M=k;var we=n.alternate;we!==null&&(we=we.updateQueue,U=we.lastBaseUpdate,U!==M&&(U===null?we.firstBaseUpdate=se:U.next=se,we.lastBaseUpdate=k))}if(g!==null){var Te=h.baseState;M=0,we=se=k=null,U=g;do{var Me=U.lane,Be=U.eventTime;if((u&Me)===Me){we!==null&&(we=we.next={eventTime:Be,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var je=n,qe=U;switch(Me=r,Be=o,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){Te=je.call(Be,Te,Me);break e}Te=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,Me=typeof je=="function"?je.call(Be,Te,Me):je,Me==null)break e;Te=le({},Te,Me);break e;case 2:mr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,Me=h.effects,Me===null?h.effects=[U]:Me.push(U))}else Be={eventTime:Be,lane:Me,tag:U.tag,payload:U.payload,callback:U.callback,next:null},we===null?(se=we=Be,k=Te):we=we.next=Be,M|=Me;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;Me=U,U=Me.next,Me.next=null,h.lastBaseUpdate=Me,h.shared.pending=null}}while(!0);if(we===null&&(k=Te),h.baseState=k,h.firstBaseUpdate=se,h.lastBaseUpdate=we,r=h.shared.interleaved,r!==null){h=r;do M|=h.lane,h=h.next;while(h!==r)}else g===null&&(h.shared.lanes=0);$r|=M,n.lanes=M,n.memoizedState=Te}}function gp(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Fa={},_i=dr(Fa),Oa=dr(Fa),ka=dr(Fa);function Xr(n){if(n===Fa)throw Error(t(174));return n}function mc(n,r){switch(Ft(ka,r),Ft(Oa,n),Ft(_i,Fa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:xe(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=xe(r,n)}kt(_i),Ft(_i,r)}function Ds(){kt(_i),kt(Oa),kt(ka)}function vp(n){Xr(ka.current);var r=Xr(_i.current),o=xe(r,n.type);r!==o&&(Ft(Oa,n),Ft(_i,o))}function gc(n){Oa.current===n&&(kt(_i),kt(Oa))}var Ht=dr(0);function rl(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var vc=[];function _c(){for(var n=0;n<vc.length;n++)vc[n]._workInProgressVersionPrimary=null;vc.length=0}var sl=C.ReactCurrentDispatcher,xc=C.ReactCurrentBatchConfig,jr=0,Vt=null,Zt=null,sn=null,al=!1,Ba=!1,za=0,T0=0;function mn(){throw Error(t(321))}function yc(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!ni(n[o],r[o]))return!1;return!0}function Sc(n,r,o,u,h,g){if(jr=g,Vt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,sl.current=n===null||n.memoizedState===null?b0:P0,n=o(u,h),Ba){g=0;do{if(Ba=!1,za=0,25<=g)throw Error(t(301));g+=1,sn=Zt=null,r.updateQueue=null,sl.current=L0,n=o(u,h)}while(Ba)}if(sl.current=ul,r=Zt!==null&&Zt.next!==null,jr=0,sn=Zt=Vt=null,al=!1,r)throw Error(t(300));return n}function Ec(){var n=za!==0;return za=0,n}function xi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Vt.memoizedState=sn=n:sn=sn.next=n,sn}function $n(){if(Zt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var r=sn===null?Vt.memoizedState:sn.next;if(r!==null)sn=r,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},sn===null?Vt.memoizedState=sn=n:sn=sn.next=n}return sn}function Ha(n,r){return typeof r=="function"?r(n):r}function Mc(n){var r=$n(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Zt,h=u.baseQueue,g=o.pending;if(g!==null){if(h!==null){var M=h.next;h.next=g.next,g.next=M}u.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,u=u.baseState;var U=M=null,k=null,se=g;do{var we=se.lane;if((jr&we)===we)k!==null&&(k=k.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),u=se.hasEagerState?se.eagerState:n(u,se.action);else{var Te={lane:we,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};k===null?(U=k=Te,M=u):k=k.next=Te,Vt.lanes|=we,$r|=we}se=se.next}while(se!==null&&se!==g);k===null?M=u:k.next=U,ni(u,r.memoizedState)||(Un=!0),r.memoizedState=u,r.baseState=M,r.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do g=h.lane,Vt.lanes|=g,$r|=g,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function wc(n){var r=$n(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,g=r.memoizedState;if(h!==null){o.pending=null;var M=h=h.next;do g=n(g,M.action),M=M.next;while(M!==h);ni(g,r.memoizedState)||(Un=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,u]}function _p(){}function xp(n,r){var o=Vt,u=$n(),h=r(),g=!ni(u.memoizedState,h);if(g&&(u.memoizedState=h,Un=!0),u=u.queue,Tc(Ep.bind(null,o,u,n),[n]),u.getSnapshot!==r||g||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Va(9,Sp.bind(null,o,u,h,r),void 0,null),an===null)throw Error(t(349));(jr&30)!==0||yp(o,r,h)}return h}function yp(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Vt.updateQueue,r===null?(r={lastEffect:null,stores:null},Vt.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Sp(n,r,o,u){r.value=o,r.getSnapshot=u,Mp(r)&&wp(n)}function Ep(n,r,o){return o(function(){Mp(r)&&wp(n)})}function Mp(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!ni(n,o)}catch{return!0}}function wp(n){var r=Fi(n,1);r!==null&&oi(r,n,1,-1)}function Tp(n){var r=xi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:n},r.queue=n,n=n.dispatch=C0.bind(null,Vt,n),[r.memoizedState,n]}function Va(n,r,o,u){return n={tag:n,create:r,destroy:o,deps:u,next:null},r=Vt.updateQueue,r===null?(r={lastEffect:null,stores:null},Vt.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n)),n}function Rp(){return $n().memoizedState}function ol(n,r,o,u){var h=xi();Vt.flags|=n,h.memoizedState=Va(1|r,o,void 0,u===void 0?null:u)}function ll(n,r,o,u){var h=$n();u=u===void 0?null:u;var g=void 0;if(Zt!==null){var M=Zt.memoizedState;if(g=M.destroy,u!==null&&yc(u,M.deps)){h.memoizedState=Va(r,o,g,u);return}}Vt.flags|=n,h.memoizedState=Va(1|r,o,g,u)}function Ap(n,r){return ol(8390656,8,n,r)}function Tc(n,r){return ll(2048,8,n,r)}function Cp(n,r){return ll(4,2,n,r)}function bp(n,r){return ll(4,4,n,r)}function Pp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Lp(n,r,o){return o=o!=null?o.concat([n]):null,ll(4,4,Pp.bind(null,r,n),o)}function Rc(){}function Dp(n,r){var o=$n();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&yc(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Up(n,r){var o=$n();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&yc(r,u[1])?u[0]:(n=n(),o.memoizedState=[n,r],n)}function Np(n,r,o){return(jr&21)===0?(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=o):(ni(o,r)||(o=Nt(),Vt.lanes|=o,$r|=o,n.baseState=!0),r)}function R0(n,r){var o=wt;wt=o!==0&&4>o?o:4,n(!0);var u=xc.transition;xc.transition={};try{n(!1),r()}finally{wt=o,xc.transition=u}}function Ip(){return $n().memoizedState}function A0(n,r,o){var u=yr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Fp(n))Op(r,o);else if(o=hp(n,r,o,u),o!==null){var h=wn();oi(o,n,u,h),kp(o,r,u)}}function C0(n,r,o){var u=yr(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Fp(n))Op(r,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var M=r.lastRenderedState,U=g(M,o);if(h.hasEagerState=!0,h.eagerState=U,ni(U,M)){var k=r.interleaved;k===null?(h.next=h,hc(r)):(h.next=k.next,k.next=h),r.interleaved=h;return}}catch{}o=hp(n,r,h,u),o!==null&&(h=wn(),oi(o,n,u,h),kp(o,r,u))}}function Fp(n){var r=n.alternate;return n===Vt||r!==null&&r===Vt}function Op(n,r){Ba=al=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function kp(n,r,o){if((o&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,rn(n,o)}}var ul={readContext:jn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},b0={readContext:jn,useCallback:function(n,r){return xi().memoizedState=[n,r===void 0?null:r],n},useContext:jn,useEffect:Ap,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,ol(4194308,4,Pp.bind(null,r,n),o)},useLayoutEffect:function(n,r){return ol(4194308,4,n,r)},useInsertionEffect:function(n,r){return ol(4,2,n,r)},useMemo:function(n,r){var o=xi();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var u=xi();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=A0.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var r=xi();return n={current:n},r.memoizedState=n},useState:Tp,useDebugValue:Rc,useDeferredValue:function(n){return xi().memoizedState=n},useTransition:function(){var n=Tp(!1),r=n[0];return n=R0.bind(null,n[1]),xi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var u=Vt,h=xi();if(zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),an===null)throw Error(t(349));(jr&30)!==0||yp(u,r,o)}h.memoizedState=o;var g={value:o,getSnapshot:r};return h.queue=g,Ap(Ep.bind(null,u,g,n),[n]),u.flags|=2048,Va(9,Sp.bind(null,u,g,o,r),void 0,null),o},useId:function(){var n=xi(),r=an.identifierPrefix;if(zt){var o=Ii,u=Ni;o=(u&~(1<<32-pt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=za++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=T0++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},P0={readContext:jn,useCallback:Dp,useContext:jn,useEffect:Tc,useImperativeHandle:Lp,useInsertionEffect:Cp,useLayoutEffect:bp,useMemo:Up,useReducer:Mc,useRef:Rp,useState:function(){return Mc(Ha)},useDebugValue:Rc,useDeferredValue:function(n){var r=$n();return Np(r,Zt.memoizedState,n)},useTransition:function(){var n=Mc(Ha)[0],r=$n().memoizedState;return[n,r]},useMutableSource:_p,useSyncExternalStore:xp,useId:Ip,unstable_isNewReconciler:!1},L0={readContext:jn,useCallback:Dp,useContext:jn,useEffect:Tc,useImperativeHandle:Lp,useInsertionEffect:Cp,useLayoutEffect:bp,useMemo:Up,useReducer:wc,useRef:Rp,useState:function(){return wc(Ha)},useDebugValue:Rc,useDeferredValue:function(n){var r=$n();return Zt===null?r.memoizedState=n:Np(r,Zt.memoizedState,n)},useTransition:function(){var n=wc(Ha)[0],r=$n().memoizedState;return[n,r]},useMutableSource:_p,useSyncExternalStore:xp,useId:Ip,unstable_isNewReconciler:!1};function ri(n,r){if(n&&n.defaultProps){r=le({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Ac(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:le({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var cl={isMounted:function(n){return(n=n._reactInternals)?mi(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=wn(),h=yr(n),g=Oi(u,h);g.payload=r,o!=null&&(g.callback=o),r=gr(n,g,h),r!==null&&(oi(r,n,h,u),nl(r,n,h))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=wn(),h=yr(n),g=Oi(u,h);g.tag=1,g.payload=r,o!=null&&(g.callback=o),r=gr(n,g,h),r!==null&&(oi(r,n,h,u),nl(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=wn(),u=yr(n),h=Oi(o,u);h.tag=2,r!=null&&(h.callback=r),r=gr(n,h,u),r!==null&&(oi(r,n,u,o),nl(r,n,u))}};function Bp(n,r,o,u,h,g,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,M):r.prototype&&r.prototype.isPureReactComponent?!Ca(o,u)||!Ca(h,g):!0}function zp(n,r,o){var u=!1,h=hr,g=r.contextType;return typeof g=="object"&&g!==null?g=jn(g):(h=Dn(r)?Hr:pn.current,u=r.contextTypes,g=(u=u!=null)?Ts(n,h):hr),r=new r(o,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=cl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),r}function Hp(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&cl.enqueueReplaceState(r,r.state,null)}function Cc(n,r,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},pc(n);var g=r.contextType;typeof g=="object"&&g!==null?h.context=jn(g):(g=Dn(r)?Hr:pn.current,h.context=Ts(n,g)),h.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Ac(n,r,g,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&cl.enqueueReplaceState(h,h.state,null),il(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Us(n,r){try{var o="",u=r;do o+=me(u),u=u.return;while(u);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:h,digest:null}}function bc(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Pc(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var D0=typeof WeakMap=="function"?WeakMap:Map;function Vp(n,r,o){o=Oi(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){vl||(vl=!0,Xc=u),Pc(n,r)},o}function Gp(n,r,o){o=Oi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){Pc(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Pc(n,r),typeof u!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var M=r.stack;this.componentDidCatch(r.value,{componentStack:M!==null?M:""})}),o}function Wp(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new D0;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),n=j0.bind(null,n,r,o),r.then(n,n))}function Xp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function jp(n,r,o,u,h){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Oi(-1,1),r.tag=2,gr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var U0=C.ReactCurrentOwner,Un=!1;function Mn(n,r,o,u){r.child=n===null?dp(r,null,o,u):bs(r,n.child,o,u)}function $p(n,r,o,u,h){o=o.render;var g=r.ref;return Ls(r,h),u=Sc(n,r,o,u,g,h),o=Ec(),n!==null&&!Un?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,ki(n,r,h)):(zt&&o&&rc(r),r.flags|=1,Mn(n,r,u,h),r.child)}function Yp(n,r,o,u,h){if(n===null){var g=o.type;return typeof g=="function"&&!Jc(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=g,qp(n,r,g,u,h)):(n=Ml(o.type,null,u,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&h)===0){var M=g.memoizedProps;if(o=o.compare,o=o!==null?o:Ca,o(M,u)&&n.ref===r.ref)return ki(n,r,h)}return r.flags|=1,n=Er(g,u),n.ref=r.ref,n.return=r,r.child=n}function qp(n,r,o,u,h){if(n!==null){var g=n.memoizedProps;if(Ca(g,u)&&n.ref===r.ref)if(Un=!1,r.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Un=!0);else return r.lanes=n.lanes,ki(n,r,h)}return Lc(n,r,o,u,h)}function Kp(n,r,o){var u=r.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Is,Hn),Hn|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ft(Is,Hn),Hn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,Ft(Is,Hn),Hn|=u}else g!==null?(u=g.baseLanes|o,r.memoizedState=null):u=o,Ft(Is,Hn),Hn|=u;return Mn(n,r,h,o),r.child}function Zp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Lc(n,r,o,u,h){var g=Dn(o)?Hr:pn.current;return g=Ts(r,g),Ls(r,h),o=Sc(n,r,o,u,g,h),u=Ec(),n!==null&&!Un?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,ki(n,r,h)):(zt&&u&&rc(r),r.flags|=1,Mn(n,r,o,h),r.child)}function Jp(n,r,o,u,h){if(Dn(o)){var g=!0;Yo(r)}else g=!1;if(Ls(r,h),r.stateNode===null)dl(n,r),zp(r,o,u),Cc(r,o,u,h),u=!0;else if(n===null){var M=r.stateNode,U=r.memoizedProps;M.props=U;var k=M.context,se=o.contextType;typeof se=="object"&&se!==null?se=jn(se):(se=Dn(o)?Hr:pn.current,se=Ts(r,se));var we=o.getDerivedStateFromProps,Te=typeof we=="function"||typeof M.getSnapshotBeforeUpdate=="function";Te||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==u||k!==se)&&Hp(r,M,u,se),mr=!1;var Me=r.memoizedState;M.state=Me,il(r,u,M,h),k=r.memoizedState,U!==u||Me!==k||Ln.current||mr?(typeof we=="function"&&(Ac(r,o,we,u),k=r.memoizedState),(U=mr||Bp(r,o,U,u,Me,k,se))?(Te||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(r.flags|=4194308)):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=k),M.props=u,M.state=k,M.context=se,u=U):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{M=r.stateNode,pp(n,r),U=r.memoizedProps,se=r.type===r.elementType?U:ri(r.type,U),M.props=se,Te=r.pendingProps,Me=M.context,k=o.contextType,typeof k=="object"&&k!==null?k=jn(k):(k=Dn(o)?Hr:pn.current,k=Ts(r,k));var Be=o.getDerivedStateFromProps;(we=typeof Be=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==Te||Me!==k)&&Hp(r,M,u,k),mr=!1,Me=r.memoizedState,M.state=Me,il(r,u,M,h);var je=r.memoizedState;U!==Te||Me!==je||Ln.current||mr?(typeof Be=="function"&&(Ac(r,o,Be,u),je=r.memoizedState),(se=mr||Bp(r,o,se,u,Me,je,k)||!1)?(we||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,je,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,je,k)),typeof M.componentDidUpdate=="function"&&(r.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&Me===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&Me===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=je),M.props=u,M.state=je,M.context=k,u=se):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&Me===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&Me===n.memoizedState||(r.flags|=1024),u=!1)}return Dc(n,r,o,u,g,h)}function Dc(n,r,o,u,h,g){Zp(n,r);var M=(r.flags&128)!==0;if(!u&&!M)return h&&ip(r,o,!1),ki(n,r,g);u=r.stateNode,U0.current=r;var U=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&M?(r.child=bs(r,n.child,null,g),r.child=bs(r,null,U,g)):Mn(n,r,U,g),r.memoizedState=u.state,h&&ip(r,o,!0),r.child}function Qp(n){var r=n.stateNode;r.pendingContext?tp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&tp(n,r.context,!1),mc(n,r.containerInfo)}function em(n,r,o,u,h){return Cs(),lc(h),r.flags|=256,Mn(n,r,o,u),r.child}var Uc={dehydrated:null,treeContext:null,retryLane:0};function Nc(n){return{baseLanes:n,cachePool:null,transitions:null}}function tm(n,r,o){var u=r.pendingProps,h=Ht.current,g=!1,M=(r.flags&128)!==0,U;if((U=M)||(U=n!==null&&n.memoizedState===null?!1:(h&2)!==0),U?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Ft(Ht,h&1),n===null)return oc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(M=u.children,n=u.fallback,g?(u=r.mode,g=r.child,M={mode:"hidden",children:M},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=M):g=wl(M,u,0,null),n=Zr(n,u,o,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=Nc(o),r.memoizedState=Uc,n):Ic(r,M));if(h=n.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return N0(n,r,M,u,U,h,o);if(g){g=u.fallback,M=r.mode,h=n.child,U=h.sibling;var k={mode:"hidden",children:u.children};return(M&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=k,r.deletions=null):(u=Er(h,k),u.subtreeFlags=h.subtreeFlags&14680064),U!==null?g=Er(U,g):(g=Zr(g,M,o,null),g.flags|=2),g.return=r,u.return=r,u.sibling=g,r.child=u,u=g,g=r.child,M=n.child.memoizedState,M=M===null?Nc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},g.memoizedState=M,g.childLanes=n.childLanes&~o,r.memoizedState=Uc,u}return g=n.child,n=g.sibling,u=Er(g,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=u,r.memoizedState=null,u}function Ic(n,r){return r=wl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function fl(n,r,o,u){return u!==null&&lc(u),bs(r,n.child,null,o),n=Ic(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function N0(n,r,o,u,h,g,M){if(o)return r.flags&256?(r.flags&=-257,u=bc(Error(t(422))),fl(n,r,M,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=u.fallback,h=r.mode,u=wl({mode:"visible",children:u.children},h,0,null),g=Zr(g,h,M,null),g.flags|=2,u.return=r,g.return=r,u.sibling=g,r.child=u,(r.mode&1)!==0&&bs(r,n.child,null,M),r.child.memoizedState=Nc(M),r.memoizedState=Uc,g);if((r.mode&1)===0)return fl(n,r,M,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var U=u.dgst;return u=U,g=Error(t(419)),u=bc(g,u,void 0),fl(n,r,M,u)}if(U=(M&n.childLanes)!==0,Un||U){if(u=an,u!==null){switch(M&-M){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|M))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Fi(n,h),oi(u,n,h,-1))}return Zc(),u=bc(Error(t(421))),fl(n,r,M,u)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=$0.bind(null,n),h._reactRetry=r,null):(n=g.treeContext,zn=fr(h.nextSibling),Bn=r,zt=!0,ii=null,n!==null&&(Wn[Xn++]=Ni,Wn[Xn++]=Ii,Wn[Xn++]=Vr,Ni=n.id,Ii=n.overflow,Vr=r),r=Ic(r,u.children),r.flags|=4096,r)}function nm(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),dc(n.return,r,o)}function Fc(n,r,o,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function im(n,r,o){var u=r.pendingProps,h=u.revealOrder,g=u.tail;if(Mn(n,r,u.children,o),u=Ht.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&nm(n,o,r);else if(n.tag===19)nm(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ft(Ht,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)n=o.alternate,n!==null&&rl(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),Fc(r,!1,h,o,g);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&rl(n)===null){r.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}Fc(r,!0,o,null,g);break;case"together":Fc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function dl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ki(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),$r|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Er(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Er(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function I0(n,r,o){switch(r.tag){case 3:Qp(r),Cs();break;case 5:vp(r);break;case 1:Dn(r.type)&&Yo(r);break;case 4:mc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;Ft(el,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Ft(Ht,Ht.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?tm(n,r,o):(Ft(Ht,Ht.current&1),n=ki(n,r,o),n!==null?n.sibling:null);Ft(Ht,Ht.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(n.flags&128)!==0){if(u)return im(n,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ft(Ht,Ht.current),u)break;return null;case 22:case 23:return r.lanes=0,Kp(n,r,o)}return ki(n,r,o)}var rm,Oc,sm,am;rm=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Oc=function(){},sm=function(n,r,o,u){var h=n.memoizedProps;if(h!==u){n=r.stateNode,Xr(_i.current);var g=null;switch(o){case"input":h=O(n,h),u=O(n,u),g=[];break;case"select":h=le({},h,{value:void 0}),u=le({},u,{value:void 0}),g=[];break;case"textarea":h=It(n,h),u=It(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Xo)}Je(o,u);var M;o=null;for(se in h)if(!u.hasOwnProperty(se)&&h.hasOwnProperty(se)&&h[se]!=null)if(se==="style"){var U=h[se];for(M in U)U.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(a.hasOwnProperty(se)?g||(g=[]):(g=g||[]).push(se,null));for(se in u){var k=u[se];if(U=h?.[se],u.hasOwnProperty(se)&&k!==U&&(k!=null||U!=null))if(se==="style")if(U){for(M in U)!U.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in k)k.hasOwnProperty(M)&&U[M]!==k[M]&&(o||(o={}),o[M]=k[M])}else o||(g||(g=[]),g.push(se,o)),o=k;else se==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,U=U?U.__html:void 0,k!=null&&U!==k&&(g=g||[]).push(se,k)):se==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(se,""+k):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(a.hasOwnProperty(se)?(k!=null&&se==="onScroll"&&Ot("scroll",n),g||U===k||(g=[])):(g=g||[]).push(se,k))}o&&(g=g||[]).push("style",o);var se=g;(r.updateQueue=se)&&(r.flags|=4)}},am=function(n,r,o,u){o!==u&&(r.flags|=4)};function Ga(n,r){if(!zt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function gn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function F0(n,r,o){var u=r.pendingProps;switch(sc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(r),null;case 1:return Dn(r.type)&&$o(),gn(r),null;case 3:return u=r.stateNode,Ds(),kt(Ln),kt(pn),_c(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Jo(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ii!==null&&(Yc(ii),ii=null))),Oc(n,r),gn(r),null;case 5:gc(r);var h=Xr(ka.current);if(o=r.type,n!==null&&r.stateNode!=null)sm(n,r,o,u,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return gn(r),null}if(n=Xr(_i.current),Jo(r)){u=r.stateNode,o=r.type;var g=r.memoizedProps;switch(u[vi]=r,u[Ua]=g,n=(r.mode&1)!==0,o){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(h=0;h<Pa.length;h++)Ot(Pa[h],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":Wt(u,g),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Ot("invalid",u);break;case"textarea":D(u,g),Ot("invalid",u)}Je(o,g),h=null;for(var M in g)if(g.hasOwnProperty(M)){var U=g[M];M==="children"?typeof U=="string"?u.textContent!==U&&(g.suppressHydrationWarning!==!0&&Wo(u.textContent,U,n),h=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&Wo(u.textContent,U,n),h=["children",""+U]):a.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Ot("scroll",u)}switch(o){case"input":nt(u),We(u,g,!0);break;case"textarea":nt(u),ee(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Xo)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{M=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ve(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[vi]=r,n[Ua]=u,rm(n,r,!1,!1),r.stateNode=n;e:{switch(M=Le(o,u),o){case"dialog":Ot("cancel",n),Ot("close",n),h=u;break;case"iframe":case"object":case"embed":Ot("load",n),h=u;break;case"video":case"audio":for(h=0;h<Pa.length;h++)Ot(Pa[h],n);h=u;break;case"source":Ot("error",n),h=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),h=u;break;case"details":Ot("toggle",n),h=u;break;case"input":Wt(n,u),h=O(n,u),Ot("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=le({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":D(n,u),h=It(n,u),Ot("invalid",n);break;default:h=u}Je(o,h),U=h;for(g in U)if(U.hasOwnProperty(g)){var k=U[g];g==="style"?Oe(n,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&$e(n,k)):g==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&Pe(n,k):typeof k=="number"&&Pe(n,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Ot("scroll",n):k!=null&&P(n,g,k,M))}switch(o){case"input":nt(n),We(n,u,!1);break;case"textarea":nt(n),ee(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ue(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?it(n,!!u.multiple,g,!1):u.defaultValue!=null&&it(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Xo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return gn(r),null;case 6:if(n&&r.stateNode!=null)am(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(o=Xr(ka.current),Xr(_i.current),Jo(r)){if(u=r.stateNode,o=r.memoizedProps,u[vi]=r,(g=u.nodeValue!==o)&&(n=Bn,n!==null))switch(n.tag){case 3:Wo(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Wo(u.nodeValue,o,(n.mode&1)!==0)}g&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[vi]=r,r.stateNode=u}return gn(r),null;case 13:if(kt(Ht),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&zn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)up(),Cs(),r.flags|=98560,g=!1;else if(g=Jo(r),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[vi]=r}else Cs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;gn(r),g=!1}else ii!==null&&(Yc(ii),ii=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ht.current&1)!==0?Jt===0&&(Jt=3):Zc())),r.updateQueue!==null&&(r.flags|=4),gn(r),null);case 4:return Ds(),Oc(n,r),n===null&&La(r.stateNode.containerInfo),gn(r),null;case 10:return fc(r.type._context),gn(r),null;case 17:return Dn(r.type)&&$o(),gn(r),null;case 19:if(kt(Ht),g=r.memoizedState,g===null)return gn(r),null;if(u=(r.flags&128)!==0,M=g.rendering,M===null)if(u)Ga(g,!1);else{if(Jt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(M=rl(n),M!==null){for(r.flags|=128,Ga(g,!1),u=M.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)g=o,n=u,g.flags&=14680066,M=g.alternate,M===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=M.childLanes,g.lanes=M.lanes,g.child=M.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=M.memoizedProps,g.memoizedState=M.memoizedState,g.updateQueue=M.updateQueue,g.type=M.type,n=M.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ft(Ht,Ht.current&1|2),r.child}n=n.sibling}g.tail!==null&&Z()>Fs&&(r.flags|=128,u=!0,Ga(g,!1),r.lanes=4194304)}else{if(!u)if(n=rl(M),n!==null){if(r.flags|=128,u=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Ga(g,!0),g.tail===null&&g.tailMode==="hidden"&&!M.alternate&&!zt)return gn(r),null}else 2*Z()-g.renderingStartTime>Fs&&o!==1073741824&&(r.flags|=128,u=!0,Ga(g,!1),r.lanes=4194304);g.isBackwards?(M.sibling=r.child,r.child=M):(o=g.last,o!==null?o.sibling=M:r.child=M,g.last=M)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Z(),r.sibling=null,o=Ht.current,Ft(Ht,u?o&1|2:o&1),r):(gn(r),null);case 22:case 23:return Kc(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Hn&1073741824)!==0&&(gn(r),r.subtreeFlags&6&&(r.flags|=8192)):gn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function O0(n,r){switch(sc(r),r.tag){case 1:return Dn(r.type)&&$o(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ds(),kt(Ln),kt(pn),_c(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return gc(r),null;case 13:if(kt(Ht),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Cs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return kt(Ht),null;case 4:return Ds(),null;case 10:return fc(r.type._context),null;case 22:case 23:return Kc(),null;case 24:return null;default:return null}}var hl=!1,vn=!1,k0=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Ns(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Xt(n,r,u)}else o.current=null}function kc(n,r,o){try{o()}catch(u){Xt(n,r,u)}}var om=!1;function B0(n,r){if(Ku=Uo,n=Bh(),Vu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var M=0,U=-1,k=-1,se=0,we=0,Te=n,Me=null;t:for(;;){for(var Be;Te!==o||h!==0&&Te.nodeType!==3||(U=M+h),Te!==g||u!==0&&Te.nodeType!==3||(k=M+u),Te.nodeType===3&&(M+=Te.nodeValue.length),(Be=Te.firstChild)!==null;)Me=Te,Te=Be;for(;;){if(Te===n)break t;if(Me===o&&++se===h&&(U=M),Me===g&&++we===u&&(k=M),(Be=Te.nextSibling)!==null)break;Te=Me,Me=Te.parentNode}Te=Be}o=U===-1||k===-1?null:{start:U,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Zu={focusedElem:n,selectionRange:o},Uo=!1,Ge=r;Ge!==null;)if(r=Ge,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ge=n;else for(;Ge!==null;){r=Ge;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,Yt=je.memoizedState,K=r.stateNode,G=K.getSnapshotBeforeUpdate(r.elementType===r.type?qe:ri(r.type,qe),Yt);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Q=r.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Xt(r,r.return,Ae)}if(n=r.sibling,n!==null){n.return=r.return,Ge=n;break}Ge=r.return}return je=om,om=!1,je}function Wa(n,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&kc(r,o,g)}h=h.next}while(h!==u)}}function pl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function Bc(n){var r=n.ref;if(r!==null){var o=n.stateNode;n.tag,n=o,typeof r=="function"?r(n):r.current=n}}function lm(n){var r=n.alternate;r!==null&&(n.alternate=null,lm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[vi],delete r[Ua],delete r[tc],delete r[S0],delete r[E0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function um(n){return n.tag===5||n.tag===3||n.tag===4}function cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function zc(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Xo));else if(u!==4&&(n=n.child,n!==null))for(zc(n,r,o),n=n.sibling;n!==null;)zc(n,r,o),n=n.sibling}function Hc(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Hc(n,r,o),n=n.sibling;n!==null;)Hc(n,r,o),n=n.sibling}var cn=null,si=!1;function vr(n,r,o){for(o=o.child;o!==null;)fm(n,r,o),o=o.sibling}function fm(n,r,o){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(ot,o)}catch{}switch(o.tag){case 5:vn||Ns(o,r);case 6:var u=cn,h=si;cn=null,vr(n,r,o),cn=u,si=h,cn!==null&&(si?(n=cn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(si?(n=cn,o=o.stateNode,n.nodeType===8?ec(n.parentNode,o):n.nodeType===1&&ec(n,o),Ea(n)):ec(cn,o.stateNode));break;case 4:u=cn,h=si,cn=o.stateNode.containerInfo,si=!0,vr(n,r,o),cn=u,si=h;break;case 0:case 11:case 14:case 15:if(!vn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,M=g.destroy;g=g.tag,M!==void 0&&((g&2)!==0||(g&4)!==0)&&kc(o,r,M),h=h.next}while(h!==u)}vr(n,r,o);break;case 1:if(!vn&&(Ns(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(U){Xt(o,r,U)}vr(n,r,o);break;case 21:vr(n,r,o);break;case 22:o.mode&1?(vn=(u=vn)||o.memoizedState!==null,vr(n,r,o),vn=u):vr(n,r,o);break;default:vr(n,r,o)}}function dm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new k0),r.forEach(function(u){var h=Y0.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function ai(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var g=n,M=r,U=M;e:for(;U!==null;){switch(U.tag){case 5:cn=U.stateNode,si=!1;break e;case 3:cn=U.stateNode.containerInfo,si=!0;break e;case 4:cn=U.stateNode.containerInfo,si=!0;break e}U=U.return}if(cn===null)throw Error(t(160));fm(g,M,h),cn=null,si=!1;var k=h.alternate;k!==null&&(k.return=null),h.return=null}catch(se){Xt(h,r,se)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)hm(r,n),r=r.sibling}function hm(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(r,n),yi(n),u&4){try{Wa(3,n,n.return),pl(3,n)}catch(qe){Xt(n,n.return,qe)}try{Wa(5,n,n.return)}catch(qe){Xt(n,n.return,qe)}}break;case 1:ai(r,n),yi(n),u&512&&o!==null&&Ns(o,o.return);break;case 5:if(ai(r,n),yi(n),u&512&&o!==null&&Ns(o,o.return),n.flags&32){var h=n.stateNode;try{Pe(h,"")}catch(qe){Xt(n,n.return,qe)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,M=o!==null?o.memoizedProps:g,U=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&vt(h,g),Le(U,M);var se=Le(U,g);for(M=0;M<k.length;M+=2){var we=k[M],Te=k[M+1];we==="style"?Oe(h,Te):we==="dangerouslySetInnerHTML"?$e(h,Te):we==="children"?Pe(h,Te):P(h,we,Te,se)}switch(U){case"input":Mt(h,g);break;case"textarea":T(h,g);break;case"select":var Me=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Be=g.value;Be!=null?it(h,!!g.multiple,Be,!1):Me!==!!g.multiple&&(g.defaultValue!=null?it(h,!!g.multiple,g.defaultValue,!0):it(h,!!g.multiple,g.multiple?[]:"",!1))}h[Ua]=g}catch(qe){Xt(n,n.return,qe)}}break;case 6:if(ai(r,n),yi(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(qe){Xt(n,n.return,qe)}}break;case 3:if(ai(r,n),yi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ea(r.containerInfo)}catch(qe){Xt(n,n.return,qe)}break;case 4:ai(r,n),yi(n);break;case 13:ai(r,n),yi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Wc=Z())),u&4&&dm(n);break;case 22:if(we=o!==null&&o.memoizedState!==null,n.mode&1?(vn=(se=vn)||we,ai(r,n),vn=se):ai(r,n),yi(n),u&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!we&&(n.mode&1)!==0)for(Ge=n,we=n.child;we!==null;){for(Te=Ge=we;Ge!==null;){switch(Me=Ge,Be=Me.child,Me.tag){case 0:case 11:case 14:case 15:Wa(4,Me,Me.return);break;case 1:Ns(Me,Me.return);var je=Me.stateNode;if(typeof je.componentWillUnmount=="function"){u=Me,o=Me.return;try{r=u,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch(qe){Xt(u,o,qe)}}break;case 5:Ns(Me,Me.return);break;case 22:if(Me.memoizedState!==null){gm(Te);continue}}Be!==null?(Be.return=Me,Ge=Be):gm(Te)}we=we.sibling}e:for(we=null,Te=n;;){if(Te.tag===5){if(we===null){we=Te;try{h=Te.stateNode,se?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=Te.stateNode,k=Te.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,U.style.display=Ee("display",M))}catch(qe){Xt(n,n.return,qe)}}}else if(Te.tag===6){if(we===null)try{Te.stateNode.nodeValue=se?"":Te.memoizedProps}catch(qe){Xt(n,n.return,qe)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;we===Te&&(we=null),Te=Te.return}we===Te&&(we=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:ai(r,n),yi(n),u&4&&dm(n);break;case 21:break;default:ai(r,n),yi(n)}}function yi(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(um(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Pe(h,""),u.flags&=-33);var g=cm(n);Hc(n,g,h);break;case 3:case 4:var M=u.stateNode.containerInfo,U=cm(n);zc(n,U,M);break;default:throw Error(t(161))}}catch(k){Xt(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function z0(n,r,o){Ge=n,pm(n)}function pm(n,r,o){for(var u=(n.mode&1)!==0;Ge!==null;){var h=Ge,g=h.child;if(h.tag===22&&u){var M=h.memoizedState!==null||hl;if(!M){var U=h.alternate,k=U!==null&&U.memoizedState!==null||vn;U=hl;var se=vn;if(hl=M,(vn=k)&&!se)for(Ge=h;Ge!==null;)M=Ge,k=M.child,M.tag===22&&M.memoizedState!==null?vm(h):k!==null?(k.return=M,Ge=k):vm(h);for(;g!==null;)Ge=g,pm(g),g=g.sibling;Ge=h,hl=U,vn=se}mm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ge=g):mm(n)}}function mm(n){for(;Ge!==null;){var r=Ge;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:vn||pl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!vn)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:ri(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&gp(r,g,u);break;case 3:var M=r.updateQueue;if(M!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}gp(r,M,o)}break;case 5:var U=r.stateNode;if(o===null&&r.flags&4){o=U;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var se=r.alternate;if(se!==null){var we=se.memoizedState;if(we!==null){var Te=we.dehydrated;Te!==null&&Ea(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||r.flags&512&&Bc(r)}catch(Me){Xt(r,r.return,Me)}}if(r===n){Ge=null;break}if(o=r.sibling,o!==null){o.return=r.return,Ge=o;break}Ge=r.return}}function gm(n){for(;Ge!==null;){var r=Ge;if(r===n){Ge=null;break}var o=r.sibling;if(o!==null){o.return=r.return,Ge=o;break}Ge=r.return}}function vm(n){for(;Ge!==null;){var r=Ge;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{pl(4,r)}catch(k){Xt(r,o,k)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(k){Xt(r,h,k)}}var g=r.return;try{Bc(r)}catch(k){Xt(r,g,k)}break;case 5:var M=r.return;try{Bc(r)}catch(k){Xt(r,M,k)}}}catch(k){Xt(r,r.return,k)}if(r===n){Ge=null;break}var U=r.sibling;if(U!==null){U.return=r.return,Ge=U;break}Ge=r.return}}var H0=Math.ceil,ml=C.ReactCurrentDispatcher,Vc=C.ReactCurrentOwner,Yn=C.ReactCurrentBatchConfig,Tt=0,an=null,qt=null,fn=0,Hn=0,Is=dr(0),Jt=0,Xa=null,$r=0,gl=0,Gc=0,ja=null,Nn=null,Wc=0,Fs=1/0,Bi=null,vl=!1,Xc=null,_r=null,_l=!1,xr=null,xl=0,$a=0,jc=null,yl=-1,Sl=0;function wn(){return(Tt&6)!==0?Z():yl!==-1?yl:yl=Z()}function yr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&fn!==0?fn&-fn:w0.transition!==null?(Sl===0&&(Sl=Nt()),Sl):(n=wt,n!==0||(n=window.event,n=n===void 0?16:xh(n.type)),n)}function oi(n,r,o,u){if(50<$a)throw $a=0,jc=null,Error(t(185));nn(n,o,u),((Tt&2)===0||n!==an)&&(n===an&&((Tt&2)===0&&(gl|=o),Jt===4&&Sr(n,fn)),In(n,u),o===1&&Tt===0&&(r.mode&1)===0&&(Fs=Z()+500,qo&&pr()))}function In(n,r){var o=n.callbackNode;En(n,r);var u=tn(n,n===an?fn:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(o!=null&&A(o),r===1)n.tag===0?M0(xm.bind(null,n)):rp(xm.bind(null,n)),x0(function(){(Tt&6)===0&&pr()}),o=null;else{switch(gi(u)){case 1:o=Re;break;case 4:o=Ne;break;case 16:o=Ve;break;case 536870912:o=lt;break;default:o=Ve}o=Am(o,_m.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function _m(n,r){if(yl=-1,Sl=0,(Tt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Os()&&n.callbackNode!==o)return null;var u=tn(n,n===an?fn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=El(n,u);else{r=u;var h=Tt;Tt|=2;var g=Sm();(an!==n||fn!==r)&&(Bi=null,Fs=Z()+500,qr(n,r));do try{W0();break}catch(U){ym(n,U)}while(!0);cc(),ml.current=g,Tt=h,qt!==null?r=0:(an=null,fn=0,r=Jt)}if(r!==0){if(r===2&&(h=Li(n),h!==0&&(u=h,r=$c(n,h))),r===1)throw o=Xa,qr(n,0),Sr(n,u),In(n,Z()),o;if(r===6)Sr(n,u);else{if(h=n.current.alternate,(u&30)===0&&!V0(h)&&(r=El(n,u),r===2&&(g=Li(n),g!==0&&(u=g,r=$c(n,g))),r===1))throw o=Xa,qr(n,0),Sr(n,u),In(n,Z()),o;switch(n.finishedWork=h,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Kr(n,Nn,Bi);break;case 3:if(Sr(n,u),(u&130023424)===u&&(r=Wc+500-Z(),10<r)){if(tn(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){wn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Qu(Kr.bind(null,n,Nn,Bi),r);break}Kr(n,Nn,Bi);break;case 4:if(Sr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,h=-1;0<u;){var M=31-pt(u);g=1<<M,M=r[M],M>h&&(h=M),u&=~g}if(u=h,u=Z()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*H0(u/1960))-u,10<u){n.timeoutHandle=Qu(Kr.bind(null,n,Nn,Bi),u);break}Kr(n,Nn,Bi);break;case 5:Kr(n,Nn,Bi);break;default:throw Error(t(329))}}}return In(n,Z()),n.callbackNode===o?_m.bind(null,n):null}function $c(n,r){var o=ja;return n.current.memoizedState.isDehydrated&&(qr(n,r).flags|=256),n=El(n,r),n!==2&&(r=Nn,Nn=o,r!==null&&Yc(r)),n}function Yc(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function V0(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!ni(g(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Sr(n,r){for(r&=~Gc,r&=~gl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-pt(r),u=1<<o;n[o]=-1,r&=~u}}function xm(n){if((Tt&6)!==0)throw Error(t(327));Os();var r=tn(n,0);if((r&1)===0)return In(n,Z()),null;var o=El(n,r);if(n.tag!==0&&o===2){var u=Li(n);u!==0&&(r=u,o=$c(n,u))}if(o===1)throw o=Xa,qr(n,0),Sr(n,r),In(n,Z()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Kr(n,Nn,Bi),In(n,Z()),null}function qc(n,r){var o=Tt;Tt|=1;try{return n(r)}finally{Tt=o,Tt===0&&(Fs=Z()+500,qo&&pr())}}function Yr(n){xr!==null&&xr.tag===0&&(Tt&6)===0&&Os();var r=Tt;Tt|=1;var o=Yn.transition,u=wt;try{if(Yn.transition=null,wt=1,n)return n()}finally{wt=u,Yn.transition=o,Tt=r,(Tt&6)===0&&pr()}}function Kc(){Hn=Is.current,kt(Is)}function qr(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,_0(o)),qt!==null)for(o=qt.return;o!==null;){var u=o;switch(sc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&$o();break;case 3:Ds(),kt(Ln),kt(pn),_c();break;case 5:gc(u);break;case 4:Ds();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:fc(u.type._context);break;case 22:case 23:Kc()}o=o.return}if(an=n,qt=n=Er(n.current,null),fn=Hn=r,Jt=0,Xa=null,Gc=gl=$r=0,Nn=ja=null,Wr!==null){for(r=0;r<Wr.length;r++)if(o=Wr[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,g=o.pending;if(g!==null){var M=g.next;g.next=h,u.next=M}o.pending=u}Wr=null}return n}function ym(n,r){do{var o=qt;try{if(cc(),sl.current=ul,al){for(var u=Vt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}al=!1}if(jr=0,sn=Zt=Vt=null,Ba=!1,za=0,Vc.current=null,o===null||o.return===null){Jt=1,Xa=r,qt=null;break}e:{var g=n,M=o.return,U=o,k=r;if(r=fn,U.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var se=k,we=U,Te=we.tag;if((we.mode&1)===0&&(Te===0||Te===11||Te===15)){var Me=we.alternate;Me?(we.updateQueue=Me.updateQueue,we.memoizedState=Me.memoizedState,we.lanes=Me.lanes):(we.updateQueue=null,we.memoizedState=null)}var Be=Xp(M);if(Be!==null){Be.flags&=-257,jp(Be,M,U,g,r),Be.mode&1&&Wp(g,se,r),r=Be,k=se;var je=r.updateQueue;if(je===null){var qe=new Set;qe.add(k),r.updateQueue=qe}else je.add(k);break e}else{if((r&1)===0){Wp(g,se,r),Zc();break e}k=Error(t(426))}}else if(zt&&U.mode&1){var Yt=Xp(M);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),jp(Yt,M,U,g,r),lc(Us(k,U));break e}}g=k=Us(k,U),Jt!==4&&(Jt=2),ja===null?ja=[g]:ja.push(g),g=M;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var K=Vp(g,k,r);mp(g,K);break e;case 1:U=k;var G=g.type,Q=g.stateNode;if((g.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(_r===null||!_r.has(Q)))){g.flags|=65536,r&=-r,g.lanes|=r;var Ae=Gp(g,U,r);mp(g,Ae);break e}}g=g.return}while(g!==null)}Mm(o)}catch(Ze){r=Ze,qt===o&&o!==null&&(qt=o=o.return);continue}break}while(!0)}function Sm(){var n=ml.current;return ml.current=ul,n===null?ul:n}function Zc(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),an===null||($r&268435455)===0&&(gl&268435455)===0||Sr(an,fn)}function El(n,r){var o=Tt;Tt|=2;var u=Sm();(an!==n||fn!==r)&&(Bi=null,qr(n,r));do try{G0();break}catch(h){ym(n,h)}while(!0);if(cc(),Tt=o,ml.current=u,qt!==null)throw Error(t(261));return an=null,fn=0,Jt}function G0(){for(;qt!==null;)Em(qt)}function W0(){for(;qt!==null&&!Y();)Em(qt)}function Em(n){var r=Rm(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,r===null?Mm(n):qt=r,Vc.current=null}function Mm(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=F0(o,r,Hn),o!==null){qt=o;return}}else{if(o=O0(o,r),o!==null){o.flags&=32767,qt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,qt=null;return}}if(r=r.sibling,r!==null){qt=r;return}qt=r=n}while(r!==null);Jt===0&&(Jt=5)}function Kr(n,r,o){var u=wt,h=Yn.transition;try{Yn.transition=null,wt=1,X0(n,r,o,u)}finally{Yn.transition=h,wt=u}return null}function X0(n,r,o,u){do Os();while(xr!==null);if((Tt&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(un(n,g),n===an&&(qt=an=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||_l||(_l=!0,Am(Ve,function(){return Os(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Yn.transition,Yn.transition=null;var M=wt;wt=1;var U=Tt;Tt|=4,Vc.current=null,B0(n,o),hm(o,n),f0(Zu),Uo=!!Ku,Zu=Ku=null,n.current=o,z0(o),ae(),Tt=U,wt=M,Yn.transition=g}else n.current=o;if(_l&&(_l=!1,xr=n,xl=h),g=n.pendingLanes,g===0&&(_r=null),_t(o.stateNode),In(n,Z()),r!==null)for(u=n.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(vl)throw vl=!1,n=Xc,Xc=null,n;return(xl&1)!==0&&n.tag!==0&&Os(),g=n.pendingLanes,(g&1)!==0?n===jc?$a++:($a=0,jc=n):$a=0,pr(),null}function Os(){if(xr!==null){var n=gi(xl),r=Yn.transition,o=wt;try{if(Yn.transition=null,wt=16>n?16:n,xr===null)var u=!1;else{if(n=xr,xr=null,xl=0,(Tt&6)!==0)throw Error(t(331));var h=Tt;for(Tt|=4,Ge=n.current;Ge!==null;){var g=Ge,M=g.child;if((Ge.flags&16)!==0){var U=g.deletions;if(U!==null){for(var k=0;k<U.length;k++){var se=U[k];for(Ge=se;Ge!==null;){var we=Ge;switch(we.tag){case 0:case 11:case 15:Wa(8,we,g)}var Te=we.child;if(Te!==null)Te.return=we,Ge=Te;else for(;Ge!==null;){we=Ge;var Me=we.sibling,Be=we.return;if(lm(we),we===se){Ge=null;break}if(Me!==null){Me.return=Be,Ge=Me;break}Ge=Be}}}var je=g.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var Yt=qe.sibling;qe.sibling=null,qe=Yt}while(qe!==null)}}Ge=g}}if((g.subtreeFlags&2064)!==0&&M!==null)M.return=g,Ge=M;else e:for(;Ge!==null;){if(g=Ge,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Wa(9,g,g.return)}var K=g.sibling;if(K!==null){K.return=g.return,Ge=K;break e}Ge=g.return}}var G=n.current;for(Ge=G;Ge!==null;){M=Ge;var Q=M.child;if((M.subtreeFlags&2064)!==0&&Q!==null)Q.return=M,Ge=Q;else e:for(M=G;Ge!==null;){if(U=Ge,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:pl(9,U)}}catch(Ze){Xt(U,U.return,Ze)}if(U===M){Ge=null;break e}var Ae=U.sibling;if(Ae!==null){Ae.return=U.return,Ge=Ae;break e}Ge=U.return}}if(Tt=h,pr(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(ot,n)}catch{}u=!0}return u}finally{wt=o,Yn.transition=r}}return!1}function wm(n,r,o){r=Us(o,r),r=Vp(n,r,1),n=gr(n,r,1),r=wn(),n!==null&&(nn(n,1,r),In(n,r))}function Xt(n,r,o){if(n.tag===3)wm(n,n,o);else for(;r!==null;){if(r.tag===3){wm(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(_r===null||!_r.has(u))){n=Us(o,n),n=Gp(r,n,1),r=gr(r,n,1),n=wn(),r!==null&&(nn(r,1,n),In(r,n));break}}r=r.return}}function j0(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),r=wn(),n.pingedLanes|=n.suspendedLanes&o,an===n&&(fn&o)===o&&(Jt===4||Jt===3&&(fn&130023424)===fn&&500>Z()-Wc?qr(n,0):Gc|=o),In(n,r)}function Tm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Lt,Lt<<=1,(Lt&130023424)===0&&(Lt=4194304)));var o=wn();n=Fi(n,r),n!==null&&(nn(n,r,o),In(n,o))}function $0(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Tm(n,o)}function Y0(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Tm(n,o)}var Rm;Rm=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ln.current)Un=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Un=!1,I0(n,r,o);Un=(n.flags&131072)!==0}else Un=!1,zt&&(r.flags&1048576)!==0&&sp(r,Zo,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;dl(n,r),n=r.pendingProps;var h=Ts(r,pn.current);Ls(r,o),h=Sc(null,r,u,n,h,o);var g=Ec();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Dn(u)?(g=!0,Yo(r)):g=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,pc(r),h.updater=cl,r.stateNode=h,h._reactInternals=r,Cc(r,u,n,o),r=Dc(null,r,u,!0,g,o)):(r.tag=0,zt&&g&&rc(r),Mn(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(dl(n,r),n=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=K0(u),n=ri(u,n),h){case 0:r=Lc(null,r,u,n,o);break e;case 1:r=Jp(null,r,u,n,o);break e;case 11:r=$p(null,r,u,n,o);break e;case 14:r=Yp(null,r,u,ri(u.type,n),o);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ri(u,h),Lc(n,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ri(u,h),Jp(n,r,u,h,o);case 3:e:{if(Qp(r),n===null)throw Error(t(387));u=r.pendingProps,g=r.memoizedState,h=g.element,pp(n,r),il(r,u,null,o);var M=r.memoizedState;if(u=M.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){h=Us(Error(t(423)),r),r=em(n,r,u,o,h);break e}else if(u!==h){h=Us(Error(t(424)),r),r=em(n,r,u,o,h);break e}else for(zn=fr(r.stateNode.containerInfo.firstChild),Bn=r,zt=!0,ii=null,o=dp(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Cs(),u===h){r=ki(n,r,o);break e}Mn(n,r,u,o)}r=r.child}return r;case 5:return vp(r),n===null&&oc(r),u=r.type,h=r.pendingProps,g=n!==null?n.memoizedProps:null,M=h.children,Ju(u,h)?M=null:g!==null&&Ju(u,g)&&(r.flags|=32),Zp(n,r),Mn(n,r,M,o),r.child;case 6:return n===null&&oc(r),null;case 13:return tm(n,r,o);case 4:return mc(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=bs(r,null,u,o):Mn(n,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ri(u,h),$p(n,r,u,h,o);case 7:return Mn(n,r,r.pendingProps,o),r.child;case 8:return Mn(n,r,r.pendingProps.children,o),r.child;case 12:return Mn(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,g=r.memoizedProps,M=h.value,Ft(el,u._currentValue),u._currentValue=M,g!==null)if(ni(g.value,M)){if(g.children===h.children&&!Ln.current){r=ki(n,r,o);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var U=g.dependencies;if(U!==null){M=g.child;for(var k=U.firstContext;k!==null;){if(k.context===u){if(g.tag===1){k=Oi(-1,o&-o),k.tag=2;var se=g.updateQueue;if(se!==null){se=se.shared;var we=se.pending;we===null?k.next=k:(k.next=we.next,we.next=k),se.pending=k}}g.lanes|=o,k=g.alternate,k!==null&&(k.lanes|=o),dc(g.return,o,r),U.lanes|=o;break}k=k.next}}else if(g.tag===10)M=g.type===r.type?null:g.child;else if(g.tag===18){if(M=g.return,M===null)throw Error(t(341));M.lanes|=o,U=M.alternate,U!==null&&(U.lanes|=o),dc(M,o,r),M=g.sibling}else M=g.child;if(M!==null)M.return=g;else for(M=g;M!==null;){if(M===r){M=null;break}if(g=M.sibling,g!==null){g.return=M.return,M=g;break}M=M.return}g=M}Mn(n,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Ls(r,o),h=jn(h),u=u(h),r.flags|=1,Mn(n,r,u,o),r.child;case 14:return u=r.type,h=ri(u,r.pendingProps),h=ri(u.type,h),Yp(n,r,u,h,o);case 15:return qp(n,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ri(u,h),dl(n,r),r.tag=1,Dn(u)?(n=!0,Yo(r)):n=!1,Ls(r,o),zp(r,u,h),Cc(r,u,h,o),Dc(null,r,u,!0,n,o);case 19:return im(n,r,o);case 22:return Kp(n,r,o)}throw Error(t(156,r.tag))};function Am(n,r){return Po(n,r)}function q0(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,r,o,u){return new q0(n,r,o,u)}function Jc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function K0(n){if(typeof n=="function")return Jc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===_e)return 14}return 2}function Er(n,r){var o=n.alternate;return o===null?(o=qn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ml(n,r,o,u,h,g){var M=2;if(u=n,typeof n=="function")Jc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case F:return Zr(o.children,h,g,r);case X:M=8,h|=8;break;case b:return n=qn(12,o,r,h|2),n.elementType=b,n.lanes=g,n;case J:return n=qn(13,o,r,h),n.elementType=J,n.lanes=g,n;case ce:return n=qn(19,o,r,h),n.elementType=ce,n.lanes=g,n;case ye:return wl(o,h,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:M=10;break e;case B:M=9;break e;case oe:M=11;break e;case _e:M=14;break e;case ne:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=qn(M,o,r,h),r.elementType=n,r.type=u,r.lanes=g,r}function Zr(n,r,o,u){return n=qn(7,n,u,r),n.lanes=o,n}function wl(n,r,o,u){return n=qn(22,n,u,r),n.elementType=ye,n.lanes=o,n.stateNode={isHidden:!1},n}function Qc(n,r,o){return n=qn(6,n,null,r),n.lanes=o,n}function ef(n,r,o){return r=qn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Z0(n,r,o,u,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function tf(n,r,o,u,h,g,M,U,k){return n=new Z0(n,r,o,U,k),r===1?(r=1,g===!0&&(r|=8)):r=0,g=qn(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},pc(g),n}function J0(n,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:n,containerInfo:r,implementation:o}}function Cm(n){if(!n)return hr;n=n._reactInternals;e:{if(mi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Dn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Dn(o))return np(n,o,r)}return r}function bm(n,r,o,u,h,g,M,U,k){return n=tf(o,u,!0,n,h,g,M,U,k),n.context=Cm(null),o=n.current,u=wn(),h=yr(o),g=Oi(u,h),g.callback=r??null,gr(o,g,h),n.current.lanes=h,nn(n,h,u),In(n,u),n}function Tl(n,r,o,u){var h=r.current,g=wn(),M=yr(h);return o=Cm(o),r.context===null?r.context=o:r.pendingContext=o,r=Oi(g,M),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=gr(h,r,M),n!==null&&(oi(n,h,M,g),nl(n,h,M)),M}function Rl(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function Pm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function nf(n,r){Pm(n,r),(n=n.alternate)&&Pm(n,r)}function Q0(){return null}var Lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function rf(n){this._internalRoot=n}Al.prototype.render=rf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Tl(n,r,null,null)},Al.prototype.unmount=rf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Yr(function(){Tl(null,n,null,null)}),r[Di]=null}};function Al(n){this._internalRoot=n}Al.prototype.unstable_scheduleHydration=function(n){if(n){var r=ph();n={blockedOn:null,target:n,priority:r};for(var o=0;o<lr.length&&r!==0&&r<lr[o].priority;o++);lr.splice(o,0,n),o===0&&vh(n)}};function sf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function ex(n,r,o,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var se=Rl(M);g.call(se)}}var M=bm(r,u,n,0,null,!1,!1,"",Dm);return n._reactRootContainer=M,n[Di]=M.current,La(n.nodeType===8?n.parentNode:n),Yr(),M}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var U=u;u=function(){var se=Rl(k);U.call(se)}}var k=tf(n,0,!1,null,null,!1,!1,"",Dm);return n._reactRootContainer=k,n[Di]=k.current,La(n.nodeType===8?n.parentNode:n),Yr(function(){Tl(r,k,o,u)}),k}function bl(n,r,o,u,h){var g=o._reactRootContainer;if(g){var M=g;if(typeof h=="function"){var U=h;h=function(){var k=Rl(M);U.call(k)}}Tl(r,M,n,h)}else M=ex(o,r,n,h,u);return Rl(M)}dh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=xt(r.pendingLanes);o!==0&&(rn(r,o|1),In(r,Z()),(Tt&6)===0&&(Fs=Z()+500,pr()))}break;case 13:Yr(function(){var u=Fi(n,1);if(u!==null){var h=wn();oi(u,n,1,h)}}),nf(n,1)}},bu=function(n){if(n.tag===13){var r=Fi(n,134217728);if(r!==null){var o=wn();oi(r,n,134217728,o)}nf(n,134217728)}},hh=function(n){if(n.tag===13){var r=yr(n),o=Fi(n,r);if(o!==null){var u=wn();oi(o,n,r,u)}nf(n,r)}},ph=function(){return wt},mh=function(n,r){var o=wt;try{return wt=n,r()}finally{wt=o}},Ue=function(n,r,o){switch(r){case"input":if(Mt(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var h=jo(u);if(!h)throw Error(t(90));gt(u),Mt(u,h)}}}break;case"textarea":T(n,o);break;case"select":r=o.value,r!=null&&it(n,!!o.multiple,r,!1)}},Qe=qc,Et=Yr;var tx={usingClientEntryPoint:!1,Events:[Na,Ms,jo,ge,ke,qc]},Ya={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nx={bundleType:Ya.bundleType,version:Ya.version,rendererPackageName:Ya.rendererPackageName,rendererConfig:Ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Co(n),n===null?null:n.stateNode},findFiberByHostInstance:Ya.findFiberByHostInstance||Q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{ot=Pl.inject(nx),Xe=Pl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tx,Fn.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sf(r))throw Error(t(200));return J0(n,r,null,o)},Fn.createRoot=function(n,r){if(!sf(n))throw Error(t(299));var o=!1,u="",h=Lm;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=tf(n,1,!1,null,null,o,!1,u,h),n[Di]=r.current,La(n.nodeType===8?n.parentNode:n),new rf(r)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Co(r),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return Yr(n)},Fn.hydrate=function(n,r,o){if(!Cl(r))throw Error(t(200));return bl(null,n,r,!0,o)},Fn.hydrateRoot=function(n,r,o){if(!sf(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,g="",M=Lm;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),r=bm(r,null,n,1,o??null,h,!1,g,M),n[Di]=r.current,La(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new Al(r)},Fn.render=function(n,r,o){if(!Cl(r))throw Error(t(200));return bl(null,n,r,!1,o)},Fn.unmountComponentAtNode=function(n){if(!Cl(n))throw Error(t(40));return n._reactRootContainer?(Yr(function(){bl(null,null,n,!1,function(){n._reactRootContainer=null,n[Di]=null})}),!0):!1},Fn.unstable_batchedUpdates=qc,Fn.unstable_renderSubtreeIntoContainer=function(n,r,o,u){if(!Cl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return bl(n,r,o,!1,u)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var zm;function cx(){if(zm)return lf.exports;zm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),lf.exports=ux(),lf.exports}var Hm;function fx(){if(Hm)return Ll;Hm=1;var i=cx();return Ll.createRoot=i.createRoot,Ll.hydrateRoot=i.hydrateRoot,Ll}var dx=fx();const hx=fv(dx);var Hd=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,hv=/^[\\/]{2}/;function px(i,e){return e+i.replace(/\\/g,"/")}var Vm="popstate";function Gm(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function mx(i={}){function e(s,a){let l=a.state?.masked,{pathname:c,search:f,hash:d}=l||s.location;return qf("",{pathname:c,search:f,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default",l?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function t(s,a){return typeof a=="string"?a:oo(a)}return vx(e,t,null,i)}function Gt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Ai(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gx(){return Math.random().toString(36).substring(2,10)}function Wm(i,e){return{usr:i.state,key:i.key,idx:e,masked:i.mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function qf(i,e,t=null,s,a){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?fa(e):e,state:t,key:e&&e.key||s||gx(),mask:a}}function oo({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function fa(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function vx(i,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,f="POP",d=null,p=m();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function m(){return(c.state||{idx:null}).idx}function v(){f="POP";let y=m(),x=y==null?null:y-p;p=y,d&&d({action:f,location:w.location,delta:x})}function _(y,x){f="PUSH";let L=Gm(y)?y:qf(w.location,y,x);p=m()+1;let P=Wm(L,p),C=w.createHref(L.mask||L);try{c.pushState(P,"",C)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;a.location.assign(C)}l&&d&&d({action:f,location:w.location,delta:1})}function S(y,x){f="REPLACE";let L=Gm(y)?y:qf(w.location,y,x);p=m();let P=Wm(L,p),C=w.createHref(L.mask||L);c.replaceState(P,"",C),l&&d&&d({action:f,location:w.location,delta:0})}function E(y){return _x(a,y)}let w={get action(){return f},get location(){return i(a,c)},listen(y){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(Vm,v),d=y,()=>{a.removeEventListener(Vm,v),d=null}},createHref(y){return e(a,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:S,go(y){return c.go(y)}};return w}function _x(i,e,t=!1){let s="http://localhost";i&&(s=i.location.origin!=="null"?i.location.origin:i.location.href),Gt(s,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:oo(e);return a=a.replace(/ $/,"%20"),!t&&hv.test(a)&&(a=s+a),new URL(a,s)}function pv(i,e,t="/"){return xx(i,e,t,!1)}function xx(i,e,t,s,a){let l=typeof e=="string"?fa(e):e,c=Qi(l.pathname||"/",t);if(c==null)return null;let f=yx(i),d=null,p=Lx(c);for(let m=0;d==null&&m<f.length;++m)d=Px(f[m],p,s);return d}function yx(i){let e=mv(i);return Sx(e),e}function mv(i,e=[],t=[],s="",a=!1){let l=(c,f,d=a,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(s)&&d)return;Gt(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length)}let v=hi([s,m.relativePath]),_=t.concat(m);c.children&&c.children.length>0&&(Gt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),mv(c.children,e,_,v,d)),!(c.path==null&&!c.index)&&e.push({path:v,score:Cx(v,c.index),routesMeta:_.map((S,E)=>{let[w,y]=_v(S.relativePath,S.caseSensitive,E===_.length-1);return{...S,matcher:w,compiledParams:y}})})};return i.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let d of gv(c.path))l(c,f,!0,d)}),e}function gv(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=gv(s.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),a&&f.push(...c),f.map(d=>i.startsWith("/")&&d===""?"/":d)}function Sx(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:bx(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Ex=/^:[\w-]+$/,Mx=3,wx=2,Tx=1,Rx=10,Ax=-2,Xm=i=>i==="*";function Cx(i,e){let t=i.split("/"),s=t.length;return t.some(Xm)&&(s+=Ax),e&&(s+=wx),t.filter(a=>!Xm(a)).reduce((a,l)=>a+(Ex.test(l)?Mx:l===""?Tx:Rx),s)}function bx(i,e){return i.length===e.length&&i.slice(0,-1).every((s,a)=>s===e[a])?i[i.length-1]-e[e.length-1]:0}function Px(i,e,t=!1){let{routesMeta:s}=i,a={},l="/",c=[];for(let f=0;f<s.length;++f){let d=s[f],p=f===s.length-1,m=l==="/"?e:e.slice(l.length)||"/",v={path:d.relativePath,caseSensitive:d.caseSensitive,end:p},_=d.matcher&&d.compiledParams?vv(v,m,d.matcher,d.compiledParams):pu(v,m),S=d.route;if(!_&&p&&t&&!s[s.length-1].route.index&&(_=pu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!_)return null;Object.assign(a,_.params),c.push({params:a,pathname:hi([l,_.pathname]),pathnameBase:Nx(hi([l,_.pathnameBase])),route:S}),_.pathnameBase!=="/"&&(l=hi([l,_.pathnameBase]))}return c}function pu(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=_v(i.path,i.caseSensitive,i.end);return vv(i,e,t,s)}function vv(i,e,t,s){let a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:s.reduce((p,{paramName:m,isOptional:v},_)=>{if(m==="*"){let E=f[_]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[_];return v&&!S?p[m]=void 0:p[m]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:i}}function _v(i,e=!1,t=!0){Ai(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d,p,m)=>{if(s.push({paramName:f,isOptional:d!=null}),d){let v=m.charAt(p+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(s.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function Lx(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ai(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function Qi(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}function Dx(i,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof i=="string"?fa(i):i,l;return t?(t=yv(t),t.startsWith("/")?l=jm(t.substring(1),"/"):l=jm(t,e)):l=e,{pathname:l,search:Ix(s),hash:Fx(a)}}function jm(i,e){let t=mu(e).split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function ff(i,e,t,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ux(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function xv(i){let e=Ux(i);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Vd(i,e,t,s=!1){let a;typeof i=="string"?a=fa(i):(a={...i},Gt(!a.pathname||!a.pathname.includes("?"),ff("?","pathname","search",a)),Gt(!a.pathname||!a.pathname.includes("#"),ff("#","pathname","hash",a)),Gt(!a.search||!a.search.includes("#"),ff("#","search","hash",a)));let l=i===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let v=e.length-1;if(!s&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),v-=1;a.pathname=_.join("/")}f=v>=0?e[v]:"/"}let d=Dx(a,f),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(p||m)&&(d.pathname+="/"),d}var yv=i=>i.replace(/[\\/]{2,}/g,"/"),hi=i=>yv(i.join("/")),mu=i=>i.replace(/\/+$/,""),Nx=i=>mu(i).replace(/^\/*/,"/"),Ix=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Fx=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Ox=class{constructor(i,e,t,s=!1){this.status=i,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function kx(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function Bx(i){let e=i.map(t=>t.route.path).filter(Boolean);return hi(e)||"/"}var Sv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ev(i,e){let t=i;if(typeof t!="string"||!Hd.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,a=!1;if(Sv)try{let l=new URL(window.location.href),c=hv.test(t)?new URL(px(t,l.protocol)):new URL(t),f=Qi(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:a=!0}catch{Ai(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Mv=["POST","PUT","PATCH","DELETE"];new Set(Mv);var zx=["GET",...Mv];new Set(zx);var Hx=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Vx(i){try{return Hx.includes(new URL(i).protocol)}catch{return!1}}var da=W.createContext(null);da.displayName="DataRouter";var yu=W.createContext(null);yu.displayName="DataRouterState";var wv=W.createContext(!1);function Gx(){return W.useContext(wv)}var Tv=W.createContext({isTransitioning:!1});Tv.displayName="ViewTransition";var Wx=W.createContext(new Map);Wx.displayName="Fetchers";var Xx=W.createContext(null);Xx.displayName="Await";var ti=W.createContext(null);ti.displayName="Navigation";var vo=W.createContext(null);vo.displayName="Location";var er=W.createContext({outlet:null,matches:[],isDataRoute:!1});er.displayName="Route";var Gd=W.createContext(null);Gd.displayName="RouteError";var Rv="REACT_ROUTER_ERROR",jx="REDIRECT",$x="ROUTE_ERROR_RESPONSE";function Yx(i){if(i.startsWith(`${Rv}:${jx}:{`))try{let e=JSON.parse(i.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function qx(i){if(i.startsWith(`${Rv}:${$x}:{`))try{let e=JSON.parse(i.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Ox(e.status,e.statusText,e.data)}catch{}}function Kx(i,{relative:e}={}){Gt(_o(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=W.useContext(ti),{hash:a,pathname:l,search:c}=xo(i,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:hi([t,l])),s.createHref({pathname:f,search:c,hash:a})}function _o(){return W.useContext(vo)!=null}function tr(){return Gt(_o(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(vo).location}var Av="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Cv(i){W.useContext(ti).static||W.useLayoutEffect(i)}function Zx(){let{isDataRoute:i}=W.useContext(er);return i?cy():Jx()}function Jx(){Gt(_o(),"useNavigate() may be used only in the context of a <Router> component.");let i=W.useContext(da),{basename:e,navigator:t}=W.useContext(ti),{matches:s}=W.useContext(er),{pathname:a}=tr(),l=JSON.stringify(xv(s)),c=W.useRef(!1);return Cv(()=>{c.current=!0}),W.useCallback((d,p={})=>{if(Ai(c.current,Av),!c.current)return;if(typeof d=="number"){t.go(d);return}let m=Vd(d,JSON.parse(l),a,p.relative==="path");i==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:hi([e,m.pathname])),(p.replace?t.replace:t.push)(m,p.state,p)},[e,t,l,a,i])}W.createContext(null);function xo(i,{relative:e}={}){let{matches:t}=W.useContext(er),{pathname:s}=tr(),a=JSON.stringify(xv(t));return W.useMemo(()=>Vd(i,JSON.parse(a),s,e==="path"),[i,a,s,e])}function Qx(i,e){return bv(i,e)}function bv(i,e,t){Gt(_o(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=W.useContext(ti),{matches:a}=W.useContext(er),l=a[a.length-1],c=l?l.params:{},f=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let y=p&&p.path||"";Lv(f,!p||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let m=tr(),v;if(e){let y=typeof e=="string"?fa(e):e;Gt(d==="/"||y.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${y.pathname}" was given in the \`location\` prop.`),v=y}else v=m;let _=v.pathname||"/",S=_;if(d!=="/"){let y=d.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(y.length).join("/")}let E=t&&t.state.matches.length?t.state.matches.map(y=>Object.assign(y,{route:t.manifest[y.route.id]||y.route})):pv(i,{pathname:S});Ai(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Ai(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=ry(E&&E.map(y=>Object.assign({},y,{params:Object.assign({},c,y.params),pathname:hi([d,s.encodeLocation?s.encodeLocation(y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:hi([d,s.encodeLocation?s.encodeLocation(y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),a,t);return e&&w?W.createElement(vo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},w):w}function ey(){let i=uy(),e=kx(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",i),c=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:l},"ErrorBoundary")," or"," ",W.createElement("code",{style:l},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:a},t):null,c)}var ty=W.createElement(ey,null),Pv=class extends W.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){this.props.onError?this.props.onError(i,e):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const t=qx(i.digest);t&&(i=t)}let e=i!==void 0?W.createElement(er.Provider,{value:this.props.routeContext},W.createElement(Gd.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?W.createElement(ny,{error:i},e):e}};Pv.contextType=wv;var df=new WeakMap;function ny({children:i,error:e}){let{basename:t}=W.useContext(ti);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=Yx(e.digest);if(s){let a=df.get(e);if(a)throw a;let l=Ev(s.location,t),c=l.absoluteURL||l.to;if(Vx(c))throw new Error("Invalid redirect location");if(Sv&&!df.get(e))if(l.isExternal||s.reloadDocument)window.location.href=c;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw df.set(e,f),f}return W.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return i}function iy({routeContext:i,match:e,children:t}){let s=W.useContext(da);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(er.Provider,{value:i},t)}function ry(i,e=[],t){let s=t?.state;if(i==null){if(!s)return null;if(s.errors)i=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)i=s.matches;else return null}let a=i,l=s?.errors;if(l!=null){let m=a.findIndex(v=>v.route.id&&l?.[v.route.id]!==void 0);Gt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,f=-1;if(t&&s){c=s.renderFallback;for(let m=0;m<a.length;m++){let v=a[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=m),v.route.id){let{loaderData:_,errors:S}=s,E=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(c=!0),f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}}let d=t?.onError,p=s&&d?(m,v)=>{d(m,{location:s.location,params:s.matches?.[0]?.params??{},pattern:Bx(s.matches),errorInfo:v})}:void 0;return a.reduceRight((m,v,_)=>{let S,E=!1,w=null,y=null;s&&(S=l&&v.route.id?l[v.route.id]:void 0,w=v.route.errorElement||ty,c&&(f<0&&_===0?(Lv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):f===_&&(E=!0,y=v.route.hydrateFallbackElement||null)));let x=e.concat(a.slice(0,_+1)),L=()=>{let P;return S?P=w:E?P=y:v.route.Component?P=W.createElement(v.route.Component,null):v.route.element?P=v.route.element:P=m,W.createElement(iy,{match:v,routeContext:{outlet:m,matches:x,isDataRoute:s!=null},children:P})};return s&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?W.createElement(Pv,{location:s.location,revalidation:s.revalidation,component:w,error:S,children:L(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:p}):L()},null)}function Wd(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sy(i){let e=W.useContext(da);return Gt(e,Wd(i)),e}function ay(i){let e=W.useContext(yu);return Gt(e,Wd(i)),e}function oy(i){let e=W.useContext(er);return Gt(e,Wd(i)),e}function Xd(i){let e=oy(i),t=e.matches[e.matches.length-1];return Gt(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function ly(){return Xd("useRouteId")}function uy(){let i=W.useContext(Gd),e=ay("useRouteError"),t=Xd("useRouteError");return i!==void 0?i:e.errors?.[t]}function cy(){let{router:i}=sy("useNavigate"),e=Xd("useNavigate"),t=W.useRef(!1);return Cv(()=>{t.current=!0}),W.useCallback(async(a,l={})=>{Ai(t.current,Av),t.current&&(typeof a=="number"?await i.navigate(a):await i.navigate(a,{fromRouteId:e,...l}))},[i,e])}var $m={};function Lv(i,e,t){!e&&!$m[i]&&($m[i]=!0,Ai(!1,t))}W.memo(fy);function fy({routes:i,manifest:e,future:t,state:s,isStatic:a,onError:l}){return bv(i,void 0,{manifest:e,state:s,isStatic:a,onError:l})}function Kf(i){Gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dy({basename:i="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1,useTransitions:c}){Gt(!_o(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=i.replace(/^\/*/,"/"),d=W.useMemo(()=>({basename:f,navigator:a,static:l,useTransitions:c,future:{}}),[f,a,l,c]);typeof t=="string"&&(t=fa(t));let{pathname:p="/",search:m="",hash:v="",state:_=null,key:S="default",mask:E}=t,w=W.useMemo(()=>{let y=Qi(p,f);return y==null?null:{location:{pathname:y,search:m,hash:v,state:_,key:S,mask:E},navigationType:s}},[f,p,m,v,_,S,s,E]);return Ai(w!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:W.createElement(ti.Provider,{value:d},W.createElement(vo.Provider,{children:e,value:w}))}function hy({children:i,location:e}){return Qx(Zf(i),e)}function Zf(i,e=[]){let t=[];return W.Children.forEach(i,(s,a)=>{if(!W.isValidElement(s))return;let l=[...e,a];if(s.type===W.Fragment){t.push.apply(t,Zf(s.props.children,l));return}Gt(s.type===Kf,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Gt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Zf(s.props.children,l)),t.push(c)}),t}var su="get",au="application/x-www-form-urlencoded";function Su(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function py(i){return Su(i)&&i.tagName.toLowerCase()==="button"}function my(i){return Su(i)&&i.tagName.toLowerCase()==="form"}function gy(i){return Su(i)&&i.tagName.toLowerCase()==="input"}function vy(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function _y(i,e){return i.button===0&&(!e||e==="_self")&&!vy(i)}var Dl=null;function xy(){if(Dl===null)try{new FormData(document.createElement("form"),0),Dl=!1}catch{Dl=!0}return Dl}var yy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hf(i){return i!=null&&!yy.has(i)?(Ai(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${au}"`),null):i}function Sy(i,e){let t,s,a,l,c;if(my(i)){let f=i.getAttribute("action");s=f?Qi(f,e):null,t=i.getAttribute("method")||su,a=hf(i.getAttribute("enctype"))||au,l=new FormData(i)}else if(py(i)||gy(i)&&(i.type==="submit"||i.type==="image")){let f=i.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=i.getAttribute("formaction")||f.getAttribute("action");if(s=d?Qi(d,e):null,t=i.getAttribute("formmethod")||f.getAttribute("method")||su,a=hf(i.getAttribute("formenctype"))||hf(f.getAttribute("enctype"))||au,l=new FormData(f,i),!xy()){let{name:p,type:m,value:v}=i;if(m==="image"){let _=p?`${p}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else p&&l.append(p,v)}}else{if(Su(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=su,s=null,a=au,c=i}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jd(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Dv(i,e,t,s){let a=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return t?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${s}`:a.pathname=`${a.pathname}.${s}`:a.pathname==="/"?a.pathname=`_root.${s}`:e&&Qi(a.pathname,e)==="/"?a.pathname=`${mu(e)}/_root.${s}`:a.pathname=`${mu(a.pathname)}.${s}`,a}async function Ey(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function My(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function wy(i,e,t){let s=await Promise.all(i.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await Ey(l,t);return c.links?c.links():[]}return[]}));return Cy(s.flat(1).filter(My).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Ym(i,e,t,s,a,l){let c=(d,p)=>t[p]?d.route.id!==t[p].route.id:!0,f=(d,p)=>t[p].pathname!==d.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==d.params["*"];return l==="assets"?e.filter((d,p)=>c(d,p)||f(d,p)):l==="data"?e.filter((d,p)=>{let m=s.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(c(d,p)||f(d,p))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Ty(i,e,{includeHydrateFallback:t}={}){return Ry(i.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function Ry(i){return[...new Set(i)]}function Ay(i){let e={},t=Object.keys(i).sort();for(let s of t)e[s]=i[s];return e}function Cy(i,e){let t=new Set;return new Set(e),i.reduce((s,a)=>{let l=JSON.stringify(Ay(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}function $d(){let i=W.useContext(da);return jd(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function by(){let i=W.useContext(yu);return jd(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Yd=W.createContext(void 0);Yd.displayName="FrameworkContext";function Eu(){let i=W.useContext(Yd);return jd(i,"You must render this element inside a <HydratedRouter> element"),i}function Py(i,e){let t=W.useContext(Yd),[s,a]=W.useState(!1),[l,c]=W.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=e,_=W.useRef(null);W.useEffect(()=>{if(i==="render"&&c(!0),i==="viewport"){let w=x=>{x.forEach(L=>{c(L.isIntersecting)})},y=new IntersectionObserver(w,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[i]),W.useEffect(()=>{if(s){let w=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(w)}}},[s]);let S=()=>{a(!0)},E=()=>{a(!1),c(!1)};return t?i!=="intent"?[l,_,{}]:[l,_,{onFocus:Ka(f,S),onBlur:Ka(d,E),onMouseEnter:Ka(p,S),onMouseLeave:Ka(m,E),onTouchStart:Ka(v,S)}]:[!1,_,{}]}function Ka(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function Ly({page:i,...e}){let t=Gx(),{nonce:s}=Eu(),{router:a}=$d(),l=W.useMemo(()=>pv(a.routes,i,a.basename),[a.routes,i,a.basename]);return l?(e.nonce==null&&s&&(e={...e,nonce:s}),t?W.createElement(Uy,{page:i,matches:l,...e}):W.createElement(Ny,{page:i,matches:l,...e})):null}function Dy(i){let{manifest:e,routeModules:t}=Eu(),[s,a]=W.useState([]);return W.useEffect(()=>{let l=!1;return wy(i,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[i,e,t]),s}function Uy({page:i,matches:e,...t}){let s=tr(),{future:a}=Eu(),{basename:l}=$d(),c=W.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let f=Dv(i,l,a.v8_trailingSlashAwareDataRequests,"rsc"),d=!1,p=[];for(let m of e)typeof m.route.shouldRevalidate=="function"?d=!0:p.push(m.route.id);return d&&p.length>0&&f.searchParams.set("_routes",p.join(",")),[f.pathname+f.search]},[l,a.v8_trailingSlashAwareDataRequests,i,s,e]);return W.createElement(W.Fragment,null,c.map(f=>W.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...t})))}function Ny({page:i,matches:e,...t}){let s=tr(),{future:a,manifest:l,routeModules:c}=Eu(),{basename:f}=$d(),{loaderData:d,matches:p}=by(),m=W.useMemo(()=>Ym(i,e,p,l,s,"data"),[i,e,p,l,s]),v=W.useMemo(()=>Ym(i,e,p,l,s,"assets"),[i,e,p,l,s]),_=W.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let w=new Set,y=!1;if(e.forEach(L=>{let P=l.routes[L.route.id];!P||!P.hasLoader||(!m.some(C=>C.route.id===L.route.id)&&L.route.id in d&&c[L.route.id]?.shouldRevalidate||P.hasClientLoader?y=!0:w.add(L.route.id))}),w.size===0)return[];let x=Dv(i,f,a.v8_trailingSlashAwareDataRequests,"data");return y&&w.size>0&&x.searchParams.set("_routes",e.filter(L=>w.has(L.route.id)).map(L=>L.route.id).join(",")),[x.pathname+x.search]},[f,a.v8_trailingSlashAwareDataRequests,d,s,l,m,e,i,c]),S=W.useMemo(()=>Ty(v,l),[v,l]),E=Dy(v);return W.createElement(W.Fragment,null,_.map(w=>W.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...t})),S.map(w=>W.createElement("link",{key:w,rel:"modulepreload",href:w,...t})),E.map(({key:w,link:y})=>W.createElement("link",{key:w,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function Iy(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Fy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fy&&(window.__reactRouterVersion="7.18.2")}catch{}function Oy({basename:i,children:e,useTransitions:t,window:s}){let a=W.useRef();a.current==null&&(a.current=mx({window:s,v5Compat:!0}));let l=a.current,[c,f]=W.useState({action:l.action,location:l.location}),d=W.useCallback(p=>{t===!1?f(p):W.startTransition(()=>f(p))},[t]);return W.useLayoutEffect(()=>l.listen(d),[l,d]),W.createElement(dy,{basename:i,children:e,location:c.location,navigationType:c.action,navigator:l,useTransitions:t})}var Uv=W.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,mask:f,state:d,target:p,to:m,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:S,...E},w){let{basename:y,navigator:x,useTransitions:L}=W.useContext(ti),P=typeof m=="string"&&Hd.test(m),C=Ev(m,y);m=C.to;let z=Kx(m,{relative:a}),N=tr(),F=null;if(f){let _e=Vd(f,[],N.mask?N.mask.pathname:"/",!0);y!=="/"&&(_e.pathname=_e.pathname==="/"?y:hi([y,_e.pathname])),F=x.createHref(_e)}let[X,b,R]=Py(s,E),B=zy(m,{replace:c,mask:f,state:d,target:p,preventScrollReset:v,relative:a,viewTransition:_,defaultShouldRevalidate:S,useTransitions:L});function oe(_e){e&&e(_e),_e.defaultPrevented||B(_e)}let J=!(C.isExternal||l),ce=W.createElement("a",{...E,...R,href:(J?F:void 0)||C.absoluteURL||z,onClick:J?oe:e,ref:Iy(w,b),target:p,"data-discover":!P&&t==="render"?"true":void 0});return X&&!P?W.createElement(W.Fragment,null,ce,W.createElement(Ly,{page:z})):ce});Uv.displayName="Link";var Jf=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:f,children:d,...p},m){let v=xo(c,{relative:p.relative}),_=tr(),S=W.useContext(yu),{navigator:E,basename:w}=W.useContext(ti),y=S!=null&&Xy(v)&&f===!0,x=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,L=_.pathname,P=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(L=L.toLowerCase(),P=P?P.toLowerCase():null,x=x.toLowerCase()),P&&w&&(P=Qi(P,w)||P);const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let z=L===x||!a&&L.startsWith(x)&&L.charAt(C)==="/",N=P!=null&&(P===x||!a&&P.startsWith(x)&&P.charAt(x.length)==="/"),F={isActive:z,isPending:N,isTransitioning:y},X=z?e:void 0,b;typeof s=="function"?b=s(F):b=[s,z?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(F):l;return W.createElement(Uv,{...p,"aria-current":X,className:b,ref:m,style:R,to:c,viewTransition:f},typeof d=="function"?d(F):d)});Jf.displayName="NavLink";var ky=W.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=su,action:f,onSubmit:d,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:_,...S},E)=>{let{useTransitions:w}=W.useContext(ti),y=Gy(),x=Wy(f,{relative:p}),L=c.toLowerCase()==="get"?"get":"post",P=typeof f=="string"&&Hd.test(f),C=z=>{if(d&&d(z),z.defaultPrevented)return;z.preventDefault();let N=z.nativeEvent.submitter,F=N?.getAttribute("formmethod")||c,X=()=>y(N||z.currentTarget,{fetcherKey:e,method:F,navigate:t,replace:a,state:l,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:_});w&&t!==!1?W.startTransition(()=>X()):X()};return W.createElement("form",{ref:E,method:L,action:x,onSubmit:s?d:C,...S,"data-discover":!P&&i==="render"?"true":void 0})});ky.displayName="Form";function By(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nv(i){let e=W.useContext(da);return Gt(e,By(i)),e}function zy(i,{target:e,replace:t,mask:s,state:a,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d,useTransitions:p}={}){let m=Zx(),v=tr(),_=xo(i,{relative:c});return W.useCallback(S=>{if(_y(S,e)){S.preventDefault();let E=t!==void 0?t:oo(v)===oo(_),w=()=>m(i,{replace:E,mask:s,state:a,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d});p?W.startTransition(()=>w()):w()}},[v,m,_,t,s,a,e,i,l,c,f,d,p])}var Hy=0,Vy=()=>`__${String(++Hy)}__`;function Gy(){let{router:i}=Nv("useSubmit"),{basename:e}=W.useContext(ti),t=ly(),s=i.fetch,a=i.navigate;return W.useCallback(async(l,c={})=>{let{action:f,method:d,encType:p,formData:m,body:v}=Sy(l,e);if(c.navigate===!1){let _=c.fetcherKey||Vy();await s(_,t,c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,flushSync:c.flushSync})}else await a(c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[s,a,e,t])}function Wy(i,{relative:e}={}){let{basename:t}=W.useContext(ti),s=W.useContext(er);Gt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...xo(i||".",{relative:e})},c=tr();if(i==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(m=>m==="")){f.delete("index"),d.filter(v=>v).forEach(v=>f.append("index",v));let m=f.toString();l.search=m?`?${m}`:""}}return(!i||i===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:hi([t,l.pathname])),oo(l)}function Xy(i,{relative:e}={}){let t=W.useContext(Tv);Gt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Nv("useViewTransitionState"),a=xo(i,{relative:e});if(!t.isTransitioning)return!1;let l=Qi(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Qi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return pu(a.pathname,c)!=null||pu(a.pathname,l)!=null}const qd="178",jy=0,qm=1,$y=2,Iv=1,Yy=2,Xi=3,Fr=0,On=1,Ei=2,Nr=0,na=1,Km=2,Zm=3,Jm=4,qy=5,as=100,Ky=101,Zy=102,Jy=103,Qy=104,eS=200,tS=201,nS=202,iS=203,Qf=204,ed=205,rS=206,sS=207,aS=208,oS=209,lS=210,uS=211,cS=212,fS=213,dS=214,td=0,nd=1,id=2,aa=3,rd=4,sd=5,ad=6,od=7,Fv=0,hS=1,pS=2,Ki=0,mS=1,gS=2,vS=3,_S=4,xS=5,yS=6,SS=7,Ov=300,oa=301,la=302,ld=303,ud=304,Mu=306,lo=1e3,$i=1001,cd=1002,dn=1003,ES=1004,Ul=1005,Mi=1006,pf=1007,ls=1008,Ci=1009,kv=1010,Bv=1011,uo=1012,Kd=1013,cs=1014,Yi=1015,yo=1016,Zd=1017,Jd=1018,co=1020,zv=35902,Hv=1021,Vv=1022,di=1023,fo=1026,ho=1027,Gv=1028,Qd=1029,Wv=1030,eh=1031,th=1033,ou=33776,lu=33777,uu=33778,cu=33779,fd=35840,dd=35841,hd=35842,pd=35843,md=36196,gd=37492,vd=37496,_d=37808,xd=37809,yd=37810,Sd=37811,Ed=37812,Md=37813,wd=37814,Td=37815,Rd=37816,Ad=37817,Cd=37818,bd=37819,Pd=37820,Ld=37821,fu=36492,Dd=36494,Ud=36495,Xv=36283,Nd=36284,Id=36285,Fd=36286,MS=3200,wS=3201,TS=0,RS=1,Lr="",An="srgb",ua="srgb-linear",gu="linear",Dt="srgb",ks=7680,Qm=519,AS=512,CS=513,bS=514,jv=515,PS=516,LS=517,DS=518,US=519,eg=35044,tg="300 es",qi=2e3,vu=2001;class ha{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ng=1234567;const ro=Math.PI/180,po=180/Math.PI;function pa(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function nh(i,e){return(i%e+e)%e}function NS(i,e,t,s,a){return s+(i-e)*(a-s)/(t-e)}function IS(i,e,t){return i!==e?(t-i)/(e-i):0}function so(i,e,t){return(1-t)*i+t*e}function FS(i,e,t,s){return so(i,e,1-Math.exp(-t*s))}function OS(i,e=1){return e-Math.abs(nh(i,e*2)-e)}function kS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function BS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function HS(i,e){return i+Math.random()*(e-i)}function VS(i){return i*(.5-Math.random())}function GS(i){i!==void 0&&(ng=i);let e=ng+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function WS(i){return i*ro}function XS(i){return i*po}function jS(i){return(i&i-1)===0&&i!==0}function $S(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function YS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qS(i,e,t,s,a){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),p=l((e+s)/2),m=c((e+s)/2),v=l((e-s)/2),_=c((e-s)/2),S=l((s-e)/2),E=c((s-e)/2);switch(a){case"XYX":i.set(f*m,d*v,d*_,f*p);break;case"YZY":i.set(d*_,f*m,d*v,f*p);break;case"ZXZ":i.set(d*v,d*_,f*m,f*p);break;case"XZX":i.set(f*m,d*E,d*S,f*p);break;case"YXY":i.set(d*S,f*m,d*E,f*p);break;case"ZYZ":i.set(d*E,d*S,f*m,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ea(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const KS={DEG2RAD:ro,RAD2DEG:po,generateUUID:pa,clamp:St,euclideanModulo:nh,mapLinear:NS,inverseLerp:IS,lerp:so,damp:FS,pingpong:OS,smoothstep:kS,smootherstep:BS,randInt:zS,randFloat:HS,randFloatSpread:VS,seededRandom:GS,degToRad:WS,radToDeg:XS,isPowerOfTwo:jS,ceilPowerOfTwo:$S,floorPowerOfTwo:YS,setQuaternionFromProperEuler:qS,normalize:Tn,denormalize:ea};class Ct{constructor(e=0,t=0){Ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class So{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let d=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];const _=l[c+0],S=l[c+1],E=l[c+2],w=l[c+3];if(f===0){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(f===1){e[t+0]=_,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(v!==w||d!==_||p!==S||m!==E){let y=1-f;const x=d*_+p*S+m*E+v*w,L=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const z=Math.sqrt(P),N=Math.atan2(z,x*L);y=Math.sin(y*N)/z,f=Math.sin(f*N)/z}const C=f*L;if(d=d*y+_*C,p=p*y+S*C,m=m*y+E*C,v=v*y+w*C,y===1-f){const z=1/Math.sqrt(d*d+p*p+m*m+v*v);d*=z,p*=z,m*=z,v*=z}}e[t]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],d=s[a+1],p=s[a+2],m=s[a+3],v=l[c],_=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+m*v+d*S-p*_,e[t+1]=d*E+m*_+p*v-f*S,e[t+2]=p*E+m*S+f*_-d*v,e[t+3]=m*E-f*v-d*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,p=f(s/2),m=f(a/2),v=f(l/2),_=d(s/2),S=d(a/2),E=d(l/2);switch(c){case"XYZ":this._x=_*m*v+p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v-_*S*E;break;case"YXZ":this._x=_*m*v+p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v+_*S*E;break;case"ZXY":this._x=_*m*v-p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v-_*S*E;break;case"ZYX":this._x=_*m*v-p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v+_*S*E;break;case"YZX":this._x=_*m*v+p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v-_*S*E;break;case"XZY":this._x=_*m*v-p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],d=t[9],p=t[2],m=t[6],v=t[10],_=s+f+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(s>f&&s>v){const S=2*Math.sqrt(1+s-f-v);this._w=(m-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-s-v);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+v-s-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,d=t._y,p=t._z,m=t._w;return this._x=s*m+c*f+a*p-l*d,this._y=a*m+c*d+l*f-s*p,this._z=l*m+c*p+s*d-a*f,this._w=c*m-s*f-a*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),v=Math.sin((1-t)*m)/p,_=Math.sin(t*m)/p;return this._w=c*v+this._w*_,this._x=s*v+this._x*_,this._y=a*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,s=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ig.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ig.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,d=e.w,p=2*(c*a-f*s),m=2*(f*t-l*a),v=2*(l*s-c*t);return this.x=t+d*p+c*v-f*m,this.y=s+d*m+f*p-l*v,this.z=a+d*v+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=a*d-l*f,this.y=l*c-s*d,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return mf.copy(this).projectOnVector(e),this.sub(mf)}reflect(e){return this.sub(mf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mf=new ie,ig=new So;class dt{constructor(e,t,s,a,l,c,f,d,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,p)}set(e,t,s,a,l,c,f,d,p){const m=this.elements;return m[0]=e,m[1]=a,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=s,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],d=s[6],p=s[1],m=s[4],v=s[7],_=s[2],S=s[5],E=s[8],w=a[0],y=a[3],x=a[6],L=a[1],P=a[4],C=a[7],z=a[2],N=a[5],F=a[8];return l[0]=c*w+f*L+d*z,l[3]=c*y+f*P+d*N,l[6]=c*x+f*C+d*F,l[1]=p*w+m*L+v*z,l[4]=p*y+m*P+v*N,l[7]=p*x+m*C+v*F,l[2]=_*w+S*L+E*z,l[5]=_*y+S*P+E*N,l[8]=_*x+S*C+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8];return t*c*m-t*f*p-s*l*m+s*f*d+a*l*p-a*c*d}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=m*c-f*p,_=f*d-m*l,S=p*l-c*d,E=t*v+s*_+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(a*p-m*s)*w,e[2]=(f*s-a*c)*w,e[3]=_*w,e[4]=(m*t-a*d)*w,e[5]=(a*l-f*t)*w,e[6]=S*w,e[7]=(s*d-p*t)*w,e[8]=(c*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(s*d,s*p,-s*(d*c+p*f)+c+e,-a*p,a*d,-a*(-p*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(gf.makeScale(e,t)),this}rotate(e){return this.premultiply(gf.makeRotation(-e)),this}translate(e,t){return this.premultiply(gf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gf=new dt;function $v(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ZS(){const i=mo("canvas");return i.style.display="block",i}const rg={};function ia(i){i in rg||(rg[i]=!0,console.warn(i))}function JS(i,e,t){return new Promise(function(s,a){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function QS(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function eE(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sg=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ag=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tE(){const i={enabled:!0,workingColorSpace:ua,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(a.r=Zi(a.r),a.g=Zi(a.g),a.b=Zi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(a.r=ra(a.r),a.g=ra(a.g),a.b=ra(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Lr?gu:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return ia("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return ia("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[ua]:{primaries:e,whitePoint:s,transfer:gu,toXYZ:sg,fromXYZ:ag,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:s,transfer:Dt,toXYZ:sg,fromXYZ:ag,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const At=tE();function Zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bs;class nE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Bs===void 0&&(Bs=mo("canvas")),Bs.width=e.width,Bs.height=e.height;const a=Bs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=Bs}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mo("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Zi(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Zi(t[s]/255)*255):t[s]=Zi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iE=0;class ih{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=pa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(vf(a[c].image)):l.push(vf(a[c]))}else l=vf(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function vf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rE=0;const _f=new ie;class bn extends ha{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,s=$i,a=$i,l=Mi,c=ls,f=di,d=Ci,p=bn.DEFAULT_ANISOTROPY,m=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=pa(),this.name="",this.source=new ih(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_f).x}get height(){return this.source.getSize(_f).y}get depth(){return this.source.getSize(_f).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Ov;bn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,s=0,a=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const d=e.elements,p=d[0],m=d[4],v=d[8],_=d[1],S=d[5],E=d[9],w=d[2],y=d[6],x=d[10];if(Math.abs(m-_)<.01&&Math.abs(v-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+w)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,C=(S+1)/2,z=(x+1)/2,N=(m+_)/4,F=(v+w)/4,X=(E+y)/4;return P>C&&P>z?P<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(P),a=N/s,l=F/s):C>z?C<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),s=N/a,l=X/a):z<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),s=F/l,a=X/l),this.set(s,a,l,t),this}let L=Math.sqrt((y-E)*(y-E)+(v-w)*(v-w)+(_-m)*(_-m));return Math.abs(L)<.001&&(L=1),this.x=(y-E)/L,this.y=(v-w)/L,this.z=(_-m)/L,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sE extends ha{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const a={width:e,height:t,depth:s.depth},l=new bn(a);this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Mi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new ih(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends sE{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Yv extends bn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=dn,this.minFilter=dn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aE extends bn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=dn,this.minFilter=dn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eo{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,li):li.fromBufferAttribute(l,c),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Nl.copy(s.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Za),Il.subVectors(this.max,Za),zs.subVectors(e.a,Za),Hs.subVectors(e.b,Za),Vs.subVectors(e.c,Za),wr.subVectors(Hs,zs),Tr.subVectors(Vs,Hs),Jr.subVectors(zs,Vs);let t=[0,-wr.z,wr.y,0,-Tr.z,Tr.y,0,-Jr.z,Jr.y,wr.z,0,-wr.x,Tr.z,0,-Tr.x,Jr.z,0,-Jr.x,-wr.y,wr.x,0,-Tr.y,Tr.x,0,-Jr.y,Jr.x,0];return!xf(t,zs,Hs,Vs,Il)||(t=[1,0,0,0,1,0,0,0,1],!xf(t,zs,Hs,Vs,Il))?!1:(Fl.crossVectors(wr,Tr),t=[Fl.x,Fl.y,Fl.z],xf(t,zs,Hs,Vs,Il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],li=new ie,Nl=new Eo,zs=new ie,Hs=new ie,Vs=new ie,wr=new ie,Tr=new ie,Jr=new ie,Za=new ie,Il=new ie,Fl=new ie,Qr=new ie;function xf(i,e,t,s,a){for(let l=0,c=i.length-3;l<=c;l+=3){Qr.fromArray(i,l);const f=a.x*Math.abs(Qr.x)+a.y*Math.abs(Qr.y)+a.z*Math.abs(Qr.z),d=e.dot(Qr),p=t.dot(Qr),m=s.dot(Qr);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const oE=new Eo,Ja=new ie,yf=new ie;class rh{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):oE.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ja.subVectors(e,this.center);const t=Ja.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Ja,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ja.copy(e.center).add(yf)),this.expandByPoint(Ja.copy(e.center).sub(yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hi=new ie,Sf=new ie,Ol=new ie,Rr=new ie,Ef=new ie,kl=new ie,Mf=new ie;class lE{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Sf.copy(e).add(t).multiplyScalar(.5),Ol.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(Sf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ol),f=Rr.dot(this.direction),d=-Rr.dot(Ol),p=Rr.lengthSq(),m=Math.abs(1-c*c);let v,_,S,E;if(m>0)if(v=c*d-f,_=c*f-d,E=l*m,v>=0)if(_>=-E)if(_<=E){const w=1/m;v*=w,_*=w,S=v*(v+c*_+2*f)+_*(c*v+_+2*d)+p}else _=l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;else _=-l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;else _<=-E?(v=Math.max(0,-(-c*l+f)),_=v>0?-l:Math.min(Math.max(-l,-d),l),S=-v*v+_*(_+2*d)+p):_<=E?(v=0,_=Math.min(Math.max(-l,-d),l),S=_*(_+2*d)+p):(v=Math.max(0,-(c*l+f)),_=v>0?l:Math.min(Math.max(-l,-d),l),S=-v*v+_*(_+2*d)+p);else _=c>0?-l:l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Sf).addScaledVector(Ol,_),S}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const s=Hi.dot(this.direction),a=Hi.dot(Hi)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,d=s+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,d;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,a=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,a=(e.min.x-_.x)*p),m>=0?(l=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),v>=0?(f=(e.min.z-_.z)*v,d=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,d=(e.min.z-_.z)*v),s>d||f>a)||((f>s||s!==s)&&(s=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,s,a,l){Ef.subVectors(t,e),kl.subVectors(s,e),Mf.crossVectors(Ef,kl);let c=this.direction.dot(Mf),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Rr.subVectors(this.origin,e);const d=f*this.direction.dot(kl.crossVectors(Rr,kl));if(d<0)return null;const p=f*this.direction.dot(Ef.cross(Rr));if(p<0||d+p>c)return null;const m=-f*Rr.dot(Mf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,s,a,l,c,f,d,p,m,v,_,S,E,w,y){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,p,m,v,_,S,E,w,y)}set(e,t,s,a,l,c,f,d,p,m,v,_,S,E,w,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=a,x[1]=l,x[5]=c,x[9]=f,x[13]=d,x[2]=p,x[6]=m,x[10]=v,x[14]=_,x[3]=S,x[7]=E,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Gs.setFromMatrixColumn(e,0).length(),l=1/Gs.setFromMatrixColumn(e,1).length(),c=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),d=Math.cos(a),p=Math.sin(a),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=c*m,S=c*v,E=f*m,w=f*v;t[0]=d*m,t[4]=-d*v,t[8]=p,t[1]=S+E*p,t[5]=_-w*p,t[9]=-f*d,t[2]=w-_*p,t[6]=E+S*p,t[10]=c*d}else if(e.order==="YXZ"){const _=d*m,S=d*v,E=p*m,w=p*v;t[0]=_+w*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*m,t[9]=-f,t[2]=S*f-E,t[6]=w+_*f,t[10]=c*d}else if(e.order==="ZXY"){const _=d*m,S=d*v,E=p*m,w=p*v;t[0]=_-w*f,t[4]=-c*v,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*m,t[9]=w-_*f,t[2]=-c*p,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const _=c*m,S=c*v,E=f*m,w=f*v;t[0]=d*m,t[4]=E*p-S,t[8]=_*p+w,t[1]=d*v,t[5]=w*p+_,t[9]=S*p-E,t[2]=-p,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,S=c*p,E=f*d,w=f*p;t[0]=d*m,t[4]=w-_*v,t[8]=E*v+S,t[1]=v,t[5]=c*m,t[9]=-f*m,t[2]=-p*m,t[6]=S*v+E,t[10]=_-w*v}else if(e.order==="XZY"){const _=c*d,S=c*p,E=f*d,w=f*p;t[0]=d*m,t[4]=-v,t[8]=p*m,t[1]=_*v+w,t[5]=c*m,t[9]=S*v-E,t[2]=E*v-S,t[6]=f*m,t[10]=w*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uE,e,cE)}lookAt(e,t,s){const a=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Ar.crossVectors(s,Vn),Ar.lengthSq()===0&&(Math.abs(s.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Ar.crossVectors(s,Vn)),Ar.normalize(),Bl.crossVectors(Vn,Ar),a[0]=Ar.x,a[4]=Bl.x,a[8]=Vn.x,a[1]=Ar.y,a[5]=Bl.y,a[9]=Vn.y,a[2]=Ar.z,a[6]=Bl.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],d=s[8],p=s[12],m=s[1],v=s[5],_=s[9],S=s[13],E=s[2],w=s[6],y=s[10],x=s[14],L=s[3],P=s[7],C=s[11],z=s[15],N=a[0],F=a[4],X=a[8],b=a[12],R=a[1],B=a[5],oe=a[9],J=a[13],ce=a[2],_e=a[6],ne=a[10],ye=a[14],H=a[3],fe=a[7],le=a[11],I=a[15];return l[0]=c*N+f*R+d*ce+p*H,l[4]=c*F+f*B+d*_e+p*fe,l[8]=c*X+f*oe+d*ne+p*le,l[12]=c*b+f*J+d*ye+p*I,l[1]=m*N+v*R+_*ce+S*H,l[5]=m*F+v*B+_*_e+S*fe,l[9]=m*X+v*oe+_*ne+S*le,l[13]=m*b+v*J+_*ye+S*I,l[2]=E*N+w*R+y*ce+x*H,l[6]=E*F+w*B+y*_e+x*fe,l[10]=E*X+w*oe+y*ne+x*le,l[14]=E*b+w*J+y*ye+x*I,l[3]=L*N+P*R+C*ce+z*H,l[7]=L*F+P*B+C*_e+z*fe,l[11]=L*X+P*oe+C*ne+z*le,l[15]=L*b+P*J+C*ye+z*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],d=e[9],p=e[13],m=e[2],v=e[6],_=e[10],S=e[14],E=e[3],w=e[7],y=e[11],x=e[15];return E*(+l*d*v-a*p*v-l*f*_+s*p*_+a*f*S-s*d*S)+w*(+t*d*S-t*p*_+l*c*_-a*c*S+a*p*m-l*d*m)+y*(+t*p*v-t*f*S-l*c*v+s*c*S+l*f*m-s*p*m)+x*(-a*f*m-t*d*v+t*f*_+a*c*v-s*c*_+s*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=e[9],_=e[10],S=e[11],E=e[12],w=e[13],y=e[14],x=e[15],L=v*y*p-w*_*p+w*d*S-f*y*S-v*d*x+f*_*x,P=E*_*p-m*y*p-E*d*S+c*y*S+m*d*x-c*_*x,C=m*w*p-E*v*p+E*f*S-c*w*S-m*f*x+c*v*x,z=E*v*d-m*w*d-E*f*_+c*w*_+m*f*y-c*v*y,N=t*L+s*P+a*C+l*z;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=L*F,e[1]=(w*_*l-v*y*l-w*a*S+s*y*S+v*a*x-s*_*x)*F,e[2]=(f*y*l-w*d*l+w*a*p-s*y*p-f*a*x+s*d*x)*F,e[3]=(v*d*l-f*_*l-v*a*p+s*_*p+f*a*S-s*d*S)*F,e[4]=P*F,e[5]=(m*y*l-E*_*l+E*a*S-t*y*S-m*a*x+t*_*x)*F,e[6]=(E*d*l-c*y*l-E*a*p+t*y*p+c*a*x-t*d*x)*F,e[7]=(c*_*l-m*d*l+m*a*p-t*_*p-c*a*S+t*d*S)*F,e[8]=C*F,e[9]=(E*v*l-m*w*l-E*s*S+t*w*S+m*s*x-t*v*x)*F,e[10]=(c*w*l-E*f*l+E*s*p-t*w*p-c*s*x+t*f*x)*F,e[11]=(m*f*l-c*v*l-m*s*p+t*v*p+c*s*S-t*f*S)*F,e[12]=z*F,e[13]=(m*w*a-E*v*a+E*s*_-t*w*_-m*s*y+t*v*y)*F,e[14]=(E*f*a-c*w*a-E*s*d+t*w*d+c*s*y-t*f*y)*F,e[15]=(c*v*a-m*f*a+m*s*d-t*v*d-c*s*_+t*f*_)*F,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,d=e.z,p=l*c,m=l*f;return this.set(p*c+s,p*f-a*d,p*d+a*f,0,p*f+a*d,m*f+s,m*d-a*c,0,p*d-a*f,m*d+a*c,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,p=l+l,m=c+c,v=f+f,_=l*p,S=l*m,E=l*v,w=c*m,y=c*v,x=f*v,L=d*p,P=d*m,C=d*v,z=s.x,N=s.y,F=s.z;return a[0]=(1-(w+x))*z,a[1]=(S+C)*z,a[2]=(E-P)*z,a[3]=0,a[4]=(S-C)*N,a[5]=(1-(_+x))*N,a[6]=(y+L)*N,a[7]=0,a[8]=(E+P)*F,a[9]=(y-L)*F,a[10]=(1-(_+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Gs.set(a[0],a[1],a[2]).length();const c=Gs.set(a[4],a[5],a[6]).length(),f=Gs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ui.copy(this);const p=1/l,m=1/c,v=1/f;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=m,ui.elements[5]*=m,ui.elements[6]*=m,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,t.setFromRotationMatrix(ui),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=qi){const d=this.elements,p=2*l/(t-e),m=2*l/(s-a),v=(t+e)/(t-e),_=(s+a)/(s-a);let S,E;if(f===qi)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===vu)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=qi){const d=this.elements,p=1/(t-e),m=1/(s-a),v=1/(c-l),_=(t+e)*p,S=(s+a)*m;let E,w;if(f===qi)E=(c+l)*v,w=-2*v;else if(f===vu)E=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=w,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Gs=new ie,ui=new $t,uE=new ie(0,0,0),cE=new ie(1,1,1),Ar=new ie,Bl=new ie,Vn=new ie,og=new $t,lg=new So;class Cn{constructor(e=0,t=0,s=0,a=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],d=a[1],p=a[5],m=a[9],v=a[2],_=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(og,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lg.setFromEuler(this),this.setFromQuaternion(lg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class qv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fE=0;const ug=new ie,Ws=new So,Vi=new $t,zl=new ie,Qa=new ie,dE=new ie,hE=new So,cg=new ie(1,0,0),fg=new ie(0,1,0),dg=new ie(0,0,1),hg={type:"added"},pE={type:"removed"},Xs={type:"childadded",child:null},wf={type:"childremoved",child:null};class yn extends ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new ie,t=new Cn,s=new So,a=new ie(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $t},normalMatrix:{value:new dt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(cg,e)}rotateY(e){return this.rotateOnAxis(fg,e)}rotateZ(e){return this.rotateOnAxis(dg,e)}translateOnAxis(e,t){return ug.copy(e).applyQuaternion(this.quaternion),this.position.add(ug.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cg,e)}translateY(e){return this.translateOnAxis(fg,e)}translateZ(e){return this.translateOnAxis(dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?zl.copy(e):zl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Qa,zl,this.up):Vi.lookAt(zl,Qa,this.up),this.quaternion.setFromRotationMatrix(Vi),a&&(Vi.extractRotation(a.matrixWorld),Ws.setFromRotationMatrix(Vi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hg),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pE),wf.child=e,this.dispatchEvent(wf),wf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hg),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,dE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,hE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const v=d[p];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),p=c(e.textures),m=c(e.images),v=c(e.shapes),_=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),d.length>0&&(s.materials=d),p.length>0&&(s.textures=p),m.length>0&&(s.images=m),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=a,s;function c(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}yn.DEFAULT_UP=new ie(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new ie,Gi=new ie,Tf=new ie,Wi=new ie,js=new ie,$s=new ie,pg=new ie,Rf=new ie,Af=new ie,Cf=new ie,bf=new jt,Pf=new jt,Lf=new jt;class fi{constructor(e=new ie,t=new ie,s=new ie){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),ci.subVectors(e,t),a.cross(ci);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){ci.subVectors(a,t),Gi.subVectors(s,t),Tf.subVectors(e,t);const c=ci.dot(ci),f=ci.dot(Gi),d=ci.dot(Tf),p=Gi.dot(Gi),m=Gi.dot(Tf),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,S=(p*d-f*m)*_,E=(c*m-f*d)*_;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,s,a,l,c,f,d){return this.getBarycoord(e,t,s,a,Wi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Wi.x),d.addScaledVector(c,Wi.y),d.addScaledVector(f,Wi.z),d)}static getInterpolatedAttribute(e,t,s,a,l,c){return bf.setScalar(0),Pf.setScalar(0),Lf.setScalar(0),bf.fromBufferAttribute(e,t),Pf.fromBufferAttribute(e,s),Lf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(bf,l.x),c.addScaledVector(Pf,l.y),c.addScaledVector(Lf,l.z),c}static isFrontFacing(e,t,s,a){return ci.subVectors(s,t),Gi.subVectors(e,t),ci.cross(Gi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),ci.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return fi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;js.subVectors(a,s),$s.subVectors(l,s),Rf.subVectors(e,s);const d=js.dot(Rf),p=$s.dot(Rf);if(d<=0&&p<=0)return t.copy(s);Af.subVectors(e,a);const m=js.dot(Af),v=$s.dot(Af);if(m>=0&&v<=m)return t.copy(a);const _=d*v-m*p;if(_<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(s).addScaledVector(js,c);Cf.subVectors(e,l);const S=js.dot(Cf),E=$s.dot(Cf);if(E>=0&&S<=E)return t.copy(l);const w=S*p-d*E;if(w<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector($s,f);const y=m*E-S*v;if(y<=0&&v-m>=0&&S-E>=0)return pg.subVectors(l,a),f=(v-m)/(v-m+(S-E)),t.copy(a).addScaledVector(pg,f);const x=1/(y+w+_);return c=w*x,f=_*x,t.copy(s).addScaledVector(js,c).addScaledVector($s,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Df(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,s,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=s,At.colorSpaceToWorking(this,a),this}setHSL(e,t,s,a=At.workingColorSpace){if(e=nh(e,1),t=St(t,0,1),s=St(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Df(c,l,e+1/3),this.g=Df(c,l,e),this.b=Df(c,l,e-1/3)}return At.colorSpaceToWorking(this,a),this}setStyle(e,t=An){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const s=Kv[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return At.workingToColorSpace(xn.copy(this),e),Math.round(St(xn.r*255,0,255))*65536+Math.round(St(xn.g*255,0,255))*256+Math.round(St(xn.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(xn.copy(this),t);const s=xn.r,a=xn.g,l=xn.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let d,p;const m=(f+c)/2;if(f===c)d=0,p=0;else{const v=c-f;switch(p=m<=.5?v/(c+f):v/(2-c-f),c){case s:d=(a-l)/v+(a<l?6:0);break;case a:d=(l-s)/v+2;break;case l:d=(s-a)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=m,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=An){At.workingToColorSpace(xn.copy(this),e);const t=xn.r,s=xn.g,a=xn.b;return e!==An?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Hl);const s=so(Cr.h,Hl.h,t),a=so(Cr.s,Hl.s,t),l=so(Cr.l,Hl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Pt;Pt.NAMES=Kv;let mE=0;class wu extends ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=pa(),this.name="",this.type="Material",this.blending=na,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qf,this.blendDst=ed,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==na&&(s.blending=this.blending),this.side!==Fr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Qf&&(s.blendSrc=this.blendSrc),this.blendDst!==ed&&(s.blendDst=this.blendDst),this.blendEquation!==as&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==aa&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sh extends wu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new ie,Vl=new Ct;let gE=0;class Ri{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=eg,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=ea(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Tn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ea(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ea(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ea(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ea(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array),a=Tn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array),a=Tn(a,this.array),l=Tn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eg&&(e.usage=this.usage),e}}class Zv extends Ri{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Jv extends Ri{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class us extends Ri{constructor(e,t,s){super(new Float32Array(e),t,s)}}let vE=0;const Kn=new $t,Uf=new yn,Ys=new ie,Gn=new Eo,eo=new Eo,ln=new ie;class hs extends ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($v(e)?Jv:Zv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new dt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,s){return Kn.makeTranslation(e,t,s),this.applyMatrix4(Kn),this}scale(e,t,s){return Kn.makeScale(e,t,s),this.applyMatrix4(Kn),this}lookAt(e){return Uf.lookAt(e),Uf.updateMatrix(),this.applyMatrix4(Uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new us(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];eo.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Gn.min,eo.min),Gn.expandByPoint(ln),ln.addVectors(Gn.max,eo.max),Gn.expandByPoint(ln)):(Gn.expandByPoint(eo.min),Gn.expandByPoint(eo.max))}Gn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(ln));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)ln.fromBufferAttribute(f,p),d&&(Ys.fromBufferAttribute(e,p),ln.add(Ys)),a=Math.max(a,s.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let X=0;X<s.count;X++)f[X]=new ie,d[X]=new ie;const p=new ie,m=new ie,v=new ie,_=new Ct,S=new Ct,E=new Ct,w=new ie,y=new ie;function x(X,b,R){p.fromBufferAttribute(s,X),m.fromBufferAttribute(s,b),v.fromBufferAttribute(s,R),_.fromBufferAttribute(l,X),S.fromBufferAttribute(l,b),E.fromBufferAttribute(l,R),m.sub(p),v.sub(p),S.sub(_),E.sub(_);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(w.copy(m).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(B),y.copy(v).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(B),f[X].add(w),f[b].add(w),f[R].add(w),d[X].add(y),d[b].add(y),d[R].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let X=0,b=L.length;X<b;++X){const R=L[X],B=R.start,oe=R.count;for(let J=B,ce=B+oe;J<ce;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const P=new ie,C=new ie,z=new ie,N=new ie;function F(X){z.fromBufferAttribute(a,X),N.copy(z);const b=f[X];P.copy(b),P.sub(z.multiplyScalar(z.dot(b))).normalize(),C.crossVectors(N,b);const B=C.dot(d[X])<0?-1:1;c.setXYZW(X,P.x,P.y,P.z,B)}for(let X=0,b=L.length;X<b;++X){const R=L[X],B=R.start,oe=R.count;for(let J=B,ce=B+oe;J<ce;J+=3)F(e.getX(J+0)),F(e.getX(J+1)),F(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ri(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const a=new ie,l=new ie,c=new ie,f=new ie,d=new ie,p=new ie,m=new ie,v=new ie;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),w=e.getX(_+1),y=e.getX(_+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),m.subVectors(c,l),v.subVectors(a,l),m.cross(v),f.fromBufferAttribute(s,E),d.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),f.add(m),d.add(m),p.add(m),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(w,d.x,d.y,d.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,l),v.subVectors(a,l),m.cross(v),s.setXYZ(_+0,m.x,m.y,m.z),s.setXYZ(_+1,m.x,m.y,m.z),s.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,d){const p=f.array,m=f.itemSize,v=f.normalized,_=new p.constructor(d.length*m);let S=0,E=0;for(let w=0,y=d.length;w<y;w++){f.isInterleavedBufferAttribute?S=d[w]*f.data.stride+f.offset:S=d[w]*m;for(let x=0;x<m;x++)_[E++]=p[S++]}return new Ri(_,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hs,s=this.index.array,a=this.attributes;for(const f in a){const d=a[f],p=e(d,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,v=p.length;m<v;m++){const _=p[m],S=e(_,s);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const p=s[d];e.data.attributes[d]=p.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let v=0,_=p.length;v<_;v++){const S=p[v];m.push(S.toJSON(e.data))}m.length>0&&(a[d]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],v=l[p];for(let _=0,S=v.length;_<S;_++)m.push(v[_].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mg=new $t,es=new lE,Gl=new rh,gg=new ie,Wl=new ie,Xl=new ie,jl=new ie,Nf=new ie,$l=new ie,vg=new ie,Yl=new ie;class wi extends yn{constructor(e=new hs,t=new sh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){$l.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],v=l[d];m!==0&&(Nf.fromBufferAttribute(v,e),c?$l.addScaledVector(Nf,m):$l.addScaledVector(Nf.sub(t),m))}t.add($l)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Gl.copy(s.boundingSphere),Gl.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(Gl.containsPoint(es.origin)===!1&&(es.intersectSphere(Gl,gg)===null||es.origin.distanceToSquared(gg)>(e.far-e.near)**2))&&(mg.copy(l).invert(),es.copy(e.ray).applyMatrix4(mg),!(s.boundingBox!==null&&es.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const y=_[E],x=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,z=P;C<z;C+=3){const N=f.getX(C),F=f.getX(C+1),X=f.getX(C+2);a=ql(this,x,e,s,p,m,v,N,F,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=E,x=w;y<x;y+=3){const L=f.getX(y),P=f.getX(y+1),C=f.getX(y+2);a=ql(this,c,e,s,p,m,v,L,P,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const y=_[E],x=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,z=P;C<z;C+=3){const N=C,F=C+1,X=C+2;a=ql(this,x,e,s,p,m,v,N,F,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=E,x=w;y<x;y+=3){const L=y,P=y+1,C=y+2;a=ql(this,c,e,s,p,m,v,L,P,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function _E(i,e,t,s,a,l,c,f){let d;if(e.side===On?d=s.intersectTriangle(c,l,a,!0,f):d=s.intersectTriangle(a,l,c,e.side===Fr,f),d===null)return null;Yl.copy(f),Yl.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Yl);return p<t.near||p>t.far?null:{distance:p,point:Yl.clone(),object:i}}function ql(i,e,t,s,a,l,c,f,d,p){i.getVertexPosition(f,Wl),i.getVertexPosition(d,Xl),i.getVertexPosition(p,jl);const m=_E(i,e,t,s,Wl,Xl,jl,vg);if(m){const v=new ie;fi.getBarycoord(vg,Wl,Xl,jl,v),a&&(m.uv=fi.getInterpolatedAttribute(a,f,d,p,v,new Ct)),l&&(m.uv1=fi.getInterpolatedAttribute(l,f,d,p,v,new Ct)),c&&(m.normal=fi.getInterpolatedAttribute(c,f,d,p,v,new ie),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:d,c:p,normal:new ie,materialIndex:0};fi.getNormal(Wl,Xl,jl,_.normal),m.face=_,m.barycoord=v}return m}class ma extends hs{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],m=[],v=[];let _=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,a,c,2),E("x","z","y",1,-1,e,s,-t,a,c,3),E("x","y","z",1,-1,e,t,s,a,l,4),E("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(d),this.setAttribute("position",new us(p,3)),this.setAttribute("normal",new us(m,3)),this.setAttribute("uv",new us(v,2));function E(w,y,x,L,P,C,z,N,F,X,b){const R=C/F,B=z/X,oe=C/2,J=z/2,ce=N/2,_e=F+1,ne=X+1;let ye=0,H=0;const fe=new ie;for(let le=0;le<ne;le++){const I=le*B-J;for(let re=0;re<_e;re++){const Fe=re*R-oe;fe[w]=Fe*L,fe[y]=I*P,fe[x]=ce,p.push(fe.x,fe.y,fe.z),fe[w]=0,fe[y]=0,fe[x]=N>0?1:-1,m.push(fe.x,fe.y,fe.z),v.push(re/F),v.push(1-le/X),ye+=1}}for(let le=0;le<X;le++)for(let I=0;I<F;I++){const re=_+I+_e*le,Fe=_+I+_e*(le+1),te=_+(I+1)+_e*(le+1),me=_+(I+1)+_e*le;d.push(re,Fe,me),d.push(Fe,te,me),H+=6}f.addGroup(S,H,b),S+=H,_+=ye}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ca(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const a=i[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Rn(i){const e={};for(let t=0;t<i.length;t++){const s=ca(i[t]);for(const a in s)e[a]=s[a]}return e}function xE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const yE={clone:ca,merge:Rn};var SE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Or extends wu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SE,this.fragmentShader=EE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=xE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class e_ extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const br=new ie,_g=new Ct,xg=new Ct;class ei extends e_{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,_g,xg),t.subVectors(xg,_g)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ro*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/d,t-=c.offsetY*s/p,a*=c.width/d,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qs=-90,Ks=1;class ME extends yn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ei(qs,Ks,e,t);a.layers=this.layers,this.add(a);const l=new ei(qs,Ks,e,t);l.layers=this.layers,this.add(l);const c=new ei(qs,Ks,e,t);c.layers=this.layers,this.add(c);const f=new ei(qs,Ks,e,t);f.layers=this.layers,this.add(f);const d=new ei(qs,Ks,e,t);d.layers=this.layers,this.add(d);const p=new ei(qs,Ks,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,d]=t;for(const p of t)this.remove(p);if(e===qi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===vu)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,m]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,d),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(t,m),e.setRenderTarget(v,_,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class t_ extends bn{constructor(e=[],t=oa,s,a,l,c,f,d,p,m){super(e,t,s,a,l,c,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wE extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new t_(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ma(5,5,5),l=new Or({name:"CubemapFromEquirect",uniforms:ca(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:On,blending:Nr});l.uniforms.tEquirect.value=t;const c=new wi(a,l),f=t.minFilter;return t.minFilter===ls&&(t.minFilter=Mi),new ME(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}class to extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class If{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new to,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new to,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new to,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,s),x=this._getHandJoint(p,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=m.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new to;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class RE extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ff=new ie,AE=new ie,CE=new dt;class rs{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Ff.subVectors(s,t).cross(AE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Ff),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||CE.getNormalMatrix(e),a=this.coplanarPoint(Ff).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new rh,bE=new Ct(.5,.5),Kl=new ie;class ah{constructor(e=new rs,t=new rs,s=new rs,a=new rs,l=new rs,c=new rs){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=qi){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],d=a[3],p=a[4],m=a[5],v=a[6],_=a[7],S=a[8],E=a[9],w=a[10],y=a[11],x=a[12],L=a[13],P=a[14],C=a[15];if(s[0].setComponents(d-l,_-p,y-S,C-x).normalize(),s[1].setComponents(d+l,_+p,y+S,C+x).normalize(),s[2].setComponents(d+c,_+m,y+E,C+L).normalize(),s[3].setComponents(d-c,_-m,y-E,C-L).normalize(),s[4].setComponents(d-f,_-v,y-w,C-P).normalize(),t===qi)s[5].setComponents(d+f,_+v,y+w,C+P).normalize();else if(t===vu)s[5].setComponents(f,v,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=bE.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Kl.x=a.normal.x>0?e.max.x:e.min.x,Kl.y=a.normal.y>0?e.max.y:e.min.y,Kl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class n_ extends bn{constructor(e,t,s=cs,a,l,c,f=dn,d=dn,p,m=fo,v=1){if(m!==fo&&m!==ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,a,l,c,f,d,m,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ih(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Tu extends hs{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),d=Math.floor(a),p=f+1,m=d+1,v=e/f,_=t/d,S=[],E=[],w=[],y=[];for(let x=0;x<m;x++){const L=x*_-c;for(let P=0;P<p;P++){const C=P*v-l;E.push(C,-L,0),w.push(0,0,1),y.push(P/f),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let L=0;L<f;L++){const P=L+p*x,C=L+p*(x+1),z=L+1+p*(x+1),N=L+1+p*x;S.push(P,C,N),S.push(C,z,N)}this.setIndex(S),this.setAttribute("position",new us(E,3)),this.setAttribute("normal",new us(w,3)),this.setAttribute("uv",new us(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tu(e.width,e.height,e.widthSegments,e.heightSegments)}}class PE extends wu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LE extends wu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Of={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class DE{constructor(e,t,s){const a=this;let l=!1,c=0,f=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){f++,l===!1&&a.onStart!==void 0&&a.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,v){return p.push(m,v),this},this.removeHandler=function(m){const v=p.indexOf(m);return v!==-1&&p.splice(v,2),this},this.getHandler=function(m){for(let v=0,_=p.length;v<_;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(m))return E}return null}}}const UE=new DE;class oh{constructor(e){this.manager=e!==void 0?e:UE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,l){s.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}oh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zs=new WeakMap;class NE extends oh{constructor(e){super(e)}load(e,t,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Of.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let v=Zs.get(c);v===void 0&&(v=[],Zs.set(c,v)),v.push({onLoad:t,onError:a})}return c}const f=mo("img");function d(){m(),t&&t(this);const v=Zs.get(this)||[];for(let _=0;_<v.length;_++){const S=v[_];S.onLoad&&S.onLoad(this)}Zs.delete(this),l.manager.itemEnd(e)}function p(v){m(),a&&a(v),Of.remove(`image:${e}`);const _=Zs.get(this)||[];for(let S=0;S<_.length;S++){const E=_[S];E.onError&&E.onError(v)}Zs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Of.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class IE extends oh{constructor(e){super(e)}load(e,t,s,a){const l=new bn,c=new NE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,a),l}}class FE extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const kf=new $t,yg=new ie,Sg=new ie;class OE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;yg.setFromMatrixPosition(e.matrixWorld),t.position.copy(yg),Sg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sg),t.updateMatrixWorld(),kf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kf),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class i_ extends e_{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kE extends OE{constructor(){super(new i_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BE extends FE{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new kE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zE extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Eg(i,e,t,s){const a=HE(s);switch(t){case Hv:return i*e;case Gv:return i*e/a.components*a.byteLength;case Qd:return i*e/a.components*a.byteLength;case Wv:return i*e*2/a.components*a.byteLength;case eh:return i*e*2/a.components*a.byteLength;case Vv:return i*e*3/a.components*a.byteLength;case di:return i*e*4/a.components*a.byteLength;case th:return i*e*4/a.components*a.byteLength;case ou:case lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uu:case cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dd:case pd:return Math.max(i,16)*Math.max(e,8)/4;case fd:case hd:return Math.max(i,8)*Math.max(e,8)/2;case md:case gd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _d:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Md:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Td:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fu:case Dd:case Ud:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xv:case Nd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Id:case Fd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function HE(i){switch(i){case Ci:case kv:return{byteLength:1,components:1};case uo:case Bv:case yo:return{byteLength:2,components:1};case Zd:case Jd:return{byteLength:2,components:4};case cs:case Kd:case Yi:return{byteLength:4,components:1};case zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);function r_(){let i=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function VE(i){const e=new WeakMap;function t(f,d){const p=f.array,m=f.usage,v=p.byteLength,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,p,m),f.onUploadCallback();let S;if(p instanceof Float32Array)S=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=i.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=i.SHORT;else if(p instanceof Uint32Array)S=i.UNSIGNED_INT;else if(p instanceof Int32Array)S=i.INT;else if(p instanceof Int8Array)S=i.BYTE;else if(p instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,d,p){const m=d.array,v=d.updateRanges;if(i.bindBuffer(p,f),v.length===0)i.bufferSubData(p,0,m);else{v.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<v.length;S++){const E=v[_],w=v[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++_,v[_]=w)}v.length=_+1;for(let S=0,E=v.length;S<E;S++){const w=v[S];i.bufferSubData(p,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(i.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,d),p.version=f.version}}return{get:a,remove:l,update:c}}var GE=`#ifdef USE_ALPHAHASH
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
}`,mt={alphahash_fragment:GE,alphahash_pars_fragment:WE,alphamap_fragment:XE,alphamap_pars_fragment:jE,alphatest_fragment:$E,alphatest_pars_fragment:YE,aomap_fragment:qE,aomap_pars_fragment:KE,batching_pars_vertex:ZE,batching_vertex:JE,begin_vertex:QE,beginnormal_vertex:eM,bsdfs:tM,iridescence_fragment:nM,bumpmap_pars_fragment:iM,clipping_planes_fragment:rM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:oM,color_fragment:lM,color_pars_fragment:uM,color_pars_vertex:cM,color_vertex:fM,common:dM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:pM,displacementmap_pars_vertex:mM,displacementmap_vertex:gM,emissivemap_fragment:vM,emissivemap_pars_fragment:_M,colorspace_fragment:xM,colorspace_pars_fragment:yM,envmap_fragment:SM,envmap_common_pars_fragment:EM,envmap_pars_fragment:MM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:IM,envmap_vertex:TM,fog_vertex:RM,fog_pars_vertex:AM,fog_fragment:CM,fog_pars_fragment:bM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:LM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:UM,lights_pars_begin:NM,lights_toon_fragment:FM,lights_toon_pars_fragment:OM,lights_phong_fragment:kM,lights_phong_pars_fragment:BM,lights_physical_fragment:zM,lights_physical_pars_fragment:HM,lights_fragment_begin:VM,lights_fragment_maps:GM,lights_fragment_end:WM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:jM,logdepthbuf_pars_vertex:$M,logdepthbuf_vertex:YM,map_fragment:qM,map_pars_fragment:KM,map_particle_fragment:ZM,map_particle_pars_fragment:JM,metalnessmap_fragment:QM,metalnessmap_pars_fragment:ew,morphinstance_vertex:tw,morphcolor_vertex:nw,morphnormal_vertex:iw,morphtarget_pars_vertex:rw,morphtarget_vertex:sw,normal_fragment_begin:aw,normal_fragment_maps:ow,normal_pars_fragment:lw,normal_pars_vertex:uw,normal_vertex:cw,normalmap_pars_fragment:fw,clearcoat_normal_fragment_begin:dw,clearcoat_normal_fragment_maps:hw,clearcoat_pars_fragment:pw,iridescence_pars_fragment:mw,opaque_fragment:gw,packing:vw,premultiplied_alpha_fragment:_w,project_vertex:xw,dithering_fragment:yw,dithering_pars_fragment:Sw,roughnessmap_fragment:Ew,roughnessmap_pars_fragment:Mw,shadowmap_pars_fragment:ww,shadowmap_pars_vertex:Tw,shadowmap_vertex:Rw,shadowmask_pars_fragment:Aw,skinbase_vertex:Cw,skinning_pars_vertex:bw,skinning_vertex:Pw,skinnormal_vertex:Lw,specularmap_fragment:Dw,specularmap_pars_fragment:Uw,tonemapping_fragment:Nw,tonemapping_pars_fragment:Iw,transmission_fragment:Fw,transmission_pars_fragment:Ow,uv_pars_fragment:kw,uv_pars_vertex:Bw,uv_vertex:zw,worldpos_vertex:Hw,background_vert:Vw,background_frag:Gw,backgroundCube_vert:Ww,backgroundCube_frag:Xw,cube_vert:jw,cube_frag:$w,depth_vert:Yw,depth_frag:qw,distanceRGBA_vert:Kw,distanceRGBA_frag:Zw,equirect_vert:Jw,equirect_frag:Qw,linedashed_vert:eT,linedashed_frag:tT,meshbasic_vert:nT,meshbasic_frag:iT,meshlambert_vert:rT,meshlambert_frag:sT,meshmatcap_vert:aT,meshmatcap_frag:oT,meshnormal_vert:lT,meshnormal_frag:uT,meshphong_vert:cT,meshphong_frag:fT,meshphysical_vert:dT,meshphysical_frag:hT,meshtoon_vert:pT,meshtoon_frag:mT,points_vert:gT,points_frag:vT,shadow_vert:_T,shadow_frag:xT,sprite_vert:yT,sprite_frag:ST},Ie={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Si={basic:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Rn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Rn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Rn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Rn([Ie.points,Ie.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Rn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Rn([Ie.common,Ie.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Rn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Rn([Ie.sprite,Ie.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Rn([Ie.common,Ie.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Rn([Ie.lights,Ie.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Si.physical={uniforms:Rn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Zl={r:0,b:0,g:0},ns=new Cn,ET=new $t;function MT(i,e,t,s,a,l,c){const f=new Pt(0);let d=l===!0?0:1,p,m,v=null,_=0,S=null;function E(P){let C=P.isScene===!0?P.background:null;return C&&C.isTexture&&(C=(P.backgroundBlurriness>0?t:e).get(C)),C}function w(P){let C=!1;const z=E(P);z===null?x(f,d):z&&z.isColor&&(x(z,1),C=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(P,C){const z=E(C);z&&(z.isCubeTexture||z.mapping===Mu)?(m===void 0&&(m=new wi(new ma(1,1,1),new Or({name:"BackgroundCubeMaterial",uniforms:ca(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),ns.copy(C.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.material.uniforms.envMap.value=z,m.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(ET.makeRotationFromEuler(ns)),m.material.toneMapped=At.getTransfer(z.colorSpace)!==Dt,(v!==z||_!==z.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,v=z,_=z.version,S=i.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new wi(new Tu(2,2),new Or({name:"BackgroundMaterial",uniforms:ca(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=At.getTransfer(z.colorSpace)!==Dt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||_!==z.version||S!==i.toneMapping)&&(p.material.needsUpdate=!0,v=z,_=z.version,S=i.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,C){P.getRGB(Zl,Qv(i)),s.buffers.color.setClear(Zl.r,Zl.g,Zl.b,C,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,C=1){f.set(P),d=C,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,x(f,d)},render:w,addToRenderList:y,dispose:L}}function wT(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},a=_(null);let l=a,c=!1;function f(R,B,oe,J,ce){let _e=!1;const ne=v(J,oe,B);l!==ne&&(l=ne,p(l.object)),_e=S(R,J,oe,ce),_e&&E(R,J,oe,ce),ce!==null&&e.update(ce,i.ELEMENT_ARRAY_BUFFER),(_e||c)&&(c=!1,C(R,B,oe,J),ce!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function d(){return i.createVertexArray()}function p(R){return i.bindVertexArray(R)}function m(R){return i.deleteVertexArray(R)}function v(R,B,oe){const J=oe.wireframe===!0;let ce=s[R.id];ce===void 0&&(ce={},s[R.id]=ce);let _e=ce[B.id];_e===void 0&&(_e={},ce[B.id]=_e);let ne=_e[J];return ne===void 0&&(ne=_(d()),_e[J]=ne),ne}function _(R){const B=[],oe=[],J=[];for(let ce=0;ce<t;ce++)B[ce]=0,oe[ce]=0,J[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:oe,attributeDivisors:J,object:R,attributes:{},index:null}}function S(R,B,oe,J){const ce=l.attributes,_e=B.attributes;let ne=0;const ye=oe.getAttributes();for(const H in ye)if(ye[H].location>=0){const le=ce[H];let I=_e[H];if(I===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),le===void 0||le.attribute!==I||I&&le.data!==I.data)return!0;ne++}return l.attributesNum!==ne||l.index!==J}function E(R,B,oe,J){const ce={},_e=B.attributes;let ne=0;const ye=oe.getAttributes();for(const H in ye)if(ye[H].location>=0){let le=_e[H];le===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(le=R.instanceColor));const I={};I.attribute=le,le&&le.data&&(I.data=le.data),ce[H]=I,ne++}l.attributes=ce,l.attributesNum=ne,l.index=J}function w(){const R=l.newAttributes;for(let B=0,oe=R.length;B<oe;B++)R[B]=0}function y(R){x(R,0)}function x(R,B){const oe=l.newAttributes,J=l.enabledAttributes,ce=l.attributeDivisors;oe[R]=1,J[R]===0&&(i.enableVertexAttribArray(R),J[R]=1),ce[R]!==B&&(i.vertexAttribDivisor(R,B),ce[R]=B)}function L(){const R=l.newAttributes,B=l.enabledAttributes;for(let oe=0,J=B.length;oe<J;oe++)B[oe]!==R[oe]&&(i.disableVertexAttribArray(oe),B[oe]=0)}function P(R,B,oe,J,ce,_e,ne){ne===!0?i.vertexAttribIPointer(R,B,oe,ce,_e):i.vertexAttribPointer(R,B,oe,J,ce,_e)}function C(R,B,oe,J){w();const ce=J.attributes,_e=oe.getAttributes(),ne=B.defaultAttributeValues;for(const ye in _e){const H=_e[ye];if(H.location>=0){let fe=ce[ye];if(fe===void 0&&(ye==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),ye==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const le=fe.normalized,I=fe.itemSize,re=e.get(fe);if(re===void 0)continue;const Fe=re.buffer,te=re.type,me=re.bytesPerElement,j=te===i.INT||te===i.UNSIGNED_INT||fe.gpuType===Kd;if(fe.isInterleavedBufferAttribute){const de=fe.data,ue=de.stride,De=fe.offset;if(de.isInstancedInterleavedBuffer){for(let Ce=0;Ce<H.locationSize;Ce++)x(H.location+Ce,de.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ce=0;Ce<H.locationSize;Ce++)y(H.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Ce=0;Ce<H.locationSize;Ce++)P(H.location+Ce,I/H.locationSize,te,le,ue*me,(De+I/H.locationSize*Ce)*me,j)}else{if(fe.isInstancedBufferAttribute){for(let de=0;de<H.locationSize;de++)x(H.location+de,fe.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let de=0;de<H.locationSize;de++)y(H.location+de);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let de=0;de<H.locationSize;de++)P(H.location+de,I/H.locationSize,te,le,I*me,I/H.locationSize*de*me,j)}}else if(ne!==void 0){const le=ne[ye];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(H.location,le);break;case 3:i.vertexAttrib3fv(H.location,le);break;case 4:i.vertexAttrib4fv(H.location,le);break;default:i.vertexAttrib1fv(H.location,le)}}}}L()}function z(){X();for(const R in s){const B=s[R];for(const oe in B){const J=B[oe];for(const ce in J)m(J[ce].object),delete J[ce];delete B[oe]}delete s[R]}}function N(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const oe in B){const J=B[oe];for(const ce in J)m(J[ce].object),delete J[ce];delete B[oe]}delete s[R.id]}function F(R){for(const B in s){const oe=s[B];if(oe[R.id]===void 0)continue;const J=oe[R.id];for(const ce in J)m(J[ce].object),delete J[ce];delete oe[R.id]}}function X(){b(),c=!0,l!==a&&(l=a,p(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:b,dispose:z,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}function TT(i,e,t){let s;function a(p){s=p}function l(p,m){i.drawArrays(s,p,m),t.update(m,s,1)}function c(p,m,v){v!==0&&(i.drawArraysInstanced(s,p,m,v),t.update(m,s,v))}function f(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,v);let S=0;for(let E=0;E<v;E++)S+=m[E];t.update(S,s,1)}function d(p,m,v,_){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],m[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,m,0,_,0,v);let E=0;for(let w=0;w<v;w++)E+=m[w]*_[w];t.update(E,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function RT(i,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==di&&s.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const X=F===yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ci&&s.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Yi&&!X)}function d(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=d(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const v=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:C,vertexTextures:z,maxSamples:N}}function AT(i){const e=this;let t=null,s=0,a=!1,l=!1;const c=new rs,f=new dt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||s!==0||a;return a=_,s=v.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=m(v,_,0)},this.setState=function(v,_,S){const E=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,x=i.get(v);if(!a||E===null||E.length===0||l&&!y)l?m(null):p();else{const L=l?0:s,P=L*4;let C=x.clippingState||null;d.value=C,C=m(E,_,P,S);for(let z=0;z!==P;++z)C[z]=t[z];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(v,_,S,E){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=d.value,E!==!0||y===null){const x=S+w*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,C=S;P!==w;++P,C+=4)c.copy(v[P]).applyMatrix4(L,f),c.normal.toArray(y,C),y[C+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function CT(i){let e=new WeakMap;function t(c,f){return f===ld?c.mapping=oa:f===ud&&(c.mapping=la),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===ld||f===ud)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new wE(d.height);return p.fromEquirectangularTexture(i,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const ta=4,Mg=[.125,.215,.35,.446,.526,.582],os=20,Bf=new i_,wg=new Pt;let zf=null,Hf=0,Vf=0,Gf=!1;const ss=(1+Math.sqrt(5))/2,Js=1/ss,Tg=[new ie(-ss,Js,0),new ie(ss,Js,0),new ie(-Js,0,ss),new ie(Js,0,ss),new ie(0,ss,-Js),new ie(0,ss,Js),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],bT=new ie;class Rg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100,l={}){const{size:c=256,position:f=bT}=l;zf=this._renderer.getRenderTarget(),Hf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,s,a,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zf,Hf,Vf),this._renderer.xr.enabled=Gf,e.scissorTest=!1,Jl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oa||e.mapping===la?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zf=this._renderer.getRenderTarget(),Hf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:yo,format:di,colorSpace:ua,depthBuffer:!1},a=Ag(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ag(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PT(l)),this._blurMaterial=LT(l,e,t)}return a}_compileMaterial(e){const t=new wi(this._lodPlanes[0],e);this._renderer.compile(t,Bf)}_sceneToCubeUV(e,t,s,a,l){const d=new ei(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(wg),v.toneMapping=Ki,v.autoClear=!1;const E=new sh({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),w=new wi(new ma,E);let y=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,y=!0):(E.color.copy(wg),y=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[L],l.y,l.z)):P===1?(d.up.set(0,0,p[L]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[L],l.z)):(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[L]));const C=this._cubeSize;Jl(a,P*C,L>2?C:0,C,C),v.setRenderTarget(a),y&&v.render(w,d),v.render(e,d)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=S,v.autoClear=_,e.background=x}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===oa||e.mapping===la;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new wi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Jl(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(c,Bf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Tg[(a-l-1)%Tg.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new wi(this._lodPlanes[a],p),_=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*os-1),w=l/E,y=isFinite(l)?1+Math.floor(m*w):os;y>os&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${os}`);const x=[];let L=0;for(let F=0;F<os;++F){const X=F/w,b=Math.exp(-X*X/2);x.push(b),F===0?L+=b:F<y&&(L+=2*b)}for(let F=0;F<x.length;F++)x[F]=x[F]/L;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:P}=this;_.dTheta.value=E,_.mipInt.value=P-s;const C=this._sizeLods[a],z=3*C*(a>P-ta?a-P+ta:0),N=4*(this._cubeSize-C);Jl(t,z,N,3*C,2*C),d.setRenderTarget(t),d.render(v,Bf)}}function PT(i){const e=[],t=[],s=[];let a=i;const l=i-ta+1+Mg.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let d=1/f;c>i-ta?d=Mg[c-i+ta-1]:c===0&&(d=0),s.push(d);const p=1/(f-2),m=-p,v=1+p,_=[m,m,v,m,v,v,m,m,v,v,m,v],S=6,E=6,w=3,y=2,x=1,L=new Float32Array(w*E*S),P=new Float32Array(y*E*S),C=new Float32Array(x*E*S);for(let N=0;N<S;N++){const F=N%3*2/3-1,X=N>2?0:-1,b=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];L.set(b,w*E*N),P.set(_,y*E*N);const R=[N,N,N,N,N,N];C.set(R,x*E*N)}const z=new hs;z.setAttribute("position",new Ri(L,w)),z.setAttribute("uv",new Ri(P,y)),z.setAttribute("faceIndex",new Ri(C,x)),e.push(z),a>ta&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Ag(i,e,t){const s=new fs(i,e,t);return s.texture.mapping=Mu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Jl(i,e,t,s,a){i.viewport.set(e,t,s,a),i.scissor.set(e,t,s,a)}function LT(i,e,t){const s=new Float32Array(os),a=new ie(0,1,0);return new Or({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:lh(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Cg(){return new Or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function bg(){return new Or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function lh(){return`

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
	`}function DT(i){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const d=f.mapping,p=d===ld||d===ud,m=d===oa||d===la;if(p||m){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new Rg(i)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||m&&S&&a(S)?(t===null&&(t=new Rg(i)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function UT(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&ia("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function NT(i,e,t,s){const a={},l=new WeakMap;function c(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete a[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(v,_){return a[_.id]===!0||(_.addEventListener("dispose",c),a[_.id]=!0,t.memory.geometries++),_}function d(v){const _=v.attributes;for(const S in _)e.update(_[S],i.ARRAY_BUFFER)}function p(v){const _=[],S=v.index,E=v.attributes.position;let w=0;if(S!==null){const L=S.array;w=S.version;for(let P=0,C=L.length;P<C;P+=3){const z=L[P+0],N=L[P+1],F=L[P+2];_.push(z,N,N,F,F,z)}}else if(E!==void 0){const L=E.array;w=E.version;for(let P=0,C=L.length/3-1;P<C;P+=3){const z=P+0,N=P+1,F=P+2;_.push(z,N,N,F,F,z)}}else return;const y=new($v(_)?Jv:Zv)(_,1);y.version=w;const x=l.get(v);x&&e.remove(x),l.set(v,y)}function m(v){const _=l.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function IT(i,e,t){let s;function a(_){s=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function d(_,S){i.drawElements(s,S,l,_*c),t.update(S,s,1)}function p(_,S,E){E!==0&&(i.drawElementsInstanced(s,S,l,_*c,E),t.update(S,s,E))}function m(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,_,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];t.update(y,s,1)}function v(_,S,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)p(_[x]/c,S[x],w[x]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,_,0,w,0,E);let x=0;for(let L=0;L<E;L++)x+=S[L]*w[L];t.update(x,s,1)}}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function FT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=f*(l/3);break;case i.LINES:t.lines+=f*(l/2);break;case i.LINE_STRIP:t.lines+=f*(l-1);break;case i.LINE_LOOP:t.lines+=f*l;break;case i.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function OT(i,e,t){const s=new WeakMap,a=new jt;function l(c,f,d){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let _=s.get(f);if(_===void 0||_.count!==v){let b=function(){F.dispose(),s.delete(f),f.removeEventListener("dispose",b)};_!==void 0&&_.texture.dispose();const S=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;S===!0&&(P=1),E===!0&&(P=2),w===!0&&(P=3);let C=f.attributes.position.count*P,z=1;C>e.maxTextureSize&&(z=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const N=new Float32Array(C*z*4*v),F=new Yv(N,C,z,v);F.type=Yi,F.needsUpdate=!0;const X=P*4;for(let R=0;R<v;R++){const B=y[R],oe=x[R],J=L[R],ce=C*z*4*R;for(let _e=0;_e<B.count;_e++){const ne=_e*X;S===!0&&(a.fromBufferAttribute(B,_e),N[ce+ne+0]=a.x,N[ce+ne+1]=a.y,N[ce+ne+2]=a.z,N[ce+ne+3]=0),E===!0&&(a.fromBufferAttribute(oe,_e),N[ce+ne+4]=a.x,N[ce+ne+5]=a.y,N[ce+ne+6]=a.z,N[ce+ne+7]=0),w===!0&&(a.fromBufferAttribute(J,_e),N[ce+ne+8]=a.x,N[ce+ne+9]=a.y,N[ce+ne+10]=a.z,N[ce+ne+11]=J.itemSize===4?a.w:1)}}_={count:v,texture:F,size:new Ct(C,z)},s.set(f,_),f.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let S=0;for(let w=0;w<p.length;w++)S+=p[w];const E=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:l}}function kT(i,e,t,s){let a=new WeakMap;function l(d){const p=s.render.frame,m=d.geometry,v=e.get(d,m);if(a.get(v)!==p&&(e.update(v),a.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==p&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),a.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return v}function c(){a=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const s_=new bn,Pg=new n_(1,1),a_=new Yv,o_=new aE,l_=new t_,Lg=[],Dg=[],Ug=new Float32Array(16),Ng=new Float32Array(9),Ig=new Float32Array(4);function ga(i,e,t){const s=i[0];if(s<=0||s>0)return i;const a=e*t;let l=Lg[a];if(l===void 0&&(l=new Float32Array(a),Lg[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,i[c].toArray(l,f)}return l}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Ru(i,e){let t=Dg[e];t===void 0&&(t=new Int32Array(e),Dg[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function BT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function HT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function VT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function GT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,s))return;Ig.set(s),i.uniformMatrix2fv(this.addr,!1,Ig),en(t,s)}}function WT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,s))return;Ng.set(s),i.uniformMatrix3fv(this.addr,!1,Ng),en(t,s)}}function XT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,s))return;Ug.set(s),i.uniformMatrix4fv(this.addr,!1,Ug),en(t,s)}}function jT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $T(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function YT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function qT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function KT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ZT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function JT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function QT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function e1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a);let l;this.type===i.SAMPLER_2D_SHADOW?(Pg.compareFunction=jv,l=Pg):l=s_,t.setTexture2D(e||l,a)}function t1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||o_,a)}function n1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||l_,a)}function i1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||a_,a)}function r1(i){switch(i){case 5126:return BT;case 35664:return zT;case 35665:return HT;case 35666:return VT;case 35674:return GT;case 35675:return WT;case 35676:return XT;case 5124:case 35670:return jT;case 35667:case 35671:return $T;case 35668:case 35672:return YT;case 35669:case 35673:return qT;case 5125:return KT;case 36294:return ZT;case 36295:return JT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}function s1(i,e){i.uniform1fv(this.addr,e)}function a1(i,e){const t=ga(e,this.size,2);i.uniform2fv(this.addr,t)}function o1(i,e){const t=ga(e,this.size,3);i.uniform3fv(this.addr,t)}function l1(i,e){const t=ga(e,this.size,4);i.uniform4fv(this.addr,t)}function u1(i,e){const t=ga(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function c1(i,e){const t=ga(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function f1(i,e){const t=ga(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function d1(i,e){i.uniform1iv(this.addr,e)}function h1(i,e){i.uniform2iv(this.addr,e)}function p1(i,e){i.uniform3iv(this.addr,e)}function m1(i,e){i.uniform4iv(this.addr,e)}function g1(i,e){i.uniform1uiv(this.addr,e)}function v1(i,e){i.uniform2uiv(this.addr,e)}function _1(i,e){i.uniform3uiv(this.addr,e)}function x1(i,e){i.uniform4uiv(this.addr,e)}function y1(i,e,t){const s=this.cache,a=e.length,l=Ru(t,a);Qt(s,l)||(i.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||s_,l[c])}function S1(i,e,t){const s=this.cache,a=e.length,l=Ru(t,a);Qt(s,l)||(i.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||o_,l[c])}function E1(i,e,t){const s=this.cache,a=e.length,l=Ru(t,a);Qt(s,l)||(i.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||l_,l[c])}function M1(i,e,t){const s=this.cache,a=e.length,l=Ru(t,a);Qt(s,l)||(i.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||a_,l[c])}function w1(i){switch(i){case 5126:return s1;case 35664:return a1;case 35665:return o1;case 35666:return l1;case 35674:return u1;case 35675:return c1;case 35676:return f1;case 5124:case 35670:return d1;case 35667:case 35671:return h1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return v1;case 36295:return _1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return M1}}class T1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=r1(t.type)}}class R1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w1(t.type)}}class A1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const Wf=/(\w+)(\])?(\[|\.)?/g;function Fg(i,e){i.seq.push(e),i.map[e.id]=e}function C1(i,e,t){const s=i.name,a=s.length;for(Wf.lastIndex=0;;){const l=Wf.exec(s),c=Wf.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===a){Fg(t,p===void 0?new T1(f,i,e):new R1(f,i,e));break}else{let v=t.map[f];v===void 0&&(v=new A1(f),Fg(t,v)),t=v}}}class du{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);C1(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=s[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function Og(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const b1=37297;let P1=0;function L1(i,e){const t=i.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const kg=new dt;function D1(i){At._getMatrix(kg,At.workingColorSpace,i);const e=`mat3( ${kg.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(i)){case gu:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bg(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+L1(i.getShaderSource(e),c)}else return a}function U1(i,e){const t=D1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function N1(i,e){let t;switch(e){case mS:t="Linear";break;case gS:t="Reinhard";break;case vS:t="Cineon";break;case _S:t="ACESFilmic";break;case yS:t="AgX";break;case SS:t="Neutral";break;case xS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ql=new ie;function I1(){At.getLuminanceCoefficients(Ql);const i=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function O1(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function k1(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=i.getActiveAttrib(e,a),c=l.name;let f=1;l.type===i.FLOAT_MAT2&&(f=2),l.type===i.FLOAT_MAT3&&(f=3),l.type===i.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:f}}return t}function no(i){return i!==""}function zg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(i){return i.replace(B1,H1)}const z1=new Map;function H1(i,e){let t=mt[e];if(t===void 0){const s=z1.get(e);if(s!==void 0)t=mt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Od(t)}const V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vg(i){return i.replace(V1,G1)}function G1(i,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Gg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function W1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Iv?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yy?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function X1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oa:case la:e="ENVMAP_TYPE_CUBE";break;case Mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j1(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===la&&(e="ENVMAP_MODE_REFRACTION"),e}function $1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fv:e="ENVMAP_BLENDING_MULTIPLY";break;case hS:e="ENVMAP_BLENDING_MIX";break;case pS:e="ENVMAP_BLENDING_ADD";break}return e}function Y1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function q1(i,e,t,s){const a=i.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=W1(t),p=X1(t),m=j1(t),v=$1(t),_=Y1(t),S=F1(t),E=O1(l),w=a.createProgram();let y,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(no).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(no).join(`
`),x.length>0&&(x+=`
`)):(y=[Gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),x=[Gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?mt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?N1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,U1("linearToOutputTexel",t.outputColorSpace),I1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),c=Od(c),c=zg(c,t),c=Hg(c,t),f=Od(f),f=zg(f,t),f=Hg(f,t),c=Vg(c),f=Vg(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=L+y+c,C=L+x+f,z=Og(a,a.VERTEX_SHADER,P),N=Og(a,a.FRAGMENT_SHADER,C);a.attachShader(w,z),a.attachShader(w,N),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(B){if(i.debug.checkShaderErrors){const oe=a.getProgramInfoLog(w).trim(),J=a.getShaderInfoLog(z).trim(),ce=a.getShaderInfoLog(N).trim();let _e=!0,ne=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(_e=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,w,z,N);else{const ye=Bg(a,z,"vertex"),H=Bg(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+oe+`
`+ye+`
`+H)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(J===""||ce==="")&&(ne=!1);ne&&(B.diagnostics={runnable:_e,programLog:oe,vertexShader:{log:J,prefix:y},fragmentShader:{log:ce,prefix:x}})}a.deleteShader(z),a.deleteShader(N),X=new du(a,w),b=k1(a,w)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,b1)),R},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=N,this}let K1=0;class Z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new J1(e),t.set(e,s)),s}}class J1{constructor(e){this.id=K1++,this.code=e,this.usedTimes=0}}function Q1(i,e,t,s,a,l,c){const f=new qv,d=new Z1,p=new Set,m=[],v=a.logarithmicDepthBuffer,_=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function y(b,R,B,oe,J){const ce=oe.fog,_e=J.geometry,ne=b.isMeshStandardMaterial?oe.environment:null,ye=(b.isMeshStandardMaterial?t:e).get(b.envMap||ne),H=ye&&ye.mapping===Mu?ye.image.height:null,fe=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const le=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,I=le!==void 0?le.length:0;let re=0;_e.morphAttributes.position!==void 0&&(re=1),_e.morphAttributes.normal!==void 0&&(re=2),_e.morphAttributes.color!==void 0&&(re=3);let Fe,te,me,j;if(fe){const ft=Si[fe];Fe=ft.vertexShader,te=ft.fragmentShader}else Fe=b.vertexShader,te=b.fragmentShader,d.update(b),me=d.getVertexShaderID(b),j=d.getFragmentShaderID(b);const de=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),De=J.isInstancedMesh===!0,Ce=J.isBatchedMesh===!0,nt=!!b.map,gt=!!b.matcap,ct=!!ye,O=!!b.aoMap,Wt=!!b.lightMap,vt=!!b.bumpMap,Mt=!!b.normalMap,We=!!b.displacementMap,ht=!!b.emissiveMap,Ke=!!b.metalnessMap,it=!!b.roughnessMap,It=b.anisotropy>0,D=b.clearcoat>0,T=b.dispersion>0,ee=b.iridescence>0,ve=b.sheen>0,xe=b.transmission>0,he=It&&!!b.anisotropyMap,$e=D&&!!b.clearcoatMap,Pe=D&&!!b.clearcoatNormalMap,ze=D&&!!b.clearcoatRoughnessMap,Ye=ee&&!!b.iridescenceMap,Ee=ee&&!!b.iridescenceThicknessMap,Oe=ve&&!!b.sheenColorMap,tt=ve&&!!b.sheenRoughnessMap,Je=!!b.specularMap,Le=!!b.specularColorMap,at=!!b.specularIntensityMap,V=xe&&!!b.transmissionMap,Ue=xe&&!!b.thicknessMap,pe=!!b.gradientMap,be=!!b.alphaMap,Se=b.alphaTest>0,ge=!!b.alphaHash,ke=!!b.extensions;let Qe=Ki;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Qe=i.toneMapping);const Et={shaderID:fe,shaderType:b.type,shaderName:b.name,vertexShader:Fe,fragmentShader:te,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Ce,batchingColor:Ce&&J._colorsTexture!==null,instancing:De,instancingColor:De&&J.instanceColor!==null,instancingMorph:De&&J.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ua,alphaToCoverage:!!b.alphaToCoverage,map:nt,matcap:gt,envMap:ct,envMapMode:ct&&ye.mapping,envMapCubeUVHeight:H,aoMap:O,lightMap:Wt,bumpMap:vt,normalMap:Mt,displacementMap:_&&We,emissiveMap:ht,normalMapObjectSpace:Mt&&b.normalMapType===RS,normalMapTangentSpace:Mt&&b.normalMapType===TS,metalnessMap:Ke,roughnessMap:it,anisotropy:It,anisotropyMap:he,clearcoat:D,clearcoatMap:$e,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ze,dispersion:T,iridescence:ee,iridescenceMap:Ye,iridescenceThicknessMap:Ee,sheen:ve,sheenColorMap:Oe,sheenRoughnessMap:tt,specularMap:Je,specularColorMap:Le,specularIntensityMap:at,transmission:xe,transmissionMap:V,thicknessMap:Ue,gradientMap:pe,opaque:b.transparent===!1&&b.blending===na&&b.alphaToCoverage===!1,alphaMap:be,alphaTest:Se,alphaHash:ge,combine:b.combine,mapUv:nt&&w(b.map.channel),aoMapUv:O&&w(b.aoMap.channel),lightMapUv:Wt&&w(b.lightMap.channel),bumpMapUv:vt&&w(b.bumpMap.channel),normalMapUv:Mt&&w(b.normalMap.channel),displacementMapUv:We&&w(b.displacementMap.channel),emissiveMapUv:ht&&w(b.emissiveMap.channel),metalnessMapUv:Ke&&w(b.metalnessMap.channel),roughnessMapUv:it&&w(b.roughnessMap.channel),anisotropyMapUv:he&&w(b.anisotropyMap.channel),clearcoatMapUv:$e&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:tt&&w(b.sheenRoughnessMap.channel),specularMapUv:Je&&w(b.specularMap.channel),specularColorMapUv:Le&&w(b.specularColorMap.channel),specularIntensityMapUv:at&&w(b.specularIntensityMap.channel),transmissionMapUv:V&&w(b.transmissionMap.channel),thicknessMapUv:Ue&&w(b.thicknessMap.channel),alphaMapUv:be&&w(b.alphaMap.channel),vertexTangents:!!_e.attributes.tangent&&(Mt||It),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!_e.attributes.uv&&(nt||be),fog:!!ce,useFog:b.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:ue,skinning:J.isSkinnedMesh===!0,morphTargets:_e.morphAttributes.position!==void 0,morphNormals:_e.morphAttributes.normal!==void 0,morphColors:_e.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:nt&&b.map.isVideoTexture===!0&&At.getTransfer(b.map.colorSpace)===Dt,decodeVideoTextureEmissive:ht&&b.emissiveMap.isVideoTexture===!0&&At.getTransfer(b.emissiveMap.colorSpace)===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ei,flipSided:b.side===On,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&b.extensions.multiDraw===!0||Ce)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Et.vertexUv1s=p.has(1),Et.vertexUv2s=p.has(2),Et.vertexUv3s=p.has(3),p.clear(),Et}function x(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)R.push(B),R.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(L(R,b),P(R,b),R.push(i.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function L(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function P(b,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function C(b){const R=E[b.type];let B;if(R){const oe=Si[R];B=yE.clone(oe.uniforms)}else B=b.uniforms;return B}function z(b,R){let B;for(let oe=0,J=m.length;oe<J;oe++){const ce=m[oe];if(ce.cacheKey===R){B=ce,++B.usedTimes;break}}return B===void 0&&(B=new q1(i,R,b,l),m.push(B)),B}function N(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),b.destroy()}}function F(b){d.remove(b)}function X(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:z,releaseProgram:N,releaseShaderCache:F,programs:m,dispose:X}}function eR(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let f=i.get(c);return f===void 0&&(f={},i.set(c,f)),f}function s(c){i.delete(c)}function a(c,f,d){i.get(c)[f]=d}function l(){i=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function tR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xg(){const i=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(v,_,S,E,w,y){let x=i[e];return x===void 0?(x={id:v.id,object:v,geometry:_,material:S,groupOrder:E,renderOrder:v.renderOrder,z:w,group:y},i[e]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=w,x.group=y),e++,x}function f(v,_,S,E,w,y){const x=c(v,_,S,E,w,y);S.transmission>0?s.push(x):S.transparent===!0?a.push(x):t.push(x)}function d(v,_,S,E,w,y){const x=c(v,_,S,E,w,y);S.transmission>0?s.unshift(x):S.transparent===!0?a.unshift(x):t.unshift(x)}function p(v,_){t.length>1&&t.sort(v||tR),s.length>1&&s.sort(_||Wg),a.length>1&&a.sort(_||Wg)}function m(){for(let v=e,_=i.length;v<_;v++){const S=i[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:d,finish:m,sort:p}}function nR(){let i=new WeakMap;function e(s,a){const l=i.get(s);let c;return l===void 0?(c=new Xg,i.set(s,[c])):a>=l.length?(c=new Xg,l.push(c)):c=l[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function iR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Pt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return i[e.id]=t,t}}}function rR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sR=0;function aR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function oR(i){const e=new iR,t=rR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ie);const a=new ie,l=new $t,c=new $t;function f(p){let m=0,v=0,_=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let S=0,E=0,w=0,y=0,x=0,L=0,P=0,C=0,z=0,N=0,F=0;p.sort(aR);for(let b=0,R=p.length;b<R;b++){const B=p[b],oe=B.color,J=B.intensity,ce=B.distance,_e=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=oe.r*J,v+=oe.g*J,_+=oe.b*J;else if(B.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(B.sh.coefficients[ne],J);F++}else if(B.isDirectionalLight){const ne=e.get(B);if(ne.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ye=B.shadow,H=t.get(B);H.shadowIntensity=ye.intensity,H.shadowBias=ye.bias,H.shadowNormalBias=ye.normalBias,H.shadowRadius=ye.radius,H.shadowMapSize=ye.mapSize,s.directionalShadow[S]=H,s.directionalShadowMap[S]=_e,s.directionalShadowMatrix[S]=B.shadow.matrix,L++}s.directional[S]=ne,S++}else if(B.isSpotLight){const ne=e.get(B);ne.position.setFromMatrixPosition(B.matrixWorld),ne.color.copy(oe).multiplyScalar(J),ne.distance=ce,ne.coneCos=Math.cos(B.angle),ne.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ne.decay=B.decay,s.spot[w]=ne;const ye=B.shadow;if(B.map&&(s.spotLightMap[z]=B.map,z++,ye.updateMatrices(B),B.castShadow&&N++),s.spotLightMatrix[w]=ye.matrix,B.castShadow){const H=t.get(B);H.shadowIntensity=ye.intensity,H.shadowBias=ye.bias,H.shadowNormalBias=ye.normalBias,H.shadowRadius=ye.radius,H.shadowMapSize=ye.mapSize,s.spotShadow[w]=H,s.spotShadowMap[w]=_e,C++}w++}else if(B.isRectAreaLight){const ne=e.get(B);ne.color.copy(oe).multiplyScalar(J),ne.halfWidth.set(B.width*.5,0,0),ne.halfHeight.set(0,B.height*.5,0),s.rectArea[y]=ne,y++}else if(B.isPointLight){const ne=e.get(B);if(ne.color.copy(B.color).multiplyScalar(B.intensity),ne.distance=B.distance,ne.decay=B.decay,B.castShadow){const ye=B.shadow,H=t.get(B);H.shadowIntensity=ye.intensity,H.shadowBias=ye.bias,H.shadowNormalBias=ye.normalBias,H.shadowRadius=ye.radius,H.shadowMapSize=ye.mapSize,H.shadowCameraNear=ye.camera.near,H.shadowCameraFar=ye.camera.far,s.pointShadow[E]=H,s.pointShadowMap[E]=_e,s.pointShadowMatrix[E]=B.shadow.matrix,P++}s.point[E]=ne,E++}else if(B.isHemisphereLight){const ne=e.get(B);ne.skyColor.copy(B.color).multiplyScalar(J),ne.groundColor.copy(B.groundColor).multiplyScalar(J),s.hemi[x]=ne,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=v,s.ambient[2]=_;const X=s.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==w||X.rectAreaLength!==y||X.hemiLength!==x||X.numDirectionalShadows!==L||X.numPointShadows!==P||X.numSpotShadows!==C||X.numSpotMaps!==z||X.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=y,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=C+z-N,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=F,X.directionalLength=S,X.pointLength=E,X.spotLength=w,X.rectAreaLength=y,X.hemiLength=x,X.numDirectionalShadows=L,X.numPointShadows=P,X.numSpotShadows=C,X.numSpotMaps=z,X.numLightProbes=F,s.version=sR++)}function d(p,m){let v=0,_=0,S=0,E=0,w=0;const y=m.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const P=p[x];if(P.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(P.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const C=s.point[_];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),_++}else if(P.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:f,setupView:d,state:s}}function jg(i){const e=new oR(i),t=[],s=[];function a(m){p.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function lR(i){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new jg(i),e.set(a,[f])):l>=c.length?(f=new jg(i),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const uR=`void main() {
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
}`;function fR(i,e,t){let s=new ah;const a=new Ct,l=new Ct,c=new jt,f=new PE({depthPacking:wS}),d=new LE,p={},m=t.maxTextureSize,v={[Fr]:On,[On]:Fr,[Ei]:Ei},_=new Or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:uR,fragmentShader:cR}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new hs;E.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new wi(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iv;let x=this.type;this.render=function(N,F,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const b=i.getRenderTarget(),R=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),oe=i.state;oe.setBlending(Nr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const J=x!==Xi&&this.type===Xi,ce=x===Xi&&this.type!==Xi;for(let _e=0,ne=N.length;_e<ne;_e++){const ye=N[_e],H=ye.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ye,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const fe=H.getFrameExtents();if(a.multiply(fe),l.copy(H.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/fe.x),a.x=l.x*fe.x,H.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/fe.y),a.y=l.y*fe.y,H.mapSize.y=l.y)),H.map===null||J===!0||ce===!0){const I=this.type!==Xi?{minFilter:dn,magFilter:dn}:{};H.map!==null&&H.map.dispose(),H.map=new fs(a.x,a.y,I),H.map.texture.name=ye.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const le=H.getViewportCount();for(let I=0;I<le;I++){const re=H.getViewport(I);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),oe.viewport(c),H.updateMatrices(ye,I),s=H.getFrustum(),C(F,X,H.camera,ye,this.type)}H.isPointLightShadow!==!0&&this.type===Xi&&L(H,X),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,i.setRenderTarget(b,R,B)};function L(N,F){const X=e.update(w);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new fs(a.x,a.y)),_.uniforms.shadow_pass.value=N.map.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(F,null,X,_,w,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(F,null,X,S,w,null)}function P(N,F,X,b){let R=null;const B=X.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)R=B;else if(R=X.isPointLight===!0?d:f,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const oe=R.uuid,J=F.uuid;let ce=p[oe];ce===void 0&&(ce={},p[oe]=ce);let _e=ce[J];_e===void 0&&(_e=R.clone(),ce[J]=_e,F.addEventListener("dispose",z)),R=_e}if(R.visible=F.visible,R.wireframe=F.wireframe,b===Xi?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:v[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=i.properties.get(R);oe.light=X}return R}function C(N,F,X,b,R){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===Xi)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,N.matrixWorld);const J=e.update(N),ce=N.material;if(Array.isArray(ce)){const _e=J.groups;for(let ne=0,ye=_e.length;ne<ye;ne++){const H=_e[ne],fe=ce[H.materialIndex];if(fe&&fe.visible){const le=P(N,fe,b,R);N.onBeforeShadow(i,N,F,X,J,le,H),i.renderBufferDirect(X,null,J,le,N,H),N.onAfterShadow(i,N,F,X,J,le,H)}}}else if(ce.visible){const _e=P(N,ce,b,R);N.onBeforeShadow(i,N,F,X,J,_e,null),i.renderBufferDirect(X,null,J,_e,N,null),N.onAfterShadow(i,N,F,X,J,_e,null)}}const oe=N.children;for(let J=0,ce=oe.length;J<ce;J++)C(oe[J],F,X,b,R)}function z(N){N.target.removeEventListener("dispose",z);for(const X in p){const b=p[X],R=N.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const dR={[td]:nd,[id]:ad,[rd]:od,[aa]:sd,[nd]:td,[ad]:id,[od]:rd,[sd]:aa};function hR(i,e){function t(){let V=!1;const Ue=new jt;let pe=null;const be=new jt(0,0,0,0);return{setMask:function(Se){pe!==Se&&!V&&(i.colorMask(Se,Se,Se,Se),pe=Se)},setLocked:function(Se){V=Se},setClear:function(Se,ge,ke,Qe,Et){Et===!0&&(Se*=Qe,ge*=Qe,ke*=Qe),Ue.set(Se,ge,ke,Qe),be.equals(Ue)===!1&&(i.clearColor(Se,ge,ke,Qe),be.copy(Ue))},reset:function(){V=!1,pe=null,be.set(-1,0,0,0)}}}function s(){let V=!1,Ue=!1,pe=null,be=null,Se=null;return{setReversed:function(ge){if(Ue!==ge){const ke=e.get("EXT_clip_control");ge?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Ue=ge;const Qe=Se;Se=null,this.setClear(Qe)}},getReversed:function(){return Ue},setTest:function(ge){ge?de(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(ge){pe!==ge&&!V&&(i.depthMask(ge),pe=ge)},setFunc:function(ge){if(Ue&&(ge=dR[ge]),be!==ge){switch(ge){case td:i.depthFunc(i.NEVER);break;case nd:i.depthFunc(i.ALWAYS);break;case id:i.depthFunc(i.LESS);break;case aa:i.depthFunc(i.LEQUAL);break;case rd:i.depthFunc(i.EQUAL);break;case sd:i.depthFunc(i.GEQUAL);break;case ad:i.depthFunc(i.GREATER);break;case od:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=ge}},setLocked:function(ge){V=ge},setClear:function(ge){Se!==ge&&(Ue&&(ge=1-ge),i.clearDepth(ge),Se=ge)},reset:function(){V=!1,pe=null,be=null,Se=null,Ue=!1}}}function a(){let V=!1,Ue=null,pe=null,be=null,Se=null,ge=null,ke=null,Qe=null,Et=null;return{setTest:function(ft){V||(ft?de(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(ft){Ue!==ft&&!V&&(i.stencilMask(ft),Ue=ft)},setFunc:function(ft,Pn,Sn){(pe!==ft||be!==Pn||Se!==Sn)&&(i.stencilFunc(ft,Pn,Sn),pe=ft,be=Pn,Se=Sn)},setOp:function(ft,Pn,Sn){(ge!==ft||ke!==Pn||Qe!==Sn)&&(i.stencilOp(ft,Pn,Sn),ge=ft,ke=Pn,Qe=Sn)},setLocked:function(ft){V=ft},setClear:function(ft){Et!==ft&&(i.clearStencil(ft),Et=ft)},reset:function(){V=!1,Ue=null,pe=null,be=null,Se=null,ge=null,ke=null,Qe=null,Et=null}}}const l=new t,c=new s,f=new a,d=new WeakMap,p=new WeakMap;let m={},v={},_=new WeakMap,S=[],E=null,w=!1,y=null,x=null,L=null,P=null,C=null,z=null,N=null,F=new Pt(0,0,0),X=0,b=!1,R=null,B=null,oe=null,J=null,ce=null;const _e=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ye=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(ye=parseFloat(/^WebGL (\d)/.exec(H)[1]),ne=ye>=1):H.indexOf("OpenGL ES")!==-1&&(ye=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ne=ye>=2);let fe=null,le={};const I=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),Fe=new jt().fromArray(I),te=new jt().fromArray(re);function me(V,Ue,pe,be){const Se=new Uint8Array(4),ge=i.createTexture();i.bindTexture(V,ge),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<pe;ke++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Ue,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(Ue+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return ge}const j={};j[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),de(i.DEPTH_TEST),c.setFunc(aa),vt(!1),Mt(qm),de(i.CULL_FACE),O(Nr);function de(V){m[V]!==!0&&(i.enable(V),m[V]=!0)}function ue(V){m[V]!==!1&&(i.disable(V),m[V]=!1)}function De(V,Ue){return v[V]!==Ue?(i.bindFramebuffer(V,Ue),v[V]=Ue,V===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Ue),V===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Ce(V,Ue){let pe=S,be=!1;if(V){pe=_.get(Ue),pe===void 0&&(pe=[],_.set(Ue,pe));const Se=V.textures;if(pe.length!==Se.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,ke=Se.length;ge<ke;ge++)pe[ge]=i.COLOR_ATTACHMENT0+ge;pe.length=Se.length,be=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,be=!0);be&&i.drawBuffers(pe)}function nt(V){return E!==V?(i.useProgram(V),E=V,!0):!1}const gt={[as]:i.FUNC_ADD,[Ky]:i.FUNC_SUBTRACT,[Zy]:i.FUNC_REVERSE_SUBTRACT};gt[Jy]=i.MIN,gt[Qy]=i.MAX;const ct={[eS]:i.ZERO,[tS]:i.ONE,[nS]:i.SRC_COLOR,[Qf]:i.SRC_ALPHA,[lS]:i.SRC_ALPHA_SATURATE,[aS]:i.DST_COLOR,[rS]:i.DST_ALPHA,[iS]:i.ONE_MINUS_SRC_COLOR,[ed]:i.ONE_MINUS_SRC_ALPHA,[oS]:i.ONE_MINUS_DST_COLOR,[sS]:i.ONE_MINUS_DST_ALPHA,[uS]:i.CONSTANT_COLOR,[cS]:i.ONE_MINUS_CONSTANT_COLOR,[fS]:i.CONSTANT_ALPHA,[dS]:i.ONE_MINUS_CONSTANT_ALPHA};function O(V,Ue,pe,be,Se,ge,ke,Qe,Et,ft){if(V===Nr){w===!0&&(ue(i.BLEND),w=!1);return}if(w===!1&&(de(i.BLEND),w=!0),V!==qy){if(V!==y||ft!==b){if((x!==as||C!==as)&&(i.blendEquation(i.FUNC_ADD),x=as,C=as),ft)switch(V){case na:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Km:i.blendFunc(i.ONE,i.ONE);break;case Zm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jm:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case na:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Km:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}L=null,P=null,z=null,N=null,F.set(0,0,0),X=0,y=V,b=ft}return}Se=Se||Ue,ge=ge||pe,ke=ke||be,(Ue!==x||Se!==C)&&(i.blendEquationSeparate(gt[Ue],gt[Se]),x=Ue,C=Se),(pe!==L||be!==P||ge!==z||ke!==N)&&(i.blendFuncSeparate(ct[pe],ct[be],ct[ge],ct[ke]),L=pe,P=be,z=ge,N=ke),(Qe.equals(F)===!1||Et!==X)&&(i.blendColor(Qe.r,Qe.g,Qe.b,Et),F.copy(Qe),X=Et),y=V,b=!1}function Wt(V,Ue){V.side===Ei?ue(i.CULL_FACE):de(i.CULL_FACE);let pe=V.side===On;Ue&&(pe=!pe),vt(pe),V.blending===na&&V.transparent===!1?O(Nr):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const be=V.stencilWrite;f.setTest(be),be&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ht(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(V){R!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),R=V)}function Mt(V){V!==jy?(de(i.CULL_FACE),V!==B&&(V===qm?i.cullFace(i.BACK):V===$y?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),B=V}function We(V){V!==oe&&(ne&&i.lineWidth(V),oe=V)}function ht(V,Ue,pe){V?(de(i.POLYGON_OFFSET_FILL),(J!==Ue||ce!==pe)&&(i.polygonOffset(Ue,pe),J=Ue,ce=pe)):ue(i.POLYGON_OFFSET_FILL)}function Ke(V){V?de(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function it(V){V===void 0&&(V=i.TEXTURE0+_e-1),fe!==V&&(i.activeTexture(V),fe=V)}function It(V,Ue,pe){pe===void 0&&(fe===null?pe=i.TEXTURE0+_e-1:pe=fe);let be=le[pe];be===void 0&&(be={type:void 0,texture:void 0},le[pe]=be),(be.type!==V||be.texture!==Ue)&&(fe!==pe&&(i.activeTexture(pe),fe=pe),i.bindTexture(V,Ue||j[V]),be.type=V,be.texture=Ue)}function D(){const V=le[fe];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ee(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(V){Fe.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Fe.copy(V))}function tt(V){te.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),te.copy(V))}function Je(V,Ue){let pe=p.get(Ue);pe===void 0&&(pe=new WeakMap,p.set(Ue,pe));let be=pe.get(V);be===void 0&&(be=i.getUniformBlockIndex(Ue,V.name),pe.set(V,be))}function Le(V,Ue){const be=p.get(Ue).get(V);d.get(Ue)!==be&&(i.uniformBlockBinding(Ue,be,V.__bindingPointIndex),d.set(Ue,be))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},fe=null,le={},v={},_=new WeakMap,S=[],E=null,w=!1,y=null,x=null,L=null,P=null,C=null,z=null,N=null,F=new Pt(0,0,0),X=0,b=!1,R=null,B=null,oe=null,J=null,ce=null,Fe.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:de,disable:ue,bindFramebuffer:De,drawBuffers:Ce,useProgram:nt,setBlending:O,setMaterial:Wt,setFlipSided:vt,setCullFace:Mt,setLineWidth:We,setPolygonOffset:ht,setScissorTest:Ke,activeTexture:it,bindTexture:It,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:ee,texImage2D:Ye,texImage3D:Ee,updateUBOMapping:Je,uniformBlockBinding:Le,texStorage2D:Pe,texStorage3D:ze,texSubImage2D:ve,texSubImage3D:xe,compressedTexSubImage2D:he,compressedTexSubImage3D:$e,scissor:Oe,viewport:tt,reset:at}}function pR(i,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ct,m=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return S?new OffscreenCanvas(D,T):mo("canvas")}function w(D,T,ee){let ve=1;const xe=It(D);if((xe.width>ee||xe.height>ee)&&(ve=ee/Math.max(xe.width,xe.height)),ve<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const he=Math.floor(ve*xe.width),$e=Math.floor(ve*xe.height);v===void 0&&(v=E(he,$e));const Pe=T?E(he,$e):v;return Pe.width=he,Pe.height=$e,Pe.getContext("2d").drawImage(D,0,0,he,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+he+"x"+$e+")."),Pe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){i.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(D,T,ee,ve,xe=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let he=T;if(T===i.RED&&(ee===i.FLOAT&&(he=i.R32F),ee===i.HALF_FLOAT&&(he=i.R16F),ee===i.UNSIGNED_BYTE&&(he=i.R8)),T===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(he=i.R8UI),ee===i.UNSIGNED_SHORT&&(he=i.R16UI),ee===i.UNSIGNED_INT&&(he=i.R32UI),ee===i.BYTE&&(he=i.R8I),ee===i.SHORT&&(he=i.R16I),ee===i.INT&&(he=i.R32I)),T===i.RG&&(ee===i.FLOAT&&(he=i.RG32F),ee===i.HALF_FLOAT&&(he=i.RG16F),ee===i.UNSIGNED_BYTE&&(he=i.RG8)),T===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(he=i.RG8UI),ee===i.UNSIGNED_SHORT&&(he=i.RG16UI),ee===i.UNSIGNED_INT&&(he=i.RG32UI),ee===i.BYTE&&(he=i.RG8I),ee===i.SHORT&&(he=i.RG16I),ee===i.INT&&(he=i.RG32I)),T===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(he=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(he=i.RGB16UI),ee===i.UNSIGNED_INT&&(he=i.RGB32UI),ee===i.BYTE&&(he=i.RGB8I),ee===i.SHORT&&(he=i.RGB16I),ee===i.INT&&(he=i.RGB32I)),T===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),ee===i.UNSIGNED_INT&&(he=i.RGBA32UI),ee===i.BYTE&&(he=i.RGBA8I),ee===i.SHORT&&(he=i.RGBA16I),ee===i.INT&&(he=i.RGBA32I)),T===i.RGB&&ee===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),T===i.RGBA){const $e=xe?gu:At.getTransfer(ve);ee===i.FLOAT&&(he=i.RGBA32F),ee===i.HALF_FLOAT&&(he=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(he=$e===Dt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function C(D,T){let ee;return D?T===null||T===cs||T===co?ee=i.DEPTH24_STENCIL8:T===Yi?ee=i.DEPTH32F_STENCIL8:T===uo&&(ee=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===cs||T===co?ee=i.DEPTH_COMPONENT24:T===Yi?ee=i.DEPTH_COMPONENT32F:T===uo&&(ee=i.DEPTH_COMPONENT16),ee}function z(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==dn&&D.minFilter!==Mi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function N(D){const T=D.target;T.removeEventListener("dispose",N),X(T),T.isVideoTexture&&m.delete(T)}function F(D){const T=D.target;T.removeEventListener("dispose",F),R(T)}function X(D){const T=s.get(D);if(T.__webglInit===void 0)return;const ee=D.source,ve=_.get(ee);if(ve){const xe=ve[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&b(D),Object.keys(ve).length===0&&_.delete(ee)}s.remove(D)}function b(D){const T=s.get(D);i.deleteTexture(T.__webglTexture);const ee=D.source,ve=_.get(ee);delete ve[T.__cacheKey],c.memory.textures--}function R(D){const T=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(T.__webglFramebuffer[ve]))for(let xe=0;xe<T.__webglFramebuffer[ve].length;xe++)i.deleteFramebuffer(T.__webglFramebuffer[ve][xe]);else i.deleteFramebuffer(T.__webglFramebuffer[ve]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ve])}else{if(Array.isArray(T.__webglFramebuffer))for(let ve=0;ve<T.__webglFramebuffer.length;ve++)i.deleteFramebuffer(T.__webglFramebuffer[ve]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ve=0;ve<T.__webglColorRenderbuffer.length;ve++)T.__webglColorRenderbuffer[ve]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ee=D.textures;for(let ve=0,xe=ee.length;ve<xe;ve++){const he=s.get(ee[ve]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),c.memory.textures--),s.remove(ee[ve])}s.remove(D)}let B=0;function oe(){B=0}function J(){const D=B;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),B+=1,D}function ce(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function _e(D,T){const ee=s.get(D);if(D.isVideoTexture&&Ke(D),D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){const ve=D.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(ee,D,T);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+T)}function ne(D,T){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){j(ee,D,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+T)}function ye(D,T){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){j(ee,D,T);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+T)}function H(D,T){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){de(ee,D,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+T)}const fe={[lo]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[cd]:i.MIRRORED_REPEAT},le={[dn]:i.NEAREST,[ES]:i.NEAREST_MIPMAP_NEAREST,[Ul]:i.NEAREST_MIPMAP_LINEAR,[Mi]:i.LINEAR,[pf]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},I={[AS]:i.NEVER,[US]:i.ALWAYS,[CS]:i.LESS,[jv]:i.LEQUAL,[bS]:i.EQUAL,[DS]:i.GEQUAL,[PS]:i.GREATER,[LS]:i.NOTEQUAL};function re(D,T){if(T.type===Yi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Mi||T.magFilter===pf||T.magFilter===Ul||T.magFilter===ls||T.minFilter===Mi||T.minFilter===pf||T.minFilter===Ul||T.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,fe[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,fe[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,fe[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,le[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,le[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===dn||T.minFilter!==Ul&&T.minFilter!==ls||T.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Fe(D,T){let ee=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",N));const ve=T.source;let xe=_.get(ve);xe===void 0&&(xe={},_.set(ve,xe));const he=ce(T);if(he!==D.__cacheKey){xe[he]===void 0&&(xe[he]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),xe[he].usedTimes++;const $e=xe[D.__cacheKey];$e!==void 0&&(xe[D.__cacheKey].usedTimes--,$e.usedTimes===0&&b(T)),D.__cacheKey=he,D.__webglTexture=xe[he].texture}return ee}function te(D,T,ee){return Math.floor(Math.floor(D/ee)/T)}function me(D,T,ee,ve){const he=D.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,ee,ve,T.data);else{he.sort((Ee,Oe)=>Ee.start-Oe.start);let $e=0;for(let Ee=1;Ee<he.length;Ee++){const Oe=he[$e],tt=he[Ee],Je=Oe.start+Oe.count,Le=te(tt.start,T.width,4),at=te(Oe.start,T.width,4);tt.start<=Je+1&&Le===at&&te(tt.start+tt.count-1,T.width,4)===Le?Oe.count=Math.max(Oe.count,tt.start+tt.count-Oe.start):(++$e,he[$e]=tt)}he.length=$e+1;const Pe=i.getParameter(i.UNPACK_ROW_LENGTH),ze=i.getParameter(i.UNPACK_SKIP_PIXELS),Ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Ee=0,Oe=he.length;Ee<Oe;Ee++){const tt=he[Ee],Je=Math.floor(tt.start/4),Le=Math.ceil(tt.count/4),at=Je%T.width,V=Math.floor(Je/T.width),Ue=Le,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,at),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,at,V,Ue,pe,ee,ve,T.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ye)}}function j(D,T,ee){let ve=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=i.TEXTURE_3D);const xe=Fe(D,T),he=T.source;t.bindTexture(ve,D.__webglTexture,i.TEXTURE0+ee);const $e=s.get(he);if(he.version!==$e.__version||xe===!0){t.activeTexture(i.TEXTURE0+ee);const Pe=At.getPrimaries(At.workingColorSpace),ze=T.colorSpace===Lr?null:At.getPrimaries(T.colorSpace),Ye=T.colorSpace===Lr||Pe===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Ee=w(T.image,!1,a.maxTextureSize);Ee=it(T,Ee);const Oe=l.convert(T.format,T.colorSpace),tt=l.convert(T.type);let Je=P(T.internalFormat,Oe,tt,T.colorSpace,T.isVideoTexture);re(ve,T);let Le;const at=T.mipmaps,V=T.isVideoTexture!==!0,Ue=$e.__version===void 0||xe===!0,pe=he.dataReady,be=z(T,Ee);if(T.isDepthTexture)Je=C(T.format===ho,T.type),Ue&&(V?t.texStorage2D(i.TEXTURE_2D,1,Je,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,Je,Ee.width,Ee.height,0,Oe,tt,null));else if(T.isDataTexture)if(at.length>0){V&&Ue&&t.texStorage2D(i.TEXTURE_2D,be,Je,at[0].width,at[0].height);for(let Se=0,ge=at.length;Se<ge;Se++)Le=at[Se],V?pe&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Le.width,Le.height,Oe,tt,Le.data):t.texImage2D(i.TEXTURE_2D,Se,Je,Le.width,Le.height,0,Oe,tt,Le.data);T.generateMipmaps=!1}else V?(Ue&&t.texStorage2D(i.TEXTURE_2D,be,Je,Ee.width,Ee.height),pe&&me(T,Ee,Oe,tt)):t.texImage2D(i.TEXTURE_2D,0,Je,Ee.width,Ee.height,0,Oe,tt,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Je,at[0].width,at[0].height,Ee.depth);for(let Se=0,ge=at.length;Se<ge;Se++)if(Le=at[Se],T.format!==di)if(Oe!==null)if(V){if(pe)if(T.layerUpdates.size>0){const ke=Eg(Le.width,Le.height,T.format,T.type);for(const Qe of T.layerUpdates){const Et=Le.data.subarray(Qe*ke/Le.data.BYTES_PER_ELEMENT,(Qe+1)*ke/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,Qe,Le.width,Le.height,1,Oe,Et)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,Ee.depth,Oe,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Se,Je,Le.width,Le.height,Ee.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,Ee.depth,Oe,tt,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Se,Je,Le.width,Le.height,Ee.depth,0,Oe,tt,Le.data)}else{V&&Ue&&t.texStorage2D(i.TEXTURE_2D,be,Je,at[0].width,at[0].height);for(let Se=0,ge=at.length;Se<ge;Se++)Le=at[Se],T.format!==di?Oe!==null?V?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,Se,0,0,Le.width,Le.height,Oe,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,Se,Je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?pe&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Le.width,Le.height,Oe,tt,Le.data):t.texImage2D(i.TEXTURE_2D,Se,Je,Le.width,Le.height,0,Oe,tt,Le.data)}else if(T.isDataArrayTexture)if(V){if(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Je,Ee.width,Ee.height,Ee.depth),pe)if(T.layerUpdates.size>0){const Se=Eg(Ee.width,Ee.height,T.format,T.type);for(const ge of T.layerUpdates){const ke=Ee.data.subarray(ge*Se/Ee.data.BYTES_PER_ELEMENT,(ge+1)*Se/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,Ee.width,Ee.height,1,Oe,tt,ke)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Oe,tt,Ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Je,Ee.width,Ee.height,Ee.depth,0,Oe,tt,Ee.data);else if(T.isData3DTexture)V?(Ue&&t.texStorage3D(i.TEXTURE_3D,be,Je,Ee.width,Ee.height,Ee.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Oe,tt,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,Je,Ee.width,Ee.height,Ee.depth,0,Oe,tt,Ee.data);else if(T.isFramebufferTexture){if(Ue)if(V)t.texStorage2D(i.TEXTURE_2D,be,Je,Ee.width,Ee.height);else{let Se=Ee.width,ge=Ee.height;for(let ke=0;ke<be;ke++)t.texImage2D(i.TEXTURE_2D,ke,Je,Se,ge,0,Oe,tt,null),Se>>=1,ge>>=1}}else if(at.length>0){if(V&&Ue){const Se=It(at[0]);t.texStorage2D(i.TEXTURE_2D,be,Je,Se.width,Se.height)}for(let Se=0,ge=at.length;Se<ge;Se++)Le=at[Se],V?pe&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Oe,tt,Le):t.texImage2D(i.TEXTURE_2D,Se,Je,Oe,tt,Le);T.generateMipmaps=!1}else if(V){if(Ue){const Se=It(Ee);t.texStorage2D(i.TEXTURE_2D,be,Je,Se.width,Se.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe,tt,Ee)}else t.texImage2D(i.TEXTURE_2D,0,Je,Oe,tt,Ee);y(T)&&x(ve),$e.__version=he.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function de(D,T,ee){if(T.image.length!==6)return;const ve=Fe(D,T),xe=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+ee);const he=s.get(xe);if(xe.version!==he.__version||ve===!0){t.activeTexture(i.TEXTURE0+ee);const $e=At.getPrimaries(At.workingColorSpace),Pe=T.colorSpace===Lr?null:At.getPrimaries(T.colorSpace),ze=T.colorSpace===Lr||$e===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let ge=0;ge<6;ge++)!Ye&&!Ee?Oe[ge]=w(T.image[ge],!0,a.maxCubemapSize):Oe[ge]=Ee?T.image[ge].image:T.image[ge],Oe[ge]=it(T,Oe[ge]);const tt=Oe[0],Je=l.convert(T.format,T.colorSpace),Le=l.convert(T.type),at=P(T.internalFormat,Je,Le,T.colorSpace),V=T.isVideoTexture!==!0,Ue=he.__version===void 0||ve===!0,pe=xe.dataReady;let be=z(T,tt);re(i.TEXTURE_CUBE_MAP,T);let Se;if(Ye){V&&Ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,at,tt.width,tt.height);for(let ge=0;ge<6;ge++){Se=Oe[ge].mipmaps;for(let ke=0;ke<Se.length;ke++){const Qe=Se[ke];T.format!==di?Je!==null?V?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke,0,0,Qe.width,Qe.height,Je,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke,at,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke,0,0,Qe.width,Qe.height,Je,Le,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke,at,Qe.width,Qe.height,0,Je,Le,Qe.data)}}}else{if(Se=T.mipmaps,V&&Ue){Se.length>0&&be++;const ge=It(Oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,at,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ee){V?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Oe[ge].width,Oe[ge].height,Je,Le,Oe[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,at,Oe[ge].width,Oe[ge].height,0,Je,Le,Oe[ge].data);for(let ke=0;ke<Se.length;ke++){const Et=Se[ke].image[ge].image;V?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke+1,0,0,Et.width,Et.height,Je,Le,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke+1,at,Et.width,Et.height,0,Je,Le,Et.data)}}else{V?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Je,Le,Oe[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,at,Je,Le,Oe[ge]);for(let ke=0;ke<Se.length;ke++){const Qe=Se[ke];V?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke+1,0,0,Je,Le,Qe.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke+1,at,Je,Le,Qe.image[ge])}}}y(T)&&x(i.TEXTURE_CUBE_MAP),he.__version=xe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ue(D,T,ee,ve,xe,he){const $e=l.convert(ee.format,ee.colorSpace),Pe=l.convert(ee.type),ze=P(ee.internalFormat,$e,Pe,ee.colorSpace),Ye=s.get(T),Ee=s.get(ee);if(Ee.__renderTarget=T,!Ye.__hasExternalTextures){const Oe=Math.max(1,T.width>>he),tt=Math.max(1,T.height>>he);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,he,ze,Oe,tt,T.depth,0,$e,Pe,null):t.texImage2D(xe,he,ze,Oe,tt,0,$e,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ht(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,xe,Ee.__webglTexture,0,We(T)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ve,xe,Ee.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(D,T,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const ve=T.depthTexture,xe=ve&&ve.isDepthTexture?ve.type:null,he=C(T.stencilBuffer,xe),$e=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=We(T);ht(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,he,T.width,T.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,he,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$e,i.RENDERBUFFER,D)}else{const ve=T.textures;for(let xe=0;xe<ve.length;xe++){const he=ve[xe],$e=l.convert(he.format,he.colorSpace),Pe=l.convert(he.type),ze=P(he.internalFormat,$e,Pe,he.colorSpace),Ye=We(T);ee&&ht(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,ze,T.width,T.height):ht(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,ze,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ze,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=s.get(T.depthTexture);ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),_e(T.depthTexture,0);const xe=ve.__webglTexture,he=We(T);if(T.depthTexture.format===fo)ht(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(T.depthTexture.format===ho)ht(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function nt(D){const T=s.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ve=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ve){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ve.removeEventListener("dispose",xe)};ve.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=ve}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const ve=D.texture.mipmaps;ve&&ve.length>0?Ce(T.__webglFramebuffer[0],D):Ce(T.__webglFramebuffer,D)}else if(ee){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]===void 0)T.__webglDepthbuffer[ve]=i.createRenderbuffer(),De(T.__webglDepthbuffer[ve],D,!1);else{const xe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[ve];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,he)}}else{const ve=D.texture.mipmaps;if(ve&&ve.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),De(T.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(D,T,ee){const ve=s.get(D);T!==void 0&&ue(ve.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&nt(D)}function ct(D){const T=D.texture,ee=s.get(D),ve=s.get(T);D.addEventListener("dispose",F);const xe=D.textures,he=D.isWebGLCubeRenderTarget===!0,$e=xe.length>1;if($e||(ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture()),ve.__version=T.version,c.memory.textures++),he){ee.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer[Pe]=[];for(let ze=0;ze<T.mipmaps.length;ze++)ee.__webglFramebuffer[Pe][ze]=i.createFramebuffer()}else ee.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)ee.__webglFramebuffer[Pe]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if($e)for(let Pe=0,ze=xe.length;Pe<ze;Pe++){const Ye=s.get(xe[Pe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),c.memory.textures++)}if(D.samples>0&&ht(D)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Pe=0;Pe<xe.length;Pe++){const ze=xe[Pe];ee.__webglColorRenderbuffer[Pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe]);const Ye=l.convert(ze.format,ze.colorSpace),Ee=l.convert(ze.type),Oe=P(ze.internalFormat,Ye,Ee,ze.colorSpace,D.isXRRenderTarget===!0),tt=We(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Oe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),De(ee.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,ve.__webglTexture),re(i.TEXTURE_CUBE_MAP,T);for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let ze=0;ze<T.mipmaps.length;ze++)ue(ee.__webglFramebuffer[Pe][ze],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ze);else ue(ee.__webglFramebuffer[Pe],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);y(T)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Pe=0,ze=xe.length;Pe<ze;Pe++){const Ye=xe[Pe],Ee=s.get(Ye);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),re(i.TEXTURE_2D,Ye),ue(ee.__webglFramebuffer,D,Ye,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,0),y(Ye)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,ve.__webglTexture),re(Pe,T),T.mipmaps&&T.mipmaps.length>0)for(let ze=0;ze<T.mipmaps.length;ze++)ue(ee.__webglFramebuffer[ze],D,T,i.COLOR_ATTACHMENT0,Pe,ze);else ue(ee.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,Pe,0);y(T)&&x(Pe),t.unbindTexture()}D.depthBuffer&&nt(D)}function O(D){const T=D.textures;for(let ee=0,ve=T.length;ee<ve;ee++){const xe=T[ee];if(y(xe)){const he=L(D),$e=s.get(xe).__webglTexture;t.bindTexture(he,$e),x(he),t.unbindTexture()}}}const Wt=[],vt=[];function Mt(D){if(D.samples>0){if(ht(D)===!1){const T=D.textures,ee=D.width,ve=D.height;let xe=i.COLOR_BUFFER_BIT;const he=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$e=s.get(D),Pe=T.length>1;if(Pe)for(let Ye=0;Ye<T.length;Ye++)t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const ze=D.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ye=0;Ye<T.length;Ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),Pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$e.__webglColorRenderbuffer[Ye]);const Ee=s.get(T[Ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,ee,ve,0,0,ee,ve,xe,i.NEAREST),d===!0&&(Wt.length=0,vt.length=0,Wt.push(i.COLOR_ATTACHMENT0+Ye),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Wt.push(he),vt.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pe)for(let Ye=0;Ye<T.length;Ye++){t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,$e.__webglColorRenderbuffer[Ye]);const Ee=s.get(T[Ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function We(D){return Math.min(a.maxSamples,D.samples)}function ht(D){const T=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(D){const T=c.render.frame;m.get(D)!==T&&(m.set(D,T),D.update())}function it(D,T){const ee=D.colorSpace,ve=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ee!==ua&&ee!==Lr&&(At.getTransfer(ee)===Dt?(ve!==di||xe!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),T}function It(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=oe,this.setTexture2D=_e,this.setTexture2DArray=ne,this.setTexture3D=ye,this.setTextureCube=H,this.rebindTextures=gt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ht}function mR(i,e){function t(s,a=Lr){let l;const c=At.getTransfer(a);if(s===Ci)return i.UNSIGNED_BYTE;if(s===Zd)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Jd)return i.UNSIGNED_SHORT_5_5_5_1;if(s===zv)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===kv)return i.BYTE;if(s===Bv)return i.SHORT;if(s===uo)return i.UNSIGNED_SHORT;if(s===Kd)return i.INT;if(s===cs)return i.UNSIGNED_INT;if(s===Yi)return i.FLOAT;if(s===yo)return i.HALF_FLOAT;if(s===Hv)return i.ALPHA;if(s===Vv)return i.RGB;if(s===di)return i.RGBA;if(s===fo)return i.DEPTH_COMPONENT;if(s===ho)return i.DEPTH_STENCIL;if(s===Gv)return i.RED;if(s===Qd)return i.RED_INTEGER;if(s===Wv)return i.RG;if(s===eh)return i.RG_INTEGER;if(s===th)return i.RGBA_INTEGER;if(s===ou||s===lu||s===uu||s===cu)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===ou)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===ou)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fd||s===dd||s===hd||s===pd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===fd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===pd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===md||s===gd||s===vd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===md||s===gd)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===vd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_d||s===xd||s===yd||s===Sd||s===Ed||s===Md||s===wd||s===Td||s===Rd||s===Ad||s===Cd||s===bd||s===Pd||s===Ld)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===_d)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ed)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Md)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Td)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ad)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ld)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fu||s===Dd||s===Ud)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===fu)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ud)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xv||s===Nd||s===Id||s===Fd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===fu)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Nd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Id)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===co?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}const gR=`
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

}`;class _R{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new bn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Or({vertexShader:gR,fragmentShader:vR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wi(new Tu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xR extends ha{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",d=1,p=null,m=null,v=null,_=null,S=null,E=null;const w=new _R,y=t.getContextAttributes();let x=null,L=null;const P=[],C=[],z=new Ct;let N=null;const F=new ei;F.viewport=new jt;const X=new ei;X.viewport=new jt;const b=[F,X],R=new zE;let B=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let me=P[te];return me===void 0&&(me=new If,P[te]=me),me.getTargetRaySpace()},this.getControllerGrip=function(te){let me=P[te];return me===void 0&&(me=new If,P[te]=me),me.getGripSpace()},this.getHand=function(te){let me=P[te];return me===void 0&&(me=new If,P[te]=me),me.getHandSpace()};function J(te){const me=C.indexOf(te.inputSource);if(me===-1)return;const j=P[me];j!==void 0&&(j.update(te.inputSource,te.frame,p||c),j.dispatchEvent({type:te.type,data:te.inputSource}))}function ce(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",_e);for(let te=0;te<P.length;te++){const me=C[te];me!==null&&(C[te]=null,P[te].disconnect(me))}B=null,oe=null,w.reset(),e.setRenderTarget(x),S=null,_=null,v=null,a=null,L=null,Fe.stop(),s.isPresenting=!1,e.setPixelRatio(N),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",_e),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,de=null,ue=null;y.depth&&(ue=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?ho:fo,de=y.stencil?co:cs);const De={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:l};v=new XRWebGLBinding(a,t),_=v.createProjectionLayer(De),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new fs(_.textureWidth,_.textureHeight,{format:di,type:Ci,depthTexture:new n_(_.textureWidth,_.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const j={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,j),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new fs(S.framebufferWidth,S.framebufferHeight,{format:di,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await a.requestReferenceSpace(f),Fe.setContext(a),Fe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function _e(te){for(let me=0;me<te.removed.length;me++){const j=te.removed[me],de=C.indexOf(j);de>=0&&(C[de]=null,P[de].disconnect(j))}for(let me=0;me<te.added.length;me++){const j=te.added[me];let de=C.indexOf(j);if(de===-1){for(let De=0;De<P.length;De++)if(De>=C.length){C.push(j),de=De;break}else if(C[De]===null){C[De]=j,de=De;break}if(de===-1)break}const ue=P[de];ue&&ue.connect(j)}}const ne=new ie,ye=new ie;function H(te,me,j){ne.setFromMatrixPosition(me.matrixWorld),ye.setFromMatrixPosition(j.matrixWorld);const de=ne.distanceTo(ye),ue=me.projectionMatrix.elements,De=j.projectionMatrix.elements,Ce=ue[14]/(ue[10]-1),nt=ue[14]/(ue[10]+1),gt=(ue[9]+1)/ue[5],ct=(ue[9]-1)/ue[5],O=(ue[8]-1)/ue[0],Wt=(De[8]+1)/De[0],vt=Ce*O,Mt=Ce*Wt,We=de/(-O+Wt),ht=We*-O;if(me.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ht),te.translateZ(We),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ue[10]===-1)te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ke=Ce+We,it=nt+We,It=vt-ht,D=Mt+(de-ht),T=gt*nt/it*Ke,ee=ct*nt/it*Ke;te.projectionMatrix.makePerspective(It,D,T,ee,Ke,it),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function fe(te,me){me===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(me.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let me=te.near,j=te.far;w.texture!==null&&(w.depthNear>0&&(me=w.depthNear),w.depthFar>0&&(j=w.depthFar)),R.near=X.near=F.near=me,R.far=X.far=F.far=j,(B!==R.near||oe!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,oe=R.far),F.layers.mask=te.layers.mask|2,X.layers.mask=te.layers.mask|4,R.layers.mask=F.layers.mask|X.layers.mask;const de=te.parent,ue=R.cameras;fe(R,de);for(let De=0;De<ue.length;De++)fe(ue[De],de);ue.length===2?H(R,F,X):R.projectionMatrix.copy(F.projectionMatrix),le(te,R,de)};function le(te,me,j){j===null?te.matrix.copy(me.matrixWorld):(te.matrix.copy(j.matrixWorld),te.matrix.invert(),te.matrix.multiply(me.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=po*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&S===null))return d},this.setFoveation=function(te){d=te,_!==null&&(_.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let I=null;function re(te,me){if(m=me.getViewerPose(p||c),E=me,m!==null){const j=m.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let de=!1;j.length!==R.cameras.length&&(R.cameras.length=0,de=!0);for(let Ce=0;Ce<j.length;Ce++){const nt=j[Ce];let gt=null;if(S!==null)gt=S.getViewport(nt);else{const O=v.getViewSubImage(_,nt);gt=O.viewport,Ce===0&&(e.setRenderTargetTextures(L,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(L))}let ct=b[Ce];ct===void 0&&(ct=new ei,ct.layers.enable(Ce),ct.viewport=new jt,b[Ce]=ct),ct.matrix.fromArray(nt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(nt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(gt.x,gt.y,gt.width,gt.height),Ce===0&&(R.matrix.copy(ct.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),de===!0&&R.cameras.push(ct)}const ue=a.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const Ce=v.getDepthInformation(j[0]);Ce&&Ce.isValid&&Ce.texture&&w.init(e,Ce,a.renderState)}}for(let j=0;j<P.length;j++){const de=C[j],ue=P[j];de!==null&&ue!==void 0&&ue.update(de,me,p||c)}I&&I(te,me),me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:me}),E=null}const Fe=new r_;Fe.setAnimationLoop(re),this.setAnimationLoop=function(te){I=te},this.dispose=function(){}}}const is=new Cn,yR=new $t;function SR(i,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,Qv(i)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function a(y,x,L,P,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),v(y,x)):x.isMeshPhongMaterial?(l(y,x),m(y,x)):x.isMeshStandardMaterial?(l(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(l(y,x),E(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),w(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?d(y,x,L,P):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===On&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===On&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const L=e.get(x),P=L.envMap,C=L.envMapRotation;P&&(y.envMap.value=P,is.copy(C),is.x*=-1,is.y*=-1,is.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),y.envMapRotation.value.setFromMatrix4(yR.makeRotationFromEuler(is)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,L,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*L,y.scale.value=P*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,L){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===On&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const L=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function ER(i,e,t,s){let a={},l={},c=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,P){const C=P.program;s.uniformBlockBinding(L,C)}function p(L,P){let C=a[L.id];C===void 0&&(E(L),C=m(L),a[L.id]=C,L.addEventListener("dispose",y));const z=P.program;s.updateUBOMapping(L,z);const N=e.render.frame;l[L.id]!==N&&(_(L),l[L.id]=N)}function m(L){const P=v();L.__bindingPointIndex=P;const C=i.createBuffer(),z=L.__size,N=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,z,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,C),C}function v(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const P=a[L.id],C=L.uniforms,z=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let N=0,F=C.length;N<F;N++){const X=Array.isArray(C[N])?C[N]:[C[N]];for(let b=0,R=X.length;b<R;b++){const B=X[b];if(S(B,N,b,z)===!0){const oe=B.__offset,J=Array.isArray(B.value)?B.value:[B.value];let ce=0;for(let _e=0;_e<J.length;_e++){const ne=J[_e],ye=w(ne);typeof ne=="number"||typeof ne=="boolean"?(B.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,oe+ce,B.__data)):ne.isMatrix3?(B.__data[0]=ne.elements[0],B.__data[1]=ne.elements[1],B.__data[2]=ne.elements[2],B.__data[3]=0,B.__data[4]=ne.elements[3],B.__data[5]=ne.elements[4],B.__data[6]=ne.elements[5],B.__data[7]=0,B.__data[8]=ne.elements[6],B.__data[9]=ne.elements[7],B.__data[10]=ne.elements[8],B.__data[11]=0):(ne.toArray(B.__data,ce),ce+=ye.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,oe,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(L,P,C,z){const N=L.value,F=P+"_"+C;if(z[F]===void 0)return typeof N=="number"||typeof N=="boolean"?z[F]=N:z[F]=N.clone(),!0;{const X=z[F];if(typeof N=="number"||typeof N=="boolean"){if(X!==N)return z[F]=N,!0}else if(X.equals(N)===!1)return X.copy(N),!0}return!1}function E(L){const P=L.uniforms;let C=0;const z=16;for(let F=0,X=P.length;F<X;F++){const b=Array.isArray(P[F])?P[F]:[P[F]];for(let R=0,B=b.length;R<B;R++){const oe=b[R],J=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,_e=J.length;ce<_e;ce++){const ne=J[ce],ye=w(ne),H=C%z,fe=H%ye.boundary,le=H+fe;C+=fe,le!==0&&z-le<ye.storage&&(C+=z-le),oe.__data=new Float32Array(ye.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=ye.storage}}}const N=C%z;return N>0&&(C+=z-N),L.__size=C,L.__cache={},this}function w(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function y(L){const P=L.target;P.removeEventListener("dispose",y);const C=c.indexOf(P.__bindingPointIndex);c.splice(C,1),i.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function x(){for(const L in a)i.deleteBuffer(a[L]);c=[],a={},l={}}return{bind:d,update:p,dispose:x}}class MR{constructor(e={}){const{canvas:t=ZS(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,x=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let z=!1;this._outputColorSpace=An;let N=0,F=0,X=null,b=-1,R=null;const B=new jt,oe=new jt;let J=null;const ce=new Pt(0);let _e=0,ne=t.width,ye=t.height,H=1,fe=null,le=null;const I=new jt(0,0,ne,ye),re=new jt(0,0,ne,ye);let Fe=!1;const te=new ah;let me=!1,j=!1;const de=new $t,ue=new $t,De=new ie,Ce=new jt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function ct(){return X===null?H:1}let O=s;function Wt(A,Y){return t.getContext(A,Y)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qd}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ge,!1),O===null){const Y="webgl2";if(O=Wt(Y,A),O===null)throw Wt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let vt,Mt,We,ht,Ke,it,It,D,T,ee,ve,xe,he,$e,Pe,ze,Ye,Ee,Oe,tt,Je,Le,at,V;function Ue(){vt=new UT(O),vt.init(),Le=new mR(O,vt),Mt=new RT(O,vt,e,Le),We=new hR(O,vt),Mt.reverseDepthBuffer&&_&&We.buffers.depth.setReversed(!0),ht=new FT(O),Ke=new eR,it=new pR(O,vt,We,Ke,Mt,Le,ht),It=new CT(C),D=new DT(C),T=new VE(O),at=new wT(O,T),ee=new NT(O,T,ht,at),ve=new kT(O,ee,T,ht),Oe=new OT(O,Mt,it),ze=new AT(Ke),xe=new Q1(C,It,D,vt,Mt,at,ze),he=new SR(C,Ke),$e=new nR,Pe=new lR(vt),Ee=new MT(C,It,D,We,ve,S,d),Ye=new fR(C,ve,Mt),V=new ER(O,ht,Mt,We),tt=new TT(O,vt,ht),Je=new IT(O,vt,ht),ht.programs=xe.programs,C.capabilities=Mt,C.extensions=vt,C.properties=Ke,C.renderLists=$e,C.shadowMap=Ye,C.state=We,C.info=ht}Ue();const pe=new xR(C,O);this.xr=pe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(ne,ye,!1))},this.getSize=function(A){return A.set(ne,ye)},this.setSize=function(A,Y,ae=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,ye=Y,t.width=Math.floor(A*H),t.height=Math.floor(Y*H),ae===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(ne*H,ye*H).floor()},this.setDrawingBufferSize=function(A,Y,ae){ne=A,ye=Y,H=ae,t.width=Math.floor(A*ae),t.height=Math.floor(Y*ae),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,Y,ae,Z){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,Y,ae,Z),We.viewport(B.copy(I).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,Y,ae,Z){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,Y,ae,Z),We.scissor(oe.copy(re).multiplyScalar(H).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(A){We.setScissorTest(Fe=A)},this.setOpaqueSort=function(A){fe=A},this.setTransparentSort=function(A){le=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,ae=!0){let Z=0;if(A){let q=!1;if(X!==null){const Re=X.texture.format;q=Re===th||Re===eh||Re===Qd}if(q){const Re=X.texture.type,Ne=Re===Ci||Re===cs||Re===uo||Re===co||Re===Zd||Re===Jd,Ve=Ee.getClearColor(),He=Ee.getClearAlpha(),lt=Ve.r,ot=Ve.g,Xe=Ve.b;Ne?(E[0]=lt,E[1]=ot,E[2]=Xe,E[3]=He,O.clearBufferuiv(O.COLOR,0,E)):(w[0]=lt,w[1]=ot,w[2]=Xe,w[3]=He,O.clearBufferiv(O.COLOR,0,w))}else Z|=O.COLOR_BUFFER_BIT}Y&&(Z|=O.DEPTH_BUFFER_BIT),ae&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Ee.dispose(),$e.dispose(),Pe.dispose(),Ke.dispose(),It.dispose(),D.dispose(),ve.dispose(),at.dispose(),V.dispose(),xe.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ps),pe.removeEventListener("sessionend",nr),bi.stop()};function be(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const A=ht.autoReset,Y=Ye.enabled,ae=Ye.autoUpdate,Z=Ye.needsUpdate,q=Ye.type;Ue(),ht.autoReset=A,Ye.enabled=Y,Ye.autoUpdate=ae,Ye.needsUpdate=Z,Ye.type=q}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ke(A){const Y=A.target;Y.removeEventListener("dispose",ke),Qe(Y)}function Qe(A){Et(A),Ke.remove(A)}function Et(A){const Y=Ke.get(A).programs;Y!==void 0&&(Y.forEach(function(ae){xe.releaseProgram(ae)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ae,Z,q,Re){Y===null&&(Y=nt);const Ne=q.isMesh&&q.matrixWorld.determinant()<0,Ve=Ro(A,Y,ae,Z,q);We.setMaterial(Z,Ne);let He=ae.index,lt=1;if(Z.wireframe===!0){if(He=ee.getWireframeAttribute(ae),He===void 0)return;lt=2}const ot=ae.drawRange,Xe=ae.attributes.position;let _t=ot.start*lt,pt=(ot.start+ot.count)*lt;Re!==null&&(_t=Math.max(_t,Re.start*lt),pt=Math.min(pt,(Re.start+Re.count)*lt)),He!==null?(_t=Math.max(_t,0),pt=Math.min(pt,He.count)):Xe!=null&&(_t=Math.max(_t,0),pt=Math.min(pt,Xe.count));const Bt=pt-_t;if(Bt<0||Bt===1/0)return;at.setup(q,Z,Ve,ae,He);let Ut,bt=tt;if(He!==null&&(Ut=T.get(He),bt=Je,bt.setIndex(Ut)),q.isMesh)Z.wireframe===!0?(We.setLineWidth(Z.wireframeLinewidth*ct()),bt.setMode(O.LINES)):bt.setMode(O.TRIANGLES);else if(q.isLine){let et=Z.linewidth;et===void 0&&(et=1),We.setLineWidth(et*ct()),q.isLineSegments?bt.setMode(O.LINES):q.isLineLoop?bt.setMode(O.LINE_LOOP):bt.setMode(O.LINE_STRIP)}else q.isPoints?bt.setMode(O.POINTS):q.isSprite&&bt.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ia("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))bt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const et=q._multiDrawStarts,Lt=q._multiDrawCounts,xt=q._multiDrawCount,tn=He?T.get(He).bytesPerElement:1,rr=Ke.get(Z).currentProgram.getUniforms();for(let En=0;En<xt;En++)rr.setValue(O,"_gl_DrawID",En),bt.render(et[En]/tn,Lt[En])}else if(q.isInstancedMesh)bt.renderInstances(_t,Bt,q.count);else if(ae.isInstancedBufferGeometry){const et=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Lt=Math.min(ae.instanceCount,et);bt.renderInstances(_t,Bt,Lt)}else bt.render(_t,Bt)};function ft(A,Y,ae){A.transparent===!0&&A.side===Ei&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,ms(A,Y,ae),A.side=Fr,A.needsUpdate=!0,ms(A,Y,ae),A.side=Ei):ms(A,Y,ae)}this.compile=function(A,Y,ae=null){ae===null&&(ae=A),x=Pe.get(ae),x.init(Y),P.push(x),ae.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),A!==ae&&A.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const Z=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Re=q.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){const Ve=Re[Ne];ft(Ve,ae,q),Z.add(Ve)}else ft(Re,ae,q),Z.add(Re)}),x=P.pop(),Z},this.compileAsync=function(A,Y,ae=null){const Z=this.compile(A,Y,ae);return new Promise(q=>{function Re(){if(Z.forEach(function(Ne){Ke.get(Ne).currentProgram.isReady()&&Z.delete(Ne)}),Z.size===0){q(A);return}setTimeout(Re,10)}vt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Pn=null;function Sn(A){Pn&&Pn(A)}function ps(){bi.stop()}function nr(){bi.start()}const bi=new r_;bi.setAnimationLoop(Sn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){Pn=A,pe.setAnimationLoop(A),A===null?bi.stop():bi.start()},pe.addEventListener("sessionstart",ps),pe.addEventListener("sessionend",nr),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(Y),Y=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,Y,X),x=Pe.get(A,P.length),x.init(Y),P.push(x),ue.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),te.setFromProjectionMatrix(ue),j=this.localClippingEnabled,me=ze.init(this.clippingPlanes,j),y=$e.get(A,L.length),y.init(),L.push(y),pe.enabled===!0&&pe.isPresenting===!0){const Re=C.xr.getDepthSensingMesh();Re!==null&&Pi(Re,Y,-1/0,C.sortObjects)}Pi(A,Y,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(fe,le),gt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,gt&&Ee.addToRenderList(y,A),this.info.render.frame++,me===!0&&ze.beginShadows();const ae=x.state.shadowsArray;Ye.render(ae,A,Y),me===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=y.opaque,q=y.transmissive;if(x.setupLights(),Y.isArrayCamera){const Re=Y.cameras;if(q.length>0)for(let Ne=0,Ve=Re.length;Ne<Ve;Ne++){const He=Re[Ne];Br(Z,q,A,He)}gt&&Ee.render(A);for(let Ne=0,Ve=Re.length;Ne<Ve;Ne++){const He=Re[Ne];kr(y,A,He,He.viewport)}}else q.length>0&&Br(Z,q,A,Y),gt&&Ee.render(A),kr(y,A,Y);X!==null&&F===0&&(it.updateMultisampleRenderTarget(X),it.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,Y),at.resetDefaultState(),b=-1,R=null,P.pop(),P.length>0?(x=P[P.length-1],me===!0&&ze.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Pi(A,Y,ae,Z){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){Z&&Ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);const Ne=ve.update(A),Ve=A.material;Ve.visible&&y.push(A,Ne,Ve,ae,Ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const Ne=ve.update(A),Ve=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ce.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ce.copy(Ne.boundingSphere.center)),Ce.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(Ve)){const He=Ne.groups;for(let lt=0,ot=He.length;lt<ot;lt++){const Xe=He[lt],_t=Ve[Xe.materialIndex];_t&&_t.visible&&y.push(A,Ne,_t,ae,Ce.z,Xe)}}else Ve.visible&&y.push(A,Ne,Ve,ae,Ce.z,null)}}const Re=A.children;for(let Ne=0,Ve=Re.length;Ne<Ve;Ne++)Pi(Re[Ne],Y,ae,Z)}function kr(A,Y,ae,Z){const q=A.opaque,Re=A.transmissive,Ne=A.transparent;x.setupLightsView(ae),me===!0&&ze.setGlobalState(C.clippingPlanes,ae),Z&&We.viewport(B.copy(Z)),q.length>0&&ir(q,Y,ae),Re.length>0&&ir(Re,Y,ae),Ne.length>0&&ir(Ne,Y,ae),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Br(A,Y,ae,Z){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[Z.id]===void 0&&(x.state.transmissionRenderTarget[Z.id]=new fs(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?yo:Ci,minFilter:ls,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Re=x.state.transmissionRenderTarget[Z.id],Ne=Z.viewport||B;Re.setSize(Ne.z*C.transmissionResolutionScale,Ne.w*C.transmissionResolutionScale);const Ve=C.getRenderTarget(),He=C.getActiveCubeFace(),lt=C.getActiveMipmapLevel();C.setRenderTarget(Re),C.getClearColor(ce),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),gt&&Ee.render(ae);const ot=C.toneMapping;C.toneMapping=Ki;const Xe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),x.setupLightsView(Z),me===!0&&ze.setGlobalState(C.clippingPlanes,Z),ir(A,ae,Z),it.updateMultisampleRenderTarget(Re),it.updateRenderTargetMipmap(Re),vt.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let pt=0,Bt=Y.length;pt<Bt;pt++){const Ut=Y[pt],bt=Ut.object,et=Ut.geometry,Lt=Ut.material,xt=Ut.group;if(Lt.side===Ei&&bt.layers.test(Z.layers)){const tn=Lt.side;Lt.side=On,Lt.needsUpdate=!0,wo(bt,ae,Z,et,Lt,xt),Lt.side=tn,Lt.needsUpdate=!0,_t=!0}}_t===!0&&(it.updateMultisampleRenderTarget(Re),it.updateRenderTargetMipmap(Re))}C.setRenderTarget(Ve,He,lt),C.setClearColor(ce,_e),Xe!==void 0&&(Z.viewport=Xe),C.toneMapping=ot}function ir(A,Y,ae){const Z=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,Re=A.length;q<Re;q++){const Ne=A[q],Ve=Ne.object,He=Ne.geometry,lt=Ne.group;let ot=Ne.material;ot.allowOverride===!0&&Z!==null&&(ot=Z),Ve.layers.test(ae.layers)&&wo(Ve,Y,ae,He,ot,lt)}}function wo(A,Y,ae,Z,q,Re){A.onBeforeRender(C,Y,ae,Z,q,Re),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(C,Y,ae,Z,A,Re),q.transparent===!0&&q.side===Ei&&q.forceSinglePass===!1?(q.side=On,q.needsUpdate=!0,C.renderBufferDirect(ae,Y,Z,q,A,Re),q.side=Fr,q.needsUpdate=!0,C.renderBufferDirect(ae,Y,Z,q,A,Re),q.side=Ei):C.renderBufferDirect(ae,Y,Z,q,A,Re),A.onAfterRender(C,Y,ae,Z,q,Re)}function ms(A,Y,ae){Y.isScene!==!0&&(Y=nt);const Z=Ke.get(A),q=x.state.lights,Re=x.state.shadowsArray,Ne=q.state.version,Ve=xe.getParameters(A,q.state,Re,Y,ae),He=xe.getProgramCacheKey(Ve);let lt=Z.programs;Z.environment=A.isMeshStandardMaterial?Y.environment:null,Z.fog=Y.fog,Z.envMap=(A.isMeshStandardMaterial?D:It).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,lt===void 0&&(A.addEventListener("dispose",ke),lt=new Map,Z.programs=lt);let ot=lt.get(He);if(ot!==void 0){if(Z.currentProgram===ot&&Z.lightsStateVersion===Ne)return mi(A,Ve),ot}else Ve.uniforms=xe.getUniforms(A),A.onBeforeCompile(Ve,C),ot=xe.acquireProgram(Ve,He),lt.set(He,ot),Z.uniforms=Ve.uniforms;const Xe=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=ze.uniform),mi(A,Ve),Z.needsLights=Cu(A),Z.lightsStateVersion=Ne,Z.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),Z.currentProgram=ot,Z.uniformsList=null,ot}function To(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=du.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function mi(A,Y){const ae=Ke.get(A);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function Ro(A,Y,ae,Z,q){Y.isScene!==!0&&(Y=nt),it.resetTextureUnits();const Re=Y.fog,Ne=Z.isMeshStandardMaterial?Y.environment:null,Ve=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ua,He=(Z.isMeshStandardMaterial?D:It).get(Z.envMap||Ne),lt=Z.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ot=!!ae.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Xe=!!ae.morphAttributes.position,_t=!!ae.morphAttributes.normal,pt=!!ae.morphAttributes.color;let Bt=Ki;Z.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Bt=C.toneMapping);const Ut=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,bt=Ut!==void 0?Ut.length:0,et=Ke.get(Z),Lt=x.state.lights;if(me===!0&&(j===!0||A!==R)){const un=A===R&&Z.id===b;ze.setState(Z,A,un)}let xt=!1;Z.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Lt.state.version||et.outputColorSpace!==Ve||q.isBatchedMesh&&et.batching===!1||!q.isBatchedMesh&&et.batching===!0||q.isBatchedMesh&&et.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&et.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&et.instancing===!1||!q.isInstancedMesh&&et.instancing===!0||q.isSkinnedMesh&&et.skinning===!1||!q.isSkinnedMesh&&et.skinning===!0||q.isInstancedMesh&&et.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&et.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&et.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&et.instancingMorph===!1&&q.morphTexture!==null||et.envMap!==He||Z.fog===!0&&et.fog!==Re||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ze.numPlanes||et.numIntersection!==ze.numIntersection)||et.vertexAlphas!==lt||et.vertexTangents!==ot||et.morphTargets!==Xe||et.morphNormals!==_t||et.morphColors!==pt||et.toneMapping!==Bt||et.morphTargetsCount!==bt)&&(xt=!0):(xt=!0,et.__version=Z.version);let tn=et.currentProgram;xt===!0&&(tn=ms(Z,Y,q));let rr=!1,En=!1,Li=!1;const Nt=tn.getUniforms(),hn=et.uniforms;if(We.useProgram(tn.program)&&(rr=!0,En=!0,Li=!0),Z.id!==b&&(b=Z.id,En=!0),rr||R!==A){We.buffers.depth.getReversed()?(de.copy(A.projectionMatrix),QS(de),eE(de),Nt.setValue(O,"projectionMatrix",de)):Nt.setValue(O,"projectionMatrix",A.projectionMatrix),Nt.setValue(O,"viewMatrix",A.matrixWorldInverse);const rn=Nt.map.cameraPosition;rn!==void 0&&rn.setValue(O,De.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&Nt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Nt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,En=!0,Li=!0)}if(q.isSkinnedMesh){Nt.setOptional(O,q,"bindMatrix"),Nt.setOptional(O,q,"bindMatrixInverse");const un=q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Nt.setValue(O,"boneTexture",un.boneTexture,it))}q.isBatchedMesh&&(Nt.setOptional(O,q,"batchingTexture"),Nt.setValue(O,"batchingTexture",q._matricesTexture,it),Nt.setOptional(O,q,"batchingIdTexture"),Nt.setValue(O,"batchingIdTexture",q._indirectTexture,it),Nt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Nt.setValue(O,"batchingColorTexture",q._colorsTexture,it));const nn=ae.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Oe.update(q,ae,tn),(En||et.receiveShadow!==q.receiveShadow)&&(et.receiveShadow=q.receiveShadow,Nt.setValue(O,"receiveShadow",q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(hn.envMap.value=He,hn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&Y.environment!==null&&(hn.envMapIntensity.value=Y.environmentIntensity),En&&(Nt.setValue(O,"toneMappingExposure",C.toneMappingExposure),et.needsLights&&Ao(hn,Li),Re&&Z.fog===!0&&he.refreshFogUniforms(hn,Re),he.refreshMaterialUniforms(hn,Z,H,ye,x.state.transmissionRenderTarget[A.id]),du.upload(O,To(et),hn,it)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(du.upload(O,To(et),hn,it),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Nt.setValue(O,"center",q.center),Nt.setValue(O,"modelViewMatrix",q.modelViewMatrix),Nt.setValue(O,"normalMatrix",q.normalMatrix),Nt.setValue(O,"modelMatrix",q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const un=Z.uniformsGroups;for(let rn=0,wt=un.length;rn<wt;rn++){const gi=un[rn];V.update(gi,tn),V.bind(gi,tn)}}return tn}function Ao(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Cu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,Y,ae){const Z=Ke.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ke.get(A.texture).__webglTexture=Y,Ke.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ae,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const ae=Ke.get(A);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0};const Co=O.createFramebuffer();this.setRenderTarget=function(A,Y=0,ae=0){X=A,N=Y,F=ae;let Z=!0,q=null,Re=!1,Ne=!1;if(A){const He=Ke.get(A);if(He.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(O.FRAMEBUFFER,null),Z=!1;else if(He.__webglFramebuffer===void 0)it.setupRenderTarget(A);else if(He.__hasExternalTextures)it.rebindTextures(A,Ke.get(A.texture).__webglTexture,Ke.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(He.__boundDepthTexture!==Xe){if(Xe!==null&&Ke.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(A)}}const lt=A.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ne=!0);const ot=Ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ot[Y])?q=ot[Y][ae]:q=ot[Y],Re=!0):A.samples>0&&it.useMultisampledRTT(A)===!1?q=Ke.get(A).__webglMultisampledFramebuffer:Array.isArray(ot)?q=ot[ae]:q=ot,B.copy(A.viewport),oe.copy(A.scissor),J=A.scissorTest}else B.copy(I).multiplyScalar(H).floor(),oe.copy(re).multiplyScalar(H).floor(),J=Fe;if(ae!==0&&(q=Co),We.bindFramebuffer(O.FRAMEBUFFER,q)&&Z&&We.drawBuffers(A,q),We.viewport(B),We.scissor(oe),We.setScissorTest(J),Re){const He=Ke.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,He.__webglTexture,ae)}else if(Ne){const He=Ke.get(A.texture),lt=Y;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.__webglTexture,ae,lt)}else if(A!==null&&ae!==0){const He=Ke.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,He.__webglTexture,ae)}b=-1},this.readRenderTargetPixels=function(A,Y,ae,Z,q,Re,Ne,Ve=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He){We.bindFramebuffer(O.FRAMEBUFFER,He);try{const lt=A.textures[Ve],ot=lt.format,Xe=lt.type;if(!Mt.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-Z&&ae>=0&&ae<=A.height-q&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ve),O.readPixels(Y,ae,Z,q,Le.convert(ot),Le.convert(Xe),Re))}finally{const lt=X!==null?Ke.get(X).__webglFramebuffer:null;We.bindFramebuffer(O.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ae,Z,q,Re,Ne,Ve=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He)if(Y>=0&&Y<=A.width-Z&&ae>=0&&ae<=A.height-q){We.bindFramebuffer(O.FRAMEBUFFER,He);const lt=A.textures[Ve],ot=lt.format,Xe=lt.type;if(!Mt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,_t),O.bufferData(O.PIXEL_PACK_BUFFER,Re.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ve),O.readPixels(Y,ae,Z,q,Le.convert(ot),Le.convert(Xe),0);const pt=X!==null?Ke.get(X).__webglFramebuffer:null;We.bindFramebuffer(O.FRAMEBUFFER,pt);const Bt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await JS(O,Bt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,_t),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Re),O.deleteBuffer(_t),O.deleteSync(Bt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,ae=0){const Z=Math.pow(2,-ae),q=Math.floor(A.image.width*Z),Re=Math.floor(A.image.height*Z),Ne=Y!==null?Y.x:0,Ve=Y!==null?Y.y:0;it.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,ae,0,0,Ne,Ve,q,Re),We.unbindTexture()};const bo=O.createFramebuffer(),Po=O.createFramebuffer();this.copyTextureToTexture=function(A,Y,ae=null,Z=null,q=0,Re=null){Re===null&&(q!==0?(ia("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=q,q=0):Re=0);let Ne,Ve,He,lt,ot,Xe,_t,pt,Bt;const Ut=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(ae!==null)Ne=ae.max.x-ae.min.x,Ve=ae.max.y-ae.min.y,He=ae.isBox3?ae.max.z-ae.min.z:1,lt=ae.min.x,ot=ae.min.y,Xe=ae.isBox3?ae.min.z:0;else{const nn=Math.pow(2,-q);Ne=Math.floor(Ut.width*nn),Ve=Math.floor(Ut.height*nn),A.isDataArrayTexture?He=Ut.depth:A.isData3DTexture?He=Math.floor(Ut.depth*nn):He=1,lt=0,ot=0,Xe=0}Z!==null?(_t=Z.x,pt=Z.y,Bt=Z.z):(_t=0,pt=0,Bt=0);const bt=Le.convert(Y.format),et=Le.convert(Y.type);let Lt;Y.isData3DTexture?(it.setTexture3D(Y,0),Lt=O.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(it.setTexture2DArray(Y,0),Lt=O.TEXTURE_2D_ARRAY):(it.setTexture2D(Y,0),Lt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const xt=O.getParameter(O.UNPACK_ROW_LENGTH),tn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),rr=O.getParameter(O.UNPACK_SKIP_PIXELS),En=O.getParameter(O.UNPACK_SKIP_ROWS),Li=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ut.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ut.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,lt),O.pixelStorei(O.UNPACK_SKIP_ROWS,ot),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe);const Nt=A.isDataArrayTexture||A.isData3DTexture,hn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const nn=Ke.get(A),un=Ke.get(Y),rn=Ke.get(nn.__renderTarget),wt=Ke.get(un.__renderTarget);We.bindFramebuffer(O.READ_FRAMEBUFFER,rn.__webglFramebuffer),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let gi=0;gi<He;gi++)Nt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ke.get(A).__webglTexture,q,Xe+gi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ke.get(Y).__webglTexture,Re,Bt+gi)),O.blitFramebuffer(lt,ot,Ne,Ve,_t,pt,Ne,Ve,O.DEPTH_BUFFER_BIT,O.NEAREST);We.bindFramebuffer(O.READ_FRAMEBUFFER,null),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Ke.has(A)){const nn=Ke.get(A),un=Ke.get(Y);We.bindFramebuffer(O.READ_FRAMEBUFFER,bo),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,Po);for(let rn=0;rn<He;rn++)Nt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,nn.__webglTexture,q,Xe+rn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,nn.__webglTexture,q),hn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,un.__webglTexture,Re,Bt+rn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,un.__webglTexture,Re),q!==0?O.blitFramebuffer(lt,ot,Ne,Ve,_t,pt,Ne,Ve,O.COLOR_BUFFER_BIT,O.NEAREST):hn?O.copyTexSubImage3D(Lt,Re,_t,pt,Bt+rn,lt,ot,Ne,Ve):O.copyTexSubImage2D(Lt,Re,_t,pt,lt,ot,Ne,Ve);We.bindFramebuffer(O.READ_FRAMEBUFFER,null),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else hn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Lt,Re,_t,pt,Bt,Ne,Ve,He,bt,et,Ut.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Lt,Re,_t,pt,Bt,Ne,Ve,He,bt,Ut.data):O.texSubImage3D(Lt,Re,_t,pt,Bt,Ne,Ve,He,bt,et,Ut):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Re,_t,pt,Ne,Ve,bt,et,Ut.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Re,_t,pt,Ut.width,Ut.height,bt,Ut.data):O.texSubImage2D(O.TEXTURE_2D,Re,_t,pt,Ne,Ve,bt,et,Ut);O.pixelStorei(O.UNPACK_ROW_LENGTH,xt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,rr),O.pixelStorei(O.UNPACK_SKIP_ROWS,En),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Li),Re===0&&Y.generateMipmaps&&O.generateMipmap(Lt),We.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,ae=null,Z=null,q=0){return ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,ae,Z,q)},this.initRenderTarget=function(A){Ke.get(A).__webglFramebuffer===void 0&&it.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?it.setTextureCube(A,0):A.isData3DTexture?it.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?it.setTexture2DArray(A,0):it.setTexture2D(A,0),We.unbindTexture()},this.resetState=function(){N=0,F=0,X=null,We.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}function wR(i){switch(i){case"fa-user-tag":case"fa-person":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"12",cy:"7",r:"3.5"}),$.jsx("path",{d:"M5 21c0-4.2 3.1-7 7-7s7 2.8 7 7"})]});case"fa-venus-mars":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"8",cy:"9",r:"3.5"}),$.jsx("path",{d:"M8 12.5V21M5 17.5h6"}),$.jsx("circle",{cx:"16.5",cy:"14.5",r:"3.5"}),$.jsx("path",{d:"M19 12l3-3m0 0h-4m4 0v4"})]});case"fa-palette":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0 0-5H12a2 2 0 0 1 0-4h3a6 6 0 0 0-3-9Z"}),$.jsx("circle",{cx:"7",cy:"10",r:".7",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"6.5",r:".7",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"13",cy:"5.8",r:".7",fill:"currentColor",stroke:"none"})]});case"fa-eye":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z"}),$.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]});case"fa-eye-dropper":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m14 5 5 5M16.5 2.5l5 5-10 10-4 1 1-4 10-10Z"}),$.jsx("path",{d:"M5 19h6"})]});case"fa-scissors":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"6",cy:"7",r:"2.5"}),$.jsx("circle",{cx:"6",cy:"17",r:"2.5"}),$.jsx("path",{d:"m8 8.5 12 8.5M8 15.5 20 7"})]});case"fa-fill-drip":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m4 14 8-8 6 6-8 8H4v-6Z"}),$.jsx("path",{d:"M15 5 12 2"}),$.jsx("path",{d:"M20 15s2 2.2 2 3.5a2 2 0 0 1-4 0c0-1.3 2-3.5 2-3.5Z"})]});case"fa-hat-cowboy":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M4 16h16M7 16l1.5-7h7L17 16"}),$.jsx("path",{d:"M2.5 16c1.5 3 17.5 3 19 0"})]});case"fa-shirt":return $.jsx("path",{d:"M8 4h8l5 4-3 4-2-2v10H8V10l-2 2-3-4 5-4Z"});case"fa-shoe-prints":return $.jsxs($.Fragment,{children:[$.jsx("ellipse",{cx:"8",cy:"8",rx:"2.5",ry:"4",transform:"rotate(-20 8 8)"}),$.jsx("ellipse",{cx:"16",cy:"16",rx:"2.5",ry:"4",transform:"rotate(-20 16 16)"})]});case"fa-gem":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M6 4h12l4 5-10 11L2 9l4-5Z"}),$.jsx("path",{d:"M2 9h20M8 4l4 16 4-16"})]});case"fa-sliders":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M4 6h5M15 6h5M4 12h10M18 12h2M4 18h2M10 18h10"}),$.jsx("circle",{cx:"12",cy:"6",r:"2"}),$.jsx("circle",{cx:"16",cy:"12",r:"2"}),$.jsx("circle",{cx:"8",cy:"18",r:"2"})]});case"fa-grip-vertical":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"9",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"18",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"18",r:"1",fill:"currentColor",stroke:"none"})]});case"fa-chevron-up":return $.jsx("path",{d:"m6 15 6-6 6 6"});case"fa-chevron-down":return $.jsx("path",{d:"m6 9 6 6 6-6"});case"fa-check":return $.jsx("path",{d:"m5 12 4 4L19 6"});case"fa-arrows-rotate":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M20 7v5h-5"}),$.jsx("path",{d:"M4 17v-5h5"}),$.jsx("path",{d:"M6.2 8.2A7 7 0 0 1 18.8 10M17.8 15.8A7 7 0 0 1 5.2 14"})]});case"fa-layer-group":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),$.jsx("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]});case"fa-pause":return $.jsx("path",{d:"M8 5v14M16 5v14"});case"fa-play":return $.jsx("path",{d:"m8 5 11 7-11 7V5Z"});case"fa-download":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M12 3v12m0 0 4-4m-4 4-4-4"}),$.jsx("path",{d:"M5 20h14"})]});default:return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"12",cy:"12",r:"8"}),$.jsx("path",{d:"M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01"})]})}}function Dr({name:i,className:e=""}){return $.jsx("svg",{className:`skincrafter-icon ${e}`.trim(),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false","data-skincrafter-icon":i,children:wR(i)})}function u_({title:i,icon:e,iconClassName:t="skincrafter-accent-text",className:s="",children:a}){return $.jsxs("section",{className:`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${s}`,children:[$.jsxs("h2",{className:"text-xl font-bold mb-2 skincrafter-heading flex items-center",children:[$.jsx(Dr,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),i]}),a]})}function eu({icon:i,className:e="",children:t,...s}){return $.jsxs("button",{className:`pixel-button preview-action-button p-2 pixel-border transition-colors ${e}`,...s,children:[i&&$.jsx(Dr,{name:i,className:"skincrafter-button-icon"}),t]})}const TR=""+new URL("/assets/default-BAcllNor-BAcllNor.png",import.meta.url).href,RR=""+new URL("/assets/male.tintable-fxeAI3uu-fxeAI3uu.png",import.meta.url).href,AR=""+new URL("/assets/male.fixed-DcqZ3kjg-DcqZ3kjg.png",import.meta.url).href,CR=""+new URL("/assets/female.tintable-BLp5_Gdk-BLp5_Gdk.png",import.meta.url).href,bR=""+new URL("/assets/female.fixed-DbzKxh-8-DbzKxh-8.png",import.meta.url).href,PR=""+new URL("/assets/male.fixed-C1cq_pNO-C1cq_pNO.png",import.meta.url).href,LR=""+new URL("/assets/male.tintable-D_4mkZ79-D_4mkZ79.png",import.meta.url).href,DR=""+new URL("/assets/male.fixed-BGzxECBj-BGzxECBj.png",import.meta.url).href,UR=""+new URL("/assets/male.tintable-Dll7q7aD-Dll7q7aD.png",import.meta.url).href,NR=""+new URL("/assets/male.fixed-DKYrqDB3-DKYrqDB3.png",import.meta.url).href,IR=""+new URL("/assets/none.tintable-Bs7knCxE-Bs7knCxE.png",import.meta.url).href,FR=""+new URL("/assets/none.fixed-DGZLEiFj-DGZLEiFj.png",import.meta.url).href,OR=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,kR=""+new URL("/assets/clasic.fixed-Dli_mmU6-Dli_mmU6.png",import.meta.url).href,BR=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,zR=""+new URL("/assets/big.tintable-NvbZ8U4q-NvbZ8U4q.png",import.meta.url).href,HR=""+new URL("/assets/big.fixed-BuEC2Ubs-BuEC2Ubs.png",import.meta.url).href,VR=""+new URL("/assets/duck-Dz_q_Va_-Dz_q_Va_.png",import.meta.url).href,GR=""+new URL("/assets/hoodie-C1a1is5P-C1a1is5P.png",import.meta.url).href,WR=""+new URL("/assets/pants-gRdPSA1G-gRdPSA1G.png",import.meta.url).href,c_={"textures/preview/default.png":TR,"textures/race/human/male.tintable.png":RR,"textures/race/human/male.fixed.png":AR,"textures/race/human/female.tintable.png":CR,"textures/race/human/female.fixed.png":bR,"textures/race/bear/male.fixed.png":PR,"textures/race/orc/male.tintable.png":LR,"textures/race/orc/male.fixed.png":DR,"textures/race/zombie/male.tintable.png":UR,"textures/race/zombie/male.fixed.png":NR,"textures/race/template/none.tintable.png":IR,"textures/race/template/none.fixed.png":FR,"textures/eyes/clasic.tintable.png":OR,"textures/eyes/clasic.fixed.png":kR,"textures/eyes/small.tintable.png":BR,"textures/eyes/big.tintable.png":zR,"textures/eyes/big.fixed.png":HR,"textures/hat/duck.png":VR,"textures/top/male/hoodie.png":GR,"textures/bottom/pants.png":WR};function sa(i,e){return e?`${e.replace(/\/+$/,"")}/${i.replace(/^\/+/,"")}`:c_[i]}const $g=c_["textures/preview/default.png"],Qs=64,XR=["bottom"];function Zn(i,e,t,s,a,l,c,f,d={}){const{transparent:p=!1,expand:m=0,rotate180Faces:v=[],flipXFaces:_=[],flipYFaces:S=XR}=d,E=new Set(v),w=new Set(_),y=new Set(S),x=new ma(e+m,t+m,s+m),L=()=>new sh({transparent:p,toneMapped:!1,alphaTest:p?.1:0,side:Ei}),P=[L(),L(),L(),L(),L(),L()],C=(X,b,R=!1,B=!1)=>{const oe=i.clone(),J=(b[2]-b[0])/Qs,ce=(b[3]-b[1])/Qs,_e=b[0]/Qs,ne=b[2]/Qs,ye=1-b[1]/Qs,H=1-b[3]/Qs;oe.magFilter=dn,oe.minFilter=dn,oe.generateMipmaps=!1,oe.wrapS=lo,oe.wrapT=lo,oe.repeat.set(R?-J:J,B?-ce:ce),oe.offset.set(R?ne:_e,B?ye:H),oe.needsUpdate=!0,X.map=oe},z=X=>E.has(X)||w.has(X),N=X=>E.has(X)||y.has(X);C(P[0],f.right,z("right"),N("right")),C(P[1],f.left,z("left"),N("left")),C(P[2],f.top,z("top"),N("top")),C(P[3],f.bottom,z("bottom"),N("bottom")),C(P[4],f.front,z("front"),N("front")),C(P[5],f.back,z("back"),N("back"));const F=new wi(x,P);return F.position.set(a,l,c),F}const jR=-6,$R=6,tu=new ie(-5,16,0),nu=new ie(5,16,0),f_=-1.9,d_=1.9,Yg=new ie(f_,6,0),qg=new ie(d_,6,0);function Jn(i,e,t,s){if(!i)return;const a=e.clone().sub(t).applyEuler(s).add(t);i.position.copy(a),i.rotation.copy(s)}function YR(i,e,t={}){const{armL:s,armR:a,legL:l,legR:c,armLOL:f,armROL:d,legLOL:p,legROL:m}=e,v=t.leftArmX??$R,_=t.rightArmX??jR,S=new ie(v,12,0),E=new ie(_,12,0),w=new ie(d_,0,0),y=new ie(f_,0,0);if(!(!s||!a||!l||!c)){if([s,a,l,c,f,d,p,m].forEach(x=>x?.rotation.set(0,0,0)),s.position.copy(S),a.position.copy(E),l.position.copy(w),c.position.copy(y),f?.position.copy(S),d?.position.copy(E),p?.position.copy(w),m?.position.copy(y),i==="tpose"){const x=new Cn(0,0,Math.PI/2),L=new Cn(0,0,-Math.PI/2);Jn(s,S,nu,x),Jn(a,E,tu,L),Jn(f,S,nu,x),Jn(d,E,tu,L)}else if(i==="walking"){const x=-Math.PI/4,L=Math.PI/4,P=new Cn(x,0,0),C=new Cn(L,0,0),z=new Cn(L,0,0),N=new Cn(x,0,0);Jn(s,S,nu,P),Jn(a,E,tu,C),Jn(l,w,qg,z),Jn(c,y,Yg,N),Jn(f,S,nu,P),Jn(d,E,tu,C),Jn(p,w,qg,z),Jn(m,y,Yg,N)}}}const qR={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},KR={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},ZR={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},JR={left:[40,20,44,32],right:[47,20,51,32],top:[44,16,47,20],bottom:[47,16,50,20],front:[44,20,47,32],back:[51,20,54,32]},QR={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},eA={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},tA={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},nA={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},iA={left:[40,36,44,48],right:[47,36,51,48],top:[44,32,47,36],bottom:[47,32,50,36],front:[44,36,47,48],back:[51,36,54,48]},rA={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},sA={left:[32,52,36,64],right:[40,52,44,64],top:[36,48,40,52],bottom:[40,48,44,52],front:[36,52,40,64],back:[44,52,48,64]},aA={left:[32,52,36,64],right:[39,52,43,64],top:[36,48,39,52],bottom:[39,48,42,52],front:[36,52,39,64],back:[43,52,46,64]},oA={left:[16,52,20,64],right:[24,52,28,64],top:[20,48,24,52],bottom:[24,48,28,52],front:[20,52,24,64],back:[28,52,32,64]},lA={left:[48,52,52,64],right:[56,52,60,64],top:[52,48,56,52],bottom:[56,48,60,52],front:[52,52,56,64],back:[60,52,64,64]},uA={left:[48,52,52,64],right:[55,52,59,64],top:[52,48,55,52],bottom:[55,48,58,52],front:[52,52,55,64],back:[59,52,62,64]},cA={left:[0,52,4,64],right:[8,52,12,64],top:[4,48,8,52],bottom:[8,48,12,52],front:[4,52,8,64],back:[12,52,16,64]},Xf=0,fA=44,dA=24,hA=72,pA=.04,mA=1,gA=.5,Kg=-6,Zg=6,Jg=-5.5,Qg=5.5,ev=-1.9,tv=1.9,nv=()=>({armL:null,armR:null,legL:null,legR:null,armLOL:null,armROL:null,legLOL:null,legROL:null,headOL:null,bodyOL:null}),vA={createRenderer:()=>new MR({antialias:!1,alpha:!0}),createTextureLoader:()=>new IE,createResizeObserver:i=>new ResizeObserver(i),requestAnimationFrame:i=>window.requestAnimationFrame(i),cancelAnimationFrame:i=>window.cancelAnimationFrame(i),addWindowResizeListener:i=>window.addEventListener("resize",i),removeWindowResizeListener:i=>window.removeEventListener("resize",i),getDevicePixelRatio:()=>window.devicePixelRatio||1};class _A{constructor(e,t,s=vA){this.container=e,this.dependencies=s,this.pose=t.pose,this.model=t.model,this.showOverlay=t.showOverlay,this.autoRotate=t.autoRotate,this.onError=t.onError;const a=e.clientWidth||1,l=e.clientHeight||1;this.renderer=s.createRenderer(),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=An,this.renderer.toneMapping=Ki,this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(a,l),e.appendChild(this.renderer.domElement),this.camera=new ei(52,a/l,.1,1e3),this.camera.position.set(0,Xf,this.cameraDistance),this.camera.lookAt(0,Xf,0),this.scene=new RE;const c=new BE(16777215,1);c.position.set(10,10,10),this.scene.add(c),this.group=new to,this.group.position.y=-10,this.scene.add(this.group),this.textureLoader=s.createTextureLoader(),this.resizeObserver=s.createResizeObserver(this.handleResize),this.resizeObserver.observe(e),s.addWindowResizeListener(this.handleResize),e.addEventListener("wheel",this.handleWheel,{passive:!1}),this.handleResize(),this.scheduleAnimationFrame(),this.setTexture(t.textureUrl)}container;dependencies;renderer;camera;scene;group;textureLoader;resizeObserver;onError;disposedTextures=new WeakSet;pendingTextures=new Map;parts=nv();modelMeshes=[];currentTexture=null;requestedTextureUrl=null;textureLoadVersion=0;animationFrameId=null;disposed=!1;pose;model;showOverlay;autoRotate;cameraDistance=fA;modelRevision=0;textureRevision=0;setTexture(e){if(this.disposed||e===this.requestedTextureUrl)return;this.requestedTextureUrl=e;const t=++this.textureLoadVersion;let s=!1;const a=this.textureLoader.load(e,l=>{s=!0,this.pendingTextures.delete(t),this.handleTextureLoaded(t,l)},void 0,l=>{s=!0;const c=this.pendingTextures.get(t);c&&(this.disposeTexture(c),this.pendingTextures.delete(t)),!this.disposed&&t===this.textureLoadVersion&&this.onError?.({code:"texture_load_failed",textureUrl:e,cause:l})});s||this.pendingTextures.set(t,a)}setModel(e){this.disposed||e===this.model||(this.model=e,this.currentTexture&&this.buildModel(this.currentTexture))}setPose(e){this.disposed||e===this.pose||(this.pose=e,this.applyCurrentPose())}setShowOverlay(e){this.disposed||e===this.showOverlay||(this.showOverlay=e,this.applyOverlayVisibility())}setAutoRotate(e){this.disposed||(this.autoRotate=e)}getDiagnostics(){const e=this.parts.armR?.geometry.parameters.width;return{rendererAttached:this.renderer.domElement.parentNode===this.container,modelRevision:this.modelRevision,textureRevision:this.textureRevision,meshCount:this.modelMeshes.length,rightArmWidth:typeof e=="number"?e:null,overlayVisible:this.getOverlayMeshes().map(t=>t.visible),cameraDistance:this.cameraDistance,rotation:this.group.rotation.y}}dispose(){this.disposed||(this.disposed=!0,this.textureLoadVersion+=1,this.container.removeEventListener("wheel",this.handleWheel),this.dependencies.removeWindowResizeListener(this.handleResize),this.resizeObserver.disconnect(),this.animationFrameId!==null&&(this.dependencies.cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.pendingTextures.forEach(e=>this.disposeTexture(e)),this.pendingTextures.clear(),this.disposeModel(),this.currentTexture&&(this.disposeTexture(this.currentTexture),this.currentTexture=null),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement))}handleResize=()=>{if(this.disposed)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()};handleWheel=e=>{this.disposed||(e.preventDefault(),this.cameraDistance=KS.clamp(this.cameraDistance+e.deltaY*pA,dA,hA),this.camera.position.z=this.cameraDistance,this.camera.lookAt(0,Xf,0),this.camera.updateProjectionMatrix())};scheduleAnimationFrame(){this.animationFrameId=this.dependencies.requestAnimationFrame(()=>{this.disposed||(this.autoRotate&&(this.group.rotation.y+=.01),this.renderer.render(this.scene,this.camera),this.scheduleAnimationFrame())})}getClampedDpr(){return Math.min(this.dependencies.getDevicePixelRatio(),2)}handleTextureLoaded(e,t){if(this.disposed||e!==this.textureLoadVersion){this.disposeTexture(t);return}this.configureTexture(t);const s=this.currentTexture;this.modelMeshes.length===0?this.buildModel(t):this.replaceModelTexture(t),this.currentTexture=t,this.textureRevision+=1,s&&s!==t&&this.disposeTexture(s)}configureTexture(e){e.magFilter=dn,e.minFilter=dn,e.generateMipmaps=!1,e.colorSpace=An,e.wrapS=$i,e.wrapT=$i}buildModel(e){this.disposeModel();const t=this.model==="slim",s=t?3:4,a=t?Jg:Kg,l=t?Qg:Zg,c=t?JR:ZR,f=t?aA:sA,d=t?iA:nA,p=t?uA:lA,m=Zn(e,8,8,8,0,22,0,qR),v=Zn(e,8,12,4,0,12,0,KR),_=Zn(e,s,12,4,a,12,0,c),S=Zn(e,s,12,4,l,12,0,f),E=Zn(e,4,12,4,ev,0,0,QR),w=Zn(e,4,12,4,tv,0,0,oA),y={transparent:!0,expand:mA},x={transparent:!0,expand:gA},L=Zn(e,8,8,8,0,22,0,eA,y),P=Zn(e,8,12,4,0,12,0,tA,x),C=Zn(e,s,12,4,a,12,0,d,x),z=Zn(e,s,12,4,l,12,0,p,x),N=Zn(e,4,12,4,ev,0,0,rA,x),F=Zn(e,4,12,4,tv,0,0,cA,x);this.parts={armL:S,armR:_,legL:w,legR:E,armLOL:z,armROL:C,legLOL:F,legROL:N,headOL:L,bodyOL:P},this.modelMeshes=[m,v,_,S,E,w,L,P,C,z,N,F],this.group.add(...this.modelMeshes),this.modelRevision+=1,this.applyOverlayVisibility(),this.applyCurrentPose()}replaceModelTexture(e){this.modelMeshes.forEach(t=>{t.material.forEach(s=>{const a=s.map;if(!a)return;const l=e.clone();l.magFilter=dn,l.minFilter=dn,l.generateMipmaps=!1,l.colorSpace=An,l.wrapS=a.wrapS,l.wrapT=a.wrapT,l.repeat.copy(a.repeat),l.offset.copy(a.offset),l.center.copy(a.center),l.rotation=a.rotation,l.flipY=a.flipY,l.needsUpdate=!0,s.map=l,s.needsUpdate=!0,this.disposeTexture(a)})})}applyCurrentPose(){const e=this.model==="slim";YR(this.pose,{armL:this.parts.armL,armR:this.parts.armR,legL:this.parts.legL,legR:this.parts.legR,armLOL:this.parts.armLOL,armROL:this.parts.armROL,legLOL:this.parts.legLOL,legROL:this.parts.legROL},{leftArmX:e?Qg:Zg,rightArmX:e?Jg:Kg})}applyOverlayVisibility(){this.getOverlayMeshes().forEach(e=>{e.visible=this.showOverlay})}getOverlayMeshes(){return[this.parts.headOL,this.parts.bodyOL,this.parts.armLOL,this.parts.armROL,this.parts.legLOL,this.parts.legROL].filter(e=>e!==null)}disposeModel(){this.modelMeshes.forEach(e=>{this.group.remove(e),e.geometry.dispose(),e.material.forEach(t=>{t.map&&(this.disposeTexture(t.map),t.map=null),t.dispose()})}),this.modelMeshes=[],this.parts=nv()}disposeTexture(e){this.disposedTextures.has(e)||(this.disposedTextures.add(e),e.dispose())}}function xA(i,e,t){return new _A(i,e,t)}function yA(i){return{code:"preview_texture_load_failed",category:"preview",message:`Failed to load preview texture: ${i.textureUrl}`,assetUrl:i.textureUrl,cause:i.cause}}function SA({texture:i,pose:e="default",model:t="classic",showOverlay:s=!0,autoRotate:a=!0,style:l,onError:c}){const f=W.useRef(null),d=W.useRef(null),p=W.useRef(c),m=W.useRef({textureUrl:i??$g,pose:e,model:t,showOverlay:s,autoRotate:a,onError:v=>p.current?.(yA(v))});return W.useEffect(()=>{p.current=c},[c]),W.useEffect(()=>{const v=f.current;if(!v)return;let _;try{_=xA(v,m.current)}catch(S){p.current?.({code:"preview_webgl_initialization_failed",category:"preview",message:"Failed to initialize the WebGL skin preview.",cause:S});return}return d.current=_,()=>{_.dispose(),d.current===_&&(d.current=null)}},[]),W.useEffect(()=>{d.current?.setTexture(i??$g)},[i]),W.useEffect(()=>{d.current?.setModel(t)},[t]),W.useEffect(()=>{d.current?.setPose(e)},[e]),W.useEffect(()=>{d.current?.setShowOverlay(s)},[s]),W.useEffect(()=>{d.current?.setAutoRotate(a)},[a]),$.jsx("div",{ref:f,style:{width:"100%",height:"100%",minHeight:0,position:"relative",touchAction:"none",...l??{}}})}const h_=["en","pl"],va="en",iv={en:{"app.title":"SkinCrafter","nav.wardrobe":"Wardrobe","nav.skinView":"Skin View","nav.language":"Language","nav.workInProgress":"Work in progress","panel.preview":"Preview","panel.customization":"Customization","panel.loadSkin":"Load Minecraft Skin","action.changePose":"Change Pose","action.hideOverlay":"Hide Overlay","action.showOverlay":"Show Overlay","action.disableAutoRotate":"Stop Rotation","action.enableAutoRotate":"Start Rotation","action.download":"Download","action.downloadSkin":"Download character skin","action.dragLayer":"Drag layer","action.moveLayerUp":"Move layer up","action.moveLayerDown":"Move layer down","action.loadSkin":"Load Skin","action.loading":"Loading...","error.assetLoad":"A skin texture could not be loaded. Check the selected assets and try again.","error.generation":"The skin could not be generated. Change the selection and try again.","error.initialSkin":"The supplied skin is not a valid 64x64 Minecraft PNG.","error.preview":"The 3D preview could not be loaded. Skin editing and download may still be available.","skinView.player":"Player","skinView.username":"Minecraft username","category.race":"Character Race","category.sex":"Sex","category.skinColor":"Skin Color","category.eyes":"Eyes","category.eyesColor":"Eye Color","category.hair":"Hair","category.hairColor":"Hair Color","category.hat":"Hat","category.shirt":"Shirt","category.pants":"Pants","category.shoes":"Shoes","category.accessory":"Accessory","option.none":"None","option.sex.Male":"Male","option.sex.Female":"Female","option.race.Human":"Human","option.race.Bear":"Bear","option.race.Orc":"Orc","option.race.Zombie":"Zombie","option.race.Template":"Template","option.eyes.Classic":"Classic","option.eyes.Small":"Small","option.eyes.Big":"Big","option.hat.Duck":"Duck","option.shirt.Hoodie":"Hoodie","option.pants.Pants":"Pants","option.color.blue":"Blue","option.color.green":"Green","option.color.brown":"Brown","option.color.blond":"Blond","option.color.black":"Black"},pl:{"app.title":"SkinCrafter","nav.wardrobe":"Kreator","nav.skinView":"Podglad","nav.language":"Jezyk","nav.workInProgress":"Produkt w trakcie prac","panel.preview":"Podglad","panel.customization":"Personalizacja","panel.loadSkin":"Wczytaj skin Minecraft","action.changePose":"Zmien Poze","action.hideOverlay":"Ukryj Warstwe","action.showOverlay":"Pokaz Warstwe","action.disableAutoRotate":"Zatrzymaj Obrot","action.enableAutoRotate":"Wlacz Obrot","action.download":"Pobierz","action.downloadSkin":"Pobierz skin postaci","action.dragLayer":"Przeciagnij warstwe","action.moveLayerUp":"Przesun warstwe wyzej","action.moveLayerDown":"Przesun warstwe nizej","action.loadSkin":"Wczytaj Skin","action.loading":"Wczytywanie...","error.assetLoad":"Nie udalo sie wczytac tekstury skina. Sprawdz wybrane elementy i sprobuj ponownie.","error.generation":"Nie udalo sie wygenerowac skina. Zmien wybor i sprobuj ponownie.","error.initialSkin":"Przekazany skin nie jest prawidlowym plikiem PNG Minecraft 64x64.","error.preview":"Nie udalo sie uruchomic podgladu 3D. Edycja i pobieranie skina moga nadal dzialac.","skinView.player":"Gracz","skinView.username":"Nazwa gracza Minecraft","category.race":"Rasa Postaci","category.sex":"Plec","category.skinColor":"Kolor Skory","category.eyes":"Oczy","category.eyesColor":"Kolor Oczu","category.hair":"Wlosy","category.hairColor":"Kolor Wlosow","category.hat":"Czapka","category.shirt":"Koszulka","category.pants":"Spodnie","category.shoes":"Buty","category.accessory":"Dodatek","option.none":"Brak","option.sex.Male":"Mezczyzna","option.sex.Female":"Kobieta","option.race.Human":"Czlowiek","option.race.Bear":"Niedzwiedz","option.race.Orc":"Ork","option.race.Zombie":"Zombie","option.race.Template":"Szablon","option.eyes.Classic":"Klasyczne","option.eyes.Small":"Male","option.eyes.Big":"Duze","option.hat.Duck":"Kaczka","option.shirt.Hoodie":"Bluza","option.pants.Pants":"Spodnie","option.color.blue":"Niebieski","option.color.green":"Zielony","option.color.brown":"Brazowy","option.color.blond":"Blond","option.color.black":"Czarny"}};function EA(i){return!!i&&h_.includes(i)}function Mo(i,e){return iv[i][e]??iv[va][e]??e}const MA=i=>Mo(va,i);function wA(i){return i.code==="asset_load_failed"?"error.assetLoad":i.code==="invalid_initial_skin"?"error.initialSkin":i.category==="preview"?"error.preview":"error.generation"}function p_({texture:i,model:e="classic",footerHeight:t=0,t:s=MA,onSave:a,canSave:l,generationStatus:c,generationError:f,onError:d}){const[p,m]=W.useState("default"),[v,_]=W.useState(!0),[S,E]=W.useState(!0),[w,y]=W.useState(null),x=()=>{m(R=>R==="default"?"tpose":R==="tpose"?"walking":"default")},L=()=>{_(R=>!R)},P=()=>{E(R=>!R)},C=l??!!i,z=()=>{if(!i||!C)return;const R=document.createElement("a");R.href=i,R.download="skincrafter-skin.png",R.click()},N=()=>{if(C){if(a){a();return}z()}},F=W.useCallback(R=>{y(R),d?.(R)},[d]);W.useEffect(()=>{y(R=>R?.code==="preview_texture_load_failed"?null:R)},[i]);const X=c==="error"&&f?f:w,b={"--skincrafter-preview-bottom-offset":`${Math.max(0,t)}px`};return $.jsxs(u_,{title:s("panel.preview"),icon:"fa-eye",children:[$.jsx("div",{className:"skincrafter-preview-surface overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full",style:b,children:$.jsx("div",{className:"flex justify-center items-center model-placeholder h-full",children:$.jsx(SA,{texture:i,pose:p,model:e,showOverlay:v,autoRotate:S,onError:F})})}),X&&$.jsx("p",{className:"mt-3 text-sm font-semibold skincrafter-error-text",role:"alert",children:s(wA(X))}),$.jsxs("div",{className:"mt-4 preview-actions",children:[$.jsx(eu,{className:"skincrafter-secondary-action",icon:"fa-arrows-rotate","aria-label":s("action.changePose"),onClick:x,children:s("action.changePose")}),$.jsx(eu,{className:"skincrafter-secondary-action",icon:"fa-layer-group","aria-label":s(v?"action.hideOverlay":"action.showOverlay"),onClick:L,children:s(v?"action.hideOverlay":"action.showOverlay")}),$.jsx(eu,{className:"skincrafter-secondary-action",icon:S?"fa-pause":"fa-play","aria-label":s(S?"action.disableAutoRotate":"action.enableAutoRotate"),onClick:P,children:s(S?"action.disableAutoRotate":"action.enableAutoRotate")}),$.jsx(eu,{className:"skincrafter-secondary-action disabled:opacity-50 disabled:cursor-not-allowed",icon:"fa-download","aria-label":s("action.downloadSkin"),onClick:N,disabled:!C,children:s("action.download")})]})]})}function TA({left:i,right:e}){return $.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:i}),$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:e})]})}function RA(i,e){if(i.length===0)return null;for(const t of i){const s=t.top+(t.bottom-t.top)/2;if(e<s)return{targetLayer:t.layer,position:"before"};if(e<=t.bottom)return{targetLayer:t.layer,position:"after"}}return{targetLayer:i[i.length-1].layer,position:"after"}}function AA(i,e,t,s){if(!i.includes(e)||!i.includes(t))return[...i];if(e===t)return[...i];const a=i.filter(c=>c!==e),l=a.indexOf(t)+(s==="after"?1:0);return a.splice(l,0,e),a}function CA({heading:i,icon:e,iconClassName:t="skincrafter-category-icon",className:s="",children:a,...l}){return $.jsxs("div",{className:`option-card skincrafter-surface p-4 pixel-border relative ${i?"pt-5":""} ${s}`,...l,children:[i&&$.jsxs("h3",{className:"font-medium mb-2 flex items-center absolute -top-3 left-4 px-2 skincrafter-surface skincrafter-heading z-10",children:[e&&$.jsx(Dr,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),i]}),a]})}const bA=["None","Duck"];function PA(i,e){return i==="Duck"?sa("textures/hat/duck.png",e):null}const LA=["None","Pants"];function DA(i,e){return i==="Pants"?sa("textures/bottom/pants.png",e):null}function ji(i){if(!i.tintable&&!i.fixed)throw new Error("A texture-backed option must define a tintable layer, a fixed layer, or both.");return{...i}}function hu(i,e){return i.tintable?{tintable:sa(i.tintable,e),...i.fixed?{fixed:sa(i.fixed,e)}:{}}:{fixed:sa(i.fixed,e)}}function jf(i){return!!i?.tintable}const m_={Human:{Male:ji({tintable:"textures/race/human/male.tintable.png",fixed:"textures/race/human/male.fixed.png"}),Female:ji({tintable:"textures/race/human/female.tintable.png",fixed:"textures/race/human/female.fixed.png"})},Bear:{Male:ji({fixed:"textures/race/bear/male.fixed.png"})},Orc:{Male:ji({tintable:"textures/race/orc/male.tintable.png",fixed:"textures/race/orc/male.fixed.png"})},Zombie:{Male:ji({tintable:"textures/race/zombie/male.tintable.png",fixed:"textures/race/zombie/male.fixed.png"})},Template:{None:ji({tintable:"textures/race/template/none.tintable.png",fixed:"textures/race/template/none.fixed.png"})}};function g_(i){return Object.keys(m_[i])}function uh(i,e,t){const s=m_[i],a=g_(i)[0],l=s[e]??s[a];return l?hu(l,t):null}const UA=["Human","Bear","Orc","Zombie"],NA=["None","Hoodie"];function IA(i,e){return i==="Hoodie"?sa("textures/top/male/hoodie.png",e):null}const v_={Human:["#D5BAAA","#E0AC69","#C68642"],Bear:["#5D4037","#8D6E63","#A1887F"],Orc:["#558B2F","#7CB342"],Zombie:["#556B2F"],Template:["#FFFFFF"]},ds=[{id:"race",labelKey:"category.race",icon:"fa-user-tag",control:"choice"},{id:"sex",labelKey:"category.sex",icon:"fa-venus-mars",control:"choice"},{id:"skinColor",labelKey:"category.skinColor",icon:"fa-palette",control:"color"},{id:"eyes",labelKey:"category.eyes",icon:"fa-eye",control:"choice"},{id:"eyesColor",labelKey:"category.eyesColor",icon:"fa-eye-dropper",control:"color"},{id:"hair",labelKey:"category.hair",icon:"fa-scissors",control:"choice"},{id:"hairColor",labelKey:"category.hairColor",icon:"fa-fill-drip",control:"color"},{id:"hat",labelKey:"category.hat",icon:"fa-hat-cowboy",control:"choice"},{id:"shirt",labelKey:"category.shirt",icon:"fa-shirt",control:"choice"},{id:"pants",labelKey:"category.pants",icon:"fa-person",control:"choice"},{id:"shoes",labelKey:"category.shoes",icon:"fa-shoe-prints",control:"choice"},{id:"accessory",labelKey:"category.accessory",icon:"fa-gem",control:"choice"}],Ur={race:"Human",sex:"Male",skinColor:v_.Human[0],eyes:"Classic",eyesColor:"#2F5D9B",hair:"None",hairColor:"#4A2F20",hat:"None",shirt:"None",pants:"None",shoes:"None",accessory:"None"},_u=["hat","shirt","pants","shoes","accessory"],kd={id:"None",labelKey:"option.none",textureLayers:null},FA={Male:{id:"Male",labelKey:"option.sex.Male",textureLayers:null},Female:{id:"Female",labelKey:"option.sex.Female",textureLayers:null},None:kd},$f={Classic:ji({tintable:"textures/eyes/clasic.tintable.png",fixed:"textures/eyes/clasic.fixed.png"}),Small:ji({tintable:"textures/eyes/small.tintable.png"}),Big:ji({tintable:"textures/eyes/big.tintable.png",fixed:"textures/eyes/big.fixed.png"})},Yf=i=>i?{fixed:i}:null;function Ji(i,e,t){if(i==="race")return UA.map(s=>({id:s,labelKey:`option.race.${s}`,textureLayers:uh(s,"Male",t)}));if(i==="sex")return g_(e.race).map(s=>FA[s]);if(i==="skinColor"){const s=e.race;return v_[s].map(a=>({id:a,labelKey:`option.skinColor.${a}`,color:a}))}return i==="eyes"?[{id:"Classic",labelKey:"option.eyes.Classic",textureLayers:hu($f.Classic,t)},{id:"Small",labelKey:"option.eyes.Small",textureLayers:hu($f.Small,t)},{id:"Big",labelKey:"option.eyes.Big",textureLayers:hu($f.Big,t)}]:i==="eyesColor"?[{id:"#2F5D9B",labelKey:"option.color.blue",color:"#2F5D9B"},{id:"#2F8F4E",labelKey:"option.color.green",color:"#2F8F4E"},{id:"#5B3A29",labelKey:"option.color.brown",color:"#5B3A29"}]:i==="hair"?[kd]:i==="hairColor"?[{id:"#4A2F20",labelKey:"option.color.brown",color:"#4A2F20"},{id:"#D6B15D",labelKey:"option.color.blond",color:"#D6B15D"},{id:"#1F1A17",labelKey:"option.color.black",color:"#1F1A17"}]:i==="hat"?bA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.hat.${s}`,textureLayers:Yf(PA(s,t))})):i==="shirt"?NA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.shirt.${s}`,textureLayers:Yf(IA(s,t))})):i==="pants"?LA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.pants.${s}`,textureLayers:Yf(DA(s,t))})):[kd]}function Au(i){const e={...Ur,...i??{}};Ji("race",e).map(s=>s.id).includes(e.race)||(e.race=Ur.race);const t=Ji("skinColor",e).map(s=>s.id);return t.includes(e.skinColor)||(e.skinColor=t[0]??Ur.skinColor),ds.forEach(s=>{const a=Ji(s.id,e).map(l=>l.id);a.includes(e[s.id])||(e[s.id]=a[0]??"None")}),e}function Ir(i){const e=new Set(_u),t=[];return(i??[]).forEach(s=>{e.has(s)&&!t.includes(s)&&t.push(s)}),_u.forEach(s=>{t.includes(s)||t.push(s)}),t}function iu(i,e){if(!i)return[];const t=[];return i.tintable&&t.push({url:i.tintable,role:"tintable",tint:e??"#FFFFFF"}),i.fixed&&t.push({url:i.fixed,role:"fixed"}),t}function __(i,e,t){if(i==="race")return iu(uh(e.race,e.sex,t),e.skinColor);if(i==="sex")return[];if(i==="eyes"){const a=Ji("eyes",e,t).find(l=>l.id===e.eyes);return iu(a?.textureLayers,e.eyesColor)}if(i==="hair"){const a=Ji("hair",e,t).find(l=>l.id===e.hair);return iu(a?.textureLayers,e.hairColor)}const s=Ji(i,e,t).find(a=>a.id===e[i]);return iu(s?.textureLayers)}function x_(i){return["race","sex","eyes","hair",...Ir(i)]}function OA(i,e=_u,t){return x_(e).flatMap(s=>__(s,i,t))}function kA(i,e,t,s){const a=new Set(t),l=c=>c==="race"?a.has("race")||a.has("sex")||a.has("skinColor"):c==="sex"?!1:c==="eyes"?a.has("eyes")||a.has("eyesColor"):c==="hair"?a.has("hair")||a.has("hairColor"):a.has(c);return x_(e).filter(l).flatMap(c=>__(c,i,s))}function BA(i,e,t){if(i==="skinColor")return jf(uh(e.race,e.sex,t));if(i==="eyesColor"){const s=Ji("eyes",e,t).find(a=>a.id===e.eyes);return jf(s?.textureLayers)}if(i==="hairColor"){const s=Ji("hair",e,t).find(a=>a.id===e.hair);return jf(s?.textureLayers)}return!0}const ru=i=>_u.includes(i),rv=(i,e)=>i.length===e.length&&i.every((t,s)=>t===e[s]);function zA({appearance:i,textureLayerOrder:e,onAppearanceChange:t,onLayerOrderChange:s,t:a,assetBaseUrl:l}){const[c,f]=W.useState(null),[d,p]=W.useState(null),[m,v]=W.useState(null),[_,S]=W.useState(null),E=W.useRef(null),w=W.useRef(null),y=W.useRef(null),x=W.useRef(null),L=W.useRef([]),P=W.useRef(new Map),C=W.useMemo(()=>new Map(ds.map(j=>[j.id,j])),[]),z=W.useMemo(()=>ds.filter(j=>!ru(j.id)&&BA(j.id,i,l)),[i,l]),N=c&&d?d:e,F=W.useMemo(()=>N.map(j=>C.get(j)).filter(j=>!!j),[C,N]);W.useLayoutEffect(()=>{const j=x.current;if(!j)return;const de=new Map;j.querySelectorAll("[data-layer-id]").forEach(ue=>{const De=ue.dataset.layerId;if(!De||!ru(De))return;const Ce=ue.offsetTop,nt=P.current.get(De);if(de.set(De,Ce),nt===void 0||nt===Ce||typeof ue.animate!="function")return;typeof ue.getAnimations=="function"&&ue.getAnimations().filter(ct=>ct.id==="skincrafter-layer-preview").forEach(ct=>ct.cancel());const gt=ue.animate([{transform:`translateY(${nt-Ce}px)`},{transform:"translateY(0)"}],{duration:150,easing:"ease-out"});gt.id="skincrafter-layer-preview"}),P.current=de},[N]);const X=j=>{const de=x.current;if(!de)return[];const ue=de.getBoundingClientRect().top;return[...de.querySelectorAll("[data-layer-id]")].flatMap(De=>{const Ce=De.dataset.layerId;if(!Ce||!ru(Ce)||Ce===j)return[];const nt=De.getBoundingClientRect();return[{layer:Ce,top:nt.top-ue,bottom:nt.bottom-ue}]})},b=j=>{const de=x.current;if(!de)return null;const ue=j-de.getBoundingClientRect().top;return RA(L.current,ue)},R=()=>{E.current=null,w.current=null,y.current=null,L.current=[],f(null),p(null),v(null),S(null)},B=(j,de)=>{const ue=[...e];L.current=X(j),E.current=j,w.current=ue,f(j),p(ue),v(null),S(de)},oe=(j,de)=>{const ue=E.current;if(!ue)return;const De=AA(e,ue,j,de);w.current=De,p(Ce=>Ce&&rv(Ce,De)?Ce:De),v({targetLayer:j,position:de})},J=()=>{const j=w.current,de=j&&!rv(j,e);R(),de&&j&&s(j)},ce=(j,de)=>{const ue=e.indexOf(j),De=ue+de;if(ue<0||De<0||De>=e.length)return;const Ce=[...e];[Ce[ue],Ce[De]]=[Ce[De],Ce[ue]],s(Ce)},_e=(j,de)=>{if(B(de,{x:j.clientX,y:j.clientY,pointerType:"mouse"}),j.dataTransfer.effectAllowed="move",j.dataTransfer.setData("text/plain",de),typeof j.dataTransfer.setDragImage=="function"){const ue=document.createElement("div");ue.style.position="fixed",ue.style.left="-10000px",ue.style.top="-10000px",ue.style.width="1px",ue.style.height="1px",ue.style.opacity="0",document.body.appendChild(ue),j.dataTransfer.setDragImage(ue,0,0),window.setTimeout(()=>ue.remove(),0)}},ne=j=>{!E.current||j.clientX===0&&j.clientY===0||S({x:j.clientX,y:j.clientY,pointerType:"mouse"})},ye=()=>{E.current&&R()},H=j=>{if(!E.current)return;j.preventDefault(),j.dataTransfer.dropEffect="move";const de=b(j.clientY);de&&oe(de.targetLayer,de.position)},fe=j=>{j.preventDefault(),J()},le=(j,de)=>{if(!(j.pointerType==="mouse"||j.button>0||!(j.target instanceof Element?j.target:null)?.closest("h3"))){j.preventDefault(),y.current=j.pointerId;try{j.currentTarget.setPointerCapture(j.pointerId)}catch{}B(de,{x:j.clientX,y:j.clientY,pointerType:"touch"})}},I=j=>{if(j.pointerId!==y.current||!E.current)return;j.preventDefault(),S({x:j.clientX,y:j.clientY,pointerType:"touch"});const de=b(j.clientY);de&&oe(de.targetLayer,de.position)},re=j=>{if(j.pointerId===y.current){j.preventDefault();try{j.currentTarget.releasePointerCapture(j.pointerId)}catch{}J()}},Fe=j=>{j.pointerId===y.current&&R()},te=j=>{const de=Ji(j.id,i,l),ue=ru(j.id)?j.id:null,De=ue?e.indexOf(ue):-1,Ce=ue&&m?.targetLayer===ue;return $.jsxs(CA,{heading:a(j.labelKey),icon:j.icon,className:`wardrobe-option-card p-2.5 pt-6 ${ue?"layer-order-card":""} ${ue===c?"is-dragging":""} ${Ce?`drop-${m.position}`:""}`,"data-layer-id":ue??void 0,onPointerDown:ue?nt=>le(nt,ue):void 0,onPointerMove:ue?I:void 0,onPointerUp:ue?re:void 0,onPointerCancel:ue?Fe:void 0,children:[ue&&$.jsxs("div",{className:"layer-order-controls",children:[$.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${a("action.moveLayerUp")} ${a(j.labelKey)}`,title:a("action.moveLayerUp"),disabled:De<=0,onClick:()=>ce(ue,-1),children:$.jsx(Dr,{name:"fa-chevron-up"})}),$.jsx("button",{type:"button",className:"layer-order-handle","aria-label":`${a("action.dragLayer")} ${a(j.labelKey)}`,title:a("action.dragLayer"),draggable:!0,onDragStart:nt=>_e(nt,ue),onDrag:ne,onDragEnd:ye,children:$.jsx(Dr,{name:"fa-grip-vertical"})}),$.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${a("action.moveLayerDown")} ${a(j.labelKey)}`,title:a("action.moveLayerDown"),disabled:De>=e.length-1,onClick:()=>ce(ue,1),children:$.jsx(Dr,{name:"fa-chevron-down"})})]}),$.jsx("div",{className:j.control==="color"?"mt-2 flex flex-wrap gap-1.5":"mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1.5",role:"group","aria-label":a(j.labelKey),children:de.map(nt=>{const gt=i[j.id]===nt.id;return j.control==="color"?$.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border ${gt?"is-selected":""}`,style:{backgroundColor:nt.color??nt.id},"aria-label":a(nt.labelKey),"aria-pressed":gt,onClick:()=>t(j.id,nt.id),children:gt&&$.jsx(Dr,{name:"fa-check"})},nt.id):$.jsx("button",{type:"button",className:`pixel-button min-h-8 px-2 py-1 border text-xs leading-tight transition-colors ${gt?"skincrafter-option-selected":"skincrafter-secondary-action"}`,"aria-pressed":gt,onClick:()=>t(j.id,nt.id),children:a(nt.labelKey)},nt.id)})})]},j.id)},me=c?C.get(c):null;return $.jsxs(u_,{title:a("panel.customization"),icon:"fa-sliders",className:"overflow-visible md:overflow-hidden customization-panel p-3",children:[$.jsxs("div",{className:"space-y-1.5 options-container md:flex-1 md:min-h-0",children:[z.map(te),$.jsx("div",{ref:x,className:"layer-order-list space-y-1.5",onDragOver:H,onDrop:fe,children:F.map(te)})]}),_&&me&&$.jsxs("div",{className:`layer-drag-ghost ${_.pointerType==="touch"?"is-touch":""}`,style:{left:_.x,top:_.y},"aria-hidden":"true","data-testid":"layer-drag-ghost",children:[$.jsx(Dr,{name:me.icon}),$.jsx("span",{children:a(me.labelKey)})]})]})}const sv=[137,80,78,71,13,10,26,10],xu=64;class pi extends Error{cause;constructor(e,t){super(e),this.name="InvalidInitialSkinError",this.cause=t}}function HA(i){let e="";for(let t=0;t<i.length;t+=32768){const s=i.subarray(t,Math.min(t+32768,i.length));e+=String.fromCharCode(...s)}return`data:image/png;base64,${btoa(e)}`}function VA(i){let e=2166136261;for(const t of i)e^=t,e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}function GA(i){if(i.length<24)throw new pi("Initial skin is not a valid PNG file.");for(let a=0;a<sv.length;a+=1)if(i[a]!==sv[a])throw new pi("Initial skin is not a valid PNG file.");const e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=e.getUint32(8),s=String.fromCharCode(i[12],i[13],i[14],i[15]);if(t!==13||s!=="IHDR")throw new pi("Initial skin PNG is missing a valid IHDR header.");return{width:e.getUint32(16),height:e.getUint32(20)}}async function WA(i){return typeof i.arrayBuffer=="function"?new Uint8Array(await i.arrayBuffer()):new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{if(!(s.result instanceof ArrayBuffer)){t(new Error("Blob reader did not return an ArrayBuffer."));return}e(new Uint8Array(s.result))},s.onerror=()=>t(s.error??new Error("Blob reader failed.")),s.readAsArrayBuffer(i)})}async function XA(i){await new Promise((e,t)=>{const s=new Image;s.onload=()=>{const a=s.naturalWidth||s.width,l=s.naturalHeight||s.height;if(s.onload=null,s.onerror=null,a!==xu||l!==xu){t(new pi("Initial skin must be a 64x64 Minecraft PNG."));return}e()},s.onerror=a=>{s.onload=null,s.onerror=null,t(new pi("Initial skin PNG could not be decoded.",a))},s.src=i})}async function jA(i,e){if(i.type&&i.type.toLowerCase()!=="image/png")throw new pi("Initial skin must use the image/png MIME type.");let t;try{t=await WA(i)}catch(l){throw new pi("Initial skin data could not be read.",l)}const s=GA(t);if(s.width!==xu||s.height!==xu)throw new pi("Initial skin must be a 64x64 Minecraft PNG.");const a=HA(t);return await XA(a),{dataUrl:a,fingerprint:VA(t),model:e}}function $A(i){const[e,t]=i.split(",",2),s=e.match(/^data:([^;]+);base64$/)?.[1]??"image/png",a=atob(t??""),l=new Uint8Array(a.length);for(let c=0;c<a.length;c+=1)l[c]=a.charCodeAt(c);return new Blob([l],{type:s})}function YA(i,e,t,s=e.sex==="Female"?"slim":"classic"){const a=$A(i),l=new File([a],"skincrafter-skin.png",{type:"image/png"});return{blob:a,file:l,dataUrl:i,metadata:{width:64,height:64,mimeType:"image/png",model:s,appearance:{...e},layerOrder:[...t]}}}const io=1,qA=new Map([[0,i=>({...i,schemaVersion:1})]]);function av(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function Pr(i){return{success:!1,error:{code:"invalid_state",message:i}}}function ov(i){return{success:!1,error:{code:"unsupported_schema_version",message:`Unsupported SkinCrafter state schema version: ${i}.`,schemaVersion:i}}}function KA(i){return{schemaVersion:io,appearance:Au(i.appearance),layerOrder:Ir(i.layerOrder)}}function y_(i){const e=KA(i);return{...e,appearance:{...e.appearance},layerOrder:[...e.layerOrder]}}function S_(i){if(!av(i))return Pr("SkinCrafter persisted state must be an object.");const e=[],t=i.schemaVersion;let s,a;if(t===void 0)s=null,e.push({code:"legacy_unversioned",message:"Migrated legacy unversioned SkinCrafter state."}),a={...i,schemaVersion:0};else{if(typeof t!="number"||!Number.isInteger(t)||t<0)return Pr("SkinCrafter schemaVersion must be a non-negative integer.");if(s=t,s>io)return ov(s);a={...i}}let l=s??0;for(;l<io;){const E=qA.get(l);if(!E)return ov(l);const w=l+1;a=E(a),e.push({code:"schema_version_migrated",message:`Migrated SkinCrafter state schema from version ${l} to ${w}.`,from:l,to:w}),l=w}if(a.schemaVersion!==io)return Pr("SkinCrafter state migration did not produce the current schema version.");const c=s===null||s===0;if(!av(a.appearance))return Pr("SkinCrafter persisted appearance must be an object.");const f={};for(const E of ds){const w=a.appearance[E.id];if(w===void 0){if(!c)return Pr(`SkinCrafter persisted appearance is missing ${E.id}.`);continue}if(typeof w!="string")return Pr(`SkinCrafter persisted appearance.${E.id} must be a string.`);f[E.id]=w}const d=a.layerOrder;if(d===void 0&&!c)return Pr("SkinCrafter persisted state is missing layerOrder.");if(d!==void 0&&(!Array.isArray(d)||d.some(E=>typeof E!="string")))return Pr("SkinCrafter persisted layerOrder must be an array of strings.");const p=Au(f);for(const E of ds){const w=a.appearance[E.id],y=p[E.id];w!==y&&e.push({code:"appearance_value_defaulted",message:`Normalized persisted appearance.${E.id} to a supported value.`,path:E.id,from:w,to:y})}const m=d??[],v=Ir(m);(m.length!==v.length||m.some((E,w)=>E!==v[w]))&&e.push({code:"layer_order_normalized",message:"Normalized persisted layer order by removing invalid/duplicate layers and appending missing layers.",path:"layerOrder",from:[...m],to:[...v]});const _={appearance:p,layerOrder:v},S=y_(_);return{success:!0,state:_,serializedState:S,sourceSchemaVersion:s,migrated:s!==io||e.length>0,notices:e}}class Bd extends Error{assetUrl;cause;constructor(e,t){super(`Failed to load texture asset: ${e}`),this.name="TextureLoadError",this.assetUrl=e,this.cause=t}}const Ti=64,ZA=i=>i?typeof i=="string"?{url:i,role:"fixed"}:i.url?i.role==="tintable"?{url:i.url,role:"tintable",tint:i.tint}:{url:i.url,role:"fixed"}:null:null;function JA(i){const e=i.replace("#",""),t=e.length===3?e.split("").map(s=>`${s}${s}`).join(""):e;return{r:Number.parseInt(t.slice(0,2),16),g:Number.parseInt(t.slice(2,4),16),b:Number.parseInt(t.slice(4,6),16),a:255}}function QA(i,e){return i===Ti&&e===Ti}function eC(i,e){if(i.a===0)return i;const t=(i.r+i.g+i.b)/765;return{r:Math.round(e.r*t),g:Math.round(e.g*t),b:Math.round(e.b*t),a:i.a}}function tC(i,e){const t=new Uint8ClampedArray(i);for(let s=0;s<t.length;s+=4){const a=eC({r:i[s],g:i[s+1],b:i[s+2],a:i[s+3]},e);t[s]=a.r,t[s+1]=a.g,t[s+2]=a.b,t[s+3]=a.a}return t}const nC=(i,e,t)=>{const s=document.createElement("canvas");s.width=Ti,s.height=Ti;const a=s.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("Could not create a 2D canvas context for tintable skin composition.");a.imageSmoothingEnabled=!1,a.drawImage(e,0,0);const l=a.getImageData(0,0,Ti,Ti);l.data.set(tC(l.data,JA(t))),a.putImageData(l,0,0),i.drawImage(s,0,0)},iC=(i,e,t)=>{if(t.role==="fixed"){i.drawImage(e,0,0);return}nC(i,e,t.tint??"#FFFFFF")},rC=i=>new Promise((e,t)=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{const a=s.naturalWidth||s.width,l=s.naturalHeight||s.height;if(!QA(a,l)){t(new Bd(i,new Error(`Skin texture atlas must be ${Ti}x${Ti}; got ${a}x${l}.`)));return}e(s)},s.onerror=a=>t(new Bd(i,a)),s.src=i});async function lv(i){const e=i.map(ZA).filter(l=>!!l);if(e.length===0)throw new Error("No texture assets were available for skin composition.");const t=await Promise.all(e.map(l=>rC(l.url))),s=document.createElement("canvas");s.width=Ti,s.height=Ti;const a=s.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("Could not create a 2D canvas context for skin composition.");return a.imageSmoothingEnabled=!1,t.forEach((l,c)=>iC(a,l,e[c])),s.toDataURL("image/png")}function uv(i){return{appearance:Au(i?.appearance??null),layerOrder:Ir(i?.layerOrder)}}function sC(i){return{appearance:{...i.appearance},layerOrder:[...i.layerOrder]}}function aC(i){return i?{"--skincrafter-accent":i.accent,"--skincrafter-accent-strong":i.accentStrong,"--skincrafter-surface":i.surface,"--skincrafter-text":i.text,"--skincrafter-muted":i.muted,"--skincrafter-border":i.border}:{}}function oC(i){return i instanceof Bd?{code:"asset_load_failed",category:"asset",message:`Failed to load skin texture asset: ${i.assetUrl}`,assetUrl:i.assetUrl,cause:i.cause}:{code:"generation_failed",category:"generation",message:"Failed to generate the current skin.",cause:i}}function cv(i){return{code:"invalid_initial_skin",category:"input",message:i instanceof pi?i.message:"Initial skin must be a decodable 64x64 Minecraft PNG.",cause:i instanceof pi?i.cause??i:i}}function Qn(i,...e){if(i)try{i(...e)}catch(t){console.error("SkinCrafter host callback failed",t)}}function lC({locale:i=va,value:e,initialSkin:t,persistence:s,assetBaseUrl:a,onStateChange:l,onSkinChange:c,onSave:f,onStatusChange:d,onError:p,className:m="",style:v,theme:_,previewBottomOffset:S=0}){const[E,w]=W.useState(()=>uv(e||t||(s?.load()??null))),[y,x]=W.useState(null),[L,P]=W.useState({key:null,status:"idle",error:null}),[C,z]=W.useState(null),[N,F]=W.useState({source:null,model:null,status:"idle",error:null}),[X,b]=W.useState([]),R=W.useRef(c),B=W.useRef(d),oe=W.useRef(p),J=W.useRef(null),ce=W.useRef(!1),_e=W.useRef(null),ne=W.useMemo(()=>e?uv(e):null,[e])??E,ye=W.useRef(ne);ye.current=ne;const H=W.useCallback(pe=>Mo(i,pe),[i]),fe=t?.image??null,le=t?.model??null,I=fe!==null,re=W.useCallback(pe=>{e||w(pe),l?.(pe)},[l,e]),Fe=W.useCallback((pe,be)=>{I&&b(Se=>Se.includes(pe)?Se:[...Se,pe]),re({...ne,appearance:Au({...ne.appearance,[pe]:be})})},[I,re,ne]),te=W.useCallback(pe=>{re({...ne,layerOrder:Ir(pe)})},[re,ne]);W.useEffect(()=>{R.current=c},[c]),W.useEffect(()=>{B.current=d},[d]),W.useEffect(()=>{oe.current=p},[p]),W.useEffect(()=>{if(!fe){J.current=null,ce.current=!1,z(null),b([]),F({source:null,model:null,status:"idle",error:null});return}if(!le){ce.current=!1;const Se=cv(new pi("Initial skin model must be either classic or slim."));F({source:fe,model:null,status:"error",error:Se}),Qn(B.current,"error"),Qn(oe.current,Se);return}let pe=!0;const be=sC(ye.current);return F({source:fe,model:le,status:"loading",error:null}),Qn(B.current,"generating"),jA(fe,le).then(Se=>{if(!pe)return;const ge=J.current,ke=ge!==null&&ge.fingerprint===Se.fingerprint&&ge.model===Se.model,Qe=ke?{...ge,source:fe}:{source:fe,dataUrl:Se.dataUrl,fingerprint:Se.fingerprint,model:Se.model,baselineState:be};ce.current=ke,J.current=Qe,z(Qe),ke||b([]),F({source:fe,model:le,status:"ready",error:null}),ke&&Qn(B.current,"ready")}).catch(Se=>{if(!pe)return;ce.current=!1;const ge=cv(Se);F({source:fe,model:le,status:"error",error:ge}),Qn(B.current,"error"),Qn(oe.current,ge)}),()=>{pe=!1}},[fe,le]),W.useEffect(()=>{e||s?.save(y_(ne))},[s,ne,e]);const me=I&&le!==null&&C?.source===fe&&C.model===le,j=W.useMemo(()=>{if(!me||!C)return[];const pe=new Set(X);for(const be of ds)ne.appearance[be.id]!==C.baselineState.appearance[be.id]&&pe.add(be.id);return ds.map(be=>be.id).filter(be=>pe.has(be))},[X,me,C,ne.appearance]),{race:de,sex:ue,skinColor:De,eyes:Ce,eyesColor:nt,hair:gt,hairColor:ct,hat:O,shirt:Wt,pants:vt,shoes:Mt,accessory:We}=ne.appearance,ht=JSON.stringify(ne.layerOrder),Ke=JSON.stringify(j),it=a?.replace(/\/+$/,"")||void 0,It=j.includes("sex"),D=me&&C&&!It?C.model==="slim"?"Female":"Male":ue,T=me&&C&&!It?C.model:ue==="Female"?"slim":"classic",ee=me?C?.fingerprint??null:null,ve=me?C?.dataUrl??null:null,xe=JSON.stringify([de,ue,De,Ce,nt,gt,ct,O,Wt,vt,Mt,We,ht,it??null,ee,T,Ke]),he=y?.key===xe?y:null,$e=I&&N.source===fe&&N.model===le,Pe=I&&(!$e||N.status==="loading"),ze=$e&&N.status==="error",Ye=Pe?"generating":ze?"error":L.key===xe?L.status:"idle",Ee=ze?N.error:L.key===xe?L.error:null;W.useEffect(()=>{if(I&&!me)return;if(ce.current){const Qe=_e.current===xe;if(ce.current=!1,Qe)return}let pe=!0;const be={race:de,sex:ue,skinColor:De,eyes:Ce,eyesColor:nt,hair:gt,hairColor:ct,hat:O,shirt:Wt,pants:vt,shoes:Mt,accessory:We},Se={...be,sex:D},ge=JSON.parse(ht),ke=JSON.parse(Ke);return P({key:xe,status:"generating",error:null}),Qn(B.current,"generating"),(async()=>{let Qe;try{let Et;if(ve){const ft=kA(Se,ge,ke,it);Et=ft.filter(Boolean).length===0?ve:await lv([ve,...ft])}else{const ft=OA(be,ge,it);Et=await lv(ft)}Qe={dataUrl:Et,output:YA(Et,be,ge,T)}}catch(Et){if(!pe)return;const ft=oC(Et);P({key:xe,status:"error",error:ft}),Qn(B.current,"error"),Qn(oe.current,ft);return}pe&&(_e.current=xe,x({key:xe,texture:Qe.dataUrl,output:Qe.output}),P({key:xe,status:"ready",error:null}),Qn(R.current,Qe.output),Qn(B.current,"ready"))})(),()=>{pe=!1}},[We,Ke,it,D,T,Ce,nt,xe,gt,ct,I,O,ve,me,ht,vt,de,ue,Wt,Mt,De]);const Oe=he??y,tt=he?.output??null,Je=Oe?.texture??null,Le=Oe?.output.metadata.model??T,at=Ye==="ready"&&tt!==null,V=f&&at&&tt?()=>f(tt):void 0,Ue=W.useCallback(pe=>{Qn(oe.current,pe)},[]);return $.jsx("div",{className:`skincrafter-editor h-full min-h-0 w-full ${m}`.trim(),style:{...aC(_),...v},"data-testid":"skincrafter-editor","data-skincrafter-locale":i,"data-skincrafter-generation-status":Ye,children:$.jsx(TA,{left:$.jsx(p_,{texture:Je,model:Le,footerHeight:S,t:H,onSave:V,canSave:at,generationStatus:Ye,generationError:Ee,onError:Ue}),right:$.jsx(zA,{appearance:ne.appearance,textureLayerOrder:ne.layerOrder,onAppearanceChange:Fe,onLayerOrderChange:te,t:H,assetBaseUrl:a})})})}function uC({texture:i,model:e="classic",locale:t=va,bottomOffset:s=0,className:a="",style:l,theme:c,onError:f}){const d=m=>Mo(t,m),p={"--skincrafter-accent":c?.accent,"--skincrafter-accent-strong":c?.accentStrong,"--skincrafter-surface":c?.surface,"--skincrafter-text":c?.text,"--skincrafter-muted":c?.muted,"--skincrafter-border":c?.border};return $.jsx("div",{className:`skincrafter-editor h-full min-h-0 ${a}`.trim(),style:{...p,...l},children:$.jsx(p_,{texture:i,model:e,footerHeight:s,t:d,onError:f})})}const cC=dv.forwardRef((i,e)=>$.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:$.jsx("div",{className:"container mx-auto text-center text-sm",children:$.jsx("p",{children:"(c) 2026 SkinCrafter. All rights reserved."})})})),fC=i=>Mo(va,i),dC=({logoSrc:i="/logo.png",logoAlt:e="SkinCrafter logo",language:t="en",onLanguageChange:s,t:a=fC})=>$.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:$.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[$.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[$.jsx("div",{className:"h-8 w-36 flex items-center",children:$.jsx("img",{src:i,alt:e,className:"h-auto max-h-8 w-full object-contain",style:{imageRendering:"pixelated"}})}),$.jsx("span",{className:"pixel-border bg-amber-500 px-2 py-0.5 text-xs font-bold uppercase tracking-normal text-green-950 shadow-sm",title:a("nav.workInProgress"),"aria-label":a("nav.workInProgress"),children:"WIP"})]}),$.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[$.jsx(Jf,{to:"/",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.wardrobe")}),$.jsx(Jf,{to:"/mcskinview",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.skinView")}),s&&$.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[$.jsx("span",{children:a("nav.language")}),$.jsx("select",{className:"bg-green-700 text-white pixel-border px-2 py-1",value:t,onChange:l=>s(l.target.value),"aria-label":a("nav.language"),children:h_.map(l=>$.jsx("option",{value:l,children:l.toUpperCase()},l))})]})]})]})}),E_="skincrafterLanguage",hC=()=>{const i=localStorage.getItem(E_);return EA(i)?i:va};function M_({children:i}){const[e,t]=W.useState(()=>hC()),s=W.useRef(null),[a,l]=W.useState(0),c=W.useCallback(d=>Mo(e,d),[e]),f=W.useCallback(d=>{t(d)},[]);return W.useEffect(()=>{localStorage.setItem(E_,e)},[e]),W.useEffect(()=>{const d=()=>{l(s.current?.offsetHeight??0)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),$.jsxs("div",{className:"max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col",children:[$.jsx("div",{className:"shrink-0",children:$.jsx(dC,{language:e,onLanguageChange:f,t:c})}),i({footerHeight:a,language:e,t:c}),$.jsx("div",{className:"shrink-0",children:$.jsx(cC,{ref:s})})]})}const ao="skincrafterState",ch="wardrobeAppearance",fh="wardrobeLayerOrder";function go(i){return JSON.parse(i)}function w_(i){const e=S_(i);return e.success?{state:e.state,serializedState:e.serializedState}:null}function T_(i){let e;try{e=go(i)}catch{return{kind:"invalid"}}const t=S_(e);return t.success?{kind:"loaded",value:{state:t.state,serializedState:t.serializedState}}:t.error.code==="unsupported_schema_version"?{kind:"unsupported"}:{kind:"invalid"}}function pC(){const i=localStorage.getItem(ch),e=localStorage.getItem(fh);if(i===null||e===null)return null;try{return w_({appearance:go(i),layerOrder:go(e)})}catch{return null}}function mC(){let i;const e=localStorage.getItem(ch);if(e)try{i=go(e)}catch{i={...Ur}}else i={race:localStorage.getItem("wardrobeRace")??Ur.race,skinColor:localStorage.getItem("wardrobeSkinColor")??Ur.skinColor,hat:localStorage.getItem("wardrobeHat")??Ur.hat};let t=Ir(null);const s=localStorage.getItem(fh);if(s)try{t=go(s)}catch{t=Ir(null)}const a=w_({appearance:i,layerOrder:t});return a?(localStorage.setItem(ao,JSON.stringify(a.serializedState)),a.state):{appearance:{...Ur},layerOrder:Ir(null)}}function gC(i,e){return JSON.stringify(i)===JSON.stringify(e)}function vC(){const i=localStorage.getItem(ao);return i===null?!1:T_(i).kind==="unsupported"}const _C={load:()=>{const i=localStorage.getItem(ao);if(i===null)return mC();const e=T_(i);if(e.kind==="unsupported"||e.kind==="invalid")return null;const t=pC();return t&&!gC(t.serializedState,e.value.serializedState)?(localStorage.setItem(ao,JSON.stringify(t.serializedState)),t.state):e.value.state},save:i=>{vC()||(localStorage.setItem(ao,JSON.stringify(i)),localStorage.setItem(ch,JSON.stringify(i.appearance)),localStorage.setItem(fh,JSON.stringify(i.layerOrder)))}},xC=i=>i.replace(/^http:\/\//,"https://"),yC=i=>{if(!i)return null;try{return JSON.parse(atob(i.value))}catch{return null}};async function SC(i){const e=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(i)}`);if(!e.ok)throw new Error("User not found");const t=await e.json(),s=t.data?.player;if(!t.success||!s)throw new Error("User not found");const a=s.properties?.find(f=>f.name==="textures"),l=yC(a)?.textures?.SKIN,c=l?.url??s.skin_texture;if(!c)throw new Error("Skin texture not found");return{texture:xC(c),model:l?.metadata?.model==="slim"?"slim":"classic"}}const EC=()=>{const[i,e]=W.useState(""),[t,s]=W.useState(null),[a,l]=W.useState(null),[c,f]=W.useState(!1),d=W.useCallback(m=>{e(m.target.value)},[]),p=W.useCallback(async m=>{if(m.preventDefault(),!i.trim()){l("Please enter a username.");return}l(null),s(null),f(!0);try{s(await SC(i.trim()))}catch(v){l(v instanceof Error?v.message:"An unexpected error occurred."),s(null)}finally{f(!1)}},[i]);return $.jsx(M_,{children:({footerHeight:m,language:v,t:_})=>$.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:$.jsx(uC,{texture:t?.texture??null,model:t?.model??"classic",locale:v,bottomOffset:m})}),$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:$.jsxs("section",{className:"mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4",children:[$.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[$.jsx("i",{className:"fas fa-user mr-2 text-green-700"})," ",_("panel.loadSkin")]}),$.jsxs("div",{className:"space-y-4 md:flex-1 md:min-h-0 overflow-y-auto pr-2",children:[$.jsxs("div",{className:"option-card bg-white shadow p-4 pixel-border relative pt-5",children:[$.jsxs("h3",{className:"font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10",children:[$.jsx("i",{className:"fas fa-id-card mr-2 text-amber-600"})," ",_("skinView.player")]}),$.jsxs("form",{onSubmit:p,className:"mt-4 flex flex-col gap-3",children:[$.jsx("input",{type:"text",value:i,onChange:d,placeholder:_("skinView.username"),"aria-label":_("skinView.username"),className:"w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"}),$.jsxs("button",{type:"submit",disabled:c,className:"pixel-button p-2 pixel-border bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white",children:[$.jsx("i",{className:"fas fa-cloud-arrow-down mr-2"}),_(c?"action.loading":"action.loadSkin")]})]})]}),a&&$.jsx("div",{className:"option-card bg-red-50 text-red-700 shadow p-4 pixel-border",children:a})]})]})})]})})},MC=()=>$.jsx(M_,{children:({footerHeight:i,language:e})=>$.jsx(lC,{locale:e,persistence:_C,previewBottomOffset:i})}),wC=()=>$.jsxs(hy,{children:[$.jsx(Kf,{path:"/",element:$.jsx(MC,{})}),$.jsx(Kf,{path:"/mcskinview",element:$.jsx(EC,{})})]});hx.createRoot(document.getElementById("root")).render($.jsx(dv.StrictMode,{children:$.jsx(Oy,{children:$.jsx(wC,{})})}));
