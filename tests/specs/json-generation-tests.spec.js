describe("JSON generation tests", function() {
	var generator = requirejs('generator'),
		config = requirejs('configuration');
		parser = requirejs('parser');

	it("should generate multiple fields", function() {
		var input = "string@3";
		var tree = parser.parse(input);
		var json = generator.generate(tree, config);
	}); 
});