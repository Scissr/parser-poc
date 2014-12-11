tree
  = nodes:array 
    format:(dot formatter:formatter { 
      return formatter; 
    })?
    { 
      return {
       parser: "scissr",
       formatter: format !== null ? format : "json",
       nodes: nodes
      }
    }

array
  = values:(
      first:element
      rest:(separator v:element { return v; })*
      { return [first].concat(rest); }
    )?
    { return values !== null ? values : []; }

element =
  name:word
  children:(begin_child content:array end_child
     { return content; })? {
 
    return {
      name:    name,
      nodes: children
    };
  }

word
  = chars:char* { return chars.join(""); }

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