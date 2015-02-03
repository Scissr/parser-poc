require(['scissr-parser','config'], function(scissrParser,config){

	function buildErrorMessage(e) {
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

    var scissr = new scissrParser(config);
	   	output = scissr.parse(input);
	  }
	  catch(err) {
	   	output = buildErrorMessage(err);
	  }
	    showTree(output);
	}

  function format(obj) {
    var $this = $(obj),
        $code = $this.html(),
        $unescaped = $('<div/>').html($code).text();
    $this.empty();
    CodeMirror(obj, {
      value: $unescaped,
      mode: 'javascript',
      lineNumbers: !$this.is('.inline'),
      readOnly: true
    });
  }

  function showTree(tree) {
    var value = JSON.stringify(tree, null, "\t");
    var $jsontree = $("#jsontree");
    $jsontree.html(value);
    format($jsontree[0]);
  }
});