const path = require("path");
const createWebpackConfig = require("nice-scripts");

const webpackConfig = createWebpackConfig(__dirname);

webpackConfig.module.loaders.push({
  test: /\.md$/,
  use: [
    { loader: 'html-loader' },
  ]
});

module.exports = webpackConfig;