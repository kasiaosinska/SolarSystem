const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./dev/app.jsx', './dev/main.scss'],
    output: {
        filename: 'output/out.js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['style-loader', 'css-loader'])
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'output/style.css',
            allChunks: true
        })
    ]
};