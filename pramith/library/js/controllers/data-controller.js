define(["jquery","vendor/angular-min"],function(e,t){"use strict";return t.module("Data.controllers",[]).filter("trust",["$filter","$sce",function(e,t){return function(e){return t.trustAsHtml(e)}}]).controller("dataController",["$scope","$parse","$http","$window",function(e,t,n,r){var i=function(){function f(){u=new Date,a=o.getTime()-u.getTime();var t=a/1e3,n=Math.abs(t);e.miliseconds=parseInt(n),e.$apply()}function l(){e.$$phase||e.$apply()}function c(){s+=1,e.miliseconds=parseInt(s),l(),s>parseInt(Math.abs(a)/1e3)&&(r=setInterval(f,1e3),clearInterval(i))}var t="../../data/data.json";e.miliseconds="164630000";var r,i,s,o=new Date(2009,10,3,0,0,0,0),u=new Date,a=o.getTime()-u.getTime();s=parseInt(Math.abs(a)/1e3-1e3),i=setInterval(c,1),n.get(t).success(function(t,n,r,i){e.data=t})};i()}])});