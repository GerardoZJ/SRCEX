function vE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Gg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qg={exports:{}},G={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Yf=Object.getOwnPropertySymbols,wE=Object.prototype.hasOwnProperty,EE=Object.prototype.propertyIsEnumerable;function _E(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function SE(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Yg=SE()?Object.assign:function(t,e){for(var n,r=_E(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)wE.call(n,o)&&(r[o]=n[o]);if(Yf){i=Yf(n);for(var a=0;a<i.length;a++)EE.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh=Yg,fi=60103,Xg=60106;G.Fragment=60107;G.StrictMode=60108;G.Profiler=60114;var Jg=60109,Zg=60110,ey=60112;G.Suspense=60113;var ty=60115,ny=60116;if(typeof Symbol=="function"&&Symbol.for){var ht=Symbol.for;fi=ht("react.element"),Xg=ht("react.portal"),G.Fragment=ht("react.fragment"),G.StrictMode=ht("react.strict_mode"),G.Profiler=ht("react.profiler"),Jg=ht("react.provider"),Zg=ht("react.context"),ey=ht("react.forward_ref"),G.Suspense=ht("react.suspense"),ty=ht("react.memo"),ny=ht("react.lazy")}var Xf=typeof Symbol=="function"&&Symbol.iterator;function IE(t){return t===null||typeof t!="object"?null:(t=Xf&&t[Xf]||t["@@iterator"],typeof t=="function"?t:null)}function ro(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ry={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iy={};function pi(t,e,n){this.props=t,this.context=e,this.refs=iy,this.updater=n||ry}pi.prototype.isReactComponent={};pi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(ro(85));this.updater.enqueueSetState(this,t,e,"setState")};pi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sy(){}sy.prototype=pi.prototype;function Oh(t,e,n){this.props=t,this.context=e,this.refs=iy,this.updater=n||ry}var Lh=Oh.prototype=new sy;Lh.constructor=Oh;Dh(Lh,pi.prototype);Lh.isPureReactComponent=!0;var Mh={current:null},oy=Object.prototype.hasOwnProperty,ay={key:!0,ref:!0,__self:!0,__source:!0};function ly(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)oy.call(e,r)&&!ay.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fi,type:t,key:s,ref:o,props:i,_owner:Mh.current}}function TE(t,e){return{$$typeof:fi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $h(t){return typeof t=="object"&&t!==null&&t.$$typeof===fi}function CE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jf=/\/+/g;function wu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?CE(""+t.key):e.toString(36)}function ia(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fi:case Xg:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wu(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(Jf,"$&/")+"/"),ia(i,e,n,"",function(u){return u})):i!=null&&($h(i)&&(i=TE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Jf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+wu(s,a);o+=ia(s,e,n,l,i)}else if(l=IE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+wu(s,a++),o+=ia(s,e,n,l,i);else if(s==="object")throw e=""+t,Error(ro(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function $o(t,e,n){if(t==null)return t;var r=[],i=0;return ia(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kE(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var uy={current:null};function Gt(){var t=uy.current;if(t===null)throw Error(ro(321));return t}var NE={ReactCurrentDispatcher:uy,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Mh,IsSomeRendererActing:{current:!1},assign:Dh};G.Children={map:$o,forEach:function(t,e,n){$o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $o(t,function(){e++}),e},toArray:function(t){return $o(t,function(e){return e})||[]},only:function(t){if(!$h(t))throw Error(ro(143));return t}};G.Component=pi;G.PureComponent=Oh;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NE;G.cloneElement=function(t,e,n){if(t==null)throw Error(ro(267,t));var r=Dh({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)oy.call(e,l)&&!ay.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fi,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:Zg,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:Jg,_context:t},t.Consumer=t};G.createElement=ly;G.createFactory=function(t){var e=ly.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:ey,render:t}};G.isValidElement=$h;G.lazy=function(t){return{$$typeof:ny,_payload:{_status:-1,_result:t},_init:kE}};G.memo=function(t,e){return{$$typeof:ty,type:t,compare:e===void 0?null:e}};G.useCallback=function(t,e){return Gt().useCallback(t,e)};G.useContext=function(t,e){return Gt().useContext(t,e)};G.useDebugValue=function(){};G.useEffect=function(t,e){return Gt().useEffect(t,e)};G.useImperativeHandle=function(t,e,n){return Gt().useImperativeHandle(t,e,n)};G.useLayoutEffect=function(t,e){return Gt().useLayoutEffect(t,e)};G.useMemo=function(t,e){return Gt().useMemo(t,e)};G.useReducer=function(t,e,n){return Gt().useReducer(t,e,n)};G.useRef=function(t){return Gt().useRef(t)};G.useState=function(t){return Gt().useState(t)};G.version="17.0.2";Qg.exports=G;var k=Qg.exports;const cn=Gg(k),AE=vE({__proto__:null,default:cn},[k]);var cy={exports:{}},ct={},hy={exports:{}},dy={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window>"u"||typeof MessageChannel!="function"){var l=null,u=null,c=function(){if(l!==null)try{var A=t.unstable_now();l(!0,A),l=null}catch(V){throw setTimeout(c,0),V}};e=function(A){l!==null?setTimeout(e,0,A):(l=A,setTimeout(c,0))},n=function(A,V){u=setTimeout(A,V)},r=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,p=window.clearTimeout;if(typeof console<"u"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var E=!1,w=null,h=-1,f=5,m=0;t.unstable_shouldYield=function(){return t.unstable_now()>=m},i=function(){},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<A?Math.floor(1e3/A):5};var y=new MessageChannel,v=y.port2;y.port1.onmessage=function(){if(w!==null){var A=t.unstable_now();m=A+f;try{w(!0,A)?v.postMessage(null):(E=!1,w=null)}catch(V){throw v.postMessage(null),V}}else E=!1},e=function(A){w=A,E||(E=!0,v.postMessage(null))},n=function(A,V){h=d(function(){A(t.unstable_now())},V)},r=function(){p(h),h=-1}}function P(A,V){var H=A.length;A.push(V);e:for(;;){var ue=H-1>>>1,Ie=A[ue];if(Ie!==void 0&&0<$(Ie,V))A[ue]=V,A[H]=Ie,H=ue;else break e}}function C(A){return A=A[0],A===void 0?null:A}function L(A){var V=A[0];if(V!==void 0){var H=A.pop();if(H!==V){A[0]=H;e:for(var ue=0,Ie=A.length;ue<Ie;){var Un=2*(ue+1)-1,Vn=A[Un],Pi=Un+1,wr=A[Pi];if(Vn!==void 0&&0>$(Vn,H))wr!==void 0&&0>$(wr,Vn)?(A[ue]=wr,A[Pi]=H,ue=Pi):(A[ue]=Vn,A[Un]=H,ue=Un);else if(wr!==void 0&&0>$(wr,H))A[ue]=wr,A[Pi]=H,ue=Pi;else break e}}return V}return null}function $(A,V){var H=A.sortIndex-V.sortIndex;return H!==0?H:A.id-V.id}var D=[],me=[],mu=1,nt=null,xe=3,Mo=!1,Fn=!1,xi=!1;function gu(A){for(var V=C(me);V!==null;){if(V.callback===null)L(me);else if(V.startTime<=A)L(me),V.sortIndex=V.expirationTime,P(D,V);else break;V=C(me)}}function yu(A){if(xi=!1,gu(A),!Fn)if(C(D)!==null)Fn=!0,e(vu);else{var V=C(me);V!==null&&n(yu,V.startTime-A)}}function vu(A,V){Fn=!1,xi&&(xi=!1,r()),Mo=!0;var H=xe;try{for(gu(V),nt=C(D);nt!==null&&(!(nt.expirationTime>V)||A&&!t.unstable_shouldYield());){var ue=nt.callback;if(typeof ue=="function"){nt.callback=null,xe=nt.priorityLevel;var Ie=ue(nt.expirationTime<=V);V=t.unstable_now(),typeof Ie=="function"?nt.callback=Ie:nt===C(D)&&L(D),gu(V)}else L(D);nt=C(D)}if(nt!==null)var Un=!0;else{var Vn=C(me);Vn!==null&&n(yu,Vn.startTime-V),Un=!1}return Un}finally{nt=null,xe=H,Mo=!1}}var yE=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){Fn||Mo||(Fn=!0,e(vu))},t.unstable_getCurrentPriorityLevel=function(){return xe},t.unstable_getFirstCallbackNode=function(){return C(D)},t.unstable_next=function(A){switch(xe){case 1:case 2:case 3:var V=3;break;default:V=xe}var H=xe;xe=V;try{return A()}finally{xe=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=yE,t.unstable_runWithPriority=function(A,V){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var H=xe;xe=A;try{return V()}finally{xe=H}},t.unstable_scheduleCallback=function(A,V,H){var ue=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ue+H:ue):H=ue,A){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=H+Ie,A={id:mu++,callback:V,priorityLevel:A,startTime:H,expirationTime:Ie,sortIndex:-1},H>ue?(A.sortIndex=H,P(me,A),C(D)===null&&A===C(me)&&(xi?r():xi=!0,n(yu,H-ue))):(A.sortIndex=Ie,P(D,A),Fn||Mo||(Fn=!0,e(vu))),A},t.unstable_wrapCallback=function(A){var V=xe;return function(){var H=xe;xe=V;try{return A.apply(this,arguments)}finally{xe=H}}}})(dy);hy.exports=dy;var RE=hy.exports;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=k,ie=Yg,Ee=RE;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!vl)throw Error(I(227));var fy=new Set,Ss={};function ur(t,e){Xr(t,e),Xr(t+"Capture",e)}function Xr(t,e){for(Ss[t]=e,t=0;t<e.length;t++)fy.add(e[t])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zf=Object.prototype.hasOwnProperty,ep={},tp={};function PE(t){return Zf.call(tp,t)?!0:Zf.call(ep,t)?!1:xE.test(t)?tp[t]=!0:(ep[t]=!0,!1)}function DE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OE(t,e,n,r){if(e===null||typeof e>"u"||DE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ke(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Re[t]=new Ke(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Re[e]=new Ke(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Re[t]=new Ke(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Re[t]=new Ke(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Re[t]=new Ke(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Re[t]=new Ke(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Re[t]=new Ke(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Re[t]=new Ke(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Re[t]=new Ke(t,5,!1,t.toLowerCase(),null,!1,!1)});var bh=/[\-:]([a-z])/g;function Fh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bh,Fh);Re[e]=new Ke(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bh,Fh);Re[e]=new Ke(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bh,Fh);Re[e]=new Ke(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Re[t]=new Ke(t,1,!1,t.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Re[t]=new Ke(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uh(t,e,n,r){var i=Re.hasOwnProperty(e)?Re[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(OE(e,n,i,r)&&(n=null),r||i===null?PE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cr=vl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wi=60103,zn=60106,Zt=60107,Vh=60108,is=60114,jh=60109,Bh=60110,wl=60112,ss=60113,Ia=60120,El=60115,zh=60116,Hh=60121,qh=60128,py=60129,Wh=60130,cc=60131;if(typeof Symbol=="function"&&Symbol.for){var ve=Symbol.for;Wi=ve("react.element"),zn=ve("react.portal"),Zt=ve("react.fragment"),Vh=ve("react.strict_mode"),is=ve("react.profiler"),jh=ve("react.provider"),Bh=ve("react.context"),wl=ve("react.forward_ref"),ss=ve("react.suspense"),Ia=ve("react.suspense_list"),El=ve("react.memo"),zh=ve("react.lazy"),Hh=ve("react.block"),ve("react.scope"),qh=ve("react.opaque.id"),py=ve("react.debug_trace_mode"),Wh=ve("react.offscreen"),cc=ve("react.legacy_hidden")}var np=typeof Symbol=="function"&&Symbol.iterator;function Di(t){return t===null||typeof t!="object"?null:(t=np&&t[np]||t["@@iterator"],typeof t=="function"?t:null)}var Eu;function Ki(t){if(Eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eu=e&&e[1]||""}return`
`+Eu+t}var _u=!1;function bo(t,e){if(!t||_u)return"";_u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{_u=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ki(t):""}function LE(t){switch(t.tag){case 5:return Ki(t.type);case 16:return Ki("Lazy");case 13:return Ki("Suspense");case 19:return Ki("SuspenseList");case 0:case 2:case 15:return t=bo(t.type,!1),t;case 11:return t=bo(t.type.render,!1),t;case 22:return t=bo(t.type._render,!1),t;case 1:return t=bo(t.type,!0),t;default:return""}}function Lr(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zt:return"Fragment";case zn:return"Portal";case is:return"Profiler";case Vh:return"StrictMode";case ss:return"Suspense";case Ia:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bh:return(t.displayName||"Context")+".Consumer";case jh:return(t._context.displayName||"Context")+".Provider";case wl:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case El:return Lr(t.type);case Hh:return Lr(t._render);case zh:e=t._payload,t=t._init;try{return Lr(t(e))}catch{}}return null}function Cn(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function my(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ME(t){var e=my(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fo(t){t._valueTracker||(t._valueTracker=ME(t))}function gy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=my(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ta(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hc(t,e){var n=e.checked;return ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yy(t,e){e=e.checked,e!=null&&Uh(t,"checked",e,!1)}function dc(t,e){yy(t,e);var n=Cn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&fc(t,e.type,Cn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ip(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fc(t,e,n){(e!=="number"||Ta(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function $E(t){var e="";return vl.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function pc(t,e){return t=ie({children:void 0},e),(e=$E(e.children))&&(t.children=e),t}function Mr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function mc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cn(n)}}function vy(t,e){var n=Cn(e.value),r=Cn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var gc={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function wy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Uo,Ey=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==gc.svg||"innerHTML"in t)t.innerHTML=e;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Uo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Is(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var os={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bE=["Webkit","ms","Moz","O"];Object.keys(os).forEach(function(t){bE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),os[e]=os[t]})});function _y(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||os.hasOwnProperty(t)&&os[t]?(""+e).trim():e+"px"}function Sy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_y(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FE=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vc(t,e){if(e){if(FE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function wc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Kh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ec=null,$r=null,br=null;function ap(t){if(t=so(t)){if(typeof Ec!="function")throw Error(I(280));var e=t.stateNode;e&&(e=kl(e),Ec(t.stateNode,t.type,e))}}function Iy(t){$r?br?br.push(t):br=[t]:$r=t}function Ty(){if($r){var t=$r,e=br;if(br=$r=null,ap(t),e)for(t=0;t<e.length;t++)ap(e[t])}}function Gh(t,e){return t(e)}function Cy(t,e,n,r,i){return t(e,n,r,i)}function Qh(){}var ky=Gh,Hn=!1,Su=!1;function Yh(){($r!==null||br!==null)&&(Qh(),Ty())}function UE(t,e,n){if(Su)return t(e,n);Su=!0;try{return ky(t,e,n)}finally{Su=!1,Yh()}}function Ts(t,e){var n=t.stateNode;if(n===null)return null;var r=kl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var _c=!1;if(Bt)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){_c=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{_c=!1}function VE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var as=!1,Ca=null,ka=!1,Sc=null,jE={onError:function(t){as=!0,Ca=t}};function BE(t,e,n,r,i,s,o,a,l){as=!1,Ca=null,VE.apply(jE,arguments)}function zE(t,e,n,r,i,s,o,a,l){if(BE.apply(this,arguments),as){if(as){var u=Ca;as=!1,Ca=null}else throw Error(I(198));ka||(ka=!0,Sc=u)}}function hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&1026&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ny(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lp(t){if(hr(t)!==t)throw Error(I(188))}function HE(t){var e=t.alternate;if(!e){if(e=hr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return lp(i),t;if(s===r)return lp(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Ay(t){if(t=HE(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function up(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var Ry,Xh,xy,Py,Ic=!1,wt=[],hn=null,dn=null,fn=null,Cs=new Map,ks=new Map,Li=[],cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tc(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function hp(t,e){switch(t){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Cs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ks.delete(e.pointerId)}}function Mi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=Tc(e,n,r,i,s),e!==null&&(e=so(e),e!==null&&Xh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qE(t,e,n,r,i){switch(e){case"focusin":return hn=Mi(hn,t,e,n,r,i),!0;case"dragenter":return dn=Mi(dn,t,e,n,r,i),!0;case"mouseover":return fn=Mi(fn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Cs.set(s,Mi(Cs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ks.set(s,Mi(ks.get(s)||null,t,e,n,r,i)),!0}return!1}function WE(t){var e=qn(t.target);if(e!==null){var n=hr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ny(n),e!==null){t.blockedOn=e,Py(t.lanePriority,function(){Ee.unstable_runWithPriority(t.priority,function(){xy(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=so(n),e!==null&&Xh(e),t.blockedOn=n,!1;e.shift()}return!0}function dp(t,e,n){sa(t)&&n.delete(e)}function KE(){for(Ic=!1;0<wt.length;){var t=wt[0];if(t.blockedOn!==null){t=so(t.blockedOn),t!==null&&Ry(t);break}for(var e=t.targetContainers;0<e.length;){var n=td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&wt.shift()}hn!==null&&sa(hn)&&(hn=null),dn!==null&&sa(dn)&&(dn=null),fn!==null&&sa(fn)&&(fn=null),Cs.forEach(dp),ks.forEach(dp)}function $i(t,e){t.blockedOn===e&&(t.blockedOn=null,Ic||(Ic=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,KE)))}function Dy(t){function e(i){return $i(i,t)}if(0<wt.length){$i(wt[0],t);for(var n=1;n<wt.length;n++){var r=wt[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hn!==null&&$i(hn,t),dn!==null&&$i(dn,t),fn!==null&&$i(fn,t),Cs.forEach(e),ks.forEach(e),n=0;n<Li.length;n++)r=Li[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Li.length&&(n=Li[0],n.blockedOn===null);)WE(n),n.blockedOn===null&&Li.shift()}function Vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var kr={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},Iu={},Oy={};Bt&&(Oy=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function _l(t){if(Iu[t])return Iu[t];if(!kr[t])return t;var e=kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Oy)return Iu[t]=e[n];return t}var Ly=_l("animationend"),My=_l("animationiteration"),$y=_l("animationstart"),by=_l("transitionend"),Fy=new Map,Jh=new Map,GE=["abort","abort",Ly,"animationEnd",My,"animationIteration",$y,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",by,"transitionEnd","waiting","waiting"];function Zh(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Jh.set(r,e),Fy.set(r,i),ur(i,[r])}}var QE=Ee.unstable_now;QE();var J=8;function Sr(t){if(1&t)return J=15,1;if(2&t)return J=14,2;if(4&t)return J=13,4;var e=24&t;return e!==0?(J=12,e):t&32?(J=11,32):(e=192&t,e!==0?(J=10,e):t&256?(J=9,256):(e=3584&t,e!==0?(J=8,e):t&4096?(J=7,4096):(e=4186112&t,e!==0?(J=6,e):(e=62914560&t,e!==0?(J=5,e):t&67108864?(J=4,67108864):t&134217728?(J=3,134217728):(e=805306368&t,e!==0?(J=2,e):1073741824&t?(J=1,1073741824):(J=8,t))))))}function YE(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function XE(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(I(358,t))}}function Ns(t,e){var n=t.pendingLanes;if(n===0)return J=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=J=15;else if(s=n&134217727,s!==0){var l=s&~o;l!==0?(r=Sr(l),i=J):(a&=s,a!==0&&(r=Sr(a),i=J))}else s=n&~o,s!==0?(r=Sr(s),i=J):a!==0&&(r=Sr(a),i=J);if(r===0)return 0;if(r=31-kn(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&!(e&o)){if(Sr(e),i<=J)return e;J=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kn(e),i=1<<n,r|=t[n],e&=~i;return r}function Uy(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Na(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Ir(24&~e),t===0?Na(10,e):t;case 10:return t=Ir(192&~e),t===0?Na(8,e):t;case 8:return t=Ir(3584&~e),t===0&&(t=Ir(4186112&~e),t===0&&(t=512)),t;case 2:return e=Ir(805306368&~e),e===0&&(e=268435456),e}throw Error(I(358,t))}function Ir(t){return t&-t}function Tu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sl(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-kn(e),t[e]=n}var kn=Math.clz32?Math.clz32:e_,JE=Math.log,ZE=Math.LN2;function e_(t){return t===0?32:31-(JE(t)/ZE|0)|0}var t_=Ee.unstable_UserBlockingPriority,n_=Ee.unstable_runWithPriority,oa=!0;function r_(t,e,n,r){Hn||Qh();var i=ed,s=Hn;Hn=!0;try{Cy(i,t,e,n,r)}finally{(Hn=s)||Yh()}}function i_(t,e,n,r){n_(t_,ed.bind(null,t,e,n,r))}function ed(t,e,n,r){if(oa){var i;if((i=(e&4)===0)&&0<wt.length&&-1<cp.indexOf(t))t=Tc(null,t,e,n,r),wt.push(t);else{var s=td(t,e,n,r);if(s===null)i&&hp(t,r);else{if(i){if(-1<cp.indexOf(t)){t=Tc(s,t,e,n,r),wt.push(t);return}if(qE(s,t,e,n,r))return;hp(t,r)}Jy(t,e,r,null,n)}}}}function td(t,e,n,r){var i=Kh(r);if(i=qn(i),i!==null){var s=hr(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=Ny(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Jy(t,e,r,i,n),null}var sn=null,nd=null,aa=null;function Vy(){if(aa)return aa;var t,e=nd,n=e.length,r,i="value"in sn?sn.value:sn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return aa=i.slice(t,1<r?1-r:void 0)}function la(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function jo(){return!0}function fp(){return!1}function tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?jo:fp,this.isPropagationStopped=fp,this}return ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),e}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=tt(mi),io=ie({},mi,{view:0,detail:0}),s_=tt(io),Cu,ku,bi,Il=ie({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:id,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bi&&(bi&&t.type==="mousemove"?(Cu=t.screenX-bi.screenX,ku=t.screenY-bi.screenY):ku=Cu=0,bi=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),pp=tt(Il),o_=ie({},Il,{dataTransfer:0}),a_=tt(o_),l_=ie({},io,{relatedTarget:0}),Nu=tt(l_),u_=ie({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),c_=tt(u_),h_=ie({},mi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),d_=tt(h_),f_=ie({},mi,{data:0}),mp=tt(f_),p_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=g_[t])?!!e[t]:!1}function id(){return y_}var v_=ie({},io,{key:function(t){if(t.key){var e=p_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:id,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w_=tt(v_),E_=ie({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=tt(E_),__=ie({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:id}),S_=tt(__),I_=ie({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),T_=tt(I_),C_=ie({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),k_=tt(C_),N_=[9,13,27,32],sd=Bt&&"CompositionEvent"in window,ls=null;Bt&&"documentMode"in document&&(ls=document.documentMode);var A_=Bt&&"TextEvent"in window&&!ls,jy=Bt&&(!sd||ls&&8<ls&&11>=ls),yp=" ",vp=!1;function By(t,e){switch(t){case"keyup":return N_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nr=!1;function R_(t,e){switch(t){case"compositionend":return zy(e);case"keypress":return e.which!==32?null:(vp=!0,yp);case"textInput":return t=e.data,t===yp&&vp?null:t;default:return null}}function x_(t,e){if(Nr)return t==="compositionend"||!sd&&By(t,e)?(t=Vy(),aa=nd=sn=null,Nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jy&&e.locale!=="ko"?null:e.data;default:return null}}var P_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!P_[t.type]:e==="textarea"}function Hy(t,e,n,r){Iy(r),e=Aa(e,"onChange"),0<e.length&&(n=new rd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var us=null,As=null;function D_(t){Qy(t,0)}function Tl(t){var e=Rr(t);if(gy(e))return t}function O_(t,e){if(t==="change")return e}var qy=!1;if(Bt){var Au;if(Bt){var Ru="oninput"in document;if(!Ru){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),Ru=typeof Ep.oninput=="function"}Au=Ru}else Au=!1;qy=Au&&(!document.documentMode||9<document.documentMode)}function _p(){us&&(us.detachEvent("onpropertychange",Wy),As=us=null)}function Wy(t){if(t.propertyName==="value"&&Tl(As)){var e=[];if(Hy(e,As,t,Kh(t)),t=D_,Hn)t(e);else{Hn=!0;try{Gh(t,e)}finally{Hn=!1,Yh()}}}}function L_(t,e,n){t==="focusin"?(_p(),us=e,As=n,us.attachEvent("onpropertychange",Wy)):t==="focusout"&&_p()}function M_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(As)}function $_(t,e){if(t==="click")return Tl(e)}function b_(t,e){if(t==="input"||t==="change")return Tl(e)}function F_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rt=typeof Object.is=="function"?Object.is:F_,U_=Object.prototype.hasOwnProperty;function Rs(t,e){if(rt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!U_.call(e,n[r])||!rt(t[n[r]],e[n[r]]))return!1;return!0}function Sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ip(t,e){var n=Sp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sp(n)}}function Ky(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ky(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tp(){for(var t=window,e=Ta();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ta(t.document)}return e}function Cc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var V_=Bt&&"documentMode"in document&&11>=document.documentMode,Ar=null,kc=null,cs=null,Nc=!1;function Cp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nc||Ar==null||Ar!==Ta(r)||(r=Ar,"selectionStart"in r&&Cc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cs&&Rs(cs,r)||(cs=r,r=Aa(kc,"onSelect"),0<r.length&&(e=new rd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ar)))}Zh("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Zh("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Zh(GE,2);for(var kp="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),xu=0;xu<kp.length;xu++)Jh.set(kp[xu],0);Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function Np(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zE(r,e,void 0,t),t.currentTarget=null}function Qy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Np(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Np(i,a,u),s=l}}}if(ka)throw t=Sc,ka=!1,Sc=null,t}function Z(t,e){var n=ev(e),r=t+"__bubble";n.has(r)||(Xy(e,t,2,!1),n.add(r))}var Ap="_reactListening"+Math.random().toString(36).slice(2);function Yy(t){t[Ap]||(t[Ap]=!0,fy.forEach(function(e){Gy.has(e)||Rp(e,!1,t,null),Rp(e,!0,t,null)}))}function Rp(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&Gy.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=ev(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),Xy(s,t,i,e),o.add(a))}function Xy(t,e,n,r){var i=Jh.get(e);switch(i===void 0?2:i){case 0:i=r_;break;case 1:i=i_;break;default:i=ed}n=i.bind(null,e,n,t),i=void 0,!_c||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jy(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=qn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}UE(function(){var u=s,c=Kh(n),d=[];e:{var p=Fy.get(t);if(p!==void 0){var g=rd,E=t;switch(t){case"keypress":if(la(n)===0)break e;case"keydown":case"keyup":g=w_;break;case"focusin":E="focus",g=Nu;break;case"focusout":E="blur",g=Nu;break;case"beforeblur":case"afterblur":g=Nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=a_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=S_;break;case Ly:case My:case $y:g=c_;break;case by:g=T_;break;case"scroll":g=s_;break;case"wheel":g=k_;break;case"copy":case"cut":case"paste":g=d_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=gp}var w=(e&4)!==0,h=!w&&t==="scroll",f=w?p!==null?p+"Capture":null:p;w=[];for(var m=u,y;m!==null;){y=m;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,f!==null&&(v=Ts(m,f),v!=null&&w.push(xs(m,v,y)))),h)break;m=m.return}0<w.length&&(p=new g(p,E,null,n,c),d.push({event:p,listeners:w}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&!(e&16)&&(E=n.relatedTarget||n.fromElement)&&(qn(E)||E[gi]))break e;if((g||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,g?(E=n.relatedTarget||n.toElement,g=u,E=E?qn(E):null,E!==null&&(h=hr(E),E!==h||E.tag!==5&&E.tag!==6)&&(E=null)):(g=null,E=u),g!==E)){if(w=pp,v="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(w=gp,v="onPointerLeave",f="onPointerEnter",m="pointer"),h=g==null?p:Rr(g),y=E==null?p:Rr(E),p=new w(v,m+"leave",g,n,c),p.target=h,p.relatedTarget=y,v=null,qn(c)===u&&(w=new w(f,m+"enter",E,n,c),w.target=y,w.relatedTarget=h,v=w),h=v,g&&E)t:{for(w=g,f=E,m=0,y=w;y;y=Er(y))m++;for(y=0,v=f;v;v=Er(v))y++;for(;0<m-y;)w=Er(w),m--;for(;0<y-m;)f=Er(f),y--;for(;m--;){if(w===f||f!==null&&w===f.alternate)break t;w=Er(w),f=Er(f)}w=null}else w=null;g!==null&&xp(d,p,g,w,!1),E!==null&&h!==null&&xp(d,h,E,w,!0)}}e:{if(p=u?Rr(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var P=O_;else if(wp(p))if(qy)P=b_;else{P=M_;var C=L_}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=$_);if(P&&(P=P(t,u))){Hy(d,P,n,c);break e}C&&C(t,p,u),t==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&fc(p,"number",p.value)}switch(C=u?Rr(u):window,t){case"focusin":(wp(C)||C.contentEditable==="true")&&(Ar=C,kc=u,cs=null);break;case"focusout":cs=kc=Ar=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,Cp(d,n,c);break;case"selectionchange":if(V_)break;case"keydown":case"keyup":Cp(d,n,c)}var L;if(sd)e:{switch(t){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Nr?By(t,n)&&($="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(jy&&n.locale!=="ko"&&(Nr||$!=="onCompositionStart"?$==="onCompositionEnd"&&Nr&&(L=Vy()):(sn=c,nd="value"in sn?sn.value:sn.textContent,Nr=!0)),C=Aa(u,$),0<C.length&&($=new mp($,t,null,n,c),d.push({event:$,listeners:C}),L?$.data=L:(L=zy(n),L!==null&&($.data=L)))),(L=A_?R_(t,n):x_(t,n))&&(u=Aa(u,"onBeforeInput"),0<u.length&&(c=new mp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=L))}Qy(d,e)})}function xs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Aa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ts(t,n),s!=null&&r.unshift(xs(t,s,i)),s=Ts(t,e),s!=null&&r.push(xs(t,s,i))),t=t.return}return r}function Er(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ts(n,s),l!=null&&o.unshift(xs(n,l,a))):i||(l=Ts(n,s),l!=null&&o.push(xs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Ra(){}var Pu=null,Du=null;function Zy(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Ac(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pp=typeof setTimeout=="function"?setTimeout:void 0,j_=typeof clearTimeout=="function"?clearTimeout:void 0;function od(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ou=0;function B_(t){return{$$typeof:qh,toString:t,valueOf:t}}var Cl=Math.random().toString(36).slice(2),on="__reactFiber$"+Cl,xa="__reactProps$"+Cl,gi="__reactContainer$"+Cl,Op="__reactEvents$"+Cl;function qn(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dp(t);t!==null;){if(n=t[on])return n;t=Dp(t)}return e}t=n,n=t.parentNode}return null}function so(t){return t=t[on]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function kl(t){return t[xa]||null}function ev(t){var e=t[Op];return e===void 0&&(e=t[Op]=new Set),e}var Rc=[],xr=-1;function On(t){return{current:t}}function ne(t){0>xr||(t.current=Rc[xr],Rc[xr]=null,xr--)}function ae(t,e){xr++,Rc[xr]=t.current,t.current=e}var Nn={},je=On(Nn),Ye=On(!1),er=Nn;function Jr(t,e){var n=t.type.contextTypes;if(!n)return Nn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(t){return t=t.childContextTypes,t!=null}function Pa(){ne(Ye),ne(je)}function Lp(t,e,n){if(je.current!==Nn)throw Error(I(168));ae(je,e),ae(Ye,n)}function tv(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,Lr(e)||"Unknown",i));return ie({},n,r)}function ua(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nn,er=je.current,ae(je,t),ae(Ye,Ye.current),!0}function Mp(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=tv(t,e,er),r.__reactInternalMemoizedMergedChildContext=t,ne(Ye),ne(je),ae(je,t)):ne(Ye),ae(Ye,n)}var ad=null,Xn=null,z_=Ee.unstable_runWithPriority,ld=Ee.unstable_scheduleCallback,xc=Ee.unstable_cancelCallback,H_=Ee.unstable_shouldYield,$p=Ee.unstable_requestPaint,Pc=Ee.unstable_now,q_=Ee.unstable_getCurrentPriorityLevel,Nl=Ee.unstable_ImmediatePriority,nv=Ee.unstable_UserBlockingPriority,rv=Ee.unstable_NormalPriority,iv=Ee.unstable_LowPriority,sv=Ee.unstable_IdlePriority,Lu={},W_=$p!==void 0?$p:function(){},Pt=null,ca=null,Mu=!1,bp=Pc(),$e=1e4>bp?Pc:function(){return Pc()-bp};function Zr(){switch(q_()){case Nl:return 99;case nv:return 98;case rv:return 97;case iv:return 96;case sv:return 95;default:throw Error(I(332))}}function ov(t){switch(t){case 99:return Nl;case 98:return nv;case 97:return rv;case 96:return iv;case 95:return sv;default:throw Error(I(332))}}function tr(t,e){return t=ov(t),z_(t,e)}function Ps(t,e,n){return t=ov(t),ld(t,e,n)}function xt(){if(ca!==null){var t=ca;ca=null,xc(t)}av()}function av(){if(!Mu&&Pt!==null){Mu=!0;var t=0;try{var e=Pt;tr(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Pt=null}catch(n){throw Pt!==null&&(Pt=Pt.slice(t+1)),ld(Nl,xt),n}finally{Mu=!1}}}var K_=cr.ReactCurrentBatchConfig;function dt(t,e){if(t&&t.defaultProps){e=ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Da=On(null),Oa=null,Pr=null,La=null;function ud(){La=Pr=Oa=null}function cd(t){var e=Da.current;ne(Da),t.type._context._currentValue=e}function lv(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Ur(t,e){Oa=t,La=Pr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function lt(t,e){if(La!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(La=t,e=1073741823),e={context:t,observedBits:e,next:null},Pr===null){if(Oa===null)throw Error(I(308));Pr=e,Oa.dependencies={lanes:0,firstContext:e,responders:null}}else Pr=Pr.next=e;return t._currentValue}var Jt=!1;function hd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mn(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Fp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ds(t,e,n,r){var i=t.updateQueue;Jt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;if(c!==null){c=c.updateQueue;var d=c.lastBaseUpdate;d!==o&&(d===null?c.firstBaseUpdate=u:d.next=u,c.lastBaseUpdate=l)}}if(s!==null){d=i.baseState,o=0,c=u=l=null;do{a=s.lane;var p=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,E=s;switch(a=e,p=n,E.tag){case 1:if(g=E.payload,typeof g=="function"){d=g.call(p,d,a);break e}d=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=E.payload,a=typeof g=="function"?g.call(p,d,a):g,a==null)break e;d=ie({},d,a);break e;case 2:Jt=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else p={eventTime:p,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(!0);c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,ao|=o,t.lanes=o,t.memoizedState=d}}function Up(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var cv=new vl.Component().refs;function Ma(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Al={isMounted:function(t){return(t=t._reactInternals)?hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=gn(t),s=pn(r,i);s.payload=e,n!=null&&(s.callback=n),mn(t,s),yn(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=gn(t),s=pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),mn(t,s),yn(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ze(),r=gn(t),i=pn(n,r);i.tag=2,e!=null&&(i.callback=e),mn(t,i),yn(t,r,n)}};function Vp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Rs(n,r)||!Rs(i,s):!0}function hv(t,e,n){var r=!1,i=Nn,s=e.contextType;return typeof s=="object"&&s!==null?s=lt(s):(i=Xe(e)?er:je.current,r=e.contextTypes,s=(r=r!=null)?Jr(t,i):Nn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Al,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Al.enqueueReplaceState(e,e.state,null)}function Dc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=cv,hd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=lt(s):(s=Xe(e)?er:je.current,i.context=Jr(t,s)),Ds(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ma(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Al.enqueueReplaceState(i,i.state,null),Ds(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Bo=Array.isArray;function Fi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===cv&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function zo(t,e){if(t.type!=="textarea")throw Error(I(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function dv(t){function e(h,f){if(t){var m=h.lastEffect;m!==null?(m.nextEffect=f,h.lastEffect=f):h.firstEffect=h.lastEffect=f,f.nextEffect=null,f.flags=8}}function n(h,f){if(!t)return null;for(;f!==null;)e(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=Rn(h,f),h.index=0,h.sibling=null,h}function s(h,f,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags=2,f):m):(h.flags=2,f)):f}function o(h){return t&&h.alternate===null&&(h.flags=2),h}function a(h,f,m,y){return f===null||f.tag!==6?(f=Vu(m,h.mode,y),f.return=h,f):(f=i(f,m),f.return=h,f)}function l(h,f,m,y){return f!==null&&f.elementType===m.type?(y=i(f,m.props),y.ref=Fi(h,f,m),y.return=h,y):(y=pa(m.type,m.key,m.props,null,h.mode,y),y.ref=Fi(h,f,m),y.return=h,y)}function u(h,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ju(m,h.mode,y),f.return=h,f):(f=i(f,m.children||[]),f.return=h,f)}function c(h,f,m,y,v){return f===null||f.tag!==7?(f=zr(m,h.mode,y,v),f.return=h,f):(f=i(f,m),f.return=h,f)}function d(h,f,m){if(typeof f=="string"||typeof f=="number")return f=Vu(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Wi:return m=pa(f.type,f.key,f.props,null,h.mode,m),m.ref=Fi(h,null,f),m.return=h,m;case zn:return f=ju(f,h.mode,m),f.return=h,f}if(Bo(f)||Di(f))return f=zr(f,h.mode,m,null),f.return=h,f;zo(h,f)}return null}function p(h,f,m,y){var v=f!==null?f.key:null;if(typeof m=="string"||typeof m=="number")return v!==null?null:a(h,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wi:return m.key===v?m.type===Zt?c(h,f,m.props.children,y,v):l(h,f,m,y):null;case zn:return m.key===v?u(h,f,m,y):null}if(Bo(m)||Di(m))return v!==null?null:c(h,f,m,y,null);zo(h,m)}return null}function g(h,f,m,y,v){if(typeof y=="string"||typeof y=="number")return h=h.get(m)||null,a(f,h,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wi:return h=h.get(y.key===null?m:y.key)||null,y.type===Zt?c(f,h,y.props.children,v,y.key):l(f,h,y,v);case zn:return h=h.get(y.key===null?m:y.key)||null,u(f,h,y,v)}if(Bo(y)||Di(y))return h=h.get(m)||null,c(f,h,y,v,null);zo(f,y)}return null}function E(h,f,m,y){for(var v=null,P=null,C=f,L=f=0,$=null;C!==null&&L<m.length;L++){C.index>L?($=C,C=null):$=C.sibling;var D=p(h,C,m[L],y);if(D===null){C===null&&(C=$);break}t&&C&&D.alternate===null&&e(h,C),f=s(D,f,L),P===null?v=D:P.sibling=D,P=D,C=$}if(L===m.length)return n(h,C),v;if(C===null){for(;L<m.length;L++)C=d(h,m[L],y),C!==null&&(f=s(C,f,L),P===null?v=C:P.sibling=C,P=C);return v}for(C=r(h,C);L<m.length;L++)$=g(C,h,L,m[L],y),$!==null&&(t&&$.alternate!==null&&C.delete($.key===null?L:$.key),f=s($,f,L),P===null?v=$:P.sibling=$,P=$);return t&&C.forEach(function(me){return e(h,me)}),v}function w(h,f,m,y){var v=Di(m);if(typeof v!="function")throw Error(I(150));if(m=v.call(m),m==null)throw Error(I(151));for(var P=v=null,C=f,L=f=0,$=null,D=m.next();C!==null&&!D.done;L++,D=m.next()){C.index>L?($=C,C=null):$=C.sibling;var me=p(h,C,D.value,y);if(me===null){C===null&&(C=$);break}t&&C&&me.alternate===null&&e(h,C),f=s(me,f,L),P===null?v=me:P.sibling=me,P=me,C=$}if(D.done)return n(h,C),v;if(C===null){for(;!D.done;L++,D=m.next())D=d(h,D.value,y),D!==null&&(f=s(D,f,L),P===null?v=D:P.sibling=D,P=D);return v}for(C=r(h,C);!D.done;L++,D=m.next())D=g(C,h,L,D.value,y),D!==null&&(t&&D.alternate!==null&&C.delete(D.key===null?L:D.key),f=s(D,f,L),P===null?v=D:P.sibling=D,P=D);return t&&C.forEach(function(mu){return e(h,mu)}),v}return function(h,f,m,y){var v=typeof m=="object"&&m!==null&&m.type===Zt&&m.key===null;v&&(m=m.props.children);var P=typeof m=="object"&&m!==null;if(P)switch(m.$$typeof){case Wi:e:{for(P=m.key,v=f;v!==null;){if(v.key===P){switch(v.tag){case 7:if(m.type===Zt){n(h,v.sibling),f=i(v,m.props.children),f.return=h,h=f;break e}break;default:if(v.elementType===m.type){n(h,v.sibling),f=i(v,m.props),f.ref=Fi(h,v,m),f.return=h,h=f;break e}}n(h,v);break}else e(h,v);v=v.sibling}m.type===Zt?(f=zr(m.props.children,h.mode,y,m.key),f.return=h,h=f):(y=pa(m.type,m.key,m.props,null,h.mode,y),y.ref=Fi(h,f,m),y.return=h,h=y)}return o(h);case zn:e:{for(v=m.key;f!==null;){if(f.key===v)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=i(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else e(h,f);f=f.sibling}f=ju(m,h.mode,y),f.return=h,h=f}return o(h)}if(typeof m=="string"||typeof m=="number")return m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,m),f.return=h,h=f):(n(h,f),f=Vu(m,h.mode,y),f.return=h,h=f),o(h);if(Bo(m))return E(h,f,m,y);if(Di(m))return w(h,f,m,y);if(P&&zo(h,m),typeof m>"u"&&!v)switch(h.tag){case 1:case 22:case 0:case 11:case 15:throw Error(I(152,Lr(h.type)||"Component"))}return n(h,f)}}var $a=dv(!0),fv=dv(!1),oo={},Tt=On(oo),Os=On(oo),Ls=On(oo);function Wn(t){if(t===oo)throw Error(I(174));return t}function Oc(t,e){switch(ae(Ls,e),ae(Os,t),ae(Tt,oo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yc(e,t)}ne(Tt),ae(Tt,e)}function ei(){ne(Tt),ne(Os),ne(Ls)}function Bp(t){Wn(Ls.current);var e=Wn(Tt.current),n=yc(e,t.type);e!==n&&(ae(Os,t),ae(Tt,n))}function dd(t){Os.current===t&&(ne(Tt),ne(Os))}var oe=On(0);function ba(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&64)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ot=null,an=null,Ct=!1;function pv(t,e){var n=it(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function zp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Lc(t){if(Ct){var e=an;if(e){var n=e;if(!zp(t,e)){if(e=Fr(n.nextSibling),!e||!zp(t,e)){t.flags=t.flags&-1025|2,Ct=!1,Ot=t;return}pv(Ot,n)}Ot=t,an=Fr(e.firstChild)}else t.flags=t.flags&-1025|2,Ct=!1,Ot=t}}function Hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function Ho(t){if(t!==Ot)return!1;if(!Ct)return Hp(t),Ct=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Ac(e,t.memoizedProps))for(e=an;e;)pv(t,e),e=Fr(e.nextSibling);if(Hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=Ot?Fr(t.stateNode.nextSibling):null;return!0}function $u(){an=Ot=null,Ct=!1}var Vr=[];function fd(){for(var t=0;t<Vr.length;t++)Vr[t]._workInProgressVersionPrimary=null;Vr.length=0}var hs=cr.ReactCurrentDispatcher,at=cr.ReactCurrentBatchConfig,Ms=0,ce=null,De=null,Te=null,Fa=!1,ds=!1;function Ge(){throw Error(I(321))}function pd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rt(t[n],e[n]))return!1;return!0}function md(t,e,n,r,i,s){if(Ms=s,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hs.current=t===null||t.memoizedState===null?Q_:Y_,t=n(r,i),ds){s=0;do{if(ds=!1,!(25>s))throw Error(I(301));s+=1,Te=De=null,e.updateQueue=null,hs.current=X_,t=n(r,i)}while(ds)}if(hs.current=Ba,e=De!==null&&De.next!==null,Ms=0,Te=De=ce=null,Fa=!1,e)throw Error(I(300));return t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ce.memoizedState=Te=t:Te=Te.next=t,Te}function dr(){if(De===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Te===null?ce.memoizedState:Te.next;if(e!==null)Te=e,De=t;else{if(t===null)throw Error(I(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Te===null?ce.memoizedState=Te=t:Te=Te.next=t}return Te}function Et(t,e){return typeof e=="function"?e(t):e}function Ui(t){var e=dr(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,l=i;do{var u=l.lane;if((Ms&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===t?l.eagerState:t(r,l.action);else{var c={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,ce.lanes|=u,ao|=u}l=l.next}while(l!==null&&l!==i);a===null?s=r:a.next=o,rt(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function Vi(t){var e=dr(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);rt(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qp(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(Ms&t)===t)&&(e._workInProgressVersionPrimary=r,Vr.push(e))),t)return n(e._source);throw Vr.push(e),Error(I(350))}function mv(t,e,n,r){var i=We;if(i===null)throw Error(I(349));var s=e._getVersion,o=s(e._source),a=hs.current,l=a.useState(function(){return qp(i,e,n)}),u=l[1],c=l[0];l=Te;var d=t.memoizedState,p=d.refs,g=p.getSnapshot,E=d.source;d=d.subscribe;var w=ce;return t.memoizedState={refs:p,source:e,subscribe:r},a.useEffect(function(){p.getSnapshot=n,p.setSnapshot=u;var h=s(e._source);if(!rt(o,h)){h=n(e._source),rt(c,h)||(u(h),h=gn(w),i.mutableReadLanes|=h&i.pendingLanes),h=i.mutableReadLanes,i.entangledLanes|=h;for(var f=i.entanglements,m=h;0<m;){var y=31-kn(m),v=1<<y;f[y]|=h,m&=~v}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var h=p.getSnapshot,f=p.setSnapshot;try{f(h(e._source));var m=gn(w);i.mutableReadLanes|=m&i.pendingLanes}catch(y){f(function(){throw y})}})},[e,r]),rt(g,n)&&rt(E,e)&&rt(d,r)||(t={pending:null,dispatch:null,lastRenderedReducer:Et,lastRenderedState:c},t.dispatch=u=vd.bind(null,ce,t),l.queue=t,l.baseQueue=null,c=qp(i,e,n),l.memoizedState=l.baseState=c),c}function gv(t,e,n){var r=dr();return mv(r,t,e,n)}function ji(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Et,lastRenderedState:t},t=t.dispatch=vd.bind(null,ce,t),[e.memoizedState,t]}function Ua(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null},ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Wp(t){var e=Kn();return t={current:t},e.memoizedState=t}function Va(){return dr().memoizedState}function Mc(t,e,n,r){var i=Kn();ce.flags|=t,i.memoizedState=Ua(1|e,n,void 0,r===void 0?null:r)}function gd(t,e,n,r){var i=dr();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&pd(r,o.deps)){Ua(e,n,s,r);return}}ce.flags|=t,i.memoizedState=Ua(1|e,n,s,r)}function Kp(t,e){return Mc(516,4,t,e)}function ja(t,e){return gd(516,4,t,e)}function yv(t,e){return gd(4,2,t,e)}function vv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wv(t,e,n){return n=n!=null?n.concat([t]):null,gd(4,2,vv.bind(null,e,t),n)}function yd(){}function Ev(t,e){var n=dr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _v(t,e){var n=dr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function G_(t,e){var n=Zr();tr(98>n?98:n,function(){t(!0)}),tr(97<n?97:n,function(){var r=at.transition;at.transition=1;try{t(!1),e()}finally{at.transition=r}})}function vd(t,e,n){var r=Ze(),i=gn(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===ce||o!==null&&o===ce)ds=Fa=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,rt(l,a))return}catch{}finally{}yn(t,i,r)}}var Ba={readContext:lt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useOpaqueIdentifier:Ge,unstable_isNewReconciler:!1},Q_={readContext:lt,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:lt,useEffect:Kp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mc(4,2,vv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mc(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=vd.bind(null,ce,t),[r.memoizedState,t]},useRef:Wp,useState:ji,useDebugValue:yd,useDeferredValue:function(t){var e=ji(t),n=e[0],r=e[1];return Kp(function(){var i=at.transition;at.transition=1;try{r(t)}finally{at.transition=i}},[t]),n},useTransition:function(){var t=ji(!1),e=t[0];return t=G_.bind(null,t[1]),Wp(t),[t,e]},useMutableSource:function(t,e,n){var r=Kn();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},mv(r,t,e,n)},useOpaqueIdentifier:function(){if(Ct){var t=!1,e=B_(function(){throw t||(t=!0,n("r:"+(Ou++).toString(36))),Error(I(355))}),n=ji(e)[1];return!(ce.mode&2)&&(ce.flags|=516,Ua(5,function(){n("r:"+(Ou++).toString(36))},void 0,null)),e}return e="r:"+(Ou++).toString(36),ji(e),e},unstable_isNewReconciler:!1},Y_={readContext:lt,useCallback:Ev,useContext:lt,useEffect:ja,useImperativeHandle:wv,useLayoutEffect:yv,useMemo:_v,useReducer:Ui,useRef:Va,useState:function(){return Ui(Et)},useDebugValue:yd,useDeferredValue:function(t){var e=Ui(Et),n=e[0],r=e[1];return ja(function(){var i=at.transition;at.transition=1;try{r(t)}finally{at.transition=i}},[t]),n},useTransition:function(){var t=Ui(Et)[0];return[Va().current,t]},useMutableSource:gv,useOpaqueIdentifier:function(){return Ui(Et)[0]},unstable_isNewReconciler:!1},X_={readContext:lt,useCallback:Ev,useContext:lt,useEffect:ja,useImperativeHandle:wv,useLayoutEffect:yv,useMemo:_v,useReducer:Vi,useRef:Va,useState:function(){return Vi(Et)},useDebugValue:yd,useDeferredValue:function(t){var e=Vi(Et),n=e[0],r=e[1];return ja(function(){var i=at.transition;at.transition=1;try{r(t)}finally{at.transition=i}},[t]),n},useTransition:function(){var t=Vi(Et)[0];return[Va().current,t]},useMutableSource:gv,useOpaqueIdentifier:function(){return Vi(Et)[0]},unstable_isNewReconciler:!1},J_=cr.ReactCurrentOwner,ft=!1;function Qe(t,e,n,r){e.child=t===null?fv(e,null,n,r):$a(e,t.child,n,r)}function Gp(t,e,n,r,i){n=n.render;var s=e.ref;return Ur(e,i),r=md(t,e,n,r,s,i),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Lt(t,e,i)):(e.flags|=1,Qe(t,e,r,i),e.child)}function Qp(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Td(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Sv(t,e,o,r,i,s)):(t=pa(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,!(i&s)&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:Rs,n(i,r)&&t.ref===e.ref)?Lt(t,e,s):(e.flags|=1,t=Rn(o,r),t.ref=e.ref,t.return=e,e.child=t)}function Sv(t,e,n,r,i,s){if(t!==null&&Rs(t.memoizedProps,r)&&t.ref===e.ref)if(ft=!1,(s&i)!==0)t.flags&16384&&(ft=!0);else return e.lanes=t.lanes,Lt(t,e,s);return $c(t,e,n,r,s)}function bu(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if(!(e.mode&4))e.memoizedState={baseLanes:0},Wo(e,n);else if(n&1073741824)e.memoizedState={baseLanes:0},Wo(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},Wo(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Wo(e,r);return Qe(t,e,i,n),e.child}function Iv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function $c(t,e,n,r,i){var s=Xe(n)?er:je.current;return s=Jr(e,s),Ur(e,i),n=md(t,e,n,r,s,i),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Lt(t,e,i)):(e.flags|=1,Qe(t,e,n,i),e.child)}function Yp(t,e,n,r,i){if(Xe(n)){var s=!0;ua(e)}else s=!1;if(Ur(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),hv(e,n,r),Dc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=lt(u):(u=Xe(n)?er:je.current,u=Jr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&jp(e,o,r,u),Jt=!1;var p=e.memoizedState;o.state=p,Ds(e,r,o,i),l=e.memoizedState,a!==r||p!==l||Ye.current||Jt?(typeof c=="function"&&(Ma(e,n,c,r),l=e.memoizedState),(a=Jt||Vp(e,n,a,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,uv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:dt(e.type,a),o.props=u,d=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=lt(l):(l=Xe(n)?er:je.current,l=Jr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&jp(e,o,r,l),Jt=!1,p=e.memoizedState,o.state=p,Ds(e,r,o,i);var E=e.memoizedState;a!==d||p!==E||Ye.current||Jt?(typeof g=="function"&&(Ma(e,n,g,r),E=e.memoizedState),(u=Jt||Vp(e,n,u,r,p,E,l))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=256),r=!1)}return bc(t,e,n,r,s,i)}function bc(t,e,n,r,i,s){Iv(t,e);var o=(e.flags&64)!==0;if(!r&&!o)return i&&Mp(e,n,!1),Lt(t,e,s);r=e.stateNode,J_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$a(e,t.child,null,s),e.child=$a(e,null,a,s)):Qe(t,e,a,s),e.memoizedState=r.state,i&&Mp(e,n,!0),e.child}function Xp(t){var e=t.stateNode;e.pendingContext?Lp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lp(t,e.context,!1),Oc(t,e.containerInfo)}var qo={dehydrated:null,retryLane:0};function Jp(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),ae(oe,i&1),t===null?(r.fallback!==void 0&&Lc(e),t=r.children,i=r.fallback,s?(t=Zp(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=qo,t):typeof r.unstable_expectedLoadTime=="number"?(t=Zp(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=qo,e.lanes=33554432,t):(n=Cd({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=tm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=qo,r):(n=em(t,e,r.children,n),e.memoizedState=null,n):s?(r=tm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=qo,r):(n=em(t,e,r.children,n),e.memoizedState=null,n)}function Zp(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},!(i&2)&&s!==null?(s.childLanes=0,s.pendingProps=e):s=Cd(e,i,0,null),n=zr(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function em(t,e,n,r){var i=t.child;return t=i.sibling,n=Rn(i,{mode:"visible",children:n}),!(e.mode&2)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function tm(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return!(s&2)&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Rn(o,a),t!==null?r=Rn(t,r):(r=zr(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function nm(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),lv(t.return,e)}function Fu(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function rm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Qe(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=64;else{if(t!==null&&t.flags&64)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nm(t,n);else if(t.tag===19)nm(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(oe,r),!(e.mode&2))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ba(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fu(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ba(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fu(e,!0,n,null,s,e.lastEffect);break;case"together":Fu(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Lt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ao|=e.lanes,n&e.childLanes){if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Rn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var Tv,Fc,Cv,kv;Tv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fc=function(){};Cv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wn(Tt.current);var s=null;switch(n){case"input":i=hc(t,i),r=hc(t,r),s=[];break;case"option":i=pc(t,i),r=pc(t,r),s=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),s=[];break;case"textarea":i=mc(t,i),r=mc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ra)}vc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ss.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ss.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",t),s||a===l||(s=[])):typeof l=="object"&&l!==null&&l.$$typeof===qh?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};kv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bi(t,e){if(!Ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Z_(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Xe(e.type)&&Pa(),null;case 3:return ei(),ne(Ye),ne(je),fd(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ho(e)?e.flags|=4:r.hydrate||(e.flags|=256)),Fc(e),null;case 5:dd(e);var i=Wn(Ls.current);if(n=e.type,t!==null&&e.stateNode!=null)Cv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(I(166));return null}if(t=Wn(Tt.current),Ho(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[on]=e,r[xa]=s,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(t=0;t<Gi.length;t++)Z(Gi[t],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":rp(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":sp(r,s),Z("invalid",r)}vc(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):Ss.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&Z("scroll",r));switch(n){case"input":Fo(r),ip(r,s,!0);break;case"textarea":Fo(r),op(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ra)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===gc.html&&(t=wy(n)),t===gc.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[xa]=r,Tv(t,e,!1,!1),e.stateNode=t,o=wc(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gi.length;i++)Z(Gi[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":rp(t,r),i=hc(t,r),Z("invalid",t);break;case"option":i=pc(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),Z("invalid",t);break;case"textarea":sp(t,r),i=mc(t,r),Z("invalid",t);break;default:i=r}vc(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ey(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Is(t,l):typeof l=="number"&&Is(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ss.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Z("scroll",t):l!=null&&Uh(t,s,l,o))}switch(n){case"input":Fo(t),ip(t,r,!1);break;case"textarea":Fo(t),op(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ra)}Zy(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)kv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));n=Wn(Ls.current),Wn(Tt.current),Ho(e)?(r=e.stateNode,n=e.memoizedProps,r[on]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r)}return null;case 13:return ne(oe),r=e.memoizedState,e.flags&64?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Ho(e):n=t.memoizedState!==null,r&&!n&&e.mode&2&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||oe.current&1?ke===0&&(ke=3):((ke===0||ke===3)&&(ke=4),We===null||!(ao&134217727)&&!(vi&134217727)||jr(We,be))),(r||n)&&(e.flags|=4),null);case 4:return ei(),Fc(e),t===null&&Yy(e.stateNode.containerInfo),null;case 10:return cd(e),null;case 17:return Xe(e.type)&&Pa(),null;case 19:if(ne(oe),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!==0,o=r.rendering,o===null)if(s)Bi(r,!1);else{if(ke!==0||t!==null&&t.flags&64)for(t=e.child;t!==null;){if(o=ba(t),o!==null){for(e.flags|=64,Bi(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(oe,oe.current&1|2),e.child}t=t.sibling}r.tail!==null&&$e()>Hc&&(e.flags|=64,s=!0,Bi(r,!1),e.lanes=33554432)}else{if(!s)if(t=ba(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bi(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Ct)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*$e()-r.renderingStartTime>Hc&&n!==1073741824&&(e.flags|=64,s=!0,Bi(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=$e(),n.sibling=null,e=oe.current,ae(oe,s?e&1|2:e&1),n):null;case 23:case 24:return Id(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(I(156,e.tag))}function eS(t){switch(t.tag){case 1:Xe(t.type)&&Pa();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(ei(),ne(Ye),ne(je),fd(),e=t.flags,e&64)throw Error(I(285));return t.flags=e&-4097|64,t;case 5:return dd(t),null;case 13:return ne(oe),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return ne(oe),null;case 4:return ei(),null;case 10:return cd(t),null;case 23:case 24:return Id(),null;default:return null}}function wd(t,e){try{var n="",r=e;do n+=LE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Uc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tS=typeof WeakMap=="function"?WeakMap:Map;function Nv(t,e,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ha||(Ha=!0,qc=r),Uc(t,e)},n}function Av(t,e,n){n=pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Uc(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(_t===null?_t=new Set([this]):_t.add(this),Uc(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var nS=typeof WeakSet=="function"?WeakSet:Set;function im(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){vn(t,n)}else e.current=null}function rS(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:dt(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&od(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(I(163))}function iS(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,i&4&&i&1&&(bv(n,t),dS(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:dt(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Up(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Up(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&Zy(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Dy(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(I(163))}function sm(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=_y("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function om(t,e){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(ad,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if(r&4)bv(e,n);else{r=e;try{i()}catch(s){vn(r,s)}}n=n.next}while(n!==t)}break;case 1:if(im(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){vn(e,s)}break;case 5:im(e);break;case 4:Rv(t,e)}}function am(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function lm(t){return t.tag===5||t.tag===3||t.tag===4}function um(t){e:{for(var e=t.return;e!==null;){if(lm(e))break e;e=e.return}throw Error(I(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(I(161))}n.flags&16&&(Is(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||lm(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Vc(t,n,e):jc(t,n,e)}function Vc(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ra));else if(r!==4&&(t=t.child,t!==null))for(Vc(t,e,n),t=t.sibling;t!==null;)Vc(t,e,n),t=t.sibling}function jc(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jc(t,e,n),t=t.sibling;t!==null;)jc(t,e,n),t=t.sibling}function Rv(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(I(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,l=a;;)if(om(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(om(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Uu(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[xa]=r,t==="input"&&r.type==="radio"&&r.name!=null&&yy(n,r),wc(t,i),e=wc(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?Sy(n,a):o==="dangerouslySetInnerHTML"?Ey(n,a):o==="children"?Is(n,a):Uh(n,o,a,e)}switch(t){case"input":dc(n,r);break;case"textarea":vy(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Mr(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Mr(n,!!r.multiple,r.defaultValue,!0):Mr(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(I(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,Dy(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(Sd=$e(),sm(e.child,!0)),cm(e);return;case 19:cm(e);return;case 17:return;case 23:case 24:sm(e,e.memoizedState!==null);return}throw Error(I(163))}function cm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nS),e.forEach(function(r){var i=mS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function sS(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var oS=Math.ceil,za=cr.ReactCurrentDispatcher,Ed=cr.ReactCurrentOwner,F=0,We=null,ge=null,be=0,nr=0,Bc=On(0),ke=0,Rl=null,yi=0,ao=0,vi=0,_d=0,zc=null,Sd=0,Hc=1/0;function wi(){Hc=$e()+500}var x=null,Ha=!1,qc=null,_t=null,An=!1,fs=null,Qi=90,Wc=[],Kc=[],Ft=null,ps=0,Gc=null,ha=-1,Dt=0,da=0,ms=null,fa=!1;function Ze(){return F&48?$e():ha!==-1?ha:ha=$e()}function gn(t){if(t=t.mode,!(t&2))return 1;if(!(t&4))return Zr()===99?1:2;if(Dt===0&&(Dt=yi),K_.transition!==0){da!==0&&(da=zc!==null?zc.pendingLanes:0),t=Dt;var e=4186112&~da;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=Zr(),F&4&&t===98?t=Na(12,Dt):(t=YE(t),t=Na(t,Dt)),t}function yn(t,e,n){if(50<ps)throw ps=0,Gc=null,Error(I(185));if(t=xl(t,e),t===null)return null;Sl(t,e,n),t===We&&(vi|=e,ke===4&&jr(t,be));var r=Zr();e===1?F&8&&!(F&48)?Qc(t):(ut(t,n),F===0&&(wi(),xt())):(!(F&4)||r!==98&&r!==99||(Ft===null?Ft=new Set([t]):Ft.add(t)),ut(t,n)),zc=t}function xl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function ut(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-kn(o),l=1<<a,u=s[a];if(u===-1){if(!(l&r)||l&i){u=e,Sr(l);var c=J;s[a]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);o&=~l}if(r=Ns(t,t===We?be:0),e=J,r===0)n!==null&&(n!==Lu&&xc(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Lu&&xc(n)}e===15?(n=Qc.bind(null,t),Pt===null?(Pt=[n],ca=ld(Nl,av)):Pt.push(n),n=Lu):e===14?n=Ps(99,Qc.bind(null,t)):(n=XE(e),n=Ps(n,xv.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function xv(t){if(ha=-1,da=Dt=0,F&48)throw Error(I(327));var e=t.callbackNode;if(Ln()&&t.callbackNode!==e)return null;var n=Ns(t,t===We?be:0);if(n===0)return null;var r=n,i=F;F|=16;var s=Lv();(We!==t||be!==r)&&(wi(),Br(t,r));do try{uS();break}catch(a){Ov(t,a)}while(!0);if(ud(),za.current=s,F=i,ge!==null?r=0:(We=null,be=0,r=ke),yi&vi)Br(t,0);else if(r!==0){if(r===2&&(F|=64,t.hydrate&&(t.hydrate=!1,od(t.containerInfo)),n=Uy(t),n!==0&&(r=Yi(t,n))),r===1)throw e=Rl,Br(t,0),jr(t,n),ut(t,$e()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(I(345));case 2:jn(t);break;case 3:if(jr(t,n),(n&62914560)===n&&(r=Sd+500-$e(),10<r)){if(Ns(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Pp(jn.bind(null,t),r);break}jn(t);break;case 4:if(jr(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-kn(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=$e()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*oS(n/1960))-n,10<n){t.timeoutHandle=Pp(jn.bind(null,t),n);break}jn(t);break;case 5:jn(t);break;default:throw Error(I(329))}}return ut(t,$e()),t.callbackNode===e?xv.bind(null,t):null}function jr(t,e){for(e&=~_d,e&=~vi,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),r=1<<n;t[n]=-1,e&=~r}}function Qc(t){if(F&48)throw Error(I(327));if(Ln(),t===We&&t.expiredLanes&be){var e=be,n=Yi(t,e);yi&vi&&(e=Ns(t,e),n=Yi(t,e))}else e=Ns(t,0),n=Yi(t,e);if(t.tag!==0&&n===2&&(F|=64,t.hydrate&&(t.hydrate=!1,od(t.containerInfo)),e=Uy(t),e!==0&&(n=Yi(t,e))),n===1)throw n=Rl,Br(t,0),jr(t,e),ut(t,$e()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,jn(t),ut(t,$e()),null}function aS(){if(Ft!==null){var t=Ft;Ft=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,ut(e,$e())})}xt()}function Pv(t,e){var n=F;F|=1;try{return t(e)}finally{F=n,F===0&&(wi(),xt())}}function Dv(t,e){var n=F;F&=-2,F|=8;try{return t(e)}finally{F=n,F===0&&(wi(),xt())}}function Wo(t,e){ae(Bc,nr),nr|=e,yi|=e}function Id(){nr=Bc.current,ne(Bc)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,j_(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pa();break;case 3:ei(),ne(Ye),ne(je),fd();break;case 5:dd(r);break;case 4:ei();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:cd(r);break;case 23:case 24:Id()}n=n.return}We=t,ge=Rn(t.current,null),be=nr=yi=e,ke=0,Rl=null,_d=vi=ao=0}function Ov(t,e){do{var n=ge;try{if(ud(),hs.current=Ba,Fa){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fa=!1}if(Ms=0,Te=De=ce=null,ds=!1,Ed.current=null,n===null||n.return===null){ke=1,Rl=e,ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=be,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if(!(a.mode&2)){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var d=(oe.current&1)!==0,p=o;do{var g;if(g=p.tag===13){var E=p.memoizedState;if(E!==null)g=E.dehydrated!==null;else{var w=p.memoizedProps;g=w.fallback===void 0?!1:w.unstable_avoidThisFallback!==!0?!0:!d}}if(g){var h=p.updateQueue;if(h===null){var f=new Set;f.add(u),p.updateQueue=f}else h.add(u);if(!(p.mode&2)){if(p.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var m=pn(-1,1);m.tag=2,mn(a,m)}a.lanes|=1;break e}l=void 0,a=e;var y=s.pingCache;if(y===null?(y=s.pingCache=new tS,l=new Set,y.set(u,l)):(l=y.get(u),l===void 0&&(l=new Set,y.set(u,l))),!l.has(a)){l.add(a);var v=pS.bind(null,s,u,a);u.then(v,v)}p.flags|=4096,p.lanes=e;break e}p=p.return}while(p!==null);l=Error((Lr(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}ke!==5&&(ke=2),l=wd(l,a),p=o;do{switch(p.tag){case 3:s=l,p.flags|=4096,e&=-e,p.lanes|=e;var P=Nv(p,s,e);Fp(p,P);break e;case 1:s=l;var C=p.type,L=p.stateNode;if(!(p.flags&64)&&(typeof C.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(_t===null||!_t.has(L)))){p.flags|=4096,e&=-e,p.lanes|=e;var $=Av(p,s,e);Fp(p,$);break e}}p=p.return}while(p!==null)}$v(n)}catch(D){e=D,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function Lv(){var t=za.current;return za.current=Ba,t===null?Ba:t}function Yi(t,e){var n=F;F|=16;var r=Lv();We===t&&be===e||Br(t,e);do try{lS();break}catch(i){Ov(t,i)}while(!0);if(ud(),F=n,za.current=r,ge!==null)throw Error(I(261));return We=null,be=0,ke}function lS(){for(;ge!==null;)Mv(ge)}function uS(){for(;ge!==null&&!H_();)Mv(ge)}function Mv(t){var e=Fv(t.alternate,t,nr);t.memoizedProps=t.pendingProps,e===null?$v(t):ge=e,Ed.current=null}function $v(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&2048){if(n=eS(e),n!==null){n.flags&=2047,ge=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}else{if(n=Z_(n,e,nr),n!==null){ge=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||nr&1073741824||!(n.mode&4)){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&!(t.flags&2048)&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);ke===0&&(ke=5)}function jn(t){var e=Zr();return tr(99,cS.bind(null,t,e)),null}function cS(t,e){do Ln();while(fs!==null);if(F&48)throw Error(I(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var l=31-kn(s),u=1<<l;i[l]=0,o[l]=-1,a[l]=-1,s&=~u}if(Ft!==null&&!(r&24)&&Ft.has(t)&&Ft.delete(t),t===We&&(ge=We=null,be=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=F,F|=32,Ed.current=null,Pu=oa,o=Tp(),Cc(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var c=0,d=-1,p=-1,g=0,E=0,w=o,h=null;t:for(;;){for(var f;w!==a||s!==0&&w.nodeType!==3||(d=c+s),w!==l||u!==0&&w.nodeType!==3||(p=c+u),w.nodeType===3&&(c+=w.nodeValue.length),(f=w.firstChild)!==null;)h=w,w=f;for(;;){if(w===o)break t;if(h===a&&++g===s&&(d=c),h===l&&++E===u&&(p=c),(f=w.nextSibling)!==null)break;w=h,h=w.parentNode}w=f}a=d===-1||p===-1?null:{start:d,end:p}}else a=null;a=a||{start:0,end:0}}else a=null;Du={focusedElem:o,selectionRange:a},oa=!1,ms=null,fa=!1,x=r;do try{hS()}catch(D){if(x===null)throw Error(I(330));vn(x,D),x=x.nextEffect}while(x!==null);ms=null,x=r;do try{for(o=t;x!==null;){var m=x.flags;if(m&16&&Is(x.stateNode,""),m&128){var y=x.alternate;if(y!==null){var v=y.ref;v!==null&&(typeof v=="function"?v(null):v.current=null)}}switch(m&1038){case 2:um(x),x.flags&=-3;break;case 6:um(x),x.flags&=-3,Uu(x.alternate,x);break;case 1024:x.flags&=-1025;break;case 1028:x.flags&=-1025,Uu(x.alternate,x);break;case 4:Uu(x.alternate,x);break;case 8:a=x,Rv(o,a);var P=a.alternate;am(a),P!==null&&am(P)}x=x.nextEffect}}catch(D){if(x===null)throw Error(I(330));vn(x,D),x=x.nextEffect}while(x!==null);if(v=Du,y=Tp(),m=v.focusedElem,o=v.selectionRange,y!==m&&m&&m.ownerDocument&&Ky(m.ownerDocument.documentElement,m)){for(o!==null&&Cc(m)&&(y=o.start,v=o.end,v===void 0&&(v=y),"selectionStart"in m?(m.selectionStart=y,m.selectionEnd=Math.min(v,m.value.length)):(v=(y=m.ownerDocument||document)&&y.defaultView||window,v.getSelection&&(v=v.getSelection(),a=m.textContent.length,P=Math.min(o.start,a),o=o.end===void 0?P:Math.min(o.end,a),!v.extend&&P>o&&(a=o,o=P,P=a),a=Ip(m,P),s=Ip(m,o),a&&s&&(v.rangeCount!==1||v.anchorNode!==a.node||v.anchorOffset!==a.offset||v.focusNode!==s.node||v.focusOffset!==s.offset)&&(y=y.createRange(),y.setStart(a.node,a.offset),v.removeAllRanges(),P>o?(v.addRange(y),v.extend(s.node,s.offset)):(y.setEnd(s.node,s.offset),v.addRange(y)))))),y=[],v=m;v=v.parentNode;)v.nodeType===1&&y.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<y.length;m++)v=y[m],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}oa=!!Pu,Du=Pu=null,t.current=n,x=r;do try{for(m=t;x!==null;){var C=x.flags;if(C&36&&iS(m,x.alternate,x),C&128){y=void 0;var L=x.ref;if(L!==null){var $=x.stateNode;switch(x.tag){case 5:y=$;break;default:y=$}typeof L=="function"?L(y):L.current=y}}x=x.nextEffect}}catch(D){if(x===null)throw Error(I(330));vn(x,D),x=x.nextEffect}while(x!==null);x=null,W_(),F=i}else t.current=n;if(An)An=!1,fs=t,Qi=e;else for(x=r;x!==null;)e=x.nextEffect,x.nextEffect=null,x.flags&8&&(C=x,C.sibling=null,C.stateNode=null),x=e;if(r=t.pendingLanes,r===0&&(_t=null),r===1?t===Gc?ps++:(ps=0,Gc=t):ps=0,n=n.stateNode,Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(ad,n,void 0,(n.current.flags&64)===64)}catch{}if(ut(t,$e()),Ha)throw Ha=!1,t=qc,qc=null,t;return F&8||xt(),null}function hS(){for(;x!==null;){var t=x.alternate;fa||ms===null||(x.flags&8?up(x,ms)&&(fa=!0):x.tag===13&&sS(t,x)&&up(x,ms)&&(fa=!0));var e=x.flags;e&256&&rS(t,x),!(e&512)||An||(An=!0,Ps(97,function(){return Ln(),null})),x=x.nextEffect}}function Ln(){if(Qi!==90){var t=97<Qi?97:Qi;return Qi=90,tr(t,fS)}return!1}function dS(t,e){Wc.push(e,t),An||(An=!0,Ps(97,function(){return Ln(),null}))}function bv(t,e){Kc.push(e,t),An||(An=!0,Ps(97,function(){return Ln(),null}))}function fS(){if(fs===null)return!1;var t=fs;if(fs=null,F&48)throw Error(I(331));var e=F;F|=32;var n=Kc;Kc=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(l){if(s===null)throw Error(I(330));vn(s,l)}}for(n=Wc,Wc=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(s===null)throw Error(I(330));vn(s,l)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return F=e,xt(),!0}function hm(t,e,n){e=wd(n,e),e=Nv(t,e,1),mn(t,e),e=Ze(),t=xl(t,1),t!==null&&(Sl(t,1,e),ut(t,e))}function vn(t,e){if(t.tag===3)hm(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){hm(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r))){t=wd(e,t);var i=Av(n,t,1);if(mn(n,i),i=Ze(),n=xl(n,1),n!==null)Sl(n,1,i),ut(n,i);else if(typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function pS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ze(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(be&n)===n&&(ke===4||ke===3&&(be&62914560)===be&&500>$e()-Sd?Br(t,0):_d|=n),ut(t,e)}function mS(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,e&2?e&4?(Dt===0&&(Dt=yi),e=Ir(62914560&~Dt),e===0&&(e=4194304)):e=Zr()===99?1:2:e=1),n=Ze(),t=xl(t,e),t!==null&&(Sl(t,e,n),ut(t,n))}var Fv;Fv=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||Ye.current)ft=!0;else if(n&r)ft=!!(t.flags&16384);else{switch(ft=!1,e.tag){case 3:Xp(e),$u();break;case 5:Bp(e);break;case 1:Xe(e.type)&&ua(e);break;case 4:Oc(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;ae(Da,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return n&e.child.childLanes?Jp(t,e,n):(ae(oe,oe.current&1),e=Lt(t,e,n),e!==null?e.sibling:null);ae(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&64){if(r)return rm(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(oe,oe.current),r)break;return null;case 23:case 24:return e.lanes=0,bu(t,e,n)}return Lt(t,e,n)}else ft=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=Jr(e,je.current),Ur(e,n),i=md(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xe(r)){var s=!0;ua(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hd(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Ma(e,r,o,t),i.updater=Al,e.stateNode=i,i._reactInternals=e,Dc(e,r,t,n),e=bc(null,e,r,!0,s,n)}else e.tag=0,Qe(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=yS(i),t=dt(i,t),s){case 0:e=$c(null,e,i,t,n);break e;case 1:e=Yp(null,e,i,t,n);break e;case 11:e=Gp(null,e,i,t,n);break e;case 14:e=Qp(null,e,i,dt(i.type,t),r,n);break e}throw Error(I(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),$c(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),Yp(t,e,r,i,n);case 3:if(Xp(e),r=e.updateQueue,t===null||r===null)throw Error(I(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,uv(t,e),Ds(e,r,null,n),r=e.memoizedState.element,r===i)$u(),e=Lt(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(an=Fr(e.stateNode.containerInfo.firstChild),Ot=e,s=Ct=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],Vr.push(s);for(n=fv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Qe(t,e,r,n),$u();e=e.child}return e;case 5:return Bp(e),t===null&&Lc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ac(r,i)?o=null:s!==null&&Ac(r,s)&&(e.flags|=16),Iv(t,e),Qe(t,e,o,n),e.child;case 6:return t===null&&Lc(e),null;case 13:return Jp(t,e,n);case 4:return Oc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$a(e,null,r,n):Qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),Gp(t,e,r,i,n);case 7:return Qe(t,e,e.pendingProps,n),e.child;case 8:return Qe(t,e,e.pendingProps.children,n),e.child;case 12:return Qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(ae(Da,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=rt(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!Ye.current){e=Lt(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&u.observedBits&s){a.tag===1&&(u=pn(-1,n&-n),u.tag=2,mn(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),lv(a.return,n),l.lanes|=n;break}u=u.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,Ur(e,n),i=lt(i,s.unstable_observedBits),r=r(i),e.flags|=1,Qe(t,e,r,n),e.child;case 14:return i=e.type,s=dt(i,e.pendingProps),s=dt(i.type,s),Qp(t,e,i,s,r,n);case 15:return Sv(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Xe(r)?(t=!0,ua(e)):t=!1,Ur(e,n),hv(e,r,i),Dc(e,r,i,n),bc(null,e,r,!0,t,n);case 19:return rm(t,e,n);case 23:return bu(t,e,n);case 24:return bu(t,e,n)}throw Error(I(156,e.tag))};function gS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function it(t,e,n,r){return new gS(t,e,n,r)}function Td(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yS(t){if(typeof t=="function")return Td(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wl)return 11;if(t===El)return 14}return 2}function Rn(t,e){var n=t.alternate;return n===null?(n=it(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Td(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zt:return zr(n.children,i,s,e);case py:o=8,i|=16;break;case Vh:o=8,i|=1;break;case is:return t=it(12,n,e,i|8),t.elementType=is,t.type=is,t.lanes=s,t;case ss:return t=it(13,n,e,i),t.type=ss,t.elementType=ss,t.lanes=s,t;case Ia:return t=it(19,n,e,i),t.elementType=Ia,t.lanes=s,t;case Wh:return Cd(n,i,s,e);case cc:return t=it(24,n,e,i),t.elementType=cc,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jh:o=10;break e;case Bh:o=9;break e;case wl:o=11;break e;case El:o=14;break e;case zh:o=16,r=null;break e;case Hh:o=22;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=it(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zr(t,e,n,r){return t=it(7,t,r,e),t.lanes=n,t}function Cd(t,e,n,r){return t=it(23,t,r,e),t.elementType=Wh,t.lanes=n,t}function Vu(t,e,n){return t=it(6,t,null,e),t.lanes=n,t}function ju(t,e,n){return e=it(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vS(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Tu(0),this.expirationTimes=Tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tu(0),this.mutableSourceEagerHydrationData=null}function wS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function qa(t,e,n,r){var i=e.current,s=Ze(),o=gn(i);e:if(n){n=n._reactInternals;t:{if(hr(n)!==n||n.tag!==1)throw Error(I(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Xe(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(I(171))}if(n.tag===1){var l=n.type;if(Xe(l)){n=tv(n,l,a);break e}}n=a}else n=Nn;return e.context===null?e.context=n:e.pendingContext=n,e=pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),mn(i,e),yn(i,o,s),o}function Bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kd(t,e){dm(t,e),(t=t.alternate)&&dm(t,e)}function ES(){return null}function Nd(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new vS(t,e,n!=null&&n.hydrate===!0),e=it(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,hd(e),t[gi]=n.current,Yy(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}Nd.prototype.render=function(t){qa(t,this._internalRoot,null,null)};Nd.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;qa(null,t,null,function(){e[gi]=null})};function lo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _S(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new Nd(t,0,e?{hydrate:!0}:void 0)}function Pl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var u=Bu(o);a.call(u)}}qa(e,o,t,i)}else{if(s=n._reactRootContainer=_S(n,r),o=s._internalRoot,typeof i=="function"){var l=i;i=function(){var u=Bu(o);l.call(u)}}Dv(function(){qa(e,o,t,i)})}return Bu(o)}Ry=function(t){if(t.tag===13){var e=Ze();yn(t,4,e),kd(t,4)}};Xh=function(t){if(t.tag===13){var e=Ze();yn(t,67108864,e),kd(t,67108864)}};xy=function(t){if(t.tag===13){var e=Ze(),n=gn(t);yn(t,n,e),kd(t,n)}};Py=function(t,e){return e()};Ec=function(t,e,n){switch(e){case"input":if(dc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=kl(r);if(!i)throw Error(I(90));gy(r),dc(r,i)}}}break;case"textarea":vy(t,n);break;case"select":e=n.value,e!=null&&Mr(t,!!n.multiple,e,!1)}};Gh=Pv;Cy=function(t,e,n,r,i){var s=F;F|=4;try{return tr(98,t.bind(null,e,n,r,i))}finally{F=s,F===0&&(wi(),xt())}};Qh=function(){!(F&49)&&(aS(),Ln())};ky=function(t,e){var n=F;F|=2;try{return t(e)}finally{F=n,F===0&&(wi(),xt())}};function Uv(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lo(e))throw Error(I(200));return wS(t,e,null,n)}var SS={Events:[so,Rr,kl,Iy,Ty,Ln,{current:!1}]},zi={findFiberByHostInstance:qn,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},IS={bundleType:zi.bundleType,version:zi.version,rendererPackageName:zi.rendererPackageName,rendererConfig:zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ay(t),t===null?null:t.stateNode},findFiberByHostInstance:zi.findFiberByHostInstance||ES,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{ad=Ko.inject(IS),Xn=Ko}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS;ct.createPortal=Uv;ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):Error(I(268,Object.keys(t)));return t=Ay(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t,e){var n=F;if(n&48)return t(e);F|=1;try{if(t)return tr(99,t.bind(null,e))}finally{F=n,xt()}};ct.hydrate=function(t,e,n){if(!lo(e))throw Error(I(200));return Pl(null,t,e,!0,n)};ct.render=function(t,e,n){if(!lo(e))throw Error(I(200));return Pl(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!lo(t))throw Error(I(40));return t._reactRootContainer?(Dv(function(){Pl(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};ct.unstable_batchedUpdates=Pv;ct.unstable_createPortal=function(t,e){return Uv(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lo(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Pl(t,e,n,!1,r)};ct.version="17.0.2";function Vv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vv)}catch(t){console.error(t)}}Vv(),cy.exports=ct;var TS=cy.exports;const CS=Gg(TS);/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $s(){return $s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$s.apply(this,arguments)}var ln;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ln||(ln={}));const fm="popstate";function kS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Yc("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wa(i)}return AS(e,n,null,t)}function pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NS(){return Math.random().toString(36).substr(2,8)}function pm(t,e){return{usr:t.state,key:t.key,idx:e}}function Yc(t,e,n,r){return n===void 0&&(n=null),$s({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ei(e):e,{state:n,key:e&&e.key||r||NS()})}function Wa(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ei(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function AS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ln.Pop,l=null,u=c();u==null&&(u=0,o.replaceState($s({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=ln.Pop;let h=c(),f=h==null?null:h-u;u=h,l&&l({action:a,location:w.location,delta:f})}function p(h,f){a=ln.Push;let m=Yc(w.location,h,f);n&&n(m,h),u=c()+1;let y=pm(m,u),v=w.createHref(m);try{o.pushState(y,"",v)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(v)}s&&l&&l({action:a,location:w.location,delta:1})}function g(h,f){a=ln.Replace;let m=Yc(w.location,h,f);n&&n(m,h),u=c();let y=pm(m,u),v=w.createHref(m);o.replaceState(y,"",v),s&&l&&l({action:a,location:w.location,delta:0})}function E(h){let f=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof h=="string"?h:Wa(h);return m=m.replace(/ $/,"%20"),pe(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let w={get action(){return a},get location(){return t(i,o)},listen(h){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(fm,d),l=h,()=>{i.removeEventListener(fm,d),l=null}},createHref(h){return e(i,h)},createURL:E,encodeLocation(h){let f=E(h);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:g,go(h){return o.go(h)}};return w}var mm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(mm||(mm={}));function RS(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ei(e):e,i=Ad(r.pathname||"/",n);if(i==null)return null;let s=Bv(t);xS(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=BS(i);o=US(s[a],l)}return o}function Bv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=wn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bv(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:bS(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of zv(s.path))i(s,o,l)}),e}function zv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=zv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function xS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PS=/^:[\w-]+$/,DS=3,OS=2,LS=1,MS=10,$S=-2,gm=t=>t==="*";function bS(t,e){let n=t.split("/"),r=n.length;return n.some(gm)&&(r+=$S),e&&(r+=OS),n.filter(i=>!gm(i)).reduce((i,s)=>i+(PS.test(s)?DS:s===""?LS:MS),r)}function FS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function US(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=VS({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:wn([i,c.pathname]),pathnameBase:WS(wn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=wn([i,c.pathnameBase]))}return s}function VS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=jS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:p,isOptional:g}=c;if(p==="*"){let w=a[d]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const E=a[d];return g&&!E?u[p]=void 0:u[p]=(E||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function jS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),jv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function BS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return jv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ad(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function zS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ei(t):t;return{pathname:n?n.startsWith("/")?n:HS(n,e):e,search:KS(r),hash:GS(i)}}function HS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Hv(t,e){let n=qS(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qv(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ei(t):(i=$s({},t),pe(!i.pathname||!i.pathname.includes("?"),zu("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),zu("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),zu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=zS(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const wn=t=>t.join("/").replace(/\/\/+/g,"/"),WS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),KS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,GS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Wv=["post","put","patch","delete"];new Set(Wv);const YS=["get",...Wv];new Set(YS);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bs(){return bs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bs.apply(this,arguments)}const Rd=k.createContext(null),XS=k.createContext(null),fr=k.createContext(null),Dl=k.createContext(null),Mn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Kv=k.createContext(null);function JS(t,e){let{relative:n}=e===void 0?{}:e;uo()||pe(!1);let{basename:r,navigator:i}=k.useContext(fr),{hash:s,pathname:o,search:a}=Qv(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:wn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function uo(){return k.useContext(Dl)!=null}function Ol(){return uo()||pe(!1),k.useContext(Dl).location}function Gv(t){k.useContext(fr).static||k.useLayoutEffect(t)}function ZS(){let{isDataRoute:t}=k.useContext(Mn);return t?fI():eI()}function eI(){uo()||pe(!1);let t=k.useContext(Rd),{basename:e,future:n,navigator:r}=k.useContext(fr),{matches:i}=k.useContext(Mn),{pathname:s}=Ol(),o=JSON.stringify(Hv(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return Gv(()=>{a.current=!0}),k.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=qv(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:wn([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function tI(){let{matches:t}=k.useContext(Mn),e=t[t.length-1];return e?e.params:{}}function Qv(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=k.useContext(fr),{matches:i}=k.useContext(Mn),{pathname:s}=Ol(),o=JSON.stringify(Hv(i,r.v7_relativeSplatPath));return k.useMemo(()=>qv(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function nI(t,e){return rI(t,e)}function rI(t,e,n,r){uo()||pe(!1);let{navigator:i}=k.useContext(fr),{matches:s}=k.useContext(Mn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ol(),c;if(e){var d;let h=typeof e=="string"?Ei(e):e;l==="/"||(d=h.pathname)!=null&&d.startsWith(l)||pe(!1),c=h}else c=u;let p=c.pathname||"/",g=p;if(l!=="/"){let h=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(h.length).join("/")}let E=RS(t,{pathname:g}),w=lI(E&&E.map(h=>Object.assign({},h,{params:Object.assign({},a,h.params),pathname:wn([l,i.encodeLocation?i.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?l:wn([l,i.encodeLocation?i.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),s,n,r);return e&&w?k.createElement(Dl.Provider,{value:{location:bs({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ln.Pop}},w):w}function iI(){let t=dI(),e=QS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,null)}const sI=k.createElement(iI,null);class oI extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement(Mn.Provider,{value:this.props.routeContext},k.createElement(Kv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function aI(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(Rd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Mn.Provider,{value:e},r)}function lI(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||pe(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:g}=n,E=d.route.loader&&p[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||E){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,p)=>{let g,E=!1,w=null,h=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||sI,l&&(u<0&&p===0?(pI("route-fallback",!1),E=!0,h=null):u===p&&(E=!0,h=d.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,p+1)),m=()=>{let y;return g?y=w:E?y=h:d.route.Component?y=k.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,k.createElement(aI,{match:d,routeContext:{outlet:c,matches:f,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?k.createElement(oI,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var Yv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Yv||{}),Ka=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ka||{});function uI(t){let e=k.useContext(Rd);return e||pe(!1),e}function cI(t){let e=k.useContext(XS);return e||pe(!1),e}function hI(t){let e=k.useContext(Mn);return e||pe(!1),e}function Xv(t){let e=hI(),n=e.matches[e.matches.length-1];return n.route.id||pe(!1),n.route.id}function dI(){var t;let e=k.useContext(Kv),n=cI(Ka.UseRouteError),r=Xv(Ka.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function fI(){let{router:t}=uI(Yv.UseNavigateStable),e=Xv(Ka.UseNavigateStable),n=k.useRef(!1);return Gv(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,bs({fromRouteId:e},s)))},[t,e])}const ym={};function pI(t,e,n){!e&&!ym[t]&&(ym[t]=!0)}function Xt(t){pe(!1)}function mI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ln.Pop,navigator:s,static:o=!1,future:a}=t;uo()&&pe(!1);let l=e.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:s,static:o,future:bs({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ei(r));let{pathname:c="/",search:d="",hash:p="",state:g=null,key:E="default"}=r,w=k.useMemo(()=>{let h=Ad(c,l);return h==null?null:{location:{pathname:h,search:d,hash:p,state:g,key:E},navigationType:i}},[l,c,d,p,g,E,i]);return w==null?null:k.createElement(fr.Provider,{value:u},k.createElement(Dl.Provider,{children:n,value:w}))}function gI(t){let{children:e,location:n}=t;return nI(Xc(e),n)}new Promise(()=>{});function Xc(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){n.push.apply(n,Xc(r.props.children,s));return}r.type!==Xt&&pe(!1),!r.props.index||!r.props.children||pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Xc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jc(){return Jc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jc.apply(this,arguments)}function yI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function wI(t,e){return t.button===0&&(!e||e==="_self")&&!vI(t)}const EI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],_I="6";try{window.__reactRouterVersion=_I}catch{}const SI="startTransition",vm=AE[SI];function II(t){let{basename:e,children:n,future:r,window:i}=t,s=k.useRef();s.current==null&&(s.current=kS({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=k.useCallback(d=>{u&&vm?vm(()=>l(d)):l(d)},[l,u]);return k.useLayoutEffect(()=>o.listen(c),[o,c]),k.createElement(mI,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const TI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hr=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,p=yI(e,EI),{basename:g}=k.useContext(fr),E,w=!1;if(typeof u=="string"&&CI.test(u)&&(E=u,TI))try{let y=new URL(window.location.href),v=u.startsWith("//")?new URL(y.protocol+u):new URL(u),P=Ad(v.pathname,g);v.origin===y.origin&&P!=null?u=P+v.search+v.hash:w=!0}catch{}let h=JS(u,{relative:i}),f=kI(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function m(y){r&&r(y),y.defaultPrevented||f(y)}return k.createElement("a",Jc({},p,{href:E||h,onClick:w||s?r:m,ref:n,target:l}))});var wm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wm||(wm={}));var Em;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Em||(Em={}));function kI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=ZS(),u=Ol(),c=Qv(t,{relative:o});return k.useCallback(d=>{if(wI(d,n)){d.preventDefault();let p=r!==void 0?r:Wa(u)===Wa(c);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}var Jv={exports:{}},co={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NI=k,Zv=60103;co.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var _m=Symbol.for;Zv=_m("react.element"),co.Fragment=_m("react.fragment")}var AI=NI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RI=Object.prototype.hasOwnProperty,xI={key:!0,ref:!0,__self:!0,__source:!0};function e0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)RI.call(e,r)&&!xI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Zv,type:t,key:s,ref:o,props:i,_owner:AI.current}}co.jsx=e0;co.jsxs=e0;Jv.exports=co;var xd=Jv.exports;const T=xd.jsx,W=xd.jsxs,t0=xd.Fragment,n0=k.createContext(),PI=({children:t})=>{const[e,n]=k.useState(null);return T(n0.Provider,{value:{user:e,setUser:n},children:t})},Ll=()=>{const t=k.useContext(n0);if(!t)throw new Error("useUserContext must be used within a UserContextProvider");return t},r0=k.createContext(),DI=({children:t})=>{const[e,n]=k.useState([]),r=i=>{const s=[...e];s.splice(i,1),n(s)};return T(r0.Provider,{value:{carrito:e,setCarrito:n,eliminarProducto:r},children:t})},Ml=()=>{const t=k.useContext(r0);if(!t)throw new Error("useCarritoContext must be used within a CarritoContextProvider");return t};var i0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sm=cn.createContext&&cn.createContext(i0),En=function(){return En=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},En.apply(this,arguments)},OI=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function s0(t){return t&&t.map(function(e,n){return cn.createElement(e.tag,En({key:n},e.attr),s0(e.child))})}function Pd(t){return function(e){return cn.createElement(LI,En({attr:En({},t.attr)},e),s0(t.child))}}function LI(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=OI(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),cn.createElement("svg",En({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:En(En({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&cn.createElement("title",null,s),t.children)};return Sm!==void 0?cn.createElement(Sm.Consumer,null,function(n){return e(n)}):e(i0)}function MI(t){return Pd({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"}}]})(t)}function $I(t){return Pd({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]})(t)}function pr({children:t}){const{carrito:e}=Ml();return k.useState(""),W("div",{className:"w-screen h-screen flex flex-col overflow-x-hidden relative",children:[T("header",{className:"w-full text-white bg-azul",children:W("nav",{className:"w-full flex items-center justify-between px-10 py-5",children:[T(Hr,{to:"/",className:"font-bold italic text-3xl",children:"JBL SHOP"}),W("div",{className:"flex",children:[W(Hr,{to:"/carrito",className:"mx-5 relative",children:[T("span",{className:`absolute w-3 h-3 rounded-full bg-red-600 top-0 right-0 translate-x-1/2 -translate-y-1/2 ${e.length>0?"opacity-100":"opacity-0"}`}),T(MI,{size:30})]}),T(Hr,{to:"/perfil",children:T($I,{size:30})})]})]})}),T("main",{className:"w-full h-full flex flex-col justify-center items-center",children:t}),T("footer",{className:"mt-10 bg-black text-white py-5 px-10 w-full",children:T("div",{className:"w-full h-full flex items-center justify-center",children:T("span",{className:"text-bold text-xl",children:" La Mejor Tienda Para Comprar Tus Productos JBL."})})})]})}function bI({product:t}){return T(Hr,{to:`/producto/${t.id}`,children:T("div",{className:"w-100 h-100 p-4 flex justify-center",children:W("div",{className:"flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl w-100 h-100",children:[T("img",{src:t.images[0],alt:t.name,className:"w-full h-full object-cover"}),W("div",{className:"p-4 w-full",children:[T("h3",{className:"font-bold text-xl mb-2",children:t.name}),W("div",{className:"flex items-center",children:[W("p",{className:"text-gray-600 line-through",children:["$",t.price.unit_amount*1.5/100]}),T("span",{className:"mx-2",children:" →"}),W("span",{className:"flex items-center",children:[W("p",{className:"font-bold mx-1 text-lg",children:["$",t.price.unit_amount/100]}),t.price.currency]})]})]})]})})})}function FI({productos:t,title:e}){const[n,r]=k.useState(1),i=5;if(!t)return null;const s=n*i,o=s-i,a=t.slice(o,s),l=Math.ceil(t.length/i),u=c=>{r(c)};return W(t0,{children:[W("h3",{className:"text-2xl font-bold underline self-start ml-10 my-10",children:[e,":"]}),T("div",{className:"flex flex-row w-full overflow-x-auto",children:T("ul",{className:"flex items-center",children:a.map(c=>T("li",{children:T(bI,{product:c})},c.id))})}),W("div",{className:"flex justify-center mt-4",children:[T("button",{onClick:()=>u(n-1),disabled:n===1,className:"mr-2 px-4 py-2 bg-gray-200 rounded-md",children:"Anterior"}),T("button",{onClick:()=>u(n+1),disabled:n===l,className:"ml-2 px-4 py-2 bg-gray-200 rounded-md",children:"Siguiente"})]})]})}function UI({producto:t,index:e}){const{eliminarProducto:n}=Ml(),r=()=>{n(e)};return W("div",{className:"w-1/2 mx-auto  flex justify-around items-center text-xl border-slate-200 border-2 my-3 rounded-lg",children:[T("div",{className:"w-1/4",children:T("img",{src:t.images[0],alt:"",className:"w-2/3 rounded-md"})}),T("div",{children:T("h3",{children:t.name})}),T("div",{children:W("p",{children:["$",t.price.unit_amount/100]})}),T("div",{children:T("button",{onClick:r,className:"text-red-500",children:"Eliminar"})})]})}function VI({onSubmit:t}){return W("form",{onSubmit:e=>t(e),className:"flex flex-col w-full items-center",children:[T("input",{className:"w-5/6 border-2 border-slate-300 px-5 py-2 my-1 rounded-md",type:"text",name:"email",placeholder:"test@test.com"}),T("input",{className:"w-5/6 border-2 border-slate-300 px-5 py-2 my-1 rounded-md",type:"password",name:"password",placeholder:"123456"}),T("button",{className:"bg-azul px-5 py-2 rounded-md my-1 text-white hover:bg-blue-700 ",children:"Iniciar Sesión"})]})}var Im={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},a0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[c],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new BI;const p=s<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const E=u<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class BI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zI=function(t){const e=o0(t);return a0.encodeByteArray(e,!0)},Ga=function(t){return zI(t).replace(/\./g,"")},l0=function(t){try{return a0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=()=>HI().__FIREBASE_DEFAULTS__,WI=()=>{if(typeof process>"u"||typeof Im>"u")return;const t=Im.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&l0(t[1]);return e&&JSON.parse(e)},Dd=()=>{try{return qI()||WI()||KI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},u0=t=>{var e,n;return(n=(e=Dd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},GI=t=>{const e=u0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},c0=()=>{var t;return(t=Dd())===null||t===void 0?void 0:t.config},h0=t=>{var e;return(e=Dd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ga(JSON.stringify(n)),Ga(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function JI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ZI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eT(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tT(){try{return typeof indexedDB=="object"}catch{return!1}}function nT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rT,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ho.prototype.create)}}class ho{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?iT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Qt(i,a,r)}}function iT(t,e){return t.replace(sT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sT=/\{\$([^}]+)}/g;function oT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Tm(s)&&Tm(o)){if(!Qa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ji(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function aT(t,e){const n=new lT(t,e);return n.subscribe.bind(n)}class lT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hu),i.error===void 0&&(i.error=Hu),i.complete===void 0&&(i.complete=Hu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dT(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hT(t){return t===Bn?void 0:t}function dT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const pT={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},mT=Q.INFO,gT={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},yT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Od{constructor(e){this.name=e,this._logLevel=mT,this._logHandler=yT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const vT=(t,e)=>e.some(n=>t instanceof n);let Cm,km;function wT(){return Cm||(Cm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ET(){return km||(km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d0=new WeakMap,Zc=new WeakMap,f0=new WeakMap,qu=new WeakMap,Ld=new WeakMap;function _T(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_n(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&d0.set(n,t)}).catch(()=>{}),Ld.set(e,t),e}function ST(t){if(Zc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zc.set(t,e)}let eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||f0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IT(t){eh=t(eh)}function TT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wu(this),e,...n);return f0.set(r,e.sort?e.sort():[e]),_n(r)}:ET().includes(t)?function(...e){return t.apply(Wu(this),e),_n(d0.get(this))}:function(...e){return _n(t.apply(Wu(this),e))}}function CT(t){return typeof t=="function"?TT(t):(t instanceof IDBTransaction&&ST(t),vT(t,wT())?new Proxy(t,eh):t)}function _n(t){if(t instanceof IDBRequest)return _T(t);if(qu.has(t))return qu.get(t);const e=CT(t);return e!==t&&(qu.set(t,e),Ld.set(e,t)),e}const Wu=t=>Ld.get(t);function kT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=_n(o);return r&&o.addEventListener("upgradeneeded",l=>{r(_n(o.result),l.oldVersion,l.newVersion,_n(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const NT=["get","getKey","getAll","getAllKeys","count"],AT=["put","add","delete","clear"],Ku=new Map;function Nm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ku.get(e))return Ku.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=AT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||NT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ku.set(e,s),s}IT(t=>({...t,get:(e,n,r)=>Nm(e,n)||t.get(e,n,r),has:(e,n)=>!!Nm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const th="@firebase/app",Am="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Od("@firebase/app"),PT="@firebase/app-compat",DT="@firebase/analytics-compat",OT="@firebase/analytics",LT="@firebase/app-check-compat",MT="@firebase/app-check",$T="@firebase/auth",bT="@firebase/auth-compat",FT="@firebase/database",UT="@firebase/database-compat",VT="@firebase/functions",jT="@firebase/functions-compat",BT="@firebase/installations",zT="@firebase/installations-compat",HT="@firebase/messaging",qT="@firebase/messaging-compat",WT="@firebase/performance",KT="@firebase/performance-compat",GT="@firebase/remote-config",QT="@firebase/remote-config-compat",YT="@firebase/storage",XT="@firebase/storage-compat",JT="@firebase/firestore",ZT="@firebase/firestore-compat",eC="firebase",tC="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="[DEFAULT]",nC={[th]:"fire-core",[PT]:"fire-core-compat",[OT]:"fire-analytics",[DT]:"fire-analytics-compat",[MT]:"fire-app-check",[LT]:"fire-app-check-compat",[$T]:"fire-auth",[bT]:"fire-auth-compat",[FT]:"fire-rtdb",[UT]:"fire-rtdb-compat",[VT]:"fire-fn",[jT]:"fire-fn-compat",[BT]:"fire-iid",[zT]:"fire-iid-compat",[HT]:"fire-fcm",[qT]:"fire-fcm-compat",[WT]:"fire-perf",[KT]:"fire-perf-compat",[GT]:"fire-rc",[QT]:"fire-rc-compat",[YT]:"fire-gcs",[XT]:"fire-gcs-compat",[JT]:"fire-fst",[ZT]:"fire-fst-compat","fire-js":"fire-js",[eC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=new Map,rh=new Map;function rC(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ti(t){const e=t.name;if(rh.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;rh.set(e,t);for(const n of Ya.values())rC(n,t);return!0}function Md(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Sn=new ho("app","Firebase",iC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=tC;function p0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sn.create("bad-app-name",{appName:String(i)});if(n||(n=c0()),!n)throw Sn.create("no-options");const s=Ya.get(i);if(s){if(Qa(n,s.options)&&Qa(r,s.config))return s;throw Sn.create("duplicate-app",{appName:i})}const o=new fT(i);for(const l of rh.values())o.addComponent(l);const a=new sC(n,r,o);return Ya.set(i,a),a}function m0(t=nh){const e=Ya.get(t);if(!e&&t===nh&&c0())return p0();if(!e)throw Sn.create("no-app",{appName:t});return e}function In(t,e,n){var r;let i=(r=nC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}ti(new rr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="firebase-heartbeat-database",aC=1,Fs="firebase-heartbeat-store";let Gu=null;function g0(){return Gu||(Gu=kT(oC,aC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fs)}}}).catch(t=>{throw Sn.create("idb-open",{originalErrorMessage:t.message})})),Gu}async function lC(t){try{return await(await g0()).transaction(Fs).objectStore(Fs).get(y0(t))}catch(e){if(e instanceof Qt)ir.warn(e.message);else{const n=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function Rm(t,e){try{const r=(await g0()).transaction(Fs,"readwrite");await r.objectStore(Fs).put(e,y0(t)),await r.done}catch(n){if(n instanceof Qt)ir.warn(n.message);else{const r=Sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function y0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=1024,cC=30*24*60*60*1e3;class hC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=cC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xm(),{heartbeatsToSend:n,unsentEntries:r}=dC(this._heartbeatsCache.heartbeats),i=Ga(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xm(){return new Date().toISOString().substring(0,10)}function dC(t,e=uC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tT()?nT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pm(t){return Ga(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t){ti(new rr("platform-logger",e=>new RT(e),"PRIVATE")),ti(new rr("heartbeat",e=>new hC(e),"PRIVATE")),In(th,Am,t),In(th,Am,"esm2017"),In("fire-js","")}pC("");var mC="firebase",gC="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(mC,gC,"app");var yC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,$d=$d||{},j=yC||self;function $l(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function po(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function vC(t){return Object.prototype.hasOwnProperty.call(t,Qu)&&t[Qu]||(t[Qu]=++wC)}var Qu="closure_uid_"+(1e9*Math.random()>>>0),wC=0;function EC(t,e,n){return t.call.apply(t.bind,arguments)}function _C(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Fe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Fe=EC:Fe=_C,Fe.apply(null,arguments)}function Go(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Se(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function $n(){this.s=this.s,this.o=this.o}var SC=0;$n.prototype.s=!1;$n.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),SC!=0)&&vC(this)};$n.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const v0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function bd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Dm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if($l(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ue(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var IC=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",()=>{},e),j.removeEventListener("test",()=>{},e)}catch{}return t}();function Us(t){return/^[\s\xa0]*$/.test(t)}function bl(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function vt(t){return bl().indexOf(t)!=-1}function Fd(t){return Fd[" "](t),t}Fd[" "]=function(){};function TC(t,e){var n=gk;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var CC=vt("Opera"),ni=vt("Trident")||vt("MSIE"),w0=vt("Edge"),ih=w0||ni,E0=vt("Gecko")&&!(bl().toLowerCase().indexOf("webkit")!=-1&&!vt("Edge"))&&!(vt("Trident")||vt("MSIE"))&&!vt("Edge"),kC=bl().toLowerCase().indexOf("webkit")!=-1&&!vt("Edge");function _0(){var t=j.document;return t?t.documentMode:void 0}var sh;e:{var Yu="",Xu=function(){var t=bl();if(E0)return/rv:([^\);]+)(\)|;)/.exec(t);if(w0)return/Edge\/([\d\.]+)/.exec(t);if(ni)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kC)return/WebKit\/(\S+)/.exec(t);if(CC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xu&&(Yu=Xu?Xu[1]:""),ni){var Ju=_0();if(Ju!=null&&Ju>parseFloat(Yu)){sh=String(Ju);break e}}sh=Yu}var oh;if(j.document&&ni){var Om=_0();oh=Om||parseInt(sh,10)||void 0}else oh=void 0;var NC=oh;function Vs(t,e){if(Ue.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(E0){e:{try{Fd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:AC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vs.$.h.call(this)}}Se(Vs,Ue);var AC={2:"touch",3:"pen",4:"mouse"};Vs.prototype.h=function(){Vs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var mo="closure_listenable_"+(1e6*Math.random()|0),RC=0;function xC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++RC,this.fa=this.ia=!1}function Fl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ud(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function PC(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function S0(t){const e={};for(const n in t)e[n]=t[n];return e}const Lm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Lm.length;s++)n=Lm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ul(t){this.src=t,this.g={},this.h=0}Ul.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=lh(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new xC(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function ah(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=v0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Fl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function lh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Vd="closure_lm_"+(1e6*Math.random()|0),Zu={};function T0(t,e,n,r,i){if(r&&r.once)return k0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)T0(t,e[s],n,r,i);return null}return n=zd(n),t&&t[mo]?t.O(e,n,po(r)?!!r.capture:!!r,i):C0(t,e,n,!1,r,i)}function C0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=po(i)?!!i.capture:!!i,a=Bd(t);if(a||(t[Vd]=a=new Ul(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=DC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)IC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(A0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function DC(){function t(n){return e.call(t.src,t.listener,n)}const e=OC;return t}function k0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)k0(t,e[s],n,r,i);return null}return n=zd(n),t&&t[mo]?t.P(e,n,po(r)?!!r.capture:!!r,i):C0(t,e,n,!0,r,i)}function N0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)N0(t,e[s],n,r,i);else r=po(r)?!!r.capture:!!r,n=zd(n),t&&t[mo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=lh(s,n,r,i),-1<n&&(Fl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Bd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lh(e,n,r,i)),(n=-1<t?e[t]:null)&&jd(n))}function jd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[mo])ah(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(A0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Bd(e))?(ah(n,t),n.h==0&&(n.src=null,e[Vd]=null)):Fl(t)}}}function A0(t){return t in Zu?Zu[t]:Zu[t]="on"+t}function OC(t,e){if(t.fa)t=!0;else{e=new Vs(e,this);var n=t.listener,r=t.la||t.src;t.ia&&jd(t),t=n.call(r,e)}return t}function Bd(t){return t=t[Vd],t instanceof Ul?t:null}var ec="__closure_events_fn_"+(1e9*Math.random()>>>0);function zd(t){return typeof t=="function"?t:(t[ec]||(t[ec]=function(e){return t.handleEvent(e)}),t[ec])}function _e(){$n.call(this),this.i=new Ul(this),this.S=this,this.J=null}Se(_e,$n);_e.prototype[mo]=!0;_e.prototype.removeEventListener=function(t,e,n,r){N0(this,t,e,n,r)};function Ae(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ue(e,t);else if(e instanceof Ue)e.target=e.target||t;else{var i=e;e=new Ue(r,t),I0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Qo(o,r,!0,e)&&i}if(o=e.g=t,i=Qo(o,r,!0,e)&&i,i=Qo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Qo(o,r,!1,e)&&i}_e.prototype.N=function(){if(_e.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fl(n[r]);delete t.g[e],t.h--}}this.J=null};_e.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};_e.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Qo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ah(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Hd=j.JSON.stringify;class LC{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function MC(){var t=qd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $C{constructor(){this.h=this.g=null}add(e,n){const r=R0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var R0=new LC(()=>new bC,t=>t.reset());class bC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function FC(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function UC(t){j.setTimeout(()=>{throw t},0)}let js,Bs=!1,qd=new $C,x0=()=>{const t=j.Promise.resolve(void 0);js=()=>{t.then(VC)}};var VC=()=>{for(var t;t=MC();){try{t.h.call(t.g)}catch(n){UC(n)}var e=R0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bs=!1};function Vl(t,e){_e.call(this),this.h=t||1,this.g=e||j,this.j=Fe(this.qb,this),this.l=Date.now()}Se(Vl,_e);N=Vl.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ae(this,"tick"),this.ga&&(Wd(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Vl.$.N.call(this),Wd(this),delete this.g};function Kd(t,e,n){if(typeof t=="function")n&&(t=Fe(t,n));else if(t&&typeof t.handleEvent=="function")t=Fe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function P0(t){t.g=Kd(()=>{t.g=null,t.i&&(t.i=!1,P0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jC extends $n{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:P0(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zs(t){$n.call(this),this.h=t,this.g={}}Se(zs,$n);var Mm=[];function D0(t,e,n,r){Array.isArray(n)||(n&&(Mm[0]=n.toString()),n=Mm);for(var i=0;i<n.length;i++){var s=T0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function O0(t){Ud(t.g,function(e,n){this.g.hasOwnProperty(n)&&jd(e)},t),t.g={}}zs.prototype.N=function(){zs.$.N.call(this),O0(this)};zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jl(){this.g=!0}jl.prototype.Ea=function(){this.g=!1};function BC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function zC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Dr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qC(t,n)+(r?" "+r:"")})}function HC(t,e){t.info(function(){return"TIMEOUT: "+e})}jl.prototype.info=function(){};function qC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Hd(n)}catch{return e}}var mr={},$m=null;function Bl(){return $m=$m||new _e}mr.Ta="serverreachability";function L0(t){Ue.call(this,mr.Ta,t)}Se(L0,Ue);function Hs(t){const e=Bl();Ae(e,new L0(e))}mr.STAT_EVENT="statevent";function M0(t,e){Ue.call(this,mr.STAT_EVENT,t),this.stat=e}Se(M0,Ue);function qe(t){const e=Bl();Ae(e,new M0(e,t))}mr.Ua="timingevent";function $0(t,e){Ue.call(this,mr.Ua,t),this.size=e}Se($0,Ue);function go(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var zl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},b0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gd(){}Gd.prototype.h=null;function bm(t){return t.h||(t.h=t.i())}function F0(){}var yo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Qd(){Ue.call(this,"d")}Se(Qd,Ue);function Yd(){Ue.call(this,"c")}Se(Yd,Ue);var uh;function Hl(){}Se(Hl,Gd);Hl.prototype.g=function(){return new XMLHttpRequest};Hl.prototype.i=function(){return{}};uh=new Hl;function vo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new zs(this),this.P=WC,t=ih?125:void 0,this.V=new Vl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new U0}function U0(){this.i=null,this.g="",this.h=!1}var WC=45e3,ch={},Xa={};N=vo.prototype;N.setTimeout=function(t){this.P=t};function hh(t,e,n){t.L=1,t.v=Wl(zt(e)),t.s=n,t.S=!0,V0(t,null)}function V0(t,e){t.G=Date.now(),wo(t),t.A=zt(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),G0(n.i,"t",r),t.C=0,n=t.l.J,t.h=new U0,t.g=mw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new jC(Fe(t.Pa,t,t.g),t.O)),D0(t.U,t.g,"readystatechange",t.nb),e=t.I?S0(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Hs(),BC(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&St(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const c=St(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||ih||this.g&&(this.h.h||this.g.ja()||jm(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Hs(3):Hs(2)),ql(this);var n=this.g.da();this.ca=n;t:if(j0(this)){var r=jm(this.g);t="";var i=r.length,s=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gn(this),gs(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,zC(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Us(a)){var u=a;break t}}u=null}if(n=u)Dr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dh(this,n);else{this.i=!1,this.o=3,qe(12),Gn(this),gs(this);break e}}this.S?(B0(this,c,o),ih&&this.i&&c==3&&(D0(this.U,this.V,"tick",this.mb),this.V.start())):(Dr(this.j,this.m,o,null),dh(this,o)),c==4&&Gn(this),this.i&&!this.J&&(c==4?hw(this.l,this):(this.i=!1,wo(this)))}else fk(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,qe(12)):(this.o=0,qe(13)),Gn(this),gs(this)}}}catch{}finally{}};function j0(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function B0(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=KC(t,n),i==Xa){e==4&&(t.o=4,qe(14),r=!1),Dr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ch){t.o=4,qe(15),Dr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Dr(t.j,t.m,i,null),dh(t,i);j0(t)&&i!=Xa&&i!=ch&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,qe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nf(e),e.M=!0,qe(11))):(Dr(t.j,t.m,n,"[Invalid Chunked Response]"),Gn(t),gs(t))}N.mb=function(){if(this.g){var t=St(this.g),e=this.g.ja();this.C<e.length&&(ql(this),B0(this,t,e),this.i&&t!=4&&wo(this))}};function KC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Xa:(n=Number(e.substring(n,r)),isNaN(n)?ch:(r+=1,r+n>e.length?Xa:(e=e.slice(r,r+n),t.C=r+n,e)))}N.cancel=function(){this.J=!0,Gn(this)};function wo(t){t.Y=Date.now()+t.P,z0(t,t.P)}function z0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=go(Fe(t.lb,t),e)}function ql(t){t.B&&(j.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(HC(this.j,this.A),this.L!=2&&(Hs(),qe(17)),Gn(this),this.o=2,gs(this)):z0(this,this.Y-t)};function gs(t){t.l.H==0||t.J||hw(t.l,t)}function Gn(t){ql(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Wd(t.V),O0(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function dh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||fh(n.i,t))){if(!t.K&&fh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)el(n),Ql(n);else break e;tf(n),qe(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=go(Fe(n.ib,n),6e3));if(1>=X0(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Qn(n,11)}else if((t.K||n.g==t)&&el(n),!Us(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const E=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Xd(s,s.h),s.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,ee(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=pw(r,r.J?r.pa:null,r.Y),o.K){J0(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ql(a),wo(a)),r.g=o}else uw(r);0<n.j.length&&Yl(n)}else u[0]!="stop"&&u[0]!="close"||Qn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Qn(n,7):ef(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Hs(4)}catch{}}function GC(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if($l(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function QC(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if($l(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function H0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if($l(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=QC(t),r=GC(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var q0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Jn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Jn){this.h=t.h,Ja(this,t.j),this.s=t.s,this.g=t.g,Za(this,t.m),this.l=t.l;var e=t.i,n=new qs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Fm(this,n),this.o=t.o}else t&&(e=String(t).match(q0))?(this.h=!1,Ja(this,e[1]||"",!0),this.s=Zi(e[2]||""),this.g=Zi(e[3]||"",!0),Za(this,e[4]),this.l=Zi(e[5]||"",!0),Fm(this,e[6]||"",!0),this.o=Zi(e[7]||"")):(this.h=!1,this.i=new qs(null,this.h))}Jn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(es(e,Um,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(es(e,Um,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(es(n,n.charAt(0)=="/"?ZC:JC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",es(n,tk)),t.join("")};function zt(t){return new Jn(t)}function Ja(t,e,n){t.j=n?Zi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Za(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fm(t,e,n){e instanceof qs?(t.i=e,nk(t.i,t.h)):(n||(e=es(e,ek)),t.i=new qs(e,t.h))}function ee(t,e,n){t.i.set(e,n)}function Wl(t){return ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Zi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function es(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,XC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function XC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Um=/[#\/\?@]/g,JC=/[#\?:]/g,ZC=/[#\?]/g,ek=/[#\?@]/g,tk=/#/g;function qs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function bn(t){t.g||(t.g=new Map,t.h=0,t.i&&YC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=qs.prototype;N.add=function(t,e){bn(this),this.i=null,t=Si(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function W0(t,e){bn(t),e=Si(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function K0(t,e){return bn(t),e=Si(t,e),t.g.has(e)}N.forEach=function(t,e){bn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};N.ta=function(){bn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};N.Z=function(t){bn(this);let e=[];if(typeof t=="string")K0(this,t)&&(e=e.concat(this.g.get(Si(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return bn(this),this.i=null,t=Si(this,t),K0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function G0(t,e,n){W0(t,e),0<n.length&&(t.i=null,t.g.set(Si(t,e),bd(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Si(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function nk(t,e){e&&!t.j&&(bn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(W0(this,r),G0(this,i,n))},t)),t.j=e}var rk=class{constructor(t,e){this.g=t,this.map=e}};function Q0(t){this.l=t||ik,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ik=10;function Y0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function X0(t){return t.h?1:t.g?t.g.size:0}function fh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xd(t,e){t.g?t.g.add(e):t.h=e}function J0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Q0.prototype.cancel=function(){if(this.i=Z0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Z0(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return bd(t.i)}var sk=class{stringify(t){return j.JSON.stringify(t,void 0)}parse(t){return j.JSON.parse(t,void 0)}};function ok(){this.g=new sk}function ak(t,e,n){const r=n||"";try{H0(t,function(i,s){let o=i;po(i)&&(o=Hd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function lk(t,e){const n=new jl;if(j.Image){const r=new Image;r.onload=Go(Yo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Go(Yo,n,r,"TestLoadImage: error",!1,e),r.onabort=Go(Yo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Go(Yo,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Yo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Eo(t){this.l=t.fc||null,this.j=t.ob||!1}Se(Eo,Gd);Eo.prototype.g=function(){return new Kl(this.l,this.j)};Eo.prototype.i=function(t){return function(){return t}}({});function Kl(t,e){_e.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Jd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Se(Kl,_e);var Jd=0;N=Kl.prototype;N.open=function(t,e){if(this.readyState!=Jd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ws(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_o(this)),this.readyState=Jd};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ws(this)),this.g&&(this.readyState=3,Ws(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ew(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function ew(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_o(this):Ws(this),this.readyState==3&&ew(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,_o(this))};N.Ya=function(t){this.g&&(this.response=t,_o(this))};N.ka=function(){this.g&&_o(this)};function _o(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ws(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ws(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Kl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var uk=j.JSON.parse;function le(t){_e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tw,this.L=this.M=!1}Se(le,_e);var tw="",ck=/^https?$/i,hk=["POST","PUT"];N=le.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():uh.g(),this.C=this.u?bm(this.u):bm(uh),this.g.onreadystatechange=Fe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Vm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=j.FormData&&t instanceof j.FormData,!(0<=v0(hk,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{iw(this),0<this.B&&((this.L=dk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fe(this.ua,this)):this.A=Kd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Vm(this,s)}};function dk(t){return ni&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof $d<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function Vm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nw(t),Gl(t)}function nw(t){t.F||(t.F=!0,Ae(t,"complete"),Ae(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),Gl(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gl(this,!0)),le.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?rw(this):this.kb())};N.kb=function(){rw(this)};function rw(t){if(t.h&&typeof $d<"u"&&(!t.C[1]||St(t)!=4||t.da()!=2)){if(t.v&&St(t)==4)Kd(t.La,0,t);else if(Ae(t,"readystatechange"),St(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(q0)[1]||null;!i&&j.self&&j.self.location&&(i=j.self.location.protocol.slice(0,-1)),r=!ck.test(i?i.toLowerCase():"")}n=r}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var s=2<St(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",nw(t)}}finally{Gl(t)}}}}function Gl(t,e){if(t.g){iw(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=r}catch{}}}function iw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function St(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),uk(e)}};function jm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case tw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function fk(t){const e={};t=(t.g&&2<=St(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Us(t[r]))continue;var n=FC(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}PC(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sw(t){let e="";return Ud(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=sw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ee(t,e,n))}function Hi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ow(t){this.Ga=0,this.j=[],this.l=new jl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hi("baseRetryDelayMs",5e3,t),this.hb=Hi("retryDelaySeedMs",1e4,t),this.eb=Hi("forwardChannelMaxRetries",2,t),this.xa=Hi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Q0(t&&t.concurrentRequestLimit),this.Ja=new ok,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=ow.prototype;N.ra=8;N.H=1;function ef(t){if(aw(t),t.H==3){var e=t.W++,n=zt(t.I);if(ee(n,"SID",t.K),ee(n,"RID",e),ee(n,"TYPE","terminate"),So(t,n),e=new vo(t,t.l,e),e.L=2,e.v=Wl(zt(n)),n=!1,j.navigator&&j.navigator.sendBeacon)try{n=j.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=mw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),wo(e)}fw(t)}function Ql(t){t.g&&(nf(t),t.g.cancel(),t.g=null)}function aw(t){Ql(t),t.u&&(j.clearTimeout(t.u),t.u=null),el(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function Yl(t){if(!Y0(t.i)&&!t.m){t.m=!0;var e=t.Na;js||x0(),Bs||(js(),Bs=!0),qd.add(e,t),t.C=0}}function pk(t,e){return X0(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=go(Fe(t.Na,t,e),dw(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new vo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=S0(s),I0(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=lw(this,i,e),n=zt(this.I),ee(n,"RID",t),ee(n,"CVER",22),this.F&&ee(n,"X-HTTP-Session-Id",this.F),So(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(sw(s)))+"&"+e:this.o&&Zd(n,this.o,s)),Xd(this.i,i),this.bb&&ee(n,"TYPE","init"),this.P?(ee(n,"$req",e),ee(n,"SID","null"),i.aa=!0,hh(i,n,null)):hh(i,n,e),this.H=2}}else this.H==3&&(t?Bm(this,t):this.j.length==0||Y0(this.i)||Bm(this))};function Bm(t,e){var n;e?n=e.m:n=t.W++;const r=zt(t.I);ee(r,"SID",t.K),ee(r,"RID",n),ee(r,"AID",t.V),So(t,r),t.o&&t.s&&Zd(r,t.o,t.s),n=new vo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=lw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Xd(t.i,n),hh(n,r,e)}function So(t,e){t.na&&Ud(t.na,function(n,r){ee(e,r,n)}),t.h&&H0({},function(n,r){ee(e,r,n)})}function lw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Fe(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{ak(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function uw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;js||x0(),Bs||(js(),Bs=!0),qd.add(e,t),t.A=0}}function tf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=go(Fe(t.Ma,t),dw(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,cw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=go(Fe(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,qe(10),Ql(this),cw(this))};function nf(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function cw(t){t.g=new vo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=zt(t.wa);ee(e,"RID","rpc"),ee(e,"SID",t.K),ee(e,"AID",t.V),ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ee(e,"TO",t.qa),ee(e,"TYPE","xmlhttp"),So(t,e),t.o&&t.s&&Zd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Wl(zt(e)),n.s=null,n.S=!0,V0(n,t)}N.ib=function(){this.v!=null&&(this.v=null,Ql(this),tf(this),qe(19))};function el(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function hw(t,e){var n=null;if(t.g==e){el(t),nf(t),t.g=null;var r=2}else if(fh(t.i,e))n=e.F,J0(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Bl(),Ae(r,new $0(r,n)),Yl(t)}else uw(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&pk(t,e)||r==2&&tf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Qn(t,5);break;case 4:Qn(t,10);break;case 3:Qn(t,6);break;default:Qn(t,2)}}}function dw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Qn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Fe(t.pb,t);n||(n=new Jn("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Ja(n,"https"),Wl(n)),lk(n.toString(),r)}else qe(2);t.H=0,t.h&&t.h.za(e),fw(t),aw(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),qe(2)):(this.l.info("Failed to ping google.com"),qe(1))};function fw(t){if(t.H=0,t.ma=[],t.h){const e=Z0(t.i);(e.length!=0||t.j.length!=0)&&(Dm(t.ma,e),Dm(t.ma,t.j),t.i.i.length=0,bd(t.j),t.j.length=0),t.h.ya()}}function pw(t,e,n){var r=n instanceof Jn?zt(n):new Jn(n);if(r.g!="")e&&(r.g=e+"."+r.g),Za(r,r.m);else{var i=j.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Jn(null);r&&Ja(s,r),e&&(s.g=e),i&&Za(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ee(r,n,e),ee(r,"VER",t.ra),So(t,r),r}function mw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new le(new Eo({ob:!0})):new le(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function gw(){}N=gw.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function tl(){if(ni&&!(10<=Number(NC)))throw Error("Environmental error: no available transport.")}tl.prototype.g=function(t,e){return new et(t,e)};function et(t,e){_e.call(this),this.g=new ow(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Us(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Us(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ii(this)}Se(et,_e);et.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;qe(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=pw(t,null,t.Y),Yl(t)};et.prototype.close=function(){ef(this.g)};et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Hd(t),t=n);e.j.push(new rk(e.fb++,t)),e.H==3&&Yl(e)};et.prototype.N=function(){this.g.h=null,delete this.j,ef(this.g),delete this.g,et.$.N.call(this)};function yw(t){Qd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Se(yw,Qd);function vw(){Yd.call(this),this.status=1}Se(vw,Yd);function Ii(t){this.g=t}Se(Ii,gw);Ii.prototype.Ba=function(){Ae(this.g,"a")};Ii.prototype.Aa=function(t){Ae(this.g,new yw(t))};Ii.prototype.za=function(t){Ae(this.g,new vw)};Ii.prototype.ya=function(){Ae(this.g,"b")};function mk(){this.blockSize=-1}function mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Se(mt,mk);mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function tc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}mt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)tc(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){tc(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){tc(this,r),i=0;break}}this.h=i,this.i+=e};mt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function X(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var gk={};function rf(t){return-128<=t&&128>t?TC(t,function(e){return new X([e|0],0>e?-1:0)}):new X([t|0],0>t?-1:0)}function It(t){if(isNaN(t)||!isFinite(t))return qr;if(0>t)return Ne(It(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ph;return new X(e,0)}function ww(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ne(ww(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=It(Math.pow(e,8)),r=qr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=It(Math.pow(e,s)),r=r.R(s).add(It(o))):(r=r.R(n),r=r.add(It(o)))}return r}var ph=4294967296,qr=rf(0),mh=rf(1),zm=rf(16777216);N=X.prototype;N.ea=function(){if(st(this))return-Ne(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ph+r)*e,e*=ph}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Mt(this))return"0";if(st(this))return"-"+Ne(this).toString(t);for(var e=It(Math.pow(t,6)),n=this,r="";;){var i=rl(n,e).g;n=nl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Mt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Mt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function st(t){return t.h==-1}N.X=function(t){return t=nl(this,t),st(t)?-1:Mt(t)?0:1};function Ne(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new X(n,~t.h).add(mh)}N.abs=function(){return st(this)?Ne(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new X(n,n[n.length-1]&-2147483648?-1:0)};function nl(t,e){return t.add(Ne(e))}N.R=function(t){if(Mt(this)||Mt(t))return qr;if(st(this))return st(t)?Ne(this).R(Ne(t)):Ne(Ne(this).R(t));if(st(t))return Ne(this.R(Ne(t)));if(0>this.X(zm)&&0>t.X(zm))return It(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Xo(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Xo(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Xo(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Xo(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new X(n,0)};function Xo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function qi(t,e){this.g=t,this.h=e}function rl(t,e){if(Mt(e))throw Error("division by zero");if(Mt(t))return new qi(qr,qr);if(st(t))return e=rl(Ne(t),e),new qi(Ne(e.g),Ne(e.h));if(st(e))return e=rl(t,Ne(e)),new qi(Ne(e.g),e.h);if(30<t.g.length){if(st(t)||st(e))throw Error("slowDivide_ only works with positive integers.");for(var n=mh,r=e;0>=r.X(t);)n=Hm(n),r=Hm(r);var i=_r(n,1),s=_r(r,1);for(r=_r(r,2),n=_r(n,2);!Mt(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=_r(r,1),n=_r(n,1)}return e=nl(t,i.R(e)),new qi(i,e)}for(i=qr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=It(n),o=s.R(e);st(o)||0<o.X(t);)n-=r,s=It(n),o=s.R(e);Mt(s)&&(s=mh),i=i.add(s),t=nl(t,o)}return new qi(i,t)}N.gb=function(t){return rl(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new X(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new X(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new X(n,this.h^t.h)};function Hm(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new X(n,t.h)}function _r(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new X(i,t.h)}tl.prototype.createWebChannel=tl.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;zl.NO_ERROR=0;zl.TIMEOUT=8;zl.HTTP_ERROR=6;b0.COMPLETE="complete";F0.EventType=yo;yo.OPEN="a";yo.CLOSE="b";yo.ERROR="c";yo.MESSAGE="d";_e.prototype.listen=_e.prototype.O;le.prototype.listenOnce=le.prototype.P;le.prototype.getLastError=le.prototype.Sa;le.prototype.getLastErrorCode=le.prototype.Ia;le.prototype.getStatus=le.prototype.da;le.prototype.getResponseJson=le.prototype.Wa;le.prototype.getResponseText=le.prototype.ja;le.prototype.send=le.prototype.ha;le.prototype.setWithCredentials=le.prototype.Oa;mt.prototype.digest=mt.prototype.l;mt.prototype.reset=mt.prototype.reset;mt.prototype.update=mt.prototype.j;X.prototype.add=X.prototype.add;X.prototype.multiply=X.prototype.R;X.prototype.modulo=X.prototype.gb;X.prototype.compare=X.prototype.X;X.prototype.toNumber=X.prototype.ea;X.prototype.toString=X.prototype.toString;X.prototype.getBits=X.prototype.D;X.fromNumber=It;X.fromString=ww;var yk=function(){return new tl},vk=function(){return Bl()},nc=zl,wk=b0,Ek=mr,qm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_k=Eo,Jo=F0,Sk=le,Ik=mt,Wr=X;const Wm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new Od("@firebase/firestore");function Km(){return sr.logLevel}function O(t,...e){if(sr.logLevel<=Q.DEBUG){const n=e.map(sf);sr.debug(`Firestore (${Ti}): ${t}`,...n)}}function Ht(t,...e){if(sr.logLevel<=Q.ERROR){const n=e.map(sf);sr.error(`Firestore (${Ti}): ${t}`,...n)}}function ri(t,...e){if(sr.logLevel<=Q.WARN){const n=e.map(sf);sr.warn(`Firestore (${Ti}): ${t}`,...n)}}function sf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Ti}) INTERNAL ASSERTION FAILED: `+t;throw Ht(e),new Error(e)}function re(t,e){t||U()}function z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends Qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Oe.UNAUTHENTICATED))}shutdown(){}}class Ck{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kk{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ut,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ut)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new Ew(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Oe(e)}}class Nk{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ak{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Nk(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xk{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.T=n.token,new Rk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Pk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Y(t,e){return t<e?-1:t>e?1:0}function ii(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new ye(0,0))}static max(){return new B(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ks.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ks?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class te extends Ks{construct(e,n,r){return new te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new te(n)}static emptyPath(){return new te([])}}const Dk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends Ks{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return Dk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new R(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new R(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new R(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new R(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(te.fromString(e))}static fromName(e){return new M(te.fromString(e).popFirst(5))}static empty(){return new M(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new te(e.slice()))}}function Ok(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new ye(n+1,0):new ye(n,r));return new xn(i,M.empty(),e)}function Lk(t){return new xn(t.readTime,t.key,-1)}class xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xn(B.min(),M.empty(),-1)}static max(){return new xn(B.max(),M.empty(),-1)}}function Mk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==$k)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function To(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}of.ct=-1;function Xl(t){return t==null}function il(t){return t===0&&1/t==-1/0}function Fk(t){return typeof t=="number"&&Number.isInteger(t)&&!il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Sw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){this.comparator=e,this.root=n||Ce.EMPTY}insert(e,n){return new se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zo(this.root,e,this.comparator,!0)}}class Zo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ce.RED,this.left=i??Ce.EMPTY,this.right=s??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ce(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qm(this.data.getIterator())}getIteratorFrom(e){return new Qm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class Qm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new pt([])}unionWith(e){let n=new Ve(Me.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ii(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Iw("Invalid base64 string: "+i):i}}(e);return new He(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const Uk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pn(t){if(re(!!t),typeof t=="string"){let e=0;const n=Uk.exec(t);if(re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function or(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lf(t){const e=t.mapValue.fields.__previous_value__;return af(e)?lf(e):e}function Gs(t){const e=Pn(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Qs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?af(t)?4:jk(t)?9007199254740991:10:U()}function Rt(t,e){if(t===e)return!0;const n=ar(t);if(n!==ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gs(t).isEqual(Gs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Pn(r.timestampValue),o=Pn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return or(r.bytesValue).isEqual(or(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return de(r.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(r.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return de(r.integerValue)===de(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=de(r.doubleValue),o=de(i.doubleValue);return s===o?il(s)===il(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ii(t.arrayValue.values||[],e.arrayValue.values||[],Rt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Gm(s)!==Gm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Rt(s[a],o[a])))return!1;return!0}(t,e);default:return U()}}function Ys(t,e){return(t.values||[]).find(n=>Rt(n,e))!==void 0}function si(t,e){if(t===e)return 0;const n=ar(t),r=ar(e);if(n!==r)return Y(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=de(i.integerValue||i.doubleValue),a=de(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ym(t.timestampValue,e.timestampValue);case 4:return Ym(Gs(t),Gs(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(i,s){const o=or(i),a=or(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Y(o[l],a[l]);if(u!==0)return u}return Y(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Y(de(i.latitude),de(s.latitude));return o!==0?o:Y(de(i.longitude),de(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=si(o[l],a[l]);if(u)return u}return Y(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ea.mapValue&&s===ea.mapValue)return 0;if(i===ea.mapValue)return 1;if(s===ea.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=Y(a[c],u[c]);if(d!==0)return d;const p=si(o[a[c]],l[u[c]]);if(p!==0)return p}return Y(a.length,u.length)}(t.mapValue,e.mapValue);default:throw U()}}function Ym(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=Pn(t),r=Pn(e),i=Y(n.seconds,r.seconds);return i!==0?i:Y(n.nanos,r.nanos)}function oi(t){return gh(t)}function gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Pn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?or(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=gh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${gh(r.fields[a])}`;return s+"}"}(t.mapValue):U();var e,n}function Xm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yh(t){return!!t&&"integerValue"in t}function uf(t){return!!t&&"arrayValue"in t}function Jm(t){return!!t&&"nullValue"in t}function Zm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ma(t){return!!t&&"mapValue"in t}function ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ci(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ma(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ys(n)}setAll(e){let n=Me.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ys(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ma(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ma(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ci(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ot(ys(this.value))}}function Tw(t){const e=[];return Ci(t.fields,(n,r)=>{const i=new Me([n]);if(ma(r)){const s=Tw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Le(e,0,B.min(),B.min(),B.min(),ot.empty(),0)}static newFoundDocument(e,n,r,i){return new Le(e,1,n,B.min(),r,i,0)}static newNoDocument(e,n){return new Le(e,2,n,B.min(),B.min(),ot.empty(),0)}static newUnknownDocument(e,n){return new Le(e,3,n,B.min(),B.min(),ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n){this.position=e,this.inclusive=n}}function eg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=si(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function tg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n="asc"){this.field=e,this.dir=n}}function Bk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{}class fe extends Cw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Hk(e,n,r):n==="array-contains"?new Kk(e,r):n==="in"?new Gk(e,r):n==="not-in"?new Qk(e,r):n==="array-contains-any"?new Yk(e,r):new fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qk(e,r):new Wk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(si(n,this.value)):n!==null&&ar(this.value)===ar(n)&&this.matchesComparison(si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class gt extends Cw{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new gt(e,n)}matches(e){return kw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function kw(t){return t.op==="and"}function Nw(t){return zk(t)&&kw(t)}function zk(t){for(const e of t.filters)if(e instanceof gt)return!1;return!0}function vh(t){if(t instanceof fe)return t.field.canonicalString()+t.op.toString()+oi(t.value);if(Nw(t))return t.filters.map(e=>vh(e)).join(",");{const e=t.filters.map(n=>vh(n)).join(",");return`${t.op}(${e})`}}function Aw(t,e){return t instanceof fe?function(n,r){return r instanceof fe&&n.op===r.op&&n.field.isEqual(r.field)&&Rt(n.value,r.value)}(t,e):t instanceof gt?function(n,r){return r instanceof gt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Aw(s,r.filters[o]),!0):!1}(t,e):void U()}function Rw(t){return t instanceof fe?function(e){return`${e.field.canonicalString()} ${e.op} ${oi(e.value)}`}(t):t instanceof gt?function(e){return e.op.toString()+" {"+e.getFilters().map(Rw).join(" ,")+"}"}(t):"Filter"}class Hk extends fe{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class qk extends fe{constructor(e,n){super(e,"in",n),this.keys=xw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Wk extends fe{constructor(e,n){super(e,"not-in",n),this.keys=xw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class Kk extends fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uf(n)&&Ys(n.arrayValue,this.value)}}class Gk extends fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ys(this.value.arrayValue,n)}}class Qk extends fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ys(this.value.arrayValue,n)}}class Yk extends fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ys(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function ng(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Xk(t,e,n,r,i,s,o)}function cf(t){const e=z(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oi(r)).join(",")),e.dt=n}return e.dt}function hf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Bk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Aw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tg(t.startAt,e.startAt)&&tg(t.endAt,e.endAt)}function wh(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function Jk(t,e,n,r,i,s,o,a){return new Co(t,e,n,r,i,s,o,a)}function Jl(t){return new Co(t)}function rg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Pw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function df(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Dw(t){return t.collectionGroup!==null}function Kr(t){const e=z(t);if(e.wt===null){e.wt=[];const n=df(e),r=Pw(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new vs(n)),e.wt.push(new vs(Me.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new vs(Me.keyField(),s))}}}return e.wt}function qt(t){const e=z(t);if(!e._t)if(e.limitType==="F")e._t=ng(e.path,e.collectionGroup,Kr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Kr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new vs(s.field,o))}const r=e.endAt?new sl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new sl(e.startAt.position,e.startAt.inclusive):null;e._t=ng(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Eh(t,e){e.getFirstInequalityField(),df(t);const n=t.filters.concat([e]);return new Co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _h(t,e,n){return new Co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zl(t,e){return hf(qt(t),qt(e))&&t.limitType===e.limitType}function Ow(t){return`${cf(qt(t))}|lt:${t.limitType}`}function Sh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Rw(r)).join(", ")}]`),Xl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oi(r)).join(",")),`Target(${n})`}(qt(t))}; limitType=${t.limitType})`}function eu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Kr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=eg(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Kr(n),r)||n.endAt&&!function(i,s,o){const a=eg(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Kr(n),r))}(t,e)}function Zk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Lw(t){return(e,n)=>{let r=!1;for(const i of Kr(t)){const s=eN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function eN(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?si(a,l):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ci(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Sw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=new se(M.comparator);function Wt(){return tN}const Mw=new se(M.comparator);function ts(...t){let e=Mw;for(const n of t)e=e.insert(n.key,n);return e}function $w(t){let e=Mw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yn(){return ws()}function bw(){return ws()}function ws(){return new ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const nN=new se(M.comparator),rN=new Ve(M.comparator);function q(...t){let e=rN;for(const n of t)e=e.add(n);return e}const iN=new Ve(Y);function sN(){return iN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:il(e)?"-0":e}}function Uw(t){return{integerValue:""+t}}function oN(t,e){return Fk(e)?Uw(e):Fw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this._=void 0}}function aN(t,e,n){return t instanceof ol?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&af(i)&&(i=lf(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Xs?jw(t,e):t instanceof Js?Bw(t,e):function(r,i){const s=Vw(r,i),o=ig(s)+ig(r.gt);return yh(s)&&yh(r.gt)?Uw(o):Fw(r.serializer,o)}(t,e)}function lN(t,e,n){return t instanceof Xs?jw(t,e):t instanceof Js?Bw(t,e):n}function Vw(t,e){return t instanceof al?yh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ol extends tu{}class Xs extends tu{constructor(e){super(),this.elements=e}}function jw(t,e){const n=zw(e);for(const r of t.elements)n.some(i=>Rt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Js extends tu{constructor(e){super(),this.elements=e}}function Bw(t,e){let n=zw(e);for(const r of t.elements)n=n.filter(i=>!Rt(i,r));return{arrayValue:{values:n}}}class al extends tu{constructor(e,n){super(),this.serializer=e,this.gt=n}}function ig(t){return de(t.integerValue||t.doubleValue)}function zw(t){return uf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function uN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Xs&&r instanceof Xs||n instanceof Js&&r instanceof Js?ii(n.elements,r.elements,Rt):n instanceof al&&r instanceof al?Rt(n.gt,r.gt):n instanceof ol&&r instanceof ol}(t.transform,e.transform)}class cN{constructor(e,n){this.version=e,this.transformResults=n}}class Vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ga(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nu{}function Hw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ww(t.key,Vt.none()):new ko(t.key,t.data,Vt.none());{const n=t.data,r=ot.empty();let i=new Ve(Me.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gr(t.key,r,new pt(i.toArray()),Vt.none())}}function hN(t,e,n){t instanceof ko?function(r,i,s){const o=r.value.clone(),a=og(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(r,i,s){if(!ga(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=og(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(qw(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Es(t,e,n,r){return t instanceof ko?function(i,s,o,a){if(!ga(i.precondition,s))return o;const l=i.value.clone(),u=ag(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof gr?function(i,s,o,a){if(!ga(i.precondition,s))return o;const l=ag(i.fieldTransforms,a,s),u=s.data;return u.setAll(qw(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ga(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function dN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Vw(r.transform,i||null);s!=null&&(n===null&&(n=ot.empty()),n.set(r.field,s))}return n||null}function sg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ii(n,r,(i,s)=>uN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ko extends nu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gr extends nu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function og(t,e,n){const r=new Map;re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,lN(o,a,n[i]))}return r}function ag(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,aN(s,o,e))}return r}class Ww extends nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fN extends nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&hN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Es(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Es(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Hw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&ii(this.mutations,e.mutations,(n,r)=>sg(n,r))&&ii(this.baseMutations,e.baseMutations,(n,r)=>sg(n,r))}}class ff{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){re(e.mutations.length===r.length);let i=nN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ff(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,K;function yN(t){switch(t){default:return U();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Kw(t){if(t===void 0)return Ht("GRPC error has no .code"),_.UNKNOWN;switch(t){case he.OK:return _.OK;case he.CANCELLED:return _.CANCELLED;case he.UNKNOWN:return _.UNKNOWN;case he.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case he.INTERNAL:return _.INTERNAL;case he.UNAVAILABLE:return _.UNAVAILABLE;case he.UNAUTHENTICATED:return _.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case he.NOT_FOUND:return _.NOT_FOUND;case he.ALREADY_EXISTS:return _.ALREADY_EXISTS;case he.PERMISSION_DENIED:return _.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case he.ABORTED:return _.ABORTED;case he.OUT_OF_RANGE:return _.OUT_OF_RANGE;case he.UNIMPLEMENTED:return _.UNIMPLEMENTED;case he.DATA_LOSS:return _.DATA_LOSS;default:return U()}}(K=he||(he={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ta}static getOrCreateInstance(){return ta===null&&(ta=new pf),ta}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ta=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=new Wr([4294967295,4294967295],0);function lg(t){const e=vN().encode(t),n=new Ik;return n.update(e),new Uint8Array(n.digest())}function ug(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wr([n,r],0),new Wr([i,s],0)]}class mf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ns(`Invalid padding: ${n}`);if(r<0)throw new ns(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ns(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ns(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Wr.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Wr.fromNumber(r)));return i.compare(wN)===1&&(i=new Wr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=lg(e),[r,i]=ug(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new mf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=lg(e),[r,i]=ug(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,No.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ru(B.min(),i,new se(Y),Wt(),q())}}class No{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new No(r,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class Gw{constructor(e,n){this.targetId=e,this.Vt=n}}class Qw{constructor(e,n,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class cg{constructor(){this.St=0,this.Dt=dg(),this.Ct=He.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=q(),n=q(),r=q();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new No(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=dg()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class EN{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Wt(),this.zt=hg(),this.Wt=new se(Y)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(wh(o))if(i===0){const a=new M(o.path);this.Yt(r,a,Le.newNoDocument(a,B.min()))}else re(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=pf.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,d){var p,g,E,w,h,f;const m={localCacheCount:c,existenceFilterCount:d.count},y=d.unchangedNames;return y&&(m.bloomFilter={applied:u===0,hashCount:(p=y==null?void 0:y.hashCount)!==null&&p!==void 0?p:0,bitmapLength:(w=(E=(g=y==null?void 0:y.bits)===null||g===void 0?void 0:g.bitmap)===null||E===void 0?void 0:E.length)!==null&&w!==void 0?w:0,padding:(f=(h=y==null?void 0:y.bits)===null||h===void 0?void 0:h.padding)!==null&&f!==void 0?f:0}),m}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=or(s).toUint8Array()}catch(c){if(c instanceof Iw)return ri("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new mf(l,o,a)}catch(c){return ri(c instanceof ns?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&wh(a.target)){const l=new M(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Le.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=q();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new ru(e,n,this.Wt,this.jt,r);return this.jt=Wt(),this.zt=hg(),this.Wt=new se(Y),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new cg,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Ve(Y),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new cg),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function hg(){return new se(M.comparator)}function dg(){return new se(M.comparator)}const _N={asc:"ASCENDING",desc:"DESCENDING"},SN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IN={and:"AND",or:"OR"};class TN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ih(t,e){return t.useProto3Json||Xl(e)?e:{value:e}}function ll(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function CN(t,e){return ll(t,e.toTimestamp())}function kt(t){return re(!!t),B.fromTimestamp(function(e){const n=Pn(e);return new ye(n.seconds,n.nanos)}(t))}function gf(t,e){return function(n){return new te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Xw(t){const e=te.fromString(t);return re(t1(e)),e}function Th(t,e){return gf(t.databaseId,e.path)}function rc(t,e){const n=Xw(e);if(n.get(1)!==t.databaseId.projectId)throw new R(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(Jw(n))}function Ch(t,e){return gf(t.databaseId,e)}function kN(t){const e=Xw(t);return e.length===4?te.emptyPath():Jw(e)}function kh(t){return new te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jw(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fg(t,e,n){return{name:Th(t,e),fields:n.value.mapValue.fields}}function NN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(re(u===void 0||typeof u=="string"),He.fromBase64String(u||"")):(re(u===void 0||u instanceof Uint8Array),He.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:Kw(l.code);return new R(u,l.message||"")}(o);n=new Qw(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=rc(t,r.document.name),s=kt(r.document.updateTime),o=r.document.createTime?kt(r.document.createTime):B.min(),a=new ot({mapValue:{fields:r.document.fields}}),l=Le.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ya(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=rc(t,r.document),s=r.readTime?kt(r.readTime):B.min(),o=Le.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ya([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=rc(t,r.document),s=r.removedTargetIds||[];n=new ya([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new gN(i,s),a=r.targetId;n=new Gw(a,o)}}return n}function AN(t,e){let n;if(e instanceof ko)n={update:fg(t,e.key,e.value)};else if(e instanceof Ww)n={delete:Th(t,e.key)};else if(e instanceof gr)n={update:fg(t,e.key,e.data),updateMask:bN(e.fieldMask)};else{if(!(e instanceof fN))return U();n={verify:Th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ol)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Js)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof al)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:CN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(t,e.precondition)),n}function RN(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?kt(r.updateTime):kt(i);return s.isEqual(B.min())&&(s=kt(i)),new cN(s,r.transformResults||[])}(n,e))):[]}function xN(t,e){return{documents:[Ch(t,e.path)]}}function PN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ch(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ch(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return e1(gt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Tr(c.field),direction:LN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ih(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function DN(t){let e=kN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=Zw(c);return d instanceof gt&&Nw(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new vs(Cr(d.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Xl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,p=c.values||[];return new sl(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,p=c.values||[];return new sl(p,d)}(n.endAt)),Jk(e,i,o,s,a,"F",l,u)}function ON(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zw(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Cr(e.unaryFilter.field);return fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Cr(e.unaryFilter.field);return fe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cr(e.unaryFilter.field);return fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Cr(e.unaryFilter.field);return fe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(e){return fe.create(Cr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return gt.create(e.compositeFilter.filters.map(n=>Zw(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(t):U()}function LN(t){return _N[t]}function MN(t){return SN[t]}function $N(t){return IN[t]}function Tr(t){return{fieldPath:t.canonicalString()}}function Cr(t){return Me.fromServerFormat(t.fieldPath)}function e1(t){return t instanceof fe?function(e){if(e.op==="=="){if(Zm(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NAN"}};if(Jm(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Zm(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NOT_NAN"}};if(Jm(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tr(e.field),op:MN(e.op),value:e.value}}}(t):t instanceof gt?function(e){const n=e.getFilters().map(r=>e1(r));return n.length===1?n[0]:{compositeFilter:{op:$N(e.op),filters:n}}}(t):U()}function bN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function t1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n,r,i,s=B.min(),o=B.min(),a=He.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.fe=e}}function UN(t){const e=DN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_h(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(){this.rn=new jN}addToCollectionParentIndex(e,n){return this.rn.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(xn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(xn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class jN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ve(te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new ai(0)}static Mn(){return new ai(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.changes=new ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Es(r.mutation,i,pt.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=Yn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ts();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Wt();const o=ws(),a=ws();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof gr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Es(c.mutation,u,c.mutation.getFieldMask(),ye.now())):o.set(u.key,pt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new zN(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ws();let i=new se((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||pt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=bw();c.forEach(p=>{if(!s.has(p)){const g=Hw(n.get(p),r.get(p));g!==null&&d.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Dw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(Yn());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(p=>{l=l.insert(c,p)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:$w(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=ts();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ts();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(u,c){return new Co(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Le.newInvalidDocument(u)))});let o=ts();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Es(u.mutation,l,pt.empty(),ye.now()),eu(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return S.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:kt(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:UN(r.bundledQuery),readTime:kt(r.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(){this.overlays=new se(M.comparator),this.ls=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yn();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=Yn(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new se((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Yn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Yn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mN(n,r));let s=this.ls.get(n);s===void 0&&(s=q(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.fs=new Ve(we.ds),this.ws=new Ve(we._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new we(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new we(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new M(new te([])),r=new we(n,e),i=new we(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new M(new te([])),r=new we(n,e),i=new we(n,e+1);let s=q();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new we(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class we{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return M.comparator(e.key,n.key)||Y(e.As,n.As)}static _s(e,n){return Y(e.As,n.As)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Ve(we.ds)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new we(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new we(n,0),i=new we(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ve(Y);return n.forEach(i=>{const s=new we(i,0),o=new we(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),S.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new we(new M(s),0);let a=new Ve(Y);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),S.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){re(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return S.forEach(n.mutations,i=>{const s=new we(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new we(n,0),i=this.Rs.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.Ds=e,this.docs=new se(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(n))}getEntries(e,n){let r=Wt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Le.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Wt();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Mk(Lk(c),r)<=0||(i.has(c.key)||eu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}Cs(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QN(this)}getSize(e){return S.resolve(this.size)}}class QN extends BN{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.persistence=e,this.xs=new ki(n=>cf(n),hf),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Ns=0,this.ks=new yf,this.targetCount=0,this.Ms=ai.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),S.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new ai(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Fn(n),S.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n){this.$s={},this.overlays={},this.Os=new of(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new YN(this),this.indexManager=new VN,this.remoteDocumentCache=function(r){return new GN(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new FN(n),this.qs=new qN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new KN(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new JN(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return S.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class JN extends bk{constructor(e){super(),this.currentSequenceNumber=e}}class vf{constructor(e){this.persistence=e,this.Qs=new yf,this.js=null}static zs(e){return new vf(e)}get Ws(){if(this.js)return this.js;throw U()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),S.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ws,r=>{const i=M.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return S.or([()=>S.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(rg(n))return S.resolve(null);let r=qt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_h(n,null,"F"),r=qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,_h(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return rg(n)||i.isEqual(B.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Km()<=Q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Sh(n)),this.Wi(e,o,n,Ok(i,-1)))})}ji(e,n){let r=new Ve(Lw(e));return n.forEach((i,s)=>{eu(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Km()<=Q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Sh(n)),this.Ui.getDocumentsMatchingQuery(e,n,xn.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new se(Y),this.Yi=new ki(s=>cf(s),hf),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HN(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function tA(t,e,n,r){return new eA(t,e,n,r)}async function n1(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function nA(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let p=S.resolve();return d.forEach(g=>{p=p.next(()=>u.getEntry(a,g)).next(E=>{const w=l.docVersions.get(g);re(w!==null),E.version.compareTo(w)<0&&(c.applyToRemoteDocument(E,l),E.isValidDocument()&&(E.setReadTime(l.commitVersion),u.addEntry(E)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=q();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function r1(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function rA(t,e){const n=z(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,d)=>{const p=i.get(d);if(!p)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,d)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(He.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(d,g),function(E,w,h){return E.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0}(p,g,c)&&a.push(n.Bs.updateTargetData(s,g))});let l=Wt(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(iA(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(B.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(d=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function iA(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Wt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function sA(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oA(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new un(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Nh(t,e,n){const r=z(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!To(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function pg(t,e,n){const r=z(t);let i=B.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=z(a),d=c.Yi.get(u);return d!==void 0?S.resolve(c.Ji.get(d)):c.Bs.getTargetData(l,u)}(r,o,qt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:B.min(),n?s:q())).next(a=>(aA(r,Zk(e),a),{documents:a,ir:s})))}function aA(t,e,n){let r=t.Xi.get(e)||B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class mg{constructor(){this.activeTargetIds=sN()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lA{constructor(){this.Hr=new mg,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new mg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na=null;function ic(){return na===null?na=268435456+Math.round(2147483648*Math.random()):na++,"0x"+na.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="WebChannelConnection";class dA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=ic(),a=this.To(e,n);O("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(O("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw ri("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ti,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=cA[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=ic();return new Promise((o,a)=>{const l=new Sk;l.setWithCredentials(!0),l.listenOnce(wk.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case nc.NO_ERROR:const c=l.getResponseJson();O(Pe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case nc.TIMEOUT:O(Pe,`RPC '${e}' ${s} timed out`),a(new R(_.DEADLINE_EXCEEDED,"Request time out"));break;case nc.HTTP_ERROR:const d=l.getStatus();if(O(Pe,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const E=function(w){const h=w.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(h)>=0?h:_.UNKNOWN}(g.status);a(new R(E,g.message))}else a(new R(_.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new R(_.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{O(Pe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);O(Pe,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=ic(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yk(),a=vk(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new _k({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");O(Pe,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let p=!1,g=!1;const E=new hA({ro:h=>{g?O(Pe,`Not sending because RPC '${e}' stream ${i} is closed:`,h):(p||(O(Pe,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),O(Pe,`RPC '${e}' stream ${i} sending:`,h),d.send(h))},oo:()=>d.close()}),w=(h,f,m)=>{h.listen(f,y=>{try{m(y)}catch(v){setTimeout(()=>{throw v},0)}})};return w(d,Jo.EventType.OPEN,()=>{g||O(Pe,`RPC '${e}' stream ${i} transport opened.`)}),w(d,Jo.EventType.CLOSE,()=>{g||(g=!0,O(Pe,`RPC '${e}' stream ${i} transport closed`),E.wo())}),w(d,Jo.EventType.ERROR,h=>{g||(g=!0,ri(Pe,`RPC '${e}' stream ${i} transport errored:`,h),E.wo(new R(_.UNAVAILABLE,"The operation could not be completed")))}),w(d,Jo.EventType.MESSAGE,h=>{var f;if(!g){const m=h.data[0];re(!!m);const y=m,v=y.error||((f=y[0])===null||f===void 0?void 0:f.error);if(v){O(Pe,`RPC '${e}' stream ${i} received error:`,v);const P=v.status;let C=function($){const D=he[$];if(D!==void 0)return Kw(D)}(P),L=v.message;C===void 0&&(C=_.INTERNAL,L="Unknown error status: "+P+" with message "+v.message),g=!0,E.wo(new R(C,L)),d.close()}else O(Pe,`RPC '${e}' stream ${i} received:`,m),E._o(m)}}),w(a,Ek.STAT_EVENT,h=>{h.stat===qm.PROXY?O(Pe,`RPC '${e}' stream ${i} detected buffering proxy`):h.stat===qm.NOPROXY&&O(Pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}}function sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t){return new TN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new i1(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Ht(n.toString()),Ht("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new R(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fA extends s1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=NN(this.serializer,e),r=function(i){if(!("targetChange"in i))return B.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?B.min():s.readTime?kt(s.readTime):B.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=kh(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=wh(a)?{documents:xN(i,a)}:{query:PN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=Yw(i,s.resumeToken);const l=Ih(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(B.min())>0){o.readTime=ll(i,s.snapshotVersion.toTimestamp());const l=Ih(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=ON(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=kh(this.serializer),n.removeTarget=e,this.Wo(n)}}class pA extends s1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=RN(e.writeResults,e.commitTime),r=kt(e.commitTime);return this.listener.cu(r,n)}return re(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=kh(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>AN(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new R(_.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(_.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(_.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class gA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ht(n),this.mu=!1):O("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{yr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=z(a);l.vu.add(4),await Ao(l),l.bu.set("Unknown"),l.vu.delete(4),await su(l)}(this))})}),this.bu=new gA(r,i)}}async function su(t){if(yr(t))for(const e of t.Ru)await e(!0)}async function Ao(t){for(const e of t.Ru)await e(!1)}function o1(t,e){const n=z(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Sf(n)?_f(n):Ni(n).Ko()&&Ef(n,e))}function a1(t,e){const n=z(t),r=Ni(n);n.Au.delete(e),r.Ko()&&l1(n,e),n.Au.size===0&&(r.Ko()?r.jo():yr(n)&&n.bu.set("Unknown"))}function Ef(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ni(t).su(e)}function l1(t,e){t.Vu.qt(e),Ni(t).iu(e)}function _f(t){t.Vu=new EN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Ni(t).start(),t.bu.gu()}function Sf(t){return yr(t)&&!Ni(t).Uo()&&t.Au.size>0}function yr(t){return z(t).vu.size===0}function u1(t){t.Vu=void 0}async function vA(t){t.Au.forEach((e,n)=>{Ef(t,e)})}async function wA(t,e){u1(t),Sf(t)?(t.bu.Iu(e),_f(t)):t.bu.set("Unknown")}async function EA(t,e,n){if(t.bu.set("Online"),e instanceof Qw&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ul(t,r)}else if(e instanceof ya?t.Vu.Ht(e):e instanceof Gw?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(B.min()))try{const r=await r1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(He.EMPTY_BYTE_STRING,u.snapshotVersion)),l1(i,a);const c=new un(u.target,a,l,u.sequenceNumber);Ef(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await ul(t,r)}}async function ul(t,e,n){if(!To(e))throw e;t.vu.add(1),await Ao(t),t.bu.set("Offline"),n||(n=()=>r1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await su(t)})}function c1(t,e){return e().catch(n=>ul(t,n,e))}async function ou(t){const e=z(t),n=Dn(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;_A(e);)try{const i=await sA(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,SA(e,i)}catch(i){await ul(e,i)}h1(e)&&d1(e)}function _A(t){return yr(t)&&t.Eu.length<10}function SA(t,e){t.Eu.push(e);const n=Dn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function h1(t){return yr(t)&&!Dn(t).Uo()&&t.Eu.length>0}function d1(t){Dn(t).start()}async function IA(t){Dn(t).hu()}async function TA(t){const e=Dn(t);for(const n of t.Eu)e.uu(n.mutations)}async function CA(t,e,n){const r=t.Eu.shift(),i=ff.from(r,e,n);await c1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ou(t)}async function kA(t,e){e&&Dn(t).ou&&await async function(n,r){if(i=r.code,yN(i)&&i!==_.ABORTED){const s=n.Eu.shift();Dn(n).Qo(),await c1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ou(n)}var i}(t,e),h1(t)&&d1(t)}async function yg(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=yr(n);n.vu.add(3),await Ao(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await su(n)}async function NA(t,e){const n=z(t);e?(n.vu.delete(2),await su(n)):e||(n.vu.add(2),await Ao(n),n.bu.set("Unknown"))}function Ni(t){return t.Su||(t.Su=function(e,n,r){const i=z(e);return i.fu(),new fA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:vA.bind(null,t),ao:wA.bind(null,t),nu:EA.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Sf(t)?_f(t):t.bu.set("Unknown")):(await t.Su.stop(),u1(t))})),t.Su}function Dn(t){return t.Du||(t.Du=function(e,n,r){const i=z(e);return i.fu(),new pA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:IA.bind(null,t),ao:kA.bind(null,t),au:TA.bind(null,t),cu:CA.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await ou(t)):(await t.Du.stop(),t.Eu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new If(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tf(t,e){if(Ht("AsyncQueue",`${e}: ${t}`),To(t))return new R(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=ts(),this.sortedSet=new se(this.comparator)}static emptySet(e){return new Gr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.Cu=new se(M.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):U():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class li{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new li(e,n,Gr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(){this.Nu=void 0,this.listeners=[]}}class RA{constructor(){this.queries=new ki(e=>Ow(e),Zl),this.onlineState="Unknown",this.ku=new Set}}async function Cf(t,e){const n=z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new AA),i)try{s.Nu=await n.onListen(r)}catch(o){const a=Tf(o,`Initialization of query '${Sh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Nf(n)}async function kf(t,e){const n=z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function xA(t,e){const n=z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Nf(n)}function PA(t,e,n){const r=z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Nf(t){t.ku.forEach(e=>{e.next()})}class Af{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new li(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=li.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.key=e}}class p1{constructor(e){this.key=e}}class DA{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=q(),this.mutatedKeys=q(),this.tc=Lw(e),this.ec=new Gr(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new vg,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const p=i.get(c),g=eu(this.query,d)?d:null,E=!!p&&this.mutatedKeys.has(p.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let h=!1;p&&g?p.data.isEqual(g.data)?E!==w&&(r.track({type:3,doc:g}),h=!0):this.rc(p,g)||(r.track({type:2,doc:g}),h=!0,(l&&this.tc(g,l)>0||u&&this.tc(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),h=!0):p&&!g&&(r.track({type:1,doc:p}),h=!0,(l||u)&&(a=!0)),h&&(g?(o=o.add(g),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(d,p){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return g(d)-g(p)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new li(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new vg,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=q(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new p1(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new f1(r))}),n}hc(e){this.Yu=e.ir,this.Zu=q();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return li.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class OA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LA{constructor(e){this.key=e,this.fc=!1}}class MA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ki(a=>Ow(a),Zl),this._c=new Map,this.mc=new Set,this.gc=new se(M.comparator),this.yc=new Map,this.Ic=new yf,this.Tc={},this.Ec=new Map,this.Ac=ai.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function $A(t,e){const n=WA(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await oA(n.localStore,qt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await bA(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&o1(n.remoteStore,o)}return i}async function bA(t,e,n,r,i){t.Rc=(d,p,g)=>async function(E,w,h,f){let m=w.view.sc(h);m.zi&&(m=await pg(E.localStore,w.query,!1).then(({documents:P})=>w.view.sc(P,m)));const y=f&&f.targetChanges.get(w.targetId),v=w.view.applyChanges(m,E.isPrimaryClient,y);return Eg(E,w.targetId,v.cc),v.snapshot}(t,d,p,g);const s=await pg(t.localStore,e,!0),o=new DA(e,s.ir),a=o.sc(s.documents),l=No.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Eg(t,n,u.cc);const c=new OA(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function FA(t,e){const n=z(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Zl(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Nh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),a1(n.remoteStore,r.targetId),Ah(n,r.targetId)}).catch(Io)):(Ah(n,r.targetId),await Nh(n.localStore,r.targetId,!0))}async function UA(t,e,n){const r=KA(t);try{const i=await function(s,o){const a=z(s),l=ye.now(),u=o.reduce((p,g)=>p.add(g.key),q());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=Wt(),E=q();return a.Zi.getEntries(p,u).next(w=>{g=w,g.forEach((h,f)=>{f.isValidDocument()||(E=E.add(h))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,g)).next(w=>{c=w;const h=[];for(const f of o){const m=dN(f,c.get(f.key).overlayedDocument);m!=null&&h.push(new gr(f.key,m,Tw(m.value.mapValue),Vt.exists(!0)))}return a.mutationQueue.addMutationBatch(p,l,h,o)}).next(w=>{d=w;const h=w.applyToLocalDocumentSet(c,E);return a.documentOverlayCache.saveOverlays(p,w.batchId,h)})}).then(()=>({batchId:d.batchId,changes:$w(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new se(Y)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Ro(r,i.changes),await ou(r.remoteStore)}catch(i){const s=Tf(i,"Failed to persist write");n.reject(s)}}async function m1(t,e){const n=z(t);try{const r=await rA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?re(o.fc):i.removedDocuments.size>0&&(re(o.fc),o.fc=!1))}),await Ro(n,r,e)}catch(r){await Io(r)}}function wg(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=z(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.Mu(o)&&(l=!0)}),l&&Nf(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VA(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new se(M.comparator);o=o.insert(s,Le.newNoDocument(s,B.min()));const a=q().add(s),l=new ru(B.min(),new Map,new se(Y),o,a);await m1(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Rf(r)}else await Nh(r.localStore,e,!1).then(()=>Ah(r,e,n)).catch(Io)}async function jA(t,e){const n=z(t),r=e.batch.batchId;try{const i=await nA(n.localStore,e);y1(n,r,null),g1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ro(n,i)}catch(i){await Io(i)}}async function BA(t,e,n){const r=z(t);try{const i=await function(s,o){const a=z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(re(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);y1(r,e,n),g1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ro(r,i)}catch(i){await Io(i)}}function g1(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function y1(t,e,n){const r=z(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Ah(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||v1(t,r)})}function v1(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(a1(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Rf(t))}function Eg(t,e,n){for(const r of n)r instanceof f1?(t.Ic.addReference(r.key,e),zA(t,r)):r instanceof p1?(O("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||v1(t,r.key)):U()}function zA(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(O("SyncEngine","New document in limbo: "+n),t.mc.add(r),Rf(t))}function Rf(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new M(te.fromString(e)),r=t.Ac.next();t.yc.set(r,new LA(n)),t.gc=t.gc.insert(n,r),o1(t.remoteStore,new un(qt(Jl(n.path)),r,"TargetPurposeLimboResolution",of.ct))}}async function Ro(t,e,n){const r=z(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=wf.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(l,d=>S.forEach(d.Fi,p=>u.persistence.referenceDelegate.addReference(c,d.targetId,p)).next(()=>S.forEach(d.Bi,p=>u.persistence.referenceDelegate.removeReference(c,d.targetId,p)))))}catch(c){if(!To(c))throw c;O("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const p=u.Ji.get(d),g=p.snapshotVersion,E=p.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(d,E)}}}(r.localStore,s))}async function HA(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await n1(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new R(_.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ro(n,r.er)}}function qA(t,e){const n=z(t),r=n.yc.get(e);if(r&&r.fc)return q().add(r.key);{let i=q();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function WA(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=m1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VA.bind(null,e),e.dc.nu=xA.bind(null,e.eventManager),e.dc.Pc=PA.bind(null,e.eventManager),e}function KA(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BA.bind(null,e),e}class _g{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=iu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return tA(this.persistence,new ZN,e.initialUser,this.serializer)}createPersistence(e){return new XN(vf.zs,this.serializer)}createSharedClientState(e){return new lA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class GA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HA.bind(null,this.syncEngine),await NA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new RA}createDatastore(e){const n=iu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new dA(i));var i;return function(s,o,a,l){return new mA(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>wg(this.syncEngine,a,0),o=gg.D()?new gg:new uA,new yA(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new MA(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);O("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ao(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ht("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Oe.UNAUTHENTICATED,this.clientId=_w.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oc(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await n1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XA(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>yg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>yg(e.remoteStore,s)),t._onlineComponents=e}function YA(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function XA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await oc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!YA(n))throw n;ri("Error using user provided cache. Falling back to memory cache: "+n),await oc(t,new _g)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await oc(t,new _g);return t._offlineComponents}async function w1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Sg(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Sg(t,new GA))),t._onlineComponents}function JA(t){return w1(t).then(e=>e.syncEngine)}async function cl(t){const e=await w1(t),n=e.eventManager;return n.onListen=$A.bind(null,e.syncEngine),n.onUnlisten=FA.bind(null,e.syncEngine),n}function ZA(t,e,n={}){const r=new Ut;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new xf({next:d=>{s.enqueueAndForget(()=>kf(i,c));const p=d.docs.has(o);!p&&d.fromCache?l.reject(new R(_.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&a&&a.source==="server"?l.reject(new R(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new Af(Jl(o.path),u,{includeMetadataChanges:!0,Ku:!0});return Cf(i,c)}(await cl(t),t.asyncQueue,e,n,r)),r.promise}function eR(t,e,n={}){const r=new Ut;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new xf({next:d=>{s.enqueueAndForget(()=>kf(i,c)),d.fromCache&&a.source==="server"?l.reject(new R(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new Af(o,u,{includeMetadataChanges:!0,Ku:!0});return Cf(i,c)}(await cl(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(t,e,n){if(!n)throw new R(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tR(t,e,n,r){if(e===!0&&r===!0)throw new R(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tg(t){if(!M.isDocumentKey(t))throw new R(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Cg(t){if(M.isDocumentKey(t))throw new R(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function au(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=au(t);throw new R(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new R(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=E1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new R(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new R(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new R(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class lu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Tk;switch(n.type){case"firstParty":return new Ak(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new R(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ig.get(e);n&&(O("ComponentProvider","Removing Datastore"),Ig.delete(e),n.terminate())}(this),Promise.resolve()}}function nR(t,e,n,r={}){var i;const s=(t=jt(t,lu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Oe.MOCK_USER;else{a=YI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new R(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Oe(u)}t._authCredentials=new Ck(new Ew(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}}class vr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vr(this.firestore,e,this._query)}}class Tn extends vr{constructor(e,n,r){super(e,n,Jl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new M(e))}withConverter(e){return new Tn(this.firestore,e,this._path)}}function ui(t,e,...n){if(t=ze(t),_1("collection","path",e),t instanceof lu){const r=te.fromString(e,...n);return Cg(r),new Tn(t,null,r)}{if(!(t instanceof Je||t instanceof Tn))throw new R(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return Cg(r),new Tn(t.firestore,null,r)}}function Pf(t,e,...n){if(t=ze(t),arguments.length===1&&(e=_w.A()),_1("doc","path",e),t instanceof lu){const r=te.fromString(e,...n);return Tg(r),new Je(t,null,new M(r))}{if(!(t instanceof Je||t instanceof Tn))throw new R(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return Tg(r),new Je(t.firestore,t instanceof Tn?t.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new i1(this,"async_queue_retry"),this.Xc=()=>{const n=sc();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=sc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Ut;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!To(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ht("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=If.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&U()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Ng(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ci extends lu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new rR,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||S1(this),this._firestoreClient.terminate()}}function iR(t,e){const n=typeof t=="object"?t:m0(),r=typeof t=="string"?t:e||"(default)",i=Md(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=GI("firestore");s&&nR(i,...s)}return i}function uu(t){return t._firestoreClient||S1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function S1(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new Vk(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,E1(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new QA(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hi(He.fromBase64String(e))}catch(n){throw new R(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hi(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=/^__.*__$/;class oR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ko(e,this.data,n,this.fieldTransforms)}}function T1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Lf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Lf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return hl(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(T1(this.ca)&&sR.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class aR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||iu(e)}ya(e,n,r,i=!1){return new Lf({ca:e,methodName:n,ga:r,path:Me.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function C1(t){const e=t._freezeSettings(),n=iu(t._databaseId);return new aR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lR(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);A1("Data must be an object, but it was:",o,r);const a=k1(r,o);let l,u;if(s.merge)l=new pt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const p=cR(e,d,n);if(!o.contains(p))throw new R(_.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);dR(c,p)||c.push(p)}l=new pt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new oR(new ot(a),l,u)}function uR(t,e,n,r=!1){return Mf(n,t.ya(r?4:3,e))}function Mf(t,e){if(N1(t=ze(t)))return A1("Unsupported field value:",e,t),k1(t,e);if(t instanceof I1)return function(n,r){if(!T1(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Mf(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return oN(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ye.fromDate(n);return{timestampValue:ll(r.serializer,i)}}if(n instanceof ye){const i=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ll(r.serializer,i)}}if(n instanceof Of)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hi)return{bytesValue:Yw(r.serializer,n._byteString)};if(n instanceof Je){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${au(n)}`)}(t,e)}function k1(t,e){const n={};return Sw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ci(t,(r,i)=>{const s=Mf(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function N1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof Of||t instanceof hi||t instanceof Je||t instanceof I1)}function A1(t,e,n){if(!N1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=au(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function cR(t,e,n){if((e=ze(e))instanceof Df)return e._internalPath;if(typeof e=="string")return R1(t,e);throw hl("Field path arguments must be of type string or ",t,!1,void 0,n)}const hR=new RegExp("[~\\*/\\[\\]]");function R1(t,e,n){if(e.search(hR)>=0)throw hl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Df(...e.split("."))._internalPath}catch{throw hl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new R(_.INVALID_ARGUMENT,a+t+l)}function dR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($f("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fR extends x1{data(){return super.data()}}function $f(t,e){return typeof e=="string"?R1(t,e):e instanceof Df?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bf{}class pR extends bf{}function mR(t,e,...n){let r=[];e instanceof bf&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Ff).length,o=i.filter(a=>a instanceof cu).length;if(s>1||s>0&&o>0)throw new R(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class cu extends pR{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cu(e,n,r)}_apply(e){const n=this._parse(e);return D1(e._query,n),new vr(e.firestore,e.converter,Eh(e._query,n))}_parse(e){const n=C1(e.firestore);return function(i,s,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new R(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Rg(c,u);const p=[];for(const g of c)p.push(Ag(a,i,g));d={arrayValue:{values:p}}}else d=Ag(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Rg(c,u),d=uR(o,s,c,u==="in"||u==="not-in");return fe.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function gR(t,e,n){const r=e,i=$f("where",t);return cu._create(i,r,n)}class Ff extends bf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ff(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:gt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)D1(s,a),s=Eh(s,a)}(e._query,n),new vr(e.firestore,e.converter,Eh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ag(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new R(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dw(e)&&n.indexOf("/")!==-1)throw new R(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(te.fromString(n));if(!M.isDocumentKey(r))throw new R(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xm(t,new M(r))}if(n instanceof Je)return Xm(t,n._key);throw new R(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${au(n)}.`)}function Rg(t,e){if(!Array.isArray(t)||t.length===0)throw new R(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function D1(t,e){if(e.isInequality()){const r=df(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new R(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Pw(t);s!==null&&yR(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new R(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function yR(t,e,n){if(!n.isEqual(e))throw new R(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class vR{convertValue(e,n="none"){switch(ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ci(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Of(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Gs(e));default:return null}}convertTimestamp(e){const n=Pn(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=te.fromString(e);re(t1(r));const i=new Qs(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||Ht(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class O1 extends x1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($f("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class va extends O1{data(e={}){return super.data(e)}}class L1{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new rs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new va(this._firestore,this._userDataWriter,r.key,r,new rs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new va(r._firestore,r._userDataWriter,o.doc.key,o.doc,new rs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new va(r._firestore,r._userDataWriter,o.doc.key,o.doc,new rs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:ER(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ER(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t){t=jt(t,Je);const e=jt(t.firestore,ci);return ZA(uu(e),t._key).then(n=>M1(e,t,n))}class Uf extends vR{constructor(e){super(),this.firestore=e}convertBytes(e){return new hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,n)}}function dl(t){t=jt(t,vr);const e=jt(t.firestore,ci),n=uu(e),r=new Uf(e);return P1(t._query),eR(n,t._query).then(i=>new L1(e,r,t,i))}function SR(t,e){const n=jt(t.firestore,ci),r=Pf(t),i=wR(t.converter,e);return TR(n,[lR(C1(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Vt.exists(!1))]).then(()=>r)}function IR(t,...e){var n,r,i;t=ze(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ng(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ng(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Je)u=jt(t.firestore,ci),c=Jl(t._key.path),l={next:d=>{e[o]&&e[o](M1(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=jt(t,vr);u=jt(d.firestore,ci),c=d._query;const p=new Uf(u);l={next:g=>{e[o]&&e[o](new L1(u,p,d,g))},error:e[o+1],complete:e[o+2]},P1(t._query)}return function(d,p,g,E){const w=new xf(E),h=new Af(p,w,g);return d.asyncQueue.enqueueAndForget(async()=>Cf(await cl(d),h)),()=>{w.Dc(),d.asyncQueue.enqueueAndForget(async()=>kf(await cl(d),h))}}(uu(u),c,a,l)}function TR(t,e){return function(n,r){const i=new Ut;return n.asyncQueue.enqueueAndForget(async()=>UA(await JA(n),r,i)),i.promise}(uu(t),e)}function M1(t,e,n){const r=n.docs.get(e._key),i=new Uf(t);return new O1(t,i,e._key,r,new rs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ti=n})(_i),ti(new rr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ci(new kk(n.getProvider("auth-internal")),new xk(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qs(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),In(Wm,"3.13.0",t),In(Wm,"3.13.0","esm2017")})();function Vf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CR=$1,b1=new ho("auth","Firebase",$1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Od("@firebase/auth");function kR(t,...e){fl.logLevel<=Q.WARN&&fl.warn(`Auth (${_i}): ${t}`,...e)}function wa(t,...e){fl.logLevel<=Q.ERROR&&fl.error(`Auth (${_i}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,...e){throw jf(t,...e)}function Nt(t,...e){return jf(t,...e)}function NR(t,e,n){const r=Object.assign(Object.assign({},CR()),{[e]:n});return new ho("auth","Firebase",r).create(e,{appName:t.name})}function jf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return b1.create(t,...e)}function b(t,e,...n){if(!t)throw jf(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wa(e),new Error(e)}function Kt(t,e){t||$t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AR(){return xg()==="http:"||xg()==="https:"}function xg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AR()||JI()||"connection"in navigator)?navigator.onLine:!0}function xR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kt(n>e,"Short delay should be less than long delay!"),this.isMobile=XI()||ZI()}get(){return RR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t,e){Kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=new xo(3e4,6e4);function Po(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ai(t,e,n,r,i={}){return U1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=fo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),F1.fetch()(V1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function U1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PR),e);try{const i=new OR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ra(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ra(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ra(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ra(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw NR(t,c,u);yt(t,c)}}catch(i){if(i instanceof Qt)throw i;yt(t,"network-request-failed",{message:String(i)})}}async function hu(t,e,n,r,i={}){const s=await Ai(t,e,n,r,i);return"mfaPendingCredential"in s&&yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function V1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bf(t.config,i):`${t.config.apiScheme}://${i}`}class OR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),DR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(t,e){return Ai(t,"POST","/v1/accounts:delete",e)}async function MR(t,e){return Ai(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $R(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=zf(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_s(ac(i.auth_time)),issuedAtTime:_s(ac(i.iat)),expirationTime:_s(ac(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ac(t){return Number(t)*1e3}function zf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wa("JWT malformed, contained fewer than 3 sections"),null;try{const i=l0(n);return i?JSON.parse(i):(wa("Failed to decode base64 JWT payload"),null)}catch(i){return wa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bR(t){const e=zf(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&FR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_s(this.lastLoginAt),this.creationTime=_s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zs(t,MR(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?BR(s.providerUserInfo):[],a=jR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new j1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function VR(t){const e=ze(t);await pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function BR(t){return t.map(e=>{var{providerId:n}=e,r=Vf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zR(t,e){const n=await U1(t,{},async()=>{const r=fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=V1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",F1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await zR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new eo;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new eo,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new j1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $R(this,e)}reload(){return VR(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zs(this,LR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,h=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:v,isAnonymous:P,providerData:C,stsTokenManager:L}=n;b(y&&L,e,"internal-error");const $=eo.fromJSON(this.name,L);b(typeof y=="string",e,"internal-error"),Yt(d,e.name),Yt(p,e.name),b(typeof v=="boolean",e,"internal-error"),b(typeof P=="boolean",e,"internal-error"),Yt(g,e.name),Yt(E,e.name),Yt(w,e.name),Yt(h,e.name),Yt(f,e.name),Yt(m,e.name);const D=new Zn({uid:y,auth:e,email:p,emailVerified:v,displayName:d,isAnonymous:P,photoURL:E,phoneNumber:g,tenantId:w,stsTokenManager:$,createdAt:f,lastLoginAt:m});return C&&Array.isArray(C)&&(D.providerData=C.map(me=>Object.assign({},me))),h&&(D._redirectEventId=h),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new eo;i.updateFromServerResponse(n);const s=new Zn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=new Map;function bt(t){Kt(t instanceof Function,"Expected a class definition");let e=Pg.get(t);return e?(Kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}B1.type="NONE";const Dg=B1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t,e,n){return`firebase:${t}:${e}:${n}`}class Qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ea(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ea("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qr(bt(Dg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||bt(Dg);const o=Ea(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Zn._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Qr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Qr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K1(e))return"Blackberry";if(G1(e))return"Webos";if(Hf(e))return"Safari";if((e.includes("chrome/")||H1(e))&&!e.includes("edge/"))return"Chrome";if(W1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z1(t=Be()){return/firefox\//i.test(t)}function Hf(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H1(t=Be()){return/crios\//i.test(t)}function q1(t=Be()){return/iemobile/i.test(t)}function W1(t=Be()){return/android/i.test(t)}function K1(t=Be()){return/blackberry/i.test(t)}function G1(t=Be()){return/webos/i.test(t)}function du(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HR(t=Be()){var e;return du(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qR(){return eT()&&document.documentMode===10}function Q1(t=Be()){return du(t)||W1(t)||G1(t)||K1(t)||/windows phone/i.test(t)||q1(t)}function WR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t,e=[]){let n;switch(t){case"Browser":n=Og(Be());break;case"Worker":n=`${Og(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}async function X1(t,e){return Ai(t,"GET","/v2/recaptchaConfig",Po(t,e))}function Lg(t){return t!==void 0&&t.enterprise!==void 0}class J1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Z1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",KR().appendChild(r)})}function GR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const QR="https://www.google.com/recaptcha/enterprise.js?render=",YR="recaptcha-enterprise",XR="NO_RECAPTCHA";class eE{constructor(e){this.type=YR,this.auth=Do(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{X1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new J1(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Lg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(XR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Lg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Z1(QR+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Mg(t,e,n,r=!1){const i=new eE(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $g(this),this.idTokenSubscription=new $g(this),this.beforeStateQueue=new JR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=b1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ze(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}async initializeRecaptchaConfig(){const e=await X1(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new J1(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new eE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ho("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bt(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await Qr.create(this,[bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return b(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Y1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Do(t){return ze(t)}class $g{constructor(e){this.auth=e,this.observer=null,this.addObserver=aT(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t,e){const n=Md(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Qa(s,e??{}))return i;yt(i,"already-initialized")}return n.initialize({options:e})}function tx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nx(t,e,n){const r=Do(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=tE(e),{host:o,port:a}=rx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ix()}function tE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rx(t){const e=tE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:bg(o)}}}function bg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ix(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}async function sx(t,e){return Ai(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(t,e){return hu(t,"POST","/v1/accounts:signInWithPassword",Po(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(t,e){return hu(t,"POST","/v1/accounts:signInWithEmailLink",Po(t,e))}async function ax(t,e){return hu(t,"POST","/v1/accounts:signInWithEmailLink",Po(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends qf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new to(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new to(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Mg(e,r,"signInWithPassword");return lc(e,i)}else return lc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Mg(e,r,"signInWithPassword");return lc(e,s)}else return Promise.reject(i)});case"emailLink":return ox(e,{email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return sx(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ax(e,{idToken:n,email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e){return hu(t,"POST","/v1/accounts:signInWithIdp",Po(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx="http://localhost";class lr extends qf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:lx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cx(t){const e=Xi(Ji(t)).link,n=e?Xi(Ji(e)).deep_link_id:null,r=Xi(Ji(t)).deep_link_id;return(r?Xi(Ji(r)).link:null)||r||n||e||t}class Wf{constructor(e){var n,r,i,s,o,a;const l=Xi(Ji(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=ux((i=l.mode)!==null&&i!==void 0?i:null);b(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=cx(e);try{return new Wf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.providerId=Ri.PROVIDER_ID}static credential(e,n){return to._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wf.parseLink(n);return b(r,"argument-error"),to._fromEmailAndCode(e,r.code,r.tenantId)}}Ri.PROVIDER_ID="password";Ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends nE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Oo{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Oo{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Oo{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zn._fromIdTokenResponse(e,r,i),o=Fg(r);return new di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Fg(r);return new di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Fg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends Qt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ml.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ml(e,n,r,i)}}function rE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ml._fromErrorAndOperation(t,s,e,r):s})}async function hx(t,e,n=!1){const r=await Zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return di._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Zs(t,rE(r,i,e,t),n);b(s.idToken,r,"internal-error");const o=zf(s.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(t.uid===a,r,"user-mismatch"),di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(t,e,n=!1){const r="signIn",i=await rE(t,r,e),s=await di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function fx(t,e){return iE(Do(t),e)}function px(t,e,n){return fx(ze(t),Ri.credential(e,n))}function mx(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function gx(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function yx(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}function vx(t){return ze(t).signOut()}const gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(){const t=Be();return Hf(t)||du(t)}const Ex=1e3,_x=10;class oE extends sE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wx()&&WR(),this.fallbackToPolling=Q1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_x):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ex)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oE.type="LOCAL";const Sx=oE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE extends sE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aE.type="SESSION";const lE=aE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Ix(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Kf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return window}function Cx(t){At().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function kx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ax(){return uE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="firebaseLocalStorageDb",Rx=1,yl="firebaseLocalStorage",hE="fbase_key";class Lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pu(t,e){return t.transaction([yl],e?"readwrite":"readonly").objectStore(yl)}function xx(){const t=indexedDB.deleteDatabase(cE);return new Lo(t).toPromise()}function xh(){const t=indexedDB.open(cE,Rx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yl,{keyPath:hE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yl)?e(r):(r.close(),await xx(),e(await xh()))})})}async function Ug(t,e,n){const r=pu(t,!0).put({[hE]:e,value:n});return new Lo(r).toPromise()}async function Px(t,e){const n=pu(t,!1).get(e),r=await new Lo(n).toPromise();return r===void 0?null:r.value}function Vg(t,e){const n=pu(t,!0).delete(e);return new Lo(n).toPromise()}const Dx=800,Ox=3;class dE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ox)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fu._getInstance(Ax()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kx(),!this.activeServiceWorker)return;this.sender=new Tx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xh();return await Ug(e,gl,"1"),await Vg(e,gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ug(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Px(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pu(i,!1).getAll();return new Lo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dE.type="LOCAL";const Lx=dE;new xo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t,e){return e?bt(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf extends qf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $x(t){return iE(t.auth,new Gf(t),t.bypassAuthState)}function bx(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),dx(n,new Gf(t),t.bypassAuthState)}async function Fx(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),hx(n,new Gf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $x;case"linkViaPopup":case"linkViaRedirect":return Fx;case"reauthViaPopup":case"reauthViaRedirect":return bx;default:yt(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=new xo(2e3,1e4);class Or extends fE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=Kf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ux.get())};e()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx="pendingRedirect",_a=new Map;class jx extends fE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_a.get(this.auth._key());if(!e){try{const r=await Bx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_a.set(this.auth._key(),e)}return this.bypassAuthState||_a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bx(t,e){const n=qx(e),r=Hx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function zx(t,e){_a.set(t._key(),e)}function Hx(t){return bt(t._redirectPersistence)}function qx(t){return Ea(Vx,t.config.apiKey,t.name)}async function Wx(t,e,n=!1){const r=Do(t),i=Mx(r,e),o=await new jx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx=10*60*1e3;class Gx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kx&&this.cachedEventUids.clear(),this.cachedEventUids.has(jg(e))}saveEventToCache(e){this.cachedEventUids.add(jg(e)),this.lastProcessedEventTime=Date.now()}}function jg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Qx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(t,e={}){return Ai(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jx=/^https?/;async function Zx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yx(t);for(const n of e)try{if(eP(n))return}catch{}yt(t,"unauthorized-domain")}function eP(t){const e=Rh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Jx.test(n))return!1;if(Xx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=new xo(3e4,6e4);function Bg(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nP(t){return new Promise((e,n)=>{var r,i,s;function o(){Bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bg(),n(Nt(t,"network-request-failed"))},timeout:tP.get()})}if(!((i=(r=At().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=At().gapi)===null||s===void 0)&&s.load)o();else{const a=GR("iframefcb");return At()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},Z1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Sa=null,e})}let Sa=null;function rP(t){return Sa=Sa||nP(t),Sa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=new xo(5e3,15e3),sP="__/auth/iframe",oP="emulator/auth/iframe",aP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uP(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bf(e,oP):`https://${t.config.authDomain}/${sP}`,r={apiKey:e.apiKey,appName:t.name,v:_i},i=lP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${fo(r).slice(1)}`}async function cP(t){const e=await rP(t),n=At().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:uP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=At().setTimeout(()=>{s(o)},iP.get());function l(){At().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dP=500,fP=600,pP="_blank",mP="http://localhost";class zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gP(t,e,n,r=dP,i=fP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Be().toLowerCase();n&&(a=H1(u)?pP:n),z1(u)&&(e=e||mP,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[g,E])=>`${p}${g}=${E},`,"");if(HR(u)&&a!=="_self")return yP(e||"",a),new zg(null);const d=window.open(e||"",a,c);b(d,t,"popup-blocked");try{d.focus()}catch{}return new zg(d)}function yP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="__/auth/handler",wP="emulator/auth/handler",EP=encodeURIComponent("fac");async function Hg(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:i};if(e instanceof nE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Oo){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${EP}=${encodeURIComponent(l)}`:"";return`${_P(t)}?${fo(a).slice(1)}${u}`}function _P({config:t}){return t.emulator?Bf(t,wP):`https://${t.authDomain}/${vP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="webStorageSupport";class SP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lE,this._completeRedirectFn=Wx,this._overrideRedirectResult=zx}async _openPopup(e,n,r,i){var s;Kt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Hg(e,n,r,Rh(),i);return gP(e,o,Kf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Hg(e,n,r,Rh(),i);return Cx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cP(e),r=new Gx(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uc,{type:uc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[uc];o!==void 0&&n(!!o),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Q1()||Hf()||du()}}const IP=SP;var qg="@firebase/auth",Wg="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kP(t){ti(new rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Y1(t)},u=new ZR(r,i,s,l);return tx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ti(new rr("auth-internal",e=>{const n=Do(e.getProvider("auth").getImmediate());return(r=>new TP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(qg,Wg,CP(t)),In(qg,Wg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=5*60,AP=h0("authIdTokenMaxAge")||NP;let Kg=null;const RP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AP)return;const i=n==null?void 0:n.token;Kg!==i&&(Kg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xP(t=m0()){const e=Md(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ex(t,{popupRedirectResolver:IP,persistence:[Lx,Sx,lE]}),r=h0("authTokenSyncURL");if(r){const s=RP(r);gx(n,s,()=>s(n.currentUser)),mx(n,o=>s(o))}const i=u0("auth");return i&&nx(n,`http://${i}`),n}kP("Browser");const PP={apiKey:"AIzaSyDRmd2-RK3KKDNQQ2-b8tYAZk9GaVaIuSk",authDomain:"fir-api-5a6f8.firebaseapp.com",databaseURL:"https://fir-api-5a6f8-default-rtdb.firebaseio.com",projectId:"fir-api-5a6f8",storageBucket:"fir-api-5a6f8.appspot.com",messagingSenderId:"127268536194",appId:"1:127268536194:web:ff2d571af93c468f46599b"},mE=p0(PP),Qf=xP(mE),no=iR(mE);async function Ph(t,e){const n=ui(no,`customers/${t}/checkout_sessions`),{id:r}=await SR(n,{mode:"payment",success_url:window.location.origin,cancel_url:window.location.origin,collect_shipping_address:!0,line_items:e.map(s=>({quantity:1,price:s.priceId}))}),i=IR(Pf(no,`customers/${t}/checkout_sessions/${r}`),s=>{let o=s.data().url;o&&(i(),window.location.href=o)})}async function DP(){const t=ui(no,"products"),e=mR(t,gR("active","==",!0)),n=await dl(e),r=[];for await(const i of n.docs){const s=i.data();s.id=i.id;const o=await dl(ui(i.ref,"prices"));s.price=o.docs[0].data(),s.priceId=o.docs[0].id,r.push(s)}return r}async function OP(t){try{const e=ui(no,"products"),n=Pf(e,t),r=await _R(n),i=r.data(),s=await dl(ui(r.ref,"prices"));return i.price=s.docs[0].data(),i.priceId=s.docs[0].id,i}catch(e){console.log(e);return}}async function gE(t,e){try{return await px(Qf,t,e)}catch(n){throw console.error("Error al iniciar sesión:",n.message),n}}async function LP(t){const e=ui(no,`customers/${t}/payments`);return(await dl(e)).docs.map(i=>i.data())}function MP(t){return Pd({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}}]})(t)}function $P(){const{carrito:t}=Ml(),{user:e}=Ll(),[n,r]=k.useState(!1);async function i(l){l.preventDefault();const u=l.target.email.value,c=l.target.password.value,d=await gE(u,c);console.log(d),r(!1),Ph(d.user.uid,t);const p=document.getElementById("buy-button");p.isDisabled=!0,p.classList.add("bg-gray-500"),p.classList.add("cursor-not-allowed"),p.innerText="Comprando..."}function s(){return W("form",{onSubmit:l=>i(l),className:"flex flex-col w-full items-center",children:[T("input",{className:"w-5/6 border-2 border-slate-300 px-5 py-2 my-1 rounded-md",type:"text",name:"email",placeholder:"test@test.com"}),T("input",{className:"w-5/6 border-2 border-slate-300 px-5 py-2 my-1 rounded-md",type:"password",name:"password",placeholder:"123456"}),T("button",{className:"bg-azul px-5 py-2 rounded-md my-1 text-white hover:bg-blue-700 ",children:"Iniciar Sesión"})]})}function o(){if(e){Ph(e.uid,t);const l=document.getElementById("buy-button");l.isDisabled=!0,l.classList.add("bg-gray-500"),l.classList.add("cursor-not-allowed"),l.innerText="Comprando..."}e||r(!0)}return W(pr,{children:[T(()=>T("div",{id:"modal-comprar",className:`absolute top-0 left-0 bg-slate-600/40 w-screen h-screen z-30 backdrop-blur-sm flex flex-col justify-center items-center ${n?"block":"hidden"}`,children:W("div",{className:"bg-white w-1/3 h-1/3 flex flex-col items-center justify-evenly",children:[" ",T("span",{className:"ml-auto mr-5 cursor-pointer",onClick:()=>r(!1),children:T(MP,{})}),T("h3",{className:"font-bold text-slate-500 italic",children:"Inicia Sesión para comprar:"}),T(s,{onSubmit:i})]})}),{}),T("h1",{className:"text-3xl font-bold my-10",children:"Tu carrito:"}),t.length===0?W(t0,{children:[T("p",{className:"text-xl",children:"No hay productos en tu carrito"}),T(Hr,{to:"/",className:"text-azul underline my-3",children:"Volver al inicio"})]}):t==null?void 0:t.map((l,u)=>T(UI,{producto:l},u)),(t==null?void 0:t.length)>0&&W("button",{id:"buy-button",onClick:o,className:"bg-slate-800 px-5 py-3 text-white",children:[" ","COMPRAR"]})]})}function bP(){return T(pr,{children:"Checkout"})}function FP(){const[t,e]=k.useState(null),[n,r]=k.useState(""),[i,s]=k.useState(!0),o=l=>t.filter(u=>u.name.toLowerCase().includes(l.toLowerCase()));return k.useEffect(()=>{async function l(){try{const u=await DP();e(u)}catch(u){console.error("Error fetching products:",u)}finally{s(!1)}}l()},[]),T(pr,{children:W("div",{className:"container mx-auto px-4",children:[T("input",{type:"text",placeholder:"Buscar producto",value:n,onChange:l=>r(l.target.value),style:{padding:"8px",borderRadius:"4px",border:"1px solid #FF7F00",outline:"none"}}),T("button",{onClick:async()=>{if(n){s(!0);try{const l=o(n);e(l)}catch(l){console.error("Error searching products:",l)}finally{s(!1)}}},style:{padding:"8px 16px",borderRadius:"4px",backgroundColor:"#FF7F00",color:"white",border:"none",cursor:"pointer",marginLeft:"8px"},children:"Buscar"}),i?T("p",{children:"Cargando productos..."}):T(FI,{title:"Productos",productos:t})]})})}function UP(){return W(pr,{children:[T("h1",{className:"text-4xl font-bold my-5",children:"Not Found"}),W(Hr,{to:"/",className:"text-xl",children:[" ","No encontramos lo que buscabas,",T("span",{className:"underline text-azul",children:"¿ por qué no regresas al inicio?"})]})]})}function VP(){const{id:t}=tI(),[e,n]=k.useState(null),{carrito:r,setCarrito:i}=Ml(),{user:s}=Ll();k.useEffect(()=>{async function a(){const l=await OP(t);console.log("producto",l),l||(window.location="/notfound"),n(l)}a()},[t]);function o(){i([...r,e])}return T(pr,{children:W("div",{className:"w-full h-full flex items-center justify-between",children:[T("div",{id:"producto-izquierda",className:"w-1/2 p-10",children:T("img",{src:e==null?void 0:e.images[0],alt:e==null?void 0:e.name,className:"max-w-full h-auto"})}),W("div",{id:"producto-derecha ",className:"w-1/2 h-full flex flex-col items-center justify-evenly",children:[T("h1",{className:"text-5xl font-bold underline",children:e==null?void 0:e.name}),T("p",{className:"italic",children:e==null?void 0:e.description}),W("div",{className:"flex items-center w-full justify-evenly",children:[T("button",{onClick:o,className:"bg-black text-white px-5 py-3 rounded-md hover:bg-gray-800 hover:scale-105",children:"AÑADIR A CARRITO"}),T("button",{id:"buy-button-producto",onClick:()=>{o(),Ph(s.uid,[{...e}]);const a=document.getElementById("buy-button-producto");a.isDisabled=!0,a.classList.add("bg-gray-500"),a.classList.add("cursor-not-allowed"),a.innerText="Comprando..."},className:"bg-red-600 text-white px-5 py-3 rounded-md hover:bg-red-800 hover:scale-105",children:"COMPRAR AHORA"})]})]})]})})}function jP(){function t(i){i.preventDefault();const s=i.target.email.value,o=i.target.password.value;gE(s,o)}const{user:e}=Ll(),[n,r]=k.useState([]);return k.useEffect(()=>{async function i(){if(!e)return;console.log("user por usar",e.uid);const s=await LP(e.uid);r(s)}i()},[e]),W(pr,{children:[e?W("p",{className:"text-xl",children:["Bienvenido,"," ",W("span",{className:"font-bold",children:[e.email," - ",e.uid]})]}):W("div",{className:"w-1/2 flex flex-col items-center",children:[T("p",{className:"text-xl my-3",children:"No estas logueado"}),T(VI,{onSubmit:t})]}),n.length>0&&n.map(i=>W("div",{className:"w-full flex flex-row items-center justify-evenly",children:[W("h3",{children:[i.amount/100," "]}),W("span",{className:"flex  ",children:[" ",i.items.map(s=>T("p",{className:"mx-3",children:s.description},s.description))]})]})),e&&T("button",{onClick:()=>vx(Qf),className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-10",children:"Cerrar Sesión"})]})}function BP(){return T(pr,{children:"Login"})}function zP(){const{user:t,setUser:e}=Ll();return yx(Qf,n=>{n&&e(n),n||e(null)}),W(gI,{children:[T(Xt,{path:"/",element:T(FP,{})}),T(Xt,{path:"producto/:id",element:T(VP,{})}),T(Xt,{path:"perfil",element:T(jP,{})}),T(Xt,{path:"carrito",element:T($P,{})}),T(Xt,{path:"checkout",element:T(bP,{})}),T(Xt,{path:"login",element:T(BP,{})}),T(Xt,{path:"*",element:T(UP,{})})]})}CS.render(T(PI,{children:T(DI,{children:T(II,{children:T(zP,{})})})}),document.getElementById("root"));
