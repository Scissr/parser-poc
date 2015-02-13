describe("Multiple fields tests", function() {
	var parser = requirejs('parser');


	it("should parse multiple fields", function() {
		var tree = parser.parse("joe,soap");
		expect(tree.nodes.length).toBe(2);

		expect(tree.nodes[0].type).toBe("joe");
		expect(tree.nodes[0].alias).toBe("joe");

		expect(tree.nodes[1].type).toBe("soap");
		expect(tree.nodes[1].alias).toBe("soap");
	});
});