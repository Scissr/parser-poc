tree
  = nodes: array 
    format: ( 
      dot 
      formatter: formatter { 
        return formatter; 
      }
    )?
    { 
      return {
        parser: "scissr",
        formatter: format !== null ? format : "json",
        nodes: nodes
      }
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
      var item = {
        name: name
      };
      if(children !== null){
        item.nodes = children;
      }
      return item;
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