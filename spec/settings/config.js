if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([
	'./types/base'
	
	], 
	function(baseTypes){
		var types = baseTypes.concat([]);
		return {
			types: types
		}
	}
);


