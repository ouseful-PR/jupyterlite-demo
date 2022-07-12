var _JUPYTERLAB;(()=>{"use strict";var e,t,r,a,n,o,i,u,f,c,d,l,s,p,h,b,m,v,y,g,w=[,(e,t,r)=>{var a={"./index":()=>r.e(798).then((()=>()=>r(798))),"./extension":()=>r.e(798).then((()=>()=>r(798))),"./style":()=>r.e(534).then((()=>()=>r(534)))},n=(e,t)=>(r.R=t,t=r.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),o=(e,t)=>{if(r.S){var a=r.S.default,n="default";if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[n]=e,r.I(n,t)}};r.d(t,{get:()=>n,init:()=>o})}],k={};function j(e){var t=k[e];if(void 0!==t)return t.exports;var r=k[e]={id:e,exports:{}};return w[e](r,r.exports,j),r.exports}j.m=w,j.c=k,j.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return j.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,j.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"==typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"==typeof r.then)return r}var n=Object.create(null);j.r(n);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,j.d(n,o),n},j.d=(e,t)=>{for(var r in t)j.o(t,r)&&!j.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},j.f={},j.e=e=>Promise.all(Object.keys(j.f).reduce(((t,r)=>(j.f[r](e,t),t)),[])),j.u=e=>(({432:"markdown-it-docutils",588:"markdown-it-front-matter",771:"markdown-it-amsmath",866:"markdown-it-myst-extras"}[e]||e)+"."+{235:"894fa35e64e10915e858",246:"94bd04833467ef38b986",432:"94c92dacc382186e1717",534:"bdd5ea296c96b741f985",588:"458ac6d646d62fbb1f57",658:"ef2ca6d1fd8af5f1a71f",661:"4b2400affe2ceb67cc89",771:"8b12a7ba90f53e919c05",798:"cf1bae1d2b4764923581",866:"7af27e45baac47c7db38"}[e]+".js?v="+{235:"894fa35e64e10915e858",246:"94bd04833467ef38b986",432:"94c92dacc382186e1717",534:"bdd5ea296c96b741f985",588:"458ac6d646d62fbb1f57",658:"ef2ca6d1fd8af5f1a71f",661:"4b2400affe2ceb67cc89",771:"8b12a7ba90f53e919c05",798:"cf1bae1d2b4764923581",866:"7af27e45baac47c7db38"}[e]),j.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),j.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},a="jupyterlab-myst:",j.l=(e,t,n,o)=>{if(r[e])r[e].push(t);else{var i,u;if(void 0!==n)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var d=f[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==a+n){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,j.nc&&i.setAttribute("nonce",j.nc),i.setAttribute("data-webpack",a+n),i.src=e),r[e]=[t];var l=(t,a)=>{i.onerror=i.onload=null,clearTimeout(s);var n=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),t)return t(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),u&&document.head.appendChild(i)}},j.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{j.S={};var e={},t={};j.I=(r,a)=>{a||(a=[]);var n=t[r];if(n||(n=t[r]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[r])return e[r];j.o(j.S,r)||(j.S[r]={});var o=j.S[r],i="jupyterlab-myst",u=(e,t,r,a)=>{var n=o[e]=o[e]||{},u=n[t];(!u||!u.loaded&&(!a!=!u.eager?a:i>u.from))&&(n[t]={get:r,from:i,eager:!!a})},f=[];switch(r){case"default":u("jupyterlab-myst","0.1.6",(()=>j.e(798).then((()=>()=>j(798))))),u("markdown-it-amsmath","0.2.0",(()=>j.e(246).then((()=>()=>j(246))))),u("markdown-it-docutils","0.1.0",(()=>j.e(235).then((()=>()=>j(235))))),u("markdown-it-front-matter","0.2.3",(()=>j.e(661).then((()=>()=>j(661))))),u("markdown-it-myst-extras","0.1.3",(()=>j.e(658).then((()=>()=>j(658)))))}return e[r]=f.length?Promise.all(f).then((()=>e[r]=1)):1}}})(),(()=>{var e;j.g.importScripts&&(e=j.g.location+"");var t=j.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),j.p=e})(),n=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},o=(e,t)=>{e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var a=e[r],o=(typeof a)[0];if(r>=t.length)return"u"==o;var i=t[r],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;r++}},i=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,r+="u"==(typeof(u=e[n]))[0]?"-":(a>0?".":"")+(a=2,u);return r}var o=[];for(n=1;n<e.length;n++){var u=e[n];o.push(0===u?"not("+f()+")":1===u?"("+f()+" || "+f()+")":2===u?o.pop()+" "+o.pop():i(u))}return f();function f(){return o.pop().replace(/^\((.+)\)$/,"$1")}},u=(e,t)=>{if(0 in e){t=n(t);var r=e[0],a=r<0;a&&(r=-r-1);for(var o=0,i=1,f=!0;;i++,o++){var c,d,l=i<e.length?(typeof e[i])[0]:"";if(o>=t.length||"o"==(d=(typeof(c=t[o]))[0]))return!f||("u"==l?i>r&&!a:""==l!=a);if("u"==d){if(!f||"u"!=l)return!1}else if(f)if(l==d)if(i<=r){if(c!=e[i])return!1}else{if(a?c>e[i]:c<e[i])return!1;c!=e[i]&&(f=!1)}else if("s"!=l&&"n"!=l){if(a||i<=r)return!1;f=!1,i--}else{if(i<=r||d<l!=a)return!1;f=!1}else"s"!=l&&"n"!=l&&(f=!1,i--)}}var s=[],p=s.pop.bind(s);for(o=1;o<e.length;o++){var h=e[o];s.push(1==h?p()|p():2==h?p()&p():h?u(h,t):!p())}return!!p()},f=(e,t)=>{var r=j.S[e];if(!r||!j.o(r,t))throw new Error("Shared module "+t+" doesn't exist in shared scope "+e);return r},c=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&o(e,t)?t:e),0)},d=(e,t,r)=>"Unsatisfied version "+t+" of shared singleton module "+e+" (required "+i(r)+")",l=(e,t,r,a)=>{var n=c(e,r);return u(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(d(r,n,a)),p(e[r][n])},s=(e,t,r)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!u(r,t)||e&&!o(e,t)?e:t),0))&&a[t]},p=e=>(e.loaded=1,e.get()),b=(h=e=>function(t,r,a,n){var o=j.I(t);return o&&o.then?o.then(e.bind(e,t,j.S[t],r,a,n)):e(t,j.S[t],r,a,n)})(((e,t,r,a)=>(f(e,r),l(t,0,r,a)))),m=h(((e,t,r,a,n)=>{var o=t&&j.o(t,r)&&s(t,r,a);return o?p(o):n()})),v={},y={80:()=>b("default","@agoose77/jupyterlab-markup",[1,1,0,0]),201:()=>m("default","markdown-it-front-matter",[2,0,2,3],(()=>j.e(661).then((()=>()=>j(661))))),92:()=>m("default","markdown-it-docutils",[2,0,1,0],(()=>j.e(235).then((()=>()=>j(235))))),862:()=>m("default","markdown-it-amsmath",[2,0,2,0],(()=>j.e(246).then((()=>()=>j(246))))),760:()=>m("default","markdown-it-myst-extras",[2,0,1,3],(()=>j.e(658).then((()=>()=>j(658)))))},g={432:[92],588:[201],771:[862],798:[80],866:[760]},j.f.consumes=(e,t)=>{j.o(g,e)&&g[e].forEach((e=>{if(j.o(v,e))return t.push(v[e]);var r=t=>{v[e]=0,j.m[e]=r=>{delete j.c[e],r.exports=t()}},a=t=>{delete v[e],j.m[e]=r=>{throw delete j.c[e],t}};try{var n=y[e]();n.then?t.push(v[e]=n.then(r).catch(a)):r(n)}catch(e){a(e)}}))},(()=>{var e={937:0};j.f.j=(t,r)=>{var a=j.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(432|588|771|866)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=j.p+j.u(t),i=new Error;j.l(o,(r=>{if(j.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,n,[o,i,u]=r,f=0;for(a in i)j.o(i,a)&&(j.m[a]=i[a]);for(u&&u(j),t&&t(r);f<o.length;f++)n=o[f],j.o(e,n)&&e[n]&&e[n][0](),e[o[f]]=0},r=self.webpackChunkjupyterlab_myst=self.webpackChunkjupyterlab_myst||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var S=j(1);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["jupyterlab-myst"]=S})();