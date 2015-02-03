function wrap (parser) {
	return "var scissrParser = function(config){" +
				"var parser = " +
				parser + ";" + 
				
				"return {" +
					"parse: parser.parse" +
				"};};" +
				"if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')" +
				"{ module.exports = scissrParser; } else { if (typeof define === 'function' && " +
				"define.amd) { define([], function() { return scissrParser; }); } else { " +
				"window.scissrParser = scissrParser; }}";

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