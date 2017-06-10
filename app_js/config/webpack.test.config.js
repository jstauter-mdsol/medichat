let config = require('./webpack.base.config');

// remove commons chunk plugin
config.plugins.pop();

module.exports = config;
