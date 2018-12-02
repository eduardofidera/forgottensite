// entry point and output points
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {
    entry: './client/src/app.js',
    output: {
        path: path.join(__dirname, '/client/public'),
        filename: 'bundle.js'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      })
    ],
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: [
                /node_modules/
            ]
        }, {
            test: /\.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'eval-cheap-source-map',
    devServer: {
        contentBase: path.join(__dirname, '/client/public')
    }
};