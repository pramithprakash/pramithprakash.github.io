/*
 * Uglify Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = function( grunt ) {

    var modules, length, path
        , vm = require( 'vm' )
        , pathToMainConfigFile = 'uncompressed/js/config/require-config.js'
        , mainConfigFile = grunt.file.read( pathToMainConfigFile )
        , mainConfig = {}
        , distFiles = {}
        ;

    vm.runInNewContext( mainConfigFile, mainConfig );

    modules = mainConfig.require.modules;
    length = modules.length;

    for ( var i = 0; i < length; i++ ) {

        path = modules[ i ].name;
        distFiles[ 'library/js/' + path + '.js' ] = 'library/js/' + path + '.js';
    }
    
    // Concatenate require.js and common.js to fix mediator race condition
    distFiles[ 'library/js/vendor/require.js' ] = ['library/js/vendor/require.js'];

    grunt.config( 'uglify', {

        options: {
            report: 'min'
        },
        live: {
            files: distFiles
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};