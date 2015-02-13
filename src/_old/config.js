define([
	'types/base', 
	'types/name',
	'types/surname',
	'types/email',
	'types/age'
	], 
	function(baseTypes, name, surname,email, age){
		var types = baseTypes.concat([name,surname,email,age]);

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


