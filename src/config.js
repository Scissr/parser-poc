

define([
	'types/base', 
	'types/fname',
	'types/age'
	], 
	function(baseTypes, fname, age){
		var types = baseTypes.concat([fname,age]);
		return {
			types: types
		}
	}
);


