define(['parser','generator'], function(parser, generator){
	function transform(input){
		var tree = parser.parse(input);
		var result = generator.generate(tree);
		return {
			header: {
				generator: tree.generator
			},
			body: result
		};
	}
	return {
		transform: transform
	}

});

