var requirejs = require('requirejs');



// set up require.js to play nicely with the test environment
requirejs.config({
	//nodeRequire: require,
    baseUrl: '../src',
    paths: {
        'parser': './core/scissr-parser',
        'generator': './core/scissr-generator',
        'main': './main',
        'text': '../node_modules/requirejs-text/text'

    }
});

