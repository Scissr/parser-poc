define(['parser','generator'], function(parser, generator){
	function transform(input){
		var tree = parser.parse(input);
		var result = generator.generate(tree);
		return result;
	}
	return {
		transform: transform
	}

});

