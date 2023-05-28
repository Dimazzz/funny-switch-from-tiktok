const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            // {
            //     test: /\.(png|jpe?g|gif|jp2|webp|mp4)$/,
            //     loader: 'file-loader',
            // },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.css',
        }),
        new HtmlWebpackPlugin({
            title: "Funny switch", filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
};
