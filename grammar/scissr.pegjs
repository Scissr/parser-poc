{
  function createTree(format, nodes){
    return {
        parser: "scissr",
        formatter: format !== null ? format : "json",
        nodes: nodes
    }
  }

  function createElement(key, alias, children){
    var item = {
      key: key,
      data: [],
    };
    if(children !== null){
      item.nodes = children;
    }
    if(alias !== null){
      item.alias = alias;
    }
    else{
      item.alias = key;
    }
    return item;
  }
}

tree
  = nodes: array 
    format: ( 
      dot 
      formatter: formatter { 
        return formatter; 
      }
    )?
    {
      return createTree(format, nodes);
    }

array
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
  = alias:
    (
      firstQuote: quote?
      value: literal
      lastQuote: quote?
      colon
      {
        if (firstQuote != lastQuote) {
          throw new Error("Unterminated string constant.");
        }
        return value.join("");
      }
    )?
    key: identifier
    children: ( 
      begin_child 
      content: array 
      end_child
      { 
        return content; 
      }
    )?
    {
      return createElement(key, alias, children);
    }

identifier "identifier"
  = chars: [0-9a-zA-Z]+
    {
      if(chars === null){
        throw new Error("Identifier expected.");
      }
      return chars.join(""); 
    }

literal "literal value"
  = [0-9A-Za-z_ ]+

colon "colon (:)"
  = ":"

space
  = " "+

dot "format specifier (.)"
  = "."

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
