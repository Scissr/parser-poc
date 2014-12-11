function wrap (parser) {
	return "var parser = " +
		parser + 
		";if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {" + 
		"module.exports = parser; } else { if (typeof define === 'function' && define.amd) { " +
		"define([], function() { return parser; }); } else { window.parser = parser; }}";

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