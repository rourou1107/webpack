const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js', // 需要打包的js文件的路径
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: '肉肉',
        template: 'src/assets/index.html'
    })]
};


