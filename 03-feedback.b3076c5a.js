!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var o,i,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(O,t),d?b(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=g();if(S(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?p(n,a-(e-c)):n}(e))}function T(e){return f=void 0,m&&o?b(e):(o=i=void 0,u)}function h(){var e=g(),n=S(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=x(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(x(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},h.flush=function(){return void 0===f?u:T(g())},h}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var j,S,O="feedback-form-state",T={},h={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")};h.form.addEventListener("submit",(function(e){e.preventDefault(),T[h.input.name]&&T[h.textarea.name]?(console.log(T),console.log("отправляем форму"),e.currentTarget.reset(),localStorage.removeItem(O),T[h.input.name]="",T[h.textarea.name]=""):console.log("заполните все поля формы")})),h.form.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(T))}),500)),j=localStorage.getItem(O),S=JSON.parse(j),console.log(S),j&&(S.email&&(h.input.value=S.email,T[h.input.name]=S.email),S.message&&(h.textarea.value=S.message,T[h.textarea.name]=S.message))}();
//# sourceMappingURL=03-feedback.b3076c5a.js.map
