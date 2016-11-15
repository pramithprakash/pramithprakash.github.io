/*
 * JSHint Configuration
 *
 * See all options: http://www.jshint.com/docs/options/
 */
module.exports = function( grunt ) {

    grunt.config( 'jshint', {
        options: {
            jshintrc: '.jshintrc'
        },
        all: [
            'uncompressed/**/*.js',
            '!uncompressed/**/config/*.js',
            '!uncompressed/**/modules/bg-anim.js',
            '!uncompressed/**/vendor/**/*.js',
        ]
    });
    
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
};