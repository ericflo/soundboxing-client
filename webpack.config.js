var path = require('path');
var webpack = require('webpack');
//const Uglify = require('uglifyjs-webpack-plugin');

module.exports = [
  {
    entry: './lib/index.js',
    target: 'web',
    mode: 'none',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'lib.web.js',
      library: 'soundboxing-client',
      libraryTarget: 'umd',
    },
    plugins: [
      /*new Uglify()*/
    ],
  },
  {
    entry: './lib/index.js',
    target: 'node',
    mode: 'none',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'lib.node.js',
      library: 'soundboxing-client',
      libraryTarget: 'umd',
    },
    plugins: [],
  },
];
