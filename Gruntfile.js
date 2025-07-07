module.exports = function(grunt) {
    // Load the plugins
    grunt.loadNpmTasks('grunt-stylelint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Project configuration
    grunt.initConfig({
        stylelint: {
            scss: {
                options: {
                    quietDeprecationWarnings: true,
                    customSyntax: 'postcss-scss',
                },
                src: ['snippets/**/*.scss'], // Adjust the path to your SCSS files
            }
        },
        watch: {
            scss: {
                files: ['snippets/**/*.scss'], // Watch SCSS files in the snippets folder
                tasks: ['stylelint:scss']
            }
        }
    });

    // Register default task
    grunt.registerTask('default', ['stylelint:scss']);
};