// entry point and output points

const path = require('path');

module.exports = {
    entry: './client/src/app.js',
    output: {
        path: path.join(__dirname, '/client/public'),
        filename: 'bundle.js'
    },
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
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, '/client/public')
    }
};