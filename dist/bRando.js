!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.bRando=e():t.bRando=e()}(this,(function(){return function(){"use strict";var t={d:function(e,r){for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}t.r(e),t.d(e,{create:function(){return n}});class i{get CSSSelector(){return this._CSSSelector}get nodes(){return this._nodes}get backgrounds(){return this._backgrounds}set backgrounds(t){Array.isArray(t)&&t.every((t=>"string"==typeof t))?this._backgrounds=t:this._backgrounds=['url("./img/alex-knight-vaA6EQiUSo4-unsplash_result.jpg") center/cover no-repeat','url("./img/joel-fulgencio-01fAtHwYqo0-unsplash_result.jpg") center/cover no-repeat','url("./img/pawel-nolbert-4u2U8EO9OzY-unsplash_result.jpg") center/cover no-repeat','url("./img/stephan-valentin-oqYLdbuJDQU-unsplash_result.jpg") center/cover no-repeat','url("./img/waranont-joe-T7qyLNPwgKA-unsplash_result.jpg") center/cover no-repeat',"linear-gradient(90deg, rgba(231,4,222,1) 25%, rgba(126,126,126,1) 50%, rgba(10,233,227,1) 75%)"]}get timeout(){return this._timeout}set timeout(t){this._timeout=t&&t>0?t:1e4,-1!==this._changer&&(this.pause(),this.play())}get random(){return this._random}set random(t){this._random="boolean"!=typeof t||t}get CSSTransition(){return this._CSSTransition}set CSSTransition(t){this._CSSTransition="string"!=typeof t?"5000ms":t}get lastBackground(){return this._lastBackground}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,"_CSSSelector",""),r(this,"_backgrounds",[]),r(this,"_timeout",0),r(this,"_random",!0),r(this,"_CSSTransition",""),r(this,"_originalCSSBackgrounds",[]),r(this,"_originalCSSPositions",[]),r(this,"_changer",-1),r(this,"_isAfterOpaque",!1),r(this,"_lastBackground",-1),this._CSSSelector="string"!=typeof t.CSSSelector?"body":t.CSSSelector,this._nodes=document.querySelectorAll(this.CSSSelector),this.backgrounds=t.CSSBackgrounds,this.timeout=t.timeoutMs,this.random=t.randomOrder,this.CSSTransition=t.CSSTransition,this.nodes.forEach((t=>{this._originalCSSBackgrounds.push(t.style.background),this._originalCSSPositions.push(t.style.position),t.style.position="relative"})),this._styleElement=document.createElement("style"),this._CSSBackgroundVarName=`--bRandoBg${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSOpacityVarName=`--bRandoOpacity${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSTransitionVarName=`--bRandoTransition${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSContentVarName=`--bRandoContent${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._styleElement.innerText=`${this.CSSSelector}::after{background:var(${this._CSSBackgroundVarName});content:var(${this._CSSContentVarName});position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;opacity:var(${this._CSSOpacityVarName});transition: var(${this._CSSTransitionVarName});}`,document.head.append(this._styleElement),this.nodes.forEach((t=>{t.style.setProperty(this._CSSOpacityVarName,"0"),t.style.setProperty(this._CSSTransitionVarName,`opacity ${this.CSSTransition}`),t.style.setProperty(this._CSSContentVarName,"''"),t.style.zIndex="0"})),this.play()}play(){this.next(),this._changer=window.setInterval((()=>{this.next()}),this.timeout)}pause(){clearInterval(this._changer)}next(){this._lastBackground=this.random?(()=>{let t;do{t=Math.floor(Math.random()*this.backgrounds.length)}while(this.lastBackground===t);return t})():this.lastBackground===this.backgrounds.length-1?this._lastBackground=0:this.lastBackground+1,this.nodes.forEach((t=>{t.style.setProperty(this._CSSTransitionVarName,`opacity ${this.CSSTransition}`),this._isAfterOpaque?(t.style.background=this.backgrounds[this.lastBackground],t.style.setProperty(this._CSSOpacityVarName,"0")):(t.style.setProperty(this._CSSBackgroundVarName,this.backgrounds[this.lastBackground]),t.style.setProperty(this._CSSOpacityVarName,"1"))})),this._isAfterOpaque=!this._isAfterOpaque}remove(){this.pause(),this.nodes.forEach(((t,e)=>{t.style.setProperty(this._CSSOpacityVarName,"0"),t.style.setProperty(this._CSSContentVarName,"none"),t.style.background=this._originalCSSBackgrounds[e],t.style.position=this._originalCSSPositions[e]})),this._styleElement.remove()}}function n(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new i(t)}return e}()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBRTlLckMsS0FBS29CLE1BQU0wQixTQUFTQyxJQUNsQkEsRUFBa0JHLE1BQU1jLFlBQVloRSxLQUFLMkQsc0JBQXdCLFdBQVUzRCxLQUFLbUMsaUJBQzVFbkMsS0FBSzJFLGdCQUlSNUIsRUFBa0JHLE1BQU1DLFdBQWFuRCxLQUFLc0IsWUFBWXRCLEtBQUtxQyxnQkFDM0RVLEVBQWtCRyxNQUFNYyxZQUFZaEUsS0FBSzBELG1CQUFvQixPQUo3RFgsRUFBa0JHLE1BQU1jLFlBQVloRSxLQUFLd0Qsc0JBQXVCeEQsS0FBS3NCLFlBQVl0QixLQUFLcUMsaUJBQ3RGVSxFQUFrQkcsTUFBTWMsWUFBWWhFLEtBQUswRCxtQkFBb0IsS0FJL0QsSUFFRDFELEtBQUsyRSxnQkFBa0IzRSxLQUFLMkUsY0FDN0IsQ0FDQUMsU0FDQzVFLEtBQUsrQixRQUNML0IsS0FBS29CLE1BQU0wQixTQUFRLENBQUNDLEVBQUc4QixLQUVyQjlCLEVBQWtCRyxNQUFNYyxZQUFZaEUsS0FBSzBELG1CQUFvQixLQUM3RFgsRUFBa0JHLE1BQU1jLFlBQVloRSxLQUFLNEQsbUJBQW9CLFFBQzdEYixFQUFrQkcsTUFBTUMsV0FBYW5ELEtBQUtnRCx3QkFBd0I2QixHQUNsRTlCLEVBQWtCRyxNQUFNRyxTQUFXckQsS0FBS29ELHNCQUFzQnlCLEVBQUUsSUFFbEU3RSxLQUFLc0QsY0FBY3NCLFFBQ3BCLEVDeEpNLFNBQVNFLElBQXFKLElBQTlJdEMsRUFBa0ksVUFBSCw2Q0FBRyxDQUFDLEVBQ3pKLE9BQU8sSUFBSXZCLEVBQU91QixFQUNuQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYlJhbmRvL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9iUmFuZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYlJhbmRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iUmFuZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iUmFuZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iUmFuZG8vLi9zcmMvYlJhbmRvLnRzIiwid2VicGFjazovL2JSYW5kby8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJiUmFuZG9cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYlJhbmRvXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgYlJhbmRvIHtcclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX0NTU1NlbGVjdG9yOiBzdHJpbmcgPSBcIlwiO1xyXG5cdHB1YmxpYyBnZXQgQ1NTU2VsZWN0b3IoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9DU1NTZWxlY3RvcjtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCByZWFkb25seSBfbm9kZXM6IE5vZGVMaXN0O1xyXG5cdHByb3RlY3RlZCBnZXQgbm9kZXMoKTogTm9kZUxpc3Qge1xyXG5cdFx0cmV0dXJuIHRoaXMuX25vZGVzO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9iYWNrZ3JvdW5kczogc3RyaW5nW10gPSBbXTtcclxuXHRwdWJsaWMgZ2V0IGJhY2tncm91bmRzKCk6IHN0cmluZ1tdIHtcclxuXHRcdHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kcztcclxuXHR9XHJcblx0cHVibGljIHNldCBiYWNrZ3JvdW5kcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcclxuXHRcdGlmIChcclxuXHRcdFx0QXJyYXkuaXNBcnJheSh2YWx1ZSkgJiZcclxuXHRcdFx0dmFsdWUuZXZlcnkoKGIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIGIgPT09IFwic3RyaW5nXCI7XHJcblx0XHRcdH0pXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5fYmFja2dyb3VuZHMgPSB2YWx1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIGRlbW8gYmFja2dyb3VuZHNcclxuXHRcdFx0Ly8gcHJldHRpZXItaWdub3JlXHJcblx0XHRcdHRoaXMuX2JhY2tncm91bmRzID0gW1xyXG5cdFx0XHRcdCd1cmwoXCIuL2ltZy9hbGV4LWtuaWdodC12YUE2RVFpVVNvNC11bnNwbGFzaF9yZXN1bHQuanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQnLCBcclxuXHRcdFx0XHQndXJsKFwiLi9pbWcvam9lbC1mdWxnZW5jaW8tMDFmQXRId1lxbzAtdW5zcGxhc2hfcmVzdWx0LmpwZ1wiKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0JywgXHJcblx0XHRcdFx0J3VybChcIi4vaW1nL3Bhd2VsLW5vbGJlcnQtNHUyVThFTzlPelktdW5zcGxhc2hfcmVzdWx0LmpwZ1wiKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0JyxcclxuXHRcdFx0XHQndXJsKFwiLi9pbWcvc3RlcGhhbi12YWxlbnRpbi1vcVlMZGJ1SkRRVS11bnNwbGFzaF9yZXN1bHQuanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQnLFxyXG5cdFx0XHRcdCd1cmwoXCIuL2ltZy93YXJhbm9udC1qb2UtVDdxeUxOUHdnS0EtdW5zcGxhc2hfcmVzdWx0LmpwZ1wiKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0JyxcclxuXHRcdFx0XHQnbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIzMSw0LDIyMiwxKSAyNSUsIHJnYmEoMTI2LDEyNiwxMjYsMSkgNTAlLCByZ2JhKDEwLDIzMywyMjcsMSkgNzUlKScsXHJcblx0XHRcdF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3RpbWVvdXQ6IG51bWJlciA9IDA7XHJcblx0cHVibGljIGdldCB0aW1lb3V0KCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdGltZW91dDtcclxuXHR9XHJcblx0cHVibGljIHNldCB0aW1lb3V0KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZSA+IDApIHtcclxuXHRcdFx0dGhpcy5fdGltZW91dCA9IHZhbHVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fdGltZW91dCA9IDEwMDAwO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuX2NoYW5nZXIgIT09IC0xKSB7XHJcblx0XHRcdHRoaXMucGF1c2UoKTtcclxuXHRcdFx0dGhpcy5wbGF5KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3JhbmRvbTogYm9vbGVhbiA9IHRydWU7XHJcblx0cHVibGljIGdldCByYW5kb20oKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmFuZG9tO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0IHJhbmRvbSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5fcmFuZG9tID0gdHlwZW9mIHZhbHVlICE9PSBcImJvb2xlYW5cIiA/IHRydWUgOiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfQ1NTVHJhbnNpdGlvbjogc3RyaW5nID0gXCJcIjtcclxuXHRwdWJsaWMgZ2V0IENTU1RyYW5zaXRpb24oKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9DU1NUcmFuc2l0aW9uO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0IENTU1RyYW5zaXRpb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5fQ1NTVHJhbnNpdGlvbiA9IHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIiA/IFwiNTAwMG1zXCIgOiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCByZWFkb25seSBfb3JpZ2luYWxDU1NCYWNrZ3JvdW5kczogc3RyaW5nW10gPSBbXTtcclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX29yaWdpbmFsQ1NTUG9zaXRpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG5cdHByb3RlY3RlZCBfY2hhbmdlcjogbnVtYmVyID0gLTE7XHJcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9zdHlsZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cdHByb3RlY3RlZCBfaXNBZnRlck9wYXF1ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByb3RlY3RlZCByZWFkb25seSBfQ1NTQmFja2dyb3VuZFZhck5hbWU6IHN0cmluZztcclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX0NTU09wYWNpdHlWYXJOYW1lOiBzdHJpbmc7XHJcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9DU1NUcmFuc2l0aW9uVmFyTmFtZTogc3RyaW5nO1xyXG5cdHByb3RlY3RlZCByZWFkb25seSBfQ1NTQ29udGVudFZhck5hbWU6IHN0cmluZztcclxuXHJcblx0cHJvdGVjdGVkIF9sYXN0QmFja2dyb3VuZDogbnVtYmVyID0gLTE7XHJcblx0cHVibGljIGdldCBsYXN0QmFja2dyb3VuZCgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xhc3RCYWNrZ3JvdW5kO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9uczogeyBDU1NTZWxlY3Rvcj86IHN0cmluZzsgQ1NTQmFja2dyb3VuZHM/OiBzdHJpbmdbXTsgdGltZW91dE1zPzogbnVtYmVyOyByYW5kb21PcmRlcj86IGJvb2xlYW47IENTU1RyYW5zaXRpb24/OiBzdHJpbmcgfSA9IHt9KSB7XHJcblx0XHR0aGlzLl9DU1NTZWxlY3RvciA9IHR5cGVvZiBvcHRpb25zLkNTU1NlbGVjdG9yICE9PSBcInN0cmluZ1wiID8gXCJib2R5XCIgOiBvcHRpb25zLkNTU1NlbGVjdG9yO1xyXG5cdFx0dGhpcy5fbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuQ1NTU2VsZWN0b3IpO1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kcyA9IG9wdGlvbnMuQ1NTQmFja2dyb3VuZHM7XHJcblx0XHR0aGlzLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXRNcztcclxuXHRcdHRoaXMucmFuZG9tID0gb3B0aW9ucy5yYW5kb21PcmRlcjtcclxuXHRcdHRoaXMuQ1NTVHJhbnNpdGlvbiA9IG9wdGlvbnMuQ1NTVHJhbnNpdGlvbjtcclxuXHRcdHRoaXMubm9kZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG5cdFx0XHR0aGlzLl9vcmlnaW5hbENTU0JhY2tncm91bmRzLnB1c2goKGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQpOyAvLyBiYWNrdXAgdGhlIG9yaWdpbmFsIENTUyBiYWNrZ3JvdW5kIHByb3BlcnR5XHJcblx0XHRcdHRoaXMuX29yaWdpbmFsQ1NTUG9zaXRpb25zLnB1c2goKGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnBvc2l0aW9uKTsgLy8gYmFja3VwIHRoZSBvcmlnaW5hbCBDU1MgcG9zaXRpb24gcHJvcGVydHlcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiOyAvLyBzZXQgZWFjaCBlbGVtZW50IHRvIGJlIHJlbGF0aXZlXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX3N0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRcdHRoaXMuX0NTU0JhY2tncm91bmRWYXJOYW1lID0gYC0tYlJhbmRvQmcke3RoaXMuQ1NTU2VsZWN0b3IucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIlwiKX1gO1xyXG5cdFx0dGhpcy5fQ1NTT3BhY2l0eVZhck5hbWUgPSBgLS1iUmFuZG9PcGFjaXR5JHt0aGlzLkNTU1NlbGVjdG9yLnJlcGxhY2UoL1teYS16MC05XS9naSwgXCJcIil9YDtcclxuXHRcdHRoaXMuX0NTU1RyYW5zaXRpb25WYXJOYW1lID0gYC0tYlJhbmRvVHJhbnNpdGlvbiR7dGhpcy5DU1NTZWxlY3Rvci5yZXBsYWNlKC9bXmEtejAtOV0vZ2ksIFwiXCIpfWA7XHJcblx0XHR0aGlzLl9DU1NDb250ZW50VmFyTmFtZSA9IGAtLWJSYW5kb0NvbnRlbnQke3RoaXMuQ1NTU2VsZWN0b3IucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIlwiKX1gO1xyXG5cdFx0dGhpcy5fc3R5bGVFbGVtZW50LmlubmVyVGV4dCA9IGAke3RoaXMuQ1NTU2VsZWN0b3J9OjphZnRlcntiYWNrZ3JvdW5kOnZhcigke3RoaXMuX0NTU0JhY2tncm91bmRWYXJOYW1lfSk7Y29udGVudDp2YXIoJHt0aGlzLl9DU1NDb250ZW50VmFyTmFtZX0pO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6LTE7b3BhY2l0eTp2YXIoJHt0aGlzLl9DU1NPcGFjaXR5VmFyTmFtZX0pO3RyYW5zaXRpb246IHZhcigke3RoaXMuX0NTU1RyYW5zaXRpb25WYXJOYW1lfSk7fWA7XHJcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZCh0aGlzLl9zdHlsZUVsZW1lbnQpO1xyXG5cdFx0dGhpcy5ub2Rlcy5mb3JFYWNoKChlKSA9PiB7XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NPcGFjaXR5VmFyTmFtZSwgXCIwXCIpO1xyXG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuc2V0UHJvcGVydHkodGhpcy5fQ1NTVHJhbnNpdGlvblZhck5hbWUsIGBvcGFjaXR5ICR7dGhpcy5DU1NUcmFuc2l0aW9ufWApO1xyXG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuc2V0UHJvcGVydHkodGhpcy5fQ1NTQ29udGVudFZhck5hbWUsIFwiJydcIik7XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS56SW5kZXggPSBcIjBcIjtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMucGxheSgpO1xyXG5cdH1cclxuXHJcblx0cGxheSgpOiB2b2lkIHtcclxuXHRcdHRoaXMubmV4dCgpO1xyXG5cdFx0dGhpcy5fY2hhbmdlciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdHRoaXMubmV4dCgpO1xyXG5cdFx0fSwgdGhpcy50aW1lb3V0KTtcclxuXHR9XHJcblx0cGF1c2UoKTogdm9pZCB7XHJcblx0XHRjbGVhckludGVydmFsKHRoaXMuX2NoYW5nZXIpO1xyXG5cdH1cclxuXHRuZXh0KCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgZ2V0TmV3UmFuZG9tQmFja2dyb3VuZEluZGV4ID0gKCk6IG51bWJlciA9PiB7XHJcblx0XHRcdGxldCBuZXdJbmRleDogbnVtYmVyO1xyXG5cdFx0XHRkbyB7XHJcblx0XHRcdFx0bmV3SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmJhY2tncm91bmRzLmxlbmd0aCk7XHJcblx0XHRcdH0gd2hpbGUgKHRoaXMubGFzdEJhY2tncm91bmQgPT09IG5ld0luZGV4KTtcclxuXHRcdFx0cmV0dXJuIG5ld0luZGV4O1xyXG5cdFx0fTtcclxuXHRcdHRoaXMuX2xhc3RCYWNrZ3JvdW5kID0gdGhpcy5yYW5kb20gPyBnZXROZXdSYW5kb21CYWNrZ3JvdW5kSW5kZXgoKSA6IHRoaXMubGFzdEJhY2tncm91bmQgPT09IHRoaXMuYmFja2dyb3VuZHMubGVuZ3RoIC0gMSA/ICh0aGlzLl9sYXN0QmFja2dyb3VuZCA9IDApIDogdGhpcy5sYXN0QmFja2dyb3VuZCArIDE7XHJcblxyXG5cdFx0dGhpcy5ub2Rlcy5mb3JFYWNoKChlKSA9PiB7XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NUcmFuc2l0aW9uVmFyTmFtZSwgYG9wYWNpdHkgJHt0aGlzLkNTU1RyYW5zaXRpb259YCk7XHJcblx0XHRcdGlmICghdGhpcy5faXNBZnRlck9wYXF1ZSkge1xyXG5cdFx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NCYWNrZ3JvdW5kVmFyTmFtZSwgdGhpcy5iYWNrZ3JvdW5kc1t0aGlzLmxhc3RCYWNrZ3JvdW5kXSk7XHJcblx0XHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuX0NTU09wYWNpdHlWYXJOYW1lLCBcIjFcIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLmJhY2tncm91bmRzW3RoaXMubGFzdEJhY2tncm91bmRdO1xyXG5cdFx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NPcGFjaXR5VmFyTmFtZSwgXCIwXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX2lzQWZ0ZXJPcGFxdWUgPSAhdGhpcy5faXNBZnRlck9wYXF1ZTtcclxuXHR9XHJcblx0cmVtb3ZlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5wYXVzZSgpO1xyXG5cdFx0dGhpcy5ub2Rlcy5mb3JFYWNoKChlLCBpKSA9PiB7XHJcblx0XHRcdC8vIGhpZGUgcHNldWRvIDo6YWZ0ZXIgZWxlbWVudHNcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuX0NTU09wYWNpdHlWYXJOYW1lLCBcIjBcIik7XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NDb250ZW50VmFyTmFtZSwgXCJub25lXCIpO1xyXG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuX29yaWdpbmFsQ1NTQmFja2dyb3VuZHNbaV07IC8vIHJlc3RvcmUgb3JpZ2luYWwgQ1NTIGJhY2tncm91bmQgcHJvcGVydHlcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnBvc2l0aW9uID0gdGhpcy5fb3JpZ2luYWxDU1NQb3NpdGlvbnNbaV07IC8vIHJlc3RvcmUgb3JpZ2luYWwgQ1NTIHBvc2l0aW9uIHByb3BlcnR5XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX3N0eWxlRWxlbWVudC5yZW1vdmUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IGJSYW5kbyBmcm9tIFwiLi9iUmFuZG9cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUob3B0aW9uczogeyBDU1NTZWxlY3Rvcj86IHN0cmluZzsgQ1NTQmFja2dyb3VuZHM/OiBzdHJpbmdbXTsgdGltZW91dE1zPzogbnVtYmVyOyByYW5kb21PcmRlcj86IGJvb2xlYW47IENTU1RyYW5zaXRpb24/OiBzdHJpbmcgfSA9IHt9KTogYlJhbmRvIHtcclxuXHRyZXR1cm4gbmV3IGJSYW5kbyhvcHRpb25zKTtcclxufVxyXG4iXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwidGhpcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwiYlJhbmRvIiwiQ1NTU2VsZWN0b3IiLCJfQ1NTU2VsZWN0b3IiLCJub2RlcyIsIl9ub2RlcyIsImJhY2tncm91bmRzIiwiX2JhY2tncm91bmRzIiwiQXJyYXkiLCJpc0FycmF5IiwiZXZlcnkiLCJiIiwidGltZW91dCIsIl90aW1lb3V0IiwiX2NoYW5nZXIiLCJwYXVzZSIsInBsYXkiLCJyYW5kb20iLCJfcmFuZG9tIiwiQ1NTVHJhbnNpdGlvbiIsIl9DU1NUcmFuc2l0aW9uIiwibGFzdEJhY2tncm91bmQiLCJfbGFzdEJhY2tncm91bmQiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJDU1NCYWNrZ3JvdW5kcyIsInRpbWVvdXRNcyIsInJhbmRvbU9yZGVyIiwiZm9yRWFjaCIsImUiLCJfb3JpZ2luYWxDU1NCYWNrZ3JvdW5kcyIsInB1c2giLCJzdHlsZSIsImJhY2tncm91bmQiLCJfb3JpZ2luYWxDU1NQb3NpdGlvbnMiLCJwb3NpdGlvbiIsIl9zdHlsZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiX0NTU0JhY2tncm91bmRWYXJOYW1lIiwicmVwbGFjZSIsIl9DU1NPcGFjaXR5VmFyTmFtZSIsIl9DU1NUcmFuc2l0aW9uVmFyTmFtZSIsIl9DU1NDb250ZW50VmFyTmFtZSIsImlubmVyVGV4dCIsImhlYWQiLCJhcHBlbmQiLCJzZXRQcm9wZXJ0eSIsInpJbmRleCIsIm5leHQiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJuZXdJbmRleCIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsImdldE5ld1JhbmRvbUJhY2tncm91bmRJbmRleCIsIl9pc0FmdGVyT3BhcXVlIiwicmVtb3ZlIiwiaSIsImNyZWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=