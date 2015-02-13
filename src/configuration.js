define(function (require) {
	var types = {
		string: require('types/string'),
		int: require('types/int'),
		float: require('types/float'),
		date: require('types/date'),
		bool: require('types/bool')
	};

	var generators = {
		json: require('generators/json')
	};
	return {

		types: types,
		generators: generators
	};

});

