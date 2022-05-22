const config = require('./.babelrc.common.js');
config.presets.push('@babel/reset-env');
module.exports = config;
