function wrap (parser) {
	return "define(['configuration'], function(configuration){" +
		"var parser = " +
		parser + ";" + 

		"return {" +
		"parse: parser.parse" +
		"};});";
}

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-peg');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('build', ['clean','peg','requirejs','copy']);
	
	grunt.initConfig({
		peg: {
			scissr : {
				src: "grammar/scissr.pegjs",
				dest: "src/modules/scissr-parser.js",
				options: {

					wrapper: function (src, parser) {
						return wrap(parser);
					}
				}
			}
		},
		watch: {
			files: ['grammar/*.pegjs'],
			tasks: ['peg']
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: './src',
					paths: {
						'parser': './modules/scissr-parser',
						'generator': './modules/scissr-generator',
						'scissr': './modules/scissr-main',
						'configuration': 'empty:'
					},
					removeCombined: true,
					name: "scissr",
					out: "./dist/scissr.js",
					//optimize: "none"
				}
			}
		},
		copy: {
			
			config: {
				src: 'src/configuration.js',
				dest: 'dist/configuration.js',
			},
			generators: {
				cwd: 'src/generators',
				src: '**/*',
				dest: 'dist/generators',
				expand: true
			},
			types: {
				cwd: 'src/types',
				src: '**/*',
				dest: 'dist/types',
				expand: true
			}
		},
		clean: ["dist/*"]
	});
};