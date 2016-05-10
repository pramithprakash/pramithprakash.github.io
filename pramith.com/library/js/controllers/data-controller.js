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

                    var url = ( 'http://localhost/pramith/working/pramithprakash.github.io/pramith.com/data/data.json' );

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
