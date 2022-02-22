(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var f="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},aa=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");},l=aa(this),m=function(a,b){if(b)a:{var c=l;a=a.split(".");for(var d=0;d<a.length-
1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&f(c,a,{configurable:!0,writable:!0,value:b})}};m("Symbol",function(a){if(a)return a;var b=function(g,h){this.g=g;f(this,"description",{configurable:!0,writable:!0,value:h})};b.prototype.toString=function(){return this.g};var c="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",d=0,e=function(g){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new b(c+(g||"")+"_"+d++,g)};return e});
var ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var ca={a:!0},q={};try{q.__proto__=ca;p=q.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var da=n,r=function(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.B=b.prototype};m("globalThis",function(a){return a||l});
m("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(k){return k};var e=[],g="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof g){b=g.call(b);for(var h=0;!(g=b.next()).done;)e.push(c.call(d,g.value,h++))}else for(g=b.length,h=0;h<g;h++)e.push(c.call(d,b[h],h));return e}});var t=this||self,u=function(a){return a};var ea=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};var fa={},v=null;var ha="function"===typeof Uint8Array;var w="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function ia(a){var b;w?b=a[w]:b=a.g;return null==b?0:b}function x(a){Object.isFrozen(a)||(w?a[w]|=1:void 0!==a.g?a.g|=1:Object.defineProperties(a,{g:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a};function ja(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var A,B=Object.freeze(x([])),ka=function(a){a=a.g;if(Array.isArray(a)&&ia(a)&2)throw Error("Cannot mutate an immutable Message");},la="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function ma(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}};var C=function(a,b,c,d){d=void 0===d?!1:d;ka(a);b<a.i&&!d?a.g[b+a.h]=c:(a.j||(a.j=a.g[a.i+a.h]={}))[b]=c;return a};function na(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&ha&&null!=a&&a instanceof Uint8Array){var b;void 0===b&&(b=0);if(!v){v={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var g=c.concat(d[e].split(""));fa[e]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===v[k]&&(v[k]=h)}}}b=fa[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=g=0;g<a.length-2;g+=
3){var y=a[g],z=a[g+1];k=a[g+2];h=b[y>>2];y=b[(y&3)<<4|z>>4];z=b[(z&15)<<2|k>>6];k=b[k&63];c[e++]=h+y+z+k}h=0;k=d;switch(a.length-g){case 2:h=a[g+1],k=b[(h&15)<<2]||d;case 1:a=a[g],c[e]=b[a>>2]+b[(a&3)<<4|h>>4]+k+d}return c.join("")}}return a};function oa(a){var b=pa;b=void 0===b?qa:b;return ra(a,b)}function sa(a,b){if(null!=a){if(Array.isArray(a))a=ra(a,b);else if(ja(a)){var c={},d;for(d in a)c[d]=sa(a[d],b);a=c}else a=b(a);return a}}function ra(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=sa(c[d],b);Array.isArray(a)&&ia(a)&1&&x(c);return c}function pa(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=na(a);return Array.isArray(a)?oa(a):a}function qa(a){return ha&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a};var D=function(a,b,c){a||(a=ta);ta=null;var d=this.constructor.h;a||(a=d?[d]:[]);this.h=(d?0:-1)-(this.constructor.g||0);this.l=void 0;this.g=a;a:{d=this.g.length;a=d-1;if(d&&(d=this.g[a],ja(d))){this.i=a-this.h;this.j=d;break a}void 0!==b&&-1<b?(this.i=Math.max(b,a+1-this.h),this.j=void 0):this.i=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.i)a+=this.h,(d=this.g[a])?Array.isArray(d)&&x(d):this.g[a]=B;else{d=this.j||(this.j=this.g[this.i+this.h]={});var e=d[a];e?Array.isArray(e)&&
x(e):d[a]=B}};D.prototype.toJSON=function(){var a=this.g;return A?a:oa(a)};D.prototype.toString=function(){return this.g.toString()};function ua(a,b){return na(b)}var ta;var E=function(){D.apply(this,arguments)};r(E,D);var va=function(){var a={};Object.defineProperties(E,(a[Symbol.hasInstance]=ma(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),a))};la&&va();var F=function(){E.apply(this,arguments)};r(F,E);var wa=function(){var a={};Object.defineProperties(F,(a[Symbol.hasInstance]=ma(Object[Symbol.hasInstance]),a))};la&&wa();var G,xa=function(){if(void 0===G){var a=null,b=t.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:u,createScript:u,createScriptURL:u})}catch(c){t.console&&t.console.error(c.message)}G=a}else G=a}return G};var H=function(a,b){this.g=b===ya?a:""};H.prototype.toString=function(){return this.g+""};var ya={};var za={},I=function(a,b,c){this.g=c===za?a:""};I.prototype.toString=function(){return this.g.toString()};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Ca=function(a,b){if(!Aa()){var c=Math.random();if(c<b)return c=Ba(),a[Math.floor(c*a.length)]}return null},Ba=function(){if(!globalThis.crypto)return Math.random();try{var a=new Uint32Array(1);globalThis.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},Aa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return ea(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],Da)||1E-4>Math.random()}),Da=function(a){var b;
a:{if(b=t.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};var Fa=function(a){F.call(this,a,-1,Ea)};r(Fa,F);var Ga=function(a,b){return C(a,2,b)},Ha=function(a,b){return C(a,3,b)},Ia=function(a,b){return C(a,4,b)},Ja=function(a,b){return C(a,5,b)},Ka=function(a,b){return C(a,9,b)},La=function(a,b){var c=void 0===c?!1:c;ka(a);if(b){var d=x([]);for(var e=0;e<b.length;e++)d[e]=b[e].g;a.l||(a.l={});a.l[10]=b}else a.l&&(a.l[10]=void 0),d=B;return C(a,10,d,c)},Ma=function(a,b){return C(a,1,b)},Na=function(a){F.call(this,a)};r(Na,F);var Ea=[10,6];var Oa="platform platformVersion architecture model uaFullVersion bitness fullVersionList".split(" ");function Pa(){var a;return null!==(a=t.google_tag_data)&&void 0!==a?a:t.google_tag_data={}}
function Qa(){var a,b;if("function"!==typeof(null===(b=null===(a=t.navigator)||void 0===a?void 0:a.userAgentData)||void 0===b?void 0:b.getHighEntropyValues))return null;var c=Pa();if(c.uach_promise)return c.uach_promise;var d=t.navigator.userAgentData.getHighEntropyValues(Oa).then(function(e){var g;null!==(g=c.uach)&&void 0!==g?g:c.uach=e;return e});return c.uach_promise=d}
function Ra(a){var b;return La(Ka(Ja(Ia(Ha(Ga(Ma(new Fa,a.platform||""),a.platformVersion||""),a.architecture||""),a.model||""),a.uaFullVersion||""),a.bitness||""),(null===(b=a.fullVersionList)||void 0===b?void 0:b.map(function(c){var d=new Na;d=C(d,1,c.brand);return C(d,2,c.version)}))||[])};var Sa=function(a,b){b=void 0===b?!0:b;try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return b;case "http:":return!1}}catch(d){}return!0}(t,!1)?"https:":"http:",Ta={},Ua=(Ta[1]="A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
Ta);var Va={A:1,s:4,u:5,v:12},J={o:"40004006",m:"40004007"};function Wa(){return{1:.5,4:.02,5:.001,12:.001}}function Xa(){var a=Ya,b=typeof a;if(("object"!=b||null==a)&&"function"!=b)return!1;for(var c in Va)if(b=a[Va[c]],"number"!==typeof b||0>b||1<b)return!1;return!0};function Za(){var a=t.dcmads;if(null!=a.eids)return a.eids;var b=t.navigator;return b.connection&&b.connection.saveData?(a=Ca([J.o,J.m],a.expts[4]))?"4|"+a:"":""}function $a(){if(!t.dcmads.uach){var a=Qa();a&&a.then(function(b){var c=t.dcmads;a:{b=Ra(b);A=!0;try{var d=JSON.stringify(b.toJSON(),ua);break a}finally{A=!1}d=void 0}c.uach=d})}};try{t.dcmads=t.dcmads||{};t.dcmads.startTime=(new Date).getTime();var ab=t.dcmads,K=t.dcmads.version,L={loader:246};if(K)if(L.experiment=K.experiment,84==K.number||"p"==K.number)L.number=84;else if(85==K.number||"c"==K.number)L.number=85;if(!L.number){var bb=Ca([84,85],.01);L.experiment=!!bb;L.number=bb||84}ab.version=L;var cb=t.dcmads,db,Ya=t.dcmads.expts,M;M=void 0===M?Wa:M;db=Xa()?Ya:M();cb.expts=db;t.dcmads.eids=Za();t.dcmads.ots=Ua;$a();var eb="4|"+J.m,fb=t.dcmads.version,gb=fb.number,hb="";
fb.experiment&&84==gb&&(hb="?rxp=84x85");var ib="impl_v"+gb+".js"+hb,jb=t.document,kb=jb.currentScript||Array.from(jb.getElementsByTagName("script")).pop(),N=(0==(kb&&kb.src||"").indexOf("http:")?"http:":"https:")+"//www.googletagservices.com/dcm/"+ib;if(t.dcmads.eids===eb){var lb=t.document,O,mb=xa(),nb=mb?mb.createScriptURL(N):N;O=new H(nb,ya);var P,Q=lb;Q=void 0===Q?document:Q;P=Q.createElement("script");P.src=O instanceof H&&O.constructor===H?O.g:"type_error:TrustedResourceUrl";var ob,R,pb=(P.ownerDocument&&
P.ownerDocument.defaultView||window).document,S=null===(R=pb.querySelector)||void 0===R?void 0:R.call(pb,"script[nonce]");(ob=S?S.nonce||S.getAttribute("nonce")||"":"")&&P.setAttribute("nonce",ob);var T=lb.getElementsByTagName("script")[0];T&&T.parentNode&&T.parentNode.insertBefore(P,T)}else{var qb=t.document,U,rb='<script src="'+N+'">\x3c/script>',sb=xa(),tb=sb?sb.createHTML(rb):rb;U=new I(tb,null,za);qb.write(U instanceof I&&U.constructor===I?U.g:"type_error:SafeHtml")}}catch(a){if(.01>Math.random()){var V=
"";try{var W,X=a.toString();a.name&&-1==X.indexOf(a.name)&&(X+=": "+a.name);a.message&&-1==X.indexOf(a.message)&&(X+=": "+a.message);if(a.stack){var Y=a.stack,Z=X;try{-1==Y.indexOf(Z)&&(Y=Z+"\n"+Y);for(var ub;Y!=ub;)ub=Y,Y=Y.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");X=Y.replace(/\n */g,"\n")}catch(b){X=Z}}W=X;W=W.substring(0,1024);V=encodeURIComponent(W)}catch(b){V="extr"}var vb=t.dcmads.eids,wb=document.createElement("img");wb.src=Sa+"//pagead2.googlesyndication.com/pagead/gen_204?id=dcmads-err&ver=246&context=554"+
((vb?"&eids="+vb:"")+"&msg="+V);(t.google_image_requests=t.google_image_requests||[]).push(wb)}};}).call(this);
