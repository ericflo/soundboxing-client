var path = require('path');

module.exports = {
  entry: './lib/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'soundboxing-client',
    libraryTarget: 'umd',
  },
  node: {
    fs: 'empty',
  },
};
