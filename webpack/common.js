const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: ['jquery', 'lodash'],
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'assets/js/[name].[chunkhash].js',
        publicPath: '/',
    },

    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin()],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },

            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },

            {
                test: /\.sass$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },

            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
