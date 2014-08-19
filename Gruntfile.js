module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['db/**/*.js', 'models/**/*.js', 'routes/**/*.js', 'static/**/*.js', 'tests/**/*.js', 'server.js']
        }
    });
grunt.registerTask('default', [
    'jshint',
    ]);
};
