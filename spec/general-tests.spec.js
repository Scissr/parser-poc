  describe("scissr-parser.js testing", function() {
    
    var scissr = require('../src/scissr-parser');

    it("should have parser as 'scissr'", function() {
      var tree = scissr.parse("A");
      expect(tree.parser).toBe("scissr");
    });

    it("should parse a basic syntax", function() {
      var tree = scissr.parse("A,B,C");
      expect(tree.nodes.length).toBe(3);
      expect(tree.nodes[0].name).toBe("A");
      expect(tree.nodes[1].name).toBe("B");
      expect(tree.nodes[2].name).toBe("C");
    });
    
    it("should parse a basic nested syntax", function() {
      var tree = scissr.parse("A,B(C,D)");
      expect(tree.nodes.length).toBe(2);
      expect(tree.nodes[0].name).toBe("A");
      expect(tree.nodes[1].name).toBe("B");
      expect(tree.nodes[1].nodes.length).toBe(2);
      expect(tree.nodes[1].nodes[0].name).toBe("C");
      expect(tree.nodes[1].nodes[1].name).toBe("D");
    });

    it("should default to 'json' for empty formatter", function() {
      var tree = scissr.parse("A,B,C");
      expect(tree.formatter).toBe("json");
    });

    it("should infer formatter as 'json'", function() {
      var tree = scissr.parse("A,B,C");
      expect(tree.formatter).toBe("json");
    });

    it("should infer formatter as 'json' from explicit '.json", function() {
      var tree = scissr.parse("A,B,C.json");
      expect(tree.formatter).toBe("json");
    });

    it("should infer formatter as 'xml' from explicit '.xml", function() {
      var tree = scissr.parse("A,B,C.xml");
      expect(tree.formatter).toBe("xml");
    });
  });