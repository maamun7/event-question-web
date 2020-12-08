const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                        },
                    },
                    'postcss-loader',
                ],
            },

            {
                test: /\.sass$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },

            {
                test: /\.(png|jpe?g|webp|git|svg|)$/i,
                use: [
                    {
                        loader: 'img-optimize-loader',
                        options: {
                            name: 'assets/images/[contenthash].[ext]',
                            compress: {
                                optipng: {
                                    optimizationLevel: 4,
                                },
                                pngquant: {
                                    quality: [0.2, 0.8],
                                },
                                webp: {
                                    quality: 100,
                                },
                                svgo: true,
                                gifsicle: {
                                    optimizationLevel: 3,
                                },
                                mozjpeg: {
                                    progressive: true,
                                    quality: 60,
                                },
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/styles/[name].[contenthash].css',
            chunkFilename: '[id].css',
        }),
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});
