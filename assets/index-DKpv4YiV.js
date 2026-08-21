(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function iv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var tf={exports:{}},qo={},nf={exports:{}},_t={};var wm;function tx(){if(wm)return _t;wm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(I,se,Fe){this.props=I,this.context=se,this.refs=w,this.updater=Fe||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,se){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,se,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=y.prototype;function L(I,se,Fe){this.props=I,this.context=se,this.refs=w,this.updater=Fe||S}var P=L.prototype=new x;P.constructor=L,E(P,y.prototype),P.isPureReactComponent=!0;var C=Array.isArray,H=Object.prototype.hasOwnProperty,F={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function j(I,se,Fe){var N,te={},ne=null,pe=null;if(se!=null)for(N in se.ref!==void 0&&(pe=se.ref),se.key!==void 0&&(ne=""+se.key),se)H.call(se,N)&&!O.hasOwnProperty(N)&&(te[N]=se[N]);var ye=arguments.length-2;if(ye===1)te.children=Fe;else if(1<ye){for(var Ae=Array(ye),Ue=0;Ue<ye;Ue++)Ae[Ue]=arguments[Ue+2];te.children=Ae}if(I&&I.defaultProps)for(N in ye=I.defaultProps,ye)te[N]===void 0&&(te[N]=ye[N]);return{$$typeof:i,type:I,key:ne,ref:pe,props:te,_owner:F.current}}function b(I,se){return{$$typeof:i,type:I.type,key:se,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===i}function z(I){var se={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Fe){return se[Fe]})}var ue=/\/+/g;function J(I,se){return typeof I=="object"&&I!==null&&I.key!=null?z(""+I.key):se.toString(36)}function ce(I,se,Fe,N,te){var ne=typeof I;(ne==="undefined"||ne==="boolean")&&(I=null);var pe=!1;if(I===null)pe=!0;else switch(ne){case"string":case"number":pe=!0;break;case"object":switch(I.$$typeof){case i:case e:pe=!0}}if(pe)return pe=I,te=te(pe),I=N===""?"."+J(pe,0):N,C(te)?(Fe="",I!=null&&(Fe=I.replace(ue,"$&/")+"/"),ce(te,se,Fe,"",function(Ue){return Ue})):te!=null&&(R(te)&&(te=b(te,Fe+(!te.key||pe&&pe.key===te.key?"":(""+te.key).replace(ue,"$&/")+"/")+I)),se.push(te)),1;if(pe=0,N=N===""?".":N+":",C(I))for(var ye=0;ye<I.length;ye++){ne=I[ye];var Ae=N+J(ne,ye);pe+=ce(ne,se,Fe,Ae,te)}else if(Ae=_(I),typeof Ae=="function")for(I=Ae.call(I),ye=0;!(ne=I.next()).done;)ne=ne.value,Ae=N+J(ne,ye++),pe+=ce(ne,se,Fe,Ae,te);else if(ne==="object")throw se=String(I),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return pe}function ve(I,se,Fe){if(I==null)return I;var N=[],te=0;return ce(I,N,"","",function(ne){return se.call(Fe,ne,te++)}),N}function ie(I){if(I._status===-1){var se=I._result;se=se(),se.then(function(Fe){(I._status===0||I._status===-1)&&(I._status=1,I._result=Fe)},function(Fe){(I._status===0||I._status===-1)&&(I._status=2,I._result=Fe)}),I._status===-1&&(I._status=0,I._result=se)}if(I._status===1)return I._result.default;throw I._result}var xe={current:null},V={transition:null},fe={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:V,ReactCurrentOwner:F};function le(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:ve,forEach:function(I,se,Fe){ve(I,function(){se.apply(this,arguments)},Fe)},count:function(I){var se=0;return ve(I,function(){se++}),se},toArray:function(I){return ve(I,function(se){return se})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},_t.Component=y,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=L,_t.StrictMode=s,_t.Suspense=d,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,_t.act=le,_t.cloneElement=function(I,se,Fe){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var N=E({},I.props),te=I.key,ne=I.ref,pe=I._owner;if(se!=null){if(se.ref!==void 0&&(ne=se.ref,pe=F.current),se.key!==void 0&&(te=""+se.key),I.type&&I.type.defaultProps)var ye=I.type.defaultProps;for(Ae in se)H.call(se,Ae)&&!O.hasOwnProperty(Ae)&&(N[Ae]=se[Ae]===void 0&&ye!==void 0?ye[Ae]:se[Ae])}var Ae=arguments.length-2;if(Ae===1)N.children=Fe;else if(1<Ae){ye=Array(Ae);for(var Ue=0;Ue<Ae;Ue++)ye[Ue]=arguments[Ue+2];N.children=ye}return{$$typeof:i,type:I.type,key:te,ref:ne,props:N,_owner:pe}},_t.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},_t.createElement=j,_t.createFactory=function(I){var se=j.bind(null,I);return se.type=I,se},_t.createRef=function(){return{current:null}},_t.forwardRef=function(I){return{$$typeof:f,render:I}},_t.isValidElement=R,_t.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:ie}},_t.memo=function(I,se){return{$$typeof:p,type:I,compare:se===void 0?null:se}},_t.startTransition=function(I){var se=V.transition;V.transition={};try{I()}finally{V.transition=se}},_t.unstable_act=le,_t.useCallback=function(I,se){return xe.current.useCallback(I,se)},_t.useContext=function(I){return xe.current.useContext(I)},_t.useDebugValue=function(){},_t.useDeferredValue=function(I){return xe.current.useDeferredValue(I)},_t.useEffect=function(I,se){return xe.current.useEffect(I,se)},_t.useId=function(){return xe.current.useId()},_t.useImperativeHandle=function(I,se,Fe){return xe.current.useImperativeHandle(I,se,Fe)},_t.useInsertionEffect=function(I,se){return xe.current.useInsertionEffect(I,se)},_t.useLayoutEffect=function(I,se){return xe.current.useLayoutEffect(I,se)},_t.useMemo=function(I,se){return xe.current.useMemo(I,se)},_t.useReducer=function(I,se,Fe){return xe.current.useReducer(I,se,Fe)},_t.useRef=function(I){return xe.current.useRef(I)},_t.useState=function(I){return xe.current.useState(I)},_t.useSyncExternalStore=function(I,se,Fe){return xe.current.useSyncExternalStore(I,se,Fe)},_t.useTransition=function(){return xe.current.useTransition()},_t.version="18.3.1",_t}var Tm;function Dd(){return Tm||(Tm=1,nf.exports=tx()),nf.exports}var Rm;function nx(){if(Rm)return qo;Rm=1;var i=Dd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,p){var m,v={},_=null,S=null;p!==void 0&&(_=""+p),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)s.call(d,m)&&!l.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:_,ref:S,props:v,_owner:o.current}}return qo.Fragment=t,qo.jsx=c,qo.jsxs=c,qo}var Am;function ix(){return Am||(Am=1,tf.exports=nx()),tf.exports}var $=ix(),X=Dd();const rv=iv(X);var Pl={},rf={exports:{}},Fn={},sf={exports:{}},of={};var Cm;function rx(){return Cm||(Cm=1,(function(i){function e(V,fe){var le=V.length;V.push(fe);e:for(;0<le;){var I=le-1>>>1,se=V[I];if(0<o(se,fe))V[I]=fe,V[le]=se,le=I;else break e}}function t(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var fe=V[0],le=V.pop();if(le!==fe){V[0]=le;e:for(var I=0,se=V.length,Fe=se>>>1;I<Fe;){var N=2*(I+1)-1,te=V[N],ne=N+1,pe=V[ne];if(0>o(te,le))ne<se&&0>o(pe,te)?(V[I]=pe,V[ne]=le,I=ne):(V[I]=te,V[N]=le,I=N);else if(ne<se&&0>o(pe,le))V[I]=pe,V[ne]=le,I=ne;else break e}}return fe}function o(V,fe){var le=V.sortIndex-fe.sortIndex;return le!==0?le:V.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var d=[],p=[],m=1,v=null,_=3,S=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(V){for(var fe=t(p);fe!==null;){if(fe.callback===null)s(p);else if(fe.startTime<=V)s(p),fe.sortIndex=fe.expirationTime,e(d,fe);else break;fe=t(p)}}function C(V){if(w=!1,P(V),!E)if(t(d)!==null)E=!0,ie(H);else{var fe=t(p);fe!==null&&xe(C,fe.startTime-V)}}function H(V,fe){E=!1,w&&(w=!1,x(j),j=-1),S=!0;var le=_;try{for(P(fe),v=t(d);v!==null&&(!(v.expirationTime>fe)||V&&!z());){var I=v.callback;if(typeof I=="function"){v.callback=null,_=v.priorityLevel;var se=I(v.expirationTime<=fe);fe=i.unstable_now(),typeof se=="function"?v.callback=se:v===t(d)&&s(d),P(fe)}else s(d);v=t(d)}if(v!==null)var Fe=!0;else{var N=t(p);N!==null&&xe(C,N.startTime-fe),Fe=!1}return Fe}finally{v=null,_=le,S=!1}}var F=!1,O=null,j=-1,b=5,R=-1;function z(){return!(i.unstable_now()-R<b)}function ue(){if(O!==null){var V=i.unstable_now();R=V;var fe=!0;try{fe=O(!0,V)}finally{fe?J():(F=!1,O=null)}}else F=!1}var J;if(typeof L=="function")J=function(){L(ue)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ve=ce.port2;ce.port1.onmessage=ue,J=function(){ve.postMessage(null)}}else J=function(){y(ue,0)};function ie(V){O=V,F||(F=!0,J())}function xe(V,fe){j=y(function(){V(i.unstable_now())},fe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(V){V.callback=null},i.unstable_continueExecution=function(){E||S||(E=!0,ie(H))},i.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<V?Math.floor(1e3/V):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(V){switch(_){case 1:case 2:case 3:var fe=3;break;default:fe=_}var le=_;_=fe;try{return V()}finally{_=le}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(V,fe){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var le=_;_=V;try{return fe()}finally{_=le}},i.unstable_scheduleCallback=function(V,fe,le){var I=i.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?I+le:I):le=I,V){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=le+se,V={id:m++,callback:fe,priorityLevel:V,startTime:le,expirationTime:se,sortIndex:-1},le>I?(V.sortIndex=le,e(p,V),t(d)===null&&V===t(p)&&(w?(x(j),j=-1):w=!0,xe(C,le-I))):(V.sortIndex=se,e(d,V),E||S||(E=!0,ie(H))),V},i.unstable_shouldYield=z,i.unstable_wrapCallback=function(V){var fe=_;return function(){var le=_;_=fe;try{return V.apply(this,arguments)}finally{_=le}}}})(of)),of}var bm;function sx(){return bm||(bm=1,sf.exports=rx()),sf.exports}var Pm;function ox(){if(Pm)return Fn;Pm=1;var i=Dd(),e=sx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function _(n){return d.call(v,n)?!0:d.call(m,n)?!1:p.test(n)?v[n]=!0:(m[n]=!0,!1)}function S(n,r,a,u){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,a,u){if(r===null||typeof r>"u"||S(n,r,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,a,u,h,g,M){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,L);y[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,L);y[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,L);y[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,a,u){var h=y.hasOwnProperty(r)?y[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,a,h,u)&&(a=null),u||h===null?_(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(r=h.attributeName,u=h.attributeNamespace,a===null?n.removeAttribute(r):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?n.setAttributeNS(u,r,a):n.setAttribute(r,a))))}var C=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),F=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),V=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,I;function se(n){if(I===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+n}var Fe=!1;function N(n,r){if(!n||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(oe){var u=oe}Reflect.construct(n,[],r)}else{try{r.call()}catch(oe){u=oe}n.call(r.prototype)}else{try{throw Error()}catch(oe){u=oe}n()}}catch(oe){if(oe&&u&&typeof oe.stack=="string"){for(var h=oe.stack.split(`
`),g=u.stack.split(`
`),M=h.length-1,U=g.length-1;1<=M&&0<=U&&h[M]!==g[U];)U--;for(;1<=M&&0<=U;M--,U--)if(h[M]!==g[U]){if(M!==1||U!==1)do if(M--,U--,0>U||h[M]!==g[U]){var B=`
`+h[M].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=M&&0<=U);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function te(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=N(n.type,!1),n;case 11:return n=N(n.type.render,!1),n;case 1:return n=N(n.type,!0),n;default:return""}}function ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case F:return"Portal";case b:return"Profiler";case j:return"StrictMode";case J:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case ue:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ve:return r=n.displayName||null,r!==null?r:ne(n.type)||"Memo";case ie:r=n._payload,n=n._init;try{return ne(n(r))}catch{}}return null}function pe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(r);case 8:return r===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ue(n){var r=Ae(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(M){u=""+M,g.call(this,M)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function xt(n){n._valueTracker||(n._valueTracker=Ue(n))}function At(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),u="";return n&&(u=Ae(n)?n.checked?"true":"false":n.value),n=u,n!==a?(r.setValue(n),!0):!1}function ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function k(n,r){var a=r.checked;return le({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Wt(n,r){var a=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;a=ye(r.value!=null?r.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function mt(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function Et(n,r){mt(n,r);var a=ye(r.value),u=r.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?dt(n,r.type,a):r.hasOwnProperty("defaultValue")&&dt(n,r.type,ye(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function We(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function dt(n,r,a){(r!=="number"||ft(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ke=Array.isArray;function nt(n,r,a,u){if(n=n.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=r.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&u&&(n[a].defaultSelected=!0)}else{for(a=""+ye(a),r=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function It(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(Ke(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:ye(a)}}function T(n,r){var a=ye(r.value),u=ye(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function ee(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ge(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ge(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var de,$e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,u,h){MSApp.execUnsafeLocalFunction(function(){return n(r,a,u,h)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=de.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Pe(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){Ye.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),ze[r]=ze[n]})});function Ee(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||ze.hasOwnProperty(n)&&ze[n]?(""+r).trim():r+"px"}function Oe(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=Ee(a,r[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,h):n[a]=h}}var tt=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(n,r){if(r){if(tt[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Le(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var De=null,he=null,be=null;function Se(n){if(n=No(n)){if(typeof De!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Xa(r),De(n.stateNode,n.type,r))}}function me(n){he?be?be.push(n):be=[n]:he=n}function ke(){if(he){var n=he,r=be;if(be=he=null,Se(n),r)for(n=0;n<r.length;n++)Se(r[n])}}function Qe(n,r){return n(r)}function St(){}var ut=!1;function Pn(n,r,a){if(ut)return n(r,a);ut=!0;try{return Qe(n,r,a)}finally{ut=!1,(he!==null||be!==null)&&(St(),ke())}}function Sn(n,r){var a=n.stateNode;if(a===null)return null;var u=Xa(a);if(u===null)return null;a=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ds=!1;if(f)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){ds=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{ds=!1}function Ci(n,r,a,u,h,g,M,U,B){var oe=Array.prototype.slice.call(arguments,3);try{r.apply(a,oe)}catch(we){this.onError(we)}}var bi=!1,Ir=null,Fr=!1,er=null,Ma={onError:function(n){bi=!0,Ir=n}};function hs(n,r,a,u,h,g,M,U,B){bi=!1,Ir=null,Ci.apply(Ma,arguments)}function wa(n,r,a,u,h,g,M,U,B){if(hs.apply(this,arguments),bi){if(bi){var oe=Ir;bi=!1,Ir=null}else throw Error(t(198));Fr||(Fr=!0,er=oe)}}function mi(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ta(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ra(n){if(mi(n)!==n)throw Error(t(188))}function wu(n){var r=n.alternate;if(!r){if(r=mi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,u=r;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Ra(h),n;if(g===u)return Ra(h),r;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=h,u=g;else{for(var M=!1,U=h.child;U;){if(U===a){M=!0,a=h,u=g;break}if(U===u){M=!0,u=h,a=g;break}U=U.sibling}if(!M){for(U=g.child;U;){if(U===a){M=!0,a=g,u=h;break}if(U===u){M=!0,u=g,a=h;break}U=U.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Aa(n){return n=wu(n),n!==null?Ca(n):null}function Ca(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ca(n);if(r!==null)return r;n=n.sibling}return null}var ba=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,Y=e.unstable_shouldYield,ae=e.unstable_requestPaint,Z=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,Ve=e.unstable_NormalPriority,He=e.unstable_LowPriority,at=e.unstable_IdlePriority,ot=null,Xe=null;function gt(n){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(ot,n,void 0,(n.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:bt,Bt=Math.log,Ut=Math.LN2;function bt(n){return n>>>=0,n===0?32:31-(Bt(n)/Ut|0)|0}var et=64,Lt=4194304;function vt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tn(n,r){var a=n.pendingLanes;if(a===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,M=a&268435455;if(M!==0){var U=M&~h;U!==0?u=vt(U):(g&=M,g!==0&&(u=vt(g)))}else M=a&~h,M!==0?u=vt(M):g!==0&&(u=vt(g));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,g=r&-r,h>=g||h===16&&(g&4194240)!==0))return r;if((u&4)!==0&&(u|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)a=31-ht(r),h=1<<a,u|=n[a],r&=~h;return u}function tr(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,r){for(var a=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var M=31-ht(g),U=1<<M,B=h[M];B===-1?((U&a)===0||(U&u)!==0)&&(h[M]=tr(U,r)):B<=r&&(n.expiredLanes|=U),g&=~U}}function Pi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nt(){var n=et;return et<<=1,(et&4194240)===0&&(et=64),n}function hn(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function nn(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ht(r),n[r]=a}function un(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-ht(a),g=1<<h;r[h]=0,u[h]=-1,n[h]=-1,a&=~g}}function rn(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var u=31-ht(a),h=1<<u;h&r|n[u]&r&&(n[u]|=r),a&=~h}}var Mt=0;function gi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ih,Tu,rh,sh,oh,Ru=!1,Pa=[],nr=null,ir=null,rr=null,_o=new Map,xo=new Map,sr=[],M_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ah(n,r){switch(n){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":_o.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(r.pointerId)}}function yo(n,r,a,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},r!==null&&(r=No(r),r!==null&&Tu(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function w_(n,r,a,u,h){switch(r){case"focusin":return nr=yo(nr,n,r,a,u,h),!0;case"dragenter":return ir=yo(ir,n,r,a,u,h),!0;case"mouseover":return rr=yo(rr,n,r,a,u,h),!0;case"pointerover":var g=h.pointerId;return _o.set(g,yo(_o.get(g)||null,n,r,a,u,h)),!0;case"gotpointercapture":return g=h.pointerId,xo.set(g,yo(xo.get(g)||null,n,r,a,u,h)),!0}return!1}function lh(n){var r=Or(n.target);if(r!==null){var a=mi(r);if(a!==null){if(r=a.tag,r===13){if(r=Ta(a),r!==null){n.blockedOn=r,oh(n.priority,function(){rh(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function La(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Cu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);st=u,a.target.dispatchEvent(u),st=null}else return r=No(a),r!==null&&Tu(r),n.blockedOn=a,!1;r.shift()}return!0}function uh(n,r,a){La(n)&&a.delete(r)}function T_(){Ru=!1,nr!==null&&La(nr)&&(nr=null),ir!==null&&La(ir)&&(ir=null),rr!==null&&La(rr)&&(rr=null),_o.forEach(uh),xo.forEach(uh)}function So(n,r){n.blockedOn===r&&(n.blockedOn=null,Ru||(Ru=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,T_)))}function Eo(n){function r(h){return So(h,n)}if(0<Pa.length){So(Pa[0],n);for(var a=1;a<Pa.length;a++){var u=Pa[a];u.blockedOn===n&&(u.blockedOn=null)}}for(nr!==null&&So(nr,n),ir!==null&&So(ir,n),rr!==null&&So(rr,n),_o.forEach(r),xo.forEach(r),a=0;a<sr.length;a++)u=sr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<sr.length&&(a=sr[0],a.blockedOn===null);)lh(a),a.blockedOn===null&&sr.shift()}var ps=C.ReactCurrentBatchConfig,Da=!0;function R_(n,r,a,u){var h=Mt,g=ps.transition;ps.transition=null;try{Mt=1,Au(n,r,a,u)}finally{Mt=h,ps.transition=g}}function A_(n,r,a,u){var h=Mt,g=ps.transition;ps.transition=null;try{Mt=4,Au(n,r,a,u)}finally{Mt=h,ps.transition=g}}function Au(n,r,a,u){if(Da){var h=Cu(n,r,a,u);if(h===null)Xu(n,r,u,Ua,a),ah(n,u);else if(w_(h,n,r,a,u))u.stopPropagation();else if(ah(n,u),r&4&&-1<M_.indexOf(n)){for(;h!==null;){var g=No(h);if(g!==null&&ih(g),g=Cu(n,r,a,u),g===null&&Xu(n,r,u,Ua,a),g===h)break;h=g}h!==null&&u.stopPropagation()}else Xu(n,r,u,null,a)}}var Ua=null;function Cu(n,r,a,u){if(Ua=null,n=G(u),n=Or(n),n!==null)if(r=mi(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ta(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ua=n,null}function ch(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Re:return 1;case Ne:return 4;case Ve:case He:return 16;case at:return 536870912;default:return 16}default:return 16}}var or=null,bu=null,Na=null;function fh(){if(Na)return Na;var n,r=bu,a=r.length,u,h="value"in or?or.value:or.textContent,g=h.length;for(n=0;n<a&&r[n]===h[n];n++);var M=a-n;for(u=1;u<=M&&r[a-u]===h[g-u];u++);return Na=h.slice(n,1<u?1-u:void 0)}function Ia(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Fa(){return!0}function dh(){return!1}function kn(n){function r(a,u,h,g,M){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=M,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Fa:dh,this.isPropagationStopped=dh,this}return le(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),r}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=kn(ms),Mo=le({},ms,{view:0,detail:0}),C_=kn(Mo),Lu,Du,wo,Oa=le({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wo&&(wo&&n.type==="mousemove"?(Lu=n.screenX-wo.screenX,Du=n.screenY-wo.screenY):Du=Lu=0,wo=n),Lu)},movementY:function(n){return"movementY"in n?n.movementY:Du}}),hh=kn(Oa),b_=le({},Oa,{dataTransfer:0}),P_=kn(b_),L_=le({},Mo,{relatedTarget:0}),Uu=kn(L_),D_=le({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),U_=kn(D_),N_=le({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),I_=kn(N_),F_=le({},ms,{data:0}),ph=kn(F_),O_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=B_[n])?!!r[n]:!1}function Nu(){return z_}var H_=le({},Mo,{key:function(n){if(n.key){var r=O_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ia(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?k_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(n){return n.type==="keypress"?Ia(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ia(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),V_=kn(H_),G_=le({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=kn(G_),W_=le({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),X_=kn(W_),j_=le({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),$_=kn(j_),Y_=le({},Oa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),q_=kn(Y_),K_=[9,13,27,32],Iu=f&&"CompositionEvent"in window,To=null;f&&"documentMode"in document&&(To=document.documentMode);var Z_=f&&"TextEvent"in window&&!To,gh=f&&(!Iu||To&&8<To&&11>=To),vh=" ",_h=!1;function xh(n,r){switch(n){case"keyup":return K_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function J_(n,r){switch(n){case"compositionend":return yh(r);case"keypress":return r.which!==32?null:(_h=!0,vh);case"textInput":return n=r.data,n===vh&&_h?null:n;default:return null}}function Q_(n,r){if(gs)return n==="compositionend"||!Iu&&xh(n,r)?(n=fh(),Na=bu=or=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return gh&&r.locale!=="ko"?null:r.data;default:return null}}var e0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!e0[n.type]:r==="textarea"}function Eh(n,r,a,u){me(u),r=Va(r,"onChange"),0<r.length&&(a=new Pu("onChange","change",null,a,u),n.push({event:a,listeners:r}))}var Ro=null,Ao=null;function t0(n){zh(n,0)}function ka(n){var r=Ss(n);if(At(r))return n}function n0(n,r){if(n==="change")return r}var Mh=!1;if(f){var Fu;if(f){var Ou="oninput"in document;if(!Ou){var wh=document.createElement("div");wh.setAttribute("oninput","return;"),Ou=typeof wh.oninput=="function"}Fu=Ou}else Fu=!1;Mh=Fu&&(!document.documentMode||9<document.documentMode)}function Th(){Ro&&(Ro.detachEvent("onpropertychange",Rh),Ao=Ro=null)}function Rh(n){if(n.propertyName==="value"&&ka(Ao)){var r=[];Eh(r,Ao,n,G(n)),Pn(t0,r)}}function i0(n,r,a){n==="focusin"?(Th(),Ro=r,Ao=a,Ro.attachEvent("onpropertychange",Rh)):n==="focusout"&&Th()}function r0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ka(Ao)}function s0(n,r){if(n==="click")return ka(r)}function o0(n,r){if(n==="input"||n==="change")return ka(r)}function a0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ni=typeof Object.is=="function"?Object.is:a0;function Co(n,r){if(ni(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),u=Object.keys(r);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!d.call(r,h)||!ni(n[h],r[h]))return!1}return!0}function Ah(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ch(n,r){var a=Ah(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=r&&u>=r)return{node:a,offset:r-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ah(a)}}function bh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?bh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Ph(){for(var n=window,r=ft();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=ft(n.document)}return r}function ku(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function l0(n){var r=Ph(),a=n.focusedElem,u=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&bh(a.ownerDocument.documentElement,a)){if(u!==null&&ku(a)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=Ch(a,g);var M=Ch(a,u);h&&M&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(r),n.extend(M.node,M.offset)):(r.setEnd(M.node,M.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var u0=f&&"documentMode"in document&&11>=document.documentMode,vs=null,Bu=null,bo=null,zu=!1;function Lh(n,r,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zu||vs==null||vs!==ft(u)||(u=vs,"selectionStart"in u&&ku(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),bo&&Co(bo,u)||(bo=u,u=Va(Bu,"onSelect"),0<u.length&&(r=new Pu("onSelect","select",null,r,a),n.push({event:r,listeners:u}),r.target=vs)))}function Ba(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var _s={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},Hu={},Dh={};f&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function za(n){if(Hu[n])return Hu[n];if(!_s[n])return n;var r=_s[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Dh)return Hu[n]=r[a];return n}var Uh=za("animationend"),Nh=za("animationiteration"),Ih=za("animationstart"),Fh=za("transitionend"),Oh=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(n,r){Oh.set(n,r),l(r,[n])}for(var Vu=0;Vu<kh.length;Vu++){var Gu=kh[Vu],c0=Gu.toLowerCase(),f0=Gu[0].toUpperCase()+Gu.slice(1);ar(c0,"on"+f0)}ar(Uh,"onAnimationEnd"),ar(Nh,"onAnimationIteration"),ar(Ih,"onAnimationStart"),ar("dblclick","onDoubleClick"),ar("focusin","onFocus"),ar("focusout","onBlur"),ar(Fh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function Bh(n,r,a){var u=n.type||"unknown-event";n.currentTarget=a,wa(u,r,void 0,n),n.currentTarget=null}function zh(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],h=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var M=u.length-1;0<=M;M--){var U=u[M],B=U.instance,oe=U.currentTarget;if(U=U.listener,B!==g&&h.isPropagationStopped())break e;Bh(h,U,oe),g=B}else for(M=0;M<u.length;M++){if(U=u[M],B=U.instance,oe=U.currentTarget,U=U.listener,B!==g&&h.isPropagationStopped())break e;Bh(h,U,oe),g=B}}}if(Fr)throw n=er,Fr=!1,er=null,n}function Ot(n,r){var a=r[Zu];a===void 0&&(a=r[Zu]=new Set);var u=n+"__bubble";a.has(u)||(Hh(r,n,2,!1),a.add(u))}function Wu(n,r,a){var u=0;r&&(u|=4),Hh(a,n,u,r)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function Lo(n){if(!n[Ha]){n[Ha]=!0,s.forEach(function(a){a!=="selectionchange"&&(d0.has(a)||Wu(a,!1,n),Wu(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ha]||(r[Ha]=!0,Wu("selectionchange",!1,r))}}function Hh(n,r,a,u){switch(ch(r)){case 1:var h=R_;break;case 4:h=A_;break;default:h=Au}a=h.bind(null,r,a,n),h=void 0,!ds||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(r,a,{capture:!0,passive:h}):n.addEventListener(r,a,!0):h!==void 0?n.addEventListener(r,a,{passive:h}):n.addEventListener(r,a,!1)}function Xu(n,r,a,u,h){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var U=u.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(M===4)for(M=u.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===h||B.nodeType===8&&B.parentNode===h))return;M=M.return}for(;U!==null;){if(M=Or(U),M===null)return;if(B=M.tag,B===5||B===6){u=g=M;continue e}U=U.parentNode}}u=u.return}Pn(function(){var oe=g,we=G(a),Te=[];e:{var Me=Oh.get(n);if(Me!==void 0){var Be=Pu,je=n;switch(n){case"keypress":if(Ia(a)===0)break e;case"keydown":case"keyup":Be=V_;break;case"focusin":je="focus",Be=Uu;break;case"focusout":je="blur",Be=Uu;break;case"beforeblur":case"afterblur":Be=Uu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=P_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=X_;break;case Uh:case Nh:case Ih:Be=U_;break;case Fh:Be=$_;break;case"scroll":Be=C_;break;case"wheel":Be=q_;break;case"copy":case"cut":case"paste":Be=I_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=mh}var qe=(r&4)!==0,Yt=!qe&&n==="scroll",K=qe?Me!==null?Me+"Capture":null:Me;qe=[];for(var W=oe,Q;W!==null;){Q=W;var Ce=Q.stateNode;if(Q.tag===5&&Ce!==null&&(Q=Ce,K!==null&&(Ce=Sn(W,K),Ce!=null&&qe.push(Do(W,Ce,Q)))),Yt)break;W=W.return}0<qe.length&&(Me=new Be(Me,je,null,a,we),Te.push({event:Me,listeners:qe}))}}if((r&7)===0){e:{if(Me=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",Me&&a!==st&&(je=a.relatedTarget||a.fromElement)&&(Or(je)||je[Li]))break e;if((Be||Me)&&(Me=we.window===we?we:(Me=we.ownerDocument)?Me.defaultView||Me.parentWindow:window,Be?(je=a.relatedTarget||a.toElement,Be=oe,je=je?Or(je):null,je!==null&&(Yt=mi(je),je!==Yt||je.tag!==5&&je.tag!==6)&&(je=null)):(Be=null,je=oe),Be!==je)){if(qe=hh,Ce="onMouseLeave",K="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(qe=mh,Ce="onPointerLeave",K="onPointerEnter",W="pointer"),Yt=Be==null?Me:Ss(Be),Q=je==null?Me:Ss(je),Me=new qe(Ce,W+"leave",Be,a,we),Me.target=Yt,Me.relatedTarget=Q,Ce=null,Or(we)===oe&&(qe=new qe(K,W+"enter",je,a,we),qe.target=Q,qe.relatedTarget=Yt,Ce=qe),Yt=Ce,Be&&je)t:{for(qe=Be,K=je,W=0,Q=qe;Q;Q=xs(Q))W++;for(Q=0,Ce=K;Ce;Ce=xs(Ce))Q++;for(;0<W-Q;)qe=xs(qe),W--;for(;0<Q-W;)K=xs(K),Q--;for(;W--;){if(qe===K||K!==null&&qe===K.alternate)break t;qe=xs(qe),K=xs(K)}qe=null}else qe=null;Be!==null&&Vh(Te,Me,Be,qe,!1),je!==null&&Yt!==null&&Vh(Te,Yt,je,qe,!0)}}e:{if(Me=oe?Ss(oe):window,Be=Me.nodeName&&Me.nodeName.toLowerCase(),Be==="select"||Be==="input"&&Me.type==="file")var Ze=n0;else if(Sh(Me))if(Mh)Ze=o0;else{Ze=r0;var it=i0}else(Be=Me.nodeName)&&Be.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(Ze=s0);if(Ze&&(Ze=Ze(n,oe))){Eh(Te,Ze,a,we);break e}it&&it(n,Me,oe),n==="focusout"&&(it=Me._wrapperState)&&it.controlled&&Me.type==="number"&&dt(Me,"number",Me.value)}switch(it=oe?Ss(oe):window,n){case"focusin":(Sh(it)||it.contentEditable==="true")&&(vs=it,Bu=oe,bo=null);break;case"focusout":bo=Bu=vs=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,Lh(Te,a,we);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":Lh(Te,a,we)}var rt;if(Iu)e:{switch(n){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else gs?xh(n,a)&&(lt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(gh&&a.locale!=="ko"&&(gs||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&gs&&(rt=fh()):(or=we,bu="value"in or?or.value:or.textContent,gs=!0)),it=Va(oe,lt),0<it.length&&(lt=new ph(lt,n,null,a,we),Te.push({event:lt,listeners:it}),rt?lt.data=rt:(rt=yh(a),rt!==null&&(lt.data=rt)))),(rt=Z_?J_(n,a):Q_(n,a))&&(oe=Va(oe,"onBeforeInput"),0<oe.length&&(we=new ph("onBeforeInput","beforeinput",null,a,we),Te.push({event:we,listeners:oe}),we.data=rt))}zh(Te,r)})}function Do(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Va(n,r){for(var a=r+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Sn(n,a),g!=null&&u.unshift(Do(n,g,h)),g=Sn(n,r),g!=null&&u.push(Do(n,g,h))),n=n.return}return u}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Vh(n,r,a,u,h){for(var g=r._reactName,M=[];a!==null&&a!==u;){var U=a,B=U.alternate,oe=U.stateNode;if(B!==null&&B===u)break;U.tag===5&&oe!==null&&(U=oe,h?(B=Sn(a,g),B!=null&&M.unshift(Do(a,B,U))):h||(B=Sn(a,g),B!=null&&M.push(Do(a,B,U)))),a=a.return}M.length!==0&&n.push({event:r,listeners:M})}var h0=/\r\n?/g,p0=/\u0000|\uFFFD/g;function Gh(n){return(typeof n=="string"?n:""+n).replace(h0,`
`).replace(p0,"")}function Ga(n,r,a){if(r=Gh(r),Gh(n)!==r&&a)throw Error(t(425))}function Wa(){}var ju=null,$u=null;function Yu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var qu=typeof setTimeout=="function"?setTimeout:void 0,m0=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,g0=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(n){return Wh.resolve(null).then(n).catch(v0)}:qu;function v0(n){setTimeout(function(){throw n})}function Ku(n,r){var a=r,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){n.removeChild(h),Eo(r);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);Eo(r)}function lr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Xh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),vi="__reactFiber$"+ys,Uo="__reactProps$"+ys,Li="__reactContainer$"+ys,Zu="__reactEvents$"+ys,_0="__reactListeners$"+ys,x0="__reactHandles$"+ys;function Or(n){var r=n[vi];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Li]||a[vi]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Xh(n);n!==null;){if(a=n[vi])return a;n=Xh(n)}return r}n=a,a=n.parentNode}return null}function No(n){return n=n[vi]||n[Li],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xa(n){return n[Uo]||null}var Ju=[],Es=-1;function ur(n){return{current:n}}function kt(n){0>Es||(n.current=Ju[Es],Ju[Es]=null,Es--)}function Ft(n,r){Es++,Ju[Es]=n.current,n.current=r}var cr={},pn=ur(cr),Ln=ur(!1),kr=cr;function Ms(n,r){var a=n.type.contextTypes;if(!a)return cr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=r[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function Dn(n){return n=n.childContextTypes,n!=null}function ja(){kt(Ln),kt(pn)}function jh(n,r,a){if(pn.current!==cr)throw Error(t(168));Ft(pn,r),Ft(Ln,a)}function $h(n,r,a){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(t(108,pe(n)||"Unknown",h));return le({},a,u)}function $a(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||cr,kr=pn.current,Ft(pn,n),Ft(Ln,Ln.current),!0}function Yh(n,r,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=$h(n,r,kr),u.__reactInternalMemoizedMergedChildContext=n,kt(Ln),kt(pn),Ft(pn,n)):kt(Ln),Ft(Ln,a)}var Di=null,Ya=!1,Qu=!1;function qh(n){Di===null?Di=[n]:Di.push(n)}function y0(n){Ya=!0,qh(n)}function fr(){if(!Qu&&Di!==null){Qu=!0;var n=0,r=Mt;try{var a=Di;for(Mt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Di=null,Ya=!1}catch(h){throw Di!==null&&(Di=Di.slice(n+1)),ba(Re,fr),h}finally{Mt=r,Qu=!1}}return null}var ws=[],Ts=0,qa=null,Ka=0,Wn=[],Xn=0,Br=null,Ui=1,Ni="";function zr(n,r){ws[Ts++]=Ka,ws[Ts++]=qa,qa=n,Ka=r}function Kh(n,r,a){Wn[Xn++]=Ui,Wn[Xn++]=Ni,Wn[Xn++]=Br,Br=n;var u=Ui;n=Ni;var h=32-ht(u)-1;u&=~(1<<h),a+=1;var g=32-ht(r)+h;if(30<g){var M=h-h%5;g=(u&(1<<M)-1).toString(32),u>>=M,h-=M,Ui=1<<32-ht(r)+h|a<<h|u,Ni=g+n}else Ui=1<<g|a<<h|u,Ni=n}function ec(n){n.return!==null&&(zr(n,1),Kh(n,1,0))}function tc(n){for(;n===qa;)qa=ws[--Ts],ws[Ts]=null,Ka=ws[--Ts],ws[Ts]=null;for(;n===Br;)Br=Wn[--Xn],Wn[Xn]=null,Ni=Wn[--Xn],Wn[Xn]=null,Ui=Wn[--Xn],Wn[Xn]=null}var Bn=null,zn=null,zt=!1,ii=null;function Zh(n,r){var a=qn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Jh(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Bn=n,zn=lr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Bn=n,zn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Br!==null?{id:Ui,overflow:Ni}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=qn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,Bn=n,zn=null,!0):!1;default:return!1}}function nc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ic(n){if(zt){var r=zn;if(r){var a=r;if(!Jh(n,r)){if(nc(n))throw Error(t(418));r=lr(a.nextSibling);var u=Bn;r&&Jh(n,r)?Zh(u,a):(n.flags=n.flags&-4097|2,zt=!1,Bn=n)}}else{if(nc(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Bn=n}}}function Qh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Za(n){if(n!==Bn)return!1;if(!zt)return Qh(n),zt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Yu(n.type,n.memoizedProps)),r&&(r=zn)){if(nc(n))throw ep(),Error(t(418));for(;r;)Zh(n,r),r=lr(r.nextSibling)}if(Qh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){zn=lr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}zn=null}}else zn=Bn?lr(n.stateNode.nextSibling):null;return!0}function ep(){for(var n=zn;n;)n=lr(n.nextSibling)}function Rs(){zn=Bn=null,zt=!1}function rc(n){ii===null?ii=[n]:ii.push(n)}var S0=C.ReactCurrentBatchConfig;function Io(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(M){var U=h.refs;M===null?delete U[g]:U[g]=M},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ja(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function tp(n){var r=n._init;return r(n._payload)}function np(n){function r(K,W){if(n){var Q=K.deletions;Q===null?(K.deletions=[W],K.flags|=16):Q.push(W)}}function a(K,W){if(!n)return null;for(;W!==null;)r(K,W),W=W.sibling;return null}function u(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function h(K,W){return K=xr(K,W),K.index=0,K.sibling=null,K}function g(K,W,Q){return K.index=Q,n?(Q=K.alternate,Q!==null?(Q=Q.index,Q<W?(K.flags|=2,W):Q):(K.flags|=2,W)):(K.flags|=1048576,W)}function M(K){return n&&K.alternate===null&&(K.flags|=2),K}function U(K,W,Q,Ce){return W===null||W.tag!==6?(W=qc(Q,K.mode,Ce),W.return=K,W):(W=h(W,Q),W.return=K,W)}function B(K,W,Q,Ce){var Ze=Q.type;return Ze===O?we(K,W,Q.props.children,Ce,Q.key):W!==null&&(W.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ie&&tp(Ze)===W.type)?(Ce=h(W,Q.props),Ce.ref=Io(K,W,Q),Ce.return=K,Ce):(Ce=El(Q.type,Q.key,Q.props,null,K.mode,Ce),Ce.ref=Io(K,W,Q),Ce.return=K,Ce)}function oe(K,W,Q,Ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==Q.containerInfo||W.stateNode.implementation!==Q.implementation?(W=Kc(Q,K.mode,Ce),W.return=K,W):(W=h(W,Q.children||[]),W.return=K,W)}function we(K,W,Q,Ce,Ze){return W===null||W.tag!==7?(W=Yr(Q,K.mode,Ce,Ze),W.return=K,W):(W=h(W,Q),W.return=K,W)}function Te(K,W,Q){if(typeof W=="string"&&W!==""||typeof W=="number")return W=qc(""+W,K.mode,Q),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case H:return Q=El(W.type,W.key,W.props,null,K.mode,Q),Q.ref=Io(K,null,W),Q.return=K,Q;case F:return W=Kc(W,K.mode,Q),W.return=K,W;case ie:var Ce=W._init;return Te(K,Ce(W._payload),Q)}if(Ke(W)||fe(W))return W=Yr(W,K.mode,Q,null),W.return=K,W;Ja(K,W)}return null}function Me(K,W,Q,Ce){var Ze=W!==null?W.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ze!==null?null:U(K,W,""+Q,Ce);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case H:return Q.key===Ze?B(K,W,Q,Ce):null;case F:return Q.key===Ze?oe(K,W,Q,Ce):null;case ie:return Ze=Q._init,Me(K,W,Ze(Q._payload),Ce)}if(Ke(Q)||fe(Q))return Ze!==null?null:we(K,W,Q,Ce,null);Ja(K,Q)}return null}function Be(K,W,Q,Ce,Ze){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return K=K.get(Q)||null,U(W,K,""+Ce,Ze);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case H:return K=K.get(Ce.key===null?Q:Ce.key)||null,B(W,K,Ce,Ze);case F:return K=K.get(Ce.key===null?Q:Ce.key)||null,oe(W,K,Ce,Ze);case ie:var it=Ce._init;return Be(K,W,Q,it(Ce._payload),Ze)}if(Ke(Ce)||fe(Ce))return K=K.get(Q)||null,we(W,K,Ce,Ze,null);Ja(W,Ce)}return null}function je(K,W,Q,Ce){for(var Ze=null,it=null,rt=W,lt=W=0,an=null;rt!==null&&lt<Q.length;lt++){rt.index>lt?(an=rt,rt=null):an=rt.sibling;var Tt=Me(K,rt,Q[lt],Ce);if(Tt===null){rt===null&&(rt=an);break}n&&rt&&Tt.alternate===null&&r(K,rt),W=g(Tt,W,lt),it===null?Ze=Tt:it.sibling=Tt,it=Tt,rt=an}if(lt===Q.length)return a(K,rt),zt&&zr(K,lt),Ze;if(rt===null){for(;lt<Q.length;lt++)rt=Te(K,Q[lt],Ce),rt!==null&&(W=g(rt,W,lt),it===null?Ze=rt:it.sibling=rt,it=rt);return zt&&zr(K,lt),Ze}for(rt=u(K,rt);lt<Q.length;lt++)an=Be(rt,K,lt,Q[lt],Ce),an!==null&&(n&&an.alternate!==null&&rt.delete(an.key===null?lt:an.key),W=g(an,W,lt),it===null?Ze=an:it.sibling=an,it=an);return n&&rt.forEach(function(yr){return r(K,yr)}),zt&&zr(K,lt),Ze}function qe(K,W,Q,Ce){var Ze=fe(Q);if(typeof Ze!="function")throw Error(t(150));if(Q=Ze.call(Q),Q==null)throw Error(t(151));for(var it=Ze=null,rt=W,lt=W=0,an=null,Tt=Q.next();rt!==null&&!Tt.done;lt++,Tt=Q.next()){rt.index>lt?(an=rt,rt=null):an=rt.sibling;var yr=Me(K,rt,Tt.value,Ce);if(yr===null){rt===null&&(rt=an);break}n&&rt&&yr.alternate===null&&r(K,rt),W=g(yr,W,lt),it===null?Ze=yr:it.sibling=yr,it=yr,rt=an}if(Tt.done)return a(K,rt),zt&&zr(K,lt),Ze;if(rt===null){for(;!Tt.done;lt++,Tt=Q.next())Tt=Te(K,Tt.value,Ce),Tt!==null&&(W=g(Tt,W,lt),it===null?Ze=Tt:it.sibling=Tt,it=Tt);return zt&&zr(K,lt),Ze}for(rt=u(K,rt);!Tt.done;lt++,Tt=Q.next())Tt=Be(rt,K,lt,Tt.value,Ce),Tt!==null&&(n&&Tt.alternate!==null&&rt.delete(Tt.key===null?lt:Tt.key),W=g(Tt,W,lt),it===null?Ze=Tt:it.sibling=Tt,it=Tt);return n&&rt.forEach(function(ex){return r(K,ex)}),zt&&zr(K,lt),Ze}function Yt(K,W,Q,Ce){if(typeof Q=="object"&&Q!==null&&Q.type===O&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case H:e:{for(var Ze=Q.key,it=W;it!==null;){if(it.key===Ze){if(Ze=Q.type,Ze===O){if(it.tag===7){a(K,it.sibling),W=h(it,Q.props.children),W.return=K,K=W;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ie&&tp(Ze)===it.type){a(K,it.sibling),W=h(it,Q.props),W.ref=Io(K,it,Q),W.return=K,K=W;break e}a(K,it);break}else r(K,it);it=it.sibling}Q.type===O?(W=Yr(Q.props.children,K.mode,Ce,Q.key),W.return=K,K=W):(Ce=El(Q.type,Q.key,Q.props,null,K.mode,Ce),Ce.ref=Io(K,W,Q),Ce.return=K,K=Ce)}return M(K);case F:e:{for(it=Q.key;W!==null;){if(W.key===it)if(W.tag===4&&W.stateNode.containerInfo===Q.containerInfo&&W.stateNode.implementation===Q.implementation){a(K,W.sibling),W=h(W,Q.children||[]),W.return=K,K=W;break e}else{a(K,W);break}else r(K,W);W=W.sibling}W=Kc(Q,K.mode,Ce),W.return=K,K=W}return M(K);case ie:return it=Q._init,Yt(K,W,it(Q._payload),Ce)}if(Ke(Q))return je(K,W,Q,Ce);if(fe(Q))return qe(K,W,Q,Ce);Ja(K,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,W!==null&&W.tag===6?(a(K,W.sibling),W=h(W,Q),W.return=K,K=W):(a(K,W),W=qc(Q,K.mode,Ce),W.return=K,K=W),M(K)):a(K,W)}return Yt}var As=np(!0),ip=np(!1),Qa=ur(null),el=null,Cs=null,sc=null;function oc(){sc=Cs=el=null}function ac(n){var r=Qa.current;kt(Qa),n._currentValue=r}function lc(n,r,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===a)break;n=n.return}}function bs(n,r){el=n,sc=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Un=!0),n.firstContext=null)}function jn(n){var r=n._currentValue;if(sc!==n)if(n={context:n,memoizedValue:r,next:null},Cs===null){if(el===null)throw Error(t(308));Cs=n,el.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return r}var Hr=null;function uc(n){Hr===null?Hr=[n]:Hr.push(n)}function rp(n,r,a,u){var h=r.interleaved;return h===null?(a.next=a,uc(r)):(a.next=h.next,h.next=a),r.interleaved=a,Ii(n,u)}function Ii(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var dr=!1;function cc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Fi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function hr(n,r,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(wt&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,Ii(n,a)}return h=u.interleaved,h===null?(r.next=r,uc(u)):(r.next=h.next,h.next=r),u.interleaved=r,Ii(n,a)}function tl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,rn(n,a)}}function op(n,r){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=M:g=g.next=M,a=a.next}while(a!==null);g===null?h=g=r:g=g.next=r}else h=g=r;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function nl(n,r,a,u){var h=n.updateQueue;dr=!1;var g=h.firstBaseUpdate,M=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var B=U,oe=B.next;B.next=null,M===null?g=oe:M.next=oe,M=B;var we=n.alternate;we!==null&&(we=we.updateQueue,U=we.lastBaseUpdate,U!==M&&(U===null?we.firstBaseUpdate=oe:U.next=oe,we.lastBaseUpdate=B))}if(g!==null){var Te=h.baseState;M=0,we=oe=B=null,U=g;do{var Me=U.lane,Be=U.eventTime;if((u&Me)===Me){we!==null&&(we=we.next={eventTime:Be,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var je=n,qe=U;switch(Me=r,Be=a,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){Te=je.call(Be,Te,Me);break e}Te=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,Me=typeof je=="function"?je.call(Be,Te,Me):je,Me==null)break e;Te=le({},Te,Me);break e;case 2:dr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,Me=h.effects,Me===null?h.effects=[U]:Me.push(U))}else Be={eventTime:Be,lane:Me,tag:U.tag,payload:U.payload,callback:U.callback,next:null},we===null?(oe=we=Be,B=Te):we=we.next=Be,M|=Me;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;Me=U,U=Me.next,Me.next=null,h.lastBaseUpdate=Me,h.shared.pending=null}}while(!0);if(we===null&&(B=Te),h.baseState=B,h.firstBaseUpdate=oe,h.lastBaseUpdate=we,r=h.shared.interleaved,r!==null){h=r;do M|=h.lane,h=h.next;while(h!==r)}else g===null&&(h.shared.lanes=0);Wr|=M,n.lanes=M,n.memoizedState=Te}}function ap(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Fo={},_i=ur(Fo),Oo=ur(Fo),ko=ur(Fo);function Vr(n){if(n===Fo)throw Error(t(174));return n}function fc(n,r){switch(Ft(ko,r),Ft(Oo,n),Ft(_i,Fo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:_e(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=_e(r,n)}kt(_i),Ft(_i,r)}function Ps(){kt(_i),kt(Oo),kt(ko)}function lp(n){Vr(ko.current);var r=Vr(_i.current),a=_e(r,n.type);r!==a&&(Ft(Oo,n),Ft(_i,a))}function dc(n){Oo.current===n&&(kt(_i),kt(Oo))}var Ht=ur(0);function il(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var hc=[];function pc(){for(var n=0;n<hc.length;n++)hc[n]._workInProgressVersionPrimary=null;hc.length=0}var rl=C.ReactCurrentDispatcher,mc=C.ReactCurrentBatchConfig,Gr=0,Vt=null,Zt=null,sn=null,sl=!1,Bo=!1,zo=0,E0=0;function mn(){throw Error(t(321))}function gc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!ni(n[a],r[a]))return!1;return!0}function vc(n,r,a,u,h,g){if(Gr=g,Vt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,rl.current=n===null||n.memoizedState===null?R0:A0,n=a(u,h),Bo){g=0;do{if(Bo=!1,zo=0,25<=g)throw Error(t(301));g+=1,sn=Zt=null,r.updateQueue=null,rl.current=C0,n=a(u,h)}while(Bo)}if(rl.current=ll,r=Zt!==null&&Zt.next!==null,Gr=0,sn=Zt=Vt=null,sl=!1,r)throw Error(t(300));return n}function _c(){var n=zo!==0;return zo=0,n}function xi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Vt.memoizedState=sn=n:sn=sn.next=n,sn}function $n(){if(Zt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var r=sn===null?Vt.memoizedState:sn.next;if(r!==null)sn=r,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},sn===null?Vt.memoizedState=sn=n:sn=sn.next=n}return sn}function Ho(n,r){return typeof r=="function"?r(n):r}function xc(n){var r=$n(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Zt,h=u.baseQueue,g=a.pending;if(g!==null){if(h!==null){var M=h.next;h.next=g.next,g.next=M}u.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,u=u.baseState;var U=M=null,B=null,oe=g;do{var we=oe.lane;if((Gr&we)===we)B!==null&&(B=B.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),u=oe.hasEagerState?oe.eagerState:n(u,oe.action);else{var Te={lane:we,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};B===null?(U=B=Te,M=u):B=B.next=Te,Vt.lanes|=we,Wr|=we}oe=oe.next}while(oe!==null&&oe!==g);B===null?M=u:B.next=U,ni(u,r.memoizedState)||(Un=!0),r.memoizedState=u,r.baseState=M,r.baseQueue=B,a.lastRenderedState=u}if(n=a.interleaved,n!==null){h=n;do g=h.lane,Vt.lanes|=g,Wr|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function yc(n){var r=$n(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,h=a.pending,g=r.memoizedState;if(h!==null){a.pending=null;var M=h=h.next;do g=n(g,M.action),M=M.next;while(M!==h);ni(g,r.memoizedState)||(Un=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),a.lastRenderedState=g}return[g,u]}function up(){}function cp(n,r){var a=Vt,u=$n(),h=r(),g=!ni(u.memoizedState,h);if(g&&(u.memoizedState=h,Un=!0),u=u.queue,Sc(hp.bind(null,a,u,n),[n]),u.getSnapshot!==r||g||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,Vo(9,dp.bind(null,a,u,h,r),void 0,null),on===null)throw Error(t(349));(Gr&30)!==0||fp(a,r,h)}return h}function fp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Vt.updateQueue,r===null?(r={lastEffect:null,stores:null},Vt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function dp(n,r,a,u){r.value=a,r.getSnapshot=u,pp(r)&&mp(n)}function hp(n,r,a){return a(function(){pp(r)&&mp(n)})}function pp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!ni(n,a)}catch{return!0}}function mp(n){var r=Ii(n,1);r!==null&&ai(r,n,1,-1)}function gp(n){var r=xi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:n},r.queue=n,n=n.dispatch=T0.bind(null,Vt,n),[r.memoizedState,n]}function Vo(n,r,a,u){return n={tag:n,create:r,destroy:a,deps:u,next:null},r=Vt.updateQueue,r===null?(r={lastEffect:null,stores:null},Vt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,r.lastEffect=n)),n}function vp(){return $n().memoizedState}function ol(n,r,a,u){var h=xi();Vt.flags|=n,h.memoizedState=Vo(1|r,a,void 0,u===void 0?null:u)}function al(n,r,a,u){var h=$n();u=u===void 0?null:u;var g=void 0;if(Zt!==null){var M=Zt.memoizedState;if(g=M.destroy,u!==null&&gc(u,M.deps)){h.memoizedState=Vo(r,a,g,u);return}}Vt.flags|=n,h.memoizedState=Vo(1|r,a,g,u)}function _p(n,r){return ol(8390656,8,n,r)}function Sc(n,r){return al(2048,8,n,r)}function xp(n,r){return al(4,2,n,r)}function yp(n,r){return al(4,4,n,r)}function Sp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Ep(n,r,a){return a=a!=null?a.concat([n]):null,al(4,4,Sp.bind(null,r,n),a)}function Ec(){}function Mp(n,r){var a=$n();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&gc(r,u[1])?u[0]:(a.memoizedState=[n,r],n)}function wp(n,r){var a=$n();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&gc(r,u[1])?u[0]:(n=n(),a.memoizedState=[n,r],n)}function Tp(n,r,a){return(Gr&21)===0?(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=a):(ni(a,r)||(a=Nt(),Vt.lanes|=a,Wr|=a,n.baseState=!0),r)}function M0(n,r){var a=Mt;Mt=a!==0&&4>a?a:4,n(!0);var u=mc.transition;mc.transition={};try{n(!1),r()}finally{Mt=a,mc.transition=u}}function Rp(){return $n().memoizedState}function w0(n,r,a){var u=vr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Ap(n))Cp(r,a);else if(a=rp(n,r,a,u),a!==null){var h=wn();ai(a,n,u,h),bp(a,r,u)}}function T0(n,r,a){var u=vr(n),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ap(n))Cp(r,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var M=r.lastRenderedState,U=g(M,a);if(h.hasEagerState=!0,h.eagerState=U,ni(U,M)){var B=r.interleaved;B===null?(h.next=h,uc(r)):(h.next=B.next,B.next=h),r.interleaved=h;return}}catch{}a=rp(n,r,h,u),a!==null&&(h=wn(),ai(a,n,u,h),bp(a,r,u))}}function Ap(n){var r=n.alternate;return n===Vt||r!==null&&r===Vt}function Cp(n,r){Bo=sl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function bp(n,r,a){if((a&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,rn(n,a)}}var ll={readContext:jn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},R0={readContext:jn,useCallback:function(n,r){return xi().memoizedState=[n,r===void 0?null:r],n},useContext:jn,useEffect:_p,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,ol(4194308,4,Sp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return ol(4194308,4,n,r)},useInsertionEffect:function(n,r){return ol(4,2,n,r)},useMemo:function(n,r){var a=xi();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var u=xi();return r=a!==void 0?a(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=w0.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var r=xi();return n={current:n},r.memoizedState=n},useState:gp,useDebugValue:Ec,useDeferredValue:function(n){return xi().memoizedState=n},useTransition:function(){var n=gp(!1),r=n[0];return n=M0.bind(null,n[1]),xi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var u=Vt,h=xi();if(zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),on===null)throw Error(t(349));(Gr&30)!==0||fp(u,r,a)}h.memoizedState=a;var g={value:a,getSnapshot:r};return h.queue=g,_p(hp.bind(null,u,g,n),[n]),u.flags|=2048,Vo(9,dp.bind(null,u,g,a,r),void 0,null),a},useId:function(){var n=xi(),r=on.identifierPrefix;if(zt){var a=Ni,u=Ui;a=(u&~(1<<32-ht(u)-1)).toString(32)+a,r=":"+r+"R"+a,a=zo++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=E0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},A0={readContext:jn,useCallback:Mp,useContext:jn,useEffect:Sc,useImperativeHandle:Ep,useInsertionEffect:xp,useLayoutEffect:yp,useMemo:wp,useReducer:xc,useRef:vp,useState:function(){return xc(Ho)},useDebugValue:Ec,useDeferredValue:function(n){var r=$n();return Tp(r,Zt.memoizedState,n)},useTransition:function(){var n=xc(Ho)[0],r=$n().memoizedState;return[n,r]},useMutableSource:up,useSyncExternalStore:cp,useId:Rp,unstable_isNewReconciler:!1},C0={readContext:jn,useCallback:Mp,useContext:jn,useEffect:Sc,useImperativeHandle:Ep,useInsertionEffect:xp,useLayoutEffect:yp,useMemo:wp,useReducer:yc,useRef:vp,useState:function(){return yc(Ho)},useDebugValue:Ec,useDeferredValue:function(n){var r=$n();return Zt===null?r.memoizedState=n:Tp(r,Zt.memoizedState,n)},useTransition:function(){var n=yc(Ho)[0],r=$n().memoizedState;return[n,r]},useMutableSource:up,useSyncExternalStore:cp,useId:Rp,unstable_isNewReconciler:!1};function ri(n,r){if(n&&n.defaultProps){r=le({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Mc(n,r,a,u){r=n.memoizedState,a=a(u,r),a=a==null?r:le({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ul={isMounted:function(n){return(n=n._reactInternals)?mi(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var u=wn(),h=vr(n),g=Fi(u,h);g.payload=r,a!=null&&(g.callback=a),r=hr(n,g,h),r!==null&&(ai(r,n,h,u),tl(r,n,h))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var u=wn(),h=vr(n),g=Fi(u,h);g.tag=1,g.payload=r,a!=null&&(g.callback=a),r=hr(n,g,h),r!==null&&(ai(r,n,h,u),tl(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=wn(),u=vr(n),h=Fi(a,u);h.tag=2,r!=null&&(h.callback=r),r=hr(n,h,u),r!==null&&(ai(r,n,u,a),tl(r,n,u))}};function Pp(n,r,a,u,h,g,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,M):r.prototype&&r.prototype.isPureReactComponent?!Co(a,u)||!Co(h,g):!0}function Lp(n,r,a){var u=!1,h=cr,g=r.contextType;return typeof g=="object"&&g!==null?g=jn(g):(h=Dn(r)?kr:pn.current,u=r.contextTypes,g=(u=u!=null)?Ms(n,h):cr),r=new r(a,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ul,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),r}function Dp(n,r,a,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,u),r.state!==n&&ul.enqueueReplaceState(r,r.state,null)}function wc(n,r,a,u){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},cc(n);var g=r.contextType;typeof g=="object"&&g!==null?h.context=jn(g):(g=Dn(r)?kr:pn.current,h.context=Ms(n,g)),h.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Mc(n,r,g,a),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&ul.enqueueReplaceState(h,h.state,null),nl(n,a,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,r){try{var a="",u=r;do a+=te(u),u=u.return;while(u);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:h,digest:null}}function Tc(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Rc(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var b0=typeof WeakMap=="function"?WeakMap:Map;function Up(n,r,a){a=Fi(-1,a),a.tag=3,a.payload={element:null};var u=r.value;return a.callback=function(){gl||(gl=!0,Hc=u),Rc(n,r)},a}function Np(n,r,a){a=Fi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;a.payload=function(){return u(h)},a.callback=function(){Rc(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Rc(n,r),typeof u!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var M=r.stack;this.componentDidCatch(r.value,{componentStack:M!==null?M:""})}),a}function Ip(n,r,a){var u=n.pingCache;if(u===null){u=n.pingCache=new b0;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(a)||(h.add(a),n=G0.bind(null,n,r,a),r.then(n,n))}function Fp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Op(n,r,a,u,h){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Fi(-1,1),r.tag=2,hr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var P0=C.ReactCurrentOwner,Un=!1;function Mn(n,r,a,u){r.child=n===null?ip(r,null,a,u):As(r,n.child,a,u)}function kp(n,r,a,u,h){a=a.render;var g=r.ref;return bs(r,h),u=vc(n,r,a,u,g,h),a=_c(),n!==null&&!Un?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,Oi(n,r,h)):(zt&&a&&ec(r),r.flags|=1,Mn(n,r,u,h),r.child)}function Bp(n,r,a,u,h){if(n===null){var g=a.type;return typeof g=="function"&&!Yc(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=g,zp(n,r,g,u,h)):(n=El(a.type,null,u,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&h)===0){var M=g.memoizedProps;if(a=a.compare,a=a!==null?a:Co,a(M,u)&&n.ref===r.ref)return Oi(n,r,h)}return r.flags|=1,n=xr(g,u),n.ref=r.ref,n.return=r,r.child=n}function zp(n,r,a,u,h){if(n!==null){var g=n.memoizedProps;if(Co(g,u)&&n.ref===r.ref)if(Un=!1,r.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Un=!0);else return r.lanes=n.lanes,Oi(n,r,h)}return Ac(n,r,a,u,h)}function Hp(n,r,a){var u=r.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Us,Hn),Hn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ft(Us,Hn),Hn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,Ft(Us,Hn),Hn|=u}else g!==null?(u=g.baseLanes|a,r.memoizedState=null):u=a,Ft(Us,Hn),Hn|=u;return Mn(n,r,h,a),r.child}function Vp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Ac(n,r,a,u,h){var g=Dn(a)?kr:pn.current;return g=Ms(r,g),bs(r,h),a=vc(n,r,a,u,g,h),u=_c(),n!==null&&!Un?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,Oi(n,r,h)):(zt&&u&&ec(r),r.flags|=1,Mn(n,r,a,h),r.child)}function Gp(n,r,a,u,h){if(Dn(a)){var g=!0;$a(r)}else g=!1;if(bs(r,h),r.stateNode===null)fl(n,r),Lp(r,a,u),wc(r,a,u,h),u=!0;else if(n===null){var M=r.stateNode,U=r.memoizedProps;M.props=U;var B=M.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=jn(oe):(oe=Dn(a)?kr:pn.current,oe=Ms(r,oe));var we=a.getDerivedStateFromProps,Te=typeof we=="function"||typeof M.getSnapshotBeforeUpdate=="function";Te||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==u||B!==oe)&&Dp(r,M,u,oe),dr=!1;var Me=r.memoizedState;M.state=Me,nl(r,u,M,h),B=r.memoizedState,U!==u||Me!==B||Ln.current||dr?(typeof we=="function"&&(Mc(r,a,we,u),B=r.memoizedState),(U=dr||Pp(r,a,U,u,Me,B,oe))?(Te||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(r.flags|=4194308)):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=B),M.props=u,M.state=B,M.context=oe,u=U):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{M=r.stateNode,sp(n,r),U=r.memoizedProps,oe=r.type===r.elementType?U:ri(r.type,U),M.props=oe,Te=r.pendingProps,Me=M.context,B=a.contextType,typeof B=="object"&&B!==null?B=jn(B):(B=Dn(a)?kr:pn.current,B=Ms(r,B));var Be=a.getDerivedStateFromProps;(we=typeof Be=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==Te||Me!==B)&&Dp(r,M,u,B),dr=!1,Me=r.memoizedState,M.state=Me,nl(r,u,M,h);var je=r.memoizedState;U!==Te||Me!==je||Ln.current||dr?(typeof Be=="function"&&(Mc(r,a,Be,u),je=r.memoizedState),(oe=dr||Pp(r,a,oe,u,Me,je,B)||!1)?(we||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,je,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,je,B)),typeof M.componentDidUpdate=="function"&&(r.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&Me===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&Me===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=je),M.props=u,M.state=je,M.context=B,u=oe):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&Me===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&Me===n.memoizedState||(r.flags|=1024),u=!1)}return Cc(n,r,a,u,g,h)}function Cc(n,r,a,u,h,g){Vp(n,r);var M=(r.flags&128)!==0;if(!u&&!M)return h&&Yh(r,a,!1),Oi(n,r,g);u=r.stateNode,P0.current=r;var U=M&&typeof a.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&M?(r.child=As(r,n.child,null,g),r.child=As(r,null,U,g)):Mn(n,r,U,g),r.memoizedState=u.state,h&&Yh(r,a,!0),r.child}function Wp(n){var r=n.stateNode;r.pendingContext?jh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&jh(n,r.context,!1),fc(n,r.containerInfo)}function Xp(n,r,a,u,h){return Rs(),rc(h),r.flags|=256,Mn(n,r,a,u),r.child}var bc={dehydrated:null,treeContext:null,retryLane:0};function Pc(n){return{baseLanes:n,cachePool:null,transitions:null}}function jp(n,r,a){var u=r.pendingProps,h=Ht.current,g=!1,M=(r.flags&128)!==0,U;if((U=M)||(U=n!==null&&n.memoizedState===null?!1:(h&2)!==0),U?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Ft(Ht,h&1),n===null)return ic(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(M=u.children,n=u.fallback,g?(u=r.mode,g=r.child,M={mode:"hidden",children:M},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=M):g=Ml(M,u,0,null),n=Yr(n,u,a,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=Pc(a),r.memoizedState=bc,n):Lc(r,M));if(h=n.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return L0(n,r,M,u,U,h,a);if(g){g=u.fallback,M=r.mode,h=n.child,U=h.sibling;var B={mode:"hidden",children:u.children};return(M&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=B,r.deletions=null):(u=xr(h,B),u.subtreeFlags=h.subtreeFlags&14680064),U!==null?g=xr(U,g):(g=Yr(g,M,a,null),g.flags|=2),g.return=r,u.return=r,u.sibling=g,r.child=u,u=g,g=r.child,M=n.child.memoizedState,M=M===null?Pc(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},g.memoizedState=M,g.childLanes=n.childLanes&~a,r.memoizedState=bc,u}return g=n.child,n=g.sibling,u=xr(g,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=a),u.return=r,u.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=u,r.memoizedState=null,u}function Lc(n,r){return r=Ml({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function cl(n,r,a,u){return u!==null&&rc(u),As(r,n.child,null,a),n=Lc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function L0(n,r,a,u,h,g,M){if(a)return r.flags&256?(r.flags&=-257,u=Tc(Error(t(422))),cl(n,r,M,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=u.fallback,h=r.mode,u=Ml({mode:"visible",children:u.children},h,0,null),g=Yr(g,h,M,null),g.flags|=2,u.return=r,g.return=r,u.sibling=g,r.child=u,(r.mode&1)!==0&&As(r,n.child,null,M),r.child.memoizedState=Pc(M),r.memoizedState=bc,g);if((r.mode&1)===0)return cl(n,r,M,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var U=u.dgst;return u=U,g=Error(t(419)),u=Tc(g,u,void 0),cl(n,r,M,u)}if(U=(M&n.childLanes)!==0,Un||U){if(u=on,u!==null){switch(M&-M){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|M))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Ii(n,h),ai(u,n,h,-1))}return $c(),u=Tc(Error(t(421))),cl(n,r,M,u)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=W0.bind(null,n),h._reactRetry=r,null):(n=g.treeContext,zn=lr(h.nextSibling),Bn=r,zt=!0,ii=null,n!==null&&(Wn[Xn++]=Ui,Wn[Xn++]=Ni,Wn[Xn++]=Br,Ui=n.id,Ni=n.overflow,Br=r),r=Lc(r,u.children),r.flags|=4096,r)}function $p(n,r,a){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),lc(n.return,r,a)}function Dc(n,r,a,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=h)}function Yp(n,r,a){var u=r.pendingProps,h=u.revealOrder,g=u.tail;if(Mn(n,r,u.children,a),u=Ht.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$p(n,a,r);else if(n.tag===19)$p(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ft(Ht,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(a=r.child,h=null;a!==null;)n=a.alternate,n!==null&&il(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),Dc(r,!1,h,a,g);break;case"backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&il(n)===null){r.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Dc(r,!0,a,null,g);break;case"together":Dc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function fl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Oi(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Wr|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=xr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=xr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function D0(n,r,a){switch(r.tag){case 3:Wp(r),Rs();break;case 5:lp(r);break;case 1:Dn(r.type)&&$a(r);break;case 4:fc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;Ft(Qa,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Ft(Ht,Ht.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?jp(n,r,a):(Ft(Ht,Ht.current&1),n=Oi(n,r,a),n!==null?n.sibling:null);Ft(Ht,Ht.current&1);break;case 19:if(u=(a&r.childLanes)!==0,(n.flags&128)!==0){if(u)return Yp(n,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ft(Ht,Ht.current),u)break;return null;case 22:case 23:return r.lanes=0,Hp(n,r,a)}return Oi(n,r,a)}var qp,Uc,Kp,Zp;qp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Uc=function(){},Kp=function(n,r,a,u){var h=n.memoizedProps;if(h!==u){n=r.stateNode,Vr(_i.current);var g=null;switch(a){case"input":h=k(n,h),u=k(n,u),g=[];break;case"select":h=le({},h,{value:void 0}),u=le({},u,{value:void 0}),g=[];break;case"textarea":h=It(n,h),u=It(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Wa)}Je(a,u);var M;a=null;for(oe in h)if(!u.hasOwnProperty(oe)&&h.hasOwnProperty(oe)&&h[oe]!=null)if(oe==="style"){var U=h[oe];for(M in U)U.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?g||(g=[]):(g=g||[]).push(oe,null));for(oe in u){var B=u[oe];if(U=h?.[oe],u.hasOwnProperty(oe)&&B!==U&&(B!=null||U!=null))if(oe==="style")if(U){for(M in U)!U.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in B)B.hasOwnProperty(M)&&U[M]!==B[M]&&(a||(a={}),a[M]=B[M])}else a||(g||(g=[]),g.push(oe,a)),a=B;else oe==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(g=g||[]).push(oe,B)):oe==="children"?typeof B!="string"&&typeof B!="number"||(g=g||[]).push(oe,""+B):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(B!=null&&oe==="onScroll"&&Ot("scroll",n),g||U===B||(g=[])):(g=g||[]).push(oe,B))}a&&(g=g||[]).push("style",a);var oe=g;(r.updateQueue=oe)&&(r.flags|=4)}},Zp=function(n,r,a,u){a!==u&&(r.flags|=4)};function Go(n,r){if(!zt)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function gn(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(r)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=a,r}function U0(n,r,a){var u=r.pendingProps;switch(tc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(r),null;case 1:return Dn(r.type)&&ja(),gn(r),null;case 3:return u=r.stateNode,Ps(),kt(Ln),kt(pn),pc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Za(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ii!==null&&(Wc(ii),ii=null))),Uc(n,r),gn(r),null;case 5:dc(r);var h=Vr(ko.current);if(a=r.type,n!==null&&r.stateNode!=null)Kp(n,r,a,u,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return gn(r),null}if(n=Vr(_i.current),Za(r)){u=r.stateNode,a=r.type;var g=r.memoizedProps;switch(u[vi]=r,u[Uo]=g,n=(r.mode&1)!==0,a){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(h=0;h<Po.length;h++)Ot(Po[h],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":Wt(u,g),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Ot("invalid",u);break;case"textarea":D(u,g),Ot("invalid",u)}Je(a,g),h=null;for(var M in g)if(g.hasOwnProperty(M)){var U=g[M];M==="children"?typeof U=="string"?u.textContent!==U&&(g.suppressHydrationWarning!==!0&&Ga(u.textContent,U,n),h=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&Ga(u.textContent,U,n),h=["children",""+U]):o.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Ot("scroll",u)}switch(a){case"input":xt(u),We(u,g,!0);break;case"textarea":xt(u),ee(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Wa)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{M=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ge(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(a,{is:u.is}):(n=M.createElement(a),a==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,a),n[vi]=r,n[Uo]=u,qp(n,r,!1,!1),r.stateNode=n;e:{switch(M=Le(a,u),a){case"dialog":Ot("cancel",n),Ot("close",n),h=u;break;case"iframe":case"object":case"embed":Ot("load",n),h=u;break;case"video":case"audio":for(h=0;h<Po.length;h++)Ot(Po[h],n);h=u;break;case"source":Ot("error",n),h=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),h=u;break;case"details":Ot("toggle",n),h=u;break;case"input":Wt(n,u),h=k(n,u),Ot("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=le({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":D(n,u),h=It(n,u),Ot("invalid",n);break;default:h=u}Je(a,h),U=h;for(g in U)if(U.hasOwnProperty(g)){var B=U[g];g==="style"?Oe(n,B):g==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&$e(n,B)):g==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&Pe(n,B):typeof B=="number"&&Pe(n,""+B):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?B!=null&&g==="onScroll"&&Ot("scroll",n):B!=null&&P(n,g,B,M))}switch(a){case"input":xt(n),We(n,u,!1);break;case"textarea":xt(n),ee(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ye(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?nt(n,!!u.multiple,g,!1):u.defaultValue!=null&&nt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Wa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return gn(r),null;case 6:if(n&&r.stateNode!=null)Zp(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(a=Vr(ko.current),Vr(_i.current),Za(r)){if(u=r.stateNode,a=r.memoizedProps,u[vi]=r,(g=u.nodeValue!==a)&&(n=Bn,n!==null))switch(n.tag){case 3:Ga(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ga(u.nodeValue,a,(n.mode&1)!==0)}g&&(r.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[vi]=r,r.stateNode=u}return gn(r),null;case 13:if(kt(Ht),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&zn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)ep(),Rs(),r.flags|=98560,g=!1;else if(g=Za(r),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[vi]=r}else Rs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;gn(r),g=!1}else ii!==null&&(Wc(ii),ii=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ht.current&1)!==0?Jt===0&&(Jt=3):$c())),r.updateQueue!==null&&(r.flags|=4),gn(r),null);case 4:return Ps(),Uc(n,r),n===null&&Lo(r.stateNode.containerInfo),gn(r),null;case 10:return ac(r.type._context),gn(r),null;case 17:return Dn(r.type)&&ja(),gn(r),null;case 19:if(kt(Ht),g=r.memoizedState,g===null)return gn(r),null;if(u=(r.flags&128)!==0,M=g.rendering,M===null)if(u)Go(g,!1);else{if(Jt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(M=il(n),M!==null){for(r.flags|=128,Go(g,!1),u=M.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=a,a=r.child;a!==null;)g=a,n=u,g.flags&=14680066,M=g.alternate,M===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=M.childLanes,g.lanes=M.lanes,g.child=M.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=M.memoizedProps,g.memoizedState=M.memoizedState,g.updateQueue=M.updateQueue,g.type=M.type,n=M.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ft(Ht,Ht.current&1|2),r.child}n=n.sibling}g.tail!==null&&Z()>Ns&&(r.flags|=128,u=!0,Go(g,!1),r.lanes=4194304)}else{if(!u)if(n=il(M),n!==null){if(r.flags|=128,u=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Go(g,!0),g.tail===null&&g.tailMode==="hidden"&&!M.alternate&&!zt)return gn(r),null}else 2*Z()-g.renderingStartTime>Ns&&a!==1073741824&&(r.flags|=128,u=!0,Go(g,!1),r.lanes=4194304);g.isBackwards?(M.sibling=r.child,r.child=M):(a=g.last,a!==null?a.sibling=M:r.child=M,g.last=M)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Z(),r.sibling=null,a=Ht.current,Ft(Ht,u?a&1|2:a&1),r):(gn(r),null);case 22:case 23:return jc(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Hn&1073741824)!==0&&(gn(r),r.subtreeFlags&6&&(r.flags|=8192)):gn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function N0(n,r){switch(tc(r),r.tag){case 1:return Dn(r.type)&&ja(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ps(),kt(Ln),kt(pn),pc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return dc(r),null;case 13:if(kt(Ht),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Rs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return kt(Ht),null;case 4:return Ps(),null;case 10:return ac(r.type._context),null;case 22:case 23:return jc(),null;case 24:return null;default:return null}}var dl=!1,vn=!1,I0=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Ds(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Xt(n,r,u)}else a.current=null}function Nc(n,r,a){try{a()}catch(u){Xt(n,r,u)}}var Jp=!1;function F0(n,r){if(ju=Da,n=Ph(),ku(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var M=0,U=-1,B=-1,oe=0,we=0,Te=n,Me=null;t:for(;;){for(var Be;Te!==a||h!==0&&Te.nodeType!==3||(U=M+h),Te!==g||u!==0&&Te.nodeType!==3||(B=M+u),Te.nodeType===3&&(M+=Te.nodeValue.length),(Be=Te.firstChild)!==null;)Me=Te,Te=Be;for(;;){if(Te===n)break t;if(Me===a&&++oe===h&&(U=M),Me===g&&++we===u&&(B=M),(Be=Te.nextSibling)!==null)break;Te=Me,Me=Te.parentNode}Te=Be}a=U===-1||B===-1?null:{start:U,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for($u={focusedElem:n,selectionRange:a},Da=!1,Ge=r;Ge!==null;)if(r=Ge,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ge=n;else for(;Ge!==null;){r=Ge;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,Yt=je.memoizedState,K=r.stateNode,W=K.getSnapshotBeforeUpdate(r.elementType===r.type?qe:ri(r.type,qe),Yt);K.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Q=r.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){Xt(r,r.return,Ce)}if(n=r.sibling,n!==null){n.return=r.return,Ge=n;break}Ge=r.return}return je=Jp,Jp=!1,je}function Wo(n,r,a){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Nc(r,a,g)}h=h.next}while(h!==u)}}function hl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==r)}}function Ic(n){var r=n.ref;if(r!==null){var a=n.stateNode;n.tag,n=a,typeof r=="function"?r(n):r.current=n}}function Qp(n){var r=n.alternate;r!==null&&(n.alternate=null,Qp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[vi],delete r[Uo],delete r[Zu],delete r[_0],delete r[x0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function em(n){return n.tag===5||n.tag===3||n.tag===4}function tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||em(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fc(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Wa));else if(u!==4&&(n=n.child,n!==null))for(Fc(n,r,a),n=n.sibling;n!==null;)Fc(n,r,a),n=n.sibling}function Oc(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Oc(n,r,a),n=n.sibling;n!==null;)Oc(n,r,a),n=n.sibling}var cn=null,si=!1;function pr(n,r,a){for(a=a.child;a!==null;)nm(n,r,a),a=a.sibling}function nm(n,r,a){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(ot,a)}catch{}switch(a.tag){case 5:vn||Ds(a,r);case 6:var u=cn,h=si;cn=null,pr(n,r,a),cn=u,si=h,cn!==null&&(si?(n=cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(si?(n=cn,a=a.stateNode,n.nodeType===8?Ku(n.parentNode,a):n.nodeType===1&&Ku(n,a),Eo(n)):Ku(cn,a.stateNode));break;case 4:u=cn,h=si,cn=a.stateNode.containerInfo,si=!0,pr(n,r,a),cn=u,si=h;break;case 0:case 11:case 14:case 15:if(!vn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,M=g.destroy;g=g.tag,M!==void 0&&((g&2)!==0||(g&4)!==0)&&Nc(a,r,M),h=h.next}while(h!==u)}pr(n,r,a);break;case 1:if(!vn&&(Ds(a,r),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(U){Xt(a,r,U)}pr(n,r,a);break;case 21:pr(n,r,a);break;case 22:a.mode&1?(vn=(u=vn)||a.memoizedState!==null,pr(n,r,a),vn=u):pr(n,r,a);break;default:pr(n,r,a)}}function im(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new I0),r.forEach(function(u){var h=X0.bind(null,n,u);a.has(u)||(a.add(u),u.then(h,h))})}}function oi(n,r){var a=r.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var g=n,M=r,U=M;e:for(;U!==null;){switch(U.tag){case 5:cn=U.stateNode,si=!1;break e;case 3:cn=U.stateNode.containerInfo,si=!0;break e;case 4:cn=U.stateNode.containerInfo,si=!0;break e}U=U.return}if(cn===null)throw Error(t(160));nm(g,M,h),cn=null,si=!1;var B=h.alternate;B!==null&&(B.return=null),h.return=null}catch(oe){Xt(h,r,oe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)rm(r,n),r=r.sibling}function rm(n,r){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(r,n),yi(n),u&4){try{Wo(3,n,n.return),hl(3,n)}catch(qe){Xt(n,n.return,qe)}try{Wo(5,n,n.return)}catch(qe){Xt(n,n.return,qe)}}break;case 1:oi(r,n),yi(n),u&512&&a!==null&&Ds(a,a.return);break;case 5:if(oi(r,n),yi(n),u&512&&a!==null&&Ds(a,a.return),n.flags&32){var h=n.stateNode;try{Pe(h,"")}catch(qe){Xt(n,n.return,qe)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,M=a!==null?a.memoizedProps:g,U=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&mt(h,g),Le(U,M);var oe=Le(U,g);for(M=0;M<B.length;M+=2){var we=B[M],Te=B[M+1];we==="style"?Oe(h,Te):we==="dangerouslySetInnerHTML"?$e(h,Te):we==="children"?Pe(h,Te):P(h,we,Te,oe)}switch(U){case"input":Et(h,g);break;case"textarea":T(h,g);break;case"select":var Me=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Be=g.value;Be!=null?nt(h,!!g.multiple,Be,!1):Me!==!!g.multiple&&(g.defaultValue!=null?nt(h,!!g.multiple,g.defaultValue,!0):nt(h,!!g.multiple,g.multiple?[]:"",!1))}h[Uo]=g}catch(qe){Xt(n,n.return,qe)}}break;case 6:if(oi(r,n),yi(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(qe){Xt(n,n.return,qe)}}break;case 3:if(oi(r,n),yi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Eo(r.containerInfo)}catch(qe){Xt(n,n.return,qe)}break;case 4:oi(r,n),yi(n);break;case 13:oi(r,n),yi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(zc=Z())),u&4&&im(n);break;case 22:if(we=a!==null&&a.memoizedState!==null,n.mode&1?(vn=(oe=vn)||we,oi(r,n),vn=oe):oi(r,n),yi(n),u&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!we&&(n.mode&1)!==0)for(Ge=n,we=n.child;we!==null;){for(Te=Ge=we;Ge!==null;){switch(Me=Ge,Be=Me.child,Me.tag){case 0:case 11:case 14:case 15:Wo(4,Me,Me.return);break;case 1:Ds(Me,Me.return);var je=Me.stateNode;if(typeof je.componentWillUnmount=="function"){u=Me,a=Me.return;try{r=u,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch(qe){Xt(u,a,qe)}}break;case 5:Ds(Me,Me.return);break;case 22:if(Me.memoizedState!==null){am(Te);continue}}Be!==null?(Be.return=Me,Ge=Be):am(Te)}we=we.sibling}e:for(we=null,Te=n;;){if(Te.tag===5){if(we===null){we=Te;try{h=Te.stateNode,oe?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=Te.stateNode,B=Te.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=Ee("display",M))}catch(qe){Xt(n,n.return,qe)}}}else if(Te.tag===6){if(we===null)try{Te.stateNode.nodeValue=oe?"":Te.memoizedProps}catch(qe){Xt(n,n.return,qe)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;we===Te&&(we=null),Te=Te.return}we===Te&&(we=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:oi(r,n),yi(n),u&4&&im(n);break;case 21:break;default:oi(r,n),yi(n)}}function yi(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(em(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Pe(h,""),u.flags&=-33);var g=tm(n);Oc(n,g,h);break;case 3:case 4:var M=u.stateNode.containerInfo,U=tm(n);Fc(n,U,M);break;default:throw Error(t(161))}}catch(B){Xt(n,n.return,B)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function O0(n,r,a){Ge=n,sm(n)}function sm(n,r,a){for(var u=(n.mode&1)!==0;Ge!==null;){var h=Ge,g=h.child;if(h.tag===22&&u){var M=h.memoizedState!==null||dl;if(!M){var U=h.alternate,B=U!==null&&U.memoizedState!==null||vn;U=dl;var oe=vn;if(dl=M,(vn=B)&&!oe)for(Ge=h;Ge!==null;)M=Ge,B=M.child,M.tag===22&&M.memoizedState!==null?lm(h):B!==null?(B.return=M,Ge=B):lm(h);for(;g!==null;)Ge=g,sm(g),g=g.sibling;Ge=h,dl=U,vn=oe}om(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ge=g):om(n)}}function om(n){for(;Ge!==null;){var r=Ge;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:vn||hl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!vn)if(a===null)u.componentDidMount();else{var h=r.elementType===r.type?a.memoizedProps:ri(r.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&ap(r,g,u);break;case 3:var M=r.updateQueue;if(M!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}ap(r,M,a)}break;case 5:var U=r.stateNode;if(a===null&&r.flags&4){a=U;var B=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var oe=r.alternate;if(oe!==null){var we=oe.memoizedState;if(we!==null){var Te=we.dehydrated;Te!==null&&Eo(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||r.flags&512&&Ic(r)}catch(Me){Xt(r,r.return,Me)}}if(r===n){Ge=null;break}if(a=r.sibling,a!==null){a.return=r.return,Ge=a;break}Ge=r.return}}function am(n){for(;Ge!==null;){var r=Ge;if(r===n){Ge=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Ge=a;break}Ge=r.return}}function lm(n){for(;Ge!==null;){var r=Ge;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{hl(4,r)}catch(B){Xt(r,a,B)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(B){Xt(r,h,B)}}var g=r.return;try{Ic(r)}catch(B){Xt(r,g,B)}break;case 5:var M=r.return;try{Ic(r)}catch(B){Xt(r,M,B)}}}catch(B){Xt(r,r.return,B)}if(r===n){Ge=null;break}var U=r.sibling;if(U!==null){U.return=r.return,Ge=U;break}Ge=r.return}}var k0=Math.ceil,pl=C.ReactCurrentDispatcher,kc=C.ReactCurrentOwner,Yn=C.ReactCurrentBatchConfig,wt=0,on=null,qt=null,fn=0,Hn=0,Us=ur(0),Jt=0,Xo=null,Wr=0,ml=0,Bc=0,jo=null,Nn=null,zc=0,Ns=1/0,ki=null,gl=!1,Hc=null,mr=null,vl=!1,gr=null,_l=0,$o=0,Vc=null,xl=-1,yl=0;function wn(){return(wt&6)!==0?Z():xl!==-1?xl:xl=Z()}function vr(n){return(n.mode&1)===0?1:(wt&2)!==0&&fn!==0?fn&-fn:S0.transition!==null?(yl===0&&(yl=Nt()),yl):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:ch(n.type)),n)}function ai(n,r,a,u){if(50<$o)throw $o=0,Vc=null,Error(t(185));nn(n,a,u),((wt&2)===0||n!==on)&&(n===on&&((wt&2)===0&&(ml|=a),Jt===4&&_r(n,fn)),In(n,u),a===1&&wt===0&&(r.mode&1)===0&&(Ns=Z()+500,Ya&&fr()))}function In(n,r){var a=n.callbackNode;En(n,r);var u=tn(n,n===on?fn:0);if(u===0)a!==null&&A(a),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(a!=null&&A(a),r===1)n.tag===0?y0(cm.bind(null,n)):qh(cm.bind(null,n)),g0(function(){(wt&6)===0&&fr()}),a=null;else{switch(gi(u)){case 1:a=Re;break;case 4:a=Ne;break;case 16:a=Ve;break;case 536870912:a=at;break;default:a=Ve}a=_m(a,um.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function um(n,r){if(xl=-1,yl=0,(wt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Is()&&n.callbackNode!==a)return null;var u=tn(n,n===on?fn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Sl(n,u);else{r=u;var h=wt;wt|=2;var g=dm();(on!==n||fn!==r)&&(ki=null,Ns=Z()+500,jr(n,r));do try{H0();break}catch(U){fm(n,U)}while(!0);oc(),pl.current=g,wt=h,qt!==null?r=0:(on=null,fn=0,r=Jt)}if(r!==0){if(r===2&&(h=Pi(n),h!==0&&(u=h,r=Gc(n,h))),r===1)throw a=Xo,jr(n,0),_r(n,u),In(n,Z()),a;if(r===6)_r(n,u);else{if(h=n.current.alternate,(u&30)===0&&!B0(h)&&(r=Sl(n,u),r===2&&(g=Pi(n),g!==0&&(u=g,r=Gc(n,g))),r===1))throw a=Xo,jr(n,0),_r(n,u),In(n,Z()),a;switch(n.finishedWork=h,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:$r(n,Nn,ki);break;case 3:if(_r(n,u),(u&130023424)===u&&(r=zc+500-Z(),10<r)){if(tn(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){wn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=qu($r.bind(null,n,Nn,ki),r);break}$r(n,Nn,ki);break;case 4:if(_r(n,u),(u&4194240)===u)break;for(r=n.eventTimes,h=-1;0<u;){var M=31-ht(u);g=1<<M,M=r[M],M>h&&(h=M),u&=~g}if(u=h,u=Z()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*k0(u/1960))-u,10<u){n.timeoutHandle=qu($r.bind(null,n,Nn,ki),u);break}$r(n,Nn,ki);break;case 5:$r(n,Nn,ki);break;default:throw Error(t(329))}}}return In(n,Z()),n.callbackNode===a?um.bind(null,n):null}function Gc(n,r){var a=jo;return n.current.memoizedState.isDehydrated&&(jr(n,r).flags|=256),n=Sl(n,r),n!==2&&(r=Nn,Nn=a,r!==null&&Wc(r)),n}function Wc(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function B0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],g=h.getSnapshot;h=h.value;try{if(!ni(g(),h))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _r(n,r){for(r&=~Bc,r&=~ml,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-ht(r),u=1<<a;n[a]=-1,r&=~u}}function cm(n){if((wt&6)!==0)throw Error(t(327));Is();var r=tn(n,0);if((r&1)===0)return In(n,Z()),null;var a=Sl(n,r);if(n.tag!==0&&a===2){var u=Pi(n);u!==0&&(r=u,a=Gc(n,u))}if(a===1)throw a=Xo,jr(n,0),_r(n,r),In(n,Z()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,$r(n,Nn,ki),In(n,Z()),null}function Xc(n,r){var a=wt;wt|=1;try{return n(r)}finally{wt=a,wt===0&&(Ns=Z()+500,Ya&&fr())}}function Xr(n){gr!==null&&gr.tag===0&&(wt&6)===0&&Is();var r=wt;wt|=1;var a=Yn.transition,u=Mt;try{if(Yn.transition=null,Mt=1,n)return n()}finally{Mt=u,Yn.transition=a,wt=r,(wt&6)===0&&fr()}}function jc(){Hn=Us.current,kt(Us)}function jr(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,m0(a)),qt!==null)for(a=qt.return;a!==null;){var u=a;switch(tc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ja();break;case 3:Ps(),kt(Ln),kt(pn),pc();break;case 5:dc(u);break;case 4:Ps();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:ac(u.type._context);break;case 22:case 23:jc()}a=a.return}if(on=n,qt=n=xr(n.current,null),fn=Hn=r,Jt=0,Xo=null,Bc=ml=Wr=0,Nn=jo=null,Hr!==null){for(r=0;r<Hr.length;r++)if(a=Hr[r],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,g=a.pending;if(g!==null){var M=g.next;g.next=h,u.next=M}a.pending=u}Hr=null}return n}function fm(n,r){do{var a=qt;try{if(oc(),rl.current=ll,sl){for(var u=Vt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}sl=!1}if(Gr=0,sn=Zt=Vt=null,Bo=!1,zo=0,kc.current=null,a===null||a.return===null){Jt=1,Xo=r,qt=null;break}e:{var g=n,M=a.return,U=a,B=r;if(r=fn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var oe=B,we=U,Te=we.tag;if((we.mode&1)===0&&(Te===0||Te===11||Te===15)){var Me=we.alternate;Me?(we.updateQueue=Me.updateQueue,we.memoizedState=Me.memoizedState,we.lanes=Me.lanes):(we.updateQueue=null,we.memoizedState=null)}var Be=Fp(M);if(Be!==null){Be.flags&=-257,Op(Be,M,U,g,r),Be.mode&1&&Ip(g,oe,r),r=Be,B=oe;var je=r.updateQueue;if(je===null){var qe=new Set;qe.add(B),r.updateQueue=qe}else je.add(B);break e}else{if((r&1)===0){Ip(g,oe,r),$c();break e}B=Error(t(426))}}else if(zt&&U.mode&1){var Yt=Fp(M);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Op(Yt,M,U,g,r),rc(Ls(B,U));break e}}g=B=Ls(B,U),Jt!==4&&(Jt=2),jo===null?jo=[g]:jo.push(g),g=M;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var K=Up(g,B,r);op(g,K);break e;case 1:U=B;var W=g.type,Q=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(mr===null||!mr.has(Q)))){g.flags|=65536,r&=-r,g.lanes|=r;var Ce=Np(g,U,r);op(g,Ce);break e}}g=g.return}while(g!==null)}pm(a)}catch(Ze){r=Ze,qt===a&&a!==null&&(qt=a=a.return);continue}break}while(!0)}function dm(){var n=pl.current;return pl.current=ll,n===null?ll:n}function $c(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),on===null||(Wr&268435455)===0&&(ml&268435455)===0||_r(on,fn)}function Sl(n,r){var a=wt;wt|=2;var u=dm();(on!==n||fn!==r)&&(ki=null,jr(n,r));do try{z0();break}catch(h){fm(n,h)}while(!0);if(oc(),wt=a,pl.current=u,qt!==null)throw Error(t(261));return on=null,fn=0,Jt}function z0(){for(;qt!==null;)hm(qt)}function H0(){for(;qt!==null&&!Y();)hm(qt)}function hm(n){var r=vm(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,r===null?pm(n):qt=r,kc.current=null}function pm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=U0(a,r,Hn),a!==null){qt=a;return}}else{if(a=N0(a,r),a!==null){a.flags&=32767,qt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,qt=null;return}}if(r=r.sibling,r!==null){qt=r;return}qt=r=n}while(r!==null);Jt===0&&(Jt=5)}function $r(n,r,a){var u=Mt,h=Yn.transition;try{Yn.transition=null,Mt=1,V0(n,r,a,u)}finally{Yn.transition=h,Mt=u}return null}function V0(n,r,a,u){do Is();while(gr!==null);if((wt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(un(n,g),n===on&&(qt=on=null,fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||vl||(vl=!0,_m(Ve,function(){return Is(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Yn.transition,Yn.transition=null;var M=Mt;Mt=1;var U=wt;wt|=4,kc.current=null,F0(n,a),rm(a,n),l0($u),Da=!!ju,$u=ju=null,n.current=a,O0(a),ae(),wt=U,Mt=M,Yn.transition=g}else n.current=a;if(vl&&(vl=!1,gr=n,_l=h),g=n.pendingLanes,g===0&&(mr=null),gt(a.stateNode),In(n,Z()),r!==null)for(u=n.onRecoverableError,a=0;a<r.length;a++)h=r[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(gl)throw gl=!1,n=Hc,Hc=null,n;return(_l&1)!==0&&n.tag!==0&&Is(),g=n.pendingLanes,(g&1)!==0?n===Vc?$o++:($o=0,Vc=n):$o=0,fr(),null}function Is(){if(gr!==null){var n=gi(_l),r=Yn.transition,a=Mt;try{if(Yn.transition=null,Mt=16>n?16:n,gr===null)var u=!1;else{if(n=gr,gr=null,_l=0,(wt&6)!==0)throw Error(t(331));var h=wt;for(wt|=4,Ge=n.current;Ge!==null;){var g=Ge,M=g.child;if((Ge.flags&16)!==0){var U=g.deletions;if(U!==null){for(var B=0;B<U.length;B++){var oe=U[B];for(Ge=oe;Ge!==null;){var we=Ge;switch(we.tag){case 0:case 11:case 15:Wo(8,we,g)}var Te=we.child;if(Te!==null)Te.return=we,Ge=Te;else for(;Ge!==null;){we=Ge;var Me=we.sibling,Be=we.return;if(Qp(we),we===oe){Ge=null;break}if(Me!==null){Me.return=Be,Ge=Me;break}Ge=Be}}}var je=g.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var Yt=qe.sibling;qe.sibling=null,qe=Yt}while(qe!==null)}}Ge=g}}if((g.subtreeFlags&2064)!==0&&M!==null)M.return=g,Ge=M;else e:for(;Ge!==null;){if(g=Ge,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Wo(9,g,g.return)}var K=g.sibling;if(K!==null){K.return=g.return,Ge=K;break e}Ge=g.return}}var W=n.current;for(Ge=W;Ge!==null;){M=Ge;var Q=M.child;if((M.subtreeFlags&2064)!==0&&Q!==null)Q.return=M,Ge=Q;else e:for(M=W;Ge!==null;){if(U=Ge,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:hl(9,U)}}catch(Ze){Xt(U,U.return,Ze)}if(U===M){Ge=null;break e}var Ce=U.sibling;if(Ce!==null){Ce.return=U.return,Ge=Ce;break e}Ge=U.return}}if(wt=h,fr(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(ot,n)}catch{}u=!0}return u}finally{Mt=a,Yn.transition=r}}return!1}function mm(n,r,a){r=Ls(a,r),r=Up(n,r,1),n=hr(n,r,1),r=wn(),n!==null&&(nn(n,1,r),In(n,r))}function Xt(n,r,a){if(n.tag===3)mm(n,n,a);else for(;r!==null;){if(r.tag===3){mm(r,n,a);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(mr===null||!mr.has(u))){n=Ls(a,n),n=Np(r,n,1),r=hr(r,n,1),n=wn(),r!==null&&(nn(r,1,n),In(r,n));break}}r=r.return}}function G0(n,r,a){var u=n.pingCache;u!==null&&u.delete(r),r=wn(),n.pingedLanes|=n.suspendedLanes&a,on===n&&(fn&a)===a&&(Jt===4||Jt===3&&(fn&130023424)===fn&&500>Z()-zc?jr(n,0):Bc|=a),In(n,r)}function gm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Lt,Lt<<=1,(Lt&130023424)===0&&(Lt=4194304)));var a=wn();n=Ii(n,r),n!==null&&(nn(n,r,a),In(n,a))}function W0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),gm(n,a)}function X0(n,r){var a=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),gm(n,a)}var vm;vm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ln.current)Un=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Un=!1,D0(n,r,a);Un=(n.flags&131072)!==0}else Un=!1,zt&&(r.flags&1048576)!==0&&Kh(r,Ka,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;fl(n,r),n=r.pendingProps;var h=Ms(r,pn.current);bs(r,a),h=vc(null,r,u,n,h,a);var g=_c();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Dn(u)?(g=!0,$a(r)):g=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,cc(r),h.updater=ul,r.stateNode=h,h._reactInternals=r,wc(r,u,n,a),r=Cc(null,r,u,!0,g,a)):(r.tag=0,zt&&g&&ec(r),Mn(null,r,h,a),r=r.child),r;case 16:u=r.elementType;e:{switch(fl(n,r),n=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=$0(u),n=ri(u,n),h){case 0:r=Ac(null,r,u,n,a);break e;case 1:r=Gp(null,r,u,n,a);break e;case 11:r=kp(null,r,u,n,a);break e;case 14:r=Bp(null,r,u,ri(u.type,n),a);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ri(u,h),Ac(n,r,u,h,a);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ri(u,h),Gp(n,r,u,h,a);case 3:e:{if(Wp(r),n===null)throw Error(t(387));u=r.pendingProps,g=r.memoizedState,h=g.element,sp(n,r),nl(r,u,null,a);var M=r.memoizedState;if(u=M.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){h=Ls(Error(t(423)),r),r=Xp(n,r,u,a,h);break e}else if(u!==h){h=Ls(Error(t(424)),r),r=Xp(n,r,u,a,h);break e}else for(zn=lr(r.stateNode.containerInfo.firstChild),Bn=r,zt=!0,ii=null,a=ip(r,null,u,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),u===h){r=Oi(n,r,a);break e}Mn(n,r,u,a)}r=r.child}return r;case 5:return lp(r),n===null&&ic(r),u=r.type,h=r.pendingProps,g=n!==null?n.memoizedProps:null,M=h.children,Yu(u,h)?M=null:g!==null&&Yu(u,g)&&(r.flags|=32),Vp(n,r),Mn(n,r,M,a),r.child;case 6:return n===null&&ic(r),null;case 13:return jp(n,r,a);case 4:return fc(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=As(r,null,u,a):Mn(n,r,u,a),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ri(u,h),kp(n,r,u,h,a);case 7:return Mn(n,r,r.pendingProps,a),r.child;case 8:return Mn(n,r,r.pendingProps.children,a),r.child;case 12:return Mn(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,g=r.memoizedProps,M=h.value,Ft(Qa,u._currentValue),u._currentValue=M,g!==null)if(ni(g.value,M)){if(g.children===h.children&&!Ln.current){r=Oi(n,r,a);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var U=g.dependencies;if(U!==null){M=g.child;for(var B=U.firstContext;B!==null;){if(B.context===u){if(g.tag===1){B=Fi(-1,a&-a),B.tag=2;var oe=g.updateQueue;if(oe!==null){oe=oe.shared;var we=oe.pending;we===null?B.next=B:(B.next=we.next,we.next=B),oe.pending=B}}g.lanes|=a,B=g.alternate,B!==null&&(B.lanes|=a),lc(g.return,a,r),U.lanes|=a;break}B=B.next}}else if(g.tag===10)M=g.type===r.type?null:g.child;else if(g.tag===18){if(M=g.return,M===null)throw Error(t(341));M.lanes|=a,U=M.alternate,U!==null&&(U.lanes|=a),lc(M,a,r),M=g.sibling}else M=g.child;if(M!==null)M.return=g;else for(M=g;M!==null;){if(M===r){M=null;break}if(g=M.sibling,g!==null){g.return=M.return,M=g;break}M=M.return}g=M}Mn(n,r,h.children,a),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,bs(r,a),h=jn(h),u=u(h),r.flags|=1,Mn(n,r,u,a),r.child;case 14:return u=r.type,h=ri(u,r.pendingProps),h=ri(u.type,h),Bp(n,r,u,h,a);case 15:return zp(n,r,r.type,r.pendingProps,a);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ri(u,h),fl(n,r),r.tag=1,Dn(u)?(n=!0,$a(r)):n=!1,bs(r,a),Lp(r,u,h),wc(r,u,h,a),Cc(null,r,u,!0,n,a);case 19:return Yp(n,r,a);case 22:return Hp(n,r,a)}throw Error(t(156,r.tag))};function _m(n,r){return ba(n,r)}function j0(n,r,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,r,a,u){return new j0(n,r,a,u)}function Yc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $0(n){if(typeof n=="function")return Yc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ue)return 11;if(n===ve)return 14}return 2}function xr(n,r){var a=n.alternate;return a===null?(a=qn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function El(n,r,a,u,h,g){var M=2;if(u=n,typeof n=="function")Yc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case O:return Yr(a.children,h,g,r);case j:M=8,h|=8;break;case b:return n=qn(12,a,r,h|2),n.elementType=b,n.lanes=g,n;case J:return n=qn(13,a,r,h),n.elementType=J,n.lanes=g,n;case ce:return n=qn(19,a,r,h),n.elementType=ce,n.lanes=g,n;case xe:return Ml(a,h,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:M=10;break e;case z:M=9;break e;case ue:M=11;break e;case ve:M=14;break e;case ie:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=qn(M,a,r,h),r.elementType=n,r.type=u,r.lanes=g,r}function Yr(n,r,a,u){return n=qn(7,n,u,r),n.lanes=a,n}function Ml(n,r,a,u){return n=qn(22,n,u,r),n.elementType=xe,n.lanes=a,n.stateNode={isHidden:!1},n}function qc(n,r,a){return n=qn(6,n,null,r),n.lanes=a,n}function Kc(n,r,a){return r=qn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Y0(n,r,a,u,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Zc(n,r,a,u,h,g,M,U,B){return n=new Y0(n,r,a,U,B),r===1?(r=1,g===!0&&(r|=8)):r=0,g=qn(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},cc(g),n}function q0(n,r,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:r,implementation:a}}function xm(n){if(!n)return cr;n=n._reactInternals;e:{if(mi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Dn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Dn(a))return $h(n,a,r)}return r}function ym(n,r,a,u,h,g,M,U,B){return n=Zc(a,u,!0,n,h,g,M,U,B),n.context=xm(null),a=n.current,u=wn(),h=vr(a),g=Fi(u,h),g.callback=r??null,hr(a,g,h),n.current.lanes=h,nn(n,h,u),In(n,u),n}function wl(n,r,a,u){var h=r.current,g=wn(),M=vr(h);return a=xm(a),r.context===null?r.context=a:r.pendingContext=a,r=Fi(g,M),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=hr(h,r,M),n!==null&&(ai(n,h,M,g),tl(n,h,M)),M}function Tl(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function Sm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Jc(n,r){Sm(n,r),(n=n.alternate)&&Sm(n,r)}function K0(){return null}var Em=typeof reportError=="function"?reportError:function(n){console.error(n)};function Qc(n){this._internalRoot=n}Rl.prototype.render=Qc.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));wl(n,r,null,null)},Rl.prototype.unmount=Qc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Xr(function(){wl(null,n,null,null)}),r[Li]=null}};function Rl(n){this._internalRoot=n}Rl.prototype.unstable_scheduleHydration=function(n){if(n){var r=sh();n={blockedOn:null,target:n,priority:r};for(var a=0;a<sr.length&&r!==0&&r<sr[a].priority;a++);sr.splice(a,0,n),a===0&&lh(n)}};function ef(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function Z0(n,r,a,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var oe=Tl(M);g.call(oe)}}var M=ym(r,u,n,0,null,!1,!1,"",Mm);return n._reactRootContainer=M,n[Li]=M.current,Lo(n.nodeType===8?n.parentNode:n),Xr(),M}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var U=u;u=function(){var oe=Tl(B);U.call(oe)}}var B=Zc(n,0,!1,null,null,!1,!1,"",Mm);return n._reactRootContainer=B,n[Li]=B.current,Lo(n.nodeType===8?n.parentNode:n),Xr(function(){wl(r,B,a,u)}),B}function Cl(n,r,a,u,h){var g=a._reactRootContainer;if(g){var M=g;if(typeof h=="function"){var U=h;h=function(){var B=Tl(M);U.call(B)}}wl(r,M,n,h)}else M=Z0(a,r,n,h,u);return Tl(M)}ih=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=vt(r.pendingLanes);a!==0&&(rn(r,a|1),In(r,Z()),(wt&6)===0&&(Ns=Z()+500,fr()))}break;case 13:Xr(function(){var u=Ii(n,1);if(u!==null){var h=wn();ai(u,n,1,h)}}),Jc(n,1)}},Tu=function(n){if(n.tag===13){var r=Ii(n,134217728);if(r!==null){var a=wn();ai(r,n,134217728,a)}Jc(n,134217728)}},rh=function(n){if(n.tag===13){var r=vr(n),a=Ii(n,r);if(a!==null){var u=wn();ai(a,n,r,u)}Jc(n,r)}},sh=function(){return Mt},oh=function(n,r){var a=Mt;try{return Mt=n,r()}finally{Mt=a}},De=function(n,r,a){switch(r){case"input":if(Et(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var u=a[r];if(u!==n&&u.form===n.form){var h=Xa(u);if(!h)throw Error(t(90));At(u),Et(u,h)}}}break;case"textarea":T(n,a);break;case"select":r=a.value,r!=null&&nt(n,!!a.multiple,r,!1)}},Qe=Xc,St=Xr;var J0={usingClientEntryPoint:!1,Events:[No,Ss,Xa,me,ke,Xc]},Yo={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q0={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Aa(n),n===null?null:n.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||K0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{ot=bl.inject(Q0),Xe=bl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J0,Fn.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(r))throw Error(t(200));return q0(n,r,null,a)},Fn.createRoot=function(n,r){if(!ef(n))throw Error(t(299));var a=!1,u="",h=Em;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=Zc(n,1,!1,null,null,a,!1,u,h),n[Li]=r.current,Lo(n.nodeType===8?n.parentNode:n),new Qc(r)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Aa(r),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return Xr(n)},Fn.hydrate=function(n,r,a){if(!Al(r))throw Error(t(200));return Cl(null,n,r,!0,a)},Fn.hydrateRoot=function(n,r,a){if(!ef(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,h=!1,g="",M=Em;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),r=ym(r,null,n,1,a??null,h,!1,g,M),n[Li]=r.current,Lo(n),u)for(n=0;n<u.length;n++)a=u[n],h=a._getVersion,h=h(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,h]:r.mutableSourceEagerHydrationData.push(a,h);return new Rl(r)},Fn.render=function(n,r,a){if(!Al(r))throw Error(t(200));return Cl(null,n,r,!1,a)},Fn.unmountComponentAtNode=function(n){if(!Al(n))throw Error(t(40));return n._reactRootContainer?(Xr(function(){Cl(null,null,n,!1,function(){n._reactRootContainer=null,n[Li]=null})}),!0):!1},Fn.unstable_batchedUpdates=Xc,Fn.unstable_renderSubtreeIntoContainer=function(n,r,a,u){if(!Al(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Cl(n,r,a,!1,u)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Lm;function ax(){if(Lm)return rf.exports;Lm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),rf.exports=ox(),rf.exports}var Dm;function lx(){if(Dm)return Pl;Dm=1;var i=ax();return Pl.createRoot=i.createRoot,Pl.hydrateRoot=i.hydrateRoot,Pl}var ux=lx();const cx=iv(ux);var Ud=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,sv=/^[\\/]{2}/;function fx(i,e){return e+i.replace(/\\/g,"/")}var Um="popstate";function Nm(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function dx(i={}){function e(s,o){let l=o.state?.masked,{pathname:c,search:f,hash:d}=l||s.location;return Vf("",{pathname:c,search:f,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default",l?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function t(s,o){return typeof o=="string"?o:aa(o)}return px(e,t,null,i)}function Gt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Ri(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hx(){return Math.random().toString(36).substring(2,10)}function Im(i,e){return{usr:i.state,key:i.key,idx:e,masked:i.mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function Vf(i,e,t=null,s,o){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?co(e):e,state:t,key:e&&e.key||s||hx(),mask:o}}function aa({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function co(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function px(i,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,f="POP",d=null,p=m();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function m(){return(c.state||{idx:null}).idx}function v(){f="POP";let y=m(),x=y==null?null:y-p;p=y,d&&d({action:f,location:w.location,delta:x})}function _(y,x){f="PUSH";let L=Nm(y)?y:Vf(w.location,y,x);p=m()+1;let P=Im(L,p),C=w.createHref(L.mask||L);try{c.pushState(P,"",C)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;o.location.assign(C)}l&&d&&d({action:f,location:w.location,delta:1})}function S(y,x){f="REPLACE";let L=Nm(y)?y:Vf(w.location,y,x);p=m();let P=Im(L,p),C=w.createHref(L.mask||L);c.replaceState(P,"",C),l&&d&&d({action:f,location:w.location,delta:0})}function E(y){return mx(o,y)}let w={get action(){return f},get location(){return i(o,c)},listen(y){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(Um,v),d=y,()=>{o.removeEventListener(Um,v),d=null}},createHref(y){return e(o,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:S,go(y){return c.go(y)}};return w}function mx(i,e,t=!1){let s="http://localhost";i&&(s=i.location.origin!=="null"?i.location.origin:i.location.href),Gt(s,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:aa(e);return o=o.replace(/ $/,"%20"),!t&&sv.test(o)&&(o=s+o),new URL(o,s)}function ov(i,e,t="/"){return gx(i,e,t,!1)}function gx(i,e,t,s,o){let l=typeof e=="string"?co(e):e,c=Ki(l.pathname||"/",t);if(c==null)return null;let f=vx(i),d=null,p=Cx(c);for(let m=0;d==null&&m<f.length;++m)d=Ax(f[m],p,s);return d}function vx(i){let e=av(i);return _x(e),e}function av(i,e=[],t=[],s="",o=!1){let l=(c,f,d=o,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(s)&&d)return;Gt(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length)}let v=hi([s,m.relativePath]),_=t.concat(m);c.children&&c.children.length>0&&(Gt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),av(c.children,e,_,v,d)),!(c.path==null&&!c.index)&&e.push({path:v,score:Tx(v,c.index),routesMeta:_.map((S,E)=>{let[w,y]=cv(S.relativePath,S.caseSensitive,E===_.length-1);return{...S,matcher:w,compiledParams:y}})})};return i.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let d of lv(c.path))l(c,f,!0,d)}),e}function lv(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=lv(s.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),o&&f.push(...c),f.map(d=>i.startsWith("/")&&d===""?"/":d)}function _x(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:Rx(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var xx=/^:[\w-]+$/,yx=3,Sx=2,Ex=1,Mx=10,wx=-2,Fm=i=>i==="*";function Tx(i,e){let t=i.split("/"),s=t.length;return t.some(Fm)&&(s+=wx),e&&(s+=Sx),t.filter(o=>!Fm(o)).reduce((o,l)=>o+(xx.test(l)?yx:l===""?Ex:Mx),s)}function Rx(i,e){return i.length===e.length&&i.slice(0,-1).every((s,o)=>s===e[o])?i[i.length-1]-e[e.length-1]:0}function Ax(i,e,t=!1){let{routesMeta:s}=i,o={},l="/",c=[];for(let f=0;f<s.length;++f){let d=s[f],p=f===s.length-1,m=l==="/"?e:e.slice(l.length)||"/",v={path:d.relativePath,caseSensitive:d.caseSensitive,end:p},_=d.matcher&&d.compiledParams?uv(v,m,d.matcher,d.compiledParams):cu(v,m),S=d.route;if(!_&&p&&t&&!s[s.length-1].route.index&&(_=cu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!_)return null;Object.assign(o,_.params),c.push({params:o,pathname:hi([l,_.pathname]),pathnameBase:Lx(hi([l,_.pathnameBase])),route:S}),_.pathnameBase!=="/"&&(l=hi([l,_.pathnameBase]))}return c}function cu(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=cv(i.path,i.caseSensitive,i.end);return uv(i,e,t,s)}function uv(i,e,t,s){let o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((p,{paramName:m,isOptional:v},_)=>{if(m==="*"){let E=f[_]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[_];return v&&!S?p[m]=void 0:p[m]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:i}}function cv(i,e=!1,t=!0){Ri(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d,p,m)=>{if(s.push({paramName:f,isOptional:d!=null}),d){let v=m.charAt(p+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(s.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Cx(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ri(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function Ki(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}function bx(i,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof i=="string"?co(i):i,l;return t?(t=dv(t),t.startsWith("/")?l=Om(t.substring(1),"/"):l=Om(t,e)):l=e,{pathname:l,search:Dx(s),hash:Ux(o)}}function Om(i,e){let t=fu(e).split("/");return i.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function af(i,e,t,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Px(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function fv(i){let e=Px(i);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Nd(i,e,t,s=!1){let o;typeof i=="string"?o=co(i):(o={...i},Gt(!o.pathname||!o.pathname.includes("?"),af("?","pathname","search",o)),Gt(!o.pathname||!o.pathname.includes("#"),af("#","pathname","hash",o)),Gt(!o.search||!o.search.includes("#"),af("#","search","hash",o)));let l=i===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let v=e.length-1;if(!s&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),v-=1;o.pathname=_.join("/")}f=v>=0?e[v]:"/"}let d=bx(o,f),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(p||m)&&(d.pathname+="/"),d}var dv=i=>i.replace(/[\\/]{2,}/g,"/"),hi=i=>dv(i.join("/")),fu=i=>i.replace(/\/+$/,""),Lx=i=>fu(i).replace(/^\/*/,"/"),Dx=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Ux=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Nx=class{constructor(i,e,t,s=!1){this.status=i,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Ix(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function Fx(i){let e=i.map(t=>t.route.path).filter(Boolean);return hi(e)||"/"}var hv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function pv(i,e){let t=i;if(typeof t!="string"||!Ud.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,o=!1;if(hv)try{let l=new URL(window.location.href),c=sv.test(t)?new URL(fx(t,l.protocol)):new URL(t),f=Ki(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:o=!0}catch{Ri(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var mv=["POST","PUT","PATCH","DELETE"];new Set(mv);var Ox=["GET",...mv];new Set(Ox);var kx=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Bx(i){try{return kx.includes(new URL(i).protocol)}catch{return!1}}var fo=X.createContext(null);fo.displayName="DataRouter";var gu=X.createContext(null);gu.displayName="DataRouterState";var gv=X.createContext(!1);function zx(){return X.useContext(gv)}var vv=X.createContext({isTransitioning:!1});vv.displayName="ViewTransition";var Hx=X.createContext(new Map);Hx.displayName="Fetchers";var Vx=X.createContext(null);Vx.displayName="Await";var ti=X.createContext(null);ti.displayName="Navigation";var ga=X.createContext(null);ga.displayName="Location";var Zi=X.createContext({outlet:null,matches:[],isDataRoute:!1});Zi.displayName="Route";var Id=X.createContext(null);Id.displayName="RouteError";var _v="REACT_ROUTER_ERROR",Gx="REDIRECT",Wx="ROUTE_ERROR_RESPONSE";function Xx(i){if(i.startsWith(`${_v}:${Gx}:{`))try{let e=JSON.parse(i.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function jx(i){if(i.startsWith(`${_v}:${Wx}:{`))try{let e=JSON.parse(i.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Nx(e.status,e.statusText,e.data)}catch{}}function $x(i,{relative:e}={}){Gt(va(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=X.useContext(ti),{hash:o,pathname:l,search:c}=_a(i,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:hi([t,l])),s.createHref({pathname:f,search:c,hash:o})}function va(){return X.useContext(ga)!=null}function Ji(){return Gt(va(),"useLocation() may be used only in the context of a <Router> component."),X.useContext(ga).location}var xv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function yv(i){X.useContext(ti).static||X.useLayoutEffect(i)}function Yx(){let{isDataRoute:i}=X.useContext(Zi);return i?ay():qx()}function qx(){Gt(va(),"useNavigate() may be used only in the context of a <Router> component.");let i=X.useContext(fo),{basename:e,navigator:t}=X.useContext(ti),{matches:s}=X.useContext(Zi),{pathname:o}=Ji(),l=JSON.stringify(fv(s)),c=X.useRef(!1);return yv(()=>{c.current=!0}),X.useCallback((d,p={})=>{if(Ri(c.current,xv),!c.current)return;if(typeof d=="number"){t.go(d);return}let m=Nd(d,JSON.parse(l),o,p.relative==="path");i==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:hi([e,m.pathname])),(p.replace?t.replace:t.push)(m,p.state,p)},[e,t,l,o,i])}X.createContext(null);function _a(i,{relative:e}={}){let{matches:t}=X.useContext(Zi),{pathname:s}=Ji(),o=JSON.stringify(fv(t));return X.useMemo(()=>Nd(i,JSON.parse(o),s,e==="path"),[i,o,s,e])}function Kx(i,e){return Sv(i,e)}function Sv(i,e,t){Gt(va(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=X.useContext(ti),{matches:o}=X.useContext(Zi),l=o[o.length-1],c=l?l.params:{},f=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let y=p&&p.path||"";Mv(f,!p||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let m=Ji(),v;if(e){let y=typeof e=="string"?co(e):e;Gt(d==="/"||y.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${y.pathname}" was given in the \`location\` prop.`),v=y}else v=m;let _=v.pathname||"/",S=_;if(d!=="/"){let y=d.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(y.length).join("/")}let E=t&&t.state.matches.length?t.state.matches.map(y=>Object.assign(y,{route:t.manifest[y.route.id]||y.route})):ov(i,{pathname:S});Ri(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Ri(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=ty(E&&E.map(y=>Object.assign({},y,{params:Object.assign({},c,y.params),pathname:hi([d,s.encodeLocation?s.encodeLocation(y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:hi([d,s.encodeLocation?s.encodeLocation(y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),o,t);return e&&w?X.createElement(ga.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},w):w}function Zx(){let i=oy(),e=Ix(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",i),c=X.createElement(X.Fragment,null,X.createElement("p",null,"💿 Hey developer 👋"),X.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",X.createElement("code",{style:l},"ErrorBoundary")," or"," ",X.createElement("code",{style:l},"errorElement")," prop on your route.")),X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),t?X.createElement("pre",{style:o},t):null,c)}var Jx=X.createElement(Zx,null),Ev=class extends X.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){this.props.onError?this.props.onError(i,e):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const t=jx(i.digest);t&&(i=t)}let e=i!==void 0?X.createElement(Zi.Provider,{value:this.props.routeContext},X.createElement(Id.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?X.createElement(Qx,{error:i},e):e}};Ev.contextType=gv;var lf=new WeakMap;function Qx({children:i,error:e}){let{basename:t}=X.useContext(ti);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=Xx(e.digest);if(s){let o=lf.get(e);if(o)throw o;let l=pv(s.location,t),c=l.absoluteURL||l.to;if(Bx(c))throw new Error("Invalid redirect location");if(hv&&!lf.get(e))if(l.isExternal||s.reloadDocument)window.location.href=c;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw lf.set(e,f),f}return X.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return i}function ey({routeContext:i,match:e,children:t}){let s=X.useContext(fo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),X.createElement(Zi.Provider,{value:i},t)}function ty(i,e=[],t){let s=t?.state;if(i==null){if(!s)return null;if(s.errors)i=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)i=s.matches;else return null}let o=i,l=s?.errors;if(l!=null){let m=o.findIndex(v=>v.route.id&&l?.[v.route.id]!==void 0);Gt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let c=!1,f=-1;if(t&&s){c=s.renderFallback;for(let m=0;m<o.length;m++){let v=o[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=m),v.route.id){let{loaderData:_,errors:S}=s,E=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(c=!0),f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}}let d=t?.onError,p=s&&d?(m,v)=>{d(m,{location:s.location,params:s.matches?.[0]?.params??{},pattern:Fx(s.matches),errorInfo:v})}:void 0;return o.reduceRight((m,v,_)=>{let S,E=!1,w=null,y=null;s&&(S=l&&v.route.id?l[v.route.id]:void 0,w=v.route.errorElement||Jx,c&&(f<0&&_===0?(Mv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):f===_&&(E=!0,y=v.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,_+1)),L=()=>{let P;return S?P=w:E?P=y:v.route.Component?P=X.createElement(v.route.Component,null):v.route.element?P=v.route.element:P=m,X.createElement(ey,{match:v,routeContext:{outlet:m,matches:x,isDataRoute:s!=null},children:P})};return s&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?X.createElement(Ev,{location:s.location,revalidation:s.revalidation,component:w,error:S,children:L(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:p}):L()},null)}function Fd(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ny(i){let e=X.useContext(fo);return Gt(e,Fd(i)),e}function iy(i){let e=X.useContext(gu);return Gt(e,Fd(i)),e}function ry(i){let e=X.useContext(Zi);return Gt(e,Fd(i)),e}function Od(i){let e=ry(i),t=e.matches[e.matches.length-1];return Gt(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function sy(){return Od("useRouteId")}function oy(){let i=X.useContext(Id),e=iy("useRouteError"),t=Od("useRouteError");return i!==void 0?i:e.errors?.[t]}function ay(){let{router:i}=ny("useNavigate"),e=Od("useNavigate"),t=X.useRef(!1);return yv(()=>{t.current=!0}),X.useCallback(async(o,l={})=>{Ri(t.current,xv),t.current&&(typeof o=="number"?await i.navigate(o):await i.navigate(o,{fromRouteId:e,...l}))},[i,e])}var km={};function Mv(i,e,t){!e&&!km[i]&&(km[i]=!0,Ri(!1,t))}X.memo(ly);function ly({routes:i,manifest:e,future:t,state:s,isStatic:o,onError:l}){return Sv(i,void 0,{manifest:e,state:s,isStatic:o,onError:l})}function Gf(i){Gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function uy({basename:i="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1,useTransitions:c}){Gt(!va(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=i.replace(/^\/*/,"/"),d=X.useMemo(()=>({basename:f,navigator:o,static:l,useTransitions:c,future:{}}),[f,o,l,c]);typeof t=="string"&&(t=co(t));let{pathname:p="/",search:m="",hash:v="",state:_=null,key:S="default",mask:E}=t,w=X.useMemo(()=>{let y=Ki(p,f);return y==null?null:{location:{pathname:y,search:m,hash:v,state:_,key:S,mask:E},navigationType:s}},[f,p,m,v,_,S,s,E]);return Ri(w!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:X.createElement(ti.Provider,{value:d},X.createElement(ga.Provider,{children:e,value:w}))}function cy({children:i,location:e}){return Kx(Wf(i),e)}function Wf(i,e=[]){let t=[];return X.Children.forEach(i,(s,o)=>{if(!X.isValidElement(s))return;let l=[...e,o];if(s.type===X.Fragment){t.push.apply(t,Wf(s.props.children,l));return}Gt(s.type===Gf,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Gt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Wf(s.props.children,l)),t.push(c)}),t}var nu="get",iu="application/x-www-form-urlencoded";function vu(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function fy(i){return vu(i)&&i.tagName.toLowerCase()==="button"}function dy(i){return vu(i)&&i.tagName.toLowerCase()==="form"}function hy(i){return vu(i)&&i.tagName.toLowerCase()==="input"}function py(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function my(i,e){return i.button===0&&(!e||e==="_self")&&!py(i)}var Ll=null;function gy(){if(Ll===null)try{new FormData(document.createElement("form"),0),Ll=!1}catch{Ll=!0}return Ll}var vy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function uf(i){return i!=null&&!vy.has(i)?(Ri(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${iu}"`),null):i}function _y(i,e){let t,s,o,l,c;if(dy(i)){let f=i.getAttribute("action");s=f?Ki(f,e):null,t=i.getAttribute("method")||nu,o=uf(i.getAttribute("enctype"))||iu,l=new FormData(i)}else if(fy(i)||hy(i)&&(i.type==="submit"||i.type==="image")){let f=i.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=i.getAttribute("formaction")||f.getAttribute("action");if(s=d?Ki(d,e):null,t=i.getAttribute("formmethod")||f.getAttribute("method")||nu,o=uf(i.getAttribute("formenctype"))||uf(f.getAttribute("enctype"))||iu,l=new FormData(f,i),!gy()){let{name:p,type:m,value:v}=i;if(m==="image"){let _=p?`${p}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else p&&l.append(p,v)}}else{if(vu(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=nu,s=null,o=iu,c=i}return l&&o==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function kd(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function wv(i,e,t,s){let o=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${s}`:o.pathname=`${o.pathname}.${s}`:o.pathname==="/"?o.pathname=`_root.${s}`:e&&Ki(o.pathname,e)==="/"?o.pathname=`${fu(e)}/_root.${s}`:o.pathname=`${fu(o.pathname)}.${s}`,o}async function xy(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yy(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Sy(i,e,t){let s=await Promise.all(i.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await xy(l,t);return c.links?c.links():[]}return[]}));return Ty(s.flat(1).filter(yy).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Bm(i,e,t,s,o,l){let c=(d,p)=>t[p]?d.route.id!==t[p].route.id:!0,f=(d,p)=>t[p].pathname!==d.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==d.params["*"];return l==="assets"?e.filter((d,p)=>c(d,p)||f(d,p)):l==="data"?e.filter((d,p)=>{let m=s.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(c(d,p)||f(d,p))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Ey(i,e,{includeHydrateFallback:t}={}){return My(i.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function My(i){return[...new Set(i)]}function wy(i){let e={},t=Object.keys(i).sort();for(let s of t)e[s]=i[s];return e}function Ty(i,e){let t=new Set;return new Set(e),i.reduce((s,o)=>{let l=JSON.stringify(wy(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function Bd(){let i=X.useContext(fo);return kd(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Ry(){let i=X.useContext(gu);return kd(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var zd=X.createContext(void 0);zd.displayName="FrameworkContext";function _u(){let i=X.useContext(zd);return kd(i,"You must render this element inside a <HydratedRouter> element"),i}function Ay(i,e){let t=X.useContext(zd),[s,o]=X.useState(!1),[l,c]=X.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=e,_=X.useRef(null);X.useEffect(()=>{if(i==="render"&&c(!0),i==="viewport"){let w=x=>{x.forEach(L=>{c(L.isIntersecting)})},y=new IntersectionObserver(w,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[i]),X.useEffect(()=>{if(s){let w=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(w)}}},[s]);let S=()=>{o(!0)},E=()=>{o(!1),c(!1)};return t?i!=="intent"?[l,_,{}]:[l,_,{onFocus:Ko(f,S),onBlur:Ko(d,E),onMouseEnter:Ko(p,S),onMouseLeave:Ko(m,E),onTouchStart:Ko(v,S)}]:[!1,_,{}]}function Ko(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function Cy({page:i,...e}){let t=zx(),{nonce:s}=_u(),{router:o}=Bd(),l=X.useMemo(()=>ov(o.routes,i,o.basename),[o.routes,i,o.basename]);return l?(e.nonce==null&&s&&(e={...e,nonce:s}),t?X.createElement(Py,{page:i,matches:l,...e}):X.createElement(Ly,{page:i,matches:l,...e})):null}function by(i){let{manifest:e,routeModules:t}=_u(),[s,o]=X.useState([]);return X.useEffect(()=>{let l=!1;return Sy(i,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[i,e,t]),s}function Py({page:i,matches:e,...t}){let s=Ji(),{future:o}=_u(),{basename:l}=Bd(),c=X.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let f=wv(i,l,o.v8_trailingSlashAwareDataRequests,"rsc"),d=!1,p=[];for(let m of e)typeof m.route.shouldRevalidate=="function"?d=!0:p.push(m.route.id);return d&&p.length>0&&f.searchParams.set("_routes",p.join(",")),[f.pathname+f.search]},[l,o.v8_trailingSlashAwareDataRequests,i,s,e]);return X.createElement(X.Fragment,null,c.map(f=>X.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...t})))}function Ly({page:i,matches:e,...t}){let s=Ji(),{future:o,manifest:l,routeModules:c}=_u(),{basename:f}=Bd(),{loaderData:d,matches:p}=Ry(),m=X.useMemo(()=>Bm(i,e,p,l,s,"data"),[i,e,p,l,s]),v=X.useMemo(()=>Bm(i,e,p,l,s,"assets"),[i,e,p,l,s]),_=X.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let w=new Set,y=!1;if(e.forEach(L=>{let P=l.routes[L.route.id];!P||!P.hasLoader||(!m.some(C=>C.route.id===L.route.id)&&L.route.id in d&&c[L.route.id]?.shouldRevalidate||P.hasClientLoader?y=!0:w.add(L.route.id))}),w.size===0)return[];let x=wv(i,f,o.v8_trailingSlashAwareDataRequests,"data");return y&&w.size>0&&x.searchParams.set("_routes",e.filter(L=>w.has(L.route.id)).map(L=>L.route.id).join(",")),[x.pathname+x.search]},[f,o.v8_trailingSlashAwareDataRequests,d,s,l,m,e,i,c]),S=X.useMemo(()=>Ey(v,l),[v,l]),E=by(v);return X.createElement(X.Fragment,null,_.map(w=>X.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...t})),S.map(w=>X.createElement("link",{key:w,rel:"modulepreload",href:w,...t})),E.map(({key:w,link:y})=>X.createElement("link",{key:w,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function Dy(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Uy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Uy&&(window.__reactRouterVersion="7.18.2")}catch{}function Ny({basename:i,children:e,useTransitions:t,window:s}){let o=X.useRef();o.current==null&&(o.current=dx({window:s,v5Compat:!0}));let l=o.current,[c,f]=X.useState({action:l.action,location:l.location}),d=X.useCallback(p=>{t===!1?f(p):X.startTransition(()=>f(p))},[t]);return X.useLayoutEffect(()=>l.listen(d),[l,d]),X.createElement(uy,{basename:i,children:e,location:c.location,navigationType:c.action,navigator:l,useTransitions:t})}var Tv=X.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:c,mask:f,state:d,target:p,to:m,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:S,...E},w){let{basename:y,navigator:x,useTransitions:L}=X.useContext(ti),P=typeof m=="string"&&Ud.test(m),C=pv(m,y);m=C.to;let H=$x(m,{relative:o}),F=Ji(),O=null;if(f){let ve=Nd(f,[],F.mask?F.mask.pathname:"/",!0);y!=="/"&&(ve.pathname=ve.pathname==="/"?y:hi([y,ve.pathname])),O=x.createHref(ve)}let[j,b,R]=Ay(s,E),z=Oy(m,{replace:c,mask:f,state:d,target:p,preventScrollReset:v,relative:o,viewTransition:_,defaultShouldRevalidate:S,useTransitions:L});function ue(ve){e&&e(ve),ve.defaultPrevented||z(ve)}let J=!(C.isExternal||l),ce=X.createElement("a",{...E,...R,href:(J?O:void 0)||C.absoluteURL||H,onClick:J?ue:e,ref:Dy(w,b),target:p,"data-discover":!P&&t==="render"?"true":void 0});return j&&!P?X.createElement(X.Fragment,null,ce,X.createElement(Cy,{page:H})):ce});Tv.displayName="Link";var Xf=X.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:f,children:d,...p},m){let v=_a(c,{relative:p.relative}),_=Ji(),S=X.useContext(gu),{navigator:E,basename:w}=X.useContext(ti),y=S!=null&&Vy(v)&&f===!0,x=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,L=_.pathname,P=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(L=L.toLowerCase(),P=P?P.toLowerCase():null,x=x.toLowerCase()),P&&w&&(P=Ki(P,w)||P);const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let H=L===x||!o&&L.startsWith(x)&&L.charAt(C)==="/",F=P!=null&&(P===x||!o&&P.startsWith(x)&&P.charAt(x.length)==="/"),O={isActive:H,isPending:F,isTransitioning:y},j=H?e:void 0,b;typeof s=="function"?b=s(O):b=[s,H?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(O):l;return X.createElement(Tv,{...p,"aria-current":j,className:b,ref:m,style:R,to:c,viewTransition:f},typeof d=="function"?d(O):d)});Xf.displayName="NavLink";var Iy=X.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:c=nu,action:f,onSubmit:d,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:_,...S},E)=>{let{useTransitions:w}=X.useContext(ti),y=zy(),x=Hy(f,{relative:p}),L=c.toLowerCase()==="get"?"get":"post",P=typeof f=="string"&&Ud.test(f),C=H=>{if(d&&d(H),H.defaultPrevented)return;H.preventDefault();let F=H.nativeEvent.submitter,O=F?.getAttribute("formmethod")||c,j=()=>y(F||H.currentTarget,{fetcherKey:e,method:O,navigate:t,replace:o,state:l,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:_});w&&t!==!1?X.startTransition(()=>j()):j()};return X.createElement("form",{ref:E,method:L,action:x,onSubmit:s?d:C,...S,"data-discover":!P&&i==="render"?"true":void 0})});Iy.displayName="Form";function Fy(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rv(i){let e=X.useContext(fo);return Gt(e,Fy(i)),e}function Oy(i,{target:e,replace:t,mask:s,state:o,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d,useTransitions:p}={}){let m=Yx(),v=Ji(),_=_a(i,{relative:c});return X.useCallback(S=>{if(my(S,e)){S.preventDefault();let E=t!==void 0?t:aa(v)===aa(_),w=()=>m(i,{replace:E,mask:s,state:o,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:d});p?X.startTransition(()=>w()):w()}},[v,m,_,t,s,o,e,i,l,c,f,d,p])}var ky=0,By=()=>`__${String(++ky)}__`;function zy(){let{router:i}=Rv("useSubmit"),{basename:e}=X.useContext(ti),t=sy(),s=i.fetch,o=i.navigate;return X.useCallback(async(l,c={})=>{let{action:f,method:d,encType:p,formData:m,body:v}=_y(l,e);if(c.navigate===!1){let _=c.fetcherKey||By();await s(_,t,c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,flushSync:c.flushSync})}else await o(c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[s,o,e,t])}function Hy(i,{relative:e}={}){let{basename:t}=X.useContext(ti),s=X.useContext(Zi);Gt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={..._a(i||".",{relative:e})},c=Ji();if(i==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(m=>m==="")){f.delete("index"),d.filter(v=>v).forEach(v=>f.append("index",v));let m=f.toString();l.search=m?`?${m}`:""}}return(!i||i===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:hi([t,l.pathname])),aa(l)}function Vy(i,{relative:e}={}){let t=X.useContext(vv);Gt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Rv("useViewTransitionState"),o=_a(i,{relative:e});if(!t.isTransitioning)return!1;let l=Ki(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Ki(t.nextLocation.pathname,s)||t.nextLocation.pathname;return cu(o.pathname,c)!=null||cu(o.pathname,l)!=null}const Hd="178",Gy=0,zm=1,Wy=2,Av=1,Xy=2,Wi=3,Ur=0,On=1,Ei=2,Lr=0,to=1,Hm=2,Vm=3,Gm=4,jy=5,is=100,$y=101,Yy=102,qy=103,Ky=104,Zy=200,Jy=201,Qy=202,eS=203,jf=204,$f=205,tS=206,nS=207,iS=208,rS=209,sS=210,oS=211,aS=212,lS=213,uS=214,Yf=0,qf=1,Kf=2,so=3,Zf=4,Jf=5,Qf=6,ed=7,Cv=0,cS=1,fS=2,Yi=0,dS=1,hS=2,pS=3,mS=4,gS=5,vS=6,_S=7,bv=300,oo=301,ao=302,td=303,nd=304,xu=306,la=1e3,Xi=1001,id=1002,dn=1003,xS=1004,Dl=1005,Mi=1006,cf=1007,ss=1008,Ai=1009,Pv=1010,Lv=1011,ua=1012,Vd=1013,ls=1014,ji=1015,xa=1016,Gd=1017,Wd=1018,ca=1020,Dv=35902,Uv=1021,Nv=1022,di=1023,fa=1026,da=1027,Iv=1028,Xd=1029,Fv=1030,jd=1031,$d=1033,ru=33776,su=33777,ou=33778,au=33779,rd=35840,sd=35841,od=35842,ad=35843,ld=36196,ud=37492,cd=37496,fd=37808,dd=37809,hd=37810,pd=37811,md=37812,gd=37813,vd=37814,_d=37815,xd=37816,yd=37817,Sd=37818,Ed=37819,Md=37820,wd=37821,lu=36492,Td=36494,Rd=36495,Ov=36283,Ad=36284,Cd=36285,bd=36286,yS=3200,SS=3201,ES=0,MS=1,Cr="",An="srgb",lo="srgb-linear",du="linear",Dt="srgb",Fs=7680,Wm=519,wS=512,TS=513,RS=514,kv=515,AS=516,CS=517,bS=518,PS=519,Xm=35044,jm="300 es",$i=2e3,hu=2001;class ho{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $m=1234567;const ra=Math.PI/180,ha=180/Math.PI;function po(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function Yd(i,e){return(i%e+e)%e}function LS(i,e,t,s,o){return s+(i-e)*(o-s)/(t-e)}function DS(i,e,t){return i!==e?(t-i)/(e-i):0}function sa(i,e,t){return(1-t)*i+t*e}function US(i,e,t,s){return sa(i,e,1-Math.exp(-t*s))}function NS(i,e=1){return e-Math.abs(Yd(i,e*2)-e)}function IS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function FS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function OS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function kS(i,e){return i+Math.random()*(e-i)}function BS(i){return i*(.5-Math.random())}function zS(i){i!==void 0&&($m=i);let e=$m+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function HS(i){return i*ra}function VS(i){return i*ha}function GS(i){return(i&i-1)===0&&i!==0}function WS(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function XS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jS(i,e,t,s,o){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),p=l((e+s)/2),m=c((e+s)/2),v=l((e-s)/2),_=c((e-s)/2),S=l((s-e)/2),E=c((s-e)/2);switch(o){case"XYX":i.set(f*m,d*v,d*_,f*p);break;case"YZY":i.set(d*_,f*m,d*v,f*p);break;case"ZXZ":i.set(d*v,d*_,f*m,f*p);break;case"XZX":i.set(f*m,d*E,d*S,f*p);break;case"YXY":i.set(d*S,f*m,d*E,f*p);break;case"ZYZ":i.set(d*E,d*S,f*m,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Qs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $S={DEG2RAD:ra,RAD2DEG:ha,generateUUID:po,clamp:yt,euclideanModulo:Yd,mapLinear:LS,inverseLerp:DS,lerp:sa,damp:US,pingpong:NS,smoothstep:IS,smootherstep:FS,randInt:OS,randFloat:kS,randFloatSpread:BS,seededRandom:zS,degToRad:HS,radToDeg:VS,isPowerOfTwo:GS,ceilPowerOfTwo:WS,floorPowerOfTwo:XS,setQuaternionFromProperEuler:jS,normalize:Tn,denormalize:Qs};class Ct{constructor(e=0,t=0){Ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(yt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ya{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,f){let d=s[o+0],p=s[o+1],m=s[o+2],v=s[o+3];const _=l[c+0],S=l[c+1],E=l[c+2],w=l[c+3];if(f===0){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(f===1){e[t+0]=_,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(v!==w||d!==_||p!==S||m!==E){let y=1-f;const x=d*_+p*S+m*E+v*w,L=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const H=Math.sqrt(P),F=Math.atan2(H,x*L);y=Math.sin(y*F)/H,f=Math.sin(f*F)/H}const C=f*L;if(d=d*y+_*C,p=p*y+S*C,m=m*y+E*C,v=v*y+w*C,y===1-f){const H=1/Math.sqrt(d*d+p*p+m*m+v*v);d*=H,p*=H,m*=H,v*=H}}e[t]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,o,l,c){const f=s[o],d=s[o+1],p=s[o+2],m=s[o+3],v=l[c],_=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+m*v+d*S-p*_,e[t+1]=d*E+m*_+p*v-f*S,e[t+2]=p*E+m*S+f*_-d*v,e[t+3]=m*E-f*v-d*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,p=f(s/2),m=f(o/2),v=f(l/2),_=d(s/2),S=d(o/2),E=d(l/2);switch(c){case"XYZ":this._x=_*m*v+p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v-_*S*E;break;case"YXZ":this._x=_*m*v+p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v+_*S*E;break;case"ZXY":this._x=_*m*v-p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v-_*S*E;break;case"ZYX":this._x=_*m*v-p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v+_*S*E;break;case"YZX":this._x=_*m*v+p*S*E,this._y=p*S*v+_*m*E,this._z=p*m*E-_*S*v,this._w=p*m*v-_*S*E;break;case"XZY":this._x=_*m*v-p*S*E,this._y=p*S*v-_*m*E,this._z=p*m*E+_*S*v,this._w=p*m*v+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],p=t[2],m=t[6],v=t[10],_=s+f+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(s>f&&s>v){const S=2*Math.sqrt(1+s-f-v);this._w=(m-d)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-s-v);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+v-s-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,p=t._z,m=t._w;return this._x=s*m+c*f+o*p-l*d,this._y=o*m+c*d+l*f-s*p,this._z=l*m+c*p+s*d-o*f,this._w=c*m-s*f-o*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=o,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),v=Math.sin((1-t)*m)/p,_=Math.sin(t*m)/p;return this._w=c*v+this._w*_,this._x=s*v+this._x*_,this._y=o*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,s=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,p=2*(c*o-f*s),m=2*(f*t-l*o),v=2*(l*s-c*t);return this.x=t+d*p+c*v-f*m,this.y=s+d*m+f*p-l*v,this.z=o+d*v+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-s*d,this.z=s*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ff.copy(this).projectOnVector(e),this.sub(ff)}reflect(e){return this.sub(ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(yt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ff=new re,Ym=new ya;class ct{constructor(e,t,s,o,l,c,f,d,p){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,d,p)}set(e,t,s,o,l,c,f,d,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=s,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[3],d=s[6],p=s[1],m=s[4],v=s[7],_=s[2],S=s[5],E=s[8],w=o[0],y=o[3],x=o[6],L=o[1],P=o[4],C=o[7],H=o[2],F=o[5],O=o[8];return l[0]=c*w+f*L+d*H,l[3]=c*y+f*P+d*F,l[6]=c*x+f*C+d*O,l[1]=p*w+m*L+v*H,l[4]=p*y+m*P+v*F,l[7]=p*x+m*C+v*O,l[2]=_*w+S*L+E*H,l[5]=_*y+S*P+E*F,l[8]=_*x+S*C+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8];return t*c*m-t*f*p-s*l*m+s*f*d+o*l*p-o*c*d}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=m*c-f*p,_=f*d-m*l,S=p*l-c*d,E=t*v+s*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(o*p-m*s)*w,e[2]=(f*s-o*c)*w,e[3]=_*w,e[4]=(m*t-o*d)*w,e[5]=(o*l-f*t)*w,e[6]=S*w,e[7]=(s*d-p*t)*w,e[8]=(c*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(s*d,s*p,-s*(d*c+p*f)+c+e,-o*p,o*d,-o*(-p*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(df.makeScale(e,t)),this}rotate(e){return this.premultiply(df.makeRotation(-e)),this}translate(e,t){return this.premultiply(df.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const df=new ct;function Bv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function YS(){const i=pa("canvas");return i.style.display="block",i}const qm={};function no(i){i in qm||(qm[i]=!0,console.warn(i))}function qS(i,e,t){return new Promise(function(s,o){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function KS(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ZS(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Km=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JS(){const i={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(o.r=qi(o.r),o.g=qi(o.g),o.b=qi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(o.r=io(o.r),o.g=io(o.g),o.b=io(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Cr?du:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return no("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return no("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[lo]:{primaries:e,whitePoint:s,transfer:du,toXYZ:Km,fromXYZ:Zm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:s,transfer:Dt,toXYZ:Km,fromXYZ:Zm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const Rt=JS();function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Os;class QS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Os===void 0&&(Os=pa("canvas")),Os.width=e.width,Os.height=e.height;const o=Os.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Os}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pa("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=qi(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(qi(t[s]/255)*255):t[s]=qi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eE=0;class qd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(hf(o[c].image)):l.push(hf(o[c]))}else l=hf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function hf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?QS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tE=0;const pf=new re;class bn extends ho{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,s=Xi,o=Xi,l=Mi,c=ss,f=di,d=Ai,p=bn.DEFAULT_ANISOTROPY,m=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=po(),this.name="",this.source=new qd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pf).x}get height(){return this.source.getSize(pf).y}get depth(){return this.source.getSize(pf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case la:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case la:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=bv;bn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,s=0,o=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const d=e.elements,p=d[0],m=d[4],v=d[8],_=d[1],S=d[5],E=d[9],w=d[2],y=d[6],x=d[10];if(Math.abs(m-_)<.01&&Math.abs(v-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+w)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,C=(S+1)/2,H=(x+1)/2,F=(m+_)/4,O=(v+w)/4,j=(E+y)/4;return P>C&&P>H?P<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(P),o=F/s,l=O/s):C>H?C<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),s=F/o,l=j/o):H<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(H),s=O/l,o=j/l),this.set(s,o,l,t),this}let L=Math.sqrt((y-E)*(y-E)+(v-w)*(v-w)+(_-m)*(_-m));return Math.abs(L)<.001&&(L=1),this.x=(y-E)/L,this.y=(v-w)/L,this.z=(_-m)/L,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nE extends ho{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const o={width:e,height:t,depth:s.depth},l=new bn(o);this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Mi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new qd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends nE{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class zv extends bn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iE extends bn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sa{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,li):li.fromBufferAttribute(l,c),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ul.copy(s.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Nl.subVectors(this.max,Zo),ks.subVectors(e.a,Zo),Bs.subVectors(e.b,Zo),zs.subVectors(e.c,Zo),Sr.subVectors(Bs,ks),Er.subVectors(zs,Bs),qr.subVectors(ks,zs);let t=[0,-Sr.z,Sr.y,0,-Er.z,Er.y,0,-qr.z,qr.y,Sr.z,0,-Sr.x,Er.z,0,-Er.x,qr.z,0,-qr.x,-Sr.y,Sr.x,0,-Er.y,Er.x,0,-qr.y,qr.x,0];return!mf(t,ks,Bs,zs,Nl)||(t=[1,0,0,0,1,0,0,0,1],!mf(t,ks,Bs,zs,Nl))?!1:(Il.crossVectors(Sr,Er),t=[Il.x,Il.y,Il.z],mf(t,ks,Bs,zs,Nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new re,new re,new re,new re,new re,new re,new re,new re],li=new re,Ul=new Sa,ks=new re,Bs=new re,zs=new re,Sr=new re,Er=new re,qr=new re,Zo=new re,Nl=new re,Il=new re,Kr=new re;function mf(i,e,t,s,o){for(let l=0,c=i.length-3;l<=c;l+=3){Kr.fromArray(i,l);const f=o.x*Math.abs(Kr.x)+o.y*Math.abs(Kr.y)+o.z*Math.abs(Kr.z),d=e.dot(Kr),p=t.dot(Kr),m=s.dot(Kr);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const rE=new Sa,Jo=new re,gf=new re;class Kd{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):rE.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const t=Jo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Jo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(gf)),this.expandByPoint(Jo.copy(e.center).sub(gf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zi=new re,vf=new re,Fl=new re,Mr=new re,_f=new re,Ol=new re,xf=new re;class sE{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){vf.copy(e).add(t).multiplyScalar(.5),Fl.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(vf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Fl),f=Mr.dot(this.direction),d=-Mr.dot(Fl),p=Mr.lengthSq(),m=Math.abs(1-c*c);let v,_,S,E;if(m>0)if(v=c*d-f,_=c*f-d,E=l*m,v>=0)if(_>=-E)if(_<=E){const w=1/m;v*=w,_*=w,S=v*(v+c*_+2*f)+_*(c*v+_+2*d)+p}else _=l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;else _=-l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;else _<=-E?(v=Math.max(0,-(-c*l+f)),_=v>0?-l:Math.min(Math.max(-l,-d),l),S=-v*v+_*(_+2*d)+p):_<=E?(v=0,_=Math.min(Math.max(-l,-d),l),S=_*(_+2*d)+p):(v=Math.max(0,-(c*l+f)),_=v>0?l:Math.min(Math.max(-l,-d),l),S=-v*v+_*(_+2*d)+p);else _=c>0?-l:l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*d)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(vf).addScaledVector(Fl,_),S}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const s=zi.dot(this.direction),o=zi.dot(zi)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=s-c,d=s+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,f,d;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),m>=0?(l=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),v>=0?(f=(e.min.z-_.z)*v,d=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,d=(e.min.z-_.z)*v),s>d||f>o)||((f>s||s!==s)&&(s=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,s,o,l){_f.subVectors(t,e),Ol.subVectors(s,e),xf.crossVectors(_f,Ol);let c=this.direction.dot(xf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Mr.subVectors(this.origin,e);const d=f*this.direction.dot(Ol.crossVectors(Mr,Ol));if(d<0)return null;const p=f*this.direction.dot(_f.cross(Mr));if(p<0||d+p>c)return null;const m=-f*Mr.dot(xf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,s,o,l,c,f,d,p,m,v,_,S,E,w,y){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,d,p,m,v,_,S,E,w,y)}set(e,t,s,o,l,c,f,d,p,m,v,_,S,E,w,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=o,x[1]=l,x[5]=c,x[9]=f,x[13]=d,x[2]=p,x[6]=m,x[10]=v,x[14]=_,x[3]=S,x[7]=E,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),c=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),d=Math.cos(o),p=Math.sin(o),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=c*m,S=c*v,E=f*m,w=f*v;t[0]=d*m,t[4]=-d*v,t[8]=p,t[1]=S+E*p,t[5]=_-w*p,t[9]=-f*d,t[2]=w-_*p,t[6]=E+S*p,t[10]=c*d}else if(e.order==="YXZ"){const _=d*m,S=d*v,E=p*m,w=p*v;t[0]=_+w*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*m,t[9]=-f,t[2]=S*f-E,t[6]=w+_*f,t[10]=c*d}else if(e.order==="ZXY"){const _=d*m,S=d*v,E=p*m,w=p*v;t[0]=_-w*f,t[4]=-c*v,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*m,t[9]=w-_*f,t[2]=-c*p,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const _=c*m,S=c*v,E=f*m,w=f*v;t[0]=d*m,t[4]=E*p-S,t[8]=_*p+w,t[1]=d*v,t[5]=w*p+_,t[9]=S*p-E,t[2]=-p,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,S=c*p,E=f*d,w=f*p;t[0]=d*m,t[4]=w-_*v,t[8]=E*v+S,t[1]=v,t[5]=c*m,t[9]=-f*m,t[2]=-p*m,t[6]=S*v+E,t[10]=_-w*v}else if(e.order==="XZY"){const _=c*d,S=c*p,E=f*d,w=f*p;t[0]=d*m,t[4]=-v,t[8]=p*m,t[1]=_*v+w,t[5]=c*m,t[9]=S*v-E,t[2]=E*v-S,t[6]=f*m,t[10]=w*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oE,e,aE)}lookAt(e,t,s){const o=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),wr.crossVectors(s,Vn),wr.lengthSq()===0&&(Math.abs(s.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),wr.crossVectors(s,Vn)),wr.normalize(),kl.crossVectors(Vn,wr),o[0]=wr.x,o[4]=kl.x,o[8]=Vn.x,o[1]=wr.y,o[5]=kl.y,o[9]=Vn.y,o[2]=wr.z,o[6]=kl.z,o[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[4],d=s[8],p=s[12],m=s[1],v=s[5],_=s[9],S=s[13],E=s[2],w=s[6],y=s[10],x=s[14],L=s[3],P=s[7],C=s[11],H=s[15],F=o[0],O=o[4],j=o[8],b=o[12],R=o[1],z=o[5],ue=o[9],J=o[13],ce=o[2],ve=o[6],ie=o[10],xe=o[14],V=o[3],fe=o[7],le=o[11],I=o[15];return l[0]=c*F+f*R+d*ce+p*V,l[4]=c*O+f*z+d*ve+p*fe,l[8]=c*j+f*ue+d*ie+p*le,l[12]=c*b+f*J+d*xe+p*I,l[1]=m*F+v*R+_*ce+S*V,l[5]=m*O+v*z+_*ve+S*fe,l[9]=m*j+v*ue+_*ie+S*le,l[13]=m*b+v*J+_*xe+S*I,l[2]=E*F+w*R+y*ce+x*V,l[6]=E*O+w*z+y*ve+x*fe,l[10]=E*j+w*ue+y*ie+x*le,l[14]=E*b+w*J+y*xe+x*I,l[3]=L*F+P*R+C*ce+H*V,l[7]=L*O+P*z+C*ve+H*fe,l[11]=L*j+P*ue+C*ie+H*le,l[15]=L*b+P*J+C*xe+H*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],p=e[13],m=e[2],v=e[6],_=e[10],S=e[14],E=e[3],w=e[7],y=e[11],x=e[15];return E*(+l*d*v-o*p*v-l*f*_+s*p*_+o*f*S-s*d*S)+w*(+t*d*S-t*p*_+l*c*_-o*c*S+o*p*m-l*d*m)+y*(+t*p*v-t*f*S-l*c*v+s*c*S+l*f*m-s*p*m)+x*(-o*f*m-t*d*v+t*f*_+o*c*v-s*c*_+s*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=e[9],_=e[10],S=e[11],E=e[12],w=e[13],y=e[14],x=e[15],L=v*y*p-w*_*p+w*d*S-f*y*S-v*d*x+f*_*x,P=E*_*p-m*y*p-E*d*S+c*y*S+m*d*x-c*_*x,C=m*w*p-E*v*p+E*f*S-c*w*S-m*f*x+c*v*x,H=E*v*d-m*w*d-E*f*_+c*w*_+m*f*y-c*v*y,F=t*L+s*P+o*C+l*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=L*O,e[1]=(w*_*l-v*y*l-w*o*S+s*y*S+v*o*x-s*_*x)*O,e[2]=(f*y*l-w*d*l+w*o*p-s*y*p-f*o*x+s*d*x)*O,e[3]=(v*d*l-f*_*l-v*o*p+s*_*p+f*o*S-s*d*S)*O,e[4]=P*O,e[5]=(m*y*l-E*_*l+E*o*S-t*y*S-m*o*x+t*_*x)*O,e[6]=(E*d*l-c*y*l-E*o*p+t*y*p+c*o*x-t*d*x)*O,e[7]=(c*_*l-m*d*l+m*o*p-t*_*p-c*o*S+t*d*S)*O,e[8]=C*O,e[9]=(E*v*l-m*w*l-E*s*S+t*w*S+m*s*x-t*v*x)*O,e[10]=(c*w*l-E*f*l+E*s*p-t*w*p-c*s*x+t*f*x)*O,e[11]=(m*f*l-c*v*l-m*s*p+t*v*p+c*s*S-t*f*S)*O,e[12]=H*O,e[13]=(m*w*o-E*v*o+E*s*_-t*w*_-m*s*y+t*v*y)*O,e[14]=(E*f*o-c*w*o-E*s*d+t*w*d+c*s*y-t*f*y)*O,e[15]=(c*v*o-m*f*o+m*s*d-t*v*d-c*s*_+t*f*_)*O,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,f=e.y,d=e.z,p=l*c,m=l*f;return this.set(p*c+s,p*f-o*d,p*d+o*f,0,p*f+o*d,m*f+s,m*d-o*c,0,p*d-o*f,m*d+o*c,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,p=l+l,m=c+c,v=f+f,_=l*p,S=l*m,E=l*v,w=c*m,y=c*v,x=f*v,L=d*p,P=d*m,C=d*v,H=s.x,F=s.y,O=s.z;return o[0]=(1-(w+x))*H,o[1]=(S+C)*H,o[2]=(E-P)*H,o[3]=0,o[4]=(S-C)*F,o[5]=(1-(_+x))*F,o[6]=(y+L)*F,o[7]=0,o[8]=(E+P)*O,o[9]=(y-L)*O,o[10]=(1-(_+w))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Hs.set(o[0],o[1],o[2]).length();const c=Hs.set(o[4],o[5],o[6]).length(),f=Hs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ui.copy(this);const p=1/l,m=1/c,v=1/f;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=m,ui.elements[5]*=m,ui.elements[6]*=m,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,t.setFromRotationMatrix(ui),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,o,l,c,f=$i){const d=this.elements,p=2*l/(t-e),m=2*l/(s-o),v=(t+e)/(t-e),_=(s+o)/(s-o);let S,E;if(f===$i)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===hu)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,o,l,c,f=$i){const d=this.elements,p=1/(t-e),m=1/(s-o),v=1/(c-l),_=(t+e)*p,S=(s+o)*m;let E,w;if(f===$i)E=(c+l)*v,w=-2*v;else if(f===hu)E=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=w,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Hs=new re,ui=new $t,oE=new re(0,0,0),aE=new re(1,1,1),wr=new re,kl=new re,Vn=new re,Jm=new $t,Qm=new ya;class Cn{constructor(e=0,t=0,s=0,o=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],p=o[5],m=o[9],v=o[2],_=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qm.setFromEuler(this),this.setFromQuaternion(Qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Hv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lE=0;const eg=new re,Vs=new ya,Hi=new $t,Bl=new re,Qo=new re,uE=new re,cE=new ya,tg=new re(1,0,0),ng=new re(0,1,0),ig=new re(0,0,1),rg={type:"added"},fE={type:"removed"},Gs={type:"childadded",child:null},yf={type:"childremoved",child:null};class yn extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new re,t=new Cn,s=new ya,o=new re(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new ct}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(tg,e)}rotateY(e){return this.rotateOnAxis(ng,e)}rotateZ(e){return this.rotateOnAxis(ig,e)}translateOnAxis(e,t){return eg.copy(e).applyQuaternion(this.quaternion),this.position.add(eg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tg,e)}translateY(e){return this.translateOnAxis(ng,e)}translateZ(e){return this.translateOnAxis(ig,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Bl.copy(e):Bl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Qo,Bl,this.up):Hi.lookAt(Bl,Qo,this.up),this.quaternion.setFromRotationMatrix(Hi),o&&(Hi.extractRotation(o.matrixWorld),Vs.setFromRotationMatrix(Hi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rg),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fE),yf.child=e,this.dispatchEvent(yf),yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rg),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,uE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,cE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const v=d[p];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),p=c(e.textures),m=c(e.images),v=c(e.shapes),_=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),d.length>0&&(s.materials=d),p.length>0&&(s.textures=p),m.length>0&&(s.images=m),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=o,s;function c(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}yn.DEFAULT_UP=new re(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new re,Vi=new re,Sf=new re,Gi=new re,Ws=new re,Xs=new re,sg=new re,Ef=new re,Mf=new re,wf=new re,Tf=new jt,Rf=new jt,Af=new jt;class fi{constructor(e=new re,t=new re,s=new re){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),ci.subVectors(e,t),o.cross(ci);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){ci.subVectors(o,t),Vi.subVectors(s,t),Sf.subVectors(e,t);const c=ci.dot(ci),f=ci.dot(Vi),d=ci.dot(Sf),p=Vi.dot(Vi),m=Vi.dot(Sf),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,S=(p*d-f*m)*_,E=(c*m-f*d)*_;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,s,o,l,c,f,d){return this.getBarycoord(e,t,s,o,Gi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Gi.x),d.addScaledVector(c,Gi.y),d.addScaledVector(f,Gi.z),d)}static getInterpolatedAttribute(e,t,s,o,l,c){return Tf.setScalar(0),Rf.setScalar(0),Af.setScalar(0),Tf.fromBufferAttribute(e,t),Rf.fromBufferAttribute(e,s),Af.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Tf,l.x),c.addScaledVector(Rf,l.y),c.addScaledVector(Af,l.z),c}static isFrontFacing(e,t,s,o){return ci.subVectors(s,t),Vi.subVectors(e,t),ci.cross(Vi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ci.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return fi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,f;Ws.subVectors(o,s),Xs.subVectors(l,s),Ef.subVectors(e,s);const d=Ws.dot(Ef),p=Xs.dot(Ef);if(d<=0&&p<=0)return t.copy(s);Mf.subVectors(e,o);const m=Ws.dot(Mf),v=Xs.dot(Mf);if(m>=0&&v<=m)return t.copy(o);const _=d*v-m*p;if(_<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(s).addScaledVector(Ws,c);wf.subVectors(e,l);const S=Ws.dot(wf),E=Xs.dot(wf);if(E>=0&&S<=E)return t.copy(l);const w=S*p-d*E;if(w<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(Xs,f);const y=m*E-S*v;if(y<=0&&v-m>=0&&S-E>=0)return sg.subVectors(l,o),f=(v-m)/(v-m+(S-E)),t.copy(o).addScaledVector(sg,f);const x=1/(y+w+_);return c=w*x,f=_*x,t.copy(s).addScaledVector(Ws,c).addScaledVector(Xs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},zl={h:0,s:0,l:0};function Cf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Rt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Rt.workingColorSpace){if(e=Yd(e,1),t=yt(t,0,1),s=yt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Cf(c,l,e+1/3),this.g=Cf(c,l,e),this.b=Cf(c,l,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,t=An){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const s=Vv[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Rt.workingToColorSpace(xn.copy(this),e),Math.round(yt(xn.r*255,0,255))*65536+Math.round(yt(xn.g*255,0,255))*256+Math.round(yt(xn.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(xn.copy(this),t);const s=xn.r,o=xn.g,l=xn.b,c=Math.max(s,o,l),f=Math.min(s,o,l);let d,p;const m=(f+c)/2;if(f===c)d=0,p=0;else{const v=c-f;switch(p=m<=.5?v/(c+f):v/(2-c-f),c){case s:d=(o-l)/v+(o<l?6:0);break;case o:d=(l-s)/v+2;break;case l:d=(s-o)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=m,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=An){Rt.workingToColorSpace(xn.copy(this),e);const t=xn.r,s=xn.g,o=xn.b;return e!==An?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(zl);const s=sa(Tr.h,zl.h,t),o=sa(Tr.s,zl.s,t),l=sa(Tr.l,zl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Pt;Pt.NAMES=Vv;let dE=0;class yu extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=po(),this.name="",this.type="Material",this.blending=to,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jf,this.blendDst=$f,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(s.blending=this.blending),this.side!==Ur&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==jf&&(s.blendSrc=this.blendSrc),this.blendDst!==$f&&(s.blendDst=this.blendDst),this.blendEquation!==is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zd extends yu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new re,Hl=new Ct;let hE=0;class Ti{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Xm,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Hl.fromBufferAttribute(this,t),Hl.applyMatrix3(e),this.setXY(t,Hl.x,Hl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Qs(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Tn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array),o=Tn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array),o=Tn(o,this.array),l=Tn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xm&&(e.usage=this.usage),e}}class Gv extends Ti{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Wv extends Ti{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class os extends Ti{constructor(e,t,s){super(new Float32Array(e),t,s)}}let pE=0;const Kn=new $t,bf=new yn,js=new re,Gn=new Sa,ea=new Sa,ln=new re;class fs extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bv(e)?Wv:Gv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ct().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,s){return Kn.makeTranslation(e,t,s),this.applyMatrix4(Kn),this}scale(e,t,s){return Kn.makeScale(e,t,s),this.applyMatrix4(Kn),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new os(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const s=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ea.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Gn.min,ea.min),Gn.expandByPoint(ln),ln.addVectors(Gn.max,ea.max),Gn.expandByPoint(ln)):(Gn.expandByPoint(ea.min),Gn.expandByPoint(ea.max))}Gn.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(ln));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)ln.fromBufferAttribute(f,p),d&&(js.fromBufferAttribute(e,p),ln.add(js)),o=Math.max(o,s.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let j=0;j<s.count;j++)f[j]=new re,d[j]=new re;const p=new re,m=new re,v=new re,_=new Ct,S=new Ct,E=new Ct,w=new re,y=new re;function x(j,b,R){p.fromBufferAttribute(s,j),m.fromBufferAttribute(s,b),v.fromBufferAttribute(s,R),_.fromBufferAttribute(l,j),S.fromBufferAttribute(l,b),E.fromBufferAttribute(l,R),m.sub(p),v.sub(p),S.sub(_),E.sub(_);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(w.copy(m).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(z),y.copy(v).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(z),f[j].add(w),f[b].add(w),f[R].add(w),d[j].add(y),d[b].add(y),d[R].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let j=0,b=L.length;j<b;++j){const R=L[j],z=R.start,ue=R.count;for(let J=z,ce=z+ue;J<ce;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const P=new re,C=new re,H=new re,F=new re;function O(j){H.fromBufferAttribute(o,j),F.copy(H);const b=f[j];P.copy(b),P.sub(H.multiplyScalar(H.dot(b))).normalize(),C.crossVectors(F,b);const z=C.dot(d[j])<0?-1:1;c.setXYZW(j,P.x,P.y,P.z,z)}for(let j=0,b=L.length;j<b;++j){const R=L[j],z=R.start,ue=R.count;for(let J=z,ce=z+ue;J<ce;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ti(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const o=new re,l=new re,c=new re,f=new re,d=new re,p=new re,m=new re,v=new re;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),w=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),m.subVectors(c,l),v.subVectors(o,l),m.cross(v),f.fromBufferAttribute(s,E),d.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),f.add(m),d.add(m),p.add(m),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(w,d.x,d.y,d.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,l),v.subVectors(o,l),m.cross(v),s.setXYZ(_+0,m.x,m.y,m.z),s.setXYZ(_+1,m.x,m.y,m.z),s.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,d){const p=f.array,m=f.itemSize,v=f.normalized,_=new p.constructor(d.length*m);let S=0,E=0;for(let w=0,y=d.length;w<y;w++){f.isInterleavedBufferAttribute?S=d[w]*f.data.stride+f.offset:S=d[w]*m;for(let x=0;x<m;x++)_[E++]=p[S++]}return new Ti(_,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fs,s=this.index.array,o=this.attributes;for(const f in o){const d=o[f],p=e(d,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,v=p.length;m<v;m++){const _=p[m],S=e(_,s);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const p=s[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let v=0,_=p.length;v<_;v++){const S=p[v];m.push(S.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],v=l[p];for(let _=0,S=v.length;_<S;_++)m.push(v[_].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const og=new $t,Zr=new sE,Vl=new Kd,ag=new re,Gl=new re,Wl=new re,Xl=new re,Pf=new re,jl=new re,lg=new re,$l=new re;class wi extends yn{constructor(e=new fs,t=new Zd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){jl.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],v=l[d];m!==0&&(Pf.fromBufferAttribute(v,e),c?jl.addScaledVector(Pf,m):jl.addScaledVector(Pf.sub(t),m))}t.add(jl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Vl.copy(s.boundingSphere),Vl.applyMatrix4(l),Zr.copy(e.ray).recast(e.near),!(Vl.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Vl,ag)===null||Zr.origin.distanceToSquared(ag)>(e.far-e.near)**2))&&(og.copy(l).invert(),Zr.copy(e.ray).applyMatrix4(og),!(s.boundingBox!==null&&Zr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const y=_[E],x=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,H=P;C<H;C+=3){const F=f.getX(C),O=f.getX(C+1),j=f.getX(C+2);o=Yl(this,x,e,s,p,m,v,F,O,j),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=E,x=w;y<x;y+=3){const L=f.getX(y),P=f.getX(y+1),C=f.getX(y+2);o=Yl(this,c,e,s,p,m,v,L,P,C),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const y=_[E],x=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,H=P;C<H;C+=3){const F=C,O=C+1,j=C+2;o=Yl(this,x,e,s,p,m,v,F,O,j),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=E,x=w;y<x;y+=3){const L=y,P=y+1,C=y+2;o=Yl(this,c,e,s,p,m,v,L,P,C),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function mE(i,e,t,s,o,l,c,f){let d;if(e.side===On?d=s.intersectTriangle(c,l,o,!0,f):d=s.intersectTriangle(o,l,c,e.side===Ur,f),d===null)return null;$l.copy(f),$l.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo($l);return p<t.near||p>t.far?null:{distance:p,point:$l.clone(),object:i}}function Yl(i,e,t,s,o,l,c,f,d,p){i.getVertexPosition(f,Gl),i.getVertexPosition(d,Wl),i.getVertexPosition(p,Xl);const m=mE(i,e,t,s,Gl,Wl,Xl,lg);if(m){const v=new re;fi.getBarycoord(lg,Gl,Wl,Xl,v),o&&(m.uv=fi.getInterpolatedAttribute(o,f,d,p,v,new Ct)),l&&(m.uv1=fi.getInterpolatedAttribute(l,f,d,p,v,new Ct)),c&&(m.normal=fi.getInterpolatedAttribute(c,f,d,p,v,new re),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:d,c:p,normal:new re,materialIndex:0};fi.getNormal(Gl,Wl,Xl,_.normal),m.face=_,m.barycoord=v}return m}class mo extends fs{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],m=[],v=[];let _=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,o,c,2),E("x","z","y",1,-1,e,s,-t,o,c,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(d),this.setAttribute("position",new os(p,3)),this.setAttribute("normal",new os(m,3)),this.setAttribute("uv",new os(v,2));function E(w,y,x,L,P,C,H,F,O,j,b){const R=C/O,z=H/j,ue=C/2,J=H/2,ce=F/2,ve=O+1,ie=j+1;let xe=0,V=0;const fe=new re;for(let le=0;le<ie;le++){const I=le*z-J;for(let se=0;se<ve;se++){const Fe=se*R-ue;fe[w]=Fe*L,fe[y]=I*P,fe[x]=ce,p.push(fe.x,fe.y,fe.z),fe[w]=0,fe[y]=0,fe[x]=F>0?1:-1,m.push(fe.x,fe.y,fe.z),v.push(se/O),v.push(1-le/j),xe+=1}}for(let le=0;le<j;le++)for(let I=0;I<O;I++){const se=_+I+ve*le,Fe=_+I+ve*(le+1),N=_+(I+1)+ve*(le+1),te=_+(I+1)+ve*le;d.push(se,Fe,te),d.push(Fe,N,te),V+=6}f.addGroup(S,V,b),S+=V,_+=xe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const o=i[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function Rn(i){const e={};for(let t=0;t<i.length;t++){const s=uo(i[t]);for(const o in s)e[o]=s[o]}return e}function gE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const vE={clone:uo,merge:Rn};var _E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nr extends yu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_E,this.fragmentShader=xE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=gE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class jv extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new re,ug=new Ct,cg=new Ct;class ei extends jv{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,ug,cg),t.subVectors(cg,ug)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ra*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*s/p,o*=c.width/d,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Ys=1;class yE extends yn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ei($s,Ys,e,t);o.layers=this.layers,this.add(o);const l=new ei($s,Ys,e,t);l.layers=this.layers,this.add(l);const c=new ei($s,Ys,e,t);c.layers=this.layers,this.add(c);const f=new ei($s,Ys,e,t);f.layers=this.layers,this.add(f);const d=new ei($s,Ys,e,t);d.layers=this.layers,this.add(d);const p=new ei($s,Ys,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,f,d]=t;for(const p of t)this.remove(p);if(e===$i)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===hu)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,m]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,c),e.setRenderTarget(s,2,o),e.render(t,f),e.setRenderTarget(s,3,o),e.render(t,d),e.setRenderTarget(s,4,o),e.render(t,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,o),e.render(t,m),e.setRenderTarget(v,_,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class $v extends bn{constructor(e=[],t=oo,s,o,l,c,f,d,p,m){super(e,t,s,o,l,c,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SE extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new $v(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new mo(5,5,5),l=new Nr({name:"CubemapFromEquirect",uniforms:uo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:On,blending:Lr});l.uniforms.tEquirect.value=t;const c=new wi(o,l),f=t.minFilter;return t.minFilter===ss&&(t.minFilter=Mi),new yE(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}class ta extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EE={type:"move"};class Lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,s),x=this._getHandJoint(p,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=m.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(EE)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new ta;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class ME extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Df=new re,wE=new re,TE=new ct;class ts{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Df.subVectors(s,t).cross(wE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Df),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||TE.getNormalMatrix(e),o=this.coplanarPoint(Df).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new Kd,RE=new Ct(.5,.5),ql=new re;class Jd{constructor(e=new ts,t=new ts,s=new ts,o=new ts,l=new ts,c=new ts){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=$i){const s=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],d=o[3],p=o[4],m=o[5],v=o[6],_=o[7],S=o[8],E=o[9],w=o[10],y=o[11],x=o[12],L=o[13],P=o[14],C=o[15];if(s[0].setComponents(d-l,_-p,y-S,C-x).normalize(),s[1].setComponents(d+l,_+p,y+S,C+x).normalize(),s[2].setComponents(d+c,_+m,y+E,C+L).normalize(),s[3].setComponents(d-c,_-m,y-E,C-L).normalize(),s[4].setComponents(d-f,_-v,y-w,C-P).normalize(),t===$i)s[5].setComponents(d+f,_+v,y+w,C+P).normalize();else if(t===hu)s[5].setComponents(f,v,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const t=RE.distanceTo(e.center);return Jr.radius=.7071067811865476+t,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(ql.x=o.normal.x>0?e.max.x:e.min.x,ql.y=o.normal.y>0?e.max.y:e.min.y,ql.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yv extends bn{constructor(e,t,s=ls,o,l,c,f=dn,d=dn,p,m=fa,v=1){if(m!==fa&&m!==da)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,o,l,c,f,d,m,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Su extends fs{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(s),d=Math.floor(o),p=f+1,m=d+1,v=e/f,_=t/d,S=[],E=[],w=[],y=[];for(let x=0;x<m;x++){const L=x*_-c;for(let P=0;P<p;P++){const C=P*v-l;E.push(C,-L,0),w.push(0,0,1),y.push(P/f),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let L=0;L<f;L++){const P=L+p*x,C=L+p*(x+1),H=L+1+p*(x+1),F=L+1+p*x;S.push(P,C,F),S.push(C,H,F)}this.setIndex(S),this.setAttribute("position",new os(E,3)),this.setAttribute("normal",new os(w,3)),this.setAttribute("uv",new os(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.width,e.height,e.widthSegments,e.heightSegments)}}class AE extends yu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CE extends yu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Uf={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class bE{constructor(e,t,s){const o=this;let l=!1,c=0,f=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){f++,l===!1&&o.onStart!==void 0&&o.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,o.onProgress!==void 0&&o.onProgress(m,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,v){return p.push(m,v),this},this.removeHandler=function(m){const v=p.indexOf(m);return v!==-1&&p.splice(v,2),this},this.getHandler=function(m){for(let v=0,_=p.length;v<_;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(m))return E}return null}}}const PE=new bE;class Qd{constructor(e){this.manager=e!==void 0?e:PE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qd.DEFAULT_MATERIAL_NAME="__DEFAULT";const qs=new WeakMap;class LE extends Qd{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Uf.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let v=qs.get(c);v===void 0&&(v=[],qs.set(c,v)),v.push({onLoad:t,onError:o})}return c}const f=pa("img");function d(){m(),t&&t(this);const v=qs.get(this)||[];for(let _=0;_<v.length;_++){const S=v[_];S.onLoad&&S.onLoad(this)}qs.delete(this),l.manager.itemEnd(e)}function p(v){m(),o&&o(v),Uf.remove(`image:${e}`);const _=qs.get(this)||[];for(let S=0;S<_.length;S++){const E=_[S];E.onError&&E.onError(v)}qs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Uf.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class DE extends Qd{constructor(e){super(e)}load(e,t,s,o){const l=new bn,c=new LE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}}class UE extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Nf=new $t,fg=new re,dg=new re;class NE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jd,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;fg.setFromMatrixPosition(e.matrixWorld),t.position.copy(fg),dg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dg),t.updateMatrixWorld(),Nf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nf),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Nf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qv extends jv{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class IE extends NE{constructor(){super(new qv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class FE extends UE{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new IE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class OE extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function hg(i,e,t,s){const o=kE(s);switch(t){case Uv:return i*e;case Iv:return i*e/o.components*o.byteLength;case Xd:return i*e/o.components*o.byteLength;case Fv:return i*e*2/o.components*o.byteLength;case jd:return i*e*2/o.components*o.byteLength;case Nv:return i*e*3/o.components*o.byteLength;case di:return i*e*4/o.components*o.byteLength;case $d:return i*e*4/o.components*o.byteLength;case ru:case su:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ou:case au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sd:case ad:return Math.max(i,16)*Math.max(e,8)/4;case rd:case od:return Math.max(i,8)*Math.max(e,8)/2;case ld:case ud:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case hd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case md:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _d:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Md:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case lu:case Td:case Rd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ov:case Ad:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cd:case bd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kE(i){switch(i){case Ai:case Pv:return{byteLength:1,components:1};case ua:case Lv:case xa:return{byteLength:2,components:1};case Gd:case Wd:return{byteLength:2,components:4};case ls:case Vd:case ji:return{byteLength:4,components:1};case Dv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);function Kv(){let i=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function BE(i){const e=new WeakMap;function t(f,d){const p=f.array,m=f.usage,v=p.byteLength,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,p,m),f.onUploadCallback();let S;if(p instanceof Float32Array)S=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=i.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=i.SHORT;else if(p instanceof Uint32Array)S=i.UNSIGNED_INT;else if(p instanceof Int32Array)S=i.INT;else if(p instanceof Int8Array)S=i.BYTE;else if(p instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,d,p){const m=d.array,v=d.updateRanges;if(i.bindBuffer(p,f),v.length===0)i.bufferSubData(p,0,m);else{v.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<v.length;S++){const E=v[_],w=v[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++_,v[_]=w)}v.length=_+1;for(let S=0,E=v.length;S<E;S++){const w=v[S];i.bufferSubData(p,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(i.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,d),p.version=f.version}}return{get:o,remove:l,update:c}}var zE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HE=`#ifdef USE_ALPHAHASH
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
#endif`,VE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jE=`#ifdef USE_AOMAP
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
#endif`,$E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YE=`#ifdef USE_BATCHING
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
#endif`,qE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QE=`#ifdef USE_IRIDESCENCE
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
#endif`,eM=`#ifdef USE_BUMPMAP
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uM=`#define PI 3.141592653589793
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
} // validated`,cM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fM=`vec3 transformedNormal = objectNormal;
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
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gM="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_M=`#ifdef USE_ENVMAP
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
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AM=`#ifdef USE_GRADIENTMAP
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
}`,CM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LM=`uniform bool receiveShadow;
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
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,UM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OM=`PhysicalMaterial material;
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
#endif`,kM=`struct PhysicalMaterial {
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
}`,BM=`
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
#endif`,zM=`#if defined( RE_IndirectDiffuse )
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
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qM=`#if defined( USE_POINTS_UV )
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
#endif`,KM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ew=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tw=`#ifdef USE_MORPHTARGETS
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
#endif`,nw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ow=`#ifndef FLAT_SHADED
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
#endif`,lw=`#ifdef USE_NORMALMAP
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
#endif`,uw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_w=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ew=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ww=`float getShadowMask() {
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
}`,Tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rw=`#ifdef USE_SKINNING
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
#endif`,Aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cw=`#ifdef USE_SKINNING
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
#endif`,bw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uw=`#ifdef USE_TRANSMISSION
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
#endif`,Nw=`#ifdef USE_TRANSMISSION
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
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zw=`uniform sampler2D t2D;
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
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ww=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xw=`#include <common>
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
}`,jw=`#if DEPTH_PACKING == 3200
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
}`,$w=`#define DISTANCE
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
}`,Yw=`#define DISTANCE
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
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zw=`uniform float scale;
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
}`,Jw=`uniform vec3 diffuse;
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
}`,Qw=`#include <common>
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
}`,eT=`uniform vec3 diffuse;
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
}`,tT=`#define LAMBERT
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
}`,nT=`#define LAMBERT
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
}`,iT=`#define MATCAP
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
}`,rT=`#define MATCAP
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
}`,sT=`#define NORMAL
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
}`,oT=`#define NORMAL
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
}`,lT=`#define PHONG
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
}`,uT=`#define STANDARD
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
}`,cT=`#define STANDARD
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
}`,fT=`#define TOON
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
}`,dT=`#define TOON
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
}`,hT=`uniform float size;
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
}`,pT=`uniform vec3 diffuse;
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
}`,mT=`#include <common>
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
}`,gT=`uniform vec3 color;
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
}`,vT=`uniform float rotation;
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
}`,_T=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:zE,alphahash_pars_fragment:HE,alphamap_fragment:VE,alphamap_pars_fragment:GE,alphatest_fragment:WE,alphatest_pars_fragment:XE,aomap_fragment:jE,aomap_pars_fragment:$E,batching_pars_vertex:YE,batching_vertex:qE,begin_vertex:KE,beginnormal_vertex:ZE,bsdfs:JE,iridescence_fragment:QE,bumpmap_pars_fragment:eM,clipping_planes_fragment:tM,clipping_planes_pars_fragment:nM,clipping_planes_pars_vertex:iM,clipping_planes_vertex:rM,color_fragment:sM,color_pars_fragment:oM,color_pars_vertex:aM,color_vertex:lM,common:uM,cube_uv_reflection_fragment:cM,defaultnormal_vertex:fM,displacementmap_pars_vertex:dM,displacementmap_vertex:hM,emissivemap_fragment:pM,emissivemap_pars_fragment:mM,colorspace_fragment:gM,colorspace_pars_fragment:vM,envmap_fragment:_M,envmap_common_pars_fragment:xM,envmap_pars_fragment:yM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:DM,envmap_vertex:EM,fog_vertex:MM,fog_pars_vertex:wM,fog_fragment:TM,fog_pars_fragment:RM,gradientmap_pars_fragment:AM,lightmap_pars_fragment:CM,lights_lambert_fragment:bM,lights_lambert_pars_fragment:PM,lights_pars_begin:LM,lights_toon_fragment:UM,lights_toon_pars_fragment:NM,lights_phong_fragment:IM,lights_phong_pars_fragment:FM,lights_physical_fragment:OM,lights_physical_pars_fragment:kM,lights_fragment_begin:BM,lights_fragment_maps:zM,lights_fragment_end:HM,logdepthbuf_fragment:VM,logdepthbuf_pars_fragment:GM,logdepthbuf_pars_vertex:WM,logdepthbuf_vertex:XM,map_fragment:jM,map_pars_fragment:$M,map_particle_fragment:YM,map_particle_pars_fragment:qM,metalnessmap_fragment:KM,metalnessmap_pars_fragment:ZM,morphinstance_vertex:JM,morphcolor_vertex:QM,morphnormal_vertex:ew,morphtarget_pars_vertex:tw,morphtarget_vertex:nw,normal_fragment_begin:iw,normal_fragment_maps:rw,normal_pars_fragment:sw,normal_pars_vertex:ow,normal_vertex:aw,normalmap_pars_fragment:lw,clearcoat_normal_fragment_begin:uw,clearcoat_normal_fragment_maps:cw,clearcoat_pars_fragment:fw,iridescence_pars_fragment:dw,opaque_fragment:hw,packing:pw,premultiplied_alpha_fragment:mw,project_vertex:gw,dithering_fragment:vw,dithering_pars_fragment:_w,roughnessmap_fragment:xw,roughnessmap_pars_fragment:yw,shadowmap_pars_fragment:Sw,shadowmap_pars_vertex:Ew,shadowmap_vertex:Mw,shadowmask_pars_fragment:ww,skinbase_vertex:Tw,skinning_pars_vertex:Rw,skinning_vertex:Aw,skinnormal_vertex:Cw,specularmap_fragment:bw,specularmap_pars_fragment:Pw,tonemapping_fragment:Lw,tonemapping_pars_fragment:Dw,transmission_fragment:Uw,transmission_pars_fragment:Nw,uv_pars_fragment:Iw,uv_pars_vertex:Fw,uv_vertex:Ow,worldpos_vertex:kw,background_vert:Bw,background_frag:zw,backgroundCube_vert:Hw,backgroundCube_frag:Vw,cube_vert:Gw,cube_frag:Ww,depth_vert:Xw,depth_frag:jw,distanceRGBA_vert:$w,distanceRGBA_frag:Yw,equirect_vert:qw,equirect_frag:Kw,linedashed_vert:Zw,linedashed_frag:Jw,meshbasic_vert:Qw,meshbasic_frag:eT,meshlambert_vert:tT,meshlambert_frag:nT,meshmatcap_vert:iT,meshmatcap_frag:rT,meshnormal_vert:sT,meshnormal_frag:oT,meshphong_vert:aT,meshphong_frag:lT,meshphysical_vert:uT,meshphysical_frag:cT,meshtoon_vert:fT,meshtoon_frag:dT,points_vert:hT,points_frag:pT,shadow_vert:mT,shadow_frag:gT,sprite_vert:vT,sprite_frag:_T},Ie={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Si={basic:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Rn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Rn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Rn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Rn([Ie.points,Ie.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Rn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Rn([Ie.common,Ie.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Rn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Rn([Ie.sprite,Ie.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Rn([Ie.common,Ie.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Rn([Ie.lights,Ie.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Si.physical={uniforms:Rn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Kl={r:0,b:0,g:0},Qr=new Cn,xT=new $t;function yT(i,e,t,s,o,l,c){const f=new Pt(0);let d=l===!0?0:1,p,m,v=null,_=0,S=null;function E(P){let C=P.isScene===!0?P.background:null;return C&&C.isTexture&&(C=(P.backgroundBlurriness>0?t:e).get(C)),C}function w(P){let C=!1;const H=E(P);H===null?x(f,d):H&&H.isColor&&(x(H,1),C=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(P,C){const H=E(C);H&&(H.isCubeTexture||H.mapping===xu)?(m===void 0&&(m=new wi(new mo(1,1,1),new Nr({name:"BackgroundCubeMaterial",uniforms:uo(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,O,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Qr.copy(C.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),m.material.uniforms.envMap.value=H,m.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(xT.makeRotationFromEuler(Qr)),m.material.toneMapped=Rt.getTransfer(H.colorSpace)!==Dt,(v!==H||_!==H.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,v=H,_=H.version,S=i.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new wi(new Su(2,2),new Nr({name:"BackgroundMaterial",uniforms:uo(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(H.colorSpace)!==Dt,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||_!==H.version||S!==i.toneMapping)&&(p.material.needsUpdate=!0,v=H,_=H.version,S=i.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,C){P.getRGB(Kl,Xv(i)),s.buffers.color.setClear(Kl.r,Kl.g,Kl.b,C,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,C=1){f.set(P),d=C,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,x(f,d)},render:w,addToRenderList:y,dispose:L}}function ST(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=_(null);let l=o,c=!1;function f(R,z,ue,J,ce){let ve=!1;const ie=v(J,ue,z);l!==ie&&(l=ie,p(l.object)),ve=S(R,J,ue,ce),ve&&E(R,J,ue,ce),ce!==null&&e.update(ce,i.ELEMENT_ARRAY_BUFFER),(ve||c)&&(c=!1,C(R,z,ue,J),ce!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function d(){return i.createVertexArray()}function p(R){return i.bindVertexArray(R)}function m(R){return i.deleteVertexArray(R)}function v(R,z,ue){const J=ue.wireframe===!0;let ce=s[R.id];ce===void 0&&(ce={},s[R.id]=ce);let ve=ce[z.id];ve===void 0&&(ve={},ce[z.id]=ve);let ie=ve[J];return ie===void 0&&(ie=_(d()),ve[J]=ie),ie}function _(R){const z=[],ue=[],J=[];for(let ce=0;ce<t;ce++)z[ce]=0,ue[ce]=0,J[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ue,attributeDivisors:J,object:R,attributes:{},index:null}}function S(R,z,ue,J){const ce=l.attributes,ve=z.attributes;let ie=0;const xe=ue.getAttributes();for(const V in xe)if(xe[V].location>=0){const le=ce[V];let I=ve[V];if(I===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),le===void 0||le.attribute!==I||I&&le.data!==I.data)return!0;ie++}return l.attributesNum!==ie||l.index!==J}function E(R,z,ue,J){const ce={},ve=z.attributes;let ie=0;const xe=ue.getAttributes();for(const V in xe)if(xe[V].location>=0){let le=ve[V];le===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(le=R.instanceColor));const I={};I.attribute=le,le&&le.data&&(I.data=le.data),ce[V]=I,ie++}l.attributes=ce,l.attributesNum=ie,l.index=J}function w(){const R=l.newAttributes;for(let z=0,ue=R.length;z<ue;z++)R[z]=0}function y(R){x(R,0)}function x(R,z){const ue=l.newAttributes,J=l.enabledAttributes,ce=l.attributeDivisors;ue[R]=1,J[R]===0&&(i.enableVertexAttribArray(R),J[R]=1),ce[R]!==z&&(i.vertexAttribDivisor(R,z),ce[R]=z)}function L(){const R=l.newAttributes,z=l.enabledAttributes;for(let ue=0,J=z.length;ue<J;ue++)z[ue]!==R[ue]&&(i.disableVertexAttribArray(ue),z[ue]=0)}function P(R,z,ue,J,ce,ve,ie){ie===!0?i.vertexAttribIPointer(R,z,ue,ce,ve):i.vertexAttribPointer(R,z,ue,J,ce,ve)}function C(R,z,ue,J){w();const ce=J.attributes,ve=ue.getAttributes(),ie=z.defaultAttributeValues;for(const xe in ve){const V=ve[xe];if(V.location>=0){let fe=ce[xe];if(fe===void 0&&(xe==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),xe==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const le=fe.normalized,I=fe.itemSize,se=e.get(fe);if(se===void 0)continue;const Fe=se.buffer,N=se.type,te=se.bytesPerElement,ne=N===i.INT||N===i.UNSIGNED_INT||fe.gpuType===Vd;if(fe.isInterleavedBufferAttribute){const pe=fe.data,ye=pe.stride,Ae=fe.offset;if(pe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<V.locationSize;Ue++)x(V.location+Ue,pe.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ue=0;Ue<V.locationSize;Ue++)y(V.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Ue=0;Ue<V.locationSize;Ue++)P(V.location+Ue,I/V.locationSize,N,le,ye*te,(Ae+I/V.locationSize*Ue)*te,ne)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<V.locationSize;pe++)x(V.location+pe,fe.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<V.locationSize;pe++)y(V.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let pe=0;pe<V.locationSize;pe++)P(V.location+pe,I/V.locationSize,N,le,I*te,I/V.locationSize*pe*te,ne)}}else if(ie!==void 0){const le=ie[xe];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(V.location,le);break;case 3:i.vertexAttrib3fv(V.location,le);break;case 4:i.vertexAttrib4fv(V.location,le);break;default:i.vertexAttrib1fv(V.location,le)}}}}L()}function H(){j();for(const R in s){const z=s[R];for(const ue in z){const J=z[ue];for(const ce in J)m(J[ce].object),delete J[ce];delete z[ue]}delete s[R]}}function F(R){if(s[R.id]===void 0)return;const z=s[R.id];for(const ue in z){const J=z[ue];for(const ce in J)m(J[ce].object),delete J[ce];delete z[ue]}delete s[R.id]}function O(R){for(const z in s){const ue=s[z];if(ue[R.id]===void 0)continue;const J=ue[R.id];for(const ce in J)m(J[ce].object),delete J[ce];delete ue[R.id]}}function j(){b(),c=!0,l!==o&&(l=o,p(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:j,resetDefaultState:b,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}function ET(i,e,t){let s;function o(p){s=p}function l(p,m){i.drawArrays(s,p,m),t.update(m,s,1)}function c(p,m,v){v!==0&&(i.drawArraysInstanced(s,p,m,v),t.update(m,s,v))}function f(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,v);let S=0;for(let E=0;E<v;E++)S+=m[E];t.update(S,s,1)}function d(p,m,v,_){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],m[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,m,0,_,0,v);let E=0;for(let w=0;w<v;w++)E+=m[w]*_[w];t.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function MT(i,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==di&&s.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const j=O===xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ai&&s.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ji&&!j)}function d(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=d(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const v=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:C,vertexTextures:H,maxSamples:F}}function wT(i){const e=this;let t=null,s=0,o=!1,l=!1;const c=new ts,f=new ct,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||s!==0||o;return o=_,s=v.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=m(v,_,0)},this.setState=function(v,_,S){const E=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,x=i.get(v);if(!o||E===null||E.length===0||l&&!y)l?m(null):p();else{const L=l?0:s,P=L*4;let C=x.clippingState||null;d.value=C,C=m(E,_,P,S);for(let H=0;H!==P;++H)C[H]=t[H];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(v,_,S,E){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=d.value,E!==!0||y===null){const x=S+w*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,C=S;P!==w;++P,C+=4)c.copy(v[P]).applyMatrix4(L,f),c.normal.toArray(y,C),y[C+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function TT(i){let e=new WeakMap;function t(c,f){return f===td?c.mapping=oo:f===nd&&(c.mapping=ao),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===td||f===nd)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new SE(d.height);return p.fromEquirectangularTexture(i,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const eo=4,pg=[.125,.215,.35,.446,.526,.582],rs=20,If=new qv,mg=new Pt;let Ff=null,Of=0,kf=0,Bf=!1;const ns=(1+Math.sqrt(5))/2,Ks=1/ns,gg=[new re(-ns,Ks,0),new re(ns,Ks,0),new re(-Ks,0,ns),new re(Ks,0,ns),new re(0,ns,-Ks),new re(0,ns,Ks),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)],RT=new re;class vg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100,l={}){const{size:c=256,position:f=RT}=l;Ff=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),kf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,s,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ff,Of,kf),this._renderer.xr.enabled=Bf,e.scissorTest=!1,Zl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oo||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ff=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),kf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:xa,format:di,colorSpace:lo,depthBuffer:!1},o=_g(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AT(l)),this._blurMaterial=CT(l,e,t)}return o}_compileMaterial(e){const t=new wi(this._lodPlanes[0],e);this._renderer.compile(t,If)}_sceneToCubeUV(e,t,s,o,l){const d=new ei(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(mg),v.toneMapping=Yi,v.autoClear=!1;const E=new Zd({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),w=new wi(new mo,E);let y=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,y=!0):(E.color.copy(mg),y=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[L],l.y,l.z)):P===1?(d.up.set(0,0,p[L]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[L],l.z)):(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[L]));const C=this._cubeSize;Zl(o,P*C,L>2?C:0,C,C),v.setRenderTarget(o),y&&v.render(w,d),v.render(e,d)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=S,v.autoClear=_,e.background=x}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===oo||e.mapping===ao;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new wi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Zl(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(c,If)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=gg[(o-l-1)%gg.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new wi(this._lodPlanes[o],p),_=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*rs-1),w=l/E,y=isFinite(l)?1+Math.floor(m*w):rs;y>rs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${rs}`);const x=[];let L=0;for(let O=0;O<rs;++O){const j=O/w,b=Math.exp(-j*j/2);x.push(b),O===0?L+=b:O<y&&(L+=2*b)}for(let O=0;O<x.length;O++)x[O]=x[O]/L;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:P}=this;_.dTheta.value=E,_.mipInt.value=P-s;const C=this._sizeLods[o],H=3*C*(o>P-eo?o-P+eo:0),F=4*(this._cubeSize-C);Zl(t,H,F,3*C,2*C),d.setRenderTarget(t),d.render(v,If)}}function AT(i){const e=[],t=[],s=[];let o=i;const l=i-eo+1+pg.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let d=1/f;c>i-eo?d=pg[c-i+eo-1]:c===0&&(d=0),s.push(d);const p=1/(f-2),m=-p,v=1+p,_=[m,m,v,m,v,v,m,m,v,v,m,v],S=6,E=6,w=3,y=2,x=1,L=new Float32Array(w*E*S),P=new Float32Array(y*E*S),C=new Float32Array(x*E*S);for(let F=0;F<S;F++){const O=F%3*2/3-1,j=F>2?0:-1,b=[O,j,0,O+2/3,j,0,O+2/3,j+1,0,O,j,0,O+2/3,j+1,0,O,j+1,0];L.set(b,w*E*F),P.set(_,y*E*F);const R=[F,F,F,F,F,F];C.set(R,x*E*F)}const H=new fs;H.setAttribute("position",new Ti(L,w)),H.setAttribute("uv",new Ti(P,y)),H.setAttribute("faceIndex",new Ti(C,x)),e.push(H),o>eo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function _g(i,e,t){const s=new us(i,e,t);return s.texture.mapping=xu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Zl(i,e,t,s,o){i.viewport.set(e,t,s,o),i.scissor.set(e,t,s,o)}function CT(i,e,t){const s=new Float32Array(rs),o=new re(0,1,0);return new Nr({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function xg(){return new Nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function yg(){return new Nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function bT(i){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const d=f.mapping,p=d===td||d===nd,m=d===oo||d===ao;if(p||m){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new vg(i)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||m&&S&&o(S)?(t===null&&(t=new vg(i)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function PT(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&no("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function LT(i,e,t,s){const o={},l=new WeakMap;function c(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete o[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(v,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,t.memory.geometries++),_}function d(v){const _=v.attributes;for(const S in _)e.update(_[S],i.ARRAY_BUFFER)}function p(v){const _=[],S=v.index,E=v.attributes.position;let w=0;if(S!==null){const L=S.array;w=S.version;for(let P=0,C=L.length;P<C;P+=3){const H=L[P+0],F=L[P+1],O=L[P+2];_.push(H,F,F,O,O,H)}}else if(E!==void 0){const L=E.array;w=E.version;for(let P=0,C=L.length/3-1;P<C;P+=3){const H=P+0,F=P+1,O=P+2;_.push(H,F,F,O,O,H)}}else return;const y=new(Bv(_)?Wv:Gv)(_,1);y.version=w;const x=l.get(v);x&&e.remove(x),l.set(v,y)}function m(v){const _=l.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function DT(i,e,t){let s;function o(_){s=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function d(_,S){i.drawElements(s,S,l,_*c),t.update(S,s,1)}function p(_,S,E){E!==0&&(i.drawElementsInstanced(s,S,l,_*c,E),t.update(S,s,E))}function m(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,_,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];t.update(y,s,1)}function v(_,S,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)p(_[x]/c,S[x],w[x]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,_,0,w,0,E);let x=0;for(let L=0;L<E;L++)x+=S[L]*w[L];t.update(x,s,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function UT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=f*(l/3);break;case i.LINES:t.lines+=f*(l/2);break;case i.LINE_STRIP:t.lines+=f*(l-1);break;case i.LINE_LOOP:t.lines+=f*l;break;case i.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function NT(i,e,t){const s=new WeakMap,o=new jt;function l(c,f,d){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let _=s.get(f);if(_===void 0||_.count!==v){let b=function(){O.dispose(),s.delete(f),f.removeEventListener("dispose",b)};_!==void 0&&_.texture.dispose();const S=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;S===!0&&(P=1),E===!0&&(P=2),w===!0&&(P=3);let C=f.attributes.position.count*P,H=1;C>e.maxTextureSize&&(H=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const F=new Float32Array(C*H*4*v),O=new zv(F,C,H,v);O.type=ji,O.needsUpdate=!0;const j=P*4;for(let R=0;R<v;R++){const z=y[R],ue=x[R],J=L[R],ce=C*H*4*R;for(let ve=0;ve<z.count;ve++){const ie=ve*j;S===!0&&(o.fromBufferAttribute(z,ve),F[ce+ie+0]=o.x,F[ce+ie+1]=o.y,F[ce+ie+2]=o.z,F[ce+ie+3]=0),E===!0&&(o.fromBufferAttribute(ue,ve),F[ce+ie+4]=o.x,F[ce+ie+5]=o.y,F[ce+ie+6]=o.z,F[ce+ie+7]=0),w===!0&&(o.fromBufferAttribute(J,ve),F[ce+ie+8]=o.x,F[ce+ie+9]=o.y,F[ce+ie+10]=o.z,F[ce+ie+11]=J.itemSize===4?o.w:1)}}_={count:v,texture:O,size:new Ct(C,H)},s.set(f,_),f.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let S=0;for(let w=0;w<p.length;w++)S+=p[w];const E=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:l}}function IT(i,e,t,s){let o=new WeakMap;function l(d){const p=s.render.frame,m=d.geometry,v=e.get(d,m);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==p&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return v}function c(){o=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const Zv=new bn,Sg=new Yv(1,1),Jv=new zv,Qv=new iE,e_=new $v,Eg=[],Mg=[],wg=new Float32Array(16),Tg=new Float32Array(9),Rg=new Float32Array(4);function go(i,e,t){const s=i[0];if(s<=0||s>0)return i;const o=e*t;let l=Eg[o];if(l===void 0&&(l=new Float32Array(o),Eg[o]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,i[c].toArray(l,f)}return l}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Eu(i,e){let t=Mg[e];t===void 0&&(t=new Int32Array(e),Mg[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function FT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function OT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function kT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function BT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function zT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,s))return;Rg.set(s),i.uniformMatrix2fv(this.addr,!1,Rg),en(t,s)}}function HT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,s))return;Tg.set(s),i.uniformMatrix3fv(this.addr,!1,Tg),en(t,s)}}function VT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,s))return;wg.set(s),i.uniformMatrix4fv(this.addr,!1,wg),en(t,s)}}function GT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function WT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function XT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function jT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function $T(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function YT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function qT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function KT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function ZT(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let l;this.type===i.SAMPLER_2D_SHADOW?(Sg.compareFunction=kv,l=Sg):l=Zv,t.setTexture2D(e||l,o)}function JT(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||Qv,o)}function QT(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||e_,o)}function e1(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||Jv,o)}function t1(i){switch(i){case 5126:return FT;case 35664:return OT;case 35665:return kT;case 35666:return BT;case 35674:return zT;case 35675:return HT;case 35676:return VT;case 5124:case 35670:return GT;case 35667:case 35671:return WT;case 35668:case 35672:return XT;case 35669:case 35673:return jT;case 5125:return $T;case 36294:return YT;case 36295:return qT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return e1}}function n1(i,e){i.uniform1fv(this.addr,e)}function i1(i,e){const t=go(e,this.size,2);i.uniform2fv(this.addr,t)}function r1(i,e){const t=go(e,this.size,3);i.uniform3fv(this.addr,t)}function s1(i,e){const t=go(e,this.size,4);i.uniform4fv(this.addr,t)}function o1(i,e){const t=go(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function a1(i,e){const t=go(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function l1(i,e){const t=go(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function u1(i,e){i.uniform1iv(this.addr,e)}function c1(i,e){i.uniform2iv(this.addr,e)}function f1(i,e){i.uniform3iv(this.addr,e)}function d1(i,e){i.uniform4iv(this.addr,e)}function h1(i,e){i.uniform1uiv(this.addr,e)}function p1(i,e){i.uniform2uiv(this.addr,e)}function m1(i,e){i.uniform3uiv(this.addr,e)}function g1(i,e){i.uniform4uiv(this.addr,e)}function v1(i,e,t){const s=this.cache,o=e.length,l=Eu(t,o);Qt(s,l)||(i.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||Zv,l[c])}function _1(i,e,t){const s=this.cache,o=e.length,l=Eu(t,o);Qt(s,l)||(i.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Qv,l[c])}function x1(i,e,t){const s=this.cache,o=e.length,l=Eu(t,o);Qt(s,l)||(i.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||e_,l[c])}function y1(i,e,t){const s=this.cache,o=e.length,l=Eu(t,o);Qt(s,l)||(i.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Jv,l[c])}function S1(i){switch(i){case 5126:return n1;case 35664:return i1;case 35665:return r1;case 35666:return s1;case 35674:return o1;case 35675:return a1;case 35676:return l1;case 5124:case 35670:return u1;case 35667:case 35671:return c1;case 35668:case 35672:return f1;case 35669:case 35673:return d1;case 5125:return h1;case 36294:return p1;case 36295:return m1;case 36296:return g1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return x1;case 36289:case 36303:case 36311:case 36292:return y1}}class E1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=t1(t.type)}}class M1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S1(t.type)}}class w1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const zf=/(\w+)(\])?(\[|\.)?/g;function Ag(i,e){i.seq.push(e),i.map[e.id]=e}function T1(i,e,t){const s=i.name,o=s.length;for(zf.lastIndex=0;;){const l=zf.exec(s),c=zf.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===o){Ag(t,p===void 0?new E1(f,i,e):new M1(f,i,e));break}else{let v=t.map[f];v===void 0&&(v=new w1(f),Ag(t,v)),t=v}}}class uu{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);T1(l,c,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=s[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function Cg(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const R1=37297;let A1=0;function C1(i,e){const t=i.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const bg=new ct;function b1(i){Rt._getMatrix(bg,Rt.workingColorSpace,i);const e=`mat3( ${bg.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(i)){case du:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Pg(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+C1(i.getShaderSource(e),c)}else return o}function P1(i,e){const t=b1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function L1(i,e){let t;switch(e){case dS:t="Linear";break;case hS:t="Reinhard";break;case pS:t="Cineon";break;case mS:t="ACESFilmic";break;case vS:t="AgX";break;case _S:t="Neutral";break;case gS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jl=new re;function D1(){Rt.getLuminanceCoefficients(Jl);const i=Jl.x.toFixed(4),e=Jl.y.toFixed(4),t=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function N1(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function I1(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=i.getActiveAttrib(e,o),c=l.name;let f=1;l.type===i.FLOAT_MAT2&&(f=2),l.type===i.FLOAT_MAT3&&(f=3),l.type===i.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:f}}return t}function na(i){return i!==""}function Lg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(i){return i.replace(F1,k1)}const O1=new Map;function k1(i,e){let t=pt[e];if(t===void 0){const s=O1.get(e);if(s!==void 0)t=pt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Pd(t)}const B1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ug(i){return i.replace(B1,z1)}function z1(i,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Ng(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function H1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Av?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xy?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function V1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oo:case ao:e="ENVMAP_TYPE_CUBE";break;case xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G1(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ao&&(e="ENVMAP_MODE_REFRACTION"),e}function W1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cv:e="ENVMAP_BLENDING_MULTIPLY";break;case cS:e="ENVMAP_BLENDING_MIX";break;case fS:e="ENVMAP_BLENDING_ADD";break}return e}function X1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function j1(i,e,t,s){const o=i.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=H1(t),p=V1(t),m=G1(t),v=W1(t),_=X1(t),S=U1(t),E=N1(l),w=o.createProgram();let y,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(na).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(na).join(`
`),x.length>0&&(x+=`
`)):(y=[Ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),x=[Ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?pt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?L1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,P1("linearToOutputTexel",t.outputColorSpace),D1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),c=Pd(c),c=Lg(c,t),c=Dg(c,t),f=Pd(f),f=Lg(f,t),f=Dg(f,t),c=Ug(c),f=Ug(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===jm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=L+y+c,C=L+x+f,H=Cg(o,o.VERTEX_SHADER,P),F=Cg(o,o.FRAGMENT_SHADER,C);o.attachShader(w,H),o.attachShader(w,F),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function O(z){if(i.debug.checkShaderErrors){const ue=o.getProgramInfoLog(w).trim(),J=o.getShaderInfoLog(H).trim(),ce=o.getShaderInfoLog(F).trim();let ve=!0,ie=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(ve=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,w,H,F);else{const xe=Pg(o,H,"vertex"),V=Pg(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ue+`
`+xe+`
`+V)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(J===""||ce==="")&&(ie=!1);ie&&(z.diagnostics={runnable:ve,programLog:ue,vertexShader:{log:J,prefix:y},fragmentShader:{log:ce,prefix:x}})}o.deleteShader(H),o.deleteShader(F),j=new uu(o,w),b=I1(o,w)}let j;this.getUniforms=function(){return j===void 0&&O(this),j};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(w,R1)),R},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=F,this}let $1=0;class Y1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new q1(e),t.set(e,s)),s}}class q1{constructor(e){this.id=$1++,this.code=e,this.usedTimes=0}}function K1(i,e,t,s,o,l,c){const f=new Hv,d=new Y1,p=new Set,m=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function y(b,R,z,ue,J){const ce=ue.fog,ve=J.geometry,ie=b.isMeshStandardMaterial?ue.environment:null,xe=(b.isMeshStandardMaterial?t:e).get(b.envMap||ie),V=xe&&xe.mapping===xu?xe.image.height:null,fe=E[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const le=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,I=le!==void 0?le.length:0;let se=0;ve.morphAttributes.position!==void 0&&(se=1),ve.morphAttributes.normal!==void 0&&(se=2),ve.morphAttributes.color!==void 0&&(se=3);let Fe,N,te,ne;if(fe){const ut=Si[fe];Fe=ut.vertexShader,N=ut.fragmentShader}else Fe=b.vertexShader,N=b.fragmentShader,d.update(b),te=d.getVertexShaderID(b),ne=d.getFragmentShaderID(b);const pe=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ae=J.isInstancedMesh===!0,Ue=J.isBatchedMesh===!0,xt=!!b.map,At=!!b.matcap,ft=!!xe,k=!!b.aoMap,Wt=!!b.lightMap,mt=!!b.bumpMap,Et=!!b.normalMap,We=!!b.displacementMap,dt=!!b.emissiveMap,Ke=!!b.metalnessMap,nt=!!b.roughnessMap,It=b.anisotropy>0,D=b.clearcoat>0,T=b.dispersion>0,ee=b.iridescence>0,ge=b.sheen>0,_e=b.transmission>0,de=It&&!!b.anisotropyMap,$e=D&&!!b.clearcoatMap,Pe=D&&!!b.clearcoatNormalMap,ze=D&&!!b.clearcoatRoughnessMap,Ye=ee&&!!b.iridescenceMap,Ee=ee&&!!b.iridescenceThicknessMap,Oe=ge&&!!b.sheenColorMap,tt=ge&&!!b.sheenRoughnessMap,Je=!!b.specularMap,Le=!!b.specularColorMap,st=!!b.specularIntensityMap,G=_e&&!!b.transmissionMap,De=_e&&!!b.thicknessMap,he=!!b.gradientMap,be=!!b.alphaMap,Se=b.alphaTest>0,me=!!b.alphaHash,ke=!!b.extensions;let Qe=Yi;b.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Qe=i.toneMapping);const St={shaderID:fe,shaderType:b.type,shaderName:b.name,vertexShader:Fe,fragmentShader:N,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Ue,batchingColor:Ue&&J._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&J.instanceColor!==null,instancingMorph:Ae&&J.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:lo,alphaToCoverage:!!b.alphaToCoverage,map:xt,matcap:At,envMap:ft,envMapMode:ft&&xe.mapping,envMapCubeUVHeight:V,aoMap:k,lightMap:Wt,bumpMap:mt,normalMap:Et,displacementMap:_&&We,emissiveMap:dt,normalMapObjectSpace:Et&&b.normalMapType===MS,normalMapTangentSpace:Et&&b.normalMapType===ES,metalnessMap:Ke,roughnessMap:nt,anisotropy:It,anisotropyMap:de,clearcoat:D,clearcoatMap:$e,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ze,dispersion:T,iridescence:ee,iridescenceMap:Ye,iridescenceThicknessMap:Ee,sheen:ge,sheenColorMap:Oe,sheenRoughnessMap:tt,specularMap:Je,specularColorMap:Le,specularIntensityMap:st,transmission:_e,transmissionMap:G,thicknessMap:De,gradientMap:he,opaque:b.transparent===!1&&b.blending===to&&b.alphaToCoverage===!1,alphaMap:be,alphaTest:Se,alphaHash:me,combine:b.combine,mapUv:xt&&w(b.map.channel),aoMapUv:k&&w(b.aoMap.channel),lightMapUv:Wt&&w(b.lightMap.channel),bumpMapUv:mt&&w(b.bumpMap.channel),normalMapUv:Et&&w(b.normalMap.channel),displacementMapUv:We&&w(b.displacementMap.channel),emissiveMapUv:dt&&w(b.emissiveMap.channel),metalnessMapUv:Ke&&w(b.metalnessMap.channel),roughnessMapUv:nt&&w(b.roughnessMap.channel),anisotropyMapUv:de&&w(b.anisotropyMap.channel),clearcoatMapUv:$e&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:tt&&w(b.sheenRoughnessMap.channel),specularMapUv:Je&&w(b.specularMap.channel),specularColorMapUv:Le&&w(b.specularColorMap.channel),specularIntensityMapUv:st&&w(b.specularIntensityMap.channel),transmissionMapUv:G&&w(b.transmissionMap.channel),thicknessMapUv:De&&w(b.thicknessMap.channel),alphaMapUv:be&&w(b.alphaMap.channel),vertexTangents:!!ve.attributes.tangent&&(Et||It),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ve.attributes.uv&&(xt||be),fog:!!ce,useFog:b.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:ye,skinning:J.isSkinnedMesh===!0,morphTargets:ve.morphAttributes.position!==void 0,morphNormals:ve.morphAttributes.normal!==void 0,morphColors:ve.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:xt&&b.map.isVideoTexture===!0&&Rt.getTransfer(b.map.colorSpace)===Dt,decodeVideoTextureEmissive:dt&&b.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(b.emissiveMap.colorSpace)===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ei,flipSided:b.side===On,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&b.extensions.multiDraw===!0||Ue)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return St.vertexUv1s=p.has(1),St.vertexUv2s=p.has(2),St.vertexUv3s=p.has(3),p.clear(),St}function x(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)R.push(z),R.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(L(R,b),P(R,b),R.push(i.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function L(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function P(b,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function C(b){const R=E[b.type];let z;if(R){const ue=Si[R];z=vE.clone(ue.uniforms)}else z=b.uniforms;return z}function H(b,R){let z;for(let ue=0,J=m.length;ue<J;ue++){const ce=m[ue];if(ce.cacheKey===R){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new j1(i,R,b,l),m.push(z)),z}function F(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),b.destroy()}}function O(b){d.remove(b)}function j(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:H,releaseProgram:F,releaseShaderCache:O,programs:m,dispose:j}}function Z1(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let f=i.get(c);return f===void 0&&(f={},i.set(c,f)),f}function s(c){i.delete(c)}function o(c,f,d){i.get(c)[f]=d}function l(){i=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function J1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ig(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fg(){const i=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(v,_,S,E,w,y){let x=i[e];return x===void 0?(x={id:v.id,object:v,geometry:_,material:S,groupOrder:E,renderOrder:v.renderOrder,z:w,group:y},i[e]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=w,x.group=y),e++,x}function f(v,_,S,E,w,y){const x=c(v,_,S,E,w,y);S.transmission>0?s.push(x):S.transparent===!0?o.push(x):t.push(x)}function d(v,_,S,E,w,y){const x=c(v,_,S,E,w,y);S.transmission>0?s.unshift(x):S.transparent===!0?o.unshift(x):t.unshift(x)}function p(v,_){t.length>1&&t.sort(v||J1),s.length>1&&s.sort(_||Ig),o.length>1&&o.sort(_||Ig)}function m(){for(let v=e,_=i.length;v<_;v++){const S=i[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:f,unshift:d,finish:m,sort:p}}function Q1(){let i=new WeakMap;function e(s,o){const l=i.get(s);let c;return l===void 0?(c=new Fg,i.set(s,[c])):o>=l.length?(c=new Fg,l.push(c)):c=l[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function eR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new Pt};break;case"SpotLight":t={position:new re,direction:new re,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new re,halfWidth:new re,halfHeight:new re};break}return i[e.id]=t,t}}}function tR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let nR=0;function iR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rR(i){const e=new eR,t=tR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new re);const o=new re,l=new $t,c=new $t;function f(p){let m=0,v=0,_=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let S=0,E=0,w=0,y=0,x=0,L=0,P=0,C=0,H=0,F=0,O=0;p.sort(iR);for(let b=0,R=p.length;b<R;b++){const z=p[b],ue=z.color,J=z.intensity,ce=z.distance,ve=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=ue.r*J,v+=ue.g*J,_+=ue.b*J;else if(z.isLightProbe){for(let ie=0;ie<9;ie++)s.probe[ie].addScaledVector(z.sh.coefficients[ie],J);O++}else if(z.isDirectionalLight){const ie=e.get(z);if(ie.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const xe=z.shadow,V=t.get(z);V.shadowIntensity=xe.intensity,V.shadowBias=xe.bias,V.shadowNormalBias=xe.normalBias,V.shadowRadius=xe.radius,V.shadowMapSize=xe.mapSize,s.directionalShadow[S]=V,s.directionalShadowMap[S]=ve,s.directionalShadowMatrix[S]=z.shadow.matrix,L++}s.directional[S]=ie,S++}else if(z.isSpotLight){const ie=e.get(z);ie.position.setFromMatrixPosition(z.matrixWorld),ie.color.copy(ue).multiplyScalar(J),ie.distance=ce,ie.coneCos=Math.cos(z.angle),ie.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ie.decay=z.decay,s.spot[w]=ie;const xe=z.shadow;if(z.map&&(s.spotLightMap[H]=z.map,H++,xe.updateMatrices(z),z.castShadow&&F++),s.spotLightMatrix[w]=xe.matrix,z.castShadow){const V=t.get(z);V.shadowIntensity=xe.intensity,V.shadowBias=xe.bias,V.shadowNormalBias=xe.normalBias,V.shadowRadius=xe.radius,V.shadowMapSize=xe.mapSize,s.spotShadow[w]=V,s.spotShadowMap[w]=ve,C++}w++}else if(z.isRectAreaLight){const ie=e.get(z);ie.color.copy(ue).multiplyScalar(J),ie.halfWidth.set(z.width*.5,0,0),ie.halfHeight.set(0,z.height*.5,0),s.rectArea[y]=ie,y++}else if(z.isPointLight){const ie=e.get(z);if(ie.color.copy(z.color).multiplyScalar(z.intensity),ie.distance=z.distance,ie.decay=z.decay,z.castShadow){const xe=z.shadow,V=t.get(z);V.shadowIntensity=xe.intensity,V.shadowBias=xe.bias,V.shadowNormalBias=xe.normalBias,V.shadowRadius=xe.radius,V.shadowMapSize=xe.mapSize,V.shadowCameraNear=xe.camera.near,V.shadowCameraFar=xe.camera.far,s.pointShadow[E]=V,s.pointShadowMap[E]=ve,s.pointShadowMatrix[E]=z.shadow.matrix,P++}s.point[E]=ie,E++}else if(z.isHemisphereLight){const ie=e.get(z);ie.skyColor.copy(z.color).multiplyScalar(J),ie.groundColor.copy(z.groundColor).multiplyScalar(J),s.hemi[x]=ie,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=v,s.ambient[2]=_;const j=s.hash;(j.directionalLength!==S||j.pointLength!==E||j.spotLength!==w||j.rectAreaLength!==y||j.hemiLength!==x||j.numDirectionalShadows!==L||j.numPointShadows!==P||j.numSpotShadows!==C||j.numSpotMaps!==H||j.numLightProbes!==O)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=y,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=C+H-F,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=O,j.directionalLength=S,j.pointLength=E,j.spotLength=w,j.rectAreaLength=y,j.hemiLength=x,j.numDirectionalShadows=L,j.numPointShadows=P,j.numSpotShadows=C,j.numSpotMaps=H,j.numLightProbes=O,s.version=nR++)}function d(p,m){let v=0,_=0,S=0,E=0,w=0;const y=m.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const P=p[x];if(P.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),v++}else if(P.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const C=s.point[_];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),_++}else if(P.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:f,setupView:d,state:s}}function Og(i){const e=new rR(i),t=[],s=[];function o(m){p.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function sR(i){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new Og(i),e.set(o,[f])):l>=c.length?(f=new Og(i),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const oR=`void main() {
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
}`;function lR(i,e,t){let s=new Jd;const o=new Ct,l=new Ct,c=new jt,f=new AE({depthPacking:SS}),d=new CE,p={},m=t.maxTextureSize,v={[Ur]:On,[On]:Ur,[Ei]:Ei},_=new Nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:oR,fragmentShader:aR}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new fs;E.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new wi(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Av;let x=this.type;this.render=function(F,O,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const b=i.getRenderTarget(),R=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),ue=i.state;ue.setBlending(Lr),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const J=x!==Wi&&this.type===Wi,ce=x===Wi&&this.type!==Wi;for(let ve=0,ie=F.length;ve<ie;ve++){const xe=F[ve],V=xe.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",xe,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const fe=V.getFrameExtents();if(o.multiply(fe),l.copy(V.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/fe.x),o.x=l.x*fe.x,V.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/fe.y),o.y=l.y*fe.y,V.mapSize.y=l.y)),V.map===null||J===!0||ce===!0){const I=this.type!==Wi?{minFilter:dn,magFilter:dn}:{};V.map!==null&&V.map.dispose(),V.map=new us(o.x,o.y,I),V.map.texture.name=xe.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const le=V.getViewportCount();for(let I=0;I<le;I++){const se=V.getViewport(I);c.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),ue.viewport(c),V.updateMatrices(xe,I),s=V.getFrustum(),C(O,j,V.camera,xe,this.type)}V.isPointLightShadow!==!0&&this.type===Wi&&L(V,j),V.needsUpdate=!1}x=this.type,y.needsUpdate=!1,i.setRenderTarget(b,R,z)};function L(F,O){const j=e.update(w);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new us(o.x,o.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(O,null,j,_,w,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(O,null,j,S,w,null)}function P(F,O,j,b){let R=null;const z=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)R=z;else if(R=j.isPointLight===!0?d:f,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const ue=R.uuid,J=O.uuid;let ce=p[ue];ce===void 0&&(ce={},p[ue]=ce);let ve=ce[J];ve===void 0&&(ve=R.clone(),ce[J]=ve,O.addEventListener("dispose",H)),R=ve}if(R.visible=O.visible,R.wireframe=O.wireframe,b===Wi?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:v[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ue=i.properties.get(R);ue.light=j}return R}function C(F,O,j,b,R){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Wi)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const J=e.update(F),ce=F.material;if(Array.isArray(ce)){const ve=J.groups;for(let ie=0,xe=ve.length;ie<xe;ie++){const V=ve[ie],fe=ce[V.materialIndex];if(fe&&fe.visible){const le=P(F,fe,b,R);F.onBeforeShadow(i,F,O,j,J,le,V),i.renderBufferDirect(j,null,J,le,F,V),F.onAfterShadow(i,F,O,j,J,le,V)}}}else if(ce.visible){const ve=P(F,ce,b,R);F.onBeforeShadow(i,F,O,j,J,ve,null),i.renderBufferDirect(j,null,J,ve,F,null),F.onAfterShadow(i,F,O,j,J,ve,null)}}const ue=F.children;for(let J=0,ce=ue.length;J<ce;J++)C(ue[J],O,j,b,R)}function H(F){F.target.removeEventListener("dispose",H);for(const j in p){const b=p[j],R=F.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const uR={[Yf]:qf,[Kf]:Qf,[Zf]:ed,[so]:Jf,[qf]:Yf,[Qf]:Kf,[ed]:Zf,[Jf]:so};function cR(i,e){function t(){let G=!1;const De=new jt;let he=null;const be=new jt(0,0,0,0);return{setMask:function(Se){he!==Se&&!G&&(i.colorMask(Se,Se,Se,Se),he=Se)},setLocked:function(Se){G=Se},setClear:function(Se,me,ke,Qe,St){St===!0&&(Se*=Qe,me*=Qe,ke*=Qe),De.set(Se,me,ke,Qe),be.equals(De)===!1&&(i.clearColor(Se,me,ke,Qe),be.copy(De))},reset:function(){G=!1,he=null,be.set(-1,0,0,0)}}}function s(){let G=!1,De=!1,he=null,be=null,Se=null;return{setReversed:function(me){if(De!==me){const ke=e.get("EXT_clip_control");me?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),De=me;const Qe=Se;Se=null,this.setClear(Qe)}},getReversed:function(){return De},setTest:function(me){me?pe(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(me){he!==me&&!G&&(i.depthMask(me),he=me)},setFunc:function(me){if(De&&(me=uR[me]),be!==me){switch(me){case Yf:i.depthFunc(i.NEVER);break;case qf:i.depthFunc(i.ALWAYS);break;case Kf:i.depthFunc(i.LESS);break;case so:i.depthFunc(i.LEQUAL);break;case Zf:i.depthFunc(i.EQUAL);break;case Jf:i.depthFunc(i.GEQUAL);break;case Qf:i.depthFunc(i.GREATER);break;case ed:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=me}},setLocked:function(me){G=me},setClear:function(me){Se!==me&&(De&&(me=1-me),i.clearDepth(me),Se=me)},reset:function(){G=!1,he=null,be=null,Se=null,De=!1}}}function o(){let G=!1,De=null,he=null,be=null,Se=null,me=null,ke=null,Qe=null,St=null;return{setTest:function(ut){G||(ut?pe(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(ut){De!==ut&&!G&&(i.stencilMask(ut),De=ut)},setFunc:function(ut,Pn,Sn){(he!==ut||be!==Pn||Se!==Sn)&&(i.stencilFunc(ut,Pn,Sn),he=ut,be=Pn,Se=Sn)},setOp:function(ut,Pn,Sn){(me!==ut||ke!==Pn||Qe!==Sn)&&(i.stencilOp(ut,Pn,Sn),me=ut,ke=Pn,Qe=Sn)},setLocked:function(ut){G=ut},setClear:function(ut){St!==ut&&(i.clearStencil(ut),St=ut)},reset:function(){G=!1,De=null,he=null,be=null,Se=null,me=null,ke=null,Qe=null,St=null}}}const l=new t,c=new s,f=new o,d=new WeakMap,p=new WeakMap;let m={},v={},_=new WeakMap,S=[],E=null,w=!1,y=null,x=null,L=null,P=null,C=null,H=null,F=null,O=new Pt(0,0,0),j=0,b=!1,R=null,z=null,ue=null,J=null,ce=null;const ve=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,xe=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(V)[1]),ie=xe>=1):V.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ie=xe>=2);let fe=null,le={};const I=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),Fe=new jt().fromArray(I),N=new jt().fromArray(se);function te(G,De,he,be){const Se=new Uint8Array(4),me=i.createTexture();i.bindTexture(G,me),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<he;ke++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(De+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return me}const ne={};ne[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),pe(i.DEPTH_TEST),c.setFunc(so),mt(!1),Et(zm),pe(i.CULL_FACE),k(Lr);function pe(G){m[G]!==!0&&(i.enable(G),m[G]=!0)}function ye(G){m[G]!==!1&&(i.disable(G),m[G]=!1)}function Ae(G,De){return v[G]!==De?(i.bindFramebuffer(G,De),v[G]=De,G===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=De),G===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=De),!0):!1}function Ue(G,De){let he=S,be=!1;if(G){he=_.get(De),he===void 0&&(he=[],_.set(De,he));const Se=G.textures;if(he.length!==Se.length||he[0]!==i.COLOR_ATTACHMENT0){for(let me=0,ke=Se.length;me<ke;me++)he[me]=i.COLOR_ATTACHMENT0+me;he.length=Se.length,be=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,be=!0);be&&i.drawBuffers(he)}function xt(G){return E!==G?(i.useProgram(G),E=G,!0):!1}const At={[is]:i.FUNC_ADD,[$y]:i.FUNC_SUBTRACT,[Yy]:i.FUNC_REVERSE_SUBTRACT};At[qy]=i.MIN,At[Ky]=i.MAX;const ft={[Zy]:i.ZERO,[Jy]:i.ONE,[Qy]:i.SRC_COLOR,[jf]:i.SRC_ALPHA,[sS]:i.SRC_ALPHA_SATURATE,[iS]:i.DST_COLOR,[tS]:i.DST_ALPHA,[eS]:i.ONE_MINUS_SRC_COLOR,[$f]:i.ONE_MINUS_SRC_ALPHA,[rS]:i.ONE_MINUS_DST_COLOR,[nS]:i.ONE_MINUS_DST_ALPHA,[oS]:i.CONSTANT_COLOR,[aS]:i.ONE_MINUS_CONSTANT_COLOR,[lS]:i.CONSTANT_ALPHA,[uS]:i.ONE_MINUS_CONSTANT_ALPHA};function k(G,De,he,be,Se,me,ke,Qe,St,ut){if(G===Lr){w===!0&&(ye(i.BLEND),w=!1);return}if(w===!1&&(pe(i.BLEND),w=!0),G!==jy){if(G!==y||ut!==b){if((x!==is||C!==is)&&(i.blendEquation(i.FUNC_ADD),x=is,C=is),ut)switch(G){case to:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hm:i.blendFunc(i.ONE,i.ONE);break;case Vm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gm:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case to:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hm:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}L=null,P=null,H=null,F=null,O.set(0,0,0),j=0,y=G,b=ut}return}Se=Se||De,me=me||he,ke=ke||be,(De!==x||Se!==C)&&(i.blendEquationSeparate(At[De],At[Se]),x=De,C=Se),(he!==L||be!==P||me!==H||ke!==F)&&(i.blendFuncSeparate(ft[he],ft[be],ft[me],ft[ke]),L=he,P=be,H=me,F=ke),(Qe.equals(O)===!1||St!==j)&&(i.blendColor(Qe.r,Qe.g,Qe.b,St),O.copy(Qe),j=St),y=G,b=!1}function Wt(G,De){G.side===Ei?ye(i.CULL_FACE):pe(i.CULL_FACE);let he=G.side===On;De&&(he=!he),mt(he),G.blending===to&&G.transparent===!1?k(Lr):k(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const be=G.stencilWrite;f.setTest(be),be&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),dt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(G){R!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),R=G)}function Et(G){G!==Gy?(pe(i.CULL_FACE),G!==z&&(G===zm?i.cullFace(i.BACK):G===Wy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),z=G}function We(G){G!==ue&&(ie&&i.lineWidth(G),ue=G)}function dt(G,De,he){G?(pe(i.POLYGON_OFFSET_FILL),(J!==De||ce!==he)&&(i.polygonOffset(De,he),J=De,ce=he)):ye(i.POLYGON_OFFSET_FILL)}function Ke(G){G?pe(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function nt(G){G===void 0&&(G=i.TEXTURE0+ve-1),fe!==G&&(i.activeTexture(G),fe=G)}function It(G,De,he){he===void 0&&(fe===null?he=i.TEXTURE0+ve-1:he=fe);let be=le[he];be===void 0&&(be={type:void 0,texture:void 0},le[he]=be),(be.type!==G||be.texture!==De)&&(fe!==he&&(i.activeTexture(he),fe=he),i.bindTexture(G,De||ne[G]),be.type=G,be.texture=De)}function D(){const G=le[fe];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ee(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(G){Fe.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Fe.copy(G))}function tt(G){N.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),N.copy(G))}function Je(G,De){let he=p.get(De);he===void 0&&(he=new WeakMap,p.set(De,he));let be=he.get(G);be===void 0&&(be=i.getUniformBlockIndex(De,G.name),he.set(G,be))}function Le(G,De){const be=p.get(De).get(G);d.get(De)!==be&&(i.uniformBlockBinding(De,be,G.__bindingPointIndex),d.set(De,be))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},fe=null,le={},v={},_=new WeakMap,S=[],E=null,w=!1,y=null,x=null,L=null,P=null,C=null,H=null,F=null,O=new Pt(0,0,0),j=0,b=!1,R=null,z=null,ue=null,J=null,ce=null,Fe.set(0,0,i.canvas.width,i.canvas.height),N.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:pe,disable:ye,bindFramebuffer:Ae,drawBuffers:Ue,useProgram:xt,setBlending:k,setMaterial:Wt,setFlipSided:mt,setCullFace:Et,setLineWidth:We,setPolygonOffset:dt,setScissorTest:Ke,activeTexture:nt,bindTexture:It,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:ee,texImage2D:Ye,texImage3D:Ee,updateUBOMapping:Je,uniformBlockBinding:Le,texStorage2D:Pe,texStorage3D:ze,texSubImage2D:ge,texSubImage3D:_e,compressedTexSubImage2D:de,compressedTexSubImage3D:$e,scissor:Oe,viewport:tt,reset:st}}function fR(i,e,t,s,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ct,m=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return S?new OffscreenCanvas(D,T):pa("canvas")}function w(D,T,ee){let ge=1;const _e=It(D);if((_e.width>ee||_e.height>ee)&&(ge=ee/Math.max(_e.width,_e.height)),ge<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(ge*_e.width),$e=Math.floor(ge*_e.height);v===void 0&&(v=E(de,$e));const Pe=T?E(de,$e):v;return Pe.width=de,Pe.height=$e,Pe.getContext("2d").drawImage(D,0,0,de,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+$e+")."),Pe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){i.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(D,T,ee,ge,_e=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=T;if(T===i.RED&&(ee===i.FLOAT&&(de=i.R32F),ee===i.HALF_FLOAT&&(de=i.R16F),ee===i.UNSIGNED_BYTE&&(de=i.R8)),T===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(de=i.R8UI),ee===i.UNSIGNED_SHORT&&(de=i.R16UI),ee===i.UNSIGNED_INT&&(de=i.R32UI),ee===i.BYTE&&(de=i.R8I),ee===i.SHORT&&(de=i.R16I),ee===i.INT&&(de=i.R32I)),T===i.RG&&(ee===i.FLOAT&&(de=i.RG32F),ee===i.HALF_FLOAT&&(de=i.RG16F),ee===i.UNSIGNED_BYTE&&(de=i.RG8)),T===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(de=i.RG8UI),ee===i.UNSIGNED_SHORT&&(de=i.RG16UI),ee===i.UNSIGNED_INT&&(de=i.RG32UI),ee===i.BYTE&&(de=i.RG8I),ee===i.SHORT&&(de=i.RG16I),ee===i.INT&&(de=i.RG32I)),T===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(de=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(de=i.RGB16UI),ee===i.UNSIGNED_INT&&(de=i.RGB32UI),ee===i.BYTE&&(de=i.RGB8I),ee===i.SHORT&&(de=i.RGB16I),ee===i.INT&&(de=i.RGB32I)),T===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(de=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(de=i.RGBA16UI),ee===i.UNSIGNED_INT&&(de=i.RGBA32UI),ee===i.BYTE&&(de=i.RGBA8I),ee===i.SHORT&&(de=i.RGBA16I),ee===i.INT&&(de=i.RGBA32I)),T===i.RGB&&ee===i.UNSIGNED_INT_5_9_9_9_REV&&(de=i.RGB9_E5),T===i.RGBA){const $e=_e?du:Rt.getTransfer(ge);ee===i.FLOAT&&(de=i.RGBA32F),ee===i.HALF_FLOAT&&(de=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(de=$e===Dt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function C(D,T){let ee;return D?T===null||T===ls||T===ca?ee=i.DEPTH24_STENCIL8:T===ji?ee=i.DEPTH32F_STENCIL8:T===ua&&(ee=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ls||T===ca?ee=i.DEPTH_COMPONENT24:T===ji?ee=i.DEPTH_COMPONENT32F:T===ua&&(ee=i.DEPTH_COMPONENT16),ee}function H(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==dn&&D.minFilter!==Mi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function F(D){const T=D.target;T.removeEventListener("dispose",F),j(T),T.isVideoTexture&&m.delete(T)}function O(D){const T=D.target;T.removeEventListener("dispose",O),R(T)}function j(D){const T=s.get(D);if(T.__webglInit===void 0)return;const ee=D.source,ge=_.get(ee);if(ge){const _e=ge[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&b(D),Object.keys(ge).length===0&&_.delete(ee)}s.remove(D)}function b(D){const T=s.get(D);i.deleteTexture(T.__webglTexture);const ee=D.source,ge=_.get(ee);delete ge[T.__cacheKey],c.memory.textures--}function R(D){const T=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let _e=0;_e<T.__webglFramebuffer[ge].length;_e++)i.deleteFramebuffer(T.__webglFramebuffer[ge][_e]);else i.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)i.deleteFramebuffer(T.__webglFramebuffer[ge]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ee=D.textures;for(let ge=0,_e=ee.length;ge<_e;ge++){const de=s.get(ee[ge]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),c.memory.textures--),s.remove(ee[ge])}s.remove(D)}let z=0;function ue(){z=0}function J(){const D=z;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),z+=1,D}function ce(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ve(D,T){const ee=s.get(D);if(D.isVideoTexture&&Ke(D),D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){const ge=D.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(ee,D,T);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+T)}function ie(D,T){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){ne(ee,D,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+T)}function xe(D,T){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){ne(ee,D,T);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+T)}function V(D,T){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){pe(ee,D,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+T)}const fe={[la]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[id]:i.MIRRORED_REPEAT},le={[dn]:i.NEAREST,[xS]:i.NEAREST_MIPMAP_NEAREST,[Dl]:i.NEAREST_MIPMAP_LINEAR,[Mi]:i.LINEAR,[cf]:i.LINEAR_MIPMAP_NEAREST,[ss]:i.LINEAR_MIPMAP_LINEAR},I={[wS]:i.NEVER,[PS]:i.ALWAYS,[TS]:i.LESS,[kv]:i.LEQUAL,[RS]:i.EQUAL,[bS]:i.GEQUAL,[AS]:i.GREATER,[CS]:i.NOTEQUAL};function se(D,T){if(T.type===ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Mi||T.magFilter===cf||T.magFilter===Dl||T.magFilter===ss||T.minFilter===Mi||T.minFilter===cf||T.minFilter===Dl||T.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,fe[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,fe[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,fe[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,le[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,le[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===dn||T.minFilter!==Dl&&T.minFilter!==ss||T.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Fe(D,T){let ee=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",F));const ge=T.source;let _e=_.get(ge);_e===void 0&&(_e={},_.set(ge,_e));const de=ce(T);if(de!==D.__cacheKey){_e[de]===void 0&&(_e[de]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),_e[de].usedTimes++;const $e=_e[D.__cacheKey];$e!==void 0&&(_e[D.__cacheKey].usedTimes--,$e.usedTimes===0&&b(T)),D.__cacheKey=de,D.__webglTexture=_e[de].texture}return ee}function N(D,T,ee){return Math.floor(Math.floor(D/ee)/T)}function te(D,T,ee,ge){const de=D.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,ee,ge,T.data);else{de.sort((Ee,Oe)=>Ee.start-Oe.start);let $e=0;for(let Ee=1;Ee<de.length;Ee++){const Oe=de[$e],tt=de[Ee],Je=Oe.start+Oe.count,Le=N(tt.start,T.width,4),st=N(Oe.start,T.width,4);tt.start<=Je+1&&Le===st&&N(tt.start+tt.count-1,T.width,4)===Le?Oe.count=Math.max(Oe.count,tt.start+tt.count-Oe.start):(++$e,de[$e]=tt)}de.length=$e+1;const Pe=i.getParameter(i.UNPACK_ROW_LENGTH),ze=i.getParameter(i.UNPACK_SKIP_PIXELS),Ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Ee=0,Oe=de.length;Ee<Oe;Ee++){const tt=de[Ee],Je=Math.floor(tt.start/4),Le=Math.ceil(tt.count/4),st=Je%T.width,G=Math.floor(Je/T.width),De=Le,he=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,st),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,st,G,De,he,ee,ge,T.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ye)}}function ne(D,T,ee){let ge=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=i.TEXTURE_3D);const _e=Fe(D,T),de=T.source;t.bindTexture(ge,D.__webglTexture,i.TEXTURE0+ee);const $e=s.get(de);if(de.version!==$e.__version||_e===!0){t.activeTexture(i.TEXTURE0+ee);const Pe=Rt.getPrimaries(Rt.workingColorSpace),ze=T.colorSpace===Cr?null:Rt.getPrimaries(T.colorSpace),Ye=T.colorSpace===Cr||Pe===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Ee=w(T.image,!1,o.maxTextureSize);Ee=nt(T,Ee);const Oe=l.convert(T.format,T.colorSpace),tt=l.convert(T.type);let Je=P(T.internalFormat,Oe,tt,T.colorSpace,T.isVideoTexture);se(ge,T);let Le;const st=T.mipmaps,G=T.isVideoTexture!==!0,De=$e.__version===void 0||_e===!0,he=de.dataReady,be=H(T,Ee);if(T.isDepthTexture)Je=C(T.format===da,T.type),De&&(G?t.texStorage2D(i.TEXTURE_2D,1,Je,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,Je,Ee.width,Ee.height,0,Oe,tt,null));else if(T.isDataTexture)if(st.length>0){G&&De&&t.texStorage2D(i.TEXTURE_2D,be,Je,st[0].width,st[0].height);for(let Se=0,me=st.length;Se<me;Se++)Le=st[Se],G?he&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Le.width,Le.height,Oe,tt,Le.data):t.texImage2D(i.TEXTURE_2D,Se,Je,Le.width,Le.height,0,Oe,tt,Le.data);T.generateMipmaps=!1}else G?(De&&t.texStorage2D(i.TEXTURE_2D,be,Je,Ee.width,Ee.height),he&&te(T,Ee,Oe,tt)):t.texImage2D(i.TEXTURE_2D,0,Je,Ee.width,Ee.height,0,Oe,tt,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){G&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Je,st[0].width,st[0].height,Ee.depth);for(let Se=0,me=st.length;Se<me;Se++)if(Le=st[Se],T.format!==di)if(Oe!==null)if(G){if(he)if(T.layerUpdates.size>0){const ke=hg(Le.width,Le.height,T.format,T.type);for(const Qe of T.layerUpdates){const St=Le.data.subarray(Qe*ke/Le.data.BYTES_PER_ELEMENT,(Qe+1)*ke/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,Qe,Le.width,Le.height,1,Oe,St)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,Ee.depth,Oe,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Se,Je,Le.width,Le.height,Ee.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?he&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,Ee.depth,Oe,tt,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Se,Je,Le.width,Le.height,Ee.depth,0,Oe,tt,Le.data)}else{G&&De&&t.texStorage2D(i.TEXTURE_2D,be,Je,st[0].width,st[0].height);for(let Se=0,me=st.length;Se<me;Se++)Le=st[Se],T.format!==di?Oe!==null?G?he&&t.compressedTexSubImage2D(i.TEXTURE_2D,Se,0,0,Le.width,Le.height,Oe,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,Se,Je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?he&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Le.width,Le.height,Oe,tt,Le.data):t.texImage2D(i.TEXTURE_2D,Se,Je,Le.width,Le.height,0,Oe,tt,Le.data)}else if(T.isDataArrayTexture)if(G){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Je,Ee.width,Ee.height,Ee.depth),he)if(T.layerUpdates.size>0){const Se=hg(Ee.width,Ee.height,T.format,T.type);for(const me of T.layerUpdates){const ke=Ee.data.subarray(me*Se/Ee.data.BYTES_PER_ELEMENT,(me+1)*Se/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,Ee.width,Ee.height,1,Oe,tt,ke)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Oe,tt,Ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Je,Ee.width,Ee.height,Ee.depth,0,Oe,tt,Ee.data);else if(T.isData3DTexture)G?(De&&t.texStorage3D(i.TEXTURE_3D,be,Je,Ee.width,Ee.height,Ee.depth),he&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Oe,tt,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,Je,Ee.width,Ee.height,Ee.depth,0,Oe,tt,Ee.data);else if(T.isFramebufferTexture){if(De)if(G)t.texStorage2D(i.TEXTURE_2D,be,Je,Ee.width,Ee.height);else{let Se=Ee.width,me=Ee.height;for(let ke=0;ke<be;ke++)t.texImage2D(i.TEXTURE_2D,ke,Je,Se,me,0,Oe,tt,null),Se>>=1,me>>=1}}else if(st.length>0){if(G&&De){const Se=It(st[0]);t.texStorage2D(i.TEXTURE_2D,be,Je,Se.width,Se.height)}for(let Se=0,me=st.length;Se<me;Se++)Le=st[Se],G?he&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Oe,tt,Le):t.texImage2D(i.TEXTURE_2D,Se,Je,Oe,tt,Le);T.generateMipmaps=!1}else if(G){if(De){const Se=It(Ee);t.texStorage2D(i.TEXTURE_2D,be,Je,Se.width,Se.height)}he&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe,tt,Ee)}else t.texImage2D(i.TEXTURE_2D,0,Je,Oe,tt,Ee);y(T)&&x(ge),$e.__version=de.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function pe(D,T,ee){if(T.image.length!==6)return;const ge=Fe(D,T),_e=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+ee);const de=s.get(_e);if(_e.version!==de.__version||ge===!0){t.activeTexture(i.TEXTURE0+ee);const $e=Rt.getPrimaries(Rt.workingColorSpace),Pe=T.colorSpace===Cr?null:Rt.getPrimaries(T.colorSpace),ze=T.colorSpace===Cr||$e===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let me=0;me<6;me++)!Ye&&!Ee?Oe[me]=w(T.image[me],!0,o.maxCubemapSize):Oe[me]=Ee?T.image[me].image:T.image[me],Oe[me]=nt(T,Oe[me]);const tt=Oe[0],Je=l.convert(T.format,T.colorSpace),Le=l.convert(T.type),st=P(T.internalFormat,Je,Le,T.colorSpace),G=T.isVideoTexture!==!0,De=de.__version===void 0||ge===!0,he=_e.dataReady;let be=H(T,tt);se(i.TEXTURE_CUBE_MAP,T);let Se;if(Ye){G&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,st,tt.width,tt.height);for(let me=0;me<6;me++){Se=Oe[me].mipmaps;for(let ke=0;ke<Se.length;ke++){const Qe=Se[ke];T.format!==di?Je!==null?G?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,0,0,Qe.width,Qe.height,Je,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,st,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,0,0,Qe.width,Qe.height,Je,Le,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,st,Qe.width,Qe.height,0,Je,Le,Qe.data)}}}else{if(Se=T.mipmaps,G&&De){Se.length>0&&be++;const me=It(Oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,st,me.width,me.height)}for(let me=0;me<6;me++)if(Ee){G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Oe[me].width,Oe[me].height,Je,Le,Oe[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,st,Oe[me].width,Oe[me].height,0,Je,Le,Oe[me].data);for(let ke=0;ke<Se.length;ke++){const St=Se[ke].image[me].image;G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,0,0,St.width,St.height,Je,Le,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,st,St.width,St.height,0,Je,Le,St.data)}}else{G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Je,Le,Oe[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,st,Je,Le,Oe[me]);for(let ke=0;ke<Se.length;ke++){const Qe=Se[ke];G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,0,0,Je,Le,Qe.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,st,Je,Le,Qe.image[me])}}}y(T)&&x(i.TEXTURE_CUBE_MAP),de.__version=_e.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ye(D,T,ee,ge,_e,de){const $e=l.convert(ee.format,ee.colorSpace),Pe=l.convert(ee.type),ze=P(ee.internalFormat,$e,Pe,ee.colorSpace),Ye=s.get(T),Ee=s.get(ee);if(Ee.__renderTarget=T,!Ye.__hasExternalTextures){const Oe=Math.max(1,T.width>>de),tt=Math.max(1,T.height>>de);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,de,ze,Oe,tt,T.depth,0,$e,Pe,null):t.texImage2D(_e,de,ze,Oe,tt,0,$e,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),dt(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,_e,Ee.__webglTexture,0,We(T)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,_e,Ee.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(D,T,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const ge=T.depthTexture,_e=ge&&ge.isDepthTexture?ge.type:null,de=C(T.stencilBuffer,_e),$e=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=We(T);dt(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,de,T.width,T.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,de,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,de,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$e,i.RENDERBUFFER,D)}else{const ge=T.textures;for(let _e=0;_e<ge.length;_e++){const de=ge[_e],$e=l.convert(de.format,de.colorSpace),Pe=l.convert(de.type),ze=P(de.internalFormat,$e,Pe,de.colorSpace),Ye=We(T);ee&&dt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,ze,T.width,T.height):dt(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,ze,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ze,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(T.depthTexture);ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ve(T.depthTexture,0);const _e=ge.__webglTexture,de=We(T);if(T.depthTexture.format===fa)dt(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0);else if(T.depthTexture.format===da)dt(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function xt(D){const T=s.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ge=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",_e)};ge.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=ge}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const ge=D.texture.mipmaps;ge&&ge.length>0?Ue(T.__webglFramebuffer[0],D):Ue(T.__webglFramebuffer,D)}else if(ee){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=i.createRenderbuffer(),Ae(T.__webglDepthbuffer[ge],D,!1);else{const _e=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[ge];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,de)}}else{const ge=D.texture.mipmaps;if(ge&&ge.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ae(T.__webglDepthbuffer,D,!1);else{const _e=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function At(D,T,ee){const ge=s.get(D);T!==void 0&&ye(ge.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&xt(D)}function ft(D){const T=D.texture,ee=s.get(D),ge=s.get(T);D.addEventListener("dispose",O);const _e=D.textures,de=D.isWebGLCubeRenderTarget===!0,$e=_e.length>1;if($e||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=T.version,c.memory.textures++),de){ee.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer[Pe]=[];for(let ze=0;ze<T.mipmaps.length;ze++)ee.__webglFramebuffer[Pe][ze]=i.createFramebuffer()}else ee.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)ee.__webglFramebuffer[Pe]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if($e)for(let Pe=0,ze=_e.length;Pe<ze;Pe++){const Ye=s.get(_e[Pe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),c.memory.textures++)}if(D.samples>0&&dt(D)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Pe=0;Pe<_e.length;Pe++){const ze=_e[Pe];ee.__webglColorRenderbuffer[Pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe]);const Ye=l.convert(ze.format,ze.colorSpace),Ee=l.convert(ze.type),Oe=P(ze.internalFormat,Ye,Ee,ze.colorSpace,D.isXRRenderTarget===!0),tt=We(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Oe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(ee.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),se(i.TEXTURE_CUBE_MAP,T);for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let ze=0;ze<T.mipmaps.length;ze++)ye(ee.__webglFramebuffer[Pe][ze],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ze);else ye(ee.__webglFramebuffer[Pe],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);y(T)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Pe=0,ze=_e.length;Pe<ze;Pe++){const Ye=_e[Pe],Ee=s.get(Ye);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),se(i.TEXTURE_2D,Ye),ye(ee.__webglFramebuffer,D,Ye,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,0),y(Ye)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,ge.__webglTexture),se(Pe,T),T.mipmaps&&T.mipmaps.length>0)for(let ze=0;ze<T.mipmaps.length;ze++)ye(ee.__webglFramebuffer[ze],D,T,i.COLOR_ATTACHMENT0,Pe,ze);else ye(ee.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,Pe,0);y(T)&&x(Pe),t.unbindTexture()}D.depthBuffer&&xt(D)}function k(D){const T=D.textures;for(let ee=0,ge=T.length;ee<ge;ee++){const _e=T[ee];if(y(_e)){const de=L(D),$e=s.get(_e).__webglTexture;t.bindTexture(de,$e),x(de),t.unbindTexture()}}}const Wt=[],mt=[];function Et(D){if(D.samples>0){if(dt(D)===!1){const T=D.textures,ee=D.width,ge=D.height;let _e=i.COLOR_BUFFER_BIT;const de=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$e=s.get(D),Pe=T.length>1;if(Pe)for(let Ye=0;Ye<T.length;Ye++)t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const ze=D.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ye=0;Ye<T.length;Ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$e.__webglColorRenderbuffer[Ye]);const Ee=s.get(T[Ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,ee,ge,0,0,ee,ge,_e,i.NEAREST),d===!0&&(Wt.length=0,mt.length=0,Wt.push(i.COLOR_ATTACHMENT0+Ye),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Wt.push(de),mt.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pe)for(let Ye=0;Ye<T.length;Ye++){t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,$e.__webglColorRenderbuffer[Ye]);const Ee=s.get(T[Ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function We(D){return Math.min(o.maxSamples,D.samples)}function dt(D){const T=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(D){const T=c.render.frame;m.get(D)!==T&&(m.set(D,T),D.update())}function nt(D,T){const ee=D.colorSpace,ge=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ee!==lo&&ee!==Cr&&(Rt.getTransfer(ee)===Dt?(ge!==di||_e!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),T}function It(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=ue,this.setTexture2D=ve,this.setTexture2DArray=ie,this.setTexture3D=xe,this.setTextureCube=V,this.rebindTextures=At,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=dt}function dR(i,e){function t(s,o=Cr){let l;const c=Rt.getTransfer(o);if(s===Ai)return i.UNSIGNED_BYTE;if(s===Gd)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Wd)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Dv)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===Pv)return i.BYTE;if(s===Lv)return i.SHORT;if(s===ua)return i.UNSIGNED_SHORT;if(s===Vd)return i.INT;if(s===ls)return i.UNSIGNED_INT;if(s===ji)return i.FLOAT;if(s===xa)return i.HALF_FLOAT;if(s===Uv)return i.ALPHA;if(s===Nv)return i.RGB;if(s===di)return i.RGBA;if(s===fa)return i.DEPTH_COMPONENT;if(s===da)return i.DEPTH_STENCIL;if(s===Iv)return i.RED;if(s===Xd)return i.RED_INTEGER;if(s===Fv)return i.RG;if(s===jd)return i.RG_INTEGER;if(s===$d)return i.RGBA_INTEGER;if(s===ru||s===su||s===ou||s===au)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===ru)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===su)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ou)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===au)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===ru)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===su)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ou)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===au)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rd||s===sd||s===od||s===ad)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===rd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===od)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ad)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ld||s===ud||s===cd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===ld||s===ud)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===cd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fd||s===dd||s===hd||s===pd||s===md||s===gd||s===vd||s===_d||s===xd||s===yd||s===Sd||s===Ed||s===Md||s===wd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===fd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===md)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_d)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ed)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Md)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lu||s===Td||s===Rd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===lu)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Td)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ov||s===Ad||s===Cd||s===bd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===lu)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Ad)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ca?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}const hR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pR=`
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

}`;class mR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new bn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Nr({vertexShader:hR,fragmentShader:pR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wi(new Su(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gR extends ho{constructor(e,t){super();const s=this;let o=null,l=1,c=null,f="local-floor",d=1,p=null,m=null,v=null,_=null,S=null,E=null;const w=new mR,y=t.getContextAttributes();let x=null,L=null;const P=[],C=[],H=new Ct;let F=null;const O=new ei;O.viewport=new jt;const j=new ei;j.viewport=new jt;const b=[O,j],R=new OE;let z=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let te=P[N];return te===void 0&&(te=new Lf,P[N]=te),te.getTargetRaySpace()},this.getControllerGrip=function(N){let te=P[N];return te===void 0&&(te=new Lf,P[N]=te),te.getGripSpace()},this.getHand=function(N){let te=P[N];return te===void 0&&(te=new Lf,P[N]=te),te.getHandSpace()};function J(N){const te=C.indexOf(N.inputSource);if(te===-1)return;const ne=P[te];ne!==void 0&&(ne.update(N.inputSource,N.frame,p||c),ne.dispatchEvent({type:N.type,data:N.inputSource}))}function ce(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",ve);for(let N=0;N<P.length;N++){const te=C[N];te!==null&&(C[N]=null,P[N].disconnect(te))}z=null,ue=null,w.reset(),e.setRenderTarget(x),S=null,_=null,v=null,o=null,L=null,Fe.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){l=N,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){f=N,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(N){p=N},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(N){if(o=N,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",ve),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,pe=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=y.stencil?da:fa,pe=y.stencil?ca:ls);const Ae={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:l};v=new XRWebGLBinding(o,t),_=v.createProjectionLayer(Ae),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new us(_.textureWidth,_.textureHeight,{format:di,type:Ai,depthTexture:new Yv(_.textureWidth,_.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const ne={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,ne),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new us(S.framebufferWidth,S.framebufferHeight,{format:di,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await o.requestReferenceSpace(f),Fe.setContext(o),Fe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ve(N){for(let te=0;te<N.removed.length;te++){const ne=N.removed[te],pe=C.indexOf(ne);pe>=0&&(C[pe]=null,P[pe].disconnect(ne))}for(let te=0;te<N.added.length;te++){const ne=N.added[te];let pe=C.indexOf(ne);if(pe===-1){for(let Ae=0;Ae<P.length;Ae++)if(Ae>=C.length){C.push(ne),pe=Ae;break}else if(C[Ae]===null){C[Ae]=ne,pe=Ae;break}if(pe===-1)break}const ye=P[pe];ye&&ye.connect(ne)}}const ie=new re,xe=new re;function V(N,te,ne){ie.setFromMatrixPosition(te.matrixWorld),xe.setFromMatrixPosition(ne.matrixWorld);const pe=ie.distanceTo(xe),ye=te.projectionMatrix.elements,Ae=ne.projectionMatrix.elements,Ue=ye[14]/(ye[10]-1),xt=ye[14]/(ye[10]+1),At=(ye[9]+1)/ye[5],ft=(ye[9]-1)/ye[5],k=(ye[8]-1)/ye[0],Wt=(Ae[8]+1)/Ae[0],mt=Ue*k,Et=Ue*Wt,We=pe/(-k+Wt),dt=We*-k;if(te.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(dt),N.translateZ(We),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ye[10]===-1)N.projectionMatrix.copy(te.projectionMatrix),N.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ke=Ue+We,nt=xt+We,It=mt-dt,D=Et+(pe-dt),T=At*xt/nt*Ke,ee=ft*xt/nt*Ke;N.projectionMatrix.makePerspective(It,D,T,ee,Ke,nt),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function fe(N,te){te===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(te.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(o===null)return;let te=N.near,ne=N.far;w.texture!==null&&(w.depthNear>0&&(te=w.depthNear),w.depthFar>0&&(ne=w.depthFar)),R.near=j.near=O.near=te,R.far=j.far=O.far=ne,(z!==R.near||ue!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,ue=R.far),O.layers.mask=N.layers.mask|2,j.layers.mask=N.layers.mask|4,R.layers.mask=O.layers.mask|j.layers.mask;const pe=N.parent,ye=R.cameras;fe(R,pe);for(let Ae=0;Ae<ye.length;Ae++)fe(ye[Ae],pe);ye.length===2?V(R,O,j):R.projectionMatrix.copy(O.projectionMatrix),le(N,R,pe)};function le(N,te,ne){ne===null?N.matrix.copy(te.matrixWorld):(N.matrix.copy(ne.matrixWorld),N.matrix.invert(),N.matrix.multiply(te.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(te.projectionMatrix),N.projectionMatrixInverse.copy(te.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ha*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&S===null))return d},this.setFoveation=function(N){d=N,_!==null&&(_.fixedFoveation=N),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=N)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let I=null;function se(N,te){if(m=te.getViewerPose(p||c),E=te,m!==null){const ne=m.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let pe=!1;ne.length!==R.cameras.length&&(R.cameras.length=0,pe=!0);for(let Ue=0;Ue<ne.length;Ue++){const xt=ne[Ue];let At=null;if(S!==null)At=S.getViewport(xt);else{const k=v.getViewSubImage(_,xt);At=k.viewport,Ue===0&&(e.setRenderTargetTextures(L,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(L))}let ft=b[Ue];ft===void 0&&(ft=new ei,ft.layers.enable(Ue),ft.viewport=new jt,b[Ue]=ft),ft.matrix.fromArray(xt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(xt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(At.x,At.y,At.width,At.height),Ue===0&&(R.matrix.copy(ft.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),pe===!0&&R.cameras.push(ft)}const ye=o.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const Ue=v.getDepthInformation(ne[0]);Ue&&Ue.isValid&&Ue.texture&&w.init(e,Ue,o.renderState)}}for(let ne=0;ne<P.length;ne++){const pe=C[ne],ye=P[ne];pe!==null&&ye!==void 0&&ye.update(pe,te,p||c)}I&&I(N,te),te.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:te}),E=null}const Fe=new Kv;Fe.setAnimationLoop(se),this.setAnimationLoop=function(N){I=N},this.dispose=function(){}}}const es=new Cn,vR=new $t;function _R(i,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,Xv(i)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,L,P,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),v(y,x)):x.isMeshPhongMaterial?(l(y,x),m(y,x)):x.isMeshStandardMaterial?(l(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(l(y,x),E(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),w(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?d(y,x,L,P):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===On&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===On&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const L=e.get(x),P=L.envMap,C=L.envMapRotation;P&&(y.envMap.value=P,es.copy(C),es.x*=-1,es.y*=-1,es.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),y.envMapRotation.value.setFromMatrix4(vR.makeRotationFromEuler(es)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,L,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*L,y.scale.value=P*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,L){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===On&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const L=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function xR(i,e,t,s){let o={},l={},c=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,P){const C=P.program;s.uniformBlockBinding(L,C)}function p(L,P){let C=o[L.id];C===void 0&&(E(L),C=m(L),o[L.id]=C,L.addEventListener("dispose",y));const H=P.program;s.updateUBOMapping(L,H);const F=e.render.frame;l[L.id]!==F&&(_(L),l[L.id]=F)}function m(L){const P=v();L.__bindingPointIndex=P;const C=i.createBuffer(),H=L.__size,F=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,H,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,C),C}function v(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const P=o[L.id],C=L.uniforms,H=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let F=0,O=C.length;F<O;F++){const j=Array.isArray(C[F])?C[F]:[C[F]];for(let b=0,R=j.length;b<R;b++){const z=j[b];if(S(z,F,b,H)===!0){const ue=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let ve=0;ve<J.length;ve++){const ie=J[ve],xe=w(ie);typeof ie=="number"||typeof ie=="boolean"?(z.__data[0]=ie,i.bufferSubData(i.UNIFORM_BUFFER,ue+ce,z.__data)):ie.isMatrix3?(z.__data[0]=ie.elements[0],z.__data[1]=ie.elements[1],z.__data[2]=ie.elements[2],z.__data[3]=0,z.__data[4]=ie.elements[3],z.__data[5]=ie.elements[4],z.__data[6]=ie.elements[5],z.__data[7]=0,z.__data[8]=ie.elements[6],z.__data[9]=ie.elements[7],z.__data[10]=ie.elements[8],z.__data[11]=0):(ie.toArray(z.__data,ce),ce+=xe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ue,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(L,P,C,H){const F=L.value,O=P+"_"+C;if(H[O]===void 0)return typeof F=="number"||typeof F=="boolean"?H[O]=F:H[O]=F.clone(),!0;{const j=H[O];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return H[O]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function E(L){const P=L.uniforms;let C=0;const H=16;for(let O=0,j=P.length;O<j;O++){const b=Array.isArray(P[O])?P[O]:[P[O]];for(let R=0,z=b.length;R<z;R++){const ue=b[R],J=Array.isArray(ue.value)?ue.value:[ue.value];for(let ce=0,ve=J.length;ce<ve;ce++){const ie=J[ce],xe=w(ie),V=C%H,fe=V%xe.boundary,le=V+fe;C+=fe,le!==0&&H-le<xe.storage&&(C+=H-le),ue.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=C,C+=xe.storage}}}const F=C%H;return F>0&&(C+=H-F),L.__size=C,L.__cache={},this}function w(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function y(L){const P=L.target;P.removeEventListener("dispose",y);const C=c.indexOf(P.__bindingPointIndex);c.splice(C,1),i.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function x(){for(const L in o)i.deleteBuffer(o[L]);c=[],o={},l={}}return{bind:d,update:p,dispose:x}}class yR{constructor(e={}){const{canvas:t=YS(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,x=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let H=!1;this._outputColorSpace=An;let F=0,O=0,j=null,b=-1,R=null;const z=new jt,ue=new jt;let J=null;const ce=new Pt(0);let ve=0,ie=t.width,xe=t.height,V=1,fe=null,le=null;const I=new jt(0,0,ie,xe),se=new jt(0,0,ie,xe);let Fe=!1;const N=new Jd;let te=!1,ne=!1;const pe=new $t,ye=new $t,Ae=new re,Ue=new jt,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function ft(){return j===null?V:1}let k=s;function Wt(A,Y){return t.getContext(A,Y)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hd}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",me,!1),k===null){const Y="webgl2";if(k=Wt(Y,A),k===null)throw Wt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let mt,Et,We,dt,Ke,nt,It,D,T,ee,ge,_e,de,$e,Pe,ze,Ye,Ee,Oe,tt,Je,Le,st,G;function De(){mt=new PT(k),mt.init(),Le=new dR(k,mt),Et=new MT(k,mt,e,Le),We=new cR(k,mt),Et.reverseDepthBuffer&&_&&We.buffers.depth.setReversed(!0),dt=new UT(k),Ke=new Z1,nt=new fR(k,mt,We,Ke,Et,Le,dt),It=new TT(C),D=new bT(C),T=new BE(k),st=new ST(k,T),ee=new LT(k,T,dt,st),ge=new IT(k,ee,T,dt),Oe=new NT(k,Et,nt),ze=new wT(Ke),_e=new K1(C,It,D,mt,Et,st,ze),de=new _R(C,Ke),$e=new Q1,Pe=new sR(mt),Ee=new yT(C,It,D,We,ge,S,d),Ye=new lR(C,ge,Et),G=new xR(k,dt,Et,We),tt=new ET(k,mt,dt),Je=new DT(k,mt,dt),dt.programs=_e.programs,C.capabilities=Et,C.extensions=mt,C.properties=Ke,C.renderLists=$e,C.shadowMap=Ye,C.state=We,C.info=dt}De();const he=new gR(C,k);this.xr=he,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(ie,xe,!1))},this.getSize=function(A){return A.set(ie,xe)},this.setSize=function(A,Y,ae=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,xe=Y,t.width=Math.floor(A*V),t.height=Math.floor(Y*V),ae===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(ie*V,xe*V).floor()},this.setDrawingBufferSize=function(A,Y,ae){ie=A,xe=Y,V=ae,t.width=Math.floor(A*ae),t.height=Math.floor(Y*ae),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,Y,ae,Z){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,Y,ae,Z),We.viewport(z.copy(I).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(se)},this.setScissor=function(A,Y,ae,Z){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,Y,ae,Z),We.scissor(ue.copy(se).multiplyScalar(V).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(A){We.setScissorTest(Fe=A)},this.setOpaqueSort=function(A){fe=A},this.setTransparentSort=function(A){le=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,ae=!0){let Z=0;if(A){let q=!1;if(j!==null){const Re=j.texture.format;q=Re===$d||Re===jd||Re===Xd}if(q){const Re=j.texture.type,Ne=Re===Ai||Re===ls||Re===ua||Re===ca||Re===Gd||Re===Wd,Ve=Ee.getClearColor(),He=Ee.getClearAlpha(),at=Ve.r,ot=Ve.g,Xe=Ve.b;Ne?(E[0]=at,E[1]=ot,E[2]=Xe,E[3]=He,k.clearBufferuiv(k.COLOR,0,E)):(w[0]=at,w[1]=ot,w[2]=Xe,w[3]=He,k.clearBufferiv(k.COLOR,0,w))}else Z|=k.COLOR_BUFFER_BIT}Y&&(Z|=k.DEPTH_BUFFER_BIT),ae&&(Z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ee.dispose(),$e.dispose(),Pe.dispose(),Ke.dispose(),It.dispose(),D.dispose(),ge.dispose(),st.dispose(),G.dispose(),_e.dispose(),he.dispose(),he.removeEventListener("sessionstart",ds),he.removeEventListener("sessionend",Qi),Ci.stop()};function be(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=dt.autoReset,Y=Ye.enabled,ae=Ye.autoUpdate,Z=Ye.needsUpdate,q=Ye.type;De(),dt.autoReset=A,Ye.enabled=Y,Ye.autoUpdate=ae,Ye.needsUpdate=Z,Ye.type=q}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ke(A){const Y=A.target;Y.removeEventListener("dispose",ke),Qe(Y)}function Qe(A){St(A),Ke.remove(A)}function St(A){const Y=Ke.get(A).programs;Y!==void 0&&(Y.forEach(function(ae){_e.releaseProgram(ae)}),A.isShaderMaterial&&_e.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ae,Z,q,Re){Y===null&&(Y=xt);const Ne=q.isMesh&&q.matrixWorld.determinant()<0,Ve=Ta(A,Y,ae,Z,q);We.setMaterial(Z,Ne);let He=ae.index,at=1;if(Z.wireframe===!0){if(He=ee.getWireframeAttribute(ae),He===void 0)return;at=2}const ot=ae.drawRange,Xe=ae.attributes.position;let gt=ot.start*at,ht=(ot.start+ot.count)*at;Re!==null&&(gt=Math.max(gt,Re.start*at),ht=Math.min(ht,(Re.start+Re.count)*at)),He!==null?(gt=Math.max(gt,0),ht=Math.min(ht,He.count)):Xe!=null&&(gt=Math.max(gt,0),ht=Math.min(ht,Xe.count));const Bt=ht-gt;if(Bt<0||Bt===1/0)return;st.setup(q,Z,Ve,ae,He);let Ut,bt=tt;if(He!==null&&(Ut=T.get(He),bt=Je,bt.setIndex(Ut)),q.isMesh)Z.wireframe===!0?(We.setLineWidth(Z.wireframeLinewidth*ft()),bt.setMode(k.LINES)):bt.setMode(k.TRIANGLES);else if(q.isLine){let et=Z.linewidth;et===void 0&&(et=1),We.setLineWidth(et*ft()),q.isLineSegments?bt.setMode(k.LINES):q.isLineLoop?bt.setMode(k.LINE_LOOP):bt.setMode(k.LINE_STRIP)}else q.isPoints?bt.setMode(k.POINTS):q.isSprite&&bt.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)no("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))bt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const et=q._multiDrawStarts,Lt=q._multiDrawCounts,vt=q._multiDrawCount,tn=He?T.get(He).bytesPerElement:1,tr=Ke.get(Z).currentProgram.getUniforms();for(let En=0;En<vt;En++)tr.setValue(k,"_gl_DrawID",En),bt.render(et[En]/tn,Lt[En])}else if(q.isInstancedMesh)bt.renderInstances(gt,Bt,q.count);else if(ae.isInstancedBufferGeometry){const et=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Lt=Math.min(ae.instanceCount,et);bt.renderInstances(gt,Bt,Lt)}else bt.render(gt,Bt)};function ut(A,Y,ae){A.transparent===!0&&A.side===Ei&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,hs(A,Y,ae),A.side=Ur,A.needsUpdate=!0,hs(A,Y,ae),A.side=Ei):hs(A,Y,ae)}this.compile=function(A,Y,ae=null){ae===null&&(ae=A),x=Pe.get(ae),x.init(Y),P.push(x),ae.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),A!==ae&&A.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const Z=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Re=q.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){const Ve=Re[Ne];ut(Ve,ae,q),Z.add(Ve)}else ut(Re,ae,q),Z.add(Re)}),x=P.pop(),Z},this.compileAsync=function(A,Y,ae=null){const Z=this.compile(A,Y,ae);return new Promise(q=>{function Re(){if(Z.forEach(function(Ne){Ke.get(Ne).currentProgram.isReady()&&Z.delete(Ne)}),Z.size===0){q(A);return}setTimeout(Re,10)}mt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Pn=null;function Sn(A){Pn&&Pn(A)}function ds(){Ci.stop()}function Qi(){Ci.start()}const Ci=new Kv;Ci.setAnimationLoop(Sn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(A){Pn=A,he.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},he.addEventListener("sessionstart",ds),he.addEventListener("sessionend",Qi),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(Y),Y=he.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,Y,j),x=Pe.get(A,P.length),x.init(Y),P.push(x),ye.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),N.setFromProjectionMatrix(ye),ne=this.localClippingEnabled,te=ze.init(this.clippingPlanes,ne),y=$e.get(A,L.length),y.init(),L.push(y),he.enabled===!0&&he.isPresenting===!0){const Re=C.xr.getDepthSensingMesh();Re!==null&&bi(Re,Y,-1/0,C.sortObjects)}bi(A,Y,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(fe,le),At=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,At&&Ee.addToRenderList(y,A),this.info.render.frame++,te===!0&&ze.beginShadows();const ae=x.state.shadowsArray;Ye.render(ae,A,Y),te===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=y.opaque,q=y.transmissive;if(x.setupLights(),Y.isArrayCamera){const Re=Y.cameras;if(q.length>0)for(let Ne=0,Ve=Re.length;Ne<Ve;Ne++){const He=Re[Ne];Fr(Z,q,A,He)}At&&Ee.render(A);for(let Ne=0,Ve=Re.length;Ne<Ve;Ne++){const He=Re[Ne];Ir(y,A,He,He.viewport)}}else q.length>0&&Fr(Z,q,A,Y),At&&Ee.render(A),Ir(y,A,Y);j!==null&&O===0&&(nt.updateMultisampleRenderTarget(j),nt.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(C,A,Y),st.resetDefaultState(),b=-1,R=null,P.pop(),P.length>0?(x=P[P.length-1],te===!0&&ze.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function bi(A,Y,ae,Z){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||N.intersectsSprite(A)){Z&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ye);const Ne=ge.update(A),Ve=A.material;Ve.visible&&y.push(A,Ne,Ve,ae,Ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||N.intersectsObject(A))){const Ne=ge.update(A),Ve=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ue.copy(Ne.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(ye)),Array.isArray(Ve)){const He=Ne.groups;for(let at=0,ot=He.length;at<ot;at++){const Xe=He[at],gt=Ve[Xe.materialIndex];gt&&gt.visible&&y.push(A,Ne,gt,ae,Ue.z,Xe)}}else Ve.visible&&y.push(A,Ne,Ve,ae,Ue.z,null)}}const Re=A.children;for(let Ne=0,Ve=Re.length;Ne<Ve;Ne++)bi(Re[Ne],Y,ae,Z)}function Ir(A,Y,ae,Z){const q=A.opaque,Re=A.transmissive,Ne=A.transparent;x.setupLightsView(ae),te===!0&&ze.setGlobalState(C.clippingPlanes,ae),Z&&We.viewport(z.copy(Z)),q.length>0&&er(q,Y,ae),Re.length>0&&er(Re,Y,ae),Ne.length>0&&er(Ne,Y,ae),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Fr(A,Y,ae,Z){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[Z.id]===void 0&&(x.state.transmissionRenderTarget[Z.id]=new us(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?xa:Ai,minFilter:ss,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Re=x.state.transmissionRenderTarget[Z.id],Ne=Z.viewport||z;Re.setSize(Ne.z*C.transmissionResolutionScale,Ne.w*C.transmissionResolutionScale);const Ve=C.getRenderTarget(),He=C.getActiveCubeFace(),at=C.getActiveMipmapLevel();C.setRenderTarget(Re),C.getClearColor(ce),ve=C.getClearAlpha(),ve<1&&C.setClearColor(16777215,.5),C.clear(),At&&Ee.render(ae);const ot=C.toneMapping;C.toneMapping=Yi;const Xe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),x.setupLightsView(Z),te===!0&&ze.setGlobalState(C.clippingPlanes,Z),er(A,ae,Z),nt.updateMultisampleRenderTarget(Re),nt.updateRenderTargetMipmap(Re),mt.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let ht=0,Bt=Y.length;ht<Bt;ht++){const Ut=Y[ht],bt=Ut.object,et=Ut.geometry,Lt=Ut.material,vt=Ut.group;if(Lt.side===Ei&&bt.layers.test(Z.layers)){const tn=Lt.side;Lt.side=On,Lt.needsUpdate=!0,Ma(bt,ae,Z,et,Lt,vt),Lt.side=tn,Lt.needsUpdate=!0,gt=!0}}gt===!0&&(nt.updateMultisampleRenderTarget(Re),nt.updateRenderTargetMipmap(Re))}C.setRenderTarget(Ve,He,at),C.setClearColor(ce,ve),Xe!==void 0&&(Z.viewport=Xe),C.toneMapping=ot}function er(A,Y,ae){const Z=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,Re=A.length;q<Re;q++){const Ne=A[q],Ve=Ne.object,He=Ne.geometry,at=Ne.group;let ot=Ne.material;ot.allowOverride===!0&&Z!==null&&(ot=Z),Ve.layers.test(ae.layers)&&Ma(Ve,Y,ae,He,ot,at)}}function Ma(A,Y,ae,Z,q,Re){A.onBeforeRender(C,Y,ae,Z,q,Re),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(C,Y,ae,Z,A,Re),q.transparent===!0&&q.side===Ei&&q.forceSinglePass===!1?(q.side=On,q.needsUpdate=!0,C.renderBufferDirect(ae,Y,Z,q,A,Re),q.side=Ur,q.needsUpdate=!0,C.renderBufferDirect(ae,Y,Z,q,A,Re),q.side=Ei):C.renderBufferDirect(ae,Y,Z,q,A,Re),A.onAfterRender(C,Y,ae,Z,q,Re)}function hs(A,Y,ae){Y.isScene!==!0&&(Y=xt);const Z=Ke.get(A),q=x.state.lights,Re=x.state.shadowsArray,Ne=q.state.version,Ve=_e.getParameters(A,q.state,Re,Y,ae),He=_e.getProgramCacheKey(Ve);let at=Z.programs;Z.environment=A.isMeshStandardMaterial?Y.environment:null,Z.fog=Y.fog,Z.envMap=(A.isMeshStandardMaterial?D:It).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,at===void 0&&(A.addEventListener("dispose",ke),at=new Map,Z.programs=at);let ot=at.get(He);if(ot!==void 0){if(Z.currentProgram===ot&&Z.lightsStateVersion===Ne)return mi(A,Ve),ot}else Ve.uniforms=_e.getUniforms(A),A.onBeforeCompile(Ve,C),ot=_e.acquireProgram(Ve,He),at.set(He,ot),Z.uniforms=Ve.uniforms;const Xe=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=ze.uniform),mi(A,Ve),Z.needsLights=wu(A),Z.lightsStateVersion=Ne,Z.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),Z.currentProgram=ot,Z.uniformsList=null,ot}function wa(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=uu.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function mi(A,Y){const ae=Ke.get(A);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function Ta(A,Y,ae,Z,q){Y.isScene!==!0&&(Y=xt),nt.resetTextureUnits();const Re=Y.fog,Ne=Z.isMeshStandardMaterial?Y.environment:null,Ve=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:lo,He=(Z.isMeshStandardMaterial?D:It).get(Z.envMap||Ne),at=Z.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ot=!!ae.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Xe=!!ae.morphAttributes.position,gt=!!ae.morphAttributes.normal,ht=!!ae.morphAttributes.color;let Bt=Yi;Z.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Bt=C.toneMapping);const Ut=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,bt=Ut!==void 0?Ut.length:0,et=Ke.get(Z),Lt=x.state.lights;if(te===!0&&(ne===!0||A!==R)){const un=A===R&&Z.id===b;ze.setState(Z,A,un)}let vt=!1;Z.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Lt.state.version||et.outputColorSpace!==Ve||q.isBatchedMesh&&et.batching===!1||!q.isBatchedMesh&&et.batching===!0||q.isBatchedMesh&&et.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&et.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&et.instancing===!1||!q.isInstancedMesh&&et.instancing===!0||q.isSkinnedMesh&&et.skinning===!1||!q.isSkinnedMesh&&et.skinning===!0||q.isInstancedMesh&&et.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&et.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&et.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&et.instancingMorph===!1&&q.morphTexture!==null||et.envMap!==He||Z.fog===!0&&et.fog!==Re||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ze.numPlanes||et.numIntersection!==ze.numIntersection)||et.vertexAlphas!==at||et.vertexTangents!==ot||et.morphTargets!==Xe||et.morphNormals!==gt||et.morphColors!==ht||et.toneMapping!==Bt||et.morphTargetsCount!==bt)&&(vt=!0):(vt=!0,et.__version=Z.version);let tn=et.currentProgram;vt===!0&&(tn=hs(Z,Y,q));let tr=!1,En=!1,Pi=!1;const Nt=tn.getUniforms(),hn=et.uniforms;if(We.useProgram(tn.program)&&(tr=!0,En=!0,Pi=!0),Z.id!==b&&(b=Z.id,En=!0),tr||R!==A){We.buffers.depth.getReversed()?(pe.copy(A.projectionMatrix),KS(pe),ZS(pe),Nt.setValue(k,"projectionMatrix",pe)):Nt.setValue(k,"projectionMatrix",A.projectionMatrix),Nt.setValue(k,"viewMatrix",A.matrixWorldInverse);const rn=Nt.map.cameraPosition;rn!==void 0&&rn.setValue(k,Ae.setFromMatrixPosition(A.matrixWorld)),Et.logarithmicDepthBuffer&&Nt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Nt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,En=!0,Pi=!0)}if(q.isSkinnedMesh){Nt.setOptional(k,q,"bindMatrix"),Nt.setOptional(k,q,"bindMatrixInverse");const un=q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Nt.setValue(k,"boneTexture",un.boneTexture,nt))}q.isBatchedMesh&&(Nt.setOptional(k,q,"batchingTexture"),Nt.setValue(k,"batchingTexture",q._matricesTexture,nt),Nt.setOptional(k,q,"batchingIdTexture"),Nt.setValue(k,"batchingIdTexture",q._indirectTexture,nt),Nt.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&Nt.setValue(k,"batchingColorTexture",q._colorsTexture,nt));const nn=ae.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Oe.update(q,ae,tn),(En||et.receiveShadow!==q.receiveShadow)&&(et.receiveShadow=q.receiveShadow,Nt.setValue(k,"receiveShadow",q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(hn.envMap.value=He,hn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&Y.environment!==null&&(hn.envMapIntensity.value=Y.environmentIntensity),En&&(Nt.setValue(k,"toneMappingExposure",C.toneMappingExposure),et.needsLights&&Ra(hn,Pi),Re&&Z.fog===!0&&de.refreshFogUniforms(hn,Re),de.refreshMaterialUniforms(hn,Z,V,xe,x.state.transmissionRenderTarget[A.id]),uu.upload(k,wa(et),hn,nt)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(uu.upload(k,wa(et),hn,nt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Nt.setValue(k,"center",q.center),Nt.setValue(k,"modelViewMatrix",q.modelViewMatrix),Nt.setValue(k,"normalMatrix",q.normalMatrix),Nt.setValue(k,"modelMatrix",q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const un=Z.uniformsGroups;for(let rn=0,Mt=un.length;rn<Mt;rn++){const gi=un[rn];G.update(gi,tn),G.bind(gi,tn)}}return tn}function Ra(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function wu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,Y,ae){const Z=Ke.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ke.get(A.texture).__webglTexture=Y,Ke.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ae,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const ae=Ke.get(A);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0};const Aa=k.createFramebuffer();this.setRenderTarget=function(A,Y=0,ae=0){j=A,F=Y,O=ae;let Z=!0,q=null,Re=!1,Ne=!1;if(A){const He=Ke.get(A);if(He.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(k.FRAMEBUFFER,null),Z=!1;else if(He.__webglFramebuffer===void 0)nt.setupRenderTarget(A);else if(He.__hasExternalTextures)nt.rebindTextures(A,Ke.get(A.texture).__webglTexture,Ke.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(He.__boundDepthTexture!==Xe){if(Xe!==null&&Ke.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(A)}}const at=A.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ne=!0);const ot=Ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ot[Y])?q=ot[Y][ae]:q=ot[Y],Re=!0):A.samples>0&&nt.useMultisampledRTT(A)===!1?q=Ke.get(A).__webglMultisampledFramebuffer:Array.isArray(ot)?q=ot[ae]:q=ot,z.copy(A.viewport),ue.copy(A.scissor),J=A.scissorTest}else z.copy(I).multiplyScalar(V).floor(),ue.copy(se).multiplyScalar(V).floor(),J=Fe;if(ae!==0&&(q=Aa),We.bindFramebuffer(k.FRAMEBUFFER,q)&&Z&&We.drawBuffers(A,q),We.viewport(z),We.scissor(ue),We.setScissorTest(J),Re){const He=Ke.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,He.__webglTexture,ae)}else if(Ne){const He=Ke.get(A.texture),at=Y;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,He.__webglTexture,ae,at)}else if(A!==null&&ae!==0){const He=Ke.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,He.__webglTexture,ae)}b=-1},this.readRenderTargetPixels=function(A,Y,ae,Z,q,Re,Ne,Ve=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He){We.bindFramebuffer(k.FRAMEBUFFER,He);try{const at=A.textures[Ve],ot=at.format,Xe=at.type;if(!Et.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-Z&&ae>=0&&ae<=A.height-q&&(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ve),k.readPixels(Y,ae,Z,q,Le.convert(ot),Le.convert(Xe),Re))}finally{const at=j!==null?Ke.get(j).__webglFramebuffer:null;We.bindFramebuffer(k.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ae,Z,q,Re,Ne,Ve=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He)if(Y>=0&&Y<=A.width-Z&&ae>=0&&ae<=A.height-q){We.bindFramebuffer(k.FRAMEBUFFER,He);const at=A.textures[Ve],ot=at.format,Xe=at.type;if(!Et.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,gt),k.bufferData(k.PIXEL_PACK_BUFFER,Re.byteLength,k.STREAM_READ),A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ve),k.readPixels(Y,ae,Z,q,Le.convert(ot),Le.convert(Xe),0);const ht=j!==null?Ke.get(j).__webglFramebuffer:null;We.bindFramebuffer(k.FRAMEBUFFER,ht);const Bt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await qS(k,Bt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,gt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Re),k.deleteBuffer(gt),k.deleteSync(Bt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,ae=0){const Z=Math.pow(2,-ae),q=Math.floor(A.image.width*Z),Re=Math.floor(A.image.height*Z),Ne=Y!==null?Y.x:0,Ve=Y!==null?Y.y:0;nt.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,ae,0,0,Ne,Ve,q,Re),We.unbindTexture()};const Ca=k.createFramebuffer(),ba=k.createFramebuffer();this.copyTextureToTexture=function(A,Y,ae=null,Z=null,q=0,Re=null){Re===null&&(q!==0?(no("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=q,q=0):Re=0);let Ne,Ve,He,at,ot,Xe,gt,ht,Bt;const Ut=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(ae!==null)Ne=ae.max.x-ae.min.x,Ve=ae.max.y-ae.min.y,He=ae.isBox3?ae.max.z-ae.min.z:1,at=ae.min.x,ot=ae.min.y,Xe=ae.isBox3?ae.min.z:0;else{const nn=Math.pow(2,-q);Ne=Math.floor(Ut.width*nn),Ve=Math.floor(Ut.height*nn),A.isDataArrayTexture?He=Ut.depth:A.isData3DTexture?He=Math.floor(Ut.depth*nn):He=1,at=0,ot=0,Xe=0}Z!==null?(gt=Z.x,ht=Z.y,Bt=Z.z):(gt=0,ht=0,Bt=0);const bt=Le.convert(Y.format),et=Le.convert(Y.type);let Lt;Y.isData3DTexture?(nt.setTexture3D(Y,0),Lt=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(nt.setTexture2DArray(Y,0),Lt=k.TEXTURE_2D_ARRAY):(nt.setTexture2D(Y,0),Lt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const vt=k.getParameter(k.UNPACK_ROW_LENGTH),tn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),tr=k.getParameter(k.UNPACK_SKIP_PIXELS),En=k.getParameter(k.UNPACK_SKIP_ROWS),Pi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,at),k.pixelStorei(k.UNPACK_SKIP_ROWS,ot),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Xe);const Nt=A.isDataArrayTexture||A.isData3DTexture,hn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const nn=Ke.get(A),un=Ke.get(Y),rn=Ke.get(nn.__renderTarget),Mt=Ke.get(un.__renderTarget);We.bindFramebuffer(k.READ_FRAMEBUFFER,rn.__webglFramebuffer),We.bindFramebuffer(k.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let gi=0;gi<He;gi++)Nt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ke.get(A).__webglTexture,q,Xe+gi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ke.get(Y).__webglTexture,Re,Bt+gi)),k.blitFramebuffer(at,ot,Ne,Ve,gt,ht,Ne,Ve,k.DEPTH_BUFFER_BIT,k.NEAREST);We.bindFramebuffer(k.READ_FRAMEBUFFER,null),We.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Ke.has(A)){const nn=Ke.get(A),un=Ke.get(Y);We.bindFramebuffer(k.READ_FRAMEBUFFER,Ca),We.bindFramebuffer(k.DRAW_FRAMEBUFFER,ba);for(let rn=0;rn<He;rn++)Nt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nn.__webglTexture,q,Xe+rn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nn.__webglTexture,q),hn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,un.__webglTexture,Re,Bt+rn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,un.__webglTexture,Re),q!==0?k.blitFramebuffer(at,ot,Ne,Ve,gt,ht,Ne,Ve,k.COLOR_BUFFER_BIT,k.NEAREST):hn?k.copyTexSubImage3D(Lt,Re,gt,ht,Bt+rn,at,ot,Ne,Ve):k.copyTexSubImage2D(Lt,Re,gt,ht,at,ot,Ne,Ve);We.bindFramebuffer(k.READ_FRAMEBUFFER,null),We.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else hn?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Lt,Re,gt,ht,Bt,Ne,Ve,He,bt,et,Ut.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Lt,Re,gt,ht,Bt,Ne,Ve,He,bt,Ut.data):k.texSubImage3D(Lt,Re,gt,ht,Bt,Ne,Ve,He,bt,et,Ut):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Re,gt,ht,Ne,Ve,bt,et,Ut.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Re,gt,ht,Ut.width,Ut.height,bt,Ut.data):k.texSubImage2D(k.TEXTURE_2D,Re,gt,ht,Ne,Ve,bt,et,Ut);k.pixelStorei(k.UNPACK_ROW_LENGTH,vt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tr),k.pixelStorei(k.UNPACK_SKIP_ROWS,En),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Pi),Re===0&&Y.generateMipmaps&&k.generateMipmap(Lt),We.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,ae=null,Z=null,q=0){return no('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,ae,Z,q)},this.initRenderTarget=function(A){Ke.get(A).__webglFramebuffer===void 0&&nt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?nt.setTextureCube(A,0):A.isData3DTexture?nt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?nt.setTexture2DArray(A,0):nt.setTexture2D(A,0),We.unbindTexture()},this.resetState=function(){F=0,O=0,j=null,We.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}function SR(i){switch(i){case"fa-user-tag":case"fa-person":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"12",cy:"7",r:"3.5"}),$.jsx("path",{d:"M5 21c0-4.2 3.1-7 7-7s7 2.8 7 7"})]});case"fa-venus-mars":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"8",cy:"9",r:"3.5"}),$.jsx("path",{d:"M8 12.5V21M5 17.5h6"}),$.jsx("circle",{cx:"16.5",cy:"14.5",r:"3.5"}),$.jsx("path",{d:"M19 12l3-3m0 0h-4m4 0v4"})]});case"fa-palette":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0 0-5H12a2 2 0 0 1 0-4h3a6 6 0 0 0-3-9Z"}),$.jsx("circle",{cx:"7",cy:"10",r:".7",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"6.5",r:".7",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"13",cy:"5.8",r:".7",fill:"currentColor",stroke:"none"})]});case"fa-eye":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z"}),$.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]});case"fa-eye-dropper":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m14 5 5 5M16.5 2.5l5 5-10 10-4 1 1-4 10-10Z"}),$.jsx("path",{d:"M5 19h6"})]});case"fa-scissors":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"6",cy:"7",r:"2.5"}),$.jsx("circle",{cx:"6",cy:"17",r:"2.5"}),$.jsx("path",{d:"m8 8.5 12 8.5M8 15.5 20 7"})]});case"fa-fill-drip":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m4 14 8-8 6 6-8 8H4v-6Z"}),$.jsx("path",{d:"M15 5 12 2"}),$.jsx("path",{d:"M20 15s2 2.2 2 3.5a2 2 0 0 1-4 0c0-1.3 2-3.5 2-3.5Z"})]});case"fa-hat-cowboy":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M4 16h16M7 16l1.5-7h7L17 16"}),$.jsx("path",{d:"M2.5 16c1.5 3 17.5 3 19 0"})]});case"fa-shirt":return $.jsx("path",{d:"M8 4h8l5 4-3 4-2-2v10H8V10l-2 2-3-4 5-4Z"});case"fa-shoe-prints":return $.jsxs($.Fragment,{children:[$.jsx("ellipse",{cx:"8",cy:"8",rx:"2.5",ry:"4",transform:"rotate(-20 8 8)"}),$.jsx("ellipse",{cx:"16",cy:"16",rx:"2.5",ry:"4",transform:"rotate(-20 16 16)"})]});case"fa-gem":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M6 4h12l4 5-10 11L2 9l4-5Z"}),$.jsx("path",{d:"M2 9h20M8 4l4 16 4-16"})]});case"fa-sliders":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M4 6h5M15 6h5M4 12h10M18 12h2M4 18h2M10 18h10"}),$.jsx("circle",{cx:"12",cy:"6",r:"2"}),$.jsx("circle",{cx:"16",cy:"12",r:"2"}),$.jsx("circle",{cx:"8",cy:"18",r:"2"})]});case"fa-grip-vertical":return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"9",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"6",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"12",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"9",cy:"18",r:"1",fill:"currentColor",stroke:"none"}),$.jsx("circle",{cx:"15",cy:"18",r:"1",fill:"currentColor",stroke:"none"})]});case"fa-chevron-up":return $.jsx("path",{d:"m6 15 6-6 6 6"});case"fa-chevron-down":return $.jsx("path",{d:"m6 9 6 6 6-6"});case"fa-check":return $.jsx("path",{d:"m5 12 4 4L19 6"});case"fa-arrows-rotate":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M20 7v5h-5"}),$.jsx("path",{d:"M4 17v-5h5"}),$.jsx("path",{d:"M6.2 8.2A7 7 0 0 1 18.8 10M17.8 15.8A7 7 0 0 1 5.2 14"})]});case"fa-layer-group":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),$.jsx("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]});case"fa-pause":return $.jsx("path",{d:"M8 5v14M16 5v14"});case"fa-play":return $.jsx("path",{d:"m8 5 11 7-11 7V5Z"});case"fa-download":return $.jsxs($.Fragment,{children:[$.jsx("path",{d:"M12 3v12m0 0 4-4m-4 4-4-4"}),$.jsx("path",{d:"M5 20h14"})]});default:return $.jsxs($.Fragment,{children:[$.jsx("circle",{cx:"12",cy:"12",r:"8"}),$.jsx("path",{d:"M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01"})]})}}function br({name:i,className:e=""}){return $.jsx("svg",{className:`skincrafter-icon ${e}`.trim(),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false","data-skincrafter-icon":i,children:SR(i)})}function t_({title:i,icon:e,iconClassName:t="skincrafter-accent-text",className:s="",children:o}){return $.jsxs("section",{className:`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${s}`,children:[$.jsxs("h2",{className:"text-xl font-bold mb-2 skincrafter-heading flex items-center",children:[$.jsx(br,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),i]}),o]})}function Ql({icon:i,className:e="",children:t,...s}){return $.jsxs("button",{className:`pixel-button preview-action-button p-2 pixel-border transition-colors ${e}`,...s,children:[i&&$.jsx(br,{name:i,className:"skincrafter-button-icon"}),t]})}const ER=""+new URL("/assets/male-BAcllNor-BAcllNor.png",import.meta.url).href,MR=""+new URL("/assets/female-QkyEKH3M-QkyEKH3M.png",import.meta.url).href,wR=""+new URL("/assets/male-CCp8Ivtz-CCp8Ivtz.png",import.meta.url).href,TR=""+new URL("/assets/male-Df8EQiYb-Df8EQiYb.png",import.meta.url).href,RR=""+new URL("/assets/male-Kk_GEnn7-Kk_GEnn7.png",import.meta.url).href,AR=""+new URL("/assets/none-CbOwHiBU-CbOwHiBU.png",import.meta.url).href,CR=""+new URL("/assets/clasic-Cok0gEvd-Cok0gEvd.png",import.meta.url).href,bR=""+new URL("/assets/small-lE1Vvqgb-lE1Vvqgb.png",import.meta.url).href,PR=""+new URL("/assets/big-exakGI1u-exakGI1u.png",import.meta.url).href,LR=""+new URL("/assets/duck-Dz_q_Va_-Dz_q_Va_.png",import.meta.url).href,DR=""+new URL("/assets/hoodie-C1a1is5P-C1a1is5P.png",import.meta.url).href,UR=""+new URL("/assets/pants-gRdPSA1G-gRdPSA1G.png",import.meta.url).href,n_={"textures/race/human/male.png":ER,"textures/race/human/female.png":MR,"textures/race/bear/male.png":wR,"textures/race/orc/male.png":TR,"textures/race/zombie/male.png":RR,"textures/race/template/none.png":AR,"textures/eyes/clasic.png":CR,"textures/eyes/small.png":bR,"textures/eyes/big.png":PR,"textures/hat/duck.png":LR,"textures/top/male/hoodie.png":DR,"textures/bottom/pants.png":UR};function as(i,e){return e?`${e.replace(/\/+$/,"")}/${i.replace(/^\/+/,"")}`:n_[i]}const kg=n_["textures/race/human/male.png"],Zs=64,NR=["bottom"];function Zn(i,e,t,s,o,l,c,f,d={}){const{transparent:p=!1,expand:m=0,rotate180Faces:v=[],flipXFaces:_=[],flipYFaces:S=NR}=d,E=new Set(v),w=new Set(_),y=new Set(S),x=new mo(e+m,t+m,s+m),L=()=>new Zd({transparent:p,toneMapped:!1,alphaTest:p?.1:0,side:Ei}),P=[L(),L(),L(),L(),L(),L()],C=(j,b,R=!1,z=!1)=>{const ue=i.clone(),J=(b[2]-b[0])/Zs,ce=(b[3]-b[1])/Zs,ve=b[0]/Zs,ie=b[2]/Zs,xe=1-b[1]/Zs,V=1-b[3]/Zs;ue.magFilter=dn,ue.minFilter=dn,ue.generateMipmaps=!1,ue.wrapS=la,ue.wrapT=la,ue.repeat.set(R?-J:J,z?-ce:ce),ue.offset.set(R?ie:ve,z?xe:V),ue.needsUpdate=!0,j.map=ue},H=j=>E.has(j)||w.has(j),F=j=>E.has(j)||y.has(j);C(P[0],f.right,H("right"),F("right")),C(P[1],f.left,H("left"),F("left")),C(P[2],f.top,H("top"),F("top")),C(P[3],f.bottom,H("bottom"),F("bottom")),C(P[4],f.front,H("front"),F("front")),C(P[5],f.back,H("back"),F("back"));const O=new wi(x,P);return O.position.set(o,l,c),O}const IR=-6,FR=6,eu=new re(-5,16,0),tu=new re(5,16,0),i_=-1.9,r_=1.9,Bg=new re(i_,6,0),zg=new re(r_,6,0);function Jn(i,e,t,s){if(!i)return;const o=e.clone().sub(t).applyEuler(s).add(t);i.position.copy(o),i.rotation.copy(s)}function OR(i,e,t={}){const{armL:s,armR:o,legL:l,legR:c,armLOL:f,armROL:d,legLOL:p,legROL:m}=e,v=t.leftArmX??FR,_=t.rightArmX??IR,S=new re(v,12,0),E=new re(_,12,0),w=new re(r_,0,0),y=new re(i_,0,0);if(!(!s||!o||!l||!c)){if([s,o,l,c,f,d,p,m].forEach(x=>x?.rotation.set(0,0,0)),s.position.copy(S),o.position.copy(E),l.position.copy(w),c.position.copy(y),f?.position.copy(S),d?.position.copy(E),p?.position.copy(w),m?.position.copy(y),i==="tpose"){const x=new Cn(0,0,Math.PI/2),L=new Cn(0,0,-Math.PI/2);Jn(s,S,tu,x),Jn(o,E,eu,L),Jn(f,S,tu,x),Jn(d,E,eu,L)}else if(i==="walking"){const x=-Math.PI/4,L=Math.PI/4,P=new Cn(x,0,0),C=new Cn(L,0,0),H=new Cn(L,0,0),F=new Cn(x,0,0);Jn(s,S,tu,P),Jn(o,E,eu,C),Jn(l,w,zg,H),Jn(c,y,Bg,F),Jn(f,S,tu,P),Jn(d,E,eu,C),Jn(p,w,zg,H),Jn(m,y,Bg,F)}}}const kR={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},BR={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},zR={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},HR={left:[40,20,44,32],right:[47,20,51,32],top:[44,16,47,20],bottom:[47,16,50,20],front:[44,20,47,32],back:[51,20,54,32]},VR={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},GR={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},WR={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},XR={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},jR={left:[40,36,44,48],right:[47,36,51,48],top:[44,32,47,36],bottom:[47,32,50,36],front:[44,36,47,48],back:[51,36,54,48]},$R={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},YR={left:[32,52,36,64],right:[40,52,44,64],top:[36,48,40,52],bottom:[40,48,44,52],front:[36,52,40,64],back:[44,52,48,64]},qR={left:[32,52,36,64],right:[39,52,43,64],top:[36,48,39,52],bottom:[39,48,42,52],front:[36,52,39,64],back:[43,52,46,64]},KR={left:[16,52,20,64],right:[24,52,28,64],top:[20,48,24,52],bottom:[24,48,28,52],front:[20,52,24,64],back:[28,52,32,64]},ZR={left:[48,52,52,64],right:[56,52,60,64],top:[52,48,56,52],bottom:[56,48,60,52],front:[52,52,56,64],back:[60,52,64,64]},JR={left:[48,52,52,64],right:[55,52,59,64],top:[52,48,55,52],bottom:[55,48,58,52],front:[52,52,55,64],back:[59,52,62,64]},QR={left:[0,52,4,64],right:[8,52,12,64],top:[4,48,8,52],bottom:[8,48,12,52],front:[4,52,8,64],back:[12,52,16,64]},Hf=0,eA=44,tA=24,nA=72,iA=.04,rA=1,sA=.5,Hg=-6,Vg=6,Gg=-5.5,Wg=5.5,Xg=-1.9,jg=1.9,$g=()=>({armL:null,armR:null,legL:null,legR:null,armLOL:null,armROL:null,legLOL:null,legROL:null,headOL:null,bodyOL:null}),oA={createRenderer:()=>new yR({antialias:!1,alpha:!0}),createTextureLoader:()=>new DE,createResizeObserver:i=>new ResizeObserver(i),requestAnimationFrame:i=>window.requestAnimationFrame(i),cancelAnimationFrame:i=>window.cancelAnimationFrame(i),addWindowResizeListener:i=>window.addEventListener("resize",i),removeWindowResizeListener:i=>window.removeEventListener("resize",i),getDevicePixelRatio:()=>window.devicePixelRatio||1};class aA{constructor(e,t,s=oA){this.container=e,this.dependencies=s,this.pose=t.pose,this.model=t.model,this.showOverlay=t.showOverlay,this.autoRotate=t.autoRotate,this.onError=t.onError;const o=e.clientWidth||1,l=e.clientHeight||1;this.renderer=s.createRenderer(),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=An,this.renderer.toneMapping=Yi,this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(o,l),e.appendChild(this.renderer.domElement),this.camera=new ei(52,o/l,.1,1e3),this.camera.position.set(0,Hf,this.cameraDistance),this.camera.lookAt(0,Hf,0),this.scene=new ME;const c=new FE(16777215,1);c.position.set(10,10,10),this.scene.add(c),this.group=new ta,this.group.position.y=-10,this.scene.add(this.group),this.textureLoader=s.createTextureLoader(),this.resizeObserver=s.createResizeObserver(this.handleResize),this.resizeObserver.observe(e),s.addWindowResizeListener(this.handleResize),e.addEventListener("wheel",this.handleWheel,{passive:!1}),this.handleResize(),this.scheduleAnimationFrame(),this.setTexture(t.textureUrl)}container;dependencies;renderer;camera;scene;group;textureLoader;resizeObserver;onError;disposedTextures=new WeakSet;pendingTextures=new Map;parts=$g();modelMeshes=[];currentTexture=null;requestedTextureUrl=null;textureLoadVersion=0;animationFrameId=null;disposed=!1;pose;model;showOverlay;autoRotate;cameraDistance=eA;modelRevision=0;textureRevision=0;setTexture(e){if(this.disposed||e===this.requestedTextureUrl)return;this.requestedTextureUrl=e;const t=++this.textureLoadVersion;let s=!1;const o=this.textureLoader.load(e,l=>{s=!0,this.pendingTextures.delete(t),this.handleTextureLoaded(t,l)},void 0,l=>{s=!0;const c=this.pendingTextures.get(t);c&&(this.disposeTexture(c),this.pendingTextures.delete(t)),!this.disposed&&t===this.textureLoadVersion&&this.onError?.({code:"texture_load_failed",textureUrl:e,cause:l})});s||this.pendingTextures.set(t,o)}setModel(e){this.disposed||e===this.model||(this.model=e,this.currentTexture&&this.buildModel(this.currentTexture))}setPose(e){this.disposed||e===this.pose||(this.pose=e,this.applyCurrentPose())}setShowOverlay(e){this.disposed||e===this.showOverlay||(this.showOverlay=e,this.applyOverlayVisibility())}setAutoRotate(e){this.disposed||(this.autoRotate=e)}getDiagnostics(){const e=this.parts.armR?.geometry.parameters.width;return{rendererAttached:this.renderer.domElement.parentNode===this.container,modelRevision:this.modelRevision,textureRevision:this.textureRevision,meshCount:this.modelMeshes.length,rightArmWidth:typeof e=="number"?e:null,overlayVisible:this.getOverlayMeshes().map(t=>t.visible),cameraDistance:this.cameraDistance,rotation:this.group.rotation.y}}dispose(){this.disposed||(this.disposed=!0,this.textureLoadVersion+=1,this.container.removeEventListener("wheel",this.handleWheel),this.dependencies.removeWindowResizeListener(this.handleResize),this.resizeObserver.disconnect(),this.animationFrameId!==null&&(this.dependencies.cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.pendingTextures.forEach(e=>this.disposeTexture(e)),this.pendingTextures.clear(),this.disposeModel(),this.currentTexture&&(this.disposeTexture(this.currentTexture),this.currentTexture=null),this.renderer.dispose(),this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement))}handleResize=()=>{if(this.disposed)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setPixelRatio(this.getClampedDpr()),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()};handleWheel=e=>{this.disposed||(e.preventDefault(),this.cameraDistance=$S.clamp(this.cameraDistance+e.deltaY*iA,tA,nA),this.camera.position.z=this.cameraDistance,this.camera.lookAt(0,Hf,0),this.camera.updateProjectionMatrix())};scheduleAnimationFrame(){this.animationFrameId=this.dependencies.requestAnimationFrame(()=>{this.disposed||(this.autoRotate&&(this.group.rotation.y+=.01),this.renderer.render(this.scene,this.camera),this.scheduleAnimationFrame())})}getClampedDpr(){return Math.min(this.dependencies.getDevicePixelRatio(),2)}handleTextureLoaded(e,t){if(this.disposed||e!==this.textureLoadVersion){this.disposeTexture(t);return}this.configureTexture(t);const s=this.currentTexture;this.modelMeshes.length===0?this.buildModel(t):this.replaceModelTexture(t),this.currentTexture=t,this.textureRevision+=1,s&&s!==t&&this.disposeTexture(s)}configureTexture(e){e.magFilter=dn,e.minFilter=dn,e.generateMipmaps=!1,e.colorSpace=An,e.wrapS=Xi,e.wrapT=Xi}buildModel(e){this.disposeModel();const t=this.model==="slim",s=t?3:4,o=t?Gg:Hg,l=t?Wg:Vg,c=t?HR:zR,f=t?qR:YR,d=t?jR:XR,p=t?JR:ZR,m=Zn(e,8,8,8,0,22,0,kR),v=Zn(e,8,12,4,0,12,0,BR),_=Zn(e,s,12,4,o,12,0,c),S=Zn(e,s,12,4,l,12,0,f),E=Zn(e,4,12,4,Xg,0,0,VR),w=Zn(e,4,12,4,jg,0,0,KR),y={transparent:!0,expand:rA},x={transparent:!0,expand:sA},L=Zn(e,8,8,8,0,22,0,GR,y),P=Zn(e,8,12,4,0,12,0,WR,x),C=Zn(e,s,12,4,o,12,0,d,x),H=Zn(e,s,12,4,l,12,0,p,x),F=Zn(e,4,12,4,Xg,0,0,$R,x),O=Zn(e,4,12,4,jg,0,0,QR,x);this.parts={armL:S,armR:_,legL:w,legR:E,armLOL:H,armROL:C,legLOL:O,legROL:F,headOL:L,bodyOL:P},this.modelMeshes=[m,v,_,S,E,w,L,P,C,H,F,O],this.group.add(...this.modelMeshes),this.modelRevision+=1,this.applyOverlayVisibility(),this.applyCurrentPose()}replaceModelTexture(e){this.modelMeshes.forEach(t=>{t.material.forEach(s=>{const o=s.map;if(!o)return;const l=e.clone();l.magFilter=dn,l.minFilter=dn,l.generateMipmaps=!1,l.colorSpace=An,l.wrapS=o.wrapS,l.wrapT=o.wrapT,l.repeat.copy(o.repeat),l.offset.copy(o.offset),l.center.copy(o.center),l.rotation=o.rotation,l.flipY=o.flipY,l.needsUpdate=!0,s.map=l,s.needsUpdate=!0,this.disposeTexture(o)})})}applyCurrentPose(){const e=this.model==="slim";OR(this.pose,{armL:this.parts.armL,armR:this.parts.armR,legL:this.parts.legL,legR:this.parts.legR,armLOL:this.parts.armLOL,armROL:this.parts.armROL,legLOL:this.parts.legLOL,legROL:this.parts.legROL},{leftArmX:e?Wg:Vg,rightArmX:e?Gg:Hg})}applyOverlayVisibility(){this.getOverlayMeshes().forEach(e=>{e.visible=this.showOverlay})}getOverlayMeshes(){return[this.parts.headOL,this.parts.bodyOL,this.parts.armLOL,this.parts.armROL,this.parts.legLOL,this.parts.legROL].filter(e=>e!==null)}disposeModel(){this.modelMeshes.forEach(e=>{this.group.remove(e),e.geometry.dispose(),e.material.forEach(t=>{t.map&&(this.disposeTexture(t.map),t.map=null),t.dispose()})}),this.modelMeshes=[],this.parts=$g()}disposeTexture(e){this.disposedTextures.has(e)||(this.disposedTextures.add(e),e.dispose())}}function lA(i,e,t){return new aA(i,e,t)}function uA(i){return{code:"preview_texture_load_failed",category:"preview",message:`Failed to load preview texture: ${i.textureUrl}`,assetUrl:i.textureUrl,cause:i.cause}}function cA({texture:i,pose:e="default",model:t="classic",showOverlay:s=!0,autoRotate:o=!0,style:l,onError:c}){const f=X.useRef(null),d=X.useRef(null),p=X.useRef(c),m=X.useRef({textureUrl:i??kg,pose:e,model:t,showOverlay:s,autoRotate:o,onError:v=>p.current?.(uA(v))});return X.useEffect(()=>{p.current=c},[c]),X.useEffect(()=>{const v=f.current;if(!v)return;let _;try{_=lA(v,m.current)}catch(S){p.current?.({code:"preview_webgl_initialization_failed",category:"preview",message:"Failed to initialize the WebGL skin preview.",cause:S});return}return d.current=_,()=>{_.dispose(),d.current===_&&(d.current=null)}},[]),X.useEffect(()=>{d.current?.setTexture(i??kg)},[i]),X.useEffect(()=>{d.current?.setModel(t)},[t]),X.useEffect(()=>{d.current?.setPose(e)},[e]),X.useEffect(()=>{d.current?.setShowOverlay(s)},[s]),X.useEffect(()=>{d.current?.setAutoRotate(o)},[o]),$.jsx("div",{ref:f,style:{width:"100%",height:"100%",minHeight:0,position:"relative",touchAction:"none",...l??{}}})}const s_=["en","pl"],vo="en",Yg={en:{"app.title":"SkinCrafter","nav.wardrobe":"Wardrobe","nav.skinView":"Skin View","nav.language":"Language","nav.workInProgress":"Work in progress","panel.preview":"Preview","panel.customization":"Customization","panel.loadSkin":"Load Minecraft Skin","action.changePose":"Change Pose","action.hideOverlay":"Hide Overlay","action.showOverlay":"Show Overlay","action.disableAutoRotate":"Stop Rotation","action.enableAutoRotate":"Start Rotation","action.download":"Download","action.downloadSkin":"Download character skin","action.dragLayer":"Drag layer","action.moveLayerUp":"Move layer up","action.moveLayerDown":"Move layer down","action.loadSkin":"Load Skin","action.loading":"Loading...","error.assetLoad":"A skin texture could not be loaded. Check the selected assets and try again.","error.generation":"The skin could not be generated. Change the selection and try again.","error.initialSkin":"The supplied skin is not a valid 64x64 Minecraft PNG.","error.preview":"The 3D preview could not be loaded. Skin editing and download may still be available.","skinView.player":"Player","skinView.username":"Minecraft username","category.race":"Character Race","category.sex":"Sex","category.skinColor":"Skin Color","category.eyes":"Eyes","category.eyesColor":"Eye Color","category.hair":"Hair","category.hairColor":"Hair Color","category.hat":"Hat","category.shirt":"Shirt","category.pants":"Pants","category.shoes":"Shoes","category.accessory":"Accessory","option.none":"None","option.sex.Male":"Male","option.sex.Female":"Female","option.race.Human":"Human","option.race.Bear":"Bear","option.race.Orc":"Orc","option.race.Zombie":"Zombie","option.race.Template":"Template","option.eyes.Classic":"Classic","option.eyes.Small":"Small","option.eyes.Big":"Big","option.hat.Duck":"Duck","option.shirt.Hoodie":"Hoodie","option.pants.Pants":"Pants","option.color.blue":"Blue","option.color.green":"Green","option.color.brown":"Brown","option.color.blond":"Blond","option.color.black":"Black"},pl:{"app.title":"SkinCrafter","nav.wardrobe":"Kreator","nav.skinView":"Podglad","nav.language":"Jezyk","nav.workInProgress":"Produkt w trakcie prac","panel.preview":"Podglad","panel.customization":"Personalizacja","panel.loadSkin":"Wczytaj skin Minecraft","action.changePose":"Zmien Poze","action.hideOverlay":"Ukryj Warstwe","action.showOverlay":"Pokaz Warstwe","action.disableAutoRotate":"Zatrzymaj Obrot","action.enableAutoRotate":"Wlacz Obrot","action.download":"Pobierz","action.downloadSkin":"Pobierz skin postaci","action.dragLayer":"Przeciagnij warstwe","action.moveLayerUp":"Przesun warstwe wyzej","action.moveLayerDown":"Przesun warstwe nizej","action.loadSkin":"Wczytaj Skin","action.loading":"Wczytywanie...","error.assetLoad":"Nie udalo sie wczytac tekstury skina. Sprawdz wybrane elementy i sprobuj ponownie.","error.generation":"Nie udalo sie wygenerowac skina. Zmien wybor i sprobuj ponownie.","error.initialSkin":"Przekazany skin nie jest prawidlowym plikiem PNG Minecraft 64x64.","error.preview":"Nie udalo sie uruchomic podgladu 3D. Edycja i pobieranie skina moga nadal dzialac.","skinView.player":"Gracz","skinView.username":"Nazwa gracza Minecraft","category.race":"Rasa Postaci","category.sex":"Plec","category.skinColor":"Kolor Skory","category.eyes":"Oczy","category.eyesColor":"Kolor Oczu","category.hair":"Wlosy","category.hairColor":"Kolor Wlosow","category.hat":"Czapka","category.shirt":"Koszulka","category.pants":"Spodnie","category.shoes":"Buty","category.accessory":"Dodatek","option.none":"Brak","option.sex.Male":"Mezczyzna","option.sex.Female":"Kobieta","option.race.Human":"Czlowiek","option.race.Bear":"Niedzwiedz","option.race.Orc":"Ork","option.race.Zombie":"Zombie","option.race.Template":"Szablon","option.eyes.Classic":"Klasyczne","option.eyes.Small":"Male","option.eyes.Big":"Duze","option.hat.Duck":"Kaczka","option.shirt.Hoodie":"Bluza","option.pants.Pants":"Spodnie","option.color.blue":"Niebieski","option.color.green":"Zielony","option.color.brown":"Brazowy","option.color.blond":"Blond","option.color.black":"Czarny"}};function fA(i){return!!i&&s_.includes(i)}function Ea(i,e){return Yg[i][e]??Yg[vo][e]??e}const dA=i=>Ea(vo,i);function hA(i){return i.code==="asset_load_failed"?"error.assetLoad":i.code==="invalid_initial_skin"?"error.initialSkin":i.category==="preview"?"error.preview":"error.generation"}function o_({texture:i,model:e="classic",footerHeight:t=0,t:s=dA,onSave:o,canSave:l,generationStatus:c,generationError:f,onError:d}){const[p,m]=X.useState("default"),[v,_]=X.useState(!0),[S,E]=X.useState(!0),[w,y]=X.useState(null),x=()=>{m(R=>R==="default"?"tpose":R==="tpose"?"walking":"default")},L=()=>{_(R=>!R)},P=()=>{E(R=>!R)},C=l??!!i,H=()=>{if(!i||!C)return;const R=document.createElement("a");R.href=i,R.download="skincrafter-skin.png",R.click()},F=()=>{if(C){if(o){o();return}H()}},O=X.useCallback(R=>{y(R),d?.(R)},[d]);X.useEffect(()=>{y(R=>R?.code==="preview_texture_load_failed"?null:R)},[i]);const j=c==="error"&&f?f:w,b={"--skincrafter-preview-bottom-offset":`${Math.max(0,t)}px`};return $.jsxs(t_,{title:s("panel.preview"),icon:"fa-eye",children:[$.jsx("div",{className:"skincrafter-preview-surface overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full",style:b,children:$.jsx("div",{className:"flex justify-center items-center model-placeholder h-full",children:$.jsx(cA,{texture:i,pose:p,model:e,showOverlay:v,autoRotate:S,onError:O})})}),j&&$.jsx("p",{className:"mt-3 text-sm font-semibold skincrafter-error-text",role:"alert",children:s(hA(j))}),$.jsxs("div",{className:"mt-4 preview-actions",children:[$.jsx(Ql,{className:"skincrafter-secondary-action",icon:"fa-arrows-rotate","aria-label":s("action.changePose"),onClick:x,children:s("action.changePose")}),$.jsx(Ql,{className:"skincrafter-secondary-action",icon:"fa-layer-group","aria-label":s(v?"action.hideOverlay":"action.showOverlay"),onClick:L,children:s(v?"action.hideOverlay":"action.showOverlay")}),$.jsx(Ql,{className:"skincrafter-secondary-action",icon:S?"fa-pause":"fa-play","aria-label":s(S?"action.disableAutoRotate":"action.enableAutoRotate"),onClick:P,children:s(S?"action.disableAutoRotate":"action.enableAutoRotate")}),$.jsx(Ql,{className:"skincrafter-secondary-action disabled:opacity-50 disabled:cursor-not-allowed",icon:"fa-download","aria-label":s("action.downloadSkin"),onClick:F,disabled:!C,children:s("action.download")})]})]})}function pA({left:i,right:e}){return $.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:i}),$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:e})]})}function mA(i,e,t,s){if(!i.includes(e)||!i.includes(t))return[...i];if(e===t)return[...i];const o=i.filter(c=>c!==e),l=o.indexOf(t)+(s==="after"?1:0);return o.splice(l,0,e),o}function gA({heading:i,icon:e,iconClassName:t="skincrafter-category-icon",className:s="",children:o,...l}){return $.jsxs("div",{className:`option-card skincrafter-surface p-4 pixel-border relative ${i?"pt-5":""} ${s}`,...l,children:[i&&$.jsxs("h3",{className:"font-medium mb-2 flex items-center absolute -top-3 left-4 px-2 skincrafter-surface skincrafter-heading z-10",children:[e&&$.jsx(br,{name:e,className:`skincrafter-heading-icon ${t}`.trim()}),i]}),o]})}const vA=["None","Duck"];function a_(i,e){return i==="Duck"?as("textures/hat/duck.png",e):null}const _A=["None","Pants"];function l_(i,e){return i==="Pants"?as("textures/bottom/pants.png",e):null}const u_={Human:{Male:"textures/race/human/male.png",Female:"textures/race/human/female.png"},Bear:{Male:"textures/race/bear/male.png"},Orc:{Male:"textures/race/orc/male.png"},Zombie:{Male:"textures/race/zombie/male.png"},Template:{None:"textures/race/template/none.png"}};function c_(i){return Object.keys(u_[i])}function f_(i,e,t){const s=u_[i],o=c_(i)[0],l=s[e]??s[o];return l?as(l,t):""}const xA=["Human","Bear","Orc","Zombie"],yA=["None","Hoodie"];function d_(i,e){return i==="Hoodie"?as("textures/top/male/hoodie.png",e):null}const h_={Human:["#D5BAAA","#E0AC69","#C68642"],Bear:["#5D4037","#8D6E63","#A1887F"],Orc:["#558B2F","#7CB342"],Zombie:["#556B2F"],Template:["#FFFFFF"]},cs=[{id:"race",labelKey:"category.race",icon:"fa-user-tag",control:"choice"},{id:"sex",labelKey:"category.sex",icon:"fa-venus-mars",control:"choice"},{id:"skinColor",labelKey:"category.skinColor",icon:"fa-palette",control:"color"},{id:"eyes",labelKey:"category.eyes",icon:"fa-eye",control:"choice"},{id:"eyesColor",labelKey:"category.eyesColor",icon:"fa-eye-dropper",control:"color"},{id:"hair",labelKey:"category.hair",icon:"fa-scissors",control:"choice"},{id:"hairColor",labelKey:"category.hairColor",icon:"fa-fill-drip",control:"color"},{id:"hat",labelKey:"category.hat",icon:"fa-hat-cowboy",control:"choice"},{id:"shirt",labelKey:"category.shirt",icon:"fa-shirt",control:"choice"},{id:"pants",labelKey:"category.pants",icon:"fa-person",control:"choice"},{id:"shoes",labelKey:"category.shoes",icon:"fa-shoe-prints",control:"choice"},{id:"accessory",labelKey:"category.accessory",icon:"fa-gem",control:"choice"}],Pr={race:"Human",sex:"Male",skinColor:h_.Human[0],eyes:"Classic",eyesColor:"#2F5D9B",hair:"None",hairColor:"#4A2F20",hat:"None",shirt:"None",pants:"None",shoes:"None",accessory:"None"},pu=["hat","shirt","pants","shoes","accessory"],Ld={id:"None",labelKey:"option.none",texture:null},SA={Male:{id:"Male",labelKey:"option.sex.Male",texture:null},Female:{id:"Female",labelKey:"option.sex.Female",texture:null},None:Ld};function ro(i,e,t){if(i==="race")return xA.map(s=>({id:s,labelKey:`option.race.${s}`,texture:f_(s,"Male",t)}));if(i==="sex")return c_(e.race).map(s=>SA[s]);if(i==="skinColor"){const s=e.race;return h_[s].map(o=>({id:o,labelKey:`option.skinColor.${o}`,color:o}))}return i==="eyes"?[{id:"Classic",labelKey:"option.eyes.Classic",texture:as("textures/eyes/clasic.png",t)},{id:"Small",labelKey:"option.eyes.Small",texture:as("textures/eyes/small.png",t)},{id:"Big",labelKey:"option.eyes.Big",texture:as("textures/eyes/big.png",t)}]:i==="eyesColor"?[{id:"#2F5D9B",labelKey:"option.color.blue",color:"#2F5D9B"},{id:"#2F8F4E",labelKey:"option.color.green",color:"#2F8F4E"},{id:"#5B3A29",labelKey:"option.color.brown",color:"#5B3A29"}]:i==="hair"?[Ld]:i==="hairColor"?[{id:"#4A2F20",labelKey:"option.color.brown",color:"#4A2F20"},{id:"#D6B15D",labelKey:"option.color.blond",color:"#D6B15D"},{id:"#1F1A17",labelKey:"option.color.black",color:"#1F1A17"}]:i==="hat"?vA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.hat.${s}`,texture:a_(s,t)})):i==="shirt"?yA.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.shirt.${s}`,texture:d_(s,t)})):i==="pants"?_A.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.pants.${s}`,texture:l_(s,t)})):[Ld]}function Mu(i){const e={...Pr,...i??{}};ro("race",e).map(s=>s.id).includes(e.race)||(e.race=Pr.race);const t=ro("skinColor",e).map(s=>s.id);return t.includes(e.skinColor)||(e.skinColor=t[0]??Pr.skinColor),cs.forEach(s=>{const o=ro(s.id,e).map(l=>l.id);o.includes(e[s.id])||(e[s.id]=o[0]??"None")}),e}function Dr(i){const e=new Set(pu),t=[];return(i??[]).forEach(s=>{e.has(s)&&!t.includes(s)&&t.push(s)}),pu.forEach(s=>{t.includes(s)||t.push(s)}),t}function p_(i,e,t){if(i==="race")return{url:f_(e.race,e.sex,t),tint:e.skinColor};if(i==="hat")return a_(e.hat,t);if(i==="shirt"){const s=d_(e.shirt,t);return s?{url:s}:null}if(i==="pants"){const s=l_(e.pants,t);return s?{url:s}:null}if(i==="eyes"){const s=ro("eyes",e,t).find(o=>o.id===e.eyes);return s?.texture?{url:s.texture,tint:e.eyesColor}:null}return ro(i,e,t).find(s=>s.id===e[i])?.texture??null}function m_(i){return["race","sex","eyes","hair",...Dr(i)]}function EA(i,e=pu,t){return m_(e).map(s=>p_(s,i,t))}function MA(i,e,t,s){const o=new Set(t),l=c=>c==="race"?o.has("race")||o.has("sex")||o.has("skinColor"):c==="sex"?!1:c==="eyes"?o.has("eyes")||o.has("eyesColor"):c==="hair"?o.has("hair")||o.has("hairColor"):o.has(c);return m_(e).filter(l).map(c=>p_(c,i,s))}const Js=i=>pu.includes(i),qg=(i,e)=>i.length===e.length&&i.every((t,s)=>t===e[s]);function wA({appearance:i,textureLayerOrder:e,onAppearanceChange:t,onLayerOrderChange:s,t:o,assetBaseUrl:l}){const[c,f]=X.useState(null),[d,p]=X.useState(null),[m,v]=X.useState(null),[_,S]=X.useState(null),E=X.useRef(null),w=X.useRef(null),y=X.useRef(null),x=X.useRef(null),L=X.useRef(new Map),{categoriesById:P,fixedCategories:C}=X.useMemo(()=>{const N=new Map(cs.map(ne=>[ne.id,ne])),te=cs.filter(ne=>!Js(ne.id));return{categoriesById:N,fixedCategories:te}},[]),H=c&&d?d:e,F=X.useMemo(()=>H.map(N=>P.get(N)).filter(N=>!!N),[P,H]);X.useLayoutEffect(()=>{const N=x.current;if(!N)return;const te=new Map;N.querySelectorAll("[data-layer-id]").forEach(ne=>{const pe=ne.dataset.layerId;if(!pe||!Js(pe))return;const ye=ne.offsetTop,Ae=L.current.get(pe);if(te.set(pe,ye),Ae===void 0||Ae===ye||typeof ne.animate!="function")return;typeof ne.getAnimations=="function"&&ne.getAnimations().filter(xt=>xt.id==="skincrafter-layer-preview").forEach(xt=>xt.cancel());const Ue=ne.animate([{transform:`translateY(${Ae-ye}px)`},{transform:"translateY(0)"}],{duration:150,easing:"ease-out"});Ue.id="skincrafter-layer-preview"}),L.current=te},[H]);const O=()=>{E.current=null,w.current=null,y.current=null,f(null),p(null),v(null),S(null)},j=(N,te)=>{const ne=[...e];E.current=N,w.current=ne,f(N),p(ne),v(null),S(te)},b=(N,te)=>{const ne=E.current;if(!ne)return;const pe=mA(e,ne,N,te);w.current=pe,p(ye=>ye&&qg(ye,pe)?ye:pe),v({targetLayer:N,position:te})},R=()=>{const N=w.current,te=N&&!qg(N,e);O(),te&&N&&s(N)},z=(N,te)=>{const ne=e.indexOf(N),pe=ne+te;if(ne<0||pe<0||pe>=e.length)return;const ye=[...e];[ye[ne],ye[pe]]=[ye[pe],ye[ne]],s(ye)},ue=(N,te)=>{if(j(te,{x:N.clientX,y:N.clientY,pointerType:"mouse"}),N.dataTransfer.effectAllowed="move",N.dataTransfer.setData("text/plain",te),typeof N.dataTransfer.setDragImage=="function"){const ne=document.createElement("div");ne.style.position="fixed",ne.style.left="-10000px",ne.style.top="-10000px",ne.style.width="1px",ne.style.height="1px",ne.style.opacity="0",document.body.appendChild(ne),N.dataTransfer.setDragImage(ne,0,0),window.setTimeout(()=>ne.remove(),0)}},J=N=>{!E.current||N.clientX===0&&N.clientY===0||S({x:N.clientX,y:N.clientY,pointerType:"mouse"})},ce=()=>{E.current&&O()},ve=(N,te)=>{if(!E.current)return;N.preventDefault(),N.dataTransfer.dropEffect="move";const ne=N.currentTarget.getBoundingClientRect(),pe=N.clientY>=ne.top+ne.height/2?"after":"before";b(te,pe)},ie=N=>{N.preventDefault(),R()},xe=N=>{const te=x.current;if(!te)return null;const ne=[...te.querySelectorAll("[data-layer-id]")];if(ne.length===0)return null;for(const ye of ne){const Ae=ye.dataset.layerId;if(!Ae||!Js(Ae)||Ae===E.current)continue;const Ue=ye.getBoundingClientRect();if(N<Ue.top+Ue.height/2)return{targetLayer:Ae,position:"before"};if(N<=Ue.bottom)return{targetLayer:Ae,position:"after"}}const pe=ne.findLast(ye=>{const Ae=ye.dataset.layerId;return!!(Ae&&Js(Ae)&&Ae!==E.current)})?.dataset.layerId;return pe&&Js(pe)?{targetLayer:pe,position:"after"}:null},V=(N,te)=>{if(!(N.pointerType==="mouse"||N.button>0||!(N.target instanceof Element?N.target:null)?.closest("h3"))){N.preventDefault(),y.current=N.pointerId;try{N.currentTarget.setPointerCapture(N.pointerId)}catch{}j(te,{x:N.clientX,y:N.clientY,pointerType:"touch"})}},fe=N=>{if(N.pointerId!==y.current||!E.current)return;N.preventDefault(),S({x:N.clientX,y:N.clientY,pointerType:"touch"});const te=xe(N.clientY);te&&b(te.targetLayer,te.position)},le=N=>{if(N.pointerId===y.current){N.preventDefault();try{N.currentTarget.releasePointerCapture(N.pointerId)}catch{}R()}},I=N=>{N.pointerId===y.current&&O()},se=N=>{const te=ro(N.id,i,l),ne=Js(N.id)?N.id:null,pe=ne?e.indexOf(ne):-1,ye=ne&&m?.targetLayer===ne;return $.jsxs(gA,{heading:o(N.labelKey),icon:N.icon,className:`wardrobe-option-card p-2.5 pt-6 ${ne?"layer-order-card":""} ${ne===c?"is-dragging":""} ${ye?`drop-${m.position}`:""}`,"data-layer-id":ne??void 0,onDragOver:ne?Ae=>ve(Ae,ne):void 0,onDrop:ne?ie:void 0,onPointerDown:ne?Ae=>V(Ae,ne):void 0,onPointerMove:ne?fe:void 0,onPointerUp:ne?le:void 0,onPointerCancel:ne?I:void 0,children:[ne&&$.jsxs("div",{className:"layer-order-controls",children:[$.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${o("action.moveLayerUp")} ${o(N.labelKey)}`,title:o("action.moveLayerUp"),disabled:pe<=0,onClick:()=>z(ne,-1),children:$.jsx(br,{name:"fa-chevron-up"})}),$.jsx("button",{type:"button",className:"layer-order-handle","aria-label":`${o("action.dragLayer")} ${o(N.labelKey)}`,title:o("action.dragLayer"),draggable:!0,onDragStart:Ae=>ue(Ae,ne),onDrag:J,onDragEnd:ce,children:$.jsx(br,{name:"fa-grip-vertical"})}),$.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${o("action.moveLayerDown")} ${o(N.labelKey)}`,title:o("action.moveLayerDown"),disabled:pe>=e.length-1,onClick:()=>z(ne,1),children:$.jsx(br,{name:"fa-chevron-down"})})]}),$.jsx("div",{className:N.control==="color"?"mt-2 flex flex-wrap gap-1.5":"mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1.5",role:"group","aria-label":o(N.labelKey),children:te.map(Ae=>{const Ue=i[N.id]===Ae.id;return N.control==="color"?$.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border ${Ue?"is-selected":""}`,style:{backgroundColor:Ae.color??Ae.id},"aria-label":o(Ae.labelKey),"aria-pressed":Ue,onClick:()=>t(N.id,Ae.id),children:Ue&&$.jsx(br,{name:"fa-check"})},Ae.id):$.jsx("button",{type:"button",className:`pixel-button min-h-8 px-2 py-1 border text-xs leading-tight transition-colors ${Ue?"skincrafter-option-selected":"skincrafter-secondary-action"}`,"aria-pressed":Ue,onClick:()=>t(N.id,Ae.id),children:o(Ae.labelKey)},Ae.id)})})]},N.id)},Fe=c?P.get(c):null;return $.jsxs(t_,{title:o("panel.customization"),icon:"fa-sliders",className:"overflow-visible md:overflow-hidden customization-panel p-3",children:[$.jsxs("div",{className:"space-y-1.5 options-container md:flex-1 md:min-h-0",children:[C.map(se),$.jsx("div",{ref:x,className:"layer-order-list space-y-1.5",children:F.map(se)})]}),_&&Fe&&$.jsxs("div",{className:`layer-drag-ghost ${_.pointerType==="touch"?"is-touch":""}`,style:{left:_.x,top:_.y},"aria-hidden":"true","data-testid":"layer-drag-ghost",children:[$.jsx(br,{name:Fe.icon}),$.jsx("span",{children:o(Fe.labelKey)})]})]})}const Kg=[137,80,78,71,13,10,26,10],mu=64;class pi extends Error{cause;constructor(e,t){super(e),this.name="InvalidInitialSkinError",this.cause=t}}function TA(i){let e="";for(let t=0;t<i.length;t+=32768){const s=i.subarray(t,Math.min(t+32768,i.length));e+=String.fromCharCode(...s)}return`data:image/png;base64,${btoa(e)}`}function RA(i){let e=2166136261;for(const t of i)e^=t,e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}function AA(i){if(i.length<24)throw new pi("Initial skin is not a valid PNG file.");for(let o=0;o<Kg.length;o+=1)if(i[o]!==Kg[o])throw new pi("Initial skin is not a valid PNG file.");const e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=e.getUint32(8),s=String.fromCharCode(i[12],i[13],i[14],i[15]);if(t!==13||s!=="IHDR")throw new pi("Initial skin PNG is missing a valid IHDR header.");return{width:e.getUint32(16),height:e.getUint32(20)}}async function CA(i){return typeof i.arrayBuffer=="function"?new Uint8Array(await i.arrayBuffer()):new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{if(!(s.result instanceof ArrayBuffer)){t(new Error("Blob reader did not return an ArrayBuffer."));return}e(new Uint8Array(s.result))},s.onerror=()=>t(s.error??new Error("Blob reader failed.")),s.readAsArrayBuffer(i)})}async function bA(i){await new Promise((e,t)=>{const s=new Image;s.onload=()=>{const o=s.naturalWidth||s.width,l=s.naturalHeight||s.height;if(s.onload=null,s.onerror=null,o!==mu||l!==mu){t(new pi("Initial skin must be a 64x64 Minecraft PNG."));return}e()},s.onerror=o=>{s.onload=null,s.onerror=null,t(new pi("Initial skin PNG could not be decoded.",o))},s.src=i})}async function PA(i,e){if(i.type&&i.type.toLowerCase()!=="image/png")throw new pi("Initial skin must use the image/png MIME type.");let t;try{t=await CA(i)}catch(l){throw new pi("Initial skin data could not be read.",l)}const s=AA(t);if(s.width!==mu||s.height!==mu)throw new pi("Initial skin must be a 64x64 Minecraft PNG.");const o=TA(t);return await bA(o),{dataUrl:o,fingerprint:RA(t),model:e}}function LA(i){const[e,t]=i.split(",",2),s=e.match(/^data:([^;]+);base64$/)?.[1]??"image/png",o=atob(t??""),l=new Uint8Array(o.length);for(let c=0;c<o.length;c+=1)l[c]=o.charCodeAt(c);return new Blob([l],{type:s})}function DA(i,e,t,s=e.sex==="Female"?"slim":"classic"){const o=LA(i),l=new File([o],"skincrafter-skin.png",{type:"image/png"});return{blob:o,file:l,dataUrl:i,metadata:{width:64,height:64,mimeType:"image/png",model:s,appearance:{...e},layerOrder:[...t]}}}const ia=1,UA=new Map([[0,i=>({...i,schemaVersion:1})]]);function Zg(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function Ar(i){return{success:!1,error:{code:"invalid_state",message:i}}}function Jg(i){return{success:!1,error:{code:"unsupported_schema_version",message:`Unsupported SkinCrafter state schema version: ${i}.`,schemaVersion:i}}}function NA(i){return{schemaVersion:ia,appearance:Mu(i.appearance),layerOrder:Dr(i.layerOrder)}}function g_(i){const e=NA(i);return{...e,appearance:{...e.appearance},layerOrder:[...e.layerOrder]}}function v_(i){if(!Zg(i))return Ar("SkinCrafter persisted state must be an object.");const e=[],t=i.schemaVersion;let s,o;if(t===void 0)s=null,e.push({code:"legacy_unversioned",message:"Migrated legacy unversioned SkinCrafter state."}),o={...i,schemaVersion:0};else{if(typeof t!="number"||!Number.isInteger(t)||t<0)return Ar("SkinCrafter schemaVersion must be a non-negative integer.");if(s=t,s>ia)return Jg(s);o={...i}}let l=s??0;for(;l<ia;){const E=UA.get(l);if(!E)return Jg(l);const w=l+1;o=E(o),e.push({code:"schema_version_migrated",message:`Migrated SkinCrafter state schema from version ${l} to ${w}.`,from:l,to:w}),l=w}if(o.schemaVersion!==ia)return Ar("SkinCrafter state migration did not produce the current schema version.");const c=s===null||s===0;if(!Zg(o.appearance))return Ar("SkinCrafter persisted appearance must be an object.");const f={};for(const E of cs){const w=o.appearance[E.id];if(w===void 0){if(!c)return Ar(`SkinCrafter persisted appearance is missing ${E.id}.`);continue}if(typeof w!="string")return Ar(`SkinCrafter persisted appearance.${E.id} must be a string.`);f[E.id]=w}const d=o.layerOrder;if(d===void 0&&!c)return Ar("SkinCrafter persisted state is missing layerOrder.");if(d!==void 0&&(!Array.isArray(d)||d.some(E=>typeof E!="string")))return Ar("SkinCrafter persisted layerOrder must be an array of strings.");const p=Mu(f);for(const E of cs){const w=o.appearance[E.id],y=p[E.id];w!==y&&e.push({code:"appearance_value_defaulted",message:`Normalized persisted appearance.${E.id} to a supported value.`,path:E.id,from:w,to:y})}const m=d??[],v=Dr(m);(m.length!==v.length||m.some((E,w)=>E!==v[w]))&&e.push({code:"layer_order_normalized",message:"Normalized persisted layer order by removing invalid/duplicate layers and appending missing layers.",path:"layerOrder",from:[...m],to:[...v]});const _={appearance:p,layerOrder:v},S=g_(_);return{success:!0,state:_,serializedState:S,sourceSchemaVersion:s,migrated:s!==ia||e.length>0,notices:e}}class __ extends Error{assetUrl;cause;constructor(e,t){super(`Failed to load texture asset: ${e}`),this.name="TextureLoadError",this.assetUrl=e,this.cause=t}}const Qg=64,IA=4,FA=i=>i?typeof i=="string"?{url:i}:i.url?{url:i.url,tint:i.tint}:null:null;function OA(i){const e=i.replace("#",""),t=e.length===3?e.split("").map(s=>`${s}${s}`).join(""):e;return{r:Number.parseInt(t.slice(0,2),16),g:Number.parseInt(t.slice(2,4),16),b:Number.parseInt(t.slice(4,6),16),a:255}}function kA(i){const e=i.r===0&&i.g===0&&i.b===0,t=i.r===255&&i.g===255&&i.b===255;return e||t}function BA(i){if(i.a===0||kA(i))return!1;const e=Math.min(i.r,i.g,i.b);return Math.max(i.r,i.g,i.b)-e<=IA}function zA(i,e){if(!BA(i))return i;const t=(i.r+i.g+i.b)/765;return{r:Math.round(e.r*t),g:Math.round(e.g*t),b:Math.round(e.b*t),a:i.a}}function HA(i,e){const t=new Uint8ClampedArray(i);for(let s=0;s<t.length;s+=4){const o=zA({r:i[s],g:i[s+1],b:i[s+2],a:i[s+3]},e);t[s]=o.r,t[s+1]=o.g,t[s+2]=o.b,t[s+3]=o.a}return t}const VA=(i,e,t,s,o)=>{const l=document.createElement("canvas");l.width=s,l.height=o;const c=l.getContext("2d",{willReadFrequently:!0});if(!c){i.drawImage(e,0,0,s,o);return}c.imageSmoothingEnabled=!1,c.drawImage(e,0,0,s,o);const f=c.getImageData(0,0,s,o);f.data.set(HA(f.data,OA(t))),c.putImageData(f,0,0),i.drawImage(l,0,0)},GA=(i,e,t,s,o)=>{if(!t){i.drawImage(e,0,0,s,o);return}VA(i,e,t,s,o)};async function ev(i){const e=i.map(FA).filter(c=>!!c),t=e.map(c=>c.url);if(t.length===0)throw new Error("No texture assets were available for skin composition.");const s=await Promise.all(t.map(c=>new Promise((f,d)=>{const p=new Image;p.crossOrigin="anonymous",p.onload=()=>f(p),p.onerror=m=>d(new __(c,m)),p.src=c}))),o=document.createElement("canvas");o.width=Qg,o.height=Qg;const l=o.getContext("2d",{willReadFrequently:!0});if(!l)throw new Error("Could not create a 2D canvas context for skin composition.");return l.imageSmoothingEnabled=!1,s.forEach((c,f)=>{const d=e[f];GA(l,c,d.tint,o.width,o.height)}),o.toDataURL("image/png")}function tv(i){return{appearance:Mu(i?.appearance??null),layerOrder:Dr(i?.layerOrder)}}function WA(i){return{appearance:{...i.appearance},layerOrder:[...i.layerOrder]}}function XA(i){return i?{"--skincrafter-accent":i.accent,"--skincrafter-accent-strong":i.accentStrong,"--skincrafter-surface":i.surface,"--skincrafter-text":i.text,"--skincrafter-muted":i.muted,"--skincrafter-border":i.border}:{}}function jA(i){return i instanceof __?{code:"asset_load_failed",category:"asset",message:`Failed to load skin texture asset: ${i.assetUrl}`,assetUrl:i.assetUrl,cause:i.cause}:{code:"generation_failed",category:"generation",message:"Failed to generate the current skin.",cause:i}}function nv(i){return{code:"invalid_initial_skin",category:"input",message:i instanceof pi?i.message:"Initial skin must be a decodable 64x64 Minecraft PNG.",cause:i instanceof pi?i.cause??i:i}}function Qn(i,...e){if(i)try{i(...e)}catch(t){console.error("SkinCrafter host callback failed",t)}}function $A({locale:i=vo,value:e,initialSkin:t,persistence:s,assetBaseUrl:o,onStateChange:l,onSkinChange:c,onSave:f,onStatusChange:d,onError:p,className:m="",style:v,theme:_,previewBottomOffset:S=0}){const[E,w]=X.useState(()=>tv(e||t||(s?.load()??null))),[y,x]=X.useState(null),[L,P]=X.useState({key:null,status:"idle",error:null}),[C,H]=X.useState(null),[F,O]=X.useState({source:null,model:null,status:"idle",error:null}),[j,b]=X.useState([]),R=X.useRef(c),z=X.useRef(d),ue=X.useRef(p),J=X.useRef(null),ce=X.useRef(!1),ve=X.useRef(null),ie=X.useMemo(()=>e?tv(e):null,[e])??E,xe=X.useRef(ie);xe.current=ie;const V=X.useCallback(he=>Ea(i,he),[i]),fe=t?.image??null,le=t?.model??null,I=fe!==null,se=X.useCallback(he=>{e||w(he),l?.(he)},[l,e]),Fe=X.useCallback((he,be)=>{I&&b(Se=>Se.includes(he)?Se:[...Se,he]),se({...ie,appearance:Mu({...ie.appearance,[he]:be})})},[I,se,ie]),N=X.useCallback(he=>{se({...ie,layerOrder:Dr(he)})},[se,ie]);X.useEffect(()=>{R.current=c},[c]),X.useEffect(()=>{z.current=d},[d]),X.useEffect(()=>{ue.current=p},[p]),X.useEffect(()=>{if(!fe){J.current=null,ce.current=!1,H(null),b([]),O({source:null,model:null,status:"idle",error:null});return}if(!le){ce.current=!1;const Se=nv(new pi("Initial skin model must be either classic or slim."));O({source:fe,model:null,status:"error",error:Se}),Qn(z.current,"error"),Qn(ue.current,Se);return}let he=!0;const be=WA(xe.current);return O({source:fe,model:le,status:"loading",error:null}),Qn(z.current,"generating"),PA(fe,le).then(Se=>{if(!he)return;const me=J.current,ke=me!==null&&me.fingerprint===Se.fingerprint&&me.model===Se.model,Qe=ke?{...me,source:fe}:{source:fe,dataUrl:Se.dataUrl,fingerprint:Se.fingerprint,model:Se.model,baselineState:be};ce.current=ke,J.current=Qe,H(Qe),ke||b([]),O({source:fe,model:le,status:"ready",error:null}),ke&&Qn(z.current,"ready")}).catch(Se=>{if(!he)return;ce.current=!1;const me=nv(Se);O({source:fe,model:le,status:"error",error:me}),Qn(z.current,"error"),Qn(ue.current,me)}),()=>{he=!1}},[fe,le]),X.useEffect(()=>{e||s?.save(g_(ie))},[s,ie,e]);const te=I&&le!==null&&C?.source===fe&&C.model===le,ne=X.useMemo(()=>{if(!te||!C)return[];const he=new Set(j);for(const be of cs)ie.appearance[be.id]!==C.baselineState.appearance[be.id]&&he.add(be.id);return cs.map(be=>be.id).filter(be=>he.has(be))},[j,te,C,ie.appearance]),{race:pe,sex:ye,skinColor:Ae,eyes:Ue,eyesColor:xt,hair:At,hairColor:ft,hat:k,shirt:Wt,pants:mt,shoes:Et,accessory:We}=ie.appearance,dt=JSON.stringify(ie.layerOrder),Ke=JSON.stringify(ne),nt=o?.replace(/\/+$/,"")||void 0,It=ne.includes("sex"),D=te&&C&&!It?C.model==="slim"?"Female":"Male":ye,T=te&&C&&!It?C.model:ye==="Female"?"slim":"classic",ee=te?C?.fingerprint??null:null,ge=te?C?.dataUrl??null:null,_e=JSON.stringify([pe,ye,Ae,Ue,xt,At,ft,k,Wt,mt,Et,We,dt,nt??null,ee,T,Ke]),de=y?.key===_e?y:null,$e=I&&F.source===fe&&F.model===le,Pe=I&&(!$e||F.status==="loading"),ze=$e&&F.status==="error",Ye=Pe?"generating":ze?"error":L.key===_e?L.status:"idle",Ee=ze?F.error:L.key===_e?L.error:null;X.useEffect(()=>{if(I&&!te)return;if(ce.current){const Qe=ve.current===_e;if(ce.current=!1,Qe)return}let he=!0;const be={race:pe,sex:ye,skinColor:Ae,eyes:Ue,eyesColor:xt,hair:At,hairColor:ft,hat:k,shirt:Wt,pants:mt,shoes:Et,accessory:We},Se={...be,sex:D},me=JSON.parse(dt),ke=JSON.parse(Ke);return P({key:_e,status:"generating",error:null}),Qn(z.current,"generating"),(async()=>{let Qe;try{let St;if(ge){const ut=MA(Se,me,ke,nt);St=ut.filter(Boolean).length===0?ge:await ev([ge,...ut])}else{const ut=EA(be,me,nt);St=await ev(ut)}Qe={dataUrl:St,output:DA(St,be,me,T)}}catch(St){if(!he)return;const ut=jA(St);P({key:_e,status:"error",error:ut}),Qn(z.current,"error"),Qn(ue.current,ut);return}he&&(ve.current=_e,x({key:_e,texture:Qe.dataUrl,output:Qe.output}),P({key:_e,status:"ready",error:null}),Qn(R.current,Qe.output),Qn(z.current,"ready"))})(),()=>{he=!1}},[We,Ke,nt,D,T,Ue,xt,_e,At,ft,I,k,ge,te,dt,mt,pe,ye,Wt,Et,Ae]);const Oe=de??y,tt=de?.output??null,Je=Oe?.texture??null,Le=Oe?.output.metadata.model??T,st=Ye==="ready"&&tt!==null,G=f&&st&&tt?()=>f(tt):void 0,De=X.useCallback(he=>{Qn(ue.current,he)},[]);return $.jsx("div",{className:`skincrafter-editor h-full min-h-0 w-full ${m}`.trim(),style:{...XA(_),...v},"data-testid":"skincrafter-editor","data-skincrafter-locale":i,"data-skincrafter-generation-status":Ye,children:$.jsx(pA,{left:$.jsx(o_,{texture:Je,model:Le,footerHeight:S,t:V,onSave:G,canSave:st,generationStatus:Ye,generationError:Ee,onError:De}),right:$.jsx(wA,{appearance:ie.appearance,textureLayerOrder:ie.layerOrder,onAppearanceChange:Fe,onLayerOrderChange:N,t:V,assetBaseUrl:o})})})}function YA({texture:i,model:e="classic",locale:t=vo,bottomOffset:s=0,className:o="",style:l,theme:c,onError:f}){const d=m=>Ea(t,m),p={"--skincrafter-accent":c?.accent,"--skincrafter-accent-strong":c?.accentStrong,"--skincrafter-surface":c?.surface,"--skincrafter-text":c?.text,"--skincrafter-muted":c?.muted,"--skincrafter-border":c?.border};return $.jsx("div",{className:`skincrafter-editor h-full min-h-0 ${o}`.trim(),style:{...p,...l},children:$.jsx(o_,{texture:i,model:e,footerHeight:s,t:d,onError:f})})}const qA=rv.forwardRef((i,e)=>$.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:$.jsx("div",{className:"container mx-auto text-center text-sm",children:$.jsx("p",{children:"(c) 2026 SkinCrafter. All rights reserved."})})})),KA=i=>Ea(vo,i),ZA=({logoSrc:i="/logo.png",logoAlt:e="SkinCrafter logo",language:t="en",onLanguageChange:s,t:o=KA})=>$.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:$.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[$.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[$.jsx("div",{className:"h-8 w-36 flex items-center",children:$.jsx("img",{src:i,alt:e,className:"h-auto max-h-8 w-full object-contain",style:{imageRendering:"pixelated"}})}),$.jsx("span",{className:"pixel-border bg-amber-500 px-2 py-0.5 text-xs font-bold uppercase tracking-normal text-green-950 shadow-sm",title:o("nav.workInProgress"),"aria-label":o("nav.workInProgress"),children:"WIP"})]}),$.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[$.jsx(Xf,{to:"/",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:o("nav.wardrobe")}),$.jsx(Xf,{to:"/mcskinview",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:o("nav.skinView")}),s&&$.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[$.jsx("span",{children:o("nav.language")}),$.jsx("select",{className:"bg-green-700 text-white pixel-border px-2 py-1",value:t,onChange:l=>s(l.target.value),"aria-label":o("nav.language"),children:s_.map(l=>$.jsx("option",{value:l,children:l.toUpperCase()},l))})]})]})]})}),x_="skincrafterLanguage",JA=()=>{const i=localStorage.getItem(x_);return fA(i)?i:vo};function y_({children:i}){const[e,t]=X.useState(()=>JA()),s=X.useRef(null),[o,l]=X.useState(0),c=X.useCallback(d=>Ea(e,d),[e]),f=X.useCallback(d=>{t(d)},[]);return X.useEffect(()=>{localStorage.setItem(x_,e)},[e]),X.useEffect(()=>{const d=()=>{l(s.current?.offsetHeight??0)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),$.jsxs("div",{className:"max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col",children:[$.jsx("div",{className:"shrink-0",children:$.jsx(ZA,{language:e,onLanguageChange:f,t:c})}),i({footerHeight:o,language:e,t:c}),$.jsx("div",{className:"shrink-0",children:$.jsx(qA,{ref:s})})]})}const oa="skincrafterState",th="wardrobeAppearance",nh="wardrobeLayerOrder";function ma(i){return JSON.parse(i)}function S_(i){const e=v_(i);return e.success?{state:e.state,serializedState:e.serializedState}:null}function E_(i){let e;try{e=ma(i)}catch{return{kind:"invalid"}}const t=v_(e);return t.success?{kind:"loaded",value:{state:t.state,serializedState:t.serializedState}}:t.error.code==="unsupported_schema_version"?{kind:"unsupported"}:{kind:"invalid"}}function QA(){const i=localStorage.getItem(th),e=localStorage.getItem(nh);if(i===null||e===null)return null;try{return S_({appearance:ma(i),layerOrder:ma(e)})}catch{return null}}function eC(){let i;const e=localStorage.getItem(th);if(e)try{i=ma(e)}catch{i={...Pr}}else i={race:localStorage.getItem("wardrobeRace")??Pr.race,skinColor:localStorage.getItem("wardrobeSkinColor")??Pr.skinColor,hat:localStorage.getItem("wardrobeHat")??Pr.hat};let t=Dr(null);const s=localStorage.getItem(nh);if(s)try{t=ma(s)}catch{t=Dr(null)}const o=S_({appearance:i,layerOrder:t});return o?(localStorage.setItem(oa,JSON.stringify(o.serializedState)),o.state):{appearance:{...Pr},layerOrder:Dr(null)}}function tC(i,e){return JSON.stringify(i)===JSON.stringify(e)}function nC(){const i=localStorage.getItem(oa);return i===null?!1:E_(i).kind==="unsupported"}const iC={load:()=>{const i=localStorage.getItem(oa);if(i===null)return eC();const e=E_(i);if(e.kind==="unsupported"||e.kind==="invalid")return null;const t=QA();return t&&!tC(t.serializedState,e.value.serializedState)?(localStorage.setItem(oa,JSON.stringify(t.serializedState)),t.state):e.value.state},save:i=>{nC()||(localStorage.setItem(oa,JSON.stringify(i)),localStorage.setItem(th,JSON.stringify(i.appearance)),localStorage.setItem(nh,JSON.stringify(i.layerOrder)))}},rC=i=>i.replace(/^http:\/\//,"https://"),sC=i=>{if(!i)return null;try{return JSON.parse(atob(i.value))}catch{return null}};async function oC(i){const e=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(i)}`);if(!e.ok)throw new Error("User not found");const t=await e.json(),s=t.data?.player;if(!t.success||!s)throw new Error("User not found");const o=s.properties?.find(f=>f.name==="textures"),l=sC(o)?.textures?.SKIN,c=l?.url??s.skin_texture;if(!c)throw new Error("Skin texture not found");return{texture:rC(c),model:l?.metadata?.model==="slim"?"slim":"classic"}}const aC=()=>{const[i,e]=X.useState(""),[t,s]=X.useState(null),[o,l]=X.useState(null),[c,f]=X.useState(!1),d=X.useCallback(m=>{e(m.target.value)},[]),p=X.useCallback(async m=>{if(m.preventDefault(),!i.trim()){l("Please enter a username.");return}l(null),s(null),f(!0);try{s(await oC(i.trim()))}catch(v){l(v instanceof Error?v.message:"An unexpected error occurred."),s(null)}finally{f(!1)}},[i]);return $.jsx(y_,{children:({footerHeight:m,language:v,t:_})=>$.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:$.jsx(YA,{texture:t?.texture??null,model:t?.model??"classic",locale:v,bottomOffset:m})}),$.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:$.jsxs("section",{className:"mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4",children:[$.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[$.jsx("i",{className:"fas fa-user mr-2 text-green-700"})," ",_("panel.loadSkin")]}),$.jsxs("div",{className:"space-y-4 md:flex-1 md:min-h-0 overflow-y-auto pr-2",children:[$.jsxs("div",{className:"option-card bg-white shadow p-4 pixel-border relative pt-5",children:[$.jsxs("h3",{className:"font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10",children:[$.jsx("i",{className:"fas fa-id-card mr-2 text-amber-600"})," ",_("skinView.player")]}),$.jsxs("form",{onSubmit:p,className:"mt-4 flex flex-col gap-3",children:[$.jsx("input",{type:"text",value:i,onChange:d,placeholder:_("skinView.username"),"aria-label":_("skinView.username"),className:"w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"}),$.jsxs("button",{type:"submit",disabled:c,className:"pixel-button p-2 pixel-border bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white",children:[$.jsx("i",{className:"fas fa-cloud-arrow-down mr-2"}),_(c?"action.loading":"action.loadSkin")]})]})]}),o&&$.jsx("div",{className:"option-card bg-red-50 text-red-700 shadow p-4 pixel-border",children:o})]})]})})]})})},lC=()=>$.jsx(y_,{children:({footerHeight:i,language:e})=>$.jsx($A,{locale:e,persistence:iC,previewBottomOffset:i})}),uC=()=>$.jsxs(cy,{children:[$.jsx(Gf,{path:"/",element:$.jsx(lC,{})}),$.jsx(Gf,{path:"/mcskinview",element:$.jsx(aC,{})})]});cx.createRoot(document.getElementById("root")).render($.jsx(rv.StrictMode,{children:$.jsx(Ny,{children:$.jsx(uC,{})})}));
