/*
 * Copy Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function( grunt ) {

    grunt.config( 'copy', {
        live: {
            cwd: 'library/',
            src : [
              '**/css/pramith.com/index.css',
              '**/js/mediators/app.js',
              '**/js/vendor/Modernizr.js',
              '**/js/vendor/require.js'
            ],
            dest : '../library/',
            expand: true
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-copy' );
};