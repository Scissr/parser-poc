describe("Multiple levels tests", function() {
  var parser = require('./settings/parser-instance');

  it("should parse multiple levels", function() {
    var tree = parser.parse("joe,soap,children:(abc,def)*3");
    
    expect(tree.nodes.length).toBe(3);
    expect(tree.nodes[2].alias).toBe("children");
    expect(tree.nodes[2].nodes.length).toBe(2);
    expect(tree.nodes[2].isArray).toBe(true);
    expect(tree.nodes[2].count).toBe(3);
     
  }); 
 
  it("should parse a child object with label", function() {
    var tree = parser.parse("child:(joe)");
    expect(tree.nodes.length).toBe(1);
    expect(tree.nodes[0].type).toBe("object");
    expect(tree.nodes[0].baseType).toBe("object");
    expect(tree.nodes[0].isArray).toBe(false);
    expect(tree.nodes[0].count).toBe(1);
    expect(tree.nodes[0].alias).toBe("child");
    expect(tree.nodes[0].nodes.length).toBe(1);
    expect(tree.nodes[0].nodes[0].type).toBe("joe");
    expect(tree.nodes[0].nodes[0].baseType).toBe("string");

  });

  

});