if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(function(){
	return [
		{
			name: "object",
			type: "object",
			resolve: function(node){
				return null;
			}
		},
		{
			name: "string",
			type: "string",
			resolve: function(node){
				return "Random string";
			}
		},
		{
			name: "int",
			type: "int",
			resolve: function(node){
				return 20;
			}
		},
	];
});