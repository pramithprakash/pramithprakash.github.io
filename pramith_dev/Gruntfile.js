module.exports = function ( grunt ) {

    /* Configure */
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),
        buildRoot: '../',
        revision: 0, // updated via gitsvn:info task
        buildName: {
            dev: '<%= pkg.name %>-dev-build-r<%= revision %>',
            dist: '<%= pkg.name %>-dist-build-r<%= revision %>'
        },
        buildPath: {
            dev: '<%= buildRoot %><%= buildName.dev %>/',
            dist: '<%= buildRoot %><%= buildName.dist %>/'
        }
    } );

    /* Load tasks */
    grunt.loadTasks( 'grunt' );

    grunt.registerTask( 'build', 'Build for integration handoff.', [
       'clean:css',
       'less:dev',
       'cssmin:dist',
       'requirejs:dist',
       'uglify:dist'
    ] );
    grunt.registerTask( 'lessDev', 'Build to compile Less files during development.', [
        'clean:css',
        'less:dev'
    ] );
    grunt.registerTask( 'develop', 'Build to compile Less files during development.', [
        'requirejs:dev',
        'clean:css',
        'less:dev'
    ] );
    grunt.registerTask( 'live', 'Build for integration handoff.', [
        'copy:live',
        'clean:live'
    ]);

};
