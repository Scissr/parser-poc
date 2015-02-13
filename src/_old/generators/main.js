var moduleA = require('modA'),
    moduleB = require('modB');


 function main () {
 	
 	var msg1 = moduleA.sayHello();
 	var msg2 = moduleB.alsoSayHello();

 	console.info("1: " + msg1);
 	console.info("2: " + msg2);
 }

 exports.modMain = main;