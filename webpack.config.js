const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = {
    entry: {
        'bundle': [path.resolve(__dirname, 'src/index.ts')],
        'loader': [path.resolve(__dirname, 'src/loader.ts')]
    },
    context: __dirname,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "source-map",
    mode: "development",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [{test: /\.tsx?$/, loader: 'ts-loader'}],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ],
    devServer: {
        headers: {
            'Service-Worker-Allowed': '/'
        },
        port: 80
    }
};
