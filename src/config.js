define([
	'types/base', 
	'types/fname',
	'types/age'
	], 
	function(baseTypes, fname, age){
		var types = baseTypes.concat([fname,age]);

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


