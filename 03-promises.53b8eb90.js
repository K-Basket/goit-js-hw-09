!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("h6c0i");function r(e,o){return new Promise((function(n,t){setTimeout((function(){Math.random()>.3&&n({position:e,delay:o}),t({position:e,delay:o})}),o)}))}function a(e){var o=e.position,n=e.delay;console.log("✅",{position:o,delay:n}),i.Notify.success("Fulfilled promise ".concat(o," in ").concat(n,"ms"))}function c(e){var o=e.position,n=e.delay;console.log("❌",{position:o,delay:n}),i.Notify.failure("Rejected promise ".concat(o," in ").concat(n,"ms"))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var o=new FormData(e.currentTarget),n={};o.forEach((function(e,o){n[o]=Number(e)}));for(var t=1;t<=n.amount;t+=1)r(t,n.delay).then(a).catch(c),n.delay+=n.step;e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.53b8eb90.js.map