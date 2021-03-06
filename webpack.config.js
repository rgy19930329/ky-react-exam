const createWebpackConfig = require("ky-nice-scripts");

const webpackConfig = createWebpackConfig(__dirname);

webpackConfig.module.loaders.push({
  test: /\.md$/,
  use: [
    { loader: 'html-loader' },
  ]
});

module.exports = webpackConfig;