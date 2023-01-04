/*!
 * bRando.js v1.0.1
 * https://brandojs.isaacyakl.com
 * Built: 1/4/2023, 12:45:00 AM GMT-08:00
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.bRando=e():t.bRando=e()}(this,(function(){return function(){"use strict";var t={d:function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{create:function(){return s}});var r=JSON.parse('{"Xv":{"KM":"bRando"}}');function n(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class i{get CSSSelector(){return this._CSSSelector}get nodes(){return this._nodes}get backgrounds(){return this._backgrounds}set backgrounds(t){if(Array.isArray(t)&&t.every((t=>"string"==typeof t)))this._backgrounds=t;else{let t=Array.from(document.scripts).find((t=>t.src.includes(r.Xv.KM))),e=void 0===t?"./img/":`${t.src.substring(0,t.src.lastIndexOf(`${r.Xv.KM}.js`))}img/`;this._backgrounds=[`url("${e}alex-knight-vaA6EQiUSo4-unsplash_result.jpg") center/cover no-repeat`,`url("${e}joel-fulgencio-01fAtHwYqo0-unsplash_result.jpg") center/cover no-repeat`,`url("${e}pawel-nolbert-4u2U8EO9OzY-unsplash_result.jpg") center/cover no-repeat`,`url("${e}stephan-valentin-oqYLdbuJDQU-unsplash_result.jpg") center/cover no-repeat`,`url("${e}waranont-joe-T7qyLNPwgKA-unsplash_result.jpg") center/cover no-repeat`,"linear-gradient(80deg, #0864c8 25%, #588fca 75%)"]}}get timeout(){return this._timeout}set timeout(t){this._timeout=t&&t>0?t:7500,-1!==this._changer&&(this.pause(),this.play())}get random(){return this._random}set random(t){this._random="boolean"!=typeof t||t}get transition(){return this._transition}set transition(t){this._transition="string"!=typeof t?"5000ms":t}get currentBackgroundIndex(){return this._currentBackgroundIndex}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,"_CSSSelector",""),n(this,"_backgrounds",[]),n(this,"_timeout",0),n(this,"_random",!0),n(this,"_transition",""),n(this,"_originalCSSBackgrounds",[]),n(this,"_originalCSSPositions",[]),n(this,"_originalCSSZIndexes",[]),n(this,"_changer",-1),n(this,"_isAfterOpaque",!1),n(this,"_currentBackgroundIndex",-1),this._CSSSelector="string"!=typeof t.CSSSelector?"body":t.CSSSelector,this._nodes=document.querySelectorAll(this.CSSSelector),this.backgrounds=t.backgrounds,this.timeout=t.timeout,this.random=t.random,this.transition=t.transition,this.nodes.forEach((t=>{this._originalCSSBackgrounds.push(t.style.background),this._originalCSSPositions.push(t.style.position),this._originalCSSZIndexes.push(t.style.zIndex),t.style.position="relative"})),this._styleElement=document.createElement("style"),this._CSSBackgroundVarName=`--bRandoBg${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSOpacityVarName=`--bRandoOpacity${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSTransitionVarName=`--bRandoTransition${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSContentVarName=`--bRandoContent${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._styleElement.innerText=`${this.CSSSelector}::after{background:var(${this._CSSBackgroundVarName});content:var(${this._CSSContentVarName});position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;opacity:var(${this._CSSOpacityVarName});transition: var(${this._CSSTransitionVarName});}`,document.head.append(this._styleElement),this.nodes.forEach((t=>{t.style.setProperty(this._CSSOpacityVarName,"0"),t.style.setProperty(this._CSSTransitionVarName,`opacity ${this.transition}`),t.style.setProperty(this._CSSContentVarName,"''"),t.style.zIndex="0"})),this.play()}play(){this.pause(),this._changer=window.setInterval((()=>{this.next()}),this.timeout)}pause(){window.clearInterval(this._changer),this._changer=-1}next(){const t=()=>{let t;do{t=Math.floor(Math.random()*this.backgrounds.length)}while(this.currentBackgroundIndex===t);return t};-1!==this._changer&&this.play(),this.backgrounds.length>1?this._currentBackgroundIndex=this.random?t():this.currentBackgroundIndex===this.backgrounds.length-1?this._currentBackgroundIndex=0:this.currentBackgroundIndex+1:-1===this._currentBackgroundIndex&&(this._currentBackgroundIndex=0),this.nodes.forEach((t=>{t.style.setProperty(this._CSSTransitionVarName,`opacity ${this.transition}`),this._isAfterOpaque?(t.style.background=this.backgrounds[this.currentBackgroundIndex],t.style.setProperty(this._CSSOpacityVarName,"0")):(t.style.setProperty(this._CSSBackgroundVarName,this.backgrounds[this.currentBackgroundIndex]),t.style.setProperty(this._CSSOpacityVarName,"1"))})),this._isAfterOpaque=!this._isAfterOpaque}remove(){this.pause(),this.nodes.forEach(((t,e)=>{t.style.setProperty(this._CSSOpacityVarName,"0"),t.style.setProperty(this._CSSContentVarName,"none"),t.style.background=this._originalCSSBackgrounds[e],t.style.position=this._originalCSSPositions[e],t.style.zIndex=this._originalCSSZIndexes[e]})),this._styleElement.remove()}isRunning(){return-1!==this._changer}}function s(t){return new i(t)}return e}()}));
//# sourceMappingURL=bRando.js.map