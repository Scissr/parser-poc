define(['configuration'], function(configuration){
	function generate(tree){
		var scissrGenerator = configuration.generators[tree.generator];
		if (scissrGenerator === undefined) {
			throw "generator '" + tree.generator + "' not registered!";
		}
		var generator = new scissrGenerator.generator(tree, configuration);
		return generator.generate();
	}
	return {
		generate: generate
	}
});

