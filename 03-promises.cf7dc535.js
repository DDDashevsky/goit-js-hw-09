function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("eWCmQ");const l=document.querySelector(".form"),u=l.elements.delay,s=l.elements.step,d=l.elements.amount,a=l.querySelector("button");function f(t,n){new Promise(((e,o)=>{Math.random()>.3?e({position:t,delay:n}):o({position:t,delay:n})})).then((({position:t,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t+1} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.warning(`❌ Rejected promise ${t+1} in ${n}ms`)})).finally((()=>a.removeAttribute("disabled")))}l.addEventListener("submit",(function(e){e.preventDefault();const t=Number(u.value),n=Number(s.value),o=Number(d.value);!function(e,t,n){a.setAttribute("disabled","true"),console.log("test");for(let o=0;o<n;o+=1)setTimeout(f,e,o,e),e+=t}(t,n,o)}));
//# sourceMappingURL=03-promises.cf7dc535.js.map