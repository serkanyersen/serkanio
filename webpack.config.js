'use strict';
require('es6-promise').polyfill();

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
		path: __dirname,
		filename: 'dist/bundle.js'
	},
	
	module: {
        loaders: [{
			test:   /\.scss$/,
			loader: 'style!css!sass'
		}, {
			test: /\.sass$/,
			loader: 'style!css!sass?indentedSyntax'
		}, {
			test: /\.ts$/,
			loader: 'ts-loader'
		},{
			test: /\.html$/,
			loader: 'html'
		}]
    },
}