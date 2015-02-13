define(['parser','generator'], function(parser, generator){
	function transform(input){
		debugger;
		var tree = parser.parse(input);
		var result = generator.generate(tree);
		return result;
	}
	return {
		transform: transform
	}

});

