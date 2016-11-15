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
              '**/*'
            ],
            dest : '../library/',
            expand: true
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-copy' );
};