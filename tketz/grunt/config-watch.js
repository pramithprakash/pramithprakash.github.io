/*
 * Watch Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = function( grunt ) {

    grunt.config( 'watch', {
        less: {
            files: [ 'library/**/*.less' ],
            tasks: [ 'lessDev' ]
        }
    });
    
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
};