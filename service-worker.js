if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,o)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const c=e=>t(e,i),l={module:{uri:i},exports:r,require:c};s[i]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(o(...e),r)))}}define(["./workbox-40664da7"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"0014b5d4bc964d74809438724b440589"}],{}),e.registerRoute(/^.*$/,new e.NetworkFirst({cacheName:"lobsters-cache",plugins:[new e.ExpirationPlugin({maxAgeSeconds:31536e3})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
