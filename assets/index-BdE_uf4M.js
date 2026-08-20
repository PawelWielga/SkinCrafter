(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function nv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ef={exports:{}},$a={},tf={exports:{}},vt={};var wm;function ex(){if(wm)return vt;wm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function _(I,re,Oe){this.props=I,this.context=re,this.refs=w,this.updater=Oe||S}_.prototype.isReactComponent={},_.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},_.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=_.prototype;function L(I,re,Oe){this.props=I,this.context=re,this.refs=w,this.updater=Oe||S}var b=L.prototype=new x;b.constructor=L,E(b,_.prototype),b.isPureReactComponent=!0;var R=Array.isArray,B=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function W(I,re,Oe){var ee,fe={},Re=null,Ee=null;if(re!=null)for(ee in re.ref!==void 0&&(Ee=re.ref),re.key!==void 0&&(Re=""+re.key),re)B.call(re,ee)&&!F.hasOwnProperty(ee)&&(fe[ee]=re[ee]);var Ae=arguments.length-2;if(Ae===1)fe.children=Oe;else if(1<Ae){for(var Ke=Array(Ae),Ve=0;Ve<Ae;Ve++)Ke[Ve]=arguments[Ve+2];fe.children=Ke}if(I&&I.defaultProps)for(ee in Ae=I.defaultProps,Ae)fe[ee]===void 0&&(fe[ee]=Ae[ee]);return{$$typeof:i,type:I,key:Re,ref:Ee,props:fe,_owner:N.current}}function P(I,re){return{$$typeof:i,type:I.type,key:re,ref:I.ref,props:I.props,_owner:I._owner}}function A(I){return typeof I=="object"&&I!==null&&I.$$typeof===i}function H(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Oe){return re[Oe]})}var oe=/\/+/g;function Q(I,re){return typeof I=="object"&&I!==null&&I.key!=null?H(""+I.key):re.toString(36)}function le(I,re,Oe,ee,fe){var Re=typeof I;(Re==="undefined"||Re==="boolean")&&(I=null);var Ee=!1;if(I===null)Ee=!0;else switch(Re){case"string":case"number":Ee=!0;break;case"object":switch(I.$$typeof){case i:case e:Ee=!0}}if(Ee)return Ee=I,fe=fe(Ee),I=ee===""?"."+Q(Ee,0):ee,R(fe)?(Oe="",I!=null&&(Oe=I.replace(oe,"$&/")+"/"),le(fe,re,Oe,"",function(Ve){return Ve})):fe!=null&&(A(fe)&&(fe=P(fe,Oe+(!fe.key||Ee&&Ee.key===fe.key?"":(""+fe.key).replace(oe,"$&/")+"/")+I)),re.push(fe)),1;if(Ee=0,ee=ee===""?".":ee+":",R(I))for(var Ae=0;Ae<I.length;Ae++){Re=I[Ae];var Ke=ee+Q(Re,Ae);Ee+=le(Re,re,Oe,Ke,fe)}else if(Ke=y(I),typeof Ke=="function")for(I=Ke.call(I),Ae=0;!(Re=I.next()).done;)Re=Re.value,Ke=ee+Q(Re,Ae++),Ee+=le(Re,re,Oe,Ke,fe);else if(Re==="object")throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return Ee}function me(I,re,Oe){if(I==null)return I;var ee=[],fe=0;return le(I,ee,"","",function(Re){return re.call(Oe,Re,fe++)}),ee}function ne(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(Oe){(I._status===0||I._status===-1)&&(I._status=1,I._result=Oe)},function(Oe){(I._status===0||I._status===-1)&&(I._status=2,I._result=Oe)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var ve={current:null},V={transition:null},ue={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:V,ReactCurrentOwner:N};function ae(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:me,forEach:function(I,re,Oe){me(I,function(){re.apply(this,arguments)},Oe)},count:function(I){var re=0;return me(I,function(){re++}),re},toArray:function(I){return me(I,function(re){return re})||[]},only:function(I){if(!A(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},vt.Component=_,vt.Fragment=t,vt.Profiler=a,vt.PureComponent=L,vt.StrictMode=s,vt.Suspense=d,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,vt.act=ae,vt.cloneElement=function(I,re,Oe){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ee=E({},I.props),fe=I.key,Re=I.ref,Ee=I._owner;if(re!=null){if(re.ref!==void 0&&(Re=re.ref,Ee=N.current),re.key!==void 0&&(fe=""+re.key),I.type&&I.type.defaultProps)var Ae=I.type.defaultProps;for(Ke in re)B.call(re,Ke)&&!F.hasOwnProperty(Ke)&&(ee[Ke]=re[Ke]===void 0&&Ae!==void 0?Ae[Ke]:re[Ke])}var Ke=arguments.length-2;if(Ke===1)ee.children=Oe;else if(1<Ke){Ae=Array(Ke);for(var Ve=0;Ve<Ke;Ve++)Ae[Ve]=arguments[Ve+2];ee.children=Ae}return{$$typeof:i,type:I.type,key:fe,ref:Re,props:ee,_owner:Ee}},vt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},vt.createElement=W,vt.createFactory=function(I){var re=W.bind(null,I);return re.type=I,re},vt.createRef=function(){return{current:null}},vt.forwardRef=function(I){return{$$typeof:f,render:I}},vt.isValidElement=A,vt.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:ne}},vt.memo=function(I,re){return{$$typeof:p,type:I,compare:re===void 0?null:re}},vt.startTransition=function(I){var re=V.transition;V.transition={};try{I()}finally{V.transition=re}},vt.unstable_act=ae,vt.useCallback=function(I,re){return ve.current.useCallback(I,re)},vt.useContext=function(I){return ve.current.useContext(I)},vt.useDebugValue=function(){},vt.useDeferredValue=function(I){return ve.current.useDeferredValue(I)},vt.useEffect=function(I,re){return ve.current.useEffect(I,re)},vt.useId=function(){return ve.current.useId()},vt.useImperativeHandle=function(I,re,Oe){return ve.current.useImperativeHandle(I,re,Oe)},vt.useInsertionEffect=function(I,re){return ve.current.useInsertionEffect(I,re)},vt.useLayoutEffect=function(I,re){return ve.current.useLayoutEffect(I,re)},vt.useMemo=function(I,re){return ve.current.useMemo(I,re)},vt.useReducer=function(I,re,Oe){return ve.current.useReducer(I,re,Oe)},vt.useRef=function(I){return ve.current.useRef(I)},vt.useState=function(I){return ve.current.useState(I)},vt.useSyncExternalStore=function(I,re,Oe){return ve.current.useSyncExternalStore(I,re,Oe)},vt.useTransition=function(){return ve.current.useTransition()},vt.version="18.3.1",vt}var Tm;function Dd(){return Tm||(Tm=1,tf.exports=ex()),tf.exports}var Rm;function tx(){if(Rm)return $a;Rm=1;var i=Dd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,p){var m,v={},y=null,S=null;p!==void 0&&(y=""+p),d.key!==void 0&&(y=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)s.call(d,m)&&!l.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:y,ref:S,props:v,_owner:a.current}}return $a.Fragment=t,$a.jsx=c,$a.jsxs=c,$a}var Am;function nx(){return Am||(Am=1,ef.exports=tx()),ef.exports}var $=nx(),X=Dd();const iv=nv(X);var bl={},nf={exports:{}},Fn={},rf={exports:{}},sf={};var Cm;function ix(){return Cm||(Cm=1,(function(i){function e(V,ue){var ae=V.length;V.push(ue);e:for(;0<ae;){var I=ae-1>>>1,re=V[I];if(0<a(re,ue))V[I]=ue,V[ae]=re,ae=I;else break e}}function t(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var ue=V[0],ae=V.pop();if(ae!==ue){V[0]=ae;e:for(var I=0,re=V.length,Oe=re>>>1;I<Oe;){var ee=2*(I+1)-1,fe=V[ee],Re=ee+1,Ee=V[Re];if(0>a(fe,ae))Re<re&&0>a(Ee,fe)?(V[I]=Ee,V[Re]=ae,I=Re):(V[I]=fe,V[ee]=ae,I=ee);else if(Re<re&&0>a(Ee,ae))V[I]=Ee,V[Re]=ae,I=Re;else break e}}return ue}function a(V,ue){var ae=V.sortIndex-ue.sortIndex;return ae!==0?ae:V.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var d=[],p=[],m=1,v=null,y=3,S=!1,E=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(V){for(var ue=t(p);ue!==null;){if(ue.callback===null)s(p);else if(ue.startTime<=V)s(p),ue.sortIndex=ue.expirationTime,e(d,ue);else break;ue=t(p)}}function R(V){if(w=!1,b(V),!E)if(t(d)!==null)E=!0,ne(B);else{var ue=t(p);ue!==null&&ve(R,ue.startTime-V)}}function B(V,ue){E=!1,w&&(w=!1,x(W),W=-1),S=!0;var ae=y;try{for(b(ue),v=t(d);v!==null&&(!(v.expirationTime>ue)||V&&!H());){var I=v.callback;if(typeof I=="function"){v.callback=null,y=v.priorityLevel;var re=I(v.expirationTime<=ue);ue=i.unstable_now(),typeof re=="function"?v.callback=re:v===t(d)&&s(d),b(ue)}else s(d);v=t(d)}if(v!==null)var Oe=!0;else{var ee=t(p);ee!==null&&ve(R,ee.startTime-ue),Oe=!1}return Oe}finally{v=null,y=ae,S=!1}}var N=!1,F=null,W=-1,P=5,A=-1;function H(){return!(i.unstable_now()-A<P)}function oe(){if(F!==null){var V=i.unstable_now();A=V;var ue=!0;try{ue=F(!0,V)}finally{ue?Q():(N=!1,F=null)}}else N=!1}var Q;if(typeof L=="function")Q=function(){L(oe)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,me=le.port2;le.port1.onmessage=oe,Q=function(){me.postMessage(null)}}else Q=function(){_(oe,0)};function ne(V){F=V,N||(N=!0,Q())}function ve(V,ue){W=_(function(){V(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(V){V.callback=null},i.unstable_continueExecution=function(){E||S||(E=!0,ne(B))},i.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},i.unstable_getCurrentPriorityLevel=function(){return y},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(V){switch(y){case 1:case 2:case 3:var ue=3;break;default:ue=y}var ae=y;y=ue;try{return V()}finally{y=ae}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(V,ue){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ae=y;y=V;try{return ue()}finally{y=ae}},i.unstable_scheduleCallback=function(V,ue,ae){var I=i.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?I+ae:I):ae=I,V){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ae+re,V={id:m++,callback:ue,priorityLevel:V,startTime:ae,expirationTime:re,sortIndex:-1},ae>I?(V.sortIndex=ae,e(p,V),t(d)===null&&V===t(p)&&(w?(x(W),W=-1):w=!0,ve(R,ae-I))):(V.sortIndex=re,e(d,V),E||S||(E=!0,ne(B))),V},i.unstable_shouldYield=H,i.unstable_wrapCallback=function(V){var ue=y;return function(){var ae=y;y=ue;try{return V.apply(this,arguments)}finally{y=ae}}}})(sf)),sf}var bm;function rx(){return bm||(bm=1,rf.exports=ix()),rf.exports}var Pm;function sx(){if(Pm)return Fn;Pm=1;var i=Dd(),e=rx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function y(n){return d.call(v,n)?!0:d.call(m,n)?!1:p.test(n)?v[n]=!0:(m[n]=!0,!1)}function S(n,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,o,u){if(r===null||typeof r>"u"||S(n,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,o,u,h,g,M){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=M}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];_[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,L);_[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,L);_[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,L);_[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,r,o,u){var h=_.hasOwnProperty(r)?_[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,o,h,u)&&(o=null),u||h===null?y(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,r,o):n.setAttribute(r,o))))}var R=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),H=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),V=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,I;function re(n){if(I===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+n}var Oe=!1;function ee(n,r){if(!n||Oe)return"";Oe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ie){var u=ie}Reflect.construct(n,[],r)}else{try{r.call()}catch(ie){u=ie}n.call(r.prototype)}else{try{throw Error()}catch(ie){u=ie}n()}}catch(ie){if(ie&&u&&typeof ie.stack=="string"){for(var h=ie.stack.split(`
`),g=u.stack.split(`
`),M=h.length-1,U=g.length-1;1<=M&&0<=U&&h[M]!==g[U];)U--;for(;1<=M&&0<=U;M--,U--)if(h[M]!==g[U]){if(M!==1||U!==1)do if(M--,U--,0>U||h[M]!==g[U]){var z=`
`+h[M].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=M&&0<=U);break}}}finally{Oe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?re(n):""}function fe(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=ee(n.type,!1),n;case 11:return n=ee(n.type.render,!1),n;case 1:return n=ee(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case N:return"Portal";case P:return"Profiler";case W:return"StrictMode";case Q:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case oe:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case me:return r=n.displayName||null,r!==null?r:Re(n.type)||"Memo";case ne:r=n._payload,n=n._init;try{return Re(n(r))}catch{}}return null}function Ee(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(r);case 8:return r===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ke(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ve(n){var r=Ke(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(M){u=""+M,g.call(this,M)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Mt(n){n._valueTracker||(n._valueTracker=Ve(n))}function Rt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=Ke(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function k(n,r){var o=r.checked;return ae({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Wt(n,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=Ae(r.value!=null?r.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function pt(n,r){r=r.checked,r!=null&&b(n,"checked",r,!1)}function xt(n,r){pt(n,r);var o=Ae(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ft(n,r.type,o):r.hasOwnProperty("defaultValue")&&ft(n,r.type,Ae(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ge(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function ft(n,r,o){(r!=="number"||ct(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var qe=Array.isArray;function tt(n,r,o,u){if(n=n.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=r.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Ae(o),r=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function It(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(qe(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:Ae(o)}}function T(n,r){var o=Ae(r.value),u=Ae(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function J(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?de(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ce,je=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(r,o,u,h)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function be(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(n){$e.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),ke[r]=ke[n]})});function _e(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||ke.hasOwnProperty(n)&&ke[n]?(""+r).trim():r+"px"}function Ne(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=_e(o,r[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var nt=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(n,r){if(r){if(nt[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Le(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function O(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Te=null,pe=null,Pe=null;function ye(n){if(n=Da(n)){if(typeof Te!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Wo(r),Te(n.stateNode,n.type,r))}}function he(n){pe?Pe?Pe.push(n):Pe=[n]:pe=n}function Ie(){if(pe){var n=pe,r=Pe;if(Pe=pe=null,ye(n),r)for(n=0;n<r.length;n++)ye(r[n])}}function et(n,r){return n(r)}function Pt(){}var yt=!1;function Pn(n,r,o){if(yt)return n(r,o);yt=!0;try{return et(n,r,o)}finally{yt=!1,(pe!==null||Pe!==null)&&(Pt(),Ie())}}function Sn(n,r){var o=n.stateNode;if(o===null)return null;var u=Wo(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var ds=!1;if(f)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){ds=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{ds=!1}function Ci(n,r,o,u,h,g,M,U,z){var ie=Array.prototype.slice.call(arguments,3);try{r.apply(o,ie)}catch(Se){this.onError(Se)}}var bi=!1,Nr=null,Ir=!1,er=null,Eo={onError:function(n){bi=!0,Nr=n}};function hs(n,r,o,u,h,g,M,U,z){bi=!1,Nr=null,Ci.apply(Eo,arguments)}function Mo(n,r,o,u,h,g,M,U,z){if(hs.apply(this,arguments),bi){if(bi){var ie=Nr;bi=!1,Nr=null}else throw Error(t(198));Ir||(Ir=!0,er=ie)}}function mi(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function wo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function To(n){if(mi(n)!==n)throw Error(t(188))}function Mu(n){var r=n.alternate;if(!r){if(r=mi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,u=r;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return To(h),n;if(g===u)return To(h),r;g=g.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=g;else{for(var M=!1,U=h.child;U;){if(U===o){M=!0,o=h,u=g;break}if(U===u){M=!0,u=h,o=g;break}U=U.sibling}if(!M){for(U=g.child;U;){if(U===o){M=!0,o=g,u=h;break}if(U===u){M=!0,u=g,o=h;break}U=U.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function Ro(n){return n=Mu(n),n!==null?Ao(n):null}function Ao(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ao(n);if(r!==null)return r;n=n.sibling}return null}var Co=e.unstable_scheduleCallback,C=e.unstable_cancelCallback,j=e.unstable_shouldYield,se=e.unstable_requestPaint,K=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,we=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,Be=e.unstable_LowPriority,ot=e.unstable_IdlePriority,at=null,We=null;function mt(n){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(at,n,void 0,(n.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Ct,Bt=Math.log,Ut=Math.LN2;function Ct(n){return n>>>=0,n===0?32:31-(Bt(n)/Ut|0)|0}var Qe=64,Lt=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tn(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,M=o&268435455;if(M!==0){var U=M&~h;U!==0?u=gt(U):(g&=M,g!==0&&(u=gt(g)))}else M=o&~h,M!==0?u=gt(M):g!==0&&(u=gt(g));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,g=r&-r,h>=g||h===16&&(g&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)o=31-dt(r),h=1<<o,u|=n[o],r&=~h;return u}function tr(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var M=31-dt(g),U=1<<M,z=h[M];z===-1?((U&o)===0||(U&u)!==0)&&(h[M]=tr(U,r)):z<=r&&(n.expiredLanes|=U),g&=~U}}function Pi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nt(){var n=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),n}function hn(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function nn(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-dt(r),n[r]=o}function un(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-dt(o),g=1<<h;r[h]=0,u[h]=-1,n[h]=-1,o&=~g}}function rn(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-dt(o),h=1<<u;h&r|n[u]&r&&(n[u]|=r),o&=~h}}var St=0;function gi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ih,wu,rh,sh,ah,Tu=!1,bo=[],nr=null,ir=null,rr=null,ga=new Map,va=new Map,sr=[],E_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(n,r){switch(n){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":ga.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(r.pointerId)}}function _a(n,r,o,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},r!==null&&(r=Da(r),r!==null&&wu(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function M_(n,r,o,u,h){switch(r){case"focusin":return nr=_a(nr,n,r,o,u,h),!0;case"dragenter":return ir=_a(ir,n,r,o,u,h),!0;case"mouseover":return rr=_a(rr,n,r,o,u,h),!0;case"pointerover":var g=h.pointerId;return ga.set(g,_a(ga.get(g)||null,n,r,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,va.set(g,_a(va.get(g)||null,n,r,o,u,h)),!0}return!1}function lh(n){var r=Fr(n.target);if(r!==null){var o=mi(r);if(o!==null){if(r=o.tag,r===13){if(r=wo(o),r!==null){n.blockedOn=r,ah(n.priority,function(){rh(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Po(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Au(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);st=u,o.target.dispatchEvent(u),st=null}else return r=Da(o),r!==null&&wu(r),n.blockedOn=o,!1;r.shift()}return!0}function uh(n,r,o){Po(n)&&o.delete(r)}function w_(){Tu=!1,nr!==null&&Po(nr)&&(nr=null),ir!==null&&Po(ir)&&(ir=null),rr!==null&&Po(rr)&&(rr=null),ga.forEach(uh),va.forEach(uh)}function xa(n,r){n.blockedOn===r&&(n.blockedOn=null,Tu||(Tu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,w_)))}function ya(n){function r(h){return xa(h,n)}if(0<bo.length){xa(bo[0],n);for(var o=1;o<bo.length;o++){var u=bo[o];u.blockedOn===n&&(u.blockedOn=null)}}for(nr!==null&&xa(nr,n),ir!==null&&xa(ir,n),rr!==null&&xa(rr,n),ga.forEach(r),va.forEach(r),o=0;o<sr.length;o++)u=sr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<sr.length&&(o=sr[0],o.blockedOn===null);)lh(o),o.blockedOn===null&&sr.shift()}var ps=R.ReactCurrentBatchConfig,Lo=!0;function T_(n,r,o,u){var h=St,g=ps.transition;ps.transition=null;try{St=1,Ru(n,r,o,u)}finally{St=h,ps.transition=g}}function R_(n,r,o,u){var h=St,g=ps.transition;ps.transition=null;try{St=4,Ru(n,r,o,u)}finally{St=h,ps.transition=g}}function Ru(n,r,o,u){if(Lo){var h=Au(n,r,o,u);if(h===null)Wu(n,r,u,Do,o),oh(n,u);else if(M_(h,n,r,o,u))u.stopPropagation();else if(oh(n,u),r&4&&-1<E_.indexOf(n)){for(;h!==null;){var g=Da(h);if(g!==null&&ih(g),g=Au(n,r,o,u),g===null&&Wu(n,r,u,Do,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else Wu(n,r,u,null,o)}}var Do=null;function Au(n,r,o,u){if(Do=null,n=O(u),n=Fr(n),n!==null)if(r=mi(n),r===null)n=null;else if(o=r.tag,o===13){if(n=wo(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Do=n,null}function ch(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case we:return 1;case De:return 4;case ze:case Be:return 16;case ot:return 536870912;default:return 16}default:return 16}}var ar=null,Cu=null,Uo=null;function fh(){if(Uo)return Uo;var n,r=Cu,o=r.length,u,h="value"in ar?ar.value:ar.textContent,g=h.length;for(n=0;n<o&&r[n]===h[n];n++);var M=o-n;for(u=1;u<=M&&r[o-u]===h[g-u];u++);return Uo=h.slice(n,1<u?1-u:void 0)}function No(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Io(){return!0}function dh(){return!1}function kn(n){function r(o,u,h,g,M){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=M,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(o=n[U],this[U]=o?o(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Io:dh,this.isPropagationStopped=dh,this}return ae(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),r}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bu=kn(ms),Sa=ae({},ms,{view:0,detail:0}),A_=kn(Sa),Pu,Lu,Ea,Fo=ae({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ea&&(Ea&&n.type==="mousemove"?(Pu=n.screenX-Ea.screenX,Lu=n.screenY-Ea.screenY):Lu=Pu=0,Ea=n),Pu)},movementY:function(n){return"movementY"in n?n.movementY:Lu}}),hh=kn(Fo),C_=ae({},Fo,{dataTransfer:0}),b_=kn(C_),P_=ae({},Sa,{relatedTarget:0}),Du=kn(P_),L_=ae({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),D_=kn(L_),U_=ae({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),N_=kn(U_),I_=ae({},ms,{data:0}),ph=kn(I_),F_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=k_[n])?!!r[n]:!1}function Uu(){return B_}var z_=ae({},Sa,{key:function(n){if(n.key){var r=F_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=No(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?O_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(n){return n.type==="keypress"?No(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?No(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),H_=kn(z_),V_=ae({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=kn(V_),G_=ae({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),W_=kn(G_),X_=ae({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),j_=kn(X_),$_=ae({},Fo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Y_=kn($_),q_=[9,13,27,32],Nu=f&&"CompositionEvent"in window,Ma=null;f&&"documentMode"in document&&(Ma=document.documentMode);var K_=f&&"TextEvent"in window&&!Ma,gh=f&&(!Nu||Ma&&8<Ma&&11>=Ma),vh=" ",_h=!1;function xh(n,r){switch(n){case"keyup":return q_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function Z_(n,r){switch(n){case"compositionend":return yh(r);case"keypress":return r.which!==32?null:(_h=!0,vh);case"textInput":return n=r.data,n===vh&&_h?null:n;default:return null}}function J_(n,r){if(gs)return n==="compositionend"||!Nu&&xh(n,r)?(n=fh(),Uo=Cu=ar=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return gh&&r.locale!=="ko"?null:r.data;default:return null}}var Q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Q_[n.type]:r==="textarea"}function Eh(n,r,o,u){he(u),r=Ho(r,"onChange"),0<r.length&&(o=new bu("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var wa=null,Ta=null;function e0(n){zh(n,0)}function Oo(n){var r=Ss(n);if(Rt(r))return n}function t0(n,r){if(n==="change")return r}var Mh=!1;if(f){var Iu;if(f){var Fu="oninput"in document;if(!Fu){var wh=document.createElement("div");wh.setAttribute("oninput","return;"),Fu=typeof wh.oninput=="function"}Iu=Fu}else Iu=!1;Mh=Iu&&(!document.documentMode||9<document.documentMode)}function Th(){wa&&(wa.detachEvent("onpropertychange",Rh),Ta=wa=null)}function Rh(n){if(n.propertyName==="value"&&Oo(Ta)){var r=[];Eh(r,Ta,n,O(n)),Pn(e0,r)}}function n0(n,r,o){n==="focusin"?(Th(),wa=r,Ta=o,wa.attachEvent("onpropertychange",Rh)):n==="focusout"&&Th()}function i0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oo(Ta)}function r0(n,r){if(n==="click")return Oo(r)}function s0(n,r){if(n==="input"||n==="change")return Oo(r)}function a0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ni=typeof Object.is=="function"?Object.is:a0;function Ra(n,r){if(ni(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!d.call(r,h)||!ni(n[h],r[h]))return!1}return!0}function Ah(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ch(n,r){var o=Ah(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ah(o)}}function bh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?bh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Ph(){for(var n=window,r=ct();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=ct(n.document)}return r}function Ou(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function o0(n){var r=Ph(),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&bh(o.ownerDocument.documentElement,o)){if(u!==null&&Ou(o)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=Ch(o,g);var M=Ch(o,u);h&&M&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(r),n.extend(M.node,M.offset)):(r.setEnd(M.node,M.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var l0=f&&"documentMode"in document&&11>=document.documentMode,vs=null,ku=null,Aa=null,Bu=!1;function Lh(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Bu||vs==null||vs!==ct(u)||(u=vs,"selectionStart"in u&&Ou(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Aa&&Ra(Aa,u)||(Aa=u,u=Ho(ku,"onSelect"),0<u.length&&(r=new bu("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=vs)))}function ko(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var _s={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},zu={},Dh={};f&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Bo(n){if(zu[n])return zu[n];if(!_s[n])return n;var r=_s[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Dh)return zu[n]=r[o];return n}var Uh=Bo("animationend"),Nh=Bo("animationiteration"),Ih=Bo("animationstart"),Fh=Bo("transitionend"),Oh=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(n,r){Oh.set(n,r),l(r,[n])}for(var Hu=0;Hu<kh.length;Hu++){var Vu=kh[Hu],u0=Vu.toLowerCase(),c0=Vu[0].toUpperCase()+Vu.slice(1);or(u0,"on"+c0)}or(Uh,"onAnimationEnd"),or(Nh,"onAnimationIteration"),or(Ih,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(Fh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function Bh(n,r,o){var u=n.type||"unknown-event";n.currentTarget=o,Mo(u,r,void 0,n),n.currentTarget=null}function zh(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var M=u.length-1;0<=M;M--){var U=u[M],z=U.instance,ie=U.currentTarget;if(U=U.listener,z!==g&&h.isPropagationStopped())break e;Bh(h,U,ie),g=z}else for(M=0;M<u.length;M++){if(U=u[M],z=U.instance,ie=U.currentTarget,U=U.listener,z!==g&&h.isPropagationStopped())break e;Bh(h,U,ie),g=z}}}if(Ir)throw n=er,Ir=!1,er=null,n}function Ot(n,r){var o=r[Ku];o===void 0&&(o=r[Ku]=new Set);var u=n+"__bubble";o.has(u)||(Hh(r,n,2,!1),o.add(u))}function Gu(n,r,o){var u=0;r&&(u|=4),Hh(o,n,u,r)}var zo="_reactListening"+Math.random().toString(36).slice(2);function ba(n){if(!n[zo]){n[zo]=!0,s.forEach(function(o){o!=="selectionchange"&&(f0.has(o)||Gu(o,!1,n),Gu(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[zo]||(r[zo]=!0,Gu("selectionchange",!1,r))}}function Hh(n,r,o,u){switch(ch(r)){case 1:var h=T_;break;case 4:h=R_;break;default:h=Ru}o=h.bind(null,r,o,n),h=void 0,!ds||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(r,o,{capture:!0,passive:h}):n.addEventListener(r,o,!0):h!==void 0?n.addEventListener(r,o,{passive:h}):n.addEventListener(r,o,!1)}function Wu(n,r,o,u,h){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var U=u.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(M===4)for(M=u.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===h||z.nodeType===8&&z.parentNode===h))return;M=M.return}for(;U!==null;){if(M=Fr(U),M===null)return;if(z=M.tag,z===5||z===6){u=g=M;continue e}U=U.parentNode}}u=u.return}Pn(function(){var ie=g,Se=O(o),Me=[];e:{var xe=Oh.get(n);if(xe!==void 0){var Fe=bu,Xe=n;switch(n){case"keypress":if(No(o)===0)break e;case"keydown":case"keyup":Fe=H_;break;case"focusin":Xe="focus",Fe=Du;break;case"focusout":Xe="blur",Fe=Du;break;case"beforeblur":case"afterblur":Fe=Du;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=b_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=W_;break;case Uh:case Nh:case Ih:Fe=D_;break;case Fh:Fe=j_;break;case"scroll":Fe=A_;break;case"wheel":Fe=Y_;break;case"copy":case"cut":case"paste":Fe=N_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=mh}var Ye=(r&4)!==0,Yt=!Ye&&n==="scroll",q=Ye?xe!==null?xe+"Capture":null:xe;Ye=[];for(var G=ie,Z;G!==null;){Z=G;var Ce=Z.stateNode;if(Z.tag===5&&Ce!==null&&(Z=Ce,q!==null&&(Ce=Sn(G,q),Ce!=null&&Ye.push(Pa(G,Ce,Z)))),Yt)break;G=G.return}0<Ye.length&&(xe=new Fe(xe,Xe,null,o,Se),Me.push({event:xe,listeners:Ye}))}}if((r&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",xe&&o!==st&&(Xe=o.relatedTarget||o.fromElement)&&(Fr(Xe)||Xe[Li]))break e;if((Fe||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Fe?(Xe=o.relatedTarget||o.toElement,Fe=ie,Xe=Xe?Fr(Xe):null,Xe!==null&&(Yt=mi(Xe),Xe!==Yt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Fe=null,Xe=ie),Fe!==Xe)){if(Ye=hh,Ce="onMouseLeave",q="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=mh,Ce="onPointerLeave",q="onPointerEnter",G="pointer"),Yt=Fe==null?xe:Ss(Fe),Z=Xe==null?xe:Ss(Xe),xe=new Ye(Ce,G+"leave",Fe,o,Se),xe.target=Yt,xe.relatedTarget=Z,Ce=null,Fr(Se)===ie&&(Ye=new Ye(q,G+"enter",Xe,o,Se),Ye.target=Z,Ye.relatedTarget=Yt,Ce=Ye),Yt=Ce,Fe&&Xe)t:{for(Ye=Fe,q=Xe,G=0,Z=Ye;Z;Z=xs(Z))G++;for(Z=0,Ce=q;Ce;Ce=xs(Ce))Z++;for(;0<G-Z;)Ye=xs(Ye),G--;for(;0<Z-G;)q=xs(q),Z--;for(;G--;){if(Ye===q||q!==null&&Ye===q.alternate)break t;Ye=xs(Ye),q=xs(q)}Ye=null}else Ye=null;Fe!==null&&Vh(Me,xe,Fe,Ye,!1),Xe!==null&&Yt!==null&&Vh(Me,Yt,Xe,Ye,!0)}}e:{if(xe=ie?Ss(ie):window,Fe=xe.nodeName&&xe.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&xe.type==="file")var Ze=t0;else if(Sh(xe))if(Mh)Ze=s0;else{Ze=i0;var it=n0}else(Fe=xe.nodeName)&&Fe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ze=r0);if(Ze&&(Ze=Ze(n,ie))){Eh(Me,Ze,o,Se);break e}it&&it(n,xe,ie),n==="focusout"&&(it=xe._wrapperState)&&it.controlled&&xe.type==="number"&&ft(xe,"number",xe.value)}switch(it=ie?Ss(ie):window,n){case"focusin":(Sh(it)||it.contentEditable==="true")&&(vs=it,ku=ie,Aa=null);break;case"focusout":Aa=ku=vs=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Lh(Me,o,Se);break;case"selectionchange":if(l0)break;case"keydown":case"keyup":Lh(Me,o,Se)}var rt;if(Nu)e:{switch(n){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else gs?xh(n,o)&&(lt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(lt="onCompositionStart");lt&&(gh&&o.locale!=="ko"&&(gs||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&gs&&(rt=fh()):(ar=Se,Cu="value"in ar?ar.value:ar.textContent,gs=!0)),it=Ho(ie,lt),0<it.length&&(lt=new ph(lt,n,null,o,Se),Me.push({event:lt,listeners:it}),rt?lt.data=rt:(rt=yh(o),rt!==null&&(lt.data=rt)))),(rt=K_?Z_(n,o):J_(n,o))&&(ie=Ho(ie,"onBeforeInput"),0<ie.length&&(Se=new ph("onBeforeInput","beforeinput",null,o,Se),Me.push({event:Se,listeners:ie}),Se.data=rt))}zh(Me,r)})}function Pa(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Ho(n,r){for(var o=r+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Sn(n,o),g!=null&&u.unshift(Pa(n,g,h)),g=Sn(n,r),g!=null&&u.push(Pa(n,g,h))),n=n.return}return u}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Vh(n,r,o,u,h){for(var g=r._reactName,M=[];o!==null&&o!==u;){var U=o,z=U.alternate,ie=U.stateNode;if(z!==null&&z===u)break;U.tag===5&&ie!==null&&(U=ie,h?(z=Sn(o,g),z!=null&&M.unshift(Pa(o,z,U))):h||(z=Sn(o,g),z!=null&&M.push(Pa(o,z,U)))),o=o.return}M.length!==0&&n.push({event:r,listeners:M})}var d0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function Gh(n){return(typeof n=="string"?n:""+n).replace(d0,`
`).replace(h0,"")}function Vo(n,r,o){if(r=Gh(r),Gh(n)!==r&&o)throw Error(t(425))}function Go(){}var Xu=null,ju=null;function $u(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Yu=typeof setTimeout=="function"?setTimeout:void 0,p0=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(n){return Wh.resolve(null).then(n).catch(g0)}:Yu;function g0(n){setTimeout(function(){throw n})}function qu(n,r){var o=r,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),ya(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);ya(r)}function lr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Xh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),vi="__reactFiber$"+ys,La="__reactProps$"+ys,Li="__reactContainer$"+ys,Ku="__reactEvents$"+ys,v0="__reactListeners$"+ys,_0="__reactHandles$"+ys;function Fr(n){var r=n[vi];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Li]||o[vi]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=Xh(n);n!==null;){if(o=n[vi])return o;n=Xh(n)}return r}n=o,o=n.parentNode}return null}function Da(n){return n=n[vi]||n[Li],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Wo(n){return n[La]||null}var Zu=[],Es=-1;function ur(n){return{current:n}}function kt(n){0>Es||(n.current=Zu[Es],Zu[Es]=null,Es--)}function Ft(n,r){Es++,Zu[Es]=n.current,n.current=r}var cr={},pn=ur(cr),Ln=ur(!1),Or=cr;function Ms(n,r){var o=n.type.contextTypes;if(!o)return cr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=r[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function Dn(n){return n=n.childContextTypes,n!=null}function Xo(){kt(Ln),kt(pn)}function jh(n,r,o){if(pn.current!==cr)throw Error(t(168));Ft(pn,r),Ft(Ln,o)}function $h(n,r,o){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(t(108,Ee(n)||"Unknown",h));return ae({},o,u)}function jo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||cr,Or=pn.current,Ft(pn,n),Ft(Ln,Ln.current),!0}function Yh(n,r,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=$h(n,r,Or),u.__reactInternalMemoizedMergedChildContext=n,kt(Ln),kt(pn),Ft(pn,n)):kt(Ln),Ft(Ln,o)}var Di=null,$o=!1,Ju=!1;function qh(n){Di===null?Di=[n]:Di.push(n)}function x0(n){$o=!0,qh(n)}function fr(){if(!Ju&&Di!==null){Ju=!0;var n=0,r=St;try{var o=Di;for(St=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Di=null,$o=!1}catch(h){throw Di!==null&&(Di=Di.slice(n+1)),Co(we,fr),h}finally{St=r,Ju=!1}}return null}var ws=[],Ts=0,Yo=null,qo=0,Wn=[],Xn=0,kr=null,Ui=1,Ni="";function Br(n,r){ws[Ts++]=qo,ws[Ts++]=Yo,Yo=n,qo=r}function Kh(n,r,o){Wn[Xn++]=Ui,Wn[Xn++]=Ni,Wn[Xn++]=kr,kr=n;var u=Ui;n=Ni;var h=32-dt(u)-1;u&=~(1<<h),o+=1;var g=32-dt(r)+h;if(30<g){var M=h-h%5;g=(u&(1<<M)-1).toString(32),u>>=M,h-=M,Ui=1<<32-dt(r)+h|o<<h|u,Ni=g+n}else Ui=1<<g|o<<h|u,Ni=n}function Qu(n){n.return!==null&&(Br(n,1),Kh(n,1,0))}function ec(n){for(;n===Yo;)Yo=ws[--Ts],ws[Ts]=null,qo=ws[--Ts],ws[Ts]=null;for(;n===kr;)kr=Wn[--Xn],Wn[Xn]=null,Ni=Wn[--Xn],Wn[Xn]=null,Ui=Wn[--Xn],Wn[Xn]=null}var Bn=null,zn=null,zt=!1,ii=null;function Zh(n,r){var o=qn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function Jh(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Bn=n,zn=lr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Bn=n,zn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=kr!==null?{id:Ui,overflow:Ni}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=qn(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,Bn=n,zn=null,!0):!1;default:return!1}}function tc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nc(n){if(zt){var r=zn;if(r){var o=r;if(!Jh(n,r)){if(tc(n))throw Error(t(418));r=lr(o.nextSibling);var u=Bn;r&&Jh(n,r)?Zh(u,o):(n.flags=n.flags&-4097|2,zt=!1,Bn=n)}}else{if(tc(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Bn=n}}}function Qh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Ko(n){if(n!==Bn)return!1;if(!zt)return Qh(n),zt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!$u(n.type,n.memoizedProps)),r&&(r=zn)){if(tc(n))throw ep(),Error(t(418));for(;r;)Zh(n,r),r=lr(r.nextSibling)}if(Qh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){zn=lr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}zn=null}}else zn=Bn?lr(n.stateNode.nextSibling):null;return!0}function ep(){for(var n=zn;n;)n=lr(n.nextSibling)}function Rs(){zn=Bn=null,zt=!1}function ic(n){ii===null?ii=[n]:ii.push(n)}var y0=R.ReactCurrentBatchConfig;function Ua(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(M){var U=h.refs;M===null?delete U[g]:U[g]=M},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Zo(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function tp(n){var r=n._init;return r(n._payload)}function np(n){function r(q,G){if(n){var Z=q.deletions;Z===null?(q.deletions=[G],q.flags|=16):Z.push(G)}}function o(q,G){if(!n)return null;for(;G!==null;)r(q,G),G=G.sibling;return null}function u(q,G){for(q=new Map;G!==null;)G.key!==null?q.set(G.key,G):q.set(G.index,G),G=G.sibling;return q}function h(q,G){return q=xr(q,G),q.index=0,q.sibling=null,q}function g(q,G,Z){return q.index=Z,n?(Z=q.alternate,Z!==null?(Z=Z.index,Z<G?(q.flags|=2,G):Z):(q.flags|=2,G)):(q.flags|=1048576,G)}function M(q){return n&&q.alternate===null&&(q.flags|=2),q}function U(q,G,Z,Ce){return G===null||G.tag!==6?(G=Yc(Z,q.mode,Ce),G.return=q,G):(G=h(G,Z),G.return=q,G)}function z(q,G,Z,Ce){var Ze=Z.type;return Ze===F?Se(q,G,Z.props.children,Ce,Z.key):G!==null&&(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ne&&tp(Ze)===G.type)?(Ce=h(G,Z.props),Ce.ref=Ua(q,G,Z),Ce.return=q,Ce):(Ce=Sl(Z.type,Z.key,Z.props,null,q.mode,Ce),Ce.ref=Ua(q,G,Z),Ce.return=q,Ce)}function ie(q,G,Z,Ce){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=qc(Z,q.mode,Ce),G.return=q,G):(G=h(G,Z.children||[]),G.return=q,G)}function Se(q,G,Z,Ce,Ze){return G===null||G.tag!==7?(G=$r(Z,q.mode,Ce,Ze),G.return=q,G):(G=h(G,Z),G.return=q,G)}function Me(q,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Yc(""+G,q.mode,Z),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case B:return Z=Sl(G.type,G.key,G.props,null,q.mode,Z),Z.ref=Ua(q,null,G),Z.return=q,Z;case N:return G=qc(G,q.mode,Z),G.return=q,G;case ne:var Ce=G._init;return Me(q,Ce(G._payload),Z)}if(qe(G)||ue(G))return G=$r(G,q.mode,Z,null),G.return=q,G;Zo(q,G)}return null}function xe(q,G,Z,Ce){var Ze=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Ze!==null?null:U(q,G,""+Z,Ce);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case B:return Z.key===Ze?z(q,G,Z,Ce):null;case N:return Z.key===Ze?ie(q,G,Z,Ce):null;case ne:return Ze=Z._init,xe(q,G,Ze(Z._payload),Ce)}if(qe(Z)||ue(Z))return Ze!==null?null:Se(q,G,Z,Ce,null);Zo(q,Z)}return null}function Fe(q,G,Z,Ce,Ze){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return q=q.get(Z)||null,U(G,q,""+Ce,Ze);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case B:return q=q.get(Ce.key===null?Z:Ce.key)||null,z(G,q,Ce,Ze);case N:return q=q.get(Ce.key===null?Z:Ce.key)||null,ie(G,q,Ce,Ze);case ne:var it=Ce._init;return Fe(q,G,Z,it(Ce._payload),Ze)}if(qe(Ce)||ue(Ce))return q=q.get(Z)||null,Se(G,q,Ce,Ze,null);Zo(G,Ce)}return null}function Xe(q,G,Z,Ce){for(var Ze=null,it=null,rt=G,lt=G=0,on=null;rt!==null&&lt<Z.length;lt++){rt.index>lt?(on=rt,rt=null):on=rt.sibling;var wt=xe(q,rt,Z[lt],Ce);if(wt===null){rt===null&&(rt=on);break}n&&rt&&wt.alternate===null&&r(q,rt),G=g(wt,G,lt),it===null?Ze=wt:it.sibling=wt,it=wt,rt=on}if(lt===Z.length)return o(q,rt),zt&&Br(q,lt),Ze;if(rt===null){for(;lt<Z.length;lt++)rt=Me(q,Z[lt],Ce),rt!==null&&(G=g(rt,G,lt),it===null?Ze=rt:it.sibling=rt,it=rt);return zt&&Br(q,lt),Ze}for(rt=u(q,rt);lt<Z.length;lt++)on=Fe(rt,q,lt,Z[lt],Ce),on!==null&&(n&&on.alternate!==null&&rt.delete(on.key===null?lt:on.key),G=g(on,G,lt),it===null?Ze=on:it.sibling=on,it=on);return n&&rt.forEach(function(yr){return r(q,yr)}),zt&&Br(q,lt),Ze}function Ye(q,G,Z,Ce){var Ze=ue(Z);if(typeof Ze!="function")throw Error(t(150));if(Z=Ze.call(Z),Z==null)throw Error(t(151));for(var it=Ze=null,rt=G,lt=G=0,on=null,wt=Z.next();rt!==null&&!wt.done;lt++,wt=Z.next()){rt.index>lt?(on=rt,rt=null):on=rt.sibling;var yr=xe(q,rt,wt.value,Ce);if(yr===null){rt===null&&(rt=on);break}n&&rt&&yr.alternate===null&&r(q,rt),G=g(yr,G,lt),it===null?Ze=yr:it.sibling=yr,it=yr,rt=on}if(wt.done)return o(q,rt),zt&&Br(q,lt),Ze;if(rt===null){for(;!wt.done;lt++,wt=Z.next())wt=Me(q,wt.value,Ce),wt!==null&&(G=g(wt,G,lt),it===null?Ze=wt:it.sibling=wt,it=wt);return zt&&Br(q,lt),Ze}for(rt=u(q,rt);!wt.done;lt++,wt=Z.next())wt=Fe(rt,q,lt,wt.value,Ce),wt!==null&&(n&&wt.alternate!==null&&rt.delete(wt.key===null?lt:wt.key),G=g(wt,G,lt),it===null?Ze=wt:it.sibling=wt,it=wt);return n&&rt.forEach(function(Q0){return r(q,Q0)}),zt&&Br(q,lt),Ze}function Yt(q,G,Z,Ce){if(typeof Z=="object"&&Z!==null&&Z.type===F&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case B:e:{for(var Ze=Z.key,it=G;it!==null;){if(it.key===Ze){if(Ze=Z.type,Ze===F){if(it.tag===7){o(q,it.sibling),G=h(it,Z.props.children),G.return=q,q=G;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ne&&tp(Ze)===it.type){o(q,it.sibling),G=h(it,Z.props),G.ref=Ua(q,it,Z),G.return=q,q=G;break e}o(q,it);break}else r(q,it);it=it.sibling}Z.type===F?(G=$r(Z.props.children,q.mode,Ce,Z.key),G.return=q,q=G):(Ce=Sl(Z.type,Z.key,Z.props,null,q.mode,Ce),Ce.ref=Ua(q,G,Z),Ce.return=q,q=Ce)}return M(q);case N:e:{for(it=Z.key;G!==null;){if(G.key===it)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){o(q,G.sibling),G=h(G,Z.children||[]),G.return=q,q=G;break e}else{o(q,G);break}else r(q,G);G=G.sibling}G=qc(Z,q.mode,Ce),G.return=q,q=G}return M(q);case ne:return it=Z._init,Yt(q,G,it(Z._payload),Ce)}if(qe(Z))return Xe(q,G,Z,Ce);if(ue(Z))return Ye(q,G,Z,Ce);Zo(q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,G!==null&&G.tag===6?(o(q,G.sibling),G=h(G,Z),G.return=q,q=G):(o(q,G),G=Yc(Z,q.mode,Ce),G.return=q,q=G),M(q)):o(q,G)}return Yt}var As=np(!0),ip=np(!1),Jo=ur(null),Qo=null,Cs=null,rc=null;function sc(){rc=Cs=Qo=null}function ac(n){var r=Jo.current;kt(Jo),n._currentValue=r}function oc(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function bs(n,r){Qo=n,rc=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Un=!0),n.firstContext=null)}function jn(n){var r=n._currentValue;if(rc!==n)if(n={context:n,memoizedValue:r,next:null},Cs===null){if(Qo===null)throw Error(t(308));Cs=n,Qo.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return r}var zr=null;function lc(n){zr===null?zr=[n]:zr.push(n)}function rp(n,r,o,u){var h=r.interleaved;return h===null?(o.next=o,lc(r)):(o.next=h.next,h.next=o),r.interleaved=o,Ii(n,u)}function Ii(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var dr=!1;function uc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Fi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function hr(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,Ii(n,o)}return h=u.interleaved,h===null?(r.next=r,lc(u)):(r.next=h.next,h.next=r),u.interleaved=r,Ii(n,o)}function el(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,rn(n,o)}}function ap(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=M:g=g.next=M,o=o.next}while(o!==null);g===null?h=g=r:g=g.next=r}else h=g=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function tl(n,r,o,u){var h=n.updateQueue;dr=!1;var g=h.firstBaseUpdate,M=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var z=U,ie=z.next;z.next=null,M===null?g=ie:M.next=ie,M=z;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,U=Se.lastBaseUpdate,U!==M&&(U===null?Se.firstBaseUpdate=ie:U.next=ie,Se.lastBaseUpdate=z))}if(g!==null){var Me=h.baseState;M=0,Se=ie=z=null,U=g;do{var xe=U.lane,Fe=U.eventTime;if((u&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Fe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Xe=n,Ye=U;switch(xe=r,Fe=o,Ye.tag){case 1:if(Xe=Ye.payload,typeof Xe=="function"){Me=Xe.call(Fe,Me,xe);break e}Me=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ye.payload,xe=typeof Xe=="function"?Xe.call(Fe,Me,xe):Xe,xe==null)break e;Me=ae({},Me,xe);break e;case 2:dr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,xe=h.effects,xe===null?h.effects=[U]:xe.push(U))}else Fe={eventTime:Fe,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Se===null?(ie=Se=Fe,z=Me):Se=Se.next=Fe,M|=xe;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,h.lastBaseUpdate=xe,h.shared.pending=null}}while(!0);if(Se===null&&(z=Me),h.baseState=z,h.firstBaseUpdate=ie,h.lastBaseUpdate=Se,r=h.shared.interleaved,r!==null){h=r;do M|=h.lane,h=h.next;while(h!==r)}else g===null&&(h.shared.lanes=0);Gr|=M,n.lanes=M,n.memoizedState=Me}}function op(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Na={},_i=ur(Na),Ia=ur(Na),Fa=ur(Na);function Hr(n){if(n===Na)throw Error(t(174));return n}function cc(n,r){switch(Ft(Fa,r),Ft(Ia,n),Ft(_i,Na),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ge(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ge(r,n)}kt(_i),Ft(_i,r)}function Ps(){kt(_i),kt(Ia),kt(Fa)}function lp(n){Hr(Fa.current);var r=Hr(_i.current),o=ge(r,n.type);r!==o&&(Ft(Ia,n),Ft(_i,o))}function fc(n){Ia.current===n&&(kt(_i),kt(Ia))}var Ht=ur(0);function nl(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var dc=[];function hc(){for(var n=0;n<dc.length;n++)dc[n]._workInProgressVersionPrimary=null;dc.length=0}var il=R.ReactCurrentDispatcher,pc=R.ReactCurrentBatchConfig,Vr=0,Vt=null,Zt=null,sn=null,rl=!1,Oa=!1,ka=0,S0=0;function mn(){throw Error(t(321))}function mc(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!ni(n[o],r[o]))return!1;return!0}function gc(n,r,o,u,h,g){if(Vr=g,Vt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,il.current=n===null||n.memoizedState===null?T0:R0,n=o(u,h),Oa){g=0;do{if(Oa=!1,ka=0,25<=g)throw Error(t(301));g+=1,sn=Zt=null,r.updateQueue=null,il.current=A0,n=o(u,h)}while(Oa)}if(il.current=ol,r=Zt!==null&&Zt.next!==null,Vr=0,sn=Zt=Vt=null,rl=!1,r)throw Error(t(300));return n}function vc(){var n=ka!==0;return ka=0,n}function xi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Vt.memoizedState=sn=n:sn=sn.next=n,sn}function $n(){if(Zt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var r=sn===null?Vt.memoizedState:sn.next;if(r!==null)sn=r,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},sn===null?Vt.memoizedState=sn=n:sn=sn.next=n}return sn}function Ba(n,r){return typeof r=="function"?r(n):r}function _c(n){var r=$n(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Zt,h=u.baseQueue,g=o.pending;if(g!==null){if(h!==null){var M=h.next;h.next=g.next,g.next=M}u.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,u=u.baseState;var U=M=null,z=null,ie=g;do{var Se=ie.lane;if((Vr&Se)===Se)z!==null&&(z=z.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),u=ie.hasEagerState?ie.eagerState:n(u,ie.action);else{var Me={lane:Se,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};z===null?(U=z=Me,M=u):z=z.next=Me,Vt.lanes|=Se,Gr|=Se}ie=ie.next}while(ie!==null&&ie!==g);z===null?M=u:z.next=U,ni(u,r.memoizedState)||(Un=!0),r.memoizedState=u,r.baseState=M,r.baseQueue=z,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do g=h.lane,Vt.lanes|=g,Gr|=g,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function xc(n){var r=$n(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,g=r.memoizedState;if(h!==null){o.pending=null;var M=h=h.next;do g=n(g,M.action),M=M.next;while(M!==h);ni(g,r.memoizedState)||(Un=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,u]}function up(){}function cp(n,r){var o=Vt,u=$n(),h=r(),g=!ni(u.memoizedState,h);if(g&&(u.memoizedState=h,Un=!0),u=u.queue,yc(hp.bind(null,o,u,n),[n]),u.getSnapshot!==r||g||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,za(9,dp.bind(null,o,u,h,r),void 0,null),an===null)throw Error(t(349));(Vr&30)!==0||fp(o,r,h)}return h}function fp(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Vt.updateQueue,r===null?(r={lastEffect:null,stores:null},Vt.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function dp(n,r,o,u){r.value=o,r.getSnapshot=u,pp(r)&&mp(n)}function hp(n,r,o){return o(function(){pp(r)&&mp(n)})}function pp(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!ni(n,o)}catch{return!0}}function mp(n){var r=Ii(n,1);r!==null&&oi(r,n,1,-1)}function gp(n){var r=xi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:n},r.queue=n,n=n.dispatch=w0.bind(null,Vt,n),[r.memoizedState,n]}function za(n,r,o,u){return n={tag:n,create:r,destroy:o,deps:u,next:null},r=Vt.updateQueue,r===null?(r={lastEffect:null,stores:null},Vt.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n)),n}function vp(){return $n().memoizedState}function sl(n,r,o,u){var h=xi();Vt.flags|=n,h.memoizedState=za(1|r,o,void 0,u===void 0?null:u)}function al(n,r,o,u){var h=$n();u=u===void 0?null:u;var g=void 0;if(Zt!==null){var M=Zt.memoizedState;if(g=M.destroy,u!==null&&mc(u,M.deps)){h.memoizedState=za(r,o,g,u);return}}Vt.flags|=n,h.memoizedState=za(1|r,o,g,u)}function _p(n,r){return sl(8390656,8,n,r)}function yc(n,r){return al(2048,8,n,r)}function xp(n,r){return al(4,2,n,r)}function yp(n,r){return al(4,4,n,r)}function Sp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Ep(n,r,o){return o=o!=null?o.concat([n]):null,al(4,4,Sp.bind(null,r,n),o)}function Sc(){}function Mp(n,r){var o=$n();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&mc(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function wp(n,r){var o=$n();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&mc(r,u[1])?u[0]:(n=n(),o.memoizedState=[n,r],n)}function Tp(n,r,o){return(Vr&21)===0?(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=o):(ni(o,r)||(o=Nt(),Vt.lanes|=o,Gr|=o,n.baseState=!0),r)}function E0(n,r){var o=St;St=o!==0&&4>o?o:4,n(!0);var u=pc.transition;pc.transition={};try{n(!1),r()}finally{St=o,pc.transition=u}}function Rp(){return $n().memoizedState}function M0(n,r,o){var u=vr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Ap(n))Cp(r,o);else if(o=rp(n,r,o,u),o!==null){var h=wn();oi(o,n,u,h),bp(o,r,u)}}function w0(n,r,o){var u=vr(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ap(n))Cp(r,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var M=r.lastRenderedState,U=g(M,o);if(h.hasEagerState=!0,h.eagerState=U,ni(U,M)){var z=r.interleaved;z===null?(h.next=h,lc(r)):(h.next=z.next,z.next=h),r.interleaved=h;return}}catch{}o=rp(n,r,h,u),o!==null&&(h=wn(),oi(o,n,u,h),bp(o,r,u))}}function Ap(n){var r=n.alternate;return n===Vt||r!==null&&r===Vt}function Cp(n,r){Oa=rl=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function bp(n,r,o){if((o&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,rn(n,o)}}var ol={readContext:jn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},T0={readContext:jn,useCallback:function(n,r){return xi().memoizedState=[n,r===void 0?null:r],n},useContext:jn,useEffect:_p,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,sl(4194308,4,Sp.bind(null,r,n),o)},useLayoutEffect:function(n,r){return sl(4194308,4,n,r)},useInsertionEffect:function(n,r){return sl(4,2,n,r)},useMemo:function(n,r){var o=xi();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var u=xi();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=M0.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var r=xi();return n={current:n},r.memoizedState=n},useState:gp,useDebugValue:Sc,useDeferredValue:function(n){return xi().memoizedState=n},useTransition:function(){var n=gp(!1),r=n[0];return n=E0.bind(null,n[1]),xi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var u=Vt,h=xi();if(zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),an===null)throw Error(t(349));(Vr&30)!==0||fp(u,r,o)}h.memoizedState=o;var g={value:o,getSnapshot:r};return h.queue=g,_p(hp.bind(null,u,g,n),[n]),u.flags|=2048,za(9,dp.bind(null,u,g,o,r),void 0,null),o},useId:function(){var n=xi(),r=an.identifierPrefix;if(zt){var o=Ni,u=Ui;o=(u&~(1<<32-dt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=ka++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=S0++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},R0={readContext:jn,useCallback:Mp,useContext:jn,useEffect:yc,useImperativeHandle:Ep,useInsertionEffect:xp,useLayoutEffect:yp,useMemo:wp,useReducer:_c,useRef:vp,useState:function(){return _c(Ba)},useDebugValue:Sc,useDeferredValue:function(n){var r=$n();return Tp(r,Zt.memoizedState,n)},useTransition:function(){var n=_c(Ba)[0],r=$n().memoizedState;return[n,r]},useMutableSource:up,useSyncExternalStore:cp,useId:Rp,unstable_isNewReconciler:!1},A0={readContext:jn,useCallback:Mp,useContext:jn,useEffect:yc,useImperativeHandle:Ep,useInsertionEffect:xp,useLayoutEffect:yp,useMemo:wp,useReducer:xc,useRef:vp,useState:function(){return xc(Ba)},useDebugValue:Sc,useDeferredValue:function(n){var r=$n();return Zt===null?r.memoizedState=n:Tp(r,Zt.memoizedState,n)},useTransition:function(){var n=xc(Ba)[0],r=$n().memoizedState;return[n,r]},useMutableSource:up,useSyncExternalStore:cp,useId:Rp,unstable_isNewReconciler:!1};function ri(n,r){if(n&&n.defaultProps){r=ae({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Ec(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:ae({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ll={isMounted:function(n){return(n=n._reactInternals)?mi(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=wn(),h=vr(n),g=Fi(u,h);g.payload=r,o!=null&&(g.callback=o),r=hr(n,g,h),r!==null&&(oi(r,n,h,u),el(r,n,h))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=wn(),h=vr(n),g=Fi(u,h);g.tag=1,g.payload=r,o!=null&&(g.callback=o),r=hr(n,g,h),r!==null&&(oi(r,n,h,u),el(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=wn(),u=vr(n),h=Fi(o,u);h.tag=2,r!=null&&(h.callback=r),r=hr(n,h,u),r!==null&&(oi(r,n,u,o),el(r,n,u))}};function Pp(n,r,o,u,h,g,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,M):r.prototype&&r.prototype.isPureReactComponent?!Ra(o,u)||!Ra(h,g):!0}function Lp(n,r,o){var u=!1,h=cr,g=r.contextType;return typeof g=="object"&&g!==null?g=jn(g):(h=Dn(r)?Or:pn.current,u=r.contextTypes,g=(u=u!=null)?Ms(n,h):cr),r=new r(o,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ll,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),r}function Dp(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&ll.enqueueReplaceState(r,r.state,null)}function Mc(n,r,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},uc(n);var g=r.contextType;typeof g=="object"&&g!==null?h.context=jn(g):(g=Dn(r)?Or:pn.current,h.context=Ms(n,g)),h.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Ec(n,r,g,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&ll.enqueueReplaceState(h,h.state,null),tl(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,r){try{var o="",u=r;do o+=fe(u),u=u.return;while(u);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:h,digest:null}}function wc(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Tc(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var C0=typeof WeakMap=="function"?WeakMap:Map;function Up(n,r,o){o=Fi(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){ml||(ml=!0,zc=u),Tc(n,r)},o}function Np(n,r,o){o=Fi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){Tc(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Tc(n,r),typeof u!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var M=r.stack;this.componentDidCatch(r.value,{componentStack:M!==null?M:""})}),o}function Ip(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new C0;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),n=V0.bind(null,n,r,o),r.then(n,n))}function Fp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Op(n,r,o,u,h){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Fi(-1,1),r.tag=2,hr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var b0=R.ReactCurrentOwner,Un=!1;function Mn(n,r,o,u){r.child=n===null?ip(r,null,o,u):As(r,n.child,o,u)}function kp(n,r,o,u,h){o=o.render;var g=r.ref;return bs(r,h),u=gc(n,r,o,u,g,h),o=vc(),n!==null&&!Un?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,Oi(n,r,h)):(zt&&o&&Qu(r),r.flags|=1,Mn(n,r,u,h),r.child)}function Bp(n,r,o,u,h){if(n===null){var g=o.type;return typeof g=="function"&&!$c(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=g,zp(n,r,g,u,h)):(n=Sl(o.type,null,u,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&h)===0){var M=g.memoizedProps;if(o=o.compare,o=o!==null?o:Ra,o(M,u)&&n.ref===r.ref)return Oi(n,r,h)}return r.flags|=1,n=xr(g,u),n.ref=r.ref,n.return=r,r.child=n}function zp(n,r,o,u,h){if(n!==null){var g=n.memoizedProps;if(Ra(g,u)&&n.ref===r.ref)if(Un=!1,r.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Un=!0);else return r.lanes=n.lanes,Oi(n,r,h)}return Rc(n,r,o,u,h)}function Hp(n,r,o){var u=r.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Us,Hn),Hn|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ft(Us,Hn),Hn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,Ft(Us,Hn),Hn|=u}else g!==null?(u=g.baseLanes|o,r.memoizedState=null):u=o,Ft(Us,Hn),Hn|=u;return Mn(n,r,h,o),r.child}function Vp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Rc(n,r,o,u,h){var g=Dn(o)?Or:pn.current;return g=Ms(r,g),bs(r,h),o=gc(n,r,o,u,g,h),u=vc(),n!==null&&!Un?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,Oi(n,r,h)):(zt&&u&&Qu(r),r.flags|=1,Mn(n,r,o,h),r.child)}function Gp(n,r,o,u,h){if(Dn(o)){var g=!0;jo(r)}else g=!1;if(bs(r,h),r.stateNode===null)cl(n,r),Lp(r,o,u),Mc(r,o,u,h),u=!0;else if(n===null){var M=r.stateNode,U=r.memoizedProps;M.props=U;var z=M.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=jn(ie):(ie=Dn(o)?Or:pn.current,ie=Ms(r,ie));var Se=o.getDerivedStateFromProps,Me=typeof Se=="function"||typeof M.getSnapshotBeforeUpdate=="function";Me||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==u||z!==ie)&&Dp(r,M,u,ie),dr=!1;var xe=r.memoizedState;M.state=xe,tl(r,u,M,h),z=r.memoizedState,U!==u||xe!==z||Ln.current||dr?(typeof Se=="function"&&(Ec(r,o,Se,u),z=r.memoizedState),(U=dr||Pp(r,o,U,u,xe,z,ie))?(Me||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(r.flags|=4194308)):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=z),M.props=u,M.state=z,M.context=ie,u=U):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{M=r.stateNode,sp(n,r),U=r.memoizedProps,ie=r.type===r.elementType?U:ri(r.type,U),M.props=ie,Me=r.pendingProps,xe=M.context,z=o.contextType,typeof z=="object"&&z!==null?z=jn(z):(z=Dn(o)?Or:pn.current,z=Ms(r,z));var Fe=o.getDerivedStateFromProps;(Se=typeof Fe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==Me||xe!==z)&&Dp(r,M,u,z),dr=!1,xe=r.memoizedState,M.state=xe,tl(r,u,M,h);var Xe=r.memoizedState;U!==Me||xe!==Xe||Ln.current||dr?(typeof Fe=="function"&&(Ec(r,o,Fe,u),Xe=r.memoizedState),(ie=dr||Pp(r,o,ie,u,xe,Xe,z)||!1)?(Se||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Xe,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Xe,z)),typeof M.componentDidUpdate=="function"&&(r.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Xe),M.props=u,M.state=Xe,M.context=z,u=ie):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=1024),u=!1)}return Ac(n,r,o,u,g,h)}function Ac(n,r,o,u,h,g){Vp(n,r);var M=(r.flags&128)!==0;if(!u&&!M)return h&&Yh(r,o,!1),Oi(n,r,g);u=r.stateNode,b0.current=r;var U=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&M?(r.child=As(r,n.child,null,g),r.child=As(r,null,U,g)):Mn(n,r,U,g),r.memoizedState=u.state,h&&Yh(r,o,!0),r.child}function Wp(n){var r=n.stateNode;r.pendingContext?jh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&jh(n,r.context,!1),cc(n,r.containerInfo)}function Xp(n,r,o,u,h){return Rs(),ic(h),r.flags|=256,Mn(n,r,o,u),r.child}var Cc={dehydrated:null,treeContext:null,retryLane:0};function bc(n){return{baseLanes:n,cachePool:null,transitions:null}}function jp(n,r,o){var u=r.pendingProps,h=Ht.current,g=!1,M=(r.flags&128)!==0,U;if((U=M)||(U=n!==null&&n.memoizedState===null?!1:(h&2)!==0),U?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Ft(Ht,h&1),n===null)return nc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(M=u.children,n=u.fallback,g?(u=r.mode,g=r.child,M={mode:"hidden",children:M},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=M):g=El(M,u,0,null),n=$r(n,u,o,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=bc(o),r.memoizedState=Cc,n):Pc(r,M));if(h=n.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return P0(n,r,M,u,U,h,o);if(g){g=u.fallback,M=r.mode,h=n.child,U=h.sibling;var z={mode:"hidden",children:u.children};return(M&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=z,r.deletions=null):(u=xr(h,z),u.subtreeFlags=h.subtreeFlags&14680064),U!==null?g=xr(U,g):(g=$r(g,M,o,null),g.flags|=2),g.return=r,u.return=r,u.sibling=g,r.child=u,u=g,g=r.child,M=n.child.memoizedState,M=M===null?bc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},g.memoizedState=M,g.childLanes=n.childLanes&~o,r.memoizedState=Cc,u}return g=n.child,n=g.sibling,u=xr(g,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=u,r.memoizedState=null,u}function Pc(n,r){return r=El({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ul(n,r,o,u){return u!==null&&ic(u),As(r,n.child,null,o),n=Pc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function P0(n,r,o,u,h,g,M){if(o)return r.flags&256?(r.flags&=-257,u=wc(Error(t(422))),ul(n,r,M,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=u.fallback,h=r.mode,u=El({mode:"visible",children:u.children},h,0,null),g=$r(g,h,M,null),g.flags|=2,u.return=r,g.return=r,u.sibling=g,r.child=u,(r.mode&1)!==0&&As(r,n.child,null,M),r.child.memoizedState=bc(M),r.memoizedState=Cc,g);if((r.mode&1)===0)return ul(n,r,M,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var U=u.dgst;return u=U,g=Error(t(419)),u=wc(g,u,void 0),ul(n,r,M,u)}if(U=(M&n.childLanes)!==0,Un||U){if(u=an,u!==null){switch(M&-M){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|M))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Ii(n,h),oi(u,n,h,-1))}return jc(),u=wc(Error(t(421))),ul(n,r,M,u)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=G0.bind(null,n),h._reactRetry=r,null):(n=g.treeContext,zn=lr(h.nextSibling),Bn=r,zt=!0,ii=null,n!==null&&(Wn[Xn++]=Ui,Wn[Xn++]=Ni,Wn[Xn++]=kr,Ui=n.id,Ni=n.overflow,kr=r),r=Pc(r,u.children),r.flags|=4096,r)}function $p(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),oc(n.return,r,o)}function Lc(n,r,o,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function Yp(n,r,o){var u=r.pendingProps,h=u.revealOrder,g=u.tail;if(Mn(n,r,u.children,o),u=Ht.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$p(n,o,r);else if(n.tag===19)$p(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ft(Ht,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)n=o.alternate,n!==null&&nl(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),Lc(r,!1,h,o,g);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&nl(n)===null){r.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}Lc(r,!0,o,null,g);break;case"together":Lc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function cl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Oi(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Gr|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=xr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=xr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function L0(n,r,o){switch(r.tag){case 3:Wp(r),Rs();break;case 5:lp(r);break;case 1:Dn(r.type)&&jo(r);break;case 4:cc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;Ft(Jo,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Ft(Ht,Ht.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?jp(n,r,o):(Ft(Ht,Ht.current&1),n=Oi(n,r,o),n!==null?n.sibling:null);Ft(Ht,Ht.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(n.flags&128)!==0){if(u)return Yp(n,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ft(Ht,Ht.current),u)break;return null;case 22:case 23:return r.lanes=0,Hp(n,r,o)}return Oi(n,r,o)}var qp,Dc,Kp,Zp;qp=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Dc=function(){},Kp=function(n,r,o,u){var h=n.memoizedProps;if(h!==u){n=r.stateNode,Hr(_i.current);var g=null;switch(o){case"input":h=k(n,h),u=k(n,u),g=[];break;case"select":h=ae({},h,{value:void 0}),u=ae({},u,{value:void 0}),g=[];break;case"textarea":h=It(n,h),u=It(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Go)}Je(o,u);var M;o=null;for(ie in h)if(!u.hasOwnProperty(ie)&&h.hasOwnProperty(ie)&&h[ie]!=null)if(ie==="style"){var U=h[ie];for(M in U)U.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?g||(g=[]):(g=g||[]).push(ie,null));for(ie in u){var z=u[ie];if(U=h?.[ie],u.hasOwnProperty(ie)&&z!==U&&(z!=null||U!=null))if(ie==="style")if(U){for(M in U)!U.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in z)z.hasOwnProperty(M)&&U[M]!==z[M]&&(o||(o={}),o[M]=z[M])}else o||(g||(g=[]),g.push(ie,o)),o=z;else ie==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(g=g||[]).push(ie,z)):ie==="children"?typeof z!="string"&&typeof z!="number"||(g=g||[]).push(ie,""+z):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(z!=null&&ie==="onScroll"&&Ot("scroll",n),g||U===z||(g=[])):(g=g||[]).push(ie,z))}o&&(g=g||[]).push("style",o);var ie=g;(r.updateQueue=ie)&&(r.flags|=4)}},Zp=function(n,r,o,u){o!==u&&(r.flags|=4)};function Ha(n,r){if(!zt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function gn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function D0(n,r,o){var u=r.pendingProps;switch(ec(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(r),null;case 1:return Dn(r.type)&&Xo(),gn(r),null;case 3:return u=r.stateNode,Ps(),kt(Ln),kt(pn),hc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ko(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ii!==null&&(Gc(ii),ii=null))),Dc(n,r),gn(r),null;case 5:fc(r);var h=Hr(Fa.current);if(o=r.type,n!==null&&r.stateNode!=null)Kp(n,r,o,u,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return gn(r),null}if(n=Hr(_i.current),Ko(r)){u=r.stateNode,o=r.type;var g=r.memoizedProps;switch(u[vi]=r,u[La]=g,n=(r.mode&1)!==0,o){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(h=0;h<Ca.length;h++)Ot(Ca[h],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":Wt(u,g),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Ot("invalid",u);break;case"textarea":D(u,g),Ot("invalid",u)}Je(o,g),h=null;for(var M in g)if(g.hasOwnProperty(M)){var U=g[M];M==="children"?typeof U=="string"?u.textContent!==U&&(g.suppressHydrationWarning!==!0&&Vo(u.textContent,U,n),h=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&Vo(u.textContent,U,n),h=["children",""+U]):a.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Ot("scroll",u)}switch(o){case"input":Mt(u),Ge(u,g,!0);break;case"textarea":Mt(u),J(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Go)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{M=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[vi]=r,n[La]=u,qp(n,r,!1,!1),r.stateNode=n;e:{switch(M=Le(o,u),o){case"dialog":Ot("cancel",n),Ot("close",n),h=u;break;case"iframe":case"object":case"embed":Ot("load",n),h=u;break;case"video":case"audio":for(h=0;h<Ca.length;h++)Ot(Ca[h],n);h=u;break;case"source":Ot("error",n),h=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),h=u;break;case"details":Ot("toggle",n),h=u;break;case"input":Wt(n,u),h=k(n,u),Ot("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=ae({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":D(n,u),h=It(n,u),Ot("invalid",n);break;default:h=u}Je(o,h),U=h;for(g in U)if(U.hasOwnProperty(g)){var z=U[g];g==="style"?Ne(n,z):g==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&je(n,z)):g==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&be(n,z):typeof z=="number"&&be(n,""+z):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?z!=null&&g==="onScroll"&&Ot("scroll",n):z!=null&&b(n,g,z,M))}switch(o){case"input":Mt(n),Ge(n,u,!1);break;case"textarea":Mt(n),J(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?tt(n,!!u.multiple,g,!1):u.defaultValue!=null&&tt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Go)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return gn(r),null;case 6:if(n&&r.stateNode!=null)Zp(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(o=Hr(Fa.current),Hr(_i.current),Ko(r)){if(u=r.stateNode,o=r.memoizedProps,u[vi]=r,(g=u.nodeValue!==o)&&(n=Bn,n!==null))switch(n.tag){case 3:Vo(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Vo(u.nodeValue,o,(n.mode&1)!==0)}g&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[vi]=r,r.stateNode=u}return gn(r),null;case 13:if(kt(Ht),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&zn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)ep(),Rs(),r.flags|=98560,g=!1;else if(g=Ko(r),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[vi]=r}else Rs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;gn(r),g=!1}else ii!==null&&(Gc(ii),ii=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ht.current&1)!==0?Jt===0&&(Jt=3):jc())),r.updateQueue!==null&&(r.flags|=4),gn(r),null);case 4:return Ps(),Dc(n,r),n===null&&ba(r.stateNode.containerInfo),gn(r),null;case 10:return ac(r.type._context),gn(r),null;case 17:return Dn(r.type)&&Xo(),gn(r),null;case 19:if(kt(Ht),g=r.memoizedState,g===null)return gn(r),null;if(u=(r.flags&128)!==0,M=g.rendering,M===null)if(u)Ha(g,!1);else{if(Jt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(M=nl(n),M!==null){for(r.flags|=128,Ha(g,!1),u=M.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)g=o,n=u,g.flags&=14680066,M=g.alternate,M===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=M.childLanes,g.lanes=M.lanes,g.child=M.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=M.memoizedProps,g.memoizedState=M.memoizedState,g.updateQueue=M.updateQueue,g.type=M.type,n=M.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ft(Ht,Ht.current&1|2),r.child}n=n.sibling}g.tail!==null&&K()>Ns&&(r.flags|=128,u=!0,Ha(g,!1),r.lanes=4194304)}else{if(!u)if(n=nl(M),n!==null){if(r.flags|=128,u=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Ha(g,!0),g.tail===null&&g.tailMode==="hidden"&&!M.alternate&&!zt)return gn(r),null}else 2*K()-g.renderingStartTime>Ns&&o!==1073741824&&(r.flags|=128,u=!0,Ha(g,!1),r.lanes=4194304);g.isBackwards?(M.sibling=r.child,r.child=M):(o=g.last,o!==null?o.sibling=M:r.child=M,g.last=M)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=K(),r.sibling=null,o=Ht.current,Ft(Ht,u?o&1|2:o&1),r):(gn(r),null);case 22:case 23:return Xc(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Hn&1073741824)!==0&&(gn(r),r.subtreeFlags&6&&(r.flags|=8192)):gn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function U0(n,r){switch(ec(r),r.tag){case 1:return Dn(r.type)&&Xo(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ps(),kt(Ln),kt(pn),hc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return fc(r),null;case 13:if(kt(Ht),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Rs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return kt(Ht),null;case 4:return Ps(),null;case 10:return ac(r.type._context),null;case 22:case 23:return Xc(),null;case 24:return null;default:return null}}var fl=!1,vn=!1,N0=typeof WeakSet=="function"?WeakSet:Set,He=null;function Ds(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Xt(n,r,u)}else o.current=null}function Uc(n,r,o){try{o()}catch(u){Xt(n,r,u)}}var Jp=!1;function I0(n,r){if(Xu=Lo,n=Ph(),Ou(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var M=0,U=-1,z=-1,ie=0,Se=0,Me=n,xe=null;t:for(;;){for(var Fe;Me!==o||h!==0&&Me.nodeType!==3||(U=M+h),Me!==g||u!==0&&Me.nodeType!==3||(z=M+u),Me.nodeType===3&&(M+=Me.nodeValue.length),(Fe=Me.firstChild)!==null;)xe=Me,Me=Fe;for(;;){if(Me===n)break t;if(xe===o&&++ie===h&&(U=M),xe===g&&++Se===u&&(z=M),(Fe=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=Fe}o=U===-1||z===-1?null:{start:U,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(ju={focusedElem:n,selectionRange:o},Lo=!1,He=r;He!==null;)if(r=He,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,He=n;else for(;He!==null;){r=He;try{var Xe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ye=Xe.memoizedProps,Yt=Xe.memoizedState,q=r.stateNode,G=q.getSnapshotBeforeUpdate(r.elementType===r.type?Ye:ri(r.type,Ye),Yt);q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Z=r.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){Xt(r,r.return,Ce)}if(n=r.sibling,n!==null){n.return=r.return,He=n;break}He=r.return}return Xe=Jp,Jp=!1,Xe}function Va(n,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Uc(r,o,g)}h=h.next}while(h!==u)}}function dl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function Nc(n){var r=n.ref;if(r!==null){var o=n.stateNode;n.tag,n=o,typeof r=="function"?r(n):r.current=n}}function Qp(n){var r=n.alternate;r!==null&&(n.alternate=null,Qp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[vi],delete r[La],delete r[Ku],delete r[v0],delete r[_0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function em(n){return n.tag===5||n.tag===3||n.tag===4}function tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||em(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ic(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Go));else if(u!==4&&(n=n.child,n!==null))for(Ic(n,r,o),n=n.sibling;n!==null;)Ic(n,r,o),n=n.sibling}function Fc(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Fc(n,r,o),n=n.sibling;n!==null;)Fc(n,r,o),n=n.sibling}var cn=null,si=!1;function pr(n,r,o){for(o=o.child;o!==null;)nm(n,r,o),o=o.sibling}function nm(n,r,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(at,o)}catch{}switch(o.tag){case 5:vn||Ds(o,r);case 6:var u=cn,h=si;cn=null,pr(n,r,o),cn=u,si=h,cn!==null&&(si?(n=cn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(si?(n=cn,o=o.stateNode,n.nodeType===8?qu(n.parentNode,o):n.nodeType===1&&qu(n,o),ya(n)):qu(cn,o.stateNode));break;case 4:u=cn,h=si,cn=o.stateNode.containerInfo,si=!0,pr(n,r,o),cn=u,si=h;break;case 0:case 11:case 14:case 15:if(!vn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,M=g.destroy;g=g.tag,M!==void 0&&((g&2)!==0||(g&4)!==0)&&Uc(o,r,M),h=h.next}while(h!==u)}pr(n,r,o);break;case 1:if(!vn&&(Ds(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(U){Xt(o,r,U)}pr(n,r,o);break;case 21:pr(n,r,o);break;case 22:o.mode&1?(vn=(u=vn)||o.memoizedState!==null,pr(n,r,o),vn=u):pr(n,r,o);break;default:pr(n,r,o)}}function im(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new N0),r.forEach(function(u){var h=W0.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function ai(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var g=n,M=r,U=M;e:for(;U!==null;){switch(U.tag){case 5:cn=U.stateNode,si=!1;break e;case 3:cn=U.stateNode.containerInfo,si=!0;break e;case 4:cn=U.stateNode.containerInfo,si=!0;break e}U=U.return}if(cn===null)throw Error(t(160));nm(g,M,h),cn=null,si=!1;var z=h.alternate;z!==null&&(z.return=null),h.return=null}catch(ie){Xt(h,r,ie)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)rm(r,n),r=r.sibling}function rm(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(r,n),yi(n),u&4){try{Va(3,n,n.return),dl(3,n)}catch(Ye){Xt(n,n.return,Ye)}try{Va(5,n,n.return)}catch(Ye){Xt(n,n.return,Ye)}}break;case 1:ai(r,n),yi(n),u&512&&o!==null&&Ds(o,o.return);break;case 5:if(ai(r,n),yi(n),u&512&&o!==null&&Ds(o,o.return),n.flags&32){var h=n.stateNode;try{be(h,"")}catch(Ye){Xt(n,n.return,Ye)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,M=o!==null?o.memoizedProps:g,U=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&pt(h,g),Le(U,M);var ie=Le(U,g);for(M=0;M<z.length;M+=2){var Se=z[M],Me=z[M+1];Se==="style"?Ne(h,Me):Se==="dangerouslySetInnerHTML"?je(h,Me):Se==="children"?be(h,Me):b(h,Se,Me,ie)}switch(U){case"input":xt(h,g);break;case"textarea":T(h,g);break;case"select":var xe=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Fe=g.value;Fe!=null?tt(h,!!g.multiple,Fe,!1):xe!==!!g.multiple&&(g.defaultValue!=null?tt(h,!!g.multiple,g.defaultValue,!0):tt(h,!!g.multiple,g.multiple?[]:"",!1))}h[La]=g}catch(Ye){Xt(n,n.return,Ye)}}break;case 6:if(ai(r,n),yi(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Ye){Xt(n,n.return,Ye)}}break;case 3:if(ai(r,n),yi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ya(r.containerInfo)}catch(Ye){Xt(n,n.return,Ye)}break;case 4:ai(r,n),yi(n);break;case 13:ai(r,n),yi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Bc=K())),u&4&&im(n);break;case 22:if(Se=o!==null&&o.memoizedState!==null,n.mode&1?(vn=(ie=vn)||Se,ai(r,n),vn=ie):ai(r,n),yi(n),u&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!Se&&(n.mode&1)!==0)for(He=n,Se=n.child;Se!==null;){for(Me=He=Se;He!==null;){switch(xe=He,Fe=xe.child,xe.tag){case 0:case 11:case 14:case 15:Va(4,xe,xe.return);break;case 1:Ds(xe,xe.return);var Xe=xe.stateNode;if(typeof Xe.componentWillUnmount=="function"){u=xe,o=xe.return;try{r=u,Xe.props=r.memoizedProps,Xe.state=r.memoizedState,Xe.componentWillUnmount()}catch(Ye){Xt(u,o,Ye)}}break;case 5:Ds(xe,xe.return);break;case 22:if(xe.memoizedState!==null){om(Me);continue}}Fe!==null?(Fe.return=xe,He=Fe):om(Me)}Se=Se.sibling}e:for(Se=null,Me=n;;){if(Me.tag===5){if(Se===null){Se=Me;try{h=Me.stateNode,ie?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=Me.stateNode,z=Me.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=_e("display",M))}catch(Ye){Xt(n,n.return,Ye)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=ie?"":Me.memoizedProps}catch(Ye){Xt(n,n.return,Ye)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:ai(r,n),yi(n),u&4&&im(n);break;case 21:break;default:ai(r,n),yi(n)}}function yi(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(em(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(be(h,""),u.flags&=-33);var g=tm(n);Fc(n,g,h);break;case 3:case 4:var M=u.stateNode.containerInfo,U=tm(n);Ic(n,U,M);break;default:throw Error(t(161))}}catch(z){Xt(n,n.return,z)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function F0(n,r,o){He=n,sm(n)}function sm(n,r,o){for(var u=(n.mode&1)!==0;He!==null;){var h=He,g=h.child;if(h.tag===22&&u){var M=h.memoizedState!==null||fl;if(!M){var U=h.alternate,z=U!==null&&U.memoizedState!==null||vn;U=fl;var ie=vn;if(fl=M,(vn=z)&&!ie)for(He=h;He!==null;)M=He,z=M.child,M.tag===22&&M.memoizedState!==null?lm(h):z!==null?(z.return=M,He=z):lm(h);for(;g!==null;)He=g,sm(g),g=g.sibling;He=h,fl=U,vn=ie}am(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,He=g):am(n)}}function am(n){for(;He!==null;){var r=He;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:vn||dl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!vn)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:ri(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&op(r,g,u);break;case 3:var M=r.updateQueue;if(M!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}op(r,M,o)}break;case 5:var U=r.stateNode;if(o===null&&r.flags&4){o=U;var z=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ie=r.alternate;if(ie!==null){var Se=ie.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&ya(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||r.flags&512&&Nc(r)}catch(xe){Xt(r,r.return,xe)}}if(r===n){He=null;break}if(o=r.sibling,o!==null){o.return=r.return,He=o;break}He=r.return}}function om(n){for(;He!==null;){var r=He;if(r===n){He=null;break}var o=r.sibling;if(o!==null){o.return=r.return,He=o;break}He=r.return}}function lm(n){for(;He!==null;){var r=He;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{dl(4,r)}catch(z){Xt(r,o,z)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(z){Xt(r,h,z)}}var g=r.return;try{Nc(r)}catch(z){Xt(r,g,z)}break;case 5:var M=r.return;try{Nc(r)}catch(z){Xt(r,M,z)}}}catch(z){Xt(r,r.return,z)}if(r===n){He=null;break}var U=r.sibling;if(U!==null){U.return=r.return,He=U;break}He=r.return}}var O0=Math.ceil,hl=R.ReactCurrentDispatcher,Oc=R.ReactCurrentOwner,Yn=R.ReactCurrentBatchConfig,Et=0,an=null,qt=null,fn=0,Hn=0,Us=ur(0),Jt=0,Ga=null,Gr=0,pl=0,kc=0,Wa=null,Nn=null,Bc=0,Ns=1/0,ki=null,ml=!1,zc=null,mr=null,gl=!1,gr=null,vl=0,Xa=0,Hc=null,_l=-1,xl=0;function wn(){return(Et&6)!==0?K():_l!==-1?_l:_l=K()}function vr(n){return(n.mode&1)===0?1:(Et&2)!==0&&fn!==0?fn&-fn:y0.transition!==null?(xl===0&&(xl=Nt()),xl):(n=St,n!==0||(n=window.event,n=n===void 0?16:ch(n.type)),n)}function oi(n,r,o,u){if(50<Xa)throw Xa=0,Hc=null,Error(t(185));nn(n,o,u),((Et&2)===0||n!==an)&&(n===an&&((Et&2)===0&&(pl|=o),Jt===4&&_r(n,fn)),In(n,u),o===1&&Et===0&&(r.mode&1)===0&&(Ns=K()+500,$o&&fr()))}function In(n,r){var o=n.callbackNode;En(n,r);var u=tn(n,n===an?fn:0);if(u===0)o!==null&&C(o),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(o!=null&&C(o),r===1)n.tag===0?x0(cm.bind(null,n)):qh(cm.bind(null,n)),m0(function(){(Et&6)===0&&fr()}),o=null;else{switch(gi(u)){case 1:o=we;break;case 4:o=De;break;case 16:o=ze;break;case 536870912:o=ot;break;default:o=ze}o=_m(o,um.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function um(n,r){if(_l=-1,xl=0,(Et&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Is()&&n.callbackNode!==o)return null;var u=tn(n,n===an?fn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=yl(n,u);else{r=u;var h=Et;Et|=2;var g=dm();(an!==n||fn!==r)&&(ki=null,Ns=K()+500,Xr(n,r));do try{z0();break}catch(U){fm(n,U)}while(!0);sc(),hl.current=g,Et=h,qt!==null?r=0:(an=null,fn=0,r=Jt)}if(r!==0){if(r===2&&(h=Pi(n),h!==0&&(u=h,r=Vc(n,h))),r===1)throw o=Ga,Xr(n,0),_r(n,u),In(n,K()),o;if(r===6)_r(n,u);else{if(h=n.current.alternate,(u&30)===0&&!k0(h)&&(r=yl(n,u),r===2&&(g=Pi(n),g!==0&&(u=g,r=Vc(n,g))),r===1))throw o=Ga,Xr(n,0),_r(n,u),In(n,K()),o;switch(n.finishedWork=h,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:jr(n,Nn,ki);break;case 3:if(_r(n,u),(u&130023424)===u&&(r=Bc+500-K(),10<r)){if(tn(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){wn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Yu(jr.bind(null,n,Nn,ki),r);break}jr(n,Nn,ki);break;case 4:if(_r(n,u),(u&4194240)===u)break;for(r=n.eventTimes,h=-1;0<u;){var M=31-dt(u);g=1<<M,M=r[M],M>h&&(h=M),u&=~g}if(u=h,u=K()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*O0(u/1960))-u,10<u){n.timeoutHandle=Yu(jr.bind(null,n,Nn,ki),u);break}jr(n,Nn,ki);break;case 5:jr(n,Nn,ki);break;default:throw Error(t(329))}}}return In(n,K()),n.callbackNode===o?um.bind(null,n):null}function Vc(n,r){var o=Wa;return n.current.memoizedState.isDehydrated&&(Xr(n,r).flags|=256),n=yl(n,r),n!==2&&(r=Nn,Nn=o,r!==null&&Gc(r)),n}function Gc(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function k0(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!ni(g(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _r(n,r){for(r&=~kc,r&=~pl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-dt(r),u=1<<o;n[o]=-1,r&=~u}}function cm(n){if((Et&6)!==0)throw Error(t(327));Is();var r=tn(n,0);if((r&1)===0)return In(n,K()),null;var o=yl(n,r);if(n.tag!==0&&o===2){var u=Pi(n);u!==0&&(r=u,o=Vc(n,u))}if(o===1)throw o=Ga,Xr(n,0),_r(n,r),In(n,K()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,jr(n,Nn,ki),In(n,K()),null}function Wc(n,r){var o=Et;Et|=1;try{return n(r)}finally{Et=o,Et===0&&(Ns=K()+500,$o&&fr())}}function Wr(n){gr!==null&&gr.tag===0&&(Et&6)===0&&Is();var r=Et;Et|=1;var o=Yn.transition,u=St;try{if(Yn.transition=null,St=1,n)return n()}finally{St=u,Yn.transition=o,Et=r,(Et&6)===0&&fr()}}function Xc(){Hn=Us.current,kt(Us)}function Xr(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,p0(o)),qt!==null)for(o=qt.return;o!==null;){var u=o;switch(ec(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Xo();break;case 3:Ps(),kt(Ln),kt(pn),hc();break;case 5:fc(u);break;case 4:Ps();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:ac(u.type._context);break;case 22:case 23:Xc()}o=o.return}if(an=n,qt=n=xr(n.current,null),fn=Hn=r,Jt=0,Ga=null,kc=pl=Gr=0,Nn=Wa=null,zr!==null){for(r=0;r<zr.length;r++)if(o=zr[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,g=o.pending;if(g!==null){var M=g.next;g.next=h,u.next=M}o.pending=u}zr=null}return n}function fm(n,r){do{var o=qt;try{if(sc(),il.current=ol,rl){for(var u=Vt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}rl=!1}if(Vr=0,sn=Zt=Vt=null,Oa=!1,ka=0,Oc.current=null,o===null||o.return===null){Jt=1,Ga=r,qt=null;break}e:{var g=n,M=o.return,U=o,z=r;if(r=fn,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ie=z,Se=U,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Fe=Fp(M);if(Fe!==null){Fe.flags&=-257,Op(Fe,M,U,g,r),Fe.mode&1&&Ip(g,ie,r),r=Fe,z=ie;var Xe=r.updateQueue;if(Xe===null){var Ye=new Set;Ye.add(z),r.updateQueue=Ye}else Xe.add(z);break e}else{if((r&1)===0){Ip(g,ie,r),jc();break e}z=Error(t(426))}}else if(zt&&U.mode&1){var Yt=Fp(M);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Op(Yt,M,U,g,r),ic(Ls(z,U));break e}}g=z=Ls(z,U),Jt!==4&&(Jt=2),Wa===null?Wa=[g]:Wa.push(g),g=M;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var q=Up(g,z,r);ap(g,q);break e;case 1:U=z;var G=g.type,Z=g.stateNode;if((g.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(mr===null||!mr.has(Z)))){g.flags|=65536,r&=-r,g.lanes|=r;var Ce=Np(g,U,r);ap(g,Ce);break e}}g=g.return}while(g!==null)}pm(o)}catch(Ze){r=Ze,qt===o&&o!==null&&(qt=o=o.return);continue}break}while(!0)}function dm(){var n=hl.current;return hl.current=ol,n===null?ol:n}function jc(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),an===null||(Gr&268435455)===0&&(pl&268435455)===0||_r(an,fn)}function yl(n,r){var o=Et;Et|=2;var u=dm();(an!==n||fn!==r)&&(ki=null,Xr(n,r));do try{B0();break}catch(h){fm(n,h)}while(!0);if(sc(),Et=o,hl.current=u,qt!==null)throw Error(t(261));return an=null,fn=0,Jt}function B0(){for(;qt!==null;)hm(qt)}function z0(){for(;qt!==null&&!j();)hm(qt)}function hm(n){var r=vm(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,r===null?pm(n):qt=r,Oc.current=null}function pm(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=D0(o,r,Hn),o!==null){qt=o;return}}else{if(o=U0(o,r),o!==null){o.flags&=32767,qt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,qt=null;return}}if(r=r.sibling,r!==null){qt=r;return}qt=r=n}while(r!==null);Jt===0&&(Jt=5)}function jr(n,r,o){var u=St,h=Yn.transition;try{Yn.transition=null,St=1,H0(n,r,o,u)}finally{Yn.transition=h,St=u}return null}function H0(n,r,o,u){do Is();while(gr!==null);if((Et&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(un(n,g),n===an&&(qt=an=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||gl||(gl=!0,_m(ze,function(){return Is(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Yn.transition,Yn.transition=null;var M=St;St=1;var U=Et;Et|=4,Oc.current=null,I0(n,o),rm(o,n),o0(ju),Lo=!!Xu,ju=Xu=null,n.current=o,F0(o),se(),Et=U,St=M,Yn.transition=g}else n.current=o;if(gl&&(gl=!1,gr=n,vl=h),g=n.pendingLanes,g===0&&(mr=null),mt(o.stateNode),In(n,K()),r!==null)for(u=n.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(ml)throw ml=!1,n=zc,zc=null,n;return(vl&1)!==0&&n.tag!==0&&Is(),g=n.pendingLanes,(g&1)!==0?n===Hc?Xa++:(Xa=0,Hc=n):Xa=0,fr(),null}function Is(){if(gr!==null){var n=gi(vl),r=Yn.transition,o=St;try{if(Yn.transition=null,St=16>n?16:n,gr===null)var u=!1;else{if(n=gr,gr=null,vl=0,(Et&6)!==0)throw Error(t(331));var h=Et;for(Et|=4,He=n.current;He!==null;){var g=He,M=g.child;if((He.flags&16)!==0){var U=g.deletions;if(U!==null){for(var z=0;z<U.length;z++){var ie=U[z];for(He=ie;He!==null;){var Se=He;switch(Se.tag){case 0:case 11:case 15:Va(8,Se,g)}var Me=Se.child;if(Me!==null)Me.return=Se,He=Me;else for(;He!==null;){Se=He;var xe=Se.sibling,Fe=Se.return;if(Qp(Se),Se===ie){He=null;break}if(xe!==null){xe.return=Fe,He=xe;break}He=Fe}}}var Xe=g.alternate;if(Xe!==null){var Ye=Xe.child;if(Ye!==null){Xe.child=null;do{var Yt=Ye.sibling;Ye.sibling=null,Ye=Yt}while(Ye!==null)}}He=g}}if((g.subtreeFlags&2064)!==0&&M!==null)M.return=g,He=M;else e:for(;He!==null;){if(g=He,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Va(9,g,g.return)}var q=g.sibling;if(q!==null){q.return=g.return,He=q;break e}He=g.return}}var G=n.current;for(He=G;He!==null;){M=He;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,He=Z;else e:for(M=G;He!==null;){if(U=He,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:dl(9,U)}}catch(Ze){Xt(U,U.return,Ze)}if(U===M){He=null;break e}var Ce=U.sibling;if(Ce!==null){Ce.return=U.return,He=Ce;break e}He=U.return}}if(Et=h,fr(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(at,n)}catch{}u=!0}return u}finally{St=o,Yn.transition=r}}return!1}function mm(n,r,o){r=Ls(o,r),r=Up(n,r,1),n=hr(n,r,1),r=wn(),n!==null&&(nn(n,1,r),In(n,r))}function Xt(n,r,o){if(n.tag===3)mm(n,n,o);else for(;r!==null;){if(r.tag===3){mm(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(mr===null||!mr.has(u))){n=Ls(o,n),n=Np(r,n,1),r=hr(r,n,1),n=wn(),r!==null&&(nn(r,1,n),In(r,n));break}}r=r.return}}function V0(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),r=wn(),n.pingedLanes|=n.suspendedLanes&o,an===n&&(fn&o)===o&&(Jt===4||Jt===3&&(fn&130023424)===fn&&500>K()-Bc?Xr(n,0):kc|=o),In(n,r)}function gm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Lt,Lt<<=1,(Lt&130023424)===0&&(Lt=4194304)));var o=wn();n=Ii(n,r),n!==null&&(nn(n,r,o),In(n,o))}function G0(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),gm(n,o)}function W0(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),gm(n,o)}var vm;vm=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ln.current)Un=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Un=!1,L0(n,r,o);Un=(n.flags&131072)!==0}else Un=!1,zt&&(r.flags&1048576)!==0&&Kh(r,qo,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;cl(n,r),n=r.pendingProps;var h=Ms(r,pn.current);bs(r,o),h=gc(null,r,u,n,h,o);var g=vc();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Dn(u)?(g=!0,jo(r)):g=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,uc(r),h.updater=ll,r.stateNode=h,h._reactInternals=r,Mc(r,u,n,o),r=Ac(null,r,u,!0,g,o)):(r.tag=0,zt&&g&&Qu(r),Mn(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(cl(n,r),n=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=j0(u),n=ri(u,n),h){case 0:r=Rc(null,r,u,n,o);break e;case 1:r=Gp(null,r,u,n,o);break e;case 11:r=kp(null,r,u,n,o);break e;case 14:r=Bp(null,r,u,ri(u.type,n),o);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ri(u,h),Rc(n,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ri(u,h),Gp(n,r,u,h,o);case 3:e:{if(Wp(r),n===null)throw Error(t(387));u=r.pendingProps,g=r.memoizedState,h=g.element,sp(n,r),tl(r,u,null,o);var M=r.memoizedState;if(u=M.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){h=Ls(Error(t(423)),r),r=Xp(n,r,u,o,h);break e}else if(u!==h){h=Ls(Error(t(424)),r),r=Xp(n,r,u,o,h);break e}else for(zn=lr(r.stateNode.containerInfo.firstChild),Bn=r,zt=!0,ii=null,o=ip(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Rs(),u===h){r=Oi(n,r,o);break e}Mn(n,r,u,o)}r=r.child}return r;case 5:return lp(r),n===null&&nc(r),u=r.type,h=r.pendingProps,g=n!==null?n.memoizedProps:null,M=h.children,$u(u,h)?M=null:g!==null&&$u(u,g)&&(r.flags|=32),Vp(n,r),Mn(n,r,M,o),r.child;case 6:return n===null&&nc(r),null;case 13:return jp(n,r,o);case 4:return cc(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=As(r,null,u,o):Mn(n,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ri(u,h),kp(n,r,u,h,o);case 7:return Mn(n,r,r.pendingProps,o),r.child;case 8:return Mn(n,r,r.pendingProps.children,o),r.child;case 12:return Mn(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,g=r.memoizedProps,M=h.value,Ft(Jo,u._currentValue),u._currentValue=M,g!==null)if(ni(g.value,M)){if(g.children===h.children&&!Ln.current){r=Oi(n,r,o);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var U=g.dependencies;if(U!==null){M=g.child;for(var z=U.firstContext;z!==null;){if(z.context===u){if(g.tag===1){z=Fi(-1,o&-o),z.tag=2;var ie=g.updateQueue;if(ie!==null){ie=ie.shared;var Se=ie.pending;Se===null?z.next=z:(z.next=Se.next,Se.next=z),ie.pending=z}}g.lanes|=o,z=g.alternate,z!==null&&(z.lanes|=o),oc(g.return,o,r),U.lanes|=o;break}z=z.next}}else if(g.tag===10)M=g.type===r.type?null:g.child;else if(g.tag===18){if(M=g.return,M===null)throw Error(t(341));M.lanes|=o,U=M.alternate,U!==null&&(U.lanes|=o),oc(M,o,r),M=g.sibling}else M=g.child;if(M!==null)M.return=g;else for(M=g;M!==null;){if(M===r){M=null;break}if(g=M.sibling,g!==null){g.return=M.return,M=g;break}M=M.return}g=M}Mn(n,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,bs(r,o),h=jn(h),u=u(h),r.flags|=1,Mn(n,r,u,o),r.child;case 14:return u=r.type,h=ri(u,r.pendingProps),h=ri(u.type,h),Bp(n,r,u,h,o);case 15:return zp(n,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ri(u,h),cl(n,r),r.tag=1,Dn(u)?(n=!0,jo(r)):n=!1,bs(r,o),Lp(r,u,h),Mc(r,u,h,o),Ac(null,r,u,!0,n,o);case 19:return Yp(n,r,o);case 22:return Hp(n,r,o)}throw Error(t(156,r.tag))};function _m(n,r){return Co(n,r)}function X0(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,r,o,u){return new X0(n,r,o,u)}function $c(n){return n=n.prototype,!(!n||!n.isReactComponent)}function j0(n){if(typeof n=="function")return $c(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===me)return 14}return 2}function xr(n,r){var o=n.alternate;return o===null?(o=qn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Sl(n,r,o,u,h,g){var M=2;if(u=n,typeof n=="function")$c(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case F:return $r(o.children,h,g,r);case W:M=8,h|=8;break;case P:return n=qn(12,o,r,h|2),n.elementType=P,n.lanes=g,n;case Q:return n=qn(13,o,r,h),n.elementType=Q,n.lanes=g,n;case le:return n=qn(19,o,r,h),n.elementType=le,n.lanes=g,n;case ve:return El(o,h,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:M=10;break e;case H:M=9;break e;case oe:M=11;break e;case me:M=14;break e;case ne:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=qn(M,o,r,h),r.elementType=n,r.type=u,r.lanes=g,r}function $r(n,r,o,u){return n=qn(7,n,u,r),n.lanes=o,n}function El(n,r,o,u){return n=qn(22,n,u,r),n.elementType=ve,n.lanes=o,n.stateNode={isHidden:!1},n}function Yc(n,r,o){return n=qn(6,n,null,r),n.lanes=o,n}function qc(n,r,o){return r=qn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function $0(n,r,o,u,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Kc(n,r,o,u,h,g,M,U,z){return n=new $0(n,r,o,U,z),r===1?(r=1,g===!0&&(r|=8)):r=0,g=qn(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},uc(g),n}function Y0(n,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:n,containerInfo:r,implementation:o}}function xm(n){if(!n)return cr;n=n._reactInternals;e:{if(mi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Dn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Dn(o))return $h(n,o,r)}return r}function ym(n,r,o,u,h,g,M,U,z){return n=Kc(o,u,!0,n,h,g,M,U,z),n.context=xm(null),o=n.current,u=wn(),h=vr(o),g=Fi(u,h),g.callback=r??null,hr(o,g,h),n.current.lanes=h,nn(n,h,u),In(n,u),n}function Ml(n,r,o,u){var h=r.current,g=wn(),M=vr(h);return o=xm(o),r.context===null?r.context=o:r.pendingContext=o,r=Fi(g,M),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=hr(h,r,M),n!==null&&(oi(n,h,M,g),el(n,h,M)),M}function wl(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function Sm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Zc(n,r){Sm(n,r),(n=n.alternate)&&Sm(n,r)}function q0(){return null}var Em=typeof reportError=="function"?reportError:function(n){console.error(n)};function Jc(n){this._internalRoot=n}Tl.prototype.render=Jc.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Ml(n,r,null,null)},Tl.prototype.unmount=Jc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Wr(function(){Ml(null,n,null,null)}),r[Li]=null}};function Tl(n){this._internalRoot=n}Tl.prototype.unstable_scheduleHydration=function(n){if(n){var r=sh();n={blockedOn:null,target:n,priority:r};for(var o=0;o<sr.length&&r!==0&&r<sr[o].priority;o++);sr.splice(o,0,n),o===0&&lh(n)}};function Qc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function K0(n,r,o,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var ie=wl(M);g.call(ie)}}var M=ym(r,u,n,0,null,!1,!1,"",Mm);return n._reactRootContainer=M,n[Li]=M.current,ba(n.nodeType===8?n.parentNode:n),Wr(),M}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var U=u;u=function(){var ie=wl(z);U.call(ie)}}var z=Kc(n,0,!1,null,null,!1,!1,"",Mm);return n._reactRootContainer=z,n[Li]=z.current,ba(n.nodeType===8?n.parentNode:n),Wr(function(){Ml(r,z,o,u)}),z}function Al(n,r,o,u,h){var g=o._reactRootContainer;if(g){var M=g;if(typeof h=="function"){var U=h;h=function(){var z=wl(M);U.call(z)}}Ml(r,M,n,h)}else M=K0(o,r,n,h,u);return wl(M)}ih=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=gt(r.pendingLanes);o!==0&&(rn(r,o|1),In(r,K()),(Et&6)===0&&(Ns=K()+500,fr()))}break;case 13:Wr(function(){var u=Ii(n,1);if(u!==null){var h=wn();oi(u,n,1,h)}}),Zc(n,1)}},wu=function(n){if(n.tag===13){var r=Ii(n,134217728);if(r!==null){var o=wn();oi(r,n,134217728,o)}Zc(n,134217728)}},rh=function(n){if(n.tag===13){var r=vr(n),o=Ii(n,r);if(o!==null){var u=wn();oi(o,n,r,u)}Zc(n,r)}},sh=function(){return St},ah=function(n,r){var o=St;try{return St=n,r()}finally{St=o}},Te=function(n,r,o){switch(r){case"input":if(xt(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var h=Wo(u);if(!h)throw Error(t(90));Rt(u),xt(u,h)}}}break;case"textarea":T(n,o);break;case"select":r=o.value,r!=null&&tt(n,!!o.multiple,r,!1)}},et=Wc,Pt=Wr;var Z0={usingClientEntryPoint:!1,Events:[Da,Ss,Wo,he,Ie,Wc]},ja={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J0={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ro(n),n===null?null:n.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{at=Cl.inject(J0),We=Cl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0,Fn.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qc(r))throw Error(t(200));return Y0(n,r,null,o)},Fn.createRoot=function(n,r){if(!Qc(n))throw Error(t(299));var o=!1,u="",h=Em;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=Kc(n,1,!1,null,null,o,!1,u,h),n[Li]=r.current,ba(n.nodeType===8?n.parentNode:n),new Jc(r)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ro(r),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return Wr(n)},Fn.hydrate=function(n,r,o){if(!Rl(r))throw Error(t(200));return Al(null,n,r,!0,o)},Fn.hydrateRoot=function(n,r,o){if(!Qc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,g="",M=Em;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),r=ym(r,null,n,1,o??null,h,!1,g,M),n[Li]=r.current,ba(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new Tl(r)},Fn.render=function(n,r,o){if(!Rl(r))throw Error(t(200));return Al(null,n,r,!1,o)},Fn.unmountComponentAtNode=function(n){if(!Rl(n))throw Error(t(40));return n._reactRootContainer?(Wr(function(){Al(null,null,n,!1,function(){n._reactRootContainer=null,n[Li]=null})}),!0):!1},Fn.unstable_batchedUpdates=Wc,Fn.unstable_renderSubtreeIntoContainer=function(n,r,o,u){if(!Rl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Al(n,r,o,!1,u)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Lm;function ax(){if(Lm)return nf.exports;Lm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),nf.exports=sx(),nf.exports}var Dm;function ox(){if(Dm)return bl;Dm=1;var i=ax();return bl.createRoot=i.createRoot,bl.hydrateRoot=i.hydrateRoot,bl}var lx=ox();const ux=nv(lx);var Ud=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,rv=/^[\\/]{2}/;function cx(i,e){return e+i.replace(/\\/g,"/")}var Um="popstate";function Nm(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function fx(i={}){function e(s,a){let l=a.state?.masked,{pathname:c,search:f,hash:d}=l||s.location;return Vf("",{pathname:c,search:f,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default",l?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function t(s,a){return typeof a=="string"?a:so(a)}return hx(e,t,null,i)}function Gt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Ri(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dx(){return Math.random().toString(36).substring(2,10)}function Im(i,e){return{usr:i.state,key:i.key,idx:e,masked:i.mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function Vf(i,e,t=null,s,a){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?ua(e):e,state:t,key:e&&e.key||s||dx(),mask:a}}function so({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function ua(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function hx(i,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,f="POP",d=null,p=m();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function m(){return(c.state||{idx:null}).idx}function v(){f="POP";let _=m(),x=_==null?null:_-p;p=_,d&&d({action:f,location:w.location,delta:x})}function y(_,x){f="PUSH";let L=Nm(_)?_:Vf(w.location,_,x);p=m()+1;let b=Im(L,p),R=w.createHref(L.mask||L);try{c.pushState(b,"",R)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;a.location.assign(R)}l&&d&&d({action:f,location:w.location,delta:1})}function S(_,x){f="REPLACE";let L=Nm(_)?_:Vf(w.location,_,x);p=m();let b=Im(L,p),R=w.createHref(L.mask||L);c.replaceState(b,"",R),l&&d&&d({action:f,location:w.location,delta:0})}function E(_){return px(a,_)}let w={get action(){return f},get location(){return i(a,c)},listen(_){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(Um,v),d=_,()=>{a.removeEventListener(Um,v),d=null}},createHref(_){return e(a,_)},createURL:E,encodeLocation(_){let x=E(_);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:y,replace:S,go(_){return c.go(_)}};return w}function px(i,e,t=!1){let s="http://localhost";i&&(s=i.location.origin!=="null"?i.location.origin:i.location.href),Gt(s,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:so(e);return a=a.replace(/ $/,"%20"),!t&&rv.test(a)&&(a=s+a),new URL(a,s)}function sv(i,e,t="/"){return mx(i,e,t,!1)}function mx(i,e,t,s,a){let l=typeof e=="string"?ua(e):e,c=Ki(l.pathname||"/",t);if(c==null)return null;let f=gx(i),d=null,p=Ax(c);for(let m=0;d==null&&m<f.length;++m)d=Rx(f[m],p,s);return d}function gx(i){let e=av(i);return vx(e),e}function av(i,e=[],t=[],s="",a=!1){let l=(c,f,d=a,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(s)&&d)return;Gt(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length)}let v=hi([s,m.relativePath]),y=t.concat(m);c.children&&c.children.length>0&&(Gt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),av(c.children,e,y,v,d)),!(c.path==null&&!c.index)&&e.push({path:v,score:wx(v,c.index),routesMeta:y.map((S,E)=>{let[w,_]=uv(S.relativePath,S.caseSensitive,E===y.length-1);return{...S,matcher:w,compiledParams:_}})})};return i.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let d of ov(c.path))l(c,f,!0,d)}),e}function ov(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=ov(s.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),a&&f.push(...c),f.map(d=>i.startsWith("/")&&d===""?"/":d)}function vx(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:Tx(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var _x=/^:[\w-]+$/,xx=3,yx=2,Sx=1,Ex=10,Mx=-2,Fm=i=>i==="*";function wx(i,e){let t=i.split("/"),s=t.length;return t.some(Fm)&&(s+=Mx),e&&(s+=yx),t.filter(a=>!Fm(a)).reduce((a,l)=>a+(_x.test(l)?xx:l===""?Sx:Ex),s)}function Tx(i,e){return i.length===e.length&&i.slice(0,-1).every((s,a)=>s===e[a])?i[i.length-1]-e[e.length-1]:0}function Rx(i,e,t=!1){let{routesMeta:s}=i,a={},l="/",c=[];for(let f=0;f<s.length;++f){let d=s[f],p=f===s.length-1,m=l==="/"?e:e.slice(l.length)||"/",v={path:d.relativePath,caseSensitive:d.caseSensitive,end:p},y=d.matcher&&d.compiledParams?lv(v,m,d.matcher,d.compiledParams):uu(v,m),S=d.route;if(!y&&p&&t&&!s[s.length-1].route.index&&(y=uu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!y)return null;Object.assign(a,y.params),c.push({params:a,pathname:hi([l,y.pathname]),pathnameBase:Px(hi([l,y.pathnameBase])),route:S}),y.pathnameBase!=="/"&&(l=hi([l,y.pathnameBase]))}return c}function uu(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=uv(i.path,i.caseSensitive,i.end);return lv(i,e,t,s)}function lv(i,e,t,s){let a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:s.reduce((p,{paramName:m,isOptional:v},y)=>{if(m==="*"){let E=f[y]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[y];return v&&!S?p[m]=void 0:p[m]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:i}}function uv(i,e=!1,t=!0){Ri(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d,p,m)=>{if(s.push({paramName:f,isOptional:d!=null}),d){let v=m.charAt(p+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(s.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function Ax(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ri(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function Ki(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}function Cx(i,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof i=="string"?ua(i):i,l;return t?(t=fv(t),t.startsWith("/")?l=Om(t.substring(1),"/"):l=Om(t,e)):l=e,{pathname:l,search:Lx(s),hash:Dx(a)}}function Om(i,e){let t=cu(e).split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function af(i,e,t,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bx(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function cv(i){let e=bx(i);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Nd(i,e,t,s=!1){let a;typeof i=="string"?a=ua(i):(a={...i},Gt(!a.pathname||!a.pathname.includes("?"),af("?","pathname","search",a)),Gt(!a.pathname||!a.pathname.includes("#"),af("#","pathname","hash",a)),Gt(!a.search||!a.search.includes("#"),af("#","search","hash",a)));let l=i===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let v=e.length-1;if(!s&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),v-=1;a.pathname=y.join("/")}f=v>=0?e[v]:"/"}let d=Cx(a,f),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(p||m)&&(d.pathname+="/"),d}var fv=i=>i.replace(/[\\/]{2,}/g,"/"),hi=i=>fv(i.join("/")),cu=i=>i.replace(/\/+$/,""),Px=i=>cu(i).replace(/^\/*/,"/"),Lx=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Dx=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Ux=class{constructor(i,e,t,s=!1){this.status=i,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Nx(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function Ix(i){let e=i.map(t=>t.route.path).filter(Boolean);return hi(e)||"/"}var dv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function hv(i,e){let t=i;if(typeof t!="string"||!Ud.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,a=!1;if(dv)try{let l=new URL(window.location.href),c=rv.test(t)?new URL(cx(t,l.protocol)):new URL(t),f=Ki(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:a=!0}catch{Ri(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var pv=["POST","PUT","PATCH","DELETE"];new Set(pv);var Fx=["GET",...pv];new Set(Fx);var Ox=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function kx(i){try{return Ox.includes(new URL(i).protocol)}catch{return!1}}var ca=X.createContext(null);ca.displayName="DataRouter";var mu=X.createContext(null);mu.displayName="DataRouterState";var mv=X.createContext(!1);function Bx(){return X.useContext(mv)}var gv=X.createContext({isTransitioning:!1});gv.displayName="ViewTransition";var zx=X.createContext(new Map);zx.displayName="Fetchers";var Hx=X.createContext(null);Hx.displayName="Await";var ti=X.createContext(null);ti.displayName="Navigation";var mo=X.createContext(null);mo.displayName="Location";var Zi=X.createContext({outlet:null,matches:[],isDataRoute:!1});Zi.displayName="Route";var Id=X.createContext(null);Id.displayName="RouteError";var vv="REACT_ROUTER_ERROR",Vx="REDIRECT",Gx="ROUTE_ERROR_RESPONSE";function Wx(i){if(i.startsWith(`${vv}:${Vx}:{`))try{let e=JSON.parse(i.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Xx(i){if(i.startsWith(`${vv}:${Gx}:{`))try{let e=JSON.parse(i.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Ux(e.status,e.statusText,e.data)}catch{}}function jx(i,{relative:e}={}){Gt(go(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=X.useContext(ti),{hash:a,pathname:l,search:c}=vo(i,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:hi([t,l])),s.createHref({pathname:f,search:c,hash:a})}function go(){return X.useContext(mo)!=null}function Ji(){return Gt(go(),"useLocation() may be used only in the context of a <Router> component."),X.useContext(mo).location}var _v="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xv(i){X.useContext(ti).static||X.useLayoutEffect(i)}function $x(){let{isDataRoute:i}=X.useContext(Zi);return i?ay():Yx()}function Yx(){Gt(go(),"useNavigate() may be used only in the context of a <Router> component.");let i=X.useContext(ca),{basename:e,navigator:t}=X.useContext(ti),{matches:s}=X.useContext(Zi),{pathname:a}=Ji(),l=JSON.stringify(cv(s)),c=X.useRef(!1);return xv(()=>{c.current=!0}),X.useCallback((d,p={})=>{if(Ri(c.current,_v),!c.current)return;if(typeof d=="number"){t.go(d);return}let m=Nd(d,JSON.parse(l),a,p.relative==="path");i==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:hi([e,m.pathname])),(p.replace?t.replace:t.push)(m,p.state,p)},[e,t,l,a,i])}X.createContext(null);function vo(i,{relative:e}={}){let{matches:t}=X.useContext(Zi),{pathname:s}=Ji(),a=JSON.stringify(cv(t));return X.useMemo(()=>Nd(i,JSON.parse(a),s,e==="path"),[i,a,s,e])}function qx(i,e){return yv(i,e)}function yv(i,e,t){Gt(go(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=X.useContext(ti),{matches:a}=X.useContext(Zi),l=a[a.length-1],c=l?l.params:{},f=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let _=p&&p.path||"";Ev(f,!p||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let m=Ji(),v;if(e){let _=typeof e=="string"?ua(e):e;Gt(d==="/"||_.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=m;let y=v.pathname||"/",S=y;if(d!=="/"){let _=d.replace(/^\//,"").split("/");S="/"+y.replace(/^\//,"").split("/").slice(_.length).join("/")}let E=t&&t.state.matches.length?t.state.matches.map(_=>Object.assign(_,{route:t.manifest[_.route.id]||_.route})):sv(i,{pathname:S});Ri(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Ri(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=ey(E&&E.map(_=>Object.assign({},_,{params:Object.assign({},c,_.params),pathname:hi([d,s.encodeLocation?s.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?d:hi([d,s.encodeLocation?s.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),a,t);return e&&w?X.createElement(mo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},w):w}function Kx(){let i=sy(),e=Nx(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",i),c=X.createElement(X.Fragment,null,X.createElement("p",null,"💿 Hey developer 👋"),X.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",X.createElement("code",{style:l},"ErrorBoundary")," or"," ",X.createElement("code",{style:l},"errorElement")," prop on your route.")),X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),t?X.createElement("pre",{style:a},t):null,c)}var Zx=X.createElement(Kx,null),Sv=class extends X.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){this.props.onError?this.props.onError(i,e):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const t=Xx(i.digest);t&&(i=t)}let e=i!==void 0?X.createElement(Zi.Provider,{value:this.props.routeContext},X.createElement(Id.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?X.createElement(Jx,{error:i},e):e}};Sv.contextType=mv;var of=new WeakMap;function Jx({children:i,error:e}){let{basename:t}=X.useContext(ti);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=Wx(e.digest);if(s){let a=of.get(e);if(a)throw a;let l=hv(s.location,t),c=l.absoluteURL||l.to;if(kx(c))throw new Error("Invalid redirect location");if(dv&&!of.get(e))if(l.isExternal||s.reloadDocument)window.location.href=c;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw of.set(e,f),f}return X.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return i}function Qx({routeContext:i,match:e,children:t}){let s=X.useContext(ca);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),X.createElement(Zi.Provider,{value:i},t)}function ey(i,e=[],t){let s=t?.state;if(i==null){if(!s)return null;if(s.errors)i=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)i=s.matches;else return null}let a=i,l=s?.errors;if(l!=null){let m=a.findIndex(v=>v.route.id&&l?.[v.route.id]!==void 0);Gt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,f=-1;if(t&&s){c=s.renderFallback;for(let m=0;m<a.length;m++){let v=a[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=m),v.route.id){let{loaderData:y,errors:S}=s,E=v.route.loader&&!y.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(c=!0),f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}}let d=t?.onError,p=s&&d?(m,v)=>{d(m,{location:s.location,params:s.matches?.[0]?.params??{},pattern:Ix(s.matches),errorInfo:v})}:void 0;return a.reduceRight((m,v,y)=>{let S,E=!1,w=null,_=null;s&&(S=l&&v.route.id?l[v.route.id]:void 0,w=v.route.errorElement||Zx,c&&(f<0&&y===0?(Ev("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,_=null):f===y&&(E=!0,_=v.route.hydrateFallbackElement||null)));let x=e.concat(a.slice(0,y+1)),L=()=>{let b;return S?b=w:E?b=_:v.route.Component?b=X.createElement(v.route.Component,null):v.route.element?b=v.route.element:b=m,X.createElement(Qx,{match:v,routeContext:{outlet:m,matches:x,isDataRoute:s!=null},children:b})};return s&&(v.route.ErrorBoundary||v.route.errorElement||y===0)?X.createElement(Sv,{location:s.location,revalidation:s.revalidation,component:w,error:S,children:L(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:p}):L()},null)}function Fd(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ty(i){let e=X.useContext(ca);return Gt(e,Fd(i)),e}function ny(i){let e=X.useContext(mu);return Gt(e,Fd(i)),e}function iy(i){let e=X.useContext(Zi);return Gt(e,Fd(i)),e}function Od(i){let e=iy(i),t=e.matches[e.matches.length-1];return Gt(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function ry(){return Od("useRouteId")}function sy(){let i=X.useContext(Id),e=ny("useRouteError"),t=Od("useRouteError");return i!==void 0?i:e.errors?.[t]}function ay(){let{router:i}=ty("useNavigate"),e=Od("useNavigate"),t=X.useRef(!1);return xv(()=>{t.current=!0}),X.useCallback(async(a,l={})=>{Ri(t.current,_v),t.current&&(typeof a=="number"?await i.navigate(a):await i.navigate(a,{fromRouteId:e,...l}))},[i,e])}var km={};function Ev(i,e,t){!e&&!km[i]&&(km[i]=!0,Ri(!1,t))}X.memo(oy);function oy({routes:i,manifest:e,future:t,state:s,isStatic:a,onError:l}){return yv(i,void 0,{manifest:e,state:s,isStatic:a,onError:l})}function Gf(i){Gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ly({basename:i="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1,useTransitions:c}){Gt(!go(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=i.replace(/^\/*/,"/"),d=X.useMemo(()=>({basename:f,navigator:a,static:l,useTransitions:c,future:{}}),[f,a,l,c]);typeof t=="string"&&(t=ua(t));let{pathname:p="/",search:m="",hash:v="",state:y=null,key:S="default",mask:E}=t,w=X.useMemo(()=>{let _=Ki(p,f);return _==null?null:{location:{pathname:_,search:m,hash:v,state:y,key:S,mask:E},navigationType:s}},[f,p,m,v,y,S,s,E]);return Ri(w!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:X.createElement(ti.Provider,{value:d},X.createElement(mo.Provider,{children:e,value:w}))}function uy({children:i,location:e}){return qx(Wf(i),e)}function Wf(i,e=[]){let t=[];return X.Children.forEach(i,(s,a)=>{if(!X.isValidElement(s))return;let l=[...e,a];if(s.type===X.Fragment){t.push.apply(t,Wf(s.props.children,l));return}Gt(s.type===Gf,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Gt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Wf(s.props.children,l)),t.push(c)}),t}var tu="get",nu="application/x-www-form-urlencoded";function gu(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function cy(i){return gu(i)&&i.tagName.toLowerCase()==="button"}function fy(i){return gu(i)&&i.tagName.toLowerCase()==="form"}function dy(i){return gu(i)&&i.tagName.toLowerCase()==="input"}function hy(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function py(i,e){return i.button===0&&(!e||e==="_self")&&!hy(i)}var Pl=null;function my(){if(Pl===null)try{new FormData(document.createElement("form"),0),Pl=!1}catch{Pl=!0}return Pl}var gy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function lf(i){return i!=null&&!gy.has(i)?(Ri(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nu}"`),null):i}function vy(i,e){let t,s,a,l,c;if(fy(i)){let f=i.getAttribute("action");s=f?Ki(f,e):null,t=i.getAttribute("method")||tu,a=lf(i.getAttribute("enctype"))||nu,l=new FormData(i)}else if(cy(i)||dy(i)&&(i.type==="submit"||i.type==="image")){let f=i.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=i.getAttribute("formaction")||f.getAttribute("action");if(s=d?Ki(d,e):null,t=i.getAttribute("formmethod")||f.getAttribute("method")||tu,a=lf(i.getAttribute("formenctype"))||lf(f.getAttribute("enctype"))||nu,l=new FormData(f,i),!my()){let{name:p,type:m,value:v}=i;if(m==="image"){let y=p?`${p}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else p&&l.append(p,v)}}else{if(gu(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=tu,s=null,a=nu,c=i}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function kd(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Mv(i,e,t,s){let a=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return t?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${s}`:a.pathname=`${a.pathname}.${s}`:a.pathname==="/"?a.pathname=`_root.${s}`:e&&Ki(a.pathname,e)==="/"?a.pathname=`${cu(e)}/_root.${s}`:a.pathname=`${cu(a.pathname)}.${s}`,a}async function _y(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xy(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function yy(i,e,t){let s=await Promise.all(i.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await _y(l,t);return c.links?c.links():[]}return[]}));return wy(s.flat(1).filter(xy).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Bm(i,e,t,s,a,l){let c=(d,p)=>t[p]?d.route.id!==t[p].route.id:!0,f=(d,p)=>t[p].pathname!==d.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==d.params["*"];return l==="assets"?e.filter((d,p)=>c(d,p)||f(d,p)):l==="data"?e.filter((d,p)=>{let m=s.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(c(d,p)||f(d,p))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Sy(i,e,{includeHydrateFallback:t}={}){return Ey(i.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function Ey(i){return[...new Set(i)]}function My(i){let e={},t=Object.keys(i).sort();for(let s of t)e[s]=i[s];return e}function wy(i,e){let t=new Set;return new Set(e),i.reduce((s,a)=>{let l=JSON.stringify(My(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}function Bd(){let i=X.useContext(ca);return kd(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Ty(){let i=X.useContext(mu);return kd(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var zd=X.createContext(void 0);zd.displayName="FrameworkContext";function vu(){let i=X.useContext(zd);return kd(i,"You must render this element inside a <HydratedRouter> element"),i}function Ry(i,e){let t=X.useContext(zd),[s,a]=X.useState(!1),[l,c]=X.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=e,y=X.useRef(null);X.useEffect(()=>{if(i==="render"&&c(!0),i==="viewport"){let w=x=>{x.forEach(L=>{c(L.isIntersecting)})},_=new IntersectionObserver(w,{threshold:.5});return y.current&&_.observe(y.current),()=>{_.disconnect()}}},[i]),X.useEffect(()=>{if(s){let w=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(w)}}},[s]);let S=()=>{a(!0)},E=()=>{a(!1),c(!1)};return t?i!=="intent"?[l,y,{}]:[l,y,{onFocus:Ya(f,S),onBlur:Ya(d,E),onMouseEnter:Ya(p,S),onMouseLeave:Ya(m,E),onTouchStart:Ya(v,S)}]:[!1,y,{}]}function Ya(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function Ay({page:i,...e}){let t=Bx(),{nonce:s}=vu(),{router:a}=Bd(),l=X.useMemo(()=>sv(a.routes,i,a.basename),[a.routes,i,a.basename]);return l?(e.nonce==null&&s&&(e={...e,nonce:s}),t?X.createElement(by,{page:i,matches:l,...e}):X.createElement(Py,{page:i,matches:l,...e})):null}function Cy(i){let{manifest:e,routeModules:t}=vu(),[s,a]=X.useState([]);return X.useEffect(()=>{let l=!1;return yy(i,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[i,e,t]),s}function by({page:i,matches:e,...t}){let s=Ji(),{future:a}=vu(),{basename:l}=Bd(),c=X.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let f=Mv(i,l,a.v8_trailingSlashAwareDataRequests,"rsc"),d=!1,p=[];for(let m of e)typeof m.route.shouldRevalidate=="function"?d=!0:p.push(m.route.id);return d&&p.length>0&&f.searchParams.set("_routes",p.join(",")),[f.pathname+f.search]},[l,a.v8_trailingSlashAwareDataRequests,i,s,e]);return X.createElement(X.Fragment,null,c.map(f=>X.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...t})))}function Py({page:i,matches:e,...t}){let s=Ji(),{future:a,manifest:l,routeModules:c}=vu(),{basename:f}=Bd(),{loaderData:d,matches:p}=Ty(),m=X.useMemo(()=>Bm(i,e,p,l,s,"data"),[i,e,p,l,s]),v=X.useMemo(()=>Bm(i,e,p,l,s,"assets"),[i,e,p,l,s]),y=X.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let w=new Set,_=!1;if(e.forEach(L=>{let b=l.routes[L.route.id];!b||!b.hasLoader||(!m.some(R=>R.route.id===L.route.id)&&L.route.id in d&&c[L.route.id]?.shouldRevalidate||b.hasClientLoader?_=!0:w.add(L.route.id))}),w.size===0)return[];let x=Mv(i,f,a.v8_trailingSlashAwareDataRequests,"data");return _&&w.size>0&&x.searchParams.set("_routes",e.filter(L=>w.has(L.route.id)).map(L=>L.route.id).join(",")),[x.pathname+x.search]},[f,a.v8_trailingSlashAwareDataRequests,d,s,l,m,e,i,c]),S=X.useMemo(()=>Sy(v,l),[v,l]),E=Cy(v);return X.createElement(X.Fragment,null,y.map(w=>X.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...t})),S.map(w=>X.createElement("link",{key:w,rel:"modulepreload",href:w,...t})),E.map(({key:w,link:_})=>X.createElement("link",{key:w,nonce:t.nonce,..._,crossOrigin:_.crossOrigin??t.crossOrigin})))}function Ly(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Dy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dy&&(window.__reactRouterVersion="7.18.2")}catch{}function Uy({basename:i,children:e,useTransitions:t,window:s}){let a=X.useRef();a.current==null&&(a.current=fx({window:s,v5Compat:!0}));let l=a.current,[c,f]=X.useState({action:l.action,location:l.location}),d=X.useCallback(p=>{t===!1?f(p):X.startTransition(()=>f(p))},[t]);return X.useLayoutEffect(()=>l.listen(d),[l,d]),X.createElement(ly,{basename:i,children:e,location:c.location,navigationType:c.action,navigator:l,useTransitions:t})}var wv=X.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,mask:f,state:d,target:p,to:m,preventScrollReset:v,viewTransition:y,defaultShouldRevalidate:S,...E},w){let{basename:_,navigator:x,useTransitions:L}=X.useContext(ti),b=typeof m=="string"&&Ud.test(m),R=hv(m,_);m=R.to;let B=jx(m,{relative:a}),N=Ji(),F=null;if(f){let me=Nd(f,[],N.mask?N.mask.pathname:"/",!0);_!=="/"&&(me.pathname=me.pathname==="/"?_:hi([_,me.pathname])),F=x.createHref(me)}let[W,P,A]=Ry(s,E),H=Fy(m,{replace:c,mask:f,state:d,target:p,preventScrollReset:v,relative:a,viewTransition:y,defaultShouldRevalidate:S,useTransitions:L});function oe(me){e&&e(me),me.defaultPrevented||H(me)}let Q=!(R.isExternal||l),le=X.createElement("a",{...E,...A,href:(Q?F:void 0)||R.absoluteURL||B,onClick:Q?oe:e,ref:Ly(w,P),target:p,"data-discover":!b&&t==="render"?"true":void 0});return W&&!b?X.createElement(X.Fragment,null,le,X.createElement(Ay,{page:B})):le});wv.displayName="Link";var Xf=X.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:f,children:d,...p},m){let v=vo(c,{relative:p.relative}),y=Ji(),S=X.useContext(mu),{navigator:E,basename:w}=X.useContext(ti),_=S!=null&&Hy(v)&&f===!0,x=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,L=y.pathname,b=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(L=L.toLowerCase(),b=b?b.toLowerCase():null,x=x.toLowerCase()),b&&w&&(b=Ki(b,w)||b);const R=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let B=L===x||!a&&L.startsWith(x)&&L.charAt(R)==="/",N=b!=null&&(b===x||!a&&b.startsWith(x)&&b.charAt(x.length)==="/"),F={isActive:B,isPending:N,isTransitioning:_},W=B?e:void 0,P;typeof s=="function"?P=s(F):P=[s,B?"active":null,N?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let A=typeof l=="function"?l(F):l;return X.createElement(wv,{...p,"aria-current":W,className:P,ref:m,style:A,to:c,viewTransition:f},typeof d=="function"?d(F):d)});Xf.displayName="NavLink";var Ny=X.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=tu,action:f,onSubmit:d,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:y,...S},E)=>{let{useTransitions:w}=X.useContext(ti),_=By(),x=zy(f,{relative:p}),L=c.toLowerCase()==="get"?"get":"post",b=typeof f=="string"&&Ud.test(f),R=B=>{if(d&&d(B),B.defaultPrevented)return;B.preventDefault();let N=B.nativeEvent.submitter,F=N?.getAttribute("formmethod")||c,W=()=>_(N||B.currentTarget,{fetcherKey:e,method:F,navigate:t,replace:a,state:l,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:y});w&&t!==!1?X.startTransition(()=>W()):W()};return X.createElement("form",{ref:E,method:L,action:x,onSubmit:s?d:R,...S,"data-discover":!b&&i==="render"?"true":void 0})});Ny.displayName="Form";function Iy(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tv(i){let e=X.useContext(ca);return Gt(e,Iy(i)),e}function Fy(i,{target:e,replace:t,mask:s,state:a,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d,useTransitions:p}={}){let m=$x(),v=Ji(),y=vo(i,{relative:c});return X.useCallback(S=>{if(py(S,e)){S.preventDefault();let E=t!==void 0?t:so(v)===so(y),w=()=>m(i,{replace:E,mask:s,state:a,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d});p?X.startTransition(()=>w()):w()}},[v,m,y,t,s,a,e,i,l,c,f,d,p])}var Oy=0,ky=()=>`__${String(++Oy)}__`;function By(){let{router:i}=Tv("useSubmit"),{basename:e}=X.useContext(ti),t=ry(),s=i.fetch,a=i.navigate;return X.useCallback(async(l,c={})=>{let{action:f,method:d,encType:p,formData:m,body:v}=vy(l,e);if(c.navigate===!1){let y=c.fetcherKey||ky();await s(y,t,c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,flushSync:c.flushSync})}else await a(c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[s,a,e,t])}function zy(i,{relative:e}={}){let{basename:t}=X.useContext(ti),s=X.useContext(Zi);Gt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...vo(i||".",{relative:e})},c=Ji();if(i==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(m=>m==="")){f.delete("index"),d.filter(v=>v).forEach(v=>f.append("index",v));let m=f.toString();l.search=m?`?${m}`:""}}return(!i||i===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:hi([t,l.pathname])),so(l)}function Hy(i,{relative:e}={}){let t=X.useContext(gv);Gt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Tv("useViewTransitionState"),a=vo(i,{relative:e});if(!t.isTransitioning)return!1;let l=Ki(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Ki(t.nextLocation.pathname,s)||t.nextLocation.pathname;return uu(a.pathname,c)!=null||uu(a.pathname,l)!=null}const Hd="178",Vy=0,zm=1,Gy=2,Rv=1,Wy=2,Wi=3,Dr=0,On=1,Ei=2,Pr=0,ea=1,Hm=2,Vm=3,Gm=4,Xy=5,ns=100,jy=101,$y=102,Yy=103,qy=104,Ky=200,Zy=201,Jy=202,Qy=203,jf=204,$f=205,eS=206,tS=207,nS=208,iS=209,rS=210,sS=211,aS=212,oS=213,lS=214,Yf=0,qf=1,Kf=2,ra=3,Zf=4,Jf=5,Qf=6,ed=7,Av=0,uS=1,cS=2,Yi=0,fS=1,dS=2,hS=3,pS=4,mS=5,gS=6,vS=7,Cv=300,sa=301,aa=302,td=303,nd=304,_u=306,ao=1e3,Xi=1001,id=1002,dn=1003,_S=1004,Ll=1005,Mi=1006,uf=1007,rs=1008,Ai=1009,bv=1010,Pv=1011,oo=1012,Vd=1013,ls=1014,ji=1015,_o=1016,Gd=1017,Wd=1018,lo=1020,Lv=35902,Dv=1021,Uv=1022,di=1023,uo=1026,co=1027,Nv=1028,Xd=1029,Iv=1030,jd=1031,$d=1033,iu=33776,ru=33777,su=33778,au=33779,rd=35840,sd=35841,ad=35842,od=35843,ld=36196,ud=37492,cd=37496,fd=37808,dd=37809,hd=37810,pd=37811,md=37812,gd=37813,vd=37814,_d=37815,xd=37816,yd=37817,Sd=37818,Ed=37819,Md=37820,wd=37821,ou=36492,Td=36494,Rd=36495,Fv=36283,Ad=36284,Cd=36285,bd=36286,xS=3200,yS=3201,SS=0,ES=1,Cr="",An="srgb",oa="srgb-linear",fu="linear",Dt="srgb",Fs=7680,Wm=519,MS=512,wS=513,TS=514,Ov=515,RS=516,AS=517,CS=518,bS=519,Xm=35044,jm="300 es",$i=2e3,du=2001;class fa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $m=1234567;const no=Math.PI/180,fo=180/Math.PI;function da(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function Yd(i,e){return(i%e+e)%e}function PS(i,e,t,s,a){return s+(i-e)*(a-s)/(t-e)}function LS(i,e,t){return i!==e?(t-i)/(e-i):0}function io(i,e,t){return(1-t)*i+t*e}function DS(i,e,t,s){return io(i,e,1-Math.exp(-t*s))}function US(i,e=1){return e-Math.abs(Yd(i,e*2)-e)}function NS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function IS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function FS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function OS(i,e){return i+Math.random()*(e-i)}function kS(i){return i*(.5-Math.random())}function BS(i){i!==void 0&&($m=i);let e=$m+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zS(i){return i*no}function HS(i){return i*fo}function VS(i){return(i&i-1)===0&&i!==0}function GS(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function WS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function XS(i,e,t,s,a){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),p=l((e+s)/2),m=c((e+s)/2),v=l((e-s)/2),y=c((e-s)/2),S=l((s-e)/2),E=c((s-e)/2);switch(a){case"XYX":i.set(f*m,d*v,d*y,f*p);break;case"YZY":i.set(d*y,f*m,d*v,f*p);break;case"ZXZ":i.set(d*v,d*y,f*m,f*p);break;case"XZX":i.set(f*m,d*E,d*S,f*p);break;case"YXY":i.set(d*S,f*m,d*E,f*p);break;case"ZYZ":i.set(d*E,d*S,f*m,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Js(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const jS={DEG2RAD:no,RAD2DEG:fo,generateUUID:da,clamp:_t,euclideanModulo:Yd,mapLinear:PS,inverseLerp:LS,lerp:io,damp:DS,pingpong:US,smoothstep:NS,smootherstep:IS,randInt:FS,randFloat:OS,randFloatSpread:kS,seededRandom:BS,degToRad:zS,radToDeg:HS,isPowerOfTwo:VS,ceilPowerOfTwo:GS,floorPowerOfTwo:WS,setQuaternionFromProperEuler:XS,normalize:Tn,denormalize:Js};class At{constructor(e=0,t=0){At.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xo{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let d=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];const y=l[c+0],S=l[c+1],E=l[c+2],w=l[c+3];if(f===0){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(f===1){e[t+0]=y,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(v!==w||d!==y||p!==S||m!==E){let _=1-f;const x=d*y+p*S+m*E+v*w,L=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){const B=Math.sqrt(b),N=Math.atan2(B,x*L);_=Math.sin(_*N)/B,f=Math.sin(f*N)/B}const R=f*L;if(d=d*_+y*R,p=p*_+S*R,m=m*_+E*R,v=v*_+w*R,_===1-f){const B=1/Math.sqrt(d*d+p*p+m*m+v*v);d*=B,p*=B,m*=B,v*=B}}e[t]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],d=s[a+1],p=s[a+2],m=s[a+3],v=l[c],y=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+m*v+d*S-p*y,e[t+1]=d*E+m*y+p*v-f*S,e[t+2]=p*E+m*S+f*y-d*v,e[t+3]=m*E-f*v-d*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,p=f(s/2),m=f(a/2),v=f(l/2),y=d(s/2),S=d(a/2),E=d(l/2);switch(c){case"XYZ":this._x=y*m*v+p*S*E,this._y=p*S*v-y*m*E,this._z=p*m*E+y*S*v,this._w=p*m*v-y*S*E;break;case"YXZ":this._x=y*m*v+p*S*E,this._y=p*S*v-y*m*E,this._z=p*m*E-y*S*v,this._w=p*m*v+y*S*E;break;case"ZXY":this._x=y*m*v-p*S*E,this._y=p*S*v+y*m*E,this._z=p*m*E+y*S*v,this._w=p*m*v-y*S*E;break;case"ZYX":this._x=y*m*v-p*S*E,this._y=p*S*v+y*m*E,this._z=p*m*E-y*S*v,this._w=p*m*v+y*S*E;break;case"YZX":this._x=y*m*v+p*S*E,this._y=p*S*v+y*m*E,this._z=p*m*E-y*S*v,this._w=p*m*v-y*S*E;break;case"XZY":this._x=y*m*v-p*S*E,this._y=p*S*v-y*m*E,this._z=p*m*E+y*S*v,this._w=p*m*v+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],d=t[9],p=t[2],m=t[6],v=t[10],y=s+f+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(s>f&&s>v){const S=2*Math.sqrt(1+s-f-v);this._w=(m-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-s-v);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+v-s-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,d=t._y,p=t._z,m=t._w;return this._x=s*m+c*f+a*p-l*d,this._y=a*m+c*d+l*f-s*p,this._z=l*m+c*p+s*d-a*f,this._w=c*m-s*f-a*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),v=Math.sin((1-t)*m)/p,y=Math.sin(t*m)/p;return this._w=c*v+this._w*y,this._x=s*v+this._x*y,this._y=a*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,s=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,d=e.w,p=2*(c*a-f*s),m=2*(f*t-l*a),v=2*(l*s-c*t);return this.x=t+d*p+c*v-f*m,this.y=s+d*m+f*p-l*v,this.z=a+d*v+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=a*d-l*f,this.y=l*c-s*d,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return cf.copy(this).projectOnVector(e),this.sub(cf)}reflect(e){return this.sub(cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cf=new te,Ym=new xo;class ut{constructor(e,t,s,a,l,c,f,d,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,p)}set(e,t,s,a,l,c,f,d,p){const m=this.elements;return m[0]=e,m[1]=a,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=s,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],d=s[6],p=s[1],m=s[4],v=s[7],y=s[2],S=s[5],E=s[8],w=a[0],_=a[3],x=a[6],L=a[1],b=a[4],R=a[7],B=a[2],N=a[5],F=a[8];return l[0]=c*w+f*L+d*B,l[3]=c*_+f*b+d*N,l[6]=c*x+f*R+d*F,l[1]=p*w+m*L+v*B,l[4]=p*_+m*b+v*N,l[7]=p*x+m*R+v*F,l[2]=y*w+S*L+E*B,l[5]=y*_+S*b+E*N,l[8]=y*x+S*R+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8];return t*c*m-t*f*p-s*l*m+s*f*d+a*l*p-a*c*d}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=m*c-f*p,y=f*d-m*l,S=p*l-c*d,E=t*v+s*y+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(a*p-m*s)*w,e[2]=(f*s-a*c)*w,e[3]=y*w,e[4]=(m*t-a*d)*w,e[5]=(a*l-f*t)*w,e[6]=S*w,e[7]=(s*d-p*t)*w,e[8]=(c*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(s*d,s*p,-s*(d*c+p*f)+c+e,-a*p,a*d,-a*(-p*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(ff.makeScale(e,t)),this}rotate(e){return this.premultiply(ff.makeRotation(-e)),this}translate(e,t){return this.premultiply(ff.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ff=new ut;function kv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ho(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $S(){const i=ho("canvas");return i.style.display="block",i}const qm={};function ta(i){i in qm||(qm[i]=!0,console.warn(i))}function YS(i,e,t){return new Promise(function(s,a){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function qS(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function KS(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Km=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZS(){const i={enabled:!0,workingColorSpace:oa,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(a.r=qi(a.r),a.g=qi(a.g),a.b=qi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(a.r=na(a.r),a.g=na(a.g),a.b=na(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Cr?fu:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return ta("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return ta("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[oa]:{primaries:e,whitePoint:s,transfer:fu,toXYZ:Km,fromXYZ:Zm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:s,transfer:Dt,toXYZ:Km,fromXYZ:Zm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const Tt=ZS();function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function na(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Os;class JS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Os===void 0&&(Os=ho("canvas")),Os.width=e.width,Os.height=e.height;const a=Os.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=Os}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ho("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=qi(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(qi(t[s]/255)*255):t[s]=qi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let QS=0;class qd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=da(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(df(a[c].image)):l.push(df(a[c]))}else l=df(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function df(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?JS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eE=0;const hf=new te;class bn extends fa{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,s=Xi,a=Xi,l=Mi,c=rs,f=di,d=Ai,p=bn.DEFAULT_ANISOTROPY,m=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=da(),this.name="",this.source=new qd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hf).x}get height(){return this.source.getSize(hf).y}get depth(){return this.source.getSize(hf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ao:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ao:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Cv;bn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,s=0,a=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const d=e.elements,p=d[0],m=d[4],v=d[8],y=d[1],S=d[5],E=d[9],w=d[2],_=d[6],x=d[10];if(Math.abs(m-y)<.01&&Math.abs(v-w)<.01&&Math.abs(E-_)<.01){if(Math.abs(m+y)<.1&&Math.abs(v+w)<.1&&Math.abs(E+_)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,R=(S+1)/2,B=(x+1)/2,N=(m+y)/4,F=(v+w)/4,W=(E+_)/4;return b>R&&b>B?b<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(b),a=N/s,l=F/s):R>B?R<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),s=N/a,l=W/a):B<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(B),s=F/l,a=W/l),this.set(s,a,l,t),this}let L=Math.sqrt((_-E)*(_-E)+(v-w)*(v-w)+(y-m)*(y-m));return Math.abs(L)<.001&&(L=1),this.x=(_-E)/L,this.y=(v-w)/L,this.z=(y-m)/L,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tE extends fa{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const a={width:e,height:t,depth:s.depth},l=new bn(a);this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Mi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new qd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends tE{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Bv extends bn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=dn,this.minFilter=dn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nE extends bn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=dn,this.minFilter=dn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yo{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,li):li.fromBufferAttribute(l,c),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Dl.copy(s.boundingBox)),Dl.applyMatrix4(e.matrixWorld),this.union(Dl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),Ul.subVectors(this.max,qa),ks.subVectors(e.a,qa),Bs.subVectors(e.b,qa),zs.subVectors(e.c,qa),Sr.subVectors(Bs,ks),Er.subVectors(zs,Bs),Yr.subVectors(ks,zs);let t=[0,-Sr.z,Sr.y,0,-Er.z,Er.y,0,-Yr.z,Yr.y,Sr.z,0,-Sr.x,Er.z,0,-Er.x,Yr.z,0,-Yr.x,-Sr.y,Sr.x,0,-Er.y,Er.x,0,-Yr.y,Yr.x,0];return!pf(t,ks,Bs,zs,Ul)||(t=[1,0,0,0,1,0,0,0,1],!pf(t,ks,Bs,zs,Ul))?!1:(Nl.crossVectors(Sr,Er),t=[Nl.x,Nl.y,Nl.z],pf(t,ks,Bs,zs,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new te,new te,new te,new te,new te,new te,new te,new te],li=new te,Dl=new yo,ks=new te,Bs=new te,zs=new te,Sr=new te,Er=new te,Yr=new te,qa=new te,Ul=new te,Nl=new te,qr=new te;function pf(i,e,t,s,a){for(let l=0,c=i.length-3;l<=c;l+=3){qr.fromArray(i,l);const f=a.x*Math.abs(qr.x)+a.y*Math.abs(qr.y)+a.z*Math.abs(qr.z),d=e.dot(qr),p=t.dot(qr),m=s.dot(qr);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const iE=new yo,Ka=new te,mf=new te;class Kd{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):iE.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ka.subVectors(e,this.center);const t=Ka.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Ka,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ka.copy(e.center).add(mf)),this.expandByPoint(Ka.copy(e.center).sub(mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zi=new te,gf=new te,Il=new te,Mr=new te,vf=new te,Fl=new te,_f=new te;class rE{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){gf.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(gf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Il),f=Mr.dot(this.direction),d=-Mr.dot(Il),p=Mr.lengthSq(),m=Math.abs(1-c*c);let v,y,S,E;if(m>0)if(v=c*d-f,y=c*f-d,E=l*m,v>=0)if(y>=-E)if(y<=E){const w=1/m;v*=w,y*=w,S=v*(v+c*y+2*f)+y*(c*v+y+2*d)+p}else y=l,v=Math.max(0,-(c*y+f)),S=-v*v+y*(y+2*d)+p;else y=-l,v=Math.max(0,-(c*y+f)),S=-v*v+y*(y+2*d)+p;else y<=-E?(v=Math.max(0,-(-c*l+f)),y=v>0?-l:Math.min(Math.max(-l,-d),l),S=-v*v+y*(y+2*d)+p):y<=E?(v=0,y=Math.min(Math.max(-l,-d),l),S=y*(y+2*d)+p):(v=Math.max(0,-(c*l+f)),y=v>0?l:Math.min(Math.max(-l,-d),l),S=-v*v+y*(y+2*d)+p);else y=c>0?-l:l,v=Math.max(0,-(c*y+f)),S=-v*v+y*(y+2*d)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(gf).addScaledVector(Il,y),S}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const s=zi.dot(this.direction),a=zi.dot(zi)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,d=s+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,d;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,a=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,a=(e.min.x-y.x)*p),m>=0?(l=(e.min.y-y.y)*m,c=(e.max.y-y.y)*m):(l=(e.max.y-y.y)*m,c=(e.min.y-y.y)*m),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),v>=0?(f=(e.min.z-y.z)*v,d=(e.max.z-y.z)*v):(f=(e.max.z-y.z)*v,d=(e.min.z-y.z)*v),s>d||f>a)||((f>s||s!==s)&&(s=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,s,a,l){vf.subVectors(t,e),Fl.subVectors(s,e),_f.crossVectors(vf,Fl);let c=this.direction.dot(_f),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Mr.subVectors(this.origin,e);const d=f*this.direction.dot(Fl.crossVectors(Mr,Fl));if(d<0)return null;const p=f*this.direction.dot(vf.cross(Mr));if(p<0||d+p>c)return null;const m=-f*Mr.dot(_f);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,s,a,l,c,f,d,p,m,v,y,S,E,w,_){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,p,m,v,y,S,E,w,_)}set(e,t,s,a,l,c,f,d,p,m,v,y,S,E,w,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=a,x[1]=l,x[5]=c,x[9]=f,x[13]=d,x[2]=p,x[6]=m,x[10]=v,x[14]=y,x[3]=S,x[7]=E,x[11]=w,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),c=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),d=Math.cos(a),p=Math.sin(a),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=c*m,S=c*v,E=f*m,w=f*v;t[0]=d*m,t[4]=-d*v,t[8]=p,t[1]=S+E*p,t[5]=y-w*p,t[9]=-f*d,t[2]=w-y*p,t[6]=E+S*p,t[10]=c*d}else if(e.order==="YXZ"){const y=d*m,S=d*v,E=p*m,w=p*v;t[0]=y+w*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*m,t[9]=-f,t[2]=S*f-E,t[6]=w+y*f,t[10]=c*d}else if(e.order==="ZXY"){const y=d*m,S=d*v,E=p*m,w=p*v;t[0]=y-w*f,t[4]=-c*v,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*m,t[9]=w-y*f,t[2]=-c*p,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const y=c*m,S=c*v,E=f*m,w=f*v;t[0]=d*m,t[4]=E*p-S,t[8]=y*p+w,t[1]=d*v,t[5]=w*p+y,t[9]=S*p-E,t[2]=-p,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const y=c*d,S=c*p,E=f*d,w=f*p;t[0]=d*m,t[4]=w-y*v,t[8]=E*v+S,t[1]=v,t[5]=c*m,t[9]=-f*m,t[2]=-p*m,t[6]=S*v+E,t[10]=y-w*v}else if(e.order==="XZY"){const y=c*d,S=c*p,E=f*d,w=f*p;t[0]=d*m,t[4]=-v,t[8]=p*m,t[1]=y*v+w,t[5]=c*m,t[9]=S*v-E,t[2]=E*v-S,t[6]=f*m,t[10]=w*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sE,e,aE)}lookAt(e,t,s){const a=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),wr.crossVectors(s,Vn),wr.lengthSq()===0&&(Math.abs(s.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),wr.crossVectors(s,Vn)),wr.normalize(),Ol.crossVectors(Vn,wr),a[0]=wr.x,a[4]=Ol.x,a[8]=Vn.x,a[1]=wr.y,a[5]=Ol.y,a[9]=Vn.y,a[2]=wr.z,a[6]=Ol.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],d=s[8],p=s[12],m=s[1],v=s[5],y=s[9],S=s[13],E=s[2],w=s[6],_=s[10],x=s[14],L=s[3],b=s[7],R=s[11],B=s[15],N=a[0],F=a[4],W=a[8],P=a[12],A=a[1],H=a[5],oe=a[9],Q=a[13],le=a[2],me=a[6],ne=a[10],ve=a[14],V=a[3],ue=a[7],ae=a[11],I=a[15];return l[0]=c*N+f*A+d*le+p*V,l[4]=c*F+f*H+d*me+p*ue,l[8]=c*W+f*oe+d*ne+p*ae,l[12]=c*P+f*Q+d*ve+p*I,l[1]=m*N+v*A+y*le+S*V,l[5]=m*F+v*H+y*me+S*ue,l[9]=m*W+v*oe+y*ne+S*ae,l[13]=m*P+v*Q+y*ve+S*I,l[2]=E*N+w*A+_*le+x*V,l[6]=E*F+w*H+_*me+x*ue,l[10]=E*W+w*oe+_*ne+x*ae,l[14]=E*P+w*Q+_*ve+x*I,l[3]=L*N+b*A+R*le+B*V,l[7]=L*F+b*H+R*me+B*ue,l[11]=L*W+b*oe+R*ne+B*ae,l[15]=L*P+b*Q+R*ve+B*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],d=e[9],p=e[13],m=e[2],v=e[6],y=e[10],S=e[14],E=e[3],w=e[7],_=e[11],x=e[15];return E*(+l*d*v-a*p*v-l*f*y+s*p*y+a*f*S-s*d*S)+w*(+t*d*S-t*p*y+l*c*y-a*c*S+a*p*m-l*d*m)+_*(+t*p*v-t*f*S-l*c*v+s*c*S+l*f*m-s*p*m)+x*(-a*f*m-t*d*v+t*f*y+a*c*v-s*c*y+s*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=e[9],y=e[10],S=e[11],E=e[12],w=e[13],_=e[14],x=e[15],L=v*_*p-w*y*p+w*d*S-f*_*S-v*d*x+f*y*x,b=E*y*p-m*_*p-E*d*S+c*_*S+m*d*x-c*y*x,R=m*w*p-E*v*p+E*f*S-c*w*S-m*f*x+c*v*x,B=E*v*d-m*w*d-E*f*y+c*w*y+m*f*_-c*v*_,N=t*L+s*b+a*R+l*B;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=L*F,e[1]=(w*y*l-v*_*l-w*a*S+s*_*S+v*a*x-s*y*x)*F,e[2]=(f*_*l-w*d*l+w*a*p-s*_*p-f*a*x+s*d*x)*F,e[3]=(v*d*l-f*y*l-v*a*p+s*y*p+f*a*S-s*d*S)*F,e[4]=b*F,e[5]=(m*_*l-E*y*l+E*a*S-t*_*S-m*a*x+t*y*x)*F,e[6]=(E*d*l-c*_*l-E*a*p+t*_*p+c*a*x-t*d*x)*F,e[7]=(c*y*l-m*d*l+m*a*p-t*y*p-c*a*S+t*d*S)*F,e[8]=R*F,e[9]=(E*v*l-m*w*l-E*s*S+t*w*S+m*s*x-t*v*x)*F,e[10]=(c*w*l-E*f*l+E*s*p-t*w*p-c*s*x+t*f*x)*F,e[11]=(m*f*l-c*v*l-m*s*p+t*v*p+c*s*S-t*f*S)*F,e[12]=B*F,e[13]=(m*w*a-E*v*a+E*s*y-t*w*y-m*s*_+t*v*_)*F,e[14]=(E*f*a-c*w*a-E*s*d+t*w*d+c*s*_-t*f*_)*F,e[15]=(c*v*a-m*f*a+m*s*d-t*v*d-c*s*y+t*f*y)*F,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,d=e.z,p=l*c,m=l*f;return this.set(p*c+s,p*f-a*d,p*d+a*f,0,p*f+a*d,m*f+s,m*d-a*c,0,p*d-a*f,m*d+a*c,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,p=l+l,m=c+c,v=f+f,y=l*p,S=l*m,E=l*v,w=c*m,_=c*v,x=f*v,L=d*p,b=d*m,R=d*v,B=s.x,N=s.y,F=s.z;return a[0]=(1-(w+x))*B,a[1]=(S+R)*B,a[2]=(E-b)*B,a[3]=0,a[4]=(S-R)*N,a[5]=(1-(y+x))*N,a[6]=(_+L)*N,a[7]=0,a[8]=(E+b)*F,a[9]=(_-L)*F,a[10]=(1-(y+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Hs.set(a[0],a[1],a[2]).length();const c=Hs.set(a[4],a[5],a[6]).length(),f=Hs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ui.copy(this);const p=1/l,m=1/c,v=1/f;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=m,ui.elements[5]*=m,ui.elements[6]*=m,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,t.setFromRotationMatrix(ui),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=$i){const d=this.elements,p=2*l/(t-e),m=2*l/(s-a),v=(t+e)/(t-e),y=(s+a)/(s-a);let S,E;if(f===$i)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===du)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=$i){const d=this.elements,p=1/(t-e),m=1/(s-a),v=1/(c-l),y=(t+e)*p,S=(s+a)*m;let E,w;if(f===$i)E=(c+l)*v,w=-2*v;else if(f===du)E=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-y,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=w,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Hs=new te,ui=new $t,sE=new te(0,0,0),aE=new te(1,1,1),wr=new te,Ol=new te,Vn=new te,Jm=new $t,Qm=new xo;class Cn{constructor(e=0,t=0,s=0,a=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],d=a[1],p=a[5],m=a[9],v=a[2],y=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qm.setFromEuler(this),this.setFromQuaternion(Qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class zv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oE=0;const eg=new te,Vs=new xo,Hi=new $t,kl=new te,Za=new te,lE=new te,uE=new xo,tg=new te(1,0,0),ng=new te(0,1,0),ig=new te(0,0,1),rg={type:"added"},cE={type:"removed"},Gs={type:"childadded",child:null},xf={type:"childremoved",child:null};class yn extends fa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new te,t=new Cn,s=new xo,a=new te(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $t},normalMatrix:{value:new ut}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(tg,e)}rotateY(e){return this.rotateOnAxis(ng,e)}rotateZ(e){return this.rotateOnAxis(ig,e)}translateOnAxis(e,t){return eg.copy(e).applyQuaternion(this.quaternion),this.position.add(eg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tg,e)}translateY(e){return this.translateOnAxis(ng,e)}translateZ(e){return this.translateOnAxis(ig,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?kl.copy(e):kl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Za,kl,this.up):Hi.lookAt(kl,Za,this.up),this.quaternion.setFromRotationMatrix(Hi),a&&(Hi.extractRotation(a.matrixWorld),Vs.setFromRotationMatrix(Hi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rg),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cE),xf.child=e,this.dispatchEvent(xf),xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rg),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,e,lE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,uE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const v=d[p];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),p=c(e.textures),m=c(e.images),v=c(e.shapes),y=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),d.length>0&&(s.materials=d),p.length>0&&(s.textures=p),m.length>0&&(s.images=m),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=a,s;function c(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}yn.DEFAULT_UP=new te(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new te,Vi=new te,yf=new te,Gi=new te,Ws=new te,Xs=new te,sg=new te,Sf=new te,Ef=new te,Mf=new te,wf=new jt,Tf=new jt,Rf=new jt;class fi{constructor(e=new te,t=new te,s=new te){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),ci.subVectors(e,t),a.cross(ci);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){ci.subVectors(a,t),Vi.subVectors(s,t),yf.subVectors(e,t);const c=ci.dot(ci),f=ci.dot(Vi),d=ci.dot(yf),p=Vi.dot(Vi),m=Vi.dot(yf),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(p*d-f*m)*y,E=(c*m-f*d)*y;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,s,a,l,c,f,d){return this.getBarycoord(e,t,s,a,Gi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Gi.x),d.addScaledVector(c,Gi.y),d.addScaledVector(f,Gi.z),d)}static getInterpolatedAttribute(e,t,s,a,l,c){return wf.setScalar(0),Tf.setScalar(0),Rf.setScalar(0),wf.fromBufferAttribute(e,t),Tf.fromBufferAttribute(e,s),Rf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(wf,l.x),c.addScaledVector(Tf,l.y),c.addScaledVector(Rf,l.z),c}static isFrontFacing(e,t,s,a){return ci.subVectors(s,t),Vi.subVectors(e,t),ci.cross(Vi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ci.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return fi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;Ws.subVectors(a,s),Xs.subVectors(l,s),Sf.subVectors(e,s);const d=Ws.dot(Sf),p=Xs.dot(Sf);if(d<=0&&p<=0)return t.copy(s);Ef.subVectors(e,a);const m=Ws.dot(Ef),v=Xs.dot(Ef);if(m>=0&&v<=m)return t.copy(a);const y=d*v-m*p;if(y<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(s).addScaledVector(Ws,c);Mf.subVectors(e,l);const S=Ws.dot(Mf),E=Xs.dot(Mf);if(E>=0&&S<=E)return t.copy(l);const w=S*p-d*E;if(w<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(Xs,f);const _=m*E-S*v;if(_<=0&&v-m>=0&&S-E>=0)return sg.subVectors(l,a),f=(v-m)/(v-m+(S-E)),t.copy(a).addScaledVector(sg,f);const x=1/(_+w+y);return c=w*x,f=y*x,t.copy(s).addScaledVector(Ws,c).addScaledVector(Xs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function Af(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class bt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,a=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Tt.colorSpaceToWorking(this,a),this}setHSL(e,t,s,a=Tt.workingColorSpace){if(e=Yd(e,1),t=_t(t,0,1),s=_t(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Af(c,l,e+1/3),this.g=Af(c,l,e),this.b=Af(c,l,e-1/3)}return Tt.colorSpaceToWorking(this,a),this}setStyle(e,t=An){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const s=Hv[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Tt.workingToColorSpace(xn.copy(this),e),Math.round(_t(xn.r*255,0,255))*65536+Math.round(_t(xn.g*255,0,255))*256+Math.round(_t(xn.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(xn.copy(this),t);const s=xn.r,a=xn.g,l=xn.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let d,p;const m=(f+c)/2;if(f===c)d=0,p=0;else{const v=c-f;switch(p=m<=.5?v/(c+f):v/(2-c-f),c){case s:d=(a-l)/v+(a<l?6:0);break;case a:d=(l-s)/v+2;break;case l:d=(s-a)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=m,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=An){Tt.workingToColorSpace(xn.copy(this),e);const t=xn.r,s=xn.g,a=xn.b;return e!==An?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(Bl);const s=io(Tr.h,Bl.h,t),a=io(Tr.s,Bl.s,t),l=io(Tr.l,Bl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new bt;bt.NAMES=Hv;let fE=0;class xu extends fa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=da(),this.name="",this.type="Material",this.blending=ea,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jf,this.blendDst=$f,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ea&&(s.blending=this.blending),this.side!==Dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==jf&&(s.blendSrc=this.blendSrc),this.blendDst!==$f&&(s.blendDst=this.blendDst),this.blendEquation!==ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ra&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zd extends xu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new te,zl=new At;let dE=0;class Ti{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Xm,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Js(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Tn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Js(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Js(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Js(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Js(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array),a=Tn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array),a=Tn(a,this.array),l=Tn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xm&&(e.usage=this.usage),e}}class Vv extends Ti{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Gv extends Ti{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class as extends Ti{constructor(e,t,s){super(new Float32Array(e),t,s)}}let hE=0;const Kn=new $t,Cf=new yn,js=new te,Gn=new yo,Ja=new yo,ln=new te;class fs extends fa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kv(e)?Gv:Vv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ut().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,s){return Kn.makeTranslation(e,t,s),this.applyMatrix4(Kn),this}scale(e,t,s){return Kn.makeScale(e,t,s),this.applyMatrix4(Kn),this}lookAt(e){return Cf.lookAt(e),Cf.updateMatrix(),this.applyMatrix4(Cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new as(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const s=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Ja.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Gn.min,Ja.min),Gn.expandByPoint(ln),ln.addVectors(Gn.max,Ja.max),Gn.expandByPoint(ln)):(Gn.expandByPoint(Ja.min),Gn.expandByPoint(Ja.max))}Gn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(ln));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)ln.fromBufferAttribute(f,p),d&&(js.fromBufferAttribute(e,p),ln.add(js)),a=Math.max(a,s.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let W=0;W<s.count;W++)f[W]=new te,d[W]=new te;const p=new te,m=new te,v=new te,y=new At,S=new At,E=new At,w=new te,_=new te;function x(W,P,A){p.fromBufferAttribute(s,W),m.fromBufferAttribute(s,P),v.fromBufferAttribute(s,A),y.fromBufferAttribute(l,W),S.fromBufferAttribute(l,P),E.fromBufferAttribute(l,A),m.sub(p),v.sub(p),S.sub(y),E.sub(y);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(w.copy(m).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(H),_.copy(v).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(H),f[W].add(w),f[P].add(w),f[A].add(w),d[W].add(_),d[P].add(_),d[A].add(_))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let W=0,P=L.length;W<P;++W){const A=L[W],H=A.start,oe=A.count;for(let Q=H,le=H+oe;Q<le;Q+=3)x(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const b=new te,R=new te,B=new te,N=new te;function F(W){B.fromBufferAttribute(a,W),N.copy(B);const P=f[W];b.copy(P),b.sub(B.multiplyScalar(B.dot(P))).normalize(),R.crossVectors(N,P);const H=R.dot(d[W])<0?-1:1;c.setXYZW(W,b.x,b.y,b.z,H)}for(let W=0,P=L.length;W<P;++W){const A=L[W],H=A.start,oe=A.count;for(let Q=H,le=H+oe;Q<le;Q+=3)F(e.getX(Q+0)),F(e.getX(Q+1)),F(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ti(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const a=new te,l=new te,c=new te,f=new te,d=new te,p=new te,m=new te,v=new te;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),w=e.getX(y+1),_=e.getX(y+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,_),m.subVectors(c,l),v.subVectors(a,l),m.cross(v),f.fromBufferAttribute(s,E),d.fromBufferAttribute(s,w),p.fromBufferAttribute(s,_),f.add(m),d.add(m),p.add(m),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(w,d.x,d.y,d.z),s.setXYZ(_,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),c.fromBufferAttribute(t,y+2),m.subVectors(c,l),v.subVectors(a,l),m.cross(v),s.setXYZ(y+0,m.x,m.y,m.z),s.setXYZ(y+1,m.x,m.y,m.z),s.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,d){const p=f.array,m=f.itemSize,v=f.normalized,y=new p.constructor(d.length*m);let S=0,E=0;for(let w=0,_=d.length;w<_;w++){f.isInterleavedBufferAttribute?S=d[w]*f.data.stride+f.offset:S=d[w]*m;for(let x=0;x<m;x++)y[E++]=p[S++]}return new Ti(y,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fs,s=this.index.array,a=this.attributes;for(const f in a){const d=a[f],p=e(d,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,v=p.length;m<v;m++){const y=p[m],S=e(y,s);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const p=s[d];e.data.attributes[d]=p.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let v=0,y=p.length;v<y;v++){const S=p[v];m.push(S.toJSON(e.data))}m.length>0&&(a[d]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],v=l[p];for(let y=0,S=v.length;y<S;y++)m.push(v[y].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ag=new $t,Kr=new rE,Hl=new Kd,og=new te,Vl=new te,Gl=new te,Wl=new te,bf=new te,Xl=new te,lg=new te,jl=new te;class wi extends yn{constructor(e=new fs,t=new Zd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Xl.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],v=l[d];m!==0&&(bf.fromBufferAttribute(v,e),c?Xl.addScaledVector(bf,m):Xl.addScaledVector(bf.sub(t),m))}t.add(Xl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Hl.copy(s.boundingSphere),Hl.applyMatrix4(l),Kr.copy(e.ray).recast(e.near),!(Hl.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Hl,og)===null||Kr.origin.distanceToSquared(og)>(e.far-e.near)**2))&&(ag.copy(l).invert(),Kr.copy(e.ray).applyMatrix4(ag),!(s.boundingBox!==null&&Kr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,w=y.length;E<w;E++){const _=y[E],x=c[_.materialIndex],L=Math.max(_.start,S.start),b=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let R=L,B=b;R<B;R+=3){const N=f.getX(R),F=f.getX(R+1),W=f.getX(R+2);a=$l(this,x,e,s,p,m,v,N,F,W),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let _=E,x=w;_<x;_+=3){const L=f.getX(_),b=f.getX(_+1),R=f.getX(_+2);a=$l(this,c,e,s,p,m,v,L,b,R),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,w=y.length;E<w;E++){const _=y[E],x=c[_.materialIndex],L=Math.max(_.start,S.start),b=Math.min(d.count,Math.min(_.start+_.count,S.start+S.count));for(let R=L,B=b;R<B;R+=3){const N=R,F=R+1,W=R+2;a=$l(this,x,e,s,p,m,v,N,F,W),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let _=E,x=w;_<x;_+=3){const L=_,b=_+1,R=_+2;a=$l(this,c,e,s,p,m,v,L,b,R),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function pE(i,e,t,s,a,l,c,f){let d;if(e.side===On?d=s.intersectTriangle(c,l,a,!0,f):d=s.intersectTriangle(a,l,c,e.side===Dr,f),d===null)return null;jl.copy(f),jl.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(jl);return p<t.near||p>t.far?null:{distance:p,point:jl.clone(),object:i}}function $l(i,e,t,s,a,l,c,f,d,p){i.getVertexPosition(f,Vl),i.getVertexPosition(d,Gl),i.getVertexPosition(p,Wl);const m=pE(i,e,t,s,Vl,Gl,Wl,lg);if(m){const v=new te;fi.getBarycoord(lg,Vl,Gl,Wl,v),a&&(m.uv=fi.getInterpolatedAttribute(a,f,d,p,v,new At)),l&&(m.uv1=fi.getInterpolatedAttribute(l,f,d,p,v,new At)),c&&(m.normal=fi.getInterpolatedAttribute(c,f,d,p,v,new te),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const y={a:f,b:d,c:p,normal:new te,materialIndex:0};fi.getNormal(Vl,Gl,Wl,y.normal),m.face=y,m.barycoord=v}return m}class ha extends fs{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],m=[],v=[];let y=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,a,c,2),E("x","z","y",1,-1,e,s,-t,a,c,3),E("x","y","z",1,-1,e,t,s,a,l,4),E("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(d),this.setAttribute("position",new as(p,3)),this.setAttribute("normal",new as(m,3)),this.setAttribute("uv",new as(v,2));function E(w,_,x,L,b,R,B,N,F,W,P){const A=R/F,H=B/W,oe=R/2,Q=B/2,le=N/2,me=F+1,ne=W+1;let ve=0,V=0;const ue=new te;for(let ae=0;ae<ne;ae++){const I=ae*H-Q;for(let re=0;re<me;re++){const Oe=re*A-oe;ue[w]=Oe*L,ue[_]=I*b,ue[x]=le,p.push(ue.x,ue.y,ue.z),ue[w]=0,ue[_]=0,ue[x]=N>0?1:-1,m.push(ue.x,ue.y,ue.z),v.push(re/F),v.push(1-ae/W),ve+=1}}for(let ae=0;ae<W;ae++)for(let I=0;I<F;I++){const re=y+I+me*ae,Oe=y+I+me*(ae+1),ee=y+(I+1)+me*(ae+1),fe=y+(I+1)+me*ae;d.push(re,Oe,fe),d.push(Oe,ee,fe),V+=6}f.addGroup(S,V,P),S+=V,y+=ve}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function la(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const a=i[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Rn(i){const e={};for(let t=0;t<i.length;t++){const s=la(i[t]);for(const a in s)e[a]=s[a]}return e}function mE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const gE={clone:la,merge:Rn};var vE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends xu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vE,this.fragmentShader=_E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=mE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Xv extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new te,ug=new At,cg=new At;class ei extends Xv{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,ug,cg),t.subVectors(cg,ug)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/d,t-=c.offsetY*s/p,a*=c.width/d,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Ys=1;class xE extends yn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ei($s,Ys,e,t);a.layers=this.layers,this.add(a);const l=new ei($s,Ys,e,t);l.layers=this.layers,this.add(l);const c=new ei($s,Ys,e,t);c.layers=this.layers,this.add(c);const f=new ei($s,Ys,e,t);f.layers=this.layers,this.add(f);const d=new ei($s,Ys,e,t);d.layers=this.layers,this.add(d);const p=new ei($s,Ys,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,d]=t;for(const p of t)this.remove(p);if(e===$i)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===du)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,m]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,d),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(t,m),e.setRenderTarget(v,y,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class jv extends bn{constructor(e=[],t=sa,s,a,l,c,f,d,p,m){super(e,t,s,a,l,c,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yE extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new jv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ha(5,5,5),l=new Ur({name:"CubemapFromEquirect",uniforms:la(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:On,blending:Pr});l.uniforms.tEquirect.value=t;const c=new wi(a,l),f=t.minFilter;return t.minFilter===rs&&(t.minFilter=Mi),new xE(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}class Qa extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SE={type:"move"};class Pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,s),x=this._getHandJoint(p,w);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=m.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(SE)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Qa;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class EE extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Lf=new te,ME=new te,wE=new ut;class es{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Lf.subVectors(s,t).cross(ME.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Lf),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||wE.getNormalMatrix(e),a=this.coplanarPoint(Lf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Kd,TE=new At(.5,.5),Yl=new te;class Jd{constructor(e=new es,t=new es,s=new es,a=new es,l=new es,c=new es){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=$i){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],d=a[3],p=a[4],m=a[5],v=a[6],y=a[7],S=a[8],E=a[9],w=a[10],_=a[11],x=a[12],L=a[13],b=a[14],R=a[15];if(s[0].setComponents(d-l,y-p,_-S,R-x).normalize(),s[1].setComponents(d+l,y+p,_+S,R+x).normalize(),s[2].setComponents(d+c,y+m,_+E,R+L).normalize(),s[3].setComponents(d-c,y-m,_-E,R-L).normalize(),s[4].setComponents(d-f,y-v,_-w,R-b).normalize(),t===$i)s[5].setComponents(d+f,y+v,_+w,R+b).normalize();else if(t===du)s[5].setComponents(f,v,w,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const t=TE.distanceTo(e.center);return Zr.radius=.7071067811865476+t,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Yl.x=a.normal.x>0?e.max.x:e.min.x,Yl.y=a.normal.y>0?e.max.y:e.min.y,Yl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $v extends bn{constructor(e,t,s=ls,a,l,c,f=dn,d=dn,p,m=uo,v=1){if(m!==uo&&m!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:v};super(y,a,l,c,f,d,m,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yu extends fs{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),d=Math.floor(a),p=f+1,m=d+1,v=e/f,y=t/d,S=[],E=[],w=[],_=[];for(let x=0;x<m;x++){const L=x*y-c;for(let b=0;b<p;b++){const R=b*v-l;E.push(R,-L,0),w.push(0,0,1),_.push(b/f),_.push(1-x/d)}}for(let x=0;x<d;x++)for(let L=0;L<f;L++){const b=L+p*x,R=L+p*(x+1),B=L+1+p*(x+1),N=L+1+p*x;S.push(b,R,N),S.push(R,B,N)}this.setIndex(S),this.setAttribute("position",new as(E,3)),this.setAttribute("normal",new as(w,3)),this.setAttribute("uv",new as(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.width,e.height,e.widthSegments,e.heightSegments)}}class RE extends xu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AE extends xu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Df={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class CE{constructor(e,t,s){const a=this;let l=!1,c=0,f=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){f++,l===!1&&a.onStart!==void 0&&a.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,v){return p.push(m,v),this},this.removeHandler=function(m){const v=p.indexOf(m);return v!==-1&&p.splice(v,2),this},this.getHandler=function(m){for(let v=0,y=p.length;v<y;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(m))return E}return null}}}const bE=new CE;class Qd{constructor(e){this.manager=e!==void 0?e:bE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,l){s.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qd.DEFAULT_MATERIAL_NAME="__DEFAULT";const qs=new WeakMap;class PE extends Qd{constructor(e){super(e)}load(e,t,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Df.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let v=qs.get(c);v===void 0&&(v=[],qs.set(c,v)),v.push({onLoad:t,onError:a})}return c}const f=ho("img");function d(){m(),t&&t(this);const v=qs.get(this)||[];for(let y=0;y<v.length;y++){const S=v[y];S.onLoad&&S.onLoad(this)}qs.delete(this),l.manager.itemEnd(e)}function p(v){m(),a&&a(v),Df.remove(`image:${e}`);const y=qs.get(this)||[];for(let S=0;S<y.length;S++){const E=y[S];E.onError&&E.onError(v)}qs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Df.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class LE extends Qd{constructor(e){super(e)}load(e,t,s,a){const l=new bn,c=new PE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,a),l}}class DE extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Uf=new $t,fg=new te,dg=new te;class UE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jd,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;fg.setFromMatrixPosition(e.matrixWorld),t.position.copy(fg),dg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dg),t.updateMatrixWorld(),Uf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uf),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Uf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Yv extends Xv{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class NE extends UE{constructor(){super(new Yv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class IE extends DE{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new NE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class FE extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function hg(i,e,t,s){const a=OE(s);switch(t){case Dv:return i*e;case Nv:return i*e/a.components*a.byteLength;case Xd:return i*e/a.components*a.byteLength;case Iv:return i*e*2/a.components*a.byteLength;case jd:return i*e*2/a.components*a.byteLength;case Uv:return i*e*3/a.components*a.byteLength;case di:return i*e*4/a.components*a.byteLength;case $d:return i*e*4/a.components*a.byteLength;case iu:case ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case su:case au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sd:case od:return Math.max(i,16)*Math.max(e,8)/4;case rd:case ad:return Math.max(i,8)*Math.max(e,8)/2;case ld:case ud:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case hd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case md:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _d:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Md:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ou:case Td:case Rd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fv:case Ad:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cd:case bd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OE(i){switch(i){case Ai:case bv:return{byteLength:1,components:1};case oo:case Pv:case _o:return{byteLength:2,components:1};case Gd:case Wd:return{byteLength:2,components:4};case ls:case Vd:case ji:return{byteLength:4,components:1};case Lv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);function qv(){let i=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function kE(i){const e=new WeakMap;function t(f,d){const p=f.array,m=f.usage,v=p.byteLength,y=i.createBuffer();i.bindBuffer(d,y),i.bufferData(d,p,m),f.onUploadCallback();let S;if(p instanceof Float32Array)S=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=i.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=i.SHORT;else if(p instanceof Uint32Array)S=i.UNSIGNED_INT;else if(p instanceof Int32Array)S=i.INT;else if(p instanceof Int8Array)S=i.BYTE;else if(p instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,d,p){const m=d.array,v=d.updateRanges;if(i.bindBuffer(p,f),v.length===0)i.bufferSubData(p,0,m);else{v.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<v.length;S++){const E=v[y],w=v[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++y,v[y]=w)}v.length=y+1;for(let S=0,E=v.length;S<E;S++){const w=v[S];i.bufferSubData(p,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(i.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,d),p.version=f.version}}return{get:a,remove:l,update:c}}var BE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zE=`#ifdef USE_ALPHAHASH
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
#endif`,HE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
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
#endif`,jE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$E=`#ifdef USE_BATCHING
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
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JE=`#ifdef USE_IRIDESCENCE
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
#endif`,QE=`#ifdef USE_BUMPMAP
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
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lM=`#define PI 3.141592653589793
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
} // validated`,uM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cM=`vec3 transformedNormal = objectNormal;
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
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mM="gl_FragColor = linearToOutputTexel( gl_FragColor );",gM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RM=`#ifdef USE_GRADIENTMAP
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
}`,AM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PM=`uniform bool receiveShadow;
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
#endif`,LM=`#ifdef USE_ENVMAP
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
#endif`,DM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FM=`PhysicalMaterial material;
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
#endif`,OM=`struct PhysicalMaterial {
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
}`,kM=`
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
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
#endif`,zM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YM=`#if defined( USE_POINTS_UV )
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
#endif`,qM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ew=`#ifdef USE_MORPHTARGETS
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
#endif`,tw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ow=`#ifdef USE_NORMALMAP
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
#endif`,lw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_w=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ew=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mw=`float getShadowMask() {
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
}`,ww=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tw=`#ifdef USE_SKINNING
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
#endif`,Rw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Aw=`#ifdef USE_SKINNING
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
#endif`,Cw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dw=`#ifdef USE_TRANSMISSION
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
#endif`,Uw=`#ifdef USE_TRANSMISSION
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
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ow=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bw=`uniform sampler2D t2D;
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
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`#include <common>
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
}`,Xw=`#if DEPTH_PACKING == 3200
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
}`,jw=`#define DISTANCE
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
}`,$w=`#define DISTANCE
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
}`,Yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`uniform float scale;
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
}`,Zw=`uniform vec3 diffuse;
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
}`,Jw=`#include <common>
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
}`,Qw=`uniform vec3 diffuse;
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
}`,eT=`#define LAMBERT
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
}`,tT=`#define LAMBERT
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
}`,nT=`#define MATCAP
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
}`,iT=`#define MATCAP
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
}`,rT=`#define NORMAL
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
}`,sT=`#define NORMAL
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
}`,aT=`#define PHONG
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
}`,oT=`#define PHONG
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
}`,lT=`#define STANDARD
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
}`,uT=`#define STANDARD
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
}`,cT=`#define TOON
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
}`,fT=`#define TOON
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
}`,dT=`uniform float size;
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
}`,hT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 color;
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
}`,gT=`uniform float rotation;
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
}`,vT=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:BE,alphahash_pars_fragment:zE,alphamap_fragment:HE,alphamap_pars_fragment:VE,alphatest_fragment:GE,alphatest_pars_fragment:WE,aomap_fragment:XE,aomap_pars_fragment:jE,batching_pars_vertex:$E,batching_vertex:YE,begin_vertex:qE,beginnormal_vertex:KE,bsdfs:ZE,iridescence_fragment:JE,bumpmap_pars_fragment:QE,clipping_planes_fragment:eM,clipping_planes_pars_fragment:tM,clipping_planes_pars_vertex:nM,clipping_planes_vertex:iM,color_fragment:rM,color_pars_fragment:sM,color_pars_vertex:aM,color_vertex:oM,common:lM,cube_uv_reflection_fragment:uM,defaultnormal_vertex:cM,displacementmap_pars_vertex:fM,displacementmap_vertex:dM,emissivemap_fragment:hM,emissivemap_pars_fragment:pM,colorspace_fragment:mM,colorspace_pars_fragment:gM,envmap_fragment:vM,envmap_common_pars_fragment:_M,envmap_pars_fragment:xM,envmap_pars_vertex:yM,envmap_physical_pars_fragment:LM,envmap_vertex:SM,fog_vertex:EM,fog_pars_vertex:MM,fog_fragment:wM,fog_pars_fragment:TM,gradientmap_pars_fragment:RM,lightmap_pars_fragment:AM,lights_lambert_fragment:CM,lights_lambert_pars_fragment:bM,lights_pars_begin:PM,lights_toon_fragment:DM,lights_toon_pars_fragment:UM,lights_phong_fragment:NM,lights_phong_pars_fragment:IM,lights_physical_fragment:FM,lights_physical_pars_fragment:OM,lights_fragment_begin:kM,lights_fragment_maps:BM,lights_fragment_end:zM,logdepthbuf_fragment:HM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:GM,logdepthbuf_vertex:WM,map_fragment:XM,map_pars_fragment:jM,map_particle_fragment:$M,map_particle_pars_fragment:YM,metalnessmap_fragment:qM,metalnessmap_pars_fragment:KM,morphinstance_vertex:ZM,morphcolor_vertex:JM,morphnormal_vertex:QM,morphtarget_pars_vertex:ew,morphtarget_vertex:tw,normal_fragment_begin:nw,normal_fragment_maps:iw,normal_pars_fragment:rw,normal_pars_vertex:sw,normal_vertex:aw,normalmap_pars_fragment:ow,clearcoat_normal_fragment_begin:lw,clearcoat_normal_fragment_maps:uw,clearcoat_pars_fragment:cw,iridescence_pars_fragment:fw,opaque_fragment:dw,packing:hw,premultiplied_alpha_fragment:pw,project_vertex:mw,dithering_fragment:gw,dithering_pars_fragment:vw,roughnessmap_fragment:_w,roughnessmap_pars_fragment:xw,shadowmap_pars_fragment:yw,shadowmap_pars_vertex:Sw,shadowmap_vertex:Ew,shadowmask_pars_fragment:Mw,skinbase_vertex:ww,skinning_pars_vertex:Tw,skinning_vertex:Rw,skinnormal_vertex:Aw,specularmap_fragment:Cw,specularmap_pars_fragment:bw,tonemapping_fragment:Pw,tonemapping_pars_fragment:Lw,transmission_fragment:Dw,transmission_pars_fragment:Uw,uv_pars_fragment:Nw,uv_pars_vertex:Iw,uv_vertex:Fw,worldpos_vertex:Ow,background_vert:kw,background_frag:Bw,backgroundCube_vert:zw,backgroundCube_frag:Hw,cube_vert:Vw,cube_frag:Gw,depth_vert:Ww,depth_frag:Xw,distanceRGBA_vert:jw,distanceRGBA_frag:$w,equirect_vert:Yw,equirect_frag:qw,linedashed_vert:Kw,linedashed_frag:Zw,meshbasic_vert:Jw,meshbasic_frag:Qw,meshlambert_vert:eT,meshlambert_frag:tT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:rT,meshnormal_frag:sT,meshphong_vert:aT,meshphong_frag:oT,meshphysical_vert:lT,meshphysical_frag:uT,meshtoon_vert:cT,meshtoon_frag:fT,points_vert:dT,points_frag:hT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:vT},Ue={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Si={basic:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Rn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Rn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Rn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Rn([Ue.points,Ue.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Rn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Rn([Ue.common,Ue.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Rn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Rn([Ue.sprite,Ue.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Rn([Ue.common,Ue.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Rn([Ue.lights,Ue.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Si.physical={uniforms:Rn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const ql={r:0,b:0,g:0},Jr=new Cn,_T=new $t;function xT(i,e,t,s,a,l,c){const f=new bt(0);let d=l===!0?0:1,p,m,v=null,y=0,S=null;function E(b){let R=b.isScene===!0?b.background:null;return R&&R.isTexture&&(R=(b.backgroundBlurriness>0?t:e).get(R)),R}function w(b){let R=!1;const B=E(b);B===null?x(f,d):B&&B.isColor&&(x(B,1),R=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,R){const B=E(R);B&&(B.isCubeTexture||B.mapping===_u)?(m===void 0&&(m=new wi(new ha(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:la(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,F,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),Jr.copy(R.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),m.material.uniforms.envMap.value=B,m.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(_T.makeRotationFromEuler(Jr)),m.material.toneMapped=Tt.getTransfer(B.colorSpace)!==Dt,(v!==B||y!==B.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,v=B,y=B.version,S=i.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new wi(new yu(2,2),new Ur({name:"BackgroundMaterial",uniforms:la(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(B.colorSpace)!==Dt,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||y!==B.version||S!==i.toneMapping)&&(p.material.needsUpdate=!0,v=B,y=B.version,S=i.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function x(b,R){b.getRGB(ql,Wv(i)),s.buffers.color.setClear(ql.r,ql.g,ql.b,R,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(b,R=1){f.set(b),d=R,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,x(f,d)},render:w,addToRenderList:_,dispose:L}}function yT(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},a=y(null);let l=a,c=!1;function f(A,H,oe,Q,le){let me=!1;const ne=v(Q,oe,H);l!==ne&&(l=ne,p(l.object)),me=S(A,Q,oe,le),me&&E(A,Q,oe,le),le!==null&&e.update(le,i.ELEMENT_ARRAY_BUFFER),(me||c)&&(c=!1,R(A,H,oe,Q),le!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function d(){return i.createVertexArray()}function p(A){return i.bindVertexArray(A)}function m(A){return i.deleteVertexArray(A)}function v(A,H,oe){const Q=oe.wireframe===!0;let le=s[A.id];le===void 0&&(le={},s[A.id]=le);let me=le[H.id];me===void 0&&(me={},le[H.id]=me);let ne=me[Q];return ne===void 0&&(ne=y(d()),me[Q]=ne),ne}function y(A){const H=[],oe=[],Q=[];for(let le=0;le<t;le++)H[le]=0,oe[le]=0,Q[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:oe,attributeDivisors:Q,object:A,attributes:{},index:null}}function S(A,H,oe,Q){const le=l.attributes,me=H.attributes;let ne=0;const ve=oe.getAttributes();for(const V in ve)if(ve[V].location>=0){const ae=le[V];let I=me[V];if(I===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(I=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(I=A.instanceColor)),ae===void 0||ae.attribute!==I||I&&ae.data!==I.data)return!0;ne++}return l.attributesNum!==ne||l.index!==Q}function E(A,H,oe,Q){const le={},me=H.attributes;let ne=0;const ve=oe.getAttributes();for(const V in ve)if(ve[V].location>=0){let ae=me[V];ae===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor));const I={};I.attribute=ae,ae&&ae.data&&(I.data=ae.data),le[V]=I,ne++}l.attributes=le,l.attributesNum=ne,l.index=Q}function w(){const A=l.newAttributes;for(let H=0,oe=A.length;H<oe;H++)A[H]=0}function _(A){x(A,0)}function x(A,H){const oe=l.newAttributes,Q=l.enabledAttributes,le=l.attributeDivisors;oe[A]=1,Q[A]===0&&(i.enableVertexAttribArray(A),Q[A]=1),le[A]!==H&&(i.vertexAttribDivisor(A,H),le[A]=H)}function L(){const A=l.newAttributes,H=l.enabledAttributes;for(let oe=0,Q=H.length;oe<Q;oe++)H[oe]!==A[oe]&&(i.disableVertexAttribArray(oe),H[oe]=0)}function b(A,H,oe,Q,le,me,ne){ne===!0?i.vertexAttribIPointer(A,H,oe,le,me):i.vertexAttribPointer(A,H,oe,Q,le,me)}function R(A,H,oe,Q){w();const le=Q.attributes,me=oe.getAttributes(),ne=H.defaultAttributeValues;for(const ve in me){const V=me[ve];if(V.location>=0){let ue=le[ve];if(ue===void 0&&(ve==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),ve==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor)),ue!==void 0){const ae=ue.normalized,I=ue.itemSize,re=e.get(ue);if(re===void 0)continue;const Oe=re.buffer,ee=re.type,fe=re.bytesPerElement,Re=ee===i.INT||ee===i.UNSIGNED_INT||ue.gpuType===Vd;if(ue.isInterleavedBufferAttribute){const Ee=ue.data,Ae=Ee.stride,Ke=ue.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)x(V.location+Ve,Ee.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)_(V.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Ve=0;Ve<V.locationSize;Ve++)b(V.location+Ve,I/V.locationSize,ee,ae,Ae*fe,(Ke+I/V.locationSize*Ve)*fe,Re)}else{if(ue.isInstancedBufferAttribute){for(let Ee=0;Ee<V.locationSize;Ee++)x(V.location+Ee,ue.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)_(V.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Ee=0;Ee<V.locationSize;Ee++)b(V.location+Ee,I/V.locationSize,ee,ae,I*fe,I/V.locationSize*Ee*fe,Re)}}else if(ne!==void 0){const ae=ne[ve];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(V.location,ae);break;case 3:i.vertexAttrib3fv(V.location,ae);break;case 4:i.vertexAttrib4fv(V.location,ae);break;default:i.vertexAttrib1fv(V.location,ae)}}}}L()}function B(){W();for(const A in s){const H=s[A];for(const oe in H){const Q=H[oe];for(const le in Q)m(Q[le].object),delete Q[le];delete H[oe]}delete s[A]}}function N(A){if(s[A.id]===void 0)return;const H=s[A.id];for(const oe in H){const Q=H[oe];for(const le in Q)m(Q[le].object),delete Q[le];delete H[oe]}delete s[A.id]}function F(A){for(const H in s){const oe=s[H];if(oe[A.id]===void 0)continue;const Q=oe[A.id];for(const le in Q)m(Q[le].object),delete Q[le];delete oe[A.id]}}function W(){P(),c=!0,l!==a&&(l=a,p(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:W,resetDefaultState:P,dispose:B,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:_,disableUnusedAttributes:L}}function ST(i,e,t){let s;function a(p){s=p}function l(p,m){i.drawArrays(s,p,m),t.update(m,s,1)}function c(p,m,v){v!==0&&(i.drawArraysInstanced(s,p,m,v),t.update(m,s,v))}function f(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,v);let S=0;for(let E=0;E<v;E++)S+=m[E];t.update(S,s,1)}function d(p,m,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],m[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,m,0,y,0,v);let E=0;for(let w=0;w<v;w++)E+=m[w]*y[w];t.update(E,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function ET(i,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==di&&s.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const W=F===_o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ai&&s.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ji&&!W)}function d(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=d(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const v=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:B,maxSamples:N}}function MT(i){const e=this;let t=null,s=0,a=!1,l=!1;const c=new es,f=new ut,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||s!==0||a;return a=y,s=v.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=m(v,y,0)},this.setState=function(v,y,S){const E=v.clippingPlanes,w=v.clipIntersection,_=v.clipShadows,x=i.get(v);if(!a||E===null||E.length===0||l&&!_)l?m(null):p();else{const L=l?0:s,b=L*4;let R=x.clippingState||null;d.value=R,R=m(E,y,b,S);for(let B=0;B!==b;++B)R[B]=t[B];x.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(v,y,S,E){const w=v!==null?v.length:0;let _=null;if(w!==0){if(_=d.value,E!==!0||_===null){const x=S+w*4,L=y.matrixWorldInverse;f.getNormalMatrix(L),(_===null||_.length<x)&&(_=new Float32Array(x));for(let b=0,R=S;b!==w;++b,R+=4)c.copy(v[b]).applyMatrix4(L,f),c.normal.toArray(_,R),_[R+3]=c.constant}d.value=_,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}function wT(i){let e=new WeakMap;function t(c,f){return f===td?c.mapping=sa:f===nd&&(c.mapping=aa),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===td||f===nd)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new yE(d.height);return p.fromEquirectangularTexture(i,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const Qs=4,pg=[.125,.215,.35,.446,.526,.582],is=20,Nf=new Yv,mg=new bt;let If=null,Ff=0,Of=0,kf=!1;const ts=(1+Math.sqrt(5))/2,Ks=1/ts,gg=[new te(-ts,Ks,0),new te(ts,Ks,0),new te(-Ks,0,ts),new te(Ks,0,ts),new te(0,ts,-Ks),new te(0,ts,Ks),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)],TT=new te;class vg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100,l={}){const{size:c=256,position:f=TT}=l;If=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,s,a,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(If,Ff,Of),this._renderer.xr.enabled=kf,e.scissorTest=!1,Kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sa||e.mapping===aa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),If=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:_o,format:di,colorSpace:oa,depthBuffer:!1},a=_g(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RT(l)),this._blurMaterial=AT(l,e,t)}return a}_compileMaterial(e){const t=new wi(this._lodPlanes[0],e);this._renderer.compile(t,Nf)}_sceneToCubeUV(e,t,s,a,l){const d=new ei(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(mg),v.toneMapping=Yi,v.autoClear=!1;const E=new Zd({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),w=new wi(new ha,E);let _=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,_=!0):(E.color.copy(mg),_=!0);for(let L=0;L<6;L++){const b=L%3;b===0?(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[L],l.y,l.z)):b===1?(d.up.set(0,0,p[L]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[L],l.z)):(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[L]));const R=this._cubeSize;Kl(a,b*R,L>2?R:0,R,R),v.setRenderTarget(a),_&&v.render(w,d),v.render(e,d)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=S,v.autoClear=y,e.background=x}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===sa||e.mapping===aa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new wi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Kl(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(c,Nf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=gg[(a-l-1)%gg.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new wi(this._lodPlanes[a],p),y=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*is-1),w=l/E,_=isFinite(l)?1+Math.floor(m*w):is;_>is&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${is}`);const x=[];let L=0;for(let F=0;F<is;++F){const W=F/w,P=Math.exp(-W*W/2);x.push(P),F===0?L+=P:F<_&&(L+=2*P)}for(let F=0;F<x.length;F++)x[F]=x[F]/L;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=x,y.latitudinal.value=c==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:b}=this;y.dTheta.value=E,y.mipInt.value=b-s;const R=this._sizeLods[a],B=3*R*(a>b-Qs?a-b+Qs:0),N=4*(this._cubeSize-R);Kl(t,B,N,3*R,2*R),d.setRenderTarget(t),d.render(v,Nf)}}function RT(i){const e=[],t=[],s=[];let a=i;const l=i-Qs+1+pg.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let d=1/f;c>i-Qs?d=pg[c-i+Qs-1]:c===0&&(d=0),s.push(d);const p=1/(f-2),m=-p,v=1+p,y=[m,m,v,m,v,v,m,m,v,v,m,v],S=6,E=6,w=3,_=2,x=1,L=new Float32Array(w*E*S),b=new Float32Array(_*E*S),R=new Float32Array(x*E*S);for(let N=0;N<S;N++){const F=N%3*2/3-1,W=N>2?0:-1,P=[F,W,0,F+2/3,W,0,F+2/3,W+1,0,F,W,0,F+2/3,W+1,0,F,W+1,0];L.set(P,w*E*N),b.set(y,_*E*N);const A=[N,N,N,N,N,N];R.set(A,x*E*N)}const B=new fs;B.setAttribute("position",new Ti(L,w)),B.setAttribute("uv",new Ti(b,_)),B.setAttribute("faceIndex",new Ti(R,x)),e.push(B),a>Qs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function _g(i,e,t){const s=new us(i,e,t);return s.texture.mapping=_u,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Kl(i,e,t,s,a){i.viewport.set(e,t,s,a),i.scissor.set(e,t,s,a)}function AT(i,e,t){const s=new Float32Array(is),a=new te(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function xg(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function yg(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function CT(i){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const d=f.mapping,p=d===td||d===nd,m=d===sa||d===aa;if(p||m){let v=e.get(f);const y=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return t===null&&(t=new vg(i)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||m&&S&&a(S)?(t===null&&(t=new vg(i)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function bT(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&ta("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function PT(i,e,t,s){const a={},l=new WeakMap;function c(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",c),delete a[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function f(v,y){return a[y.id]===!0||(y.addEventListener("dispose",c),a[y.id]=!0,t.memory.geometries++),y}function d(v){const y=v.attributes;for(const S in y)e.update(y[S],i.ARRAY_BUFFER)}function p(v){const y=[],S=v.index,E=v.attributes.position;let w=0;if(S!==null){const L=S.array;w=S.version;for(let b=0,R=L.length;b<R;b+=3){const B=L[b+0],N=L[b+1],F=L[b+2];y.push(B,N,N,F,F,B)}}else if(E!==void 0){const L=E.array;w=E.version;for(let b=0,R=L.length/3-1;b<R;b+=3){const B=b+0,N=b+1,F=b+2;y.push(B,N,N,F,F,B)}}else return;const _=new(kv(y)?Gv:Vv)(y,1);_.version=w;const x=l.get(v);x&&e.remove(x),l.set(v,_)}function m(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function LT(i,e,t){let s;function a(y){s=y}let l,c;function f(y){l=y.type,c=y.bytesPerElement}function d(y,S){i.drawElements(s,S,l,y*c),t.update(S,s,1)}function p(y,S,E){E!==0&&(i.drawElementsInstanced(s,S,l,y*c,E),t.update(S,s,E))}function m(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,y,0,E);let _=0;for(let x=0;x<E;x++)_+=S[x];t.update(_,s,1)}function v(y,S,E,w){if(E===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<y.length;x++)p(y[x]/c,S[x],w[x]);else{_.multiDrawElementsInstancedWEBGL(s,S,0,l,y,0,w,0,E);let x=0;for(let L=0;L<E;L++)x+=S[L]*w[L];t.update(x,s,1)}}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function DT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=f*(l/3);break;case i.LINES:t.lines+=f*(l/2);break;case i.LINE_STRIP:t.lines+=f*(l-1);break;case i.LINE_LOOP:t.lines+=f*l;break;case i.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function UT(i,e,t){const s=new WeakMap,a=new jt;function l(c,f,d){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let y=s.get(f);if(y===void 0||y.count!==v){let P=function(){F.dispose(),s.delete(f),f.removeEventListener("dispose",P)};y!==void 0&&y.texture.dispose();const S=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let b=0;S===!0&&(b=1),E===!0&&(b=2),w===!0&&(b=3);let R=f.attributes.position.count*b,B=1;R>e.maxTextureSize&&(B=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const N=new Float32Array(R*B*4*v),F=new Bv(N,R,B,v);F.type=ji,F.needsUpdate=!0;const W=b*4;for(let A=0;A<v;A++){const H=_[A],oe=x[A],Q=L[A],le=R*B*4*A;for(let me=0;me<H.count;me++){const ne=me*W;S===!0&&(a.fromBufferAttribute(H,me),N[le+ne+0]=a.x,N[le+ne+1]=a.y,N[le+ne+2]=a.z,N[le+ne+3]=0),E===!0&&(a.fromBufferAttribute(oe,me),N[le+ne+4]=a.x,N[le+ne+5]=a.y,N[le+ne+6]=a.z,N[le+ne+7]=0),w===!0&&(a.fromBufferAttribute(Q,me),N[le+ne+8]=a.x,N[le+ne+9]=a.y,N[le+ne+10]=a.z,N[le+ne+11]=Q.itemSize===4?a.w:1)}}y={count:v,texture:F,size:new At(R,B)},s.set(f,y),f.addEventListener("dispose",P)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let S=0;for(let w=0;w<p.length;w++)S+=p[w];const E=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}return{update:l}}function NT(i,e,t,s){let a=new WeakMap;function l(d){const p=s.render.frame,m=d.geometry,v=e.get(d,m);if(a.get(v)!==p&&(e.update(v),a.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==p&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),a.set(d,p))),d.isSkinnedMesh){const y=d.skeleton;a.get(y)!==p&&(y.update(),a.set(y,p))}return v}function c(){a=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const Kv=new bn,Sg=new $v(1,1),Zv=new Bv,Jv=new nE,Qv=new jv,Eg=[],Mg=[],wg=new Float32Array(16),Tg=new Float32Array(9),Rg=new Float32Array(4);function pa(i,e,t){const s=i[0];if(s<=0||s>0)return i;const a=e*t;let l=Eg[a];if(l===void 0&&(l=new Float32Array(a),Eg[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,i[c].toArray(l,f)}return l}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Su(i,e){let t=Mg[e];t===void 0&&(t=new Int32Array(e),Mg[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function IT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function FT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function OT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function kT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function BT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,s))return;Rg.set(s),i.uniformMatrix2fv(this.addr,!1,Rg),en(t,s)}}function zT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,s))return;Tg.set(s),i.uniformMatrix3fv(this.addr,!1,Tg),en(t,s)}}function HT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,s))return;wg.set(s),i.uniformMatrix4fv(this.addr,!1,wg),en(t,s)}}function VT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function GT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function WT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function XT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function jT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $T(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function YT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function qT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function KT(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a);let l;this.type===i.SAMPLER_2D_SHADOW?(Sg.compareFunction=Ov,l=Sg):l=Kv,t.setTexture2D(e||l,a)}function ZT(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||Jv,a)}function JT(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||Qv,a)}function QT(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||Zv,a)}function e1(i){switch(i){case 5126:return IT;case 35664:return FT;case 35665:return OT;case 35666:return kT;case 35674:return BT;case 35675:return zT;case 35676:return HT;case 5124:case 35670:return VT;case 35667:case 35671:return GT;case 35668:case 35672:return WT;case 35669:case 35673:return XT;case 5125:return jT;case 36294:return $T;case 36295:return YT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return QT}}function t1(i,e){i.uniform1fv(this.addr,e)}function n1(i,e){const t=pa(e,this.size,2);i.uniform2fv(this.addr,t)}function i1(i,e){const t=pa(e,this.size,3);i.uniform3fv(this.addr,t)}function r1(i,e){const t=pa(e,this.size,4);i.uniform4fv(this.addr,t)}function s1(i,e){const t=pa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function a1(i,e){const t=pa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function o1(i,e){const t=pa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function l1(i,e){i.uniform1iv(this.addr,e)}function u1(i,e){i.uniform2iv(this.addr,e)}function c1(i,e){i.uniform3iv(this.addr,e)}function f1(i,e){i.uniform4iv(this.addr,e)}function d1(i,e){i.uniform1uiv(this.addr,e)}function h1(i,e){i.uniform2uiv(this.addr,e)}function p1(i,e){i.uniform3uiv(this.addr,e)}function m1(i,e){i.uniform4uiv(this.addr,e)}function g1(i,e,t){const s=this.cache,a=e.length,l=Su(t,a);Qt(s,l)||(i.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Kv,l[c])}function v1(i,e,t){const s=this.cache,a=e.length,l=Su(t,a);Qt(s,l)||(i.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Jv,l[c])}function _1(i,e,t){const s=this.cache,a=e.length,l=Su(t,a);Qt(s,l)||(i.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Qv,l[c])}function x1(i,e,t){const s=this.cache,a=e.length,l=Su(t,a);Qt(s,l)||(i.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Zv,l[c])}function y1(i){switch(i){case 5126:return t1;case 35664:return n1;case 35665:return i1;case 35666:return r1;case 35674:return s1;case 35675:return a1;case 35676:return o1;case 5124:case 35670:return l1;case 35667:case 35671:return u1;case 35668:case 35672:return c1;case 35669:case 35673:return f1;case 5125:return d1;case 36294:return h1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return x1}}class S1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=e1(t.type)}}class E1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=y1(t.type)}}class M1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const Bf=/(\w+)(\])?(\[|\.)?/g;function Ag(i,e){i.seq.push(e),i.map[e.id]=e}function w1(i,e,t){const s=i.name,a=s.length;for(Bf.lastIndex=0;;){const l=Bf.exec(s),c=Bf.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===a){Ag(t,p===void 0?new S1(f,i,e):new E1(f,i,e));break}else{let v=t.map[f];v===void 0&&(v=new M1(f),Ag(t,v)),t=v}}}class lu{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);w1(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=s[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function Cg(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const T1=37297;let R1=0;function A1(i,e){const t=i.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const bg=new ut;function C1(i){Tt._getMatrix(bg,Tt.workingColorSpace,i);const e=`mat3( ${bg.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(i)){case fu:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Pg(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+A1(i.getShaderSource(e),c)}else return a}function b1(i,e){const t=C1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function P1(i,e){let t;switch(e){case fS:t="Linear";break;case dS:t="Reinhard";break;case hS:t="Cineon";break;case pS:t="ACESFilmic";break;case gS:t="AgX";break;case vS:t="Neutral";break;case mS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zl=new te;function L1(){Tt.getLuminanceCoefficients(Zl);const i=Zl.x.toFixed(4),e=Zl.y.toFixed(4),t=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function U1(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function N1(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=i.getActiveAttrib(e,a),c=l.name;let f=1;l.type===i.FLOAT_MAT2&&(f=2),l.type===i.FLOAT_MAT3&&(f=3),l.type===i.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:f}}return t}function eo(i){return i!==""}function Lg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(i){return i.replace(I1,O1)}const F1=new Map;function O1(i,e){let t=ht[e];if(t===void 0){const s=F1.get(e);if(s!==void 0)t=ht[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Pd(t)}const k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ug(i){return i.replace(k1,B1)}function B1(i,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Ng(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function z1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rv?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wy?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function H1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sa:case aa:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V1(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===aa&&(e="ENVMAP_MODE_REFRACTION"),e}function G1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Av:e="ENVMAP_BLENDING_MULTIPLY";break;case uS:e="ENVMAP_BLENDING_MIX";break;case cS:e="ENVMAP_BLENDING_ADD";break}return e}function W1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function X1(i,e,t,s){const a=i.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=z1(t),p=H1(t),m=V1(t),v=G1(t),y=W1(t),S=D1(t),E=U1(l),w=a.createProgram();let _,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(eo).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(eo).join(`
`),x.length>0&&(x+=`
`)):(_=[Ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),x=[Ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?ht.tonemapping_pars_fragment:"",t.toneMapping!==Yi?P1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,b1("linearToOutputTexel",t.outputColorSpace),L1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),c=Pd(c),c=Lg(c,t),c=Dg(c,t),f=Pd(f),f=Lg(f,t),f=Dg(f,t),c=Ug(c),f=Ug(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===jm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=L+_+c,R=L+x+f,B=Cg(a,a.VERTEX_SHADER,b),N=Cg(a,a.FRAGMENT_SHADER,R);a.attachShader(w,B),a.attachShader(w,N),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(H){if(i.debug.checkShaderErrors){const oe=a.getProgramInfoLog(w).trim(),Q=a.getShaderInfoLog(B).trim(),le=a.getShaderInfoLog(N).trim();let me=!0,ne=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,w,B,N);else{const ve=Pg(a,B,"vertex"),V=Pg(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+oe+`
`+ve+`
`+V)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(Q===""||le==="")&&(ne=!1);ne&&(H.diagnostics={runnable:me,programLog:oe,vertexShader:{log:Q,prefix:_},fragmentShader:{log:le,prefix:x}})}a.deleteShader(B),a.deleteShader(N),W=new lu(a,w),P=N1(a,w)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(w,T1)),A},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=N,this}let j1=0;class $1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new Y1(e),t.set(e,s)),s}}class Y1{constructor(e){this.id=j1++,this.code=e,this.usedTimes=0}}function q1(i,e,t,s,a,l,c){const f=new zv,d=new $1,p=new Set,m=[],v=a.logarithmicDepthBuffer,y=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return p.add(P),P===0?"uv":`uv${P}`}function _(P,A,H,oe,Q){const le=oe.fog,me=Q.geometry,ne=P.isMeshStandardMaterial?oe.environment:null,ve=(P.isMeshStandardMaterial?t:e).get(P.envMap||ne),V=ve&&ve.mapping===_u?ve.image.height:null,ue=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const ae=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,I=ae!==void 0?ae.length:0;let re=0;me.morphAttributes.position!==void 0&&(re=1),me.morphAttributes.normal!==void 0&&(re=2),me.morphAttributes.color!==void 0&&(re=3);let Oe,ee,fe,Re;if(ue){const yt=Si[ue];Oe=yt.vertexShader,ee=yt.fragmentShader}else Oe=P.vertexShader,ee=P.fragmentShader,d.update(P),fe=d.getVertexShaderID(P),Re=d.getFragmentShaderID(P);const Ee=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Ke=Q.isInstancedMesh===!0,Ve=Q.isBatchedMesh===!0,Mt=!!P.map,Rt=!!P.matcap,ct=!!ve,k=!!P.aoMap,Wt=!!P.lightMap,pt=!!P.bumpMap,xt=!!P.normalMap,Ge=!!P.displacementMap,ft=!!P.emissiveMap,qe=!!P.metalnessMap,tt=!!P.roughnessMap,It=P.anisotropy>0,D=P.clearcoat>0,T=P.dispersion>0,J=P.iridescence>0,de=P.sheen>0,ge=P.transmission>0,ce=It&&!!P.anisotropyMap,je=D&&!!P.clearcoatMap,be=D&&!!P.clearcoatNormalMap,ke=D&&!!P.clearcoatRoughnessMap,$e=J&&!!P.iridescenceMap,_e=J&&!!P.iridescenceThicknessMap,Ne=de&&!!P.sheenColorMap,nt=de&&!!P.sheenRoughnessMap,Je=!!P.specularMap,Le=!!P.specularColorMap,st=!!P.specularIntensityMap,O=ge&&!!P.transmissionMap,Te=ge&&!!P.thicknessMap,pe=!!P.gradientMap,Pe=!!P.alphaMap,ye=P.alphaTest>0,he=!!P.alphaHash,Ie=!!P.extensions;let et=Yi;P.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(et=i.toneMapping);const Pt={shaderID:ue,shaderType:P.type,shaderName:P.name,vertexShader:Oe,fragmentShader:ee,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:Re,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ve,batchingColor:Ve&&Q._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&Q.instanceColor!==null,instancingMorph:Ke&&Q.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Ee===null?i.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:oa,alphaToCoverage:!!P.alphaToCoverage,map:Mt,matcap:Rt,envMap:ct,envMapMode:ct&&ve.mapping,envMapCubeUVHeight:V,aoMap:k,lightMap:Wt,bumpMap:pt,normalMap:xt,displacementMap:y&&Ge,emissiveMap:ft,normalMapObjectSpace:xt&&P.normalMapType===ES,normalMapTangentSpace:xt&&P.normalMapType===SS,metalnessMap:qe,roughnessMap:tt,anisotropy:It,anisotropyMap:ce,clearcoat:D,clearcoatMap:je,clearcoatNormalMap:be,clearcoatRoughnessMap:ke,dispersion:T,iridescence:J,iridescenceMap:$e,iridescenceThicknessMap:_e,sheen:de,sheenColorMap:Ne,sheenRoughnessMap:nt,specularMap:Je,specularColorMap:Le,specularIntensityMap:st,transmission:ge,transmissionMap:O,thicknessMap:Te,gradientMap:pe,opaque:P.transparent===!1&&P.blending===ea&&P.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ye,alphaHash:he,combine:P.combine,mapUv:Mt&&w(P.map.channel),aoMapUv:k&&w(P.aoMap.channel),lightMapUv:Wt&&w(P.lightMap.channel),bumpMapUv:pt&&w(P.bumpMap.channel),normalMapUv:xt&&w(P.normalMap.channel),displacementMapUv:Ge&&w(P.displacementMap.channel),emissiveMapUv:ft&&w(P.emissiveMap.channel),metalnessMapUv:qe&&w(P.metalnessMap.channel),roughnessMapUv:tt&&w(P.roughnessMap.channel),anisotropyMapUv:ce&&w(P.anisotropyMap.channel),clearcoatMapUv:je&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:be&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:nt&&w(P.sheenRoughnessMap.channel),specularMapUv:Je&&w(P.specularMap.channel),specularColorMapUv:Le&&w(P.specularColorMap.channel),specularIntensityMapUv:st&&w(P.specularIntensityMap.channel),transmissionMapUv:O&&w(P.transmissionMap.channel),thicknessMapUv:Te&&w(P.thicknessMap.channel),alphaMapUv:Pe&&w(P.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(xt||It),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!me.attributes.uv&&(Mt||Pe),fog:!!le,useFog:P.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,decodeVideoTexture:Mt&&P.map.isVideoTexture===!0&&Tt.getTransfer(P.map.colorSpace)===Dt,decodeVideoTextureEmissive:ft&&P.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(P.emissiveMap.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ei,flipSided:P.side===On,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ie&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&P.extensions.multiDraw===!0||Ve)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function x(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const H in P.defines)A.push(H),A.push(P.defines[H]);return P.isRawShaderMaterial===!1&&(L(A,P),b(A,P),A.push(i.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function L(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function b(P,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),A.gradientMap&&f.enable(22),P.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),P.push(f.mask)}function R(P){const A=E[P.type];let H;if(A){const oe=Si[A];H=gE.clone(oe.uniforms)}else H=P.uniforms;return H}function B(P,A){let H;for(let oe=0,Q=m.length;oe<Q;oe++){const le=m[oe];if(le.cacheKey===A){H=le,++H.usedTimes;break}}return H===void 0&&(H=new X1(i,A,P,l),m.push(H)),H}function N(P){if(--P.usedTimes===0){const A=m.indexOf(P);m[A]=m[m.length-1],m.pop(),P.destroy()}}function F(P){d.remove(P)}function W(){d.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:R,acquireProgram:B,releaseProgram:N,releaseShaderCache:F,programs:m,dispose:W}}function K1(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let f=i.get(c);return f===void 0&&(f={},i.set(c,f)),f}function s(c){i.delete(c)}function a(c,f,d){i.get(c)[f]=d}function l(){i=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function Z1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ig(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fg(){const i=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(v,y,S,E,w,_){let x=i[e];return x===void 0?(x={id:v.id,object:v,geometry:y,material:S,groupOrder:E,renderOrder:v.renderOrder,z:w,group:_},i[e]=x):(x.id=v.id,x.object=v,x.geometry=y,x.material=S,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=w,x.group=_),e++,x}function f(v,y,S,E,w,_){const x=c(v,y,S,E,w,_);S.transmission>0?s.push(x):S.transparent===!0?a.push(x):t.push(x)}function d(v,y,S,E,w,_){const x=c(v,y,S,E,w,_);S.transmission>0?s.unshift(x):S.transparent===!0?a.unshift(x):t.unshift(x)}function p(v,y){t.length>1&&t.sort(v||Z1),s.length>1&&s.sort(y||Ig),a.length>1&&a.sort(y||Ig)}function m(){for(let v=e,y=i.length;v<y;v++){const S=i[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:d,finish:m,sort:p}}function J1(){let i=new WeakMap;function e(s,a){const l=i.get(s);let c;return l===void 0?(c=new Fg,i.set(s,[c])):a>=l.length?(c=new Fg,l.push(c)):c=l[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Q1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new bt};break;case"SpotLight":t={position:new te,direction:new te,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new te,halfWidth:new te,halfHeight:new te};break}return i[e.id]=t,t}}}function eR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tR=0;function nR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iR(i){const e=new Q1,t=eR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new te);const a=new te,l=new $t,c=new $t;function f(p){let m=0,v=0,y=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let S=0,E=0,w=0,_=0,x=0,L=0,b=0,R=0,B=0,N=0,F=0;p.sort(nR);for(let P=0,A=p.length;P<A;P++){const H=p[P],oe=H.color,Q=H.intensity,le=H.distance,me=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=oe.r*Q,v+=oe.g*Q,y+=oe.b*Q;else if(H.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(H.sh.coefficients[ne],Q);F++}else if(H.isDirectionalLight){const ne=e.get(H);if(ne.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ve=H.shadow,V=t.get(H);V.shadowIntensity=ve.intensity,V.shadowBias=ve.bias,V.shadowNormalBias=ve.normalBias,V.shadowRadius=ve.radius,V.shadowMapSize=ve.mapSize,s.directionalShadow[S]=V,s.directionalShadowMap[S]=me,s.directionalShadowMatrix[S]=H.shadow.matrix,L++}s.directional[S]=ne,S++}else if(H.isSpotLight){const ne=e.get(H);ne.position.setFromMatrixPosition(H.matrixWorld),ne.color.copy(oe).multiplyScalar(Q),ne.distance=le,ne.coneCos=Math.cos(H.angle),ne.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ne.decay=H.decay,s.spot[w]=ne;const ve=H.shadow;if(H.map&&(s.spotLightMap[B]=H.map,B++,ve.updateMatrices(H),H.castShadow&&N++),s.spotLightMatrix[w]=ve.matrix,H.castShadow){const V=t.get(H);V.shadowIntensity=ve.intensity,V.shadowBias=ve.bias,V.shadowNormalBias=ve.normalBias,V.shadowRadius=ve.radius,V.shadowMapSize=ve.mapSize,s.spotShadow[w]=V,s.spotShadowMap[w]=me,R++}w++}else if(H.isRectAreaLight){const ne=e.get(H);ne.color.copy(oe).multiplyScalar(Q),ne.halfWidth.set(H.width*.5,0,0),ne.halfHeight.set(0,H.height*.5,0),s.rectArea[_]=ne,_++}else if(H.isPointLight){const ne=e.get(H);if(ne.color.copy(H.color).multiplyScalar(H.intensity),ne.distance=H.distance,ne.decay=H.decay,H.castShadow){const ve=H.shadow,V=t.get(H);V.shadowIntensity=ve.intensity,V.shadowBias=ve.bias,V.shadowNormalBias=ve.normalBias,V.shadowRadius=ve.radius,V.shadowMapSize=ve.mapSize,V.shadowCameraNear=ve.camera.near,V.shadowCameraFar=ve.camera.far,s.pointShadow[E]=V,s.pointShadowMap[E]=me,s.pointShadowMatrix[E]=H.shadow.matrix,b++}s.point[E]=ne,E++}else if(H.isHemisphereLight){const ne=e.get(H);ne.skyColor.copy(H.color).multiplyScalar(Q),ne.groundColor.copy(H.groundColor).multiplyScalar(Q),s.hemi[x]=ne,x++}}_>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=v,s.ambient[2]=y;const W=s.hash;(W.directionalLength!==S||W.pointLength!==E||W.spotLength!==w||W.rectAreaLength!==_||W.hemiLength!==x||W.numDirectionalShadows!==L||W.numPointShadows!==b||W.numSpotShadows!==R||W.numSpotMaps!==B||W.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=_,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=R+B-N,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=F,W.directionalLength=S,W.pointLength=E,W.spotLength=w,W.rectAreaLength=_,W.hemiLength=x,W.numDirectionalShadows=L,W.numPointShadows=b,W.numSpotShadows=R,W.numSpotMaps=B,W.numLightProbes=F,s.version=tR++)}function d(p,m){let v=0,y=0,S=0,E=0,w=0;const _=m.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const b=p[x];if(b.isDirectionalLight){const R=s.directional[v];R.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(_),v++}else if(b.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(_),S++}else if(b.isRectAreaLight){const R=s.rectArea[E];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(_),c.identity(),l.copy(b.matrixWorld),l.premultiply(_),c.extractRotation(l),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),E++}else if(b.isPointLight){const R=s.point[y];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(_),y++}else if(b.isHemisphereLight){const R=s.hemi[w];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(_),w++}}}return{setup:f,setupView:d,state:s}}function Og(i){const e=new iR(i),t=[],s=[];function a(m){p.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function rR(i){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Og(i),e.set(a,[f])):l>=c.length?(f=new Og(i),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const sR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aR=`uniform sampler2D shadow_pass;
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
}`;function oR(i,e,t){let s=new Jd;const a=new At,l=new At,c=new jt,f=new RE({depthPacking:yS}),d=new AE,p={},m=t.maxTextureSize,v={[Dr]:On,[On]:Dr,[Ei]:Ei},y=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:sR,fragmentShader:aR}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new fs;E.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new wi(E,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rv;let x=this.type;this.render=function(N,F,W){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||N.length===0)return;const P=i.getRenderTarget(),A=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),oe=i.state;oe.setBlending(Pr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const Q=x!==Wi&&this.type===Wi,le=x===Wi&&this.type!==Wi;for(let me=0,ne=N.length;me<ne;me++){const ve=N[me],V=ve.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ve,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const ue=V.getFrameExtents();if(a.multiply(ue),l.copy(V.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/ue.x),a.x=l.x*ue.x,V.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/ue.y),a.y=l.y*ue.y,V.mapSize.y=l.y)),V.map===null||Q===!0||le===!0){const I=this.type!==Wi?{minFilter:dn,magFilter:dn}:{};V.map!==null&&V.map.dispose(),V.map=new us(a.x,a.y,I),V.map.texture.name=ve.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ae=V.getViewportCount();for(let I=0;I<ae;I++){const re=V.getViewport(I);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),oe.viewport(c),V.updateMatrices(ve,I),s=V.getFrustum(),R(F,W,V.camera,ve,this.type)}V.isPointLightShadow!==!0&&this.type===Wi&&L(V,W),V.needsUpdate=!1}x=this.type,_.needsUpdate=!1,i.setRenderTarget(P,A,H)};function L(N,F){const W=e.update(w);y.defines.VSM_SAMPLES!==N.blurSamples&&(y.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new us(a.x,a.y)),y.uniforms.shadow_pass.value=N.map.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(F,null,W,y,w,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(F,null,W,S,w,null)}function b(N,F,W,P){let A=null;const H=W.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)A=H;else if(A=W.isPointLight===!0?d:f,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const oe=A.uuid,Q=F.uuid;let le=p[oe];le===void 0&&(le={},p[oe]=le);let me=le[Q];me===void 0&&(me=A.clone(),le[Q]=me,F.addEventListener("dispose",B)),A=me}if(A.visible=F.visible,A.wireframe=F.wireframe,P===Wi?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:v[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,W.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const oe=i.properties.get(A);oe.light=W}return A}function R(N,F,W,P,A){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&A===Wi)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,N.matrixWorld);const Q=e.update(N),le=N.material;if(Array.isArray(le)){const me=Q.groups;for(let ne=0,ve=me.length;ne<ve;ne++){const V=me[ne],ue=le[V.materialIndex];if(ue&&ue.visible){const ae=b(N,ue,P,A);N.onBeforeShadow(i,N,F,W,Q,ae,V),i.renderBufferDirect(W,null,Q,ae,N,V),N.onAfterShadow(i,N,F,W,Q,ae,V)}}}else if(le.visible){const me=b(N,le,P,A);N.onBeforeShadow(i,N,F,W,Q,me,null),i.renderBufferDirect(W,null,Q,me,N,null),N.onAfterShadow(i,N,F,W,Q,me,null)}}const oe=N.children;for(let Q=0,le=oe.length;Q<le;Q++)R(oe[Q],F,W,P,A)}function B(N){N.target.removeEventListener("dispose",B);for(const W in p){const P=p[W],A=N.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const lR={[Yf]:qf,[Kf]:Qf,[Zf]:ed,[ra]:Jf,[qf]:Yf,[Qf]:Kf,[ed]:Zf,[Jf]:ra};function uR(i,e){function t(){let O=!1;const Te=new jt;let pe=null;const Pe=new jt(0,0,0,0);return{setMask:function(ye){pe!==ye&&!O&&(i.colorMask(ye,ye,ye,ye),pe=ye)},setLocked:function(ye){O=ye},setClear:function(ye,he,Ie,et,Pt){Pt===!0&&(ye*=et,he*=et,Ie*=et),Te.set(ye,he,Ie,et),Pe.equals(Te)===!1&&(i.clearColor(ye,he,Ie,et),Pe.copy(Te))},reset:function(){O=!1,pe=null,Pe.set(-1,0,0,0)}}}function s(){let O=!1,Te=!1,pe=null,Pe=null,ye=null;return{setReversed:function(he){if(Te!==he){const Ie=e.get("EXT_clip_control");he?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Te=he;const et=ye;ye=null,this.setClear(et)}},getReversed:function(){return Te},setTest:function(he){he?Ee(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(he){pe!==he&&!O&&(i.depthMask(he),pe=he)},setFunc:function(he){if(Te&&(he=lR[he]),Pe!==he){switch(he){case Yf:i.depthFunc(i.NEVER);break;case qf:i.depthFunc(i.ALWAYS);break;case Kf:i.depthFunc(i.LESS);break;case ra:i.depthFunc(i.LEQUAL);break;case Zf:i.depthFunc(i.EQUAL);break;case Jf:i.depthFunc(i.GEQUAL);break;case Qf:i.depthFunc(i.GREATER);break;case ed:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=he}},setLocked:function(he){O=he},setClear:function(he){ye!==he&&(Te&&(he=1-he),i.clearDepth(he),ye=he)},reset:function(){O=!1,pe=null,Pe=null,ye=null,Te=!1}}}function a(){let O=!1,Te=null,pe=null,Pe=null,ye=null,he=null,Ie=null,et=null,Pt=null;return{setTest:function(yt){O||(yt?Ee(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(yt){Te!==yt&&!O&&(i.stencilMask(yt),Te=yt)},setFunc:function(yt,Pn,Sn){(pe!==yt||Pe!==Pn||ye!==Sn)&&(i.stencilFunc(yt,Pn,Sn),pe=yt,Pe=Pn,ye=Sn)},setOp:function(yt,Pn,Sn){(he!==yt||Ie!==Pn||et!==Sn)&&(i.stencilOp(yt,Pn,Sn),he=yt,Ie=Pn,et=Sn)},setLocked:function(yt){O=yt},setClear:function(yt){Pt!==yt&&(i.clearStencil(yt),Pt=yt)},reset:function(){O=!1,Te=null,pe=null,Pe=null,ye=null,he=null,Ie=null,et=null,Pt=null}}}const l=new t,c=new s,f=new a,d=new WeakMap,p=new WeakMap;let m={},v={},y=new WeakMap,S=[],E=null,w=!1,_=null,x=null,L=null,b=null,R=null,B=null,N=null,F=new bt(0,0,0),W=0,P=!1,A=null,H=null,oe=null,Q=null,le=null;const me=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ve=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(V)[1]),ne=ve>=1):V.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ne=ve>=2);let ue=null,ae={};const I=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),Oe=new jt().fromArray(I),ee=new jt().fromArray(re);function fe(O,Te,pe,Pe){const ye=new Uint8Array(4),he=i.createTexture();i.bindTexture(O,he),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<pe;Ie++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(Te+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return he}const Re={};Re[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Ee(i.DEPTH_TEST),c.setFunc(ra),pt(!1),xt(zm),Ee(i.CULL_FACE),k(Pr);function Ee(O){m[O]!==!0&&(i.enable(O),m[O]=!0)}function Ae(O){m[O]!==!1&&(i.disable(O),m[O]=!1)}function Ke(O,Te){return v[O]!==Te?(i.bindFramebuffer(O,Te),v[O]=Te,O===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Te),O===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ve(O,Te){let pe=S,Pe=!1;if(O){pe=y.get(Te),pe===void 0&&(pe=[],y.set(Te,pe));const ye=O.textures;if(pe.length!==ye.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Ie=ye.length;he<Ie;he++)pe[he]=i.COLOR_ATTACHMENT0+he;pe.length=ye.length,Pe=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(pe)}function Mt(O){return E!==O?(i.useProgram(O),E=O,!0):!1}const Rt={[ns]:i.FUNC_ADD,[jy]:i.FUNC_SUBTRACT,[$y]:i.FUNC_REVERSE_SUBTRACT};Rt[Yy]=i.MIN,Rt[qy]=i.MAX;const ct={[Ky]:i.ZERO,[Zy]:i.ONE,[Jy]:i.SRC_COLOR,[jf]:i.SRC_ALPHA,[rS]:i.SRC_ALPHA_SATURATE,[nS]:i.DST_COLOR,[eS]:i.DST_ALPHA,[Qy]:i.ONE_MINUS_SRC_COLOR,[$f]:i.ONE_MINUS_SRC_ALPHA,[iS]:i.ONE_MINUS_DST_COLOR,[tS]:i.ONE_MINUS_DST_ALPHA,[sS]:i.CONSTANT_COLOR,[aS]:i.ONE_MINUS_CONSTANT_COLOR,[oS]:i.CONSTANT_ALPHA,[lS]:i.ONE_MINUS_CONSTANT_ALPHA};function k(O,Te,pe,Pe,ye,he,Ie,et,Pt,yt){if(O===Pr){w===!0&&(Ae(i.BLEND),w=!1);return}if(w===!1&&(Ee(i.BLEND),w=!0),O!==Xy){if(O!==_||yt!==P){if((x!==ns||R!==ns)&&(i.blendEquation(i.FUNC_ADD),x=ns,R=ns),yt)switch(O){case ea:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hm:i.blendFunc(i.ONE,i.ONE);break;case Vm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gm:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ea:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hm:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}L=null,b=null,B=null,N=null,F.set(0,0,0),W=0,_=O,P=yt}return}ye=ye||Te,he=he||pe,Ie=Ie||Pe,(Te!==x||ye!==R)&&(i.blendEquationSeparate(Rt[Te],Rt[ye]),x=Te,R=ye),(pe!==L||Pe!==b||he!==B||Ie!==N)&&(i.blendFuncSeparate(ct[pe],ct[Pe],ct[he],ct[Ie]),L=pe,b=Pe,B=he,N=Ie),(et.equals(F)===!1||Pt!==W)&&(i.blendColor(et.r,et.g,et.b,Pt),F.copy(et),W=Pt),_=O,P=!1}function Wt(O,Te){O.side===Ei?Ae(i.CULL_FACE):Ee(i.CULL_FACE);let pe=O.side===On;Te&&(pe=!pe),pt(pe),O.blending===ea&&O.transparent===!1?k(Pr):k(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),l.setMask(O.colorWrite);const Pe=O.stencilWrite;f.setTest(Pe),Pe&&(f.setMask(O.stencilWriteMask),f.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),f.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ft(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ee(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(O){A!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),A=O)}function xt(O){O!==Vy?(Ee(i.CULL_FACE),O!==H&&(O===zm?i.cullFace(i.BACK):O===Gy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),H=O}function Ge(O){O!==oe&&(ne&&i.lineWidth(O),oe=O)}function ft(O,Te,pe){O?(Ee(i.POLYGON_OFFSET_FILL),(Q!==Te||le!==pe)&&(i.polygonOffset(Te,pe),Q=Te,le=pe)):Ae(i.POLYGON_OFFSET_FILL)}function qe(O){O?Ee(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function tt(O){O===void 0&&(O=i.TEXTURE0+me-1),ue!==O&&(i.activeTexture(O),ue=O)}function It(O,Te,pe){pe===void 0&&(ue===null?pe=i.TEXTURE0+me-1:pe=ue);let Pe=ae[pe];Pe===void 0&&(Pe={type:void 0,texture:void 0},ae[pe]=Pe),(Pe.type!==O||Pe.texture!==Te)&&(ue!==pe&&(i.activeTexture(pe),ue=pe),i.bindTexture(O,Te||Re[O]),Pe.type=O,Pe.texture=Te)}function D(){const O=ae[ue];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(O){Oe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Oe.copy(O))}function nt(O){ee.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function Je(O,Te){let pe=p.get(Te);pe===void 0&&(pe=new WeakMap,p.set(Te,pe));let Pe=pe.get(O);Pe===void 0&&(Pe=i.getUniformBlockIndex(Te,O.name),pe.set(O,Pe))}function Le(O,Te){const Pe=p.get(Te).get(O);d.get(Te)!==Pe&&(i.uniformBlockBinding(Te,Pe,O.__bindingPointIndex),d.set(Te,Pe))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},ue=null,ae={},v={},y=new WeakMap,S=[],E=null,w=!1,_=null,x=null,L=null,b=null,R=null,B=null,N=null,F=new bt(0,0,0),W=0,P=!1,A=null,H=null,oe=null,Q=null,le=null,Oe.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Ee,disable:Ae,bindFramebuffer:Ke,drawBuffers:Ve,useProgram:Mt,setBlending:k,setMaterial:Wt,setFlipSided:pt,setCullFace:xt,setLineWidth:Ge,setPolygonOffset:ft,setScissorTest:qe,activeTexture:tt,bindTexture:It,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:J,texImage2D:$e,texImage3D:_e,updateUBOMapping:Je,uniformBlockBinding:Le,texStorage2D:be,texStorage3D:ke,texSubImage2D:de,texSubImage3D:ge,compressedTexSubImage2D:ce,compressedTexSubImage3D:je,scissor:Ne,viewport:nt,reset:st}}function cR(i,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new At,m=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return S?new OffscreenCanvas(D,T):ho("canvas")}function w(D,T,J){let de=1;const ge=It(D);if((ge.width>J||ge.height>J)&&(de=J/Math.max(ge.width,ge.height)),de<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(de*ge.width),je=Math.floor(de*ge.height);v===void 0&&(v=E(ce,je));const be=T?E(ce,je):v;return be.width=ce,be.height=je,be.getContext("2d").drawImage(D,0,0,ce,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+je+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function _(D){return D.generateMipmaps}function x(D){i.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(D,T,J,de,ge=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=T;if(T===i.RED&&(J===i.FLOAT&&(ce=i.R32F),J===i.HALF_FLOAT&&(ce=i.R16F),J===i.UNSIGNED_BYTE&&(ce=i.R8)),T===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ce=i.R8UI),J===i.UNSIGNED_SHORT&&(ce=i.R16UI),J===i.UNSIGNED_INT&&(ce=i.R32UI),J===i.BYTE&&(ce=i.R8I),J===i.SHORT&&(ce=i.R16I),J===i.INT&&(ce=i.R32I)),T===i.RG&&(J===i.FLOAT&&(ce=i.RG32F),J===i.HALF_FLOAT&&(ce=i.RG16F),J===i.UNSIGNED_BYTE&&(ce=i.RG8)),T===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ce=i.RG8UI),J===i.UNSIGNED_SHORT&&(ce=i.RG16UI),J===i.UNSIGNED_INT&&(ce=i.RG32UI),J===i.BYTE&&(ce=i.RG8I),J===i.SHORT&&(ce=i.RG16I),J===i.INT&&(ce=i.RG32I)),T===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),J===i.UNSIGNED_INT&&(ce=i.RGB32UI),J===i.BYTE&&(ce=i.RGB8I),J===i.SHORT&&(ce=i.RGB16I),J===i.INT&&(ce=i.RGB32I)),T===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),J===i.UNSIGNED_INT&&(ce=i.RGBA32UI),J===i.BYTE&&(ce=i.RGBA8I),J===i.SHORT&&(ce=i.RGBA16I),J===i.INT&&(ce=i.RGBA32I)),T===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),T===i.RGBA){const je=ge?fu:Tt.getTransfer(de);J===i.FLOAT&&(ce=i.RGBA32F),J===i.HALF_FLOAT&&(ce=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ce=je===Dt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function R(D,T){let J;return D?T===null||T===ls||T===lo?J=i.DEPTH24_STENCIL8:T===ji?J=i.DEPTH32F_STENCIL8:T===oo&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ls||T===lo?J=i.DEPTH_COMPONENT24:T===ji?J=i.DEPTH_COMPONENT32F:T===oo&&(J=i.DEPTH_COMPONENT16),J}function B(D,T){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==dn&&D.minFilter!==Mi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function N(D){const T=D.target;T.removeEventListener("dispose",N),W(T),T.isVideoTexture&&m.delete(T)}function F(D){const T=D.target;T.removeEventListener("dispose",F),A(T)}function W(D){const T=s.get(D);if(T.__webglInit===void 0)return;const J=D.source,de=y.get(J);if(de){const ge=de[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(D),Object.keys(de).length===0&&y.delete(J)}s.remove(D)}function P(D){const T=s.get(D);i.deleteTexture(T.__webglTexture);const J=D.source,de=y.get(J);delete de[T.__cacheKey],c.memory.textures--}function A(D){const T=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let ge=0;ge<T.__webglFramebuffer[de].length;ge++)i.deleteFramebuffer(T.__webglFramebuffer[de][ge]);else i.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)i.deleteFramebuffer(T.__webglFramebuffer[de]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=D.textures;for(let de=0,ge=J.length;de<ge;de++){const ce=s.get(J[de]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),c.memory.textures--),s.remove(J[de])}s.remove(D)}let H=0;function oe(){H=0}function Q(){const D=H;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),H+=1,D}function le(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function me(D,T){const J=s.get(D);if(D.isVideoTexture&&qe(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){const de=D.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(J,D,T);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+T)}function ne(D,T){const J=s.get(D);if(D.version>0&&J.__version!==D.version){Re(J,D,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+T)}function ve(D,T){const J=s.get(D);if(D.version>0&&J.__version!==D.version){Re(J,D,T);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+T)}function V(D,T){const J=s.get(D);if(D.version>0&&J.__version!==D.version){Ee(J,D,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+T)}const ue={[ao]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[id]:i.MIRRORED_REPEAT},ae={[dn]:i.NEAREST,[_S]:i.NEAREST_MIPMAP_NEAREST,[Ll]:i.NEAREST_MIPMAP_LINEAR,[Mi]:i.LINEAR,[uf]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},I={[MS]:i.NEVER,[bS]:i.ALWAYS,[wS]:i.LESS,[Ov]:i.LEQUAL,[TS]:i.EQUAL,[CS]:i.GEQUAL,[RS]:i.GREATER,[AS]:i.NOTEQUAL};function re(D,T){if(T.type===ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Mi||T.magFilter===uf||T.magFilter===Ll||T.magFilter===rs||T.minFilter===Mi||T.minFilter===uf||T.minFilter===Ll||T.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ue[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ue[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ue[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ae[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ae[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===dn||T.minFilter!==Ll&&T.minFilter!==rs||T.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Oe(D,T){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",N));const de=T.source;let ge=y.get(de);ge===void 0&&(ge={},y.set(de,ge));const ce=le(T);if(ce!==D.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,J=!0),ge[ce].usedTimes++;const je=ge[D.__cacheKey];je!==void 0&&(ge[D.__cacheKey].usedTimes--,je.usedTimes===0&&P(T)),D.__cacheKey=ce,D.__webglTexture=ge[ce].texture}return J}function ee(D,T,J){return Math.floor(Math.floor(D/J)/T)}function fe(D,T,J,de){const ce=D.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,J,de,T.data);else{ce.sort((_e,Ne)=>_e.start-Ne.start);let je=0;for(let _e=1;_e<ce.length;_e++){const Ne=ce[je],nt=ce[_e],Je=Ne.start+Ne.count,Le=ee(nt.start,T.width,4),st=ee(Ne.start,T.width,4);nt.start<=Je+1&&Le===st&&ee(nt.start+nt.count-1,T.width,4)===Le?Ne.count=Math.max(Ne.count,nt.start+nt.count-Ne.start):(++je,ce[je]=nt)}ce.length=je+1;const be=i.getParameter(i.UNPACK_ROW_LENGTH),ke=i.getParameter(i.UNPACK_SKIP_PIXELS),$e=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let _e=0,Ne=ce.length;_e<Ne;_e++){const nt=ce[_e],Je=Math.floor(nt.start/4),Le=Math.ceil(nt.count/4),st=Je%T.width,O=Math.floor(Je/T.width),Te=Le,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,st),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,st,O,Te,pe,J,de,T.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,be),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,$e)}}function Re(D,T,J){let de=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=i.TEXTURE_3D);const ge=Oe(D,T),ce=T.source;t.bindTexture(de,D.__webglTexture,i.TEXTURE0+J);const je=s.get(ce);if(ce.version!==je.__version||ge===!0){t.activeTexture(i.TEXTURE0+J);const be=Tt.getPrimaries(Tt.workingColorSpace),ke=T.colorSpace===Cr?null:Tt.getPrimaries(T.colorSpace),$e=T.colorSpace===Cr||be===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let _e=w(T.image,!1,a.maxTextureSize);_e=tt(T,_e);const Ne=l.convert(T.format,T.colorSpace),nt=l.convert(T.type);let Je=b(T.internalFormat,Ne,nt,T.colorSpace,T.isVideoTexture);re(de,T);let Le;const st=T.mipmaps,O=T.isVideoTexture!==!0,Te=je.__version===void 0||ge===!0,pe=ce.dataReady,Pe=B(T,_e);if(T.isDepthTexture)Je=R(T.format===co,T.type),Te&&(O?t.texStorage2D(i.TEXTURE_2D,1,Je,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Je,_e.width,_e.height,0,Ne,nt,null));else if(T.isDataTexture)if(st.length>0){O&&Te&&t.texStorage2D(i.TEXTURE_2D,Pe,Je,st[0].width,st[0].height);for(let ye=0,he=st.length;ye<he;ye++)Le=st[ye],O?pe&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ne,nt,Le.data):t.texImage2D(i.TEXTURE_2D,ye,Je,Le.width,Le.height,0,Ne,nt,Le.data);T.generateMipmaps=!1}else O?(Te&&t.texStorage2D(i.TEXTURE_2D,Pe,Je,_e.width,_e.height),pe&&fe(T,_e,Ne,nt)):t.texImage2D(i.TEXTURE_2D,0,Je,_e.width,_e.height,0,Ne,nt,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){O&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Je,st[0].width,st[0].height,_e.depth);for(let ye=0,he=st.length;ye<he;ye++)if(Le=st[ye],T.format!==di)if(Ne!==null)if(O){if(pe)if(T.layerUpdates.size>0){const Ie=hg(Le.width,Le.height,T.format,T.type);for(const et of T.layerUpdates){const Pt=Le.data.subarray(et*Ie/Le.data.BYTES_PER_ELEMENT,(et+1)*Ie/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,et,Le.width,Le.height,1,Ne,Pt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,_e.depth,Ne,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,Je,Le.width,Le.height,_e.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,_e.depth,Ne,nt,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,Je,Le.width,Le.height,_e.depth,0,Ne,nt,Le.data)}else{O&&Te&&t.texStorage2D(i.TEXTURE_2D,Pe,Je,st[0].width,st[0].height);for(let ye=0,he=st.length;ye<he;ye++)Le=st[ye],T.format!==di?Ne!==null?O?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ne,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,Je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?pe&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ne,nt,Le.data):t.texImage2D(i.TEXTURE_2D,ye,Je,Le.width,Le.height,0,Ne,nt,Le.data)}else if(T.isDataArrayTexture)if(O){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Je,_e.width,_e.height,_e.depth),pe)if(T.layerUpdates.size>0){const ye=hg(_e.width,_e.height,T.format,T.type);for(const he of T.layerUpdates){const Ie=_e.data.subarray(he*ye/_e.data.BYTES_PER_ELEMENT,(he+1)*ye/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,Ne,nt,Ie)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ne,nt,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Je,_e.width,_e.height,_e.depth,0,Ne,nt,_e.data);else if(T.isData3DTexture)O?(Te&&t.texStorage3D(i.TEXTURE_3D,Pe,Je,_e.width,_e.height,_e.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ne,nt,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Je,_e.width,_e.height,_e.depth,0,Ne,nt,_e.data);else if(T.isFramebufferTexture){if(Te)if(O)t.texStorage2D(i.TEXTURE_2D,Pe,Je,_e.width,_e.height);else{let ye=_e.width,he=_e.height;for(let Ie=0;Ie<Pe;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Je,ye,he,0,Ne,nt,null),ye>>=1,he>>=1}}else if(st.length>0){if(O&&Te){const ye=It(st[0]);t.texStorage2D(i.TEXTURE_2D,Pe,Je,ye.width,ye.height)}for(let ye=0,he=st.length;ye<he;ye++)Le=st[ye],O?pe&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Ne,nt,Le):t.texImage2D(i.TEXTURE_2D,ye,Je,Ne,nt,Le);T.generateMipmaps=!1}else if(O){if(Te){const ye=It(_e);t.texStorage2D(i.TEXTURE_2D,Pe,Je,ye.width,ye.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,nt,_e)}else t.texImage2D(i.TEXTURE_2D,0,Je,Ne,nt,_e);_(T)&&x(de),je.__version=ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ee(D,T,J){if(T.image.length!==6)return;const de=Oe(D,T),ge=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+J);const ce=s.get(ge);if(ge.version!==ce.__version||de===!0){t.activeTexture(i.TEXTURE0+J);const je=Tt.getPrimaries(Tt.workingColorSpace),be=T.colorSpace===Cr?null:Tt.getPrimaries(T.colorSpace),ke=T.colorSpace===Cr||je===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const $e=T.isCompressedTexture||T.image[0].isCompressedTexture,_e=T.image[0]&&T.image[0].isDataTexture,Ne=[];for(let he=0;he<6;he++)!$e&&!_e?Ne[he]=w(T.image[he],!0,a.maxCubemapSize):Ne[he]=_e?T.image[he].image:T.image[he],Ne[he]=tt(T,Ne[he]);const nt=Ne[0],Je=l.convert(T.format,T.colorSpace),Le=l.convert(T.type),st=b(T.internalFormat,Je,Le,T.colorSpace),O=T.isVideoTexture!==!0,Te=ce.__version===void 0||de===!0,pe=ge.dataReady;let Pe=B(T,nt);re(i.TEXTURE_CUBE_MAP,T);let ye;if($e){O&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,st,nt.width,nt.height);for(let he=0;he<6;he++){ye=Ne[he].mipmaps;for(let Ie=0;Ie<ye.length;Ie++){const et=ye[Ie];T.format!==di?Je!==null?O?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,0,0,et.width,et.height,Je,et.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,st,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,0,0,et.width,et.height,Je,Le,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,st,et.width,et.height,0,Je,Le,et.data)}}}else{if(ye=T.mipmaps,O&&Te){ye.length>0&&Pe++;const he=It(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,st,he.width,he.height)}for(let he=0;he<6;he++)if(_e){O?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne[he].width,Ne[he].height,Je,Le,Ne[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,Ne[he].width,Ne[he].height,0,Je,Le,Ne[he].data);for(let Ie=0;Ie<ye.length;Ie++){const Pt=ye[Ie].image[he].image;O?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,0,0,Pt.width,Pt.height,Je,Le,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,st,Pt.width,Pt.height,0,Je,Le,Pt.data)}}else{O?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,Le,Ne[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,Je,Le,Ne[he]);for(let Ie=0;Ie<ye.length;Ie++){const et=ye[Ie];O?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,0,0,Je,Le,et.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,st,Je,Le,et.image[he])}}}_(T)&&x(i.TEXTURE_CUBE_MAP),ce.__version=ge.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ae(D,T,J,de,ge,ce){const je=l.convert(J.format,J.colorSpace),be=l.convert(J.type),ke=b(J.internalFormat,je,be,J.colorSpace),$e=s.get(T),_e=s.get(J);if(_e.__renderTarget=T,!$e.__hasExternalTextures){const Ne=Math.max(1,T.width>>ce),nt=Math.max(1,T.height>>ce);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,ce,ke,Ne,nt,T.depth,0,je,be,null):t.texImage2D(ge,ce,ke,Ne,nt,0,je,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ft(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ge,_e.__webglTexture,0,Ge(T)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,ge,_e.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(D,T,J){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const de=T.depthTexture,ge=de&&de.isDepthTexture?de.type:null,ce=R(T.stencilBuffer,ge),je=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=Ge(T);ft(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,ce,T.width,T.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ce,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,je,i.RENDERBUFFER,D)}else{const de=T.textures;for(let ge=0;ge<de.length;ge++){const ce=de[ge],je=l.convert(ce.format,ce.colorSpace),be=l.convert(ce.type),ke=b(ce.internalFormat,je,be,ce.colorSpace),$e=Ge(T);J&&ft(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,ke,T.width,T.height):ft(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,ke,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ke,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=s.get(T.depthTexture);de.__renderTarget=T,(!de.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me(T.depthTexture,0);const ge=de.__webglTexture,ce=Ge(T);if(T.depthTexture.format===uo)ft(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0);else if(T.depthTexture.format===co)ft(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Mt(D){const T=s.get(D),J=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const de=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",ge)};de.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=de}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const de=D.texture.mipmaps;de&&de.length>0?Ve(T.__webglFramebuffer[0],D):Ve(T.__webglFramebuffer,D)}else if(J){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=i.createRenderbuffer(),Ke(T.__webglDepthbuffer[de],D,!1);else{const ge=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,ce)}}else{const de=D.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ke(T.__webglDepthbuffer,D,!1);else{const ge=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(D,T,J){const de=s.get(D);T!==void 0&&Ae(de.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Mt(D)}function ct(D){const T=D.texture,J=s.get(D),de=s.get(T);D.addEventListener("dispose",F);const ge=D.textures,ce=D.isWebGLCubeRenderTarget===!0,je=ge.length>1;if(je||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=T.version,c.memory.textures++),ce){J.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[be]=[];for(let ke=0;ke<T.mipmaps.length;ke++)J.__webglFramebuffer[be][ke]=i.createFramebuffer()}else J.__webglFramebuffer[be]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)J.__webglFramebuffer[be]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(je)for(let be=0,ke=ge.length;be<ke;be++){const $e=s.get(ge[be]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),c.memory.textures++)}if(D.samples>0&&ft(D)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let be=0;be<ge.length;be++){const ke=ge[be];J.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[be]);const $e=l.convert(ke.format,ke.colorSpace),_e=l.convert(ke.type),Ne=b(ke.internalFormat,$e,_e,ke.colorSpace,D.isXRRenderTarget===!0),nt=Ge(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Ne,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,J.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),re(i.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Ae(J.__webglFramebuffer[be][ke],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke);else Ae(J.__webglFramebuffer[be],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);_(T)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let be=0,ke=ge.length;be<ke;be++){const $e=ge[be],_e=s.get($e);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),re(i.TEXTURE_2D,$e),Ae(J.__webglFramebuffer,D,$e,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),_($e)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,de.__webglTexture),re(be,T),T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Ae(J.__webglFramebuffer[ke],D,T,i.COLOR_ATTACHMENT0,be,ke);else Ae(J.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,be,0);_(T)&&x(be),t.unbindTexture()}D.depthBuffer&&Mt(D)}function k(D){const T=D.textures;for(let J=0,de=T.length;J<de;J++){const ge=T[J];if(_(ge)){const ce=L(D),je=s.get(ge).__webglTexture;t.bindTexture(ce,je),x(ce),t.unbindTexture()}}}const Wt=[],pt=[];function xt(D){if(D.samples>0){if(ft(D)===!1){const T=D.textures,J=D.width,de=D.height;let ge=i.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,je=s.get(D),be=T.length>1;if(be)for(let $e=0;$e<T.length;$e++)t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const ke=D.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let $e=0;$e<T.length;$e++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,je.__webglColorRenderbuffer[$e]);const _e=s.get(T[$e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,J,de,0,0,J,de,ge,i.NEAREST),d===!0&&(Wt.length=0,pt.length=0,Wt.push(i.COLOR_ATTACHMENT0+$e),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Wt.push(ce),pt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let $e=0;$e<T.length;$e++){t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.RENDERBUFFER,je.__webglColorRenderbuffer[$e]);const _e=s.get(T[$e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Ge(D){return Math.min(a.maxSamples,D.samples)}function ft(D){const T=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(D){const T=c.render.frame;m.get(D)!==T&&(m.set(D,T),D.update())}function tt(D,T){const J=D.colorSpace,de=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==oa&&J!==Cr&&(Tt.getTransfer(J)===Dt?(de!==di||ge!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function It(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=oe,this.setTexture2D=me,this.setTexture2DArray=ne,this.setTexture3D=ve,this.setTextureCube=V,this.rebindTextures=Rt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ft}function fR(i,e){function t(s,a=Cr){let l;const c=Tt.getTransfer(a);if(s===Ai)return i.UNSIGNED_BYTE;if(s===Gd)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Wd)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Lv)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===bv)return i.BYTE;if(s===Pv)return i.SHORT;if(s===oo)return i.UNSIGNED_SHORT;if(s===Vd)return i.INT;if(s===ls)return i.UNSIGNED_INT;if(s===ji)return i.FLOAT;if(s===_o)return i.HALF_FLOAT;if(s===Dv)return i.ALPHA;if(s===Uv)return i.RGB;if(s===di)return i.RGBA;if(s===uo)return i.DEPTH_COMPONENT;if(s===co)return i.DEPTH_STENCIL;if(s===Nv)return i.RED;if(s===Xd)return i.RED_INTEGER;if(s===Iv)return i.RG;if(s===jd)return i.RG_INTEGER;if(s===$d)return i.RGBA_INTEGER;if(s===iu||s===ru||s===su||s===au)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===iu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ru)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===su)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===au)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===iu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ru)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===su)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===au)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rd||s===sd||s===ad||s===od)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===rd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ad)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===od)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ld||s===ud||s===cd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===ld||s===ud)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===cd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fd||s===dd||s===hd||s===pd||s===md||s===gd||s===vd||s===_d||s===xd||s===yd||s===Sd||s===Ed||s===Md||s===wd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===fd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===md)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_d)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ed)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Md)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ou||s===Td||s===Rd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===ou)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Td)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fv||s===Ad||s===Cd||s===bd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===ou)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Ad)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===lo?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}const dR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hR=`
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

}`;class pR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new bn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Ur({vertexShader:dR,fragmentShader:hR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wi(new yu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mR extends fa{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",d=1,p=null,m=null,v=null,y=null,S=null,E=null;const w=new pR,_=t.getContextAttributes();let x=null,L=null;const b=[],R=[],B=new At;let N=null;const F=new ei;F.viewport=new jt;const W=new ei;W.viewport=new jt;const P=[F,W],A=new FE;let H=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=b[ee];return fe===void 0&&(fe=new Pf,b[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=b[ee];return fe===void 0&&(fe=new Pf,b[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=b[ee];return fe===void 0&&(fe=new Pf,b[ee]=fe),fe.getHandSpace()};function Q(ee){const fe=R.indexOf(ee.inputSource);if(fe===-1)return;const Re=b[fe];Re!==void 0&&(Re.update(ee.inputSource,ee.frame,p||c),Re.dispatchEvent({type:ee.type,data:ee.inputSource}))}function le(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",me);for(let ee=0;ee<b.length;ee++){const fe=R[ee];fe!==null&&(R[ee]=null,b[ee].disconnect(fe))}H=null,oe=null,w.reset(),e.setRenderTarget(x),S=null,y=null,v=null,a=null,L=null,Oe.stop(),s.isPresenting=!1,e.setPixelRatio(N),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){f=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",le),a.addEventListener("inputsourceschange",me),_.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ee=null,Ae=null;_.depth&&(Ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=_.stencil?co:uo,Ee=_.stencil?lo:ls);const Ke={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};v=new XRWebGLBinding(a,t),y=v.createProjectionLayer(Ke),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new us(y.textureWidth,y.textureHeight,{format:di,type:Ai,depthTexture:new $v(y.textureWidth,y.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Re),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new us(S.framebufferWidth,S.framebufferHeight,{format:di,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await a.requestReferenceSpace(f),Oe.setContext(a),Oe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function me(ee){for(let fe=0;fe<ee.removed.length;fe++){const Re=ee.removed[fe],Ee=R.indexOf(Re);Ee>=0&&(R[Ee]=null,b[Ee].disconnect(Re))}for(let fe=0;fe<ee.added.length;fe++){const Re=ee.added[fe];let Ee=R.indexOf(Re);if(Ee===-1){for(let Ke=0;Ke<b.length;Ke++)if(Ke>=R.length){R.push(Re),Ee=Ke;break}else if(R[Ke]===null){R[Ke]=Re,Ee=Ke;break}if(Ee===-1)break}const Ae=b[Ee];Ae&&Ae.connect(Re)}}const ne=new te,ve=new te;function V(ee,fe,Re){ne.setFromMatrixPosition(fe.matrixWorld),ve.setFromMatrixPosition(Re.matrixWorld);const Ee=ne.distanceTo(ve),Ae=fe.projectionMatrix.elements,Ke=Re.projectionMatrix.elements,Ve=Ae[14]/(Ae[10]-1),Mt=Ae[14]/(Ae[10]+1),Rt=(Ae[9]+1)/Ae[5],ct=(Ae[9]-1)/Ae[5],k=(Ae[8]-1)/Ae[0],Wt=(Ke[8]+1)/Ke[0],pt=Ve*k,xt=Ve*Wt,Ge=Ee/(-k+Wt),ft=Ge*-k;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ft),ee.translateZ(Ge),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ae[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=Ve+Ge,tt=Mt+Ge,It=pt-ft,D=xt+(Ee-ft),T=Rt*Mt/tt*qe,J=ct*Mt/tt*qe;ee.projectionMatrix.makePerspective(It,D,T,J,qe,tt),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let fe=ee.near,Re=ee.far;w.texture!==null&&(w.depthNear>0&&(fe=w.depthNear),w.depthFar>0&&(Re=w.depthFar)),A.near=W.near=F.near=fe,A.far=W.far=F.far=Re,(H!==A.near||oe!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),H=A.near,oe=A.far),F.layers.mask=ee.layers.mask|2,W.layers.mask=ee.layers.mask|4,A.layers.mask=F.layers.mask|W.layers.mask;const Ee=ee.parent,Ae=A.cameras;ue(A,Ee);for(let Ke=0;Ke<Ae.length;Ke++)ue(Ae[Ke],Ee);Ae.length===2?V(A,F,W):A.projectionMatrix.copy(F.projectionMatrix),ae(ee,A,Ee)};function ae(ee,fe,Re){Re===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(Re.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=fo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(y===null&&S===null))return d},this.setFoveation=function(ee){d=ee,y!==null&&(y.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let I=null;function re(ee,fe){if(m=fe.getViewerPose(p||c),E=fe,m!==null){const Re=m.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Ee=!1;Re.length!==A.cameras.length&&(A.cameras.length=0,Ee=!0);for(let Ve=0;Ve<Re.length;Ve++){const Mt=Re[Ve];let Rt=null;if(S!==null)Rt=S.getViewport(Mt);else{const k=v.getViewSubImage(y,Mt);Rt=k.viewport,Ve===0&&(e.setRenderTargetTextures(L,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(L))}let ct=P[Ve];ct===void 0&&(ct=new ei,ct.layers.enable(Ve),ct.viewport=new jt,P[Ve]=ct),ct.matrix.fromArray(Mt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Mt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ve===0&&(A.matrix.copy(ct.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ee===!0&&A.cameras.push(ct)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const Ve=v.getDepthInformation(Re[0]);Ve&&Ve.isValid&&Ve.texture&&w.init(e,Ve,a.renderState)}}for(let Re=0;Re<b.length;Re++){const Ee=R[Re],Ae=b[Re];Ee!==null&&Ae!==void 0&&Ae.update(Ee,fe,p||c)}I&&I(ee,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Oe=new qv;Oe.setAnimationLoop(re),this.setAnimationLoop=function(ee){I=ee},this.dispose=function(){}}}const Qr=new Cn,gR=new $t;function vR(i,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function s(_,x){x.color.getRGB(_.fogColor.value,Wv(i)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function a(_,x,L,b,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(_,x):x.isMeshToonMaterial?(l(_,x),v(_,x)):x.isMeshPhongMaterial?(l(_,x),m(_,x)):x.isMeshStandardMaterial?(l(_,x),y(_,x),x.isMeshPhysicalMaterial&&S(_,x,R)):x.isMeshMatcapMaterial?(l(_,x),E(_,x)):x.isMeshDepthMaterial?l(_,x):x.isMeshDistanceMaterial?(l(_,x),w(_,x)):x.isMeshNormalMaterial?l(_,x):x.isLineBasicMaterial?(c(_,x),x.isLineDashedMaterial&&f(_,x)):x.isPointsMaterial?d(_,x,L,b):x.isSpriteMaterial?p(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===On&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===On&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const L=e.get(x),b=L.envMap,R=L.envMapRotation;b&&(_.envMap.value=b,Qr.copy(R),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),_.envMapRotation.value.setFromMatrix4(gR.makeRotationFromEuler(Qr)),_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function c(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function f(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function d(_,x,L,b){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*L,_.scale.value=b*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function p(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function m(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function v(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function y(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function S(_,x,L){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===On&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=L.texture,_.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,x){x.matcap&&(_.matcap.value=x.matcap)}function w(_,x){const L=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(L.matrixWorld),_.nearDistance.value=L.shadow.camera.near,_.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function _R(i,e,t,s){let a={},l={},c=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,b){const R=b.program;s.uniformBlockBinding(L,R)}function p(L,b){let R=a[L.id];R===void 0&&(E(L),R=m(L),a[L.id]=R,L.addEventListener("dispose",_));const B=b.program;s.updateUBOMapping(L,B);const N=e.render.frame;l[L.id]!==N&&(y(L),l[L.id]=N)}function m(L){const b=v();L.__bindingPointIndex=b;const R=i.createBuffer(),B=L.__size,N=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,B,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,R),R}function v(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const b=a[L.id],R=L.uniforms,B=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let N=0,F=R.length;N<F;N++){const W=Array.isArray(R[N])?R[N]:[R[N]];for(let P=0,A=W.length;P<A;P++){const H=W[P];if(S(H,N,P,B)===!0){const oe=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value];let le=0;for(let me=0;me<Q.length;me++){const ne=Q[me],ve=w(ne);typeof ne=="number"||typeof ne=="boolean"?(H.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,oe+le,H.__data)):ne.isMatrix3?(H.__data[0]=ne.elements[0],H.__data[1]=ne.elements[1],H.__data[2]=ne.elements[2],H.__data[3]=0,H.__data[4]=ne.elements[3],H.__data[5]=ne.elements[4],H.__data[6]=ne.elements[5],H.__data[7]=0,H.__data[8]=ne.elements[6],H.__data[9]=ne.elements[7],H.__data[10]=ne.elements[8],H.__data[11]=0):(ne.toArray(H.__data,le),le+=ve.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,oe,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(L,b,R,B){const N=L.value,F=b+"_"+R;if(B[F]===void 0)return typeof N=="number"||typeof N=="boolean"?B[F]=N:B[F]=N.clone(),!0;{const W=B[F];if(typeof N=="number"||typeof N=="boolean"){if(W!==N)return B[F]=N,!0}else if(W.equals(N)===!1)return W.copy(N),!0}return!1}function E(L){const b=L.uniforms;let R=0;const B=16;for(let F=0,W=b.length;F<W;F++){const P=Array.isArray(b[F])?b[F]:[b[F]];for(let A=0,H=P.length;A<H;A++){const oe=P[A],Q=Array.isArray(oe.value)?oe.value:[oe.value];for(let le=0,me=Q.length;le<me;le++){const ne=Q[le],ve=w(ne),V=R%B,ue=V%ve.boundary,ae=V+ue;R+=ue,ae!==0&&B-ae<ve.storage&&(R+=B-ae),oe.__data=new Float32Array(ve.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=R,R+=ve.storage}}}const N=R%B;return N>0&&(R+=B-N),L.__size=R,L.__cache={},this}function w(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function _(L){const b=L.target;b.removeEventListener("dispose",_);const R=c.indexOf(b.__bindingPointIndex);c.splice(R,1),i.deleteBuffer(a[b.id]),delete a[b.id],delete l[b.id]}function x(){for(const L in a)i.deleteBuffer(a[L]);c=[],a={},l={}}return{bind:d,update:p,dispose:x}}class xR{constructor(e={}){const{canvas:t=$S(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),w=new Int32Array(4);let _=null,x=null;const L=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let B=!1;this._outputColorSpace=An;let N=0,F=0,W=null,P=-1,A=null;const H=new jt,oe=new jt;let Q=null;const le=new bt(0);let me=0,ne=t.width,ve=t.height,V=1,ue=null,ae=null;const I=new jt(0,0,ne,ve),re=new jt(0,0,ne,ve);let Oe=!1;const ee=new Jd;let fe=!1,Re=!1;const Ee=new $t,Ae=new $t,Ke=new te,Ve=new jt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function ct(){return W===null?V:1}let k=s;function Wt(C,j){return t.getContext(C,j)}try{const C={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hd}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",he,!1),k===null){const j="webgl2";if(k=Wt(j,C),k===null)throw Wt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let pt,xt,Ge,ft,qe,tt,It,D,T,J,de,ge,ce,je,be,ke,$e,_e,Ne,nt,Je,Le,st,O;function Te(){pt=new bT(k),pt.init(),Le=new fR(k,pt),xt=new ET(k,pt,e,Le),Ge=new uR(k,pt),xt.reverseDepthBuffer&&y&&Ge.buffers.depth.setReversed(!0),ft=new DT(k),qe=new K1,tt=new cR(k,pt,Ge,qe,xt,Le,ft),It=new wT(R),D=new CT(R),T=new kE(k),st=new yT(k,T),J=new PT(k,T,ft,st),de=new NT(k,J,T,ft),Ne=new UT(k,xt,tt),ke=new MT(qe),ge=new q1(R,It,D,pt,xt,st,ke),ce=new vR(R,qe),je=new J1,be=new rR(pt),_e=new xT(R,It,D,Ge,de,S,d),$e=new oR(R,de,xt),O=new _R(k,ft,xt,Ge),nt=new ST(k,pt,ft),Je=new LT(k,pt,ft),ft.programs=ge.programs,R.capabilities=xt,R.extensions=pt,R.properties=qe,R.renderLists=je,R.shadowMap=$e,R.state=Ge,R.info=ft}Te();const pe=new mR(R,k);this.xr=pe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(ne,ve,!1))},this.getSize=function(C){return C.set(ne,ve)},this.setSize=function(C,j,se=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=C,ve=j,t.width=Math.floor(C*V),t.height=Math.floor(j*V),se===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(ne*V,ve*V).floor()},this.setDrawingBufferSize=function(C,j,se){ne=C,ve=j,V=se,t.width=Math.floor(C*se),t.height=Math.floor(j*se),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(I)},this.setViewport=function(C,j,se,K){C.isVector4?I.set(C.x,C.y,C.z,C.w):I.set(C,j,se,K),Ge.viewport(H.copy(I).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,j,se,K){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,j,se,K),Ge.scissor(oe.copy(re).multiplyScalar(V).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(C){Ge.setScissorTest(Oe=C)},this.setOpaqueSort=function(C){ue=C},this.setTransparentSort=function(C){ae=C},this.getClearColor=function(C){return C.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,se=!0){let K=0;if(C){let Y=!1;if(W!==null){const we=W.texture.format;Y=we===$d||we===jd||we===Xd}if(Y){const we=W.texture.type,De=we===Ai||we===ls||we===oo||we===lo||we===Gd||we===Wd,ze=_e.getClearColor(),Be=_e.getClearAlpha(),ot=ze.r,at=ze.g,We=ze.b;De?(E[0]=ot,E[1]=at,E[2]=We,E[3]=Be,k.clearBufferuiv(k.COLOR,0,E)):(w[0]=ot,w[1]=at,w[2]=We,w[3]=Be,k.clearBufferiv(k.COLOR,0,w))}else K|=k.COLOR_BUFFER_BIT}j&&(K|=k.DEPTH_BUFFER_BIT),se&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",he,!1),_e.dispose(),je.dispose(),be.dispose(),qe.dispose(),It.dispose(),D.dispose(),de.dispose(),st.dispose(),O.dispose(),ge.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ds),pe.removeEventListener("sessionend",Qi),Ci.stop()};function Pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const C=ft.autoReset,j=$e.enabled,se=$e.autoUpdate,K=$e.needsUpdate,Y=$e.type;Te(),ft.autoReset=C,$e.enabled=j,$e.autoUpdate=se,$e.needsUpdate=K,$e.type=Y}function he(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ie(C){const j=C.target;j.removeEventListener("dispose",Ie),et(j)}function et(C){Pt(C),qe.remove(C)}function Pt(C){const j=qe.get(C).programs;j!==void 0&&(j.forEach(function(se){ge.releaseProgram(se)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,se,K,Y,we){j===null&&(j=Mt);const De=Y.isMesh&&Y.matrixWorld.determinant()<0,ze=wo(C,j,se,K,Y);Ge.setMaterial(K,De);let Be=se.index,ot=1;if(K.wireframe===!0){if(Be=J.getWireframeAttribute(se),Be===void 0)return;ot=2}const at=se.drawRange,We=se.attributes.position;let mt=at.start*ot,dt=(at.start+at.count)*ot;we!==null&&(mt=Math.max(mt,we.start*ot),dt=Math.min(dt,(we.start+we.count)*ot)),Be!==null?(mt=Math.max(mt,0),dt=Math.min(dt,Be.count)):We!=null&&(mt=Math.max(mt,0),dt=Math.min(dt,We.count));const Bt=dt-mt;if(Bt<0||Bt===1/0)return;st.setup(Y,K,ze,se,Be);let Ut,Ct=nt;if(Be!==null&&(Ut=T.get(Be),Ct=Je,Ct.setIndex(Ut)),Y.isMesh)K.wireframe===!0?(Ge.setLineWidth(K.wireframeLinewidth*ct()),Ct.setMode(k.LINES)):Ct.setMode(k.TRIANGLES);else if(Y.isLine){let Qe=K.linewidth;Qe===void 0&&(Qe=1),Ge.setLineWidth(Qe*ct()),Y.isLineSegments?Ct.setMode(k.LINES):Y.isLineLoop?Ct.setMode(k.LINE_LOOP):Ct.setMode(k.LINE_STRIP)}else Y.isPoints?Ct.setMode(k.POINTS):Y.isSprite&&Ct.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ta("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Qe=Y._multiDrawStarts,Lt=Y._multiDrawCounts,gt=Y._multiDrawCount,tn=Be?T.get(Be).bytesPerElement:1,tr=qe.get(K).currentProgram.getUniforms();for(let En=0;En<gt;En++)tr.setValue(k,"_gl_DrawID",En),Ct.render(Qe[En]/tn,Lt[En])}else if(Y.isInstancedMesh)Ct.renderInstances(mt,Bt,Y.count);else if(se.isInstancedBufferGeometry){const Qe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Lt=Math.min(se.instanceCount,Qe);Ct.renderInstances(mt,Bt,Lt)}else Ct.render(mt,Bt)};function yt(C,j,se){C.transparent===!0&&C.side===Ei&&C.forceSinglePass===!1?(C.side=On,C.needsUpdate=!0,hs(C,j,se),C.side=Dr,C.needsUpdate=!0,hs(C,j,se),C.side=Ei):hs(C,j,se)}this.compile=function(C,j,se=null){se===null&&(se=C),x=be.get(se),x.init(j),b.push(x),se.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),C!==se&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),x.setupLights();const K=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const we=Y.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const ze=we[De];yt(ze,se,Y),K.add(ze)}else yt(we,se,Y),K.add(we)}),x=b.pop(),K},this.compileAsync=function(C,j,se=null){const K=this.compile(C,j,se);return new Promise(Y=>{function we(){if(K.forEach(function(De){qe.get(De).currentProgram.isReady()&&K.delete(De)}),K.size===0){Y(C);return}setTimeout(we,10)}pt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Pn=null;function Sn(C){Pn&&Pn(C)}function ds(){Ci.stop()}function Qi(){Ci.start()}const Ci=new qv;Ci.setAnimationLoop(Sn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(C){Pn=C,pe.setAnimationLoop(C),C===null?Ci.stop():Ci.start()},pe.addEventListener("sessionstart",ds),pe.addEventListener("sessionend",Qi),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(j),j=pe.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,j,W),x=be.get(C,b.length),x.init(j),b.push(x),Ae.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ee.setFromProjectionMatrix(Ae),Re=this.localClippingEnabled,fe=ke.init(this.clippingPlanes,Re),_=je.get(C,L.length),_.init(),L.push(_),pe.enabled===!0&&pe.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&bi(we,j,-1/0,R.sortObjects)}bi(C,j,0,R.sortObjects),_.finish(),R.sortObjects===!0&&_.sort(ue,ae),Rt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Rt&&_e.addToRenderList(_,C),this.info.render.frame++,fe===!0&&ke.beginShadows();const se=x.state.shadowsArray;$e.render(se,C,j),fe===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=_.opaque,Y=_.transmissive;if(x.setupLights(),j.isArrayCamera){const we=j.cameras;if(Y.length>0)for(let De=0,ze=we.length;De<ze;De++){const Be=we[De];Ir(K,Y,C,Be)}Rt&&_e.render(C);for(let De=0,ze=we.length;De<ze;De++){const Be=we[De];Nr(_,C,Be,Be.viewport)}}else Y.length>0&&Ir(K,Y,C,j),Rt&&_e.render(C),Nr(_,C,j);W!==null&&F===0&&(tt.updateMultisampleRenderTarget(W),tt.updateRenderTargetMipmap(W)),C.isScene===!0&&C.onAfterRender(R,C,j),st.resetDefaultState(),P=-1,A=null,b.pop(),b.length>0?(x=b[b.length-1],fe===!0&&ke.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?_=L[L.length-1]:_=null};function bi(C,j,se,K){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ee.intersectsSprite(C)){K&&Ve.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const De=de.update(C),ze=C.material;ze.visible&&_.push(C,De,ze,se,Ve.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ee.intersectsObject(C))){const De=de.update(C),ze=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ve.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ve.copy(De.boundingSphere.center)),Ve.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(ze)){const Be=De.groups;for(let ot=0,at=Be.length;ot<at;ot++){const We=Be[ot],mt=ze[We.materialIndex];mt&&mt.visible&&_.push(C,De,mt,se,Ve.z,We)}}else ze.visible&&_.push(C,De,ze,se,Ve.z,null)}}const we=C.children;for(let De=0,ze=we.length;De<ze;De++)bi(we[De],j,se,K)}function Nr(C,j,se,K){const Y=C.opaque,we=C.transmissive,De=C.transparent;x.setupLightsView(se),fe===!0&&ke.setGlobalState(R.clippingPlanes,se),K&&Ge.viewport(H.copy(K)),Y.length>0&&er(Y,j,se),we.length>0&&er(we,j,se),De.length>0&&er(De,j,se),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Ir(C,j,se,K){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[K.id]===void 0&&(x.state.transmissionRenderTarget[K.id]=new us(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?_o:Ai,minFilter:rs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const we=x.state.transmissionRenderTarget[K.id],De=K.viewport||H;we.setSize(De.z*R.transmissionResolutionScale,De.w*R.transmissionResolutionScale);const ze=R.getRenderTarget(),Be=R.getActiveCubeFace(),ot=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(le),me=R.getClearAlpha(),me<1&&R.setClearColor(16777215,.5),R.clear(),Rt&&_e.render(se);const at=R.toneMapping;R.toneMapping=Yi;const We=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),x.setupLightsView(K),fe===!0&&ke.setGlobalState(R.clippingPlanes,K),er(C,se,K),tt.updateMultisampleRenderTarget(we),tt.updateRenderTargetMipmap(we),pt.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let dt=0,Bt=j.length;dt<Bt;dt++){const Ut=j[dt],Ct=Ut.object,Qe=Ut.geometry,Lt=Ut.material,gt=Ut.group;if(Lt.side===Ei&&Ct.layers.test(K.layers)){const tn=Lt.side;Lt.side=On,Lt.needsUpdate=!0,Eo(Ct,se,K,Qe,Lt,gt),Lt.side=tn,Lt.needsUpdate=!0,mt=!0}}mt===!0&&(tt.updateMultisampleRenderTarget(we),tt.updateRenderTargetMipmap(we))}R.setRenderTarget(ze,Be,ot),R.setClearColor(le,me),We!==void 0&&(K.viewport=We),R.toneMapping=at}function er(C,j,se){const K=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,we=C.length;Y<we;Y++){const De=C[Y],ze=De.object,Be=De.geometry,ot=De.group;let at=De.material;at.allowOverride===!0&&K!==null&&(at=K),ze.layers.test(se.layers)&&Eo(ze,j,se,Be,at,ot)}}function Eo(C,j,se,K,Y,we){C.onBeforeRender(R,j,se,K,Y,we),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(R,j,se,K,C,we),Y.transparent===!0&&Y.side===Ei&&Y.forceSinglePass===!1?(Y.side=On,Y.needsUpdate=!0,R.renderBufferDirect(se,j,K,Y,C,we),Y.side=Dr,Y.needsUpdate=!0,R.renderBufferDirect(se,j,K,Y,C,we),Y.side=Ei):R.renderBufferDirect(se,j,K,Y,C,we),C.onAfterRender(R,j,se,K,Y,we)}function hs(C,j,se){j.isScene!==!0&&(j=Mt);const K=qe.get(C),Y=x.state.lights,we=x.state.shadowsArray,De=Y.state.version,ze=ge.getParameters(C,Y.state,we,j,se),Be=ge.getProgramCacheKey(ze);let ot=K.programs;K.environment=C.isMeshStandardMaterial?j.environment:null,K.fog=j.fog,K.envMap=(C.isMeshStandardMaterial?D:It).get(C.envMap||K.environment),K.envMapRotation=K.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,ot===void 0&&(C.addEventListener("dispose",Ie),ot=new Map,K.programs=ot);let at=ot.get(Be);if(at!==void 0){if(K.currentProgram===at&&K.lightsStateVersion===De)return mi(C,ze),at}else ze.uniforms=ge.getUniforms(C),C.onBeforeCompile(ze,R),at=ge.acquireProgram(ze,Be),ot.set(Be,at),K.uniforms=ze.uniforms;const We=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=ke.uniform),mi(C,ze),K.needsLights=Mu(C),K.lightsStateVersion=De,K.needsLights&&(We.ambientLightColor.value=Y.state.ambient,We.lightProbe.value=Y.state.probe,We.directionalLights.value=Y.state.directional,We.directionalLightShadows.value=Y.state.directionalShadow,We.spotLights.value=Y.state.spot,We.spotLightShadows.value=Y.state.spotShadow,We.rectAreaLights.value=Y.state.rectArea,We.ltc_1.value=Y.state.rectAreaLTC1,We.ltc_2.value=Y.state.rectAreaLTC2,We.pointLights.value=Y.state.point,We.pointLightShadows.value=Y.state.pointShadow,We.hemisphereLights.value=Y.state.hemi,We.directionalShadowMap.value=Y.state.directionalShadowMap,We.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,We.spotShadowMap.value=Y.state.spotShadowMap,We.spotLightMatrix.value=Y.state.spotLightMatrix,We.spotLightMap.value=Y.state.spotLightMap,We.pointShadowMap.value=Y.state.pointShadowMap,We.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=at,K.uniformsList=null,at}function Mo(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=lu.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function mi(C,j){const se=qe.get(C);se.outputColorSpace=j.outputColorSpace,se.batching=j.batching,se.batchingColor=j.batchingColor,se.instancing=j.instancing,se.instancingColor=j.instancingColor,se.instancingMorph=j.instancingMorph,se.skinning=j.skinning,se.morphTargets=j.morphTargets,se.morphNormals=j.morphNormals,se.morphColors=j.morphColors,se.morphTargetsCount=j.morphTargetsCount,se.numClippingPlanes=j.numClippingPlanes,se.numIntersection=j.numClipIntersection,se.vertexAlphas=j.vertexAlphas,se.vertexTangents=j.vertexTangents,se.toneMapping=j.toneMapping}function wo(C,j,se,K,Y){j.isScene!==!0&&(j=Mt),tt.resetTextureUnits();const we=j.fog,De=K.isMeshStandardMaterial?j.environment:null,ze=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:oa,Be=(K.isMeshStandardMaterial?D:It).get(K.envMap||De),ot=K.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,at=!!se.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),We=!!se.morphAttributes.position,mt=!!se.morphAttributes.normal,dt=!!se.morphAttributes.color;let Bt=Yi;K.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Bt=R.toneMapping);const Ut=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ct=Ut!==void 0?Ut.length:0,Qe=qe.get(K),Lt=x.state.lights;if(fe===!0&&(Re===!0||C!==A)){const un=C===A&&K.id===P;ke.setState(K,C,un)}let gt=!1;K.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Lt.state.version||Qe.outputColorSpace!==ze||Y.isBatchedMesh&&Qe.batching===!1||!Y.isBatchedMesh&&Qe.batching===!0||Y.isBatchedMesh&&Qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Qe.instancing===!1||!Y.isInstancedMesh&&Qe.instancing===!0||Y.isSkinnedMesh&&Qe.skinning===!1||!Y.isSkinnedMesh&&Qe.skinning===!0||Y.isInstancedMesh&&Qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Qe.instancingMorph===!1&&Y.morphTexture!==null||Qe.envMap!==Be||K.fog===!0&&Qe.fog!==we||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ke.numPlanes||Qe.numIntersection!==ke.numIntersection)||Qe.vertexAlphas!==ot||Qe.vertexTangents!==at||Qe.morphTargets!==We||Qe.morphNormals!==mt||Qe.morphColors!==dt||Qe.toneMapping!==Bt||Qe.morphTargetsCount!==Ct)&&(gt=!0):(gt=!0,Qe.__version=K.version);let tn=Qe.currentProgram;gt===!0&&(tn=hs(K,j,Y));let tr=!1,En=!1,Pi=!1;const Nt=tn.getUniforms(),hn=Qe.uniforms;if(Ge.useProgram(tn.program)&&(tr=!0,En=!0,Pi=!0),K.id!==P&&(P=K.id,En=!0),tr||A!==C){Ge.buffers.depth.getReversed()?(Ee.copy(C.projectionMatrix),qS(Ee),KS(Ee),Nt.setValue(k,"projectionMatrix",Ee)):Nt.setValue(k,"projectionMatrix",C.projectionMatrix),Nt.setValue(k,"viewMatrix",C.matrixWorldInverse);const rn=Nt.map.cameraPosition;rn!==void 0&&rn.setValue(k,Ke.setFromMatrixPosition(C.matrixWorld)),xt.logarithmicDepthBuffer&&Nt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Nt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,En=!0,Pi=!0)}if(Y.isSkinnedMesh){Nt.setOptional(k,Y,"bindMatrix"),Nt.setOptional(k,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Nt.setValue(k,"boneTexture",un.boneTexture,tt))}Y.isBatchedMesh&&(Nt.setOptional(k,Y,"batchingTexture"),Nt.setValue(k,"batchingTexture",Y._matricesTexture,tt),Nt.setOptional(k,Y,"batchingIdTexture"),Nt.setValue(k,"batchingIdTexture",Y._indirectTexture,tt),Nt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Nt.setValue(k,"batchingColorTexture",Y._colorsTexture,tt));const nn=se.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Ne.update(Y,se,tn),(En||Qe.receiveShadow!==Y.receiveShadow)&&(Qe.receiveShadow=Y.receiveShadow,Nt.setValue(k,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(hn.envMap.value=Be,hn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&j.environment!==null&&(hn.envMapIntensity.value=j.environmentIntensity),En&&(Nt.setValue(k,"toneMappingExposure",R.toneMappingExposure),Qe.needsLights&&To(hn,Pi),we&&K.fog===!0&&ce.refreshFogUniforms(hn,we),ce.refreshMaterialUniforms(hn,K,V,ve,x.state.transmissionRenderTarget[C.id]),lu.upload(k,Mo(Qe),hn,tt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(lu.upload(k,Mo(Qe),hn,tt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Nt.setValue(k,"center",Y.center),Nt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),Nt.setValue(k,"normalMatrix",Y.normalMatrix),Nt.setValue(k,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const un=K.uniformsGroups;for(let rn=0,St=un.length;rn<St;rn++){const gi=un[rn];O.update(gi,tn),O.bind(gi,tn)}}return tn}function To(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Mu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,j,se){const K=qe.get(C);K.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),qe.get(C.texture).__webglTexture=j,qe.get(C.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:se,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const se=qe.get(C);se.__webglFramebuffer=j,se.__useDefaultFramebuffer=j===void 0};const Ro=k.createFramebuffer();this.setRenderTarget=function(C,j=0,se=0){W=C,N=j,F=se;let K=!0,Y=null,we=!1,De=!1;if(C){const Be=qe.get(C);if(Be.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(k.FRAMEBUFFER,null),K=!1;else if(Be.__webglFramebuffer===void 0)tt.setupRenderTarget(C);else if(Be.__hasExternalTextures)tt.rebindTextures(C,qe.get(C.texture).__webglTexture,qe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const We=C.depthTexture;if(Be.__boundDepthTexture!==We){if(We!==null&&qe.has(We)&&(C.width!==We.image.width||C.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(C)}}const ot=C.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(De=!0);const at=qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(at[j])?Y=at[j][se]:Y=at[j],we=!0):C.samples>0&&tt.useMultisampledRTT(C)===!1?Y=qe.get(C).__webglMultisampledFramebuffer:Array.isArray(at)?Y=at[se]:Y=at,H.copy(C.viewport),oe.copy(C.scissor),Q=C.scissorTest}else H.copy(I).multiplyScalar(V).floor(),oe.copy(re).multiplyScalar(V).floor(),Q=Oe;if(se!==0&&(Y=Ro),Ge.bindFramebuffer(k.FRAMEBUFFER,Y)&&K&&Ge.drawBuffers(C,Y),Ge.viewport(H),Ge.scissor(oe),Ge.setScissorTest(Q),we){const Be=qe.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+j,Be.__webglTexture,se)}else if(De){const Be=qe.get(C.texture),ot=j;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,se,ot)}else if(C!==null&&se!==0){const Be=qe.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,se)}P=-1},this.readRenderTargetPixels=function(C,j,se,K,Y,we,De,ze=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){Ge.bindFramebuffer(k.FRAMEBUFFER,Be);try{const ot=C.textures[ze],at=ot.format,We=ot.type;if(!xt.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-K&&se>=0&&se<=C.height-Y&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ze),k.readPixels(j,se,K,Y,Le.convert(at),Le.convert(We),we))}finally{const ot=W!==null?qe.get(W).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(C,j,se,K,Y,we,De,ze=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be)if(j>=0&&j<=C.width-K&&se>=0&&se<=C.height-Y){Ge.bindFramebuffer(k.FRAMEBUFFER,Be);const ot=C.textures[ze],at=ot.format,We=ot.type;if(!xt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,mt),k.bufferData(k.PIXEL_PACK_BUFFER,we.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ze),k.readPixels(j,se,K,Y,Le.convert(at),Le.convert(We),0);const dt=W!==null?qe.get(W).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,dt);const Bt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await YS(k,Bt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,mt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,we),k.deleteBuffer(mt),k.deleteSync(Bt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,se=0){const K=Math.pow(2,-se),Y=Math.floor(C.image.width*K),we=Math.floor(C.image.height*K),De=j!==null?j.x:0,ze=j!==null?j.y:0;tt.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,se,0,0,De,ze,Y,we),Ge.unbindTexture()};const Ao=k.createFramebuffer(),Co=k.createFramebuffer();this.copyTextureToTexture=function(C,j,se=null,K=null,Y=0,we=null){we===null&&(Y!==0?(ta("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=Y,Y=0):we=0);let De,ze,Be,ot,at,We,mt,dt,Bt;const Ut=C.isCompressedTexture?C.mipmaps[we]:C.image;if(se!==null)De=se.max.x-se.min.x,ze=se.max.y-se.min.y,Be=se.isBox3?se.max.z-se.min.z:1,ot=se.min.x,at=se.min.y,We=se.isBox3?se.min.z:0;else{const nn=Math.pow(2,-Y);De=Math.floor(Ut.width*nn),ze=Math.floor(Ut.height*nn),C.isDataArrayTexture?Be=Ut.depth:C.isData3DTexture?Be=Math.floor(Ut.depth*nn):Be=1,ot=0,at=0,We=0}K!==null?(mt=K.x,dt=K.y,Bt=K.z):(mt=0,dt=0,Bt=0);const Ct=Le.convert(j.format),Qe=Le.convert(j.type);let Lt;j.isData3DTexture?(tt.setTexture3D(j,0),Lt=k.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(tt.setTexture2DArray(j,0),Lt=k.TEXTURE_2D_ARRAY):(tt.setTexture2D(j,0),Lt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const gt=k.getParameter(k.UNPACK_ROW_LENGTH),tn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),tr=k.getParameter(k.UNPACK_SKIP_PIXELS),En=k.getParameter(k.UNPACK_SKIP_ROWS),Pi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ot),k.pixelStorei(k.UNPACK_SKIP_ROWS,at),k.pixelStorei(k.UNPACK_SKIP_IMAGES,We);const Nt=C.isDataArrayTexture||C.isData3DTexture,hn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const nn=qe.get(C),un=qe.get(j),rn=qe.get(nn.__renderTarget),St=qe.get(un.__renderTarget);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let gi=0;gi<Be;gi++)Nt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qe.get(C).__webglTexture,Y,We+gi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qe.get(j).__webglTexture,we,Bt+gi)),k.blitFramebuffer(ot,at,De,ze,mt,dt,De,ze,k.DEPTH_BUFFER_BIT,k.NEAREST);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||qe.has(C)){const nn=qe.get(C),un=qe.get(j);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,Ao),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,Co);for(let rn=0;rn<Be;rn++)Nt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nn.__webglTexture,Y,We+rn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nn.__webglTexture,Y),hn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,un.__webglTexture,we,Bt+rn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,un.__webglTexture,we),Y!==0?k.blitFramebuffer(ot,at,De,ze,mt,dt,De,ze,k.COLOR_BUFFER_BIT,k.NEAREST):hn?k.copyTexSubImage3D(Lt,we,mt,dt,Bt+rn,ot,at,De,ze):k.copyTexSubImage2D(Lt,we,mt,dt,ot,at,De,ze);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else hn?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Lt,we,mt,dt,Bt,De,ze,Be,Ct,Qe,Ut.data):j.isCompressedArrayTexture?k.compressedTexSubImage3D(Lt,we,mt,dt,Bt,De,ze,Be,Ct,Ut.data):k.texSubImage3D(Lt,we,mt,dt,Bt,De,ze,Be,Ct,Qe,Ut):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,we,mt,dt,De,ze,Ct,Qe,Ut.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,we,mt,dt,Ut.width,Ut.height,Ct,Ut.data):k.texSubImage2D(k.TEXTURE_2D,we,mt,dt,De,ze,Ct,Qe,Ut);k.pixelStorei(k.UNPACK_ROW_LENGTH,gt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tr),k.pixelStorei(k.UNPACK_SKIP_ROWS,En),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Pi),we===0&&j.generateMipmaps&&k.generateMipmap(Lt),Ge.unbindTexture()},this.copyTextureToTexture3D=function(C,j,se=null,K=null,Y=0){return ta('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,se,K,Y)},this.initRenderTarget=function(C){qe.get(C).__webglFramebuffer===void 0&&tt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?tt.setTextureCube(C,0):C.isData3DTexture?tt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?tt.setTexture2DArray(C,0):tt.setTexture2D(C,0),Ge.unbindTexture()},this.resetState=function(){N=0,F=0,W=null,Ge.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}function yR(i){switch(i){case"fa-user-tag":case"fa-person":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"12",cy:"7",r:"3.5"}),$.jsx("path",{d:"M5 21c0-4.2 3.1-7 7-7s7 2.8 7 7"})]});case"fa-venus-mars":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"8",cy:"9",r:"3.5"}),$.jsx("path",{d:"M8 12.5V21M5 17.5h6"}),$.jsx("circle",{cx:"16.5",cy:"14.5",r:"3.5"}),$.jsx("path",{d:"M19 12l3-3m0 0h-4m4 0v4"})]});case"fa-palette":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0 0-5H12a2 2 0 0 1 0-4h3a6 6 0 0 0-3-9Z"}),$.jsx("circle",{cx:"7",cy:"10",r:".7",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"6.5",r:".7",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"13",cy:"5.8",r:".7",fill:"currentColor",stroke:"none"})]});case"fa-eye":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z"}),$.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]});case"fa-eye-dropper":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m14 5 5 5M16.5 2.5l5 5-10 10-4 1 1-4 10-10Z"}),$.jsx("path",{d:"M5 19h6"})]});case"fa-scissors":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"6",cy:"7",r:"2.5"}),$.jsx("circle",{cx:"6",cy:"17",r:"2.5"}),$.jsx("path",{d:"m8 8.5 12 8.5M8 15.5 20 7"})]});case"fa-fill-drip":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m4 14 8-8 6 6-8 8H4v-6Z"}),$.jsx("path",{d:"M15 5 12 2"}),$.jsx("path",{d:"M20 15s2 2.2 2 3.5a2 2 0 0 1-4 0c0-1.3 2-3.5 2-3.5Z"})]});case"fa-hat-cowboy":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M4 16h16M7 16l1.5-7h7L17 16"}),$.jsx("path",{d:"M2.5 16c1.5 3 17.5 3 19 0"})]});case"fa-shirt":return $.jsx("path",{d:"M8 4h8l5 4-3 4-2-2v10H8V10l-2 2-3-4 5-4Z"});case"fa-shoe-prints":return $.jsxs($.Fragment,{children:[$.jsx("ellipse",{cx:"8",cy:"8",rx:"2.5",ry:"4",transform:"rotate(-20 8 8)"}),$.jsx("ellipse",{cx:"16",cy:"16",rx:"2.5",ry:"4",transform:"rotate(-20 16 16)"})]});case"fa-gem":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M6 4h12l4 5-10 11L2 9l4-5Z"}),$.jsx("path",{d:"M2 9h20M8 4l4 16 4-16"})]});case"fa-sliders":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M4 6h5M15 6h5M4 12h10M18 12h2M4 18h2M10 18h10"}),$.jsx("circle",{cx:"12",cy:"6",r:"2"}),$.jsx("circle",{cx:"16",cy:"12",r:"2"}),$.jsx("circle",{cx:"8",cy:"18",r:"2"})]});case"fa-grip-vertical":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"9",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"18",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"18",r:"1",fill:"currentColor",stroke:"none"})]});case"fa-chevron-up":return $.jsx("path",{d:"m6 15 6-6 6 6"});case"fa-chevron-down":return $.jsx("path",{d:"m6 9 6 6 6-6"});case"fa-check":return $.jsx("path",{d:"m5 12 4 4L19 6"});case"fa-arrows-rotate":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M20 7v5h-5"}),$.jsx("path",{d:"M4 17v-5h5"}),$.jsx("path",{d:"M6.2 8.2A7 7 0 0 1 18.8 10M17.8 15.8A7 7 0 0 1 5.2 14"})]});case"fa-layer-group":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),$.jsx("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]});case"fa-pause":return $.jsx("path",{d:"M8 5v14M16 5v14"});case"fa-play":return $.jsx("path",{d:"m8 5 11 7-11 7V5Z"});case"fa-download":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M12 3v12m0 0 4-4m-4 4-4-4"}),$.jsx("path",{d:"M5 20h14"})]});default:return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"12",cy:"12",r:"8"}),$.jsx("path",{d:"M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01"})]})}}function ss({name:i,className:e=""}){return $.jsx("svg",{className:`skincrafter-icon ${e}`.trim(),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false","data-skincrafter-icon":i,children:yR(i)})}function e_({title:i,icon:e,iconClassName:t="skincrafter-accent-text",className:s="",children:a}){return $.jsxs("section",{className:`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${s}`,children:[$.jsxs("h2",{className:"text-xl font-bold mb-2 skincrafter-heading flex items-center",children:[$.jsx(ss,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),i]}),a]})}function Jl({icon:i,className:e="",children:t,...s}){return $.jsxs("button",{className:`pixel-button preview-action-button p-2 pixel-border transition-colors ${e}`,...s,children:[i&&$.jsx(ss,{name:i,className:"skincrafter-button-icon"}),t]})}const SR=""+new URL("/assets/male-BAcllNor-BAcllNor.png",import.meta.url).href,ER=""+new URL("/assets/female-QkyEKH3M-QkyEKH3M.png",import.meta.url).href,MR=""+new URL("/assets/male-CCp8Ivtz-CCp8Ivtz.png",import.meta.url).href,wR=""+new URL("/assets/male-Df8EQiYb-Df8EQiYb.png",import.meta.url).href,TR=""+new URL("/assets/male-Kk_GEnn7-Kk_GEnn7.png",import.meta.url).href,RR=""+new URL("/assets/none-CbOwHiBU-CbOwHiBU.png",import.meta.url).href,AR=""+new URL("/assets/clasic-Cok0gEvd-Cok0gEvd.png",import.meta.url).href,CR=""+new URL("/assets/small-lE1Vvqgb-lE1Vvqgb.png",import.meta.url).href,bR=""+new URL("/assets/big-exakGI1u-exakGI1u.png",import.meta.url).href,PR=""+new URL("/assets/duck-Dz_q_Va_-Dz_q_Va_.png",import.meta.url).href,LR=""+new URL("/assets/hoodie-C1a1is5P-C1a1is5P.png",import.meta.url).href,DR=""+new URL("/assets/pants-gRdPSA1G-gRdPSA1G.png",import.meta.url).href,t_={"textures/race/human/male.png":SR,"textures/race/human/female.png":ER,"textures/race/bear/male.png":MR,"textures/race/orc/male.png":wR,"textures/race/zombie/male.png":TR,"textures/race/template/none.png":RR,"textures/eyes/clasic.png":AR,"textures/eyes/small.png":CR,"textures/eyes/big.png":bR,"textures/hat/duck.png":PR,"textures/top/male/hoodie.png":LR,"textures/bottom/pants.png":DR};function os(i,e){return e?`${e.replace(/\/+$/,"")}/${i.replace(/^\/+/,"")}`:t_[i]}const kg=t_["textures/race/human/male.png"],Zs=64,UR=["bottom"];function Zn(i,e,t,s,a,l,c,f,d={}){const{transparent:p=!1,expand:m=0,rotate180Faces:v=[],flipXFaces:y=[],flipYFaces:S=UR}=d,E=new Set(v),w=new Set(y),_=new Set(S),x=new ha(e+m,t+m,s+m),L=()=>new Zd({transparent:p,toneMapped:!1,alphaTest:p?.1:0,side:Ei}),b=[L(),L(),L(),L(),L(),L()],R=(W,P,A=!1,H=!1)=>{const oe=i.clone(),Q=(P[2]-P[0])/Zs,le=(P[3]-P[1])/Zs,me=P[0]/Zs,ne=P[2]/Zs,ve=1-P[1]/Zs,V=1-P[3]/Zs;oe.magFilter=dn,oe.minFilter=dn,oe.generateMipmaps=!1,oe.wrapS=ao,oe.wrapT=ao,oe.repeat.set(A?-Q:Q,H?-le:le),oe.offset.set(A?ne:me,H?ve:V),oe.needsUpdate=!0,W.map=oe},B=W=>E.has(W)||w.has(W),N=W=>E.has(W)||_.has(W);R(b[0],f.right,B("right"),N("right")),R(b[1],f.left,B("left"),N("left")),R(b[2],f.top,B("top"),N("top")),R(b[3],f.bottom,B("bottom"),N("bottom")),R(b[4],f.front,B("front"),N("front")),R(b[5],f.back,B("back"),N("back"));const F=new wi(x,b);return F.position.set(a,l,c),F}const NR=-6,IR=6,Ql=new te(-5,16,0),eu=new te(5,16,0),n_=-1.9,i_=1.9,Bg=new te(n_,6,0),zg=new te(i_,6,0);function Jn(i,e,t,s){if(!i)return;const a=e.clone().sub(t).applyEuler(s).add(t);i.position.copy(a),i.rotation.copy(s)}function FR(i,e,t={}){const{armL:s,armR:a,legL:l,legR:c,armLOL:f,armROL:d,legLOL:p,legROL:m}=e,v=t.leftArmX??IR,y=t.rightArmX??NR,S=new te(v,12,0),E=new te(y,12,0),w=new te(i_,0,0),_=new te(n_,0,0);if(!(!s||!a||!l||!c)){if([s,a,l,c,f,d,p,m].forEach(x=>x?.rotation.set(0,0,0)),s.position.copy(S),a.position.copy(E),l.position.copy(w),c.position.copy(_),f?.position.copy(S),d?.position.copy(E),p?.position.copy(w),m?.position.copy(_),i==="tpose"){const x=new Cn(0,0,Math.PI/2),L=new Cn(0,0,-Math.PI/2);Jn(s,S,eu,x),Jn(a,E,Ql,L),Jn(f,S,eu,x),Jn(d,E,Ql,L)}else if(i==="walking"){const x=-Math.PI/4,L=Math.PI/4,b=new Cn(x,0,0),R=new Cn(L,0,0),B=new Cn(L,0,0),N=new Cn(x,0,0);Jn(s,S,eu,b),Jn(a,E,Ql,R),Jn(l,w,zg,B),Jn(c,_,Bg,N),Jn(f,S,eu,b),Jn(d,E,Ql,R),Jn(p,w,zg,B),Jn(m,_,Bg,N)}}}const OR={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},kR={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},BR={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},zR={left:[40,20,44,32],right:[47,20,51,32],top:[44,16,47,20],bottom:[47,16,50,20],front:[44,20,47,32],back:[51,20,54,32]},HR={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},VR={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},GR={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},WR={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},XR={left:[40,36,44,48],right:[47,36,51,48],top:[44,32,47,36],bottom:[47,32,50,36],front:[44,36,47,48],back:[51,36,54,48]},jR={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},$R={left:[32,52,36,64],right:[40,52,44,64],top:[36,48,40,52],bottom:[40,48,44,52],front:[36,52,40,64],back:[44,52,48,64]},YR={left:[32,52,36,64],right:[39,52,43,64],top:[36,48,39,52],bottom:[39,48,42,52],front:[36,52,39,64],back:[43,52,46,64]},qR={left:[16,52,20,64],right:[24,52,28,64],top:[20,48,24,52],bottom:[24,48,28,52],front:[20,52,24,64],back:[28,52,32,64]},KR={left:[48,52,52,64],right:[56,52,60,64],top:[52,48,56,52],bottom:[56,48,60,52],front:[52,52,56,64],back:[60,52,64,64]},ZR={left:[48,52,52,64],right:[55,52,59,64],top:[52,48,55,52],bottom:[55,48,58,52],front:[52,52,55,64],back:[59,52,62,64]},JR={left:[0,52,4,64],right:[8,52,12,64],top:[4,48,8,52],bottom:[8,48,12,52],front:[4,52,8,64],back:[12,52,16,64]},zf=0,QR=44,eA=24,tA=72,nA=.04,iA=1,rA=.5,Hg=-6,Vg=6,Gg=-5.5,Wg=5.5,Xg=-1.9,jg=1.9,$g=()=>({armL:null,armR:null,legL:null,legR:null,armLOL:null,armROL:null,legLOL:null,legROL:null,headOL:null,bodyOL:null}),sA={createRenderer:()=>new xR({antialias:!1,alpha:!0}),createTextureLoader:()=>new LE,createResizeObserver:i=>new ResizeObserver(i),requestAnimationFrame:i=>window.requestAnimationFrame(i),cancelAnimationFrame:i=>window.cancelAnimationFrame(i),addWindowResizeListener:i=>window.addEventListener("resize",i),removeWindowResizeListener:i=>window.removeEventListener("resize",i),getDevicePixelRatio:()=>window.devicePixelRatio||1};class aA{constructor(e,t,s=sA){this.container=e,this.dependencies=s,this.pose=t.pose,this.model=t.model,this.showOverlay=t.showOverlay,this.autoRotate=t.autoRotate,this.onError=t.onError;const a=e.clientWidth||1,l=e.clientHeight||1;this.renderer=s.createRenderer(),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=An,this.renderer.toneMapping=Yi,this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(a,l),e.appendChild(this.renderer.domElement),this.camera=new ei(52,a/l,.1,1e3),this.camera.position.set(0,zf,this.cameraDistance),this.camera.lookAt(0,zf,0),this.scene=new EE;const c=new IE(16777215,1);c.position.set(10,10,10),this.scene.add(c),this.group=new Qa,this.group.position.y=-10,this.scene.add(this.group),this.textureLoader=s.createTextureLoader(),this.resizeObserver=s.createResizeObserver(this.handleResize),this.resizeObserver.observe(e),s.addWindowResizeListener(this.handleResize),e.addEventListener("wheel",this.handleWheel,{passive:!1}),this.handleResize(),this.scheduleAnimationFrame(),this.setTexture(t.textureUrl)}container;dependencies;renderer;camera;scene;group;textureLoader;resizeObserver;onError;disposedTextures=new WeakSet;pendingTextures=new Map;parts=$g();modelMeshes=[];currentTexture=null;requestedTextureUrl=null;textureLoadVersion=0;animationFrameId=null;disposed=!1;pose;model;showOverlay;autoRotate;cameraDistance=QR;modelRevision=0;textureRevision=0;setTexture(e){if(this.disposed||e===this.requestedTextureUrl)return;this.requestedTextureUrl=e;const t=++this.textureLoadVersion;let s=!1;const a=this.textureLoader.load(e,l=>{s=!0,this.pendingTextures.delete(t),this.handleTextureLoaded(t,l)},void 0,l=>{s=!0;const c=this.pendingTextures.get(t);c&&(this.disposeTexture(c),this.pendingTextures.delete(t)),!this.disposed&&t===this.textureLoadVersion&&this.onError?.({code:"texture_load_failed",textureUrl:e,cause:l})});s||this.pendingTextures.set(t,a)}setModel(e){this.disposed||e===this.model||(this.model=e,this.currentTexture&&this.buildModel(this.currentTexture))}setPose(e){this.disposed||e===this.pose||(this.pose=e,this.applyCurrentPose())}setShowOverlay(e){this.disposed||e===this.showOverlay||(this.showOverlay=e,this.applyOverlayVisibility())}setAutoRotate(e){this.disposed||(this.autoRotate=e)}getDiagnostics(){const e=this.parts.armR?.geometry.parameters.width;return{rendererAttached:this.renderer.domElement.parentNode===this.container,modelRevision:this.modelRevision,textureRevision:this.textureRevision,meshCount:this.modelMeshes.length,rightArmWidth:typeof e=="number"?e:null,overlayVisible:this.getOverlayMeshes().map(t=>t.visible),cameraDistance:this.cameraDistance,rotation:this.group.rotation.y}}dispose(){this.disposed||(this.disposed=!0,this.textureLoadVersion+=1,this.container.removeEventListener("wheel",this.handleWheel),this.dependencies.removeWindowResizeListener(this.handleResize),this.resizeObserver.disconnect(),this.animationFrameId!==null&&(this.dependencies.cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.pendingTextures.forEach(e=>this.disposeTexture(e)),this.pendingTextures.clear(),this.disposeModel(),this.currentTexture&&(this.disposeTexture(this.currentTexture),this.currentTexture=null),this.renderer.dispose(),this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement))}handleResize=()=>{if(this.disposed)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()};handleWheel=e=>{this.disposed||(e.preventDefault(),this.cameraDistance=jS.clamp(this.cameraDistance+e.deltaY*nA,eA,tA),this.camera.position.z=this.cameraDistance,this.camera.lookAt(0,zf,0),this.camera.updateProjectionMatrix())};scheduleAnimationFrame(){this.animationFrameId=this.dependencies.requestAnimationFrame(()=>{this.disposed||(this.autoRotate&&(this.group.rotation.y+=.01),this.renderer.render(this.scene,this.camera),this.scheduleAnimationFrame())})}getClampedDpr(){return Math.min(this.dependencies.getDevicePixelRatio(),2)}handleTextureLoaded(e,t){if(this.disposed||e!==this.textureLoadVersion){this.disposeTexture(t);return}this.configureTexture(t);const s=this.currentTexture;this.modelMeshes.length===0?this.buildModel(t):this.replaceModelTexture(t),this.currentTexture=t,this.textureRevision+=1,s&&s!==t&&this.disposeTexture(s)}configureTexture(e){e.magFilter=dn,e.minFilter=dn,e.generateMipmaps=!1,e.colorSpace=An,e.wrapS=Xi,e.wrapT=Xi}buildModel(e){this.disposeModel();const t=this.model==="slim",s=t?3:4,a=t?Gg:Hg,l=t?Wg:Vg,c=t?zR:BR,f=t?YR:$R,d=t?XR:WR,p=t?ZR:KR,m=Zn(e,8,8,8,0,22,0,OR),v=Zn(e,8,12,4,0,12,0,kR),y=Zn(e,s,12,4,a,12,0,c),S=Zn(e,s,12,4,l,12,0,f),E=Zn(e,4,12,4,Xg,0,0,HR),w=Zn(e,4,12,4,jg,0,0,qR),_={transparent:!0,expand:iA},x={transparent:!0,expand:rA},L=Zn(e,8,8,8,0,22,0,VR,_),b=Zn(e,8,12,4,0,12,0,GR,x),R=Zn(e,s,12,4,a,12,0,d,x),B=Zn(e,s,12,4,l,12,0,p,x),N=Zn(e,4,12,4,Xg,0,0,jR,x),F=Zn(e,4,12,4,jg,0,0,JR,x);this.parts={armL:S,armR:y,legL:w,legR:E,armLOL:B,armROL:R,legLOL:F,legROL:N,headOL:L,bodyOL:b},this.modelMeshes=[m,v,y,S,E,w,L,b,R,B,N,F],this.group.add(...this.modelMeshes),this.modelRevision+=1,this.applyOverlayVisibility(),this.applyCurrentPose()}replaceModelTexture(e){this.modelMeshes.forEach(t=>{t.material.forEach(s=>{const a=s.map;if(!a)return;const l=e.clone();l.magFilter=dn,l.minFilter=dn,l.generateMipmaps=!1,l.colorSpace=An,l.wrapS=a.wrapS,l.wrapT=a.wrapT,l.repeat.copy(a.repeat),l.offset.copy(a.offset),l.center.copy(a.center),l.rotation=a.rotation,l.flipY=a.flipY,l.needsUpdate=!0,s.map=l,s.needsUpdate=!0,this.disposeTexture(a)})})}applyCurrentPose(){const e=this.model==="slim";FR(this.pose,{armL:this.parts.armL,armR:this.parts.armR,legL:this.parts.legL,legR:this.parts.legR,armLOL:this.parts.armLOL,armROL:this.parts.armROL,legLOL:this.parts.legLOL,legROL:this.parts.legROL},{leftArmX:e?Wg:Vg,rightArmX:e?Gg:Hg})}applyOverlayVisibility(){this.getOverlayMeshes().forEach(e=>{e.visible=this.showOverlay})}getOverlayMeshes(){return[this.parts.headOL,this.parts.bodyOL,this.parts.armLOL,this.parts.armROL,this.parts.legLOL,this.parts.legROL].filter(e=>e!==null)}disposeModel(){this.modelMeshes.forEach(e=>{this.group.remove(e),e.geometry.dispose(),e.material.forEach(t=>{t.map&&(this.disposeTexture(t.map),t.map=null),t.dispose()})}),this.modelMeshes=[],this.parts=$g()}disposeTexture(e){this.disposedTextures.has(e)||(this.disposedTextures.add(e),e.dispose())}}function oA(i,e,t){return new aA(i,e,t)}function lA(i){return{code:"preview_texture_load_failed",category:"preview",message:`Failed to load preview texture: ${i.textureUrl}`,assetUrl:i.textureUrl,cause:i.cause}}function uA({texture:i,pose:e="default",model:t="classic",showOverlay:s=!0,autoRotate:a=!0,style:l,onError:c}){const f=X.useRef(null),d=X.useRef(null),p=X.useRef(c),m=X.useRef({textureUrl:i??kg,pose:e,model:t,showOverlay:s,autoRotate:a,onError:v=>p.current?.(lA(v))});return X.useEffect(()=>{p.current=c},[c]),X.useEffect(()=>{const v=f.current;if(!v)return;let y;try{y=oA(v,m.current)}catch(S){p.current?.({code:"preview_webgl_initialization_failed",category:"preview",message:"Failed to initialize the WebGL skin preview.",cause:S});return}return d.current=y,()=>{y.dispose(),d.current===y&&(d.current=null)}},[]),X.useEffect(()=>{d.current?.setTexture(i??kg)},[i]),X.useEffect(()=>{d.current?.setModel(t)},[t]),X.useEffect(()=>{d.current?.setPose(e)},[e]),X.useEffect(()=>{d.current?.setShowOverlay(s)},[s]),X.useEffect(()=>{d.current?.setAutoRotate(a)},[a]),$.jsx("div",{ref:f,style:{width:"100%",height:"100%",minHeight:0,position:"relative",touchAction:"none",...l??{}}})}const r_=["en","pl"],ma="en",Yg={en:{"app.title":"SkinCrafter","nav.wardrobe":"Wardrobe","nav.skinView":"Skin View","nav.language":"Language","nav.workInProgress":"Work in progress","panel.preview":"Preview","panel.customization":"Customization","panel.loadSkin":"Load Minecraft Skin","action.changePose":"Change Pose","action.hideOverlay":"Hide Overlay","action.showOverlay":"Show Overlay","action.disableAutoRotate":"Stop Rotation","action.enableAutoRotate":"Start Rotation","action.download":"Download","action.downloadSkin":"Download character skin","action.dragLayer":"Drag layer","action.moveLayerUp":"Move layer up","action.moveLayerDown":"Move layer down","action.loadSkin":"Load Skin","action.loading":"Loading...","error.assetLoad":"A skin texture could not be loaded. Check the selected assets and try again.","error.generation":"The skin could not be generated. Change the selection and try again.","error.initialSkin":"The supplied skin is not a valid 64x64 Minecraft PNG.","error.preview":"The 3D preview could not be loaded. Skin editing and download may still be available.","skinView.player":"Player","skinView.username":"Minecraft username","category.race":"Character Race","category.sex":"Sex","category.skinColor":"Skin Color","category.eyes":"Eyes","category.eyesColor":"Eye Color","category.hair":"Hair","category.hairColor":"Hair Color","category.hat":"Hat","category.shirt":"Shirt","category.pants":"Pants","category.shoes":"Shoes","category.accessory":"Accessory","option.none":"None","option.sex.Male":"Male","option.sex.Female":"Female","option.race.Human":"Human","option.race.Bear":"Bear","option.race.Orc":"Orc","option.race.Zombie":"Zombie","option.race.Template":"Template","option.eyes.Classic":"Classic","option.eyes.Small":"Small","option.eyes.Big":"Big","option.hat.Duck":"Duck","option.shirt.Hoodie":"Hoodie","option.pants.Pants":"Pants","option.color.blue":"Blue","option.color.green":"Green","option.color.brown":"Brown","option.color.blond":"Blond","option.color.black":"Black"},pl:{"app.title":"SkinCrafter","nav.wardrobe":"Kreator","nav.skinView":"Podglad","nav.language":"Jezyk","nav.workInProgress":"Produkt w trakcie prac","panel.preview":"Podglad","panel.customization":"Personalizacja","panel.loadSkin":"Wczytaj skin Minecraft","action.changePose":"Zmien Poze","action.hideOverlay":"Ukryj Warstwe","action.showOverlay":"Pokaz Warstwe","action.disableAutoRotate":"Zatrzymaj Obrot","action.enableAutoRotate":"Wlacz Obrot","action.download":"Pobierz","action.downloadSkin":"Pobierz skin postaci","action.dragLayer":"Przeciagnij warstwe","action.moveLayerUp":"Przesun warstwe wyzej","action.moveLayerDown":"Przesun warstwe nizej","action.loadSkin":"Wczytaj Skin","action.loading":"Wczytywanie...","error.assetLoad":"Nie udalo sie wczytac tekstury skina. Sprawdz wybrane elementy i sprobuj ponownie.","error.generation":"Nie udalo sie wygenerowac skina. Zmien wybor i sprobuj ponownie.","error.initialSkin":"Przekazany skin nie jest prawidlowym plikiem PNG Minecraft 64x64.","error.preview":"Nie udalo sie uruchomic podgladu 3D. Edycja i pobieranie skina moga nadal dzialac.","skinView.player":"Gracz","skinView.username":"Nazwa gracza Minecraft","category.race":"Rasa Postaci","category.sex":"Plec","category.skinColor":"Kolor Skory","category.eyes":"Oczy","category.eyesColor":"Kolor Oczu","category.hair":"Wlosy","category.hairColor":"Kolor Wlosow","category.hat":"Czapka","category.shirt":"Koszulka","category.pants":"Spodnie","category.shoes":"Buty","category.accessory":"Dodatek","option.none":"Brak","option.sex.Male":"Mezczyzna","option.sex.Female":"Kobieta","option.race.Human":"Czlowiek","option.race.Bear":"Niedzwiedz","option.race.Orc":"Ork","option.race.Zombie":"Zombie","option.race.Template":"Szablon","option.eyes.Classic":"Klasyczne","option.eyes.Small":"Male","option.eyes.Big":"Duze","option.hat.Duck":"Kaczka","option.shirt.Hoodie":"Bluza","option.pants.Pants":"Spodnie","option.color.blue":"Niebieski","option.color.green":"Zielony","option.color.brown":"Brazowy","option.color.blond":"Blond","option.color.black":"Czarny"}};function cA(i){return!!i&&r_.includes(i)}function So(i,e){return Yg[i][e]??Yg[ma][e]??e}const fA=i=>So(ma,i);function dA(i){return i.code==="asset_load_failed"?"error.assetLoad":i.code==="invalid_initial_skin"?"error.initialSkin":i.category==="preview"?"error.preview":"error.generation"}function s_({texture:i,model:e="classic",footerHeight:t=0,t:s=fA,onSave:a,canSave:l,generationStatus:c,generationError:f,onError:d}){const[p,m]=X.useState("default"),[v,y]=X.useState(!0),[S,E]=X.useState(!0),[w,_]=X.useState(null),x=()=>{m(A=>A==="default"?"tpose":A==="tpose"?"walking":"default")},L=()=>{y(A=>!A)},b=()=>{E(A=>!A)},R=l??!!i,B=()=>{if(!i||!R)return;const A=document.createElement("a");A.href=i,A.download="skincrafter-skin.png",A.click()},N=()=>{if(R){if(a){a();return}B()}},F=X.useCallback(A=>{_(A),d?.(A)},[d]);X.useEffect(()=>{_(A=>A?.code==="preview_texture_load_failed"?null:A)},[i]);const W=c==="error"&&f?f:w,P={"--skincrafter-preview-bottom-offset":`${Math.max(0,t)}px`};return $.jsxs(e_,{title:s("panel.preview"),icon:"fa-eye",children:[$.jsx("div",{className:"skincrafter-preview-surface overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full",style:P,children:$.jsx("div",{className:"flex justify-center items-center model-placeholder h-full",children:$.jsx(uA,{texture:i,pose:p,model:e,showOverlay:v,autoRotate:S,onError:F})})}),W&&$.jsx("p",{className:"mt-3 text-sm font-semibold skincrafter-error-text",role:"alert",children:s(dA(W))}),$.jsxs("div",{className:"mt-4 preview-actions",children:[$.jsx(Jl,{className:"skincrafter-secondary-action",icon:"fa-arrows-rotate","aria-label":s("action.changePose"),onClick:x,children:s("action.changePose")}),$.jsx(Jl,{className:"skincrafter-secondary-action",icon:"fa-layer-group","aria-label":s(v?"action.hideOverlay":"action.showOverlay"),onClick:L,children:s(v?"action.hideOverlay":"action.showOverlay")}),$.jsx(Jl,{className:"skincrafter-secondary-action",icon:S?"fa-pause":"fa-play","aria-label":s(S?"action.disableAutoRotate":"action.enableAutoRotate"),onClick:b,children:s(S?"action.disableAutoRotate":"action.enableAutoRotate")}),$.jsx(Jl,{className:"skincrafter-secondary-action disabled:opacity-50 disabled:cursor-not-allowed",icon:"fa-download","aria-label":s("action.downloadSkin"),onClick:N,disabled:!R,children:s("action.download")})]})]})}function hA({left:i,right:e}){return $.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:i}),$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:e})]})}function pA({heading:i,icon:e,iconClassName:t="skincrafter-category-icon",className:s="",children:a,...l}){return $.jsxs("div",{className:`option-card skincrafter-surface p-4 pixel-border relative ${i?"pt-5":""} ${s}`,...l,children:[i&&$.jsxs("h3",{className:"font-medium mb-2 flex items-center absolute -top-3 left-4 px-2 skincrafter-surface skincrafter-heading z-10",children:[e&&$.jsx(ss,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),i]}),a]})}const mA=["None","Duck"];function a_(i,e){return i==="Duck"?os("textures/hat/duck.png",e):null}const gA=["None","Pants"];function o_(i,e){return i==="Pants"?os("textures/bottom/pants.png",e):null}const l_={Human:{Male:"textures/race/human/male.png",Female:"textures/race/human/female.png"},Bear:{Male:"textures/race/bear/male.png"},Orc:{Male:"textures/race/orc/male.png"},Zombie:{Male:"textures/race/zombie/male.png"},Template:{None:"textures/race/template/none.png"}};function u_(i){return Object.keys(l_[i])}function c_(i,e,t){const s=l_[i],a=u_(i)[0],l=s[e]??s[a];return l?os(l,t):""}const vA=["Human","Bear","Orc","Zombie"],_A=["None","Hoodie"];function f_(i,e){return i==="Hoodie"?os("textures/top/male/hoodie.png",e):null}const d_={Human:["#D5BAAA","#E0AC69","#C68642"],Bear:["#5D4037","#8D6E63","#A1887F"],Orc:["#558B2F","#7CB342"],Zombie:["#556B2F"],Template:["#FFFFFF"]},cs=[{id:"race",labelKey:"category.race",icon:"fa-user-tag",control:"choice"},{id:"sex",labelKey:"category.sex",icon:"fa-venus-mars",control:"choice"},{id:"skinColor",labelKey:"category.skinColor",icon:"fa-palette",control:"color"},{id:"eyes",labelKey:"category.eyes",icon:"fa-eye",control:"choice"},{id:"eyesColor",labelKey:"category.eyesColor",icon:"fa-eye-dropper",control:"color"},{id:"hair",labelKey:"category.hair",icon:"fa-scissors",control:"choice"},{id:"hairColor",labelKey:"category.hairColor",icon:"fa-fill-drip",control:"color"},{id:"hat",labelKey:"category.hat",icon:"fa-hat-cowboy",control:"choice"},{id:"shirt",labelKey:"category.shirt",icon:"fa-shirt",control:"choice"},{id:"pants",labelKey:"category.pants",icon:"fa-person",control:"choice"},{id:"shoes",labelKey:"category.shoes",icon:"fa-shoe-prints",control:"choice"},{id:"accessory",labelKey:"category.accessory",icon:"fa-gem",control:"choice"}],br={race:"Human",sex:"Male",skinColor:d_.Human[0],eyes:"Classic",eyesColor:"#2F5D9B",hair:"None",hairColor:"#4A2F20",hat:"None",shirt:"None",pants:"None",shoes:"None",accessory:"None"},hu=["hat","shirt","pants","shoes","accessory"],Ld={id:"None",labelKey:"option.none",texture:null},xA={Male:{id:"Male",labelKey:"option.sex.Male",texture:null},Female:{id:"Female",labelKey:"option.sex.Female",texture:null},None:Ld};function ia(i,e,t){if(i==="race")return vA.map(s=>({id:s,labelKey:`option.race.${s}`,texture:c_(s,"Male",t)}));if(i==="sex")return u_(e.race).map(s=>xA[s]);if(i==="skinColor"){const s=e.race;return d_[s].map(a=>({id:a,labelKey:`option.skinColor.${a}`,color:a}))}return i==="eyes"?[{id:"Classic",labelKey:"option.eyes.Classic",texture:os("textures/eyes/clasic.png",t)},{id:"Small",labelKey:"option.eyes.Small",texture:os("textures/eyes/small.png",t)},{id:"Big",labelKey:"option.eyes.Big",texture:os("textures/eyes/big.png",t)}]:i==="eyesColor"?[{id:"#2F5D9B",labelKey:"option.color.blue",color:"#2F5D9B"},{id:"#2F8F4E",labelKey:"option.color.green",color:"#2F8F4E"},{id:"#5B3A29",labelKey:"option.color.brown",color:"#5B3A29"}]:i==="hair"?[Ld]:i==="hairColor"?[{id:"#4A2F20",labelKey:"option.color.brown",color:"#4A2F20"},{id:"#D6B15D",labelKey:"option.color.blond",color:"#D6B15D"},{id:"#1F1A17",labelKey:"option.color.black",color:"#1F1A17"}]:i==="hat"?mA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.hat.${s}`,texture:a_(s,t)})):i==="shirt"?_A.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.shirt.${s}`,texture:f_(s,t)})):i==="pants"?gA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.pants.${s}`,texture:o_(s,t)})):[Ld]}function Eu(i){const e={...br,...i??{}};ia("race",e).map(s=>s.id).includes(e.race)||(e.race=br.race);const t=ia("skinColor",e).map(s=>s.id);return t.includes(e.skinColor)||(e.skinColor=t[0]??br.skinColor),cs.forEach(s=>{const a=ia(s.id,e).map(l=>l.id);a.includes(e[s.id])||(e[s.id]=a[0]??"None")}),e}function Lr(i){const e=new Set(hu),t=[];return(i??[]).forEach(s=>{e.has(s)&&!t.includes(s)&&t.push(s)}),hu.forEach(s=>{t.includes(s)||t.push(s)}),t}function h_(i,e,t){if(i==="race")return{url:c_(e.race,e.sex,t),tint:e.skinColor};if(i==="hat")return a_(e.hat,t);if(i==="shirt"){const s=f_(e.shirt,t);return s?{url:s}:null}if(i==="pants"){const s=o_(e.pants,t);return s?{url:s}:null}if(i==="eyes"){const s=ia("eyes",e,t).find(a=>a.id===e.eyes);return s?.texture?{url:s.texture,tint:e.eyesColor}:null}return ia(i,e,t).find(s=>s.id===e[i])?.texture??null}function p_(i){return["race","sex","eyes","hair",...Lr(i)]}function yA(i,e=hu,t){return p_(e).map(s=>h_(s,i,t))}function SA(i,e,t,s){const a=new Set(t),l=c=>c==="race"?a.has("race")||a.has("sex")||a.has("skinColor"):c==="sex"?!1:c==="eyes"?a.has("eyes")||a.has("eyesColor"):c==="hair"?a.has("hair")||a.has("hairColor"):a.has(c);return p_(e).filter(l).map(c=>h_(c,i,s))}const Hf=i=>hu.includes(i);function EA({appearance:i,textureLayerOrder:e,onAppearanceChange:t,onLayerOrderChange:s,t:a,assetBaseUrl:l}){const[c,f]=X.useState(null),{fixedCategories:d,layerCategories:p}=X.useMemo(()=>{const _=new Map(cs.map(b=>[b.id,b])),x=cs.filter(b=>!Hf(b.id)),L=e.map(b=>_.get(b)).filter(b=>!!b);return{fixedCategories:x,layerCategories:L}},[e]),m=(_,x)=>{const L=e.indexOf(_),b=L+x;if(L<0||b<0||b>=e.length)return;const R=[...e];[R[L],R[b]]=[R[b],R[L]],s(R)},v=(_,x)=>{f(x),_.dataTransfer.effectAllowed="move",_.dataTransfer.setData("text/plain",x)},y=()=>{f(null)},S=(_,x)=>{!c||c===x||(_.preventDefault(),_.dataTransfer.dropEffect="move")},E=(_,x)=>{_.preventDefault();const L=c??_.dataTransfer.getData("text/plain");if(f(null),!Hf(L))return;const b=L;if(b===x)return;const R=e.filter(N=>N!==b),B=R.indexOf(x);B<0||(R.splice(B,0,b),s(R))},w=_=>{const x=ia(_.id,i,l),L=Hf(_.id)?_.id:null,b=L?e.indexOf(L):-1;return $.jsxs(pA,{heading:a(_.labelKey),icon:_.icon,className:`wardrobe-option-card p-2.5 pt-6 ${L?"layer-order-card":""} ${L===c?"is-dragging":""}`,"data-layer-id":L??void 0,onDragOver:L?R=>S(R,L):void 0,onDrop:L?R=>E(R,L):void 0,children:[L&&$.jsxs("div",{className:"layer-order-controls",children:[$.jsx("button",{type:"button",className:"layer-order-handle","aria-label":`${a("action.dragLayer")} ${a(_.labelKey)}`,title:a("action.dragLayer"),draggable:!0,onDragStart:R=>v(R,L),onDragEnd:y,children:$.jsx(ss,{name:"fa-grip-vertical"})}),$.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${a("action.moveLayerUp")} ${a(_.labelKey)}`,title:a("action.moveLayerUp"),disabled:b<=0,onClick:()=>m(L,-1),children:$.jsx(ss,{name:"fa-chevron-up"})}),$.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${a("action.moveLayerDown")} ${a(_.labelKey)}`,title:a("action.moveLayerDown"),disabled:b>=e.length-1,onClick:()=>m(L,1),children:$.jsx(ss,{name:"fa-chevron-down"})})]}),$.jsx("div",{className:_.control==="color"?"mt-2 flex flex-wrap gap-1.5":"mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1.5",role:"group","aria-label":a(_.labelKey),children:x.map(R=>{const B=i[_.id]===R.id;return _.control==="color"?$.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border ${B?"is-selected":""}`,style:{backgroundColor:R.color??R.id},"aria-label":a(R.labelKey),"aria-pressed":B,onClick:()=>t(_.id,R.id),children:B&&$.jsx(ss,{name:"fa-check"})},R.id):$.jsx("button",{type:"button",className:`pixel-button min-h-8 px-2 py-1 border text-xs leading-tight transition-colors ${B?"skincrafter-option-selected":"skincrafter-secondary-action"}`,"aria-pressed":B,onClick:()=>t(_.id,R.id),children:a(R.labelKey)},R.id)})})]},_.id)};return $.jsx(e_,{title:a("panel.customization"),icon:"fa-sliders",className:"overflow-visible md:overflow-hidden customization-panel p-3",children:$.jsxs("div",{className:"space-y-1.5 options-container md:flex-1 md:min-h-0",children:[d.map(w),$.jsx("div",{className:"layer-order-list space-y-1.5",children:p.map(w)})]})})}const qg=[137,80,78,71,13,10,26,10],pu=64;class pi extends Error{cause;constructor(e,t){super(e),this.name="InvalidInitialSkinError",this.cause=t}}function MA(i){let e="";for(let t=0;t<i.length;t+=32768){const s=i.subarray(t,Math.min(t+32768,i.length));e+=String.fromCharCode(...s)}return`data:image/png;base64,${btoa(e)}`}function wA(i){let e=2166136261;for(const t of i)e^=t,e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}function TA(i){if(i.length<24)throw new pi("Initial skin is not a valid PNG file.");for(let a=0;a<qg.length;a+=1)if(i[a]!==qg[a])throw new pi("Initial skin is not a valid PNG file.");const e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=e.getUint32(8),s=String.fromCharCode(i[12],i[13],i[14],i[15]);if(t!==13||s!=="IHDR")throw new pi("Initial skin PNG is missing a valid IHDR header.");return{width:e.getUint32(16),height:e.getUint32(20)}}async function RA(i){return typeof i.arrayBuffer=="function"?new Uint8Array(await i.arrayBuffer()):new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{if(!(s.result instanceof ArrayBuffer)){t(new Error("Blob reader did not return an ArrayBuffer."));return}e(new Uint8Array(s.result))},s.onerror=()=>t(s.error??new Error("Blob reader failed.")),s.readAsArrayBuffer(i)})}async function AA(i){await new Promise((e,t)=>{const s=new Image;s.onload=()=>{const a=s.naturalWidth||s.width,l=s.naturalHeight||s.height;if(s.onload=null,s.onerror=null,a!==pu||l!==pu){t(new pi("Initial skin must be a 64x64 Minecraft PNG."));return}e()},s.onerror=a=>{s.onload=null,s.onerror=null,t(new pi("Initial skin PNG could not be decoded.",a))},s.src=i})}async function CA(i,e){if(i.type&&i.type.toLowerCase()!=="image/png")throw new pi("Initial skin must use the image/png MIME type.");let t;try{t=await RA(i)}catch(l){throw new pi("Initial skin data could not be read.",l)}const s=TA(t);if(s.width!==pu||s.height!==pu)throw new pi("Initial skin must be a 64x64 Minecraft PNG.");const a=MA(t);return await AA(a),{dataUrl:a,fingerprint:wA(t),model:e}}function bA(i){const[e,t]=i.split(",",2),s=e.match(/^data:([^;]+);base64$/)?.[1]??"image/png",a=atob(t??""),l=new Uint8Array(a.length);for(let c=0;c<a.length;c+=1)l[c]=a.charCodeAt(c);return new Blob([l],{type:s})}function PA(i,e,t,s=e.sex==="Female"?"slim":"classic"){const a=bA(i),l=new File([a],"skincrafter-skin.png",{type:"image/png"});return{blob:a,file:l,dataUrl:i,metadata:{width:64,height:64,mimeType:"image/png",model:s,appearance:{...e},layerOrder:[...t]}}}const to=1,LA=new Map([[0,i=>({...i,schemaVersion:1})]]);function Kg(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function Ar(i){return{success:!1,error:{code:"invalid_state",message:i}}}function Zg(i){return{success:!1,error:{code:"unsupported_schema_version",message:`Unsupported SkinCrafter state schema version: ${i}.`,schemaVersion:i}}}function DA(i){return{schemaVersion:to,appearance:Eu(i.appearance),layerOrder:Lr(i.layerOrder)}}function m_(i){const e=DA(i);return{...e,appearance:{...e.appearance},layerOrder:[...e.layerOrder]}}function g_(i){if(!Kg(i))return Ar("SkinCrafter persisted state must be an object.");const e=[],t=i.schemaVersion;let s,a;if(t===void 0)s=null,e.push({code:"legacy_unversioned",message:"Migrated legacy unversioned SkinCrafter state."}),a={...i,schemaVersion:0};else{if(typeof t!="number"||!Number.isInteger(t)||t<0)return Ar("SkinCrafter schemaVersion must be a non-negative integer.");if(s=t,s>to)return Zg(s);a={...i}}let l=s??0;for(;l<to;){const E=LA.get(l);if(!E)return Zg(l);const w=l+1;a=E(a),e.push({code:"schema_version_migrated",message:`Migrated SkinCrafter state schema from version ${l} to ${w}.`,from:l,to:w}),l=w}if(a.schemaVersion!==to)return Ar("SkinCrafter state migration did not produce the current schema version.");const c=s===null||s===0;if(!Kg(a.appearance))return Ar("SkinCrafter persisted appearance must be an object.");const f={};for(const E of cs){const w=a.appearance[E.id];if(w===void 0){if(!c)return Ar(`SkinCrafter persisted appearance is missing ${E.id}.`);continue}if(typeof w!="string")return Ar(`SkinCrafter persisted appearance.${E.id} must be a string.`);f[E.id]=w}const d=a.layerOrder;if(d===void 0&&!c)return Ar("SkinCrafter persisted state is missing layerOrder.");if(d!==void 0&&(!Array.isArray(d)||d.some(E=>typeof E!="string")))return Ar("SkinCrafter persisted layerOrder must be an array of strings.");const p=Eu(f);for(const E of cs){const w=a.appearance[E.id],_=p[E.id];w!==_&&e.push({code:"appearance_value_defaulted",message:`Normalized persisted appearance.${E.id} to a supported value.`,path:E.id,from:w,to:_})}const m=d??[],v=Lr(m);(m.length!==v.length||m.some((E,w)=>E!==v[w]))&&e.push({code:"layer_order_normalized",message:"Normalized persisted layer order by removing invalid/duplicate layers and appending missing layers.",path:"layerOrder",from:[...m],to:[...v]});const y={appearance:p,layerOrder:v},S=m_(y);return{success:!0,state:y,serializedState:S,sourceSchemaVersion:s,migrated:s!==to||e.length>0,notices:e}}class v_ extends Error{assetUrl;cause;constructor(e,t){super(`Failed to load texture asset: ${e}`),this.name="TextureLoadError",this.assetUrl=e,this.cause=t}}const Jg=64,UA=4,NA=i=>i?typeof i=="string"?{url:i}:i.url?{url:i.url,tint:i.tint}:null:null;function IA(i){const e=i.replace("#",""),t=e.length===3?e.split("").map(s=>`${s}${s}`).join(""):e;return{r:Number.parseInt(t.slice(0,2),16),g:Number.parseInt(t.slice(2,4),16),b:Number.parseInt(t.slice(4,6),16),a:255}}function FA(i){const e=i.r===0&&i.g===0&&i.b===0,t=i.r===255&&i.g===255&&i.b===255;return e||t}function OA(i){if(i.a===0||FA(i))return!1;const e=Math.min(i.r,i.g,i.b);return Math.max(i.r,i.g,i.b)-e<=UA}function kA(i,e){if(!OA(i))return i;const t=(i.r+i.g+i.b)/765;return{r:Math.round(e.r*t),g:Math.round(e.g*t),b:Math.round(e.b*t),a:i.a}}function BA(i,e){const t=new Uint8ClampedArray(i);for(let s=0;s<t.length;s+=4){const a=kA({r:i[s],g:i[s+1],b:i[s+2],a:i[s+3]},e);t[s]=a.r,t[s+1]=a.g,t[s+2]=a.b,t[s+3]=a.a}return t}const zA=(i,e,t,s,a)=>{const l=document.createElement("canvas");l.width=s,l.height=a;const c=l.getContext("2d",{willReadFrequently:!0});if(!c){i.drawImage(e,0,0,s,a);return}c.imageSmoothingEnabled=!1,c.drawImage(e,0,0,s,a);const f=c.getImageData(0,0,s,a);f.data.set(BA(f.data,IA(t))),c.putImageData(f,0,0),i.drawImage(l,0,0)},HA=(i,e,t,s,a)=>{if(!t){i.drawImage(e,0,0,s,a);return}zA(i,e,t,s,a)};async function Qg(i){const e=i.map(NA).filter(c=>!!c),t=e.map(c=>c.url);if(t.length===0)throw new Error("No texture assets were available for skin composition.");const s=await Promise.all(t.map(c=>new Promise((f,d)=>{const p=new Image;p.crossOrigin="anonymous",p.onload=()=>f(p),p.onerror=m=>d(new v_(c,m)),p.src=c}))),a=document.createElement("canvas");a.width=Jg,a.height=Jg;const l=a.getContext("2d",{willReadFrequently:!0});if(!l)throw new Error("Could not create a 2D canvas context for skin composition.");return l.imageSmoothingEnabled=!1,s.forEach((c,f)=>{const d=e[f];HA(l,c,d.tint,a.width,a.height)}),a.toDataURL("image/png")}function ev(i){return{appearance:Eu(i?.appearance??null),layerOrder:Lr(i?.layerOrder)}}function VA(i){return{appearance:{...i.appearance},layerOrder:[...i.layerOrder]}}function GA(i){return i?{"--skincrafter-accent":i.accent,"--skincrafter-accent-strong":i.accentStrong,"--skincrafter-surface":i.surface,"--skincrafter-text":i.text,"--skincrafter-muted":i.muted,"--skincrafter-border":i.border}:{}}function WA(i){return i instanceof v_?{code:"asset_load_failed",category:"asset",message:`Failed to load skin texture asset: ${i.assetUrl}`,assetUrl:i.assetUrl,cause:i.cause}:{code:"generation_failed",category:"generation",message:"Failed to generate the current skin.",cause:i}}function tv(i){return{code:"invalid_initial_skin",category:"input",message:i instanceof pi?i.message:"Initial skin must be a decodable 64x64 Minecraft PNG.",cause:i instanceof pi?i.cause??i:i}}function Qn(i,...e){if(i)try{i(...e)}catch(t){console.error("SkinCrafter host callback failed",t)}}function XA({locale:i=ma,value:e,initialSkin:t,persistence:s,assetBaseUrl:a,onStateChange:l,onSkinChange:c,onSave:f,onStatusChange:d,onError:p,className:m="",style:v,theme:y,previewBottomOffset:S=0}){const[E,w]=X.useState(()=>ev(e||t||(s?.load()??null))),[_,x]=X.useState(null),[L,b]=X.useState({key:null,status:"idle",error:null}),[R,B]=X.useState(null),[N,F]=X.useState({source:null,model:null,status:"idle",error:null}),[W,P]=X.useState([]),A=X.useRef(c),H=X.useRef(d),oe=X.useRef(p),Q=X.useRef(null),le=X.useRef(!1),me=X.useRef(null),ne=X.useMemo(()=>e?ev(e):null,[e])??E,ve=X.useRef(ne);ve.current=ne;const V=X.useCallback(O=>So(i,O),[i]),ue=t?.image??null,ae=t?.model??null,I=ue!==null,re=X.useCallback(O=>{e||w(O),l?.(O)},[l,e]),Oe=X.useCallback((O,Te)=>{I&&P(pe=>pe.includes(O)?pe:[...pe,O]),re({...ne,appearance:Eu({...ne.appearance,[O]:Te})})},[I,re,ne]),ee=X.useCallback(O=>{re({...ne,layerOrder:Lr(O)})},[re,ne]);X.useEffect(()=>{A.current=c},[c]),X.useEffect(()=>{H.current=d},[d]),X.useEffect(()=>{oe.current=p},[p]),X.useEffect(()=>{if(!ue){Q.current=null,le.current=!1,B(null),P([]),F({source:null,model:null,status:"idle",error:null});return}if(!ae){le.current=!1;const pe=tv(new pi("Initial skin model must be either classic or slim."));F({source:ue,model:null,status:"error",error:pe}),Qn(H.current,"error"),Qn(oe.current,pe);return}let O=!0;const Te=VA(ve.current);return F({source:ue,model:ae,status:"loading",error:null}),Qn(H.current,"generating"),CA(ue,ae).then(pe=>{if(!O)return;const Pe=Q.current,ye=Pe!==null&&Pe.fingerprint===pe.fingerprint&&Pe.model===pe.model,he=ye?{...Pe,source:ue}:{source:ue,dataUrl:pe.dataUrl,fingerprint:pe.fingerprint,model:pe.model,baselineState:Te};le.current=ye,Q.current=he,B(he),ye||P([]),F({source:ue,model:ae,status:"ready",error:null}),ye&&Qn(H.current,"ready")}).catch(pe=>{if(!O)return;le.current=!1;const Pe=tv(pe);F({source:ue,model:ae,status:"error",error:Pe}),Qn(H.current,"error"),Qn(oe.current,Pe)}),()=>{O=!1}},[ue,ae]),X.useEffect(()=>{e||s?.save(m_(ne))},[s,ne,e]);const fe=I&&ae!==null&&R?.source===ue&&R.model===ae,Re=X.useMemo(()=>{if(!fe||!R)return[];const O=new Set(W);for(const Te of cs)ne.appearance[Te.id]!==R.baselineState.appearance[Te.id]&&O.add(Te.id);return cs.map(Te=>Te.id).filter(Te=>O.has(Te))},[W,fe,R,ne.appearance]),{race:Ee,sex:Ae,skinColor:Ke,eyes:Ve,eyesColor:Mt,hair:Rt,hairColor:ct,hat:k,shirt:Wt,pants:pt,shoes:xt,accessory:Ge}=ne.appearance,ft=JSON.stringify(ne.layerOrder),qe=JSON.stringify(Re),tt=a?.replace(/\/+$/,"")||void 0,It=Re.includes("sex"),D=fe&&R&&!It?R.model==="slim"?"Female":"Male":Ae,T=fe&&R&&!It?R.model:Ae==="Female"?"slim":"classic",J=fe?R?.fingerprint??null:null,de=fe?R?.dataUrl??null:null,ge=JSON.stringify([Ee,Ae,Ke,Ve,Mt,Rt,ct,k,Wt,pt,xt,Ge,ft,tt??null,J,T,qe]),ce=_?.key===ge?_:null,je=I&&N.source===ue&&N.model===ae,be=I&&(!je||N.status==="loading"),ke=je&&N.status==="error",$e=be?"generating":ke?"error":L.key===ge?L.status:"idle",_e=ke?N.error:L.key===ge?L.error:null;X.useEffect(()=>{if(I&&!fe)return;if(le.current){const he=me.current===ge;if(le.current=!1,he)return}let O=!0;const Te={race:Ee,sex:Ae,skinColor:Ke,eyes:Ve,eyesColor:Mt,hair:Rt,hairColor:ct,hat:k,shirt:Wt,pants:pt,shoes:xt,accessory:Ge},pe={...Te,sex:D},Pe=JSON.parse(ft),ye=JSON.parse(qe);return b({key:ge,status:"generating",error:null}),Qn(H.current,"generating"),(async()=>{let he;try{let Ie;if(de){const et=SA(pe,Pe,ye,tt);Ie=et.filter(Boolean).length===0?de:await Qg([de,...et])}else{const et=yA(Te,Pe,tt);Ie=await Qg(et)}he={dataUrl:Ie,output:PA(Ie,Te,Pe,T)}}catch(Ie){if(!O)return;const et=WA(Ie);b({key:ge,status:"error",error:et}),Qn(H.current,"error"),Qn(oe.current,et);return}O&&(me.current=ge,x({key:ge,texture:he.dataUrl,output:he.output}),b({key:ge,status:"ready",error:null}),Qn(A.current,he.output),Qn(H.current,"ready"))})(),()=>{O=!1}},[Ge,qe,tt,D,T,Ve,Mt,ge,Rt,ct,I,k,de,fe,ft,pt,Ee,Ae,Wt,xt,Ke]);const Ne=ce?.output??null,nt=ce?.texture??null,Je=$e==="ready"&&Ne!==null,Le=f&&Je&&Ne?()=>f(Ne):void 0,st=X.useCallback(O=>{Qn(oe.current,O)},[]);return $.jsx("div",{className:`skincrafter-editor h-full min-h-0 w-full ${m}`.trim(),style:{...GA(y),...v},"data-testid":"skincrafter-editor","data-skincrafter-locale":i,"data-skincrafter-generation-status":$e,children:$.jsx(hA,{left:$.jsx(s_,{texture:nt,model:T,footerHeight:S,t:V,onSave:Le,canSave:Je,generationStatus:$e,generationError:_e,onError:st}),right:$.jsx(EA,{appearance:ne.appearance,textureLayerOrder:ne.layerOrder,onAppearanceChange:Oe,onLayerOrderChange:ee,t:V,assetBaseUrl:a})})})}function jA({texture:i,model:e="classic",locale:t=ma,bottomOffset:s=0,className:a="",style:l,theme:c,onError:f}){const d=m=>So(t,m),p={"--skincrafter-accent":c?.accent,"--skincrafter-accent-strong":c?.accentStrong,"--skincrafter-surface":c?.surface,"--skincrafter-text":c?.text,"--skincrafter-muted":c?.muted,"--skincrafter-border":c?.border};return $.jsx("div",{className:`skincrafter-editor h-full min-h-0 ${a}`.trim(),style:{...p,...l},children:$.jsx(s_,{texture:i,model:e,footerHeight:s,t:d,onError:f})})}const $A=iv.forwardRef((i,e)=>$.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:$.jsx("div",{className:"container mx-auto text-center text-sm",children:$.jsx("p",{children:"(c) 2026 SkinCrafter. All rights reserved."})})})),YA=i=>So(ma,i),qA=({logoSrc:i="/logo.png",logoAlt:e="SkinCrafter logo",language:t="en",onLanguageChange:s,t:a=YA})=>$.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:$.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[$.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[$.jsx("div",{className:"h-8 w-36 flex items-center",children:$.jsx("img",{src:i,alt:e,className:"h-auto max-h-8 w-full object-contain",style:{imageRendering:"pixelated"}})}),$.jsx("span",{className:"pixel-border bg-amber-500 px-2 py-0.5 text-xs font-bold uppercase tracking-normal text-green-950 shadow-sm",title:a("nav.workInProgress"),"aria-label":a("nav.workInProgress"),children:"WIP"})]}),$.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[$.jsx(Xf,{to:"/",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.wardrobe")}),$.jsx(Xf,{to:"/mcskinview",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.skinView")}),s&&$.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[$.jsx("span",{children:a("nav.language")}),$.jsx("select",{className:"bg-green-700 text-white pixel-border px-2 py-1",value:t,onChange:l=>s(l.target.value),"aria-label":a("nav.language"),children:r_.map(l=>$.jsx("option",{value:l,children:l.toUpperCase()},l))})]})]})]})}),__="skincrafterLanguage",KA=()=>{const i=localStorage.getItem(__);return cA(i)?i:ma};function x_({children:i}){const[e,t]=X.useState(()=>KA()),s=X.useRef(null),[a,l]=X.useState(0),c=X.useCallback(d=>So(e,d),[e]),f=X.useCallback(d=>{t(d)},[]);return X.useEffect(()=>{localStorage.setItem(__,e)},[e]),X.useEffect(()=>{const d=()=>{l(s.current?.offsetHeight??0)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),$.jsxs("div",{className:"max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col",children:[$.jsx("div",{className:"shrink-0",children:$.jsx(qA,{language:e,onLanguageChange:f,t:c})}),i({footerHeight:a,language:e,t:c}),$.jsx("div",{className:"shrink-0",children:$.jsx($A,{ref:s})})]})}const ro="skincrafterState",th="wardrobeAppearance",nh="wardrobeLayerOrder";function po(i){return JSON.parse(i)}function y_(i){const e=g_(i);return e.success?{state:e.state,serializedState:e.serializedState}:null}function S_(i){let e;try{e=po(i)}catch{return{kind:"invalid"}}const t=g_(e);return t.success?{kind:"loaded",value:{state:t.state,serializedState:t.serializedState}}:t.error.code==="unsupported_schema_version"?{kind:"unsupported"}:{kind:"invalid"}}function ZA(){const i=localStorage.getItem(th),e=localStorage.getItem(nh);if(i===null||e===null)return null;try{return y_({appearance:po(i),layerOrder:po(e)})}catch{return null}}function JA(){let i;const e=localStorage.getItem(th);if(e)try{i=po(e)}catch{i={...br}}else i={race:localStorage.getItem("wardrobeRace")??br.race,skinColor:localStorage.getItem("wardrobeSkinColor")??br.skinColor,hat:localStorage.getItem("wardrobeHat")??br.hat};let t=Lr(null);const s=localStorage.getItem(nh);if(s)try{t=po(s)}catch{t=Lr(null)}const a=y_({appearance:i,layerOrder:t});return a?(localStorage.setItem(ro,JSON.stringify(a.serializedState)),a.state):{appearance:{...br},layerOrder:Lr(null)}}function QA(i,e){return JSON.stringify(i)===JSON.stringify(e)}function eC(){const i=localStorage.getItem(ro);return i===null?!1:S_(i).kind==="unsupported"}const tC={load:()=>{const i=localStorage.getItem(ro);if(i===null)return JA();const e=S_(i);if(e.kind==="unsupported"||e.kind==="invalid")return null;const t=ZA();return t&&!QA(t.serializedState,e.value.serializedState)?(localStorage.setItem(ro,JSON.stringify(t.serializedState)),t.state):e.value.state},save:i=>{eC()||(localStorage.setItem(ro,JSON.stringify(i)),localStorage.setItem(th,JSON.stringify(i.appearance)),localStorage.setItem(nh,JSON.stringify(i.layerOrder)))}},nC=i=>i.replace(/^http:\/\//,"https://"),iC=i=>{if(!i)return null;try{return JSON.parse(atob(i.value))}catch{return null}};async function rC(i){const e=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(i)}`);if(!e.ok)throw new Error("User not found");const t=await e.json(),s=t.data?.player;if(!t.success||!s)throw new Error("User not found");const a=s.properties?.find(f=>f.name==="textures"),l=iC(a)?.textures?.SKIN,c=l?.url??s.skin_texture;if(!c)throw new Error("Skin texture not found");return{texture:nC(c),model:l?.metadata?.model==="slim"?"slim":"classic"}}const sC=()=>{const[i,e]=X.useState(""),[t,s]=X.useState(null),[a,l]=X.useState(null),[c,f]=X.useState(!1),d=X.useCallback(m=>{e(m.target.value)},[]),p=X.useCallback(async m=>{if(m.preventDefault(),!i.trim()){l("Please enter a username.");return}l(null),s(null),f(!0);try{s(await rC(i.trim()))}catch(v){l(v instanceof Error?v.message:"An unexpected error occurred."),s(null)}finally{f(!1)}},[i]);return $.jsx(x_,{children:({footerHeight:m,language:v,t:y})=>$.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:$.jsx(jA,{texture:t?.texture??null,model:t?.model??"classic",locale:v,bottomOffset:m})}),$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:$.jsxs("section",{className:"mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4",children:[$.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[$.jsx("i",{className:"fas fa-user mr-2 text-green-700"})," ",y("panel.loadSkin")]}),$.jsxs("div",{className:"space-y-4 md:flex-1 md:min-h-0 overflow-y-auto pr-2",children:[$.jsxs("div",{className:"option-card bg-white shadow p-4 pixel-border relative pt-5",children:[$.jsxs("h3",{className:"font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10",children:[$.jsx("i",{className:"fas fa-id-card mr-2 text-amber-600"})," ",y("skinView.player")]}),$.jsxs("form",{onSubmit:p,className:"mt-4 flex flex-col gap-3",children:[$.jsx("input",{type:"text",value:i,onChange:d,placeholder:y("skinView.username"),"aria-label":y("skinView.username"),className:"w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"}),$.jsxs("button",{type:"submit",disabled:c,className:"pixel-button p-2 pixel-border bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white",children:[$.jsx("i",{className:"fas fa-cloud-arrow-down mr-2"}),y(c?"action.loading":"action.loadSkin")]})]})]}),a&&$.jsx("div",{className:"option-card bg-red-50 text-red-700 shadow p-4 pixel-border",children:a})]})]})})]})})},aC=()=>$.jsx(x_,{children:({footerHeight:i,language:e})=>$.jsx(XA,{locale:e,persistence:tC,previewBottomOffset:i})}),oC=()=>$.jsxs(uy,{children:[$.jsx(Gf,{path:"/",element:$.jsx(aC,{})}),$.jsx(Gf,{path:"/mcskinview",element:$.jsx(sC,{})})]});ux.createRoot(document.getElementById("root")).render($.jsx(iv.StrictMode,{children:$.jsx(Uy,{children:$.jsx(oC,{})})}));
