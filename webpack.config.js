const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: {
        'bundle': [path.resolve(__dirname, 'src/index.ts')],
        'polyfills': ['core-js']
    },
    context: __dirname,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/es-next'),
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [{test: /\.tsx?$/, loader: 'ts-loader'}],
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ]
};
