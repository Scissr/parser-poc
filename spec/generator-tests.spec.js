describe("Generator tests", function() {
  var parser = require('./settings/parser-instance');

  it("should parse empty generator as 'json'", function() {
    var tree = parser.parse("string,int");
    
    expect(tree.generator).toBe("json");
    
  }); 
 
  it("should parse 'json' generator", function() {
    var tree = parser.parse("string,int");
    
    expect(tree.generator).toBe("json");
    
  });

  it("should parse 'xml' generator", function() {
    var tree = parser.parse("string,int=xml");
    
    expect(tree.generator).toBe("xml");
    
  });

  it("should fail on unsupported generator", function() {
    
    var action = function(){
      var tree = parser.parse("string,int=xxx");
    };
    
    expect(action).toThrow();
    
  });

});