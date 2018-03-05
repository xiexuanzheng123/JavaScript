const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: [
            'babel-polyfill',
            './src/js/class/constructor.js'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: '/dist/',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|browser_components)/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-css',
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: '你不知道的javascript',
            hash: true,
            chunks: ['index'],
            filename: 'index.html',
            template: './index.html',
            favicon: './src/images/timg.jpg'
        })
    ],
    resolve: {
        extensions: ['.js', '.json']
    }
}