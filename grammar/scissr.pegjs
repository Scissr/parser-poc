{
  function createTree(format, nodes){
    return {
        parser: "scissr",
        formatter: format !== null ? format : "json",
        nodes: nodes
    }
  }

  function createElement(name, label, children){
    var item = {
      name: name
    };
    if(children !== null){
      item.nodes = children;
    }
    if(label !== null){
      item.label = label;
    }
    else{
      item.label = name;
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
  = label:
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
    name: identifier
    children: ( 
      begin_child 
      content: array 
      end_child
      { 
        return content; 
      }
    )?
    {
      return createElement(name, label, children);
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
