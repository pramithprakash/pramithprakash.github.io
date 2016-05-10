require(
    [
        'jquery',
        'controllers/data-controller',
        'vendor/angular-min'
    ],

    function (

        $,
        dataController,
        angular

    ) {

        'use strict';

        var pramith = {

            init: function () {

                $( this.initUI.bind( this ) );

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
                    'Data.controllers'
                ] );

                angular.bootstrap( document, [ 'Pramith' ] );
            }

        };

        pramith.init();
    }
);
