// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/sinonjs/sinon.js',
      'bower_components/moment/moment.js',
      'bower_components/underscore/underscore.js',
      'bower_components/angular-local-storage/dist/angular-local-storage.js',
      'bower_components/jasmine-sinon/lib/jasmine-sinon.js',
      'src/*.coffee',
      'test/spec/**/test_support.coffee',
      'test/spec/**/*.coffee',
    ],
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    plugins: [
      'karma-jasmine',
      'karma-coffee-preprocessor',
      'karma-chrome-launcher'
    ],
    singleRun: false,
    preprocessors: { '**/*.coffee': ['coffee'] }
  });
};
