/*

* Css min Configuration

*

* See all options: https://github.com/gruntjs/grunt-contrib-cssmin

*/
module.exports = function(grunt) {

    //require('time-grunt')(grunt);

    grunt.config('cssmin', {

        dist: {

            files: [{
                expand: true,
                cwd: 'uncompressed/css/',
                src: ['**/*.css'],
                dest: 'css/',
                ext: '.css'
            }]

        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');

};