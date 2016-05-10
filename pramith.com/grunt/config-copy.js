/*
 * Copy Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function( grunt ) {

    //require('time-grunt')(grunt);

    grunt.config( 'copy', {
        dist: {
            //dev root - path to your git folder, configure in package.json
            cwd: grunt.option('devroot') + '/library/',
            expand: true,
            src: [
                //all js files except tealeaf vendor file
                'js/**',
                '!js/vendor/tealeaf05112015.js',
				        '!js/vendor/tealeaf_w3c_4_0_1067_07152015b.js',
                //all required css files
                'css/**/accounts/signInActivateTemplate/index.css',
                'css/**/accounts/summaryTemplate/index.css',
                'css/**/booking/index.css',
                'css/**/booking/forms/index.css',
                'css/**/campaignModule/index.css',
                'css/**/comparisonTable/index.css',
                'css/**/detail/index.css',
                'css/**/errorModule/index.css',
                'css/**/faq/index.css',
                'css/**/global/index.css',
                'css/**/global/icons/index.css',
                'css/**/global/icons/logo.css',
                'css/**/global/icons/svg.css',
                'css/**/global/logoResorts/index.css',
                'css/**/global/logoResorts/logo-resorts.css',
                'css/**/home/index.css',
                'css/**/hotelComparison/index.css',
                'css/**/hotelComparisonAll/index.css',
                'css/**/hotelVirtualTour/index.css',
                'css/**/itinerary/index.css',
                'css/**/itineraryConfirmation/index.css',
                'css/**/itineraryPrint/index.css',
                'css/**/landing/index.css',
                'css/**/miscellaneous/index.css',
                'css/**/multiCompare/index.css',
                'css/**/shared/index.css',
                'css/**/sharedCampaign/index.css',
                'css/**/sitemap/index.css',
                //ignore the css master folder
                '!css/master/**'
            ],
            dest: '<%= buildPath %>uncompressed/'
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-copy' );
};