module.exports = function(config) {
  config.set({
    frameworks: ['jasmine','amdefine'],
    files: [
      'src/*.js',
      'spec/*.spec.js'
    ]
  });
};