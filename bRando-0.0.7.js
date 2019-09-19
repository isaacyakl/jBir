const bRando={version:"0.0.7",bRandoBackgroundRandomizers:[],bRandoPreloadedImgs:[],isPreloadedImg:imageURL=>{for(let i=0;i<bRando.bRandoPreloadedImgs.length;i++)if(bRando.bRandoPreloadedImgs[i].src==imageURL)return!0;return!1},new:(selector_string,image_url_arr,interval_ms,transition_ms,transition_type,random_order,background_attachment)=>{let newbRandoBackgroundRandomizer=new bRandoBackgroundRandomizer;return null!=selector_string&&(newbRandoBackgroundRandomizer.selector_string=selector_string),newbRandoBackgroundRandomizer.elements=document.querySelectorAll(newbRandoBackgroundRandomizer.selector_string),0==newbRandoBackgroundRandomizer.elements.length?1:(null!=image_url_arr&&(newbRandoBackgroundRandomizer.image_url_arr=image_url_arr),null!=interval_ms&&(newbRandoBackgroundRandomizer.interval_ms=interval_ms),null!=transition_ms&&(newbRandoBackgroundRandomizer.transition_ms=transition_ms),null!=transition_type&&(newbRandoBackgroundRandomizer.transition_type=transition_type),null!=random_order&&(newbRandoBackgroundRandomizer.random_order=random_order),null!=background_attachment&&(newbRandoBackgroundRandomizer.background_attachment=background_attachment),newbRandoBackgroundRandomizer.og_transition_property=newbRandoBackgroundRandomizer.elements[0].style.transition,newbRandoBackgroundRandomizer.og_background_size_property=newbRandoBackgroundRandomizer.elements[0].style.backgroundSize,newbRandoBackgroundRandomizer.og_background_property=newbRandoBackgroundRandomizer.elements[0].style.background,newbRandoBackgroundRandomizer.image_url_arr.forEach(image_url=>{if(!bRando.isPreloadedImg(image_url)){let newImg=document.createElement("img");newImg.style.display="none",newImg.onerror=()=>{console.error("Error preloading "+newImg.src+".")},newImg.onload=()=>{bRando.bRandoPreloadedImgs.push(newImg),-1==newbRandoBackgroundRandomizer.last_image&&newbRandoBackgroundRandomizer.next()},newImg.src=image_url}}),bRando.bRandoBackgroundRandomizers.forEach(bRandoBackgroundRandomizer=>{if(bRandoBackgroundRandomizer.selector_string===newbRandoBackgroundRandomizer.selector_string)return newbRandoBackgroundRandomizer.og_transition_property=bRandoBackgroundRandomizer.og_transition_property,newbRandoBackgroundRandomizer.og_background_size_property=bRandoBackgroundRandomizer.og_background_size_property,newbRandoBackgroundRandomizer.og_background_property=bRandoBackgroundRandomizer.og_background_property,void bRandoBackgroundRandomizer.remove()}),bRando.bRandoBackgroundRandomizers.push(newbRandoBackgroundRandomizer),newbRandoBackgroundRandomizer.elements.forEach(element=>{element.style.transition="background "+newbRandoBackgroundRandomizer.transition_ms/1e3+"s "+newbRandoBackgroundRandomizer.transition_type}),newbRandoBackgroundRandomizer.next(),newbRandoBackgroundRandomizer.play(),newbRandoBackgroundRandomizer)},nextAll:()=>{var numErrors=0;return bRando.bRandoBackgroundRandomizers.forEach(bRandoBackgroundRandomizer=>{0!=bRandoBackgroundRandomizer.next()&&numErrors++}),numErrors},pauseAll:()=>{var numErrors=0;return bRando.bRandoBackgroundRandomizers.forEach(bRandoBackgroundRandomizer=>{0!=bRandoBackgroundRandomizer.pause()&&numErrors++}),numErrors},playAll:()=>{var numErrors=0;return bRando.bRandoBackgroundRandomizers.forEach(bRandoBackgroundRandomizer=>{0!=bRandoBackgroundRandomizer.play()&&numErrors++}),numErrors},removeAll:()=>{return Array.from(bRando.bRandoBackgroundRandomizers).forEach(bRandoBackgroundRandomizer=>{bRandoBackgroundRandomizer.remove()}),0}};class bRandoBackgroundRandomizer{constructor(){this.selector_string="html",this.elements=[],this.image_url_arr=["https://images.unsplash.com/photo-1497250681960-ef046c08a56e","https://images.unsplash.com/photo-1485841938031-1bf81239b815","https://images.unsplash.com/photo-1543835683-ec5466c68daa","https://images.unsplash.com/photo-1491147334573-44cbb4602074","https://images.unsplash.com/photo-1550353185-761a5da3ee96","https://images.unsplash.com/photo-1449496967047-2a322e78ec26","https://images.unsplash.com/photo-1517789171-f2c4f83f1afd","https://images.unsplash.com/photo-1552084117-56a987666449"],this.interval_ms=1e4,this.transition_ms=3e3,this.transition_type="ease-in-out",this.random_order=!0,this.background_attachment="fixed",this.randomizer_id=null,this.last_image=-1,this.transitioning=!1,this.og_transition_property="",this.og_background_size_property="",this.og_background_property=""}next(){if(this.transitioning)return 1;this.transitioning=!0;let indexOfNextImg=this.last_image;if(1==bRando.bRandoPreloadedImgs.length&&this.image_url_arr.includes(bRando.bRandoPreloadedImgs[0].src))indexOfNextImg=this.image_url_arr.indexOf(bRando.bRandoPreloadedImgs[0].src);else{if(this.random_order)do{indexOfNextImg=Math.floor(Math.random()*(this.image_url_arr.length-1-0+1)+0)}while(indexOfNextImg==this.last_image&&1!=this.image_url_arr.length);else indexOfNextImg=indexOfNextImg=this.last_image+1>this.image_url_arr.length-1?0:++this.last_image;if(!bRando.isPreloadedImg(this.image_url_arr[indexOfNextImg]))return this.transitioning=!1,2}return this.elements.forEach(element=>{element.style.backgroundSize="cover",element.style.background="url('"+this.image_url_arr[indexOfNextImg]+"') no-repeat "+this.background_attachment+" center center"}),this.last_image=indexOfNextImg,this.elements[0].addEventListener("transitionend",()=>{this.transitioning=!1}),null!=this.randomizer_id&&(this.pause(),this.play()),0}pause(){return null!=this.randomizer_id?(clearInterval(this.randomizer_id),this.randomizer_id=null,0):1}play(){return null!=this.randomizer_id?1:(this.randomizer_id=setInterval(()=>this.next(),this.interval_ms),0)}remove(){return this.pause(),this.elements.forEach(element=>{element.style.transition=this.og_transition_property,element.style.backgroundSize=this.og_background_size_property,element.style.background=this.og_background_property}),bRando.bRandoBackgroundRandomizers.splice(bRando.bRandoBackgroundRandomizers.indexOf(this),1),0}}