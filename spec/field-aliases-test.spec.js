describe("Field aliases tests", function() {
  var parser = require('./settings/parser-instance');

  it("should parse field aliases", function() {
    var tree = parser.parse("name:joe");
    expect(tree.nodes.length).toBe(1);
    expect(tree.nodes[0].alias).toBe("name");
  });
});