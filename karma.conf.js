const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    files: [
      'test/test.js'
    ],

    frameworks: ['jasmine'],

    preprocessors: {
      'test/test.js': ['webpack']
    },

    reporters: ['progress'],

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    concurrency: Infinity,

    browsers: ['PhantomJS'],

    webpack: {
      module: webpackConfig.module
    },

    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      new webpack.HotModuleReplacementPlugin(),
    ]
  });
};
