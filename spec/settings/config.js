if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([
	'./types/base'
	
	], 
	function(baseTypes){
		var types = baseTypes.concat([]);
		
		function getType(name){
			for (var i = 0; i < types.length; i++) {
				if (name == types[i].name) {
					return types[i];
				}
			}

			return undefined;
		}

		return {
			types: types,
			getType: getType
		}


	}
);


