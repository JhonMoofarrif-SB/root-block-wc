(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,F=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),Y=new WeakMap;let nt=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Y.set(e,t))}return t}toString(){return this.cssText}};const dt=i=>new nt(typeof i=="string"?i:i+"",void 0,W),ut=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,r,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new nt(e,i,W)},ht=(i,t)=>{if(F)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),r=U.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=e.cssText,i.appendChild(o)}},J=F?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return dt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bt,defineProperty:pt,getOwnPropertyDescriptor:yt,getOwnPropertyNames:ft,getOwnPropertySymbols:vt,getPrototypeOf:gt}=Object,g=globalThis,Z=g.trustedTypes,mt=Z?Z.emptyScript:"",H=g.reactiveElementPolyfillSupport,w=(i,t)=>i,N={toAttribute(i,t){switch(t){case Boolean:i=i?mt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},q=(i,t)=>!bt(i,t),G={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:q};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);let k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,e);r!==void 0&&pt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){const{get:r,set:n}=yt(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:r,set(s){const l=r==null?void 0:r.call(this);n==null||n.call(this,s),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??G}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=gt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,o=[...ft(e),...vt(e)];for(const r of o)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,r]of e)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const r=this._$Eu(e,o);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)e.unshift(J(r))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ht(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){var n;const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const s=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:N).toAttribute(e,o.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){var n,s;const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const l=o.getPropertyOptions(r),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)==null?void 0:n.fromAttribute)!==void 0?l.converter:N;this._$Em=r;const c=a.fromAttribute(e,l.type);this[r]=c??((s=this._$Ej)==null?void 0:s.get(r))??c,this._$Em=null}}requestUpdate(t,e,o){var r;if(t!==void 0){const n=this.constructor,s=this[t];if(o??(o=n.getPropertyOptions(t)),!((o.hasChanged??q)(s,e)||o.useDefault&&o.reflect&&s===((r=this._$Ej)==null?void 0:r.get(t))&&!this.hasAttribute(n._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:r,wrapped:n},s){o&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,s??e??this[t]),n!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,s]of r){const{wrapped:l}=s,a=this[n];l!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,s,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[w("elementProperties")]=new Map,k[w("finalized")]=new Map,H==null||H({ReactiveElement:k}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,M=C.trustedTypes,X=M?M.createPolicy("lit-html",{createHTML:i=>i}):void 0,st="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,at="?"+v,$t=`<${at}>`,A=document,T=()=>A.createComment(""),P=i=>i===null||typeof i!="object"&&typeof i!="function",K=Array.isArray,_t=i=>K(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",j=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,tt=/>/g,$=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,rt=/"/g,lt=/^(?:script|style|textarea|title)$/i,xt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),At=xt(1),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ot=new WeakMap,_=A.createTreeWalker(A,129);function ct(i,t){if(!K(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(t):t}const St=(i,t)=>{const e=i.length-1,o=[];let r,n=t===2?"<svg>":t===3?"<math>":"",s=L;for(let l=0;l<e;l++){const a=i[l];let c,h,d=-1,p=0;for(;p<a.length&&(s.lastIndex=p,h=s.exec(a),h!==null);)p=s.lastIndex,s===L?h[1]==="!--"?s=Q:h[1]!==void 0?s=tt:h[2]!==void 0?(lt.test(h[2])&&(r=RegExp("</"+h[2],"g")),s=$):h[3]!==void 0&&(s=$):s===$?h[0]===">"?(s=r??L,d=-1):h[1]===void 0?d=-2:(d=s.lastIndex-h[2].length,c=h[1],s=h[3]===void 0?$:h[3]==='"'?rt:et):s===rt||s===et?s=$:s===Q||s===tt?s=L:(s=$,r=void 0);const f=s===$&&i[l+1].startsWith("/>")?" ":"";n+=s===L?a+$t:d>=0?(o.push(c),a.slice(0,d)+st+a.slice(d)+v+f):a+v+(d===-2?l:f)}return[ct(i,n+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class R{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let n=0,s=0;const l=t.length-1,a=this.parts,[c,h]=St(t,e);if(this.el=R.createElement(c,o),_.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=_.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(st)){const p=h[s++],f=r.getAttribute(d).split(v),D=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:D[2],strings:f,ctor:D[1]==="."?Et:D[1]==="?"?Lt:D[1]==="@"?wt:B}),r.removeAttribute(d)}else d.startsWith(v)&&(a.push({type:6,index:n}),r.removeAttribute(d));if(lt.test(r.tagName)){const d=r.textContent.split(v),p=d.length-1;if(p>0){r.textContent=M?M.emptyScript:"";for(let f=0;f<p;f++)r.append(d[f],T()),_.nextNode(),a.push({type:2,index:++n});r.append(d[p],T())}}}else if(r.nodeType===8)if(r.data===at)a.push({type:2,index:n});else{let d=-1;for(;(d=r.data.indexOf(v,d+1))!==-1;)a.push({type:7,index:n}),d+=v.length-1}n++}}static createElement(t,e){const o=A.createElement("template");return o.innerHTML=t,o}}function E(i,t,e=i,o){var s,l;if(t===S)return t;let r=o!==void 0?(s=e._$Co)==null?void 0:s[o]:e._$Cl;const n=P(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=r:e._$Cl=r),r!==void 0&&(t=E(i,r._$AS(i,t.values),r,o)),t}class kt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=((t==null?void 0:t.creationScope)??A).importNode(e,!0);_.currentNode=r;let n=_.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new I(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new Ct(n,this,t)),this._$AV.push(c),a=o[++l]}s!==(a==null?void 0:a.index)&&(n=_.nextNode(),s++)}return _.currentNode=A,r}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class I{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),P(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_t(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=R.createElement(ct(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(e);else{const s=new kt(r,this),l=s.u(this.options);s.p(e),this.T(l),this._$AH=s}}_$AC(t){let e=ot.get(t.strings);return e===void 0&&ot.set(t.strings,e=new R(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const n of t)r===e.length?e.push(o=new I(this.O(T()),this.O(T()),this,this.options)):o=e[r],o._$AI(n),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=u}_$AI(t,e=this,o,r){const n=this.strings;let s=!1;if(n===void 0)t=E(this,t,e,0),s=!P(t)||t!==this._$AH&&t!==S,s&&(this._$AH=t);else{const l=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=E(this,l[o+a],e,a),c===S&&(c=this._$AH[a]),s||(s=!P(c)||c!==this._$AH[a]),c===u?t=u:t!==u&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}s&&!r&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class Lt extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class wt extends B{constructor(t,e,o,r,n){super(t,e,o,r,n),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??u)===S)return;const o=this._$AH,r=t===u&&o!==u||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==u&&(o===u||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ct{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const z=C.litHtmlPolyfillSupport;z==null||z(R,I),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.3.1");const Ot=(i,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let r=o._$litPart$;if(r===void 0){const n=(e==null?void 0:e.renderBefore)??null;o._$litPart$=r=new I(t.insertBefore(T(),n),n,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis;let O=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}};var it;O._$litElement$=!0,O.finalized=!0,(it=x.litElementHydrateSupport)==null||it.call(x,{LitElement:O});const V=x.litElementPolyfillSupport;V==null||V({LitElement:O});(x.litElementVersions??(x.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:q},Rt=(i=Pt,t,e)=>{const{kind:o,metadata:r}=e;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),o==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(e.name,i),o==="accessor"){const{name:s}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,i)},init(l){return l!==void 0&&this.C(s,void 0,i,l),l}}}if(o==="setter"){const{name:s}=e;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,i)}}throw Error("Unsupported decorator location: "+o)};function m(i){return(t,e)=>typeof e=="object"?Rt(i,t,e):((o,r,n)=>{const s=r.hasOwnProperty(n);return r.constructor.createProperty(n,o),s?Object.getOwnPropertyDescriptor(r,n):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It={ATTRIBUTE:1},Dt=i=>(...t)=>({_$litDirective$:i,values:t});class Ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=Dt(class extends Ut{constructor(i){var t;if(super(i),i.type!==It.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var o,r;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((o=this.nt)!=null&&o.has(n))&&this.st.add(n);return this.render(t)}const e=i.element.classList;for(const n of this.st)n in t||(e.remove(n),this.st.delete(n));for(const n in t){const s=!!t[n];s===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(s?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return S}});class Mt extends O{dispatchCustomEvent(t,e,o){return this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0,...o}))}getCSSCustomProperty(t){return getComputedStyle(this).getPropertyValue(t).trim()}setCSSCustomProperty(t,e){this.style.setProperty(t,e)}}var Bt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,y=(i,t,e,o)=>{for(var r=o>1?void 0:o?Ht(t,e):t,n=i.length-1,s;n>=0;n--)(s=i[n])&&(r=(o?s(t,e,r):s(r))||r);return o&&r&&Bt(t,e,r),r};let b=class extends Mt{constructor(){super(...arguments),this.variant="primary",this.typeStyle="fill",this.type="button",this.disabled=!1,this.loading=!1,this.fullWidth=!1,this.iconOnly=!1,this.ariaLabel=null}_handleClick(i){if(this.disabled||this.loading){i.preventDefault(),i.stopPropagation();return}this.dispatchCustomEvent("rb-button-click",{originalEvent:i})}render(){const i={button:!0,[`button--${this.variant}`]:!0,[`button--${this.typeStyle}`]:!0,"button--loading":this.loading,"button--icon-only":this.iconOnly};return At`
      <button
        class=${Nt(i)}
        type=${this.type}
        ?disabled=${this.disabled||this.loading}
        aria-label=${this.ariaLabel??void 0}
        aria-busy=${this.loading?"true":"false"}
        @click=${this._handleClick}
      >
        <slot name="icon-left"></slot>
        <slot></slot>
        <slot name="icon-right"></slot>
      </button>
    `}};b.styles=ut`
    :host {
      display: inline-block;
      --rb-button-transition: all 0.2s ease;
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      cursor: not-allowed;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 8px 16px;
      border: 1px solid transparent;
      border-radius: 50px;
      font-family: var(--typography-fontFamily, 'Roboto', sans-serif);
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      user-select: none;
      transition: var(--rb-button-transition);
      position: relative;
      outline: none;
      box-sizing: border-box;
      white-space: nowrap;
      min-height: 40px;
    }

    /* Icon only - circular */
    .button--icon-only {
      width: 40px;
      height: 40px;
      padding: 0;
      border-radius: 50%;
      gap: 0;
    }

    /* ========================================
       PRIMARY VARIANT
       ======================================== */
    
    /* Primary Fill */
    .button--primary.button--fill {
      background-color: var(--color-primary-base);
      color: var(--color-secondary-base);
      border-color: var(--color-primary-base);
    }

    .button--primary.button--fill:hover:not(:disabled) {
      background-color: var(--color-primary-D100);
      color: var(--color-secondary-base);
      border-color: var(--color-primary-D100);
    }

    .button--primary.button--fill:active:not(:disabled) {
      background-color: var(--color-primary-D200);
      color: var(--color-secondary-base);
      border-color: var(--color-primary-D200);
      box-shadow: inset 0px 2px 4px rgba(115, 115, 115, 0.16), inset 0px 0px 6px rgba(115, 115, 115, 0.16);
    }

    .button--primary.button--fill:focus-visible:not(:disabled) {
      background-color: var(--color-primary-base);
      color: var(--color-secondary-base);
      border: 2px solid var(--color-primary-L100);
    }

    .button--primary.button--fill:disabled {
      background-color: var(--color-primary-L400);
      border-color: var(--color-primary-L400);
      color: var(--color-primary-L100);
    }

    .button--primary.button--fill:disabled:hover {
      background-color: var(--color-primary-L300);
      border-color: var(--color-primary-L300);
      color: var(--color-primary-L100);
    }

    /* Primary Stroke */
    .button--primary.button--stroke {
      background-color: transparent;
      color: var(--color-primary-base);
      border-color: var(--color-primary-base);
    }

    .button--primary.button--stroke:hover:not(:disabled) {
      background-color: var(--color-primary-L400);
      border-color: var(--color-primary-base);
      color: var(--color-primary-base);
    }

    .button--primary.button--stroke:active:not(:disabled) {
      background-color: var(--color-primary-L300);
      border-color: var(--color-primary-base);
      color: var(--color-primary-base);
    }

    .button--primary.button--stroke:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-primary-L100);
      outline-offset: 2px;
    }

    .button--primary.button--stroke:disabled {
      background-color: transparent;
      border-color: var(--color-primary-L400);
      color: var(--color-primary-L100);
    }

    .button--primary.button--stroke:disabled:hover {
      background-color: var(--color-primary-L400);
      border-color: var(--color-primary-L400);
      color: var(--color-primary-L100);
    }

    /* Primary Text */
    .button--primary.button--text {
      background-color: transparent;
      color: var(--color-primary-base);
      border-color: transparent;
      text-decoration: underline;
      text-decoration-style: solid;
    }

    .button--primary.button--text:hover:not(:disabled) {
      background-color: var(--color-primary-L400);
      color: var(--color-primary-base);
    }

    .button--primary.button--text:active:not(:disabled) {
      background-color: var(--color-primary-L300);
      color: var(--color-primary-base);
    }

    .button--primary.button--text:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-primary-L100);
      outline-offset: 2px;
    }

    .button--primary.button--text:disabled {
      background-color: transparent;
      color: var(--color-primary-L100);
    }

    .button--primary.button--text:disabled:hover {
      background-color: var(--color-primary-L400);
      color: var(--color-primary-L100);
    }

    /* ========================================
       SECONDARY VARIANT
       ======================================== */
    
    /* Secondary Fill */
    .button--secondary.button--fill {
      background-color: var(--color-secondary-base);
      color: var(--color-primary-base);
      border-color: var(--color-secondary-base);
    }

    .button--secondary.button--fill:hover:not(:disabled) {
      background-color: var(--color-secondary-D100);
      color: var(--color-primary-base);
      border-color: var(--color-secondary-D100);
    }

    .button--secondary.button--fill:active:not(:disabled) {
      background-color: var(--color-secondary-D200);
      color: var(--color-primary-base);
      border-color: var(--color-secondary-D200);
    }

    .button--secondary.button--fill:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-secondary-base);
      outline-offset: 2px;
    }

    .button--secondary.button--fill:disabled {
      background-color: var(--color-grayscale-L200);
      border-color: var(--color-grayscale-L200);
      color: var(--color-grayscale-Base);
    }

    /* Secondary Stroke */
    .button--secondary.button--stroke {
      background-color: transparent;
      color: var(--color-secondary-base);
      border-color: var(--color-secondary-base);
    }

    .button--secondary.button--stroke:hover:not(:disabled) {
      background-color: var(--color-secondary-L400);
      border-color: var(--color-secondary-D100);
      color: var(--color-secondary-base);
    }

    .button--secondary.button--stroke:active:not(:disabled) {
      background-color: var(--color-secondary-L300);
      border-color: var(--color-secondary-D200);
      color: var(--color-secondary-base);
    }

    .button--secondary.button--stroke:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-secondary-base);
      outline-offset: 2px;
    }

    .button--secondary.button--stroke:disabled {
      background-color: transparent;
      border-color: var(--color-grayscale-L200);
      color: var(--color-grayscale-Base);
    }

    /* Secondary Text */
    .button--secondary.button--text {
      background-color: transparent;
      color: var(--color-secondary-base);
      border-color: transparent;
      text-decoration: underline;
      text-decoration-style: solid;
    }

    .button--secondary.button--text:hover:not(:disabled) {
      background-color: var(--color-secondary-L400);
      color: var(--color-secondary-base);
    }

    .button--secondary.button--text:active:not(:disabled) {
      background-color: var(--color-secondary-L300);
      color: var(--color-secondary-base);
    }

    .button--secondary.button--text:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-secondary-base);
      outline-offset: 2px;
    }

    .button--secondary.button--text:disabled {
      background-color: transparent;
      color: var(--color-grayscale-Base);
    }

    /* ========================================
       TERTIARY VARIANT
       ======================================== */
    
    /* Tertiary Fill */
    .button--tertiary.button--fill {
      background-color: var(--color-tertiary-base);
      color: #ffffff;
      border-color: var(--color-tertiary-base);
    }

    .button--tertiary.button--fill:hover:not(:disabled) {
      background-color: var(--color-tertiary-D100);
      border-color: var(--color-tertiary-D100);
    }

    .button--tertiary.button--fill:active:not(:disabled) {
      background-color: var(--color-tertiary-D200);
      border-color: var(--color-tertiary-D200);
    }

    .button--tertiary.button--fill:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-tertiary-base);
      outline-offset: 2px;
    }

    .button--tertiary.button--fill:disabled {
      background-color: var(--color-grayscale-L200);
      border-color: var(--color-grayscale-L200);
      color: var(--color-grayscale-Base);
    }

    /* Tertiary Stroke */
    .button--tertiary.button--stroke {
      background-color: transparent;
      color: var(--color-tertiary-base);
      border-color: var(--color-tertiary-base);
    }

    .button--tertiary.button--stroke:hover:not(:disabled) {
      background-color: var(--color-tertiary-L400);
      border-color: var(--color-tertiary-D100);
      color: var(--color-tertiary-D100);
    }

    .button--tertiary.button--stroke:active:not(:disabled) {
      background-color: var(--color-tertiary-L300);
      border-color: var(--color-tertiary-D200);
      color: var(--color-tertiary-D200);
    }

    .button--tertiary.button--stroke:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-tertiary-base);
      outline-offset: 2px;
    }

    .button--tertiary.button--stroke:disabled {
      background-color: transparent;
      border-color: var(--color-grayscale-L200);
      color: var(--color-grayscale-Base);
    }

    /* Tertiary Text */
    .button--tertiary.button--text {
      background-color: transparent;
      color: var(--color-tertiary-base);
      border-color: transparent;
      text-decoration: underline;
      text-decoration-style: solid;
    }

    .button--tertiary.button--text:hover:not(:disabled) {
      background-color: var(--color-tertiary-L400);
      color: var(--color-tertiary-D100);
    }

    .button--tertiary.button--text:active:not(:disabled) {
      background-color: var(--color-tertiary-L300);
      color: var(--color-tertiary-D200);
    }

    .button--tertiary.button--text:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-tertiary-base);
      outline-offset: 2px;
    }

    .button--tertiary.button--text:disabled {
      background-color: transparent;
      color: var(--color-grayscale-Base);
    }

    /* ========================================
       ERROR VARIANT
       ======================================== */
    
    /* Error Fill */
    .button--error.button--fill {
      background-color: var(--color-error-base);
      color: #ffffff;
      border-color: var(--color-error-base);
    }

    .button--error.button--fill:hover:not(:disabled) {
      background-color: var(--color-error-D100);
      border-color: var(--color-error-D100);
    }

    .button--error.button--fill:active:not(:disabled) {
      background-color: var(--color-error-D200);
      border-color: var(--color-error-D200);
    }

    .button--error.button--fill:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-error-base);
      outline-offset: 2px;
    }

    .button--error.button--fill:disabled {
      background-color: var(--color-error-L300);
      border-color: var(--color-error-L300);
      color: var(--color-error-L100);
    }

    /* Error Stroke */
    .button--error.button--stroke {
      background-color: transparent;
      color: var(--color-error-base);
      border-color: var(--color-error-base);
    }

    .button--error.button--stroke:hover:not(:disabled) {
      background-color: var(--color-error-L400);
      border-color: var(--color-error-D100);
      color: var(--color-error-D100);
    }

    .button--error.button--stroke:active:not(:disabled) {
      background-color: var(--color-error-L300);
      border-color: var(--color-error-D200);
      color: var(--color-error-D200);
    }

    .button--error.button--stroke:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-error-base);
      outline-offset: 2px;
    }

    .button--error.button--stroke:disabled {
      background-color: transparent;
      border-color: var(--color-error-L300);
      color: var(--color-error-L100);
    }

    /* Error Text */
    .button--error.button--text {
      background-color: transparent;
      color: var(--color-error-base);
      border-color: transparent;
      text-decoration: underline;
      text-decoration-style: solid;
    }

    .button--error.button--text:hover:not(:disabled) {
      background-color: var(--color-error-L400);
      color: var(--color-error-D100);
    }

    .button--error.button--text:active:not(:disabled) {
      background-color: var(--color-error-L300);
      color: var(--color-error-D200);
    }

    .button--error.button--text:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-error-base);
      outline-offset: 2px;
    }

    .button--error.button--text:disabled {
      background-color: transparent;
      color: var(--color-error-L100);
    }

    /* ========================================
       LOADING STATE
       ======================================== */
    
    .button--loading {
      position: relative;
      color: transparent !important;
      pointer-events: none;
    }

    .button--loading::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      top: 50%;
      left: 50%;
      margin-left: -8px;
      margin-top: -8px;
      border: 2px solid currentColor;
      border-radius: 50%;
      border-top-color: transparent;
      animation: spinner 0.6s linear infinite;
      color: inherit;
    }

    /* Loading spinner colors */
    .button--loading.button--primary.button--fill::after {
      border-color: var(--color-secondary-base);
      border-top-color: transparent;
    }

    .button--loading.button--primary.button--stroke::after,
    .button--loading.button--primary.button--text::after {
      border-color: var(--color-primary-base);
      border-top-color: transparent;
    }

    .button--loading.button--secondary.button--fill::after {
      border-color: var(--color-primary-base);
      border-top-color: transparent;
    }

    .button--loading.button--secondary.button--stroke::after,
    .button--loading.button--secondary.button--text::after {
      border-color: var(--color-secondary-base);
      border-top-color: transparent;
    }

    .button--loading.button--tertiary.button--fill::after {
      border-color: #ffffff;
      border-top-color: transparent;
    }

    .button--loading.button--tertiary.button--stroke::after,
    .button--loading.button--tertiary.button--text::after {
      border-color: var(--color-tertiary-base);
      border-top-color: transparent;
    }

    .button--loading.button--error.button--fill::after {
      border-color: #ffffff;
      border-top-color: transparent;
    }

    .button--loading.button--error.button--stroke::after,
    .button--loading.button--error.button--text::after {
      border-color: var(--color-error-base);
      border-top-color: transparent;
    }

    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }

    /* ========================================
       FULL WIDTH
       ======================================== */
    
    :host([full-width]) .button {
      width: 100%;
    }

    /* ========================================
       ICONS
       ======================================== */
    
    ::slotted([slot='icon-left']),
    ::slotted([slot='icon-right']) {
      width: 20px;
      height: 20px;
      display: inline-flex;
      flex-shrink: 0;
    }

    .button--icon-only ::slotted([slot='icon-left']) {
      width: 20px;
      height: 20px;
    }
  `;y([m({type:String,reflect:!0})],b.prototype,"variant",2);y([m({type:String,reflect:!0,attribute:"type-style"})],b.prototype,"typeStyle",2);y([m({type:String})],b.prototype,"type",2);y([m({type:Boolean,reflect:!0})],b.prototype,"disabled",2);y([m({type:Boolean,reflect:!0})],b.prototype,"loading",2);y([m({type:Boolean,reflect:!0,attribute:"full-width"})],b.prototype,"fullWidth",2);y([m({type:Boolean,reflect:!0,attribute:"icon-only"})],b.prototype,"iconOnly",2);y([m({type:String,attribute:"aria-label"})],b.prototype,"ariaLabel",2);b=y([Tt("rb-button")],b);const jt=["primary","secondary","tertiary","error"],zt=["default","hover","pressed","focus","loading","disabled","disabled-hover"],Vt=[{typeStyle:"fill",iconLeft:!0,iconRight:!1,iconOnly:!1,label:"Fill<br/>Icon Left"},{typeStyle:"fill",iconLeft:!1,iconRight:!0,iconOnly:!1,label:"Fill<br/>Icon Right"},{typeStyle:"fill",iconLeft:!1,iconRight:!1,iconOnly:!1,label:"Fill<br/>No Icon"},{typeStyle:"fill",iconLeft:!0,iconRight:!1,iconOnly:!0,label:"Fill<br/>Icon Only"},{typeStyle:"stroke",iconLeft:!0,iconRight:!1,iconOnly:!1,label:"Stroke<br/>Icon Left"},{typeStyle:"stroke",iconLeft:!1,iconRight:!0,iconOnly:!1,label:"Stroke<br/>Icon Right"},{typeStyle:"stroke",iconLeft:!1,iconRight:!1,iconOnly:!1,label:"Stroke<br/>No Icon"},{typeStyle:"stroke",iconLeft:!0,iconRight:!1,iconOnly:!0,label:"Stroke<br/>Icon Only"},{typeStyle:"text",iconLeft:!0,iconRight:!1,iconOnly:!1,label:"Text<br/>Icon Left"},{typeStyle:"text",iconLeft:!1,iconRight:!0,iconOnly:!1,label:"Text<br/>Icon Right"},{typeStyle:"text",iconLeft:!1,iconRight:!1,iconOnly:!1,label:"Text<br/>No Icon"},{typeStyle:"text",iconLeft:!0,iconRight:!1,iconOnly:!0,label:"Text<br/>Icon Only"}];function Ft(){return`<svg viewBox="0 0 24 24" width="18" height="18">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <line x1="12" y1="7" x2="12" y2="17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`}function Wt(i,t,e){const{typeStyle:o,iconLeft:r,iconRight:n,iconOnly:s}=t,l=[`variant="${i}"`,`type-style="${o}"`];s&&l.push("icon-only"),e==="loading"&&l.push("loading"),(e==="disabled"||e==="disabled-hover")&&l.push("disabled");const a=Ft();let c="";return s?c=`<span slot="icon-left">${a}</span>`:r?c=`<span slot="icon-left">${a}</span>Button`:n?c=`Button<span slot="icon-right">${a}</span>`:c="Button",`<rb-button ${l.join(" ")}>${c}</rb-button>`}function qt(){let i="";return i+='<div class="matrix-header"></div>',i+='<div class="matrix-header-type" style="grid-column: span 4;">FILL</div>',i+='<div class="matrix-header-type" style="grid-column: span 4;">STROKE</div>',i+='<div class="matrix-header-type" style="grid-column: span 4;">TEXT</div>',i+='<div class="matrix-header"></div>',i+='<div class="matrix-header-config">Icon Left</div>',i+='<div class="matrix-header-config">Icon Right</div>',i+='<div class="matrix-header-config">No Icon</div>',i+='<div class="matrix-header-config">Icon Only</div>',i+='<div class="matrix-header-config">Icon Left</div>',i+='<div class="matrix-header-config">Icon Right</div>',i+='<div class="matrix-header-config">No Icon</div>',i+='<div class="matrix-header-config">Icon Only</div>',i+='<div class="matrix-header-config">Icon Left</div>',i+='<div class="matrix-header-config">Icon Right</div>',i+='<div class="matrix-header-config">No Icon</div>',i+='<div class="matrix-header-config">Icon Only</div>',jt.forEach(t=>{i+=`<div class="matrix-section-header">${t.charAt(0).toUpperCase()+t.slice(1)}</div>`,zt.forEach(e=>{const o=e.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" ");i+=`<div class="matrix-row-label">${o}</div>`,Vt.forEach(r=>{const n=Wt(t,r,e);i+=`<div class="matrix-cell">${n}</div>`})})}),i}class Kt{constructor(){this.currentBrand="jelpit",this.currentTheme="light",this.init()}init(){const t=document.getElementById("matrix");t&&(t.innerHTML=qt()),this.setupControls(),this.loadTheme()}setupControls(){const t=document.getElementById("brand-select"),e=document.getElementById("theme-select");t&&(t.value=this.currentBrand,t.addEventListener("change",()=>{this.currentBrand=t.value,this.loadTheme()})),e&&(e.value=this.currentTheme,e.addEventListener("change",()=>{this.currentTheme=e.value,this.loadTheme()}))}loadTheme(){const t=document.getElementById("theme-css");t&&t.remove();const e=document.createElement("link");e.id="theme-css",e.rel="stylesheet",e.href=`/tokens/${this.currentBrand}-${this.currentTheme}.css`,document.head.appendChild(e),document.documentElement.setAttribute("data-brand",this.currentBrand),document.documentElement.setAttribute("data-theme",this.currentTheme),console.log(`🎨 Loaded theme: ${this.currentBrand}-${this.currentTheme}`)}}document.addEventListener("DOMContentLoaded",()=>{new Kt});
