define(["jquery","vendor/angular-min"],function(e,t){"use strict";return t.module("Data.controllers",[]).filter("trust",["$filter","$sce",function(e,t){return function(e){return t.trustAsHtml(e)}}]).controller("dataController",["$scope","$parse","$http","$window",function(t,n,r,i){var s=function(){function v(){var n=window.location.hash;n=e.trim(""+n.substring(1)),n.charAt(0)==="/"&&(n=e.trim(""+n.substring(1))),t.hash=n,n===""&&(n="home",t.hash=n,window.location.hash="#home",e("body").addClass("active")),e("body").hasClass("active")||e("body").addClass("active")}function m(){p=new Date,d=h.getTime()-p.getTime();var e=d/1e3,n=Math.abs(e);t.miliseconds=parseInt(n),t.$apply()}function g(){t.$$phase||t.$apply()}function y(){u+=1,t.miliseconds=parseInt(u),g(),u>parseInt(Math.abs(d)/1e3)&&(s=setInterval(m,1e3),clearInterval(o))}function b(){c++,t.years=c,g(),c===t.data.years&&clearInterval(f)}function w(){t.animTitle=t.animTitle+t.data.homeTitle.charAt(l),g();if(l===t.data.homeTitle.length){clearInterval(a),l=0,a=setInterval(E,100);return}l++}function E(){t.animContent=t.animContent+t.data.homeText.charAt(l),g();if(l===t.data.homeText.length){t.blink=!1,clearInterval(a);return}l++}var n="data/data.json";t.miliseconds="164630000",t.blink=!0,v(),i.onhashchange=v;var s,o,u,a,f,l=0,c=0,h=new Date(2009,10,3,0,0,0,0),p=new Date,d=h.getTime()-p.getTime();u=parseInt(Math.abs(d)/1e3-1e3),o=setInterval(y,1),r.get(n).success(function(e,n,r,i){t.data=e,t.animTitle="",t.animContent="",a=setInterval(w,100),f=setInterval(b,500)})};s()}])});