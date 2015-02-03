describe("Formatter tests", function() {
  var parser = require('./settings/parser-instance');

  it("should parse empty formatter as 'json'", function() {
    var tree = parser.parse("string,int");
    
    expect(tree.formatter).toBe("json");
    
  }); 
 
  it("should parse 'json' formatter", function() {
    var tree = parser.parse("string,int");
    
    expect(tree.formatter).toBe("json");
    
  });

  it("should parse 'xml' formatter", function() {
    var tree = parser.parse("string,int");
    
    expect(tree.formatter).toBe("xml");
    
  });

  it("should fail on unsupported formatter", function() {
    var tree = parser.parse("string,int");
    
    //todo
    
  });

});