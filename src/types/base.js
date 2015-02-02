define(function(){
	return [
		{
			name: "object",
			type: "object",
			resolve: function(data){
				return null;
			}
		},
		{
			name: "string",
			type: "string",
			resolve: function(data){
				return "Random string";
			}
		},
		{
			name: "int",
			type: "int",
			resolve: function(data){
				return 20;
			}
		},
	];
});