/*
 * Clean Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function ( grunt ) {

    //require('time-grunt')(grunt);

    grunt.config( 'clean', {
        options: {
            force: true
        },
        css: [
            '**/css/',
            '**/index.css'
        ],
        live: [
            'library/'
        ]
    } );

    grunt.loadNpmTasks( 'grunt-contrib-clean' );
};
