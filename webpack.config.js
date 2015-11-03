'use strict';
require('es6-promise').polyfill();
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.scss', '.html']
	},
	
	devServer: {
    	contentBase: 'app/',
        historyApiFallback: true
    },
	
	entry: './app/index.ts',
	
	output: {
		path: __dirname + '/app/dist/',
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	target: 'web',
	devtool: 'inline-source-map',
	module: {
        loaders: [{
			test:   /\.scss$/,
			loader: ExtractTextPlugin.extract('style-loader', '!css?sourceMap!sass?sourceMap')
		}, {
			test: /\.sass$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css!sass?indentedSyntax&sourceMap')
		}, {
			test: /\.ts$/,
			loader: 'ts-loader'
		},{
			test: /\.html$/,
			loader: 'html'
		}]
    },
	plugins: [
		new ExtractTextPlugin('bundle.css', { allChunks: true })
	]
}