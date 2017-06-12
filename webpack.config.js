const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./dev/app.jsx', './dev/main.scss'],
    output: {
        filename: 'output/out.js'
    },
    devServer: {
        inline:	true,
        contentBase: './',
        port: 3001
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
                loader: ExtractTextPlugin.extract(['css-loader','resolve-url-loader', 'sass-loader'])
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader?publicPath=../&name=output/fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'file-loader?publicPath=../&name=output/images/[name].[ext]'
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