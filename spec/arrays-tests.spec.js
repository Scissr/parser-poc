describe("Arrays tests", function() {
  var parser = require('./settings/parser-instance');

  it("should parse object arrays without label", function() {
    var tree = parser.parse("(joe)*3");
    
    expect(tree.nodes.length).toBe(1);
    expect(tree.nodes[0].type).toBe("object");
    expect(tree.nodes[0].baseType).toBe("object");
    expect(tree.nodes[0].isArray).toBe(true);
    expect(tree.nodes[0].count).toBe(3);
    expect(tree.nodes[0].alias).toBe("objectArray");

    expect(tree.nodes[0].nodes.length).toBe(1);
    expect(tree.nodes[0].nodes[0].type).toBe("joe");
    expect(tree.nodes[0].nodes[0].baseType).toBe("string");
    expect(tree.nodes[0].nodes[0].isArray).toBe(false);
    expect(tree.nodes[0].nodes[0].alias).toBe("joe");
  });

  it("should parse a object array with label", function() {
    var tree = parser.parse("people:(joe)*3");

    expect(tree.nodes[0].alias).toBe("people");

  });

  it("should parse a simple type array with label", function() {
    var tree = parser.parse("tags:abc@3");

    expect(tree.nodes.length).toBe(1);
    expect(tree.nodes[0].type).toBe("abc");
    expect(tree.nodes[0].baseType).toBe("string");
    expect(tree.nodes[0].isArray).toBe(true);
    expect(tree.nodes[0].count).toBe(3);
    expect(tree.nodes[0].alias).toBe("tags");
    expect(tree.nodes[0].nodes).toBe(undefined);

  });

  it("should parse a simple type array without label", function() {
    var tree = parser.parse("abc@3");

    expect(tree.nodes.length).toBe(1);
    expect(tree.nodes[0].type).toBe("abc");
    expect(tree.nodes[0].baseType).toBe("string");
    expect(tree.nodes[0].isArray).toBe(true);
    expect(tree.nodes[0].count).toBe(3);
    expect(tree.nodes[0].alias).toBe("abcArray");
    expect(tree.nodes[0].nodes).toBe(undefined);

  });

});