/*
 * Git Hooks Configuration
 *
 * See all options: https://www.npmjs.org/package/grunt-githooks
 */
module.exports = function( grunt ) {

    grunt.config( 'githooks', {
        all: {
            'pre-commit': 'jshint',
            'post-commit': {
                template: 'grunt/hooks/sync-proxy.hb'
            },
            'post-merge': {
                template: 'grunt/hooks/sync-proxy.hb'
            }
        },
    });

    grunt.loadNpmTasks( 'grunt-githooks' );
};