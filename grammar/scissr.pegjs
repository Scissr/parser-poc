{
  function createTree(format, nodes){
    return {
        parser: "scissr",
        formatter: format !== null ? format : "json",
        nodes: nodes
    }
  }

  function resolveType(type){

    var types = options.types;
    var baseType = "object";

    if (types !== undefined) {
      var result = types.filter(function(t){
        return t.name == type;
      });

      if (result.length > 0) {
        baseType = result[0].type;
      };
    };

    return baseType;
  }

  function createElement(type, alias, children, array){
    var resolvers = options.resolvers;
    var baseType = resolveType(type);

      var item = {
        type: type,
        baseType: baseType,
        isArray: false,
        count: 1,
        data: [],
      };
      if(children !== null){
        item.nodes = children;
      }
      if(alias !== null){
        item.alias = alias;
      }
      else{
        item.alias = type;
      }
      if (array !== null){
        item.isArray = true
        item.count = array.count;

      }
      return item;
  
  }

  

  
}

tree
  = nodes: elementArray 
    format: ( 
      equals 
      formatter: formatter { 
        return formatter; 
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
    {
      return createElement(type, alias, undefined,null);
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
    arrayIdentifier: valueArray?
    {
      
      return createElement(undefined, alias, children, arrayIdentifier);
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

  

type "type"
  = chars: [0-9a-zA-Z]+
    {
      if(chars === null){
        throw new Error("Type expected.");
      }
      return chars.join(""); 
    }

valueArray
  = simpleTypeArray
  / complexTypeArray

complexTypeArray
  = astrix
    count: integer
    {
      return {
        isComplexType: false,
        count: count
      }
    }

simpleTypeArray
  = at
    count: integer
    {
      return {
        isComplexType: true,
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
      return numbers.join(""); 
    }

colon "colon (:)"
  = ":"

space
  = " "+

equals "format specifier (=)"
  = "="

formatter "format"
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
