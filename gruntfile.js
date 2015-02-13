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
	
	grunt.initConfig({
		peg: {
			scissr : {
				src: "grammar/scissr.pegjs",
				dest: "src/core/scissr-parser.js",
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
		}
	});
};