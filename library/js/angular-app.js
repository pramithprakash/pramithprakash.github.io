
        var pramithprakashApp = angular.module('pramithprakashApp',['ngRoute','pramithprakashControllers']);
        
        var pramithprakashControllers  = angular.module('pramithprakashControllers',[]);
        
       
        
        pramithprakashApp.config(['$routeProvider',
            function($routeProvider){
                $routeProvider.
                when('/about',{
                    templateUrl: 'about.html',
                    controller: 'pramithprakashDetailCtrl'
                }).
                 when('/links',{
                    templateUrl: 'links.html',
                    controller: 'pramithprakashDetailCtrl'
                }).
                 when('/bestwebdesignawards',{
                    templateUrl: 'links.html',
                    controller: 'pramithprakashDetailCtrl'
                }).
                 when('/webdesigntrends',{
                    templateUrl: 'links1.html',
                    controller: 'pramithprakashDetailCtrl'
                }).
                 when('/webdevcoding',{
                    templateUrl: 'links2.html',
                    controller: 'pramithprakashDetailCtrl'
                }).
                 when('/downloadusefulplugins',{
                    templateUrl: 'links3.html',
                    controller: 'pramithprakashDetailCtrl'
                }).
                 when('/html5jqueryjavaScriptas3',{
                    templateUrl: 'links4.html',
                    controller: 'pramithprakashDetailCtrl'
                }).
                 when('/utilitiesresources',{
                    templateUrl: 'links5.html',
                    controller: 'pramithprakashDetailCtrl'
                });
               /* otherwise({
                   redirectTo: '/' 
                });*/
            }
        ]);

pramithprakashControllers.controller('pramithprakashTimerCtrl', ['$scope',
  function($scope) {
	$scope.miliseconds = "164630000";
	var counter,counter1,ct1;
	var t1 = new Date(2009, 10, 03, 0, 0, 0, 0);
	var t2 = new Date();
	var dif = t1.getTime() - t2.getTime();
	ct1 = parseInt(Math.abs(dif)/ 1000 - 1000);
	function timerLoop() {
		
		t2 = new Date();
		dif = t1.getTime() - t2.getTime();

		var Seconds_from_T1_to_T2 = dif / 1000;
		var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

		$scope.miliseconds = parseInt(Seconds_Between_Dates);
		$scope.$apply();
		
	}
	function scopeApply() {

        if ( !$scope.$$phase ) { $scope.$apply(); }
    }
	function counterLoop() {
		ct1 = ct1 + 1 ;
		
		$scope.miliseconds = parseInt(ct1);
		scopeApply();
		if (ct1 > parseInt(Math.abs(dif)/ 1000) ) {
			
		  counter = setInterval( timerLoop, 1000 );
		  clearInterval( counter1 );		
		}	

	}
	counter1 = setInterval( counterLoop, 1 );
       
 }                                                              
]);   
        pramithprakashControllers.controller('pramithprakashDetailCtrl', ['$scope', '$routeParams',
          function($scope, $routeParams) {
	   $('.linkblock_left').css({'overflow':'hidden'});
	    $('.linkowsc').css({'overflow':'hidden','width' : '100%'});

		setTimeout(function(){
         fleXenv.initByClass('linkowsc');
         
		},1000);
          }                                                              
         ]);
        