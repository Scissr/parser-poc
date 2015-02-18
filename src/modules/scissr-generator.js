define(['configuration'], function(configuration){
	function generate(tree){
		var scissrGenerator = configuration.generators[tree.generator];
		if (scissrGenerator === undefined) {
			var error = "generator '" + tree.generator + "' not registered!";

			throw {
				message: error
			}
		}
		var generator = new scissrGenerator.generator(tree, configuration);
		return generator.generate();
	}
	return {
		generate: generate
	}
});

