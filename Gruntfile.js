module.exports = function(grunt) {
	var path = require('path'),
		nconf = require('nconf')
			.argv()
			.env()
			.file(path.join(__dirname, 'config.json'));


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			server: {
				files: ['./lib/**/*.js', 'index.js'],
				tasks: ['execute'],
				options: {
					livereload: false,
					spawn: false
				}
			}
		},
		execute: {
			target: {
				src: ['index.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-execute');
	grunt.registerTask('default', ['watch', 'execute']);

	grunt.event.on('watch', function(action, filepath) {
		require('./index.js');
	});

	require('./index.js');
};