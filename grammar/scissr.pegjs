{
  function createTree(format, nodes){
    return {
        parser: "scissr",
        formatter: format !== null ? format : "json",
        nodes: nodes
    }
  }

  function createElement(name, children){
    var item = {
      name: name
    };
    if(children !== null){
      item.nodes = children;
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
  = name: word
    children: ( 
      begin_child 
      content: array 
      end_child
      { 
        return content; 
      }
    )?
    {
      return createElement(name, children);
    }

word
  = chars: char* 
    { 
      return chars.join(""); 
    }

dot
  = "."

formatter
  = "json"
  / "xml"

separator
  = ","

begin_child
  = "("

end_child
  = ")"

char
  = [0-9a-zA-Z]