require(
    [
        'jquery',
        'controllers/data-controller',
        'vendor/TweenLite.min',
        'vendor/EasePack.min',
        'modules/bg-anim',
        'vendor/angular-min',
        'vendor/angular-route-min',
        'vendor/angular-animate-min'
    ],

    function (

        $,
        dataController,
        TweenLite,
        EasePack,
        bgAnim,
        angular,
        angularRoute,
        angularAnimate

    ) {

        'use strict';

        var pramith = {

            init: function () {

                $(window).on('blur', function(e) {

                    $('body').removeClass('active');
                });

                $(window).on('focus', function(e) {

                    $('body').addClass('active');
                });


                $('.menu').find('a').on('touchstart', function(e) {
                    e.preventDefault();
                    var el = $(this);
                    var link = el.attr('href');
                    window.location = link;
                });

                $( this.initUI.bind( this ) );

                $('body').removeClass( 'pre-load' );

                $('body').addClass('active');

                function isScrolledIntoView( elem ) {

                    var $elem = $( elem )
                        , $window = $( window )
                        , docViewTop = $window.scrollTop()
                        , docViewBottom = docViewTop + $window.height()
                        , elemTop = $elem.offset().top
                        ;

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

                if (typeof document.body.ontouchstart == "undefined") {
                    $('.hover-container').addClass('active');

                    $('a').mouseover(function() {
                        $('.hover-container').addClass('hover');
                    });
    
                    $('a').mouseleave(function() {
                        $('.hover-container').removeClass('hover');
                    });
    
                    $('body').mousemove(function(e) {
                        $('.hover-container').css({
                            top: e.clientY,
                            left: e.clientX
                        })
                    });
                }
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
                         when('/https',{
                            templateUrl: 'https.html'
                        }).
                        when('/work',{
                           templateUrl: 'work.html'
                        }).
                        when('/contact',{
                            templateUrl: 'home.html'
                        }).
                        when('/skills',{
                            templateUrl: 'skills.html'
                        }).
                        otherwise({
                            redirectTo: function(obj, requestedPath) {
                                window.location.href = window.location.href.split('#')[0] + '404.html' ;
                            }
                        });
                    }
                ]);

                angular.bootstrap( document, [ 'Pramith' ] );
            }

        };

        pramith.init();
    }
);
