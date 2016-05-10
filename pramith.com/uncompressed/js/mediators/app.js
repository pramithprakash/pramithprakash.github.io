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
