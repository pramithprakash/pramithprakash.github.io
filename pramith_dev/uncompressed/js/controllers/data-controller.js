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

                    $scope.miliseconds = '164630000';

                    $scope.blink = true;

                    hashChangeHandler();

                    $window.onhashchange = hashChangeHandler;

                    var counter
                        , counter1
                        , ct1
                        , tc
                        , yc
                        , k = 0
                        , y = 0
                        , t1 = new Date(2009, 10, 3, 0, 0, 0, 0)
                        , t2 = new Date()
                        , dif = t1.getTime() - t2.getTime()
                        ;
                    
                    ct1 = parseInt(Math.abs(dif)/ 1000 - 20);

                    function hashChangeHandler() {
                        
                        var hash = window.location.hash;

                        hash = $.trim( '' + hash.substring(1) );

                        if ( hash.charAt( 0 ) === '/' ) {

                            hash = $.trim( '' + hash.substring( 1 ) );
                        }
                        $scope.hash = hash;

                        if( hash === '' ){

                            hash = 'home';
                            $scope.hash = hash;
                            window.location.hash = '#home';
                            $('body').addClass('active'); 

                        }

                        $('body').removeClass('active');

                        setTimeout(function(){

                            $('body').addClass('active');
                        }, 1000);
                        
                    }

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
                            $scope.animTitle = '';
                            $scope.animContent = '';
                            tc = setInterval( tcf, 100 );
                            yc = setInterval( ycf, 500 );
                        } );


                    function ycf(){
                            
                        y++;
                        $scope.years = y;
                        scopeApply();
                        if( y === $scope.data.years ){
                            clearInterval( yc );
                        }
                    }

                    function tcf(){
                            
                        $scope.animTitle = $scope.animTitle + $scope.data.homeTitle.charAt(k);
                        scopeApply();
                        if( k === $scope.data.homeTitle.length ){
                            clearInterval( tc );
                            k = 0;
                            tc = setInterval( tcg, 100 );
                            return;
                        }
                        k++;

                    }
                    function tcg(){
                        
                        $scope.animContent = $scope.animContent + $scope.data.homeText.charAt(k);
                        scopeApply();
                        if( k === $scope.data.homeText.length ){

                            $scope.blink = false;
                            clearInterval( tc );
                            return;
                        }
                        k++;
                    }
                };

                init();
            }
        ] );
    }
);
