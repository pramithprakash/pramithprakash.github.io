(function($){$.scrollorama=function(options){var scrollorama=this,blocks=[],browserPrefix='',onBlockChange=function(){},latestKnownScrollY=0,ticking=false,requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);},defaults={offset:0,enablePin:true};scrollorama.settings=$.extend({},defaults,options);scrollorama.blockIndex=0;if(options.blocks===undefined){alert('ERROR: Must assign blocks class selector to scrollorama plugin');}
function init(){var i,block,didScroll=false;if(typeof scrollorama.settings.blocks==='string'){scrollorama.settings.blocks=$(scrollorama.settings.blocks);}
if($.browser.mozilla){browserPrefix='-moz-';}
if($.browser.webkit){browserPrefix='-webkit-';}
if($.browser.opera){browserPrefix='-o-';}
if($.browser.msie){browserPrefix='-ms-';}
$('body').css('position','relative');for(i=0;i<scrollorama.settings.blocks.length;i++){block=scrollorama.settings.blocks.eq(i);blocks.push({block:block,top:block.offset().top-parseInt(block.css('margin-top'),10),pin:0,animations:[]});}
if(scrollorama.settings.enablePin.toString()==='true'){for(i=0;i<blocks.length;i++){blocks[i].block.css('position','absolute').css('top',blocks[i].top);}}
$('body').prepend('<div id="scroll-wrap"></div>');latestKnownScrollY=0;ticking=false;$(window).scroll(onScroll);}
function onScroll(){latestKnownScrollY=window.scrollY;requestTick();}
function requestTick(){if(!ticking){requestAnimFrame(function(){onScrollorama();update();});}
ticking=true;}
function update(){ticking=false;}
function onScrollorama(){var scrollTop=$(window).scrollTop(),currBlockIndex=getCurrBlockIndex(scrollTop),i,j,anim,startAnimPos,endAnimPos,animPercent,animVal;for(i=0;i<blocks.length;i++){if(blocks[i].animations.length){for(j=0;j<blocks[i].animations.length;j++){anim=blocks[i].animations[j];if(i>currBlockIndex){if(currBlockIndex!==i-1&&anim.baseline!=='bottom'){setProperty(anim.element,anim.property,anim.startVal);}
if(blocks[i].pin){blocks[i].block.css('position','absolute').css('top',blocks[i].top);}}
else if(i<currBlockIndex){setProperty(anim.element,anim.property,anim.endVal);if(blocks[i].pin){blocks[i].block.css('position','absolute').css('top',(blocks[i].top+blocks[i].pin));}}
if(i===currBlockIndex||(currBlockIndex===i-1&&anim.baseline==='bottom')){if(blocks[i].pin&&currBlockIndex===i){blocks[i].block.css('position','fixed').css('top',0);}
startAnimPos=blocks[i].top+anim.delay;if(anim.baseline==='bottom'){startAnimPos-=$(window).height();}
endAnimPos=startAnimPos+anim.duration;if(scrollTop<startAnimPos){setProperty(anim.element,anim.property,anim.startVal);}
else if(scrollTop>endAnimPos){setProperty(anim.element,anim.property,anim.endVal);if(blocks[i].pin){blocks[i].block.css('position','absolute').css('top',(blocks[i].top+blocks[i].pin));}}
else{animPercent=(scrollTop-startAnimPos)/anim.duration;if(anim.easing&&$.isFunction($.easing[anim.easing])){animPercent=$.easing[anim.easing](animPercent,animPercent*1000,0,1,1000);}
animVal=anim.startVal+(animPercent*(anim.endVal-anim.startVal));setProperty(anim.element,anim.property,animVal);}}}}}
if(scrollorama.blockIndex!==currBlockIndex){scrollorama.blockIndex=currBlockIndex;onBlockChange();}}
function getCurrBlockIndex(scrollTop){var currBlockIndex=0,i;for(i=0;i<blocks.length;i++){if(blocks[i].top<=scrollTop-scrollorama.settings.offset){currBlockIndex=i;}}
return currBlockIndex;}
function setProperty(target,prop,val){var scaleCSS,currentPosition;if(prop==='rotate'||prop==='zoom'||prop==='scale'){if(prop==='rotate'){target.css(browserPrefix+'transform','rotate('+val+'deg)');}else if(prop==='zoom'||prop==='scale'){scaleCSS='scale('+val+')';if(browserPrefix!=='-ms-'){target.css(browserPrefix+'transform',scaleCSS);}else{target.css('zoom',scaleCSS);}}}
else if(prop==='background-position-x'||prop==='background-position-y'){currentPosition=target.css('background-position').split(' ');if(prop==='background-position-x'){target.css('background-position',val+'px '+currentPosition[1]);}
if(prop==='background-position-y'){target.css('background-position',currentPosition[0]+' '+val+'px');}}
else if(prop==='text-shadow'){target.css(prop,'0px 0px '+val+'px #ffffff');}else{target.css(prop,val);}}
scrollorama.animate=function(target){var targetIndex,targetBlock,anim,offset,i,j;if(typeof target==='string'){target=$(target);}
for(i=0;i<blocks.length;i++){if(blocks[i].block.has(target).length){targetBlock=blocks[i];targetIndex=i;}}
for(i=1;i<arguments.length;i++){anim=arguments[i];if(anim.property==='top'||anim.property==='left'||anim.property==='bottom'||anim.property==='right'){if(target.css('position')==='static'){target.css('position','relative');}
cssValue=parseInt(target.css(anim.property),10);if(anim.start===undefined){anim.start=isNaN(cssValue)?0:cssValue;}else if(anim.end===undefined){anim.end=isNaN(cssValue)?0:cssValue;}}
if(anim.property==='rotate'){if(anim.start===undefined){anim.start=0;}
if(anim.end===undefined){anim.end=0;}}else if(anim.property==='zoom'||anim.property==='scale'){if(anim.start===undefined){anim.start=1;}
if(anim.end===undefined){anim.end=1;}}else if(anim.property==='letter-spacing'&&target.css(anim.property)){if(anim.start===undefined){anim.start=1;}
if(anim.end===undefined){anim.end=1;}}
if(anim.baseline===undefined){if(anim.pin||targetBlock.pin||targetIndex===0){anim.baseline='top';}else{anim.baseline='bottom';}}
if(anim.delay===undefined){anim.delay=0;}
targetBlock.animations.push({element:target,delay:anim.delay,duration:anim.duration,property:anim.property,startVal:anim.start!==undefined?anim.start:parseInt(target.css(anim.property),10),endVal:anim.end!==undefined?anim.end:parseInt(target.css(anim.property),10),baseline:anim.baseline!==undefined?anim.baseline:'bottom',easing:anim.easing});if(anim.pin){if(targetBlock.pin<anim.duration+anim.delay){offset=anim.duration+anim.delay-targetBlock.pin;targetBlock.pin+=offset;for(j=targetIndex+1;j<blocks.length;j++){blocks[j].top+=offset;blocks[j].block.css('top',blocks[j].top);}}}}
onScrollorama();};scrollorama.onBlockChange=function(f){onBlockChange=f;};scrollorama.getScrollpoints=function(){var scrollpoints=[],i,j,anim;for(i=0;i<blocks.length;i++){scrollpoints.push(blocks[i].top);if(blocks[i].animations.length&&blocks[i].pin>0){for(j=0;j<blocks[i].animations.length;j++){anim=blocks[i].animations[j];scrollpoints.push(blocks[i].top+anim.delay+anim.duration);}}}
scrollpoints.sort(function(a,b){return a-b;});return scrollpoints;};init();return scrollorama;};$.extend($.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return $.easing[$.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1){return c/2*t*t+b;}
return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t+b;}
return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t+b;}
return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t*t+b;}
return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t===0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t===d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t===0){return b;}
if(t===d){return b+c;}
if((t/=d/2)<1){return c/2*Math.pow(2,10*(t-1))+b;}
return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1){return-c/2*(Math.sqrt(1-t*t)-1)+b;}
return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158,p=0,a=c;if(t===0){return b;}
if((t/=d)===1){return b+c;}
if(!p){p=d*0.3;}
if(a<Math.abs(c)){a=c;s=p/4;}
else{s=p/(2*Math.PI)*Math.asin(c/a);}
return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158,p=0,a=c;if(t===0){return b;}
if((t/=d)===1){return b+c;}
if(!p){p=d*0.3;}
if(a<Math.abs(c)){a=c;s=p/4;}
else{s=p/(2*Math.PI)*Math.asin(c/a);}
return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158,p=0,a=c;if(t===0){return b;}
if((t/=d/2)===2){return b+c;}
if(!p){p=d*(0.3*1.5);}
if(a<Math.abs(c)){a=c;s=p/4;}
else{s=p/(2*Math.PI)*Math.asin(c/a);}
if(t<1){return-0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;}
return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s===undefined){s=1.70158;}
return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s===undefined){s=1.70158;}
return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s===undefined){s=1.70158;}
if((t/=d/2)<1){return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;}
return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-$.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+0.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+0.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+0.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2){return $.easing.easeInBounce(x,t*2,0,c,d)*0.5+b;}
return $.easing.easeOutBounce(x,t*2-d,0,c,d)*0.5+c*0.5+b;}});})(jQuery);