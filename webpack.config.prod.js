const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    ...base, // 将base拷贝过来, 一样的属性名, 则会覆盖base
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
    },
    plugins: [...base.plugins
        , new MiniCssExtractPlugin({
        filename: 'index.[contenthash].css',
        chunkFilename: '[id].css',
    }),],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        },
                    },
                    'css-loader',
                ],
            },
        ],
    },
};


