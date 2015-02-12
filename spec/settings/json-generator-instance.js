if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([], 
	function(){
		var generator = require('../../src/generators/json');
      		return generator;
	}
);