//requirejs(['config']);

requirejs.config({
  nodeRequire: require,
    baseUrl: '../dist',
    // paths: {
    //     'scissr': 'scissr'
    // }
});


require(['scissr'], function(scissr){
var $output = $("#code");

	function buildErrorMessage(e) {

    if (typeof e === "string") {
      return e;
    }

    return e.line !== undefined && e.column !== undefined
      ? "Line " + e.line + ", column " + e.column + ": " + e.message
      : e.message;
  }
    $(document).on('keydown', '#contentbox', function(e) { 
    var keyCode = e.keyCode || e.which; 

    if (keyCode == 9) {

      e.preventDefault();
      go();
    }
  
  });


	function go() {
					
	  var input = $("#contentbox").val();
	  var output;
	  try {

 
	   	var response = scissr.transform(input);

      console.log(response);

      renderOutput(response);
      
	  }
	  catch(err) {
	   	console.log(err.message);
      $output.html(err.message);
	  }
	  //  showTree(output);
	}

  function format(obj, mode) {
    var $this = $(obj),
        $code = $this.html(),
        $unescaped = $('<div/>').html($code).text();
    $this.empty();
    CodeMirror.fromTextArea(document.getElementById("output"), {
      //value: $unescaped,
      mode: mode,
      lineNumbers: !$this.is('.inline'),
     // readOnly: true
    });
  }

  function resolveFormat(response){
    var type = response.header.generator;
    var obj = {};
    var content = response.body;

    if (type == "json") {
      content = vkbeautify.json(content,4);
      obj.mode = "javascript"
    }
    if (type == "xml") {
      obj.mode = "text/html"
      content = vkbeautify.xml(content,4);
    }

    obj.body = content;

    return obj;
  }

  function renderOutput(response){

    var obj = resolveFormat(response);

  //  debugger;//
    
    $output.html("");

   var myCodeMirror = CodeMirror($output[0], {
  value: obj.body,
  indentWithTabs:true,
  mode:  obj.mode
});



  }

  
});