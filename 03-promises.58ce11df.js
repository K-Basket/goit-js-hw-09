var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("iQIUW");function r(e,o){return new Promise(((n,t)=>{setTimeout((()=>{Math.random()>.3&&n({position:e,delay:o}),t({position:e,delay:o})}),o)}))}function l({position:e,delay:o}){console.log("✅",{position:e,delay:o}),i.Notify.success(`Fulfilled promise ${e} in ${o}ms`)}function a({position:e,delay:o}){console.log("❌",{position:e,delay:o}),i.Notify.failure(`Rejected promise ${e} in ${o}ms`)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const o=new FormData(e.currentTarget),n={};o.forEach(((e,o)=>{n[o]=Number(e)}));for(let e=1;e<=n.amount;e+=1)r(e,n.delay).then(l).catch(a),n.delay+=n.step;e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.58ce11df.js.map