var config = require('./webpack.base.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Use the extract text plugin to get a separate css file
config.module.rules[0].use = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader']
});

config.plugins.push(new ExtractTextPlugin('./bundle.css'));

module.exports = config;
