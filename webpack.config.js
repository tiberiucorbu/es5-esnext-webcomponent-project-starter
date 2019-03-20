const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  context: __dirname,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/es-next'),
  },
    devtool: "inline-source-map",
    resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader'}],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ]
};
