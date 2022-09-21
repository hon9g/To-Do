const commonConfig = require("./webpack/webpack.common.js");

const { merge } = require("webpack-merge");
const argv = require("yargs").argv;

module.exports = () => {
  const envConfig = require(`./webpack/webpack.${argv.env}.js`);
  return merge(commonConfig, envConfig);
};
