{
  function createTree(key, nodes){
    return {
        parser: "scissr",
        generator: key !== null ? key : "json",
        nodes: nodes
    }
  } 

  function createType(name){
    return {
      name: name
    };
  }

  function resolveType(type, array){

    if (type.value !== undefined) {
      return "string";
    }

    //var types = configuration.types;
    var baseType =  "string";

    //if (configuration.types[type.name] !== undefined) {
      // var result = types.filter(function(t){
      //   return t.name == type.name;
      // });

      if (configuration.types[type.name] !== undefined) {
        baseType.resolver = configuration.types[type.name];
      }
      else {
        if (type.name === "object" || array !== null && array.isComplexType == true) {
          baseType = "object";
        }
        
      }
    //};

    return baseType;
  }

  function createElement(type, alias, children, array, aa){

    var baseType = resolveType(type, array);

      var item = {
        type: type.name,
        baseType: baseType,
        isArray: false,
        count: 1,
        data: [],
      };
      if (type.value !== undefined) {
        item.value = type.value;
      }
      if(children !== null){
        item.nodes = children;
      }
      if (array !== null){
        item.isArray = true
        item.count = parseInt(array.count);
      }
      if(alias !== null){
        item.alias = alias;
      }
      else{
        if (item.isArray){
          item.alias = type.name + "Array";
        }
        else {
          item.alias = type.name;
        }
      }
      
      return item;
  
  }

  

  
}

tree
  = nodes: elementArray 
    format: ( 
      equals 
      generator: generator { 
        return generator; 
      }
    )?
    {
      return createTree(format, nodes);
    }

elementArray
  = values: (
      first: element
      rest: (
        separator 
        value: element 
          { 
            return value; 
          }
      )*
      { 
        return [first].concat(rest); 
      }
    )?
    { 
      return values !== null ? values : []; 
    }

element 
  = alias: alias?
    type: type
    arrayIdentifier: simpleTypeArray?
    {
      return createElement(type, alias, undefined, arrayIdentifier);
    }
  / alias: alias?
    children: ( 
      begin_child
      content: elementArray 
      end_child
      { 
        return content; 
      }
    )
    arrayIdentifier: complexTypeArray?
    {
      var type = {
        name: "object"
      };

      return createElement(type, alias, children, arrayIdentifier,"test");
    }

alias "alias"
  = firstQuote: quote?
    value: literal
    lastQuote: quote?
    colon
    {
      if (firstQuote != lastQuote) {
        throw new Error("Unterminated string constant.");
      }
      return value.join("");
    }

identifier
  = [0-9a-zA-Z]+

type "type"
  = firstQuote: quote
    chars: literal
    lastQuote: quote
    {
      if (firstQuote != lastQuote) {
        throw new Error("Unterminated string constant.");
      }
      return {
        name: "string",
        value: chars.join("")
      };
    }
  / chars: identifier
    {
      
      if(chars === null){
        throw new Error("Type expected.");
      }
      return {
        name: chars.join("")
      };
    }



complexTypeArray
  = astrix
    count: integer
    {
      return {
        isComplexType: true,
        count: count
      }
    }

simpleTypeArray
  = at
    count: integer
    {
      return {
        isComplexType: false,
        count: count
      }
    }

at "simple type array identifier"
  = "@"

astrix "complex type array identifier"
  = "*"

literal "literal value"
  = [0-9A-Za-z_ ]+

integer
  = numbers: [0-9]+
    {
      return parseInt(numbers.join("")); 
    }

colon "colon (:)"
  = ":"

space
  = " "+

equals "format specifier (=)"
  = "="

generator "generator"
  = "json"
  / "xml"

separator "seperator (,)"
  = ","

quote "quote (')"
  = "'"

begin_child "'('"
  = "("

end_child "')'"
  = ")"
