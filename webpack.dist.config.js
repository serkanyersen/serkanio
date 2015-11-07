var config = require('./webpack.config.js');
var webpack = require('webpack');

// Remove dev properties
config.cache = false;
config.devtool = null;
config.devServer = null;
config.watch = false;
config.stats = {
    colors: true,
    reasons: false
};

config.plugins = config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
]);

module.exports = config;