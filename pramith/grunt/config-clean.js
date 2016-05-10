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
        dev: [
            '<%= buildPath.dev %>'
        ],
        distPre: [
            '<%= buildPath.dist %>'
        ],
        distPost: [
            '<%= buildPath.dist %>grunt',
            '<%= buildPath.dist %>**/less',
            '<%= buildPath.dist %>**/build.txt',
            '<%= buildPath.dist %>**/common/css/config'
        ],
        svg: [
            'library/less/mgmGrand/global/icons/delete/',
            'library/images/mgmGrand/svg-min/'
        ]
    } );

    grunt.loadNpmTasks( 'grunt-contrib-clean' );
};
