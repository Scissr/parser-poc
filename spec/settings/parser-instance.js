if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([], 
	function(baseTypes){
		var config = require('./config'),
      		scissr = require('../../src/scissr-parser');
      		return new scissr(config);
	}
);