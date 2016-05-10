define(
    [
        'jquery',
        // Angular-specific dependencies
        'vendor/angular-min'
    ],

    function (

        $,
        // Angular-specific dependencies
        angular

    ) {

        'use strict';

        /* Controllers */
        return angular.module( 'Data.controllers', [] )

        .filter( 'trust', [

            '$filter',
            '$sce',

            function(

                $filter,
                $sce
            ) {

                return function( string ) {

                    return $sce.trustAsHtml( string );
                };
            }
        ])

        .controller( 'dataController', [

            '$scope',
            '$parse',
            '$http',
            '$window',

            function (

                $scope,
                $parse,
                $http,
                $window

            ) {

                var init = function () {

                    var url = ( 'data/data.json' );

                    $scope.miliseconds = "164630000";

                    var counter
                        , counter1
                        , ct1
                        , t1 = new Date(2009, 10, 3, 0, 0, 0, 0)
                        , t2 = new Date()
                        , dif = t1.getTime() - t2.getTime()
                        ;
                    
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

                    $http.get( url )
                        .success( function ( data, status, headers, config ) {
                            $scope.data = data;
                        } );

                };

                init();
            }
        ] );
    }
);
