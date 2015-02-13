define(function(){
	return {
		name: "age",
		type: "int",
		resolve: function(node){
			return Math.floor((Math.random() * 100) + 10);
		}
	}
});
