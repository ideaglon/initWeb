const path = require('path');
const publicPath = '/';
const buildPath = 'dist';
var webpack = require('webpack');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    entry: {
        page1: './src/pages/page1/index.js',
        page2: './src/pages/page2/index.js',
    },
    output: {
        publicPath: publicPath, //服务器根路径
        path: path.resolve(__dirname, buildPath),
        filename: '[name].js'
    },
    devtool: 'source-map',
    devServer: {
        publicPath: publicPath,
        contentBase: path.resolve(__dirname, buildPath)
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                use: ['file-loader']
            },
            {
                test: /\.(png|jpg)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.RuntimeChunkPlugin({
            name: "common"
        }),
        new TransferWebpackPlugin([{
            from: 'html'
        }])
    ]
};