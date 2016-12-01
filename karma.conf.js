const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    files: [
      'webpack.tests.js'
    ],
    preprocessors: {
      'webpack.tests.js': ['webpack']
    },
    frameworks: ['jasmine'],
    reporters: ['progress'],
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    browsers: ['PhantomJS'],
    webpack: webpackConfig.test,
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-phantomjs-launcher')
    ]
  });
};
