require(
    [
        'jquery',
        'controllers/data-controller',
        'vendor/angular-min',
        'vendor/angular-route-min',
        'vendor/angular-animate-min'
    ],

    function (

        $,
        dataController,
        angular,
        angularRoute,
        angularAnimate

    ) {

        'use strict';

        var pramith = {

            init: function () {

                $( this.initUI.bind( this ) );

                setTimeout(function(){

                    $('body').removeClass( 'pre-load' );
                    window.location.hash = '#home';

                },1000);

                function isScrolledIntoView( elem ) {

                    var $elem = $( elem );
                    var $window = $( window );

                    var docViewTop = $window.scrollTop();
                    var docViewBottom = docViewTop + $window.height();

                    var elemTop = $elem.offset()
                        .top;
                    var elemBottom = elemTop + $elem.height();

                    return ( elemTop <= docViewBottom );
                }

                $('.box, footer').each(function(){

                    if( isScrolledIntoView( $(this) )){

                        $(this).addClass('inview');
                    }
                });

                $( window ).scroll(function(){

                    $('.box, footer').off().each(function(){

                        if( isScrolledIntoView( $(this) )){

                            $(this).addClass('inview');
                        } 
                    });
                });
            },

            initUI: function () {

                this.initAngular();

            },

            initAngular: function () {

                angular.module( 'Pramith', [
                    'Data.controllers',
                    'ngRoute',
                    'ngAnimate'
                ] ).config(['$routeProvider',
                    function($routeProvider){
                        $routeProvider.
                        when('/home',{
                            templateUrl: 'home.html'
                        }).
                        when('/about',{
                            templateUrl: 'about.html'
                        }).
                         when('/links',{
                            templateUrl: 'links.html'
                        }).
                        when('/contact',{
                           templateUrl: 'home.html'
                        }).
                        when('/skills',{
                           templateUrl: 'skills.html'
                        }).
                         otherwise({
                           redirectTo: '/home' 
                        });
                    }
                ]);

                angular.bootstrap( document, [ 'Pramith' ] );
            }

        };

        pramith.init();
    }
);
