function wrap (parser) {
	return '/* jshint ignore:end */\nif (typeof module === "object" && typeof define !== "function") {' +
					'\n\tvar define = function (factory) {' +
          '\n\t\tmodule.exports = factory(require, exports, module);' +
    			'\n\t};\n}\n/* jshint ignore:end */' +
					'\ndefine("scissr-parser", [], function () { return ' + parser + '; });';

}

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-peg');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.initConfig({
	  peg: {
	    scissr : {
	      src: "grammar/scissr.pegjs",
	      dest: "src/scissr-parser.js",
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