var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },

  // For unit test
  test: {
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
        },
        {
          test: /\.spec.js$/,
          loaders: ['babel'],
          include: path.join(__dirname, 'test')
        }
      ]
    }
  }
};
