define(["jquery","vendor/angular-min"],function(e,t){"use strict";return t.module("Data.controllers",[]).controller("dataController",["$scope","$parse","$http","$window",function(e,t,n,r){var i=function(){var t="http://localhost/pramith/working/pramithprakash.github.io/pramith.com/data/data.json";n.get(t).success(function(t,n,r,i){e.data=t})};i()}])});