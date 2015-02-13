describe("Field aliases tests", function() {
	var parser = requirejs('parser');

	it("should parse field aliases", function() {
		var tree = parser.parse("name:joe");
		expect(tree.nodes.length).toBe(1);
		expect(tree.nodes[0].alias).toBe("name");
	});
});