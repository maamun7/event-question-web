const path = require('path');
const { merge } = require('webpack-merge');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const common = require('./common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'assets/js/[name].[chunkhash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[contenthash].[ext]',
                },
            },
        ],
    },
    devServer: {
        inline: true,
        contentBase: '../dist',
        host: '127.0.0.1',
        port: 1234,
        open: true,
    },
});
