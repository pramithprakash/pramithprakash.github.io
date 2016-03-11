/*
 * SVN Configuration
 *
 * Execute svn commands
 */
module.exports = function( grunt ) {

    grunt.config( 'gitsvn', {
        info: {}
    });

    grunt.registerMultiTask( 'gitsvn', 'Perform git svn commands.', function() {

        var child
            , results = ''
            , done = this.async()
            , target = this.target
            , opts = this.options()
            ;

        var config = {

            info: {
                cmd: 'git',
                args: [ 'svn', 'info' ],
                handler: function( code ) {

                    var matches = results.match( /Last Changed Rev: (?:[\d]*:)?([\d]+)/ );

                    if ( code === null || !matches ) {
                        return grunt.log.warn( 'The git svn info task failed: ' + results );
                    }

                    grunt.config( 'revision', matches[1] );

                    grunt.log.ok();
                }
            }
        };

        grunt.log.write( 'Getting revision info...' );

        child = grunt.util.spawn( config[ target ], done );

        child.stdout.on( 'data', function( buffer ) {
            results += String( buffer );
        });

        child.on( 'exit', config[ target ].handler );
    });
};