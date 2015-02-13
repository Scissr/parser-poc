describe("Basic generation tests", function() {
  var parser = requirejs('parser');

  it("should parse a basic syntax", function() {
    var tree = parser.parse("joe");
    expect(tree.generator).toBe("json");
    expect(tree.nodes.length).toBe(1);
    expect(tree.nodes[0].type).toBe("joe");
    expect(tree.nodes[0].baseType).toBe("string");
    expect(tree.nodes[0].isArray).toBe(false);
    expect(tree.nodes[0].count).toBe(1);
    expect(tree.nodes[0].data.length).toBe(0);
    expect(tree.nodes[0].alias).toBe("joe");
  });
});