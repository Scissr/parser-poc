describe("JSON generation tests", function() {
  var generator = require('./settings/json-generator-instance'),
      config = require('./settings/config');

      var parser = require('./settings/parser-instance');

  it("should generate multiple fields", function() {
    
    var input = "string@3";

    var tree = parser.parse(input);
    
     

    var json = generator.generate(tree, config);

    console.info(json);
    
  }); 


});