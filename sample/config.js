//requirejs(['config']);

requirejs.config({
	nodeRequire: require,
    baseUrl: '../src',
    paths: {
        'parser': './core/scissr-parser',
        'generator': './core/scissr-generator',
        'scissr': './main',
        'dictionary':'./types/dictionary.json',
        'text': '../node_modules/requirejs-text/text'

    }
});