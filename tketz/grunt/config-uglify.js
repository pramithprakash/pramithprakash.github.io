/*
 * Uglify Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = function( grunt ) {

    var modules, length, path
        , vm = require( 'vm' )
        , pathToMainConfigFile = 'library/js/config/require-config.js'
        , mainConfigFile = grunt.file.read( pathToMainConfigFile )
        , mainConfig = {}
        , distFiles = {}
        ;

    vm.runInNewContext( mainConfigFile, mainConfig );

    modules = mainConfig.require.modules;
    length = modules.length;

    for ( var i = 0; i < length; i++ ) {

        path = modules[ i ].name;

        // devFiles[ 'library/js/' + path + '.js' ] = 'library/js/' + path + '.js';
        distFiles[ '<%= buildPath.dist %>library/js/' + path + '.js' ] = '<%= buildPath.dist %>library/js/' + path + '.js';
    }

    grunt.config( 'uglify', {

        options: {

            report: 'gzip'

        },
        dist: {

            files: distFiles

        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};