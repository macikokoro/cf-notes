module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.initConfig({
        clean: {
            dev: {
                src: ['build/']
            } 
        },
        copy: {
            dev: {
                expand: true,
                cwd: 'app/',
                src: ['*.html', '*.css'],
                dest: 'build/',
                filter: 'isFile' 
            }
        },
        browserify: {
            dev: {
                options: {
                    transform: ['debowerify', 'hbsfy'],
                    debug: true
                },
                src: ['app/js/**/*.js'],
                dest: 'build/bundle.js' 
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                // options: {
                //     ignore: [
                //         'app/js/**/*.js',
                //         'models/**/*.js',
                //         'routes/**/*.js',
                //         'tests/**/*.js'
                //     ],
                //     watch: ['build/**/*']
                // }
            }
        },
        watch: {
            all: {
                files: [
                    'app/js/**/*',
                    'models/**/*',
                    'routes/**/*',
                    'tests/**/*',
                    'server.js',
                    'dist/**/*'
                ],
                tasks: [
                    'clean:dev',
                    'browserify:dev',
                    'copy:dev'
                ]
                // options: {
                //   livereload: true
                // }
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['nodemon', 'watch']
        }
    });
    grunt.registerTask('build:dev', [
        'clean:dev', 
        'browserify:dev', 
        'copy:dev',
        // 'concurrent' 
        'watch'
        ]);
};