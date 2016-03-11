/*
 * SVG Minification Configuration
 *
 * See all options: https://github.com/sindresorhus/grunt-svgmin
 */
module.exports = function( grunt ) {
	
    grunt.config( 'svgmin', {
		
        options: {
            plugins: [
			  { removeViewBox: true },
		      { removeUselessStrokeAndFill: true },
		      { removeEmptyAttrs: true }
            ]
        },
        dist: {
            files: [{
				expand: true,       // Enable dynamic expansion.
                cwd: 'library/images/mgmGrand/svg/',     // Path to original SVG files
                src: ['*.svg'],  // Actual pattern(s) to match.
                dest: 'library/images/mgmGrand/svg-min/',       // Destination path prefix.
                ext: '.svg'     // Dest filepaths will have this extension.
				
            }]
        }
    });
    
	grunt.loadNpmTasks( 'grunt-svgmin' );
	
};