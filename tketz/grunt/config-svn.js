/*
 * SVN Configuration
 *
 * Execute svn commands
 */
module.exports = function( grunt ) {

    grunt.config( 'svn', {
        info: {},
        ignore: {
            options: {
                file: '.svnignore'
            }
        }
    });
    
    grunt.registerMultiTask( 'svn', 'Perform svn commands.', function() {

        var child
            , results = ''
            , done = this.async()
            , target = this.target
            , opts = this.options()
            ;

        var config = {

            info: {
                cmd: 'svnversion',
                handler: function( code ) {

                    var matches = results.match( /(?:[\d]*:)?([\d]+)/ );
                    
                    if ( code === null || !matches ) {
                        return grunt.log.warn( 'The svn:info task failed: ' + results );
                    }

                    grunt.config( 'svn.info', {
                        rev: matches[1]
                    });
                    
                    grunt.log.ok();
                }
            },

            ignore: {
                cmd: 'svn',
                args: [
                    'propset',
                    '--recursive',
                    'svn:ignore',
                    '--file',
                    opts.file,
                    '.'
                ],
                handler: function( code ) {

                    if ( code === null ) {
                        return grunt.log.warn( 'The svn:ignore task failed.' );
                    }

                    grunt.config( 'svnignore', {
                        options: opts,
                        test: true
                    });
                    
                    grunt.log.ok();
                }
            }
        };
        
        grunt.log.write( 'Getting svn info...' );
        
        child = grunt.util.spawn( config[ target ], done );

        child.stdout.on( 'data', function( buffer ) {
            results += String( buffer );
        });

        child.on( 'exit', config[ target ].handler );
    });
};