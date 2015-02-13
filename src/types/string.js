define(['text!dictionary'], function (dictionaryString) {
	function resolve(){
		var index = Math.floor((Math.random() * 99) + 1);
		
		var dictionary = JSON.parse(dictionaryString)

		return dictionary.words[index];
	}
	return {
		name: "string",
		resolve: resolve
	}
});