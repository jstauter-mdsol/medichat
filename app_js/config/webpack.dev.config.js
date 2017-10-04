let config = require('./webpack.base.config.js');
let webpack = require('webpack');
let port = process.env.WEBPACK_PORT || 8000;

config.devtool = '#cheap-inline-source-map';

config.devServer = {
  port: port,
  inline: true,
  hot: true,
  publicPath: `http://localhost:${port}/assets/`,
  overlay: true,
  stats: 'minimal',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
};

config.output.publicPath = `http://localhost:${port}/assets/`;
config.plugins.push(new webpack.NamedModulesPlugin());

module.exports = config;
